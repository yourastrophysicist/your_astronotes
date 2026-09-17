---
layout: "default"
title: "Population of excited levels"
---
{% raw %}
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

- [Boltzmann equation in spectroscopy](./Boltzmann%20equation%20in%20spectroscopy.html)
- [Saha ionisation equation](./Saha%20ionisation%20equation.html)
- [Partition function](./Partition%20function.html)
- [Hydrogen population vs T](./Hydrogen%20population%20vs%20T.html)
- [Helium population vs T](./Helium%20population%20vs%20T.html)
- [Sodium population vs T](./Sodium%20population%20vs%20T.html)
- [Magnesium population vs T](./Magnesium%20population%20vs%20T.html)
- [Calcium population vs T](./Calcium%20population%20vs%20T.html)
- [Why the Sequence OBAFGKM](./Why%20the%20Sequence%20OBAFGKM.html)
- [Stellar spectra and spectral classification](./Stellar%20spectra%20and%20spectral%20classification.html)
- [History of stellar classification](./History%20of%20stellar%20classification.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (11)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Boltzmann%20equation%20in%20spectroscopy.html" class="backlink-item">Boltzmann equation in spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="./Calcium%20population%20vs%20T.html" class="backlink-item">Calcium population vs T</a></li>
    <li class="backlink-item-wrap"><a href="./Helium%20population%20vs%20T.html" class="backlink-item">Helium population vs T</a></li>
    <li class="backlink-item-wrap"><a href="./History%20of%20stellar%20classification.html" class="backlink-item">History of stellar classification</a></li>
    <li class="backlink-item-wrap"><a href="./Hydrogen%20population%20vs%20T.html" class="backlink-item">Hydrogen population vs T</a></li>
    <li class="backlink-item-wrap"><a href="./Magnesium%20population%20vs%20T.html" class="backlink-item">Magnesium population vs T</a></li>
    <li class="backlink-item-wrap"><a href="./Partition%20function.html" class="backlink-item">Partition function</a></li>
    <li class="backlink-item-wrap"><a href="./Saha%20ionisation%20equation.html" class="backlink-item">Saha ionisation equation</a></li>
    <li class="backlink-item-wrap"><a href="./Sodium%20population%20vs%20T.html" class="backlink-item">Sodium population vs T</a></li>
    <li class="backlink-item-wrap"><a href="./Why%20the%20Sequence%20OBAFGKM.html" class="backlink-item">Why the Sequence OBAFGKM</a></li>
  </ul>
</div>
