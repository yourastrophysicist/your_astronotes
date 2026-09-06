---
layout: default
title: "Curvature parameter k"
---

the **curvature parameter** $k$ in the Robertson-Walker metric (see 03_Zettel/Theory/Robertson-Walker metric) takes one of three values, each corresponding to a different geometry of the spatial slices $\Sigma_t$:

| $k$ | geometry | name | spatial topology |
|---|---|---|---|
| $0$ | flat | Euclidean | $E^3$ (infinite) |
| $+1$ | positive | spherical | $S^3$ (finite, no boundary) |
| $-1$ | negative | hyperbolic | $H^3$ (infinite) |

see Baumann figure 1.2 for the visual of flat / closed / open hypersurfaces.

---

## the three line elements

**flat space** ($k = 0$): just Euclidean $\mathbb R^3$:
$$d\ell^2 = dx^2 + dy^2 + dz^2$$

**positively curved** ($k = +1$): a 3-sphere embedded in 4-dimensional Euclidean space:
$$d\ell^2 = dx^2 + du^2, \qquad x^2 + u^2 = a^2$$

**negatively curved** ($k = -1$): a hyperboloid embedded in 4-dimensional Lorentzian space:
$$d\ell^2 = dx^2 - du^2, \qquad x^2 - u^2 = -a^2$$

unifying all three after rescaling:
$$d\ell^2 = a^2 \left[\frac{dr^2}{1 - kr^2} + r^2\,d\Omega^2\right]$$

with $k \in \{-1, 0, +1\}$.

---

## relation to the density parameter

the Friedmann equation (see Friedmann equations with Λ) at the present epoch can be written
$$H_0^2 = \frac{8\pi G}{3}\rho_0 - \frac{k c^2}{a_0^2}$$

dividing through by $H_0^2$ and using $\Omega_0 = \rho_0/\rho_{\rm crit}$ and $\rho_{\rm crit} = 3H_0^2/(8\pi G)$:
$$1 = \Omega_0 - \frac{k c^2}{H_0^2 a_0^2}$$

defining the **curvature density parameter**
$$\Omega_K \equiv -\frac{k c^2}{H_0^2 a_0^2}$$

we get
$$\boxed{\,\Omega_0 + \Omega_K = 1\,}$$

so:
- $\Omega_0 > 1 \Rightarrow \Omega_K < 0 \Rightarrow k > 0$: closed universe, finite volume
- $\Omega_0 = 1 \Rightarrow \Omega_K = 0 \Rightarrow k = 0$: flat universe, infinite volume
- $\Omega_0 < 1 \Rightarrow \Omega_K > 0 \Rightarrow k < 0$: open universe, infinite volume

the boundary case $\Omega_0 = 1$ defines the **critical density**:
$$\rho_{\rm crit} = \frac{3 H_0^2}{8\pi G} \approx 1.88\,h^2 \times 10^{-29}~\text{g/cm}^3$$

---

## what observations say

from Planck 2018 + lensing + BAO:
$$\boxed{\,\Omega_K = 1 - \Omega_0 = 0.001 \pm 0.002 \quad (68\%~\text{CL})\,}$$

so the universe is **flat to a fraction of a percent**.

this is also what generic inflation models predict, by stretching out any pre-inflation curvature to undetectable levels (see [Inflation overview](../../02_Zettel/Theory/Inflation overview.html)).

so for ΛCDM in 2025: I always work with $k = 0$ in practice. the formulas simplify:
$$d\ell^2 = a^2(t)[dr^2 + r^2 d\Omega^2]$$
$$d_C(z) = \int_0^z \frac{c\,dz'}{H(z')} \quad \text{(comoving distance, flat)}$$

---

## a subtlety

the value $k \in \{-1, 0, +1\}$ is a *topological* statement (positively, zero, or negatively curved). the *strength* of the curvature is encoded in $a$. so $k$ doesn't measure how strongly curved the universe is — it just classifies the geometry into three categories. the actual curvature scalar is $\propto k/a^2$.

so two universes with different $|k|$ but the same $k/a^2$ are physically equivalent, and we can rescale the radial coordinate to fix $|k| \in \{0, 1\}$.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- 03_Zettel/Theory/Robertson-Walker metric
- Friedmann equations with Λ
- [Density parameters and flatness](../../02_Zettel/Theory/Density parameters and flatness.html)
- [Inflation overview](../../02_Zettel/Theory/Inflation overview.html)
