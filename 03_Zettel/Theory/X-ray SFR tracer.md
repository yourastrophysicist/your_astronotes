---
layout: "default"
title: "X-ray SFR tracer"
---
# X-ray SFR tracer

up: [[Pablo_03_Star_formation_in_galaxies]]

## where the X-rays come from

star-forming galaxies emit soft and hard X-rays from three sources:

1. **high-mass X-ray binaries (HMXBs)**: compact object (NS or BH) accreting from an O/B companion. lifetime $\sim 10$ Myr, so they track recent SF. dominate the 2–10 keV hard X-ray band
2. **low-mass X-ray binaries (LMXBs)**: accretion from a lower-mass companion. lifetime $\sim $ Gyr, so they track stellar mass rather than SFR. contaminant at low SFR
3. **diffuse hot ISM**: $T \sim 10^{6.5}$–$10^7$ K gas from supernova-heated bubbles. dominates the soft 0.5–2 keV band

in a typical star-forming galaxy, HMXBs + diffuse gas make $L_X$ roughly proportional to SFR.

## Ranalli 2003 calibration

$$\text{SFR}\;[M_\odot/\text{yr}] = 2.2 \times 10^{-40}\, L_{0.5-2\,\text{keV}}\;[\text{erg}/\text{s}]$$
$$\text{SFR}\;[M_\odot/\text{yr}] = 2.0 \times 10^{-40}\, L_{2-10\,\text{keV}}\;[\text{erg}/\text{s}]$$

Mineo 2014 updated with Chandra data and separated HMXB + gas contributions, giving a slightly steeper (non-linear) relation at low SFR because LMXB contamination becomes important.

## why use X-rays

- **extinction-free** for $A_V < 100$ (dust is transparent above $\sim 1$ keV)
- probes deep into dusty starbursts where even IR SFR is uncertain due to AGN contribution
- cross-check: if $L_X$ / $L_{\text{IR}}$ deviates from the SF calibration, AGN contamination is likely

## limitations

- **AGN contamination**: a single bright AGN point source can dominate $L_X$. must be identified and subtracted via morphology, variability, or spectral shape
- **metallicity dependence**: HMXB formation efficiency rises at low $Z$ by factor $\sim 5$ (Lehmer 2016). low-$Z$ dwarfs and high-$z$ LBGs can have X-ray SFR overestimated by $\times 5$
- **sensitivity**: even Chandra and XMM need deep exposures. at $z > 1$ only the most X-ray-luminous SFGs are detected individually; stacking is common

## cosmic evolution

the relation between $L_X$ and SFR evolves: $L_X / \text{SFR} \propto (1+z)^\beta$ with $\beta \sim 0.5$–$1$ out to $z \sim 3$, driven by the metallicity-HMXB link. this is relevant for reionization: high-$z$ galaxy X-rays may heat the IGM.

## connections

- dual-band check: [[IR SFR tracer]]
- AGN identification: X-ray colour, SED fitting
- other extinction-free tracer: [[Radio SFR tracer]]
- comparison: [[SFR tracer comparison]]

## key references

- Ranalli, Comastri, Setti 2003 A&A 399, 39
- Mineo, Gilfanov, Sunyaev 2012, 2014 (Chandra HMXB calibration)
- Lehmer et al. 2016 ApJ 825, 7 (metallicity dependence)



<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![X-ray binary|500](https://commons.wikimedia.org/wiki/Special:FilePath/Microquasar_GRO_J1655-40.jpg?width=600)
*Lead figure of the Wikipedia article X-ray binary* ([Commons file page](https://commons.wikimedia.org/wiki/File:Microquasar_GRO_J1655-40.jpg), ESA, NASA, and Felix Mirabel (French Atomic Energy Commission and Institute for Astronomy and Space Physics/Conicet of A, CC BY 4.0, as used on the Wikipedia article [X-ray binary](https://en.wikipedia.org/wiki/X-ray_binary))

- **X-ray binary**. "X-ray binaries are a class of binary stars that are luminous in X-rays. The X-rays are produced by matter falling from one component, called the donor (usually a relatively common main sequence star), to the other component, called the accretor, which can be a white dwarf, neutron star or black hole. The infalling matter releases gravitational potential energy, up to 30 percent of its rest mass, as X-rays." ([Wikipedia](https://en.wikipedia.org/wiki/X-ray_binary))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## Linked References

- [[Free-free continuum]]
- [[Radio SFR tracer]]
- [[SFR tracer comparison]]
- [[Observational_Cosmology_MOC]]


