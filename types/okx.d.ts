import { WsDataEvent } from "okx-api";

export interface TickerUpdateData {
  instType: string;
  instId: string;
  last: string;
  lastSz: string;
  askPx: string;
  askSz: string;
  bidPx: string;
  bidSz: string;
  open24h: string;
  high24h: string;
  low24h: string;
  sodUtc0: string;
  sodUtc8: string;
  volCcy24h: string;
  vol24h: string;
  ts: string;
}

export interface PositionUpdateData {
  adl: string;
  availPos: string;
  avgPx: string;
  baseBal: string;
  baseBorrowed: string;
  baseInterest: string;
  bizRefId: string;
  bizRefType: string;
  cTime: string;
  ccy: string;
  closeOrderAlgo: string[];
  deltaBS: string;
  deltaPA: string;
  gammaBS: string;
  gammaPA: string;
  imr: string;
  instId: string;
  instType: string;
  interest: string;
  last: string;
  lever: string;
  liab: string;
  liabCcy: string;
  liqPx: string;
  margin: string;
  markPx: string;
  mgnMode: string;
  mgnRatio: string;
  mmr: string;
  notionalUsd: string;
  optVal: string;
  pTime: string;
  pendingCloseOrdLiabVal: string;
  pos: string;
  posCcy: string;
  posId: string;
  posSide: string;
  quoteBal: string;
  quoteBorrowed: string;
  quoteInterest: string;
  spotInUseAmt: string;
  spotInUseCcy: string;
  thetaBS: string;
  thetaPA: string;
  tradeId: string;
  uTime: string;
  upl: string;
  uplRatio: string;
  usdPx: string;
  vegaBS: string;
  vegaPA: string;
}

export interface OrderUpdateData {
  instType: string;
  instId: string;
  tgtCcy: string;
  ccy: string;
  ordId: string;
  clOrdId: string;
  tag: string;
  px: string;
  sz: string;
  notionalUsd: string;
  ordType: string;
  side: string;
  posSide: string;
  tdMode: string;
  fillPx: string;
  tradeId: string;
  fillSz: string;
  fillFee: string;
  fillFeeCcy: string;
  execType: string;
  accFillSize: string;
  fillNotionalUsd: string;
  avgPx: string;
  state: string;
  lever: string;
  tpTriggerPx: string;
  tpTriggerPxType: string;
  tpOrdPx: string;
  slTriggerPx: string;
  slTriggerPxType: string;
  slOrdPx: string;
  feeCcy: string;
  fee: string;
  rebateCcy: string;
  rebate: string;
  pnl: string;
  source: string;
  cancelSource: string;
  amendSource: string;
  category: string;
  uTIme: string;
  cTime: string;
  reqId: string;
  amendResult: string;
  reduceOnly: string;
  quickMgnType: string;
  algoClOrdId: string;
  algoId: string;
  code: string;
  msg: string;
}

export interface BalanceAndPositionUpdateData {
  pTime: string;
  eventType:
    | "snapshot"
    | "delivered"
    | "exercised"
    | "transferred"
    | "filled"
    | "liquidation"
    | "claw_back"
    | "adl"
    | "funding_fee"
    | "adjust_margin"
    | "set_leverage"
    | "interest_deduction";
  balData: {
    ccy: string;
    cashBal: string;
    uTIme: string;
  };
  posData: {
    posId: string;
    tradeId: string;
    instId: string;
    instType: string;
    mgnMode: string;
    posSide: string;
    pos: string;
    ccy: string;
    posCcy: string;
    avgPx: string;
    uTime: string;
  };
  trades: {
    instId: string;
    tradeId: string;
  }[];
}

export type TickerUpdateEvent = Omit<WsDataEvent, "data"> & {
  data: TickerUpdateData[];
  wsKey: string;
};

export type PositionUpdateEvent = Omit<WsDataEvent, "data"> & {
  data: PositionUpdateData[];
  wsKey: string;
};

export type OrderUpdateEvent = Omit<WsDataEvent, "data"> & {
  data: OrderUpdateData[];
  wsKey: string;
};

export type BalanceAndPositionUpdateEvent = Omit<WsDataEvent, "data"> & {
  data: BalanceAndPositionUpdateData[];
  wsKey: string;
};
