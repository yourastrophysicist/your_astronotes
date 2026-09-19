---
layout: "default"
title: "Photon decoupling and CMB"
---
when the universe cools below $\sim 0.3$ eV, recombination depletes the free electron density, and **Thomson scattering** between photons and electrons becomes inefficient. photons **decouple** from matter and free-stream from then on. we see them today as the CMB.

---

## why $T_{\rm dec} \sim 0.3$ eV, not 13.6 eV

same logic as BBN. the rate of Thomson scattering for a photon is
$$\Gamma_\gamma = n_e \sigma_T c$$

where $n_e$ is the free-electron number density and $\sigma_T = 6.65 \times 10^{-25}$ cm$^2$ is the Thomson cross-section.

while $X_e \sim 1$ (full ionization, $T \gg 0.3$ eV), $\Gamma_\gamma \gg H$, photons are tightly coupled.

once recombination depletes $n_e$ by orders of magnitude (Saha equation, see [Saha equation and recombination](Saha%20equation%20and%20recombination.html)), $\Gamma_\gamma$ drops below $H$ — and **photons decouple**. this happens at:
$$z_{\rm dec} \approx 1100, \qquad T_{\rm dec} \approx 0.27\,\text{eV} \approx 3000\,\text{K}$$

note the temperature is well below the H binding energy of 13.6 eV. why? because there are about $10^9$ photons per baryon, and even small numbers of high-energy photons in the Wien tail can ionize hydrogen. you need $T$ low enough that the Wien-tail population is suppressed below the (small) baryon density. → see [Saha equation and recombination](Saha%20equation%20and%20recombination.html).

---

## the last scattering surface

at $z \approx 1100$, photons last scattered off free electrons. since then they free-streamed without interaction. we see them today as the CMB, coming from a 2D shell at $z = 1100$ called the **last scattering surface**.

the comoving distance to the last scattering surface (in flat ΛCDM):
$$d_C(z = 1100) \approx 14$ Gpc

the horizon at last scattering subtends about **1° on the sky** today — see [Standard model problems](Standard%20model%20problems.html).

---

## the CMB temperature today

the photon temperature redshifts as $T \propto 1/a = (1+z)$:
$$T(z) = T_0 (1+z)$$

with $T_0 = 2.725$ K today, this gives $T(z=1100) \approx 3000$ K — close to but slightly above the recombination temperature, consistent with the Saha analysis.

the CMB is the most perfect blackbody we have measured, with no spectral distortions detected. → see [Cosmic_inventory_photons](Cosmic_inventory_photons.html).

---

## CMB anisotropies

the CMB is *almost* uniform but has $\Delta T/T \sim 10^{-5}$ anisotropies. these encode:
- **temperature fluctuations** at the last scattering surface, set by primordial perturbations $\delta\rho/\rho$
- **acoustic oscillations** in the photon-baryon fluid before decoupling, imprinted as a peak structure in the angular power spectrum $C_\ell$
- **polarization** patterns (E-modes from scalar perturbations, B-modes from tensor perturbations)
- **secondary effects** — Sachs-Wolfe (gravitational redshifting in evolving potentials), integrated SW (along the line of sight), Sunyaev-Zel'dovich (Compton scattering off hot cluster electrons), etc.

→ see [Cosmic_inventory_photons](Cosmic_inventory_photons.html) for the temperature anisotropy maps and the power spectrum.

---

## why this is so important

the CMB is our **earliest direct observation** of the universe — a snapshot of the matter distribution at $z = 1100$. its anisotropies encode:
- the matter and baryon densities ($\Omega_m h^2$, $\Omega_b h^2$) through peak heights
- the geometry ($\Omega_K$) through the position of the first peak
- the optical depth to recombination $\tau$ through low-$\ell$ polarization
- the spectral tilt and amplitude of primordial perturbations ($n_s, A_s$) — direct constraints on inflation
- the dark energy density $\Omega_\Lambda$ through the late-time integrated SW effect
- the neutrino mass $\sum m_\nu$ through the damping tail and lensing

basically: the CMB is the most information-rich cosmological observation we have. → see [Cosmic_inventory_overview](Cosmic_inventory_overview.html).

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Saha equation and recombination](Saha%20equation%20and%20recombination.html)
- [Cosmic_inventory_photons](Cosmic_inventory_photons.html)
- [Cosmic_inventory_overview](Cosmic_inventory_overview.html)
- [Brief thermal history](Brief%20thermal%20history.html)
- [Decoupling and freeze-out](Decoupling%20and%20freeze-out.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (18)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="CMB%20-%20discovery%20and%20blackbody%20spectrum.html" class="backlink-item">CMB - discovery and blackbody spectrum</a></li>
    <li class="backlink-item-wrap"><a href="CMB%20Spectral%20Distortions%20-%20What%20They%20Are%20and%20Where%20They%20Come%20From.html" class="backlink-item">CMB Spectral Distortions - What They Are and Where They Come From</a></li>
    <li class="backlink-item-wrap"><a href="CMB%20anisotropies.html" class="backlink-item">CMB anisotropies</a></li>
    <li class="backlink-item-wrap"><a href="CMB%20power%20spectrum.html" class="backlink-item">CMB power spectrum</a></li>
    <li class="backlink-item-wrap"><a href="Case%20A%20vs%20Case%20B%20recombination.html" class="backlink-item">Case A vs Case B recombination</a></li>
    <li class="backlink-item-wrap"><a href="Cosmic_inventory_photons.html" class="backlink-item">Cosmic_inventory_photons</a></li>
    <li class="backlink-item-wrap"><a href="Cosmic_inventory_photons_derivation.html" class="backlink-item">Cosmic_inventory_photons_derivation</a></li>
    <li class="backlink-item-wrap"><a href="Cosmological%20redshift.html" class="backlink-item">Cosmological redshift</a></li>
    <li class="backlink-item-wrap"><a href="Decoupling.html" class="backlink-item">Decoupling</a></li>
    <li class="backlink-item-wrap"><a href="Hydrogen%20spectral%20series.html" class="backlink-item">Hydrogen spectral series</a></li>
    <li class="backlink-item-wrap"><a href="Jeans%20analysis%20in%20expanding%20universe.html" class="backlink-item">Jeans analysis in expanding universe</a></li>
    <li class="backlink-item-wrap"><a href="Matter%20radiation%20equality.html" class="backlink-item">Matter radiation equality</a></li>
    <li class="backlink-item-wrap"><a href="Recombination.html" class="backlink-item">Recombination</a></li>
    <li class="backlink-item-wrap"><a href="Reionization.html" class="backlink-item">Reionization</a></li>
    <li class="backlink-item-wrap"><a href="Rydberg-Ritz%20formula.html" class="backlink-item">Rydberg-Ritz formula</a></li>
    <li class="backlink-item-wrap"><a href="Saha%20equation%20and%20recombination.html" class="backlink-item">Saha equation and recombination</a></li>
    <li class="backlink-item-wrap"><a href="Transition%20epochs.html" class="backlink-item">Transition epochs</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
  </ul>
</div>

