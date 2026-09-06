---
layout: default
title: "Growth factor D(z)"
---

the **growth factor** $D(z)$ describes how the amplitude of a linear matter perturbation grows from some reference time (usually $z = \infty$ or recombination) to redshift $z$:
$$\delta(\vec x, z) = D(z)\, \delta(\vec x, z = z_{\rm ref})$$

it satisfies the master perturbation equation (see [Linear evolution of perturbations in expanding universe](../../02_Zettel/Theory/Linear evolution of perturbations in expanding universe.html)) and depends on the cosmological parameters.

---

## three regimes

### radiation-dominated era ($z \gtrsim 3300$)

dark matter perturbations on sub-horizon scales experience **Meszaros suppression**: only logarithmic growth.
$$D(a) \propto \log(a)$$

(approximately constant.) modes that enter the horizon during radiation domination get this logarithmic stunting; modes that stay outside the horizon don't.

### matter-dominated era ($0.7 \lesssim z \lesssim 3300$)

clean power-law growth:
$$D(a) \propto a$$

at the redshift where $\Omega_m(1+z)^3 = \Omega_\Lambda$ (around $z \sim 0.7$), the universe transitions to Λ-domination.

### Λ-dominated era ($z \lesssim 0.7$)

growth **freezes out** as Λ takes over. $\bar\rho_m \propto a^{-3}$ falls to negligible compared to $\rho_\Lambda$, so the source term in the perturbation equation vanishes. the growing-mode amplitude approaches a constant.

approximate fitting formula (Lahav-Suto):
$$D(a) \propto a \cdot \frac{\Omega_m(z)^{4/7}}{1 + (1 - \Omega_m(z))/2 + (1 + \Omega_m(z)/2)/70 \cdot \dots}$$

or more cleanly, the integral form:
$$D(a) \propto H(a) \int_0^a \frac{da'}{[a' H(a')]^3}$$

(for a flat universe with matter and Λ.)

---

## convention: normalization

usually $D(z = 0) = 1$ today. so $D(z)$ is the ratio of the growing-mode amplitude at $z$ to today. for ΛCDM:
- $D(z = 1100) \approx 1/1280 \approx 7.8 \times 10^{-4}$
  - i.e. perturbations have grown by a factor of $\sim 1280$ since CMB era
- $D(z = 0.7) \approx 0.65$ — growth has slowed

---

## consequences for observations

### CMB amplitude vs galaxy power spectrum

at the CMB era, $\delta \sim 10^{-5}$. by today: $\delta \sim 10^{-5} \times 1280 \approx 10^{-2}$, in linear theory.

but on small scales, $\delta$ has grown nonlinear ($\delta \sim 1$). N-body simulations are needed there. on large scales (BAO, $k \lesssim 0.1\,h\,\text{Mpc}^{-1}$), linear theory still works.

### redshift-space distortions and $f\sigma_8$

galaxy peculiar velocities trace the gradient of the gravitational potential. they are proportional to $\dot\delta = (df/d\ln a)\delta$ where $f = d\ln D/d\ln a$ is the **growth rate**:
$$f(z) \approx \Omega_m(z)^{0.55}$$

(the 0.55 power is an approximation for Λ-dominated universes.) measuring $f$ via redshift-space distortions (RSD) constrains modified gravity, dark energy properties, and so on. this is one of the prime science goals of DESI and Euclid in 2025/2026.

### early dark energy and the Hubble tension

if there is "early dark energy" before recombination, $H$ is higher at that epoch, affecting the sound horizon and CMB peak positions. this changes $D(z)$ and the inferred $H_0$ — proposed as a way to relieve the Hubble tension (see [Hubble constant and deceleration parameter](../../02_Zettel/Theory/Hubble constant and deceleration parameter.html)).

---

## why growth factor matters

$D(z)$ encodes how much "room" perturbations had to grow into halos and galaxies. by measuring $D$ at multiple redshifts (via galaxy clustering, weak lensing, RSD, cluster counts), we constrain:
- the matter density $\Omega_m$
- the dark energy equation of state $w$
- modified gravity theories
- neutrino mass (suppresses growth on small scales)

so $D(z)$ is one of the central observables of late-time cosmology, complementary to $H(z)$.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Linear evolution of perturbations in expanding universe](../../02_Zettel/Theory/Linear evolution of perturbations in expanding universe.html)
- [Jeans analysis in expanding universe](../../02_Zettel/Theory/Jeans analysis in expanding universe.html)
- [Spherical collapse](../../02_Zettel/Theory/Spherical collapse.html)
- [Matter power spectrum and BAO](../../02_Zettel/Theory/Matter power spectrum and BAO.html)
- [Hubble constant and deceleration parameter](../../02_Zettel/Theory/Hubble constant and deceleration parameter.html)
- [Cosmic_inventory_dark_energy](../../02_Zettel/Theory/Cosmic_inventory_dark_energy.html)
