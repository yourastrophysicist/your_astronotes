---
layout: "default"
title: "Limb darkening"
---
{% raw %}
the apparent brightness of a star **decreases from centre to limb**. consequence of the Eddington-Barbier rule combined with a temperature gradient in the photosphere.

## the geometry

at the centre of a stellar disk, line of sight is normal to the surface, $\mu = \cos\theta = 1$. the layer at $\tau = 1$ is at full geometric depth, where $T$ is highest. emergent intensity is high.

at the limb, line of sight is grazing, $\mu \to 0$. the layer at $\tau = 1$ is at a **shallower** geometric depth, where $T$ is lower. emergent intensity is lower.

so the centre is brighter than the limb. for the Sun in V-band, the limb is $\sim 60\%$ as bright as the centre.

## the linear law

a simple parameterisation:
$$\frac{I_\nu(\mu)}{I_\nu(1)} = 1 - u(1 - \mu)$$
or equivalently $I(\mu)/I(1) = 1 - u + u\mu$.

with $u$ the **linear limb-darkening coefficient**, between $0$ (no darkening) and $1$ (full darkening to zero at limb).

typical $u$ values:
- Sun, U-band: $u \approx 0.92$ (blue, very darkened).
- Sun, V-band: $u \approx 0.65$.
- Sun, R-band: $u \approx 0.55$.
- Sun, K-band: $u \approx 0.30$.

so limb darkening is **stronger in the blue** because the source function is steeper at higher Wien-side frequencies.

## quadratic and higher-order laws

the linear law is approximate. for high-precision work (transit photometry, interferometry), use:
- **quadratic**: $I(\mu)/I(1) = 1 - u_1(1-\mu) - u_2(1-\mu)^2$.
- **square root**: $I(\mu)/I(1) = 1 - c_1(1-\mu) - c_2(1-\sqrt\mu)$.
- **Claret 4-parameter**: even more flexible.

tabulated coefficients exist for grids of $T_{\rm eff}$, $\log g$, and metallicity (Claret, Sing, etc.).

## why limb darkening matters

### transit photometry

an exoplanet transiting its host star occults different parts of the limb darkening profile during ingress, transit centre, and egress. the **light curve shape** depends on limb darkening, and accurate $u$ values are needed to fit the planet radius. typical $\sim 1\%$ effect on derived $R_p/R_\star$.

### interferometric stellar diameters

interferometric measurements of stellar angular diameters depend on the limb-darkening law. uniform-disk model gives one diameter; limb-darkened model gives a slightly larger one. modern instruments (CHARA, VLTI) include limb-darkening corrections at the $1\%$ level.

### eclipsing binaries

precise stellar masses and radii from EBs need limb-darkening for the light-curve fit.

### stellar imaging

direct imaging of stellar surfaces (TRAPPIST imaging, VLT/AMBER on Betelgeuse) shows limb darkening directly: a smooth gradient from disk centre to edge.

## inversion: probing $T(\tau)$

since $I(\mu) = S(\tau = \mu)$ at LTE, observing $I(\mu)$ vs $\mu$ at multiple wavelengths lets you **reconstruct $S(\tau)$ throughout the photosphere**. this is how solar atmospheric models were calibrated.

high-resolution full-disk solar spectra at multiple $\mu$ are routinely used for solar abundances; the same technique is being applied to interferometrically resolved bright stars.

## in cool giants and supergiants

in extended atmospheres (Betelgeuse, R Doradus), the plane-parallel approximation fails. the limb is **brighter** than expected near the limb because the line of sight stays in cool dust-forming layers longer; sometimes "limb brightening" is observed.

## see also

- [Eddington-Barbier approximation](./Eddington-Barbier%20approximation.html)
- [Optical depth](./Optical%20depth.html)
- [Source function](./Source%20function.html)
- [Stellar atmosphere structure](./Stellar%20atmosphere%20structure.html)
- [Equation of radiative transfer](./Equation%20of%20radiative%20transfer.html)
- [Bolometric correction and effective temperature](./Bolometric%20correction%20and%20effective%20temperature.html)
- [Type Ia supernovae as standard candles](./Type%20Ia%20supernovae%20as%20standard%20candles.html) — uses transit-like analysis
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Eddington-Barbier%20approximation.html" class="backlink-item">Eddington-Barbier approximation</a></li>
    <li class="backlink-item-wrap"><a href="./Equation%20of%20radiative%20transfer.html" class="backlink-item">Equation of radiative transfer</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20atmosphere%20structure.html" class="backlink-item">Stellar atmosphere structure</a></li>
  </ul>
</div>
