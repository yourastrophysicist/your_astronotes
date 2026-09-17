---
layout: "default"
title: "Ionized gas kinematics"
---
{% raw %}
# ionized gas kinematics

up: [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html) · [Datacube redshift measurement](./Datacube%20redshift%20measurement.html)

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

- comparison: [Stellar kinematics measurements](./Stellar%20kinematics%20measurements.html)
- dark matter: [Dark matter rotation curves](./Dark%20matter%20rotation%20curves.html), [Modified gravity alternatives](./Modified%20gravity%20alternatives.html)
- scaling: [Tully-Fisher relation](./Tully-Fisher%20relation.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Datacube%20redshift%20measurement.html" class="backlink-item">Datacube redshift measurement</a></li>
    <li class="backlink-item-wrap"><a href="./Datacube%20reduction.html" class="backlink-item">Datacube reduction</a></li>
    <li class="backlink-item-wrap"><a href="./MUSE%20datacubes.html" class="backlink-item">MUSE datacubes</a></li>
    <li class="backlink-item-wrap"><a href="./Mass-radius%20and%20mass-velocity%20relations.html" class="backlink-item">Mass-radius and mass-velocity relations</a></li>
  </ul>
</div>
