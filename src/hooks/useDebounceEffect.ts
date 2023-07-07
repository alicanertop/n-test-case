import { DependencyList, useEffect, useRef } from 'react'

export const useDebounceEffect = (fnc: Function, deps: DependencyList, delay = 500) => {
  const ref = useRef<any>()

  useEffect(() => {
    clearTimeout(ref.current)
    ref.current = setTimeout(() => {
      fnc()
      clearTimeout(ref.current)
    }, delay)
  }, [fnc, ...deps, delay])
}
