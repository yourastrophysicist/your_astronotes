---
layout: "default"
title: "Continuum opacity sources"
---
the **continuum opacity** $\kappa_\nu^{\rm cont}$ in stellar atmospheres comes from several physical processes, each dominating at different temperatures and wavelengths. knowing which dominates is essential for understanding why stellar continua have the shapes they do.

## the major sources

### bound-bound (line) opacity
absorption / emission in atomic lines. by definition narrow in $\nu$, so contributes spikes rather than continuum. but **line blanketing**, the cumulative effect of millions of metal lines, can suppress the visible continuum significantly in cool stars.

### bound-free (photoionisation)
photon ionises an atom: $X + h\nu \to X^+ + e^-$. requires $h\nu > \chi$, the binding energy. cross section $\sigma \propto 1/\nu^3$ above threshold. this gives the **continuum edges**:
- **Lyman edge** at $912$ Å: H I $\to$ H II from $n = 1$.
- **Balmer edge** at $3646$ Å: H I $\to$ H II from $n = 2$.
- **Paschen edge** at $8203$ Å: from $n = 3$.
- **He I edge** at $504$ Å: He I from ground.
- **He II edge** at $228$ Å: He II from ground.

each edge produces a **discontinuity** (jump) in the continuum. the **Balmer jump** in A and F stars is a famous diagnostic.

### free-free (bremsstrahlung)
photon emitted (or absorbed) when free electron passes near an ion: $e^- + X^+ \to e^- + X^+ + h\nu$. continuous spectrum, $\propto e^{-h\nu/k_BT}$. dominant in **hot ionised gas**: HII regions, hot star coronae, X-ray plasmas. see [Bremsstrahlung](Bremsstrahlung.html).

### electron scattering (Thomson)
electron deflects a photon: $e^- + h\nu \to e^- + h\nu$. cross section $\sigma_T = 6.65 \times 10^{-25}$ cm$^2$, **independent of frequency**. dominant continuum opacity in **hot stars** ($T > 20\,000$ K) where most matter is ionised and there are no bound electrons left to absorb.

### H$^-$ ion bound-free + free-free
the **negative hydrogen ion** H$^-$ (a proton with two electrons, weakly bound at $0.75$ eV) is the dominant continuum opacity source in **cool stars** ($T = 3000$ to $10\,000$ K), including the Sun!

bound-free continuum: $H^- + h\nu \to H + e^-$, threshold at $1.65\,\mu$m.
free-free continuum: $H + e^- + h\nu \to H + e^-$.

H$^-$ exists because cool, neutral-H-rich gas has $n_{e^-}$ large enough (from metal ionisation) to bind onto neutral H. its very small ionisation potential makes it a broadband absorber in optical and NIR.

## which dominates in which stars

| stellar type | $T_{\rm eff}$ | dominant opacity |
|---|---|---|
| O | $> 30\,000$ | electron scattering + He bound-free |
| B | $10\,000$ to $30\,000$ | electron scattering + H bound-free |
| A | $7500$ to $10\,000$ | H bound-free (Balmer + Paschen edges) + electron scat |
| F-G | $5000$ to $7500$ | H$^-$ bound-free + bound-bound |
| K | $4000$ to $5200$ | H$^-$ bound-free + H$^-$ free-free |
| M | $< 4000$ | molecular bands + H$^-$ |

## the visible continuum slope

a very rough rule:
- **hot stars**: continuum $\propto B_\nu(T) \cdot \kappa^{-1}$ with $\kappa \sim$ const (electron scattering).
- **cool stars**: continuum modulated by H$^-$ bound-free shape, peaking at $\sim 1.6\,\mu$m.

so the spectrum shape is **not** just a Planck curve; it is modulated by the wavelength-dependent opacity.

## continuum slopes diagnose stellar parameters

ratios of continuum fluxes at carefully chosen wavelengths (e.g. just blue and red of the Balmer jump) provide $T$ + $\log g$ proxies. this is the basis of photometric stellar classification (Strömgren $uvby\beta$ system, Geneva system, Vilnius).

## see also

- [Equation of radiative transfer](Equation%20of%20radiative%20transfer.html)
- [Optical depth](Optical%20depth.html)
- [Source function](Source%20function.html)
- [Stellar atmosphere structure](Stellar%20atmosphere%20structure.html)
- [Photoelectric absorption](Photoelectric%20absorption.html)
- [Bremsstrahlung](Bremsstrahlung.html)
- [Bolometric correction and effective temperature](Bolometric%20correction%20and%20effective%20temperature.html)
- [Stellar spectra and spectral classification](Stellar%20spectra%20and%20spectral%20classification.html)
- [Hydrogen spectral series](Hydrogen%20spectral%20series.html)
- [Recombination continuum](Recombination%20continuum.html)
- [Free-free continuum](Free-free%20continuum.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (13)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Balmer%20continuum.html" class="backlink-item">Balmer continuum</a></li>
    <li class="backlink-item-wrap"><a href="Eddington-Barbier%20approximation.html" class="backlink-item">Eddington-Barbier approximation</a></li>
    <li class="backlink-item-wrap"><a href="Equation%20of%20radiative%20transfer.html" class="backlink-item">Equation of radiative transfer</a></li>
    <li class="backlink-item-wrap"><a href="Free-free%20continuum.html" class="backlink-item">Free-free continuum</a></li>
    <li class="backlink-item-wrap"><a href="Optical%20depth.html" class="backlink-item">Optical depth</a></li>
    <li class="backlink-item-wrap"><a href="Recombination%20continuum.html" class="backlink-item">Recombination continuum</a></li>
    <li class="backlink-item-wrap"><a href="Source%20function.html" class="backlink-item">Source function</a></li>
    <li class="backlink-item-wrap"><a href="Stark%20broadening.html" class="backlink-item">Stark broadening</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20atmosphere%20structure.html" class="backlink-item">Stellar atmosphere structure</a></li>
    <li class="backlink-item-wrap"><a href="Thermal%20continuum%20from%20stellar%20photosphere.html" class="backlink-item">Thermal continuum from stellar photosphere</a></li>
    <li class="backlink-item-wrap"><a href="WDCS%20turn%20to%20blue%20and%20CIA.html" class="backlink-item">WDCS turn to blue and CIA</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
  </ul>
</div>

