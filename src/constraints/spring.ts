import Actor from '../actors/actor'
import Constraint from './constraint'

type baseStateSpring = {
  springConstant: number
  restingLength: number
  actorA?: Actor
  actorB?: Actor
}

export default class Spring extends Constraint<baseStateSpring> {
  constructor(baseState: baseStateSpring) {
    super(baseState)
  }

  addActor = (actor: Actor) => {
    const { actorA, actorB } = this.baseState
    if (!actorA) return (this.baseState.actorA = actor)
    if (!actorB) return (this.baseState.actorB = actor)
    throw new Error(`Can't add any more actors`)
  }

  onTick = () => {
    const { actorA, actorB, restingLength, springConstant } = this.baseState
    if (!actorA || !actorB) return

    const length = Actor.distance(actorA, actorB)
    const force = (length - restingLength) * springConstant
  }
}
