---
layout: "default"
title: "18_Space_Transit_Surveys_TTVs_and_Resonances"
---
{% raw %}
# Lesson 18 – Planetary Transits IV: Space Surveys, TTVs, and Resonances

*Exoplanetary Astrophysics, Prof. Giampaolo Piotto (Lecture 16/12/2025)*  
*Index: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)*

---

## Transit Timing Variations (TTVs): Mathematical Dynamics

In an unperturbed two-body system, a planet transits with strict Keplerian periodicity:

$$t_{\text{calc}}(N) = T_0 + N \cdot P$$

When a second planet (transiting or non-transiting) orbits the same host star, mutual gravitational perturbations accelerate and decelerate the transiting planet along its orbital path. The observed transit times $t_{\text{obs}}(N)$ depart from a linear ephemeris, producing **Transit Timing Variations (TTVs)** (**Holman & Murray 2005, Agol et al. 2005**):

$$\text{TTV}(N) \equiv t_{\text{obs}}(N) - (T_0 + N \cdot P) = (O - C)$$

```
                                  THE (O - C) TTV DIAGRAM
 Timing Residual (O - C)
      ▲
 +Δt  │         ╭───────╮                               ╭───────╮
      │        ╱         ╲                             ╱         ╲
  0   ┼───────┼───────────┼───────────────────────────┼───────────┼─────── Linear Ephemeris
      │                    ╲                         ╱
 -Δt  │                     ╰───────────────────────╯
      └───────┬───────────┬───────────┬───────────┬───┬───────────┬───────> Transit Epoch N
              0           5          10          15  20          25
              <────────────────── P_TTV (Super-Period) ──────────>
```

---

## Resonant Amplification Near Mean Motion Resonances (MMR)

Gravitational perturbations between coplanar planets are dramatically amplified when the orbital periods are close to a **first-order Mean Motion Resonance (MMR)**:

$$\frac{P_2}{P_1} \approx \frac{j}{j - 1} \quad \text{where } j \in \{2, 3, 4, 5\}$$

### 1. Distance to Resonance ($\Delta$)
The dimensionless proximity to resonance is defined as:

$$\Delta \equiv \frac{P_2}{P_1} \left( \frac{j - 1}{j} \right) - 1$$

- If $\Delta > 0$, the system is wide of resonance (super-resonant).
- If $\Delta < 0$, the system is narrow of resonance (sub-resonant).

### 2. TTV Super-Period ($P_{\text{TTV}}$)
The periodic timing perturbation oscillates at the **synodic super-period** (circulation period of the resonant argument):

$$P_{\text{TTV}} = \frac{1}{\left| \frac{j}{P_2} - \frac{j - 1}{P_1} \right|} = \frac{P_1}{j |\Delta|}$$

For planets close to resonance ($|\Delta| \ll 1$), $P_{\text{TTV}}$ spans hundreds to thousands of days.

### 3. TTV Semi-Amplitude
For circular or near-circular orbits, the semi-amplitude of the timing variation is proportional to the **perturber's mass** and inversely proportional to $\Delta$ (**Lithwick, Xie & Wu 2012**):

$$V_1 \approx P_1 \left( \frac{M_2}{M_\star} \right) \frac{f(j, \alpha)}{|\Delta|}$$

where $\alpha = a_1 / a_2$ and $f(j, \alpha)$ is a Laplace coefficient combination of order unity.
- For mutual transiting pairs, both planets exhibit anti-correlated TTV curves:
  $$\frac{V_1}{V_2} \approx \frac{M_2}{M_1} \left( \frac{P_1}{P_2} \right)$$
- **Mass Determination Without RV**: Measuring the amplitude and phase of TTVs directly yields the **true physical masses $M_1$ and $M_2$**, breaking the $M \sin i$ inclination degeneracy. This provides the primary mass determination channel for low-mass planets orbiting faint Kepler stars.

---

## Transit Duration Variations (TDVs) and Exomoons

In addition to timing shifts, gravitational perturbations can alter the **duration** of transits:

$$\text{TDV} = T_{\text{dur}}(N) - \langle T_{\text{dur}} \rangle$$

```
                         TRANSIT DURATION VARIATION (TDV)
                        Impact parameter b shifts across epochs
           Epoch N: Equatorial crossing           Epoch N+k: Inclined chord
                 ╭───────────╮                         ╭───────────╮
                │             │                       │  ───────  │ Short chord ==>
                │  ─────────  │ Long chord ==>        │           │ Shorter duration!
                 ╲           ╱                         ╲         ╱
                  ╰─────────╯                           ╰───────╯
```

### Physical Mechanisms of TDVs
1. **Nodal Precession**: Mutual non-coplanar orbital interactions tilt the transiting planet's orbital plane, changing inclination $i(t)$ and impact parameter $b(t)$, directly modulating transit duration:
   $$T_{\text{dur}}(t) \propto \sqrt{1 - b(t)^2}$$
2. **Exomoons (Kipping 2009)**:
   A planet with a massive moon revolves around the planet-moon barycenter:
   - **Velocity TDV ($\text{TDV-V}$)**: As the planet orbits the barycenter, its orbital velocity component across the stellar disk varies, shortening or lengthening the transit chord transit time.
   - **Phase Signature**: The exomoon-induced TTV and TDV are strictly **$\pi/2$ ($90^\circ$) out of phase**, providing an unambiguous dynamical fingerprint to confirm candidate exomoons.

---

## Space-Based Transit Missions: Chronology and Architectures

```
                    CHRONOLOGY OF SPACE TRANSIT MISSIONS
 CoRoT (2006-2013)       Kepler / K2 (2009-2018)     TESS (2018-present)       PLATO (2026+)
 ──────────────────      ───────────────────────     ───────────────────       ─────────────
 First rocky planet      Statistical demographics    All-sky bright stars      Earth-Sun analogs
 CoRoT-7b                Radius Valley, >2700 confirmed Atmospheric targets   Terrestrial HZ planets
```

### 1. CoRoT (CNES/ESA, 2006–2013)
- First space telescope dedicated to exoplanet transits and asteroseismology ($27\text{ cm}$ afocal mirror).
- Discovered **CoRoT-7b** ($P = 0.85\text{ d}, R_p \approx 1.58 R_\oplus, M_p \approx 4.8 M_\oplus$), establishing the first empirical proof of a rocky super-Earth with an Earth-like mean density ($\bar{\rho} \approx 5.6\text{ g cm}^{-3}$).

### 2. The Kepler Mission (NASA, 2009–2018)
- $0.95$-meter Schmidt telescope with a $105\text{ deg}^2$ field of view in Cygnus-Lyra, monitoring $\sim 150,000$ stars continuously for 4 years with sub-mmag photometric precision.
- Transformed exoplanet demographics:
  - Discovered $>2,700$ confirmed planets and $>4,000$ candidates.
  - Demonstrated that sub-Neptunes and super-Earths are the most common planets in the Galaxy.
  - Identified resonant chains and compact multi-planet systems (e.g. Kepler-11, Kepler-90).
- **K2 Mission (2014–2018)**: Repurposed two-reaction-wheel configuration using solar radiation pressure balance to observe sequential fields along the ecliptic plane.

### 3. TESS (Transiting Exoplanet Survey Satellite; NASA, 2018–present)
- Architecture: Four identical wide-field cameras ($24^\circ \times 24^\circ$ each), combined into a $24^\circ \times 96^\circ$ instantaneous strip covering $85\%$ of the sky in 27-day sectors.
- Science Objective: Unlike Kepler's deep statistical pencil-beam survey of faint stars ($V \sim 14-16$), TESS focuses on **bright, nearby stars ($V \sim 8-11$)** across the entire sky to discover ideal targets for precise radial velocity mass follow-up and atmospheric transmission spectroscopy with JWST and Ariel.

---

## Cross-Links & Vault Navigation
- Master Map of Content: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- Previous Lecture: [17_Transit_False_Positives_and_Vetting_Protocols](./17_Transit_False_Positives_and_Vetting_Protocols.html)
- Next Lecture: [19_CHEOPS_and_PLATO_Missions](./19_CHEOPS_and_PLATO_Missions.html)
- Related Notes: Transit photometry and Mandel-Agol formulation | Planetary system dynamics and resonance
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./17_Transit_False_Positives_and_Vetting_Protocols.html" class="backlink-item">17_Transit_False_Positives_and_Vetting_Protocols</a></li>
    <li class="backlink-item-wrap"><a href="./19_CHEOPS_and_PLATO_Missions.html" class="backlink-item">19_CHEOPS_and_PLATO_Missions</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Space%20transit%20observatories%20and%20CHEOPS-PLATO%20missions.html" class="backlink-item">Space transit observatories and CHEOPS-PLATO missions</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Transit%20timing%20variations%20and%20resonant%20multi-planet%20dynamics.html" class="backlink-item">Transit timing variations and resonant multi-planet dynamics</a></li>
  </ul>
</div>
