import Actor from '../actors/actor'

export default abstract class Behavior {
  abstract onTick(actor: Actor): void

  constructor() {}
}
