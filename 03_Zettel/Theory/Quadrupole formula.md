---
layout: "default"
title: "Quadrupole formula"
---
{% raw %}
the **quadrupole formula** gives the gravitational-wave amplitude radiated by a slowly-moving, weakly self-gravitating source: $h^{TT}_{ij} \sim (2G/r)\ddot Q_{ij}$. the leading-order contribution to GW emission. **monopole and dipole are forbidden** by conservation laws.

## the formula

the TT-gauge metric perturbation at distance $r$ from a source:
$$\boxed{\, h^{TT}_{ij}(t, \vec x) = \frac{2G}{r c^4}\,\ddot Q^{TT}_{ij}(t - r/c) \,}$$

with the **mass quadrupole moment**:
$$Q_{ij}(t) = \int \rho(t, \vec x')\!\left(x'_i x'_j - \tfrac{1}{3}\delta_{ij}|\vec x'|^2\right)d^3x'$$

(the traceless second moment of the mass distribution). the TT projection extracts only the transverse-traceless part along the wave direction $\hat n$.

## why monopole and dipole vanish

### monopole

the **mass monopole** $M = \int \rho\,d^3x$ is conserved (mass conservation). so $\ddot M = 0$, no monopole GW. directly analogous to "no monopole EM radiation" (charge conservation).

### dipole

the **mass dipole** $D_i = \int \rho x'_i\,d^3x$ is the centre of mass. its derivative is the total momentum: $\dot D_i = P_i$. for an isolated system, $P_i$ is conserved (momentum conservation), so $\ddot D_i = 0$, no dipole GW.

so the **lowest non-trivial multipole** is the **quadrupole**. unlike electromagnetism, where the dipole radiation is the leading term, gravitational radiation starts at the quadrupole.

## the analogy with EM

| feature | EM | GR |
|---|---|---|
| field | $A^\mu$ | $h_{\mu\nu}$ |
| source | charge density $\rho_e$ | energy density $\rho$ |
| forbidden | monopole | monopole + dipole |
| leading multipole | electric dipole $\sim \ddot p$ | mass quadrupole $\sim \ddot Q$ |

so GW emission is **higher-order** than EM emission in some sense. consequence: GW emission rates from typical motions are very small.

## the radiated power: Einstein quadrupole formula

total power radiated as GW:
$$P_{\rm GW} = \frac{G}{5 c^5}\langle\dddot Q^{TT}_{ij}\dddot Q^{TT, ij}\rangle$$

(angle brackets = time-average.) for a binary system in circular orbit:
$$P_{\rm GW} = \frac{32}{5}\frac{G^4}{c^5}\frac{m_1^2 m_2^2(m_1 + m_2)}{a^5}$$

with $a$ the orbital separation. very steep dependence on $a^{-5}$. so binary systems lose energy and inspiral faster as they get closer.

## binary inspiral

a binary BH or NS system in circular orbit emits GW power as above. energy loss causes orbital separation to shrink: $\dot a \propto a^{-3}$. integrated:
$$a(t) = a_0\!\left(1 - t/t_{\rm coalesce}\right)^{1/4}$$

with merger time:
$$t_{\rm coalesce} = \frac{5}{256}\frac{c^5 a_0^4}{G^3 m_1 m_2(m_1 + m_2)}$$

for the GW150914-like binary BH (each $\sim 30\,M_\odot$, separation $\sim 10$ Schwarzschild radii initially): coalescence time is tens of milliseconds.

## frequency evolution: the chirp

as the binary inspirals, both **orbital frequency** and **GW frequency** (twice the orbital frequency for the dominant mode) increase. the characteristic **chirp** signal: frequency rises monotonically from $\sim 10$ Hz to $\sim$ kHz over the last seconds of inspiral. LIGO sensitivity range.

## the Hulse-Taylor binary pulsar

PSR B1913+16 (Hulse + Taylor 1974). orbital period decreasing at $\sim 76\,\mu$s/year, exactly matching the quadrupole-formula prediction. the **first indirect detection of GW emission**, Nobel 1993.

direct detection: GW150914 (LIGO 2015), Nobel 2017.

## see also

- [Linearized metric perturbation](./Linearized%20metric%20perturbation.html)
- [Transverse traceless gauge](./Transverse%20traceless%20gauge.html)
- [Plus and cross polarizations](./Plus%20and%20cross%20polarizations.html)
- [Geodesic deviation under a GW](./Geodesic%20deviation%20under%20a%20GW.html)
- [GW energy and angular momentum](./GW%20energy%20and%20angular%20momentum.html)
- [Birkhoff theorem](./Birkhoff%20theorem.html)
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 8 - Gravitational Waves](../../02_Literature/Book/Baumann%20GR/Ch%208%20-%20Gravitational%20Waves.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (9)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Birkhoff%20theorem.html" class="backlink-item">Birkhoff theorem</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Book/Baumann%20GR/Ch%208%20-%20Gravitational%20Waves.html" class="backlink-item">Ch 8 - Gravitational Waves</a></li>
    <li class="backlink-item-wrap"><a href="./GW%20energy%20and%20angular%20momentum.html" class="backlink-item">GW energy and angular momentum</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Geodesic%20deviation%20under%20a%20GW.html" class="backlink-item">Geodesic deviation under a GW</a></li>
    <li class="backlink-item-wrap"><a href="./Linearized%20metric%20perturbation.html" class="backlink-item">Linearized metric perturbation</a></li>
    <li class="backlink-item-wrap"><a href="./Lorenz%20gauge.html" class="backlink-item">Lorenz gauge</a></li>
    <li class="backlink-item-wrap"><a href="./Plus%20and%20cross%20polarizations.html" class="backlink-item">Plus and cross polarizations</a></li>
    <li class="backlink-item-wrap"><a href="./Transverse%20traceless%20gauge.html" class="backlink-item">Transverse traceless gauge</a></li>
  </ul>
</div>
