import { IOCG } from './IOCG'

export type IBet = {
  C: string
  N: string
  TYPE: string
  NID: string
  D: string
  T: string
  DAY: string
  S: string
  LN: string
  IMF: boolean
  HEC: boolean
  OCG: Record<string, IOCG>
}
