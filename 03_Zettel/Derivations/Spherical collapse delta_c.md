---
layout: default
title: "Spherical collapse delta_c"
---
## what I'm deriving

for a uniform spherical overdensity in an Einstein-de Sitter background,

1. the exact nonlinear evolution in parametric form (a cycloid),
2. the linear-theory density contrast extrapolated to the moment of collapse,
$$\delta_c = \frac{3}{20}(12\pi)^{2/3} \approx 1.686$$
3. the density of the virialised object relative to the background at that moment,
$$\Delta_{\rm vir} = 18\pi^2 \approx 178$$

## conventions and symbols

| symbol | meaning |
|---|---|
| $R(t)$ | physical radius of the shell bounding the overdense sphere |
| $M$ | mass inside that shell, constant |
| $\mathcal E$ | specific energy of the shell, negative for a bound perturbation |
| $\theta$ | development angle, the parameter of the cycloid, $0 \le \theta \le 2\pi$ |
| $A$, $B$ | constants of the solution, with units of length and time |
| $\bar\rho(t)$ | background density, $1/(6\pi Gt^2)$ in Einstein-de Sitter |
| $\delta$ | true (nonlinear) density contrast of the sphere, $\rho_{\rm sphere}/\bar\rho - 1$ |
| $\delta_{\rm lin}$ | density contrast predicted by linear theory for the same initial conditions |
| ta, c, vir | subscripts for turnaround, collapse, virialisation |

## assumptions

1. the perturbation is a sphere of uniform density (a top hat), embedded in an otherwise unperturbed Einstein-de Sitter universe.
2. matter is pressureless and shells do not cross, so $M$ inside the outer shell is constant until collapse.
3. Birkhoff's theorem. the shell's motion depends only on $M$, so the sphere evolves as an independent Friedmann model with its own (positive) curvature.
4. the perturbation is in the pure growing mode at early times. this fixes the sphere to have the same big bang time as the background.

## part 1 - the nonlinear solution

### step 1 - equation of motion and first integral

exactly as in [[Friedmann equation Newtonian shell]],

$$\ddot R = -\frac{GM}{R^2} \quad\Longrightarrow\quad \frac{1}{2}\dot R^2 - \frac{GM}{R} = \mathcal E$$

for a bound shell write $\mathcal E = -\frac12C$ with $C > 0$.

$$\dot R^2 = \frac{2GM}{R} - C$$

### step 2 - parametric solution

the substitution that solves this is $R = A(1 - \cos\theta)$, chosen so that $2GM/R - C$ becomes a perfect square in trigonometric functions. I claim

$$\boxed{\, R(\theta) = A\,(1 - \cos\theta), \qquad t(\theta) = B\,(\theta - \sin\theta) \,}$$

$$A = \frac{GM}{C}, \qquad B = \frac{GM}{C^{3/2}}, \qquad\text{so that}\qquad A^3 = GM\,B^2$$

**verification.** differentiate with respect to $\theta$, $dR/d\theta = A\sin\theta$ and $dt/d\theta = B(1 - \cos\theta)$. then

$$\dot R = \frac{dR/d\theta}{dt/d\theta} = \frac{A}{B}\frac{\sin\theta}{1 - \cos\theta}, \qquad \dot R^2 = \frac{A^2}{B^2}\cdot\frac{1 - \cos^2\theta}{(1 - \cos\theta)^2} = \frac{A^2}{B^2}\cdot\frac{1 + \cos\theta}{1 - \cos\theta}$$

on the other side,

$$\frac{2GM}{R} - C = \frac{2GM}{A(1 - \cos\theta)} - C = C\left[\frac{2}{1 - \cos\theta} - 1\right] = C\,\frac{1 + \cos\theta}{1 - \cos\theta}$$

using $GM/A = C$. the two agree because $A^2/B^2 = (GM/C)^2\cdot C^3/(GM)^2 = C$. the choice $t(0) = 0$ at $R = 0$ implements assumption 4.

### step 3 - the key moments

| event | $\theta$ | $R$ | $t$ |
|---|---|---|---|
| big bang | $0$ | $0$ | $0$ |
| turnaround, $\dot R = 0$ | $\pi$ | $R_{\rm ta} = 2A$ | $t_{\rm ta} = \pi B$ |
| collapse | $2\pi$ | $0$ | $t_c = 2\pi B = 2\,t_{\rm ta}$ |

the motion is symmetric in time about turnaround.

### step 4 - the nonlinear density contrast

sphere density, $\rho_{\rm sphere} = \dfrac{3M}{4\pi R^3}$. background density, $\bar\rho = \dfrac{1}{6\pi Gt^2}$ (from $H = 2/3t$ and $H^2 = \frac{8\pi G}{3}\bar\rho$).

$$1 + \delta = \frac{\rho_{\rm sphere}}{\bar\rho} = \frac{3M}{4\pi R^3}\cdot 6\pi Gt^2 = \frac{9}{2}\cdot\frac{GM\,t^2}{R^3} = \frac{9}{2}\cdot\frac{GMB^2}{A^3}\cdot\frac{(\theta - \sin\theta)^2}{(1 - \cos\theta)^3}$$

and $GMB^2/A^3 = 1$.

$$\boxed{\, 1 + \delta(\theta) = \frac{9}{2}\,\frac{(\theta - \sin\theta)^2}{(1 - \cos\theta)^3} \,}$$

exact, and independent of $M$, $A$ and $B$. at turnaround

$$1 + \delta_{\rm ta} = \frac{9}{2}\cdot\frac{\pi^2}{2^3} = \frac{9\pi^2}{16} \approx 5.55$$

at $\theta \to 2\pi$ the density formally diverges.

## part 2 - the linear extrapolation

### step 5 - expand for small $\theta$

Taylor series to the needed order.

$$\theta - \sin\theta = \frac{\theta^3}{6} - \frac{\theta^5}{120} + \cdots = \frac{\theta^3}{6}\left(1 - \frac{\theta^2}{20} + \cdots\right)$$

$$1 - \cos\theta = \frac{\theta^2}{2} - \frac{\theta^4}{24} + \cdots = \frac{\theta^2}{2}\left(1 - \frac{\theta^2}{12} + \cdots\right)$$

insert in step 4. the leading factors give $\frac92\cdot\frac{\theta^6}{36}\cdot\frac{8}{\theta^6} = 1$.

$$1 + \delta = \frac{\left(1 - \frac{\theta^2}{20}\right)^2}{\left(1 - \frac{\theta^2}{12}\right)^3} \approx \left(1 - \frac{\theta^2}{10}\right)\left(1 + \frac{\theta^2}{4}\right) \approx 1 + \frac{3}{20}\theta^2$$

$$\delta \approx \frac{3}{20}\,\theta^2 \qquad (\theta \ll 1)$$

### step 6 - express $\theta$ through $t$

at leading order $t = B\theta^3/6$, so $\theta = (6t/B)^{1/3}$.

$$\delta \approx \frac{3}{20}\left(\frac{6t}{B}\right)^{2/3}$$

this grows as $t^{2/3} \propto a$, which is the linear growing mode of [[Growth factor matter era]]. the exact solution therefore reduces to linear theory at early times, as it must, and the coefficient is now fixed. I define the linear contrast at all times by this expression.

$$\boxed{\, \delta_{\rm lin}(t) = \frac{3}{20}\left(\frac{6t}{B}\right)^{2/3} \,}$$

### step 7 - evaluate at turnaround and at collapse

$$\delta_{\rm lin}(t_{\rm ta}) = \frac{3}{20}(6\pi)^{2/3} \approx 1.062$$

$$\delta_{\rm lin}(t_c) = \frac{3}{20}\left(\frac{6\cdot 2\pi B}{B}\right)^{2/3} = \frac{3}{20}(12\pi)^{2/3}$$

numerically $(12\pi)^{2/3} = 37.70^{2/3} = 11.24$.

$$\boxed{\, \delta_c = \frac{3}{20}(12\pi)^{2/3} \approx 1.686 \,}$$

$B$ has cancelled. the threshold is the same for every mass and every collapse time.

what the number means. $\delta_c$ is not the density of anything. it is the value that linear theory assigns at the instant when the true perturbation has collapsed. it converts a statement about nonlinear collapse into a statement about the linear field, which is all that [[Press Schechter mass function]] needs.

## part 3 - virialisation

### step 8 - the virial radius

a real perturbation does not collapse to a point. small departures from spherical symmetry convert the infall into random motions (violent relaxation), and the object settles into virial equilibrium, $2K + U = 0$.

- at turnaround the kinetic energy is zero, so the total energy is $E = U_{\rm ta}$.
- in virial equilibrium $E = K + U = -\frac12U + U = \frac12U_{\rm vir}$.
- energy conservation gives $U_{\rm vir} = 2U_{\rm ta}$.

for a uniform sphere $U = -\frac35GM^2/R$, so $U \propto 1/R$ and

$$R_{\rm vir} = \frac{R_{\rm ta}}{2} = A$$

### step 9 - the virial overdensity

by convention virialisation is taken to be complete at $t_c$. write the ratio as a product of three factors.

$$\Delta_{\rm vir} \equiv \frac{\rho_{\rm vir}}{\bar\rho(t_c)} = \frac{\rho_{\rm vir}}{\rho_{\rm ta}}\cdot\frac{\rho_{\rm ta}}{\bar\rho(t_{\rm ta})}\cdot\frac{\bar\rho(t_{\rm ta})}{\bar\rho(t_c)}$$

- the sphere shrinks by a factor of $2$ in radius, $\rho_{\rm vir}/\rho_{\rm ta} = 2^3 = 8$.
- from step 4, $\rho_{\rm ta}/\bar\rho(t_{\rm ta}) = 9\pi^2/16$.
- the background dilutes as $\bar\rho \propto t^{-2}$ while $t$ doubles, $\bar\rho(t_{\rm ta})/\bar\rho(t_c) = 2^2 = 4$.

$$\boxed{\, \Delta_{\rm vir} = 8\cdot\frac{9\pi^2}{16}\cdot 4 = 18\pi^2 \approx 178 \,}$$

this is the origin of the convention of defining halo masses within the radius enclosing $200$ times the mean (or critical) density.

## summary of the numbers

| moment | $\theta$ | $t$ | true $1 + \delta$ | $\delta_{\rm lin}$ |
|---|---|---|---|---|
| early | $\ll 1$ | $\ll B$ | $1 + \frac{3}{20}\theta^2$ | $\frac{3}{20}\theta^2$ |
| turnaround | $\pi$ | $\pi B$ | $5.55$ | $1.062$ |
| collapse and virialisation | $2\pi$ | $2\pi B$ | $178$ | $1.686$ |

linear theory underestimates the density badly once $\delta \gtrsim 1$, which is expected. it is still a good clock.

## checks

- **dimensions.** $A^3 = GMB^2$ is length$^3$ on both sides.
- **Kepler.** $t_c = 2\pi B = 2\pi\sqrt{A^3/GM}$ is the period of a degenerate (radial) Kepler orbit with semi-major axis $A = R_{\rm ta}/2$.
- **free-fall time.** from turnaround to collapse, $t_c - t_{\rm ta} = \pi B = \sqrt{3\pi/(32G\rho_{\rm ta})}$, the standard free-fall time of a uniform sphere.
- **linear regime.** $\delta_{\rm lin} \propto t^{2/3}$, the Einstein-de Sitter growing mode.

## beyond Einstein-de Sitter

with $\Lambda$ or curvature the same calculation gives a $\delta_c$ that depends very weakly on cosmology, $\delta_c \approx 1.686\,[\Omega_m(z)]^{0.0055}$ in flat $\Lambda$CDM, so $1.686$ is used everywhere. $\Delta_{\rm vir}$ changes more, to about $100$ times the critical density at $z = 0$ (Bryan and Norman 1998). for collapse at redshift $z$, the threshold applied to the field linearly extrapolated to today is $\delta_c/D(z)$.

## questions I should be ready for

- *why does a closed Friedmann model describe the sphere?* Birkhoff. the interior does not know about the exterior, and an overdense region has negative specific energy, the analogue of $k > 0$.
- *how do I check the cycloid solves the equation?* compute $\dot R$ as $(dR/d\theta)/(dt/d\theta)$ and compare $\dot R^2$ with $2GM/R - C$.
- *why expand to second order in $\theta^2$?* the leading terms of sphere and background cancel exactly, which is the statement that the sphere starts indistinguishable from the background. the contrast is the next order.
- *why is $\delta_c$ independent of mass?* the problem has no scale. $B$ cancels between $\delta_{\rm lin}(t)$ and $t_c$.
- *why $R_{\rm vir} = R_{\rm ta}/2$?* virial theorem plus energy conservation, with $U \propto 1/R$.
- *is the factor $178$ exact for real halos?* no. real halos are not uniform or spherical. it is a convention motivated by this model.

## board summary (60 seconds)

bound shell, $\dot R^2 = 2GM/R - C$. cycloid $R = A(1 - \cos\theta)$, $t = B(\theta - \sin\theta)$, $A^3 = GMB^2$. turnaround at $\theta = \pi$, collapse at $2\pi$, $t_c = 2\pi B$. background $\bar\rho = 1/(6\pi Gt^2)$, so $1 + \delta = \frac92(\theta - \sin\theta)^2/(1 - \cos\theta)^3$, equal to $9\pi^2/16$ at turnaround. small $\theta$, $\delta = \frac{3}{20}\theta^2 = \frac{3}{20}(6t/B)^{2/3}$. at $t_c$, $\delta_c = \frac{3}{20}(12\pi)^{2/3} = 1.686$. virial theorem gives $R_{\rm vir} = R_{\rm ta}/2$, so $\Delta_{\rm vir} = 8\cdot\frac{9\pi^2}{16}\cdot 4 = 18\pi^2$.

## see also

- [[Friedmann equation Newtonian shell]] for the shell equation and Birkhoff's theorem.
- [[Growth factor matter era]] for the linear growing mode $\delta \propto a$.
- [[Press Schechter mass function]] uses $\delta_c$ as the collapse threshold.
