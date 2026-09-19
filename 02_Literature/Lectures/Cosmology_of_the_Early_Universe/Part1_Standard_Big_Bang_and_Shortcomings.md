---
layout: "default"
title: "Part1_Standard_Big_Bang_and_Shortcomings"
---
# Part 1 - The Standard Big Bang Model and its Shortcomings

*Lectures 1 to 8 notes synthesis - Prof. Nicola Bartolo*  
*Cosmology of the Early Universe - Università degli Studi di Padova*  
*Index: [Cosmology_of_the_Early_Universe_MOC](../../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)*  

---

## The homogeneous and isotropic background

The cosmological principle states that on sufficiently large scales (experimentally confirmed above $\sim 100\text{ Mpc}$), spatial slices of the universe are homogeneous and isotropic. The unique spacetime metric admitting these spatial symmetries is the Friedmann-Lemaître-Robertson-Walker (FLRW) metric:

$$ds^2 = dt^2 - a^2(t)\left[\frac{dr^2}{1-kr^2} + r^2(d\theta^2 + \sin^2\theta\, d\phi^2)\right]$$

where $a(t)$ is the cosmic scale factor, normalized to $a(t_0) = 1$ today, and $k \in \{-1, 0, +1\}$ is the spatial curvature index:
* $k = 0$: spatially flat Euclidean geometry
* $k = +1$: spatially closed 3-sphere of radius of curvature $R_c(t) = a(t)$
* $k = -1$: spatially open hyperbolic geometry

In conformal time $\tau$, defined by $d\tau = dt / a(t)$, the metric is conformally flat (for $k=0$):
$$ds^2 = a^2(\tau)\left[d\tau^2 - (dr^2 + r^2 d\Omega^2)\right]$$

The Einstein field equations $G_{\mu\nu} = 8\pi G T_{\mu\nu}$ with a perfect fluid stress-energy tensor $T^\mu_\nu = \text{diag}(\rho, -p, -p, -p)$ yield the two Friedmann equations:

$$\left(\frac{\dot{a}}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{k}{a^2}$$

$$\frac{\ddot{a}}{a} = -\frac{4\pi G}{3}(\rho + 3p)$$

Combining these with the Bianchi identity $\nabla_\mu G^\mu_\nu = 0$ gives the continuity equation:
$$\dot{\rho} + 3H(\rho + p) = 0$$

For a barotropic equation of state $p = w\rho$ with constant $w$:
$$\rho(a) \propto a^{-3(1+w)}$$

Three canonical regimes characterize the universe:
1. Radiation era ($w = 1/3$): $\rho_r \propto a^{-4}$, $a(t) \propto t^{1/2}$, $a(\tau) \propto \tau$
2. Matter era ($w = 0$): $\rho_m \propto a^{-3}$, $a(t) \propto t^{2/3}$, $a(\tau) \propto \tau^2$
3. Vacuum energy / de Sitter era ($w = -1$): $\rho_v = \text{const}$, $a(t) \propto e^{Ht}$, $a(\tau) = -1/(H\tau)$ with $\tau \in (-\infty, 0)$

---

## Causal horizons and characteristic scales

Physical distance is related to comoving coordinate distance by $\vec{x}_{\rm phys}(t) = a(t)\vec{x}$. In an expanding universe, three different distance measures must be carefully separated:

### 1. The Hubble radius
The Hubble radius is defined as:
$$R_H(t) \equiv \frac{c}{H(t)}$$
This is not a causal boundary; it is the instantaneous scale at which the recession velocity of points equals the speed of light ($v = H d = c$). In comoving coordinates, the comoving Hubble radius is:
$$r_H(t) = \frac{c}{a(t)H(t)} = \frac{c}{\dot{a}(t)}$$

In decelerating cosmologies ($\ddot{a} < 0$), $\dot{a}$ decreases, so the comoving Hubble radius $(aH)^{-1}$ **grows monotonically with time**.

### 2. The particle horizon
The particle horizon is the maximum physical distance that light could have traveled from the initial singularity ($t=0$) to time $t$:
$$d_H(t) = a(t)\int_0^t \frac{c\, dt'}{a(t')} = a(\tau)\int_{\tau_0}^\tau c\, d\tau' = a(\tau)(\tau - \tau_0)$$

In a standard radiation-dominated universe ($a(t) \propto t^{1/2}$):
$$d_H(t) = t^{1/2}\int_0^t \frac{dt'}{t'^{1/2}} = 2 t = 2 H^{-1}$$
The particle horizon is strictly of the order of the Hubble radius. Two observers separated by a physical distance greater than $d_H(t)$ have disjoint past light cones. They could never have exchanged information or reached thermal equilibrium.

### 3. The event horizon
The event horizon represents the maximum distance from which an observer at time $t$ will ever be able to receive a signal emitted in the future:
$$d_e(t) = a(t)\int_t^\infty \frac{c\, dt'}{a(t')}$$
In standard Big Bang models ($w > -1/3$), this integral diverges, meaning there is no cosmic event horizon. In de Sitter expansion ($a \propto e^{Ht}$), the integral converges to $d_e = c/H$.

---

## Shortcoming 1 - The horizon problem

The cosmic microwave background displays a near-perfect blackbody spectrum with temperature $T_0 = 2.7255\text{ K}$. Across opposite directions on the sky, temperature anisotropies are bounded by $\Delta T / T \sim 10^{-5}$.

Let us calculate the angle subtended on the sky today by the sound horizon at the last scattering surface ($z_{\rm rec} \approx 1100$). The physical particle horizon at recombination in a matter-radiation universe is:
$$d_H(t_{\rm rec}) \approx 2 H^{-1}(t_{\rm rec}) \approx 0.2\text{ Mpc}$$

The angular diameter distance from the observer today to the last scattering surface is:
$$d_A(z_{\rm rec}) = \frac{1}{1+z_{\rm rec}}\int_0^{z_{\rm rec}} \frac{c\, dz'}{H(z')} \approx \frac{2c}{H_0 \Omega_m^{1/2}(1+z_{\rm rec})^{3/2}} \approx 14\text{ Gpc}$$

The angular size subtended by the causally connected region at recombination is therefore:
$$\theta_H = \frac{d_H(t_{\rm rec})}{d_A(z_{\rm rec})} \approx \left(\frac{\Omega_m}{z_{\rm rec}}\right)^{1/2} \approx 1^\circ$$

Any two patches of the CMB separated by more than $\sim 1^\circ$ (corresponding to multipoles $\ell \gtrsim 100$) were causally disconnected throughout the entire history of the universe prior to recombination. The full sky contains approximately:
$$N_{\rm patches} = \frac{4\pi}{\pi \theta_H^2} \approx 40\text{,}000$$

In the standard Hot Big Bang model, there is no physical mechanism to enforce identical temperatures across 40,000 causally independent causal domains. Postulating identical temperature as an initial boundary condition without a physical dynamical explanation is the horizon problem.

---

## Shortcoming 2 - The flatness problem

The first Friedmann equation can be rewritten in terms of the critical density $\rho_c(t) \equiv 3H^2/(8\pi G)$ and the total density parameter $\Omega(t) \equiv \rho(t)/\rho_c(t)$:
$$1 - \Omega(t) = -\frac{k}{a^2 H^2} \equiv \Omega_k(t)$$

Taking the derivative of $\Omega_k$ with respect to the number of e-folds $\ln a$:
$$\frac{d\Omega_k}{d\ln a} = \frac{d}{d\ln a}\left(-\frac{k}{\dot{a}^2}\right) = \frac{2k\ddot{a}}{\dot{a}^3} = -\frac{k}{a^2 H^2} \left(-2\frac{\ddot{a}}{a H^2}\right)$$

Using the second Friedmann equation $\ddot{a}/a = -4\pi G(\rho + 3p)/3 = -H^2(1+3w)\Omega / 2$:
$$\frac{d\Omega_k}{d\ln a} = \Omega_k \Omega (1 + 3w) = \Omega_k (1 - \Omega_k)(1 + 3w)$$

In any universe dominated by ordinary matter ($w=0$) or radiation ($w=1/3$), the factor $(1 + 3w)$ is strictly positive:
* Radiation era: $1 + 3w = 2 > 0 \implies \lvert 1 - \Omega(t)\rvert \propto a^2$
* Matter era: $1 + 3w = 1 > 0 \implies \lvert 1 - \Omega(t)\rvert \propto a$

This means that $\Omega = 1$ is an **unstable fixed point**. Any infinitesimal displacement away from exact flatness grows rapidly with time:
$$\frac{\lvert 1 - \Omega(t_{\rm Pl})\rvert}{\lvert 1 - \Omega(t_0)\rvert} \approx \left(\frac{a_{\rm Pl}}{a_{\rm eq}}\right)^2 \left(\frac{a_{\rm eq}}{a_0}\right) \sim 10^{-60}$$

Because observations today constrain $\lvert 1 - \Omega(t_0)\rvert < 0.005$, the universe at the Planck scale must have been flat to within one part in $10^{60}$:
$$\lvert 1 - \Omega(t_{\rm Pl})\rvert < 10^{-60}$$
If $\Omega$ at the Planck epoch had been $1.00000000000001$, the universe would have recollapsed in a few Planck times ($10^{-43}\text{ s}$). If it had been $0.99999999999999$, the universe would have expanded so rapidly that matter would have diluted before stars or galaxies could form. The standard model offers no dynamical reason for this extreme fine-tuning.

---

## Shortcoming 3 - Unwanted relics and the monopole problem

When Grand Unified Theories (GUTs) undergo spontaneous symmetry breaking at $T_{\rm GUT} \sim 10^{16}\text{ GeV}$ ($G \to H \times U(1)$), the topology of the vacuum manifold $\mathcal{M} = G/H$ dictates the formation of topological defects via the Kibble mechanism:
* $\pi_0(\mathcal{M}) \neq \mathbb{I}$: Domain walls (2D defects)
* $\pi_1(\mathcal{M}) \neq \mathbb{I}$: Cosmic strings (1D defects)
* $\pi_2(\mathcal{M}) \neq \mathbb{I}$: Magnetic monopoles (0D point defects)

Because gauge fields in different causally disconnected patches choose orientations independently, topological defects must form with a density of at least one defect per Hubble volume at the transition:
$$n_{\rm mono}(t_{\rm GUT}) \sim H_{\rm GUT}^3 \sim \left(\frac{T_{\rm GUT}^2}{M_{\rm Pl}}\right)^3$$

Magnetic monopoles are topological solitons with mass $m_M \sim M_{\rm GUT} / \alpha \sim 10^{17}\text{ GeV}$. Their ratio to photon entropy density is:
$$\frac{n_{\rm mono}}{s} \sim \left(\frac{T_{\rm GUT}}{M_{\rm Pl}}\right)^3 \sim 10^{-9}$$

Because monopoles are stable and their annihilation rate $\Gamma_{\rm ann} = n \langle\sigma v\rangle$ rapidly falls below the expansion rate $H$, they dilute as non-relativistic matter ($n \propto a^{-3}$), while radiation dilutes as $a^{-4}$. Consequently, monopoles would rapidly dominate the energy density of the universe:
$$\Omega_{\rm mono}(t_0) \sim 10^{14}$$
This overclosure by 14 orders of magnitude would have halted cosmological expansion in a big crunch within tens of thousands of years.

---

## The inflationary solution

All three shortcomings arise from the single property that in standard cosmology, gravity is always attractive ($\rho + 3p > 0$), which forces deceleration:
$$\ddot{a} < 0 \iff \frac{d}{dt}(aH)^{-1} > 0$$

If instead the early universe underwent a phase of **accelerated expansion**:
$$\ddot{a} > 0 \iff \rho + 3p < 0 \iff w < -1/3$$
the comoving Hubble radius $(aH)^{-1} = 1/\dot{a}$ **decreases with time**:
$$\frac{d}{dt}\left(\frac{1}{aH}\right) = -\frac{\ddot{a}}{\dot{a}^2} < 0$$

### Resolution of the horizon problem
During accelerated expansion (approximated as de Sitter $H \approx \text{const}$), the scale factor grows exponentially $a(t) = a_i e^{H(t-t_i)}$. The physical particle horizon is:
$$d_H(t) = a(t)\int_{t_i}^t \frac{dt'}{a(t')} = \frac{e^{H(t-t_i)}}{H}(1 - e^{-H(t-t_i)}) \approx \frac{1}{H} e^{N} \gg H^{-1}$$
where $N = H(t-t_i)$ is the number of e-folds. For $N \gtrsim 60$, the particle horizon is blown up by a factor of $e^{60} \sim 10^{26}$ relative to the Hubble radius. A tiny, smooth patch that was causally connected prior to inflation expands to encompass the entire observable universe today.

### Resolution of the flatness problem
From the evolution equation:
$$\frac{d\Omega_k}{d\ln a} = \Omega_k \Omega (1 + 3w)$$
when $w < -1/3$, the factor $(1 + 3w) < 0$. Therefore, $\Omega = 1$ ($\Omega_k = 0$) transforms from an unstable repeller into a **stable dynamical attractor**:
$$\Omega_k(t) \propto a^{-2} \propto e^{-2N}$$
Starting from any arbitrary initial curvature $\Omega_k \sim \mathcal{O}(1)$, 60 e-folds of inflation drives $\Omega_k$ to:
$$\lvert \Omega_k\rvert \sim e^{-120} \sim 10^{-52}$$
Inflation naturally predicts that the universe today must be spatially flat to high precision, completely eliminating the need for fine-tuning.

### Resolution of the relic problem
Because topological defects form before or during the onset of the phase transition, the subsequent exponential expansion dilutes their number density:
$$n_{\rm mono} \propto a^{-3} \propto e^{-3N}$$
For $N \approx 60$, the density drops by $e^{-180} \sim 10^{-78}$, leaving less than one monopole within the current particle horizon.

---

## Connections and vault links

* Companion zettels:
  - [Horizon problem and causal structure](../../../03_Zettel/Theory/Horizon%20problem%20and%20causal%20structure.html)
  - [Flatness problem and dynamical attractor](../../../03_Zettel/Theory/Flatness%20problem%20and%20dynamical%20attractor.html)
  - [Cosmic relics and Kibble mechanism](../../../03_Zettel/Theory/Cosmic%20relics%20and%20Kibble%20mechanism.html)
  - [Cosmological inflation](../../../03_Zettel/Theory/Cosmological%20inflation.html)
* Next module: [Part2_Inflation_Kinematics_Dynamics_and_Models](./Part2_Inflation_Kinematics_Dynamics_and_Models.html)
* Atlas: [Cosmology_of_the_Early_Universe_MOC](../../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Cosmic%20relics%20and%20Kibble%20mechanism.html" class="backlink-item">Cosmic relics and Kibble mechanism</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Flatness%20problem%20and%20dynamical%20attractor.html" class="backlink-item">Flatness problem and dynamical attractor</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Horizon%20problem%20and%20causal%20structure.html" class="backlink-item">Horizon problem and causal structure</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
  </ul>
</div>

