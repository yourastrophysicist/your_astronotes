---
layout: default
title: "Mathematical_Numerical_Methods_MOC"
---

# Mathematical and Numerical Methods for Astrophysics  -  Map of Content

A.Y. 2025/2026  -  **Prof. Michela Mapelli**, University of Padova. Master's-level first-semester course in the Astrophysics and Cosmology programme. 

This is the *toolbox* course. it does not teach me astrophysics  -  it teaches me how to *do* astrophysics on a computer. every time I will integrate an N-body system, fit a CMB peak, draw mock binaries from a population, deconvolve a spectrum, or solve a Friedmann equation numerically, this is the course that taught me how. it underwrites the python in [Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.md), the simulations in [Lab_High-Energy_MOC](../00_Atlas/Lab_High-Energy_MOC.md), and the equation-solving I do throughout [General_Relativity_MOC](../00_Atlas/General_Relativity_MOC.md) and [Fundamentals_Astrophysics_Cosmology_MOC](../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md).

the course has two faces, married together by the title. the *mathematical* face teaches the linear algebra (eigenvalues, QR decomposition, Gram-Schmidt) and the analysis (Fourier series, finite differences, error propagation) that justify the algorithms. the *numerical* face is the algorithms themselves: Gauss elimination, Newton-Raphson, Runge-Kutta, leapfrog, Monte Carlo, FFT. for every block below I keep both faces in view: *what is the math?* and *what is the algorithm?*

---

## the question this course is trying to answer

> **how do I solve, on a computer, a problem that has no closed-form solution?**

every analytical problem I have ever met in physics had a clean answer: harmonic oscillator, Kepler orbit, hydrogen atom. real research never works that way. the three-body problem has no closed form. Friedmann with $\Omega_m, \Omega_\Lambda, \Omega_r$ all non-zero has no closed form. fitting Planck data to $\Lambda$CDM has no closed form. an N-body simulation of a globular cluster has no closed form. the universe is a numerical problem.

this course is the answer to *given a problem with no analytical solution, what tool do I reach for, and how do I trust its output?* every algorithm I learn comes packaged with two questions: how accurate is it, and how fast is it. the tradeoff between accuracy and speed is the recurring theme.

---

## the chain of objects, what we will build

Mapelli's notes follow a deliberate ladder. we start with the simplest possible problem (a linear equation) and climb to the most complex (a partial differential equation), and at each rung we meet a new *class* of algorithm:

$$\text{linear system} \to \text{nonlinear root} \to \text{derivative} \to \text{integral} \to \text{ODE} \to \text{N-body} \to \text{PDE} \to \text{fit and transform}$$

every later problem reduces, at the algorithm level, to a sequence of earlier ones. an ODE solver calls a derivative. an N-body integrator calls an ODE solver in a loop. a PDE solver calls finite differences and a linear solver. a fit calls a linear solver. an FFT calls integration. so the order is not arbitrary  -  it is the dependency graph of the toolbox.

---

## reference texts

- **Mapelli**, *Numerical Methods for Astrophysics*  -  the official course notes (`numerical_methods_mapelli.pdf`). the spine I follow lecture by lecture
- **Newman**, *Computational Physics*  -  the textbook Mapelli's notes are inspired by, deeper treatments of every algorithm
- **Kiusalaas**, *Numerical Methods in Engineering with Python*  -  the second textbook the course leans on, more code-forward
- **Press, Teukolsky, Vetterling, Flannery**, *Numerical Recipes* (3rd ed., C++ but algorithms are universal)  -  the encyclopedic reference, reach for it when an algorithm has a subtle case
- **Strang**, *Linear Algebra and Its Applications*  -  when I need linear algebra intuition, not algorithms
- **Axler**, *Linear Algebra Done Right* (in source folder)  -  proofs-first linear algebra companion

---

## how to use this map

every blue link below drops into a single concept zettel. the structure I recommend to the future me reading this two weeks before the exam:

1. **read this MOC top to bottom** to recover the dependency graph
2. **for each block, read the linked zettels** in order, since they build on each other
3. **for each block, write one toy script** that implements the central algorithm from scratch  -  this is the only way the algorithm sticks
4. **practise on the past exam papers** in `05_Projects/Exam/First Year/Math Numerical Methods Exam 2026/`, since the exam *is* the practice

every zettel follows the same pattern: motivation, math, algorithm in pseudocode, accuracy and stability remarks, when to use it, common bugs.

---

## block 0  -  course frame

before any algorithm, just *what is this course, what is the exam, and how do I think about a numerical problem*.

- [Math Numerical Methods course intro](../02_Zettel/Theory/Math Numerical Methods course intro.md)  -  what the course is, who teaches it, how it connects to the other MOCs
- [Math Numerical Methods equation sheet](../02_Zettel/Theory/Math Numerical Methods equation sheet.md)  -  every formula I might want, organized for fast lookup
- [Numerical problem solving workflow](../02_Zettel/Theory/Numerical problem solving workflow.md)  -  the meta-skill: define the math, pick the algorithm, validate with a known case, profile, productionize

---

## block 1  -  computing setup, the python toolbox

before any algorithm, the *infrastructure*. this is the unglamorous but critical part: a numerical method is only as useful as my ability to run it, debug it, and produce a publication-quality plot at the end. astrophysicists live in a python ecosystem (numpy + scipy + matplotlib + astropy + pandas), and Mapelli's notes spend the first three chapters teaching me to be fluent in it.

- [Linux for the astrophysicist](../02_Zettel/Theory/Linux for the astrophysicist.md)  -  bash, file system, pipes, redirection, `grep`, `find`, `ssh`, the few commands I actually need
- [Python language essentials](../02_Zettel/Theory/Python language essentials.md)  -  variables, types, lists vs tuples vs dicts, control flow, functions, file I/O  -  the fast-path version of chapter 2
- [Numpy arrays vs Python lists](../02_Zettel/Theory/Numpy arrays vs Python lists.md)  -  the *single most important* python performance lesson: vectorize. the difference between `for i in range(N): a[i] = ...` and `a = np.where(...)` can be 100×
- [Matplotlib plotting essentials](../02_Zettel/Theory/Matplotlib plotting essentials.md)  -  scatter, line, log axes, histogram, 2D histogram, subplots, what makes a figure good
- [Scipy and astropy quick reference](../02_Zettel/Theory/Scipy and astropy quick reference.md)  -  `scipy.optimize`, `scipy.integrate`, `scipy.interpolate`, `scipy.fft`, `astropy.units`, `astropy.io.fits`
- [Pandas for tabular astrophysics data](../02_Zettel/Theory/Pandas for tabular astrophysics data.md)  -  DataFrames, reading CSV/FITS, groupby, the catalog workflow
- [The conda environment](../02_Zettel/Theory/The conda environment.md)  -  environments, package isolation, why I keep one per project

---

## block 2  -  accuracy and speed, the recurring tradeoff

every algorithm in this course has two numbers attached: how accurate is it (error scaling with step size $h$), and how fast is it (operation count scaling with problem size $N$). these are not independent  -  usually I trade one for the other. this block teaches me to read the tradeoff.

- [Floating point representation and rounding errors](../02_Zettel/Theory/Floating point representation and rounding errors.md)  -  IEEE 754, machine epsilon $\epsilon \sim 2.2\times 10^{-16}$, why $0.1 + 0.2 \neq 0.3$, accumulated rounding $\sim \sqrt{N}\,\epsilon$
- [Truncation error and order of accuracy](../02_Zettel/Theory/Truncation error and order of accuracy.md)  -  Taylor series, $O(h^p)$ scaling, why central differences are second-order while forward are first-order
- [Roundoff vs truncation balance](../02_Zettel/Theory/Roundoff vs truncation balance.md)  -  the U-shaped error curve, optimal step size $h_{\rm opt} \sim \sqrt{\epsilon}$ for first-derivative finite differences
- [Computational complexity and speed](../02_Zettel/Theory/Computational complexity and speed.md)  -  Big-O notation, $O(N^3)$ for Gauss elimination, $O(N^2)$ for matrix-vector, $O(N\log N)$ for FFT, $O(N\log N)$ for sorting
- [Vectorization and python speed](../02_Zettel/Theory/Vectorization and python speed.md)  -  why python loops are slow, what numpy does under the hood, when to call out to scipy or compiled code

---

## block 3  -  linear systems, $A\mathbf{x} = \mathbf{b}$

the foundational problem. given a square matrix $A$ and a known vector $\mathbf{b}$, find the unknown vector $\mathbf{x}$. this is the workhorse of numerical physics: it appears in fitting (least squares is a linear system), in PDE discretization (finite differences become a sparse linear system), in eigenvalue problems (a step in the QR algorithm), and in countless one-off problems.

physical question this block answers: **how do I invert a matrix and solve a linear system without inverting the matrix?**

- [Gauss elimination](../02_Zettel/Theory/Gauss elimination.md)  -  the classical algorithm, $O(N^3)$, the row-reduction-then-back-substitution pattern
- [Partial pivoting](../02_Zettel/Theory/Partial pivoting.md)  -  when the algorithm fails (zero or tiny pivots) and how to fix it by row-swapping
- [LU decomposition](../02_Zettel/Theory/LU decomposition.md)  -  $A = LU$, factor once and reuse for many right-hand sides, the forward-then-backward substitution
- [Gauss-Seidel iteration](../02_Zettel/Theory/Gauss-Seidel iteration.md)  -  iterative method, $O(N^2)$ per step, when it converges (diagonally dominant matrices), when it beats direct methods (sparse $A$)
- [Pros and cons of linear solvers](../02_Zettel/Theory/Pros and cons of linear solvers.md)  -  the decision tree: dense vs sparse, one RHS vs many, well-conditioned vs ill-conditioned, big vs huge
- [Matrix inverse via linear systems](../02_Zettel/Theory/Matrix inverse via linear systems.md)  -  never invert a matrix directly: solve $AX = I$ column by column instead

---

## block 4  -  eigenvalues and matrix factorization

a special class of problem: find $\lambda, \mathbf{v}$ such that $A\mathbf{v} = \lambda\mathbf{v}$. eigenvalues encode physics (normal modes, principal components, stationary states) and they encode algorithm convergence (a fixed-point iteration converges iff the iteration matrix has spectral radius $< 1$). this block is the *mathematical* core of the course: it goes deepest into linear algebra theory.

physical question this block answers: **how do I find the natural axes of a linear transformation, in a way that is numerically stable?**

- [Gram-Schmidt orthogonalization](../02_Zettel/Theory/Gram-Schmidt orthogonalization.md)  -  turn a basis into an orthonormal basis by projection-and-subtract, with the modified version that preserves stability
- [QR decomposition](../02_Zettel/Theory/QR decomposition.md)  -  every matrix factors as $A = QR$ with $Q$ orthogonal and $R$ upper triangular; Gram-Schmidt gives one explicit construction
- [QR algorithm for eigenvalues](../02_Zettel/Theory/QR algorithm for eigenvalues.md)  -  iterate $A_{k+1} = R_k Q_k$ where $A_k = Q_k R_k$; converges to a diagonal matrix with eigenvalues on the diagonal
- [Power iteration](../02_Zettel/Theory/Power iteration.md)  -  the simplest eigenvalue method, finds the dominant eigenvalue/vector by repeated matrix-vector products
- [Matrix diagonalization $A = VDV^T$](../02_Zettel/Theory/Matrix diagonalization $A = VDV^T$.md)  -  for symmetric $A$, the eigenvector matrix is orthogonal and $V^TAV = D$; the geometric meaning of "principal axes"

---

## block 5  -  solution of non-linear equations, root finding

next rung up: I want $f(x) = 0$ for a function $f$ I cannot solve analytically. equilibria of dynamical systems are roots, intersections are roots, optimization first-order conditions are roots. four classical algorithms with very different tradeoffs.

physical question this block answers: **given a function $f$ that I can evaluate but not invert, how do I find $x$ such that $f(x) = 0$?**

- [Relaxation method](../02_Zettel/Theory/Relaxation method.md)  -  rewrite $f(x) = 0$ as $x = g(x)$ and iterate $x_{n+1} = g(x_n)$; converges if $|g'(x^*)| < 1$
- [Overrelaxation](../02_Zettel/Theory/Overrelaxation.md)  -  accelerate relaxation by overshooting: $x_{n+1} = x_n + \omega(g(x_n) - x_n)$ with $\omega > 1$
- [Bisection method](../02_Zettel/Theory/Bisection method.md)  -  bracket a root and halve the interval; bulletproof but slow ($O(\log_2(1/\epsilon))$ iterations to error $\epsilon$)
- [Newton-Raphson method](../02_Zettel/Theory/Newton-Raphson method.md)  -  local linearization, $x_{n+1} = x_n - f(x_n)/f'(x_n)$; quadratic convergence when it works, divergence when it doesn't
- [Newton-Raphson for systems of equations](../02_Zettel/Theory/Newton-Raphson for systems of equations.md)  -  multivariate generalization with the Jacobian, $\mathbf{x}_{n+1} = \mathbf{x}_n - J^{-1}(\mathbf{x}_n)\mathbf{f}(\mathbf{x}_n)$
- [Choosing a root finder](../02_Zettel/Theory/Choosing a root finder.md)  -  bracket-then-Newton hybrid, when bisection wins, when Newton fails (multiple roots, flat derivative)

---

## block 6  -  numerical derivatives

derivatives are easy in calculus and surprisingly subtle on a computer. the natural definition $f'(x) \approx [f(x+h) - f(x)]/h$ has *two* sources of error: truncation (finite $h$) and roundoff (cancellation in the numerator). they fight each other, and the resolution is the U-shaped error curve.

physical question this block answers: **given a function $f$ that I can evaluate at points, how do I estimate $f'(x)$, and how small should $h$ be?**

- [Forward backward and central differences](../02_Zettel/Theory/Forward backward and central differences.md)  -  the three first-derivative formulas, errors $O(h)$, $O(h)$, $O(h^2)$ from Taylor
- [Second derivatives](../02_Zettel/Theory/Second derivatives.md)  -  $f''(x) \approx [f(x+h) - 2f(x) + f(x-h)]/h^2$, $O(h^2)$ accuracy
- [Partial numerical derivatives](../02_Zettel/Theory/Partial numerical derivatives.md)  -  finite differences in each direction, building the Jacobian column by column
- [Derivatives of noisy data](../02_Zettel/Theory/Derivatives of noisy data.md)  -  when $f$ has measurement noise, finite differences amplify the noise; the fix is smoothing or fitting first, differentiating second
- [Optimal step size for derivatives](../02_Zettel/Theory/Optimal step size for derivatives.md)  -  $h_{\rm opt} \sim \sqrt{\epsilon}$ for forward differences, $h_{\rm opt} \sim \epsilon^{1/3}$ for central, where $\epsilon$ is the relative error in $f$

---

## block 7  -  integration of functions

the inverse direction: given $f$, I want $\int_a^b f(x)\,dx$. integration is much *more* numerically stable than differentiation (it averages noise instead of amplifying it), and admits a richer family of algorithms.

physical question this block answers: **given a function $f$, how do I compute its integral over a finite range, and how do I do this in many dimensions?**

- [Trapezoidal rule](../02_Zettel/Theory/Trapezoidal rule.md)  -  straight lines between samples, $O(h^2)$ error, the simplest non-trivial quadrature
- [Simpson's rule](../02_Zettel/Theory/Simpson's rule.md)  -  parabolas between triplets of samples, $O(h^4)$ error, the workhorse for smooth integrands
- [Trapezoidal rule error estimate](../02_Zettel/Theory/Trapezoidal rule error estimate.md)  -  error is bounded by the second derivative; how to know how many points I need
- [Monte Carlo integration mean value method](../02_Zettel/Theory/Monte Carlo integration mean value method.md)  -  integral as expectation, $\int f \approx (b-a)\langle f \rangle$, error $\sim 1/\sqrt{N}$ regardless of dimension
- [Multidimensional Monte Carlo integration](../02_Zettel/Theory/Multidimensional Monte Carlo integration.md)  -  the dimension-curse breaker: in $d \geq 4$, MC beats grid quadrature
- [Importance sampling](../02_Zettel/Theory/Importance sampling.md)  -  sample from $g(x)$ instead of uniform, weight by $f/g$; reduces variance dramatically when $g \approx f/\|f\|$
- [Built-in scipy integrators](../02_Zettel/Theory/Built-in scipy integrators.md)  -  `scipy.integrate.quad`, `scipy.integrate.simps`, when to trust them

---

## block 8  -  random numbers and Monte Carlo

every Monte Carlo method is built on a stream of pseudo-random numbers. this block teaches me how that stream is made, why it is *pseudo*, how to draw from arbitrary distributions, and how to verify my draws.

physical question this block answers: **given a uniform pseudo-random stream, how do I draw $N$ samples from an arbitrary distribution $P(x)$?**

- [Pseudo-random number generators](../02_Zettel/Theory/Pseudo-random number generators.md)  -  linear congruential, Mersenne Twister, why "random" is deterministic, periodicity
- [Random number seeds](../02_Zettel/Theory/Random number seeds.md)  -  reproducibility for science, `np.random.seed`, the conventions in publishable code
- [Inverse transform sampling](../02_Zettel/Theory/Inverse transform sampling.md)  -  invert the CDF: if $u \sim U(0,1)$ then $F^{-1}(u) \sim P$; the textbook method, requires invertible CDF
- [Box-Muller transform for Gaussian random numbers](../02_Zettel/Theory/Box-Muller transform for Gaussian random numbers.md)  -  sample two uniforms, return two normals; the polar-coordinate trick
- [Rejection sampling](../02_Zettel/Theory/Rejection sampling.md)  -  bounding-box method, accept if uniform $y < P(x)$; works for any pdf, efficiency = ratio of areas
- [Verifying random samples](../02_Zettel/Theory/Verifying random samples.md)  -  histogram against expected pdf, Kolmogorov-Smirnov test, mean and variance checks

---

## block 9  -  ordinary differential equations

now we get to the heart of numerical astrophysics. an ODE is $\dot{\mathbf{y}} = \mathbf{f}(\mathbf{y}, t)$ with initial condition $\mathbf{y}(t_0) = \mathbf{y}_0$. this is *every* dynamical problem: orbits, stellar structure, accretion disk evolution, expansion of the universe. the algorithms differ in accuracy, speed, and *what they conserve*.

physical question this block answers: **given a system $\dot{\mathbf{y}} = \mathbf{f}(\mathbf{y}, t)$, how do I evolve it from $t_0$ to $t_f$ accurately enough to trust the result?**

- [Euler method](../02_Zettel/Theory/Euler method.md)  -  $\mathbf{y}_{n+1} = \mathbf{y}_n + h\mathbf{f}(\mathbf{y}_n, t_n)$, $O(h)$, the forward-Euler scheme  -  the simplest possible integrator and a teaching tool more than a production one
- [Runge-Kutta 2 midpoint method](../02_Zettel/Theory/Runge-Kutta 2 midpoint method.md)  -  half-step prediction then full-step correction, $O(h^2)$
- [Runge-Kutta 4 method](../02_Zettel/Theory/Runge-Kutta 4 method.md)  -  four-stage scheme, $O(h^4)$, the workhorse general-purpose integrator
- [Systems of ODEs and higher-order ODEs](../02_Zettel/Theory/Systems of ODEs and higher-order ODEs.md)  -  turn $y'' = f(y, y', t)$ into a 2D system $(y, v)$ with $v = y'$
- [Leapfrog integrator](../02_Zettel/Theory/Leapfrog integrator.md)  -  symplectic, drift-kick-drift, conserves energy on average for Hamiltonian systems; the integrator of choice for orbital and N-body problems
- [Fourth-order Hermite predictor-corrector](../02_Zettel/Theory/Fourth-order Hermite predictor-corrector.md)  -  uses both $\mathbf{f}$ and $\dot{\mathbf{f}}$, $O(h^4)$ with two function evaluations, the standard for collisional N-body
- [Adaptive step size control](../02_Zettel/Theory/Adaptive step size control.md)  -  error estimate from comparing two methods, adjust $h$ to keep error tolerable; why fixed-step integrators fail near close encounters
- [Modified midpoint method](../02_Zettel/Theory/Modified midpoint method.md)  -  Gragg's method, the building block of Bulirsch-Stoer
- [Bulirsch-Stoer extrapolation](../02_Zettel/Theory/Bulirsch-Stoer extrapolation.md)  -  Richardson extrapolation in step size, accuracy that grows with iteration; expensive but lethal for smooth problems
- [Initial value vs boundary value problems](../02_Zettel/Theory/Initial value vs boundary value problems.md)  -  IVPs evolve forward, BVPs constrain at both ends, completely different algorithm families
- [Shooting method](../02_Zettel/Theory/Shooting method.md)  -  turn a BVP into a root-finding-plus-IVP problem: shoot, miss, adjust the initial slope, shoot again

---

## block 10  -  the astrophysical N-body problem

an N-body problem is just a special ODE: $\ddot{\mathbf{r}}_i = -G\sum_{j\neq i} m_j (\mathbf{r}_i - \mathbf{r}_j)/|\mathbf{r}_i - \mathbf{r}_j|^3$. but it is *the* astrophysical ODE  -  every gravitational simulation, from the solar system to a galaxy cluster, is one. and it has special structure (Hamiltonian, energy-conserving, scale-free) that the integrator should respect.

physical question this block answers: **given $N$ massive particles interacting gravitationally, how do I evolve them for a long time without the energy drifting?**

- [Astrophysical N-body problem formulation](../02_Zettel/Theory/Astrophysical N-body problem formulation.md)  -  equations of motion, units (often $G = 1$), softening for close encounters
- [N-body with Euler vs midpoint vs leapfrog](../02_Zettel/Theory/N-body with Euler vs midpoint vs leapfrog.md)  -  energy conservation comparison: Euler drifts secularly, midpoint drifts slower, leapfrog oscillates around the true energy without a drift  -  the foundational symplectic-integrator demonstration
- [Energy conservation as a diagnostic](../02_Zettel/Theory/Energy conservation as a diagnostic.md)  -  track $\Delta E/E$ vs time; for a Hamiltonian system, the integrator's quality is read directly off this number
- [Collisional vs collisionless N-body](../02_Zettel/Theory/Collisional vs collisionless N-body.md)  -  collisional (globular clusters, $N \lesssim 10^6$, every pair matters, Hermite); collisionless (galaxies, $N \gtrsim 10^9$, tree codes, particle-mesh)
- [Adaptive timesteps near close encounters](../02_Zettel/Theory/Adaptive timesteps near close encounters.md)  -  why a binary needs a smaller step than the rest of the cluster, individual timesteps and block-step schemes
- [The Pythagorean three-body problem](../02_Zettel/Theory/The Pythagorean three-body problem.md)  -  three masses $3, 4, 5$ at the apexes of a 3-4-5 triangle, classic test of N-body integrators, behaves chaotically with a final escape

---

## block 11  -  partial differential equations

the next rung up from ODEs: now the unknown is a function of *several* variables, $u(x, t)$ or $u(x, y, z, t)$. PDE algorithms split by the type of equation (elliptic, parabolic, hyperbolic) and by the boundary conditions (Dirichlet, Neumann, periodic). Mapelli's chapter is short and focused: finite-difference discretization on a grid.

physical question this block answers: **how do I discretize a PDE on a grid, and how do I keep the discrete solution stable?**

- [Finite difference discretization](../02_Zettel/Theory/Finite difference discretization.md)  -  replace partial derivatives by finite differences, turn the PDE into a system of algebraic equations on grid points
- [Boundary value PDEs and iteration](../02_Zettel/Theory/Boundary value PDEs and iteration.md)  -  Laplace, Poisson; relax the grid until the residual is small (Gauss-Seidel on the grid)
- [Initial value PDEs and FTCS](../02_Zettel/Theory/Initial value PDEs and FTCS.md)  -  diffusion, advection; forward-time, centered-space; explicit, simple, sometimes unstable
- [Stability and the Courant condition](../02_Zettel/Theory/Stability and the Courant condition.md)  -  explicit schemes have a CFL constraint $c\Delta t/\Delta x \leq 1$ (hyperbolic) or $D\Delta t/\Delta x^2 \leq 1/2$ (parabolic); violating it makes the simulation blow up
- [When to use implicit schemes](../02_Zettel/Theory/When to use implicit schemes.md)  -  when the explicit time step is intolerably small; pay $O(N)$ per step (linear solver) instead of $O(1)$, but step further

---

## block 12  -  interpolation and extrapolation

between two known points, what is the function value? this is the everyday problem of working with tabulated data  -  opacity tables, stellar evolution tracks, observed spectra. the answer depends on how smooth I assume the underlying function to be.

physical question this block answers: **given $f$ at $N+1$ points, what is $f$ between those points, and what error am I making?**

- [Linear interpolation](../02_Zettel/Theory/Linear interpolation.md)  -  straight line between two points, simple and robust, $O(h^2)$ error
- [Lagrange polynomial interpolation](../02_Zettel/Theory/Lagrange polynomial interpolation.md)  -  unique degree-$N$ polynomial through $N+1$ points, the analytic form, when it works (low $N$, equispaced or Chebyshev nodes)
- [Newton divided differences](../02_Zettel/Theory/Newton divided differences.md)  -  same polynomial, written so I can add a new point without redoing the whole calculation
- [Runge phenomenon](../02_Zettel/Theory/Runge phenomenon.md)  -  high-degree polynomial interpolation oscillates wildly at the edges with equispaced nodes; why polynomial fitting beyond $N \sim 5$ is dangerous
- [Cubic spline interpolation](../02_Zettel/Theory/Cubic spline interpolation.md)  -  piecewise cubic, $C^2$ continuous, the right answer for smooth tabulated data
- [Two-dimensional interpolation](../02_Zettel/Theory/Two-dimensional interpolation.md)  -  bilinear, bicubic, structured grids vs scattered data
- [Scipy interpolation tools](../02_Zettel/Theory/Scipy interpolation tools.md)  -  `scipy.interpolate.interp1d`, `interp2d`, `CubicSpline`, when to trust each one

---

## block 13  -  fitting procedures

the data is noisy. the model has parameters. find the parameters that best match the data. this is the central problem of observational physics.

physical question this block answers: **given $N$ noisy measurements $y_i$ at known $x_i$, what model parameters $\theta$ minimize the disagreement?**

- [Linear least squares](../02_Zettel/Theory/Linear least squares.md)  -  fit $y = mx + b$ by minimizing $\sum (y_i - mx_i - b)^2$; closed-form solution via normal equations
- [Weighted least squares](../02_Zettel/Theory/Weighted least squares.md)  -  when data points have different errors $\sigma_i$, weight by $1/\sigma_i^2$; the only sane choice for heteroscedastic data
- [General linear least squares](../02_Zettel/Theory/General linear least squares.md)  -  fit $y = \sum_k \theta_k\phi_k(x)$ with arbitrary basis functions $\phi_k$; reduces to a linear system
- [Polynomial fitting](../02_Zettel/Theory/Polynomial fitting.md)  -  special case of general LSQ with $\phi_k(x) = x^k$; same Runge phenomenon caveat as interpolation
- [Goodness of fit and chi-squared](../02_Zettel/Theory/Goodness of fit and chi-squared.md)  -  $\chi^2 = \sum (y_i - f_i)^2/\sigma_i^2$, expected $\chi^2/\nu \approx 1$ for good fit and right errors, why it tests the *model* and the *errors* simultaneously
- [Non-linear fitting with scipy](../02_Zettel/Theory/Non-linear fitting with scipy.md)  -  `scipy.optimize.least_squares`, `curve_fit`; the Levenberg-Marquardt algorithm, when to provide a Jacobian
- [Fitting practical recipe](../02_Zettel/Theory/Fitting practical recipe.md)  -  center and scale $x$ before fitting, check residuals, never extrapolate, plot the fit on top of the data

---

## block 14  -  fourier transforms

the most beautiful algorithm in numerical mathematics. the FFT computes a discrete Fourier transform in $O(N\log N)$ instead of the naive $O(N^2)$. it is what makes spectral analysis, signal processing, image filtering, and convolution practical. and it is the gateway to spectral PDE solvers.

physical question this block answers: **given a sampled signal in time, what frequencies is it made of, and how do I compute that fast?**

- [Fourier series math summary](../02_Zettel/Theory/Fourier series math summary.md)  -  the Fourier series for periodic functions, the Fourier transform for non-periodic, Parseval's theorem, the convolution theorem
- [Discrete Fourier transform](../02_Zettel/Theory/Discrete Fourier transform.md)  -  sampled $N$-point version, $X_k = \sum_n x_n e^{-2\pi i kn/N}$, $O(N^2)$ direct, periodic boundary
- [Fast Fourier transform algorithm](../02_Zettel/Theory/Fast Fourier transform algorithm.md)  -  Cooley-Tukey divide-and-conquer, $O(N\log N)$, the algorithm that runs the world
- [Physical interpretation of the FFT](../02_Zettel/Theory/Physical interpretation of the FFT.md)  -  frequency bins, Nyquist frequency $f_{\rm Nyq} = 1/(2\Delta t)$, aliasing, leakage, windowing
- [Power spectrum estimation](../02_Zettel/Theory/Power spectrum estimation.md)  -  squared-magnitude FFT, why one should average over many segments (Welch's method), the relation to autocorrelation
- [FFT in scipy and numpy](../02_Zettel/Theory/FFT in scipy and numpy.md)  -  `numpy.fft.fft`, `scipy.fft`, real vs complex, conventions for normalization

---

## block 15  -  sorting and discrete algorithms

a small but unavoidable block. sorting is everywhere  -  finding nearest neighbors, building histograms, ranking, merging catalogs. and it is the canonical example for "complexity of an algorithm."

- [Sorting algorithms overview](../02_Zettel/Theory/Sorting algorithms overview.md)  -  bubble ($O(N^2)$), selection ($O(N^2)$), quicksort ($O(N\log N)$ average), mergesort ($O(N\log N)$ guaranteed); when each one wins, why python's `sorted` uses Timsort

---

## block 16  -  notions of machine learning in astrophysics

a one-chapter sketch, not a full treatment. modern astrophysics is increasingly ML-driven (galaxy classification, transient detection, parameter inference), and Mapelli closes the course with a teaser of decision trees as the gateway algorithm.

- [What is machine learning](../02_Zettel/Theory/What is machine learning.md)  -  supervised vs unsupervised, training vs test, overfitting and the bias-variance tradeoff
- [Decision tree classifier](../02_Zettel/Theory/Decision tree classifier.md)  -  the algorithm: split features by entropy/Gini, recurse; pros (interpretable), cons (high variance)
- [Iris dataset and the ML hello world](../02_Zettel/Theory/Iris dataset and the ML hello world.md)  -  three species of flower, four features; the canonical training-classification demonstration
- [Interpretability vs accuracy in ML](../02_Zettel/Theory/Interpretability vs accuracy in ML.md)  -  why decision trees are interpretable and neural nets are not, why physicists care

---

## the problem-class taxonomy (for the exam)

every Mapelli exam question lives in one of seven boxes. recognising the box on first read is half the battle:

| problem class | give-aways in the prompt | algorithm to reach for | block |
|---|---|---|---|
| **read & visualize data** | "download this file", "plot a scatter / histogram" | `np.loadtxt`, `plt.scatter`, `plt.hist`, `plt.hist2d` | 1 |
| **basic statistics** | "mean", "standard deviation", "fit a Gaussian" | `np.mean`, `np.std`, `scipy.stats` | 1, 13 |
| **draw random numbers** | "generate $N$ samples from $P(x) = \ldots$" | inverse sampling if CDF invertible, else rejection | 8 |
| **compute an integral** | "calculate $\int_a^b f(x)\,dx$ using N points" | trapezoid (1D smooth), MC (high-D or random integrand) | 7 |
| **find a root** | "solve $f(x) = 0$" | bisection if bracketed, Newton if smooth | 5 |
| **integrate an ODE** | "evolve a system from $t_0$ to $t_f$ with timestep $h$" | midpoint / RK4 / leapfrog depending on Hamiltonian-ness | 9, 10 |
| **fit a model** | "fit $y = f(x; \theta)$" | linear LSQ if linear in $\theta$, else `scipy.optimize.curve_fit` | 13 |

the exam template I have on file (4 exercises) hits exactly these boxes: read-and-plot, inverse sampling, MC integration, N-body midpoint integration with energy diagnostic.

---

## related MOCs and where this work leaks into

- [Fundamentals_Astrophysics_Cosmology_MOC](../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md)  -  every cosmology calculation that actually returns a number was done with the tools in this MOC: integrating Friedmann, computing $D_L(z)$, drawing mock CMB realizations
- [General_Relativity_MOC](../00_Atlas/General_Relativity_MOC.md)  -  geodesic integration, effective-potential plots, perihelion-precession ODE solves
- [Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.md)  -  fitting Planck data, MCMC, FFT for the matter power spectrum
- [Lab_High-Energy_MOC](../00_Atlas/Lab_High-Energy_MOC.md)  -  every detector simulation, every spectrum extraction, every ML photon classifier
- [Voyage!](../Voyage!.md)  -  the master mind-map of the whole vault

---

## appendix  -  exam project folder

the exam project lives at `05_Projects/Exam/First Year/Math Numerical Methods Exam 2026/`. it contains:

- the master plan note (timeline, problem-class taxonomy, what to memorize)
- worked solutions to past exams (`exam_2021_01_25_groupA.pdf`, `exam_2021_06_24.pdf`, `exam_2021_08_30.pdf`, `EXAM_solution_25-01-2024.ipynb`, `Solution_14Feb2025.ipynb`, `Solution_24June2025.ipynb`)
- per-problem-class template notebooks (one for each row of the taxonomy table above)
- a "code snippets I will need" appendix  -  the `np.loadtxt` patterns, the `plt.hist` boilerplate, the inverse-sampling one-liner