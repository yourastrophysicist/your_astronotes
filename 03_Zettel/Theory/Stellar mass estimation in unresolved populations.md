---
layout: "default"
title: "Stellar mass estimation in unresolved populations"
---
the **stellar mass ($M_*$)** of an unresolved galaxy is one of its most fundamental physical parameters, setting its gravitational potential, chemical evolution, and position on the galaxy stellar mass function. Because individual stars cannot be resolved at cosmological distances, stellar mass must be inferred by measuring the galaxy's integrated luminosity in one or more wavebands and multiplying by an inferred **stellar mass-to-light ratio** ($\Upsilon \equiv M_*/L$).

---

### basic photometric formulation

for a galaxy observed in photometric band $X$ at luminosity distance $d_L(z)$:

$$\log_{10} \left(\frac{M_*}{M_\odot}\right) = \log_{10}\Upsilon_X + 0.4\left(M_{X,\odot} - M_X\right)$$

where:
- $M_X = m_X - 5\log_{10}(d_L / 10\,{\rm pc}) - K_X(z) - A_X$ is the absolute magnitude in filter $X$, corrected for distance modulus, cosmological $K$-correction, and foreground dust extinction.
- $M_{X,\odot}$ is the absolute solar magnitude in filter $X$ (e.g., $M_{K,\odot} \approx 3.28$ mag in the Vega system).
- $\Upsilon_X \equiv M_* / L_X$ is the mass-to-light ratio in solar units ($M_\odot / L_\odot$).

---

### why the near-infrared $K$-band is the optimal mass tracer

the mass-to-light ratio in optical bands (such as $U, B, V$) is acutely sensitive to recent star formation:
- young, massive O and B stars ($M \ge 10\,M_\odot$) have $L \propto M^3$, dominating optical light while contributing negligibly to the overall stellar mass.
- over an evolutionary timescale of $10$ Myr to $10$ Gyr, $\Upsilon_V$ increases by more than a factor of $\sim 50\text{--}100$.

in contrast, the **rest-frame near-infrared $K$-band ($2.2\,\mu\mathrm{m}$)** offers decisive physical advantages:
1. **light dominated by low-mass stars**: in populations older than $\sim 1$ Gyr, $K$-band light is dominated by low-mass main-sequence stars and red giant branch (RGB) stars, whose integrated luminosity scales in direct proportion to total accumulated stellar mass.
2. **minimal age sensitivity**: $\Upsilon_K$ varies by only $\sim 30\text{--}40\%$ between ages of $1.5$ Gyr and $13$ Gyr (holding metallicity constant), typically spanning $\Upsilon_K \approx 0.5\text{--}0.8\,M_\odot / L_{K,\odot}$ for a Chabrier IMF.
3. **minimal dust obscuration**: dust extinction in the $K$-band is roughly one-tenth of optical extinction ($A_K \approx 0.11\,A_V$). Photons at $2.2\,\mu\mathrm{m}$ penetrate even heavily enshrouded star-forming disks with minimal attenuation.

consequently, obtaining rest-frame near-infrared photometry (e.g., via *Spitzer* IRAC, *WISE*, or JWST NIRCam) anchors galaxy stellar mass estimates with minimal sensitivity to SFH uncertainties.

---

### formed mass vs currently locked stellar mass

a crucial distinction exists between two definitions of stellar mass in population synthesis:

1. **formed stellar mass ($M_{\rm form}$)**:
   the time integral of the past star formation history:
   $$M_{\rm form} \equiv \int_0^t \psi(t')\,dt'$$
2. **current surviving stellar mass ($M_*$ or $M_{\rm now}$)**:
   the mass currently contained in living stars plus stellar remnants (white dwarfs, neutron stars, black holes):
   $$M_*(t) = M_{\rm form} \left[ 1 - R(t) \right]$$

where $R(t)$ is the **returned mass fraction** lost to the ISM via stellar winds, planetary nebulae, and supernovae:
- for a standard **Chabrier (2003)** or **Kroupa (2001)** IMF, $R(t) \approx 0.28$ at $100$ Myr, reaching $R(t) \approx 0.40\text{--}0.45$ at $10$ Gyr.
- for a **Salpeter (1955)** IMF, $R(t) \approx 0.30$ at $10$ Gyr (due to the larger reservoir of unevolved low-mass dwarfs).
- **literature caution**: different SED fitting codes report either $M_{\rm form}$ (e.g., FAST default) or $M_*$ (e.g., Prospector, CIGALE). These differ systematically by a factor of $\sim 1.6\text{--}1.8$ ($0.2\text{--}0.25$ dex), requiring rigorous verification when compiling literature samples.

---

### full-SED fitting mass inference

modern studies infer $M_*$ by fitting the entire observed UV-optical-NIR multi-band SED with SPS grids:
- the SED shape (colors, Balmer/4000 Å breaks) constrains the age $\tau$, metallicity $Z$, and dust attenuation $A_V$, fixing the mass-to-light ratio $\Upsilon_\lambda$.
- the overall flux normalization directly scales the absolute stellar mass $M_*$.
- Bayesian fitters (**Prospector**, **BAGPIPES**, **BEAGLE**) marginalize over the multi-dimensional parameter space, delivering typical posterior uncertainties of $\sigma(\log M_*) \approx 0.10\text{--}0.15$ dex for high-signal-to-noise multi-band data.

---

### primary sources of systematic uncertainty

| systematic factor | physical effect on inferred $M_*$ | magnitude of offset |
|---|---|---|
| **IMF choice** | Salpeter vs Chabrier/Kroupa IMF | $\Delta \log M_* = +0.24$ dex (Salpeter is $1.7\times$ heavier) |
| **TP-AGB prescription** | Maraston (M05) boosts NIR luminosity relative to BC03 | $\Delta \log M_* \approx -0.15\text{--}0.3$ dex for post-starbursts |
| **SFH flexibility** | Rigid parametric ($\tau$, delayed-$\tau$) vs non-parametric SFHs | Non-parametric yields masses $+0.1\text{--}0.3$ dex larger ("outshining") |
| **dust attenuation curve** | Calzetti vs Charlot-Fall vs SMC extinction law | Shifts $M_*$ by $\sim 0.1\text{--}0.2$ dex through continuum dereddening |

---

## see also

- [Observational_Astrophysics_MOC](../../04_Atlas/Observational_Astrophysics_MOC.html)
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)
- [Stellar population synthesis](Stellar%20population%20synthesis.html)
- [Single stellar population SSP](Single%20stellar%20population%20SSP.html)
- [SED fitting basics](SED%20fitting%20basics.html)
- [Initial mass function](Initial%20mass%20function.html)
- [Star formation history of a population](Star%20formation%20history%20of%20a%20population.html)
- [Age estimation in unresolved populations](Age%20estimation%20in%20unresolved%20populations.html)
- [Mass-luminosity relation](Mass-luminosity%20relation.html)
- [SPS code families](SPS%20code%20families.html)
- [Dust attenuation in synthetic populations](Dust%20attenuation%20in%20synthetic%20populations.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (12)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Age%20estimation%20in%20unresolved%20populations.html" class="backlink-item">Age estimation in unresolved populations</a></li>
    <li class="backlink-item-wrap"><a href="Dust%20attenuation%20in%20synthetic%20populations.html" class="backlink-item">Dust attenuation in synthetic populations</a></li>
    <li class="backlink-item-wrap"><a href="IR%20SFR%20tracer.html" class="backlink-item">IR SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="Mass-luminosity%20relation.html" class="backlink-item">Mass-luminosity relation</a></li>
    <li class="backlink-item-wrap"><a href="Photometric%20redshifts.html" class="backlink-item">Photometric redshifts</a></li>
    <li class="backlink-item-wrap"><a href="SED%20fitting%20basics.html" class="backlink-item">SED fitting basics</a></li>
    <li class="backlink-item-wrap"><a href="SFR%20tracers%20from%20population%20synthesis.html" class="backlink-item">SFR tracers from population synthesis</a></li>
    <li class="backlink-item-wrap"><a href="SPS%20code%20families.html" class="backlink-item">SPS code families</a></li>
    <li class="backlink-item-wrap"><a href="Single%20stellar%20population%20SSP.html" class="backlink-item">Single stellar population SSP</a></li>
    <li class="backlink-item-wrap"><a href="Star%20formation%20history%20of%20a%20population.html" class="backlink-item">Star formation history of a population</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20population%20synthesis.html" class="backlink-item">Stellar population synthesis</a></li>
    <li class="backlink-item-wrap"><a href="Why%20hot%20massive%20stars%20dominate%20luminosity.html" class="backlink-item">Why hot massive stars dominate luminosity</a></li>
  </ul>
</div>

