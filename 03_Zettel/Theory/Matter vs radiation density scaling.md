---
layout: "default"
title: "Matter vs radiation density scaling"
---
**matter** density scales as $\rho_m \propto a^{-3}$, while **radiation** as $\rho_r \propto a^{-4}$. the extra factor of $a^{-1}$ for radiation is the **photon energy redshift**. consequence: radiation **dominates the early universe**. matter takes over after equality at $z_{\rm eq} \sim 3400$.

## the scalings

from the continuity equation $\dot\rho + 3H(\rho + p) = 0$ with $p = w\rho$ (constant equation of state):
$$\rho \propto a^{-3(1+w)}$$

three canonical species:
- **matter** ($w = 0$): $\rho_m \propto a^{-3}$. dilution by volume only.
- **radiation** ($w = 1/3$): $\rho_r \propto a^{-4}$. volume × redshift.
- **dark energy** ($w = -1$): $\rho_\Lambda = $ const. doesn't dilute.

## why radiation has the extra $a^{-1}$

photons have:
- **number density** dropping as $a^{-3}$ (volume).
- **energy per photon** dropping as $a^{-1}$ (cosmological redshift).

so total energy density: $\rho_\gamma = n\,h\nu \propto a^{-3} \cdot a^{-1} = a^{-4}$.

equivalently: $\rho_\gamma \propto T^4$ + $T \propto 1/a$ (entropy conservation), giving $\rho_\gamma \propto a^{-4}$.

## matter-radiation equality

setting $\rho_m(a_{\rm eq}) = \rho_r(a_{\rm eq})$:
$$\rho_{m,0}\,a_{\rm eq}^{-3} = \rho_{r,0}\,a_{\rm eq}^{-4} \quad\Rightarrow\quad a_{\rm eq} = \rho_{r,0}/\rho_{m,0} = \Omega_r/\Omega_m$$

with current values $\Omega_r \approx 9.2 \times 10^{-5}$, $\Omega_m \approx 0.315$:
$$a_{\rm eq} \approx 1/3400, \quad z_{\rm eq} \approx 3400$$

## the cosmic eras

three regimes follow:
1. **radiation era** ($z > 3400$): $\rho_r$ dominates, $a \propto t^{1/2}$.
2. **matter era** ($0.3 < z < 3400$): $\rho_m$ dominates, $a \propto t^{2/3}$.
3. **dark-energy era** ($z < 0.3$): $\rho_\Lambda$ dominates, $a \propto e^{Ht}$.

## the energy budget today

$\Omega_r \approx 9 \times 10^{-5}$, so radiation is **today negligible** in the energy budget. but at $z \gtrsim 3400$ it dominated.

a useful number: $z_{\rm eq} \approx 3400$ corresponds to $T \approx T_0(1 + z_{\rm eq}) \approx 0.8$ eV. **before recombination** at $z = 1100$, $T = 0.26$ eV. so matter has been dominant since equality, well before recombination.

## the consequence - structure formation

before equality (radiation era):
- matter perturbations are **suppressed** by radiation pressure (Meszaros effect).
- linear growth is logarithmic.

after equality (matter era):
- matter perturbations grow as $\delta \propto a$.
- structures begin forming.

so the **equality scale** $k_{\rm eq}$ marks the transition in the matter power spectrum. observable.

## where it goes wrong

- the equality redshift depends on $\Omega_mh^2$, not on $\Omega_m$ alone.
- neutrinos count as radiation at equality, which raises $\Omega_r$ by 68%.
- there are two equalities, matter-radiation at $z \approx 3400$ and matter-$\Lambda$ at $z \approx 0.3$.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

- **Scale factor (cosmology)**. "The expansion of the universe is parametrized by a dimensionless scale factor a $a$ . Also known as the cosmic scale factor or sometimes the Robertson–Walker scale factor, this is a key parameter of the Friedmann equations. In the early stages of the Big Bang, most of the energy was in the form of radiation, and that radiation was the dominant influence on the expansion of the universe." ([Wikipedia](https://en.wikipedia.org/wiki/Scale_factor_%28cosmology%29))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Equation of state and density scaling]]
- [[Continuity equation]]
- [[Friedmann equations]]
- [[Cosmic eras]]
- [[Matter radiation equality]]
- [[Density parameters]]
- [[Cosmological redshift]]
- [[Conservation of entropy in a comoving volume]]
- [[Linear evolution of perturbations in expanding universe]]
- [[Observational_Cosmology_MOC]]



## Linked References

- [[Observational_Cosmology_MOC]]


