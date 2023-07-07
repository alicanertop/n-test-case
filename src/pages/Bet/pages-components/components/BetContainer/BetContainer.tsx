import { useEffect } from 'react'

import { API_URLS } from 'config/api'
import { instance } from 'services/axios'

import { useCtxDispatch, useCtxState } from '../../context'
import { BetList } from '../BetList/BetList'
import { BetListHeader } from '../BetListHeader/BetListHeader'
import { Coupon } from '../Coupon/Coupon'

export function BetContainer() {
  const ctxDispatch = useCtxDispatch()
  const betsCount = useCtxState('betsCount')

  useEffect(() => {
    instance
      .get(API_URLS.bets)
      .then(({ data }) => ctxDispatch({ type: 'LOAD_BETS', payload: data }))
  }, [])

  return (
    <>
      <BetListHeader betCount={betsCount} />
      <BetList />
      <Coupon />
    </>
  )
}
