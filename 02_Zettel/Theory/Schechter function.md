---
layout: default
title: "Schechter function"
---

# schechter function

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html) · [Luminosity function definition](../../02_Zettel/Theory/Luminosity function definition.html)

## the form

Paul Schechter (1976) proposed a three-parameter parametrization of the galaxy LF that has resisted serious revision for fifty years:

$$\boxed{\,\phi(L)\, dL = \frac{\phi^*}{L^*} \left(\frac{L}{L^*}\right)^\alpha \exp\!\left(-\frac{L}{L^*}\right) dL\,}$$

three parameters:

- $\phi^*$: characteristic number density (units $\text{Mpc}^{-3}$), sets the overall normalization
- $L^*$: characteristic luminosity, the "knee" where the function transitions from a power law to an exponential cutoff
- $\alpha$: faint-end slope. for $L \ll L^*$, $\phi(L) \propto L^\alpha$. typically $-2 < \alpha < -1$.

## what each parameter does

- **bright end** ($L \gg L^*$): the exponential $e^{-L/L^*}$ kills the count. there are no galaxies with $L \gg 5 L^*$, this is observed and physical (probably AGN feedback at high mass; see [Halo gravity suppression of galaxy formation](../../02_Zettel/Theory/Halo gravity suppression of galaxy formation.html)).
- **knee** at $L \sim L^*$: this is where the typical "$L^*$ galaxy" lives. the milky way is roughly $L^*$.
- **faint end** ($L \ll L^*$): $\phi \propto L^\alpha$ with $\alpha < 0$, so number rises toward faint $L$. $\alpha = -1$ is "flat" in $\phi(\log L)$; $\alpha = -1.3$ is a typical optical value; UV / faint dwarf measurements give $\alpha \to -2$.

## why this works

physically, the Schechter form is what you get when you convolve the **halo mass function** (which has a Press-Schechter exponential cutoff at high mass) with a **stellar-to-halo mass ratio** that turns over at high mass (see [Stellar-to-halo mass ratio](../../02_Zettel/Theory/Stellar-to-halo mass ratio.html)). the *exponential* cutoff in $\phi(L)$ is inherited directly from the halo mass function's exponential.

this also explains why the Schechter form is universal: any LF whose underlying halo population is Press-Schechter will look approximately Schechter, with the parameters depending on the band and redshift.

## typical values, k-band, low z

Smith et al. 2009 from UKIDSS / 2MASS measured the K-band LF locally:

- $M^* = -23.19$ (Vega)
- $\alpha = -0.81$
- $\phi^* = 0.0166\, h^3\, \text{Mpc}^{-3}$

see [Schechter K-band luminosity function](../../02_Zettel/Theory/Schechter K-band luminosity function.html).

## limitations

a single Schechter does not always fit:

- the **faint end** in deep dwarf samples (Local Group, Virgo) often needs a steeper slope $\alpha \to -1.5$ or a separate power-law component.
- the **bright end** at high $z$ shows a power-law tail above $L^*$ (Pérez-González et al. 2005), requiring a [Double power-law modified Schechter](../../02_Zettel/Theory/Double power-law modified Schechter.html) form.
- splitting by morphology, color, or environment gives *different* Schechter parameters per population (see [LF by morphology and SED](../../02_Zettel/Theory/LF by morphology and SED.html)).

## connections

- the next-up working forms: [Schechter function in magnitudes](../../02_Zettel/Theory/Schechter function in magnitudes.html), [Integrals of the Schechter function](../../02_Zettel/Theory/Integrals of the Schechter function.html)
- estimator: [1Vmax estimator](../../02_Zettel/Theory/1Vmax estimator.html)
- canonical numbers: [Schechter K-band luminosity function](../../02_Zettel/Theory/Schechter K-band luminosity function.html)
- bright-end departures: [Double power-law modified Schechter](../../02_Zettel/Theory/Double power-law modified Schechter.html)
- mass version: [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.html)

## key references

- Schechter 1976, ApJ 203, 297 (the original)
- Press & Schechter 1974 (the halo mass function that motivates the form)
- Smith, Loveday, Cross 2009 (K-band LF)
