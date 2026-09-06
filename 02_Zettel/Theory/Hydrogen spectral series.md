---
layout: default
title: "Hydrogen spectral series"
---

the energy levels of hydrogen, $E_n = -13.6/n^2$ eV, give a spectrum organised into series labelled by the lower level. each series has its own wavelength range. the most observable in stars is the Balmer series.

## the series

| series | $n_{\rm lower}$ | wavelength range | edge (series limit) | use |
|---|---|---|---|---|
| Lyman | 1 | UV | $912$ Å | absorption in cool ISM, Ly$\alpha$ at $z > 1.7$ enters optical |
| Balmer | 2 | optical | $3646$ Å | the workhorse: stellar typing, HII regions, BLR of AGN |
| Paschen | 3 | NIR | $8203$ Å | obscured SF galaxies, dusty stellar atmospheres |
| Brackett | 4 | NIR | $14\,580$ Å | very dusty galaxies (Brackett $\gamma$ at $2.16\,\mu$m) |
| Pfund | 5 | NIR/MIR | $22\,790$ Å | rare |
| Humphreys | 6 | MIR | $32\,820$ Å | very rare |

higher series go into the radio: $n = 100$ to $1000$ transitions are observable as **radio recombination lines (RRLs)** at GHz frequencies, used to probe HII regions kinematically.

## the Balmer series in detail

| line | $n_m$ | wavelength (Å) |
|---|---|---|
| H$\alpha$ | 3 | $6562.8$ |
| H$\beta$ | 4 | $4861.3$ |
| H$\gamma$ | 5 | $4340.4$ |
| H$\delta$ | 6 | $4101.7$ |
| H$\varepsilon$ | 7 | $3970.0$ |
| H$8$ | 8 | $3889.0$ |
| H$9$ | 9 | $3835.3$ |
| H$10$ | 10 | $3797.9$ |
| ... | ... | ... |
| H head | $\infty$ | $3646.0$ |

note: above H8 the lines are increasingly close together and converge at the **Balmer edge** $3646$ Å (= "Balmer jump"). at this wavelength, the bound-free continuum kicks in: photons just above this wavelength can ionise hydrogen from $n = 2$. produces a sharp jump in the continuum, dramatic in A and F stars where $n = 2$ population is high.

## the Lyman series

| line | $n_m$ | wavelength (Å) |
|---|---|---|
| Ly$\alpha$ | 2 | $1215.7$ |
| Ly$\beta$ | 3 | $1025.7$ |
| Ly$\gamma$ | 4 | $972.5$ |
| Ly$\delta$ | 5 | $949.7$ |
| ... | ... | ... |
| Ly head | $\infty$ | $911.3$ |

Ly$\alpha$ is **the dominant ISM absorption feature** in the UV, and at $z > 1.7$ shifts into the optical, becoming a major emission line in high-$z$ galaxy and AGN spectra.

the **Lyman limit** at $912$ Å is the wavelength of an ionising photon for ground-state H. shorter than this, the continuum bound-free absorption depletes ionising photons. the **Lyman edge** in QSO spectra signals the onset of HI absorption (Lyman alpha forest at higher $z$).

## what controls the strength

each series line has strength proportional to (number of atoms in the lower level) × (oscillator strength). the lower-level population follows Boltzmann + Saha:
- in cool stars ($T < 4000$ K): hydrogen is mostly neutral but in $n = 1$. Lyman lines invisible (in UV); Balmer faint.
- in solar-temperature stars ($T \sim 5000$ to $7000$ K): some $n = 2$ population. Balmer lines moderate.
- in A0 stars ($T \sim 10\,000$ K): peak of $n = 2$ excitation. Balmer lines very strong, broad.
- in O stars ($T > 25\,000$ K): hydrogen mostly ionised. Balmer lines weak again.

Balmer line strength peaks at A0, exactly the spectral type Cecilia Payne identified as having maximum H I excitation.

## see also

- [Rydberg-Ritz formula](../../02_Zettel/Theory/Rydberg-Ritz formula.md)
- Energy level diagrams Grötrian
- [Atomic term symbols](../../02_Zettel/Theory/Atomic term symbols.md)
- [Hydrogen population vs T](../../02_Zettel/Theory/Hydrogen population vs T.md)
- [Helium energy levels](../../02_Zettel/Theory/Helium energy levels.md)
- [Why the Sequence OBAFGKM](../../02_Zettel/Theory/Why the Sequence OBAFGKM.md)
- [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.md)
- [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.md)
- [Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.md)
