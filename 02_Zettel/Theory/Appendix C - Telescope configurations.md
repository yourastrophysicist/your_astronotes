---
layout: default
title: "Appendix C - Telescope configurations"
---

## Newton telescope

The **Newton** telescope uses:
	a **parabolic primary mirror** to collect and focus light
	a **flat secondary mirror** tilted at **45°** to deflect the beam to the side

The focal plane is located at the side of the telescope tube
	accessible without blocking the primary mirror significantly

Properties:
	simple construction
	**spherical aberration**: $B = 0$ (paraboloid primary)
	**coma**: present for off-axis sources
	short focal length possible
	used mainly for amateur telescopes and some professional wide-field instruments

![](https://upload.wikimedia.org/wikipedia/commons/f/f6/Diagram_Reflector_Newton.svg)
<font color="#bfbfbf">Optical path of a Newtonian telescope. Parallel rays from an on-axis source reflect off the parabolic primary and are redirected by the flat secondary mirror at 45° to a focus at the side of the tube.</font>

---

## Cassegrain telescope

The **Cassegrain** configuration uses:
	a **parabolic primary mirror** (concave) with a central hole
	a **hyperbolic secondary mirror** (convex) that reflects light back through the hole

The effective focal length $f$ is much larger than the primary focal length $f_1$:
$$f > f_1$$

This is because the convex hyperbolic secondary acts as a **focal length multiplier**
	the Cassegrain focus is behind the primary mirror
		making the instrument compact despite a long effective focal length

Properties:
	**spherical aberration**: $B = 0$
	**coma**: present (inherited from parabolic primary)
	long effective focal length in a compact tube
	widely used for professional optical telescopes

![](https://upload.wikimedia.org/wikipedia/commons/3/30/Diagram_Reflector_Cassegrain.svg)
<font color="#bfbfbf">Optical path of a Cassegrain telescope. The concave parabolic primary mirror focuses light toward a point, but before reaching focus the beam is intercepted by the convex hyperbolic secondary, which reflects it back through a central hole in the primary to the Cassegrain focus.</font>

---

## Ritchey-Chrétien telescope

The **Ritchey-Chrétien** (RC) telescope uses:
	a **hyperbolic primary mirror** (concave)
	a **hyperbolic secondary mirror** (convex)

Both mirrors are hyperboloids, chosen so that:
	**spherical aberration** is eliminated: $B = 0$
	**coma** is also eliminated: $F = 0$

This makes the RC the preferred design for wide-field, high-resolution imaging

Examples:
	**Hubble Space Telescope** — RC design
	**VLT** (Very Large Telescope) — RC design
	Most modern large ground-based telescopes

![](https://upload.wikimedia.org/wikipedia/commons/1/10/Diagram_Reflector_RitcheyChretien.svg)
<font color="#bfbfbf">Optical path of a Ritchey-Chrétien telescope. Both the primary and secondary mirrors are hyperboloids, chosen to simultaneously eliminate spherical aberration ($B = 0$) and coma ($F = 0$), giving a wide, sharp field of view.</font>

---

## Summary table

| Configuration | Primary | Secondary | $B$ | Coma |
|---|---|---|---|---|
| Newton | Paraboloid | Flat (45°) | 0 | Yes |
| Cassegrain | Paraboloid | Hyperboloid (convex) | 0 | Yes |
| Ritchey-Chrétien | Hyperboloid | Hyperboloid (convex) | 0 | No |
