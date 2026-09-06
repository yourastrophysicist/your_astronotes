---
layout: default
title: "Spherical collapse"
---

linear perturbation theory works while $|\delta| \ll 1$. once $\delta \gtrsim 1$, the perturbation grows nonlinearly and eventually **collapses** into a virialized halo. the simplest analytic description is the **spherical collapse model**: an idealized uniform overdense sphere embedded in an FRW background.

---

## the setup

take a uniform sphere of mass $M$ and initial overdensity $\delta_i$ (small). because of Birkhoff's theorem, the dynamics of the sphere depend only on its own mass and not on what's outside. so the sphere evolves as if it were its own *closed* universe — the density inside is higher than the background, so the sphere recollapses.

three stages:
1. **expansion**: at first, the sphere expands with the rest of the universe but slows down faster
2. **turnaround**: at some moment, the sphere reaches maximum size, $\dot R_{\rm turn} = 0$
3. **collapse**: the sphere contracts and eventually virializes

the linear extrapolation of $\delta$ at the moment of full collapse (formally $R \to 0$ for a spherical, pressureless collapse) gives:
$$\delta_c \approx 1.686$$

so when *linearly* extrapolated $\delta$ reaches 1.686, the corresponding nonlinear region has actually already collapsed. this is the **collapse threshold**.

---

## the parametric solution

for a closed (overdense) sphere with $\Omega > 1$, the solution is:
$$R(\theta) = A(1 - \cos\theta)$$
$$t(\theta) = B(\theta - \sin\theta)$$

with $A^3 = GM B^2$ (relating expansion rate to total energy). turnaround at $\theta = \pi$, recollapse at $\theta = 2\pi$.

at the moment of formal collapse ($\theta = 2\pi$), the linearly extrapolated overdensity is $\delta_c = (3/5)(3\pi/2)^{2/3} \approx 1.686$.

at turnaround ($\theta = \pi$), the *physical* overdensity is:
$$\delta_{\rm turn} \approx 5.55$$

i.e. the actual sphere is about 5.5 times denser than the background at turnaround. (this is much larger than the linear extrapolation of $\delta_c \approx 1.686$ because nonlinear evolution accelerates collapse.)

---

## virialization

after turnaround, the collapsing sphere does not actually collapse to a singularity. instead, the matter virializes: shells cross, energy thermalizes, and the system settles into a quasi-equilibrium with virial radius $R_{\rm vir} = R_{\rm turn}/2$ (from the virial theorem).

the **virial overdensity**:
$$\Delta_{\rm vir} \approx 178\, [\Omega_m(z)]^{0.45}$$

for $\Omega_m \approx 1$ (matter-dominated era): $\Delta_{\rm vir} \approx 178$.

so a virialized halo is about 178 times denser than the background. hence the common convention of defining a halo's mass as that contained within an overdensity of 200 (sometimes 100, 500): $M_{200}$, $M_{500}$, etc. these are slightly different but mostly equivalent definitions.

---

## why $\delta_c \approx 1.686$ matters

the spherical collapse threshold is the input to the **Press-Schechter halo mass function** (see [Press-Schechter halo mass function](../../02_Zettel/Theory/Press-Schechter halo mass function.html)). the idea: given the linear matter power spectrum $P_m(k)$, smooth it on scale $R$ to get the variance $\sigma^2(R)$ of the linear $\delta$ field. the fraction of mass in collapsed halos of mass $> M(R)$ is approximately the probability that a Gaussian field exceeds $\delta_c$:
$$f_{\rm collapse}(>M) = \text{erfc}\left(\frac{\delta_c}{\sqrt 2 \sigma(M)}\right)$$

so $\delta_c$ is the bridge between linear theory and the actual abundance of dark-matter halos.

---

## limitations

spherical collapse is an idealization:
- real collapse is **triaxial**, not spherical (tidal fields shape halos)
- shell-crossing happens before formal collapse
- baryons add complications: gas cooling, feedback, etc.

corrections beyond spherical collapse:
- **ellipsoidal collapse** (Sheth-Tormen): more accurate threshold, better mass function
- **N-body simulations**: numerical, capture all the nonlinear dynamics
- **excursion set theory**: more rigorous treatment of the collapse threshold

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Linear evolution of perturbations in expanding universe](../../02_Zettel/Theory/Linear evolution of perturbations in expanding universe.html)
- [Growth factor D(z)](../../02_Zettel/Theory/Growth factor D(z).md)
- [Press-Schechter halo mass function](../../02_Zettel/Theory/Press-Schechter halo mass function.html)
- [Jeans analysis in expanding universe](../../02_Zettel/Theory/Jeans analysis in expanding universe.html)
- [Matter power spectrum and BAO](../../02_Zettel/Theory/Matter power spectrum and BAO.html)
