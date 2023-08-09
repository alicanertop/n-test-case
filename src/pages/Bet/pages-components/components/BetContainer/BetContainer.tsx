import { useEffect } from 'react'

import { API_URLS } from 'config/api'
import { instance } from 'services/axios'

import { ctxDispatch, state, useCtxState } from '../../context'
import { BetList } from '../BetList/BetList'
import { BetListHeader } from '../BetListHeader/BetListHeader'
import { Coupon } from '../Coupon/Coupon'

function NewFunction() {
  return <div className="absolute top-0 z-30">{state.betsCount}</div>
}

export function BetContainer() {
  const betsCount = useCtxState(($state) => $state.betsCount)

  useEffect(() => {
    instance.get(API_URLS.bets).then(({ data }) => ctxDispatch.LOAD_BETS(data))
  }, [])

  return (
    <>
      <BetListHeader betCount={betsCount as unknown as number} />
      <NewFunction />
      <BetList />
      <Coupon />
    </>
  )
}
