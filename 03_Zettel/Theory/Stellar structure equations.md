---
layout: "default"
title: "Stellar structure equations"
---
{% raw %}
a spherically symmetric, non-rotating, non-magnetic star in quasi-static equilibrium is governed by **the four differential equations of stellar structure**. these equations connect mass, pressure, temperature, and luminosity as functions of radial distance $r$ from the center.

![stellar-20.png](../../assets/images/stellar-20.png)

---

## the four fundamental equations of stellar structure

### 1. equation of mass conservation:
the mass $M(r)$ enclosed within a spherical shell of radius $r$ and thickness $dr$ with local density $\rho(r)$ is:
$$\boxed{\, \frac{dM}{dr} = 4\pi r^2 \rho(r) \,}$$
- boundary conditions: $M(0) = 0$, and $M(R) = M_{\text{total}}$.

### 2. equation of hydrostatic equilibrium:
in each spherical shell, the inward gravitational pull of the enclosed mass $M(r)$ is exactly balanced by the outward net pressure gradient force:
$$\boxed{\, \frac{dP}{dr} = -\frac{G M(r) \rho(r)}{r^2} \,}$$
where total pressure $P = P_{\text{gas}} + P_{\text{rad}} = \frac{\rho k_B T}{\mu m_H} + \frac{1}{3} a T^4$.
- boundary conditions: $P(R) \approx 0$, and $P(0) = P_c$ (central pressure).

![stellar-21.png](../../assets/images/stellar-21.png)

### 3. equation of energy conservation:
the luminosity $L(r)$ flowing outward through a sphere of radius $r$ increases by the energy generated in the shell by nuclear fusion $\epsilon(r)$ (and gravitational contraction/expansion):
$$\boxed{\, \frac{dL}{dr} = 4\pi r^2 \rho(r) \left[\epsilon(r) - \epsilon_\nu + \epsilon_{\text{grav}}\right] \,}$$
where $\epsilon$ is the nuclear energy generation rate per unit mass (W/kg), and $\epsilon_\nu$ is energy lost to escaping neutrinos.
- boundary conditions: $L(0) = 0$, and $L(R) = L_{\text{surface}}$.

![stellar-22.png](../../assets/images/stellar-22.png)

### 4. equation of energy transport:
governs the temperature gradient $dT/dr$ required to transport luminosity $L(r)$ outward. energy flows via the mechanism that requires the smallest temperature gradient (conduction, radiation, or convection).

#### A. Radiative transport:
when energy is carried by photons diffusing through matter with Rosseland mean opacity $\kappa$ (diffusion approximation):
$$\boxed{\, \left(\frac{dT}{dr}\right)_{\text{rad}} = -\frac{3 \kappa \rho L(r)}{16\pi a c r^2 T^3} = -\frac{3 \kappa \rho}{4 a c T^3} \frac{F(r)}{\pi} \,}$$
where $a = 4\sigma/c$ is the radiation constant.

![stellar-23.png](../../assets/images/stellar-23.png)

#### B. Convective transport and the Schwarzschild criterion:
Karl Schwarzschild proved that a fluid element displaced upward adiabatically will become buoyant and unstable to **convection** if the actual temperature gradient is steeper than the adiabatic gradient:
$$\boxed{\, \left\lvert\frac{dT}{dr}\right\rvert_{\text{actual}} > \left\lvert\frac{dT}{dr}\right\rvert_{\text{ad}} = \left(1 - \frac{1}{\gamma}\right) \frac{T}{P} \left\lvert\frac{dP}{dr}\right\rvert \,}$$

convection is triggered when:
1. the opacity $\kappa$ is very large (e.g. hydrogen/helium partial ionization zones where $T \sim 10^4-10^5$ K in outer stellar envelopes).
2. the energy generation rate $\epsilon$ is extremely temperature-sensitive (e.g. CNO cycle where $\epsilon \propto T^{18}$), producing an immense central luminosity flux.

when convection occurs, it is so efficient that the temperature gradient is clamped very close to the adiabatic gradient: $\frac{dT}{dr} \approx \left(\frac{dT}{dr}\right)_{\text{ad}}$.

![stellar-24.png](../../assets/images/stellar-24.png)

---

## internal structure configurations across the Main Sequence

the dominance of radiative vs convective zones depends fundamentally on stellar mass:
1. **Low-mass stars ($M < 0.35 M_\odot$)**: completely convective from core to surface. high opacity and low temperatures keep the entire star mixed, allowing them to burn nearly $100\%$ of their hydrogen before leaving the MS.
2. **Solar-type stars ($0.35 M_\odot < M < 1.5 M_\odot$)**: **radiative core** and **convective outer envelope**. pp-chain energy generation is weakly temperature-dependent ($\epsilon \propto T^4$), keeping the core stable against convection. the cooler outer layers have high opacity, driving envelope convection.
3. **Massive stars ($M > 1.5 M_\odot$)**: **convective core** and **radiative outer envelope**. the CNO cycle dominates, concentrating energy production in a tiny central region and driving intense core convection. the hot outer layers have low opacity (electron scattering $\kappa_{es} = 0.4$ cm$^2$/g), transporting energy stably by radiation.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Radiative transport](./Radiative%20transport.html)
- [Stellar scaling relations](./Stellar%20scaling%20relations.html)
- [Stellar nucleosynthesis](./Stellar%20nucleosynthesis.html)
- [Stellar evolution timescales](./Stellar%20evolution%20timescales.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Jeans%20theory%20and%20protostellar%20formation.html" class="backlink-item">Jeans theory and protostellar formation</a></li>
    <li class="backlink-item-wrap"><a href="./M-dwarf%20discontinuity%20and%20convective%20merging%20instability.html" class="backlink-item">M-dwarf discontinuity and convective merging instability</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20atmosphere%20structure.html" class="backlink-item">Stellar atmosphere structure</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20evolution%20timescales.html" class="backlink-item">Stellar evolution timescales</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20nucleosynthesis.html" class="backlink-item">Stellar nucleosynthesis</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20scaling%20relations.html" class="backlink-item">Stellar scaling relations</a></li>
  </ul>
</div>
