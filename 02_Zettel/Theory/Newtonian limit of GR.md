---
layout: default
title: "Newtonian limit of GR"
---

in the **slow-motion, weak-field** limit, GR reduces to **Newtonian gravity**. the metric becomes $g_{\mu\nu} \approx \eta_{\mu\nu}$ + small perturbation, and the geodesic equation reproduces Newton's $\ddot{\vec x} = -\nabla \Phi$.

## the limits

three approximations:
1. **weak field**: $|h_{\mu\nu}| \ll 1$. metric is close to Minkowski.
2. **slow motion**: $v \ll c$, equivalently $|\dot x^i/\dot x^0| \ll 1$. test particles move slowly.
3. **stationary or slowly-varying**: $|\partial_t h| \ll |\partial_i h|$, time derivatives are small compared to spatial ones.

## the Newtonian potential

the dominant component of $h$ is:
$$h_{00} = -2\Phi/c^2$$

with $\Phi$ the Newtonian gravitational potential ($\Phi = -GM/r$ for a point source). so the metric becomes:
$$g_{00} = -1 - 2\Phi/c^2, \qquad g_{ii} = 1 + 2\Phi/c^2 + \dots$$

## the geodesic equation reduces to Newton

for a slow-moving particle, $\dot x^0 \approx c$ and $\dot x^i \ll c$. the geodesic equation:
$$\ddot x^\mu + \Gamma^\mu{}_{\alpha\beta}\dot x^\alpha\dot x^\beta = 0$$

with $\dot x^\alpha\dot x^\beta$ dominated by $(\dot x^0)^2 = c^2$. so:
$$\ddot x^i \approx -c^2 \Gamma^i{}_{00}$$

compute $\Gamma^i{}_{00}$ from the metric:
$$\Gamma^i{}_{00} = -\tfrac{1}{2}\eta^{ij}\partial_j h_{00} = -\tfrac{1}{2}\partial_i h_{00} = \partial_i \Phi/c^2$$

so:
$$\ddot x^i = -\partial_i \Phi$$

**Newton's second law** with gravitational force $-\nabla\Phi$. the slow-motion, weak-field limit recovers Newtonian gravity.

see Q9 - weak-field Christoffel Gamma_i_00 for the detailed computation.

## Einstein's equation reduces to Poisson

in the same limit, Einstein's equation $G_{\mu\nu} = 8\pi G T_{\mu\nu}$ has its $00$ component:
$$G_{00} = R_{00} - \tfrac{1}{2}\eta_{00}R \approx R_{00}$$

linearised: $R_{00} = -\tfrac{1}{2}\nabla^2 h_{00}$. so:
$$-\tfrac{1}{2}\nabla^2 h_{00} = 8\pi G \rho$$
$$\nabla^2 \Phi = 4\pi G \rho$$

**Poisson's equation** for the Newtonian potential. the source is the energy density (in the limit, $\rho c^2 = $ rest-mass density times $c^2$).

see Q10 - weak-field Ricci scalar for the detailed computation.

## the constant $8\pi G$

historical: Einstein's coefficient of $T_{\mu\nu}$ in Einstein's equation was determined by demanding the Newtonian limit work out. trying $\alpha G_{\mu\nu} = T_{\mu\nu}$, then matching $\nabla^2\Phi = 4\pi G\rho$ fixes $\alpha = 1/(8\pi G)$.

so the **factor $8\pi G$ in Einstein's equation is fixed by the Newtonian limit**.

## what beyond-Newtonian effects look like

include higher-order terms:
- $\sim v^2/c^2$ corrections: special-relativistic effects.
- $\sim \Phi/c^2$ corrections: gravitational redshift.
- $\sim (v/c)^4$ + $(\Phi/c^2)^2$: post-Newtonian (1PN) corrections. give Mercury perihelion precession.
- $\sim (v/c)^7$: leading GW radiation reaction (2.5PN).

systematic post-Newtonian expansion handles binary inspirals to $\sim 4$PN currently.

## see also

- [Linearized metric perturbation](../../02_Zettel/Theory/Linearized metric perturbation.md)
- [Trace-reversed perturbation](../../02_Zettel/Theory/Trace-reversed perturbation.md)
- [Lorenz gauge](../../02_Zettel/Theory/Lorenz gauge.md)
- [Linearized Christoffel and Riemann](../../02_Zettel/Theory/Linearized Christoffel and Riemann.md)
- Q9 - weak-field Christoffel Gamma_i_00
- Q10 - weak-field Ricci scalar
- [Schwarzschild metric](../../02_Zettel/Theory/Schwarzschild metric.md)
- [Perihelion precession](../../02_Zettel/Theory/Perihelion precession.md)
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 8 - Gravitational Waves](../../01_Literature/Book/Baumann GR/Ch 8 - Gravitational Waves.md)
- [Newtonian Friedmann derivation](../../02_Zettel/Theory/Newtonian Friedmann derivation.md)
