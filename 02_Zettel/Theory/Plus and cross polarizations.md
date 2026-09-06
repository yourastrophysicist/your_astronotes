---
layout: default
title: "Plus and cross polarizations"
---

a gravitational wave in TT gauge has **two physical polarisations**, $h_+$ and $h_\times$. they have visually distinct effects on a ring of test masses: stretching one direction, squeezing the perpendicular, alternately.

## the polarisation tensor

for a GW propagating in the $z$ direction, the metric perturbation in TT gauge is:
$$h_{ij}^{TT}(z, t) = h_+(t - z)\,e^+_{ij} + h_\times(t - z)\,e^\times_{ij}$$

with **polarisation tensors**:
$$e^+_{ij} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad e^\times_{ij} = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

both: traceless, transverse to $\hat z$, symmetric.

## what they do to test masses

a small ring of free-falling test masses initially in the $xy$-plane, at separations $\xi^i$ from a centre. under a passing GW, the geodesic deviation equation gives:
$$\ddot \xi_i = \tfrac{1}{2}\ddot h_{ij}^{TT}\,\xi^j$$

### $h_+$ effect
$h_{ij}^{TT} = h_+(t)\,{\rm diag}(1, -1, 0)$. so $\ddot\xi_x = \tfrac{1}{2}\ddot h_+\,\xi_x$, $\ddot\xi_y = -\tfrac{1}{2}\ddot h_+\,\xi_y$.

oscillating: at one phase, the ring is stretched along $x$ + squeezed along $y$. half a period later, squeezed along $x$ + stretched along $y$.

so a ring becomes an oscillating ellipse, with major axis along $x$ at phase $0$, major axis along $y$ at phase $\pi$, etc.

### $h_\times$ effect
$h_{ij}^{TT} = h_\times(t)\begin{pmatrix} 0 & 1 \\ 1 & 0\end{pmatrix}$. mixes $x$ and $y$. equivalent to stretching along $x = y$ + squeezing along $x = -y$ (45° rotated from plus).

so a ring becomes an oscillating ellipse rotated $45°$ from the $h_+$ pattern.

## why two polarisations

$h_{ij}^{TT}$ is a $3\times 3$ symmetric matrix: 6 independent components. transverse condition $h_{iz} = 0$: -3. trace condition $h_{ii} = 0$: -1. so $6 - 3 - 1 = 2$ physical components: $h_+$ and $h_\times$.

equivalently: a graviton (massless spin-2 particle) has $2J + 1 = 5$ helicity states naively, but the helicity-0 + helicity-$\pm 1$ states are gauged away in massless theories, leaving helicity $\pm 2$. the two helicities $\pm 2$ are the $h_+ \pm i h_\times$ circular polarisations, equivalent to the two real $h_+$ and $h_\times$.

## what LIGO detects

LIGO arms are in a horizontal plane. a GW hitting from any direction produces $h_+$ and $h_\times$ components measured by interferometric arm-length differences. the actual signal is a **strain** $\Delta L/L \sim h$.

for typical sources:
- binary BH merger: $h \sim 10^{-21}$.
- LIGO arm length $L = 4$ km. so $\Delta L \sim 4 \times 10^{-18}$ m. measured by laser interferometry.

## comparison: EM photon polarisations

similar pattern in electromagnetism:
- photon: spin-1, two helicities $\pm 1$, equivalent to $E_x, E_y$ linear polarisations (transverse to propagation).
- graviton: spin-2, two helicities $\pm 2$, equivalent to $h_+, h_\times$.

the spin-2 character: under rotation of $\theta$ around $\hat z$, the polarisation tensors rotate by $2\theta$. so $h_+$ rotated by $45°$ is $h_\times$, rotated by $90°$ is $-h_+$. tensor with helicity 2.

## see also

- [Transverse traceless gauge](../../02_Zettel/Theory/Transverse traceless gauge.md)
- [Geodesic deviation under a GW](../../02_Zettel/Theory/Geodesic deviation under a GW.md)
- [Quadrupole formula](../../02_Zettel/Theory/Quadrupole formula.md)
- [Linearized metric perturbation](../../02_Zettel/Theory/Linearized metric perturbation.md)
- Q16 - Christoffels for a TT plane wave
- Q17 - Riemann R_0x0x for a TT plane wave
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 8 - Gravitational Waves](../../01_Literature/Book/Baumann GR/Ch 8 - Gravitational Waves.md)
