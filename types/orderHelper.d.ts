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
  UID: string;
}

interface OptionalPositionInfo {
  lowestPrice?: number;
  highestPrice?: number;
  maxDrawdown?: number;
  [key: string]: any;
}

export interface Position extends BasePosition, OptionalPositionInfo {
  unrealizedPnlUSD: number;
  unrealizedPnlPcnt: number;
  posSide: PositionSide;
}
