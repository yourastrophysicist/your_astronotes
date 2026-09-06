---
layout: default
title: "Color indices"
---

a **color index** (or just "color") is a magnitude difference between two filters of the same source:
$$\text{color} \equiv m_1 - m_2 = -2.5\log_{10}(F_1/F_2)$$

intrinsically a one-number summary of the **shape** of the SED across two bandpasses. removes distance and geometry, keeps spectral information.

## why colors are useful

- **independent of distance**: both fluxes drop as $1/d^2$, the ratio is preserved.
- **probe of temperature**: hotter blackbodies are bluer (less $B - V$ for example).
- **probe of redshift**: at high $z$, spectral features shift through filters and colors change in characteristic ways. basis of [Photometric redshifts](../../02_Zettel/Theory/Photometric redshifts.md).
- **probe of dust extinction**: dust reddens, so excess $E(B-V) \equiv (B - V)_{\rm obs} - (B - V)_{\rm intrinsic} > 0$.
- **probe of stellar population age**: a young SSP is bluer, an old one redder.

## common stellar color indices

| color | typical range | what it traces |
|---|---|---|
| $U - B$ | $-1$ (O) to $+1.5$ (M) | hot side of SED, useful for $T$ in early types |
| $B - V$ | $-0.3$ (O) to $+1.5$ (M) | the workhorse temperature indicator on the MS |
| $V - I$ | $-0.5$ to $+4$ | broad SED shape, less Balmer sensitivity |
| $J - K$ | $-0.1$ to $+1.3$ | NIR slope, late-type giants and dust |

example values:
- O5 V star: $B - V \approx -0.30$ (very hot, $T \approx 40\,000$ K).
- A0 V (Vega): $B - V \equiv 0$ by definition of the Vega system.
- G2 V (Sun): $B - V \approx +0.65$.
- M0 V: $B - V \approx +1.4$.
- M8 III (red giant): $B - V \approx +1.6$.

## colors as galaxy classifier

galaxy SDSS color $u - r$ shows a clear **bimodality** between:
- **blue cloud**: $u - r \lesssim 2$, star-forming spirals.
- **red sequence**: $u - r \gtrsim 2.3$, passive ellipticals.
- **green valley**: in between, transitional galaxies.

see [Color bimodality of galaxies](../../02_Zettel/Theory/Color bimodality of galaxies.md) and [Red sequence and blue cloud](../../02_Zettel/Theory/Red sequence and blue cloud.md) for the cosmological context.

## color-magnitude diagrams (CMDs)

plotting magnitude vs color for individual stars gives the observational version of the [HR diagram](../../02_Zettel/Theory/HR diagram.md). for cluster stars: a single, well-defined isochrone, with a turnoff at the mass-dependent main-sequence lifetime point.

for galaxies: a color-magnitude diagram of galaxies in a cluster shows the red sequence, used to determine the cluster redshift.

## reddening corrections

observed colors are dust-affected. correction:
$$(B - V)_0 = (B - V)_{\rm obs} - E(B - V)$$
with $E(B - V)$ from spectral fitting, Balmer decrement, or dust maps (Schlegel-Finkbeiner-Davis 1998).

reddening vector on the CMD: a parallel shift along $B - V$ proportional to $E(B - V)$, with a slope $A_V/E(B-V) = R_V \approx 3.1$ for diffuse Galactic ISM.

## see also

- [Magnitudes and photometric systems](../../02_Zettel/Theory/Magnitudes and photometric systems.md)
- [Pogson magnitudes and flux relation](../../02_Zettel/Theory/Pogson magnitudes and flux relation.md)
- [Filter systems and bandpasses](../../02_Zettel/Theory/Filter systems and bandpasses.md)
- [Bolometric correction and effective temperature](../../02_Zettel/Theory/Bolometric correction and effective temperature.md)
- [HR diagram](../../02_Zettel/Theory/HR diagram.md)
- [Color bimodality of galaxies](../../02_Zettel/Theory/Color bimodality of galaxies.md)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.md)
- [Photometric redshifts](../../02_Zettel/Theory/Photometric redshifts.md)
- [Interstellar absorption](../../02_Zettel/Theory/Interstellar absorption.md)
