---
layout: default
name: Chandrasekhar mass limit
description: the maximum mass a white dwarf can have when supported by relativistic electron degeneracy pressure
---

# chandrasekhar mass limit

a white dwarf is held up by electron degeneracy pressure rather than thermal pressure. the polytropic structure depends on whether the electrons are non-relativistic or ultra-relativistic, and this difference produces a sharp upper mass: above a critical mass no equilibrium exists and the WD must collapse. this is the **Chandrasekhar limit**, $M_{\rm Ch} \approx 1.44\,M_\odot$ for typical electron-to-baryon ratio $\mu_e \simeq 2$ (a fully ionised C-O composition).

## sketch of the derivation

for a non-relativistic degenerate electron gas the equation of state is
$$P = K_{\rm NR}\,\rho^{5/3},$$
which corresponds to a polytrope of index $n = 3/2$. the resulting hydrostatic structure has a mass-radius relation $R \propto M^{-1/3}$ (more mass means smaller radius, see [White dwarf mass-radius relation](../../02_Zettel/Theory/White dwarf mass-radius relation.html)).

as the WD becomes more massive its central density rises and the typical electron Fermi momentum $p_F \propto n_e^{1/3}$ becomes comparable to $m_e c$. the electrons go ultra-relativistic, and the equation of state softens to
$$P = K_{\rm UR}\,\rho^{4/3},$$
which is a polytrope of index $n = 3$. for an $n=3$ polytrope the total mass is **independent of central density**, fixed entirely by the equation-of-state constants:
$$M_{\rm Ch} = \frac{\omega_3^{1/2}}{4\pi}\Big(\frac{hc}{G}\Big)^{3/2}\frac{1}{(\mu_e m_H)^2},$$
with $\omega_3 \approx 2.018$ from the Lane-Emden equation. plugging in numbers gives
$$M_{\rm Ch} \simeq 5.83 \,\mu_e^{-2}\,M_\odot \;\approx\; 1.44\,M_\odot \quad(\mu_e=2).$$

## physical meaning

below $M_{\rm Ch}$, the equation of state is stiff enough that gravity can be balanced. above $M_{\rm Ch}$, the relativistic softening means any small contraction releases more gravitational energy than degeneracy pressure can absorb, and the structure is unstable. there is no static white dwarf solution.

what happens in practice depends on the progenitor:

- a CO WD pushed over $M_{\rm Ch}$ by accretion in a binary system ignites carbon under degenerate conditions and detonates as a **type Ia supernova**.
- an O-Ne-Mg WD pushed over the limit can undergo electron-capture-induced collapse to a neutron star (accretion-induced collapse).
- an isolated star will simply lose enough mass on the AGB that it never approaches $M_{\rm Ch}$; the IFMR caps single-WD masses around $\sim 1.1\,M_\odot$.

the mass cutoff has fundamental implications: it sets the dividing line in stellar evolution between stars that end as white dwarfs and stars that end as neutron stars or black holes (the latter coming from progenitors whose iron cores exceed $M_{\rm Ch}$ and collapse). the limit also fixes the absolute brightness of SNe Ia in the canonical "Chandrasekhar-mass" picture, making them standard candles for cosmology.

historically, derived by Chandrasekhar in 1931 in his early twenties, this result reshaped stellar astrophysics by showing that quantum mechanics imposes a fundamental ceiling on compact-object masses.

## see also
- [White dwarf overview](../../02_Zettel/Theory/White dwarf overview.html)
- [White dwarf mass-radius relation](../../02_Zettel/Theory/White dwarf mass-radius relation.html)
- [White dwarf types He CO ONeMg](../../02_Zettel/Theory/White dwarf types He CO ONeMg.html)
- [Initial-final mass relation IFMR](../../02_Zettel/Theory/Initial-final mass relation IFMR.html)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
