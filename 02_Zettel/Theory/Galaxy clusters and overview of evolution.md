---
layout: default
title: "Galaxy clusters and overview of evolution"
---

**galaxy clusters** are the largest gravitationally bound structures in the universe. they contain $10^{14}$–$10^{15}\, M_\odot$ in dark matter, hot gas, and (a relatively small fraction in) galaxies. they are the cosmological "lighthouses" — their abundance and evolution trace the growth of cosmic structure.

beyond clusters, the universe is structured into **superclusters** (loosely bound), **filaments** (the cosmic web), and **voids** — the large-scale structure that is the modern observational frontier.

---

## the structural pyramid

| structure | typical mass | typical scale |
|---|---|---|
| individual galaxy | $10^{8-12}\, M_\odot$ | 10-100 kpc |
| group | $10^{12-14}\, M_\odot$ | $\sim 1$ Mpc |
| cluster | $10^{14-15}\, M_\odot$ | 1-10 Mpc |
| supercluster | $10^{15-16}\, M_\odot$ | 10-100 Mpc |
| filaments | varies | 10-100 Mpc long |
| voids | very low density | $\sim$ 100 Mpc across |

galaxies are tiny dots in this hierarchy. clusters are where most of the *baryons in galaxies* end up, and where most of the **hot gas** in the universe lives.

---

## components of a galaxy cluster

three roughly comparable mass components:

| component | mass fraction | observable |
|---|---|---|
| **dark matter** | $\sim 85\%$ | gravitational lensing, dynamics |
| **hot intracluster medium (ICM)** | $\sim 13\%$ | X-ray emission, SZ effect |
| **galaxies (stars)** | $\sim 2\%$ | optical/NIR imaging |

the **galaxies are the smallest mass component**! most baryons in clusters are in the ICM — diffuse hot gas at $T \sim 10^7$–$10^8$ K, emitting X-rays via thermal Bremsstrahlung (see [Bremsstrahlung](../../02_Zettel/Theory/Bremsstrahlung.html)).

---

## the intracluster medium

a cluster contains $\sim 10^{13}-10^{14}\, M_\odot$ of hot, diffuse gas:
- $T \sim 10$ keV ($\sim 10^8$ K) for massive clusters
- $n_e \sim 10^{-3}-10^{-2}$ cm$^{-3}$ in the cores
- emits **thermal Bremsstrahlung** in the 0.5-10 keV X-ray band

X-ray observations (Chandra, XMM-Newton) directly map the ICM. derived quantities:
- **temperature profile** $T(r)$
- **density profile** $n_e(r)$
- **gas mass** $M_{\rm gas}$ → $\Omega_b/\Omega_m$
- **total mass** via hydrostatic equilibrium (assuming the gas is in HSE)
- **metallicity** of the ICM ($\sim 0.3 Z_\odot$, enriched by SNe in cluster galaxies)

→ see [Lab_High-Energy_MOC](../../00_Atlas/Lab_High-Energy_MOC.html) for the X-ray instrumentation.

---

## the Sunyaev-Zel'dovich (SZ) effect

CMB photons passing through the hot ICM get **inverse Compton scattered** by the hot electrons, distorting the CMB blackbody spectrum:
- **thermal SZ**: $\Delta T/T \sim -2 y$ at low frequencies, $+ 2 y$ at high frequencies, where $y$ is the **Compton y-parameter** $\propto n_e T_e$ integrated along the line of sight
- **kinetic SZ**: from the bulk motion of the cluster (much smaller)

SZ is **redshift-independent**: the SZ flux depends only on the cluster's gas content, not on its distance. this makes SZ surveys (Planck, ACT, SPT) excellent for cluster cosmology — sensitive to clusters at any redshift.

---

## the role of clusters in cosmology

cluster abundance is a **direct probe of cosmological parameters**:
- the **mass function** $dn/dM$ of clusters depends on $\sigma_8$ (the amplitude of matter perturbations on cluster scales) and $\Omega_m$
- the **redshift evolution** $dn/dM(z)$ probes the growth factor $D(z)$
- both are sensitive to dark matter and dark energy

→ see [Press-Schechter halo mass function](../../02_Zettel/Theory/Press-Schechter halo mass function.html) and [Growth factor D(z)](../../02_Zettel/Theory/Growth factor D(z).md).

cluster cosmology is competitive with CMB and BAO for $\sigma_8$, $\Omega_m$, and is one of the prime science drivers of upcoming surveys (eROSITA, Euclid, Rubin Observatory).

---

## galaxy evolution in clusters

clusters affect the galaxies they contain:
- **morphology-density relation**: cluster cores have many E and S0, few S
- **gas stripping**: spirals falling into the cluster lose their gas via ram pressure
- **suppression of star formation**: cluster galaxies have lower SFR than field galaxies of the same mass
- **brightest cluster galaxy (BCG)**: at the cluster center, often a giant elliptical, grown by mergers and cooling flows

→ see [Galaxy morphology vs physical properties](../../02_Zettel/Theory/Galaxy morphology vs physical properties.html).

---

## the cosmic web

beyond individual clusters, the **large-scale structure** consists of:
- **clusters** at the nodes
- **filaments** connecting them (containing most of the cosmic baryons in the **WHIM**)
- **voids** between filaments

the cosmic web is the result of gravitational growth of primordial perturbations (see [Linear evolution of perturbations in expanding universe](../../02_Zettel/Theory/Linear evolution of perturbations in expanding universe.html)). N-body simulations (Millennium, IllustrisTNG, EAGLE) reproduce the observed structure remarkably well.

→ see [Matter power spectrum and BAO](../../02_Zettel/Theory/Matter power spectrum and BAO.html) for the statistical description.

---

## an overview of galaxy evolution

a brief summary of how galaxies evolve from $z \sim 10$ to today:

1. **z = 10-20**: small dark matter halos collapse and accrete primordial gas
2. **z = 6-10**: first stars (Pop III) form in primordial halos. reionization begins. first galaxies are detected by JWST as faint Lyman-break galaxies.
3. **z = 2-4**: cosmic noon. peak of cosmic star formation rate. major mergers shape morphology. AGN are very active.
4. **z = 1-2**: emergence of the **galaxy main sequence** of star formation. quiescent galaxies start appearing on the red sequence.
5. **z = 0-1**: declining star formation. cluster galaxies are quenched. galaxies drift along the main sequence or onto the red sequence.

→ see [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.html) for the integrated SFR vs cosmic time (the Madau-Dickinson plot).

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Galaxies in the local universe](../../02_Zettel/Theory/Galaxies in the local universe.html)
- [Hubble morphological sequence](../../02_Zettel/Theory/Hubble morphological sequence.html)
- [Galaxy morphology vs physical properties](../../02_Zettel/Theory/Galaxy morphology vs physical properties.html)
- [Spectral energy distributions](../../02_Zettel/Theory/Spectral energy distributions.html)
- [Press-Schechter halo mass function](../../02_Zettel/Theory/Press-Schechter halo mass function.html)
- [Linear evolution of perturbations in expanding universe](../../02_Zettel/Theory/Linear evolution of perturbations in expanding universe.html)
- [Matter power spectrum and BAO](../../02_Zettel/Theory/Matter power spectrum and BAO.html)
- [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.html)
- [Bremsstrahlung](../../02_Zettel/Theory/Bremsstrahlung.html) — for the ICM X-ray emission
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.html)
