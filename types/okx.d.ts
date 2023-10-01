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

export const isTickerUpdateEvent = (
  event: WsDataEvent
): event is TickerUpdateEvent => {
  return event.arg.channel === "tickers";
};

export const isPositionUpdateEvent = (
  event: WsDataEvent
): event is PositionUpdateEvent => {
  return event.arg.channel === "positions";
};

export const isOrderUpdateEvent = (
  event: WsDataEvent
): event is OrderUpdateEvent => {
  return event.arg.channel === "orders";
};
