---
layout: default
title: "Trace-reversed perturbation"
---

the **trace-reversed perturbation** $\bar h_{\mu\nu}$ is a useful repackaging of $h_{\mu\nu}$ that makes the linearized Einstein equation clean. defined by:
$$\bar h_{\mu\nu} \equiv h_{\mu\nu} - \tfrac{1}{2}\eta_{\mu\nu}h$$

with $h = \eta^{\mu\nu}h_{\mu\nu}$, the trace.

## why "trace-reversed"

take the trace of both sides:
$$\bar h \equiv \eta^{\mu\nu}\bar h_{\mu\nu} = h - \tfrac{1}{2}\eta^{\mu\nu}\eta_{\mu\nu}h = h - 2h = -h$$

so $\bar h = -h$. the trace **flips sign**. this is the trace-reversal.

involution: applying the operation twice gives back $h$:
$$\bar{\bar h}_{\mu\nu} = \bar h_{\mu\nu} - \tfrac{1}{2}\eta_{\mu\nu}\bar h = h_{\mu\nu} - \tfrac{1}{2}\eta_{\mu\nu}h - \tfrac{1}{2}\eta_{\mu\nu}(-h) = h_{\mu\nu}$$

so the operation is its own inverse.

## why we use it

several conveniences:

### 1. linearized Einstein equation

in terms of $h$:
$$G_{\mu\nu} = \tfrac{1}{2}(\partial^\rho\partial_\mu h_{\nu\rho} + \partial^\rho\partial_\nu h_{\mu\rho} - \Box h_{\mu\nu} - \partial_\mu\partial_\nu h - \eta_{\mu\nu}\partial^\rho\partial^\sigma h_{\rho\sigma} + \eta_{\mu\nu}\Box h)$$

ugly. but in $\bar h$:
$$G_{\mu\nu} = -\tfrac{1}{2}\Box\bar h_{\mu\nu} + \partial^\rho \partial_{(\mu}\bar h_{\nu)\rho} - \tfrac{1}{2}\eta_{\mu\nu}\partial^\rho\partial^\sigma \bar h_{\rho\sigma}$$

cleaner. and in **Lorenz gauge** $\partial^\mu \bar h_{\mu\nu} = 0$, all but the first term vanish:
$$G_{\mu\nu} = -\tfrac{1}{2}\Box\bar h_{\mu\nu}$$

so Einstein's equation becomes the simple wave equation:
$$\Box \bar h_{\mu\nu} = -16\pi G T_{\mu\nu}$$

### 2. natural variable for waves

vacuum gravitational waves satisfy $\Box \bar h_{\mu\nu} = 0$ in Lorenz gauge. so $\bar h$ is the natural object that propagates as a wave at the speed of light.

### 3. cosmological perturbation theory

$\bar h$ is also natural for cosmological perturbation theory on FLRW backgrounds, where the trace-reversed metric perturbation simplifies the equations.

## relation to $h$

| $h$ statement | $\bar h$ statement |
|---|---|
| $h_{\mu\nu}$ defined | $\bar h_{\mu\nu} = h_{\mu\nu} - \tfrac{1}{2}\eta_{\mu\nu}h$ |
| trace $h$ | trace $\bar h = -h$ |
| traceless ($h = 0$) | traceless ($\bar h = 0$, equivalent) |
| Lorenz gauge $\partial^\mu h_{\mu\nu} - \tfrac{1}{2}\partial_\nu h$ | Lorenz gauge $\partial^\mu \bar h_{\mu\nu} = 0$ |
| Einstein eq messy | Einstein eq simple wave |

## see also

- [Linearized metric perturbation](../../02_Zettel/Theory/Linearized metric perturbation.md)
- [Linearized Christoffel and Riemann](../../02_Zettel/Theory/Linearized Christoffel and Riemann.md)
- [Linearized gauge transformations](../../02_Zettel/Theory/Linearized gauge transformations.md)
- [Lorenz gauge](../../02_Zettel/Theory/Lorenz gauge.md)
- [Transverse traceless gauge](../../02_Zettel/Theory/Transverse traceless gauge.md)
- Q15 - trace-reversed perturbation and Lorenz gauge
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 8 - Gravitational Waves](../../01_Literature/Book/Baumann GR/Ch 8 - Gravitational Waves.md)
