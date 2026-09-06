---
layout: default
title: "Ch 1 - Gravity is Geometry"
---

# Baumann Ch 1, Gravity is Geometry

up: [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.md) · [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.md)

*pages 4 to 11. the chapter that motivates the entire theory. why Newton fails, why the equivalence principle is the right starting point, what its observational consequences are, and how it forces us, step by step, into the conclusion that spacetime must be curved. by the end of this chapter we will have written down the weak-field metric $g_{00} = -(1 + 2\Phi/c^2)$ from physical reasoning alone.*

---

## the question this chapter is trying to answer

> **why do we need a new theory of gravity at all? Newton works for the moon, planets, satellites. why complicate it?**

the answer is that Newtonian gravity has two cracks that **cannot be patched** within Newton's framework, plus one universal experimental fact (the equivalence of inertial and gravitational mass) that Newton cannot explain. once we take that universal fact seriously and ask what it means physically, we are forced into a picture where **gravity is not a force on top of flat space, but the geometry of spacetime itself**.

so the structure of this chapter is:

1. show that Newton's gravity is broken (1.1)
2. take the equivalence principle seriously and see what it implies (1.2)
3. derive three observational consequences from EP alone, before we have any field equations (1.3)
4. show that those consequences are most naturally understood by saying spacetime is curved, and read off the weak-field metric (1.4)

by the end, we have built the whole conceptual edifice of GR from a single empirical fact ($m_I = m_G$) and demanded consistency with special relativity. everything else in the course is just the mathematical formalism that makes this rigorous.

---

## 1.1, what is wrong with Newton

Newtonian gravity is described by a scalar potential $\Phi(\vec x, t)$ satisfying **Poisson's equation**

$$\nabla^2 \Phi = 4\pi G \rho$$

with Green's function solution

$$\Phi(\vec x, t) = -G \int d^3 x'\, \frac{\rho(\vec x', t)}{|\vec x - \vec x'|}$$

### crack 1, Newton breaks special relativity

two problems with Poisson:

1. **instantaneous propagation**: a change in $\rho$ at $\vec x'$ changes $\Phi$ at $\vec x$ at the same instant $t$. that violates special relativity (no signal faster than $c$). if the Sun moved, Earth would feel the change instantly across $8$ light-minutes of vacuum.
2. **not Lorentz covariant**: Poisson's equation is not a tensor equation. it changes form when i switch to a moving inertial frame, because Lorentz transformations mix space and time, but Poisson treats them asymmetrically. it picks out the rest frame of the source implicitly. this is unacceptable in a relativistic theory.

a similar problem exists in **Coulomb's law** of electrostatics, $\nabla^2 \phi = -\rho_e/\epsilon_0$. there the resolution is **Maxwell's equations**, $\partial_\nu F^{\mu\nu} = J^\mu$, written tensorially with the field strength $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$. these are Lorentz-covariant, the field propagates at $c$, and the static limit recovers Coulomb. our challenge in GR is to find the analog of Maxwell's equations for gravity. that analog is the [Einstein equations](../../../02_Zettel/Theory/Einstein equations.md).

### crack 2, Mercury's perihelion

Mercury's orbit is an ellipse, but the ellipse itself rotates slowly (the "perihelion precesses"). Newtonian gravity, accounting for the perturbations from the other planets, predicts $532''$ per century. observation gives $575''$. the missing $43''$ per century has no Newtonian explanation.

Le Verrier (the same astronomer who used Uranus's orbital wobble to predict Neptune in 1846) tried to fix it by postulating a hypothetical planet inside Mercury's orbit, called **Vulcan**. there is no Vulcan. the missing $43''$ just sits there as an embarrassment for fifty years.

GR, when it finally arrives, predicts exactly $43''$ per century from first principles. that single number was Einstein's first major confirmation, and the calculation will appear in Ch 3 when we expand Schwarzschild orbits perturbatively.

---

## 1.2, the equivalence principle

so we need a new theory. where to start?

the deepest puzzle of Newtonian gravity is the simple observation that everyone has noticed but no one has taken seriously: **all objects fall at the same rate in a gravitational field**.

a feather and a hammer, in vacuum, hit the ground at the same time (Apollo 15 demonstrated this on the Moon, on television). Newton's $m\vec a = m\vec g$ "explains" it: the $m$ on the left cancels the $m$ on the right. but **why** are these two $m$'s the same?

it is worth distinguishing them carefully:

- **gravitational mass** $m_G$: the source of (and response to) gravitational fields, like electric charge $q$
- **inertial mass** $m_I$: the dynamical resistance to forces, in $F = m_I a$

Newton's law really reads $m_I \vec a = m_G \vec g$, so the acceleration is $\vec a = (m_G/m_I)\vec g$. **experimentally** (Eötvös 1909, Dicke 1964, and modern torsion balance and lunar laser ranging tests):

$$\frac{m_I}{m_G} = 1 \pm 10^{-13}$$

in Newton this equality is unexplained, an "accident" of the universe. in GR we promote it to a **principle**:

> **weak equivalence principle (WEP)**: $m_I = m_G$ exactly, for all bodies of all compositions.

### gravity looks like a fictitious force

WEP has a striking consequence: **gravity is universal**. all objects with the same initial position and velocity follow the same trajectory in a gravitational field, regardless of mass or composition. this looks like the behavior of fictitious forces (centrifugal, Coriolis), which are also proportional to $m_I$ in non-inertial frames. so a natural question: could gravity be a fictitious force, an artifact of using the wrong reference frame?

### Einstein's elevator

Einstein's thought experiment makes the idea concrete. inside a sealed box, you cannot tell the difference between

- sitting on Earth in a uniform gravitational field $\vec g$, with all objects falling at $\vec g$, and
- being in deep space inside a rocket accelerating at $\vec a = -\vec g$, with all objects (relative to the rocket) "falling" at $\vec g$

extending WEP to **all experiments** (not just dropping particles, but also light, atomic clocks, chemistry, anything) gives the **Einstein equivalence principle (EEP)**:

> in a small region of spacetime, the laws of physics reduce to those of special relativity.

equivalently: a **freely-falling observer** is locally indistinguishable from an inertial observer in flat space. Einstein called this realization, that "a person in free fall does not feel their own weight," his **happiest thought**. it transforms gravity from a mysterious universal force into a property of the choice of reference frame.

this is what becomes [Locally inertial frame](../../../02_Zettel/Theory/Locally inertial frame.md) in GR's mathematical language: at every point you can choose coordinates where $\Gamma^\alpha{}_{\mu\nu} = 0$ (no gravitational acceleration locally) and $g_{\mu\nu} = \eta_{\mu\nu}$. the gravitational field has been transformed away in a small patch.

### tidal forces, the limit of EEP

the equivalence principle holds **only in small regions**. take a box freely falling toward Earth and put two test particles on either side, separated horizontally. each one accelerates radially toward Earth's center, so they accelerate **toward each other**. take two test particles separated vertically; the lower one accelerates more (Earth's field is stronger there), so they accelerate **apart**.

these are **tidal forces**. they are the **real, irreducible content** of gravity, the part that cannot be removed by going to a freely-falling frame. they are what tells us we are in a true gravitational field, not just a uniformly accelerating rocket.

> the slogan: **gravity = uniform acceleration + tidal effects**. EEP eats the uniform piece. what is left, the tidal piece, is curvature. it is what the [Riemann tensor](../../../02_Zettel/Theory/Riemann tensor.md) measures, and it is why we need to extend special relativity to curved spacetime.

---

## 1.3, observational consequences of the EEP

three predictions follow from the equivalence principle alone, before we even build curved spacetime. each was a major experimental milestone for GR.

### gravitational redshift

Alice at the bottom of a gravitational well sends a light pulse upward to Bob at the top. by EEP, this is locally equivalent to Alice and Bob being in a rocket accelerating upward in flat space. Bob receives the light slightly Doppler-shifted because his velocity has increased during the light's transit. for a height $h$ in field $g$, the rocket's velocity gain in transit time $h/c$ is $\Delta v = gh/c$, so

$$\frac{\Delta \lambda}{\lambda_0} = \frac{\Delta v}{c} = \frac{g h}{c^2} = \frac{\Delta \Phi}{c^2}$$

so light **redshifts** as it climbs out of a gravitational well:

$$\boxed{\,\frac{\Delta\lambda}{\lambda_0} = \frac{\Delta \Phi}{c^2}\,}$$

confirmed by **Pound and Rebka 1959** in the Jefferson tower at Harvard, using the Mössbauer effect to measure the tiny shift of $\sim 10^{-15}$ in $\lambda$ over $22.5$ m. the formula generalizes to non-uniform fields with $\Delta\Phi$ the integrated potential difference along the light's path.

### gravitational time dilation

if light has a longer wavelength at Bob, its **period** is longer too. so clocks at Bob (high $\Phi$, weaker gravity) tick faster than clocks at Alice (low $\Phi$, stronger gravity):

$$T_B = \left(1 + \frac{\Phi_B - \Phi_A}{c^2}\right) T_A$$

> time runs slower in regions of smaller (more negative) $\Phi$.

this works for **any** clock, including biological ones. if you live at sea level you age slightly slower than someone on a mountaintop. the effect is tiny (parts in $10^{16}$ for a $10$ m height) but real and now routinely measured in optical-clock experiments.

**the GPS application**: GPS satellites are at $\sim 20{,}000$ km altitude, where $\Phi$ is less negative (weaker gravity), so their on-board atomic clocks tick faster by about $45 \mu s$/day relative to the ground. correcting for the SR time dilation due to the satellite's orbital velocity (which makes the clocks tick **slower** by $\sim 7 \mu s$/day), the net GR effect is $\sim 38 \mu s$/day. without correcting for this, GPS positions would drift by $\sim 10$ km per day. **GR is a working technology, embedded in everyday infrastructure, not just an exotic theory.**

### gravitational lensing

light shone horizontally across an accelerating box appears to bend, because the box has moved upward during the light's transit. by EEP, the same must happen in a gravitational field: **light bends in gravity**. this is **gravitational lensing**.

a careful calculation (deferred to Ch 3 / Q14) for a light ray grazing the Sun gives a deflection angle of

$$\Delta\theta = \frac{4 G M_\odot}{b c^2} \approx 1.75''$$

with $b$ the impact parameter ($\approx R_\odot$ for a grazing ray). the factor of $2$ relative to the naive Newtonian-particle calculation comes from light feeling **both** $g_{tt}$ and $g_{ij}$ in the metric, while a slow particle only feels $g_{tt}$. (this is the GR factor of $2$ that cosmologists also use for weak lensing.)

confirmed by **Eddington's 1919 solar eclipse expedition** to Príncipe and Sobral, photographing star positions near the eclipsed Sun. the observation made Einstein world-famous overnight. lensing has since become a standard astrophysical tool: galaxy clusters as natural telescopes, weak-lensing maps of dark matter, microlensing surveys for exoplanets.

---

## 1.4, gravity as curved spacetime

now we tie the three predictions together and see what they imply about the **geometry** of spacetime itself.

### the paradox that forces curvature

the gravitational redshift result says: light pulses leaving Alice arrive at Bob at a **slower rate** ($\Delta \tau_B > \Delta \tau_A$). but the field is static: Alice and Bob both stand still, and the worldlines connecting consecutive pulses must have **identical shapes** in coordinate time. so $\Delta t_A = \Delta t_B$ as measured by an external coordinate observer.

if i assume **flat spacetime** (so $\Delta\tau = \Delta t$ always), this is a contradiction. either the pulses don't arrive at the rate the redshift formula says, or proper time differs from coordinate time. the redshift is observed, so the only way out is:

> spacetime must be **curved**, with proper time $\tau$ different from coordinate time $t$, and the difference encoded in the metric.

### the weak-field metric

the simplest line element that reproduces all of $1.3$ is

$$\boxed{\,ds^2 = -\left(1 + \frac{2\Phi(\vec x)}{c^2}\right)c^2 dt^2 + d\vec x^2\,}$$

with $|\Phi/c^2| \ll 1$. this is the **weak-field metric**, the GR encoding of Newtonian gravity. let me verify it gives back gravitational time dilation.

a stationary observer at position $\vec x_A$ has worldline $(t, \vec x_A)$. their proper time interval is

$$\Delta \tau_A^2 = -ds^2/c^2 = \left(1 + \frac{2\Phi_A}{c^2}\right)\Delta t^2$$

so

$$\Delta \tau_A \approx \left(1 + \frac{\Phi_A}{c^2}\right)\Delta t$$

similarly $\Delta\tau_B \approx (1 + \Phi_B/c^2)\Delta t$. their ratio:

$$\frac{\Delta\tau_B}{\Delta\tau_A} \approx 1 + \frac{\Phi_B - \Phi_A}{c^2}$$

which **exactly** recovers the gravitational time dilation formula from $1.3$, but **derived from geometry**, not from a Doppler argument. the time dilation has been re-explained by spacetime curvature.

### the punchline of the chapter

**the metric component $g_{00} = -(1 + 2\Phi/c^2)$ encodes Newtonian gravity in the weak-field limit.** when we extend this metric to a fully covariant theory in later chapters, the spatial components $g_{ij}$ will also pick up $\Phi$-dependent pieces, and Einstein's equations will replace Poisson. but the seed is already here: gravity lives in the metric.

> Newton has been swallowed by geometry. we have not "added a force called gravity to flat space"; we have "deformed the metric of spacetime so that free particles, following the straightest possible paths, are observed to fall." that is the entire conceptual move of GR, made on physical reasoning alone, with not a single Christoffel or Riemann tensor in sight.

---

## key concepts at a glance

| concept | symbol / formula | meaning |
| --- | --- | --- |
| Poisson's eq | $\nabla^2 \Phi = 4\pi G \rho$ | Newton's field equation, fails at SR |
| weak EP | $m_I = m_G$ | universality of free fall, confirmed to $10^{-13}$ |
| Einstein EP | physics in a local frame = SR | gravity = geometry |
| tidal force | non-uniform $\nabla \Phi$ | the real content of gravity, [Geodesic deviation](../../../02_Zettel/Theory/Geodesic deviation.md) |
| GR redshift | $\Delta\lambda/\lambda_0 = \Delta\Phi/c^2$ | Pound-Rebka 1959 |
| GR time dilation | $T_B/T_A = 1 + (\Phi_B - \Phi_A)/c^2$ | atomic clocks, GPS ($+38\mu s$/day) |
| light deflection | $4GM/(bc^2) \approx 1.75''$ at the Sun | Eddington 1919 |
| Mercury precession | $43''$/century unexplained by Newton | first GR confirmation |
| weak-field metric | $g_{00} = -(1 + 2\Phi/c^2)$ | $\Phi$ lives in the time-time component |

---

## what to remember from this chapter

if i had to compress chapter 1 into a paragraph for the oral:

> Newton's gravity has two cracks: it propagates instantaneously (incompatible with SR) and it predicts $532''$/century for Mercury's perihelion vs the observed $575''$, a missing $43''$. the universal experimental fact $m_I = m_G$ to $10^{-13}$ accuracy is unexplained in Newton; promoted to a principle (the weak equivalence principle), it implies that gravity behaves like a fictitious force. extending it to all of physics (Einstein equivalence principle) means a freely-falling observer is locally indistinguishable from an inertial observer in special relativity. the equivalence principle alone, without any field equations, predicts three things: gravitational redshift $\Delta\lambda/\lambda = \Delta\Phi/c^2$ (Pound-Rebka 1959), gravitational time dilation $\Delta\tau \propto \sqrt{-g_{00}}$ (GPS, $38\mu s$/day correction), and gravitational lensing $\Delta\theta = 4GM/(bc^2) \approx 1.75''$ at the Sun (Eddington 1919). these are inconsistent with flat spacetime and force the conclusion that spacetime is curved, with proper time differing from coordinate time. the simplest metric compatible with the data is $ds^2 = -(1 + 2\Phi/c^2)c^2 dt^2 + d\vec x^2$, the weak-field metric. tidal forces remain after going to a free-fall frame and represent the genuine, irreducible curvature; they are what the Riemann tensor will measure in Ch 4. the slogan: gravity is geometry. matter deforms the metric; the metric tells matter how to move.

---

## how this connects to the rest of the course

- the **weak-field metric** $g_{00} = -(1 + 2\Phi/c^2)$ from 1.4 is exactly the metric used in Q9 - weak-field Christoffel Gamma_i_00 and Q10 - weak-field Ricci scalar. plugging it into Einstein's equations gives back Poisson, closing the consistency loop with Newton.
- the **EEP** is the conceptual basis for [Locally inertial frame](../../../02_Zettel/Theory/Locally inertial frame.md) coordinates, which is what makes [Christoffel symbols](../../../02_Zettel/Theory/Christoffel symbols.md) make sense as objects that vanish at a point.
- **tidal forces** are what [Riemann tensor](../../../02_Zettel/Theory/Riemann tensor.md) measures (Ch 4). the impossibility of removing tidal forces via coordinates is the same as saying Riemann is gauge-invariant under coordinate transformations.
- **gravitational redshift and time dilation** show up again in [Schwarzschild metric](../../../02_Zettel/Theory/Schwarzschild metric.md) (the $\sqrt{f(r)}$ factor in Ch 6) and in the [Cosmological redshift](../../../02_Zettel/Theory/Cosmological redshift.md) (Ch 7).
- the **factor of 2** in light deflection re-appears in Ch 3 (Q14 - photon trajectory and impact parameter) when we redo the calculation properly with null geodesics in Schwarzschild.
- **Mercury's $43''$** is computed from first principles in Ch 3 as a perturbation of Schwarzschild orbits.

---

## connections

- [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.md) (parent map)
- [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.md) (the master companion note for this book)
- [Newtonian limit of GR](../../../02_Zettel/Theory/Newtonian limit of GR.md)
- [Locally inertial frame](../../../02_Zettel/Theory/Locally inertial frame.md)
- Equivalence principle
- [Geodesic deviation](../../../02_Zettel/Theory/Geodesic deviation.md) · Tidal forces
- Q9 - weak-field Christoffel Gamma_i_00 (where this metric becomes a calculation)
- Q10 - weak-field Ricci scalar (recovery of Poisson's equation)
- Q14 - photon trajectory and impact parameter (where light deflection is redone with full GR)
- next: [Ch 2 - Some Differential Geometry](../../../01_Literature/Book/Baumann GR/Ch 2 - Some Differential Geometry.md)
