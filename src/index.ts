import Point from './actors/point'
import Border from './behaviors/border'
import Gravity from './behaviors/gravity'
import Physics from './physics'
import Vec2D from './utils/vector'

const sim = new Physics()
const borders = new Border(new Vec2D(0, 100), new Vec2D(0, 100))
const gravity = new Gravity(new Vec2D(0, 1))
const pawn = new Point(new Vec2D(100, 100))

sim.addActor(pawn)
sim.addGlobalBehavior(borders)
// sim.addGlobalBehavior(gravity)

console.log(pawn.Position.Values)
sim.onTick()
console.log(pawn.Position.Values)
sim.onTick()
console.log(pawn.Position.Values)
sim.onTick()
console.log(pawn.Position.Values)
sim.onTick()
