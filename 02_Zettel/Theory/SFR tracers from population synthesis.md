---
layout: default
title: "SFR tracers from population synthesis"
---

in unresolved populations the only thing measurable is integrated light, so star-formation rate has to be inferred from the **fraction of light produced by short-lived massive stars**. several tracers exist, each with a different timescale and dust sensitivity. answer to `obs5.pdf`.

## the three main tracers

### UV continuum ($1500$ to $3000$ Å)

**unobscured SFR**, $\sim 100$ Myr timescale.

logic: very hot massive stars dominate UV emission (see [Why hot massive stars dominate luminosity](../../02_Zettel/Theory/Why hot massive stars dominate luminosity.md)). their lifetime sets the timescale. calibration (Kennicutt 1998, Madau 2014):
$$\mathrm{SFR} = 1.4 \times 10^{-28}\, L_\nu(\mathrm{UV})\,M_\odot/\text{yr}$$
with $L_\nu$ in erg/s/Hz at $\sim 2000$ Å.

**problem**: dust strongly absorbs UV. correction needed via:
- IRX-$\beta$ relation (UV slope $\beta$ vs $L_{IR}/L_{UV}$, Meurer 1999).
- direct $A_{UV}$ from $L_{IR}$ in dust energy balance.
- spectral fitting.

see [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.md).

### H$\alpha$ emission ($6563$ Å)

**ionised SFR** from massive stars, $< 10$ Myr timescale.

logic: O stars produce ionising photons, which photoionise the surrounding HII region; recombination produces H$\alpha$. the H$\alpha$ luminosity is directly proportional to the ionising photon rate:
$$\mathrm{SFR} = 7.9 \times 10^{-42}\, L(H\alpha)\,M_\odot/\text{yr}$$
(Kennicutt 1998).

shorter timescale than UV (only the very most massive stars contribute) and **less dust-sensitive** but still affected, corrected via [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.md).

see [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.md).

### IR continuum ($\lambda > 8\,\mu$m, total $L_{IR}$)

**obscured SFR**, energy reprocessed by dust, $\sim 100$ Myr timescale.

logic: UV from young stars is absorbed by dust and re-radiated thermally at $\sim 30$ to $80$ K, peaking in the far-IR ($60$ to $200\,\mu$m). total IR luminosity:
$$\mathrm{SFR} = 4.5 \times 10^{-44}\, L_{IR}\,M_\odot/\text{yr}$$
with $L_{IR}$ in erg/s integrated over $8$ to $1000\,\mu$m.

captures the **dust-obscured** contribution missed by UV. for ULIRGs, $\sim 99\%$ of SF is obscured.

see [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.md).

## the energy-balance combination

the most robust SFR estimate is the **sum** of unobscured (UV) + obscured (IR):
$$\mathrm{SFR}_{\rm tot} = \mathrm{SFR}(UV) + \mathrm{SFR}(IR)$$

equivalent to assuming dust energy conservation: every UV photon either escapes (counted in UV) or is absorbed and re-radiated as IR (counted in IR). modern panchromatic codes (MAGPHYS, CIGALE) implement this self-consistently.

## other tracers

- **[OII] $3727$ Å**: forbidden line, weakly metallicity-dependent. useful in the redshift desert ($z \sim 1$ to $2$) where H$\alpha$ is shifted out of the optical.
- **far-IR fine-structure lines** ([CII] $158\,\mu$m, [OI] $63\,\mu$m): ALMA-accessible at $z > 4$.
- **radio continuum** (1.4 GHz): from supernova remnants + thermal HII free-free. dust-insensitive. FIR-radio correlation (Helou 1985, Murphy 2011) extrapolates the IR calibration into the radio.
- **X-ray luminosity** (HMXB + diffuse): SFR-tracking via young high-mass X-ray binaries. metallicity-dependent.
- **nebular continuum** (Lyman edge, etc.): used at high $z$.

see [Other SFR tracer lines](../../02_Zettel/Theory/Other SFR tracer lines.md) and [SFR tracer comparison](../../02_Zettel/Theory/SFR tracer comparison.md).

## key tradeoffs

| tracer | timescale | dust sensitivity | best for |
|---|---|---|---|
| UV | $\sim 100$ Myr | high | dust-poor galaxies, low-$z$ samples |
| H$\alpha$ | $\sim 10$ Myr | medium | nearby resolved spectroscopy |
| IR | $\sim 100$ Myr | inverse (needs dust) | dust-rich, ULIRGs |
| UV + IR | $\sim 100$ Myr | self-consistent | comprehensive panchromatic |
| [OII] | $\sim 10$ Myr | medium | redshift desert |
| radio | $\sim 100$ Myr | none | dust-obscured, high-$z$ |

## consequences for cosmic SFH

the [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.md) (Madau-Dickinson plot) is a synthesis of all these tracers across redshift bins, with each anchoring at different $z$:
- low $z$: H$\alpha$ + UV.
- $z = 1$ to $3$: [OII], UV (rest-frame).
- $z > 3$: UV (rest-frame), Lyman-$\alpha$, ALMA [CII].

different tracers should give the same $\rho_{SFR}$ at fixed $z$; agreement validates the calibrations.

## see also

- [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.md)
- [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.md)
- [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.md)
- [Lyman alpha SFR tracer](../../02_Zettel/Theory/Lyman alpha SFR tracer.md)
- [Radio SFR tracer](../../02_Zettel/Theory/Radio SFR tracer.md)
- [X-ray SFR tracer](../../02_Zettel/Theory/X-ray SFR tracer.md)
- [OII SFR tracer](../../02_Zettel/Theory/OII SFR tracer.md)
- [SFR tracer comparison](../../02_Zettel/Theory/SFR tracer comparison.md)
- [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.md)
- [Star formation history of a population](../../02_Zettel/Theory/Star formation history of a population.md)
- [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.md)
- [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.md)
- [Dust attenuation in synthetic populations](../../02_Zettel/Theory/Dust attenuation in synthetic populations.md)
