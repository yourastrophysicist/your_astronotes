---
layout: default
title: "Radio telescope components"
---

# Radio telescope components

a radio telescope is an astronomical instrument designed to detect and measure electromagnetic radiation at radio frequencies ($\sim 10\text{ MHz}$ to $1\text{ THz}$, wavelengths $\lambda \sim 1\text{0 m}$ to $0.3\text{ mm}$). unlike optical telescopes which focus and collect discrete photons on light-sensitive CCD detectors, a radio telescope operates in the **classical electromagnetic wave regime**: it collects incoming electric fields $\mathbf{E}(\mathbf{r}, t)$, converts them via oscillating electron charge densities into electrical AC voltages $V(t)$, and processes these signals electronically.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Very_Large_Array_2011.jpg/800px-Very_Large_Array_2011.jpg" alt="The Karl G. Jansky Very Large Array antenna dish and receiver optics" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

## physical workflow: from sky wave to electrical current

the fundamental physical chain of a radio telescope antenna consists of five main functional stages:

$$\text{incident EM wave } \mathbf{E}(\mathbf{r},t) \xrightarrow{\text{parabolic dish}} \text{focused spherical wave} \xrightarrow{\text{feed horn}} \text{guided wave / AC current } V_{\rm RF}(t) \xrightarrow{\text{LNA}} \text{amplified RF} \xrightarrow{\text{mixer + LO}} \text{IF signal } V_{\rm IF}(t) \xrightarrow{\text{correlator}} \text{complex visibility } \mathcal{V}(u,v)$$

---

## 1. parabolic reflector (dish)

the parabolic reflector collects the incoming planar electromagnetic wave across aperture area $A = \pi (D/2)^2$ and redirects it toward the focal point.

- **geometry & phase preservation**: a paraboloid of revolution has the unique geometric property that all path lengths from a distant planar wavefront (perpendicular to the optical axis) to the focus are **strictly equal**. thus, the spatial phase across the entire incoming wave packet is preserved during reflection.
- **surface accuracy**: to avoid phase degradation across the reflector surface, the rms surface error $\epsilon$ must satisfy Ruze's criterion:
  $$\epsilon \le \frac{\lambda}{16}$$
  at $\lambda = 21\text{ cm}$, dish tolerances can be a few millimeters; at $\lambda = 1\text{ mm}$ (ALMA), dish panels must be shaped to within $\sim 10-20\ \mu\text{m}$.
- **diffraction beam (PSF)**: the primary beam response of a dish of diameter $D$ is given by the Airy pattern with half-power beam width (HPBW):
  $$\theta_{\rm HPBW} \approx 1.22 \frac{\lambda}{D}$$

---

## 2. feed horn and antenna element

the **feed horn** sits at the focus (or subreflector focus in Cassegrain/Gregorian setups). it is the critical transducer that bridges free-space wave propagation and guided electrical currents.

- **waveguide transition**: the feed horn acts as a flared metallic waveguide. it collects the focused free-space electromagnetic wave and matches its spatial mode into a rectangular or circular waveguide.
- **impedance matching**: free space has a characteristic wave impedance of $Z_0 = \sqrt{\mu_0/\epsilon_0} \approx 377\ \Omega$. standard coaxial cables and receiver electronics operate at $Z_0 = 50\ \Omega$. the feed horn provides smooth, low-reflection impedance matching between $377\ \Omega$ and $50\ \Omega$, maximizing energy transfer and preventing standing waves.
- **conversion to current/voltage**: inside the waveguide behind the feed horn sits a conductive metal pin or dipole antenna element. the oscillating electric field $\mathbf{E}(t)$ of the guided wave exerts a Lorentz force $\mathbf{F} = q\mathbf{E}$ on free conduction electrons in the metal element, forcing them to oscillate:
  $$\mathbf{J}(t) = \sigma \mathbf{E}(t) \implies I(t) = \frac{dq}{dt} \propto E(t)$$
  this generates a radio-frequency (RF) electrical voltage signal $V_{\rm RF}(t)$ directly proportional to the incident electric field amplitude and phase:
  $$V_{\rm RF}(t) = v_0 \cos(2\pi \nu_{\rm RF} t + \phi_{\text{sky}})$$

---

## 3. low-noise amplifier (LNA)

the electrical voltage signal $V_{\rm RF}(t)$ exiting the feed element is extremely weak (often fraction of a microvolt, corresponding to cosmic signal powers $\sim 10^{-15}$ to $10^{-20}\text{ W}$).

- **front-end amplification**: the **Low-Noise Amplifier (LNA)** (typically based on High Electron Mobility Transistors, HEMTs) amplifies $V_{\rm RF}(t)$ by $30-50\text{ dB}$ before any mixing or transmission down cables.
- **receiver noise temperature**: according to the Friis formula for noise, the first amplifier in the signal chain dominates the total system noise temperature $T_{\rm sys}$. to minimize thermal Johnson-Nyquist noise $P_{\text{noise}} = k_B T_{\rm sys} \Delta\nu$, LNAs are operated inside cryostats cooled by liquid helium to $4\text{ K}$ (or $15\text{ K}$).

---

## 4. heterodyne mixer and local oscillator (LO)

because gigahertz to terahertz RF signals cannot be digitized or transmitted over long distances without severe attenuation and dispersion, the signal is downconverted using a **heterodyne system**.

- **local oscillator (LO)**: an ultrastable atomic clock (e.g. hydrogen maser) feeds a pure sinusoidal reference voltage $V_{\rm LO}(t) = V_{0, \text{LO}} \cos(2\pi \nu_{\rm LO} t + \phi_{\text{LO}})$.
- **mixer**: a non-linear element (e.g. Schottky diode or SIS superconducting tunnel junction) multiplies the incoming RF signal $V_{\rm RF}(t)$ with $V_{\rm LO}(t)$:
  $$V_{\rm mix}(t) = V_{\rm RF}(t) \cdot V_{\rm LO}(t) \propto \cos(2\pi \nu_{\rm RF} t + \phi_{\text{sky}}) \cdot \cos(2\pi \nu_{\rm LO} t + \phi_{\text{LO}})$$
  using trigonometric product identities:
  $$V_{\rm mix}(t) = \frac{A}{2} \left[ \cos(2\pi (\nu_{\rm RF} - \nu_{\rm LO}) t + (\phi_{\text{sky}} - \phi_{\text{LO}})) + \cos(2\pi (\nu_{\rm RF} + \nu_{\rm LO}) t + (\phi_{\text{sky}} + \phi_{\text{LO}})) \right]$$
- **intermediate frequency (IF)**: a low-pass filter rejects the high-frequency sum term ($\nu_{\rm RF} + \nu_{\rm LO}$) and extracts the **difference frequency**:
  $$\nu_{\rm IF} = |\nu_{\rm RF} - \nu_{\rm LO}|$$
  Crucially, the resulting IF voltage signal retains the exact phase $\phi_{\text{sky}}$ and amplitude of the original astronomical wave:
  $$V_{\rm IF}(t) = V_{0, \text{IF}} \cos(2\pi \nu_{\rm IF} t + \phi_{\text{sky}} - \phi_{\text{LO}})$$

---

## 5. digital correlator

in an interferometer, the IF signals $V_i(t)$ and $V_j(t)$ from antenna dishes $i$ and $j$ separated by baseline $\mathbf{B}$ are sent to a high-speed **digital correlator**.

- **complex cross-correlation**: the correlator digitizes the voltages using ultra-fast Analog-to-Digital Converters (ADCs) and computes the time-averaged product:
  $$\mathcal{V}_{ij} = \langle V_i(t) V_j^*(t) \rangle = \frac{1}{\tau} \int_0^\tau V_i(t) V_j(t - \tau_g) \, dt$$
  where $\tau_g = \mathbf{B} \cdot \mathbf{s} / c$ is the geometric delay between the antennas.
- **complex visibility output**: the correlated output gives the amplitude $|V_{ij}|$ and phase $\phi_{ij}$ of the complex visibility $\mathcal{V}(u,v)$ at spatial frequency $\mathbf{u} = \mathbf{B}/\lambda$, fulfilling the **Van Cittert-Zernike theorem**.

---

## optical vs radio comparison table

| Feature | Optical Interferometry | Radio Interferometry |
| :--- | :--- | :--- |
| **Physical Regime** | Photon counting ($h\nu \gg k_B T$) | Classical EM waves & currents ($h\nu \ll k_B T$) |
| **Primary Observable** | Photon intensity / fringe contrast | Electric field amplitude & voltage phase |
| **Signal Conversion** | Direct optical beam superposition | EM field $\to$ AC current in feed horn |
| **Amplification** | Impossible without adding quantum noise | Low-Noise Amplifiers (LNAs) at RF/IF |
| **Beam Combination** | Physical optical beam splitters & mirrors | Digital electronic cross-correlator |
| **Atmospheric Impact** | Kolmogorov phase turbulence ($r_0 \sim 10\text{ cm}$) | Atmospheric path delay $\Delta s$ (water vapor/ionosphere) |
| **Phase Restoration** | Phase Closure (3 telescopes) | Phase Referencing & Self-Calibration |

---

## see also

- [Electromagnetic waves and photons](../../02_Zettel/Theory/interf/Electromagnetic waves and photons.html)
- [Heterodyne vs direct detection](../../02_Zettel/Theory/interf/Heterodyne vs direct detection.html)
- [Two-element correlator](../../02_Zettel/Theory/interf/Two-element correlator.html)
- [Components of a modern interferometer](../../02_Zettel/Theory/interf/Components of a modern interferometer.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)