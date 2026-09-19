---
layout: "default"
title: "MCMC Convergence Diagnostics and Autocorrelation Analysis"
---
# MCMC Convergence Diagnostics and Autocorrelation Analysis

Before extracting parameter estimates from an MCMC chain, convergence to the target stationary posterior distribution must be mathematically established.

## 1. Integrated Autocorrelation Time $\tau$
The autocorrelation time measures the number of steps required for a chain to draw an independent sample:
$$\tau_f = 1 + 2 \sum_{t=1}^\infty \rho_f(t)$$
where $\rho_f(t)$ is the normalized autocorrelation function at lag $t$.

### Convergence Criterion
- A chain is considered converged when the number of steps $N$ satisfies:
$$N > 50 \, \tau$$
- The estimated $\tau$ must remain stable, changing by less than $1\%$ between consecutive iterations.

## 2. Burn-In Period
Walkers are typically initialized in a small cluster around an initial guess. The initial trajectory toward the high-probability posterior region is non-stationary.
- **Rule**: discard the first $N_{\text{burn}} \approx 2 - 3 \times \tau$ steps before calculating posterior statistics.

## 3. Gelman-Rubin Statistic $\hat{R}$
Compares between-chain variance to within-chain variance across independent walker trajectories:
$$\hat{R} = \sqrt{\frac{\text{Var}^+(\theta)}{W}} < 1.05$$
Values close to 1.0 indicate proper mixing across the parameter space.

## Related Notes
- [Affine-Invariant Ensemble MCMC with emcee](Affine-Invariant%20Ensemble%20MCMC%20with%20emcee.html)
- [Marginalized Posterior Distributions and Corner Plots](Marginalized%20Posterior%20Distributions%20and%20Corner%20Plots.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../Activities/Laboratory%20Exercise%20-%20Joint%20Transit%20Modeling%20and%20MCMC%20Analysis.html" class="backlink-item">Laboratory Exercise - Joint Transit Modeling and MCMC Analysis</a></li>
    <li class="backlink-item-wrap"><a href="Affine-Invariant%20Ensemble%20MCMC%20with%20emcee.html" class="backlink-item">Affine-Invariant Ensemble MCMC with emcee</a></li>
    <li class="backlink-item-wrap"><a href="Marginalized%20Posterior%20Distributions%20and%20Corner%20Plots.html" class="backlink-item">Marginalized Posterior Distributions and Corner Plots</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
  </ul>
</div>

