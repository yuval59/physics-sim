type BaseStateKeys<BaseState> = BaseState extends {} ? keyof BaseState : never
type BaseStateOrKeys<BaseState> = BaseState | BaseStateKeys<BaseState>

export default abstract class Constraint<BaseState> {
  abstract onTick(): void

  #baseState: BaseState

  constructor(baseState: BaseState) {
    this.#baseState = baseState
  }

  protected get baseState() {
    return this.#baseState
  }

  // Honestly, this is probably bloated to death
  // But I'm tired and this is all I could think of, I'll give this baby an overhaul Soon™
  protected setBaseState(value: BaseState): void
  protected setBaseState(
    key: BaseStateKeys<BaseState>,
    value: BaseState[BaseStateKeys<BaseState>]
  ): void
  protected setBaseState(
    keyOrValue: BaseStateOrKeys<BaseState>,
    value?: BaseState[BaseStateKeys<BaseState>]
  ) {
    if (value) {
      return this.#setBaseStateObject(
        keyOrValue as BaseStateKeys<BaseState>,
        value
      )
    }

    return this.#setBaseState(keyOrValue as BaseState)
  }

  #setBaseStateObject(
    key: BaseStateKeys<BaseState>,
    value: BaseState[BaseStateKeys<BaseState>]
  ) {
    this.#baseState[key] = value
  }
  #setBaseState(value: BaseState) {
    this.#baseState = value
  }
}
