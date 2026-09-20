---
layout: "default"
title: "Cluster ages from CMD turnoff"
---
star clusters (both **open clusters** like the Pleiades and **globular clusters** like M13) are ideal natural astrophysical laboratories because all member stars share three crucial properties:
1. **same distance** $d$ from Earth (distance modulus $\mu = m - M$ is identical for all cluster members).
2. **same age** $t$ (all stars formed essentially simultaneously in a single starburst).
3. **same initial chemical composition** (same metallicity $[\text{Fe}/\text{H}]$).

consequence: plotting a cluster's color-magnitude diagram (CMD) provides a direct snapshot of stellar evolution for stars of different masses at a single fixed age: an **isochrone**.

![stellar-77.png](../../assets/images/stellar-77.png)

---

## the Main Sequence Turnoff (MSTO)

as a cluster ages, stars peel off the main sequence from top to bottom, because more massive stars have much shorter lifetimes ($t_{\text{MS}} \propto M^{-2.5}$).

the highest, hottest, most luminous point still remaining on the main sequence is the **Main Sequence Turnoff (MSTO)**.
- stars with $M > M_{\text{TO}}$ have already exhausted their core hydrogen and evolved into red giants, supergiants, or compact remnants.
- stars with $M < M_{\text{TO}}$ are still burning hydrogen on the main sequence.

![stellar-78.png](../../assets/images/stellar-78.png)

### determining cluster age:
measuring the luminosity $L_{\text{TO}}$ or mass $M_{\text{TO}}$ of stars at the turnoff gives the cluster age directly:
$$\boxed{\, t_{\text{cluster}} \approx 10^{10} \left(\frac{M_{\text{TO}}}{M_\odot}\right)^{-2.5} \text{ yr} \approx 10^{10} \left(\frac{L_{\text{TO}}}{L_\odot}\right)^{-2.5/3.5} \text{ yr} \,}$$

### benchmark ages:
- **young open clusters (e.g. Pleiades, h & $\chi$ Persei)**: turnoff at spectral type B or A $\implies$ ages $t \sim 10^7 - 10^8$ years.
- **intermediate open clusters (e.g. Hyades, M67)**: turnoff near F stars $\implies$ ages $t \sim 6 \times 10^8 - 4 \times 10^9$ years.
- **ancient Galactic globular clusters (e.g. M92, 47 Tuc)**: turnoff near G dwarfs ($M_{\text{TO}} \approx 0.8 M_\odot$) $\implies$ ages **$t \approx 12 - 13.5$ billion years**! 

globular clusters represent the oldest stellar populations in the Milky Way, setting a strict lower limit on the age of the Universe ($t_{\text{Univ}} > 13$ Gyr), in complete concordance with Planck CMB cosmology ($t_0 = 13.8$ Gyr).

---

## see also

- [[Fundamentals_Astrophysics_Cosmology_MOC]]
- [[HR diagram]]
- [[Stellar scaling relations]]
- [[Solar evolution and final stages]]
- [[Stellar populations I II III]]

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_stars-069.png](../../assets/images/obs_stars-069.png)
*Main Sequence Turn-Off (MSTO) point: stars at the turn-off are exhausting core hydrogen.*

![obs_stars-070.png](../../assets/images/obs_stars-070.png)
*Turn-off mass M_TO determines cluster age: age proportional to M_TO^(-2.5).*

![obs_stars-071.png](../../assets/images/obs_stars-071.png)
*Isochrone fitting: theoretical curves of constant age overlaid on observational CMD.*

![obs_stars-072.png](../../assets/images/obs_stars-072.png)
*Vertical method: Delta V_TO^HB (magnitude difference between turnoff and horizontal branch).*

![obs_stars-073.png](../../assets/images/obs_stars-073.png)
*Horizontal method: delta(B - V) (color difference between turnoff and base of red giant branch).*

![obs_stars-074.png](../../assets/images/obs_stars-074.png)
*Age of the oldest globular clusters (~12.8 +/- 0.5 Gyr) providing cosmic lower age bound.*

![obs_stars-075.png](../../assets/images/obs_stars-075.png)
*Blue stragglers: stars above the turn-off formed by binary mass transfer or stellar collisions.*

![obs_stars-076.png](../../assets/images/obs_stars-076.png)
*Multiple stellar populations in globular clusters (light element abundance anomalies).*



## Linked References

- [[Age estimation in unresolved populations]]
- [[Age-metallicity degeneracy]]
- [[Color-magnitude diagrams of clusters]]
- [[HR diagram]]
- [[Main sequence, giants, supergiants, white dwarfs]]
- [[Metallicity and chemical evolution]]
- [[Single stellar population SSP]]
- [[Solar evolution and final stages]]
- [[Spectroscopic parallax and main-sequence fitting]]
- [[Stellar populations I II III]]
- [[Fundamentals_Astrophysics_Cosmology_MOC]]
- [[Observational_Astrophysics_MOC]]


