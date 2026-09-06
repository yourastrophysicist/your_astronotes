---
layout: default
title: "Standard model problems"
---

the hot Big Bang model is a fantastic match to observations. but extrapolating it backward to early times reveals deep **fine-tuning problems** that the model itself cannot explain. these are the **flatness problem**, the **horizon problem**, and the **monopole problem**. they motivate **inflation**.

---

## the flatness problem

the curvature density parameter is
$$\Omega_K = -\frac{kc^2}{H^2 a^2}$$

today: $\Omega_K = 0.001 \pm 0.002$ — the universe is flat to a fraction of a percent.

but $\Omega_K$ **grows with time** in a matter or radiation dominated universe:
- radiation era: $H^2 \propto a^{-4}$, so $|\Omega_K| \propto a^2$
- matter era: $H^2 \propto a^{-3}$, so $|\Omega_K| \propto a$

so extrapolating *backward* in time, $|\Omega_K|$ has to be **fantastically small** in the early universe to give the present-day value.

at the Planck epoch ($T \sim 10^{19}$ GeV, $a \sim 10^{-31}$):
$$|\Omega_K(t_{\rm Pl})| \lesssim 10^{-60}$$

why was the early universe so close to flat? if $|\Omega_K|$ was anything but tiny, the universe would either have recollapsed within Planck times (closed) or expanded so fast that no structure could form (open).

→ the **flatness problem**: a 60-decimal-place fine-tuning of initial conditions, not predicted by the standard model.

---

## the horizon problem

the **particle horizon** at cosmic time $t$ is the maximum comoving distance light could have traveled since the Big Bang:
$$\chi_{\rm ph}(t) = \int_0^t \frac{c\, dt'}{a(t')}$$

regions separated by more than $\chi_{\rm ph}$ have **never been in causal contact**.

now look at the CMB. it is uniform to $\Delta T/T \sim 10^{-5}$ over the entire sky. but at recombination ($z = 1100$), the particle horizon subtended only **about 1° on the sky**. so points more than 1° apart on the CMB sky were *never in causal contact* before they emitted the photons we see now.

→ how did they thermalize to the same temperature?

<img src="{{ "/assets/images/intro-12.png" | relative_url }}" alt="intro-12" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

the **horizon problem**: the universe is much more uniform than causality allows. at face value this is impossible.

---

## the monopole problem

grand unified theories (GUTs) predict that **magnetic monopoles** were copiously produced at the GUT phase transition ($T \sim 10^{16}$ GeV). their predicted abundance would dominate the energy density of the universe by many orders of magnitude.

we observe **none**. (or at least no detection.)

→ the **monopole problem**: why did the universe not retain GUT-scale topological defects?

---

## inflation as the solution

inflation = an early epoch of nearly exponential expansion driven by a scalar field with $w \approx -1$ (de Sitter-like). during inflation:

- $a(t) \propto e^{Ht}$ with $H$ approximately constant
- the comoving Hubble radius $(aH)^{-1}$ **shrinks**
- any pre-inflation curvature gets diluted: $|\Omega_K| \to |\Omega_K|/e^{2N}$ over $N$ e-folds
- the Hubble volume at the start of inflation gets stretched far beyond what we observe today, making the entire observable universe come from a single causally connected region
- any pre-inflation density of monopoles gets diluted by $e^{3N}$

with $N \approx 60$ e-folds of inflation:
- $|\Omega_K|$ gets suppressed by $e^{-120} \sim 10^{-52}$ — solving flatness
- the observable universe (today $\sim H_0^{-1}$ across) was at the start of inflation a single Hubble volume, all in causal contact — solving the horizon problem
- monopole density diluted to undetectable — solving the monopole problem

inflation also generates the primordial perturbations from quantum fluctuations stretched to cosmic scales. the **same fluctuations** that solve the horizon problem also seed structure formation. → see [Inflation overview](../../02_Zettel/Theory/Inflation overview.html).

---

## the broader lesson

the standard model is **fine-tuned**: the initial conditions at the Planck epoch require dialing dimensionless numbers to absurd precision. inflation is an attempt to **dynamically generate** the apparently fine-tuned conditions — replacing fine-tuned initial conditions with a generic dynamical attractor.

the price: a hypothetical scalar field (the **inflaton**) with a specific potential, plus a mechanism to end inflation gracefully (reheating). there is no direct observational evidence for the inflaton itself — we only see its consequences in the primordial perturbations.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Inflation overview](../../02_Zettel/Theory/Inflation overview.html)
- [Inflaton scalar field dynamics](../../02_Zettel/Theory/Inflaton scalar field dynamics.html)
- [Old vs new vs chaotic inflation, slow-roll](../../02_Zettel/Theory/Old vs new vs chaotic inflation, slow-roll.html)
- [Density parameters and flatness](../../02_Zettel/Theory/Density parameters and flatness.html)
- [Brief thermal history](../../02_Zettel/Theory/Brief thermal history.html)
- [Baumann_reference](../../02_Zettel/Theory/Baumann_reference.html) — chapter 2 has the full story
