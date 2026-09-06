---
layout: default
title: "Ricci tensor and scalar"
---

the **Ricci tensor** $R_{\mu\nu}$ is a contraction of Riemann that captures the **matter-relevant part of curvature**. the **Ricci scalar** $R$ is its trace. these are the objects that appear in Einstein's equation.

## the definitions

**Ricci tensor**: trace over the first and third indices of Riemann:
$$\boxed{\, R_{\mu\nu} \equiv R^\rho{}_{\mu\rho\nu} = g^{\rho\sigma}R_{\rho\mu\sigma\nu} \,}$$

**Ricci scalar**: trace of Ricci:
$$\boxed{\, R \equiv g^{\mu\nu}R_{\mu\nu} \,}$$

## key properties

- **Ricci is symmetric**: $R_{\mu\nu} = R_{\nu\mu}$ (consequence of Riemann's pair-exchange symmetry).
- in $n$ dimensions, Ricci has $n(n+1)/2$ independent components: $10$ in 4D.
- Ricci scalar $R$ is a single number per spacetime point, a true scalar.

## the geometric meaning

$R_{\mu\nu}u^\mu u^\nu$ for a unit timelike $u^\mu$ measures the **convergence rate of nearby geodesics**. specifically, the rate of change of a small volume of test particles co-moving with $u^\mu$:
$$\frac{1}{V}\frac{d^2 V}{d\tau^2} \approx -R_{\mu\nu}u^\mu u^\nu$$
(approximate; full Raychaudhuri equation has extra terms).

so positive $R_{\mu\nu}u^\mu u^\nu$ means converging geodesics, attractive gravity. in vacuum ($R_{\mu\nu} = 0$), nearby geodesics neither converge nor diverge **on average**, but Weyl-type tidal forces still operate (the GW polarisations).

## what Ricci does NOT capture

in 4D, Ricci has 10 components but Riemann has 20. the **Weyl tensor**:
$$C_{\rho\sigma\mu\nu} = R_{\rho\sigma\mu\nu} - \text{(Ricci traces)}$$
carries the other 10 components. Weyl is trace-free; it carries pure tidal effects + gravitational waves; Ricci is what couples to matter.

so a vacuum spacetime can have $R_{\mu\nu} = 0$ but non-zero $C$ (gravitational waves, vacuum tidal forces). example: Schwarzschild's exterior has $R_{\mu\nu} = 0$ but $C \ne 0$ (the tidal force is real).

## the trace-reversed Ricci

useful combination:
$$R - \frac{1}{2}g^{\mu\nu} g_{\mu\nu} R = R - 2R = -R\quad?\quad\text{wait}$$

let me redo: actually the **Einstein tensor** $G_{\mu\nu}$ is the relevant trace-reversed object:
$$G_{\mu\nu} \equiv R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R$$

with the property $\nabla^\mu G_{\mu\nu} = 0$ identically (from Bianchi). Einstein's equation $G_{\mu\nu} = 8\pi G T_{\mu\nu}$ then automatically conserves $T$.

## examples

### flat spacetime
$R_{\mu\nu} = 0$, $R = 0$. trivially.

### Schwarzschild (vacuum)
$R_{\mu\nu} = 0$, $R = 0$ everywhere outside the source. but $R^{\mu\nu\rho\sigma}R_{\mu\nu\rho\sigma} = 48 G^2 M^2/r^6 \ne 0$ (Kretschmann scalar). so Riemann is non-zero (tidal forces present) even though Ricci is zero.

### FLRW
$R_{00} = -3\ddot a/a$, $R_{ij} = (a\ddot a + 2\dot a^2 + 2k)\,\gamma_{ij}$, $R = 6\,(\ddot a/a + (\dot a/a)^2 + k/a^2)$. components depending on $\dot a, \ddot a$.

### gravitational wave (linearised TT)
$R_{\mu\nu} = 0$ to first order in $h$ (vacuum). $R = 0$. but $R_{0x0x} \sim \ddot h_+$ is non-zero (the Weyl part). this is what LIGO measures.

## see also

- [Riemann tensor](../../02_Zettel/Theory/Riemann tensor.html)
- [Riemann tensor symmetries](../../02_Zettel/Theory/Riemann tensor symmetries.html)
- [Counting Riemann components](../../02_Zettel/Theory/Counting Riemann components.html)
- [Bianchi identities](../../02_Zettel/Theory/Bianchi identities.html)
- [Einstein equations](../../02_Zettel/Theory/Einstein equations.html)
- [Einstein tensor and Bianchi](../../02_Zettel/Theory/Einstein tensor and Bianchi.html)
- [Sectional and Gaussian curvature](../../02_Zettel/Theory/Sectional and Gaussian curvature.html)
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.html)
- [Ch 4 - Spacetime Curvature](../../01_Literature/Book/Baumann GR/Ch 4 - Spacetime Curvature.html)
- Q10 - weak-field Ricci scalar
