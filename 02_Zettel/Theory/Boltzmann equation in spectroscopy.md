---
layout: default
title: "Boltzmann equation in spectroscopy"
---

the **Boltzmann equation** gives the relative populations of two energy levels of the same ion at thermal equilibrium with temperature $T$. fundamental for predicting line strengths.

## the equation

$$\boxed{\, \frac{n_i}{n_j} = \frac{g_i}{g_j}\,e^{-(E_i - E_j)/k_BT} \,}$$

where:
- $n_i, n_j$ = number densities (or fractions) of atoms in levels $i$ and $j$.
- $g_i, g_j$ = statistical weights ([Statistical weight g](../../02_Zettel/Theory/Statistical weight g.md)).
- $E_i, E_j$ = energies of the two levels.
- $T$ = temperature.

interpretation: at high $T$, the exponential is mild and excited states are populated. at low $T$, only the ground state.

## generalisation: full equilibrium distribution

extending to all levels of the ion:
$$\frac{n_i}{n_{\rm tot}} = \frac{g_i\,e^{-E_i/k_BT}}{Z(T)}$$
where the **partition function** is
$$Z(T) = \sum_k g_k\,e^{-E_k/k_BT}$$
the sum over all bound levels (truncated by ionisation in practice).

so the fraction in any specific level is determined by $T$ + the level structure.

## benchmarks

at $T = 5800$ K (solar photosphere), $k_B T = 0.50$ eV:
- excitation to a level $1$ eV above ground: $e^{-2.0} \approx 0.14$.
- excitation to $2$ eV: $e^{-4.0} \approx 0.018$.
- excitation to $5$ eV: $e^{-10} \approx 5 \times 10^{-5}$.
- excitation to $10$ eV: $\sim 10^{-9}$, essentially nothing.

so for stellar atmosphere work, only levels within a few eV of the ground state are appreciably populated.

## hydrogen Balmer at solar $T$

H ground at $0$ eV, $n = 2$ at $10.2$ eV. ratio:
$$\frac{n_2}{n_1} = \frac{8}{2}\,e^{-10.2/0.5} = 4 \cdot e^{-20.4} \sim 5 \times 10^{-9}$$

so very few H atoms are in $n = 2$ in the Sun. yet Balmer absorption is observable! the trick is that **the column density** of $n = 2$ atoms still adds up across the entire photosphere, and the oscillator strength is large.

at $T = 10\,000$ K (A0 star), the same ratio is $\sim 10^{-4}$, $5 \times 10^4$ times more, dramatically stronger Balmer absorption. peak line strength.

at $T = 25\,000$ K (B0), Saha-driven ionisation has eaten most of the H I, so even though excitation is high, there are few neutral H atoms to absorb. line strength weakens again.

this combination of Boltzmann + Saha explains the OBAFGKM line-strength sequence.

## the LTE assumption

the Boltzmann formula assumes **local thermodynamic equilibrium** (LTE): collisions occur faster than radiative processes, so populations relax to the equilibrium value at the local $T$. valid in dense regions: stellar interiors, deep stellar photospheres.

departures from LTE: chromospheres, coronae, and any optically thin gas where radiation rates dominate over collisions. there one must solve the **statistical equilibrium equations** directly (Block 6).

## Saha + Boltzmann together

Boltzmann gives populations within an ionisation stage; Saha ([Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.md)) gives ratios between adjacent stages. together they specify the full distribution. usually computed with software (e.g. ATLAS9, MARCS, PHOENIX) that iterates.

## see also

- [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.md)
- [Statistical weight g](../../02_Zettel/Theory/Statistical weight g.md)
- [Partition function](../../02_Zettel/Theory/Partition function.md)
- [Population of excited levels](../../02_Zettel/Theory/Population of excited levels.md)
- [Why the Sequence OBAFGKM](../../02_Zettel/Theory/Why the Sequence OBAFGKM.md)
- [Number density and energy density at thermal equilibrium](../../02_Zettel/Theory/Number density and energy density at thermal equilibrium.md) — cosmological version
- [Hydrogen population vs T](../../02_Zettel/Theory/Hydrogen population vs T.md)
- [Helium population vs T](../../02_Zettel/Theory/Helium population vs T.md)
- [Local thermodynamic equilibrium LTE](../../02_Zettel/Theory/Local thermodynamic equilibrium LTE.md)
