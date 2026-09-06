---
layout: default
title: "Maximum entropy method"
type: zettel
created: 2026-08-04
moc:
  - Astronomical_Interferometry_MOC
tags:
  - zettel
  - theory
  - interferometry
---
> The maximum entropy method reconstructs images by finding the smoothest possible sky distribution that still perfectly matches the observed data.

---

## core physical intuition

![Maximum Entropy Method (MEM) deconvolution maximizing image entropy to reconstruct smooth, extended astrophysical sources.](Maximum_entropy_method.svg)


An interferometer does not sample every possible spatial frequency, leaving gaps in the data. When mathematically reconstructing the image, there are infinitely many possible images that could fit the measurements. You need a rule to pick the best one.

The maximum entropy method operates on the philosophy that you should assume the least amount of information possible. It seeks an image that is globally smooth and avoids introducing any artificial structures or sharp peaks unless the data absolutely demands it. By maximizing the informational entropy of the image while constraining it to fit the observed visibilities within the known noise limits, MEM produces a continuous, softly varying map. This makes it particularly excellent at recovering large, diffuse clouds of emission.

---

## key derivation & equations

The algorithm seeks to maximize the image entropy $H$, which is defined relative to a default prior image map $M_k$
$$H = -\sum_k I_k \ln \left( \frac{I_k}{M_k} \right)$$

This maximization is subject to the strict constraint that the resulting image $I$ must correctly predict the observed complex visibilities $V_i^{\rm obs}$ within the thermal noise $\sigma_i$. This is enforced using a chi-squared limit
$$\chi^2 = \sum_i \frac{|V_i^{\rm obs} - V_i^{\rm model}|^2}{\sigma_i^2} \leq N_{\rm data}$$

The algorithm iteratively adjusts the pixel values $I_k$ to find the unique global maximum of $H$ that satisfies the $\chi^2$ boundary.

---

## astrophysical context

MEM has historically been used extensively for single-dish deconvolution and for imaging highly extended radio sources where emission covers large fractions of the field of view. While the CLEAN algorithm remains more popular for fields dominated by bright point sources, MEM is superior for rendering the smooth, large-scale structure of molecular clouds or extended galactic halos without breaking them up into artificial speckles.

---

## connections & zettel links

* parent moc: [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.md)
* related zettels: [CLEAN algorithm](../../02_Zettel/Theory/interf/CLEAN algorithm.md), [Deconvolution algorithms compared](../../02_Zettel/Theory/interf/Deconvolution algorithms compared.md), [Dirty beam and dirty image](../../02_Zettel/Theory/interf/Dirty beam and dirty image.md)
