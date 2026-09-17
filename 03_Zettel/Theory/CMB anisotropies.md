---
layout: "default"
title: "CMB anisotropies"
---
{% raw %}
the CMB is almost uniform, but has tiny ($\Delta T/T \sim 10^{-5}$) anisotropies on the sky. they are **the seeds of all structure** in the universe + the cleanest probe of cosmological parameters.

## the discovery

after Penzias + Wilson 1965 detected the CMB itself, the search was for anisotropies. detection required precision $\sim 10^{-5}$, decades of effort.

- **1992**: COBE-DMR detects $\Delta T/T \sim 10^{-5}$ at $\sim 7°$ resolution. Smoot et al. Nobel 2006.
- **2001-2010**: WMAP, full-sky to $0.3°$ resolution. characterises acoustic peak structure.
- **2013-2018**: Planck, full-sky to $5'$ resolution, $0.5\%$ precision on $\Lambda$CDM parameters. **the standard reference**.

## the dipole

largest anisotropy: $\Delta T/T \approx 10^{-3}$. **kinematic**, due to Earth's peculiar motion ($\sim 369$ km/s) relative to the CMB rest frame. removed in standard analysis.

## the higher multipoles

after dipole removal, $\Delta T/T \sim 10^{-5}$ on all scales. encoded in the **power spectrum** $C_\ell$ (variance of multipole moments). features:
- **first peak** at $\ell \approx 220$ ($\sim 1°$): the **acoustic peak** from compression of the photon-baryon fluid at recombination.
- **higher peaks** at $\ell \approx 540, 800, ...$: harmonics of the acoustic oscillation.
- **damping tail** at $\ell \gtrsim 1000$: Silk damping by photon diffusion.

each feature constrains specific physics. see [CMB power spectrum](./CMB%20power%20spectrum.html).

## physical origin: the seeds

the anisotropies are imprints of **density perturbations at recombination**, magnified into temperature variations via:
- **adiabatic perturbations**: density variations imprint temperature variations $\Delta T/T = (1/3)\Delta\rho/\rho$ at recombination.
- **Sachs-Wolfe effect**: photons climbing out of gravitational wells lose energy, producing redshift on large scales.
- **Doppler effect**: bulk motions of photon-baryon fluid impart velocities to photons.

## what each scale teaches

| angular scale | $\ell$ | physics |
|---|---|---|
| $> 1°$ | $\ell < 200$ | Sachs-Wolfe, primordial perturbations + late-time integrated SW |
| $\sim 1°$ | $\ell \approx 200$ | first acoustic peak, sound horizon at recombination |
| $0.3°$ to $1°$ | $\ell \approx 200$ to $1000$ | higher acoustic peaks, $\Omega_b h^2$, $\Omega_m h^2$ |
| $< 0.3°$ | $\ell > 1000$ | Silk damping, baryon density |
| $< 5'$ | $\ell > 2000$ | secondary anisotropies (SZ, lensing) |

## the maps

Planck's full-sky temperature map at $5'$ resolution shows:
- Galactic foreground emission (subtracted in cosmology analysis).
- the **CMB cold spot** at $(\ell, b) \approx (208°, -56°)$, a $\sim 5\sigma$ anomaly of unknown origin.
- the **Axis of Evil**: alignment of low-$\ell$ multipoles, possibly a statistical fluke.
- otherwise: consistent with statistically isotropic Gaussian random field.

## the polarisation

the CMB is also polarised at the $\sim 10\%$ level of temperature anisotropies. decomposes into:
- **E-modes**: from scalar perturbations + reionisation.
- **B-modes**: from tensor perturbations (primordial GW) + lensing.

see [Polarization E and B modes](./Polarization%20E%20and%20B%20modes.html).

## see also

- CMB — discovery and blackbody spectrum
- [CMB power spectrum](./CMB%20power%20spectrum.html)
- [Polarization E and B modes](./Polarization%20E%20and%20B%20modes.html)
- [Photon decoupling and CMB](./Photon%20decoupling%20and%20CMB.html)
- [Linear evolution of perturbations in expanding universe](./Linear%20evolution%20of%20perturbations%20in%20expanding%20universe.html)
- [Inflation overview](./Inflation%20overview.html)
- [ΛCDM current parameters](./%CE%9BCDM%20current%20parameters.html)
- [Observational_Cosmology_MOC](../../04_Atlas/Observational_Cosmology_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./CMB%20-%20discovery%20and%20blackbody%20spectrum.html" class="backlink-item">CMB - discovery and blackbody spectrum</a></li>
    <li class="backlink-item-wrap"><a href="./CMB%20power%20spectrum.html" class="backlink-item">CMB power spectrum</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Polarization%20E%20and%20B%20modes.html" class="backlink-item">Polarization E and B modes</a></li>
    <li class="backlink-item-wrap"><a href="./Recombination.html" class="backlink-item">Recombination</a></li>
  </ul>
</div>
