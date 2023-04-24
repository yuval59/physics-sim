# TODO:

- [ ] Create [constraints abstract](src/physics/constraints/constraint.ts).
- [ ] Implement [springs](src/physics/constraints/spring.ts).

  - [ ] Get direction between vectors.
  - [ ] Write [Vec2D](src/utils/vector.ts) method to create a vector with magnitude in direction.
  - [ ] Apply forces to actors assigned to spring.

- [x] Better differentiation for [_behaviors_](src/physics/behaviors/) and [_constraints_](src/physics/constraints/).

- [ ] Add hard springs (spring only below/above a threshold).

- [ ] Basic front-end to play with the simulation.
