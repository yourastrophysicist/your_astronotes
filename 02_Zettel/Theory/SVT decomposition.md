---
layout: default
title: "SVT decomposition"
---

the **scalar-vector-tensor (SVT) decomposition** splits the 10 components of $h_{\mu\nu}$ into pieces that transform separately under spatial rotations: 4 scalar, 4 vector, 2 tensor. each evolves independently in linear theory. central tool of cosmological perturbation theory and GW analysis.

## the decomposition

write the 4D linearized metric perturbation as:
$$h_{00} = -2\phi$$
$$h_{0i} = \partial_i B + S_i$$
$$h_{ij} = -2\psi\,\delta_{ij} + 2\partial_i\partial_j E + \partial_i F_j + \partial_j F_i + \chi_{ij}$$

where:
- **$\phi, \psi$**: two scalars (perturbations of $g_{00}$ and the trace of $g_{ij}$). 2 components.
- **$B, E$**: two more scalars from the gradients of vectors. 2 components. total 4 scalar dof.
- **$S_i, F_i$**: two transverse vectors ($\partial^i S_i = 0$, $\partial^i F_i = 0$). $2 \times 2 = 4$ vector dof.
- **$\chi_{ij}$**: transverse, traceless tensor ($\partial^i \chi_{ij} = 0$, $\delta^{ij}\chi_{ij} = 0$). $2$ tensor dof.

total: $2 + 2 + 4 + 2 = 10$ components, matching the 10 of $h_{\mu\nu}$. ✓

## why decompose

each piece transforms separately under **spatial rotations**:
- scalars are invariant.
- vectors transform as 3-vectors.
- tensors transform as rank-2 spatial tensors.

so under linear evolution, the three sectors **don't mix**. this is the GR analog of decomposing a vector field on $\mathbb{R}^3$ into longitudinal + transverse parts: each part evolves separately.

## what each sector does

### scalar sector
contains:
- **Newtonian potential** ($\phi$, the gravitational potential at leading order).
- **density perturbations** in cosmology (galaxies, dark matter clumping).
- **gauge freedom**: 2 of the 4 scalar dof are pure gauge (Lorenz gauge fixes them).

physical scalar dof: 2 (e.g. comoving curvature perturbation $\mathcal R$ and isocurvature modes).

### vector sector
contains:
- **rotational / vortical perturbations**.
- in cosmology: **vector modes decay** during inflation, so are negligible at recombination.
- 2 of the 4 vector dof are pure gauge.

physical vector dof: 2. observationally: usually negligible in standard cosmological models.

### tensor sector
contains:
- **gravitational waves** ($h_+, h_\times$, the 2 polarisations).
- traceless-transverse, no gauge freedom (already gauge-fixed).

physical tensor dof: 2. observationally: GWs from binary inspirals (LIGO), primordial GWs from inflation (CMB B-modes, future detection).

## practical use

### cosmological perturbation theory
on FLRW background, scalar / vector / tensor evolve separately. each sector has its own equations of motion. allows clean perturbative analysis of CMB, large-scale structure, inflation.

### gravitational waves
in vacuum, only the **tensor** sector propagates as a wave (scalar and vector have no propagating dof). so GWs are exactly the tensor part of $h_{\mu\nu}$.

### inflation
inflation generates:
- **scalar perturbations**: amplitude $A_s$, tilt $n_s$. seed CMB anisotropies + LSS.
- **tensor perturbations**: amplitude $A_t$, tilt $n_t$. predicted to be $\sim r \cdot A_s$ with $r$ the tensor-to-scalar ratio.

current bound: $r < 0.06$ from CMB B-mode searches. detecting primordial GW would directly confirm inflation.

## see also

- [Linearized metric perturbation](../../02_Zettel/Theory/Linearized metric perturbation.md)
- [Linearized gauge transformations](../../02_Zettel/Theory/Linearized gauge transformations.md)
- [Lorenz gauge](../../02_Zettel/Theory/Lorenz gauge.md)
- [Transverse traceless gauge](../../02_Zettel/Theory/Transverse traceless gauge.md)
- [Plus and cross polarizations](../../02_Zettel/Theory/Plus and cross polarizations.md)
- [Inflation overview](../../02_Zettel/Theory/Inflation overview.md)
- [Linear evolution of perturbations in expanding universe](../../02_Zettel/Theory/Linear evolution of perturbations in expanding universe.md)
- [CMB power spectrum](../../02_Zettel/Theory/CMB power spectrum.md)
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 8 - Gravitational Waves](../../01_Literature/Book/Baumann GR/Ch 8 - Gravitational Waves.md)
- [Ch 9 - Inflation and Primordial Gravitational Waves](../../01_Literature/Book/Baumann GR/Ch 9 - Inflation and Primordial Gravitational Waves.md)
