---
layout: default
title: "Phase closure"
---

# Phase closure

the central trick that lets optical interferometry image things despite the atmosphere randomizing visibility phases. **the sum of visibility phases around a closed triangle of baselines is independent of the atmospheric phase contributions** — it depends only on the source structure.

## the math

three telescopes $i, j, k$. the measured visibility phase on baseline $ij$ is

$$\phi_{ij,\rm meas} = \phi_{ij,\rm true} + \theta_i - \theta_j$$

where $\theta_i$ is the atmospheric (and instrumental) phase at telescope $i$ — a *single-station* error that affects every baseline involving that station.

similarly for the other two baselines:

$$\phi_{jk,\rm meas} = \phi_{jk,\rm true} + \theta_j - \theta_k$$
$$\phi_{ki,\rm meas} = \phi_{ki,\rm true} + \theta_k - \theta_i$$

now sum all three:

$$\Phi_{ijk,\rm meas} = \phi_{ij,\rm true} + \phi_{jk,\rm true} + \phi_{ki,\rm true} + (\theta_i - \theta_j) + (\theta_j - \theta_k) + (\theta_k - \theta_i)$$

the atmospheric terms cancel exactly:

$$\boxed{\Phi_{ijk,\rm meas} = \Phi_{ijk,\rm true}}$$

so the closure phase $\Phi_{ijk}$ is **immune to station-based errors**. it depends only on the source.

## why this works

each station has one atmospheric error $\theta_i$. on every baseline involving station $i$, that error appears with one sign. when I sum around a closed triangle, each station's error appears in *two* baselines, with opposite signs. they cancel.

this only works for **station-based** errors. **baseline-based** errors (e.g. a wrong correlator delay) do not cancel — they affect each baseline independently. fortunately, almost all real interferometric errors are station-based.

## what closure phase encodes

$\Phi_{ijk,\rm true}$ is a function of the true visibility phases at three points in the (u, v) plane: $\mathbf u_{ij}, \mathbf u_{jk}, \mathbf u_{ki}$. these are the three sides of a triangle in (u, v) space.

specifically, $\Phi_{ijk,\rm true}$ is sensitive to the **asymmetry** of the source brightness distribution. for a point source: $\Phi = 0$ at every triangle. for a binary: $\Phi$ oscillates with baseline. for a more complex asymmetric source: $\Phi$ has a non-trivial map across (u, v) triangles.

## the bispectrum

the **bispectrum** $\mathcal B$ generalizes the closure phase as a complex quantity:

$$\mathcal B_{ijk} = \mathcal V_{ij} \cdot \mathcal V_{jk} \cdot \mathcal V_{ki}$$

it is the product of the three complex visibilities around a triangle. the **closure phase is the phase of the bispectrum**: $\Phi_{ijk} = \arg \mathcal B_{ijk}$.

the bispectrum's amplitude (as opposed to phase) does *not* close — it depends on station gain amplitudes. for amplitude closure, we need [Closure amplitude](../../../02_Zettel/Theory/interf/Closure amplitude.md) (with 4 stations).

## counting closure relations

with $N$ stations, there are $N(N-1)/2$ baselines but only $N-1$ independent atmospheric phases (one is absorbed into a reference). so:

- number of measured visibility phases: $N(N-1)/2$
- number of unknowns (atmospheric phases): $N - 1$
- number of independent closure phases: $\frac{N(N-1)}{2} - (N - 1) = \frac{(N-1)(N-2)}{2}$

for $N = 3$: 3 visibility phases, 2 atmospheric, **1 closure phase**.
for $N = 4$: 6 visibility phases, 3 atmospheric, **3 closure phases**.
for $N = 6$: 15 visibility phases, 5 atmospheric, **10 closure phases**.

so larger arrays have *many* closure-phase observables, increasingly constraining the source.

## image reconstruction from closure phases

the goal: from a set of measured $|\mathcal V|$ at many baselines and many closure phases $\Phi_{ijk}$, reconstruct an image $I(\mathbf l)$.

the procedure (typically in optical interferometry):

1. **start with a model**: e.g. a uniform disk
2. **compute predicted $|\mathcal V|$ and $\Phi_{ijk}$** for the model
3. **compute $\chi^2$** against measured data
4. **update model** to reduce $\chi^2$
5. **iterate**

the optimization is non-trivial because closure phases are nonlinear in the model. tools: MIRA, BSMEM, SQUEEZE, regularized maximum-likelihood.

modern approach: encode the model as a pixel grid; minimize $\chi^2$ + regularizer (smoothness, positivity, sparsity); use modern Bayesian samplers (HMC, nested sampling).

## the limits of closure phase

three:

1. **closure phase is not a complete observable**: with $N$ stations there are only $(N-1)(N-2)/2$ closure phases, fewer than the $N(N-1)/2$ true phases. so closure-only reconstructions are degenerate
2. **noise**: closure phase combines three measurements, each with its own SNR. the closure-phase noise is roughly $\sqrt 3$ times worse than per-baseline phase noise
3. **convergence**: image reconstruction with closure phase + amplitude is a non-convex optimization. local minima are common; results depend on initial guess

despite these limits, closure phase is what made optical aperture synthesis practical (COAST in 1996 first imaged a binary using closure phases at 3 baselines).

## the radio version

same math, same usefulness. radio aperture synthesis uses closure phases as a **diagnostic** of station-based errors (deviations from the model are due to bad calibration, not the source) and as a *complementary* observable to phase-referenced calibration.

EHT relies heavily on closure phase (and amplitude) because phase referencing across continents is hard.

## historical note

introduced by **Roger Jennison** (1958) in radio astronomy. didn't enter the optical world until 1986 (Baldwin et al.) when COAST demonstrated optical imaging with closure phases.

## see also

- [The phase problem in interferometry](../../../02_Zettel/Theory/interf/The phase problem in interferometry.md)
- [Closure amplitude](../../../02_Zettel/Theory/interf/Closure amplitude.md)
- [Bispectrum and triple correlation](../../../02_Zettel/Theory/interf/Bispectrum and triple correlation.md)
- [Self-calibration](../../../02_Zettel/Theory/interf/Self-calibration.md)
- [CLEAN algorithm](../../../02_Zettel/Theory/interf/CLEAN algorithm.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
