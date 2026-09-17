---
layout: "default"
title: "Marginalized versus conditional parameter errors in Fisher forecasting"
---
{% raw %}
# Marginalized versus conditional parameter errors in Fisher forecasting

In experimental forecasting for cosmological surveys (e.g. Euclid, Roman Space Telescope, Vera C. Rubin Observatory), the Fisher Information Matrix $F$ is used to forecast parameter uncertainties before observations are taken. Crucially, a parameter's forecasted uncertainty depends fundamentally on whether other cosmological parameters are known exactly (conditional error) or marginalized over (marginalized error).

## Conditional (Unmarginalized) Errors

The conditional error on parameter $\theta_i$ assumes that all other parameters $\theta_{j \ne i}$ are known with infinite precision (held fixed at their fiducial values).

The curvature along coordinate axis $i$ is given directly by the diagonal element $F_{ii}$:
$$\sigma_{\rm conditional}(\theta_i) = \frac{1}{\sqrt{F_{ii}}}$$

Geometrically, $\sigma_{\rm conditional}(\theta_i)$ represents the half-width of the forecast ellipse along the slice cutting through the coordinate axis at the center.

## Marginalized Errors

In reality, all cosmological parameters must be inferred simultaneously from the data. The marginalized distribution integrates out all parameters other than $\theta_i$:
$$p(\theta_i|D) = \int p(\theta_1, \dots, \theta_k|D) \, d\theta_1 \dots d\theta_{i-1} d\theta_{i+1} \dots d\theta_k$$

Under the asymptotic Gaussian approximation, the covariance matrix of the joint posterior is the inverse Fisher matrix:
$$C \equiv F^{-1}$$

The marginalized error on parameter $\theta_i$ is the square root of the diagonal element of the inverse Fisher matrix:
$$\sigma_{\rm marginalized}(\theta_i) = \sqrt{C_{ii}} = \sqrt{(F^{-1})_{ii}}$$

Geometrically, $\sigma_{\rm marginalized}(\theta_i)$ represents the projection of the full multi-dimensional error ellipsoid onto the $\theta_i$ axis.

## Matrix Inequality and Degeneracy Parameter

By the Cauchy-Schwarz inequality for positive definite matrices:
$$(F^{-1})_{ii} \ge \frac{1}{F_{ii}}$$
$$\sigma_{\rm marginalized}(\theta_i) \ge \sigma_{\rm conditional}(\theta_i)$$

Equality holds if and only if $\theta_i$ is completely uncorrelated with every other parameter in the model ($F_{ij} = 0$ for all $j \ne i$).

The ratio defines the **parameter degradation factor**:
$$d_i \equiv \frac{\sigma_{\rm marginalized}(\theta_i)}{\sigma_{\rm conditional}(\theta_i)} = \sqrt{F_{ii} (F^{-1})_{ii}} \ge 1$$

In cosmological models, severe geometric degeneracies (such as between dark energy equation of state $w_0, w_a$ and matter density $\Omega_m$) can cause $d_i \sim 10 - 100$, demonstrating why multi-probe combinations (e.g. CMB + BAO + SNIa) are required to break Fisher degeneracy axes.

## See Also
- [Astro-Statistics_and_Cosmology_MOC](../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)
- [06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting](../../02_Literature/Lectures/Astrostatistics/06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting.html)
- [Fisher information matrix and Cramer-Rao bound](./Fisher%20information%20matrix%20and%20Cramer-Rao%20bound.html)
- [Multivariate Gaussian conditioning and marginalization](./Multivariate%20Gaussian%20conditioning%20and%20marginalization.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Fisher%20information%20matrix%20and%20Cramer-Rao%20bound.html" class="backlink-item">Fisher information matrix and Cramer-Rao bound</a></li>
  </ul>
</div>
