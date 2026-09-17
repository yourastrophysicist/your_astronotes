---
layout: "default"
title: "Salpeter Kroupa Chabrier IMFs"
name: "Salpeter Kroupa Chabrier IMFs"
description: "power-law and lognormal parametrizations of the stellar initial mass function from 1955 to 2003"
---
{% raw %}
three parametrizations of the [stellar IMF](./Stellar%20mass%20function%20xi%28M%29.html) dominate the literature. they differ mainly at low mass, where the IMF flattens and turns over, while agreeing on a roughly universal slope at high mass.

**Salpeter (1955)**

edwin salpeter measured a power-law IMF from solar-neighbourhood star counts:

$$\xi(M) \propto M^{-2.35}, \qquad M > 0.5\,M_\odot.$$

in the log form (used by him in the original paper) this is $\xi_L(\log M) \propto M^{-1.35}$, the **salpeter slope** $\Gamma = 1.35$. extrapolation of salpeter to arbitrarily low mass diverges in number, which is unphysical: low-mass stars are abundant but not infinite. salpeter is therefore valid only for $M \gtrsim 0.5\,M_\odot$.

salpeter's slope at high mass is robust and recovered (within errors) by every modern survey: top-heavy or bottom-heavy claims usually concern the **break mass** and **low-mass turnover**, not the slope above $\sim 1\,M_\odot$.

**Kroupa (2001) broken power-law**

pavel kroupa introduced a three-segment broken power-law to fit observed local star counts including the low-mass turnover:

$$\xi(M) \propto
\begin{cases}
M^{-0.3}, & 0.01 < M/M_\odot < 0.08 \\
M^{-1.3}, & 0.08 < M/M_\odot < 0.5 \\
M^{-2.3}, & 0.5 < M/M_\odot.
\end{cases}$$

the high-mass segment recovers salpeter; the low-mass slope is much shallower; the substellar segment (brown dwarfs) is nearly flat. the break at $0.5\,M_\odot$ is the empirical "low-mass turnover" of the IMF.

**Chabrier (2003) lognormal + power-law**

gilles chabrier fitted local field and cluster mass functions with a smooth lognormal form below $1\,M_\odot$, joined to a salpeter power-law above:

$$\xi_L(\log M) \propto
\begin{cases}
\exp\!\left[ -\frac{(\log M - \log M_c)^2}{2\sigma^2} \right], & M < 1\,M_\odot \\
M^{-1.35}, & M > 1\,M_\odot,
\end{cases}$$

with $M_c \approx 0.22\,M_\odot$ (system) or $0.08\,M_\odot$ (single stars) and $\sigma \approx 0.55$ dex. the lognormal has a clean physical motivation: the central limit theorem applied to multiplicative fragmentation processes naturally produces lognormals.

**comparison**

- at $M \gtrsim 1\,M_\odot$: all three agree, salpeter slope.
- at $M \sim 0.1\text{--}1\,M_\odot$: kroupa is slightly bottom-heavier than chabrier, because the broken power-law has a sharper transition.
- at $M \lesssim 0.1\,M_\odot$ (substellar): kroupa flattens, chabrier rolls over via the lognormal; data are sparse and JWST is now extending direct counts down to $\sim 5\,M_{\text{Jup}}$ in young clusters (e.g. trapezium).

**which to use?**

- for galaxy SED fitting and stellar-mass measurements: chabrier or kroupa (they give similar total stellar masses, $\sim 0.2$ dex lighter than salpeter).
- for chemical-evolution and supernova-rate models: kroupa (clean integration over mass bins).
- for back-of-envelope high-mass estimates: salpeter (still standard for $M \gtrsim 1\,M_\odot$).

**variants and extensions**

- **top-heavy IMF**: shallower high-mass slope $\Gamma < 1.35$, expected for [Pop III](./Population%20III%20stars.html) and maybe for starburst galaxies and the galactic-centre arches cluster.
- **bottom-heavy IMF**: steeper low-mass slope, claimed for massive ellipticals from gravity-sensitive absorption features (van dokkum & conroy 2010), still debated.
- **integrated galactic IMF (IGIMF)**: kroupa & weidner argue the IMF integrated over a galaxy depends on its star-formation rate.

## see also
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)
- [Stellar mass function xi(M)](./Stellar%20mass%20function%20xi%28M%29.html)
- [Initial vs present-day mass function](./Initial%20vs%20present-day%20mass%20function.html)
- [IMF from cluster luminosity functions](./IMF%20from%20cluster%20luminosity%20functions.html)
- [Population III stars](./Population%20III%20stars.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (9)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Binary%20stars%20in%20CMD.html" class="backlink-item">Binary stars in CMD</a></li>
    <li class="backlink-item-wrap"><a href="./Black%20holes%20in%20globular%20clusters.html" class="backlink-item">Black holes in globular clusters</a></li>
    <li class="backlink-item-wrap"><a href="./Critical%20metallicity%20for%20fragmentation.html" class="backlink-item">Critical metallicity for fragmentation</a></li>
    <li class="backlink-item-wrap"><a href="./IMF%20from%20cluster%20luminosity%20functions.html" class="backlink-item">IMF from cluster luminosity functions</a></li>
    <li class="backlink-item-wrap"><a href="./Initial%20mass%20function.html" class="backlink-item">Initial mass function</a></li>
    <li class="backlink-item-wrap"><a href="./Initial%20vs%20present-day%20mass%20function.html" class="backlink-item">Initial vs present-day mass function</a></li>
    <li class="backlink-item-wrap"><a href="./Population%20III%20stars.html" class="backlink-item">Population III stars</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20mass%20function%20xi%28M%29.html" class="backlink-item">Stellar mass function xi(M)</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
  </ul>
</div>
