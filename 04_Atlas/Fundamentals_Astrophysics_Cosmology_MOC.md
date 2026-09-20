---
layout: "default"
title: "Fundamentals_Astrophysics_Cosmology_MOC"
---
# Fundamentals of Astrophysics and Cosmology — Map of Content

> **Exam Status** - Sat on **Friday 18 September 2026** (Aula A, Ex Rizzato, Examiners: Prof Nicola Bartolo & Prof Giulia Rodighiero). **FAILED (retake scheduled for Winter Session, Jan / Feb 2027)**.
> See postmortem & mathematical rigor protocol: Exam Postmortem and Mathematical Rigor Protocol and Lesson Learned - Mathematical Rigor and Observational Graph Fluency.

A.Y. 2025/2026 — **Prof. Nicola Bartolo** (cosmology block) and **Prof. Giulia Rodighiero** (astrophysics / observations block), with tutor Dr. Ripalta Amoruso. University of Padova.

This is the first-semester foundation course. It sits underneath everything else: it teaches the *language* in which the rest of my degree is written. spherical astronomy gives me the coordinates to point at the sky. radiative mechanisms give me the photons. stellar evolution and the Milky Way give me the actors. external galaxies and the distance scale give me the stage. and then cosmology comes in and asks the dangerous question, *what is the stage made of, and why is it expanding?*

The central thread is a chain that I keep coming back to:
$$\text{coordinates} \to \text{distances} \to \text{flux and magnitudes} \to \text{spectra} \to \text{HR diagram} \to \text{galaxies} \to \text{Hubble law} \to \text{Friedmann} \to \text{thermal history} \to \text{BBN, recombination, CMB} \to \text{perturbations and structures}$$

Every later course (Observational Cosmology, High Energy Instrumentation, GR) is some specialized refinement of one piece of this chain. So this MOC is the **trunk**, and the other MOCs ([[Observational_Cosmology_MOC]], [[Lab_High-Energy_MOC]], [[General_Relativity_MOC]]) are the **branches**.

---

## Reference texts and course materials

- **Karttunen, Oja, Poutanen, Donner**, *Fundamental Astronomy* — the spherical astronomy, radiative processes, and stellar evolution backbone (Chapters 2, 4, 5, 9, 11, 12, 15).
- **Bennett, Donahue, Schneider, Voit**, *The Cosmic Perspective* — accessible companion for celestial mechanics, Milky Way, distance scale, and external galaxies (Chapters 2, S1, 19, 20).
- **Schneider**, *Extragalactic Astronomy and Cosmology*, 2nd ed. — galaxies, distance scale, and cosmology rigorous treatment (Chapters 2 and 3).
- **Tissino, Mentasti, Vanzan**, *Astrophysics and Cosmology Notes* (Padova, 154 pp.) — the authoritative student transcription notes directly following Prof. Nicola Bartolo's cosmology lectures (`Fundamentals_astrophysics_cosmology copy.pdf`).
- **Baumann**, *Cosmology* (Part III Cambridge lecture notes, 189 pp., see [[Baumann_reference]]) — modern, clean derivations, the back-up text kept open while reading the slides (`baumann.pdf`).
- **Coles & Lucchin**, *Cosmology: The Origin and Evolution of Cosmic Structure* (Wiley 2002) — the European standard for structure formation.
- **Kolb & Turner**, *The Early Universe* (Addison-Wesley 1990) — the bible for thermal history, freeze-out, and BBN.
- **Arbuzova, Dolgov, Reverberi**, *Jeans instability in classical and modified gravity* (Physics Letters B 739, 2014) — research companion for Jeans gravitational instability (`1-s2.0-S0370269314008065-main.pdf`).

---

## Block 0 — Course frame

- [[Fundamentals_course_intro]] — what this course is, who teaches it, complete syllabus breakdown, e-learning materials, and how the program connects to the later MOCs (contains `sphereastro-01` to `05`, `sphereastro2-01`, `intro-01`, `05`).

---

## Block 1 — Spherical astronomy and celestial mechanics

Before any astrophysics, just *how do we point at the sky*. this block is geometry, coordinate transformations, and reference frames. every observation in every later course assumes knowledge of the coordinate frame and astrometric corrections.

### Part 1: Spherical geometry and foundational systems (Slides `sphereastro-01` to `32`)
- [[Celestial sphere and great circles]] — celestial sphere as a directional sphere, great vs small circles, spherical triangle, spherical excess $E = A+B+C - 180^\circ$, spherical area $= E r^2$ (`sphereastro-06` to `11`).
- [[Spherical trigonometry]] — coordinate rotation by $\chi$, working equations $\cos\psi'\cos\theta' = \cos\psi\cos\theta$, $\sin\psi'\cos\theta' = \sin\psi\cos\theta\cos\chi + \sin\theta\sin\chi$, $\sin\theta' = \sin\theta\cos\chi - \sin\chi\sin\psi\cos\theta$, spherical sine and cosine rules (`sphereastro-12` to `16`).
- [[Earth coordinates]] — geographic latitude $\phi$, longitude $\lambda$, parallels and meridians, great-circle geodesic distances between two locations on Earth (`sphereastro-17` to `19`).
- [[Horizontal alt-azimuth system]] — zenith, nadir, vertical circles, azimuth $A \in [0^\circ, 360^\circ]$, altitude / height $a \in [-90^\circ, +90^\circ]$, zenith distance $z = 90^\circ - a$; time- and location-dependent (`sphereastro-20` to `23`).
- [[Equatorial system]] — celestial equator and pole, vernal equinox $\gamma$, right ascension $\alpha$, declination $\delta$, hour angle $h$, sidereal time $\Theta = h + \alpha$, independent of observer location, catalogable standard epochs (J2000.0) (`sphereastro-24` to `29`).
- [[Sidereal vs solar time]] — sidereal day ($23^{\rm h}56^{\rm m}04^{\rm s}$) vs solar day ($24^{\rm h}00^{\rm m}00^{\rm s}$), Earth's orbital revolution causes sidereal time to gain $\sim 3^{\rm m}56^{\rm s}$ per day (`sphereastro-28`).
- [[Alt-azimuth ↔ equatorial transformations]] — direct and inverse conversion formulas: $\sin h \cos\delta = \sin A \cos a$, $\cos h \cos\delta = \cos A \cos a \sin\phi + \sin a \cos\phi$, $\sin\delta = -\cos A \cos a \cos\phi + \sin a \sin\phi$ (`sphereastro-30` to `32`).
- [[Culmination and rise-set|Culmination and rise/set]] — upper culmination $a_{\text{max}}$, lower culmination $a_{\text{min}}$, rise/set condition $\cos h_{s,t} = -\tan\delta\tan\phi$, circumpolar condition $\delta + \phi > 90^\circ$, never visible condition $\delta < \phi - 90^\circ$.

### Part 2: Ecliptic, Galactic frames, and astrometric corrections (Slides `sphereastro2-01` to `27`)
- [[Ecliptic system]] — Earth's orbital plane, obliquity $\varepsilon \approx 23^\circ 27'$, ecliptic longitude $\lambda$, ecliptic latitude $\beta$, equinoxes, solstices, annual solar motion, zodiacal light (`sphereastro2-02` to `04`).
- [[Galactic coordinate system]] — symmetry plane of the Milky Way, Galactic longitude $l \in [0^\circ, 360^\circ)$, latitude $b \in [-90^\circ, +90^\circ]$, Galactic Center at $(0^\circ, 0^\circ)$ in Sagittarius (Sgr A*), North Galactic Pole in Coma Berenices, Zone of Avoidance ($\lvert b\rvert < 10^\circ$) vs extragalactic windows ($\lvert b\rvert > 30^\circ$) (`sphereastro2-05` to `07`).
- [[Precession and nutation]] — luni-solar gravitational torque on Earth's equatorial bulge, 25,770-year precession cone around NEP, drift of the North Celestial Pole (Polaris $\to$ Vega), catalog epochs (B1950 $\to$ J2000.0); 18.6-year lunar nodal nutation ellipse ($9.2'' \times 17.2''$) (`sphereastro2-08` to `13`).
- [[Atmospheric refraction]] — Snell's law in spherical atmosphere, apparent altitude higher than geometric altitude: $R = z_{\text{true}} - z_{\text{app}} \approx 1'\tan z_{\text{app}}$, horizon refraction $R(90^\circ) \approx 35'$ (setting Sun is already geometrically below horizon!), vertical flattening of Sun/Moon, chromatic atmospheric dispersion (`sphereastro2-14` to `17`).
- [[Aberration of light]] — James Bradley 1728, finite speed of light $c$ + Earth's orbital velocity $v \approx 30$ km/s, aberration constant $\kappa = v/c \approx 20.5''$, annual aberration ellipse, fundamental distinctions between aberration and parallax (`sphereastro2-18` to `20`).
- [[Annual stellar parallax]] — 2 AU orbital baseline, definition of the parsec $d(\text{pc}) = 1/p(\text{arcsec})$, Bessel 1838 ($61$ Cygni), Proxima Centauri ($0.77''$), parallactic ellipse, ESA Hipparcos and Gaia astrometry (`sphereastro2-21` to `24`).
- [[Proper motion and stellar kinematics]] — space velocity vector $\vec{v} = \vec{v}_r + \vec{v}_t$, radial velocity from Doppler shift $v_r = c(\Delta\lambda/\lambda_0)$, proper motion $\mu$, tangential velocity $v_t = 4.74 \, d(\text{pc}) \, \mu(''/\text{yr})$, Barnard's star ($10.36''$/yr), kinematics of Population I vs II stars (`sphereastro2-25` to `27`).

---

## Block 2 — Radiative mechanisms and magnitudes

How photons are generated, transported, classified, and measured through astronomical telescopes (Slides `radiative-01` to `68`).

- [[Electromagnetic radiation basics]] — nature of light, wave-particle duality, photon energy $E = h\nu = hc/\lambda$, full cosmic EM spectrum from gamma rays to radio, atmospheric opacity windows (optical, radio, infrared) and need for space observatories (`radiative-01` to `06`).
- [[Radiation quantities and inverse square law]] — specific intensity $I_\nu$, invariance of $I_\nu$ along a ray in vacuum, surface brightness independence of distance, radiative flux $F_\nu$, bolometric flux $F = \int F_\nu d\nu$, luminosity $L = 4\pi R^2 F_{\text{surf}}$, geometric inverse-square law $F = L / (4\pi d^2)$, radiation energy density $u$, radiation pressure $P_{\text{rad}} = u/3$ (`radiative-07` to `14`).
- [[Blackbody radiation and Stefan-Boltzmann]] — ideal blackbody, Kirchhoff's law $j_\nu / \alpha_\nu = B_\nu(T)$, Planck's distribution law $B_\nu(T)$ and $B_\lambda(T)$, Wien's displacement law $\lambda_{\text{max}} T = 2898\,\mu$m K, Stefan-Boltzmann law $F = \sigma T^4$, effective temperature $L = 4\pi R^2 \sigma T_{\text{eff}}^4$, Rayleigh-Jeans radio limit ($h\nu \ll k_B T$, brightness temperature $T_b$), Wien limit ($h\nu \gg k_B T$), color temperature vs effective temperature (`radiative-15` to `24`).
- [[Stellar spectra and spectral classification]] — Fraunhofer dark absorption lines, Kirchhoff's three laws of spectroscopy, Harvard spectral sequence OBAFGKM as a temperature sequence, Boltzmann excitation equation, Saha ionization equation, physical explanation of the Balmer line maximum at A0 ($T \approx 10,000$ K), He lines in O/B stars, molecular bands (TiO) in K/M stars, MK luminosity classes I-VII, pressure/Stark line broadening (`radiative-25` to `38`).
- [[Magnitudes and photometric systems]] — Hipparchus visual scale, Weber-Fechner logarithmic response, Norman Pogson's formula $m_1 - m_2 = -2.5\log_{10}(F_1/F_2)$, apparent magnitude benchmarks, absolute magnitude $M$ at $d_0 = 10$ pc, distance modulus $\mu = m - M = 5\log_{10} d - 5$, bolometric magnitude and bolometric correction $BC = M_{\text{bol}} - M_V$, Johnson-Cousins UBVRI broad-band filter system, color indices $B-V$ and $U-B$ as thermometers, Vega magnitude system vs AB magnitude system (`radiative-39` to `56`).
- [[Interstellar absorption]] — interstellar dust grains (silicates, graphite, PAHs), dust extinction $A_\lambda$, modified distance modulus $\mu_{\text{true}} = m - M - A_\lambda$, selective scattering and interstellar reddening, color excess $E(B-V) = (B-V)_{\text{obs}} - (B-V)_0 = A_B - A_V$, extinction curve $A_\lambda/A_V$ vs $1/\lambda$, the $2175$ Å UV graphite bump, total-to-selective extinction ratio $R_V = A_V / E(B-V) \approx 3.1$ in diffuse Milky Way, infrared transparency ($A_K \approx 0.1 A_V$), color-color diagram and the reddening vector (`radiative-57` to `68`).

---

## Block 3 — Stellar evolution

From gravitational collapse in molecular clouds to main-sequence hydrogen burning, post-main-sequence giant phases, and compact corpses (Slides `stellar-01` to `87`).

- [[Stellar scaling relations]] — fundamental parameters ($M, R, L, T_{\text{eff}}$), Stefan-Boltzmann relation $L = 4\pi R^2 \sigma T_{\text{eff}}^4$, empirical and theoretical Mass-Luminosity relation on the main sequence $L \propto M^{3.5-4}$, radius and temperature scaling, main-sequence lifetimes $t_{\text{MS}} \propto M^{-2.5}$ (`stellar-01` to `07`).
- [[HR diagram]] & [[Main sequence, giants, supergiants, white dwarfs]] — Hertzsprung-Russell diagram in theoretical plane ($\log L$ vs $\log T_{\text{eff}}$) and observational CMD ($M_V$ vs $B-V$), the four principal stellar families (Main Sequence $\sim 90\%$, Red Giants, Supergiants, White Dwarfs), lines of constant radius $R \propto L^{1/2} T_{\text{eff}}^{-2}$ as parallel diagonals, mass and lifetime progression along the MS (`stellar-08` to `19`).
- [[Stellar structure equations]] & [[Radiative transport]] — the four differential equations of stellar structure: mass conservation $dM/dr = 4\pi r^2 \rho$, hydrostatic equilibrium $dP/dr = -GM(r)\rho/r^2$, energy conservation $dL/dr = 4\pi r^2 \rho \epsilon$, radiative energy transport $dT/dr = -\frac{3\kappa\rho L}{16\pi a c r^2 T^3}$, Schwarzschild criterion for convection, convective vs radiative cores and envelopes across low-mass, solar-type, and massive stars (`stellar-20` to `24`).
- [[Stellar nucleosynthesis]] — thermonuclear fusion, overcoming the Coulomb barrier via quantum tunneling (Gamow peak), Proton-Proton chain (pp-I, pp-II, pp-III branches, weak $p+p$ rate-limiting step, solar neutrinos), CNO catalytic cycle ($\epsilon \propto T^{16-18}$ dominant for $M > 1.5 M_\odot$), triple-$\alpha$ process ($3\alpha \to {}^{12}\text{C}$, Hoyle $7.65$ MeV resonance state), carbon/oxygen/silicon burning up to the $^{56}\text{Fe}$ binding energy peak (`stellar-25` to `31`).
- [[Stellar evolution timescales]] — dynamical timescale $t_{\text{dyn}} \approx 1/\sqrt{G\bar\rho} \sim 30$ min, thermal (Kelvin-Helmholtz) timescale $t_{\text{KH}} \approx GM^2/(RL) \sim 3 \times 10^7$ yr, nuclear timescale $t_{\text{nuc}} \approx 0.007 M c^2 / L \sim 10^{10}$ yr; fundamental hierarchy $t_{\text{dyn}} \ll t_{\text{KH}} \ll t_{\text{nuc}}$ explaining why stars spend $90\%$ of their lives on the MS (`stellar-32` to `34`).
- [[Jeans theory and protostellar formation]] — Giant Molecular Clouds (GMCs), hydrodynamic fluid equations (continuity, Euler, Poisson), sound speed $c_s$, sound crossing time $t_s$ vs free-fall time $t_{\text{ff}}$, perturbation analysis, master wave equation, Jeans dispersion relation $\omega^2 = k^2 c_s^2 - 4\pi G\rho_0$, Jeans wavevector $k_J$, Jeans length $\lambda_J = c_s\sqrt{\pi/G\rho_0}$, Jeans mass $M_J = \frac{\pi}{6}\rho_0 \lambda_J^3 \propto T^{3/2}\rho_0^{-1/2}$, energetic Virial derivation ($2K + \lvert U\rvert < 0$), isothermal hierarchical fragmentation into star clusters, ALMA protoplanetary disk observations, connection to Arbuzova et al. (2014) modified gravity (`stellar-35` to `63`).
- [[Pre-main sequence evolution and protostars]] — protostellar collapse, Hayashi track (fully convective, vertical descent in HR diagram at constant $T_{\text{eff}} \sim 3500$ K), Henyey track (radiative core development, horizontal approach to ZAMS with rising $T_{\text{eff}}$), arrival at the Zero-Age Main Sequence (ZAMS) when core fusion halts gravitational contraction (`stellar-64` to `67`).
- [[Solar evolution and final stages]] — post-MS evolution of $1 M_\odot$ stars, core hydrogen exhaustion, Subgiant Branch (SGB), Red Giant Branch (RGB), electron-degenerate helium core, the runaway Helium Flash, Horizontal Branch (HB) / Red Clump core helium burning, Asymptotic Giant Branch (AGB) double shell burning, thermal pulses and dredge-up, envelope mass loss, Planetary Nebula ejection, Carbon-Oxygen White Dwarf remnant (`stellar-68` to `76`).
- [[Cluster ages from CMD turnoff]] — open and globular star clusters as coeval, single-metallicity isochrone populations, the Main Sequence Turnoff (MSTO) point, determining cluster ages $t_{\text{cluster}} \approx 10^{10} (M_{\text{TO}}/M_\odot)^{-2.5}$ yr, ancient globular cluster ages ($12-13.5$ Gyr) anchoring the age of the Universe (`stellar-77` to `78`).
- [[Binary star evolution and mass transfer]] — binary prevalence, Roche lobe equipotential surfaces, inner Lagrangian point L1, detached, semidetached, and contact binaries, the Algol paradox resolved by mass transfer, cataclysmic variables, Type Ia supernova progenitors (`stellar-79` to `80`).
- [[Supernovae and compact remnants]] — massive star death ($M \ge 8 M_\odot$), iron core photodisintegration and electron capture collapse, core bounce and shock ejection, observational supernova classification (Type Ia vs Type II/Ib/Ic), compact remnants: White Dwarfs (electron degeneracy, Chandrasekhar limit $1.44 M_\odot$), Neutron Stars (neutron degeneracy, TOV limit $2-2.3 M_\odot$, pulsars), Black Holes (Schwarzschild radius $R_s = 2GM/c^2$, gravitational singularity) (`stellar-81` to `87`).

---

## Block 4 — The Milky Way and the interstellar medium

Our Galaxy as an astrophysical laboratory, its multi-phase interstellar medium, spiral arm kinematics, and dark matter halo (Slides `milkyway-01` to `41`).

- [[Milky Way structure]] — NGC 4565 (edge-on) and NGC 1232 (face-on) analogs, five primary structural components: Thin Disk ($h_z \approx 300$ pc), Thick Disk ($h_z \approx 1$ kpc), Central Bulge ($R \sim 2-3$ kpc), Stellar Halo ($R \sim 50$ kpc), Dark Matter Halo ($R > 100-200$ kpc), Sun's location at $R_0 = 8.2$ kpc in the Orion spur, orbital velocity $V_0 \approx 220$ km/s, Galactic year $\sim 230$ Myr (`milkyway-01` to `07`).
- [[Stellar populations I II III]] — Walter Baade 1944 discovery in M31, Population I (thin disk, young, metal-rich $[\text{Fe}/\text{H}] \sim 0$, circular orbits) vs Population II (halo, globular clusters, old, metal-poor $[\text{Fe}/\text{H}] < -1$, eccentric random orbits), kinematics ($V/\sigma \gg 1$ for Pop I vs $V/\sigma \ll 1$ for Pop II), cosmic chemical evolution from hypothetical metal-free Population III ($Z=0$) (`milkyway-08` to `13`).
- [[Interstellar medium components and gas cycle]] — the Star-Gas-Star recycling loop, the four thermal pressure-equilibrium phases of the ISM: Cold Molecular Clouds (CO $2.6$ mm, star formation sites), Cold Neutral Medium (CNM, atomic HI, 21 cm spin-flip hyperfine line), Warm Ionized Medium (WIM, HII regions, Stromgren spheres, $H\alpha$ $656.3$ nm), Hot Coronal Gas (HIM, $10^6$ K, soft X-rays, supernova shocks), superbubbles, galactic chimneys, and the Galactic Fountain (`milkyway-14` to `24`).
- [[Spiral arm kinematics]] — spiral arm optical tracers, the winding problem under differential rotation $\Omega(R) = V(R)/R$, Lin-Shu Density Wave Theory (quasistatic compression waves rotating at pattern speed $\Omega_p$, star formation trigger), Oort's constants $A \approx +15$ and $B \approx -12$ km s$^{-1}$ kpc$^{-1}$ (local shear and vorticity), measuring rotation curves via the HI 21 cm tangent-point method ($V(R) = v_{r,\text{max}} + V_0\sin l$), Lindblad resonances (`milkyway-25` to `33`).
- [[Dark matter on galactic scales]] — Newtonian Keplerian fall-off expectation $V(R) \propto R^{-1/2}$ outside the visible disk vs observed flat rotation curves $V(R) \approx 220$ km/s out to $> 30$ kpc, enclosed mass $M(R) = V^2 R / G \propto R$, dark matter density profile $\rho \propto R^{-2}$ (isothermal sphere), evidence that dark matter comprises $90-95\%$ of the Milky Way's total mass ($M_{\text{total}} \sim 1-1.5 \times 10^{12} M_\odot$) (`milkyway-34` to `37`).
- [[Galactic Center]] — Sagittarius A* (Sgr A*), overcoming 30 magnitudes of visual extinction ($A_V \approx 30$) via radio and near-infrared (NIR $2.2\,\mu$m) imaging, 25-year adaptive optics monitoring of the S-star cluster (Genzel and Ghez), closed Keplerian orbit of star S2 ($P = 16.05$ yr, pericenter $120$ AU $\approx 17$ light-hours, $v_{\text{max}} \approx 7650$ km/s), enclosed point mass $M_\bullet = (4.15 \pm 0.13) \times 10^6 M_\odot$, proof of a supermassive black hole, 2020 Nobel Prize in Physics (`milkyway-38` to `41`).

---

## Block 5 — External galaxies

Taxonomy of external galaxies, physical correlations across morphology, multi-wavelength emission, and Stellar Population Synthesis (Slides `galaxies-01` to `64`).

- [[Galaxies in the local universe]] — Hubble eXtreme Deep Field (XDF), galaxy diversity, primary local families: Spirals, Barred Spirals (bars as gas funnels), Ellipticals, Lenticulars (S0/SB0), Irregulars (`galaxies-01` to `11`).
- [[Hubble morphological sequence]] — Hubble Tuning Fork diagram, Elliptical sequence E0-E7 ($n = 10(1-b/a)$), normal (S) and barred (SB) spiral branches, Sa-Sc progression (decreasing bulge-to-disk ratio $B/T$, unwinding of arms, increasing resolution into HII knots), S0 junction, early-type vs late-type historical terminology vs modern hierarchical merger reality (`galaxies-12` to `16`).
- [[Galaxy morphology vs physical properties]] — bimodal galaxy color distribution: Red Sequence (passive, early-type, old stars, gas-poor) vs Blue Cloud (active, late-type, star-forming, gas-rich), Green Valley quenching; kinematic support: pressure-supported ellipticals ($V/\sigma < 1$, velocity anisotropy, Faber-Jackson $L \propto \sigma^4$, Fundamental Plane) vs rotation-supported spiral disks ($V_{\text{rot}}/\sigma \gg 1$, Tully-Fisher $L \propto V_{\text{max}}^4$) (`galaxies-17` to `25`).
- [[Galaxies across wavelengths]] — comprehensive multi-wavelength tour of the Whirlpool Galaxy (M51): X-rays (Chandra: $10^7$ K gas, X-ray binaries), UV (GALEX: massive young O/B stars, recent SFR), Optical (intermediate stars, dust lanes), $H\alpha$ $656.3$ nm (HII regions, instantaneous SFR), Near-IR (low-mass K/M giants, master tracer of stellar mass $M_*$), Mid/Far-IR (Spitzer/Herschel: thermal dust re-emission, obscured SFR), Radio continuum (VLA: supernova synchrotron and free-free), 21 cm HI (neutral gas reservoir, extended tidal bridges to NGC 5195), panchromatic integrated galaxy SED (`galaxies-26` to `46`).
- [[Spectral energy distributions]] — Stellar Population Synthesis (SPS), light of galaxies as integrated sum of stars (Tinsley 1978), Initial Mass Function (IMF: Salpeter, Kroupa, Chabrier), Simple Stellar Population (SSP) evolutionary synthesis, isochrones, composite stellar populations via Star Formation History $\text{SFR}(t)$ convolution, dust attenuation (Calzetti law), multi-band photometric SED fitting (determining $M_*$, SFR, age, $A_V$, $Z$), Ultra-Luminous Infrared Galaxies (ULIRGs, $L_{\text{IR}} > 10^{12} L_\odot$), galaxy emission-line diagnostics and the BPT diagram (`galaxies-47` to `64`).
- [[Galaxy clusters and overview of evolution]] — virial mass, cluster scaling, intracluster medium (ICM), environmental effects (ram pressure stripping, tidal harassment).

---

## Block 6 — From local universe to cosmological distances

Constructing the Cosmic Distance Ladder, standard candles, and the discovery of cosmic expansion (Slides `distancescale-01` to `23`).

- [[Parallax and standard candles]] — the architecture of the Cosmic Distance Ladder (radar ranging $\to$ parallax $\to$ MS fitting $\to$ Cepheids $\to$ Type Ia supernovae $\to$ Hubble flow), standard candle concept $d = \sqrt{L / 4\pi F}$, distance modulus $\mu = m - M = 5\log_{10} d - 5$ (`distancescale-01` to `07`).
- [[Cepheids and supernovae]] — pulsating supergiant standard candles, Henrietta Leavitt's Period-Luminosity relation $M_V \approx -2.8\log P - 4.1$, thermodynamic $\kappa$-mechanism in the $He^{++}$ partial ionization zone, acoustic pulsation timescale $P \propto 1/\sqrt{G\bar\rho} \propto R^{3/2}/M^{1/2}$, Edwin Hubble's 1923 discovery of Cepheid V1 in M31 proving the island universe hypothesis, HST Key Project measuring $H_0$ to $10\%$ (`distancescale-08` to `14`).
- [[Type Ia supernovae as standard candles]] — thermonuclear detonation of accreting carbon-oxygen white dwarfs approaching the Chandrasekhar limit ($1.44 M_\odot$), uniform peak absolute magnitude $M_B \approx -19.3$ mag ($L \approx 4 \times 10^9 L_\odot$), the Phillips luminosity-width relation $\Delta m_{15}(B)$ standardizing SNe Ia to $\sigma_M \approx 0.12$ mag, 1998 discovery of cosmic acceleration and Dark Energy ($\Lambda$) by Perlmutter, Schmidt, and Riess (2011 Nobel Prize) (`distancescale-15` to `18`).
- [[Hubble's law and cosmological redshift]] — Edwin Hubble 1929 empirical relation $v = H_0 d$, modern $H_0$ determinations and the Hubble tension ($67.4$ km/s/Mpc Planck vs $73.0$ km/s/Mpc SH0ES), physical interpretation as metric expansion of space $\vec{r}(t) = a(t)\vec{x} \implies v = \dot{a}/a \, r = H(t) r$, Hubble time $t_H = 1/H_0 \sim 14$ Gyr as evidence for the Big Bang, cosmological redshift as photon wavelength stretching $1+z = \lambda_{\text{obs}}/\lambda_{\text{emit}} = 1/a(t_{\text{emit}})$, complete master summary table of the distance ladder (`distancescale-19` to `23`).

---

## Block 7 — Fundamental concepts of cosmology

The homogeneous, isotropic universe, cosmic inventory, and the geometry and dynamics of expanding spacetime (Slides `intro-01` to `41`, Tissino et al. Ch 1-2, Baumann Ch 1).

- [[Cosmic_inventory_overview]] — the master cosmic inventory: photons, baryons, dark matter, neutrinos, dark energy, critical density $\rho_c = 3H_0^2/8\pi G$, $\Omega_m \approx 0.315$, $\Omega_\Lambda \approx 0.685$, $\Omega_b h^2 = 0.0224$, $\Omega_{dm} h^2 = 0.120$, the 3 observational pillars of the Hot Big Bang model (`intro-01`, `05`, `22`, `40`).
- [[Cosmic_inventory_photons]] — CMB blackbody at $T_0 = 2.7255$ K, photon number density $n_\gamma = \frac{2\zeta(3)}{\pi^2} T^3 \simeq 411$ cm$^{-3}$, radiation density parameter $\Omega_{0\gamma} = 2.47 \times 10^{-5} h^{-2}$, COBE/FIRAS perfect blackbody, spectral distortions ($y$ and $\mu$ distortions).
- [[Cosmic_inventory_baryons]] — four independent ways to weigh baryons (stars/gas in galaxies, Ly$\alpha$ forest, BBN D/H abundance, CMB acoustic peaks), the missing baryon problem resolved in the warm-hot intergalactic medium (WHIM), $\Omega_b h^2 = 0.0224 \pm 0.0001$, baryon-to-photon ratio $\eta \approx 6 \times 10^{-10}$ (`intro-14`, `15`, `39`).
- [[Cosmic_inventory_dark_matter]] — evidence for non-baryonic cold dark matter: flat galaxy rotation curves, cluster velocity dispersions (Zwicky 1933), gravitational lensing, the Bullet Cluster (separation of collisionless dark matter from X-ray gas), baryon acoustic oscillations (BAO), CMB temperature power spectrum ($\Omega_{dm} h^2 = 0.120$).
- [[Cosmic_inventory_neutrinos]] — cosmic neutrino background (C$\nu$B), relativistic decoupling at $T \sim 1$ MeV, neutrino temperature $T_\nu = (4/11)^{1/3} T_\gamma \approx 1.95$ K, effective number of relativistic species $N_{\text{eff}} = 3.046$, cosmological bound on neutrino mass sum $\sum m_\nu < 0.12$ eV.
- [[Cosmic_inventory_dark_energy]] — high-redshift Type Ia supernova Hubble diagram, cosmic acceleration, the cosmic age problem ($t_0 > t_{\text{GC}}$ requires $\Lambda$), vacuum energy equation of state $w = P/\rho \approx -1$, $\Omega_\Lambda = 0.685$.
- [[Matter power spectrum and BAO]] — matter power spectrum $P_m(k)$, turnover at matter-radiation equality scale $k_{\text{eq}}$, Baryon Acoustic Oscillation (BAO) sound horizon standard ruler $r_s \approx 147$ Mpc imprinted in galaxy clustering.
- [[Cosmological principle]] — homogeneous and isotropic on scales $> 100$ Mpc, comoving fundamental observers, cosmic time foliation, reduction of cosmology to a single dynamic function $a(t)$ (`intro-02`, `03`, `04`, `12`).
- [[Robertson-Walker metric]] — maximally symmetric 3-spaces, metric $ds^2 = dt^2 - a^2(t)[\frac{dr^2}{1-kr^2} + r^2 d\Omega^2]$, comoving coordinates vs physical coordinates $\vec{r} = a(t)\vec{x}$, scale factor $a(t)$, Hubble parameter $H(t) \equiv \dot{a}/a$.
- [[Curvature parameter k]] — spatial geometry: $k = 0$ (flat Euclidean $\mathbb{R}^3$), $k = +1$ (closed 3-sphere $S^3$), $k = -1$ (open hyperbolic 3-space $H^3$).
- [[Hubble constant and deceleration parameter]] — current expansion rate $H_0$, deceleration parameter $q_0 \equiv -\frac{\ddot{a} a}{\dot{a}^2} = \frac{1}{2}\Omega_m - \Omega_\Lambda$, negative $q_0$ confirms accelerating expansion.
- [[Cosmological distances]] — comoving distance $\chi(z) = \int_0^z \frac{c \, dz'}{H(z')}$, proper distance, angular diameter distance $d_A = \frac{S_k(\chi)}{1+z}$, luminosity distance $d_L = (1+z) S_k(\chi) = (1+z)^2 d_A$ (Etherington reciprocity relation).
- [[Newtonian Friedmann derivation]] — expanding spherical mass shell argument, total energy conservation, kinetic energy vs gravitational potential energy, deriving $\dot{a}^2 = \frac{8\pi G\rho_0}{3} a^{-1} - k c^2$.
- [[Friedmann equations with Lambda|Friedmann equations with Λ]] — full relativistic Einstein field equations with cosmological constant $G_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu}$ applied to perfect fluid $T^\mu_\nu = \text{diag}(\rho c^2, -P, -P, -P)$:
  $$\boxed{\, H^2 = \left(\frac{\dot{a}}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{k c^2}{a^2} + \frac{\Lambda c^2}{3} \,}$$
  $$\boxed{\, \frac{\ddot{a}}{a} = -\frac{4\pi G}{3}\left(\rho + \frac{3P}{c^2}\right) + \frac{\Lambda c^2}{3} \,}$$
- [[Friedmann models]] — fluid continuity equation $\dot\rho + 3H(\rho + P/c^2) = 0$, scaling laws: radiation $\rho_r \propto a^{-4}$, matter $\rho_m \propto a^{-3}$, vacuum energy $\rho_\Lambda = \text{const}$, analytic solutions (Einstein-de Sitter, radiation-dominated, de Sitter exponential expansion).
- [[Density parameters and flatness]] — $\Omega_m(t)$, $\Omega_r(t)$, $\Omega_\Lambda(t)$, $\Omega_k \equiv -\frac{kc^2}{a^2 H^2}$, condition $\Omega_m + \Omega_r + \Omega_\Lambda + \Omega_k = 1$, Planck observational measurement $\Omega_k = 0.001 \pm 0.002$ establishing spatial flatness ($k=0$).
- [[Hubble law exact form]] — exact luminosity distance relation $d_L(z) = \frac{c}{H_0}\left[z + \frac{1}{2}(1 - q_0)z^2 + \mathcal{O}(z^3)\right]$, breakdown of linear Hubble law at $z > 0.1$.

---

## Block 8 — Thermal history and the early universe

Thermodynamics of expanding plasma, decoupling, Big Bang Nucleosynthesis, and recombination (Slides `bbn-01` to `50`, Tissino et al. Ch 3-4, Baumann Ch 2, Kolb & Turner).

- [[Brief thermal history]] — cosmological timeline: Planck era $\to$ GUT scale $\to$ cosmic inflation $\to$ electroweak transition $\to$ quark-hadron transition ($150$ MeV) $\to$ neutrino decoupling ($1$ MeV) $\to$ electron-positron annihilation ($0.5$ MeV) $\to$ Big Bang Nucleosynthesis ($0.1$ MeV, $3$ min) $\to$ matter-radiation equality ($z \approx 3400$) $\to$ recombination and photon decoupling ($z \approx 1100$, $380,000$ yr) $\to$ cosmic dark ages $\to$ reionization ($z \sim 6-8$) $\to$ dark energy domination ($z \sim 0.3$) $\to$ today (`bbn-01`).
- [[Thermal equilibrium in the early universe]] — Bose-Einstein and Fermi-Dirac distribution functions in expanding spacetime, relativistic vs non-relativistic limits, effective relativistic degrees of freedom $g_*(T)$ and $g_{*s}(T)$.
- [[Number density and energy density at thermal equilibrium]] — relativistic limits: $n = \frac{\zeta(3)}{\pi^2} g T^3$ (bosons) vs $\frac{3}{4}$ (fermions); $\rho = \frac{\pi^2}{30} g T^4$ (bosons) vs $\frac{7}{8}$ (fermions).
- [[Conservation of entropy in a comoving volume]] — entropy density $s = \frac{\rho + P}{T} = \frac{2\pi^2}{45} g_{*s} T^3$, conservation of comoving entropy $S = s a^3 = \text{constant}$, heating of photons relative to decoupled neutrinos during $e^+ e^-$ annihilation ($T_\gamma = (11/4)^{1/3} T_\nu$).
- [[Temperature-time relation]] — radiation-dominated expansion $H = \sqrt{\frac{8\pi G \rho_r}{3}} \propto T^2$, integrating yields $t \approx 2.42 \, g_*^{-1/2} (T/\text{MeV})^{-2}$ seconds.
- [[Standard model problems]] — Flatness problem (why $\Omega(t)$ had to be fine-tuned to $1 \pm 10^{-60}$ at the Planck era), Horizon problem (why regions separated by $> 100$ causally disconnected horizon lengths at recombination have identical CMB temperatures to $10^{-5}$), Magnetic monopoles problem.
- [[Inflation overview]] — Guth (1981), exponential de Sitter expansion ($a(t) \propto e^{Ht}$) stretching a microscopic causally connected patch to encompass the entire observable universe, driving spatial curvature to zero ($k/a^2 \to 0$).
- [[Inflaton scalar field dynamics]] — single scalar field $\phi$, Lagrangian $\mathcal{L} = \frac{1}{2}\partial_\mu\phi\partial^\mu\phi - V(\phi)$, energy density $\rho_\phi = \frac{1}{2}\dot\phi^2 + V(\phi)$, pressure $P_\phi = \frac{1}{2}\dot\phi^2 - V(\phi)$, condition for acceleration $\dot\phi^2 \ll V(\phi) \implies P_\phi \approx -\rho_\phi$.
- [[Old vs new vs chaotic inflation, slow-roll]] — slow-roll parameters $\epsilon \equiv \frac{M_{\text{Pl}}^2}{2}\left(\frac{V'}{V}\right)^2 \ll 1$ and $\eta \equiv M_{\text{Pl}}^2 \frac{V''}{V} \ll 1$, number of e-folds $N \ge 50-60$, generation of scale-invariant primordial scalar perturbations.
- [[Baryogenesis]] — Sakharov conditions (baryon number $B$ violation, C and CP violation, departure from thermal equilibrium), generating the observed baryon asymmetry $\eta_B = \frac{n_B - n_{\bar B}}{n_\gamma} \sim 6 \times 10^{-10}$.
- [[Decoupling and freeze-out]] — interaction rate $\Gamma = n\langle\sigma v\rangle$ versus Hubble expansion rate $H(t)$; while $\Gamma \gg H$, species remains in local thermal equilibrium; when $\Gamma \lesssim H$, reactions freeze out and species decouples.
- [[BBN_overview]] — Big Bang Nucleosynthesis master synthesis: $T \sim 1 \to 0.08$ MeV, forging $^4$He ($Y_p \approx 0.245$), Deuterium ($D/H \sim 2.5 \times 10^{-5}$), $^3$He, and $^7$Li; absence of stable $A=5$ and $A=8$ nuclei prevents synthesis of heavier elements (`bbn-01` to `50`).
- [[BBN_NSE_initial_conditions]] — nuclear statistical equilibrium (NSE), chemical potential balance $\mu_A = Z\mu_p + (A-Z)\mu_n$, master abundance equation $n_A = g_A A^{3/2} 2^{-A} n_p^Z n_n^{A-Z} (2\pi/m_N T)^{3(A-1)/2} e^{B_A/T}$, mass fractions $X_A$ (`bbn-06` to `11`).
- [[BBN_baryon_to_photon_ratio]] — $\eta = n_b/n_\gamma = 2.68 \times 10^{-8} (\Omega_b h^2)$, why the colossal photon entropy ($n_\gamma / n_b \sim 10^9$) delays nuclear synthesis down to $T \sim 0.08$ MeV despite nuclear binding energies being several MeV (`bbn-12` to `15`).
- [[BBN_neutron_proton_ratio]] — weak interaction equilibrium $p + e^- \rightleftharpoons n + \nu_e$ and $n + e^+ \rightleftharpoons p + \bar\nu_e$, mass difference $Q = (m_n - m_p)c^2 = 1.293$ MeV, equilibrium ratio $(n/p)_{\text{eq}} = e^{-Q/k_B T}$, weak freeze-out at $T_{\text{freeze}} \approx 0.8$ MeV where $\Gamma_w \approx H$, yielding $(n/p)_{\text{freeze}} \approx e^{-1.293/0.8} \approx 1/6$; free neutron beta decay ($n \to p + e^- + \bar\nu_e$, $\tau_n \approx 879.4$ s) during the wait until $T \approx 0.08$ MeV shifts ratio to $(n/p) \to 1/7$ (`bbn-16` to `22`).
- [[BBN_three_steps]] — the 3 chronological phases: Step 1 ($T \sim 10$ MeV, full NSE, light element mass fractions negligible), Step 2 ($T \sim 1$ MeV, $n/p$ freeze-out, $e^+ e^-$ annihilation), Step 3 ($T \sim 0.3 \to 0.08$ MeV, Deuterium bottleneck overcome, avalanche synthesis of $^4$He: $Y_p \approx \frac{2(n/p)}{1 + n/p} \approx \frac{2(1/7)}{1 + 1/7} = \frac{2}{8} = 0.25$) (`bbn-23` to `31`).
- [[BBN_predictions]] — primordial abundance curves as functions of $\eta$ and $\Omega_b h^2$, sensitivity to number of neutrino families $N_\nu$ and neutron lifetime $\tau_n$ (`bbn-32` to `37`).
- [[BBN_observations]] — observational measurements: Deuterium from high-redshift quasar Ly$\alpha$ absorption systems, $^4$He from low-metallicity extragalactic HII regions, $^7$Li from metal-poor halo stars (Spite plateau), the cosmological Lithium Problem (factor of 3 discrepancy) (`bbn-38` to `45`).
- [[BBN_concordance_with_CMB]] — independent determination of baryon density from BBN ($D/H$) and CMB acoustic peak heights (Planck), perfect agreement at $\Omega_b h^2 = 0.0224 \pm 0.0001$, confirming the Hot Big Bang model back to 3 minutes (`bbn-46` to `50`).
- [[Saha equation and recombination]] — ionization equilibrium $p + e^- \rightleftharpoons H + \gamma$, binding energy $B_H = 13.6$ eV, Saha equation for hydrogen, why recombination occurs at $T_{\text{rec}} \approx 0.3$ eV ($T \sim 3000$ K, $z \approx 1100$) rather than $13.6$ eV due to photon entropy ($10^9$ photons per baryon).
- [[Photon decoupling and CMB]] — Thomson scattering optical depth $\tau(t) = \int \sigma_T n_e c \, dt$, scattering rate drops below expansion rate $\Gamma_T \approx H$ at $z_{\text{dec}} \approx 1100$, last scattering surface (LSS), photons free-stream across expanding universe, cooled by redshift to $T_0 = T_{\text{dec}} / (1 + z) = 3000\text{ K} / 1100 = 2.725$ K today.
- [[Boltzmann equation in cosmology]] — classical and relativistic Boltzmann equation $L[f] = C[f]$, Liouville operator in FRW spacetime, collision terms, applications to particle freeze-out, relic abundance calculations, and recombination.
- [[Hot vs cold dark matter]] — relativistic at freeze-out (Hot Dark Matter, HDM: neutrinos, free-streaming damping wiping out small-scale structures, top-down scenario ruled out by observations) vs non-relativistic at freeze-out (Cold Dark Matter, CDM: WIMPs, axions, hierarchical bottom-up structure formation).
- [[Dark matter relics - WIMP miracle|Dark matter relics — WIMP miracle]] — thermal freeze-out calculation for weakly interacting massive particles, relic density $\Omega_\chi h^2 \approx \frac{3 \times 10^{-27} \text{ cm}^3\text{ s}^{-1}}{\langle\sigma v\rangle}$, typical electroweak cross section naturally yields $\Omega_{\text{dm}} h^2 \sim 0.12$.

---

## Block 9 — Formation of cosmic structure

From primordial quantum fluctuations to linear perturbation growth, gravitational collapse, and dark matter halo mass functions (Tissino et al. Ch 5, Baumann Ch 3, Coles & Lucchin).

- [[Linear evolution of perturbations in expanding universe]] — perturbed FRW metric, Newtonian limit on sub-horizon scales, density contrast $\delta(\vec{x}, t) \equiv \frac{\rho(\vec{x}, t) - \bar\rho(t)}{\bar\rho(t)}$, linearized continuity, Euler, and Poisson equations in comoving coordinates, the master perturbation equation $\ddot\delta + 2H\dot\delta - 4\pi G \bar\rho_m \delta = 0$.
- [[Jeans analysis in expanding universe]] — Jeans length in an expanding medium $\lambda_J = c_s \sqrt{\frac{\pi}{G \bar\rho}}$, competing effects: cosmic expansion friction ($2H\dot\delta$) converts exponential growth into power-law growth, sub-horizon perturbations before equality are suppressed (the Mészáros effect).
- [[Growth factor D(z)]] — linear growth factor $D(z)$, matter-dominated EdS solution $\delta(a) \propto a \propto (1+z)^{-1}$, radiation-era stagnation $\delta \propto \ln a$, dark energy suppression at $z < 0.5$ where accelerated expansion freezes structure growth.
- [[Spherical collapse]] — non-linear evolution of an overdense spherical top-hat perturbation, expansion $\to$ turnaround ($r = r_{\text{max}}$) $\to$ collapse $\to$ virialization, linear overdensity extrapolated to collapse time $\delta_c \approx 1.686$, virial overdensity $\Delta_{\text{vir}} \approx 18\pi^2 \approx 178 \approx 200$ times background density.
- [[Press-Schechter halo mass function]] — abundance of collapsed dark matter halos as a function of mass $dn/dM$, filtering Gaussian random density fields with top-hat window function, variance $\sigma^2(M)$, halo mass function formula $\frac{dn}{dM} = \sqrt{\frac{2}{\pi}} \frac{\bar\rho}{M} \frac{\delta_c}{\sigma^2} \left\lvert\frac{d\sigma}{dM}\right\rvert e^{-\frac{\delta_c^2}{2\sigma^2}}$.

---

## Literature & Primary Sources

Canonical and modern arXiv astro-ph.CO benchmark papers underlying the thermal-history and distance-ladder physics above.

- [[Peebles_1968_Recombination_of_the_Primeval_Plasma|Peebles (1968) — Recombination of the Primeval Plasma]] — non-equilibrium recombination, the Peebles $C$-factor and $2s$-$1s$ bottleneck
- [[Fields_Molaro_Sarkar_2020_BBN_After_Planck|Fields, Molaro & Sarkar (2020) — BBN After Planck]] — parameter-free BBN test, the persistent lithium problem
- [[Planck_Collaboration_2020_Cosmological_Parameters|Planck Collaboration (2020) — Planck 2018 VI: Cosmological Parameters]] — base $\Lambda$CDM parameters, model-dependent $H_0$
- [[Riess_2022_SH0ES_Hubble_Constant|Riess et al. (2022) — SH0ES $H_0$ Measurement]] — distance-ladder $H_0$, the $5\sigma$ Hubble tension

---

## Appendix — Master Figure Index (100% Slide Integration)

all **433 lecture slide figures** from the 9 official course PDFs live in `07_Images/Fundamentals_Astro_Cosmology/` and are embedded across the Zettel notes:

| series prefix | slide deck | slide count | hosting zettel notes |
|---|---|---|---|
| `sphereastro-XX.png` | `1.1 Astronomia sferica parte_EN copy.pdf` | **32** (01 to 32) | [[Fundamentals_course_intro]], [[Celestial sphere and great circles]], [[Spherical trigonometry]], [[Earth coordinates]], [[Horizontal alt-azimuth system]], [[Equatorial system]], [[Sidereal vs solar time]], [[Alt-azimuth ↔ equatorial transformations]] |
| `sphereastro2-XX.png` | `1.2 Astronomia sferica parte 2 _EN copy.pdf` | **27** (01 to 27) | [[Fundamentals_course_intro]], [[Ecliptic system]], [[Galactic coordinate system]], [[Precession and nutation]], [[Atmospheric refraction]], [[Aberration of light]], [[Annual stellar parallax]], [[Proper motion and stellar kinematics]] |
| `radiative-XX.png` | `3. Radiative processes- magnitudes revamp.pdf` | **68** (01 to 68) | [[Electromagnetic radiation basics]], [[Radiation quantities and inverse square law]], [[Blackbody radiation and Stefan-Boltzmann]], [[Stellar spectra and spectral classification]], [[Magnitudes and photometric systems]], [[Interstellar absorption]] |
| `stellar-XX.png` | `5. Stelle e evoluzione stellare_EN.pdf` | **87** (01 to 87) | [[Stellar scaling relations]], [[HR diagram]], [[Main sequence, giants, supergiants, white dwarfs]], [[Stellar structure equations]], [[Radiative transport]], [[Stellar nucleosynthesis]], [[Stellar evolution timescales]], [[Jeans theory and protostellar formation]], [[Pre-main sequence evolution and protostars]], [[Solar evolution and final stages]], [[Cluster ages from CMD turnoff]], [[Binary star evolution and mass transfer]], [[Supernovae and compact remnants]] |
| `milkyway-XX.png` | `6. La nostra galassia e il mezzo interstellare copyEN.pdf` | **41** (01 to 41) | [[Milky Way structure]], [[Stellar populations I II III]], [[Interstellar medium components and gas cycle]], [[Spiral arm kinematics]], [[Dark matter on galactic scales]], [[Galactic Center]] |
| `distancescale-XX.png` | `7. La scala delle distanze.pdf` | **23** (01 to 23) | [[Parallax and standard candles]], [[Cepheids and supernovae]], [[Type Ia supernovae as standard candles]], [[Hubble's law and cosmological redshift]] |
| `galaxies-XX.png` | `8. Le altre galassie copyEN.pdf` | **64** (01 to 64) | [[Galaxies in the local universe]], [[Hubble morphological sequence]], [[Galaxy morphology vs physical properties]], [[Galaxies across wavelengths]], [[Spectral energy distributions]] |
| `intro-XX.png` | `Introduction_fundamentals_2025_2026 copy.pdf` | **41** (01 to 41) | [[Fundamentals_course_intro]], [[Cosmological principle]], [[Cosmic_inventory_overview]], [[Cosmic_inventory_photons]], [[Cosmic_inventory_baryons]], [[Cosmic_inventory_dark_matter]], [[Cosmic_inventory_dark_energy]] |
| `bbn-XX.png` | `BBN.pdf` | **50** (01 to 50) | [[BBN_overview]], [[BBN_NSE_initial_conditions]], [[BBN_baryon_to_photon_ratio]], [[BBN_neutron_proton_ratio]], [[BBN_three_steps]], [[BBN_predictions]], [[BBN_observations]], [[BBN_concordance_with_CMB]] |
| **TOTAL** | **9 Slide Decks** | **433** | **100% Fully Referenced and Embedded** |

---

## Oral Exam Defense Preparation Matrix

tailored for the oral exam with **Prof. Nicola Bartolo** & **Prof. Giulia Rodighiero**:

### Prof. Giulia Rodighiero's favorite blackboard topics (Astrophysics & Observations):
1. **Coordinate Rotations**: Write down the matrix/spherical trig transformation from Alt-Az to Equatorial and Equatorial to Ecliptic. Explain sidereal time $\Theta = h + \alpha$.
2. **Atmospheric Refraction & Aberration**: Derive $R \approx 1'\tan z$. Explain why setting Sun is squashed vertically. Distinguish aberration (velocity, $20.5''$) from parallax (position, $1/d$).
3. **Jeans Gravitational Instability**: Write continuity, Euler, and Poisson equations. Linearize, perform the Jeans swindle, derive $\omega^2 = k^2 c_s^2 - 4\pi G \rho_0$, define Jeans length $\lambda_J$ and mass $M_J$. Contrast with Virial theorem energetic derivation.
4. **Stellar Structure & Nuclear Burning**: Write the 4 differential equations of stellar structure. Explain Schwarzschild criterion for convection. Walk through pp-chains and CNO cycle. Explain why CNO dominates at $M > 1.5 M_\odot$.
5. **HR Diagram & Isochrones**: Draw an HR diagram with constant radius diagonals. Sketch the post-MS track of a $1 M_\odot$ star (SGB, RGB, He-flash, HB, AGB, PN, WD). Explain how MSTO dates star clusters.
6. **Milky Way Kinematics & Dark Matter**: Derive Oort constants $A$ and $B$. Explain Lin-Shu density wave theory and the winding problem. Show how flat rotation curves $V \approx \text{const}$ require $\rho \propto R^{-2}$ and $M \propto R$. Describe S2 orbit proving Sgr A* black hole.
7. **Whirlpool Galaxy (M51) Multi-wavelengths**: Go through X-ray, UV, Optical, $H\alpha$, NIR, FIR, 21 cm HI, and radio continuum emission mechanisms.
8. **Stellar Population Synthesis**: Explain how an SSP is synthesized from an IMF (Salpeter/Chabrier) and isochrones. Explain multi-band SED fitting for $M_*$, SFR, and $A_V$.

### Prof. Nicola Bartolo's favorite blackboard topics (Cosmology):
1. **Cosmic Inventory**: State the current $\Lambda$CDM budget ($\Omega_b h^2 = 0.0224$, $\Omega_{dm} h^2 = 0.120$, $\Omega_\Lambda = 0.685$, $\Omega_k \approx 0$, $H_0 = 67.4$). List the 4 ways to weigh baryons and the missing baryon resolution (WHIM).
2. **Newtonian & Relativistic Friedmann Equations**: Derive the 1st Friedmann equation from a Newtonian expanding sphere. Write both Friedmann equations with $\Lambda$. Show density scaling: $\rho_r \propto a^{-4}$, $\rho_m \propto a^{-3}$, $\rho_\Lambda = \text{const}$.
3. **Cosmological Redshift & Distances**: Prove $1+z = a_0/a(t)$. Derive the relationship between luminosity distance $d_L$ and angular diameter distance $d_A = d_L / (1+z)^2$.
4. **Thermal History & Freeze-out**: Explain the decoupling condition $\Gamma \sim H$. Derive $n \propto T^3$ and $\rho \propto T^4$. Explain why entropy conservation $s a^3 = \text{const}$ heats photons to $T_\gamma = (11/4)^{1/3}T_\nu$ during $e^+ e^-$ annihilation.
5. **Big Bang Nucleosynthesis**:
   - Write the NSE equation for $n_A$.
   - Calculate $(n/p)_{\text{eq}} = e^{-Q/T}$ ($Q = 1.293$ MeV).
   - Explain weak freeze-out at $T \sim 0.8$ MeV giving $n/p \approx 1/6$.
   - Account for neutron decay during the Deuterium bottleneck down to $T \sim 0.08$ MeV giving $n/p \approx 1/7$.
   - Derive the helium mass fraction formula $Y_p = \frac{2(n/p)}{1 + n/p} \approx 0.25$.
   - Discuss the BBN-CMB concordance and the Lithium problem.
6. **Recombination vs Saha Equation**: Explain why hydrogen recombines at $T \sim 0.3$ eV ($z \sim 1100$) instead of $13.6$ eV (entropy effect $\eta \sim 10^{-9}$).
7. **Cosmic Perturbations & Structure Growth**: Derive $\ddot\delta + 2H\dot\delta - 4\pi G \bar\rho \delta = 0$. Solve for matter-dominated universe ($\delta \propto a$) and explain why dark energy freezes growth.

---

## Essential Formulas Quick Sheet

| physical relation | formula | key applications |
|---|---|---|
| **Stefan-Boltzmann Luminosity** | $L = 4\pi R^2 \sigma T_{\text{eff}}^4$ | stellar radii, HR diagram |
| **Mass-Luminosity Scaling** | $L \propto M^{3.5-4.0}$ | main sequence, stellar lifetimes |
| **Main Sequence Lifetime** | $t_{\text{MS}} \approx 10^{10} (M/M_\odot)^{-2.5}$ yr | cluster turnoff age dating |
| **Hydrostatic Equilibrium** | $\frac{dP}{dr} = -\frac{G M(r)\rho}{r^2}$ | stellar and planetary interior structure |
| **Jeans Wavevector & Length** | $k_J = \frac{\sqrt{4\pi G\rho_0}}{c_s}, \quad \lambda_J = c_s\sqrt{\frac{\pi}{G\rho_0}}$ | gravitational instability threshold |
| **Jeans Mass** | $M_J = \frac{\pi}{6}\rho_0 \lambda_J^3 \propto T^{3/2}\rho_0^{-1/2}$ | star formation in molecular clouds |
| **Atmospheric Refraction** | $R \approx 60'' \tan z_{\text{app}}$ | telescope pointing, sunset flattening |
| **Aberration Constant** | $\kappa = \frac{v}{c} \approx 20.5''$ | Bradley aberration ellipse |
| **Trigonometric Parallax** | $d(\text{pc}) = \frac{1}{p(\text{arcsec})}$ | fundamental geometric distance rung |
| **Proper Motion Tangential Velocity** | $v_t = 4.74 \, d(\text{pc}) \, \mu(''/\text{yr})$ | stellar space kinematics |
| **Pogson Magnitude Relation** | $m_1 - m_2 = -2.5\log_{10}(F_1/F_2)$ | astronomical photometry |
| **Distance Modulus with Extinction** | $\mu = m - M = 5\log_{10} d - 5 + A_\lambda$ | distance measurement |
| **Interstellar Extinction & Color Excess** | $A_V = R_V E(B-V) \approx 3.1 E(B-V)$ | dust dereddening |
| **Enclosed Mass in Flat Rotation** | $M(R) = \frac{V_0^2 R}{G} \propto R$ | galactic dark matter halo proof |
| **Oort Constants** | $A = \frac{1}{2}(V_0/R_0 - dV/dR_0), \; B = -\frac{1}{2}(V_0/R_0 + dV/dR_0)$ | Galactic differential rotation |
| **Hubble's Law** | $v = H_0 d$ | cosmic expansion velocity |
| **Cosmological Redshift** | $1 + z = \frac{\lambda_{\text{obs}}}{\lambda_{\text{emit}}} = \frac{1}{a(t)}$ | metric expansion of spacetime |
| **1st Friedmann Equation** | $H^2 = \left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{k c^2}{a^2} + \frac{\Lambda c^2}{3}$ | cosmic expansion dynamics |
| **BBN Frozen Helium Mass Fraction** | $Y_p = \frac{2(n/p)}{1 + n/p} \approx 0.25$ | primordial light element synthesis |
| **Baryon-to-Photon Ratio** | $\eta = 2.68 \times 10^{-8} (\Omega_b h^2) \approx 6 \times 10^{-10}$ | BBN and CMB peak loading |
| **Linear Perturbation Growth Equation** | $\ddot\delta + 2H\dot\delta - 4\pi G\bar\rho\delta = 0$ | cosmic structure formation |

---

## Dynamic Zettel Index (Dataview)

```dataview
LIST
FROM "03_Zettel/Theory"
WHERE contains(file.outlinks, this.file.link) OR contains(file.inlinks, this.file.link)
SORT file.name ASC
```
