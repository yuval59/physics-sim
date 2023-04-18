import Actor from '../actors/actor'
import Vec2D from '../utils/vector'
import Behavior from './behavior'

export default class Border extends Behavior {
  #xBounds: Vec2D
  #yBounds: Vec2D

  constructor(xBounds: Vec2D, yBounds: Vec2D) {
    super(999)
    this.#xBounds = xBounds
    this.#yBounds = yBounds
  }

  onTick = (...actors: Actor[]) => {
    actors.forEach((actor) => {
      const [x, y] = actor.Position.Values
      const [minX, maxX] = this.#xBounds.Values
      const [minY, maxY] = this.#yBounds.Values

      let updatedX = x
      let updatedY = y

      if (x < minX) updatedX = minX
      if (x > maxX) updatedX = maxX
      if (y < minY) updatedY = minY
      if (y > maxY) updatedY = maxY

      if (updatedX != x || updatedY != y)
        actor.updatePosition(new Vec2D(updatedX, updatedY))
    })
  }
}
