---
layout: default
title: "Astronomical_Interferometry_MOC"
---

# Astronomical Interferometry  -  Map of Content

A.Y. 2025/2026  -  **Prof. Mauro D'Onofrio**, University of Padova. Master's-level second-semester course in the Astrophysics and Cosmology programme.  this is now the first exam in the summer block.

interferometry is the technique that lets us see things smaller than any single telescope can resolve. it is the technology behind every milli-arcsecond image in modern astrophysics, from the imaging of stellar surfaces and YSO disks to the Event Horizon Telescope's M87 black hole picture. by combining the light (or radio waves) from multiple telescopes coherently, we *synthesize* an aperture as large as the largest separation between them. it is *the* high-angular-resolution technique, and the entire course is one long answer to: how does this actually work?

the course covers both **optical/IR interferometry** (Labeyrie's textbook is the spine) and **radio interferometry** (the practical aperture-synthesis techniques behind VLA, ALMA, EVN, EHT). the physics is the same  -  phase, coherence, Van Cittert-Zernike  -  but the instruments and operating regimes differ in important ways that this MOC tries to keep clear.

## the question this course is trying to answer

> **how do I see something whose angular size is smaller than the diffraction limit of any telescope I can afford to build?**

a single telescope of diameter $D$ has a diffraction-limited resolution $\theta \approx 1.22 \lambda/D$. for $\lambda = 500$ nm and $D = 10$ m: $\theta \approx 0.013''$. for a star at 10 pc with radius like the Sun, the angular diameter is $\sim 10^{-3''}$  -  *ten times smaller* than the diffraction limit of the biggest optical telescope. a giant 100 m telescope is technologically infeasible at optical wavelengths.

interferometry's answer: *do not build a 100 m telescope. build two 10 m telescopes 100 m apart, and combine their light coherently*. the angular resolution becomes $\theta \approx \lambda/B$ where $B$ is the **baseline** (separation between telescopes). a 100 m baseline at 500 nm: $\theta \approx 1$ mas, the size of a star at 10 pc.

the catch: I cannot directly form the image. what I measure are **fringe visibilities**  -  the contrast and phase of the interference pattern. these are *Fourier components* of the source brightness distribution. to get the image back, I must invert a partial Fourier transform, sample by sample, baseline by baseline. this is **aperture synthesis**, the central technique of the field.

## the chain of objects, what we will build

interferometry rests on a chain of physical and mathematical objects:

$$\text{plane wave} \to \text{coherence} \to \text{visibility} \to \text{Fourier component} \to \text{(uv) sample} \to \text{dirty image} \to \text{deconvolved image}$$

each object is the bridge between two layers of the theory:

- **plane wave** is what comes from a distant point source
- **coherence** is the statistical property that makes interference fringes possible
- **visibility** is what an interferometer measures  -  the complex correlation of two signals
- the **Van Cittert-Zernike theorem** says that visibility is the Fourier transform of the source brightness distribution
- a baseline samples *one* Fourier component at the spatial frequency $\mathbf{u} = \mathbf{B}/\lambda$
- many baselines sample many Fourier components → the **(u, v) plane**
- inverse-Fourier-transforming gives the **dirty image**: the true image convolved with the **dirty beam** (the Fourier transform of the (u,v) coverage)
- deconvolving with CLEAN, MEM, or modern Bayesian techniques gives the final image

so the entire course is an extended answer to *how do I get from a sky brightness to a measured fringe and back*.

## reference texts

- **Labeyrie, Lipson, Nisenson**, *An Introduction to Optical Stellar Interferometry* (CUP 2006)  -  the spine. comprehensive coverage from Young's experiment to space missions
- **Thompson, Moran, Swenson**, *Interferometry and Synthesis in Radio Astronomy* (3rd ed., Springer Open Access)  -  the bible of radio interferometry. dense, rigorous, complete
- **Haniff**, *Garching primer on optical interferometry* (in source folder)  -  concise pedagogical introduction
- **Moellenbrock**, *Calibration and Imaging in Radio Interferometry* (in source folder)  -  the practical NRAO synthesis-imaging summer school notes
- **Paladino**, *Lab radio* notes (in source folder)  -  Padova-specific lab notes on radio interferometry data reduction
- **Ransom**, *S. Ransom 0818*  -  the ALMA-era introduction with worked examples
- **Lyne & Smith**, *Pulsar Astronomy*  -  for the timing-array applications

## how to use this map

every blue link drops into a single concept zettel. recommended reading order for studying:

1. **read this MOC top to bottom** to get the dependency graph
2. **for each block, read the linked zettels** in order
3. **for each block, work through the relevant chapters of Labeyrie** for the optical side, and Paladino's notes for the radio side
4. **for the imaging blocks (3, 8, 9), play with APSYNSIM**  -  the interactive aperture-synthesis simulator in the source folder (`apsynsim/` and `APSYNSIM-master/`). it is the single most useful pedagogical tool for understanding (u, v) coverage, dirty images, and CLEAN
5. **for past exam preparation**, the project folder `05_Projects/Exam/First Year/Interferometry Exam 2026/` will hold the question lists once written

every zettel follows the same pattern: motivation, math, physical interpretation, instrument example, science use case.

## block 0  -  course frame

before any physics, just *what is this course, who teaches it, what is the exam*.

- [Interferometry course intro](../02_Zettel/Theory/interf/Interferometry course intro.html)  -  instructor, scope, how the optical and radio halves fit together
- [Interferometry equation sheet](../02_Zettel/Theory/interf/Interferometry equation sheet.html)  -  every formula I might want, organized for fast lookup
- [Figure bank - interferometry](../02_Zettel/Theory/interf/Figure bank - interferometry.html)  -  visual index for the scientific figures added across the zettels
- [Why interferometry](../02_Zettel/Theory/interf/Why interferometry.html)  -  the angular-resolution motivation and the science it enables

---

## block 1  -  the physics fundamentals

before any interferometer, the underlying physics: light is a wave, waves superpose, superposition produces interference. once we have these in hand, every interferometer is "just" a clever way to make two waves from the same source meet at a detector.

- [Light waves and the EM spectrum](../02_Zettel/Theory/interf/Light waves and the EM spectrum.html)  -  wave nature, $c = \lambda\nu$, refractive index, visible 380-750 nm
- [Plane waves and Huygens principle](../02_Zettel/Theory/interf/Plane waves and Huygens principle.html)  -  the model of light as a propagating disturbance, Huygens construction for diffraction
- [Superposition and interference](../02_Zettel/Theory/interf/Superposition and interference.html)  -  adding two waves, Young's two-slit experiment, fringe spacing $\lambda L/d$
- [Electromagnetic waves and photons](../02_Zettel/Theory/interf/Electromagnetic waves and photons.html)  -  wave-particle duality and why interferometry needs the wave picture
- [Optical path difference OPD](../02_Zettel/Theory/interf/Optical path difference OPD.html)  -  the master variable that drives the fringe pattern
- [Fresnel-Arago laws](../02_Zettel/Theory/interf/Fresnel-Arago laws.html)  -  when polarized waves can and cannot interfere
- [Young experiment as a stellar interferometer](../02_Zettel/Theory/interf/Young experiment as a stellar interferometer.html)  -  Stéphan and Michelson's insight: use the slit experiment on the sky to measure $\theta$
- [Fringe visibility and contrast](../02_Zettel/Theory/interf/Fringe visibility and contrast.html)  -  $V = (I_{\max} - I_{\min})/(I_{\max} + I_{\min})$, the observable

### block 1.5  -  classical-optics interferometers (D'Onofrio Lezione 1-2)

before astronomical interferometers, the laboratory ones. D'Onofrio's course develops these in detail because every astronomical interferometer is descended from one of them.

- [Wavefront-division interferometers](../02_Zettel/Theory/interf/Wavefront-division interferometers.html)  -  Young, Fresnel double mirror, Fresnel biprism, Lloyd mirror
- [Amplitude-division interferometers](../02_Zettel/Theory/Amplitude-division interferometers.html)  -  Michelson lab, Mach-Zehnder, Sagnac, Fabry-Perot
- [Fresnel double mirror](../02_Zettel/Theory/interf/Fresnel double mirror.html)  -  two-mirror geometry producing two virtual sources
- [Fresnel biprism](../02_Zettel/Theory/interf/Fresnel biprism.html)  -  single prism with two refracting halves
- [Lloyd mirror](../02_Zettel/Theory/interf/Lloyd mirror.html)  -  single grazing-incidence mirror, the simplest two-source setup
- [Michelson laboratory interferometer](../02_Zettel/Theory/interf/Michelson laboratory interferometer.html)  -  beam-splitter + two mirrors, the workhorse of metrology
- [Mach-Zehnder interferometer](../02_Zettel/Theory/interf/Mach-Zehnder interferometer.html)  -  two beam splitters, quantum-information friendly
- [Sagnac interferometer](../02_Zettel/Theory/interf/Sagnac interferometer.html)  -  counter-propagating beams in a closed loop, rotation-sensitive
- [Fabry-Perot interferometer](../02_Zettel/Theory/interf/Fabry-Perot interferometer.html)  -  multiple-beam interference between two parallel mirrors
- [Beam splitter physics](../02_Zettel/Theory/interf/Beam splitter physics.html)  -  partial reflection at a dielectric interface, $\pi$-phase asymmetry
- [Fringes of equal inclination](../02_Zettel/Theory/interf/Fringes of equal inclination.html)  -  circular fringes from a thin film at varying angles
- [Fringes of equal thickness](../02_Zettel/Theory/interf/Fringes of equal thickness.html)  -  straight or curved fringes from a wedge film
- [Newton's rings](../02_Zettel/Theory/interf/Newton's rings.html)  -  concentric fringes from an air gap between a lens and a flat

---

## block 2  -  interference, diffraction, and coherence

the formal toolkit of wave optics. coherence is what makes fringes possible. the Van Cittert-Zernike theorem is the single most important result in this course.

- [Fraunhofer diffraction](../02_Zettel/Theory/interf/Fraunhofer diffraction.html)  -  far-field approximation, diffraction integral as a Fourier transform
- [Diffraction patterns of simple apertures](../02_Zettel/Theory/interf/Diffraction patterns of simple apertures.html)  -  single slit (sinc), circular aperture (Airy), rectangular, double slit
- [Point spread function](../02_Zettel/Theory/interf/Point spread function.html)  -  the diffraction-limited image of a point source
- [Optical transfer function](../02_Zettel/Theory/interf/Optical transfer function.html)  -  Fourier transform of the PSF, the spatial-frequency response of an optical system
- [Abbe experiment and Fourier optics](../02_Zettel/Theory/interf/Abbe experiment and Fourier optics.html)  -  image formation as spatial-frequency selection: aperture cutoff, OTF/MTF, and why resolution is Fourier bandwidth
- [Coherent vs incoherent imaging](../02_Zettel/Theory/interf/Coherent vs incoherent imaging.html)  -  when waves add as amplitudes vs when they add as intensities
- [Spatial coherence](../02_Zettel/Theory/interf/Spatial coherence.html)  -  correlation of the wave at two points, what allows fringes between two apertures
- [Temporal coherence](../02_Zettel/Theory/interf/Temporal coherence.html)  -  correlation in time, sets the maximum optical-path difference for fringes
- [Wiener-Khinchin theorem](../02_Zettel/Theory/interf/Wiener-Khinchin theorem.html)  -  autocorrelation and power spectrum as Fourier pairs, the bridge between coherence, spectra, and correlators
- [Coherence function and visibility](../02_Zettel/Theory/interf/Coherence function and visibility.html)  -  the math link: $V = |\gamma_{12}|$ where $\gamma_{12}$ is the normalized cross-correlation
- [Van Cittert-Zernike theorem](../02_Zettel/Theory/interf/Van Cittert-Zernike theorem.html)  -  **the central theorem**: visibility is the Fourier transform of the source brightness distribution
- [Photon noise and statistics](../02_Zettel/Theory/interf/Photon noise and statistics.html)  -  Poisson statistics, the photon-noise floor of every interferometric measurement

---

## block 3  -  aperture synthesis

the engineering of building an image from many baselines. a single baseline samples one Fourier component; an array samples many; we Fourier-invert. the $(u, v)$ plane and its sampling are the unifying picture.

- [Aperture synthesis principle](../02_Zettel/Theory/interf/Aperture synthesis principle.html)  -  multiple separated apertures = synthetic large aperture, sampling the (u, v) plane
- [The (u, v) plane](../02_Zettel/Theory/interf/The (u, v) plane.md)  -  projection of baselines on the sky, why Earth rotation makes the sampling track elliptical arcs
- [Earth-rotation aperture synthesis](../02_Zettel/Theory/interf/Earth-rotation aperture synthesis.html)  -  using Earth's rotation to fill the (u, v) plane over a night
- [Optimal array geometry](../02_Zettel/Theory/interf/Optimal array geometry.html)  -  circular, Y, T, configurations: tradeoffs between resolution and snapshot fidelity
- [Dirty beam and dirty image](../02_Zettel/Theory/interf/Dirty beam and dirty image.html)  -  the synthesized PSF and the convolved image straight from the (u, v) data
- [The phase problem in interferometry](../02_Zettel/Theory/interf/The phase problem in interferometry.html)  -  turbulent atmosphere randomizes phases, why visibility amplitude is preserved but phase is not
- [Phase closure](../02_Zettel/Theory/interf/Phase closure.html)  -  closure phase of three baselines is atmosphere-independent, the key to optical imaging
- [Closure amplitude](../02_Zettel/Theory/interf/Closure amplitude.html)  -  closure amplitude of four baselines is gain-independent
- [Heterodyne vs direct detection](../02_Zettel/Theory/interf/Heterodyne vs direct detection.html)  -  radio mixes signals down to RF before correlation; optical has no oscillators, must combine waves directly
- [Crowding limitation](../02_Zettel/Theory/interf/Crowding limitation.html)  -  fundamental limit on the field of view for a sparse array, why we cannot image the whole sky at once

---

## block 4  -  optical effects of the atmosphere

the atmosphere is the worst enemy of optical interferometry and a manageable nuisance for radio. understanding *why* unlocks the techniques to get around it.

- [Atmospheric turbulence overview](../02_Zettel/Theory/interf/Atmospheric turbulence overview.html)  -  the seeing, $r_0$, and isoplanatic patch as observable consequences of atmospheric turbulence
- [Kolmogorov turbulence](../02_Zettel/Theory/interf/Kolmogorov turbulence.html)  -  the canonical model, $D(r) \propto r^{2/3}$, the inertial range
- [Structure function and correlation function](../02_Zettel/Theory/interf/Structure function and correlation function.html)  -  $D(r), B(r)$, the statistical descriptors of phase fluctuations
- [Fried parameter $r_0$](../02_Zettel/Theory/interf/Fried parameter $r_0$.html)  -  the size of the patch over which atmospheric phase is coherent, $r_0 \sim 10$ cm at 500 nm
- [Isoplanatic patch](../02_Zettel/Theory/interf/Isoplanatic patch.html)  -  the angular size over which the atmospheric distortion is the same, $\theta_0 \sim$ a few arcseconds
- [Frozen turbulence and Taylor hypothesis](../02_Zettel/Theory/interf/Frozen turbulence and Taylor hypothesis.html)  -  wind sweeping a frozen turbulent screen, the temporal proxy for spatial fluctuations
- [Scintillation and twinkling](../02_Zettel/Theory/interf/Scintillation and twinkling.html)  -  intensity fluctuations from refraction, the visible "twinkle" of stars
- [Adaptive optics](../02_Zettel/Theory/interf/Adaptive optics.html)  -  measure the wavefront, deform a mirror, undo the distortion in real time
- [Wavefront sensors](../02_Zettel/Theory/interf/Wavefront sensors.html)  -  Shack-Hartmann, pyramid, curvature: how I measure the distortion
- [Deformable mirrors and tip-tilt](../02_Zettel/Theory/interf/Deformable mirrors and tip-tilt.html)  -  the actuator side, how I correct the distortion
- [Guide stars and laser guide stars](../02_Zettel/Theory/interf/Guide stars and laser guide stars.html)  -  the reference object I lock onto, natural vs sodium-laser

---

## block 5  -  single-aperture high-resolution techniques

before full interferometry, there are tricks to push a single telescope past the seeing-limited resolution. these are the historical precursors and still useful today.

- [Speckle interferometry](../02_Zettel/Theory/interf/Speckle interferometry.html)  -  short exposures freeze the seeing, autocorrelation recovers the diffraction-limited power spectrum
- [Theory of speckle interferometry](../02_Zettel/Theory/interf/Theory of speckle interferometry.html)  -  the Labeyrie 1970 derivation, the speckle transfer function
- [Aperture masking](../02_Zettel/Theory/interf/Aperture masking.html)  -  block all but a few patches of the primary, turn the telescope into a multi-element interferometer
- [Speckle imaging algorithms](../02_Zettel/Theory/interf/Speckle imaging algorithms.html)  -  Knox-Thompson and triple-correlation (bispectrum) phase reconstruction
- [Bispectrum and triple correlation](../02_Zettel/Theory/interf/Bispectrum and triple correlation.html)  -  the closure-phase analog for single-aperture work, recovers an image from speckle data

---

## block 6  -  intensity interferometry

a different beast: correlate intensity fluctuations rather than wave amplitudes. relaxes the phase-stability requirements at the cost of much lower sensitivity. invented by Hanbury Brown and Twiss for stellar diameters.

- [Intensity interferometry concept](../02_Zettel/Theory/interf/Intensity interferometry concept.html)  -  the HBT effect, $\langle I_1 I_2\rangle - \langle I_1\rangle\langle I_2\rangle \neq 0$ for a coherent source
- [Hanbury Brown Twiss effect](../02_Zettel/Theory/interf/Hanbury Brown Twiss effect.html)  -  the foundational experiment, classical and quantum interpretations
- [Narrabri stellar interferometer](../02_Zettel/Theory/interf/Narrabri stellar interferometer.html)  -  the first instrument that systematically measured stellar diameters this way
- [Why intensity interferometry escapes atmospheric phase](../02_Zettel/Theory/interf/Why intensity interferometry escapes atmospheric phase.html)  -  only intensity correlations are needed; the atmosphere randomizes the wave phase but preserves the intensity correlation
- [Sensitivity and modern revival](../02_Zettel/Theory/interf/Sensitivity and modern revival.html)  -  IACT arrays (CTA, VERITAS) revisiting the technique with modern photon-counting detectors

---

## block 7  -  amplitude interferometry instruments

the workhorses: optical/IR interferometers that combine wave amplitudes from separated apertures. each has its quirks, and knowing them is what the exam tests.

- [Michelson stellar interferometer](../02_Zettel/Theory/interf/Michelson stellar interferometer.html)  -  the historical first, 20-foot beam at Mt Wilson, Betelgeuse's diameter (1920)
- [Components of a modern interferometer](../02_Zettel/Theory/interf/Components of a modern interferometer.html)  -  telescopes, beam lines, delay lines, beam combiners, fringe trackers
- [Delay lines and path-length equalization](../02_Zettel/Theory/interf/Delay lines and path-length equalization.html)  -  keeping the optical path lengths matched to within the coherence length
- [Beam combiners](../02_Zettel/Theory/Beam combiners.html)  -  pairwise (Michelson), all-on-one (Fizeau), single-mode-fiber, integrated-optics
- [Fringe tracking](../02_Zettel/Theory/interf/Fringe tracking.html)  -  actively locking onto the fringe to compensate for atmospheric and mechanical drift
- [VLTI Very Large Telescope Interferometer](../02_Zettel/Theory/interf/VLTI Very Large Telescope Interferometer.html)  -  ESO's 4 × 8m + 4 × 1.8m, baselines 8-130 m, IR
- [CHARA array](../02_Zettel/Theory/interf/CHARA array.html)  -  Mt Wilson, six 1m telescopes, 33-330 m baselines, the workhorse for stellar surface imaging
- [Large Binocular Telescope LBT](../02_Zettel/Theory/interf/Large Binocular Telescope LBT.html)  -  two 8m mirrors on one mount, Fizeau-style imaging
- [COAST Cambridge Optical Aperture Synthesis Telescope](../02_Zettel/Theory/interf/COAST Cambridge Optical Aperture Synthesis Telescope.html)  -  small but historically significant, first true optical aperture synthesis image
- [NPOI Navy Prototype Optical Interferometer](../02_Zettel/Theory/interf/NPOI Navy Prototype Optical Interferometer.html)  -  astrometric and imaging instrument
- [Keck interferometer](../02_Zettel/Theory/interf/Keck interferometer.html)  -  twin 10m telescopes, now decommissioned

---

## block 8  -  radio interferometry

the parallel universe. radio observations have it easier (no daytime brightness, Earth-rotation aperture synthesis works perfectly, electronics can heterodyne) but harder (huge antennas needed for sensitivity, RFI). the techniques are the same, the practical implementation completely different.

- [Radio astronomy basics](../02_Zettel/Theory/interf/Radio astronomy basics.html)  -  Jansky, antenna temperature, brightness temperature, radio quiet zones, Allen-Mills
- [Specific intensity and flux density](../02_Zettel/Theory/interf/Specific intensity and flux density.html)  -  the language of radio sources: $I_\nu$, $S_\nu$, Jansky, beam integration, and brightness temperature
- [Antenna effective area and gain](../02_Zettel/Theory/interf/Antenna effective area and gain.html)  -  how a dish turns an electromagnetic wave into measurable power, with $A_{\rm e}$, gain, and aperture efficiency
- [Beam power pattern of a radio telescope](../02_Zettel/Theory/interf/Beam power pattern of a radio telescope.html)  -  primary beam, beam solid angle, Gaussian beams, and why every antenna measures a weighted sky
- [Radiometer equation and SEFD](../02_Zettel/Theory/interf/Radiometer equation and SEFD.html)  -  sensitivity from noise statistics: $T_{\rm sys}$, SEFD, bandwidth, integration time, and array RMS
- [Radio interferometer architecture](../02_Zettel/Theory/interf/Radio interferometer architecture.html)  -  antennas, LO, mixer, correlator, the heterodyne chain
- [Downconversion of signals in radio interferometers](../02_Zettel/Theory/interf/Downconversion of signals in radio interferometers.html)  -  why radio arrays preserve phase by mixing sky frequencies down to IF before digitization
- [Digitization quantization and timing in radio interferometry](../02_Zettel/Theory/interf/Digitization quantization and timing in radio interferometry.html)  -  sampling, quantization efficiency, time standards, and why correlators need synchronized data streams
- [Two-element correlator](../02_Zettel/Theory/interf/Two-element correlator.html)  -  the building block: multiply and time-average two voltages
- [Connected element interferometer](../02_Zettel/Theory/interf/Connected element interferometer.html)  -  VLA-style, baselines fixed by cabling
- [Very Long Baseline Interferometry VLBI](../02_Zettel/Theory/interf/Very Long Baseline Interferometry VLBI.html)  -  antennas around the world, atomic clocks, post-correlation, EVN, VLBA
- [Earth rotation synthesis in radio](../02_Zettel/Theory/interf/Earth rotation synthesis in radio.html)  -  VLA's 12-hour tracks, ALMA's hour-long ones
- [ALMA exposure time calculator and sensitivity](../02_Zettel/Theory/interf/ALMA exposure time calculator and sensitivity.html)  -  how observing setup becomes expected RMS through array size, weather, bandwidth, and integration time
- [Major radio interferometers](../02_Zettel/Theory/interf/Major radio interferometers.html)  -  VLA, ALMA, EVN, MERLIN, ATCA, GMRT, LOFAR, MeerKAT, SKA
- [Event Horizon Telescope EHT](../02_Zettel/Theory/interf/Event Horizon Telescope EHT.html)  -  the highest-resolution interferometer ever built, M87 and Sgr A*
- [Pulsar timing arrays as interferometers](../02_Zettel/Theory/interf/Pulsar timing arrays as interferometers.html)  -  NANOGrav, EPTA, PPTA: nanosecond-level timing across many pulsars as a galactic-scale GW detector

---

## block 9  -  calibration and imaging

raw visibilities are not images. the path from voltages to a science-ready image is calibration → flagging → deconvolution → self-calibration → cleaning. this block covers the algorithmic side.

- [Calibration overview](../02_Zettel/Theory/interf/Calibration overview.html)  -  bandpass, flux, phase calibrators, the ABC of radio reduction
- [Steps in radio interferometric observations](../02_Zettel/Theory/interf/Steps in radio interferometric observations.html)  -  the full observing story: science goal, setup, calibrators, flagging, calibration, imaging, and validation
- [Bandpass calibration](../02_Zettel/Theory/interf/Bandpass calibration.html)  -  flatten the frequency response of each antenna
- [Flux calibration](../02_Zettel/Theory/interf/Flux calibration.html)  -  anchor the absolute scale to a known source (3C 286, 3C 48)
- [Phase referencing](../02_Zettel/Theory/interf/Phase referencing.html)  -  alternate between the science target and a nearby calibrator to track atmospheric/instrumental phase
- [Self-calibration](../02_Zettel/Theory/interf/Self-calibration.html)  -  use the data on the science target to refine the gain and phase solutions iteratively
- [CLEAN algorithm](../02_Zettel/Theory/interf/CLEAN algorithm.html)  -  the iterative point-source deconvolution, Högbom 1974
- [Maximum entropy method](../02_Zettel/Theory/Maximum entropy method.html)  -  the Bayesian alternative for extended sources, Cornwell-Evans
- [Deconvolution algorithms compared](../02_Zettel/Theory/interf/Deconvolution algorithms compared.html)  -  CLEAN vs MEM vs modern Bayesian (regularized maximum likelihood)
- [Imaging artifacts](../02_Zettel/Theory/interf/Imaging artifacts.html)  -  sidelobes, sidelobe confusion, primary beam attenuation, what they look like and how to avoid them
- [Polarization in interferometry](../02_Zettel/Theory/interf/Polarization in interferometry.html)  -  Stokes parameters, parallel-hand and cross-hand correlations, Faraday rotation
- [Mosaicking](../02_Zettel/Theory/interf/Mosaicking.html)  -  combining multiple pointings to map a region larger than the primary beam

---

## block 10  -  special techniques: nulling, coronagraphy, hypertelescope

interferometry-adjacent techniques for high-contrast imaging and pushing the resolution further.

- [Nulling interferometry](../02_Zettel/Theory/interf/Nulling interferometry.html)  -  destructive on-axis interference suppresses bright stars, lets faint companions through
- [Bracewell nuller](../02_Zettel/Theory/interf/Bracewell nuller.html)  -  the original 1978 idea: phase-flip half the array to null the central star
- [Coronagraphy](../02_Zettel/Theory/interf/Coronagraphy.html)  -  block the starlight before it reaches the detector. Lyot, phase-mask, four-quadrant, vortex
- [Apodization](../02_Zettel/Theory/interf/Apodization.html)  -  taper the aperture amplitude or phase to suppress diffraction wings
- [Hypertelescope](../02_Zettel/Theory/interf/Hypertelescope.html)  -  Labeyrie's idea: pupil densification turns sparse-array interferometry into direct imaging

---

## block 11  -  interferometric science

what we have actually learned with this technique. organized roughly by source class.

- [Stellar diameters and limb darkening](../02_Zettel/Theory/interf/Stellar diameters and limb darkening.html)  -  the canonical first measurement, Michelson 1920 → CHARA 2010s
- [Stellar surface imaging](../02_Zettel/Theory/interf/Stellar surface imaging.html)  -  spots, hot spots, granulation; Altair, Vega, Betelgeuse imaged
- [Pulsating stars and Mira variables](../02_Zettel/Theory/interf/Pulsating stars and Mira variables.html)  -  diameter changes with pulsation phase
- [Young stellar object disks](../02_Zettel/Theory/interf/Young stellar object disks.html)  -  inner-disk imaging, dust-sublimation radius measurements
- [Dust shells and Wolf-Rayet stars](../02_Zettel/Theory/interf/Dust shells and Wolf-Rayet stars.html)  -  circumstellar geometry of mass-losing stars
- [Binary star orbits](../02_Zettel/Theory/interf/Binary star orbits.html)  -  astrometric orbits at sub-mas precision, dynamical masses
- [Galactic Center Sgr A and S-stars](../02_Zettel/Theory/interf/Galactic Center Sgr A and S-stars.html)  -  VLTI's GRAVITY: orbits of S-stars around Sgr A*, test of GR
- [AGN and supermassive black holes](../02_Zettel/Theory/interf/AGN and supermassive black holes.html)  -  EHT's M87 and Sgr A* shadow images, jet bases
- [Exoplanet imaging](../02_Zettel/Theory/interf/Exoplanet imaging.html)  -  high-contrast direct detection, atmosphere characterization
- [Cosmological masers](../02_Zettel/Theory/interf/Cosmological masers.html)  -  VLBI of water masers in NGC 4258, geometric distance measurement
- [Pulsar interferometry](../02_Zettel/Theory/interf/Pulsar interferometry.html)  -  timing-array gravitational waves, pulsar position astrometry
- [Radiation mechanisms in astronomy and interferometers](../02_Zettel/Theory/interf/Radiation mechanisms in astronomy and interferometers.html)  -  thermal dust, free-free, synchrotron, spectral lines, and masers as the physical origin of the brightness maps

---

## block 12  -  future projects

ground-based and space-based instruments under development or planned.

- [Future ground-based optical](../02_Zettel/Theory/interf/Future ground-based optical.html)  -  OVLA, CARLINA hypertelescopes, OHANA fiber-link
- [Future space-based](../02_Zettel/Theory/interf/Future space-based.html)  -  Darwin, TPF, SIM, the Exo-Earth Imager
- [The Square Kilometre Array SKA](../02_Zettel/Theory/interf/The Square Kilometre Array SKA.html)  -  the next-generation radio array, two sites, cm-to-m wavelengths
- [ngVLA Next Generation VLA](../02_Zettel/Theory/interf/ngVLA Next Generation VLA.html)  -  NRAO's mid-frequency successor to VLA, 2030s
- [Lunar interferometry concepts](../02_Zettel/Theory/interf/Lunar interferometry concepts.html)  -  far-side of the Moon as the radio-quietest place in the inner solar system

---

## the problem-class taxonomy (for the exam)

every interferometry exam question maps to one of these boxes. recognising the box on first read is half the battle:

| problem class | give-aways | core formula | block |
|---|---|---|---|
| **angular resolution** | "what is the smallest detail I can see with..." | $\theta = \lambda/B$ | 1 |
| **fringe / visibility** | "what is the visibility / fringe contrast for..." | $V = (I_{\max} - I_{\min})/(I_{\max}+I_{\min})$ | 2 |
| **uniform disk visibility** | "estimate the diameter of star X from..." | $V(B) = 2 J_1(\pi\theta B/\lambda)/(\pi\theta B/\lambda)$ | 11 |
| **(u, v) coverage** | "design an array to image..." | $\mathbf{u} = \mathbf{B}/\lambda$, Earth-rotation tracks | 3 |
| **radio sensitivity** | "how long do I need to observe with ALMA/VLA..." | $\sigma_S \simeq {\rm SEFD}/\sqrt{N(N-1)\Delta\nu t}$ | 8 |
| **receiver / correlator chain** | "how does the signal become a visibility?" | $R_{ij}(\tau)=\langle V_i(t)V_j^*(t+\tau)\rangle$ | 8 |
| **atmospheric coherence** | "what is the seeing-limited resolution?" | $\theta = \lambda/r_0$ | 4 |
| **CLEAN / dirty image** | "describe the imaging procedure for..." | iterative beam subtraction | 9 |
| **polarization / emission physics** | "what does the interferometer actually measure physically?" | Stokes parameters, Faraday rotation, emission mechanism | 9, 11 |
| **science estimation** | "what baseline do I need to resolve..." | combine $\theta = \lambda/B$ with object physical size | 11 |

---

## related MOCs and where this work leaks into

- [Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.html)  -  radio surveys, ALMA continuum studies of high-$z$ galaxies
- [Lab_High-Energy_MOC](../00_Atlas/Lab_High-Energy_MOC.html)  -  instrumentation, calibration philosophy carries across wavelengths
- [Mathematical_Numerical_Methods_MOC](../00_Atlas/Mathematical_Numerical_Methods_MOC.html)  -  FFT and image-deconvolution algorithms
- [Fundamentals_Astrophysics_Cosmology_MOC](../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)  -  angular-diameter distance, Tolman surface brightness
- [General_Relativity_MOC](../00_Atlas/General_Relativity_MOC.html)  -  EHT and S-star tests of GR
- [Voyage!](../Voyage!.html)  -  the master mind-map

---

## appendix  -  exam project folder

the exam project lives at `05_Projects/Exam/First Year/Interferometry Exam 2026/`. it contains:

- the master plan note (timeline, scope, what to memorize)
- problem-class taxonomy with worked examples
- the APSYNSIM exercises (the simulator's manual is in `apsynsim/`)
- past lecture summaries, particularly for the Italian Lezione 1-7 vs the English Lecture 8-10 split

source materials for the course live at `/Users/sxafq/Documents/2/interferometry/`:
- Labeyrie textbook PDF
- 7 Italian "Lezione" lectures (D'Onofrio's earlier slides)
- 3 English "Lecture" PDFs (more recent, focused on VLTI and instruments)
- radio interferometry primers (NRAO summer school, ALMA, Paladino lab notes)
- specialty notes on polarization and mm-wave interferometry
- APSYNSIM aperture-synthesis simulator