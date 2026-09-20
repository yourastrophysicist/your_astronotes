---
layout: "default"
title: "Interstellar absorption"
---
space between the stars is not empty: it is filled with gas and **interstellar dust grains**. dust particles absorb and scatter stellar photons, causing starlight to appear dimmer (**interstellar extinction**) and redder (**interstellar reddening**). if extinction is not properly accounted for, distances calculated from standard candles will be vastly overestimated.

![radiative-57.png](../../assets/images/radiative-57.png)

---

## interstellar dust grains: composition and physics

interstellar dust constitutes only $\sim 1\%$ of the interstellar medium mass (the remaining $99\%$ is gas), but it dominates optical and ultraviolet opacity.
- **grain size**: typical radii $a \sim 0.01 - 0.25\,\mu$m, comparable to the wavelength of ultraviolet and optical light.
- **composition**: silicates (olivine, pyroxene), carbonaceous grains (graphite, amorphous carbon), polycyclic aromatic hydrocarbons (PAHs), and water/ammonia ice mantles in dense molecular clouds.

![radiative-58.png](../../assets/images/radiative-58.png)

---

## extinction $A_\lambda$ and modified distance modulus

when light travels through a dusty medium of optical depth $\tau_\lambda = \int \kappa_\lambda \rho \, ds$, the observed flux is reduced by $e^{-\tau_\lambda}$:
$$F_\lambda = F_{\lambda,0} \, e^{-\tau_\lambda}$$

in terms of magnitudes:
$$m_\lambda - m_{\lambda,0} = -2.5 \log_{10}\left(e^{-\tau_\lambda}\right) = 2.5 \, \tau_\lambda \log_{10}(e) \approx 1.086 \, \tau_\lambda \equiv A_\lambda$$
where $A_\lambda \ge 0$ is the **extinction in magnitudes** at wavelength $\lambda$.

![radiative-59.png](../../assets/images/radiative-59.png)

### the extinction-corrected distance modulus:
including extinction in the distance equation:
$$m_\lambda = M_\lambda + 5 \log_{10} d - 5 + A_\lambda$$
$$\boxed{\, \mu_{\text{true}} = m_\lambda - M_\lambda - A_\lambda = 5\log_{10} d - 5 \,}$$

**danger for distance measurements**: if extinction is ignored ($A_\lambda = 0$), the inferred distance $d_{\text{inferred}} = 10^{(m - M + 5)/5}$ will be systematically **larger** than the true distance by a factor of $10^{A_\lambda / 5}$. for example, in the Galactic Center where $A_V \approx 30$ mag, optical starlight is dimmed by a factor of $10^{12}$!

![radiative-60.png](../../assets/images/radiative-60.png)

---

## interstellar reddening and color excess $E(B-V)$

because dust grain sizes ($a \sim 0.1\,\mu$m) are comparable to optical wavelengths, scattering obeys **Mie scattering**: shorter (bluer) wavelengths are scattered and absorbed much more strongly than longer (redder) wavelengths:
$$A_B > A_V > A_R > A_I > A_K$$

consequence: light transmitted through dust appears **reddened**, exactly analogous to the reddening of the setting Sun through Earth's atmosphere.

![radiative-61.png](../../assets/images/radiative-61.png)

the **color excess** (reddening) $E(B-V)$ is defined as the difference between the observed color index and the intrinsic unreddened color index:
$$\boxed{\, E(B-V) \equiv (B - V)_{\text{observed}} - (B - V)_0 = A_B - A_V \,}$$
similarly for other bandpasses: $E(U-B) = (U-B)_{\text{obs}} - (U-B)_0 = A_U - A_B$.

![radiative-62.png](../../assets/images/radiative-62.png)

---

## the extinction law and total-to-selective extinction $R_V$

the wavelength dependence of extinction is characterized by the **normalized extinction curve** $A_\lambda / A_V$ plotted against $1/\lambda$:

![radiative-63.png](../../assets/images/radiative-63.png)

### key features of the extinction curve:
1. **steep UV rise**: extinction climbs steeply in the ultraviolet, making UV astronomy exceedingly sensitive to dust.
2. **the $2175$ Å bump**: a prominent absorption feature at $\lambda \approx 2175$ Å ($x = 1/\lambda \approx 4.6\,\mu\text{m}^{-1}$), universally attributed to $\pi \to \pi^*$ electronic transitions in aromatic carbon rings (PAHs and graphite grains).

![radiative-64.png](../../assets/images/radiative-64.png)

### the total-to-selective extinction ratio $R_V$:
astronomers relate the visual extinction $A_V$ to the color excess $E(B-V)$ by the ratio $R_V$:
$$\boxed{\, R_V \equiv \frac{A_V}{E(B-V)} = \frac{A_V}{A_B - A_V} \,}$$

for the diffuse, average interstellar medium of the Milky Way:
$$\boxed{\, R_V \approx 3.1 \,}$$
(in dense, cold molecular clouds where dust grains coagulate and grow larger mantles, $R_V$ increases to $4-5.5$; in low-density sightlines it drops to $\approx 2.5$).

consequence: measuring the color excess $E(B-V)$ immediately gives the visual extinction:
$$A_V = 3.1 \times E(B-V)$$

![radiative-65.png](../../assets/images/radiative-65.png)

---

## infrared transparency

extinction falls dramatically with increasing wavelength:
$$A_J \approx 0.28 \, A_V, \quad A_H \approx 0.18 \, A_V, \quad A_K \approx 0.11 \, A_V$$
in the K-band ($2.2\,\mu$m), extinction is only **one-tenth** of its visual value! this is why infrared observations (2MASS, VLT/NACO, Keck, JWST) can penetrate the dense dust clouds concealing the Galactic Center and young star-forming regions.

![radiative-66.png](../../assets/images/radiative-66.png)

---

## color-color diagrams and the reddening vector

on a two-color diagram (e.g. $U-B$ vs $B-V$), interstellar reddening shifts a star's coordinates along a straight trajectory called the **reddening vector**:
$$\frac{E(U-B)}{E(B-V)} \approx 0.72 + 0.05 \, E(B-V)$$

because the main sequence has a distinctive non-linear curve on the $(U-B)$ vs $(B-V)$ plane, translating an observed star back along the reddening slope allows astronomers to simultaneously determine both its **intrinsic spectral type** and its **extinction $A_V$** without needing prior spectra (**the Q-method**).

![radiative-67.png](../../assets/images/radiative-67.png)

![radiative-68.png](../../assets/images/radiative-68.png)

---

## see also

- [[Fundamentals_Astrophysics_Cosmology_MOC]]
- [[Magnitudes and photometric systems]]
- [[Electromagnetic radiation basics]]
- [[Interstellar medium components and gas cycle]]
- [[Milky Way structure]]
- [[Parallax and standard candles]]

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_rad-081.png](../../assets/images/obs_rad-081.png)
*Barnard 68 molecular cloud: complete optical extinction and NIR transparency.*

![obs_rad-082.png](../../assets/images/obs_rad-082.png)
*Interstellar dust grains: silicate and carbonaceous grains, PAHs.*

![obs_rad-083.png](../../assets/images/obs_rad-083.png)
*Extinction A_lambda and selective extinction / reddening E(B - V) = A_B - A_V.*

![obs_rad-084.png](../../assets/images/obs_rad-084.png)
*Total-to-selective extinction ratio: R_V = A_V / E(B - V) ~ 3.1 in diffuse Milky Way ISM.*

![obs_rad-085.png](../../assets/images/obs_rad-085.png)
*Cardelli, Clayton & Mathis (CCM 1989) extinction law from UV to NIR.*

![obs_rad-086.png](../../assets/images/obs_rad-086.png)
*The 2175 A dust extinction bump (graphite / PAHs).*

![obs_rad-087.png](../../assets/images/obs_rad-087.png)
*Calzetti (2000) starburst attenuation curve for external galaxies.*

![obs_rad-088.png](../../assets/images/obs_rad-088.png)
*Interstellar polarization: alignment of elongated dust grains by Galactic magnetic fields.*

![obs_rad-089.png](../../assets/images/obs_rad-089.png)
*Reddening vectors in color-color diagrams.*

![obs_rad-090.png](../../assets/images/obs_rad-090.png)
*Infrared dust emission: cold dust (15-30 K) and warm dust emitting in FIR.*

![obs_rad-091.png](../../assets/images/obs_rad-091.png)
*Dust-to-gas ratio in the Milky Way and external galaxies.*

![obs_rad-092.png](../../assets/images/obs_rad-092.png)
*Summary of dust extinction corrections in observational astronomy.*



## Linked References

- [[Atmospheric extinction]]
- [[Color indices]]
- [[Distance modulus]]
- [[Dust extinction in nebulae]]
- [[Extinction law and Rv]]
- [[Galactic Center]]
- [[Interstellar medium components and gas cycle]]
- [[Interstellar reddening and the reddening vector]]
- [[Magnitudes and photometric systems]]
- [[Sodium population vs T]]
- [[Spectral energy distributions]]
- [[Fundamentals_Astrophysics_Cosmology_MOC]]
- [[Observational_Astrophysics_MOC]]
- [[Stellar_Astrophysics_MOC]]


