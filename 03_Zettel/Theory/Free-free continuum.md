---
layout: "default"
title: "Free-free continuum"
---
**free-free emission** (also called thermal bremsstrahlung) is photon emission when a free electron is deflected by the Coulomb field of an ion. distinct from recombination because the electron remains free before and after.

note: the existing vault note [Bremsstrahlung](Bremsstrahlung.html) covers the X-ray / hot-plasma case in more depth. this note focuses on the nebular / radio role.

## the process

$$e^- + X^+ \to e^- + X^+ + h\nu$$

an electron passes near an ion, accelerates due to Coulomb force, radiates a photon. the photon takes some of the electron's kinetic energy.

## the spectrum

emissivity per unit frequency from a thermal plasma with electron $T_e$:
$$j_\nu^{\rm ff} = \frac{8}{3}\sqrt{\frac{2\pi}{3 m_e}}\,\frac{e^6}{m_e c^3}\,(k_BT_e)^{-1/2}\,n_e n_i\,Z^2\,e^{-h\nu/k_BT_e}\,g_{\rm ff}(\nu, T)$$

with $g_{\rm ff}$ the **free-free Gaunt factor** (slowly varying with $\nu$ and $T_e$, of order unity).

key features:
- **flat** at $h\nu \ll k_BT_e$ (Rayleigh-Jeans): $j_\nu \propto T_e^{-1/2}\,\nu^0$ approximately.
- **exponential cutoff** at $h\nu \sim k_BT_e$.
- **smooth**, no edges (unlike recombination continuum).

## numerical values

at $T_e = 10^4$ K (HII region), $k_BT_e = 0.86$ eV, so cutoff at $\sim 1$ eV $= 1.2\,\mu$m. above this, free-free falls exponentially.

so:
- in **radio/sub-mm/IR**: free-free continuum is flat and dominant.
- in **optical**: small but non-negligible.
- in **UV**: exponentially suppressed.

## astronomical contexts

### HII regions
free-free + recombination continuum = the smooth thermal nebular continuum. dominant at radio wavelengths ($\sim$ GHz). optically thin emission, $L \propto n_e n_p V$ for ionised volume $V$. used to count HII regions and calibrate SFR via radio fluxes.

### radio surveys
the radio continuum of star-forming galaxies has two components:
- **synchrotron** (non-thermal, $S \propto \nu^{-0.7}$).
- **free-free** (thermal, $S \propto \nu^{-0.1}$).

at high frequencies ($\sim 30$ GHz), free-free dominates. used as a dust-insensitive SFR tracer ([Radio SFR tracer](Radio%20SFR%20tracer.html)).

### hot plasma in clusters
intracluster medium at $T \sim 10^7$ K. cutoff at $\sim 1$ keV. **dominant X-ray emission mechanism** of clusters; allows X-ray surveys to count hot baryons. see [Bremsstrahlung](Bremsstrahlung.html) for the X-ray emphasis.

### supernova remnants and corona
similar physics, $T \sim 10^7$ K plasma.

## the absorption: free-free absorption

inverse process: free-free can also absorb photons. relevant at low frequencies (long radio) where opacity becomes large. produces the spectral turnover in compact HII regions: at $\nu < $ a few GHz, the emission becomes **self-absorbed** and the spectrum turns over from flat to $\nu^2$ (Rayleigh-Jeans).

## comparison

| process | spectrum shape | edges? | dominant |
|---|---|---|---|
| recombination cont. | $e^{-h\nu/k_BT_e}$ above edges | yes (Lyman, Balmer, etc.) | UV |
| **free-free** | $e^{-h\nu/k_BT_e}$, smooth | no | radio, optical, X-ray |
| 2-photon | broad UV bump | no | UV |
| synchrotron | power law $\nu^{-\alpha}$ | no | radio, X-ray |

## see also

- [Bremsstrahlung](Bremsstrahlung.html) — X-ray emphasis
- [Recombination continuum](Recombination%20continuum.html)
- [Balmer continuum](Balmer%20continuum.html)
- [Two-photon emission](Two-photon%20emission.html)
- [Synchroton](Synchroton.html)
- [Continuum opacity sources](Continuum%20opacity%20sources.html)
- [H II region spectroscopy](H%20II%20region%20spectroscopy.html)
- [Radio SFR tracer](Radio%20SFR%20tracer.html)
- [X-ray SFR tracer](X-ray%20SFR%20tracer.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Balmer%20continuum.html" class="backlink-item">Balmer continuum</a></li>
    <li class="backlink-item-wrap"><a href="Continuum%20opacity%20sources.html" class="backlink-item">Continuum opacity sources</a></li>
    <li class="backlink-item-wrap"><a href="Recombination%20continuum.html" class="backlink-item">Recombination continuum</a></li>
    <li class="backlink-item-wrap"><a href="Synchrotron%20continuum.html" class="backlink-item">Synchrotron continuum</a></li>
    <li class="backlink-item-wrap"><a href="Two-photon%20emission.html" class="backlink-item">Two-photon emission</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

