---
layout: default
title: "Echelle spectroscopy"
---

an **echelle** is a spectrograph that uses a coarse, high-blaze-angle grating in very high orders ($m \sim 30$ to $100$) to achieve very high resolving power in a compact instrument. workhorse for high-precision radial velocities and abundance work.

## the principle

resolving power is $R = \rho m W$ (modulo geometry). instead of pushing $\rho$ to extreme values (hard to manufacture), an echelle pushes $m$ to high values. typical:
- $\rho = 50$ to $300$ lines/mm (much coarser than a regular grating).
- $\theta_B \sim 60°$ to $70°$ (blaze angle).
- $m \sim 30$ to $100$.

so $\rho m \sim 5000$ to $20\,000$, much higher than a standard $\rho = 1200$, $m = 1$ grating.

result: $R \sim 30\,000$ to $200\,000$ in a normal-size spectrograph, vs $R \sim 5000$ for the same $W$ in a single-order grating.

## the order overlap problem

at high $m$, many wavelengths satisfy the grating equation simultaneously at the same diffraction angle. the orders overlap densely. solution: a **cross-disperser**, a second grating (or prism) perpendicular to the echelle, separating the orders in the orthogonal direction.

result on the detector: a 2D pattern of slanted stripes (each = one order), with wavelength running along each stripe and order number stepping perpendicular. typical echelle CCD image looks like a barcode.

each stripe has a small free spectral range $\Delta\lambda_{FSR} = \lambda/m$. for $m = 50$ at $\lambda = 5000$ Å, $FSR = 100$ Å. so each order covers a small wavelength range; the full wavelength coverage comes from the union of all orders.

## why echelles win for radial-velocity precision

the key science driver is radial-velocity measurement to $\lesssim 1$ m/s for exoplanet detection.
- to measure $v_r = (c \Delta\lambda/\lambda)$ to $1$ m/s, you need $\Delta\lambda/\lambda \sim 3 \times 10^{-9}$.
- per spectral line, this is a tiny fraction of the line width; you cross-correlate across thousands of lines simultaneously.
- so you want **broad wavelength coverage with high $R$**: the echelle's specialty.

flagship instruments:
- **HARPS** (3.6 m ESO La Silla, 2003): $R = 115\,000$, $0.5$ m/s precision, has detected $\sim 100$s of exoplanets including $\alpha$ Cen Bb candidates.
- **HARPS-N** (TNG): northern twin of HARPS.
- **ESPRESSO** (VLT, 2018): $R \sim 200\,000$, $0.1$ m/s precision target. designed to find Earth-mass planets in habitable zones of solar-type stars.
- **EXPRES** (Yale, Lowell), **NEID** (WIYN), **MAROON-X** (Gemini): newer high-precision RV machines.

## abundance analysis

with $R = 50\,000$ to $100\,000$, individual stellar absorption lines are resolved including their line shape. fitting Voigt profiles plus a stellar atmosphere model recovers:
- effective temperature $T_{\rm eff}$.
- surface gravity $\log g$.
- iron abundance $[Fe/H]$.
- detailed elemental abundances $[X/Fe]$ for $\sim 30$ elements.

backbone of Galactic Archaeology surveys: GALAH, APOGEE-2, 4MOST-HR. abundance-pattern tagging traces stellar origins back to formation events in the Galaxy's history.

## examples beyond stellar work

- **X-shooter**: UV + visible + NIR simultaneous echelle on VLT, $R = 4000$ to $11\,000$ (modest by echelle standards). general workhorse for transients, supernovae, AGN.
- **HIRES** (Keck): historic high-$z$ galaxy and quasar spectroscopy.
- **FEROS** at La Silla: small-aperture echelle.

## see also

- [Grating equation](../../02_Zettel/Theory/Grating equation.md)
- [Blazed gratings](../../02_Zettel/Theory/Blazed gratings.md)
- [Spectrograph design](../../02_Zettel/Theory/Spectrograph design.md)
- [Dispersion and spectral resolution](../../02_Zettel/Theory/Dispersion and spectral resolution.md)
- [Spectrograph types](../../02_Zettel/Theory/Spectrograph types.md)
- [Stellar v sin i from line shape](../../02_Zettel/Theory/Stellar v sin i from line shape.md)
- [Curve of growth abundance analysis](../../02_Zettel/Theory/Curve of growth abundance analysis.md)
