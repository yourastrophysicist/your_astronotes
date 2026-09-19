---
layout: "default"
title: "05_Gravitational_Microlensing_Principles_and_Light_Curves"
---
# Lesson 05 – Gravitational Microlensing: Principles and Light Curves

*Exoplanetary Astrophysics, Prof. Giampaolo Piotto (Lecture 21/10/2025)*  
*Index: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)*

---

## Physical Foundations of Gravitational Deflection

Gravitational microlensing exploits the gravitational deflection of light from a background source star by an intervening foreground lens system (star plus planetary companion). In General Relativity (Einstein 1915), a photon passing a point mass $M_L$ at an impact parameter $\xi$ is deflected by an angle:

$$\hat{\alpha} = \frac{4 G M_L}{c^2 \xi}$$

```
                          MICROLENSING RAY GEOMETRY
                                    Lens Plane
                     Source Plane       │
                          │             │ Image I+
                          │             │    ▲
                  Source  │             │   /│
                     S ●──┼─────────────┼──/─┼───────────┐
                       │  │             │ /  │           │
                       │  │             │/   │ θ+        │
                       │β │             ● L (Lens)       │
                       │  │            /│                │
                 Optical  │           / │                │
                 Axis ────┼──────────/──┼────────────────● Observer
                          │         /   │               O
                          │        ▼    │ θ-
                          │     Image I-│
                          │             │
                          │<─── D_LS ──>│<───── D_L ────>│
                          │<─────────────── D_S ────────>│
```

From simple geometry in the small-angle approximation:

$$\theta D_S = \beta D_S + \hat{\alpha} D_{LS}$$

Substituting the physical deflection angle $\hat{\alpha} = \frac{4 G M_L}{c^2 (D_L \theta)}$ yields the classical **lens equation**:

$$\beta = \theta - \frac{\theta_E^2}{\theta}$$

where $\theta_E$ is the **angular Einstein ring radius**:

$$\theta_E = \sqrt{\frac{4 G M_L}{c^2} \frac{D_{LS}}{D_L D_S}} = \sqrt{\kappa M_L \pi_{\text{rel}}}$$

with the constant $\kappa \equiv \frac{4G}{c^2 \text{AU}} \approx 8.144\text{ mas } M_\odot^{-1}$, and the relative source-lens parallax:

$$\pi_{\text{rel}} \equiv \text{AU} \left( \frac{1}{D_L} - \frac{1}{D_S} \right) = \pi_L - \pi_S$$

For a typical Galactic bulge event ($M_L \approx 0.3-0.5 M_\odot$, $D_L \approx 6\text{ kpc}$, $D_S \approx 8\text{ kpc}$):

$$\theta_E \approx 0.5 - 1.0\text{ mas}$$

The corresponding physical Einstein radius in the lens plane is:

$$R_E = D_L \theta_E \approx 2 - 4\text{ AU}$$

---

## Single-Lens Photometry: The Paczyński Light Curve

Solving the quadratic lens equation $\theta^2 - \beta \theta - \theta_E^2 = 0$ yields two collinear images on opposite sides of the lens:

$$\theta_{\pm} = \frac{1}{2} \left( \beta \pm \sqrt{\beta^2 + 4 \theta_E^2} \right)$$

Because Liouville's theorem conserves surface brightness, gravitational lensing magnifies flux by distorting the solid angle subtended by the source. The magnification of each image is the Jacobian determinant of the lens mapping:

$$A_{\pm} = \left\lvert \frac{\theta_{\pm}}{\beta} \frac{d\theta_{\pm}}{d\beta} \right\rvert = \frac{1}{4} \left( \frac{u}{\sqrt{u^2 + 4}} + \frac{\sqrt{u^2 + 4}}{u} \pm 2 \right)$$

where $u \equiv \beta / \theta_E$ is the source-lens angular separation normalized to the Einstein radius. The total observable flux magnification is the sum $A(u) = A_+ + A_-$ (**Paczyński 1986**):

$$A(u) = \frac{u^2 + 2}{u \sqrt{u^2 + 4}}$$

```
Paczyński Magnification Curve A(t):
A(t)
▲
│                       /\
│                      /  \   Peak Magnification:
│                     /    \  A_max ~ 1 / u_0 (for u_0 << 1)
│                    /      \
│                   /        \
│  ────────────────┘          └────────────────── Base Flux (A -> 1)
└───────────────────────┼───────────────────────> Time t
                       t_0
           <─────────── 2 t_E ───────────>
```

Assuming rectilinear relative motion with constant proper motion $\mu_{\text{rel}}$:

$$u(t) = \sqrt{u_0^2 + \left( \frac{t - t_0}{t_E} \right)^2}$$

where:
- $u_0$: Minimum impact parameter at time $t_0$.
- $t_E$: **Einstein crossing timescale**:
  $$t_E = \frac{\theta_E}{\mu_{\text{rel}}}$$
  For typical stellar lenses in the Galaxy, $t_E \approx 15 - 40\text{ days}$.

---

## Binary Lenses and Planetary Perturbations

When the lens consists of a host star ($M_1$) and a planetary companion ($M_2 = M_p$), the system is parameterized by:
1. Mass ratio: $q \equiv \frac{M_p}{M_\star} \ll 1$ (typically $10^{-5} \le q \le 10^{-2}$).
2. Projected separation: $s \equiv \frac{d}{R_E}$ (separation in units of the Einstein radius).
3. Angle of source trajectory $\alpha$ relative to the binary axis.

### Complex Coordinate Formulation
In the complex plane ($z = x + iy$), the binary lens equation maps image positions $z$ to source positions $\zeta$:

$$\zeta = z - \frac{1}{1 + q} \frac{1}{\bar{z} - \bar{z}_1} - \frac{q}{1 + q} \frac{1}{\bar{z} - \bar{z}_2}$$

This mapping yields either 3 or 5 discrete images.

### Caustics and Critical Curves
- **Critical Curves**: Closed contours in the lens plane where the Jacobian determinant vanishes ($\det J = 0$).
- **Caustics**: The projection of critical curves onto the source plane. For a point source crossing a caustic, the theoretical magnification formally diverges ($A \to \infty$).

```
Binary Microlensing Caustic Topologies:
1. Close Binary (s < 1)          2. Resonant Binary (s ~ 1)       3. Wide Binary (s > 1)
   Central + 2 Planetary Caustics    Single Large Central Caustic    Central + 1 Planetary Caustic
      ◇                                      ╭───╮                           ◇ (Central)
   (Central)                                 │   │                        
       ▲                                     ╰───╯                             ▲
      ╱ ╲                                  (Resonant)                         ╱ ╲ (Planetary)
     ◇   ◇ (Planetary)                                                       ◇───◇
```

### The "Lensing Zone"
Planetary caustics are most pronounced when the planet lies in the **lensing zone**:

$$0.6 \lesssim s \lesssim 1.6 \implies d \sim 1 - 5\text{ AU}$$

This coincides directly with the circumstellar snow line around M and K dwarf lenses, making microlensing uniquely sensitive to cool, low-mass planets inaccessible to transits or Doppler spectroscopy.

---

## Breaking Mass-Distance Degeneracies

A standard single-lens light curve yields only $t_E = \theta_E / \mu_{\text{rel}}$, leaving a three-fold degeneracy among lens mass $M_L$, distance $D_L$, and relative velocity $v_{\text{rel}}$. To measure the physical mass $M_L$ and planetary mass $M_p = q M_L$, observers require two additional second-order parameters:

### 1. Finite Source Effects ($\rho$)
When the source star passes over or near a caustic cusp, its finite angular radius $\theta_\star$ resolves the caustic singularity. The resulting light curve peak is broadened and rounded. Modeling this shape determines the normalized source radius:

$$\rho \equiv \frac{\theta_\star}{\theta_E}$$

Because $\theta_\star$ can be deduced from dereddened broad-band colors and standard color-surface brightness relations, $\theta_E$ is directly measured:

$$\theta_E = \frac{\theta_\star}{\rho}$$

### 2. Microlensing Parallax ($\pi_E$)
As the Earth accelerates around the Sun during an extended microlensing event ($t_E \gtrsim 20-30\text{ d}$), the apparent trajectory of the source is curved, causing subtle light curve asymmetries:
- **Orbital Parallax**: Ground-based distortion from Earth's orbital acceleration.
- **Terrestrial Parallax**: Simultaneous observations from well-separated ground observatories (e.g., Chile vs South Africa vs Australia).
- **Space-Based Parallax**: Simultaneous observations from Earth and a distant space probe (e.g., Spitzer or Kepler at $\sim 1\text{ AU}$ separation).

The microlensing parallax vector $\boldsymbol{\pi}_E$ has magnitude:

$$\pi_E = \frac{\pi_{\text{rel}}}{\theta_E}$$

### Direct Mass Extraction
Combining $\theta_E$ and $\pi_E$ yields the lens mass without any assumptions:

$$M_L = \frac{\theta_E}{\kappa \pi_E}$$

and the lens distance:

$$D_L = \frac{\text{AU}}{\pi_E \theta_E + \pi_S}$$

---

## Free-Floating Planets (FFPs)

When an isolated planetary-mass body drifts through interstellar space without a host star, it acts as an isolated single lens.
- Because $t_E \propto \sqrt{M_L}$, an isolated planet of $M_p \approx 1 M_J$ produces an ultra-short crossing time:
  $$t_E \approx 1 - 2\text{ days}$$
  Earth-mass rogue planets produce events lasting only a few hours:
  $$t_E \approx 1 - 3\text{ hours}$$
- **Sumi et al. (2011)** and **Mróz et al. (2017, 2020)** using OGLE-IV detected a population of terrestrial and Jovian rogue planet candidates, establishing that free-floating planets are either ejected during chaotic planet-planet scattering or formed via brown-dwarf-like cloud collapse.

---

## Observational Surveys: OGLE, MOA, and Roman Space Telescope

- **OGLE (Optical Gravitational Lensing Experiment)**: Operational since 1992 at Las Campanas Observatory (Warsaw 1.3m telescope). Monitors over $10^8$ stars in the Galactic Bulge.
- **MOA (Microlensing Observations in Astrophysics)**: 1.8m telescope at Mt. John Observatory, New Zealand.
- **Nancy Grace Roman Space Telescope (NASA, launch ~2027)**:
  - **Galactic Bulge Time-Domain Survey**: Dedicated near-infrared survey monitoring hundreds of millions of stars with a 15-minute cadence.
  - Expected to discover $>1,400$ bound exoplanets (down to lunar mass, $0.1 M_\oplus$) and hundreds of free-floating Earth-mass planets, completing the statistical census from the snow line to the outer edges of planetary systems.

---

## Cross-Links & Vault Navigation
- Master Map of Content: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- Previous Lecture: [04_Small_Planets_and_Host_Star_Correlations](./04_Small_Planets_and_Host_Star_Correlations.html)
- Next Lecture: [06_Timing_Methods_and_Pulsar_Planets](./06_Timing_Methods_and_Pulsar_Planets.html)
- Related Notes: Exoplanet detection techniques | Planetary system dynamics and resonance

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Gravitational%20microlensing%20of%20planetary%20systems.html" class="backlink-item">Gravitational microlensing of planetary systems</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
  </ul>
</div>

