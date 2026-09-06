---
layout: default
title: "Radiative transport"
---

in the deep interior of a star (or any opaque medium), photons cannot escape directly — they random-walk through the gas, scattered or absorbed by atoms and re-emitted. the net result is a slow diffusive transport of energy from hot regions to cool. this is **radiative transport**.

it is one of the four pillars of [Stellar structure equations](../../02_Zettel/Theory/Stellar structure equations.md).

---

## the diffusion equation

photons in a hot interior have a **mean free path**:
$$\ell = \frac{1}{\kappa\rho}$$

with $\kappa$ the **opacity** (cm$^2$/g) and $\rho$ the gas density.

so a photon takes $N \sim (R/\ell)^2$ scatterings to random-walk from the center to the surface. for the Sun, $\ell \sim 1$ mm in the deep interior, giving a photon diffusion time of $\sim 10^5$ yr.

the resulting heat flux:
$$F = -\frac{c}{3\kappa\rho} \frac{d(a T^4)}{dr}$$

with $a = 7.566 \times 10^{-15}$ erg/cm$^3$/K$^4$ the radiation constant. this is the **diffusion approximation** for radiative transport.

equivalently, the temperature gradient required to carry the flux $L(r)/4\pi r^2$:
$$\boxed{\,\frac{dT}{dr} = -\frac{3\kappa\rho L(r)}{16\pi a c\, r^2 T^3}\,}$$

steep temperature gradient → high luminosity, or high opacity, or low temperature.

---

## opacity

$\kappa$ is the opacity per unit mass (cm$^2$/g). it depends on temperature, density, and composition. major contributions:

### electron scattering
$$\kappa_{\rm es} \approx 0.2 (1 + X)\,\text{cm}^2/\text{g}$$
(with $X$ the hydrogen mass fraction.) dominant in hot stars.

### Kramers absorption
bound-free and free-free absorption by ions:
$$\kappa_{ff} \propto \rho\, T^{-7/2}$$
dominant in cooler stellar interiors (sun-like).

### H$^-$ ion
extra electron attached to a neutral hydrogen atom. dominant in stellar atmospheres of cool stars. critical for the *opacity at the photosphere*, hence for $T_{\rm eff}$.

### bound-bound (line) opacity
huge number of atomic transitions, especially in metal-rich stars. dominant in cool atmospheres.

opacity tables (Opal, OP, ÆSOPUS) tabulate all these contributions for given $T, \rho$, composition. these are used in stellar evolution codes.

---

## convective vs radiative regimes

if the radiative gradient required to carry $L$ exceeds the **adiabatic** gradient (the temperature gradient an adiabatically rising fluid element would have), the medium becomes **convectively unstable** — see [Stellar structure equations](../../02_Zettel/Theory/Stellar structure equations.md).

so radiative transport is only the dominant mechanism where $\nabla_{\rm rad} < \nabla_{\rm ad}$. otherwise convection takes over.

a typical MS star has:
- **radiative core, convective envelope** (low-mass: $M \lesssim 1.3\, M_\odot$)
- **convective core, radiative envelope** (high-mass: $M \gtrsim 1.3\, M_\odot$)
- the Sun: small convective envelope (outer 30%), radiative core

the boundary depends on opacity (which depends on composition and temperature) and on the steepness of the energy generation rate.

---

## why this matters

radiative transport sets the **luminosity** of a star. you can think of it as a "leaky bucket": a star is a heat reservoir, and the rate at which heat leaks out is governed by opacity. higher opacity → harder for photons to escape → higher central temperature → faster nuclear burning → MORE luminosity but also **shorter lifetime**.

---

## the Eddington approximation

for an order-of-magnitude estimate of the photospheric structure, the Eddington approximation assumes that the pressure is dominated by radiation (true in massive stars):
$$P_{\rm rad} = \frac{1}{3}aT^4$$

leading to the famous **Eddington luminosity** — the maximum luminosity at which radiation pressure equals gravity:
$$L_{\rm Edd} = \frac{4\pi G M m_p c}{\sigma_T} \approx 1.3 \times 10^{38}\,(M/M_\odot)\,\text{erg/s}$$

beyond $L_{\rm Edd}$, radiation pressure exceeds gravity and the outer envelope is unstable (mass loss, winds).

→ also limits the luminosity of accreting compact objects (X-ray binaries, AGN) — see [Accretion onto compact objects](../../02_Zettel/Theory/Accretion onto compact objects.md).

---

## radiative transfer in stellar atmospheres

the diffusion approximation breaks down near the photosphere, where photons can escape directly. there, you need to solve the **full radiative transfer equation**:
$$\frac{dI_\nu}{ds} = -\alpha_\nu I_\nu + j_\nu$$

with $\alpha_\nu$ the absorption coefficient and $j_\nu$ the emission coefficient. the solution gives the *spectrum* of the emerging radiation. this is the basis of **stellar atmosphere modeling** — predicting line profiles, equivalent widths, and the detailed shape of the continuum.

modern codes: ATLAS (Kurucz), PHOENIX, TLUSTY, MARCS.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md)
- [Stellar structure equations](../../02_Zettel/Theory/Stellar structure equations.md)
- [Stellar nucleosynthesis](../../02_Zettel/Theory/Stellar nucleosynthesis.md)
- [Main sequence, giants, supergiants, white dwarfs](../../02_Zettel/Theory/Main sequence, giants, supergiants, white dwarfs.md)
- [Stellar scaling relations](../../02_Zettel/Theory/Stellar scaling relations.md)
- [Accretion onto compact objects](../../02_Zettel/Theory/Accretion onto compact objects.md)
