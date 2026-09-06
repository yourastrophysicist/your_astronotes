---
layout: default
title: "Astronomical_Spectroscopy_MOC"
---

# Astronomical Spectroscopy  -  Map of Content

A.Y. 2025/2026, second semester at the University of Padova. **Prof. Stefano Ciroi**, with course materials based on lectures from Prof. Piero Rafanelli and Dr. Giovanni La Mura. lecture material at : `intro_spec.pdf` (instrumentation), `notes_28Jul2021.pdf` (theory).

unlike [Observational_Astrophysics_MOC](../00_Atlas/Observational_Astrophysics_MOC.html) which treats the photon as a single number to be detected and calibrated, this course treats the photon as a **spectrum**: a wavelength-resolved fingerprint of the gas it last interacted with. every quantity in spectroscopy comes from one of two physical settings:

1. **stellar atmospheres**: thin photospheric layer, near-LTE, absorption lines on a continuum.
2. **photoionised nebulae**: optically thin gas, far from LTE, emission lines + recombination continuum.

the conceptual chain:
$$\text{atom physics} \to \text{level populations} \to \text{radiative transfer} \to \text{spectral lines} \to \text{spectrograph} \to \text{calibrated spectrum} \to \text{plasma diagnostics}$$

every later course (Stellar Astrophysics, Galaxies, Lab High-Energy in X-ray spectroscopy mode) builds on a piece of this chain. so this MOC sits next to [Observational_Astrophysics_MOC](../00_Atlas/Observational_Astrophysics_MOC.html) as the **other half** of the observational toolkit.

## reference texts

- **Ciroi**, *Astronomical Spectroscopy* (Padova lecture notes, 2019-2020), the course backbone.
- **Rutten**, *Radiative Transfer in Stellar Atmospheres* (Utrecht lectures), free online, the standard graduate text.
- **Osterbrock & Ferland**, *Astrophysics of Gaseous Nebulae and Active Galactic Nuclei* (2006), the bible for emission-line plasmas.
- **Gray**, *The Observation and Analysis of Stellar Photospheres* (3rd ed.), the standard for stellar spectroscopy.
- **Mihalas**, *Stellar Atmospheres*, the classic rigorous treatment of radiative transfer.
- **Hansen, Kawaler, Trimble**, *Stellar Interiors*  -  for the connection to stellar structure.

## Block 0  -  course frame

- [Spectroscopy_course_intro](../02_Zettel/Theory/Spectroscopy_course_intro.html)  -  what this course is, the chain from atomic physics to plasma diagnostics, how it relates to other MOCs

## Block 1  -  diffraction, gratings, and the spectrograph

before any astrophysics, the **instrument**: how do we disperse light into a spectrum? this block is about the physics of the dispersing element (the grating), the optical layout of the spectrograph, the figures of merit, and the families of spectrograph design.

- [Single slit diffraction](../02_Zettel/Theory/Single slit diffraction.html)  -  Fraunhofer pattern $I = A_0^2 \sin^2\beta/\beta^2$, $\beta = (\pi/\lambda) b\sin\theta$, zeros at $b\sin\theta = m\lambda$
- [N-slit interference and gratings](../02_Zettel/Theory/N-slit interference and gratings.html)  -  $I = A_0^2 (\sin^2\beta/\beta^2)(\sin^2 N\gamma/\sin^2\gamma)$, principal maxima at $d\sin\theta = m\lambda$
- [Grating equation](../02_Zettel/Theory/Grating equation.html)  -  $\sin\theta + \sin i = \rho m\lambda$, where $\rho$ = groove density, $i$ = incidence angle, $m$ = order
- [Blazed gratings](../02_Zettel/Theory/Blazed gratings.html)  -  sawtooth profile, blaze angle, throughput peaks at the design wavelength, multi-grating instruments
- [Spectrograph design](../02_Zettel/Theory/Spectrograph design.html)  -  slit, collimator, dispersing element, camera, detector. classical Boller & Chivens layout (Asiago T120)
- [Dispersion and spectral resolution](../02_Zettel/Theory/Dispersion and spectral resolution.html)  -  $\Delta\lambda/\Delta\theta = \cos\theta/(\rho m)$, $\Delta\lambda/\Delta x = \cos\theta/(\rho m f_{\rm cam})$, $R = \lambda/\Delta\lambda = \rho m W (F_{\rm coll}/s)$, the slit width $s = \alpha f_{\rm tel}$
- [Spectrograph types](../02_Zettel/Theory/Spectrograph types.html)  -  longslit, echelle, multi-object (MOS), integral-field (IFU), comparison
- [Echelle spectroscopy](../02_Zettel/Theory/Echelle spectroscopy.html)  -  high $m$, high $\rho$, cross-disperser, $R \sim 30\,000$ to $100\,000$
- [Multi-object spectroscopy MOS](../02_Zettel/Theory/Multi-object spectroscopy MOS.html)  -  slitlets, fibers, several spectra simultaneously across the field
- [Integral-field spectroscopy IFU](../02_Zettel/Theory/Integral-field spectroscopy IFU.html)  -  datacube $(x, y, \lambda)$, lenslets / fibers / slicer, MUSE, KCWI
- [Wavelength calibration](../02_Zettel/Theory/Wavelength calibration.html)  -  comparison lamps (HeAr, ThAr, NeAr), pixel-to-wavelength polynomial
- [Flux calibration](../02_Zettel/Theory/interf/Flux calibration.html)  -  spectrophotometric standard stars, sensitivity function, atmospheric extinction
- [Spectrum reduction pipeline](../02_Zettel/Theory/Spectrum reduction pipeline.html)  -  bias, dark, flat, sky subtraction, optimal extraction, wavelength + flux calibration

## Block 2  -  atomic spectroscopy fundamentals

the **language of spectra**: every line corresponds to a transition between two specific atomic states, labelled by quantum numbers, with a specific transition probability. this block is the QM minimum needed to read a spectrum.

- [Quantum numbers and atomic states](../02_Zettel/Theory/Quantum numbers and atomic states.html)  -  $n, \ell, m_\ell, s$, $L = \sum \vec\ell$, $S = \sum \vec s$, $J = L + S$, total $LS$ and $J$
- [Russell-Saunders LS coupling](../02_Zettel/Theory/Russell-Saunders LS coupling.html)  -  vectorial sum of $\vec L$ and $\vec S$, valid for light atoms ($Z \lesssim 30$)
- [jj coupling](../02_Zettel/Theory/jj coupling.html)  -  heavier atoms, individual $\vec j_i = \vec\ell_i + \vec s_i$ couple
- [Atomic term symbols](../02_Zettel/Theory/Atomic term symbols.html)  -  $n^{(2S+1)}L_J^{p}$ form: example $1\,^2\!S_{1/2}^e$ for H ground, parity $(-1)^{\sum\ell_i}$
- [Hund's rules](../02_Zettel/Theory/Hund's rules.html)  -  ground state from highest $S$, then highest $L$, then $J = |L-S|$ if shell less than half-filled, $J = L+S$ otherwise
- [Statistical weight g](../02_Zettel/Theory/Statistical weight g.html)  -  $g = (2L+1)(2S+1)$ for an $LS$ term, $g = 2J+1$ for a sublevel, total state degeneracy
- [Pauli principle and electron configurations](../02_Zettel/Theory/Pauli principle and electron configurations.html)  -  $1s^2 2s^2 2p^6 3s^1$ etc., shells and valence electrons
- [Equivalent vs nonequivalent electrons](../02_Zettel/Theory/Equivalent vs nonequivalent electrons.html)  -  counting of allowed terms (e.g. $np^2$: $^3P, ^1D, ^1S$ from $15$ microstates)
- [Selection rules](../02_Zettel/Theory/Selection rules.html)  -  $\Delta\ell = \pm 1$ for the jumping electron, $\Delta L = 0, \pm 1$ (not $0\to 0$), $\Delta J = 0, \pm 1$ (not $0 \to 0$), $\Delta S = 0$ (LS coupling), parity must change. electric dipole only.
- [Forbidden vs permitted vs semiforbidden transitions](../02_Zettel/Theory/Forbidden vs permitted vs semiforbidden transitions.html)  -  E1 (permitted), M1 + E2 (forbidden, $\sim 10^5$ to $10^8$ times weaker)
- [Energy level diagrams Grotrian](../02_Zettel/Theory/Energy level diagrams Grotrian.html)  -  plot of energy vs term, lines = allowed transitions
- [Rydberg-Ritz formula](../02_Zettel/Theory/Rydberg-Ritz formula.html)  -  $\Delta E = R_H(1/n^2 - 1/m^2)$, $R_H = 13.6$ eV
- [Hydrogen spectral series](../02_Zettel/Theory/Hydrogen spectral series.html)  -  Lyman ($n = 1$, UV), Balmer ($n = 2$, optical), Paschen ($n = 3$, NIR), Brackett ($n = 4$, NIR)
- [Helium energy levels](../02_Zettel/Theory/Helium energy levels.html)  -  singlet ($S = 0$, parahelium) vs triplet ($S = 1$, orthohelium), $1s^1 2s^1$, $1s^1 2p^1$ etc.
- [Sodium and alkalis](../02_Zettel/Theory/Sodium and alkalis.html)  -  $3s^1$ ground, D-doublet at $5890, 5896$ Å from $3p \to 3s$
- [Magnesium and alkali earths](../02_Zettel/Theory/Magnesium and alkali earths.html)  -  ground $1\,^1\!S_0$, b-triplet near $5170$ Å from $3p\,^3P \to 3s\,^3S$
- [Calcium and CaII H+K](../02_Zettel/Theory/Calcium and CaII H+K.html)  -  single-electron ion, $4s^1 \to 3p^6 4s^1$ ground, K $3934$ Å, H $3968$ Å, very strong in cool stars

## Block 3  -  population of energy levels

a spectral line has strength $\propto$ number of atoms in the lower level. so to predict a spectrum I need to know **how atoms distribute themselves across levels and ionisation stages**. this block is the statistical-mechanics input.

- [Boltzmann equation in spectroscopy](../02_Zettel/Theory/Boltzmann equation in spectroscopy.html)  -  $n_i/n_j = (g_i/g_j) e^{-(E_i - E_j)/k_BT}$, populations within an ion at given $T$
- [Saha ionisation equation](../02_Zettel/Theory/Saha ionisation equation.html)  -  $n_{i+1} n_e/n_i = (g_{i+1}/g_i)\,(2\pi m_e k_B T/h^2)^{3/2}\, e^{-\chi/k_BT}$, ratio of two adjacent ionisation stages
- [Partition function](../02_Zettel/Theory/Partition function.html)  -  $Z = \sum g_i e^{-E_i/k_BT}$, full statistical weight at temperature $T$
- [Population of excited levels](../02_Zettel/Theory/Population of excited levels.html)  -  Boltzmann + Saha together give $n_{ij} =$ (state $j$ of ion $i$). function of $T$, $n_e$
- [Hydrogen population vs T](../02_Zettel/Theory/Hydrogen population vs T.html)  -  H I lines maximised at $T \sim 10\,000$ K (A0 stars), Saha competes with Boltzmann
- [Helium population vs T](../02_Zettel/Theory/Helium population vs T.html)  -  He I and He II line strengths as $T$ thermometers in O and B stars
- [Sodium population vs T](../02_Zettel/Theory/Sodium population vs T.html)  -  Na I D lines saturate at low $T$ (cool stars)
- [Magnesium population vs T](../02_Zettel/Theory/Magnesium population vs T.html)  -  Mg I b in cool stars, Mg II h+k in UV for hotter
- [Calcium population vs T](../02_Zettel/Theory/Calcium population vs T.html)  -  Ca II K shows up at intermediate $T \sim 5000$ K
- [Why the Sequence OBAFGKM](../02_Zettel/Theory/Why the Sequence OBAFGKM.html)  -  the line-strength patterns of these elements, plotted vs $T$, naturally generate the OBAFGKM ordering. this is the punchline of Cecilia Payne's 1925 thesis.

## Block 4  -  radiation transport

photons emitted somewhere in a hot gas are absorbed and re-emitted on their way out. the equation of **radiative transfer** describes this. this block sets up the formalism for **stellar atmospheres** specifically.

- [Equation of radiative transfer](../02_Zettel/Theory/Equation of radiative transfer.html)  -  $dI_\nu/ds = -\kappa_\nu I_\nu + j_\nu$, absorption $\kappa$ and emission $j$
- [Optical depth](../02_Zettel/Theory/Optical depth.html)  -  $\tau_\nu = \int \kappa_\nu ds$, formal solution $I_\nu(\tau) = I_\nu(0) e^{-\tau} + \int_0^\tau S_\nu(\tau') e^{-(\tau - \tau')} d\tau'$
- [Source function](../02_Zettel/Theory/Source function.html)  -  $S_\nu \equiv j_\nu/\kappa_\nu$, in LTE $S_\nu = B_\nu(T)$
- [Local thermodynamic equilibrium LTE](../02_Zettel/Theory/Local thermodynamic equilibrium LTE.html)  -  populations follow Boltzmann + Saha at the local $T$, valid where collisions dominate radiation
- [Eddington-Barbier approximation](../02_Zettel/Theory/Eddington-Barbier approximation.html)  -  $I_\nu(0) \approx S_\nu(\tau = 1)$ for an emergent ray, the photon "sees" the layer at $\tau = 1$
- [Limb darkening](../02_Zettel/Theory/Limb darkening.html)  -  at the limb of the Sun the line of sight crosses cooler outer layers, intensity drops
- [Stellar atmosphere structure](../02_Zettel/Theory/Stellar atmosphere structure.html)  -  photosphere, chromosphere, corona, $T(\tau)$ profile
- [Continuum opacity sources](../02_Zettel/Theory/Continuum opacity sources.html)  -  H$^-$ in cool stars, electron scattering in hot stars, bound-free absorption

## Block 5  -  absorption lines

how an absorption line forms, what shape it has, and what physical conditions broaden it. this block is the diagnostic-by-line-shape framework.

- [Absorption coefficient and oscillator strength](../02_Zettel/Theory/Absorption coefficient and oscillator strength.html)  -  $\kappa_\nu = (\pi e^2/m_e c)\, n_l\, f_{lu}\, \phi(\nu)$, $f$ = oscillator strength
- [Line profile function phi nu](../02_Zettel/Theory/Line profile function phi nu.html)  -  normalised $\int \phi(\nu)\,d\nu = 1$, sets the line shape
- [Equivalent width](../02_Zettel/Theory/Equivalent width.html)  -  $W_\lambda = \int (1 - F_\lambda/F_c)\,d\lambda$, integrated absorption depth, dimensions of Å
- [Curve of growth](../02_Zettel/Theory/Curve of growth.html)  -  $W$ vs column density $N$: linear regime $W \propto N$, logarithmic saturation, square-root damping wings
- [Natural broadening Lorentzian](../02_Zettel/Theory/Natural broadening Lorentzian.html)  -  finite lifetime $\Delta E \cdot \Delta t \sim \hbar$, gives Lorentzian profile $\phi(\nu) \propto \gamma/[(\nu - \nu_0)^2 + (\gamma/2)^2]$
- [Thermal Doppler broadening](../02_Zettel/Theory/Thermal Doppler broadening.html)  -  Maxwell-Boltzmann velocity gives Gaussian profile, $\Delta\nu/\nu_0 = v_{\rm th}/c = \sqrt{2k_BT/m}/c$
- [Microturbulence](../02_Zettel/Theory/Microturbulence.html)  -  extra Gaussian broadening above pure thermal, on scales smaller than the line-forming region
- [Macroturbulence](../02_Zettel/Theory/Macroturbulence.html)  -  large-scale velocity field, broadens but preserves equivalent width
- [Collisional pressure broadening](../02_Zettel/Theory/Collisional pressure broadening.html)  -  perturbations from neighbouring particles, Lorentzian, $\propto P$ or $n_e$
- [Stark broadening](../02_Zettel/Theory/Stark broadening.html)  -  special case of pressure broadening from electric microfields, dominant for H lines in hot stellar atmospheres
- [Rotational broadening](../02_Zettel/Theory/Rotational broadening.html)  -  stellar rotation $v\sin i$ broadens lines, characteristic shape with horns at $v\sin i$ from limbs
- [Voigt profile](../02_Zettel/Theory/Voigt profile.html)  -  convolution of Lorentzian (natural + collisional) with Gaussian (thermal + turbulent), the standard line shape
- [Damping wings](../02_Zettel/Theory/Damping wings.html)  -  Lorentzian extension of Voigt at high column density, used to fit $\log gf$ from saturated lines

## Block 6  -  emission lines

in low-density photoionised gas, the line emission comes from collisional excitation, recombination cascades, and forbidden de-excitations. this block is the framework for **HII regions, planetary nebulae, AGN narrow-line regions**.

- [Collisional excitation rate](../02_Zettel/Theory/Collisional excitation rate.html)  -  $q_{lu} = \int v\,\sigma(v)\,f(v)\,dv$, function of electron $T_e$
- [Statistical equilibrium equations](../02_Zettel/Theory/Statistical equilibrium equations.html)  -  population balance: collisions up, collisions down, radiative decay
- [Two-level atom](../02_Zettel/Theory/Two-level atom.html)  -  toy problem: collisional excitation balanced by radiative + collisional de-excitation, defines the **critical density**
- [Critical density](../02_Zettel/Theory/Critical density.html)  -  $n_c = A_{ul}/q_{ul}$, transition from collision-limited to radiation-limited regime. forbidden lines have low $n_c$ (see below)
- [Optically thin recombination lines](../02_Zettel/Theory/Optically thin recombination lines.html)  -  Case A vs Case B, $H\alpha/H\beta = 2.86$ in Case B at $T = 10^4$ K
- [Case A vs Case B recombination](../02_Zettel/Theory/Case A vs Case B recombination.html)  -  Case A: optically thin to Lyman lines (escape), Case B: optically thick to Lyman, $n \to 1$ transitions trapped, only Balmer and higher series escape
- [Recombination line emissivity](../02_Zettel/Theory/Recombination line emissivity.html)  -  $j_\nu \propto n_e n_p \alpha_{\rm eff}(T)$, weak $T$ dependence
- [Forbidden lines](../02_Zettel/Theory/Forbidden lines.html)  -  magnetic-dipole or electric-quadrupole transitions, very low $A_{ul}$, no spontaneous decay in laboratory
- [OIII forbidden lines](../02_Zettel/Theory/OIII forbidden lines.html)  -  $[OIII]\,\lambda 4959, 5007, 4363$ Å, the workhorse $T_e$ diagnostic via line ratio
- [SII forbidden lines](../02_Zettel/Theory/SII forbidden lines.html)  -  $[SII]\,\lambda 6716, 6731$ Å doublet, the workhorse $n_e$ diagnostic
- [Forbidden line diagnostics](../02_Zettel/Theory/Forbidden line diagnostics.html)  -  $T_e$ from $\lambda 4363/(\lambda 4959+5007)$, $n_e$ from $\lambda 6716/\lambda 6731$, the two-tier nebular thermometer/densitometer
- [Dust extinction in nebulae](../02_Zettel/Theory/Dust extinction in nebulae.html)  -  Balmer decrement $H\alpha/H\beta$ vs $2.86$ measures $A_V$ along the line of sight
- [Dilution factor](../02_Zettel/Theory/Dilution factor.html)  -  at distance $r$ from the central star, the radiation field is diluted by $W = (R_\star/r)^2/4$, used in low-density regions

## Block 7  -  continuum sources

emission and absorption of the continuum in stellar atmospheres and ionised gas. each mechanism has a distinct spectral signature.

- [Recombination continuum](../02_Zettel/Theory/Recombination continuum.html)  -  free electron + ion $\to$ atom + photon. emissivity $j_\nu \propto n_e n_i T_e^{-1/2}$ above the recombination edge $h\nu \ge \chi$
- [Balmer continuum](../02_Zettel/Theory/Balmer continuum.html)  -  recombination of H to $n = 2$, edge at $3646$ Å, dominant nebular UV continuum
- [Free-free continuum](../02_Zettel/Theory/Free-free continuum.html)  -  $\equiv$ thermal bremsstrahlung. $j_\nu \propto n_e n_i T_e^{-1/2}$ exponentially cut off at $h\nu \sim k_B T_e$. see [Bremsstrahlung](../02_Zettel/Theory/Bremsstrahlung.html)
- [Synchrotron continuum](../02_Zettel/Theory/Synchrotron continuum.html)  -  relativistic electrons in B-field, power-law spectrum $F_\nu \propto \nu^{-\alpha}$ with $\alpha \sim 0.5$ to $1$. see [Synchroton](../02_Zettel/Theory/Synchroton.html)
- [Two-photon emission](../02_Zettel/Theory/Two-photon emission.html)  -  H I 2$s$ $\to$ 1$s$ via $2\gamma$, gives a smooth UV continuum, important in nebular UV
- [Thermal continuum from stellar photosphere](../02_Zettel/Theory/Thermal continuum from stellar photosphere.html)  -  approximately Planck $B_\nu(T)$, modulated by H$^-$ opacity in cool stars

## Block 8  -  ionisation equilibrium

balance of photoionisations and recombinations in a photoionised cloud. determines the ionisation state of every species.

- [Photoionization rate](../02_Zettel/Theory/Photoionization rate.html)  -  $\Gamma = \int_{\nu_0}^\infty (4\pi J_\nu/h\nu)\,\sigma_\nu\,d\nu$ where $\sigma_\nu$ is the bound-free cross section
- [Collisional ionisation rate](../02_Zettel/Theory/Collisional ionisation rate.html)  -  $C \propto n_e\,T^{1/2}\,e^{-\chi/k_BT}$, important in collisionally ionised plasmas (corona, SNR shocks)
- [Recombination rate](../02_Zettel/Theory/Recombination rate.html)  -  $\alpha_A(T) = \int v\sigma_{\rm rec}(v) f(v)\,dv$, sums over all final levels (Case A) or excludes ground (Case B)
- [Photoionisation balance](../02_Zettel/Theory/Photoionisation balance.html)  -  $n_X^{i+1} n_e \alpha = n_X^i \Gamma + n_X^i n_e C$, solve for ion fraction
- [Ionisation parameter U](../02_Zettel/Theory/Ionisation parameter U.html)  -  $U = Q_{H,\rm ion}/(4\pi r^2 n_H c)$, dimensionless ratio of photons to atoms

## Block 9  -  ionisation structure

once the ionisation balance per cell is known, the **spatial structure** of an ionised region follows. the canonical case is the Stromgren sphere.

- [Stromgren sphere](../02_Zettel/Theory/Stromgren sphere.html)  -  sphere of fully ionised H around an O star, radius $R_S = (3 Q_{H,\rm ion}/(4\pi n_H^2 \alpha_B))^{1/3}$, sharp boundary
- [Stromgren sphere derivation](../02_Zettel/Theory/Stromgren sphere derivation.html)  -  equate ionising photons emitted by the star to recombinations integrated over the sphere
- [Ionisation stratification](../02_Zettel/Theory/Ionisation stratification.html)  -  at fixed $r$, different species are ionised to different stages (HII inside, OII just outside, OIII deeper; etc.)
- [H I regions](../02_Zettel/Theory/H I regions.html)  -  neutral H surrounding the HII bubble, with He I, dust, and weak emission lines
- [Photodissociation regions PDRs](../02_Zettel/Theory/Photodissociation regions PDRs.html)  -  neutral but warm boundary layers, FUV-dominated, [CII] + CO emission
- [Ionisation parameter and ionisation state](../02_Zettel/Theory/Ionisation parameter and ionisation state.html)  -  $U$ controls which ions dominate; high $U$ gives high ionisation (O III, Ne III), low $U$ gives O II, S II

## Block 10  -  thermal equilibrium

what sets the **temperature** of an ionised gas? balance of heating (mainly photoelectric heating) and cooling (mainly forbidden-line emission).

- [Heating rate in HII regions](../02_Zettel/Theory/Heating rate in HII regions.html)  -  $G \propto n_H \int \sigma_\nu (h\nu - \chi) (4\pi J_\nu / h\nu) d\nu$, from photoelectrons leaving energy in the gas
- [Cooling rate in HII regions](../02_Zettel/Theory/Cooling rate in HII regions.html)  -  $L \propto n_e n_X q_{lu}\,h\nu$, mainly from collisionally excited forbidden lines
- [Equilibrium temperature](../02_Zettel/Theory/Equilibrium temperature.html)  -  $G = L$ gives $T_e \sim 10^4$ K for typical HII regions, weakly dependent on density
- [Cooling curve](../02_Zettel/Theory/Cooling curve.html)  -  $\Lambda(T) = L/n_e n_H$, has features at $\sim 10^4$ K (Ly$\alpha$), $\sim 10^5$ K (CIV, OVI), $\sim 10^7$ K (free-free)

## Block 11  -  applications, real-world spectra

object-by-object catalogue of what their spectra look like and what each line tells you. this is the part of the course that turns a lecture into a working diagnostic toolkit.

- [Stellar spectra and spectral classification](../02_Zettel/Theory/Stellar spectra and spectral classification.html)  -  OBAFGKM (existing note); the line strengths from Block 3 produce this sequence
- [History of stellar classification](../02_Zettel/Theory/History of stellar classification.html)  -  Secchi 1860s, Draper 1890, Pickering, Cannon, Payne 1925 (the temperature interpretation), MKK 1943, MK 1953
- [MK luminosity classes](../02_Zettel/Theory/MK luminosity classes.html)  -  I (supergiants) to V (dwarfs), based on line widths reflecting surface gravity (pressure broadening)
- [Emission line stars](../02_Zettel/Theory/Emission line stars.html)  -  Be stars (rotationally broadened H emission), WR stars (broad He II + N or C emission), T Tauri (accretion + emission)
- [Galactic novae spectroscopy](../02_Zettel/Theory/Galactic novae spectroscopy.html)  -  V2491 Cyg as example, broad blueshifted absorption + emission, evolution over months
- [Symbiotic star spectroscopy](../02_Zettel/Theory/Symbiotic star spectroscopy.html)  -  cool giant + hot accreting WD, both signatures simultaneously, e.g. CI Cyg
- [Supernova spectroscopy](../02_Zettel/Theory/Supernova spectroscopy.html)  -  Type Ia (Si II $6355$ Å, no H), Ib (no H, He I), Ic (no H, no He), II (broad Balmer P-Cygni)
- [H II region spectroscopy](../02_Zettel/Theory/H II region spectroscopy.html)  -  strong Balmer + forbidden lines, faint continuum, weak metal absorption
- [Planetary nebula spectroscopy](../02_Zettel/Theory/Planetary nebula spectroscopy.html)  -  emission-line dominated, $[OIII]\,\lambda 5007$ very strong, central star may show Balmer absorption
- [Supernova remnant spectroscopy](../02_Zettel/Theory/Supernova remnant spectroscopy.html)  -  older SNR like Crab, M1: emission lines on faint continuum, [SII]/H$\alpha$ ratio diagnoses shock vs photoionisation
- [Galaxy spectroscopy by type](../02_Zettel/Theory/Galaxy spectroscopy by type.html)  -  elliptical (absorption-dominated, $4000$ Å break, Mg b, Na D, no emission), Sa (mixed), starburst (strong emission lines on blue continuum)
- [AGN spectroscopy](../02_Zettel/Theory/AGN spectroscopy.html)  -  Seyfert 1 (broad + narrow), Seyfert 2 (narrow only), LINER, BL Lac (featureless continuum), quasars (broad lines + featureless UV)
- [BPT diagram](../02_Zettel/Theory/BPT diagram.html)  -  $[NII]/H\alpha$ vs $[OIII]/H\beta$ diagnostic separates star-forming galaxies from AGN

## Block 12  -  diagnostic toolkit

quick-reference summary of what each line ratio tells you. this is the concise reference version of the course.

- [Spectroscopic Te diagnostics](../02_Zettel/Theory/Spectroscopic Te diagnostics.html)  -  $[OIII]\,\lambda 4363/(\lambda 4959+5007)$, $[NII]\,\lambda 5755/(\lambda 6548+6584)$
- [Spectroscopic ne diagnostics](../02_Zettel/Theory/Spectroscopic ne diagnostics.html)  -  $[SII]\,\lambda 6716/\lambda 6731$, $[OII]\,\lambda 3729/3726$
- [BPT diagram](../02_Zettel/Theory/BPT diagram.html)  -  galaxy classification (above)
- [Balmer decrement](../02_Zettel/Theory/Balmer decrement.html)  -  dust extinction (existing note)
- [Spectroscopic redshift from line shifts](../02_Zettel/Theory/Spectroscopic redshift from line shifts.html)  -  $z = (\lambda_{\rm obs} - \lambda_0)/\lambda_0$, several emission lines for cross-check
- [Stellar velocity from Doppler shift](../02_Zettel/Theory/Stellar velocity from Doppler shift.html)  -  $v_r = c(\lambda_{\rm obs} - \lambda_0)/\lambda_0$, radial velocity surveys, exoplanets via $v \sin i$
- [Velocity dispersion from line width](../02_Zettel/Theory/Velocity dispersion from line width.html)  -  $\sigma_v$ in elliptical galaxies and clusters via line broadening
- [Stellar v sin i from line shape](../02_Zettel/Theory/Stellar v sin i from line shape.html)  -  rotational broadening profile, $v\sin i$ from line-fit codes (rotbroad, ULySS)
- [Curve of growth abundance analysis](../02_Zettel/Theory/Curve of growth abundance analysis.html)  -  log $gf$ + EW + atmospheric model $\to$ chemical abundances

## connections to other MOCs

- [Observational_Astrophysics_MOC](../00_Atlas/Observational_Astrophysics_MOC.html)  -  the broadband / photometric counterpart. magnitudes count photons; spectroscopy *resolves* them.
- [Fundamentals_Astrophysics_Cosmology_MOC](../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)  -  Block 2 (radiative mechanisms) and Block 5 (Saha + recombination) overlap with this course's atomic-physics blocks.
- [Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.html)  -  Block 9 (galaxy classification, AGN, line surveys) overlaps with this course's Block 11.
- [Lab_High-Energy_MOC](../00_Atlas/Lab_High-Energy_MOC.html)  -  X-ray spectroscopy (CCD energy resolution, XRS, microcalorimeters) is a different waveband but the same concept.
- [General_Relativity_MOC](../00_Atlas/General_Relativity_MOC.html)  -  only intersects via gravitational redshift (a small but real spectroscopic effect in white dwarfs and near black holes).

## see also

- [Voyage!](../Voyage!.html)  -  vault root MOC
- [Spectroscopy_course_intro](../02_Zettel/Theory/Spectroscopy_course_intro.html)
- [Bremsstrahlung](../02_Zettel/Theory/Bremsstrahlung.html)
- [Synchroton](../02_Zettel/Theory/Synchroton.html)
- [Saha equation and recombination](../02_Zettel/Theory/Saha equation and recombination.html)  -  the cosmological-recombination version
- [Balmer decrement](../02_Zettel/Theory/Balmer decrement.html)
- [Stellar spectra and spectral classification](../02_Zettel/Theory/Stellar spectra and spectral classification.html)
- [Appendix D - Gratings and spectrographs](../02_Zettel/Theory/Appendix D - Gratings and spectrographs.html)