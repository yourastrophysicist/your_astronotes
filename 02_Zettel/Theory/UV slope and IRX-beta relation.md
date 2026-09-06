---
layout: default
title: "UV slope and IRX-beta relation"
---

# UV slope and IRX-beta relation

up: [Pablo_03_Star_formation_in_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html) · [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.html)

## the UV slope

fit a power law to the rest-frame UV spectrum between $\sim 1250$ and $\sim 2600$ Å:

$$F_\lambda \propto \lambda^\beta$$

an unreddened, star-forming galaxy with a constant SFR lasting $> 100$ Myr has an *intrinsic* $\beta \simeq -2.3$. dust reddens the UV, raising $\beta$ toward zero or positive values. in practice $\beta$ is measured either from a spectrum, or from the colour between two UV filters (e.g. $F_{1500}/F_{2500}$).

## the IRX

$$\text{IRX} \equiv \frac{L_{\text{IR}}}{L_{\text{UV}}}$$

with $L_{\text{UV}}$ the observed (attenuated) UV luminosity and $L_{\text{IR}}$ the total $8$–$1000\,\mu$m luminosity. physically: every UV photon absorbed by dust ends up in the IR, so IRX is a direct measure of the fraction of UV radiation that was obscured.

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

at $z = 4$–$10$, rest-frame UV sits in HST/JWST bands, and the β-IRX relation is the main tool for recovering dust-obscured SFR. Bouwens 2009–2016 used β maps to argue that Lyman-break galaxies at $z \gtrsim 5$ are nearly dust-free. this is being revised post-ALMA and post-JWST (Inami 2022, Ferrara 2023).

## connections

- definition: [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.html)
- dust models underlying it: [Dust attenuation and extinction curves](../../02_Zettel/Theory/Dust attenuation and extinction curves.html)
- IR partner: [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.html)
- cross-checks: [SFR tracer comparison](../../02_Zettel/Theory/SFR tracer comparison.html)

## key references

- Meurer, Heckman, Calzetti 1999 ApJ 521, 64
- Kong et al. 2004
- Reddy et al. 2018
- Casey et al. 2014 (dust SED review)
