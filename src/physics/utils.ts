import { ActorHardCap } from './actors/actor'

/**
 * A helper function,
 * returns an array of ActorHardCaps with minimums of 0
 * and maximums of [width, height]
 * @export getScreenHardCaps
 * @param {number} width
 * @param {number} height
 * @return {*}  ActorHardCaps[]
 */
export function getScreenHardCaps(
  width: number,
  height: number
): ActorHardCap[] {
  return [
    {
      axis: 'x',
      higher: true,
      cap: 0,
    },
    {
      axis: 'y',
      higher: true,
      cap: 0,
    },
    {
      axis: 'x',
      higher: false,
      cap: width,
    },
    {
      axis: 'y',
      higher: false,
      cap: height,
    },
  ]
}
