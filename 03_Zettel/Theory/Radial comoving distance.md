---
layout: "default"
title: "Radial comoving distance"
---
{% raw %}
the **radial comoving distance** $d_C(z)$ is the line-of-sight integral $c\int dz'/H(z')$. it's the most fundamental cosmological distance: every other distance ($d_L$, $d_A$) is built from it.

## the formula

$$\boxed{\, d_C(z) = c\int_0^z \frac{dz'}{H(z')} \,}$$

with $H(z') = H_0\sqrt{\Omega_m(1+z')^3 + \Omega_r(1+z')^4 + \Omega_\Lambda + \Omega_k(1+z')^2}$.

units: Mpc, or equivalently in $h^{-1}$ Mpc with $h = H_0/100$ km/s/Mpc.

## what it represents

$d_C$ is the comoving distance to a source at redshift $z$. it's the **"current" distance**, scaled to $a(t_0) = 1$. galaxies in the Hubble flow have constant $d_C$; their proper distance grows as $a(t)$.

at low $z$: $d_C \approx cz/H_0$, the Hubble distance. Hubble flow recovered.
at high $z$: $d_C$ depends on the cosmological model via the $H(z)$ integral. probes $\Omega_m, \Omega_\Lambda$, etc.

## benchmark values in $\Lambda$CDM

with $H_0 = 67.4$ km/s/Mpc, $\Omega_m = 0.31$, $\Omega_\Lambda = 0.69$:

| $z$ | $d_C$ (Mpc) |
|---|---|
| 0.1 | 437 |
| 0.5 | 1.94 Gpc |
| 1.0 | 3.32 Gpc |
| 2.0 | 5.18 Gpc |
| 3.0 | 6.39 Gpc |
| 5.0 | 7.85 Gpc |
| 10.0 | 9.41 Gpc |
| 1100 (recombination) | 14.0 Gpc |

at $z = \infty$, $d_C$ approaches the **particle horizon** $\sim 14.4$ Gpc.

## relation to other distances

with spatial curvature parameter $k = 0$ (flat universe, our case):
- **comoving distance**: $d_C(z)$ as above.
- **luminosity distance**: $d_L(z) = d_C(z)(1+z)$.
- **angular diameter distance**: $d_A(z) = d_C(z)/(1+z)$.
- **proper distance now**: $d_C(z)$.
- **proper distance at emission**: $d_C(z)/(1+z) = d_A(z)$.

so $d_L \cdot d_A = d_C^2$, and $d_L = d_A(1+z)^2$, the **Etherington reciprocity** relation.

for non-flat universes, replace $d_C$ in $d_L, d_A$ with the **transverse comoving distance** $d_M$, which absorbs the curvature corrections.

## see also

- 03_Zettel/Theory/Cosmological distances
- [Comoving vs proper coordinates](./Comoving%20vs%20proper%20coordinates.html)
- [Angular diameter distance](./Angular%20diameter%20distance.html)
- [Luminosity distance](./Luminosity%20distance.html)
- [FLRW metric](./FLRW%20metric.html)
- [Friedmann equations](./Friedmann%20equations.html)
- [Hubble law](./Hubble%20law.html)
- [Time-redshift relation](./Time-redshift%20relation.html)
- [Observational_Cosmology_MOC](../../04_Atlas/Observational_Cosmology_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (9)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Angular%20diameter%20distance.html" class="backlink-item">Angular diameter distance</a></li>
    <li class="backlink-item-wrap"><a href="./Comoving%20vs%20proper%20coordinates.html" class="backlink-item">Comoving vs proper coordinates</a></li>
    <li class="backlink-item-wrap"><a href="./Cosmological%20redshift.html" class="backlink-item">Cosmological redshift</a></li>
    <li class="backlink-item-wrap"><a href="./Distance%20ladder%20derivations.html" class="backlink-item">Distance ladder derivations</a></li>
    <li class="backlink-item-wrap"><a href="./Galaxy%20number%20counts%20N%28m%29.html" class="backlink-item">Galaxy number counts N(m)</a></li>
    <li class="backlink-item-wrap"><a href="./Luminosity%20distance.html" class="backlink-item">Luminosity distance</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Surface%20brightness%20dimming.html" class="backlink-item">Surface brightness dimming</a></li>
    <li class="backlink-item-wrap"><a href="./Time-redshift%20relation.html" class="backlink-item">Time-redshift relation</a></li>
  </ul>
</div>
