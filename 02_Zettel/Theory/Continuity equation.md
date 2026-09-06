---
layout: default
title: "Continuity equation"
---

the **cosmological continuity equation** governs how the energy density of cosmic fluids evolves with the expansion. follows from stress-energy conservation $\nabla^\mu T_{\mu\nu} = 0$ applied to FLRW.

## the equation

for a perfect fluid in FLRW:
$$\boxed{\, \dot\rho + 3H(\rho + p) = 0 \,}$$

with $H = \dot a/a$. in words: the energy density's time evolution is governed by both **dilution due to volume expansion** ($-3H\rho$) and **work done against the surroundings** ($-3Hp$).

equivalent forms:
$$\frac{d}{dt}(\rho a^3) = -p\,\frac{d}{dt}(a^3)$$
$$\frac{dE}{dV} = -p\,\frac{dV}{V}$$

so this is the **first law of thermodynamics** for an adiabatic fluid in an expanding volume: $dE = -p\,dV$.

## the derivation from stress-energy conservation

$\nabla^\mu T_{\mu\nu} = 0$ for a perfect fluid $T^{\mu\nu} = (\rho + p)u^\mu u^\nu + p g^{\mu\nu}$ in FLRW. the $\nu = 0$ component gives:
$$\dot \rho + 3H(\rho + p) = 0$$

(after using $u^\mu = (1, 0, 0, 0)$ for comoving observers and computing the relevant Christoffels.)

## with equation of state $p = w\rho$

assume $p = w\rho$ with $w$ constant. then:
$$\dot\rho + 3H\rho(1 + w) = 0 \quad\Rightarrow\quad \frac{\dot\rho}{\rho} = -3(1 + w)\frac{\dot a}{a}$$

integrate:
$$\boxed{\, \rho \propto a^{-3(1+w)} \,}$$

three canonical cases:
- **matter** ($w = 0$): $\rho_m \propto a^{-3}$. just from volume expansion.
- **radiation** ($w = 1/3$): $\rho_r \propto a^{-4}$. volume + redshift of photon energies.
- **dark energy** ($w = -1$): $\rho_\Lambda = $ const. constant energy density.

see [Equation of state and density scaling](../../02_Zettel/Theory/Equation of state and density scaling.html).

## consistency with Friedmann + acceleration

the contracted Bianchi identity ensures that **only two** of the three equations (Friedmann, acceleration, continuity) are independent. you can use any two; the third is automatic.

physically: stress-energy conservation is **not** an additional dynamical input; it's required by Einstein's equation's mathematical consistency. so "matter must satisfy continuity" is a theorem of GR, not an external assumption.

## the special case: dark energy

for $w = -1$ (cosmological constant):
$\dot\rho + 3H(\rho - \rho) = 0 \quad\Rightarrow\quad \dot\rho = 0$, $\rho = $ const.

so dark energy density doesn't dilute. as the universe expands, dark energy "fills" the new space, maintaining constant density. this is the **vacuum energy** interpretation of $\Lambda$.

## conservation of multiple species

each species (photons, baryons, dark matter, dark energy) **separately** satisfies continuity, as long as they don't exchange energy with each other. for matter + radiation:
$$\rho_m \propto a^{-3}, \quad \rho_r \propto a^{-4}$$

so radiation dilutes faster than matter, leading to **matter-radiation equality** at $a_{\rm eq} \sim 1/3400$. see [Matter radiation equality](../../02_Zettel/Theory/Matter radiation equality.html).

species exchanges (e.g. $e^+$ annihilation transferring energy from $e^\pm$ to photons + neutrinos) need to be tracked carefully.

## see also

- [Friedmann equations](../../02_Zettel/Theory/Friedmann equations.html)
- [Equation of state and density scaling](../../02_Zettel/Theory/Equation of state and density scaling.html)
- [Cosmic eras](../../02_Zettel/Theory/Cosmic eras.html)
- [Matter radiation equality](../../02_Zettel/Theory/Matter radiation equality.html)
- [Stress-energy tensor](../../02_Zettel/Theory/Stress-energy tensor.html)
- [FLRW metric](../../02_Zettel/Theory/FLRW metric.html)
- [Cosmological constant](../../02_Zettel/Theory/Cosmological constant.html)
- Q18 - derive the acceleration equation
- Q19 - radiation universe
- Q20 - matter plus radiation universe
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.html)
- [Ch 7 - Cosmology](../../01_Literature/Book/Baumann GR/Ch 7 - Cosmology.html)
