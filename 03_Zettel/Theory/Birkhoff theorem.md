---
layout: "default"
title: "Birkhoff theorem"
---
**Birkhoff's theorem**: any **spherically symmetric vacuum solution** of Einstein's equations is necessarily **static** (no time dependence) and asymptotically **Schwarzschild**.

## the statement

> if the metric is spherically symmetric and satisfies $R_{\mu\nu} = 0$ in some region, that region is locally isometric to Schwarzschild.

three conclusions packaged:
- **asymptotic flatness**: $g \to \eta$ at large $r$.
- **staticness**: there's a Killing vector $\partial_t$, even though we didn't assume one.
- **uniqueness**: only one mass parameter $M$.

## the consequence: no spherical GW

a pulsating, oscillating, or even exploding **spherically symmetric** mass distribution produces **no gravitational radiation outside itself**. its exterior remains Schwarzschild at all times.

physical reason: the lowest non-trivial multipole that can radiate GW is the **quadrupole**. monopole + dipole are forbidden (mass + momentum conservation). a spherically symmetric source has zero quadrupole, hence zero GW.

implication: we don't see GW from spherical supernovae or radial pulsations of stars. only **non-spherical** processes (binary inspirals, asymmetric collapses) emit GW.

## the analogy with Newtonian gravity

in Newtonian gravity: the Newton **shell theorem** says the gravitational field of a spherical shell of mass is the same outside as if all the mass were at the centre. inside, the field is zero.

Birkhoff is the **GR generalisation**:
- **outside** a spherical mass: pure Schwarzschild.
- **inside** (vacuum cavity inside a spherical shell of matter): pure Minkowski.

so an observer inside a hollow spherical star feels no gravitational field, regardless of the star's pulsations.

## proof sketch

assume metric is spherically symmetric:
$$ds^2 = -A(t, r)\,dt^2 + B(t, r)\,dr^2 + r^2 d\Omega^2$$
(with mixed cross-terms killed by coordinate choice).

vacuum: $R_{\mu\nu} = 0$.

compute $R_{\mu\nu}$ explicitly in this ansatz. several components vanish; the remaining ones force:
- $A(t, r) = f(t)\,(1 - 2GM/r)$
- $B(t, r) = (1 - 2GM/r)^{-1}$
- $f(t)$ can be absorbed by redefining $t$.

result: the metric is exactly Schwarzschild, regardless of any time-dependent assumptions. **time-dependence vanishes** in the vacuum exterior.

## see also

- [Schwarzschild metric](Schwarzschild%20metric.html)
- [Schwarzschild horizon](Schwarzschild%20horizon.html)
- [Einstein equations](Einstein%20equations.html)
- [Quadrupole formula](Quadrupole%20formula.html)
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 5 - The Einstein Equation](../../02_Literature/Book/Baumann%20GR/Ch%205%20-%20The%20Einstein%20Equation.html)
- [Ch 6 - Black Holes](../../02_Literature/Book/Baumann%20GR/Ch%206%20-%20Black%20Holes.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Quadrupole%20formula.html" class="backlink-item">Quadrupole formula</a></li>
    <li class="backlink-item-wrap"><a href="Schwarzschild%20metric.html" class="backlink-item">Schwarzschild metric</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
  </ul>
</div>

