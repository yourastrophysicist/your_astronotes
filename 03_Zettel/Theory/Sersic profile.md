---
layout: "default"
title: "Sersic profile"
---
{% raw %}
the **Sérsic profile** is the standard parametrisation of galaxy surface-brightness profiles. specified by 3 parameters (effective radius, surface brightness at $r_e$, Sérsic index $n$). interpolates between exponential disks and de Vaucouleurs ellipticals.

## the formula

$$\boxed{\, \Sigma(r) = \Sigma_e\,\exp\!\left[-b_n\!\left(\!\left(\frac{r}{r_e}\right)^{1/n} - 1\right)\right] \,}$$

with:
- $r_e$: **effective radius** (half-light radius; encloses 50% of total flux).
- $\Sigma_e$: surface brightness at $r_e$.
- $n$: **Sérsic index** (shape parameter).
- $b_n$: a constant that depends on $n$, fixed so that $r_e$ is the half-light radius. $b_n \approx 2n - 0.327$ for $n \gtrsim 1$.

## key cases

### $n = 1$: exponential profile
$$\Sigma(r) = \Sigma_0\,e^{-r/h}$$
with scale length $h = r_e/1.678$. fits **disk galaxies** (Sa, Sb, Sc spirals).

### $n = 4$: de Vaucouleurs profile
$$\Sigma(r) = \Sigma_e\,\exp[-7.67((r/r_e)^{1/4} - 1)]$$
fits **elliptical galaxies** (E, S0). historically derived empirically by de Vaucouleurs 1948.

### intermediate $n$
$n = 2$: bulgy galaxies, lenticulars. some early-type spirals.
$n \sim 0.5$: very flat / disky profiles.
$n > 4$: very concentrated, **cD galaxies**, brightest cluster galaxies (BCGs).

## the meaning of $n$

higher $n$ = more **centrally concentrated** profile + more extended outer wings:
- $n = 1$: rapid exponential drop, no extended halo.
- $n = 4$: smooth roll-over at small $r$, very gradual decline at large $r$.

## the practical fit

GALFIT (Peng 2002) and other galaxy-fitting codes fit a Sérsic profile to a galaxy image. recovers $r_e, \Sigma_e, n$ for each galaxy. used in survey pipelines (HST, JWST, MaNGA).

bulge + disk decompositions: fit two Sérsic profiles, one with $n \sim 4$ (bulge), one with $n = 1$ (disk).

## the integrated luminosity

total luminosity:
$$L = \int 2\pi r\,\Sigma(r)\,dr = 2\pi r_e^2 \Sigma_e\,\frac{2n e^{b_n}\Gamma(2n)}{b_n^{2n}}$$

closed-form in terms of incomplete Gamma functions. tabulated.

## relation to Hubble morphology

| morphology | typical $n$ | typical $r_e$ |
|---|---|---|
| dwarf elliptical | $1$ to $2$ | $0.5$ to $2$ kpc |
| massive elliptical (E) | $4$ to $6$ | $5$ to $20$ kpc |
| cD galaxy | $> 6$ | $> 50$ kpc |
| S0 (lenticular) | $\sim 3$ | $5$ to $10$ kpc |
| Sa (early spiral) | $\sim 2$ (bulge) + $\sim 1$ (disk) | bulge $\sim 1$ kpc, disk $\sim 5$ kpc |
| Sc (late spiral) | $\sim 1$ (disk-dominated) | $\sim 5$ kpc |

so $n$ correlates with morphology: high $n$ = early-type, low $n$ = late-type.

## why it works

physically motivated by relaxation:
- **disks** ($n = 1$): formed by dissipative collapse; angular-momentum-supported.
- **ellipticals** ($n \sim 4$): formed by violent relaxation in mergers; pressure-supported.
- **mixed**: galaxies with significant bulges + disks need 2-component fits.

Sérsic captures both ends + everything in between with a single parameter.

## see also

- [De Vaucouleurs and exponential profiles](./De%20Vaucouleurs%20and%20exponential%20profiles.html)
- [Hubble morphological sequence](./Hubble%20morphological%20sequence.html)
- [CAS galaxy classification](./CAS%20galaxy%20classification.html)
- [Galaxy size-luminosity relation](./Galaxy%20size-luminosity%20relation.html)
- [Petrosian radius](./Petrosian%20radius.html)
- [Aperture photometry](./Aperture%20photometry.html)
- [PSF photometry](./PSF%20photometry.html)
- [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html)

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![gal_ell-01.png](../../assets/images/gal_ell-01.png)
*Lecture 2: Ellipticals and Bulges (Prof. Alessandro Pizzella).*

![gal_ell-02.png](../../assets/images/gal_ell-02.png)
*Jose Luis Sersic (1963, 1968) generalized radial surface brightness profile.*

![gal_ell-03.png](../../assets/images/gal_ell-03.png)
*Formula: I(R) = I_e * exp[ -b_n * ( (R / R_e)^(1/n) - 1 ) ].*

![gal_ell-04.png](../../assets/images/gal_ell-04.png)
*Effective radius R_e (half-light radius) and effective intensity I_e.*

![gal_ell-05.png](../../assets/images/gal_ell-05.png)
*The b_n constant: approximation b_n ~ 2n - 1/3 + 0.0079/n for 0.5 < n < 10.*

![gal_ell-06.png](../../assets/images/gal_ell-06.png)
*Sersic index n as structural parameter: n = 1 (exponential disk), n = 4 (de Vaucouleurs elliptical).*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_ell-07.png](../../assets/images/gal_ell-07.png)

![gal_ell-08.png](../../assets/images/gal_ell-08.png)

![gal_ell-09.png](../../assets/images/gal_ell-09.png)

![gal_ell-10.png](../../assets/images/gal_ell-10.png)

![gal_ell-11.png](../../assets/images/gal_ell-11.png)

![gal_ell-12.png](../../assets/images/gal_ell-12.png)

![gal_ell-13.png](../../assets/images/gal_ell-13.png)

![gal_ell-14.png](../../assets/images/gal_ell-14.png)

![gal_ell-15.png](../../assets/images/gal_ell-15.png)

![gal_ell-16.png](../../assets/images/gal_ell-16.png)

![gal_ell-17.png](../../assets/images/gal_ell-17.png)

![gal_ell-18.png](../../assets/images/gal_ell-18.png)

![gal_ell-19.png](../../assets/images/gal_ell-19.png)

![gal_ell-20.png](../../assets/images/gal_ell-20.png)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./CAS%20galaxy%20classification.html" class="backlink-item">CAS galaxy classification</a></li>
    <li class="backlink-item-wrap"><a href="./Color%20gradients%20in%20ellipticals.html" class="backlink-item">Color gradients in ellipticals</a></li>
    <li class="backlink-item-wrap"><a href="./De%20Vaucouleurs%20and%20exponential%20profiles.html" class="backlink-item">De Vaucouleurs and exponential profiles</a></li>
    <li class="backlink-item-wrap"><a href="./Kormendy%20relation.html" class="backlink-item">Kormendy relation</a></li>
    <li class="backlink-item-wrap"><a href="./Low%20surface%20brightness%20galaxies.html" class="backlink-item">Low surface brightness galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Petrosian%20radius.html" class="backlink-item">Petrosian radius</a></li>
  </ul>
</div>
