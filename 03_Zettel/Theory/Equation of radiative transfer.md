---
layout: "default"
title: "Equation of radiative transfer"
---
the **equation of radiative transfer** (RTE) is the master equation describing how light intensity changes as it propagates through a medium that emits and absorbs at the photon's frequency. fundamental for both stellar atmospheres and nebulae.

## the equation

along a ray of path length $s$:
$$\boxed{\, \frac{dI_\nu}{ds} = -\kappa_\nu I_\nu + j_\nu \,}$$

where:
- $I_\nu$ = specific intensity at frequency $\nu$ (erg s$^{-1}$ cm$^{-2}$ Hz$^{-1}$ sr$^{-1}$).
- $\kappa_\nu$ = absorption coefficient (cm$^{-1}$), the inverse mean free path for photons of frequency $\nu$.
- $j_\nu$ = emission coefficient (erg s$^{-1}$ cm$^{-3}$ Hz$^{-1}$ sr$^{-1}$), photons added per unit path.

physical reading: along the path, the intensity loses photons by absorption ($-\kappa I$) and gains photons by emission ($+j$). when both balance, $dI/ds = 0$.

## scattering vs absorption

formally $\kappa_\nu$ represents both pure absorption (photon destroyed, energy thermalised) and scattering (photon redirected). at a given location and frequency, the **albedo** $\omega = \sigma_{\rm scat}/(\sigma_{\rm scat} + \sigma_{\rm abs})$ measures the scattering fraction. for photoionised gas in equilibrium, scattering is small at most $\nu$ (except resonance lines); for stellar continua, electron scattering matters in hot stars.

## reformulation: optical depth

define the **optical depth** along the line of sight:
$$\tau_\nu(s) = \int_0^s \kappa_\nu(s')\,ds'$$

then the RTE becomes
$$\frac{dI_\nu}{d\tau_\nu} = -I_\nu + S_\nu$$
with the **source function** $S_\nu \equiv j_\nu/\kappa_\nu$.

source function = local emissivity per unit absorption; at LTE it equals $B_\nu(T)$.

## the formal solution

integrating from $\tau = 0$ (observer) along a line of sight to depth $\tau$:
$$I_\nu(0) = I_\nu(\tau)\,e^{-\tau} + \int_0^\tau S_\nu(\tau')\,e^{-(\tau-\tau')}\,d\tau' \cdot ...$$

(more carefully, with proper sign conventions for the line-of-sight direction, see standard textbooks.) the punchline:
- **first term**: light from $\tau$ that survives absorption back to the observer.
- **second term**: emission from each layer along the ray, weighted by transmission to the observer.

## the two physical regimes

### optically thin ($\tau \ll 1$)
absorption is negligible. emergent intensity is just the integrated emission:
$$I_\nu(0) \approx \int_0^\infty j_\nu\,ds$$
e.g. nebular emission from a thin HII region: each atom radiates and the photon escapes.

### optically thick ($\tau \gg 1$)
absorption dominates. emergent intensity is the source function at $\tau = 1$:
$$I_\nu(0) \approx S_\nu(\tau = 1) = B_\nu(T(\tau = 1))\quad\text{(at LTE)}$$
this is the **Eddington-Barbier approximation** (see [Eddington-Barbier approximation](Eddington-Barbier%20approximation.html)). emergent radiation samples one layer's thermal Planck spectrum: the **photosphere**, where light is "born."

## why both matter

a stellar atmosphere is optically thick in the continuum (the photosphere is well-defined) but optically thin in the absorption-line cores. the RTE then describes:
- **continuum**: $I = B(T)$ at the optical depth where $\tau_{\rm cont} = 1$.
- **inside the line**: line opacity adds to continuum opacity, so $\tau = 1$ shifts to a higher (cooler) layer; intensity is lower there. you see a dip = an absorption line.

so absorption lines are not "blocked light" but **light from a cooler higher layer** of the atmosphere.

## moments and approximations

multiplying RTE by $1, \mu, \mu^2$ and integrating over angle gives the moment equations relating $J = (1/4\pi)\int I\,d\Omega$ (mean intensity), $H$ (Eddington flux), $K$ (radiation pressure). the **Eddington approximation** $K = J/3$ closes the system, giving radiative-transfer solutions in plane-parallel atmospheres.

## see also

- [Optical depth](Optical%20depth.html)
- [Source function](Source%20function.html)
- [Local thermodynamic equilibrium LTE](Local%20thermodynamic%20equilibrium%20LTE.html)
- [Eddington-Barbier approximation](Eddington-Barbier%20approximation.html)
- [Stellar atmosphere structure](Stellar%20atmosphere%20structure.html)
- [Continuum opacity sources](Continuum%20opacity%20sources.html)
- [Specific intensity flux luminosity](Specific%20intensity%20flux%20luminosity.html)
- [Limb darkening](Limb%20darkening.html)
- [Radiative transport](Radiative%20transport.html) — additional notes
- [Boltzmann equation in cosmology](Boltzmann%20equation%20in%20cosmology.html) — analogous in cosmological / photon-fluid regime

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (10)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Absorption%20coefficient%20and%20oscillator%20strength.html" class="backlink-item">Absorption coefficient and oscillator strength</a></li>
    <li class="backlink-item-wrap"><a href="Continuum%20opacity%20sources.html" class="backlink-item">Continuum opacity sources</a></li>
    <li class="backlink-item-wrap"><a href="Eddington-Barbier%20approximation.html" class="backlink-item">Eddington-Barbier approximation</a></li>
    <li class="backlink-item-wrap"><a href="Limb%20darkening.html" class="backlink-item">Limb darkening</a></li>
    <li class="backlink-item-wrap"><a href="Local%20thermodynamic%20equilibrium%20LTE.html" class="backlink-item">Local thermodynamic equilibrium LTE</a></li>
    <li class="backlink-item-wrap"><a href="Optical%20depth.html" class="backlink-item">Optical depth</a></li>
    <li class="backlink-item-wrap"><a href="Source%20function.html" class="backlink-item">Source function</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20atmosphere%20structure.html" class="backlink-item">Stellar atmosphere structure</a></li>
    <li class="backlink-item-wrap"><a href="Thermal%20continuum%20from%20stellar%20photosphere.html" class="backlink-item">Thermal continuum from stellar photosphere</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

