---
layout: default
title: "Stellar diameters and limb darkening"
type: zettel
created: 2026-08-04
moc:
  - Astronomical_Interferometry_MOC
tags:
  - zettel
  - theory
  - interferometry
---
> Optical interferometry directly measures the physical size of stars by analyzing how fringe contrast drops on longer baselines, revealing edge-darkening effects.

---

## core physical intuition

<img src="{{ "/assets/images/Stellar_diameters_and_limb_darkening.svg" | relative_url }}" alt="Stellar limb darkening profile modifying the uniform-disk visibility curve $V(B)$ measured by optical interferometers." class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />


To a single telescope, almost every star is an unresolved point of light. However, as you separate two telescopes in an interferometer, the target star begins to look slightly resolved. When the star is resolved, light from one edge of the star interferes slightly out of step with light from the opposite edge. This causes the interferometric fringes to wash out and drop in contrast.

By measuring exactly how this fringe visibility decreases as the baseline gets longer, astronomers can calculate the angular diameter of the star. Furthermore, real stars are not uniformly bright flat disks. They appear darker near their edges because our line of sight passes through cooler, higher layers of their atmospheres. This limb darkening subtly changes the shape of the visibility curve. By measuring these deviations, interferometers can probe the vertical temperature structure of the stellar atmosphere.

---

## key derivation & equations

For a star modeled as a uniform disk of angular diameter $\theta_{\rm UD}$, the visibility $V$ as a function of projected baseline $B$ and wavelength $\lambda$ follows a Bessel function
$$V(B) = \left| \frac{2J_1(\pi\theta_{\rm UD} B/\lambda)}{\pi\theta_{\rm UD} B/\lambda} \right|$$

Because real stars exhibit limb darkening, their actual physical diameter $\theta_{\rm LD}$ is slightly larger than the naive uniform disk model suggests
$$\theta_{\rm LD} > \theta_{\rm UD}$$

Fitting the observed visibility curve to a limb-darkened atmospheric model allows simultaneous constraint of the true angular diameter and the darkening coefficients.

---

## astrophysical context

Measuring stellar diameters was the very first application of optical interferometry, famously achieved by Michelson and Pease in 1921 when they measured Betelgeuse at about 47 milliarcseconds. Today, facilities like the CHARA array routinely measure the sizes of main-sequence stars with sub-milliarcsecond precision. When combined with precise distances from Gaia, these angular diameters yield direct, model-independent linear radii, which are foundational for calibrating stellar evolution models.

---

## connections & zettel links

* parent moc: [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
* related zettels: [Fringe visibility and contrast](../../02_Zettel/Theory/interf/Fringe visibility and contrast.html), [Van Cittert-Zernike theorem](../../02_Zettel/Theory/interf/Van Cittert-Zernike theorem.html), [CHARA array](../../02_Zettel/Theory/interf/CHARA array.html), [VLTI Very Large Telescope Interferometer](../../02_Zettel/Theory/interf/VLTI Very Large Telescope Interferometer.html)
