---
layout: "default"
title: "Green valley and quenching tracks"
tags: ""
---
# Green Valley and Quenching Tracks

The Green Valley represents the sparsely populated intermediate zone in the color-magnitude diagram (CMD) and color-stellar mass plane, lying between the actively star-forming Blue Cloud and the passively evolving Red Sequence. The relative deficit of galaxies in the green valley indicates that it represents a rapid, transient evolutionary corridor through which star-forming galaxies transform into quiescent systems. The physical processes that shut down star formation in galaxies are collectively termed **quenching**. Modern galaxy evolution identifies two distinct quenching channels characterized by radically different timescales and physical mechanisms - a fast dynamical channel driven by major mergers and AGN blowout, and a slow secular channel driven by halo shock-heating, gas starvation, and environmental stripping.

---

## 1. Defining the Green Valley

Photometrically, the green valley is defined across specific optical and ultraviolet-optical color ranges -
- Optical definition - $1.8 \le (u - r) \le 2.2$ mag in the SDSS system.
- Ultraviolet-optical definition - $4.0 \le (\text{NUV} - r) \le 5.0$ mag using GALEX and SDSS photometry.
The ultraviolet $\text{NUV} - r$ color is particularly sensitive to star formation quenching because massive A and F stars continue to produce near-UV emission for $\sim 1$ Gyr after the shortest-lived O and B stars have vanished, expanding the visual dynamic range of the transition zone.

### Transit Timescale
The small number density of galaxies in the green valley relative to the red sequence and blue cloud requires a short transit timescale -
$$\tau_{\mathrm{transit}} \approx 1.0 - 1.5 \text{ Gyr}$$
If the transition were slow ($\tau > 5$ Gyr), galaxies would accumulate in the green valley, eliminating the observed bimodal color distribution.

---

## 2. Fast Quenching Channel (Dynamical / Catastrophic Mode)

The fast quenching channel operates on rapid dynamical timescales ($\tau_{\mathrm{quench}} \lesssim 0.3 - 0.5$ Gyr) and is triggered by violent, gas-rich events.

### Physical Mechanism Sequence
1. **Gas-Rich Major Merger** - Infalling gas-rich disk galaxies collide. Gravitational torques destroy circular orbital support, funneling vast reservoirs of cold molecular gas into the central kiloparsec at rates exceeding $100 \, M_\odot \text{ yr}^{-1}$.
2. **Nuclear Starburst** - The concentrated central gas undergoes an intense, compact starburst, rapidly building up a high-Sersic-index stellar bulge and elevating the galaxy concentration index ($C > 2.6$).
3. **Quasar-Mode AGN Feedback** - Central gas accretion onto the supermassive black hole reaches near-Eddington rates ($\dot{M} \sim \dot{M}_{\mathrm{Edd}}$). Radiation pressure, thermal energy injection, and relativistic disk winds couple to the ambient gas.
4. **Hydrodynamic Blowout** - The mechanical feedback sweeps remaining cold gas out of the host galaxy at velocities exceeding the escape speed ($v_{\mathrm{out}} > 1000\text{ km s}^{-1}$), abruptly halting star formation.
5. **Passive Aging** - Deprived of cold gas, the massive O and B stars perish within tens of millions of years. The galaxy moves almost vertically upward in the CMD across the green valley onto the red sequence with negligible change in stellar mass.

---

## 3. Slow Quenching Channel (Secular / Environmental Mode)

The slow quenching channel operates on gas exhaustion timescales ($\tau_{\mathrm{quench}} \sim 2 - 4$ Gyr), preserving the disc morphology of the galaxy.

### Physical Mechanisms
1. **Gas Starvation (Strangulation)** - As a galaxy falls into a massive dark matter halo or galaxy cluster, the diffuse hot circumgalactic gas reservoir is stripped by tidal forces and intracluster medium (ICM) hydrodynamic pressure. Deprived of new fuel replenishment from cosmological cold streams, the galaxy continues forming stars only until its existing cold interstellar gas is consumed via the Kennicutt-Schmidt star formation law -
   $$\tau_{\mathrm{exhaust}} = \frac{M_{\mathrm{HI}} + M_{\rm H_2}}{\text{SFR}} \sim 2 - 3 \text{ Gyr}$$
2. **Ram-Pressure Stripping (Gunn and Gott 1972)** - In dense cluster environments, the hydrodynamic drag of the hot ICM removes cold gas directly from the disk when the ram pressure exceeds the galactic gravitational restoring force -
   $$
ho_{\mathrm{ICM}} v_{\mathrm{rel}}^2 > 2\pi G \Sigma_* \Sigma_{\mathrm{gas}}$$
3. **Morphological Quenching (Martig et al. 2009)** - The secular growth of a massive central stellar bulge increases the radial epicyclic frequency $\kappa(R)$. By raising the Toomre stability parameter -
   $$Q = \frac{\kappa \, \sigma_{\mathrm{gas}}}{\pi G \Sigma_{\mathrm{gas}}} > 1$$
   the disk gas becomes dynamically stable against gravitational fragmentation and star formation without requiring physical gas expulsion.

---

## 4. Halo Mass Quenching and the $10^{12} M_\odot$ Virial Threshold

Cosmological hydrodynamic simulations (Dekel and Birnboim 2006) demonstrate that halo mass represents the fundamental master variable governing galaxy quenching.
- **Low-Mass Halos ($M_{\mathrm{halo}} < 10^{12} M_\odot$)** - The gas cooling timescale is shorter than the gravitational dynamical compression timescale ($t_{\mathrm{cool}} < t_{\mathrm{dyn}}$). Gas flows down onto the galaxy in un-shocked cold filaments, maintaining continuous star formation.
- **Massive Halos ($M_{\mathrm{halo}} \ge 10^{12} M_\odot$)** - Infalling gas undergoes a virial shock at the halo virial radius ($R_{\mathrm{vir}}$), heating the circumgalactic medium to the virial temperature -
   $$T_{\mathrm{vir}} = \frac{\mu m_p G M_{\mathrm{halo}}}{2 k_B R_{\mathrm{vir}}} \sim 10^6 - 10^7 \text{ K}$$
   In this hot halo regime, radio-mode (maintenance-mode) AGN feedback periodically injects mechanical energy via radio plasma bubbles into the ICM, balancing radiative cooling losses and preventing gas from cooling to form new stars.

---

## 5. Observational Graph Literacy and ASCII Blueprints

### Diagram 1 - Quenching Evolutionary Tracks in the Color-Magnitude Plane
```text
  Optical Color (u - r) [mag]
   3.0 +----------------------------------------------------------------+
       |                                                                |
   2.5 |     RED SEQUENCE              (Passive End-State)              |
       |       /...............................                         |
       |      ^               ^                                         |
   2.2 |------|---------------|-----------------------------------------| Green Valley Boundary
       |      | Fast Mode     | Slow Mode                               |
       |      | (Merger/AGN)  | (Starvation/Stripping)                  |
   1.8 |------|---------------|-----------------------------------------| Green Valley Boundary
       |      |               |                                         |
       |      * Massive Starburst                                       |
   1.4 |     /                \                                        |
       |   BLUE CLOUD          \ Secular Mass Growth                    |
       |                        v                                       |
   1.0 +----------------------------------------------------------------+
      -16         -18         -20         -22         -24
                          Absolute Magnitude M_r [mag] (Brighter -->)
  Key Insights -
  - Fast Mode - Vertical trajectory in CMD (rapid color change, Delta M_r ~ 0).
  - Slow Mode - Diagonal trajectory (simultaneous mass growth and gradual reddening).
```

---

## 6. Oral Exam Blackboard Presentation Script

When asked by Prof. Pizzella - *"What is the green valley, what does its existence tell us about galaxy evolution, and what are the primary quenching channels?"*

1. **State the fundamental demographic deduction** -
   - Draw the bimodal CMD on the blackboard.
   - Explain - *"The green valley is the underdense region between the blue cloud and red sequence. Its low space density requires a short transition timescale $\tau \sim 1 - 1.5$ Gyr. Galaxies do not remain green; they rapidly transform from star-forming disks to passive spheroids."*

2. **Contrast the two quenching channels** -
   - Write on the board -
     - *"Fast Quenching ($\tau \lesssim 0.5$ Gyr) - Gas-rich major mergers $\to$ nuclear starburst $\to$ quasar-mode AGN feedback blowout $\to$ dead spheroid."*
     - *"Slow Quenching ($\tau \sim 2 - 3$ Gyr) - Environmental gas starvation $\to$ halo stripping $\to$ cold gas exhaustion via Kennicutt-Schmidt law."*

3. **Formulate the halo mass quenching threshold** -
   - Write - $M_{\mathrm{halo}} \approx 10^{12} M_\odot$.
   - Explain - *"At $M_{\mathrm{halo}} \approx 10^{12} M_\odot$, virial shock heating prevents cold gas streams from reaching the disk. Hot gas is kept hot by maintenance-mode radio AGN feedback, permanently shutting off star formation."*

---

## 7. Primary Course References

- **Prof. Alessandro Pizzella's Lecture Notes** -
  - `Astrophysics_of_Galaxies.tex` (Part I - Galaxy Populations and Quenching Mechanisms, page 15).
  - `dispense_LF1_1_eng-1.pdf` (Color distributions and environmental effects, pages 21-27).
- **Seminal Literature** -
  - Faber, S. M., et al. (2007, ApJ, 665, 265) - *Is There a Green Valley? Galaxy Transformation and Quenching Across Cosmic Time*.
  - Schiminovich, D., et al. (2007, ApJS, 173, 315) - *The UV-Optical Color-Magnitude Diagram and the Properties of Green Valley Galaxies*.
  - Martig, M., et al. (2009, ApJ, 707, 250) - *Morphological Quenching of Star Formation - Making Early-Type Galaxies Red by Bulge Growth*.
  - Birnboim, Y., and Dekel, A. (2003, MNRAS, 345, 349) - *Virial Shocks in Galactic Gas Accretion*.

---

## 8. Related Knowledge Base Notes

- [Red sequence and blue cloud](Red%20sequence%20and%20blue%20cloud.html) - The fundamental optical color-magnitude diagram bimodality.
- [Color bimodality of galaxies](Color%20bimodality%20of%20galaxies.html) - Statistical decomposition of galaxy populations and luminosity functions.
- [Galaxy color, density and morphology](Galaxy%20color%2C%20density%20and%20morphology.html) - Environmental ram-pressure stripping and cluster morphology transformations.
- [Schmidt-Kennicutt law](Schmidt-Kennicutt%20law.html) - Star formation rate surface density relations governing gas exhaustion.
- [Alpha-Fe enhancement](Alpha-Fe%20enhancement.html) - Chemical clock proving the short starburst and quenching timescales of massive spheroids.

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (10)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Color%20bimodality%20of%20galaxies.html" class="backlink-item">Color bimodality of galaxies</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20color%2C%20density%20and%20morphology.html" class="backlink-item">Galaxy color, density and morphology</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20mergers%20and%20SF.html" class="backlink-item">Galaxy mergers and SF</a></li>
    <li class="backlink-item-wrap"><a href="Halo%20gravity%20suppression%20of%20galaxy%20formation.html" class="backlink-item">Halo gravity suppression of galaxy formation</a></li>
    <li class="backlink-item-wrap"><a href="Post-starburst%20galaxies.html" class="backlink-item">Post-starburst galaxies</a></li>
    <li class="backlink-item-wrap"><a href="Quenching%20and%20passive%20galaxies%20at%20high%20z.html" class="backlink-item">Quenching and passive galaxies at high z</a></li>
    <li class="backlink-item-wrap"><a href="Red%20sequence%20and%20blue%20cloud.html" class="backlink-item">Red sequence and blue cloud</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20mass%20function.html" class="backlink-item">Stellar mass function</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
  </ul>
</div>

