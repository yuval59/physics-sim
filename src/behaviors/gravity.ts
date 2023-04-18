import Actor from '../actors/actor'
import Vec2D from '../utils/vector'
import Behavior from './behavior'

export default class Gravity extends Behavior {
  #force: Vec2D

  constructor(direction: Vec2D) {
    super()
    this.#force = direction
  }

  onTick = (actor: Actor) => actor.incrementPosition(this.#force)
}
