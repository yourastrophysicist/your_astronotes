---
layout: "default"
title: "Chandrasekhar mass limit"
---
# chandrasekhar mass limit

a white dwarf is held up by electron degeneracy pressure rather than thermal pressure. the polytropic structure depends on whether the electrons are non-relativistic or ultra-relativistic, and this difference produces a sharp upper mass: above a critical mass no equilibrium exists and the WD must collapse. this is the **Chandrasekhar limit**, $M_{\rm Ch} \approx 1.44\,M_\odot$ for typical electron-to-baryon ratio $\mu_e \simeq 2$ (a fully ionised C-O composition).

## derivation from first principles

### 1. degenerate electron pressure from Fermi-Dirac statistics

At the densities in a white dwarf interior ($\rho\sim10^6\,\mathrm{g\,cm^{-3}}$), the electron gas is fully degenerate: essentially every momentum state up to the Fermi momentum $p_F$ is occupied (Pauli exclusion), regardless of temperature. The electron number density fixes $p_F$ by filling all momentum states in a sphere of radius $p_F$ in momentum space, with the factor 2 for spin and $h^3$ the phase-space cell volume:
$$n_e = \frac{8\pi}{3h^3}p_F^3 \quad\Longrightarrow\quad p_F = h\left(\frac{3n_e}{8\pi}\right)^{1/3}$$
The degeneracy pressure follows from integrating the momentum flux of the filled Fermi sea,
$$P = \frac{8\pi}{3h^3}\int_0^{p_F} v(p)\,p^3\,dp, \qquad v(p) = \frac{\partial\varepsilon}{\partial p}$$
where $\varepsilon(p)$ is the electron energy-momentum relation.

### 2. non-relativistic limit: $n=3/2$ polytrope

For $p_F \ll m_e c$, $v(p) \approx p/m_e$ (non-relativistic), and the integral evaluates to
$$P = K_{\rm NR}\,\rho^{5/3}, \qquad K_{\rm NR} = \frac{h^2}{20 m_e m_H^{5/3}}\left(\frac{3}{\pi}\right)^{2/3}\frac{1}{\mu_e^{5/3}}$$
This is a polytrope of index $n=3/2$ (see [[Stellar structure equations]] for the general Lane-Emden formalism), with mass-radius relation $R\propto M^{-1/3}$ (see [[White dwarf mass-radius relation]]): more massive white dwarfs are *smaller*, the opposite of ordinary main-sequence stars, because degeneracy pressure — set by the exclusion principle rather than thermal motion — increases with compression regardless of temperature.

### 3. ultra-relativistic limit: $n=3$ polytrope

As the WD becomes more massive its central density rises and the typical electron Fermi momentum $p_F \propto n_e^{1/3}$ becomes comparable to $m_e c$. In the limit $p_F \gg m_e c$, $v(p) \to c$ (ultra-relativistic), and the pressure integral softens to
$$P = K_{\rm UR}\,\rho^{4/3}, \qquad K_{\rm UR} = \frac{hc}{8 m_H^{4/3}}\left(\frac{3}{\pi}\right)^{1/3}\frac{1}{\mu_e^{4/3}}$$
which is a polytrope of index $n = 3$.

### 4. the mass ceiling

For an $n=3$ polytrope, the general polytropic mass relation $M = 4\pi\alpha^3\rho_c\,\omega_n$ (see [[Stellar structure equations]]) has $\alpha^3\rho_c \propto \rho_c^{(3-n)/2n} = \rho_c^0$ — the central-density dependence cancels identically, so the total mass is **independent of central density**, fixed entirely by the equation-of-state constant $K_{\rm UR}$:
$$\boxed{\, M_{\rm Ch} = \frac{\omega_3^{1/2}}{4\pi}\left(\frac{hc}{G}\right)^{3/2}\frac{1}{(\mu_e m_H)^2} \,}$$
with $\omega_3 \approx 2.018$ the dimensionless Lane-Emden mass constant for index $n=3$. Plugging in numbers gives
$$M_{\rm Ch} \simeq 5.83\,\mu_e^{-2}\,M_\odot \;\approx\; 1.44\,M_\odot \quad(\mu_e=2)$$

**Asymptotic checks**: as $M\to M_{\rm Ch}^-$, the star's actual equation of state interpolates between the $n=3/2$ and $n=3$ limits above, so $R\to0$ continuously rather than discontinuously — the divergence in central density as $M\to M_{\rm Ch}$ is the signature that no static equilibrium exists at or above this mass for any finite radius. In the strict Newtonian, non-relativistic limit ($p_F/m_ec\to0$ everywhere), the $n=3$ softening never occurs and no mass ceiling would exist — the Chandrasekhar limit is fundamentally a consequence of coupling special-relativistic kinematics to quantum degeneracy pressure, not of Newtonian self-gravity alone.

## physical meaning

below $M_{\rm Ch}$, the equation of state is stiff enough that gravity can be balanced. above $M_{\rm Ch}$, the relativistic softening means any small contraction releases more gravitational energy than degeneracy pressure can absorb, and the structure is unstable. there is no static white dwarf solution.

what happens in practice depends on the progenitor:

- a CO WD pushed over $M_{\rm Ch}$ by accretion in a binary system ignites carbon under degenerate conditions and detonates as a **type Ia supernova**.
- an O-Ne-Mg WD pushed over the limit can undergo electron-capture-induced collapse to a neutron star (accretion-induced collapse).
- an isolated star will simply lose enough mass on the AGB that it never approaches $M_{\rm Ch}$; the IFMR caps single-WD masses around $\sim 1.1\,M_\odot$.

the mass cutoff has fundamental implications: it sets the dividing line in stellar evolution between stars that end as white dwarfs and stars that end as neutron stars or black holes (the latter coming from progenitors whose iron cores exceed $M_{\rm Ch}$ and collapse). the limit also fixes the absolute brightness of SNe Ia in the canonical "Chandrasekhar-mass" picture, making them standard candles for cosmology.

historically, derived by Chandrasekhar in 1931 in his early twenties, this result reshaped stellar astrophysics by showing that quantum mechanics imposes a fundamental ceiling on compact-object masses.

## Primary Literature

- **Chandrasekhar, S. (1931)**, *ApJ* 74, 81 — the original derivation, "The Maximum Mass of Ideal White Dwarfs" (pre-arXiv era).
- **Chandrasekhar, S. (1935)**, *MNRAS* 95, 207 — the complete relativistic treatment across the full mass-radius relation, not only the $n=3$ limiting case.

## see also
- [[White dwarf overview]]
- [[White dwarf mass-radius relation]]
- [[White dwarf types He CO ONeMg]]
- [[Initial-final mass relation IFMR]]
- [[Stellar_Astrophysics_MOC]]



## Linked References

- [[Initial-final mass relation IFMR]]
- [[White dwarf cooling sequence on the CMD]]
- [[White dwarf mass-radius relation]]
- [[White dwarf overview]]
- [[White dwarf types He CO ONeMg]]
- [[Stellar_Astrophysics_MOC]]


