---
layout: default
title: "CMB Spectral Distortions - What They Are and Where They Come From"
---

# CMB spectral distortions, what they are and where they come from

a derivation-and-context companion to [Cosmic_inventory_photons](../../02_Zettel/Theory/Cosmic_inventory_photons.md) and [Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.md). anchored in Baumann *Cosmology* (Cambridge Part III) chapter 3 ("Thermal History"), and in Cassata's Block 5 + Block 6 lectures from the Observational Cosmology course at U Padua AY 25/26. the goal is to walk through, in my own voice, *why* the CMB is such a perfect blackbody, *how* it could fail to be one, and *what* those failures would teach us about the universe between BBN and recombination.

## the question this note is trying to answer

the CMB measured by FIRAS is the most perfect blackbody we have ever observed:
$$\frac{\Delta I_\nu}{I_\nu} < 10^{-4}\quad(95\%~\text{CL})$$

so what would it even mean for it to *not* be a blackbody, and why do we expect tiny departures at the $10^{-8}$ level even within plain $\Lambda$CDM?

the framework Baumann lays out in §3.2 (equilibrium thermodynamics) and §3.1 (hot Big Bang, decoupling, freeze-out), combined with Cassata's treatment of [Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.md) and [Brief thermal history](../../02_Zettel/Theory/Brief thermal history.md), answers this in two steps:
1. an equilibrium photon gas with both energy *and* number freely adjustable is a Planck spectrum at some $T$ (a one-parameter family).
2. once the universe cools enough that not all relevant interactions can keep up with the expansion ($\Gamma < H$, see [Decoupling and freeze-out](../../02_Zettel/Theory/Decoupling and freeze-out.md)), the photon distribution can no longer relax to Planck. any energy injected after that moment leaves a permanent fingerprint on the spectrum.

the *kind* of fingerprint depends on *which* interactions had already failed, which means it depends on *when* the energy was injected. that is the entire idea: spectral distortions are a redshift-resolved energy ledger of the universe.

---

## the starting point, why the CMB is a blackbody at all

photons in thermal equilibrium have a phase-space distribution
$$f(\nu) = \frac{1}{e^{h\nu/k_BT} - 1}$$
(Baumann §3.2.1, [Number density and energy density at thermal equilibrium](../../02_Zettel/Theory/Number density and energy density at thermal equilibrium.md), [Thermal equilibrium in the early universe](../../02_Zettel/Theory/Thermal equilibrium in the early universe.md)).

this is a **one-parameter** distribution: knowing $T$ tells you everything. for it to be a perfect Planck, the photon gas needs to be free to adjust both its **total energy** and its **total number** in response to perturbations. two interaction families do this in the early universe:

1. **Compton scattering** $\gamma + e^- \to \gamma + e^-$. redistributes energies between photons and electrons. **conserves photon number** (one in, one out). responsible for kinetic equilibrium.
2. **double Compton** $\gamma + e^- \to \gamma + \gamma + e^-$ and **bremsstrahlung** $e^- + p \to e^- + p + \gamma$. these create or destroy photons. responsible for chemical equilibrium (matching $n_\gamma$ to $T$).

as long as both families are fast compared to the Hubble rate $\Gamma > H$, any perturbation gets thermalised back to a Planck shape at a slightly readjusted temperature. this is the same $\Gamma > H$ logic Baumann uses in §3.1.2 ("decoupling and freeze-out") and that I rely on in [Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.md).

---

## the two critical redshifts

each interaction has a temperature below which it can no longer keep up with the expansion. these set the boundaries between "what kind of distortion is left behind."

**number-changing freeze-out**, $z_{\rm therm} \approx 2 \times 10^6$. double Compton + bremsstrahlung scale steeply with density (and therefore with redshift), and they decouple before Compton does. below this redshift, photon number per comoving volume is essentially fixed, even if Compton scattering still works.

**Compton freeze-out**, $z_K \approx 5 \times 10^4$. Compton scattering itself becomes inefficient; the photon-electron system can no longer share energy. below this redshift, the photon spectrum is essentially frozen (apart from line-of-sight effects like the SZ effect through clusters).

these two scales carve the post-thermalisation history into three eras:

| epoch | $z$ range | what is still active | distortion type |
|---|---|---|---|
| thermalisation | $z > 2\times 10^6$ | full equilibrium | none, blackbody restored |
| $\mu$-era | $5\times 10^4 < z < 2\times 10^6$ | Compton only ($n_\gamma$ frozen) | $\mu$-distortion |
| $y$-era | $z < 5\times 10^4$ | nothing in equilibrium | $y$-distortion |

the existence of these three regimes is exactly what makes spectral distortions a redshift-resolved probe. an injection at $z = 10^7$ leaves no trace; at $z = 10^5$ it leaves a $\mu$; at $z = 10^3$ it leaves a $y$. the *shape* of the residual tells you when.

---

## the $\mu$-distortion, derivation

in the $\mu$-era, photon number is fixed but energies still equilibrate via Compton scattering. equilibrium statistical mechanics with both an energy constraint and a particle-number constraint gives a Bose-Einstein distribution with a non-zero chemical potential (Baumann §3.2.1, eqns 3.2.4 and 3.2.6 in the Bose-Einstein case):
$$\boxed{\, f(\nu) = \frac{1}{e^{(h\nu - \mu)/k_BT} - 1}\,}$$

the chemical potential $\mu$ is the Lagrange multiplier enforcing fixed $n_\gamma$ while energy is added. this is exactly the formula I quoted in [Cosmic_inventory_photons](../../02_Zettel/Theory/Cosmic_inventory_photons.md) under "spectral distortions."

### relating $\mu$ to fractional energy injection

the photon energy and number densities for a pure blackbody are (see [Cosmic_inventory_photons_derivation](../../02_Zettel/Theory/Cosmic_inventory_photons_derivation.md) for the integrals):
$$\rho_\gamma = \frac{\pi^2}{15}T^4, \qquad n_\gamma = \frac{2\zeta(3)}{\pi^2}T^3$$

so the dimensionless ratio $\rho_\gamma/n_\gamma^{4/3}$ is a constant for a Planck spectrum. injecting energy without changing $n_\gamma$ raises the numerator only, and the spectrum *cannot* relax back to Planck. it relaxes to the closest BE form, which has $\mu \neq 0$.

the standard linearised Sunyaev-Zeldovich (1970) result, reproduced in Kolb & Turner *The Early Universe* §3.5 (one of Baumann's recommended further-reading texts in [Baumann_reference](../../02_Zettel/Theory/Baumann_reference.md)), is
$$\frac{\mu}{k_BT} \approx 1.4 \,\frac{\Delta\rho_\gamma}{\rho_\gamma}$$
in the small-$\mu$ regime. so a measurement of $\mu/T$ is a direct meter for fractional energy injection during the $\mu$-era.

### the standard-model floor at $\mu/T \sim 1.9 \times 10^{-8}$

even with no exotic physics, $\Lambda$CDM predicts a small but unavoidable $\mu$-distortion from two effects:

1. **Silk damping**. small-scale acoustic oscillations in the photon-baryon fluid are dissipated by photon diffusion (the same physics that suppresses the high-$\ell$ tail of the CMB power spectrum, in the language of Baumann ch 5 and [Linear evolution of perturbations in expanding universe](../../02_Zettel/Theory/Linear evolution of perturbations in expanding universe.md)). that dissipated energy heats the photon bath. since this happens during the $\mu$-era, it leaves a $\mu$-distortion.
2. **adiabatic cooling of baryons**. baryons (massive, non-relativistic) want to cool as $T_b \propto a^{-2}$, faster than photons ($T_\gamma \propto a^{-1}$). Compton scattering keeps them locked together and pulls energy *out* of the photon bath into the electrons. this contributes a slightly negative $\mu$.

for the measured primordial power spectrum the net guaranteed signal is
$$\mu/T \sim 2 \times 10^{-8}$$
the FIRAS upper bound is $\mu/T < 9 \times 10^{-5}$, three orders of magnitude weaker. closing that gap with a future spectrometer (PIXIE, Voyage 2050) is the main scientific goal of the field.

---

## the $y$-distortion, derivation

below $z_K \approx 5 \times 10^4$, Compton scattering is too slow to thermalise photons with electrons. now the relevant question is not "what equilibrium does the system relax to" but "how does the spectrum evolve, given a few residual scatterings."

### the Kompaneets equation

the rigorous treatment writes a Boltzmann equation (Baumann §3.3.1 sets up the formalism in cosmological language) for the photon occupation number $f$, with the collision term coming from non-relativistic Compton scattering off thermal electrons. expanding to leading order in the energy transfer per scattering, the result is the Kompaneets equation:
$$\frac{\partial f}{\partial y} = \frac{1}{x^2}\frac{\partial}{\partial x}\left[x^4\left(\frac{\partial f}{\partial x} + f + f^2\right)\right]$$
with $x = h\nu/k_BT_\gamma$ and the **Compton $y$-parameter**
$$y = \int \frac{k_B(T_e - T_\gamma)}{m_ec^2}\, n_e \sigma_T c\, dt$$

physically, $y$ is the optical-depth-weighted measure of how much energy hot electrons can dump into the photon bath via repeated scattering. (it appears as an integrated quantity along the line of sight when the SZ effect is observed through galaxy clusters; this is the same parameter, evaluated cosmologically rather than for a single cluster.)

### shape of the spectrum

linearising the Kompaneets equation around a Planck spectrum at $T_\gamma$, the small-$y$ distortion is
$$\frac{\Delta I_\nu}{I_\nu} = y\,\frac{x e^x}{e^x - 1}\!\left[\,x\coth(x/2) - 4\,\right]$$

the bracket is negative at low $\nu$, positive at high $\nu$, and crosses zero at $x \approx 3.83$ (about $217$ GHz). so a $y$-distortion looks like a **deficit on the Rayleigh-Jeans side and an excess on the Wien side**: hot electrons up-scatter low-frequency photons into the high-frequency tail. the spectrum is no longer described by any single temperature.

### where the energy comes from

same logic as $\mu$. the relation between $y$ and fractional energy injection during the $y$-era is
$$y \approx \frac{1}{4}\frac{\Delta\rho_\gamma}{\rho_\gamma}$$
the standard-model expectation from late-time effects (reionisation heating, the warm-hot intergalactic medium, integrated SZ from cluster electrons across the sky, see [Reionization](../../02_Zettel/Theory/Reionization.md) and [Cosmic_inventory_overview](../../02_Zettel/Theory/Cosmic_inventory_overview.md)) is
$$y \sim 10^{-6}$$
again well below the FIRAS limit $y < 1.5 \times 10^{-5}$.

---

## two ways the Planck distribution can fail

put the two side by side, with the rest of [Cosmic_inventory_photons](../../02_Zettel/Theory/Cosmic_inventory_photons.md) in mind:

| failure mode | where in the spectrum | physical origin | era of injection |
|---|---|---|---|
| $\mu$-distortion | broadband shift, Bose with $\mu \neq 0$ | $n_\gamma$ frozen, energy only | $5\times 10^4 < z < 2\times 10^6$ |
| $y$-distortion | RJ deficit, Wien excess, zero near $217$ GHz | partial Compton up-scattering by hot $e^-$ | $z < 5\times 10^4$ |
| intermediate ($i$-type) | mix of $\mu$ and $y$ shapes | injection straddles $z_K$ | $z \sim 10^4{-}10^5$ |

the first two are the textbook cases (Baumann does not derive them explicitly but his framework in §3.1 to §3.3 is exactly what one would extend to do so). the third is what current literature (Chluba, Khatri, Sunyaev) shows is needed to separate "early" from "late" injection more finely.

---

## the conceptual picture

```
   z > 2x10^6           5x10^4 < z < 2x10^6           z < 5x10^4
  +-------------+      +--------------------+      +---------------+
  | thermalise  |      | Compton only       |      | no thermal    |
  | (everything |      | n_gamma frozen     |      | equilibrium   |
  |  works)     |      |                    |      |               |
  | -> blackbody|      | -> mu-distortion   |      | -> y-distort  |
  +-------------+      +--------------------+      +---------------+
        T                mu/T = 1.4 dRho/Rho           y = dRho/(4Rho)
```

reading top to bottom, this is the same logic Baumann uses in §3.1.2 to define decoupling: the relevant interaction freezes out where its rate drops below the Hubble expansion rate, and from then on its corresponding equilibrium constraint can no longer be enforced.

---

## what we would learn from a detection

the boxed equations above show that $\mu$ and $y$ are **integrals of the energy injection history**, weighted by which era you are in. they encode information from epochs that no other observation can reach.

- **$\mu$-distortion**, $5\times 10^4 \lesssim z \lesssim 2\times 10^6$. this redshift range is otherwise blind. it sits between BBN ($z \sim 10^9$, see [BBN_overview](../../02_Zettel/Theory/BBN_overview.md)) and recombination ($z \sim 1100$, see [Saha equation and recombination](../../02_Zettel/Theory/Saha equation and recombination.md)). the CMB spectrum is the *only* observational window onto it. detecting the standard-model $\mu \sim 2\times 10^{-8}$ would directly measure the **primordial power spectrum at very small scales**, $k \sim 1$ to $10^4$ Mpc$^{-1}$, which CMB anisotropies cannot reach (Planck probes $k \lesssim 0.2$ Mpc$^{-1}$) and Lyman-$\alpha$ cannot either ($k \lesssim 1$ Mpc$^{-1}$). this would close a four-decade gap in $k$.

- **$y$-distortion**. constrains the late-time energy budget: reionisation, the WHIM "missing baryons" (see [Cosmic_inventory_overview](../../02_Zettel/Theory/Cosmic_inventory_overview.md) and the [Cosmic_inventory_baryons](../../02_Zettel/Theory/Cosmic_inventory_baryons.md) note), and the integrated SZ from all cluster electrons. effectively a one-number summary of the integrated thermal energy of the cosmic plasma since recombination.

- **anything bigger than the standard-model floor** would mean new physics: decaying or annihilating dark matter, primordial black hole evaporation, axion-like particles, enhanced small-scale primordial power. spectral distortions are one of the cleanest model-independent constraints on these scenarios.

---

## how this fits the courses I am taking

**Cassata's Block 5 ([Brief thermal history](../../02_Zettel/Theory/Brief thermal history.md))** sets up the temperature timeline I am using here. the redshifts of recombination, equality, and BBN come from that block. **Block 6 ([Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.md) and [Cosmic_inventory_photons](../../02_Zettel/Theory/Cosmic_inventory_photons.md))** establishes the CMB blackbody itself: FIRAS, $T_0 = 2.725$ K, the photon density and $\Omega_{0\gamma}$.

**Baumann *Cosmology* chapter 3** is the rigorous backbone:
- §3.1.2 (decoupling and freeze-out) gives the $\Gamma > H$ vs $\Gamma < H$ criterion that defines the two critical redshifts above.
- §3.2.1 to §3.2.3 (equilibrium thermodynamics, Bose-Einstein, chemical potentials) gives the formula $f = 1/(e^{(h\nu-\mu)/k_BT}-1)$ that the $\mu$-distortion lives on.
- §3.2.4 (entropy conservation in a comoving volume, see [Conservation of entropy in a comoving volume](../../02_Zettel/Theory/Conservation of entropy in a comoving volume.md)) is what allows me to translate "fractional energy injection" into a measurable spectral parameter.
- §3.3.1 (Boltzmann equation in cosmology) is the framework that the Kompaneets equation is a non-relativistic, isotropic limit of.

Baumann does not derive $\mu$ or $y$ explicitly (he stops at the equilibrium framework and the Boltzmann equation). for the actual derivations I supplemented with Kolb & Turner *The Early Universe* §3.5 ("departures from equilibrium") and the Chluba & Sunyaev (2012) review.

---

## TL;DR

start with $f = 1/(e^{h\nu/k_BT}-1)$, the equilibrium photon distribution Baumann derives in §3.2.1. it is a one-parameter family. for the spectrum to remain Planckian, both photon-number-changing processes (double Compton, bremsstrahlung) and photon-energy-redistributing processes (Compton scattering) must be in equilibrium with the expansion. they fail at different redshifts:

- $z_{\rm therm} \approx 2\times 10^6$, after which any energy injection produces a $\mu$-distortion: a Bose-Einstein distribution with $\mu \neq 0$, with $\mu/T \approx 1.4\,\Delta\rho/\rho$.
- $z_K \approx 5\times 10^4$, after which any injection produces a $y$-distortion: an SZ-like up-scattering of CMB photons by hot electrons, with $y \approx \Delta\rho/(4\rho)$.

current bounds (FIRAS): $\Delta I/I < 10^{-4}$, $\mu/T < 9\times 10^{-5}$, $y < 1.5\times 10^{-5}$.

the standard $\Lambda$CDM prediction (Silk damping plus baryon adiabatic cooling) is $\mu/T \sim 2\times 10^{-8}$ and $y \sim 10^{-6}$. detecting either at the standard-model level, with PIXIE or a Voyage 2050 candidate, would open a window onto $z \sim 10^4$ to $10^6$ that no other observation can probe, and would directly measure the primordial power spectrum across four decades of $k$ that no CMB-anisotropy or Lyman-$\alpha$ measurement can reach.

this is exactly the kind of "the universe as a precision instrument" physics that the courses keep returning to. the Planck distribution is not just an answer; it is the *baseline* against which every subtle deviation is read.

---

## see also

- [Cosmic_inventory_photons](../../02_Zettel/Theory/Cosmic_inventory_photons.md) — parent note with the boxed bounds
- [Cosmic_inventory_photons_derivation](../../02_Zettel/Theory/Cosmic_inventory_photons_derivation.md) — derivation of $n_\gamma$, $\rho_\gamma$, $\Omega_{0\gamma}$
- [Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.md) — how the CMB temperature today is set
- [Thermal equilibrium in the early universe](../../02_Zettel/Theory/Thermal equilibrium in the early universe.md) — Bose-Einstein and Fermi-Dirac framework
- [Number density and energy density at thermal equilibrium](../../02_Zettel/Theory/Number density and energy density at thermal equilibrium.md) — relativistic-limit formulae
- [Conservation of entropy in a comoving volume](../../02_Zettel/Theory/Conservation of entropy in a comoving volume.md) — the $T \propto 1/a$ result
- [Brief thermal history](../../02_Zettel/Theory/Brief thermal history.md) — where $z_{\rm therm}$, $z_K$, and recombination sit on the timeline
- [Saha equation and recombination](../../02_Zettel/Theory/Saha equation and recombination.md) — the same $\Gamma > H$ logic at a different epoch
- [Decoupling and freeze-out](../../02_Zettel/Theory/Decoupling and freeze-out.md) — the general framework
- [BBN_overview](../../02_Zettel/Theory/BBN_overview.md) — the previous "frontier" probed by similar logic
- [Baumann_reference](../../02_Zettel/Theory/Baumann_reference.md) — chapter 3 sections cited above
- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md)
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.md)
