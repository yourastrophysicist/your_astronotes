---
layout: "default"
title: "Galaxy SED fitting"
---
**galaxy SED fitting** is how I turn a set of broad-band fluxes into physical numbers: redshift, stellar mass, star formation rate, age, dust content. I build model spectra from stellar populations, pass them through the same filters as the data, and ask which model reproduces the observed fluxes.

this note is the cosmology-side view, where the redshift is part of the problem. the method itself is in [[SED fitting basics]] and the recovery of the star formation history is in [[SED fitting for SFH]].

## the forward model

the flux density I observe at wavelength $\lambda_{\rm obs}$ from a galaxy at redshift $z$ and age $t$ is

$$F_\nu(\lambda_{\rm obs}) = \frac{1+z}{4\pi d_L^2(z)} \int_0^{t} \psi(t - t')\, S_\nu\!\left(\frac{\lambda_{\rm obs}}{1+z},\, t',\, Z\right) 10^{-0.4 A_\lambda}\, dt'$$

every symbol is a modelling choice:

- $\psi(t)$ is the **star formation history**. parametric forms are a single burst, an exponential decline $\psi \propto e^{-t/\tau}$, a delayed exponential $\psi \propto t\,e^{-t/\tau}$, or a set of free bins.
- $S_\nu(\lambda, t', Z)$ is the spectrum of a **single stellar population** of age $t'$ and metallicity $Z$, per unit mass formed. it comes from isochrones, stellar libraries and an **initial mass function**.
- $A_\lambda = k(\lambda)\,E(B-V)$ is the **dust attenuation**. the usual curve for star-forming galaxies is Calzetti, with $R_V = 4.05$.
- $d_L(z)$ is the luminosity distance, and the factor $(1+z)$ comes from compressing the frequency interval.

on top of this the model can add nebular lines and continuum, absorption by the intergalactic medium blueward of Lyman $\alpha$, and dust emission in the infrared tied to the absorbed energy.

each model spectrum is integrated through the filter curves $T_i(\lambda)$ to give synthetic fluxes $F_i^{\rm mod}$.

## the fit

for $N$ bands with fluxes $F_i$ and errors $\sigma_i$:

$$\chi^2 = \sum_{i=1}^{N} \frac{\left(F_i - s\, F_i^{\rm mod}\right)^2}{\sigma_i^2}$$

the models are computed per unit mass, so the normalization $s$ is free. minimizing with respect to $s$ gives it analytically:

$$s = \frac{\sum_i F_i F_i^{\rm mod}/\sigma_i^2}{\sum_i \left(F_i^{\rm mod}\right)^2/\sigma_i^2}$$

this $s$ **is the stellar mass**, up to the fraction returned to the gas by dying stars. so the mass comes from the amplitude of the SED, and everything else comes from its shape.

modern codes replace the single best fit by a posterior. they sample the parameters with priors and report the median and the 16th to 84th percentile range of each quantity.

## what the shape tells me

- the **Lyman break** at rest $912$ Å and the **Balmer or 4000 Å break** fix the redshift when no spectrum exists. see [[Photometric redshifts]].
- the **ultraviolet slope** responds to recent star formation and to dust.
- the **strength of the 4000 Å break** responds to the age of the stars.
- the **rest-frame near infrared** follows the old stars that hold most of the mass.
- the **infrared bump** measures the energy absorbed by dust.

## what is reliable and what is not

- **stellar mass** is the most reliable output, typically good to 0.2 or 0.3 dex, because the mass-to-light ratio in the near infrared changes little with age.
- **star formation rate** from the ultraviolet depends strongly on the dust correction. it improves a lot when infrared data are included.
- **age, dust and metallicity are degenerate**. an old population, a dusty one and a metal-rich one are all red. broad-band data alone cannot separate them well.
- **outshining**: a small young population dominates the light and hides the old stars, so the mass and the age come out too low when the star formation history is too simple.
- **the initial mass function** is assumed, not measured. going from Salpeter to Chabrier lowers the masses by about 0.24 dex, a factor of 1.7, without changing the fit.
- **the redshift** is the largest source of error when it is photometric, because it enters through $d_L^2$ and through the rest-frame wavelengths.

## the codes

- redshift only, with templates: **EAZY**, **LePhare**, **HyperZ**.
- grid fitting of stellar populations: **FAST**.
- energy balance between dust absorption and emission: **MAGPHYS**, **CIGALE**.
- Bayesian sampling with flexible histories: **BAGPIPES**, **Prospector**, **BEAGLE**.

## what I need from the data

- bands on **both sides of the 4000 Å break** at the redshift of the galaxy.
- at least one band in the **rest-frame near infrared** for the mass. at $z > 4$ this means wavelengths beyond $3\,\mu$m, which is why Spitzer IRAC mattered and why JWST changed the field.
- **infrared or sub-mm** data to fix the dust.
- realistic errors, including the uncertainty of the zero points.

## the questions to be ready for

- why is the mass more reliable than the star formation rate? because it follows the amplitude in the near infrared, where the mass-to-light ratio is nearly constant.
- why is a red galaxy ambiguous? because age, dust and metallicity all redden the spectrum.
- what does a wrong redshift do? it moves the breaks to the wrong rest wavelength and rescales every luminosity by $d_L^2$.

## see also

- [[SED fitting basics]]
- [[SED fitting for SFH]]
- [[Photometric redshifts]]
- [[SPS code families]]
- [[Initial mass function]]
- [[K-correction]]
- [[Luminosity distance]]
- [[Star formation rate and sSFR]]
- [[High-redshift galaxy selection and Lyman break technique]]
- [[Observational_Cosmology_MOC]]

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

- **Spectral energy distribution**. "A spectral energy distribution (SED) is a plot of energy versus frequency or wavelength of electromagnetic or mechanical radiation, most commonly light (not to be confused with a 'spectrum' of flux density vs frequency or wavelength). It is used in many branches of astronomy to characterize astronomical sources." ([Wikipedia](https://en.wikipedia.org/wiki/Spectral_energy_distribution))
- **Modeling the Panchromatic Spectral Energy Distributions of Galaxies**. "The spectral energy distributions (SEDs) of galaxies are shaped by nearly every physical property of the system, including the star formation history, metal content, abundance pattern, dust mass, grain size distribution, star-dust geometry, and interstellar radiation field. The principal goal of stellar population synthesis (SPS) is to extract these variables from observed SEDs." ([arXiv:1301.7095](https://arxiv.org/abs/1301.7095))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## Linked References

- [[Observational_Cosmology_MOC]]
