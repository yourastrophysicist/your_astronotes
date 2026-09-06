---
layout: default
title: "Interferometry equation sheet"
---

# Interferometry equation sheet

a fast-lookup reference. organized by problem class. each entry: formula, what it means, when to use, units.

## diffraction-limited resolution

single aperture:
$$\theta_{\rm diff} = 1.22 \, \frac{\lambda}{D} \quad \text{(Airy disk first null)}$$

interferometer:
$$\theta_{\rm res} \approx \frac{\lambda}{B}$$

where $B$ is the longest baseline. a few useful values:
- VLTI, $\lambda = 2.2 \mu$m, $B = 130$ m: $\theta = 3.5$ mas
- CHARA, $\lambda = 700$ nm, $B = 330$ m: $\theta = 0.4$ mas
- ALMA, $\lambda = 1.3$ mm, $B = 16$ km: $\theta = 17$ mas
- EHT, $\lambda = 1.3$ mm, $B \sim 10^4$ km: $\theta = 25$ μas

## Young's fringes

fringe spacing on a screen at distance $L$ from a slit pair separated by $d$:
$$\Delta y = \frac{\lambda L}{d}$$

angular fringe spacing on the sky (interferometer view):
$$\Delta \theta = \frac{\lambda}{d}$$

## visibility (the central observable)

definition (fringe contrast):
$$V = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}}, \quad V \in [0, 1]$$

complex visibility:
$$\mathcal V = |\mathcal V| \, e^{i\phi}$$

where $|\mathcal V|$ is the contrast and $\phi$ is the fringe-position phase.

## Van Cittert-Zernike theorem

**the central theorem**: the visibility is the Fourier transform of the source brightness distribution.

$$\mathcal V(\mathbf u) = \int \int I(\mathbf l) \, e^{-2\pi i \mathbf u \cdot \mathbf l} \, d^2\mathbf l$$

with $\mathbf u = \mathbf B/\lambda$ the spatial frequency vector, $\mathbf l = (l, m)$ the direction cosines on the sky, $I(\mathbf l)$ the brightness distribution.

inverse:
$$I(\mathbf l) = \int \int \mathcal V(\mathbf u) \, e^{+2\pi i \mathbf u \cdot \mathbf l} \, d^2\mathbf u$$

## visibility for simple sources

**point source** at center: $\mathcal V(\mathbf u) = 1$ (constant).

**uniform disk** of angular diameter $\theta$:
$$V(B) = \left|\frac{2 J_1(\pi \theta B/\lambda)}{\pi \theta B/\lambda}\right|$$

(Airy-like). first null at $B = 1.22 \lambda/\theta$.

**binary system** (two unresolved point sources, intensities $I_1, I_2$, separation $\rho$):
$$V(B) = \frac{\sqrt{I_1^2 + I_2^2 + 2 I_1 I_2 \cos(2\pi \rho B/\lambda)}}{I_1 + I_2}$$

oscillates with baseline.

**Gaussian** disk of FWHM $\theta_G$:
$$V(B) = \exp\!\left[-\frac{\pi^2 \theta_G^2 B^2}{4\lambda^2 \ln 2}\right]$$

monotonically decreasing.

## the (u, v) plane

baseline projected on the sky:
$$\mathbf u = \frac{\mathbf B_{\perp}}{\lambda}$$

units: wavelengths (no dimensions). ALMA at 100 GHz with $B = 10$ km: $u \sim 3 \times 10^6$ wavelengths.

Earth-rotation synthesis: as the source moves across the sky, the *projected* baseline traces an elliptical arc in the (u, v) plane. arcs from many baselines fill the plane.

## phase closure (key for optical imaging)

closure phase of three baselines $i, j, k$:
$$\Phi_{ijk} = \phi_{ij} + \phi_{jk} + \phi_{ki}$$

atmospheric phase contributions cancel because each appears with opposite signs in two terms. closure phase is **atmosphere-independent**, the basis for optical imaging.

closure amplitude (4 baselines):
$$A_{ijkl} = \frac{|V_{ij}| |V_{kl}|}{|V_{ik}| |V_{jl}|}$$

gain-independent.

## atmosphere

**Kolmogorov structure function**:
$$D_\phi(r) = 6.88 \, (r/r_0)^{5/3}$$

**Fried parameter**:
$$r_0 = 0.185 \lambda^{6/5} \left[\int C_n^2(z) \, dz\right]^{-3/5}$$

at 500 nm, good site: $r_0 \approx 10$-20 cm.

**seeing-limited resolution**:
$$\theta_{\rm seeing} \approx \frac{\lambda}{r_0} \approx 0.5'' - 1''$$

**isoplanatic angle**:
$$\theta_0 \approx 2.9'' \times \left(\frac{\lambda}{500\,\text{nm}}\right)^{6/5}$$

**$r_0$ wavelength scaling**:
$$r_0 \propto \lambda^{6/5}$$

so atmosphere is "easier" in the IR: a 10× wavelength gives $\sim 16\times$ larger $r_0$.

**coherence time**:
$$\tau_0 \sim \frac{r_0}{v_{\rm wind}} \sim \text{few ms (visible)}$$

## radio interferometry

**system temperature**:
$$T_{\rm sys} = T_{\rm rec} + T_{\rm atm} + T_{\rm spill} + T_{\rm CMB}$$

**rms noise** in a single baseline measurement (radiometer equation):
$$\sigma_{\rm V} = \frac{2 k_B T_{\rm sys}}{A_{\rm eff} \sqrt{\Delta\nu \, \tau}}$$

with $A_{\rm eff}$ = effective antenna area, $\Delta\nu$ = bandwidth, $\tau$ = integration time.

**rms noise** in a synthesized image with $N$ antennas:
$$\sigma_{\rm map} = \frac{\sigma_V}{\sqrt{N(N-1)/2 \cdot \tau_{\rm tot}/\tau}}$$

## CLEAN algorithm

iterative deconvolution. at iteration $i$:

1. find peak in residual map $R_i$
2. subtract a fraction $\gamma$ (typically 0.1) of the dirty beam centered at the peak: $R_{i+1} = R_i - \gamma I_{\rm peak} B_{\rm dirty}(\mathbf l - \mathbf l_{\rm peak})$
3. add to the **clean components** list at $\mathbf l_{\rm peak}$
4. iterate until residual is consistent with noise

restored image: clean components convolved with a **clean beam** (Gaussian fit to the central lobe of the dirty beam) plus the residuals.

## sensitivity and noise

**point-source rms**:
$$\sigma = \frac{T_{\rm sys}}{\eta_q \sqrt{N(N-1) \, \Delta\nu \, \tau}} \cdot \frac{2 k_B}{A_{\rm eff}}$$

**brightness temperature sensitivity** depends on resolution:
$$T_b \sim \frac{\sigma_S \, \lambda^2}{2 k_B \, \Omega_{\rm beam}}$$

so finer resolution = harder to detect a low-brightness extended source.

## photon-noise-limited optical interferometry

with $N_{\rm photons}$ photons in the coherence cell and time, the SNR on the visibility:
$$\text{SNR}(V) \approx \frac{V \sqrt{N_{\rm photons}}}{1 + V \sqrt{N_{\rm photons}}}$$

this is why optical interferometry on faint targets is hard.

## key numerical anchors

| quantity | typical value |
|---|---|
| diffraction limit, HST | $0.05''$ |
| seeing, good ground-based | $0.5''$ |
| Fried $r_0$, visible | $\sim 10$ cm |
| Fried $r_0$, K-band | $\sim 60$ cm |
| isoplanatic patch, visible | $\sim 2''$ |
| coherence time, visible | $\sim 5$ ms |
| VLTI baselines | 8-130 m |
| CHARA baselines | 33-330 m |
| ALMA baselines | 15 m - 16 km |
| VLA baselines (D config) | 35 m - 1 km |
| VLA baselines (A config) | 0.7 - 36 km |
| EHT baselines | thousands of km, near Earth-diameter |
| $\theta_{\rm res}$, VLTI K | $\sim 3$ mas |
| $\theta_{\rm res}$, CHARA H | $\sim 0.5$ mas |
| $\theta_{\rm res}$, ALMA Band 6 | $\sim 30$ mas (extended) |
| $\theta_{\rm res}$, EHT 230 GHz | $\sim 25$ μas |
| Sun's diameter at 10 pc | $\sim 1$ mas |
| typical YSO disk inner edge | $\sim 1$-10 mas |
| Sgr A$^*$ ring diameter | 50 μas |
| M87 ring diameter | 42 μas |

## BookAI additions: radio quantities and signal chain

specific intensity:

$$I_\nu=\frac{dE}{dA\,dt\,d\nu\,d\Omega}$$

flux density:

$$S_\nu=\int I_\nu d\Omega,\qquad 1\,\mathrm{Jy}=10^{-26}\,\mathrm{W\,m^{-2}\,Hz^{-1}}$$

Rayleigh-Jeans and brightness temperature:

$$B_\nu\simeq\frac{2kT\nu^2}{c^2},\qquad T_b=\frac{c^2I_\nu}{2k\nu^2}$$

antenna effective area, directivity, gain:

$$A_{\rm eff}=\eta A,\qquad D=\frac{4\pi}{\Omega_A},\qquad G=\frac{4\pi A_{\rm eff}}{\lambda^2}$$

beam solid angle:

$$\Omega_A=\int P(\theta,\phi)d\Omega$$

Gaussian beam:

$$P_G(\theta)=\exp\left[-4\ln2\frac{\theta^2}{\theta_{\rm FWHM}^2}\right],\qquad \Omega_G\simeq1.13\theta_{\rm FWHM}^2$$

SEFD:

$$\mathrm{SEFD}=\frac{2k_BT_{\rm sys}}{A_{\rm eff}}$$

interferometer RMS:

$$\sigma\simeq\frac{\mathrm{SEFD}}{\sqrt{N_{\rm ant}(N_{\rm ant}-1)\Delta\nu t}}$$

heterodyne mixing:

$$\nu_{\rm IF}=|\nu_{\rm RF}-\nu_{\rm LO}|$$

geometric delay:

$$\tau_g=\frac{\mathbf B\cdot\mathbf s}{c}$$

correlator:

$$R_{ij}(\tau)=\langle V_i(t)V_j^*(t+\tau)\rangle$$

Wiener-Khinchin:

$$S_x(\nu)=\int R_x(\tau)e^{-2\pi i\nu\tau}d\tau$$

Faraday rotation:

$$\chi(\lambda)=\chi_0+\mathrm{RM}\lambda^2$$

## see also

- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
- [Interferometry course intro](../../../02_Zettel/Theory/interf/Interferometry course intro.html)