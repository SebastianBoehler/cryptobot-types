import { Candle } from "./mongodb";

export interface Indicators {
  granularity: number;
  ema_8: number;
  ema_13: number;
  ema_21: number;
  ema_55: number;
  ATR: number;
  RSI: number;
  candle: Candle;
  //vwap: number;
  HA: {
    o: number;
    c: number;
    h: number;
    l: number;
  };
  volumeProfile: {
    buckets: number[];
    poc: { low: number; high: number } | null;
  };
  // for the sacke of easy to add more indicators
  [key: string]: any;
}
