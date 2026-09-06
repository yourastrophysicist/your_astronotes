---
layout: default
title: "Cosmological redshift"
---

photons emitted at a past cosmic time arrive today **stretched** by the cosmic expansion. the **cosmological redshift** is the wavelength stretch factor:
$$1 + z = a(t_0)/a(t_e)$$

with $a(t_e)$ the scale factor at emission and $a(t_0)$ today.

## the formula

$$\boxed{\, \frac{\lambda_{\rm obs}}{\lambda_{\rm emit}} = 1 + z = \frac{a(t_0)}{a(t_e)} = \frac{1}{a(t_e)} \,}$$

(using the convention $a(t_0) = 1$.)

so a photon emitted at $z = 1$ has its wavelength doubled by today; emitted at $z = 4$, increased by factor $5$.

## the derivation

a null geodesic in FLRW: $ds^2 = -dt^2 + a^2(t)\gamma_{ij}\,dx^i\,dx^j = 0$. for a radial photon:
$$\frac{dr}{dt} = \frac{1}{a(t)}$$

(in flat $k = 0$ slice, ignoring $\sqrt{1 - kr^2}$ for simplicity).

two successive wave fronts separated by $\Delta t_e$ at emission travel along null geodesics with the same comoving distance:
$$r = \int_{t_e}^{t_0}\frac{dt}{a(t)} = \int_{t_e + \Delta t_e}^{t_0 + \Delta t_o}\frac{dt}{a(t)}$$

implying:
$$\frac{\Delta t_o}{a(t_o)} = \frac{\Delta t_e}{a(t_e)}$$

so $\Delta t_o/\Delta t_e = a(t_o)/a(t_e) = 1 + z$.

since wave period $\Delta t = 1/\nu = \lambda/c$:
$$\lambda_o/\lambda_e = a(t_o)/a(t_e) = 1 + z$$

## not a Doppler effect

cosmological redshift is **not** a true Doppler shift (which arises from relative motion in flat spacetime). it's the **stretching of spacetime itself** that the photon traverses.

at low $z$ ($v \ll c$), the cosmological-redshift formula reduces to the Doppler $z \approx v/c$, which is why people often call it "recession velocity." but at $z \gtrsim 1$, "$v = cz$" gives unphysical $v > c$. the proper relation is $1 + z = a_0/a_e$, with no velocity interpretation.

## consequence: photons lose energy

with $\nu = c/\lambda$:
$$\nu_o = \nu_e/(1 + z)$$

so each photon loses a fraction $z/(1+z)$ of its energy by the time it reaches us. this is why **radiation density** scales as $a^{-4}$:
- $a^{-3}$ from volume dilution.
- $a^{-1}$ from energy redshift.

## the implications

every observed wavelength tells me about the universe's scale factor at emission:
- **CMB photons** observed at $\lambda_{\rm obs} \sim 1$ mm were emitted at $\lambda_{\rm emit} \sim 1\,\mu$m at $z = 1100$, $a = 1/1100$. the bath was hot ($T = 3000$ K, in the visible).
- **Lyman-α photons** from $z = 6$ galaxies: emitted at $1216$ Å, observed at $\sim 8500$ Å. shifted into the optical.
- **CO molecular line** at $115$ GHz from $z = 6$: shifted to $16$ GHz, observable by SKA.

## practical use

once you measure $z$ from a spectrum (line shifts), you know:
- **scale factor at emission**: $a(z) = 1/(1+z)$.
- **CMB temperature at emission**: $T(z) = T_0(1+z) = 2.725(1+z)$ K.
- **photon energy density at emission**: $\rho_\gamma(z) = \rho_{\gamma, 0}(1+z)^4$.
- **comoving distance**: $d_C(z) = c\int_0^z dz'/H(z')$ (depends on cosmology).

so a single number $z$ is the **time stamp** of cosmological observations.

## see also

- [Hubble's law and cosmological redshift](../../02_Zettel/Theory/Hubble's law and cosmological redshift.md)
- [Hubble law](../../02_Zettel/Theory/Hubble law.md)
- [FLRW metric](../../02_Zettel/Theory/FLRW metric.md)
- [Comoving vs proper coordinates](../../02_Zettel/Theory/Comoving vs proper coordinates.md)
- 03_Zettel/Theory/Cosmological distances
- [Radial comoving distance](../../02_Zettel/Theory/Radial comoving distance.md)
- [Spectroscopic redshift from line shifts](../../02_Zettel/Theory/Spectroscopic redshift from line shifts.md)
- [Time-redshift relation](../../02_Zettel/Theory/Time-redshift relation.md)
- [Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.md)
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.md)
