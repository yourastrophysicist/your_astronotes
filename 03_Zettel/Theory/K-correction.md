---
layout: "default"
title: "K-correction"
---
at non-zero redshift, photons measured in a fixed-band filter at the observer were emitted at a different rest-frame wavelength. the **K-correction** translates between observed-band and rest-frame magnitudes so that distances and luminosities can be inferred consistently.

## the problem

I observe a galaxy in the V-band at $z = 0.5$. the photons hitting my detector at $\lambda_{\rm obs} = 550$ nm were emitted at
$$\lambda_{\rm em} = \lambda_{\rm obs}/(1+z) = 550\,\text{nm}/1.5 = 367\,\text{nm}$$

so my V-band magnitude is sampling the source's **near-UV** spectrum, not its V-band rest-frame spectrum. if I want to compare with a low-$z$ V-band absolute magnitude, I need a correction.

## the cosmological distance modulus with K-correction

the magnitude relation becomes
$$\boxed{\, m = M + 5\log_{10}(d_L/10\,\text{pc}) + K(z)\,}$$

where $d_L$ is the luminosity distance ([[Luminosity distance]]) and $K(z)$ is the K-correction in the chosen band.

in band $X$ at redshift $z$:
$$K_X(z) = -2.5 \log_{10}\!\left[\frac{(1+z)\int F(\lambda) T_X(\lambda)\, d\lambda}{\int F(\lambda/(1+z)) T_X(\lambda)\, d\lambda}\right]$$

(or similar, depending on whether you use $F_\nu$ or $F_\lambda$ formalism). the factor $(1+z)$ at the top accounts for the bandpass narrowing.

## what does $K(z)$ depend on?

- **the source SED**: a featureless power-law and an emission-line galaxy K-correct very differently.
- **the filter**: which part of the SED is being sampled changes with $z$, and the relevant SED feature evolves.
- **the redshift**: through $\lambda_{\rm em} = \lambda_{\rm obs}/(1+z)$.

so $K(z)$ is **not a single function**; it must be computed per-source per-filter, ideally from a fit to the multi-band SED.

## sign and behaviour

in optical bands $K(z) > 0$ at most $z$, meaning the source looks **fainter** in $m$ than the inverse-square law alone would predict, because the filter samples a less luminous part of the SED.

example: the Sun's SED. observed V-band at $z = 0.5$ samples rest-frame near-UV, which is dimmer than rest-frame V (the Wien-side suppression). so $K_V > 0$ for solar-type galaxies at modest $z$.

## the famous sub-mm exception

at sub-mm wavelengths ($\sim 850\,\mu$m, SCUBA-2), the negative slope of the Wien tail of the warm-dust greybody means moving the source to higher $z$ samples a *brighter* part of the rest-frame SED. the K-correction can be **strongly negative**:
$$K(z) < 0\quad\text{at sub-mm for } z \in [1, 10]$$

consequence: dusty star-forming galaxies have **roughly constant flux** at $850\,\mu$m from $z \sim 1$ to $z \sim 10$. the sub-mm is the only optical-NIR-radio band where increasing $z$ does not fade the source. this is what enables ALMA/SCUBA surveys for high-$z$ dusty galaxies. see [[K-correction in optical vs sub-mm]].

## practical computation

three approaches:
1. **template fitting**: take a galaxy template (BC03, IRGAL, Polletta library), fit to the multi-band photometry, integrate the best-fit redshifted spectrum through the filter.
2. **empirical recipes**: published $K(z)$ curves for galaxy types (Coleman-Wu-Weedman, Poggianti 1997, Blanton & Roweis 2007 *kcorrect* code).
3. **photometric-redshift codes**: BPZ, EAZY, Le Phare. they fit redshift and galaxy type simultaneously, returning a per-source $K$.

the python package `kcorrect` (Blanton) is the standard tool for SDSS-derived K-corrections.

## see also

- [[Distance modulus]]
- [[K-correction in optical vs sub-mm]]
- [[Luminosity distance]]
- [[Distance ladder derivations]]
- [[Photometric redshifts]]
- [[Filter systems and bandpasses]]
- [[Cosmic star formation history]]
- [[Cosmological redshift]]

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_rad-117.png](../../assets/images/obs_rad-117.png)
*K-correction concept: observing redshifted rest-frame spectrum through fixed bandpass.*

![obs_rad-118.png](../../assets/images/obs_rad-118.png)
*Mathematical definition: m_obs(z) = M_rest + 5 log10(d_L / 10 pc) + K(z).*

![obs_rad-119.png](../../assets/images/obs_rad-119.png)
*Filter bandpass compression factor (1 + z) in frequency.*

![obs_rad-120.png](../../assets/images/obs_rad-120.png)
*K-correction across different galaxy spectral types (E/S0 vs Spiral vs Starburst).*

![obs_rad-121.png](../../assets/images/obs_rad-121.png)
*Color-dependent K-correction curves in SDSS ugriz passbands.*

![obs_rad-122.png](../../assets/images/obs_rad-122.png)
*Negative K-correction in sub-millimeter astronomy: Rayleigh-Jeans to Wien slope matching (1 + z)^4.*

![obs_rad-123.png](../../assets/images/obs_rad-123.png)
*Sub-mm flux density remaining almost constant from z = 1 to z = 8.*



## Linked References

- [[1Vmax estimator]]
- [[Distance ladder derivations]]
- [[Distance modulus]]
- [[Galaxy counts at different wavelengths]]
- [[Galaxy number counts N(m)]]
- [[Hubble flow distances]]
- [[K-correction in optical vs sub-mm]]
- [[Luminosity distance]]
- [[Redshift distribution of flux-limited samples]]
- [[Surface brightness dimming]]
- [[Observational_Astrophysics_MOC]]
- [[Observational_Cosmology_MOC]]


