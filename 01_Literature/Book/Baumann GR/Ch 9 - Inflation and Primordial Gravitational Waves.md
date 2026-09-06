---
layout: default
title: "Ch 9 - Inflation and Primordial Gravitational Waves"
---

# Baumann Ch 9 (extension), Inflation and Primordial Gravitational Waves

up: [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.md) · [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.md)

*this chapter is not in Baumann's GR lecture notes. it is the natural next step, the bridge between Ch 7 (cosmology) and Ch 8 (gravitational waves), and the topic Baumann himself is most associated with. it answers the question that Ch 7 quietly leaves open: where did the FLRW universe come from? why does it look so smooth, so flat, so finely tuned? and what is the smoking gun that would tell us inflation actually happened?*

---

## the question this chapter is trying to answer

> **why does the universe look the way it does at the largest scales? what set the initial conditions for the hot Big Bang? and is there an observational signature, a kind of "fossil," that lets us reach back before the CMB?**

Ch 7 hands us a universe described by FLRW + Friedmann, evolving under matter, radiation, and dark energy. but it is silent on why the initial conditions looked so improbable: a universe almost perfectly homogeneous on scales that should never have been in causal contact, almost perfectly flat when curvature should have grown, and seeded with tiny density fluctuations that grew into all the structure we see.

inflation is the answer that fits all three problems with a single idea: a brief epoch of **accelerated expansion** in the very early universe, driven by a slowly-rolling scalar field, that stretches a tiny patch of spacetime into the enormous, smooth, flat patch we now call the observable universe. and inflation makes one specific prediction that is unambiguously gravitational: it produces a stochastic background of **primordial gravitational waves**, encoded in a particular swirl pattern (B-modes) in the polarization of the CMB.

if we ever detect those B-modes, we are reading a signal sourced by quantum fluctuations of the metric, $13.8$ billion years ago, when the universe was $\sim 10^{-34}$ seconds old.

---

## 9.1, the puzzles of the hot Big Bang

before inflation, three things about the standard FRW universe just sit there as embarrassments. they are not contradictions, but they are deeply unnatural.

### puzzle 1, the horizon problem

the CMB is uniform to one part in $10^5$ across the entire sky. but at the time the CMB was emitted (recombination, $z \approx 1100$, age $\sim 380{,}000$ years), the **comoving particle horizon** subtended only about $1°$ on today's sky.

so two patches of the CMB separated by more than $1°$ have **never been in causal contact** in the standard FRW history. they have never exchanged a single photon, never thermalized, never had any chance to agree on a temperature. yet they agree to one part in $10^5$.

quantitatively: the comoving Hubble radius $(aH)^{-1}$ shrinks during inflation and grows during the radiation and matter eras. so without inflation, modes only ever **enter** the horizon, never **exit**. the entire observable universe at recombination was a patchwork of $\sim 10^4$ regions, none of which had talked to any of the others. there is no mechanism in standard FRW that explains why they share a temperature.

### puzzle 2, the flatness problem

the Friedmann equation can be written as
$$\Omega(t) - 1 = \frac{k}{(aH)^2}$$
where $\Omega \equiv \rho/\rho_{\rm crit}$. the right-hand side **grows in absolute value** during both radiation and matter domination (since $aH$ decreases as $t^{1/2}$ or $t^{1/3}$ respectively). so any tiny initial deviation from $\Omega = 1$ gets amplified over time.

today $|\Omega - 1| \lesssim 0.005$. running this back to the Planck time, $|\Omega - 1|$ at $t_{\rm Pl}$ must have been smaller than $\sim 10^{-62}$. why was the universe born so absurdly fine-tuned to flatness?

### puzzle 3, the relic problem

grand unified theories generically predict heavy stable relics (magnetic monopoles, domain walls, cosmic strings) produced at high-energy phase transitions. estimates give monopole abundances vastly larger than anything observed. where did they go?

### a single mechanism that solves all three

if at very early times there was a brief epoch of **accelerated expansion**, $\ddot a > 0$, then the comoving Hubble radius $(aH)^{-1}$ **decreases** during that epoch. this means:

1. modes that are **outside** the horizon today were **inside** the horizon during inflation. so they were causally connected, and could thermalize. (horizon problem solved.)
2. since $|\Omega - 1| \propto (aH)^{-2}$, accelerated expansion drives $\Omega$ exponentially toward $1$. (flatness problem solved.)
3. inflation dilutes any pre-existing relics by a factor of $a^{-3}$ over $\sim 60$ e-folds, so monopoles get diluted by $e^{180} \sim 10^{78}$. effectively zero. (relic problem solved.)

so the question becomes: **what physical mechanism causes $\ddot a > 0$?**

---

## 9.2, the inflationary solution

### the condition for accelerated expansion

from the Q18 - derive the acceleration equation,
$$\frac{\ddot a}{a} = -\frac{4\pi G}{3}(\rho + 3p)$$

so $\ddot a > 0$ requires
$$\boxed{\,p < -\tfrac13 \rho\,}$$

i.e. matter with **strongly negative pressure**. this is exactly the "dark-energy-like" condition of Ch 7. for a cosmological constant, $w = p/\rho = -1$ exactly, and the universe expands as $a(t) \propto e^{Ht}$ with $H$ constant. this is **de Sitter space**.

inflation is essentially a temporary epoch of approximate de Sitter, lasting long enough to solve the puzzles (typically $N \sim 60$ e-folds of expansion) but ending in time to allow the hot Big Bang to start.

### a scalar field as the driver

the simplest realization: a single scalar field $\phi(t, \vec x)$ with potential $V(\phi)$, called the **inflaton**. its stress-energy is
$$T_{\mu\nu} = \partial_\mu \phi\, \partial_\nu \phi - g_{\mu\nu}\bigl(\tfrac12 g^{\alpha\beta}\partial_\alpha \phi\,\partial_\beta\phi + V(\phi)\bigr)$$

for a homogeneous configuration $\phi(t)$ in FLRW, this gives
$$\rho_\phi = \tfrac12 \dot\phi^2 + V(\phi), \qquad p_\phi = \tfrac12 \dot\phi^2 - V(\phi)$$

so the **equation of state** is
$$w_\phi = \frac{\tfrac12 \dot\phi^2 - V}{\tfrac12\dot\phi^2 + V}$$

if the field rolls slowly, $\tfrac12 \dot\phi^2 \ll V$, then $w_\phi \approx -1$ and the field behaves like a cosmological constant. this is the **slow-roll regime**.

> physical picture: imagine a ball rolling down a very gentle slope $V(\phi)$. while the slope is gentle, kinetic energy stays small and potential energy dominates: the field is "almost" a cosmological constant, and the universe inflates. when the slope gets steep at the bottom, the field rolls fast, kinetic energy dominates, and inflation ends. the field then oscillates around the minimum and decays into Standard Model particles ("reheating"), starting the hot Big Bang.

### slow-roll parameters

the slowness of the roll is quantified by two dimensionless parameters:
$$\boxed{\,\epsilon \equiv \frac{M_{\rm Pl}^2}{2}\Bigl(\frac{V'}{V}\Bigr)^2, \qquad \eta \equiv M_{\rm Pl}^2\, \frac{V''}{V}\,}$$

where $M_{\rm Pl} \equiv (8\pi G)^{-1/2}$ is the reduced Planck mass. inflation requires $\epsilon \ll 1$ (so that $w \approx -1$) and ends when $\epsilon \sim 1$. the second parameter $\eta$ controls how the rolling rate evolves and feeds into observable spectral tilts.

### the number of e-folds

the **e-fold count** measures expansion:
$$N(t) \equiv \ln\bigl(a_{\rm end}/a(t)\bigr) = \int_t^{t_{\rm end}} H\, dt' = \int_{\phi_{\rm end}}^{\phi}\frac{d\phi'}{M_{\rm Pl}\sqrt{2\epsilon}}$$

solving the horizon and flatness problems requires $N \gtrsim 60$. observationally, the modes we see today in the CMB exited the horizon roughly $N \sim 50$-$60$ e-folds before inflation ended, depending on the reheating temperature.

---

## 9.3, quantum fluctuations during inflation

this is where it gets beautiful. the same mechanism that solves the horizon problem also **seeds the structure of the universe**.

### the idea

during inflation, the inflaton field has small quantum fluctuations $\delta\phi$ on top of its homogeneous classical value $\phi(t)$. these fluctuations are governed by the same kind of physics as a quantum harmonic oscillator in curved spacetime. as inflation proceeds, modes get **stretched** by the expansion. when a mode's wavelength becomes larger than the Hubble radius $H^{-1}$, it "freezes": its amplitude stops oscillating and becomes a classical fluctuation of the field. these frozen-in fluctuations later get imprinted on matter and radiation, becoming the **primordial density fluctuations**.

### the spectrum of scalar perturbations

curvature perturbations $\mathcal{R}$ (gauge-invariant comoving curvature) have a power spectrum
$$\boxed{\,\mathcal{P}_\mathcal{R}(k) = \frac{1}{8\pi^2 \epsilon}\frac{H^2}{M_{\rm Pl}^2}\bigg|_{k = aH}\,}$$
evaluated at the moment mode $k$ exits the horizon. this is **nearly scale-invariant**, meaning $\mathcal{P}_\mathcal{R}(k) \propto k^{n_s - 1}$ with $n_s$ slightly less than 1. the deviation is
$$n_s - 1 = -6\epsilon + 2\eta$$

Planck (2018) measures
$$n_s = 0.965 \pm 0.004$$
so the spectrum is **slightly red-tilted**, exactly what slow-roll predicts. amplitude $\mathcal{P}_\mathcal{R} \sim 2 \times 10^{-9}$, fixing the energy scale of inflation through the combination $H^2/(\epsilon M_{\rm Pl}^2)$.

### the prediction that worked

this spectrum is **the seed of everything we see**. CMB temperature anisotropies, galaxy distributions, the cosmic web, gravitational lensing of the CMB. all of it grows from these inflationary fluctuations under the gravitational instability of GR + Friedmann. the agreement between inflation's predictions and the Planck CMB spectrum is one of the most successful quantitative confirmations in physical cosmology.

> the philosophical content here is wild. every galaxy, every star, every planet, every atom in your body, sits on a density fluctuation that originated as a **quantum vacuum fluctuation** of a scalar field, when the universe was $10^{-34}$ seconds old. structure has a quantum origin. inflation makes that not metaphorical but literal.

---

## 9.4, primordial gravitational waves, the smoking gun

scalar perturbations seed structure, and we've measured them. but inflation also predicts **tensor perturbations**: quantum fluctuations of the **metric itself**, $h_{ij}$, with the same TT structure as the gravitational waves of Ch 8.

### the spectrum of tensor perturbations

tensor modes have power spectrum
$$\boxed{\,\mathcal{P}_t(k) = \frac{2}{\pi^2}\frac{H^2}{M_{\rm Pl}^2}\bigg|_{k = aH}\,}$$
sourced by quantum fluctuations of the metric during inflation. unlike scalar perturbations, the tensor spectrum's amplitude **does not depend on $\epsilon$**: it is set purely by $H$, i.e. by the **energy scale of inflation**.

the **tensor-to-scalar ratio** is therefore
$$\boxed{\,r \equiv \frac{\mathcal{P}_t}{\mathcal{P}_\mathcal{R}} = 16\epsilon\,}$$

so measuring $r$ gives a direct measurement of $\epsilon$ and (combined with $\mathcal{P}_\mathcal{R}$) of $H$ during inflation, hence of the inflationary energy scale:
$$V^{1/4} \approx \bigl(r/0.01\bigr)^{1/4} \times 1.04 \times 10^{16}\,\mathrm{GeV}$$

if $r$ turns out to be $\sim 0.01$, inflation happened near the GUT scale. this would be an extraordinary thing to know.

### B-modes, how to detect them

primordial GWs leave a unique imprint on CMB polarization. the polarization field on the sky decomposes into two parity types:
- **E-modes** (gradient pattern, parity-even), produced by both scalar and tensor perturbations
- **B-modes** (curl pattern, parity-odd), produced only by tensor perturbations on large angular scales

so a detection of **large-scale primordial B-modes** is a direct detection of inflationary gravitational waves, hence of the metric's quantum fluctuations. there is no other known cosmological source for them on the relevant scales.

### the experimental status

current upper limits (BICEP/Keck + Planck, $\sim 2024$) give
$$r < 0.036\ \text{at } 95\%\ \text{CL}$$
which already rules out a large class of inflation models (including the simplest $V = \tfrac12 m^2\phi^2$). next-generation experiments (LiteBIRD, CMB-S4, the Simons Observatory) aim for sensitivity $r \sim 10^{-3}$ or better.

> a useful piece of perspective: B-modes from primordial GWs are a polarization signal of order $\delta T/T \sim \sqrt{r} \times 10^{-6}$. that is roughly **$10^{-12}$** of the mean CMB temperature. to extract it you have to subtract Galactic foregrounds (synchrotron + dust) which are several orders of magnitude larger, and gravitational lensing which converts E-modes into B-modes on small scales. it is the most demanding measurement in observational cosmology, and a positive detection would be a Nobel-level event.

### what a detection would mean

if we measure $r > 0$:
1. we have observed a **quantum gravitational** effect: the zero-point fluctuations of the metric, stretched into classical perturbations by inflation.
2. we know the **energy scale** of inflation. for $r \sim 0.01$, inflation happened at $V^{1/4} \sim 10^{16}$ GeV, a scale we cannot reach in any accelerator.
3. we have observed a **gravitational signal from $13.8$ billion years ago**, much earlier than the CMB itself ($380{,}000$ years). primordial GWs free-stream essentially unimpeded; they are the **most direct window** to the early universe physics.

inflationary GWs are to LIGO what the CMB is to optical astronomy: a relic background, originating much earlier than the standard sources, accessible only through specialized instruments.

---

## 9.5, where this leaves us

inflation is now the standard paradigm for the very early universe. it is consistent with every CMB measurement, fits the matter power spectrum from galaxy surveys, and predicts a near-scale-invariant red-tilted scalar spectrum that Planck measures to high precision. but **the smoking gun, primordial GWs, is still open**. we know that simple chaotic models are ruled out, and we know that plateau-like potentials (Starobinsky, Higgs inflation) are still viable, and we know that the next decade of CMB polarization experiments will either detect primordial GWs or push $r$ down to $\sim 10^{-3}$, ruling out an even larger class of models.

beyond inflation, the open frontier is **what came before**, if anything. inflation pushes the question of initial conditions into a still earlier regime that connects to quantum gravity. effective field theory of inflation, the swampland program, string-theoretic inflationary scenarios, and bouncing cosmologies are all active research directions. but the nearest term, most physical question is: **is $r$ nonzero?**

> Baumann's own research is largely in this space. his "TASI Lectures on Inflation" (arXiv:0907.5424) and his Cambridge textbook *Cosmology* (2022) are the standard references for the material in this chapter. if Ch 7 was the chapter where Einstein's equations met the universe, this is the chapter where Einstein's equations meet quantum mechanics, at the highest energies we have ever observationally probed.

---

## what to remember from this chapter

if i had to compress chapter 9 into a paragraph for the oral:

> the standard hot Big Bang has three puzzles: the horizon problem (CMB is uniform across regions that were never in causal contact), the flatness problem ($\Omega = 1$ is unstable but observed to one part in $10^3$), and the relic problem (no monopoles or domain walls observed). all three are solved by a brief epoch of accelerated expansion in the very early universe, called inflation, requiring matter with $p < -\rho/3$. the simplest realization is a slowly-rolling scalar field (the inflaton) with potential $V(\phi)$ and slow-roll parameters $\epsilon = (M_{\rm Pl}^2/2)(V'/V)^2 \ll 1$, $\eta = M_{\rm Pl}^2 V''/V \ll 1$. inflation lasts $\sim 60$ e-folds and ends when $\epsilon \sim 1$, after which the field reheats the universe. quantum fluctuations of the inflaton produce a nearly scale-invariant spectrum of scalar curvature perturbations, $\mathcal{P}_\mathcal{R} = H^2/(8\pi^2 \epsilon M_{\rm Pl}^2)$, with spectral tilt $n_s - 1 = -6\epsilon + 2\eta$ measured to be $0.965 \pm 0.004$, slightly red. these seed all structure in the universe. quantum fluctuations of the metric also produce a spectrum of tensor perturbations (primordial GWs) with $\mathcal{P}_t = 2H^2/(\pi^2 M_{\rm Pl}^2)$, giving a tensor-to-scalar ratio $r = 16\epsilon$. detecting primordial GWs through CMB B-mode polarization would directly measure the energy scale of inflation and confirm the quantum origin of structure. current limit $r < 0.036$; next-generation experiments aim at $r \sim 10^{-3}$.

---

## connections

- [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.md)
- [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.md)
- Inflation MOC · Cosmological perturbation theory · FLRW · Slow-roll parameters · Scalar field stress-energy
- Comoving Hubble radius · Horizon problem · Flatness problem · E-folds
- Curvature perturbation · Power spectrum · Spectral tilt · Tensor-to-scalar ratio
- CMB polarization · E-modes and B-modes · BICEP · LiteBIRD · CMB-S4
- bridges: [Ch 7 - Cosmology](../../../01_Literature/Book/Baumann GR/Ch 7 - Cosmology.md) (FLRW + Friedmann) and [Ch 8 - Gravitational Waves](../../../01_Literature/Book/Baumann GR/Ch 8 - Gravitational Waves.md) (TT metric perturbations)
- references: Baumann, *Cosmology* (Cambridge, 2022); Baumann, "TASI Lectures on Inflation" (arXiv:0907.5424)
- previous: [Ch 8 - Gravitational Waves](../../../01_Literature/Book/Baumann GR/Ch 8 - Gravitational Waves.md)
- this is the natural continuation of Baumann's GR notes, beyond the printed text.
