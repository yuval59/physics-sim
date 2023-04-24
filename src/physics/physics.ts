import Actor, { ActorHardCap } from './actors/actor'
import Behavior from './behaviors/behavior'

export default class Physics {
  #actors: Actor[] = []
  #defaultBehaviors: Behavior[] = []
  #defaultCaps: ActorHardCap[] = []

  addActors = (...actors: Actor[]) => {
    for (const actor of actors) {
      actor.addBehaviors(...this.#defaultBehaviors)
      actor.addHardCaps(...this.#defaultCaps)
    }
    this.#actors.push(...actors)
  }

  addBehaviors = (...behaviors: Behavior[]) => {
    this.#defaultBehaviors.push(...behaviors)
  }

  addHardCaps = (...hardCaps: ActorHardCap[]) => {
    this.#defaultCaps.push(...hardCaps)
  }

  onTick = () => {
    for (const actor of this.#actors) {
      actor.ontick()
      console.log(actor.position.values)
    }
  }
}
