---
layout: default
title: "Baumann GR"
---

# Baumann GR, reading companion

up: [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.html) · 02_Literature

*Daniel Baumann, **General Relativity**. lecture notes from his course at Amsterdam and Taiwan. roughly 110 pages of main text plus appendices and problem sets. Baumann is one of the best modern teachers of GR: he motivates every object physically, develops the math just-in-time, and lands every chapter with a real observational consequence.*

PDF location: `/Users/sxafq/Documents/1/1st Semester/GENERAL RELATIVITY FOR ASTROPHYSICS AND COSMOLOGY/GR by Daniel Baumann.pdf`

---

## why this book

Baumann's notes are the textbook the course follows most closely. they are also pedagogically excellent in a specific way: he tells the GR story as a sequence of motivated steps, where each chapter answers a clear physical question and builds toward the next. for an astrophysics-and-cosmology student like me, the cosmology and gravitational-waves chapters are particularly clean.

i am using these chapter notes as a **reading companion**: a way to navigate Baumann while studying general relativity systematically. each note covers one chapter, with the same structure:

1. **the question this chapter is trying to answer** (what is the physical question)
2. **the conceptual development** (how we get there, with intuition and analogies)
3. **the key results** (the equations to memorize, but always explained)
4. **what to remember** (the chapter compressed into a single paragraph for oral)
5. **connections** (where this chapter sits in the bigger picture)

the goal: by the end of each note, i should be able to explain the chapter's central insight in plain English to someone who hasn't read the book.

---

## the GR slogan, one sentence

if i had to compress the entire book (and the entire course) into a single sentence:

> **matter tells spacetime how to curve, spacetime tells matter how to move.**

these are the two halves of GR. they connect through the metric: matter's energy and momentum source the curvature of the metric (Einstein's equation), and the curved metric determines how matter moves (geodesic equation). every chapter is a step in setting up this story.

---

## the chain of objects

before diving into chapters, here is the conceptual map of what we will build:

$$\underbrace{g_{\mu\nu}}_{\text{geometry}} \;\to\; \underbrace{\Gamma^\alpha{}_{\mu\nu}}_{\text{coordinate twist}} \;\to\; \underbrace{R^\alpha{}_{\beta\mu\nu}}_{\text{curvature}} \;\to\; \underbrace{R_{\mu\nu}}_{\text{trace}} \;\to\; \underbrace{R}_{\text{scalar}} \;\to\; \underbrace{G_{\mu\nu} = 8\pi G T_{\mu\nu}}_{\text{Einstein eq}}$$

reading left to right: start with the metric (Chapter 2), differentiate to get Christoffels (also Chapter 2 and Chapter 4), differentiate again to get the Riemann tensor (Chapter 4), contract to get Ricci (Chapter 4), build the Einstein tensor and equate to matter (Chapter 5). the rest is solving in special cases (Chapter 6 black holes, Chapter 7 cosmology, Chapter 8 GWs).

---

## chapter map

each link below opens the long-form companion note. each note is structured the same way, so i can navigate quickly.

| ch | title | the question | core topics |
| --- | --- | --- | --- |
| 1 | [Ch 1 - Gravity is Geometry](../../../01_Literature/Book/Baumann GR/Ch 1 - Gravity is Geometry.html) | why do we need a new theory of gravity? | conceptual setup for Q9, Q10 |
| 2 | [Ch 2 - Some Differential Geometry](../../../01_Literature/Book/Baumann GR/Ch 2 - Some Differential Geometry.html) | how do i write down a curved spacetime? | Q1, Q2, Q3, Q4 |
| 3 | [Ch 3 - A First Look at Geodesics](../../../01_Literature/Book/Baumann GR/Ch 3 - A First Look at Geodesics.html) | how does matter move in curved spacetime? | Q7, Q8, Q12, Q13, Q14 |
| 4 | [Ch 4 - Spacetime Curvature](../../../01_Literature/Book/Baumann GR/Ch 4 - Spacetime Curvature.html) | what does "curvature" mean precisely? | Q3, Q4, Q5, Q6, Q7, Q8, Q17 |
| 5 | [Ch 5 - The Einstein Equation](../../../01_Literature/Book/Baumann GR/Ch 5 - The Einstein Equation.html) | how does matter source curvature? | Q11 (Schwarzschild derivation) |
| 6 | [Ch 6 - Black Holes](../../../01_Literature/Book/Baumann GR/Ch 6 - Black Holes.html) | what really happens at the horizon? | Q11 to Q14 oral follow-ups |
| 7 | [Ch 7 - Cosmology](../../../01_Literature/Book/Baumann GR/Ch 7 - Cosmology.html) | how does the universe evolve? | Q18, Q19, Q20 |
| 8 | [Ch 8 - Gravitational Waves](../../../01_Literature/Book/Baumann GR/Ch 8 - Gravitational Waves.html) | does GR predict ripples in spacetime? | Q9, Q10, Q15, Q16, Q17 |
| 9 | [Ch 9 - Inflation and Primordial Gravitational Waves](../../../01_Literature/Book/Baumann GR/Ch 9 - Inflation and Primordial Gravitational Waves.html) | where did the FLRW universe come from, and is there a fossil signal? | advanced topic, bridges Ch 7 + Ch 8 |

all core foundational topics are covered by chapters 2 through 8. chapter 1 is the conceptual prologue. chapter 9 is an extension beyond Baumann's printed notes, into his cosmology/inflation work.

---

## how to read this book, three modes

depending on what i need at the moment:

### mode 1, first read (study mode)

read the chapters in order, slowly. for each chapter:

1. read my chapter note first, just the "question this chapter is trying to answer" and the section headings, to get the big picture
2. read the actual chapter in Baumann
3. come back to my chapter note and read it as a summary
4. work through any associated exam questions

### mode 2, comprehensive review

go straight to the chapter notes. each one ends with a "what to remember" paragraph that is the chapter compressed for rapid review. read those paragraphs in sequence, and they tell the whole GR story in about 8 paragraphs.

### mode 3, lookup (reference mode)

i need to remember a specific result (Friedmann equation, Schwarzschild Christoffel, quadrupole formula). go to the chapter note, scan the boxed equations.

---

## conceptual study order

if i am short on time and have to pick chapters:

2. **[Ch 7 - Cosmology](../../../01_Literature/Book/Baumann GR/Ch 7 - Cosmology.html)** the entire Friedmann derivation with all the cosmological consequences. three exam questions, including the cosmology block as a whole.
3. **[Ch 8 - Gravitational Waves](../../../01_Literature/Book/Baumann GR/Ch 8 - Gravitational Waves.html)** linearized GR + Newtonian limit + TT gauge. five exam questions.
4. **[Ch 4 - Spacetime Curvature](../../../01_Literature/Book/Baumann GR/Ch 4 - Spacetime Curvature.html)** covariant derivative, Killing vectors, Riemann symmetries, geodesic deviation. seven exam questions.
5. **[Ch 5 - The Einstein Equation](../../../01_Literature/Book/Baumann GR/Ch 5 - The Einstein Equation.html)** Einstein tensor, action, Schwarzschild derivation. one exam question + conceptual context.
7. **[Ch 1 - Gravity is Geometry](../../../01_Literature/Book/Baumann GR/Ch 1 - Gravity is Geometry.html)** equivalence principle, weak-field metric. conceptual but no direct exam questions.
8. **[Ch 6 - Black Holes](../../../01_Literature/Book/Baumann GR/Ch 6 - Black Holes.html)** great for oral follow-ups but not directly tested.

---

## the moments where the book stops me

three places in Baumann where the physics is so clean it stops me. these are the moments i want to feel when applying the theory, the moments that tell me i actually understand it:

### moment 1, the equivalence principle (Ch 1.2)

the realization that **gravity is fictitious**, that you only feel gravity because you are *not* in free fall, and that a freely-falling observer is in an inertial frame. Einstein called this his "happiest thought." it transforms gravity from a mysterious force to a property of geometry.

### moment 2, the geodesic equation falling out of $S = -m \int d\tau$ (Ch 3.2)

start with the simplest possible relativistic action, "minus mass times proper time elapsed." extremize. out pops the geodesic equation, with the [Christoffel symbols](../../../02_Zettel/Theory/Christoffel symbols.html) formula in exactly the right place. no extra postulates, no sleight of hand. **the entire equation of motion is determined by demanding "the path that takes the most proper time."** that is breathtaking economy.

### moment 3, the Bianchi-driven uniqueness of $G_{\mu\nu}$ (Ch 5.1)

Einstein's first guess for the field equation, $R_{\mu\nu} = \kappa T_{\mu\nu}$, fails because $R_{\mu\nu}$ is not conserved while $T_{\mu\nu}$ is. fixing it by trial and Bianchi identity **forces** us to $G_{\mu\nu} = R_{\mu\nu} - \tfrac12 g_{\mu\nu}R$. **the structure of GR is uniquely determined by the requirement that energy be conserved.** Einstein didn't choose $G_{\mu\nu}$, the math chose it for him.

---

## chapter-by-chapter summary, one paragraph each

i can use these as flash cards.

- **[Ch 1 - Gravity is Geometry](../../../01_Literature/Book/Baumann GR/Ch 1 - Gravity is Geometry.html)** Newton fails relativity (instant action) and Mercury ($43''$). Einstein starts from the equivalence principle ($m_I = m_G$ exactly), which means gravity is universal and a freely-falling observer feels nothing. EEP predicts gravitational redshift (Pound-Rebka), gravitational time dilation (GPS), light deflection (Eddington 1919, $1.75''$). all this forces spacetime to be curved, with $g_{00} = -(1 + 2\Phi/c^2)$ in the weak-field limit.
- **[Ch 2 - Some Differential Geometry](../../../01_Literature/Book/Baumann GR/Ch 2 - Some Differential Geometry.html)** spacetime is a Lorentzian manifold. coordinates are charts, multiple charts make an atlas. vectors are derivative operators at a point, transforming as $V^{\mu'} = (\partial x^{\mu'}/\partial x^\mu)V^\mu$. tensors generalize. the metric measures distances via $ds^2 = g_{\mu\nu}dx^\mu dx^\nu$, signature $(-,+,+,+)$ for spacetime. at every point there is a local inertial frame ($g = \eta$, $\partial g = 0$); the residual second derivatives are the 20 components of the Riemann tensor in 4D. integration uses $\sqrt{-g}\,d^4x$.
- **[Ch 3 - A First Look at Geodesics](../../../01_Literature/Book/Baumann GR/Ch 3 - A First Look at Geodesics.html)** $S = -m\int d\tau$ extremized gives the geodesic equation. Newtonian limit gives $h_{00} = -2\Phi$, recovering Newton. in Schwarzschild, conserved $E$ and $L$ from cyclic $t, \phi$ reduce the problem to 1D: $\dot r^2/2 + V(r) = E^2/2$ with effective potential $V$ containing the GR correction $-L^2 GM/(c^2 r^3)$. circular orbits at all $r$ for Newton, but in GR there is an ISCO at $r = 6GM$ and a photon sphere at $r = 3GM$. perturbative expansion gives Mercury's $43''$/century and Eddington's $1.75''$.
- **[Ch 4 - Spacetime Curvature](../../../01_Literature/Book/Baumann GR/Ch 4 - Spacetime Curvature.html)** the covariant derivative $\nabla_\mu$ adds Christoffel corrections to make derivatives tensorial; it is the gauge potential of local Lorentz invariance. Levi-Civita is the unique torsion-free metric-compatible connection. parallel transport is curve-dependent; geodesic = curve that parallel-transports its tangent. Killing vectors give conserved quantities (Noether). Riemann measures the path-dependence of parallel transport, equivalently the failure of $\nabla$'s to commute. it has 20 independent components in 4D, with antisym-pair, antisym-pair, pair-exchange, first Bianchi symmetries. the geodesic deviation equation $D^2 B/D\tau^2 = -R\,U U B$ shows that **Riemann is the relativistic tidal tensor**, the relative acceleration of nearby free particles. this is what curvature physically is.
- **[Ch 5 - The Einstein Equation](../../../01_Literature/Book/Baumann GR/Ch 5 - The Einstein Equation.html)** the field equation must be a tensor relating second derivatives of $g$ to $T_{\mu\nu}$. naive guess $R_{\mu\nu} = \kappa T_{\mu\nu}$ fails (not conserved). the unique fix is $G_{\mu\nu} \equiv R_{\mu\nu} - \tfrac12 g_{\mu\nu}R = 8\pi G T_{\mu\nu}$. the same equation comes from the Einstein-Hilbert action $S = \int \sqrt{-g}\,R$. matter is included via $T_{\mu\nu} = -(2/\sqrt{-g})\delta S_M/\delta g^{\mu\nu}$, with diffeomorphism invariance giving $\nabla^\mu T_{\mu\nu} = 0$ automatically. the cosmological constant $\Lambda g_{\mu\nu}$ can be added; observationally $\Lambda > 0$ (dark energy, $w = -1$). solving in vacuum gives Schwarzschild (Birkhoff: spherically symmetric vacuum is automatically static), de Sitter, and anti-de Sitter.
- **[Ch 6 - Black Holes](../../../01_Literature/Book/Baumann GR/Ch 6 - Black Holes.html)** $r = 2GM$ is a coordinate singularity (Kretschmann finite there); $r = 0$ is a real curvature singularity. near-horizon = Rindler space (uniformly accelerated patch of Minkowski). Eddington-Finkelstein coordinates remove the coordinate singularity; light cones tilt over inside the horizon, making it a one-way membrane. Kruskal coordinates give the maximally extended spacetime: four regions (exterior, BH interior, white hole interior, mirror exterior) with non-traversable wormhole. real BHs from collapse have only the exterior + BH interior. Reissner-Nordstrom (charged, $Q$) and Kerr (rotating, $a$) have richer multi-horizon structures. Kerr has an ergoregion where energy can be extracted (Penrose process, classical seed of Hawking radiation).
- **[Ch 7 - Cosmology](../../../01_Literature/Book/Baumann GR/Ch 7 - Cosmology.html)** cosmological principle (homogeneous + isotropic on large scales) forces FLRW metric $ds^2 = -dt^2 + a(t)^2 d\ell^2$ with three options for spatial curvature ($k = 0, +1, -1$). Friedmann equation $H^2 = (8\pi G/3)\rho - k/a^2$. acceleration equation $\ddot a/a = -(4\pi G/3)(\rho + 3p)$. continuity $\dot \rho + 3H(\rho + p) = 0$. only two of the three are independent. with $w = p/\rho$ constant, $\rho \propto a^{-3(1+w)}$: matter $a^{-3}$, radiation $a^{-4}$, dark energy const. flat single-component $a \propto t^{2/[3(1+w)]}$. our universe: $\Omega_r \approx 10^{-4}$, $\Omega_m \approx 0.32$, $\Omega_\Lambda \approx 0.68$, flat. radiation era → matter era at $z_{\rm eq} \approx 3400$ → dark energy era at $z \sim 0.5$. **5% baryons, 27% dark matter, 68% dark energy.**
- **[Ch 8 - Gravitational Waves](../../../01_Literature/Book/Baumann GR/Ch 8 - Gravitational Waves.html)** linearized GR has gauge symmetry $h \to h + \partial \xi + \partial \xi$. de Donder gauge gives Einstein's equation as a wave equation $\Box \bar h_{\mu\nu} = -16\pi G T_{\mu\nu}$. Newtonian limit recovers Poisson with $h_{00} = -2\Phi$. vacuum solutions: gravitational waves at speed $c$, with two physical polarizations $h_+, h_\times$ that stretch and squeeze rings of test masses in characteristic patterns separated by $45°$. quadrupole formula $\bar h_{ij} = (2G/r)\ddot I_{ij}$. no monopole or dipole gravitational radiation. LIGO measures $\delta L/L \sim H/2 \sim 10^{-21}$. first detection September 14, 2015: BH merger $30 + 35 \to 62 M_\odot$, $3 M_\odot c^2$ released as GWs. era of GW astronomy.
- **[Ch 9 - Inflation and Primordial Gravitational Waves](../../../01_Literature/Book/Baumann GR/Ch 9 - Inflation and Primordial Gravitational Waves.html)** standard FRW has three puzzles: horizon, flatness, relics. all three are solved by a brief epoch of accelerated expansion (inflation) requiring matter with $p < -\rho/3$. simplest realization: a slowly-rolling scalar field (the inflaton) with slow-roll parameters $\epsilon = (M_{\rm Pl}^2/2)(V'/V)^2 \ll 1$, $\eta = M_{\rm Pl}^2 V''/V \ll 1$, lasting $N \sim 60$ e-folds. quantum fluctuations of the inflaton seed scalar curvature perturbations $\mathcal{P}_\mathcal{R} = H^2/(8\pi^2\epsilon M_{\rm Pl}^2)$ with red tilt $n_s = 0.965$ (Planck), the seed of all structure. quantum fluctuations of the metric seed primordial gravitational waves with tensor-to-scalar ratio $r = 16\epsilon$, observable as B-mode CMB polarization. detection would directly measure the inflationary energy scale and confirm a quantum origin for structure. current bound $r < 0.036$; next-generation $r \sim 10^{-3}$.

---

## related notes

- [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.html) (the master map of the course)
- other recommended books: Carroll, **Spacetime and Geometry**; Hartle, **Gravity**; Schutz, **A First Course in General Relativity**

---

## the goal at the end of all this

after working through all 8 chapters and all 20 exam questions, i should be able to:

1. **explain** the central insight of GR ("gravity is geometry") in plain English
2. **derive** the geodesic equation from the action
3. **derive** the Newtonian limit from the geodesic equation
4. **solve** the Friedmann equations for matter, radiation, and $\Lambda$
5. **set up** Schwarzschild orbits using $E$, $L$, and the timelike normalization
6. **explain** what gravitational waves do to test masses
7. **answer "why?"** at every step of any of the 20 questions

the chapter notes are the scaffolding. the question walkthroughs are the practice. the actual understanding comes from doing the calculations and feeling, in my own hands, how the chain $g \to \Gamma \to R \to G$ unfolds. that is what i am working toward.