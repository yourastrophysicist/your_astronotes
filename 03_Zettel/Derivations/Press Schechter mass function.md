---
layout: default
title: "Press Schechter mass function"
---
## what I'm deriving

the comoving number density of dark matter halos per unit mass,

$$\frac{dn}{dM} = \sqrt{\frac{2}{\pi}}\; \frac{\bar\rho}{M^2}\; \frac{\delta_c}{\sigma(M)}\; \left|\frac{d\ln\sigma}{d\ln M}\right|\; \exp\left[-\frac{\delta_c^2}{2 \sigma^2(M)}\right]$$

## conventions and symbols

| symbol | meaning |
|---|---|
| $\delta(\vec x)$ | linear matter density contrast, extrapolated to the epoch of interest with linear theory |
| $R$, $M$ | smoothing radius (comoving) and the mass it contains, $M = \frac{4\pi}{3}\bar\rho R^3$ |
| $\bar\rho$ | mean comoving matter density, constant in time |
| $\delta_M(\vec x)$ | $\delta$ smoothed on the scale $M$ |
| $\sigma(M)$ | rms of $\delta_M$ |
| $\delta_c$ | collapse threshold, $1.686$ from [[Spherical collapse delta_c]] |
| $\nu \equiv \delta_c/\sigma(M)$ | peak height |
| $F(>M)$ | fraction of mass in halos more massive than $M$ |
| $dn/dM$ | number of halos per comoving volume per unit mass |
| $P(k)$ | linear matter power spectrum |

## assumptions

1. the linear density field is a Gaussian random field with zero mean, as predicted by [[Slow roll inflation]].
2. collapse is described by the spherical model. a region collapses when its linearly extrapolated contrast reaches $\delta_c$.
3. **the Press-Schechter ansatz.** the fraction of mass in halos of mass greater than $M$ equals the probability that the field smoothed on scale $M$ exceeds $\delta_c$ (times a factor of $2$, discussed in step 4).

## derivation

### step 1 - smooth the field

$$\delta_M(\vec x) = \int d^3x'\;W(|\vec x - \vec x'|; R)\;\delta(\vec x')$$

with $W$ a window normalised to unit integral, usually a top hat of radius $R$. in Fourier space a convolution is a product, $\delta_M(\vec k) = \tilde W(kR)\,\delta(\vec k)$, with $\tilde W(x) = 3(\sin x - x\cos x)/x^3$ for the top hat.

### step 2 - the variance

with $\langle\delta(\vec k)\delta^*(\vec k')\rangle = (2\pi)^3\delta_D(\vec k - \vec k')P(k)$,

$$\sigma^2(M) \equiv \langle\delta_M^2\rangle = \int\frac{d^3k}{(2\pi)^3}\,P(k)\,\tilde W^2(kR) = \int_0^\infty\frac{dk}{k}\;\frac{k^3P(k)}{2\pi^2}\;\tilde W^2(kR)$$

the window cuts off modes with $k \gtrsim 1/R$. for a cold dark matter spectrum $\sigma(M)$ decreases monotonically with $M$, since smoothing over a larger region averages out more of the fluctuations. the normalisation is quoted as $\sigma_8 \equiv \sigma(R = 8\,h^{-1}\text{Mpc}) \approx 0.81$ today.

for a power law $P \propto k^n$, substituting $u = kR$ gives $\sigma^2 \propto R^{-(n+3)}$, so

$$\sigma(M) \propto M^{-(n+3)/6}$$

time dependence. in linear theory $\sigma(M, z) = \sigma(M, 0)\,D(z)$ with $D$ the growth factor normalised to $D(0) = 1$ ([[Growth factor matter era]]).

### step 3 - one-point probability

a linear operation on a Gaussian field gives a Gaussian field. at any point,

$$p(\delta_M)\,d\delta_M = \frac{1}{\sqrt{2\pi}\,\sigma(M)}\exp\left[-\frac{\delta_M^2}{2\sigma^2(M)}\right]d\delta_M$$

the probability of exceeding the threshold is an integral over $\delta_M$ from $\delta_c$ to infinity. substitute $u = \delta_M/(\sqrt2\,\sigma)$.

$$\mathcal P(\delta_M > \delta_c) = \int_{\delta_c}^\infty p(\delta_M)\,d\delta_M = \frac{1}{\sqrt\pi}\int_{\nu/\sqrt2}^\infty e^{-u^2}du = \frac{1}{2}\,\text{erfc}\left(\frac{\nu}{\sqrt 2}\right)$$

with $\text{erfc}(x) \equiv \frac{2}{\sqrt\pi}\int_x^\infty e^{-u^2}du$.

### step 4 - the ansatz and the factor of 2

Press and Schechter identify this probability with the mass fraction in objects of mass greater than $M$. the reasoning is that a point where $\delta_M > \delta_c$ sits in a region of mass $M$ that has collapsed, and it may also be part of a larger collapsed region.

there is a problem. as $M \to 0$, $\sigma \to \infty$ and $\nu \to 0$, so $\mathcal P \to \frac12$. only half the mass would ever be in halos, because a Gaussian field is negative half of the time. yet in a hierarchical universe all mass should be in some collapsed object at small enough scale. Press and Schechter multiplied by $2$.

$$F(>M) = 2\,\mathcal P = \text{erfc}\left(\frac{\nu}{\sqrt2}\right)$$

the justification came later with excursion set theory (Bond, Cole, Efstathiou and Kaiser 1991). a point with $\delta_M < \delta_c$ at scale $M$ may exceed $\delta_c$ when smoothed on a larger scale $M' > M$, and should then be counted as part of a halo of mass $M'$ (the cloud-in-cloud problem). following $\delta_M$ at a fixed point as $M$ decreases, it performs a random walk (for a sharp filter in $k$-space), and the fraction of walks that have crossed the barrier $\delta_c$ before reaching scale $M$ is exactly twice the fraction that are above it at $M$. this is the reflection principle.

### step 5 - from the cumulative fraction to the number density

the mass fraction in halos with mass between $M$ and $M + dM$ is $\left|dF/dM\right|dM$. multiply by $\bar\rho$ to get the mass density in such halos and divide by $M$ to get their number density.

$$\frac{dn}{dM} = \frac{\bar\rho}{M}\left|\frac{dF}{dM}\right|$$

### step 6 - differentiate

chain rule, $\dfrac{dF}{dM} = \dfrac{dF}{d\nu}\dfrac{d\nu}{dM}$.

- from $\dfrac{d}{dx}\text{erfc}(x) = -\dfrac{2}{\sqrt\pi}e^{-x^2}$ with $x = \nu/\sqrt2$,
$$\frac{dF}{d\nu} = -\frac{2}{\sqrt\pi}\cdot\frac{1}{\sqrt2}\,e^{-\nu^2/2} = -\sqrt{\frac{2}{\pi}}\,e^{-\nu^2/2}$$
- from $\nu = \delta_c/\sigma$ with $\delta_c$ independent of $M$,
$$\frac{d\nu}{dM} = -\frac{\delta_c}{\sigma^2}\frac{d\sigma}{dM} = -\frac{\nu}{\sigma}\frac{d\sigma}{dM} = -\frac{\nu}{M}\frac{d\ln\sigma}{d\ln M}$$

since $d\ln\sigma/d\ln M < 0$, $d\nu/dM > 0$ and $dF/dM < 0$, as expected for a cumulative fraction. taking the absolute value,

$$\left|\frac{dF}{dM}\right| = \sqrt{\frac{2}{\pi}}\;\frac{\nu}{M}\;\left|\frac{d\ln\sigma}{d\ln M}\right|\;e^{-\nu^2/2}$$

### step 7 - result

$$\boxed{\, \frac{dn}{dM} = \sqrt{\frac{2}{\pi}}\; \frac{\bar\rho}{M^2}\; \frac{\delta_c}{\sigma(M)}\; \left|\frac{d\ln\sigma}{d\ln M}\right|\; \exp\left[-\frac{\delta_c^2}{2 \sigma^2(M)}\right] \,}$$

a compact form. the mass fraction per logarithmic interval of $\nu$ is universal,

$$\nu f(\nu) \equiv \frac{M^2}{\bar\rho}\frac{dn}{dM}\left|\frac{d\ln M}{d\ln\nu}\right| = \sqrt{\frac{2}{\pi}}\;\nu\,e^{-\nu^2/2}$$

all dependence on cosmology, redshift and power spectrum enters through $\nu(M, z) = \delta_c/[\sigma(M)D(z)]$.

## shape of the mass function

for a power-law spectrum, $\sigma = \delta_c\,(M/M_*)^{-\alpha}$ with $\alpha = (n + 3)/6$, so $\nu = (M/M_*)^\alpha$ and

$$\frac{dn}{dM} = \sqrt{\frac{2}{\pi}}\;\alpha\;\frac{\bar\rho}{M_*^2}\left(\frac{M}{M_*}\right)^{\alpha - 2}\exp\left[-\frac12\left(\frac{M}{M_*}\right)^{2\alpha}\right]$$

- $M \ll M_*$. a power law, $dn/dM \propto M^{\alpha - 2}$. on galaxy scales $n \approx -2$, $\alpha \approx 1/6$ and the slope is close to $-1.8$. small halos are far more numerous.
- $M \gg M_*$. an exponential cutoff. these halos are rare peaks of the Gaussian field, $\nu \gg 1$.
- the characteristic mass $M_*$ is defined by $\sigma(M_*) = \delta_c$, that is $\nu = 1$. today $M_* \sim 10^{13}\,M_\odot$.

this is the same functional form as the Schechter luminosity function of galaxies, a power law with an exponential cutoff.

## evolution with redshift

$\sigma(M, z) = \sigma(M, 0)D(z)$ decreases toward the past, so $\nu$ at fixed $M$ increases and $M_*(z)$ decreases. massive halos are exponentially rarer at high redshift. structure forms hierarchically, small objects first, larger ones by merging. because of the exponential, the abundance of massive clusters as a function of redshift is a sensitive probe of $\sigma_8$ and $\Omega_m$.

## checks

- **normalisation.** all mass is in halos, $\displaystyle\int_0^\infty M\frac{dn}{dM}dM = \bar\rho\int_0^\infty\left|\frac{dF}{dM}\right|dM = \bar\rho\,[F(>0) - F(>\infty)] = \bar\rho\,[\text{erfc}(0) - \text{erfc}(\infty)] = \bar\rho$. without the factor of $2$ this would give $\bar\rho/2$.
- **dimensions.** $\bar\rho/M^2$ is a number per volume per mass. the remaining factors are dimensionless.
- **sign.** every factor is positive.

## where it works and where it fails

it gives the right shape and the right order of magnitude, with no free parameter, from the linear power spectrum alone. compared with N-body simulations it predicts too many halos below $M_*$ and too few of the rarest massive ones, by factors up to a few.

the main reason is that real collapse is ellipsoidal, not spherical. the Sheth-Tormen form,

$$\nu f(\nu) = A\sqrt{\frac{2a}{\pi}}\left[1 + \left(a\nu^2\right)^{-p}\right]\nu\,e^{-a\nu^2/2}, \qquad a = 0.707,\ p = 0.3,\ A = 0.322$$

corrects this and reduces to Press-Schechter for $a = 1$, $p = 0$, $A = 1/2$. precision work uses fits calibrated on simulations (Tinker et al. 2008).

## questions I should be ready for

- *why is the smoothed field Gaussian?* smoothing is linear, and linear combinations of Gaussian variables are Gaussian.
- *why use the linear field when halos are nonlinear?* the spherical collapse model maps the moment of nonlinear collapse onto a threshold $\delta_c$ for the linear field.
- *where does the factor of $2$ come from?* originally a normalisation fix. properly, from counting trajectories that crossed $\delta_c$ at some larger smoothing scale (excursion sets).
- *where does the exponential come from?* from the Gaussian tail of the probability of a high peak.
- *where does cosmology enter?* through $\sigma(M)$, which depends on $P(k)$ and its amplitude, through $D(z)$, and through $\bar\rho = \Omega_m\rho_c$.
- *why does $\sigma$ decrease with $M$?* more modes are averaged out in a larger window, and for cold dark matter $k^3P(k)$ increases with $k$.

## board summary (60 seconds)

Gaussian linear field, smooth on mass $M$, variance $\sigma^2(M) = \int\frac{dk}{k}\frac{k^3P}{2\pi^2}\tilde W^2(kR)$. probability above threshold $\frac12\text{erfc}(\nu/\sqrt2)$, $\nu = \delta_c/\sigma$. times $2$ for cloud-in-cloud, $F(>M) = \text{erfc}(\nu/\sqrt2)$. $dn/dM = (\bar\rho/M)|dF/dM|$, with $dF/d\nu = -\sqrt{2/\pi}\,e^{-\nu^2/2}$ and $d\nu/dM = -(\nu/M)\,d\ln\sigma/d\ln M$. result $dn/dM = \sqrt{2/\pi}\,(\bar\rho/M^2)\,\nu\,|d\ln\sigma/d\ln M|\,e^{-\nu^2/2}$. power law at low mass, exponential cutoff above $M_*$ where $\sigma = \delta_c$.

## see also

- [[Spherical collapse delta_c]] supplies $\delta_c \approx 1.686$.
- [[Linear perturbation master equation]] governs the linear field.
- [[Growth factor matter era]] supplies $D(z)$.
- [[Meszaros suppression]] shapes the $P(k)$ that enters $\sigma(M)$.
