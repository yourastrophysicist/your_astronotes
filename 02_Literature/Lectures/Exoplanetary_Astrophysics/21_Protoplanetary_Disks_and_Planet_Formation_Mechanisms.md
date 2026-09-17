---
layout: "default"
title: "21_Protoplanetary_Disks_and_Planet_Formation_Mechanisms"
---
{% raw %}
# Lesson 21 – Protoplanetary Disks and Planet Formation Mechanisms

*Exoplanetary Astrophysics, Prof. Giampaolo Piotto (Lecture 12/01/2026)*  
*Index: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)*

---

## Protoplanetary Disks as Planet Factories

Planets are the natural by-products of star formation. When a dense molecular cloud core ($M \lesssim 8 M_\odot$) collapses under self-gravity, conservation of angular momentum forces the infalling gas and dust into a rotationally supported circumstellar accretion disk (**Shu et al. 1987**):

```
                        PROTOPLANETARY DISK STRUCTURE
 Gas Inflow                                                             Photoevaporation
 ───────>       Gas Atmosphere (Flared Scale Height H_g ~ r^(9/7))        ▲ ▲ ▲
          ╭────────────────────────────────────────────────────────────╮  │ │ │
         ╱                                                              ╲ │ │ │
        │      Star         Pebbles settle to midplane (H_d << H_g)     │───┘
         ╲                                                              ╱
          ╰────────────────────────────────────────────────────────────╯
        ◄────────────────────── 50 - 200 AU ──────────────────────────►
```

### 1. Canonical Disk Properties
- **Composition**: $99\%$ gas (primarily $H_2$ and $He$) and $1\%$ dust (sub-micron amorphous carbon and crystalline silicates: olivines and pyroxenes).
- **Disk Mass**: Typically $M_{\text{disk}} \sim 0.01 - 0.1 M_\star$ (canonical Minimum Mass Solar Nebula MMSN: $M_{\text{disk}} \sim 0.01 - 0.02 M_\odot$).
- **Gas Dissipation Lifetime**: Observations of young clusters (T Tauri stars in Taurus, Ophiuchus) reveal that disk gas accretes onto the star and photoevaporates within:
  $$\tau_{\text{disk}} \approx 2 - 5\text{ Myr}$$
  This timescale sets a strict upper limit on the formation of gas giant planets.

### 2. Disk Gravitational Instability: The Toomre Criterion
A thin gaseous disk is prone to axisymmetric gravitational fragmentation if self-gravity overcomes thermal pressure and epicyclic shear (**Toomre 1964**):

$$Q \equiv \frac{c_s \Omega_K}{\pi G \Sigma} < 1$$

where:
- $c_s = \sqrt{\frac{k_B T}{\mu m_H}}$: Local isothermal sound speed.
- $\Omega_K = \sqrt{G M_\star / r^3}$: Keplerian angular frequency.
- $\Sigma$: Gas surface density ($\text{g cm}^{-2}$).

If $Q < 1$ and the local cooling timescale satisfies the Gammie criterion $t_{\text{cool}} \lesssim 3 \Omega_K^{-1}$ (typically at $r \gtrsim 50 - 100\text{ AU}$), the disk rapidly fragments into bound, Jupiter-mass gas clumps on dynamical timescales ($t_{\text{dyn}} \sim 10^3\text{ yr}$). This is the **Disk Instability Model** (Boss 1997), relevant for wide-orbit giants (e.g. HR 8799).

---

## The Growth from Dust to Planetesimals

### 1. Gas Drag and the Radial Drift Barrier
In a protoplanetary disk, the gas is partially supported against stellar gravity by an outward radial pressure gradient ($\partial P / \partial r < 0$). Consequently, the gas orbits at slightly **sub-Keplerian** velocity:

$$v_{\text{gas}} = v_K (1 - \eta)^{1/2} \approx v_K (1 - \eta)$$

where the pressure support parameter is:

$$\eta \equiv -\frac{1}{2} \left( \frac{H_g}{r} \right)^2 \frac{\partial \ln P}{\partial \ln r} \sim 10^{-3}$$

Solid particles do not experience pressure gradients and attempt to orbit at the true Keplerian speed $v_K$. They encounter a continuous aerodynamic headwind ($\Delta v = \eta v_K \sim 50\text{ m s}^{-1}$):
- Friction removes angular momentum from the particles, causing them to spiral rapidly inward toward the host star.
- Aerodynamic coupling is parameterized by the dimensionless **Stokes number**:
  $$\text{St} \equiv \Omega_K t_{\text{stop}}$$
- The radial drift velocity is maximized at $\text{St} = 1$:
  $$v_r = -2 \eta v_K \frac{\text{St}}{\text{St}^2 + 1}$$
- For decimeter-to-meter sized bodies at $1\text{ AU}$, $\text{St} \approx 1$. These bodies drift into the star in **less than $100\text{ years}$**! This is the infamous **meter-size radial drift barrier**.

```
                        RADIAL DRIFT AND DRIFT VELOCITY
   |v_r|
     ▲
     │                  Peak Drift at St = 1 (Meter-Sized Boulders)
     │                         ╭───╮
     │                        ╱     ╲   Inward Drift Time:
     │                       ╱       ╲  tau_drift ~ 100 years at 1 AU!
     │                      ╱         ╲
     └─────────────────────┴───────────┴─────────────────────> Stokes Number St
                          10^-3        1.0       10^3
                       (Dust Grains)           (Planetesimals)
```

### 2. Overcoming the Barrier: The Streaming Instability
Because binary collisions between meter-sized boulders produce fragmentation rather than sticking, planetesimals cannot form via simple pairwise coagulation.
- **Streaming Instability (Youdin & Goodman 2005)**: As solid particles drift inward, their drag force accelerates the gas, reducing the headwind for trailing particles. This positive feedback concentrates pebbles into dense, self-gravitating filaments where local dust density exceeds the Roche density:
  $$\rho_{\text{dust}} > \rho_{\text{Roche}} \approx \frac{3.5 M_\star}{r^3}$$
- The filament collapses under its own gravity directly into bound **$10 - 100\text{ km}$ planetesimals**, bypassing the meter-size barrier.

---

## Core Growth: Planetesimal Accretion vs Pebble Accretion

```
                     PLANETESIMAL VS PEBBLE ACCRETION REGIMES
 1. Classical Planetesimal Accretion           2. Pebble Accretion
    Collisions between 10-100 km bodies           Planetesimal accretes mm-cm pebbles
    Gravitational focusing cross section:         Gas drag dissipates pebble energy in Hill sphere:
    sigma = pi R_core^2 (1 + v_esc^2 / v_rel^2)   Accretion cross-section: sigma ~ pi R_Hill^2
    Slow growth: tau_growth ~ 10^7 yr at 5 AU     Rapid growth: tau_growth ~ 10^5 yr at 5 AU!
```

### Pebble Accretion Dynamics (Ormel & Klahr 2010, Lambrechts & Johansen 2012)
When a proto-core reaches $M_{\text{seed}} \sim 10^{-2} - 10^{-1} M_\oplus$, it accretes drifting millimeter-to-centimeter pebbles assisted by gas drag within its **Hill sphere**:

$$R_H = r \left( \frac{M_{\text{core}}}{3 M_\star} \right)^{1/3}$$

- Gas drag slows down pebbles passing through the Hill sphere, capturing them onto the core with an effective cross-section approaching $\sim R_H^2$.
- The accretion rate scales rapidly as $\dot{M} \propto M_{\text{core}}$, enabling a $10 M_\oplus$ core to assemble in **$\sim 10^5\text{ years}$**, well within the gas disk lifetime.
- **Pebble Isolation Mass**: When the core reaches $M_{\text{iso}} \approx 10 - 20 M_\oplus$, its gravitational torque carves a shallow exterior depression and pressure bump in the gas disk ($\partial P / \partial r > 0$). Pebbles are trapped at the pressure maximum, halting further pebble accretion.

---

## Giant Planet Assembly: The Core Accretion Paradigm

The standard model for giant planet formation is **Core Accretion** (**Pollack et al. 1996**):

```
                       THE THREE PHASES OF CORE ACCRETION
 Mass
  ▲
  │                                                     Phase 3: Runaway Gas Accretion
  │                                                     (M_env > M_crit ==> Hydrodynamic Collapse)
  │                                                          ╭────────────────
  │                                                         ╱
  │                     Phase 2: Quasi-Static Envelope    ╱
  │                     Accretion (M_env ~ M_core)      ╱
  │                 ───────────────────────────────────╯
  │                ╱
  │  Phase 1:     ╱
  │  Core Growth ╱
  │  (Pebbles)  ╱
  └────────────┴───────────────────────────────────────┴───────────────────────> Time
             ~ 0.5 Myr                                ~ 2 - 3 Myr (Gas Dissipation)
```

1. **Phase 1 (Core Assembly)**: The solid core grows via pebble/planetesimal accretion until reaching $M_{\text{core}} \approx 10 M_\oplus$.
2. **Phase 2 (Quasi-Static Envelope Accretion)**: The core captures a hydrostatic gas envelope. The accretion rate is controlled by radiative cooling: the envelope contracts only as fast as it can radiate away its gravitational binding energy.
3. **Phase 3 (Runaway Gas Accretion)**:
   When the envelope mass equals the core mass ($M_{\text{env}} \approx M_{\text{core}} \approx M_{\text{crit}} \sim 10 - 15 M_\oplus$), hydrostatic equilibrium breaks down. The envelope contracts faster than radiative cooling, triggering **hydrodynamic runaway accretion** of gas directly from the disk at the Bondi or Hill rate until a gap opens ($M_p \sim 1 - 10 M_J$).

---

## Orbital Migration and Resonances

Planets do not remain at their birth locations; gravitational interactions with the gaseous disk drive large-scale radial migration:

### 1. Type I Migration (Low-Mass Planets: $M_p \lesssim 10 - 20 M_\oplus$)
A sub-Neptune launches spiral density waves at inner and outer Lindblad resonances in the gas disk:
- The outer spiral arm exerts a negative gravitational torque; the inner arm exerts a positive torque.
- In flared disks with negative temperature and surface density gradients, the outer Lindblad torque is stronger ($\Gamma_{\text{outer}} + \Gamma_{\text{inner}} < 0$).
- The planet undergoes rapid **inward migration** on timescales:
  $$\tau_I \approx \frac{1}{\gamma} \left( \frac{M_\star}{M_p} \right) \left( \frac{M_\star}{\Sigma r^2} \right) \left( \frac{H_g}{r} \right)^2 \Omega_K^{-1} \sim 10^5\text{ yr}$$

### 2. Type II Migration (Giant Planets: $M_p \gtrsim 1 M_J$)
A massive planet opens a wide annular gap in the disk when tidal torques exceed viscous torques:

$$\frac{3}{4} \frac{M_p}{M_\star} \left( \frac{r}{H_g} \right)^3 \ge 1 \quad \text{and} \quad \frac{M_p}{M_\star} \ge 3 \pi \alpha \left( \frac{H_g}{r} \right)^2$$

The planet is locked into the gap and migrates inward on the viscous timescale of the accretion disk:

$$\tau_{II} \approx \frac{r^2}{\nu} \approx \frac{r^2}{\alpha c_s H_g} \sim 10^5 - 10^6\text{ yr}$$

### 3. Mean Motion Resonance Capture and Dynamical Scattering
- **Resonant Trapping**: Differential inward migration of multiple planets leads to convergent orbits, locking planets into orbital resonance chains (e.g., TRAPPIST-1, Kepler-223).
- **Planet-Planet Scattering**: Once the gas disk dissipates, gravitational damping vanishes. Closely packed systems undergo chaotic orbital crossing: close encounters eject planets (producing free-floating planets), collide bodies, and scatter surviving planets onto eccentric, inclined orbits.

---

## Cross-Links & Vault Navigation
- Master Map of Content: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- Previous Lecture: [20_Exoplanet_Atmospheres_and_Transmission_Spectroscopy](./20_Exoplanet_Atmospheres_and_Transmission_Spectroscopy.html)
- Next Lecture: [22_Case_Study_K2_19_System_and_Atmospheric_Dynamics](./22_Case_Study_K2_19_System_and_Atmospheric_Dynamics.html)
- Related Notes: Planetary system dynamics and resonance | Mass-radius diagram and interior models
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./20_Exoplanet_Atmospheres_and_Transmission_Spectroscopy.html" class="backlink-item">20_Exoplanet_Atmospheres_and_Transmission_Spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="./22_Case_Study_K2_19_System_and_Atmospheric_Dynamics.html" class="backlink-item">22_Case_Study_K2_19_System_and_Atmospheric_Dynamics</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Pebble%20accretion%20and%20planetary%20orbital%20migration.html" class="backlink-item">Pebble accretion and planetary orbital migration</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Protoplanetary%20disk%20evolution%20and%20core%20accretion%20paradigm.html" class="backlink-item">Protoplanetary disk evolution and core accretion paradigm</a></li>
  </ul>
</div>
