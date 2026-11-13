---
layout: "default"
title: "Deceleration parameter"
---
the **deceleration parameter** $q_0$ measures the rate of change of cosmic expansion + thus the universe's deceleration (or acceleration) today. defined to be **positive for deceleration** by historical convention (when everyone assumed gravity slows expansion).

## the definition

$$\boxed{\, q_0 \equiv -\frac{\ddot a\,a}{\dot a^2}\bigg\vert_{t_0} \,}$$

with $a$ + $\dot a$ + $\ddot a$ evaluated today. negative sign by convention, so positive $q_0$ corresponds to deceleration.

equivalently:
$$q_0 = -\frac{\ddot a}{a H_0^2}$$

## the physical interpretation

from the acceleration equation:
$$\frac{\ddot a}{a} = -\frac{4\pi G}{3}(\rho + 3p) + \frac{\Lambda c^2}{3}$$

dividing by $H_0^2$ + using $\rho_c = 3H_0^2/(8\pi G)$:
$$q_0 = \frac{1}{2}\Omega_m + \Omega_r - \Omega_\Lambda$$

(approximate, ignores $\Omega_r$ today since it's tiny, equation of state $w = 0$ for matter, $1/3$ for radiation, $-1$ for $\Lambda$).

so $q_0$ depends on the **balance** between attractive matter + repulsive dark energy:
- pure matter universe ($\Omega_\Lambda = 0$, $\Omega_m = 1$): $q_0 = 0.5$ (decelerating).
- pure $\Lambda$ universe ($\Omega_m = 0$, $\Omega_\Lambda = 1$): $q_0 = -1$ (accelerating).
- our universe ($\Omega_m = 0.31$, $\Omega_\Lambda = 0.69$): $q_0 \approx -0.53$ (accelerating).

## the discovery

before 1998, $q_0$ was assumed positive (deceleration, "the universe is slowing down"). Perlmutter, Riess, Schmidt 1998 used SN Ia to measure $q_0$ directly. result:
$$q_0 \approx -0.6$$
**negative**: universe is accelerating. this **directly required** $\Omega_\Lambda > 0$ + changed cosmology.

## the SN Ia measurement

at small + moderate $z$, the luminosity distance expands as:
$$d_L(z) = \frac{c}{H_0}\!\left[z + \frac{1 - q_0}{2}z^2 + \dots\right]$$

so the second-order $z^2$ coefficient gives $q_0$. SN Ia at $z \sim 0.5$ to $1$ probe this term. their distances are **systematically larger** (fainter) than EdS prediction, requiring $q_0 < 0$.

## the modern values

Planck $\Lambda$CDM: $q_0 = -0.527 \pm 0.011$. **acceleration confirmed**.

equivalent: deceleration was happening at $z \gtrsim 0.6$ (when matter dominated), but acceleration started recently as $\Lambda$ took over.

the **transition redshift** (from $q > 0$ to $q < 0$, derived below):
$$z_{\rm acc} \approx 0.63$$

so the universe started accelerating $\sim 6$ Gyr ago.

## where the series comes from

I expand the scale factor around today, with $a(t_0) = 1$:

$$a(t) = 1 + H_0\,(t - t_0) - \frac{1}{2}\, q_0 H_0^2\,(t - t_0)^2 + \dots$$

this is only a Taylor series, so $H_0$ and $q_0$ are defined **without any dynamics**. they describe the kinematics of the expansion. the Friedmann equations enter only when I want to relate $q_0$ to the contents of the universe.

inserting the series in $1 + z = 1/a$ and in $d_C = c\int dt/a$, and keeping terms to second order, gives the relation used for supernovae:

$$d_L = \frac{c}{H_0}\left[z + \frac{1 - q_0}{2}\, z^2 + \dots\right]$$

## the general formula and its evolution

for a set of fluids with equations of state $w_i$, the acceleration equation gives

$$q = \frac{1}{2}\sum_i \Omega_i(z)\left(1 + 3 w_i\right)$$

a component accelerates the expansion only if $w < -1/3$. a second useful form is

$$q = -1 - \frac{\dot H}{H^2}$$

so $q = -1$ means $H$ is constant, the de Sitter case.

for flat $\Lambda$CDM, neglecting radiation, with $E^2(z) = \Omega_m(1+z)^3 + \Omega_\Lambda$:

$$q(z) = \frac{\tfrac{1}{2}\Omega_m (1+z)^3 - \Omega_\Lambda}{\Omega_m(1+z)^3 + \Omega_\Lambda}$$

- $z \to \infty$: $q \to 1/2$, the matter era.
- today: $q_0 = \tfrac{1}{2}(0.315) - 0.685 = -0.53$.
- future: $q \to -1$.

## the two redshifts that get confused

- **acceleration starts** when $q = 0$, that is $\Omega_m(1+z)^3 = 2\,\Omega_\Lambda$:

$$1 + z_{\rm acc} = \left(\frac{2\,\Omega_\Lambda}{\Omega_m}\right)^{1/3} = (4.35)^{1/3} \approx 1.63 \quad\Longrightarrow\quad z_{\rm acc} \approx 0.63$$

- **$\Lambda$ equals matter** in density when $\Omega_m(1+z)^3 = \Omega_\Lambda$:

$$1 + z_{\Lambda} = \left(\frac{\Omega_\Lambda}{\Omega_m}\right)^{1/3} \approx 1.30 \quad\Longrightarrow\quad z_\Lambda \approx 0.30$$

acceleration begins **before** $\Lambda$ dominates, because the pressure of $\Lambda$ counts three times in $\rho + 3p$.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

- **Deceleration parameter**. "The deceleration parameter q $q$ in cosmology is a dimensionless measure of the cosmic acceleration of the expansion of space in a Friedmann–Lemaître–Robertson–Walker universe. It is defined by: q = d e f − a ¨ a a ˙ 2 $q\ {\stackrel {\mathrm {def} }{=}}\ -{\frac { {\ddot {a}}a}{ {\dot {a}}^{2}}}$ where a $a$ is the scale factor of the universe and the dots indicate derivatives by proper time." ([Wikipedia](https://en.wikipedia.org/wiki/Deceleration_parameter))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Hubble constant and deceleration parameter]]
- [[Friedmann equations]]
- [[Cosmological constant]]
- [[ΛCDM current parameters]]
- [[Supernova Hubble diagram]]
- [[Density parameters]]
- [[Cosmic eras]]
- [[Type Ia supernovae as standard candles]]
- [[Observational_Cosmology_MOC]]



## Linked References

- [[General_Relativity_MOC]]
- [[Observational_Cosmology_MOC]]


