---
layout: "default"
title: "DOnofrio Exam Retake - Radio vs Optical Physics and Michelson Synthesis"
---
{% raw %}
# D'Onofrio Exam Retake — Radio vs Optical Physics and Michelson Synthesis

Master Oral Exam Retake Guide for **Prof. Mauro D'Onofrio** (University of Padova, Master's in Astrophysics & Cosmology).

This guide addresses the specific conceptual questions and physical distinctions raised during the oral exam evaluation regarding **radio telescope components**, **electromagnetic currents vs photons**, **heterodyne detection**, **Michelson stellar interferometry**, and **atmospheric correction**.

---

## Question 1: How do radio telescopes convert astronomical signals into electrical currents, and why is this fundamentally different from optical astronomy?

### Model Answer & Physical Derivation

The fundamental distinction between optical and radio astronomy stems from the **quantum parameter regime** defined by the photon energy $h\nu$ relative to the thermal energy $k_B T_{\rm sys}$ of the system:

- **Optical / Infrared Regime ($h\nu \gg k_B T$)**:
  At optical wavelengths ($\lambda \approx 500\text{ nm}$, $\nu \approx 6 \times 10^{14}\text{ Hz}$), a single photon carries energy $E = h\nu \approx 2.5\text{ eV} \gg k_B T \approx 0.025\text{ eV}$. Here, light behaves predominantly as discrete photons. Detectors (CCDs, PMTs, avalanche photodiodes) operate via the photoelectric effect, counting discrete photon arrivals. Individual wave phases cannot be directly digitized or amplified electronically because no electronic amplifier can operate at $10^{15}\text{ Hz}$, and optical linear amplification is strictly constrained by quantum noise ($h\nu$ per mode). Thus, optical interferometry requires **direct detection**: physically overlaying light beams at an optical beam splitter to produce interference fringes.

- **Radio Regime ($h\nu \ll k_B T$)**:
  At radio wavelengths ($\lambda = 21\text{ cm}$, $\nu = 1.4\text{ GHz}$), a photon carries $E = h\nu \approx 5.8\ \mu\text{eV} \ll k_B T$. In any macroscopic observation time, billions of photons occupy each coherence volume. Quantum granularity is negligible, and radiation is described by **classical Maxwell electrodynamics**: continuous transverse electric $\mathbf{E}(\mathbf{r}, t)$ and magnetic $\mathbf{B}(\mathbf{r}, t)$ field waves.

#### Microscopic Conversion Mechanism
When an incoming planar radio wave strikes a radio antenna (e.g. at the focus of a parabolic dish):
1. The electric field vector $\mathbf{E}(\mathbf{r}, t) = \mathbf{E}_0 \cos(2\pi \nu_{\rm RF} t + \phi_{\text{sky}})$ penetrates the conductive feed element (dipole antenna or feed horn waveguide).
2. Inside the conductor, the electric field exerts a **Lorentz force** $\mathbf{F} = q\mathbf{E}$ on free conduction electrons.
3. According to Ohm's law in microscopic form, $\mathbf{J}(t) = \sigma \mathbf{E}(t)$, forcing electrons into coherent macroscopic oscillation:
   $$I(t) = \frac{dq}{dt} = A_{\rm eff} \, \sigma \, E_0 \cos(2\pi \nu_{\rm RF} t + \phi_{\text{sky}})$$
4. This oscillating electric current generates a radio-frequency (RF) electrical voltage signal $V_{\rm RF}(t) \propto E(t)$ across the antenna terminal. The **amplitude $V_0$ is proportional to the electric field strength**, and the **phase $\phi_{\text{sky}}$ matches the spatial phase of the incoming wavefront**.

---

## Question 2: Detail the component-by-component physical workflow of a radio telescope.

![Radio telescope components and heterodyne receiver chain](Interferometry/Karl_G._Jansky_Very_Large_Array.jpg)

### Model Answer

A radio telescope antenna converts free-space electromagnetic waves into a digitized, phase-preserved complex visibility through five sequential stages:

1. **Parabolic Reflector (Dish)**:
   - **Role**: Collects radiation across aperture $A = \pi (D/2)^2$ and focuses the parallel wavefronts to a single focal point.
   - **Physics**: The parabolic shape ensures that all optical path lengths from an incident plane wave to the focus are equal, preserving phase coherence across the dish.
   - **Tolerance**: Surface irregularities must satisfy Ruze's law $\epsilon \le \lambda / 16$.

2. **Feed Horn & Dipole Transducer**:
   - **Role**: Collects focused free-space waves and couples them into an electrical voltage signal.
   - **Physics**: Provides impedance matching between free-space wave impedance ($Z_0 \approx 377\ \Omega$) and transmission lines ($50\ \Omega$). Converts $\mathbf{E}(t)$ into an AC electrical current $I(t)$ and voltage $V_{\rm RF}(t)$.

3. **Low-Noise Amplifier (LNA)**:
   - **Role**: Amplifies the microvolt RF signal before downconversion.
   - **Physics**: Operates inside liquid-helium cryostats ($T \approx 4\text{ K}$) to minimize thermal Johnson noise power $P_{\text{noise}} = k_B T_{\rm sys} \Delta\nu$.

4. **Heterodyne Mixer & Local Oscillator (LO)**:
   - **Role**: Downconverts high-frequency RF signals to a lower Intermediate Frequency (IF) suitable for digitization and transmission.
   - **Physics**: Mixes $V_{\rm RF}(t) = V_0 \cos(2\pi \nu_{\rm RF} t + \phi_{\text{sky}})$ with an ultrastable atomic clock reference $V_{\rm LO}(t) = V_{\text{LO}} \cos(2\pi \nu_{\rm LO} t + \phi_{\text{LO}})$. Non-linear mixing yields:
     $$V_{\rm IF}(t) = V_{\text{IF}} \cos(2\pi (\nu_{\rm RF} - \nu_{\rm LO}) t + (\phi_{\text{sky}} - \phi_{\text{LO}}))$$
     Downconversion lowers frequency while **100% preserving signal amplitude and sky phase $\phi_{\text{sky}}$**.

5. **Digital Correlator**:
   - **Role**: Combines signals from pairs of antennas $i$ and $j$.
   - **Physics**: Digitizes $V_i(t)$ and $V_j(t)$ and computes the complex cross-correlation:
     $$\mathcal{V}_{ij} = \langle V_i(t) V_j^*(t) \rangle = |V_{ij}| e^{i\phi_{ij}}$$
     yielding the Fourier component of the sky brightness distribution $\mathcal{I}(l,m)$ at spatial frequency $\mathbf{u} = \mathbf{B}/\lambda$ (Van Cittert-Zernike theorem).

---

## Question 3: Explain Michelson's 1920 Stellar Interferometer experiment at Mt. Wilson. How did it measure stellar angular diameters, and what is the visibility zero condition?

![Michelson stellar interferometer diagram](Interferometry/Michelson_stellar_interferometer.png)

### Model Answer & Derivation

In 1920, Albert A. Michelson and Francis G. Pease mounted a 20-foot ($6\text{-meter}$) steel beam across the top aperture of the 100-inch ($2.5\text{-meter}$) Hooker Telescope at Mount Wilson to measure the angular diameter of the red supergiant **Betelgeuse** ($\alpha\text{ Orionis}$).

#### Physical Motivation
The angular diffraction resolution of a single telescope aperture of diameter $D$ is:
$$\theta_{\text{single}} \approx 1.22 \frac{\lambda}{D}$$
For the 100-inch telescope ($D = 2.5\text{ m}$) at $\lambda = 570\text{ nm}$:
$$\theta_{\text{single}} \approx 1.22 \frac{570 \times 10^{-9}\text{ m}}{2.5\text{ m}} = 2.78 \times 10^{-7}\text{ rad} \approx 0.057''$$
Because Betelgeuse has an angular diameter $\theta_* \approx 0.047'' < 0.057''$, it appeared as an unresolved point source to the 100-inch dish alone!

#### Experimental Design
Michelson placed two outer flat mirrors $M_1$ and $M_4$ separated by baseline $B$ (up to $6\text{ meters}$) on the beam. $M_1$ and $M_4$ reflected light inwards to fixed inner mirrors $M_2$ and $M_3$, which directed two parallel sub-beams down the telescope tube to form an optical interference pattern at the focal eyepiece.

#### Mathematical Derivation of Fringe Visibility & The Zero Condition
According to the Van Cittert-Zernike theorem, for a circular star modeled as a uniform bright disk of angular diameter $\theta_*$, the complex fringe visibility as a function of baseline $B$ is given by the normalized 2D Fourier transform of a disk (the Airy visibility function):

$$V(B) = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}} = \left| \frac{2 J_1(x)}{x} \right|, \quad \text{where } x = \frac{\pi \theta_* B}{\lambda}$$

where $J_1(x)$ is the first-order Bessel function of the first kind.

- **Fringe Visibility Behavior**:
  - At $B = 0$, $x = 0 \implies V(0) = 1$ (bright, high-contrast fringes).
  - As baseline $B$ increases, the two sub-beams sample higher spatial frequencies. Waves originating from opposite edges of the extended star arrive out of phase, washing out fringe contrast.
  - **First Visibility Zero ($V = 0$)**: The first root of $J_1(x) = 0$ occurs at $x = 3.8317$.

$$\frac{\pi \theta_* B_{\rm zero}}{\lambda} = 3.8317 \implies B_{\rm zero} = 1.2197 \frac{\lambda}{\theta_*} \approx 1.22 \frac{\lambda}{\theta_*}$$

#### Measurement Result
By sliding outer mirrors $M_1$ and $M_4$ outward, Michelson & Pease observed the interference fringes fade and disappear ($V = 0$) at a critical baseline separation $B_{\rm zero} = 3.07\text{ meters}$ at $\lambda = 575\text{ nm}$.
Solving for the angular diameter:
$$\theta_* = 1.22 \frac{\lambda}{B_{\rm zero}} = 1.22 \frac{575 \times 10^{-9}\text{ m}}{3.07\text{ m}} = 2.28 \times 10^{-7}\text{ rad} = 0.047''$$
This marked the **first direct measurement of a star's angular diameter in human history**.

---

## Question 4: How does atmospheric turbulence affect optical vs radio interferometry, and how do we correct for it?

### Model Answer

#### 1. Optical Regime & Adaptive Optics (AO)
- **Atmospheric Physics**: Temperature micro-fluctuations in the turbulent atmosphere cause variations in refractive index $n(\mathbf{r}, t)$. This breaks an incoming plane wave into turbulent corrugated wavefronts.
- **Descriptors**:
  - **Fried Parameter $r_0$**: The atmospheric coherence length ($\sim 10-20\text{ cm}$ at $500\text{ nm}$). For aperture sizes $D > r_0$, the image breaks into $D/r_0$ speckles, limiting angular resolution to $\lambda / r_0 \approx 1''$ regardless of telescope size!
  - **Coherence Time $\tau_0 \approx r_0 / v_{\rm wind} \sim 1-10\text{ ms}$**: Phase fluctuations change on millisecond timescales.
- **Mitigation (Adaptive Optics & Phase Closure)**:
  - **Adaptive Optics (AO)** uses a **Wavefront Sensor (WFS)** (e.g. Shack-Hartmann lenslet array) to sample phase distortions at kilohertz rates, driving a deformable mirror (DM) with piezo-actuators to flatten the optical phase in real-time.
  - **Phase Closure**: Combining phase sum around a triangle of 3 baselines ($\Phi_{123} = \phi_{12} + \phi_{23} + \phi_{31}$) cancels out all individual telescope atmospheric phase errors $\theta_i$.

#### 2. Radio Regime & Phase Referencing / Self-Calibration
- **Atmospheric Physics**: At radio frequencies, tropospheric water vapor (mm/sub-mm) and ionospheric free-electron density (low frequencies) introduce excess path delay $\Delta s = \int (n-1) dz$.
- **Mitigation**:
  - Because radio receivers downconvert signals to IF preserving phase electronically, phase errors can be corrected post-detection!
  - **Phase Referencing**: Rapidly nodding the radio antennas between the target science source and a nearby point-like calibrator star ($< 2-3^\circ$ away) within the atmospheric coherence time to calibrate out phase drifts.
  - **Self-Calibration**: Using iterative numerical solver algorithms (applying Van Cittert-Zernike constraints) to solve simultaneously for antenna phase errors $\theta_i(t)$ and source model visibilities $\mathcal{V}_{ij}$.

---

## Quick Reference Summary Table for Oral Exam Retake

| Exam Topic | Key Physics / Formula | Exam Takeaway |
| :--- | :--- | :--- |
| **Radio Antennas** | $\mathbf{F} = q\mathbf{E} \implies I(t) = \frac{dq}{dt} \propto E(t)$ | EM waves force free electrons in conductor to oscillate, creating AC voltage $V(t)$. |
| **Feed Horn** | Impedance matching $377\ \Omega \to 50\ \Omega$ | Transducer linking free-space EM wave propagation to coaxial electrical lines. |
| **Heterodyne Mixing** | $V_{\rm IF} \propto \cos(2\pi(\nu_{\rm RF}-\nu_{\rm LO})t + \phi_{\text{sky}})$ | Downconverts frequency while 100% preserving electric field amplitude & phase. |
| **Michelson 1920** | $B_{\rm zero} = 1.22 \frac{\lambda}{\theta_*}$ | Extended 100-inch telescope baseline to $6\text{ m}$ to resolve Betelgeuse ($\theta = 0.047''$). |
| **Optical vs Radio** | $h\nu \gg k_B T$ vs $h\nu \ll k_B T$ | Optical counts photons (direct detection); Radio processes continuous field currents (heterodyne). |

---

## see also

- [Radio telescope components](./Radio%20telescope%20components.html)
- [Michelson stellar interferometer](interf/Michelson%20stellar%20interferometer.html)
- [Electromagnetic waves and photons](interf/Electromagnetic%20waves%20and%20photons.html)
- [Heterodyne vs direct detection](interf/Heterodyne%20vs%20direct%20detection.html)
- [Atmospheric turbulence overview](interf/Atmospheric%20turbulence%20overview.html)
- [Adaptive optics](interf/Adaptive%20optics.html)
- [Astronomical_Interferometry_MOC](../../04_Atlas/Astronomical_Interferometry_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Electromagnetic%20waves%20and%20photons.html" class="backlink-item">Electromagnetic waves and photons</a></li>
    <li class="backlink-item-wrap"><a href="./Heterodyne%20vs%20direct%20detection.html" class="backlink-item">Heterodyne vs direct detection</a></li>
    <li class="backlink-item-wrap"><a href="./Michelson%20stellar%20interferometer.html" class="backlink-item">Michelson stellar interferometer</a></li>
    <li class="backlink-item-wrap"><a href="./Radio%20telescope%20components.html" class="backlink-item">Radio telescope components</a></li>
  </ul>
</div>
