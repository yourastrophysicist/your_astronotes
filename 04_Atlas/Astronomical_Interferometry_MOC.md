---
layout: "default"
title: "Astronomical_Interferometry_MOC"
---
# Astronomical Interferometry — Map of Content

A.Y. 2025/2026 — **Prof. Mauro D'Onofrio**, University of Padova. Master's-level second-semester course in the Astrophysics and Cosmology programme. exam scheduled **Wednesday 3 June 2026** (oral, after a written component for some sessions). this is now the first exam in the summer block.

interferometry is the technique that lets us see things smaller than any single telescope can resolve. it is the technology behind every milli-arcsecond image in modern astrophysics, from the imaging of stellar surfaces and YSO disks to the Event Horizon Telescope's M87 black hole picture. by combining the light (or radio waves) from multiple telescopes coherently, we *synthesize* an aperture as large as the largest separation between them. it is *the* high-angular-resolution technique, and the entire course is one long answer to: how does this actually work?

the course covers both **optical/IR interferometry** (Labeyrie's textbook is the spine) and **radio interferometry** (the practical aperture-synthesis techniques behind VLA, ALMA, EVN, EHT). the physics is the same — phase, coherence, Van Cittert-Zernike — but the instruments and operating regimes differ in important ways that this MOC tries to keep clear.

## the question this course is trying to answer

> **how do I see something whose angular size is smaller than the diffraction limit of any telescope I can afford to build?**

a single telescope of diameter $D$ has a diffraction-limited resolution $\theta \approx 1.22 \lambda/D$. for $\lambda = 500$ nm and $D = 10$ m: $\theta \approx 0.013''$. for a star at 10 pc with radius like the Sun, the angular diameter is $\sim 10^{-3''}$ — *ten times smaller* than the diffraction limit of the biggest optical telescope. a giant 100 m telescope is technologically infeasible at optical wavelengths.

interferometry's answer: *do not build a 100 m telescope. build two 10 m telescopes 100 m apart, and combine their light coherently*. the angular resolution becomes $\theta \approx \lambda/B$ where $B$ is the **baseline** (separation between telescopes). a 100 m baseline at 500 nm: $\theta \approx 1$ mas, the size of a star at 10 pc.

the catch: I cannot directly form the image. what I measure are **fringe visibilities** — the contrast and phase of the interference pattern. these are *Fourier components* of the source brightness distribution. to get the image back, I must invert a partial Fourier transform, sample by sample, baseline by baseline. this is **aperture synthesis**, the central technique of the field.

## the chain of objects, what we will build

interferometry rests on a chain of physical and mathematical objects:

$$\text{plane wave} \to \text{coherence} \to \text{visibility} \to \text{Fourier component} \to \text{(uv) sample} \to \text{dirty image} \to \text{deconvolved image}$$

each object is the bridge between two layers of the theory:

- **plane wave** is what comes from a distant point source
- **coherence** is the statistical property that makes interference fringes possible
- **visibility** is what an interferometer measures — the complex correlation of two signals
- the **Van Cittert-Zernike theorem** says that visibility is the Fourier transform of the source brightness distribution
- a baseline samples *one* Fourier component at the spatial frequency $\mathbf{u} = \mathbf{B}/\lambda$
- many baselines sample many Fourier components → the **(u, v) plane**
- inverse-Fourier-transforming gives the **dirty image**: the true image convolved with the **dirty beam** (the Fourier transform of the (u,v) coverage)
- deconvolving with CLEAN, MEM, or modern Bayesian techniques gives the final image

so the entire course is an extended answer to *how do I get from a sky brightness to a measured fringe and back*.

## reference texts

- **Labeyrie, Lipson, Nisenson**, *An Introduction to Optical Stellar Interferometry* (CUP 2006) — the spine. comprehensive coverage from Young's experiment to space missions
- **Thompson, Moran, Swenson**, *Interferometry and Synthesis in Radio Astronomy* (3rd ed., Springer Open Access) — the bible of radio interferometry. dense, rigorous, complete
- **Haniff**, *Garching primer on optical interferometry* (in source folder) — concise pedagogical introduction
- **Moellenbrock**, *Calibration and Imaging in Radio Interferometry* (in source folder) — the practical NRAO synthesis-imaging summer school notes
- **Paladino**, *Lab radio* notes (in source folder) — Padova-specific lab notes on radio interferometry data reduction
- **Ransom**, *S. Ransom 0818* — the ALMA-era introduction with worked examples
- **Lyne & Smith**, *Pulsar Astronomy* — for the timing-array applications

## how to use this map

every blue link drops into a single concept zettel. recommended reading order for studying:

1. **read this MOC top to bottom** to get the dependency graph
2. **for each block, read the linked zettels** in order
3. **for each block, work through the relevant chapters of Labeyrie** for the optical side, and Paladino's notes for the radio side
4. **for the imaging blocks (3, 8, 9), play with APSYNSIM** — the interactive aperture-synthesis simulator in the source folder (`apsynsim/` and `APSYNSIM-master/`). it is the single most useful pedagogical tool for understanding (u, v) coverage, dirty images, and CLEAN
5. **for past exam preparation**, the project folder `05_Projects/Exam/First Year/Interferometry Exam 2026/` will hold the question lists once written

every zettel follows the same pattern: motivation, math, physical interpretation, instrument example, science use case.

## block 0 — course frame

before any physics, just *what is this course, who teaches it, what is the exam*.

- [[Interferometry course intro]] — instructor, scope, how the optical and radio halves fit together
- [[Interferometry exam rules]] — exam format, scope, how to study
- [[Interferometry equation sheet]] — every formula I might want, organized for fast lookup
- [[Figure bank - interferometry]] — visual index for the scientific figures added across the zettels
- [[Why interferometry]] — the angular-resolution motivation and the science it enables

---

## block 1 — the physics fundamentals

before any interferometer, the underlying physics: light is a wave, waves superpose, superposition produces interference. once we have these in hand, every interferometer is "just" a clever way to make two waves from the same source meet at a detector.

- [[Light waves and the EM spectrum]] — wave nature, $c = \lambda\nu$, refractive index, visible 380-750 nm
- [[Plane waves and Huygens principle]] — the model of light as a propagating disturbance, Huygens construction for diffraction
- [[Superposition and interference]] — adding two waves, Young's two-slit experiment, fringe spacing $\lambda L/d$
- [[Electromagnetic waves and photons]] — wave-particle duality and why interferometry needs the wave picture
- [[Optical path difference OPD]] — the master variable that drives the fringe pattern
- [[Fresnel-Arago laws]] — when polarized waves can and cannot interfere
- [[Young experiment as a stellar interferometer]] — Stéphan and Michelson's insight: use the slit experiment on the sky to measure $\theta$
- [[Fringe visibility and contrast]] — $V = (I_{\max} - I_{\min})/(I_{\max} + I_{\min})$, the observable

### block 1.5 — classical-optics interferometers (D'Onofrio Lezione 1-2)

before astronomical interferometers, the laboratory ones. D'Onofrio's course develops these in detail because every astronomical interferometer is descended from one of them.

- [[Wavefront-division interferometers]] — Young, Fresnel double mirror, Fresnel biprism, Lloyd mirror
- [[Amplitude-division interferometers]] — Michelson lab, Mach-Zehnder, Sagnac, Fabry-Perot
- [[Fresnel double mirror]] — two-mirror geometry producing two virtual sources
- [[Fresnel biprism]] — single prism with two refracting halves
- [[Lloyd mirror]] — single grazing-incidence mirror, the simplest two-source setup
- [[Michelson laboratory interferometer]] — beam-splitter + two mirrors, the workhorse of metrology
- [[Mach-Zehnder interferometer]] — two beam splitters, quantum-information friendly
- [[Sagnac interferometer]] — counter-propagating beams in a closed loop, rotation-sensitive
- [[Fabry-Perot interferometer]] — multiple-beam interference between two parallel mirrors
- [[Beam splitter physics]] — partial reflection at a dielectric interface, $\pi$-phase asymmetry
- [[Fringes of equal inclination]] — circular fringes from a thin film at varying angles
- [[Fringes of equal thickness]] — straight or curved fringes from a wedge film
- [[Newton's rings]] — concentric fringes from an air gap between a lens and a flat

---

## block 2 — interference, diffraction, and coherence

the formal toolkit of wave optics. coherence is what makes fringes possible. the Van Cittert-Zernike theorem is the single most important result in this course.

- [[Fraunhofer diffraction]] — far-field approximation, diffraction integral as a Fourier transform
- [[Diffraction patterns of simple apertures]] — single slit (sinc), circular aperture (Airy), rectangular, double slit
- [[Point spread function]] — the diffraction-limited image of a point source
- [[Optical transfer function]] — Fourier transform of the PSF, the spatial-frequency response of an optical system
- [[Abbe experiment and Fourier optics]] — image formation as spatial-frequency selection: aperture cutoff, OTF/MTF, and why resolution is Fourier bandwidth
- [[Coherent vs incoherent imaging]] — when waves add as amplitudes vs when they add as intensities
- [[Spatial coherence]] — correlation of the wave at two points, what allows fringes between two apertures
- [[Temporal coherence]] — correlation in time, sets the maximum optical-path difference for fringes
- [[Wiener-Khinchin theorem]] — autocorrelation and power spectrum as Fourier pairs, the bridge between coherence, spectra, and correlators
- [[Coherence function and visibility]] — the math link: $V = \lvert\gamma_{12}\rvert$ where $\gamma_{12}$ is the normalized cross-correlation
- [[Van Cittert-Zernike theorem]] — **the central theorem**: visibility is the Fourier transform of the source brightness distribution
- [[Photon noise and statistics]] — Poisson statistics, the photon-noise floor of every interferometric measurement

---

## block 3 — aperture synthesis

the engineering of building an image from many baselines. a single baseline samples one Fourier component; an array samples many; we Fourier-invert. the $(u, v)$ plane and its sampling are the unifying picture.

- [[Aperture synthesis principle]] — multiple separated apertures = synthetic large aperture, sampling the (u, v) plane
- [[The (u, v) plane]] — projection of baselines on the sky, why Earth rotation makes the sampling track elliptical arcs
- [[Earth-rotation aperture synthesis]] — using Earth's rotation to fill the (u, v) plane over a night
- [[Optimal array geometry]] — circular, Y, T, configurations: tradeoffs between resolution and snapshot fidelity
- [[Dirty beam and dirty image]] — the synthesized PSF and the convolved image straight from the (u, v) data
- [[The phase problem in interferometry]] — turbulent atmosphere randomizes phases, why visibility amplitude is preserved but phase is not
- [[Phase closure]] — closure phase of three baselines is atmosphere-independent, the key to optical imaging
- [[Closure amplitude]] — closure amplitude of four baselines is gain-independent
- [[Heterodyne vs direct detection]] — radio mixes signals down to RF before correlation; optical has no oscillators, must combine waves directly
- [[Crowding limitation]] — fundamental limit on the field of view for a sparse array, why we cannot image the whole sky at once

---

## block 4 — optical effects of the atmosphere

the atmosphere is the worst enemy of optical interferometry and a manageable nuisance for radio. understanding *why* unlocks the techniques to get around it.

- [[Atmospheric turbulence overview]] — the seeing, $r_0$, and isoplanatic patch as observable consequences of atmospheric turbulence
- [[Kolmogorov turbulence]] — the canonical model, $D(r) \propto r^{2/3}$, the inertial range
- [[Structure function and correlation function]] — $D(r), B(r)$, the statistical descriptors of phase fluctuations
- [[Fried parameter $r_0$]] — the size of the patch over which atmospheric phase is coherent, $r_0 \sim 10$ cm at 500 nm
- [[Isoplanatic patch]] — the angular size over which the atmospheric distortion is the same, $\theta_0 \sim$ a few arcseconds
- [[Frozen turbulence and Taylor hypothesis]] — wind sweeping a frozen turbulent screen, the temporal proxy for spatial fluctuations
- [[Scintillation and twinkling]] — intensity fluctuations from refraction, the visible "twinkle" of stars
- [[Adaptive optics]] — measure the wavefront, deform a mirror, undo the distortion in real time
- [[Wavefront sensors]] — Shack-Hartmann, pyramid, curvature: how I measure the distortion
- [[Deformable mirrors and tip-tilt]] — the actuator side, how I correct the distortion
- [[Guide stars and laser guide stars]] — the reference object I lock onto, natural vs sodium-laser

---

## block 5 — single-aperture high-resolution techniques

before full interferometry, there are tricks to push a single telescope past the seeing-limited resolution. these are the historical precursors and still useful today.

- [[Speckle interferometry]] — short exposures freeze the seeing, autocorrelation recovers the diffraction-limited power spectrum
- [[Theory of speckle interferometry]] — the Labeyrie 1970 derivation, the speckle transfer function
- [[Aperture masking]] — block all but a few patches of the primary, turn the telescope into a multi-element interferometer
- [[Speckle imaging algorithms]] — Knox-Thompson and triple-correlation (bispectrum) phase reconstruction
- [[Bispectrum and triple correlation]] — the closure-phase analog for single-aperture work, recovers an image from speckle data

---

## block 6 — intensity interferometry

a different beast: correlate intensity fluctuations rather than wave amplitudes. relaxes the phase-stability requirements at the cost of much lower sensitivity. invented by Hanbury Brown and Twiss for stellar diameters.

- [[Intensity interferometry concept]] — the HBT effect, $\langle I_1 I_2\rangle - \langle I_1\rangle\langle I_2\rangle \neq 0$ for a coherent source
- [[Hanbury Brown Twiss effect]] — the foundational experiment, classical and quantum interpretations
- [[Narrabri stellar interferometer]] — the first instrument that systematically measured stellar diameters this way
- [[Why intensity interferometry escapes atmospheric phase]] — only intensity correlations are needed; the atmosphere randomizes the wave phase but preserves the intensity correlation
- [[Sensitivity and modern revival]] — IACT arrays (CTA, VERITAS) revisiting the technique with modern photon-counting detectors

---

## block 7 — amplitude interferometry instruments

the workhorses: optical/IR interferometers that combine wave amplitudes from separated apertures. each has its quirks, and knowing them is what the exam tests.

- [[Michelson stellar interferometer]] — the historical first, 20-foot beam at Mt Wilson, Betelgeuse's diameter (1920)
- [[Components of a modern interferometer]] — telescopes, beam lines, delay lines, beam combiners, fringe trackers
- [[Delay lines and path-length equalization]] — keeping the optical path lengths matched to within the coherence length
- [[Beam combiners]] — pairwise (Michelson), all-on-one (Fizeau), single-mode-fiber, integrated-optics
- [[Fringe tracking]] — actively locking onto the fringe to compensate for atmospheric and mechanical drift
- [[VLTI Very Large Telescope Interferometer]] — ESO's 4 × 8m + 4 × 1.8m, baselines 8-130 m, IR
- [[CHARA array]] — Mt Wilson, six 1m telescopes, 33-330 m baselines, the workhorse for stellar surface imaging
- [[Large Binocular Telescope LBT]] — two 8m mirrors on one mount, Fizeau-style imaging
- [[COAST Cambridge Optical Aperture Synthesis Telescope]] — small but historically significant, first true optical aperture synthesis image
- [[NPOI Navy Prototype Optical Interferometer]] — astrometric and imaging instrument
- [[Keck interferometer]] — twin 10m telescopes, now decommissioned

---

## block 8 — radio interferometry

the parallel universe. radio observations have it easier (no daytime brightness, Earth-rotation aperture synthesis works perfectly, electronics can heterodyne) but harder (huge antennas needed for sensitivity, RFI). the techniques are the same, the practical implementation completely different.

- [[Radio astronomy basics]] — Jansky, antenna temperature, brightness temperature, radio quiet zones, Allen-Mills
- [[Specific intensity and flux density]] — the language of radio sources: $I_\nu$, $S_\nu$, Jansky, beam integration, and brightness temperature
- [[Antenna effective area and gain]] — how a dish turns an electromagnetic wave into measurable power, with $A_{\rm e}$, gain, and aperture efficiency
- [[Beam power pattern of a radio telescope]] — primary beam, beam solid angle, Gaussian beams, and why every antenna measures a weighted sky
- [[Radiometer equation and SEFD]] — sensitivity from noise statistics: $T_{\rm sys}$, SEFD, bandwidth, integration time, and array RMS
- [[Radio interferometer architecture]] — antennas, LO, mixer, correlator, the heterodyne chain
- [[Downconversion of signals in radio interferometers]] — why radio arrays preserve phase by mixing sky frequencies down to IF before digitization
- [[Digitization quantization and timing in radio interferometry]] — sampling, quantization efficiency, time standards, and why correlators need synchronized data streams
- [[Two-element correlator]] — the building block: multiply and time-average two voltages
- [[Connected element interferometer]] — VLA-style, baselines fixed by cabling
- [[Very Long Baseline Interferometry VLBI]] — antennas around the world, atomic clocks, post-correlation, EVN, VLBA
- [[Earth rotation synthesis in radio]] — VLA's 12-hour tracks, ALMA's hour-long ones
- [[ALMA exposure time calculator and sensitivity]] — how observing setup becomes expected RMS through array size, weather, bandwidth, and integration time
- [[Major radio interferometers]] — VLA, ALMA, EVN, MERLIN, ATCA, GMRT, LOFAR, MeerKAT, SKA
- [[Event Horizon Telescope EHT]] — the highest-resolution interferometer ever built, M87 and Sgr A*
- [[Pulsar timing arrays as interferometers]] — NANOGrav, EPTA, PPTA: nanosecond-level timing across many pulsars as a galactic-scale GW detector

---

## block 9 — calibration and imaging

raw visibilities are not images. the path from voltages to a science-ready image is calibration → flagging → deconvolution → self-calibration → cleaning. this block covers the algorithmic side.

- [[Calibration overview]] — bandpass, flux, phase calibrators, the ABC of radio reduction
- [[Steps in radio interferometric observations]] — the full observing story: science goal, setup, calibrators, flagging, calibration, imaging, and validation
- [[Bandpass calibration]] — flatten the frequency response of each antenna
- [[Flux calibration]] — anchor the absolute scale to a known source (3C 286, 3C 48)
- [[Phase referencing]] — alternate between the science target and a nearby calibrator to track atmospheric/instrumental phase
- [[Self-calibration]] — use the data on the science target to refine the gain and phase solutions iteratively
- [[CLEAN algorithm]] — the iterative point-source deconvolution, Högbom 1974
- [[Maximum entropy method]] — the Bayesian alternative for extended sources, Cornwell-Evans
- [[Deconvolution algorithms compared]] — CLEAN vs MEM vs modern Bayesian (regularized maximum likelihood)
- [[Imaging artifacts]] — sidelobes, sidelobe confusion, primary beam attenuation, what they look like and how to avoid them
- [[Polarization in interferometry]] — Stokes parameters, parallel-hand and cross-hand correlations, Faraday rotation
- [[Mosaicking]] — combining multiple pointings to map a region larger than the primary beam

---

## block 10 — special techniques: nulling, coronagraphy, hypertelescope

interferometry-adjacent techniques for high-contrast imaging and pushing the resolution further.

- [[Nulling interferometry]] — destructive on-axis interference suppresses bright stars, lets faint companions through
- [[Bracewell nuller]] — the original 1978 idea: phase-flip half the array to null the central star
- [[Coronagraphy]] — block the starlight before it reaches the detector. Lyot, phase-mask, four-quadrant, vortex
- [[Apodization]] — taper the aperture amplitude or phase to suppress diffraction wings
- [[Hypertelescope]] — Labeyrie's idea: pupil densification turns sparse-array interferometry into direct imaging

---

## block 11 — interferometric science

what we have actually learned with this technique. organized roughly by source class.

- [[Stellar diameters and limb darkening]] — the canonical first measurement, Michelson 1920 → CHARA 2010s
- [[Stellar surface imaging]] — spots, hot spots, granulation; Altair, Vega, Betelgeuse imaged
- [[Pulsating stars and Mira variables]] — diameter changes with pulsation phase
- [[Young stellar object disks]] — inner-disk imaging, dust-sublimation radius measurements
- [[Dust shells and Wolf-Rayet stars]] — circumstellar geometry of mass-losing stars
- [[Binary star orbits]] — astrometric orbits at sub-mas precision, dynamical masses
- [[Galactic Center Sgr A and S-stars]] — VLTI's GRAVITY: orbits of S-stars around Sgr A*, test of GR
- [[AGN and supermassive black holes]] — EHT's M87 and Sgr A* shadow images, jet bases
- [[Exoplanet imaging]] — high-contrast direct detection, atmosphere characterization
- [[Cosmological masers]] — VLBI of water masers in NGC 4258, geometric distance measurement
- [[Pulsar interferometry]] — timing-array gravitational waves, pulsar position astrometry
- [[Radiation mechanisms in astronomy and interferometers]] — thermal dust, free-free, synchrotron, spectral lines, and masers as the physical origin of the brightness maps

---

## block 12 — future projects

ground-based and space-based instruments under development or planned.

- [[Future ground-based optical]] — OVLA, CARLINA hypertelescopes, OHANA fiber-link
- [[Future space-based]] — Darwin, TPF, SIM, the Exo-Earth Imager
- [[The Square Kilometre Array SKA]] — the next-generation radio array, two sites, cm-to-m wavelengths
- [[ngVLA Next Generation VLA]] — NRAO's mid-frequency successor to VLA, 2030s
- [[Lunar interferometry concepts]] — far-side of the Moon as the radio-quietest place in the inner solar system

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

## Literature & Primary Sources

Canonical and modern arXiv astro-ph.IM benchmark papers underlying the interferometric theory and calibration techniques above.

- [[Monnier_2003_Optical_Interferometry_in_Astronomy|Monnier (2003) — Optical Interferometry in Astronomy]] — Van Cittert-Zernike theorem, closure phase/amplitude derivations
- [[GRAVITY_Collaboration_2018_Orbital_Motion_ISCO_SgrA|GRAVITY Collaboration (2018) — Orbital Motions Near the ISCO of Sgr A*]] — VLTI astrometric phase-referencing, strong-field orbital motion
- [[ALMA_Partnership_2015_HL_Tau_Long_Baseline_Campaign|ALMA Partnership (2015) — The 2014 ALMA Long Baseline Campaign (HL Tau)]] — long-baseline aperture synthesis, protoplanetary disk substructure

---

## related MOCs and where this work leaks into

- [[Observational_Cosmology_MOC]] — radio surveys, ALMA continuum studies of high-$z$ galaxies
- 04_Atlas/Lab_High-Energy_MOC — instrumentation, calibration philosophy carries across wavelengths
- [[Mathematical_Numerical_Methods_MOC]] — FFT and image-deconvolution algorithms
- [[Fundamentals_Astrophysics_Cosmology_MOC]] — angular-diameter distance, Tolman surface brightness
- [[General_Relativity_MOC]] — EHT and S-star tests of GR
- Moc — the master mind-map

---

## appendix — exam project folder

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

---

## Master Figure Index (134 Total Images)

Every single instrument layout, fringe diagram, UV coverage simulation, and observational asset in `07_Images/Interferometry/` is cataloged below with direct links and diagnostic context:

| Image Asset | Diagnostic Category & Physics | Primary Zettel Note |
|---|---|---|
| `![AGN_and_supermassive_black_holes.jpg](../assets/images/AGN_and_supermassive_black_holes.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Adaptive_optics.gif](../assets/images/Adaptive_optics.gif)` | Adaptive optics wavefront sensor, deformable mirror, and Strehl ratio enhancement | [[Adaptive optics overview]] |
| `![Amplitude-division_interferometers.png](../assets/images/Amplitude-division_interferometers.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Aperture_masking.jpg](../assets/images/Aperture_masking.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Apodization.png](../assets/images/Apodization.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Atmospheric_turbulence_overview.jpg](../assets/images/Atmospheric_turbulence_overview.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Bandpass_calibration.jpg](../assets/images/Bandpass_calibration.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Beam_combiners.jpg](../assets/images/Beam_combiners.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Beam_splitter_physics.png](../assets/images/Beam_splitter_physics.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Binary_star_orbits.jpg](../assets/images/Binary_star_orbits.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Bispectrum_and_triple_correlation.jpg](../assets/images/Bispectrum_and_triple_correlation.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Bracewell_nuller.svg](../assets/images/Bracewell_nuller.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![CHARA_array.jpg](../assets/images/CHARA_array.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![COAST_Cambridge_Optical_Aperture_Synthesis_Telescope.jpg](../assets/images/COAST_Cambridge_Optical_Aperture_Synthesis_Telescope.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Closure_amplitude.jpg](../assets/images/Closure_amplitude.jpg)` | Closure phase and closure amplitude eliminating station-based atmospheric phase errors | Closure phase |
| `![Coherent_vs_incoherent_imaging.png](../assets/images/Coherent_vs_incoherent_imaging.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Components_of_a_modern_interferometer.jpg](../assets/images/Components_of_a_modern_interferometer.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Connected_element_interferometer.jpg](../assets/images/Connected_element_interferometer.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Coronagraphy.jpg](../assets/images/Coronagraphy.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Cosmological_masers.jpg](../assets/images/Cosmological_masers.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Crowding_limitation.jpg](../assets/images/Crowding_limitation.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Deconvolution_algorithms_compared.jpg](../assets/images/Deconvolution_algorithms_compared.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Deformable_mirrors_and_tip-tilt.jpg](../assets/images/Deformable_mirrors_and_tip-tilt.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Dust_shells_and_Wolf-Rayet_stars.jpg](../assets/images/Dust_shells_and_Wolf-Rayet_stars.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Earth_rotation_synthesis_in_radio.svg](../assets/images/Earth_rotation_synthesis_in_radio.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Exoplanet_imaging.jpg](../assets/images/Exoplanet_imaging.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Fabry-Perot_interferometer.png](../assets/images/Fabry-Perot_interferometer.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Flux_calibration.jpg](../assets/images/Flux_calibration.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Fresnel_biprism.PNG](../assets/images/Fresnel_biprism.PNG)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Fresnel_double_mirror.svg](../assets/images/Fresnel_double_mirror.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Fried_parameter__r_0_.jpg](../assets/images/Fried_parameter__r_0_.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Fringe_tracking.jpg](../assets/images/Fringe_tracking.jpg)` | Interference fringe visibility, contrast, and phase measurement | Visibility function and fringes |
| `![Fringe_visibility_and_contrast.png](../assets/images/Fringe_visibility_and_contrast.png)` | Interference fringe visibility, contrast, and phase measurement | Visibility function and fringes |
| `![Fringes_of_equal_inclination.svg](../assets/images/Fringes_of_equal_inclination.svg)` | Interference fringe visibility, contrast, and phase measurement | Visibility function and fringes |
| `![Fringes_of_equal_thickness.jpg](../assets/images/Fringes_of_equal_thickness.jpg)` | Interference fringe visibility, contrast, and phase measurement | Visibility function and fringes |
| `![Frozen_turbulence_and_Taylor_hypothesis.gif](../assets/images/Frozen_turbulence_and_Taylor_hypothesis.gif)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Future_ground-based_optical.jpg](../assets/images/Future_ground-based_optical.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Future_space-based.jpg](../assets/images/Future_space-based.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Galactic_Center_Sgr_A_and_S-stars.jpg](../assets/images/Galactic_Center_Sgr_A_and_S-stars.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Guide_stars_and_laser_guide_stars.jpg](../assets/images/Guide_stars_and_laser_guide_stars.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Hanbury_Brown_Twiss_effect.gif](../assets/images/Hanbury_Brown_Twiss_effect.gif)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Hypertelescope.jpg](../assets/images/Hypertelescope.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Imaging_artifacts.svg](../assets/images/Imaging_artifacts.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Intensity_interferometry_concept.svg](../assets/images/Intensity_interferometry_concept.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Interferometry_course_intro.jpg](../assets/images/Interferometry_course_intro.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Interferometry_equation_sheet.svg](../assets/images/Interferometry_equation_sheet.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Interferometry_exam_rules.PNG](../assets/images/Interferometry_exam_rules.PNG)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Isoplanatic_patch.svg](../assets/images/Isoplanatic_patch.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Keck_interferometer.jpg](../assets/images/Keck_interferometer.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Keck_interferometer.png](../assets/images/Keck_interferometer.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Kolmogorov_turbulence.png](../assets/images/Kolmogorov_turbulence.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Large_Binocular_Telescope_LBT.JPG](../assets/images/Large_Binocular_Telescope_LBT.JPG)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Light_waves_and_the_EM_spectrum.svg](../assets/images/Light_waves_and_the_EM_spectrum.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Lloyd_mirror.jpg](../assets/images/Lloyd_mirror.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Lunar_interferometry_concepts.jpg](../assets/images/Lunar_interferometry_concepts.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Mach-Zehnder_interferometer.jpg](../assets/images/Mach-Zehnder_interferometer.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Major_radio_interferometers.jpg](../assets/images/Major_radio_interferometers.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Maximum_entropy_method.svg](../assets/images/Maximum_entropy_method.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Michelson_laboratory_interferometer.svg](../assets/images/Michelson_laboratory_interferometer.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Michelson_stellar_interferometer.jpg](../assets/images/Michelson_stellar_interferometer.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Mosaicking.jpg](../assets/images/Mosaicking.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![NPOI_Navy_Prototype_Optical_Interferometer.jpg](../assets/images/NPOI_Navy_Prototype_Optical_Interferometer.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Narrabri_stellar_interferometer.jpg](../assets/images/Narrabri_stellar_interferometer.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Newton_s_rings.jpeg](../assets/images/Newton_s_rings.jpeg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Nulling_interferometry.jpg](../assets/images/Nulling_interferometry.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Optical_path_difference_OPD.svg](../assets/images/Optical_path_difference_OPD.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Optical_transfer_function.svg](../assets/images/Optical_transfer_function.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Optimal_array_geometry.jpg](../assets/images/Optimal_array_geometry.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Phase_closure.jpg](../assets/images/Phase_closure.jpg)` | Closure phase and closure amplitude eliminating station-based atmospheric phase errors | Closure phase |
| `![Phase_referencing.svg](../assets/images/Phase_referencing.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Photon_noise_and_statistics.jpg](../assets/images/Photon_noise_and_statistics.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Point_spread_function.svg](../assets/images/Point_spread_function.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Polarization_in_interferometry.png](../assets/images/Polarization_in_interferometry.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Pulsar_interferometry.jpg](../assets/images/Pulsar_interferometry.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Pulsar_timing_arrays_as_interferometers.jpg](../assets/images/Pulsar_timing_arrays_as_interferometers.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Pulsating_stars_and_Mira_variables.jpg](../assets/images/Pulsating_stars_and_Mira_variables.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Sagnac_interferometer.svg](../assets/images/Sagnac_interferometer.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Scintillation_and_twinkling.jpg](../assets/images/Scintillation_and_twinkling.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Self-calibration.png](../assets/images/Self-calibration.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Sensitivity_and_modern_revival.jpeg](../assets/images/Sensitivity_and_modern_revival.jpeg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Spatial_coherence.gif](../assets/images/Spatial_coherence.gif)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Speckle_imaging_algorithms.gif](../assets/images/Speckle_imaging_algorithms.gif)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Speckle_interferometry.jpg](../assets/images/Speckle_interferometry.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Stellar_diameters_and_limb_darkening.svg](../assets/images/Stellar_diameters_and_limb_darkening.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Stellar_surface_imaging.jpg](../assets/images/Stellar_surface_imaging.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Steps_in_radio_interferometric_observations.jpg](../assets/images/Steps_in_radio_interferometric_observations.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Structure_function_and_correlation_function.png](../assets/images/Structure_function_and_correlation_function.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Temporal_coherence.gif](../assets/images/Temporal_coherence.gif)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![The_Square_Kilometre_Array_SKA.png](../assets/images/The_Square_Kilometre_Array_SKA.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![The__u__v__plane.png](../assets/images/The__u__v__plane.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![The_phase_problem_in_interferometry.jpg](../assets/images/The_phase_problem_in_interferometry.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Theory_of_speckle_interferometry.jpg](../assets/images/Theory_of_speckle_interferometry.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Two-element_correlator.jpg](../assets/images/Two-element_correlator.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Wavefront-division_interferometers.svg](../assets/images/Wavefront-division_interferometers.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Wavefront_sensors.svg](../assets/images/Wavefront_sensors.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Why_intensity_interferometry_escapes_atmospheric_phase.png](../assets/images/Why_intensity_interferometry_escapes_atmospheric_phase.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Why_interferometry.svg](../assets/images/Why_interferometry.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Wiener-Khinchin_theorem.svg](../assets/images/Wiener-Khinchin_theorem.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![Young_stellar_object_disks.jpg](../assets/images/Young_stellar_object_disks.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![abbe_fourier_optics_orders.svg](../assets/images/abbe_fourier_optics_orders.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![airy_pattern_generated.png](../assets/images/airy_pattern_generated.png)` | Airy disk diffraction pattern and spatial resolution limit $\theta \sim 1.22\lambda/D$ | Airy disk and resolution |
| `![alma_signal_path_official.gif](../assets/images/alma_signal_path_official.gif)` | ALMA millimeter/submillimeter array configuration, baselines, and calibration | ALMA observatory and capabilities |
| `![antenna_effective_area_gain.svg](../assets/images/antenna_effective_area_gain.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![digitization_quantization_sampling.svg](../assets/images/digitization_quantization_sampling.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![downconversion_mixer_if.svg](../assets/images/downconversion_mixer_if.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![eht_m87_eso1907a.jpg](../assets/images/eht_m87_eso1907a.jpg)` | Very Long Baseline Interferometry (VLBI) and Event Horizon Telescope imaging | [[Very Long Baseline Interferometry VLBI]] |
| `![eht_planet_scale_array_eso1907j.jpg](../assets/images/eht_planet_scale_array_eso1907j.jpg)` | Very Long Baseline Interferometry (VLBI) and Event Horizon Telescope imaging | [[Very Long Baseline Interferometry VLBI]] |
| `![ivkovic_2024_fig1.png](../assets/images/ivkovic_2024_fig1.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [[Intensity interferometry concept]] |
| `![ivkovic_2024_fig1_rg.webp](../assets/images/ivkovic_2024_fig1_rg.webp)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [[Intensity interferometry concept]] |
| `![ivkovic_2024_fig2.png](../assets/images/ivkovic_2024_fig2.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [[Intensity interferometry concept]] |
| `![ivkovic_2024_fig3.png](../assets/images/ivkovic_2024_fig3.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [[Intensity interferometry concept]] |
| `![ivkovic_2024_fig3_rg.png](../assets/images/ivkovic_2024_fig3_rg.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [[Intensity interferometry concept]] |
| `![ivkovic_2024_fig4.png](../assets/images/ivkovic_2024_fig4.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [[Intensity interferometry concept]] |
| `![ivkovic_2024_fig4_rg.png](../assets/images/ivkovic_2024_fig4_rg.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [[Intensity interferometry concept]] |
| `![ivkovic_2024_fig5.png](../assets/images/ivkovic_2024_fig5.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [[Intensity interferometry concept]] |
| `![ivkovic_2024_fig5_rg.png](../assets/images/ivkovic_2024_fig5_rg.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [[Intensity interferometry concept]] |
| `![ivkovic_2024_fig6.png](../assets/images/ivkovic_2024_fig6.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [[Intensity interferometry concept]] |
| `![ivkovic_2024_fig6_rg.png](../assets/images/ivkovic_2024_fig6_rg.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [[Intensity interferometry concept]] |
| `![ivkovic_2024_fig7.png](../assets/images/ivkovic_2024_fig7.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [[Intensity interferometry concept]] |
| `![ivkovic_2024_fig8.png](../assets/images/ivkovic_2024_fig8.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [[Intensity interferometry concept]] |
| `![ngVLA_Next_Generation_VLA.jpg](../assets/images/ngVLA_Next_Generation_VLA.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![nrao_snapshot_dirty_beam.jpg](../assets/images/nrao_snapshot_dirty_beam.jpg)` | Adaptive optics wavefront sensor, deformable mirror, and Strehl ratio enhancement | [[Adaptive optics overview]] |
| `![nrao_snapshot_dirty_image.jpg](../assets/images/nrao_snapshot_dirty_image.jpg)` | Adaptive optics wavefront sensor, deformable mirror, and Strehl ratio enhancement | [[Adaptive optics overview]] |
| `![nrao_snapshot_uv_coverage.jpg](../assets/images/nrao_snapshot_uv_coverage.jpg)` | UV-plane baseline sampling, aperture synthesis, and Earth rotation synthesis | UV coverage and aperture synthesis |
| `![polarization_stokes_ellipse.svg](../assets/images/polarization_stokes_ellipse.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![radiation_mechanisms_spectra.png](../assets/images/radiation_mechanisms_spectra.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![radio_interferometer_signal_chain.svg](../assets/images/radio_interferometer_signal_chain.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![radio_observing_workflow.svg](../assets/images/radio_observing_workflow.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![radiometer_noise_scaling.png](../assets/images/radiometer_noise_scaling.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![specific_intensity_flux_beam.svg](../assets/images/specific_intensity_flux_beam.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |
| `![uv_coverage_dirty_beam_demo.png](../assets/images/uv_coverage_dirty_beam_demo.png)` | UV-plane baseline sampling, aperture synthesis, and Earth rotation synthesis | UV coverage and aperture synthesis |
| `![van_cittert_zernike_geometry.svg](../assets/images/van_cittert_zernike_geometry.svg)` | Van Cittert-Zernike theorem relating complex visibility to source brightness distribution | [[Van Cittert-Zernike theorem]] |
| `![vlti_delay_line_eso9811a.jpg](../assets/images/vlti_delay_line_eso9811a.jpg)` | Optical delay line compensation for geometric path delay $\vec{B} \cdot \hat{s}$ | Delay lines and path compensation |
| `![young_double_slit_interference.svg](../assets/images/young_double_slit_interference.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [[Astronomical_Interferometry_MOC]] |


---

## Astronomical Interferometry Oral Exam Defense Preparation Matrix

### Question 1: The Van Cittert-Zernike Theorem & Spatial Coherence
- **Blackboard Prompt**: *State and prove the Van Cittert-Zernike theorem. How does the mutual coherence function of light from an incoherent source relate to its spatial intensity distribution?*
- **Starting Equation**: 
  $$\mu(\vec{r}_1, \vec{r}_2, 0) = \frac{\iint I(\vec{s}) e^{-i \frac{2\pi}{\lambda} \vec{s} \cdot (\vec{r}_1 - \vec{r}_2)} d\Omega}{\iint I(\vec{s}) d\Omega}$$
- **Derivation & Blackboard Walkthrough**:
  1. Consider an extended, spatially incoherent thermal source at distance $R$. Two points on the source $\vec{s}_1, \vec{s}_2$ satisfy $\langle E(\vec{s}_1) E^*(\vec{s}_2) \rangle = I(\vec{s}_1) \delta(\vec{s}_1 - \vec{s}_2)$.
  2. Propagate electric fields to two detectors on Earth located at $\vec{r}_1, \vec{r}_2$ via spherical Huygens wavelets: $E(\vec{r}_1) = \int \frac{E(\vec{s})}{R} e^{i k \lvert\vec{r}_1 - \vec{s}\rvert} d^2 s$.
  3. Write the mutual cross-correlation (coherence function) $\Gamma_{12} = \langle E(\vec{r}_1) E^*(\vec{r}_2) \rangle$.
  4. Expand $\lvert\vec{r}_1 - \vec{s}\rvert \approx R - \vec{s} \cdot \vec{r}_1 / R$. In the Fraunhofer approximation, the distance cancels out.
  5. The resulting complex degree of coherence $\mu_{12}$ is exactly the two-dimensional spatial Fourier transform of the normalized sky brightness distribution $I_{\rm norm}(\vec{\sigma})$.
  6. Define baseline coordinates in units of wavelength: $u = (x_1 - x_2)/\lambda$, $v = (y_1 - y_2)/\lambda$. The complex visibility is $V(u,v) = \mathcal{F}\{I(x,y)\}$.
- **Professor Trap Points**:
  - *Trap*: Confusing temporal coherence with spatial coherence. Temporal coherence depends on spectral bandwidth $\Delta\nu$ (coherence length $l_c = c/\Delta\nu$), whereas spatial coherence depends on source angular diameter $\theta_{\rm source}$ (coherence area $A_c \sim \lambda^2 / \theta^2$).

### Question 2: Closure Phase & Atmospheric Phase Elimination
- **Blackboard Prompt**: *Atmospheric turbulence introduces arbitrary, time-varying phase shifts above each telescope: $\phi_i(t)$. Prove that the closure phase around a closed loop of three telescopes is completely immune to station-based atmospheric phase corruptions.*
- **Starting Equation**: 
  $$\Phi_{123} = \phi_{12}^{\rm obs} + \phi_{23}^{\rm obs} + \phi_{31}^{\rm obs}$$
- **Derivation & Blackboard Walkthrough**:
  1. Let the true astronomical phase on baseline $ij$ be $\phi_{ij}^{\rm true}$.
  2. Each telescope $i$ suffers an atmospheric phase error $\theta_i(t)$ along its optical path (where $\theta_i$ varies rapidly on timescales $\tau_0 \sim 1-10$ ms).
  3. The observed phase on baseline $ij$ is: $\phi_{ij}^{\rm obs} = \phi_{ij}^{\rm true} + (\theta_i - \theta_j)$.
  4. Sum the three observed baseline phases around closed triangle 1-2-3:
     $$\Phi_{123} = [\phi_{12}^{\rm true} + (\theta_1 - \theta_2)] + [\phi_{23}^{\rm true} + (\theta_2 - \theta_3)] + [\phi_{31}^{\rm true} + (\theta_3 - \theta_1)]$$
  5. Regroup the atmospheric terms: $(\theta_1 - \theta_2) + (\theta_2 - \theta_3) + (\theta_3 - \theta_1) = 0$ identically!
  6. Therefore, $\Phi_{123}^{\rm obs} = \phi_{12}^{\rm true} + \phi_{23}^{\rm true} + \phi_{31}^{\rm true} = \Phi_{123}^{\rm true}$.
  7. The closure phase preserves pure, uncorrupted astronomical source information even when individual visibility phases fluctuate wildly!
- **Professor Trap Points**:
  - *Trap*: For an array of $N$ antennas, how many independent closure phases are there? Total baselines: $N(N-1)/2$. Number of independent closure phases is $(N-1)(N-2)/2$. The fraction of phase information recovered is $(N-2)/N$, which approaches $100\%$ as $N$ becomes large (e.g. ALMA, VLA).

### Question 3: UV Coverage, Dirty Beam, and the CLEAN Deconvolution Algorithm
- **Blackboard Prompt**: *Why does an interferometer produce a dirty map with sidelobes? Walk through Högbom's CLEAN algorithm and explain how it reconstructs the true sky brightness distribution.*
- **Derivation & Blackboard Walkthrough**:
  1. The sampled visibility is $V_{\rm sampled}(u,v) = V(u,v) \cdot S(u,v)$, where $S(u,v)$ is the sampling function (zero where no baselines exist).
  2. By the Convolution Theorem: 
     $$I_{\rm dirty}(x,y) = \mathcal{F}^{-1}\{V_{\rm sampled}\} = I_{\rm true}(x,y) * B_{\rm dirty}(x,y)$$
     where $B_{\rm dirty}(x,y) = \mathcal{F}^{-1}\{S(u,v)\}$ is the **dirty beam** (point spread function).
  3. The dirty beam has prominent diffraction rings and sidelobes caused by holes in UV coverage.
  4. **CLEAN Algorithm (Högbom 1974)**:
     - Step 1: Find the pixel with maximum absolute intensity in $I_{\rm dirty}$.
     - Step 2: Place a point source component (CLEAN component) at this location with flux $\gamma I_{\rm max}$, where $\gamma \sim 0.05-0.1$ is the loop gain.
     - Step 3: Subtract $\gamma I_{\rm max} \cdot B_{\rm dirty}(x - x_0, y - y_0)$ from the dirty map.
     - Step 4: Repeat steps 1–3 iteratively until the residual map reaches the noise floor $\sigma_{\rm rms}$.
     - Step 5: Convolve the accumulated CLEAN point-source model with an idealized elliptical Gaussian (the **CLEAN beam**, fitted to the central peak of $B_{\rm dirty}$).
     - Step 6: Add back the final residuals to produce the final restored image.


---

## Essential Astronomical Interferometry Formulas Quick Sheet

| Law / Relation | Formula | Physical Meaning & Key Parameters |
|---|---|---|
| **Angular Resolution** | $\theta_{\rm res} \approx \frac{\lambda}{B_{\rm max}}$ | Maximum projected baseline $B_{\rm max}$ sets angular resolving power |
| **Complex Visibility** | $V(u,v) = \iint I(l,m) e^{-i 2\pi (ul + vm)} dl dm$ | 2D Fourier transform of source brightness distribution $I(l,m)$ |
| **Fringe Visibility Contrast** | $\mathcal{V} = \frac{I_{\rm max} - I_{\rm min}}{I_{\rm max} + I_{\rm min}} = \frac{|V|}{V(0,0)}$ | Peak-to-valley contrast of interference fringe pattern |
| **Airy Disk First Zero** | $\theta = 1.22 \frac{\lambda}{D}$ | Single aperture diffraction limit of diameter $D$ |
| **Atmospheric Coherence Time** | $\tau_0 \approx 0.314 \frac{r_0}{v_{\rm wind}}$ | Time before turbulent atmospheric phase fluctuates by $1$ radian |
| **Closure Phase Relation** | $\Phi_{123} = \arg(V_{12} V_{23} V_{31})$ | Phase sum around closed antenna triangle cancels station errors $\theta_i$ |
| **Closure Amplitude Relation** | $A_{1234} = \frac{|V_{12}| |V_{34}|}{|V_{13}| |V_{24}|}$ | Ratio of 4 visibilities cancels station-based gain errors $g_i$ |
| **Geometric Delay** | $\tau_g = \frac{\vec{B} \cdot \hat{s}}{c}$ | Wavefront arrival time difference between antennas along baseline $\vec{B}$ |
| **Delay Line Optical Path** | $\Delta L = c \tau_g = \vec{B} \cdot \hat{s}$ | Path length compensation required in real-time delay carts |
| **UV Coordinate Transformation** | $\begin{pmatrix} u \\ v \\ w \end{pmatrix} = \frac{1}{\lambda} \mathbf{R}(\delta, H) \begin{pmatrix} B_x \\ B_y \\ B_z \end{pmatrix}$ | Projects ground baseline vector $(B_x, B_y, B_z)$ onto plane perpendicular to line of sight |
| **Number of Independent Baselines** | $N_{\rm base} = \frac{N(N-1)}{2}$ | Total simultaneous interferometer baselines for $N$ antennas |
| **Number of Independent Closure Phases** | $N_{\rm closure} = \frac{(N-1)(N-2)}{2}$ | Independent closure phase constraints available for phase reconstruction |
