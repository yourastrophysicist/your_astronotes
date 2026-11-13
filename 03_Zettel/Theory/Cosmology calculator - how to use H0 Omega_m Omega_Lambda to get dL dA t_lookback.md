---
layout: "default"
title: "Cosmology calculator - how to use H0 Omega_m Omega_Lambda to get dL dA t_lookback"
---
# cosmology calculator recipes

up: [[Observational_Cosmology_MOC]] · [[Fundamentals_Astrophysics_Cosmology_MOC]] · [[Cosmological distances]]

## master cosmological integrals

Given a set of cosmological parameters $(H_0, \Omega_m, \Omega_\Lambda)$ and setting radiation $\Omega_r \approx 0$ for $z < 100$:

$$\Omega_k = 1 - \Omega_m - \Omega_\Lambda$$

The dimensionless expansion rate is:
$$E(z) = \sqrt{\Omega_m (1+z)^3 + \Omega_k (1+z)^2 + \Omega_\Lambda}$$

The Hubble distance is:
$$D_H \equiv \frac{c}{H_0} \approx 2997.9 \, h^{-1} \text{ Mpc}$$

## the 6 recipes

### 1. line-of-sight comoving distance $d_C(z)$
$$d_C(z) = D_H \int_0^z \frac{dz'}{E(z')}$$

### 2. transverse comoving distance $d_M(z)$
$$d_M(z) = \begin{cases}
\frac{D_H}{\sqrt{\Omega_k}} \sinh\left(\sqrt{\Omega_k} \frac{d_C}{D_H}\right) & \text{if } \Omega_k > 0 \text{ (open)} \\
d_C(z) & \text{if } \Omega_k = 0 \text{ (flat)} \\
\frac{D_H}{\sqrt{-\Omega_k}} \sin\left(\sqrt{-\Omega_k} \frac{d_C}{D_H}\right) & \text{if } \Omega_k < 0 \text{ (closed)}
\end{cases}$$

### 3. angular diameter distance $d_A(z)$
Relates proper transverse physical diameter $D$ to observed angular size $\theta$:
$$d_A(z) = \frac{d_M(z)}{1+z} = \frac{D}{\theta}$$
$d_A(z)$ reaches a maximum at $z \sim 1.5 - 1.6$ and decreases at higher redshifts.

### 4. luminosity distance $d_L(z)$
Relates intrinsic bolometric luminosity $L$ to observed bolometric flux $F$:
$$d_L(z) = (1+z) d_M(z) = (1+z)^2 d_A(z) = \sqrt{\frac{L}{4\pi F}}$$
Two factors of $(1+z)$: one for photon energy loss ($E_0 = E_e/(1+z)$) and one for photon arrival rate time dilation ($dt_0 = (1+z) dt_e$).

### 5. lookback time $t_{\rm lb}(z)$
$$t_{\rm lb}(z) = \frac{1}{H_0} \int_0^z \frac{dz'}{(1+z') E(z')}$$

### 6. differential comoving volume $dV_C$
$$dV_C = D_H \frac{d_M^2(z)}{E(z)} d\Omega \, dz$$

## worked example

a galaxy at $z = 2$ in flat $\Lambda$CDM with $H_0 = 67.4$, $\Omega_m = 0.315$:

- $d_C = 5.31$ Gpc
- $d_L = 3 \times 5.31 = 15.9$ Gpc, distance modulus 46.0
- $d_A = 5.31/3 = 1.77$ Gpc, 8.6 kpc per arcsec
- look-back time 10.5 Gyr, age at emission 3.3 Gyr

## where it goes wrong

- the calculators use different default $H_0$. I always set it.
- some give $d_A$ in proper units and some in comoving units.
- the radiation term is neglected by most simple calculators, which matters above $z \approx 1000$.

## connections

- distance proofs: [[Luminosity distance]], [[Angular diameter distance]], [[Surface brightness dimming]]
- parameters: [[ΛCDM current parameters]]



<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

- **Lambda-CDM model**. "The Lambda-CDM, Lambda cold dark matter, or ΛCDM model is the standard form of the Big Bang theory of cosmology governing the chronology of the universe. As implied by its name, the model postulates a cosmological constant, denoted by lambda (Λ), associated with dark energy, cold dark matter, denoted by CDM as well as ordinary matter." ([Wikipedia](https://en.wikipedia.org/wiki/Lambda-CDM_model))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## Linked References

- [[Time-redshift relation]]
- [[Observational_Cosmology_MOC]]


