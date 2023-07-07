import { useState } from 'react'

import { IBet, IOC } from 'types'

import { useCtxDispatch } from '../../context'
import { getOCData } from '../../utils'
import { BetColumn } from '../BetColumn/BetColumn'

const customOC99 = { G: '2', ID: '99', IMF: false, MBS: '4', N: '+99', O: '3', OD: 0 }

export function BetListItem({ bet }: { bet: IBet }) {
  const [selectedOCKey, setselectedOCKey] = useState<string | undefined>(undefined)
  const ctxDispatch = useCtxDispatch()

  const selectOodRatio = (OCGKey: string, OCKey: string, customOC?: IOC) => {
    const ocData = customOC || getOCData(bet.OCG, OCGKey, OCKey)
    ctxDispatch({ type: 'HANDLE_COUPON_ITEM', payload: { OC: ocData, C: bet.C, N: bet.N } })

    if (selectedOCKey === OCKey) {
      setselectedOCKey(undefined)
    } else {
      setselectedOCKey(OCKey)
    }
  }

  return (
    <div className="flex text-center">
      <BetColumn
        parentStyle={{ width: '375px' }}
        topElement={
          <>
            <div>{bet.D}</div>
            <div className="px-1">{bet.DAY}</div>
            <div>{bet.LN}</div>
          </>
        }
        bottomElement={
          <>
            <div className="font-bold">{bet.C}</div>
            <div className="px-1">{bet.T}</div>
            <div>{bet.N}</div>
          </>
        }
      />
      <BetColumn
        topElement={<div className="w-full">Yorumlar</div>}
        bottomElement={<div className="w-full">Yorumlar</div>}
      />
      <BetColumn bottomElement={<div className="w-full">4</div>} />

      <BetColumn
        selectedOCKey={selectedOCKey}
        selectOodRatio={selectOodRatio}
        OCG={bet.OCG}
        OCGKey="1"
        OCKey="0"
      />
      <BetColumn
        selectedOCKey={selectedOCKey}
        selectOodRatio={selectOodRatio}
        OCG={bet.OCG}
        OCGKey="1"
        OCKey="1"
      />
      <BetColumn topElement={<div className="w-full">2</div>} />

      <BetColumn
        selectedOCKey={selectedOCKey}
        selectOodRatio={selectOodRatio}
        OCG={bet.OCG}
        OCGKey="5"
        OCKey="25"
      />
      <BetColumn
        selectedOCKey={selectedOCKey}
        selectOodRatio={selectOodRatio}
        OCG={bet.OCG}
        OCGKey="5"
        OCKey="26"
      />
      <BetColumn topElement={<div className="w-full">H1</div>} />

      <BetColumn topElement={<div className="w-full">1</div>} />
      <BetColumn topElement={<div className="w-full">x</div>} />
      <BetColumn topElement={<div className="w-full">2</div>} />
      <BetColumn topElement={<div className="w-full">H2</div>} />

      <BetColumn
        selectedOCKey={selectedOCKey}
        selectOodRatio={selectOodRatio}
        OCG={bet.OCG}
        OCGKey="2"
        OCKey="3"
      />
      <BetColumn
        selectedOCKey={selectedOCKey}
        selectOodRatio={selectOodRatio}
        OCG={bet.OCG}
        OCGKey="2"
        OCKey="4"
      />
      <BetColumn
        selectedOCKey={selectedOCKey}
        selectOodRatio={selectOodRatio}
        OCG={bet.OCG}
        OCGKey="2"
        OCKey="5"
      />

      <BetColumn topElement={<div className="w-full">Var</div>} />
      <BetColumn topElement={<div className="w-full">Yok</div>} />
      <BetColumn
        selectedOCKey={selectedOCKey}
        selectOodRatio={selectOodRatio}
        customOC={customOC99}
      />
    </div>
  )
}
