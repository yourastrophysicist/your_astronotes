---
layout: default
title: "Lorenz gauge"
---

the **Lorenz gauge** in linearized GR is the condition $\partial^\mu \bar h_{\mu\nu} = 0$. it makes Einstein's equation a clean wave equation. analogous to $\partial^\mu A_\mu = 0$ in electromagnetism.

## the condition

$$\boxed{\, \partial^\mu \bar h_{\mu\nu} = 0 \,}$$

four equations (one for each $\nu$). reduces gauge freedom by 4 of the 4 components of $\xi^\mu$.

equivalently in terms of $h$:
$$\partial^\mu h_{\mu\nu} = \tfrac{1}{2}\partial_\nu h$$

## why it's useful

in Lorenz gauge, the linearized Einstein tensor simplifies dramatically:
$$G_{\mu\nu} = -\tfrac{1}{2}\Box \bar h_{\mu\nu}$$

so Einstein's equation $G_{\mu\nu} = 8\pi G T_{\mu\nu}$ becomes:
$$\boxed{\, \Box \bar h_{\mu\nu} = -16\pi G T_{\mu\nu} \,}$$

a relativistic Poisson equation, with d'Alembertian $\Box = \partial^\mu\partial_\mu$. the gravitational analog of EM's $\Box A^\mu = -\mu_0 j^\mu$ in the Lorenz EM gauge.

## reaching the gauge

start with arbitrary $h_{\mu\nu}$. perform a gauge transformation $h \to h + 2\partial_{(\mu}\xi_{\nu)}$. the trace-reversed quantity transforms as:
$$\bar h_{\mu\nu} \to \bar h_{\mu\nu} + \partial_\mu\xi_\nu + \partial_\nu\xi_\mu - \eta_{\mu\nu}\partial^\rho \xi_\rho$$

taking the divergence:
$$\partial^\mu \bar h_{\mu\nu} \to \partial^\mu \bar h_{\mu\nu} + \Box \xi_\nu$$

so to satisfy $\partial^\mu \bar h_{\mu\nu} = 0$, choose $\xi_\nu$ such that $\Box \xi_\nu = -\partial^\mu \bar h_{\mu\nu}^{\rm initial}$. always possible (well-defined wave equation with source). so the **Lorenz gauge is always reachable**.

## residual gauge freedom

after reaching Lorenz gauge, **further gauge transformations** with $\Box \xi^\mu = 0$ (i.e. wave-equation solutions) preserve Lorenz. so 4 more parameters of residual gauge.

these are typically used to fix the **transverse-traceless (TT) gauge** in vacuum, leaving only 2 physical polarisations. see [Transverse traceless gauge](../../02_Zettel/Theory/Transverse traceless gauge.md).

## the analogy with EM

| feature | EM | linearized GR |
|---|---|---|
| field | $A^\mu$ | $h_{\mu\nu}$ (or $\bar h_{\mu\nu}$) |
| gauge | $A \to A + \partial \chi$ | $h \to h + 2\partial_{(\mu}\xi_{\nu)}$ |
| Lorenz cond. | $\partial^\mu A_\mu = 0$ | $\partial^\mu \bar h_{\mu\nu} = 0$ |
| field eq. (gauge) | $\Box A^\mu = -\mu_0 j^\mu$ | $\Box \bar h_{\mu\nu} = -16\pi G T_{\mu\nu}$ |

both are wave equations sourced by their currents. both have residual gauge freedom that can fix to transverse + (in EM, transverse only; in GR, transverse + traceless).

## practical remarks

- Lorenz gauge is **the** standard for cosmological perturbation theory at the linear level.
- in vacuum, after fixing residual gauge to TT, the remaining $h_{\mu\nu}$ contains exactly the 2 physical GW polarisations.
- in matter, Lorenz gauge solves $\Box \bar h = -16\pi G T$ directly via Green's function (retarded propagator).

## see also

- [Linearized metric perturbation](../../02_Zettel/Theory/Linearized metric perturbation.md)
- [Linearized gauge transformations](../../02_Zettel/Theory/Linearized gauge transformations.md)
- [Trace-reversed perturbation](../../02_Zettel/Theory/Trace-reversed perturbation.md)
- [Transverse traceless gauge](../../02_Zettel/Theory/Transverse traceless gauge.md)
- [Quadrupole formula](../../02_Zettel/Theory/Quadrupole formula.md)
- [Newtonian limit of GR](../../02_Zettel/Theory/Newtonian limit of GR.md)
- Q15 - trace-reversed perturbation and Lorenz gauge
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 8 - Gravitational Waves](../../01_Literature/Book/Baumann GR/Ch 8 - Gravitational Waves.md)
