---
layout: default
title: "Cosmic_inventory_photons"
---

photons in the universe come in many bands, each carrying its own cosmic background:

<img src="{{ "/assets/images/intro-08.png" | relative_url }}" alt="intro-08" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

- **CGB**: cosmic gamma-ray background
- **CXB**: cosmic X-ray background (see [Lab_High-Energy_MOC](../../00_Atlas/Lab_High-Energy_MOC.html))
- **CUVOB**: cosmic UV/optical background (stars and AGN)
- **CIB**: cosmic infrared background (dust-reprocessed star formation)
- **CMB**: cosmic microwave background — **dominates by number** ($\sim 99\%$ of all photons)
- **CRB**: cosmic radio background

so for a photon census, "the photons of the universe" means essentially "the CMB."

---

## the CMB blackbody spectrum

the CMB is the most perfect blackbody we have ever measured. the Planck spectrum:
$$I_\nu = \frac{2h\nu^3}{c^2} \frac{1}{e^{h\nu/k_B T} - 1}$$

best-fit temperature from FIRAS on COBE:
$$T_0 = 2.725 \pm 0.002~\text{K} \quad (95\%~\text{CL})$$

no spectral distortions detected, except $y$-distortions from the Sunyaev-Zel'dovich effect through clusters.

<img src="{{ "/assets/images/intro-09.png" | relative_url }}" alt="intro-09" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

datasets that confirmed the Planck shape over multiple decades of frequency: FIRAS (COBE), DMR (COBE), LBL ground+balloon, Princeton ground+balloon, UBC sounding rocket, cyanogen optical lines. all on the same 2.726 K curve.

---

## photon density and $\Omega_{0\gamma}$

setting $c = k_B = \hbar = 1$ and integrating the Planck function:

energy density:
$$\rho_\gamma = \frac{4\pi}{c}\int d\nu\, I_\nu = \frac{8\pi h}{c^3}\int d\nu\, \frac{\nu^3}{e^{h\nu/k_B T} - 1} \;\to\; \rho_\gamma = \frac{\pi^2}{15} T^4$$

number density:
$$n_\gamma = \frac{4\pi}{c}\int d\nu\, \frac{I_\nu}{h\nu} = \frac{8\pi}{c^3}\int d\nu\, \frac{\nu^2}{e^{h\nu/k_B T} - 1} \;\to\; n_\gamma = \frac{2\zeta(3)}{\pi^2} T^3 \simeq 422~\text{cm}^{-3}$$

(at $T = T_0 = 2.725$ K)

<img src="{{ "/assets/images/intro-10.png" | relative_url }}" alt="intro-10" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

with the critical density $\rho_{0,\rm crit} = 3H_0^2/(8\pi G) \simeq 8.1\times10^{-11}\,h^2~\text{eV}^4$ and $H_0 = 67.4 \pm 0.5$ km/s/Mpc:

$$\boxed{\,\Omega_{0\gamma} = \frac{\rho_{0\gamma}}{\rho_{0,\rm crit}} = \frac{\pi^2}{15}(2.725\,\text{K})^4 \frac{1}{8.1\times10^{-11}\,h^2\,\text{eV}^4} \simeq 2.47 \times 10^{-5}\,h^{-2}\,}$$

so today the photon background is essentially negligible in the energy budget. but at $z \gtrsim 3300$ (matter-radiation equality, $a_{eq}$) it dominated everything, since $\rho_\gamma \propto a^{-4}$ while $\rho_m \propto a^{-3}$.

 
---

## CMB spectral distortions

read more: CMB Spectral Distortions — What They Are and Where They Come From 

even though the CMB looks like a perfect blackbody, the standard model predicts tiny departures from blackbody, of order $\mu/T \sim 1.9 \times 10^{-8}$. so far we only have upper bounds:

$$\frac{\Delta I_\nu}{I_\nu} < 10^{-4}, \quad y < 1.5\times 10^{-5}, \quad \mu/T < 9 \times 10^{-5} \quad (95\%~\text{CL})$$

a $\mu$-distortion would mean a chemical potential in the photon distribution
$$f = \frac{1}{e^{(h\nu - \mu)/k_BT} - 1}$$
and a $y$-distortion would be Compton scattering by hot electrons (SZ-like).

<img src="{{ "/assets/images/intro-11.png" | relative_url }}" alt="intro-11" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## CMB anisotropies

zoom in on the same spectrum spatially, and it is *not* perfectly smooth. Planck (2018) measured the temperature and polarization full-sky maps at $\sim 5$ arcmin resolution:

<img src="{{ "/assets/images/intro-12.png" | relative_url }}" alt="intro-12" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

at the level of micro-Kelvins, $\Delta T/\bar T \sim 10^{-5}$. the COBE-DMR map from 1994 was the first detection:

<img src="{{ "/assets/images/intro-13.png" | relative_url }}" alt="intro-13" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

$$\frac{\Delta T}{\bar T}(t_0,\hat n) \equiv \frac{T(t_0,\hat n) - \bar T}{\bar T} \simeq \frac{35\,\mu K}{2.725\,\text{K}} \simeq 10^{-5}$$

these tiny anisotropies are the seeds of every galaxy and cluster I will ever observe.

---

## see also

- [Cosmic_inventory_photons_derivation](../../02_Zettel/Theory/Cosmic_inventory_photons_derivation.html)
- CMB Spectral Distortions — What They Are and Where They Come From
- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Cosmic_inventory_overview](../../02_Zettel/Theory/Cosmic_inventory_overview.html)
- [Brief thermal history](../../02_Zettel/Theory/Brief thermal history.html)
- [Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.html)
