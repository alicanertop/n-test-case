import { IAction, IInitialState } from './types'

export const initialState: IInitialState = {
  bets: [],
  betsCount: 0,
  couponItems: []
}

export function reducer(state: IInitialState, action: IAction): IInitialState {
  switch (action.type) {
    case 'LOAD_BETS': {
      return { ...state, bets: action.payload, betsCount: action.payload.length }
    }
    case 'HANDLE_COUPON_ITEM': {
      const currentCouponItem = action.payload
      const $couponItems = [...state.couponItems]
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

      return { ...state, couponItems: $couponItems }
    }
    default: {
      console.error(`Unsupported action type at reducer`)
      return state
    }
  }
}
