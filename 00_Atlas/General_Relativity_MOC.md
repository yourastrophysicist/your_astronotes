---
layout: default
title: "General_Relativity_MOC"
---

# General Relativity for Astrophysics and Cosmology, Map of Content

A.Y. 2025/2026, University of Padua. Master's-level course taught in the first semester. The exam (oral, with written portion) draws from a published list of 20 questions.

---

## the question this whole course is trying to answer

before any equations, before any tensors, before any of the machinery, here is the question I want to keep in my head for the entire course:

> **what is gravity, really?**

Newton answered: gravity is a force, like electricity. masses pull on each other across empty space, instantly, with strength $GMm/r^2$. this works beautifully for almost everything: cannonballs, planets, satellites, the moon. it is the most successful theory in the history of physics until 1916.

but Newton's answer has two cracks in it.

**crack one, the Mercury problem**. Mercury's orbit precesses (the ellipse rotates slightly each year), and Newton predicts $532$ arcseconds per century from the pull of the other planets. observations give $575$. there is an extra $43''/$century that no one can explain. Le Verrier (the same astronomer who predicted Neptune from Uranus's wobble) tried to fit it with a hypothetical inner planet, "Vulcan." Vulcan does not exist. Mercury's extra precession just sits there, an embarrassment, for fifty years.

**crack two, the speed-of-light problem**. Einstein's special relativity (1905) says nothing travels faster than $c$. but Newton's gravity propagates **instantly**, the moment the sun moved, Earth would feel it immediately, with no delay. either Einstein is wrong or Newton is wrong. they cannot both be right.

Einstein spent ten years (1905 to 1915) figuring out a new theory of gravity that fixes both problems. that theory is **general relativity**, GR, the subject of this course. its answer to "what is gravity, really?" is one of the most beautiful ideas in physics:

> **gravity is not a force. gravity is what spacetime looks like when there is matter in it. objects in free fall just follow the natural straight lines of the curved spacetime around them. and the curving of spacetime is what we have always called "the pull of gravity."**

that is the whole course in one sentence. everything else is the math we need to make this concrete.

---

## the chain of objects, what we will build

GR's mathematical machinery is **one chain**. start with a metric (the geometry of spacetime), differentiate it carefully to get curvature, contract it to get something matter can source, and equate it to matter. the chain looks like this:

$$g_{\mu\nu} \;\longrightarrow\; \Gamma^{\alpha}{}_{\mu\nu} \;\longrightarrow\; R^{\alpha}{}_{\beta\mu\nu} \;\longrightarrow\; R_{\mu\nu} \;\longrightarrow\; R \;\longrightarrow\; G_{\mu\nu} = 8\pi G\, T_{\mu\nu}$$

let me say what each of these things is, in plain English, in the order I will meet them.

**$g_{\mu\nu}$ the metric**, is the rulebook for measuring distances and times in spacetime. in flat space it is just Pythagoras: $ds^2 = dx^2 + dy^2 + dz^2$. in curved spacetime it is more complicated. it is what i write down when i describe a spacetime: Schwarzschild has one, FLRW has one, Kerr has one. the metric **is** the spacetime, in the same way that a function on the real line is the same as its graph.

**$\Gamma^\alpha{}_{\mu\nu}$ the Christoffel symbols**, tell me how my coordinate axes tilt as i move around. in flat space using cartesian coordinates they are zero, the axes never tilt. in flat space using polar coordinates they are non-zero, the radial and angular directions twist around as i go around the origin. on a curved manifold they are non-zero too, but for a different reason: the manifold itself is curving the axes. Christoffels are the price i pay for using coordinates.

**$R^\alpha{}_{\beta\mu\nu}$ the Riemann tensor**, is the actual curvature of the spacetime. it asks: if i carry a vector around a tiny closed loop, does it come back to the same vector? in flat space, yes. in curved space, no, it comes back rotated. Riemann measures how much. it is the "shape" of curvature.

**$R_{\mu\nu}$ the Ricci tensor and $R$ the Ricci scalar**, are simpler summaries of Riemann. you take certain "averages" (contractions) over Riemann's many indices. Ricci has fewer pieces of information, but those pieces are the ones matter cares about.

**$G_{\mu\nu}$ the Einstein tensor**, is built from Ricci and the metric in a very specific way that makes it conserved. if i set it equal to the matter content $T_{\mu\nu}$ (energy density, pressure, momentum), i get **the field equations of GR**:

$$G_{\mu\nu} = 8\pi G\, T_{\mu\nu}$$

this single equation is what runs the universe.

so the whole course is: what is $g$, how do i get $\Gamma$ from $g$, how do i get $R$ from $\Gamma$, how does Einstein's equation connect $R$ to matter, and what physics falls out when i solve it.

---

## the two halves of GR, told as a sentence

a famous summary by John Wheeler:

> **matter tells spacetime how to curve, spacetime tells matter how to move.**

these are the two halves of the theory and they are decoupled in a beautiful way:

- **matter tells spacetime how to curve** is **Einstein's equation**, $G_{\mu\nu} = 8\pi G T_{\mu\nu}$. it is one equation (well, ten) saying: given a distribution of matter and energy, here is what the geometry has to be.
- **spacetime tells matter how to move** is the **geodesic equation**, $\ddot x^\mu + \Gamma^\mu{}_{\alpha\beta}\dot x^\alpha \dot x^\beta = 0$. it says: in a given geometry, freely-falling particles follow these specific paths.

the two halves connect through the metric. matter sources curvature in the metric (Einstein), then the curved metric determines how matter moves (geodesic). the loop closes through the metric.

---

## how to use this map

this MOC is the spine of my GR study. every blue link drops into a single concept note that I can read in a sitting. the structure i recommend:

1. **read this entire MOC top to bottom** to get the big picture
2. **for each block, read the linked Baumann chapter note** to get the conceptual story (`02_Literature/Book/Baumann GR/`)
3. **for each exam question, read the question walkthrough** in `05_Projects/Exam/First Year/GR Exam 2026/`
4. **at the end of each block, write down the chain by hand**: metric, Christoffels, Riemann, what the question asks, what the answer is

every concept note follows the same teaching order: motivation, analogy, definition, what it means, example, physical significance.

---

## block 0, before we start

these are not equations, they are the rules and the conventions.

- [Baumann GR](../01_Literature/Book/Baumann GR/Baumann GR.html) reading companion to the textbook, chapter by chapter

---

## block 1, the language, what spacetime is and how to write it

before we can do anything, we have to agree on a language for "spacetime as a geometric object." this is differential geometry. it sounds intimidating but the idea is simple: a curved space (like the surface of the Earth) can be described locally by patches of coordinates that we sew together. we put a metric on top to measure distances. we define vectors and tensors that live on the space without depending on which coordinates we picked.

physical question this block answers: **how do i write down a spacetime so that i can do calculus on it?**

- [Manifold metric and signature](../02_Zettel/Theory/Manifold metric and signature.html) what is a manifold, what is a metric, why "Lorentzian signature" matters
- [Coordinate transformations and tensors](../02_Zettel/Theory/Coordinate transformations and tensors.html) vectors, co-vectors, tensors, why partial derivatives are not tensors
- [Locally inertial frame](../02_Zettel/Theory/Locally inertial frame.html) the GR version of "Newton's first law works locally"
- [Christoffel symbols](../02_Zettel/Theory/Christoffel symbols.html) the price of using coordinates in curved space
- [Levi-Civita connection](../02_Zettel/Theory/Levi-Civita connection.html) why GR uses one specific connection and not others
- [Covariant derivative](../02_Zettel/Theory/Covariant derivative.html) the differentiation that respects curvature
- [Metric compatibility](../02_Zettel/Theory/Metric compatibility.html) why $\nabla g = 0$ and why this matters
- [Parallel transport](../02_Zettel/Theory/Parallel transport.html) the curved-space version of "translating without rotating"

reading: [Ch 1 - Gravity is Geometry](../01_Literature/Book/Baumann GR/Ch 1 - Gravity is Geometry.html) for the motivation, [Ch 2 - Some Differential Geometry](../01_Literature/Book/Baumann GR/Ch 2 - Some Differential Geometry.html) for the math.

---

## block 2, curvature, what it actually means for space to be "curved"

now that we have the language, what is "curvature"? the question matters because Newton's gravity has nothing like it: in Newton, space is flat and gravity is a force on top of flatness. in GR, space itself bends. what does that mean operationally?

physical question this block answers: **how do i know if a space is curved, and how do i quantify it?**

the answer is the Riemann tensor. it is built from a beautiful operational test: parallel transport a vector around a tiny closed loop. if the vector comes back to the same vector, the space is flat. if it comes back rotated, the space is curved, and Riemann measures how much. this is not a metaphor; it is the actual definition.

- [Riemann tensor](../02_Zettel/Theory/Riemann tensor.html) the path-dependence of parallel transport, made precise
- [Riemann tensor symmetries](../02_Zettel/Theory/Riemann tensor symmetries.html) the four symmetries (antisym pair, antisym pair, pair exchange, first Bianchi) that reduce its components
- [Counting Riemann components](../02_Zettel/Theory/Counting Riemann components.html) $n^2(n^2-1)/12$, equals 1 in 2D, 6 in 3D, 20 in 4D
- [Ricci tensor and scalar](../02_Zettel/Theory/Ricci tensor and scalar.html) the contractions, what they capture
- [Sectional and Gaussian curvature](../02_Zettel/Theory/Sectional and Gaussian curvature.html) the geometric meaning of one Riemann component
- [Bianchi identities](../02_Zettel/Theory/Bianchi identities.html) the differential identity that forces conservation laws
- [Geodesic deviation](../02_Zettel/Theory/Geodesic deviation.html) the physical content of curvature: tidal forces

reading: [Ch 4 - Spacetime Curvature](../01_Literature/Book/Baumann GR/Ch 4 - Spacetime Curvature.html).

---

## block 3, geodesics, how matter moves through curved spacetime

a geodesic is the curved-space version of a "straight line." in flat space, an unaccelerated particle moves in a straight line, the shortest path between two points. in curved space, an unaccelerated (free-falling) particle moves in a geodesic, which is still the "straightest" possible path locally but globally can curve back on itself.

physical question this block answers: **given a spacetime, what paths do free particles take?**

three equivalent ways to think about a geodesic:
1. it is the path that **extremizes proper time** (or proper length)
2. it is the path that **parallel-transports its own tangent vector**
3. it is the path that satisfies the **geodesic equation** $\ddot x + \Gamma \dot x \dot x = 0$

definition 1 connects to Lagrangian mechanics ($S = -m \int d\tau$). definition 2 connects to the parallel-transport machinery from Block 2. definition 3 is the explicit ODE i actually solve.

a deep simplification: when the spacetime has symmetries (the metric does not depend on some coordinate), there are **conserved quantities** along the geodesic. this is the GR version of Noether's theorem and it lets me reduce 4D problems to 1D effective-potential problems.

- [Geodesic equation](../02_Zettel/Theory/Geodesic equation.html) the ODE for free-falling motion
- [Affine parameter](../02_Zettel/Theory/Affine parameter.html) proper time for massive, anything-linear for null
- [Killing vectors and conserved quantities](../02_Zettel/Theory/Killing vectors and conserved quantities.html) when the metric has a symmetry, there is a conserved momentum
- [Effective potential approach](../02_Zettel/Theory/Effective potential approach.html) reducing the 4D Schwarzschild geodesic to a 1D radial problem
- [Timelike vs null vs spacelike](../02_Zettel/Theory/Timelike vs null vs spacelike.html) the three flavors of geodesic

reading: [Ch 3 - A First Look at Geodesics](../01_Literature/Book/Baumann GR/Ch 3 - A First Look at Geodesics.html) (gives a great pedagogical derivation of the geodesic equation from the relativistic action).

---

## block 4, Einstein's equation, how matter sources curvature

we now have the language (Block 1), the curvature object (Block 2), and the equation of motion (Block 3). what we still need is the **field equation**: the analog of Maxwell's equations for gravity. Einstein looked for it for nearly ten years.

physical question this block answers: **given a distribution of matter and energy, what is the spacetime?**

the answer comes out by trial. Einstein's first guess was $R_{\mu\nu} = 8\pi G T_{\mu\nu}$ (Ricci tensor sources stress-energy). this fails because Ricci is not automatically conserved while stress-energy is. fixing it requires the **Einstein tensor**

$$G_{\mu\nu} \equiv R_{\mu\nu} - \tfrac12 g_{\mu\nu} R$$

which by the contracted Bianchi identity satisfies $\nabla^\mu G_{\mu\nu} = 0$ identically. Einstein's equation is then

$$G_{\mu\nu} = 8\pi G T_{\mu\nu}$$

the constant $8\pi G$ is fixed by demanding the equation reduces to Newton in the appropriate limit.

- [Einstein equations](../02_Zettel/Theory/Einstein equations.html) the master equation
- [Einstein tensor and Bianchi](../02_Zettel/Theory/Einstein tensor and Bianchi.html) why it has to be $G$ and not $R$
- [Stress-energy tensor](../02_Zettel/Theory/Stress-energy tensor.html) perfect fluid, dust, radiation, vacuum, scalar field
- [Trace-reversed Einstein equations](../02_Zettel/Theory/Trace-reversed Einstein equations.html) the equivalent form $R_{\mu\nu} = 8\pi G(T_{\mu\nu} - \tfrac12 g_{\mu\nu}T)$
- [Cosmological constant](../02_Zettel/Theory/Cosmological constant.html) the only other thing that can be added consistently

reading: [Ch 5 - The Einstein Equation](../01_Literature/Book/Baumann GR/Ch 5 - The Einstein Equation.html).

---

## block 5, Schwarzschild, the gravitational field of a star or black hole

with Einstein's equation in hand, we can finally solve for some real spacetimes. the simplest non-trivial case is **the gravitational field outside a spherically symmetric, non-rotating mass**: a star, a planet, a non-rotating black hole. the solution is the **Schwarzschild metric**, and it is one of the most important objects in physics.

physical question this block answers: **what is the spacetime around a spherical mass, and what does this predict about orbits and light?**

four physical predictions, all confirmed by experiment:
1. orbits precess (Mercury, $43''$/century)
2. light bends (Sun, $1.75''$, Eddington 1919)
3. there is an innermost stable circular orbit (ISCO at $r = 6GM$, sets the inner edge of accretion disks)
4. there is a photon sphere (unstable circular photon orbit at $r = 3GM$, the bright ring in EHT images of black holes)

a fifth prediction: there is an **event horizon** at $r = 2GM$, a one-way membrane. inside it, even light cannot escape. that is the black hole.

- [Schwarzschild metric](../02_Zettel/Theory/Schwarzschild metric.html) the metric and its derivation
- [Birkhoff theorem](../02_Zettel/Theory/Birkhoff theorem.html) spherically symmetric vacuum is automatically static
- [Schwarzschild Christoffels](../02_Zettel/Theory/Schwarzschild Christoffels.html) the standard table
- [Schwarzschild horizon](../02_Zettel/Theory/Schwarzschild horizon.html) the $r = 2GM$ surface, why it is a coordinate singularity not a curvature one
- [Schwarzschild effective potential](../02_Zettel/Theory/Schwarzschild effective potential.html) the master tool for orbits
- [Circular orbits in Schwarzschild](../02_Zettel/Theory/Circular orbits in Schwarzschild.html) $\Omega^2 = GM/r^3$ exactly
- [Photon sphere](../02_Zettel/Theory/Photon sphere.html) $r = 3GM$, the bright ring
- [Radial infall](../02_Zettel/Theory/Radial infall.html) the cycloid solution
- [Photon trajectories and impact parameter](../02_Zettel/Theory/Photon trajectories and impact parameter.html) $b = L/E$ and $b_{\rm crit} = 3\sqrt{3}\,GM$
- [Perihelion precession](../02_Zettel/Theory/Perihelion precession.html) the $43''$/century
- [Light deflection](../02_Zettel/Theory/Light deflection.html) the $1.75''$
- [Eddington-Finkelstein and Kruskal](../02_Zettel/Theory/Eddington-Finkelstein and Kruskal.html) coordinates that pass through the horizon smoothly

reading: [Ch 5 - The Einstein Equation](../01_Literature/Book/Baumann GR/Ch 5 - The Einstein Equation.html) (Schwarzschild derivation), [Ch 6 - Black Holes](../01_Literature/Book/Baumann GR/Ch 6 - Black Holes.html) (deep cuts on horizons, Kruskal, Penrose diagrams).

---

## block 6, linearized gravity, GR for weak fields

GR is a non-linear theory. the equations are notoriously hard to solve. but in many real situations the field is **weak**, the spacetime is "almost flat" with a small perturbation. then we can linearize and the equations become tractable.

physical question this block answers: **how do i do GR perturbation theory?**

write the metric as $g_{\mu\nu} = \eta_{\mu\nu} + h_{\mu\nu}$ with $|h| \ll 1$, keep only first-order terms in $h$. this regime contains:
1. **Newtonian gravity**: the slow-motion, weak-field limit recovers Newton with $h_{00} = -2\Phi$
2. **gravitational waves**: vacuum solutions of linearized GR

linearized GR has a **gauge symmetry**, just like electromagnetism. an infinitesimal coordinate change shifts $h_{\mu\nu}$ by $h \to h + 2\partial_{(\mu}\xi_{\nu)}$. fixing this gauge (Lorenz gauge, then transverse-traceless) is what makes the wave equation clean.

- [Linearized metric perturbation](../02_Zettel/Theory/Linearized metric perturbation.html) $h_{\mu\nu}$ on Minkowski
- [Linearized Christoffel and Riemann](../02_Zettel/Theory/Linearized Christoffel and Riemann.html) drop $\Gamma\Gamma$ terms
- [Linearized gauge transformations](../02_Zettel/Theory/Linearized gauge transformations.html) residual diffeomorphism freedom
- [Trace-reversed perturbation](../02_Zettel/Theory/Trace-reversed perturbation.html) $\bar h_{\mu\nu} = h_{\mu\nu} - \tfrac12 \eta_{\mu\nu} h$, an involution
- [Lorenz gauge](../02_Zettel/Theory/Lorenz gauge.html) $\partial^\mu \bar h_{\mu\nu} = 0$, makes Einstein's equation a wave equation
- [Newtonian limit of GR](../02_Zettel/Theory/Newtonian limit of GR.html) $h_{00} = -2\Phi$ recovers Poisson's equation
- [SVT decomposition](../02_Zettel/Theory/SVT decomposition.html) scalar / vector / tensor split

reading: [Ch 8 - Gravitational Waves](../01_Literature/Book/Baumann GR/Ch 8 - Gravitational Waves.html) § 8.1 for the linearized formalism.

---

## block 7, gravitational waves, ripples in spacetime

vacuum solutions of linearized GR. the equations $\Box \bar h_{\mu\nu} = 0$ admit traveling wave solutions, **gravitational waves**. they propagate at the speed of light, carry energy, and were directly detected by LIGO in 2015.

physical question this block answers: **what are gravitational waves and what do they do?**

after fixing all the gauge freedom (Lorenz first, then four extra TT conditions), only **two physical polarizations** survive: $h_+$ ("plus") and $h_\times$ ("cross"). they affect a ring of test masses by alternately stretching and squeezing it: the "+" pattern stretches the ring along $x$ while squeezing along $y$, then reverses; the "×" pattern is the same rotated by $45°$. LIGO detects this stretching directly through laser interferometry.

- [Transverse traceless gauge](../02_Zettel/Theory/Transverse traceless gauge.html) the canonical GW gauge, four extra conditions, two polarizations
- [Plus and cross polarizations](../02_Zettel/Theory/Plus and cross polarizations.html) $h_+, h_\times$, the stretching and squeezing patterns
- [Geodesic deviation under a GW](../02_Zettel/Theory/Geodesic deviation under a GW.html) the LIGO physics, $\Delta L/L \sim h$
- [Quadrupole formula](../02_Zettel/Theory/Quadrupole formula.html) $h^{TT}_{ij} = (2G/r) \ddot Q_{ij}$, why no monopole or dipole GW
- [GW energy and angular momentum](../02_Zettel/Theory/GW energy and angular momentum.html) the Isaacson tensor

reading: [Ch 8 - Gravitational Waves](../01_Literature/Book/Baumann GR/Ch 8 - Gravitational Waves.html) § 8.2 to 8.4.

---

## block 8, FLRW cosmology, the universe as a dynamical system

the **cosmological principle** says the universe is homogeneous (same at every point) and isotropic (same in every direction) on large scales. plugging this assumption into Einstein's equations gives the **FLRW metric** and the **Friedmann equations**. the result: the universe is one giant geodesic problem with one scale factor $a(t)$.

physical question this block answers: **how does the universe evolve?**

Friedmann equations:

$$H^2 = \frac{8\pi G}{3}\rho - \frac{k}{a^2}, \qquad \frac{\ddot a}{a} = -\frac{4\pi G}{3}(\rho + 3p)$$

stress-energy conservation gives the continuity equation $\dot \rho + 3H(\rho + p) = 0$. with an equation of state $p = w\rho$, fluids dilute as $\rho \propto a^{-3(1+w)}$. matter ($w = 0$) dilutes as $a^{-3}$ (volume), radiation ($w = 1/3$) as $a^{-4}$ (volume + redshift), dark energy ($w = -1$) stays constant.

three eras of cosmic history:
1. **radiation era**, $a \propto t^{1/2}$, until $z_{\rm eq} \sim 3400$
2. **matter era**, $a \propto t^{2/3}$, until $z \sim 0.5$
3. **dark energy era**, $a \propto e^{H_\Lambda t}$, now and forever

today: $\Omega_r \approx 9 \times 10^{-5}$, $\Omega_m \approx 0.32$, $\Omega_\Lambda \approx 0.68$, $|\Omega_k| < 0.005$. **5% baryons, 27% dark matter, 68% dark energy.** 95% of the universe is invisible.

- [Cosmological principle](../02_Zettel/Theory/Cosmological principle.html) homogeneous + isotropic at each time
- [FLRW metric](../02_Zettel/Theory/FLRW metric.html) $ds^2 = -dt^2 + a(t)^2 \gamma_{ij} dx^i dx^j$
- [Spatial curvature parameter k](../02_Zettel/Theory/Spatial curvature parameter k.html) flat / closed / open
- [Friedmann equations](../02_Zettel/Theory/Friedmann equations.html) the master cosmological equations
- [Continuity equation](../02_Zettel/Theory/Continuity equation.html) from $\nabla^\mu T_{\mu\nu} = 0$
- [Equation of state and density scaling](../02_Zettel/Theory/Equation of state and density scaling.html) $\rho \propto a^{-3(1+w)}$
- [Cosmic eras](../02_Zettel/Theory/Cosmic eras.html) radiation, matter, dark energy
- [Matter radiation equality](../02_Zettel/Theory/Matter radiation equality.html) $a_{\rm eq}$, the cosmic transition
- [Deceleration parameter](../02_Zettel/Theory/Deceleration parameter.html) $q$, why it is negative today

reading: [Ch 7 - Cosmology](../01_Literature/Book/Baumann GR/Ch 7 - Cosmology.html).

---

## the 20 exam questions, with the topic each one tests

every question is a calculation that lives inside one of the eight blocks. when i prepare each one, i should think: which block? which physical concept? then the calculation falls out.

**foundations (Christoffel, covariant derivative, metric compatibility):**
- **Christoffels for diagonal 2D metric** - practice with the formula
- **Christoffels for radial 2D metric** - the universal 2D radial result
- **covariant derivatives in polar** - computing $\nabla V$ in flat-space polar
- **metric compatibility on the 2-sphere** - verifying $\nabla g = 0$ component by component

**curvature:**
- **Riemann for 1+1 expanding metric** - mini-FLRW Riemann
- **Riemann for conformally flat 1+1** - the metric is secretly flat

**geodesics:**
- **geodesics on the 2-sphere** - meridians and the equator
- **null geodesic in static metric** - using $E$ and the null condition

**linearized gravity:**
- **weak-field Christoffel Gamma_i_00** - reproduce Newton from GR
- **weak-field Ricci scalar** - $R = 2\nabla^2 \Phi$, recover Poisson

**Schwarzschild:**
- **selected Schwarzschild Christoffels** - the standard table
- **circular orbits and orbital frequency** - Kepler from Schwarzschild
- **radial infall and proper time** - cycloid solution
- **photon trajectory and impact parameter** - orbit equation $(dr/d\phi)^2$

**gauge and waves:**
- **trace-reversed perturbation and Lorenz gauge** - gauge transformation, reachability
- **Christoffels for a TT plane wave** - $\Gamma^x{}_{0x}$, $\Gamma^x{}_{zx}$
- **Riemann R_0x0x for a TT plane wave** - tidal force of the wave

**cosmology:**
- **derive the acceleration equation** - from Friedmann + continuity
- **radiation universe** - $\rho(a)$, $a(t)$, $H(t)$
- **matter plus radiation universe** - $\rho_m(a)$, $\rho_r(a)$, $a_{\rm eq}$

---

## connections to other courses

GR is the geometric trunk that other courses graft onto.

- **[Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.html)** is the same Block 8 (FLRW + Friedmann), but turned outward toward observation. distance ladders, the K-correction, surface-brightness dimming, the CMB, all sit on top of FLRW. when i derive Friedmann here, i am building the foundation that course needs.
- **[Lab_High-Energy_MOC](../00_Atlas/Lab_High-Energy_MOC.html)** turns Schwarzschild into observables. ISCO sets the inner edge of accretion disks (and hence the $L_{\rm Edd}$-scale luminosity). the photon sphere becomes the bright ring in EHT images. gravitational redshift shows up in iron K$\alpha$ line shapes from neutron stars and BHs.
- **Fundamentals of Astrophysics and Cosmology** (the parallel course): Newtonian-fluid derivation of Friedmann, and the basics of CMB physics. it is GR cosmology's "easier sister." i should read both side by side.

---

## personal study notes

- personal derivation logs my own running notes
- Lecture 4 notes · Lecture 5 notes · Lecture 7 notes · Lecture 10 notes lecture notes from class

---

## sources and references

- **Sean Carroll, *Spacetime and Geometry*** the standard rigorous treatment, source for most of the equation sheet
- **Bernard Schutz, *A First Course in General Relativity*** more physical, intuition-first
- **Daniel Baumann, *General Relativity*** the book the course follows. reading companion (chapter by chapter) at [Baumann GR](../01_Literature/Book/Baumann GR/Baumann GR.html)
- 20 official questions: `Downloads/GR_Exam_2026.pdf`
- official equation sheet: `Downloads/GR_Equations_2026.pdf`
- long-form course walkthrough: `1st Semester/GENERAL RELATIVITY FOR ASTROPHYSICS AND COSMOLOGY/QA GR.pdf`

---

## the one-paragraph version of the entire course, for emergency oral situations

> general relativity replaces Newton's "gravity is a force" with "gravity is geometry." spacetime is a Lorentzian manifold whose metric $g_{\mu\nu}$ encodes how distances are measured. coordinate axes generally tilt as i move around, captured by the Christoffel symbols $\Gamma^\alpha{}_{\mu\nu}$, the unique symbols that are both metric-compatible and torsion-free. true curvature is captured by the Riemann tensor, defined by the path-dependence of parallel transport, and physically by the relative acceleration of nearby geodesics (tidal forces). matter sources curvature through Einstein's equation $G_{\mu\nu} = 8\pi G T_{\mu\nu}$, where $G_{\mu\nu} = R_{\mu\nu} - \tfrac12 g_{\mu\nu}R$ is the unique "second-derivative of metric" combination that is automatically conserved. matter responds by following geodesics $\ddot x + \Gamma \dot x \dot x = 0$. solving Einstein's equation in special cases gives Schwarzschild (spherical vacuum, models stars and black holes), FLRW (homogeneous-isotropic, models the universe), and linearized perturbations on Minkowski (gravitational waves and the Newtonian limit). every measurable consequence of GR, perihelion precession, light deflection, gravitational redshift, expansion of the universe, gravitational waves, comes out of this single chain.

see also: [Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.html) · [Lab_High-Energy_MOC](../00_Atlas/Lab_High-Energy_MOC.html) 