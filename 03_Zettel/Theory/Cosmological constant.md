---
layout: "default"
title: "Cosmological constant"
---
the **cosmological constant** $\Lambda$ is the only other tensor combination consistent with Einstein's equation, by the same logic that fixed Einstein's equation in the first place. originally introduced by Einstein for static cosmologies, then "the biggest blunder," then resurrected by 1998 supernova observations.

## the equation with $\Lambda$

$$G_{\mu\nu} + \Lambda g_{\mu\nu} = 8\pi G T_{\mu\nu}$$

equivalently, moving $\Lambda$ to the right side as a stress-energy contribution:
$$G_{\mu\nu} = 8\pi G(T_{\mu\nu} + T^\Lambda_{\mu\nu})$$

with:
$$T^\Lambda_{\mu\nu} = -\frac{\Lambda}{8\pi G}g_{\mu\nu}$$

## as vacuum energy

interpret $\Lambda$ as a fluid:
$$\rho_\Lambda = \frac{\Lambda}{8\pi G}, \qquad p_\Lambda = -\rho_\Lambda$$

properties:
- **constant density**: $\rho_\Lambda$ doesn't dilute with expansion. unlike matter ($a^{-3}$) or radiation ($a^{-4}$).
- **negative pressure**: $w = -1$. the equation of state of vacuum energy.
- **drives accelerated expansion**: from the acceleration equation $\ddot a/a = -(4\pi G/3)(\rho + 3p)$, $\Lambda$ contributes $-(4\pi G/3)(\rho_\Lambda - 3\rho_\Lambda) = +(8\pi G/3)\rho_\Lambda$, positive (accelerating).

## why $\Lambda$ is "natural"

the cosmological constant is the only **conserved tensor** built from $g_{\mu\nu}$ (without derivatives) that can sit on the LHS of Einstein's equation. it has $\nabla^\mu(\Lambda g_{\mu\nu}) = \Lambda\nabla^\mu g_{\mu\nu} = 0$ trivially.

so any consistent generalisation of Einstein's equation has at most:
$$\alpha R_{\mu\nu} + \beta g_{\mu\nu} R + \gamma g_{\mu\nu} = \kappa T_{\mu\nu}$$

with the constraint that the LHS be conserved. Bianchi forces $\alpha = -2\beta$, leaving one combination ($G_{\mu\nu}$) plus the $\Lambda$ piece. **two free parameters**: $G$ and $\Lambda$.

## historical arc

- **1917**: Einstein adds $\Lambda$ to allow a static cosmological model. the universe is supposed to be eternal.
- **1922-1929**: Friedmann + Lemaître + Hubble show the universe is expanding. Einstein retracts: "biggest blunder."
- **1980s-1990s**: $\Lambda$ enters again as **dark energy** in cosmological perturbation theory, but with no observational support.
- **1998**: Perlmutter, Riess, Schmidt's **SN Ia Hubble diagram** shows accelerated expansion. requires $\Omega_\Lambda \approx 0.7$.
- **2003 onward**: WMAP and Planck CMB confirm $\Omega_\Lambda \approx 0.685$ to $\sim 1\%$ precision. $\Lambda$CDM standard.

## the value

$$\Omega_\Lambda \approx 0.685, \qquad \rho_\Lambda \approx 6 \times 10^{-30}\,\text{g/cm}^3$$
$$\Lambda \approx 1.1 \times 10^{-52}\,\text{m}^{-2}$$

a **tiny** number compared to natural Planck-scale quantities. the **cosmological constant problem** is to explain why $\Lambda$ is $\sim 10^{120}$ times smaller than naive QFT estimates (Planck-energy quantum vacuum energy).

## the consequence: dark energy

$\Lambda$ contributes $\sim 68\%$ of the total energy budget of the universe today. drives accelerated expansion ($\ddot a > 0$). makes the universe ever-expanding; eventually, structures other than gravitationally bound systems (Local Group, etc.) are pushed beyond the cosmological horizon.

implications for the future:
- **expansion accelerates** indefinitely.
- **cosmological horizon** approaches a finite size $\sim 1/\sqrt{\Lambda} \sim 10$ Gpc.
- **cosmological observers** become ever more isolated.

## quintessence and dynamical dark energy

alternative: $\Lambda$ is **not** a constant but a slowly-varying scalar field $\phi$ with $w_\phi(z)$ depending on time. observational tests via SN Ia + BAO + CMB constrain $w_0, w_a$. current data: consistent with $w = -1$ (constant $\Lambda$) but with $\sim 10\%$ uncertainty on $w_0$ and $\sim 30\%$ on $w_a$.

DESI 2024-2025 BAO + SN combinations hint at $w \ne -1$, possibly evolving. an active area of research.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Cosmological constant|500](https://commons.wikimedia.org/wiki/Special:FilePath/CMB_Timeline300_no_WMAP.jpg?width=600)
*Lead figure of the Wikipedia article Cosmological constant* ([Commons file page](https://commons.wikimedia.org/wiki/File:CMB_Timeline300_no_WMAP.jpg), NASA/WMAP Science Team, Public domain, as used on the Wikipedia article [Cosmological constant](https://en.wikipedia.org/wiki/Cosmological_constant))

- **Cosmological constant**. "In physical cosmology, the cosmological constant (usually denoted by the Greek capital letter lambda: Λ), alternatively called Einstein's cosmological constant, is a coefficient that Albert Einstein initially added to his field equations of general relativity. He later removed it; however, much later it was revived to express the energy density of space, or vacuum energy, that arises in quantum mechanics." ([Wikipedia](https://en.wikipedia.org/wiki/Cosmological_constant))
- **Observational Probes of Cosmic Acceleration**. "The accelerating expansion of the universe is the most surprising cosmological discovery in many decades, implying that the universe is dominated by some form of "dark energy" with exotic physical properties, or that Einstein's theory of gravity breaks down on cosmological scales." ([arXiv:1201.2434](https://arxiv.org/abs/1201.2434))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Einstein equations]]
- [[Einstein tensor and Bianchi]]
- [[Stress-energy tensor]]
- [[Friedmann equations]]
- [[Cosmic_inventory_dark_energy]]
- [[Cosmic_inventory_overview]]
- [[Type Ia supernovae as standard candles]]
- [[Equation of state and density scaling]]
- [[General_Relativity_MOC]]
- [[Ch 7 - Cosmology]]

---

### General Relativity Mathematical & Oral Defense Panel

![gr_q20_solution.png](../../assets/images/gr_q20_solution.png)
*Question 20 Oral Exam Model Solution: Exact analytic integration of the flat $\Lambda$CDM Friedmann equation with non-relativistic matter and cosmological constant, scale factor evolution $a(t) = \left(\frac{\Omega_m}{\Omega_\Lambda}\right)^{1/3} \sinh^{2/3}\left(\frac{3}{2}\sqrt{\Omega_\Lambda} H_0 t\right)$, and age of the universe $t_0 = \frac{2}{3H_0\sqrt{\Omega_\Lambda}}\operatorname{arcsinh}\left(\sqrt{\frac{\Omega_\Lambda}{\Omega_m}}\right)$.*



## Linked References

- [[Continuity equation]]
- [[Cosmic eras]]
- [[Curvature-dynamics relation]]
- [[Deceleration parameter]]
- [[Density parameters]]
- [[Einstein equations]]
- [[Equation of state and density scaling]]
- [[Friedmann equations]]
- [[Friedmann solutions]]
- [[GR Friedmann with Lambda]]
- [[Lambda CDM current parameters]]
- [[Sectional and Gaussian curvature]]
- [[Stress-energy tensor]]
- [[Various models of the universe]]
- [[General_Relativity_MOC]]


