---
layout: default
title: "Type Ia supernovae as standard candles"
---

**Type Ia supernovae** are the brightest standard candles in the distance ladder, reaching $z \sim 1$ to $2$ with $\sim 5\%$ distance precision. they delivered the discovery of the accelerating universe (Perlmutter, Riess, Schmidt 1998) and remain the workhorse for $H_0$ and $w(z)$.

## the physics

a Type Ia SN is a **thermonuclear explosion** of a $\sim 1.4\,M_\odot$ carbon-oxygen white dwarf. two main scenarios:
- **single-degenerate**: WD accretes mass from a non-degenerate companion, reaches the **Chandrasekhar mass** $M_{Ch} \approx 1.4\,M_\odot$, ignites C+O burning, runaway thermonuclear explosion.
- **double-degenerate**: merger of two WDs, total mass $> M_{Ch}$, similar outcome.

because the WD always blows up at $\sim M_{Ch}$, the **explosion energy is roughly the same**, and the peak luminosity is roughly standard:
$$M_V^{\rm peak} \approx -19.3$$

## why "standardisable"

raw scatter in peak $M_V$: $\sim 0.4$ mag. but **light-curve shape correlates with peak luminosity**: brighter SNe Ia have wider, slower-declining light curves. this is the **Phillips relation** (1993):
$$M_V^{\rm peak} = M_V^0 - \alpha(\Delta m_{15} - 1.1)$$
with $\Delta m_{15}$ = magnitude drop in the first 15 days post-peak. $\alpha \approx 0.7$. after correction, scatter drops to $\sim 0.15$ mag, $\sim 7\%$ in distance.

modern variants (SALT2, MLCS, SNooPy) use full multi-band light-curve fits. a SN Ia distance is now routinely $\sim 5$ to $7\%$.

## the calibration ladder

SN Ia absolute magnitudes are calibrated by Cepheids in nearby galaxies that have hosted both a SN Ia and Cepheid populations:
- $\sim 40$ such "SH0ES" galaxies known.
- HST observes Cepheids; the SN Ia distance modulus follows.
- TRGB-anchored variants exist (Carnegie-Chicago program).

beyond these calibration galaxies, SN Ia stand on their own as relative-distance indicators in the Hubble flow.

## the Hubble diagram and dark energy

plotting $\mu(z)$ for $\sim 1500$ SNe Ia at $z = 0$ to $\sim 2$:
- low-$z$ ($z \lesssim 0.05$): linear $\mu \approx 5\log(cz/H_0) + 25$, slope gives $H_0$.
- high-$z$: deviation from linear depends on $\Omega_m$ and $\Omega_\Lambda$ via $d_L(z)$.

at $z \sim 0.5$ to $1$, SNe Ia are **fainter** than predicted in any matter-only or open universe. the data prefer $\Omega_m \approx 0.3$, $\Omega_\Lambda \approx 0.7$, the smoking-gun discovery of accelerated expansion.

## current state

big SN Ia compilations (Pantheon, Pantheon+, Union3) combine data from many surveys. modern $H_0$ determination (SH0ES program, Riess et al. 2022):
$$H_0 = 73.04 \pm 1.04\,\text{km/s/Mpc}$$
in tension with Planck CMB-derived value $H_0 = 67.4 \pm 0.5$.

dark-energy constraints (Pantheon+):
$$w = -1.03 \pm 0.04$$
consistent with $\Lambda$, but DESI 2024-2025 BAO + SN combinations hint at $w(z) \neq -1$.

## systematics that matter

- **dust reddening** in the host galaxy: corrected by spectral fitting + multi-band light curves. residual systematic.
- **progenitor mass evolution**: do high-$z$ SN Ia come from younger systems with different metallicity? small systematic.
- **calibration to Cepheids**: the foundation of the SN Ia rung; any Cepheid systematic propagates here.
- **Malmquist bias** at the survey edge: brighter SNe over-represented.

JWST observations of TRGB and Mira distances in SN Ia hosts are reducing the calibration uncertainty toward $\sim 1\%$.

## see also

- [Cepheid period-luminosity relation](../../02_Zettel/Theory/Cepheid period-luminosity relation.md)
- [TRGB tip of the red giant branch](../../02_Zettel/Theory/TRGB tip of the red giant branch.md)
- [Distance ladder derivations](../../02_Zettel/Theory/Distance ladder derivations.md)
- [Hubble flow distances](../../02_Zettel/Theory/Hubble flow distances.md)
- [Cepheids and supernovae](../../02_Zettel/Theory/Cepheids and supernovae.md)
- [Variable stars as standard candles](../../02_Zettel/Theory/Variable stars as standard candles.md)
- [Hubble's law and cosmological redshift](../../02_Zettel/Theory/Hubble's law and cosmological redshift.md)
- [Cosmic_inventory_dark_energy](../../02_Zettel/Theory/Cosmic_inventory_dark_energy.md)
- [Cosmic_inventory_overview](../../02_Zettel/Theory/Cosmic_inventory_overview.md)
