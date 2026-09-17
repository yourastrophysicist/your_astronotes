---
layout: "default"
title: "Saha equation and recombination"
---
{% raw %}
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

with $\eta \sim 6 \times 10^{-10}$ extremely small. the entropy factor delays recombination just like in BBN — see [BBN_baryon_to_photon_ratio](./BBN_baryon_to_photon_ratio.html).

---

## when recombination actually happens

setting $X_e = 0.5$ (half the electrons recombined) gives the Saha estimate:
$$T_{\rm rec} \approx \frac{B_H}{\lvert \ln \eta\rvert} \approx \frac{13.6}{20} \approx 0.7\,\text{eV}$$

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

same logic as BBN: there are about $10^9$ photons per baryon. even when the temperature is well below the binding energy of hydrogen, a tiny fraction of high-energy photons in the Wien tail can still ionize hydrogen. you need $T$ low enough that this Wien-tail population is suppressed below the (small) baryon density. this happens at $T \sim B_H/\lvert \ln\eta\rvert$, which is much lower than $B_H$ itself.

the same reasoning explains why nuclei in BBN form at $T \sim 0.1$ MeV rather than $T \sim B_A = 1$–$8$ MeV. **entropy beats binding energy** in both cases.

---

## why this matters

three crucial consequences:
1. **the CMB blackbody** we observe today is a snapshot of recombination — see [Cosmic_inventory_photons](./Cosmic_inventory_photons.html)
2. **CMB anisotropies** at $\Delta T/T \sim 10^{-5}$ encode the matter perturbations at $z = 1100$, with all the BAO physics imprinted on them — see [Matter power spectrum and BAO](./Matter%20power%20spectrum%20and%20BAO.html)
3. **after decoupling**, dark matter perturbations grow freely (no photon pressure) and bring forth the cosmic web

the Saha equation fixes the *epoch* of recombination, the *temperature* of the CMB blackbody we observe today, and the *peak position* of the CMB power spectrum.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [BBN_overview](./BBN_overview.html) — same entropy logic, different epoch
- [Photon decoupling and CMB](./Photon%20decoupling%20and%20CMB.html)
- [Cosmic_inventory_photons](./Cosmic_inventory_photons.html)
- [Brief thermal history](./Brief%20thermal%20history.html)
- [Decoupling and freeze-out](./Decoupling%20and%20freeze-out.html)
- [Boltzmann equation in cosmology](./Boltzmann%20equation%20in%20cosmology.html)
- [Baumann_reference](./Baumann_reference.html) — chapter 3.3.3 has the rigorous derivation including freeze-out
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (19)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./BBN_overview.html" class="backlink-item">BBN_overview</a></li>
    <li class="backlink-item-wrap"><a href="./Baumann_reference.html" class="backlink-item">Baumann_reference</a></li>
    <li class="backlink-item-wrap"><a href="./Boltzmann%20equation%20in%20cosmology.html" class="backlink-item">Boltzmann equation in cosmology</a></li>
    <li class="backlink-item-wrap"><a href="./Brief%20thermal%20history.html" class="backlink-item">Brief thermal history</a></li>
    <li class="backlink-item-wrap"><a href="./CMB%20-%20discovery%20and%20blackbody%20spectrum.html" class="backlink-item">CMB - discovery and blackbody spectrum</a></li>
    <li class="backlink-item-wrap"><a href="./CMB%20Spectral%20Distortions%20-%20What%20They%20Are%20and%20Where%20They%20Come%20From.html" class="backlink-item">CMB Spectral Distortions - What They Are and Where They Come From</a></li>
    <li class="backlink-item-wrap"><a href="./CMB%20power%20spectrum.html" class="backlink-item">CMB power spectrum</a></li>
    <li class="backlink-item-wrap"><a href="./Decoupling.html" class="backlink-item">Decoupling</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Matter%20radiation%20equality.html" class="backlink-item">Matter radiation equality</a></li>
    <li class="backlink-item-wrap"><a href="./Photon%20decoupling%20and%20CMB.html" class="backlink-item">Photon decoupling and CMB</a></li>
    <li class="backlink-item-wrap"><a href="./Recombination.html" class="backlink-item">Recombination</a></li>
    <li class="backlink-item-wrap"><a href="./Reionization.html" class="backlink-item">Reionization</a></li>
    <li class="backlink-item-wrap"><a href="./Saha%20ionisation%20equation.html" class="backlink-item">Saha ionisation equation</a></li>
    <li class="backlink-item-wrap"><a href="./Spectroscopic%20determination%20of%20log%20g.html" class="backlink-item">Spectroscopic determination of log g</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20spectral%20types%20OBAFGKM.html" class="backlink-item">Stellar spectral types OBAFGKM</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Transition%20epochs.html" class="backlink-item">Transition epochs</a></li>
  </ul>
</div>
