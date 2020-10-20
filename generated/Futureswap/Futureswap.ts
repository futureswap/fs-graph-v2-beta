// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AddCollateral extends ethereum.Event {
  get params(): AddCollateral__Params {
    return new AddCollateral__Params(this);
  }
}

export class AddCollateral__Params {
  _event: AddCollateral;

  constructor(event: AddCollateral) {
    this._event = event;
  }

  get tradeId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get trader(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get addedCollateral(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class IncentivesCallFailed extends ethereum.Event {
  get params(): IncentivesCallFailed__Params {
    return new IncentivesCallFailed__Params(this);
  }
}

export class IncentivesCallFailed__Params {
  _event: IncentivesCallFailed;

  constructor(event: IncentivesCallFailed) {
    this._event = event;
  }

  get tradeId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class TradeClose extends ethereum.Event {
  get params(): TradeClose__Params {
    return new TradeClose__Params(this);
  }
}

export class TradeClose__Params {
  _event: TradeClose;

  constructor(event: TradeClose) {
    this._event = event;
  }

  get tradeId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get trader(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get referral(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get assetMarketPrice(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get stablePrice(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get isLong(): boolean {
    return this._event.parameters[5].value.toBoolean();
  }

  get percentToClose(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get assetOpenPrice(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get assetRedemptionAmount(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get isLiquidated(): boolean {
    return this._event.parameters[9].value.toBoolean();
  }
}

export class TradeLiquidate extends ethereum.Event {
  get params(): TradeLiquidate__Params {
    return new TradeLiquidate__Params(this);
  }
}

export class TradeLiquidate__Params {
  _event: TradeLiquidate;

  constructor(event: TradeLiquidate) {
    this._event = event;
  }

  get tradeId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get trader(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get liquidator(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get stableToSendLiquidator(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get stableToSendTradeOwner(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class TradeOpen extends ethereum.Event {
  get params(): TradeOpen__Params {
    return new TradeOpen__Params(this);
  }
}

export class TradeOpen__Params {
  _event: TradeOpen;

  constructor(event: TradeOpen) {
    this._event = event;
  }

  get tradeId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get trader(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get leverage(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get collateral(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get openFee(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get assetMarketPrice(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get isLong(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }

  get stablePrice(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class Futureswap__tradeIdToTradeResult {
  value0: BigInt;
  value1: BigInt;
  value2: boolean;
  value3: Address;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: boolean,
    value3: Address,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    return map;
  }
}

export class Futureswap extends ethereum.SmartContract {
  static bind(address: Address): Futureswap {
    return new Futureswap("Futureswap", address);
  }

  tradeIdToTrade(_tradeId: BigInt): Futureswap__tradeIdToTradeResult {
    let result = super.call(
      "tradeIdToTrade",
      "tradeIdToTrade(uint256):(uint128,uint128,bool,address,uint128,uint128,uint128)",
      [ethereum.Value.fromUnsignedBigInt(_tradeId)]
    );

    return new Futureswap__tradeIdToTradeResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBoolean(),
      result[3].toAddress(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt()
    );
  }

  try_tradeIdToTrade(
    _tradeId: BigInt
  ): ethereum.CallResult<Futureswap__tradeIdToTradeResult> {
    let result = super.tryCall(
      "tradeIdToTrade",
      "tradeIdToTrade(uint256):(uint128,uint128,bool,address,uint128,uint128,uint128)",
      [ethereum.Value.fromUnsignedBigInt(_tradeId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Futureswap__tradeIdToTradeResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBoolean(),
        value[3].toAddress(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt()
      )
    );
  }
}