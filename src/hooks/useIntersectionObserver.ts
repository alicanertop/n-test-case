import { useCallback, useEffect, useRef, useState } from 'react'

type IUseIntersectionObserver = {
  onIntersect?: IntersectionObserverCallback
} & IntersectionObserverInit

export function useIntersectionObserver(params?: IUseIntersectionObserver) {
  const { onIntersect, ...options } = params ?? {}

  const [isIntersecting, setIsIntersecting] = useState(false)
  const containterRef = useRef() as any

  const callbackFunction = useCallback(
    (intersectionObserverEntry: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      onIntersect?.(intersectionObserverEntry, observer)
      setIsIntersecting(intersectionObserverEntry[0].isIntersecting)
    },
    [setIsIntersecting, onIntersect]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containterRef.current) observer.observe(containterRef.current)

    return () => {
      if (containterRef.current) observer.unobserve(containterRef.current)
    }
  }, [containterRef, options, callbackFunction])

  return [containterRef, isIntersecting]
}
