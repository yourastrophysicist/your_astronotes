---
layout: default
title: "Cepheid period-luminosity relation"
---

classical Cepheids obey a tight relation between pulsation period and absolute luminosity, the **Leavitt law**, discovered by Henrietta Swan Leavitt in 1908. it is the foundation of the extragalactic distance scale.

## the relation

$$\boxed{\, M_V = a + b\,\log_{10} P(\text{days}) \,}$$

with modern HST + Gaia + LMC EB calibrations: $b \approx -2.78$, $a \approx -1.35$. so a $10$-day Cepheid has $M_V \approx -4.1$; a $30$-day has $M_V \approx -5.5$.

the Wesenheit magnitude (extinction-corrected):
$$W = m_X - R(m_Y - m_Z)$$
with R chosen to make the index dust-insensitive (e.g. for HST $W = m_F555W - 2.45(m_F555W - m_F814W)$). Wesenheit relations have intrinsic scatter $\sim 0.1$ mag, much tighter than V-band PL.

## physical origin

stellar pulsation period scales with the dynamical (free-fall) timescale:
$$P \propto \rho^{-1/2}$$

since $L \propto R^2 T^4$ and $M \propto \rho R^3$, $P$ depends on $L, T_{\rm eff}, M$. pulsating Cepheids occupy a narrow **instability strip** in the HR diagram (a near-vertical band at $T_{\rm eff} \approx 6000$ K spanning a range of luminosities). along the strip, $L$ correlates tightly with period.

so the Leavitt law is a projection of the PL plane through the instability strip. the small intrinsic scatter ($\sim 0.05$ mag in NIR Wesenheit) reflects the strip's narrow width.

## the calibration ladder

three sources of zero-point:
1. **Galactic Cepheids** with Gaia DR3 parallaxes (Riess et al. 2018, 2022). $\sim 100$ Cepheids with $1\%$ parallax precision.
2. **LMC Cepheids**: $\sim 800$ classical Cepheids with NIR photometry, geometric LMC distance from eclipsing binaries (Pietrzyński 2019, $\mu_{\rm LMC} = 18.477 \pm 0.026$, $1\%$ precision).
3. **water masers** in NGC 4258, an external galaxy with a directly-determined distance.

each calibration is independent; all three agree at $\lesssim 0.05$ mag.

## metallicity dependence

Cepheid luminosity is mildly metallicity-dependent (more metal-poor = brighter at given $P$ in some studies). the slope is debated:
$$\Delta\mu \sim \gamma \cdot \Delta[Fe/H], \quad \gamma \sim 0$$ to $-0.3$ mag/dex.

minor systematic in the $H_0$ debate.

## range and use

with HST (V, I) and Wesenheit: $\sim 30$ Mpc. JWST (NIR Wesenheit): expected to push to $\sim 100$ Mpc with reduced dust uncertainty. Cepheids in SN Ia hosts are the bridge between the Galactic ladder and the Hubble flow:

```
Galactic parallax  ->  Cepheids (Gaia + LMC anchors)
                       |
                       v
                       Cepheids in nearby SN Ia hosts (HST)
                       |
                       v
                       SN Ia in Hubble flow ($cz/H_0$)
```

this is the path to $H_0$ via the SH0ES program (Riess et al.), giving $H_0 = 73.04 \pm 1.04$ km/s/Mpc.

## the Cepheid Hubble tension

the $\sim 5\sigma$ disagreement with the Planck-derived $H_0 = 67.4 \pm 0.5$ km/s/Mpc is one of the major open problems in cosmology. is the local Cepheid ladder systematically high (dust corrections, blending in distant Cepheids, metallicity term)? or is there new physics in the early universe?

JWST + TRGB cross-checks are testing the local-ladder hypothesis. early JWST results (Riess 2024) confirm the SH0ES Cepheid distances at $\sim 1\%$, leaning toward new physics.

## see also

- [Variable stars as standard candles](../../02_Zettel/Theory/Variable stars as standard candles.md)
- [Distance ladder derivations](../../02_Zettel/Theory/Distance ladder derivations.md)
- [Type Ia supernovae as standard candles](../../02_Zettel/Theory/Type Ia supernovae as standard candles.md)
- [TRGB tip of the red giant branch](../../02_Zettel/Theory/TRGB tip of the red giant branch.md)
- [Hubble flow distances](../../02_Zettel/Theory/Hubble flow distances.md)
- [Hubble's law and cosmological redshift](../../02_Zettel/Theory/Hubble's law and cosmological redshift.md)
- [Cepheids and supernovae](../../02_Zettel/Theory/Cepheids and supernovae.md)
- [Annual stellar parallax](../../02_Zettel/Theory/Annual stellar parallax.md)
