import Point from './physics/actors/point'
import Gravity from './physics/behaviors/gravity'
import Spring from './physics/constraints/spring'
import Physics from './physics/physics'
import { getScreenHardCaps } from './physics/utils'
import Vec2D from './utils/vector'

const sim = new Physics(0.05)
sim.addHardCaps(...getScreenHardCaps(500, 500))
// const gravity = new Gravity(new Vec2D(0, 1))
// sim.addBehaviors(gravity)
const pointA = new Point(new Vec2D(100, 100), { isStationary: true })
const pointB = new Point(new Vec2D(100, 199))
sim.addActors(pointA, pointB)
const spring = new Spring({
  restingLength: 100,
  springConstant: 0.03,
  actorA: pointA,
  actorB: pointB,
})
sim.addConstraints(spring)

setInterval(sim.onTick, 500)
