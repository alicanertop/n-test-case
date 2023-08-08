import {
  createContext as createCtx,
  Dispatch,
  PropsWithChildren,
  Reducer,
  useContext,
  useReducer
} from 'react'

export function createContext<StateType, ActionType>(
  reducer: Reducer<StateType, ActionType>,
  initialState: StateType
) {
  const defaultDispatch: Dispatch<ActionType> = () => initialState
  const stateCtx = createCtx(initialState)
  const dispatchCtx = createCtx(defaultDispatch)

  const useCtxAllState = () => useContext(stateCtx)
  const useCtxDispatch = () => useContext(dispatchCtx)

  // /** Only one depth selector for comparison */
  // function useCtxState<K extends keyof StateType>(property: K) {
  //   return useContext(stateCtx)[property]
  // }

  /** Using selector to index data */
  function useCtxState<SO>(selector: (state: StateType) => SO) {
    return selector(useContext(stateCtx))
  }

  function CtxProvider({ children }: PropsWithChildren<{}>) {
    const [state, dispatch] = useReducer<Reducer<StateType, ActionType>>(reducer, initialState)
    return (
      <dispatchCtx.Provider value={dispatch}>
        <stateCtx.Provider value={state}>{children}</stateCtx.Provider>
      </dispatchCtx.Provider>
    )
  }
  return { useCtxState, useCtxAllState, useCtxDispatch, CtxProvider } as const
}
