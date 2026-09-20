---
layout: "default"
title: "Non-thermal dark matter relics and axion misalignment"
---
# Non-thermal dark matter relics and axion misalignment

> *how cold dark matter can be composed of extremely light bosons born non-thermally through vacuum misalignment.*

---

## core physical intuition

Not all dark matter is produced by thermal freeze-out. Particles with extremely weak couplings never reach thermal equilibrium in the early universe. The premier example is the **QCD axion**, a pseudo-Nambu-Goldstone boson arising from the Peccei-Quinn solution to the Strong CP problem.

Despite having an extraordinarily tiny mass ($m_a \sim 10^{-5}\text{ eV}$), axions behave as **Cold Dark Matter**. They are created non-thermally as a zero-momentum coherent Bose-Einstein condensate through the **vacuum misalignment mechanism** when the QCD vacuum barrier turns on.

---

## key derivation & equations

The axion field $a(t)$ has a periodic potential:
$$V(a) \approx m_a^2(T) f_a^2 \left[ 1 - \cos\left(\frac{a}{f_a}\right) \right] \approx \frac{1}{2} m_a^2(T) a^2$$
where $f_a$ is the Peccei-Quinn symmetry breaking scale.

At high temperatures ($T \gg \Lambda_{\rm QCD}$), the axion mass is zero, and the field has a random initial misalignment angle $\theta_i = a_i/f_a \in [-\pi, \pi]$.
As the universe cools to $T \sim 1\text{ GeV}$, QCD instantons turn on the temperature-dependent mass $m_a(T)$.

The Klein-Gordon equation is:
$$\ddot{\theta} + 3H(T)\dot{\theta} + m_a^2(T)\sin\theta = 0$$

Coherent oscillations begin when the Hubble friction drops to the mass:
$$3 H(T_{\rm osc}) \approx m_a(T_{\rm osc})$$
After this epoch, the number of axions in a comoving volume is conserved, and the oscillating condensate behaves as pressureless matter ($w = 0$).

The present-day relic abundance is:
$$\Omega_a h^2 \approx 0.12 \left(\frac{f_a}{10^{12}\text{ GeV}}\right)^{1.17} \theta_i^2 \approx 0.12 \left(\frac{10\text{ }\mu\text{eV}}{m_a}\right)^{1.17} \theta_i^2$$

---

## astrophysical context

* Axion haloscope searches (ADMX, HAYSTAC, QUAX in Padova).
* Axion-like particles (ALPs) as dark matter and cosmological birefringence probes.

---

## connections & zettel links

* parent moc: [[Cosmology_of_the_Early_Universe_MOC]]
* related zettels:
  - [[Hot versus cold dark matter in the early universe]]
  - [[Dark matter thermal freeze-out and Lee-Weinberg bound]]
  - [[Part6_Reheating_Baryogenesis_and_Dark_Matter]]



## Linked References

- [[Dark matter thermal freeze-out and Lee-Weinberg bound]]
- [[Hot versus cold dark matter in the early universe]]
- [[Cosmology_of_the_Early_Universe_MOC]]


