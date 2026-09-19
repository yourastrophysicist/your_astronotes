---
layout: "default"
title: "Gravitational microlensing of planetary systems"
---
gravitational microlensing detects exoplanets through the relativistic bending of light from a background source star by the gravitational field of an intervening lens star hosting a planet.

## the point-mass lens and the einstein radius

for a lens of mass $M_L$ at distance $D_L$ from observer and $D_S$ from source ($D_{LS} = D_S - D_L$), the characteristic angular scale is the **angular Einstein radius**:

$$\theta_E = \sqrt{\frac{4 G M_L}{c^2} \frac{D_{LS}}{D_L D_S}}$$

as the source passes at impact parameter $u(t) = \sqrt{u_0^2 + (t - t_0)^2 / t_E^2}$ (where $t_E = \theta_E / \mu_{\text{rel}}$ is Einstein crossing time), the source is magnified according to the Paczyński (1986) light curve:

$$A(u) = \frac{u^2 + 2}{u \sqrt{u^2 + 4}} > 1$$

## planetary perturbations and caustics

when a planet of mass $M_p = q M_L$ ($q \ll 1$) orbits the lens at projected separation $s = d / \theta_E$, it acts as a binary lens. the 2D lens mapping is:

$$\boldsymbol{\zeta} = \mathbf{z} - \frac{1}{1+q}\frac{\mathbf{z} - \mathbf{z}_1}{\lvert \mathbf{z} - \mathbf{z}_1\rvert^2} - \frac{q}{1+q}\frac{\mathbf{z} - \mathbf{z}_2}{\lvert \mathbf{z} - \mathbf{z}_2\rvert^2}$$

where $\boldsymbol{\zeta}$ is source position and $\mathbf{z}$ is image position.
the determinant of the Jacobian $\det J = 0$ defines closed curves in the source plane called **caustics**. when the background source crosses a caustic curve, magnification formally diverges ($A \to \infty$), producing sharp, asymmetric spike anomalies in the light curve lasting hours to days.

## unique observational niche

- **cold planets beyond the snow line**: sensitivity peaks at $s \sim 1$ ($1 - 5\text{ AU}$), exactly where RV and transit methods lose sensitivity.
- **independent of host star luminosity**: detects planets around faint M-dwarfs, brown dwarfs, and even free-floating planets (FFPs) stripped of host stars.
- central pillar of the upcoming NASA Nancy Grace Roman Space Telescope microlensing survey.

## see also

- [Exoplanetary_Astrophysics_MOC](../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- [05_Gravitational_Microlensing_Principles_and_Light_Curves](../../02_Literature/Lectures/Exoplanetary_Astrophysics/05_Gravitational_Microlensing_Principles_and_Light_Curves.html)
- [Exoplanet demographic distributions and survey completeness](Exoplanet%20demographic%20distributions%20and%20survey%20completeness.html)
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (1)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
  </ul>
</div>

