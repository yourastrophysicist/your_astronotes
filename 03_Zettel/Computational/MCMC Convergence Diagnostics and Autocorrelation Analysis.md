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
- [[Affine-Invariant Ensemble MCMC with emcee]]
- [[Marginalized Posterior Distributions and Corner Plots]]



## Linked References

- [[Laboratory Exercise - Joint Transit Modeling and MCMC Analysis]]
- [[Affine-Invariant Ensemble MCMC with emcee]]
- [[Marginalized Posterior Distributions and Corner Plots]]
- [[Astrophysics_Laboratory_2_MOC]]
- [[Computational_Astrophysics_MOC]]


