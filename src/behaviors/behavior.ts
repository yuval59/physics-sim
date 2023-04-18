import Actor from '../actors/actor'

export default abstract class Behavior {
  abstract onTick(...actors: Actor[]): void

  #priority: number = 0

  constructor(priority?: number) {
    if (priority) this.#priority = priority
  }

  get Priority() {
    return this.#priority
  }
}
