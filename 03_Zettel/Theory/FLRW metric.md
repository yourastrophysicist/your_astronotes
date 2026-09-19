---
layout: "default"
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

these govern the cosmic evolution. see [Friedmann equations](Friedmann%20equations.html).

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

see [Cosmic eras](Cosmic%20eras.html).

## see also

- [Cosmological principle](Cosmological%20principle.html)
- [Spatial curvature parameter k](Spatial%20curvature%20parameter%20k.html)
- [Friedmann equations](Friedmann%20equations.html)
- [Continuity equation](Continuity%20equation.html)
- [Equation of state and density scaling](Equation%20of%20state%20and%20density%20scaling.html)
- [Cosmic eras](Cosmic%20eras.html)
- [Matter radiation equality](Matter%20radiation%20equality.html)
- [Hubble constant and deceleration parameter](Hubble%20constant%20and%20deceleration%20parameter.html)
- [Newtonian Friedmann derivation](Newtonian%20Friedmann%20derivation.html)
- 03_Zettel/Theory/Robertson-Walker metric
- [Cosmological redshift](Cosmological%20redshift.html)
- Q18 - derive the acceleration equation
- Q19 - radiation universe
- Q20 - matter plus radiation universe
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 7 - Cosmology](../../02_Literature/Book/Baumann%20GR/Ch%207%20-%20Cosmology.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (18)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Angular%20diameter%20distance.html" class="backlink-item">Angular diameter distance</a></li>
    <li class="backlink-item-wrap"><a href="Christoffel%20symbols.html" class="backlink-item">Christoffel symbols</a></li>
    <li class="backlink-item-wrap"><a href="Comoving%20vs%20proper%20coordinates.html" class="backlink-item">Comoving vs proper coordinates</a></li>
    <li class="backlink-item-wrap"><a href="Continuity%20equation.html" class="backlink-item">Continuity equation</a></li>
    <li class="backlink-item-wrap"><a href="Cosmic%20look-back%20time.html" class="backlink-item">Cosmic look-back time</a></li>
    <li class="backlink-item-wrap"><a href="Cosmological%20redshift.html" class="backlink-item">Cosmological redshift</a></li>
    <li class="backlink-item-wrap"><a href="Einstein%20equations.html" class="backlink-item">Einstein equations</a></li>
    <li class="backlink-item-wrap"><a href="Equation%20of%20state%20and%20density%20scaling.html" class="backlink-item">Equation of state and density scaling</a></li>
    <li class="backlink-item-wrap"><a href="Friedmann%20equations.html" class="backlink-item">Friedmann equations</a></li>
    <li class="backlink-item-wrap"><a href="Geodesic%20equation.html" class="backlink-item">Geodesic equation</a></li>
    <li class="backlink-item-wrap"><a href="Killing%20vectors%20and%20conserved%20quantities.html" class="backlink-item">Killing vectors and conserved quantities</a></li>
    <li class="backlink-item-wrap"><a href="Lambda%20CDM%20current%20parameters.html" class="backlink-item">Lambda CDM current parameters</a></li>
    <li class="backlink-item-wrap"><a href="Manifold%20metric%20and%20signature.html" class="backlink-item">Manifold metric and signature</a></li>
    <li class="backlink-item-wrap"><a href="Matter%20radiation%20equality.html" class="backlink-item">Matter radiation equality</a></li>
    <li class="backlink-item-wrap"><a href="Radial%20comoving%20distance.html" class="backlink-item">Radial comoving distance</a></li>
    <li class="backlink-item-wrap"><a href="Spatial%20curvature%20parameter%20k.html" class="backlink-item">Spatial curvature parameter k</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
  </ul>
</div>

