---
layout: default
title: "Trace-reversed Einstein equations"
---

an equivalent rewrite of Einstein's equation that's sometimes more convenient. obtained by contracting both sides with $g^{\mu\nu}$ and substituting back.

## the form

$$\boxed{\, R_{\mu\nu} = 8\pi G\!\left(T_{\mu\nu} - \frac{1}{2}g_{\mu\nu}T\right) \,}$$

with $T = g^{\mu\nu}T_{\mu\nu}$, the trace of stress-energy.

## the derivation

start with $G_{\mu\nu} = 8\pi G T_{\mu\nu}$. contract with $g^{\mu\nu}$:
$$g^{\mu\nu}G_{\mu\nu} = R - 2R = -R = 8\pi G T \quad\Rightarrow\quad R = -8\pi G T$$

substitute back into $G_{\mu\nu} = R_{\mu\nu} - \tfrac{1}{2}g_{\mu\nu}R = 8\pi G T_{\mu\nu}$:
$$R_{\mu\nu} - \tfrac{1}{2}g_{\mu\nu}(-8\pi G T) = 8\pi G T_{\mu\nu}$$
$$R_{\mu\nu} = 8\pi G T_{\mu\nu} - 4\pi G g_{\mu\nu}T = 8\pi G\!\left(T_{\mu\nu} - \tfrac{1}{2}g_{\mu\nu}T\right)$$

so we have moved the trace from $G$ to $T$.

## why this is useful

several reasons:

### vacuum case: $R_{\mu\nu} = 0$
in vacuum ($T = 0$), the trace-reversed form gives directly:
$$R_{\mu\nu} = 0$$

so vacuum solutions of GR are Ricci-flat. the **Schwarzschild metric**, **Kerr metric**, and pure gravitational waves all satisfy $R_{\mu\nu} = 0$.

### Newtonian limit
in the slow-motion, weak-field limit, $T^{00} \approx \rho c^2$ dominates. so $T \approx -\rho c^2$ (because $g_{00} \approx -1$), and:
$$R_{00} \approx 8\pi G(\rho c^2 - \tfrac{1}{2}(-1)(-\rho c^2)) = 4\pi G \rho c^2$$

then $R_{00} \to -2\nabla^2 \Phi$ in the Newtonian limit, giving:
$$\nabla^2 \Phi = 4\pi G \rho$$

**Poisson's equation** of Newtonian gravity. see [Newtonian limit of GR](../../02_Zettel/Theory/Newtonian limit of GR.md) and Q10 - weak-field Ricci scalar.

### radiation
for radiation, $T = -\rho + 3p = 0$. so the trace-reversed form gives $R_{\mu\nu} = 8\pi G T_{\mu\nu}$, no trace term needed. simpler.

## comparison

| form | RHS | useful when |
|---|---|---|
| $G_{\mu\nu} = 8\pi G T_{\mu\nu}$ | $T_{\mu\nu}$ | matter is conformal or trace-zero |
| $R_{\mu\nu} = 8\pi G(T_{\mu\nu} - \tfrac{1}{2}g_{\mu\nu}T)$ | trace-reversed $T$ | vacuum or matter with trace |

both are equivalent. choice is a matter of computational convenience.

## see also

- [Einstein equations](../../02_Zettel/Theory/Einstein equations.md)
- [Einstein tensor and Bianchi](../../02_Zettel/Theory/Einstein tensor and Bianchi.md)
- [Stress-energy tensor](../../02_Zettel/Theory/Stress-energy tensor.md)
- [Newtonian limit of GR](../../02_Zettel/Theory/Newtonian limit of GR.md)
- Q10 - weak-field Ricci scalar
- [Schwarzschild metric](../../02_Zettel/Theory/Schwarzschild metric.md)
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 5 - The Einstein Equation](../../01_Literature/Book/Baumann GR/Ch 5 - The Einstein Equation.md)
