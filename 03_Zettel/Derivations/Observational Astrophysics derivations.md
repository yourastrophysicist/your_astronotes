---
layout: default
title: "Observational Astrophysics derivations"
---
## 1. The Complete CCD Signal-to-Noise Ratio (SNR) Equation

### 1.1 Physical Setup and Noise Sources
Consider an astronomical point source (star) observed through an optical telescope of collecting area $A_{tel}$ and transmission efficiency $\eta(\lambda)$, focused onto a CCD detector. The star light is distributed over an aperture of $n_{pix}$ pixels according to the telescope Point Spread Function (PSF).

The detector records electrical charge (electrons, $e^-$) during an exposure time $t$. There are four independent stochastic processes contributing to the total charge:

1. **Source Photo-electrons ($N_\star$)**:
   The star produces incident photons at rate $\Phi_\star$ (photons $\text{s}^{-1} \text{cm}^{-2}$). After passing through the atmosphere, telescope optics, filter, and detector quantum efficiency $QE$, photo-electrons are accumulated at rate $R_\star$ ($e^-/\text{s}$):
   $$N_\star = R_\star t$$
   Since photon arrival is a Poisson process:
   $$\sigma_\star^2 = \text{Var}(N_\star) = N_\star = R_\star t$$

2. **Sky Background Photo-electrons ($N_{sky}$)**:
   The night sky emits a diffuse background flux of surface brightness $I_{sky}$ (photons $\text{s}^{-1} \text{cm}^{-2} \text{arcsec}^{-2}$). Per pixel, the sky count rate is $R_{sky}$ ($e^-/\text{s/pixel}$). Across the aperture of $n_{pix}$ pixels:
   $$N_{sky} = n_{pix} R_{sky} t$$
   As an independent Poisson process:
   $$\sigma_{sky}^2 = \text{Var}(N_{sky}) = n_{pix} R_{sky} t$$

3. **Detector Dark Current ($N_{dark}$)**:
   Thermal excitations in the silicon depletion region generate electrons independent of light. At detector temperature $T$, dark generation rate per pixel is $R_{dark}$ ($e^-/\text{s/pixel}$):
   $$N_{dark} = n_{pix} R_{dark} t$$
   Thermal generation is a Poisson process:
   $$\sigma_{dark}^2 = \text{Var}(N_{dark}) = n_{pix} R_{dark} t$$

4. **Readout Noise ($N_{RN}$)**:
   During readout, the output amplifier (FET) and Correlated Double Sampling (CDS) circuitry introduce electronic voltage fluctuations. This noise is modeled as a zero-mean Gaussian distribution with variance $\sigma_{RN}^2$ ($e^-/\text{pixel}$), independent of exposure time:
   $$\sigma_{RN, tot}^2 = n_{pix} \sigma_{RN}^2$$

5. **Sky Estimation / Background Subtraction Uncertainty**:
   To isolate $N_\star$, the background is estimated from an annulus containing $n_{sky}$ pixels. The mean sky per pixel has sample variance $\sigma_{sky}^2 / n_{sky}$. When subtracting this mean from the $n_{pix}$ aperture pixels, this propagates an additional variance:
   $$\sigma_{sub}^2 = n_{pix} \left(\frac{R_{sky} t + R_{dark} t + \sigma_{RN}^2}{n_{sky}}\right) = \frac{n_{pix}^2}{n_{sky}} (R_{sky} t + R_{dark} t + \sigma_{RN}^2)$$

### 1.2 Total Variance and SNR Derivation
Since all noise mechanisms are statistically independent, variances add in quadrature:
$$\sigma_{tot}^2 = \sigma_\star^2 + \sigma_{sky}^2 + \sigma_{dark}^2 + \sigma_{RN, tot}^2 + \sigma_{sub}^2$$

Substituting each term:
$$\sigma_{tot}^2 = R_\star t + n_{pix}(R_{sky} t + R_{dark} t + \sigma_{RN}^2) \left(1 + \frac{n_{pix}}{n_{sky}}\right)$$

If the sky annulus is sufficiently large ($n_{sky} \gg n_{pix}$), the ratio $n_{pix}/n_{sky} \to 0$. The signal is $S = N_\star = R_\star t$. Therefore:

$$\boxed{\text{SNR} = \frac{R_\star t}{\sqrt{R_\star t + n_{pix} R_{sky} t + n_{pix} R_{dark} t + n_{pix} \sigma_{RN}^2}}}$$

### 1.3 Asymptotic Regimes & Derivation of Scaling Laws
Divide numerator and denominator by $\sqrt{t}$:

$$\text{SNR} = \frac{R_\star \sqrt{t}}{\sqrt{R_\star + n_{pix}(R_{sky} + R_{dark}) + \frac{n_{pix} \sigma_{RN}^2}{t}}}$$

- **Regime A: Readout-Noise Limited (Short exposures, faint targets)**:
  Condition: $\frac{n_{pix}\sigma_{RN}^2}{t} \gg R_\star + n_{pix}(R_{sky} + R_{dark})$.
  $$\text{SNR} \approx \frac{R_\star t}{\sqrt{n_{pix}}\sigma_{RN}} \propto t^1$$
  *Log-log slope*: $\frac{d\log \text{SNR}}{d\log t} = 1$. The SNR doubles if exposure time doubles.

- **Regime B: Sky-Background Limited (Broadband imaging with large ground-based telescopes)**:
  Condition: $n_{pix} R_{sky} \gg R_\star + n_{pix} R_{dark} + \frac{n_{pix}\sigma_{RN}^2}{t}$.
  $$\text{SNR} \approx \frac{R_\star t}{\sqrt{n_{pix} R_{sky} t}} = \frac{R_\star}{\sqrt{n_{pix} R_{sky}}} \sqrt{t} \propto t^{1/2}$$
  *Log-log slope*: $\frac{d\log \text{SNR}}{d\log t} = 1/2$. To double the SNR, exposure time must be quadrupled.
  *Telescope Diameter Dependence*: $R_\star \propto D^2$, while $R_{sky} \propto D^2 \theta_{see}^2$ (where $\theta_{see}$ is atmospheric seeing). Thus:
  $$\text{SNR} \propto \frac{D^2}{\sqrt{D^2 \theta_{see}^2}} = \frac{D}{\theta_{see}}$$
  In the sky-limited regime, SNR scales linearly with telescope diameter $D$, not $D^2$!

- **Regime C: Source Shot-Noise Limited (Bright stars, spectroscopic peaks)**:
  Condition: $R_\star \gg n_{pix}(R_{sky} + R_{dark} + \sigma_{RN}^2/t)$.
  $$\text{SNR} \approx \frac{R_\star t}{\sqrt{R_\star t}} = \sqrt{R_\star t} \propto \sqrt{t}$$
  *Log-log slope*: $+1/2$.

### 1.4 Optimal Aperture Radius Derivation
Let the stellar surface brightness profile be a 2D Gaussian with dispersion $\sigma_{PSF}$ (seeing FWHM $= 2\sqrt{2\ln 2} \sigma_{PSF} \approx 2.355 \sigma_{PSF}$):
$$I_\star(r) = \frac{R_\star}{2\pi \sigma_{PSF}^2} \exp\left(-\frac{r^2}{2\sigma_{PSF}^2}\right)$$
The enclosed stellar count within radius $r$ is:
$$N_\star(r) = \int_0^r I_\star(r') 2\pi r' dr' = R_\star t \left[1 - \exp\left(-\frac{r^2}{2\sigma_{PSF}^2}\right)\right]$$
The area in pixels is $n_{pix}(r) = \pi r^2 / p^2$ (where $p$ is pixel scale).
In the faint-source / background-limited regime:
$$\text{SNR}(r) = \frac{R_\star t \left[1 - \exp\left(-\frac{r^2}{2\sigma_{PSF}^2}\right)\right]}{\sqrt{\frac{\pi r^2}{p^2} B_{tot}}}$$
where $B_{tot} = (R_{sky} + R_{dark})t + \sigma_{RN}^2$. Let $x \equiv r / (\sqrt{2}\sigma_{PSF})$. Then:
$$\text{SNR}(x) \propto \frac{1 - e^{-x^2}}{x}$$
Setting derivative to zero:
$$\frac{d}{dx}\left(\frac{1 - e^{-x^2}}{x}\right) = \frac{2x^2 e^{-x^2} - (1 - e^{-x^2})}{x^2} = 0 \implies 2x^2 + 1 = e^{x^2}$$
Solving numerically yields $x \approx 1.12$, which corresponds to:
$$r_{opt} \approx 1.12 \sqrt{2} \sigma_{PSF} \approx 1.58 \sigma_{PSF} \approx 0.67 \times \text{FWHM}$$
*Conclusion*: An aperture that is too small loses star photons ($1 - e^{-x^2} \to 0$). An aperture that is too large admits excess sky noise ($x \to \infty$). The optimum aperture radius is $r \approx 0.67 \times \text{FWHM}$ (diameter $\approx 1.34 \times \text{FWHM}$).

---

## 2. Photon Transfer Curve (PTC) and Gain Measurement

### 2.1 Physics of Analog-to-Digital Conversion
The charge accumulated in pixel $i$ is $N_i$ electrons ($e^-$). The Analog-to-Digital Converter (ADC) transforms this charge into ADU (Analog-to-Digital Units, or "counts"):
$$S_{ADU} = \frac{N_{e^-}}{g}$$
where $g$ is the **conversion gain** (units: $e^-/\text{ADU}$).

Applying the variance transformation:
$$\text{Var}(S_{ADU}) = \frac{\text{Var}(N_{e^-})}{g^2}$$

Since photo-electron creation is governed by Poisson statistics, $\text{Var}(N_{e^-}) = \bar{N}_{e^-} + \sigma_{RN, e^-}^2$. Substituting $\bar{N}_{e^-} = g \bar{S}_{ADU}$:
$$\text{Var}(S_{ADU}) = \frac{g \bar{S}_{ADU} + \sigma_{RN, e^-}^2}{g^2} = \frac{1}{g} \bar{S}_{ADU} + \sigma_{RN, ADU}^2$$

This fundamental relation shows that in the photon-noise regime:
$$\sigma_{ADU}^2 = \frac{1}{g} \bar{S}_{ADU}$$
The slope of $\sigma_{ADU}^2$ versus $\bar{S}_{ADU}$ is exactly $1/g$!

### 2.2 Eliminating Pixel Non-Uniformity (PRNU) via Frame Differencing
In raw flat-field images, each pixel has a slightly different quantum efficiency: $S_i = \bar{S}(1 + \delta_i)$, where $\delta_i$ is the Pixel-to-Pixel Non-Uniformity (PRNU). This spatial structure creates an apparent variance $\sigma_{spatial}^2 \propto \bar{S}^2$, which overwhelms Poisson noise at high fluxes.

To isolate true temporal Poisson noise:
1. Take two identical flat-field exposures $F_1$ and $F_2$ illuminated by a stable light source at the same exposure time.
2. The spatial PRNU pattern is identical in both frames.
3. Construct the difference frame $\Delta F = F_1 - F_2$.
4. The mean of the difference frame is zero: $\langle \Delta F \rangle = 0$.
5. The variance of the difference frame, since $F_1$ and $F_2$ are independent realizations:
   $$\sigma_{\Delta F}^2 = \sigma_{F_1}^2 + \sigma_{F_2}^2 = 2 \sigma_{temporal}^2$$
   Therefore:
   $$\sigma_{temporal, ADU}^2 = \frac{1}{2} \text{Var}(F_1 - F_2)$$

Similarly, using two bias frames $B_1$ and $B_2$:
$$\sigma_{RN, ADU}^2 = \frac{1}{2} \text{Var}(B_1 - B_2)$$

Subtracting read noise variance from the total temporal flat variance gives the pure shot-noise variance:
$$\sigma_{shot, ADU}^2 = \frac{1}{2}\text{Var}(F_1 - F_2) - \frac{1}{2}\text{Var}(B_1 - B_2)$$

The mean net signal is:
$$\bar{S}_{ADU} = \frac{\bar{F}_1 + \bar{F}_2}{2} - \frac{\bar{B}_1 + \bar{B}_2}{2}$$

Equating shot variance to Poisson expectation:
$$\sigma_{shot, ADU}^2 = \frac{\bar{S}_{ADU}}{g}$$

Solving for the gain $g$:
$$\boxed{g = \frac{\frac{\bar{F}_1 + \bar{F}_2}{2} - \frac{\bar{B}_1 + \bar{B}_2}{2}}{\frac{1}{2}\text{Var}(F_1 - F_2) - \frac{1}{2}\text{Var}(B_1 - B_2)} \quad [e^-/\text{ADU}]}$$

Once $g$ is determined, the Readout Noise in electrons is:
$$\boxed{\sigma_{RN, e^-} = g \times \sigma_{RN, ADU} = g \sqrt{\frac{1}{2}\text{Var}(B_1 - B_2)} \quad [e^-]}$$

---

## 3. Atmospheric Extinction & Bouguer Line Derivation

### 3.1 Plane-Parallel Airmass Geometry
Consider an atmosphere of vertical density profile $\rho(h)$. A light ray from a star at zenith angle $z$ traverses an optical path element $ds$:
$$ds = \frac{dh}{\cos z}$$
The airmass $X$ is defined as the ratio of total column density along angle $z$ to the column density at zenith ($z=0$):
$$X(z) \equiv \frac{\int_0^\infty \rho(h) ds}{\int_0^\infty \rho(h) dh} = \frac{\int_0^\infty \rho(h) \frac{dh}{\cos z}}{\int_0^\infty \rho(h) dh} = \frac{1}{\cos z} \equiv \sec z$$
*(For $z > 60^\circ$, Earth curvature and refraction require the Young & Irvine formula: $X \approx \sec z [1 - 0.0012(\sec^2 z - 1)]$.)*

### 3.2 Monochromatic Radiative Transfer in the Atmosphere
Let $\kappa_\lambda(h)$ be the monochromatic atmospheric extinction coefficient ($\text{cm}^2 \text{g}^{-1}$). The change in monochromatic specific intensity $I_\lambda$ along path $ds$ (pure absorption and scattering, no emission along the line of sight in optical):
$$\frac{dI_\lambda}{ds} = -\kappa_\lambda \rho(h) I_\lambda$$
Integrating from the top of the atmosphere ($s = \infty$) to the telescope entrance at sea level ($s = 0$):
$$\int_{I_{\lambda, 0}}^{I_\lambda(z)} \frac{dI_\lambda'}{I_\lambda'} = -\int_0^\infty \kappa_\lambda \rho(h) \frac{dh}{\cos z}$$
$$\ln\left(\frac{I_\lambda(z)}{I_{\lambda, 0}}\right) = -\sec z \int_0^\infty \kappa_\lambda \rho(h) dh \equiv -\tau_{\lambda, 0} X$$
where $\tau_{\lambda, 0} = \int_0^\infty \kappa_\lambda \rho(h) dh$ is the vertical optical depth at zenith.

Exponentiating:
$$I_\lambda(z) = I_{\lambda, 0} \exp(-\tau_{\lambda, 0} X)$$

### 3.3 Conversion to Astronomical Magnitudes (The Bouguer Line)
By Pogson's definition of apparent magnitude:
$$m_\lambda(z) = -2.5 \log_{10}\left(\frac{I_\lambda(z)}{I_{\lambda, ref}}\right)$$
$$m_\lambda(z) = -2.5 \log_{10}\left(\frac{I_{\lambda, 0} e^{-\tau_{\lambda, 0} X}}{I_{\lambda, ref}}\right) = -2.5 \log_{10}\left(\frac{I_{\lambda, 0}}{I_{\lambda, ref}}\right) - 2.5 \log_{10}(e) \times (-\tau_{\lambda, 0} X)$$

Defining the **extra-atmospheric magnitude** $m_{\lambda, 0} \equiv -2.5 \log_{10}(I_{\lambda, 0}/I_{\lambda, ref})$ and the **extinction coefficient** $k_\lambda$:
$$k_\lambda \equiv 2.5 \log_{10}(e) \tau_{\lambda, 0} \approx 1.0857 \tau_{\lambda, 0} \quad [\text{mag/airmass}]$$

This gives the linear Bouguer equation:
$$\boxed{m_\lambda(X) = m_{\lambda, 0} + k_\lambda X}$$

*Physical meaning*:
- A plot of observed apparent magnitude $m_\lambda$ vs airmass $X$:
  - $y$-intercept ($X = 0$) gives the true extra-atmospheric magnitude $m_{\lambda, 0}$ (what an observer in space would measure!).
  - Slope $\frac{dm_\lambda}{dX} = k_\lambda$ gives atmospheric extinction in magnitudes per airmass.
  - Typical values at good sites: $k_U \sim 0.50$, $k_B \sim 0.25$, $k_V \sim 0.15$, $k_R \sim 0.10$, $k_I \sim 0.06$.

---

## 4. Optical Diffraction Limit and Plate Scale

### 4.1 Fraunhofer Diffraction of a Circular Aperture
For a telescope pupil of diameter $D$, the far-field diffraction amplitude $U(\theta)$ at angle $\theta$ from the optical axis is given by the 2D Fourier transform of the circular aperture transmission function $P(r)$:
$$U(\theta) \propto \int_0^{D/2} r dr \int_0^{2\pi} d\phi \exp\left(-i \frac{2\pi}{\lambda} r \theta \cos\phi\right)$$
Using the integral representation of the Bessel function of the first kind of order 0, $J_0(u) = \frac{1}{2\pi}\int_0^{2\pi} e^{-i u \cos\phi} d\phi$:
$$U(\theta) \propto \int_0^{D/2} r J_0\left(\frac{2\pi \theta}{\lambda} r\right) dr$$
Using the identity $\int_0^a x J_0(x) dx = a J_1(a)$, let $u = \frac{2\pi \theta}{\lambda} r$:
$$U(\theta) \propto \left(\frac{\lambda}{2\pi\theta}\right)^2 \int_0^{\frac{\pi D \theta}{\lambda}} u J_0(u) du \propto \frac{J_1\left(\frac{\pi D \theta}{\lambda}\right)}{\frac{\pi D \theta}{\lambda}}$$

The intensity $I(\theta) = |U(\theta)|^2$ is the **Airy pattern**:
$$I(\theta) = I_0 \left[\frac{2 J_1(x)}{x}\right]^2, \quad x \equiv \frac{\pi D \theta}{\lambda}$$

The first zero of $J_1(x)$ occurs at $x_1 \approx 3.8317$. Therefore, the angular radius $\theta_{Airy}$ to the first dark ring is:
$$\frac{\pi D \theta_{Airy}}{\lambda} = 3.8317 \implies \boxed{\theta_{Airy} = 1.2197 \frac{\lambda}{D} \approx 1.22 \frac{\lambda}{D} \quad [\text{radians}]}$$

Converting to arcseconds ($\text{arcsec} = \text{rad} \times 206265$):
$$\theta_{Airy} \approx 2.52 \times 10^5 \frac{\lambda}{D} \quad [\text{arcsec}]$$

### 4.2 Plate Scale Derivation
Let a telescope have effective focal length $f$. A small angular displacement $d\theta$ on the sky corresponds to a physical linear displacement $dx$ on the focal plane:
$$\tan(d\theta) \approx d\theta = \frac{dx}{f}$$
The **Plate Scale** $p$ is defined as the angular distance per unit focal plane distance:
$$p \equiv \frac{d\theta}{dx} = \frac{1}{f} \quad [\text{rad/mm}]$$

Converting to arcseconds per millimeter:
$$\boxed{p = \frac{206265}{f\text{ [mm]}} \quad [\text{arcsec/mm}]}$$

If a detector has pixel size $s_{pix}$ (e.g. $15\,\mu\text{m} = 0.015\,\text{mm}$), the pixel scale on sky is:
$$p_{sky} = p \times s_{pix} = \frac{206265 \times s_{pix}}{f} \quad [\text{arcsec/pixel}]$$
*Nyquist Sampling Criterion*: To properly sample an optical PSF of FWHM $\theta_{FWHM}$, the pixel size must satisfy:
$$p_{sky} \le \frac{\theta_{FWHM}}{2}$$
