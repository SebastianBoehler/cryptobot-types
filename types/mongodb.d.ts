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
  orders: (CloseOrder | Order)[];
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
}

export interface LivePosition extends Position {
  posId: string;
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
  timestamp: string;
}
