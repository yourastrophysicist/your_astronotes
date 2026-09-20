---
layout: "default"
title: "Alpha-Fe enhancement"
---
# Alpha-Fe Enhancement

Parent [[Astrophysics_of_Galaxies_MOC]] · [[Stellar nucleosynthesis]] · Early-type galaxies

## 1. Physical Definition and Chemical Notation

The alpha-to-iron abundance ratio measures the relative abundance of alpha-elements compared to iron-peak elements in stellar photospheres or interstellar gas, normalized to the solar composition.

The standard spectroscopic bracket notation is defined as
$$[\alpha/\text{Fe}] = \log_{10}\left(\frac{N_\alpha}{N_{\text{Fe}}}\right)_* - \log_{10}\left(\frac{N_\alpha}{N_{\text{Fe}}}\right)_\odot$$

Here $N_\alpha$ and $N_{\text{Fe}}$ represent number densities of atoms. The index $\odot$ denotes the solar photospheric abundance. In observational stellar population work, magnesium ($\text{Mg}$) is commonly used as the observational proxy for the alpha-group, so that $[\alpha/\text{Fe}] \approx [\text{Mg}/\text{Fe}]$.

The primary alpha-elements include oxygen ($^{16}\text{O}$), neon ($^{20}\text{Ne}$), magnesium ($^{24}\text{Mg}$), silicon ($^{28}\text{Si}$), sulfur ($^{32}\text{S}$), argon ($^{36}\text{Ar}$), calcium ($^{40}\text{Ca}$), and titanium ($^{48}\text{Ti}$). These isotopes possess nuclei with integer multiples of the helium-4 nucleus (alpha-particle, $A = 4k$, $Z = 2k$).

## 2. Nucleosynthetic Channels and Astrophysical Clocks

The $[\alpha/\text{Fe}]$ ratio operates as a cosmic clock because the two element groups originate from two fundamentally distinct stellar evolutionary channels operating on radically different physical timescales.

### Channel 1. Core-Collapse Supernovae (Type II, Type Ib, Type Ic)

Core-collapse supernovae originate from massive stars with zero-age main sequence masses $M \ge 8 M_\odot$.
- Stellar lifetimes are dictated by nuclear fuel exhaustion in massive cores. For $M \sim 10 - 50 M_\odot$, the lifetime is $\tau_{\text{CCSN}} \approx 3 \times 10^6 \text{ to } 3 \times 10^7 \text{ yr}$ (typically $10 \text{ Myr}$).
- Burning processes - Hydrostatic carbon, neon, oxygen, and silicon burning shells yield abundant alpha-elements. Explosive shock nucleosynthesis during iron core collapse synthesizes additional alpha-elements.
- Elemental yields - A single core-collapse event yields approximately $1 - 3 M_\odot$ of oxygen and magnesium, but only a modest amount of iron-peak elements ($y_{\text{Fe}}^{\text{CCSN}} \approx 0.05 - 0.08 M_\odot$ from radioactive $^{56}\text{Ni}$).
- Resulting abundance ratio - Pure core-collapse supernova ejecta possess an enhanced ratio $[\alpha/\text{Fe}]_{\text{CCSN}} \approx +0.35 \text{ to } +0.50 \text{ dex}$.

### Channel 2. Thermonuclear Supernovae (Type Ia)

Type Ia supernovae originate from carbon-oxygen white dwarfs in binary systems that approach or exceed the Chandrasekhar limiting mass $M_{\text{Ch}} \approx 1.4 M_\odot$ through mass accretion (single-degenerate channel) or direct white dwarf mergers (double-degenerate channel).
- Timescale - Governed by the binary orbital decay via gravitational radiation or the main-sequence lifetime of the lower-mass secondary star ($M_2 \sim 1 - 2 M_\odot$).
- Delay time distribution (DTD) - The distribution of delay times between star formation and explosion is well characterized empirically and theoretically by a power law $\Psi(t) \propto t^{-1}$ commencing at $t_{\text{min}} \sim 40 - 100 \text{ Myr}$ and extending beyond $10 \text{ Gyr}$, with a characteristic median delay timescale $\tau_{\text{Ia}} \approx 1 \text{ Gyr}$.
- Burning processes - Complete explosive thermonuclear deflagration or detonation converts the carbon-oxygen core primarily into iron-peak elements via the silicon-burning decay chain $^{56}\text{Ni} \to {}^{56}\text{Co} \to {}^{56}\text{Fe}$.
- Elemental yields - A single Type Ia supernova ejects approximately $y_{\text{Fe}}^{\text{Ia}} \approx 0.6 - 0.8 M_\odot$ of iron, with negligible alpha-elements (oxygen $\sim 0.05 M_\odot$, magnesium $\sim 0.01 M_\odot$).
- Resulting abundance ratio - Pure Type Ia supernova ejecta yield $[\alpha/\text{Fe}]_{\text{Ia}} \approx -1.5 \text{ to } -2.0 \text{ dex}$.

## 3. Mathematical Derivation of Chemical Evolution and the Knee

To understand how $[\alpha/\text{Fe}]$ quantitatively encodes the starburst duration $\Delta t_{\text{SF}}$, we formulate the differential equations of chemical enrichment in a closed box interstellar medium.

Let $M_g(t)$ be the gas mass in the star-forming reservoir and let $\psi(t)$ denote the star formation rate.
Let $Z_i(t) = M_i(t) / M_g(t)$ denote the mass fraction of element $i$, where $i \in \{\alpha, \text{Fe}\}$.

Under the Instantaneous Recycling Approximation (IRA) for massive stars, stars with lifetimes $\tau \ll t$ eject their enriched nucleosynthetic yields instantaneously back into the gas. This approximation is highly valid for core-collapse supernovae whose progenitor lifetimes ($< 30 \text{ Myr}$) are much shorter than galactic dynamical or enrichment times.

The instantaneous recycling yield $y_i^{\text{CCSN}}$ represents the mass of newly synthesized element $i$ returned per unit mass of long-lived stars formed.

For iron, however, the IRA breaks down because Type Ia supernovae explode with an extended delay time distribution $\Psi(\tau)$. The production rate of iron must account for both channels.

The time evolution of the gaseous mass of alpha-elements is governed by
$$\frac{d M_\alpha}{dt} = - Z_\alpha(t) \psi(t) + y_\alpha^{\text{CCSN}} (1 - R) \psi(t)$$
where $R$ is the stellar return fraction (the fraction of mass formed in stars that is returned to the interstellar medium).

The time evolution of the gaseous mass of iron is governed by
$$\frac{d M_{\text{Fe}}}{dt} = - Z_{\text{Fe}}(t) \psi(t) + y_{\text{Fe}}^{\text{CCSN}} (1 - R) \psi(t) + \int_0^t \psi(t - \tau) y_{\text{Fe}}^{\text{Ia}} \Psi(\tau) d\tau$$

Let us examine two asymptotic regimes.

### Regime A. Rapid Starburst ($t < \tau_{\text{Ia}} \approx 1 \text{ Gyr}$)

Before the onset of significant Type Ia explosions, the integral over $\Psi(\tau)$ is virtually zero. The ratio of enrichment rates is determined strictly by core-collapse supernovae
$$\frac{d M_\alpha / dt}{d M_{\text{Fe}} / dt} = \frac{y_\alpha^{\text{CCSN}}}{y_{\text{Fe}}^{\text{CCSN}}}$$

Integrating from $t = 0$ with primordial initial conditions $Z_\alpha(0) = Z_{\text{Fe}}(0) = 0$, the mass ratio in the gas is constant
$$\frac{Z_\alpha(t)}{Z_{\text{Fe}}(t)} = \frac{y_\alpha^{\text{CCSN}}}{y_{\text{Fe}}^{\text{CCSN}}} = \text{constant} > \left(\frac{Z_\alpha}{Z_{\text{Fe}}}\right)_\odot$$

Converting this to bracket notation yields the core-collapse plateau
$$[\alpha/\text{Fe}]_{\text{plateau}} \approx +0.35 \text{ to } +0.45 \text{ dex}$$

Stars born during this initial epoch inherit this constant supersolar $[\alpha/\text{Fe}]$.

### Regime B. Extended Star Formation ($t > \tau_{\text{Ia}} \approx 1 \text{ Gyr}$)

When the cosmic time exceeds the Type Ia threshold, thermonuclear supernovae begin detonating in large numbers. The rate of iron injection into the interstellar medium increases sharply
$$\frac{d M_{\text{Fe}}}{dt} = y_{\text{Fe}}^{\text{CCSN}} (1 - R) \psi(t) + \mathcal{R}_{\text{Ia}}(t) y_{\text{Fe}}^{\text{Ia}}$$
where $\mathcal{R}_{\text{Ia}}(t)$ is the Type Ia supernova explosion rate.

Because Type Ia supernovae produce enormous iron mass without matching alpha yields, the ratio of production rates shifts dramatically
$$\frac{d M_\alpha / dt}{d M_{\text{Fe}} / dt} \ll \frac{y_\alpha^{\text{CCSN}}}{y_{\text{Fe}}^{\text{CCSN}}}$$

Consequently, the abundance ratio in the gas begins to decline monotonically
$$\frac{d}{dt} \left(\frac{Z_\alpha}{Z_{\text{Fe}}}\right) < 0 \implies \frac{d [\alpha/\text{Fe}]}{d [\text{Fe}/\text{H}]} < 0$$

This abrupt change in slope generates the classical knee in the $[\alpha/\text{Fe}]$ versus $[\text{Fe}/\text{H}]$ plane. The position of the knee, $[\text{Fe}/\text{H}]_{\text{knee}}$, directly reveals the metallicity reached by the galaxy when Type Ia supernovae began contributing significantly, which occurs precisely at $t \approx \tau_{\text{Ia}} \sim 1 \text{ Gyr}$.

If the star formation rate $\psi(t)$ was high during the first gigayear, the galaxy reaches a high metallicity before the knee appears. If the star formation rate was low, the knee occurs at low $[\text{Fe}/\text{H}]$.

### Quantitative Formulation of Star Formation Duration

Following Thomas, Maraston and Bender (2003, 2005), the mean $[\alpha/\text{Fe}]$ of a composite stellar population formed over a duration $\Delta t_{\text{SF}}$ can be approximated analytically by integrating the yields over the star formation history $\psi(t)$
$$[\alpha/\text{Fe}] \approx [\alpha/\text{Fe}]_{\text{CCSN}} - \log_{10}\left(1 + A \frac{\int_0^{\Delta t_{\text{SF}}} \int_0^t \psi(t - \tau) \Psi(\tau) d\tau dt}{\int_0^{\Delta t_{\text{SF}}} \psi(t) dt}\right)$$
where $A$ is a normalization constant proportional to the ratio of integrated yields $y_{\text{Fe}}^{\text{Ia}} / y_{\text{Fe}}^{\text{CCSN}}$.

For a top-hat star formation history of duration $\Delta t_{\text{SF}}$, this formula yields the following direct physical mapping
- If $\Delta t_{\text{SF}} \lesssim 0.4 \text{ Gyr}$, then $[\alpha/\text{Fe}] \approx +0.35 \text{ dex}$.
- If $\Delta t_{\text{SF}} \approx 1.0 \text{ Gyr}$, then $[\alpha/\text{Fe}] \approx +0.20 \text{ dex}$.
- If $\Delta t_{\text{SF}} \gtrsim 3.0 \text{ Gyr}$, then $[\alpha/\text{Fe}] \approx 0.00 \text{ dex}$ (solar).

## 4. Downsizing in Early-Type Galaxies

Observational spectroscopy of early-type galaxies (ellipticals and S0s) reveals that $[\alpha/\text{Fe}]$ is not constant, but correlates strongly with galaxy mass and central stellar velocity dispersion $\sigma$.

### The Thomas et al. (2005) Scaling Law

Using Lick absorption line indices ($\text{Mg}\,b$, $\text{Fe}5270$, $\text{Fe}5335$) calibrated with stellar population synthesis models taking into account variable element abundance ratios, Thomas et al. (2005) established the empirical scaling
$$[\alpha/\text{Fe}] \approx 0.32 \log_{10}\left(\frac{\sigma}{100 \text{ km s}^{-1}}\right) + 0.18$$

For giant elliptical galaxies with central velocity dispersions $\sigma \approx 300 \text{ km s}^{-1}$
$$[\alpha/\text{Fe}] \approx 0.32 \log_{10}(3) + 0.18 \approx 0.32(0.477) + 0.18 \approx +0.33 \text{ dex}$$

For intermediate-mass ellipticals with $\sigma \approx 200 \text{ km s}^{-1}$
$$[\alpha/\text{Fe}] \approx 0.32 \log_{10}(2) + 0.18 \approx 0.32(0.301) + 0.18 \approx +0.28 \text{ dex}$$

For low-mass elliptical and dwarf galaxies with $\sigma \approx 70 \text{ km s}^{-1}$
$$[\alpha/\text{Fe}] \approx 0.32 \log_{10}(0.7) + 0.18 \approx 0.32(-0.155) + 0.18 \approx +0.13 \text{ dex}$$

### Physical Meaning. The Phenomenon of Downsizing

This correlation establishes the astrophysical concept of downsizing, first highlighted by Cowie et al. (1996) and confirmed in fossil stellar populations by Thomas et al. (2005) and Nelan et al. (2005)
- Massive elliptical galaxies ($\sigma \ge 250 \text{ km s}^{-1}$, stellar masses $M_* \gtrsim 10^{11} M_\odot$) formed their stars in an intense, rapid starburst lasting $\Delta t_{\text{SF}} < 0.5 - 0.8 \text{ Gyr}$ at high redshift ($z \gtrsim 2 - 3$). Star formation was terminated abruptly, likely by energetic feedback from supermassive black holes (AGN feedback) or powerful galactic winds, before Type Ia supernovae could pollute the ISM.
- Lower-mass galaxies formed their stars over extended periods ($\Delta t_{\text{SF}} \sim 2 - 5 \text{ Gyr}$), allowing continuous Type Ia iron enrichment to dilute the initial alpha-element enhancement down toward the solar ratio.

This result stands as a crucial test for galaxy formation models. In naive hierarchical clustering without feedback, small objects form first and large objects form last. The chemical clock demonstrates that while dark matter halos assemble hierarchically, the star formation in massive spheroids occurred earlier and faster than in small galaxies.

## 5. Blackboard Observational Graphs and Sketches

### Graph 1. The Chemical Evolution Knee in the $[\alpha/\text{Fe}]$ versus $[\text{Fe}/\text{H}]$ Plane

```
  [alpha/Fe] (dex)
     ^
+0.5 |  ==============================\
     |  Core-Collapse Plateau          \
+0.3 |  [alpha/Fe] ~ +0.4               \  Type Ia supernovae begin contributing
     |                                   \  at t ~ 1 Gyr (the knee)
+0.1 |                                    \
 0.0 |  . . . . . . . . . . . . . . . . . .\ . . . . . . . . . . Solar ratio
     |                                      \
-0.2 |                                       \======> Extended star formation
     |                                                (MW thin disk, spirals)
     +============================================================>
      -3.0        -2.0        -1.0         0.0        +0.5   [Fe/H] (dex)
                                 ^
                                 |
                         [Fe/H]_knee ~ -1.0 (Milky Way)
                         [Fe/H]_knee ~ +0.0 (Massive Ellipticals)
```

Physical annotations for oral exam presentation
- Plateau at $[\alpha/\text{Fe}] \approx +0.4$ - Pure core-collapse supernova enrichment ($t < 1 \text{ Gyr}$).
- The Knee - Onset of substantial Type Ia supernova enrichment at cosmic time $t \sim \tau_{\text{Ia}} \sim 1 \text{ Gyr}$.
- The horizontal shift of the knee - In massive ellipticals where star formation is intense, the gas reaches solar metallicity $[\text{Fe}/\text{H}] \sim 0$ before Type Ia supernovae turn on, so the knee occurs far to the right. In dwarf galaxies where star formation is sluggish, the knee occurs at low metallicities $[\text{Fe}/\text{H}] \lesssim -1.5$.

### Graph 2. The $[\alpha/\text{Fe}]$ versus Velocity Dispersion Relation (Downsizing)

```
  [alpha/Fe] (dex)
     ^
+0.4 |                                            * (Massive giant ellipticals)
     |                                     *     *  sigma ~ 250 - 350 km/s
+0.3 |                              *     *         Delta t_SF < 0.5 Gyr
     |                       *     *
+0.2 |                *     *
     |         *     *   (Intermediate ellipticals)
+0.1 |  *     *          sigma ~ 150 km/s
     |  *                Delta t_SF ~ 1 - 2 Gyr
 0.0 +============================================================>
       1.6    1.8    2.0    2.2    2.4    2.5    2.6    log10 sigma (km/s)
       (40)   (63)  (100)  (158)  (250)  (316)  (400)   [sigma in km/s]
```

Key quantitative takeaways for the blackboard
- Slope - $d[\alpha/\text{Fe}] / d\log_{10}\sigma \approx 0.32$.
- Zero-point - At $\sigma = 100 \text{ km s}^{-1}$, $[\alpha/\text{Fe}] \approx +0.18$.
- Physical interpretation - Dynamic mass regulates star formation efficiency and duration. Higher gravitational potential wells enable intense initial gas collapse and trigger powerful AGN feedback that rapidly extinguishes star formation.

## 6. Exact Course Citations and Literature Provenance

- Mo, Houjun, Frank van den Bosch, and Simon White (2010), Galaxy Formation and Evolution, Cambridge University Press
  - Chapter 10 Chemical Evolution of Galaxies, Section 10.1 Stellar Yields and Nucleosynthesis, pages 473 to 485 - Core-collapse vs Type Ia yields and initial mass functions.
  - Section 10.4 Abundance Ratios and Galaxy Formation, pages 508 to 514 - Detailed mathematical derivation of $[\alpha/\text{Fe}]$ as a cosmic clock, instantaneous recycling limits, and the origin of the knee.
  - Section 10.5 Chemical Evolution of Elliptical Galaxies, pages 514 to 522 - Downsizing and the alpha-to-iron mass scaling.
- Binney, James, and Michael Merrifield (1998), Galactic Astronomy, Princeton University Press
  - Chapter 8 Evolution of Stellar Populations, Section 8.4 Chemical Enrichment, pages 480 to 505 - Supernova timescales, yield tables, closed box models.
  - Chapter 10 Early-Type Galaxies, Section 10.4 Stellar Populations in Ellipticals, pages 680 to 692 - Lick index measurements, magnesium-to-iron enhancement.
- Thomas, Daniel, Claudia Maraston, Ralf Bender, and Claudia Mendes de Oliveira (2005), The Epochs of Early-Type Galaxy Formation as a Function of Environment, The Astrophysical Journal, volume 621, pages 673 to 694 - Empirical calibration of $[\alpha/\text{Fe}]$ with velocity dispersion $\sigma$ and environmental independence of the downsizing trend.
- Course lecture slides and documents (Prof. Alessandro Pizzella)
  - Lecture slide file Astrophysic_gal_8_SRE-1.pdf (Scaling Relations of Ellipticals)
    - Slide 4 - Definition of $[\alpha/\text{Fe}]$ ratio and nuclear burning channels.
    - Slide 5 - Type II core-collapse supernovae timescale (approx 10 Myr) and alpha yields.
    - Slide 6 - Type Ia thermonuclear supernovae timescale (approx 1 Gyr) and iron yields.
    - Slide 7 - High $[\alpha/\text{Fe}] \approx +0.2 \text{ to } +0.3$ in massive ellipticals proving star formation duration $\Delta t_{\text{SF}} < 1 \text{ Gyr}$.
    - Slides 21 to 36 - Empirical Lick index calibrations, $[\text{Mg}/\text{Fe}]$ correlations, and environmental comparisons.
  - Student course document Astrophysics_of_Galaxies.tex
    - Part I, Section Quenching Mechanisms and Chemical Clocks, pages 42 to 45.

---

## Connections

- Stellar populations - [[Color gradients in ellipticals]], [[Stellar population synthesis]]
- Scaling laws - [[Faber-Jackson relation]], [[Fundamental plane of ellipticals]]
- Quenching - [[Color bimodality of galaxies]], [[Galaxy color, density and morphology]]

---

## Lecture Slides and Reference Figures (Prof. Alessandro Pizzella)

![gal_sre-04.png](../../assets/images/gal_sre-04.png)
*[alpha/Fe] ratio as a clock for star formation duration.*

![gal_sre-05.png](../../assets/images/gal_sre-05.png)
*Type II supernovae enrich ISM with alpha elements (O, Mg, Si) on ~10 Myr timescales.*

![gal_sre-06.png](../../assets/images/gal_sre-06.png)
*Type Ia supernovae enrich ISM with iron on ~1 Gyr delay timescales.*

![gal_sre-07.png](../../assets/images/gal_sre-07.png)
*High [alpha/Fe] ~ +0.2 to +0.3 in massive ellipticals proves star formation completed in < 1 Gyr!*

---

## Additional Lecture Slides (Prof. Alessandro Pizzella)

![gal_sre-21.png](../../assets/images/gal_sre-21.png)

![gal_sre-22.png](../../assets/images/gal_sre-22.png)

![gal_sre-23.png](../../assets/images/gal_sre-23.png)

![gal_sre-24.png](../../assets/images/gal_sre-24.png)

![gal_sre-25.png](../../assets/images/gal_sre-25.png)

![gal_sre-26.png](../../assets/images/gal_sre-26.png)

![gal_sre-27.png](../../assets/images/gal_sre-27.png)

![gal_sre-28.png](../../assets/images/gal_sre-28.png)

![gal_sre-29.png](../../assets/images/gal_sre-29.png)

![gal_sre-30.png](../../assets/images/gal_sre-30.png)

![gal_sre-31.png](../../assets/images/gal_sre-31.png)

![gal_sre-32.png](../../assets/images/gal_sre-32.png)

![gal_sre-33.png](../../assets/images/gal_sre-33.png)

![gal_sre-34.png](../../assets/images/gal_sre-34.png)

![gal_sre-35.png](../../assets/images/gal_sre-35.png)

![gal_sre-36.png](../../assets/images/gal_sre-36.png)



## Linked References

- [[Color gradients in ellipticals]]
- [[Early-type galaxy stellar populations]]
- [[Green valley and quenching tracks]]
- [[Astrophysics_of_Galaxies_MOC]]


