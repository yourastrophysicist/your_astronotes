---
layout: default
title: "Cosmic eras"
---

the universe's expansion history divides into three eras based on which fluid dominates the energy density. each era has a characteristic scale-factor evolution $a(t)$.

## the three eras

### radiation era ($z \gtrsim 3400$)
- **dominant fluid**: photons + relativistic neutrinos ($w = 1/3$).
- **density scaling**: $\rho \propto a^{-4}$.
- **Friedmann**: $H^2 \propto a^{-4} \Rightarrow \dot a^2 \propto a^{-2} \Rightarrow a \propto t^{1/2}$.
- **Hubble**: $H = 1/(2t)$.
- **age at end (matter-radiation equality)**: $\sim 50\,000$ years.

physics dominated by radiation pressure. acoustic oscillations of the photon-baryon fluid imprint the CMB acoustic peaks. structure formation is suppressed (Meszaros effect: in radiation era, dark-matter perturbations only grow logarithmically).

### matter era ($0.5 \lesssim z \lesssim 3400$)
- **dominant fluid**: cold dark matter + baryons ($w = 0$).
- **density scaling**: $\rho \propto a^{-3}$.
- **Friedmann**: $H^2 \propto a^{-3} \Rightarrow a \propto t^{2/3}$.
- **Hubble**: $H = 2/(3t)$.
- **age**: from $\sim 50\,000$ yr to $\sim 9$ Gyr.

structure forms efficiently. dark matter perturbations grow as $\delta \propto a$ (linear growth). baryons fall in after recombination. galaxies and clusters form.

### dark energy era ($z \lesssim 0.5$)
- **dominant fluid**: $\Lambda$ ($w = -1$).
- **density scaling**: $\rho_\Lambda = $ const.
- **Friedmann**: $H^2 \to 8\pi G \rho_\Lambda/3 = $ const $\Rightarrow a \propto e^{H_\Lambda t}$.
- **Hubble**: asymptotes to constant $H_\Lambda$.
- **age**: from $\sim 9$ Gyr to today and into the future.

structure formation **slows**: linear growth $\delta \propto a$ no longer holds; structures freeze at fixed scale.

eventually, all unbound structures will be carried beyond the cosmological horizon. only the local group of galaxies will remain visible.

## the scale-factor history

### exact form for matter + radiation

$$a(\tau) = a_{\rm eq}\!\left[\frac{2\sqrt{2}\tau/(\tau + \tau_*)}{}\right]$$

(Mukhanov-style; see Q20 - matter plus radiation universe). expressed in conformal time $\tau$.

### qualitative summary

| era | $\rho$ scaling | $a(t)$ | duration |
|---|---|---|---|
| radiation | $a^{-4}$ | $t^{1/2}$ | $0$ to $50\,000$ yr |
| matter | $a^{-3}$ | $t^{2/3}$ | $50\,000$ yr to $\sim 9$ Gyr |
| $\Lambda$ | const | $e^{Ht}$ | $\sim 9$ Gyr to $\infty$ |

## transitions

### matter-radiation equality
$\rho_m = \rho_r$ at $a_{\rm eq} = \Omega_r/\Omega_m \approx 1/3400$, redshift $z_{\rm eq} \approx 3400$. see [Matter radiation equality](../../02_Zettel/Theory/Matter radiation equality.md).

### matter-$\Lambda$ equality
$\rho_m = \rho_\Lambda$ at $a = (\Omega_m/\Omega_\Lambda)^{1/3} \approx 0.77$, redshift $z \approx 0.3$. (or $0.5$ for the start of acceleration, where $\ddot a > 0$.)

## scale of cosmic ages

| event | $z$ | $t$ |
|---|---|---|
| Big Bang | $\infty$ | $0$ |
| BBN | $\sim 10^9$ | $1$-$10$ minutes |
| matter-radiation equality | $\sim 3400$ | $\sim 50\,000$ yr |
| recombination | $\sim 1100$ | $380\,000$ yr |
| reionisation | $\sim 6$-$10$ | $1$ Gyr |
| galaxy formation peak | $\sim 1$-$3$ | $3$-$5$ Gyr |
| matter-$\Lambda$ equality | $\sim 0.3$ | $\sim 9$ Gyr |
| today | $0$ | $13.8$ Gyr |

## see also

- [Friedmann equations](../../02_Zettel/Theory/Friedmann equations.md)
- [Equation of state and density scaling](../../02_Zettel/Theory/Equation of state and density scaling.md)
- [Continuity equation](../../02_Zettel/Theory/Continuity equation.md)
- [Matter radiation equality](../../02_Zettel/Theory/Matter radiation equality.md)
- [Cosmological constant](../../02_Zettel/Theory/Cosmological constant.md)
- [Hubble constant and deceleration parameter](../../02_Zettel/Theory/Hubble constant and deceleration parameter.md)
- [Cosmic_inventory_overview](../../02_Zettel/Theory/Cosmic_inventory_overview.md)
- [Brief thermal history](../../02_Zettel/Theory/Brief thermal history.md)
- Q19 - radiation universe
- Q20 - matter plus radiation universe
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 7 - Cosmology](../../01_Literature/Book/Baumann GR/Ch 7 - Cosmology.md)
