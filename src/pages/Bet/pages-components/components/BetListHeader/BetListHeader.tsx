import { BetHeaderItem } from '../BetHeaderItem/BetHeaderItem'

export function BetListHeader({ betCount }: { betCount: number }) {
  return (
    <div className="flex text-center fixed bg-gray-400 top-0">
      <BetHeaderItem parentStyle={{ width: '365px' }}>Total Event Count: {betCount}</BetHeaderItem>
      <BetHeaderItem>Yorumlar</BetHeaderItem>
      <BetHeaderItem />

      <BetHeaderItem>1</BetHeaderItem>
      <BetHeaderItem>X</BetHeaderItem>
      <BetHeaderItem>2</BetHeaderItem>

      <BetHeaderItem>Alt</BetHeaderItem>
      <BetHeaderItem>Üst</BetHeaderItem>
      <BetHeaderItem>H1</BetHeaderItem>

      <BetHeaderItem>1</BetHeaderItem>
      <BetHeaderItem>x</BetHeaderItem>
      <BetHeaderItem>2</BetHeaderItem>
      <BetHeaderItem>H2</BetHeaderItem>

      <BetHeaderItem>X</BetHeaderItem>
      <BetHeaderItem>2</BetHeaderItem>
      <BetHeaderItem>2</BetHeaderItem>

      <BetHeaderItem>Var</BetHeaderItem>
      <BetHeaderItem>Yok</BetHeaderItem>
      <BetHeaderItem>99</BetHeaderItem>
    </div>
  )
}
