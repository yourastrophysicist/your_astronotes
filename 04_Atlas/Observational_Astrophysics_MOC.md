---
layout: "default"
title: "Observational_Astrophysics_MOC"
---
# Observational Astrophysics — Map of Content

> **Exam Status** - Sat on **Tuesday 15 September 2026** (Aula A, Ex Rizzato, Examiner: **Prof Paolo Cassata**). **FAILED (retake scheduled for Winter Session, Jan / Feb 2027)**.
> See postmortem & graph literacy protocol: Exam Postmortem and Observational Graph Fluency and Lesson Learned - Mathematical Rigor and Observational Graph Fluency.

A.Y. 2025/2026, first semester at the University of Padova. Complete lecture material from `C:\Users\snupido\Documents\1_PROJECTS\1st_Semester\OBSERVATIONAL ASTROPHYSICS` (Decks 1.1 through 7, 542 lecture slides extracted to `07_Images/Observational_Astrophysics/`), plus the definitive oral exam answer drafts `obs1.pdf` through `obs7.pdf`.

This course is the **observational pipeline**, end to end. Unlike [[Fundamentals_Astrophysics_Cosmology_MOC]] which sweeps broadly across theoretical cosmology, and unlike [[Astrophysics_of_Galaxies_MOC]] which focuses on galactic structure and evolution, this course answers the fundamental experimental question:

> *Given a real telescope, on a real night, with a real detector behind the atmosphere, how do I turn raw photons into physical quantities with rigorous error bars?*

The foundational methodological thread:
$$\text{coordinates} \to \text{atmosphere} \to \text{photons in filter} \to \text{counts on CCD} \to \text{magnitude with errors} \to \text{distance} \to \text{intrinsic properties of stars / populations}$$

---

## Reference texts

- **Karttunen, Oja, Poutanen, Donner**, *Fundamental Astronomy* — spherical astronomy backbone and stellar populations.
- **Howell**, *Handbook of CCD Astronomy* (Cambridge) — the definitive guide for CCD physics, SNR derivation, and photometric calibration.
- **Lena, Lebrun, Mignard, Pelat**, *Observational Astrophysics* (Springer) — atmospheric optics, seeing, extinction, and telescope design.
- **Bradt**, *Astronomy Methods* — clean derivations of photometric systems and the distance scale.
- **Conroy**, *Stellar Population Synthesis* (Annual Review 2013) — the modern standard for SPS modeling, isochrone libraries, and IMF.
- **Bruzual & Charlot (2003)**, **Maraston (2005)**, **Conroy (FSPS)** — foundational papers for population synthesis codes.
- **Madau & Dickinson (2014)** — cosmic star formation history and galaxy SED evolution.

---

## Block 0 — Course Frame

- [[Obs_astro_course_intro]] — what this course is, the observational pipeline from photons to populations, connection to Fundamentals and Galaxies.

---

## Block 1 — Spherical Astronomy and Practical Pointing

Before opening the shutter: coordinate systems, transformations, and time standards. (Slides `obs_sph1-01..59` and `obs_sph2-01..33`).

- [[Celestial sphere and great circles]] — celestial sphere as directional space, spherical excess $E = A+B+C-180^\circ$, area $A = E R^2$ (`obs_sph1-01..04`, `11..12`).
- [[Spherical trigonometry]] — law of cosines, law of sines, coordinate rotation by angle $\chi$ (`obs_sph1-05..10`).
- [[Earth coordinates]] — latitude $\phi$, longitude $\lambda$, parallels, meridians, terrestrial distance formula (`obs_sph1-13..16`).
- [[Equatorial system]] — celestial equator, vernal equinox $\gamma$, right ascension $\alpha$, declination $\delta$, hour angle $h$, Local Sidereal Time $\Theta = h + \alpha$ (`obs_sph1-17..28`).
- [[Horizontal alt-azimuth system]] — zenith, nadir, vertical circles, azimuth $A$, altitude $a$, zenith distance $z = 90^\circ - a$ (`obs_sph1-29..32`).
- [[Culmination and rise-set]] — upper transit altitude $a = 90^\circ - \lvert\phi - \delta\rvert$, circumpolar condition $\delta > 90^\circ - \phi$, rise/set hour angle $\cos h_{\rm rs} = -\tan\delta\tan\phi$ (`obs_sph1-33..40`).
- [[Alt-azimuth ↔ equatorial transformations]] — navigational spherical triangle, $\cos z = \sin\phi\sin\delta + \cos\phi\cos\delta\cos h$, parallactic angle $q$, field rotation (`obs_sph1-41..48`).
- [[Sidereal vs solar time]] — sidereal day ($23^{\rm h}56^{\rm m}04^{\rm s}$) vs solar day ($24^{\rm h}$), Equation of Time, LST observing planning (`obs_sph1-49..59`).
- [[Time keeping in astronomy]] — UT, UT1, TAI, UTC, leap seconds, TT, TDB, Julian Date (JD), MJD, Heliocentric and Barycentric Julian Dates (HJD, BJD) (`obs_sph2-01..16`).
- [[Precession nutation aberration parallax]] — general precession ($50.3''/\text{yr}$), nutation ($9''$, 18.6 yr cycle), annual aberration constant ($\kappa = 20.4955''$), stellar parallax (`obs_sph2-17..20`, `25..28`).
- [[Ecliptic system]] — ecliptic latitude $\beta$, longitude $\lambda$, obliquity $\epsilon \approx 23.44^\circ$, transformation matrix (`obs_sph2-21..22`).
- [[Galactic coordinate system]] — Galactic latitude $b$, longitude $l$, IAU 1958 standard North Galactic Pole and Galactic Center at Sgr A* (`obs_sph2-23..24`).
- [[Annual stellar parallax]] — trigonometric baseline 1 AU, definition of parsec, Gaia micro-arcsecond astrometry (`obs_sph2-25..28`).
- [[Atmospheric dispersion]] — wavelength-dependent refractive index $n(\lambda)$, point source elongation, Atmospheric Dispersion Correctors (`obs_sph2-29..30`).
- [[Atmospheric refraction]] — Snell's law in plane-parallel atmosphere, $R \approx 60''\tan z$ (`obs_sph2-31`).
- [[Proper motion and stellar kinematics]] — proper motion $\mu$, tangential velocity $v_t = 4.74 \mu d$, Doppler radial velocity $v_r$, total space velocity $v$ (`obs_sph2-32..33`).

---

## Block 2 — Earth's Atmosphere as an Optical Element

The 100 km of perturbed gas: absorption, extinction, scintillation, and seeing. (Slides `obs_atm-01..55`).

- [[Earth atmosphere for observations]] — master overview of atmospheric optics, scale height $H \approx 8$ km, thermal IR emission, site selection (Paranal, Mauna Kea, Asiago) (`obs_atm-01..10`, `45..48`).
- [[Atmospheric layers]] — troposphere, stratosphere (ozone absorption), mesosphere, thermosphere, temperature inversions (`obs_atm-11..12`).
- [[Atmospheric transparency windows]] — optical (3000 Å to 1 $\mu$m), NIR ($J, H, K$), mid-IR ($L, M, N, Q$), radio window, telluric molecular absorption ($H_2O, CO_2, O_3$) (`obs_atm-13..24`).
- [[Atmospheric extinction]] — Beer-Lambert law, airmass $X \approx \sec z$, Bouguer line method, extinction coefficients $k(\lambda)$, color terms (`obs_atm-25..32`).
- [[Atmospheric scintillation]] — high-altitude refractive index turbulence, Young scintillation index $\sigma_I/I \propto D^{-2/3} X^{1.75} t^{-1/2}$, pupil averaging (`obs_atm-33..36`).
- [[Atmospheric seeing]] — Kolmogorov turbulence, Fried parameter $r_0 \propto \lambda^{6/5}$, seeing FWHM $\theta \approx 0.98\lambda/r_0$, speckle patterns (`obs_atm-37..44`).
- [[Sky brightness]] — airglow, zodiacal light, integrated starlight, moonlight, sky background in mag/arcsec$^2$ across bands (`obs_atm-49..50`).
- [[Adaptive optics overview]] — Shack-Hartmann wavefront sensors, deformable mirrors, isoplanatic angle $\theta_0$, coherence time $\tau_0$, laser guide stars, Strehl ratio (`obs_atm-51..55`).

---

## Block 3 — Radiative Mechanisms, Photometry and Extinction

Converting photon flux into absolute stellar brightness and correcting for dust. (Slides `obs_rad-001..123`, incorporating `obs2.pdf`, `obs3.pdf`, `obs4.pdf`, `obs6.pdf`).

- [[Specific intensity flux luminosity]] — $I_\nu$, $F_\nu$, $L$, inverse square law $F = L/(4\pi d^2)$, radiative transfer equation $dI_\nu/d\tau_\nu = I_\nu - S_\nu$ (`obs_rad-001..016`).
- [[Blackbody radiation and Stefan-Boltzmann]] — Planck function $B_\nu(T)$, Rayleigh-Jeans and Wien approximations, Stefan-Boltzmann law $L = 4\pi R^2 \sigma T_{\rm eff}^4$ (`obs_rad-017..026`).
- [[Planck law Wien Stefan-Boltzmann]] — derivation of Wien displacement law $\lambda_{\max} T = 2.898 \times 10^{-3}$ m K, integration to Stefan-Boltzmann (`obs_rad-027..032`).
- [[Why hot massive stars dominate luminosity]] — **`obs3.pdf` exam answer**: $L \propto M^{3.5}$ along MS, Wien peak shifting deep into UV for O/B stars ($T > 20,000$ K), rapid post-starburst UV decline (`obs_rad-033..036`).
- [[Stellar spectra and spectral classification]] — Harvard sequence (OBAFGKM), Boltzmann excitation and Saha ionization equations, Balmer peak at A0 stars ($T \approx 10,000$ K), MK luminosity classes I-V (`obs_rad-037..044`).
- [[Pogson magnitudes and flux relation]] — **`obs4.pdf` exam answer**: Pogson 1856 logarithmic scale, $\Delta m = 1 \implies 2.5119\times$ flux ratio, small-variation approximation $\Delta m \approx 1.0857 \Delta F/F$ (`obs_rad-045..052`).
- [[Magnitudes and photometric systems]] — Vega system ($m=0$ for $\alpha$ Lyr), AB system ($m_{\rm AB} = -2.5\log_{10}(f_\nu/\text{Jy}) + 8.90$), ST system, passband convolution (`obs_rad-053..060`).
- [[Filter systems and bandpasses]] — Johnson-Cousins $UBVRI$, SDSS $ugriz$, HST/JWST filters, effective wavelength, equivalent width (`obs_rad-061..064`).
- [[Color indices]] — $B - V$, $u - g$, color temperature, color-color diagrams, blackbody color asymptotes (`obs_rad-065..068`).
- [[Photometric system conversion and color terms]] — **`obs6.pdf` exam answer**: why systems cannot be converted by a constant offset, SED slope dependency, color terms $m_A = m_B + a + b(c_1 - c_2)$, SDSS-i vs Cousins-I example (`obs_rad-069..072`).
- [[Bolometric correction and effective temperature]] — $BC \equiv M_{\rm bol} - M_V$, $M_{\rm bol,\odot} = 4.74$ mag, $L_\odot = 3.828 \times 10^{33}$ erg/s (`obs_rad-073..076`).
- [[Distance modulus]] — **`obs2.pdf` exam answer part 1**: $\mu = m - M = 5\log_{10}(d/\text{pc}) - 5 + A_\lambda$, physical significance (`obs_rad-077..080`).
- [[Interstellar absorption]] — Barnard 68 dark cloud, dust grains, extinction $A_\lambda$, color excess $E(B-V)$, $R_V = A_V / E(B-V) \approx 3.1$, CCM 1989 law, Calzetti 2000 curve (`obs_rad-081..092`).
- [[Balmer decrement]] — **`obs2.pdf` / `obs5.pdf` exam answer**: Case B recombination $(H\alpha/H\beta)_0 = 2.86$, dust extinction formula $E(B-V) = \frac{2.5}{k(H\beta)-k(H\alpha)} \log_{10}[(F_{H\alpha}/F_{H\beta})_{\rm obs} / 2.86]$ (`obs_rad-093..096`).
- [[Metallicity and chemical evolution]] — $[\text{Fe}/\text{H}]$ bracket notation, UV excess $\delta(U-B)$, $R_{23}$ gas-phase index, mass-metallicity relation, closed-box model, G-dwarf problem, $[\alpha/\text{Fe}]$ clock (`obs_rad-097..116`).
- [[K-correction]] — bandpass shift $m_{\rm obs}(z) = M_{\rm rest} + 5\log d_L + 25 + K(z)$, positive optical K-correction vs negative sub-mm K-correction (`obs_rad-117..123`).

---

## Block 4 — CCD Detectors and Signal-to-Noise Ratio

The silicon workhorse: from photons to electrons to ADU counts and the master noise equation. (Slides `obs_ccd-01..36`, incorporating `obs7.pdf`).

- [[CCD detectors and SNR]] — master overview of CCD detectors, quantum efficiency $>90\%$, MOS potential wells, DAOPHOT aperture and PSF photometry (`obs_ccd-01..08`, `31..36`).
- [[CCD basics]] — silicon bandgap $E_g = 1.12$ eV, photoelectric conversion, full-well capacity ($50,000-100,000 e^-$), blooming (`obs_ccd-01..08`).
- [[CCD readout chain]] — three-phase clocking, CTE $>0.99999$, on-chip output amplifier, gain $g$ in $e^-/\text{ADU}$, ADC conversion (`obs_ccd-09..16`).
- [[CCD noise sources]] — Poisson photon noise $\sqrt{N_*}$, sky shot noise $\sqrt{n_{\rm pix} N_{\rm sky}}$, dark current shot noise $\sqrt{n_{\rm pix} N_d}$, readout noise $n_{\rm pix} \sigma_{\rm RN}^2$, correlated double sampling (`obs_ccd-17..24`).
- [[The CCD equation]] — **`obs7.pdf` exam answer**: full derivation of master SNR equation: $\mathrm{SNR} = \frac{N_*}{\sqrt{N_* + n_{\rm pix}(N_{\rm sky} + N_d + \sigma_{\rm RN}^2)}}$, analysis of source-limited, sky-limited, and read-noise-limited regimes (`obs_ccd-25..30`).
- [[Aperture photometry]] — synthetic aperture radius $r_{\rm ap}$, sky background annulus subtraction, curve of growth (`obs_ccd-31..32`).
- [[PSF photometry]] — crowded-field stellar photometry, analytical PSF models (Moffat, Gaussian) + empirical residuals, DAOPHOT pipeline (`obs_ccd-33..34`).
- [[CCD calibration steps]] — bias frames, dark frames, flat-fielding, calibration reduction equation $I_{\rm cal} = (I_{\rm raw} - B - D)/F_{\rm norm}$, fringing correction (`obs_ccd-35..36`).

---

## Block 5 — The Cosmic Distance Ladder

Anchoring physical distances from the Astronomical Unit outward to the Hubble flow. (Slides `obs_dist-01..76`, incorporating `obs1.pdf`, `obs2.pdf`).

- [[AU calibration parallax and parsec]] — **`obs1.pdf` exam answer**: Venus transit, radar echo delay, Kepler third law, parallax angle, parsec definition, Gaia astrometry (`obs_dist-01..06`, `11..12`).
- [[Annual stellar parallax]] — trigonometric baseline 1 AU, Bessel 1838 (61 Cygni), Lutz-Kelker bias, Hipparcos to Gaia DR3 (`obs_dist-07..10`).
- [[Cepheid period-luminosity relation]] — Henrietta Leavitt 1912 discovery, classical Cepheids, Eddington $\kappa$-mechanism, Wesenheit extinction-free index $W = V - R_V(B-V)$ (`obs_dist-13..18`).
- [[Variable stars as standard candles]] — RR Lyrae ($M_V \approx +0.6$ mag, horizontal branch), Mira variables, detached eclipsing binaries as geometric anchors (`obs_dist-19..24`).
- [[Spectroscopic parallax and main-sequence fitting]] — HR diagram ZAMS fitting of open clusters (Hyades, Pleiades), metallicity corrections (`obs_dist-25..30`).
- [[Moving cluster method]] — convergent point geometry for Hyades cluster, $d = v_r \tan\theta / (4.74 \mu)$ (`obs_dist-31..34`).
- [[TRGB tip of the red giant branch]] — degenerate core helium flash fixing tip luminosity $M_I \approx -4.0$ mag, metal-independent in $I$-band (`obs_dist-35..36`).
- [[Surface brightness fluctuations]] — Poisson statistics of red giants in early-type galaxies, distance-dependent variance $\bar{F} \propto 1/d^2$ (`obs_dist-37..40`).
- [[Tully-Fisher relation]] — spiral galaxy mass-luminosity-rotation velocity relation: $L \propto V_{\rm max}^4$, HI 21 cm line width $W_{20}$ (`obs_dist-41..42`).
- [[Fundamental plane of ellipticals]] — Faber-Jackson relation ($L \propto \sigma^4$), Fundamental Plane $\log R_e = \alpha\log\sigma + \beta\log\langle I\rangle_e + \gamma$ (`obs_dist-43..44`).
- [[Type Ia supernovae as standard candles]] — thermonuclear white dwarf detonation at Chandrasekhar limit $1.44 M_\odot$, Phillips relation $\Delta m_{15}(B)$, SALT2 light curve standardization, 1998 discovery of cosmic acceleration (`obs_dist-45..56`).
- [[Hubble flow distances]] — **`obs2.pdf` exam answer part 3**: Hubble law $v = H_0 d$, peculiar velocity corrections, luminosity distance $d_L(z)$, Hubble tension (SH0ES vs Planck) (`obs_dist-57..68`).
- [[Distance ladder derivations]] — complete mathematical summary linking all rungs, error propagation down the chain, standard sirens (`obs_dist-69..76`).

---

## Block 6 — Stars and Stellar Populations

Stellar structure, scaling relations, evolution, CMDs, and population taxonomy. (Slides `obs_stars-001..106`).

- [[HR diagram]] — theoretical plane $(\log L, \log T_{\rm eff})$ vs observational CMD $(M_V, B-V)$, lines of constant radius $R \propto L^{1/2} T_{\rm eff}^{-2}$, stellar families (`obs_stars-001..016`).
- [[Main sequence, giants, supergiants, white dwarfs]] — core H-fusion, Schönberg-Chandrasekhar limit, subgiant and red giant branch, core helium flash, horizontal branch, AGB (`obs_stars-017..024`).
- [[Stellar scaling relations]] — homology laws from hydrostatic equilibrium and radiative transport: $P_c \propto M^2/R^4$, $T_c \propto M/R$, $L \propto M^{3.5}$ (`obs_stars-025..030`).
- [[Mass-luminosity relation]] — empirical piecewise relations across stellar mass regimes, Eddington limit $L_{\rm Edd} = 1.3 \times 10^{38}(M/M_\odot)$ erg/s (`obs_stars-031..036`).
- [[Stellar evolution timescales]] — strict hierarchy: $t_{\rm dyn} \approx (G\rho)^{-1/2} \sim 30$ min $\ll t_{\rm KH} \approx GM^2/(RL) \sim 30$ Myr $\ll t_{\rm nuc} \propto M/L \propto M^{-2.5} \sim 10$ Gyr (`obs_stars-037..048`).
- [[Solar evolution and final stages]] — $1 M_\odot$ post-MS evolution: MS $\to$ RGB $\to$ He-flash $\to$ HB $\to$ AGB $\to$ planetary nebula $\to$ degenerate CO white dwarf, Chandrasekhar limit $1.44 M_\odot$, Mestel cooling (`obs_stars-049..064`).
- [[Color-magnitude diagrams of clusters]] — open clusters (young, disk, metal-rich) vs globular clusters (ancient, halo, metal-poor) (`obs_stars-065..068`).
- [[Cluster ages from CMD turnoff]] — Main Sequence Turn-Off (MSTO) point $M_{\rm TO} \propto t_{\rm age}^{-0.4}$, isochrone fitting, vertical $\Delta V_{\rm TO}^{\rm HB}$ and horizontal $\delta(B-V)$ age indicators, cosmic lower age bound $>12.5$ Gyr (`obs_stars-069..076`).
- [[Stellar populations I II III]] — Baade 1944 discovery, Pop I (disk, young, $Z \sim 0.02$, circular orbits) vs Pop II (halo, old, $Z < 0.001$, eccentric orbits) vs Pop III (pristine $Z=0$, massive, reionization drivers) (`obs_stars-077..092`).
- [[Initial mass function]] — Salpeter 1955 single power law $\xi(M) \propto M^{-2.35}$, Kroupa 2001 broken power law, Chabrier 2003 log-normal IMF, impact on $M/L$ and ionizing photons (`obs_stars-093..100`).
- [[Star formation history of a population]] — SFH $\psi(t)$, exponentially declining $\tau$-models, delayed-$\tau$ models, specific star formation rate $\text{sSFR} = \text{SFR}/M_*$, star-forming main sequence (`obs_stars-101..106`).

---

## Block 7 — Stellar Population Synthesis (SPS)

The inverse problem: decoding unresolved galaxy light into physical parameters. (Slides `obs_sps-01..54`, incorporating `obs5.pdf`, `obs7.pdf`).

- [[Stellar population synthesis]] — master convolution integral $L_\lambda(t) = \int_0^t \psi(t-\tau) L_{\lambda,{\rm SSP}}(\tau, Z(t-\tau)) d\tau$, $4000$ Å break ($D_{4000}$), Balmer break, panchromatic SED modeling (`obs_sps-01..12`).
- [[Single stellar population SSP]] — fundamental basis brick (coeval, mono-metallicity), isochrone grids, empirical (MILES) vs theoretical (Kurucz) spectral libraries (`obs_sps-13..18`).
- [[SPS code families]] — Bruzual & Charlot (BC03), Maraston (M05) fuel consumption theorem for TP-AGB stars, Conroy FSPS, BPASS binary evolution (`obs_sps-19..24`).
- [[SED fitting basics]] — Bayesian MCMC and $\chi^2$ grid fitting, dust energy balance ($L_{\rm dust}^{\rm abs} = L_{\rm dust}^{\rm emit}$), stellar mass stability in rest-frame $K$-band ($3.6\,\mu$m) (`obs_sps-25..36`).
- [[Lick indices]] — narrow-band pseudo-equivalent widths: $\text{H}\beta$ (age), $\text{Mg}_b$ ($\alpha$-elements), $\text{Fe5270}$ and $\text{Fe5335}$ (iron), composite $[\text{MgFe}]'$ index (`obs_sps-37..40`).
- [[Age-metallicity degeneracy]] — Worthey 1994 $3/2$ rule: $\Delta\log(\text{age}) \approx 1.5 \Delta\log Z$ produces identical optical colors, decoupling using $[\text{MgFe}]'$ vs $\text{H}\beta$ grids, $[\alpha/\text{Fe}]$ enhancement (`obs_sps-41..44`).
- [[Photometric redshifts]] — tracking $4000$ Å break and Lyman break through filters, template fitting (EAZY, BPZ), Bayesian priors, catastrophic photo-z outliers (`obs_sps-45..48`).
- [[SFR tracers from population synthesis]] — **`obs5.pdf` / `obs7.pdf` exam answer**: Kennicutt 1998 calibrations: UV continuum (100 Myr timescale), $H\alpha$ emission (10 Myr timescale, $\text{SFR} = 7.9 \times 10^{-42} L(H\alpha)$ erg/s), FIR dust re-emission (`obs_sps-49..51`).
- [[UV SFR tracer]] — non-ionizing rest-frame UV continuum ($1500-2800$ Å), Kennicutt UV calibration $\text{SFR} = 1.4 \times 10^{-28} L_\nu(\text{UV})$, dust correction via UV slope $\beta$ and Meurer IRX-$\beta$ relation (`obs_sps-52..54`).

---

## Literature & Primary Sources

Canonical and modern arXiv astro-ph.IM benchmark papers underlying the detector characterization, adaptive optics, and survey design covered above.

- [[Janesick_2001_CCD_Photon_Transfer_Method|Janesick (2001) — Scientific CCDs and the Photon Transfer Method]] — empirical gain/read-noise/PRNU extraction from flat-field sequences
- [[Guyon_2018_Extreme_Adaptive_Optics|Guyon (2018) — Extreme Adaptive Optics]] — Strehl ratio, wavefront-error budget, high-contrast imaging architectures
- [[Ivezic_2019_LSST_Science_Drivers_Reference_Design|Ivezić et al. (2019) — LSST: Science Drivers to Reference Design]] — Rubin Observatory design, survey error budget, self-calibration

---

## Prof. Paolo Cassata Oral Exam Defense Preparation Matrix

This matrix prepares the student for the exact questions asked by Prof. Paolo Cassata, drawn directly from the verified course exam drafts (`obs1.pdf` through `obs7.pdf`).

| Question # & Source | Typical Exam Question | Key Blackboard Derivations | Trap Points & Crucial Insights | Target Zettel |
| :--- | :--- | :--- | :--- | :--- |
| **Q1 (`obs1.pdf`)** | *"Describe how we calibrate the astronomical unit and use it to measure distances via annual parallax. What is the parsec, and why does Gaia change the game?"* | 1. Radar echo delay: $d = c\Delta t/2$ to Venus.<br>2. Kepler 3rd law: $a^3/P^2 = G(M_\odot+m)/(4\pi^2)$ relates Venus orbit to AU.<br>3. Right triangle definition of parsec: $\tan p \approx p = 1\text{ AU}/d \implies d(\text{pc}) = 1/p(\text{arcsec})$.<br>4. Astrometric error: $\sigma_d/d = \sigma_p/p$. Gaia achieves $\sim 10\,\mu$as precision. | Do not confuse angular diameter of Sun with parallax. Emphasize that AU is fixed by definition since 2012 ($149,597,870,700$ m). Explain Lutz-Kelker bias when inverting parallax to distance. | [[AU calibration parallax and parsec]] |
| **Q2 (`obs2.pdf`)** | *"Discuss distance modulus, dust (extinction and reddening, briefly the Balmer decrement), and how Hubble flow gives distances at cosmological scale."* | 1. Pogson derivation: $m - M = 5\log_{10}(d/\text{pc}) - 5 + A_\lambda$.<br>2. Color excess $E(B-V) = (B-V) - (B-V)_0$, total-to-selective extinction $R_V = A_V/E(B-V) \approx 3.1$.<br>3. Balmer decrement: Case B $(F_{H\alpha}/F_{H\beta})_0 = 2.86$. Color excess $E(B-V) = \frac{2.5}{k_{H\beta}-k_{H\alpha}}\log_{10}\left[\frac{(F_{H\alpha}/F_{H\beta})_{\rm obs}}{2.86}\right]$.<br>4. Hubble law: $v = cz = H_0 d$ for $z \ll 1$; FLRW luminosity distance $d_L(z)$ at high $z$. | Distinguish dust extinction from attenuation (geometry matters!). Note that Hubble flow distances at $z < 0.02$ are ruined by peculiar velocities ($v_{\rm pec} \sim 300-500$ km/s). | [[Distance modulus]], [[Balmer decrement]], [[Hubble flow distances]] |
| **Q3 (`obs3.pdf`)** | *"Explain blackbody radiation (Planck law, Wien’s law, Stefan–Boltzmann law), and explain why hot massive stars dominate the luminosity of young stellar populations."* | 1. Planck function $B_\lambda(T) = \frac{2hc^2}{\lambda^5}\frac{1}{e^{hc/\lambda k_B T}-1}$.<br>2. Wien law: $\lambda_{\max} T = 2.898 \times 10^{-3}$ m K.<br>3. Stefan-Boltzmann: $L = 4\pi R^2 \sigma T_{\rm eff}^4$.<br>4. MS scaling: $R \propto M^{0.6}, T_{\rm eff} \propto M^{0.6} \implies L \propto M^{3.5}$.<br>5. For young population: a single $20 M_\odot$ star ($L \approx 4 \times 10^4 L_\odot$, Wien peak in UV) outshines tens of thousands of solar-type stars. | When a starburst ages past $\sim 10-20$ Myr, O/B stars explode as SNe, and UV luminosity drops by factors of $10^2-10^3$! Bolometric light transitions to red giants, while NIR traces stellar mass. | [[Why hot massive stars dominate luminosity]], [[Blackbody radiation and Stefan-Boltzmann]] |
| **Q4 (`obs4.pdf`)** | *"State Pogson’s definition of magnitudes, derive the flux–magnitude relation, show why $\Delta m = 1$ corresponds to $\sim 2.512\times$ flux, and explain why $\Delta m \approx 1.0857 \Delta F/F$ is useful."* | 1. Pogson 1856: $m_1 - m_2 = -2.5\log_{10}(F_1/F_2)$.<br>2. For $\Delta m = 1$: $F_1/F_2 = 10^{0.4} = 2.511886...$<br>3. Differential: $dm = -2.5 \frac{d\log_{10}F}{dF} dF = -\frac{2.5}{\ln 10}\frac{dF}{F} \approx -1.0857\frac{dF}{F}$.<br>4. In finite variations: $\Delta m = 2.5\log_{10}(1 + \Delta F/F) \approx 1.0857 \Delta F/F$. | The factor $1.0857$ allows instant mental conversion: a $1\%$ photometric error ($0.01$) equals $\approx 0.0109$ mag uncertainty. Emphasize that the approximation fails for large variations ($>20\%$). | [[Pogson magnitudes and flux relation]] |
| **Q5 (`obs5.pdf`)** | *"How to estimate Star Formation Rate, stellar mass, and age in distant galaxies?"* | 1. SFR tracers: $H\alpha$ ($10$ Myr timescale), UV continuum ($100$ Myr timescale), FIR ($L_{\rm IR}$ dust re-emission).<br>2. Dust correction via Balmer decrement and Meurer IRX-$\beta$ relation.<br>3. Stellar mass from SED fitting: rest-frame NIR ($K$-band, $3.6\,\mu$m) has nearly constant $M/L$ ratio.<br>4. Age indicators: $4000$ Å break ($D_{4000}$), Balmer break ($3646$ Å), and Lick indices. | Distinguish instantaneous SFR ($H\alpha$) from time-averaged SFR (UV). Mention the stellar mass-to-light ratio sensitivity to the assumed IMF (Salpeter yields $\sim 0.24$ dex higher mass than Chabrier/Kroupa). | [[SFR tracers from population synthesis]], [[SED fitting basics]] |
| **Q6 (`obs6.pdf`)** | *"Magnitudes in different photometric systems cannot, in general, be converted by adding a constant offset. Explain why, introduce color terms, and give an example."* | 1. Synthetic magnitude: $m = -2.5\log_{10}\left[\frac{\int f_\lambda(\lambda) T(\lambda) \lambda d\lambda}{\int f_{\lambda,0}(\lambda) T(\lambda) \lambda d\lambda}\right]$.<br>2. If filter transmissions $T_A(\lambda) \neq T_B(\lambda)$, the ratio of transmitted fluxes depends directly on the spectral slope $df_\lambda/d\lambda$.<br>3. Color term formula: $m_A = m_B + a + b(c_1 - c_2)$.<br>4. Concrete example: SDSS-$i$ vs Cousins-$I$ differs markedly between hot A0 stars ($B-V=0$) and cool M dwarfs ($B-V=1.5$). | A constant offset only works if two systems have identical bandpasses but different zero-points (e.g. AB vs Vega on the exact same filter). If passband shapes differ, color terms are mandatory! | [[Photometric system conversion and color terms]] |
| **Q7 (`obs7.pdf`)** | *"How do we estimate SFR, stellar mass, and age in unresolved populations? Derive the CCD Signal-to-Noise equation and discuss its limiting regimes."* | 1. Total noise variance: $\sigma_{\rm tot}^2 = N_* + n_{\rm pix}(N_{\rm sky} + N_d + \sigma_{\rm RN}^2)$.<br>2. $\mathrm{SNR} = \frac{N_*}{\sqrt{N_* + n_{\rm pix}(N_{\rm sky} + N_d + \sigma_{\rm RN}^2)}}$.<br>3. Regime A (Source-limited): $N_* \gg$ noise $\implies \mathrm{SNR} \approx \sqrt{N_*} \propto \sqrt{t}$.<br>4. Regime B (Sky-limited): $N_{\rm sky} \gg$ all $\implies \mathrm{SNR} \approx \frac{N_*}{\sqrt{n_{\rm pix} N_{\rm sky}}} \propto \frac{t}{\sqrt{t}} = \sqrt{t}$.<br>5. Regime C (Read-noise limited): $\sigma_{\rm RN}^2 \gg$ all $\implies \mathrm{SNR} \approx \frac{N_*}{\sqrt{n_{\rm pix}}\sigma_{\rm RN}} \propto t$. | Point out that in the read-noise limited regime (short exposures or high dispersion), SNR grows linearly with time ($t$), whereas in sky- or source-limited regimes it only grows as $\sqrt{t}$. Binning pixels ($2\times 2$) reduces effective $n_{\rm pix}$ by 4, saving read noise! | [[The CCD equation]], [[CCD detectors and SNR]] |

---

## Essential Observational Formulas Quick Sheet

$$\boxed{\cos z = \sin\phi\sin\delta + \cos\phi\cos\delta\cos h} \qquad \text{(Alt-Az / Equatorial Transformation)}$$

$$\boxed{R \approx 60''\tan z} \qquad \text{(Atmospheric Refraction)}$$

$$\boxed{r_0 \propto \lambda^{6/5}, \quad \theta_{\rm seeing} \approx 0.98\frac{\lambda}{r_0} \propto \lambda^{-1/5}} \qquad \text{(Kolmogorov Seeing)}$$

$$\boxed{m_{\rm obs}(\lambda) = m_0(\lambda) + k(\lambda) X, \quad X \approx \sec z} \qquad \text{(Bouguer Extinction)}$$

$$\boxed{m_1 - m_2 = -2.5\log_{10}\left(\frac{F_1}{F_2}\right), \quad \Delta m \approx 1.0857\frac{\Delta F}{F}} \qquad \text{(Pogson's Relations)}$$

$$\boxed{m_{\rm AB} = -2.5\log_{10}(f_\nu / \text{Jy}) + 8.90 = -2.5\log_{10}\left(\frac{f_\nu}{3631\text{ Jy}}\right)} \qquad \text{(AB Magnitude)}$$

$$\boxed{m - M = 5\log_{10}(d/\text{pc}) - 5 + A_\lambda} \qquad \text{(Distance Modulus)}$$

$$\boxed{R_V \equiv \frac{A_V}{E(B-V)} \approx 3.1} \qquad \text{(Total-to-Selective Extinction)}$$

$$\boxed{\mathrm{SNR} = \frac{N_*}{\sqrt{N_* + n_{\rm pix}(N_{\rm sky} + N_d + \sigma_{\rm RN}^2)}}} \qquad \text{(Master CCD Equation)}$$

$$\boxed{d(\text{pc}) = \frac{1}{p(\text{arcsec})}, \quad \frac{\sigma_d}{d} = \frac{\sigma_p}{p}} \qquad \text{(Trigonometric Parallax)}$$

$$\boxed{L \propto M^{3.5}, \quad \tau_{\rm MS} \approx 10^{10}\left(\frac{M}{M_\odot}\right)^{-2.5}\text{ yr}} \qquad \text{(Stellar Scaling Laws)}$$

$$\boxed{L_\lambda(t) = \int_0^t \psi(t-\tau) L_{\lambda,{\rm SSP}}(\tau, Z(t-\tau)) d\tau} \qquad \text{(Master Population Synthesis)}$$

$$\boxed{\Delta\log(\text{age}) \approx 1.5 \Delta\log Z} \qquad \text{(Worthey 3/2 Age-Metallicity Degeneracy)}$$

---

## Master Figure Index: Observational Astrophysics (542 Slides)

| Slide Image | Originating Slide Deck | Physical Topic Illustrated | Host Zettel Note |
| :--- | :--- | :--- | :--- |
| `![obs_atm-01.png](../assets/images/obs_atm-01.png)` | 2. Earth atmosphere | Atmospheric vertical structure, barometric law, scale height H ~ 8 km | [[Earth atmosphere for observations]] |
| `![obs_atm-02.png](../assets/images/obs_atm-02.png)` | 2. Earth atmosphere | Atmospheric vertical structure, barometric law, scale height H ~ 8 km | [[Earth atmosphere for observations]] |
| `![obs_atm-03.png](../assets/images/obs_atm-03.png)` | 2. Earth atmosphere | Atmospheric vertical structure, barometric law, scale height H ~ 8 km | [[Earth atmosphere for observations]] |
| `![obs_atm-04.png](../assets/images/obs_atm-04.png)` | 2. Earth atmosphere | Atmospheric vertical structure, barometric law, scale height H ~ 8 km | [[Earth atmosphere for observations]] |
| `![obs_atm-05.png](../assets/images/obs_atm-05.png)` | 2. Earth atmosphere | Atmospheric vertical structure, barometric law, scale height H ~ 8 km | [[Earth atmosphere for observations]] |
| `![obs_atm-06.png](../assets/images/obs_atm-06.png)` | 2. Earth atmosphere | Atmospheric vertical structure, barometric law, scale height H ~ 8 km | [[Earth atmosphere for observations]] |
| `![obs_atm-07.png](../assets/images/obs_atm-07.png)` | 2. Earth atmosphere | Atmospheric vertical structure, barometric law, scale height H ~ 8 km | [[Earth atmosphere for observations]] |
| `![obs_atm-08.png](../assets/images/obs_atm-08.png)` | 2. Earth atmosphere | Atmospheric vertical structure, barometric law, scale height H ~ 8 km | [[Earth atmosphere for observations]] |
| `![obs_atm-09.png](../assets/images/obs_atm-09.png)` | 2. Earth atmosphere | Atmospheric vertical structure, barometric law, scale height H ~ 8 km | [[Earth atmosphere for observations]] |
| `![obs_atm-10.png](../assets/images/obs_atm-10.png)` | 2. Earth atmosphere | Atmospheric vertical structure, barometric law, scale height H ~ 8 km | [[Earth atmosphere for observations]] |
| `![obs_atm-11.png](../assets/images/obs_atm-11.png)` | 2. Earth atmosphere | Atmospheric layers (troposphere, stratosphere, mesosphere, thermosphere) | [[Atmospheric layers]] |
| `![obs_atm-12.png](../assets/images/obs_atm-12.png)` | 2. Earth atmosphere | Atmospheric layers (troposphere, stratosphere, mesosphere, thermosphere) | [[Atmospheric layers]] |
| `![obs_atm-13.png](../assets/images/obs_atm-13.png)` | 2. Earth atmosphere | Transparency windows (optical, NIR, radio), molecular absorbers, telluric lines | [[Atmospheric transparency windows]] |
| `![obs_atm-14.png](../assets/images/obs_atm-14.png)` | 2. Earth atmosphere | Transparency windows (optical, NIR, radio), molecular absorbers, telluric lines | [[Atmospheric transparency windows]] |
| `![obs_atm-15.png](../assets/images/obs_atm-15.png)` | 2. Earth atmosphere | Transparency windows (optical, NIR, radio), molecular absorbers, telluric lines | [[Atmospheric transparency windows]] |
| `![obs_atm-16.png](../assets/images/obs_atm-16.png)` | 2. Earth atmosphere | Transparency windows (optical, NIR, radio), molecular absorbers, telluric lines | [[Atmospheric transparency windows]] |
| `![obs_atm-17.png](../assets/images/obs_atm-17.png)` | 2. Earth atmosphere | Transparency windows (optical, NIR, radio), molecular absorbers, telluric lines | [[Atmospheric transparency windows]] |
| `![obs_atm-18.png](../assets/images/obs_atm-18.png)` | 2. Earth atmosphere | Transparency windows (optical, NIR, radio), molecular absorbers, telluric lines | [[Atmospheric transparency windows]] |
| `![obs_atm-19.png](../assets/images/obs_atm-19.png)` | 2. Earth atmosphere | Transparency windows (optical, NIR, radio), molecular absorbers, telluric lines | [[Atmospheric transparency windows]] |
| `![obs_atm-20.png](../assets/images/obs_atm-20.png)` | 2. Earth atmosphere | Transparency windows (optical, NIR, radio), molecular absorbers, telluric lines | [[Atmospheric transparency windows]] |
| `![obs_atm-21.png](../assets/images/obs_atm-21.png)` | 2. Earth atmosphere | Transparency windows (optical, NIR, radio), molecular absorbers, telluric lines | [[Atmospheric transparency windows]] |
| `![obs_atm-22.png](../assets/images/obs_atm-22.png)` | 2. Earth atmosphere | Transparency windows (optical, NIR, radio), molecular absorbers, telluric lines | [[Atmospheric transparency windows]] |
| `![obs_atm-23.png](../assets/images/obs_atm-23.png)` | 2. Earth atmosphere | Transparency windows (optical, NIR, radio), molecular absorbers, telluric lines | [[Atmospheric transparency windows]] |
| `![obs_atm-24.png](../assets/images/obs_atm-24.png)` | 2. Earth atmosphere | Transparency windows (optical, NIR, radio), molecular absorbers, telluric lines | [[Atmospheric transparency windows]] |
| `![obs_atm-25.png](../assets/images/obs_atm-25.png)` | 2. Earth atmosphere | Atmospheric extinction, Beer-Lambert law, airmass X = sec z, Bouguer line | [[Atmospheric extinction]] |
| `![obs_atm-26.png](../assets/images/obs_atm-26.png)` | 2. Earth atmosphere | Atmospheric extinction, Beer-Lambert law, airmass X = sec z, Bouguer line | [[Atmospheric extinction]] |
| `![obs_atm-27.png](../assets/images/obs_atm-27.png)` | 2. Earth atmosphere | Atmospheric extinction, Beer-Lambert law, airmass X = sec z, Bouguer line | [[Atmospheric extinction]] |
| `![obs_atm-28.png](../assets/images/obs_atm-28.png)` | 2. Earth atmosphere | Atmospheric extinction, Beer-Lambert law, airmass X = sec z, Bouguer line | [[Atmospheric extinction]] |
| `![obs_atm-29.png](../assets/images/obs_atm-29.png)` | 2. Earth atmosphere | Atmospheric extinction, Beer-Lambert law, airmass X = sec z, Bouguer line | [[Atmospheric extinction]] |
| `![obs_atm-30.png](../assets/images/obs_atm-30.png)` | 2. Earth atmosphere | Atmospheric extinction, Beer-Lambert law, airmass X = sec z, Bouguer line | [[Atmospheric extinction]] |
| `![obs_atm-31.png](../assets/images/obs_atm-31.png)` | 2. Earth atmosphere | Atmospheric extinction, Beer-Lambert law, airmass X = sec z, Bouguer line | [[Atmospheric extinction]] |
| `![obs_atm-32.png](../assets/images/obs_atm-32.png)` | 2. Earth atmosphere | Atmospheric extinction, Beer-Lambert law, airmass X = sec z, Bouguer line | [[Atmospheric extinction]] |
| `![obs_atm-33.png](../assets/images/obs_atm-33.png)` | 2. Earth atmosphere | Atmospheric scintillation, Young index, pupil-averaging D^(-2/3) | [[Atmospheric scintillation]] |
| `![obs_atm-34.png](../assets/images/obs_atm-34.png)` | 2. Earth atmosphere | Atmospheric scintillation, Young index, pupil-averaging D^(-2/3) | [[Atmospheric scintillation]] |
| `![obs_atm-35.png](../assets/images/obs_atm-35.png)` | 2. Earth atmosphere | Atmospheric scintillation, Young index, pupil-averaging D^(-2/3) | [[Atmospheric scintillation]] |
| `![obs_atm-36.png](../assets/images/obs_atm-36.png)` | 2. Earth atmosphere | Atmospheric scintillation, Young index, pupil-averaging D^(-2/3) | [[Atmospheric scintillation]] |
| `![obs_atm-37.png](../assets/images/obs_atm-37.png)` | 2. Earth atmosphere | Atmospheric seeing, Kolmogorov turbulence, Fried parameter r_0, FWHM ~ lambda/r_0 | [[Atmospheric seeing]] |
| `![obs_atm-38.png](../assets/images/obs_atm-38.png)` | 2. Earth atmosphere | Atmospheric seeing, Kolmogorov turbulence, Fried parameter r_0, FWHM ~ lambda/r_0 | [[Atmospheric seeing]] |
| `![obs_atm-39.png](../assets/images/obs_atm-39.png)` | 2. Earth atmosphere | Atmospheric seeing, Kolmogorov turbulence, Fried parameter r_0, FWHM ~ lambda/r_0 | [[Atmospheric seeing]] |
| `![obs_atm-40.png](../assets/images/obs_atm-40.png)` | 2. Earth atmosphere | Atmospheric seeing, Kolmogorov turbulence, Fried parameter r_0, FWHM ~ lambda/r_0 | [[Atmospheric seeing]] |
| `![obs_atm-41.png](../assets/images/obs_atm-41.png)` | 2. Earth atmosphere | Atmospheric seeing, Kolmogorov turbulence, Fried parameter r_0, FWHM ~ lambda/r_0 | [[Atmospheric seeing]] |
| `![obs_atm-42.png](../assets/images/obs_atm-42.png)` | 2. Earth atmosphere | Atmospheric seeing, Kolmogorov turbulence, Fried parameter r_0, FWHM ~ lambda/r_0 | [[Atmospheric seeing]] |
| `![obs_atm-43.png](../assets/images/obs_atm-43.png)` | 2. Earth atmosphere | Atmospheric seeing, Kolmogorov turbulence, Fried parameter r_0, FWHM ~ lambda/r_0 | [[Atmospheric seeing]] |
| `![obs_atm-44.png](../assets/images/obs_atm-44.png)` | 2. Earth atmosphere | Atmospheric seeing, Kolmogorov turbulence, Fried parameter r_0, FWHM ~ lambda/r_0 | [[Atmospheric seeing]] |
| `![obs_atm-45.png](../assets/images/obs_atm-45.png)` | 2. Earth atmosphere | Observatory site selection (Paranal, Mauna Kea, Asiago climate) | [[Earth atmosphere for observations]] |
| `![obs_atm-46.png](../assets/images/obs_atm-46.png)` | 2. Earth atmosphere | Observatory site selection (Paranal, Mauna Kea, Asiago climate) | [[Earth atmosphere for observations]] |
| `![obs_atm-47.png](../assets/images/obs_atm-47.png)` | 2. Earth atmosphere | Observatory site selection (Paranal, Mauna Kea, Asiago climate) | [[Earth atmosphere for observations]] |
| `![obs_atm-48.png](../assets/images/obs_atm-48.png)` | 2. Earth atmosphere | Observatory site selection (Paranal, Mauna Kea, Asiago climate) | [[Earth atmosphere for observations]] |
| `![obs_atm-49.png](../assets/images/obs_atm-49.png)` | 2. Earth atmosphere | Night sky brightness, airglow, zodiacal light, OH lines | [[Sky brightness]] |
| `![obs_atm-50.png](../assets/images/obs_atm-50.png)` | 2. Earth atmosphere | Night sky brightness, airglow, zodiacal light, OH lines | [[Sky brightness]] |
| `![obs_atm-51.png](../assets/images/obs_atm-51.png)` | 2. Earth atmosphere | Adaptive optics, wavefront sensors, deformable mirrors, Strehl ratio, LGS | [[Adaptive optics overview]] |
| `![obs_atm-52.png](../assets/images/obs_atm-52.png)` | 2. Earth atmosphere | Adaptive optics, wavefront sensors, deformable mirrors, Strehl ratio, LGS | [[Adaptive optics overview]] |
| `![obs_atm-53.png](../assets/images/obs_atm-53.png)` | 2. Earth atmosphere | Adaptive optics, wavefront sensors, deformable mirrors, Strehl ratio, LGS | [[Adaptive optics overview]] |
| `![obs_atm-54.png](../assets/images/obs_atm-54.png)` | 2. Earth atmosphere | Adaptive optics, wavefront sensors, deformable mirrors, Strehl ratio, LGS | [[Adaptive optics overview]] |
| `![obs_atm-55.png](../assets/images/obs_atm-55.png)` | 2. Earth atmosphere | Adaptive optics, wavefront sensors, deformable mirrors, Strehl ratio, LGS | [[Adaptive optics overview]] |
| `![obs_ccd-01.png](../assets/images/obs_ccd-01.png)` | 4. CCD and SNR | CCD architecture, silicon bandgap 1.12 eV, MOS capacitors, full well capacity | [[CCD basics]] |
| `![obs_ccd-02.png](../assets/images/obs_ccd-02.png)` | 4. CCD and SNR | CCD architecture, silicon bandgap 1.12 eV, MOS capacitors, full well capacity | [[CCD basics]] |
| `![obs_ccd-03.png](../assets/images/obs_ccd-03.png)` | 4. CCD and SNR | CCD architecture, silicon bandgap 1.12 eV, MOS capacitors, full well capacity | [[CCD basics]] |
| `![obs_ccd-04.png](../assets/images/obs_ccd-04.png)` | 4. CCD and SNR | CCD architecture, silicon bandgap 1.12 eV, MOS capacitors, full well capacity | [[CCD basics]] |
| `![obs_ccd-05.png](../assets/images/obs_ccd-05.png)` | 4. CCD and SNR | CCD architecture, silicon bandgap 1.12 eV, MOS capacitors, full well capacity | [[CCD basics]] |
| `![obs_ccd-06.png](../assets/images/obs_ccd-06.png)` | 4. CCD and SNR | CCD architecture, silicon bandgap 1.12 eV, MOS capacitors, full well capacity | [[CCD basics]] |
| `![obs_ccd-07.png](../assets/images/obs_ccd-07.png)` | 4. CCD and SNR | CCD architecture, silicon bandgap 1.12 eV, MOS capacitors, full well capacity | [[CCD basics]] |
| `![obs_ccd-08.png](../assets/images/obs_ccd-08.png)` | 4. CCD and SNR | CCD architecture, silicon bandgap 1.12 eV, MOS capacitors, full well capacity | [[CCD basics]] |
| `![obs_ccd-09.png](../assets/images/obs_ccd-09.png)` | 4. CCD and SNR | Readout chain, three-phase clocking, output amplifier, gain (e-/ADU), ADC | [[CCD readout chain]] |
| `![obs_ccd-10.png](../assets/images/obs_ccd-10.png)` | 4. CCD and SNR | Readout chain, three-phase clocking, output amplifier, gain (e-/ADU), ADC | [[CCD readout chain]] |
| `![obs_ccd-11.png](../assets/images/obs_ccd-11.png)` | 4. CCD and SNR | Readout chain, three-phase clocking, output amplifier, gain (e-/ADU), ADC | [[CCD readout chain]] |
| `![obs_ccd-12.png](../assets/images/obs_ccd-12.png)` | 4. CCD and SNR | Readout chain, three-phase clocking, output amplifier, gain (e-/ADU), ADC | [[CCD readout chain]] |
| `![obs_ccd-13.png](../assets/images/obs_ccd-13.png)` | 4. CCD and SNR | Readout chain, three-phase clocking, output amplifier, gain (e-/ADU), ADC | [[CCD readout chain]] |
| `![obs_ccd-14.png](../assets/images/obs_ccd-14.png)` | 4. CCD and SNR | Readout chain, three-phase clocking, output amplifier, gain (e-/ADU), ADC | [[CCD readout chain]] |
| `![obs_ccd-15.png](../assets/images/obs_ccd-15.png)` | 4. CCD and SNR | Readout chain, three-phase clocking, output amplifier, gain (e-/ADU), ADC | [[CCD readout chain]] |
| `![obs_ccd-16.png](../assets/images/obs_ccd-16.png)` | 4. CCD and SNR | Readout chain, three-phase clocking, output amplifier, gain (e-/ADU), ADC | [[CCD readout chain]] |
| `![obs_ccd-17.png](../assets/images/obs_ccd-17.png)` | 4. CCD and SNR | Noise sources: photon shot noise, sky noise, dark current, readout noise | [[CCD noise sources]] |
| `![obs_ccd-18.png](../assets/images/obs_ccd-18.png)` | 4. CCD and SNR | Noise sources: photon shot noise, sky noise, dark current, readout noise | [[CCD noise sources]] |
| `![obs_ccd-19.png](../assets/images/obs_ccd-19.png)` | 4. CCD and SNR | Noise sources: photon shot noise, sky noise, dark current, readout noise | [[CCD noise sources]] |
| `![obs_ccd-20.png](../assets/images/obs_ccd-20.png)` | 4. CCD and SNR | Noise sources: photon shot noise, sky noise, dark current, readout noise | [[CCD noise sources]] |
| `![obs_ccd-21.png](../assets/images/obs_ccd-21.png)` | 4. CCD and SNR | Noise sources: photon shot noise, sky noise, dark current, readout noise | [[CCD noise sources]] |
| `![obs_ccd-22.png](../assets/images/obs_ccd-22.png)` | 4. CCD and SNR | Noise sources: photon shot noise, sky noise, dark current, readout noise | [[CCD noise sources]] |
| `![obs_ccd-23.png](../assets/images/obs_ccd-23.png)` | 4. CCD and SNR | Noise sources: photon shot noise, sky noise, dark current, readout noise | [[CCD noise sources]] |
| `![obs_ccd-24.png](../assets/images/obs_ccd-24.png)` | 4. CCD and SNR | Noise sources: photon shot noise, sky noise, dark current, readout noise | [[CCD noise sources]] |
| `![obs_ccd-25.png](../assets/images/obs_ccd-25.png)` | 4. CCD and SNR | Obs7 question: Master CCD Signal-to-Noise equation and 3 limiting regimes | [[The CCD equation]] |
| `![obs_ccd-26.png](../assets/images/obs_ccd-26.png)` | 4. CCD and SNR | Obs7 question: Master CCD Signal-to-Noise equation and 3 limiting regimes | [[The CCD equation]] |
| `![obs_ccd-27.png](../assets/images/obs_ccd-27.png)` | 4. CCD and SNR | Obs7 question: Master CCD Signal-to-Noise equation and 3 limiting regimes | [[The CCD equation]] |
| `![obs_ccd-28.png](../assets/images/obs_ccd-28.png)` | 4. CCD and SNR | Obs7 question: Master CCD Signal-to-Noise equation and 3 limiting regimes | [[The CCD equation]] |
| `![obs_ccd-29.png](../assets/images/obs_ccd-29.png)` | 4. CCD and SNR | Obs7 question: Master CCD Signal-to-Noise equation and 3 limiting regimes | [[The CCD equation]] |
| `![obs_ccd-30.png](../assets/images/obs_ccd-30.png)` | 4. CCD and SNR | Obs7 question: Master CCD Signal-to-Noise equation and 3 limiting regimes | [[The CCD equation]] |
| `![obs_ccd-31.png](../assets/images/obs_ccd-31.png)` | 4. CCD and SNR | Aperture photometry, synthetic aperture, sky background annulus subtraction | [[Aperture photometry]] |
| `![obs_ccd-32.png](../assets/images/obs_ccd-32.png)` | 4. CCD and SNR | Aperture photometry, synthetic aperture, sky background annulus subtraction | [[Aperture photometry]] |
| `![obs_ccd-33.png](../assets/images/obs_ccd-33.png)` | 4. CCD and SNR | PSF photometry for crowded fields, DAOPHOT algorithms | [[PSF photometry]] |
| `![obs_ccd-34.png](../assets/images/obs_ccd-34.png)` | 4. CCD and SNR | PSF photometry for crowded fields, DAOPHOT algorithms | [[PSF photometry]] |
| `![obs_ccd-35.png](../assets/images/obs_ccd-35.png)` | 4. CCD and SNR | Calibration pipeline: master bias, dark subtraction, flat-fielding, defringing | [[CCD calibration steps]] |
| `![obs_ccd-36.png](../assets/images/obs_ccd-36.png)` | 4. CCD and SNR | Calibration pipeline: master bias, dark subtraction, flat-fielding, defringing | [[CCD calibration steps]] |
| `![obs_dist-01.png](../assets/images/obs_dist-01.png)` | 5. Distance ladder | Obs1 question: AU calibration, Venus transit, radar ranging, Kepler 3rd law | [[AU calibration parallax and parsec]] |
| `![obs_dist-02.png](../assets/images/obs_dist-02.png)` | 5. Distance ladder | Obs1 question: AU calibration, Venus transit, radar ranging, Kepler 3rd law | [[AU calibration parallax and parsec]] |
| `![obs_dist-03.png](../assets/images/obs_dist-03.png)` | 5. Distance ladder | Obs1 question: AU calibration, Venus transit, radar ranging, Kepler 3rd law | [[AU calibration parallax and parsec]] |
| `![obs_dist-04.png](../assets/images/obs_dist-04.png)` | 5. Distance ladder | Obs1 question: AU calibration, Venus transit, radar ranging, Kepler 3rd law | [[AU calibration parallax and parsec]] |
| `![obs_dist-05.png](../assets/images/obs_dist-05.png)` | 5. Distance ladder | Obs1 question: AU calibration, Venus transit, radar ranging, Kepler 3rd law | [[AU calibration parallax and parsec]] |
| `![obs_dist-06.png](../assets/images/obs_dist-06.png)` | 5. Distance ladder | Obs1 question: AU calibration, Venus transit, radar ranging, Kepler 3rd law | [[AU calibration parallax and parsec]] |
| `![obs_dist-07.png](../assets/images/obs_dist-07.png)` | 5. Distance ladder | Annual stellar parallax, Hipparcos and Gaia micro-arcsecond astrometry | [[Annual stellar parallax]] |
| `![obs_dist-08.png](../assets/images/obs_dist-08.png)` | 5. Distance ladder | Annual stellar parallax, Hipparcos and Gaia micro-arcsecond astrometry | [[Annual stellar parallax]] |
| `![obs_dist-09.png](../assets/images/obs_dist-09.png)` | 5. Distance ladder | Annual stellar parallax, Hipparcos and Gaia micro-arcsecond astrometry | [[Annual stellar parallax]] |
| `![obs_dist-10.png](../assets/images/obs_dist-10.png)` | 5. Distance ladder | Annual stellar parallax, Hipparcos and Gaia micro-arcsecond astrometry | [[Annual stellar parallax]] |
| `![obs_dist-11.png](../assets/images/obs_dist-11.png)` | 5. Distance ladder | Definition of parsec d = 1/p, connection between AU and stellar distance | [[AU calibration parallax and parsec]] |
| `![obs_dist-12.png](../assets/images/obs_dist-12.png)` | 5. Distance ladder | Definition of parsec d = 1/p, connection between AU and stellar distance | [[AU calibration parallax and parsec]] |
| `![obs_dist-13.png](../assets/images/obs_dist-13.png)` | 5. Distance ladder | Cepheid variable stars, Henrietta Leavitt P-L relation, kappa-mechanism | [[Cepheid period-luminosity relation]] |
| `![obs_dist-14.png](../assets/images/obs_dist-14.png)` | 5. Distance ladder | Cepheid variable stars, Henrietta Leavitt P-L relation, kappa-mechanism | [[Cepheid period-luminosity relation]] |
| `![obs_dist-15.png](../assets/images/obs_dist-15.png)` | 5. Distance ladder | Cepheid variable stars, Henrietta Leavitt P-L relation, kappa-mechanism | [[Cepheid period-luminosity relation]] |
| `![obs_dist-16.png](../assets/images/obs_dist-16.png)` | 5. Distance ladder | Cepheid variable stars, Henrietta Leavitt P-L relation, kappa-mechanism | [[Cepheid period-luminosity relation]] |
| `![obs_dist-17.png](../assets/images/obs_dist-17.png)` | 5. Distance ladder | Cepheid variable stars, Henrietta Leavitt P-L relation, kappa-mechanism | [[Cepheid period-luminosity relation]] |
| `![obs_dist-18.png](../assets/images/obs_dist-18.png)` | 5. Distance ladder | Cepheid variable stars, Henrietta Leavitt P-L relation, kappa-mechanism | [[Cepheid period-luminosity relation]] |
| `![obs_dist-19.png](../assets/images/obs_dist-19.png)` | 5. Distance ladder | Standard candles: RR Lyrae, Mira variables, detached eclipsing binaries | [[Variable stars as standard candles]] |
| `![obs_dist-20.png](../assets/images/obs_dist-20.png)` | 5. Distance ladder | Standard candles: RR Lyrae, Mira variables, detached eclipsing binaries | [[Variable stars as standard candles]] |
| `![obs_dist-21.png](../assets/images/obs_dist-21.png)` | 5. Distance ladder | Standard candles: RR Lyrae, Mira variables, detached eclipsing binaries | [[Variable stars as standard candles]] |
| `![obs_dist-22.png](../assets/images/obs_dist-22.png)` | 5. Distance ladder | Standard candles: RR Lyrae, Mira variables, detached eclipsing binaries | [[Variable stars as standard candles]] |
| `![obs_dist-23.png](../assets/images/obs_dist-23.png)` | 5. Distance ladder | Standard candles: RR Lyrae, Mira variables, detached eclipsing binaries | [[Variable stars as standard candles]] |
| `![obs_dist-24.png](../assets/images/obs_dist-24.png)` | 5. Distance ladder | Standard candles: RR Lyrae, Mira variables, detached eclipsing binaries | [[Variable stars as standard candles]] |
| `![obs_dist-25.png](../assets/images/obs_dist-25.png)` | 5. Distance ladder | Spectroscopic parallax, Main Sequence fitting for open star clusters | [[Spectroscopic parallax and main-sequence fitting]] |
| `![obs_dist-26.png](../assets/images/obs_dist-26.png)` | 5. Distance ladder | Spectroscopic parallax, Main Sequence fitting for open star clusters | [[Spectroscopic parallax and main-sequence fitting]] |
| `![obs_dist-27.png](../assets/images/obs_dist-27.png)` | 5. Distance ladder | Spectroscopic parallax, Main Sequence fitting for open star clusters | [[Spectroscopic parallax and main-sequence fitting]] |
| `![obs_dist-28.png](../assets/images/obs_dist-28.png)` | 5. Distance ladder | Spectroscopic parallax, Main Sequence fitting for open star clusters | [[Spectroscopic parallax and main-sequence fitting]] |
| `![obs_dist-29.png](../assets/images/obs_dist-29.png)` | 5. Distance ladder | Spectroscopic parallax, Main Sequence fitting for open star clusters | [[Spectroscopic parallax and main-sequence fitting]] |
| `![obs_dist-30.png](../assets/images/obs_dist-30.png)` | 5. Distance ladder | Spectroscopic parallax, Main Sequence fitting for open star clusters | [[Spectroscopic parallax and main-sequence fitting]] |
| `![obs_dist-31.png](../assets/images/obs_dist-31.png)` | 5. Distance ladder | Moving cluster method, Hyades convergent point kinematics | [[Moving cluster method]] |
| `![obs_dist-32.png](../assets/images/obs_dist-32.png)` | 5. Distance ladder | Moving cluster method, Hyades convergent point kinematics | [[Moving cluster method]] |
| `![obs_dist-33.png](../assets/images/obs_dist-33.png)` | 5. Distance ladder | Moving cluster method, Hyades convergent point kinematics | [[Moving cluster method]] |
| `![obs_dist-34.png](../assets/images/obs_dist-34.png)` | 5. Distance ladder | Moving cluster method, Hyades convergent point kinematics | [[Moving cluster method]] |
| `![obs_dist-35.png](../assets/images/obs_dist-35.png)` | 5. Distance ladder | Tip of the Red Giant Branch (TRGB), core helium flash candle M_I ~ -4.0 | [[TRGB tip of the red giant branch]] |
| `![obs_dist-36.png](../assets/images/obs_dist-36.png)` | 5. Distance ladder | Tip of the Red Giant Branch (TRGB), core helium flash candle M_I ~ -4.0 | [[TRGB tip of the red giant branch]] |
| `![obs_dist-37.png](../assets/images/obs_dist-37.png)` | 5. Distance ladder | Surface Brightness Fluctuations (SBF), Poisson red giant counting statistics | [[Surface brightness fluctuations]] |
| `![obs_dist-38.png](../assets/images/obs_dist-38.png)` | 5. Distance ladder | Surface Brightness Fluctuations (SBF), Poisson red giant counting statistics | [[Surface brightness fluctuations]] |
| `![obs_dist-39.png](../assets/images/obs_dist-39.png)` | 5. Distance ladder | Surface Brightness Fluctuations (SBF), Poisson red giant counting statistics | [[Surface brightness fluctuations]] |
| `![obs_dist-40.png](../assets/images/obs_dist-40.png)` | 5. Distance ladder | Surface Brightness Fluctuations (SBF), Poisson red giant counting statistics | [[Surface brightness fluctuations]] |
| `![obs_dist-41.png](../assets/images/obs_dist-41.png)` | 5. Distance ladder | Tully-Fisher relation for spirals: L proportional to V_max^4 | [[Tully-Fisher relation]] |
| `![obs_dist-42.png](../assets/images/obs_dist-42.png)` | 5. Distance ladder | Tully-Fisher relation for spirals: L proportional to V_max^4 | [[Tully-Fisher relation]] |
| `![obs_dist-43.png](../assets/images/obs_dist-43.png)` | 5. Distance ladder | Fundamental Plane for early-type galaxies: R_e vs sigma vs <I>_e | [[Fundamental plane of ellipticals]] |
| `![obs_dist-44.png](../assets/images/obs_dist-44.png)` | 5. Distance ladder | Fundamental Plane for early-type galaxies: R_e vs sigma vs <I>_e | [[Fundamental plane of ellipticals]] |
| `![obs_dist-45.png](../assets/images/obs_dist-45.png)` | 5. Distance ladder | Type Ia Supernovae, Chandrasekhar mass, Phillips relation, cosmic acceleration | [[Type Ia supernovae as standard candles]] |
| `![obs_dist-46.png](../assets/images/obs_dist-46.png)` | 5. Distance ladder | Type Ia Supernovae, Chandrasekhar mass, Phillips relation, cosmic acceleration | [[Type Ia supernovae as standard candles]] |
| `![obs_dist-47.png](../assets/images/obs_dist-47.png)` | 5. Distance ladder | Type Ia Supernovae, Chandrasekhar mass, Phillips relation, cosmic acceleration | [[Type Ia supernovae as standard candles]] |
| `![obs_dist-48.png](../assets/images/obs_dist-48.png)` | 5. Distance ladder | Type Ia Supernovae, Chandrasekhar mass, Phillips relation, cosmic acceleration | [[Type Ia supernovae as standard candles]] |
| `![obs_dist-49.png](../assets/images/obs_dist-49.png)` | 5. Distance ladder | Type Ia Supernovae, Chandrasekhar mass, Phillips relation, cosmic acceleration | [[Type Ia supernovae as standard candles]] |
| `![obs_dist-50.png](../assets/images/obs_dist-50.png)` | 5. Distance ladder | Type Ia Supernovae, Chandrasekhar mass, Phillips relation, cosmic acceleration | [[Type Ia supernovae as standard candles]] |
| `![obs_dist-51.png](../assets/images/obs_dist-51.png)` | 5. Distance ladder | Type Ia Supernovae, Chandrasekhar mass, Phillips relation, cosmic acceleration | [[Type Ia supernovae as standard candles]] |
| `![obs_dist-52.png](../assets/images/obs_dist-52.png)` | 5. Distance ladder | Type Ia Supernovae, Chandrasekhar mass, Phillips relation, cosmic acceleration | [[Type Ia supernovae as standard candles]] |
| `![obs_dist-53.png](../assets/images/obs_dist-53.png)` | 5. Distance ladder | Type Ia Supernovae, Chandrasekhar mass, Phillips relation, cosmic acceleration | [[Type Ia supernovae as standard candles]] |
| `![obs_dist-54.png](../assets/images/obs_dist-54.png)` | 5. Distance ladder | Type Ia Supernovae, Chandrasekhar mass, Phillips relation, cosmic acceleration | [[Type Ia supernovae as standard candles]] |
| `![obs_dist-55.png](../assets/images/obs_dist-55.png)` | 5. Distance ladder | Type Ia Supernovae, Chandrasekhar mass, Phillips relation, cosmic acceleration | [[Type Ia supernovae as standard candles]] |
| `![obs_dist-56.png](../assets/images/obs_dist-56.png)` | 5. Distance ladder | Type Ia Supernovae, Chandrasekhar mass, Phillips relation, cosmic acceleration | [[Type Ia supernovae as standard candles]] |
| `![obs_dist-57.png](../assets/images/obs_dist-57.png)` | 5. Distance ladder | Obs2 question: Hubble law v = H_0 d, cosmological redshift, Hubble tension | [[Hubble flow distances]] |
| `![obs_dist-58.png](../assets/images/obs_dist-58.png)` | 5. Distance ladder | Obs2 question: Hubble law v = H_0 d, cosmological redshift, Hubble tension | [[Hubble flow distances]] |
| `![obs_dist-59.png](../assets/images/obs_dist-59.png)` | 5. Distance ladder | Obs2 question: Hubble law v = H_0 d, cosmological redshift, Hubble tension | [[Hubble flow distances]] |
| `![obs_dist-60.png](../assets/images/obs_dist-60.png)` | 5. Distance ladder | Obs2 question: Hubble law v = H_0 d, cosmological redshift, Hubble tension | [[Hubble flow distances]] |
| `![obs_dist-61.png](../assets/images/obs_dist-61.png)` | 5. Distance ladder | Obs2 question: Hubble law v = H_0 d, cosmological redshift, Hubble tension | [[Hubble flow distances]] |
| `![obs_dist-62.png](../assets/images/obs_dist-62.png)` | 5. Distance ladder | Obs2 question: Hubble law v = H_0 d, cosmological redshift, Hubble tension | [[Hubble flow distances]] |
| `![obs_dist-63.png](../assets/images/obs_dist-63.png)` | 5. Distance ladder | Obs2 question: Hubble law v = H_0 d, cosmological redshift, Hubble tension | [[Hubble flow distances]] |
| `![obs_dist-64.png](../assets/images/obs_dist-64.png)` | 5. Distance ladder | Obs2 question: Hubble law v = H_0 d, cosmological redshift, Hubble tension | [[Hubble flow distances]] |
| `![obs_dist-65.png](../assets/images/obs_dist-65.png)` | 5. Distance ladder | Obs2 question: Hubble law v = H_0 d, cosmological redshift, Hubble tension | [[Hubble flow distances]] |
| `![obs_dist-66.png](../assets/images/obs_dist-66.png)` | 5. Distance ladder | Obs2 question: Hubble law v = H_0 d, cosmological redshift, Hubble tension | [[Hubble flow distances]] |
| `![obs_dist-67.png](../assets/images/obs_dist-67.png)` | 5. Distance ladder | Obs2 question: Hubble law v = H_0 d, cosmological redshift, Hubble tension | [[Hubble flow distances]] |
| `![obs_dist-68.png](../assets/images/obs_dist-68.png)` | 5. Distance ladder | Obs2 question: Hubble law v = H_0 d, cosmological redshift, Hubble tension | [[Hubble flow distances]] |
| `![obs_dist-69.png](../assets/images/obs_dist-69.png)` | 5. Distance ladder | Distance ladder synthesis, error propagation, cosmological standard rulers | [[Distance ladder derivations]] |
| `![obs_dist-70.png](../assets/images/obs_dist-70.png)` | 5. Distance ladder | Distance ladder synthesis, error propagation, cosmological standard rulers | [[Distance ladder derivations]] |
| `![obs_dist-71.png](../assets/images/obs_dist-71.png)` | 5. Distance ladder | Distance ladder synthesis, error propagation, cosmological standard rulers | [[Distance ladder derivations]] |
| `![obs_dist-72.png](../assets/images/obs_dist-72.png)` | 5. Distance ladder | Distance ladder synthesis, error propagation, cosmological standard rulers | [[Distance ladder derivations]] |
| `![obs_dist-73.png](../assets/images/obs_dist-73.png)` | 5. Distance ladder | Distance ladder synthesis, error propagation, cosmological standard rulers | [[Distance ladder derivations]] |
| `![obs_dist-74.png](../assets/images/obs_dist-74.png)` | 5. Distance ladder | Distance ladder synthesis, error propagation, cosmological standard rulers | [[Distance ladder derivations]] |
| `![obs_dist-75.png](../assets/images/obs_dist-75.png)` | 5. Distance ladder | Distance ladder synthesis, error propagation, cosmological standard rulers | [[Distance ladder derivations]] |
| `![obs_dist-76.png](../assets/images/obs_dist-76.png)` | 5. Distance ladder | Distance ladder synthesis, error propagation, cosmological standard rulers | [[Distance ladder derivations]] |
| `![obs_rad-001.png](../assets/images/obs_rad-001.png)` | 3. Radiative mechanisms, photometric concepts | Specific intensity I_nu, flux F_nu, luminosity L, inverse square law | [[Specific intensity flux luminosity]] |
| `![obs_rad-002.png](../assets/images/obs_rad-002.png)` | 3. Radiative mechanisms, photometric concepts | Specific intensity I_nu, flux F_nu, luminosity L, inverse square law | [[Specific intensity flux luminosity]] |
| `![obs_rad-003.png](../assets/images/obs_rad-003.png)` | 3. Radiative mechanisms, photometric concepts | Specific intensity I_nu, flux F_nu, luminosity L, inverse square law | [[Specific intensity flux luminosity]] |
| `![obs_rad-004.png](../assets/images/obs_rad-004.png)` | 3. Radiative mechanisms, photometric concepts | Specific intensity I_nu, flux F_nu, luminosity L, inverse square law | [[Specific intensity flux luminosity]] |
| `![obs_rad-005.png](../assets/images/obs_rad-005.png)` | 3. Radiative mechanisms, photometric concepts | Specific intensity I_nu, flux F_nu, luminosity L, inverse square law | [[Specific intensity flux luminosity]] |
| `![obs_rad-006.png](../assets/images/obs_rad-006.png)` | 3. Radiative mechanisms, photometric concepts | Specific intensity I_nu, flux F_nu, luminosity L, inverse square law | [[Specific intensity flux luminosity]] |
| `![obs_rad-007.png](../assets/images/obs_rad-007.png)` | 3. Radiative mechanisms, photometric concepts | Specific intensity I_nu, flux F_nu, luminosity L, inverse square law | [[Specific intensity flux luminosity]] |
| `![obs_rad-008.png](../assets/images/obs_rad-008.png)` | 3. Radiative mechanisms, photometric concepts | Specific intensity I_nu, flux F_nu, luminosity L, inverse square law | [[Specific intensity flux luminosity]] |
| `![obs_rad-009.png](../assets/images/obs_rad-009.png)` | 3. Radiative mechanisms, photometric concepts | Specific intensity I_nu, flux F_nu, luminosity L, inverse square law | [[Specific intensity flux luminosity]] |
| `![obs_rad-010.png](../assets/images/obs_rad-010.png)` | 3. Radiative mechanisms, photometric concepts | Specific intensity I_nu, flux F_nu, luminosity L, inverse square law | [[Specific intensity flux luminosity]] |
| `![obs_rad-011.png](../assets/images/obs_rad-011.png)` | 3. Radiative mechanisms, photometric concepts | Specific intensity I_nu, flux F_nu, luminosity L, inverse square law | [[Specific intensity flux luminosity]] |
| `![obs_rad-012.png](../assets/images/obs_rad-012.png)` | 3. Radiative mechanisms, photometric concepts | Specific intensity I_nu, flux F_nu, luminosity L, inverse square law | [[Specific intensity flux luminosity]] |
| `![obs_rad-013.png](../assets/images/obs_rad-013.png)` | 3. Radiative mechanisms, photometric concepts | Specific intensity I_nu, flux F_nu, luminosity L, inverse square law | [[Specific intensity flux luminosity]] |
| `![obs_rad-014.png](../assets/images/obs_rad-014.png)` | 3. Radiative mechanisms, photometric concepts | Specific intensity I_nu, flux F_nu, luminosity L, inverse square law | [[Specific intensity flux luminosity]] |
| `![obs_rad-015.png](../assets/images/obs_rad-015.png)` | 3. Radiative mechanisms, photometric concepts | Specific intensity I_nu, flux F_nu, luminosity L, inverse square law | [[Specific intensity flux luminosity]] |
| `![obs_rad-016.png](../assets/images/obs_rad-016.png)` | 3. Radiative mechanisms, photometric concepts | Specific intensity I_nu, flux F_nu, luminosity L, inverse square law | [[Specific intensity flux luminosity]] |
| `![obs_rad-017.png](../assets/images/obs_rad-017.png)` | 3. Radiative mechanisms, photometric concepts | Blackbody radiation, Planck distribution, Stefan-Boltzmann law, T_eff | [[Blackbody radiation and Stefan-Boltzmann]] |
| `![obs_rad-018.png](../assets/images/obs_rad-018.png)` | 3. Radiative mechanisms, photometric concepts | Blackbody radiation, Planck distribution, Stefan-Boltzmann law, T_eff | [[Blackbody radiation and Stefan-Boltzmann]] |
| `![obs_rad-019.png](../assets/images/obs_rad-019.png)` | 3. Radiative mechanisms, photometric concepts | Blackbody radiation, Planck distribution, Stefan-Boltzmann law, T_eff | [[Blackbody radiation and Stefan-Boltzmann]] |
| `![obs_rad-020.png](../assets/images/obs_rad-020.png)` | 3. Radiative mechanisms, photometric concepts | Blackbody radiation, Planck distribution, Stefan-Boltzmann law, T_eff | [[Blackbody radiation and Stefan-Boltzmann]] |
| `![obs_rad-021.png](../assets/images/obs_rad-021.png)` | 3. Radiative mechanisms, photometric concepts | Blackbody radiation, Planck distribution, Stefan-Boltzmann law, T_eff | [[Blackbody radiation and Stefan-Boltzmann]] |
| `![obs_rad-022.png](../assets/images/obs_rad-022.png)` | 3. Radiative mechanisms, photometric concepts | Blackbody radiation, Planck distribution, Stefan-Boltzmann law, T_eff | [[Blackbody radiation and Stefan-Boltzmann]] |
| `![obs_rad-023.png](../assets/images/obs_rad-023.png)` | 3. Radiative mechanisms, photometric concepts | Blackbody radiation, Planck distribution, Stefan-Boltzmann law, T_eff | [[Blackbody radiation and Stefan-Boltzmann]] |
| `![obs_rad-024.png](../assets/images/obs_rad-024.png)` | 3. Radiative mechanisms, photometric concepts | Blackbody radiation, Planck distribution, Stefan-Boltzmann law, T_eff | [[Blackbody radiation and Stefan-Boltzmann]] |
| `![obs_rad-025.png](../assets/images/obs_rad-025.png)` | 3. Radiative mechanisms, photometric concepts | Blackbody radiation, Planck distribution, Stefan-Boltzmann law, T_eff | [[Blackbody radiation and Stefan-Boltzmann]] |
| `![obs_rad-026.png](../assets/images/obs_rad-026.png)` | 3. Radiative mechanisms, photometric concepts | Blackbody radiation, Planck distribution, Stefan-Boltzmann law, T_eff | [[Blackbody radiation and Stefan-Boltzmann]] |
| `![obs_rad-027.png](../assets/images/obs_rad-027.png)` | 3. Radiative mechanisms, photometric concepts | Wien displacement law derivation, Stefan-Boltzmann derivation | [[Planck law Wien Stefan-Boltzmann]] |
| `![obs_rad-028.png](../assets/images/obs_rad-028.png)` | 3. Radiative mechanisms, photometric concepts | Wien displacement law derivation, Stefan-Boltzmann derivation | [[Planck law Wien Stefan-Boltzmann]] |
| `![obs_rad-029.png](../assets/images/obs_rad-029.png)` | 3. Radiative mechanisms, photometric concepts | Wien displacement law derivation, Stefan-Boltzmann derivation | [[Planck law Wien Stefan-Boltzmann]] |
| `![obs_rad-030.png](../assets/images/obs_rad-030.png)` | 3. Radiative mechanisms, photometric concepts | Wien displacement law derivation, Stefan-Boltzmann derivation | [[Planck law Wien Stefan-Boltzmann]] |
| `![obs_rad-031.png](../assets/images/obs_rad-031.png)` | 3. Radiative mechanisms, photometric concepts | Wien displacement law derivation, Stefan-Boltzmann derivation | [[Planck law Wien Stefan-Boltzmann]] |
| `![obs_rad-032.png](../assets/images/obs_rad-032.png)` | 3. Radiative mechanisms, photometric concepts | Wien displacement law derivation, Stefan-Boltzmann derivation | [[Planck law Wien Stefan-Boltzmann]] |
| `![obs_rad-033.png](../assets/images/obs_rad-033.png)` | 3. Radiative mechanisms, photometric concepts | Obs3 question: Why hot massive stars dominate bolometric and UV luminosity | [[Why hot massive stars dominate luminosity]] |
| `![obs_rad-034.png](../assets/images/obs_rad-034.png)` | 3. Radiative mechanisms, photometric concepts | Obs3 question: Why hot massive stars dominate bolometric and UV luminosity | [[Why hot massive stars dominate luminosity]] |
| `![obs_rad-035.png](../assets/images/obs_rad-035.png)` | 3. Radiative mechanisms, photometric concepts | Obs3 question: Why hot massive stars dominate bolometric and UV luminosity | [[Why hot massive stars dominate luminosity]] |
| `![obs_rad-036.png](../assets/images/obs_rad-036.png)` | 3. Radiative mechanisms, photometric concepts | Obs3 question: Why hot massive stars dominate bolometric and UV luminosity | [[Why hot massive stars dominate luminosity]] |
| `![obs_rad-037.png](../assets/images/obs_rad-037.png)` | 3. Radiative mechanisms, photometric concepts | Stellar spectra, Harvard classification, Saha equation, Balmer line peak | [[Stellar spectra and spectral classification]] |
| `![obs_rad-038.png](../assets/images/obs_rad-038.png)` | 3. Radiative mechanisms, photometric concepts | Stellar spectra, Harvard classification, Saha equation, Balmer line peak | [[Stellar spectra and spectral classification]] |
| `![obs_rad-039.png](../assets/images/obs_rad-039.png)` | 3. Radiative mechanisms, photometric concepts | Stellar spectra, Harvard classification, Saha equation, Balmer line peak | [[Stellar spectra and spectral classification]] |
| `![obs_rad-040.png](../assets/images/obs_rad-040.png)` | 3. Radiative mechanisms, photometric concepts | Stellar spectra, Harvard classification, Saha equation, Balmer line peak | [[Stellar spectra and spectral classification]] |
| `![obs_rad-041.png](../assets/images/obs_rad-041.png)` | 3. Radiative mechanisms, photometric concepts | Stellar spectra, Harvard classification, Saha equation, Balmer line peak | [[Stellar spectra and spectral classification]] |
| `![obs_rad-042.png](../assets/images/obs_rad-042.png)` | 3. Radiative mechanisms, photometric concepts | Stellar spectra, Harvard classification, Saha equation, Balmer line peak | [[Stellar spectra and spectral classification]] |
| `![obs_rad-043.png](../assets/images/obs_rad-043.png)` | 3. Radiative mechanisms, photometric concepts | Stellar spectra, Harvard classification, Saha equation, Balmer line peak | [[Stellar spectra and spectral classification]] |
| `![obs_rad-044.png](../assets/images/obs_rad-044.png)` | 3. Radiative mechanisms, photometric concepts | Stellar spectra, Harvard classification, Saha equation, Balmer line peak | [[Stellar spectra and spectral classification]] |
| `![obs_rad-045.png](../assets/images/obs_rad-045.png)` | 3. Radiative mechanisms, photometric concepts | Obs4 question: Pogson magnitudes, Delta m = 1 flux ratio, Delta m ~ 1.0857 Delta F/F | [[Pogson magnitudes and flux relation]] |
| `![obs_rad-046.png](../assets/images/obs_rad-046.png)` | 3. Radiative mechanisms, photometric concepts | Obs4 question: Pogson magnitudes, Delta m = 1 flux ratio, Delta m ~ 1.0857 Delta F/F | [[Pogson magnitudes and flux relation]] |
| `![obs_rad-047.png](../assets/images/obs_rad-047.png)` | 3. Radiative mechanisms, photometric concepts | Obs4 question: Pogson magnitudes, Delta m = 1 flux ratio, Delta m ~ 1.0857 Delta F/F | [[Pogson magnitudes and flux relation]] |
| `![obs_rad-048.png](../assets/images/obs_rad-048.png)` | 3. Radiative mechanisms, photometric concepts | Obs4 question: Pogson magnitudes, Delta m = 1 flux ratio, Delta m ~ 1.0857 Delta F/F | [[Pogson magnitudes and flux relation]] |
| `![obs_rad-049.png](../assets/images/obs_rad-049.png)` | 3. Radiative mechanisms, photometric concepts | Obs4 question: Pogson magnitudes, Delta m = 1 flux ratio, Delta m ~ 1.0857 Delta F/F | [[Pogson magnitudes and flux relation]] |
| `![obs_rad-050.png](../assets/images/obs_rad-050.png)` | 3. Radiative mechanisms, photometric concepts | Obs4 question: Pogson magnitudes, Delta m = 1 flux ratio, Delta m ~ 1.0857 Delta F/F | [[Pogson magnitudes and flux relation]] |
| `![obs_rad-051.png](../assets/images/obs_rad-051.png)` | 3. Radiative mechanisms, photometric concepts | Obs4 question: Pogson magnitudes, Delta m = 1 flux ratio, Delta m ~ 1.0857 Delta F/F | [[Pogson magnitudes and flux relation]] |
| `![obs_rad-052.png](../assets/images/obs_rad-052.png)` | 3. Radiative mechanisms, photometric concepts | Obs4 question: Pogson magnitudes, Delta m = 1 flux ratio, Delta m ~ 1.0857 Delta F/F | [[Pogson magnitudes and flux relation]] |
| `![obs_rad-053.png](../assets/images/obs_rad-053.png)` | 3. Radiative mechanisms, photometric concepts | Photometric systems: Vega, AB magnitude (3631 Jy), ST system | [[Magnitudes and photometric systems]] |
| `![obs_rad-054.png](../assets/images/obs_rad-054.png)` | 3. Radiative mechanisms, photometric concepts | Photometric systems: Vega, AB magnitude (3631 Jy), ST system | [[Magnitudes and photometric systems]] |
| `![obs_rad-055.png](../assets/images/obs_rad-055.png)` | 3. Radiative mechanisms, photometric concepts | Photometric systems: Vega, AB magnitude (3631 Jy), ST system | [[Magnitudes and photometric systems]] |
| `![obs_rad-056.png](../assets/images/obs_rad-056.png)` | 3. Radiative mechanisms, photometric concepts | Photometric systems: Vega, AB magnitude (3631 Jy), ST system | [[Magnitudes and photometric systems]] |
| `![obs_rad-057.png](../assets/images/obs_rad-057.png)` | 3. Radiative mechanisms, photometric concepts | Photometric systems: Vega, AB magnitude (3631 Jy), ST system | [[Magnitudes and photometric systems]] |
| `![obs_rad-058.png](../assets/images/obs_rad-058.png)` | 3. Radiative mechanisms, photometric concepts | Photometric systems: Vega, AB magnitude (3631 Jy), ST system | [[Magnitudes and photometric systems]] |
| `![obs_rad-059.png](../assets/images/obs_rad-059.png)` | 3. Radiative mechanisms, photometric concepts | Photometric systems: Vega, AB magnitude (3631 Jy), ST system | [[Magnitudes and photometric systems]] |
| `![obs_rad-060.png](../assets/images/obs_rad-060.png)` | 3. Radiative mechanisms, photometric concepts | Photometric systems: Vega, AB magnitude (3631 Jy), ST system | [[Magnitudes and photometric systems]] |
| `![obs_rad-061.png](../assets/images/obs_rad-061.png)` | 3. Radiative mechanisms, photometric concepts | Filter systems: Johnson-Cousins UBVRI, SDSS ugriz, passband convolution | [[Filter systems and bandpasses]] |
| `![obs_rad-062.png](../assets/images/obs_rad-062.png)` | 3. Radiative mechanisms, photometric concepts | Filter systems: Johnson-Cousins UBVRI, SDSS ugriz, passband convolution | [[Filter systems and bandpasses]] |
| `![obs_rad-063.png](../assets/images/obs_rad-063.png)` | 3. Radiative mechanisms, photometric concepts | Filter systems: Johnson-Cousins UBVRI, SDSS ugriz, passband convolution | [[Filter systems and bandpasses]] |
| `![obs_rad-064.png](../assets/images/obs_rad-064.png)` | 3. Radiative mechanisms, photometric concepts | Filter systems: Johnson-Cousins UBVRI, SDSS ugriz, passband convolution | [[Filter systems and bandpasses]] |
| `![obs_rad-065.png](../assets/images/obs_rad-065.png)` | 3. Radiative mechanisms, photometric concepts | Color indices (B - V), blackbody colors, color-color diagrams | [[Color indices]] |
| `![obs_rad-066.png](../assets/images/obs_rad-066.png)` | 3. Radiative mechanisms, photometric concepts | Color indices (B - V), blackbody colors, color-color diagrams | [[Color indices]] |
| `![obs_rad-067.png](../assets/images/obs_rad-067.png)` | 3. Radiative mechanisms, photometric concepts | Color indices (B - V), blackbody colors, color-color diagrams | [[Color indices]] |
| `![obs_rad-068.png](../assets/images/obs_rad-068.png)` | 3. Radiative mechanisms, photometric concepts | Color indices (B - V), blackbody colors, color-color diagrams | [[Color indices]] |
| `![obs_rad-069.png](../assets/images/obs_rad-069.png)` | 3. Radiative mechanisms, photometric concepts | Obs6 question: Photometric system conversion and color terms (SDSS vs Cousins) | [[Photometric system conversion and color terms]] |
| `![obs_rad-070.png](../assets/images/obs_rad-070.png)` | 3. Radiative mechanisms, photometric concepts | Obs6 question: Photometric system conversion and color terms (SDSS vs Cousins) | [[Photometric system conversion and color terms]] |
| `![obs_rad-071.png](../assets/images/obs_rad-071.png)` | 3. Radiative mechanisms, photometric concepts | Obs6 question: Photometric system conversion and color terms (SDSS vs Cousins) | [[Photometric system conversion and color terms]] |
| `![obs_rad-072.png](../assets/images/obs_rad-072.png)` | 3. Radiative mechanisms, photometric concepts | Obs6 question: Photometric system conversion and color terms (SDSS vs Cousins) | [[Photometric system conversion and color terms]] |
| `![obs_rad-073.png](../assets/images/obs_rad-073.png)` | 3. Radiative mechanisms, photometric concepts | Bolometric correction BC, solar values, absolute magnitude | [[Bolometric correction and effective temperature]] |
| `![obs_rad-074.png](../assets/images/obs_rad-074.png)` | 3. Radiative mechanisms, photometric concepts | Bolometric correction BC, solar values, absolute magnitude | [[Bolometric correction and effective temperature]] |
| `![obs_rad-075.png](../assets/images/obs_rad-075.png)` | 3. Radiative mechanisms, photometric concepts | Bolometric correction BC, solar values, absolute magnitude | [[Bolometric correction and effective temperature]] |
| `![obs_rad-076.png](../assets/images/obs_rad-076.png)` | 3. Radiative mechanisms, photometric concepts | Bolometric correction BC, solar values, absolute magnitude | [[Bolometric correction and effective temperature]] |
| `![obs_rad-077.png](../assets/images/obs_rad-077.png)` | 3. Radiative mechanisms, photometric concepts | Obs2 question: Distance modulus mu = m - M = 5 log d - 5 + A_lambda | [[Distance modulus]] |
| `![obs_rad-078.png](../assets/images/obs_rad-078.png)` | 3. Radiative mechanisms, photometric concepts | Obs2 question: Distance modulus mu = m - M = 5 log d - 5 + A_lambda | [[Distance modulus]] |
| `![obs_rad-079.png](../assets/images/obs_rad-079.png)` | 3. Radiative mechanisms, photometric concepts | Obs2 question: Distance modulus mu = m - M = 5 log d - 5 + A_lambda | [[Distance modulus]] |
| `![obs_rad-080.png](../assets/images/obs_rad-080.png)` | 3. Radiative mechanisms, photometric concepts | Obs2 question: Distance modulus mu = m - M = 5 log d - 5 + A_lambda | [[Distance modulus]] |
| `![obs_rad-081.png](../assets/images/obs_rad-081.png)` | 3. Radiative mechanisms, photometric concepts | Interstellar dust absorption, Barnard 68, E(B-V), R_V = 3.1, extinction curves | [[Interstellar absorption]] |
| `![obs_rad-082.png](../assets/images/obs_rad-082.png)` | 3. Radiative mechanisms, photometric concepts | Interstellar dust absorption, Barnard 68, E(B-V), R_V = 3.1, extinction curves | [[Interstellar absorption]] |
| `![obs_rad-083.png](../assets/images/obs_rad-083.png)` | 3. Radiative mechanisms, photometric concepts | Interstellar dust absorption, Barnard 68, E(B-V), R_V = 3.1, extinction curves | [[Interstellar absorption]] |
| `![obs_rad-084.png](../assets/images/obs_rad-084.png)` | 3. Radiative mechanisms, photometric concepts | Interstellar dust absorption, Barnard 68, E(B-V), R_V = 3.1, extinction curves | [[Interstellar absorption]] |
| `![obs_rad-085.png](../assets/images/obs_rad-085.png)` | 3. Radiative mechanisms, photometric concepts | Interstellar dust absorption, Barnard 68, E(B-V), R_V = 3.1, extinction curves | [[Interstellar absorption]] |
| `![obs_rad-086.png](../assets/images/obs_rad-086.png)` | 3. Radiative mechanisms, photometric concepts | Interstellar dust absorption, Barnard 68, E(B-V), R_V = 3.1, extinction curves | [[Interstellar absorption]] |
| `![obs_rad-087.png](../assets/images/obs_rad-087.png)` | 3. Radiative mechanisms, photometric concepts | Interstellar dust absorption, Barnard 68, E(B-V), R_V = 3.1, extinction curves | [[Interstellar absorption]] |
| `![obs_rad-088.png](../assets/images/obs_rad-088.png)` | 3. Radiative mechanisms, photometric concepts | Interstellar dust absorption, Barnard 68, E(B-V), R_V = 3.1, extinction curves | [[Interstellar absorption]] |
| `![obs_rad-089.png](../assets/images/obs_rad-089.png)` | 3. Radiative mechanisms, photometric concepts | Interstellar dust absorption, Barnard 68, E(B-V), R_V = 3.1, extinction curves | [[Interstellar absorption]] |
| `![obs_rad-090.png](../assets/images/obs_rad-090.png)` | 3. Radiative mechanisms, photometric concepts | Interstellar dust absorption, Barnard 68, E(B-V), R_V = 3.1, extinction curves | [[Interstellar absorption]] |
| `![obs_rad-091.png](../assets/images/obs_rad-091.png)` | 3. Radiative mechanisms, photometric concepts | Interstellar dust absorption, Barnard 68, E(B-V), R_V = 3.1, extinction curves | [[Interstellar absorption]] |
| `![obs_rad-092.png](../assets/images/obs_rad-092.png)` | 3. Radiative mechanisms, photometric concepts | Interstellar dust absorption, Barnard 68, E(B-V), R_V = 3.1, extinction curves | [[Interstellar absorption]] |
| `![obs_rad-093.png](../assets/images/obs_rad-093.png)` | 3. Radiative mechanisms, photometric concepts | Obs2/Obs5 question: Balmer decrement (H-alpha / H-beta), Case B, dust excess | [[Balmer decrement]] |
| `![obs_rad-094.png](../assets/images/obs_rad-094.png)` | 3. Radiative mechanisms, photometric concepts | Obs2/Obs5 question: Balmer decrement (H-alpha / H-beta), Case B, dust excess | [[Balmer decrement]] |
| `![obs_rad-095.png](../assets/images/obs_rad-095.png)` | 3. Radiative mechanisms, photometric concepts | Obs2/Obs5 question: Balmer decrement (H-alpha / H-beta), Case B, dust excess | [[Balmer decrement]] |
| `![obs_rad-096.png](../assets/images/obs_rad-096.png)` | 3. Radiative mechanisms, photometric concepts | Obs2/Obs5 question: Balmer decrement (H-alpha / H-beta), Case B, dust excess | [[Balmer decrement]] |
| `![obs_rad-097.png](../assets/images/obs_rad-097.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-098.png](../assets/images/obs_rad-098.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-099.png](../assets/images/obs_rad-099.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-100.png](../assets/images/obs_rad-100.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-101.png](../assets/images/obs_rad-101.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-102.png](../assets/images/obs_rad-102.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-103.png](../assets/images/obs_rad-103.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-104.png](../assets/images/obs_rad-104.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-105.png](../assets/images/obs_rad-105.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-106.png](../assets/images/obs_rad-106.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-107.png](../assets/images/obs_rad-107.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-108.png](../assets/images/obs_rad-108.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-109.png](../assets/images/obs_rad-109.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-110.png](../assets/images/obs_rad-110.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-111.png](../assets/images/obs_rad-111.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-112.png](../assets/images/obs_rad-112.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-113.png](../assets/images/obs_rad-113.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-114.png](../assets/images/obs_rad-114.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-115.png](../assets/images/obs_rad-115.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-116.png](../assets/images/obs_rad-116.png)` | 3. Radiative mechanisms, photometric concepts | Metallicity indicators, bracket notation [Fe/H], UV excess, R23, alpha/Fe | [[Metallicity and chemical evolution]] |
| `![obs_rad-117.png](../assets/images/obs_rad-117.png)` | 3. Radiative mechanisms, photometric concepts | K-correction in optical vs negative K-correction in sub-mm | [[K-correction]] |
| `![obs_rad-118.png](../assets/images/obs_rad-118.png)` | 3. Radiative mechanisms, photometric concepts | K-correction in optical vs negative K-correction in sub-mm | [[K-correction]] |
| `![obs_rad-119.png](../assets/images/obs_rad-119.png)` | 3. Radiative mechanisms, photometric concepts | K-correction in optical vs negative K-correction in sub-mm | [[K-correction]] |
| `![obs_rad-120.png](../assets/images/obs_rad-120.png)` | 3. Radiative mechanisms, photometric concepts | K-correction in optical vs negative K-correction in sub-mm | [[K-correction]] |
| `![obs_rad-121.png](../assets/images/obs_rad-121.png)` | 3. Radiative mechanisms, photometric concepts | K-correction in optical vs negative K-correction in sub-mm | [[K-correction]] |
| `![obs_rad-122.png](../assets/images/obs_rad-122.png)` | 3. Radiative mechanisms, photometric concepts | K-correction in optical vs negative K-correction in sub-mm | [[K-correction]] |
| `![obs_rad-123.png](../assets/images/obs_rad-123.png)` | 3. Radiative mechanisms, photometric concepts | K-correction in optical vs negative K-correction in sub-mm | [[K-correction]] |
| `![obs_sph1-01.png](../assets/images/obs_sph1-01.png)` | 1.1 Spherical astronomy part 1 | Celestial sphere, great vs small circles, spherical angles | [[Celestial sphere and great circles]] |
| `![obs_sph1-02.png](../assets/images/obs_sph1-02.png)` | 1.1 Spherical astronomy part 1 | Celestial sphere, great vs small circles, spherical angles | [[Celestial sphere and great circles]] |
| `![obs_sph1-03.png](../assets/images/obs_sph1-03.png)` | 1.1 Spherical astronomy part 1 | Celestial sphere, great vs small circles, spherical angles | [[Celestial sphere and great circles]] |
| `![obs_sph1-04.png](../assets/images/obs_sph1-04.png)` | 1.1 Spherical astronomy part 1 | Celestial sphere, great vs small circles, spherical angles | [[Celestial sphere and great circles]] |
| `![obs_sph1-05.png](../assets/images/obs_sph1-05.png)` | 1.1 Spherical astronomy part 1 | Spherical trigonometry, law of cosines/sines, coordinate rotations | [[Spherical trigonometry]] |
| `![obs_sph1-06.png](../assets/images/obs_sph1-06.png)` | 1.1 Spherical astronomy part 1 | Spherical trigonometry, law of cosines/sines, coordinate rotations | [[Spherical trigonometry]] |
| `![obs_sph1-07.png](../assets/images/obs_sph1-07.png)` | 1.1 Spherical astronomy part 1 | Spherical trigonometry, law of cosines/sines, coordinate rotations | [[Spherical trigonometry]] |
| `![obs_sph1-08.png](../assets/images/obs_sph1-08.png)` | 1.1 Spherical astronomy part 1 | Spherical trigonometry, law of cosines/sines, coordinate rotations | [[Spherical trigonometry]] |
| `![obs_sph1-09.png](../assets/images/obs_sph1-09.png)` | 1.1 Spherical astronomy part 1 | Spherical trigonometry, law of cosines/sines, coordinate rotations | [[Spherical trigonometry]] |
| `![obs_sph1-10.png](../assets/images/obs_sph1-10.png)` | 1.1 Spherical astronomy part 1 | Spherical trigonometry, law of cosines/sines, coordinate rotations | [[Spherical trigonometry]] |
| `![obs_sph1-11.png](../assets/images/obs_sph1-11.png)` | 1.1 Spherical astronomy part 1 | Spherical excess E = A + B + C - 180 deg, spherical area | [[Celestial sphere and great circles]] |
| `![obs_sph1-12.png](../assets/images/obs_sph1-12.png)` | 1.1 Spherical astronomy part 1 | Spherical excess E = A + B + C - 180 deg, spherical area | [[Celestial sphere and great circles]] |
| `![obs_sph1-13.png](../assets/images/obs_sph1-13.png)` | 1.1 Spherical astronomy part 1 | Earth geographic coordinates, latitude, longitude, spherical distance | [[Earth coordinates]] |
| `![obs_sph1-14.png](../assets/images/obs_sph1-14.png)` | 1.1 Spherical astronomy part 1 | Earth geographic coordinates, latitude, longitude, spherical distance | [[Earth coordinates]] |
| `![obs_sph1-15.png](../assets/images/obs_sph1-15.png)` | 1.1 Spherical astronomy part 1 | Earth geographic coordinates, latitude, longitude, spherical distance | [[Earth coordinates]] |
| `![obs_sph1-16.png](../assets/images/obs_sph1-16.png)` | 1.1 Spherical astronomy part 1 | Earth geographic coordinates, latitude, longitude, spherical distance | [[Earth coordinates]] |
| `![obs_sph1-17.png](../assets/images/obs_sph1-17.png)` | 1.1 Spherical astronomy part 1 | Equatorial coordinate system, RA, Dec, hour angle, local sidereal time | [[Equatorial system]] |
| `![obs_sph1-18.png](../assets/images/obs_sph1-18.png)` | 1.1 Spherical astronomy part 1 | Equatorial coordinate system, RA, Dec, hour angle, local sidereal time | [[Equatorial system]] |
| `![obs_sph1-19.png](../assets/images/obs_sph1-19.png)` | 1.1 Spherical astronomy part 1 | Equatorial coordinate system, RA, Dec, hour angle, local sidereal time | [[Equatorial system]] |
| `![obs_sph1-20.png](../assets/images/obs_sph1-20.png)` | 1.1 Spherical astronomy part 1 | Equatorial coordinate system, RA, Dec, hour angle, local sidereal time | [[Equatorial system]] |
| `![obs_sph1-21.png](../assets/images/obs_sph1-21.png)` | 1.1 Spherical astronomy part 1 | Equatorial coordinate system, RA, Dec, hour angle, local sidereal time | [[Equatorial system]] |
| `![obs_sph1-22.png](../assets/images/obs_sph1-22.png)` | 1.1 Spherical astronomy part 1 | Equatorial coordinate system, RA, Dec, hour angle, local sidereal time | [[Equatorial system]] |
| `![obs_sph1-23.png](../assets/images/obs_sph1-23.png)` | 1.1 Spherical astronomy part 1 | Equatorial coordinate system, RA, Dec, hour angle, local sidereal time | [[Equatorial system]] |
| `![obs_sph1-24.png](../assets/images/obs_sph1-24.png)` | 1.1 Spherical astronomy part 1 | Equatorial coordinate system, RA, Dec, hour angle, local sidereal time | [[Equatorial system]] |
| `![obs_sph1-25.png](../assets/images/obs_sph1-25.png)` | 1.1 Spherical astronomy part 1 | Equatorial coordinate system, RA, Dec, hour angle, local sidereal time | [[Equatorial system]] |
| `![obs_sph1-26.png](../assets/images/obs_sph1-26.png)` | 1.1 Spherical astronomy part 1 | Equatorial coordinate system, RA, Dec, hour angle, local sidereal time | [[Equatorial system]] |
| `![obs_sph1-27.png](../assets/images/obs_sph1-27.png)` | 1.1 Spherical astronomy part 1 | Equatorial coordinate system, RA, Dec, hour angle, local sidereal time | [[Equatorial system]] |
| `![obs_sph1-28.png](../assets/images/obs_sph1-28.png)` | 1.1 Spherical astronomy part 1 | Equatorial coordinate system, RA, Dec, hour angle, local sidereal time | [[Equatorial system]] |
| `![obs_sph1-29.png](../assets/images/obs_sph1-29.png)` | 1.1 Spherical astronomy part 1 | Horizontal alt-azimuth system, zenith, azimuth, altitude | [[Horizontal alt-azimuth system]] |
| `![obs_sph1-30.png](../assets/images/obs_sph1-30.png)` | 1.1 Spherical astronomy part 1 | Horizontal alt-azimuth system, zenith, azimuth, altitude | [[Horizontal alt-azimuth system]] |
| `![obs_sph1-31.png](../assets/images/obs_sph1-31.png)` | 1.1 Spherical astronomy part 1 | Horizontal alt-azimuth system, zenith, azimuth, altitude | [[Horizontal alt-azimuth system]] |
| `![obs_sph1-32.png](../assets/images/obs_sph1-32.png)` | 1.1 Spherical astronomy part 1 | Horizontal alt-azimuth system, zenith, azimuth, altitude | [[Horizontal alt-azimuth system]] |
| `![obs_sph1-33.png](../assets/images/obs_sph1-33.png)` | 1.1 Spherical astronomy part 1 | Culmination, meridian transit, circumpolar stars, rise and set | [[Culmination and rise-set]] |
| `![obs_sph1-34.png](../assets/images/obs_sph1-34.png)` | 1.1 Spherical astronomy part 1 | Culmination, meridian transit, circumpolar stars, rise and set | [[Culmination and rise-set]] |
| `![obs_sph1-35.png](../assets/images/obs_sph1-35.png)` | 1.1 Spherical astronomy part 1 | Culmination, meridian transit, circumpolar stars, rise and set | [[Culmination and rise-set]] |
| `![obs_sph1-36.png](../assets/images/obs_sph1-36.png)` | 1.1 Spherical astronomy part 1 | Culmination, meridian transit, circumpolar stars, rise and set | [[Culmination and rise-set]] |
| `![obs_sph1-37.png](../assets/images/obs_sph1-37.png)` | 1.1 Spherical astronomy part 1 | Culmination, meridian transit, circumpolar stars, rise and set | [[Culmination and rise-set]] |
| `![obs_sph1-38.png](../assets/images/obs_sph1-38.png)` | 1.1 Spherical astronomy part 1 | Culmination, meridian transit, circumpolar stars, rise and set | [[Culmination and rise-set]] |
| `![obs_sph1-39.png](../assets/images/obs_sph1-39.png)` | 1.1 Spherical astronomy part 1 | Culmination, meridian transit, circumpolar stars, rise and set | [[Culmination and rise-set]] |
| `![obs_sph1-40.png](../assets/images/obs_sph1-40.png)` | 1.1 Spherical astronomy part 1 | Culmination, meridian transit, circumpolar stars, rise and set | [[Culmination and rise-set]] |
| `![obs_sph1-41.png](../assets/images/obs_sph1-41.png)` | 1.1 Spherical astronomy part 1 | Transformations between Alt-Az and Equatorial, parallactic angle | [[Alt-azimuth ↔ equatorial transformations]] |
| `![obs_sph1-42.png](../assets/images/obs_sph1-42.png)` | 1.1 Spherical astronomy part 1 | Transformations between Alt-Az and Equatorial, parallactic angle | [[Alt-azimuth ↔ equatorial transformations]] |
| `![obs_sph1-43.png](../assets/images/obs_sph1-43.png)` | 1.1 Spherical astronomy part 1 | Transformations between Alt-Az and Equatorial, parallactic angle | [[Alt-azimuth ↔ equatorial transformations]] |
| `![obs_sph1-44.png](../assets/images/obs_sph1-44.png)` | 1.1 Spherical astronomy part 1 | Transformations between Alt-Az and Equatorial, parallactic angle | [[Alt-azimuth ↔ equatorial transformations]] |
| `![obs_sph1-45.png](../assets/images/obs_sph1-45.png)` | 1.1 Spherical astronomy part 1 | Transformations between Alt-Az and Equatorial, parallactic angle | [[Alt-azimuth ↔ equatorial transformations]] |
| `![obs_sph1-46.png](../assets/images/obs_sph1-46.png)` | 1.1 Spherical astronomy part 1 | Transformations between Alt-Az and Equatorial, parallactic angle | [[Alt-azimuth ↔ equatorial transformations]] |
| `![obs_sph1-47.png](../assets/images/obs_sph1-47.png)` | 1.1 Spherical astronomy part 1 | Transformations between Alt-Az and Equatorial, parallactic angle | [[Alt-azimuth ↔ equatorial transformations]] |
| `![obs_sph1-48.png](../assets/images/obs_sph1-48.png)` | 1.1 Spherical astronomy part 1 | Transformations between Alt-Az and Equatorial, parallactic angle | [[Alt-azimuth ↔ equatorial transformations]] |
| `![obs_sph1-49.png](../assets/images/obs_sph1-49.png)` | 1.1 Spherical astronomy part 1 | Sidereal vs solar time, Equation of Time, timekeeping | [[Sidereal vs solar time]] |
| `![obs_sph1-50.png](../assets/images/obs_sph1-50.png)` | 1.1 Spherical astronomy part 1 | Sidereal vs solar time, Equation of Time, timekeeping | [[Sidereal vs solar time]] |
| `![obs_sph1-51.png](../assets/images/obs_sph1-51.png)` | 1.1 Spherical astronomy part 1 | Sidereal vs solar time, Equation of Time, timekeeping | [[Sidereal vs solar time]] |
| `![obs_sph1-52.png](../assets/images/obs_sph1-52.png)` | 1.1 Spherical astronomy part 1 | Sidereal vs solar time, Equation of Time, timekeeping | [[Sidereal vs solar time]] |
| `![obs_sph1-53.png](../assets/images/obs_sph1-53.png)` | 1.1 Spherical astronomy part 1 | Sidereal vs solar time, Equation of Time, timekeeping | [[Sidereal vs solar time]] |
| `![obs_sph1-54.png](../assets/images/obs_sph1-54.png)` | 1.1 Spherical astronomy part 1 | Sidereal vs solar time, Equation of Time, timekeeping | [[Sidereal vs solar time]] |
| `![obs_sph1-55.png](../assets/images/obs_sph1-55.png)` | 1.1 Spherical astronomy part 1 | Sidereal vs solar time, Equation of Time, timekeeping | [[Sidereal vs solar time]] |
| `![obs_sph1-56.png](../assets/images/obs_sph1-56.png)` | 1.1 Spherical astronomy part 1 | Sidereal vs solar time, Equation of Time, timekeeping | [[Sidereal vs solar time]] |
| `![obs_sph1-57.png](../assets/images/obs_sph1-57.png)` | 1.1 Spherical astronomy part 1 | Sidereal vs solar time, Equation of Time, timekeeping | [[Sidereal vs solar time]] |
| `![obs_sph1-58.png](../assets/images/obs_sph1-58.png)` | 1.1 Spherical astronomy part 1 | Sidereal vs solar time, Equation of Time, timekeeping | [[Sidereal vs solar time]] |
| `![obs_sph1-59.png](../assets/images/obs_sph1-59.png)` | 1.1 Spherical astronomy part 1 | Sidereal vs solar time, Equation of Time, timekeeping | [[Sidereal vs solar time]] |
| `![obs_sph2-01.png](../assets/images/obs_sph2-01.png)` | 1.2 Spherical astronomy part 2 | Time standards (UT, UTC, TAI, TT, TDB), Julian dates, GMST, CIO | [[Time keeping in astronomy]] |
| `![obs_sph2-02.png](../assets/images/obs_sph2-02.png)` | 1.2 Spherical astronomy part 2 | Time standards (UT, UTC, TAI, TT, TDB), Julian dates, GMST, CIO | [[Time keeping in astronomy]] |
| `![obs_sph2-03.png](../assets/images/obs_sph2-03.png)` | 1.2 Spherical astronomy part 2 | Time standards (UT, UTC, TAI, TT, TDB), Julian dates, GMST, CIO | [[Time keeping in astronomy]] |
| `![obs_sph2-04.png](../assets/images/obs_sph2-04.png)` | 1.2 Spherical astronomy part 2 | Time standards (UT, UTC, TAI, TT, TDB), Julian dates, GMST, CIO | [[Time keeping in astronomy]] |
| `![obs_sph2-05.png](../assets/images/obs_sph2-05.png)` | 1.2 Spherical astronomy part 2 | Time standards (UT, UTC, TAI, TT, TDB), Julian dates, GMST, CIO | [[Time keeping in astronomy]] |
| `![obs_sph2-06.png](../assets/images/obs_sph2-06.png)` | 1.2 Spherical astronomy part 2 | Time standards (UT, UTC, TAI, TT, TDB), Julian dates, GMST, CIO | [[Time keeping in astronomy]] |
| `![obs_sph2-07.png](../assets/images/obs_sph2-07.png)` | 1.2 Spherical astronomy part 2 | Time standards (UT, UTC, TAI, TT, TDB), Julian dates, GMST, CIO | [[Time keeping in astronomy]] |
| `![obs_sph2-08.png](../assets/images/obs_sph2-08.png)` | 1.2 Spherical astronomy part 2 | Time standards (UT, UTC, TAI, TT, TDB), Julian dates, GMST, CIO | [[Time keeping in astronomy]] |
| `![obs_sph2-09.png](../assets/images/obs_sph2-09.png)` | 1.2 Spherical astronomy part 2 | Time standards (UT, UTC, TAI, TT, TDB), Julian dates, GMST, CIO | [[Time keeping in astronomy]] |
| `![obs_sph2-10.png](../assets/images/obs_sph2-10.png)` | 1.2 Spherical astronomy part 2 | Time standards (UT, UTC, TAI, TT, TDB), Julian dates, GMST, CIO | [[Time keeping in astronomy]] |
| `![obs_sph2-11.png](../assets/images/obs_sph2-11.png)` | 1.2 Spherical astronomy part 2 | Time standards (UT, UTC, TAI, TT, TDB), Julian dates, GMST, CIO | [[Time keeping in astronomy]] |
| `![obs_sph2-12.png](../assets/images/obs_sph2-12.png)` | 1.2 Spherical astronomy part 2 | Time standards (UT, UTC, TAI, TT, TDB), Julian dates, GMST, CIO | [[Time keeping in astronomy]] |
| `![obs_sph2-13.png](../assets/images/obs_sph2-13.png)` | 1.2 Spherical astronomy part 2 | Time standards (UT, UTC, TAI, TT, TDB), Julian dates, GMST, CIO | [[Time keeping in astronomy]] |
| `![obs_sph2-14.png](../assets/images/obs_sph2-14.png)` | 1.2 Spherical astronomy part 2 | Time standards (UT, UTC, TAI, TT, TDB), Julian dates, GMST, CIO | [[Time keeping in astronomy]] |
| `![obs_sph2-15.png](../assets/images/obs_sph2-15.png)` | 1.2 Spherical astronomy part 2 | Time standards (UT, UTC, TAI, TT, TDB), Julian dates, GMST, CIO | [[Time keeping in astronomy]] |
| `![obs_sph2-16.png](../assets/images/obs_sph2-16.png)` | 1.2 Spherical astronomy part 2 | Time standards (UT, UTC, TAI, TT, TDB), Julian dates, GMST, CIO | [[Time keeping in astronomy]] |
| `![obs_sph2-17.png](../assets/images/obs_sph2-17.png)` | 1.2 Spherical astronomy part 2 | Precession of the equinoxes, lunisolar torque, nutation (18.6 yr) | [[Precession nutation aberration parallax]] |
| `![obs_sph2-18.png](../assets/images/obs_sph2-18.png)` | 1.2 Spherical astronomy part 2 | Precession of the equinoxes, lunisolar torque, nutation (18.6 yr) | [[Precession nutation aberration parallax]] |
| `![obs_sph2-19.png](../assets/images/obs_sph2-19.png)` | 1.2 Spherical astronomy part 2 | Precession of the equinoxes, lunisolar torque, nutation (18.6 yr) | [[Precession nutation aberration parallax]] |
| `![obs_sph2-20.png](../assets/images/obs_sph2-20.png)` | 1.2 Spherical astronomy part 2 | Precession of the equinoxes, lunisolar torque, nutation (18.6 yr) | [[Precession nutation aberration parallax]] |
| `![obs_sph2-21.png](../assets/images/obs_sph2-21.png)` | 1.2 Spherical astronomy part 2 | Ecliptic coordinate system, obliquity of the ecliptic | [[Ecliptic system]] |
| `![obs_sph2-22.png](../assets/images/obs_sph2-22.png)` | 1.2 Spherical astronomy part 2 | Ecliptic coordinate system, obliquity of the ecliptic | [[Ecliptic system]] |
| `![obs_sph2-23.png](../assets/images/obs_sph2-23.png)` | 1.2 Spherical astronomy part 2 | Galactic coordinate system, IAU 1958 standard pole and center | [[Galactic coordinate system]] |
| `![obs_sph2-24.png](../assets/images/obs_sph2-24.png)` | 1.2 Spherical astronomy part 2 | Galactic coordinate system, IAU 1958 standard pole and center | [[Galactic coordinate system]] |
| `![obs_sph2-25.png](../assets/images/obs_sph2-25.png)` | 1.2 Spherical astronomy part 2 | Stellar aberration, aberration constant, annual vs daily aberration | [[Precession nutation aberration parallax]] |
| `![obs_sph2-26.png](../assets/images/obs_sph2-26.png)` | 1.2 Spherical astronomy part 2 | Stellar aberration, aberration constant, annual vs daily aberration | [[Precession nutation aberration parallax]] |
| `![obs_sph2-27.png](../assets/images/obs_sph2-27.png)` | 1.2 Spherical astronomy part 2 | Stellar aberration, aberration constant, annual vs daily aberration | [[Precession nutation aberration parallax]] |
| `![obs_sph2-28.png](../assets/images/obs_sph2-28.png)` | 1.2 Spherical astronomy part 2 | Stellar aberration, aberration constant, annual vs daily aberration | [[Precession nutation aberration parallax]] |
| `![obs_sph2-29.png](../assets/images/obs_sph2-29.png)` | 1.2 Spherical astronomy part 2 | Atmospheric dispersion, differential refraction, ADC design | [[Atmospheric dispersion]] |
| `![obs_sph2-30.png](../assets/images/obs_sph2-30.png)` | 1.2 Spherical astronomy part 2 | Atmospheric dispersion, differential refraction, ADC design | [[Atmospheric dispersion]] |
| `![obs_sph2-31.png](../assets/images/obs_sph2-31.png)` | 1.2 Spherical astronomy part 2 | Atmospheric refraction, Snell law in plane-parallel atmosphere | [[Atmospheric refraction]] |
| `![obs_sph2-32.png](../assets/images/obs_sph2-32.png)` | 1.2 Spherical astronomy part 2 | Proper motion, tangential velocity, Doppler radial velocity, space velocity | [[Proper motion and stellar kinematics]] |
| `![obs_sph2-33.png](../assets/images/obs_sph2-33.png)` | 1.2 Spherical astronomy part 2 | Proper motion, tangential velocity, Doppler radial velocity, space velocity | [[Proper motion and stellar kinematics]] |
| `![obs_sps-01.png](../assets/images/obs_sps-01.png)` | 7. Population synthesis | Stellar population synthesis principles, convolution integral, D_4000 break | [[Stellar population synthesis]] |
| `![obs_sps-02.png](../assets/images/obs_sps-02.png)` | 7. Population synthesis | Stellar population synthesis principles, convolution integral, D_4000 break | [[Stellar population synthesis]] |
| `![obs_sps-03.png](../assets/images/obs_sps-03.png)` | 7. Population synthesis | Stellar population synthesis principles, convolution integral, D_4000 break | [[Stellar population synthesis]] |
| `![obs_sps-04.png](../assets/images/obs_sps-04.png)` | 7. Population synthesis | Stellar population synthesis principles, convolution integral, D_4000 break | [[Stellar population synthesis]] |
| `![obs_sps-05.png](../assets/images/obs_sps-05.png)` | 7. Population synthesis | Stellar population synthesis principles, convolution integral, D_4000 break | [[Stellar population synthesis]] |
| `![obs_sps-06.png](../assets/images/obs_sps-06.png)` | 7. Population synthesis | Stellar population synthesis principles, convolution integral, D_4000 break | [[Stellar population synthesis]] |
| `![obs_sps-07.png](../assets/images/obs_sps-07.png)` | 7. Population synthesis | Stellar population synthesis principles, convolution integral, D_4000 break | [[Stellar population synthesis]] |
| `![obs_sps-08.png](../assets/images/obs_sps-08.png)` | 7. Population synthesis | Stellar population synthesis principles, convolution integral, D_4000 break | [[Stellar population synthesis]] |
| `![obs_sps-09.png](../assets/images/obs_sps-09.png)` | 7. Population synthesis | Stellar population synthesis principles, convolution integral, D_4000 break | [[Stellar population synthesis]] |
| `![obs_sps-10.png](../assets/images/obs_sps-10.png)` | 7. Population synthesis | Stellar population synthesis principles, convolution integral, D_4000 break | [[Stellar population synthesis]] |
| `![obs_sps-11.png](../assets/images/obs_sps-11.png)` | 7. Population synthesis | Stellar population synthesis principles, convolution integral, D_4000 break | [[Stellar population synthesis]] |
| `![obs_sps-12.png](../assets/images/obs_sps-12.png)` | 7. Population synthesis | Stellar population synthesis principles, convolution integral, D_4000 break | [[Stellar population synthesis]] |
| `![obs_sps-13.png](../assets/images/obs_sps-13.png)` | 7. Population synthesis | Simple Stellar Population (SSP) basis brick, isochrones, stellar libraries | [[Single stellar population SSP]] |
| `![obs_sps-14.png](../assets/images/obs_sps-14.png)` | 7. Population synthesis | Simple Stellar Population (SSP) basis brick, isochrones, stellar libraries | [[Single stellar population SSP]] |
| `![obs_sps-15.png](../assets/images/obs_sps-15.png)` | 7. Population synthesis | Simple Stellar Population (SSP) basis brick, isochrones, stellar libraries | [[Single stellar population SSP]] |
| `![obs_sps-16.png](../assets/images/obs_sps-16.png)` | 7. Population synthesis | Simple Stellar Population (SSP) basis brick, isochrones, stellar libraries | [[Single stellar population SSP]] |
| `![obs_sps-17.png](../assets/images/obs_sps-17.png)` | 7. Population synthesis | Simple Stellar Population (SSP) basis brick, isochrones, stellar libraries | [[Single stellar population SSP]] |
| `![obs_sps-18.png](../assets/images/obs_sps-18.png)` | 7. Population synthesis | Simple Stellar Population (SSP) basis brick, isochrones, stellar libraries | [[Single stellar population SSP]] |
| `![obs_sps-19.png](../assets/images/obs_sps-19.png)` | 7. Population synthesis | SPS code taxonomy (BC03, Maraston M05, FSPS), TP-AGB fuel consumption | [[SPS code families]] |
| `![obs_sps-20.png](../assets/images/obs_sps-20.png)` | 7. Population synthesis | SPS code taxonomy (BC03, Maraston M05, FSPS), TP-AGB fuel consumption | [[SPS code families]] |
| `![obs_sps-21.png](../assets/images/obs_sps-21.png)` | 7. Population synthesis | SPS code taxonomy (BC03, Maraston M05, FSPS), TP-AGB fuel consumption | [[SPS code families]] |
| `![obs_sps-22.png](../assets/images/obs_sps-22.png)` | 7. Population synthesis | SPS code taxonomy (BC03, Maraston M05, FSPS), TP-AGB fuel consumption | [[SPS code families]] |
| `![obs_sps-23.png](../assets/images/obs_sps-23.png)` | 7. Population synthesis | SPS code taxonomy (BC03, Maraston M05, FSPS), TP-AGB fuel consumption | [[SPS code families]] |
| `![obs_sps-24.png](../assets/images/obs_sps-24.png)` | 7. Population synthesis | SPS code taxonomy (BC03, Maraston M05, FSPS), TP-AGB fuel consumption | [[SPS code families]] |
| `![obs_sps-25.png](../assets/images/obs_sps-25.png)` | 7. Population synthesis | SED fitting inverse modeling, dust energy balance, stellar mass from NIR | [[SED fitting basics]] |
| `![obs_sps-26.png](../assets/images/obs_sps-26.png)` | 7. Population synthesis | SED fitting inverse modeling, dust energy balance, stellar mass from NIR | [[SED fitting basics]] |
| `![obs_sps-27.png](../assets/images/obs_sps-27.png)` | 7. Population synthesis | SED fitting inverse modeling, dust energy balance, stellar mass from NIR | [[SED fitting basics]] |
| `![obs_sps-28.png](../assets/images/obs_sps-28.png)` | 7. Population synthesis | SED fitting inverse modeling, dust energy balance, stellar mass from NIR | [[SED fitting basics]] |
| `![obs_sps-29.png](../assets/images/obs_sps-29.png)` | 7. Population synthesis | SED fitting inverse modeling, dust energy balance, stellar mass from NIR | [[SED fitting basics]] |
| `![obs_sps-30.png](../assets/images/obs_sps-30.png)` | 7. Population synthesis | SED fitting inverse modeling, dust energy balance, stellar mass from NIR | [[SED fitting basics]] |
| `![obs_sps-31.png](../assets/images/obs_sps-31.png)` | 7. Population synthesis | SED fitting inverse modeling, dust energy balance, stellar mass from NIR | [[SED fitting basics]] |
| `![obs_sps-32.png](../assets/images/obs_sps-32.png)` | 7. Population synthesis | SED fitting inverse modeling, dust energy balance, stellar mass from NIR | [[SED fitting basics]] |
| `![obs_sps-33.png](../assets/images/obs_sps-33.png)` | 7. Population synthesis | SED fitting inverse modeling, dust energy balance, stellar mass from NIR | [[SED fitting basics]] |
| `![obs_sps-34.png](../assets/images/obs_sps-34.png)` | 7. Population synthesis | SED fitting inverse modeling, dust energy balance, stellar mass from NIR | [[SED fitting basics]] |
| `![obs_sps-35.png](../assets/images/obs_sps-35.png)` | 7. Population synthesis | SED fitting inverse modeling, dust energy balance, stellar mass from NIR | [[SED fitting basics]] |
| `![obs_sps-36.png](../assets/images/obs_sps-36.png)` | 7. Population synthesis | SED fitting inverse modeling, dust energy balance, stellar mass from NIR | [[SED fitting basics]] |
| `![obs_sps-37.png](../assets/images/obs_sps-37.png)` | 7. Population synthesis | Lick/IDS index system, pseudo-equivalent widths (H-beta, Mg_b, Fe5270) | [[Lick indices]] |
| `![obs_sps-38.png](../assets/images/obs_sps-38.png)` | 7. Population synthesis | Lick/IDS index system, pseudo-equivalent widths (H-beta, Mg_b, Fe5270) | [[Lick indices]] |
| `![obs_sps-39.png](../assets/images/obs_sps-39.png)` | 7. Population synthesis | Lick/IDS index system, pseudo-equivalent widths (H-beta, Mg_b, Fe5270) | [[Lick indices]] |
| `![obs_sps-40.png](../assets/images/obs_sps-40.png)` | 7. Population synthesis | Lick/IDS index system, pseudo-equivalent widths (H-beta, Mg_b, Fe5270) | [[Lick indices]] |
| `![obs_sps-41.png](../assets/images/obs_sps-41.png)` | 7. Population synthesis | Age-metallicity degeneracy, Worthey 3/2 rule, [MgFe] prime index | [[Age-metallicity degeneracy]] |
| `![obs_sps-42.png](../assets/images/obs_sps-42.png)` | 7. Population synthesis | Age-metallicity degeneracy, Worthey 3/2 rule, [MgFe] prime index | [[Age-metallicity degeneracy]] |
| `![obs_sps-43.png](../assets/images/obs_sps-43.png)` | 7. Population synthesis | Age-metallicity degeneracy, Worthey 3/2 rule, [MgFe] prime index | [[Age-metallicity degeneracy]] |
| `![obs_sps-44.png](../assets/images/obs_sps-44.png)` | 7. Population synthesis | Age-metallicity degeneracy, Worthey 3/2 rule, [MgFe] prime index | [[Age-metallicity degeneracy]] |
| `![obs_sps-45.png](../assets/images/obs_sps-45.png)` | 7. Population synthesis | Photometric redshifts, template fitting, EAZY, catastrophic outliers | [[Photometric redshifts]] |
| `![obs_sps-46.png](../assets/images/obs_sps-46.png)` | 7. Population synthesis | Photometric redshifts, template fitting, EAZY, catastrophic outliers | [[Photometric redshifts]] |
| `![obs_sps-47.png](../assets/images/obs_sps-47.png)` | 7. Population synthesis | Photometric redshifts, template fitting, EAZY, catastrophic outliers | [[Photometric redshifts]] |
| `![obs_sps-48.png](../assets/images/obs_sps-48.png)` | 7. Population synthesis | Photometric redshifts, template fitting, EAZY, catastrophic outliers | [[Photometric redshifts]] |
| `![obs_sps-49.png](../assets/images/obs_sps-49.png)` | 7. Population synthesis | Obs5/Obs7 question: Star Formation Rate tracers across multi-wavelength regimes | [[SFR tracers from population synthesis]] |
| `![obs_sps-50.png](../assets/images/obs_sps-50.png)` | 7. Population synthesis | Obs5/Obs7 question: Star Formation Rate tracers across multi-wavelength regimes | [[SFR tracers from population synthesis]] |
| `![obs_sps-51.png](../assets/images/obs_sps-51.png)` | 7. Population synthesis | Obs5/Obs7 question: Star Formation Rate tracers across multi-wavelength regimes | [[SFR tracers from population synthesis]] |
| `![obs_sps-52.png](../assets/images/obs_sps-52.png)` | 7. Population synthesis | Rest-frame non-ionizing UV continuum SFR tracer, dust attenuation slope beta | [[UV SFR tracer]] |
| `![obs_sps-53.png](../assets/images/obs_sps-53.png)` | 7. Population synthesis | Rest-frame non-ionizing UV continuum SFR tracer, dust attenuation slope beta | [[UV SFR tracer]] |
| `![obs_sps-54.png](../assets/images/obs_sps-54.png)` | 7. Population synthesis | Rest-frame non-ionizing UV continuum SFR tracer, dust attenuation slope beta | [[UV SFR tracer]] |
| `![obs_stars-001.png](../assets/images/obs_stars-001.png)` | 6. Stars and stellar populations | HR diagram, observational CMD, lines of constant radius, stellar families | [[HR diagram]] |
| `![obs_stars-002.png](../assets/images/obs_stars-002.png)` | 6. Stars and stellar populations | HR diagram, observational CMD, lines of constant radius, stellar families | [[HR diagram]] |
| `![obs_stars-003.png](../assets/images/obs_stars-003.png)` | 6. Stars and stellar populations | HR diagram, observational CMD, lines of constant radius, stellar families | [[HR diagram]] |
| `![obs_stars-004.png](../assets/images/obs_stars-004.png)` | 6. Stars and stellar populations | HR diagram, observational CMD, lines of constant radius, stellar families | [[HR diagram]] |
| `![obs_stars-005.png](../assets/images/obs_stars-005.png)` | 6. Stars and stellar populations | HR diagram, observational CMD, lines of constant radius, stellar families | [[HR diagram]] |
| `![obs_stars-006.png](../assets/images/obs_stars-006.png)` | 6. Stars and stellar populations | HR diagram, observational CMD, lines of constant radius, stellar families | [[HR diagram]] |
| `![obs_stars-007.png](../assets/images/obs_stars-007.png)` | 6. Stars and stellar populations | HR diagram, observational CMD, lines of constant radius, stellar families | [[HR diagram]] |
| `![obs_stars-008.png](../assets/images/obs_stars-008.png)` | 6. Stars and stellar populations | HR diagram, observational CMD, lines of constant radius, stellar families | [[HR diagram]] |
| `![obs_stars-009.png](../assets/images/obs_stars-009.png)` | 6. Stars and stellar populations | HR diagram, observational CMD, lines of constant radius, stellar families | [[HR diagram]] |
| `![obs_stars-010.png](../assets/images/obs_stars-010.png)` | 6. Stars and stellar populations | HR diagram, observational CMD, lines of constant radius, stellar families | [[HR diagram]] |
| `![obs_stars-011.png](../assets/images/obs_stars-011.png)` | 6. Stars and stellar populations | HR diagram, observational CMD, lines of constant radius, stellar families | [[HR diagram]] |
| `![obs_stars-012.png](../assets/images/obs_stars-012.png)` | 6. Stars and stellar populations | HR diagram, observational CMD, lines of constant radius, stellar families | [[HR diagram]] |
| `![obs_stars-013.png](../assets/images/obs_stars-013.png)` | 6. Stars and stellar populations | HR diagram, observational CMD, lines of constant radius, stellar families | [[HR diagram]] |
| `![obs_stars-014.png](../assets/images/obs_stars-014.png)` | 6. Stars and stellar populations | HR diagram, observational CMD, lines of constant radius, stellar families | [[HR diagram]] |
| `![obs_stars-015.png](../assets/images/obs_stars-015.png)` | 6. Stars and stellar populations | HR diagram, observational CMD, lines of constant radius, stellar families | [[HR diagram]] |
| `![obs_stars-016.png](../assets/images/obs_stars-016.png)` | 6. Stars and stellar populations | HR diagram, observational CMD, lines of constant radius, stellar families | [[HR diagram]] |
| `![obs_stars-017.png](../assets/images/obs_stars-017.png)` | 6. Stars and stellar populations | Main sequence, giants, supergiants, white dwarfs, Schonberg-Chandrasekhar limit | [[Main sequence, giants, supergiants, white dwarfs]] |
| `![obs_stars-018.png](../assets/images/obs_stars-018.png)` | 6. Stars and stellar populations | Main sequence, giants, supergiants, white dwarfs, Schonberg-Chandrasekhar limit | [[Main sequence, giants, supergiants, white dwarfs]] |
| `![obs_stars-019.png](../assets/images/obs_stars-019.png)` | 6. Stars and stellar populations | Main sequence, giants, supergiants, white dwarfs, Schonberg-Chandrasekhar limit | [[Main sequence, giants, supergiants, white dwarfs]] |
| `![obs_stars-020.png](../assets/images/obs_stars-020.png)` | 6. Stars and stellar populations | Main sequence, giants, supergiants, white dwarfs, Schonberg-Chandrasekhar limit | [[Main sequence, giants, supergiants, white dwarfs]] |
| `![obs_stars-021.png](../assets/images/obs_stars-021.png)` | 6. Stars and stellar populations | Main sequence, giants, supergiants, white dwarfs, Schonberg-Chandrasekhar limit | [[Main sequence, giants, supergiants, white dwarfs]] |
| `![obs_stars-022.png](../assets/images/obs_stars-022.png)` | 6. Stars and stellar populations | Main sequence, giants, supergiants, white dwarfs, Schonberg-Chandrasekhar limit | [[Main sequence, giants, supergiants, white dwarfs]] |
| `![obs_stars-023.png](../assets/images/obs_stars-023.png)` | 6. Stars and stellar populations | Main sequence, giants, supergiants, white dwarfs, Schonberg-Chandrasekhar limit | [[Main sequence, giants, supergiants, white dwarfs]] |
| `![obs_stars-024.png](../assets/images/obs_stars-024.png)` | 6. Stars and stellar populations | Main sequence, giants, supergiants, white dwarfs, Schonberg-Chandrasekhar limit | [[Main sequence, giants, supergiants, white dwarfs]] |
| `![obs_stars-025.png](../assets/images/obs_stars-025.png)` | 6. Stars and stellar populations | Stellar scaling relations, hydrostatic equilibrium P_c ~ M^2/R^4 | [[Stellar scaling relations]] |
| `![obs_stars-026.png](../assets/images/obs_stars-026.png)` | 6. Stars and stellar populations | Stellar scaling relations, hydrostatic equilibrium P_c ~ M^2/R^4 | [[Stellar scaling relations]] |
| `![obs_stars-027.png](../assets/images/obs_stars-027.png)` | 6. Stars and stellar populations | Stellar scaling relations, hydrostatic equilibrium P_c ~ M^2/R^4 | [[Stellar scaling relations]] |
| `![obs_stars-028.png](../assets/images/obs_stars-028.png)` | 6. Stars and stellar populations | Stellar scaling relations, hydrostatic equilibrium P_c ~ M^2/R^4 | [[Stellar scaling relations]] |
| `![obs_stars-029.png](../assets/images/obs_stars-029.png)` | 6. Stars and stellar populations | Stellar scaling relations, hydrostatic equilibrium P_c ~ M^2/R^4 | [[Stellar scaling relations]] |
| `![obs_stars-030.png](../assets/images/obs_stars-030.png)` | 6. Stars and stellar populations | Stellar scaling relations, hydrostatic equilibrium P_c ~ M^2/R^4 | [[Stellar scaling relations]] |
| `![obs_stars-031.png](../assets/images/obs_stars-031.png)` | 6. Stars and stellar populations | Empirical Mass-Luminosity relation across mass regimes, Eddington limit | [[Mass-luminosity relation]] |
| `![obs_stars-032.png](../assets/images/obs_stars-032.png)` | 6. Stars and stellar populations | Empirical Mass-Luminosity relation across mass regimes, Eddington limit | [[Mass-luminosity relation]] |
| `![obs_stars-033.png](../assets/images/obs_stars-033.png)` | 6. Stars and stellar populations | Empirical Mass-Luminosity relation across mass regimes, Eddington limit | [[Mass-luminosity relation]] |
| `![obs_stars-034.png](../assets/images/obs_stars-034.png)` | 6. Stars and stellar populations | Empirical Mass-Luminosity relation across mass regimes, Eddington limit | [[Mass-luminosity relation]] |
| `![obs_stars-035.png](../assets/images/obs_stars-035.png)` | 6. Stars and stellar populations | Empirical Mass-Luminosity relation across mass regimes, Eddington limit | [[Mass-luminosity relation]] |
| `![obs_stars-036.png](../assets/images/obs_stars-036.png)` | 6. Stars and stellar populations | Empirical Mass-Luminosity relation across mass regimes, Eddington limit | [[Mass-luminosity relation]] |
| `![obs_stars-037.png](../assets/images/obs_stars-037.png)` | 6. Stars and stellar populations | Stellar timescales: t_dyn << t_KH << t_nuc, MS lifetime tau_MS ~ M^(-2.5) | [[Stellar evolution timescales]] |
| `![obs_stars-038.png](../assets/images/obs_stars-038.png)` | 6. Stars and stellar populations | Stellar timescales: t_dyn << t_KH << t_nuc, MS lifetime tau_MS ~ M^(-2.5) | [[Stellar evolution timescales]] |
| `![obs_stars-039.png](../assets/images/obs_stars-039.png)` | 6. Stars and stellar populations | Stellar timescales: t_dyn << t_KH << t_nuc, MS lifetime tau_MS ~ M^(-2.5) | [[Stellar evolution timescales]] |
| `![obs_stars-040.png](../assets/images/obs_stars-040.png)` | 6. Stars and stellar populations | Stellar timescales: t_dyn << t_KH << t_nuc, MS lifetime tau_MS ~ M^(-2.5) | [[Stellar evolution timescales]] |
| `![obs_stars-041.png](../assets/images/obs_stars-041.png)` | 6. Stars and stellar populations | Stellar timescales: t_dyn << t_KH << t_nuc, MS lifetime tau_MS ~ M^(-2.5) | [[Stellar evolution timescales]] |
| `![obs_stars-042.png](../assets/images/obs_stars-042.png)` | 6. Stars and stellar populations | Stellar timescales: t_dyn << t_KH << t_nuc, MS lifetime tau_MS ~ M^(-2.5) | [[Stellar evolution timescales]] |
| `![obs_stars-043.png](../assets/images/obs_stars-043.png)` | 6. Stars and stellar populations | Stellar timescales: t_dyn << t_KH << t_nuc, MS lifetime tau_MS ~ M^(-2.5) | [[Stellar evolution timescales]] |
| `![obs_stars-044.png](../assets/images/obs_stars-044.png)` | 6. Stars and stellar populations | Stellar timescales: t_dyn << t_KH << t_nuc, MS lifetime tau_MS ~ M^(-2.5) | [[Stellar evolution timescales]] |
| `![obs_stars-045.png](../assets/images/obs_stars-045.png)` | 6. Stars and stellar populations | Stellar timescales: t_dyn << t_KH << t_nuc, MS lifetime tau_MS ~ M^(-2.5) | [[Stellar evolution timescales]] |
| `![obs_stars-046.png](../assets/images/obs_stars-046.png)` | 6. Stars and stellar populations | Stellar timescales: t_dyn << t_KH << t_nuc, MS lifetime tau_MS ~ M^(-2.5) | [[Stellar evolution timescales]] |
| `![obs_stars-047.png](../assets/images/obs_stars-047.png)` | 6. Stars and stellar populations | Stellar timescales: t_dyn << t_KH << t_nuc, MS lifetime tau_MS ~ M^(-2.5) | [[Stellar evolution timescales]] |
| `![obs_stars-048.png](../assets/images/obs_stars-048.png)` | 6. Stars and stellar populations | Stellar timescales: t_dyn << t_KH << t_nuc, MS lifetime tau_MS ~ M^(-2.5) | [[Stellar evolution timescales]] |
| `![obs_stars-049.png](../assets/images/obs_stars-049.png)` | 6. Stars and stellar populations | Post-MS solar evolution, RGB, helium flash, AGB, planetary nebula, white dwarf | [[Solar evolution and final stages]] |
| `![obs_stars-050.png](../assets/images/obs_stars-050.png)` | 6. Stars and stellar populations | Post-MS solar evolution, RGB, helium flash, AGB, planetary nebula, white dwarf | [[Solar evolution and final stages]] |
| `![obs_stars-051.png](../assets/images/obs_stars-051.png)` | 6. Stars and stellar populations | Post-MS solar evolution, RGB, helium flash, AGB, planetary nebula, white dwarf | [[Solar evolution and final stages]] |
| `![obs_stars-052.png](../assets/images/obs_stars-052.png)` | 6. Stars and stellar populations | Post-MS solar evolution, RGB, helium flash, AGB, planetary nebula, white dwarf | [[Solar evolution and final stages]] |
| `![obs_stars-053.png](../assets/images/obs_stars-053.png)` | 6. Stars and stellar populations | Post-MS solar evolution, RGB, helium flash, AGB, planetary nebula, white dwarf | [[Solar evolution and final stages]] |
| `![obs_stars-054.png](../assets/images/obs_stars-054.png)` | 6. Stars and stellar populations | Post-MS solar evolution, RGB, helium flash, AGB, planetary nebula, white dwarf | [[Solar evolution and final stages]] |
| `![obs_stars-055.png](../assets/images/obs_stars-055.png)` | 6. Stars and stellar populations | Post-MS solar evolution, RGB, helium flash, AGB, planetary nebula, white dwarf | [[Solar evolution and final stages]] |
| `![obs_stars-056.png](../assets/images/obs_stars-056.png)` | 6. Stars and stellar populations | Post-MS solar evolution, RGB, helium flash, AGB, planetary nebula, white dwarf | [[Solar evolution and final stages]] |
| `![obs_stars-057.png](../assets/images/obs_stars-057.png)` | 6. Stars and stellar populations | Post-MS solar evolution, RGB, helium flash, AGB, planetary nebula, white dwarf | [[Solar evolution and final stages]] |
| `![obs_stars-058.png](../assets/images/obs_stars-058.png)` | 6. Stars and stellar populations | Post-MS solar evolution, RGB, helium flash, AGB, planetary nebula, white dwarf | [[Solar evolution and final stages]] |
| `![obs_stars-059.png](../assets/images/obs_stars-059.png)` | 6. Stars and stellar populations | Post-MS solar evolution, RGB, helium flash, AGB, planetary nebula, white dwarf | [[Solar evolution and final stages]] |
| `![obs_stars-060.png](../assets/images/obs_stars-060.png)` | 6. Stars and stellar populations | Post-MS solar evolution, RGB, helium flash, AGB, planetary nebula, white dwarf | [[Solar evolution and final stages]] |
| `![obs_stars-061.png](../assets/images/obs_stars-061.png)` | 6. Stars and stellar populations | Post-MS solar evolution, RGB, helium flash, AGB, planetary nebula, white dwarf | [[Solar evolution and final stages]] |
| `![obs_stars-062.png](../assets/images/obs_stars-062.png)` | 6. Stars and stellar populations | Post-MS solar evolution, RGB, helium flash, AGB, planetary nebula, white dwarf | [[Solar evolution and final stages]] |
| `![obs_stars-063.png](../assets/images/obs_stars-063.png)` | 6. Stars and stellar populations | Post-MS solar evolution, RGB, helium flash, AGB, planetary nebula, white dwarf | [[Solar evolution and final stages]] |
| `![obs_stars-064.png](../assets/images/obs_stars-064.png)` | 6. Stars and stellar populations | Post-MS solar evolution, RGB, helium flash, AGB, planetary nebula, white dwarf | [[Solar evolution and final stages]] |
| `![obs_stars-065.png](../assets/images/obs_stars-065.png)` | 6. Stars and stellar populations | Color-magnitude diagrams of open and globular star clusters | [[Color-magnitude diagrams of clusters]] |
| `![obs_stars-066.png](../assets/images/obs_stars-066.png)` | 6. Stars and stellar populations | Color-magnitude diagrams of open and globular star clusters | [[Color-magnitude diagrams of clusters]] |
| `![obs_stars-067.png](../assets/images/obs_stars-067.png)` | 6. Stars and stellar populations | Color-magnitude diagrams of open and globular star clusters | [[Color-magnitude diagrams of clusters]] |
| `![obs_stars-068.png](../assets/images/obs_stars-068.png)` | 6. Stars and stellar populations | Color-magnitude diagrams of open and globular star clusters | [[Color-magnitude diagrams of clusters]] |
| `![obs_stars-069.png](../assets/images/obs_stars-069.png)` | 6. Stars and stellar populations | Cluster age determination from Main Sequence Turn-Off (MSTO) point | [[Cluster ages from CMD turnoff]] |
| `![obs_stars-070.png](../assets/images/obs_stars-070.png)` | 6. Stars and stellar populations | Cluster age determination from Main Sequence Turn-Off (MSTO) point | [[Cluster ages from CMD turnoff]] |
| `![obs_stars-071.png](../assets/images/obs_stars-071.png)` | 6. Stars and stellar populations | Cluster age determination from Main Sequence Turn-Off (MSTO) point | [[Cluster ages from CMD turnoff]] |
| `![obs_stars-072.png](../assets/images/obs_stars-072.png)` | 6. Stars and stellar populations | Cluster age determination from Main Sequence Turn-Off (MSTO) point | [[Cluster ages from CMD turnoff]] |
| `![obs_stars-073.png](../assets/images/obs_stars-073.png)` | 6. Stars and stellar populations | Cluster age determination from Main Sequence Turn-Off (MSTO) point | [[Cluster ages from CMD turnoff]] |
| `![obs_stars-074.png](../assets/images/obs_stars-074.png)` | 6. Stars and stellar populations | Cluster age determination from Main Sequence Turn-Off (MSTO) point | [[Cluster ages from CMD turnoff]] |
| `![obs_stars-075.png](../assets/images/obs_stars-075.png)` | 6. Stars and stellar populations | Cluster age determination from Main Sequence Turn-Off (MSTO) point | [[Cluster ages from CMD turnoff]] |
| `![obs_stars-076.png](../assets/images/obs_stars-076.png)` | 6. Stars and stellar populations | Cluster age determination from Main Sequence Turn-Off (MSTO) point | [[Cluster ages from CMD turnoff]] |
| `![obs_stars-077.png](../assets/images/obs_stars-077.png)` | 6. Stars and stellar populations | Stellar populations I, II, III, Baade dichotomy, kinematics, metallicity | [[Stellar populations I II III]] |
| `![obs_stars-078.png](../assets/images/obs_stars-078.png)` | 6. Stars and stellar populations | Stellar populations I, II, III, Baade dichotomy, kinematics, metallicity | [[Stellar populations I II III]] |
| `![obs_stars-079.png](../assets/images/obs_stars-079.png)` | 6. Stars and stellar populations | Stellar populations I, II, III, Baade dichotomy, kinematics, metallicity | [[Stellar populations I II III]] |
| `![obs_stars-080.png](../assets/images/obs_stars-080.png)` | 6. Stars and stellar populations | Stellar populations I, II, III, Baade dichotomy, kinematics, metallicity | [[Stellar populations I II III]] |
| `![obs_stars-081.png](../assets/images/obs_stars-081.png)` | 6. Stars and stellar populations | Stellar populations I, II, III, Baade dichotomy, kinematics, metallicity | [[Stellar populations I II III]] |
| `![obs_stars-082.png](../assets/images/obs_stars-082.png)` | 6. Stars and stellar populations | Stellar populations I, II, III, Baade dichotomy, kinematics, metallicity | [[Stellar populations I II III]] |
| `![obs_stars-083.png](../assets/images/obs_stars-083.png)` | 6. Stars and stellar populations | Stellar populations I, II, III, Baade dichotomy, kinematics, metallicity | [[Stellar populations I II III]] |
| `![obs_stars-084.png](../assets/images/obs_stars-084.png)` | 6. Stars and stellar populations | Stellar populations I, II, III, Baade dichotomy, kinematics, metallicity | [[Stellar populations I II III]] |
| `![obs_stars-085.png](../assets/images/obs_stars-085.png)` | 6. Stars and stellar populations | Stellar populations I, II, III, Baade dichotomy, kinematics, metallicity | [[Stellar populations I II III]] |
| `![obs_stars-086.png](../assets/images/obs_stars-086.png)` | 6. Stars and stellar populations | Stellar populations I, II, III, Baade dichotomy, kinematics, metallicity | [[Stellar populations I II III]] |
| `![obs_stars-087.png](../assets/images/obs_stars-087.png)` | 6. Stars and stellar populations | Stellar populations I, II, III, Baade dichotomy, kinematics, metallicity | [[Stellar populations I II III]] |
| `![obs_stars-088.png](../assets/images/obs_stars-088.png)` | 6. Stars and stellar populations | Stellar populations I, II, III, Baade dichotomy, kinematics, metallicity | [[Stellar populations I II III]] |
| `![obs_stars-089.png](../assets/images/obs_stars-089.png)` | 6. Stars and stellar populations | Stellar populations I, II, III, Baade dichotomy, kinematics, metallicity | [[Stellar populations I II III]] |
| `![obs_stars-090.png](../assets/images/obs_stars-090.png)` | 6. Stars and stellar populations | Stellar populations I, II, III, Baade dichotomy, kinematics, metallicity | [[Stellar populations I II III]] |
| `![obs_stars-091.png](../assets/images/obs_stars-091.png)` | 6. Stars and stellar populations | Stellar populations I, II, III, Baade dichotomy, kinematics, metallicity | [[Stellar populations I II III]] |
| `![obs_stars-092.png](../assets/images/obs_stars-092.png)` | 6. Stars and stellar populations | Stellar populations I, II, III, Baade dichotomy, kinematics, metallicity | [[Stellar populations I II III]] |
| `![obs_stars-093.png](../assets/images/obs_stars-093.png)` | 6. Stars and stellar populations | Initial Mass Function (IMF), Salpeter, Kroupa, Chabrier, M/L ratio | [[Initial mass function]] |
| `![obs_stars-094.png](../assets/images/obs_stars-094.png)` | 6. Stars and stellar populations | Initial Mass Function (IMF), Salpeter, Kroupa, Chabrier, M/L ratio | [[Initial mass function]] |
| `![obs_stars-095.png](../assets/images/obs_stars-095.png)` | 6. Stars and stellar populations | Initial Mass Function (IMF), Salpeter, Kroupa, Chabrier, M/L ratio | [[Initial mass function]] |
| `![obs_stars-096.png](../assets/images/obs_stars-096.png)` | 6. Stars and stellar populations | Initial Mass Function (IMF), Salpeter, Kroupa, Chabrier, M/L ratio | [[Initial mass function]] |
| `![obs_stars-097.png](../assets/images/obs_stars-097.png)` | 6. Stars and stellar populations | Initial Mass Function (IMF), Salpeter, Kroupa, Chabrier, M/L ratio | [[Initial mass function]] |
| `![obs_stars-098.png](../assets/images/obs_stars-098.png)` | 6. Stars and stellar populations | Initial Mass Function (IMF), Salpeter, Kroupa, Chabrier, M/L ratio | [[Initial mass function]] |
| `![obs_stars-099.png](../assets/images/obs_stars-099.png)` | 6. Stars and stellar populations | Initial Mass Function (IMF), Salpeter, Kroupa, Chabrier, M/L ratio | [[Initial mass function]] |
| `![obs_stars-100.png](../assets/images/obs_stars-100.png)` | 6. Stars and stellar populations | Initial Mass Function (IMF), Salpeter, Kroupa, Chabrier, M/L ratio | [[Initial mass function]] |
| `![obs_stars-101.png](../assets/images/obs_stars-101.png)` | 6. Stars and stellar populations | Star formation history psi(t), tau-models, sSFR, star-forming main sequence | [[Star formation history of a population]] |
| `![obs_stars-102.png](../assets/images/obs_stars-102.png)` | 6. Stars and stellar populations | Star formation history psi(t), tau-models, sSFR, star-forming main sequence | [[Star formation history of a population]] |
| `![obs_stars-103.png](../assets/images/obs_stars-103.png)` | 6. Stars and stellar populations | Star formation history psi(t), tau-models, sSFR, star-forming main sequence | [[Star formation history of a population]] |
| `![obs_stars-104.png](../assets/images/obs_stars-104.png)` | 6. Stars and stellar populations | Star formation history psi(t), tau-models, sSFR, star-forming main sequence | [[Star formation history of a population]] |
| `![obs_stars-105.png](../assets/images/obs_stars-105.png)` | 6. Stars and stellar populations | Star formation history psi(t), tau-models, sSFR, star-forming main sequence | [[Star formation history of a population]] |
| `![obs_stars-106.png](../assets/images/obs_stars-106.png)` | 6. Stars and stellar populations | Star formation history psi(t), tau-models, sSFR, star-forming main sequence | [[Star formation history of a population]] |

---

## Dynamic Zettel Index (Dataview)

```dataview
LIST
FROM "03_Zettel/Theory" OR "03_Zettel/Observations"
WHERE contains(file.outlinks, this.file.link) OR contains(file.inlinks, this.file.link)
SORT file.name ASC
```
