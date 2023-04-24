# Physics sim

Neat little physics sim I'm writing for fun, the goal is to do some soft-body simulations and implement _everything_ myself.

## Concepts:

- [_Actors_](src/physics/actors/):

  Actors are the basic "things", like a point, a rectangle, whatever.

- [_Behaviors_](src/physics/behaviors/):

  Behaviors are general "rules" that the actors obey, like gravity.

- [_Constraints_](src/physics/constraints/):

  Constraints are more specific rules, usually only applying to a specific group of actors
