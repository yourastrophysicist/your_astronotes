---
layout: default
title: "Meszaros suppression"
---
## what I'm deriving

inside the horizon and during radiation domination, cold dark matter perturbations grow only logarithmically,

$$\delta_m(t) \approx C_1 + C_2\ln t$$

and the exact growing solution through matter-radiation equality is

$$\delta_m \propto 1 + \frac{3}{2}\,y, \qquad y \equiv \frac{a}{a_{\rm eq}}$$

so between horizon entry and equality a mode grows by a factor of order unity, in place of the factor $a_{\rm eq}/a_{\rm enter}$ it would gain in a matter-dominated universe. the consequence is the turnover of the matter power spectrum at $k_{\rm eq}$.

## conventions and symbols

| symbol | meaning |
|---|---|
| $\delta_m$ | density contrast of cold dark matter |
| $\bar\rho_m$, $\bar\rho_r$ | background matter and radiation densities |
| $a_{\rm eq}$ | scale factor at equality, $\bar\rho_m = \bar\rho_r$, $1 + z_{\rm eq} \approx 3400$ |
| $y = a/a_{\rm eq}$ | time variable, $\bar\rho_m/\bar\rho_r = y$ |
| a prime | $d/dy$ |
| $k_{\rm eq}$ | comoving wavenumber that enters the horizon at equality |

## assumptions

1. the mode is well inside the horizon, so the Newtonian [[Linear perturbation master equation]] applies.
2. dark matter is cold and collisionless, $c_s = 0$.
3. radiation perturbations inside the horizon oscillate rapidly with decreasing amplitude and average to zero, so radiation is treated as smooth. it contributes to $H$ and not to the perturbed gravitational potential.
4. baryons are ignored (before recombination they are tied to the photons).

## derivation

### step 1 - the equation for matter in a mixed background

from assumptions 2 and 3 the friction term contains the full expansion rate and the source term only the clustering component.

$$\ddot\delta_m + 2H\dot\delta_m - 4\pi G\bar\rho_m\,\delta_m = 0, \qquad H^2 = \frac{8\pi G}{3}\left(\bar\rho_m + \bar\rho_r\right)$$

### step 2 - compare the source with the friction

$$\frac{4\pi G\bar\rho_m}{H^2} = \frac{4\pi G\bar\rho_m}{\frac{8\pi G}{3}(\bar\rho_m + \bar\rho_r)} = \frac{3}{2}\cdot\frac{\bar\rho_m}{\bar\rho_m + \bar\rho_r} = \frac{3}{2}\cdot\frac{y}{1 + y}$$

deep in the radiation era $y \ll 1$ and this ratio is small. the terms $\ddot\delta$ and $2H\dot\delta$ are each of order $H^2\delta$ for a mode evolving on the expansion timescale, so the source is negligible at leading order.

the physics. the expansion is driven by radiation, which does not cluster. the dark matter's own gravity acts on the timescale $(G\bar\rho_m)^{-1/2}$, much longer than the expansion time $(G\bar\rho_r)^{-1/2}$. the perturbation cannot collapse before the universe has expanded.

### step 3 - solve the radiation-era limit

drop the source and use $H = 1/(2t)$ (from $a \propto t^{1/2}$).

$$\ddot\delta_m + \frac{1}{t}\dot\delta_m = 0$$

this is first order in $u \equiv \dot\delta_m$. separate variables, with $u$ integrated on the left and $t$ on the right.

$$\frac{du}{u} = -\frac{dt}{t} \quad\Longrightarrow\quad \ln u = -\ln t + \text{const} \quad\Longrightarrow\quad \dot\delta_m = \frac{C_2}{t}$$

integrate once more over $t$.

$$\boxed{\, \delta_m(t) = C_1 + C_2\ln t \,}$$

since $a \propto t^{1/2}$, $\ln t = 2\ln a + $ const, so $\delta_m = C_1' + C_2'\ln a$.

the two solutions are a constant and a logarithm. the logarithmic one is not a gravitational instability. it is the coasting of matter that was set in motion at horizon entry, $\dot\delta \propto \nabla\cdot\vec v$, with the velocity decaying as $1/a$ under Hubble friction.

### step 4 - the exact equation in the variable $y$

to follow the mode through equality, change the independent variable from $t$ to $y$. since $\dot y = Hy$,

$$\dot\delta = Hy\,\delta', \qquad \ddot\delta = H^2y^2\,\delta'' + \left(\dot H + H^2\right)y\,\delta'$$

I need $\dot H$. differentiate the Friedmann equation and use continuity for each component, $\dot{\bar\rho}_m = -3H\bar\rho_m$ and $\dot{\bar\rho}_r = -4H\bar\rho_r$.

$$2H\dot H = \frac{8\pi G}{3}\left(-3H\bar\rho_m - 4H\bar\rho_r\right) \quad\Longrightarrow\quad \dot H = -\frac{3}{2}H^2\,\frac{\bar\rho_m + \frac43\bar\rho_r}{\bar\rho_m + \bar\rho_r} = -H^2\,\frac{3y + 4}{2(1 + y)}$$

assemble the left side of step 1.

$$\ddot\delta + 2H\dot\delta = H^2y^2\,\delta'' + H^2y\left[3 - \frac{3y + 4}{2(1 + y)}\right]\delta' = H^2y^2\,\delta'' + H^2y\,\frac{2 + 3y}{2(1 + y)}\,\delta'$$

set it equal to $4\pi G\bar\rho_m\delta = \frac32H^2\frac{y}{1 + y}\delta$ (step 2) and divide by $H^2y^2$.

$$\boxed{\, \delta_m'' + \frac{2 + 3y}{2y(1 + y)}\,\delta_m' - \frac{3}{2y(1 + y)}\,\delta_m = 0 \,}$$

this is the Meszaros equation.

### step 5 - the growing solution

try a polynomial of first degree, $\delta = 1 + \alpha y$. then $\delta'' = 0$, $\delta' = \alpha$, and the equation requires $(2 + 3y)\alpha = 3(1 + \alpha y)$ for all $y$. the constant terms give $\alpha = 3/2$ and the terms linear in $y$ are then satisfied identically.

$$\boxed{\, D_+(y) = 1 + \frac{3}{2}\,y \,}$$

- $y \ll 1$. $D_+ \approx 1$, the perturbation is frozen.
- $y \gg 1$. $D_+ \approx \frac32y \propto a$, the matter-era growth of [[Growth factor matter era]].
- total growth from deep in the radiation era to equality, $D_+(1)/D_+(0) = 5/2$.

the second solution is

$$D_-(y) = \left(1 + \frac{3}{2}y\right)\ln\frac{\sqrt{1 + y} + 1}{\sqrt{1 + y} - 1} - 3\sqrt{1 + y}$$

for $y \ll 1$ it behaves as $-\ln(y/4) - 3$, which is the logarithm of step 3, and for $y \gg 1$ it decays as $y^{-3/2}$.

## consequence for the power spectrum

### step 6 - when does a mode enter the horizon

a comoving mode $k$ enters when $k = aH$ (units with $c = 1$). in the radiation era $H \propto a^{-2}$, so $aH \propto a^{-1}$ and

$$a_{\rm enter} \propto \frac{1}{k}$$

small scales enter first. the mode entering at equality defines

$$k_{\rm eq} = a_{\rm eq}H_{\rm eq} = H_0\sqrt{2\,\Omega_{m,0}\,(1 + z_{\rm eq})} \approx 0.015\,h\ \text{Mpc}^{-1} \approx 0.010\ \text{Mpc}^{-1}$$

### step 7 - the missed growth

outside the horizon, and for all modes during the matter era, the density contrast in the relevant gauge grows as $\delta \propto a^2$ in the radiation era and $\delta \propto a$ in the matter era. a mode with $k > k_{\rm eq}$ enters at $a_{\rm enter} < a_{\rm eq}$ and then stalls, apart from the logarithm. compared with a mode that stays outside until equality it loses the factor

$$\left(\frac{a_{\rm enter}}{a_{\rm eq}}\right)^2 = \left(\frac{k_{\rm eq}}{k}\right)^2$$

this defines the transfer function,

$$T(k) \approx \begin{cases} 1 & k \ll k_{\rm eq} \\[1mm] \left(\dfrac{k_{\rm eq}}{k}\right)^2\ln\dfrac{k}{k_{\rm eq}} & k \gg k_{\rm eq} \end{cases}$$

### step 8 - the shape of $P(k)$

with a primordial spectrum $P_{\rm prim} \propto k^{n_s}$ and $n_s \approx 1$,

$$P(k) \propto k^{n_s}\,T^2(k) \propto \begin{cases} k & k \ll k_{\rm eq} \\[1mm] k^{-3}\ln^2(k/k_{\rm eq}) & k \gg k_{\rm eq} \end{cases}$$

the spectrum rises, turns over near $k_{\rm eq}$ and falls. the position of the peak measures $\Omega_{m,0}h^2$ through $z_{\rm eq}$. accurate fits to $T(k)$ are given by Bardeen, Bond, Kaiser and Szalay (1986) and by Eisenstein and Hu (1998), which also include the baryon features.

## checks

- **step 5 in the matter limit.** for $y \gg 1$ the equation becomes $\delta'' + \frac{3}{2y}\delta' - \frac{3}{2y^2}\delta = 0$, and $\delta = y^n$ gives $n(n-1) + \frac32n - \frac32 = 0$, so $n = 1$ or $n = -3/2$. these are the Einstein-de Sitter modes.
- **step 5 in the radiation limit.** for $y \ll 1$ the equation becomes $\delta'' + \delta'/y = 0$ with solutions $1$ and $\ln y$, matching step 3.
- **consistency of $\dot H$.** pure matter gives $\dot H = -\frac32H^2$ and pure radiation $\dot H = -2H^2$, as they should for $H = 2/3t$ and $H = 1/2t$.

## what the Newtonian treatment leaves out

- **modes outside the horizon.** they need relativistic perturbation theory. the result used in step 7 is that the curvature perturbation is conserved outside the horizon, which translates into $\delta \propto a^2$ (radiation era) and $\delta \propto a$ (matter era) in the synchronous or comoving gauge.
- **the kick at horizon entry.** as a mode enters during the radiation era, the decaying radiation potential gives the dark matter a velocity. this sets the constants $C_1$ and $C_2$ and is the origin of the logarithm in $T(k)$.
- **baryons.** before recombination they oscillate with the photons and do not grow, which reduces the effective clustering fraction and slightly slows the dark matter growth.

## questions I should be ready for

- *why does matter not grow in the radiation era?* the expansion rate is set by radiation, and the matter's self-gravity is too weak to act within an expansion time, $4\pi G\bar\rho_m \ll H^2$.
- *why not include radiation perturbations in the source?* inside the horizon they are pressure supported, oscillate and decay, and their time-averaged contribution to the potential is negligible.
- *where does the logarithm come from?* from $\dot\delta \propto 1/t$, the decay of the initial peculiar velocity under Hubble friction, integrated over time.
- *why is the turnover at $k_{\rm eq}$?* modes with $k > k_{\rm eq}$ entered before equality and were stalled. modes with $k < k_{\rm eq}$ entered in the matter era and were not.
- *what would move the turnover?* changing $\Omega_{m,0}h^2$ or the radiation density (for example extra relativistic species).

## board summary (60 seconds)

matter in a radiation background, $\ddot\delta_m + 2H\dot\delta_m = 4\pi G\bar\rho_m\delta_m$ with $4\pi G\bar\rho_m/H^2 = \frac32y/(1 + y) \ll 1$. drop the source, $H = 1/2t$, $\ddot\delta + \dot\delta/t = 0$, $\dot\delta = C_2/t$, $\delta = C_1 + C_2\ln t$. exact, in $y = a/a_{\rm eq}$, $\delta'' + \frac{2 + 3y}{2y(1 + y)}\delta' - \frac{3}{2y(1 + y)}\delta = 0$ with $D_+ = 1 + \frac32y$. modes with $k > k_{\rm eq}$ lose a factor $(k_{\rm eq}/k)^2$, so $P(k) \propto k$ turns over to $k^{-3}\ln^2k$.

## see also

- [[Linear perturbation master equation]] is the input.
- [[Growth factor matter era]] is what takes over after equality.
- [[Critical density and density parameters]] gives $z_{\rm eq}$.
- [[Press Schechter mass function]] uses the resulting $P(k)$ through $\sigma(M)$.
