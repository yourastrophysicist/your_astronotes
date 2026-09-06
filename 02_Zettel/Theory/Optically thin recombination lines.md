---
layout: default
title: "Optically thin recombination lines"
---

**recombination lines** are emitted when a free electron recombines with an ion (e.g. H$^+ + e^- \to$ H$^*$ + $\gamma$), then cascades down through the atomic energy levels emitting photons. dominant in HII regions and AGN broad-line regions.

## the physical picture

step 1: an ion captures a free electron into some bound level $n$. process: $\rm H^+ + e^- \to \rm H^*(n) + h\nu_{\rm recomb}$. probability rate: $n_e n_p \alpha_n(T_e)$ per unit volume.

step 2: the captured electron cascades down through allowed transitions, emitting series-line photons until it reaches the ground state.

step 3: each emitted photon escapes (or doesn't) depending on local optical depth.

## emissivity from a single line

for a transition $u \to l$:
$$j_\nu = n_e n_{i+1}\,\alpha^{\rm eff}_{ul}(T_e)\,h\nu_{ul}$$
where $\alpha^{\rm eff}_{ul}$ is the **effective recombination coefficient** for the line: probability per recombination that the cascade passes through this specific transition.

units: cm$^3$ s$^{-1}$ (similar to recombination coefficient).

$\alpha^{\rm eff}$ has weak temperature dependence, $\propto T_e^{-1}$ approximately. tabulated for H, He, and other species (Storey & Hummer 1995, Pequignot et al. 1991).

## H$\alpha$ emissivity

at $T_e = 10^4$ K, $\alpha^{\rm eff}_{H\alpha} = 1.17 \times 10^{-13}$ cm$^3$ s$^{-1}$ (Case B, see below).
$$j(H\alpha) = n_e n_p\,\alpha^{\rm eff}_{H\alpha}\,h\nu_{H\alpha}$$

so for an HII region with $n_e \sim n_p \sim 100$ cm$^{-3}$:
$j(H\alpha) \sim 10^4 \cdot 1.17 \times 10^{-13} \cdot 3 \times 10^{-12}$ erg/cm$^3$/s $\sim 3.5 \times 10^{-21}$ erg/cm$^3$/s.

integrated over the volume of a Strömgren sphere, this gives a typical HII region $H\alpha$ luminosity, used as an SFR tracer ([H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.md)).

## case A vs case B

ionising recombinations to ground (Lyman continuum and Lyman lines) can re-ionise other H atoms in dense gas. two limiting cases:
- **Case A**: optically thin to Lyman lines, all cascade photons escape. the Lyman alpha is just one line among many.
- **Case B**: **optically thick to Lyman lines**, but optically thin to Balmer and higher series. Lyman photons get re-absorbed and downgraded to higher series. **standard for HII regions**.

case B is the practical standard because real HII regions are usually optically thick to Lyman alpha. Case-B recombination coefficients (excluding direct recombinations to ground, which lead back to ionisation):
$$\alpha_B \sim 2.6 \times 10^{-13}\,\text{cm}^3\,\text{s}^{-1}\,\text{at } T_e = 10^4\,\text{K}$$

## Balmer line ratios in Case B

at $T_e = 10^4$ K, Case B:
$$\frac{F(H\alpha)}{F(H\beta)} = 2.86$$
$$\frac{F(H\gamma)}{F(H\beta)} = 0.466$$
$$\frac{F(H\delta)}{F(H\beta)} = 0.256$$

these are essentially **temperature-independent** (only $T_e^{-0.07}$ scaling), so they are very robust prediction for Balmer line ratios in HII regions.

deviations from these ratios are interpreted as **dust extinction**: the Balmer decrement gives $A_V$ via
$$E(B - V) \approx 2.0\,\log_{10}\left[\frac{F(H\alpha)/F(H\beta)|_{\rm obs}}{2.86}\right]$$

see [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.md).

## see also

- [Case A vs Case B recombination](../../02_Zettel/Theory/Case A vs Case B recombination.md)
- [Recombination line emissivity](../../02_Zettel/Theory/Recombination line emissivity.md)
- [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.md)
- [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.md)
- [Recombination continuum](../../02_Zettel/Theory/Recombination continuum.md)
- [Hydrogen spectral series](../../02_Zettel/Theory/Hydrogen spectral series.md)
- [Two-level atom](../../02_Zettel/Theory/Two-level atom.md)
- [Statistical equilibrium equations](../../02_Zettel/Theory/Statistical equilibrium equations.md)
