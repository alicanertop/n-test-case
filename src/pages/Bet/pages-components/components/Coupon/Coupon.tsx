import { useMemo } from 'react'

import { useCtxState } from '../../context'

export function Coupon() {
  const couponItems = useCtxState('couponItems')
  const total = useMemo(
    () =>
      couponItems.reduce(
        ($total, couponItem) => Number((Number(couponItem.OC.O) * $total).toFixed(2)),
        1
      ),
    [couponItems]
  )
  if (!couponItems.length) return

  return (
    <div className="fixed bottom-0 right-0 w-50 h-50 bg-white border-2 p-3 w-2/8">
      {couponItems.map((couponItem) => (
        <div className="flex border-black border-b-2 py-2" key={couponItem.C}>
          <div>{couponItem.OC.MBS}</div>
          <div className="px-2">Kod: {couponItem.C}</div>
          <div>Maç: {couponItem.N}</div>
          <div className="pl-2 font-bold">Oran: {couponItem.OC.O}</div>
        </div>
      ))}

      <div className="pl-2 font-bold">Toplam Tutar: {total} ₺</div>
    </div>
  )
}
