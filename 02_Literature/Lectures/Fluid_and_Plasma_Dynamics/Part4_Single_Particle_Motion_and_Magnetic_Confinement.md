---
layout: "default"
title: "Part4_Single_Particle_Motion_and_Magnetic_Confinement"
---
{% raw %}
# Part 4 - Single Particle Motion and Magnetic Confinement

*Course: Fluid and Plasma Dynamics, Prof. Maurizio Giacomin*  
*Index: [Fluid_and_Plasma_Dynamics_MOC](../../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html) | Exam Guide: [Giacomin_Oral_Exam_Questions_Complete_Guide](./Giacomin_Oral_Exam_Questions_Complete_Guide.html)*  
*Relevant Exam Questions: 12, 13, 14*  

---

## 1. Charged Particle Dynamics in Magnetic Fields and Guiding-Center Drifts

### 1.1 Cyclotron Gyration in a Uniform Magnetic Field

Consider a single particle of mass $m$ and electric charge $q$ moving in a static, uniform magnetic field $\vec{B} = B \hat{z}$ in the absence of electric fields ($\vec{E} = 0$). The equation of motion is governed by the Lorentz force:
$$m \frac{d\vec{v}}{dt} = q (\vec{v} \times \vec{B})$$

Decomposing velocity into components parallel and perpendicular to the magnetic field:
$$\vec{v} = v_\parallel \hat{z} + \vec{v}_\perp$$

The components of the equation of motion are:
$$\frac{dv_\parallel}{dt} = 0 \implies v_\parallel = \text{constant}$$
$$\frac{d v_x}{dt} = \frac{q B}{m} v_y = \omega_c v_y$$
$$\frac{d v_y}{dt} = -\frac{q B}{m} v_x = -\omega_c v_x$$
where $\omega_c = \frac{q B}{m}$ is the algebraic cyclotron frequency (gyrofrequency). Its positive magnitude is defined as:
$$\Omega_c = \frac{|q| B}{m}$$

Differentiating with respect to time decouples the perpendicular velocities into harmonic oscillator equations:
$$\frac{d^2 v_x}{dt^2} + \Omega_c^2 v_x = 0, \quad \frac{d^2 v_y}{dt^2} + \Omega_c^2 v_y = 0$$

The general solution describes circular gyration in the $(x, y)$ plane with radius $\rho_L$ (the **Larmor radius** or gyroradius):
$$\rho_L = \frac{v_\perp}{\Omega_c} = \frac{m v_\perp}{|q| B}$$

The full trajectory is a helix winding around a magnetic field line:
$$\vec{r}(t) = \vec{R}(t) + \vec{\rho}_L(t)$$
where $\vec{R}(t) = (X_0, Y_0, Z_0 + v_\parallel t)$ is the position of the **guiding center**, and $\vec{\rho}_L(t)$ is the rapidly rotating gyration vector.

```
       z (Magnetic Field B)
       ^
       |           ___
       |       .-'     '-.
       |     .'     *     '.   Guiding Center R(t)
       |    /    (center)   \
       |   |                 |
       |    \      o-------->| Larmor Radius rho_L
       |     '.    Particle .'
       |       '-._____.-'
       +-----------------------> x, y
```

### 1.2 General Guiding-Center Drift Under an External Force

When an additional slow, smooth force $\vec{F}$ acts on the particle, the guiding center drifts across magnetic field lines. Averaging the equation of motion over a gyration period $\tau_c = 2\pi/\Omega_c$:
$$\langle m \dot{\vec{v}} \rangle = \vec{F} + q (\vec{v}_D \times \vec{B}) = 0$$
where $\vec{v}_D$ is the steady perpendicular drift velocity of the guiding center.

Taking the cross product of this balance with $\vec{B}$:
$$\vec{B} \times (\vec{v}_D \times \vec{B}) = -\frac{1}{q} \vec{B} \times \vec{F}$$

Using the vector BAC-CAB expansion identity $\vec{B} \times (\vec{v}_D \times \vec{B}) = B^2 \vec{v}_D - (\vec{B} \cdot \vec{v}_D)\vec{B}$:
$$\vec{v}_D = \frac{\vec{F} \times \vec{B}}{q B^2}$$

### 1.3 The $E \times B$ Drift

When an external electric field $\vec{E}$ is present, the force is $\vec{F} = q \vec{E}$. Substituting into the general drift formula:
$$\vec{v}_E = \frac{(q \vec{E}) \times \vec{B}}{q B^2} = \frac{\vec{E} \times \vec{B}}{B^2}$$

**Physical properties**:
1. The $E \times B$ drift is strictly perpendicular to both $\vec{E}$ and $\vec{B}$.
2. The charge $q$ cancels out: **both electrons and positively charged ions drift in the exact same direction at the exact same velocity**.
3. Because both species drift identically, the $E \times B$ drift carries no net electrical current ($\vec{j}_E = \sum_s q_s n_s \vec{v}_E = 0$). It represents bulk plasma convection.

### 1.4 The Gradient Drift ($\nabla B$ Drift)

Consider a magnetic field with a spatial gradient perpendicular to the field lines: $\vec{B} = B(y) \hat{z}$ with $\nabla B = \frac{dB}{dy} \hat{y}$.
As the particle gyrates, the local magnetic field is stronger at the top of its orbit ($y > 0$) than at the bottom ($y < 0$).
Because the local Larmor radius is inversely proportional to $B$ ($\rho_L(y) = \frac{m v_\perp}{|q| B(y)}$), the orbit has a smaller radius of curvature in the high-field region and a larger radius in the low-field region. This difference prevents the orbit from closing into a perfect circle, causing the particle to execute a cycloidal drift along the $x$-direction.

To derive the drift velocity analytically, calculate the net magnetic force averaged over one gyration. The instantaneous Lorentz force is:
$$\vec{F} = q (\vec{v} \times \vec{B}(\vec{r}))$$

Taylor expanding the magnetic field around the guiding center $\vec{R}$:
$$\vec{B}(\vec{r}) = \vec{B}(\vec{R}) + (\vec{\rho}_L \cdot \nabla)\vec{B} + \dots$$

The first-order gyro-averaged force is:
$$\langle \vec{F} \rangle = q \langle \vec{v}_\perp \times (\vec{\rho}_L \cdot \nabla)\vec{B} \rangle$$

Using $\vec{\rho}_L = \frac{\hat{b} \times \vec{v}_\perp}{\Omega_c}$ and averaging over the gyro-angle $\theta \in [0, 2\pi]$ (where $\langle v_x^2 \rangle = \langle v_y^2 \rangle = \frac{1}{2} v_\perp^2$):
$$\langle \vec{F} \rangle = -\frac{m v_\perp^2}{2 B} \nabla B \equiv -\mu \nabla B$$
where $\mu = \frac{m v_\perp^2}{2 B}$ is the **magnetic moment**.

Substituting $\vec{F}_{\nabla B} = -\mu \nabla B$ into the general drift formula:
$$\vec{v}_{\nabla B} = \frac{-\mu \nabla B \times \vec{B}}{q B^2} = \frac{\mu}{q B^2} (\vec{B} \times \nabla B) = \frac{m v_\perp^2}{2 q B^3} (\vec{B} \times \nabla B)$$

**Key property**: The $\nabla B$ drift depends on the sign of $q$. Electrons and ions drift in opposite directions, driving a net transverse diamagnetic current.

### 1.5 The Curvature Drift

Now consider magnetic field lines that curve with a local radius of curvature $\vec{R}_c$, defined by:
$$\frac{\vec{R}_c}{R_c^2} = -(\hat{b} \cdot \nabla)\hat{b}$$
where $\hat{b} = \vec{B}/B$ is the unit vector tangent to the field line.

A particle streaming along the curved field line with parallel velocity $v_\parallel$ experiences a centrifugal force in its moving frame directed away from the center of curvature:
$$\vec{F}_c = \frac{m v_\parallel^2}{R_c^2} \vec{R}_c = -m v_\parallel^2 (\hat{b} \cdot \nabla)\hat{b}$$

Applying the drift formula:
$$\vec{v}_c = \frac{\vec{F}_c \times \vec{B}}{q B^2} = \frac{m v_\parallel^2}{q B^2} \frac{\vec{R}_c \times \vec{B}}{R_c^2}$$

In a current-free vacuum magnetic field ($\nabla \times \vec{B} = 0$), vector calculus shows that:
$$\frac{\vec{R}_c}{R_c^2} = \frac{\nabla_\perp B}{B}$$

Therefore, in vacuum magnetic geometries (such as tokamaks and stellarators), the curvature drift and gradient drift point in the same direction and combine into the **total magnetic drift**:
$$\vec{v}_{mag} = \vec{v}_{\nabla B} + \vec{v}_c = \frac{m}{q B^3}\left( \frac{1}{2} v_\perp^2 + v_\parallel^2 \right) (\vec{B} \times \nabla B)$$

---

## 2. The Magnetic Mirror and Reflection Condition

### 2.1 Parallel Magnetic Force in Inhomogeneous Fields

Consider an axisymmetric magnetic field converging along the $z$-axis (a magnetic mirror). In cylindrical coordinates $(r, \theta, z)$, $\vec{B} = B_r(r, z)\hat{r} + B_z(r, z)\hat{z}$.

Because magnetic monopoles do not exist, Gauss's law requires $\nabla \cdot \vec{B} = 0$:
$$\frac{1}{r}\frac{\partial}{\partial r}(r B_r) + \frac{\partial B_z}{\partial z} = 0$$

Near the axis of symmetry ($r \ll L_z$), assume $\frac{\partial B_z}{\partial z}$ is approximately independent of $r$. Multiplying by $r$ and integrating from $0$ to $r$:
$$r B_r = -\int_0^r r' \frac{\partial B_z}{\partial z} dr' \approx -\frac{\partial B_z}{\partial z} \frac{r^2}{2} \implies B_r(r, z) \approx -\frac{r}{2}\frac{\partial B_z}{\partial z}$$

The parallel component of the Lorentz force along the $z$-axis is:
$$F_z = m \frac{dv_\parallel}{dt} = q (\vec{v} \times \vec{B})_z = q (v_r B_\theta - v_\theta B_r) = -q v_\theta B_r$$
since $B_\theta = 0$.

For a positively charged particle, gyration around $\hat{z}$ requires $v_\theta = -v_\perp$. Evaluating at the particle's gyroradius $r = \rho_L = \frac{m v_\perp}{q B}$:
$$F_z = -q (-v_\perp) \left( -\frac{\rho_L}{2}\frac{\partial B_z}{\partial z} \right) = -\frac{q v_\perp}{2} \left( \frac{m v_\perp}{q B_z} \right) \frac{\partial B_z}{\partial z} = -\frac{m v_\perp^2}{2 B_z} \frac{\partial B_z}{\partial z}$$

Defining the **magnetic moment** $\mu$:
$$\mu \equiv \frac{m v_\perp^2}{2 B}$$
the parallel force is:
$$F_\parallel = -\mu \nabla_\parallel B$$

The negative sign demonstrates that the magnetic force always repels charged particles away from regions of stronger magnetic field, regardless of the sign of electric charge $q$.

```
Magnetic Field Lines Converging
\                                     /
 \                                   /
  \                                 /
   \===> F_parallel = - mu grad(B) /
    |                             |
    |      * Particle bounces     |
    |                             |
   /                               \
  /                                 \
 /                                   \
/                                     \
Low B (Midplane)               High B (Mirror Throat)
```

### 2.2 Proof of Invariance of the Magnetic Moment $\mu$

The total kinetic energy of the particle in a static magnetic field is strictly conserved because the Lorentz force does no work:
$$E = \frac{1}{2} m v_\parallel^2 + \frac{1}{2} m v_\perp^2 = \frac{1}{2} m v_\parallel^2 + \mu B = \text{constant}$$

Differentiating with respect to time:
$$\frac{dE}{dt} = m v_\parallel \frac{dv_\parallel}{dt} + \frac{d}{dt}(\mu B) = m v_\parallel \frac{dv_\parallel}{dt} + B \frac{d\mu}{dt} + \mu \frac{dB}{dt} = 0$$

Along the particle trajectory, the rate of change of magnetic field experienced by the guiding center is $\frac{dB}{dt} = v_\parallel \frac{\partial B}{\partial z}$.
Using the parallel equation of motion $m \frac{dv_\parallel}{dt} = -\mu \frac{\partial B}{\partial z}$:
$$-v_\parallel \mu \frac{\partial B}{\partial z} + B \frac{d\mu}{dt} + \mu v_\parallel \frac{\partial B}{\partial z} = 0$$

The first and third terms cancel identically, leaving:
$$B \frac{d\mu}{dt} = 0 \implies \frac{d\mu}{dt} = 0$$

The magnetic moment $\mu$ is an exact **adiabatic invariant** (the first adiabatic invariant) provided the magnetic field varies slowly compared to the cyclotron period ($\frac{1}{\Omega_c B} \frac{\partial B}{\partial t} \ll 1$ and $\frac{\rho_L}{B} |\nabla B| \ll 1$).

### 2.3 Derivation of the Reflection Condition and Loss Cone

Consider a magnetic mirror configuration with minimum field $B_{min}$ at the central midplane ($z = 0$) and maximum field $B_{max}$ at the throat ($z = \pm L$).

Let a particle be injected at the midplane with speed $v_0$ and pitch angle $\alpha_0$ (the angle between $\vec{v}$ and $\vec{B}$):
$$v_{\perp 0} = v_0 \sin\alpha_0, \quad v_{\parallel 0} = v_0 \cos\alpha_0$$

The conserved magnetic moment and energy are:
$$\mu = \frac{m v_0^2 \sin^2\alpha_0}{2 B_{min}}, \quad E = \frac{1}{2} m v_0^2$$

As the particle travels into the stronger field region ($B(z) > B_{min}$), conservation of $\mu$ forces $v_\perp^2(z) = \frac{2\mu B(z)}{m}$ to increase.
By energy conservation, the parallel velocity must decrease:
$$v_\parallel^2(z) = v_0^2 - v_\perp^2(z) = v_0^2 - \frac{2\mu B(z)}{m} = v_0^2 \left( 1 - \frac{B(z)}{B_{min}} \sin^2\alpha_0 \right)$$

Reflection occurs at a turning point $z_{reflect}$ where the parallel velocity reaches zero ($v_\parallel(z_{reflect}) = 0$):
$$1 - \frac{B(z_{reflect})}{B_{min}} \sin^2\alpha_0 = 0 \implies \sin^2\alpha_0 = \frac{B_{min}}{B(z_{reflect})}$$

For reflection to take place before the particle escapes through the throat, the turning point must occur where $B(z_{reflect}) \le B_{max}$.
Therefore, the condition for particle trapping and reflection is:
$$\sin^2\alpha_0 \ge \frac{B_{min}}{B_{max}} \equiv \frac{1}{R_m}$$
where $R_m = \frac{B_{max}}{B_{min}} > 1$ is the **mirror ratio**.

Particles with small pitch angles violating this criterion ($\sin\alpha_0 < 1/\sqrt{R_m}$) possess too much parallel momentum to be stopped by the magnetic gradient. They enter the **loss cone** and escape through the ends.
The loss cone half-angle is:
$$\alpha_{loss} = \arcsin\left( \frac{1}{\sqrt{R_m}} \right)$$

---

## 3. Trapped Particles in Tokamaks and Neoclassical Dynamics

### 3.1 Magnetic Field Topology of a Tokamak

A tokamak is an axisymmetric toroidal device designed for magnetic confinement fusion.
Let $R_0$ be the major radius (distance from torus symmetry axis to plasma center) and $a$ be the minor radius of the plasma column. In toroidal coordinates $(r, \theta, \phi)$:
- $r$ is the minor radial coordinate ($0 \le r \le a$).
- $\theta$ is the poloidal angle ($\theta = 0$ at outboard/low-field side, $\theta = \pi$ at inboard/high-field side).
- $\phi$ is the toroidal angle along the major circumference.

The distance of any point in the plasma from the major symmetry axis is:
$$R(r, \theta) = R_0 + r \cos\theta$$

Ampère's law in the vacuum surrounding external toroidal field coils dictates that the toroidal magnetic field scales inversely with $R$:
$$\oint \vec{B}_\phi \cdot d\vec{\ell} = 2\pi R B_\phi = \mu_0 I_{coils} \implies B_\phi(R) = B_0 \frac{R_0}{R}$$

Substituting $R = R_0(1 + \epsilon \cos\theta)$ where $\epsilon = r / R_0 \ll 1$ is the local inverse aspect ratio:
$$B(r, \theta) \approx B_\phi \approx \frac{B_0}{1 + \epsilon \cos\theta} \approx B_0 (1 - \epsilon \cos\theta)$$

The magnetic field strength is non-uniform on each magnetic flux surface:
- **Minimum magnetic field** occurs on the outboard equator ($\theta = 0$): $B_{min} = B_0 (1 - \epsilon)$.
- **Maximum magnetic field** occurs on the inboard equator ($\theta = \pi$): $B_{max} = B_0 (1 + \epsilon)$.

```
                      Z
                      ^      High-Field Side (Inboard)
                      |       B_max = B_0(1 + eps)
                  +---|---+       theta = pi
                 /    |    \          |
                |  *  |  *  |         v
                |     |     |      (====)
                 \    |    /       (====)
                  +---|---+           ^
                      |               |
                      |      Low-Field Side (Outboard)
                      |       B_min = B_0(1 - eps)
                      +------------> R (Major Radius)
                             theta = 0
```

### 3.2 Trapping Condition in Tokamaks

As a charged particle travels along a helical magnetic field line, it moves from the outboard side ($\theta = 0$) toward the inboard side ($\theta = \pi$), experiencing a magnetic mirror with effective mirror ratio:
$$R_m = \frac{B_{max}}{B_{min}} = \frac{1 + \epsilon}{1 - \epsilon} \approx (1 + \epsilon)(1 + \epsilon) \approx 1 + 2\epsilon$$

Applying the mirror reflection condition derived in Section 2.3 at the midplane ($\theta = 0$):
$$\sin^2\alpha_0 \ge \frac{1}{R_m} = \frac{1 - \epsilon}{1 + \epsilon} \approx 1 - 2\epsilon$$

Using the trigonometric identity $\sin^2\alpha_0 = 1 - \cos^2\alpha_0 = 1 - (v_{\parallel 0}/v_0)^2$:
$$1 - \frac{v_{\parallel 0}^2}{v_0^2} \ge 1 - 2\epsilon \implies \frac{v_{\parallel 0}^2}{v_0^2} \le 2\epsilon$$

Taking the square root:
$$\frac{|v_{\parallel 0}|}{v_0} \le \sqrt{2\epsilon} = \sqrt{\frac{2r}{R_0}}$$

This is the **trapping condition for a tokamak**:
- **Trapped particles**: Particles with $|v_{\parallel 0}| < \sqrt{2\epsilon} v_0$ reflect at intermediate poloidal angles $\theta_{turn} < \pi$ and bounce back and forth on the outboard side.
- **Passing (circulating) particles**: Particles with $|v_{\parallel 0}| > \sqrt{2\epsilon} v_0$ possess sufficient parallel kinetic energy to pass over the magnetic throat at $\theta = \pi$, circulating continuously around the torus.

### 3.3 Fraction of Trapped Particles

For a local Maxwellian plasma with isotropic velocity distribution, the fraction of trapped particles $f_{tr}$ is computed by integrating the solid angle over the trapped pitch-angle domain:
$$f_{tr} = \frac{1}{4\pi} \int_{\text{trapped}} d\Omega = \frac{1}{2} \int_{-\cos\alpha_c}^{+\cos\alpha_c} d(\cos\alpha) = \cos\alpha_c$$
where $\cos\alpha_c = \frac{v_{\parallel 0}}{v_0} = \sqrt{2\epsilon}$.

Therefore:
$$f_{tr} \approx \sqrt{2\epsilon} = \sqrt{\frac{2r}{R_0}}$$

In standard tokamaks ($R_0 \approx 3\text{ m}, a \approx 1\text{ m}$), at the plasma edge $\epsilon \approx 0.33$, so $f_{tr} \approx \sqrt{0.66} \approx 0.81$: over 80 percent of edge particles are trapped!

### 3.4 Banana Orbits and Neoclassical Transport

Trapped particles do not retrace a single field line. While bouncing between poloidal mirror points, they experience vertical $\nabla B$ and curvature drifts:
$$v_{Drift} \approx \frac{m(v_\parallel^2 + \frac{1}{2}v_\perp^2)}{q B_0 R_0} \hat{z}$$

This vertical drift shifts the guiding center across flux surfaces. When projected onto the poloidal plane $(R, Z)$, the trajectory forms a closed, banana-shaped envelope known as a **banana orbit**.

The characteristic radial width of the banana orbit is obtained by balancing radial drift displacement with the poloidal transit:
$$\Delta r_b \approx \frac{q_s}{\sqrt{\epsilon}} \rho_L$$
where $q_s = \frac{r B_\phi}{R_0 B_\theta}$ is the tokamak **safety factor**, and $\rho_L$ is the Larmor radius in the total magnetic field.
Since $q_s \sim 3$ and $\epsilon \sim 0.1 - 0.3$, the banana width $\Delta r_b$ is typically an order of magnitude larger than the classical gyroradius $\rho_L$.

The **bounce frequency** of trapped particles between turning points is:
$$\omega_b \approx \frac{\sqrt{\epsilon} v_{th}}{q_s R_0}$$

Collisions between trapped particles and passing particles produce radial random-walk steps of size $\Delta r_b$ (rather than $\rho_L$), giving rise to **neoclassical transport**, which significantly exceeds classical collisional transport and generates the self-sustaining **bootstrap current** essential for steady-state tokamak operation.
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Course_Overview_and_Syllabus.html" class="backlink-item">Course_Overview_and_Syllabus</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Giacomin_Oral_Exam_Questions_Complete_Guide.html" class="backlink-item">Giacomin_Oral_Exam_Questions_Complete_Guide</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Guiding%20center%20drifts%20and%20electric%20polarization%20drift.html" class="backlink-item">Guiding center drifts and electric polarization drift</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Magnetic%20mirror%20effect%20and%20adiabatic%20invariants.html" class="backlink-item">Magnetic mirror effect and adiabatic invariants</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Tokamak%20magnetic%20topology%20and%20neoclassical%20banana%20orbits.html" class="backlink-item">Tokamak magnetic topology and neoclassical banana orbits</a></li>
  </ul>
</div>
