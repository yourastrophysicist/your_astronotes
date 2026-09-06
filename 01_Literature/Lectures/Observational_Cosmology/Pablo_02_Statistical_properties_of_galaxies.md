---
layout: default
title: "Pablo_02_Statistical_properties_of_galaxies"
---

# statistical properties of galaxies — Pablo Pérez-González, lecture 1A

*visiting professor, Observational Cosmology A.Y. 2024/2025, block: 31 March – 3 April*

index: [Observational_Cosmology_MOC](../../../00_Atlas/Observational_Cosmology_MOC.md)
previous: [Pablo_01_Introduction_to_galaxy_studies](../../../01_Literature/Lectures/Observational_Cosmology/Pablo_01_Introduction_to_galaxy_studies.md)

---

## the question pablo is asking in this lecture

"how are galaxies distributed according to their parameters?" that is the whole game. once the historical lecture has set the stage (galaxies are external, the universe expands, we have a tuning fork and a few cepheids), the next move is statistical: stop talking about *one* galaxy and start asking how the population is shaped.

every statistic in this lecture is a function: $N(m)$, $\phi(L)$, $\phi(M_*)$, $n(M_h)$, $\rho_{SFR}(z)$, $\text{SFR}(M_*)$. each one compresses millions of galaxies into a curve, and each curve has a shape that other parts of the course (Press-Schechter, halo mass function, SAMs, Madau-Dickinson) will try to *explain*.

reading list pablo recommends:
- Binney & Merrifield 1998, ch. 4 and 7
- Carroll & Ostlie 2007, ch. 25 and 27
- Sparke & Gallagher III 2008, ch. 1, 7, 9
- Mo, van den Bosch, White 2010, ch. 15
- NED Level 5 (online encyclopedia of extragalactic astrophysics)

---

## the chain of the lecture

1. **distributions of single parameters**: color, magnitude, morphological type. the bimodality of galaxy color is the first non-trivial fact.
2. **galaxy counts** $N(m)$ as the most basic statistic, with cosmology baked in.
3. **size-luminosity** as a non-parametric scaling.
4. **redshift distributions** and the biases that distort them (Malmquist, photo-z catastrophic failures).
5. **luminosity function** as the master statistic. Schechter parametrization, integrals, the 1/Vmax estimator, departures from a single Schechter at the bright end and the faint end.
6. **mass functions**: stellar mass function (SMF) and halo mass function. comparing them tells us that galaxy formation is *inefficient*, and pinpoints the mass scale where it is most efficient.
7. **integrals of the LF/SMF** as functions of redshift give the cosmic star-formation history $\rho_{SFR}(z)$ and the buildup of stellar mass $\rho_*(z)$.
8. **scaling relations** (main sequence, Tully-Fisher, fundamental plane, Schmidt-Kennicutt, Magorrian) sit on top of all of this and tell us *why* the distributions look the way they do.

---

## block 1. distributions: color, magnitude, type

galaxies are not uniformly distributed in their parameters. the cleanest example is color.

- [Color bimodality of galaxies](../../../02_Zettel/Theory/Color bimodality of galaxies.md) — Baldry et al. 2004, two peaks in $u-r$
- [Red sequence and blue cloud](../../../02_Zettel/Theory/Red sequence and blue cloud.md) — what the two peaks physically are
- [Green valley and quenching tracks](../../../02_Zettel/Theory/Green valley and quenching tracks.md) — Faber et al. 2007 evolutionary arrows
- [Galaxy color, density and morphology](../../../02_Zettel/Theory/Galaxy color, density and morphology.md) — Hogg 2004, Blanton & Moustakas 2009

these atomic notes give the empirical shape of the population in the color-magnitude diagram, before any model is invoked.

---

## block 2. galaxy counts

the simplest extragalactic statistic is "how many galaxies do i see brighter than magnitude $m$ per square degree?". Hubble himself plotted this in 1934.

- [Galaxy number counts N(m)](../../../02_Zettel/Theory/Galaxy number counts N(m).md) — definition and the Euclidean prediction $N(<m) \propto 10^{0.6 m}$
- [Differential vs cumulative number counts](../../../02_Zettel/Theory/Differential vs cumulative number counts.md) — $dN/dm$ vs $N(<m)$, and $dN/dS$ when in flux units
- [Galaxy counts at different wavelengths](../../../02_Zettel/Theory/Galaxy counts at different wavelengths.md) — optical, mid-IR (24 μm), far-IR (70 μm), sub-mm; the Durham compilation [counts.html](https://astro.dur.ac.uk/~nm/pubhtml/counts/counts.html)
- [Driver 1998 counts by morphology](../../../02_Zettel/Theory/Driver 1998 counts by morphology.md) — ellipticals, spirals, irregulars contribute differently as a function of magnitude

the deviations from the Euclidean line at faint magnitudes encode $\Omega_m$, $\Omega_\Lambda$, evolution, and the K-correction; this is the slide where pablo overplots cosmological models on the same axes.

---

## block 3. galaxy sizes

a one-line statistic that already separates whole classes:

- [Galaxy size-luminosity relation](../../../02_Zettel/Theory/Galaxy size-luminosity relation.md) — $R_e$ vs $M_B$ for dE, dSph, cE, UCD, ellipticals, spirals; the dwarf and giant branches

---

## block 4. redshift distributions and biases

if we just look at the $z$-distribution of a flux-limited sample, the universe lies to us. two kinds of lies:

- [Redshift distribution of flux-limited samples](../../../02_Zettel/Theory/Redshift distribution of flux-limited samples.md) — Brinchmann 2008, the median $z$ as a function of magnitude
- [Malmquist bias](../../../02_Zettel/Theory/Malmquist bias.md) — flux limit + scatter in absolute magnitude pushes the average $M$ brighter at higher $z$
- [Photometric redshifts](../../../02_Zettel/Theory/Photometric redshifts.md) — Benítez 2000 likelihood $p(z|m_0)$, the 4000 Å break as the workhorse feature
- [Photo-z biases and catastrophic outliers](../../../02_Zettel/Theory/Photo-z biases and catastrophic outliers.md) — Oyaizu 2008, the failure modes of template fitting

without these, every higher-order statistic ($\phi(L,z)$, $\rho_{SFR}(z)$) would be wrong.

---

## block 5. the luminosity function

the master statistic. counts and color are 1-D projections; the LF is the *intrinsic* density of galaxies per unit luminosity per unit volume.

- [Luminosity function definition](../../../02_Zettel/Theory/Luminosity function definition.md) — $dN = \phi(L)\, dL\, dV$, units of $\text{Mpc}^{-3}\,L^{-1}$
- [Schechter function](../../../02_Zettel/Theory/Schechter function.md) — $\phi(L) = \frac{\phi^*}{L^*} (L/L^*)^\alpha e^{-L/L^*}$, the universal three-parameter fit
- [Schechter function in magnitudes](../../../02_Zettel/Theory/Schechter function in magnitudes.md) — the form pablo will actually use to fit data
- [Integrals of the Schechter function](../../../02_Zettel/Theory/Integrals of the Schechter function.md) — number, luminosity, and number above $L^*$; everything is a Gamma function
- [1Vmax estimator](../../../02_Zettel/Theory/1Vmax estimator.md) — Schmidt 1968 non-parametric LF, the workhorse weighting that corrects for flux limits
- [Schechter K-band luminosity function](../../../02_Zettel/Theory/Schechter K-band luminosity function.md) — Smith et al. 2009, $M^*=-23.19$, $\alpha=-0.81$, $\phi^*=0.0166\,\text{Mpc}^{-3}$
- [Double power-law modified Schechter](../../../02_Zettel/Theory/Double power-law modified Schechter.md) — bright-end excess at high $z$, Pérez-González et al. 2005
- [LF by morphology and SED](../../../02_Zettel/Theory/LF by morphology and SED.md) — Driver 2006 and Wolf 2003; ellipticals dominate $L > L^*$, late-types dominate the faint end

---

## block 6. mass functions

stellar mass is more physical than luminosity (it does not need a K-correction the same way and it integrates the star formation history). but to get it you need an SED fit, which means assumed IMF, dust, and stellar populations.

- [Stellar mass function](../../../02_Zettel/Theory/Stellar mass function.md) — Cole 2001, Bell 2003, Pérez-González 2003 / 2008
- [Halo mass function vs galaxy mass function](../../../02_Zettel/Theory/Halo mass function vs galaxy mass function.md) — they differ in shape *and* in normalization; the famous factor-of-six gap
- [Halo gravity suppression of galaxy formation](../../../02_Zettel/Theory/Halo gravity suppression of galaxy formation.md) — why low-mass halos cannot retain gas (SN feedback) and high-mass halos cannot cool (AGN feedback)
- [Stellar-to-halo mass ratio](../../../02_Zettel/Theory/Stellar-to-halo mass ratio.md) — Behroozi et al. 2013 peak at $M_h \sim 10^{12}\,M_\odot$, the mass scale where galaxy formation is most efficient

these four notes are the bridge to the second half of the course (Cassata's blocks 8–10), where Press-Schechter and N-body simulations explain the *halo* side and feedback physics explains the *galaxy* side.

---

## block 7. cosmic histories: integrals of the LF and SMF as functions of $z$

once you have $\phi(L,z)$ and $\phi(M_*, z)$ in slices of redshift, you integrate.

- [Cosmic star formation history](../../../02_Zettel/Theory/Cosmic star formation history.md) — Madau-Dickinson plot, peak at $z \sim 2$ (Pérez-González 2005, Bouwens 2010)
- [Cosmic stellar mass density growth](../../../02_Zettel/Theory/Cosmic stellar mass density growth.md) — Pérez-González 2008a, $\rho_*(z)/\rho_*(0)$
- [SFR and stellar mass density connection](../../../02_Zettel/Theory/SFR and stellar mass density connection.md) — $\rho_{SFR}(z) = d\rho_*(t)/dt$ (modulo recycling and IMF assumptions)

this is the punchline of every modern extragalactic survey, and it is what blocks 9 and 10 of the course will try to predict from first principles.

---

## block 8. scaling relations

the 2-D cuts through parameter space.

- [Galaxy main sequence of star formation](../../../02_Zettel/Theory/Galaxy main sequence of star formation.md) — Rodighiero 2011, Santini 2017; SFR $\propto M_*^\alpha$ with starbursts living above
- [Fundamental plane of ellipticals](../../../02_Zettel/Theory/Fundamental plane of ellipticals.md) — $R_e \propto \sigma_o^{1.4}\langle I \rangle_e^{-0.9}$
- [Tully-Fisher relation](../../../02_Zettel/Theory/Tully-Fisher relation.md) — asymptotic rotation velocity vs luminosity for spirals
- [Schmidt-Kennicutt law](../../../02_Zettel/Theory/Schmidt-Kennicutt law.md) — $\Sigma_{SFR} \propto \Sigma_{gas}^{1.4}$
- [Magorrian relation](../../../02_Zettel/Theory/Magorrian relation.md) — $M_{BH} \sim 10^{-3}\, M_{\text{bulge}}$, the SMBH/host correlation

every one of these is a clue to the underlying physics: dynamics + virial theorem give FP and T-F; gas physics gives Schmidt-Kennicutt; coevolution gives Magorrian; the equilibrium between gas inflow and feedback gives the main sequence.

---

## what i take from this lecture

- the *form* of the distributions is the punchline. the Schechter exponential cutoff is real, the bimodality in color is real, the SMF/HMF gap is real, the main sequence is real. theory has to reproduce these or it is dead.
- the LF is the central object. galaxy counts, color distributions, and size-luminosity are partial projections of it. mass functions are its "physical" cousin. cosmic densities are its integrals over $L$ and $M_*$ inside slices of $z$.
- selection effects (Malmquist, K-correction, photo-z) are not corrections to apply at the end. they are the data-generating process. you cannot read $\phi(L,z)$ off a flux-limited catalog without modeling them first.
- the stellar-to-halo mass ratio (Behroozi 2013) is the single most informative plot of modern galaxy evolution. it says: galaxies are inefficient, the inefficiency has a sweet spot at $\sim 10^{12}\,M_\odot$, and we need two different feedback channels (SN below, AGN above) to make it work.

next lecture (Pablo 03) is on galaxy morphology, SEDs, and how we actually measure the things this lecture treats as inputs. that is where my [Observational_Cosmology_MOC](../../../00_Atlas/Observational_Cosmology_MOC.md) block 10 will keep growing.

---

## terms to remember going forward

- **bimodality** — two peaks in galaxy color, $u-r \approx 1.5$ and $u-r \approx 2.5$
- **red sequence / blue cloud / green valley** — passive, star-forming, and transitioning galaxies
- **number counts $N(m)$** — galaxies per square degree brighter than $m$; Euclidean slope $\log N \propto 0.6 m$
- **Malmquist bias** — flux-limited samples preferentially select intrinsically luminous objects at high $z$
- **photo-z** — redshift estimated from broadband fluxes via SED template fitting
- **Schechter function** — three-parameter fit to the LF, $\phi^*$, $L^*$, $\alpha$
- **1/Vmax** — non-parametric LF estimator, weights each galaxy by the inverse of the volume in which it could have been detected
- **SMF** — stellar mass function $\phi(M_*)$
- **HMF** — halo mass function $n(M_h)$, from theory (Press-Schechter) or simulations
- **stellar-to-halo mass ratio** — $M_*/M_h$ as a function of $M_h$, peaks at $\sim 0.03$ at $M_h \sim 10^{12}\,M_\odot$
- **main sequence** — tight SFR-$M_*$ correlation for star-forming galaxies, $\sim 0.3$ dex scatter
- **fundamental plane / Tully-Fisher / Schmidt-Kennicutt / Magorrian** — the four canonical scaling relations
