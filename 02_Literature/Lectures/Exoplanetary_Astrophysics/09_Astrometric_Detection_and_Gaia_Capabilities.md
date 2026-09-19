---
layout: "default"
title: "09_Astrometric_Detection_and_Gaia_Capabilities"
---
# Lesson 09 – Astrometric Detection and Gaia Capabilities

*Exoplanetary Astrophysics, Prof. Giampaolo Piotto (Lecture 04/11/2025)*  
*Index: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)*

---

## Astrometric Principles and Celestial Mechanics

Astrometry measures the precise two-dimensional angular displacement of a star on the celestial plane. While radial velocity measures the line-of-sight velocity component ($z$-axis), astrometry measures the orbital wobble in the plane of the sky ($(x, y)$-plane) around the system barycenter:

```
                            ASTROMETRIC REFLEX MOTION
                                       Plane of the Sky (Sky-Plane Projection)
                                                    Y (North)
              Planet Orbit                            ▲
                 ╭────╮                               │
                │  ●   │                              │     Stellar Orbit
                 ╰────╯                               │        ╭───╮
              Semi-major axis a                       │       │    │ Semi-major axis a_*
                                                      │        ╰───╯
                                      ────────────────┼────────────────> X (East)
                                                      │
                                                      │  Angular semi-major axis:
                                                      │  alpha = a_* / d
```

### Governing Mathematical Equations
The semi-major axis of the star's orbit around the center of mass is given by:

$$a_\star = a \frac{M_p}{M_\star + M_p} \approx a \frac{M_p}{M_\star}$$

At a distance $d$ from the observer, the **apparent angular semi-major axis** $\alpha$ subtended on the celestial sphere is:

$$\alpha = \frac{a_\star}{d} = \frac{M_p}{M_\star} \frac{a}{d}$$

Expressing Kepler's Third Law $a = \left( \frac{G M_\star P^2}{4\pi^2} \right)^{1/3}$ in terms of orbital period:

$$\alpha = \left( \frac{G}{4\pi^2} \right)^{1/3} \frac{M_p}{M_\star^{2/3}} \frac{P^{2/3}}{d}$$

In practical astronomical units:

$$\alpha \approx 3.0\ \mu\text{as} \left( \frac{M_p}{M_\oplus} \right) \left( \frac{a}{1\text{ AU}} \right) \left( \frac{M_\star}{M_\odot} \right)^{-1} \left( \frac{d}{10\text{ pc}} \right)^{-1}$$

$$\alpha \approx 500\ \mu\text{as} \left( \frac{M_p}{M_J} \right) \left( \frac{a}{5.2\text{ AU}} \right) \left( \frac{M_\star}{M_\odot} \right)^{-1} \left( \frac{d}{10\text{ pc}} \right)^{-1}$$

### Fundamental Sensitivity Scaling
Astrometry possesses a unique scaling relation compared to other detection techniques:
- **Radial Velocity**: $K \propto a^{-1/2} \propto P^{-1/3}$ (favors short-period, close-in planets).
- **Transit Photometry**: Geometric probability $\mathcal{P}_{\text{tr}} \propto a^{-1} \propto P^{-2/3}$ (favors close-in planets).
- **Astrometry**: $\alpha \propto a \propto P^{2/3}$ (**favors wide-separation, long-period planets**).

Astrometry is most sensitive to massive planets at wide separations ($1 - 10\text{ AU}$) orbiting nearby stars ($d < 50-100\text{ pc}$).

---

## Decomposition of Stellar Motion on the Celestial Sphere

The apparent position of a star $\mathbf{\theta}(t)$ on the sky is a linear superposition of five distinct physical effects:

$$\mathbf{\theta}(t) = \mathbf{\theta}_0 + \boldsymbol{\mu} (t - t_0) + \varpi \boldsymbol{\Pi}(t) + \mathbf{\theta}_{\text{ab}}(t) + \mathbf{\theta}_{\text{GR}}(t) + \mathbf{\Delta \theta}_{\text{reflex}}(t)$$

```
Decomposition of Observed Sky Path:
1. Linear Proper Motion:       mu * (t - t_0)          [~ arcsec/yr]
2. Parallactic Ellipse:        varpi * Pi(t)            [~ milliarcsec]
3. Stellar Aberration:         theta_ab                 [~ 20.5 arcsec, Earth orbit]
4. General Relativity Deflect: theta_GR                 [~ microarcsec]
5. Reflex Planetary Wobble:    Delta theta_reflex       [~ microarcsec to milliarcsec]
```

To extract the tiny planetary reflex motion $\mathbf{\Delta \theta}_{\text{reflex}}$, observers must fit and subtract the large parallactic ellipse and proper motion vectors. Detecting a planet reliably requires an astrometric signal-to-noise ratio:

$$\text{SNR}_{\text{astrometry}} = \frac{\alpha}{\sigma_{\text{epoch}}} \sqrt{N_{\text{obs}}} \gtrsim 5 - 6$$

---

## Historical Pitfalls: The Barnard's Star False Alarm

Astrometry was historically susceptible to instrumental systematic errors:
- **Peter van de Kamp (1963)**: Announced the discovery of two Jupiter-mass companions ($M_p \approx 0.8 M_J$ and $0.4 M_J$ on 12-year and 26-year orbits) around **Barnard's Star** ($d \approx 1.83\text{ pc}$, M4V) using 25 years of photographic plates from the 24-inch Sproul refractor.
- **Resolution (Gatewood & Eichhorn 1973, Hershey 1973)**: Independent measurements using the Allegheny Observatory 30-inch refractor and Van Vleck Observatory refractor refuted the signal. The "planetary wobble" was tracked to systematic errors introduced during maintenance, dismounting, and realigning of the Sproul objective lens in 1949 and 1957.

---

## Space Astrometry: Hipparcos to Gaia

```
                     ASTROMETRIC PRECISION THROUGH THE ERAS
 Precision (mas)
    ▲
100 │  Visual Meridian Circles (19th Century)
    │
 10 │  Photographic Plates (Sproul, Allegheny, 1920-1980)
    │
  1 │  Hipparcos Space Mission (ESA, 1989-1993; ~1 mas)
    │
0.1 │
    │
0.01│  Gaia Space Observatory (ESA, 2013-present; ~10-20 microarcsec)
    └─────────────────────────────────────────────────────────> Era
```

### The Gaia Mission (ESA)
Gaia operates from a Lissajous orbit around the Sun-Earth Lagrange point $L_2$:
- **Optical Design**: Dual three-mirror anastigmatic telescopes with apertures of $1.45 \times 0.50\text{ m}$ separated by a fixed basic angle of $\gamma = 106.5^\circ$.
- **Focal Plane Array**: 106 large-format CCD detectors ($\approx 10^9$ pixels total) operating in Time-Delay Integration (TDI) mode.
- **Scanning Law**: Continuous spinning ($P_{\text{spin}} = 6\text{ h}$) with a spin axis precessing every $63.12\text{ days}$ at a solar aspect angle of $45^\circ$, scanning each patch of the sky $70 - 100$ times over a 10-year mission.

### Astrometric Precision Performance
- For bright stars ($G \le 12-13\text{ mag}$): Single-transit along-scan precision is $\sigma_{\text{AL}} \approx 20 - 30\ \mu\text{as}$.
- End-of-mission 5-parameter astrometric parallax precision: $\sigma_\varpi \approx 7 - 10\ \mu\text{as}$.

---

## Astrometric Orbital Solutions and the Gaia Revolution

Unlike radial velocity, which measures only $M_p \sin i$ and projected orbital arguments, astrometric astrometry fits the full Thiele-Innes orbital elements:

$$\Delta x = A X(\nu, e) + F Y(\nu, e)$$

$$\Delta y = B X(\nu, e) + G Y(\nu, e)$$

where $X, Y$ are normalized elliptical coordinates, and $A, B, F, G$ are the **Thiele-Innes constants**:

$$A = a_\star (\cos \omega \cos \Omega - \sin \omega \sin \Omega \cos i)$$

$$B = a_\star (\cos \omega \sin \Omega + \sin \omega \cos \Omega \cos i)$$

$$F = a_\star (-\sin \omega \cos \Omega - \cos \omega \sin \Omega \cos i)$$

$$G = a_\star (-\sin \omega \sin \Omega + \cos \omega \cos \Omega \cos i)$$

### Unlocking the True Planet Mass
Fitting these four constants yields the full 3D orbital geometry:
1. Orbital inclination $i$ (breaking the $\sin i$ degeneracy).
2. Longitude of the ascending node $\Omega$.
3. Argument of periastron $\omega$.
4. True physical semi-major axis $a_\star$, directly yielding the **true planetary mass $M_p$**:
   $$M_p = M_\star \frac{a_\star}{a - a_\star}$$

### Predicted Harvest in Gaia DR4
- **Gaia DR3 (2022)** published non-single star solutions, validating hundreds of known orbits.
- **Gaia DR4 (forthcoming)** will release epoch-by-epoch 1D astrometric time-series over a 10-year baseline.
- Population synthesis models predict Gaia will detect **$10,000 - 20,000$ new giant exoplanets** ($M_p > 0.5 M_J$) on orbits between $1$ and $5\text{ AU}$ within $500\text{ pc}$, providing an unprecedented catalog of cold giant planet architectures and coplanar multi-planet inclinations.

---

## Cross-Links & Vault Navigation
- Master Map of Content: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- Previous Lecture: [08_Direct_Imaging_Instrumentation_and_Astrometric_Synergies](./08_Direct_Imaging_Instrumentation_and_Astrometric_Synergies.html)
- Next Lecture: [10_Radial_Velocity_Foundations_and_Keplerian_Orbits](./10_Radial_Velocity_Foundations_and_Keplerian_Orbits.html)
- Related Notes: [Binary star orbits](../../../03_Zettel/Theory/interf/Binary%20star%20orbits.html) | Exoplanet detection techniques

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Astrometric%20exoplanet%20detection%20and%20Gaia%20astrometry.html" class="backlink-item">Astrometric exoplanet detection and Gaia astrometry</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
  </ul>
</div>

