---
layout: default
title: "Boltzmann equation in cosmology"
---

when interactions become slow compared to the Hubble rate, a species departs from thermal equilibrium and its phase-space distribution must be tracked dynamically. the master equation for this is the **Boltzmann equation**:
$$\frac{df}{dt} = C[f]$$

with $f(p, t)$ the phase-space distribution function and $C[f]$ the **collision operator** that accounts for all the relevant interactions.

in cosmology this is what governs:
- dark matter freeze-out (see Dark matter relics — WIMP miracle)
- neutrino decoupling
- recombination (see [Saha equation and recombination](../../02_Zettel/Theory/Saha equation and recombination.html))
- BBN (see [BBN_overview](../../02_Zettel/Theory/BBN_overview.html))

---

## the FRW form of $df/dt$

in an expanding universe, the total time derivative includes both the explicit time dependence and the redshifting of momentum:
$$\frac{df}{dt} = \frac{\partial f}{\partial t} - H\, p\, \frac{\partial f}{\partial p}$$

so the Boltzmann equation in FRW becomes:
$$\frac{\partial f}{\partial t} - H\, p\, \frac{\partial f}{\partial p} = C[f]$$

---

## reducing to a number-density equation

usually we do not need the full phase-space distribution; just the number density $n(t) = \int f(p, t) g\, d^3p/(2\pi)^3$. integrating the Boltzmann equation over momentum and dividing by the volume:

$$\boxed{\,\frac{dn}{dt} + 3 H n = \int C[f]\, g\, \frac{d^3p}{(2\pi)^3}\,}$$

the LHS is the rate of change of $n$ minus the dilution from expansion ($3Hn$). the RHS is the net rate of all reactions producing or destroying the species.

---

## a generic two-particle reaction $1 + 2 \leftrightarrow 3 + 4$

assume thermal kinetic equilibrium so that all species follow Maxwell-Boltzmann velocity distributions. then the collision operator simplifies to:
$$\frac{dn_1}{dt} + 3 H n_1 = -\langle\sigma v\rangle_{12 \to 34}\left[n_1 n_2 - \left(\frac{n_1 n_2}{n_3 n_4}\right)_{\rm EQ} n_3 n_4\right]$$

with $\langle\sigma v\rangle$ the thermally averaged cross-section times relative velocity. the equation says: net rate $\propto$ (forward rate) $-$ (backward rate, balanced by detailed balance).

in equilibrium, the bracketed term vanishes, and $n_i$ follow the equilibrium distributions.

out of equilibrium ($\Gamma \lesssim H$), the bracketed term is nonzero, and $n$ deviates from $n_{\rm EQ}$.

---

## application 1: dark matter freeze-out

for a thermal relic $\chi$ that annihilates into SM particles, $\chi\bar\chi \leftrightarrow X\bar X$:
$$\frac{dn_\chi}{dt} + 3 H n_\chi = -\langle\sigma v\rangle [n_\chi^2 - n_{\chi,{\rm EQ}}^2]$$

at high $T$ ($\Gamma \gg H$), $n_\chi \approx n_{\chi,{\rm EQ}}$ which decreases as $e^{-m_\chi/T}$. at low $T$ ($\Gamma \lesssim H$), the annihilation slows down, and $n_\chi$ "freezes out" at some asymptotic value.

solving gives:
$$\Omega_\chi h^2 \approx \frac{3 \times 10^{-27}\,\text{cm}^3/\text{s}}{\langle\sigma v\rangle}$$

→ the **WIMP miracle**. see Dark matter relics — WIMP miracle.

---

## application 2: BBN

for primordial nucleosynthesis, we need the Boltzmann equation for *each* nuclear species, with collision terms for all the nuclear reactions among them. this gives a coupled system of ODEs:
$$\frac{d n_A}{dt} + 3 H n_A = \sum_{\rm reactions}\dots$$

solved numerically by codes like PArthENoPE, PRIMAT, AlterBBN. the abundances of D, $^3$He, $^4$He, $^7$Li versus $\eta$ all come out of these calculations. → see [BBN_predictions](../../02_Zettel/Theory/BBN_predictions.html).

---

## application 3: recombination

for the ionization fraction $X_e = n_e/n_b$:
$$\frac{dX_e}{dt} = ...$$

(the **Peebles equation**, simplified version of the Boltzmann equation for hydrogen.) the Saha equation is the equilibrium limit. as recombination proceeds, $X_e$ deviates from Saha and freezes out at $X_e \sim 10^{-3}$. → see [Saha equation and recombination](../../02_Zettel/Theory/Saha equation and recombination.html).

---

## why this framework is so powerful

the Boltzmann equation gives us a **single unified language** for all out-of-equilibrium processes in cosmology:
- a species in thermal equilibrium: $C[f] \approx 0$, $f = f_{\rm EQ}$
- a species at decoupling: $\Gamma \sim H$, $n$ deviates from $n_{\rm EQ}$ by a calculable amount
- a frozen-out relic: $C[f] \to 0$, $n a^3 = $ const

so once you have the cross-sections and masses, you can in principle compute the abundance of any thermal species at any time. this is the engine that generates all the predictions of standard cosmology beyond the equilibrium era.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Decoupling and freeze-out](../../02_Zettel/Theory/Decoupling and freeze-out.html)
- [Thermal equilibrium in the early universe](../../02_Zettel/Theory/Thermal equilibrium in the early universe.html)
- [Saha equation and recombination](../../02_Zettel/Theory/Saha equation and recombination.html)
- [BBN_overview](../../02_Zettel/Theory/BBN_overview.html)
- Dark matter relics — WIMP miracle
- [Hot vs cold dark matter](../../02_Zettel/Theory/Hot vs cold dark matter.html)
- [Baumann_reference](../../02_Zettel/Theory/Baumann_reference.html) — chapter 3.3.1 has the rigorous derivation
