---
layout: default
title: "Deconvolution algorithms compared"
---

# Deconvolution algorithms compared

a quick comparison of the main image-deconvolution algorithms used in interferometry, organized by source type and use case.

## the deconvolution problem

given:
- dirty image $I_{\rm dirty} = I_{\rm true} * B_{\rm dirty}$
- dirty beam $B_{\rm dirty}$
- noise estimate $\sigma$

recover $I_{\rm true}$.

the problem is **ill-posed**: many $I_{\rm true}$ candidates produce the same $I_{\rm dirty}$ (the dirty beam has structure that's invariant under certain transformations of the source). regularization is needed to pick one.

## the algorithms

### CLEAN (Högbom 1974)

iterative point-source subtraction. greedy algorithm: find peak, subtract scaled dirty beam, iterate.

**best for**: compact sources, point sources, moderately-complex sources with strong central peaks
**limitations**: extended emission, very low surface-brightness features
**adoption**: dominant in radio

### MEM (Cornwell-Evans 1985)

maximum-entropy regularized fit. find $I$ maximizing $F[I]$ = data fit + entropy.

**best for**: extended emission, smooth sources, low surface brightness
**limitations**: needs careful parameter tuning; can over-smooth; computationally expensive
**adoption**: secondary, used when CLEAN struggles

### Multi-scale CLEAN (Cornwell 2008)

CLEAN with multiple-size Gaussian basis functions instead of point sources.

**best for**: sources with both compact peaks and extended halos
**limitations**: scale parameters need tuning
**adoption**: standard in modern radio (CASA tclean)

### RML (Regularized Maximum Likelihood)

Bayesian framework: optimize $\chi^2$ + multiple regularization terms (entropy, smoothness, sparsity).

**best for**: complex sources with multiple structural components, high-precision imaging
**limitations**: many free parameters, computationally heavy
**adoption**: emerging; standard for EHT, gaining traction in radio

### Sparse Bayesian inference

assume the image is sparse (most pixels are zero). use $L_1$ regularization or compressed-sensing methods.

**best for**: strongly-resolved point-like sources
**limitations**: assumption of sparsity may not hold
**adoption**: research, not widespread in production

### Richardson-Lucy

multiplicative iteration, common in optical and biology imaging. less common in radio.

**best for**: positive sources with Poisson noise
**limitations**: slow convergence
**adoption**: rare in radio, common in optical imaging

## the practical recipe

a modern radio observation:

1. **dirty image**: compute via FFT of (u, v) data
2. **CLEAN with masking**: standard first attempt, with a mask to constrain CLEAN to known source regions
3. **multi-scale CLEAN**: if extended emission is present
4. **MEM or RML**: as cross-validation, especially for very extended emission
5. **multi-frequency synthesis**: to handle wide-band data
6. **self-calibration loop**: iterate cal + image until convergence

different methods on the same dataset should give consistent results. systematic differences flag real issues.

## the EHT example

for the EHT M87 image, three methods used in parallel:
- **CLEAN**: traditional, well-understood, fast
- **MEM**: regularized maximum entropy
- **eht-imaging RML**: modern Bayesian framework

all three produced consistent ring-like images with similar parameters. this consistency was *the* validation of the result.

## the key tradeoff

| algorithm | speed | accuracy | extended-source | point-source |
|---|---|---|---|---|
| CLEAN | fast | medium | poor | excellent |
| MEM | slow | medium | good | medium |
| multi-scale CLEAN | medium | good | good | good |
| RML | slow | excellent | excellent | excellent |
| Bayesian (DMC) | very slow | excellent | excellent | excellent |

choose based on the science: faster methods for routine observations, slower/better methods for cutting-edge work.

## the future

- **machine learning** approaches (e.g. neural-network-based deconvolution): emerging research direction
- **on-the-fly RML**: real-time Bayesian imaging during observations
- **hybrid methods**: combine speed of CLEAN with accuracy of RML

## see also

- [CLEAN algorithm](../../../02_Zettel/Theory/interf/CLEAN algorithm.md)
- [Maximum entropy method](../../../02_Zettel/Theory/Maximum entropy method.md)
- [Dirty beam and dirty image](../../../02_Zettel/Theory/interf/Dirty beam and dirty image.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
