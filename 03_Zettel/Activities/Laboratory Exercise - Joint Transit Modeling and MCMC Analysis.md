---
layout: "default"
title: "Laboratory Exercise - Joint Transit Modeling and MCMC Analysis"
---
# Laboratory Exercise — Joint Transit Modeling and MCMC Analysis

Protocol for executing joint Bayesian transit modeling across TASTE and TESS observations using `batman`, `ldtk`, and `emcee`.

## Protocol

### 1. Synthetic Limb Darkening Setup with `ldtk`
```python
from ldtk import SVOFilter, LDPSetCreator
import numpy as np

# Query transmission curves
sloan_r = SVOFilter('SLOAN/SDSS.r')
tess = SVOFilter('TESS')

sc = LDPSetCreator(teff=(5295, 100), logg=(4.44, 0.10), z=(0.26, 0.08), filters=[sloan_r, tess])
ps = sc.create_profiles(nsamples=2000)
ps.resample_linear_z(100)
qm, qe = ps.coeffs_qd(do_mc=True, n_mc_samples=10000)

u1_r_prior, u2_r_prior = qm[0], qe[0]
u1_tess_prior, u2_tess_prior = qm[1], qe[1]
```

### 2. Joint Log-Probability Definition
```python
import batman

def log_probability(theta, t_taste, f_taste, e_taste, t_tess, f_tess, e_tess):
    rp, a, inc, t0_taste, t0_tess, u1_r, u2_r, u1_t, u2_t, c0, c1, c2, j_taste, j_tess = theta

    # Uniform prior checks
    if not (0.01 < rp < 0.25 and 2.0 < a < 30.0 and 75.0 < inc <= 90.0):
        return -np.inf

    # Gaussian priors on limb darkening
    lp = -0.5 * (((u1_r - u1_r_prior[0]) / (2 * u1_r_prior[1]))**2 +
                 ((u2_r - u2_r_prior[0]) / (2 * u2_r_prior[1]))**2 +
                 ((u1_t - u1_tess_prior[0]) / (2 * u1_tess_prior[1]))**2 +
                 ((u2_t - u2_tess_prior[0]) / (2 * u2_tess_prior[1]))**2)

    # Evaluate TASTE likelihood
    m_taste = compute_batman(t_taste, t0_taste, rp, a, inc, [u1_r, u2_r])
    base_taste = c0 + c1 * t_taste + c2 * t_taste**2
    s2_taste = e_taste**2 + j_taste**2
    ll_taste = -0.5 * np.sum(((f_taste - m_taste * base_taste)**2 / s2_taste) + np.log(2 * np.pi * s2_taste))

    # Evaluate TESS likelihood
    m_tess = compute_batman(t_tess, t0_tess, rp, a, inc, [u1_t, u2_t])
    s2_tess = e_tess**2 + j_tess**2
    ll_tess = -0.5 * np.sum(((f_tess - m_tess)**2 / s2_tess) + np.log(2 * np.pi * s2_tess))

    return lp + ll_taste + ll_tess
```

### 3. Sampling with `emcee`
```python
import emcee

nwalkers = 32
ndim = 14
pos = initial_guess + 1e-4 * np.random.randn(nwalkers, ndim)

sampler = emcee.EnsembleSampler(nwalkers, ndim, log_probability,
                                args=(t_taste, f_taste, e_taste, t_tess, f_tess, e_tess))
sampler.run_mcmc(pos, 6000, progress=True)

# Convergence check
tau = sampler.get_autocorr_time()
burn = int(2.5 * np.max(tau))
samples = sampler.get_chain(discard=burn, thin=int(np.max(tau)/2), flat=True)
```

## Related Notes
- [[Likelihood Function for Photometric Time Series]]
- [[Affine-Invariant Ensemble MCMC with emcee]]
- [[MCMC Convergence Diagnostics and Autocorrelation Analysis]]



## Linked References

- [[Astrophysics_Laboratory_2_MOC]]


