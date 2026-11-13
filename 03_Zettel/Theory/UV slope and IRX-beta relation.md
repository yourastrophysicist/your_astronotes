---
layout: "default"
title: "UV slope and IRX-beta relation"
---
# UV slope and IRX-beta relation

up: [[Pablo_03_Star_formation_in_galaxies]] · [[UV SFR tracer]]

## the UV slope

fit a power law to the rest-frame UV spectrum between $\sim 1250$ and $\sim 2600$ Å:

$$F_\lambda \propto \lambda^\beta$$

an unreddened, star-forming galaxy with a constant SFR lasting $> 100$ Myr has an *intrinsic* $\beta \simeq -2.3$. dust reddens the UV, raising $\beta$ toward zero or positive values. in practice $\beta$ is measured either from a spectrum, or from the colour between two UV filters (e.g. $F_{1500}/F_{2500}$).

## the IRX

$$\text{IRX} \equiv \frac{L_{\text{IR}}}{L_{\text{UV}}}$$

with $L_{\text{UV}}$ the observed (attenuated) UV luminosity and $L_{\text{IR}}$ the total $8$ to $1000\,\mu$m luminosity. physically: every UV photon absorbed by dust ends up in the IR, so IRX is a direct measure of the fraction of UV radiation that was obscured.

## the Meurer 1999 relation

Meurer, Heckman & Calzetti found for local starbursts:

$$\text{IRX} = 1.75 \times [10^{0.4 \cdot (4.43 + 1.99 \beta)} - 1]$$

i.e. IRX grows monotonically with $\beta$. the slope of the dust-attenuation curve sets the exact proportionality. for the Calzetti 2000 starburst curve, $dA_{1600}/d\beta \simeq 1.99$ mag.

this is the single most-used recipe for correcting rest-UV fluxes without IR data. given $\beta$, you read off IRX, which is equivalent to the UV extinction $A_{1600} \simeq 2.5\log_{10}(1 + \text{IRX})$.

## who deviates

- **normal star-forming galaxies** (not starbursts) lie *below* the Meurer relation at fixed $\beta$, consistent with a greyer Calzetti curve (Kong 2004, Takeuchi 2012, Casey 2014)
- **SMC-like dust** (low metallicity, steep UV extinction bump) follows a different track and can bias SFR estimates at high $z$
- **very old populations** have intrinsically red UV (high $\beta$) from aged A stars, not from dust. this contaminates $\beta$ in green-valley / post-starburst systems

## application to high-$z$

at $z = 4$ to $10$, rest-frame UV sits in HST/JWST bands, and the β-IRX relation is the main tool for recovering dust-obscured SFR. Bouwens 2009-2016 used β maps to argue that Lyman-break galaxies at $z \gtrsim 5$ are nearly dust-free. this is being revised post-ALMA and post-JWST (Inami 2022, Ferrara 2023).

## where it goes wrong

- the relation differs between local starbursts, the SMC and high-$z$ galaxies. one calibration does not fit all.

## connections

- definition: [[UV SFR tracer]]
- dust models underlying it: [[Dust attenuation and extinction curves]]
- IR partner: [[IR SFR tracer]]
- cross-checks: [[SFR tracer comparison]]

## key references

- Meurer, Heckman, Calzetti 1999 ApJ 521, 64
- Kong et al. 2004
- Reddy et al. 2018
- Casey et al. 2014 (dust SED review)



<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Cosmic dust|500](https://commons.wikimedia.org/wiki/Special:FilePath/Porous_chondriteIDP.jpg?width=600)
*Lead figure of the Wikipedia article Cosmic dust* ([Commons file page](https://commons.wikimedia.org/wiki/File:Porous_chondriteIDP.jpg), The original uploader was Amara at English Wikipedia., CC BY 1.0, as used on the Wikipedia article [Cosmic dust](https://en.wikipedia.org/wiki/Cosmic_dust))

- **Cosmic dust**. "Cosmic dust – also called extraterrestrial dust, space dust, or star dust – is dust that occurs in outer space or has fallen onto Earth. Most cosmic dust particles measure between a few molecules and 0.1 mm (100 μm), such as micrometeoroids (<30 μm) and meteoroids (>30 μm)." ([Wikipedia](https://en.wikipedia.org/wiki/Cosmic_dust))
- **The Dust Attenuation Law in Galaxies**. "Understanding the properties and physical mechanisms that shape dust attenuation curves in galaxies is one of the fundamental questions of extragalactic astrophysics, with a great practical significance for deriving the physical properties of galaxies, such as the star formation rate and stellar mass." ([arXiv:2001.03181](https://arxiv.org/abs/2001.03181))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## Linked References

- [[Balmer decrement]]
- [[Dust attenuation and extinction curves]]
- [[SFR tracer comparison]]
- [[Observational_Cosmology_MOC]]


