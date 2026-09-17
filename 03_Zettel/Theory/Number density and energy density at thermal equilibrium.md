---
layout: "default"
title: "Number density and energy density at thermal equilibrium"
---
{% raw %}
at temperatures where a species is in thermal equilibrium with the rest of the universe, its phase-space density follows the Bose-Einstein or Fermi-Dirac distribution (see [Thermal equilibrium in the early universe](./Thermal%20equilibrium%20in%20the%20early%20universe.html)). integrating gives clean expressions for **number density**, **energy density**, and **pressure**.

---

## relativistic limit ($T \gg m$)

assuming negligible chemical potential ($\mu \approx 0$):

**bosons** with $g$ internal degrees of freedom:
$$n = \frac{\zeta(3)}{\pi^2}\, g\, T^3$$
$$\rho = \frac{\pi^2}{30}\, g\, T^4$$
$$p = \frac{1}{3}\rho \quad (\text{equation of state for radiation})$$

**fermions** (extra factor $7/8$ on energy density, $3/4$ on number density):
$$n = \frac{3}{4} \cdot \frac{\zeta(3)}{\pi^2}\, g\, T^3$$
$$\rho = \frac{7}{8} \cdot \frac{\pi^2}{30}\, g\, T^4$$
$$p = \frac{1}{3}\rho$$

with $\zeta(3) \approx 1.20206$.

---

## non-relativistic limit ($T \ll m$)

both bosons and fermions reduce to Maxwell-Boltzmann:
$$n = g\left(\frac{m T}{2\pi}\right)^{3/2} e^{-m/T}$$

(times $e^{\mu/T}$ if $\mu \neq 0$.) the **exponential Boltzmann suppression** $e^{-m/T}$ kicks in once $T$ drops below $m$.

energy density:
$$\rho \approx m\, n$$
(rest-mass energy dominates, kinetic correction is small.)

pressure:
$$p = n T \ll \rho$$
(non-relativistic, "dust-like" equation of state $w = p/\rho \approx 0$.)

---

## the effective relativistic degrees of freedom $g_*$

summing over all species in equilibrium:
$$\rho_{\rm rad} = \frac{\pi^2}{30}\, g_*(T)\, T^4$$

with
$$g_*(T) = \sum_{\rm bosons} g_i \left(\frac{T_i}{T}\right)^4 + \frac{7}{8}\sum_{\rm fermions} g_i \left(\frac{T_i}{T}\right)^4$$

(allowing different species to have different temperatures $T_i$ if they have decoupled.)

example values:
| epoch | $T$ | $g_*$ |
|---|---|---|
| today | $T_0 = 2.725$ K | small (just photons + decoupled $\nu$) |
| just before $e^\pm$ annihilation | $\sim 1$ MeV | $10.75$ |
| just after | $\sim 0.5$ MeV | $3.36$ |
| above QCD transition | $\gtrsim 200$ MeV | $\sim 61.75$ |
| above electroweak transition | $\gtrsim 100$ GeV | $\sim 106.75$ |

each mass threshold (top, $W/Z$, Higgs, etc.) drops $g_*$ by removing dof from the relativistic bath.

---

## the effective entropy degrees of freedom $g_{*s}$

separately useful: the **entropy density**
$$s = \frac{\rho + p}{T} = \frac{2\pi^2}{45}\, g_{*s}(T)\, T^3$$

with
$$g_{*s}(T) = \sum_{\rm bosons} g_i \left(\frac{T_i}{T}\right)^3 + \frac{7}{8}\sum_{\rm fermions} g_i \left(\frac{T_i}{T}\right)^3$$

note: $g_{*s}$ uses **cubes** of the temperature ratio, $g_*$ uses **fourths**. they coincide when all species share the photon temperature, but differ after neutrino decoupling.

→ see [Conservation of entropy in a comoving volume](./Conservation%20of%20entropy%20in%20a%20comoving%20volume.html).

---

## the Friedmann equation for radiation domination

in the radiation-dominated era ($z \gtrsim 3300$), the universe is dominated by relativistic species. the Friedmann equation:
$$H^2 = \frac{8\pi G}{3}\rho_{\rm rad} = \frac{8\pi G}{3} \cdot \frac{\pi^2}{30}\, g_*(T)\, T^4$$

so:
$$H \propto g_*^{1/2}\, T^2$$

with $T \propto 1/a$ (entropy conservation), this gives $a \propto t^{1/2}$ and a **temperature-time relation**:
$$T \approx \frac{1}{\sqrt{2 t}\, [(8\pi^3/90)\, g_*]^{1/4}/M_{\rm Pl}^{1/2}}$$

equivalently:
$$T^2 t \approx \frac{M_{\rm Pl}}{2 \sqrt{(8\pi^3/90) g_*}}$$

with $M_{\rm Pl} = (8\pi G)^{-1/2}$ the reduced Planck mass.

→ see [Temperature-time relation](./Temperature-time%20relation.html) for the worked-out form.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Thermal equilibrium in the early universe](./Thermal%20equilibrium%20in%20the%20early%20universe.html)
- [Conservation of entropy in a comoving volume](./Conservation%20of%20entropy%20in%20a%20comoving%20volume.html)
- [Temperature-time relation](./Temperature-time%20relation.html)
- [Brief thermal history](./Brief%20thermal%20history.html)
- [BBN_overview](./BBN_overview.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Boltzmann%20equation%20in%20spectroscopy.html" class="backlink-item">Boltzmann equation in spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="./CMB%20Spectral%20Distortions%20-%20What%20They%20Are%20and%20Where%20They%20Come%20From.html" class="backlink-item">CMB Spectral Distortions - What They Are and Where They Come From</a></li>
    <li class="backlink-item-wrap"><a href="./Cosmic_inventory_photons_derivation.html" class="backlink-item">Cosmic_inventory_photons_derivation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Partition%20function.html" class="backlink-item">Partition function</a></li>
    <li class="backlink-item-wrap"><a href="./Temperature-time%20relation.html" class="backlink-item">Temperature-time relation</a></li>
  </ul>
</div>
