import { CSSProperties, ReactNode } from 'react'

import { IOC, IOCG } from 'types'

import { getOCData } from '../../utils'

type IBetColumn = {
  topElement?: ReactNode
  bottomElement?: ReactNode
  parentStyle?: CSSProperties
  OCG?: Record<string, IOCG>
  OCGKey?: string
  OCKey?: string
  customOC?: IOC
  selectedOCKey?: string
  selectOodRatio?: (OCGKey: string, OCKey: string, customOC?: IOC) => void
}
export function BetColumn({
  topElement,
  bottomElement,
  OCG,
  OCGKey,
  OCKey,
  selectedOCKey,
  selectOodRatio,
  customOC,
  parentStyle
}: IBetColumn) {
  const isSelected =
    ((selectedOCKey === OCKey || customOC?.ID === OCKey) && OCKey) ||
    (customOC?.ID === selectedOCKey && customOC)

  const OCData = OCG && OCGKey && OCKey ? getOCData(OCG, OCGKey, OCKey) : undefined

  const onOodClick = () => {
    if (OCGKey && OCKey) {
      selectOodRatio?.(OCGKey, OCKey)
    } else if (customOC) {
      selectOodRatio?.(customOC.ID, customOC.ID, customOC)
    }
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
          selectOodRatio ? 'cursor-pointer' : ''
        }`}
        style={isSelected ? { backgroundColor: 'yellow' } : {}}
        onClick={onOodClick}>
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
