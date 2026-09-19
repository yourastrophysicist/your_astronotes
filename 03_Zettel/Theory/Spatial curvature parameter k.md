---
layout: "default"
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

$K$ is the **Gaussian curvature** of any 2D slice of constant curvature on the homogeneous spatial slice. see [Sectional and Gaussian curvature](Sectional%20and%20Gaussian%20curvature.html).

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
$$\lvert \Omega_k\rvert < 0.005\quad(95\%\,\text{CL})$$

so the universe is **flat to better than 0.5%**. consistent with $k = 0$.

this is consistent with **inflation**: inflation drives $\Omega_k \to 0$ exponentially, regardless of pre-inflationary curvature. so a flat universe today is a natural prediction of inflation. see [Inflation overview](Inflation%20overview.html).

## physical scales

even at $\lvert \Omega_k\rvert < 0.005$, the curvature radius $R \gtrsim 14$ Gpc. so the universe is curved on scales larger than the Hubble radius. within the observable universe, curvature is negligible.

## see also

- [FLRW metric](FLRW%20metric.html)
- [Friedmann equations](Friedmann%20equations.html)
- [Cosmological principle](Cosmological%20principle.html)
- [Cosmic eras](Cosmic%20eras.html)
- [Hubble constant and deceleration parameter](Hubble%20constant%20and%20deceleration%20parameter.html)
- [Inflation overview](Inflation%20overview.html)
- [Sectional and Gaussian curvature](Sectional%20and%20Gaussian%20curvature.html)
- [Curvature parameter k](Curvature%20parameter%20k.html)
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 7 - Cosmology](../../02_Literature/Book/Baumann%20GR/Ch%207%20-%20Cosmology.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Curvature-dynamics%20relation.html" class="backlink-item">Curvature-dynamics relation</a></li>
    <li class="backlink-item-wrap"><a href="Density%20parameters.html" class="backlink-item">Density parameters</a></li>
    <li class="backlink-item-wrap"><a href="FLRW%20metric.html" class="backlink-item">FLRW metric</a></li>
    <li class="backlink-item-wrap"><a href="Friedmann%20equations.html" class="backlink-item">Friedmann equations</a></li>
    <li class="backlink-item-wrap"><a href="Friedmann%20solutions.html" class="backlink-item">Friedmann solutions</a></li>
    <li class="backlink-item-wrap"><a href="Newtonian%20derivation%20of%20Friedmann.html" class="backlink-item">Newtonian derivation of Friedmann</a></li>
    <li class="backlink-item-wrap"><a href="Sectional%20and%20Gaussian%20curvature.html" class="backlink-item">Sectional and Gaussian curvature</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
  </ul>
</div>

