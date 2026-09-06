---
layout: default
title: "Saha equation and recombination"
---

an analog of BBN at much later times: hydrogen recombination at $T \sim 0.3$ eV ($z \sim 1100$), when free protons and electrons combine into neutral atoms. **photons decouple** from matter at this epoch, and we see them today as the CMB.

---

## the reaction

$$p + e^- \leftrightarrow H + \gamma$$

with the binding energy of hydrogen $B_H = 13.6$ eV.

at high temperatures (early times) the photon density is so large that any neutral atom is photo-ionized. as $T$ drops, recombination becomes possible.

naive expectation: recombination happens at $T \sim B_H = 13.6$ eV. **wrong.** like in BBN, the small $\eta = n_b/n_\gamma$ delays recombination to much lower temperatures.

---

## the Saha equation

at chemical equilibrium for the reaction $p + e \leftrightarrow H + \gamma$, the chemical potentials satisfy:
$$\mu_p + \mu_e = \mu_H$$

(photon chemical potential is zero in equilibrium.) using the equilibrium number densities for a non-relativistic species:
$$n_i = g_i \left(\frac{m_i T}{2\pi}\right)^{3/2} e^{(\mu_i - m_i)/T}$$

substituting and using $m_p + m_e = m_H + B_H$:

$$\boxed{\,\frac{n_e n_p}{n_H} = \left(\frac{m_e T}{2\pi}\right)^{3/2} e^{-B_H/T}\,}$$

(taking $g_p g_e/g_H = 1$ approximately.) this is the **Saha equation**.

---

## the ionization fraction

defining the **ionization fraction**
$$X_e = \frac{n_e}{n_b} = \frac{n_p}{n_b}$$

(with $n_b = n_p + n_H$ the total baryon density) and using $n_b = \eta\, n_\gamma$:

$$\frac{X_e^2}{1 - X_e} = \frac{1}{n_b}\left(\frac{m_e T}{2\pi}\right)^{3/2} e^{-B_H/T}$$

substituting $n_\gamma = (2\zeta(3)/\pi^2) T^3$:

$$\frac{X_e^2}{1 - X_e} = \frac{\sqrt\pi}{4\sqrt 2 \zeta(3)}\, \eta^{-1}\, \left(\frac{m_e}{T}\right)^{3/2} e^{-B_H/T}$$

with $\eta \sim 6 \times 10^{-10}$ extremely small. the entropy factor delays recombination just like in BBN — see [BBN_baryon_to_photon_ratio](../../02_Zettel/Theory/BBN_baryon_to_photon_ratio.html).

---

## when recombination actually happens

setting $X_e = 0.5$ (half the electrons recombined) gives the Saha estimate:
$$T_{\rm rec} \approx \frac{B_H}{|\ln \eta|} \approx \frac{13.6}{20} \approx 0.7\,\text{eV}$$

a more careful treatment (the Saha equation breaks down once recombination is not fast enough — the **freeze-out** of the electron fraction) gives:
$$T_{\rm rec} \approx 0.3\,\text{eV} \quad \Leftrightarrow \quad z_{\rm rec} \sim 1100$$

at this point only $X_e \sim 10^{-3}$ remains free.

contrast this with the naive $T \sim B_H = 13.6$ eV, which would give $z \sim 50000$. the small $\eta$ moves recombination from $z \sim 50000$ down to $z \sim 1100$ — a factor of 50 in redshift, just like the analogous shift from $T \sim B_A$ down to $T \sim 0.1$ MeV in BBN.

---

## photon decoupling

just before recombination, photons scatter off free electrons via Thomson scattering with a rate
$$\Gamma_\gamma = n_e \sigma_T c$$

while $\Gamma_\gamma \gg H$, photons are tightly coupled to baryons in a single fluid. when recombination depletes $n_e$ by orders of magnitude, $\Gamma_\gamma$ drops below $H$ — and **photons decouple**.

the **last scattering surface** at $z \sim 1100$ is what we see today as the CMB.

---

## why recombination happens *after* $T < B_H$ even though $T \approx B_H$ would energetically suffice

same logic as BBN: there are about $10^9$ photons per baryon. even when the temperature is well below the binding energy of hydrogen, a tiny fraction of high-energy photons in the Wien tail can still ionize hydrogen. you need $T$ low enough that this Wien-tail population is suppressed below the (small) baryon density. this happens at $T \sim B_H/|\ln\eta|$, which is much lower than $B_H$ itself.

the same reasoning explains why nuclei in BBN form at $T \sim 0.1$ MeV rather than $T \sim B_A = 1$–$8$ MeV. **entropy beats binding energy** in both cases.

---

## why this matters

three crucial consequences:
1. **the CMB blackbody** we observe today is a snapshot of recombination — see [Cosmic_inventory_photons](../../02_Zettel/Theory/Cosmic_inventory_photons.html)
2. **CMB anisotropies** at $\Delta T/T \sim 10^{-5}$ encode the matter perturbations at $z = 1100$, with all the BAO physics imprinted on them — see [Matter power spectrum and BAO](../../02_Zettel/Theory/Matter power spectrum and BAO.html)
3. **after decoupling**, dark matter perturbations grow freely (no photon pressure) and bring forth the cosmic web

the Saha equation fixes the *epoch* of recombination, the *temperature* of the CMB blackbody we observe today, and the *peak position* of the CMB power spectrum.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [BBN_overview](../../02_Zettel/Theory/BBN_overview.html) — same entropy logic, different epoch
- [Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.html)
- [Cosmic_inventory_photons](../../02_Zettel/Theory/Cosmic_inventory_photons.html)
- [Brief thermal history](../../02_Zettel/Theory/Brief thermal history.html)
- [Decoupling and freeze-out](../../02_Zettel/Theory/Decoupling and freeze-out.html)
- [Boltzmann equation in cosmology](../../02_Zettel/Theory/Boltzmann equation in cosmology.html)
- [Baumann_reference](../../02_Zettel/Theory/Baumann_reference.html) — chapter 3.3.3 has the rigorous derivation including freeze-out
