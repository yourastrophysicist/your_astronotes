---
layout: "default"
title: "Part1_Kinetic_Foundations_and_Fluid_Equations"
---
# Part 1 - Kinetic Foundations and Fluid Equations

*Course: Fluid and Plasma Dynamics, Prof. Maurizio Giacomin*  
*Index: [[Fluid_and_Plasma_Dynamics_MOC]] | Exam Guide: [[Giacomin_Oral_Exam_Questions_Complete_Guide]]*  
*Relevant Exam Questions: 1, 2, 3, 4, 5*  

---

## 1. Liouville's Theorem and the Boltzmann Transport Equation

### 1.1 Microscopic Phase Space and Ensemble Density

Consider an isolated system composed of $N$ identical particles of mass $m$. The exact microscopic state of this system is represented by a single point in the $6N$-dimensional phase space $\Gamma$, defined by the generalized coordinates and conjugate momenta:
$$\mathbf{X} = (\vec{q}_1, \dots, \vec{q}_N, \vec{p}_1, \dots, \vec{p}_N)$$

The Hamiltonian of the system governed by inter-particle potentials $V(\vec{q}_i - \vec{q}_j)$ and external forces $\vec{F}_{ext} = -\nabla U(\vec{q}_i)$ is:
$$H = \sum_{i=1}^N \frac{p_i^2}{2m} + \sum_{i=1}^N U(\vec{q}_i) + \frac{1}{2} \sum_{i \neq j} V(\vec{q}_i - \vec{q}_j)$$

The trajectories in phase space obey Hamilton's canonical equations of motion:
$$\dot{\vec{q}}_i = \frac{\partial H}{\partial \vec{p}_i} = \frac{\vec{p}_i}{m}, \quad \dot{\vec{p}}_i = -\frac{\partial H}{\partial \vec{q}_i} = \vec{F}_i$$

Because exact initial positions and momenta are impossible to measure for $N \sim 10^{23}$ particles, Gibbs introduced the statistical ensemble density $\rho_{ens}(\vec{q}_1, \dots, \vec{q}_N, \vec{p}_1, \dots, \vec{p}_N, t)$. The quantity $\rho_{ens} \, d^{3N}q \, d^{3N}p$ represents the probability that the system is found in the differential phase space volume element around $\mathbf{X}$ at time $t$.

### 1.2 Proof of Liouville's Theorem

The conservation of total probability requires that the phase space density satisfies a continuity equation in the $6N$-dimensional space:
$$\frac{\partial \rho_{ens}}{\partial t} + \sum_{i=1}^N \left[ \nabla_{\vec{q}_i} \cdot (\rho_{ens} \dot{\vec{q}}_i) + \nabla_{\vec{p}_i} \cdot (\rho_{ens} \dot{\vec{p}}_i) \right] = 0$$

Expanding the spatial and momentum divergences using the product rule:
$$\frac{\partial \rho_{ens}}{\partial t} + \sum_{i=1}^N \left( \dot{\vec{q}}_i \cdot \nabla_{\vec{q}_i} \rho_{ens} + \dot{\vec{p}}_i \cdot \nabla_{\vec{p}_i} \rho_{ens} \right) + \rho_{ens} \sum_{i=1}^N \left( \nabla_{\vec{q}_i} \cdot \dot{\vec{q}}_i + \nabla_{\vec{p}_i} \cdot \dot{\vec{p}}_i \right) = 0$$

Substituting Hamilton's canonical equations into the divergence factor:
$$\nabla_{\vec{q}_i} \cdot \dot{\vec{q}}_i + \nabla_{\vec{p}_i} \cdot \dot{\vec{p}}_i = \frac{\partial}{\partial \vec{q}_i} \cdot \left( \frac{\partial H}{\partial \vec{p}_i} \right) + \frac{\partial}{\partial \vec{p}_i} \cdot \left( -\frac{\partial H}{\partial \vec{q}_i} \right) = \frac{\partial^2 H}{\partial \vec{q}_i \partial \vec{p}_i} - \frac{\partial^2 H}{\partial \vec{p}_i \partial \vec{q}_i} \equiv 0$$

By Schwarz's theorem on mixed partial derivatives, the velocity field in phase space is strictly divergence-free. Therefore:
$$\frac{d \rho_{ens}}{dt} = \frac{\partial \rho_{ens}}{\partial t} + \sum_{i=1}^N \left( \dot{\vec{q}}_i \cdot \nabla_{\vec{q}_i} \rho_{ens} + \dot{\vec{p}}_i \cdot \nabla_{\vec{p}_i} \rho_{ens} \right) = 0$$

This is **Liouville's theorem**. The convective derivative of the ensemble density along any dynamical trajectory in phase space vanishes identically. The phase space fluid behaves as an incompressible fluid: phase space volume elements may distort and stretch, but their total hypervolume is invariant.

### 1.3 Connection to the Boltzmann Equation

To describe a gas of particles, we integrate $\rho_{ens}$ over the coordinates and momenta of $N-1$ particles to define the one-particle distribution function:
$$f(\vec{x}, \vec{u}, t) = N \int \dots \int \rho_{ens} \, d^3q_2 \dots d^3q_N \, d^3p_2 \dots d^3p_N$$

Integrating the Liouville equation over the remaining $N-1$ particles couples the one-particle distribution $f_1$ to the two-particle distribution $f_2$, which in turn couples to $f_3$, forming the **BBGKY hierarchy** (Bogoliubov-Born-Green-Kirkwood-Yvon).

If particles do not interact ($V \equiv 0$), particles move along independent trajectories without collisions. The single-particle phase space density $f(\vec{x}, \vec{u}, t)$ is conserved along individual orbits:
$$\frac{df}{dt} = \frac{\partial f}{\partial t} + \vec{u} \cdot \nabla_{\vec{x}} f + \frac{\vec{F}}{m} \cdot \nabla_{\vec{u}} f = 0$$

This is the **collisionless Boltzmann equation** (known in plasma physics as the **Vlasov equation** when $\vec{F}$ is the self-consistent Lorentz force).

When collisions occur, particles undergo abrupt changes in momentum on microscopic interaction times $\tau_{coll} \sim 10^{-12}\text{ s}$, which are much shorter than macroscopic timescales. The total time derivative of $f$ no longer vanishes along free-flight trajectories. It equals the rate of change caused by collisions:
$$\frac{\partial f}{\partial t} + \vec{u} \cdot \nabla_{\vec{x}} f + \frac{\vec{F}}{m} \cdot \nabla_{\vec{u}} f = C(f)$$

---

## 2. The Boltzmann Collision Operator for Binary Collisions

### 2.1 Assumptions and Kinematics of Binary Collisions

To derive an explicit expression for $C(f)$ for a neutral gas, Ludwig Boltzmann adopted three key physical assumptions:
1. **Dilute Gas Approximation**: The average inter-particle spacing $d \sim n^{-1/3}$ is much larger than the effective molecular interaction range $r_0$ ($n r_0^3 \ll 1$). Consequently, collisions are strictly binary (two-body events); three-body collisions are neglected.
2. **Short-Range Local Collisions**: The interaction range $r_0$ and collision duration $\tau_{coll}$ are negligibly small compared to macroscopic spatial gradients $L$ and dynamical timescales $\tau$ ($r_0 \ll L$, $\tau_{coll} \ll \tau$). Both colliding particles are evaluated at the same position $\vec{x}$ and time $t$.
3. **Molecular Chaos (Stoßzahlansatz)**: Prior to colliding, two particles are statistically uncorrelated. The joint two-particle probability distribution factorizes into the product of single-particle distributions:
$$f_2(\vec{x}, \vec{u}, \vec{x}, \vec{u}_1, t) = f(\vec{x}, \vec{u}, t) f(\vec{x}, \vec{u}_1, t)$$

Consider an elastic collision between a particle of velocity $\vec{u}$ (test particle) and a target particle of velocity $\vec{u}_1$:
$$\vec{u} + \vec{u}_1 \longrightarrow \vec{u}' + \vec{u}_1'$$

Conservation of linear momentum and kinetic energy for equal masses $m$:
$$\vec{u} + \vec{u}_1 = \vec{u}' + \vec{u}_1'$$
$$u^2 + u_1^2 = (u')^2 + (u_1')^2$$

Defining the relative velocities:
$$\vec{g} = \vec{u} - \vec{u}_1, \quad \vec{g}' = \vec{u}' - \vec{u}_1'$$

Conservation of energy implies $\lvert\vec{g}\rvert = \lvert\vec{g}'\rvert = g$. The collision merely rotates the relative velocity vector by a deflection angle $\theta$ into a solid angle element $d\Omega = \sin\theta \, d\theta \, d\phi$.

### 2.2 Derivation of Gain and Loss Terms

The collision operator represents the net rate of change of particles in the phase space volume element $d^3x \, d^3u$ around $(\vec{x}, \vec{u})$:
$$C(f) = \left( \frac{\partial f}{\partial t} \right)_{coll} = \Gamma_{gain} - \Gamma_{loss}$$

**The Loss Term ($\Gamma_{loss}$)**:
A particle with velocity $\vec{u}$ is scattered out of the state when it collides with another particle of velocity $\vec{u}_1$ within a relative velocity cylinder. In a time interval $dt$, the volume of the collision cylinder with impact parameter $b$ and azimuth $\phi$ is:
$$dV_{coll} = g \, dt \, b \, db \, d\phi = g \, dt \, \sigma(g, \Omega) \, d\Omega$$
where $\sigma(g, \Omega)$ is the differential scattering cross section.

The number of collisions between particles in $d^3u$ and target particles in $d^3u_1$ per unit volume in time $dt$ is given by the product of their uncorrelated densities:
$$dN_{loss} = f(\vec{x}, \vec{u}, t) \, d^3u \cdot f(\vec{x}, \vec{u}_1, t) \, d^3u_1 \cdot g \, \sigma(g, \Omega) \, d\Omega \, dt$$

Dividing by $d^3u \, dt$ and integrating over all target velocities $\vec{u}_1$ and all scattering angles $\Omega$:
$$\Gamma_{loss} = \int d^3u_1 \int d\Omega \, g \, \sigma(g, \Omega) f(\vec{x}, \vec{u}, t) f(\vec{x}, \vec{u}_1, t)$$

**The Gain Term ($\Gamma_{gain}$)**:
Particles enter the velocity state $\vec{u}$ through the inverse collision:
$$\vec{u}' + \vec{u}_1' \longrightarrow \vec{u} + \vec{u}_1$$

By time-reversal invariance and spatial parity of the microscopic Hamiltonian:
$$\sigma(g', \Omega') = \sigma(g, \Omega)$$

Furthermore, the Jacobian of the velocity transformation from pre-collisional to post-collisional velocities is unity:
$$d^3u' \, d^3u_1' = d^3u \, d^3u_1$$

Invoking molecular chaos for the pre-collisional velocities of the inverse process:
$$dN_{gain} = f(\vec{x}, \vec{u}', t) f(\vec{x}, \vec{u}_1', t) \, d^3u' \, d^3u_1' \cdot g \, \sigma(g, \Omega) \, d\Omega \, dt$$

Integrating over $\vec{u}_1$ and $\Omega$:
$$\Gamma_{gain} = \int d^3u_1 \int d\Omega \, g \, \sigma(g, \Omega) f(\vec{x}, \vec{u}', t) f(\vec{x}, \vec{u}_1', t)$$

Combining the gain and loss terms yields the **Boltzmann collision integral**:
$$C(f) = \int d^3u_1 \int d\Omega \, \sigma(g, \Omega) \lvert \vec{u} - \vec{u}_1\rvert \left[ f(\vec{x}, \vec{u}', t) f(\vec{x}, \vec{u}_1', t) - f(\vec{x}, \vec{u}, t) f(\vec{x}, \vec{u}_1, t) \right]$$

### 2.3 The Boltzmann H-Theorem and Maxwellian Equilibrium

Define the Boltzmann $H$-functional:
$$H(t) = \int d^3x \int d^3u \, f(\vec{x}, \vec{u}, t) \ln f(\vec{x}, \vec{u}, t)$$

Taking the time derivative under spatially homogeneous conditions ($\nabla_{\vec{x}} f = 0, \vec{F} = 0$):
$$\frac{dH}{dt} = \int d^3u \, \frac{\partial f}{\partial t} (\ln f + 1) = \int d^3u \, C(f) \ln f$$

Using the symmetry properties under exchange of dummy variables $(\vec{u} \leftrightarrow \vec{u}_1)$ and forward-backward collision pairs $(\vec{u}, \vec{u}_1 \leftrightarrow \vec{u}', \vec{u}_1')$:
$$\frac{dH}{dt} = -\frac{1}{4} \int d^3u \int d^3u_1 \int d\Omega \, g \, \sigma \left( f' f_1' - f f_1 \right) \ln\left( \frac{f' f_1'}{f f_1} \right)$$

Because the algebraic inequality $(x - y)\ln(x/y) \ge 0$ holds for all positive real numbers $x, y$:
$$\frac{dH}{dt} \le 0$$

This is the **Boltzmann H-theorem**. The quantity $-k_B H$ corresponds to the thermodynamic entropy of the gas. Entropy monotonically increases until reaching kinetic equilibrium, which occurs if and only if:
$$f' f_1' = f f_1 \implies \ln f' + \ln f_1' = \ln f + \ln f_1$$

This requires $\ln f$ to be a linear combination of the collision invariants (mass, momentum, and energy):
$$\ln f = A + \vec{B} \cdot \vec{u} + C u^2$$

Demanding normalization to the number density $n(\vec{x}, t)$, mean flow velocity $\vec{v}(\vec{x}, t)$, and temperature $T(\vec{x}, t)$, the equilibrium distribution is uniquely the **local Maxwellian distribution**:
$$f_0(\vec{x}, \vec{u}, t) = n \left( \frac{m}{2\pi k_B T} \right)^{3/2} \exp\left( -\frac{m (\vec{u} - \vec{v})^2}{2 k_B T} \right)$$

---

## 3. Moment Derivations of the Hydrodynamic Equations

### 3.1 The General Moment Transport Equation

Macroscopic fluid observables are moments of the distribution function over velocity space. Let $\chi(\vec{u})$ be any arbitrary velocity-dependent physical quantity. Its average value is:
$$\langle \chi \rangle = \frac{1}{n} \int d^3u \, \chi(\vec{u}) f(\vec{x}, \vec{u}, t)$$
where the particle number density is $n(\vec{x}, t) = \int d^3u \, f(\vec{x}, \vec{u}, t)$, and mass density is $\rho = m n$.

Multiplying the collisional Boltzmann equation by $\chi(\vec{u})$ and integrating over all velocities:
$$\int d^3u \, \chi \frac{\partial f}{\partial t} + \int d^3u \, \chi \, u_j \frac{\partial f}{\partial x_j} + \int d^3u \, \chi \frac{F_j}{m} \frac{\partial f}{\partial u_j} = \int d^3u \, \chi C(f)$$

Integrating by parts and noting that $f \to 0$ exponentially as $\lvert \vec{u}\rvert \to \infty$:
1. Temporal term:
$$\int d^3u \, \chi \frac{\partial f}{\partial t} = \frac{\partial}{\partial t} (n \langle \chi \rangle)$$
2. Spatial gradient term:
$$\int d^3u \, \chi u_j \frac{\partial f}{\partial x_j} = \frac{\partial}{\partial x_j} (n \langle \chi u_j \rangle)$$
3. Force term (assuming $\vec{F}$ is velocity-independent, e.g., gravity or electrostatic force):
$$\int d^3u \, \chi \frac{F_j}{m} \frac{\partial f}{\partial u_j} = -\frac{F_j}{m} \int d^3u \, f \frac{\partial \chi}{\partial u_j} = -\frac{n F_j}{m} \left\langle \frac{\partial \chi}{\partial u_j} \right\rangle$$

4. Collision term:
If $\chi(\vec{u})$ is a **collisional invariant** (conserved in binary collisions):
$$\chi(\vec{u}) + \chi(\vec{u}_1) = \chi(\vec{u}') + \chi(\vec{u}_1')$$
then the collision integral vanishes identically:
$$\int d^3u \, \chi(\vec{u}) C(f) = 0$$

The three fundamental collisional invariants are:
- Mass conservation: $\chi = m$
- Momentum conservation: $\chi = m u_i$ ($i = 1, 2, 3$)
- Kinetic energy conservation: $\chi = \frac{1}{2} m u^2$

We decompose particle velocity $\vec{u}$ into the macroscopic mean flow velocity $\vec{v}(\vec{x}, t) = \langle \vec{u} \rangle$ and the thermal (random) fluctuation velocity $\vec{w}$:
$$\vec{u} = \vec{v}(\vec{x}, t) + \vec{w}, \quad \langle \vec{w} \rangle = 0$$

### 3.2 Zeroth Moment: The Continuity Equation

Setting $\chi = m$:
$$\frac{\partial}{\partial t} (n m) + \frac{\partial}{\partial x_j} (n m \langle u_j \rangle) - 0 = 0$$

Because $\rho = n m$ and $\langle u_j \rangle = v_j$:
$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{v}) = 0$$

This expresses the exact macroscopic **conservation of mass**. Using the convective derivative $\frac{d}{dt} = \frac{\partial}{\partial t} + \vec{v} \cdot \nabla$:
$$\frac{d\rho}{dt} + \rho \nabla \cdot \vec{v} = 0$$

### 3.3 First Moment: The Momentum Equation

Setting $\chi = m u_i$:
$$\frac{\partial}{\partial t} (\rho \langle u_i \rangle) + \frac{\partial}{\partial x_j} (\rho \langle u_i u_j \rangle) - \rho \frac{F_j}{m} \left\langle \frac{\partial (m u_i)}{\partial u_j} \right\rangle = 0$$

Since $\frac{\partial u_i}{\partial u_j} = \delta_{ij}$:
$$\frac{\partial (\rho v_i)}{\partial t} + \frac{\partial}{\partial x_j} (\rho \langle (v_i + w_i)(v_j + w_j) \rangle) = \rho \frac{F_i}{m}$$

Expanding the dyadic average:
$$\langle (v_i + w_i)(v_j + w_j) \rangle = v_i v_j + v_i \langle w_j \rangle + v_j \langle w_i \rangle + \langle w_i w_j \rangle = v_i v_j + \langle w_i w_j \rangle$$

Define the **pressure tensor** (kinetic stress tensor):
$$P_{ij} \equiv \rho \langle w_i w_j \rangle = m \int d^3u \, (u_i - v_i)(u_j - v_j) f$$

The momentum transport equation becomes:
$$\frac{\partial (\rho v_i)}{\partial t} + \frac{\partial}{\partial x_j} (\rho v_i v_j) + \frac{\partial P_{ij}}{\partial x_j} = n F_i$$

Applying the product rule to the left side:
$$v_i \left[ \frac{\partial \rho}{\partial t} + \frac{\partial (\rho v_j)}{\partial x_j} \right] + \rho \left[ \frac{\partial v_i}{\partial t} + v_j \frac{\partial v_i}{\partial x_j} \right] + \frac{\partial P_{ij}}{\partial x_j} = n F_i$$

The term in the first bracket is zero by the continuity equation. Thus, we obtain the **macroscopic momentum equation**:
$$\rho \left( \frac{\partial v_i}{\partial t} + v_j \frac{\partial v_i}{\partial x_j} \right) = n F_i - \frac{\partial P_{ij}}{\partial x_j}$$

In vector notation:
$$\rho \frac{d\vec{v}}{dt} = \rho \vec{g} - \nabla \cdot \mathbf{P}$$

---

## 4. The Closure Problem and Chapman-Enskog Approximations

### 4.1 The Nature of the Closure Problem

When deriving fluid equations from kinetic theory, each equation for the $n$-th velocity moment contains a term involving the $(n+1)$-th moment:
- The continuity equation (moment 0) requires the mean flow velocity $\vec{v}$ (moment 1).
- The momentum equation (moment 1) requires the pressure tensor $P_{ij}$ (moment 2).
- The thermal energy equation (moment 2) requires the heat flux vector $q_i = \frac{1}{2} \rho \langle w^2 w_i \rangle$ (moment 3).
- The equation for $q_i$ requires the fourth moment, and so on ad infinitum.

This infinite hierarchy cannot be solved without a **closure relation** expressing higher moments in terms of lower moments. The closure depends on the distribution function $f(\vec{x}, \vec{u}, t)$, which is governed by the ratio of the mean free path $\lambda_{mfp} = 1/(n \sigma)$ to the macroscopic gradient scale $L$:
$$Kn = \frac{\lambda_{mfp}}{L} \quad (\text{Knudsen number})$$

### 4.2 Zeroth-Order Approximation (Ideal Fluid / Euler Equations)

In the collision-dominated limit ($Kn \to 0$), inter-particle collisions are sufficiently frequent to maintain the distribution function in local thermodynamic equilibrium. Thus, $f$ is approximated by the local Maxwellian:
$$f \approx f_0 = n \left( \frac{m}{2\pi k_B T} \right)^{3/2} \exp\left( -\frac{m w^2}{2 k_B T} \right)$$

Evaluating the pressure tensor under $f_0$:
$$P_{ij}^{(0)} = m \int d^3w \, w_i w_j f_0$$

Because $f_0$ is spherically symmetric in $\vec{w}$-space:
$$\langle w_i w_j \rangle_0 = \frac{1}{3} \langle w^2 \rangle_0 \delta_{ij}$$
Using the equipartition theorem, $\frac{1}{2} m \langle w^2 \rangle_0 = \frac{3}{2} k_B T$, so:
$$P_{ij}^{(0)} = n k_B T \delta_{ij} \equiv p \delta_{ij}$$
where $p = n k_B T = \rho k_B T / m$ is the scalar ideal gas pressure. Off-diagonal elements vanish identically (no shear stress, no viscosity).

Evaluating the heat flux vector under $f_0$:
$$q_i^{(0)} = \frac{1}{2} m \int d^3w \, w^2 w_i f_0 = 0$$
The integrand is an odd function of $w_i$, so the integral vanishes identically.

Substituting $P_{ij} = p \delta_{ij}$ into the momentum equation yields the **Euler equation**:
$$\rho \left( \frac{\partial \vec{v}}{\partial t} + (\vec{v} \cdot \nabla)\vec{v} \right) = -\nabla p + \rho \vec{g}$$

### 4.3 First-Order Approximation (Chapman-Enskog Expansion / Navier-Stokes)

When spatial gradients are non-zero ($Kn \ll 1$ but finite), the distribution function departs slightly from the local Maxwellian:
$$f(\vec{x}, \vec{u}, t) = f_0(\vec{x}, \vec{u}, t) + g(\vec{x}, \vec{u}, t), \quad \lvert g\rvert \ll f_0$$

Using the BGK (Bhatnagar-Gross-Krook) relaxation collision model $C(f) \approx -\frac{f - f_0}{\tau_{coll}} = -\frac{g}{\tau_{coll}}$:
$$g \approx -\tau_{coll} \left( \frac{\partial f_0}{\partial t} + \vec{u} \cdot \nabla_{\vec{x}} f_0 + \frac{\vec{F}}{m} \cdot \nabla_{\vec{u}} f_0 \right)$$

Evaluating the moments using the perturbed distribution $f_0 + g$:
1. **Viscous Stress Tensor**:
$$P_{ij} = p \delta_{ij} - \sigma_{ij}$$
where the viscous stress tensor $\sigma_{ij}$ is linear in velocity gradients:
$$\sigma_{ij} = \mu \left( \frac{\partial v_i}{\partial x_j} + \frac{\partial v_j}{\partial x_i} - \frac{2}{3} \delta_{ij} \nabla \cdot \vec{v} \right) + \zeta \delta_{ij} \nabla \cdot \vec{v}$$
Here, $\mu \sim n k_B T \tau_{coll} \sim \rho v_{th} \lambda_{mfp}$ is the dynamic shear viscosity, and $\zeta$ is the bulk (volume) viscosity (which vanishes for monatomic gases).

2. **Conductive Heat Flux**:
$$\vec{q} = -\kappa \nabla T$$
where $\kappa \sim \frac{n k_B^2 T \tau_{coll}}{m}$ is the thermal conductivity (Fourier's law).

Substituting $P_{ij} = p \delta_{ij} - \sigma_{ij}$ into the momentum equation produces the **Navier-Stokes equation**:
$$\rho \left( \frac{\partial \vec{v}}{\partial t} + (\vec{v} \cdot \nabla)\vec{v} \right) = -\nabla p + \mu \nabla^2 \vec{v} + \left( \zeta + \frac{1}{3}\mu \right) \nabla (\nabla \cdot \vec{v}) + \rho \vec{g}$$

For an incompressible fluid ($\nabla \cdot \vec{v} = 0$), this simplifies to:
$$\frac{\partial \vec{v}}{\partial t} + (\vec{v} \cdot \nabla)\vec{v} = -\frac{1}{\rho}\nabla p + \nu \nabla^2 \vec{v} + \vec{g}$$
where $\nu = \mu / \rho$ is the kinematic viscosity.

---

## 5. Macroscopic Continuum Approach to the Momentum Equation

### 5.1 Continuum Hypothesis and Control Volume

In the macroscopic continuum approach, matter is treated as continuously distributed throughout space, characterized by smooth local fields: density $\rho(\vec{x}, t)$, velocity $\vec{v}(\vec{x}, t)$, and stress tensor $\mathbf{\Sigma}(\vec{x}, t)$.

Consider an arbitrary, fixed control volume $V$ bounded by a closed surface $S$ with outward unit normal vector $\hat{n}$. The total momentum contained inside $V$ is:
$$\vec{P}_{tot} = \int_V \rho \vec{v} \, d^3x$$

The rate of change of momentum within $V$ is driven by three physical mechanisms:
1. **Advective momentum flux** across the boundary surface $S$:
$$\Phi_{adv} = -\oint_S (\rho \vec{v}) (\vec{v} \cdot \hat{n}) \, dS$$
2. **Body forces** acting throughout the volume (e.g., gravity $\vec{g}$):
$$\vec{F}_{body} = \int_V \rho \vec{g} \, d^3x$$
3. **Surface forces** (tractions) exerted by surrounding fluid across $S$:
$$\vec{F}_{surf} = \oint_S \vec{T}(\hat{n}) \, dS$$

### 5.2 Cauchy's Stress Theorem

According to Cauchy's stress theorem, the surface force vector $\vec{T}(\hat{n})$ acting on a surface with orientation $\hat{n}$ is a linear function of $\hat{n}$, represented by the second-rank **Cauchy stress tensor** $\Sigma_{ij}$:
$$T_i = \Sigma_{ji} n_j$$

Conservation of angular momentum of an infinitesimal fluid element requires that the stress tensor is symmetric:
$$\Sigma_{ij} = \Sigma_{ji}$$

Applying the Gauss divergence theorem to the surface force:
$$\oint_S \Sigma_{ji} n_j \, dS = \int_V \frac{\partial \Sigma_{ji}}{\partial x_j} \, d^3x$$

Similarly, for the advective momentum flux:
$$\oint_S \rho v_i v_j n_j \, dS = \int_V \frac{\partial (\rho v_i v_j)}{\partial x_j} \, d^3x$$

### 5.3 Integral to Differential Balance

Equating the time rate of change of momentum to the sum of external forces and momentum flux:
$$\frac{d}{dt} \int_V \rho v_i \, d^3x = \int_V \frac{\partial (\rho v_i)}{\partial t} \, d^3x = -\int_V \frac{\partial (\rho v_i v_j)}{\partial x_j} \, d^3x + \int_V \frac{\partial \Sigma_{ji}}{\partial x_j} \, d^3x + \int_V \rho g_i \, d^3x$$

Because the volume $V$ is completely arbitrary, the integrand must vanish everywhere:
$$\frac{\partial (\rho v_i)}{\partial t} + \frac{\partial (\rho v_i v_j)}{\partial x_j} = \frac{\partial \Sigma_{ji}}{\partial x_j} + \rho g_i$$

Using the continuity equation $\frac{\partial \rho}{\partial t} + \frac{\partial (\rho v_j)}{\partial x_j} = 0$, the left-hand side reduces to:
$$\rho \left( \frac{\partial v_i}{\partial t} + v_j \frac{\partial v_i}{\partial x_j} \right) = \frac{\partial \Sigma_{ji}}{\partial x_j} + \rho g_i$$

Decomposing the stress tensor into an isotropic thermodynamic pressure $p$ and a deviatoric viscous stress tensor $\sigma_{ij}$:
$$\Sigma_{ij} = -p \delta_{ij} + \sigma_{ij}$$

This yields the macroscopic momentum equation:
$$\rho \frac{d v_i}{dt} = -\frac{\partial p}{\partial x_i} + \frac{\partial \sigma_{ji}}{\partial x_j} + \rho g_i$$

For a Newtonian, isotropic fluid, $\sigma_{ij}$ is proportional to the symmetric rate-of-strain tensor, recovering the Navier-Stokes equations without reference to microscopic velocity distributions.



## Linked References

- [[BBGKY hierarchy and Boltzmann collision operator]]
- [[Boltzmann H-theorem and Maxwellian distribution]]
- [[Chapman-Enskog expansion and Navier-Stokes derivation]]
- [[Liouville theorem and phase space incompressibility]]
- [[Fluid_and_Plasma_Dynamics_MOC]]


