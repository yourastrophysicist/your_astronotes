---
layout: default
title: "Relativistic number and energy density"
---
## what I'm deriving

for a species with $g$ internal states in equilibrium at $T \gg m$ and $\mu = 0$,

| | bosons | fermions |
|---|---|---|
| number density $n$ | $\dfrac{\zeta(3)}{\pi^2}\, g\, T^3$ | $\dfrac{3}{4}\dfrac{\zeta(3)}{\pi^2}\, g\, T^3$ |
| energy density $\rho$ | $\dfrac{\pi^2}{30}\, g\, T^4$ | $\dfrac{7}{8}\dfrac{\pi^2}{30}\, g\, T^4$ |
| pressure $P$ | $\rho/3$ | $\rho/3$ |

and the total radiation energy density

$$\rho_R(T) = \frac{\pi^2}{30}\, g_*(T)\, T^4$$

natural units $c = \hbar = k_B = 1$. in this file $P$ is the pressure and $p$ the momentum.

## inputs

the [[Equilibrium distributions]] $f(p) = \left[e^{(E - \mu)/T} \pm 1\right]^{-1}$ and the definitions of the densities as moments of $f$.

$$n = g\int\frac{d^3p}{(2\pi)^3}\, f(p), \qquad \rho = g\int\frac{d^3p}{(2\pi)^3}\, E(p)\, f(p), \qquad P = g\int\frac{d^3p}{(2\pi)^3}\, \frac{p^2}{3E(p)}\, f(p)$$

the pressure formula comes from kinetic theory. the momentum flux through a surface is $\langle p_x v_x\rangle$ summed over particles, with $v = p/E$ and an isotropic average $\langle p_xv_x\rangle = \frac13 p\,v$.

## derivation

### step 1 - angular integration

$f$ depends only on $|\vec p| = p$, so $d^3p = 4\pi p^2\,dp$.

$$n = \frac{g}{2\pi^2}\int_0^\infty p^2 f(p)\, dp, \qquad \rho = \frac{g}{2\pi^2}\int_0^\infty p^2 E(p) f(p)\, dp$$

### step 2 - relativistic limit and dimensionless variable

for $T \gg m$ almost all particles have $p \sim T \gg m$, so $E \approx p$. set $\mu = 0$ and substitute $x = p/T$, $dp = T\,dx$.

$$n = \frac{g\,T^3}{2\pi^2}\int_0^\infty\frac{x^2}{e^x \pm 1}\,dx, \qquad \rho = \frac{g\,T^4}{2\pi^2}\int_0^\infty\frac{x^3}{e^x \pm 1}\,dx$$

the powers $T^3$ and $T^4$ follow from dimensional analysis alone. the integrals fix only the numerical coefficients.

### step 3 - the Bose integral

for $x > 0$ expand $\dfrac{1}{e^x - 1} = \dfrac{e^{-x}}{1 - e^{-x}} = \sum_{j=1}^{\infty}e^{-jx}$ and integrate term by term with $u = jx$.

$$I_B(s) \equiv \int_0^\infty\frac{x^{s-1}}{e^x - 1}\,dx = \sum_{j=1}^{\infty}\int_0^\infty x^{s-1}e^{-jx}\,dx = \sum_{j=1}^{\infty}\frac{1}{j^s}\int_0^\infty u^{s-1}e^{-u}\,du = \zeta(s)\,\Gamma(s)$$

the needed values are $\Gamma(3) = 2$, $\Gamma(4) = 6$, $\zeta(3) \approx 1.202$, $\zeta(4) = \pi^4/90$.

$$I_B(3) = 2\zeta(3) \approx 2.404, \qquad I_B(4) = \frac{\pi^4}{15}$$

### step 4 - the Fermi integral from the Bose one

use the identity

$$\frac{1}{e^x + 1} = \frac{1}{e^x - 1} - \frac{2}{e^{2x} - 1}$$

(check by putting the right side over the common denominator $e^{2x} - 1$, the numerator is $e^x + 1 - 2 = e^x - 1$). in the second term substitute $y = 2x$.

$$I_F(s) \equiv \int_0^\infty\frac{x^{s-1}}{e^x + 1}\,dx = I_B(s) - 2\cdot 2^{-s}I_B(s) = \left(1 - 2^{1-s}\right)I_B(s)$$

for $s = 3$ the factor is $3/4$. for $s = 4$ it is $7/8$.

### step 5 - bosons

$$n_b = \frac{g\,T^3}{2\pi^2}\cdot 2\zeta(3), \qquad \rho_b = \frac{g\,T^4}{2\pi^2}\cdot\frac{\pi^4}{15}$$

$$\boxed{\, n_b = \frac{\zeta(3)}{\pi^2}\, g\, T^3, \qquad \rho_b = \frac{\pi^2}{30}\, g\, T^4 \,}$$

### step 6 - fermions

$$\boxed{\, n_f = \frac{3}{4}\cdot\frac{\zeta(3)}{\pi^2}\, g\, T^3, \qquad \rho_f = \frac{7}{8}\cdot\frac{\pi^2}{30}\, g\, T^4 \,}$$

### step 7 - pressure

with $E = p$ the pressure integrand is $p^2/(3E) = E/3$, exactly one third of the energy integrand.

$$P = \frac{\rho}{3}$$

for both statistics. this is $w = 1/3$.

### step 8 - mean energy per particle

$$\frac{\rho_b}{n_b} = \frac{\pi^4}{30\,\zeta(3)}\,T \approx 2.70\,T, \qquad \frac{\rho_f}{n_f} = \frac{7\pi^4}{180\,\zeta(3)}\,T \approx 3.15\,T$$

## defining $g_*$

sum over all relativistic species. species $i$ may have its own temperature $T_i$ if it has decoupled. factor out the photon temperature $T$.

$$\rho_R = \sum_{\rm bosons}\frac{\pi^2}{30}g_iT_i^4 + \sum_{\rm fermions}\frac78\frac{\pi^2}{30}g_iT_i^4 \equiv \frac{\pi^2}{30}\,g_*(T)\,T^4$$

$$\boxed{\, g_*(T) = \sum_{\text{bosons}} g_i \left(\frac{T_i}{T}\right)^4 + \frac{7}{8} \sum_{\text{fermions}} g_i \left(\frac{T_i}{T}\right)^4 \,}$$

only species with $m_i \ll T_i$ are included. a species with $m \gg T$ is suppressed by $e^{-m/T}$ (next section) and drops out, so $g_*$ decreases in steps as the universe cools.

### counting $g$

| species | $g$ | reason |
|---|---|---|
| photon | $2$ | two polarisations |
| $e^-$, $e^+$ (same for $\mu^\pm$) | $2 + 2 = 4$ | two spin states each |
| neutrinos | $2$ per flavour, $6$ in total | one helicity for $\nu$, one for $\bar\nu$ |
| gluons | $16$ | $8$ colours times $2$ polarisations |
| each quark flavour | $12$ | $3$ colours, $2$ spins, particle and antiparticle |
| $W^\pm$, $Z$ | $9$ | $3$ particles times $3$ polarisations |
| Higgs | $1$ | |

### $g_*$ at key epochs

| temperature | relativistic species | $g_*$ |
|---|---|---|
| $T \gtrsim 200$ GeV | all of the Standard Model, $28$ bosonic and $90$ fermionic states | $28 + \frac78\cdot 90 = 106.75$ |
| $1$ GeV $\gtrsim T \gtrsim 200$ MeV | $\gamma$, gluons, $u\,d\,s$ quarks, $e^\pm$, $\mu^\pm$, $3\nu$ | $18 + \frac78\cdot 50 = 61.75$ |
| $100$ MeV $\gtrsim T \gtrsim$ few MeV, after the QCD transition | $\gamma$, $e^\pm$, $3\nu$, with $\mu^\pm$ and pions near the top of the range | $10.75$ to about $17$ |
| few MeV $\gtrsim T \gtrsim 0.5$ MeV | $\gamma$, $e^\pm$, $3\nu$ | $2 + \frac78(4 + 6) = 10.75$ |
| $T \ll 0.5$ MeV | $\gamma$, and $3\nu$ at $T_\nu = (4/11)^{1/3}T$ | $2 + \frac78\cdot 6\cdot\left(\frac{4}{11}\right)^{4/3} = 3.36$ |

the last line uses the [[Neutrino temperature ratio]]. it treats neutrinos as massless, which is right for the radiation era and not for today.

## the non-relativistic limit, for contrast

for $T \ll m$ and $m - \mu \gg T$ the distribution is $f \approx e^{-(E - \mu)/T}$ with $E \approx m + p^2/2m$.

$$n = \frac{g}{2\pi^2}e^{-(m - \mu)/T}\int_0^\infty p^2e^{-p^2/(2mT)}\,dp$$

the Gaussian integral is $\int_0^\infty p^2e^{-\alpha p^2}dp = \frac{\sqrt\pi}{4}\alpha^{-3/2}$ with $\alpha = 1/(2mT)$.

$$\boxed{\, n = g\left(\frac{mT}{2\pi}\right)^{3/2}e^{-(m - \mu)/T}, \qquad \rho \approx m\,n + \frac32 nT, \qquad P = nT \ll \rho \,}$$

with $\mu = 0$ the abundance is exponentially small. a massive species in equilibrium annihilates away when $T$ falls below $m$, unless it decouples first or carries a conserved asymmetry.

## entropy and $g_{*s}$

for a relativistic gas with $\mu = 0$ the entropy density is $s = (\rho + P)/T = 4\rho/(3T)$, proved in [[Entropy conservation cosmology]]. summing over species,

$$s = \frac{2\pi^2}{45}\, g_{*s}(T)\, T^3, \qquad g_{*s}(T) = \sum_{\rm bosons} g_i \left(\frac{T_i}{T}\right)^3 + \frac{7}{8}\sum_{\rm fermions} g_i \left(\frac{T_i}{T}\right)^3$$

the power is $3$ here and $4$ in $g_*$. the two coincide while all species share one temperature and differ after neutrino decoupling, $g_* = 3.36$ against $g_{*s} = 3.91$.

## checks

- **photons.** $g = 2$ gives $\rho_\gamma = \frac{\pi^2}{15}T^4$. restoring units, $\rho_\gamma c^2 = \frac{\pi^2k_B^4}{15\hbar^3c^3}T^4 = a_{\rm rad}T^4$ with $a_{\rm rad} = 7.566 \times 10^{-16}$ J m$^{-3}$ K$^{-4}$, the Stefan-Boltzmann law.
- **CMB today.** $n_\gamma = \frac{2\zeta(3)}{\pi^2}T_0^3 = 410.7$ cm$^{-3}$ for $T_0 = 2.7255$ K.
- **why fermions have less.** $1/(e^x + 1) < 1/(e^x - 1)$ for every $x$. the difference is larger at small $x$, so the number integral (weighted to lower $x$) is reduced more than the energy integral, $3/4$ against $7/8$.
- **$w = 1/3$.** consistent with $\rho_R \propto a^{-4}$ and $T \propto 1/a$.

## questions I should be ready for

- *where do $\zeta$ and $\Gamma$ come from?* from expanding $1/(e^x - 1)$ as a geometric series in $e^{-x}$ and integrating each term.
- *where does $7/8$ come from?* from $1 - 2^{1-s}$ at $s = 4$, via the identity relating the Fermi and Bose denominators.
- *why can I set $\mu = 0$?* photons have $\mu = 0$ exactly. for other species $\mu/T$ is of order the particle-antiparticle asymmetry over the photon number, about $10^{-9}$.
- *do protons and neutrons count in $g_*$ at $1$ MeV?* no. $m_N \approx 940$ MeV $\gg T$, they are non-relativistic and their energy density is negligible next to radiation at that time.
- *why does $g_*$ multiply $T^4$ with the photon temperature?* convention. the factors $(T_i/T)^4$ absorb the difference.

## board summary (60 seconds)

$n$ and $\rho$ are moments of $f$. angular integral gives $g/(2\pi^2)\int p^2\ldots dp$. set $E = p$, $\mu = 0$, $x = p/T$. Bose integral is $\Gamma(s)\zeta(s)$ by geometric series, Fermi integral is $(1 - 2^{1-s})$ times that. $s = 3$ for $n$, $s = 4$ for $\rho$. so $\rho_b = (\pi^2/30)gT^4$, fermions get $7/8$, and on $n$ they get $3/4$. $P = \rho/3$. sum over species defines $g_*$.

## see also

- [[Equilibrium distributions]] is the input.
- [[Entropy conservation cosmology]] uses $s = (\rho + P)/T$.
- [[Temperature time relation]] uses $\rho_R$ in the Friedmann equation.
- [[Saha equation derivation]] uses the non-relativistic density.
