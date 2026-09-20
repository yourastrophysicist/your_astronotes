---
layout: "default"
title: "04_Small_Planets_and_Host_Star_Correlations"
---
# Lesson 04 – Small Planets and Host Star Correlations

*Exoplanetary Astrophysics, Prof. Giampaolo Piotto (Lecture 20/10/2025)*  
*Index: [[Exoplanetary_Astrophysics_MOC]]*

---

## The Ubiquity of Small Planets

Doppler surveys provided the initial detection of close-in sub-Neptune planets, and the Kepler mission established that small planets ($R_p < 4 R_\oplus$) are the dominant outcome of planet formation around main-sequence stars:
- **$\approx 50\%$ of Sun-like (FGK) stars** host at least one planet with an orbital period $P < 100\text{ days}$ and a radius between that of Earth and Neptune ($1 R_\oplus < R_p < 4 R_\oplus$).
- For planets with periods $P < 50\text{ days}$ and minimum masses $3 M_\oplus \le M_p \sin i \le 30 M_\oplus$, independent Doppler surveys found occurrence rates of:
  - $15 \pm 5\%$ (Howard et al. 2010; Keck/HIRES)
  - $27 \pm 5\%$ (Mayor et al. 2011; HARPS)
- Analysis of Kepler photometric data for the same period window and radii $2 R_\oplus \le R_p \le 4 R_\oplus$ yielded an occurrence of $13.0 \pm 0.8\%$ (Howard et al. 2012).

Within this parameter space, occurrence increases steeply toward smaller sizes following a power-law distribution.

---

## The Fulton Radius Valley (Photoevaporation Gap)

High-precision stellar parameters from the California-Kepler Survey (CKS; Fulton et al. 2017, Petigura et al. 2017) and asteroseismology (Van Eylen et al. 2018) revealed a bimodal radius distribution for close-in planets ($P < 100\text{ d}$):

```
                   THE FULTON Bimodal RADIUS DISTRIBUTION
 Number of
 Planets
    ▲
    │         Super-Earths                      Sub-Neptunes
    │           (Peak 1)                          (Peak 2)
    │           ┌──────┐                          ┌──────┐
    │          ┌┘      └┐                        ┌┘      └┐
    │          │ Bare   │     RADIUS VALLEY      │ H/He   │
    │          │ Rocky  │     (Fulton Gap)       │ Envelope
    │          │ Cores  │        ┌────┐          │ ~1-3%  │
    │         ┌┘        └┐      ┌┘    └┐        ┌┘        └┐
    │        ┌┘          └──────┘      └────────┘          └───
    └────────┴───────────────┴─────────────┴───────────────┴────> Radius (R_Earth)
            1.0             1.3           1.75            2.4
```

### Quantitative Characteristics
1. **Super-Earth Peak**: Centered at $R_p \approx 1.3 - 1.5 R_\oplus$. These are dense, bare rocky cores composed of iron/magnesium silicates.
2. **Radius Valley**: A pronounced deficit in planet occurrence centered at:
   $$R_{\text{valley}} \approx 1.75 - 1.85 R_\oplus$$
3. **Sub-Neptune Peak**: Centered at $R_p \approx 2.4 - 2.6 R_\oplus$. These bodies possess rocky cores identical in mass to super-Earths, but are enveloped by a low-density primordial hydrogen/helium ($H_2/He$) gas envelope contributing only $1 - 3\%$ of total planetary mass, which doubles the apparent transit radius.

### Competing Physical Mechanisms
The valley represents the transition where an envelope is either completely lost or retained:

1. **Photoevaporation Model (Owen & Wu 2013, Lopez & Fortney 2013)**:
   - High-energy extreme ultraviolet and X-ray (XUV) flux from the young active host star heats the upper planetary atmosphere, driving hydrodynamic transonic hydrodynamic escape (photoevaporation):
     $$\dot{M}_{\text{loss}} \approx \frac{\eta \, \pi R_{\text{XUV}}^2 F_{\text{XUV}}}{4 \pi G M_{\text{core}} / R_{\text{core}}}$$
   - Cores with masses $M_{\text{core}} \lesssim 5-7 M_\oplus$ lose their entire envelope within the first $100\text{ Myr}$, contracting down to the bare rocky radius ($R_p \sim 1.3 R_\oplus$).
   - Cores with masses $M_{\text{core}} \gtrsim 8-10 M_\oplus$ possess sufficient surface gravity to retain their primordial envelopes, remaining sub-Neptunes ($R_p \sim 2.4 R_\oplus$).
   - The predicted valley slope in period-radius space is:
     $$\frac{d\log R_{\text{valley}}}{d\log P} \approx -0.11 \text{ to } -0.15$$

2. **Core-Powered Mass Loss (Ginzburg et al. 2018, Gupta & Schlichting 2019)**:
   - Does not require external stellar XUV radiation. Instead, the residual internal cooling luminosity of the hot planetary core ($E_{\text{therm}} \sim C_v M_{\text{core}} T_{\text{core}}$) heats the base of the envelope, driving steady mass loss over Gyr timescales.
   - Predicts a slightly flatter slope: $d\log R_{\text{valley}} / d\log P \approx -0.09$.

---

## The Hot Neptune Desert

In the period-radius and period-mass diagrams, a stark triangular void exists at short orbital periods ($P \lesssim 3-5\text{ days}$) between Earth-sized rocky planets and Jovian gas giants ($R_p \sim 2 - 6 R_\oplus, M_p \sim 10 - 100 M_\oplus$):

```
                        THE HOT NEPTUNE DESERT
   log R_p
     ▲
     │  Hot Jupiters
     │  [Gas Giants] ─────────────────────────────────────────
     │
     │     ╲
     │      ╲      HOT NEPTUNE DESERT
     │       ╲     (Severe Deficit of Planets)
     │        ╲
     │  ───────┴──────────────────────────────────────────────
     │  Super-Earths / Ultra-short-period Rocky Cores
     └────────────────────────────────────────────────────────> log P
        0.5 d        2 d         5 d         10 d
```

### Physical Drivers of the Desert
1. **Atmospheric Stripping**: Intermediate-mass planets ($10-30 M_\oplus$) have low gravitational potential wells relative to their envelope scale heights; under stellar irradiation ($\sim 10^3 S_\oplus$), their atmospheres are entirely stripped, reducing them to bare cores or destroying them.
2. **High-Eccentricity Tidal Migration**: The rare planets found within or at the boundary of the desert (e.g., LTT 9779 b) are strongly correlated with metal-rich host stars and lack close coplanar companions, indicating they arrived via late dynamical scattering and tidal circularization rather than smooth disk migration (Dong et al. 2017).

---

## Host Star Dependencies: Metallicity and Spectral Type

```
Correlation with Host Star Metallicity [Fe/H]:
Giant Planet Occurrence:                  Small Planet Occurrence:
P(Giant) ~ 0.03 * 10^(2.0 * [Fe/H])      P(Small) ~ Constant across [Fe/H]
Occurrence                               Occurrence
▲                                        ▲
│                   / Steep rise         │  ───────────────────────── Flat
│                  /                     │
│                 /                      │
│     ───────────┘                       │
└───────────────────────────> [Fe/H]     └───────────────────────────> [Fe/H]
     -0.5     0.0     +0.5                    -0.5     0.0     +0.5
```

### 1. The Metallicity Correlation
- **Giant Planets (Fischer & Valenti 2005, Santos et al. 2004)**:
  Giant planet occurrence exhibits a steep, power-law dependence on host star iron abundance $[\text{Fe/H}]$:
  $$\mathcal{P}_{\text{giant}} = C \cdot 10^{\alpha [\text{Fe/H}]}, \quad \alpha \approx 2.0 \pm 0.2$$
  Stars with $[\text{Fe/H}] \approx +0.3$ have an occurrence of giant planets $\gtrsim 25-30\%$, whereas metal-poor stars ($[\text{Fe/H}] \le -0.5$) have $\mathcal{P}_{\text{giant}} < 2\%$. This provides decisive empirical validation for the **core accretion model**: metal-rich protoplanetary disks contain higher dust surface densities, rapidly building the critical $10 M_\oplus$ core before gas dispersal.
- **Small Planets (Buchhave et al. 2012, Petigura et al. 2018)**:
  In sharp contrast, the occurrence rate of super-Earths and sub-Neptunes is **invariant** with host star metallicity across $-0.4 \le [\text{Fe/H}] \le +0.4$. Small rocky cores can form even in metal-poor protoplanetary disks.

### 2. Spectral Type and Stellar Mass
Comparing M dwarfs ($M_\star \sim 0.1 - 0.5 M_\odot$) with Sun-like FGK dwarfs ($M_\star \sim 0.8 - 1.2 M_\odot$):
- **Giant Planets**: Rare around M dwarfs. Gas giants ($M_p > 0.4 M_J, P < 5.5\text{ yr}$) are **$3$ to $10$ times less common** around M dwarfs than around FGK stars (Cumming et al. 2008, Bonfils et al. 2013). Lower disk mass and longer dynamical orbital timescales hinder core growth prior to disk dispersal.
- **Small Planets**: Abundant around M dwarfs. Small planets ($1 R_\oplus < R_p < 4 R_\oplus, P < 100\text{ d}$) are **$2$ to $3$ times more frequent** around M dwarfs than around Sun-like stars (Howard et al. 2012, Mulders et al. 2015). On average, an M dwarf hosts $\approx 2.2 \pm 0.3$ planets per star, predominantly in tightly packed, coplanar multi-planet configurations (e.g., TRAPPIST-1).

---

## Habitable Zone Demographics: The Parameter $\eta_\oplus$

The occurrence rate of Earth-sized planets orbiting within the circumstellar habitable zone of Sun-like stars is formally designated $\eta_\oplus$ (or $\Gamma_\oplus$):

$$\eta_\oplus = \int_{S_{\text{outer}}}^{S_{\text{inner}}} d\ln S \int_{\ln R_{\text{min}}}^{\ln R_{\text{max}}} d\ln R_p \, \frac{d^2 n}{d\ln S \, d\ln R_p}$$

where:
- $R_p \in [0.8, 1.25] R_\oplus$ (purely rocky surface).
- $S$ is the stellar bolometric insolation flux, bounded by the Runaway Greenhouse limit (inner boundary: $S_{\text{inner}} \approx 1.05-1.10 S_\oplus$) and the Maximum Greenhouse limit (outer boundary: $S_{\text{outer}} \approx 0.32-0.36 S_\oplus$; Kopparapu et al. 2013).

Because true Earth-Sun analogs ($P \sim 365\text{ d}, R_p \sim 1 R_\oplus$ around a G2V dwarf) lie at the detection threshold of Kepler, direct counting is impossible. Extrapolations yield values ranging from $\eta_\oplus \approx 0.1$ to $0.4$ for Sun-like stars, and $\eta_\oplus \approx 0.3 - 0.5$ for M dwarfs.

---

## Cross-Links & Vault Navigation
- Master Map of Content: [[Exoplanetary_Astrophysics_MOC]]
- Previous Lecture: [[03_Demographics_and_Survey_Completeness]]
- Next Lecture: [[05_Gravitational_Microlensing_Principles_and_Light_Curves]]
- Related Notes: Mass-radius diagram and interior models | Exoplanetary atmospheres and transmission spectroscopy



## Linked References

- [[Small exoplanets and the Fulton radius valley]]
- [[Exoplanetary_Astrophysics_MOC]]


