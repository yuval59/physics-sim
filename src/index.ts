import Point from './physics/actors/point'
import Gravity from './physics/behaviors/gravity'
import Physics from './physics/physics'
import { getScreenHardCaps } from './physics/utils'
import Vec2D from './utils/vector'

const sim = new Physics()
sim.addHardCaps(...getScreenHardCaps(500, 500))
sim.addBehaviors(new Gravity(new Vec2D(0, 1)))
sim.addActors(new Point(new Vec2D(100, 100)))

setInterval(sim.onTick, 500)
