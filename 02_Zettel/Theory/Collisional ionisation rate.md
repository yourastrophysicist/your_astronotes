---
layout: default
title: "Collisional ionisation rate"
---

in hot enough plasma, **collisional ionisation** by free electrons becomes important alongside (or instead of) photoionisation. the dominant ionisation mechanism in shocks, hot coronae, and X-ray-emitting clusters.

## the rate

per atom, the collisional ionisation rate is:
$$C_i = n_e \int v\,\sigma_{\rm CI}(v)\,f(v)\,dv\quad\text{s}^{-1}$$

with $\sigma_{\rm CI}(v)$ the collisional ionisation cross section and $f(v)$ the Maxwellian. for a Maxwell-Boltzmann at temperature $T_e$:
$$C \approx 6.7 \times 10^7\,\frac{n_e}{T_e^{1/2}}\,\langle\sigma v\rangle\,e^{-\chi/k_BT_e}\,\text{s}^{-1}$$
with $\chi$ the ionisation potential.

approximate "Lotz formula" (Lotz 1968):
$$\sigma_{\rm CI}(E) \approx 4\pi a_0^2\,\sum_i \xi_i\,\frac{R^2}{\chi_i E}\,\ln(E/\chi_i)\quad\text{above threshold}$$

with $\xi_i$ the number of equivalent electrons at level $i$ and $R$ the Rydberg energy.

## key features

- **Boltzmann threshold**: only fast-tail electrons can ionise. exponentially suppressed at low $T_e$.
- **logarithmic rise** above threshold: $\sigma \propto \ln(E)$ for high-energy electrons.
- **scaling**: $C \propto T_e^{-1/2} e^{-\chi/k_BT_e}$. near $k_BT_e \sim \chi$, rapidly switches on.

## comparison with photoionisation

| process | rate | dominant in |
|---|---|---|
| photoionisation | $\Gamma \propto F_{\rm UV}$ | HII regions, AGN narrow-line |
| collisional ionisation | $C \propto n_e e^{-\chi/k_BT_e}$ | shocks, coronae, ICM |
| dielectronic recombination | inverse | hot plasma at $T \sim 10^6$ to $10^7$ |

so:
- **photoionisation dominates** when there's a strong UV source (HII regions, AGN).
- **collisional ionisation dominates** when the gas is hot enough that thermal electrons exceed the ionisation potential ($T > \chi/k_B$).

for hydrogen ($\chi = 13.6$ eV), $T_e \gtrsim 10^5$ K is needed for significant collisional ionisation. typical HII regions at $10^4$ K are far below this; their HII state is maintained entirely by photons.

## astronomical contexts

### shocks in supernova remnants
post-shock $T \sim 10^6$ to $10^8$ K. collisional ionisation drives high stages: O VII, O VIII, Fe XVII, etc., observable as X-ray emission lines.

### intracluster medium
$T \sim 10^7$ to $10^8$ K, gas is fully ionised. collisional ionisation maintains highly ionised stages (Fe XXIV, etc.) that emit X-ray free-free + lines.

### transition regions
in solar / stellar transition regions, $T$ rises from $10^4$ to $10^6$ K over a thin layer. each ionisation stage is briefly populated as $T$ crosses its peak abundance temperature. produces the FUV emission-line forest (Si IV, C IV, N V, O V).

## the equilibrium ratio

if photoionisation is absent, the steady-state ratio of two adjacent ionisation stages is set by collisional ionisation balanced by recombination:
$$\frac{n_{i+1}}{n_i} = \frac{C_i}{n_e \alpha_{\rm rec}}$$

solving gives the **collisional ionisation equilibrium (CIE)** abundance vs $T$ for each species. tabulated by SPEX, AtomDB, and CHIANTI.

at HII region temperatures, almost all atoms are in the lowest ionisation stage. at $T \sim 10^6$ K, intermediate stages dominate. at $T \sim 10^8$ K, fully stripped He-like + H-like stages dominate.

## see also

- [Photoionization rate](../../02_Zettel/Theory/Photoionization rate.html)
- [Recombination rate](../../02_Zettel/Theory/Recombination rate.html)
- [Photoionisation balance](../../02_Zettel/Theory/Photoionisation balance.html)
- [Ionisation parameter U](../../02_Zettel/Theory/Ionisation parameter U.html)
- [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.html) — analogous LTE formulation
- [Bremsstrahlung](../../02_Zettel/Theory/Bremsstrahlung.html)
