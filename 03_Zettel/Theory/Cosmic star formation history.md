---
layout: "default"
title: "Cosmic star formation history"
---
# cosmic star formation history

up: [Pablo_02_Statistical_properties_of_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)

## the madau-dickinson plot

the cosmic SFR density $\rho_{SFR}(z)$ is the volume-integrated star formation rate at each redshift, in units of $M_\odot\, \text{yr}^{-1}\, \text{Mpc}^{-3}$.

it is obtained by integrating the LF over $L$ inside redshift slices and converting luminosity to SFR with a band-dependent calibration ($L_{UV} \to \text{SFR}_{UV}$ Kennicutt-Evans 2012, $L_{TIR} \to \text{SFR}_{IR}$, $L_{H\alpha} \to \text{SFR}$):

$$\rho_{SFR}(z) = \int (\text{SFR}/L)\, L\, \phi(L, z)\, dL$$

the result, plotted from $z = 0$ to $z \sim 8$ (the **Madau-Dickinson 2014** review), is a curve that:

- rises from $z = 0$ by a factor $\sim 10$
- **peaks at $z \sim 2$** ($\sim 0.1\, M_\odot\, \text{yr}^{-1}\, \text{Mpc}^{-3}$), the cosmic noon
- declines toward higher $z$ as $(1+z)^{-3}$ approximately

this curve is *the* punchline of extragalactic surveys.

## perez-gonzalez 2005

the version pablo shows on this slide is his own paper: P-G et al. 2005 used Spitzer 24 μm photometry in deep fields to build the IR LF as a function of $z$, then integrated to get $\rho_{SFR}(z)$. result (his fig. 9): $\rho_{SFR}$ peaks at $z \sim 1$–$2$ and matches simultaneously the UV (S1-Xu 2003) and the IR (Lagache 2004) constraints.

## bouwens 2010 high-z anchor

at $z > 4$ the picture is anchored by Lyman-break galaxy (LBG) selection. Bouwens et al. 2010 measured the UV LF at $z = 4, 5, 6, 7, 8$, integrated above $\sim 0.08 L^*_{z=3}$, and showed $\rho_{SFR}$ falling by $\sim 2$ orders of magnitude from $z \sim 2$ to $z \sim 8$. this is the early universe side of the Madau-Dickinson curve.

at $z > 10$, JWST has now extended this further, and the result is *more* SFR than expected (the "JWST surprise"), still being assimilated.

## the SFR-stellar-mass identity

the stellar mass density is the time integral of the SFR (modulo recycling and IMF):

$$\rho_{SFR}(z) = (1 - R)^{-1} \frac{d\rho_*(t)}{dt}$$

where $R \approx 0.4$ is the mass returned to the ISM by stellar evolution. this is the consistency check: integrate the cosmic SFR and you should get the cosmic stellar mass density. see [Cosmic stellar mass density growth](Cosmic%20stellar%20mass%20density%20growth.html) and [SFR and stellar mass density connection](SFR%20and%20stellar%20mass%20density%20connection.html).

## three regimes

- $z > 3$: rapid rise. galaxies are young, sub-$L^*$, high specific SFR.
- $z \sim 1$–$3$: cosmic noon. half of all stars in the universe today were formed in this window. dust-obscured ULIRGs dominate the IR side.
- $z < 1$: secular decline. cosmic SFR drops by an order of magnitude. quenching at high mass plus gas depletion overall.

## what i remember

the cosmic SFR history is the integral of the galaxy LF over $L$ in slices of $z$, so it is the most compressed possible summary of galaxy evolution. Madau-Dickinson 2014 is the canonical reference and is updated every couple of years.

## connections

- LF integral that produces it: [Schechter function](Schechter%20function.html), [Integrals of the Schechter function](Integrals%20of%20the%20Schechter%20function.html)
- mass-side companion: [Cosmic stellar mass density growth](Cosmic%20stellar%20mass%20density%20growth.html)
- formal identity: [SFR and stellar mass density connection](SFR%20and%20stellar%20mass%20density%20connection.html)
- the peak's physical meaning: cosmic noon, dust-obscured SF, the main sequence ([Galaxy main sequence of star formation](Galaxy%20main%20sequence%20of%20star%20formation.html))

## key references

- Madau & Dickinson 2014, ARAA 52, 415 (the canonical review)
- Pérez-González et al. 2005, ApJ 630, 82
- Bouwens et al. 2010 (UV LF at $z = 4$–$8$)
- Lilly et al. 1996 (the original Lilly-Madau plot)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (19)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Chemical%20evolution%20of%20galaxies.html" class="backlink-item">Chemical evolution of galaxies</a></li>
    <li class="backlink-item-wrap"><a href="Cosmic%20dawn%20and%20high-redshift%20galaxies%20with%20JWST.html" class="backlink-item">Cosmic dawn and high-redshift galaxies with JWST</a></li>
    <li class="backlink-item-wrap"><a href="Cosmic%20look-back%20time.html" class="backlink-item">Cosmic look-back time</a></li>
    <li class="backlink-item-wrap"><a href="Cosmic%20stellar%20mass%20density%20growth.html" class="backlink-item">Cosmic stellar mass density growth</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20clusters%20and%20overview%20of%20evolution.html" class="backlink-item">Galaxy clusters and overview of evolution</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20main%20sequence%20of%20star%20formation.html" class="backlink-item">Galaxy main sequence of star formation</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20mergers%20and%20SF.html" class="backlink-item">Galaxy mergers and SF</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20number%20counts%20N%28m%29.html" class="backlink-item">Galaxy number counts N(m)</a></li>
    <li class="backlink-item-wrap"><a href="High-redshift%20galaxy%20selection%20and%20Lyman%20break%20technique.html" class="backlink-item">High-redshift galaxy selection and Lyman break technique</a></li>
    <li class="backlink-item-wrap"><a href="K-correction%20in%20optical%20vs%20sub-mm.html" class="backlink-item">K-correction in optical vs sub-mm</a></li>
    <li class="backlink-item-wrap"><a href="K-correction.html" class="backlink-item">K-correction</a></li>
    <li class="backlink-item-wrap"><a href="LIRGs%20ULIRGs%20HyLIRGs.html" class="backlink-item">LIRGs ULIRGs HyLIRGs</a></li>
    <li class="backlink-item-wrap"><a href="Madau%20plot.html" class="backlink-item">Madau plot</a></li>
    <li class="backlink-item-wrap"><a href="Protocluster%20detection%20techniques.html" class="backlink-item">Protocluster detection techniques</a></li>
    <li class="backlink-item-wrap"><a href="SFR%20and%20stellar%20mass%20density%20connection.html" class="backlink-item">SFR and stellar mass density connection</a></li>
    <li class="backlink-item-wrap"><a href="Star%20formation%20rate%20and%20sSFR.html" class="backlink-item">Star formation rate and sSFR</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20mass%20function%20xi%28M%29.html" class="backlink-item">Stellar mass function xi(M)</a></li>
    <li class="backlink-item-wrap"><a href="Supernova%20remnant%20spectroscopy.html" class="backlink-item">Supernova remnant spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
  </ul>
</div>

