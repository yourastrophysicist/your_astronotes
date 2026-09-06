---
layout: default
title: "Newtonian derivation of Friedmann"
---

a **Newtonian-only argument** that gives the same Friedmann equation as full GR. uses a uniform self-gravitating sphere + energy conservation. the standard pedagogical introduction. companion: [Newtonian Friedmann derivation](../../02_Zettel/Theory/Newtonian Friedmann derivation.md) for the explicit physics.

## the setup

consider a homogeneous + isotropic universe. by the cosmological principle, every point sees the same expansion. pick a comoving sphere of radius $R(t) = a(t)\,r_0$ centred on us. mass enclosed:
$$M = \frac{4\pi}{3}\rho(t)\,R^3(t)$$

a test particle of mass $m$ at the surface feels gravitational attraction from the enclosed mass (Birkhoff theorem in Newton: shells outside contribute nothing).

## energy conservation

write the kinetic + potential energy of the test particle:
$$E = \frac{1}{2}m\dot R^2 - \frac{GMm}{R}$$

substituting $M = (4\pi/3)\rho R^3$:
$$E = \frac{1}{2}m\dot R^2 - \frac{4\pi}{3}G\rho R^2 m$$

## divide by $\frac{1}{2}m R^2$

$$\frac{\dot R^2}{R^2} = \frac{8\pi G}{3}\rho + \frac{2E}{mR^2}$$

substituting $R = a\,r_0$ + identifying the constant $-2E/(mr_0^2) = kc^2$:
$$\boxed{\, \left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2} \,}$$

the **Friedmann equation**. derived without GR, using only Newton + the cosmological principle.

## the constant $k$

the integration constant $E$ becomes the **spatial curvature parameter** $k$:
- $E < 0$ ($k > 0$): bound system, will eventually recollapse. closed universe.
- $E = 0$ ($k = 0$): marginally bound. flat universe.
- $E > 0$ ($k < 0$): unbound, expands forever. open universe.

so the energy of a test particle in a comoving frame **is** the curvature of the universe, in the Newtonian picture.

## what the Newtonian derivation gets right

- the **Friedmann equation form**: $H^2 \propto \rho - k/a^2$.
- **density evolution** $\rho \propto a^{-3}$ for matter.
- **expansion dynamics**: $a(t) \propto t^{2/3}$ for matter, $t^{1/2}$ for radiation in flat universes.
- **critical density** $\rho_c = 3H_0^2/(8\pi G)$ as the marginal value separating bound / unbound.

## what the Newtonian derivation gets wrong

- **pressure**: doesn't appear in the Newtonian derivation (mass is the only source). but in GR, pressure also gravitates: $\rho + 3p$ in the acceleration equation. so radiation ($p = \rho/3$) decelerates more strongly than the Newtonian expectation.
- **cosmological constant $\Lambda$**: needs to be added by hand in Newton, with no clear physical interpretation. in GR it's a natural conserved tensor.
- **light bending + redshift**: needs GR.

## the conceptual punchline

the Friedmann equation is **Newtonian energy conservation in disguise**. the spatial curvature parameter $k$ is just the Newtonian energy of a comoving test particle. this is one of the most surprising connections between GR + Newtonian gravity.

historically: Friedmann (1922) derived these equations from GR. McCrea + Milne (1934) showed the Newtonian shortcut. modern cosmology textbooks usually start with the Newtonian version + then upgrade to GR for pressure + lensing.

## see also

- [Newtonian Friedmann derivation](../../02_Zettel/Theory/Newtonian Friedmann derivation.md)
- [Friedmann equations](../../02_Zettel/Theory/Friedmann equations.md)
- Friedmann equations with Λ
- [Friedmann models](../../02_Zettel/Theory/Friedmann models.md)
- [Spatial curvature parameter k](../../02_Zettel/Theory/Spatial curvature parameter k.md)
- [Cosmological principle](../../02_Zettel/Theory/Cosmological principle.md)
- [Density parameters](../../02_Zettel/Theory/Density parameters.md)
- Q18 - derive the acceleration equation
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.md)
