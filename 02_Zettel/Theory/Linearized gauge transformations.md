---
layout: default
title: "Linearized gauge transformations"
---

**linearized GR has a gauge symmetry**, just like electromagnetism. an infinitesimal coordinate change $x^\mu \to x^\mu + \xi^\mu$ shifts $h_{\mu\nu}$ in a specific way that leaves all physics invariant. crucial for understanding gravitational waves.

## the transformation

under an infinitesimal coordinate shift $x^\mu \to x'^\mu = x^\mu + \xi^\mu(x)$, with $|\xi| \ll 1$ small, the metric perturbation transforms as:
$$\boxed{\, h_{\mu\nu} \to h_{\mu\nu} + \partial_\mu\xi_\nu + \partial_\nu\xi_\mu = h_{\mu\nu} + 2\partial_{(\mu}\xi_{\nu)} \,}$$

the symmetrised gradient of $\xi$ adds to $h$. note $\xi^\mu$ is a vector, hence has 4 components. so we have **4-parameter family** of gauge transformations, just like the 4 components of $A^\mu$ in EM.

## what's invariant

physical observables don't depend on $\xi$. specifically:
- **the Riemann tensor** is gauge-invariant: under $h \to h + 2\partial \xi$, $R^\rho{}_{\sigma\mu\nu}$ stays the same (to first order).
- **the Einstein tensor** is gauge-invariant.
- **physical predictions** (LIGO strain, perihelion precession, etc.) don't depend on gauge choice.

## the analogy to EM

in EM, the field $A^\mu$ transforms as $A^\mu \to A^\mu + \partial^\mu \chi$ for any scalar $\chi$. **gauge symmetry** with one parameter ($\chi$). reduces 4 components of $A^\mu$ to 2 physical photon polarisations (after fixing gauge + on-shell condition).

in linearized GR, $h_{\mu\nu}$ transforms as $h_{\mu\nu} \to h_{\mu\nu} + 2\partial_{(\mu}\xi_{\nu)}$. **gauge symmetry** with 4 parameters ($\xi^\mu$). reduces 10 components of $h_{\mu\nu}$ to **2 physical graviton polarisations** (after fixing gauge + on-shell condition + traceless-transverse).

## counting the degrees of freedom

starting count: $h_{\mu\nu}$ has 10 components (symmetric $4\times 4$).
- subtract 4 for the 4-parameter gauge freedom (Lorenz, etc.): 10 - 4 = 6.
- subtract 4 more for the 4 wave-equation constraints (vacuum, on-shell): 6 - 4 = 2.

so **2 physical polarisations**: $h_+$ and $h_\times$. the two "tensor" polarisations of GR.

## fixing gauge

common gauges:
- **Lorenz gauge**: $\partial^\mu \bar h_{\mu\nu} = 0$. uses 4 conditions, fixes some of the gauge freedom. Einstein's equation becomes $\Box \bar h_{\mu\nu} = -16\pi G T_{\mu\nu}$. see [Lorenz gauge](../../02_Zettel/Theory/Lorenz gauge.html).
- **transverse-traceless (TT) gauge**: in vacuum, additional 4 conditions reduce the perturbation to its 2 physical polarisations. see [Transverse traceless gauge](../../02_Zettel/Theory/Transverse traceless gauge.html).

the gauge choice is a calculational tool. all observables are invariant.

## the residual gauge freedom

after Lorenz gauge, **residual gauge transformations** are those $\xi^\mu$ with $\Box \xi^\mu = 0$. these are 4 free wave-equation solutions, fixing them in TT gauge gives 4 more conditions.

altogether: 10 (original) - 4 (Lorenz) - 4 (residual) = 2 physical polarisations.

## see also

- [Linearized metric perturbation](../../02_Zettel/Theory/Linearized metric perturbation.html)
- [Trace-reversed perturbation](../../02_Zettel/Theory/Trace-reversed perturbation.html)
- [Lorenz gauge](../../02_Zettel/Theory/Lorenz gauge.html)
- [Transverse traceless gauge](../../02_Zettel/Theory/Transverse traceless gauge.html)
- [Plus and cross polarizations](../../02_Zettel/Theory/Plus and cross polarizations.html)
- Q15 - trace-reversed perturbation and Lorenz gauge
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.html)
- [Ch 8 - Gravitational Waves](../../01_Literature/Book/Baumann GR/Ch 8 - Gravitational Waves.html)
