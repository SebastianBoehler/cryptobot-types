interface BasePosition {
  symbol: string
  type: 'long' | 'short'
  ctSize: number
  margin: number
  leverage: number
  avgEntryPrice: number
  liquidationPrice: number
  fee: number
  orders: (Order | CloseOrder)[]
  amountUSD: number
}

export interface Position extends BasePosition {
  unrealizedPnlUSD: number
  unrealizedPnlPcnt: number
}

export interface ClosedPosition extends BasePosition {
  realizedPnlUSD: number
  realizedPnlPcnt: number
  identifier: string
}

export interface BaseOrder {
  ordId: string
  avgPrice: number
  fee: number
  amountUSD: number
  size: number
  time: Date
}

export interface Order extends BaseOrder {
  action: 'open'
}

export interface CloseOrder extends Pick<Order, Exclude<keyof Order, 'action'>> {
  action: 'close'
  bruttoPnlUSD: number
}
