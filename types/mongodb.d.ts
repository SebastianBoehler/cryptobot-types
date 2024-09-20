import { Position } from "./orderHelper";

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

export interface TimeAndCloseCandle {
  start: Date;
  close: number;
  volume: number;
}

export interface DatabaseType {
  start: Date;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

export interface BacktestingResult {
  trades: number;
  identifier: string;
  name: string;
  startCapital: number;
  symbol: string;
  margin: number;
  pnl: number;
  winRatio: number;
  stringifiedFunc: string;
  time: Date;
  start: Date;
  end: Date;
  pnl_pct: number;
  hodl_pct: number;
  liquidations: number;
  exchange: string;
  hodl_ratio: number;
  maxDrawdown: number;
  sharpeRatio: number;
  sortinoRatio: number;
  calmarRatio: number;
  maxConsecutiveLosses: number;
  annualizedReturn: number;
  //TODO: not present anymore but keep it for now for compatibility
  orders?: (CloseOrder | Order)[];
  // to make easier changes, remove it when done
  [key: string]: unknown;
}

export interface MongoLivePosition extends Position {
  posId: string;
  env: string;
  realizedPnlUSD: number;
  unrealizedPnlUSD: number;
  strategy: {
    name: string;
    startCapital: number;
    multiplier: number;
  };
  profitUSD: number;
  exchange: string;
  accHash: string;
  timestamp: Date;
}

export interface TraderAction {
  symbol: string;
  posId: string;
  accHash: string;
  time: Date;
  price: number;
  action: string;
  prev: string | number;
  after: string | number;
}
