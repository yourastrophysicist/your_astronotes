---
layout: default
title: "Linear evolution of perturbations in expanding universe"
---

small density perturbations $\delta(\vec x, t) \equiv \delta\rho/\bar\rho$ on a homogeneous expanding background evolve according to a closed set of equations: continuity, Euler, and Poisson. in the **linear regime** ($|\delta| \ll 1$), these equations have analytic solutions that describe the *growth* of structure from CMB-era seeds to galaxy-era inhomogeneities.

once $\delta \gtrsim 1$, linear theory breaks down and we have to go nonlinear (spherical collapse, N-body simulations).

---

## the perturbed fluid equations (Newtonian)

starting from the standard fluid equations on the expanding FRW background, perturbing density $\rho = \bar\rho + \delta\rho$, velocity $\vec v = H \vec x + \vec u$ (Hubble flow + peculiar velocity), and pressure, gravitational potential to first order in the perturbations:

**continuity:**
$$\dot\delta + \frac{1}{a}\nabla\cdot\vec u = 0$$

**Euler:**
$$\dot{\vec u} + H \vec u + \frac{1}{a}\nabla\Phi = -\frac{1}{a\bar\rho}\nabla\delta p$$

**Poisson:**
$$\nabla^2 \Phi = 4\pi G a^2 \bar\rho\, \delta$$

(here $\nabla$ is with respect to comoving $\vec x$, $a$ is the scale factor.)

---

## combining: the master perturbation equation

eliminate $\vec u$ between continuity and Euler. for a pressureless fluid ($\delta p = 0$), the result is:
$$\boxed{\,\ddot\delta + 2H\dot\delta - 4\pi G\bar\rho_m\, \delta = 0\,}$$

(also sometimes called the **growth equation**.)

three terms:
- $\ddot\delta$: acceleration of the perturbation
- $2H\dot\delta$: **Hubble friction** — expansion damps growth
- $-4\pi G\bar\rho_m\,\delta$: gravitational instability driving growth

with pressure included:
$$\ddot\delta + 2H\dot\delta + \left(\frac{c_s^2 k^2}{a^2} - 4\pi G\bar\rho_m\right)\delta = 0$$

where $c_s$ is the sound speed and $k$ is the comoving wavenumber. the second bracketed term is positive when the pressure gradient dominates (oscillation), negative when gravity dominates (growth) — see the **Jeans criterion** in [Jeans analysis in expanding universe](../../02_Zettel/Theory/Jeans analysis in expanding universe.md).

---

## solution in the matter-dominated era

in matter domination, $H = 2/(3t)$ and $\bar\rho_m \propto a^{-3}$. the growth equation has two power-law solutions:
$$\delta_+ \propto t^{2/3} \propto a$$
$$\delta_- \propto t^{-1}$$

the **growing mode** $\delta_+$ grows linearly with the scale factor. the **decaying mode** $\delta_-$ falls off and is irrelevant after a Hubble time. so:
$$\boxed{\,\delta(a) \propto a \quad \text{(matter domination)}\,}$$

---

## solution in the radiation-dominated era

in radiation domination, things are different. dark matter perturbations on sub-horizon scales experience the radiation-dominated $H \propto t^{-1}$, but the source term $\bar\rho_m$ is small compared to $\bar\rho_\gamma$. the result is **Meszaros suppression**:
$$\delta_m \propto \log(a)$$

i.e. nearly constant, only logarithmic growth.

so dark matter perturbations grow strongly only after matter-radiation equality at $z_{\rm eq} \sim 3300$. the Meszaros effect is what determines the position of the **turnover** in the matter power spectrum (see [Matter power spectrum and BAO](../../02_Zettel/Theory/Matter power spectrum and BAO.md)).

---

## solution in the Λ-dominated era

in Λ domination, the growth equation has:
$$\ddot\delta + 2H\dot\delta - 0 \cdot \delta = 0$$

(no source, since $\bar\rho_m \to 0$ at late times.) the growing mode **freezes out** — no further growth. perturbations stop growing once Λ takes over at $z \sim 0.7$.

so the **growth factor** $D(a)$ — the amplitude of $\delta(a)$ relative to today — is:
$$D(a) \approx \begin{cases} \log(a)\quad (\text{rad. dominated, sub-horizon}) \\ a \quad (\text{matter dominated}) \\ \text{constant}\quad (\text{Λ dominated}) \end{cases}$$

→ see [Growth factor D(z)](../../02_Zettel/Theory/Growth factor D(z).md) for the full analytic form.

---

## why this matters

the linear growth solution is the **bridge** between the CMB era and the modern universe.

- at $z \sim 1100$ (CMB): $\delta \sim 10^{-5}$ in matter
- if matter-dominated for the entire interval: $\delta(0) \sim \delta(1100) \times 1100 = 10^{-2}$
- but with Λ taking over at $z \sim 0.7$, the actual growth between $z = 1100$ and $z = 0$ is suppressed: $D(z=1100)/D(z=0) \approx 1/780$, so $\delta(0) \sim 10^{-5} \times 780 \approx 10^{-2}$

→ matches the observed CMB anisotropies of $\sim 10^{-5}$ growing into the cosmic web of $\sim 10^{-1}$–$1$ density contrasts in galaxy clusters today.

so linear theory works *all the way* from the CMB to large-scale structure today — at least for the largest-scale modes that have not yet entered the nonlinear regime.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md)
- [Jeans analysis in expanding universe](../../02_Zettel/Theory/Jeans analysis in expanding universe.md)
- [Growth factor D(z)](../../02_Zettel/Theory/Growth factor D(z).md)
- [Spherical collapse](../../02_Zettel/Theory/Spherical collapse.md)
- [Press-Schechter halo mass function](../../02_Zettel/Theory/Press-Schechter halo mass function.md)
- [Matter power spectrum and BAO](../../02_Zettel/Theory/Matter power spectrum and BAO.md)
- [Baumann_reference](../../02_Zettel/Theory/Baumann_reference.md) — chapters 4 and 5 are the rigorous treatment
