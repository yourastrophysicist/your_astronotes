---
layout: "default"
title: "Spatial two-point correlation function and Landy-Szalay estimator"
---
# Spatial two-point correlation function and Landy-Szalay estimator

The spatial two-point correlation function $\xi(r)$ quantifies the excess clustering probability of galaxies over a random, homogeneous Poisson distribution. Measuring $\xi(r)$ in galaxy redshift surveys requires edge-correction estimators that minimize estimator variance and boundary biases.

## Definition of the Two-Point Correlation Function

Let $dV_1$ and $dV_2$ be two infinitesimal volume elements separated by distance $r$. The joint probability $dP$ of finding a galaxy in both volumes is:
$$dP = \bar{n}^2 \left[ 1 + \xi(r) \right] dV_1 dV_2$$
where $\bar{n}$ is the mean spatial number density.
- $\xi(r) > 0$: Clustering (excess galaxies relative to random).
- $\xi(r) = 0$: Pure Poisson random distribution.
- $\xi(r) < 0$: Anti-clustering / exclusion.

In terms of the continuous density contrast $\delta(x) \equiv \frac{\rho(x) - \bar{\rho}}{\bar{\rho}}$:
$$\xi(r) = \mathbb{E}[\delta(x)\delta(x+r)]$$

## Estimators and Pair Counting

To measure $\xi(r)$ in a survey with complex geometric boundaries, masks, and radial selection functions, we generate a synthetic random catalog containing $N_R \gg N_D$ points with the exact same spatial footprint and selection function.

Define the normalized pair counts in distance bin $[r, r+\Delta r]$:
- $DD(r)$: Data-Data pairs, normalized by $N_D(N_D-1)/2$.
- $DR(r)$: Data-Random pairs, normalized by $N_D N_R$.
- $RR(r)$: Random-Random pairs, normalized by $N_R(N_R-1)/2$.

### Classical Estimators
1. **Peebles-Hauser (1974)**:
$$\hat{\xi}_{\rm PH}(r) = \frac{DD(r)}{RR(r)} - 1$$
Suffers from severe variance because survey boundary edge effects introduce first-order errors in the mean density estimation ($\text{Var} \propto 1/\bar{n}$).

2. **Davis-Peebles (1983)**:
$$\hat{\xi}_{\rm DP}(r) = \frac{DD(r)}{DR(r)} - 1$$

## The Landy-Szalay Estimator (1993)

Landy and Szalay proved that the optimal minimum-variance estimator is:
$$\hat{\xi}_{\rm LS}(r) = \frac{DD(r) - 2DR(r) + RR(r)}{RR(r)}$$

### Mathematical Superiority
By Taylor-expanding the fluctuation in the observed galaxy number density:
$$\text{Var}\left(\hat{\xi}_{\rm LS}\right) = \frac{1 + \xi(r)}{RR(r)} \approx \frac{1}{RR(r)}$$
whereas for Peebles-Hauser:
$$\text{Var}\left(\hat{\xi}_{\rm PH}\right) \approx \frac{1 + \xi(r)}{RR(r)} + \frac{4}{N_D}$$

The $-2DR$ cross-term cancels first-order density estimation fluctuations $\mathcal{O}(1/\sqrt{N_D})$, leaving only second-order residual variance. The Landy-Szalay estimator is the uncontested standard across all modern cosmological galaxy surveys (SDSS, BOSS, DESI).

## See Also
- [[Astro-Statistics_and_Cosmology_MOC]]
- [[08_Galaxy_Clustering_Point_Processes_and_Shot_Noise]]
- [[Galaxy power spectrum and Poisson shot noise]]
- [[Feldman-Kaiser-Peacock optimal weighting for galaxy surveys]]



## Linked References

- [[Feldman-Kaiser-Peacock optimal weighting for galaxy surveys]]
- [[Galaxy power spectrum and Poisson shot noise]]
- [[Astro-Statistics_and_Cosmology_MOC]]


