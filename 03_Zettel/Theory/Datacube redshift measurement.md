---
layout: "default"
title: "Datacube redshift measurement"
---
{% raw %}
# datacube redshift measurement

up: [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html) · [Datacube reduction](./Datacube%20reduction.html)

## measurement principles

Determining the systemic redshift $z_{\rm sys}$ and spatially resolved velocity field $v(x, y)$ from an IFU datacube:

$$1 + z = \frac{\lambda_{\rm obs}}{\lambda_{\rm rest}}$$

$$v(x, y) = c \left( \frac{z(x, y) - z_{\rm sys}}{1 + z_{\rm sys}} \right)$$

## two complementary approaches

1. **emission lines (gas redshift)**:
   - For star-forming and AGN spaxels.
   - Simultaneous non-linear least-squares fitting of multiple Gaussian or Gauss-Hermite profiles to prominent lines:
     $$[\text{O II}] \lambda 3727, \text{H}\beta \lambda 4861, [\text{O III}] \lambda\lambda 4959, 5007, \text{H}\alpha \lambda 6563, [\text{N II}] \lambda\lambda 6548, 6584, [\text{S II}] \lambda\lambda 6717, 6731$$
   - Physical constraints: identical velocity and velocity dispersion for doublet components; fixed theoretical doublet ratios (e.g., $[\text{O III}]\lambda 5007 / [\text{O III}]\lambda 4959 = 2.98$).

2. **stellar absorption lines (stellar redshift)**:
   - For passive galaxies and early-type bulges.
   - Penalized Pixel-Fitting (pPXF, Cappellari 2017): convolves stellar population template libraries with a Gauss-Hermite line-of-sight velocity distribution (LOSVD):
     $$\mathcal{L}(v) = \frac{1}{\sqrt{2\pi}\sigma} \exp\left(-\frac{(v-V)^2}{2\sigma^2}\right) \left[ 1 + h_3 H_3\left(\frac{v-V}{\sigma}\right) + h_4 H_4\left(\frac{v-V}{\sigma}\right) \right]$$
   - Yields mean velocity $V$, velocity dispersion $\sigma$, and asymmetric ($h_3$) / symmetric ($h_4$) departures from Gaussianity.

## connections

- applications: [Ionized gas kinematics](./Ionized%20gas%20kinematics.html), [Stellar kinematics measurements](./Stellar%20kinematics%20measurements.html)
- facilities: [MUSE datacubes](./MUSE%20datacubes.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Datacube%20reduction.html" class="backlink-item">Datacube reduction</a></li>
    <li class="backlink-item-wrap"><a href="./Ionized%20gas%20kinematics.html" class="backlink-item">Ionized gas kinematics</a></li>
  </ul>
</div>
