---
layout: "default"
title: "Petrosian radius"
---
{% raw %}
the **Petrosian radius** is a model-independent way to define a galaxy's photometric "size." widely used in SDSS for total magnitudes + sizes of galaxies. its key advantage: insensitive to surface-brightness profile shape + cosmological dimming.

## the definition

at radius $r$ from the galaxy centre, define the **Petrosian ratio**:
$$\eta(r) = \frac{\bar I(<r)}{I(r)}$$

with $\bar I(<r)$ = mean surface brightness within $r$ and $I(r)$ = local surface brightness at $r$. for a flat brightness profile, $\eta = 1$. for a falling profile (typical galaxy), $\eta$ rises with $r$.

the **Petrosian radius** $r_P$ is the radius where $\eta(r_P) = $ a chosen value (SDSS uses $\eta_P = 0.2$, i.e. local surface brightness is $20\%$ of the average within).

## the Petrosian flux

flux within an aperture of radius $\alpha r_P$ (SDSS uses $\alpha = 2$):
$$F_P = \int_0^{2 r_P} I(r) \cdot 2\pi r\,dr$$

this is the **Petrosian flux**. it captures most of the galaxy's flux while being insensitive to:
- surface-brightness profile shape (works for de Vaucouleurs, exponential, anything in between).
- cosmological surface-brightness dimming $(1+z)^{-4}$: since the ratio $\eta$ is dimensionless, scaling all of $I(r)$ by a factor doesn't move $r_P$.
- sky background (mostly).

## the Petrosian magnitude

$m_P = -2.5\log_{10}(F_P) + Z$. SDSS reports $r_{\rm petro}$ + Petrosian magnitudes $m_P$ as the **default** photometric output for galaxies.

practical: $r_P$ is typically $\sim 1$ to $2$ effective radii ($r_e$), so the flux within $2 r_P$ is $\gtrsim 90\%$ of the total for normal galaxies. excellent total-magnitude estimator.

## the practical algorithm

per galaxy:
1. measure surface brightness $I(r)$ at many radii from the centre.
2. compute $\eta(r) = \bar I(<r)/I(r)$.
3. find the radius where $\eta(r) = 0.2$. that's $r_P$.
4. measure flux within $\alpha r_P$ ($\alpha = 2$ for SDSS).

modern photometric pipelines (SExtractor, photutils) provide Petrosian-based aperture photometry as a standard option.

## the comparison with Kron + isophotal

other galaxy-flux estimators:
- **Kron magnitude**: defined by the first-moment radius. similar conceptual idea, slightly different normalisation. used by SExtractor MAG_AUTO.
- **isophotal magnitude**: flux above a fixed surface-brightness threshold. simple, but **distance-dependent** because of cosmological dimming.

so for cosmology-aware galaxy work, Petrosian (or Kron) is preferred over isophotal.

## limitations

- **diffuse galaxies + LSB**: the threshold $\eta = 0.2$ may not reach the true outer envelope. underestimates flux.
- **bright, large galaxies**: $r_P$ may exceed the chosen aperture limits + algorithm fails.
- **close pairs / blending**: nearby companion contaminates the brightness profile.

## see also

- [Aperture photometry](./Aperture%20photometry.html)
- [Surface brightness dimming](./Surface%20brightness%20dimming.html)
- [Galaxy size-luminosity relation](./Galaxy%20size-luminosity%20relation.html)
- [Sersic profile](./Sersic%20profile.html)
- [De Vaucouleurs and exponential profiles](./De%20Vaucouleurs%20and%20exponential%20profiles.html)
- [SDSS overview](./SDSS%20overview.html)
- [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html)

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![gal_lf2-05.png](../../assets/images/gal_lf2-05.png)
*Petrosian (1976) photometric radius: aperture definition independent of cosmological surface brightness dimming (1+z)^4.*

![gal_lf2-06.png](../../assets/images/gal_lf2-06.png)
*Petrosian ratio eta(r): ratio of local surface brightness at radius r to average surface brightness inside r.*

![gal_lf2-07.png](../../assets/images/gal_lf2-07.png)
*Standard SDSS Petrosian radius: radius r_P where eta(r_P) = 0.2.*

![gal_lf2-08.png](../../assets/images/gal_lf2-08.png)
*Petrosian flux: total flux enclosed within 2 * r_P (recovers ~98% of light for exponential disk, ~80% for de Vaucouleurs).*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_lf2-13.png](../../assets/images/gal_lf2-13.png)

![gal_lf2-14.png](../../assets/images/gal_lf2-14.png)

![gal_lf2-15.png](../../assets/images/gal_lf2-15.png)

![gal_lf2-16.png](../../assets/images/gal_lf2-16.png)

![gal_lf2-17.png](../../assets/images/gal_lf2-17.png)

![gal_lf2-18.png](../../assets/images/gal_lf2-18.png)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./CAS%20galaxy%20classification.html" class="backlink-item">CAS galaxy classification</a></li>
    <li class="backlink-item-wrap"><a href="./De%20Vaucouleurs%20and%20exponential%20profiles.html" class="backlink-item">De Vaucouleurs and exponential profiles</a></li>
    <li class="backlink-item-wrap"><a href="./SDSS%20overview.html" class="backlink-item">SDSS overview</a></li>
    <li class="backlink-item-wrap"><a href="./Sersic%20profile.html" class="backlink-item">Sersic profile</a></li>
  </ul>
</div>
