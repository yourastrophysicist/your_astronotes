---
layout: "default"
title: "De Vaucouleurs and exponential profiles"
---
{% raw %}
two **canonical surface-brightness profiles** in galaxy astronomy:
- **de Vaucouleurs $r^{1/4}$ law**: ellipticals + bulges.
- **exponential disk profile**: spiral disks.

both are special cases of the more general [Sersic profile](./Sersic%20profile.html).

## de Vaucouleurs $r^{1/4}$ profile

historical: Gérard de Vaucouleurs 1948 fit elliptical galaxies to:
$$\Sigma(r) = \Sigma_e\,\exp[-7.67((r/r_e)^{1/4} - 1)]$$

with $r_e$ the effective (half-light) radius.

equivalent Sérsic profile with $n = 4$, $b_4 = 7.67$.

key features:
- **smooth roll-over** at small $r$ (no central cusp at the resolution element).
- **very extended outer wings** falling slowly (fits the "halo" of bright ellipticals).
- **half the light within $r_e$** by definition.
- **most of the flux is in the bright core** (high concentration).

ellipticals + bulges of spirals fit this profile well over many decades in radius.

## exponential disk profile

galactic disks (Sa, Sb, Sc spirals) have:
$$\Sigma(r) = \Sigma_0\,e^{-r/h}$$

with $h$ the **scale length** (= $r_e/1.678$). encloses half the light at $1.678\,h$.

key features:
- **rapid decline** at large $r$.
- **flat central region** before exponential drop.
- **no extended halo** in the outermost parts.

equivalent Sérsic with $n = 1$.

## origin: exponential disks

physically motivated by **angular-momentum-conserving** dissipative collapse: gas collapses into a rotating disk + viscous + turbulent processes redistribute angular momentum, giving an exponential profile (Mestel 1963, Mo, Mao + White 1998). matches modern simulations.

## origin: $r^{1/4}$ ellipticals

physically motivated by **violent relaxation** during mergers (Lynden-Bell 1967). a system of stars subjected to rapid time-varying gravitational potentials reaches a equilibrium that's well-fit by $r^{1/4}$. confirmed in N-body simulations of galaxy mergers (Toomre 1977 +).

## the bulge-disk decomposition

most galaxies have **both** a bulge (de Vaucouleurs-like) + a disk (exponential). photometric fits use two-component models:
$$\Sigma(r) = \Sigma_b\,e^{-7.67((r/r_b)^{1/4} - 1)} + \Sigma_0\,e^{-r/h}$$

the **bulge-to-total ratio** $B/T = L_{\rm bulge}/L_{\rm tot}$ classifies along the Hubble sequence:
- $B/T \to 1$: pure bulge = elliptical.
- $B/T \sim 0.5$: Sa (large bulge, small disk).
- $B/T \sim 0.2$: Sb.
- $B/T \to 0$: pure disk = Sd, irregular.

modern: GALFIT, ProFit, photutils provide bulge-disk decompositions.

## the central question

whether ellipticals are *truly* $r^{1/4}$ or just **fitted approximately**: real ellipticals have:
- **cusps** in the very centre (resolved by HST).
- **shells + tidal features** at large radii (debris from past mergers).
- **deviations** at the few percent level from pure $r^{1/4}$.

modern Sérsic fits with $n$ as a free parameter give better fits, with $n$ varying from $\sim 3$ (faint ellipticals) to $\sim 10$ (cD galaxies).

## see also

- [Sersic profile](./Sersic%20profile.html)
- [Hubble morphological sequence](./Hubble%20morphological%20sequence.html)
- [Galaxy size-luminosity relation](./Galaxy%20size-luminosity%20relation.html)
- [CAS galaxy classification](./CAS%20galaxy%20classification.html)
- [Petrosian radius](./Petrosian%20radius.html)
- [Galaxy mergers and SF](./Galaxy%20mergers%20and%20SF.html)
- [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html)

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![gal_ell-07.png](../../assets/images/gal_ell-07.png)
*Gerard de Vaucouleurs (1948) R^(1/4) profile for giant elliptical galaxies: n = 4, b_4 = 7.67.*

![gal_disk-01.png](../../assets/images/gal_disk-01.png)
*Lecture 3: Disks and Bars (Prof. Alessandro Pizzella).*

![gal_disk-02.png](../../assets/images/gal_disk-02.png)
*Exponential disk profile: I(R) = I_0 * exp(-R / h_R), scale length h_R, n = 1, b_1 = 1.678.*

![gal_disk-03.png](../../assets/images/gal_disk-03.png)
*Relation between scale length and half-light radius for exponential disks: R_e = 1.678 * h_R.*

![gal_disk-04.png](../../assets/images/gal_disk-04.png)
*Two-component bulge-disk photometric decomposition: I(R) = I_bulge(R) + I_disk(R).*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_ell-21.png](../../assets/images/gal_ell-21.png)

![gal_ell-22.png](../../assets/images/gal_ell-22.png)

![gal_ell-23.png](../../assets/images/gal_ell-23.png)

![gal_ell-24.png](../../assets/images/gal_ell-24.png)

![gal_ell-25.png](../../assets/images/gal_ell-25.png)

![gal_ell-26.png](../../assets/images/gal_ell-26.png)

![gal_ell-27.png](../../assets/images/gal_ell-27.png)

![gal_ell-28.png](../../assets/images/gal_ell-28.png)

![gal_ell-29.png](../../assets/images/gal_ell-29.png)

![gal_ell-30.png](../../assets/images/gal_ell-30.png)

![gal_ell-31.png](../../assets/images/gal_ell-31.png)

![gal_ell-32.png](../../assets/images/gal_ell-32.png)

![gal_ell-33.png](../../assets/images/gal_ell-33.png)

![gal_ell-34.png](../../assets/images/gal_ell-34.png)

![gal_ell-35.png](../../assets/images/gal_ell-35.png)

![gal_ell-36.png](../../assets/images/gal_ell-36.png)

![gal_ell-37.png](../../assets/images/gal_ell-37.png)

![gal_ell-38.png](../../assets/images/gal_ell-38.png)

![gal_ell-39.png](../../assets/images/gal_ell-39.png)

![gal_ell-40.png](../../assets/images/gal_ell-40.png)

![gal_ell-41.png](../../assets/images/gal_ell-41.png)

![gal_ell-42.png](../../assets/images/gal_ell-42.png)

![gal_ell-43.png](../../assets/images/gal_ell-43.png)

![gal_disk-05.png](../../assets/images/gal_disk-05.png)

![gal_disk-06.png](../../assets/images/gal_disk-06.png)

![gal_disk-07.png](../../assets/images/gal_disk-07.png)

![gal_disk-08.png](../../assets/images/gal_disk-08.png)

![gal_disk-09.png](../../assets/images/gal_disk-09.png)

![gal_disk-10.png](../../assets/images/gal_disk-10.png)

![gal_disk-11.png](../../assets/images/gal_disk-11.png)

![gal_disk-12.png](../../assets/images/gal_disk-12.png)

![gal_disk-13.png](../../assets/images/gal_disk-13.png)

![gal_disk-14.png](../../assets/images/gal_disk-14.png)

![gal_disk-15.png](../../assets/images/gal_disk-15.png)

![gal_disk-16.png](../../assets/images/gal_disk-16.png)

![gal_disk-17.png](../../assets/images/gal_disk-17.png)

![gal_disk-18.png](../../assets/images/gal_disk-18.png)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Color%20gradients%20in%20ellipticals.html" class="backlink-item">Color gradients in ellipticals</a></li>
    <li class="backlink-item-wrap"><a href="./Kormendy%20relation.html" class="backlink-item">Kormendy relation</a></li>
    <li class="backlink-item-wrap"><a href="./Low%20surface%20brightness%20galaxies.html" class="backlink-item">Low surface brightness galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Petrosian%20radius.html" class="backlink-item">Petrosian radius</a></li>
    <li class="backlink-item-wrap"><a href="./Sersic%20profile.html" class="backlink-item">Sersic profile</a></li>
  </ul>
</div>
