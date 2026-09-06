---
layout: default
title: "FLRW metric"
---

the **Friedmann-Lemaître-Robertson-Walker (FLRW) metric** is the unique spacetime metric for a **homogeneous + isotropic universe**. it's the cosmological principle made geometric.

## the metric

$$\boxed{\, ds^2 = -dt^2 + a(t)^2\,\gamma_{ij}\,dx^i\,dx^j \,}$$

with:
- $t$ = cosmic time.
- $a(t)$ = the **scale factor**, the only dynamical variable.
- $\gamma_{ij}$ = spatial metric of constant curvature.

equivalently in spherical coordinates:
$$ds^2 = -dt^2 + a(t)^2\!\left(\frac{dr^2}{1 - kr^2} + r^2 d\Omega^2\right)$$

with $k$ the **spatial curvature parameter**:
- $k = +1$: closed (3-sphere).
- $k = 0$: flat (3-Euclidean).
- $k = -1$: open (3-hyperbolic).

## the assumptions: cosmological principle

FLRW assumes the **cosmological principle**:
- **homogeneity**: the universe looks the same at every point in space (averaged over large scales).
- **isotropy**: the universe looks the same in every direction (averaged).

these together force the spatial metric to be one of three constant-curvature options. and force the time-dependence to enter only through $a(t)$.

so the entire dynamics of the universe is encoded in one function $a(t)$. remarkable simplification.

## what $a(t)$ does

the scale factor stretches all comoving distances:
- **comoving distance**: a fixed coordinate distance $\Delta x^i$.
- **proper distance** (instantaneous): $a(t) \Delta x$.

today, $a(t_0) = 1$ by convention. at earlier times, $a < 1$. the **redshift** of a photon emitted at $t_e$ and received now:
$$1 + z = a(t_0)/a(t_e) = 1/a(t_e)$$

so $a$ at any time = $1/(1+z)$ at that time.

## the Hubble parameter

$$H(t) \equiv \dot a/a$$

the rate of expansion. at present, $H_0 \approx 67$ to $73$ km/s/Mpc. dimension of inverse time. $H_0^{-1} \approx 14$ Gyr (Hubble time).

## the Friedmann equations

plugging FLRW + a perfect fluid into Einstein's equation gives the **Friedmann equations**:
$$H^2 = \frac{8\pi G}{3}\rho - \frac{k}{a^2}$$
$$\frac{\ddot a}{a} = -\frac{4\pi G}{3}(\rho + 3p)$$

these govern the cosmic evolution. see [Friedmann equations](../../02_Zettel/Theory/Friedmann equations.md).

## redshift physics

a photon emitted at $t_e$ with wavelength $\lambda_e$ is received at $t_0$ with wavelength $\lambda_0$:
$$\lambda_0/\lambda_e = a(t_0)/a(t_e) = 1 + z$$

so the photon's wavelength expands with the universe. equivalently, the photon **loses energy** by factor $a$, mimicking a "redshift."

physical interpretation: the photon's wave-front follows null geodesics, and the spatial metric stretches as $a$ grows. so the wavelength stretches with the universe.

## three eras

depending on which fluid dominates the energy density:
1. **radiation era**: $\rho \propto a^{-4}$, $a \propto t^{1/2}$. early universe ($z > 3400$).
2. **matter era**: $\rho \propto a^{-3}$, $a \propto t^{2/3}$. $z = 0.5$ to $3400$.
3. **dark energy era**: $\rho \approx $ const, $a \propto e^{Ht}$. $z < 0.5$, including today.

see [Cosmic eras](../../02_Zettel/Theory/Cosmic eras.md).

## see also

- [Cosmological principle](../../02_Zettel/Theory/Cosmological principle.md)
- [Spatial curvature parameter k](../../02_Zettel/Theory/Spatial curvature parameter k.md)
- [Friedmann equations](../../02_Zettel/Theory/Friedmann equations.md)
- [Continuity equation](../../02_Zettel/Theory/Continuity equation.md)
- [Equation of state and density scaling](../../02_Zettel/Theory/Equation of state and density scaling.md)
- [Cosmic eras](../../02_Zettel/Theory/Cosmic eras.md)
- [Matter radiation equality](../../02_Zettel/Theory/Matter radiation equality.md)
- [Hubble constant and deceleration parameter](../../02_Zettel/Theory/Hubble constant and deceleration parameter.md)
- [Newtonian Friedmann derivation](../../02_Zettel/Theory/Newtonian Friedmann derivation.md)
- 03_Zettel/Theory/Robertson-Walker metric
- [Cosmological redshift](../../02_Zettel/Theory/Cosmological redshift.md)
- Q18 - derive the acceleration equation
- Q19 - radiation universe
- Q20 - matter plus radiation universe
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 7 - Cosmology](../../01_Literature/Book/Baumann GR/Ch 7 - Cosmology.md)
