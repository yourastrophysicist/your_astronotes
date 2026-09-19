---
layout: "default"
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

depth into the photosphere is parameterised by $\tau$. observers see the layer at $\tau = 1$ ([Eddington-Barbier approximation](Eddington-Barbier%20approximation.html)). the surface ($\tau = 0$) is conventionally the top of the atmosphere where light escapes to vacuum.

the **photospheric temperature** $T_{\rm eff}$ is defined as $T(\tau = 2/3)$ (a Rosseland-mean-weighted definition). the photosphere thus has a $T$-vs-$\tau$ profile.

### nebular cloud

an HII region or molecular cloud has $\tau$ measured from the front face along the line of sight. for hydrogen ionisation: optical depth in the Lyman continuum determines whether ionising photons reach a given depth, setting the Strömgren sphere boundary (Strömgren sphere).

## $\tau$ in spectral lines

at a line center, $\kappa_\nu$ is much larger than in the continuum, so $\tau_{\rm line}$ at a given physical depth is much larger than $\tau_{\rm cont}$. consequence: the line "samples" a higher (cooler) layer of the atmosphere, hence appears in absorption.

curve of growth tracks how $W$ (equivalent width) grows with column density $N$:
- linear regime ($\tau_0 \ll 1$): $W \propto N$.
- saturation ($\tau_0 \sim 1$): $W \propto \sqrt{\ln N}$.
- damping wing regime ($\tau_0 \gg 1$): $W \propto \sqrt{N}$.

see [Curve of growth](Curve%20of%20growth.html).

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

- [Equation of radiative transfer](Equation%20of%20radiative%20transfer.html)
- [Source function](Source%20function.html)
- [Eddington-Barbier approximation](Eddington-Barbier%20approximation.html)
- [Continuum opacity sources](Continuum%20opacity%20sources.html)
- [Curve of growth](Curve%20of%20growth.html)
- [Equivalent width](Equivalent%20width.html)
- [Stellar atmosphere structure](Stellar%20atmosphere%20structure.html)
- [Photoelectric absorption](Photoelectric%20absorption.html)
- [Atmospheric extinction](interf/Atmospheric%20extinction.html) — extinction along atmospheric path

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (12)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Absorption%20coefficient%20and%20oscillator%20strength.html" class="backlink-item">Absorption coefficient and oscillator strength</a></li>
    <li class="backlink-item-wrap"><a href="Continuum%20opacity%20sources.html" class="backlink-item">Continuum opacity sources</a></li>
    <li class="backlink-item-wrap"><a href="Curve%20of%20growth.html" class="backlink-item">Curve of growth</a></li>
    <li class="backlink-item-wrap"><a href="Damping%20wings.html" class="backlink-item">Damping wings</a></li>
    <li class="backlink-item-wrap"><a href="Eddington-Barbier%20approximation.html" class="backlink-item">Eddington-Barbier approximation</a></li>
    <li class="backlink-item-wrap"><a href="Equation%20of%20radiative%20transfer.html" class="backlink-item">Equation of radiative transfer</a></li>
    <li class="backlink-item-wrap"><a href="Equivalent%20width.html" class="backlink-item">Equivalent width</a></li>
    <li class="backlink-item-wrap"><a href="Limb%20darkening.html" class="backlink-item">Limb darkening</a></li>
    <li class="backlink-item-wrap"><a href="Local%20thermodynamic%20equilibrium%20LTE.html" class="backlink-item">Local thermodynamic equilibrium LTE</a></li>
    <li class="backlink-item-wrap"><a href="Source%20function.html" class="backlink-item">Source function</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20atmosphere%20structure.html" class="backlink-item">Stellar atmosphere structure</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

