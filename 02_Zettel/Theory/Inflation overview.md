---
layout: default
title: "Inflation overview"
---

**inflation** is a hypothetical epoch of accelerated expansion ($\ddot a > 0$) in the very early universe, $t \sim 10^{-35}$ s, $T \gtrsim 10^{16}$ GeV. it was proposed in 1981 by Alan Guth and refined by Andrei Linde, Albrecht-Steinhardt, Sato, and others.

inflation is designed to solve the **fine-tuning problems** of the standard hot Big Bang model: flatness, horizon, monopoles (see [Standard model problems](../../02_Zettel/Theory/Standard model problems.html)).

---

## what inflation is

a period during which:
$$\ddot a > 0 \qquad \Leftrightarrow \qquad p < -\frac{\rho}{3}$$

i.e. a phase with negative pressure satisfying $w < -1/3$. typically driven by a scalar field $\phi$ (the **inflaton**) with potential $V(\phi)$ that dominates over the kinetic energy:
$$\rho_\phi \approx V(\phi), \quad p_\phi \approx -V(\phi) \quad \Rightarrow \quad w \approx -1$$

→ **near-de Sitter expansion**, $a(t) \propto e^{H t}$, with $H \approx $ const.

---

## the four key features

inflation must:
1. **last long enough** to dilute the pre-inflation problems — typically $N \approx 50$–$60$ **e-folds**
2. **end gracefully** — turning the inflaton's potential energy into thermal radiation in the **reheating** phase, allowing the standard hot Big Bang to start
3. **leave generic, scale-invariant perturbations** — primordial density perturbations with nearly the same amplitude on all scales, in agreement with CMB measurements
4. **predict gravitational waves** at a (small but possibly observable) level — primordial tensor modes leaving B-mode polarization in the CMB

---

## solving the standard model problems

### flatness

during inflation $|\Omega_K| \propto a^{-2}$ — *decreases* exponentially. starting from any pre-inflation curvature and inflating $N \approx 60$ e-folds:
$$|\Omega_K|_{\rm post} = |\Omega_K|_{\rm pre} \cdot e^{-2N} \sim |\Omega_K|_{\rm pre} \cdot 10^{-52}$$

so any reasonable starting curvature gets driven to $|\Omega_K| \approx 0$ — explaining today's $|\Omega_K| < 10^{-3}$.

### horizon

the comoving Hubble radius $1/(aH)$ shrinks during inflation (since $a$ grows exponentially while $H$ is constant). regions that were within causal contact before inflation got stretched far beyond the post-inflation horizon, but they remain "co-occupants" of a single past causal volume. in particular, the entire observable universe today comes from a single causally connected region at the start of inflation.

### monopoles

any GUT-scale topological defects (monopoles, cosmic strings) get diluted by $e^{3N}$ during inflation. their abundance falls to undetectable levels.

---

## generation of primordial perturbations

the very same accelerated expansion that solves the horizon and flatness problems **stretches quantum fluctuations** of the inflaton to macroscopic, eventually super-horizon, scales. once super-horizon, these perturbations are "frozen in" and become the seeds for all the structure we observe.

generic predictions:
- the primordial **scalar power spectrum** is nearly scale-invariant: $P_\zeta(k) \propto k^{n_s - 1}$ with $n_s$ slightly less than 1. measured: $n_s = 0.965 \pm 0.004$ (Planck 2018), perfectly consistent with single-field slow-roll inflation.
- the **tensor-to-scalar ratio** $r$ is small but nonzero. measured upper bound: $r < 0.06$ (Planck + BICEP/Keck). future experiments (LiteBIRD, CMB-S4) aim for $r \sim 10^{-3}$.

→ see [Inflaton scalar field dynamics](../../02_Zettel/Theory/Inflaton scalar field dynamics.html) and [Old vs new vs chaotic inflation, slow-roll](../../02_Zettel/Theory/Old vs new vs chaotic inflation, slow-roll.html) for the technical details.

---

## inflation in the bigger picture

inflation is **not** part of the standard hot Big Bang model in the strict sense. it is a *prequel*: a hypothetical phase before the radiation-dominated era. the standard hot Big Bang then takes over after **reheating**:
- inflation ends, the inflaton oscillates at the bottom of $V(\phi)$
- inflaton energy converts into radiation (other fields)
- universe is now in the radiation era, hot and dense, with the standard model species in thermal equilibrium

so the timeline is:
1. **inflation** ($t \sim 10^{-35}$ s, $T \gtrsim 10^{16}$ GeV)
2. **reheating** (tail of inflation)
3. **radiation domination** (BBN, CMB, etc., the standard story)
4. **matter domination** ($z < 3300$)
5. **Λ domination** ($z < 0.7$)

→ see [Brief thermal history](../../02_Zettel/Theory/Brief thermal history.html) for the full timeline.

---

## what we still don't know

- **the inflaton field**: not part of the SM; it could be the Higgs, or something completely new (axions, GUT-scale scalars, R^2 gravity from Starobinsky's model)
- **the energy scale of inflation**: $V^{1/4}$ could be anywhere from $\sim 10^{16}$ GeV (if $r$ is large) down to far lower
- **what came before inflation**: bouncing cosmology? eternal inflation? a true beginning?
- **why $r$ has not been detected yet**: implies the energy scale of inflation is below $10^{16}$ GeV, which is interesting

inflation is a beautiful idea that solves real problems and has made specific predictions verified by data ($n_s$ slightly less than 1, gaussian and adiabatic perturbations). but it is not yet a "theory of inflation" in the same sense that ΛCDM is — there are still many models, all consistent with current data.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Standard model problems](../../02_Zettel/Theory/Standard model problems.html)
- [Inflaton scalar field dynamics](../../02_Zettel/Theory/Inflaton scalar field dynamics.html)
- [Old vs new vs chaotic inflation, slow-roll](../../02_Zettel/Theory/Old vs new vs chaotic inflation, slow-roll.html)
- [Brief thermal history](../../02_Zettel/Theory/Brief thermal history.html)
- [Baryogenesis](../../02_Zettel/Theory/Baryogenesis.html)
- [Baumann_reference](../../02_Zettel/Theory/Baumann_reference.html) — chapter 2 is the rigorous treatment
