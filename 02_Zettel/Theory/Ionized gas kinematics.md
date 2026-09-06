---
layout: default
title: "Ionized gas kinematics"
---

# ionized gas kinematics

up: [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.html) · [Datacube redshift measurement](../../02_Zettel/Theory/Datacube redshift measurement.html)

## kinematic observables

Fitting optical nebular emission lines ($\text{H}\alpha$, $[\text{O III}]$, $[\text{N II}]$) across an integral field datacube yields three primary 2D moments:
1. **flux map $F(x, y)$**: surface brightness distribution of the warm ionized gas ($T \sim 10^4$ K).
2. **line-of-sight velocity $V_{\rm los}(x, y)$**: Doppler velocity map showing rotation and streaming.
3. **velocity dispersion $\sigma(x, y)$**: thermal + turbulent broadening plus unresolved velocity gradients.

## tilted-ring analysis

To extract the intrinsic rotation curve $V_{\rm circ}(R)$ from $V_{\rm los}(x, y)$, the disk is modeled as concentric rings:

$$V_{\rm los}(x, y) = V_{\rm sys} + V_{\rm circ}(R) \sin i \cos \psi + V_{\rm exp}(R) \sin i \sin \psi$$

where:
- $i$ is disk inclination ($\cos i = b/a$).
- $\psi$ is azimuthal angle in the disk plane.
- $V_{\rm exp}$ is radial expansion or inflow velocity.

## physical phenomena revealed

- **flat rotation curves**: flat asymptotic behavior $V_{\rm circ}(R) \to \text{const}$ confirming dark matter halos.
- **kinematic decoupling**: counter-rotating gas disks or orthogonal kinematic axes indicating external gas accretion or minor mergers.
- **non-circular motions**: S-shaped isovelocity contours indicating bars, oval potentials, or spiral density waves.
- **galactic winds and outflows**: blueshifted high-velocity wings and elevated $\sigma$ perpendicular to the galactic disk driven by starbursts or AGN.

## connections

- comparison: [Stellar kinematics measurements](../../02_Zettel/Theory/Stellar kinematics measurements.html)
- dark matter: [Dark matter rotation curves](../../02_Zettel/Theory/Dark matter rotation curves.html), [Modified gravity alternatives](../../02_Zettel/Theory/Modified gravity alternatives.html)
- scaling: [Tully-Fisher relation](../../02_Zettel/Theory/Tully-Fisher relation.html)
