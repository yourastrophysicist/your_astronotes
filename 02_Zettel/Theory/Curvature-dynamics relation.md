---
layout: default
title: "Curvature-dynamics relation"
---

**spatial curvature is determined by the total energy content** of the universe. expressed cleanly in the Friedmann equation today: $kc^2 = H_0^2 a_0^2(\Omega_{\rm tot} - 1)$. flat universe iff $\sum\Omega = 1$.

## the relation

from the Friedmann equation today:
$$H_0^2 = \frac{8\pi G}{3}\rho_0 - \frac{kc^2}{a_0^2} + \frac{\Lambda c^2}{3}$$

dividing by $H_0^2$ + using $\rho_c = 3 H_0^2/(8\pi G)$:
$$1 = \Omega_m + \Omega_r + \Omega_\Lambda - \frac{kc^2}{H_0^2 a_0^2}$$

defining $\Omega_k \equiv -kc^2/(a_0^2 H_0^2)$:
$$\boxed{\, \Omega_m + \Omega_r + \Omega_\Lambda + \Omega_k = 1 \,}$$

equivalently:
$$\boxed{\, kc^2 = H_0^2 a_0^2 (\Omega_{\rm tot} - 1) \,}$$

with $\Omega_{\rm tot} = \Omega_m + \Omega_r + \Omega_\Lambda$.

## the three cases

- $\Omega_{\rm tot} > 1$ ($\Omega_k < 0$): **closed** universe ($k = +1$). more energy than critical; gravity wins; spatial slices are 3-spheres.
- $\Omega_{\rm tot} = 1$ ($\Omega_k = 0$): **flat** universe ($k = 0$). exactly critical density. spatial slices are Euclidean.
- $\Omega_{\rm tot} < 1$ ($\Omega_k > 0$): **open** universe ($k = -1$). less than critical density. spatial slices are 3-hyperbolic.

## the observed value

current measurements (Planck + BAO):
$$|\Omega_k| < 0.005\quad(95\%\,\text{CL})$$

so $\Omega_{\rm tot} = 1$ to within $\sim 0.5\%$. universe is **flat**.

equivalently: the curvature radius $R_k > 14$ Gpc, much bigger than the observable universe ($\sim 14$ Gpc). so curvature is undetectable on observable scales.

## the connection to inflation

a key prediction of **inflation**: the universe should be **flat** to extreme precision. inflation drives $\Omega_k \to 0$ exponentially during the inflationary epoch, regardless of any pre-inflationary curvature.

so the observation $|\Omega_k| < 0.005$ is **consistent with inflation**. measuring $\Omega_k$ at higher precision tests whether inflation was sufficient + uniform.

## the physical picture

curvature parameter $k$ specifies the **geometry** of spatial slices:
- $k = +1$: positively curved 3-sphere. parallel lines converge. triangle angles $> 180°$.
- $k = 0$: flat 3-Euclidean. parallel lines stay parallel. triangles $= 180°$.
- $k = -1$: negatively curved 3-hyperbolic. parallel lines diverge. triangles $< 180°$.

## the measurement: CMB acoustic peaks

the **first acoustic peak** of the CMB at $\ell \approx 220$ corresponds to a sound-horizon scale at recombination of $\sim 150$ Mpc (comoving). its observed angular size:
$$\theta = (150\,\text{Mpc})/d_A(z = 1100)$$

depends on the angular-diameter distance to recombination, which depends on the global geometry (specifically $\Omega_k$).

flat universe: $\ell_1 \approx 220$. open: smaller. closed: larger. Planck data give $\ell_1 = 219.4 \pm 0.4$, consistent with flat.

## see also

- [Spatial curvature parameter k](../../02_Zettel/Theory/Spatial curvature parameter k.md)
- [Friedmann equations](../../02_Zettel/Theory/Friedmann equations.md)
- [Density parameters](../../02_Zettel/Theory/Density parameters.md)
- [ΛCDM current parameters](../../02_Zettel/Theory/ΛCDM current parameters.md)
- [CMB power spectrum](../../02_Zettel/Theory/CMB power spectrum.md)
- [Angular diameter distance](../../02_Zettel/Theory/Angular diameter distance.md)
- [Inflation overview](../../02_Zettel/Theory/Inflation overview.md)
- [Cosmological constant](../../02_Zettel/Theory/Cosmological constant.md)
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.md)
