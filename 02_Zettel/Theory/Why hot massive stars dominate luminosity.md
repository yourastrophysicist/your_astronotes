---
layout: default
title: "Why hot massive stars dominate luminosity"
---

a key qualitative result that comes up repeatedly: even though massive stars are rare in number, they dominate the **integrated luminosity** at almost every wavelength shortward of their peak. answer to obs3.pdf in spoken form.

## the Stefan-Boltzmann scaling

for a star approximated as a blackbody:
$$L = 4\pi R^2 \sigma_{SB}\, T^4$$

so the power scales as the **fourth power of $T$** and as the **square of $R$**.

## the main-sequence M-L relation

stellar structure equations on the main sequence give roughly
$$L \propto M^{3.5}$$
($\sim 4$ for $M > M_\odot$, $\sim 2.3$ for $M < M_\odot$). over the relevant mass range $0.1$ to $100\,M_\odot$, $L$ varies by **eight orders of magnitude**.

physically: more massive stars have hotter cores, more efficient nuclear burning (CNO cycle dominates above $\sim 1.3\,M_\odot$), higher $T$ at the surface (steeper temperature gradient), and slightly larger $R$.

## the IMF weighting

the [Initial mass function](../../02_Zettel/Theory/Initial mass function.html) $\xi(M) \propto M^{-2.35}$ (Salpeter) means most stars are low-mass. but the **bolometric light** from a stellar population is
$$L_{\rm tot} = \int \xi(M)\, L(M)\, dM \propto \int M^{-2.35} M^{3.5}\, dM = \int M^{1.15}\, dM$$
which is **dominated by the high-mass end** of the integration range.

quantitatively, for a Salpeter SSP just after a burst:
- by **number**: $\sim 99\%$ of stars are $< 1\,M_\odot$.
- by **mass**: $\sim 60\%$ of total mass is $< 1\,M_\odot$ (with truncation at $0.1\,M_\odot$).
- by **bolometric light**: $\sim 70\%$ comes from $M > 5\,M_\odot$ at age $\sim 10$ Myr.
- by **UV light**: $\sim 99\%$ comes from $M > 10\,M_\odot$.

after the high-mass stars die ($\tau_{MS} \propto M^{-2.5}$), the dominant contributor shifts to red giants of slightly lower mass.

## the wavelength dependence

at any wavelength $\lambda$ shortward of the peak of a star's blackbody spectrum, that star contributes proportionally more than its bolometric share. so:
- **UV** ($\sim 100$ to $300$ nm): dominated by O and early-B stars ($T > 20\,000$ K).
- **optical** ($400$ to $700$ nm): contributions from F, G, K, and earlier types.
- **NIR** (J, H, K): K and M giants, also red supergiants.

this is why **UV emission traces young (massive) stars** and is a clean SFR tracer for $\tau \sim 100$ Myr; while **NIR traces old stellar populations** (the integrated mass).

## consequence for galaxy spectra

the SED of a galaxy at any moment is the **superposition** of contributions from all the stars currently alive, weighted by the IMF and the SFH. for a galaxy with continuous star formation:
- UV is dominated by stars formed in the last $\sim 100$ Myr.
- optical bolometric is mixed.
- NIR ($\lambda > 1\,\mu$m) traces the integral of past star formation, i.e. the stellar mass.

this is the spectral basis for population-synthesis SED fitting (see [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.html) and `obs5.pdf`/`obs7.pdf`).

## see also

- [Planck law Wien Stefan-Boltzmann](../../02_Zettel/Theory/Planck law Wien Stefan-Boltzmann.html)
- [Stellar scaling relations](../../02_Zettel/Theory/Stellar scaling relations.html)
- [Mass-luminosity relation](../../02_Zettel/Theory/Mass-luminosity relation.html)
- [Initial mass function](../../02_Zettel/Theory/Initial mass function.html)
- [Stellar populations I II III](../../02_Zettel/Theory/Stellar populations I II III.html)
- [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.html)
- [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.html)
- [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.html)
- [Stellar mass estimation in unresolved populations](../../02_Zettel/Theory/Stellar mass estimation in unresolved populations.html)
