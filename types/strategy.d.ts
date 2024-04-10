export interface Strategy {
  readonly name: string;
  readonly startCapital: number;
  readonly requiresIndicators: boolean;
  update(price: number, indicators: unknown[], time: Date): Promise<void>;
}
