---
layout: default
title: "Spatial curvature parameter k"
---

the **spatial curvature parameter** $k$ in the FLRW metric specifies the curvature of the spatial slices of homogeneous-isotropic spacetime. takes only **three values**: $k = -1, 0, +1$, corresponding to **open**, **flat**, **closed** universes.

## the three options

### $k = 0$: flat
spatial slices are **3-Euclidean** ($\mathbb{R}^3$). infinite extent, zero curvature. parallel lines stay parallel; angles in triangles sum to $180°$.

spatial metric: $\gamma_{ij}\,dx^i\,dx^j = dr^2 + r^2 d\Omega^2$.

current universe: observed to be flat to $\Omega_k < 0.005$ (Planck CMB). within errors, flat is consistent.

### $k = +1$: closed
spatial slices are a **3-sphere $S^3$**. finite volume, positive curvature. parallel lines converge, like geodesics on a 2-sphere meeting at the poles. triangle angles sum to $> 180°$.

spatial metric: $\gamma_{ij}\,dx^i\,dx^j = (dr^2 + \sin^2 r \,d\Omega^2)$ in a "polar" parametrisation.

closed universes can re-collapse if $\Omega_{\rm tot} > 1$. our universe is **not** closed within observational error.

### $k = -1$: open
spatial slices are **3-hyperbolic**. infinite extent, negative curvature. parallel lines diverge. triangle angles sum to $< 180°$.

spatial metric: $\gamma_{ij}\,dx^i\,dx^j = dr^2 + \sinh^2 r\,d\Omega^2$.

## the curvature parameter $K$

related to $k$ by:
$$K = k/R^2$$
with $R$ a curvature radius (set to $\infty$ for $k = 0$). so:
- $K = 0$ for $k = 0$.
- $K > 0$ for $k = +1$.
- $K < 0$ for $k = -1$.

$K$ is the **Gaussian curvature** of any 2D slice of constant curvature on the homogeneous spatial slice. see [Sectional and Gaussian curvature](../../02_Zettel/Theory/Sectional and Gaussian curvature.html).

## the Friedmann equation

$k$ enters the Friedmann equation directly:
$$H^2 = \frac{8\pi G}{3}\rho - \frac{k c^2}{a^2}$$

for $k > 0$ (closed): the curvature term acts like positive energy, slowing expansion.
for $k = 0$ (flat): no curvature term.
for $k < 0$ (open): curvature term acts like negative energy, accelerating expansion.

## the curvature density parameter

define:
$$\Omega_k \equiv -\frac{k c^2}{a_0^2 H_0^2} = 1 - \Omega_{\rm tot}$$

so:
- $\Omega_k < 0$ ↔ $k > 0$: closed.
- $\Omega_k = 0$ ↔ $k = 0$: flat.
- $\Omega_k > 0$ ↔ $k < 0$: open.

equivalently, **flatness is equivalent to $\Omega_{\rm tot} = 1$**.

## observational constraint

current bound (Planck 2018 + BAO):
$$|\Omega_k| < 0.005\quad(95\%\,\text{CL})$$

so the universe is **flat to better than 0.5%**. consistent with $k = 0$.

this is consistent with **inflation**: inflation drives $\Omega_k \to 0$ exponentially, regardless of pre-inflationary curvature. so a flat universe today is a natural prediction of inflation. see [Inflation overview](../../02_Zettel/Theory/Inflation overview.html).

## physical scales

even at $|\Omega_k| < 0.005$, the curvature radius $R \gtrsim 14$ Gpc. so the universe is curved on scales larger than the Hubble radius. within the observable universe, curvature is negligible.

## see also

- [FLRW metric](../../02_Zettel/Theory/FLRW metric.html)
- [Friedmann equations](../../02_Zettel/Theory/Friedmann equations.html)
- [Cosmological principle](../../02_Zettel/Theory/Cosmological principle.html)
- [Cosmic eras](../../02_Zettel/Theory/Cosmic eras.html)
- [Hubble constant and deceleration parameter](../../02_Zettel/Theory/Hubble constant and deceleration parameter.html)
- [Inflation overview](../../02_Zettel/Theory/Inflation overview.html)
- [Sectional and Gaussian curvature](../../02_Zettel/Theory/Sectional and Gaussian curvature.html)
- [Curvature parameter k](../../02_Zettel/Theory/Curvature parameter k.html)
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.html)
- [Ch 7 - Cosmology](../../01_Literature/Book/Baumann GR/Ch 7 - Cosmology.html)
