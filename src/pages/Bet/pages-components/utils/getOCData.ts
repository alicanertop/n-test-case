import { IOCG } from 'types'

export const getOCData = (OCG: Record<string, IOCG>, OCGKey: string, OCKey: string) =>
  OCG[OCGKey].OC[OCKey]
