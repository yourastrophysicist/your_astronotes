---
layout: "default"
title: "06_Timing_Methods_and_Pulsar_Planets"
---
{% raw %}
# Lesson 06 – Timing Methods and Pulsar Planets

*Exoplanetary Astrophysics, Prof. Giampaolo Piotto (Lecture 27/10/2025)*  
*Index: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)*

---

## Foundations of Pulsar Timing

The first confirmed extrasolar planets were discovered not around a main-sequence star, but around a rapidly rotating neutron star: **PSR B1257+12** (Wolszczan & Frail 1992, Nature 355, 145).

Millisecond radio pulsars (MSPs) act as ultra-stable cosmic clocks. Their high rotational kinetic energy ($E_{\text{rot}} \sim 10^{42}\text{ J}$) and immense moment of inertia ($I \sim 10^{38}\text{ kg m}^2$) yield period derivative stability $\dot{P} \sim 10^{-19} - 10^{-21}\text{ s s}^{-1}$. A planetary companion perturbs the pulsar along the line of sight around the system barycenter, modulating the pulse times of arrival (TOA) via the **classical Roemer delay**:

$$\Delta t_{\text{Roemer}} = \frac{\mathbf{r}_\star \cdot \hat{\mathbf{n}}}{c} = \frac{a_\star \sin i}{c} \left[ \frac{1 - e^2}{1 + e \cos \nu} \sin(\nu + \omega) \right]$$

```
                            PULSAR TIMING DELAY
                                      System Barycenter
                     Pulsar Reflex          ┌───┐
                        Motion              │ X │
                           ╭───────────────>│   │
                          (                 └───┘
                         ● P(t)               ▲
                         │                    │ a_* sin i
                         │                    │
                         │                    ▼
                         │               ● Planet (Mp)
                         ▼
        Line of Sight to Earth (c) ───────────────────────────>
        Path length change Delta z = a_* sin i  ==>  Delta t = Delta z / c
```

### Physical Sensitivity Limit
With modern digital pulsar backends, timing residuals can be determined to:

$$\sigma_{\text{TOA}} \lesssim 100\text{ ns} \quad (10^{-7}\text{ s})$$

The corresponding light travel path-length threshold is:

$$\Delta z = c \cdot \sigma_{\text{TOA}} \approx (3 \times 10^8\text{ m s}^{-1})(10^{-7}\text{ s}) = 30\text{ meters}$$

A 30-meter positional wobble allows astronomers to detect objects with masses down to lunar or asteroidal dimensions ($M_p \sim 10^{-4} - 10^{-3} M_\oplus$) orbiting millisecond pulsars.

---

## The PSR B1257+12 Planetary System

The millisecond pulsar PSR B1257+12 ($P_{\text{spin}} = 6.2\text{ ms}$, distance $d \approx 710\text{ pc}$) hosts three confirmed planets:

| Planet | Designation | Orbital Period $P$ | Semi-major Axis $a$ | Minimum Mass ($M_p \sin i$) | Physical Analog |
|---|---|---|---|---|---|
| **A** | PSR B1257+12 b | $25.26\text{ days}$ | $0.19\text{ AU}$ | $0.020 M_\oplus$ ($1.63 M_{\text{Moon}}$) | Moon / Large Asteroid |
| **B** | PSR B1257+12 c | $66.54\text{ days}$ | $0.36\text{ AU}$ | $4.3 M_\oplus$ | Super-Earth |
| **C** | PSR B1257+12 d | $98.21\text{ days}$ | $0.46\text{ AU}$ | $3.9 M_\oplus$ | Super-Earth |

### Resonant Dynamics and True Mass Determination
Planets B and C orbit in a near **$3:2$ mean motion resonance**:

$$\frac{P_C}{P_B} = \frac{98.21}{66.54} \approx 1.476 \approx \frac{3}{2}$$

Because they are locked close to resonance, mutual gravitational interactions induce periodic and secular perturbations in each other's orbital elements:
- These interactions modulate the pulse arrival times by milliseconds on timescales of several years.
- Modeling these Transit/Timing Variations (TTVs) broke the $\sin i$ degeneracy, revealing nearly coplanar orbits with inclinations $i_B \approx 53^\circ$ and $i_C \approx 47^\circ$, proving their true masses are $4.3 M_\oplus$ and $3.9 M_\oplus$.

---

## Formation Scenarios for Pulsar Planets

Given that the progenitor of a neutron star undergoes a catastrophic core-collapse supernova (ejecting $\sim 5-10 M_\odot$ with kinetic energy $E \sim 10^{44}\text{ J}$), primordial planets formed in the progenitor's circumstellar disk cannot survive without being unbinded or vaporized. Consequently, pulsar planets must represent **second-generation** bodies formed in a post-supernova circumstellar disk:

```
                            PULSAR PLANET FORMATION HYPOTHESES
 ┌───────────────────────────────────┬───────────────────────────────────┬──────────────────────────────────┐
 │ 1. Supernova Fallback Disk        │ 2. Stellar Companion Disruption   │ 3. White Dwarf Merger Disk       │
 ├───────────────────────────────────┼───────────────────────────────────┼──────────────────────────────────┤
 │ Reverse shock pushes fraction of  │ Supernova explosion strips or     │ In a close binary, a C/O white   │
 │ SN ejecta back toward NS; cool    │ disrupts close stellar companion; │ dwarf is tidally disrupted by the│
 │ metal-rich accretion disk forms   │ ablated gas forms a heavy circum- │ neutron star, forming an ultra-  │
 │ planetesimals (Menou et al. 2001) │ stellar disk (Podsiadlowski 1991) │ dense disk (Margalit 2017)       │
 └───────────────────────────────────┴───────────────────────────────────┴──────────────────────────────────┘
```

### The Paucity Paradox
Despite sub-microsecond sensitivity across hundreds of monitored pulsars, fewer than $1\%$ host planetary companions. The extreme rarity implies that the conditions required to retain or form a post-supernova protoplanetary disk are met only in rare supernova topologies or unusual binary dynamical channels.

The upcoming **Square Kilometre Array (SKA)** will monitor $>20,000$ radio pulsars (including $>1,000$ MSPs), establishing definitive empirical constraints on the Galactic pulsar planet population.

---

## Light-Travel-Time Effect (LTTE) in Pulsating Stars

Beyond radio pulsars, the periodic timing method extends to optical pulsating variable stars via the **Light-Travel-Time Effect (LTTE)**:

### $\delta$ Scuti Pulsators
- $\delta$ Scuti variables are intermediate-mass pulsating stars ($1.5 - 2.5 M_\odot$, spectral types A2–F8, classes V–IV) crossing the classical instability strip.
- Radial and non-radial p-mode pulsations possess periods $P_{\text{puls}} \approx 0.03 - 0.3\text{ days}$ ($45\text{ min} - 7\text{ hours}$) with photometric amplitudes from mmag to tenths of a magnitude.

### Governing Equation
If an unseen companion (planet or brown dwarf) orbits a $\delta$ Scuti star, the star's distance to Earth varies periodically. The observed pulsation times of maximum light $O$ deviate from a linear ephemeris $C = T_0 + E P_{\text{puls}}$ according to the $(O-C)$ timing residual:

$$(O - C)_{\text{LTTE}} = \frac{a_\star \sin i}{c} \left[ \frac{1 - e^2}{1 + e \cos \nu} \sin(\nu + \omega) + e \cos \omega \right]$$

where:
- $\frac{a_\star \sin i}{c}$ is the projected light-travel amplitude:
  $$\frac{a_\star \sin i}{c} = \frac{1}{c} \left( \frac{G}{4\pi^2} \right)^{1/3} \frac{M_p \sin i}{(M_\star + M_p)^{2/3}} P_{\text{orb}}^{2/3}$$
- For a Jovian planet ($M_p \approx 1 M_J$) on a 2-year orbit around a $2 M_\odot$ star:
  $$(O - C)_{\text{amp}} \approx 1.5 - 3\text{ seconds}$$
- UniPD work (**Vaulato et al. 2022, A&A 668, A110**) demonstrated that space-based photometry (Kepler/TESS) enables detection of substellar companions around early-type stars where dense spectral line blending and rapid rotational velocity ($v \sin i > 100\text{ km s}^{-1}$) render standard Doppler spectroscopy ineffective.

---

## Cross-Links & Vault Navigation
- Master Map of Content: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- Previous Lecture: [05_Gravitational_Microlensing_Principles_and_Light_Curves](./05_Gravitational_Microlensing_Principles_and_Light_Curves.html)
- Next Lecture: [07_Direct_Imaging_Physics_and_High_Contrast_Techniques](./07_Direct_Imaging_Physics_and_High_Contrast_Techniques.html)
- Related Notes: Planetary system dynamics and resonance | Exoplanet detection techniques
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./05_Gravitational_Microlensing_Principles_and_Light_Curves.html" class="backlink-item">05_Gravitational_Microlensing_Principles_and_Light_Curves</a></li>
    <li class="backlink-item-wrap"><a href="./07_Direct_Imaging_Physics_and_High_Contrast_Techniques.html" class="backlink-item">07_Direct_Imaging_Physics_and_High_Contrast_Techniques</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Millisecond%20pulsar%20timing%20and%20planetary%20companions.html" class="backlink-item">Millisecond pulsar timing and planetary companions</a></li>
  </ul>
</div>
