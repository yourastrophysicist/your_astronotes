---
layout: "default"
title: "Exoplanet demographic distributions and survey completeness"
---
determining the true underlying occurrence rate of exoplanets requires correcting raw catalog discoveries for observational selection biases.

## observational selection functions

discovery techniques have strong, distinct selection boundaries in parameter space:
1. **radial velocity**: detection sensitivity scales as $K \propto M_p P^{-1/3}$. detection efficiency drops rapidly for low-mass planets and long orbital periods.
2. **transits**: geometric transit probability drops as $\mathcal{P}_{\text{tr}} \approx R_\star / a \propto P^{-2/3}$. signal-to-noise ratio in phase-folded light curves scales as $\text{SNR} \propto (R_p / R_\star)^2 P^{-1/6}$.

## the 1/vmax and inverse detection efficiency method

to reconstruct the intrinsic occurrence rate $d^2 N / (d\ln P \, d\ln R_p)$, each detected planet $i$ is weighted by its detection efficiency $\eta(P_i, R_{p, i}, \text{star}_j)$:

$$\text{Occurrence} = \frac{1}{N_\star} \sum_{i=1}^{N_{\text{det}}} \frac{1}{\mathcal{P}_{\text{tr}, i} \cdot \eta(P_i, R_{p, i})}$$

where $\eta(P, R_p) = \frac{1}{N_\star} \sum_{j=1}^{N_\star} p_{\text{det}}(P, R_p \mid \text{CDPP}_j)$ accounts for Combined Differential Photometric Precision (CDPP) across the stellar catalog.

## key empirical demographic findings

1. **ubiquity of small planets**: planets with radii $1 - 4 R_\oplus$ (super-Earths and sub-Neptunes) are the most abundant planetary class in the Milky Way, found around $30 - 50\%$ of FGK stars with $P < 100\text{ days}$, despite being absent in our own Solar System.
2. **giant planet frequency at the snow line**: giant planet occurrence peaks between $1 - 5\text{ AU}$ ($P \sim 1000 - 3000\text{ days}$), corresponding to the protoplanetary disk snow line where water ice condensation enhances solid core accretion.
3. **metallicity correlation**: gas giant occurrence correlates strongly with host star iron abundance: $P_{\text{giant}} \propto 10^{2.0 [\text{Fe}/\text{H}]}$ (Fischer & Valenti 2005), confirming the core accretion model.

## see also

- [[Exoplanetary_Astrophysics_MOC]]
- [[03_Demographics_and_Survey_Completeness]]
- [[Small exoplanets and the Fulton radius valley]]
- [[Protoplanetary disk evolution and core accretion paradigm]]



## Linked References

- [[Gravitational microlensing of planetary systems]]
- [[Pebble accretion and planetary orbital migration]]
- [[Protoplanetary disk evolution and core accretion paradigm]]
- [[Small exoplanets and the Fulton radius valley]]
- [[Exoplanetary_Astrophysics_MOC]]


