---
layout: default
title: "Newtonian Friedmann derivation"
---

a beautifully classical (pre-GR) way to derive the Friedmann equation: just Newtonian gravity applied to a uniform expanding sphere of dust. the GR version (see Friedmann equations with Λ) gives the same answer with relativistic corrections.

---

## the shell argument

consider a homogeneous, isotropic universe filled with non-relativistic matter of density $\rho$. by symmetry, pick any point as the center. by Birkhoff's theorem (which Newton effectively knew), only the matter *inside* a spherical shell of radius $r$ contributes to the gravitational force on the shell.

a test mass $m$ on the shell experiences gravity:
$$F = -\frac{G M(<r) m}{r^2}, \qquad M(<r) = \frac{4\pi}{3} r^3 \rho$$

so its equation of motion:
$$\ddot r = -\frac{4\pi G}{3} \rho\, r$$

now use the cosmological principle: physical distance scales as $r(t) = a(t) r_0$ for comoving radius $r_0$. dividing by $r$:
$$\frac{\ddot a}{a} = -\frac{4\pi G}{3}\rho$$

→ this is the **acceleration equation** for matter in Newtonian cosmology.

---

## the energy integral

multiply by $\dot a/a$ and integrate. using $\rho \propto a^{-3}$ for matter (i.e. $\rho a^3 = \rho_0 a_0^3 = $ const):
$$\frac{d}{dt}\left[\frac{1}{2}\dot a^2\right] = -\frac{4\pi G}{3} \rho_0 a_0^3 \cdot \dot a/a^2$$

integrating once:
$$\frac{1}{2}\dot a^2 = \frac{4\pi G \rho_0 a_0^3}{3 a} + \text{const}$$

calling the integration constant $-\tfrac12 k c^2$:
$$\boxed{\,\dot a^2 = \frac{8\pi G \rho_0 a_0^3}{3} \cdot \frac{1}{a} - k c^2\,}$$

or, dividing by $a^2$:
$$\boxed{\,H^2 = \left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{k c^2}{a^2}\,}$$

→ the **Friedmann equation**, in its most familiar form.

---

## interpretation

the integration constant $k$ is interpreted as **spatial curvature** in the GR derivation. classically, it is the total mechanical energy of a shell:
- $k > 0$ ($E < 0$): bound, the universe will recollapse — closed
- $k = 0$ ($E = 0$): just barely bound — flat, expansion forever, $\rho = \rho_{\rm crit}$
- $k < 0$ ($E > 0$): unbound, expansion forever — open

the **critical density**
$$\rho_{\rm crit} = \frac{3 H^2}{8\pi G}$$
is the density that makes a flat universe at any given $H$.

---

## what this derivation misses

the Newtonian argument relies on:
- Newtonian gravity (good for $v \ll c$, weak fields)
- non-relativistic matter ($p = 0$)
- no cosmological constant

it gives the right answer for the matter-only Friedmann equation, but misses:
- pressure contributing as a source (in GR, $\rho \to \rho + 3p/c^2$)
- radiation or relativistic species
- the cosmological constant $\Lambda$ (or any dark energy)

the GR version (see Friedmann equations with Λ) fixes all this and gives the same equation of motion *with* the curvature constant $k$ now reinterpreted as a topological label.

---

## why this argument still matters

it shows that the Hubble expansion is a **purely gravitational consequence** of homogeneity. you do not need GR to derive it; you just need uniform density and Newton's $F = -GMm/r^2$. the difference between flat / open / closed is just whether the kinetic energy exceeds the gravitational binding energy. that's it.

it also gives the **physical intuition** for why the cosmological constant is so weird: classically, there is no analog. you have to put $\Lambda$ in by hand, as either a modification of the Einstein equations or a perfect fluid with negative pressure. this discomfort is the modern cosmological constant problem.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- Friedmann equations with Λ
- [Friedmann models](../../02_Zettel/Theory/Friedmann models.html)
- [Curvature parameter k](../../02_Zettel/Theory/Curvature parameter k.html)
- [Density parameters and flatness](../../02_Zettel/Theory/Density parameters and flatness.html)
- [Baumann_reference](../../02_Zettel/Theory/Baumann_reference.html) — chapter 1.3 has the GR derivation, contrast with this
