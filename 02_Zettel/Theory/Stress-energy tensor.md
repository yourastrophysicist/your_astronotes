---
layout: default
title: "Stress-energy tensor"
---

the **stress-energy tensor** $T_{\mu\nu}$ encodes everything about matter and energy: density, momentum, pressure, stresses. it sits on the right-hand side of Einstein's equation.

## physical content

$T_{\mu\nu}$ is symmetric, with 10 components in 4D:
- **$T^{00}$**: energy density.
- **$T^{0i}$**: momentum density (or energy flux).
- **$T^{ij}$**: stress (pressure on diagonal, shear off-diagonal).

with $c = 1$ and signature $(-, +, +, +)$, the local rest-frame components are:
$$T^{\mu\nu}|_{\rm rest} = \begin{pmatrix} \rho & 0 & 0 & 0 \\ 0 & p & 0 & 0 \\ 0 & 0 & p & 0 \\ 0 & 0 & 0 & p \end{pmatrix}\quad\text{(perfect fluid)}$$

## conservation

$T$ satisfies:
$$\nabla^\mu T_{\mu\nu} = 0$$

generalisation of $\partial_\mu T^{\mu\nu} = 0$ from special relativity. encodes energy + momentum conservation.

## the canonical examples

### dust (pressureless matter)
$$T^{\mu\nu} = \rho u^\mu u^\nu$$
with $u^\mu$ the four-velocity of the matter, $\rho$ the rest-frame mass density. used for cold matter, including baryons and dark matter at late times.

equation of state: $p = 0$, so $w = p/\rho = 0$.

### perfect fluid
$$T^{\mu\nu} = (\rho + p)u^\mu u^\nu + p g^{\mu\nu}$$

three pieces: rest-mass density, kinetic, pressure stresses. used for cosmological fluids, stellar interiors, etc. equation of state $p = w\rho$ with $w$ depending on the species:
- matter: $w = 0$.
- radiation: $w = 1/3$.
- dark energy: $w = -1$ (cosmological constant) or $-1 < w < -1/3$ (quintessence).

### radiation
$$T^{\mu\nu} = (\rho + p)u^\mu u^\nu + p g^{\mu\nu}, \quad p = \rho/3$$
trace: $T = -\rho + 3p = 0$. **traceless**, characteristic of conformal matter.

### electromagnetic field
$$T^{\mu\nu}_{\rm EM} = F^{\mu\rho}F^\nu{}_\rho - \frac{1}{4}g^{\mu\nu}F_{\rho\sigma}F^{\rho\sigma}$$
with $F_{\mu\nu}$ the field-strength tensor. traceless (since EM is conformally invariant in 4D).

### scalar field
$$T^{\mu\nu}_\phi = \nabla^\mu \phi\,\nabla^\nu\phi - g^{\mu\nu}\!\left(\tfrac{1}{2}\nabla_\rho\phi\,\nabla^\rho\phi + V(\phi)\right)$$
used for inflaton fields, dark energy quintessence models. depending on $V(\phi)$ and field gradients, can have any $w$.

### vacuum (cosmological constant)
$$T^{\mu\nu}_\Lambda = -\frac{\Lambda}{8\pi G}g^{\mu\nu}$$
with $\rho_\Lambda = \Lambda/(8\pi G)$, $p_\Lambda = -\rho_\Lambda$. constant density, negative pressure. drives accelerated expansion.

## the conservation in cosmology

for FLRW, $\nabla^\mu T_{\mu\nu} = 0$ gives the **continuity equation**:
$$\dot \rho + 3H(\rho + p) = 0$$
with $H = \dot a/a$. for $p = w\rho$ constant:
$$\rho \propto a^{-3(1+w)}$$
- matter: $\rho \propto a^{-3}$.
- radiation: $\rho \propto a^{-4}$.
- dark energy: $\rho = $ const.

see [Continuity equation](../../02_Zettel/Theory/Continuity equation.md) and [Equation of state and density scaling](../../02_Zettel/Theory/Equation of state and density scaling.md).

## Newtonian limit

in the weak-field, slow-motion limit, $T^{00} \to \rho c^2$ (mass-energy density), $T^{0i} \to \rho c v^i$, $T^{ij} \to $ small. plugging into Einstein's equation reproduces Poisson's equation $\nabla^2 \Phi = 4\pi G \rho$.

## see also

- [Einstein equations](../../02_Zettel/Theory/Einstein equations.md)
- [Einstein tensor and Bianchi](../../02_Zettel/Theory/Einstein tensor and Bianchi.md)
- [Continuity equation](../../02_Zettel/Theory/Continuity equation.md)
- [Equation of state and density scaling](../../02_Zettel/Theory/Equation of state and density scaling.md)
- [Cosmological constant](../../02_Zettel/Theory/Cosmological constant.md)
- [Newtonian limit of GR](../../02_Zettel/Theory/Newtonian limit of GR.md)
- [Friedmann equations](../../02_Zettel/Theory/Friedmann equations.md)
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 5 - The Einstein Equation](../../01_Literature/Book/Baumann GR/Ch 5 - The Einstein Equation.md)
