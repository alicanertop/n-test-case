import { IBet } from 'types'
import { ICouponItems } from 'types/ICouponItems'

export type IInitialState = {
  bets: IBet[]
  betsCount: number
  couponItems: ICouponItems[]
}

export type IAction =
  | { type: 'LOAD_BETS'; payload: IBet[] }
  | { type: 'HANDLE_COUPON_ITEM'; payload: ICouponItems }
