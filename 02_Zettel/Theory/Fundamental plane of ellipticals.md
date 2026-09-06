---
layout: default
title: "Fundamental plane of ellipticals"
---

# fundamental plane of ellipticals

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md)

## the relation

elliptical galaxies live on a thin two-dimensional surface in the three-dimensional space of $(\log R_e, \log \sigma_o, \log \langle I \rangle_e)$:

$$\boxed{\,R_e \propto \sigma_o^{1.4}\, \langle I \rangle_e^{-0.9}\,}$$

where:

- $R_e$ = effective (half-light) radius
- $\sigma_o$ = central stellar velocity dispersion
- $\langle I \rangle_e$ = mean surface brightness within $R_e$

the scatter perpendicular to the plane is $\sim 0.07$ dex in $R_e$. it is one of the tightest scaling relations in extragalactic astronomy.

## why it exists (the virial argument)

ellipticals are pressure-supported equilibrium systems. virial theorem in homologous form:

$$M \propto \sigma^2\, R / G$$

combine with the definition of mean surface brightness, $L \propto \langle I \rangle_e R_e^2$, and the mass-to-light ratio $\Upsilon = M/L$:

$$R_e \propto \sigma^2\, \langle I \rangle_e^{-1}\, \Upsilon^{-1}$$

if $\Upsilon$ were constant, the exponents would be $(2, -1)$. observed exponents are $(1.4, -0.9)$. the **tilt** of the FP from the virial expectation is the famous $\Upsilon$ trend: $\Upsilon \propto M^{0.2}$, more massive ellipticals have larger mass-to-light. this likely reflects a combination of stellar population (slightly older / more metal rich at high mass) and IMF variation.

## what it gives us

three uses:

1. **distance indicator**: with $\sigma_o$ and $\langle I \rangle_e$ measured, the FP gives $R_e$ in physical units. comparing to angular size gives $d_A$. this was used as a $H_0$ probe (e.g. Jorgensen 1996).
2. **structural diagnostic**: deviations from the FP point to recent merger remnants (slightly above) or mass-segregated dwarfs (off entirely).
3. **scaling-relations sanity check**: any galaxy formation model must reproduce the FP slope and tilt.

## related projections

- **Faber-Jackson** ($L \propto \sigma^4$): a 2D projection of the FP, dropping $\langle I \rangle_e$.
- **Kormendy relation** ($\mu_e \propto \log R_e$): another 2D projection.

## connections

- size-luminosity context: [Galaxy size-luminosity relation](../../02_Zettel/Theory/Galaxy size-luminosity relation.md)
- spirals' analogue: [Tully-Fisher relation](../../02_Zettel/Theory/Tully-Fisher relation.md)
- gas physics analogue: [Schmidt-Kennicutt law](../../02_Zettel/Theory/Schmidt-Kennicutt law.md)
- BH analogue: [Magorrian relation](../../02_Zettel/Theory/Magorrian relation.md)
- main star-formation analogue: [Galaxy main sequence of star formation](../../02_Zettel/Theory/Galaxy main sequence of star formation.md)

## key references

- Djorgovski & Davis 1987, Dressler et al. 1987 (the discovery papers)
- Bender, Burstein, Faber 1992 ($\kappa$-space view)
- Jorgensen, Franx, Kjaergaard 1996 (Coma cluster FP)
