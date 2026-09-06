---
layout: default
title: "Matter radiation equality"
---

**matter-radiation equality** is the moment in cosmic history when matter density first equals radiation density. marks the transition from the radiation era to the matter era. critical for structure formation: linear perturbations only grow once matter dominates.

## the condition

$$\rho_m(a_{\rm eq}) = \rho_r(a_{\rm eq})$$

with $\rho_m \propto a^{-3}$ and $\rho_r \propto a^{-4}$:
$$\rho_{m,0}\,a_{\rm eq}^{-3} = \rho_{r,0}\,a_{\rm eq}^{-4}$$
$$\boxed{\, a_{\rm eq} = \rho_{r,0}/\rho_{m,0} = \Omega_r/\Omega_m \,}$$

## the redshift

$$1 + z_{\rm eq} = 1/a_{\rm eq} = \Omega_m/\Omega_r$$

with $\Omega_r \approx 9.2 \times 10^{-5}$ (CMB photons + neutrinos) and $\Omega_m \approx 0.31$:
$$z_{\rm eq} \approx 3400$$

equivalently, $a_{\rm eq} \approx 1/3400$.

## the temperature at equality

CMB temperature scales as $T \propto 1/a$, so:
$$T_{\rm eq} = T_0(1 + z_{\rm eq}) \approx 2.725 \cdot 3400 \approx 9300\,\text{K} \approx 0.8\,\text{eV}$$

so equality happens at $\sim 1$ eV, well **before** recombination at $\sim 0.3$ eV ($z \sim 1100$). matter has been dominant for the last $\sim 380\,000 - 50\,000 = 330\,000$ years before recombination, plus all the time after.

## the time at equality

at equality, $H_{\rm eq}^2 = (8\pi G/3) \cdot 2\rho_m(a_{\rm eq}) = (16\pi G/3)\rho_{r,0}\,a_{\rm eq}^{-4}$. integrating:
$$t_{\rm eq} \approx 50\,000\,\text{years}$$

very early in cosmic history.

## why it matters: structure formation

before equality (radiation era):
- linear matter perturbations $\delta_m$ are **driven** by the photon-baryon fluid's pressure. matter perturbations grow only logarithmically.
- this is the **Meszaros effect**: matter perturbations are stalled by radiation pressure until equality.

after equality (matter era):
- matter perturbations grow as $\delta_m \propto a$.
- this is the regime in which all structures (galaxies, clusters) form.

so $a_{\rm eq}$ sets the **transfer function** for cosmological perturbations: scales that entered the horizon during radiation domination are suppressed; scales that entered during matter domination grow normally. the transition gives the **break in the matter power spectrum** at the equality scale.

equality scale (comoving):
$$k_{\rm eq} = a_{\rm eq} H_{\rm eq}/c \approx 0.01\,h\,\text{Mpc}^{-1}$$

corresponds to $\lambda_{\rm eq} \sim 100\,h^{-1}$ Mpc. observable in the matter power spectrum (SDSS, BOSS).

## why before recombination

a key fact: matter dominated **before** recombination ($z_{\rm eq} \approx 3400 > z_{\rm rec} \approx 1100$). so:
- at recombination, matter dominates the cosmic energy budget.
- the gravitational potential at recombination is set by matter, not radiation.
- this matters for the **CMB acoustic peaks**: the locations of peaks reflect the matter-dominated background.

## see also

- [Cosmic eras](../../02_Zettel/Theory/Cosmic eras.html)
- [Equation of state and density scaling](../../02_Zettel/Theory/Equation of state and density scaling.html)
- [Continuity equation](../../02_Zettel/Theory/Continuity equation.html)
- [Friedmann equations](../../02_Zettel/Theory/Friedmann equations.html)
- [FLRW metric](../../02_Zettel/Theory/FLRW metric.html)
- [Cosmic_inventory_overview](../../02_Zettel/Theory/Cosmic_inventory_overview.html)
- [Brief thermal history](../../02_Zettel/Theory/Brief thermal history.html)
- [Saha equation and recombination](../../02_Zettel/Theory/Saha equation and recombination.html)
- [Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.html)
- [Matter power spectrum and BAO](../../02_Zettel/Theory/Matter power spectrum and BAO.html)
- Q20 - matter plus radiation universe
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.html)
- [Ch 7 - Cosmology](../../01_Literature/Book/Baumann GR/Ch 7 - Cosmology.html)
