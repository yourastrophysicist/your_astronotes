---
layout: default
title: "Parallel transport"
---

**parallel transport** is the curved-space generalisation of "translating a vector without rotating it." in flat space using Cartesian coordinates, you just keep the components fixed. on a curved manifold, you need the connection, and the procedure becomes path-dependent.

## the definition

a vector $V^\mu$ is parallel-transported along a curve $x^\mu(\lambda)$ if its **covariant derivative along the curve vanishes**:
$$\frac{DV^\mu}{d\lambda} \equiv \dot x^\nu \nabla_\nu V^\mu = \dot x^\nu \partial_\nu V^\mu + \Gamma^\mu{}_{\nu\rho}\dot x^\nu V^\rho = 0$$

equivalently:
$$\dot V^\mu + \Gamma^\mu{}_{\nu\rho}\dot x^\nu V^\rho = 0$$

with the dot meaning $d/d\lambda$. the Christoffel correction is the price of using coordinates on a curved manifold.

## what it physically means

intuitively: at each step along the curve, "parallel transport" the vector by adjusting it just enough to compensate for the curving of the coordinate basis. the geometric content: the vector "stays parallel to itself" in the sense determined by the connection.

on a curved manifold, parallel transport is **path-dependent**: transporting a vector around a closed loop generally returns it to a **rotated** version of itself. the rotation is exactly the **Riemann tensor** (see [Riemann tensor](../../02_Zettel/Theory/Riemann tensor.md)).

## the canonical example: the 2-sphere

take a vector at the equator pointing north. parallel-transport it along the equator (it stays pointing north). now bring it up a meridian to the north pole (it stays pointing along the meridian). then bring it down a different meridian (it stays pointing along *that* meridian).

the final vector is rotated by an angle equal to the longitude difference between the two meridians. this rotation is the **holonomy** of the loop. in flat space, holonomy is identity; on a curved manifold, it's not.

## the parallel-transport equation as a system of ODEs

for a curve $x^\mu(\lambda)$ with parametrisation, the equation $\dot V^\mu + \Gamma^\mu{}_{\nu\rho}\dot x^\nu V^\rho = 0$ is a first-order linear ODE in $V^\mu$. given an initial $V^\mu(0)$, it has a unique solution along the curve. so parallel transport is well-defined.

## connection to the geodesic equation

a curve $x^\mu(\lambda)$ is a **geodesic** iff its tangent vector $\dot x^\mu$ is parallel-transported along itself:
$$\dot x^\nu \nabla_\nu \dot x^\mu = 0 \quad\Leftrightarrow\quad \ddot x^\mu + \Gamma^\mu{}_{\nu\rho}\dot x^\nu\dot x^\rho = 0$$

this is the "auto-parallel" definition of geodesic: a curve whose tangent is parallel-transported. equivalent to the "extremal proper time" definition (for the Levi-Civita connection).

## connection to metric compatibility

[Metric compatibility](../../02_Zettel/Theory/Metric compatibility.md) $\nabla g = 0$ implies that **inner products are preserved** under parallel transport:
$$\frac{d}{d\lambda}(g_{\mu\nu}V^\mu W^\nu) = 0$$

so two vectors parallel-transported along the same curve maintain their relative angle and magnitudes.

consequence: a unit timelike vector parallel-transported stays a unit timelike vector. an orthonormal basis stays orthonormal. clocks remain synchronized.

## holonomy and the Riemann tensor

parallel-transport a vector around an infinitesimal closed loop. the change in the vector is proportional to the area enclosed times the Riemann tensor:
$$\delta V^\mu \approx -R^\mu{}_{\nu\rho\sigma}V^\nu A^{\rho\sigma}$$

with $A^{\rho\sigma}$ the antisymmetric area tensor of the loop. so the **Riemann tensor is the curvature of the connection**, measured by holonomy.

this is the operational definition of curvature: not "how the manifold looks bent" but "how parallel transport fails to be path-independent."

## see also

- [Christoffel symbols](../../02_Zettel/Theory/Christoffel symbols.md)
- [Covariant derivative](../../02_Zettel/Theory/Covariant derivative.md)
- [Levi-Civita connection](../../02_Zettel/Theory/Levi-Civita connection.md)
- [Metric compatibility](../../02_Zettel/Theory/Metric compatibility.md)
- [Geodesic equation](../../02_Zettel/Theory/Geodesic equation.md)
- [Riemann tensor](../../02_Zettel/Theory/Riemann tensor.md)
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 2 - Some Differential Geometry](../../01_Literature/Book/Baumann GR/Ch 2 - Some Differential Geometry.md)
