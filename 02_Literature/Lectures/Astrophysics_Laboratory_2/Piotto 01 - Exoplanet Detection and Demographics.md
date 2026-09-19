---
layout: "default"
title: "Piotto 01 - Exoplanet Detection and Demographics"
---
# Piotto 01 — Exoplanet Detection and Demographics

*Astrophysics Laboratory 2, Prof. Giampaolo Piotto (Lecture 30/09/2025)*  
*Index: [Astrophysics_Laboratory_2_MOC](../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html)*

---

## Historical Context and Scientific Motivation

The philosophical question of whether other planetary systems exist dates back to ancient atomism (Leucippus, Democritus) and Giordano Bruno (1584), but empirical detection remained impossible until the late 20th century due to extreme contrast ratios:
$$\frac{F_{\text{planet}}}{F_{\text{star}}} \sim 10^{-9} \text{ (optical reflected light)}, \quad \sim 10^{-6} \text{ (mid-IR thermal emission)}$$

The discovery of the first exoplanet around a solar-type star (51 Pegasi b; Mayor & Queloz 1995, Nobel Prize 2019) shattered solar system paradigms by revealing a "Hot Jupiter" ($M \sin i \approx 0.47 M_J$) on a 4.23-day circular orbit ($a \approx 0.052\text{ AU}$).

---

## Primary Detection Methodologies

The search for extrasolar planets employs six main observational techniques:

### 1. Radial Velocity (Doppler Spectroscopy)
Measures the periodic reflex motion of the host star around the common center of mass:
$$v_r(t) = \gamma + K [\cos(\omega + \nu(t)) + e \cos \omega]$$
where the semi-amplitude $K$ is given by:
$$K = \left( \frac{2\pi G}{P} \right)^{1/3} \frac{M_p \sin i}{(M_\star + M_p)^{2/3}} \frac{1}{\sqrt{1 - e^2}}$$
For circular orbits ($e=0$), this simplifies to:
$$K \approx 28.4 \text{ m s}^{-1} \left( \frac{M_p \sin i}{M_J} \right) \left( \frac{M_\star}{M_\odot} \right)^{-2/3} \left( \frac{P}{1 \text{ yr}} \right)^{-1/3}$$
- Yields: minimum planetary mass $M_p \sin i$, orbital period $P$, eccentricity $e$, argument of periastron $\omega$.
- Limitation: cannot determine true mass without orbital inclination $i$.

### 2. Planetary Transits
Measures the periodic dip in stellar flux when the planet crosses the stellar disk along the line of sight:
$$\delta = \frac{\Delta F}{F_\star} \approx \left( \frac{R_p}{R_\star} \right)^2$$
Geometric transit probability for a circular orbit:
$$\mathcal{P}_{\text{tr}} = \frac{R_\star + R_p}{a} \approx \frac{R_\star}{a}$$
- For Hot Jupiters ($a \sim 0.05\text{ AU}$): $\mathcal{P}_{\text{tr}} \sim 10\%$.
- For Earth-Sun analogs ($a = 1\text{ AU}$): $\mathcal{P}_{\text{tr}} \approx 0.47\%$.
- Transit duration for central crossing ($b = 0$):
$$T_{\text{dur}} = \frac{P}{\pi} \arcsin\left( \frac{R_\star}{a} \right) \approx \frac{P R_\star}{\pi a}$$

### 3. Transit Timing Variations (TTV)
Gravitational perturbations in multi-planet systems cause departures from strict periodicity in transit epochs:
$$t_{\text{tr}}(n) = T_0 + n P + \Delta t_{\text{TTV}}(n)$$
TTV enables mass measurements of non-transiting companion planets and breaks inclination degeneracies.

### 4. Gravitational Microlensing
Occurs when a foreground star-planet system acts as a gravitational lens, bending the light of a background source star (Einstein ring radius $R_E \sim \sqrt{M_L}$):
- Sensitive to planets at the snow line (1?5 AU) and free-floating / rogue planets.
- Inherently non-repeatable event.

### 5. Direct Imaging
Resolves thermal emission from young, hot, massive planets ($M > 2 M_J$) at large orbital separations ($a > 10\text{ AU}$):
- Requires extreme adaptive optics (XAO), coronagraphy, and angular differential imaging (ADI).

### 6. Astrometry
Measures the 2D periodic positional wobble of the host star on the celestial plane:
$$\alpha = \frac{M_p}{M_\star} \frac{a}{d}$$
- Amplitude scales linearly with orbital distance $a$; directly yields true mass $M_p$ and inclination $i$. Space astrometry revolutionized by Gaia.

---

## Complementarity and Planetary Demographics

Combining transit photometry with radial velocity measurements breaks the inclination degeneracy $i \approx 90^\circ$:
$$M_p = \frac{M_p \sin i}{\sin i}, \quad R_p = R_\star \sqrt{\delta} \implies \bar{\rho}_p = \frac{3 M_p}{4\pi R_p^3}$$
Knowledge of mean density $\bar{\rho}_p$ is the bridge connecting orbital dynamics to planetary interior structure (gas giants, ice giants, ocean worlds, rocky planets).

Major Space Missions:
- **CoRoT (CNES/ESA)**: pioneering space-based transit photometry
- **Kepler / K2 (NASA)**: revealed that small planets (Super-Earths, Sub-Neptunes) are the most common in the Galaxy; established the radius valley ($1.5?2.0 R_\oplus$)
- **TESS (NASA)**: all-sky survey targeting bright nearby stars to find benchmark systems for atmospheric characterization
- **CHEOPS (ESA)**: targeted high-precision follow-up of known transiting systems
- **PLATO (ESA, upcoming)**: long-stare transit survey targeting Earth-sized planets in habitable zones of solar-type stars

---

## Related Notes
- [Exoplanet Transit Geometry and Impact Parameter](../../../03_Zettel/Theory/Exoplanet%20Transit%20Geometry%20and%20Impact%20Parameter.html)
- [Transit Depth and Ingress-Egress Timescales](../../../03_Zettel/Theory/Transit%20Depth%20and%20Ingress-Egress%20Timescales.html)
- [Piotto 02 - Atmospheric Characterization and Transit Spectroscopy](./Piotto%2002%20-%20Atmospheric%20Characterization%20and%20Transit%20Spectroscopy.html)
- [Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling](./Malavolta%2011%20-%20Transit%20Geometry%20and%20Analytical%20Light%20Curve%20Modeling.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (1)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

