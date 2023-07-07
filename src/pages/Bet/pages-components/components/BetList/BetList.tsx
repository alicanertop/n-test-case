import { useCallback, useRef, useState } from 'react'

import { useIntersectionObserver } from 'hooks'
import { IBet } from 'types'

import { useCtxState } from '../../context'
import { BetListItem } from '../BetListItem/BetListItem'

const perIndexCount = 10

export function BetList() {
  const bets = useCtxState('bets')

  const currentIndex = useRef<number>(0)
  const [currentBets, setCurrentBets] = useState<IBet[]>([])

  const onIntersect = useCallback(
    (intersectionObserverEntry: IntersectionObserverEntry[]) => {
      if (!bets.length || !intersectionObserverEntry[0].isIntersecting) return
      currentIndex.current = Math.min(++currentIndex.current, bets.length / perIndexCount)
      setCurrentBets(bets.slice(0, Math.min(perIndexCount * currentIndex.current)))
    },
    [bets]
  )

  const [intersecRef] = useIntersectionObserver({ onIntersect })

  return (
    <>
      <div className="mt-[56px]">
        {currentBets.map((bet) => (
          <BetListItem key={bet.C} bet={bet} />
        ))}
      </div>
      <div ref={intersecRef} />
    </>
  )
}
