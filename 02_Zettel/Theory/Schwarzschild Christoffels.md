---
layout: default
title: "Schwarzschild Christoffels"
---

the **non-zero Christoffel symbols** for the Schwarzschild metric in standard coordinates $(t, r, \theta, \phi)$. essential for any computation of geodesics, Riemann, etc.

## the metric

$$ds^2 = -\left(1 - \frac{2GM}{r}\right)dt^2 + \left(1 - \frac{2GM}{r}\right)^{-1}dr^2 + r^2 d\Omega^2$$

writing $f(r) = 1 - 2GM/r$:
$$g_{tt} = -f, \quad g_{rr} = 1/f, \quad g_{\theta\theta} = r^2, \quad g_{\phi\phi} = r^2\sin^2\theta$$

inverse:
$$g^{tt} = -1/f, \quad g^{rr} = f, \quad g^{\theta\theta} = 1/r^2, \quad g^{\phi\phi} = 1/(r^2\sin^2\theta)$$

## the non-zero Christoffels

using $\Gamma^\rho{}_{\mu\nu} = \tfrac{1}{2}g^{\rho\sigma}(\partial_\mu g_{\sigma\nu} + \partial_\nu g_{\sigma\mu} - \partial_\sigma g_{\mu\nu})$:

### upper $t$
$$\Gamma^t{}_{tr} = \Gamma^t{}_{rt} = \frac{f'}{2f} = \frac{GM}{r^2 f} = \frac{GM}{r(r - 2GM)}$$

### upper $r$
$$\Gamma^r{}_{tt} = \frac{f f'}{2} = \frac{GM}{r^2}\!\left(1 - \frac{2GM}{r}\right)$$
$$\Gamma^r{}_{rr} = -\frac{f'}{2f} = -\frac{GM}{r(r - 2GM)}$$
$$\Gamma^r{}_{\theta\theta} = -r f = -r\!\left(1 - \frac{2GM}{r}\right) = -(r - 2GM)$$
$$\Gamma^r{}_{\phi\phi} = -r f \sin^2\theta = -(r - 2GM)\sin^2\theta$$

### upper $\theta$
$$\Gamma^\theta{}_{r\theta} = \Gamma^\theta{}_{\theta r} = \frac{1}{r}$$
$$\Gamma^\theta{}_{\phi\phi} = -\sin\theta\cos\theta$$

### upper $\phi$
$$\Gamma^\phi{}_{r\phi} = \Gamma^\phi{}_{\phi r} = \frac{1}{r}$$
$$\Gamma^\phi{}_{\theta\phi} = \Gamma^\phi{}_{\phi\theta} = \cot\theta$$

## checks

- **symmetric in lower indices**: yes.
- **all coordinate-dependent**: $\Gamma$ is not a tensor.
- **sphere components** ($\Gamma^\theta{}_{\phi\phi}, \Gamma^\phi{}_{\theta\phi}$) are exactly the 2-sphere Christoffels: the $\theta\phi$ subspace is a 2-sphere of radius $r$.
- $\Gamma^t{}_{tr}$ encodes time dilation; $\Gamma^r{}_{tt}$ encodes the gravitational acceleration.

## the practical use

with these, you can:
- write the geodesic equation explicitly.
- compute Riemann components for tidal-force calculations.
- derive the orbit equations (energy + $L$ conservation, effective potential).
- compute Christoffel-related observables (e.g. surface gravity, redshift factors).

see Q11 - selected Schwarzschild Christoffels for the standard exam-style computation.

## see also

- [Schwarzschild metric](../../02_Zettel/Theory/Schwarzschild metric.md)
- [Christoffel symbols](../../02_Zettel/Theory/Christoffel symbols.md)
- [Schwarzschild horizon](../../02_Zettel/Theory/Schwarzschild horizon.md)
- [Schwarzschild effective potential](../../02_Zettel/Theory/Schwarzschild effective potential.md)
- Q11 - selected Schwarzschild Christoffels
- Q12 - circular orbits and orbital frequency
- Q13 - radial infall and proper time
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 6 - Black Holes](../../01_Literature/Book/Baumann GR/Ch 6 - Black Holes.md)
