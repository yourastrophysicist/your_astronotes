---
layout: default
title: "CLEAN algorithm"
---

# CLEAN algorithm

the iterative point-source deconvolution that turns a dirty image into a science-ready clean image. invented by Jan Högbom (1974), CLEAN is *the* standard imaging algorithm in radio astronomy and increasingly in optical interferometry.

## the algorithm

start with the **dirty image** $I_{\rm dirty}$ and the **dirty beam** $B_{\rm dirty}$. iterate:

1. find the **peak** in the residual image $R_i$ (initially $R_0 = I_{\rm dirty}$)
2. record a **clean component** at the peak position with intensity $\gamma I_{\rm peak}$ where $\gamma$ is the **gain** (typically 0.1)
3. **subtract** $\gamma I_{\rm peak} B_{\rm dirty}(\mathbf l - \mathbf l_{\rm peak})$ from the residual:
$$R_{i+1}(\mathbf l) = R_i(\mathbf l) - \gamma I_{\rm peak} B_{\rm dirty}(\mathbf l - \mathbf l_{\rm peak})$$
4. iterate until residuals are at noise level, or until N iterations completed

after convergence:
- **clean components** = a list of (position, intensity) pairs representing the source as a sum of point sources
- **residual image** = whatever is left, ideally noise-like

the **restored image**: convolve the clean components with a **clean beam** (Gaussian fit to the dirty beam's central lobe) and add the residual image:

$$I_{\rm clean}(\mathbf l) = \sum_i \gamma I_{\rm peak,i} \, G(\mathbf l - \mathbf l_{\rm peak,i}) + R_{\rm final}(\mathbf l)$$

where $G$ is the clean beam.

## why it works

the dirty image is the true source convolved with the dirty beam:
$$I_{\rm dirty} = I_{\rm true} * B_{\rm dirty}$$

if the source is approximately a sum of point sources, then:
$$I_{\rm true} = \sum_i \delta(\mathbf l - \mathbf l_i) \cdot S_i$$

and:
$$I_{\rm dirty}(\mathbf l) = \sum_i S_i \, B_{\rm dirty}(\mathbf l - \mathbf l_i)$$

CLEAN's iteration *unwinds* this by identifying point sources one at a time and subtracting each one's dirty-beam contribution. the residual decreases until only noise (or unmodeled extended emission) remains.

## the gain parameter

the gain $\gamma$ controls how much of each peak is subtracted per iteration:
- $\gamma = 1$: subtract all of the peak (aggressive). risk of overshooting and creating negative artifacts
- $\gamma = 0.1$: subtract a tenth (gentle). more iterations needed but safer
- $\gamma = 0.01$: very gentle, slow but very stable

practical: $\gamma = 0.1$-$0.2$ is standard for moderate-complexity sources. compact sources tolerate higher gains.

## the iteration count

how many CLEAN iterations? until:
- the residual peak is below the noise floor (e.g. 3σ)
- a maximum iteration count is reached (typically 1000-100000)
- the residuals stop decreasing (CLEAN has converged)

modern CASA/CARMA pipelines use automated stopping criteria, often 5-10× the noise threshold for safety.

## CLEAN variants

several refinements:

### Cotton-Schwab CLEAN

instead of subtracting the *entire* dirty beam (which is very large), only subtract the central part. then occasionally re-image the residuals from raw visibilities to flush out accumulated errors. *the* standard for large datasets.

### multi-scale CLEAN

instead of point sources, allow CLEAN components to be small Gaussians of various sizes. better for sources with extended emission. used in modern imaging of galaxies, supernova remnants.

### multi-frequency CLEAN

include the source's spectral index as a free parameter per CLEAN component. allows wide-bandwidth synthesis to extract spectral information alongside spatial.

### masked CLEAN

restrict CLEAN to a user-specified region of the image (the "clean mask"). prevents CLEAN from putting components in regions that are clearly noise. recommended for any image with structure.

## the CLEAN-bias problem

CLEAN can create *spurious* sources when iterating into noise. residual peaks above 1-2σ are sometimes coincidentally above the source, but more often they are noise excursions. iterating into the noise creates artificial point sources.

mitigation:
- conservative noise threshold
- masking (clean only in the source region)
- visual inspection of residuals after CLEAN

## the clean beam

after CLEAN, the *resolution* of the image is set by the clean beam — a Gaussian fit to the dirty beam's central lobe. typical:
- VLA: 1' to 0.04" depending on configuration and frequency
- ALMA: 0.1" to 30 mas depending on configuration

the clean beam is what observers report as "the resolution of this image is X."

## what CLEAN cannot do

- **recover spatial frequencies not sampled by the array**: large-scale extended emission outside the (u, v) coverage is *resolved out*
- **invert non-linear inverse problems**: CLEAN assumes linear convolution, breaks down for some non-linear cases
- **handle very extended emission**: classical CLEAN puts components at every pixel of an extended source. solutions: multi-scale CLEAN, MEM
- **handle absent zero-spacing**: an interferometer doesn't measure the (0, 0) visibility (single-dish flux). CLEAN can't recover this. solution: combine with a single-dish total-power measurement

## the modern alternatives

CLEAN is increasingly supplemented by:
- **MEM** (maximum entropy method): Bayesian regularization with a smoothness prior
- **RML** (regularized maximum likelihood): modern Bayesian imaging used by EHT
- **Bayesian samplers** (DMC, etc.): full posterior on image and parameters

these are better for some sources (very extended, complex) but CLEAN remains the workhorse for compact bright sources.

## scientific figure

![nrao_snapshot_dirty_image](../../../assets/images/nrao_snapshot_dirty_image.jpg)

reading cue: CLEAN starts from a dirty image like this: real sky convolved with the dirty beam. the algorithm removes scaled dirty-beam copies from the brightest residuals, then restores the model with a clean Gaussian beam.

source: S. T. Myers, NRAO Synthesis Imaging Summer School page on snapshot imaging.

## see also

- [Dirty beam and dirty image](../../../02_Zettel/Theory/interf/Dirty beam and dirty image.html)
- [Maximum entropy method](../../../02_Zettel/Theory/Maximum entropy method.html)
- [Self-calibration](../../../02_Zettel/Theory/interf/Self-calibration.html)
- [Imaging artifacts](../../../02_Zettel/Theory/interf/Imaging artifacts.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
