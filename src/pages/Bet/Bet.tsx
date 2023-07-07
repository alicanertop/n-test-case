import { BetContainer } from './pages-components/components/BetContainer/BetContainer'
import { CtxProvider } from './pages-components'

export function Bet() {
  return (
    <CtxProvider>
      <BetContainer />
    </CtxProvider>
  )
}
