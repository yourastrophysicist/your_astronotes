---
layout: "default"
title: "Dark matter thermal freeze-out and Lee-Weinberg bound"
---
# Dark matter thermal freeze-out and Lee-Weinberg bound

> *the statistical mechanics of chemical decoupling, and the WIMP miracle for cold dark matter.*

---

## core physical intuition

In the early universe, dark matter particles $\chi$ were in thermal and chemical equilibrium with the primordial plasma through continuous annihilation and pair-production reactions $\chi\bar{\chi} \leftrightarrow f\bar{f}$.

As the universe expanded and cooled below the particle's mass ($T < m_\chi$), pair creation ceased, and the equilibrium abundance dropped exponentially ($e^{-m_\chi/T}$). Eventually, the expansion rate $H$ diluted the particles so severely that they could no longer find each other to annihilate ($\Gamma_{\rm ann} \sim H$). At this point, the particle abundance "froze out", leaving a constant relic density today.

---

## key derivation & equations

The number density $n_\chi$ obeys the **Boltzmann transport equation**:
$$\frac{dn_\chi}{dt} + 3H n_\chi = -\langle\sigma v\rangle \left( n_\chi^2 - (n_\chi^{\rm eq})^2 \right)$$

In terms of comoving abundance $Y \equiv n_\chi/s$ and $x \equiv m_\chi/T$:
$$\frac{dY}{dx} = -\frac{\lambda \langle\sigma v\rangle}{x^2}\left( Y^2 - Y_{\rm eq}^2 \right)$$
where $\lambda \equiv \frac{s(m_\chi)}{H(m_\chi)} \propto M_{\rm Pl} m_\chi$.

Freeze-out occurs at $x_f \approx 20 - 30$. The present-day relic density is:
$$\Omega_\chi h^2 \approx \frac{1.07 \times 10^9\text{ GeV}^{-1}}{M_{\rm Pl} \sqrt{g_*}} \frac{x_f}{\langle\sigma v\rangle} \approx \frac{3 \times 10^{-27}\text{ cm}^3/\text{s}}{\langle\sigma v\rangle}$$

### The Lee-Weinberg bound (1977)
For a heavy neutral stable lepton (or neutrino) annihilating via standard Fermi weak interactions:
$$\langle\sigma v\rangle \sim G_F^2 m_\chi^2$$
The relic density scales as:
$$\Omega_\chi h^2 \propto \frac{1}{G_F^2 m_\chi^2}$$
Requiring $\Omega_\chi h^2 \le \Omega_{\rm DM} h^2 \approx 0.12$ yields a lower bound on the mass:
$$m_\chi \gtrsim 2 - 5\text{ GeV}$$
Any thermal relic lighter than a few GeV would overclose the universe unless it has non-standard annihilation channels.

---

## astrophysical context

* Direct detection experiments (XENONnT, LUX-ZEPLIN, PandaX).
* Indirect detection of annihilation products in galactic centers (Fermi-LAT, CTA).

---

## connections & zettel links

* parent moc: [[Cosmology_of_the_Early_Universe_MOC]]
* related zettels:
  - [[Hot versus cold dark matter in the early universe]]
  - [[Non-thermal dark matter relics and axion misalignment]]
  - [[Part6_Reheating_Baryogenesis_and_Dark_Matter]]



## Linked References

- [[Hot versus cold dark matter in the early universe]]
- [[Non-thermal dark matter relics and axion misalignment]]
- [[Reheating dynamics and thermalization]]
- [[Cosmology_of_the_Early_Universe_MOC]]


