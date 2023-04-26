import Vec2D from '../../utils/vector'
import Behavior from '../behaviors/behavior'

export type ActorOptionalConstructorParams = {
  velocity?: Vec2D
  hardCaps?: ActorHardCap[]
  isStationary?: boolean
}

export type ActorHardCap = {
  axis: 'x' | 'y'
  higher: boolean
  cap: number
}

export default abstract class Actor {
  abstract checkForCollision(point: Vec2D): boolean

  #position: Vec2D
  #stationary: boolean = false
  #velocity: Vec2D = new Vec2D(0, 0)
  #behaviors: Behavior[] = []
  #hardCaps: ActorHardCap[] = []

  constructor(pos: Vec2D, options?: ActorOptionalConstructorParams) {
    this.#position = pos
    if (options?.velocity) this.#velocity = options.velocity
    if (options?.isStationary) this.#stationary = true
  }

  get position() {
    return this.#position
  }

  get velocity() {
    return this.#velocity
  }

  applyForce = (force: Vec2D) => {
    if (this.#stationary) return
    this.#velocity.add(force)
  }

  applyForceInDirection = (force: number, angle: number) => {
    if (this.#stationary) return
    this.velocity.add(
      new Vec2D(Math.cos(angle) * force, Math.sin(angle) * force)
    )
  }

  addHardCaps = (...caps: ActorHardCap[]) => {
    this.#hardCaps.push(...caps)
  }

  addBehaviors = (...behaviors: Behavior[]) => {
    this.#behaviors.push(...behaviors)
  }

  ontick = () => {
    for (const { force } of this.#behaviors) this.applyForce(force)

    this.#position.add(this.#velocity)

    for (const { axis, higher, cap } of this.#hardCaps) {
      const [x, y] = this.#position.values

      // I know a switchcase is not strictly necessary here, BUT:
      // It lets me not use an if/else, while keeping my checks to one
      // And it lets me cover for all future cases, even tho this library is only meant for two dimensions
      // And therefore will never have more axes
      switch (axis) {
        case 'x': {
          if (higher ? x < cap : x > cap) this.#position.x = cap
          break
        }
        case 'y': {
          if (higher ? y < cap : y > cap) this.#position.y = cap
          break
        }
      }
    }
  }

  static distance(actorA: Actor, actorB: Actor) {
    return Vec2D.distance(actorA.position, actorB.position)
  }

  static GetAngleTo(from: Actor, to: Actor) {
    const yDiff = from.position.y - to.position.y
    const xDiff = from.position.x - to.position.x
    return Math.atan2(yDiff, xDiff)
  }
}
