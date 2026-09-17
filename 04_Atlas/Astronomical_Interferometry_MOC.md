---
layout: "default"
title: "Astronomical_Interferometry_MOC"
---
{% raw %}
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

- [Interferometry course intro](../03_Zettel/Theory/interf/Interferometry%20course%20intro.html) — instructor, scope, how the optical and radio halves fit together
- [Interferometry exam rules](../03_Zettel/Theory/interf/Interferometry%20exam%20rules.html) — exam format, scope, how to study
- [Interferometry equation sheet](../03_Zettel/Theory/interf/Interferometry%20equation%20sheet.html) — every formula I might want, organized for fast lookup
- [Figure bank - interferometry](../03_Zettel/Theory/interf/Figure%20bank%20-%20interferometry.html) — visual index for the scientific figures added across the zettels
- [Why interferometry](../03_Zettel/Theory/interf/Why%20interferometry.html) — the angular-resolution motivation and the science it enables

---

## block 1 — the physics fundamentals

before any interferometer, the underlying physics: light is a wave, waves superpose, superposition produces interference. once we have these in hand, every interferometer is "just" a clever way to make two waves from the same source meet at a detector.

- [Light waves and the EM spectrum](../03_Zettel/Theory/interf/Light%20waves%20and%20the%20EM%20spectrum.html) — wave nature, $c = \lambda\nu$, refractive index, visible 380-750 nm
- [Plane waves and Huygens principle](../03_Zettel/Theory/interf/Plane%20waves%20and%20Huygens%20principle.html) — the model of light as a propagating disturbance, Huygens construction for diffraction
- [Superposition and interference](../03_Zettel/Theory/interf/Superposition%20and%20interference.html) — adding two waves, Young's two-slit experiment, fringe spacing $\lambda L/d$
- [Electromagnetic waves and photons](../03_Zettel/Theory/interf/Electromagnetic%20waves%20and%20photons.html) — wave-particle duality and why interferometry needs the wave picture
- [Optical path difference OPD](../03_Zettel/Theory/interf/Optical%20path%20difference%20OPD.html) — the master variable that drives the fringe pattern
- [Fresnel-Arago laws](../03_Zettel/Theory/interf/Fresnel-Arago%20laws.html) — when polarized waves can and cannot interfere
- [Young experiment as a stellar interferometer](../03_Zettel/Theory/interf/Young%20experiment%20as%20a%20stellar%20interferometer.html) — Stéphan and Michelson's insight: use the slit experiment on the sky to measure $\theta$
- [Fringe visibility and contrast](../03_Zettel/Theory/interf/Fringe%20visibility%20and%20contrast.html) — $V = (I_{\max} - I_{\min})/(I_{\max} + I_{\min})$, the observable

### block 1.5 — classical-optics interferometers (D'Onofrio Lezione 1-2)

before astronomical interferometers, the laboratory ones. D'Onofrio's course develops these in detail because every astronomical interferometer is descended from one of them.

- [Wavefront-division interferometers](../03_Zettel/Theory/interf/Wavefront-division%20interferometers.html) — Young, Fresnel double mirror, Fresnel biprism, Lloyd mirror
- [Amplitude-division interferometers](../03_Zettel/Theory/Amplitude-division%20interferometers.html) — Michelson lab, Mach-Zehnder, Sagnac, Fabry-Perot
- [Fresnel double mirror](../03_Zettel/Theory/interf/Fresnel%20double%20mirror.html) — two-mirror geometry producing two virtual sources
- [Fresnel biprism](../03_Zettel/Theory/interf/Fresnel%20biprism.html) — single prism with two refracting halves
- [Lloyd mirror](../03_Zettel/Theory/interf/Lloyd%20mirror.html) — single grazing-incidence mirror, the simplest two-source setup
- [Michelson laboratory interferometer](../03_Zettel/Theory/interf/Michelson%20laboratory%20interferometer.html) — beam-splitter + two mirrors, the workhorse of metrology
- [Mach-Zehnder interferometer](../03_Zettel/Theory/interf/Mach-Zehnder%20interferometer.html) — two beam splitters, quantum-information friendly
- [Sagnac interferometer](../03_Zettel/Theory/interf/Sagnac%20interferometer.html) — counter-propagating beams in a closed loop, rotation-sensitive
- [Fabry-Perot interferometer](../03_Zettel/Theory/interf/Fabry-Perot%20interferometer.html) — multiple-beam interference between two parallel mirrors
- [Beam splitter physics](../03_Zettel/Theory/interf/Beam%20splitter%20physics.html) — partial reflection at a dielectric interface, $\pi$-phase asymmetry
- [Fringes of equal inclination](../03_Zettel/Theory/interf/Fringes%20of%20equal%20inclination.html) — circular fringes from a thin film at varying angles
- [Fringes of equal thickness](../03_Zettel/Theory/interf/Fringes%20of%20equal%20thickness.html) — straight or curved fringes from a wedge film
- [Newton's rings](../03_Zettel/Theory/interf/Newton%27s%20rings.html) — concentric fringes from an air gap between a lens and a flat

---

## block 2 — interference, diffraction, and coherence

the formal toolkit of wave optics. coherence is what makes fringes possible. the Van Cittert-Zernike theorem is the single most important result in this course.

- [Fraunhofer diffraction](../03_Zettel/Theory/interf/Fraunhofer%20diffraction.html) — far-field approximation, diffraction integral as a Fourier transform
- [Diffraction patterns of simple apertures](../03_Zettel/Theory/interf/Diffraction%20patterns%20of%20simple%20apertures.html) — single slit (sinc), circular aperture (Airy), rectangular, double slit
- [Point spread function](../03_Zettel/Theory/interf/Point%20spread%20function.html) — the diffraction-limited image of a point source
- [Optical transfer function](../03_Zettel/Theory/interf/Optical%20transfer%20function.html) — Fourier transform of the PSF, the spatial-frequency response of an optical system
- [Abbe experiment and Fourier optics](../03_Zettel/Theory/interf/Abbe%20experiment%20and%20Fourier%20optics.html) — image formation as spatial-frequency selection: aperture cutoff, OTF/MTF, and why resolution is Fourier bandwidth
- [Coherent vs incoherent imaging](../03_Zettel/Theory/interf/Coherent%20vs%20incoherent%20imaging.html) — when waves add as amplitudes vs when they add as intensities
- [Spatial coherence](../03_Zettel/Theory/interf/Spatial%20coherence.html) — correlation of the wave at two points, what allows fringes between two apertures
- [Temporal coherence](../03_Zettel/Theory/interf/Temporal%20coherence.html) — correlation in time, sets the maximum optical-path difference for fringes
- [Wiener-Khinchin theorem](../03_Zettel/Theory/interf/Wiener-Khinchin%20theorem.html) — autocorrelation and power spectrum as Fourier pairs, the bridge between coherence, spectra, and correlators
- [Coherence function and visibility](../03_Zettel/Theory/interf/Coherence%20function%20and%20visibility.html) — the math link: $V = \lvert\gamma_{12}\rvert$ where $\gamma_{12}$ is the normalized cross-correlation
- [Van Cittert-Zernike theorem](../03_Zettel/Theory/interf/Van%20Cittert-Zernike%20theorem.html) — **the central theorem**: visibility is the Fourier transform of the source brightness distribution
- [Photon noise and statistics](../03_Zettel/Theory/interf/Photon%20noise%20and%20statistics.html) — Poisson statistics, the photon-noise floor of every interferometric measurement

---

## block 3 — aperture synthesis

the engineering of building an image from many baselines. a single baseline samples one Fourier component; an array samples many; we Fourier-invert. the $(u, v)$ plane and its sampling are the unifying picture.

- [Aperture synthesis principle](../03_Zettel/Theory/interf/Aperture%20synthesis%20principle.html) — multiple separated apertures = synthetic large aperture, sampling the (u, v) plane
- [The (u, v) plane](../03_Zettel/Theory/interf/The%20%28u%2C%20v%29%20plane.html) — projection of baselines on the sky, why Earth rotation makes the sampling track elliptical arcs
- [Earth-rotation aperture synthesis](../03_Zettel/Theory/interf/Earth-rotation%20aperture%20synthesis.html) — using Earth's rotation to fill the (u, v) plane over a night
- [Optimal array geometry](../03_Zettel/Theory/interf/Optimal%20array%20geometry.html) — circular, Y, T, configurations: tradeoffs between resolution and snapshot fidelity
- [Dirty beam and dirty image](../03_Zettel/Theory/interf/Dirty%20beam%20and%20dirty%20image.html) — the synthesized PSF and the convolved image straight from the (u, v) data
- [The phase problem in interferometry](../03_Zettel/Theory/interf/The%20phase%20problem%20in%20interferometry.html) — turbulent atmosphere randomizes phases, why visibility amplitude is preserved but phase is not
- [Phase closure](../03_Zettel/Theory/interf/Phase%20closure.html) — closure phase of three baselines is atmosphere-independent, the key to optical imaging
- [Closure amplitude](../03_Zettel/Theory/interf/Closure%20amplitude.html) — closure amplitude of four baselines is gain-independent
- [Heterodyne vs direct detection](../03_Zettel/Theory/interf/Heterodyne%20vs%20direct%20detection.html) — radio mixes signals down to RF before correlation; optical has no oscillators, must combine waves directly
- [Crowding limitation](../03_Zettel/Theory/interf/Crowding%20limitation.html) — fundamental limit on the field of view for a sparse array, why we cannot image the whole sky at once

---

## block 4 — optical effects of the atmosphere

the atmosphere is the worst enemy of optical interferometry and a manageable nuisance for radio. understanding *why* unlocks the techniques to get around it.

- [Atmospheric turbulence overview](../03_Zettel/Theory/interf/Atmospheric%20turbulence%20overview.html) — the seeing, $r_0$, and isoplanatic patch as observable consequences of atmospheric turbulence
- [Kolmogorov turbulence](../03_Zettel/Theory/interf/Kolmogorov%20turbulence.html) — the canonical model, $D(r) \propto r^{2/3}$, the inertial range
- [Structure function and correlation function](../03_Zettel/Theory/interf/Structure%20function%20and%20correlation%20function.html) — $D(r), B(r)$, the statistical descriptors of phase fluctuations
- [Fried parameter $r_0$](../03_Zettel/Theory/interf/Fried%20parameter%20%24r_0%24.html) — the size of the patch over which atmospheric phase is coherent, $r_0 \sim 10$ cm at 500 nm
- [Isoplanatic patch](../03_Zettel/Theory/interf/Isoplanatic%20patch.html) — the angular size over which the atmospheric distortion is the same, $\theta_0 \sim$ a few arcseconds
- [Frozen turbulence and Taylor hypothesis](../03_Zettel/Theory/interf/Frozen%20turbulence%20and%20Taylor%20hypothesis.html) — wind sweeping a frozen turbulent screen, the temporal proxy for spatial fluctuations
- [Scintillation and twinkling](../03_Zettel/Theory/interf/Scintillation%20and%20twinkling.html) — intensity fluctuations from refraction, the visible "twinkle" of stars
- [Adaptive optics](../03_Zettel/Theory/interf/Adaptive%20optics.html) — measure the wavefront, deform a mirror, undo the distortion in real time
- [Wavefront sensors](../03_Zettel/Theory/interf/Wavefront%20sensors.html) — Shack-Hartmann, pyramid, curvature: how I measure the distortion
- [Deformable mirrors and tip-tilt](../03_Zettel/Theory/interf/Deformable%20mirrors%20and%20tip-tilt.html) — the actuator side, how I correct the distortion
- [Guide stars and laser guide stars](../03_Zettel/Theory/interf/Guide%20stars%20and%20laser%20guide%20stars.html) — the reference object I lock onto, natural vs sodium-laser

---

## block 5 — single-aperture high-resolution techniques

before full interferometry, there are tricks to push a single telescope past the seeing-limited resolution. these are the historical precursors and still useful today.

- [Speckle interferometry](../03_Zettel/Theory/interf/Speckle%20interferometry.html) — short exposures freeze the seeing, autocorrelation recovers the diffraction-limited power spectrum
- [Theory of speckle interferometry](../03_Zettel/Theory/interf/Theory%20of%20speckle%20interferometry.html) — the Labeyrie 1970 derivation, the speckle transfer function
- [Aperture masking](../03_Zettel/Theory/interf/Aperture%20masking.html) — block all but a few patches of the primary, turn the telescope into a multi-element interferometer
- [Speckle imaging algorithms](../03_Zettel/Theory/interf/Speckle%20imaging%20algorithms.html) — Knox-Thompson and triple-correlation (bispectrum) phase reconstruction
- [Bispectrum and triple correlation](../03_Zettel/Theory/interf/Bispectrum%20and%20triple%20correlation.html) — the closure-phase analog for single-aperture work, recovers an image from speckle data

---

## block 6 — intensity interferometry

a different beast: correlate intensity fluctuations rather than wave amplitudes. relaxes the phase-stability requirements at the cost of much lower sensitivity. invented by Hanbury Brown and Twiss for stellar diameters.

- [Intensity interferometry concept](../03_Zettel/Theory/interf/Intensity%20interferometry%20concept.html) — the HBT effect, $\langle I_1 I_2\rangle - \langle I_1\rangle\langle I_2\rangle \neq 0$ for a coherent source
- [Hanbury Brown Twiss effect](../03_Zettel/Theory/interf/Hanbury%20Brown%20Twiss%20effect.html) — the foundational experiment, classical and quantum interpretations
- [Narrabri stellar interferometer](../03_Zettel/Theory/interf/Narrabri%20stellar%20interferometer.html) — the first instrument that systematically measured stellar diameters this way
- [Why intensity interferometry escapes atmospheric phase](../03_Zettel/Theory/interf/Why%20intensity%20interferometry%20escapes%20atmospheric%20phase.html) — only intensity correlations are needed; the atmosphere randomizes the wave phase but preserves the intensity correlation
- [Sensitivity and modern revival](../03_Zettel/Theory/interf/Sensitivity%20and%20modern%20revival.html) — IACT arrays (CTA, VERITAS) revisiting the technique with modern photon-counting detectors

---

## block 7 — amplitude interferometry instruments

the workhorses: optical/IR interferometers that combine wave amplitudes from separated apertures. each has its quirks, and knowing them is what the exam tests.

- [Michelson stellar interferometer](../03_Zettel/Theory/interf/Michelson%20stellar%20interferometer.html) — the historical first, 20-foot beam at Mt Wilson, Betelgeuse's diameter (1920)
- [Components of a modern interferometer](../03_Zettel/Theory/interf/Components%20of%20a%20modern%20interferometer.html) — telescopes, beam lines, delay lines, beam combiners, fringe trackers
- [Delay lines and path-length equalization](../03_Zettel/Theory/interf/Delay%20lines%20and%20path-length%20equalization.html) — keeping the optical path lengths matched to within the coherence length
- [Beam combiners](../03_Zettel/Theory/Beam%20combiners.html) — pairwise (Michelson), all-on-one (Fizeau), single-mode-fiber, integrated-optics
- [Fringe tracking](../03_Zettel/Theory/interf/Fringe%20tracking.html) — actively locking onto the fringe to compensate for atmospheric and mechanical drift
- [VLTI Very Large Telescope Interferometer](../03_Zettel/Theory/interf/VLTI%20Very%20Large%20Telescope%20Interferometer.html) — ESO's 4 × 8m + 4 × 1.8m, baselines 8-130 m, IR
- [CHARA array](../03_Zettel/Theory/interf/CHARA%20array.html) — Mt Wilson, six 1m telescopes, 33-330 m baselines, the workhorse for stellar surface imaging
- [Large Binocular Telescope LBT](../03_Zettel/Theory/interf/Large%20Binocular%20Telescope%20LBT.html) — two 8m mirrors on one mount, Fizeau-style imaging
- [COAST Cambridge Optical Aperture Synthesis Telescope](../03_Zettel/Theory/interf/COAST%20Cambridge%20Optical%20Aperture%20Synthesis%20Telescope.html) — small but historically significant, first true optical aperture synthesis image
- [NPOI Navy Prototype Optical Interferometer](../03_Zettel/Theory/interf/NPOI%20Navy%20Prototype%20Optical%20Interferometer.html) — astrometric and imaging instrument
- [Keck interferometer](../03_Zettel/Theory/interf/Keck%20interferometer.html) — twin 10m telescopes, now decommissioned

---

## block 8 — radio interferometry

the parallel universe. radio observations have it easier (no daytime brightness, Earth-rotation aperture synthesis works perfectly, electronics can heterodyne) but harder (huge antennas needed for sensitivity, RFI). the techniques are the same, the practical implementation completely different.

- [Radio astronomy basics](../03_Zettel/Theory/interf/Radio%20astronomy%20basics.html) — Jansky, antenna temperature, brightness temperature, radio quiet zones, Allen-Mills
- [Specific intensity and flux density](../03_Zettel/Theory/interf/Specific%20intensity%20and%20flux%20density.html) — the language of radio sources: $I_\nu$, $S_\nu$, Jansky, beam integration, and brightness temperature
- [Antenna effective area and gain](../03_Zettel/Theory/interf/Antenna%20effective%20area%20and%20gain.html) — how a dish turns an electromagnetic wave into measurable power, with $A_{\rm e}$, gain, and aperture efficiency
- [Beam power pattern of a radio telescope](../03_Zettel/Theory/interf/Beam%20power%20pattern%20of%20a%20radio%20telescope.html) — primary beam, beam solid angle, Gaussian beams, and why every antenna measures a weighted sky
- [Radiometer equation and SEFD](../03_Zettel/Theory/interf/Radiometer%20equation%20and%20SEFD.html) — sensitivity from noise statistics: $T_{\rm sys}$, SEFD, bandwidth, integration time, and array RMS
- [Radio interferometer architecture](../03_Zettel/Theory/interf/Radio%20interferometer%20architecture.html) — antennas, LO, mixer, correlator, the heterodyne chain
- [Downconversion of signals in radio interferometers](../03_Zettel/Theory/interf/Downconversion%20of%20signals%20in%20radio%20interferometers.html) — why radio arrays preserve phase by mixing sky frequencies down to IF before digitization
- [Digitization quantization and timing in radio interferometry](../03_Zettel/Theory/interf/Digitization%20quantization%20and%20timing%20in%20radio%20interferometry.html) — sampling, quantization efficiency, time standards, and why correlators need synchronized data streams
- [Two-element correlator](../03_Zettel/Theory/interf/Two-element%20correlator.html) — the building block: multiply and time-average two voltages
- [Connected element interferometer](../03_Zettel/Theory/interf/Connected%20element%20interferometer.html) — VLA-style, baselines fixed by cabling
- [Very Long Baseline Interferometry VLBI](../03_Zettel/Theory/interf/Very%20Long%20Baseline%20Interferometry%20VLBI.html) — antennas around the world, atomic clocks, post-correlation, EVN, VLBA
- [Earth rotation synthesis in radio](../03_Zettel/Theory/interf/Earth%20rotation%20synthesis%20in%20radio.html) — VLA's 12-hour tracks, ALMA's hour-long ones
- [ALMA exposure time calculator and sensitivity](../03_Zettel/Theory/interf/ALMA%20exposure%20time%20calculator%20and%20sensitivity.html) — how observing setup becomes expected RMS through array size, weather, bandwidth, and integration time
- [Major radio interferometers](../03_Zettel/Theory/interf/Major%20radio%20interferometers.html) — VLA, ALMA, EVN, MERLIN, ATCA, GMRT, LOFAR, MeerKAT, SKA
- [Event Horizon Telescope EHT](../03_Zettel/Theory/interf/Event%20Horizon%20Telescope%20EHT.html) — the highest-resolution interferometer ever built, M87 and Sgr A*
- [Pulsar timing arrays as interferometers](../03_Zettel/Theory/interf/Pulsar%20timing%20arrays%20as%20interferometers.html) — NANOGrav, EPTA, PPTA: nanosecond-level timing across many pulsars as a galactic-scale GW detector

---

## block 9 — calibration and imaging

raw visibilities are not images. the path from voltages to a science-ready image is calibration → flagging → deconvolution → self-calibration → cleaning. this block covers the algorithmic side.

- [Calibration overview](../03_Zettel/Theory/interf/Calibration%20overview.html) — bandpass, flux, phase calibrators, the ABC of radio reduction
- [Steps in radio interferometric observations](../03_Zettel/Theory/interf/Steps%20in%20radio%20interferometric%20observations.html) — the full observing story: science goal, setup, calibrators, flagging, calibration, imaging, and validation
- [Bandpass calibration](../03_Zettel/Theory/interf/Bandpass%20calibration.html) — flatten the frequency response of each antenna
- [Flux calibration](../03_Zettel/Theory/interf/Flux%20calibration.html) — anchor the absolute scale to a known source (3C 286, 3C 48)
- [Phase referencing](../03_Zettel/Theory/interf/Phase%20referencing.html) — alternate between the science target and a nearby calibrator to track atmospheric/instrumental phase
- [Self-calibration](../03_Zettel/Theory/interf/Self-calibration.html) — use the data on the science target to refine the gain and phase solutions iteratively
- [CLEAN algorithm](../03_Zettel/Theory/interf/CLEAN%20algorithm.html) — the iterative point-source deconvolution, Högbom 1974
- [Maximum entropy method](../03_Zettel/Theory/Maximum%20entropy%20method.html) — the Bayesian alternative for extended sources, Cornwell-Evans
- [Deconvolution algorithms compared](../03_Zettel/Theory/interf/Deconvolution%20algorithms%20compared.html) — CLEAN vs MEM vs modern Bayesian (regularized maximum likelihood)
- [Imaging artifacts](../03_Zettel/Theory/interf/Imaging%20artifacts.html) — sidelobes, sidelobe confusion, primary beam attenuation, what they look like and how to avoid them
- [Polarization in interferometry](../03_Zettel/Theory/interf/Polarization%20in%20interferometry.html) — Stokes parameters, parallel-hand and cross-hand correlations, Faraday rotation
- [Mosaicking](../03_Zettel/Theory/interf/Mosaicking.html) — combining multiple pointings to map a region larger than the primary beam

---

## block 10 — special techniques: nulling, coronagraphy, hypertelescope

interferometry-adjacent techniques for high-contrast imaging and pushing the resolution further.

- [Nulling interferometry](../03_Zettel/Theory/interf/Nulling%20interferometry.html) — destructive on-axis interference suppresses bright stars, lets faint companions through
- [Bracewell nuller](../03_Zettel/Theory/interf/Bracewell%20nuller.html) — the original 1978 idea: phase-flip half the array to null the central star
- [Coronagraphy](../03_Zettel/Theory/interf/Coronagraphy.html) — block the starlight before it reaches the detector. Lyot, phase-mask, four-quadrant, vortex
- [Apodization](../03_Zettel/Theory/interf/Apodization.html) — taper the aperture amplitude or phase to suppress diffraction wings
- [Hypertelescope](../03_Zettel/Theory/interf/Hypertelescope.html) — Labeyrie's idea: pupil densification turns sparse-array interferometry into direct imaging

---

## block 11 — interferometric science

what we have actually learned with this technique. organized roughly by source class.

- [Stellar diameters and limb darkening](../03_Zettel/Theory/interf/Stellar%20diameters%20and%20limb%20darkening.html) — the canonical first measurement, Michelson 1920 → CHARA 2010s
- [Stellar surface imaging](../03_Zettel/Theory/interf/Stellar%20surface%20imaging.html) — spots, hot spots, granulation; Altair, Vega, Betelgeuse imaged
- [Pulsating stars and Mira variables](../03_Zettel/Theory/interf/Pulsating%20stars%20and%20Mira%20variables.html) — diameter changes with pulsation phase
- [Young stellar object disks](../03_Zettel/Theory/interf/Young%20stellar%20object%20disks.html) — inner-disk imaging, dust-sublimation radius measurements
- [Dust shells and Wolf-Rayet stars](../03_Zettel/Theory/interf/Dust%20shells%20and%20Wolf-Rayet%20stars.html) — circumstellar geometry of mass-losing stars
- [Binary star orbits](../03_Zettel/Theory/interf/Binary%20star%20orbits.html) — astrometric orbits at sub-mas precision, dynamical masses
- [Galactic Center Sgr A and S-stars](../03_Zettel/Theory/interf/Galactic%20Center%20Sgr%20A%20and%20S-stars.html) — VLTI's GRAVITY: orbits of S-stars around Sgr A*, test of GR
- [AGN and supermassive black holes](../03_Zettel/Theory/interf/AGN%20and%20supermassive%20black%20holes.html) — EHT's M87 and Sgr A* shadow images, jet bases
- [Exoplanet imaging](../03_Zettel/Theory/interf/Exoplanet%20imaging.html) — high-contrast direct detection, atmosphere characterization
- [Cosmological masers](../03_Zettel/Theory/interf/Cosmological%20masers.html) — VLBI of water masers in NGC 4258, geometric distance measurement
- [Pulsar interferometry](../03_Zettel/Theory/interf/Pulsar%20interferometry.html) — timing-array gravitational waves, pulsar position astrometry
- [Radiation mechanisms in astronomy and interferometers](../03_Zettel/Theory/interf/Radiation%20mechanisms%20in%20astronomy%20and%20interferometers.html) — thermal dust, free-free, synchrotron, spectral lines, and masers as the physical origin of the brightness maps

---

## block 12 — future projects

ground-based and space-based instruments under development or planned.

- [Future ground-based optical](../03_Zettel/Theory/interf/Future%20ground-based%20optical.html) — OVLA, CARLINA hypertelescopes, OHANA fiber-link
- [Future space-based](../03_Zettel/Theory/interf/Future%20space-based.html) — Darwin, TPF, SIM, the Exo-Earth Imager
- [The Square Kilometre Array SKA](../03_Zettel/Theory/interf/The%20Square%20Kilometre%20Array%20SKA.html) — the next-generation radio array, two sites, cm-to-m wavelengths
- [ngVLA Next Generation VLA](../03_Zettel/Theory/interf/ngVLA%20Next%20Generation%20VLA.html) — NRAO's mid-frequency successor to VLA, 2030s
- [Lunar interferometry concepts](../03_Zettel/Theory/interf/Lunar%20interferometry%20concepts.html) — far-side of the Moon as the radio-quietest place in the inner solar system

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

- [Observational_Cosmology_MOC](./Observational_Cosmology_MOC.html) — radio surveys, ALMA continuum studies of high-$z$ galaxies
- 04_Atlas/Lab_High-Energy_MOC — instrumentation, calibration philosophy carries across wavelengths
- [Mathematical_Numerical_Methods_MOC](./Mathematical_Numerical_Methods_MOC.html) — FFT and image-deconvolution algorithms
- [Fundamentals_Astrophysics_Cosmology_MOC](./Fundamentals_Astrophysics_Cosmology_MOC.html) — angular-diameter distance, Tolman surface brightness
- [General_Relativity_MOC](./General_Relativity_MOC.html) — EHT and S-star tests of GR
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
| `![AGN_and_supermassive_black_holes.jpg](../assets/images/AGN_and_supermassive_black_holes.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Adaptive_optics.gif](../assets/images/Adaptive_optics.gif)` | Adaptive optics wavefront sensor, deformable mirror, and Strehl ratio enhancement | [Adaptive optics overview](../03_Zettel/Theory/interf/Adaptive%20optics%20overview.html) |
| `![Amplitude-division_interferometers.png](../assets/images/Amplitude-division_interferometers.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Aperture_masking.jpg](../assets/images/Aperture_masking.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Apodization.png](../assets/images/Apodization.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Atmospheric_turbulence_overview.jpg](../assets/images/Atmospheric_turbulence_overview.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Bandpass_calibration.jpg](../assets/images/Bandpass_calibration.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Beam_combiners.jpg](../assets/images/Beam_combiners.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Beam_splitter_physics.png](../assets/images/Beam_splitter_physics.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Binary_star_orbits.jpg](../assets/images/Binary_star_orbits.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Bispectrum_and_triple_correlation.jpg](../assets/images/Bispectrum_and_triple_correlation.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Bracewell_nuller.svg](../assets/images/Bracewell_nuller.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![CHARA_array.jpg](../assets/images/CHARA_array.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![COAST_Cambridge_Optical_Aperture_Synthesis_Telescope.jpg](../assets/images/COAST_Cambridge_Optical_Aperture_Synthesis_Telescope.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Closure_amplitude.jpg](../assets/images/Closure_amplitude.jpg)` | Closure phase and closure amplitude eliminating station-based atmospheric phase errors | Closure phase |
| `![Coherent_vs_incoherent_imaging.png](../assets/images/Coherent_vs_incoherent_imaging.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Components_of_a_modern_interferometer.jpg](../assets/images/Components_of_a_modern_interferometer.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Connected_element_interferometer.jpg](../assets/images/Connected_element_interferometer.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Coronagraphy.jpg](../assets/images/Coronagraphy.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Cosmological_masers.jpg](../assets/images/Cosmological_masers.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Crowding_limitation.jpg](../assets/images/Crowding_limitation.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Deconvolution_algorithms_compared.jpg](../assets/images/Deconvolution_algorithms_compared.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Deformable_mirrors_and_tip-tilt.jpg](../assets/images/Deformable_mirrors_and_tip-tilt.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Dust_shells_and_Wolf-Rayet_stars.jpg](../assets/images/Dust_shells_and_Wolf-Rayet_stars.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Earth_rotation_synthesis_in_radio.svg](../assets/images/Earth_rotation_synthesis_in_radio.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Exoplanet_imaging.jpg](../assets/images/Exoplanet_imaging.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Fabry-Perot_interferometer.png](../assets/images/Fabry-Perot_interferometer.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Flux_calibration.jpg](../assets/images/Flux_calibration.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Fresnel_biprism.PNG](../assets/images/Fresnel_biprism.PNG)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Fresnel_double_mirror.svg](../assets/images/Fresnel_double_mirror.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Fried_parameter__r_0_.jpg](../assets/images/Fried_parameter__r_0_.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Fringe_tracking.jpg](../assets/images/Fringe_tracking.jpg)` | Interference fringe visibility, contrast, and phase measurement | Visibility function and fringes |
| `![Fringe_visibility_and_contrast.png](../assets/images/Fringe_visibility_and_contrast.png)` | Interference fringe visibility, contrast, and phase measurement | Visibility function and fringes |
| `![Fringes_of_equal_inclination.svg](../assets/images/Fringes_of_equal_inclination.svg)` | Interference fringe visibility, contrast, and phase measurement | Visibility function and fringes |
| `![Fringes_of_equal_thickness.jpg](../assets/images/Fringes_of_equal_thickness.jpg)` | Interference fringe visibility, contrast, and phase measurement | Visibility function and fringes |
| `![Frozen_turbulence_and_Taylor_hypothesis.gif](../assets/images/Frozen_turbulence_and_Taylor_hypothesis.gif)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Future_ground-based_optical.jpg](../assets/images/Future_ground-based_optical.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Future_space-based.jpg](../assets/images/Future_space-based.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Galactic_Center_Sgr_A_and_S-stars.jpg](../assets/images/Galactic_Center_Sgr_A_and_S-stars.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Guide_stars_and_laser_guide_stars.jpg](../assets/images/Guide_stars_and_laser_guide_stars.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Hanbury_Brown_Twiss_effect.gif](../assets/images/Hanbury_Brown_Twiss_effect.gif)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Hypertelescope.jpg](../assets/images/Hypertelescope.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Imaging_artifacts.svg](../assets/images/Imaging_artifacts.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Intensity_interferometry_concept.svg](../assets/images/Intensity_interferometry_concept.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Interferometry_course_intro.jpg](../assets/images/Interferometry_course_intro.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Interferometry_equation_sheet.svg](../assets/images/Interferometry_equation_sheet.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Interferometry_exam_rules.PNG](../assets/images/Interferometry_exam_rules.PNG)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Isoplanatic_patch.svg](../assets/images/Isoplanatic_patch.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Keck_interferometer.jpg](../assets/images/Keck_interferometer.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Keck_interferometer.png](../assets/images/Keck_interferometer.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Kolmogorov_turbulence.png](../assets/images/Kolmogorov_turbulence.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Large_Binocular_Telescope_LBT.JPG](../assets/images/Large_Binocular_Telescope_LBT.JPG)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Light_waves_and_the_EM_spectrum.svg](../assets/images/Light_waves_and_the_EM_spectrum.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Lloyd_mirror.jpg](../assets/images/Lloyd_mirror.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Lunar_interferometry_concepts.jpg](../assets/images/Lunar_interferometry_concepts.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Mach-Zehnder_interferometer.jpg](../assets/images/Mach-Zehnder_interferometer.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Major_radio_interferometers.jpg](../assets/images/Major_radio_interferometers.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Maximum_entropy_method.svg](../assets/images/Maximum_entropy_method.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Michelson_laboratory_interferometer.svg](../assets/images/Michelson_laboratory_interferometer.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Michelson_stellar_interferometer.jpg](../assets/images/Michelson_stellar_interferometer.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Mosaicking.jpg](../assets/images/Mosaicking.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![NPOI_Navy_Prototype_Optical_Interferometer.jpg](../assets/images/NPOI_Navy_Prototype_Optical_Interferometer.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Narrabri_stellar_interferometer.jpg](../assets/images/Narrabri_stellar_interferometer.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Newton_s_rings.jpeg](../assets/images/Newton_s_rings.jpeg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Nulling_interferometry.jpg](../assets/images/Nulling_interferometry.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Optical_path_difference_OPD.svg](../assets/images/Optical_path_difference_OPD.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Optical_transfer_function.svg](../assets/images/Optical_transfer_function.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Optimal_array_geometry.jpg](../assets/images/Optimal_array_geometry.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Phase_closure.jpg](../assets/images/Phase_closure.jpg)` | Closure phase and closure amplitude eliminating station-based atmospheric phase errors | Closure phase |
| `![Phase_referencing.svg](../assets/images/Phase_referencing.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Photon_noise_and_statistics.jpg](../assets/images/Photon_noise_and_statistics.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Point_spread_function.svg](../assets/images/Point_spread_function.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Polarization_in_interferometry.png](../assets/images/Polarization_in_interferometry.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Pulsar_interferometry.jpg](../assets/images/Pulsar_interferometry.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Pulsar_timing_arrays_as_interferometers.jpg](../assets/images/Pulsar_timing_arrays_as_interferometers.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Pulsating_stars_and_Mira_variables.jpg](../assets/images/Pulsating_stars_and_Mira_variables.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Sagnac_interferometer.svg](../assets/images/Sagnac_interferometer.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Scintillation_and_twinkling.jpg](../assets/images/Scintillation_and_twinkling.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Self-calibration.png](../assets/images/Self-calibration.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Sensitivity_and_modern_revival.jpeg](../assets/images/Sensitivity_and_modern_revival.jpeg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Spatial_coherence.gif](../assets/images/Spatial_coherence.gif)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Speckle_imaging_algorithms.gif](../assets/images/Speckle_imaging_algorithms.gif)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Speckle_interferometry.jpg](../assets/images/Speckle_interferometry.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Stellar_diameters_and_limb_darkening.svg](../assets/images/Stellar_diameters_and_limb_darkening.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Stellar_surface_imaging.jpg](../assets/images/Stellar_surface_imaging.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Steps_in_radio_interferometric_observations.jpg](../assets/images/Steps_in_radio_interferometric_observations.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Structure_function_and_correlation_function.png](../assets/images/Structure_function_and_correlation_function.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Temporal_coherence.gif](../assets/images/Temporal_coherence.gif)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![The_Square_Kilometre_Array_SKA.png](../assets/images/The_Square_Kilometre_Array_SKA.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![The__u__v__plane.png](../assets/images/The__u__v__plane.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![The_phase_problem_in_interferometry.jpg](../assets/images/The_phase_problem_in_interferometry.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Theory_of_speckle_interferometry.jpg](../assets/images/Theory_of_speckle_interferometry.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Two-element_correlator.jpg](../assets/images/Two-element_correlator.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Wavefront-division_interferometers.svg](../assets/images/Wavefront-division_interferometers.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Wavefront_sensors.svg](../assets/images/Wavefront_sensors.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Why_intensity_interferometry_escapes_atmospheric_phase.png](../assets/images/Why_intensity_interferometry_escapes_atmospheric_phase.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Why_interferometry.svg](../assets/images/Why_interferometry.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Wiener-Khinchin_theorem.svg](../assets/images/Wiener-Khinchin_theorem.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![Young_stellar_object_disks.jpg](../assets/images/Young_stellar_object_disks.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![abbe_fourier_optics_orders.svg](../assets/images/abbe_fourier_optics_orders.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![airy_pattern_generated.png](../assets/images/airy_pattern_generated.png)` | Airy disk diffraction pattern and spatial resolution limit $\theta \sim 1.22\lambda/D$ | Airy disk and resolution |
| `![alma_signal_path_official.gif](../assets/images/alma_signal_path_official.gif)` | ALMA millimeter/submillimeter array configuration, baselines, and calibration | ALMA observatory and capabilities |
| `![antenna_effective_area_gain.svg](../assets/images/antenna_effective_area_gain.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![digitization_quantization_sampling.svg](../assets/images/digitization_quantization_sampling.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![downconversion_mixer_if.svg](../assets/images/downconversion_mixer_if.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![eht_m87_eso1907a.jpg](../assets/images/eht_m87_eso1907a.jpg)` | Very Long Baseline Interferometry (VLBI) and Event Horizon Telescope imaging | [Very Long Baseline Interferometry VLBI](../03_Zettel/Theory/interf/Very%20Long%20Baseline%20Interferometry%20VLBI.html) |
| `![eht_planet_scale_array_eso1907j.jpg](../assets/images/eht_planet_scale_array_eso1907j.jpg)` | Very Long Baseline Interferometry (VLBI) and Event Horizon Telescope imaging | [Very Long Baseline Interferometry VLBI](../03_Zettel/Theory/interf/Very%20Long%20Baseline%20Interferometry%20VLBI.html) |
| `![ivkovic_2024_fig1.png](../assets/images/ivkovic_2024_fig1.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [Intensity interferometry concept](../03_Zettel/Theory/interf/Intensity%20interferometry%20concept.html) |
| `![ivkovic_2024_fig1_rg.webp](../assets/images/ivkovic_2024_fig1_rg.webp)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [Intensity interferometry concept](../03_Zettel/Theory/interf/Intensity%20interferometry%20concept.html) |
| `![ivkovic_2024_fig2.png](../assets/images/ivkovic_2024_fig2.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [Intensity interferometry concept](../03_Zettel/Theory/interf/Intensity%20interferometry%20concept.html) |
| `![ivkovic_2024_fig3.png](../assets/images/ivkovic_2024_fig3.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [Intensity interferometry concept](../03_Zettel/Theory/interf/Intensity%20interferometry%20concept.html) |
| `![ivkovic_2024_fig3_rg.png](../assets/images/ivkovic_2024_fig3_rg.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [Intensity interferometry concept](../03_Zettel/Theory/interf/Intensity%20interferometry%20concept.html) |
| `![ivkovic_2024_fig4.png](../assets/images/ivkovic_2024_fig4.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [Intensity interferometry concept](../03_Zettel/Theory/interf/Intensity%20interferometry%20concept.html) |
| `![ivkovic_2024_fig4_rg.png](../assets/images/ivkovic_2024_fig4_rg.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [Intensity interferometry concept](../03_Zettel/Theory/interf/Intensity%20interferometry%20concept.html) |
| `![ivkovic_2024_fig5.png](../assets/images/ivkovic_2024_fig5.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [Intensity interferometry concept](../03_Zettel/Theory/interf/Intensity%20interferometry%20concept.html) |
| `![ivkovic_2024_fig5_rg.png](../assets/images/ivkovic_2024_fig5_rg.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [Intensity interferometry concept](../03_Zettel/Theory/interf/Intensity%20interferometry%20concept.html) |
| `![ivkovic_2024_fig6.png](../assets/images/ivkovic_2024_fig6.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [Intensity interferometry concept](../03_Zettel/Theory/interf/Intensity%20interferometry%20concept.html) |
| `![ivkovic_2024_fig6_rg.png](../assets/images/ivkovic_2024_fig6_rg.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [Intensity interferometry concept](../03_Zettel/Theory/interf/Intensity%20interferometry%20concept.html) |
| `![ivkovic_2024_fig7.png](../assets/images/ivkovic_2024_fig7.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [Intensity interferometry concept](../03_Zettel/Theory/interf/Intensity%20interferometry%20concept.html) |
| `![ivkovic_2024_fig8.png](../assets/images/ivkovic_2024_fig8.png)` | Ivkovic et al. (2024) second-order intensity correlation $g^{(2)}$ and modern intensity interferometry | [Intensity interferometry concept](../03_Zettel/Theory/interf/Intensity%20interferometry%20concept.html) |
| `![ngVLA_Next_Generation_VLA.jpg](../assets/images/ngVLA_Next_Generation_VLA.jpg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![nrao_snapshot_dirty_beam.jpg](../assets/images/nrao_snapshot_dirty_beam.jpg)` | Adaptive optics wavefront sensor, deformable mirror, and Strehl ratio enhancement | [Adaptive optics overview](../03_Zettel/Theory/interf/Adaptive%20optics%20overview.html) |
| `![nrao_snapshot_dirty_image.jpg](../assets/images/nrao_snapshot_dirty_image.jpg)` | Adaptive optics wavefront sensor, deformable mirror, and Strehl ratio enhancement | [Adaptive optics overview](../03_Zettel/Theory/interf/Adaptive%20optics%20overview.html) |
| `![nrao_snapshot_uv_coverage.jpg](../assets/images/nrao_snapshot_uv_coverage.jpg)` | UV-plane baseline sampling, aperture synthesis, and Earth rotation synthesis | UV coverage and aperture synthesis |
| `![polarization_stokes_ellipse.svg](../assets/images/polarization_stokes_ellipse.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![radiation_mechanisms_spectra.png](../assets/images/radiation_mechanisms_spectra.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![radio_interferometer_signal_chain.svg](../assets/images/radio_interferometer_signal_chain.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![radio_observing_workflow.svg](../assets/images/radio_observing_workflow.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![radiometer_noise_scaling.png](../assets/images/radiometer_noise_scaling.png)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![specific_intensity_flux_beam.svg](../assets/images/specific_intensity_flux_beam.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |
| `![uv_coverage_dirty_beam_demo.png](../assets/images/uv_coverage_dirty_beam_demo.png)` | UV-plane baseline sampling, aperture synthesis, and Earth rotation synthesis | UV coverage and aperture synthesis |
| `![van_cittert_zernike_geometry.svg](../assets/images/van_cittert_zernike_geometry.svg)` | Van Cittert-Zernike theorem relating complex visibility to source brightness distribution | [Van Cittert-Zernike theorem](../03_Zettel/Theory/interf/Van%20Cittert-Zernike%20theorem.html) |
| `![vlti_delay_line_eso9811a.jpg](../assets/images/vlti_delay_line_eso9811a.jpg)` | Optical delay line compensation for geometric path delay $\vec{B} \cdot \hat{s}$ | Delay lines and path compensation |
| `![young_double_slit_interference.svg](../assets/images/young_double_slit_interference.svg)` | Interferometric observational diagnostic, instrument layout, or Fourier transform analysis | [Astronomical_Interferometry_MOC](./Astronomical_Interferometry_MOC.html) |


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
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (242)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./04_Atlas.html" class="backlink-item">04_Atlas</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/AGN%20and%20supermassive%20black%20holes.html" class="backlink-item">AGN and supermassive black holes</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/AGN%20and%20supermassive%20black%20holes.html" class="backlink-item">AGN and supermassive black holes</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Adaptive%20optics.html" class="backlink-item">Adaptive optics</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Adaptive%20optics.html" class="backlink-item">Adaptive optics</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Amplitude-division%20interferometers.html" class="backlink-item">Amplitude-division interferometers</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Aperture%20masking.html" class="backlink-item">Aperture masking</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Aperture%20masking.html" class="backlink-item">Aperture masking</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Aperture%20synthesis%20principle.html" class="backlink-item">Aperture synthesis principle</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Aperture%20synthesis%20principle.html" class="backlink-item">Aperture synthesis principle</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Apodization.html" class="backlink-item">Apodization</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Apodization.html" class="backlink-item">Apodization</a></li>
    <li class="backlink-item-wrap"><a href="./Astrophysics_of_the_Interstellar_Medium_MOC.html" class="backlink-item">Astrophysics_of_the_Interstellar_Medium_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Atmospheric%20turbulence%20overview.html" class="backlink-item">Atmospheric turbulence overview</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Atmospheric%20turbulence%20overview.html" class="backlink-item">Atmospheric turbulence overview</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Bandpass%20calibration.html" class="backlink-item">Bandpass calibration</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Bandpass%20calibration.html" class="backlink-item">Bandpass calibration</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Beam%20combiners.html" class="backlink-item">Beam combiners</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Beam%20splitter%20physics.html" class="backlink-item">Beam splitter physics</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Beam%20splitter%20physics.html" class="backlink-item">Beam splitter physics</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Binary%20star%20orbits.html" class="backlink-item">Binary star orbits</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Binary%20star%20orbits.html" class="backlink-item">Binary star orbits</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Bispectrum%20and%20triple%20correlation.html" class="backlink-item">Bispectrum and triple correlation</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Bispectrum%20and%20triple%20correlation.html" class="backlink-item">Bispectrum and triple correlation</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Bracewell%20nuller.html" class="backlink-item">Bracewell nuller</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Bracewell%20nuller.html" class="backlink-item">Bracewell nuller</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/CHARA%20array.html" class="backlink-item">CHARA array</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/CHARA%20array.html" class="backlink-item">CHARA array</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/CLEAN%20algorithm.html" class="backlink-item">CLEAN algorithm</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/CLEAN%20algorithm.html" class="backlink-item">CLEAN algorithm</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/COAST%20Cambridge%20Optical%20Aperture%20Synthesis%20Telescope.html" class="backlink-item">COAST Cambridge Optical Aperture Synthesis Telescope</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/COAST%20Cambridge%20Optical%20Aperture%20Synthesis%20Telescope.html" class="backlink-item">COAST Cambridge Optical Aperture Synthesis Telescope</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Calibration%20overview.html" class="backlink-item">Calibration overview</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Calibration%20overview.html" class="backlink-item">Calibration overview</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Closure%20amplitude.html" class="backlink-item">Closure amplitude</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Closure%20amplitude.html" class="backlink-item">Closure amplitude</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Coherence%20function%20and%20visibility.html" class="backlink-item">Coherence function and visibility</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Coherence%20function%20and%20visibility.html" class="backlink-item">Coherence function and visibility</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Coherent%20vs%20incoherent%20imaging.html" class="backlink-item">Coherent vs incoherent imaging</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Coherent%20vs%20incoherent%20imaging.html" class="backlink-item">Coherent vs incoherent imaging</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Components%20of%20a%20modern%20interferometer.html" class="backlink-item">Components of a modern interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Components%20of%20a%20modern%20interferometer.html" class="backlink-item">Components of a modern interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Components%20of%20a%20modern%20interferometer%20continued.html" class="backlink-item">Components of a modern interferometer continued</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Components%20of%20a%20modern%20interferometer%20continued.html" class="backlink-item">Components of a modern interferometer continued</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Connected%20element%20interferometer.html" class="backlink-item">Connected element interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Connected%20element%20interferometer.html" class="backlink-item">Connected element interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Coronagraphy.html" class="backlink-item">Coronagraphy</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Coronagraphy.html" class="backlink-item">Coronagraphy</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Cosmological%20masers.html" class="backlink-item">Cosmological masers</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Cosmological%20masers.html" class="backlink-item">Cosmological masers</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Crowding%20limitation.html" class="backlink-item">Crowding limitation</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Crowding%20limitation.html" class="backlink-item">Crowding limitation</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/DOnofrio%20Exam%20Retake%20-%20Radio%20vs%20Optical%20Physics%20and%20Michelson%20Synthesis.html" class="backlink-item">DOnofrio Exam Retake - Radio vs Optical Physics and Michelson Synthesis</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Deconvolution%20algorithms%20compared.html" class="backlink-item">Deconvolution algorithms compared</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Deconvolution%20algorithms%20compared.html" class="backlink-item">Deconvolution algorithms compared</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Deformable%20mirrors%20and%20tip-tilt.html" class="backlink-item">Deformable mirrors and tip-tilt</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Deformable%20mirrors%20and%20tip-tilt.html" class="backlink-item">Deformable mirrors and tip-tilt</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Delay%20lines%20and%20path-length%20equalization.html" class="backlink-item">Delay lines and path-length equalization</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Delay%20lines%20and%20path-length%20equalization.html" class="backlink-item">Delay lines and path-length equalization</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Diffraction%20patterns%20of%20simple%20apertures.html" class="backlink-item">Diffraction patterns of simple apertures</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Diffraction%20patterns%20of%20simple%20apertures.html" class="backlink-item">Diffraction patterns of simple apertures</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Dirty%20beam%20and%20dirty%20image.html" class="backlink-item">Dirty beam and dirty image</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Dirty%20beam%20and%20dirty%20image.html" class="backlink-item">Dirty beam and dirty image</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Dust%20shells%20and%20Wolf-Rayet%20stars.html" class="backlink-item">Dust shells and Wolf-Rayet stars</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Dust%20shells%20and%20Wolf-Rayet%20stars.html" class="backlink-item">Dust shells and Wolf-Rayet stars</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Earth%20rotation%20synthesis%20in%20radio.html" class="backlink-item">Earth rotation synthesis in radio</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Earth%20rotation%20synthesis%20in%20radio.html" class="backlink-item">Earth rotation synthesis in radio</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Earth-rotation%20aperture%20synthesis.html" class="backlink-item">Earth-rotation aperture synthesis</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Earth-rotation%20aperture%20synthesis.html" class="backlink-item">Earth-rotation aperture synthesis</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Electromagnetic%20waves%20and%20photons.html" class="backlink-item">Electromagnetic waves and photons</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Electromagnetic%20waves%20and%20photons.html" class="backlink-item">Electromagnetic waves and photons</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Event%20Horizon%20Telescope%20EHT.html" class="backlink-item">Event Horizon Telescope EHT</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Event%20Horizon%20Telescope%20EHT.html" class="backlink-item">Event Horizon Telescope EHT</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Exoplanet%20imaging.html" class="backlink-item">Exoplanet imaging</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Exoplanet%20imaging.html" class="backlink-item">Exoplanet imaging</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Fabry-Perot%20interferometer.html" class="backlink-item">Fabry-Perot interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Fabry-Perot%20interferometer.html" class="backlink-item">Fabry-Perot interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Figure%20bank%20-%20interferometry.html" class="backlink-item">Figure bank - interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Figure%20bank%20-%20interferometry.html" class="backlink-item">Figure bank - interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Flux%20calibration%20in%20radio.html" class="backlink-item">Flux calibration in radio</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Flux%20calibration%20in%20radio.html" class="backlink-item">Flux calibration in radio</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Fraunhofer%20diffraction.html" class="backlink-item">Fraunhofer diffraction</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Fraunhofer%20diffraction.html" class="backlink-item">Fraunhofer diffraction</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Fresnel%20biprism.html" class="backlink-item">Fresnel biprism</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Fresnel%20biprism.html" class="backlink-item">Fresnel biprism</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Fresnel%20double%20mirror.html" class="backlink-item">Fresnel double mirror</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Fresnel%20double%20mirror.html" class="backlink-item">Fresnel double mirror</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Fresnel-Arago%20laws.html" class="backlink-item">Fresnel-Arago laws</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Fresnel-Arago%20laws.html" class="backlink-item">Fresnel-Arago laws</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Fried%20parameter%20%24r_0%24.html" class="backlink-item">Fried parameter $r_0$</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Fried%20parameter%20%24r_0%24.html" class="backlink-item">Fried parameter $r_0$</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Fringe%20tracking.html" class="backlink-item">Fringe tracking</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Fringe%20tracking.html" class="backlink-item">Fringe tracking</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Fringe%20visibility%20and%20contrast.html" class="backlink-item">Fringe visibility and contrast</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Fringe%20visibility%20and%20contrast.html" class="backlink-item">Fringe visibility and contrast</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Fringes%20of%20equal%20inclination.html" class="backlink-item">Fringes of equal inclination</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Fringes%20of%20equal%20inclination.html" class="backlink-item">Fringes of equal inclination</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Fringes%20of%20equal%20thickness.html" class="backlink-item">Fringes of equal thickness</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Fringes%20of%20equal%20thickness.html" class="backlink-item">Fringes of equal thickness</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Frozen%20turbulence%20and%20Taylor%20hypothesis.html" class="backlink-item">Frozen turbulence and Taylor hypothesis</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Frozen%20turbulence%20and%20Taylor%20hypothesis.html" class="backlink-item">Frozen turbulence and Taylor hypothesis</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Future%20ground-based%20optical.html" class="backlink-item">Future ground-based optical</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Future%20ground-based%20optical.html" class="backlink-item">Future ground-based optical</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Future%20space-based.html" class="backlink-item">Future space-based</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Future%20space-based.html" class="backlink-item">Future space-based</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Galactic%20Center%20Sgr%20A%20and%20S-stars.html" class="backlink-item">Galactic Center Sgr A and S-stars</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Galactic%20Center%20Sgr%20A%20and%20S-stars.html" class="backlink-item">Galactic Center Sgr A and S-stars</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Guide%20stars%20and%20laser%20guide%20stars.html" class="backlink-item">Guide stars and laser guide stars</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Guide%20stars%20and%20laser%20guide%20stars.html" class="backlink-item">Guide stars and laser guide stars</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Hanbury%20Brown%20Twiss%20effect.html" class="backlink-item">Hanbury Brown Twiss effect</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Hanbury%20Brown%20Twiss%20effect.html" class="backlink-item">Hanbury Brown Twiss effect</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Heterodyne%20vs%20direct%20detection.html" class="backlink-item">Heterodyne vs direct detection</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Heterodyne%20vs%20direct%20detection.html" class="backlink-item">Heterodyne vs direct detection</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Hypertelescope.html" class="backlink-item">Hypertelescope</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Hypertelescope.html" class="backlink-item">Hypertelescope</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Imaging%20artifacts.html" class="backlink-item">Imaging artifacts</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Imaging%20artifacts.html" class="backlink-item">Imaging artifacts</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Intensity%20interferometry%20concept.html" class="backlink-item">Intensity interferometry concept</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Intensity%20interferometry%20concept.html" class="backlink-item">Intensity interferometry concept</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Interferometry%20course%20intro.html" class="backlink-item">Interferometry course intro</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Interferometry%20course%20intro.html" class="backlink-item">Interferometry course intro</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Interferometry%20equation%20sheet.html" class="backlink-item">Interferometry equation sheet</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Interferometry%20equation%20sheet.html" class="backlink-item">Interferometry equation sheet</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Interferometry%20exam%20rules.html" class="backlink-item">Interferometry exam rules</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Interferometry%20exam%20rules.html" class="backlink-item">Interferometry exam rules</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Isoplanatic%20patch.html" class="backlink-item">Isoplanatic patch</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Isoplanatic%20patch.html" class="backlink-item">Isoplanatic patch</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Keck%20interferometer.html" class="backlink-item">Keck interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Keck%20interferometer.html" class="backlink-item">Keck interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Kolmogorov%20turbulence.html" class="backlink-item">Kolmogorov turbulence</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Kolmogorov%20turbulence.html" class="backlink-item">Kolmogorov turbulence</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Large%20Binocular%20Telescope%20LBT.html" class="backlink-item">Large Binocular Telescope LBT</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Large%20Binocular%20Telescope%20LBT.html" class="backlink-item">Large Binocular Telescope LBT</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Light%20waves%20and%20the%20EM%20spectrum.html" class="backlink-item">Light waves and the EM spectrum</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Light%20waves%20and%20the%20EM%20spectrum.html" class="backlink-item">Light waves and the EM spectrum</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Lloyd%20mirror.html" class="backlink-item">Lloyd mirror</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Lloyd%20mirror.html" class="backlink-item">Lloyd mirror</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Lunar%20interferometry%20concepts.html" class="backlink-item">Lunar interferometry concepts</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Lunar%20interferometry%20concepts.html" class="backlink-item">Lunar interferometry concepts</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Mach-Zehnder%20interferometer.html" class="backlink-item">Mach-Zehnder interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Mach-Zehnder%20interferometer.html" class="backlink-item">Mach-Zehnder interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Major%20radio%20interferometers.html" class="backlink-item">Major radio interferometers</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Major%20radio%20interferometers.html" class="backlink-item">Major radio interferometers</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Maximum%20entropy%20method.html" class="backlink-item">Maximum entropy method</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Michelson%20laboratory%20interferometer.html" class="backlink-item">Michelson laboratory interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Michelson%20laboratory%20interferometer.html" class="backlink-item">Michelson laboratory interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Michelson%20stellar%20interferometer.html" class="backlink-item">Michelson stellar interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Michelson%20stellar%20interferometer.html" class="backlink-item">Michelson stellar interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Mosaicking.html" class="backlink-item">Mosaicking</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Mosaicking.html" class="backlink-item">Mosaicking</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/NPOI%20Navy%20Prototype%20Optical%20Interferometer.html" class="backlink-item">NPOI Navy Prototype Optical Interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/NPOI%20Navy%20Prototype%20Optical%20Interferometer.html" class="backlink-item">NPOI Navy Prototype Optical Interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Narrabri%20stellar%20interferometer.html" class="backlink-item">Narrabri stellar interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Narrabri%20stellar%20interferometer.html" class="backlink-item">Narrabri stellar interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Newton%27s%20rings.html" class="backlink-item">Newton's rings</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Newton%27s%20rings.html" class="backlink-item">Newton's rings</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Nulling%20interferometry.html" class="backlink-item">Nulling interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Nulling%20interferometry.html" class="backlink-item">Nulling interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Optical%20path%20difference%20OPD.html" class="backlink-item">Optical path difference OPD</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Optical%20path%20difference%20OPD.html" class="backlink-item">Optical path difference OPD</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Optical%20transfer%20function.html" class="backlink-item">Optical transfer function</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Optical%20transfer%20function.html" class="backlink-item">Optical transfer function</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Optimal%20array%20geometry.html" class="backlink-item">Optimal array geometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Optimal%20array%20geometry.html" class="backlink-item">Optimal array geometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Phase%20closure.html" class="backlink-item">Phase closure</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Phase%20closure.html" class="backlink-item">Phase closure</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Phase%20referencing.html" class="backlink-item">Phase referencing</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Phase%20referencing.html" class="backlink-item">Phase referencing</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Photon%20noise%20and%20statistics.html" class="backlink-item">Photon noise and statistics</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Photon%20noise%20and%20statistics.html" class="backlink-item">Photon noise and statistics</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Plane%20waves%20and%20Huygens%20principle.html" class="backlink-item">Plane waves and Huygens principle</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Plane%20waves%20and%20Huygens%20principle.html" class="backlink-item">Plane waves and Huygens principle</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Point%20spread%20function.html" class="backlink-item">Point spread function</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Point%20spread%20function.html" class="backlink-item">Point spread function</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Polarization%20in%20interferometry.html" class="backlink-item">Polarization in interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Polarization%20in%20interferometry.html" class="backlink-item">Polarization in interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Pulsar%20interferometry.html" class="backlink-item">Pulsar interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Pulsar%20interferometry.html" class="backlink-item">Pulsar interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Pulsar%20timing%20arrays%20as%20interferometers.html" class="backlink-item">Pulsar timing arrays as interferometers</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Pulsar%20timing%20arrays%20as%20interferometers.html" class="backlink-item">Pulsar timing arrays as interferometers</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Pulsating%20stars%20and%20Mira%20variables.html" class="backlink-item">Pulsating stars and Mira variables</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Pulsating%20stars%20and%20Mira%20variables.html" class="backlink-item">Pulsating stars and Mira variables</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Radio%20astronomy%20basics.html" class="backlink-item">Radio astronomy basics</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Radio%20astronomy%20basics.html" class="backlink-item">Radio astronomy basics</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Radio%20interferometer%20architecture.html" class="backlink-item">Radio interferometer architecture</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Radio%20interferometer%20architecture.html" class="backlink-item">Radio interferometer architecture</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Radio%20telescope%20components.html" class="backlink-item">Radio telescope components</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Sagnac%20interferometer.html" class="backlink-item">Sagnac interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Sagnac%20interferometer.html" class="backlink-item">Sagnac interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Scintillation%20and%20twinkling.html" class="backlink-item">Scintillation and twinkling</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Scintillation%20and%20twinkling.html" class="backlink-item">Scintillation and twinkling</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Self-calibration.html" class="backlink-item">Self-calibration</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Self-calibration.html" class="backlink-item">Self-calibration</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Sensitivity%20and%20modern%20revival.html" class="backlink-item">Sensitivity and modern revival</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Sensitivity%20and%20modern%20revival.html" class="backlink-item">Sensitivity and modern revival</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Spatial%20coherence.html" class="backlink-item">Spatial coherence</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Spatial%20coherence.html" class="backlink-item">Spatial coherence</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Speckle%20imaging%20algorithms.html" class="backlink-item">Speckle imaging algorithms</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Speckle%20imaging%20algorithms.html" class="backlink-item">Speckle imaging algorithms</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Speckle%20interferometry.html" class="backlink-item">Speckle interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Speckle%20interferometry.html" class="backlink-item">Speckle interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Stellar%20diameters%20and%20limb%20darkening.html" class="backlink-item">Stellar diameters and limb darkening</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Stellar%20diameters%20and%20limb%20darkening.html" class="backlink-item">Stellar diameters and limb darkening</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Stellar%20surface%20imaging.html" class="backlink-item">Stellar surface imaging</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Stellar%20surface%20imaging.html" class="backlink-item">Stellar surface imaging</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Steps%20in%20radio%20interferometric%20observations.html" class="backlink-item">Steps in radio interferometric observations</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Structure%20function%20and%20correlation%20function.html" class="backlink-item">Structure function and correlation function</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Structure%20function%20and%20correlation%20function.html" class="backlink-item">Structure function and correlation function</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Superposition%20and%20interference.html" class="backlink-item">Superposition and interference</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Superposition%20and%20interference.html" class="backlink-item">Superposition and interference</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Temporal%20coherence.html" class="backlink-item">Temporal coherence</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Temporal%20coherence.html" class="backlink-item">Temporal coherence</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/The%20%28u%2C%20v%29%20plane.html" class="backlink-item">The (u, v) plane</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/The%20%28u%2C%20v%29%20plane.html" class="backlink-item">The (u, v) plane</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/The%20Square%20Kilometre%20Array%20SKA.html" class="backlink-item">The Square Kilometre Array SKA</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/The%20Square%20Kilometre%20Array%20SKA.html" class="backlink-item">The Square Kilometre Array SKA</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/The%20phase%20problem%20in%20interferometry.html" class="backlink-item">The phase problem in interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/The%20phase%20problem%20in%20interferometry.html" class="backlink-item">The phase problem in interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Theory%20of%20speckle%20interferometry.html" class="backlink-item">Theory of speckle interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Theory%20of%20speckle%20interferometry.html" class="backlink-item">Theory of speckle interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Two-element%20correlator.html" class="backlink-item">Two-element correlator</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Two-element%20correlator.html" class="backlink-item">Two-element correlator</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/VLTI%20Very%20Large%20Telescope%20Interferometer.html" class="backlink-item">VLTI Very Large Telescope Interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/VLTI%20Very%20Large%20Telescope%20Interferometer.html" class="backlink-item">VLTI Very Large Telescope Interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Van%20Cittert-Zernike%20theorem.html" class="backlink-item">Van Cittert-Zernike theorem</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Van%20Cittert-Zernike%20theorem.html" class="backlink-item">Van Cittert-Zernike theorem</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Very%20Long%20Baseline%20Interferometry%20VLBI.html" class="backlink-item">Very Long Baseline Interferometry VLBI</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Very%20Long%20Baseline%20Interferometry%20VLBI.html" class="backlink-item">Very Long Baseline Interferometry VLBI</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Wavefront%20sensors.html" class="backlink-item">Wavefront sensors</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Wavefront%20sensors.html" class="backlink-item">Wavefront sensors</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Wavefront-division%20interferometers.html" class="backlink-item">Wavefront-division interferometers</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Wavefront-division%20interferometers.html" class="backlink-item">Wavefront-division interferometers</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Why%20intensity%20interferometry%20escapes%20atmospheric%20phase.html" class="backlink-item">Why intensity interferometry escapes atmospheric phase</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Why%20intensity%20interferometry%20escapes%20atmospheric%20phase.html" class="backlink-item">Why intensity interferometry escapes atmospheric phase</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Why%20interferometry.html" class="backlink-item">Why interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Why%20interferometry.html" class="backlink-item">Why interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Young%20experiment%20as%20a%20stellar%20interferometer.html" class="backlink-item">Young experiment as a stellar interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Young%20experiment%20as%20a%20stellar%20interferometer.html" class="backlink-item">Young experiment as a stellar interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Young%20stellar%20object%20disks.html" class="backlink-item">Young stellar object disks</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Young%20stellar%20object%20disks.html" class="backlink-item">Young stellar object disks</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/ngVLA%20Next%20Generation%20VLA.html" class="backlink-item">ngVLA Next Generation VLA</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/ngVLA%20Next%20Generation%20VLA.html" class="backlink-item">ngVLA Next Generation VLA</a></li>
  </ul>
</div>
