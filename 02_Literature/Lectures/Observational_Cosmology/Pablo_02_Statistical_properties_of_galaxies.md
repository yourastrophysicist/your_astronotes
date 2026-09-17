---
layout: "default"
title: "Pablo_02_Statistical_properties_of_galaxies"
---
{% raw %}
# statistical properties of galaxies — Pablo Pérez-González, lecture 1A

*visiting professor, Observational Cosmology A.Y. 2024/2025, block: 31 March – 3 April*

index: [Observational_Cosmology_MOC](../../../04_Atlas/Observational_Cosmology_MOC.html)
previous: [Pablo_01_Introduction_to_galaxy_studies](./Pablo_01_Introduction_to_galaxy_studies.html)

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

- [Color bimodality of galaxies](../../../03_Zettel/Theory/Color%20bimodality%20of%20galaxies.html) — Baldry et al. 2004, two peaks in $u-r$
- [Red sequence and blue cloud](../../../03_Zettel/Theory/Red%20sequence%20and%20blue%20cloud.html) — what the two peaks physically are
- [Green valley and quenching tracks](../../../03_Zettel/Theory/Green%20valley%20and%20quenching%20tracks.html) — Faber et al. 2007 evolutionary arrows
- [Galaxy color, density and morphology](../../../03_Zettel/Theory/Galaxy%20color%2C%20density%20and%20morphology.html) — Hogg 2004, Blanton & Moustakas 2009

these atomic notes give the empirical shape of the population in the color-magnitude diagram, before any model is invoked.

---

## block 2. galaxy counts

the simplest extragalactic statistic is "how many galaxies do i see brighter than magnitude $m$ per square degree?". Hubble himself plotted this in 1934.

- [Galaxy number counts N(m)](../../../03_Zettel/Theory/Galaxy%20number%20counts%20N%28m%29.html) — definition and the Euclidean prediction $N(<m) \propto 10^{0.6 m}$
- [Differential vs cumulative number counts](../../../03_Zettel/Theory/Differential%20vs%20cumulative%20number%20counts.html) — $dN/dm$ vs $N(<m)$, and $dN/dS$ when in flux units
- [Galaxy counts at different wavelengths](../../../03_Zettel/Theory/Galaxy%20counts%20at%20different%20wavelengths.html) — optical, mid-IR (24 μm), far-IR (70 μm), sub-mm; the Durham compilation [counts.html](https://astro.dur.ac.uk/~nm/pubhtml/counts/counts.html)
- [Driver 1998 counts by morphology](../../../03_Zettel/Theory/Driver%201998%20counts%20by%20morphology.html) — ellipticals, spirals, irregulars contribute differently as a function of magnitude

the deviations from the Euclidean line at faint magnitudes encode $\Omega_m$, $\Omega_\Lambda$, evolution, and the K-correction; this is the slide where pablo overplots cosmological models on the same axes.

---

## block 3. galaxy sizes

a one-line statistic that already separates whole classes:

- [Galaxy size-luminosity relation](../../../03_Zettel/Theory/Galaxy%20size-luminosity%20relation.html) — $R_e$ vs $M_B$ for dE, dSph, cE, UCD, ellipticals, spirals; the dwarf and giant branches

---

## block 4. redshift distributions and biases

if we just look at the $z$-distribution of a flux-limited sample, the universe lies to us. two kinds of lies:

- [Redshift distribution of flux-limited samples](../../../03_Zettel/Theory/Redshift%20distribution%20of%20flux-limited%20samples.html) — Brinchmann 2008, the median $z$ as a function of magnitude
- [Malmquist bias](../../../03_Zettel/Theory/Malmquist%20bias.html) — flux limit + scatter in absolute magnitude pushes the average $M$ brighter at higher $z$
- [Photometric redshifts](../../../03_Zettel/Theory/Photometric%20redshifts.html) — Benítez 2000 likelihood $p(z|m_0)$, the 4000 Å break as the workhorse feature
- [Photo-z biases and catastrophic outliers](../../../03_Zettel/Theory/Photo-z%20biases%20and%20catastrophic%20outliers.html) — Oyaizu 2008, the failure modes of template fitting

without these, every higher-order statistic ($\phi(L,z)$, $\rho_{SFR}(z)$) would be wrong.

---

## block 5. the luminosity function

the master statistic. counts and color are 1-D projections; the LF is the *intrinsic* density of galaxies per unit luminosity per unit volume.

- [Luminosity function definition](../../../03_Zettel/Theory/Luminosity%20function%20definition.html) — $dN = \phi(L)\, dL\, dV$, units of $\text{Mpc}^{-3}\,L^{-1}$
- [Schechter function](../../../03_Zettel/Theory/Schechter%20function.html) — $\phi(L) = \frac{\phi^*}{L^*} (L/L^*)^\alpha e^{-L/L^*}$, the universal three-parameter fit
- [Schechter function in magnitudes](../../../03_Zettel/Theory/Schechter%20function%20in%20magnitudes.html) — the form pablo will actually use to fit data
- [Integrals of the Schechter function](../../../03_Zettel/Theory/Integrals%20of%20the%20Schechter%20function.html) — number, luminosity, and number above $L^*$; everything is a Gamma function
- [1Vmax estimator](../../../03_Zettel/Theory/1Vmax%20estimator.html) — Schmidt 1968 non-parametric LF, the workhorse weighting that corrects for flux limits
- [Schechter K-band luminosity function](../../../03_Zettel/Theory/Schechter%20K-band%20luminosity%20function.html) — Smith et al. 2009, $M^*=-23.19$, $\alpha=-0.81$, $\phi^*=0.0166\,\text{Mpc}^{-3}$
- [Double power-law modified Schechter](../../../03_Zettel/Theory/Double%20power-law%20modified%20Schechter.html) — bright-end excess at high $z$, Pérez-González et al. 2005
- [LF by morphology and SED](../../../03_Zettel/Theory/LF%20by%20morphology%20and%20SED.html) — Driver 2006 and Wolf 2003; ellipticals dominate $L > L^*$, late-types dominate the faint end

---

## block 6. mass functions

stellar mass is more physical than luminosity (it does not need a K-correction the same way and it integrates the star formation history). but to get it you need an SED fit, which means assumed IMF, dust, and stellar populations.

- [Stellar mass function](../../../03_Zettel/Theory/Stellar%20mass%20function.html) — Cole 2001, Bell 2003, Pérez-González 2003 / 2008
- [Halo mass function vs galaxy mass function](../../../03_Zettel/Theory/Halo%20mass%20function%20vs%20galaxy%20mass%20function.html) — they differ in shape *and* in normalization; the famous factor-of-six gap
- [Halo gravity suppression of galaxy formation](../../../03_Zettel/Theory/Halo%20gravity%20suppression%20of%20galaxy%20formation.html) — why low-mass halos cannot retain gas (SN feedback) and high-mass halos cannot cool (AGN feedback)
- [Stellar-to-halo mass ratio](../../../03_Zettel/Theory/Stellar-to-halo%20mass%20ratio.html) — Behroozi et al. 2013 peak at $M_h \sim 10^{12}\,M_\odot$, the mass scale where galaxy formation is most efficient

these four notes are the bridge to the second half of the course (Cassata's blocks 8–10), where Press-Schechter and N-body simulations explain the *halo* side and feedback physics explains the *galaxy* side.

---

## block 7. cosmic histories: integrals of the LF and SMF as functions of $z$

once you have $\phi(L,z)$ and $\phi(M_*, z)$ in slices of redshift, you integrate.

- [Cosmic star formation history](../../../03_Zettel/Theory/Cosmic%20star%20formation%20history.html) — Madau-Dickinson plot, peak at $z \sim 2$ (Pérez-González 2005, Bouwens 2010)
- [Cosmic stellar mass density growth](../../../03_Zettel/Theory/Cosmic%20stellar%20mass%20density%20growth.html) — Pérez-González 2008a, $\rho_*(z)/\rho_*(0)$
- [SFR and stellar mass density connection](../../../03_Zettel/Theory/SFR%20and%20stellar%20mass%20density%20connection.html) — $\rho_{SFR}(z) = d\rho_*(t)/dt$ (modulo recycling and IMF assumptions)

this is the punchline of every modern extragalactic survey, and it is what blocks 9 and 10 of the course will try to predict from first principles.

---

## block 8. scaling relations

the 2-D cuts through parameter space.

- [Galaxy main sequence of star formation](../../../03_Zettel/Theory/Galaxy%20main%20sequence%20of%20star%20formation.html) — Rodighiero 2011, Santini 2017; SFR $\propto M_*^\alpha$ with starbursts living above
- [Fundamental plane of ellipticals](../../../03_Zettel/Theory/Fundamental%20plane%20of%20ellipticals.html) — $R_e \propto \sigma_o^{1.4}\langle I \rangle_e^{-0.9}$
- [Tully-Fisher relation](../../../03_Zettel/Theory/Tully-Fisher%20relation.html) — asymptotic rotation velocity vs luminosity for spirals
- [Schmidt-Kennicutt law](../../../03_Zettel/Theory/Schmidt-Kennicutt%20law.html) — $\Sigma_{SFR} \propto \Sigma_{gas}^{1.4}$
- [Magorrian relation](../../../03_Zettel/Theory/Magorrian%20relation.html) — $M_{BH} \sim 10^{-3}\, M_{\text{bulge}}$, the SMBH/host correlation

every one of these is a clue to the underlying physics: dynamics + virial theorem give FP and T-F; gas physics gives Schmidt-Kennicutt; coevolution gives Magorrian; the equilibrium between gas inflow and feedback gives the main sequence.

---

## what i take from this lecture

- the *form* of the distributions is the punchline. the Schechter exponential cutoff is real, the bimodality in color is real, the SMF/HMF gap is real, the main sequence is real. theory has to reproduce these or it is dead.
- the LF is the central object. galaxy counts, color distributions, and size-luminosity are partial projections of it. mass functions are its "physical" cousin. cosmic densities are its integrals over $L$ and $M_*$ inside slices of $z$.
- selection effects (Malmquist, K-correction, photo-z) are not corrections to apply at the end. they are the data-generating process. you cannot read $\phi(L,z)$ off a flux-limited catalog without modeling them first.
- the stellar-to-halo mass ratio (Behroozi 2013) is the single most informative plot of modern galaxy evolution. it says: galaxies are inefficient, the inefficiency has a sweet spot at $\sim 10^{12}\,M_\odot$, and we need two different feedback channels (SN below, AGN above) to make it work.

next lecture (Pablo 03) is on galaxy morphology, SEDs, and how we actually measure the things this lecture treats as inputs. that is where my [Observational_Cosmology_MOC](../../../04_Atlas/Observational_Cosmology_MOC.html) block 10 will keep growing.

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
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (38)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/1Vmax%20estimator.html" class="backlink-item">1Vmax estimator</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Color%20bimodality%20of%20galaxies.html" class="backlink-item">Color bimodality of galaxies</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Cosmic%20star%20formation%20history.html" class="backlink-item">Cosmic star formation history</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Cosmic%20stellar%20mass%20density%20growth.html" class="backlink-item">Cosmic stellar mass density growth</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Differential%20vs%20cumulative%20number%20counts.html" class="backlink-item">Differential vs cumulative number counts</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Double%20power-law%20modified%20Schechter.html" class="backlink-item">Double power-law modified Schechter</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Driver%201998%20counts%20by%20morphology.html" class="backlink-item">Driver 1998 counts by morphology</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Fundamental%20plane%20of%20ellipticals.html" class="backlink-item">Fundamental plane of ellipticals</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Galaxies_course_intro.html" class="backlink-item">Galaxies_course_intro</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Galaxy%20color%2C%20density%20and%20morphology.html" class="backlink-item">Galaxy color, density and morphology</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Galaxy%20counts%20at%20different%20wavelengths.html" class="backlink-item">Galaxy counts at different wavelengths</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Galaxy%20main%20sequence%20of%20star%20formation.html" class="backlink-item">Galaxy main sequence of star formation</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Galaxy%20number%20counts%20N%28m%29.html" class="backlink-item">Galaxy number counts N(m)</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Galaxy%20size-luminosity%20relation.html" class="backlink-item">Galaxy size-luminosity relation</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Green%20valley%20and%20quenching%20tracks.html" class="backlink-item">Green valley and quenching tracks</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Halo%20gravity%20suppression%20of%20galaxy%20formation.html" class="backlink-item">Halo gravity suppression of galaxy formation</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Halo%20mass%20function%20vs%20galaxy%20mass%20function.html" class="backlink-item">Halo mass function vs galaxy mass function</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Integrals%20of%20the%20Schechter%20function.html" class="backlink-item">Integrals of the Schechter function</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/LF%20by%20morphology%20and%20SED.html" class="backlink-item">LF by morphology and SED</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Luminosity%20function%20definition.html" class="backlink-item">Luminosity function definition</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Magorrian%20relation.html" class="backlink-item">Magorrian relation</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Malmquist%20bias.html" class="backlink-item">Malmquist bias</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Non-parametric%20galaxy%20morphology%20metrics.html" class="backlink-item">Non-parametric galaxy morphology metrics</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Pablo_03_Star_formation_in_galaxies.html" class="backlink-item">Pablo_03_Star_formation_in_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Pablo_04_Nuclear_activity_in_galaxies.html" class="backlink-item">Pablo_04_Nuclear_activity_in_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Pablo_05_Galaxies_at_cosmological_distances.html" class="backlink-item">Pablo_05_Galaxies_at_cosmological_distances</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Photo-z%20biases%20and%20catastrophic%20outliers.html" class="backlink-item">Photo-z biases and catastrophic outliers</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Red%20sequence%20and%20blue%20cloud.html" class="backlink-item">Red sequence and blue cloud</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Redshift%20distribution%20of%20flux-limited%20samples.html" class="backlink-item">Redshift distribution of flux-limited samples</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/SFR%20and%20stellar%20mass%20density%20connection.html" class="backlink-item">SFR and stellar mass density connection</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Schechter%20K-band%20luminosity%20function.html" class="backlink-item">Schechter K-band luminosity function</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Schechter%20function.html" class="backlink-item">Schechter function</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Schechter%20function%20in%20magnitudes.html" class="backlink-item">Schechter function in magnitudes</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Schmidt-Kennicutt%20law.html" class="backlink-item">Schmidt-Kennicutt law</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Stellar%20mass%20function.html" class="backlink-item">Stellar mass function</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Stellar-to-halo%20mass%20ratio.html" class="backlink-item">Stellar-to-halo mass ratio</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Tully-Fisher%20relation.html" class="backlink-item">Tully-Fisher relation</a></li>
  </ul>
</div>
