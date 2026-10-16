---
layout: "default"
title: "Unresolved binary flux contamination and Gaia RUWE"
---
if a "star" is really two unresolved stars, its photometry contains the light of both. a single-star fit has only one way to explain the extra flux: make the star bigger. the radius comes out too large, and everything derived from it (age, and the radius of any transiting planet) is biased too.

## core physical intuition

with a parallax the distance is fixed, so observed flux means luminosity. a single-star model must match $L_\mathrm{tot} = L_1 + L_2$ with one $R$ and one $T_\mathrm{eff}$.

define the secondary's bolometric flux fraction:

$$f_2 \equiv \frac{R_2^2 T_2^4}{R_1^2 T_1^4 + R_2^2 T_2^4}$$

my back-of-envelope: if the fitted temperature stays close to $T_1$, then $R_\mathrm{fit}^2 T_1^4 \approx L_\mathrm{tot}/(4\pi\sigma)$ and

$$\frac{R_\mathrm{fit}}{R_1} \approx \frac{1}{\sqrt{1 - f_2}}$$

so an equal-luminosity pair ($f_2 = 0.5$) inflates the radius by $\sqrt{2}$, about +40%. a faint companion does almost nothing.

## what LACHESIS finds

single-star photometric fits to 102 DEBCat eclipsing-binary primaries:

* radius residual consistent with zero for faint companions
* rises to ~+30% as the system approaches equal luminosity
* spearman $\rho = +0.65$ between radius residual and $f_2$

the radius outliers are a binarity artefact, not a failure of the isochrones.


## screening with gaia RUWE

the **renormalised unit weight error** is the goodness of fit of gaia's single-star astrometric solution, rescaled so that well-behaved single stars sit near 1. an unseen companion makes the photocentre wobble, the single-star model fits badly, and RUWE goes up.

* common threshold: **RUWE > 1.4** flags a likely unresolved astrometric binary
* LACHESIS removed 14 of 90 asteroseismic stars this way
* recommendation: run a RUWE cut *before* any single-star fit

limits (my note): RUWE is only sensitive to binaries whose orbital wobble gaia can see. very close pairs, very wide pairs, and equal-brightness pairs (photocentre barely moves) can pass the cut. see [[Astrometric exoplanet detection and Gaia astrometry]].

## astrophysical context

* transits measure $R_p/R_\star$, so an inflated $R_\star$ inflates $R_p$ (and the companion's light also dilutes the transit depth)
* in a cluster CMD the same effect shows up as the binary sequence lying above the main sequence, up to 0.75 mag for equal-mass pairs (see [[Binary stars in CMD]])

## see also

- [[Observational_Astrophysics_MOC]]
- [[Binary stars in CMD]]
- [[Astrometric exoplanet detection and Gaia astrometry]]
- [[Asteroseismic and eclipsing binary benchmark stars]]
- source: 2610.01931-astro.ph
