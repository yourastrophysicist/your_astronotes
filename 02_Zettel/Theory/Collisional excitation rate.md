---
layout: default
title: "Collisional excitation rate"
---

in low-density photoionised gas, atoms are excited from the ground state by **collisions with free electrons** rather than by absorption of starlight. the collisional excitation rate sets the strengths of forbidden lines and is the central ingredient of nebular line-emission theory.

## the rate

for a transition from level $l$ to $u$ with energy gap $E_{ul}$:
$$q_{lu}(T_e) = \int_0^\infty v\,\sigma_{lu}(v)\,f(v)\,dv\quad\text{cm}^3\,\text{s}^{-1}$$

where $f(v)$ is the Maxwell-Boltzmann velocity distribution at electron temperature $T_e$ and $\sigma_{lu}(v)$ is the collisional excitation cross section.

approximation (Mendoza, Aggarwal):
$$q_{lu}(T_e) \approx \frac{8.629 \times 10^{-6}}{\sqrt{T_e}}\,\frac{\Omega(l, u)}{g_l}\,e^{-E_{ul}/k_BT_e}\quad\text{cm}^3\,\text{s}^{-1}$$

with $\Omega(l, u)$ the **collision strength** (a tabulated atomic-physics quantity, dimensionless, of order unity) and $T_e$ in K.

## what each term does

- $T_e^{-1/2}$: faster electrons spend less time near the atom; Boltzmann velocity distribution narrows with $T$.
- $\Omega(l, u)/g_l$: weighted cross section.
- $e^{-E_{ul}/k_BT_e}$: Boltzmann suppression. only fast-tail electrons can excite.

## the inverse: collisional de-excitation

related by detailed balance (microscopic reversibility):
$$q_{ul}(T_e) = \frac{g_l}{g_u}\,e^{E_{ul}/k_BT_e}\,q_{lu}(T_e)$$

so de-excitation is faster (no Boltzmann suppression) but with the same overall scale.

## emissivity from collisional excitation

once excited, the atom can decay radiatively (rate $A_{ul}$) or be de-excited collisionally (rate $n_e q_{ul}$). the line emissivity is:
$$j_\nu = \frac{n_l n_e q_{lu} A_{ul}\,h\nu_{ul}}{A_{ul} + n_e q_{ul}}$$

two regimes by density:

### low density ($n_e \ll n_c$)
$A_{ul} \gg n_e q_{ul}$. every excitation leads to a photon. emissivity $\propto n_e q_{lu}$, so $\propto n_e$ at fixed $T_e$.
$$j \propto n_e\,e^{-E_{ul}/k_BT_e}$$

### high density ($n_e \gg n_c$)
collisional de-excitation wins. $j \propto A_{ul}$, **independent of $n_e$**. line saturates.

the **critical density** $n_c = A_{ul}/q_{ul}$ marks the transition. see [Critical density](../../02_Zettel/Theory/Critical density.md).

## the temperature diagnostics

different forbidden lines have different $E_{ul}$, hence different temperature dependencies. ratios of two lines from the **same upper level** of the same ion eliminate $A_{ul}$ and $n_e$ and depend only on $T_e$:
$$\frac{F(\lambda_1)}{F(\lambda_2)} = \frac{A_1 \nu_1}{A_2 \nu_2} = \text{const}$$

ratios of lines from **different upper levels** of the same ion depend on the ratio of Boltzmann factors $\to$ direct $T_e$:
$$\frac{F(\lambda_1)}{F(\lambda_2)} \propto e^{-(E_1 - E_2)/k_BT_e}$$

example: $[OIII]\,\lambda 4363/(\lambda 4959 + \lambda 5007)$ is highly $T_e$-sensitive because $\lambda 4363$ comes from a much higher level. see [OIII forbidden lines](../../02_Zettel/Theory/OIII forbidden lines.md).

## see also

- [Statistical equilibrium equations](../../02_Zettel/Theory/Statistical equilibrium equations.md)
- [Two-level atom](../../02_Zettel/Theory/Two-level atom.md)
- [Critical density](../../02_Zettel/Theory/Critical density.md)
- [Forbidden lines](../../02_Zettel/Theory/Forbidden lines.md)
- [OIII forbidden lines](../../02_Zettel/Theory/OIII forbidden lines.md)
- [SII forbidden lines](../../02_Zettel/Theory/SII forbidden lines.md)
- [Forbidden line diagnostics](../../02_Zettel/Theory/Forbidden line diagnostics.md)
- [Boltzmann equation in spectroscopy](../../02_Zettel/Theory/Boltzmann equation in spectroscopy.md)
- [Spectroscopic Te diagnostics](../../02_Zettel/Theory/Spectroscopic Te diagnostics.md)
