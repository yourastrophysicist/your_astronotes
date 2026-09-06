---
layout: default
title: "Michelson stellar interferometer"
---

# Michelson stellar interferometer

the *first* astronomical interferometer to measure stellar diameters. Albert A. Michelson and Francis G. Pease (1920) built a 20-foot (6-meter) beam extension mounted on top of the 100-inch Hooker telescope at Mt. Wilson and measured the angular diameter of the red supergiant **Betelgeuse** ($\alpha\text{ Orionis}$). the technique it pioneered — beam combination of light from separated apertures — established the optical baseline extension paradigm that drives modern facilities like CHARA and VLTI.

![Michelson 20-foot stellar interferometer mounted on the Mt. Wilson 100-inch Hooker telescope, used to measure Betelgeuse in 1920.](Michelson_stellar_interferometer.jpg)

## optical layout and baseline extension

the diffraction-limited angular resolution of a single telescope aperture of diameter $D$ is:
$$\theta_{\text{single}} \approx 1.22 \frac{\lambda}{D}$$
For the 100-inch Mt. Wilson telescope ($D = 2.5\text{ m}$) at optical wavelengths ($\lambda \approx 575\text{ nm}$), $\theta_{\text{single}} \approx 0.057''$. Since Betelgeuse has an angular diameter of $\approx 0.047''$, it appeared as an unresolved point source to the 100-inch dish alone.

Michelson's solution: **artificially extend the baseline $B$ beyond the physical dish size $D$**.
- A 20-foot steel girder was clamped across the top of the 100-inch primary aperture.
- Two outer flat mirrors $M_1$ and $M_4$ were mounted on tracks, separated by variable baseline $B \le 6.1\text{ m}$.
- Light reflected off $M_1, M_4$ inward to fixed inner mirrors $M_2, M_3$, which directed two parallel pencil beams down the primary tube.
- The primary mirror focused the two sub-beams to interfere at the focal plane eyepiece.
- The effective baseline became $B$ (distance between $M_1$ and $M_4$), boosting resolution to:
$$\theta_{\text{interf}} \approx 1.22 \frac{\lambda}{B}$$

---

## mathematical derivation of fringe visibility and the null condition

according to the **Van Cittert-Zernike theorem**, the complex fringe visibility $\mathcal{V}(\mathbf{u})$ measured by baseline vector $\mathbf{B}$ is the normalized 2D Fourier transform of the source sky brightness distribution $\mathcal{I}(l,m)$.

### 1. uniform stellar disk model
For a single star modeled as a uniform bright circular disk of angular diameter $\theta_*$:

$$\mathcal{I}(\theta) = \begin{cases} I_0 & \text{for } \theta \le \theta_*/2 \\ 0 & \text{for } \theta > \theta_*/2 \end{cases}$$

Taking the 2D Fourier transform gives the classic Airy visibility function:

$$V(B) = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}} = \left| \frac{2 J_1(x)}{x} \right|, \quad \text{where } x = \frac{\pi \theta_* B}{\lambda}$$

where $J_1(x)$ is the first-order Bessel function of the first kind.

- **Fringe Visibility Behavior**:
  - At $B = 0$, $x = 0 \implies V(0) = 1$ (100% fringe contrast).
  - As $B$ increases, light from opposite edges of the extended stellar disk arrives with phase differences, washing out fringe contrast.
  - **First Visibility Zero ($V = 0$)**: The first root of $J_1(x) = 0$ occurs at $x = 3.8317$.

$$\frac{\pi \theta_* B_{\rm zero}}{\lambda} = 3.8317 \implies B_{\rm zero} = 1.2197 \frac{\lambda}{\theta_*} \approx 1.22 \frac{\lambda}{\theta_*}$$

### 2. binary star separation model
For a binary star system consisting of two equal-brightness point stars separated by angular distance $\theta_{\rm sep}$ aligned along the baseline:

$$V(B) = \left| \cos\left( \frac{\pi \theta_{\rm sep} B}{\lambda} \right) \right|$$

The visibility vanishes ($V = 0$) when the baseline reaches:

$$B_{\rm zero} = 0.5 \frac{\lambda}{\theta_{\rm sep}}$$

---

## the historic measurement of Betelgeuse (1920)

- Target: **Betelgeuse** ($\alpha\text{ Orionis}$).
- At small baseline $B \approx 1\text{ m}$: sharp, high-contrast visual interference fringes were observed.
- As outer mirrors $M_1, M_4$ were moved apart, fringe contrast steadily dropped.
- At $B_{\rm zero} = 3.07\text{ m}$ ($\lambda = 575\text{ nm}$), the interference fringes completely vanished ($V = 0$).

Solving for Betelgeuse's angular diameter:
$$\theta_* = 1.22 \frac{\lambda}{B_{\rm zero}} = 1.22 \frac{575 \times 10^{-9}\text{ m}}{3.07\text{ m}} = 2.28 \times 10^{-7}\text{ rad} = 0.047''$$

Assuming a parallax distance $d \approx 200\text{ pc}$, the physical radius of Betelgeuse was derived as:
$$R_* = \theta_* \cdot d \approx 600 R_\odot$$
confirming Betelgeuse as a red supergiant larger than the orbit of Mars.

---

## why the technique stalled and its modern revival

despite its historic breakthrough, optical amplitude interferometry stalled for 50 years because of:
1. **Atmospheric Turbulence**: Phase fluctuations $\phi_{\text{atm}}(t)$ across the atmospheric coherence scale ($r_0 \sim 10\text{ cm}$) jittered the fringes at millisecond rates, restricting observations to visual checks of bright stars.
2. **Lack of Automated Path Compensation**: Optical paths must be matched to within the coherence length ($\sim 10\ \mu\text{m}$). Without automated laser delay lines, longer baselines were impossible.
3. **No Phase Closure**: A 2-telescope setup measures amplitude but loses absolute phase due to atmospheric noise.

### Modern Evolution (CHARA, VLTI)
Modern optical interferometers overcome these limits by adding:
- **Independent Telescopes**: Replacing steel beams with separated movable telescopes (baselines up to $330\text{ m}$).
- **Active Laser Delay Lines**: Compensating optical path delay (OPD) in real-time.
- **Adaptive Optics (AO)**: Correcting wavefront aberrations at each aperture.
- **Fringe Trackers & Multi-telescope Beam Combiners**: Measuring phase closure across 3 to 6 telescopes.

---

## see also

- [Young experiment as a stellar interferometer](../../02_Zettel/Theory/interf/Young experiment as a stellar interferometer.html)
- [Radio telescope components](../../02_Zettel/Theory/Radio telescope components.html)
- [Heterodyne vs direct detection](../../02_Zettel/Theory/interf/Heterodyne vs direct detection.html)
- [Stellar diameters and limb darkening](../../02_Zettel/Theory/interf/Stellar diameters and limb darkening.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)