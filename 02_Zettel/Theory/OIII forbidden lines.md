---
layout: default
title: "OIII forbidden lines"
---

$[OIII]$ forbidden lines are the **canonical $T_e$ diagnostic** in photoionised nebulae, and three of the brightest emission lines in HII regions, planetary nebulae, and AGN narrow-line regions.

## the energy levels

doubly ionised oxygen O$^{2+}$ has $2p^2$ valence configuration, same as neutral C. allowed terms (see [Equivalent vs nonequivalent electrons](../../02_Zettel/Theory/Equivalent vs nonequivalent electrons.html)):
- ground $^3P_{0,1,2}$ (Hund: $J = 0$ for less-than-half).
- $^1D_2$ at $\sim 2.5$ eV above ground.
- $^1S_0$ at $\sim 5.4$ eV above ground.

all three are even parity (from $2p^2$), so any transition between them is **parity-forbidden** at E1 and proceeds via M1.

## the famous lines

### $\lambda 4959, 5007$ Å ("the green doublet")

$^1D_2 \to ^3P_{1, 2}$:
- $\lambda 4958.91$ Å: $^1D_2 \to ^3P_1$, $A = 6.7 \times 10^{-3}$ s$^{-1}$.
- $\lambda 5006.84$ Å: $^1D_2 \to ^3P_2$, $A = 2.0 \times 10^{-2}$ s$^{-1}$.

ratio $A(5007)/A(4959) = 3.0$ exactly (statistical-weight ratio of upper to lower $J$). so $F(5007)/F(4959) = 3.0$, a fundamental atomic-physics constant.

these are often called the **"green nebular lines"** because they're the brightest visible lines in many nebulae and planetary nebulae (e.g. M57 the Ring Nebula, NGC 7027). before $1927$ they were attributed to a hypothetical "nebulium."

### $\lambda 4363$ Å ("the auroral line")

$^1S_0 \to ^1D_2$, $A = 1.7$ s$^{-1}$. a much higher upper level ($5.4$ eV) than $\lambda 4959, 5007$ ($2.5$ eV).

intrinsically much fainter (typically $1\%$ of $\lambda 5007$) but its **temperature sensitivity** comes from the high excitation energy.

## the temperature diagnostic

at low $n_e$, the line ratio is:
$$\frac{F(\lambda 4363)}{F(\lambda 4959 + \lambda 5007)} \propto \frac{A(\lambda 4363)\,e^{-E_S/k_BT_e}}{A(\lambda 4959+5007)\,e^{-E_D/k_BT_e}} = \text{const}\cdot e^{-(E_S - E_D)/k_BT_e}$$

with $E_S - E_D \approx 2.9$ eV. so:
- $T_e = 8000$ K ($k_BT_e = 0.69$ eV): ratio $\sim 0.005$.
- $T_e = 12\,000$ K: ratio $\sim 0.025$, factor $5$ change.
- $T_e = 20\,000$ K: ratio $\sim 0.06$.

very steep, hence sensitive. in practice, measuring $\lambda 4363$ requires high-quality spectra; faint compared to the green doublet.

## practical caveats

1. **density correction**: $\lambda 4363$ has higher critical density ($n_c \sim 3 \times 10^7$ cm$^{-3}$) than $\lambda 5007$ ($n_c \sim 7 \times 10^5$). at $n_e \gtrsim 10^5$, $\lambda 5007$ saturates first, biasing the ratio toward higher apparent $T_e$.
2. **$\lambda 4363$ contamination**: blended with Hg I sky line in some sites. careful sky-subtraction needed.
3. **thermal-pressure-driven $T$ gradient**: real nebulae have $T_e$ inhomogeneities; the ratio measures a $T$-weighted mean.

modern abundance work (gas-phase metallicity in extragalactic HII regions) heavily relies on $\lambda 4363$ measurements; absence of detection requires "strong-line" calibration (R23, N2, O3N2 indices).

## scaling with metallicity

$[OIII]$ abundance traces gas-phase oxygen. ratio of $[OIII]\,\lambda 5007$ to H$\beta$ is:
$$\frac{F(5007)}{F(H\beta)} \sim \frac{n(O^{2+})}{n_e}\cdot\frac{q_{O,1D \to ^3P}}{\alpha^{\rm eff}_{H\beta}}\cdot e^{-E/k_BT_e}$$

at low metallicity, $n(O^{2+})/n_e$ small (less O total), and $T_e$ is high (less metal cooling), so the ratio depends on metallicity in a non-monotonic way. the famous "double-valued" R23 diagnostic ($R_{23} = ([OII] + [OIII])/H\beta$) reflects this.

## see also

- [Forbidden lines](../../02_Zettel/Theory/Forbidden lines.html)
- [Forbidden line diagnostics](../../02_Zettel/Theory/Forbidden line diagnostics.html)
- [Critical density](../../02_Zettel/Theory/Critical density.html)
- [Two-level atom](../../02_Zettel/Theory/Two-level atom.html)
- [Spectroscopic Te diagnostics](../../02_Zettel/Theory/Spectroscopic Te diagnostics.html)
- [Selection rules](../../02_Zettel/Theory/Selection rules.html)
- [Atomic term symbols](../../02_Zettel/Theory/Atomic term symbols.html)
- [Equivalent vs nonequivalent electrons](../../02_Zettel/Theory/Equivalent vs nonequivalent electrons.html)
- [BPT diagram](../../02_Zettel/Theory/BPT diagram.html)
- [H II region spectroscopy](../../02_Zettel/Theory/H II region spectroscopy.html)
- [Planetary nebula spectroscopy](../../02_Zettel/Theory/Planetary nebula spectroscopy.html)
