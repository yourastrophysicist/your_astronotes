---
layout: default
title: "Halo gravity suppression of galaxy formation"
---

# halo gravity suppression of galaxy formation

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)

## the question

why does the [Halo mass function vs galaxy mass function](../../02_Zettel/Theory/Halo mass function vs galaxy mass function.html) gap exist? why is galaxy formation efficient at $M_h \sim 10^{12}\,M_\odot$ and not at $M_h \sim 10^{10}$ or $M_h \sim 10^{14}$?

the answer is two different feedback channels operating at the two ends of the halo mass function, both regulated by the depth of the halo gravitational potential.

## low-mass end: SN feedback

a halo's escape velocity from its center is

$$v_{\text{esc}} \approx \sqrt{\frac{2 G M_h}{R_{\text{vir}}}}$$

at $M_h = 10^{10}\,M_\odot$, $v_{\text{esc}} \sim 50$ km/s. supernova ejecta have characteristic velocities of $\sim 10^3$ km/s. so the energy from a single SN can unbind a substantial fraction of the gas in a low-mass halo.

quantitatively, for a starburst producing $N_{SN}$ supernovae each delivering $E_{SN} \sim 10^{51}$ erg, the kinetic energy is $E_{\text{SN,tot}} \sim 10^{51} N_{SN}$ erg. the binding energy of the halo gas is $E_{\text{bind}} \sim f_b M_h v_{\text{esc}}^2 / 2$. the ratio scales as $E_{SN}/E_{\text{bind}} \propto M_*/(M_h v_{\text{esc}}^2) \propto M_*/M_h^{5/3}$. so SN feedback is much more disruptive in low-mass halos.

result: low-mass halos lose gas, never form many stars, and the SMF is *flatter* at low mass than the HMF.

## high-mass end: AGN feedback + virial shocks

at $M_h \gtrsim 10^{12}\,M_\odot$ a different physics takes over. infalling gas reaches the virial temperature

$$T_{\text{vir}} = \frac{\mu m_p}{2 k_B} v_{\text{esc}}^2$$

at $M_h = 10^{13}\,M_\odot$, $T_{\text{vir}} \sim 10^7$ K. at this temperature the gas is shock-heated near the virial radius (this is the Birnboim-Dekel 2003 transition from cold flows to hot accretion), and the cooling time becomes longer than the Hubble time at the relevant density.

in addition, the central SMBH accretes gas and launches relativistic jets (radio-mode AGN feedback) that re-heat the cooling halo gas. this is what keeps massive ellipticals red and dead.

result: high-mass halos cannot cool gas efficiently, the central galaxy starves, and the SMF is exponentially cut off above $M^* \sim 6 \times 10^{10}\,M_\odot$ even though the HMF extends much further.

## the goldilocks scale

at $M_h \sim 10^{12}\,M_\odot$:

- $v_{\text{esc}} \sim 200$ km/s, large enough to retain SN ejecta
- $T_{\text{vir}} \sim 10^6$ K, low enough that the cooling time is shorter than the Hubble time (cooling function has a minimum around $10^6$ K)
- AGN have not yet built up enough to shut down accretion

so galaxy formation is *most efficient* here. this is what the [Stellar-to-halo mass ratio](../../02_Zettel/Theory/Stellar-to-halo mass ratio.html) peak shows.

## what i remember

the SMF is *not* the result of differing baryon budgets, it is the result of *feedback throttling* a fundamentally simple gravitational structure. the HMF is the input, feedback is the operator, the SMF is the output.

## connections

- consequence: [Stellar-to-halo mass ratio](../../02_Zettel/Theory/Stellar-to-halo mass ratio.html)
- function comparison: [Halo mass function vs galaxy mass function](../../02_Zettel/Theory/Halo mass function vs galaxy mass function.html)
- related course block 8 topic: spherical collapse, Press-Schechter
- color side: [Green valley and quenching tracks](../../02_Zettel/Theory/Green valley and quenching tracks.html), [Galaxy color, density and morphology](../../02_Zettel/Theory/Galaxy color, density and morphology.html)

## key references

- Dekel & Silk 1986 (SN feedback in dwarfs)
- Birnboim & Dekel 2003 (cold vs hot accretion threshold)
- Croton et al. 2006, Bower et al. 2006 (radio-mode AGN feedback in SAMs)
- Behroozi et al. 2013 (empirical SHMR)
