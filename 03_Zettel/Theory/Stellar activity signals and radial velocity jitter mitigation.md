---
layout: "default"
title: "Stellar activity signals and radial velocity jitter mitigation"
---
stellar activity poses the ultimate detection barrier in precision radial velocity surveys. magnetic phenomena on the stellar photosphere distort spectral absorption line profiles, mimicking or masking Keplerian planet signals with amplitudes of $1 - 10\text{ m s}^{-1}$.

## physical mechanisms of activity jitter

1. **convective blueshift suppression**: granules consist of hot rising plasma (blueshifted) and cooler sinking lanes (redshifted). because rising granules are hotter and brighter, disk-integrated light possesses a net convective blueshift ($\sim 300\text{ m s}^{-1}$). dark magnetic spots and bright faculae/plage suppress convection, causing a net redshift as they rotate across the stellar disk.
2. **starspot flux deficit**: a dark spot blocks a portion of the rotating stellar disk, breaking the symmetry of the rotational broadening profile and shifting the centroid of the cross-correlation function (CCF).
3. **p-mode oscillations**: acoustic oscillations with periods of $5 - 15\text{ min}$ produce velocity fluctuations of $\sim 1\text{ m s}^{-1}$, mitigated by exposing longer than the oscillation timescale ($> 15\text{ min}$).

## diagnostic indicators

activity signals can be distinguished from planetary signals because they alter the line shape (asymmetry) and correlate with magnetic indicators:
- **CCF bisector inverse slope (BIS)**: measures the difference between upper and lower halves of the CCF profile.
- **CCF full width at half maximum (FWHM)**.
- **chromospheric emission indices**: Mount Wilson $\log R'_{HK}$ (Ca II H & K lines), H$\alpha$ index, and Na I D lines.

## mitigation algorithms

1. **Gaussian Process (GP) regression**: modeling activity using quasi-periodic covariance kernels:
   $$k(t_i, t_j) = A^2 \exp\left( -\frac{(t_i - t_j)^2}{2 \lambda_e^2} - \frac{2 \sin^2[\pi (t_i - t_j) / P_{\text{rot}}]}{\lambda_p^2} \right)$$
   where $P_{\text{rot}}$ is stellar rotation period, $\lambda_e$ is active region lifetime, and $\lambda_p$ is harmonic complexity.
2. **multi-dimensional GPs**: jointly fitting RVs alongside activity time series (FWHM, $\log R'_{HK}$) sharing common latent Gaussian processes.

## see also

- [[Exoplanetary_Astrophysics_MOC]]
- [[14_Stellar_Activity_and_Radial_Velocity_Jitter]]
- [[Keplerian radial velocity and Doppler semi-amplitude]]
- [[Gaussian Process Regression in Light Curve Detrending]]



## Linked References

- [[Keplerian radial velocity and Doppler semi-amplitude]]
- [[Exoplanetary_Astrophysics_MOC]]


