---
layout: default
title: "Observational_Astrophysics_MOC"
---

# Observational Astrophysics  -  Map of Content

A.Y. 2025/2026, first semester at the University of Padova. lecture material lives outside the vault at  (slides 1.1 through 7), plus my exam-answer drafts `obs1.pdf` to `obs7.pdf`.

this course is the **observational pipeline**, end to end. unlike [Fundamentals_Astrophysics_Cosmology_MOC](../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md) which sweeps from spherical astronomy through cosmology in one trunk, and unlike [Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.md) which zooms in on cosmological observables, this course answers a much more concrete question:

> *given a real telescope, on a real night, with a real CCD, how do I turn photons into a number with error bars?*

every topic is a step in that pipeline. coordinates so I can point at the sky. atmosphere because that is what the photons go through last. radiative mechanisms and magnitudes because that is the language of brightness. CCD and SNR because that is what the detector actually does to the photons. distance ladder because that converts apparent into intrinsic. stars and stellar populations because that is what we are usually pointing at. population synthesis because at high redshift we cannot resolve individual stars, only the integrated light.

the central thread:
$$\text{coordinates} \to \text{atmosphere} \to \text{photons in a filter} \to \text{counts on a CCD} \to \text{magnitude with errors} \to \text{distance} \to \text{intrinsic property of stars or populations}$$

every later course (Stellar Astrophysics, Spectroscopy, Interferometry, Galaxies, even Lab High Energy and Observational Cosmology) is a refinement or specialisation of one piece of this chain. so this MOC sits between the Fundamentals trunk and the more specialised branches. it is the **methodology layer**.

## reference texts

- **Karttunen, Oja, Poutanen, Donner**, *Fundamental Astronomy*  -  spherical astronomy backbone, also good for stellar populations chapters.
- **Howell**, *Handbook of CCD Astronomy* (Cambridge)  -  the standard for the CCD and SNR block.
- **Lena, Lebrun, Mignard, Pelat**, *Observational Astrophysics* (Springer)  -  atmosphere, photometry, and detector chain in one place.
- **Bradt**, *Astronomy Methods*  -  clean treatment of distance ladder and photometric systems.
- **Conroy**, *Annual Review 2013* on stellar population synthesis  -  the reference review for the SPS block.
- **Bruzual & Charlot 2003** (BC03), **Maraston 2005**, **Conroy FSPS**  -  the SPS code papers (referenced in the slides).
- **Madau & Dickinson 2014** review  -  for the cosmic SFR connection in the population block.

## Block 0  -  course frame

- [Obs_astro_course_intro](../02_Zettel/Theory/Obs_astro_course_intro.md)  -  what this course is, the conceptual chain from photons to populations, how it relates to the Fundamentals trunk

## Block 1  -  Spherical astronomy and celestial mechanics

before any astrophysics, just *how do I point at the sky and describe where I am pointing*. this block is mostly geometry and rotations, but every observation in every later course assumes I know which coordinate frame I am in and how time is being kept.

a lot of this overlaps with [Fundamentals_Astrophysics_Cosmology_MOC](../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md) Block 1; there I list the bare formulas. here the emphasis is on the *practical* side: converting a target's catalogued $(\alpha, \delta)$ into an alt-azimuth pointing right now, accounting for sidereal time, refraction, and parallactic angle.

- [Celestial sphere and great circles](../02_Zettel/Theory/Celestial sphere and great circles.md)  -  celestial sphere as a directional sphere, great vs small circles, spherical triangle, spherical excess $E = A + B + C - 180°$, area $= E r^2$
- [Spherical trigonometry](../02_Zettel/Theory/Spherical trigonometry.md)  -  coordinate rotation by angle $\chi$, the three working equations, sine rule $\sin a / \sin A = \sin b / \sin B = \sin c / \sin C$
- [Earth coordinates](../02_Zettel/Theory/Earth coordinates.md)  -  geographic latitude $\phi$, longitude $\theta$, parallels and meridians, Earth-distance formula $\cos a = \sin b \sin c \cos A + \cos b \cos c$
- [Horizontal alt-azimuth system](../02_Zettel/Theory/Horizontal alt-azimuth system.md)  -  zenith, nadir, vertical circles, azimuth $A$, height $a$, zenith distance $z = 90° - a$, observer- and time-dependent
- [Equatorial system](../02_Zettel/Theory/Equatorial system.md)  -  celestial equator and pole, vernal equinox $\gamma$, right ascension $\alpha$, declination $\delta$, hour angle $h$, sidereal time $\Theta = h + \alpha$, observer-independent (catalogable)
- [Sidereal vs solar time](../02_Zettel/Theory/Sidereal vs solar time.md)  -  sidereal day repeats stars, solar day repeats sun, sidereal day is $3^{\rm m}56^{\rm s}$ shorter
- [Alt-azimuth ↔ equatorial transformations](../02_Zettel/Theory/Alt-azimuth ↔ equatorial transformations.md)  -  $\sin h \cos\delta = \sin A \cos a$, $\cos h \cos\delta = \cos A \cos a \sin\phi + \sin a \cos\phi$, $\sin\delta = -\cos A \cos a \cos\phi + \sin a \sin\phi$
- [Culmination and rise/set](../02_Zettel/Theory/Culmination and rise-set.md)  -  upper culmination, lower culmination, rise/set $\cos h_{\rm rs} = -\tan\delta\tan\phi$, circumpolar if $\delta + \phi > 90°$, never visible if $\delta < \phi - 90°$
- [Ecliptic system](../02_Zettel/Theory/Ecliptic system.md)  -  ecliptic latitude $\beta$, ecliptic longitude $\lambda$, obliquity $\varepsilon \approx 23.4°$, useful for solar-system targets and the zodiacal light
- [Galactic coordinate system](../02_Zettel/Theory/Galactic coordinate system.md)  -  Galactic latitude $b$, longitude $\ell$, north Galactic pole at $(\alpha, \delta) = (12^{\rm h}51^{\rm m}, +27.1°)$, useful for ISM and Galactic-plane work
- [Precession nutation aberration parallax](../02_Zettel/Theory/Precession nutation aberration parallax.md)  -  the four small corrections on top of the equatorial frame: precession $\sim 50''/$yr, nutation $\sim 9''$, stellar aberration $\sim 20''$, annual parallax $\lesssim 1''$
- [Time keeping in astronomy](../02_Zettel/Theory/Time keeping in astronomy.md)  -  UT, UT1, TAI, UTC, TT, dynamical times, why "what time is it" is genuinely subtle, leap seconds
- [Atmospheric refraction](../02_Zettel/Theory/interf/Atmospheric refraction.md)  -  apparent altitude shift $R \approx 60''\tan z$ at moderate $z$, limit at the horizon, why it matters for pointing and photometry

## Block 2  -  Earth's atmosphere as the last optical element

before the photon hits the CCD, it goes through 100 km of perturbed gas. this block is the entire physics of why ground-based observation is hard. it is also the practical motivation for adaptive optics, photometric standard stars, and putting telescopes in space.

a single comprehensive note carries this block, since the atmosphere is one continuous problem: see [Earth atmosphere for observations](../02_Zettel/Theory/Earth atmosphere for observations.md).

- [Atmospheric layers](../02_Zettel/Theory/interf/Atmospheric layers.md)  -  troposphere, stratosphere, mesosphere, thermosphere, exosphere, ionosphere, ozone, pressure profile, scale height
- [Atmospheric transparency windows](../02_Zettel/Theory/interf/Atmospheric transparency windows.md)  -  visible, near-IR (J, H, K), mid-IR thermal, sub-mm, radio, where atmosphere is opaque (UV by ozone, far-IR and most of mid-IR by H$_2$O)
- [Atmospheric extinction](../02_Zettel/Theory/interf/Atmospheric extinction.md)  -  Beer-Lambert $m_{\rm obs}(\lambda) = m_0(\lambda) + k(\lambda) X$, airmass $X \approx \sec z$, Bouguer line, photometric standard stars
- [Atmospheric scintillation](../02_Zettel/Theory/interf/Atmospheric scintillation.md)  -  temporal flickering of point sources from refractive-index fluctuations, $\sigma_I/I \propto X^{1.75} D^{-2/3} t^{-1/2}$
- [Atmospheric seeing](../02_Zettel/Theory/interf/Atmospheric seeing.md)  -  spatial blurring from turbulence, Fried parameter $r_0 \propto \lambda^{6/5}$, FWHM $\theta \sim \lambda/r_0$, why seeing is better in IR, why high sites are good
- [Adaptive optics overview](../02_Zettel/Theory/interf/Adaptive optics overview.md)  -  wavefront sensors, deformable mirrors, isoplanatic angle, laser guide stars, Strehl ratio, AO regime and where it works
- [Sky brightness](../02_Zettel/Theory/Sky brightness.md)  -  moonlight, airglow, zodiacal light, OH lines in NIR, why dark sky surveys live at La Palma, Mauna Kea, Cerro Paranal
- [Atmospheric dispersion](../02_Zettel/Theory/interf/Atmospheric dispersion.md)  -  refractive index varies with $\lambda$, point sources elongate with zenith distance, atmospheric dispersion correctors

## Block 3  -  Radiative mechanisms and photometric concepts

once the photon survives the atmosphere, what does its number tell me? this block defines all the basic photometric quantities and the language of stellar brightness.

- [Specific intensity flux luminosity](../02_Zettel/Theory/Specific intensity flux luminosity.md)  -  $I_\nu$ (energy per area per time per solid angle per frequency), flux $F$ (energy per area per time), luminosity $L$ (energy per time), the inverse-square law $F = L/(4\pi d^2)$ for isotropic emission
- [Blackbody radiation and Stefan-Boltzmann](../02_Zettel/Theory/Blackbody radiation and Stefan-Boltzmann.md)  -  $B_\nu(T) = (2h\nu^3/c^2)/(e^{h\nu/k_BT}-1)$, $L = 4\pi R^2 \sigma T^4$, the slope of the spectrum vs $T$ is what makes hot stars dominate at every wavelength shortward of their peak
- [Planck law Wien Stefan-Boltzmann](../02_Zettel/Theory/Planck law Wien Stefan-Boltzmann.md)  -  three forms of the same physics. Planck $B_\nu(T)$ or $B_\lambda(T)$, Wien displacement $\lambda_{\rm max} T = 2.898 \times 10^{-3}$ m K, Stefan-Boltzmann $F_{\rm tot} = \sigma T^4$, see [Cosmic_inventory_photons_derivation](../02_Zettel/Theory/Cosmic_inventory_photons_derivation.md) for the integral
- [Why hot massive stars dominate luminosity](../02_Zettel/Theory/Why hot massive stars dominate luminosity.md)  -  `obs3.pdf` answer. integral $L \propto R^2 T^4$ but on the main sequence $R$ grows mildly with $M$, $T$ grows strongly with $M$, so $L \propto M^{3.5}$ and the most massive stars contribute most of the bolometric light. extends to UV: at UV wavelengths the contribution is dominated by the very hottest stars.
- [Stellar spectra and spectral classification](../02_Zettel/Theory/Stellar spectra and spectral classification.md)  -  OBAFGKM sequence, line strengths as ionisation thermometer, luminosity classes I-V from line widths
- [Pogson magnitudes and flux relation](../02_Zettel/Theory/Pogson magnitudes and flux relation.md)  -  `obs4.pdf` answer. $m_1 - m_2 = -2.5\log_{10}(F_1/F_2)$, $\Delta m = 1$ corresponds to $\sim 2.512\times$ flux ratio, small-$\Delta m$ approximation $\Delta m \approx 1.0857\, \Delta F/F$ for percent-level photometry
- [Magnitudes and photometric systems](../02_Zettel/Theory/Magnitudes and photometric systems.md)  -  Vega, AB, ST. zeropoints. why the AB system is convenient for spectrophotometry: $m_{AB} = -2.5 \log_{10}(F_\nu / 3631\,\text{Jy})$
- [Filter systems and bandpasses](../02_Zettel/Theory/Filter systems and bandpasses.md)  -  UBV (Johnson-Cousins), SDSS *ugriz*, HST WFC3, JWST NIRCam. effective wavelength, equivalent width, throughput curves
- [Color indices](../02_Zettel/Theory/Color indices.md)  -  $B-V$, $u-g$, $J-K$. color is a one-number summary of spectral shape, useful proxy for $T$ in stars, for $z$ in galaxies (color-redshift)
- [Photometric system conversion and color terms](../02_Zettel/Theory/Photometric system conversion and color terms.md)  -  `obs6.pdf` answer. magnitudes in two systems do not differ by a constant offset; the difference depends on the SED through a color term $m_1 = m_2 + a + b(c_1 - c_2)$. SDSS-i vs Cousins-I example for 6000 K vs 3000 K stars.
- [Bolometric correction and effective temperature](../02_Zettel/Theory/Bolometric correction and effective temperature.md)  -  $BC \equiv M_{\rm bol} - M_V$, depends on spectral type, $T_{\rm eff}$ defined by $L = 4\pi R^2 \sigma T_{\rm eff}^4$
- [Distance modulus](../02_Zettel/Theory/Distance modulus.md)  -  `obs2.pdf` part 1. $m - M = 5\log_{10}(d_{\rm pc}) - 5$, with extinction correction $m - M = 5\log_{10}(d_{\rm pc}) - 5 + A_\lambda$
- [Interstellar absorption](../02_Zettel/Theory/Interstellar absorption.md)  -  extinction $A_\lambda$, reddening $E(B-V) = A_B - A_V$, $R_V \equiv A_V/E(B-V) \approx 3.1$ for diffuse Galactic ISM, attenuation laws (Calzetti for galaxies, see [Dust attenuation and extinction curves](../02_Zettel/Theory/Dust attenuation and extinction curves.md))
- [Balmer decrement](../02_Zettel/Theory/Balmer decrement.md)  -  `obs2.pdf` part 2 + `obs5.pdf`. intrinsic case-B ratio $F(H\alpha)/F(H\beta) = 2.86$ (the slides use 3.86 for some star-forming conditions), excess attributed to dust, gives $E(B-V)$
- [K-correction](../02_Zettel/Theory/K-correction.md)  -  the bandpass shift between source and observer rest frames due to redshift, $m = M + 5\log d_L + 25 + K(z)$. see [K-correction in optical vs sub-mm](../02_Zettel/Theory/K-correction in optical vs sub-mm.md) for the famous sub-mm "negative K-correction"

## Block 4  -  CCD detectors and signal-to-noise

every observation eventually becomes counts in a pixel array. this block is the physics of those counts: what produces them, what corrupts them, and how to write down the SNR.

a single comprehensive note carries the derivation: see [CCD detectors and SNR](../02_Zettel/Theory/CCD detectors and SNR.md).

- [CCD basics](../02_Zettel/Theory/CCD basics.md)  -  silicon photodiodes, charge accumulation in potential wells, MOS structure, full well capacity, charge transfer efficiency, quantum efficiency $\eta(\lambda)$
- [CCD readout chain](../02_Zettel/Theory/CCD readout chain.md)  -  clocking, on-chip amplifier, output gain, ADU vs electrons, gain $g$ in electrons per ADU, bias level, overscan
- [CCD noise sources](../02_Zettel/Theory/CCD noise sources.md)  -  Poisson photon noise $\sqrt{N_*}$, sky $\sqrt{N_{\rm sky}}$, dark current $\sqrt{N_d}$, read noise $\sigma_{\rm RN}$, all added in quadrature
- [The CCD equation](../02_Zettel/Theory/The CCD equation.md)  -  SNR $= N_*/\sqrt{N_* + n_{\rm pix}(N_{\rm sky} + N_d + \sigma_{\rm RN}^2)}$, the master result of this block. limit cases: source-limited ($N_* \gg$ all else, SNR $\propto \sqrt{N_*}$), sky-limited (SNR $\propto N_*/\sqrt{n_{\rm pix} N_{\rm sky}}$), read-noise-limited (short exposures)
- [Aperture photometry](../02_Zettel/Theory/Aperture photometry.md)  -  flux in an aperture, sky annulus subtraction, optimal aperture vs SNR
- [PSF photometry](../02_Zettel/Theory/PSF photometry.md)  -  fit a model PSF to crowded fields, DAOPHOT-like algorithms, why this beats aperture in dense regions
- [CCD calibration steps](../02_Zettel/Theory/CCD calibration steps.md)  -  bias subtraction, dark subtraction, flat-fielding, fringing, defect masking. the standard calibration pipeline.
- [Cosmic rays and bad pixels](../02_Zettel/Theory/Cosmic rays and bad pixels.md)  -  sigma-clipping, dithering, hot/dead pixels
- [Linearity and saturation](../02_Zettel/Theory/Linearity and saturation.md)  -  full-well limit, non-linear regime correction, why bright stars are a separate problem
- [Other detectors](../02_Zettel/Theory/Other detectors.md)  -  CMOS, photographic plates, photon-counting (EMCCD, MCP, MKID), HgCdTe and InSb for IR, where each excels

## Block 5  -  Distance ladder

every quantitative claim about an astronomical object depends on distance. this block walks the ladder from the AU outward.

- [AU calibration parallax and parsec](../02_Zettel/Theory/AU calibration parallax and parsec.md)  -  `obs1.pdf` answer. transit and radar measure Earth-Venus distance, Kepler $P^2 \propto a^3$ converts to AU, then annual parallax of nearby stars defines the parsec, $d({\rm pc}) = 1/p({\rm arcsec})$
- [Annual stellar parallax](../02_Zettel/Theory/Annual stellar parallax.md)  -  geometric, model-independent, the foundation of every distance method beyond it. Hipparcos to $\sim 100$ pc, Gaia DR3 to $\sim$ kpc with $10\,\mu$as precision
- [Spectroscopic parallax and main-sequence fitting](../02_Zettel/Theory/Spectroscopic parallax and main-sequence fitting.md)  -  for clusters: identify spectral types of cluster stars, locate them on the HR diagram, compare apparent vs absolute brightness to get distance
- [Moving cluster method](../02_Zettel/Theory/Moving cluster method.md)  -  Hyades. transverse and radial velocities of cluster members, use convergent-point geometry
- [Variable stars as standard candles](../02_Zettel/Theory/Variable stars as standard candles.md)  -  RR Lyrae (horizontal branch, fixed $M_V \sim 0.5$), Cepheids (Leavitt period-luminosity, $M_V \propto -\log P$), Mira variables, the calibration tied back to parallax
- [Cepheid period-luminosity relation](../02_Zettel/Theory/Cepheid period-luminosity relation.md)  -  Henrietta Leavitt 1908, calibration via Galactic Cepheids and via SMC/LMC, modern HST parallax of Cepheids tightens $H_0$
- [TRGB tip of the red giant branch](../02_Zettel/Theory/TRGB tip of the red giant branch.md)  -  fixed $M_I \approx -4.0$ at the helium flash, distance method that competes with Cepheids for nearby galaxies
- [Surface brightness fluctuations](../02_Zettel/Theory/Surface brightness fluctuations.md)  -  for elliptical galaxies, Poisson statistics of giant stars give a distance-dependent flux variance
- [Tully-Fisher relation](../02_Zettel/Theory/Tully-Fisher relation.md)  -  for spirals, $L \propto V_{\rm flat}^4$, calibrated by Cepheids and TRGB
- [Fundamental plane of ellipticals](../02_Zettel/Theory/Fundamental plane of ellipticals.md)  -  $R_e \propto \sigma^{1.4} \langle I \rangle_e^{-0.9}$, the elliptical analogue of Tully-Fisher
- [Type Ia supernovae as standard candles](../02_Zettel/Theory/Type Ia supernovae as standard candles.md)  -  Phillips relation $M_V \propto \Delta m_{15}$, calibrated to Cepheids in host galaxies, extend to $z \sim 1$, the Perlmutter-Riess-Schmidt 1998 result
- [Hubble flow distances](../02_Zettel/Theory/Hubble flow distances.md)  -  `obs2.pdf` part 3. $z = (\lambda_{\rm obs} - \lambda_{\rm rest})/\lambda_{\rm rest}$, $v \approx cz$ for small $z$, $d \approx cz/H_0$, the Hubble diagram. caveats: peculiar velocities for $z \lesssim 0.01$, cosmology-dependent at $z \gtrsim 0.1$
- [Distance ladder summary](../02_Zettel/Theory/Distance ladder derivations.md)  -  companion derivation note tying all rungs together: see [Distance ladder derivations](../02_Zettel/Theory/Distance ladder derivations.md)

## Block 6  -  Stars and stellar populations

individual stars are the primary actors. this block puts them on the HR diagram, classifies them, and starts asking statistical questions about populations rather than individuals.

- [HR diagram](../02_Zettel/Theory/HR diagram.md)  -  Hertzsprung-Russell, $L$ vs $T_{\rm eff}$, observational version $M_V$ vs $B-V$ (color-magnitude diagram, CMD)
- [Main sequence, giants, supergiants, white dwarfs](../02_Zettel/Theory/Main sequence, giants, supergiants, white dwarfs.md)  -  luminosity classes I-V, the geometric meaning of each region in $(L, T)$ space
- [Stellar scaling relations](../02_Zettel/Theory/Stellar scaling relations.md)  -  $L \propto R^2 T^4$, $L \propto M^{3.5}$ on the main sequence, $\tau_{MS} \propto M/L \propto M^{-2.5}$
- [Stellar evolution timescales](../02_Zettel/Theory/Stellar evolution timescales.md)  -  dynamical $t_{\rm dyn} \sim 1/\sqrt{G\rho}$, Kelvin-Helmholtz $t_{\rm KH} \sim GM^2/(RL)$, nuclear $t_{\rm nuc} \sim 0.007 Mc^2/L$, ordering $t_{\rm dyn} \ll t_{\rm KH} \ll t_{\rm nuc}$
- [Stellar populations I II III](../02_Zettel/Theory/Stellar populations I II III.md)  -  Baade 1944. Pop I (young, metal-rich, disk), Pop II (old, metal-poor, halo + bulge), Pop III (first stars, primordial composition, $Z = 0$, observationally elusive)
- [Color-magnitude diagrams of clusters](../02_Zettel/Theory/Color-magnitude diagrams of clusters.md)  -  open clusters (Pop I, narrow, well-defined turnoff) vs globular clusters (Pop II, broad, well-defined giant branch and horizontal branch)
- [Cluster ages from CMD turnoff](../02_Zettel/Theory/Cluster ages from CMD turnoff.md)  -  turn-off luminosity gives age via $\tau_{MS}$ at that mass. globular clusters $\sim 10$ to $13$ Gyr, ages bound the universe.
- [Metallicity and chemical evolution](../02_Zettel/Theory/Metallicity and chemical evolution.md)  -  $[Fe/H] = \log(N_{Fe}/N_H)_\star - \log(N_{Fe}/N_H)_\odot$, $\alpha$/Fe as star-formation-timescale clock, mass-metallicity relation in galaxies
- [Initial mass function](../02_Zettel/Theory/Initial mass function.md)  -  Salpeter 1955 ($\xi(M) \propto M^{-2.35}$), Kroupa 2001 (broken power law), Chabrier 2003 (log-normal at low mass)
- [Mass-luminosity relation](../02_Zettel/Theory/Mass-luminosity relation.md)  -  different slope on the lower main sequence ($L \propto M^4$ for $M > M_\odot$, $L \propto M^{2.3}$ for $M < M_\odot$), connects IMF to luminosity function
- [Star formation history of a population](../02_Zettel/Theory/Star formation history of a population.md)  -  SSP (single burst), constant SFR, exponentially declining $\tau$ models, delayed-$\tau$, non-parametric SFH

## Block 7  -  Population synthesis

at the highest redshifts, individual stars cannot be resolved. all I see is integrated light. population synthesis is the inverse problem: given an SED, infer the IMF-weighted age, mass, SFR, and metallicity of the underlying population.

- [Stellar population synthesis](../02_Zettel/Theory/Stellar population synthesis.md)  -  combine an IMF, an SFH $\psi(t)$, and a stellar evolutionary library to produce model SEDs $f_\lambda(t)$ for any age. forward model: $f_\lambda^{\rm pop}(t) = \int_0^t dt' \psi(t-t') \int dM \xi(M) f_\lambda^{\rm star}(M, Z, t')$
- [Single stellar population SSP](../02_Zettel/Theory/Single stellar population SSP.md)  -  instantaneous burst, single age, single metallicity. the Lego brick of synthesis. evolves with age: hot massive stars die fast, the SED reddens.
- [SPS code families](../02_Zettel/Theory/SPS code families.md)  -  BC03 (Bruzual & Charlot 2003, the workhorse), Maraston 2005 (TP-AGB-heavy at intermediate ages), Conroy FSPS (flexible, modern), Starburst99 (focus on massive stars + ionising photon production)
- [Lick indices](../02_Zettel/Theory/Lick indices.md)  -  narrow-band absorption-line indices that probe age and metallicity (Mg2, H$\beta$, Fe5270 etc.), break the age-metallicity degeneracy
- [Age-metallicity degeneracy](../02_Zettel/Theory/Age-metallicity degeneracy.md)  -  older + lower-Z and younger + higher-Z look similar in broadband colors, the central nuisance of SED fitting, partly broken by NIR + line indices
- [SED fitting basics](../02_Zettel/Theory/SED fitting basics.md)  -  likelihood over (age, mass, SFH, $Z$, dust), Bayesian and template-grid approaches, codes (FAST, BAGPIPES, Prospector, CIGALE)
- [Photometric redshifts](../02_Zettel/Theory/Photometric redshifts.md)  -  see [Pablo_02_Statistical_properties_of_galaxies](../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md) for the survey context. broadband SED fitting locates the 4000 Å break (Benítez 2000)
- [SFR tracers from population synthesis](../02_Zettel/Theory/SFR tracers from population synthesis.md)  -  `obs5.pdf` + `obs7.pdf`. UV continuum (very young stars, $\sim 100$ Myr), $H\alpha$ ($< 10$ Myr, ionising photons from O stars), FIR dust (reprocessed UV from obscured SF). see [UV SFR tracer](../02_Zettel/Theory/UV SFR tracer.md), [H-alpha SFR tracer](../02_Zettel/Theory/H-alpha SFR tracer.md), [IR SFR tracer](../02_Zettel/Theory/IR SFR tracer.md) for the calibrations.
- [Stellar mass estimation in unresolved populations](../02_Zettel/Theory/Stellar mass estimation in unresolved populations.md)  -  `obs7.pdf` answer. NIR fluxes trace stellar mass because $M/L_K$ depends weakly on age and dust. caveats on "formed" vs "currently locked" mass after mass return.
- [Age estimation in unresolved populations](../02_Zettel/Theory/Age estimation in unresolved populations.md)  -  broadband colors, 4000 Å break, Lick indices. typically what you constrain is "the age of the population dominating the light," not a unique formation time.
- [Dust attenuation in synthetic populations](../02_Zettel/Theory/Dust attenuation in synthetic populations.md)  -  Calzetti 2000 starburst law, Charlot & Fall 2000 two-component model, energy balance, why FIR + UV needed for proper SFR

## appendices and tools

- [Photometric standard stars](../02_Zettel/Theory/Photometric standard stars.md)  -  Landolt fields, SDSS standards. how zeropoints are set.
- [Survey resources for Obs Astro](../02_Zettel/Theory/Survey resources for Obs Astro.md)  -  SDSS, Gaia, Pan-STARRS, 2MASS, WISE, VISTA. each one's bands, depth, and quirks.
- [Python and IRAF tools for photometry](../02_Zettel/Theory/Python and IRAF tools for photometry.md)  -  astropy.stats, photutils, sep, source extractor, simple aperture pipelines
- [Useful constants and conversions](../02_Zettel/Theory/Useful constants and conversions.md)  -  pc in cm, $M_{\rm bol,\odot} = +4.74$, $\sigma_{SB} = 5.67\times10^{-8}$ W m$^{-2}$ K$^{-4}$, AB zeropoint $3631$ Jy

## connection to other MOCs

- [Fundamentals_Astrophysics_Cosmology_MOC](../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md)  -  same trunk; Block 1 (spherical astronomy) and parts of Block 2 (radiation, magnitudes) overlap. there is broad coverage; here the depth is methodological.
- [Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.md)  -  picks up at Block 5 (distance ladder) and Block 7 (population synthesis), pushes them to high redshift. K-corrections, Schechter functions, photometric redshifts, all cosmology-aware.
- [Lab_High-Energy_MOC](../00_Atlas/Lab_High-Energy_MOC.md)  -  different waveband, same instrumentation logic. CCD here, X-ray detectors there. the SNR equation is the same in spirit, the noise sources differ.
- [General_Relativity_MOC](../00_Atlas/General_Relativity_MOC.md)  -  does not directly intersect, but the cosmological-distance corrections at high $z$ require the FLRW machinery from Baumann ch 7.

## see also
- [Distance ladder derivations](../02_Zettel/Theory/Distance ladder derivations.md)  -  companion derivation note for Block 5
- [Earth atmosphere for observations](../02_Zettel/Theory/Earth atmosphere for observations.md)  -  Block 2 deep dive
- [CCD detectors and SNR](../02_Zettel/Theory/CCD detectors and SNR.md)  -  Block 4 deep dive

---

## Dynamic Zettel Index (Dataview)

```dataview
LIST
FROM "03_Zettel/Theory"
WHERE contains(file.outlinks, this.file.link) OR contains(file.inlinks, this.file.link)
SORT file.name ASC
```