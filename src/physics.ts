import Actor from './actors/actor'
import Behavior from './behaviors/behavior'

export default class Physics {
  #actors: Actor[] = []
  #globalBehaviors: Behavior[] = []

  constructor() {}

  addActor = (actor: Actor) => {
    this.#actors.push(actor)
  }

  addGlobalBehavior = (behavior: Behavior) => {
    this.#globalBehaviors.push(behavior)
  }

  onTick = () => {
    this.#actors.forEach((actor) => actor.onTick())
    this.#globalBehaviors
      .sort((behaviorA, behaviorB) => behaviorA.Priority - behaviorB.Priority)
      .forEach((behavior) => behavior.onTick(...this.#actors))
  }
}
