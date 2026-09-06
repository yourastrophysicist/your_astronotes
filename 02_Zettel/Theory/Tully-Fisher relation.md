---
layout: default
title: "Tully-Fisher relation"
---

# tully-fisher relation

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md)

## the relation

for spiral (rotation-supported) galaxies, the asymptotic flat-part rotation velocity $V_{\text{flat}}$ correlates tightly with the total luminosity:

$$L \propto V_{\text{flat}}^4$$

equivalently $M_B \approx -10 \log V_{\text{flat}} + \text{const}$. observed scatter is $\sim 0.3$ mag in $M_B$.

## why it exists (the virial argument)

a disk galaxy in centrifugal balance: $V^2 = G M / R$. with surface brightness $\langle I \rangle$ roughly constant across galaxies (Freeman 1970), $L \propto R^2$. so $M \propto V^2 R \propto V^2 L^{1/2}$. with $\Upsilon = M/L$ approximately constant, $L^{1/2} \propto V^2$, i.e. $L \propto V^4$.

the slope of $4$ is not magic; it is the virial scaling combined with constant surface brightness and constant $\Upsilon$. small departures from this (Freeman's law not being universal) introduce the scatter.

## the baryonic tully-fisher

if instead of luminosity you use *baryonic mass* (stars + cold gas), the relation tightens and the slope steepens to $\sim 4$ exactly (McGaugh 2000):

$$M_{\text{bar}} \propto V_{\text{flat}}^{4}$$

with sub-0.1 dex scatter. this is one of the cleanest scaling relations in galaxy physics, and it is often taken as a benchmark for $\Lambda$CDM galaxy formation models (e.g. Vogelsberger TNG 2014).

## what it is used for

1. **distance indicator**: measure $V_{\text{flat}}$ from HI line widths (Tully & Fisher 1977 used radio HI), get $L$ from the relation, compare to apparent magnitude → distance modulus → $H_0$. this gave a competitive $H_0$ throughout the 1990s (Sakai 2000).
2. **galaxy formation diagnostic**: the slope, scatter, and zero-point of TF must be reproduced by simulations.
3. **dynamical mass estimator**: $V_{\text{flat}}^2 R$ at the optical edge gives a halo dynamical mass.

## connections

- ellipticals analogue: [Fundamental plane of ellipticals](../../02_Zettel/Theory/Fundamental plane of ellipticals.md)
- size-luminosity context: [Galaxy size-luminosity relation](../../02_Zettel/Theory/Galaxy size-luminosity relation.md)
- relation to gas/SF: [Schmidt-Kennicutt law](../../02_Zettel/Theory/Schmidt-Kennicutt law.md)

## key references

- Tully & Fisher 1977, A&A 54, 661
- McGaugh 2000 (baryonic TF)
- Sakai et al. 2000 (TF as distance indicator)
