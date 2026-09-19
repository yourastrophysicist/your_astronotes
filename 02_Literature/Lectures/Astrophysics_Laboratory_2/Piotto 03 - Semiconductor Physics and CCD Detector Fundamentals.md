---
layout: "default"
title: "Piotto 03 - Semiconductor Physics and CCD Detector Fundamentals"
---
# Piotto 03 — Semiconductor Physics and CCD Detector Fundamentals

*Astrophysics Laboratory 2, Prof. Giampaolo Piotto (Lecture 08/10/2025)*  
*Index: [Astrophysics_Laboratory_2_MOC](../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html)*

---

## Detector Classifications in Optical and Near-IR Astronomy

Astronomical detectors transform incident photon flux into digitized electronic signals (Analog-to-Digital Units, ADU). Detectors fall into two primary physical categories:
1. **Photon Counting Devices**: detect individual photon arrivals with negligible read noise (e.g., photomultiplier tubes, avalanche photodiodes, microchannel plates). Limited dynamic range due to dead time.
2. **Integrating Charge-Coupled Devices (CCDs)**: accumulate photo-generated electrons in potential wells over a fixed exposure time before sequential readout. Dominates optical and near-IR astronomy due to high quantum efficiency, wide dynamic range, and pixel format scalability.

---

## Semiconductor Solid-State Physics

Silicon is an intrinsic semiconductor with diamond lattice structure. The electrical conductivity is governed by the energy band gap between the valence band and the conduction band:
$$E_g = 1.12\text{ eV at } T = 300\text{ K}, \quad E_g = 1.17\text{ eV at } T = 77\text{ K}$$

### Photoelectric Absorption in Silicon
An incoming photon with energy $E_{ph} = h\nu = hc/\lambda$ can excite an electron from the valence band to the conduction band if:
$$E_{ph} \ge E_g \implies \lambda \le \lambda_c = \frac{hc}{E_g} \approx 1100\text{ nm}$$
- Photons with $\lambda > 1100\text{ nm}$ pass through silicon without absorption (silicon becomes transparent in the infrared).
- Photons with high energy (UV / X-ray) can generate multiple electron-hole pairs ($N_e = E_{ph} / w$, with $w \approx 3.65\text{ eV}$ in Si).

---

## The MOS Capacitor: Pixel Architecture

The fundamental building block of a CCD pixel is the Metal-Oxide-Semiconductor (MOS) capacitor:
- Substrate: p-type silicon doped with boron (acceptor atoms, majority carriers are holes).
- Insulator: thin silicon dioxide ($SiO_2$) dielectric layer ($\,\sim 100\text{ nm}$).
- Gate electrode: polysilicon conductive strip.

### Potential Well and Charge Collection
Applying a positive voltage ($+V$) to the polysilicon gate repels majority holes from the $Si-SiO_2$ interface, creating a **depletion region**:
$$\psi(x) = \frac{q N_A}{2\epsilon_{\text{Si}}} (x - x_d)^2$$
This forms an electrostatic **potential well** where photo-generated minority electrons are trapped.
- **Full Well Capacity**: maximum charge $Q_{\text{max}}$ a pixel can accumulate before the potential barrier collapses:
$$N_{\text{well}} \approx \frac{C_{\text{ox}} A_{\text{pix}} (V_{\text{gate}} - V_{\text{pinned}})}{q} \sim 10^5 - 2 \times 10^5 e^-$$
- **Blooming**: when $N_e > N_{\text{well}}$, excess charge spills over channel stops along columns, ruining adjacent pixels.

---

## Three-Phase Charge Transfer Mechanism

Charge packets are transferred across the chip using a three-phase clocking scheme:
- Each pixel consists of three gate electrodes (Phase 1: $\phi_1$, Phase 2: $\phi_2$, Phase 3: $\phi_3$).
- Clocking sequence:
	1. Hold charge under $\phi_1$ ($+10\text{ V}$ on $\phi_1$, $0\text{ V}$ on $\phi_2, \phi_3$).
	2. Apply $+10\text{ V}$ to $\phi_2$ while keeping $\phi_1$ high; the potential well broadens across both gates and charge diffuses across.
	3. Drop $\phi_1$ to $0\text{ V}$; charge is pushed entirely under $\phi_2$.
	4. Repeat for $\phi_2 \to \phi_3$ and $\phi_3 \to \phi_1$.

### Charge Transfer Efficiency (CTE)
Fraction of charge successfully shifted to the adjacent electrode:
$$\text{CTE} \ge 0.99999 \quad (99.999\%)$$
Total charge preservation after $N_{\text{transfers}}$ transfers:
$$Q_{\text{final}} = Q_0 (\text{CTE})^{N_{\text{transfers}}} \approx Q_0 (1 - N_{\text{transfers}} \cdot \text{CTI})$$
where $\text{CTI} = 1 - \text{CTE}$ is the Charge Transfer Inefficiency.
For a $2048 \times 2048$ pixel CCD, corner pixels undergo $\sim 4000$ transfers; high CTE is necessary to prevent trailing and photometric degradation.

---

## Readout Architecture

1. **Parallel Register**: 2D pixel array where light is integrated; shifted row-by-row into the serial register.
2. **Serial Register**: single horizontal row shielded from light; shifts pixel charges rapidly toward the output amplifier.
3. **Output Sense Node & Source Follower**:
	- Charge packet charges an on-chip capacitor $C_g$.
	- Voltage step: $\Delta V = q N_e / C_g$ (typically $1?5\, \mu\text{V} / e^-$).
	- Source follower Field Effect Transistor (FET) buffers the voltage to off-chip electronics.
	- Reset transistor restores the sense node to reference voltage $V_{\text{ref}}$ before the next pixel arrives.

---

## Related Notes
- [CCD Readout Noise and Output Amplifier](../../../03_Zettel/Observations/CCD%20Readout%20Noise%20and%20Output%20Amplifier.html)
- [CCD Dark Current and Thermal Generation](../../../03_Zettel/Observations/CCD%20Dark%20Current%20and%20Thermal%20Generation.html)
- [Full Well Capacity and Charge Saturation](../../../03_Zettel/Observations/Full%20Well%20Capacity%20and%20Charge%20Saturation.html)
- [Piotto 04 - CCD Photometry and Noise Characterization](./Piotto%2004%20-%20CCD%20Photometry%20and%20Noise%20Characterization.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Observations/CCD%20Dark%20Current%20and%20Thermal%20Generation.html" class="backlink-item">CCD Dark Current and Thermal Generation</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Observations/Full%20Well%20Capacity%20and%20Charge%20Saturation.html" class="backlink-item">Full Well Capacity and Charge Saturation</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

