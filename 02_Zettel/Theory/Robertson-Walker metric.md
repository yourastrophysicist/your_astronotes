---
layout: default
title: "Robertson-Walker metric"
---

the cosmological principle (homogeneity + isotropy) imposes a unique form on the spacetime metric. that form is the **Robertson-Walker metric**, sometimes called Friedmann-Robertson-Walker (FRW) when paired with the dynamics.

---

## the metric

in spherical comoving coordinates $(t, r, \theta, \phi)$:

$$\boxed{\,ds^2 = dt^2 - a^2(t)\left[\frac{dr^2}{1 - k r^2} + r^2(d\theta^2 + \sin^2\theta\, d\phi^2)\right]\,}$$

(with $c = 1$. signs depend on convention; this is mostly-minus, $(+ - - -)$, as in Baumann.)

three structural elements:
- $a(t)$: the **scale factor**, a single function of cosmic time encoding the entire dynamics
- $k$: the **spatial curvature parameter**, with $k = 0$ flat, $k = +1$ closed (spherical), $k = -1$ open (hyperbolic). dimensionful normalization can absorb $|k|$ into the radial coordinate.
- $d\Omega^2 = d\theta^2 + \sin^2\theta\,d\phi^2$: the standard 2-sphere line element

---

## derivation sketch

homogeneity and isotropy mean the spatial slices $\Sigma_t$ at fixed cosmic time are **maximally symmetric 3-spaces of constant curvature**. there are only three such 3-spaces:
- **flat** ($k = 0$): $E^3$, $d\ell^2 = dx^2 + dy^2 + dz^2$
- **positively curved** ($k = +1$): $S^3$, the 3-sphere embedded in $E^4$
- **negatively curved** ($k = -1$): $H^3$, the hyperboloid embedded in Lorentzian $\mathbb R^{1,3}$

after rescaling and choosing spherical coordinates, all three line elements unify to
$$d\ell^2 = a^2 \left[\frac{dr^2}{1 - kr^2} + r^2 d\Omega^2\right]$$

then the full spacetime metric is just $ds^2 = dt^2 - d\ell^2$ with $a$ allowed to depend on $t$:
$$ds^2 = dt^2 - a^2(t) \gamma_{ij}\, dx^i dx^j$$

(Baumann §1.1.)

![Pasted image 20260429100000](../../assets/images/Pasted image 20260429100000.png)

(see Baumann figure 1.2 for the foliation into curved hypersurfaces.)

---

## comoving vs physical coordinates

a comoving coordinate $r$ stays fixed for an observer following the Hubble flow. the **physical distance** to that observer is
$$d_{\rm phys}(t) = a(t) \cdot r$$

so as the universe expands, physical distances grow even though comoving distances stay fixed. this is the famous "raisin bread" picture: galaxies are like raisins; the dough is the comoving grid; the dough expanding is $a(t)$ growing.

physical velocity:
$$v^i_{\rm phys} = \frac{d x^i_{\rm phys}}{dt} = a(t)\dot x^i + \dot a x^i = v^i_{\rm pec} + H x^i_{\rm phys}$$

with the **Hubble parameter**
$$\boxed{\,H \equiv \frac{\dot a}{a}\,}$$

so total physical velocity = peculiar velocity (motion through the cosmic substrate) + Hubble flow.

---

## conformal time

it is useful to redefine time so that the metric becomes conformally flat:
$$d\tau = \frac{dt}{a(t)}$$

then the FRW line element becomes
$$ds^2 = a^2(\tau)\left[d\tau^2 - (d\chi^2 + S_k^2(\chi)\,d\Omega^2)\right]$$

where $\chi$ is a redefined radial coordinate and $S_k(\chi) = \sin\chi$ ($k=+1$), $\chi$ ($k=0$), $\sinh\chi$ ($k=-1$).

this is the **conformal metric**. since light travels along null geodesics ($ds^2 = 0$), and the prefactor $a^2(\tau)$ is conformal, light propagation in FRW is the same as in flat Minkowski if I first transform to conformal time. along a radial null geodesic:
$$\Delta \tau = \Delta \chi$$

useful for horizon arguments (see [Standard model problems](../../02_Zettel/Theory/Standard model problems.html) and [Inflation overview](../../02_Zettel/Theory/Inflation overview.html)).

---

## the scale factor convention

a convenient convention: set the scale factor to unity *today*:
$$a_0 \equiv a(t_0) \equiv 1$$

then $a(t)$ is dimensionless and $r$ inherits dimensions of length. and the relation to redshift is clean:
$$1 + z = \frac{a_0}{a(t_e)} = \frac{1}{a(t_e)}$$

so the universe was half its present size at $z = 1$, a third its present size at $z = 2$, etc.

---

## which form to use when

three equivalent ways to write the FRW metric, useful in different contexts:

| form | best for |
|---|---|
| $ds^2 = dt^2 - a^2(t)[dr^2/(1-kr^2) + r^2 d\Omega^2]$ | physical interpretation, comoving distance |
| $ds^2 = dt^2 - a^2(t)[d\chi^2 + S_k^2(\chi) d\Omega^2]$ | distance integrals, area at fixed $\chi$ |
| $ds^2 = a^2(\tau)[d\tau^2 - d\chi^2 - S_k^2(\chi)d\Omega^2]$ | causal structure, light propagation |

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Cosmological principle](../../02_Zettel/Theory/Cosmological principle.html)
- [Curvature parameter k](../../02_Zettel/Theory/Curvature parameter k.html)
- [Hubble constant and deceleration parameter](../../02_Zettel/Theory/Hubble constant and deceleration parameter.html)
- [Newtonian Friedmann derivation](../../02_Zettel/Theory/Newtonian Friedmann derivation.html)
- Friedmann equations with Λ
- [Baumann_reference](../../02_Zettel/Theory/Baumann_reference.html) — chapter 1.1 has the full derivation with all the box-by-box detail
