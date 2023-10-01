export interface Strategy {
  readonly name: string
  readonly startCapital: number
  update(price: number, indicators: unknown[], time: Date): Promise<void>
}
