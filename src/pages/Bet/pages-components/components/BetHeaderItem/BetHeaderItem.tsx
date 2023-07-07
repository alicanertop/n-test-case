import { CSSProperties, ReactNode } from 'react'

type IBetColumn = { children?: ReactNode; parentStyle?: CSSProperties }
export function BetHeaderItem({ children, parentStyle }: IBetColumn) {
  return (
    <div className="flex flex-col" style={{ width: '73px', ...parentStyle }}>
      <div className="flex items-center border-black border-r-2 min-h-[56px]">
        <div className="w-full">{children}</div>
      </div>
    </div>
  )
}
