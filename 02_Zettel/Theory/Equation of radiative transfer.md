---
layout: default
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
this is the **Eddington-Barbier approximation** (see [Eddington-Barbier approximation](../../02_Zettel/Theory/Eddington-Barbier approximation.html)). emergent radiation samples one layer's thermal Planck spectrum: the **photosphere**, where light is "born."

## why both matter

a stellar atmosphere is optically thick in the continuum (the photosphere is well-defined) but optically thin in the absorption-line cores. the RTE then describes:
- **continuum**: $I = B(T)$ at the optical depth where $\tau_{\rm cont} = 1$.
- **inside the line**: line opacity adds to continuum opacity, so $\tau = 1$ shifts to a higher (cooler) layer; intensity is lower there. you see a dip = an absorption line.

so absorption lines are not "blocked light" but **light from a cooler higher layer** of the atmosphere.

## moments and approximations

multiplying RTE by $1, \mu, \mu^2$ and integrating over angle gives the moment equations relating $J = (1/4\pi)\int I\,d\Omega$ (mean intensity), $H$ (Eddington flux), $K$ (radiation pressure). the **Eddington approximation** $K = J/3$ closes the system, giving radiative-transfer solutions in plane-parallel atmospheres.

## see also

- [Optical depth](../../02_Zettel/Theory/Optical depth.html)
- [Source function](../../02_Zettel/Theory/Source function.html)
- [Local thermodynamic equilibrium LTE](../../02_Zettel/Theory/Local thermodynamic equilibrium LTE.html)
- [Eddington-Barbier approximation](../../02_Zettel/Theory/Eddington-Barbier approximation.html)
- [Stellar atmosphere structure](../../02_Zettel/Theory/Stellar atmosphere structure.html)
- [Continuum opacity sources](../../02_Zettel/Theory/Continuum opacity sources.html)
- [Specific intensity flux luminosity](../../02_Zettel/Theory/Specific intensity flux luminosity.html)
- [Limb darkening](../../02_Zettel/Theory/Limb darkening.html)
- [Radiative transport](../../02_Zettel/Theory/Radiative transport.html) — additional notes
- [Boltzmann equation in cosmology](../../02_Zettel/Theory/Boltzmann equation in cosmology.html) — analogous in cosmological / photon-fluid regime
