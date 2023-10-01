import { Candle } from './mongodb'

export interface Indicators {
  granularity: number
  ema_8: number
  ema_13: number
  ema_21: number
  ema_55: number
  bollinger_bands: {
    upper: number
    middle: number
    lower: number
  }
  MACD: {
    macd: number
    emaFast: number
    emaSlow: number
    signal: number
    histogram: number
  }
  vol: number
  RSI: number
  ADX: { adx: number; pdi: number; mdi: number }
  ATR: number
  ATR_percent: number
  candle: Candle
  stochRSI: { k: number; d: number }
  HA: {
    o: number
    c: number
    h: number
    l: number
  }
  CCI: number
  ChaikinOS: number
  ROC: number
  PSAR: number
  OBV: undefined | number
  OBV_RSI: number
  OBV_SMA: number
  VWAP: undefined | number
  VWAP_deviation: {
    basis: number
    upperDeviation2: number
    upperDeviation3: number
    lowerDeviation2: number
    lowerDeviation3: number
  }
  avgCandleSize: number
}
