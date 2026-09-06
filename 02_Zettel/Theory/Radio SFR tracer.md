---
layout: default
title: "Radio SFR tracer"
---

# radio SFR tracer

up: [Pablo_03_Star_formation_in_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html)

## the two radio components

at GHz frequencies, star-forming galaxies emit:

1. **non-thermal synchrotron** from cosmic-ray electrons spiraling in the galactic magnetic field. CRs are accelerated by SN II shocks, so synchrotron tracks massive-star remnants with a lag of $\sim 100$ Myr. spectral index $\alpha_{\text{sync}} \simeq -0.8$ ($S_\nu \propto \nu^\alpha$). dominates at $\sim 1.4$ GHz
2. **thermal free-free (bremsstrahlung)** from HII-region plasma, tracking ionizing photons directly. $\alpha_{\text{ff}} \simeq -0.1$, flat spectrum. dominates at $\gtrsim 10$ GHz

the sum gives a radio continuum that is roughly a power law with $\alpha \simeq -0.7$ across the GHz band.

## the FIR–radio correlation

one of the most important empirical relations in galaxy physics:

$$q \equiv \log_{10}\!\left(\frac{L_{\text{FIR}}}{3.75 \times 10^{12}\,\text{W}}\right) - \log_{10}\!\left(\frac{L_{1.4\,\text{GHz}}}{\text{W/Hz}}\right) \approx 2.3$$

scatter $\sim 0.2$ dex, holds over five decades in luminosity and out to $z \sim 4$ (Delhaize 2017, Magnelli 2015). physically: both tracers come from the same short-lived massive stars, just via different physics (IR = reprocessed UV; radio = SN-accelerated CR electrons radiating in $B$-field).

## calibration

Murphy 2011 (and Kennicutt & Evans 2012):

$$\text{SFR}\;[M_\odot/\text{yr}] = 6.35 \times 10^{-22}\, L_{1.4\,\text{GHz}}\;[\text{W/Hz}]$$

for Kroupa IMF. very similar coefficient at 33 GHz, where thermal dominates.

## strengths

- **extinction-free**: radio photons traverse any ISM column without absorption
- free from K-correction issues (the power law is well-behaved)
- JVLA and MeerKAT can reach $\mu$Jy sensitivities over wide areas
- SKA will extend this to routine $z > 5$ SFR measurements

## weaknesses

- **AGN contamination**: radio-loud AGN have $L_{1.4} \sim 10^{4}\,L_{\text{SFG}}$ at the same mass. even radio-quiet Seyferts leak some nuclear radio. must be cleaned
- **magnetic-field dependence**: synchrotron brightness $\propto B^2$. galaxies with weaker B may underproduce radio at fixed SFR, breaking the FIR-radio correlation
- at $z > 3$, the correlation starts to steepen (Delhaize 2017): $q \propto (1+z)^{-0.1}$. not fully understood. CR-escape at high sSFR is the leading hypothesis

## connections

- the partner: [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.html)
- extinction-free alternative: [X-ray SFR tracer](../../02_Zettel/Theory/X-ray SFR tracer.html)
- comparison: [SFR tracer comparison](../../02_Zettel/Theory/SFR tracer comparison.html)
- AGN: separate radio-loudness class

## key references

- Condon 1992 ARAA (radio continuum of galaxies)
- Yun, Reddy, Condon 2001 (FIR-radio correlation)
- Murphy et al. 2011 ApJ 737, 67 (calibration)
- Delhaize et al. 2017 (evolution)
