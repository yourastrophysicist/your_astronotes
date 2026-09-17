---
layout: "default"
title: "Perturbations in an expanding universe"
---
{% raw %}
**linear perturbation theory** in an expanding background: how small density inhomogeneities evolve under gravity in FLRW cosmology. companion: [Linear evolution of perturbations in expanding universe](./Linear%20evolution%20of%20perturbations%20in%20expanding%20universe.html) for the existing detailed treatment.

## the setup

write the metric perturbation as:
$$g_{\mu\nu} = g_{\mu\nu}^{\rm FLRW} + h_{\mu\nu}$$

with $\lvert h\rvert \ll g^{\rm FLRW}$. similarly the matter:
$$\rho(\vec x, t) = \bar\rho(t)[1 + \delta(\vec x, t)]$$
$$\vec v(\vec x, t) = \vec v_{\rm Hubble} + \vec v_{\rm pec}$$

with $\lvert \delta\rvert, \lvert v_{\rm pec}/c\rvert \ll 1$.

## the equations

linearise the fluid equations + Einstein's equation. after gauge-fixing (synchronous or conformal Newtonian gauge), get:

### continuity (matter conservation)
$$\dot\delta + \theta = 3\dot\Phi$$
($\theta$ = velocity divergence, $\Phi$ = gravitational potential).

### Euler (momentum)
$$\dot\theta + H\theta = c_s^2\nabla^2\delta/a^2 + \nabla^2\Phi/a^2$$
($c_s$ = sound speed).

### Poisson
$$\nabla^2\Phi/a^2 = 4\pi G\bar\rho\,\delta$$

closing the system gives a 2nd-order ODE for $\delta$:
$$\boxed{\, \ddot\delta + 2H\dot\delta + (c_s^2 k^2/a^2 - 4\pi G\bar\rho)\delta = 0 \,}$$

(in Fourier space, mode $\vec k$).

## the three terms

1. **$2H\dot\delta$**: Hubble friction; expansion drags growth.
2. **$c_s^2 k^2/a^2\,\delta$**: pressure restoring force.
3. **$-4\pi G\bar\rho\,\delta$**: gravitational driving.

balance + sign of these terms determines the regime.

## the Jeans length

for a static fluid, balancing pressure + gravity:
$$\lambda_J = c_s\sqrt{\pi/(G\bar\rho)}$$

scales **smaller** than $\lambda_J$ are pressure-supported (stable). scales **larger** than $\lambda_J$ collapse gravitationally.

in the expanding universe, the Jeans length is modified by Hubble drag. see [Jeans analysis in expanding universe](./Jeans%20analysis%20in%20expanding%20universe.html).

## the matter era growth

for matter ($w = 0$, $c_s \to 0$), the equation simplifies:
$$\ddot\delta + 2H\dot\delta - 4\pi G\bar\rho\,\delta = 0$$

with $a \propto t^{2/3}$ (Einstein-de Sitter), $H = 2/(3t)$. solution:
$$\delta \propto a \propto t^{2/3}$$

(growing mode) + a decaying mode. so matter perturbations grow as $a$ in a matter-dominated universe.

## the radiation era growth

before equality, dark-matter perturbations are influenced by the radiation-dominated background. growth is **logarithmic** ($\delta_{\rm DM} \propto \log a$): the **Meszaros effect**.

so perturbations on small scales (entered horizon during radiation era) get **frozen** relative to large scales. produces the matter power spectrum **break** at the equality scale.

## the dark-energy era

at low $z$, $\Lambda$ dominates + Hubble parameter freezes at $H_\Lambda$. growth slows:
$$\dot D/D \to 0, \quad D \to D_{\rm freeze}$$

structures **stop growing** in the dark-energy era. linear regime stagnates.

## the growth factor $D(z)$

dimensionless quantity tracking growth:
$$\delta(z) = D(z) \cdot \delta_0$$

$D(z = 0) = 1$ by convention. for $\Lambda$CDM, approximately:
$$D(z) \propto \Omega_m^{0.55}(z) \cdot a$$

at $z = 0$, $D \approx 0.78$ (slightly less than the EdS value due to $\Lambda$ slowdown).

see [Growth factor D(z)](./Growth%20factor%20D%28z%29.html).

## consequences

at recombination ($z = 1100$):
- $\delta \approx 10^{-5}$ (small).
- pure linear regime.
- imprinted in the CMB.

today ($z = 0$):
- $\delta \sim 1$ on $8\,h^{-1}$ Mpc scales (galaxies).
- $\delta \gg 1$ on smaller scales (cluster cores).
- fully non-linear.

so the universe transitions from linear to non-linear over cosmic history.

## see also

- [Linear evolution of perturbations in expanding universe](./Linear%20evolution%20of%20perturbations%20in%20expanding%20universe.html)
- [Cosmological evolution of perturbations in the cosmic fluid](./Cosmological%20evolution%20of%20perturbations%20in%20the%20cosmic%20fluid.html)
- [Jeans analysis in expanding universe](./Jeans%20analysis%20in%20expanding%20universe.html)
- [Growth factor D(z)](./Growth%20factor%20D%28z%29.html)
- [Linear vs nonlinear regime](./Linear%20vs%20nonlinear%20regime.html)
- [Spherical collapse](./Spherical%20collapse.html)
- [Matter power spectrum and BAO](./Matter%20power%20spectrum%20and%20BAO.html)
- [Matter radiation equality](./Matter%20radiation%20equality.html)
- [Observational_Cosmology_MOC](../../04_Atlas/Observational_Cosmology_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Linear%20vs%20nonlinear%20regime.html" class="backlink-item">Linear vs nonlinear regime</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
  </ul>
</div>
