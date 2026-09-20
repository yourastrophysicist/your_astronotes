---
layout: "default"
title: "BBGKY hierarchy and Boltzmann collision operator"
---
integrating the $6N$-dimensional Liouville equation over subsets of particle coordinates yields the Bogoliubov-Born-Green-Kirkwood-Yvon (BBGKY) hierarchy, connecting $s$-particle reduced distribution functions to $(s+1)$-particle distributions.

## reduced distribution functions

the single-particle distribution function $f_1(\mathbf{x}_1, \mathbf{v}_1, t)$ and two-particle distribution function $f_2(\mathbf{x}_1, \mathbf{v}_1, \mathbf{x}_2, \mathbf{v}_2, t)$ are defined by integrating over the remaining phase coordinates:

$$f_s(\mathbf{x}_1, \dots, \mathbf{v}_s, t) = V^s \int \dots \int f_N \, d^3x_{s+1} d^3v_{s+1} \dots d^3x_N d^3v_N$$

for a Hamiltonian with pairwise interaction potential $U_{ij} = U(\lvert \mathbf{x}_i - \mathbf{x}_j\rvert)$, the first BBGKY equation is:

$$\frac{\partial f_1}{\partial t} + \mathbf{v}_1 \cdot \frac{\partial f_1}{\partial \mathbf{x}_1} + \frac{\mathbf{F}_{\text{ext}}}{m} \cdot \frac{\partial f_1}{\partial \mathbf{v}_1} = \frac{N-1}{m V} \int \frac{\partial U_{12}}{\partial \mathbf{x}_1} \cdot \frac{\partial f_2}{\partial \mathbf{v}_1} \, d^3x_2 d^3v_2$$

the evolution of $f_1$ depends on the unknown two-particle correlation $f_2$, which in turn depends on $f_3$, producing an infinite, unclosed hierarchy.

## boltzmann closure and molecular chaos

to close the hierarchy at $s=1$, Ludwig Boltzmann introduced the hypothesis of molecular chaos (Stosszahlansatz): before collision, two particles are completely uncorrelated:

$$f_2(\mathbf{x}_1, \mathbf{v}_1, \mathbf{x}_2, \mathbf{v}_2, t) \approx f_1(\mathbf{x}_1, \mathbf{v}_1, t) f_1(\mathbf{x}_2, \mathbf{v}_2, t)$$

substituting this closure into the collision integral over the cross section $\sigma(\Omega)$ yields the Boltzmann equation:

$$\frac{\partial f}{\partial t} + \mathbf{v} \cdot \nabla f + \frac{\mathbf{F}}{m} \cdot \nabla_v f = \left(\frac{\partial f}{\partial t}\right)_{\text{coll}} = C(f)$$

where the binary collision operator takes the integral form:

$$C(f) = \int \int (f' f'_1 - f f_1) \, g \, \sigma(g, \Omega) \, d\Omega \, d^3v_1$$

with relative velocity $g = \lvert \mathbf{v} - \mathbf{v}_1\rvert$, and primed quantities denoting velocities after an elastic collision.

## see also

- [[Fluid_and_Plasma_Dynamics_MOC]]
- [[Part1_Kinetic_Foundations_and_Fluid_Equations]]
- [[Liouville theorem and phase space incompressibility]]
- [[Boltzmann H-theorem and Maxwellian distribution]]



## Linked References

- [[Boltzmann H-theorem and Maxwellian distribution]]
- [[Liouville theorem and phase space incompressibility]]
- [[Fluid_and_Plasma_Dynamics_MOC]]


