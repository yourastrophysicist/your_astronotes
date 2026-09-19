---
layout: "default"
title: "Cosmological distances"
---
in the FRW universe there is **no single notion of distance**. four different distances all coincide at low $z$ and diverge at high $z$. which one I use depends on what I am measuring.

---

## comoving distance

the radial distance between two comoving points, measured at the present epoch:
$$d_C(z) = \int_0^z \frac{c\, dz'}{H(z')}$$

(flat universe; for $k \neq 0$ apply $\sinh$ or $\sin$.) integrating along a null geodesic, $ds^2 = 0$, gives:
$$dt = -\frac{a(t)}{c}\, dr$$

and using $1 + z = a_0/a(t)$:
$$dt = -\frac{dz}{H_0(1+z)\,[\Omega_m(1+z)^3 + \Omega_\Lambda + \Omega_K(1+z)^2]^{1/2}}$$

so the comoving radial distance grows monotonically with $z$ but slowly at high $z$ (because $H(z)$ is large early).

---

## angular-diameter distance

if an object has a **physical transverse size** $D$ subtending a small angle $\delta\theta$ on the sky, then:
$$d_A \equiv \frac{D}{\delta\theta}$$

for a comoving observer in FRW:
$$d_A(z) = \frac{d_C(z)}{1 + z}$$

key feature: $d_A(z)$ is **non-monotonic**! it increases at low $z$, then peaks around $z \sim 1.5$, then *decreases* at higher $z$. so a galaxy at $z = 5$ subtends a larger angle on the sky than one at $z = 1.5$ of the same physical size. that's because the universe was much smaller when the photons we see now were emitted.

this is also why the moon and the sun look the same angular size today, but in the early universe everything was effectively magnified.

---

## luminosity distance

if an object has **intrinsic luminosity** $L$ and we measure flux $F$:
$$F = \frac{L}{4\pi d_L^2}$$

defines $d_L$. for FRW:
$$d_L(z) = d_C(z)(1+z) = d_A(z)(1+z)^2$$

the two factors of $(1+z)$ in $d_L = d_A(1+z)^2$ have specific physical origins:
1. one factor of $(1+z)$ from photon energy redshift: each photon arrives with energy $E_e/(1+z)$
2. one factor of $(1+z)$ from time dilation: photons arrive at a rate slower by $(1+z)$

so the total **flux dilution** has *four* factors of $(1+z)$ (since flux $\propto 1/d_L^2$), which manifests as the famous **surface-brightness dimming**:
$$\sigma \propto \frac{d_A^2}{d_L^2} \propto (1+z)^{-4}$$

a brutal penalty on high-$z$ imaging. (see [Surface brightness dimming](Surface%20brightness%20dimming.html) in the Observational Cosmology MOC.)

---

## the four-way relation

$$\boxed{\,d_L = (1+z)\, d_C = (1+z)^2\, d_A\,}$$

at low $z$ all four (proper, comoving, angular-diameter, luminosity) coincide:
$$d_C \approx d_A \approx d_L \approx \frac{cz}{H_0} \quad \text{for } z \ll 1$$

at high $z$ they diverge. for a SN Ia at $z = 1$ in ΛCDM: $d_C \approx 3.4$ Gpc, $d_A \approx 1.7$ Gpc, $d_L \approx 6.8$ Gpc. very different numbers.

---

## summary table

| distance | use case | formula (flat) |
|---|---|---|
| comoving $d_C$ | structure formation, large-scale surveys | $\int_0^z c\,dz'/H(z')$ |
| angular-diameter $d_A$ | resolving an object's physical size from its angular size | $d_C/(1+z)$ |
| luminosity $d_L$ | converting observed flux to intrinsic luminosity | $d_C(1+z) = d_A(1+z)^2$ |
| proper $d_p$ | "how far is it now" | $d_C$ at $t = t_0$ |

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Hubble law exact form](Hubble%20law%20exact%20form.html)
- 03_Zettel/Theory/Robertson-Walker metric
- Friedmann equations with Λ
- [Observational_Cosmology_MOC](../../04_Atlas/Observational_Cosmology_MOC.html) — block 1 has the same content with extra observational detail

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Cosmology%20calculator%20-%20how%20to%20use%20H0%20Omega_m%20Omega_Lambda%20to%20get%20dL%20dA%20t_lookback.html" class="backlink-item">Cosmology calculator - how to use H0 Omega_m Omega_Lambda to get dL dA t_lookback</a></li>
    <li class="backlink-item-wrap"><a href="Hubble%27s%20law%20and%20cosmological%20redshift.html" class="backlink-item">Hubble's law and cosmological redshift</a></li>
    <li class="backlink-item-wrap"><a href="Time-redshift%20relation.html" class="backlink-item">Time-redshift relation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
  </ul>
</div>

