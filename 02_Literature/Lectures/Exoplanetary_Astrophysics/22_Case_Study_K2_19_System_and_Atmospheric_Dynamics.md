---
layout: "default"
title: "22_Case_Study_K2_19_System_and_Atmospheric_Dynamics"
---
# Lesson 22 – Case Study: The Resonant K2-19 System and Dynamics

*Exoplanetary Astrophysics, Seminar by A.M. Rossi (Based on Almenara et al. 2025)*  
*Index: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)*

---

## The K2-19 System Architecture

The K2-19 planetary system represents a benchmark laboratory for studying multi-planet resonance dynamics, non-zero orbital eccentricity excitation, and photodynamical TTV modeling:

```
                            THE K2-19 SYSTEM ARCHITECTURE
                                     K2-19 (G/K Dwarf)
                                            │
               ┌────────────────────────────┼────────────────────────────┐
               ▼                            ▼                            ▼
          Planet d                     Planet b                     Planet c
       Ultra-Short Period           Warm Sub-Saturn              Warm Neptune
       P ~ 2.5 days                 P ~ 7.92 days                P ~ 11.91 days
       R_p ~ 1.1 R_Earth            R_p ~ 7.0 R_Earth            R_p ~ 4.1 R_Earth
       (Non-resonant)               ◄────── 3:2 Mean Motion Resonance ──────►
                                    (Super-Period P_TTV ~ 2,700 days (~7.4 yr))
```

### Key System Characteristics (Almenara et al. 2025, Petigura et al. 2020)
1. **The Resonant Pair (b & c)**:
   - Two outer planets near a first-order **$3:2$ Mean Motion Resonance**:
     $$\frac{P_c}{P_b} = \frac{11.91}{7.92} \approx 1.5038 \approx \frac{3}{2}$$
   - Large-amplitude Transit Timing Variations (TTVs) spanning dozens of minutes.
   - Significant, non-zero orbital eccentricities: $e_b \approx 0.20, e_c \approx 0.20$.
2. **Inner Planet (d)**:
   - A transiting terrestrial planet on an ultra-short orbit ($P_d \approx 2.5\text{ days}, R_d \approx 1.1 R_\oplus$), dynamically decoupled from the outer resonant pair.

---

## Observational Reductions and Stellar Characterization

### 1. Photometric Detrending
- The K2 space mission suffered from degraded pointing precision due to the loss of two reaction wheels, causing stars to drift across pixels on 6-hour thruster roll timescales.
- Data reduction was conducted using the **EVEREST** pipeline (Luger et al. 2016, 2018), which applies Pixel Level Decorrelation (PLD) and Gaussian Process (GP) regression to separate spacecraft pointing systematics from astrophysical transit shapes.

### 2. Spectral Energy Distribution (SED) and Stellar Modeling
To break degeneracies in transit modeling, the host star's fundamental parameters were constrained via a joint SED fit:
- **Photometry**: Multi-wavelength baseline combining Gaia DR3 ($G, G_{\text{BP}}, G_{\text{RP}}$), 2MASS ($J, H, K_s$), and WISE ($W1, W2$).
- **Atmospheric Models**: Synthetic grids from **PHOENIX / BT-Settl** (Allard et al. 2012).
- **Stellar Evolutionary Isochrones**: Joint modeling using Dartmouth (Dotter et al. 2008) and PARSEC (Chen et al. 2014) isochrones under equiprobability.
- **Priors**: Informative priors derived from high-resolution spectroscopy on effective temperature $T_{\text{eff}}$, surface gravity $\log g$, and metallicity $[\text{Fe/H}]$, paired with Gaia parallax distance $d$.

---

## Photodynamical Analysis and Resonance Inversion

### 1. The Modeling Architecture: `juliet` + `batman` + `celerite`
The multi-decade transit light curve was modeled using the Bayesian framework **juliet** (Espinoza et al. 2019):
- **Transit Engine**: Analytical transit shapes computed via **batman** (Kreidberg 2015), implementing the Mandel & Agol (2002) equations.
- **Correlated Noise**: Instrumental and stellar red noise modeled via **celerite** (Foreman-Mackey et al. 2017) using a stochastically driven damped harmonic oscillator (SHO) covariance kernel:
  $$k_{\text{SHO}}(\tau) = S_0 \omega_0 Q \exp\left( -\frac{\omega_0 \tau}{2Q} \right) \left[ \cosh(\eta \omega_0 \tau) + \frac{1}{2\eta Q} \sinh(\eta \omega_0 \tau) \right]$$
- **Model Comparison**: Evidence computation disfavored additional hypothesized resonant companions (e.g. candidate e in a 5:3 resonance with c was rejected with a Bayes factor $\Delta \ln B = 5.6$).

```
                         THE DUAL-PERIODICITY TTV DYNAMICS
 Timing Residual
 (O - C)
    ▲
    │         ╭───────────────────╮
    │        ╱   /\   /\   /\      ╲       /\   /\   /\
    │  ─────┼───/──╲─/──╲─/──╲──────┼─────/──╲─/──╲─/──╲────── Secular Baseline
    │        ╲ /    V    V    V      ╱   /    V    V    V
    │         ╰───────────────────╯
    └───────────────────┬───────────────────────────────────> Epoch / Time
         <────────── P_TTV ~ 2700 d ─────────>
         (Modulated by Long-Term Secular Cycle P_sec ~ 165 yr)
```

### 2. Dual Dynamical Timescales
The TTV time-series exhibits two distinct dynamical frequencies:
1. **Resonant Super-Period ($P_{\text{TTV}}$)**:
   The near-resonance $3:2$ interaction drives a sinusoidal timing oscillation with period:
   $$P_{\text{TTV}} = \frac{1}{\left\lvert \frac{3}{P_c} - \frac{2}{P_b} \right\rvert} \approx 2,700\text{ days} \quad (\sim 7.4\text{ years})$$
2. **Secular Precession Period ($P_{\text{sec}}$)**:
   Long-term exchange of angular momentum between the eccentric orbits drives a secular apsidal precession cycle with a timescale of:
   $$P_{\text{sec}} \approx 165\text{ years}$$
   Dynamical orbital integration shows that the resonant angle $\theta = 3\lambda_c - 2\lambda_b - \varpi$ librates around $0^\circ$ ($53\%$ probability) or circulates ($41\%$), confirming the system is locked in the resonant zone.

---

## Interior Structure Modeling: The GASTLI Framework

With masses determined via photodynamical TTV inversion and radii measured from transit depths, planetary internal compositions were derived using **GASTLI** (Gas Giant and Solid Planet Interior Modeling; Acuña et al. 2021) coupled with the MCMC sampler **emcee** (Foreman-Mackey et al. 2013):

```
                        K2-19b INTERNAL STRUCTURE MODEL
                 H/He + Volatile H2O Gaseous Envelope (~ 5-10% mass)
                         ╭──────────────────────────╮
                        ╱   High-Pressure H2O Ice    ╲
                       │    ╭────────────────────╮    │
                       │   ╱  Silicate Rock      ╱    │
                       │  │   ╭────────────────╮  │   │
                       │  │   │ Iron-Nickel    │  │   │
                       │  │   │ Core (1:1 with │  │   │
                       │  │   │ silicates)     │  │   │
                       │  │   ╰────────────────╯  │   │
                       │   ╲                     ╱    │
                       │    ╰────────────────────╯    │
                        ╲                            ╱
                         ╰──────────────────────────╯
```

- **K2-19b Bulk Composition**:
  - Requires a differentiated refractory core consisting of a $1:1$ ratio of iron/silicate rock and high-pressure water ice phases.
  - The inflated radius ($R_p \approx 7 R_\oplus$) requires an extended, low-density outer envelope consisting of primordial $H_2/He$ and volatile water vapor accounting for $\approx 5 - 10\%$ of the total planetary mass.

---

## Astrophysical Implications: The Eccentricity Paradox

Classical planet formation theory predicts that disk-driven convergent migration traps planets into Mean Motion Resonances while strong hydrodynamic gas drag circularizes their orbits ($e \to 0$).

The persistence of moderate eccentricities ($e \approx 0.20$) in the resonant K2-19 system presents an architectural paradox, requiring one of three dynamical mechanisms:
1. **Resonance Over-Stability**: Resonant interaction between the two planets within the gaseous disk drove eccentricities higher via over-stability before disk dissipation (**Goldreich & Schlichting 2014**).
2. **Post-Gas Dynamical Scattering**: A third outer planet was ejected from the system, gravitationally exciting the eccentricities of planets b and c while preserving their resonant lock.
3. **Magnetospheric Rebound**: Interactions with the truncated inner edge of the magnetized protoplanetary disk halted inward migration and pumped orbital eccentricities.

---

## Cross-Links & Vault Navigation
- Master Map of Content: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- Previous Lecture: [21_Protoplanetary_Disks_and_Planet_Formation_Mechanisms](./21_Protoplanetary_Disks_and_Planet_Formation_Mechanisms.html)
- Related Notes: [Transit Modeling with batman](../../../03_Zettel/Computational/Transit%20Modeling%20with%20batman.html) | Joint Transit Modeling and MCMC Analysis

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Transit%20timing%20variations%20and%20resonant%20multi-planet%20dynamics.html" class="backlink-item">Transit timing variations and resonant multi-planet dynamics</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
  </ul>
</div>

