---
layout: "default"
title: "Luminosity distance"
---
the **luminosity distance** $d_L$ relates the **intrinsic luminosity** $L$ of a source to its **observed flux** $F$, via the inverse-square law:
$$F = \frac{L}{4\pi d_L^2}$$

essential for using SN Ia as standard candles in the Hubble diagram.

## the formula

for a flat universe:
$$\boxed{\, d_L(z) = d_C(z)(1 + z) = (1+z)\frac{c}{H_0}\int_0^z \frac{dz'}{\sqrt{\Omega_m(1+z')^3 + \Omega_\Lambda}} \,}$$

(approximating, ignoring $\Omega_r, \Omega_K$ for late-universe cosmology.)

## the two factors of $(1+z)$

compared to Newtonian $d \propto cz/H_0$, $d_L$ has **two extra factors of $(1+z)$**:

1. **photon energy redshift**: each photon's energy is reduced by $1/(1+z)$. so flux $\propto E$ is reduced by this factor.
2. **photon arrival rate dilution**: photons arrive at a rate reduced by $1/(1+z)$ (cosmological time dilation). flux is energy/time, so reduced by another $(1+z)$.

altogether, observed flux is $1/(1+z)^2$ times what naively-expected, and $d_L = d_C(1+z)$ in the flat case (since $L/(4\pi F) \propto 1/F$, giving $d_L^2 \propto (1+z)^2 d_C^2$).

## benchmark values in $\Lambda$CDM

| $z$ | $d_L$ (Mpc) | $\mu = m - M$ |
|---|---|---|
| 0.1 | 480 | 38.4 |
| 0.5 | 2.91 Gpc | 42.3 |
| 1.0 | 6.64 Gpc | 44.1 |
| 2.0 | 15.5 Gpc | 45.9 |
| 3.0 | 25.6 Gpc | 47.0 |
| 5.0 | 47.1 Gpc | 48.3 |
| 10.0 | 104 Gpc | 50.1 |

distance modulus $\mu = 5\log_{10}(d_L/10\,\text{pc}) = m - M$. so a SN Ia at $z = 1$ with $M = -19.3$ has apparent magnitude $m \approx 24.8$.

## the SN Ia Hubble diagram

plot $\mu(z)$ for SN Ia:
- low $z$ ($z \lesssim 0.1$): linear, gives $H_0$.
- moderate $z$ ($0.1 \lesssim z \lesssim 1$): deviation from linear shows $\Omega_m, \Omega_\Lambda$.

at $z \sim 0.5$ to $1$, SN Ia are **fainter** than expected for a matter-only universe. the data prefer $\Omega_m \approx 0.3$, $\Omega_\Lambda \approx 0.7$, the smoking-gun discovery of accelerated expansion (Perlmutter, Riess, Schmidt 1998).

see [[Type Ia supernovae as standard candles]] and [[Supernova Hubble diagram]].

## relation to other distances

flat universe:
$$d_L = d_A(1+z)^2 = d_C(1+z)$$

so $d_L \ge d_C \ge d_A$, with equality at $z = 0$.

surface brightness $\sigma = $ flux per solid angle $\propto F/\theta^2 = (L/d_L^2)/(D^2/d_A^2) = (L/D^2)/d_L^2 \cdot d_A^2 = (L/D^2)\cdot 1/(1+z)^4$. the **$(1+z)^{-4}$ surface brightness dimming**, brutal at high $z$.

see [[Surface brightness dimming]].

## the derivation, step by step

assumptions: a source of bolometric luminosity $L$ at comoving coordinate $\chi$, emitting isotropically, in a Robertson-Walker universe with $a_0 = 1$.

1. **the area**. today the photons emitted at $t_e$ are spread over a sphere centered on the source that passes through me. its proper area is $4\pi d_M^2$, with $d_M = S_k(\chi)$ the transverse comoving distance. in a flat universe $d_M = d_C$.
2. **the energy of each photon**. a photon emitted with $h\nu_e$ arrives with $h\nu_0 = h\nu_e/(1+z)$.
3. **the arrival rate**. two photons emitted $\delta t_e$ apart arrive $\delta t_0 = (1+z)\,\delta t_e$ apart, by the same stretching that redshifts the wavelength.

the energy received per unit time and area is then

$$F = \frac{L}{4\pi d_M^2}\cdot\frac{1}{1+z}\cdot\frac{1}{1+z}$$

comparing with the definition $F = L/(4\pi d_L^2)$:

$$d_L = (1+z)\, d_M$$

this is for the **bolometric** flux. in a fixed band I also need the K-correction, because the filter sees a different part of the rest-frame spectrum. see [[K-correction]].

## closed forms and the low-redshift series

- **any model, low $z$**:

$$d_L \simeq \frac{c}{H_0}\left[z + \frac{1 - q_0}{2}\, z^2 + \dots\right]$$

the first term is the Hubble law. the second carries the deceleration parameter, which is why supernovae at $z \sim 0.5$ measure acceleration.

- **Einstein-de Sitter**: $d_L = \dfrac{2c}{H_0}(1+z)\left[1 - \dfrac{1}{\sqrt{1+z}}\right]$
- **empty (Milne) universe**: $d_L = \dfrac{c}{H_0}\, z\left(1 + \dfrac{z}{2}\right)$

## worked example - how much fainter is a supernova at z = 0.5

with $c/H_0 = 4448$ Mpc:

- $\Lambda$CDM: $d_L = 2910$ Mpc.
- empty universe: $d_L = 4448 \times 0.5 \times 1.25 = 2780$ Mpc.
- Einstein-de Sitter: $d_L = 2 \times 4448 \times 1.5 \times (1 - 0.8165) = 2449$ Mpc.

the difference in distance modulus is $\Delta\mu = 5\log_{10}(d_{L,1}/d_{L,2})$:

- $\Lambda$CDM against empty: $5\log_{10}(2910/2780) \approx 0.10$ mag.
- $\Lambda$CDM against Einstein-de Sitter: $5\log_{10}(2910/2449) \approx 0.37$ mag.

so the whole discovery rests on a few tenths of a magnitude. this is why the dispersion of SN Ia after standardization, about 0.15 mag, and the control of dust and evolution matter so much.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

- **Luminosity distance**. "Luminosity distance DL is defined in terms of the relationship between the absolute magnitude M and apparent magnitude m of an astronomical object. M = m − 5 log 10 ⁡ D L 10 pc $M=m-5\log _{10}{\frac {D_{L}}{10\,{\text{pc}}}}\!\,$ which gives: D L = 10 ( m − M ) 5 + 1 $D_{L}=10^{ {\frac {(m-M)}{5}}+1}$ where DL is measured in parsecs." ([Wikipedia](https://en.wikipedia.org/wiki/Luminosity_distance))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- 03_Zettel/Theory/Cosmological distances
- [[Radial comoving distance]]
- [[Angular diameter distance]]
- [[Surface brightness dimming]]
- [[Distance modulus]]
- [[Type Ia supernovae as standard candles]]
- [[Supernova Hubble diagram]]
- [[K-correction]]
- [[Hubble law]]
- [[Observational_Cosmology_MOC]]



## Linked References

- [[Angular diameter distance]]
- [[Comoving vs proper coordinates]]
- [[Cosmology calculator - how to use H0 Omega_m Omega_Lambda to get dL dA t_lookback]]
- [[Distance ladder derivations]]
- [[Distance modulus]]
- [[Galaxy number counts N(m)]]
- [[Hubble flow distances]]
- [[K-correction in optical vs sub-mm]]
- [[K-correction]]
- [[Radial comoving distance]]
- [[Redshift distribution of flux-limited samples]]
- [[Specific intensity flux luminosity]]
- [[Supernova Hubble diagram]]
- [[Surface brightness dimming]]
- [[Observational_Cosmology_MOC]]


