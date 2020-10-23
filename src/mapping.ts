import { BigInt, BigDecimal, log } from '@graphprotocol/graph-ts'

import {
  Futureswap,
  AddCollateral,
  IncentivesCallFailed,
  TradeClose,
  TradeLiquidate,
  TradeOpen,
} from "../generated/Futureswap/Futureswap";
import {
  Trade,
  ClosedTrade,
  OpenedTrade,
  AddedCollateral,
  LiquidatedTrade,
} from "../generated/schema";

export function handleAddCollateral(event: AddCollateral): void {
  const id = event.address
    .toHexString()
    .concat("-")
    .concat(event.params.tradeId.toString());

  let addedCollateral = new AddedCollateral(id);

  addedCollateral.tradeId = event.params.tradeId;
  addedCollateral.trader = event.params.trader;
  addedCollateral.addedCollateral = event.params.addedCollateral;
  addedCollateral.timestamp = event.block.timestamp.toI32();

  addedCollateral.save();

  // // Entities can be loaded from the store using a string ID; this ID
  // // needs to be unique across all entities of the same type
  // let entity = ExampleEntity.load(event.transaction.from.toHex())

  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (entity == null) {
  //   entity = new ExampleEntity(event.transaction.from.toHex())

  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }

  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)

  // // Entity fields can be set based on event parameters
  // entity.tradeId = event.params.tradeId
  // entity.trader = event.params.trader

  // // Entities can be written to the store with `.save()`
  // entity.save()

  // // Note: If a handler doesn't require existing field values, it is faster
  // // _not_ to load the entity from the store. Instead, create it fresh with
  // // `new Entity(...)`, set the fields that should be updated and save the
  // // entity back to the store. Fields that were not set or unset remain
  // // unchanged, allowing for partial updates to be applied.

  // // It is also possible to access smart contracts from mappings. For
  // // example, the contract that has emitted the event can be connected to
  // // with:
  // //
  // // let contract = Contract.bind(event.address)
  // //
  // // The following functions can then be called on this contract to access
  // // state variables and other data:
  // //
  // // - contract.tradeIdToTrade(...)
}

// export function handleIncentivesCallFailed(event: IncentivesCallFailed): void {
//   // tradeId
// }

export function handleTradeClose(event: TradeClose): void {
  const id = event.address
    .toHexString()
    .concat("-")
    .concat(event.params.tradeId.toString());

  let tradeClosed = new ClosedTrade(id);

  tradeClosed.tradeId = event.params.tradeId;
  tradeClosed.trader = event.params.trader;
  tradeClosed.isLong = event.params.isLong;
  tradeClosed.referral = event.params.referral;
  tradeClosed.percentToClose = event.params.percentToClose;
  tradeClosed.assetMarketPrice = event.params.assetMarketPrice;
  tradeClosed.stablePrice = event.params.stablePrice;
  tradeClosed.assetOpenPrice = event.params.assetOpenPrice;
  tradeClosed.assetRedemptionAmount = event.params.assetRedemptionAmount;
  tradeClosed.isLiquidated = event.params.isLiquidated;
  tradeClosed.timestamp = event.block.timestamp.toI32();

  tradeClosed.save();

 
  let trade = new Trade(id);

  trade.tradeId = event.params.tradeId;
  trade.trader = event.params.trader;
  trade.tradeValue = event.params.assetRedemptionAmount
  trade.isOpen = false
  trade.isLong =  event.params.isLong;
  trade.timestamp = event.block.timestamp.toI32();

  trade.save();

   

}

export function handleTradeLiquidate(event: TradeLiquidate): void {
  const id = event.address
    .toHexString()
    .concat("-")
    .concat(event.params.tradeId.toString());

  let liquidatedTrade = new LiquidatedTrade(id);

  liquidatedTrade.tradeId = event.params.tradeId;
  liquidatedTrade.trader = event.params.trader;
  liquidatedTrade.liquidator = event.params.liquidator;
  liquidatedTrade.stableToSendLiquidator = event.params.stableToSendLiquidator;
  liquidatedTrade.stableToSendTradeOwner = event.params.stableToSendTradeOwner;
  liquidatedTrade.timestamp = event.block.timestamp.toI32();

  liquidatedTrade.save();
}

export function handleTradeOpen(event: TradeOpen): void {
  
  const id = event.address
    .toHexString()
    .concat("-")
    .concat(event.params.tradeId.toString());

 
  // trade.tradeId = event.params.tradeId;
  // trade.isOpen = true;
  // trade.trader = event.params.trader;
  // trade.isLong = event.params.isLong;
  // trade.collateral = event.params.collateral;
  // trade.leverage = event.params.leverage;
  // trade.assetMarketPrice = event.params.assetMarketPrice;
  // trade.stablePrice = event.params.stablePrice;
  // trade.openFee = event.params.openFee;
  // trade.isLiquidated = false;
  // trade.lastUpdate = event.block.timestamp.toI32();
  // trade.openedAt = event.block.timestamp.toI32();

  // trade.save()

  let tradeOpened = new OpenedTrade(id);

  tradeOpened.tradeId = event.params.tradeId;
  tradeOpened.trader = event.params.trader;
  tradeOpened.leverage = event.params.leverage;
  tradeOpened.collateral = event.params.collateral;
  tradeOpened.openFee = event.params.openFee;
  tradeOpened.assetMarketPrice = event.params.assetMarketPrice;
  tradeOpened.isLong = event.params.isLong;
  tradeOpened.stablePrice = event.params.stablePrice;
  tradeOpened.timestamp = event.block.timestamp.toI32();

  tradeOpened.save();

let trade = new Trade(id);
 
 trade.tradeId = event.params.tradeId;
 trade.trader = event.params.trader;
 trade.tradeValue = event.params.collateral.times(event.params.leverage).div((event.params.assetMarketPrice));
 trade.isOpen = true
 trade.isLong =  event.params.isLong;
 trade.timestamp = event.block.timestamp.toI32();

 trade.save();
 
}
