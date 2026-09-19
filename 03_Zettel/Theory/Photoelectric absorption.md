---
layout: "default"
title: "Photoelectric absorption"
---
# X-ray Photoelectric Absorption

In the complex [refractive index](Grazing%20incidence.html) of a material:
$$n = 1 - \delta + i\beta$$
the imaginary part $\beta$ is directly related to **photoelectric absorption**.  
It describes how X-ray photons are attenuated as they travel through matter.

---

## The Physical Process

A photon is **completely absorbed** by a bound electron in an atom.  
The electron is ejected as a **photoelectron** with kinetic energy:
$$E_{kin} = E_{ph} - E_{bind}$$
where $E_{bind}$ is the binding energy of the electron in its shell (K, L, M...).

This can only happen when:
$$E_{ph} \geq E_{bind}$$
![Screenshot 2026-04-07 at 01.20.24.png](../../assets/images/Screenshot%202026-04-07%20at%2001.20.24.png)
---

## Cross-Section

The photoelectric absorption cross-section depends strongly on photon energy and atomic number:
$$\sigma_{ph} \propto \frac{Z^n}{E^3}$$
with $n \approx 4$–$5$.

Key implications:
- **Low energy** → absorption is very strong (high $\sigma$)
- **High energy** → absorption becomes negligible
- **Heavy elements** (high $Z$) → absorb much more than light ones

This is why **soft X-rays** ($\lesssim 1$ keV) are almost completely absorbed by the ISM and telescope optics, while **hard X-rays** penetrate further.

---

## Absorption Edges

The cross-section is **not smooth** — it shows sharp discontinuities called **absorption edges** at energies corresponding to the binding energies of each electron shell.

- Just **below** the edge: photon energy is insufficient to eject the electron → low absorption
- Just **above** the edge: photoionization becomes possible → cross-section jumps up
- **K-edge** (innermost shell) is the most prominent

After each edge, $\sigma_{ph}$ drops as $E^{-3}$ until the next edge.
![Screenshot 2026-04-07 at 01.21.02.png](../../assets/images/Screenshot%202026-04-07%20at%2001.21.02.png)
---

## Relation to the Refractive Index

The real and imaginary parts of $n$ are linked via the **Kramers-Kronig relations**.  
In practice:
$$\beta = \frac{\lambda}{4\pi} \mu$$
where $\mu$ is the **linear absorption coefficient** of the material.

This connects the macroscopic optical constant $\beta$ to the microscopic cross-section $\sigma_{ph}$:
$$\mu = n_{atoms} \cdot \sigma_{ph}$$

---

## Importance for X-ray Telescopes

Because photoelectric absorption is dominant at low X-ray energies:
- Mirror coatings (e.g. Au, Ir, Pt) are chosen for **low $\beta$** to minimize absorption and maximize reflectivity
- The **critical angle** $\theta_c \approx \sqrt{2\delta}$ sets the grazing incidence limit, but $\beta$ determines how much intensity is lost even below $\theta_c$
- Detectors like [CCDs](CCDs%20for%20X-rays.html) exploit photoelectric absorption: the incoming photon liberates a charge cloud proportional to $E_{ph}$

---

## Summary

| Property        | Dependence                                 |
| --------------- | ------------------------------------------ |
| Cross-section   | $\sigma_{ph} \propto Z^{4\text{–}5}/E^3$   |
| Dominant regime | Soft X-rays, $E \lesssim$ few keV          |
| Signature       | Absorption edges at shell binding energies |
| Role in $n$     | Encoded in imaginary part $\beta$          |

> **Exam tip:** photoelectric absorption is the *dominant* photon-matter interaction at X-ray energies below ~100 keV, above which Compton scattering takes over. See [Compton scattering and pair production](Compton%20scattering%20and%20pair%20production.html).

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (11)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Atmospheric%20transmission.html" class="backlink-item">Atmospheric transmission</a></li>
    <li class="backlink-item-wrap"><a href="Compton%20scattering%20and%20pair%20production.html" class="backlink-item">Compton scattering and pair production</a></li>
    <li class="backlink-item-wrap"><a href="Continuum%20opacity%20sources.html" class="backlink-item">Continuum opacity sources</a></li>
    <li class="backlink-item-wrap"><a href="Grazing%20incidence.html" class="backlink-item">Grazing incidence</a></li>
    <li class="backlink-item-wrap"><a href="Luminosity%20and%20Flux%20for%20-Instrumentations.html" class="backlink-item">Luminosity and Flux for -Instrumentations</a></li>
    <li class="backlink-item-wrap"><a href="Optical%20depth.html" class="backlink-item">Optical depth</a></li>
    <li class="backlink-item-wrap"><a href="Other%20detectors.html" class="backlink-item">Other detectors</a></li>
    <li class="backlink-item-wrap"><a href="Photoionization%20rate.html" class="backlink-item">Photoionization rate</a></li>
    <li class="backlink-item-wrap"><a href="Processes%20of%20photon-matter%20interaction.html" class="backlink-item">Processes of photon-matter interaction</a></li>
    <li class="backlink-item-wrap"><a href="interf/Atmospheric%20transmission.html" class="backlink-item">Atmospheric transmission</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Lab_High-Energy_MOC.html" class="backlink-item">Lab_High-Energy_MOC</a></li>
  </ul>
</div>

