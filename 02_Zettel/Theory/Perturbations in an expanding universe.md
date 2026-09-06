---
layout: default
title: "Perturbations in an expanding universe"
---

**linear perturbation theory** in an expanding background: how small density inhomogeneities evolve under gravity in FLRW cosmology. companion: [Linear evolution of perturbations in expanding universe](../../02_Zettel/Theory/Linear evolution of perturbations in expanding universe.md) for the existing detailed treatment.

## the setup

write the metric perturbation as:
$$g_{\mu\nu} = g_{\mu\nu}^{\rm FLRW} + h_{\mu\nu}$$

with $|h| \ll g^{\rm FLRW}$. similarly the matter:
$$\rho(\vec x, t) = \bar\rho(t)[1 + \delta(\vec x, t)]$$
$$\vec v(\vec x, t) = \vec v_{\rm Hubble} + \vec v_{\rm pec}$$

with $|\delta|, |v_{\rm pec}/c| \ll 1$.

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

in the expanding universe, the Jeans length is modified by Hubble drag. see [Jeans analysis in expanding universe](../../02_Zettel/Theory/Jeans analysis in expanding universe.md).

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

see [Growth factor D(z)](../../02_Zettel/Theory/Growth factor D(z).md).

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

- [Linear evolution of perturbations in expanding universe](../../02_Zettel/Theory/Linear evolution of perturbations in expanding universe.md)
- [Cosmological evolution of perturbations in the cosmic fluid](../../02_Zettel/Theory/Cosmological evolution of perturbations in the cosmic fluid.md)
- [Jeans analysis in expanding universe](../../02_Zettel/Theory/Jeans analysis in expanding universe.md)
- [Growth factor D(z)](../../02_Zettel/Theory/Growth factor D(z).md)
- [Linear vs nonlinear regime](../../02_Zettel/Theory/Linear vs nonlinear regime.md)
- [Spherical collapse](../../02_Zettel/Theory/Spherical collapse.md)
- [Matter power spectrum and BAO](../../02_Zettel/Theory/Matter power spectrum and BAO.md)
- [Matter radiation equality](../../02_Zettel/Theory/Matter radiation equality.md)
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.md)
