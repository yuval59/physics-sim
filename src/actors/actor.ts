import Behavior from '../behaviors/behavior'
import Vec2D from '../utils/vector'

export default abstract class Actor {
  abstract updatePosition(newPos: Vec2D): void
  abstract incrementPosition(incrementAmount: Vec2D): void

  #behaviors: Behavior[] = []
  #pos: Vec2D

  constructor(pos: Vec2D) {
    this.#pos = pos
  }

  get Position() {
    return this.#pos
  }

  protected set Position(newPos: Vec2D) {
    this.#pos = newPos
  }

  addBehavior = (behavior: Behavior) => {
    this.#behaviors.push(behavior)
  }

  onTick = () => this.#behaviors.forEach((behavior) => behavior.onTick(this))

  static distance(actorA: Actor, actorB: Actor) {
    return Vec2D.distance(actorA.Position, actorB.Position)
  }
}
