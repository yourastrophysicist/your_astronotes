---
layout: default
title: "Population of excited levels"
---

the line strength of a spectral feature is proportional to the number of atoms in the lower level of the transition. **Boltzmann + Saha together** give that population as a function of temperature (and electron density). plotting these functions vs $T$ for each species reveals exactly which spectral lines dominate at which temperature, generating the OBAFGKM pattern.

## the framework

start with element $X$ at total abundance $n_X$. it can sit in any ionisation stage $X^0, X^+, X^{2+}, ...$, each subdivided into atomic levels.

### Saha gives ionisation balance

$$\frac{n_X^{i+1} n_e}{n_X^i} = \frac{2 Z_{i+1}}{Z_i}\,\Phi(T)\,e^{-\chi_i/k_BT}$$
with $\Phi(T) = (2\pi m_e k_BT/h^2)^{3/2}$. solve for the **fraction in each ionisation stage** $f_X^i = n_X^i/n_X$ given $T$ and $n_e$.

### Boltzmann gives level populations within a stage

$$\frac{n_X^{i,k}}{n_X^i} = \frac{g_k\,e^{-E_k/k_BT}}{Z_i(T)}$$

so the fraction in level $k$ of stage $i$:
$$f_X^{i,k} = f_X^i \cdot g_k\,e^{-E_k/k_BT}/Z_i(T)$$

product of two factors:
1. **Saha factor**: how much $X$ is in stage $i$ vs other stages.
2. **Boltzmann factor**: which level of stage $i$ is populated.

## the resulting "bell curves"

for each species line, $f^{i,k}(T)$ has a **peak** at a specific $T$:

- **too cold**: most $X$ is in stage $i$, but the level $k$ is not excited (Boltzmann factor exponentially small).
- **too hot**: stage $i$ depleted by ionisation to $i+1$.
- **peak**: balance between excitation (Boltzmann) and survival (Saha).

the peak temperatures of various species line up exactly with the OBAFGKM sequence.

## the user has plots showing this

at `~/Documents/2/spectroscopy/Plots-20260501/`, plots of $f(T)$ vs $T$ for various species:
- `HI_pop_T.png`: H I in $n = 2$ vs $T$, peak around $10\,000$ K.
- `HeI_HeII_pop_T.png`: He I and He II vs $T$, peaks at $\sim 20\,000$ and $\sim 40\,000$ K.
- `MgI_pop_T.png`: Mg I in some excited level, peak at $\sim 5000$ K.
- `NaI_pop_T.png`: Na I in $3p$, peak at $\sim 4000$ K.
- `CaKH_pop_T.png`: Ca II in ground state (responsible for K + H lines), peak at $\sim 6000$ K, broad.

each curve has the same generic shape: rising on the cold side (Boltzmann excitation), falling on the hot side (Saha ionisation), with a peak that depends on the ionisation potential of the lower stage and the excitation energy of the level.

## the textbook table

approximate peak temperatures for common stellar lines:

| line / feature | peak $T$ (K) | spectral type |
|---|---|---|
| He II $\lambda 4686$ | $40\,000$ | O5 |
| He I $\lambda 4471$ | $22\,000$ | B2 |
| H Balmer | $10\,000$ | A0 |
| Ca II H+K | $5000$ | G2-K0 |
| Fe I, Fe II | $5000$ to $8000$ | F-K |
| Na I D | $4000$ | K |
| TiO bands | $3000$ | M5 |

## the consequence: a one-parameter sequence

every star's spectrum is essentially **one number's worth of variation**, namely $T_{\rm eff}$. given $T$, all line-strength patterns follow from two equations applied to a fixed atomic-physics input. abundances enter as a small modification.

this is the punchline of **Cecilia Payne 1925**: stars are mostly H + He, and the diversity of stellar spectra reflects only $T$ variation, not chemistry. it took decades for the community to fully accept this.

## see also

- [Boltzmann equation in spectroscopy](../../02_Zettel/Theory/Boltzmann equation in spectroscopy.html)
- [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.html)
- [Partition function](../../02_Zettel/Theory/Partition function.html)
- [Hydrogen population vs T](../../02_Zettel/Theory/Hydrogen population vs T.html)
- [Helium population vs T](../../02_Zettel/Theory/Helium population vs T.html)
- [Sodium population vs T](../../02_Zettel/Theory/Sodium population vs T.html)
- [Magnesium population vs T](../../02_Zettel/Theory/Magnesium population vs T.html)
- [Calcium population vs T](../../02_Zettel/Theory/Calcium population vs T.html)
- [Why the Sequence OBAFGKM](../../02_Zettel/Theory/Why the Sequence OBAFGKM.html)
- [Stellar spectra and spectral classification](../../02_Zettel/Theory/Stellar spectra and spectral classification.html)
- [History of stellar classification](../../02_Zettel/Theory/History of stellar classification.html)
