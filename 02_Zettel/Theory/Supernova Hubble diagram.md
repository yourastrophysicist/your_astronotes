---
layout: default
title: "Supernova Hubble diagram"
---

the **SN Ia Hubble diagram** plots the apparent brightness (distance modulus) of Type Ia supernovae against their redshift. its **deviation from linear at high $z$** is the smoking-gun evidence for accelerated expansion of the universe (Perlmutter, Riess, Schmidt 1998).

## the plot

axes:
- **x**: $\log z$ or $z$.
- **y**: distance modulus $\mu = m - M = 5\log_{10}(d_L/10\,\text{pc})$.

each SN Ia provides one data point: its observed peak magnitude (with stretch + colour corrections) gives $m$, the standard-candle absolute magnitude $M \approx -19.3$ gives $\mu$.

in flat $\Lambda$CDM:
$$d_L(z) = (1+z)\frac{c}{H_0}\int_0^z \frac{dz'}{\sqrt{\Omega_m(1+z')^3 + \Omega_\Lambda}}$$

## the discovery

1998 Riess + Perlmutter independent samples of $\sim 50$ SN Ia at $z \sim 0.5$:
- predicted $d_L$ for matter-only ($\Omega_m = 1$, $\Omega_\Lambda = 0$): one curve.
- predicted $d_L$ for accelerated expansion ($\Omega_\Lambda > 0$): a higher curve.
- observed SN Ia at $z \sim 0.5$ are **fainter** than the matter-only prediction, consistent with $\Omega_\Lambda \approx 0.7$.

so the universe is **accelerating**. interpretation: dark energy with $w \approx -1$.

Nobel 2011: Saul Perlmutter, Brian Schmidt, Adam Riess.

## the modern Hubble diagram

over $\sim 2000$ SN Ia in modern compilations (Pantheon, Pantheon+, Union3). spans $z = 0$ to $\sim 2$. precision constraints:
- $\Omega_m \approx 0.30 \pm 0.02$ (matter density).
- $\Omega_\Lambda = 1 - \Omega_m \approx 0.70$ (assuming flat).
- $w \approx -1.03 \pm 0.04$ (dark energy equation of state).
- $H_0 = 73.04 \pm 1.04$ km/s/Mpc (local ladder, in tension with CMB).

## the calibration ladder

SN Ia absolute magnitudes calibrated by:
1. **parallax** to nearby Cepheids.
2. **Cepheids** in $\sim 40$ galaxies that hosted both Cepheids and SN Ia.
3. **SN Ia distances** in those host galaxies.

each step has its own systematic. the SH0ES program (Riess et al.) drives the precision down to $\sim 1\%$ at each step.

alternative: TRGB calibration (Carnegie-Chicago), gives slightly different $H_0 \approx 69.8$. partial resolution between SN Ia ladder + CMB.

## what the curve teaches

at low $z$: linear, slope = $H_0$. matter and curvature don't matter yet.

at moderate $z$ ($0.1 \lesssim z \lesssim 1$): deviation from linearity reveals the cosmological model. data prefer accelerated expansion.

at high $z$ ($z \gtrsim 1$): SN Ia were **brighter** than expected for a constant-$\Lambda$ model, consistent with $\Lambda$CDM. some surveys hint at $w \ne -1$ (DESI 2024-2025), still under investigation.

## see also

- [Type Ia supernovae as standard candles](../../02_Zettel/Theory/Type Ia supernovae as standard candles.md)
- [Luminosity distance](../../02_Zettel/Theory/Luminosity distance.md)
- [Distance modulus](../../02_Zettel/Theory/Distance modulus.md)
- [Hubble flow distances](../../02_Zettel/Theory/Hubble flow distances.md)
- [Distance ladder derivations](../../02_Zettel/Theory/Distance ladder derivations.md)
- [Cepheid period-luminosity relation](../../02_Zettel/Theory/Cepheid period-luminosity relation.md)
- [TRGB tip of the red giant branch](../../02_Zettel/Theory/TRGB tip of the red giant branch.md)
- [Cosmic_inventory_dark_energy](../../02_Zettel/Theory/Cosmic_inventory_dark_energy.md)
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.md)
