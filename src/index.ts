import Point from './actors/point'
import Gravity from './behaviors/gravity'
import Physics from './physics'
import Vec2D from './utils/vector'

const sim = new Physics()

const pawn = new Point(new Vec2D(100, 100))

pawn.addBehavior(new Gravity(new Vec2D(0, 1)))

sim.addActor(pawn)
