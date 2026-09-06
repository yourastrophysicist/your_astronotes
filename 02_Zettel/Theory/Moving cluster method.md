---
layout: default
title: "Moving cluster method"
---

a clever geometric distance method for nearby open clusters whose stars all share a common space velocity. historically the highest-precision ground-truth for the Hyades cluster, before Hipparcos and Gaia.

## the geometry

if all stars in a cluster move with the same 3D velocity $\vec V$, then their proper motions on the sky converge to a single **convergent point** in the direction of $\vec V$ (or diverge from the antipode if moving away). this is just the projection of parallel velocities onto the sphere.

at the convergent point, the angle $\theta$ between the cluster's centre and the convergent point can be measured. then:
- **proper motion** $\mu$ (in arcsec/yr): the angular speed of stars on the sky.
- **radial velocity** $v_r$ (from spectroscopic Doppler, in km/s): the line-of-sight component of $\vec V$.
- $|\vec V| \cos\theta = v_r$ and $|\vec V| \sin\theta = v_t = 4.74\,\mu\, d({\rm pc})$ km/s ($4.74$ is the conversion factor for $\mu$ in arcsec/yr and $d$ in pc).

solve for distance:
$$\boxed{\, d = \frac{v_r \tan\theta}{4.74\,\mu}\,\text{pc}\,}$$

with $v_r$, $\mu$, and $\theta$ all observed.

## why it works

no parallax measurement needed. the geometry is established entirely from spectral Doppler shifts and proper-motion measurements (no annual parallax required). this made it possible to get cluster distances even before parallax precision was good enough.

## the Hyades case

historical: the moving-cluster method gave the Hyades distance as $\sim 46$ pc with $\sim 5\%$ precision, decades before parallax measurements approached this. the Hyades distance pinned the entire cluster ladder (every distance to other open clusters via MS fitting was tied to the Hyades).

modern Gaia parallaxes confirm the moving-cluster distance to better than $1\%$, validating the technique.

## limitations

- requires the cluster to be **converging** (nearby clusters with measurable proper motion).
- requires individual stars to have well-measured proper motions and radial velocities (member identification is critical).
- breaks down for distant clusters where proper motions are too small.
- **internal velocity dispersion** in the cluster broadens the convergent point, limiting precision.

## the modern parallel: parallax-fitting

with Gaia, distance to a cluster is now obtained by **inverting parallaxes** of cluster members and averaging (with proper Bayesian treatment of the asymmetry in $1/p$ for noisy $p$). still uses cluster membership criteria from proper motions + radial velocities. effectively the same idea: many stars constraining the same distance jointly beat the single-star precision.

## see also

- [Distance ladder derivations](../../02_Zettel/Theory/Distance ladder derivations.md)
- [Annual stellar parallax](../../02_Zettel/Theory/Annual stellar parallax.md)
- [Spectroscopic parallax and main-sequence fitting](../../02_Zettel/Theory/Spectroscopic parallax and main-sequence fitting.md)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.md)
- [Distance modulus](../../02_Zettel/Theory/Distance modulus.md)
