---
layout: default
title: "Ch 8 - Gravitational Waves"
---

# Baumann Ch 8, Gravitational Waves

up: [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.md) · [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.md)

*the final chapter and the most beautiful payoff. linearized GR, gauge symmetry, the wave equation $\Box \bar h_{\mu\nu} = -16\pi G T_{\mu\nu}$, transverse-traceless gauge with two physical polarizations, the quadrupole formula for radiation, and the September 14, 2015 LIGO detection. by the end you will understand why gravitational waves exist, what they look like, how they are produced, and why detecting them was so hard.*

---

## the question this chapter is trying to answer

> **does GR predict gravitational waves? what do they look like? how are they produced? and have we detected them?**

short answers:
1. **yes**, GR predicts gravitational waves. Einstein himself derived the wave equation in 1916.
2. they propagate at the **speed of light**, with **two physical polarizations** ($h_+$ and $h_\times$), and they cause a ring of test masses to **stretch and squeeze** in characteristic patterns.
3. they are produced by **time-varying mass quadrupole moments**. because gravity has no negative charges, there is no monopole or dipole gravitational radiation, only quadrupole and higher.
4. **yes**, LIGO detected them on **September 14, 2015**, in spectacular fashion. two black holes of $30$ and $35 M_\odot$ merging to form a $62 M_\odot$ remnant, releasing $3 M_\odot c^2$ as gravitational waves. for a fraction of a second, this single event radiated more power than all the stars in the observable universe combined.

---

## 8.1, linearized gravity, GR for weak fields

### the setup

write the spacetime metric as Minkowski plus a small perturbation:

$$g_{\mu\nu} = \eta_{\mu\nu} + h_{\mu\nu}, \qquad |h_{\mu\nu}| \ll 1$$

work to first order in $h$. the inverse metric to first order is

$$g^{\mu\nu} \approx \eta^{\mu\nu} - h^{\mu\nu}$$

where indices on $h$ are raised/lowered with $\eta$ at this order.

### linearized Christoffel and Riemann

substituting into the Christoffel formula and keeping only first-order terms:

$$\Gamma^\sigma{}_{\mu\nu} \approx \tfrac12 \eta^{\sigma\lambda}(\partial_\mu h_{\nu\lambda} + \partial_\nu h_{\mu\lambda} - \partial_\lambda h_{\mu\nu})$$

(the $\Gamma\Gamma$ terms in the Riemann tensor are $\mathcal{O}(h^2)$ and dropped.) so the linearized Riemann tensor is

$$R_{\mu\nu\rho\sigma}^{(1)} \approx \tfrac12(\partial_\rho \partial_\nu h_{\mu\sigma} - \partial_\rho \partial_\mu h_{\nu\sigma} + \partial_\sigma \partial_\mu h_{\rho\nu} - \partial_\sigma \partial_\nu h_{\rho\mu})$$

> the deep thing about this expression: it is **gauge-invariant** under the gauge transformation $h_{\mu\nu} \to h_{\mu\nu} + \partial_\mu \xi_\nu + \partial_\nu \xi_\mu$ that corresponds to small coordinate changes. so the Riemann tensor at linear order represents truly physical curvature, not a coordinate artifact.

### gauge symmetry

an infinitesimal coordinate change $x^\mu \to x^\mu - \xi^\mu(x)$ shifts the metric perturbation by

$$\boxed{\,h_{\mu\nu} \to h_{\mu\nu} + \partial_\mu \xi_\nu + \partial_\nu \xi_\mu\,}$$

this is the GR analog of the EM gauge $A_\mu \to A_\mu + \partial_\mu \alpha$. just as $F_{\mu\nu}$ is gauge-invariant in EM, the linearized Riemann tensor is gauge-invariant in GR.

### gauge fixing: the de Donder (Lorenz) gauge

to make the equations cleaner, fix the gauge. the GR analog of EM's Lorenz gauge $\partial^\mu A_\mu = 0$ is the **de Donder gauge** (also called Lorenz gauge in GR):

$$\partial^\mu \bar h_{\mu\nu} = 0$$

with the **trace-reversed perturbation**

$$\boxed{\,\bar h_{\mu\nu} \equiv h_{\mu\nu} - \tfrac12 h \eta_{\mu\nu}, \qquad h \equiv h^\mu{}_\mu\,}$$

this is **always achievable** (you can always find a $\xi^\mu$ that puts you in this gauge, see Q15 - trace-reversed perturbation and Lorenz gauge).

### Einstein's equation in Lorenz gauge

after lots of cancellation, the linearized Einstein equation in Lorenz gauge collapses to a beautifully simple **wave equation**:

$$\boxed{\,\Box \bar h_{\mu\nu} = -16\pi G\, T_{\mu\nu}\,}$$

with $\Box \equiv \eta^{\mu\nu}\partial_\mu \partial_\nu = -\partial_t^2 + \nabla^2$.

> physical interpretation: this is exactly Maxwell's $\Box A_\mu = J_\mu$ for gravity. linearized GR is a wave theory of gravity, with $\bar h_{\mu\nu}$ the field, $T_{\mu\nu}$ the source, and $G$ the coupling constant. waves propagate at the speed of light $c$, and matter sources gravitational radiation through its time-varying stress-energy.

### the Newtonian limit, recovering Poisson

for static, slow matter ($T_{0i} = T_{ij} = 0$, $T_{00} = \rho$), the wave equation becomes a Poisson equation:

$$\nabla^2 \bar h_{00} = -16\pi G \rho$$

solving with $\bar h_{00} = -4\Phi$ gives Poisson $\nabla^2 \Phi = 4\pi G \rho$. trace-reversing gives the metric perturbation:

$$h_{00} = -2\Phi, \qquad h_{ij} = -2\Phi\delta_{ij}, \qquad h_{0i} = 0$$

so the full metric is

$$ds^2 = -(1 + 2\Phi)dt^2 + (1 - 2\Phi)\delta_{ij}dx^i dx^j$$

**exactly the metric used in Q9 - weak-field Christoffel Gamma_i_00 and Q10 - weak-field Ricci scalar**. so the loop closes: GR + linearization + Lorenz gauge + slow matter = Newton.

---

## 8.2, vacuum wave solutions

### the wave equation in vacuum

with $T_{\mu\nu} = 0$, the wave equation becomes

$$\Box \bar h_{\mu\nu} = 0$$

plane-wave solutions: $\bar h_{\mu\nu} = \mathrm{Re}(H_{\mu\nu}\, e^{i k_\lambda x^\lambda})$, with $H_{\mu\nu}$ a constant complex polarization tensor and $k^\mu$ the wavevector.

substituting back, $\Box \bar h_{\mu\nu} = -k^\mu k_\mu \bar h_{\mu\nu}$, so the wave equation requires $k^\mu k_\mu = 0$: the wavevector is **null**.

with $k^\mu = (\omega, \vec k)$, this means $\omega^2 = |\vec k|^2$, equivalently $\omega = \pm|\vec k|$. so **gravitational waves propagate at the speed of light**, exactly. confirmed by GW170817 (binary neutron star merger), which arrived within $\sim 1$ second of the gamma-ray burst from the same source after $\sim 130$ million years of travel.

### counting polarizations

$H_{\mu\nu}$ is a symmetric $4 \times 4$ matrix, so naively 10 components. how many are physical?

**de Donder gauge** $k^\mu H_{\mu\nu} = 0$ removes 4 components. that leaves 6.

**residual gauge freedom**: even after fixing de Donder, we can still do gauge transformations $\xi^\mu = \lambda^\mu e^{ik\cdot x}$ with $\Box \xi^\mu = 0$ (i.e., $k^\mu k_\mu = 0$, automatic). this is 4 more parameters. these can be used to set 4 more components of $H_{\mu\nu}$ to zero.

so we go from 10 to **2 physical polarizations**. the same counting that gives 2 polarizations for the photon.

### transverse-traceless (TT) gauge

the canonical choice for the residual gauge is to set

$$H^{TT}_{0\mu} = 0 \quad\text{(purely spatial)}, \qquad H^{TT,\mu}{}_\mu = 0 \quad\text{(traceless)}$$

combined with the de Donder transversality condition $k^\mu H_{\mu\nu} = 0$. this is the **transverse-traceless gauge**, in which the GW is purely a spatial-spatial perturbation, with two non-zero independent components.

for a wave propagating in the $+z$ direction, $k^\mu = (\omega, 0, 0, \omega)$, the polarization tensor takes the form

$$\boxed{\,H^{TT}_{\mu\nu} = \begin{pmatrix} 0 & 0 & 0 & 0\\ 0 & H_+ & H_\times & 0\\ 0 & H_\times & -H_+ & 0\\ 0 & 0 & 0 & 0\end{pmatrix}\,}$$

the two polarizations $H_+$ and $H_\times$.

### what the wave does to test masses

the geodesic deviation equation for two test masses separated by $B^\mu$:

$$\frac{d^2 B^\mu}{d\tau^2} = -R^\mu{}_{0\nu 0}B^\nu = \tfrac12 \frac{d^2 h^\mu{}_\nu}{dt^2}B^\nu$$

(using $R^\mu{}_{0\nu 0} = -\tfrac12 \partial_t^2 h^\mu{}_\nu$ in TT gauge.)

let's solve for the **+ polarization** ($H_+ \neq 0$, $H_\times = 0$). plugging in:

$$\frac{d^2 B^x}{dt^2} = -\frac{\omega^2}{2}H_+ e^{i\omega t}\,B^x, \qquad \frac{d^2 B^y}{dt^2} = +\frac{\omega^2}{2}H_+ e^{i\omega t}\,B^y$$

solving perturbatively:

$$B^x(t) = B^x(0)\bigl(1 + \tfrac12 H_+ \cos\omega t + \cdots\bigr)$$
$$B^y(t) = B^y(0)\bigl(1 - \tfrac12 H_+ \cos\omega t + \cdots\bigr)$$

so a **circular ring of test masses oscillates into an ellipse**, alternately stretching along $x$ and squeezing along $y$, then reversing. this is the **+ pattern**.

> imagine a circle of stars in the $xy$ plane. when the GW arrives:
> - $t = 0$: circle
> - $t = T/4$: ellipse stretched along $x$, squeezed along $y$
> - $t = T/2$: circle again
> - $t = 3T/4$: ellipse stretched along $y$, squeezed along $x$
> - $t = T$: circle again

for the **× polarization**, the same pattern but rotated by $45°$:

$$B^1(t) \pm B^2(t) = [B^1(0) \pm B^2(0)]\bigl(1 \pm \tfrac12 H_\times \cos\omega t + \cdots\bigr)$$

so the ring oscillates along the diagonal directions, $45°$ from the axes.

these two polarizations are a complete basis: any GW is a superposition of $h_+$ and $h_\times$.

### the LIGO observable

LIGO is a **Michelson interferometer** with two perpendicular arms of length $L \sim 4$ km. a passing GW causes the arms to alternately stretch and squeeze:

$$\frac{\delta L}{L} \approx \frac{H_{+,\times}}{2}$$

for typical sources $H \sim 10^{-21}$, so $\delta L \sim 10^{-18}$ m, **about a thousand times smaller than a proton, $10^{12}$ times smaller than the laser wavelength**. the engineering miracle is that LIGO actually measures this, by detecting the resulting phase shift in laser interference.

> a useful comparison: $\delta L/L \sim 10^{-21}$ is equivalent to **measuring the distance to Alpha Centauri (4.2 light years) to the width of a human hair**. this is what LIGO does, routinely, for every GW signal.

---

## 8.3, creating gravitational waves, the quadrupole formula

### the inhomogeneous wave equation

with sources, $\Box \bar h_{\mu\nu} = -16\pi G T_{\mu\nu}$. the retarded Green's function gives

$$\bar h_{\mu\nu}(t, \vec x) = 4G \int d^3 y\, \frac{T_{\mu\nu}(t_r, \vec y)}{|\vec x - \vec y|}, \qquad t_r = t - |\vec x - \vec y|$$

the **retarded time**: the field at $(t, \vec x)$ depends on the source at the earlier time $t_r$, accounting for the finite speed of propagation.

### the far-zone, slow-motion limit

for a localized source of size $d$ at distance $r \gg d$, with non-relativistic motion ($v \ll c$):

$$\bar h_{ij}(t, \vec x) \approx \frac{4G}{r}\int d^3 y\, T_{ij}(t - r, \vec y)$$

using stress-energy conservation $\partial_\mu T^{\mu\nu} = 0$ to convert the integral of $T_{ij}$ into second derivatives of the **mass quadrupole moment**

$$I_{ij}(t) \equiv \int d^3 y\, T^{00}(t, \vec y)\, y^i y^j$$

gives the famous **quadrupole formula**:

$$\boxed{\,\bar h_{ij}(t, \vec x) = \frac{2 G}{r}\frac{d^2 I_{ij}}{dt^2}(t - r)\,}$$

so **gravitational waves are produced by a time-varying mass quadrupole moment**, evaluated at the retarded time and falling off as $1/r$ from the source.

### why no monopole or dipole

an important physical point: in EM, dipole radiation exists because there are **negative charges** that can be separated from positive ones. in gravity, there are **no negative charges**. mass conservation kills monopole radiation, momentum conservation kills dipole radiation.

so **the lowest-order gravitational radiation is quadrupole**, suppressed by powers of $v/c$ compared to dipole EM radiation. this is why GWs are so weak: they require a **time-varying mass distribution** that is not just translating uniformly. binary stars work; a single rotating star doesn't (rotation symmetric distribution = no quadrupole change).

### typical GW sources

- **binary BH or NS mergers**: spectacular sources, extreme quadrupoles during inspiral
- **rotating asymmetric neutron stars**: continuous waves at twice the rotation frequency, but very weak
- **supernova explosions**: stochastic bursts, weak unless the collapse is very asymmetric
- **inflation**: produces a stochastic background of primordial GWs at very low frequencies

LIGO is sensitive to merger frequencies ($\sim 10$-$1000$ Hz). LISA (a future space-based mission) will probe lower frequencies ($\sim 10^{-3}$ Hz), seeing supermassive BH mergers.

---

## 8.4, September 14, 2015

GW150914, the first detected gravitational-wave signal. what we learned:

- two black holes of $\sim 30$ and $\sim 35 M_\odot$ in a binary system, in some distant galaxy
- they spiraled in over millions of years, losing energy to GW emission
- they merged into a single $\sim 62 M_\odot$ black hole
- the difference, $30 + 35 - 62 = 3 M_\odot$, was radiated away as gravitational waves in a fraction of a second
- the resulting waves traveled $\sim 1.3$ billion years to reach Earth, arriving at $H \sim 10^{-21}$
- LIGO Hanford and LIGO Livingston detected the signal $\sim 7$ ms apart, consistent with light-speed propagation across the US
- the chirp pattern (rising frequency and amplitude) matched GR template predictions to extraordinary precision

> in a tiny fraction of a second, this single event radiated **more energy than all the stars in the visible universe combined emit in light**. but most of that energy went into gravitational waves, not photons, and so it was invisible to ordinary telescopes. only LIGO could "see" it.

since then: many more BH mergers (LIGO O1, O2, O3 runs), the binary neutron star merger GW170817 (with electromagnetic counterpart, kilonova in NGC 4993), the start of **multi-messenger astronomy**. LISA is in development. NANOGrav (2023) detected a stochastic GW background, possibly from supermassive BH binaries.

> Baumann's last sentence of the textbook: "this is a good place to end this course." agreed.

---

## what to remember from this chapter

if i had to compress chapter 8 into a paragraph for the oral:

> linearized GR is the weak-field perturbation theory, $g_{\mu\nu} = \eta_{\mu\nu} + h_{\mu\nu}$ with $|h| \ll 1$. the linearized Einstein tensor is gauge-invariant; the gauge symmetry is $h \to h + \partial \xi + \partial \xi$, the GR analog of the EM gauge $A \to A + \partial \alpha$. fixing de Donder (Lorenz) gauge $\partial^\mu \bar h_{\mu\nu} = 0$ collapses Einstein's equation to a wave equation $\Box \bar h_{\mu\nu} = -16 \pi G T_{\mu\nu}$, structurally identical to Maxwell's $\Box A_\mu = J_\mu$. in the static slow-motion limit this reproduces Newton's $\nabla^2 \Phi = 4\pi G \rho$. vacuum solutions are gravitational waves propagating at $c$ with two physical polarizations, $h_+$ and $h_\times$, that stretch and squeeze rings of test masses in characteristic patterns separated by $45°$. LIGO detects this stretching with strain sensitivity $\delta L/L \sim 10^{-21}$. waves are produced by time-varying mass quadrupole moments via $\bar h_{ij} = (2G/r)\ddot I_{ij}$; no monopole or dipole gravitational radiation exists because there are no negative gravitational charges. the first direct detection was September 14, 2015 (GW150914): two black holes of $30$ and $35 M_\odot$ merging to form a $62 M_\odot$ remnant, releasing $3 M_\odot c^2$ in GWs. this opened the era of gravitational-wave astronomy.

---

## connections

- [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.md)
- [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.md)
- [Linearized metric perturbation](../../../02_Zettel/Theory/Linearized metric perturbation.md) · [Linearized Christoffel and Riemann](../../../02_Zettel/Theory/Linearized Christoffel and Riemann.md) · [Linearized gauge transformations](../../../02_Zettel/Theory/Linearized gauge transformations.md) · [Trace-reversed perturbation](../../../02_Zettel/Theory/Trace-reversed perturbation.md) · [Lorenz gauge](../../../02_Zettel/Theory/Lorenz gauge.md) · [Newtonian limit of GR](../../../02_Zettel/Theory/Newtonian limit of GR.md)
- [Transverse traceless gauge](../../../02_Zettel/Theory/Transverse traceless gauge.md) · [Plus and cross polarizations](../../../02_Zettel/Theory/Plus and cross polarizations.md) · [Quadrupole formula](../../../02_Zettel/Theory/Quadrupole formula.md) · [Geodesic deviation under a GW](../../../02_Zettel/Theory/Geodesic deviation under a GW.md)
- Q9 - weak-field Christoffel Gamma_i_00 · Q10 - weak-field Ricci scalar · Q15 - trace-reversed perturbation and Lorenz gauge · Q16 - Christoffels for a TT plane wave · Q17 - Riemann R_0x0x for a TT plane wave
- previous: [Ch 7 - Cosmology](../../../01_Literature/Book/Baumann GR/Ch 7 - Cosmology.md)
- end of book.
