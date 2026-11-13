---
layout: "default"
title: "Non-parametric galaxy morphology metrics"
---
traditional visual morphological classification (Hubble tuning fork) is subjective and fails at high redshifts ($z > 1$), where galaxies are disturbed and clumpy. non-parametric structural metrics quantify galaxy light distributions directly from digital images without assuming an analytical profile (such as a Sérsic profile).

## the CAS system (Conselice 2003)

1. **Concentration ($C$)**:
   ratio of radii enclosing $80\%$ and $20\%$ of the total Petrosian flux:
   $$C = 5 \log_{10}\left( \frac{r_{80}}{r_{20}} \right)$$
   early-type ellipticals have $C > 4$. late-type spirals have $C < 3$.
2. **Asymmetry ($A$)**:
   normalized difference between the original galaxy image $I$ and the image rotated by $180^\circ$ ($I_{180}$):
   $$A = \frac{\sum \lvert I - I_{180}\rvert - B_{180}}{2 \sum \lvert I\rvert}$$
   where $B_{180}$ is the background noise correction. high values ($A > 0.35$) identify ongoing mergers and gravitational interactions.
3. **Smoothness / Clumpiness ($S$)**:
   difference between the original image and a smoothed version with filter width $\sigma = 0.2 r_{\text{petro}}$:
   $$S = 10 \frac{\sum (I - I_s) - B_s}{\sum \lvert I\rvert}$$
   measures star-forming clumps and H II regions. zero for smooth ellipticals.

## the Gini coefficient and M20 system (Lotz et al. 2004)

### 1. the Gini coefficient ($G$)
measures the equality of the light distribution across all pixels, independent of the galaxy's spatial center:

$$G = \frac{1}{2 \bar{X} n (n - 1)} \sum_{i=1}^n \sum_{j=1}^n \lvert X_i - X_j\rvert$$

where $X_i$ are pixel flux values sorted in ascending order.
- $G = 0$: uniform surface brightness across all pixels.
- $G = 1$: all light concentrated in a single pixel.

### 2. second order moment of the brightest 20% of light ($M_{20}$)
measures spatial dispersion of the brightest clumps:

$$M_{20} = \log_{10}\left( \frac{\sum_i M_i}{M_{\text{tot}}} \right) \quad \text{for } \sum_i f_i \le 0.2 f_{\text{tot}}$$

where $M_i = f_i [(x_i - x_c)^2 + (y_i - y_c)^2]$ is the spatial second-order moment.
- galaxies with multiple separated bright nuclei (mergers) have high (less negative) $M_{20} > -1.1$.
- galaxies with a single central nucleus have low (more negative) $M_{20} < -1.6$.

in the $G - M_{20}$ diagnostic plane, mergers separate clearly from normal Hubble sequence disks and ellipticals:

$$\text{Merger boundary}: G > -0.14 M_{20} + 0.33$$

## where it goes wrong

- the metrics depend on resolution and signal-to-noise. they must be measured at the same physical resolution.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Galaxy morphological classification|500](https://commons.wikimedia.org/wiki/Special:FilePath/Hubble_Tuning_Fork_diagram.svg?width=600)
*Lead figure of the Wikipedia article Galaxy morphological classification* ([Commons file page](https://commons.wikimedia.org/wiki/File:Hubble_Tuning_Fork_diagram.svg), Cosmogoblin, CC0, as used on the Wikipedia article [Galaxy morphological classification](https://en.wikipedia.org/wiki/Galaxy_morphological_classification))

- **Galaxy morphological classification**. "Galaxy morphological classification is a system used by astronomers to divide galaxies into groups based on their visual appearance, shape, structure, and distribution of light. There are several schemes in use by which galaxies can be classified according to their morphologies, the most famous being the Hubble sequence, devised by Edwin Hubble and later expanded by Gérard de Vaucouleurs and Allan Sandage." ([Wikipedia](https://en.wikipedia.org/wiki/Galaxy_morphological_classification))
- **The Evolution of Galaxy Structure over Cosmic Time**. "I present a comprehensive review of the evolution of galaxy structure in the universe from the first galaxies we can currently observe at z~6 down to galaxies we see in the local universe. I further address how these changes reveal galaxy formation processes that galaxy structural analyses can provide." ([arXiv:1403.2783](https://arxiv.org/abs/1403.2783))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Observational_Cosmology_MOC]]
- [[Pablo_05_Galaxies_at_cosmological_distances]]
- [[Pablo_02_Statistical_properties_of_galaxies]]
- [[Galaxy morphology vs physical properties]]



## Linked References

- [[Observational_Cosmology_MOC]]


