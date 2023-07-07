import { createContext } from 'services/createContext'

import { initialState, reducer } from './reducer'

const { CtxProvider, useCtxAllState, useCtxDispatch, useCtxState } = createContext(
  reducer,
  initialState
)
export { CtxProvider, useCtxAllState, useCtxDispatch, useCtxState }
