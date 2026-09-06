---
layout: default
title: "Heterodyne vs direct detection"
---

# Heterodyne vs direct detection

two fundamentally different ways to combine signals from separated telescopes in an interferometer. **heterodyne** mixes the incoming radio signal with a local oscillator (LO) to bring it down to a manageable intermediate frequency (IF) where complex voltage amplitudes and phases are recorded and correlated electronically. **direct detection** physically combines the optical light waves at a beam splitter to measure photon fringe contrast. radio uses heterodyne; optical/IR uses direct detection.

<img src="{{ "/assets/images/Components_of_a_modern_interferometer.jpg" | relative_url }}" alt="Radio antenna dish array versus optical interferometer beam combination" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

## heterodyne detection (the radio approach)

at each radio dish, the incoming sky signal $V_{\rm RF}(t) = V_0 \cos(2\pi \nu_{\rm RF} t + \phi_{\text{sky}})$ is mixed with a local oscillator (LO) signal $V_{\rm LO}(t) = V_{\text{LO}} \cos(2\pi \nu_{\rm LO} t + \phi_{\text{LO}})$.

### mathematical proof of phase preservation
The non-linear mixer multiplies the two voltage inputs:

$$V_{\rm mix}(t) = V_{\rm RF}(t) \cdot V_{\rm LO}(t) = V_0 V_{\text{LO}} \cos(2\pi \nu_{\rm RF} t + \phi_{\text{sky}}) \cos(2\pi \nu_{\rm LO} t + \phi_{\text{LO}})$$

Using trigonometric product formulas:

$$V_{\rm mix}(t) = \frac{V_0 V_{\text{LO}}}{2} \left[ \cos(2\pi (\nu_{\rm RF} - \nu_{\rm LO}) t + (\phi_{\text{sky}} - \phi_{\text{LO}})) + \cos(2\pi (\nu_{\rm RF} + \nu_{\rm LO}) t + (\phi_{\text{sky}} + \phi_{\text{LO}})) \right]$$

A low-pass filter removes the high-frequency sum term ($\nu_{\rm RF} + \nu_{\rm LO}$), leaving the **Intermediate Frequency (IF)** signal:

$$V_{\rm IF}(t) = V_{\text{IF}} \cos(2\pi \nu_{\rm IF} t + \Delta\phi), \quad \text{where } \nu_{\rm IF} = |\nu_{\rm RF} - \nu_{\rm LO}|, \quad \Delta\phi = \phi_{\text{sky}} - \phi_{\text{LO}}$$

**Key Physical Result**: Downconversion reduces the signal frequency from GHz to MHz/GHz range while **100% preserving the sky phase $\phi_{\text{sky}}$ and amplitude $V_0$**.

- **Electronic Correlation**: Each antenna independently digitizes $V_{\rm IF}(t)$. The digital data streams are shipped (or transmitted over fiber) to a central digital correlator, which computes:
  $$\mathcal{V}_{ij} = \langle V_i(t) V_j^*(t) \rangle$$
- **Baseline Freedom**: Because signals are digitized with atomic clocks (e.g. hydrogen masers), antennas can be separated by continental baselines (VLBI, EHT) without physical beam tunnels.

---

## direct detection (the optical approach)

at optical/IR wavelengths ($\nu \sim 10^{14}-10^{15}\text{ Hz}$), no electronic oscillator or diode can operate at sub-femtosecond speeds ($\sim 10^{-15}\text{ s}$). Furthermore, linear amplification is impossible without adding quantum noise ($h\nu$ per mode).

optical interferometers must therefore combine the *actual light waves* before detection:
- Light from each telescope travels down real optical delay lines (evacuated tubes, precision mirrors) to a central beam combiner.
- The light waves physically overlap at a beam splitter or fiber coupler, producing spatial or temporal interference fringes:
  $$I_{\text{detected}} = I_1 + I_2 + 2\sqrt{I_1 I_2} |V| \cos(\phi_{\text{optical}})$$
- Detectors (CCDs, avalanche photodiodes) measure photon count intensities $I_{\text{detected}}$.

---

## comparison of engineering & physical constraints

| Parameter | Heterodyne Detection (Radio) | Direct Detection (Optical) |
| :--- | :--- | :--- |
| **Primary Frequency** | $10\text{ MHz} - 1\text{ THz}$ | $100\text{ THz} - 1000\text{ THz}$ ($\lambda \sim 0.3-10\ \mu\text{m}$) |
| **Detector Action** | EM field $\to$ AC electron current | Photoelectric photon absorption |
| **Amplification** | LNAs amplify voltage before correlation | Impossible before beam combination |
| **Phase Handling** | Digitized & preserved in IF signal | Must be preserved optically via equal OPD |
| **Max Baseline** | Intercontinental (Earth diameter, EHT) | $\sim 100-330\text{ m}$ (VLTI, CHARA) |
| **Atmospheric Noise** | Tropospheric delay $\Delta s$, solved via Phase Referencing | Kolmogorov turbulence ($r_0 \sim 10\text{ cm}$), solved via AO & Phase Closure |

---

## see also

- [Radio telescope components](../../02_Zettel/Theory/Radio telescope components.html)
- [Electromagnetic waves and photons](../../02_Zettel/Theory/interf/Electromagnetic waves and photons.html)
- [Michelson stellar interferometer](../../02_Zettel/Theory/interf/Michelson stellar interferometer.html)
- [Two-element correlator](../../02_Zettel/Theory/interf/Two-element correlator.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)