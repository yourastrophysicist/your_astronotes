---
layout: default
title: "Robertson-Walker metric derivation"
---
## what I'm deriving

the line element of a spacetime whose spatial sections are homogeneous and isotropic at every instant of cosmic time.

$$ds^2 = -c^2\, dt^2 + a^2(t)\left[\frac{dr^2}{1 - k r^2} + r^2\left(d\theta^2 + \sin^2\theta\, d\phi^2\right)\right]$$

no field equation is used anywhere in this file. the result is pure geometry, and the function $a(t)$ stays undetermined until [[Friedmann equation Newtonian shell]] or [[Friedmann equation General Relativity FLRW]].

## conventions and symbols

| symbol | meaning | units |
|---|---|---|
| $ds^2$ | spacetime interval, signature $(-,+,+,+)$ | length$^2$ |
| $t$ | cosmic time, the proper time of comoving observers | time |
| $a(t)$ | scale factor, normalised to $a(t_0) = 1$ today | dimensionless |
| $r$ | comoving radial coordinate (areal radius today) | length |
| $\chi$ | comoving radial distance along a geodesic of the 3-space | length |
| $k$ | spatial curvature constant, $k = \pm 1/R_0^2$ or $0$ | length$^{-2}$ |
| $R_0$ | curvature radius of the spatial section today | length |
| $d\Omega^2$ | $d\theta^2 + \sin^2\theta\, d\phi^2$ | dimensionless |

a warning about two conventions that textbooks mix. in the first one $a$ is dimensionless with $a_0 = 1$ and $k$ carries units of length$^{-2}$, which is what I use in these derivations. in the second one $k \in \{-1, 0, +1\}$ is a pure sign and $a$ carries units of length, with $a_0 = R_0$. the two are related by the rescaling $r \to r/R_0$, $a \to a R_0$. I cannot have both $a_0 = 1$ and $k = \pm 1$ unless $R_0$ happens to be the unit of length.

## assumptions

1. **Weyl postulate.** the world lines of the cosmic fluid (the "fundamental observers") form a bundle of non-intersecting geodesics, orthogonal to a family of spacelike hypersurfaces. this is what allows a global time coordinate.
2. **cosmological principle.** each of those hypersurfaces is homogeneous (no preferred point) and isotropic about every point (no preferred direction). observationally this holds above roughly $100$ Mpc.

## derivation

### step 1 - the time part of the metric

label each hypersurface by the proper time $t$ that a fundamental observer reads between it and a reference hypersurface. in coordinates $(t, x^i)$ where $x^i$ are constant along each fluid world line, the general metric is

$$ds^2 = g_{00}\, dt^2 + 2 g_{0i}\, dt\, dx^i + g_{ij}\, dx^i dx^j$$

- for an observer at rest in these coordinates $dx^i = 0$ and $ds^2 = -c^2 d\tau^2$. since $t$ is that observer's proper time, $g_{00} = -c^2$.
- $g_{0i}$ is a 3-vector field on the hypersurface. a non-zero vector picks a direction, which isotropy forbids. hence $g_{0i} = 0$. equivalently, the world lines are orthogonal to the hypersurfaces.

so far

$$ds^2 = -c^2 dt^2 + g_{ij}(t, \vec x)\, dx^i dx^j$$

### step 2 - the time dependence factorises

take three fundamental observers forming a small triangle. homogeneity and isotropy must hold at every $t$, so the triangle at a later time has to be similar to the one at an earlier time (any change of shape would single out a direction, any position-dependent magnification would single out a point). all proper distances therefore scale with one common function of time only.

$$g_{ij}(t, \vec x) = a^2(t)\, \gamma_{ij}(\vec x)$$

$\gamma_{ij}$ is the time-independent metric of a homogeneous and isotropic 3-space.

### step 3 - homogeneous and isotropic 3-spaces have constant curvature

a 3-space that is homogeneous and isotropic is maximally symmetric (it has $6$ Killing vectors, $3$ translations and $3$ rotations). its Riemann tensor can only be built from $\gamma_{ij}$ itself.

$${}^{(3)}R_{ijkl} = k\left(\gamma_{ik}\gamma_{jl} - \gamma_{il}\gamma_{jk}\right), \qquad {}^{(3)}R = 6k$$

with $k$ the same number at every point. there are three cases, $k > 0$, $k = 0$ and $k < 0$. I now build each one explicitly.

### step 4 - the positively curved case by embedding

a 3-sphere of radius $R_0$ is the surface

$$x^2 + y^2 + z^2 + w^2 = R_0^2$$

in four-dimensional Euclidean space, with line element $dl^2 = dx^2 + dy^2 + dz^2 + dw^2$. the constraint lets me eliminate $w$. differentiating the constraint,

$$x\,dx + y\,dy + z\,dz + w\, dw = 0 \quad\Rightarrow\quad dw = -\frac{\vec x \cdot d\vec x}{w}, \qquad dw^2 = \frac{(\vec x\cdot d\vec x)^2}{R_0^2 - |\vec x|^2}$$

so on the surface

$$dl^2 = d\vec x^2 + \frac{(\vec x\cdot d\vec x)^2}{R_0^2 - |\vec x|^2}$$

switch to spherical coordinates $(r, \theta, \phi)$ for $\vec x$, where $|\vec x| = r$, $d\vec x^2 = dr^2 + r^2 d\Omega^2$ and $\vec x \cdot d\vec x = r\, dr$.

$$dl^2 = dr^2 + r^2 d\Omega^2 + \frac{r^2 dr^2}{R_0^2 - r^2} = \frac{R_0^2}{R_0^2 - r^2}\, dr^2 + r^2 d\Omega^2 = \frac{dr^2}{1 - r^2/R_0^2} + r^2 d\Omega^2$$

### step 5 - the negatively curved and flat cases

for negative curvature the embedding is a hyperboloid $x^2 + y^2 + z^2 - w^2 = -R_0^2$ in a space with $dl^2 = d\vec x^2 - dw^2$. the same two lines of algebra give

$$dl^2 = \frac{dr^2}{1 + r^2/R_0^2} + r^2 d\Omega^2$$

the flat case is the limit $R_0 \to \infty$ of either one, $dl^2 = dr^2 + r^2 d\Omega^2$.

all three are captured by one formula with

$$k = +\frac{1}{R_0^2},\quad 0,\quad -\frac{1}{R_0^2}$$

$$\gamma_{ij}\, dx^i dx^j = \frac{dr^2}{1 - k r^2} + r^2 d\Omega^2$$

### step 6 - assemble

$$\boxed{\, ds^2 = -c^2\, dt^2 + a^2(t)\left[\frac{dr^2}{1 - k r^2} + r^2\, d\Omega^2\right] \,}$$

### step 7 - the $\chi$ form

define the comoving geodesic distance from the origin by $d\chi = dr/\sqrt{1 - k r^2}$ with $\chi(0) = 0$. integrating,

$$r = S_k(\chi) \equiv \begin{cases} \dfrac{1}{\sqrt{k}}\sin\left(\sqrt{k}\,\chi\right), & k > 0 \\[2mm] \chi, & k = 0 \\[2mm] \dfrac{1}{\sqrt{|k|}}\sinh\left(\sqrt{|k|}\,\chi\right), & k < 0 \end{cases}$$

and the metric becomes

$$ds^2 = -c^2 dt^2 + a^2(t)\left[d\chi^2 + S_k^2(\chi)\, d\Omega^2\right]$$

the two radial coordinates answer different questions. $a\,\chi$ is the proper distance to the origin at time $t$. $a\, r = a\, S_k(\chi)$ is the areal radius, meaning a sphere at that coordinate has proper area $4\pi a^2 r^2$. they coincide only when $k = 0$.

## checks

- **dimensions.** $k r^2$ is dimensionless, as it must be inside $1 - k r^2$.
- **flat limit.** $k \to 0$ gives $S_k(\chi) \to \chi$ for both signs, by $\sin x \approx x$ and $\sinh x \approx x$.
- **closed case.** for $k > 0$ the coordinate $r$ only covers $0 \le r < R_0$ (half the sphere) and the metric is singular at $r = R_0$. the singularity is a coordinate artefact, since $\chi$ runs smoothly over $0 \le \chi \le \pi R_0$. the total volume is finite, $V = 2\pi^2 a^3 R_0^3$.
- **comoving observers are in free fall.** the geodesic equation for $dx^i = 0$ needs $\Gamma^i_{00} = 0$, which holds because $g_{00}$ is constant and $g_{0i} = 0$. so "at rest in comoving coordinates" is a consistent state of motion.

## what each piece means

- $a(t)$ multiplies every spatial distance between comoving points. $H(t) \equiv \dot a/a$ is the Hubble parameter.
- $r$, $\chi$, $\theta$, $\phi$ are comoving labels and stay fixed for a galaxy following the Hubble flow.
- $k$ fixes the geometry of space. the physical curvature at time $t$ is $k/a^2(t)$, so curvature is diluted by expansion.
- observationally $|\Omega_{k,0}| = |k| c^2/H_0^2 \lesssim 0.002$, which means $R_0 \gtrsim 20\, c/H_0$.

## questions I should be ready for

- *why is there no $g_{0i}$ term?* a non-zero $g_{0i}$ is a vector on the spatial slice and would break isotropy.
- *why can $g_{00}$ be set to $-c^2$?* homogeneity makes $g_{00}$ a function of $t$ alone, and a function of $t$ alone is removed by redefining the time coordinate, $dt' = \sqrt{-g_{00}}\, dt/c$.
- *where did Einstein's equations enter?* nowhere. the metric follows from symmetry. the field equations only fix $a(t)$ and relate $k$ to the energy content.
- *is the universe finite if $k > 0$?* yes for the simply connected case. $k \le 0$ is infinite unless the topology is non-trivial.
- *what is the difference between homogeneity and isotropy?* isotropy about every point implies homogeneity. homogeneity alone does not imply isotropy (Bianchi models are homogeneous and anisotropic).

## board summary (60 seconds)

cosmological principle makes the constant-$t$ slices maximally symmetric. proper time of comoving observers gives $g_{00} = -c^2$, isotropy kills $g_{0i}$, similar triangles give $g_{ij} = a^2(t)\gamma_{ij}$. embed the 3-sphere $\vec x^2 + w^2 = R_0^2$, eliminate $dw$, get $dl^2 = dr^2/(1 - r^2/R_0^2) + r^2 d\Omega^2$. same for the hyperboloid with the opposite sign. result
$ds^2 = -c^2 dt^2 + a^2(t)[dr^2/(1 - kr^2) + r^2 d\Omega^2]$.

## see also

- [[Cosmological redshift derivation]] uses this metric on a null geodesic.
- [[Cosmological distances derivation]] uses $S_k(\chi)$ in $d_A$ and $d_L$.
- [[Friedmann equation Newtonian shell]] and [[Friedmann equation General Relativity FLRW]] give the dynamics of $a(t)$.
