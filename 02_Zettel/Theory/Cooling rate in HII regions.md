---
layout: default
title: "Cooling rate in HII regions"
---

in a photoionised gas, **cooling** is dominated by **collisionally excited forbidden lines** of metals: O$^{++}$, N$^+$, S$^+$, etc. these lines carry away kinetic energy in the form of escaping photons.

## the formula

for collisional excitation of a forbidden line followed by escape:
$$L \approx n_e n_X\,q_{lu}(T_e)\,h\nu_{ul}$$

per unit volume, summed over all relevant species. units: erg cm$^{-3}$ s$^{-1}$.

key factor: $q_{lu}(T_e)\,h\nu_{ul} \propto T_e^{-1/2}\,e^{-E_{ul}/k_BT_e}$. exponentially small for very small $T_e$ (no collisions energetic enough to excite); rises rapidly when $k_BT_e$ approaches $E_{ul}$.

## the dominant coolants

at HII region temperatures ($T_e \sim 10^4$ K, $k_BT_e \sim 0.86$ eV):

| line | $E_{ul}$ (eV) | role |
|---|---|---|
| $[OIII]\,\lambda 5007$ | $2.5$ | dominant cooler at moderate-to-high $U$ |
| $[OII]\,\lambda 3727$ | $3.3$ | dominant at low $U$ |
| $[NII]\,\lambda 6584$ | $1.9$ | secondary |
| $[SII]\,\lambda 6716$ | $1.85$ | secondary |
| $[NeIII]\,\lambda 3869$ | $3.2$ | tertiary |

so most of the energy escapes through $[OIII]\,\lambda 5007$ at solar metallicity, which is why this line is so bright.

## the metallicity dependence

cooling rate scales as $L \propto Z$ (metal abundance) directly, since metal-line cooling dominates. so:
- **solar metallicity** ($Z = Z_\odot$): cooling efficient, $T_e \sim 7000$ to $9000$ K.
- **low metallicity** ($Z \sim 0.01\,Z_\odot$): cooling weak, $T_e$ rises to $15\,000$ to $20\,000$ K (e.g. in extragalactic HII regions of dwarf galaxies, BCDs).
- **very metal-rich** ($Z \sim 2\,Z_\odot$): cooling very efficient, $T_e \sim 5000$ to $7000$ K.

so **$T_e$ is anti-correlated with metallicity**, the opposite of intuition. used as a metallicity diagnostic via direct $T_e$ measurements ([OIII forbidden lines](../../02_Zettel/Theory/OIII forbidden lines.html)).

## H Lyman alpha cooling

at very low metallicity ($Z \to 0$, primordial), there are no metal lines. cooling falls back to:
- **H Ly$\alpha$**: $E_{ul} = 10.2$ eV.
- **He II Ly$\alpha$**: $E_{ul} = 40.8$ eV.

since $E_{ul}/k_BT_e$ is large at typical $T_e$, the Boltzmann factor is small and Ly$\alpha$ cooling is much weaker than metal-line cooling. so primordial / Pop III regions reach $T_e \sim 2 \times 10^4$ K before cooling balances heating.

## free-free cooling

at $T_e \sim 10^4$ K, free-free emission is **subdominant** to forbidden lines. but at $T \gtrsim 10^7$ K (cluster ICM, SNR shocks), free-free becomes the dominant cooling mechanism. see [Bremsstrahlung](../../02_Zettel/Theory/Bremsstrahlung.html).

## the cooling timescale

$t_{\rm cool} = (3 n k_BT)/(2 L)$. for HII regions: $\sim 10^4$ years. compare with sound-crossing time of the region ($\sim 10^5$ yr): cooling is faster than dynamics, so HII regions are in **thermal equilibrium**.

(at low metallicity, cooling is slower; thermal equilibrium less strict.)

## see also

- [Heating rate in HII regions](../../02_Zettel/Theory/Heating rate in HII regions.html)
- [Equilibrium temperature](../../02_Zettel/Theory/Equilibrium temperature.html)
- [Cooling curve](../../02_Zettel/Theory/Cooling curve.html)
- [Forbidden lines](../../02_Zettel/Theory/Forbidden lines.html)
- [OIII forbidden lines](../../02_Zettel/Theory/OIII forbidden lines.html)
- [Critical density](../../02_Zettel/Theory/Critical density.html)
- [Two-level atom](../../02_Zettel/Theory/Two-level atom.html)
- [Forbidden line diagnostics](../../02_Zettel/Theory/Forbidden line diagnostics.html)
- [Metallicity and chemical evolution](../../02_Zettel/Theory/Metallicity and chemical evolution.html)
