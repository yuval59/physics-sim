import Actor from './actors/actor'

export default class Physics {
  #actors: Actor[] = []

  constructor() {}

  addActor = (actor: Actor) => {
    this.#actors.push(actor)
  }

  onTick = () => this.#actors.forEach((actor) => actor.onTick())
}
