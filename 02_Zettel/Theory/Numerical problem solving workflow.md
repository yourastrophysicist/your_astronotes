---
layout: default
title: "Numerical problem solving workflow"
---

# Numerical problem solving workflow

a meta-recipe. given a numerical problem (in the exam, in research, anywhere), this is the order of operations that consistently produces a working answer.

## the seven steps

1. **state the math problem**, in symbols, before touching the computer. write down the exact thing I am trying to compute: "find $x$ such that $f(x) = 0$ on $[0, 5]$ where $f(x) = \cos(x) - x$." this catches half my future bugs because I am forced to specify domain, units, and what counts as the answer
2. **identify the problem class**, from the taxonomy: integral, root, ODE, fit, FFT, sample, eigenvalue, sort. each class has a standard family of algorithms; this step picks the family
3. **pick the algorithm in that family**, based on the structure of *my* problem: is the function smooth, is the matrix sparse, is the integrand bounded, are the data noisy. each algorithm has a "when does it win" answer
4. **find a known case to validate against**: a problem with a closed-form answer that lives in the same class, that I can run my code on and compare. for ODEs: the harmonic oscillator. for integrals: a polynomial. for fits: a synthetic dataset I generate myself. *no* algorithm goes to production without a known-answer validation
5. **write the code**, with the *simplest* possible version of the algorithm. no premature optimization. no clever vectorization. plain loops are fine for the first pass; switch to vectorized once it is correct
6. **diagnose and plot**. plot the answer. plot the residual. plot the convergence vs step size or sample count. if the plot is wrong, the answer is wrong, no matter how clean the printed number is
7. **state the answer with its uncertainty** — every numerical answer has a finite-precision and finite-step-size error. report it. for MC: $\pm \sigma/\sqrt{N}$. for ODE: estimate by halving the step and checking how much the answer moved

## the failure modes I have to watch for

- **forgetting step 4** is the cause of every silently-wrong-looking plot. a Newton-Raphson that converges to the wrong root because the initial guess was bad will not flag itself
- **vectorizing too early** is the cause of every numpy-shape-error rabbit hole. write the loopy version first, get it correct, then vectorize
- **not setting the seed** for any code involving randomness wastes my own time when a reviewer (or future me) cannot reproduce the figure
- **plotting with default matplotlib settings** is the cause of unreadable figures and lost exam points. set figure size, font size, log scale where appropriate, axis labels with units, legend
- **reporting the wrong number of significant figures** is the giveaway that I do not know my own error budget. if my MC integral has $\sigma \sim 10^{-3}$, reporting six digits is dishonest

## a worked tiny example

problem: find the root of $\cos(x) - x = 0$ on $[0, \pi/2]$.

1. **state**: $f(x) = \cos(x) - x$, find $x^* \in [0, \pi/2]$ s.t. $f(x^*) = 0$
2. **class**: 1D root, smooth function, bracketed
3. **algorithm**: bisection (bulletproof, log-time) or Newton ($f'(x) = -\sin(x) - 1$, smooth, can do better). pick Newton for speed, fall back to bisection if it diverges
4. **validate**: $f(0) = 1 > 0$, $f(\pi/2) = -\pi/2 < 0$, so a root exists in the interval (intermediate value theorem). I expect $x^* \approx 0.74$ from a quick mental estimate
5. **code**: 10-line Newton loop, tolerance $10^{-10}$
6. **plot**: $f(x)$ on $[0, \pi/2]$ with the converged root marked, plus $|x_n - x^*|$ vs $n$ on log scale (should be linear with slope = quadratic convergence rate)
7. **answer**: $x^* = 0.7390851332$, converged in 5 iterations from $x_0 = 0$

every exam exercise is this template scaled to a different class. recognising that is what makes exercise 4 feel like a 45-minute task rather than a 3-hour panic.

## the checklists I keep open at the side of the screen

**for any plot**:
- title with what is being shown
- axis labels with units
- legend if multiple series
- log scale where the data spans many orders of magnitude
- figure saved with a descriptive filename

**for any random sampling**:
- seed set explicitly
- $N$ chosen large enough that the histogram bins are populated (≳ 30 per bin is the rule)
- histogram normalized to a pdf for direct comparison with the analytic curve

**for any ODE integration**:
- conserved quantity tracked (energy, angular momentum)
- time step refined until the conserved quantity stabilizes
- two integrators compared (e.g. midpoint vs leapfrog) on the same problem to see which is better

## see also

- [Math Numerical Methods course intro](../../02_Zettel/Theory/Math Numerical Methods course intro.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html) — the full topic dependency graph