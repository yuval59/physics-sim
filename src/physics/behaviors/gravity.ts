import Vec2D from '../../utils/vector'
import Behavior from './behavior'

export default class Gravity extends Behavior {
  #value: Vec2D

  constructor(value: Vec2D) {
    super()
    this.#value = value
  }

  get force(): Vec2D {
    return this.#value
  }
}
