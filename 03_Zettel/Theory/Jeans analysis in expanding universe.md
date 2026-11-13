---
layout: "default"
title: "Jeans analysis in expanding universe"
---
when a fluid has both **pressure** (which resists compression) and **gravity** (which drives compression), there is a critical scale below which pressure wins and above which gravity wins. that scale is the **Jeans length**.

in cosmology, the Jeans criterion determines which scales of density perturbations can grow gravitationally and which oscillate as sound waves.

---

## the linear perturbation equation with pressure

starting from the perturbed fluid equations (see [[Linear evolution of perturbations in expanding universe]]), with sound speed $c_s$:

$$\ddot\delta + 2H\dot\delta + \left(\frac{c_s^2 k^2}{a^2} - 4\pi G\bar\rho\right)\delta = 0$$

dispersion relation if we ignore Hubble for a moment:
$$\omega^2 = \frac{c_s^2 k^2}{a^2} - 4\pi G\bar\rho$$

- $\omega^2 > 0$: oscillatory solution (sound waves)
- $\omega^2 < 0$: exponentially growing solution (gravitational instability)

the boundary $\omega^2 = 0$ defines the **Jeans wavenumber**:
$$k_J = \frac{a\sqrt{4\pi G\bar\rho}}{c_s}$$

the **Jeans length**:
$$\boxed{\,\lambda_J = \frac{2\pi}{k_J/a} = c_s\sqrt{\frac{\pi}{G\bar\rho}}\,}$$

---

## the Jeans criterion

- $\lambda < \lambda_J$ ($k > k_J$): pressure wins, perturbations *oscillate* as sound waves
- $\lambda > \lambda_J$ ($k < k_J$): gravity wins, perturbations *grow*

equivalently, a **Jeans mass**:
$$M_J = \frac{4\pi}{3}\bar\rho \left(\frac{\lambda_J}{2}\right)^3$$

masses larger than $M_J$ collapse. smaller masses oscillate.

---

## three cosmological scales where this matters

### baryons before recombination

before recombination, baryons + photons form a tightly coupled fluid with sound speed $c_s \sim c/\sqrt 3$. the Jeans length is huge, much larger than the Hubble radius. so **no baryon perturbation can grow before recombination**: they all oscillate as acoustic waves. this is the origin of the CMB peak structure and BAO. → see [[Matter power spectrum and BAO]] and [[Photon decoupling and CMB]].

### baryons after recombination

after recombination ($z < 1100$), photon pressure is gone, and the baryon sound speed is just thermal: $c_s \sim \sqrt{k_BT/m_p} \sim$ km/s, much smaller than before. the Jeans mass plummets:
$$M_J \sim 10^4 - 10^5\, M_\odot$$

so baryon perturbations on essentially all galactic scales can grow. they fall into the dark-matter potential wells that have been growing since matter-radiation equality.

### dark matter is always Jeans-unstable

cold dark matter has $c_s \approx 0$ (or extremely small velocity dispersion), so $\lambda_J \approx 0$. **all CDM scales are above the Jeans length** at all times, CDM can grow on all scales as soon as it dominates the energy density (after matter-radiation equality at $z_{\rm eq} \sim 3300$). this is exactly what enables structure formation.

→ this is also why dark matter must be cold: hot dark matter has a large Jeans length, washing out small-scale structure (free-streaming). see [[Hot vs cold dark matter]].

---

## the cosmological Jeans is *modified* by Hubble friction

include the $2H\dot\delta$ term. the Jeans criterion becomes more complex, gravitational growth still happens above $\lambda_J$, but at a *power-law* rate ($\delta \propto a$), not exponential. Hubble friction slows growth by orders of magnitude relative to the static case, but does not eliminate it.

so the practical rule:
- **above $\lambda_J$**: $\delta \propto a$ (or $\log a$ in radiation era, or constant in Λ era), see [[Growth factor D(z)]]
- **below $\lambda_J$**: oscillation, no net growth

---

## connection to galaxy formation

the Jeans criterion sets a **minimum mass** for a self-gravitating cloud to collapse:
$$M_J \sim \left(\frac{k_BT}{Gm_p}\right)^{3/2} \rho^{-1/2}$$

- molecular clouds in our galaxy: $T \sim 10$ K, $\rho \sim 10^{-22}$ g/cm$^3$, $M_J \sim$ a few $M_\odot$
- HII regions: $T \sim 10^4$ K, $\rho \sim 10^{-24}$ g/cm$^3$, $M_J \sim 10^7 M_\odot$
- intracluster gas: $T \sim 10^7$ K, $\rho \sim 10^{-26}$ g/cm$^3$, $M_J \sim 10^{15} M_\odot$ (cluster scale)

so the Jeans analysis is also the foundation of star formation theory: clouds with $M > M_J$ collapse and form stars (see [[Jeans theory and protostellar formation]]).

---

## where it goes wrong

- the expansion turns exponential growth into power-law growth.
- the baryon Jeans mass drops by about $10^{10}$ at recombination.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Jeans instability|500](https://commons.wikimedia.org/wiki/Special:FilePath/LH_95.jpg?width=600)
*LH 95 stellar nursery in the Large Magellanic Cloud* ([Commons file page](https://commons.wikimedia.org/wiki/File:LH_95.jpg), NASA, ESA, and the Hubble Heritage Team (STScI/AURA)-ESA/Hubble Collaboration, Public domain, as used on the Wikipedia article [Jeans instability](https://en.wikipedia.org/wiki/Jeans_instability))

- **Jeans instability**. "The Jeans instability is a concept in astrophysics that describes an instability that leads to the gravitational collapse of a cloud of gas or dust. It causes the collapse of interstellar gas clouds and subsequent star formation. It occurs when the internal gas pressure is not strong enough to prevent the gravitational collapse of a region filled with matter." ([Wikipedia](https://en.wikipedia.org/wiki/Jeans_instability))
- **Cosmological perturbations**. "We review the study of inhomogeneous perturbations about a homogeneous and isotropic background cosmology. We adopt a coordinate based approach, but give geometrical interpretations of metric perturbations in terms of the expansion, shear and curvature of constant-time hypersurfaces and the orthogonal timelike vector field." ([arXiv:0809.4944](https://arxiv.org/abs/0809.4944))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Fundamentals_Astrophysics_Cosmology_MOC]]
- [[Linear evolution of perturbations in expanding universe]]
- [[Growth factor D(z)]]
- [[Hot vs cold dark matter]]
- [[Photon decoupling and CMB]]
- [[Matter power spectrum and BAO]]
- [[Spherical collapse]]



## Linked References

- [[Baumann_reference]]
- [[Cosmological evolution of perturbations in the cosmic fluid]]
- [[Growth factor D(z)]]
- [[Jeans theory and protostellar formation]]
- [[Linear evolution of perturbations in expanding universe]]
- [[Linear vs nonlinear regime]]
- [[Perturbations in an expanding universe]]
- [[Spherical collapse]]
- [[Fundamentals_Astrophysics_Cosmology_MOC]]
- [[Observational_Cosmology_MOC]]


