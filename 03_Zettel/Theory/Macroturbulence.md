---
layout: "default"
title: "Macroturbulence"
---
**macroturbulence** is large-scale velocity field in a stellar photosphere, on scales **larger** than the line-forming region. it broadens lines without changing their equivalent width, by smearing the integrated profile over different bulk velocities.

## difference from microturbulence

[Microturbulence](Microturbulence.html) acts on scales **smaller** than the line-forming layer; it enters the line-forming process and adds to the Doppler width as if it were extra thermal speed.

macroturbulence acts on scales **larger** than the line-forming layer; different patches of the surface have different bulk velocities, but each patch's local line is essentially the same Voigt profile. summing across patches just **convolves** the disk-integrated line with a velocity distribution.

## the convolution

macroturbulence is modelled as a Gaussian (or radial-tangential) velocity profile:
$$\phi_{\rm macro}(v) \propto e^{-v^2/v_{\rm macro}^2}$$

the disk-integrated line shape is then:
$$\Phi(\lambda) = \phi_{\rm intrinsic}(\lambda) * \phi_{\rm macro}(\lambda)$$

since convolution **conserves the integral**, $W$ is unchanged. only the line shape (broader, shallower) differs.

## typical values

at fixed $T_{\rm eff}$, $v_{\rm macro}$ depends on luminosity:
|stellar type | $v_{\rm macro}$ (km/s) |
|---|---|
| dwarfs | $\sim 1$ to $4$ |
| F-G giants | $\sim 5$ to $10$ |
| K-M giants | $\sim 10$ to $20$ |
| supergiants | $\sim 20$ to $30+$ |

so giants have larger macroturbulence, consistent with larger convective cells (granules) on their surfaces.

## the macroturbulence-rotation degeneracy

both macroturbulence and **rotational broadening** ($v\sin i$) widen lines without changing $W$. they have **slightly different shapes** (macro is Gaussian-like, rotation has a characteristic two-horned profile from limb-bright disk integration).

at low resolution they are degenerate. at high resolution ($R \gtrsim 30\,000$), the rotational profile's distinctive shape can be separated from macroturbulence, but in practice modern fits use both as free parameters.

## physical origin

attributed to large-scale convective motions in the atmosphere, especially in cool stars where convection cells are large. similar to [Microturbulence](Microturbulence.html) but at larger scales.

direct imaging of convective patterns (e.g. Betelgeuse with CHARA, or solar granulation) supports the picture.

## see also

- [Microturbulence](Microturbulence.html)
- [Thermal Doppler broadening](Thermal%20Doppler%20broadening.html)
- [Rotational broadening](Rotational%20broadening.html)
- [Stellar v sin i from line shape](Stellar%20v%20sin%20i%20from%20line%20shape.html)
- [Line profile function phi nu](Line%20profile%20function%20phi%20nu.html)
- [Voigt profile](Voigt%20profile.html)
- [Equivalent width](Equivalent%20width.html)
- [Curve of growth](Curve%20of%20growth.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Microturbulence.html" class="backlink-item">Microturbulence</a></li>
    <li class="backlink-item-wrap"><a href="Rotational%20broadening.html" class="backlink-item">Rotational broadening</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20v%20sin%20i%20from%20line%20shape.html" class="backlink-item">Stellar v sin i from line shape</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20velocity%20from%20Doppler%20shift.html" class="backlink-item">Stellar velocity from Doppler shift</a></li>
    <li class="backlink-item-wrap"><a href="Thermal%20Doppler%20broadening.html" class="backlink-item">Thermal Doppler broadening</a></li>
    <li class="backlink-item-wrap"><a href="Velocity%20dispersion%20from%20line%20width.html" class="backlink-item">Velocity dispersion from line width</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

