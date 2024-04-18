import { PositionSide } from "okx-api";
import { Indicators } from "./indicators";

interface BasePosition {
  symbol: string;
  type: "long" | "short";
  ctSize: number;
  margin: number;
  leverage: number;
  avgEntryPrice: number;
  liquidationPrice: number;
  fee: number;
  orders: (Order | CloseOrder)[];
  amountUSD: number;
  accHash: string;
}

interface OptionalPositionInfo {
  lowestPrice?: number;
  highestPrice?: number;
  maxDrawdown?: number;
}

export interface Position extends BasePosition, OptionalPositionInfo {
  unrealizedPnlUSD: number;
  unrealizedPnlPcnt: number;
  posSide: PositionSide;
}

export interface ClosedPosition extends BasePosition, OptionalPositionInfo {
  realizedPnlUSD: number;
  realizedPnlPcnt: number;
  identifier: string;
}

export interface BaseOrder {
  ordId: string;
  posId?: string;
  avgPrice: number;
  fee: number;
  margin: number;
  lever: number;
  size: number;
  time: Date;
  posAvgEntryPrice?: number;
  posValue?: number;
  symbol: string;
  accHash: string;
  indicators?: Indicators[];
}

export interface Order extends BaseOrder {
  action: "open";
}

export interface CloseOrder
  extends Pick<Order, Exclude<keyof Order, "action">> {
  action: "close";
  bruttoPnlUSD: number;
}

//extended order extends T with realizedFee ad realizedPnlUSD
export interface ExtendedOrder<T extends BaseOrder> extends T {
  realizedFee: number;
  realizedPnlUSD: number;
}
