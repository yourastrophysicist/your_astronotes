---
layout: default
title: "Friedmann solutions"
---

explicit solutions to the Friedmann equation in special cases. each has a characteristic $a(t)$ + matches a specific cosmological scenario. see [Friedmann models](../../02_Zettel/Theory/Friedmann models.html) for additional detail.

## the master equation

$$\left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2}$$

depending on which fluid dominates + the curvature parameter, the integration gives different $a(t)$.

## Milne universe (empty: $\rho = 0$, $k = -1$)

just curvature. $\dot a^2 = c^2$, so:
$$a(t) = ct$$
linear expansion. equivalent to special-relativistic flat spacetime in expanding coordinates. an unphysical limit but useful as a check.

## Einstein-de Sitter (matter-only, flat: $k = 0$, $\Lambda = 0$, $\rho_m \propto a^{-3}$)

$\dot a^2 \propto a^{-1}$ gives:
$$\boxed{\, a(t) \propto t^{2/3} \,}$$

Hubble parameter $H = (2/3)/t$. age $t_0 = (2/3)/H_0 \approx 9.3$ Gyr (for $H_0 = 70$ km/s/Mpc).

EdS was the standard model from $1932$ (Einstein + de Sitter) until the discovery of $\Lambda$ in 1998. **historically important**, but inconsistent with current data:
- predicted age too young vs globular clusters.
- $\Omega_m = 1$ vs observed $\sim 0.31$.
- doesn't match SN Ia Hubble diagram at high $z$.

## radiation-only flat ($k = 0$, $\rho_r \propto a^{-4}$)

$\dot a^2 \propto a^{-2}$ gives:
$$\boxed{\, a(t) \propto t^{1/2} \,}$$

Hubble $H = 1/(2t)$. relevant for the early universe ($t \lesssim 50\,000$ yr, $z \gtrsim 3400$). see Q19 - radiation universe.

## $\Lambda$-only (de Sitter)

with $\rho = 0$, $k = 0$, only $\Lambda$:
$$H^2 = \frac{\Lambda c^2}{3} = \text{const}$$
$$\boxed{\, a(t) \propto e^{H_\Lambda t} \,}$$

**exponential expansion**. the asymptotic future of $\Lambda$CDM (when $\Lambda$ dominates).

also the underlying solution of **inflation**: scalar field acts like an effective $\Lambda$ briefly, driving exponential expansion in the very early universe.

## closed universe (matter + $k = +1$)

cycloid solution:
$$a(\eta) = a_{\rm max}(1 - \cos\eta)/2, \quad t(\eta) = (a_{\rm max}/2)(\eta - \sin\eta)$$

with $\eta$ the development angle. universe expands to $a_{\rm max}$, then recollapses.

## open universe (matter + $k = -1$)

$$a(\eta) = (a_*)(\cosh\eta - 1)/2, \quad t(\eta) = (a_*/2)(\sinh\eta - \eta)$$

universe expands forever, asymptotes to $a \propto t$ at large $t$.

## $\Lambda$CDM (matter + $\Lambda$, flat)

the **modern** solution. Friedmann becomes:
$$\dot a^2 = \frac{8\pi G}{3}\rho_m a^2 + \frac{\Lambda c^2}{3}a^2$$

at small $a$: matter dominates, $a \propto t^{2/3}$.
at large $a$: $\Lambda$ dominates, $a \propto e^{H_\Lambda t}$.
**transition** around $a \sim (\Omega_m/\Omega_\Lambda)^{1/3} \approx 0.77$, i.e. $z \approx 0.3$.

age at present:
$$t_0 = \frac{2}{3 H_0\sqrt{\Omega_\Lambda}}\sinh^{-1}\!\sqrt{\Omega_\Lambda/\Omega_m}$$
$\approx 13.8$ Gyr for current $\Omega_m = 0.31$, $\Omega_\Lambda = 0.69$, $H_0 = 67.4$.

matches independent age constraints (oldest globular clusters $\sim 13$ Gyr).

## why these matter

each solution is a **limiting regime** of the universe:
- radiation $a \propto t^{1/2}$: $z > 3400$.
- matter $a \propto t^{2/3}$: $0.3 < z < 3400$.
- $\Lambda$ $a \propto e^{Ht}$: $z < 0.3$.

the **transition between regimes** is what makes $\Lambda$CDM rich + observationally distinguishable from EdS.

## see also

- [Friedmann models](../../02_Zettel/Theory/Friedmann models.html)
- [Friedmann equations](../../02_Zettel/Theory/Friedmann equations.html)
- Friedmann equations with Λ
- [Newtonian Friedmann derivation](../../02_Zettel/Theory/Newtonian Friedmann derivation.html)
- [Cosmic eras](../../02_Zettel/Theory/Cosmic eras.html)
- [Spatial curvature parameter k](../../02_Zettel/Theory/Spatial curvature parameter k.html)
- [Cosmological constant](../../02_Zettel/Theory/Cosmological constant.html)
- Q19 - radiation universe
- Q20 - matter plus radiation universe
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.html)
