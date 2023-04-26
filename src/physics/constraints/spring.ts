import Actor from '../actors/actor'
import Constraint from './constraint'

type SpringParams = {
  springConstant: number
  restingLength: number
  actorA?: Actor
  actorB?: Actor
}

export default class Spring extends Constraint<SpringParams> {
  constructor(creationParams: SpringParams) {
    super(creationParams)
  }

  addActor = (actor: Actor) => {
    if (!this.baseState.actorA) {
      this.setBaseState('actorA', actor)
      return
    }

    if (!this.baseState.actorB) {
      this.setBaseState('actorB', actor)
      return
    }

    throw new Error(`Too many actors`)
  }

  onTick = () => {
    const { actorA, actorB, restingLength, springConstant } = this.baseState
    if (!actorA || !actorB) return

    const length = Actor.distance(actorA, actorB)
    const force = -(length - restingLength) * springConstant

    actorA.applyForceInDirection(force, Actor.GetAngleTo(actorA, actorB))
    actorB.applyForceInDirection(force, Actor.GetAngleTo(actorB, actorA))
  }
}
