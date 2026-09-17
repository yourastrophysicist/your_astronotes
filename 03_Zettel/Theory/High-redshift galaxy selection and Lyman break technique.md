---
layout: "default"
title: "High-redshift galaxy selection and Lyman break technique"
name: "High-redshift galaxy selection and Lyman break technique"
description: "color-color dropout selection, photoelectric absorption at 912 Angstroms, and Lyman break galaxy populations"
---
{% raw %}
identifying galaxies in the early universe ($z > 3$) requires photometric techniques that target strong spectral features before committing costly spectroscopic follow-up.

## physical mechanism of the lyman break

the intrinsic spectrum of a star-forming galaxy drops abruptly at rest-frame $\lambda_0 \le 912\text{ \AA}$ (the Lyman limit) due to photoelectric ionization absorption by neutral hydrogen in stellar atmospheres and the interstellar medium.
furthermore, along cosmological sightlines, neutral hydrogen clouds in the intergalactic medium (the Lyman-$\alpha$ forest) absorb radiation between $912\text{ \AA} \le \lambda_0 \le 1216\text{ \AA}$.

for an observer at $z$:
- rest-frame flux at $\lambda_0 < 912\text{ \AA}$ is completely extinguished, shifted into observed wavelength $\lambda_{\text{obs}} < 912(1+z)\text{ \AA}$.
- the galaxy drops out entirely (is undetected) in filters bluer than the redshifted Lyman break, while appearing brightly in redder continuum filters.

## color-color dropout selection (steidel et al.)

by observing through three contiguous filters (e.g. $U_n, G, \mathcal{R}$):
1. **$U$-dropouts ($z \sim 3$)**: bright in $G$ and $\mathcal{R}$, undetected in $U_n$.
   $$(U_n - G) > 1.0 + (G - \mathcal{R})$$
2. **$B$-dropouts ($z \sim 4$)**: undetected in $B$, bright in $V$ and $i$.
3. **$V$-dropouts ($z \sim 5$)**, **$i$-dropouts ($z \sim 6$)**, **$z$-dropouts ($z \sim 7$)**.

## high-redshift galaxy demographics

1. **Lyman Break Galaxies (LBGs)**: actively star-forming, UV-bright galaxies with moderate dust extinction ($E(B-V) \sim 0.1 - 0.2$), tracing the high-mass end of the high-$z$ star-forming population.
2. **Lyman Alpha Emitters (LAEs)**: selected via narrow-band imaging targeting the redshifted Ly$\alpha$ line ($1216(1+z)\text{ \AA}$), tracing low-mass, dust-poor, compact galaxies with high specific star formation rates.
3. **Sub-millimeter Galaxies (SMGs)**: dust-obscured hyper-luminous starbursts ($L_{\text{IR}} > 10^{12} L_\odot$) at $z \sim 2 - 4$, discovered by SCUBA and ALMA.

## see also

- [Observational_Cosmology_MOC](../../04_Atlas/Observational_Cosmology_MOC.html)
- [Pablo_05_Galaxies_at_cosmological_distances](../../02_Literature/Lectures/Observational_Cosmology/Pablo_05_Galaxies_at_cosmological_distances.html)
- [Cosmic dawn and high-redshift galaxies with JWST](./Cosmic%20dawn%20and%20high-redshift%20galaxies%20with%20JWST.html)
- Galaxy spectral energy distribution fitting
- [Cosmic star formation history](./Cosmic%20star%20formation%20history.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Cosmic%20dawn%20and%20high-redshift%20galaxies%20with%20JWST.html" class="backlink-item">Cosmic dawn and high-redshift galaxies with JWST</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
  </ul>
</div>
