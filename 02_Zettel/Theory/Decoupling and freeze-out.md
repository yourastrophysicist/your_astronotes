---
layout: default
title: "Decoupling and freeze-out"
---

a particle species is in thermal equilibrium with the rest of the plasma as long as its interaction rate $\Gamma$ is fast compared to the expansion rate $H$:
$$\Gamma \gg H \quad \Rightarrow \quad \text{equilibrium}$$

once the interaction rate drops below $H$, the particle no longer interacts often enough to track the equilibrium distribution. it **decouples**, and its number density gets frozen at the comoving value it had at decoupling. this is **freeze-out**.

$$\Gamma \lesssim H \quad \Rightarrow \quad \text{decoupling}$$

---

## the freeze-out criterion

operationally, decoupling happens at the temperature $T_d$ where
$$\Gamma(T_d) = H(T_d)$$

for example:
- **photons** decouple from baryons at $T \sim 0.3$ eV (recombination): $\sigma_T n_e c$ falls below $H$
- **neutrinos** decouple from the plasma at $T \sim 1$ MeV: weak rates $G_F^2 T^5$ fall below $H \propto T^2$
- **WIMPs** of mass $\sim 100$ GeV decouple at $T \sim m/20$, after they've gone non-relativistic

after decoupling, the species' number density evolves only by dilution: $n \propto a^{-3}$. this is why we still see a CMB today — those photons last scattered at $z \sim 1100$ and have been free-streaming ever since.

---

## hot vs cold relics

depending on whether the species is **relativistic or non-relativistic** at decoupling:

- **hot relics**: $T_d \gg m$. relativistic at decoupling. abundance set by simple counting of relativistic dof at that temperature.
- **cold relics**: $T_d < m$. already non-relativistic at decoupling. abundance set by Boltzmann suppression $e^{-m/T_d}$ followed by freeze-out.

example:
- **neutrinos** in the standard model are hot relics: they decoupled at $T_d \sim 1$ MeV $\gg m_\nu \sim 0.1$ eV. today $\Omega_\nu \lesssim 10^{-3}$.
- **WIMPs** are cold relics: $T_d \sim m/20$, so they're already non-relativistic at decoupling. natural abundance $\Omega_{dm} h^2 \sim 0.1$ for weak-scale cross-sections — the **WIMP miracle**.

---

## the WIMP miracle

for a thermal relic that decouples while non-relativistic, the present abundance is
$$\Omega_{dm} h^2 \approx \frac{3 \times 10^{-27}\,\text{cm}^3/\text{s}}{\langle\sigma v\rangle}$$

remarkably, weak-scale annihilation cross-sections $\langle\sigma v\rangle \sim 10^{-26}$ cm$^3$/s give exactly $\Omega_{dm} h^2 \sim 0.1$ — the observed value. this is the **WIMP miracle**: dark matter at the electroweak scale "naturally" gets the right abundance.

→ see Dark matter relics — WIMP miracle.

---

## the n/p freeze-out as a textbook example

in BBN (see [BBN_overview](../../02_Zettel/Theory/BBN_overview.html)), the neutron-to-proton ratio is regulated by weak interactions:
$$n + \nu \leftrightarrow p + e, \qquad n \to p + e + \bar\nu, \dots$$

while $\Gamma_w \gg H$, $(n/p) = e^{-Q/T}$ tracks equilibrium. when $\Gamma_w \approx H$ at $T_F \sim 0.8$ MeV:
$$\left(\frac{n}{p}\right)_{\rm freeze-out} = e^{-Q/T_F} \approx \frac{1}{6}$$

this frozen ratio determines the primordial $^4$He abundance (about 25%).

→ see [BBN_neutron_proton_ratio](../../02_Zettel/Theory/BBN_neutron_proton_ratio.html).

---

## decoupling is not freezing-out for everyone

note: photons "decouple" at recombination, but they do not "freeze out" in the WIMP sense — there are huge numbers of them, and they continue to redshift in the standard $\rho \propto a^{-4}$ way. so "decoupling" is the more general term: a species stops interacting with the rest. "freeze-out" specifically refers to the moment when a species' comoving abundance becomes constant — typical for cold relics.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Thermal equilibrium in the early universe](../../02_Zettel/Theory/Thermal equilibrium in the early universe.html)
- [Conservation of entropy in a comoving volume](../../02_Zettel/Theory/Conservation of entropy in a comoving volume.html)
- [BBN_overview](../../02_Zettel/Theory/BBN_overview.html)
- [BBN_neutron_proton_ratio](../../02_Zettel/Theory/BBN_neutron_proton_ratio.html)
- Dark matter relics — WIMP miracle
- [Hot vs cold dark matter](../../02_Zettel/Theory/Hot vs cold dark matter.html)
- [Boltzmann equation in cosmology](../../02_Zettel/Theory/Boltzmann equation in cosmology.html)
- [Baumann_reference](../../02_Zettel/Theory/Baumann_reference.html) — chapter 3.1.2 covers decoupling and freeze-out in detail
