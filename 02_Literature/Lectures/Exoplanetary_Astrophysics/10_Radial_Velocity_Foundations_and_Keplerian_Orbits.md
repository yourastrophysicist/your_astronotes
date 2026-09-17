---
layout: "default"
title: "10_Radial_Velocity_Foundations_and_Keplerian_Orbits"
---
{% raw %}
# Lesson 10 – Radial Velocity I: Foundations and Keplerian Orbits

*Exoplanetary Astrophysics, Prof. Giampaolo Piotto (Lecture 11/11/2025)*  
*Index: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)*

---

## The Keplerian Two-Body Problem in Radial Velocity

The radial velocity (Doppler) method measures the line-of-sight component of the host star's gravitational reflex motion around the center of mass of the star-planet system. 

```
                       RADIAL VELOCITY ORBITAL GEOMETRY
                                     Plane of the Sky
                                      (Ref. Plane)
                         Orbit Normal      │
                             ▲             │ Line of Sight (Z)
                              \            │      ▲
                               \  inc. i   │     /
                                \          │    /
                    ─────────────\─────────┼───/─────────── X (East)
                                  \        │  /
                                   \       │ /
                                    \      │/
                                     \     ● System Barycenter
                                      \   /
                                       \ /
                                        ▼ Orbit Plane
```

### Governing Celestial Mechanics
The relative two-body orbit is governed by the separation vector $\mathbf{r}(t)$:

$$r(\nu) = \frac{a (1 - e^2)}{1 + e \cos \nu}$$

where:
- $a$: Semi-major axis of the relative orbit ($a = a_\star + a_p$).
- $e$: Orbital eccentricity.
- $\nu$: **True anomaly** (angular position measured from periastron).

The star's distance from the system center of mass is:

$$r_\star(\nu) = \frac{M_p}{M_\star + M_p} r(\nu) = \frac{a_\star (1 - e^2)}{1 + e \cos \nu}$$

Projecting the star's orbital position onto the observer's line of sight ($z$-axis, positive away from the observer):

$$z_\star(t) = - r_\star(t) \sin i \sin(\omega + \nu(t))$$

where:
- $i$: Orbital inclination ($i = 90^\circ$ is edge-on; $i = 0^\circ$ is face-on).
- $\omega$: Argument of periastron of the stellar orbit ($\omega = \omega_p + \pi$).

Differentiating $z_\star$ with respect to time using the conservation of angular momentum $r^2 \dot{\nu} = \frac{2\pi a^2 \sqrt{1 - e^2}}{P}$ yields the classical **Keplerian radial velocity equation**:

$$v_r(t) = \dot{z}_\star(t) = \gamma + K \left[ \cos(\omega + \nu(t)) + e \cos \omega \right]$$

where:
- $\gamma$: Constant systemic barycentric radial velocity of the system.
- $K$: **Radial velocity semi-amplitude**.

---

## Derivation of the Semi-Amplitude $K$

The semi-amplitude represents the maximum line-of-sight orbital velocity modulation:

$$K \equiv \frac{2\pi a_\star \sin i}{P \sqrt{1 - e^2}}$$

Applying Kepler's Third Law $a = \left[ \frac{G (M_\star + M_p) P^2}{4\pi^2} \right]^{1/3}$ and substituting $a_\star = a \frac{M_p}{M_\star + M_p}$:

$$K = \left( \frac{2\pi G}{P} \right)^{1/3} \frac{M_p \sin i}{(M_\star + M_p)^{2/3}} \frac{1}{\sqrt{1 - e^2}}$$

### Planetary Mass Function
Cubing the semi-amplitude expression yields the **binary mass function** $f(m)$:

$$f(m) \equiv \frac{(M_p \sin i)^3}{(M_\star + M_p)^2} = \frac{P K^3}{2\pi G} (1 - e^2)^{3/2}$$

Because $M_p \ll M_\star$, the denominator simplifies to $(M_\star + M_p)^2 \approx M_\star^2$, yielding the minimum mass:

$$M_p \sin i \approx K \left( \frac{P}{2\pi G} \right)^{1/3} M_\star^{2/3} \sqrt{1 - e^2}$$

### Practical Scaling Approximations
For circular orbits ($e = 0$):

$$K \approx 28.4\text{ m s}^{-1} \left( \frac{M_p \sin i}{M_J} \right) \left( \frac{M_\star}{M_\odot} \right)^{-2/3} \left( \frac{P}{1\text{ yr}} \right)^{-1/3}$$

$$K \approx 8.9\text{ cm s}^{-1} \left( \frac{M_p \sin i}{M_\oplus} \right) \left( \frac{M_\star}{M_\odot} \right)^{-2/3} \left( \frac{P}{1\text{ yr}} \right)^{-1/3}$$

```
Representative Doppler Semi-Amplitudes in Astrophysics:
Host Star (1 M_Sun)    Planet Type          Semi-major Axis a    Period P       Semi-amplitude K
──────────────────────────────────────────────────────────────────────────────────────────────────
Solar-type G2V         Hot Jupiter          0.05 AU              4.2 days       ~ 59 m/s (51 Peg b)
Solar-type G2V         Jupiter Analog       5.20 AU              11.86 years    ~ 12.5 m/s
Solar-type G2V         Earth Analog         1.00 AU              365.25 days    ~ 8.9 cm/s
M4V Dwarf (0.2 M_Sun)  Habitable Super-Earth 0.05 AU              10.0 days      ~ 2.5 m/s
```

---

## Solving Kepler's Equation for the Radial Velocity Curve

To evaluate $v_r(t)$ at an arbitrary epoch $t$, one must transform mean anomaly $M(t)$ into true anomaly $\nu(t)$:

```
Mean Anomaly M(t) ──[Kepler's Equation]──> Eccentric Anomaly E(t) ──[Trig Relation]──> True Anomaly nu(t)
```

1. **Mean Anomaly**:
   $$M(t) = \frac{2\pi}{P} (t - T_0)$$
   where $T_0$ is the time of periastron passage.
2. **Kepler's Equation**:
   $$M(t) = E(t) - e \sin E(t)$$
   Transcendental equation solved numerically via Newton-Raphson iteration:
   $$E_{n+1} = E_n - \frac{E_n - e \sin E_n - M}{1 - e \cos E_n}$$
3. **Conversion to True Anomaly**:
   $$\tan \frac{\nu(t)}{2} = \sqrt{\frac{1 + e}{1 - e}} \tan \frac{E(t)}{2}$$

### Influence of Eccentricity on Light Curve Morphology
- **Circular Orbits ($e = 0$)**: The radial velocity curve is a pure sinusoid:
  $$v_r(t) = \gamma + K \cos\left( \frac{2\pi}{P} (t - T_0) + \omega \right)$$
- **Eccentric Orbits ($e > 0$)**: The curve distorts into an asymmetric saw-tooth profile with rapid velocity swings during periastron passage and slow variations near apastron. The skewness and peak orientation depend strictly on the argument of periastron $\omega$.

```
                    RADIAL VELOCITY LIGHT CURVE PROFILES
 Velocity v_r
    ▲
 +K │      Circular (e = 0)                   Eccentric (e = 0.5, omega = 90 deg)
    │           ╭───╮                                 ▲
    │          ╱     ╲                               ╱ ╲  Rapid periastron
    │  ───────┼───────┼───────               ───────╱───╲─────── transition
    │        ╱         ╲                           ╱     ╲
 -K │       ╰───────────╯                         ╱       ╰────────
    └───────────┬───────────> Time               └────┬────────────> Time
               Period P                              Period P
```

---

## The Cross-Correlation Function (CCF) Technique

Modern Doppler spectroscopy does not measure radial velocity from a single absorption line (where photon noise limits precision to $\sim 50-100\text{ m s}^{-1}$). Instead, it combines thousands of stellar absorption lines simultaneously using the **Cross-Correlation Function (CCF)** (Baranne et al. 1996, Pepe et al. 2002):

```
 Stellar Spectrum S(lambda) ──┐
                              ├─[Cross-Correlation]─> CCF(v) ──[Gaussian Fit]─> Radial Velocity v_r
 Binary Mask M(lambda)      ──┘
```

1. A numerical stellar mask $M(\lambda)$ is constructed from a synthetic or high-SNR empirical stellar template matching the star's spectral type (e.g., G2, K5, M2). The mask consists of zero weights everywhere except at the rest wavelengths of neutral and ionized metal lines (Fe I, Fe II, Ti I, Ca I), where boxcar or delta functions are defined.
2. The observed stellar spectrum $S(\lambda)$ is cross-correlated with the mask shifted by trial velocity steps $v$:
   $$\text{CCF}(v) = \sum_k S(\lambda_k) \cdot M\left( \lambda_k \left[ 1 + \frac{v}{c} \right] \right)$$
3. The resulting CCF represents an average, high-SNR inverted absorption line profile.
4. Fitting a Gaussian to the CCF yields:
   - **Centroid**: The stellar radial velocity $v_r$.
   - **Full Width at Half Maximum (FWHM)**: Sensitivity to rotational velocity $v \sin i$ and thermal broadening.
   - **Bisector Inverse Slope (BIS)**: Diagnoses line profile asymmetry to distinguish true planetary Doppler shifts from stellar activity.

---

## Cross-Links & Vault Navigation
- Master Map of Content: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- Previous Lecture: [09_Astrometric_Detection_and_Gaia_Capabilities](./09_Astrometric_Detection_and_Gaia_Capabilities.html)
- Next Lecture: [11_High_Precision_Spectrographs_and_Doppler_Measurement](./11_High_Precision_Spectrographs_and_Doppler_Measurement.html)
- Related Notes: Radial velocity method and Keplerian orbits | [Binary star orbits](../../../03_Zettel/Theory/interf/Binary%20star%20orbits.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./09_Astrometric_Detection_and_Gaia_Capabilities.html" class="backlink-item">09_Astrometric_Detection_and_Gaia_Capabilities</a></li>
    <li class="backlink-item-wrap"><a href="./11_High_Precision_Spectrographs_and_Doppler_Measurement.html" class="backlink-item">11_High_Precision_Spectrographs_and_Doppler_Measurement</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Keplerian%20radial%20velocity%20and%20Doppler%20semi-amplitude.html" class="backlink-item">Keplerian radial velocity and Doppler semi-amplitude</a></li>
  </ul>
</div>
