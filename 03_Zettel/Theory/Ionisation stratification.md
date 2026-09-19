---
layout: "default"
title: "Ionisation stratification"
---
in a photoionised gas around a single source, **species at higher ionisation potential cluster closer to the source**, and **lower-ionisation species at the periphery**. the gas is layered like an onion. observable as different emission-line "shells" in resolved nebulae.

## the physical reason

at distance $r$ from the source, the **ionisation parameter** $U(r) \propto 1/r^2$ decreases outward.
- **inner region** (high $U$): high-ionisation species [OIII], [Ne III], He II dominant.
- **outer region** (low $U$): low-ionisation species [OII], [SII], [NII], H I.

each species has a peak ionisation efficiency at a specific $U$:

| species | required $h\nu$ for ionisation | peak $\log U$ |
|---|---|---|
| H II | 13.6 eV | $\sim -2$ |
| He II | 24.6 eV | $\sim -2$ |
| He III | 54.4 eV | $\sim -1$ |
| O II | 13.6 eV (similar to H) | $\sim -2$ |
| O III | 35 eV | $\sim -2$ |
| O IV | 54.9 eV | $\sim -1$ |
| Ne III | 41 eV | $\sim -2$ |
| Ne V | 97 eV | $\sim 0$ |
| S II | 10.4 eV | $\sim -2.5$ |
| N II | 14.5 eV | $\sim -2$ |

so the spatial layering reflects the radial $U$ gradient.

## observable consequences

### emission-line maps

in spatially resolved HII regions (M42 Orion, M16 Eagle, M20 Trifid):
- **inner core**: [OIII] $\lambda 5007$, He II $\lambda 4686$ emission strongest.
- **middle**: H$\alpha, [OII], [NII]$.
- **outer**: [SII], [OI] $\lambda 6300$.

resolved with HST or ground-based narrow-band imaging; each filter highlights a different layer.

### integrated line ratios

unresolved nebulae produce integrated spectra reflecting the volume-weighted mix:
- starburst galaxies (low $U$, low $T_e$): low [OIII]/[OII], high [SII]/H$\alpha$.
- AGN narrow-line regions (high $U$, hard ionising spectrum): high [OIII]/H$\beta$, He II $\lambda 4686$ visible.

these differences underlie the BPT diagram for galaxy classification ([BPT diagram](BPT%20diagram.html)).

## ionisation correction factors (ICFs)

to measure abundances, you need to add up **all** ionisation stages of an element. but you observe only a few. the **ionisation correction factor**:
$$\mathrm{ICF}(X) = \frac{n(X)_{\rm tot}}{n(X)_{\rm observed\,stages}}$$

uses the ionisation potentials of observed and unobserved species to estimate the missing fraction. typical ICFs are $\sim 1$ to $\sim 3$. for sulphur, where only S II and S III are usually accessible, ICF can be $\sim 1.2$.

## the matter-bounded vs ionisation-bounded distinction

- **ionisation-bounded**: the gas is more than enough to absorb all ionising photons (typical HII region). the boundary is sharp.
- **matter-bounded**: gas is too thin to absorb all photons; some photons leak out. low-density-clumpy gas, AGN narrow-line regions sometimes. consequence: extra Lyman continuum reaches the IGM.

matter-bounded vs ionisation-bounded affects the integrated line ratios; matter-bounded shows excess [OII] and [SII] relative to [OIII] for the same $U$.

## see also

- [Ionisation parameter U](Ionisation%20parameter%20U.html)
- Strömgren sphere
- [Photoionisation balance](Photoionisation%20balance.html)
- [Forbidden line diagnostics](Forbidden%20line%20diagnostics.html)
- [BPT diagram](BPT%20diagram.html)
- [H II region spectroscopy](H%20II%20region%20spectroscopy.html)
- [AGN spectroscopy](AGN%20spectroscopy.html)
- [Planetary nebula spectroscopy](Planetary%20nebula%20spectroscopy.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Ionisation%20parameter%20U.html" class="backlink-item">Ionisation parameter U</a></li>
    <li class="backlink-item-wrap"><a href="Ionisation%20parameter%20and%20ionisation%20state.html" class="backlink-item">Ionisation parameter and ionisation state</a></li>
    <li class="backlink-item-wrap"><a href="Molecular%20clouds.html" class="backlink-item">Molecular clouds</a></li>
    <li class="backlink-item-wrap"><a href="Photoionisation%20balance.html" class="backlink-item">Photoionisation balance</a></li>
    <li class="backlink-item-wrap"><a href="Stromgren%20sphere.html" class="backlink-item">Stromgren sphere</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

