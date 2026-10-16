---
layout: default
title: "Jeans length derivation"
---
## what I'm deriving

the scale that separates gravitational growth from acoustic oscillation.

$$\lambda_J = c_s \sqrt{\frac{\pi}{G \bar\rho}}, \qquad k_J = \frac{a}{c_s}\sqrt{4\pi G \bar\rho}, \qquad M_J = \frac{4\pi}{3}\bar\rho \left(\frac{\lambda_J}{2}\right)^3 = \frac{\pi^{5/2}}{6}\frac{c_s^3}{G^{3/2}\bar\rho^{1/2}}$$

perturbations with $\lambda > \lambda_J$ grow. perturbations with $\lambda < \lambda_J$ oscillate as sound waves.

## conventions and symbols

| symbol | meaning |
|---|---|
| $k$ | comoving wavenumber |
| $\lambda = 2\pi a/k$ | physical wavelength |
| $c_s$ | adiabatic sound speed |
| $\bar\rho$ | background density of the self-gravitating fluid |
| $k_J$, $\lambda_J$, $M_J$ | Jeans wavenumber (comoving), Jeans length (physical), Jeans mass |

## input

the [[Linear perturbation master equation]],

$$\ddot\delta_k + 2 H \dot\delta_k + \omega_k^2\,\delta_k = 0, \qquad \omega_k^2 \equiv \frac{c_s^2 k^2}{a^2} - 4\pi G \bar\rho$$

it has the form of a damped oscillator whose squared frequency $\omega_k^2$ can have either sign.

## derivation

### step 1 - the static case, to see the two behaviours

set $H = 0$ and $a = 1$ (Jeans's original problem). the coefficients are constant, so try $\delta_k \propto e^{-i\omega t}$. substituting gives the dispersion relation

$$\omega^2 = c_s^2k^2 - 4\pi G\bar\rho$$

- $\omega^2 > 0$. $\omega$ is real and $\delta_k \propto e^{\pm i\omega t}$, a sound wave whose frequency is lowered by self-gravity.
- $\omega^2 < 0$. $\omega = \pm i\gamma$ with $\gamma = \sqrt{4\pi G\bar\rho - c_s^2k^2}$ and $\delta_k \propto e^{\pm\gamma t}$, one growing and one decaying mode. for $k \to 0$, $\gamma \to \sqrt{4\pi G\bar\rho}$, the inverse free-fall time.

### step 2 - the critical wavenumber

the boundary between the two is $\omega_k^2 = 0$.

$$\frac{c_s^2k_J^2}{a^2} = 4\pi G\bar\rho \quad\Longrightarrow\quad \boxed{\, k_J = \frac{a}{c_s}\sqrt{4\pi G\bar\rho} \,}$$

this is a comoving wavenumber, because $k$ in the master equation is comoving.

### step 3 - the physical Jeans length

$$\lambda_J = \frac{2\pi a}{k_J} = \frac{2\pi c_s}{\sqrt{4\pi G\bar\rho}} = c_s\sqrt{\frac{4\pi^2}{4\pi G\bar\rho}}$$

$$\boxed{\, \lambda_J = c_s \sqrt{\frac{\pi}{G \bar\rho}} \,}$$

the scale factor has cancelled. $\lambda_J$ is a physical length built from local quantities.

### step 4 - the Jeans mass

the mass in a sphere of diameter $\lambda_J$.

$$M_J = \frac{4\pi}{3}\bar\rho\left(\frac{\lambda_J}{2}\right)^3 = \frac{\pi}{6}\bar\rho\,\lambda_J^3 = \frac{\pi}{6}\bar\rho\,c_s^3\left(\frac{\pi}{G\bar\rho}\right)^{3/2}$$

$$\boxed{\, M_J = \frac{\pi^{5/2}}{6}\, \frac{c_s^3}{G^{3/2}\bar\rho^{1/2}} \,}$$

the numerical factor depends on the convention (some authors use a sphere of radius $\lambda_J$, or a cube). the scaling $M_J \propto c_s^3\bar\rho^{-1/2}$ is what matters.

### step 5 - with expansion

for $H \neq 0$ the criterion is unchanged, since the sign of $\omega_k^2$ still decides the character of the solution, but the time dependence changes.

- $k \ll k_J$. the pressure term is negligible and $\ddot\delta + 2H\dot\delta - 4\pi G\bar\rho\delta = 0$. growth is a power law, $\delta \propto a$ in a matter-dominated universe, see [[Growth factor matter era]].
- $k \gg k_J$. gravity is negligible and $\ddot\delta + 2H\dot\delta + (c_sk/a)^2\delta = 0$, an oscillation damped by the expansion.

## physical interpretation

two timescales for a region of size $\lambda$.

$$t_{\rm ff} \sim \frac{1}{\sqrt{G\bar\rho}} \quad\text{(gravitational collapse)}, \qquad t_s \sim \frac{\lambda}{c_s} \quad\text{(sound crossing)}$$

if $t_s < t_{\rm ff}$ a pressure wave crosses the region and restores equilibrium before it can collapse. if $t_s > t_{\rm ff}$ gravity acts first. equality gives $\lambda \sim c_s/\sqrt{G\bar\rho}$, which is $\lambda_J$ up to the factor $\sqrt\pi$.

an equivalent energy statement. a region is unstable when its gravitational energy per unit mass, $\sim G\bar\rho\lambda^2$, exceeds its thermal energy per unit mass, $\sim c_s^2$.

## numbers in the early universe

evaluated at recombination, $z \approx 1090$, where $\bar\rho_m = 3.5 \times 10^{-21}$ g cm$^{-3}$ and $\bar\rho_b = 5.5 \times 10^{-22}$ g cm$^{-3}$. I use the total matter density in $\lambda_J$ and the baryon density for the baryonic mass.

| | sound speed | $\lambda_J$ (physical) | baryonic $M_J$ |
|---|---|---|---|
| just before, baryons tied to photons | $c_s = \dfrac{c}{\sqrt{3(1 + R)}} \approx 0.45\,c$ with $R = \dfrac{3\rho_b}{4\rho_\gamma} \approx 0.6$ | $\sim 0.5$ Mpc, larger than the Hubble radius $c/H \approx 0.2$ Mpc | $\sim 10^{17}$ to $10^{18}\,M_\odot$ |
| just after, neutral gas at $T \approx 3000$ K | $c_s = \sqrt{\dfrac{5k_BT}{3m_p}} \approx 6$ km/s | $\sim 25$ pc | $\sim 10^5\,M_\odot$ |

the sound speed drops by more than four orders of magnitude and $M_J \propto c_s^3$ by about thirteen. before recombination no baryonic object smaller than a supercluster can collapse. immediately after, gas clouds of globular-cluster mass can.

the Jeans length before recombination exceeds the Hubble radius, where the Newtonian treatment is only indicative. the safe statement is that every baryonic perturbation inside the horizon is pressure supported until recombination.

## what this means for structure formation

- **baryons before recombination.** sub-Jeans on all relevant scales. their perturbations oscillate as sound waves in the photon-baryon fluid. these are the acoustic oscillations seen in the CMB and as BAO in the galaxy distribution.
- **cold dark matter.** collisionless, no pressure, effectively $c_s = 0$ and $\lambda_J = 0$. it clusters on all scales as soon as the matter era begins. for warm or hot dark matter the role of $\lambda_J$ is played by the free-streaming length.
- **after recombination.** baryons fall into the dark matter potential wells that have been growing since equality.
- **without dark matter.** baryon perturbations of amplitude $10^{-5}$ at $z \approx 1100$ growing as $\delta \propto a$ would reach only $\sim 10^{-2}$ today. galaxies would not exist.

the same criterion, with the density and temperature of a molecular cloud, sets the minimum mass for star formation.

## checks

- **dimensions.** $c_s/\sqrt{G\bar\rho}$ is a velocity times a time.
- **limits.** $c_s \to 0$ gives $\lambda_J \to 0$, everything collapses. $G \to 0$ gives $\lambda_J \to \infty$, nothing collapses.
- **scaling with $a$ for a monatomic gas after decoupling from the photons.** $T \propto a^{-2}$ so $c_s \propto a^{-1}$, $\bar\rho \propto a^{-3}$, $M_J \propto c_s^3\bar\rho^{-1/2} \propto a^{-3/2}$. the Jeans mass falls with time.

## questions I should be ready for

- *is $k_J$ comoving or physical?* comoving in my formula, hence the factor $a$. $\lambda_J$ is physical.
- *what is the Jeans swindle?* in a static uniform medium Poisson's equation has no solution with $\nabla\bar\Phi = 0$, and Jeans set it to zero anyway. the expanding background removes the problem.
- *why does the growth become a power law?* the Hubble friction term, and the fact that $4\pi G\bar\rho \propto t^{-2}$ decreases with time.
- *does dark matter have a Jeans length?* not from pressure. it has a free-streaming length from its velocity dispersion.
- *which density goes in the formula?* the density of everything that clusters with the fluid. for baryons after recombination that is the total matter density, as the gas responds to the dark matter potential.

## board summary (60 seconds)

master equation with $\omega_k^2 = c_s^2k^2/a^2 - 4\pi G\bar\rho$. static case gives $\omega^2 = c_s^2k^2 - 4\pi G\bar\rho$, oscillation if positive and exponential growth if negative. set $\omega_k^2 = 0$, $k_J = (a/c_s)\sqrt{4\pi G\bar\rho}$, $\lambda_J = 2\pi a/k_J = c_s\sqrt{\pi/(G\bar\rho)}$, $M_J = (\pi/6)\bar\rho\lambda_J^3 \propto c_s^3\bar\rho^{-1/2}$. sound crossing time against free-fall time. at recombination $M_J$ drops from $\sim 10^{17}$ to $\sim 10^5\,M_\odot$.

## see also

- [[Linear perturbation master equation]] supplies the dispersion relation.
- [[Growth factor matter era]] treats the $k \ll k_J$ modes.
- [[Meszaros suppression]] is the radiation-era case.
