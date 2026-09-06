---
layout: default
title: "K-correction in optical vs sub-mm"
---

the **K-correction** behaves dramatically differently between optical and sub-mm wavelengths. in optical it makes high-$z$ galaxies fainter; in sub-mm it can make them **brighter**, allowing detection at $z > 1$ to $10$ at nearly constant flux. this is what makes sub-mm a unique window onto the high-$z$ universe.

## optical K-correction: positive

at optical wavelengths, the typical galaxy SED has a peak around the optical and falls off into the UV. so observing at fixed band $V$ at $z = 1$ samples the rest-frame UV at $\sim 2700$ Å, where the spectrum is **dimmer** than rest-frame V.

$K_V(z) > 0$: the source appears fainter than the inverse-square law alone would predict.

at $z = 5$, observing in V samples rest-frame Ly$\alpha$, even fainter. galaxies become **rapidly invisible** in optical bands at high $z$.

## sub-mm K-correction: negative (in some range)

at sub-mm wavelengths ($\sim 850\,\mu$m, like SCUBA or ALMA Band 7), the galaxy SED has its dust-emission peak at $\sim 100\,\mu$m. observing at $850\,\mu$m at $z = 0$ samples the **falling Rayleigh-Jeans tail** of the dust SED.

at higher $z$, observing at $850\,\mu$m samples shorter rest-frame wavelengths, eventually **closer to the dust peak at 100 μm**. so the source flux **rises** until $z \sim 5$ to $10$, where the rest-frame is back to the peak.

result: $850\,\mu$m flux of dust-rich galaxies is **roughly constant** over $z = 1$ to $10$. an order-of-magnitude variation in distance is compensated by an order-of-magnitude rise in K-correction.

quantitatively:
$$F_{850}(z) \sim \text{const}\quad\text{for}\quad 1 \lesssim z \lesssim 10$$

## the consequence

### sub-mm cosmology

surveys at sub-mm reveal a population of **dusty star-forming galaxies (DSFG)** at $z = 1$ to $5$, comparable to or more numerous than UV-bright galaxies at the same $z$. before sub-mm surveys (SCUBA-2, ALMA), much of the cosmic SFR was hidden behind dust.

major surveys: SCUBA-2 + Herschel + ALMA. AS2COSMOS, ALMA-COSMOS, and others. found $\sim 10^4$ DSFG.

### the cosmic SFR

correcting for dust: the cosmic SFR density at $z \sim 2$ is $\sim 50\%$ obscured. Madau-Dickinson plot.

### the (negative) K-correction is exact, not an approximation

derivable from the SED's spectral slope at the observed band:
- Rayleigh-Jeans tail: $F_\nu \propto \nu^2$. observing at fixed $\nu_{\rm obs}$ at higher $z$: $F_\nu \propto F_\nu^{\rm rest}(\nu_{\rm rest})/(1+z)$, with $\nu_{\rm rest} = \nu_{\rm obs}(1+z)$. so $F_\nu \propto \nu_{\rm obs}^2 (1+z)^2/(1+z) = \nu_{\rm obs}^2(1+z)$, **rising** with $z$.

at higher $z$, eventually $\nu_{\rm rest} \sim 100\,\mu$m crosses the SED peak and starts going down on the Wien side. plateau in flux from $z = 1$ to $\sim 10$.

## the mathematical reason

K-correction quantifies the spectral-slope mismatch between observed and rest-frame bandpasses. for a power-law SED $F_\nu \propto \nu^\alpha$:
$$K(z) = -2.5(\alpha + 1)\log_{10}(1 + z)$$

(approximate). for the **Rayleigh-Jeans tail** of a thermal emitter, $\alpha \approx +2$ (i.e., $\nu^2$), giving:
$$K(z) \approx -7.5\log_{10}(1 + z)$$

at $z = 5$: $K \approx -5.7$ mag. so a sub-mm source at $z = 5$ is **brighter** than the same source at $z = 0$ by $\sim 5.7$ mag, almost exactly cancelling the inverse-square dimming.

## the visual:

```
       optical: galaxies fade with z
       --------|--------|--------|--------> z
       z=0       z=1      z=3      z=5
       bright    dimmer   gone     gone
       
       sub-mm: galaxies stay visible
       --------|--------|--------|--------> z
       z=0       z=1      z=3      z=5
       const    const    const    fading
```

## see also

- [K-correction](../../02_Zettel/Theory/K-correction.html)
- [Luminosity distance](../../02_Zettel/Theory/Luminosity distance.html)
- [Angular diameter distance](../../02_Zettel/Theory/Angular diameter distance.html)
- [Surface brightness dimming](../../02_Zettel/Theory/Surface brightness dimming.html)
- [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.html)
- [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.html)
- [LIRGs ULIRGs HyLIRGs](../../02_Zettel/Theory/LIRGs ULIRGs HyLIRGs.html)
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.html)
