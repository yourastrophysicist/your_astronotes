---
layout: default
title: "Structure function and correlation function"
type: zettel
created: 2026-08-04
moc:
  - Astronomical_Interferometry_MOC
tags:
  - zettel
  - theory
  - interferometry
---
> The structure function measures how much the phase of an incoming wavefront varies on average between two points separated by a given distance.

---

## core physical intuition

<img src="{{ "/assets/images/Structure_function_and_correlation_function.png" | relative_url }}" alt="Phase structure function $D_\phi(r) \propto (r/r_0)^{5/3}$ quantifying phase variance across spatial separation $r$." class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />


When starlight passes through the turbulent atmosphere, different parts of the wavefront are delayed by different amounts. Instead of trying to track the exact phase at every single point, we use statistical tools to describe the average behavior of these fluctuations. 

The correlation function tells us how similar the phase is at two different locations. However, the phase itself can have a massive overall offset that wanders randomly. The structure function is often more useful because it looks specifically at the difference in phase between two points. By squaring this difference and averaging it over time, the structure function directly quantifies the variance of the phase difference across a baseline. In Kolmogorov turbulence, this variance grows with the separation distance, meaning points further apart have less correlated phases.

---

## key derivation & equations

The correlation function $B_\phi(r)$ describes the covariance of the phase $\phi$ at two points separated by a vector $\mathbf{r}$
$$B_\phi(r) = \langle \phi(\mathbf{x}) \phi(\mathbf{x}+\mathbf{r}) \rangle$$

The structure function $D_\phi(r)$ is the mean-squared phase difference
$$D_\phi(r) = \langle [\phi(\mathbf{x}) - \phi(\mathbf{x}+\mathbf{r})]^2 \rangle$$

These two functions are related mathematically by
$$D(r) = 2[B(0) - B(r)]$$

For standard Kolmogorov atmospheric turbulence, the phase structure function scales with the 5/3 power of the separation distance normalized by the Fried parameter $r_0$
$$D_\phi(r) = 6.88 \left( \frac{r}{r_0} \right)^{5/3}$$

---

## astrophysical context

The structure function is the fundamental bridge between the fluid dynamics of atmospheric turbulence and the observable degradation of astronomical images. It is used to derive the Fried parameter $r_0$, which sets the maximum usable aperture size before seeing dominates. It also determines the isoplanatic angle $\theta_0$ (how wide a field of view is coherent) and the coherence time $\tau_0$ (how fast the atmosphere changes). Every adaptive optics system and interferometric fringe tracker relies on these statistical properties to estimate how fast and how accurately they need to correct the incoming wavefront.

---

## connections & zettel links

* parent moc: [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
* related zettels: [Kolmogorov turbulence](../../02_Zettel/Theory/interf/Kolmogorov turbulence.html), [Fried parameter $r_0$](../../02_Zettel/Theory/interf/Fried parameter $r_0$.html), [Isoplanatic patch](../../02_Zettel/Theory/interf/Isoplanatic patch.html), [Atmospheric turbulence overview](../../02_Zettel/Theory/interf/Atmospheric turbulence overview.html)
