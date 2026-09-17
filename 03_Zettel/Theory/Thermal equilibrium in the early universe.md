---
layout: "default"
title: "Thermal equilibrium in the early universe"
---
{% raw %}
at high temperatures the universe is a hot, dense soup of particles in **thermal equilibrium** with each other through fast interactions. once we know the temperature $T$, the cosmological principle (homogeneity + isotropy) means we know the full distribution.

---

## the equilibrium distributions

each particle species in equilibrium has a phase-space distribution function $f(p, T)$ depending only on its energy $E(p) = \sqrt{p^2 + m^2}$ and the temperature:

**bosons** (Bose-Einstein):
$$f_B(p) = \frac{1}{e^{(E - \mu)/T} - 1}$$

**fermions** (Fermi-Dirac):
$$f_F(p) = \frac{1}{e^{(E - \mu)/T} + 1}$$

with chemical potential $\mu$, which is small or zero for most cosmologically relevant species (because particle/antiparticle asymmetries are tiny, $\sim 10^{-10}$).

in the **classical limit** ($E \gg T + \mu$), both reduce to Maxwell-Boltzmann:
$$f_{MB}(p) = e^{-(E-\mu)/T}$$

---

## relativistic vs non-relativistic limits

depending on $T$ relative to the particle's mass $m$:

- **relativistic** ($T \gg m$): $E \approx p$, the integrals over $f$ give $n \propto T^3$ and $\rho \propto T^4$
- **non-relativistic** ($T \ll m$): $E \approx m + p^2/2m$, and $n, \rho \propto e^{-m/T}$ (Boltzmann-suppressed)

once $T$ drops below the particle's mass, that species becomes non-relativistic and its number density falls exponentially. this is the basis for **freeze-out**.

---

## number density and energy density

for a relativistic species with $g$ internal degrees of freedom (helicity, color, etc.), in the limit $\mu = 0$:

**bosons:**
$$n_B = \frac{\zeta(3)}{\pi^2} g\, T^3, \qquad \rho_B = \frac{\pi^2}{30} g\, T^4$$

**fermions:**
$$n_F = \frac{3}{4} \cdot \frac{\zeta(3)}{\pi^2} g\, T^3, \qquad \rho_F = \frac{7}{8} \cdot \frac{\pi^2}{30} g\, T^4$$

with $\zeta(3) \approx 1.20206$.

---

## the effective relativistic degrees of freedom $g_*$

summing over all species in equilibrium:

$$\rho = \frac{\pi^2}{30} g_*(T)\, T^4$$

where
$$g_*(T) = \sum_{\rm bosons} g_i \left(\frac{T_i}{T}\right)^4 + \frac{7}{8}\sum_{\rm fermions} g_i \left(\frac{T_i}{T}\right)^4$$

(allowing different species to have different temperatures $T_i$ if they have decoupled.)

example values:
- **today** ($T = 2.725$ K): only photons + decoupled neutrinos; $g_*(\rm today) = 2 + 0.91 = $ small
- **just before $e^\pm$ annihilation** ($T \sim 1$ MeV): photons (2) + electrons (4) + positrons (4) + 3 neutrinos × 2 helicities × 2 (ν+ν̄) = 2 + 7/8(4 + 4 + 6) = 10.75
- **above the QCD phase transition** ($T \gtrsim 200$ MeV): all SM particles relativistic, $g_* \approx 106.75$

a sharp drop in $g_*$ happens at every mass threshold (electroweak, QCD, top, etc.).

---

## entropy density and $g_{*s}$

a separately useful quantity:
$$s = \frac{\rho + p}{T} = \frac{2\pi^2}{45} g_{*s}(T) T^3$$

with
$$g_{*s}(T) = \sum_{\rm bosons} g_i \left(\frac{T_i}{T}\right)^3 + \frac{7}{8}\sum_{\rm fermions} g_i \left(\frac{T_i}{T}\right)^3$$

note the **$T^3$ vs $T^4$**: $g_{*s}$ uses cubes of the temperature ratio, $g_*$ uses fourths. they coincide when all species share the photon temperature, but differ after neutrino decoupling.

→ see [Conservation of entropy in a comoving volume](./Conservation%20of%20entropy%20in%20a%20comoving%20volume.html).

---

## why thermal equilibrium is a useful idealization

at most epochs in the early universe, **interactions are very fast compared to expansion**:
$$\Gamma \gg H$$

every particle scatters many times per Hubble time, so the distribution rapidly relaxes to the Bose-Einstein or Fermi-Dirac form regardless of details. the universe is then characterized by a single number, $T$.

when an interaction becomes inefficient ($\Gamma \lesssim H$), that species **decouples** from the thermal bath — see [Decoupling and freeze-out](./Decoupling%20and%20freeze-out.html). this is the origin of all the relics we observe: CMB photons (decoupled at $T \sim 0.3$ eV), CνB neutrinos (decoupled at $T \sim 1$ MeV), dark matter (decoupled at much earlier times for thermal WIMPs).

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Brief thermal history](./Brief%20thermal%20history.html)
- [Conservation of entropy in a comoving volume](./Conservation%20of%20entropy%20in%20a%20comoving%20volume.html)
- [Decoupling and freeze-out](./Decoupling%20and%20freeze-out.html)
- [Boltzmann equation in cosmology](./Boltzmann%20equation%20in%20cosmology.html)
- [Baumann_reference](./Baumann_reference.html) — chapter 3.2 has the rigorous treatment
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./BBN_NSE_initial_conditions.html" class="backlink-item">BBN_NSE_initial_conditions</a></li>
    <li class="backlink-item-wrap"><a href="./Boltzmann%20equation%20in%20cosmology.html" class="backlink-item">Boltzmann equation in cosmology</a></li>
    <li class="backlink-item-wrap"><a href="./CMB%20Spectral%20Distortions%20-%20What%20They%20Are%20and%20Where%20They%20Come%20From.html" class="backlink-item">CMB Spectral Distortions - What They Are and Where They Come From</a></li>
    <li class="backlink-item-wrap"><a href="./Conservation%20of%20entropy%20in%20a%20comoving%20volume.html" class="backlink-item">Conservation of entropy in a comoving volume</a></li>
    <li class="backlink-item-wrap"><a href="./Decoupling%20and%20freeze-out.html" class="backlink-item">Decoupling and freeze-out</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Local%20thermodynamic%20equilibrium%20LTE.html" class="backlink-item">Local thermodynamic equilibrium LTE</a></li>
    <li class="backlink-item-wrap"><a href="./Number%20density%20and%20energy%20density%20at%20thermal%20equilibrium.html" class="backlink-item">Number density and energy density at thermal equilibrium</a></li>
  </ul>
</div>
