---
layout: "default"
title: "Cosmic relics and Kibble mechanism"
---
# Cosmic relics and Kibble mechanism

> *the overproduction of topological defects during GUT phase transitions, and their exponential dilution by inflation.*

---

## core physical intuition

In Grand Unified Theories (GUTs), the fundamental forces unify at $T_{\rm GUT} \sim 10^{16}\text{ GeV}$. As the universe cools below this scale, spontaneous symmetry breaking occurs ($G \to H \times U(1)$). Because regions separated by more than the horizon distance cannot coordinate their choice of vacuum, topological defects inevitably freeze into the field configuration (the Kibble mechanism).

For broken gauge symmetries with non-trivial second homotopy group $\pi_2(G/H) \neq \mathbb{I}$, point defects known as 't Hooft-Polyakov magnetic monopoles form with at least one defect per Hubble volume. Because these monopoles are heavy ($m_M \sim 10^{17}\text{ GeV}$) and stable, their energy density dilutes only as $a^{-3}$, whereas radiation dilutes as $a^{-4}$. In standard cosmology, monopoles would overclose the universe by 14 orders of magnitude ($\Omega_{\rm mono} \sim 10^{14}$).

Inflation solves this by expanding the volume after the phase transition by $e^{3N} \sim 10^{78}$, diluting the defect density to less than one monopole in our entire observable horizon.

---

## key derivation & equations

The number density of monopoles formed at $T_{\rm GUT}$ via the Kibble mechanism is:
$$n_{\rm mono}(t_{\rm GUT}) \sim H_{\rm GUT}^3 \sim \left(\frac{T_{\rm GUT}^2}{M_{\rm Pl}}\right)^3$$

The ratio to the entropy density $s \sim g_* T^3$ is:
$$\frac{n_{\rm mono}}{s} \sim \left(\frac{T_{\rm GUT}}{M_{\rm Pl}}\right)^3 \sim \left(\frac{10^{16}\text{ GeV}}{10^{19}\text{ GeV}}\right)^3 \sim 10^{-9}$$

The mass density today would be:
$$\rho_{\rm mono}(t_0) = m_M n_{\rm mono}(t_0) = m_M s_0 \left(\frac{n_{\rm mono}}{s}\right) \sim 10^{17}\text{ GeV} \cdot (3000\text{ cm}^{-3}) \cdot 10^{-9} \sim 10^{-5}\text{ g/cm}^3$$
Comparing to critical density $\rho_c \sim 10^{-29}\text{ g/cm}^3$:
$$\Omega_{\rm mono}(t_0) = \frac{\rho_{\rm mono}}{\rho_c} \sim 10^{14}$$

### Inflationary dilution
If inflation occurs after or during the phase transition:
$$n_{\rm mono}(t_{\rm end}) = n_{\rm mono}(t_{\rm GUT}) e^{-3N}$$
For $N \approx 60$: $e^{-3N} \sim e^{-180} \sim 10^{-78}$, leaving $\Omega_{\rm mono} \sim 10^{-64}$.

---

## astrophysical context

* Parker bound on Galactic magnetic field dissipation by magnetic monopoles.
* Null results from terrestrial monopole searches (MACRO, MoEDAL).
* Cosmic strings as potential sources of stochastic gravitational waves (LISA, Pulsar Timing Arrays).

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Horizon problem and causal structure](Horizon%20problem%20and%20causal%20structure.html)
  - [Flatness problem and dynamical attractor](Flatness%20problem%20and%20dynamical%20attractor.html)
  - [Cosmological inflation](Cosmological%20inflation.html)
  - [Part1_Standard_Big_Bang_and_Shortcomings](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part1_Standard_Big_Bang_and_Shortcomings.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (1)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
  </ul>
</div>

