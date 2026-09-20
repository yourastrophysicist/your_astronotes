---
layout: "default"
title: "16_Transit_Light_Curve_Modeling_and_Limb_Darkening"
---
# Lesson 16 – Planetary Transits II: Light Curve Modeling and Limb Darkening

*Exoplanetary Astrophysics, Prof. Giampaolo Piotto (Lecture 02/12/2025)*  
*Index: [[Exoplanetary_Astrophysics_MOC]]*

---

## Stellar Limb Darkening: Physical Mechanism

Stars are not uniformly illuminated disks. Looking toward the center of the stellar disk, the line of sight penetrates radially into deeper, hotter atmospheric layers. Toward the limb, the line of sight grazes the atmosphere at an oblique angle $\theta$ relative to the surface normal, reaching optical depth unity ($\tau = 1$) at higher, cooler photospheric layers:

```
                         LIMB DARKENING GEOMETRY
                                 Stellar Atmosphere
                         r = R_*        │
                            ╭───────────┴───────────╮
                           ╱  mu = cos(theta) = 0   │
                          │   (Shallow, Cool Layer) │
                          │             ▲           │
                          │            ╱ theta      │
                          │           ●             │
                          │                         │
                          │   mu = 1.0 (Radial)     │
                          │   (Deep, Hot Layer)     │
                          │   ────────────────────> │ Observer
                           ╲                       ╱
                            ╰─────────────────────╯
```

Because temperature decreases outwards in main-sequence stellar atmospheres ($dT/dr < 0$), the specific emergent intensity $I(\mu)$ decreases from center ($\mu = 1$) to limb ($\mu = 0$):

$$\mu \equiv \cos \theta = \sqrt{1 - \left( \frac{r}{R_\star} \right)^2}$$

### Analytical Limb-Darkening Parametrizations
1. **Linear Law**:
   $$\frac{I(\mu)}{I(1)} = 1 - u (1 - \mu)$$
2. **Quadratic Law (Kopal 1950)**:
   $$\frac{I(\mu)}{I(1)} = 1 - u_1 (1 - \mu) - u_2 (1 - \mu)^2$$
   To sample parameter space efficiently without unphysical intensity profiles ($I(\mu) < 0$ or non-monotonic darkening), Kipping (2013) introduced the triangular sampling parameters $(q_1, q_2)$:
   $$q_1 = (u_1 + u_2)^2, \quad q_2 = \frac{u_1}{2(u_1 + u_2)}$$
3. **Non-Linear 4-Parameter Law (Claret 2000)**:
   $$\frac{I(\mu)}{I(1)} = 1 - \sum_{n=1}^4 c_n (1 - \mu^{n/2}) = 1 - c_1(1 - \mu^{1/2}) - c_2(1 - \mu) - c_3(1 - \mu^{3/2}) - c_4(1 - \mu^2)$$

---

## Analytical Light Curve Formulation: Mandel & Agol (2002)

Modeling a transit light curve requires integrating the stellar intensity profile over the obscured area of the stellar disk:

$$F(t) = 1 - \frac{\iint_{\mathcal{A}_{\text{obscured}}} I(x, y) \, dx \, dy}{\iint_{\text{disk}} I(x, y) \, dx \, dy}$$

where the projected center-to-center distance is:

$$z(t) = \frac{d(t)}{R_\star} = \sqrt{\left( \frac{a}{R_\star} \sin\left( \frac{2\pi t}{P} \right) \right)^2 + \left( \frac{a}{R_\star} \cos i \cos\left( \frac{2\pi t}{P} \right) \right)^2}$$

```
                LIGHT CURVE MORPHOLOGY: UNIFORM VS LIMB-DARKENED
 Relative Flux
      ▲
 1.0  ┼─────────╮                                 ╭─────────
      │          ╲  Uniform Disk: FLAT BOTTOM     ╱
      │           ╲──────────────────────────────╱
      │           :                              :
      │          :  Limb-Darkened: CURVED BOTTOM  :
      │          : ╲                            ╱ :
      │          :  ╰──────────────────────────╯  :
 1-δ  ┼──────────+────────────────────────────────+─────────
      └──────────┴────────────────────────────────┴─────────> Time
```

### The Mandel & Agol Formulation
Mandel & Agol (2002) solved this 2D surface integral analytically in terms of **complete elliptic integrals of the first, second, and third kinds**:
- $K(k) = \int_0^{\pi/2} \frac{d\phi}{\sqrt{1 - k^2 \sin^2 \phi}}$
- $E(k) = \int_0^{\pi/2} \sqrt{1 - k^2 \sin^2 \phi} \, d\phi$
- $\Pi(n, k) = \int_0^{\pi/2} \frac{d\phi}{(1 - n \sin^2 \phi)\sqrt{1 - k^2 \sin^2 \phi}}$

For a quadratic limb-darkening law:

$$\Delta F(z, k) = \frac{1}{4\Omega} \left[ (1 - c_1 - 2c_2) \lambda_e + c_1 \lambda_d + c_2 \eta_d \right]$$

where $\Omega = 1 - \frac{u_1}{3} - \frac{u_2}{6}$, and $\lambda_e, \lambda_d, \eta_d$ are piecewise analytical combinations of elliptic integrals evaluated across three regimes:
1. $z > 1 + k$ (Out of transit: $\Delta F = 0$).
2. $1 - k < z \le 1 + k$ (Ingress / Egress: planet limb crosses stellar boundary).
3. $z \le 1 - k$ (Complete interior transit).

---

## Direct Measurement of Mean Stellar Density $\bar{\rho}_\star$

A remarkable property of transit photometry is that the light curve directly yields the **mean density of the host star** without requiring stellar evolution models (**Seager & Mallén-Ornelas 2003**):

### Mathematical Derivation
From Kepler's Third Law:

$$\frac{a^3}{P^2} = \frac{G(M_\star + M_p)}{4\pi^2} \approx \frac{G M_\star}{4\pi^2}$$

Dividing both sides by $R_\star^3$:

$$\frac{M_\star}{R_\star^3} = \frac{4\pi^2}{G P^2} \left( \frac{a}{R_\star} \right)^3$$

The mean stellar density is $\bar{\rho}_\star \equiv \frac{M_\star}{\frac{4}{3}\pi R_\star^3}$. Therefore:

$$\bar{\rho}_\star = \frac{3\pi}{G P^2} \left( \frac{a}{R_\star} \right)^3$$

Because the scaled semi-major axis $a/R_\star$ is measured directly from the transit duration $T_{\text{tot}}$ and ingress duration $\tau$:

$$\frac{a}{R_\star} \approx \frac{2 P}{\pi} \frac{\delta^{1/4}}{\sqrt{T_{\text{tot}}^2 - \tau^2}}$$

The transit light curve yields $\bar{\rho}_\star$ directly. This provides a critical constraint on stellar parameters, enabling asteroseismic validation and false-positive rejection.

---

## Direct Measurement of Planetary Surface Gravity $g_p$

By combining transit photometry with radial velocity spectroscopy, the planet's surface gravity $g_p$ can be measured **independently of stellar radius and mass** (**Southworth et al. 2007**):

$$g_p \equiv \frac{G M_p}{R_p^2}$$

From the Doppler semi-amplitude equation for circular orbits:

$$K = \frac{2\pi a_\star \sin i}{P} = \frac{2\pi G^{1/3} M_p \sin i}{P^{1/3} M_\star^{2/3}}$$

Substituting Kepler's Third Law and $R_p = k R_\star$:

$$g_p = \frac{2\pi}{P} \frac{K \sqrt{1 - e^2}}{\sin i \left( \frac{R_p}{a} \right)^2}$$

Because $K$ comes from Doppler spectroscopy, and $P, i, \left( \frac{R_p}{a} \right)$ come from the transit light curve, **$g_p$ is determined directly from empirical observables**.

---

## Transit Search Algorithms: Box-fitting Least Squares (BLS)

Detecting periodic transits in noisy photometric time series relies on the **Box-fitting Least Squares (BLS)** algorithm (**Kovács et al. 2002**):

```
                        BLS PERIODOGRAM CONCEPT
 Box Model:
   Flux
    ▲
1.0 ┼────────────╮          ╭────────────
    │            │  Depth δ │
1-δ ┼────────────┴──────────┴────────────
    └────────────┼──────────┼────────────> Phase phi
                 phi_in     phi_eg
                 <──  q  ──> (Fractional Duration q = tau / P)
```

The light curve is modeled as a periodic box pulse parameterized by:
- Orbital period $P$.
- Transit epoch $t_0$.
- Transit fractional duration $q \equiv \tau / P$ ($q \ll 1$).
- Transit depth $\delta$.

For each trial period $P$, the algorithm phase-folds the data and minimizes the weighted sum of squared residuals $\chi^2$, maximizing the **Signal Detection Efficiency (SDE)**:

$$\text{SDE} = \frac{\text{Peak Power} - \langle \text{Power} \rangle}{\sigma_{\text{Power}}}$$

A detection threshold $\text{SDE} \ge 7.1$ (the canonical Kepler threshold) filters prospective planetary candidates from white noise.

---

## Cross-Links & Vault Navigation
- Master Map of Content: [[Exoplanetary_Astrophysics_MOC]]
- Previous Lecture: [[15_Planetary_Transits_Geometry_and_Rossiter_McLaughlin]]
- Next Lecture: [[17_Transit_False_Positives_and_Vetting_Protocols]]
- Related Notes: Transit photometry and Mandel-Agol formulation | [[Transit Modeling with batman]]



## Linked References

- [[Mandel-Agol analytical transit light curve model]]
- [[Mean stellar density determination from transit observables]]
- [[Exoplanetary_Astrophysics_MOC]]


