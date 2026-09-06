---
layout: default
title: "Math Numerical Methods course intro"
---

# Math Numerical Methods, course intro

A.Y. 2025/2026 at the University of Padova. instructor: **Prof. Michela Mapelli** (the binary-black-hole-merger-rate person, also the author of the official course notes `numerical_methods_mapelli.pdf` that I will be reading lecture by lecture).

the official course title is **"Mathematical and Numerical Methods for Astrophysics"** and that conjunction is doing a lot of work. the course teaches *both*:

1. the *mathematical* tools — linear algebra (eigenvalues, QR, Gram-Schmidt), Fourier series, finite differences, error analysis
2. the *numerical* algorithms that implement those tools on a computer — Gauss elimination, Newton-Raphson, Runge-Kutta, Monte Carlo, FFT

the marriage is the point. every algorithm has a math-side justification (why does it converge, what is the error bound, what does it preserve) and an implementation-side incarnation (the python code that will pass the exam).

## why this course matters for me

I am training to be a research astrophysicist. the day-to-day work of a research astrophysicist is: download a dataset, run a code on it, fit a model, plot the result, write about it. *every one* of those verbs lives in this course. nothing in cosmology, GR, or observational astronomy ever returns a number until I have integrated an ODE, fit a curve, drawn a Monte Carlo realization, or FFT'd a time series.

it is also the course that makes my computer feel like an instrument, not a black box. by the end I should know what *every line* of `scipy.integrate.solve_ivp` is doing, even if I would never write it from scratch in production.

## the exam


date for me: **24 June 2026**, exam #3 in the provided summer sequence (Fundamentals 17 Jun, GR 22 Jun, **Math+Num 24 Jun**, Obs Astro 1 Jul).

## the chain of dependencies

a numerical method usually calls another numerical method underneath. recognising the dependencies makes the whole syllabus feel smaller:

- a **fit** calls a **linear solver** (normal equations) or a **root finder** (Levenberg-Marquardt)
- a **PDE solver** calls a **finite difference** (space) and an **ODE integrator** (time)
- an **N-body** simulation is just an **ODE** with a particular force law
- the **FFT** calls **complex arithmetic** and **divide-and-conquer recursion**
- **Monte Carlo integration** calls a **random number generator** and the **inverse transform**
- a **shooting method** for a BVP calls **Newton-Raphson** wrapped around an **IVP**

so the syllabus is a dependency graph. the order in [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html) follows this graph from the leaves up.

## reference texts

- **Mapelli**, *Numerical Methods for Astrophysics* — the actual course notes. I read them lecture by lecture
- **Newman**, *Computational Physics* — the textbook the notes are based on; deeper treatments
- **Kiusalaas**, *Numerical Methods in Engineering with Python* — second textbook the notes lean on, more code
- **Press, Teukolsky, Vetterling, Flannery**, *Numerical Recipes* — the encyclopedic reference
- **Strang**, *Linear Algebra and Its Applications* — when I need linear algebra intuition
- **Axler**, *Linear Algebra Done Right* (PDF in source folder) — proofs-first companion

## see also

- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html) — the map
- [Numerical problem solving workflow](../../02_Zettel/Theory/Numerical problem solving workflow.html) — the meta-recipe