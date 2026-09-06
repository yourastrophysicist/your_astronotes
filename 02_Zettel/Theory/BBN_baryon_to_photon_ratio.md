---
layout: default
title: "BBN_baryon_to_photon_ratio"
---

a critical cosmological number for nucleosynthesis: the **baryon-to-photon ratio**
$$\eta \equiv \frac{n_N}{n_\gamma}$$

(where $n_N$ is the total nucleon number density and $n_\gamma$ the photon number density.)

---

## present-day value

a simple estimate gives $n_N = 1.38 \times 10^{-5}\,(\Omega_{0b} h^2)$ cm$^{-3}$ today, where $\Omega_{0b}$ is the baryon density parameter today.

with the photon number density $n_\gamma = (2\zeta(3)/\pi^2) T^3 \simeq 422$ cm$^{-3}$ at $T_0 = 2.725$ K (see [Cosmic_inventory_photons](../../02_Zettel/Theory/Cosmic_inventory_photons.md)):
$$\boxed{\,\eta = \frac{n_N}{n_\gamma} = 2.68 \times 10^{-8}\, (\Omega_{0b} h^2) \quad \text{today}\,}$$

with Planck's $\Omega_b h^2 \approx 0.0224$, this gives
$$\eta \approx 6 \times 10^{-10}$$

so the universe contains **about one nucleon per billion photons**. it is overwhelmingly photon-dominated by number.

![bbn-12](../../assets/images/bbn-12.png)

---

## why $\eta$ is approximately constant in time

the entropy density of the universe is
$$s = \frac{2\pi^2}{45}\, g_{*s}(T)\, T^3$$

so it scales like the number density of relativistic particles:
$$s = 1.8\, g_{*s}(T)\, n_\gamma$$

the quantity $n_N/s$ is just the *baryon number per comoving volume*, conserved unless something violates baryon number. so:
$$\eta = \frac{n_N}{n_\gamma} = 1.8\, g_{*s}(T) \cdot \frac{n_N}{s}$$

is **not strictly constant** in time, because $g_{*s}$ changes when species become non-relativistic and dump entropy into the rest of the plasma.

it **is** constant after $e^\pm$ annihilation (which transfers $e^\pm$ entropy to photons at $T \sim m_e/3 \sim 0.5$ MeV). after that, $g_{*s} = $ const and $n_\gamma \propto a^{-3}$ rigorously, so $n_N/n_\gamma$ is conserved.

since BBN happens at $T \sim 0.3$–$0.1$ MeV (well after $e^\pm$ annihilation), we can treat $\eta$ as a constant equal to its present value during all of BBN.

![bbn-13](../../assets/images/bbn-13.png)

![bbn-14](../../assets/images/bbn-14.png)

---

## why the small $\eta$ delays nucleosynthesis

the NSE mass fractions (see [BBN_NSE_initial_conditions](../../02_Zettel/Theory/BBN_NSE_initial_conditions.md)) scale as
$$X_A \propto \eta^{A-1}$$

so for $\eta \sim 10^{-10}$:
- D ($A = 2$): $X_2 \propto \eta \sim 10^{-10}$ — tiny suppression even when $T \ll B_D$
- $^4$He ($A = 4$): $X_4 \propto \eta^3 \sim 10^{-30}$ — incredibly suppressed at high T
- $^{12}$C ($A = 12$): $X_{12} \propto \eta^{11} \sim 10^{-110}$ — utterly negligible

→ **even when temperatures fall well below the binding energies, abundances stay tiny because of the small $\eta$.**

despite the binding energies being 1–8 MeV, the NSE abundances of nuclear species reach order unity only well below those binding energies, around 0.3 MeV. this is **due to the very high entropy of the universe** (small $\eta$), not the small binding energy of deuterium directly.

a quick estimate: nucleosynthesis is order unity for species $A$ at the temperature
$$T_{\rm NUCL} \approx \frac{B_A/(A - 1)}{\ln(\eta^{-1}) + 1.5\ln(m_N/T)}$$

so for D one finds $T_{\rm NUCL} \approx 0.07$ MeV; for $^3$He, 0.11 MeV; for $^4$He, 0.28 MeV. all far below the corresponding binding energies.

---

## $\eta$ as the master cosmological parameter for BBN

$\eta$ controls:
- when each light element starts to form ($T_{\rm NUCL}$ above)
- the final abundance of each light element ($X_A \propto \eta^{A-1}$)
- the predictions for D/H, $^3$He/H, $^4$He/H, $^7$Li/H

so measuring any one of those abundances precisely fixes $\eta$ — and hence $\Omega_b h^2$. this is method 3 in [Cosmic_inventory_baryons](../../02_Zettel/Theory/Cosmic_inventory_baryons.md).

agreement of $\Omega_b h^2$ from BBN with $\Omega_b h^2$ from CMB peaks is one of the great validations of the standard model.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md)
- [BBN_overview](../../02_Zettel/Theory/BBN_overview.md)
- [BBN_NSE_initial_conditions](../../02_Zettel/Theory/BBN_NSE_initial_conditions.md)
- [BBN_neutron_proton_ratio](../../02_Zettel/Theory/BBN_neutron_proton_ratio.md)
- [Cosmic_inventory_baryons](../../02_Zettel/Theory/Cosmic_inventory_baryons.md)
- [Cosmic_inventory_photons](../../02_Zettel/Theory/Cosmic_inventory_photons.md)
- [Conservation of entropy in a comoving volume](../../02_Zettel/Theory/Conservation of entropy in a comoving volume.md)
