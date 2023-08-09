import { createContext } from 'services/createContext'

import { dispatch } from './dispatch'
import { state } from './state'

export * from './state'

const { CtxProvider, useCtxState } = createContext(state)
export { dispatch as ctxDispatch, CtxProvider, useCtxState }
