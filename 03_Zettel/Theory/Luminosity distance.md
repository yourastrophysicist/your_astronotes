---
layout: "default"
title: "Luminosity distance"
---
the **luminosity distance** $d_L$ relates the **intrinsic luminosity** $L$ of a source to its **observed flux** $F$, via the inverse-square law:
$$F = \frac{L}{4\pi d_L^2}$$

essential for using SN Ia as standard candles in the Hubble diagram.

## the formula

for a flat universe:
$$\boxed{\, d_L(z) = d_C(z)(1 + z) = (1+z)\frac{c}{H_0}\int_0^z \frac{dz'}{\sqrt{\Omega_m(1+z')^3 + \Omega_\Lambda}} \,}$$

(approximating; ignoring $\Omega_r, \Omega_K$ for late-universe cosmology.)

## the two factors of $(1+z)$

compared to Newtonian $d \propto cz/H_0$, $d_L$ has **two extra factors of $(1+z)$**:

1. **photon energy redshift**: each photon's energy is reduced by $1/(1+z)$. so flux $\propto E$ is reduced by this factor.
2. **photon arrival rate dilution**: photons arrive at a rate reduced by $1/(1+z)$ (cosmological time dilation). flux is energy/time, so reduced by another $(1+z)$.

altogether, observed flux is $1/(1+z)^2$ times what naively-expected, and $d_L = d_C(1+z)$ in the flat case (since $L/(4\pi F) \propto 1/F$, giving $d_L^2 \propto (1+z)^2 d_C^2$).

## benchmark values in $\Lambda$CDM

| $z$ | $d_L$ (Mpc) | $\mu = m - M$ |
|---|---|---|
| 0.1 | 480 | 38.4 |
| 0.5 | 2.91 Gpc | 42.3 |
| 1.0 | 6.64 Gpc | 44.1 |
| 2.0 | 15.5 Gpc | 45.9 |
| 3.0 | 25.6 Gpc | 47.0 |
| 5.0 | 47.1 Gpc | 48.3 |
| 10.0 | 104 Gpc | 50.1 |

distance modulus $\mu = 5\log_{10}(d_L/10\,\text{pc}) = m - M$. so a SN Ia at $z = 1$ with $M = -19.3$ has apparent magnitude $m \approx 24.8$.

## the SN Ia Hubble diagram

plot $\mu(z)$ for SN Ia:
- low $z$ ($z \lesssim 0.1$): linear, gives $H_0$.
- moderate $z$ ($0.1 \lesssim z \lesssim 1$): deviation from linear shows $\Omega_m, \Omega_\Lambda$.

at $z \sim 0.5$ to $1$, SN Ia are **fainter** than expected for a matter-only universe. the data prefer $\Omega_m \approx 0.3$, $\Omega_\Lambda \approx 0.7$, the smoking-gun discovery of accelerated expansion (Perlmutter, Riess, Schmidt 1998).

see [Type Ia supernovae as standard candles](Type%20Ia%20supernovae%20as%20standard%20candles.html) and [Supernova Hubble diagram](Supernova%20Hubble%20diagram.html).

## relation to other distances

flat universe:
$$d_L = d_A(1+z)^2 = d_C(1+z)$$

so $d_L \ge d_C \ge d_A$, with equality at $z = 0$.

surface brightness $\sigma = $ flux per solid angle $\propto F/\theta^2 = (L/d_L^2)/(D^2/d_A^2) = (L/D^2)/d_L^2 \cdot d_A^2 = (L/D^2)\cdot 1/(1+z)^4$. the **$(1+z)^{-4}$ surface brightness dimming**, brutal at high $z$.

see [Surface brightness dimming](Surface%20brightness%20dimming.html).

## see also

- 03_Zettel/Theory/Cosmological distances
- [Radial comoving distance](Radial%20comoving%20distance.html)
- [Angular diameter distance](Angular%20diameter%20distance.html)
- [Surface brightness dimming](Surface%20brightness%20dimming.html)
- [Distance modulus](Distance%20modulus.html)
- [Type Ia supernovae as standard candles](Type%20Ia%20supernovae%20as%20standard%20candles.html)
- [Supernova Hubble diagram](Supernova%20Hubble%20diagram.html)
- [K-correction](K-correction.html)
- [Hubble law](Hubble%20law.html)
- [Observational_Cosmology_MOC](../../04_Atlas/Observational_Cosmology_MOC.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (15)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Angular%20diameter%20distance.html" class="backlink-item">Angular diameter distance</a></li>
    <li class="backlink-item-wrap"><a href="Comoving%20vs%20proper%20coordinates.html" class="backlink-item">Comoving vs proper coordinates</a></li>
    <li class="backlink-item-wrap"><a href="Cosmology%20calculator%20-%20how%20to%20use%20H0%20Omega_m%20Omega_Lambda%20to%20get%20dL%20dA%20t_lookback.html" class="backlink-item">Cosmology calculator - how to use H0 Omega_m Omega_Lambda to get dL dA t_lookback</a></li>
    <li class="backlink-item-wrap"><a href="Distance%20ladder%20derivations.html" class="backlink-item">Distance ladder derivations</a></li>
    <li class="backlink-item-wrap"><a href="Distance%20modulus.html" class="backlink-item">Distance modulus</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20number%20counts%20N%28m%29.html" class="backlink-item">Galaxy number counts N(m)</a></li>
    <li class="backlink-item-wrap"><a href="Hubble%20flow%20distances.html" class="backlink-item">Hubble flow distances</a></li>
    <li class="backlink-item-wrap"><a href="K-correction%20in%20optical%20vs%20sub-mm.html" class="backlink-item">K-correction in optical vs sub-mm</a></li>
    <li class="backlink-item-wrap"><a href="K-correction.html" class="backlink-item">K-correction</a></li>
    <li class="backlink-item-wrap"><a href="Radial%20comoving%20distance.html" class="backlink-item">Radial comoving distance</a></li>
    <li class="backlink-item-wrap"><a href="Redshift%20distribution%20of%20flux-limited%20samples.html" class="backlink-item">Redshift distribution of flux-limited samples</a></li>
    <li class="backlink-item-wrap"><a href="Specific%20intensity%20flux%20luminosity.html" class="backlink-item">Specific intensity flux luminosity</a></li>
    <li class="backlink-item-wrap"><a href="Supernova%20Hubble%20diagram.html" class="backlink-item">Supernova Hubble diagram</a></li>
    <li class="backlink-item-wrap"><a href="Surface%20brightness%20dimming.html" class="backlink-item">Surface brightness dimming</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
  </ul>
</div>

