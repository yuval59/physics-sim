export default class Vec2D {
  #x: number
  #y: number

  constructor(x: number, y: number) {
    this.#x = x
    this.#y = y
  }

  get x() {
    return this.#x
  }

  get y() {
    return this.#y
  }

  get Values() {
    return [this.#x, this.#y]
  }

  add = (vecToAdd: Vec2D) => {
    const [x, y] = Vec2D.add(this, vecToAdd).Values
    this.#x = x
    this.#y = y
  }

  static add(vecA: Vec2D, vecB: Vec2D) {
    return new Vec2D(vecA.x + vecB.x, vecA.y + vecB.y)
  }

  static isVector(something: unknown): something is Vec2D {
    return something instanceof Vec2D ? true : false
  }
}
