---
layout: default
title: "Riemann tensor symmetries"
---

the Riemann tensor has **four key symmetries** that dramatically reduce its independent components. with all indices down ($R_{\rho\sigma\mu\nu} = g_{\rho\alpha}R^\alpha{}_{\sigma\mu\nu}$):

## the four symmetries

1. **antisymmetric in the first pair**: $R_{\rho\sigma\mu\nu} = -R_{\sigma\rho\mu\nu}$.
2. **antisymmetric in the last pair**: $R_{\rho\sigma\mu\nu} = -R_{\rho\sigma\nu\mu}$.
3. **symmetric under pair exchange**: $R_{\rho\sigma\mu\nu} = R_{\mu\nu\rho\sigma}$.
4. **first Bianchi identity** (cyclic in last three): $R_{\rho\sigma\mu\nu} + R_{\rho\mu\nu\sigma} + R_{\rho\nu\sigma\mu} = 0$.

these all hold for the Levi-Civita connection on any manifold.

## why these symmetries

each has a different origin:
- **(1) and (2)** follow from the antisymmetry of $\nabla_\mu \nabla_\nu - \nabla_\nu \nabla_\mu$ (commutator).
- **(3)** follows from metric compatibility + torsion-free.
- **(4) first Bianchi** follows from torsion-free alone. (the **second Bianchi**, $\nabla_{[\lambda}R_{\mu\nu]\rho\sigma} = 0$, is differential, see [Bianchi identities](../../02_Zettel/Theory/Bianchi identities.md).)

## the immediate consequences

- (1) means $R$ vanishes when contracted with anything symmetric in $(\rho, \sigma)$.
- (2) means $R$ vanishes when contracted with anything symmetric in $(\mu, \nu)$.
- (3) means the Ricci tensor $R_{\mu\nu} = R^\rho{}_{\mu\rho\nu}$ is symmetric.

## counting

start with $R^\rho{}_{\sigma\mu\nu}$ in $n$ dimensions: $n^4$ components.

apply:
- antisym in last pair: $n^2 \cdot \binom{n}{2} = n^2 \cdot n(n-1)/2$ components.
- antisym in first pair (after lowering): $\binom{n}{2}\binom{n}{2} = [n(n-1)/2]^2$.
- pair exchange: divide by 2 (with corrections for diagonal terms): $\binom{n(n-1)/2 + 1}{2} = [n(n-1)/2 + 1][n(n-1)/2]/2$.
- first Bianchi: subtract $\binom{n}{4}$.

result: independent components of Riemann are
$$\boxed{\, \frac{n^2(n^2 - 1)}{12} \,}$$

| $n$ | components |
|---|---|
| 2 | 1 |
| 3 | 6 |
| 4 | 20 |
| 10 | 825 |

so Riemann in 4D spacetime has **20 independent components**. of these, the Ricci tensor (10 components, since symmetric) absorbs 10. the **Weyl tensor** (the trace-free part of Riemann) carries the remaining 10. see [Counting Riemann components](../../02_Zettel/Theory/Counting Riemann components.md).

## why the symmetries matter

physically, the symmetries pin down the algebraic structure of curvature. they:
- enforce the dimension-counting above (only 20 independent components in 4D, not 256).
- guarantee the Ricci tensor is symmetric.
- enable the Bianchi identities (key to Einstein's equation conservation).

## verifying symmetries on a specific metric

a useful exercise. once you compute Riemann components for the 2-sphere or Schwarzschild, you can confirm that $R_{\theta\phi\theta\phi} = R_{\phi\theta\phi\theta}$ and $R_{\theta\phi\phi\theta} = -R_{\theta\phi\theta\phi}$ etc. helps catch sign errors in computations.

## see also

- [Riemann tensor](../../02_Zettel/Theory/Riemann tensor.md)
- [Counting Riemann components](../../02_Zettel/Theory/Counting Riemann components.md)
- [Ricci tensor and scalar](../../02_Zettel/Theory/Ricci tensor and scalar.md)
- [Bianchi identities](../../02_Zettel/Theory/Bianchi identities.md)
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 4 - Spacetime Curvature](../../01_Literature/Book/Baumann GR/Ch 4 - Spacetime Curvature.md)
