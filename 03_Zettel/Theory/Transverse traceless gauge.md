---
layout: "default"
title: "Transverse traceless gauge"
---
the **transverse-traceless (TT) gauge** is the canonical choice for gravitational waves. after fixing Lorenz gauge + 4 residual gauge conditions, only the 2 physical polarisations remain: $h_+$ and $h_\times$.

## the conditions

a perturbation $h_{\mu\nu}$ is in **TT gauge** if:
1. **Lorenz gauge**: $\partial^\mu h_{\mu\nu} = 0$. (4 conditions.)
2. **traceless**: $h = \eta^{\mu\nu}h_{\mu\nu} = 0$. (1 condition.)
3. **transverse**: $h_{0\mu} = 0$. (4 conditions, but redundant with the above for vacuum waves.)

net: 4 + 4 = 8 conditions out of 10 components $\to$ 2 physical polarisations. exactly the 2 graviton polarisations of GR.

equivalently: in TT gauge, $h_{\mu\nu}$ has only **spatial** components ($h_{0\mu} = 0$), is **traceless** ($\delta^{ij}h_{ij} = 0$), and is **transverse** ($\partial^i h_{ij} = 0$).

## what TT gauge does

### vacuum wave equation
in vacuum, $\Box h_{\mu\nu}^{TT} = 0$. plane-wave solutions:
$$h_{\mu\nu}^{TT}(x) = A_{\mu\nu}\,e^{ik\cdot x}$$
with $k^\mu k_\mu = 0$ (light-cone propagation) and $A_{\mu\nu}$ the polarisation tensor.

for a wave propagating in the $z$-direction, $k^\mu = (\omega, 0, 0, \omega)$. the only non-zero components are $h_{xx}^{TT}, h_{yy}^{TT}, h_{xy}^{TT}, h_{yx}^{TT}$ with constraints:
- traceless: $h_{xx}^{TT} = -h_{yy}^{TT}$.
- symmetric: $h_{xy}^{TT} = h_{yx}^{TT}$.

## the two physical polarisations

writing in matrix form:
$$h_{ij}^{TT} = \begin{pmatrix} h_+ & h_\times & 0 \\ h_\times & -h_+ & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

so two independent functions:
- **$h_+$ ("plus")**: stretches along $x$, squeezes along $y$.
- **$h_\times$ ("cross")**: stretches along $x = y$, squeezes along $x = -y$. rotated $45°$ from plus.

see [Plus and cross polarizations](Plus%20and%20cross%20polarizations.html) for the test-mass picture.

## reaching TT gauge

start with arbitrary $h$ in Lorenz gauge. residual gauge transformations $\xi^\mu$ with $\Box \xi^\mu = 0$ preserve Lorenz. use these 4 free parameters to:
1. set $h_{00} = 0$ (1 condition).
2. set $h_{0i} = 0$ (3 conditions).

after these 4 conditions, traceless $h = h^{ii} = 0$ + transverse $\partial^i h_{ij} = 0$ follow from Lorenz gauge in vacuum.

so TT gauge **is reachable** for any vacuum $h_{\mu\nu}$ in Lorenz gauge.

## limits

TT gauge works only:
- in vacuum (matter contributions break the gauge conditions).
- for plane-wave or wave-zone analyses.
- not directly applicable to cosmological perturbations on FLRW (those use SVT decomposition).

## see also

- [Linearized metric perturbation](Linearized%20metric%20perturbation.html)
- [Linearized gauge transformations](Linearized%20gauge%20transformations.html)
- [Lorenz gauge](Lorenz%20gauge.html)
- [Trace-reversed perturbation](Trace-reversed%20perturbation.html)
- [Plus and cross polarizations](Plus%20and%20cross%20polarizations.html)
- [Geodesic deviation under a GW](Geodesic%20deviation%20under%20a%20GW.html)
- [Quadrupole formula](Quadrupole%20formula.html)
- Q16 - Christoffels for a TT plane wave
- Q17 - Riemann R_0x0x for a TT plane wave
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 8 - Gravitational Waves](../../02_Literature/Book/Baumann%20GR/Ch%208%20-%20Gravitational%20Waves.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (10)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="GW%20energy%20and%20angular%20momentum.html" class="backlink-item">GW energy and angular momentum</a></li>
    <li class="backlink-item-wrap"><a href="Geodesic%20deviation%20under%20a%20GW.html" class="backlink-item">Geodesic deviation under a GW</a></li>
    <li class="backlink-item-wrap"><a href="Linearized%20gauge%20transformations.html" class="backlink-item">Linearized gauge transformations</a></li>
    <li class="backlink-item-wrap"><a href="Linearized%20metric%20perturbation.html" class="backlink-item">Linearized metric perturbation</a></li>
    <li class="backlink-item-wrap"><a href="Lorenz%20gauge.html" class="backlink-item">Lorenz gauge</a></li>
    <li class="backlink-item-wrap"><a href="Plus%20and%20cross%20polarizations.html" class="backlink-item">Plus and cross polarizations</a></li>
    <li class="backlink-item-wrap"><a href="Quadrupole%20formula.html" class="backlink-item">Quadrupole formula</a></li>
    <li class="backlink-item-wrap"><a href="SVT%20decomposition.html" class="backlink-item">SVT decomposition</a></li>
    <li class="backlink-item-wrap"><a href="Trace-reversed%20perturbation.html" class="backlink-item">Trace-reversed perturbation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
  </ul>
</div>

