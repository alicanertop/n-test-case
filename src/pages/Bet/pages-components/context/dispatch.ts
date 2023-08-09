import { IBet } from 'types'
import { ICouponItems } from 'types/ICouponItems'

import { state } from './state'

export const dispatch = {
  LOAD_BETS: (bets: IBet[]) => {
    const currentState = state
    currentState.bets.value = bets
    currentState.betsCount.value = bets.length
    return state
  },
  HANDLE_COUPON_ITEM: (currentCouponItem: ICouponItems) => {
    const curState = state
    const $couponItems = [...curState.couponItems.value]
    const findedCouponIndex = $couponItems.findIndex(
      (couponItem) => couponItem.C === currentCouponItem.C
    )
    if (findedCouponIndex !== -1) {
      const findedCouponItem = $couponItems[findedCouponIndex]
      if (currentCouponItem.OC.ID === findedCouponItem.OC.ID) {
        $couponItems.splice(findedCouponIndex, 1)
      } else {
        $couponItems.splice(findedCouponIndex, 1, currentCouponItem)
      }
    } else {
      $couponItems.push(currentCouponItem)
    }
    state.couponItems.value = $couponItems
    return curState
  }
}
