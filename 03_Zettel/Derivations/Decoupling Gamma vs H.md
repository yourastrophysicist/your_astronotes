---
layout: default
title: "Decoupling Gamma vs H"
---
## what I'm deriving

the criterion for a species to remain in thermal equilibrium with the plasma,

$$\Gamma \equiv n_{\rm target}\,\langle\sigma v\rangle \gtrsim H$$

and decoupling (freeze-out) at the temperature $T_d$ where $\Gamma(T_d) = H(T_d)$. applied to the weak interaction it gives neutrino decoupling at $T_d \sim 1$ MeV. applied to Thomson scattering it gives photon decoupling once the free electron fraction falls to about $10^{-2}$.

natural units $c = \hbar = k_B = 1$ unless stated.

## conventions and symbols

| symbol | meaning | units (natural) |
|---|---|---|
| $\Gamma$ | interaction rate per particle of the species considered | energy |
| $n_{\rm target}$ | number density of the particles it scatters on | energy$^3$ |
| $\sigma$ | cross-section | energy$^{-2}$ |
| $v$ | relative velocity | dimensionless |
| $\langle\ldots\rangle$ | thermal average | |
| $G_F$ | Fermi constant | $1.166 \times 10^{-5}$ GeV$^{-2}$ |
| $M_{\rm Pl}$ | $G^{-1/2}$ | $1.221 \times 10^{19}$ GeV |

## the criterion

### step 1 - the rate per particle

a particle moving with relative speed $v$ through targets of density $n_{\rm target}$ sweeps a volume $\sigma v$ per unit time, so it interacts $n_{\rm target}\sigma v$ times per unit time. averaging over the thermal distribution,

$$\Gamma = n_{\rm target}\langle\sigma v\rangle$$

$1/\Gamma$ is the mean time between interactions.

### step 2 - the expansion timescale

the temperature and the densities change on the timescale $1/H$, since $T \propto 1/a$ gives $|\dot T/T| = H$.

### step 3 - compare

the number of interactions a particle undergoes from time $t$ onward is

$$N_{\rm int}(t) = \int_t^\infty\Gamma(t')\,dt'$$

if $\Gamma \propto T^n$ and the universe is radiation dominated ($T \propto t^{-1/2}$, $H = 1/2t$), then $\Gamma \propto t^{-n/2}$ and for $n > 2$

$$N_{\rm int}(t) = \frac{\Gamma(t)\,t}{n/2 - 1} = \frac{1}{n - 2}\,\frac{\Gamma(t)}{H(t)}$$

so $N_{\rm int} < 1$ once $\Gamma \lesssim H$. after that moment a typical particle never interacts again. this is the precise content of the rule

$$\boxed{\, \Gamma \gg H\ \text{coupled}, \qquad \Gamma \ll H\ \text{decoupled}, \qquad \Gamma(T_d) = H(T_d) \,}$$

it works because rates fall faster with $T$ than $H \propto T^2$ does, so the ratio $\Gamma/H$ decreases monotonically.

## case 1 - neutrino decoupling

### step 4 - weak cross-section

neutrinos are kept in equilibrium by $\nu + e^\pm \leftrightarrow \nu + e^\pm$ and $\nu + \bar\nu \leftrightarrow e^+ + e^-$. for energies $E \ll m_W \approx 80$ GeV the $W$ and $Z$ propagators reduce to a contact interaction of strength $G_F$. the amplitude is proportional to $G_F$, the cross-section to $G_F^2$, and since $G_F^2$ has units of energy$^{-4}$ while $\sigma$ has units of energy$^{-2}$, dimensional analysis with the only available scale $E \sim T$ gives

$$\sigma_w \sim G_F^2\,T^2$$

### step 5 - the rate

targets are relativistic, $n_{\rm target} \sim T^3$, and $v \approx 1$.

$$\Gamma_w \sim G_F^2\,T^5$$

### step 6 - the Hubble rate

from [[Temperature time relation]], $H = 1.66\sqrt{g_*}\,T^2/M_{\rm Pl}$ with $g_* = 10.75$, so $H \approx 5.4\,T^2/M_{\rm Pl}$.

### step 7 - the ratio

$$\frac{\Gamma_w}{H} \sim \frac{G_F^2T^5}{T^2/M_{\rm Pl}} = G_F^2M_{\rm Pl}\,T^3 = \left(\frac{T}{T_d}\right)^3, \qquad T_d \equiv \left(G_F^2M_{\rm Pl}\right)^{-1/3}$$

the ratio falls as $T^3$, so the transition from coupled to decoupled is fast.

### step 8 - numbers

$G_F^2 = 1.36 \times 10^{-10}$ GeV$^{-4}$ and $G_F^2M_{\rm Pl} = 1.66 \times 10^{9}$ GeV$^{-3}$.

$$T_d \sim \left(1.66 \times 10^{9}\right)^{-1/3}\ \text{GeV} \approx 0.84\ \text{MeV}$$

keeping the factor $1.66\sqrt{g_*} = 5.4$ in $H$ multiplies this by $5.4^{1/3} = 1.76$, giving $1.5$ MeV.

$$\boxed{\, T_{d,\nu} \sim 1\ \text{MeV}, \qquad t_d \sim 1\ \text{s} \,}$$

a proper treatment gives between $1$ and $2$ MeV for $\nu_e$ and a somewhat higher value for $\nu_\mu$, $\nu_\tau$ (the numbers depend on how decoupling is defined). the electron neutrino stays coupled longer because it also has charged-current scattering on $e^\pm$.

after decoupling the neutrinos keep a Fermi-Dirac distribution with $T_\nu \propto 1/a$, see [[Neutrino temperature ratio]].

## case 2 - photon decoupling

here I restore units.

### step 9 - Thomson rate

photons scatter on free electrons with $\sigma_T = \frac{8\pi}{3}\left(\frac{e^2}{4\pi\epsilon_0m_ec^2}\right)^2 = 6.65 \times 10^{-25}$ cm$^2$, independent of energy for $h\nu \ll m_ec^2$.

$$\Gamma_\gamma = n_e\,\sigma_T\,c = X_e\,n_b\,\sigma_T\,c$$

with $X_e$ the free electron fraction and $n_b = n_{b,0}(1 + z)^3$, $n_{b,0} = 2.5 \times 10^{-7}$ cm$^{-3}$ (ignoring the helium correction).

### step 10 - evaluate at $z = 1100$

$$n_b \approx 340\ \text{cm}^{-3}, \qquad \Gamma_\gamma \approx 6.7 \times 10^{-12}\,X_e\ \text{s}^{-1}$$

$$H = H_0\sqrt{\Omega_{m,0}(1+z)^3 + \Omega_{r,0}(1+z)^4} \approx 5.1 \times 10^{-14}\ \text{s}^{-1}$$

### step 11 - the condition

$$\frac{\Gamma_\gamma}{H} \approx 130\,X_e$$

with $X_e = 1$ the photons would still be tightly coupled at $z = 1100$, and would stay coupled down to $z \sim 40$. decoupling happens at $z \approx 1100$ only because recombination removes the free electrons. $\Gamma_\gamma = H$ is reached when

$$X_e \approx 8 \times 10^{-3}$$

so photon decoupling ($z_{\rm dec} \approx 1090$, $T \approx 0.26$ eV) comes after the midpoint of recombination ($X_e = 0.5$ at $z \approx 1380$ in the [[Saha equation derivation]]). three events should be kept distinct.

| event | condition | redshift |
|---|---|---|
| recombination | $X_e = 0.5$ | $\sim 1300$ to $1380$ |
| photon decoupling, last scattering | $\Gamma_\gamma = H$ | $\approx 1090$ |
| baryon decoupling from photons (drag epoch) | electrons stop feeling the photon drag | $\approx 1060$ |

the last one is later because there are $10^9$ photons per electron. an electron keeps scattering photons long after a typical photon has stopped scattering electrons.

## case 3 - freeze-out of a massive particle

a stable particle $X$ of mass $m$ that annihilates, $X\bar X \leftrightarrow$ light particles, tracks $n_X^{\rm eq} \propto (mT)^{3/2}e^{-m/T}$ once $T < m$. the annihilation rate $\Gamma = n_X\langle\sigma v\rangle$ then falls exponentially and crosses $H$ at $x_f \equiv m/T_f \approx 20$ to $25$ for weak-scale cross-sections. after that $n_Xa^3$ is constant. the relic abundance is

$$\Omega_Xh^2 \approx \frac{3 \times 10^{-27}\ \text{cm}^3\,\text{s}^{-1}}{\langle\sigma v\rangle}$$

inversely proportional to the cross-section, since a larger cross-section keeps the species in equilibrium longer and its abundance is depleted further. $\langle\sigma v\rangle \approx 3 \times 10^{-26}$ cm$^3$ s$^{-1}$, typical of the weak scale, gives $\Omega_Xh^2 \approx 0.1$, close to the observed dark matter density.

this is cold freeze-out. the neutrino case is hot freeze-out, where the species is still relativistic at $T_d$ and its number density is not suppressed.

## limits of the criterion

the rigorous tool is the Boltzmann equation,

$$\frac{1}{a^3}\frac{d(n\,a^3)}{dt} = -\langle\sigma v\rangle\left[n^2 - n_{\rm eq}^2\right]$$

the left side is the change of the comoving number, the right side is annihilation minus creation. when $\Gamma = n\langle\sigma v\rangle \gg H$ the right side forces $n \to n_{\rm eq}$. when $\Gamma \ll H$ the right side is negligible and $na^3$ is constant. $\Gamma = H$ marks the crossover and reproduces $T_d$ to within a factor of order unity.

other caveats.

- decoupling is gradual. neutrinos are still slightly coupled when $e^\pm$ annihilation begins, which raises the effective number of neutrino species from $3$ to $3.044$.
- kinetic and chemical decoupling can happen at different times, with different rates in the criterion.
- the estimate $\sigma \sim G_F^2T^2$ fails near thresholds and resonances.

## questions I should be ready for

- *why compare with $H$ and not something else?* $1/H$ is the time over which $T$ and $n$ change appreciably, and $\Gamma/H$ counts the interactions left in the future of the particle.
- *why does $\sigma_w$ scale as $T^2$?* dimensional analysis. $G_F^2$ carries energy$^{-4}$, a cross-section carries energy$^{-2}$, and the only scale is $T$.
- *do neutrinos stop being thermal after decoupling?* their distribution keeps the Fermi-Dirac shape with $T_\nu \propto 1/a$ because all momenta redshift equally. they are no longer in equilibrium with anything.
- *why does photon decoupling need recombination?* without it $\Gamma_\gamma/H \approx 130$ at $z = 1100$.
- *why is $T_d$ for neutrinos near the n/p freeze-out temperature?* both are controlled by the same weak rate $G_F^2T^5$.

## board summary (60 seconds)

rate per particle $\Gamma = n\langle\sigma v\rangle$, coupled while $\Gamma > H$, decoupled after $\Gamma = H$ because $\int\Gamma\,dt < 1$. weak interactions, $\sigma \sim G_F^2T^2$, $n \sim T^3$, $\Gamma \sim G_F^2T^5$, $H \sim T^2/M_{\rm Pl}$, ratio $(T/T_d)^3$ with $T_d = (G_F^2M_{\rm Pl})^{-1/3} \sim 1$ MeV. photons, $\Gamma = X_en_b\sigma_Tc$, equals $H$ at $z \approx 1100$ when $X_e \sim 10^{-2}$.

## see also

- [[Temperature time relation]] supplies $H(T)$.
- [[Neutrino temperature ratio]] is what follows neutrino decoupling.
- [[Saha equation derivation]] gives $X_e(T)$ for photon decoupling.
- [[BBN helium fraction]] uses the same criterion for the n/p ratio.
