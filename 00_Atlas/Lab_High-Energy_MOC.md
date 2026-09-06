---
layout: default
title: "Lab_High-Energy_MOC"
---

# High Energy Astrophysics Laboratory  -  Map of Content

The central thread of this course is a single question:
	**how do we detect, measure, and interpret radiation from the most violent objects in the universe?**

Every topic connects to this chain:
$$\text{violent source} \to \text{photons} \to \text{atmosphere blocks them} \to \text{space telescope} \to \text{detector} \to \text{counts} \to \text{spectrum} \to \text{physics}$$

All notes are linked below. The detailed derivations, equations, and figures live in each individual note.

---

## Block 1  -  Introduction and Observational Basics

Why X-ray astronomy must be done from space, and what "measuring" a source actually means.

- [High_Energy_Instrumentation](../01_Literature/Lectures/High_Energy_Instrumentation.md)  -  course overview and motivation
- [Atmospheric transmission](../02_Zettel/Theory/interf/Atmospheric transmission.md)  -  the four atmospheric effects; X-ray opacity; space as the only solution
- [Seeing Effect](../02_Zettel/Theory/Seeing Effect.md)  -  Kolmogorov turbulence, Fried parameter, seeing disk, adaptive optics
- [Luminosity and Flux for -Instrumentations](../02_Zettel/Theory/Luminosity and Flux for -Instrumentations.md)  -  $F = L/4\pi d_L^2$, photon flux, count rate, absorption, K-correction, ECF, hardness ratio
- [Luminosity](../02_Zettel/Theory/Luminosity.md)  -  quick reference; typical values
- [Telescope resolving power](../02_Zettel/Theory/Telescope resolving power.md)  -  Rayleigh criterion, plate scale, limiting factors by telescope type
- [Rayleigh criterion](../02_Zettel/Theory/Rayleigh criterion.md)  -  Airy disk derivation, $\theta = 1.22\lambda/D$, examples
- [Point Spread Function (PSF)](../02_Zettel/Theory/Point Spread Function (PSF).md)  -  PSF definition, FWHM vs HPD, EEF, on-axis vs off-axis
- [A Brief History of X-ray and Gamma-ray Missions](../02_Zettel/Theory/A Brief History of X-ray and Gamma-ray Missions.md)  -  from Giacconi 1962 to eROSITA 2019

---

## Block 2  -  X-ray Focusing Telescopes

How we build telescopes that reflect X-rays.

- [Grazing incidence](../02_Zettel/Theory/Grazing incidence.md)  -  refractive index $n = 1-\delta+i\beta$, critical angle $\theta_c \approx \sqrt{2\delta} \propto \sqrt{\rho}/E$, high-Z coatings
- [Bragg Reflection](../02_Zettel/Theory/Bragg Reflection.md)  -  multilayer coatings, modified Bragg equation, NuSTAR, hard X-ray focusing
- [Wolter Telescope](../02_Zettel/Theory/Wolter Telescope.md)  -  Wolter I/II/III, Abbe sine condition, two reflections, nested shells
- [Effective Area](../02_Zettel/Theory/Effective Area.md)  -  $A_{eff} = A_{geo} \times R_{mirrors} \times QE \times T_{filter}$, energy dependence, mission comparison
- [Angular Resolution](../02_Zettel/Theory/Angular Resolution.md)  -  HPD definition, blur circle sources ($\sigma_{diff}^2 + \sigma_{geom}^2 + \sigma_{rough}^2 + \sigma_{align}^2$), mission comparison

---

## Block 3  -  Alternative Instruments (Hard X-ray and Gamma-ray)

What to use when you cannot focus.

- [Processes of photon-matter interaction](../02_Zettel/Theory/Processes of photon-matter interaction.md)  -  three processes, linear attenuation coefficient $\mu = \sigma n$, mean free path $\lambda = 1/\mu$, domain diagram
- [Photoelectric absorption](../02_Zettel/Theory/Photoelectric absorption.md)  -  $\sigma_{ph} \propto Z^{4-5}/E^3$, absorption edges, relation to $\beta$, ISM column density
- [Compton scattering and pair production](../02_Zettel/Theory/Compton scattering and pair production.md)  -  Compton formula $E'_{ph}$, Klein-Nishina, pair production threshold $1.022~\text{MeV}$, annihilation
- [Mechanical Collimator](../02_Zettel/Theory/Mechanical Collimator.md)  -  $\Delta\theta = d/L$, on/off method, no imaging, source confusion
- [Coded Mask](../02_Zettel/Theory/Coded Mask.md)  -  shadowgram $D = S \otimes M + B$, deconvolution, $S' = S + B \otimes G$, INTEGRAL IBIS, Swift BAT
- [Compton Telescope](../02_Zettel/Theory/Compton Telescope.md)  -  two planes (scatterer + absorber), source cone, time-of-flight rejection, COMPTEL/CGRO

---

## Block 4  -  Detectors: CCDs

How X-ray photons become electrons and counts.

- [Charge-Coupled Device](../02_Zettel/Theory/Charge-Coupled Device.md)  -  semiconductors, energy bands, doping, n-type and p-type silicon
- [The p-n junction](../02_Zettel/Theory/The p-n junction.md)  -  diffusion, depletion region, reverse bias, buried channel
- [CCD readout](../02_Zettel/Theory/CCD readout.md)  -  MOS capacitor, 3-phase clocking, serial register, readout noise $\sigma_{RON}$, CTE
- [CCDs for X-rays](../02_Zettel/Theory/CCDs for X-rays.md)  -  $N_e = E_{ph}/w$ ($w = 3.68~\text{eV}$), photon counting mode, grades, pile-up, energy resolution
- [Quantum efficiency](../02_Zettel/Theory/Quantum efficiency.md)  -  transmission through dead layers $T = e^{-\mu t}$, absorption in depletion $A = 1 - e^{-\mu_{Si}d}$, front vs back illumination, optical blocking filter

---

## Block 5  -  X-ray Gratings

High-resolution spectroscopy with dispersive elements.

- [X-ray diffraction grating](../02_Zettel/Theory/X-ray diffraction grating.md)  -  transmission: $d(\sin\theta - \sin i) = m\lambda$; reflection: $d(\cos\theta - \cos i) = m\lambda$; Rowland circle; Chandra HETGS; XMM-Newton RGS
- [Appendix D - Gratings and spectrographs](../02_Zettel/Theory/Appendix D - Gratings and spectrographs.md)  -  grating equation geometry, blazed gratings, angular dispersion, resolving power $R = mN$

---

## Block 6  -  Astrostatistics

How to go from counts to meaningful physics.

- [Astrostatistics](../02_Zettel/Theory/Astrostatistics.md)  -  introduction, the full chain from photons to physics
- [Distributions](../02_Zettel/Theory/Distributions.md)  -  probability distributions, Poisson $f(k;\lambda) = \lambda^k e^{-\lambda}/k!$, $E[k] = V[k] = \lambda$, Gaussian approximation
- [Signal-Noise Ratio](../02_Zettel/Theory/Signal-Noise Ratio.md)  -  $SNR = st/\sqrt{(s+b)t}$, source-dominated vs background-dominated, why angular resolution matters
- [Fitting](../02_Zettel/Theory/Fitting.md)  -  $\chi^2$, reduced $\chi^2$, degrees of freedom, C-statistics (Kaastra 2017), forward folding, RMF, ARF
- [p-value](../02_Zettel/Theory/p-value.md)  -  definition, null hypothesis, 4-step hypothesis test, critical warning

---

## Block 7  -  Radiative Processes

The physics of what produces X-ray and gamma-ray emission.

- [Radiative Processes](../02_Zettel/Theory/Radiative Processes.md)  -  Larmor formula, three mechanisms overview, particle distributions
- [Bremsstrahlung](../02_Zettel/Theory/Bremsstrahlung.md)  -  thermal free-free emission, flat spectrum + exponential cutoff at $h\nu \sim k_BT$, galaxy clusters, emission measure
- [Synchroton](../02_Zettel/Theory/Synchroton.md)  -  relativistic electrons in $B$, $\nu_c \propto \gamma^2 qB/m_ec$, power-law spectrum $f_\nu \propto \nu^{-\alpha}$ with $\alpha = (s-1)/2$, cooling break
- [Compton and Inverse Compton](../02_Zettel/Theory/Compton and Inverse Compton.md)  -  Thomson/Compton, Klein-Nishina, IC energy boost $E_f \approx \gamma^2 E_i$, $P_{IC}/P_{syn} = U_{ph}/U_B$, Comptonization, y-parameter

---

## Block 8  -  Accretion onto Compact Objects

The extreme sources we observe.

- [Accretion onto compact objects](../02_Zettel/Theory/Accretion onto compact objects.md)  -  $L_{acc} = \eta\dot{m}c^2$, $L_{Edd} \approx 1.3\times10^{38}(M/M_\odot)$ erg/s, $T(r) \propto r^{-3/4}$, ISCO, XRBs, AGN unified model

---

## Appendices (background material)

- [Appendix A - Optical telescopes](../02_Zettel/Theory/Appendix A - Optical telescopes.md)  -  aperture ratio, plate scale, conic sections
- [Appendix B - Aberrations](../02_Zettel/Theory/Appendix B - Aberrations.md)  -  Seidel theory, spherical aberration, coma
- [Appendix C - Telescope configurations](../02_Zettel/Theory/Appendix C - Telescope configurations.md)  -  Newton, Cassegrain, Ritchey-Chrétien
- [Appendix E - Astronomical coordinates](../02_Zettel/Theory/Appendix E - Astronomical coordinates.md)  -  altazimuth, equatorial, vernal equinox, precession, J2000

---

---

# Oral Exam Questions and Answers

---

### Block 1  -  Introduction and Observational Basics

**Q1. Why is it impossible to do X-ray astronomy from the ground? What is the physical process responsible?**

X-ray photons with energies above $\sim 0.1~\text{keV}$ are absorbed by the Earth's atmosphere through **photoelectric absorption**. The atmospheric atoms (N, O, Ar) have ionization energies in this range. The cross-section goes as $\sigma_{ph} \propto Z^{4-5}/E^3$, so lower energies are more strongly absorbed. The optical depth $\tau_{atm} \gg 1$ at all X-ray energies below $\sim 100$ keV. The atmospheric hydrogen column density is $N_H^{atm} \sim 10^{25}$ cm$^{-2}$, which absorbs everything below $\sim 100$ keV completely. Therefore all X-ray observatories must be satellites.

---

**Q2. Define flux and luminosity. Write the relation between them and state all assumptions.**

**Luminosity** $L$ is the total power emitted by a source, intrinsic and independent of the observer.
**Flux** $F$ is the power received per unit collecting area at the detector.

For an isotropic point source at luminosity distance $d_L$:
$$F = \frac{L}{4\pi d_L^2}$$

Assumptions: (1) isotropic emission; (2) transparent medium (no absorption); (3) unresolved source; (4) for cosmological distances, $d_L = (1+z)d_C$ and the K-correction $K(z) = (1+z)^{2-\Gamma}$ must be applied for the observed vs rest-frame band.

---

**Q3. What is a photon flux and why is it used in X-ray astronomy instead of energy flux?**

The photon flux $\mathcal{F}(E) = F_E/E$ [ph/s/cm²/keV] counts photons per unit energy, not energy per unit energy. It is used because X-ray detectors (CCDs, proportional counters) count **individual photons**  -  each photon arrives as a discrete event and its deposited charge is proportional to its energy. Spectral fitting software (XSPEC, Sherpa) models the photon spectrum, folds it through the instrument response, and compares predicted counts to observed counts. Working in photon units avoids implicit spectral-shape assumptions needed to convert count rates to energy flux.

---

**Q4. What is the Rayleigh criterion? What actually limits X-ray telescope resolution?**

The Rayleigh criterion states two point sources are just resolved when the central maximum of one's Airy disk coincides with the first minimum of the other's: $\theta_{min} = 1.22\lambda/D$.

For X-ray telescopes, diffraction is completely irrelevant  -  at 1 keV with a 1-m aperture, $\theta_{diff} \approx 0.0003''$. The actual resolution is characterized by HPD and is dominated by:
$$\sigma_{blur}^2 = \sigma_{diff}^2 + \sigma_{geom}^2 + \sigma_{rough}^2 + \sigma_{align}^2$$
where mirror figure errors, surface roughness, and alignment errors all contribute. Chandra has HPD $\approx 0.5''$; XMM-Newton has HPD $\approx 14''$.

---

### Block 2  -  X-ray Telescopes

**Q5. Derive the critical angle for total external reflection of X-rays. Why does it depend on energy?**

The refractive index of the mirror material is $n = 1 - \delta + i\beta$ with $\delta > 0$, so $n < 1$. Applying Snell's law for grazing angle $\theta_c$ (measured from the surface):
$$\cos\theta_c = n \approx 1 - \delta$$

Using the small-angle approximation $\cos\theta_c \approx 1 - \theta_c^2/2$:
$$\theta_c \approx \sqrt{2\delta}$$

Since $\delta \propto \rho f_1 \lambda^2/W_m \propto \rho/E^2$ (at high energies):
$$\theta_c \propto \frac{\sqrt{\rho}}{E}$$

The critical angle decreases with energy → higher-energy photons require shallower grazing angles → above the cutoff energy for a given angle, the mirror stops reflecting → sharp drop in $A_{eff}(E)$.

---

**Q6. Describe the Wolter Type I telescope. Why are two reflections needed?**

A Wolter I telescope uses a **paraboloid** mirror followed by a **hyperboloid** mirror, both confocal, both at grazing incidence.

Two reflections are needed to satisfy the **Abbe sine condition**:
$$\frac{h}{\sin\theta} = R = \text{const}$$

A single paraboloid perfectly focuses on-axis sources but produces severe **coma** for off-axis sources  -  the useful field of view is negligibly small. The second reflection in the Wolter geometry ensures the same optical path for all rays, eliminating coma and producing a usable field of view. The factor $R^2(E)$ in $A_{eff}$ comes from two successive reflections with reflectivity $R(E)$ each.

---

**Q7. Write the effective area formula and explain each term. What limits it at low and high energies?**

$$A_{eff}(E) = A_{geo} \times R_{mirrors}(E) \times QE(E) \times T_{filter}(E)$$

- $A_{geo}$: annular geometric area of the mirror shell(s); nested shells add their contributions
- $R_{mirrors}(E)$: grazing-incidence reflectivity  -  falls sharply above the energy where $\theta_c(E) < \theta_{graze}$
- $QE(E)$: quantum efficiency  -  absorption in dead layers limits low E; finite depletion depth limits high E
- $T_{filter}(E)$: optical blocking filter  -  absorbs soft X-rays below $\sim 0.3$ keV

**Low-energy limit**: dead layers + filter absorb soft photons
**High-energy limit**: $\theta_c \propto 1/E$ → reflectivity falls → use Bragg multilayers (NuSTAR) to extend beyond 10 keV

---

**Q8. Explain the coded mask principle. Write the deconvolution equation and explain the background residual.**

A coded mask has open and closed pixels in a pseudo-random pattern. X-ray sources cast the mask shadow onto the detector  -  the shadowgram $D$ is a convolution:
$$D = S \otimes M + B$$

To recover the sky $S$, find a decoding array $G$ such that $M \otimes G = \delta$:
$$S' = D \otimes G = S + B \otimes G$$

The term $B \otimes G$ is the background convolved with the decoding function  -  it must be estimated and subtracted. Non-uniform or variable background introduces systematic residuals in the reconstructed image. Angular resolution: $\theta \sim d_{pixel}/D_{det}$ (mask pixel size / detector-mask distance).

---

### Block 3  -  Detectors (CCDs)

**Q9. How does a CCD detect an X-ray photon? How does this differ from optical detection?**

An X-ray photon absorbed in the silicon depletion region creates $N_e = E_{ph}/w$ electron-hole pairs, where $w = 3.68$ eV. The charge is proportional to the photon energy  -  both **position** (which pixel) and **energy** (how much charge) are measured simultaneously.

For optical photons ($E_{ph} \sim 2$ - $3$ eV): at most $N_e = 1$  -  no energy information. Optical CCDs integrate many photons; X-ray CCDs must operate in **photon counting mode** (at most 1 photon per pixel per frame), so each event gives an independent energy measurement.

---

**Q10. What is pile-up? When does it occur and what are its effects?**

Pile-up occurs when **two or more photons arrive in the same pixel within one readout frame**. Their charges sum, and the detector records a single event with the combined energy.

Effects:
- **Spectral hardening**: summed energy mimics a harder photon  -  spectrum appears harder than it is
- **Count rate saturation**: multiple photons counted as one → flux underestimated
- **Grade migration**: charge cloud shape changes → events misclassified or rejected

Pile-up probability: $p \approx 1 - e^{-f \cdot t_{frame}}$. Mitigation: smaller CCD sub-window (shorter frame time), grating spectroscopy for bright sources.

---

**Q11. Derive the energy resolution formula. What is the Fano factor?**

If $N_e = E_{ph}/w$ electrons are created on average, naively $\sigma^2 = N_e$ (Poisson). But ionization events are **correlated**  -  energy is shared among all created pairs (energy conservation). This reduces fluctuations by the **Fano factor** $F = 0.115$ for silicon:
$$\sigma^2(N_e) = F \cdot N_e = F \cdot E_{ph}/w$$

Adding readout noise $\sigma_{RON}$ in quadrature and converting to energy (1 $e^-$ = $w$ eV):
$$\text{FWHM} = 2.35 \cdot w \cdot \sqrt{\sigma_{RON}^2 + F \cdot E_{ph}/w}$$

For Fe K$\alpha$ at 6.4 keV with $\sigma_{RON} = 5$ $e^-$: FWHM $\approx 150$ eV, so $R = E/\Delta E \approx 43$.

---

### Block 4  -  Astrostatistics

**Q12. Why does Poisson statistics apply in X-ray astronomy? Derive the mean and variance.**

X-ray photons arrive as independent, rare events from a steady source  -  the number of photons in time $t$ satisfies: (1) independence, (2) constant rate $\lambda$, (3) at most one event per infinitesimal interval. This defines a Poisson process: $f(k;\lambda) = \lambda^k e^{-\lambda}/k!$

**Mean**: $E[k] = \lambda$ (by direct calculation, shifting the summation index)

**Variance**: $V[k] = E[k^2] - \lambda^2 = \lambda^2 + \lambda - \lambda^2 = \lambda$

Both equal $\lambda$: noise $\sigma = \sqrt{\lambda}$, relative noise $= 1/\sqrt{\lambda}$  -  faint sources have large fractional uncertainty.

---

**Q13. Derive the SNR formula. When does it not grow as $\sqrt{t}$?**

Source counts $N_{src} = st$, background counts $N_{bg} = bt$. Total detected counts $(s+b)t$ with Poisson noise $\sqrt{(s+b)t}$. The source signal over noise:
$$SNR = \frac{st}{\sqrt{(s+b)t}} = \frac{s\sqrt{t}}{\sqrt{s+b}}$$

$SNR \propto \sqrt{t}$ in both limiting regimes (source- and background-dominated). It **stops growing as $\sqrt{t}$** when systematics dominate: imperfect background subtraction, calibration uncertainty, confusion with nearby sources  -  these create irreducible floors that more exposure cannot overcome.

---

**Q14. When should you use C-statistics instead of $\chi^2$?**

$\chi^2$ requires Gaussian errors. The Gaussian approximation to Poisson holds when $D_i \gtrsim 20$ - $30$ counts per bin. For faint sources or fine spectral bins with few counts, the distribution is genuinely Poisson and $\chi^2$ gives biased parameter estimates and incorrect error bars.

C-statistics (Cash 1979, Kaastra 2017):
$$Cstat = 2\sum_i\left[M_i - D_i + D_i\ln\left(\frac{D_i}{M_i}\right)\right]$$

Derived from the Poisson log-likelihood. Minimizing $Cstat$ = maximizing Poisson likelihood. Valid for any count level, including $D_i = 0$.

---

### Block 5  -  Radiative Processes

**Q15. Describe the spectrum of thermal Bremsstrahlung. How do you measure plasma temperature?**

Thermal Bremsstrahlung arises from electron-ion collisions in hot plasma. The spectral power:
$$P_{br}(\nu) \propto Z_i^2 n_e n_i T_e^{-1/2} e^{-h\nu/k_BT_e} g_f$$

The spectrum is **flat** ($\nu^0$) below the exponential cutoff at $h\nu \sim k_BT_e$, and falls exponentially above it.

To measure $T$: fit the **spectral shape**  -  the exponential cutoff energy directly gives $k_BT_e$. The normalization gives the **emission measure** $EM = n_e^2 V$. In practice, the APEC or MEKAL model in XSPEC fits $T$, density, and metal abundances simultaneously using $\chi^2$ (bright sources) or C-statistics (faint sources).

---

**Q16. Derive the spectral index relation for synchrotron radiation.**

Each electron of Lorentz factor $\gamma$ emits near $\nu_c \propto \gamma^2 qB/m_ec$, so $\gamma \propto (\nu/\nu_0)^{1/2}$.

For electron distribution $N(\gamma) \propto \gamma^{-s}$:
$$j(\nu) \propto N(\gamma) \cdot P_{syn}(\gamma) \cdot |d\gamma/d\nu|$$

$P_{syn} \propto \gamma^2$, $|d\gamma/d\nu| \propto \gamma^{-1} \propto \nu^{-1/2}$, $N(\gamma) \propto \gamma^{-s} \propto \nu^{-s/2}$:
$$j(\nu) \propto \nu^{-s/2} \cdot \nu \cdot \nu^{-1/2} = \nu^{(1-s)/2}$$

So $f_\nu \propto \nu^{-\alpha}$ with $\alpha = (s-1)/2$. Steeper electron spectrum → steeper synchrotron spectrum. The cooling break: high-$\gamma$ electrons cool faster ($t_c \propto 1/\gamma$), steepening the electron spectrum by 1 above the break → synchrotron spectrum steepens by $\Delta\alpha = 0.5$.

---

**Q17. What is inverse Compton scattering? Write $P_{IC}/P_{syn}$ and explain its significance.**

A relativistic electron boosts a low-energy photon to high energy: $E_f \approx \gamma^2 E_i$.

IC power (Thomson regime): $P_{IC} = \frac{4}{3}\sigma_T c \gamma^2 \beta^2 U_{ph}$

Synchrotron power: $P_{syn} = \frac{4}{3}\sigma_T c \gamma^2 \beta^2 U_B$ (where $U_B = B^2/8\pi$)

$$\frac{P_{IC}}{P_{syn}} = \frac{U_{ph}}{U_B}$$

Physical significance: measuring both the synchrotron and IC emission from an AGN jet independently constrains $B$  -  no other assumption needed. The CMB photons upscattered by galaxy cluster electrons give the Sunyaev-Zel'dovich effect, used to find clusters independent of redshift.

---

### Block 6  -  Accretion

**Q18. Derive the Eddington luminosity. What happens when $L > L_{Edd}$?**

For a proton-electron pair in a radiation field of luminosity $L$ at distance $r$:

Radiation pressure on the electron (cross-section $\sigma_T$):
$$F_{rad} = \frac{\sigma_T L}{4\pi r^2 c}$$

Gravity on the proton:
$$F_{grav} = \frac{GM m_p}{r^2}$$

Setting $F_{rad} = F_{grav}$ and solving:
$$L_{Edd} = \frac{4\pi GM m_p c}{\sigma_T} \approx 1.3\times10^{38}\left(\frac{M}{M_\odot}\right)~\text{erg s}^{-1}$$

For $L > L_{Edd}$: radiation pressure exceeds gravity, blowing away infalling material and halting accretion. This sets an upper limit on steady-state accretion rate. Super-Eddington accretion can occur if emission is geometrically beamed (e.g. ULX pulsars).

---

**Q19. What produces the X-ray emission in AGN? Connect spectral components to physical regions.**

The X-ray spectrum of a typical AGN has multiple components:

1. **Soft excess** ($0.1$ - $2$ keV): accretion disk multicolor blackbody, $T(r) \propto r^{-3/4}$
2. **Power-law continuum** ($2$ - $100$ keV, $\Gamma \sim 1.7$ - $1.9$): inverse Compton scattering of disk photons by the hot corona ($kT_e \sim 100$ keV, $\tau \sim 1$); the Comptonization y-parameter $y = (4kT_e/m_ec^2) \times N_{es}$ governs the spectral shape
3. **Fe K$\alpha$ line** ($6.4$ keV for neutral Fe): fluorescence in the disk/torus; broad relativistically smeared profile constrains disk geometry and BH spin
4. **Reflection hump** ($\sim 20$ - $30$ keV): Compton backscattering of hard coronal photons off the disk
5. **Soft X-ray absorption** (Seyfert 2): photoelectric absorption through the obscuring torus, $N_{H,int} \sim 10^{22}$ - $10^{24}$ cm$^{-2}$

Observing tools: CCD spectroscopy (Chandra, XMM-Newton) for the soft band; grating spectroscopy for absorption lines; NuSTAR/INTEGRAL for the reflection hump and coronal cutoff.