---
layout: "default"
title: "Fluid_and_Plasma_Dynamics_MOC"
---
# Fluid and Plasma Dynamics — Map of Content

> **Master Year 2 Semester 1** | **A.Y. 2026/2027**  
> **Course**: Physics of Fluids and Plasmas / Fluid and Plasma Dynamics  
> **Lecturer**: **Prof. Maurizio Giacomin** (`maurizio.giacomin@unipd.it`)  
> **Classroom**: **Aula P4C (Edificio Ricci Curbastro)**  
> **Schedule**: Tuesday 16:30 – 18:30 & Thursday 16:30 – 18:30  
> **Exam Guide**: [Giacomin_Oral_Exam_Questions_Complete_Guide](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Giacomin_Oral_Exam_Questions_Complete_Guide.html) | **Course Syllabus**: [Course_Overview_and_Syllabus](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Course_Overview_and_Syllabus.html)  
> **Timetable Dashboard**: Master Year 2 Semester 1 Timetable | Exams autumn 2026 sprint  

---

## Course Navigation and Core Modules

```
                        [ Fluid and Plasma Dynamics ]
                                      |
         +----------------------------+----------------------------+
         |                                                         |
[ Part I: Fluid Dynamics & Kinetics ]             [ Part II: Plasma Kinetics & Drifts ]
  • Liouville & Boltzmann collision                 • Cyclotron motion & guiding center drifts
  • Moment equations & Chapman-Enskog               • Magnetic mirror & loss cone
  • Incompressible Navier-Stokes                    • Tokamak geometry & banana orbits
  • Vorticity & Kelvin circulation                  • Gyrokinetics 5D reduction (GENE)
  • Solar corona & Parker wind                      • Collisionless Landau damping
  • Waves, Jeans & instabilities (RT, KH)           • Cold plasma electromagnetic waves
  • Kolmogorov K41 turbulence & RANS                               |
         |                                                         |
         +----------------------------+----------------------------+
                                      |
       [ Part III: Two-Fluid Theory, Transport & Microinstabilities ]
         • Braginskii collisional transport & Spitzer resistivity
         • Drift-reduced equations (vorticity & Ohm's law)
         • Resistive ballooning modes (RBM) & ITG instability
         • Ambipolar diffusion in unmagnetized & strongly magnetized gas
                                      |
         +----------------------------+----------------------------+
         |                                                         |
[ Part IV: Magnetohydrodynamics (MHD) ]          [ Part V: Reconnection & Dynamos ]
  • Single-fluid MHD equations & flux freezing      • Sweet-Parker magnetic reconnection
  • Z-pinch & Bennett relation                      • Woltjer helicity conservation theorems
  • Grad-Shafranov tokamak equilibrium              • Taylor plasma relaxation & RFP
  • Shear Alfvén & magnetosonic waves               • Consorzio RFX-mod & RFX-mod2
                                                    • Cowling anti-dynamo theorem
                                                    • Mean-field electrodynamics (alpha-Omega)
```

---

## Detailed Module Lecture Notes

1. **Kinetic Foundations and Fluid Equations**:
   - Note: [Part1_Kinetic_Foundations_and_Fluid_Equations](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part1_Kinetic_Foundations_and_Fluid_Equations.html)
   - Scope: Liouville's theorem, phase space incompressibility, BBGKY hierarchy, binary collisions, Boltzmann collision operator $C(f)$, molecular chaos, detailed balance, Boltzmann $H$-theorem, local Maxwellian distribution, velocity moment hierarchy, conservation laws (continuity, momentum, energy), closure problem, zero-order Euler equations, first-order Chapman-Enskog expansion, viscous stress tensor, Navier-Stokes equations, Fourier thermal conduction, macroscopic control volume derivation.
   - Oral Exam Questions: 1, 2, 3, 4, 5.

2. **Incompressible and Viscous Flows**:
   - Note: [Part2_Incompressible_and_Viscous_Flows](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part2_Incompressible_and_Viscous_Flows.html)
   - Scope: Vorticity vector, vortex stretching and tilting, baroclinic torque, barotropic fluids, Kelvin's circulation theorem, proof of circulation conservation, Helmholtz vortex theorems, solar corona hydrostatic model, asymptotic pressure paradox ($p_\infty \gg p_{ISM}$), Parker solar wind transonic acceleration, de Laval nozzle critical radius, viscous Laplacian dissipation, Hagen-Poiseuille pipe flow, parabolic velocity profile, flow rate scaling $Q \propto R^4$, Prandtl boundary layer theory, thickness scaling $\delta \sim \sqrt{\nu L / U}$, Blasius solution.
   - Oral Exam Questions: 6, 7, 8.

3. **Waves, Instabilities, and Turbulence**:
   - Note: [Part3_Waves_Instabilities_and_Turbulence](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part3_Waves_Instabilities_and_Turbulence.html)
   - Scope: Sound wave propagation in compressible gas, adiabatic sound speed $c_s = \sqrt{\gamma p_0/\rho_0}$, non-dispersive acoustic waves, Jeans self-gravitational instability, Jeans swindle, Jeans wavenumber $k_J$, Jeans length $\lambda_J$, Jeans mass $M_J$, application to star formation, Rayleigh-Bénard convection, Boussinesq approximation, buoyancy vs thermal/viscous dissipation, Rayleigh number $Ra$, Bénard cells, Rayleigh-Taylor instability, Atwood number, Kelvin-Helmholtz shear instability, Richardson energy cascade, Kolmogorov 1941 (K41) hypotheses, dissipation scale $\eta$, inertial subrange energy spectrum $E(k) = C_K \epsilon^{2/3} k^{-5/3}$, two-point correlation tensor $R_{ij}(\vec{r})$, Kolmogorov $4/5$ law, Reynolds decomposition, Reynolds stress tensor $-\rho \overline{v_i' v_j'}$, RANS equations.
   - Oral Exam Questions: 9, 10, 11.

4. **Single-Particle Motion and Magnetic Confinement**:
   - Note: [Part4_Single_Particle_Motion_and_Magnetic_Confinement](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part4_Single_Particle_Motion_and_Magnetic_Confinement.html)
   - Scope: Cyclotron gyration, cyclotron frequency $\Omega_c = \lvert q\rvert B/m$, Larmor radius $\rho_L = v_\perp / \Omega_c$, guiding-center concept, general force drift $\vec{v}_D = (\vec{F}\times\vec{B})/(q B^2)$, $E \times B$ drift, gradient drift $\vec{v}_{\nabla B} \propto \vec{B} \times \nabla B$, curvature drift $\vec{v}_c \propto \vec{R}_c \times \vec{B}$, vacuum magnetic drift, polarization drift, magnetic mirror geometry, parallel force $F_\parallel = -\mu \nabla_\parallel B$, first adiabatic invariant ($\mu = m v_\perp^2 / (2B)$), mirror reflection condition $\sin^2\alpha_0 \ge 1/R_m$, loss cone angle, tokamak toroidal magnetic geometry $B \approx B_0(1 - \epsilon\cos\theta)$, trapped vs passing particles, tokamak trapping condition $\lvert v_{\parallel 0}\rvert/v_0 \le \sqrt{2\epsilon}$, trapped fraction $f_{tr} \approx \sqrt{2\epsilon}$, banana orbits, banana width $\Delta r_b \approx \frac{q_s}{\sqrt{\epsilon}}\rho_L$, bounce frequency $\omega_b$, neoclassical transport, bootstrap current.
   - Oral Exam Questions: 12, 13, 14.

5. **Plasma Kinetics, Gyrokinetics, and Waves**:
   - Note: [Part5_Plasma_Kinetics_Gyrokinetics_and_Waves](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part5_Plasma_Kinetics_Gyrokinetics_and_Waves.html)
   - Scope: 6D Vlasov equation limitations in magnetized fusion devices, gyrokinetic ordering ($\omega/\Omega_{ci} \sim \epsilon \ll 1, k_\parallel/k_\perp \sim \epsilon \ll 1, k_\perp \rho_i \sim 1, \delta f/F_0 \sim \epsilon$), gyrocenter transformation $\vec{r} = \vec{R} + \vec{\rho}_L$, charged ring representation, gyro-average operator $\langle \dots \rangle_{\vec{R}}$, Bessel function $J_0(k_\perp \rho_L)$ filtering in Fourier space, finite Larmor radius (FLR) effects, gyrokinetic equation, GENE code core turbulence simulations, Landau damping, Vlasov-Poisson initial value problem, Fourier-Laplace transform, plasma dielectric function $D(k, \omega)$, Landau contour analytical continuation below the pole, Plemelj formula, Bohm-Gross dispersion relation $\omega_r^2 \approx \omega_p^2 + 3 k^2 v_{th}^2$, damping rate $\gamma_L \propto \partial f_0 / \partial v |_{v = \omega/k}$, wave-particle resonance physical mechanism, cold plasma dielectric tensor in Stix notation ($R, L, P, S, D$), Appleton-Hartree dispersion relation, parallel propagation (R-mode, whistler waves, electron cyclotron resonance, L-mode, ion cyclotron resonance, Faraday rotation measure $\text{RM}$), perpendicular propagation (O-mode cutoff at $\omega_{pe}$, X-mode upper hybrid resonance $\omega_{UH} = \sqrt{\omega_{pe}^2 + \Omega_{ce}^2}$).
   - Oral Exam Questions: 15, 16, 17.

6. **Two-Fluid Theory, Transport, and Microinstabilities**:
   - Note: [Part6_Two_Fluid_Theory_Transport_and_Microinstabilities](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part6_Two_Fluid_Theory_Transport_and_Microinstabilities.html)
   - Scope: Braginskii collisional two-fluid equations, Landau collision operator, inter-species friction force $\vec{R}_{ei} = \vec{R}_u + \vec{R}_T$, Spitzer resistivity $\eta \propto T_e^{-3/2}$, thermal force physical origin, anisotropic thermal conductivities ($\kappa_\parallel / \kappa_\perp \sim (\Omega_{ce} \tau_e)^2 \gg 10^{10}$), isothermal magnetic flux surfaces, drift-reduced Braginskii ordering ($d/dt \ll \Omega_{ci}, k_\parallel \ll k_\perp$), perpendicular velocity decomposition ($E \times B$, diamagnetic, ion polarization), charge conservation $\nabla \cdot \vec{j} = 0$, derivation of the drift-reduced vorticity equation $\frac{\rho}{B^2}\frac{d}{dt}\nabla_\perp^2\phi = \nabla_\parallel j_\parallel - 2\mathcal{C}(p)$, derivation of parallel generalized Ohm's law, resistive ballooning mode (RBM) in bad curvature region ($\vec{\kappa} \parallel \nabla p$), linear RBM dispersion relation, growth rate scaling $\gamma_{RBM} \propto \eta_\parallel^{1/3}$, slab ion temperature gradient (ITG) instability, ambipolar diffusion in weakly ionized plasma, ambipolar electric field $\vec{E}_A$, ambipolar diffusion coefficient $D_A = \frac{\mu_i D_e + \mu_e D_i}{\mu_i + \mu_e} \approx D_i(1 + T_e/T_i)$, cross-field diffusion in strong magnetic field, inversion $D_{\perp i} \gg D_{\perp e}$, classical confinement scaling $D_{A\perp} \propto 1/B^2$.
   - Oral Exam Questions: 18, 19, 20, 21.

7. **Magnetohydrodynamics, Equilibrium, and Waves**:
   - Note: [Part7_Magnetohydrodynamics_Equilibrium_and_Waves](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part7_Magnetohydrodynamics_Equilibrium_and_Waves.html)
   - Scope: Single-fluid MHD approximations (quasi-neutrality, displacement current neglect, center-of-mass variables), mass continuity, momentum equation with Lorentz force, magnetic pressure $B^2/(2\mu_0)$ and tension $(\vec{B}\cdot\nabla)\vec{B}/\mu_0$, induction equation, magnetic Reynolds number $R_m = \mu_0 \sigma v L$, ideal MHD limit ($R_m \gg 1$), Alfvén's flux freezing theorem ($d\Phi/dt = 0$), magnetohydrostatic equilibrium $\nabla p = \vec{j} \times \vec{B}$, cylindrical Z-pinch configuration, radial force balance, derivation of the Bennett relation $I^2 = \frac{8\pi}{\mu_0}N k_B(T_e + T_i)$, sausage ($m=0$) and kink ($m=1$) pinch instabilities, axisymmetric tokamak geometry, poloidal flux function $\psi(R, Z)$, toroidal flux function $F(\psi) = R B_\phi$, elliptic operator $\Delta^*$, complete derivation of the Grad-Shafranov equation $\Delta^* \psi = -\mu_0 R^2 p'(\psi) - F F'(\psi)$, shear Alfvén wave derivation $\omega^2 = k_\parallel^2 v_A^2$, Alfvén speed $v_A = B_0/\sqrt{\mu_0 \rho_0}$, compressional fast and slow magnetosonic waves.
   - Oral Exam Questions: 22, 23, 24, 25.

8. **Reconnection, Relaxation, and Dynamo Theory**:
   - Note: [Part8_Reconnection_Relaxation_and_Dynamo_Theory](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part8_Reconnection_Relaxation_and_Dynamo_Theory.html)
   - Scope: Breakdown of flux freezing at current sheets, Sweet-Parker 2D steady-state reconnection model, mass conservation, Alfvénic outflow speed $v_{out} \approx v_A$, resistive electric field matching, derivation of Sweet-Parker reconnection rate $v_{in}/v_A = S^{-1/2}$, Lundquist number $S = \mu_0 L v_A / \eta$, astrophysical reconnection paradox, Petschek fast shock-mediated reconnection, resistive tearing modes, plasmoid instability chains, Woltjer's first theorem (magnetic helicity $K = \int \vec{A} \cdot \vec{B} \, d^3x$ conservation in ideal MHD), gauge invariance, Woltjer's second theorem (minimum magnetic energy state is linear force-free field $\nabla \times \vec{B} = \mu \vec{B}$), Taylor's plasma relaxation hypothesis, selective decay of energy over global helicity ($dW/dt \propto k^2 \eta \gg dK/dt \propto k \eta$), cylindrical Bessel Function Model (BFM: $B_z = B_0 J_0(\mu r), B_\theta = B_0 J_1(\mu r)$), pinch parameter $\Theta = \mu a / 2$, reversal parameter $F$, spontaneous magnetic field reversal for $\mu a > 2.405$ ($\Theta > 1.2$), Reversed Field Pinch (RFP) physics, Consorzio RFX in Padova (RFX-mod and RFX-mod2), transition to quasi-single helicity (QSH) state, Cowling's anti-dynamo theorem, proof by contradiction at O-point neutral line, necessity of 3D non-axisymmetric turbulent motions, mean-field electrodynamics, turbulent electromotive force $\vec{\mathcal{E}} = \langle \vec{v}' \times \vec{B}' \rangle = \alpha \langle \vec{B} \rangle - \beta \nabla \times \langle \vec{B} \rangle$, $\alpha$-effect (cyclonic kinetic helicity), $\beta$-effect (turbulent magnetic diffusivity $\eta_t \gg \eta$), $\alpha\Omega$ stellar and galactic dynamo cycles.
   - Oral Exam Questions: 26, 27, 28, 29, 30.

---

## Conceptual Zettelkasten Index (`03_Zettel/Theory/`)

### Module 1: Kinetic Foundations and Fluid Equations
- [Liouville theorem and phase space incompressibility](../03_Zettel/Theory/Liouville%20theorem%20and%20phase%20space%20incompressibility.html) — Phase space incompressibility and Liouville equation.
- [BBGKY hierarchy and Boltzmann collision operator](../03_Zettel/Theory/BBGKY%20hierarchy%20and%20Boltzmann%20collision%20operator.html) — Microscopic correlations, Stosszahlansatz, and binary collision integral.
- [Boltzmann H-theorem and Maxwellian distribution](../03_Zettel/Theory/Boltzmann%20H-theorem%20and%20Maxwellian%20distribution.html) — Entropy monotonicity, irreversibility, and thermal equilibrium Maxwellian.
- [Chapman-Enskog expansion and Navier-Stokes derivation](../03_Zettel/Theory/Chapman-Enskog%20expansion%20and%20Navier-Stokes%20derivation.html) — Asymptotic Knudsen expansion, viscous stress tensor, and Navier-Stokes equations.

### Module 2: Incompressible and Viscous Flows
- [Vorticity dynamics and Kelvin circulation theorem](../03_Zettel/Theory/Vorticity%20dynamics%20and%20Kelvin%20circulation%20theorem.html) — Vortex stretching and tilting, material line freezing, and circulation conservation.
- [Helmholtz vortex theorems and baroclinic torque](../03_Zettel/Theory/Helmholtz%20vortex%20theorems%20and%20baroclinic%20torque.html) — Invariant vortex tubes, topological laws, and non-barotropic vorticity generation.
- [Parker solar wind and transonic critical point](../03_Zettel/Theory/Parker%20solar%20wind%20and%20transonic%20critical%20point.html) — Hydrodynamic coronal expansion, de Laval nozzle analogy, and critical radius $r_c$.
- [Hagen-Poiseuille pipe flow and viscous dissipation](../03_Zettel/Theory/Hagen-Poiseuille%20pipe%20flow%20and%20viscous%20dissipation.html) — Exact Navier-Stokes pipe solution and $R^4$ volumetric throughput scaling.
- [Prandtl boundary layer theory and Blasius scaling](../03_Zettel/Theory/Prandtl%20boundary%20layer%20theory%20and%20Blasius%20scaling.html) — High Reynolds number asymptotics, $\delta \sim \sqrt{\nu x / U}$ boundary layer growth, and Blasius equation.

### Module 3: Waves, Instabilities, and Turbulence
- [Acoustic sound wave propagation in compressible gas](../03_Zettel/Theory/Acoustic%20sound%20wave%20propagation%20in%20compressible%20gas.html) — Linearized compressible Euler equations and non-dispersive adiabatic sound speed.
- [Jeans gravitational instability and Jeans mass](../03_Zettel/Theory/Jeans%20gravitational%20instability%20and%20Jeans%20mass.html) — Self-gravitational collapse criterion, Jeans swindle, and cloud fragmentation.
- [Rayleigh-Benard convection and Boussinesq approximation](../03_Zettel/Theory/Rayleigh-Benard%20convection%20and%20Boussinesq%20approximation.html) — Buoyancy-driven thermal convection and critical Rayleigh number $\text{Ra}_c$.
- [Rayleigh-Taylor and Kelvin-Helmholtz hydrodynamic instabilities](../03_Zettel/Theory/Rayleigh-Taylor%20and%20Kelvin-Helmholtz%20hydrodynamic%20instabilities.html) — Stratified acceleration interface growth and sheared vortex sheet rollup.
- [Kolmogorov K41 turbulence cascade and five-thirds law](../03_Zettel/Theory/Kolmogorov%20K41%20turbulence%20cascade%20and%20five-thirds%20law.html) — Richardson cascade, local isotropy, and $-5/3$ inertial subrange energy spectrum.
- [Reynolds-averaged Navier-Stokes and turbulent Reynolds stress](../03_Zettel/Theory/Reynolds-averaged%20Navier-Stokes%20and%20turbulent%20Reynolds%20stress.html) — Reynolds decomposition, unclosed turbulent momentum transport, and eddy viscosity.

### Module 4: Single-Particle Motion and Magnetic Confinement
- [Guiding center drifts and electric polarization drift](../03_Zettel/Theory/Guiding%20center%20drifts%20and%20electric%20polarization%20drift.html) — Gyromotion, $\mathbf{E}\times\mathbf{B}$, $\nabla B$, curvature drifts, and time-dependent polarization drift.
- [Magnetic mirror effect and adiabatic invariants](../03_Zettel/Theory/Magnetic%20mirror%20effect%20and%20adiabatic%20invariants.html) — First adiabatic invariant $\mu$, parallel mirror force, and loss cone angle $\alpha_{\text{loss}}$.
- [Tokamak magnetic topology and neoclassical banana orbits](../03_Zettel/Theory/Tokamak%20magnetic%20topology%20and%20neoclassical%20banana%20orbits.html) — Inboard-outboard field variations, trapped fractions, banana width $\Delta r_b$, and bootstrap current.

### Module 5: Plasma Kinetics, Gyrokinetics, and Waves
- [Gyrokinetic ordering and 5D phase space reduction](../03_Zettel/Theory/Gyrokinetic%20ordering%20and%205D%20phase%20space%20reduction.html) — Low-frequency anisotropic ordering, gyro-averaging, Bessel filtering, and 5D kinetic equation.
- [Collisionless Landau damping and wave-particle resonance](../03_Zettel/Theory/Collisionless%20Landau%20damping%20and%20wave-particle%20resonance.html) — Fourier-Laplace contour integration, pole singularities, and collisionless energy transfer.
- [Cold plasma dielectric tensor and Appleton-Hartree dispersion](../03_Zettel/Theory/Cold%20plasma%20dielectric%20tensor%20and%20Appleton-Hartree%20dispersion.html) — Stix tensor $(S, D, P, R, L)$, electron/ion cyclotron resonances, and wave propagation modes.

### Module 6: Two-Fluid Theory, Transport, and Microinstabilities
- [Braginskii collisional transport and Spitzer resistivity](../03_Zettel/Theory/Braginskii%20collisional%20transport%20and%20Spitzer%20resistivity.html) — Two-fluid transport, thermal friction, anisotropic conduction, and $\eta \propto T_e^{-3/2}$.
- [Drift-reduced Braginskii equations and vorticity derivation](../03_Zettel/Theory/Drift-reduced%20Braginskii%20equations%20and%20vorticity%20derivation.html) — Low-frequency drift ordering, polarization divergence, and vorticity equation.
- [Resistive ballooning mode and ion temperature gradient instability](../03_Zettel/Theory/Resistive%20ballooning%20mode%20and%20ion%20temperature%20gradient%20instability.html) — Bad curvature destabilization, line-tying breakdown, and $\gamma \propto \eta_\parallel^{1/3}$.
- [Ambipolar diffusion in unmagnetized and magnetized plasmas](../03_Zettel/Theory/Ambipolar%20diffusion%20in%20unmagnetized%20and%20magnetized%20plasmas.html) — Ambipolar electric field $E_A$, classical diffusion, and $1/B^2$ cross-field scaling.

### Module 7: Magnetohydrodynamics, Equilibrium, and Waves
- [Ideal MHD equations and Alfven flux freezing theorem](../03_Zettel/Theory/Ideal%20MHD%20equations%20and%20Alfven%20flux%20freezing%20theorem.html) — Single-fluid conservation laws, magnetic tension/pressure, and flux freezing proof.
- [Cylindrical Z-pinch equilibrium and Bennett relation](../03_Zettel/Theory/Cylindrical%20Z-pinch%20equilibrium%20and%20Bennett%20relation.html) — Radial force balance and exact Bennett equilibrium current $I^2 \propto N(T_e + T_i)$.
- [Grad-Shafranov equation and axisymmetric tokamak equilibria](../03_Zettel/Theory/Grad-Shafranov%20equation%20and%20axisymmetric%20tokamak%20equilibria.html) — 2D axisymmetric equilibrium, poloidal flux $\psi$, and the non-linear $\Delta^*$ operator.
- [Shear Alfven and magnetosonic wave modes in MHD](../03_Zettel/Theory/Shear%20Alfven%20and%20magnetosonic%20wave%20modes%20in%20MHD.html) — Incompressible shear Alfvén mode and fast/slow compressional magnetosonic waves.

### Module 8: Reconnection, Relaxation, and Dynamo Theory
- [Sweet-Parker magnetic reconnection and Lundquist number](../03_Zettel/Theory/Sweet-Parker%20magnetic%20reconnection%20and%20Lundquist%20number.html) — 2D steady current sheet, Alfvénic outflow, and $S^{-1/2}$ reconnection rate.
- [Woltjer helicity conservation and Taylor plasma relaxation](../03_Zettel/Theory/Woltjer%20helicity%20conservation%20and%20Taylor%20plasma%20relaxation.html) — Magnetic helicity invariance, selective decay, and force-free Beltrami equilibria.
- [Reversed Field Pinch physics and RFX-mod experiment](../03_Zettel/Theory/Reversed%20Field%20Pinch%20physics%20and%20RFX-mod%20experiment.html) — Bessel Function Model, spontaneous field reversal $\Theta > 1.2$, and the RFX-mod2 facility.
- [Cowling anti-dynamo theorem and turbulent alpha-Omega dynamo](../03_Zettel/Theory/Cowling%20anti-dynamo%20theorem%20and%20turbulent%20alpha-Omega%20dynamo.html) — Proof of non-existence of 2D dynamos, helical $\alpha$-effect, and shear $\Omega$-effect.

---

## Complete Oral Examination Guide

The official oral exam bank consists of 30 questions. The comprehensive, blackboard-ready derivation guide for all 30 questions is documented in:
- [Giacomin_Oral_Exam_Questions_Complete_Guide](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Giacomin_Oral_Exam_Questions_Complete_Guide.html)

---

## Research and Experimental Facilities

- **Consorzio RFX (Padova)**:
  - RFX-mod2 experiment ($R = 2.0\text{ m}, a = 0.46\text{ m}$, $I_p \le 2\text{ MA}$)
  - SPIDER and MITICA neutral beam test facilities for ITER
  - Master thesis opportunities with Prof. Maurizio Giacomin on linear and quasi-linear drift-reduced Braginskii boundary turbulence solvers

---

## Literature & Primary Sources

Canonical and modern arXiv astro-ph.HE/SR benchmark papers underlying the accretion-disk and jet-launching physics above.

- [Balbus & Hawley (1991) — A Powerful Local Shear Instability](../02_Literature/Papers/13_Fluid_Plasma_Dynamics/Balbus_Hawley_1991_Magnetorotational_Instability.html) — the MRI dispersion relation and instability criterion
- [Blandford & Payne (1982) — Hydromagnetic Flows from Accretion Discs](../02_Literature/Papers/13_Fluid_Plasma_Dynamics/Blandford_Payne_1982_Jet_Launching_Disk_Wind.html) — magneto-centrifugal disk-wind jet launching, the 30° criterion
- [Porth et al. (2019) — Event Horizon GRMHD Code Comparison](../02_Literature/Papers/13_Fluid_Plasma_Dynamics/Porth_2019_EHT_GRMHD_Code_Comparison.html) — nine-code GRMHD validation ahead of the EHT M87* image

---

## Inter-Vault Connections

- [Course_Overview_and_Syllabus](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Course_Overview_and_Syllabus.html)
- Master Year 2 Semester 1 Timetable
- [Computational_Astrophysics_MOC](Computational_Astrophysics_MOC.html)
- [Astrophysics_of_the_Interstellar_Medium_MOC](Astrophysics_of_the_Interstellar_Medium_MOC.html)
- [General_Relativity_MOC](General_Relativity_MOC.html)
- [Stellar_Astrophysics_MOC](Stellar_Astrophysics_MOC.html)
- [Cosmology_of_the_Early_Universe_MOC](Cosmology_of_the_Early_Universe_MOC.html)


---

## Master Figure Index (Fluid and Plasma Dynamics)

| Figure ID | Visual Asset Name | Slide / Concept Title | Primary Zettel / Lecture Note Link | Key Fluid / Plasma Principle |
| :--- | :--- | :--- | :--- | :--- |
| **FPD-01** | `fluid_boundary_p01.png` | Prandtl Boundary Layer Growth | [Part2_Incompressible_and_Viscous_Flows](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part2_Incompressible_and_Viscous_Flows.html) | Laminar boundary layer scaling $\delta(x) \approx 5.0 x / \sqrt{\mathrm{Re}_x}$ |
| **FPD-02** | `fluid_boundary_p05.png` | Adverse Pressure Gradient & Separation | [Part2_Incompressible_and_Viscous_Flows](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part2_Incompressible_and_Viscous_Flows.html) | Vanishing wall shear stress $\left.\partial_y u\right\|_{y=0} = 0$ triggering stall |
| **FPD-03** | `fluid_turbulence_p05.png` | Kolmogorov 1941 Energy Spectrum | [Part3_Waves_Instabilities_and_Turbulence](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part3_Waves_Instabilities_and_Turbulence.html) | Inertial subrange cascade $E(k) = C_K \epsilon^{2/3} k^{-5/3}$ down to $\eta_K$ |
| **FPD-04** | `fluid_turbulence_p25.png` | Vortex Stretching Mechanism | [Part3_Waves_Instabilities_and_Turbulence](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part3_Waves_Instabilities_and_Turbulence.html) | Kinematic enstrophy production $(\boldsymbol{\omega}\cdot\nabla)\mathbf{u}$ driving dissipation |
| **FPD-05** | `fluid_turbulence_p50.png` | Goldreich-Sridhar MHD Critical Balance | [Part3_Waves_Instabilities_and_Turbulence](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part3_Waves_Instabilities_and_Turbulence.html) | Anisotropic scale-dependent eddy elongation $k_\parallel \propto k_\perp^{2/3}$ |
| **FPD-06** | `fluid_landau_p01.png` | Landau Complex Contour Deformation | [Part5_Plasma_Kinetics_Gyrokinetics_and_Waves](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part5_Plasma_Kinetics_Gyrokinetics_and_Waves.html) | Analytic continuation resolving wave-particle pole in Vlasov dielectric function |
| **FPD-07** | `fluid_landau_p04.png` | Collisionless Landau Damping Mechanism | [Part5_Plasma_Kinetics_Gyrokinetics_and_Waves](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part5_Plasma_Kinetics_Gyrokinetics_and_Waves.html) | Resonant energy absorption where $\left.\partial_v f_0\right\|_{v = \omega/k} < 0$ |
| **FPD-08** | `fluid_braginskii_p01.png` | Braginskii Anisotropic Conduction | [Part6_Two_Fluid_Theory_Transport_and_Microinstabilities](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part6_Two_Fluid_Theory_Transport_and_Microinstabilities.html) | Parallel heat conductivity $\kappa_\parallel \gg \kappa_\perp$ by factor $(\omega_c \tau)^2$ |
| **FPD-09** | `fluid_braginskii_p04.png` | Braginskii Viscosity Tensor Decomposition | [Part6_Two_Fluid_Theory_Transport_and_Microinstabilities](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part6_Two_Fluid_Theory_Transport_and_Microinstabilities.html) | Parallel, perpendicular, and gyro-viscous cross-field stress components |
| **FPD-10** | `fluid_braginskii_p08.png` | Anisotropic Cross-Field Diffusion | [Part6_Two_Fluid_Theory_Transport_and_Microinstabilities](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part6_Two_Fluid_Theory_Transport_and_Microinstabilities.html) | Classical gyro-radius random walk $D_\perp \propto \rho_L^2/\tau$ vs Bohm transport |
| **FPD-11** | `fluid_gradshafranov_p01.png` | Grad-Shafranov Equation Derivation | [Part7_Magnetohydrodynamics_Equilibrium_and_Waves](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part7_Magnetohydrodynamics_Equilibrium_and_Waves.html) | Axisymmetric MHD equilibrium $\Delta^* \psi = -\mu_0 R^2 p'(\psi) - F F'(\psi)$ |
| **FPD-12** | `fluid_gradshafranov_p03.png` | Magnetic Flux Surfaces & Safety Factor | [Part7_Magnetohydrodynamics_Equilibrium_and_Waves](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part7_Magnetohydrodynamics_Equilibrium_and_Waves.html) | Nested toroidal flux surfaces and safety factor profile $q(\psi)$ preventing kinks |
| **FPD-13** | `fluid_tearing_p01.png` | Tearing Mode Instability & Islands | [Part8_Reconnection_Relaxation_and_Dynamo_Theory](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part8_Reconnection_Relaxation_and_Dynamo_Theory.html) | Resistive layer tearing forming magnetic islands (O-points and X-points) |
| **FPD-14** | `fluid_tearing_p04.png` | Sweet-Parker vs Petschek Reconnection | [Part8_Reconnection_Relaxation_and_Dynamo_Theory](../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part8_Reconnection_Relaxation_and_Dynamo_Theory.html) | Sheet reconnection $v_{\mathrm{rec}}/v_A \sim S^{-1/2}$ vs fast shock vents $\sim 1/\ln S$ |

---

## Professor Maurizio Giacomin Oral Exam Defense Preparation Matrix

| Exam Question | Governing Equation(s) | Blackboard Derivation Flow & Strategy | Professor Trap Points & Pitfalls |
| :--- | :--- | :--- | :--- |
| **1. Prandtl Boundary Layer Equations and Separation** | $u \partial_x u + v \partial_y u = -\frac{1}{\rho}\frac{dp_e}{dx} + \nu \partial_{yy} u$<br>$\delta(x) \approx 5.0 \sqrt{\frac{\nu x}{U_\infty}}$ | 1. Write 2D incompressible steady Navier-Stokes and continuity equations.<br>2. Perform order-of-magnitude scaling with $\delta \ll L$ and $\mathrm{Re}_L \gg 1$.<br>3. Show that continuity requires $v \sim U \delta/L \ll U$.<br>4. Balance inertial advection $u \partial_x u \sim U^2/L$ with viscous diffusion $\nu \partial_{yy} u \sim \nu U/\delta^2$ to prove $\delta \sim L / \sqrt{\mathrm{Re}_L}$.<br>5. From the $y$-momentum equation, show $\partial_y p = \mathcal{O}(\delta/L) \approx 0 \implies p(x,y) = p_e(x)$ imposed by the outer potential flow.<br>6. Analyze the wall condition $\left.\partial_y^2 u\right\|_{y=0} = \frac{1}{\mu}\frac{dp}{dx}$. Prove that an adverse pressure gradient ($\frac{dp}{dx} > 0$) causes an inflection point in the velocity profile, leading to vanishing wall shear stress $\left.\partial_y u\right\|_{y=0} = 0$ (boundary layer separation) and massive vortex shedding. | **Trap**: Assuming pressure varies across the boundary layer; failing to explain how the boundary layer matches outer potential flow; forgetting the physical cause of separation (adverse pressure gradient). |
| **2. Collisionless Landau Damping and Contour Integration** | $\epsilon(k, \omega) = 1 + \frac{\omega_p^2}{k^2}\int_C \frac{\partial f_0 / \partial v}{\frac{\omega}{k} - v} dv = 0$<br>$\gamma_L = \frac{\pi}{2}\frac{\omega_p^3}{k^2}\left.\frac{\partial f_0}{\partial v}\right\|_{v = \omega/k}$ | 1. Write the 1D linearized Vlasov-Poisson equations for electrons with stationary ion background.<br>2. Take spatial Fourier transform ($e^{ikx}$) and temporal Laplace transform ($\int_0^\infty e^{i\omega t} dt$ with $\operatorname{Im}(\omega) > 0$).<br>3. Solve for perturbed distribution $\tilde{f}_1(k, v, \omega)$ and substitute into Poisson equation to find dielectric function $\epsilon(k, \omega)$.<br>4. Explain Landau's contour deformation prescription: analytic continuation to the lower half-plane ($\operatorname{Im}(\omega) \le 0$) by indenting the path below the pole at $v = \omega/k$.<br>5. Use the Sokhotski-Plemelj theorem $\lim_{\epsilon \to 0} \frac{1}{x \pm i\epsilon} = \mathcal{P}\frac{1}{x} \mp i\pi \delta(x)$ to evaluate the pole contribution.<br>6. For a Maxwellian $f_0(v)$, derive the collisionless damping rate $\gamma_L < 0$.<br>7. Physical explanation: particles with $v \approx v_\phi = \omega/k$ interact resonantly. Since $\partial f_0 / \partial v < 0$, more particles move slightly slower than the wave and extract wave energy, causing exponential damping without entropy production. | **Trap**: Confusing Landau damping with collisional viscosity (Landau damping is reversible; plasma wave echo proves phase information is preserved in distribution function); forgetting the Laplace transform requirement $\operatorname{Im}(\omega) > 0$. |
| **3. The Grad-Shafranov Equation for Axisymmetric Equilibria** | $\Delta^* \psi \equiv R \frac{\partial}{\partial R}\left(\frac{1}{R}\frac{\partial \psi}{\partial R}\right) + \frac{\partial^2 \psi}{\partial Z^2} = -\mu_0 R^2 p'(\psi) - F F'(\psi)$ | 1. State static MHD equilibrium $\mathbf{J} \times \mathbf{B} = \nabla p$ and Ampère's law $\mu_0 \mathbf{J} = \nabla \times \mathbf{B}$ with $\nabla \cdot \mathbf{B} = 0$.<br>2. In axisymmetric geometry $(\partial_\phi = 0)$, express magnetic field in terms of poloidal flux function $\psi(R, Z)$ and toroidal field function $F = R B_\phi$: $\mathbf{B} = \frac{1}{R}\nabla\psi \times \hat{\mathbf{e}}_\phi + \frac{F}{R}\hat{\mathbf{e}}_\phi$.<br>3. Prove that $\mathbf{B}\cdot\nabla p = 0$ and $\mathbf{J}\cdot\nabla p = 0$, meaning magnetic flux surfaces are isobaric surfaces ($p = p(\psi)$ and $F = F(\psi)$).<br>4. Calculate current density: $\mu_0 \mathbf{J} = -\frac{1}{R}\Delta^* \psi \hat{\mathbf{e}}_\phi + \frac{1}{R}\nabla F \times \hat{\mathbf{e}}_\phi$.<br>5. Substitute $\mathbf{J}$ and $\mathbf{B}$ into $\mathbf{J} \times \mathbf{B} = \nabla p$ and project along $\nabla \psi$ to derive the Grad-Shafranov equation. | **Trap**: Writing $\nabla^2 \psi$ instead of $\Delta^* \psi = R \partial_R (R^{-1} \partial_R \psi) + \partial_{ZZ} \psi$; treating $p$ and $F$ as arbitrary functions of $(R, Z)$ rather than flux functions of $\psi$ alone. |
| **4. Magnetic Reconnection: Sweet-Parker Sheet vs Petschek Model** | $\frac{v_{\mathrm{rec}}}{v_A} \sim S^{-1/2} = \left(\frac{\mu_0 L v_A}{\eta}\right)^{-1/2}$<br>$\left(\frac{v_{\mathrm{rec}}}{v_A}\right)_{\mathrm{Petschek}} \sim \frac{\pi}{8 \ln S}$ | 1. Write the induction equation $\partial_t \mathbf{B} = \nabla \times (\mathbf{u} \times \mathbf{B}) + \eta \nabla^2 \mathbf{B}$.<br>2. Detail the Sweet-Parker current sheet geometry of length $2L$ and thickness $2\delta \ll L$.<br>3. Mass conservation: $u_{\mathrm{in}} L = u_{\mathrm{out}} \delta$. Energy conservation: outflow exits at Alfvén speed $u_{\mathrm{out}} = v_A$.<br>4. Steady diffusion balance: resistive diffusion speed matches inflow advection $\eta/\delta \sim u_{\mathrm{in}}$.<br>5. Combine equations to derive Sweet-Parker reconnection rate $u_{\mathrm{in}}/v_A = S^{-1/2}$.<br>6. Plug in solar flare numbers: $S \sim 10^{12} \implies u_{\mathrm{in}}/v_A \sim 10^{-6}$, requiring months for energy release (complete failure).<br>7. Contrast with Petschek's fast model: current sheet is localized to small microscopic diffusion region, and four standing slow-mode shocks provide open outflow vents, giving weak logarithmic dependence $v_{\mathrm{rec}} / v_A \sim 1/\ln S \sim 0.01 - 0.1$, matching observed solar flare timescales. | **Trap**: Claiming Sweet-Parker model works for astronomical flares; failing to compute the Lundquist number; ignoring the role of slow-mode shocks in Petschek reconnection. |

---

## Essential Formulas Quick Sheet (Fluid and Plasma Dynamics)

- **Navier-Stokes Equation**: $\rho\left(\frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u}\cdot\nabla)\mathbf{u}\right) = -\nabla p + \mu \nabla^2 \mathbf{u} + \rho \mathbf{g}$
- **Prandtl Boundary Layer Scaling**: $\delta(x) \sim \frac{x}{\sqrt{\mathrm{Re}_x}}$ with $\mathrm{Re}_x = \frac{U x}{\nu}$
- **Kolmogorov Energy Spectrum**: $E(k) = C_K \epsilon^{2/3} k^{-5/3}$
- **Kolmogorov Microscale**: $\eta_K = \left(\frac{\nu^3}{\epsilon}\right)^{1/4}$
- **Grad-Shafranov Equation**: $\Delta^* \psi \equiv R \frac{\partial}{\partial R}\left(\frac{1}{R}\frac{\partial \psi}{\partial R}\right) + \frac{\partial^2 \psi}{\partial Z^2} = -\mu_0 R^2 p'(\psi) - F F'(\psi)$
- **Landau Damping Rate**: $\gamma_L = \frac{\pi}{2} \frac{\omega_p^3}{k^2} \left.\frac{\partial f_0}{\partial v}\right\rvert_{v = \omega/k}$
- **Sweet-Parker Inflow Rate**: $\frac{v_{\mathrm{in}}}{v_A} = S^{-1/2} = \left(\frac{\eta}{\mu_0 L v_A}\right)^{1/2}$
