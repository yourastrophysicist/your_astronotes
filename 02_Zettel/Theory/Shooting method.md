---
layout: default
title: "Shooting method"
---

# Shooting method

a way to solve a **boundary value problem** (BVP) by turning it into a sequence of **initial value problems** (IVPs). the name comes from artillery: shoot, miss, adjust the angle, shoot again. wrap a Newton-Raphson root finder around an ODE integrator and let it converge.

## the setup

a typical BVP: solve $y''(x) = f(x, y, y')$ on $[a, b]$ with $y(a) = \alpha$ and $y(b) = \beta$. a BVP differs from an IVP because two of the four pieces of information (the value and derivative at $a$, and the value and derivative at $b$) are split across the two boundaries instead of all at one.

I cannot just integrate forward from $a$ — I do not know $y'(a)$. shooting picks a guess for $y'(a)$, integrates forward, and checks whether the result hits $y(b) = \beta$. if not, adjust the guess and try again.

## the algorithm

1. guess an initial slope $s = y'(a)$
2. integrate the IVP $y'' = f(x, y, y')$ from $a$ to $b$ with $y(a) = \alpha$, $y'(a) = s$. let $y_b(s)$ be the resulting value at $b$
3. compute the residual $F(s) = y_b(s) - \beta$
4. find $s$ such that $F(s) = 0$ using bisection, secant, or Newton-Raphson
5. the IVP solution at the converged $s$ is the BVP solution

step 4 is the magic: $F(s)$ is a function of one real variable (or several, for higher-dimensional problems), so I can use any 1D root finder. each "evaluation" of $F$ requires one full IVP integration, so it is expensive — but few iterations are needed if I use Newton.

## python sketch

```python
from scipy.integrate import solve_ivp
from scipy.optimize import brentq

def shoot(s, alpha, beta, a, b, f):
    """Integrate the IVP from a with y(a)=alpha, y'(a)=s. Return y(b) - beta."""
    def rhs(x, Y):
        y, yp = Y
        return [yp, f(x, y, yp)]
    sol = solve_ivp(rhs, (a, b), [alpha, s], dense_output=True)
    return sol.y[0, -1] - beta

# bracket s, root-find
s_low, s_high = -10, 10           # initial bracket on the slope
s_star = brentq(lambda s: shoot(s, alpha, beta, a, b, f), s_low, s_high)
```

## the Newton-Raphson update

if I use Newton, I need the derivative $dF/ds$. compute it by **integrating the variational equation** alongside the original ODE, or by finite difference (one extra IVP integration per Newton step):

$$\frac{dF}{ds} \approx \frac{F(s + \delta) - F(s)}{\delta}$$

with $\delta \sim 10^{-5}$.

then $s_{n+1} = s_n - F(s_n)/(dF/ds)$.

## strengths

- **uses standard tools**: an ODE integrator and a root finder, nothing exotic
- **handles non-linear BVPs naturally**: the IVP integrator does not care if the equation is non-linear
- **easy to code from scratch**

## weaknesses

- **sensitivity**: small changes in $s$ can produce huge changes in $y_b(s)$ for stiff or chaotic problems. the function $F(s)$ may have multiple roots, plateaus, or wild slopes
- **expensive**: each Newton iteration costs a full IVP integration. for hard problems this can mean hundreds of integrations
- **fails for unstable IVPs**: if the forward integration grows exponentially (which is generic for some boundary problems), the answer at $b$ is dominated by amplification of the initial guess, and root-finding becomes ill-conditioned

## when shooting wins

- **mildly non-linear BVPs** with one boundary at each end
- **eigenvalue problems**: solve $-y'' + V(x) y = E y$ for $E$ such that $y \to 0$ at both boundaries → shoot with $E$ as the parameter
- **stellar structure**: integrate the 4 stellar structure equations from the surface inward (or center outward), root-find on the boundary conditions

## when something else wins

- **stiff or unstable BVPs**: use a **finite-difference** or **collocation** method instead. discretize on a grid, write the BVP as a large linear (or non-linear) system, solve once. `scipy.integrate.solve_bvp` does this
- **multi-point BVPs**: shooting becomes shooting-with-multiple-targets, awkward
- **eigenvalue problems with many eigenvalues**: matrix methods give all eigenvalues at once

## astrophysics use case: stellar structure

solve the four stellar structure equations:

$$\frac{dM_r}{dr} = 4\pi r^2 \rho, \quad \frac{dP}{dr} = -\frac{GM_r \rho}{r^2}, \quad \frac{dL}{dr} = 4\pi r^2 \rho \epsilon, \quad \frac{dT}{dr} = -\frac{3 \kappa \rho L}{16\pi a c r^2 T^3}$$

boundary conditions: $M_r(0) = 0$, $L(0) = 0$ (regularity at center); $P(R) = 0$, $T(R) = T_{\rm eff}$ (surface). shoot from center outward with guesses for $P_c, T_c$, root-find on $P(R) = 0$ and $T(R) = T_{\rm eff}$ jointly.

this is the **Henyey method** for stellar structure, although in practice it is implemented as a finite-difference relaxation rather than naive shooting.

## bound-state quantum mechanics

solve $-\psi'' + V(x)\psi = E\psi$ on $[-L, L]$ with $\psi(\pm L) \to 0$. boundary value plus eigenvalue. shoot from $-L$ with a guess for $E$; the wavefunction is not normalizable except at the right $E$, where $\psi(+L) = 0$. find $E$ by bisection on $\psi(+L; E)$.

## see also

- [Initial value vs boundary value problems](../../02_Zettel/Theory/Initial value vs boundary value problems.md)
- [Newton-Raphson method](../../02_Zettel/Theory/Newton-Raphson method.md)
- [Bisection method](../../02_Zettel/Theory/Bisection method.md)
- [Runge-Kutta 4 method](../../02_Zettel/Theory/Runge-Kutta 4 method.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
