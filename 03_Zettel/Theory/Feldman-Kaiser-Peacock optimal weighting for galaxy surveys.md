---
layout: "default"
title: "Feldman-Kaiser-Peacock optimal weighting for galaxy surveys"
---
{% raw %}
# Feldman-Kaiser-Peacock optimal weighting for galaxy surveys

In wide-field galaxy redshift surveys, the radial selection function produces a galaxy number density $\bar{n}(r)$ that drops steeply with distance. Feldman, Kaiser & Peacock (FKP 1994) derived the unique spatial weighting function $w_{\rm FKP}(r)$ that minimizes the fractional variance of the measured galaxy power spectrum.

## The Weighted Field

To balance local cosmological signal against Poisson shot noise, each galaxy at position $r$ is weighted by a scalar function $w(r)$. The weighted overdensity field $F(r)$ is defined as:
$$F(r) \equiv \frac{w(r)}{A^{1/2}} \left[ n_g(r) - \alpha n_s(r) \right]$$
where $n_g(r)$ is the observed galaxy catalog, $n_s(r)$ is a synthetic random catalog with mean density $\bar{n}_s(r) = \bar{n}(r)/\alpha$, and $A$ is a normalization constant:
$$A \equiv \int \bar{n}^2(r) w^2(r) \, d^3r$$

This definition ensures an unbiased estimator: $\mathbb{E}[F(k)] = 0$, and:
$$\mathbb{E}\left[ |F(k)|^2 \right] = P_g(k) + P_{\rm shot}$$
where the residual shot noise power is:
$$P_{\rm shot} = \frac{1+\alpha}{A} \int \bar{n}(r) w^2(r) \, d^3r$$

## Variance Minimization via Calculus of Variations

The fractional variance of the power spectrum estimator in a thin Fourier shell of volume $V_k$ is:
$$\frac{\text{Var}(P_g)}{P_g^2} \approx \frac{(2\pi)^3}{V_k} \frac{\int \left[ \bar{n}(r) P_g + 1 \right]^2 w^4(r) \, d^3r}{\left[ \int \bar{n}(r) w^2(r) \, d^3r \right]^2}$$

To find the function $w(r)$ that minimizes this functional, we apply the Euler-Lagrange variational derivative with respect to $w(r)$:
$$\frac{\delta}{\delta w(r)} \left[ \frac{\int \left[ \bar{n}(r) P_g + 1 \right]^2 w^4(r) \, d^3r}{\left[ \int \bar{n}(r) w^2(r) \, d^3r \right]^2} \right] = 0$$

The unique optimal solution is the **FKP weight**:
$$w_{\rm FKP}(r) = \frac{1}{1 + \bar{n}(r) P_0}$$
where $P_0$ is a characteristic power spectrum amplitude evaluated at the target scale (typically $P_0 \approx 10{,}000\ h^{-3}\text{Mpc}^3$ for Baryon Acoustic Oscillations at $k \approx 0.1\ h/\text{Mpc}$).

## Physical Regimes of the FKP Weight

1. **Dense regime ($\bar{n}(r) P_0 \gg 1$)**:
$$w_{\rm FKP}(r) \approx \frac{1}{\bar{n}(r) P_0} \propto \frac{1}{\bar{n}(r)}$$
Here, sample variance dominates over shot noise. The weighting scales inversely with density, volume-weighting the data so that dense nearby clusters do not dominate the survey statistics.

2. **Sparse regime ($\bar{n}(r) P_0 \ll 1$)**:
$$w_{\rm FKP}(r) \approx 1$$
At high redshifts where galaxies are sparse, shot noise dominates over cosmic variance. Every detected galaxy carries independent information and receives equal weight.

## See Also
- [Astro-Statistics_and_Cosmology_MOC](../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)
- [08_Galaxy_Clustering_Point_Processes_and_Shot_Noise](../../02_Literature/Lectures/Astrostatistics/08_Galaxy_Clustering_Point_Processes_and_Shot_Noise.html)
- [Galaxy power spectrum and Poisson shot noise](./Galaxy%20power%20spectrum%20and%20Poisson%20shot%20noise.html)
- [Spatial two-point correlation function and Landy-Szalay estimator](./Spatial%20two-point%20correlation%20function%20and%20Landy-Szalay%20estimator.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Galaxy%20power%20spectrum%20and%20Poisson%20shot%20noise.html" class="backlink-item">Galaxy power spectrum and Poisson shot noise</a></li>
    <li class="backlink-item-wrap"><a href="./Spatial%20two-point%20correlation%20function%20and%20Landy-Szalay%20estimator.html" class="backlink-item">Spatial two-point correlation function and Landy-Szalay estimator</a></li>
  </ul>
</div>
