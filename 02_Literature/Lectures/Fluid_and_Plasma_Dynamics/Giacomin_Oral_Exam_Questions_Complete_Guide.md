---
layout: "default"
title: "Giacomin_Oral_Exam_Questions_Complete_Guide"
---
# Complete Preparation Guide for Oral Exam Questions

*Course: Fluid and Plasma Dynamics (Physics of Fluids and Plasmas)*  
*Lecturer: Prof. Maurizio Giacomin - Università degli Studi di Padova*  
*Index: [[Fluid_and_Plasma_Dynamics_MOC]]*  

> [!important] Examination Rules
> The oral examination consists of **three questions** chosen from the 30 questions below:
> - **One question is chosen by the student**.
> - **Two questions are chosen by the examiner** (Prof. Giacomin).
> This guide provides complete, rigorous blackboard derivations and physical explanations for all 30 questions.

---

## Question 1: Liouville's Theorem and Connection to Boltzmann's Equation

*Module reference: [[Part1_Kinetic_Foundations_and_Fluid_Equations#1. Liouville's Theorem and the Boltzmann Transport Equation]]*

### Blackboard Delivery Strategy
1. Define the $6N$-dimensional phase space $\Gamma = (\vec{q}_1, \dots, \vec{q}_N, \vec{p}_1, \dots, \vec{p}_N)$ and the ensemble distribution density $\rho_{ens}(\vec{q}, \vec{p}, t)$.
2. Write the probability conservation continuity equation in $6N$ dimensions:
$$\frac{\partial \rho_{ens}}{\partial t} + \sum_{i=1}^N \left[ \nabla_{\vec{q}_i} \cdot (\rho_{ens} \dot{\vec{q}}_i) + \nabla_{\vec{p}_i} \cdot (\rho_{ens} \dot{\vec{p}}_i) \right] = 0$$
3. Expand using the product rule and substitute Hamilton's canonical equations:
$$\dot{\vec{q}}_i = \frac{\partial H}{\partial \vec{p}_i}, \quad \dot{\vec{p}}_i = -\frac{\partial H}{\partial \vec{q}_i}$$
4. Show that the phase space velocity divergence vanishes identically:
$$\nabla_{\vec{q}_i} \cdot \dot{\vec{q}}_i + \nabla_{\vec{p}_i} \cdot \dot{\vec{p}}_i = \frac{\partial^2 H}{\partial \vec{q}_i \partial \vec{p}_i} - \frac{\partial^2 H}{\partial \vec{p}_i \partial \vec{q}_i} = 0$$
5. Conclude that $\frac{d\rho_{ens}}{dt} = 0$ (Liouville's Theorem). The phase space fluid is incompressible.
6. Connect to the single-particle distribution function $f(\vec{x}, \vec{u}, t) = N \int \rho_{ens} \, d^{3N-3}q \, d^{3N-3}p$:
   - For non-interacting particles, Liouville applies along single-particle orbits: $\frac{df}{dt} = \frac{\partial f}{\partial t} + \vec{u} \cdot \nabla_{\vec{x}} f + \frac{\vec{F}}{m} \cdot \nabla_{\vec{u}} f = 0$ (collisionless Boltzmann / Vlasov equation).
   - In the presence of short-range collisions, trajectories undergo discontinuous jumps in velocity on microscopic timescales, giving the collisional Boltzmann equation:
$$\frac{\partial f}{\partial t} + \vec{u} \cdot \nabla_{\vec{x}} f + \frac{\vec{F}}{m} \cdot \nabla_{\vec{u}} f = C(f)$$

---

## Question 2: Collision Operator for Binary Collisions Between Neutral Particles

*Module reference: [[Part1_Kinetic_Foundations_and_Fluid_Equations#2. The Boltzmann Collision Operator for Binary Collisions]]*

### Blackboard Delivery Strategy
1. State the three Boltzmann hypotheses:
   - Dilute gas: $n r_0^3 \ll 1$ (strictly binary collisions).
   - Local collisions: interaction range $r_0 \ll L$ and duration $\tau_{coll} \ll \tau$.
   - Molecular chaos (*Stoßzahlansatz*): $f_2(\vec{x}, \vec{u}, \vec{x}, \vec{u}_1, t) = f(\vec{x}, \vec{u}, t) f(\vec{x}, \vec{u}_1, t)$.
2. Sketch the collision cylinder: relative speed $g = \lvert \vec{u} - \vec{u}_1\rvert$, impact parameter $b$, solid angle $d\Omega = \sin\theta d\theta d\phi$, volume element $dV = g \, dt \, b \, db \, d\phi = g \, dt \, \sigma(g, \Omega) d\Omega$.
3. Formulate the loss rate:
$$\Gamma_{loss} = \int d^3u_1 \int d\Omega \, g \, \sigma(g, \Omega) f(\vec{x}, \vec{u}, t) f(\vec{x}, \vec{u}_1, t)$$
4. Formulate the gain rate via the inverse collision $\vec{u}' + \vec{u}_1' \to \vec{u} + \vec{u}_1$. Using time-reversal invariance $\sigma(g', \Omega') = \sigma(g, \Omega)$ and phase-volume preservation $d^3u' d^3u_1' = d^3u d^3u_1$:
$$\Gamma_{gain} = \int d^3u_1 \int d\Omega \, g \, \sigma(g, \Omega) f(\vec{x}, \vec{u}', t) f(\vec{x}, \vec{u}_1', t)$$
5. Combine into the Boltzmann collision integral:
$$C(f) = \int d^3u_1 \int d\Omega \, \sigma(g, \Omega) \lvert \vec{u} - \vec{u}_1\rvert \left[ f' f_1' - f f_1 \right]$$
6. Mention the $H$-theorem ($dH/dt \le 0$) and show that $C(f) = 0 \iff f' f_1' = f f_1 \implies f$ is the Maxwellian distribution.

---

## Question 3: Density and Momentum Fluid Equations from the Collisional Boltzmann Equation

*Module reference: [[Part1_Kinetic_Foundations_and_Fluid_Equations#3. Moment Derivations of the Hydrodynamic Equations]]*

### Blackboard Delivery Strategy
1. Define the velocity moment operator for property $\chi(\vec{u})$:
$$\int d^3u \, \chi \left[ \frac{\partial f}{\partial t} + u_j \frac{\partial f}{\partial x_j} + \frac{F_j}{m} \frac{\partial f}{\partial u_j} \right] = \int d^3u \, \chi C(f)$$
2. Emphasize that for collisional invariants ($\chi = m, m u_i$), the collision term vanishes: $\int \chi C(f) d^3u = 0$.
3. **Continuity equation ($\chi = m$)**:
   - $\int m \frac{\partial f}{\partial t} d^3u = \frac{\partial \rho}{\partial t}$.
   - $\int m u_j \frac{\partial f}{\partial x_j} d^3u = \frac{\partial (\rho v_j)}{\partial x_j} = \nabla \cdot (\rho \vec{v})$.
   - Force term vanishes upon integrating by parts since $\frac{\partial m}{\partial u_j} = 0$.
   - Result: $\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{v}) = 0$.
4. **Momentum equation ($\chi = m u_i$)**:
   - Decompose velocity into mean and thermal parts: $\vec{u} = \vec{v}(\vec{x}, t) + \vec{w}$, where $\langle \vec{w} \rangle = 0$.
   - $\langle u_i u_j \rangle = v_i v_j + \langle w_i w_j \rangle$.
   - Define the pressure tensor: $P_{ij} \equiv \rho \langle w_i w_j \rangle$.
   - Temporal term: $\frac{\partial (\rho v_i)}{\partial t}$.
   - Spatial term: $\frac{\partial}{\partial x_j} (\rho v_i v_j + P_{ij}) = v_i \frac{\partial (\rho v_j)}{\partial x_j} + \rho v_j \frac{\partial v_i}{\partial x_j} + \frac{\partial P_{ij}}{\partial x_j}$.
   - Force term: $-\frac{F_j}{m} \int f \frac{\partial (m u_i)}{\partial u_j} d^3u = -n F_i$.
   - Use continuity to cancel $v_i [\partial_t \rho + \partial_j(\rho v_j)] = 0$.
   - Result: $\rho \left( \frac{\partial v_i}{\partial t} + v_j \frac{\partial v_i}{\partial x_j} \right) = n F_i - \frac{\partial P_{ij}}{\partial x_j}$.

---

## Question 4: Closure Issue of Hydrodynamic Equations: Zero- and First-Order Approximations

*Module reference: [[Part1_Kinetic_Foundations_and_Fluid_Equations#4. The Closure Problem and Chapman-Enskog Approximations]]*

### Blackboard Delivery Strategy
1. State the closure dilemma: each $n$-th moment equation contains the $(n+1)$-th moment (continuity needs $\vec{v}$; momentum needs $P_{ij}$; energy needs heat flux $\vec{q}$). The hierarchy is open.
2. Introduce the Knudsen number $Kn = \lambda_{mfp}/L$.
3. **Zero-Order Approximation ($Kn \to 0$)**:
   - Fluid is in local thermodynamic equilibrium: $f \approx f_0$ (Maxwellian).
   - $P_{ij}^{(0)} = m \int w_i w_j f_0 d^3w = \frac{1}{3}\rho \langle w^2 \rangle \delta_{ij} = p \delta_{ij}$ (scalar isotropic pressure, no shear stress).
   - $\vec{q}^{(0)} = \frac{1}{2}\rho \langle w^2 \vec{w} \rangle_0 = 0$ (odd integrand).
   - Yields the **Euler equations** for ideal, non-viscous fluids.
4. **First-Order Approximation ($Kn \ll 1$)**:
   - Chapman-Enskog expansion: $f = f_0 + g$, where $\lvert g\rvert \ll f_0$.
   - Non-diagonal viscous stress tensor emerges: $P_{ij} = p \delta_{ij} - \sigma_{ij}$, with:
$$\sigma_{ij} = \mu \left( \frac{\partial v_i}{\partial x_j} + \frac{\partial v_j}{\partial x_i} - \frac{2}{3}\delta_{ij}\nabla\cdot\vec{v} \right) + \zeta \delta_{ij} \nabla\cdot\vec{v}$$
   - Non-zero heat flux via Fourier's law: $\vec{q} = -\kappa \nabla T$.
   - Yields the **Navier-Stokes equations**.

---

## Question 5: Momentum Hydrodynamics Equation from a Macroscopic Approach

*Module reference: [[Part1_Kinetic_Foundations_and_Fluid_Equations#5. Macroscopic Continuum Approach to the Momentum Equation]]*

### Blackboard Delivery Strategy
1. Select an arbitrary fixed control volume $V$ bounded by surface $S$ with normal $\hat{n}$.
2. Write the momentum balance:
$$\frac{d}{dt}\int_V \rho v_i d^3x = -\oint_S (\rho v_i) (\vec{v}\cdot\hat{n}) dS + \int_V \rho g_i d^3x + \oint_S T_i(\hat{n}) dS$$
3. State Cauchy's stress theorem: surface traction $T_i$ depends linearly on $\hat{n}$: $T_i = \Sigma_{ji} n_j$, with $\Sigma_{ij} = \Sigma_{ji}$.
4. Apply Gauss's divergence theorem to convert all surface integrals to volume integrals.
5. Equate integrands for arbitrary $V$:
$$\frac{\partial (\rho v_i)}{\partial t} + \frac{\partial (\rho v_i v_j)}{\partial x_j} = \rho g_i + \frac{\partial \Sigma_{ji}}{\partial x_j}$$
6. Use mass conservation to simplify the left-hand side to $\rho \frac{d v_i}{dt}$.
7. Decompose stress into pressure and viscosity: $\Sigma_{ij} = -p \delta_{ij} + \sigma_{ij}$, recovering $\rho \frac{d\vec{v}}{dt} = -\nabla p + \nabla \cdot \mathbf{\sigma} + \rho \vec{g}$.

---

## Question 6: Kelvin's Circulation Theorem and Relation with the Vorticity Equation

*Module reference: [[Part2_Incompressible_and_Viscous_Flows#1. Vorticity Dynamics and Kelvin's Circulation Theorem]]*

### Blackboard Delivery Strategy
1. Define circulation $\Gamma(t) = \oint_{C(t)} \vec{v} \cdot d\vec{\ell} = \int_{S(t)} \vec{\omega} \cdot d\vec{S}$, where $\vec{\omega} = \nabla \times \vec{v}$.
2. Differentiate under the integral: $\frac{d\Gamma}{dt} = \oint_C \frac{d\vec{v}}{dt} \cdot d\vec{\ell} + \oint_C \vec{v} \cdot d\vec{v}$.
3. Show that $\oint \vec{v} \cdot d\vec{v} = \oint d(v^2/2) = 0$.
4. Substitute Euler's equation for a barotropic fluid ($dp/\rho = dh$) under conservative forces ($\vec{g} = -\nabla\Phi$):
$$\frac{d\vec{v}}{dt} = -\nabla(h + \Phi) \implies \frac{d\Gamma}{dt} = -\oint_C d(h + \Phi) = 0$$
5. Derive the vorticity equation by taking the curl of Euler's equation using $(\vec{v}\cdot\nabla)\vec{v} = \nabla(v^2/2) - \vec{v}\times\vec{\omega}$:
$$\frac{\partial \vec{\omega}}{\partial t} = \nabla \times (\vec{v} \times \vec{\omega}) + \frac{\nabla \rho \times \nabla p}{\rho^2}$$
6. For barotropic flow, $\nabla \rho \times \nabla p = 0$. Combining with continuity gives:
$$\frac{d}{dt}\left( \frac{\vec{\omega}}{\rho} \right) = \left( \frac{\vec{\omega}}{\rho} \cdot \nabla \right)\vec{v}$$
7. Explain that the conservation of circulation corresponds to vortex lines being frozen into the inviscid fluid.

---

## Question 7: Hydrostatic Dynamics of the Solar Corona with an Example

*Module reference: [[Part2_Incompressible_and_Viscous_Flows#2. Hydrostatic Dynamics of the Solar Corona and the Parker Wind]]*

### Blackboard Delivery Strategy
1. Write the radial hydrostatic equation in spherical symmetry: $\frac{dp}{dr} = -\rho \frac{G M_\odot}{r^2}$.
2. Assume an isothermal corona ($T = T_0 = \text{constant}$): $p = \rho c_s^2 = \frac{\rho k_B T_0}{m_p}$.
3. Integrate from coronal base $r_0$ with pressure $p_0$:
$$p(r) = p_0 \exp\left[ \frac{G M_\odot m_p}{k_B T_0 r_0} \left( \frac{r_0}{r} - 1 \right) \right]$$
4. Take the limit $r \to \infty$:
$$p_\infty = p_0 \exp\left( -\frac{G M_\odot m_p}{k_B T_0 r_0} \right) \approx 10^{-4} p_0 \sim 10^{-4}\text{ dyn cm}^{-2}$$
5. Highlight the paradox: $p_{ISM} \sim 10^{-12}\text{ dyn cm}^{-2}$, so $p_\infty \gg p_{ISM}$. A static corona cannot match the interstellar boundary.
6. Present Parker's dynamical solution: the corona must expand as a transonic wind governed by:
$$\left( v - \frac{c_s^2}{v} \right)\frac{dv}{dr} = \frac{2 c_s^2}{r}\left( 1 - \frac{r_c}{r} \right), \quad r_c = \frac{G M_\odot}{2 c_s^2}$$

---

## Question 8: Viscosity in Navier-Stokes and Flow Through a Circular Pipe

*Module reference: [[Part2_Incompressible_and_Viscous_Flows#3. Viscous Flows: The Navier-Stokes Equation and Hagen-Poiseuille Flow]]*

### Blackboard Delivery Strategy
1. Show how viscous stress divergence $\nabla \cdot \mathbf{\sigma} = \mu \nabla^2 \vec{v}$ enters for incompressible flow ($\nabla \cdot \vec{v} = 0$), yielding:
$$\rho \frac{d\vec{v}}{dt} = -\nabla p + \mu \nabla^2 \vec{v}$$
2. Set up pipe geometry: cylinder of radius $R$, length $L$, driven by $\Delta p = p_1 - p_2$. Flow is steady, unidirectional: $\vec{v} = v_z(r) \hat{z}$.
3. Note that the convective term vanishes identically: $(\vec{v} \cdot \nabla)\vec{v} = v_z \frac{\partial v_z}{\partial z}\hat{z} = 0$.
4. Write the radial equation in cylindrical coordinates:
$$\frac{1}{r}\frac{d}{dr}\left( r \frac{dv_z}{dr} \right) = \frac{1}{\mu}\frac{dp}{dz} = -\frac{\Delta p}{\mu L}$$
5. Integrate twice: $v_z(r) = -\frac{\Delta p}{4\mu L} r^2 + C_1 \ln r + C_2$.
6. Apply boundary conditions: finiteness at $r = 0 \implies C_1 = 0$; no-slip at $r = R \implies v_z(R) = 0 \implies C_2 = \frac{\Delta p R^2}{4\mu L}$.
7. State the parabolic profile: $v_z(r) = \frac{\Delta p}{4\mu L}(R^2 - r^2)$.
8. Integrate to obtain Hagen-Poiseuille's flow rate: $Q = \int_0^R v_z 2\pi r dr = \frac{\pi R^4 \Delta p}{8\mu L}$.

---

## Question 9: Sound Waves and the Jeans Instability

*Module reference: [[Part3_Waves_Instabilities_and_Turbulence#1. Sound Waves and the Jeans Gravitational Instability]]*

### Blackboard Delivery Strategy
1. Linearize continuity and Euler equations for isentropic perturbations ($p_1 = c_s^2 \rho_1$):
$$\frac{\partial \rho_1}{\partial t} + \rho_0 \nabla \cdot \vec{v}_1 = 0, \quad \rho_0 \frac{\partial \vec{v}_1}{\partial t} = -c_s^2 \nabla \rho_1$$
2. Take $\partial_t$ of continuity and $\nabla \cdot$ of Euler to derive $\frac{\partial^2 \rho_1}{\partial t^2} - c_s^2 \nabla^2 \rho_1 = 0 \implies \omega^2 = c_s^2 k^2$.
3. Introduce self-gravity via Poisson's equation $\nabla^2 \Phi_1 = 4\pi G \rho_1$ (using the Jeans swindle).
4. Linearized momentum: $\rho_0 \partial_t \vec{v}_1 = -c_s^2 \nabla \rho_1 - \rho_0 \nabla \Phi_1$.
5. Combine to obtain the Jeans wave equation:
$$\frac{\partial^2 \rho_1}{\partial t^2} - c_s^2 \nabla^2 \rho_1 - 4\pi G \rho_0 \rho_1 = 0$$
6. Fourier mode dispersion relation:
$$\omega^2 = c_s^2 k^2 - 4\pi G \rho_0$$
7. Discuss the two regimes:
   - $k > k_J = \sqrt{4\pi G \rho_0 / c_s^2}$: stable acoustic oscillations.
   - $k < k_J$: $\omega = \pm i \gamma_J$, exponential gravitational collapse with growth rate $\gamma_J = \sqrt{4\pi G \rho_0 - c_s^2 k^2}$.
8. Define Jeans length $\lambda_J = c_s \sqrt{\pi / (G\rho_0)}$ and Jeans mass $M_J \propto c_s^3 / \sqrt{G^3 \rho_0}$.

---

## Question 10: Qualitative Discussion of Rayleigh Convection

*Module reference: [[Part3_Waves_Instabilities_and_Turbulence#2. Hydrodynamic Instabilities]]*

### Blackboard Delivery Strategy
1. Describe the physical system: horizontal fluid layer of depth $d$ heated from below ($\Delta T = T_{bottom} - T_{top} > 0$) in gravity $\vec{g} = -g \hat{z}$.
2. State the Boussinesq approximation: density is constant except in the buoyancy term $\rho = \rho_0 [1 - \alpha (T - T_0)]$.
3. Contrast the driving and stabilizing mechanisms:
   - Driving: thermal buoyancy $f_b \approx \rho_0 g \alpha \Delta T$, pushing hot, expanded parcels upward.
   - Stabilizing: thermal diffusion ($\chi$) bleeds heat away, equalizing temperature; kinematic viscosity ($\nu$) resists parcel motion.
4. Construct the dimensionless Rayleigh number by dimensional balance:
$$Ra = \frac{g \alpha \Delta T d^3}{\nu \chi}$$
5. State the stability regimes:
   - $Ra < Ra_c \approx 1708$: conduction state (stationary fluid, linear temperature profile).
   - $Ra > Ra_c$: convective instability sets in, forming steady hexagonal Bénard cells.
   - $Ra \gg 10^6$: transition to turbulent thermal convection.

---

## Question 11: Kolmogorov's Theory of Turbulence and Reynolds Averaging

*Module reference: [[Part3_Waves_Instabilities_and_Turbulence#3. Kolmogorov's Theory of Developed Turbulence]]*

### Blackboard Delivery Strategy
1. Present the Richardson cascade: energy injected at scale $L$, transferred inviscidly down through eddies, dissipated by viscosity at scale $\eta$.
2. State Kolmogorov's hypotheses: local isotropy, first similarity (micro-scales depend on $\nu, \epsilon$), second similarity (inertial subrange depends solely on $\epsilon$).
3. Derive Kolmogorov micro-scales from $[\epsilon] = \text{m}^2\text{s}^{-3}$ and $[\nu] = \text{m}^2\text{s}^{-1}$:
$$\eta = (\nu^3/\epsilon)^{1/4}, \quad \tau_\eta = (\nu/\epsilon)^{1/2}$$
4. Derive the energy spectrum $E(k) = C_K \epsilon^{2/3} k^{-5/3}$ via dimensional analysis.
5. Define the two-point velocity correlation tensor $R_{ij}(\vec{r}) = \langle v_i(\vec{x}) v_j(\vec{x}+\vec{r}) \rangle$ and cite the $4/5$ law: $S_3(r) = -\frac{4}{5}\epsilon r$.
6. Sketch Reynolds averaging: decompose $v_i = \bar{v}_i + v_i'$, average Navier-Stokes, and show the emergence of the Reynolds stress tensor:
$$\tau_{ij}^{turb} = -\rho \overline{v_i' v_j'}$$

---

## Question 12: $E \times B$, $\nabla B$, and Curvature Drift Velocities

*Module reference: [[Part4_Single_Particle_Motion_and_Magnetic_Confinement#1. Charged Particle Dynamics in Magnetic Fields and Guiding-Center Drifts]]*

### Blackboard Delivery Strategy
1. Write the general guiding-center drift formula from $\vec{F} + q(\vec{v}_D \times \vec{B}) = 0$:
$$\vec{v}_D = \frac{\vec{F} \times \vec{B}}{q B^2}$$
2. **$E \times B$ drift**: substitute $\vec{F} = q\vec{E}$:
$$\vec{v}_E = \frac{\vec{E} \times \vec{B}}{B^2}$$
Note: independent of charge $q$ and mass $m$; carries zero net electrical current.
3. **$\nabla B$ drift**: average the force over a gyro-orbit where $\rho_L$ is smaller in stronger $B$, yielding $\langle \vec{F} \rangle = -\mu \nabla B$ (with $\mu = m v_\perp^2 / (2B)$):
$$\vec{v}_{\nabla B} = \frac{m v_\perp^2}{2 q B^3} (\vec{B} \times \nabla B)$$
Note: charge-dependent; electrons and ions drift in opposite directions, driving a current.
4. **Curvature drift**: particle moving with $v_\parallel$ along curved field lines feels centrifugal force $\vec{F}_c = \frac{m v_\parallel^2}{R_c^2} \vec{R}_c$:
$$\vec{v}_c = \frac{m v_\parallel^2}{q B^2} \frac{\vec{R}_c \times \vec{B}}{R_c^2}$$
5. Show that in a vacuum field ($\nabla \times \vec{B} = 0$), $\vec{R}_c/R_c^2 = \nabla_\perp B / B$, combining into:
$$\vec{v}_{mag} = \frac{m}{q B^3} \left( v_\parallel^2 + \frac{1}{2} v_\perp^2 \right) (\vec{B} \times \nabla B)$$

---

## Question 13: The Magnetic Mirror and Particle Reflection Condition

*Module reference: [[Part4_Single_Particle_Motion_and_Magnetic_Confinement#2. The Magnetic Mirror and Reflection Condition]]*

### Blackboard Delivery Strategy
1. From $\nabla \cdot \vec{B} = 0$, derive $B_r \approx -\frac{r}{2}\frac{\partial B_z}{\partial z}$.
2. Evaluate parallel Lorentz force on a gyrating particle ($r = \rho_L, v_\theta = -v_\perp$):
$$F_z = -q v_\theta B_r = -\frac{m v_\perp^2}{2 B} \frac{\partial B_z}{\partial z} \equiv -\mu \frac{\partial B_z}{\partial z}$$
3. Prove invariance of magnetic moment $\mu = \frac{m v_\perp^2}{2 B}$:
$$\frac{dE}{dt} = \frac{d}{dt}\left( \frac{1}{2}m v_\parallel^2 + \mu B \right) = 0 \implies m v_\parallel \dot{v}_\parallel + B \dot{\mu} + \mu v_\parallel \partial_z B = 0 \implies \frac{d\mu}{dt} = 0$$
4. Use energy and $\mu$ conservation to write parallel velocity along the mirror:
$$v_\parallel(z) = v_0 \sqrt{1 - \frac{B(z)}{B_{min}} \sin^2\alpha_0}$$
5. Reflection condition $v_\parallel = 0$ before the throat $B_{max}$:
$$\sin^2\alpha_0 \ge \frac{B_{min}}{B_{max}} \equiv \frac{1}{R_m}$$
6. Define the loss cone angle $\sin\alpha_{loss} = 1/\sqrt{R_m}$.

---

## Question 14: Trapped Particles in Tokamaks and Trapping Condition

*Module reference: [[Part4_Single_Particle_Motion_and_Magnetic_Confinement#3. Trapped Particles in Tokamaks and Neoclassical Dynamics]]*

### Blackboard Delivery Strategy
1. Write the tokamak toroidal magnetic field profile $B_\phi(R) = B_0 R_0 / R$.
2. Substitute $R = R_0(1 + \epsilon \cos\theta)$ where $\epsilon = r/R_0 \ll 1$:
$$B(\theta) \approx B_0(1 - \epsilon \cos\theta)$$
High field on inboard ($\theta = \pi$); low field on outboard ($\theta = 0$).
3. Identify the magnetic mirror along field lines with mirror ratio $R_m \approx 1 + 2\epsilon$.
4. Derive the trapping condition at the outboard midplane:
$$\sin^2\alpha_0 \ge \frac{1-\epsilon}{1+\epsilon} \approx 1 - 2\epsilon \implies \frac{\lvert v_{\parallel 0}\rvert}{v_0} \le \sqrt{2\epsilon}$$
5. Calculate trapped fraction: $f_{tr} \approx \sqrt{2\epsilon} = \sqrt{2r/R_0}$.
6. Explain banana orbits produced by vertical drift, stating banana width $\Delta r_b \approx \frac{q_s}{\sqrt{\epsilon}}\rho_L$ and bounce frequency $\omega_b \approx \frac{\sqrt{\epsilon} v_{th}}{q_s R_0}$.

---

## Question 15: Gyrokinetics Theory Assumptions, Gyrocenter Motion, and Gyro-Average

*Module reference: [[Part5_Plasma_Kinetics_Gyrokinetics_and_Waves#1. Gyrokinetic Theory: Foundations, Ordering, and 5D Reduction]]*

### Blackboard Delivery Strategy
1. Motivation: 6D Vlasov is too expensive because $\Omega_{ci} \sim 10^8\text{ rad/s}$ requires $\Delta t < 1/\Omega_{ci}$. Gyrokinetics averages over fast gyration to reduce the system to 5D.
2. State the gyrokinetic ordering in $\epsilon = \rho_i / L \ll 1$:
   - $\omega / \Omega_{ci} \sim \epsilon$ (low frequency).
   - $k_\parallel / k_\perp \sim \epsilon$ (anisotropy).
   - $k_\perp \rho_i \sim 1$ (micro-scale drift waves).
   - $\delta f / F_0 \sim e\delta\phi / T_e \sim \epsilon$ (small perturbations).
3. Gyrocenter coordinates: $\vec{r} = \vec{R} + \vec{\rho}_L(\theta)$, representing particles as charged rings.
4. Define the gyro-average operator $\langle A \rangle_{\vec{R}} = \frac{1}{2\pi}\oint A(\vec{R} + \vec{\rho}_L) d\theta$, showing in Fourier space that $\langle e^{i \vec{k} \cdot \vec{r}} \rangle = J_0(k_\perp \rho_L) e^{i \vec{k} \cdot \vec{R}}$.
5. Gyrocenter velocity: $\frac{d\vec{R}}{dt} = v_\parallel \hat{b} + \vec{v}_E^{ring} + \vec{v}_{\nabla B} + \vec{v}_c$.
6. Mention code applications: GENE simulates core tokamak turbulence.

---

## Question 16: Landau Damping

*Module reference: [[Part5_Plasma_Kinetics_Gyrokinetics_and_Waves#2. Landau Damping]]*

### Blackboard Delivery Strategy
1. Linearize 1D Vlasov-Poisson for electrons: $\partial_t f_1 + v \partial_x f_1 - \frac{e E_1}{m} f_0'(v) = 0$, $\partial_x E_1 = -\frac{e}{\epsilon_0}\int f_1 dv$.
2. Apply spatial Fourier and temporal Laplace transforms to obtain the dielectric function:
$$D(k, \omega) = 1 - \frac{\omega_p^2}{k^2}\int_C \frac{f_0'(v)}{v - \omega/k} dv$$
3. Sketch the Landau contour $C$, deformed below the pole $v = \omega/k$ to maintain analytic continuation for damped modes ($\text{Im}(\omega) < 0$).
4. Use the Plemelj formula to split $D(k, \omega) = D_r + i D_i$:
$$D_r \approx 1 - \frac{\omega_p^2}{\omega_r^2} - 3\frac{k^2 v_{th}^2 \omega_p^2}{\omega_r^4}, \quad D_i = -\pi \frac{\omega_p^2}{k^2} f_0'\left( \frac{\omega_r}{k} \right)$$
5. Derive damping rate $\gamma_L = -\frac{D_i}{\partial D_r / \partial \omega_r} = \left. \frac{\pi \omega_p^3}{2 k^2} \frac{df_0}{dv} \right\rvert_{v = \omega_r/k}$.
6. Explain physical wave-particle resonance: for a Maxwellian, $df_0/dv < 0$, so more particles travel slightly slower than $v_{ph}$ than faster. The wave does net work accelerating slower particles, damping collisionlessly.

---

## Question 17: Dispersion Relation for Electromagnetic Waves in Magnetized Cold Plasmas

*Module reference: [[Part5_Plasma_Kinetics_Gyrokinetics_and_Waves#3. Waves in Magnetized Cold Plasmas]]*

### Blackboard Delivery Strategy
1. Set up cold plasma equations: $m_s \dot{\vec{v}}_{1s} = q_s(\vec{E}_1 + \vec{v}_{1s} \times \vec{B}_0)$, with $\vec{B}_0 = B_0 \hat{z}$.
2. Solve for velocity components and construct the dielectric tensor $\mathbf{K}$ in Stix notation:
$$\mathbf{K} = \begin{pmatrix} S & -i D & 0 \\ i D & S & 0 \\ 0 & 0 & P \end{pmatrix}$$
3. State $R = 1 - \sum \frac{\omega_{ps}^2}{\omega(\omega+\Omega_s)}$, $L = 1 - \sum \frac{\omega_{ps}^2}{\omega(\omega-\Omega_s)}$, $P = 1 - \sum \frac{\omega_{ps}^2}{\omega^2}$.
4. **Parallel propagation ($\theta = 0$)**:
   - R-mode: $n_R^2 = R$, electron cyclotron resonance at $\omega = \Omega_{ce}$ (whistler waves).
   - L-mode: $n_L^2 = L$, ion cyclotron resonance at $\omega = \Omega_{ci}$.
   - Faraday rotation: $\Delta\psi \propto \int n_e B_\parallel ds$.
5. **Perpendicular propagation ($\theta = \pi/2$)**:
   - O-mode: $n_O^2 = P$, $\vec{E}_1 \parallel \vec{B}_0$, cutoff at $\omega = \omega_{pe}$.
   - X-mode: $n_X^2 = \frac{R L}{S}$, upper hybrid resonance at $\omega_{UH} = \sqrt{\omega_{pe}^2 + \Omega_{ce}^2}$.

---

## Question 18: Qualitative Discussion of the Braginskii Model

*Module reference: [[Part6_Two_Fluid_Theory_Transport_and_Microinstabilities#1. The Braginskii Two-Fluid Transport Model]]*

### Blackboard Delivery Strategy
1. Present the model context: collisional closure to the two-fluid Fokker-Planck system with Landau collision operator.
2. Write the momentum balance for electrons and ions:
$$m_s n \frac{d\vec{v}_s}{dt} = q_s n (\vec{E} + \vec{v}_s \times \vec{B}) - \nabla p_s - \nabla \cdot \mathbf{\Pi}_s \pm \vec{R}_{ei}$$
3. Discuss the friction force $\vec{R}_{ei} = \vec{R}_u + \vec{R}_T$:
   - Relative velocity friction: $\vec{R}_u = e n (j_\parallel / \sigma_\parallel + \vec{j}_\perp / \sigma_\perp)$.
   - Spitzer resistivity $\eta \propto T_e^{-3/2}$: explain that Coulomb collision cross-section drops as $1/v^4$, making hot fusion plasmas excellent conductors.
   - Thermal force $\vec{R}_T = -0.71 n \nabla_\parallel T_e$: electrons from hotter regions collide less frequently, creating an effective force pushing electrons toward the hotter region.
4. Discuss thermal conductivities: $\kappa_\parallel \propto T_e^{5/2}$, $\kappa_\perp \propto n^2 / (B^2 \sqrt{T_e})$, giving $\kappa_\parallel / \kappa_\perp \sim (\Omega_{ce} \tau_e)^2 \gg 10^{10}$. Flux surfaces are virtually isothermal.

---

## Question 19: Drift-Reduced Braginskii Model, Vorticity Equation, and Generalized Ohm's Law

*Module reference: [[Part6_Two_Fluid_Theory_Transport_and_Microinstabilities#2. The Drift-Reduced Braginskii Model]]*

### Blackboard Delivery Strategy
1. State drift-reduced ordering: $\omega / \Omega_{ci} \ll 1, k_\parallel \ll k_\perp$. Perpendicular velocity given by $E \times B$, diamagnetic, and polarization drifts.
2. **Derive the Vorticity Equation**:
   - Start from charge conservation: $\nabla_\perp \cdot \vec{j}_\perp + \nabla_\parallel j_\parallel = 0$.
   - $\vec{j}_\perp = \vec{j}_{dia} + \vec{j}_{pol}$.
   - Diamagnetic divergence: $\nabla \cdot \vec{j}_{dia} = \nabla \cdot \left( \frac{\hat{b}\times\nabla p}{B} \right) \approx -2\mathcal{C}(p)$.
   - Polarization divergence: $\vec{j}_{pol} = -\frac{\rho}{B^2}\frac{d}{dt}\nabla_\perp \phi \implies \nabla \cdot \vec{j}_{pol} = -\frac{\rho}{B^2}\frac{d}{dt}\nabla_\perp^2 \phi$.
   - Combine: $\frac{\rho}{B^2}\frac{d}{dt}\nabla_\perp^2 \phi = \nabla_\parallel j_\parallel - 2\mathcal{C}(p)$.
3. **Derive Generalized Ohm's Law**:
   - Project electron momentum along $\vec{B}$: $0 = -e n E_\parallel - \nabla_\parallel p_e + e n \eta_\parallel j_\parallel$.
   - Substitute $E_\parallel = -\nabla_\parallel \phi - \partial_t A_\parallel$:
$$\eta_\parallel j_\parallel = -\nabla_\parallel \phi - \frac{\partial A_\parallel}{\partial t} + \frac{1}{e n}\nabla_\parallel p_e$$

---

## Question 20: Resistive Ballooning Mode (RBM) and Dispersion Relation

*Module reference: [[Part6_Two_Fluid_Theory_Transport_and_Microinstabilities#3. The Resistive Ballooning Mode (RBM)]]*

### Blackboard Delivery Strategy
1. Physical concept: bad curvature on outboard side ($\vec{\kappa} \parallel \nabla p$) drives Rayleigh-Taylor-like instability, localized where resistivity prevents electrons from shorting out charge separation.
2. Write linearized equations in slab geometry:
   - Vorticity: $\frac{\rho_0}{B_0^2}\gamma k_\perp^2 \phi_1 = i k_\parallel j_{\parallel 1} + i k_y \frac{2}{B_0 R_0} p_1$.
   - Ohm's law: $\eta_\parallel j_{\parallel 1} = -i k_\parallel \phi_1$.
   - Pressure: $\gamma p_1 = i \frac{k_y \phi_1}{B_0} \frac{p_0}{L_p}$.
3. Substitute $j_{\parallel 1}$ and $p_1$ into vorticity:
$$\frac{\rho_0}{B_0^2}\gamma k_\perp^2 \phi_1 = \frac{k_\parallel^2}{\eta_\parallel}\phi_1 - \frac{2 k_y^2 p_0}{\gamma B_0^2 R_0 L_p}\phi_1$$
4. Rearrange into dispersion relation:
$$\gamma^2 + \frac{k_\parallel^2 B_0^2}{\eta_\parallel \rho_0 k_\perp^2}\gamma = \gamma_{MHD}^2 \equiv \frac{2 k_y^2 p_0}{\rho_0 k_\perp^2 R_0 L_p}$$
5. Analyze resistive limit: $\gamma_{RBM} \approx \left( \frac{\eta_\parallel k_y^2 p_0}{\mu_0 B_0^2 L_p R_0} \right)^{1/3}$.

---

## Question 21: Ambipolarity Condition in Weakly Ionized Plasmas and Strong Magnetic Fields

*Module reference: [[Part6_Two_Fluid_Theory_Transport_and_Microinstabilities#4. Ambipolar Diffusion in Weakly Ionized Plasmas]]*

### Blackboard Delivery Strategy
1. Write force balance with neutral collisions: $\vec{\Gamma}_s = \pm n \mu_s \vec{E} - D_s \nabla n$, with $\mu_s = \frac{e}{m_s \nu_{sn}}, D_s = \frac{k_B T_s}{m_s \nu_{sn}}$.
2. Emphasize that $D_e \gg D_i$. Electrons try to escape faster, setting up the ambipolar field $\vec{E}_A$.
3. Ambipolarity condition: $\vec{\Gamma}_e = \vec{\Gamma}_i \implies -n\mu_e \vec{E}_A - D_e \nabla n = n\mu_i \vec{E}_A - D_i \nabla n$.
4. Solve for ambipolar field: $\vec{E}_A = -\frac{D_e - D_i}{\mu_e + \mu_i}\frac{\nabla n}{n}$.
5. Derive ambipolar diffusion coefficient: $D_A = \frac{\mu_i D_e + \mu_e D_i}{\mu_e + \mu_i} \approx D_i(1 + T_e/T_i)$. Diffusion rate is governed by slow ions but doubled by electron pressure.
6. Strong magnetic field limit ($\Omega_s \gg \nu_{sn}$):
   - $D_{\perp s} \approx \frac{k_B T_s \nu_{sn} m_s}{q^2 B^2} \propto \frac{m_s}{B^2}$.
   - **Inversion**: $D_{\perp i} \gg D_{\perp e}$ because ions have larger gyroradii. Ions diffuse faster across $\vec{B}$, reversing the electric field sign: $\vec{E}_{A\perp}$ holds ions back, and $D_{A\perp} \propto 1/B^2$.

---

## Question 22: Fundamental Equations of Magnetohydrodynamics (MHD)

*Module reference: [[Part7_Magnetohydrodynamics_Equilibrium_and_Waves#1. Fundamental Equations of Magnetohydrodynamics (MHD)]]*

### Blackboard Delivery Strategy
1. State the three pillars of MHD: quasi-neutrality ($n_e \approx Z n_i$), non-relativistic flows ($v \ll c$, no displacement current $\nabla \times \vec{B} = \mu_0 \vec{j}$), single-fluid variables ($\rho \approx m_i n, \vec{v} \approx \vec{v}_i, \vec{j} = e n (\vec{v}_i - \vec{v}_e)$).
2. Write the four fundamental equations:
   - Continuity: $\frac{\partial\rho}{\partial t} + \nabla \cdot (\rho \vec{v}) = 0$.
   - Momentum: $\rho \frac{d\vec{v}}{dt} = -\nabla p + \vec{j} \times \vec{B} + \rho \vec{g}$.
   - Induction: $\frac{\partial\vec{B}}{\partial t} = \nabla \times (\vec{v} \times \vec{B}) + \frac{\eta}{\mu_0}\nabla^2 \vec{B}$.
   - Solenoidal constraint: $\nabla \cdot \vec{B} = 0$.
3. Expand the Lorentz force into magnetic pressure and tension: $\vec{j} \times \vec{B} = -\nabla(B^2/2\mu_0) + \frac{(\vec{B}\cdot\nabla)\vec{B}}{\mu_0}$.
4. Define the magnetic Reynolds number $R_m = \mu_0 \sigma v L$. Discuss the ideal MHD limit ($R_m \gg 1$) and state Alfvén's theorem of flux freezing ($d\Phi/dt = 0$).

---

## Question 23: The Z-Pinch Equilibrium, Bennett Relation, and Stability

*Module reference: [[Part7_Magnetohydrodynamics_Equilibrium_and_Waves#2. Magnetohydrostatic Equilibrium: The Z-Pinch and Bennett Relation]]*

### Blackboard Delivery Strategy
1. Configuration: cylindrical column with axial current $\vec{j} = j_z(r)\hat{z}$ and azimuthal field $\vec{B} = B_\theta(r)\hat{\theta}$.
2. Radial magnetostatic force balance: $\frac{dp}{dr} = -j_z B_\theta = -\frac{B_\theta}{\mu_0 r}\frac{d}{dr}(r B_\theta)$.
3. Multiply by $r^2$ and integrate from $r = 0$ to $a$:
   - Left side: $\int_0^a r^2 p' dr = [r^2 p]_0^a - 2\int_0^a r p dr = -\frac{N k_B(T_e + T_i)}{\pi}$.
   - Right side: $-\frac{1}{\mu_0}\int_0^a r B_\theta d(r B_\theta) = -\frac{a^2 B_\theta^2(a)}{2\mu_0} = -\frac{\mu_0 I^2}{8\pi^2}$ (using $2\pi a B_\theta(a) = \mu_0 I$).
4. Equate both sides to derive the **Bennett relation**:
$$I^2 = \frac{8\pi}{\mu_0} N k_B (T_e + T_i)$$
5. Discuss instability:
   - Sausage mode ($m = 0$): local necking increases $B_\theta \propto 1/r$, pinching the column off.
   - Kink mode ($m = 1$): off-axis bend crowds field lines on the inner side, driving the column into the wall.

---

## Question 24: Derivation of the Grad-Shafranov Equation for Tokamak Equilibrium

*Module reference: [[Part7_Magnetohydrodynamics_Equilibrium_and_Waves#3. Tokamak Toroidal Equilibrium: The Grad-Shafranov Equation]]*

### Blackboard Delivery Strategy
1. Assume axisymmetry ($\partial_\phi = 0$) in $(R, \phi, Z)$.
2. From $\nabla \cdot \vec{B} = 0$, define poloidal flux $\psi(R, Z)$: $B_R = -\frac{1}{R}\frac{\partial\psi}{\partial Z}, B_Z = \frac{1}{R}\frac{\partial\psi}{\partial R}$, so $\vec{B} = \frac{\nabla\psi\times\hat{\phi}}{R} + \frac{F}{R}\hat{\phi}$ with $F = R B_\phi$.
3. From $\vec{B} \cdot \nabla p = 0$, show $p = p(\psi)$.
4. From $\vec{j} \cdot \nabla p = 0$, show $F = F(\psi)$.
5. Use Ampère's law to express toroidal current: $\mu_0 j_\phi = -\frac{1}{R}\Delta^* \psi$, where $\Delta^* \psi = R \frac{\partial}{\partial R}\left( \frac{1}{R}\frac{\partial\psi}{\partial R} \right) + \frac{\partial^2\psi}{\partial Z^2}$.
6. Project force balance along $\nabla\psi$: $(\vec{j} \times \vec{B}) \cdot \nabla\psi = \nabla p \cdot \nabla\psi = p'(\psi)\lvert \nabla\psi\rvert^2$.
7. Evaluate the cross product explicitly:
$$-\frac{\Delta^* \psi}{\mu_0 R^2}\lvert \nabla\psi\rvert^2 - \frac{F F'}{\mu_0 R^2}\lvert \nabla\psi\rvert^2 = p'(\psi)\lvert \nabla\psi\rvert^2$$
8. Conclude with the **Grad-Shafranov equation**:
$$\Delta^* \psi = -\mu_0 R^2 p'(\psi) - F F'(\psi)$$

---

## Question 25: Dispersion Relation of Alfvén Waves in Plasmas

*Module reference: [[Part7_Magnetohydrodynamics_Equilibrium_and_Waves#4. Magnetohydrodynamic Waves: Alfvén and Magnetosonic Modes]]*

### Blackboard Delivery Strategy
1. Linearize ideal incompressible MHD about uniform $\vec{B}_0 = B_0 \hat{z}$:
$$\rho_0 \frac{\partial\vec{v}_1}{\partial t} = \frac{1}{\mu_0}(\vec{B}_0 \cdot \nabla)\vec{B}_1 - \nabla\left( p_1 + \frac{\vec{B}_0 \cdot \vec{B}_1}{\mu_0} \right)$$
$$\frac{\partial\vec{B}_1}{\partial t} = (\vec{B}_0 \cdot \nabla)\vec{v}_1$$
2. For transverse shear motions ($v_{1z} = 0, \vec{k} \cdot \vec{v}_1 = 0$), total pressure perturbation vanishes.
3. In Fourier space: $-i\omega \rho_0 \vec{v}_1 = \frac{i k_\parallel B_0}{\mu_0}\vec{B}_1$ and $-i\omega \vec{B}_1 = i k_\parallel B_0 \vec{v}_1$.
4. Substitute $\vec{B}_1$ into momentum:
$$\omega^2 \rho_0 \vec{v}_1 = \frac{k_\parallel^2 B_0^2}{\mu_0}\vec{v}_1 \implies \omega^2 = k_\parallel^2 v_A^2$$
where $v_A = \frac{B_0}{\sqrt{\mu_0 \rho_0}}$ is the **Alfvén speed**.
5. Emphasize that shear Alfvén waves are non-dispersive along field lines and carry energy strictly along $\vec{B}_0$ ($\vec{v}_g = v_A \hat{z}$). Mention compressional fast and slow magnetosonic modes.

---

## Question 26: Parker Magnetic Reconnection (Sweet-Parker Model)

*Module reference: [[Part8_Reconnection_Relaxation_and_Dynamo_Theory#1. Magnetic Reconnection: The Sweet-Parker Model]]*

### Blackboard Delivery Strategy
1. Sketch the 2D reconnection geometry: current sheet of length $2L$ and thickness $2\delta$ with inflow $v_{in}$ and outflow $v_{out}$.
2. Mass conservation (incompressible): $L v_{in} = \delta v_{out} \implies v_{in} = \frac{\delta}{L} v_{out}$.
3. Energy/momentum conservation: magnetic pressure accelerates outflow to the Alfvén speed:
$$\frac{B_{in}^2}{2\mu_0} = \frac{1}{2}\rho v_{out}^2 \implies v_{out} = v_A$$
4. Ohm's law in the resistive diffusion layer: $E_z = v_{in} B_{in} \approx \frac{\eta}{\mu_0}\frac{B_{in}}{\delta} \implies v_{in} = \frac{\eta}{\mu_0 \delta}$.
5. Multiply the two equations for $v_{in}$:
$$v_{in}^2 = \left(\frac{\delta}{L} v_A\right)\left(\frac{\eta}{\mu_0 \delta}\right) = \frac{\eta}{\mu_0 L} v_A \implies \frac{v_{in}}{v_A} = \frac{1}{\sqrt{S}}$$
where $S = \frac{\mu_0 L v_A}{\eta}$ is the Lundquist number.
6. Highlight that $S \sim 10^8 - 10^{14}$ in solar flares makes Sweet-Parker far too slow, necessitating Petschek shock-mediated reconnection or plasmoid-instability chains.

---

## Question 27: Woltjer's Theorems and Consequences

*Module reference: [[Part8_Reconnection_Relaxation_and_Dynamo_Theory#2. Woltjer's Theorems and Magnetic Helicity]]*

### Blackboard Delivery Strategy
1. Define magnetic helicity $K = \int_V \vec{A} \cdot \vec{B} \, d^3x$ for a volume bounded by a magnetic flux surface ($\vec{B} \cdot \hat{n} = 0$). Prove gauge invariance under $\vec{A} \to \vec{A} + \nabla\chi$.
2. **First Theorem (Helicity Conservation)**:
   - Evaluate $\frac{dK}{dt} = \int (\dot{\vec{A}}\cdot\vec{B} + \vec{A}\cdot\dot{\vec{B}}) d^3x$.
   - Use $\dot{\vec{A}} = -\vec{E} - \nabla\phi$ and ideal Ohm's law $\vec{E} \cdot \vec{B} = 0$.
   - Show $\frac{dK}{dt} = \oint_S (-\phi\vec{B} + \vec{A}\times\vec{E})\cdot\hat{n} dS = 0$. Helicity is conserved in ideal MHD.
3. **Second Theorem (Minimum Energy State)**:
   - Minimize magnetic energy $W = \int \frac{B^2}{2\mu_0} d^3x$ subject to constant helicity $K$ using variational calculus: $\delta(W - \lambda K) = 0$.
   - Show that variation yields $\nabla \times \vec{B} = 2\mu_0 \lambda \vec{B} \equiv \mu \vec{B}$.
   - Conclude that the relaxed state is a linear force-free field with $\vec{j} \times \vec{B} = 0$.

---

## Question 28: Taylor's Plasma Relaxation and Field Reversal in a Screw Pinch

*Module reference: [[Part8_Reconnection_Relaxation_and_Dynamo_Theory#3. Taylor Plasma Relaxation and the Reversed Field Pinch (RFP)]]*

### Blackboard Delivery Strategy
1. Present Taylor's selective decay hypothesis: in a turbulent plasma with small resistivity, energy dissipates much faster than global helicity ($dW/dt \propto k^2 \eta \gg dK/dt \propto k \eta$). The plasma minimizes $W$ at fixed global $K$.
2. By Woltjer's theorem, the relaxed equilibrium satisfies $\nabla \times \vec{B} = \mu \vec{B}$ with uniform $\mu$.
3. Solve in cylinder: $\nabla^2 \vec{B} + \mu^2 \vec{B} = 0$. For axial component:
$$\frac{1}{r}\frac{d}{dr}\left( r \frac{dB_z}{dr} \right) + \mu^2 B_z = 0 \implies B_z(r) = B_0 J_0(\mu r), \quad B_\theta(r) = B_0 J_1(\mu r)$$
This is the **Bessel Function Model (BFM)**.
4. Define pinch parameter $\Theta = \mu a / 2$ and reversal parameter $F = \frac{\mu a J_0(\mu a)}{2 J_1(\mu a)}$.
5. Explain field reversal: the first zero of $J_0$ occurs at $\mu a \approx 2.405$ ($\Theta \approx 1.2$). For $\Theta > 1.2$, $J_0(\mu a) < 0$, so $B_z(a) < 0$. The edge magnetic field spontaneously reverses direction.
6. Connect to **RFX-mod** in Padova: RFP operates disruption-free in this Taylor-relaxed state.

---

## Question 29: Cowling's Anti-Dynamo Theorem and Consequences

*Module reference: [[Part8_Reconnection_Relaxation_and_Dynamo_Theory#4. Dynamo Theory and Magnetic Field Generation]]*

### Blackboard Delivery Strategy
1. State the theorem: a steady-state, axisymmetric magnetic field cannot be maintained by a steady, axisymmetric velocity field in a medium of finite conductivity.
2. Proof by contradiction:
   - Assume $\partial_\phi = 0$ and $\partial_t = 0$. Decompose $\vec{B} = \vec{B}_p + B_\phi \hat{\phi}$.
   - Closed poloidal field loops must enclose a neutral line $C_{neutral}$ where $\vec{B}_p = 0$.
   - Ampère's law around $C_{neutral}$: $\oint \vec{B}_p \cdot d\vec{\ell} = \mu_0 \int j_\phi dS \neq 0 \implies j_\phi \neq 0$.
   - Ohm's law at $C_{neutral}$: $j_\phi = \sigma [E_\phi + (\vec{v} \times \vec{B})_\phi] = \sigma [E_\phi + (v_z B_r - v_r B_z)]$.
   - Since $B_r = B_z = 0$ at the neutral line, $(\vec{v}\times\vec{B})_\phi = 0$, so $j_\phi = \sigma E_\phi$.
   - Faraday's law in steady state: $\nabla \times \vec{E} = 0 \implies \oint E_\phi d\ell = 2\pi R E_\phi = 0 \implies E_\phi = 0$.
   - Therefore, $j_\phi = 0$, which directly contradicts Ampère's law ($j_\phi \neq 0$).
3. Consequence: magnetic field generation in stars and planets requires 3D, non-axisymmetric, or non-steady motions (e.g., turbulent convection).

---

## Question 30: Mean Field Magnetohydrodynamics and the Turbulent Dynamo

*Module reference: [[Part8_Reconnection_Relaxation_and_Dynamo_Theory#4. Dynamo Theory and Magnetic Field Generation]]*

### Blackboard Delivery Strategy
1. Introduce Reynolds decomposition for velocity and magnetic fields: $\vec{v} = \langle\vec{v}\rangle + \vec{v}', \vec{B} = \langle\vec{B}\rangle + \vec{B}'$.
2. Average the induction equation to obtain the mean-field equation:
$$\frac{\partial\langle\vec{B}\rangle}{\partial t} = \nabla \times (\langle\vec{v}\rangle \times \langle\vec{B}\rangle + \vec{\mathcal{E}}) + \frac{\eta}{\mu_0}\nabla^2\langle\vec{B}\rangle$$
where $\vec{\mathcal{E}} = \langle\vec{v}' \times \vec{B}'\rangle$ is the turbulent EMF.
3. Expand $\vec{\mathcal{E}}$ for isotropic helical turbulence:
$$\vec{\mathcal{E}} = \alpha \langle\vec{B}\rangle - \beta \nabla \times \langle\vec{B}\rangle$$
4. Explain the physical origin of the coefficients:
   - **$\alpha$-effect**: $\alpha = -\frac{1}{3}\tau_c \langle\vec{v}' \cdot (\nabla \times \vec{v}')\rangle$, proportional to kinetic helicity. Cyclonic convective plumes twisted by Coriolis forces generate poloidal field from toroidal field.
   - **$\beta$-effect**: $\beta = \frac{1}{3}\tau_c \langle(v')^2\rangle$, providing enhanced turbulent magnetic diffusivity $\eta_t = \mu_0 \beta \gg \eta$.
5. Describe the astrophysical $\alpha\Omega$ dynamo:
   - $\Omega$-effect: differential rotation shears poloidal field into toroidal field.
   - $\alpha$-effect: helical turbulence twists toroidal field back into poloidal field, closing the regenerative dynamo loop in stars and galaxies.



## Linked References

- [[Fluid_and_Plasma_Dynamics_MOC]]


