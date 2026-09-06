---
layout: default
name: White dwarf mass-radius relation
description: the inverse relation between mass and radius of degenerate WDs and its physical origin
---

# white dwarf mass-radius relation

unlike normal stars, where bigger mass means bigger radius, white dwarfs obey an **inverse mass-radius relation**: more massive white dwarfs are smaller. this is one of the most distinctive consequences of electron degeneracy support and is essential for converting observed WD parameters (mass from spectroscopy, radius from photometry plus distance) into a consistent picture.

## non-relativistic limit

for non-relativistic degenerate electrons the equation of state is $P \propto \rho^{5/3}$. polytropic structure ($n = 3/2$) gives
$$R \propto M^{-1/3}.$$
qualitatively: doubling the mass squeezes the WD by a factor $2^{1/3} \approx 1.26$, raising the central density and the typical electron Fermi momentum. typical numbers: a $0.6\,M_\odot$ WD has $R \approx 0.012\,R_\odot$, while a $1.0\,M_\odot$ WD has $R \approx 0.008\,R_\odot$.

## relativistic correction and the Chandrasekhar limit

as the mass approaches the [Chandrasekhar mass limit](../../02_Zettel/Theory/Chandrasekhar mass limit.md) $M_{\rm Ch} \approx 1.44\,M_\odot$, the electrons in the core become ultra-relativistic and the equation of state softens to $P \propto \rho^{4/3}$. the radius drops more steeply than $M^{-1/3}$ and goes to zero as $M \to M_{\rm Ch}$. so the full $R(M)$ curve has the form:

- $R \propto M^{-1/3}$ at low mass,
- $R \to 0$ at $M = M_{\rm Ch}$.

this divergence is what enforces the upper-mass cutoff: there is simply no equilibrium configuration above $M_{\rm Ch}$.

## composition dependence

the prefactor in the mass-radius relation depends on the mean molecular weight per electron, $\mu_e$:
$$R \propto \mu_e^{-5/3}\,M^{-1/3}\quad\text{(NR limit)}.$$
for fully ionised material, $\mu_e \approx A/Z \approx 2$ for both He and C-O and O-Ne-Mg. so He, CO, and ONeMg WDs lie close to the same curve. the curve is nearly independent of metallicity of the progenitor. this is one reason the [White dwarf cooling theory](../../02_Zettel/Theory/White dwarf cooling theory.md) gives ages that don't suffer from the same age-metallicity degeneracy as the main-sequence turnoff.

## observational verification

the M-R relation is tested directly using:

- **eclipsing double-WD binaries**, where masses come from radial velocities and radii from light curves.
- **astrometric WDs in binaries** like Sirius B and Procyon B (visible at the bottom of HR diagrams, see ![L06_p11_white_dwarf_HRD-11](../../assets/images/L06_p11_white_dwarf_HRD-11.png)).
- **gravitational redshifts** of WD spectral lines: $\Delta v \propto GM/R c$ depends on the ratio $M/R$.

modern Gaia parallaxes plus spectroscopic gravities now test the M-R relation to high precision and have firmed up the relation across the full WD mass range.

## why it matters

- it sets the [Chandrasekhar mass limit](../../02_Zettel/Theory/Chandrasekhar mass limit.md) as a structural limit.
- it determines the surface gravity, $\log g \sim 8$, which broadens spectral lines hugely and underpins [Spectroscopic determination of log g](../../02_Zettel/Theory/Spectroscopic determination of log g.md) for WDs.
- it links measured cooling-sequence luminosity to the WD mass, which is what makes the WD cooling sequence a clean chronometer (see [Age dating from the WD luminosity function](../../02_Zettel/Theory/Age dating from the WD luminosity function.md)).

## see also
- [Chandrasekhar mass limit](../../02_Zettel/Theory/Chandrasekhar mass limit.md)
- [White dwarf overview](../../02_Zettel/Theory/White dwarf overview.md)
- [White dwarf types He CO ONeMg](../../02_Zettel/Theory/White dwarf types He CO ONeMg.md)
- [White dwarf cooling theory](../../02_Zettel/Theory/White dwarf cooling theory.md)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
