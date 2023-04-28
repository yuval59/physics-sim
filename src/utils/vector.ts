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

  set x(value: number) {
    this.#x = value
  }

  get y() {
    return this.#y
  }

  set y(value: number) {
    this.#y = value
  }

  get values() {
    return [this.#x, this.#y]
  }

  add = (vecToAdd: Vec2D) => {
    const [x, y] = Vec2D.add(this, vecToAdd).values
    this.#x = x
    this.#y = y
  }

  multiply = (scalar: number) => {
    this.#x *= scalar
    this.#y *= scalar
  }

  isEqual = (vector: Vec2D) => {
    if (vector.x != this.#x || vector.y != this.#y) return false
    return true
  }

  static add(vecA: Vec2D, vecB: Vec2D) {
    return new Vec2D(vecA.x + vecB.x, vecA.y + vecB.y)
  }

  static isVector(something: unknown): something is Vec2D {
    return something instanceof Vec2D ? true : false
  }

  static distance(vectorA: Vec2D, vectorB: Vec2D) {
    const xDist = vectorA.x - vectorB.x
    const yDist = vectorA.y - vectorB.y

    return Math.sqrt(xDist * xDist + yDist * yDist)
  }
}
