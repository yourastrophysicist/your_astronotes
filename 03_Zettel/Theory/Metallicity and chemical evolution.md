---
layout: "default"
title: "Metallicity and chemical evolution"
---
**metallicity** measures the abundance of all elements heavier than helium ($Z \equiv M_{\rm metals}/M_{\rm tot}$, with solar $Z_\odot \approx 0.0142\text{--}0.020$) in a star or interstellar gas. because virtually all metals are synthesized inside stars and distributed via stellar winds and supernova explosions, a star's surface chemical composition fossilizes the **enrichment state of the ISM** at its birth location and epoch.

## logarithmic bracket notation

abundances are universally reported relative to the solar photosphere in logarithmic "bracket" notation:
$$[\mathrm{A}/\mathrm{B}] \equiv \log_{10}\!\left(\frac{N_{\rm A}}{N_{\rm B}}\right)_\star - \log_{10}\!\left(\frac{N_{\rm A}}{N_{\rm B}}\right)_\odot$$
for iron relative to hydrogen:
$$[\mathrm{Fe}/\mathrm{H}] \equiv \log_{10}\!\left(\frac{N_{\rm Fe}}{N_{\rm H}}\right)_\star - \log_{10}\!\left(\frac{N_{\rm Fe}}{N_{\rm H}}\right)_\odot$$
- $[\mathrm{Fe}/\mathrm{H}] = 0.0$: solar metallicity ($\sim 1.4\text{--}2.0\%$ metals by mass).
- $[\mathrm{Fe}/\mathrm{H}] = -1.0$: one-tenth solar (typical of the Galactic thick disk and young globular clusters).
- $[\mathrm{Fe}/\mathrm{H}] = -2.0$: one-hundredth solar (classical metal-poor halo globular clusters).
- $[\mathrm{Fe}/\mathrm{H}] < -3.0$: extremely metal-poor (EMP) halo stars and ultra-faint dwarf galaxies.

## the $[\alpha/\mathrm{Fe}]$ ratio as a cosmic clock

the ratio of **$\alpha$-elements** (O, Ne, Mg, Si, S, Ca, Ti—synthesized by capturing $\alpha$-particles $^4\mathrm{He}$) to iron-peak elements serves as an astrophysical stopwatch for star formation:

1. **core-collapse supernovae (Type II, Ib, Ic)**:
   progenitors are massive stars ($M \gtrsim 8\,M_\odot$) with short lifetimes ($\tau \lesssim 3\text{--}30$ Myr). their nucleosynthetic yields are dominated by $\alpha$-elements, producing high $[\alpha/\mathrm{Fe}] \approx +0.4\text{--}+0.5$ dex with little iron.
2. **thermonuclear supernovae (Type Ia)**:
   progenitors are carbon-oxygen white dwarfs in binary systems detonating near the Chandrasekhar limit. they require a substantial delay time ($\tau_{\rm delay} \sim 0.5\text{--}1.5$ Gyr) for intermediate-mass stars to evolve and transfer mass. their ejecta consist predominantly of iron-peak elements ($^{56}\mathrm{Fe}$) with minimal $\alpha$-elements.

**the "knee" in $[\alpha/\mathrm{Fe}]$ vs $[\mathrm{Fe}/\mathrm{H}]$**:
- at earliest times ($t < 1$ Gyr), CCSNe dominate: $[\alpha/\mathrm{Fe}]$ forms an elevated plateau at $\sim +0.4$.
- once Type Ia SNe turn on ($t \sim 1$ Gyr), iron dumps into the ISM, causing $[\alpha/\mathrm{Fe}]$ to decline steeply toward solar ($0.0$).
- the metallicity $[\mathrm{Fe}/\mathrm{H}]_{\rm knee}$ at which this downturn occurs marks the accumulation of iron reached by the galaxy when Type Ia SNe began contributing. in massive systems with high SFR (Galactic bulge, thick disk), the knee sits at high metallicity ($[\mathrm{Fe}/\mathrm{H}] \sim -0.3$); in low-mass dwarf galaxies with sluggish star formation, the knee occurs at low metallicity ($[\mathrm{Fe}/\mathrm{H}] \sim -1.8$).

| stellar population | $[\mathrm{Fe}/\mathrm{H}]$ | $[\alpha/\mathrm{Fe}]$ | star formation duration / character |
|---|---|---|---|
| **Galactic halo** | $-3.5$ to $-1.2$ | $+0.3$ to $+0.5$ (plateau) | rapid, truncated starburst in early universe |
| **thick disk** | $-1.0$ to $-0.3$ | $+0.2$ to $+0.4$ | intense, early star formation ($\tau \sim 1\text{--}2$ Gyr) |
| **thin disk** | $-0.5$ to $+0.3$ | $\sim 0.0$ (solar) | extended, continuous star formation over $\sim 8$ Gyr |
| **dwarf spheroidals (dSph)**| $-2.5$ to $-1.0$ | low (early knee) | inefficient, low-SFR evolution |

## analytical chemical evolution: the simple closed-box model

consider an isolated gas reservoir with initial gas mass $M_{\rm gas}(0) = M_0$ and initial metallicity $Z(0) = 0$, with no gas inflows or outflows (**closed box**):
- let $dM_*$ be the mass forming stars, of which a fraction $R \approx 0.3\text{--}0.5$ is returned to the ISM via stellar winds and supernovae (**instantaneous recycling approximation**), so the net star formation is $dM_{*,{\rm net}} = (1 - R) dM_*$.
- the mass of new heavy elements synthesized and ejected per unit net mass of stars formed is the **yield** $y_Z \equiv \frac{p_Z}{1 - R}$.

conservation of gas mass and metal mass:
$$dM_{\rm gas} = -dM_{*,{\rm net}}$$
$$d(Z M_{\rm gas}) = -Z dM_{*,{\rm net}} + y_Z dM_{*,{\rm net}} = (y_Z - Z) dM_{*,{\rm net}}$$
expanding $d(Z M_{\rm gas}) = Z dM_{\rm gas} + M_{\rm gas} dZ$ and substituting $dM_{*,{\rm net}} = -dM_{\rm gas}$:
$$M_{\rm gas} dZ = -y_Z dM_{\rm gas} \implies dZ = -y_Z \frac{dM_{\rm gas}}{M_{\rm gas}}$$
integrating from $Z(0) = 0$ and $M_{\rm gas}(0) = M_0$:
$$Z(t) = y_Z \ln\!\left(\frac{M_0}{M_{\rm gas}(t)}\right) = y_Z \ln\!\left(\frac{1}{\mu_{\rm gas}}\right)$$
where $\mu_{\rm gas} \equiv M_{\rm gas} / M_{\rm tot}$ is the gas fraction.

### the G-dwarf problem & gas infall
the simple closed-box model predicts the cumulative distribution of stellar metallicity:
$$M_*(< Z) = M_{\rm tot} \left[1 - \exp(-Z / y_Z)\right]$$
applied to the solar neighborhood, it predicts that $\sim 50\%$ of local G-type dwarf stars should have $Z < 0.25\,Z_\odot$ ($[\mathrm{Fe}/\mathrm{H}] < -0.6$). observations (van den Bergh 1962, Schmidt 1963) show that **only $\sim 2\text{--}5\%$ of local G dwarfs are this metal-poor**—the classic **G-dwarf problem**.

**resolution**: the Milky Way did not evolve as a closed box. it experienced continuous **infall of pristine or low-metallicity gas** from the cosmic web, maintaining a high gas mass while diluting the ISM and enabling more stars to form near the equilibrium metallicity $Z \approx y_Z$.

## the mass-metallicity relation (MZR)

across external galaxies, gas-phase and stellar metallicity correlate strongly with galaxy stellar mass (Tremonti et al. 2004, Gallazzi et al. 2005):
$$Z_{\rm gas} \propto M_*^{0.3} \quad (10^8 \lesssim M_*/M_\odot \lesssim 10^{11})$$
physical origin:
1. **galactic winds**: shallow gravitational potential wells in low-mass galaxies allow supernova energy to eject metal-enriched gas efficiently ($v_{\rm wind} > v_{\rm esc}$).
2. **star formation efficiency**: massive galaxies convert gas into stars faster, achieving lower gas fractions $\mu_{\rm gas}$ and higher asymptotic $Z$.

## metallicity corrections in the distance ladder
unaccounted metallicity shifts standard candle zero-points:
- **Cepheids**: metal-rich Cepheids are slightly brighter and redder ($\gamma_V \sim -0.1$ mag/dex).
- **TRGB**: $M_I^{\rm TRGB} \approx -4.0$ is exceptionally flat at low $Z$ but curves fainter at $[\mathrm{Fe}/\mathrm{H}] > -0.7$.
- **RR Lyrae**: $M_V^{\rm RR} = 0.214\,[\mathrm{Fe}/\mathrm{H}] + 0.89$ (strong metallicity dependence).

## see also

- [[Observational_Astrophysics_MOC]]
- [[Stellar_Astrophysics_MOC]]
- [[Stellar populations I II III]]
- [[Population I and II stars]]
- [[Cluster ages from CMD turnoff]]
- [[Age-metallicity degeneracy]]
- [[Chemical evolution of galaxies]]
- [[Lick indices]]
- [[Single stellar population SSP]]
- [[Stellar population synthesis]]

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_rad-097.png](../../assets/images/obs_rad-097.png)
*Metallicity definition: Z = mass fraction in elements heavier than He.*

![obs_rad-098.png](../../assets/images/obs_rad-098.png)
*Spectroscopic bracket notation: [Fe/H] = log10(N_Fe / N_H)_star - log10(N_Fe / N_H)_Sun.*

![obs_rad-099.png](../../assets/images/obs_rad-099.png)
*Stellar metallicity indicators: iron lines, UV excess delta(U - B).*

![obs_rad-100.png](../../assets/images/obs_rad-100.png)
*UV excess mechanism: reduced metal line blanketing in UV for low-metallicity stars.*

![obs_rad-101.png](../../assets/images/obs_rad-101.png)
*Stromgren four-color uvby-beta photometric system and m1 metallicity index.*

![obs_rad-102.png](../../assets/images/obs_rad-102.png)
*Gas-phase metallicity indicators in HII regions.*

![obs_rad-103.png](../../assets/images/obs_rad-103.png)
*The R23 index: ([OII] 3727 + [OIII] 4959,5007) / H-beta.*

![obs_rad-104.png](../../assets/images/obs_rad-104.png)
*Direct T_e method using auroral [OIII] 4363 A line vs empirical strong-line calibrations.*

![obs_rad-105.png](../../assets/images/obs_rad-105.png)
*N2 index ([NII] 6584 / H-alpha) and O3N2 index.*

![obs_rad-106.png](../../assets/images/obs_rad-106.png)
*Mass-Metallicity Relation (MZR) in star-forming galaxies.*

![obs_rad-107.png](../../assets/images/obs_rad-107.png)
*Fundamental Metallicity Relation (FMR) including star formation rate.*

![obs_rad-108.png](../../assets/images/obs_rad-108.png)
*Simple closed-box chemical evolution model: Z(t) = -y ln mu_gas.*

![obs_rad-109.png](../../assets/images/obs_rad-109.png)
*The G-dwarf problem in the solar neighborhood: deficiency of low-metallicity stars.*

![obs_rad-110.png](../../assets/images/obs_rad-110.png)
*Infall and outflow models resolving the G-dwarf problem.*

![obs_rad-111.png](../../assets/images/obs_rad-111.png)
*Alpha-element enhancement [alpha/Fe] as chronometer for star formation timescale.*

![obs_rad-112.png](../../assets/images/obs_rad-112.png)
*Core-collapse supernovae (Type II) producing alpha elements on ~10 Myr timescale.*

![obs_rad-113.png](../../assets/images/obs_rad-113.png)
*Type Ia supernovae producing iron-peak elements on ~1 Gyr delay timescale.*

![obs_rad-114.png](../../assets/images/obs_rad-114.png)
*The [alpha/Fe] vs [Fe/H] knee diagram in Milky Way populations.*

![obs_rad-115.png](../../assets/images/obs_rad-115.png)
*Radial metallicity gradients in spiral galaxy disks.*

![obs_rad-116.png](../../assets/images/obs_rad-116.png)
*Summary of chemical evolution diagnostics.*



## Linked References

- [[Age-metallicity degeneracy]]
- [[Cooling curve]]
- [[Cooling rate in HII regions]]
- [[Curve of growth abundance analysis]]
- [[Equilibrium temperature]]
- [[Lick indices]]
- [[Spectroscopic Te diagnostics]]
- [[Observational_Astrophysics_MOC]]


