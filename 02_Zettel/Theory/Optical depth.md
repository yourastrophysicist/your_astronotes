---
layout: default
title: "Optical depth"
---

the **optical depth** is the dimensionless measure of how much light is absorbed (or scattered) along a path. central to every problem in radiative transfer.

## the definition

along a path from $s_1$ to $s_2$ at frequency $\nu$:
$$\tau_\nu = \int_{s_1}^{s_2} \kappa_\nu(s)\,ds$$

with $\kappa_\nu$ the absorption coefficient (cm$^{-1}$). units: dimensionless.

equivalent forms:
- $d\tau = \kappa\,ds$ (differential).
- $\tau = \kappa\,L$ for uniform medium of length $L$.
- $\tau = \int n\sigma\,ds$ where $n$ is the density of absorbers and $\sigma$ is their cross section.

## physical interpretation

$\tau$ is the **average number of mean free paths** along the line of sight. equivalently, $1/\kappa$ is the photon mean free path; $\tau = $ (path) / (mean free path).

probability that a photon travels a distance $\ge s$ without absorption:
$$P(s) = e^{-\kappa s} = e^{-\tau(s)}$$

so:
- $\tau \ll 1$: optically thin, photons pass freely.
- $\tau \sim 1$: borderline.
- $\tau \gg 1$: optically thick, photons absorbed.

## $\tau$ in two regimes

### atmosphere of a star

depth into the photosphere is parameterised by $\tau$. observers see the layer at $\tau = 1$ ([Eddington-Barbier approximation](../../02_Zettel/Theory/Eddington-Barbier approximation.html)). the surface ($\tau = 0$) is conventionally the top of the atmosphere where light escapes to vacuum.

the **photospheric temperature** $T_{\rm eff}$ is defined as $T(\tau = 2/3)$ (a Rosseland-mean-weighted definition). the photosphere thus has a $T$-vs-$\tau$ profile.

### nebular cloud

an HII region or molecular cloud has $\tau$ measured from the front face along the line of sight. for hydrogen ionisation: optical depth in the Lyman continuum determines whether ionising photons reach a given depth, setting the Strömgren sphere boundary (Strömgren sphere).

## $\tau$ in spectral lines

at a line center, $\kappa_\nu$ is much larger than in the continuum, so $\tau_{\rm line}$ at a given physical depth is much larger than $\tau_{\rm cont}$. consequence: the line "samples" a higher (cooler) layer of the atmosphere, hence appears in absorption.

curve of growth tracks how $W$ (equivalent width) grows with column density $N$:
- linear regime ($\tau_0 \ll 1$): $W \propto N$.
- saturation ($\tau_0 \sim 1$): $W \propto \sqrt{\ln N}$.
- damping wing regime ($\tau_0 \gg 1$): $W \propto \sqrt{N}$.

see [Curve of growth](../../02_Zettel/Theory/Curve of growth.html).

## $\tau$ and column density

for a non-resonance transition with line cross section $\sigma_\nu$:
$$\tau_\nu = N \sigma_\nu = N\,\frac{\pi e^2}{m_e c}\,f_{lu}\,\phi(\nu)$$
where $N$ is the column density of absorbers (cm$^{-2}$), $f_{lu}$ is the oscillator strength, and $\phi(\nu)$ is the line profile.

at line center ($\phi(\nu_0) \approx 1/\Delta\nu_D$ for a Doppler profile), $\tau_0 = N\,\pi e^2 f_{lu}/(m_e c \Delta\nu_D)$.

## $\tau$ at different wavelengths

opacity sources differ by wavelength:
- **bound-bound**: line opacity, narrow in $\nu$.
- **bound-free**: ionisation, sets continuum edges (e.g. Balmer at $3646$ Å, Lyman at $912$ Å).
- **free-free**: bremsstrahlung-like, smooth.
- **electron scattering**: Thomson, $\sigma_T = 6.65 \times 10^{-25}$ cm$^2$, smooth.

so the spectrum is the integrated effect of all these contributions, each with its own $\kappa_\nu$.

## see also

- [Equation of radiative transfer](../../02_Zettel/Theory/Equation of radiative transfer.html)
- [Source function](../../02_Zettel/Theory/Source function.html)
- [Eddington-Barbier approximation](../../02_Zettel/Theory/Eddington-Barbier approximation.html)
- [Continuum opacity sources](../../02_Zettel/Theory/Continuum opacity sources.html)
- [Curve of growth](../../02_Zettel/Theory/Curve of growth.html)
- [Equivalent width](../../02_Zettel/Theory/Equivalent width.html)
- [Stellar atmosphere structure](../../02_Zettel/Theory/Stellar atmosphere structure.html)
- [Photoelectric absorption](../../02_Zettel/Theory/Photoelectric absorption.html)
- [Atmospheric extinction](../../02_Zettel/Theory/interf/Atmospheric extinction.html) — extinction along atmospheric path
