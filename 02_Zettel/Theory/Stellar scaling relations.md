---
layout: default
title: "Stellar scaling relations"
---

simple power-law relationships between stellar parameters that work surprisingly well across the main sequence. they come from order-of-magnitude balance arguments in the stellar structure equations.

---

## the four core parameters

every star (specifically: every MS star) is approximately characterized by four numbers:
- mass $M$
- radius $R$
- luminosity $L$
- effective temperature $T_{\rm eff}$

connected by the **Stefan-Boltzmann law**:
$$L = 4\pi R^2 \sigma T_{\rm eff}^4$$

so any three of these determines the fourth. on the MS, mass alone effectively determines the rest.

---

## mass-luminosity

for stars $0.5\, M_\odot \lesssim M \lesssim 50\, M_\odot$:
$$L \propto M^{3.5}$$

steeper at high mass ($\propto M^4$) because radiative pressure dominates; shallower at low mass ($\propto M^{2.3}$) because the structure changes with onset of convection.

derivation sketch: in radiative equilibrium, the temperature gradient sets the photon mean free path and hence the luminosity. with $L \sim T^4 R^2/\tau$ and $\tau \sim \kappa\rho R$, plus hydrostatic balance giving $T \propto M/R$, you get the $M^3$–$M^4$ scaling.

---

## mass-radius

on the MS:
$$R \propto M^{0.8}$$ (approximately, with mass-dependent exponent)

so a 10 $M_\odot$ star is about 6 $R_\odot$. less than linear because heavier stars have more central concentration.

---

## mass-temperature

from $L = 4\pi R^2 \sigma T^4$ with $L \propto M^{3.5}$ and $R \propto M^{0.8}$:
$$T_{\rm eff} \propto M^{0.5}$$

so a 10 $M_\odot$ MS star has $T_{\rm eff} \sim \sqrt{10}\cdot 5800$ K $\sim 18 000$ K — a B-type star. consistent with the OBAFGKM sequence.

---

## mass-lifetime

the MS lifetime is set by how long the star can fuse its hydrogen fuel:
$$t_{\rm MS} \sim \frac{M\,c^2 \cdot \eta}{L}$$

with $\eta \approx 0.007$ the fraction of mass converted to energy in H→He fusion. so:
$$t_{\rm MS} \propto \frac{M}{L} \propto M^{-2.5}$$

with $t_{\rm MS,\odot} \approx 10^{10}$ yr, this gives:
$$t_{\rm MS} \approx 10^{10}\,(M/M_\odot)^{-2.5}\,\text{yr}$$

so:
- $M = 0.5\, M_\odot$: $\sim 60$ Gyr (longer than the universe's age)
- $M = 1\, M_\odot$: $\sim 10$ Gyr
- $M = 5\, M_\odot$: $\sim 200$ Myr
- $M = 25\, M_\odot$: $\sim 5$ Myr

---

## consequences

these scaling relations have huge consequences:

1. **the IMF and the integrated luminosity**: even though massive stars are rare ([Initial mass function](../../02_Zettel/Theory/Initial mass function.md) $\propto M^{-2.35}$), they dominate the *luminosity* of a stellar population because $L \propto M^{3.5}$. so UV light from a galaxy traces O-B stars.

2. **the MS turn-off as a chronometer**: the brightest MS star in a coeval cluster gives the cluster age via $t_{\rm MS}$. globular clusters: turn-off at $\sim 0.8\, M_\odot$ → $\sim 12$ Gyr.

3. **the Vogt-Russell theorem**: in stellar structure theory, $M$ and the chemical composition uniquely determine the structure of a MS star. so all the scaling relations follow from $M$ alone.

4. **stellar feedback**: massive stars dominate radiation pressure on the ISM, ionizing UV photons, supernova energy injection, and metal enrichment. they shape galaxy evolution way out of proportion to their numbers.

---

## limits to the relations

scaling relations break down at the extremes:
- below $\sim 0.08\, M_\odot$: hydrogen burning is impossible. brown dwarfs (no H fusion, but maybe some D fusion).
- above $\sim 100\, M_\odot$: radiative pressure exceeds gravity → "Eddington limit" for stars. unstable.
- non-MS stars (giants, WDs): completely different scaling laws.

so these relations are most useful for $0.5\, M_\odot \lesssim M \lesssim 50\, M_\odot$ on the MS.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md)
- [Main sequence, giants, supergiants, white dwarfs](../../02_Zettel/Theory/Main sequence, giants, supergiants, white dwarfs.md)
- [HR diagram](../../02_Zettel/Theory/HR diagram.md)
- [Stellar structure equations](../../02_Zettel/Theory/Stellar structure equations.md)
- [Stellar evolution timescales](../../02_Zettel/Theory/Stellar evolution timescales.md)
- [Initial mass function](../../02_Zettel/Theory/Initial mass function.md)
- [Blackbody radiation and Stefan-Boltzmann](../../02_Zettel/Theory/Blackbody radiation and Stefan-Boltzmann.md)
