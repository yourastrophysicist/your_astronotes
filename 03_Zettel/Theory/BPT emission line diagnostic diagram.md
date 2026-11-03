---
layout: "default"
title: "BPT emission line diagnostic diagram"
---
Baldwin, Phillips, & Terlevich (BPT, 1981) introduced optical emission line flux ratio diagrams to determine the primary ionizing radiation source in galaxies without relying on distance or reddening corrections.

## the canonical bpt diagnostic

the classic BPT diagram plots two pairs of neighboring recombination and collisionally excited forbidden lines:

$$\text{Vertical axis}: \log_{10}\left( \frac{[\text{O III}] \,\lambda 5007}{\text{H}\beta} \right)$$
$$\text{Horizontal axis}: \log_{10}\left( \frac{[\text{N II}] \,\lambda 6584}{\text{H}\alpha} \right)$$

### advantages of line selection
- $[\text{O III}] / \text{H}\beta$ and $[\text{N II}] / \text{H}\alpha$ line pairs have very small wavelength separations ($147\text{ \AA}$ and $21\text{ \AA}$ respectively), making the ratios insensitive to interstellar dust reddening and flux calibration errors.
- $[\text{O III}]$ (ionization potential $35.1\text{ eV}$) traces ionization hardness.
- $[\text{N II}]$ (ionization potential $14.5\text{ eV}$) traces low-ionization gas, electron temperature, and gas-phase metallicity.

## demographic demarcation curves

galaxies separate into distinct branches:

1. **Star-forming sequence (H II regions)**:
   ionized by young OB stars whose spectra have a sharp Wien exponential cutoff at the He II ionization edge ($54.4\text{ eV}$). this limits the production of collisionally excited high-ionization forbidden lines.
2. **Kewley et al. (2001) extreme starburst boundary**:
   the theoretical upper limit achievable by pure stellar photoionization:
   $$\log_{10}\left( \frac{[\text{O III}]}{\text{H}\beta} \right) = \frac{0.61}{\log_{10}([\text{N II}] / \text{H}\alpha) - 0.47} + 1.19$$
3. **Kauffmann et al. (2003) empirical boundary**:
   derived from SDSS data to separate pure star-forming galaxies from composite systems:
   $$\log_{10}\left( \frac{[\text{O III}]}{\text{H}\beta} \right) = \frac{0.61}{\log_{10}([\text{N II}] / \text{H}\alpha) - 0.05} + 1.30$$
4. **AGN branch (above Kewley curve)**:
   accretion disks produce a hard power-law ionizing continuum ($F_\nu \propto \nu^{-\alpha}$) extending into the extreme UV and X-rays, producing extended partially ionized zones.
   - **Seyferts**: high $[\text{O III}] / \text{H}\beta$ and high $[\text{N II}] / \text{H}\alpha$.
   - **LINERs (Low-Ionization Nuclear Emission-line Regions)**: low $[\text{O III}] / \text{H}\beta$, high $[\text{N II}] / \text{H}\alpha$, excited by low-luminosity AGN or post-AGB stellar populations.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Low-ionization nuclear emission-line region|500](https://commons.wikimedia.org/wiki/Special:FilePath/M104_ngc4594_sombrero_galaxy_hi-res.jpg?width=600)
*Lead figure of the Wikipedia article Low-ionization nuclear emission-line region* ([Commons file page](https://commons.wikimedia.org/wiki/File:M104_ngc4594_sombrero_galaxy_hi-res.jpg), NASA/ESA and The Hubble Heritage Team (STScI/AURA), Public domain, as used on the Wikipedia article [Low-ionization nuclear emission-line region](https://en.wikipedia.org/wiki/Low-ionization_nuclear_emission-line_region))

- **Low-ionization nuclear emission-line region**. "A low-ionization nuclear emission-line region (LINER) is a type of galactic nucleus that is defined by its spectral line emission. The spectra typically include line emission from weakly ionized or neutral atoms, such as O, O+, N+, and S+. Conversely, the spectral line emission from strongly ionized atoms, such as O++, Ne++, and He+, is relatively weak." ([Wikipedia](https://en.wikipedia.org/wiki/Low-ionization_nuclear_emission-line_region))
- **Understanding Galaxy Evolution through Emission Lines**. "We review the use of emission-lines for understanding galaxy evolution, focusing on excitation source, metallicity, ionization parameter, ISM pressure and electron density. We show that the UV, optical and infrared contain complementary diagnostics that can probe the conditions within different nebular ionization zones." ([arXiv:1910.09730](https://arxiv.org/abs/1910.09730))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Observational_Cosmology_MOC]]
- [[Pablo_04_Nuclear_activity_in_galaxies]]
- [[AGN taxonomy unified model and feedback]]
- Forbidden line diagnostics of electron temperature and density



## Linked References

- [[AGN taxonomy unified model and feedback]]
- [[Observational_Cosmology_MOC]]


