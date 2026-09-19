---
layout: "default"
title: "Stellar mass function"
---
# stellar mass function

up: [Pablo_02_Statistical_properties_of_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)

## from luminosity to mass

the LF $\phi(L)$ depends on the band; the **stellar mass function (SMF)** $\phi(M_*)$ does not. it is the more physical statistic. to convert, you need the mass-to-light ratio $\Upsilon = M_*/L$, which depends on:

- stellar population age (older → larger $\Upsilon$)
- metallicity (higher → larger $\Upsilon$)
- IMF (Kroupa vs Salpeter vs top-heavy gives factor $\sim 2$ shifts)
- dust attenuation (in optical bands; not in K)

so SMFs are derived from SED fitting, and they carry a $\sim 0.2$–$0.3$ dex systematic from those choices.

## the schechter parametrization

the SMF is well-fit by a Schechter form in $\log M_*$:

$$\phi(M_*)\, dM_* = \phi^* \left(\frac{M_*}{M^*}\right)^\alpha \exp\!\left(-\frac{M_*}{M^*}\right) \frac{dM_*}{M^*}$$

or its $\log$ version with the substitution $d\log M = dM/(M \ln 10)$.

local SMF parameters (Cole et al. 2001 from 2MASS, Bell et al. 2003 from SDSS+2MASS, Pérez-González et al. 2003, Pérez-González 2008):

- $M^* \approx (5\text{-}7) \times 10^{10}\, M_\odot$
- $\alpha \approx -1.2$
- $\phi^* \approx 5 \times 10^{-3}\, h^3\, \text{Mpc}^{-3}$

## bimodal SMF: passive vs star-forming

just like the [Color bimodality of galaxies](Color%20bimodality%20of%20galaxies.html), the SMF splits cleanly into two components:

- **passive (red sequence) SMF**: $M^*_{\text{pass}} \approx 7 \times 10^{10}\, M_\odot$, $\alpha \approx -0.4$ (flat faint end)
- **star-forming (blue cloud) SMF**: $M^*_{\text{SF}} \approx 5 \times 10^{10}\, M_\odot$, $\alpha \approx -1.4$ (steep faint end)

the two cross around $M_* \sim 3 \times 10^{10}\, M_\odot$. above the crossover, passive galaxies dominate. below, star-formers do. the crossover mass is the **mass-quenching scale** that Peng et al. 2010 identified empirically.

## evolution with $z$

the total SMF evolves modestly:

- $M^*$ does not change much from $z \sim 2$ to $z = 0$ (mass scales freeze in early)
- $\phi^*$ at high $M_*$ doubles since $z = 1$ (red sequence buildup, [Green valley and quenching tracks](Green%20valley%20and%20quenching%20tracks.html))
- the low-mass slope $\alpha$ steepens slightly

the integrated stellar mass density $\rho_*(z)$ rises by a factor $\sim 5$ from $z \sim 3$ to today (see [Cosmic stellar mass density growth](Cosmic%20stellar%20mass%20density%20growth.html)).

## SMF vs HMF: the mismatch

the predicted halo mass function (HMF) from $\Lambda$CDM is also Schechter-like (Press-Schechter), but with a *much* shallower exponential cutoff ($M^*_h \sim 10^{14}\,M_\odot$) and a *much* steeper faint-end slope ($\alpha_{\text{HMF}} \approx -1.9$). the two functions do not match in either parameter. the gap is the central puzzle of galaxy formation, see [Halo mass function vs galaxy mass function](Halo%20mass%20function%20vs%20galaxy%20mass%20function.html) and [Stellar-to-halo mass ratio](Stellar-to-halo%20mass%20ratio.html).

## connections

- baseline LF: [Luminosity function definition](Luminosity%20function%20definition.html), [Schechter function](Schechter%20function.html)
- color split: [Color bimodality of galaxies](Color%20bimodality%20of%20galaxies.html)
- halo connection: [Halo mass function vs galaxy mass function](Halo%20mass%20function%20vs%20galaxy%20mass%20function.html), [Stellar-to-halo mass ratio](Stellar-to-halo%20mass%20ratio.html)
- cosmic integral: [Cosmic stellar mass density growth](Cosmic%20stellar%20mass%20density%20growth.html)

## key references

- Cole et al. 2001 (2MASS local SMF)
- Bell et al. 2003 (SDSS+2MASS, separated by color)
- Pérez-González et al. 2008, ApJ 675, 234 (SMF to $z \sim 4$)
- Ilbert et al. 2013 (COSMOS SMF evolution)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (15)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="1Vmax%20estimator.html" class="backlink-item">1Vmax estimator</a></li>
    <li class="backlink-item-wrap"><a href="AGN%20taxonomy%20unified%20model%20and%20feedback.html" class="backlink-item">AGN taxonomy unified model and feedback</a></li>
    <li class="backlink-item-wrap"><a href="Binary%20stars%20in%20CMD.html" class="backlink-item">Binary stars in CMD</a></li>
    <li class="backlink-item-wrap"><a href="Blue%20stragglers%20in%20star%20clusters.html" class="backlink-item">Blue stragglers in star clusters</a></li>
    <li class="backlink-item-wrap"><a href="Cluster%20binary%20fraction%20methods.html" class="backlink-item">Cluster binary fraction methods</a></li>
    <li class="backlink-item-wrap"><a href="Color%20bimodality%20of%20galaxies.html" class="backlink-item">Color bimodality of galaxies</a></li>
    <li class="backlink-item-wrap"><a href="Cosmic%20stellar%20mass%20density%20growth.html" class="backlink-item">Cosmic stellar mass density growth</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20main%20sequence%20of%20star%20formation.html" class="backlink-item">Galaxy main sequence of star formation</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20size-luminosity%20relation.html" class="backlink-item">Galaxy size-luminosity relation</a></li>
    <li class="backlink-item-wrap"><a href="Halo%20mass%20function%20vs%20galaxy%20mass%20function.html" class="backlink-item">Halo mass function vs galaxy mass function</a></li>
    <li class="backlink-item-wrap"><a href="SED%20fitting%20for%20SFH.html" class="backlink-item">SED fitting for SFH</a></li>
    <li class="backlink-item-wrap"><a href="Schechter%20K-band%20luminosity%20function.html" class="backlink-item">Schechter K-band luminosity function</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20mass%20function%20xi%28M%29.html" class="backlink-item">Stellar mass function xi(M)</a></li>
    <li class="backlink-item-wrap"><a href="Stellar-to-halo%20mass%20ratio.html" class="backlink-item">Stellar-to-halo mass ratio</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
  </ul>
</div>

