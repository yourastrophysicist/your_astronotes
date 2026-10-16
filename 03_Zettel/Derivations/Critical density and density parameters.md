---
layout: default
title: "Critical density and density parameters"
---
## what I'm deriving

$$\rho_c(t) \equiv \frac{3 H^2(t)}{8\pi G}, \qquad \Omega_i(t) \equiv \frac{\rho_i(t)}{\rho_c(t)}$$

the Friedmann equation as a sum rule,

$$\Omega_m + \Omega_r + \Omega_\Lambda + \Omega_k = 1$$

and as an expansion history,

$$E^2(z) \equiv \frac{H^2(z)}{H_0^2} = \Omega_{r,0}(1+z)^4 + \Omega_{m,0}(1+z)^3 + \Omega_{k,0}(1+z)^2 + \Omega_{\Lambda,0}$$

## conventions and symbols

| symbol | meaning |
|---|---|
| $\rho_m$, $\rho_r$ | mass density of non-relativistic matter and of radiation |
| $\rho_\Lambda \equiv \Lambda c^2/(8\pi G)$ | mass density equivalent of the cosmological constant |
| $\Omega_k \equiv -kc^2/(a^2H^2)$ | curvature parameter, a definition and not a density |
| subscript $0$ | evaluated today, $a_0 = 1$ |
| $h$ | $H_0/(100$ km s$^{-1}$ Mpc$^{-1})$ |

## inputs

1. Friedmann with $\Lambda$, from [[Friedmann equation Newtonian shell]],
$$H^2 = \frac{8\pi G}{3}\left(\rho_m + \rho_r\right) - \frac{k c^2}{a^2} + \frac{\Lambda c^2}{3}$$
2. the scalings from [[Continuity equation cosmology]], valid when the components do not exchange energy. $\rho_m = \rho_{m,0}a^{-3}$, $\rho_r = \rho_{r,0}a^{-4}$, $\rho_\Lambda$ constant.
3. $1 + z = 1/a$ from [[Cosmological redshift derivation]].

## derivation

### step 1 - the critical density

set $k = 0$ and absorb $\Lambda$ into the total density. Friedmann then reads $H^2 = \frac{8\pi G}{3}\rho_{\rm tot}$. the total density for which the universe is spatially flat at a given expansion rate is therefore

$$\boxed{\,\rho_c(t) = \frac{3 H^2(t)}{8\pi G}\,}$$

it is a function of time through $H(t)$. it is not a constant of nature.

today, with $H_0 = 100\,h$ km s$^{-1}$ Mpc$^{-1} = 3.241 \times 10^{-18}\,h$ s$^{-1}$,

$$\rho_{c,0} = 1.878 \times 10^{-29}\, h^2\ \text{g cm}^{-3} = 8.53 \times 10^{-30}\ \text{g cm}^{-3} \quad (h = 0.674)$$

equivalent to $4.8$ GeV m$^{-3}$, about $5$ proton masses per cubic metre, or $2.78 \times 10^{11}\,h^2\, M_\odot$ Mpc$^{-3}$.

### step 2 - divide Friedmann by $H^2$

$$1 = \frac{8\pi G}{3H^2}\rho_m + \frac{8\pi G}{3H^2}\rho_r - \frac{kc^2}{a^2H^2} + \frac{\Lambda c^2}{3H^2}$$

### step 3 - name each term

$$\Omega_m \equiv \frac{\rho_m}{\rho_c}, \qquad \Omega_r \equiv \frac{\rho_r}{\rho_c}, \qquad \Omega_\Lambda \equiv \frac{\rho_\Lambda}{\rho_c} = \frac{\Lambda c^2}{3 H^2}, \qquad \Omega_k \equiv -\frac{k c^2}{a^2 H^2}$$

$$\boxed{\, \Omega_m(t) + \Omega_r(t) + \Omega_\Lambda(t) + \Omega_k(t) = 1 \,}$$

valid at every time, with all four evaluated at that same time.

### step 4 - the link between density and geometry

write $\Omega_{\rm tot} \equiv \Omega_m + \Omega_r + \Omega_\Lambda$. then

$$\Omega_{\rm tot} - 1 = -\Omega_k = \frac{k c^2}{a^2 H^2}$$

| density | sign of $k$ | geometry |
|---|---|---|
| $\rho_{\rm tot} > \rho_c$ | $k > 0$ | closed |
| $\rho_{\rm tot} = \rho_c$ | $k = 0$ | flat |
| $\rho_{\rm tot} < \rho_c$ | $k < 0$ | open |

since $a^2H^2 > 0$, the sign of $\Omega_{\rm tot} - 1$ can never change. a universe that starts flat stays flat. evaluating today gives the curvature radius $R_0 = 1/\sqrt{|k|} = (c/H_0)/\sqrt{|\Omega_{k,0}|}$.

### step 5 - expansion history

multiply and divide each density term by its present value, then by $H_0^2$.

$$\frac{8\pi G}{3}\rho_m = \frac{8\pi G}{3}\rho_{m,0}\,a^{-3} = H_0^2\,\Omega_{m,0}\,a^{-3}$$

and similarly $\frac{8\pi G}{3}\rho_r = H_0^2\Omega_{r,0}a^{-4}$, $\frac{\Lambda c^2}{3} = H_0^2\Omega_{\Lambda,0}$, $-\frac{kc^2}{a^2} = H_0^2\Omega_{k,0}a^{-2}$. the last one uses the definition of $\Omega_k$ at $t_0$, $-kc^2 = \Omega_{k,0}H_0^2$.

$$H^2 = H_0^2\left[\Omega_{r,0}a^{-4} + \Omega_{m,0}a^{-3} + \Omega_{k,0}a^{-2} + \Omega_{\Lambda,0}\right]$$

with $a = 1/(1 + z)$,

$$\boxed{\, E^2(z) = \frac{H^2(z)}{H_0^2} = \Omega_{r,0}(1+z)^4 + \Omega_{m,0}(1+z)^3 + \Omega_{k,0}(1+z)^2 + \Omega_{\Lambda,0} \,}$$

each term is $(1 + z)^{3(1 + w_i)}$ with $w = 1/3,\ 0,\ -1/3,\ -1$.

### step 6 - how each $\Omega_i$ evolves

$\Omega_i(z) = \rho_i(z)/\rho_c(z)$, and both numerator and denominator change.

$$\Omega_m(z) = \frac{\Omega_{m,0}(1+z)^3}{E^2(z)}, \qquad \Omega_\Lambda(z) = \frac{\Omega_{\Lambda,0}}{E^2(z)}, \qquad \Omega_k(z) = \frac{\Omega_{k,0}(1+z)^2}{E^2(z)}$$

at high $z$ the matter and radiation terms dominate $E^2$, so $\Omega_k(z) \to 0$ and $\Omega_\Lambda(z) \to 0$. the early universe is always close to flat and matter- or radiation-dominated, whatever the values today. turned around, a small $|\Omega_k|$ today requires an extremely small one early on, which is the flatness problem addressed in [[Slow roll inflation]].

## checks

- **$z = 0$.** $E(0) = 1$ reproduces the sum rule of step 3.
- **flat matter only.** $E = (1 + z)^{3/2}$, Einstein-de Sitter.
- **$\Lambda$ only.** $E = 1$, $H$ constant, de Sitter.
- **dimensions.** every $\Omega$ is dimensionless.

## numbers I should know

Planck 2018 base $\Lambda$CDM.

- $H_0 = 67.4 \pm 0.5$ km s$^{-1}$ Mpc$^{-1}$. the local distance ladder gives about $73$. the disagreement is the Hubble tension.
- $\Omega_{m,0} = 0.315$, of which $\Omega_b h^2 = 0.0224$ ($\Omega_b \approx 0.049$) and $\Omega_c h^2 = 0.120$ ($\Omega_c \approx 0.265$).
- $\Omega_{\Lambda,0} = 0.685$.
- $\Omega_\gamma h^2 = 2.47 \times 10^{-5}$ from $T_0 = 2.7255$ K. with three neutrino species treated as massless, $\Omega_{r,0} h^2 = 4.18 \times 10^{-5}$ and $\Omega_{r,0} \approx 9.2 \times 10^{-5}$.
- $\Omega_{k,0} = 0.001 \pm 0.002$, consistent with flat.
- Hubble time $1/H_0 = 14.5$ Gyr, Hubble distance $c/H_0 = 4450$ Mpc.

## the equality epochs

matter-radiation equality, $\Omega_{m,0}(1 + z)^3 = \Omega_{r,0}(1 + z)^4$.

$$1 + z_{\rm eq} = \frac{\Omega_{m,0}}{\Omega_{r,0}} \approx \frac{0.315}{9.2 \times 10^{-5}} \approx 3400$$

matter-$\Lambda$ equality, $\Omega_{m,0}(1 + z)^3 = \Omega_{\Lambda,0}$.

$$1 + z_{m\Lambda} = \left(\frac{\Omega_{\Lambda,0}}{\Omega_{m,0}}\right)^{1/3} \approx 1.30 \quad\Rightarrow\quad z_{m\Lambda} \approx 0.30$$

## the age of the universe as an application

from $dt = -dz/[(1 + z)H]$ (see [[Cosmological distances derivation]]),

$$t_0 = \frac{1}{H_0}\int_0^\infty\frac{dz}{(1 + z)\,E(z)}$$

for Einstein-de Sitter this is $\frac{2}{3H_0} = 9.7$ Gyr, too young for the oldest stars. for flat $\Lambda$CDM it is $0.95/H_0 = 13.8$ Gyr.

## questions I should be ready for

- *is $\rho_c$ a constant?* no, it follows $H^2(t)$. only $\rho_{c,0}$ is a fixed number.
- *is $\Omega_k$ a density?* no. it is defined so that the sum rule closes. it scales like a fluid with $w = -1/3$ but curvature is geometry, not matter.
- *can the sign of $k$ change in time?* no, $k$ is a constant. $\Omega_k(t)$ changes in magnitude but not in sign.
- *why quote $\Omega_b h^2$ and not $\Omega_b$?* $\Omega_b h^2 \propto \rho_{b,0}$ is the physical density, which is what the CMB and BBN measure. dividing by $h^2$ imports the uncertainty on $H_0$.
- *does $k > 0$ still mean recollapse?* only without $\Lambda$. with $\Lambda > 0$ a closed universe can expand forever.

## board summary (60 seconds)

flat universe needs $\rho = \rho_c = 3H^2/(8\pi G)$. divide Friedmann by $H^2$ and define $\Omega_i = \rho_i/\rho_c$, $\Omega_\Lambda = \Lambda c^2/(3H^2)$, $\Omega_k = -kc^2/(a^2H^2)$. sum rule $\Omega_m + \Omega_r + \Omega_\Lambda + \Omega_k = 1$. insert $\rho_i \propto a^{-3(1+w_i)}$ and $a = 1/(1+z)$, get $E^2(z) = \Omega_{r,0}(1+z)^4 + \Omega_{m,0}(1+z)^3 + \Omega_{k,0}(1+z)^2 + \Omega_{\Lambda,0}$.

## see also

- [[Friedmann equation Newtonian shell]] is the equation being rewritten.
- [[Continuity equation cosmology]] gives the $\rho_i(a)$ scalings.
- [[Cosmological distances derivation]] uses $E(z)$ in $\int dz/E$.
- [[Baryon to photon ratio]] uses $\rho_{c,0}$ and $\Omega_b h^2$.
