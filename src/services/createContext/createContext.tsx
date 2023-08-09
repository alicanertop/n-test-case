import {
  createContext as createCtx,
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
  useSyncExternalStore
} from 'react'

type ISubscribeCb = (callback: () => void) => () => void

export function createContext<State>(initialState: State & { subscribe?: ISubscribeCb }) {
  const useStoreData = (): {
    get: () => State
    subscribe: ISubscribeCb
  } => {
    const store = useRef(initialState)
    const subscribers = useRef(new Set<() => void>())

    const get = useCallback(() => store.current, [])

    const subscribe = useCallback((callback: () => void) => {
      if (typeof initialState?.subscribe === 'function') {
        initialState.subscribe(callback)
      } else {
        subscribers.current.add(callback)
      }

      return () => {
        subscribers.current.delete(callback)
      }
    }, [])

    return { get, subscribe }
  }

  type IStoreDataReturnType = ReturnType<typeof useStoreData>

  const stateCtx = createCtx<IStoreDataReturnType | undefined>(undefined)
  const ctxStore = () => useContext(stateCtx)

  function useCtxState<StoreReturn>(selector: (store: State) => StoreReturn): StoreReturn {
    const store = ctxStore()
    if (!store) throw new Error('Store not found')

    const state = useSyncExternalStore(
      store.subscribe,
      () => selector(store.get()),
      () => selector(initialState)
    )
    return state
  }

  function CtxProvider({ children }: PropsWithChildren<{}>) {
    return <stateCtx.Provider value={useStoreData()}>{children}</stateCtx.Provider>
  }

  return { useCtxState, CtxProvider } as const
}
