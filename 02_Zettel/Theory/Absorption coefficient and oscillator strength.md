---
layout: default
title: "Absorption coefficient and oscillator strength"
---

the **absorption coefficient** $\kappa_\nu$ for a spectral line connects the observable line shape to the atomic-physics quantity called the **oscillator strength** $f$, which encodes the transition probability.

## the formula

for a transition between lower level $l$ and upper level $u$:
$$\kappa_\nu = \frac{\pi e^2}{m_e c}\,n_l\,f_{lu}\,\phi(\nu)$$

units: cm$^{-1}$. constants:
- $\pi e^2 / (m_e c) = 0.0265$ cm$^2$ Hz, the classical absorption cross section per oscillator.
- $n_l$ = number density of atoms in the lower level.
- $f_{lu}$ = oscillator strength (dimensionless).
- $\phi(\nu)$ = line profile, normalised so $\int \phi(\nu)d\nu = 1$.

## what the oscillator strength is

$f_{lu}$ is the **dimensionless transition strength**, comparing a real quantum transition to a classical harmonic oscillator. mathematically:
$$f_{lu} = \frac{2 m_e}{\hbar e^2}\,(E_u - E_l)\,|\langle u|x|l\rangle|^2$$
in Gaussian units. proportional to the squared dipole matrix element.

for permitted transitions, $f \sim 0.1$ to $2$. for forbidden lines (M1, E2), $f \sim 10^{-6}$ to $10^{-3}$. for semi-forbidden (intersystem), $\sim 10^{-3}$ to $10^{-1}$.

tabulated in atomic-line databases (NIST ASD, VALD, Kurucz). usually given as $\log gf$ where $g_l$ is the lower-level statistical weight.

## relation to Einstein coefficients

equivalent forms encode the same physics:
$$f_{lu} = \frac{m_e c}{8\pi^2 e^2}\,\lambda_0^2\,A_{ul}\,\frac{g_u}{g_l}$$
relates $f_{lu}$ (absorption) to $A_{ul}$ (spontaneous emission). $A_{ul}$ has units s$^{-1}$, the rate of spontaneous decay.

so an oscillator strength is essentially a packaged Einstein $A$.

## connection to the cross section

the **integrated absorption cross section** over the line is:
$$\sigma_{\rm tot} = \int \sigma_\nu d\nu = \frac{\pi e^2}{m_e c}\,f_{lu}$$

units: cm$^2$ Hz. independent of line width. this is a fixed atomic property; the line profile redistributes this cross section in $\nu$.

## the absorbing column

the **optical depth** at frequency $\nu$ along a line of sight is:
$$\tau_\nu = \int n_l \sigma_\nu ds = N_l\,\frac{\pi e^2}{m_e c}\,f_{lu}\,\phi(\nu)$$
with $N_l = \int n_l\,ds$ the **column density** of absorbers (cm$^{-2}$).

at line center for a Doppler profile, $\phi(\nu_0) \approx 1/(\Delta\nu_D \sqrt\pi)$, so
$$\tau_0 \approx N_l \cdot \frac{\pi e^2 f}{m_e c \Delta\nu_D \sqrt\pi}$$

practical: knowing $\tau_0$ and $f$ from atomic data, you get $N_l$. column densities of interstellar absorbers are routinely measured this way.

## the Ladenburg-Reiche relation

historically: an oscillator with strength $f$ has the same time-integrated emission as a classical electron oscillating at the resonance frequency, times $f$. so $f = 1$ matches a classical oscillator; $f < 1$ for "weak" transitions, $f > 1$ rare ($f$ summed over all transitions from a given lower level satisfies the Thomas-Reiche-Kuhn sum rule, $\sum f = N_e$).

## see also

- [Line profile function phi nu](../../02_Zettel/Theory/Line profile function phi nu.html)
- [Equivalent width](../../02_Zettel/Theory/Equivalent width.html)
- [Curve of growth](../../02_Zettel/Theory/Curve of growth.html)
- [Optical depth](../../02_Zettel/Theory/Optical depth.html)
- [Selection rules](../../02_Zettel/Theory/Selection rules.html)
- [Forbidden vs permitted vs semiforbidden transitions](../../02_Zettel/Theory/Forbidden vs permitted vs semiforbidden transitions.html)
- [Statistical weight g](../../02_Zettel/Theory/Statistical weight g.html)
- [Equation of radiative transfer](../../02_Zettel/Theory/Equation of radiative transfer.html)
- [Curve of growth abundance analysis](../../02_Zettel/Theory/Curve of growth abundance analysis.html)
