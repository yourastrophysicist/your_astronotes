---
layout: "default"
title: "Limb Darkening Computation with ldtk"
---
# Limb Darkening Computation with ldtk

The Python Limb Darkening Toolkit (`ldtk`; Parviainen & Aigrain 2015) calculates theoretical stellar limb darkening profiles and coefficients tailored to specific telescope passbands.

## Methodological Pipeline
1. **Model Grid**: downloads high-resolution synthetic stellar spectra from the PHOENIX library (Husser et al. 2013) spanning effective temperature $T_{\text{eff}}$, surface gravity $\log g$, and metallicity $[\text{Fe}/\text{H}]$.
2. **Filter Integration**: integrates synthetic spectra against empirical filter transmission curves queried from the Spanish Virtual Observatory (SVO) Filter Profile Service (e.g., Sloan $r'$, TESS passband).
3. **Monte Carlo Propagation**: propagates host star spectroscopic uncertainties ($\,\sigma_{T_{\text{eff}}}, \sigma_{\log g}, \sigma_{[\text{Fe}/\text{H}]}$) into joint probability distributions for limb darkening coefficients:
$$u_1 \pm \sigma_{u_1}, \quad u_2 \pm \sigma_{u_2}$$

These values serve as informative Gaussian priors in Bayesian transit fitting.

## Related Notes
- [[Stellar Limb Darkening Laws]]
- [[Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling]]
- [[Prior Probability Distributions in Exoplanet Fitting]]



## Linked References

- [[Stellar Limb Darkening Laws]]
- [[Astrophysics_Laboratory_2_MOC]]
- [[Computational_Astrophysics_MOC]]


