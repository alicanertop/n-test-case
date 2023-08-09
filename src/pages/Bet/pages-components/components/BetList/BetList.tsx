/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-bind */
import List from 'react-virtualized/dist/es/List'

import { state } from '../../context'
import { BetListItem } from '../BetListItem/BetListItem'

export function BetList() {
  const bets = state.bets.value

  function rowRenderer({ key, index }: any) {
    const bet = bets[index]
    return (
      <div key={key}>
        <BetListItem key={bet.C} bet={bet} />
      </div>
    )
  }

  return (
    <div className="mt-[56px]">
      <List
        width={document.body.clientWidth}
        height={1080}
        rowCount={bets.length}
        rowHeight={20}
        rowRenderer={rowRenderer}
      />
    </div>
  )
}
