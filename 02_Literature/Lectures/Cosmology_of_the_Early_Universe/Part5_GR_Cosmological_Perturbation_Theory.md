---
layout: "default"
title: "Part5_GR_Cosmological_Perturbation_Theory"
---
# Part 5 - Relativistic Cosmological Perturbation Theory

*Lectures 28 to 30 notes synthesis - Prof. Nicola Bartolo*  
*Cosmology of the Early Universe - Università degli Studi di Padova*  
*Index: [[Cosmology_of_the_Early_Universe_MOC]]*  

---

## The general perturbed metric and SVT decomposition

In General Relativity, cosmological perturbations describe small fluctuations of the spacetime geometry and matter fields around a homogeneous and isotropic FLRW background:
$$g_{\mu\nu}(\tau, \vec{x}) = g_{\mu\nu}^{(0)}(\tau) + \delta g_{\mu\nu}(\tau, \vec{x})$$
$$T_{\mu\nu}(\tau, \vec{x}) = T_{\mu\nu}^{(0)}(\tau) + \delta T_{\mu\nu}(\tau, \vec{x})$$

The most general linearly perturbed line element in conformal time $\tau$ has 10 degrees of freedom in $\delta g_{\mu\nu}$:
$$ds^2 = a^2(\tau)\left[ -(1 + 2\psi)d\tau^2 + 2 w_i d\tau dx^i + \left((1 - 2\phi)\delta_{ij} + 2 \chi_{ij}\right) dx^i dx^j \right]$$

According to the **Stewart-Walker theorem**, any symmetric tensor field in 3-space can be uniquely decomposed into components that transform as scalars, transverse vectors, and transverse-traceless tensors under spatial rotations:
* The 3-vector shift $w_i$ decomposes into a scalar potential $w$ and a divergence-free vector $w_i^\perp$:
  $$w_i = \partial_i w + w_i^\perp, \quad \partial^i w_i^\perp = 0$$
* The spatial metric shear $\chi_{ij}$ decomposes into a longitudinal scalar $\chi$, a transverse vector $v_i$, and a transverse-traceless tensor $h_{ij}$:
  $$\chi_{ij} = D_{ij}\chi + \partial_{(i} v_{j)} + \frac{1}{2} h_{ij}$$
  where $D_{ij} \equiv \partial_i\partial_j - \frac{1}{3}\delta_{ij}\nabla^2$, $\partial^i v_i = 0$, $\delta^{ij}h_{ij} = 0$, and $\partial^i h_{ij} = 0$.

Count of degrees of freedom:
* **Scalars (4)**: $\psi, \phi, w, \chi$. These couple directly to energy density and pressure perturbations and govern structure formation.
* **Vectors (4)**: $w_i^\perp, v_i$ (2 components each). In linear theory without topological defects, vector perturbations decay as $a^{-2}$ and are negligible.
* **Tensors (2)**: $h_{ij}$ (2 polarization states). These represent transverse-traceless gravitational waves.

Because the background spacetime is spatially isotropic, scalar, vector, and tensor modes **completely decouple at linear order** in Einstein's equations. They can be analyzed completely independently!

---

## The gauge problem and coordinate transformations

General Relativity is invariant under arbitrary diffeomorphisms (general coordinate transformations). Under an infinitesimal coordinate transformation:
$$x^\mu \to \tilde{x}^\mu = x^\mu + \xi^\mu(\tau, \vec{x})$$
with $\xi^0 = \alpha(\tau, \vec{x})$ and $\xi^i = \partial^i \beta + d^i$ ($\partial_i d^i = 0$), the metric transforms via the Lie derivative along $\xi$:
$$\delta \tilde{g}_{\mu\nu} = \delta g_{\mu\nu} - \mathcal{L}_\xi g_{\mu\nu}^{(0)}$$

This induces explicit transformation laws for the scalar perturbation potentials:
$$\tilde{\psi} = \psi - \mathcal{H}\alpha - \alpha'$$
$$\tilde{\phi} = \phi + \mathcal{H}\alpha + \frac{1}{3}\nabla^2\beta$$
$$\tilde{w} = w + \alpha - \beta'$$
$$\tilde{\chi} = \chi - \beta$$
where $\mathcal{H} \equiv a'/a = aH$ is the conformal Hubble parameter, and primes denote derivatives with respect to conformal time $\tau$.

For a background scalar quantity $Q_0(\tau)$ (such as energy density $\rho_0$ or field $\phi_0$):
$$\tilde{\delta Q} = \delta Q - \alpha Q_0'$$

This demonstrates the **gauge problem**: a perturbation $\delta Q$ can be created or eliminated simply by choosing non-uniform time slices. A fictitious perturbation in a completely homogeneous universe can be manufactured by a wrinkled coordinate grid!

---

## Gauge-invariant variables and the Bardeen potentials

To eliminate gauge artifacts, James Bardeen (1980) constructed combinations of metric perturbations that are strictly invariant under any linear coordinate shift:

### The Bardeen potentials
$$\Phi \equiv \phi + \mathcal{H}(\chi' - w) + \frac{1}{3}\nabla^2\chi$$
$$\Psi \equiv \psi + \mathcal{H}(\chi' - w) + (\chi' - w)'$$

Under $\xi^\mu \to \xi^\mu + \dots$, direct substitution proves:
$$\tilde{\Phi} = \Phi, \quad \tilde{\Psi} = \Psi$$
These potentials are physical and coordinate-independent.

### Standard gauge choices
* **Longitudinal (conformal Newtonian) gauge**: Set $\chi = 0$ and $w = 0$. In this gauge, the coordinate potentials coincide with the Bardeen potentials: $\psi = \Psi$, $\phi = \Phi$. The metric is diagonal:
  $$ds^2 = a^2(\tau)\left[ -(1 + 2\Psi)d\tau^2 + (1 - 2\Phi)\delta_{ij}dx^i dx^j \right]$$
* **Spatially flat gauge**: Set $\phi = 0$ and $\chi = 0$. Highly convenient for inflationary perturbation calculations.
* **Comoving gauge**: Set the scalar velocity perturbation to zero ($\delta u_\parallel = 0$).
* **Synchronous gauge**: Set $\psi = 0$ and $w = 0$. Widely used in numerical CMB Boltzmann codes (CAMB, CLASS), though it retains a residual gauge ambiguity.

---

## Relativistic fluid perturbations

The 4-velocity of a cosmic fluid $u^\mu = dx^\mu / \sqrt{ds^2}$ is normalized by $g_{\mu\nu}u^\mu u^\nu = -1$.
Expanding $u^\mu = a^{-1}(1 + v^0, v^i)$:
$$g_{\mu\nu}u^\mu u^\nu = a^2[-(1+2\psi)(1+v^0)^2 a^{-2} + \dots] = -1 \implies v^0 = -\psi$$

Under coordinate transformations, the velocity perturbation $v^i = \partial^i v_\parallel + v_\perp^i$ transforms as:
$$\tilde{v}_\parallel = v_\parallel + \beta'$$
$$\tilde{v}^0 = v^0 - \mathcal{H}\alpha - \alpha'$$

---

## Gauge-invariant density perturbation and relativistic Poisson equation

In an arbitrary gauge, the energy density perturbation $\delta\rho$ is not gauge-invariant. We define the **comoving-orthogonal energy density perturbation**:
$$\epsilon_m \equiv \delta\rho + \rho_0'(v_\parallel + w_\parallel)$$
This represents the energy density fluctuation evaluated on hypersurfaces everywhere orthogonal to the fluid 4-velocity.

Under a gauge shift:
$$\tilde{\epsilon}_m = (\delta\rho - \alpha\rho_0') + \rho_0'(v_\parallel + \beta' + w_\parallel + \alpha - \beta') = \epsilon_m$$
$\epsilon_m$ is strictly gauge-invariant!

### Linearly perturbed Einstein equations
The linearly perturbed Einstein equations $G^\mu_{\nu(1)} = 8\pi G T^\mu_{\nu(1)}$ yield:
* Energy constraint ($00$-component):
  $$\nabla^2\Phi - 3\mathcal{H}(\Phi' + \mathcal{H}\Psi) = 4\pi G a^2 \delta\rho_{\rm Newt}$$
* Momentum constraint ($0i$-component):
  $$\Phi' + \mathcal{H}\Psi = -4\pi G a^2 (\rho_0 + p_0)(v_\parallel - \chi')$$
* Anisotropic stress ($ij$-component, $i \neq j$):
  $$\Phi - \Psi = 8\pi G a^2 \Pi$$
  In the absence of anisotropic stress ($\Pi = 0$, valid for scalar fields and perfect fluids), $\Phi = \Psi$.

Substituting the momentum constraint into the energy constraint eliminates the time derivatives:
$$\nabla^2\Phi = 4\pi G a^2 \left[ \delta\rho + 3\mathcal{H}\frac{\rho_0 + p_0}{k^2}(v_\parallel - \chi') \right] = 4\pi G a^2 \epsilon_m$$

This is the **relativistic Poisson equation**:
$$\nabla^2\Phi = 4\pi G a^2 \epsilon_m$$
It holds on all spatial scales, seamlessly linking the Newtonian Poisson equation on sub-horizon scales to fully relativistic gauge-invariant perturbation theory on super-horizon scales.

---

## Curvature perturbations on uniform density slices

Another fundamental gauge-invariant quantity is the curvature perturbation on uniform energy density slices:
$$\zeta \equiv -\phi - \mathcal{H}\frac{\delta\rho}{\rho_0'}$$
Using the background continuity equation $\rho_0' = -3\mathcal{H}(\rho_0 + p_0)$:
$$\zeta = -\phi + \frac{\delta\rho}{3(\rho_0 + p_0)}$$

On super-horizon scales ($k \ll \mathcal{H}$), the energy-momentum conservation equation $\nabla_\mu T^\mu_0 = 0$ yields:
$$\zeta' = -\frac{\mathcal{H}}{\rho_0 + p_0}\delta p_{\rm nad} - \frac{1}{3}\nabla^2(\dots)$$
where $\delta p_{\rm nad} \equiv \delta p - c_s^2 \delta\rho$ is the non-adiabatic (entropy) pressure perturbation.

For purely adiabatic perturbations ($\delta p_{\rm nad} = 0$):
$$\zeta' = 0 \quad (k \ll \mathcal{H})$$
$\zeta$ is **strictly conserved on super-horizon scales**, regardless of how the equation of state of the universe changes (through inflation, reheating, radiation era, and matter era). This conservation theorem is what allows us to compute $\zeta$ during inflation and use its value directly to calculate CMB temperature anisotropies billions of years later.

---

## Connections and vault links

* Companion zettels:
  - [[Cosmological perturbation theory in General Relativity]]
  - [[Gauge transformations and Bardeen potentials]]
  - [[Gauge-invariant density perturbation and relativistic Poisson equation]]
  - [[Curvature perturbation R and zeta]]
* Previous module: [[Part4_Advanced_Formalisms_and_Non_Gaussianity]]
* Next module: [[Part6_Reheating_Baryogenesis_and_Dark_Matter]]
* Atlas: [[Cosmology_of_the_Early_Universe_MOC]]



## Linked References

- [[Cosmological perturbation theory in General Relativity]]
- [[Gauge transformations and Bardeen potentials]]
- [[Gauge-invariant density perturbation and relativistic Poisson equation]]
- [[Cosmology_of_the_Early_Universe_MOC]]


