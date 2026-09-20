---
layout: "default"
title: "Exoplanet atmospheric scale height and transmission spectroscopy"
---
transmission spectroscopy probes the composition and temperature structure of an exoplanet's atmosphere during primary transit, as stellar light filters through the thin annulus of gas surrounding the planet's terminator.

## the atmospheric scale height

for an isothermal atmosphere in hydrostatic equilibrium ($dp/dz = -\rho g = -\frac{\mu m_p p}{k_B T} g$), the atmospheric density and pressure decay exponentially with altitude $z$:

$$p(z) = p_0 \exp\left( -\frac{z}{H} \right)$$

where the **atmospheric scale height** $H$ is:

$$H = \frac{k_B T_{\text{eq}}}{\mu g_p} = \frac{k_B T_{\text{eq}} R_p^2}{\mu G M_p}$$

- $T_{\text{eq}} = T_\star \sqrt{\frac{R_\star}{2a}} (1 - A_B)^{1/4}$ is the planetary equilibrium temperature.
- $\mu$ is the mean molecular weight ($\mu \approx 2.3$ for $\text{H}_2/\text{He}$ gas giants; $\mu \approx 18 - 44$ for water- or $\text{CO}_2$-rich secondary atmospheres).

## transmission transit depth variation

at wavelengths corresponding to molecular absorption lines (e.g. $\text{H}_2\text{O}, \text{CO}_2, \text{CH}_4, \text{CO}, \text{Na}, \text{K}$), the opacity $\kappa_\lambda$ increases, causing the slant optical depth $\tau_\lambda = \int \kappa_\lambda \rho \, ds = 1$ to occur at higher altitudes in the atmosphere.
the apparent planetary radius expands by an altitude $\Delta z_\lambda \sim N H$ (where $N \approx 5$ scale heights):

$$\Delta \delta(\lambda) = \left( \frac{R_p + N H}{R_\star} \right)^2 - \left( \frac{R_p}{R_\star} \right)^2 \approx \frac{2 R_p N H}{R_\star^2}$$

the spectral modulation amplitude is proportional to the scale height:

$$\Delta \delta(\lambda) \propto \frac{R_p T_{\text{eq}}}{\mu M_p R_\star^2}$$

### observational implications
- hot, low-density gas giants around small host stars (hot Jupiters like HD 209458b, WASP-39b) yield the largest transmission signals ($\Delta \delta \sim 100 - 500\text{ ppm}$).
- high-mean-molecular-weight secondary atmospheres on terrestrial planets ($\mu \sim 30$) compress scale heights by an order of magnitude, producing signals of $\sim 10 - 20\text{ ppm}$ requiring JWST and the upcoming Ariel space mission.

## see also

- [[Exoplanetary_Astrophysics_MOC]]
- [[20_Exoplanet_Atmospheres_and_Transmission_Spectroscopy]]
- [[Atmospheric radiative transfer equation and Voigt profile]]
- [[Exoplanet atmospheric retrieval and TauREx framework]]
- [[Mandel-Agol analytical transit light curve model]]



## Linked References

- [[Atmospheric radiative transfer equation and Voigt profile]]
- [[Exoplanet atmospheric retrieval and TauREx framework]]
- [[Small exoplanets and the Fulton radius valley]]
- [[Exoplanetary_Astrophysics_MOC]]


