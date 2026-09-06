---
layout: default
title: "Ionized gas SMBH masses"
---

# ionized gas smbh masses

up: [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.html) · [Water maser BH masses](../../02_Zettel/Theory/Water maser BH masses.html)

## the method

Measuring the mass of a supermassive black hole $M_{\rm BH}$ from the Keplerian rotation of a thin nuclear disk of ionized gas (Harms et al. 1994 on M87, Ferrarese et al. 1996):

$$v(r) = \sqrt{\frac{G M_{\rm BH}}{r} + v_{\rm stars}^2(r)}$$

where $v_{\rm stars}^2(r) = G M_*(<r)/r$ is the gravitational potential contributed by the nuclear stellar cluster.

## requirement: the sphere of influence

To avoid degeneracy with the nuclear stellar mass profile, the observations must resolve the gravitational sphere of influence:

$$r_{\rm infl} = \frac{G M_{\rm BH}}{\sigma_*^2}$$

For a $10^8 M_\odot$ black hole in a galaxy with stellar velocity dispersion $\sigma_* = 200$ km/s:
$$r_{\rm infl} \approx 10.75 \text{ pc}$$
At $d = 16$ Mpc, this corresponds to an angular size $\theta = r_{\rm infl}/d \approx 0.14''$, requiring HST STIS or ground-based 8m telescopes with AO.

## advantages and pitfalls

- **advantages**:
  - Simple geometry: gas forms a thin rotationally supported disk.
  - Mathematically direct: velocity is circular Keplerian velocity, unlike stellar kinematics which requires solving the Jeans equations or Schwarzschild orbit superposition models.
- **pitfalls**:
  - Non-gravitational forces: radiation pressure, AGN jets, shocks, and magnetic fields can disrupt simple rotation.
  - Turbulence: intrinsic gas velocity dispersion $\sigma_{\rm gas}$ may require asymmetric drift corrections.

## connections

- alternative methods: [Water maser BH masses](../../02_Zettel/Theory/Water maser BH masses.html), [Galactic Center Sgr A and S-stars](../../02_Zettel/Theory/interf/Galactic Center Sgr A and S-stars.html)
- scaling laws: SMBH scaling relations M-sigma
