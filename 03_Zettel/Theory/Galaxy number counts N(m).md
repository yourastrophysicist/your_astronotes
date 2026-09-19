---
layout: "default"
title: "Galaxy number counts N(m)"
---
# galaxy number counts $N(m)$

up: [Pablo_02_Statistical_properties_of_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)

## the simplest extragalactic statistic

count how many galaxies you see brighter than apparent magnitude $m$, per square degree. that gives the **cumulative count** $N(<m)$. its derivative $dN/dm$ is the **differential count** (see [Differential vs cumulative number counts](Differential%20vs%20cumulative%20number%20counts.html)).

historically this is the very first thing Hubble did in 1934 with $\sim 44{,}000$ galaxies on photographic plates.

## the euclidean prediction

assume:

- space is flat, static, infinite, and homogeneous in galaxy density $n_0$
- all galaxies have the same intrinsic luminosity $L$
- no K-correction, no evolution

then a galaxy of luminosity $L$ at distance $d$ has flux $S = L/(4\pi d^2)$, so $d_{\max}(S) \propto S^{-1/2}$. the volume out to $d_{\max}$ is $V \propto d_{\max}^3 \propto S^{-3/2}$. the count brighter than flux $S$ is $N(>S) = n_0 V \propto S^{-3/2}$.

in magnitudes ($m = -2.5 \log_{10} S + \text{const}$), so $\log_{10} S = -0.4 m + \text{const}$:

$$\log_{10} N(<m) = 0.6\, m + \text{const}, \qquad \frac{d \log N}{dm} = 0.6$$

this is the **Euclidean slope**. it is what you would observe in a static, infinite, non-evolving universe.

## what the data show

the actual counts are close to euclidean only over a limited range, then they *flatten*. at faint magnitudes the slope drops well below 0.6 (in the optical, $\sim 0.3$–$0.4$ at $B \sim 24$, even shallower at $K$).

three reasons for the deviation, all cosmological:

1. **finite extent / volume curvature**: the universe is not Euclidean; comoving volume saturates as $z \to \infty$ in flat $\Lambda$CDM (see [Radial comoving distance](Radial%20comoving%20distance.html) and the volume element $dV/dz$).
2. **K-correction**: at high $z$, the rest-frame band you are observing is bluer than the filter, where galaxies are usually fainter (see [K-correction](K-correction.html)).
3. **evolution**: galaxies were brighter / more numerous in the past (the cosmic SFR peaks at $z \sim 2$, see [Cosmic star formation history](Cosmic%20star%20formation%20history.html)).

## what pablo overplots

cosmological models on top of the observed counts: $\Omega_M=1$ no-$\Lambda$ EdS, $\Omega_M=0.3$ open, $\Omega_M=0.3,\Omega_\Lambda=0.7$ flat. these differ in the volume element and the look-back time, and so they predict different slopes at faint magnitudes. Driver et al. 1998 used exactly this to argue for $\Lambda$.

## connections

- next: [Differential vs cumulative number counts](Differential%20vs%20cumulative%20number%20counts.html) (which form to plot)
- band-dependence: [Galaxy counts at different wavelengths](Galaxy%20counts%20at%20different%20wavelengths.html)
- morphology split: [Driver 1998 counts by morphology](Driver%201998%20counts%20by%20morphology.html)
- distance background: [Radial comoving distance](Radial%20comoving%20distance.html), [Luminosity distance](Luminosity%20distance.html), [K-correction](K-correction.html)
- the deeper Durham compilation: counts.html

## key references

- Hubble 1934 (the original counts paper)
- Driver et al. 1998, ApJ 496, L93 (HDF counts split by morphology)
- Metcalfe et al. compilation: https://astro.dur.ac.uk/~nm/pubhtml/counts/counts.html

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Differential%20vs%20cumulative%20number%20counts.html" class="backlink-item">Differential vs cumulative number counts</a></li>
    <li class="backlink-item-wrap"><a href="Driver%201998%20counts%20by%20morphology.html" class="backlink-item">Driver 1998 counts by morphology</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20counts%20at%20different%20wavelengths.html" class="backlink-item">Galaxy counts at different wavelengths</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
  </ul>
</div>

