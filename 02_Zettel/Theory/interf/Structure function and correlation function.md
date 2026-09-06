---
layout: default
title: "Structure function and correlation function"
---

# Structure function and correlation function

two related statistical descriptors of a fluctuating field. **correlation function** $B(r)$ measures how similar values are at separation $r$. **structure function** $D(r)$ measures how *different* they are. for atmospheric turbulence, $D(r)$ is more useful because Kolmogorov turbulence has well-defined power-law $D(r)$ even when $B(r)$ is undefined.

## definitions

let $\phi(\mathbf x)$ be a random field (e.g. atmospheric phase). then:

**correlation function**:
$$B_\phi(r) = \langle \phi(\mathbf x + \mathbf r) \phi(\mathbf x) \rangle$$

(assuming $\langle \phi \rangle = 0$ and the field is statistically homogeneous). depends only on $r = |\mathbf r|$ for isotropic fields.

**structure function**:
$$D_\phi(r) = \langle |\phi(\mathbf x + \mathbf r) - \phi(\mathbf x)|^2 \rangle$$

both can be computed from a measured field by averaging over many independent realizations or over different positions $\mathbf x$.

## the relation between them

if $\phi$ has zero mean and finite variance $\sigma_\phi^2 = B_\phi(0)$:
$$D_\phi(r) = 2 [B_\phi(0) - B_\phi(r)] = 2 \sigma_\phi^2 [1 - \rho(r)]$$

with $\rho(r) = B_\phi(r)/B_\phi(0)$ the *normalized* correlation.

properties:
- $D_\phi(0) = 0$
- $D_\phi(\infty) = 2 B_\phi(0) = 2 \sigma_\phi^2$ (assuming $B \to 0$ for large $r$)

## why $D$ is preferred for turbulence

Kolmogorov turbulence has power-law $D(r) \propto r^{5/3}$ extending to *infinity* (in the inertial-range approximation). this means $\sigma_\phi^2$ is technically infinite — the variance diverges. the correlation function $B(r)$ is undefined.

but the structure function $D(r)$ is finite at every finite $r$ and is a clean power-law. it captures all the information without the divergence.

physically: the variance is dominated by the largest scales (the outer scale $L_0$, where the cascade injects energy). between two points separated by $r \ll L_0$, the *difference* in $\phi$ depends only on the eddies *between $r$ and $L_0$* — finite. the absolute *value* depends on all eddies up to $L_0$ — diverges in the limit.

so for any practical purpose — fringe degradation, AO performance, image distortion — $D$ is the relevant quantity.

## examples

### Kolmogorov phase

$$D_\phi(r) = 6.88 (r/r_0)^{5/3}$$

with $r_0$ the Fried parameter. the *coherent area* over which $D_\phi < 1$ rad$^2$ is $\pi r_0^2$.

### Gaussian random field

$D(r) = 2\sigma^2 [1 - e^{-r^2/2\ell^2}]$. saturates at $2\sigma^2$ for $r \gg \ell$. exponential cutoff at the correlation length $\ell$.

### white noise

$D(r) = 2\sigma^2$ for $r \neq 0$, $D(0) = 0$. a discontinuity at zero. white-noise samples are uncorrelated at any finite separation.

## the von Kármán correction

real atmospheric turbulence has a finite outer scale $L_0$. the von Kármán model:
$$\Phi_\phi(\kappa) \propto (\kappa^2 + 1/L_0^2)^{-11/6}$$

yields a $D_\phi$ that follows Kolmogorov 5/3 at small $r$ but saturates at $r \gtrsim L_0$. in practice for $L_0 \sim 50$-100 m:
- $D_\phi$ is Kolmogorov for baselines $\lesssim 10$ m
- saturates for baselines $\gtrsim L_0$

VLTI, with baselines up to 130 m, is at the edge of the von Kármán correction. some optical interferometers must include this correction in their analysis.

## the temporal version

the same statistics apply in time. the temporal structure function:
$$D_\phi(\tau) = \langle |\phi(t + \tau) - \phi(t)|^2 \rangle$$

for atmospheric turbulence with the **Taylor frozen-turbulence hypothesis** (turbulence patterns advect with the wind):
$$D_\phi(\tau) = D_\phi^{\rm spatial}(v_{\rm wind} \tau)$$

so temporal fluctuations have the same 5/3 power law in $\tau$, with characteristic timescale $\tau_0 = r_0/v_{\rm wind}$. this is the **Greenwood time** for AO.

## see also

- [Atmospheric turbulence overview](../../../02_Zettel/Theory/interf/Atmospheric turbulence overview.md)
- [Kolmogorov turbulence](../../../02_Zettel/Theory/interf/Kolmogorov turbulence.md)
- [Fried parameter $r_0$](../../../02_Zettel/Theory/interf/Fried parameter $r_0$.md)
- [Frozen turbulence and Taylor hypothesis](../../../02_Zettel/Theory/interf/Frozen turbulence and Taylor hypothesis.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
