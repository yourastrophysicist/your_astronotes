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

- [Exoplanetary_Astrophysics_MOC](../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- [03_Demographics_and_Survey_Completeness](../../02_Literature/Lectures/Exoplanetary_Astrophysics/03_Demographics_and_Survey_Completeness.html)
- [Small exoplanets and the Fulton radius valley](Small%20exoplanets%20and%20the%20Fulton%20radius%20valley.html)
- [Protoplanetary disk evolution and core accretion paradigm](Protoplanetary%20disk%20evolution%20and%20core%20accretion%20paradigm.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Gravitational%20microlensing%20of%20planetary%20systems.html" class="backlink-item">Gravitational microlensing of planetary systems</a></li>
    <li class="backlink-item-wrap"><a href="Pebble%20accretion%20and%20planetary%20orbital%20migration.html" class="backlink-item">Pebble accretion and planetary orbital migration</a></li>
    <li class="backlink-item-wrap"><a href="Protoplanetary%20disk%20evolution%20and%20core%20accretion%20paradigm.html" class="backlink-item">Protoplanetary disk evolution and core accretion paradigm</a></li>
    <li class="backlink-item-wrap"><a href="Small%20exoplanets%20and%20the%20Fulton%20radius%20valley.html" class="backlink-item">Small exoplanets and the Fulton radius valley</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
  </ul>
</div>

