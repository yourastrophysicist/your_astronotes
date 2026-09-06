---
layout: default
title: "Dust attenuation in synthetic populations"
---

in any galaxy with active star formation, dust in the ISM **absorbs UV/optical photons** and re-emits them in the IR. modelling this attenuation correctly is essential for inferring SFR, age, and stellar mass from observed SEDs.

a related note already exists at [Dust attenuation and extinction curves](../../02_Zettel/Theory/Dust attenuation and extinction curves.html) focused on the reddening laws. this note specifically addresses how dust enters **synthetic SED predictions** in stellar population synthesis.

## the basic equation

observed flux is intrinsic flux times an attenuation factor:
$$f_\lambda^{\rm obs} = f_\lambda^{\rm int}\,10^{-A_\lambda/2.5}$$

with $A_\lambda$ in magnitudes. usually parametrised by $A_V$ and a wavelength-dependent attenuation law $k(\lambda) \equiv A_\lambda/E(B-V)$:
$$A_\lambda = (k(\lambda)/R_V)\,A_V$$

with $R_V$ the total-to-selective ratio.

## the major attenuation laws

### Calzetti 2000 (starburst)

empirical attenuation law for nearby starburst galaxies. flatter in the UV than Galactic ISM:
$$k_{\rm Calzetti}(\lambda)\quad\text{with}\quad R_V = 4.05$$
moderate UV-blue rise, red side roughly Galactic. **the standard for star-forming galaxy SED fits**.

### Charlot & Fall 2000 (two-component)

physically motivated: young stars sit in their **birth clouds** with high dust column, then escape into the diffuse ISM. two attenuation components:
- **birth cloud** ($\tau_{\rm BC}$): applied to stars $< 10$ Myr old (the ionising population).
- **diffuse ISM** ($\tau_{\rm ISM}$): applied to all stars.

slopes:
$$\tau(\lambda) = \tau_V (\lambda/5500\,\text{Å})^{-0.7}$$

predicts that **nebular lines are more attenuated than the stellar continuum** because they come from inside birth clouds. Balmer decrement ratio of nebular to continuum attenuation ${\rm A_V^{neb}}/{\rm A_V^*} \approx 2$, observed.

### SMC, LMC laws

Magellanic Cloud extinction curves are steeper in UV (less prominent $2175$ Å bump) than Galactic. used for low-metallicity high-$z$ galaxies as alternatives to Calzetti.

## attenuation vs extinction

these are technically different:
- **extinction**: applies to a single point source, simple Beer-Lambert.
- **attenuation**: applies to an extended source (a galaxy), where dust is mixed with stars. has a complex geometry-dependent form, generally not equal to extinction even for the same dust.

empirical attenuation laws (Calzetti) are *effective* attenuation curves derived from actual galaxies, baking in geometry. don't naively use a Galactic extinction curve for an integrated galaxy; use Calzetti or Charlot-Fall.

## energy balance

a key constraint: **all UV/optical photons absorbed by dust are re-emitted in the IR**. so:
$$L_{IR} = \int_0^\infty f_\lambda^{\rm int}(1 - 10^{-A_\lambda/2.5})\,d\lambda$$

panchromatic SED fitters (MAGPHYS, CIGALE) impose this self-consistently: they fit UV/optical attenuation and IR dust emission simultaneously, with $L_{IR}$ derived from $A_V$ and the SFH. this is much more robust than fitting each separately.

## the IRX-$\beta$ relation

empirical correlation between **IR excess** $\mathrm{IRX} \equiv L_{IR}/L_{UV}$ and **UV continuum slope** $\beta$:
$$\log_{10}(\mathrm{IRX}) = \log_{10}\!\left(10^{0.4\,A_{UV}} - 1\right)$$

with $A_{UV} \approx a + b\beta$. allows estimating $A_{UV}$ from UV photometry alone when no IR data is available. caveats: scatter $\sim 0.5$ dex due to age, geometry, attenuation-law variations.

see [UV slope and IRX-beta relation](../../02_Zettel/Theory/UV slope and IRX-beta relation.html).

## consequences for SFR and mass

- **forgetting dust**: SFR underestimated (most light gone), mass biased low.
- **wrong attenuation law**: SFR off by factor $\sim 2$, $M_*$ off by $\sim 30\%$.
- **dust-obscured fraction** $\sim 99\%$ in ULIRGs: UV alone gives $1\%$ of true SFR.

so dust is not a small correction. for any quantitative SFR or mass estimate of a star-forming galaxy, $A_V$ is a first-class parameter.

## see also

- [Dust attenuation and extinction curves](../../02_Zettel/Theory/Dust attenuation and extinction curves.html)
- [Interstellar absorption](../../02_Zettel/Theory/Interstellar absorption.html)
- [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.html)
- [UV slope and IRX-beta relation](../../02_Zettel/Theory/UV slope and IRX-beta relation.html)
- [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.html)
- [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.html)
- [SED fitting basics](../../02_Zettel/Theory/SED fitting basics.html)
- [SFR tracers from population synthesis](../../02_Zettel/Theory/SFR tracers from population synthesis.html)
- [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.html)
