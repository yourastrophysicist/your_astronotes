---
layout: "default"
title: "Stellar scaling relations"
---
a star is a self-gravitating sphere of hot plasma held in long-term structural equilibrium by a delicate balance between inward gravitational force and outward thermal and radiation pressure gradients.

![stellar-01.png](../../assets/images/stellar-01.png)

![stellar-02.png](../../assets/images/stellar-02.png)

---

## fundamental stellar parameters

four fundamental macroscopic parameters completely characterize a non-rotating, single star:
1. **Mass** $M$: the master parameter governing stellar structure, luminosity, core conditions, and ultimate evolutionary fate.
2. **Radius** $R$: physical size, varying from $R \sim 0.01 R_\odot$ (white dwarfs) to $R \sim 1 R_\odot$ (Sun) to $R > 1000 R_\odot$ (red supergiants like Betelgeuse).
3. **Luminosity** $L$: total energy radiated into space per unit time ($L_\odot \approx 3.828 \times 10^{26}$ W).
4. **Effective Temperature** $T_{\text{eff}}$: surface temperature defined by the Stefan-Boltzmann law.

![stellar-03.png](../../assets/images/stellar-03.png)

---

## the Stefan-Boltzmann connection: $L = 4\pi R^2 \sigma T_{\text{eff}}^4$

relating the four parameters:
$$\boxed{\, L = 4\pi R^2 \sigma T_{\text{eff}}^4 \,}$$

normalizing to solar units ($R_\odot \approx 6.96 \times 10^8$ m, $T_{\text{eff},\odot} \approx 5778$ K):
$$\frac{L}{L_\odot} = \left(\frac{R}{R_\odot}\right)^2 \left(\frac{T_{\text{eff}}}{T_{\text{eff},\odot}}\right)^4$$

consequence: if any two quantities of $(L, R, T_{\text{eff}})$ are known (e.g. $L$ from distance modulus and flux, $T_{\text{eff}}$ from spectral type or color index), the stellar radius $R$ is uniquely determined.

![stellar-04.png](../../assets/images/stellar-04.png)

![stellar-05.png](../../assets/images/stellar-05.png)

![stellar-06.png](../../assets/images/stellar-06.png)

---

## the Mass-Luminosity relation on the Main Sequence

for stars burning hydrogen on the main sequence, observational measurements of detached, double-lined eclipsing binary stars establish a tight empirical and theoretical power-law relation:
$$\boxed{\, L \propto M^\alpha \,}$$

where the exponent $\alpha$ depends on the stellar mass range:
- for intermediate-mass stars ($2 M_\odot \lesssim M \lesssim 20 M_\odot$): $\alpha \approx 3.5 - 4.0$:
  $$\frac{L}{L_\odot} \approx \left(\frac{M}{M_\odot}\right)^{3.5}$$
- for low-mass stars ($0.43 M_\odot < M < 2 M_\odot$): $\alpha \approx 4.0$.
- for very massive stars ($M > 20 M_\odot$): radiation pressure becomes significant in the core, flattening the relation toward $L \propto M^1$ (the Eddington limit).

![stellar-07.png](../../assets/images/stellar-07.png)

### profound consequences of the steep mass-luminosity relation:
1. **extreme brightness contrast**: a $10 M_\odot$ B-star has $L \approx 10^{3.5} L_\odot \approx 3160 L_\odot$. a $50 M_\odot$ O-star has $L > 10^5 L_\odot$. conversely, an $0.1 M_\odot$ M-dwarf has $L \approx 10^{-3.5} L_\odot \approx 3 \times 10^{-4} L_\odot$.
2. **stellar lifetimes**: because the nuclear fuel available is proportional to mass $M$, the main sequence lifetime scales as:
   $$t_{\text{MS}} \propto \frac{\text{Fuel}}{\text{Consumption Rate}} = \frac{M}{L} \propto \frac{M}{M^{3.5}} = M^{-2.5}$$
   massive stars burn through their hydrogen reserves at a prodigal rate and die in millions of years, while low-mass stars live for trillions of years!

---

## see also

- [[Fundamentals_Astrophysics_Cosmology_MOC]]
- [[HR diagram]]
- [[Main sequence, giants, supergiants, white dwarfs]]
- [[Stellar structure equations]]
- [[Stellar evolution timescales]]

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_stars-025.png](../../assets/images/obs_stars-025.png)
*Homology scaling relations from fundamental equations of stellar structure.*

![obs_stars-026.png](../../assets/images/obs_stars-026.png)
*Hydrostatic equilibrium scaling: central pressure P_c proportional to M^2 / R^4.*

![obs_stars-027.png](../../assets/images/obs_stars-027.png)
*Ideal gas law scaling: central temperature T_c proportional to M / R.*

![obs_stars-028.png](../../assets/images/obs_stars-028.png)
*Radiative transport scaling with Kramers opacity: L proportional to M^5.5 R^(-0.5).*

![obs_stars-029.png](../../assets/images/obs_stars-029.png)
*Radiative transport scaling with electron scattering opacity: L proportional to M^3.*

![obs_stars-030.png](../../assets/images/obs_stars-030.png)
*Observed Mass-Luminosity relation: L proportional to M^3.5 for intermediate-mass stars.*



## Linked References

- [[Binary star evolution and mass transfer]]
- [[Bolometric correction and effective temperature]]
- [[Cluster ages from CMD turnoff]]
- [[HR diagram]]
- [[Main sequence, giants, supergiants, white dwarfs]]
- [[Mass-luminosity relation]]
- [[Planck law Wien Stefan-Boltzmann]]
- [[Pre-main sequence evolution and protostars]]
- [[Radiative transport]]
- [[Stellar evolution timescales]]
- [[Stellar spectra and spectral classification]]
- [[Stellar structure equations]]
- [[Why hot massive stars dominate luminosity]]
- [[Fundamentals_Astrophysics_Cosmology_MOC]]
- [[Observational_Astrophysics_MOC]]


