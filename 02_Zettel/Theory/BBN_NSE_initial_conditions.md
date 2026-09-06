---
layout: default
title: "BBN_NSE_initial_conditions"
---

at the beginning of nucleosynthesis ($T \gg 1$ MeV), the various nuclear species are in **nuclear statistical equilibrium** (NSE) — both kinetic equilibrium (Maxwell-Boltzmann velocity distributions) and chemical equilibrium (mass-action relations among the chemical potentials).

we are interested in particular in the n/p ratio, which is fixed at the beginning by its equilibrium value. the conditions for NSE will hold until the rates that maintain it become smaller than the expansion rate $H$ (see [Decoupling and freeze-out](../../02_Zettel/Theory/Decoupling and freeze-out.html)).

<img src="{{ "/assets/images/bbn-06.png" | relative_url }}" alt="bbn-06" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## kinetic equilibrium

the number density of a non-relativistic species of mass number $A$ and $Z$ protons:
$$n_A = g_A \left(\frac{m_A T}{2\pi}\right)^{3/2}\, e^{(\mu_A - m_A)/T} \qquad (1)$$

(this is just the Maxwell-Boltzmann limit of the equilibrium distribution.) this applies to neutrons and protons too.

---

## chemical equilibrium

if the formation reactions occur rapidly compared to $H$, then chemical equilibrium also holds:
$$\mu_A = Z\mu_p + (A - Z)\mu_n \qquad (2)$$

this is the mass-action law for nuclear reactions: the chemical potential of a compound nucleus equals the sum of the constituent nucleon chemical potentials.

---

## eliminating chemical potentials

from (2):
$$e^{\mu_A/T} = (e^{\mu_p/T})^Z (e^{\mu_n/T})^{A-Z} \qquad (3)$$

inverting equation (1) for protons and neutrons themselves:
$$e^{\mu_p/T} = (n_p/g_p)(2\pi/m_p T)^{3/2}\, e^{m_p/T} \qquad (4)$$

similarly for neutrons. substituting both into (3):
$$e^{\mu_A/T} = (n_p/g_p)^Z (n_n/g_n)^{A-Z}\, (2\pi/m_p T)^{3Z/2}\, (2\pi/m_n T)^{3(A-Z)/2}\, e^{(Zm_p + (A-Z)m_n)/T} \qquad (5)$$

<img src="{{ "/assets/images/bbn-08.png" | relative_url }}" alt="bbn-08" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

<img src="{{ "/assets/images/bbn-09.png" | relative_url }}" alt="bbn-09" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## taking $g_p = g_n = 2$ and $m_p \approx m_n \approx m_N \approx m_A/A$

in the prefactor (not the exponential, which is much more sensitive):

$$e^{\mu_A/T} = 2^{-A}(n_p)^Z(n_n)^{A-Z}\,(2\pi/m_N T)^{3A/2}\, e^{(Zm_p + (A-Z)m_n)/T} \qquad (6)$$

substituting (6) into the original equation (1) and using the binding energy
$$B_A = Z m_p + (A - Z) m_n - m_A$$

we get the **master NSE expression**:

$$\boxed{\,n_A = g_A\, A^{3/2}\, 2^{-A}\, (n_p)^Z (n_n)^{A-Z}\, (2\pi/m_N T)^{(3/2)(A-1)}\, e^{B_A/T}\,} \qquad (7)$$

the exponential factor $e^{B_A/T}$ is the binding-energy enhancement we expect; the prefactors carry the kinematic (volume of phase space) information.

<img src="{{ "/assets/images/bbn-10.png" | relative_url }}" alt="bbn-10" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## mass fractions

quantify abundances using the total nucleon density:
$$n_N = n_p + n_n + \sum_i (A n_A)_i$$

and the **mass fraction** of nuclear species $A(Z)$:
$$X_A = \frac{A\, n_A}{n_N}$$

with $\sum_i X_i = 1$. this is the cleanest way to compare predictions to observations.

<img src="{{ "/assets/images/bbn-11.png" | relative_url }}" alt="bbn-11" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## $X_A$ in terms of $X_n$, $X_p$, and $\eta$

starting from (7) and using the baryon-to-photon ratio $\eta = n_N/n_\gamma$ (see [BBN_baryon_to_photon_ratio](../../02_Zettel/Theory/BBN_baryon_to_photon_ratio.html)) plus $n_\gamma = 2\zeta(3)/\pi^2 \cdot T^3$:

$$X_A = g_A\,[\zeta(3)^{A-1}\, 2^{(3A-5)/2}\, \pi^{(1-A)/2}]\, A^{5/2}\, (T/m_N)^{(3/2)(A-1)}\, (X_p)^Z (X_n)^{A-Z}\, e^{B_A/T}\, \eta^{A-1}$$

so $X_A \propto \eta^{A-1}$ — a strong dependence on the baryon-to-photon ratio for heavier species.

<img src="{{ "/assets/images/bbn-15.png" | relative_url }}" alt="bbn-15" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## why this matters

the NSE expression (7) is the **starting point** for primordial nucleosynthesis. as long as $T \gg 1$ MeV, all species sit at their NSE values and the n/p ratio tracks equilibrium. as soon as the weak rates fall behind expansion, the n/p ratio freezes — see [BBN_neutron_proton_ratio](../../02_Zettel/Theory/BBN_neutron_proton_ratio.html) — and the abundances depart from NSE.

so this section sets the *initial conditions* for the dynamical departure from equilibrium that produces the actual BBN abundances we observe.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [BBN_overview](../../02_Zettel/Theory/BBN_overview.html)
- [BBN_baryon_to_photon_ratio](../../02_Zettel/Theory/BBN_baryon_to_photon_ratio.html)
- [BBN_neutron_proton_ratio](../../02_Zettel/Theory/BBN_neutron_proton_ratio.html)
- [Thermal equilibrium in the early universe](../../02_Zettel/Theory/Thermal equilibrium in the early universe.html)
- [Decoupling and freeze-out](../../02_Zettel/Theory/Decoupling and freeze-out.html)
