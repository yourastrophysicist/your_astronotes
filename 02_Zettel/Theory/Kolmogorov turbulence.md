---
layout: default
title: "Kolmogorov turbulence"
---

# Kolmogorov turbulence

the universal model of turbulent fluid flow in the inertial range. derived by Andrey Kolmogorov in 1941 from a simple dimensional argument about how energy cascades from large to small scales. its key prediction — the **5/3 power law** of the velocity structure function — applies to atmospheric refractive-index fluctuations and underwrites every model of seeing, scintillation, and adaptive optics.

## the cascade idea

energy is injected at large scale (the **outer scale** $L_0$, set by the largest eddies in the system, e.g. atmospheric thickness or terrain features, $\sim$ 10-100 m). it cascades to smaller scales without dissipation. at the **inner scale** $\ell_0$ (the **Kolmogorov microscale**, set by molecular viscosity, $\sim$ 1 mm), energy finally dissipates as heat.

between $\ell_0 < r < L_0$ — the **inertial range** — the only relevant parameters are
- $\epsilon$ (rate of energy dissipation per unit mass)
- $r$ (the spatial scale)

dimensional analysis: the only velocity-dimension quantity is $(\epsilon r)^{1/3}$. so the velocity difference across a separation $r$ scales as

$$|\Delta v(r)|^2 \sim (\epsilon r)^{2/3}$$

the **Kolmogorov 2/3 power law**.

## structure function

<img src="{{ "/assets/images/Kolmogorov_turbulence.png" | relative_url }}" alt="Kolmogorov atmospheric turbulence model showing phase distortion cascade from outer scale $ to dissipation scales." class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />


formally, the second-order structure function:
$$D_v(r) = \langle |\mathbf v(\mathbf x + \mathbf r) - \mathbf v(\mathbf x)|^2 \rangle = C_v^2 r^{2/3}$$

with $C_v^2 \sim \epsilon^{2/3}$ a constant of proportionality.

## power spectrum

the Wiener-Khinchin theorem relates structure function to power spectrum. for the Kolmogorov spectrum, in 3D:
$$\Phi_v(\kappa) \propto \kappa^{-11/3}$$

(the famous **5/3 + 2 = 11/3** that comes from dimensional integration). this is the velocity power spectrum *per unit volume of wavenumber space*; integrated over a single direction it gives the more familiar 1D spectrum.

in 2D (e.g. integrated along the line of sight, projected onto a 2D wavefront):
$$\Phi(\kappa) \propto \kappa^{-8/3}$$

## refractive-index fluctuations

temperature fluctuations cause refractive-index fluctuations. for atmospheric air at optical wavelengths:

$$n - 1 \approx 7.76 \times 10^{-5} (P/T) \cdot (1 + 7.5 \times 10^{-3}/\lambda^2_{\mu m})$$

variations in $T$ at constant $P$ produce variations in $n$. since temperature fluctuations follow Kolmogorov scaling, so do refractive-index fluctuations:

$$D_n(r) = C_n^2 r^{2/3}$$

with $C_n^2$ the **refractive-index structure parameter**, units m$^{-2/3}$. typical values: $\sim 10^{-15}$ m$^{-2/3}$ at good astronomical sites, near ground.

## the wavefront phase

light traversing a turbulent layer accumulates a phase $\phi = (2\pi/\lambda) \int n \, dz$. variations in $n$ across the wavefront cause variations in $\phi$. integrating along a line of sight through atmospheric turbulence:

$$D_\phi(r) = 2.91 \, k^2 r^{5/3} \int C_n^2(z) \, dz$$

where $k = 2\pi/\lambda$. the **5/3 exponent for phase** is one *higher* than the 2/3 for velocity, because phase is the integrated path-length perturbation (an extra factor of $r$ in the integration).

written compactly:
$$D_\phi(r) = 6.88 \, (r/r_0)^{5/3}$$

with $r_0$ the **Fried parameter** absorbing all the constants.

## the inner and outer scale

real atmospheric turbulence is *not* exactly Kolmogorov at all scales:
- below the inner scale $\ell_0 \sim 1$ mm: viscous dissipation, spectrum steepens
- above the outer scale $L_0 \sim 10$-100 m: spectrum saturates (von Kármán correction)

for typical interferometry baselines (1-100 m), we are *inside the inertial range*, and Kolmogorov scaling holds well. for very long baselines or very small features, the corrections matter.

## why this physics is universal

Kolmogorov's argument is dimensional, not specific to fluids. the cascade idea applies to:
- atmospheric turbulence (refractive index, temperature)
- ocean turbulence
- magnetohydrodynamic turbulence in plasmas (with modifications)
- interstellar medium turbulence (e.g. radio scintillation by the ISM)

in astronomy, "Kolmogorov" is often shorthand for "5/3 power-law density/phase fluctuations." applies far beyond optical seeing.

## measuring $C_n^2$

several methods:
- **DIMM** (differential image motion monitor): measures the differential tilt between two sub-apertures; gives integrated $C_n^2$
- **MASS** (multi-aperture scintillation sensor): scintillation in different annuli; gives $C_n^2(h)$ profile
- **SLODAR**: shadow-pattern of two stars; turbulence at altitudes
- **balloons / drones**: in situ thermal probes, give the highest-resolution profile

modern observatories run all of these, monitoring the "turbulence weather" in real time.

## the practical 5/3 prediction

three quantities all scale as $\lambda^{6/5}$ (a consequence of the 5/3 phase-structure-function exponent):

- $r_0 \propto \lambda^{6/5}$
- $\theta_0 \propto \lambda^{6/5}$
- $\tau_0 \propto \lambda^{6/5}$

these scalings are extensively verified observationally. they tell us why IR interferometry is dramatically easier than visible.

## see also

- [Atmospheric turbulence overview](../../02_Zettel/Theory/interf/Atmospheric turbulence overview.html)
- [Structure function and correlation function](../../02_Zettel/Theory/interf/Structure function and correlation function.html)
- [Fried parameter $r_0$](../../02_Zettel/Theory/interf/Fried parameter $r_0$.html)
- [Adaptive optics](../../02_Zettel/Theory/interf/Adaptive optics.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
