export default abstract class Constraint<baseState> {
  #baseState: baseState

  constructor(baseState: baseState) {
    this.#baseState = baseState
  }

  protected get baseState() {
    return this.#baseState
  }
}
