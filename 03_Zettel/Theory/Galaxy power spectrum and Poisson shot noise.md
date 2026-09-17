---
layout: "default"
title: "Galaxy power spectrum and Poisson shot noise"
---
{% raw %}
# Galaxy power spectrum and Poisson shot noise

The three-dimensional galaxy power spectrum $P_g(k)$ is the Fourier-space dual of the spatial two-point correlation function $\xi(r)$. Because galaxies are discrete point particles rather than a continuous fluid, the observed galaxy power spectrum contains an unavoidable Poisson shot noise contribution.

## The Continuous Density Contrast Field

For a continuous field $\delta(x)$, the Fourier transform is:
$$\delta(k) = \int \delta(x) e^{-i k \cdot x} \, d^3x$$

By statistical homogeneity and isotropy:
$$\mathbb{E}[\delta(k)\delta^*(k')] = (2\pi)^3 P(k) \delta_D(k - k')$$

By the Wiener-Khinchin theorem, $P(k)$ is the Fourier transform of $\xi(r)$:
$$P(k) = \int \xi(r) e^{-i k \cdot r} \, d^3r = 4\pi \int_0^\infty r^2 \xi(r) \frac{\sin(kr)}{kr} \, dr$$

## Point Process Formalism and Discrete Sampling

Galaxies represent a discrete realization sampled from the continuous underlying matter field. The microscopic galaxy number density is a sum of Dirac delta functions:
$$n_g(x) = \sum_{i=1}^N \delta_D(x - x_i)$$

The discrete density contrast is:
$$\delta_g(x) = \frac{n_g(x) - \bar{n}}{\bar{n}} = \frac{1}{\bar{n}}\sum_{i=1}^N \delta_D(x - x_i) - 1$$

Taking the Fourier transform:
$$\delta_g(k) = \frac{1}{\bar{n}}\sum_{i=1}^N e^{-i k \cdot x_i} - (2\pi)^3 \delta_D(k)$$

## Exact Derivation of Poisson Shot Noise

Evaluating the expectation value $\mathbb{E}[|\delta_g(k)|^2]$:
$$\mathbb{E}\left[ |\delta_g(k)|^2 \right] = \frac{1}{\bar{n}^2} \sum_{i=1}^N \sum_{j=1}^N \mathbb{E}\left[ e^{-i k \cdot (x_i - x_j)} \right]$$

Splitting the double sum into diagonal ($i = j$) and off-diagonal ($i \ne j$) terms:
$$\sum_{i, j} e^{-i k \cdot (x_i - x_j)} = \sum_{i=j} 1 + \sum_{i \ne j} e^{-i k \cdot (x_i - x_j)} = N + \sum_{i \ne j} e^{-i k \cdot (x_i - x_j)}$$

Taking the expectation value:
- The diagonal terms contribute: $\frac{N}{\bar{n}^2} = \frac{\bar{n} V}{\bar{n}^2} = \frac{V}{\bar{n}}$.
- The off-diagonal terms correlate through the true underlying galaxy power spectrum: $V P_{\rm true}(k)$.

Equating the total power:
$$V P_{\rm obs}(k) = V P_{\rm true}(k) + \frac{V}{\bar{n}}$$
$$P_{\rm obs}(k) = b_g^2 P_{\rm matter}(k) + \frac{1}{\bar{n}}$$
where $b_g$ is the linear galaxy bias factor.

## Physical Implications
1. **The $1/\bar{n}$ floor**: At small scales (large $k$), the cosmological power spectrum decays ($P(k) \propto k^{-3}$), while Poisson shot noise remains constant. The shot noise floor sets the maximum wavenumber $k_{\rm max}$ where cosmological information can be extracted.
2. **Survey design**: When designing redshift surveys (DESI, Euclid), observing deeper to increase number density $\bar{n}$ directly drives down shot noise until $\bar{n} P(k) \sim 1$ (the optimal FKP threshold).

## See Also
- [Astro-Statistics_and_Cosmology_MOC](../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)
- [08_Galaxy_Clustering_Point_Processes_and_Shot_Noise](../../02_Literature/Lectures/Astrostatistics/08_Galaxy_Clustering_Point_Processes_and_Shot_Noise.html)
- [Spatial two-point correlation function and Landy-Szalay estimator](./Spatial%20two-point%20correlation%20function%20and%20Landy-Szalay%20estimator.html)
- [Feldman-Kaiser-Peacock optimal weighting for galaxy surveys](./Feldman-Kaiser-Peacock%20optimal%20weighting%20for%20galaxy%20surveys.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Feldman-Kaiser-Peacock%20optimal%20weighting%20for%20galaxy%20surveys.html" class="backlink-item">Feldman-Kaiser-Peacock optimal weighting for galaxy surveys</a></li>
    <li class="backlink-item-wrap"><a href="./Spatial%20two-point%20correlation%20function%20and%20Landy-Szalay%20estimator.html" class="backlink-item">Spatial two-point correlation function and Landy-Szalay estimator</a></li>
  </ul>
</div>
