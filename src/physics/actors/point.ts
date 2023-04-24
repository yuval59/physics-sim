import Vec2D from '../../utils/vector'
import Actor, { ActorOptionalConstructorParams } from './actor'

export default class Point extends Actor {
  constructor(pos: Vec2D, options?: ActorOptionalConstructorParams) {
    super(pos, options)
  }

  checkForCollision(point: Vec2D) {
    return this.position.isEqual(point)
  }
}
