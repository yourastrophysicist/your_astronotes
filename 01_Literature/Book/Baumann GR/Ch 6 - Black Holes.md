---
layout: default
title: "Ch 6 - Black Holes"
---

# Baumann Ch 6, Black Holes

up: [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.md) · [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.md)

*the longest chapter and the most fun. what really happens at the Schwarzschild horizon, why $r = 2GM$ is not a "real" singularity, how the spacetime extends past the horizon (Eddington-Finkelstein, Kruskal), and what charged and rotating black holes look like (Reissner-Nordstrom, Kerr). this chapter does not appear directly in the 20 exam questions, but it is the place oral examiners love to dig.*

---

## the question this chapter is trying to answer

> **what really happens at $r = 2GM$? is it a singularity? what does it look like to an observer falling in? and what about black holes that are charged or rotating?**

the answers, in order:

1. $r = 2GM$ is a **coordinate singularity**, not a physical one. the metric components blow up in Schwarzschild coordinates, but the actual spacetime is regular there. the Kretschmann scalar (a coordinate-invariant measure of curvature) is finite at $r = 2GM$ and only blows up at $r = 0$.
2. an **infalling observer** crosses the horizon in finite proper time, doesn't notice anything special locally, and then reaches the singularity at $r = 0$ in finite proper time. but a **distant observer** sees them redshifted to oblivion, asymptotically approaching the horizon but never crossing it.
3. **charged black holes** (Reissner-Nordstrom) and **rotating black holes** (Kerr) have richer structures, with multiple horizons and ergoregions where energy can be extracted (Penrose process, the classical seed of Hawking radiation).

---

## 6.1, Schwarzschild black holes

### diagnosing singularities, coordinate vs curvature

the Schwarzschild metric

$$ds^2 = -\left(1 - \frac{2GM}{r}\right)dt^2 + \left(1 - \frac{2GM}{r}\right)^{-1}dr^2 + r^2 d\Omega^2$$

has metric components that misbehave at $r = 0$ and $r = 2GM$. **how do we tell which are real and which are coordinate artifacts?**

the trick is to compute **scalar curvature invariants**, which are coordinate-independent. if they blow up, the singularity is real. if they are finite, it is just bad coordinates.

for Schwarzschild (a vacuum solution), $R = 0$ and $R_{\mu\nu}R^{\mu\nu} = 0$, so the Ricci scalar tells us nothing. the simplest non-trivial invariant is the **Kretschmann scalar**:

$$\boxed{\,R_{\mu\nu\rho\sigma}R^{\mu\nu\rho\sigma} = \frac{48 G^2 M^2}{r^6}\,}$$

so:

- **$r = 0$**: Kretschmann diverges. **physical singularity**, the "heart" of the black hole. the spacetime ends there.
- **$r = 2GM$**: Kretschmann is finite, $48 G^2 M^2 / (2GM)^6 = 3/(4 G^4 M^4)$. **coordinate singularity** only. there is nothing physically wrong with the spacetime at this radius.

### the event horizon

so $r = 2GM$ is not a physical singularity, but it IS a special place. it is the **event horizon**: a one-way surface inside which nothing (not even light) can escape. let me explain why.

physical Schwarzschild radii to keep in my head:

| object | mass | $R_S$ |
| --- | --- | --- |
| Earth | $6 \times 10^{24}$ kg | 9 mm |
| Sun | $2 \times 10^{30}$ kg | 3 km |
| stellar BH | $\sim 4 M_\odot$ | $\sim 12$ km |
| Sgr A$^*$ (galactic center BH) | $4 \times 10^6 M_\odot$ | $\sim 10^{10}$ m |
| M87$^*$ (the EHT image) | $6.5 \times 10^9 M_\odot$ | $\sim 10^{13}$ m |

ordinary stars and planets have $R \gg R_S$, so the Schwarzschild radius is buried inside the matter and the metric doesn't apply there. only when matter is compressed below $R_S$ (post-collapse of a $> 4 M_\odot$ star past white-dwarf and neutron-star phases) does a black hole form.

### near-horizon limit, Rindler space

let's zoom in on $r = 2GM$ via $r = 2GM + \eta$ with $\eta \ll 2GM$. expanding to first order:

$$ds^2 \simeq -\frac{\eta}{2GM}dt^2 + \frac{2GM}{\eta}d\eta^2 + (2GM)^2 d\Omega^2$$

the $d\Omega^2$ part becomes a 2-sphere of fixed radius $2GM$. the radial-time part, with $\rho^2 \equiv 8GM\eta$, becomes

$$ds^2_{\rm Rindler} = -\left(\frac{\rho}{4GM}\right)^2 dt^2 + d\rho^2$$

this is **Rindler space**, the spacetime of a uniformly accelerated observer in flat Minkowski. the change of variables

$$T = \rho \sinh(t/4GM), \qquad X = \rho \cosh(t/4GM)$$

converts this to Minkowski:

$$ds^2 = -dT^2 + dX^2$$

so **the near-horizon geometry of a Schwarzschild black hole is just disguised flat Minkowski space**, viewed from an accelerated reference frame.

> physical interpretations of this remarkable fact:
> - the **horizon at $\rho = 0$** corresponds to $T = X = 0$ for finite $t$ but extends to $T = \pm X$ as $t \to \pm\infty$. so the horizon is a **null surface** ($X^2 - T^2 = 0$), not a timelike surface like the surface of a star.
> - a static observer at fixed $r$ (constant $\rho$) is undergoing **constant proper acceleration**. they have to fire rockets to avoid falling into the black hole, just as a Rindler observer in Minkowski has to accelerate to maintain a fixed Rindler position.
> - this is also the conceptual root of **Hawking radiation**: an accelerated observer in Minkowski sees the vacuum as thermal (Unruh effect), which becomes the Hawking effect when wrapped around a real horizon. the temperature is $T_{\rm H} = 1/(8\pi GM)$, hotter for smaller black holes.

### Eddington-Finkelstein coordinates, smoothing through the horizon

the failure of Schwarzschild coordinates at the horizon is visible in light cones: radial null geodesics have $dt/dr = \pm 1/(1 - 2GM/r)$, which **diverges** at $r = 2GM$. light cones "close up" near the horizon in these coordinates.

introduce the **tortoise coordinate** $r^*$ via $dr^*/dr = (1 - 2GM/r)^{-1}$:

$$r^* = r + 2GM\ln|r/(2GM) - 1|$$

then radial null geodesics have $dt = \pm dr^*$, $\pm 45°$ slope. but $r^* \to -\infty$ at $r = 2GM$, so the horizon is pushed to infinity.

now define the **null coordinates**

$$v \equiv t + r^*, \qquad u \equiv t - r^*$$

ingoing null rays have $v = $ const, outgoing null rays have $u = $ const.

substituting $t = v - r^*$ into the Schwarzschild metric gives the **ingoing Eddington-Finkelstein form**:

$$\boxed{\,ds^2 = -(1 - 2GM/r)\,dv^2 + 2 dv\, dr + r^2 d\Omega^2\,}$$

the determinant $\det g = -r^4 \sin^2\theta$ is now **regular at $r = 2GM$**! the metric is smooth at the horizon, finally proving that the "singularity" there was a coordinate artifact.

what about light cones in these coordinates? at the horizon, the cones don't close up; instead, they **tilt over**. inside the horizon ($r < 2GM$), the "outgoing" light rays actually have $dr < 0$: even light is dragged toward the singularity. this is what makes $r < 2GM$ a black hole region. **everything inside the horizon is forced to fall in.**

### white holes

an analogous transformation using $u$ instead of $v$ gives the **outgoing Eddington-Finkelstein form**, which describes a **white hole**: the time-reverse of a black hole, where everything inside the horizon is forced to flow **out** instead of in.

white holes are not believed to exist in nature (you can't form one by collapse), but they appear in the maximally extended Schwarzschild geometry.

### Kruskal coordinates, the maximally extended spacetime

using both $u$ and $v$ together, define the **Kruskal coordinates**:

$$U \equiv -e^{-u/(4GM)}, \qquad V \equiv e^{v/(4GM)}$$

then the Schwarzschild metric becomes

$$\boxed{\,ds^2 = -\frac{32 G^3 M^3}{r}e^{-r/(2GM)}\,dU\,dV + r^2 d\Omega^2\,}$$

equivalently, with $T = (V + U)/2$, $X = (V - U)/2$:

$$ds^2 = \frac{32 G^3 M^3}{r}e^{-r/(2GM)}(-dT^2 + dX^2) + r^2 d\Omega^2$$

the metric is **manifestly regular** at the horizon. radial null rays are $T = \pm X + $ const, exactly $45°$ throughout. the horizon $r = 2GM$ corresponds to $T = \pm X$, a **null surface**.

the original Schwarzschild coordinates only cover the region $X > |T|$ (Region I). but the Kruskal coordinates extend everywhere, revealing **four regions**:

- **Region I**, $X > |T|$: the exterior of the black hole, the original Schwarzschild geometry
- **Region II**, $T > |X|$: the **inside of the black hole**. all future-directed timelike worldlines hit $r = 0$ (the upper hyperbola). this is where things fall to die.
- **Region III**, $T < -|X|$: the inside of a **white hole**. opposite of region II.
- **Region IV**, $X < -|T|$: another exterior region, a **mirror copy** of region I, **causally disconnected** from region I. connected to it only by a wormhole at $T = 0$.

regions I and IV are connected by an **Einstein-Rosen bridge** (wormhole), but it is **not traversable**: the regions are spacelike-separated, so you cannot send a signal through. these are not the science-fiction wormholes you can travel through.

### real vs eternal black holes

the **maximally extended** (eternal) Schwarzschild geometry has all four regions. but **a real black hole formed by collapse** has only Regions I and II, plus the collapsing matter. there is no Region III (white hole) or Region IV (mirror universe), they are artifacts of assuming an eternal spacetime.

### Penrose diagrams

a way to compactify spacetime so the entire infinite manifold fits on a sheet of paper, while preserving the causal structure (null lines stay at $45°$). achieved by a conformal transformation to bring $\pm \infty$ to finite coordinates.

example: 2D Minkowski has a diamond-shaped Penrose diagram with corners at:
- **$i^+$, future timelike infinity** (top): where all timelike geodesics end
- **$i^-$, past timelike infinity** (bottom)
- **$i^0$, spacelike infinity** (left and right corners)
- **$\mathcal{I}^\pm$, future and past null infinity** (the four edges): where null geodesics start and end

the Schwarzschild Penrose diagram is similar to the Kruskal diagram but with the singularities $r = 0$ as horizontal jagged lines (spacelike singularities) at top and bottom of regions II and III.

a **real black hole** has a simpler Penrose diagram: regions III and IV are replaced by collapsing matter, leaving just region I (exterior) and the upper part of region II (interior, ending at the spacelike singularity at $r = 0$).

---

## 6.2, charged black holes (Reissner-Nordstrom)

### the metric

solving Einstein's equation coupled to Maxwell's, with electric charge $Q_e$ and magnetic charge $Q_m$, gives the **Reissner-Nordstrom metric**:

$$\boxed{\,ds^2 = -\Delta(r)\,dt^2 + \Delta(r)^{-1}\,dr^2 + r^2 d\Omega^2\,}$$

with

$$\Delta(r) = 1 - \frac{2GM}{r} + \frac{Q^2}{r^2}, \qquad Q^2 \equiv \frac{G(Q_e^2 + Q_m^2)}{2\pi}$$

### horizons

$\Delta(r) = 0$ has solutions

$$r_\pm = GM \pm \sqrt{G^2 M^2 - Q^2}$$

three cases:

1. **$|Q| > GM$**: $\Delta$ has no zeros. **naked singularity**, no horizon. believed unphysical (cosmic censorship conjecture: nature forbids naked singularities).
2. **$|Q| < GM$** (typical): two horizons, **outer** $r_+$ and **inner** $r_-$. spacetime is more complex than Schwarzschild: between the two horizons, $r$ is timelike (so $r$ must decrease toward the future); below $r_-$, $r$ is spacelike again, so an observer can avoid the singularity.
3. **$|Q| = GM$**: **extremal black hole**. the two horizons merge. extremal RN BHs play a special role in string theory (BPS states, exact entropy formulas).

### the extremal near-horizon geometry, AdS$_2 \times S^2$

zooming in on the horizon of an extremal RN BH ($|Q| = GM$, $r_+ = r_- = GM$) gives a remarkable factorization:

$$ds^2 \to -\frac{\eta^2}{(GM)^2}dt^2 + \frac{(GM)^2}{\eta^2}d\eta^2 + (GM)^2 d\Omega^2$$

the radial-time part is **AdS$_2$** (2D anti-de Sitter), and the angular part is a **2-sphere $S^2$**. this **AdS$_2 \times S^2$** geometry, called the Robinson-Bertotti spacetime, was the seed of the **AdS/CFT correspondence**, one of the deepest ideas in modern theoretical physics.

---

## 6.3, rotating black holes (Kerr)

real astrophysical black holes typically rotate. the unique stationary, axisymmetric vacuum solution is the **Kerr metric**, found by Roy Kerr in 1963 (almost 50 years after Schwarzschild). in **Boyer-Lindquist coordinates**:

$$\boxed{\,ds^2 = -\frac{\Delta}{\rho^2}(dt - a\sin^2\theta\,d\phi)^2 + \frac{\sin^2\theta}{\rho^2}\bigl[(r^2 + a^2)\,d\phi - a\,dt\bigr]^2 + \frac{\rho^2}{\Delta}dr^2 + \rho^2 d\theta^2\,}$$

with

$$\Delta \equiv r^2 - 2GMr + a^2, \qquad \rho^2 \equiv r^2 + a^2 \cos^2\theta, \qquad a \equiv J/M$$

(angular momentum per unit mass.)

### horizons

$\Delta = 0$ at $r_\pm = GM \pm \sqrt{G^2 M^2 - a^2}$. same three cases as RN:
- $a > GM$: naked singularity (unphysical, cosmic censorship)
- $a < GM$: two horizons (typical case)
- $a = GM$: extremal Kerr

### the ergoregion

something interesting happens just outside the outer horizon. the Killing vector $K = \partial_t$ has norm

$$g_{\mu\nu}K^\mu K^\nu = g_{tt} = -\frac{1}{\rho^2}(r^2 - 2GMr + a^2 \cos^2\theta)$$

at large $r$ this is negative (so $K$ is timelike), but in a region close to the horizon it becomes **positive** ($K$ is spacelike). this region, called the **ergoregion**, is bounded by

$$GM + \sqrt{G^2 M^2 - a^2} < r < GM + \sqrt{G^2 M^2 - a^2 \cos^2\theta}$$

**physical consequences**: inside the ergoregion, no observer can stay at rest. the rotation of the black hole drags spacetime along with it (frame dragging), forcing all observers to co-rotate with the BH. the ergoregion lies *outside* the horizon, so observers in it can still escape.

### the Penrose process

inside the ergoregion, the **conserved energy** $E = -K^\mu P_\mu$ of a particle can be **negative**, because $K$ is spacelike and so $K \cdot P$ doesn't have a fixed sign.

this opens up the **Penrose process** for energy extraction:

1. drop an object into the ergoregion
2. inside the ergoregion, split it into two pieces: piece A with $E_A < 0$, piece B with $E_B = E_{\rm in} + |E_A| > E_{\rm in}$
3. piece A falls into the BH (carrying away negative energy and reducing the BH's mass), piece B escapes carrying **more energy than the original object brought in**

net effect: **energy is extracted from the rotational kinetic energy of the BH**. the BH spins down. you can extract up to about 29% of the BH's rest energy this way.

> astrophysical relevance: the **Blandford-Znajek mechanism** is a quantum-electromagnetic version of the Penrose process that powers the relativistic jets seen from active galactic nuclei (M87, quasars, etc.). they are tapping the rotational energy of supermassive black holes.

> theoretical relevance: the Penrose process is the **classical analog of Hawking radiation**. Hawking was inspired by Penrose's idea to think about quantum-mechanical processes at horizons, leading to the discovery that BHs radiate thermally with $T_{\rm H} = 1/(8\pi GM)$. this connects black holes to thermodynamics: a BH has temperature, entropy ($S = A/4G$, the area law), and obeys the laws of thermodynamics. one of the deepest results in theoretical physics.

---

## what to remember from this chapter

if i had to compress chapter 6 into a paragraph for the oral:

> the apparent singularity at the Schwarzschild radius $r = 2GM$ is a coordinate artifact, not a physical singularity. the Kretschmann scalar $R_{\mu\nu\rho\sigma}R^{\mu\nu\rho\sigma} = 48 G^2 M^2/r^6$ is finite there but blows up at $r = 0$, the true curvature singularity. the near-horizon geometry is locally Rindler space (an accelerated patch of Minkowski). Eddington-Finkelstein coordinates remove the coordinate singularity and show that light cones tilt over inside the horizon, making it a one-way membrane. Kruskal coordinates give the maximally extended spacetime with four regions (exterior, BH interior, white hole interior, mirror exterior connected by a non-traversable wormhole), but real BHs from collapse have only the exterior and BH interior. Penrose diagrams compactify everything onto a finite figure for visualization. charged black holes (Reissner-Nordstrom) and rotating black holes (Kerr) have richer structures with multiple horizons and (for Kerr) an ergoregion where energy can be extracted via the Penrose process, the classical seed of Hawking radiation.

---

## connections

- [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.md)
- [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.md)
- [Schwarzschild metric](../../../02_Zettel/Theory/Schwarzschild metric.md) · [Schwarzschild horizon](../../../02_Zettel/Theory/Schwarzschild horizon.md) · [Eddington-Finkelstein and Kruskal](../../../02_Zettel/Theory/Eddington-Finkelstein and Kruskal.md) · [Birkhoff theorem](../../../02_Zettel/Theory/Birkhoff theorem.md)
- Q11 - selected Schwarzschild Christoffels through Q14 - photon trajectory and impact parameter (this chapter is the deep cuts on Schwarzschild)
- [Photon sphere](../../../02_Zettel/Theory/Photon sphere.md) · [Radial infall](../../../02_Zettel/Theory/Radial infall.md)
- Hawking radiation (extension)
- previous: [Ch 5 - The Einstein Equation](../../../01_Literature/Book/Baumann GR/Ch 5 - The Einstein Equation.md)
- next: [Ch 7 - Cosmology](../../../01_Literature/Book/Baumann GR/Ch 7 - Cosmology.md)
