---
layout: default
title: "Equilibrium distributions"
---
## what I'm deriving

the mean occupation number of a single-particle state of energy $E$ for a species in kinetic and chemical equilibrium at temperature $T$ and chemical potential $\mu$.

$$f(E) = \frac{1}{\exp\left(\dfrac{E - \mu}{T}\right) \pm 1}$$

plus sign for fermions (Fermi-Dirac), minus sign for bosons (Bose-Einstein), and the Maxwell-Boltzmann limit $f \approx e^{-(E - \mu)/T}$ when $f \ll 1$.

## conventions and symbols

natural units $c = \hbar = k_B = 1$ in all the thermal-history files. temperature, mass, energy and momentum are all measured in eV. to restore units, $T \to k_BT$, $m \to mc^2$, $p \to pc$, and each $d^3p/(2\pi)^3$ becomes $d^3p/(2\pi\hbar)^3$.

| symbol | meaning |
|---|---|
| $\alpha$ | label of a single-particle quantum state (momentum and internal state) |
| $\epsilon_\alpha$ | energy of that state, $E(p) = \sqrt{p^2 + m^2}$ |
| $n_\alpha$ | number of particles occupying state $\alpha$ |
| $\mu$ | chemical potential of the species |
| $\beta$ | $1/T$ |
| $f(\vec p)$ | phase-space distribution, the mean of $n_\alpha$ |
| $g$ | number of internal states (spin, polarisation, colour) |

## assumptions

1. the gas is ideal. interactions are frequent enough to establish equilibrium and weak enough that the energy is the sum of single-particle energies.
2. **kinetic equilibrium.** elastic scatterings are fast, so the momentum distribution is thermal with a well defined $T$.
3. **chemical equilibrium.** number-changing reactions are fast, so the chemical potentials are related by the reactions.
4. the system exchanges energy and particles with a much larger bath, so the grand-canonical ensemble applies.

## derivation

### step 1 - grand-canonical weight

a microstate of the gas is specified by the set of occupation numbers $\{n_\alpha\}$. it has $N = \sum_\alpha n_\alpha$ particles and energy $E_{\rm tot} = \sum_\alpha n_\alpha\epsilon_\alpha$. its probability is

$$P\{n_\alpha\} = \frac{1}{\mathcal Z}\exp\left[-\beta\left(E_{\rm tot} - \mu N\right)\right] = \frac{1}{\mathcal Z}\prod_\alpha x_\alpha^{\,n_\alpha}, \qquad x_\alpha \equiv e^{-\beta(\epsilon_\alpha - \mu)}$$

### step 2 - the partition function factorises

because the exponent is a sum over states, the sum over all microstates is a product of independent sums, one per state.

$$\mathcal Z = \sum_{\{n_\alpha\}}\prod_\alpha x_\alpha^{\,n_\alpha} = \prod_\alpha\left(\sum_{n} x_\alpha^{\,n}\right) \equiv \prod_\alpha \mathcal Z_\alpha$$

the allowed values of $n$ are where quantum statistics enters.

### step 3 - mean occupation of one state

$$\langle n_\alpha\rangle = \frac{\sum_n n\, x_\alpha^{\,n}}{\sum_n x_\alpha^{\,n}} = x_\alpha\frac{\partial\ln\mathcal Z_\alpha}{\partial x_\alpha}$$

the second form follows because $x\,\partial_x x^n = n\,x^n$.

### step 4 - bosons

any $n = 0, 1, 2, \ldots$ is allowed. the sum is a geometric series, convergent only if $x_\alpha < 1$.

$$\mathcal Z_\alpha = \sum_{n=0}^{\infty}x_\alpha^{\,n} = \frac{1}{1 - x_\alpha}, \qquad \ln\mathcal Z_\alpha = -\ln(1 - x_\alpha)$$

$$\langle n_\alpha\rangle_{\rm BE} = x_\alpha\cdot\frac{1}{1 - x_\alpha} = \frac{1}{x_\alpha^{-1} - 1} = \frac{1}{e^{(\epsilon_\alpha - \mu)/T} - 1}$$

convergence for every state requires $\mu < \epsilon_\alpha$ for all $\alpha$, hence $\mu \le m$ (the lowest single-particle energy). as $\mu \to m$ the ground-state occupation diverges, which is Bose-Einstein condensation.

### step 5 - fermions

the Pauli principle allows only $n = 0, 1$.

$$\mathcal Z_\alpha = 1 + x_\alpha, \qquad \langle n_\alpha\rangle_{\rm FD} = \frac{0\cdot 1 + 1\cdot x_\alpha}{1 + x_\alpha} = \frac{1}{x_\alpha^{-1} + 1} = \frac{1}{e^{(\epsilon_\alpha - \mu)/T} + 1}$$

there is no restriction on $\mu$ and $0 \le \langle n\rangle \le 1$ always.

### step 6 - from states to phase space

in a volume $V$ the number of momentum states in $d^3p$ is $V\,d^3p/(2\pi)^3$, times $g$ internal states. writing $f(\vec p) \equiv \langle n_\alpha\rangle$,

$$\boxed{\, f(p) = \frac{1}{\exp\left(\dfrac{E(p) - \mu}{T}\right) \pm 1}, \qquad E(p) = \sqrt{p^2 + m^2} \,}$$

and the number of particles per unit volume in $d^3p$ is $g\,f(p)\,d^3p/(2\pi)^3$. by isotropy $f$ depends only on $|\vec p|$.

## Maxwell-Boltzmann limit

if $e^{(E - \mu)/T} \gg 1$ for all relevant $E$, the $\pm1$ is negligible.

$$f(p) \approx e^{-(E - \mu)/T} \ll 1$$

the condition is low occupation, $f \ll 1$, a dilute gas in which quantum statistics does not matter. it holds for non-relativistic species with $m - \mu \gg T$ (baryons and electrons at recombination and BBN). it does not hold for a relativistic gas with $\mu = 0$, where $f \sim 1$ at $p \lesssim T$, and that is why bosons and fermions differ by the factors $3/4$ and $7/8$ in [[Relativistic number and energy density]].

## chemical potentials

for a reaction $1 + 2 \leftrightarrow 3 + 4$ in chemical equilibrium the free energy is stationary, which gives

$$\mu_1 + \mu_2 = \mu_3 + \mu_4$$

- **photons.** number-changing processes such as double Compton scattering $e + \gamma \leftrightarrow e + \gamma + \gamma$ and bremsstrahlung are fast in the early universe. applying the rule gives $\mu_\gamma = 2\mu_\gamma$, so $\mu_\gamma = 0$. the photon distribution is a Planck spectrum.
- **particle and antiparticle.** $X + \bar X \leftrightarrow \gamma + \gamma$ gives $\mu_X = -\mu_{\bar X}$. a non-zero $\mu_X$ encodes an asymmetry $n_X - n_{\bar X} \neq 0$. for $T \gg m$ the asymmetry is $n_X - n_{\bar X} \propto g T^3\left[\mu/T + \mathcal O(\mu^3/T^3)\right]$, so with $\eta \sim 10^{-9}$ the ratios $\mu/T$ are tiny and $\mu \approx 0$ is an excellent approximation for relativistic species.
- **recombination.** $e^- + p \leftrightarrow H + \gamma$ gives $\mu_e + \mu_p = \mu_H$, the starting point of [[Saha equation derivation]]. here the species are non-relativistic and $\mu$ is not negligible, it is what sets the number densities.

## why one temperature

while all species interact faster than the expansion, energy exchange drives them to a common $T$. when the interaction rate of a species falls below $H$ (see [[Decoupling Gamma vs H]]) it stops exchanging energy with the bath. after that its distribution keeps its shape only in two limits.

- decoupled while relativistic. each momentum redshifts as $p \propto 1/a$, so $f(p/T)$ is preserved with $T \propto 1/a$. this is the case of neutrinos and of CMB photons.
- decoupled while non-relativistic. kinetic energy $p^2/2m \propto a^{-2}$, so the distribution stays Maxwellian with $T \propto a^{-2}$.

## checks

- **$f \ge 0$.** guaranteed for fermions always and for bosons by $\mu < \epsilon$.
- **high energy tail.** for $E - \mu \gg T$ both statistics reduce to the Boltzmann factor.
- **low energy bosons with $\mu = 0$.** $f \approx T/E \gg 1$, the Rayleigh-Jeans regime.
- **degenerate fermions.** for $T \to 0$, $f \to 1$ below $E = \mu$ and $0$ above, a Fermi sea.

## questions I should be ready for

- *why does the partition function factorise?* the gas is ideal, so the total energy and number are sums over independent states.
- *why $\mu_\gamma = 0$?* photon number is not conserved. reactions that change the number of photons by one force $\mu_\gamma = 0$.
- *what if number-changing reactions are slow?* kinetic equilibrium alone gives a Bose-Einstein spectrum with $\mu \neq 0$. energy injected into the CMB at $5 \times 10^4 \lesssim z \lesssim 2 \times 10^6$ would leave such a $\mu$ distortion. FIRAS limits it to $|\mu|/T < 9 \times 10^{-5}$.
- *kinetic versus chemical equilibrium?* kinetic fixes the shape in momentum, chemical fixes the relative abundances. they can be lost at different times.

## board summary (60 seconds)

grand-canonical weight $\prod_\alpha x_\alpha^{n_\alpha}$ with $x = e^{-(\epsilon - \mu)/T}$, so each state is independent and $\langle n\rangle = \sum n x^n/\sum x^n$. bosons, geometric series, $\langle n\rangle = 1/(e^{(E - \mu)/T} - 1)$, needs $\mu \le m$. fermions, two terms, $\langle n\rangle = 1/(e^{(E - \mu)/T} + 1)$. Boltzmann limit when $f \ll 1$. photons have $\mu = 0$.

## see also

- [[Relativistic number and energy density]] integrates these distributions.
- [[Saha equation derivation]] uses the chemical potential condition.
- [[Decoupling Gamma vs H]] explains when equilibrium is lost.
