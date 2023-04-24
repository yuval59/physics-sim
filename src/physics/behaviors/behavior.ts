import Vec2D from '../../utils/vector'

export default abstract class Behavior {
  abstract get force(): Vec2D
}
