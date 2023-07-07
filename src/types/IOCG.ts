import { IOC } from './IOC'

export type IOCG = {
  ID: string
  N: string
  MBS: string
  SO: number
  OC: Record<string, IOC>
}
