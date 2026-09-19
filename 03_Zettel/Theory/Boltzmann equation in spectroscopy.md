---
layout: "default"
title: "Boltzmann equation in spectroscopy"
---
the **Boltzmann equation** gives the relative populations of two energy levels of the same ion at thermal equilibrium with temperature $T$. fundamental for predicting line strengths.

## the equation

$$\boxed{\, \frac{n_i}{n_j} = \frac{g_i}{g_j}\,e^{-(E_i - E_j)/k_BT} \,}$$

where:
- $n_i, n_j$ = number densities (or fractions) of atoms in levels $i$ and $j$.
- $g_i, g_j$ = statistical weights ([Statistical weight g](Statistical%20weight%20g.html)).
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

Boltzmann gives populations within an ionisation stage; Saha ([Saha ionisation equation](Saha%20ionisation%20equation.html)) gives ratios between adjacent stages. together they specify the full distribution. usually computed with software (e.g. ATLAS9, MARCS, PHOENIX) that iterates.

## see also

- [Saha ionisation equation](Saha%20ionisation%20equation.html)
- [Statistical weight g](Statistical%20weight%20g.html)
- [Partition function](Partition%20function.html)
- [Population of excited levels](Population%20of%20excited%20levels.html)
- [Why the Sequence OBAFGKM](Why%20the%20Sequence%20OBAFGKM.html)
- [Number density and energy density at thermal equilibrium](Number%20density%20and%20energy%20density%20at%20thermal%20equilibrium.html) — cosmological version
- [Hydrogen population vs T](Hydrogen%20population%20vs%20T.html)
- [Helium population vs T](Helium%20population%20vs%20T.html)
- [Local thermodynamic equilibrium LTE](Local%20thermodynamic%20equilibrium%20LTE.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (17)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Calcium%20population%20vs%20T.html" class="backlink-item">Calcium population vs T</a></li>
    <li class="backlink-item-wrap"><a href="Collisional%20excitation%20rate.html" class="backlink-item">Collisional excitation rate</a></li>
    <li class="backlink-item-wrap"><a href="Curve%20of%20growth%20abundance%20analysis.html" class="backlink-item">Curve of growth abundance analysis</a></li>
    <li class="backlink-item-wrap"><a href="Helium%20population%20vs%20T.html" class="backlink-item">Helium population vs T</a></li>
    <li class="backlink-item-wrap"><a href="History%20of%20stellar%20classification.html" class="backlink-item">History of stellar classification</a></li>
    <li class="backlink-item-wrap"><a href="Hydrogen%20population%20vs%20T.html" class="backlink-item">Hydrogen population vs T</a></li>
    <li class="backlink-item-wrap"><a href="Local%20thermodynamic%20equilibrium%20LTE.html" class="backlink-item">Local thermodynamic equilibrium LTE</a></li>
    <li class="backlink-item-wrap"><a href="Magnesium%20population%20vs%20T.html" class="backlink-item">Magnesium population vs T</a></li>
    <li class="backlink-item-wrap"><a href="Partition%20function.html" class="backlink-item">Partition function</a></li>
    <li class="backlink-item-wrap"><a href="Population%20of%20excited%20levels.html" class="backlink-item">Population of excited levels</a></li>
    <li class="backlink-item-wrap"><a href="Saha%20ionisation%20equation.html" class="backlink-item">Saha ionisation equation</a></li>
    <li class="backlink-item-wrap"><a href="Sodium%20population%20vs%20T.html" class="backlink-item">Sodium population vs T</a></li>
    <li class="backlink-item-wrap"><a href="Source%20function.html" class="backlink-item">Source function</a></li>
    <li class="backlink-item-wrap"><a href="Statistical%20equilibrium%20equations.html" class="backlink-item">Statistical equilibrium equations</a></li>
    <li class="backlink-item-wrap"><a href="Statistical%20weight%20g.html" class="backlink-item">Statistical weight g</a></li>
    <li class="backlink-item-wrap"><a href="Why%20the%20Sequence%20OBAFGKM.html" class="backlink-item">Why the Sequence OBAFGKM</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

