---
layout: "default"
title: "Friedmann equations"
---
the **Friedmann equations** are Einstein's equations applied to the homogeneous-isotropic FLRW universe with a perfect-fluid stress-energy. two equations, governing the dynamics of the scale factor $a(t)$.

## the equations

### Friedmann equation (constraint)
$$\boxed{\, H^2 = \left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2} + \frac{\Lambda c^2}{3} \,}$$

with $H \equiv \dot a/a$ the Hubble parameter. the constraint relating the rate of expansion to energy density + spatial curvature + cosmological constant.

### acceleration equation (Raychaudhuri)
$$\boxed{\, \frac{\ddot a}{a} = -\frac{4\pi G}{3}(\rho + 3p) + \frac{\Lambda c^2}{3} \,}$$

the source of cosmic acceleration is $\rho + 3p$, not just $\rho$. for ordinary matter ($p > 0$), gravity decelerates. for dark energy ($p < -\rho/3$), gravity accelerates.

### continuity equation (conservation)

stress-energy conservation gives:
$$\dot \rho + 3H(\rho + p) = 0$$

see [Continuity equation](Continuity%20equation.html).

## why two equations + one conservation = consistent

the **contracted Bianchi identity** ensures that two of the three equations are independent. given any two, the third follows. so:
- **Friedmann + continuity** $\to$ derive acceleration.
- **Friedmann + acceleration** $\to$ derive continuity.
- **acceleration + continuity** $\to$ derive Friedmann (up to a constant of integration, fixed by current conditions).

this redundancy is a feature, not a bug; it's what makes the system over-determined at the global level + uniquely solvable.

## the derivation

start with FLRW metric $ds^2 = -dt^2 + a^2(t)\gamma_{ij}\,dx^i dx^j$. compute Einstein tensor:
$$G_{00} = 3\!\left(\frac{\dot a}{a}\right)^2 + \frac{3 k}{a^2}, \quad G_{ij} = -\!\left(2\frac{\ddot a}{a} + \!\left(\frac{\dot a}{a}\right)^2 + \frac{k}{a^2}\right)g_{ij}$$

set equal to $8\pi G\,T_{\mu\nu}$ for a perfect fluid: $T_{00} = \rho$, $T_{ij} = p g_{ij}$.

$00$ component gives Friedmann.
spatial component combined with $00$ gives acceleration.

see Q18 - derive the acceleration equation.

## the equations in dimensionless form

defining critical density $\rho_c = 3H^2/(8\pi G)$ and $\Omega_X = \rho_X/\rho_c$:
$$1 = \sum_X \Omega_X = \Omega_m + \Omega_r + \Omega_\Lambda + \Omega_k$$

with $\Omega_k = -kc^2/(a_0^2 H_0^2)$. so the universe today has:
- $\Omega_m \approx 0.31$ (matter, dominantly cold dark matter + baryons).
- $\Omega_r \approx 9 \times 10^{-5}$ (radiation, photons + relativistic neutrinos).
- $\Omega_\Lambda \approx 0.69$ (dark energy).
- $\lvert \Omega_k\rvert < 0.005$ (curvature, ~zero).

summing: $\Omega_{\rm tot} \approx 1$, consistent with flatness.

## the Hubble equation in cosmology

writing the Friedmann equation in terms of redshift:
$$H(z)^2 = H_0^2\!\left[\Omega_r(1+z)^4 + \Omega_m(1+z)^3 + \Omega_\Lambda + \Omega_k(1+z)^2\right]$$

each species's contribution scales with $z$ according to its equation of state. used for distance + age calculations in cosmology.

## see also

- [FLRW metric](FLRW%20metric.html)
- [Spatial curvature parameter k](Spatial%20curvature%20parameter%20k.html)
- [Continuity equation](Continuity%20equation.html)
- [Equation of state and density scaling](Equation%20of%20state%20and%20density%20scaling.html)
- [Cosmic eras](Cosmic%20eras.html)
- [Matter radiation equality](Matter%20radiation%20equality.html)
- [Hubble constant and deceleration parameter](Hubble%20constant%20and%20deceleration%20parameter.html)
- [Newtonian Friedmann derivation](Newtonian%20Friedmann%20derivation.html)
- Friedmann equations with Λ
- [Cosmological constant](Cosmological%20constant.html)
- Q18 - derive the acceleration equation
- Q19 - radiation universe
- Q20 - matter plus radiation universe
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 7 - Cosmology](../../02_Literature/Book/Baumann%20GR/Ch%207%20-%20Cosmology.html)

---

### General Relativity Mathematical & Oral Defense Panel

![gr_q18_solution.png](../../assets/images/gr_q18_solution.png)
*Question 18 Oral Exam Model Solution: Friedmann equation $H^2 = \frac{8\pi G}{3}\rho - \frac{k}{a^2}$ and continuity equation $\dot{\rho} + 3H(\rho + p) = 0$, derivation of the acceleration equation $\frac{\ddot{a}}{a} = -\frac{4\pi G}{3}(\rho + 3p)$, and deceleration parameter $q_0 = \frac{1}{2}\Omega_m - \Omega_\Lambda$.*

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (25)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Continuity%20equation.html" class="backlink-item">Continuity equation</a></li>
    <li class="backlink-item-wrap"><a href="Cosmic%20eras.html" class="backlink-item">Cosmic eras</a></li>
    <li class="backlink-item-wrap"><a href="Cosmic%20look-back%20time.html" class="backlink-item">Cosmic look-back time</a></li>
    <li class="backlink-item-wrap"><a href="Cosmological%20constant.html" class="backlink-item">Cosmological constant</a></li>
    <li class="backlink-item-wrap"><a href="Curvature-dynamics%20relation.html" class="backlink-item">Curvature-dynamics relation</a></li>
    <li class="backlink-item-wrap"><a href="Deceleration%20parameter.html" class="backlink-item">Deceleration parameter</a></li>
    <li class="backlink-item-wrap"><a href="Density%20parameters.html" class="backlink-item">Density parameters</a></li>
    <li class="backlink-item-wrap"><a href="Einstein%20equations.html" class="backlink-item">Einstein equations</a></li>
    <li class="backlink-item-wrap"><a href="Equation%20of%20state%20and%20density%20scaling.html" class="backlink-item">Equation of state and density scaling</a></li>
    <li class="backlink-item-wrap"><a href="FLRW%20metric.html" class="backlink-item">FLRW metric</a></li>
    <li class="backlink-item-wrap"><a href="Friedmann%20solutions.html" class="backlink-item">Friedmann solutions</a></li>
    <li class="backlink-item-wrap"><a href="GR%20Friedmann%20with%20Lambda.html" class="backlink-item">GR Friedmann with Lambda</a></li>
    <li class="backlink-item-wrap"><a href="Hubble%20law.html" class="backlink-item">Hubble law</a></li>
    <li class="backlink-item-wrap"><a href="Lambda%20CDM%20current%20parameters.html" class="backlink-item">Lambda CDM current parameters</a></li>
    <li class="backlink-item-wrap"><a href="Matter%20radiation%20equality.html" class="backlink-item">Matter radiation equality</a></li>
    <li class="backlink-item-wrap"><a href="Matter%20vs%20radiation%20density%20scaling.html" class="backlink-item">Matter vs radiation density scaling</a></li>
    <li class="backlink-item-wrap"><a href="Newtonian%20derivation%20of%20Friedmann.html" class="backlink-item">Newtonian derivation of Friedmann</a></li>
    <li class="backlink-item-wrap"><a href="Radial%20comoving%20distance.html" class="backlink-item">Radial comoving distance</a></li>
    <li class="backlink-item-wrap"><a href="Spatial%20curvature%20parameter%20k.html" class="backlink-item">Spatial curvature parameter k</a></li>
    <li class="backlink-item-wrap"><a href="Stress-energy%20tensor.html" class="backlink-item">Stress-energy tensor</a></li>
    <li class="backlink-item-wrap"><a href="Time-redshift%20relation.html" class="backlink-item">Time-redshift relation</a></li>
    <li class="backlink-item-wrap"><a href="Transition%20epochs.html" class="backlink-item">Transition epochs</a></li>
    <li class="backlink-item-wrap"><a href="Various%20models%20of%20the%20universe.html" class="backlink-item">Various models of the universe</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
  </ul>
</div>

