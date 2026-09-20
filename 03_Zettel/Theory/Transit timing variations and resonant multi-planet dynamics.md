---
layout: "default"
title: "Transit timing variations and resonant multi-planet dynamics"
---
in a single-planet system, transits recur with strict periodicity: $t_n = t_0 + n P$. in multi-planet systems, mutual gravitational perturbations cause individual transit times to deviate from a linear ephemeris, producing **Transit Timing Variations (TTVs)**.

## mean motion resonance (mmr) amplification

TTV amplitudes are dramatically enhanced when two planets orbit near a first-order Mean Motion Resonance (MMR), where period ratio $P_2 / P_1 \approx j / (j - 1)$:
- e.g. $2:1$ ($j=2$), $3:2$ ($j=3$).

the mutual conjunctions occur repeatedly at the same orbital longitudes, coherently pumping orbital eccentricities and shifting the time of transit.

## the ttv super-period formula

the perturbations oscillate with a characteristic **super-period** $P_{\text{TTV}}$:

$$P_{\text{TTV}} = \frac{1}{\left\lvert \frac{j}{P_2} - \frac{j - 1}{P_1} \right\rvert} = \frac{P_1}{j \lvert \Delta\rvert}$$

where $\Delta$ is the normalized distance from exact resonance:

$$\Delta \equiv \frac{P_2}{P_1} \left( \frac{j - 1}{j} \right) - 1$$

as $\Delta \to 0$, the super-period becomes long ($P_{\text{TTV}} \sim \text{months to years}$), and the TTV amplitude diverges as:

$$\delta t_{\text{TTV}} \sim P_1 \left( \frac{M_2}{M_\star} \right) \frac{1}{\lvert \Delta\rvert}$$

## measuring true planetary masses without radial velocity

TTVs provide a method to weigh exoplanets that are too small, too distant, or around host stars too faint/active for Doppler spectrographs:
1. the amplitude of the TTV on planet 1 is directly proportional to the mass of the perturber $M_2 / M_\star$.
2. the phase of the TTV waveform constrains the planetary eccentricities $(e_1, e_2)$ and arguments of periastron $(\omega_1, \omega_2)$.
3. this method weighed the TRAPPIST-1 terrestrial planets and confirmed Kepler-90 and Kepler-11 architectures.

## see also

- [[Exoplanetary_Astrophysics_MOC]]
- [[18_Space_Transit_Surveys_TTVs_and_Resonances]]
- [[22_Case_Study_K2_19_System_and_Atmospheric_Dynamics]]
- [[Mandel-Agol analytical transit light curve model]]



## Linked References

- [[Millisecond pulsar timing and planetary companions]]
- [[Exoplanetary_Astrophysics_MOC]]


