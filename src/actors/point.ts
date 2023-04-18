import Vec2D from '../utils/vector'
import Actor from './actor'

export default class Point extends Actor {
  constructor(pos: Vec2D) {
    super(pos)
  }

  updatePosition = (newPos: Vec2D) => (this.Position = newPos)

  incrementPosition = (incrementAmount: Vec2D) =>
    (this.Position = Vec2D.add(this.Position, incrementAmount))
}
