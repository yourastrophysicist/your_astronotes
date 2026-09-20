---
layout: "default"
title: "Macroturbulence"
---
**macroturbulence** is large-scale velocity field in a stellar photosphere, on scales **larger** than the line-forming region. it broadens lines without changing their equivalent width, by smearing the integrated profile over different bulk velocities.

## difference from microturbulence

[[Microturbulence]] acts on scales **smaller** than the line-forming layer; it enters the line-forming process and adds to the Doppler width as if it were extra thermal speed.

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

attributed to large-scale convective motions in the atmosphere, especially in cool stars where convection cells are large. similar to [[Microturbulence]] but at larger scales.

direct imaging of convective patterns (e.g. Betelgeuse with CHARA, or solar granulation) supports the picture.

## see also

- [[Microturbulence]]
- [[Thermal Doppler broadening]]
- [[Rotational broadening]]
- [[Stellar v sin i from line shape]]
- [[Line profile function phi nu]]
- [[Voigt profile]]
- [[Equivalent width]]
- [[Curve of growth]]



## Linked References

- [[Microturbulence]]
- [[Rotational broadening]]
- [[Stellar v sin i from line shape]]
- [[Stellar velocity from Doppler shift]]
- [[Thermal Doppler broadening]]
- [[Velocity dispersion from line width]]
- [[Astronomical_Spectroscopy_MOC]]


