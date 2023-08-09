import { signal } from '@preact/signals-react'

import { IBet } from 'types'
import { ICouponItems } from 'types/ICouponItems'

export const state = {
  bets: signal([] as IBet[]),
  betsCount: signal(0),
  text: signal(''),
  couponItems: signal([] as ICouponItems[])
}


