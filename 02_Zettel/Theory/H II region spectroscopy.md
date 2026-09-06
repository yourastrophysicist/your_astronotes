---
layout: default
title: "H II region spectroscopy"
---

**HII region spectra** are dominated by **strong recombination lines** (especially Balmer Hα, Hβ) and **forbidden emission lines** (especially $[OIII], [NII], [SII], [OII]$) on top of a faint nebular continuum. classical example: the Orion Nebula M42.

## the spectral signature

### emission lines
- **H I Balmer** Hα ($6563$), Hβ ($4861$), Hγ, Hδ, ... in emission.
- **He I** lines like $\lambda 5876$ (D3), $\lambda 6678$. weaker but visible.
- **He II $\lambda 4686$** if a very hot ionising source ($T > 40\,000$ K).
- **$[OIII]\,\lambda 4959, 5007$** very strong, often comparable to Hβ.
- **$[OIII]\,\lambda 4363$** weak but detectable (the auroral line, used for $T_e$).
- **$[OII]\,\lambda 3726, 3729$** doublet.
- **$[NII]\,\lambda 6548, 6584$** flanking Hα.
- **$[SII]\,\lambda 6716, 6731$** doublet.
- **$[NeIII]\,\lambda 3869$**.

### faint continuum
- recombination + free-free + 2-photon, all faint compared to lines.

### no metal absorption
unlike a stellar photosphere, an HII region has no broad metal absorption features. the gas is too thin for absorption to dominate.

## what you can extract

from a single HII region spectrum:

1. **dust extinction** $A_V$: from $H\alpha/H\beta$ via [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.md).
2. **electron density** $n_e$: from $[SII]\,\lambda 6716/\lambda 6731$.
3. **electron temperature** $T_e$: from $[OIII]\,\lambda 4363/(\lambda 4959+5007)$.
4. **ionisation parameter** $U$: from $[OIII]/[OII]$ ratio.
5. **abundances**: from emission-line strengths divided by $H\beta$, with $T_e, n_e$ known. mainly $\log(O/H), \log(N/H), \log(S/H), \log(Ne/H)$ via direct method.
6. **kinematics**: from line shifts and widths (radial velocities, internal turbulence).

a **complete plasma diagnosis** of an HII region from one moderate-quality spectrum.

## the canonical examples

### Orion Nebula M42
prototype HII region in the local universe. $\sim 24$ pc across, central $\theta^1$ Ori cluster. very well-studied at all wavelengths. the textbook example.

### M16 Eagle Nebula, M20 Trifid, M17 Omega
similar Galactic HII regions, each with associated young stellar clusters.

### NGC 604 in M33
the largest HII region in the Local Group. luminous, optically resolved.

### 30 Doradus / Tarantula in LMC
the most luminous HII region in the Local Group, around the R136 super-star cluster. major target for stellar wind / WR studies.

## the ionising stars

an HII region is created by the ionising photons from one or more O stars. spectral type of the ionising source determines:
- **size of HII region**: $R_S \propto Q^{1/3}$, so brighter sources $\to$ larger Strömgren spheres.
- **ionisation parameter**: hotter source $\to$ harder spectrum, higher $U$.
- **line ratios**: [OIII]/[OII], He II/H$\beta$, etc., signatures of ionising hardness.

photoionisation modelling (Cloudy, MAPPINGS) recovers source spectrum + gas conditions from observed line ratios.

## see also

- Strömgren sphere
- [Ionisation stratification](../../02_Zettel/Theory/Ionisation stratification.md)
- [Forbidden lines](../../02_Zettel/Theory/Forbidden lines.md)
- [OIII forbidden lines](../../02_Zettel/Theory/OIII forbidden lines.md)
- [SII forbidden lines](../../02_Zettel/Theory/SII forbidden lines.md)
- [Forbidden line diagnostics](../../02_Zettel/Theory/Forbidden line diagnostics.md)
- [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.md)
- [Dust extinction in nebulae](../../02_Zettel/Theory/Dust extinction in nebulae.md)
- [Photoionisation balance](../../02_Zettel/Theory/Photoionisation balance.md)
- [Optically thin recombination lines](../../02_Zettel/Theory/Optically thin recombination lines.md)
- [Recombination continuum](../../02_Zettel/Theory/Recombination continuum.md)
- [BPT diagram](../../02_Zettel/Theory/BPT diagram.md)
- [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.md)
