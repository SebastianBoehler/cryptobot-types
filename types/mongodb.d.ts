import { Position } from "./orderHelper";
import { OrderType } from "okx-api";

export interface GeneratedCandle {
  open: string;
  high: string;
  low: string;
  close: string;
  volume: number;
  start: Date;
}

export interface Candle {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  start: Date;
}

export interface DatabaseType {
  start: Date;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

export interface TraderAction {
  symbol: string;
  posId: string;
  accHash: string;
  time: Date;
  side: "long" | "short";
  price: number;
  action: string;
  prev: string | number;
  after: string | number;
}

export interface DatabaseCandleType {
  high: string;
  low: string;
  open: string;
  close: string;
  volume: string;
  start: Date;
}

export interface DatabaseOpenOrderType {
  orderId: string;
  clOrdId: string;
  symbol: string;
  status: string;
  type: "open";
  orderType: OrderType;
  direction: "long" | "short";
  size: number;
  price: number;
  fee: number;
  acc: string;
  time: Date;
}

export interface DatabaseClosedOrderType
  extends Omit<DatabaseOpenOrderType, "type"> {
  type: "close";
  pnl: number;
}
