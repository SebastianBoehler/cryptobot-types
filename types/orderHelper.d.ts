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
}

interface OptionalPositionInfo {
  lowestPrice?: number;
  highestPrice?: number;
}

export interface Position extends BasePosition, OptionalPositionInfo {
  unrealizedPnlUSD: number;
  unrealizedPnlPcnt: number;
}

export interface ClosedPosition extends BasePosition, OptionalPositionInfo {
  realizedPnlUSD: number;
  realizedPnlPcnt: number;
  identifier: string;
}

export interface BaseOrder {
  ordId: string;
  avgPrice: number;
  fee: number;
  margin: number;
  lever: number;
  size: number;
  time: Date;
}

export interface Order extends BaseOrder {
  action: "open";
}

export interface CloseOrder
  extends Pick<Order, Exclude<keyof Order, "action">> {
  action: "close";
  bruttoPnlUSD: number;
}
