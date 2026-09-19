---
layout: "default"
title: "Recombination rate"
---
the rate at which free electrons recombine with ions to form neutral atoms is the **recombination rate coefficient** $\alpha(T_e)$. balances ionisation in steady-state photoionised gas.

## the formula

per ion, the recombination rate is:
$$R_i = n_e \alpha_i(T_e)\quad\text{s}^{-1}$$

with $\alpha_i(T_e)$ the **recombination coefficient** in cm$^3$ s$^{-1}$ for ion stage $i$. depends weakly on $T_e$.

for hydrogenic recombination at $T_e = 10^4$ K:
- **Case A** (sums over all final levels including ground): $\alpha_A \approx 4.2 \times 10^{-13}$ cm$^3$ s$^{-1}$.
- **Case B** (excludes direct-to-ground, applicable in optically thick HII regions): $\alpha_B \approx 2.6 \times 10^{-13}$ cm$^3$ s$^{-1}$.

see [Case A vs Case B recombination](Case%20A%20vs%20Case%20B%20recombination.html).

## scaling

$\alpha \propto T_e^{-0.7}$ approximately. at lower $T_e$, electrons are slower and have more time to recombine; recombination rate increases.

at $T_e = 5000$ K: $\alpha_B \sim 4.5 \times 10^{-13}$ cm$^3$ s$^{-1}$.
at $T_e = 10^4$ K: $\alpha_B \sim 2.6 \times 10^{-13}$.
at $T_e = 2 \times 10^4$ K: $\alpha_B \sim 1.6 \times 10^{-13}$.

## the timescale

recombination time = $1/(n_e \alpha)$. for a typical HII region with $n_e = 10^2$ cm$^{-3}$ and $\alpha_B = 2.6 \times 10^{-13}$:
$$t_{\rm rec} = (10^2 \cdot 2.6 \times 10^{-13})^{-1}\,\text{s} \approx 4 \times 10^{10}\,\text{s} \approx 1200\,\text{yr}$$

so each ion takes $\sim$ kyr to recombine on average. compare with the ionisation timescale ($\sim 30$ s for a typical photon density): photoionisation is much faster than recombination, so an HII region maintains a high ionisation fraction.

## the dielectronic recombination

at $T \gtrsim 10^4$ K, an additional channel opens: **dielectronic recombination**, where the captured electron's kinetic energy excites a bound electron, forming a doubly-excited state that then radiatively cascades. dominant for many heavy ions at coronal temperatures.

contributes significantly to the total recombination rate at $T = 10^5$ to $10^7$ K. at HII region temperatures, radiative recombination dominates.

## the inverse of photoionisation

in steady state, balance:
$$n_X^i\,\Gamma_i = n_X^{i+1}\,n_e\,\alpha_i(T_e)$$

solve for the ion fraction:
$$\frac{n_X^{i+1}}{n_X^i} = \frac{\Gamma_i}{n_e\alpha_i}$$

so high $\Gamma$ or low $n_e$ (high $U$) means more ionised; low $\Gamma$ or high $n_e$ means less ionised. see [Photoionisation balance](Photoionisation%20balance.html) and [Ionisation parameter U](Ionisation%20parameter%20U.html).

## see also

- [Photoionization rate](Photoionization%20rate.html)
- [Collisional ionisation rate](Collisional%20ionisation%20rate.html)
- [Photoionisation balance](Photoionisation%20balance.html)
- [Ionisation parameter U](Ionisation%20parameter%20U.html)
- [Optically thin recombination lines](Optically%20thin%20recombination%20lines.html)
- [Recombination continuum](Recombination%20continuum.html)
- [Case A vs Case B recombination](Case%20A%20vs%20Case%20B%20recombination.html)
- Strömgren sphere

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Collisional%20ionisation%20rate.html" class="backlink-item">Collisional ionisation rate</a></li>
    <li class="backlink-item-wrap"><a href="Ionisation%20parameter%20U.html" class="backlink-item">Ionisation parameter U</a></li>
    <li class="backlink-item-wrap"><a href="Photoionisation%20balance.html" class="backlink-item">Photoionisation balance</a></li>
    <li class="backlink-item-wrap"><a href="Photoionization%20rate.html" class="backlink-item">Photoionization rate</a></li>
    <li class="backlink-item-wrap"><a href="Recombination%20continuum.html" class="backlink-item">Recombination continuum</a></li>
    <li class="backlink-item-wrap"><a href="Stromgren%20sphere%20derivation.html" class="backlink-item">Stromgren sphere derivation</a></li>
    <li class="backlink-item-wrap"><a href="Stromgren%20sphere.html" class="backlink-item">Stromgren sphere</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

