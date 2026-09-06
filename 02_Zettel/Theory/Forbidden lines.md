---
layout: default
title: "Forbidden lines"
---

**forbidden lines** are atomic transitions that violate the electric-dipole (E1) selection rules and proceed only via much weaker mechanisms (M1, E2). $\sim 10^5$ to $10^8$ times weaker than permitted lines, but enormously useful as plasma diagnostics.

## what makes a line "forbidden"

E1 selection rules require:
- parity flip ($\sum\ell$ changes by odd number).
- $\Delta L = 0, \pm 1$.
- $\Delta J = 0, \pm 1$ (not $0 \to 0$).
- $\Delta S = 0$.

a transition that fails one of these rules is **forbidden at E1**. it can still proceed by:
- **magnetic dipole (M1)**: parity-conserving, $\Delta L = 0$. typical $A \sim 10^{-2}$ to $10^{0}$ s$^{-1}$.
- **electric quadrupole (E2)**: parity-conserving, $\Delta L = 0, \pm 1, \pm 2$. typical $A \sim 10^{-4}$ to $10^{-1}$ s$^{-1}$.
- **intersystem (E1 with $\Delta S \ne 0$)**: spin-orbit-induced. typical $A \sim 10^2$ to $10^5$ s$^{-1}$, called semi-forbidden, written with single bracket.

## notation

square brackets around the species and ionisation stage: $[OIII]$, $[SII]$, $[NII]$, $[OII]$, $[NeIII]$, etc.

semi-forbidden uses single right bracket: $C\,\textsc{iii}], N\,\textsc{iv}], C\,\textsc{ii}]$.

## why "forbidden in the lab, bright in the sky"

at terrestrial-laboratory densities ($n \sim 10^{19}$ cm$^{-3}$), an excited atom in a forbidden state is collisionally de-excited in $\sim 10^{-9}$ s, much faster than its $\sim 1$ s radiative lifetime. so no photon escapes; the line is suppressed.

at nebular densities ($n \sim 10^2$ to $10^5$ cm$^{-3}$), collisional de-excitation is slow ($\sim 10^4$ to $10$ s) and the radiative decay can succeed. so the photon does escape.

historical: discovered as "**nebulium lines**" by Huggins in 1864. unidentified for $\sim 60$ years because no laboratory source produced them. Bowen 1927 identified them as forbidden $[OIII]$ transitions in low-density gas.

## the canonical examples

### $[OIII]\,\lambda 4959, 5007$
$^1D_2 \to ^3P_{1,2}$. extremely strong in HII regions, planetary nebulae, AGN narrow-line regions. sometimes brighter than H$\alpha$.

### $[OIII]\,\lambda 4363$
$^1S_0 \to ^1D_2$. higher upper level. ratio $\lambda 4363/(\lambda 4959 + 5007)$ is the workhorse $T_e$ diagnostic.

### $[NII]\,\lambda 6548, 6584$
$^1D_2 \to ^3P_{1,2}$. similar to $[OIII]$, often blends with H$\alpha$.

### $[OII]\,\lambda 3726, 3729$
$^2D_{5/2,3/2} \to ^4S_{3/2}$. doublet ratio is a density diagnostic in low-ionisation regions.

### $[SII]\,\lambda 6716, 6731$
$^2D_{5/2,3/2} \to ^4S_{3/2}$. workhorse density diagnostic at $n_e \sim 10^2$ to $10^4$ cm$^{-3}$.

### $[NeIII]\,\lambda 3869$, $[NeV]\,\lambda 3426$
high-ionisation tracers of AGN.

## diagnostic value

forbidden lines are the **gold standard** for nebular plasma diagnostics:
- **temperature** from ratios of upper levels with very different excitation energies (e.g. $[OIII]\,\lambda 4363$ vs $\lambda 5007$).
- **density** from ratios of upper levels with similar excitation but different $A$ (e.g. $[SII]\,\lambda 6716/\lambda 6731$).
- **ionisation state** from the ratios of different ion stages of the same element (e.g. $[OII]/[OIII]$).
- **abundance** from total emission strength of given ionisation stage divided by H recombination, with the temperature and density known.
- **kinematics** from Doppler-shifted line centres in the velocity field of the gas.

modern AGN classification (BPT diagram) is based entirely on forbidden-line ratios.

## see also

- [Selection rules](../../02_Zettel/Theory/Selection rules.html)
- [Forbidden vs permitted vs semiforbidden transitions](../../02_Zettel/Theory/Forbidden vs permitted vs semiforbidden transitions.html)
- [Atomic term symbols](../../02_Zettel/Theory/Atomic term symbols.html)
- [Critical density](../../02_Zettel/Theory/Critical density.html)
- [Two-level atom](../../02_Zettel/Theory/Two-level atom.html)
- [OIII forbidden lines](../../02_Zettel/Theory/OIII forbidden lines.html)
- [SII forbidden lines](../../02_Zettel/Theory/SII forbidden lines.html)
- [Forbidden line diagnostics](../../02_Zettel/Theory/Forbidden line diagnostics.html)
- [BPT diagram](../../02_Zettel/Theory/BPT diagram.html)
- [Spectroscopic Te diagnostics](../../02_Zettel/Theory/Spectroscopic Te diagnostics.html)
- [Spectroscopic ne diagnostics](../../02_Zettel/Theory/Spectroscopic ne diagnostics.html)
