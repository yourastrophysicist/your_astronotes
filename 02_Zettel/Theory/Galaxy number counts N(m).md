---
layout: default
title: "Galaxy number counts N(m)"
---

# galaxy number counts $N(m)$

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md)

## the simplest extragalactic statistic

count how many galaxies you see brighter than apparent magnitude $m$, per square degree. that gives the **cumulative count** $N(<m)$. its derivative $dN/dm$ is the **differential count** (see [Differential vs cumulative number counts](../../02_Zettel/Theory/Differential vs cumulative number counts.md)).

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

1. **finite extent / volume curvature**: the universe is not Euclidean; comoving volume saturates as $z \to \infty$ in flat $\Lambda$CDM (see [Radial comoving distance](../../02_Zettel/Theory/Radial comoving distance.md) and the volume element $dV/dz$).
2. **K-correction**: at high $z$, the rest-frame band you are observing is bluer than the filter, where galaxies are usually fainter (see [K-correction](../../02_Zettel/Theory/K-correction.md)).
3. **evolution**: galaxies were brighter / more numerous in the past (the cosmic SFR peaks at $z \sim 2$, see [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.md)).

## what pablo overplots

cosmological models on top of the observed counts: $\Omega_M=1$ no-$\Lambda$ EdS, $\Omega_M=0.3$ open, $\Omega_M=0.3,\Omega_\Lambda=0.7$ flat. these differ in the volume element and the look-back time, and so they predict different slopes at faint magnitudes. Driver et al. 1998 used exactly this to argue for $\Lambda$.

## connections

- next: [Differential vs cumulative number counts](../../02_Zettel/Theory/Differential vs cumulative number counts.md) (which form to plot)
- band-dependence: [Galaxy counts at different wavelengths](../../02_Zettel/Theory/Galaxy counts at different wavelengths.md)
- morphology split: [Driver 1998 counts by morphology](../../02_Zettel/Theory/Driver 1998 counts by morphology.md)
- distance background: [Radial comoving distance](../../02_Zettel/Theory/Radial comoving distance.md), [Luminosity distance](../../02_Zettel/Theory/Luminosity distance.md), [K-correction](../../02_Zettel/Theory/K-correction.md)
- the deeper Durham compilation: [counts.html](https://astro.dur.ac.uk/~nm/pubhtml/counts/counts.html)

## key references

- Hubble 1934 (the original counts paper)
- Driver et al. 1998, ApJ 496, L93 (HDF counts split by morphology)
- Metcalfe et al. compilation: https://astro.dur.ac.uk/~nm/pubhtml/counts/counts.html
