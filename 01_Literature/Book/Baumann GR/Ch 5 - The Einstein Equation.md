---
layout: default
title: "Ch 5 - The Einstein Equation"
---

# Baumann Ch 5, The Einstein Equation

up: [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.md) · [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.md)

*the chapter where the second half of the GR slogan, "matter tells spacetime how to curve", finally becomes a precise equation. we derive Einstein's equation $G_{\mu\nu} = 8\pi G T_{\mu\nu}$ in two ways: by physical reasoning (guess and fix) and from a variational principle (Einstein-Hilbert action). then we solve it in vacuum to get Schwarzschild, de Sitter, and anti-de Sitter.*

---

## the question this chapter is trying to answer

> **given a distribution of matter and energy in spacetime, what must the metric be?**

this is the GR equivalent of "given a distribution of charge and current, what must the EM field be?" the answer in EM is Maxwell's equations. the answer in GR is **Einstein's equation**.

we will derive it in two ways:

1. **physical reasoning**: guess what equation should generalize Newton's $\nabla^2 \Phi = 4\pi G \rho$. fix the guess to be consistent with stress-energy conservation.
2. **variational principle**: write down the simplest scalar action and vary it.

both routes lead to the same equation.

---

## 5.1, deriving Einstein's equation by physical guessing

### the structure of the equation we want

we want a tensor equation that generalizes $\nabla^2 \Phi = 4\pi G \rho$.

the right-hand side: in special relativity, the energy density is $T_{00}$, the time-time component of the **stress-energy tensor** $T_{\mu\nu}$. so the right-hand side should be $\sim T_{\mu\nu}$.

the left-hand side: it should be a symmetric $(0, 2)$ tensor (to match $T_{\mu\nu}$) that involves **second derivatives of the metric** (since Newton's $\Phi$ becomes $g_{\mu\nu}$, and Newton's equation involves $\nabla^2$).

what symmetric $(0, 2)$ tensors with two derivatives of $g$ exist? the **Ricci tensor** $R_{\mu\nu}$ is a natural candidate. it is symmetric, it is built from second derivatives of $g$ (via Christoffels and Riemann), and it is naturally a "trace" of the full curvature.

### the first guess

Einstein's first guess was

$$R_{\mu\nu} \stackrel{?}{=} \kappa T_{\mu\nu}$$

problem: stress-energy has to be conserved, $\nabla^\mu T_{\mu\nu} = 0$ (this is the GR generalization of the special-relativistic $\partial^\mu T_{\mu\nu} = 0$). but Ricci is **not** automatically conserved:

$$\nabla^\mu R_{\mu\nu} = \tfrac12 \nabla_\nu R \neq 0$$

(this comes from the contracted Bianchi identity, see [Ch 4 - Spacetime Curvature](../../../01_Literature/Book/Baumann GR/Ch 4 - Spacetime Curvature.md)). so the first guess is inconsistent: the left side has a divergence, the right side doesn't.

### the second guess, the Einstein tensor

the contracted Bianchi identity tells us that the combination

$$\nabla^\mu(R_{\mu\nu} - \tfrac12 g_{\mu\nu}R) = 0$$

is identically zero. so define the **Einstein tensor**

$$\boxed{\,G_{\mu\nu} \equiv R_{\mu\nu} - \tfrac12 g_{\mu\nu} R\,}$$

and propose

$$G_{\mu\nu} = \kappa T_{\mu\nu}$$

both sides are now automatically conserved. this works.

### fixing $\kappa$ from the Newtonian limit

we still need to determine $\kappa$. take the trace-reversed equation $R_{\mu\nu} = \kappa(T_{\mu\nu} - \tfrac12 g_{\mu\nu}T)$ and apply it in the Newtonian limit. for non-relativistic matter $T_{00} \approx \rho$ and trace $T \approx -\rho$, so $R_{00} \approx \kappa\rho/2$. the linearized Ricci is $R_{00} \approx -\tfrac12 \nabla^2 h_{00}$. matching to Poisson $\nabla^2 \Phi = 4\pi G \rho$ via $h_{00} = -2\Phi$ gives

$$\kappa = 8\pi G$$

so the final equation is

$$\boxed{\,G_{\mu\nu} = 8\pi G\, T_{\mu\nu}\,}$$

(taking $c = 1$). this is **Einstein's field equation**, one of the most beautiful equations ever written. ten coupled second-order PDEs for the metric. of these, $\nabla^\mu G_{\mu\nu} = 0$ provides 4 constraints, leaving 6 independent dynamical equations. the metric has 10 components but 4 of them can be gauged away by coordinate changes, leaving 6 physical components. **the counting matches**: 6 equations for 6 dynamical components.

---

## 5.2, the variational derivation, Einstein-Hilbert action

### the action

an alternative way to get Einstein's equation: write down the simplest possible action for the metric that gives a tensor equation, and vary.

requirements:
- the action must be a Lorentz scalar
- it must depend on the metric and at most its second derivatives
- it must be coordinate-invariant (use $\sqrt{-g}\,d^4x$)

the unique answer (modulo a constant) is the **Einstein-Hilbert action**:

$$\boxed{\,S_{\rm EH} = \int d^4 x\,\sqrt{-g}\,R\,}$$

### the variation

vary $g^{\mu\nu} \to g^{\mu\nu} + \delta g^{\mu\nu}$:

$$\delta S = \int d^4 x\, \sqrt{-g}\,\bigl[R_{\mu\nu} - \tfrac12 g_{\mu\nu}R\bigr]\,\delta g^{\mu\nu}$$

(using $\delta\sqrt{-g} = -\tfrac12 \sqrt{-g} g_{\mu\nu}\delta g^{\mu\nu}$ and that $g^{\mu\nu}\delta R_{\mu\nu}$ is a total derivative.)

setting $\delta S = 0$ for arbitrary $\delta g^{\mu\nu}$ requires

$$R_{\mu\nu} - \tfrac12 g_{\mu\nu}R = G_{\mu\nu} = 0$$

this is the **vacuum** Einstein equation. solutions: Minkowski, Schwarzschild, de Sitter, etc.

> the variational route gives the same answer as the guess-and-fix route, but it tells us something extra: GR is **uniquely determined** by the requirement that the action be the simplest possible scalar built from the metric. there is essentially one theory.

---

## 5.3, including matter

### adding a matter action

with matter, the total action is

$$S = \frac{1}{2\kappa}\int d^4 x\,\sqrt{-g}\,R + S_M$$

(where $\kappa = 8\pi G$ in geometrized units, with the prefactor adjusted to recover the correct Einstein equation.)

### the stress-energy tensor

vary the matter action with respect to the metric, and define the **stress-energy tensor** as

$$\boxed{\,T_{\mu\nu} \equiv -\frac{2}{\sqrt{-g}}\,\frac{\delta S_M}{\delta g^{\mu\nu}}\,}$$

this is the general definition of $T_{\mu\nu}$ in any field theory coupled to gravity. it tells us that **the stress-energy is the response of the matter action to a metric perturbation**.

varying the total action gives $G_{\mu\nu} - \kappa T_{\mu\nu} = 0$, recovering Einstein's equation.

### why $T_{\mu\nu}$ is automatically conserved

a beautiful consequence of this construction: **diffeomorphism invariance of the matter action implies conservation of $T_{\mu\nu}$**.

argument: under a coordinate change $\delta g_{\mu\nu} = \nabla_\mu V_\nu + \nabla_\nu V_\mu$, the variation of the matter action is

$$\delta S_M = -\int d^4 x\,\sqrt{-g}\,T^{\mu\nu}\nabla_\mu V_\nu$$

if $S_M$ is diffeomorphism-invariant (a tensorial scalar), then $\delta S_M = 0$ for any $V$. integrating by parts:

$$0 = -\int d^4 x\,\sqrt{-g}\,V_\nu(-\nabla_\mu T^{\mu\nu}) \quad\Rightarrow\quad \nabla_\mu T^{\mu\nu} = 0$$

so **conservation of stress-energy follows from coordinate invariance**. it is built into GR; we don't impose it as a separate axiom. it is automatic.

### familiar stress-energy tensors

worth memorizing:

- **scalar field** $\phi$ with potential $V(\phi)$:
$$T_{\mu\nu} = \nabla_\mu \phi \nabla_\nu \phi - \tfrac12 g_{\mu\nu}(\nabla^\rho \phi \nabla_\rho \phi + 2V)$$

- **electromagnetic field**:
$$T_{\mu\nu} = F_{\mu\rho}F_\nu{}^\rho - \tfrac14 g_{\mu\nu} F^{\rho\sigma}F_{\rho\sigma}$$

- **perfect fluid** with energy density $\rho$, pressure $p$, four-velocity $U^\mu$:
$$\boxed{\,T_{\mu\nu} = (\rho + p) U_\mu U_\nu + p\,g_{\mu\nu}\,}$$

the perfect fluid is the workhorse of cosmology. it is what $T_{\mu\nu}$ looks like for the bulk content of the universe (matter, radiation, dark energy). all of Q18 - derive the acceleration equation through Q20 - matter plus radiation universe uses this form.

---

## 5.4, the cosmological constant

there is one more term we can add to Einstein's equation that is consistent with everything (covariantly conserved, made from the metric):

$$\boxed{\,G_{\mu\nu} + \Lambda g_{\mu\nu} = 8\pi G\, T_{\mu\nu}\,}$$

$\Lambda$ is the **cosmological constant**.

> historically: Einstein originally added this term to allow a static universe, then removed it when Hubble showed the universe was expanding (and Einstein called it his "biggest blunder"). then in 1998, Perlmutter, Riess, and Schmidt discovered that the universe's expansion is **accelerating**, requiring exactly this kind of term. so $\Lambda$ came back, this time interpreted as **dark energy**, the dominant component of the universe today.

### dark energy as a perfect fluid

we can move $\Lambda g_{\mu\nu}$ to the right-hand side and interpret it as a contribution to $T_{\mu\nu}$:

$$T_{\mu\nu}^{(\Lambda)} = -\frac{\Lambda}{8\pi G}\,g_{\mu\nu}$$

with $\rho_\Lambda = \Lambda/(8\pi G)$ and $p_\Lambda = -\rho_\Lambda$, this is a perfect fluid with **equation of state $w = -1$**. it has **negative pressure**, which in GR is a source of *acceleration* rather than deceleration. that is what drives the late-time accelerating expansion of the universe.

the action with $\Lambda$:

$$S = \frac{1}{16\pi G}\int d^4 x\,\sqrt{-g}\,(R - 2\Lambda) + S_M$$

so $\Lambda$ is just a pure-volume term in the action. nothing forbids it; in fact, in quantum field theory, generic vacuum fluctuations should produce one.

---

## 5.5, vacuum solutions

with $T_{\mu\nu} = 0$ (vacuum) and possibly $\Lambda$, Einstein's equation reduces to $R_{\mu\nu} = \Lambda g_{\mu\nu}$. let me solve it in three special cases.

### Minkowski ($\Lambda = 0$)

trivial: the flat metric $ds^2 = -dt^2 + d\vec x^2$ has $R_{\mu\nu} = 0$ identically. so it is a vacuum solution.

### Schwarzschild ($\Lambda = 0$, spherically symmetric)

this is one of the most important derivations in GR. we want the spherically symmetric vacuum solution.

**step 1, write the most general spherically symmetric metric.** the most general line element with $SO(3)$ rotational symmetry is

$$ds^2 = -e^{2\alpha(t,r)}dt^2 + e^{2\beta(t,r)}dr^2 + r^2(d\theta^2 + \sin^2\theta d\phi^2)$$

(after some coordinate gymnastics to remove off-diagonal pieces.)

**step 2, impose $R_{\mu\nu} = 0$.** Baumann gives the components on page 70. several conditions:

- $R_{tr} = (2/r)\partial_t \beta = 0 \Rightarrow \beta = \beta(r)$
- $R_{tt}$ and $R_{rr}$ together $\Rightarrow \alpha = -\beta + $ const (constant absorbed by rescaling time)
- $R_{\theta\theta} = 0 \Rightarrow \partial_r(r e^{2\alpha}) = 1$, integrating to $e^{2\alpha} = 1 - R_S/r$

> the **first** of these, $\beta = \beta(r)$ (i.e., the metric is automatically time-independent), is **Birkhoff's theorem**: any spherically symmetric vacuum solution is automatically static. so a spherically symmetric pulsating star produces the same external metric as a static one. **there is no monopole gravitational radiation in GR.** this is a deep result and it is worth remembering as a one-liner for the oral.

**step 3, fix the integration constant by Newton.** matching to the Newtonian limit at large $r$, where $g_{tt} = -(1 + 2\Phi) = -(1 - 2GM/r)$, identifies

$$R_S = 2GM \quad\text{(Schwarzschild radius)}$$

**final form**:

$$\boxed{\,ds^2 = -\left(1 - \frac{2GM}{r}\right)dt^2 + \left(1 - \frac{2GM}{r}\right)^{-1}dr^2 + r^2 d\Omega^2\,}$$

this is the **Schwarzschild metric**, the gravitational field outside any spherical, non-rotating mass: a star, a planet, a non-rotating black hole. it is the metric used in Q11 - selected Schwarzschild Christoffels through Q14 - photon trajectory and impact parameter.

asymptotically flat: $g_{\mu\nu} \to \eta_{\mu\nu}$ as $r \to \infty$.

### de Sitter ($\Lambda > 0$)

with positive cosmological constant, the spherically symmetric solution becomes

$$\boxed{\,ds^2 = -\left(1 - \frac{r^2}{R^2}\right)dt^2 + \left(1 - \frac{r^2}{R^2}\right)^{-1}dr^2 + r^2 d\Omega^2\,}$$

with $R^2 \equiv 3/\Lambda$. this is **de Sitter space** in **static patch coordinates**.

physical interpretation: a vacuum solution dominated by a positive cosmological constant. the surface $r = R$ is a **cosmological horizon**: a static observer at $r = 0$ cannot communicate with anything beyond $r = R$ in their rest frame.

if we use **planar coordinates** instead, de Sitter becomes

$$ds^2 = -d\hat t^2 + e^{2\hat t/R}(dr^2 + r^2 d\Omega^2)$$

an **exponentially expanding flat universe**. this is the metric of **inflation**, the very early epoch of the universe. inflation is essentially "de Sitter for a brief period" (about $10^{-32}$ seconds).

### anti-de Sitter ($\Lambda < 0$)

with negative cosmological constant:

$$\boxed{\,ds^2 = -\left(1 + \frac{r^2}{R^2}\right)dt^2 + \left(1 + \frac{r^2}{R^2}\right)^{-1}dr^2 + r^2 d\Omega^2\,}$$

with $R^2 = -3/\Lambda$. this is **anti-de Sitter (AdS)**, a negatively curved spacetime. very important in toy models of quantum gravity and in **AdS/CFT**, the holographic correspondence.

the 2D version of this (radial-time slice only) is exactly the metric in Q8 - null geodesic in static metric.

---

## what to remember from this chapter

if i had to compress chapter 5 into a paragraph for the oral:

> Einstein's equation is the GR generalization of Poisson's equation. it must be a tensor equation relating second derivatives of the metric (some "curvature") to the stress-energy tensor of matter. the only consistent choice is $G_{\mu\nu} = 8\pi G T_{\mu\nu}$, where $G_{\mu\nu} = R_{\mu\nu} - \tfrac12 g_{\mu\nu}R$ is the Einstein tensor, automatically conserved by the contracted Bianchi identity. the constant $8\pi G$ is fixed by the Newtonian limit. the equation can also be derived from the Einstein-Hilbert action $S = \int d^4x\sqrt{-g}\,R$, varying with respect to the inverse metric. matter is included by adding a matter action $S_M$, with the stress-energy defined by $T_{\mu\nu} = -(2/\sqrt{-g})\delta S_M/\delta g^{\mu\nu}$; diffeomorphism invariance of $S_M$ then automatically gives $\nabla^\mu T_{\mu\nu} = 0$. a cosmological constant $\Lambda$ can be added; observationally $\Lambda > 0$ today, equivalent to a perfect fluid with $w = -1$ (dark energy). solving the vacuum equation in spherically symmetric form, with $\Lambda = 0$, gives the Schwarzschild metric (proven static by Birkhoff's theorem); with $\Lambda > 0$ gives de Sitter; with $\Lambda < 0$ gives anti-de Sitter.

---

## connections

- [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.md)
- [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.md)
- [Einstein equations](../../../02_Zettel/Theory/Einstein equations.md) · [Einstein tensor and Bianchi](../../../02_Zettel/Theory/Einstein tensor and Bianchi.md) · [Stress-energy tensor](../../../02_Zettel/Theory/Stress-energy tensor.md) · [Cosmological constant](../../../02_Zettel/Theory/Cosmological constant.md) · [Trace-reversed Einstein equations](../../../02_Zettel/Theory/Trace-reversed Einstein equations.md)
- [Schwarzschild metric](../../../02_Zettel/Theory/Schwarzschild metric.md) · [Birkhoff theorem](../../../02_Zettel/Theory/Birkhoff theorem.md)
- Q11 - selected Schwarzschild Christoffels · Q12 - circular orbits and orbital frequency · Q13 - radial infall and proper time · Q14 - photon trajectory and impact parameter · Q18 - derive the acceleration equation · Q19 - radiation universe · Q20 - matter plus radiation universe
- previous: [Ch 4 - Spacetime Curvature](../../../01_Literature/Book/Baumann GR/Ch 4 - Spacetime Curvature.md)
- next: [Ch 6 - Black Holes](../../../01_Literature/Book/Baumann GR/Ch 6 - Black Holes.md)
