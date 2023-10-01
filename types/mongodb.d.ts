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

export interface GetBacktestOptions {
  _ids?: string[];
  testedAfter?: string;
  rule?: string;
  minProfit?: number;
  start?: {
    $gt: string;
  };
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
