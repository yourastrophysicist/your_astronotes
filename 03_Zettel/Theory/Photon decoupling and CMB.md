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

once recombination depletes $n_e$ by orders of magnitude (Saha equation, see [[Saha equation and recombination]]), $\Gamma_\gamma$ drops below $H$, and **photons decouple**. this happens at:
$$z_{\rm dec} \approx 1100, \qquad T_{\rm dec} \approx 0.27\,\text{eV} \approx 3000\,\text{K}$$

note the temperature is well below the H binding energy of 13.6 eV. why? because there are about $10^9$ photons per baryon, and even small numbers of high-energy photons in the Wien tail can ionize hydrogen. you need $T$ low enough that the Wien-tail population is suppressed below the (small) baryon density. → see [[Saha equation and recombination]].

---

## the last scattering surface

at $z \approx 1100$, photons last scattered off free electrons. since then they free-streamed without interaction. we see them today as the CMB, coming from a 2D shell at $z = 1100$ called the **last scattering surface**.

the comoving distance to the last scattering surface (in flat ΛCDM):
$d_C(z = 1100) \approx 14$ Gpc

the horizon at last scattering subtends about **1° on the sky** today, see [[Standard model problems]].

---

## the CMB temperature today

the photon temperature redshifts as $T \propto 1/a = (1+z)$:
$$T(z) = T_0 (1+z)$$

with $T_0 = 2.725$ K today, this gives $T(z=1100) \approx 3000$ K, close to but slightly above the recombination temperature, consistent with the Saha analysis.

the CMB is the most perfect blackbody we have measured, with no spectral distortions detected. → see [[Cosmic_inventory_photons]].

---

## CMB anisotropies

the CMB is *almost* uniform but has $\Delta T/T \sim 10^{-5}$ anisotropies. these encode:
- **temperature fluctuations** at the last scattering surface, set by primordial perturbations $\delta\rho/\rho$
- **acoustic oscillations** in the photon-baryon fluid before decoupling, imprinted as a peak structure in the angular power spectrum $C_\ell$
- **polarization** patterns (E-modes from scalar perturbations, B-modes from tensor perturbations)
- **secondary effects** - Sachs-Wolfe (gravitational redshifting in evolving potentials), integrated SW (along the line of sight), Sunyaev-Zel'dovich (Compton scattering off hot cluster electrons), etc.

→ see [[Cosmic_inventory_photons]] for the temperature anisotropy maps and the power spectrum.

---

## why this is so important

the CMB is our **earliest direct observation** of the universe, a snapshot of the matter distribution at $z = 1100$. its anisotropies encode:
- the matter and baryon densities ($\Omega_m h^2$, $\Omega_b h^2$) through peak heights
- the geometry ($\Omega_K$) through the position of the first peak
- the optical depth to recombination $\tau$ through low-$\ell$ polarization
- the spectral tilt and amplitude of primordial perturbations ($n_s, A_s$), direct constraints on inflation
- the dark energy density $\Omega_\Lambda$ through the late-time integrated SW effect
- the neutrino mass $\sum m_\nu$ through the damping tail and lensing

basically: the CMB is the most information-rich cosmological observation we have. → see [[Cosmic_inventory_overview]].

---

## where it goes wrong

- decoupling happens when $\Gamma_T = n_e\sigma_Tc$ drops below $H$, not when all atoms have recombined.
- the last scattering surface has a thickness of about $\Delta z \approx 80$.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Cosmic microwave background|500](https://commons.wikimedia.org/wiki/Special:FilePath/Cosmic_Microwave_Background_%28CMB%29.jpeg?width=600)
*This map of the Cosmic Microwave Background radiation, imprinted on the sky when the universe was 370,000 years old, shows tiny temperature fluctuations that correspond to regions of slightly different densities* ([Commons file page](https://commons.wikimedia.org/wiki/File:Cosmic_Microwave_Background_%28CMB%29.jpeg), ESA and the Planck Collaboration, CC BY 4.0, as used on the Wikipedia article [Cosmic microwave background](https://en.wikipedia.org/wiki/Cosmic_microwave_background))

- **Cosmic microwave background**. "The cosmic microwave background (CMB, CMBR), or relic radiation, is microwave radiation that fills all space in the observable universe. With a standard optical telescope, the background space between stars and galaxies is almost completely dark. However, a sufficiently sensitive radio telescope detects a faint background glow that is almost uniform and is not associated with any star, galaxy, or other object." ([Wikipedia](https://en.wikipedia.org/wiki/Cosmic_microwave_background))
- **Cosmic Microwave Background Anisotropies**. "Cosmic microwave background (CMB) temperature anisotropies have and will continue to revolutionize our understanding of cosmology." ([arXiv:astro-ph/0110414](https://arxiv.org/abs/astro-ph/0110414))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Fundamentals_Astrophysics_Cosmology_MOC]]
- [[Saha equation and recombination]]
- [[Cosmic_inventory_photons]]
- [[Cosmic_inventory_overview]]
- [[Brief thermal history]]
- [[Decoupling and freeze-out]]



## Linked References

- [[CMB - discovery and blackbody spectrum]]
- [[CMB Spectral Distortions - What They Are and Where They Come From]]
- [[CMB anisotropies]]
- [[CMB power spectrum]]
- [[Case A vs Case B recombination]]
- [[Cosmic_inventory_photons]]
- [[Cosmic_inventory_photons_derivation]]
- [[Cosmological redshift]]
- [[Decoupling]]
- [[Hydrogen spectral series]]
- [[Jeans analysis in expanding universe]]
- [[Matter radiation equality]]
- [[Recombination]]
- [[Reionization]]
- [[Rydberg-Ritz formula]]
- [[Saha equation and recombination]]
- [[Transition epochs]]
- [[Fundamentals_Astrophysics_Cosmology_MOC]]


