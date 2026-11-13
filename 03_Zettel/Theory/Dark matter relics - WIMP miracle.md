---
layout: "default"
title: "Dark matter relics - WIMP miracle"
---
**WIMPs** = Weakly Interacting Massive Particles, mass $\sim 100$ GeV, annihilation cross-section $\langle\sigma v\rangle \sim 10^{-26}$ cm$^3$/s (the typical scale for weak interactions).

the coincidence: a thermal relic with weak-scale annihilation cross-sections naturally has present abundance
$$\Omega_{dm} h^2 \sim 0.1$$

*exactly* the observed dark matter abundance. this is the **WIMP miracle**.

---

## thermal freeze-out for a heavy relic

consider a particle $\chi$ that:
- is in thermal equilibrium at high T
- becomes non-relativistic ($T < m_\chi$) and would Boltzmann-suppress: $n_\chi \propto e^{-m_\chi/T}$
- annihilates with itself: $\chi\bar\chi \to X\bar X$ at rate $\Gamma = n_\chi \langle\sigma v\rangle$

while $\Gamma > H$, the abundance tracks the equilibrium value. once $\Gamma \sim H$ at temperature $T_f$, **freeze-out** happens (see [[Decoupling and freeze-out]]) and the comoving number density is fixed.

---

## the rough estimate

the freeze-out temperature is approximately
$$T_f \approx m_\chi/x_f, \qquad x_f \sim 20\text{ - }25$$

(roughly, $x_f$ is set by the logarithm of the cross-section, weakly dependent on details.)

at freeze-out:
$$n_\chi(T_f) \sim \frac{H(T_f)}{\langle\sigma v\rangle}$$

then $n_\chi$ scales with the universe as $a^{-3}$ (just dilution, no more interactions). today:
$$\Omega_\chi h^2 \approx \frac{3 \times 10^{-27}\,\text{cm}^3/\text{s}}{\langle\sigma v\rangle}$$

(this involves carefully matching to entropy conservation. it is the result you get from solving the Boltzmann equation, see [[Boltzmann equation in cosmology]].)

---

## the miracle

for a typical weak-scale cross-section:
$$\langle\sigma v\rangle \sim \alpha_w^2/m_W^2 \sim 10^{-26}\,\text{cm}^3/\text{s}$$

(with $\alpha_w \sim 1/30$ the weak fine-structure constant, $m_W \sim 80$ GeV.)

substituting:
$$\Omega_\chi h^2 \approx \frac{3 \times 10^{-27}}{10^{-26}} \sim 0.1$$

**exactly the observed value of $\Omega_{dm} h^2$**.

this is the **WIMP miracle**: a particle at the electroweak scale, with electroweak-scale interactions, *naturally* gives the right dark matter abundance. there is no fine-tuning required.

---

## why this was so attractive (and why it remains hard to give up)

before colliders ruled out simple supersymmetric models, the electroweak scale was independently motivated by:
- **the hierarchy problem**: why is the Higgs so light compared to the Planck scale? supersymmetry near the EW scale would naturally explain it
- **gauge unification**: the SM gauge couplings nearly meet at $10^{16}$ GeV. SUSY at the EW scale makes them meet exactly
- **dark matter**: a stable neutralino at $\sim 100$ GeV with weak-scale annihilation gives the right $\Omega$

three independent reasons for new physics at the EW scale. when LHC found "nothing new" at the EW scale, all three motivations weakened. but the dark matter coincidence remains striking.

---

## what we observe and don't

direct detection (XENON, LUX, CRESST, etc.): null results so far on spin-independent and spin-dependent WIMP-nucleon scattering at $\sim 10^{-46}$ to $10^{-48}$ cm$^2$. this rules out a large region of WIMP parameter space, but not all of it.

indirect detection (Fermi gamma-ray, AMS, IceCube): looking for WIMP annihilation products in the galactic halo, dwarf galaxies, sun. some intriguing excesses (galactic-center gamma-ray excess, AMS positron spectrum) but no smoking gun yet.

collider production (LHC): no missing-energy signature consistent with WIMP pair production. the parameter space is shrinking.

→ the WIMP picture is **under pressure but not yet falsified**. alternatives (axions, primordial black holes, sterile neutrinos, asymmetric DM) are gaining attention.

---

## worked example

$\Omega h^2 \simeq \dfrac{3 \times 10^{-27}\ \text{cm}^3\,\text{s}^{-1}}{\langle\sigma v\rangle}$. with $\langle\sigma v\rangle = 3 \times 10^{-26}$ cm$^3$/s, $\Omega h^2 = 0.1$.

## where it goes wrong

- the miracle is a numerical coincidence. it does not prove WIMPs exist.
- direct detection experiments have excluded most of the simple WIMP parameter space.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

- **Weakly interacting massive particle**. "Weakly interacting massive particles (WIMPs) are hypothetical particles that are one of the proposed candidates for dark matter. These particles would have mass and would interact with gravity, would have been created in abundance during the Big Bang, and would since have reduced in number because of self-annihilation caused by their weak interaction." ([Wikipedia](https://en.wikipedia.org/wiki/Weakly_interacting_massive_particle))
- **Particle Dark Matter: Evidence, Candidates and Constraints**. "In this review article, we discuss the current status of particle dark matter, including experimental evidence and theoretical motivations. We discuss a wide array of candidates for particle dark matter, but focus on neutralinos in models of supersymmetry and Kaluza-Klein dark matter in models of universal extra dimensions." ([arXiv:hep-ph/0404175](https://arxiv.org/abs/hep-ph/0404175))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Fundamentals_Astrophysics_Cosmology_MOC]]
- [[Cosmic_inventory_dark_matter]]
- [[Decoupling and freeze-out]]
- [[Hot vs cold dark matter]]
- [[Boltzmann equation in cosmology]]
- [[Baumann_reference]] - chapter 3.3.2 has the full Boltzmann derivation



## Linked References

- [[Fundamentals_Astrophysics_Cosmology_MOC]]


