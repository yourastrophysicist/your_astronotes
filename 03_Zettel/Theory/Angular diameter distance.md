---
layout: "default"
title: "Angular diameter distance"
---
the **angular diameter distance** $d_A$ relates the **physical size** of an object to its **observed angular size**. defined so that the small-angle relation $\theta = D/d_A$ holds.

## the formula

for a **flat** universe ($k = 0$):
$$\boxed{\, d_A(z) = \frac{d_C(z)}{1 + z} \,}$$

with $d_C(z)$ the comoving distance (see [Radial comoving distance](Radial%20comoving%20distance.html)).

at low $z$: $d_A \approx cz/H_0$, just like Newtonian distance.

## the non-monotonic behaviour

$d_A$ has the unusual feature: as $z$ increases, $d_A$ first **grows**, reaches a **maximum** around $z \sim 1.5$, then **decreases**.

| $z$ | $d_A$ (Mpc, $\Lambda$CDM) |
|---|---|
| 0.1 | 397 |
| 0.5 | 1294 |
| 1.0 | 1660 |
| 1.6 | 1763 (peak!) |
| 3.0 | 1597 |
| 5.0 | 1308 |
| 10.0 | 855 |
| 1100 | 14.0 / 1101 ≈ 12.7 |

so very-high-$z$ objects appear to **subtend the same angle** as nearby ones with the same physical size. counter-intuitive.

physical reason: at very high $z$, the universe was much smaller. so the photons we see today were emitted from a part of the universe that, at the time, was closer to us in proper distance. this proper-time-of-emission distance is small, so the angular size appears large.

## the implications

### CMB acoustic peak position

the first acoustic peak of the CMB at $\ell \approx 200$ corresponds to a sound-horizon scale at recombination of $\sim 150$ Mpc (comoving). its observed angular size:
$$\theta = (150\,\text{Mpc})/d_A(z = 1100) \approx 1°$$

the position of this peak is $\propto 1/\theta \propto d_A(z = 1100)$. measuring $\ell_1 \approx 200$ pins down $d_A$ to $z = 1100$, hence the **geometry of the universe**: $\Omega_K$ to $0.5\%$ precision.

### BAO (baryon acoustic oscillations)

galaxy distribution has a feature at the BAO scale of $\sim 150$ Mpc (comoving). its angular size at any $z$ gives $d_A(z)$. measuring this at multiple $z$ pins down cosmological parameters.

### high-$z$ galaxy sizes

a galaxy of physical size $D = 10$ kpc at $z = 5$:
$$\theta = D/d_A = 10\,\text{kpc}/(1308\,\text{Mpc}) \approx 1.6\,\text{arcsec}$$

resolved by HST and JWST routinely.

## see also

- 03_Zettel/Theory/Cosmological distances
- [Radial comoving distance](Radial%20comoving%20distance.html)
- [Luminosity distance](Luminosity%20distance.html)
- [Surface brightness dimming](Surface%20brightness%20dimming.html)
- [FLRW metric](FLRW%20metric.html)
- [CMB power spectrum](CMB%20power%20spectrum.html)
- [Matter power spectrum and BAO](Matter%20power%20spectrum%20and%20BAO.html)
- [Observational_Cosmology_MOC](../../04_Atlas/Observational_Cosmology_MOC.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (9)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Comoving%20vs%20proper%20coordinates.html" class="backlink-item">Comoving vs proper coordinates</a></li>
    <li class="backlink-item-wrap"><a href="Cosmology%20calculator%20-%20how%20to%20use%20H0%20Omega_m%20Omega_Lambda%20to%20get%20dL%20dA%20t_lookback.html" class="backlink-item">Cosmology calculator - how to use H0 Omega_m Omega_Lambda to get dL dA t_lookback</a></li>
    <li class="backlink-item-wrap"><a href="Curvature-dynamics%20relation.html" class="backlink-item">Curvature-dynamics relation</a></li>
    <li class="backlink-item-wrap"><a href="Distance%20ladder%20derivations.html" class="backlink-item">Distance ladder derivations</a></li>
    <li class="backlink-item-wrap"><a href="K-correction%20in%20optical%20vs%20sub-mm.html" class="backlink-item">K-correction in optical vs sub-mm</a></li>
    <li class="backlink-item-wrap"><a href="Luminosity%20distance.html" class="backlink-item">Luminosity distance</a></li>
    <li class="backlink-item-wrap"><a href="Radial%20comoving%20distance.html" class="backlink-item">Radial comoving distance</a></li>
    <li class="backlink-item-wrap"><a href="Surface%20brightness%20dimming.html" class="backlink-item">Surface brightness dimming</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
  </ul>
</div>

