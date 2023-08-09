import { CSSProperties, ReactNode } from 'react'

import { IBet, IOC, IOCG } from 'types'

import { ctxDispatch, state } from '../../context'
import { getOCData } from '../../utils'

type IBetColumn = {
  topElement?: ReactNode
  bottomElement?: ReactNode
  parentStyle?: CSSProperties
  OCG?: Record<string, IOCG>
  OCGKey?: string
  OCKey?: string
  customOC?: IOC
  bet?: IBet
}
export function BetColumn(
  { topElement, bottomElement, OCG, OCGKey, OCKey, bet, customOC, parentStyle }: IBetColumn
) {
  const OCData = OCG && OCGKey && OCKey ? getOCData(OCG, OCGKey, OCKey) : customOC ?? undefined

  const isSelected = () => {
    const selectedOCKey = state.couponItems.value.find((couponItem) => couponItem.C === bet?.C)?.OC
      .ID

    return Boolean(
      ((selectedOCKey === OCKey || customOC?.ID === OCKey) && OCKey) ||
        (customOC?.ID === selectedOCKey && customOC)
    )
  }

  const selectOodRatio = () => {
    if (!bet || !OCData) return
    ctxDispatch.HANDLE_COUPON_ITEM({ OC: OCData, C: bet.C, N: bet.N })
  }

  return (
    <div className="flex flex-col" style={{ width: '75px', ...parentStyle }}>
      <div className="flex pr-1 border-black border-r-2 h-[24px] w-full">
        {customOC?.N || OCData?.N ? (
          <div className="w-full flex justify-center items-center">
            <div>{customOC?.N || OCData?.N}</div>
          </div>
        ) : (
          topElement
        )}
      </div>
      <div
        className={`flex items-center pr-1 border-black border-r-2 border-t-2 border-b-2 min-h-[56px] w-full ${
          bet ? 'cursor-pointer' : ''
        }`}
        style={isSelected() ? { backgroundColor: 'yellow' } : {}}
        onClick={selectOodRatio}>
        {customOC?.O || OCData?.O ? (
          <div className="w-full flex justify-center">
            <div>{customOC?.O || OCData?.O}</div>
          </div>
        ) : (
          bottomElement
        )}
      </div>
    </div>
  )
}
