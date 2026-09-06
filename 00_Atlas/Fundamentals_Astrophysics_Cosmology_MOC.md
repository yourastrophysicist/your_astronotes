---
layout: default
title: "Fundamentals_Astrophysics_Cosmology_MOC"
---

# Fundamentals of Astrophysics and Cosmology  -  Map of Content

A.Y. 2025/2026  -  **Prof. Nicola Bartolo** (cosmology block) and **Prof. Giulia Rodighiero** (astrophysics / observations block), with tutor Dr. Ripalta Amoruso. University of Padova.

This is the first-semester foundation course. It sits underneath everything else: it teaches the *language* in which the rest of my degree is written. spherical astronomy gives me the coordinates to point at the sky. radiative mechanisms give me the photons. stellar evolution and the Milky Way give me the actors. external galaxies and the distance scale give me the stage. and then cosmology comes in and asks the dangerous question, *what is the stage made of, and why is it expanding?*

The central thread is a chain that I keep coming back to:
$$\text{coordinates} \to \text{distances} \to \text{flux and magnitudes} \to \text{spectra} \to \text{HR diagram} \to \text{galaxies} \to \text{Hubble law} \to \text{Friedmann} \to \text{thermal history} \to \text{BBN, recombination, CMB} \to \text{perturbations and structures}$$

every later course (Observational Cosmology, High Energy Instrumentation, GR) is some specialized refinement of one piece of this chain. so this MOC is the **trunk**, and the other MOCs ([Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.html), [Lab_High-Energy_MOC](../00_Atlas/Lab_High-Energy_MOC.html), [General_Relativity_MOC](../00_Atlas/General_Relativity_MOC.html)) are the **branches**.

---

## Reference texts

- **Karttunen, Oja, Poutanen, Donner**, *Fundamental Astronomy*  -  the spherical astronomy and stellar evolution backbone
- **Bennett, Donahue, Schneider, Voit**, *The Cosmic Perspective*  -  accessible companion for chapters 2 and S1
- **Schneider**, *Extragalactic Astronomy and Cosmology*, 2nd ed.  -  galaxies and cosmology rigorous treatment
- **Coles & Lucchin**, *Cosmology: The Origin and Evolution of Cosmic Structure* (Wiley 2002)  -  the european standard for structure formation
- **Kolb & Turner**, *The Early Universe* (Addison-Wesley 1990)  -  still the bible for thermal history and BBN
- **Baumann**, *Cosmology* (Part III Cambridge lecture notes, see [Baumann_reference](../02_Zettel/Theory/Baumann_reference.html))  -  modern, clean derivations, the back-up text I keep open while reading the slides

---

## Block 0  -  Course frame

- [Fundamentals_course_intro](../02_Zettel/Theory/Fundamentals_course_intro.html)  -  what this course is, who teaches it, how the program connects to the later MOCs

---

## Block 1  -  Spherical astronomy and celestial mechanics

before any astrophysics, just *how do we point at the sky*. this block is mostly geometry and rotations, but every observation in every later course assumes I know which coordinate frame I am in.

- [Celestial sphere and great circles](../02_Zettel/Theory/Celestial sphere and great circles.html)  -  celestial sphere as a directional sphere, great vs small circles, spherical triangle, spherical excess $E = A+B+C - 180°$, area $= Er^2$
- [Spherical trigonometry](../02_Zettel/Theory/Spherical trigonometry.html)  -  coordinate rotation by $\chi$, the three working equations $\cos\psi'\cos\theta' = \cos\psi\cos\theta$, $\sin\psi'\cos\theta' = \sin\psi\cos\theta\cos\chi + \sin\theta\sin\chi$, $\sin\theta' = \sin\theta\cos\chi - \sin\chi\sin\psi\cos\theta$, sine rule $\sin a/\sin A = \sin b/\sin B = \sin c/\sin C$
- [Earth coordinates](../02_Zettel/Theory/Earth coordinates.html)  -  geographic latitude $\phi$, longitude $\theta$, parallels and meridians, distance between two locations on Earth ($\cos a = \cos A \sin b \sin c + \cos b \cos c$)
- [Horizontal alt-azimuth system](../02_Zettel/Theory/Horizontal alt-azimuth system.html)  -  zenith, nadir, vertical circles, azimuth $A \in [0°,360°]$, height $a \in [-90°,+90°]$, zenith distance $z = 90° - a$, depends on time and on observer location
- [Equatorial system](../02_Zettel/Theory/Equatorial system.html)  -  celestial equator and pole, $\gamma$ point (vernal equinox), right ascension $\alpha$, declination $\delta$, hour angle $h$, sidereal time $\Theta = h + \alpha$, independent of observer (catalogable!)
- [Sidereal vs solar time](../02_Zettel/Theory/Sidereal vs solar time.html)  -  sidereal day = stars repeat, solar day = sun repeats, sidereal goes 3m56s faster per day
- [Alt-azimuth ↔ equatorial transformations](../02_Zettel/Theory/Alt-azimuth ↔ equatorial transformations.html)  -  $\sin h \cos\delta = \sin A \cos a$; $\cos h \cos\delta = \cos A \cos a \sin\phi + \sin a \cos\phi$; $\sin\delta = -\cos A \cos a \cos\phi + \sin a \sin\phi$ (and the inverse)
- [Culmination and rise/set](../02_Zettel/Theory/Culmination and rise-set.html)  -  upper culmination $a_{max}$, lower culmination $a_{min}$, rise/set condition $\cos h_{s,t} = -\tan\delta\tan\phi$, circumpolar if $\delta + \phi > 90°$, never visible if $\delta < \phi - 90°$

---

## Block 2  -  Radiative mechanisms and magnitudes

- [Electromagnetic radiation basics](../02_Zettel/Theory/Electromagnetic radiation basics.html)  -  intensity, radiation density, luminosity
- [Blackbody radiation and Stefan-Boltzmann](../02_Zettel/Theory/Blackbody radiation and Stefan-Boltzmann.html)  -  $B_\nu(T) = (2h\nu^3/c^2)/(e^{h\nu/k_BT}-1)$, $L = 4\pi R^2 \sigma T^4$
- [Stellar spectra and spectral classification](../02_Zettel/Theory/Stellar spectra and spectral classification.html)  -  OBAFGKM, line strengths, ionization states
- [Magnitudes and photometric systems](../02_Zettel/Theory/Magnitudes and photometric systems.html)  -  Pogson $m_1 - m_2 = -2.5\log(F_1/F_2)$, $M = m - 5\log(d/10\,\text{pc})$, color indices, UBV, AB system, bolometric
- [Interstellar absorption](../02_Zettel/Theory/Interstellar absorption.html)  -  extinction $A_\lambda$, reddening $E(B-V)$, dust column

---

## Block 3  -  Stellar evolution

- [HR diagram](../02_Zettel/Theory/HR diagram.html)  -  luminosity vs effective temperature, the central tool of stellar astrophysics
- [Main sequence, giants, supergiants, white dwarfs](../02_Zettel/Theory/Main sequence, giants, supergiants, white dwarfs.html)
- [Stellar scaling relations](../02_Zettel/Theory/Stellar scaling relations.html)  -  radius, temperature, luminosity, distance from spectra
- [Stellar structure equations](../02_Zettel/Theory/Stellar structure equations.html)  -  mass conservation, hydrostatic equilibrium, energy generation, energy transport
- [Radiative transport](../02_Zettel/Theory/Radiative transport.html)  -  opacity, mean free path, Eddington approximation
- [Stellar nucleosynthesis](../02_Zettel/Theory/Stellar nucleosynthesis.html)  -  pp chain, CNO cycle, triple-alpha, advanced burning
- [Stellar evolution timescales](../02_Zettel/Theory/Stellar evolution timescales.html)  -  dynamical, Kelvin-Helmholtz, nuclear
- [Jeans theory and protostellar formation](../02_Zettel/Theory/Jeans theory and protostellar formation.html)  -  gravitational instability, $M_J \propto T^{3/2}/\rho^{1/2}$
- [Solar evolution and final stages](../02_Zettel/Theory/Solar evolution and final stages.html)  -  sun lifecycle, AGB, massive star endpoints, supernova types

---

## Block 4  -  The Milky Way and the interstellar medium

- [Milky Way structure](../02_Zettel/Theory/Milky Way structure.html)  -  disk, bulge, halo, components
- [Interstellar medium components and gas cycle](../02_Zettel/Theory/Interstellar medium components and gas cycle.html)  -  molecular, atomic neutral, ionized, hot phases
- [Spiral arm kinematics](../02_Zettel/Theory/Spiral arm kinematics.html)  -  rotation curve, density wave theory
- [Dark matter on galactic scales](../02_Zettel/Theory/Dark matter on galactic scales.html)  -  flat rotation curves, see [Cosmic_inventory_dark_matter](../02_Zettel/Theory/Cosmic_inventory_dark_matter.html)
- [Galactic Center](../02_Zettel/Theory/Galactic Center.html)  -  Sgr A*, central black hole

---

## Block 5  -  External galaxies

- [Galaxies in the local universe](../02_Zettel/Theory/Galaxies in the local universe.html)  -  populations, morphologies
- [Hubble morphological sequence](../02_Zettel/Theory/Hubble morphological sequence.html)  -  E, S0, Sa-Sc, Irr; tuning fork
- [Galaxy morphology vs physical properties](../02_Zettel/Theory/Galaxy morphology vs physical properties.html)  -  color-mass, age, gas content
- [Galaxies across wavelengths](../02_Zettel/Theory/Galaxies across wavelengths.html)  -  multi-wavelength SEDs
- [Spectral energy distributions](../02_Zettel/Theory/Spectral energy distributions.html)  -  SPS, IMF, stellar mass, SFR
- [Galaxy clusters and overview of evolution](../02_Zettel/Theory/Galaxy clusters and overview of evolution.html)  -  virial mass, cluster scaling

---

## Block 6  -  From local universe to cosmological distances

- [Parallax and standard candles](../02_Zettel/Theory/Parallax and standard candles.html)  -  trigonometric parallax, $d_{pc} = 1/p_{arcsec}$
- [Cepheids and supernovae](../02_Zettel/Theory/Cepheids and supernovae.html)  -  Leavitt period-luminosity, SN Ia as distance indicators
- [Hubble's law and cosmological redshift](../02_Zettel/Theory/Hubble's law and cosmological redshift.html)  -  $v = H_0 d$ (low z), $1+z = a_0/a$ (general)

---

## Block 7  -  Fundamental concepts of cosmology

this is the cosmology block proper. it starts from observations and lands at Friedmann.

- [Cosmic_inventory_overview](../02_Zettel/Theory/Cosmic_inventory_overview.html)  -  the master overview: photons, baryons, dark matter, neutrinos, dark energy, $\Omega_m \approx 0.31$, $\Omega_\Lambda \approx 0.685$, $\Omega_b h^2 = 0.0224$, $\Omega_{dm} h^2 = 0.120$
- [Cosmic_inventory_photons](../02_Zettel/Theory/Cosmic_inventory_photons.html)  -  CMB blackbody at $T_0 = 2.725$ K, $n_\gamma \simeq 422$ cm$^{-3}$, $\Omega_{0\gamma} \simeq 2.47 \times 10^{-5}\, h^{-2}$, COBE/FIRAS, spectral distortions
- [Cosmic_inventory_baryons](../02_Zettel/Theory/Cosmic_inventory_baryons.html)  -  four ways to weigh baryons, missing baryon problem, $\Omega_b h^2 = 0.0224$
- [Cosmic_inventory_dark_matter](../02_Zettel/Theory/Cosmic_inventory_dark_matter.html)  -  rotation curves, mass-to-light ratio, BAO, CMB anisotropies, $\Omega_{dm} h^2 = 0.120$
- [Cosmic_inventory_neutrinos](../02_Zettel/Theory/Cosmic_inventory_neutrinos.html)  -  fermions, decoupling at T~1 MeV, $T_\nu = (4/11)^{1/3} T_\gamma$, $\sum m_\nu < 0.12$ eV
- [Cosmic_inventory_dark_energy](../02_Zettel/Theory/Cosmic_inventory_dark_energy.html)  -  Hubble diagram at high z, SN Ia, age problem, $\Omega_\Lambda = 0.685$, equation of state $w \simeq -1$
- [Matter power spectrum and BAO](../02_Zettel/Theory/Matter power spectrum and BAO.html)  -  $P_m(k)$ turnover at equality scale, BAO wiggles in galaxy distribution
- [Cosmological principle](../02_Zettel/Theory/Cosmological principle.html)  -  homogeneous and isotropic on scales $> 100$ Mpc
- [Hubble law derivation low-z](../02_Zettel/Theory/Hubble law derivation low-z.html)  -  Doppler $z = v/c$, expansion vs Doppler, low-redshift form of $d_L$
- [Robertson-Walker metric](../02_Zettel/Theory/Robertson-Walker metric.html)  -  $ds^2 = dt^2 - a^2(t)[dr^2/(1-kr^2) + r^2 d\Omega^2]$, comoving vs physical, scale factor, $H \equiv \dot a/a$
- [Curvature parameter k](../02_Zettel/Theory/Curvature parameter k.html)  -  $k = 0$ flat, $+1$ closed, $-1$ open
- [Hubble constant and deceleration parameter](../02_Zettel/Theory/Hubble constant and deceleration parameter.html)  -  $H_0 = 67.4 \pm 0.5$ (Planck) vs $73.04 \pm 1.04$ (SN Ia local)  -  the **Hubble tension**, $q_0 \equiv -\ddot a a/\dot a^2$
- [Cosmological distances](../02_Zettel/Theory/Cosmological distances.html)  -  comoving, proper, angular-diameter $d_A$, luminosity $d_L = (1+z)^2 d_A$
- [Newtonian Friedmann derivation](../02_Zettel/Theory/Newtonian Friedmann derivation.html)  -  shell argument, $\dot a^2 = (8\pi G\rho_0/3)a^{-1} - kc^2$
- [Friedmann equations with Λ](../02_Zettel/Theory/Friedmann equations with Lambda.html)  -  Einstein eqs with $\Lambda$, perfect-fluid $T^{\mu\nu}$, vacuum energy as $\rho_V$, $\dot a^2 + kc^2 = (8\pi G/3)\rho a^2 + (\Lambda/3) a^2$
- [Friedmann models](../02_Zettel/Theory/Friedmann models.html)  -  Milne empty universe, EdS matter, radiation-dominated, Λ-dominated de Sitter, closed, open
- [Density parameters and flatness](../02_Zettel/Theory/Density parameters and flatness.html)  -  $\Omega_m$, $\Omega_\gamma$, $\Omega_\Lambda$, $\Omega_k = 1 - \Omega_0 = 0.001 \pm 0.002$, very nearly flat
- [Hubble law exact form](../02_Zettel/Theory/Hubble law exact form.html)  -  $d_L = (c/H_0)[z + \tfrac12(1 - q_0)z^2 + \cdots]$, why low-z linearity breaks down

---

## Block 8  -  Thermal history and the early universe

- [Brief thermal history](../02_Zettel/Theory/Brief thermal history.html)  -  Planck → GUT → inflation → quark-hadron → BBN → equality → recombination → reionization → today
- [Thermal equilibrium in the early universe](../02_Zettel/Theory/Thermal equilibrium in the early universe.html)  -  Bose-Einstein and Fermi-Dirac, $g_*$ effective relativistic dof
- [Number density and energy density at thermal equilibrium](../02_Zettel/Theory/Number density and energy density at thermal equilibrium.html)  -  $n \propto T^3$, $\rho \propto g_* T^4$ for relativistic species
- [Conservation of entropy in a comoving volume](../02_Zettel/Theory/Conservation of entropy in a comoving volume.html)  -  $s a^3 = $ const, $s = (2\pi^2/45) g_{*s} T^3$
- [Temperature-time relation](../02_Zettel/Theory/Temperature-time relation.html)  -  $H \propto T^2$ (radiation dominated), $T \propto 1/a$
- [Standard model problems](../02_Zettel/Theory/Standard model problems.html)  -  horizon, flatness, monopoles
- [Inflation overview](../02_Zettel/Theory/Inflation overview.html)  -  solving horizon and flatness, generic predictions
- [Inflaton scalar field dynamics](../02_Zettel/Theory/Inflaton scalar field dynamics.html)  -  $\rho_\phi = \tfrac12 \dot\phi^2 + V(\phi)$, $p_\phi = \tfrac12\dot\phi^2 - V(\phi)$
- [Old vs new vs chaotic inflation, slow-roll](../02_Zettel/Theory/Old vs new vs chaotic inflation, slow-roll.html)  -  Guth, Linde, slow-roll parameters $\epsilon$, $\eta$
- [Baryogenesis](../02_Zettel/Theory/Baryogenesis.html)  -  Sakharov conditions, baryon asymmetry $\eta_B \sim 10^{-10}$
- [Decoupling and freeze-out](../02_Zettel/Theory/Decoupling and freeze-out.html)  -  $\Gamma \lesssim H$, particle goes out of equilibrium
- [BBN_overview](../02_Zettel/Theory/BBN_overview.html)  -  primordial nucleosynthesis: $T \sim 0.1$ MeV, $X_{^4He} \approx 0.25$, D/H $\sim 10^{-5}$, ${}^7$Li/H $\sim 10^{-10}$
- [BBN_NSE_initial_conditions](../02_Zettel/Theory/BBN_NSE_initial_conditions.html)  -  nuclear statistical equilibrium, $n_A = g_A A^{3/2}(m_N T/2\pi)^{3/2} 2^{-A}(n_p)^Z(n_n)^{A-Z} e^{B_A/T}$, mass fractions $X_A$
- [BBN_baryon_to_photon_ratio](../02_Zettel/Theory/BBN_baryon_to_photon_ratio.html)  -  $\eta = n_N/n_\gamma = 2.68\times10^{-8} (\Omega_b h^2)$, why entropy delays NSE down to 0.3 MeV not the binding energies
- [BBN_neutron_proton_ratio](../02_Zettel/Theory/BBN_neutron_proton_ratio.html)  -  $(n/p)_{EQ} = e^{-Q/T}$ with $Q = 1.293$ MeV, freeze-out at T ~ 0.8 MeV when $\Gamma_w \sim H$, frozen value $\sim 1/6$, decay during the wait $\to 1/7$
- [BBN_three_steps](../02_Zettel/Theory/BBN_three_steps.html)  -  Step 1 ($T \sim 10$ MeV): all in NSE, abundances tiny. Step 2 ($T \sim 1$ MeV): n/p freeze-out, $e^\pm$ annihilation, photon temperature jumps by $(11/4)^{1/3}$. Step 3 ($T \sim 0.3 \to 0.1$ MeV): D bottleneck, then ${}^4$He synthesis, $X_4 \approx 1/4$
- [BBN_predictions](../02_Zettel/Theory/BBN_predictions.html)  -  $Y_p$ as function of $\eta$, ${}^7$Li trough, dependence on $g_*$ and on $\tau_{1/2}(n)$
- [BBN_observations](../02_Zettel/Theory/BBN_observations.html)  -  D from quasar Ly$\alpha$ absorbers at z~3-4, ${}^4$He from metal-poor HII regions, ${}^7$Li from metal-poor halo stars (Spite plateau), the Lithium problem
- [BBN_concordance_with_CMB](../02_Zettel/Theory/BBN_concordance_with_CMB.html)  -  independent measurements of $\Omega_b h^2$ from BBN and from CMB peaks both give $0.0224$
- [Saha equation and recombination](../02_Zettel/Theory/Saha equation and recombination.html)  -  $n_e n_p / n_H = (m_e T/2\pi)^{3/2} e^{-B_H/T}$, recombination at $T \sim 0.3$ eV ($z \sim 1100$) not at the H binding energy 13.6 eV  -  same entropy argument as BBN
- [Photon decoupling and CMB](../02_Zettel/Theory/Photon decoupling and CMB.html)  -  last scattering surface, free-streaming photons, T_CMB(z) = T_0 (1+z)
- [Boltzmann equation in cosmology](../02_Zettel/Theory/Boltzmann equation in cosmology.html)  -  $df/dt = C[f]$, applications to relics, recombination, BBN
- [Hot vs cold dark matter](../02_Zettel/Theory/Hot vs cold dark matter.html)  -  relativistic at decoupling vs not, present abundance from freeze-out, structure formation imprint
- [Dark matter relics  -  WIMP miracle](../02_Zettel/Theory/Dark matter relics - WIMP miracle.html)  -  thermal freeze-out yields $\Omega_{dm} h^2 \sim 0.1$ for weak-scale cross-sections

---

## Block 9  -  Formation of cosmic structure

- [Linear evolution of perturbations in expanding universe](../02_Zettel/Theory/Linear evolution of perturbations in expanding universe.html)  -  fluid Euler + Poisson, Newtonian limit, density contrast $\delta = \delta\rho/\bar\rho$
- [Jeans analysis in expanding universe](../02_Zettel/Theory/Jeans analysis in expanding universe.html)  -  pressure vs gravity, $\lambda_J = c_s\sqrt{\pi/G\rho}$
- [Growth factor D(z)](../02_Zettel/Theory/Growth factor D(z).md)  -  matter-dominated $\delta \propto a$, radiation suppression (Meszaros effect), Λ suppression
- [Spherical collapse](../02_Zettel/Theory/Spherical collapse.html)  -  $\delta_c \approx 1.686$ for collapse, virial overdensity $\sim 200$
- [Press-Schechter halo mass function](../02_Zettel/Theory/Press-Schechter halo mass function.html)  -  abundance of dark-matter halos as function of mass

---

## Appendix  -  figure index

all figures live in `07_Images/Fundamentals_Astro_Cosmology/`. they are slide pages from the four lecture PDFs, named by source:

- `intro-XX.png`  -  Bartolo's intro lectures (cosmic inventory, components of the universe)
- `bbn-XX.png`  -  Bartolo's BBN deep dive
- `sphereastro-XX.png`  -  Rodighiero's spherical astronomy slides

individual figures are referenced inline in each zettel note.

---

## See also

- [Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.html)  -  last year's course, the natural follow-on
- [Lab_High-Energy_MOC](../00_Atlas/Lab_High-Energy_MOC.html)  -  instrumentation, the *how do we measure* sister course
- [General_Relativity_MOC](../00_Atlas/General_Relativity_MOC.html)  -  exam prep, the math substrate of Friedmann
- [Mathematical_Numerical_Methods_MOC](../00_Atlas/Mathematical_Numerical_Methods_MOC.html)  -  Mapelli's toolbox course, what makes every cosmology integral *return a number*
- [Astronomical_Interferometry_MOC](../00_Atlas/Astronomical_Interferometry_MOC.html)  -  D'Onofrio's interferometry course, the *how do we image at sub-mas* sister course

---

## Dynamic Zettel Index (Dataview)

```dataview
LIST
FROM "03_Zettel/Theory"
WHERE contains(file.outlinks, this.file.link) OR contains(file.inlinks, this.file.link)
SORT file.name ASC
```