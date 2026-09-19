---
layout: "default"
title: "Cosmic_inventory_neutrinos"
---
cosmic neutrinos are a thermal background of relic neutrinos, analogous to the CMB. **the cosmic neutrino background (CνB) has not been directly observed yet**, because the cross-section for detecting non-relativistic neutrinos with energies $\sim k_B T_\nu \sim 10^{-4}$ eV is absurdly small.

what we *do* know:
- solar and atmospheric neutrinos have been observed, revealing **neutrinos have nonzero masses**
- at least two of the three species are non-relativistic today
- they are **fermions**, weakly interacting

even though we cannot detect the CνB directly, neutrinos leave specific imprints on the CMB and on small-scale structure formation. these imprints constrain neutrino properties.

![intro-29.png](../../assets/images/intro-29.png)

---

## decoupling

at very early times, neutrinos were in thermal equilibrium with the rest of the plasma through weak interactions:
$$\nu + e^- \leftrightarrow \nu + e^-, \quad \nu + \bar\nu \leftrightarrow e^+ + e^-, \quad \dots$$

the weak interaction rate scales as $\Gamma_w \propto T^5$, while the Hubble expansion rate scales as $H \propto T^2$ in the radiation era. so the ratio:
$$\frac{\Gamma_w}{H} \sim \left(\frac{T}{1\,\text{MeV}}\right)^3$$

this falls below 1 at $T \sim 1$ MeV: neutrinos **decouple** at this temperature. after that they free-stream, no longer in thermal contact with the rest of the plasma.

---

## the temperature offset $T_\nu/T_\gamma$

shortly after neutrino decoupling, at $T \sim m_e/3$, electrons and positrons annihilate. their entropy is dumped into photons but **not** into neutrinos (which are already decoupled). this raises the photon temperature relative to the neutrino temperature:

conservation of entropy in a comoving volume gives
$$T_\nu = \left(\frac{4}{11}\right)^{1/3} T_\gamma$$

so today, with $T_\gamma = 2.725$ K, we expect
$$T_\nu \approx 1.95~\text{K}$$

(see [Conservation of entropy in a comoving volume](Conservation%20of%20entropy%20in%20a%20comoving%20volume.html) for the derivation.)

the neutrino number density today is then
$$n_\nu = \frac{3}{4} \times \frac{4}{11} n_\gamma = \frac{3}{11} n_\gamma \approx 115~\text{cm}^{-3}$$ per species.

---

## constraints on the neutrino mass

neutrinos that are non-relativistic today contribute to the matter budget. their effect on structure formation is to **suppress small-scale power**: free-streaming washes out perturbations on scales smaller than the neutrino's free-streaming length, which depends on the mass.

so combining CMB anisotropies + lensing + BAO constrains $\sum m_\nu$:

$$\boxed{\,\sum m_\nu < 0.12\,\text{eV} \quad (95\%\,\text{CL})\,}$$
$$\boxed{\,\Omega_\nu h^2 < 0.0012\,(95\%\,\text{CL})\,}$$

(Planck 2018 + lensing + BAO.)

three light neutrino species are assumed (the standard model count). additional sterile neutrino species would change $g_*$ during BBN and the CMB era, providing complementary constraints — see [BBN_predictions](BBN_predictions.html).

---

## why neutrinos matter for cosmology

even though their contribution to $\Omega$ is small, neutrinos:
- imprint a specific fingerprint on the **CMB damping tail** (high-$\ell$ region of the power spectrum)
- suppress power on scales smaller than their **free-streaming length**, leaving a measurable feature in the matter power spectrum
- contribute to $g_*$ during BBN, thereby influencing the n/p freeze-out and primordial $^4$He abundance (see [BBN_predictions](BBN_predictions.html))
- if any single neutrino is heavier than $\sim 0.1$ eV, it is non-relativistic today and contributes to $\Omega_m$

upcoming experiments (CMB-S4, Euclid, DESI, LiteBIRD) aim to push the bound on $\sum m_\nu$ down to $\sim 0.02$ eV, which would actually *measure* the neutrino mass scale (since the inverted hierarchy demands $\sum m_\nu \gtrsim 0.1$ eV). this is one of the most exciting cosmological measurements coming in the next decade.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Cosmic_inventory_overview](Cosmic_inventory_overview.html)
- [Decoupling and freeze-out](Decoupling%20and%20freeze-out.html)
- [Conservation of entropy in a comoving volume](Conservation%20of%20entropy%20in%20a%20comoving%20volume.html)
- [BBN_predictions](BBN_predictions.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Conservation%20of%20entropy%20in%20a%20comoving%20volume.html" class="backlink-item">Conservation of entropy in a comoving volume</a></li>
    <li class="backlink-item-wrap"><a href="Cosmic_inventory_overview.html" class="backlink-item">Cosmic_inventory_overview</a></li>
    <li class="backlink-item-wrap"><a href="Cosmic_inventory_photons_derivation.html" class="backlink-item">Cosmic_inventory_photons_derivation</a></li>
    <li class="backlink-item-wrap"><a href="Decoupling.html" class="backlink-item">Decoupling</a></li>
    <li class="backlink-item-wrap"><a href="Hot%20vs%20cold%20dark%20matter.html" class="backlink-item">Hot vs cold dark matter</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
  </ul>
</div>

