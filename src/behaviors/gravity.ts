import Actor from '../actors/actor'
import Vec2D from '../utils/vector'
import Behavior from './behavior'

export default class Gravity extends Behavior {
  #force: Vec2D

  constructor(force: Vec2D) {
    super()
    this.#force = force
  }

  onTick = (...actors: Actor[]) =>
    actors.forEach((actor) => actor.incrementPosition(this.#force))
}
