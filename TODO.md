# TODO:

- [x] Create [constraints abstract](src/physics/constraints/constraint.ts).
- [x] Implement [springs](src/physics/constraints/spring.ts).

  - [x] Get direction between vectors.
  - [x] Write [Vec2D](src/utils/vector.ts) method to create a vector with magnitude in direction.
  - [x] Apply forces to actors assigned to spring.

- [x] Better differentiation for [_behaviors_](src/physics/behaviors/) and [_constraints_](src/physics/constraints/).

- [ ] Add hard springs (spring only below/above a threshold).

- [ ] Basic front-end to play with the simulation.
