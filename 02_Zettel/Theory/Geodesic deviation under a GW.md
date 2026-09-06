---
layout: default
title: "Geodesic deviation under a GW"
---

a passing gravitational wave doesn't push individual test particles (they stay at constant comoving coordinates in TT gauge), but it changes the **proper distance** between them. this is what LIGO measures: the differential strain between freely-falling mirrors.

## the setup

two test masses, $A$ and $B$, separated by a small spatial vector $\xi^\mu$. both are in **free fall** (no non-gravitational forces). a GW passes through.

geodesic deviation equation:
$$\frac{D^2\xi^i}{D\tau^2} = -R^i{}_{0j0}\,\xi^j$$

(equatorial slice; only the spatial parts of Riemann matter for slow test masses.)

## linearised Riemann

in TT gauge, the linearised Riemann components are:
$$R_{i0j0} = -\tfrac{1}{2}\ddot h_{ij}^{TT}$$

so:
$$\boxed{\, \ddot\xi_i = \tfrac{1}{2}\ddot h_{ij}^{TT}\,\xi^j \,}$$

twice-time-derivative of $h^{TT}$ controls the relative acceleration of test masses.

## solving

integrate twice:
$$\xi_i(t) = \xi_i^{(0)} + \tfrac{1}{2}h_{ij}^{TT}(t)\,\xi^j_{(0)}$$

so the **separation vector picks up a contribution proportional to $h^{TT}$**. specifically, the proper distance between test masses changes by:
$$\Delta L/L \sim \tfrac{1}{2}h^{TT}$$

this is the **strain**, the observable in GW detectors.

## the LIGO signal

LIGO has two perpendicular arms of length $L \approx 4$ km. a GW with $h^{TT}$ produces a differential arm-length change:
$$\Delta L_x - \Delta L_y \approx \tfrac{1}{2}(h_{xx}^{TT} - h_{yy}^{TT}) L = h_+(t) \cdot L$$

(for $h_+$ polarisation alone; $h_\times$ would be picked up by arms at $45°$).

measured via Michelson interferometry: the output light intensity depends on the relative arm length, sensitive to $\Delta L \sim 10^{-18}$ m for typical $h \sim 10^{-21}$ and $L = 4$ km.

GW150914 (first LIGO detection): $h \sim 10^{-21}$ at peak, signal duration $\sim 0.2$ s, energy $\sim 3 M_\odot c^2$ radiated in GW.

## the picture: ring of test masses

if you arrange test masses in a circle in the $xy$-plane, a passing $h_+$ wave (propagating along $z$) makes the ring oscillate as an ellipse: stretched along $x$ + squeezed along $y$ at one phase, reversed half a period later.

a $h_\times$ wave does the same but with axes rotated $45°$. so the ring oscillates with axes along $\pm 45°$.

both effects are at the level of $\Delta L / L \sim h$, which for astrophysical sources is $\lesssim 10^{-21}$. tiny, requires extreme precision.

## why "free-falling"

LIGO's mirrors are suspended on multi-stage pendulums to isolate them from local seismic noise. on the GW timescales of $\sim 100$ Hz, they're effectively in **free fall** along the GW direction. so the mirrors follow geodesics.

the GW changes the **proper distance** between them via geodesic deviation, observable as a strain in the arm length.

## see also

- [Geodesic deviation](../../02_Zettel/Theory/Geodesic deviation.md)
- [Transverse traceless gauge](../../02_Zettel/Theory/Transverse traceless gauge.md)
- [Plus and cross polarizations](../../02_Zettel/Theory/Plus and cross polarizations.md)
- [Quadrupole formula](../../02_Zettel/Theory/Quadrupole formula.md)
- [GW energy and angular momentum](../../02_Zettel/Theory/GW energy and angular momentum.md)
- [Riemann tensor](../../02_Zettel/Theory/Riemann tensor.md)
- [Linearized metric perturbation](../../02_Zettel/Theory/Linearized metric perturbation.md)
- Q17 - Riemann R_0x0x for a TT plane wave
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 8 - Gravitational Waves](../../01_Literature/Book/Baumann GR/Ch 8 - Gravitational Waves.md)
