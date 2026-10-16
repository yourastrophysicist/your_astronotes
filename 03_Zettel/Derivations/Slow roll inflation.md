---
layout: default
title: "Slow roll inflation"
---
## what I'm deriving

for a homogeneous scalar field $\phi(t)$ with potential $V(\phi)$,

$$\rho_\phi = \frac{1}{2}\dot\phi^2 + V(\phi), \qquad p_\phi = \frac{1}{2}\dot\phi^2 - V(\phi)$$

its equation of motion $\ddot\phi + 3H\dot\phi + V'(\phi) = 0$, the slow-roll conditions

$$\epsilon_V \equiv \frac{M_{\rm Pl}^2}{2}\left(\frac{V'}{V}\right)^2 \ll 1, \qquad |\eta_V| \equiv M_{\rm Pl}^2\,\frac{|V''|}{V} \ll 1$$

and the number of e-folds

$$N = \frac{1}{M_{\rm Pl}^2}\int_{\phi_{\rm end}}^{\phi_i}\frac{V}{V'}\,d\phi$$

## conventions and symbols

natural units $c = \hbar = 1$. in this file $M_{\rm Pl}$ is the **reduced** Planck mass, $M_{\rm Pl} \equiv (8\pi G)^{-1/2} = 2.435 \times 10^{18}$ GeV, so the Friedmann equation reads $H^2 = \rho/(3M_{\rm Pl}^2)$. metric signature $(-,+,+,+)$. a prime is a derivative with respect to $\phi$, a dot with respect to $t$.

| symbol | meaning |
|---|---|
| $\phi$ | the inflaton field, units of energy |
| $V(\phi)$ | potential energy density, units of energy$^4$ |
| $\epsilon \equiv -\dot H/H^2$ | Hubble slow-roll parameter, exact definition |
| $\epsilon_V$, $\eta_V$ | potential slow-roll parameters |
| $N$ | number of e-folds, $a_{\rm end}/a_i = e^N$ |

## assumptions

1. a single scalar field, minimally coupled to gravity, with a canonical kinetic term.
2. the field is homogeneous, $\phi = \phi(t)$. gradients are negligible in the patch considered.
3. the scalar field dominates the energy density, and spatial curvature is neglected.

## derivation

### step 1 - action and stress tensor

$$S = \int d^4x\,\sqrt{-g}\;\mathcal L, \qquad \mathcal L = -\frac{1}{2}g^{\mu\nu}\partial_\mu\phi\,\partial_\nu\phi - V(\phi)$$

the sign of the kinetic term is fixed by the signature. with $g^{00} = -1$ it gives $+\frac12\dot\phi^2$. varying with respect to the metric,

$$T_{\mu\nu} \equiv -\frac{2}{\sqrt{-g}}\frac{\delta S}{\delta g^{\mu\nu}} = \partial_\mu\phi\,\partial_\nu\phi + g_{\mu\nu}\,\mathcal L$$

### step 2 - evaluate for a homogeneous field

with $\partial_i\phi = 0$, $g_{00} = -1$ and $g_{ij} = a^2\gamma_{ij}$, the Lagrangian is $\mathcal L = \frac12\dot\phi^2 - V$.

$$T_{00} = \dot\phi^2 + g_{00}\,\mathcal L = \dot\phi^2 - \left(\frac12\dot\phi^2 - V\right) = \frac12\dot\phi^2 + V$$

$$T_{ij} = 0 + g_{ij}\,\mathcal L = g_{ij}\left(\frac12\dot\phi^2 - V\right)$$

comparing with a perfect fluid at rest, $T_{00} = \rho$ and $T_{ij} = p\,g_{ij}$,

$$\boxed{\, \rho_\phi = \frac{1}{2}\dot\phi^2 + V(\phi), \qquad p_\phi = \frac{1}{2}\dot\phi^2 - V(\phi) \,}$$

kinetic plus potential for the energy density, kinetic minus potential for the pressure.

### step 3 - equation of state

$$w_\phi = \frac{p_\phi}{\rho_\phi} = \frac{\frac12\dot\phi^2 - V}{\frac12\dot\phi^2 + V}$$

| regime | $w_\phi$ | behaviour |
|---|---|---|
| kinetic energy dominates, $\dot\phi^2 \gg V$ | $+1$ | $\rho_\phi \propto a^{-6}$ |
| potential dominates, $\dot\phi^2 \ll V$ | $\to -1$ | $\rho_\phi \approx V \approx$ const |
| oscillation about a quadratic minimum, time average | $0$ | $\rho_\phi \propto a^{-3}$, like matter |

accelerated expansion needs $w < -1/3$ (see [[Acceleration equation]]), that is $\rho + 3p = 2\dot\phi^2 - 2V < 0$, or $\dot\phi^2 < V$.

### step 4 - equation of motion

insert $\rho_\phi$ and $p_\phi$ in the [[Continuity equation cosmology]], $\dot\rho + 3H(\rho + p) = 0$. note $\rho + p = \dot\phi^2$ and $\dot\rho = \dot\phi\ddot\phi + V'\dot\phi$.

$$\dot\phi\,\ddot\phi + V'\dot\phi + 3H\dot\phi^2 = 0$$

divide by $\dot\phi$.

$$\boxed{\, \ddot\phi + 3H\dot\phi + V'(\phi) = 0 \,}$$

the same equation follows from varying the action with respect to $\phi$ (the Klein-Gordon equation on the expanding background). it is the equation of a ball rolling down the potential with a friction term $3H\dot\phi$ supplied by the expansion.

### step 5 - Friedmann equations for the field

$$H^2 = \frac{1}{3M_{\rm Pl}^2}\left(\frac12\dot\phi^2 + V\right)$$

differentiate with respect to $t$ and use step 4 in the form $\dot\rho = -3H\dot\phi^2$.

$$2H\dot H = \frac{\dot\rho}{3M_{\rm Pl}^2} = -\frac{H\dot\phi^2}{M_{\rm Pl}^2} \quad\Longrightarrow\quad \dot H = -\frac{\dot\phi^2}{2M_{\rm Pl}^2}$$

### step 6 - the exact condition for inflation

from $H = \dot a/a$, $\dot H = \ddot a/a - H^2$, so

$$\frac{\ddot a}{a} = H^2 + \dot H = H^2\left(1 - \epsilon\right), \qquad \epsilon \equiv -\frac{\dot H}{H^2}$$

$$\ddot a > 0 \quad\Longleftrightarrow\quad \epsilon < 1$$

with step 5,

$$\epsilon = \frac{\dot\phi^2}{2M_{\rm Pl}^2H^2} = \frac{3}{2}\left(1 + w_\phi\right)$$

so $\epsilon \ll 1$ means the kinetic energy is a small fraction of the total, and $H$ is nearly constant.

### step 7 - the slow-roll approximation

two approximations.

1. $\frac12\dot\phi^2 \ll V$, so that $H^2 \approx \dfrac{V}{3M_{\rm Pl}^2}$.
2. $|\ddot\phi| \ll 3H|\dot\phi|$, so that $3H\dot\phi \approx -V'$. the field moves at the terminal velocity set by friction.

with $V$ nearly constant, $H$ is nearly constant and $a(t) \propto e^{Ht}$, quasi-de Sitter expansion.

### step 8 - conditions on the potential

insert the two slow-roll equations in $\epsilon$ from step 6. $\dot\phi = -V'/(3H)$ and $H^2 = V/(3M_{\rm Pl}^2)$.

$$\epsilon = \frac{1}{2M_{\rm Pl}^2H^2}\cdot\frac{V'^2}{9H^2} = \frac{V'^2}{18M_{\rm Pl}^2H^4} = \frac{V'^2}{18M_{\rm Pl}^2}\cdot\frac{9M_{\rm Pl}^4}{V^2}$$

$$\boxed{\, \epsilon \approx \epsilon_V \equiv \frac{M_{\rm Pl}^2}{2}\left(\frac{V'}{V}\right)^2 \,}$$

for the second approximation, differentiate $3H\dot\phi = -V'$ with respect to $t$.

$$3\dot H\dot\phi + 3H\ddot\phi = -V''\dot\phi \quad\Longrightarrow\quad \frac{\ddot\phi}{H\dot\phi} = -\frac{V''}{3H^2} - \frac{\dot H}{H^2} = -\eta_V + \epsilon_V$$

using $3H^2 = V/M_{\rm Pl}^2$ and defining

$$\boxed{\, \eta_V \equiv M_{\rm Pl}^2\,\frac{V''}{V} \,}$$

so approximation 2 holds when $|\eta_V - \epsilon_V| \ll 3$. the two conditions are

$$\epsilon_V \ll 1 \ \ (\text{the slope is small}), \qquad |\eta_V| \ll 1 \ \ (\text{the curvature is small})$$

the first guarantees acceleration. the second guarantees that it lasts, since it keeps $\ddot\phi$ small. inflation ends when $\epsilon_V(\phi_{\rm end}) \approx 1$.

### step 9 - number of e-folds

$$N \equiv \ln\frac{a_{\rm end}}{a_i} = \int_{t_i}^{t_{\rm end}}H\,dt$$

change the integration variable from $t$ to $\phi$ with $dt = d\phi/\dot\phi$, then use the slow-roll equations $\dot\phi = -V'/(3H)$ and $3H^2 = V/M_{\rm Pl}^2$.

$$N = \int_{\phi_i}^{\phi_{\rm end}}\frac{H}{\dot\phi}\,d\phi = -\int_{\phi_i}^{\phi_{\rm end}}\frac{3H^2}{V'}\,d\phi = -\frac{1}{M_{\rm Pl}^2}\int_{\phi_i}^{\phi_{\rm end}}\frac{V}{V'}\,d\phi$$

$$\boxed{\, N = \frac{1}{M_{\rm Pl}^2}\int_{\phi_{\rm end}}^{\phi_i}\frac{V}{V'}\,d\phi \,}$$

swapping the limits absorbs the minus sign. $N$ is positive when the field rolls toward smaller $V$.

## worked example, $V = \frac12m^2\phi^2$

$V' = m^2\phi$, $V'' = m^2$, $V/V' = \phi/2$.

$$\epsilon_V = \eta_V = \frac{2M_{\rm Pl}^2}{\phi^2}$$

- slow roll needs $\phi \gg \sqrt2\,M_{\rm Pl}$. inflation ends at $\phi_{\rm end} = \sqrt2\,M_{\rm Pl}$.
- e-folds, $N = \dfrac{1}{M_{\rm Pl}^2}\displaystyle\int_{\phi_{\rm end}}^{\phi_i}\frac{\phi}{2}\,d\phi = \dfrac{\phi_i^2 - \phi_{\rm end}^2}{4M_{\rm Pl}^2} = \dfrac{\phi_i^2}{4M_{\rm Pl}^2} - \dfrac12$.
- $N = 60$ needs $\phi_i \approx 15.6\,M_{\rm Pl}$.
- predictions at $N = 60$, $\epsilon_V = \eta_V \approx 1/(2N)$, so $n_s = 1 - 2/N = 0.967$ and $r = 8/N = 0.13$. the tilt fits and the tensor amplitude is excluded by data, so this simple potential is ruled out.

## why inflation solves the horizon and flatness problems

the key quantity is the comoving Hubble radius $(aH)^{-1}$.

$$\frac{d}{dt}\left(\frac{1}{aH}\right) = \frac{d}{dt}\left(\frac{1}{\dot a}\right) = -\frac{\ddot a}{\dot a^2}$$

- during radiation or matter domination $\ddot a < 0$ and $(aH)^{-1}$ grows. scales enter the horizon. regions that are in causal contact today were not in the past.
- during inflation $\ddot a > 0$ and $(aH)^{-1}$ shrinks. scales leave the horizon.

**horizon problem.** at last scattering the comoving Hubble radius subtends about $1^\circ$ on the sky today. the CMB is uniform to $10^{-5}$ over the whole sky, across some $10^4$ patches that were never in causal contact in the standard picture. with inflation, the whole observable universe was inside one Hubble radius before inflation, had time to become uniform, and was then stretched outside.

**flatness problem.** from [[Critical density and density parameters]],

$$|\Omega_{\rm tot} - 1| = \frac{|k|}{a^2H^2}$$

without inflation this grows (as $a^2$ in the radiation era and $a$ in the matter era), so $|\Omega - 1| \lesssim 10^{-2}$ today needs $|\Omega - 1| \lesssim 10^{-16}$ at BBN. during inflation $H$ is constant and $a$ grows as $e^{N}$, so $|\Omega - 1|$ falls by $e^{-2N}$.

**how much.** the comoving Hubble radius at the start of inflation must exceed the present one, $(a_iH_i)^{-1} > (a_0H_0)^{-1}$. for a high inflationary energy scale this requires $N \gtrsim 60$.

## predictions for perturbations

quantum fluctuations of $\phi$ are stretched outside the Hubble radius and become classical curvature perturbations.

- scalar amplitude $\Delta_s^2 = \dfrac{1}{24\pi^2}\dfrac{V}{M_{\rm Pl}^4\,\epsilon_V} \approx 2.1 \times 10^{-9}$ (measured).
- scalar tilt $n_s - 1 = 2\eta_V - 6\epsilon_V$. observed $n_s = 0.965 \pm 0.004$, slightly red.
- tensor-to-scalar ratio $r = 16\epsilon_V$. not detected, $r < 0.036$ at $95\%$ confidence.
- the perturbations are adiabatic and Gaussian, as observed.

these are the initial conditions for [[Linear perturbation master equation]].

## checks

- **dimensions.** $V'/V$ has units of energy$^{-1}$ and $V''/V$ of energy$^{-2}$, so $\epsilon_V$ and $\eta_V$ are dimensionless.
- **$\Lambda$ limit.** a constant $V$ has $V' = 0$, $\epsilon_V = 0$, $w = -1$ exactly, pure de Sitter. it never ends, so a real model needs a slope.
- **consistency of step 6 and step 3.** $\epsilon = \frac32(1 + w)$ gives $\epsilon < 1 \Leftrightarrow w < -1/3$.
- **matter era.** $H = 2/(3t)$ gives $\epsilon = 3/2$, and radiation gives $\epsilon = 2$, both above $1$ as they should be.

## questions I should be ready for

- *why does a scalar field give negative pressure?* $p = \frac12\dot\phi^2 - V$. when the potential dominates, $p \approx -\rho$.
- *where does the friction term come from?* from the expansion. it is the $3H(\rho + p)$ term of the continuity equation with $\rho + p = \dot\phi^2$.
- *why two slow-roll parameters?* $\epsilon_V$ ensures $\ddot a > 0$ now, $\eta_V$ ensures the field keeps rolling slowly so that inflation lasts.
- *how does inflation end?* the potential steepens, $\epsilon \to 1$, the field oscillates about its minimum and decays into particles (reheating), starting the hot radiation era.
- *which Planck mass?* the reduced one here. with $G^{-1/2}$ the parameters carry an extra $1/(8\pi)$.
- *is the comoving Hubble radius the particle horizon?* no. the Hubble radius is the distance over which signals can travel in one expansion time now. the particle horizon is the integral $\int dt/a$ over the whole past. inflation makes the particle horizon far larger than the Hubble radius.

## board summary (60 seconds)

$T_{\mu\nu} = \partial_\mu\phi\partial_\nu\phi + g_{\mu\nu}\mathcal L$ gives $\rho = \frac12\dot\phi^2 + V$, $p = \frac12\dot\phi^2 - V$. continuity gives $\ddot\phi + 3H\dot\phi + V' = 0$. Friedmann gives $\dot H = -\dot\phi^2/(2M_{\rm Pl}^2)$, so $\epsilon = -\dot H/H^2$ and $\ddot a > 0 \Leftrightarrow \epsilon < 1$. slow roll, $H^2 \approx V/(3M_{\rm Pl}^2)$ and $3H\dot\phi \approx -V'$, which need $\epsilon_V = \frac{M_{\rm Pl}^2}{2}(V'/V)^2 \ll 1$ and $|\eta_V| = M_{\rm Pl}^2|V''|/V \ll 1$. $N = M_{\rm Pl}^{-2}\int_{\phi_{\rm end}}^{\phi_i}(V/V')\,d\phi \gtrsim 60$.

## see also

- [[Friedmann equation Newtonian shell]] for $H^2 = \rho/(3M_{\rm Pl}^2)$.
- [[Continuity equation cosmology]] for the equation of motion and the $w = -1$ limit.
- [[Acceleration equation]] for the condition $w < -1/3$.
- [[Linear perturbation master equation]] takes the perturbations generated here as initial conditions.
