---
layout: default
title: "Fringe visibility and contrast"
---

# Fringe visibility and contrast

the central observable of every interferometer. visibility quantifies *how strong the fringes are* — the contrast between the brightest and darkest stripes. it is the sky brightness distribution's Fourier transform, and from it (with help) we reconstruct images.

## the definition

for a fringe pattern with maximum intensity $I_{\max}$ and minimum $I_{\min}$:

$$V = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}}$$

range: $0 \leq V \leq 1$.

- $V = 1$: perfect fringes ($I_{\min} = 0$). a point source through ideal optics
- $V = 0.5$: visible fringes with finite contrast
- $V = 0$: no fringes at all. a fully-resolved or fully-incoherent source
- $V \to 0$ smoothly: a partially-resolved source

## complex visibility

visibility is a *complex* quantity:

$$\mathcal V = |\mathcal V| \, e^{i\phi_V}$$

- $|\mathcal V|$: the contrast (the magnitude in the formula above)
- $\phi_V$: the *phase*, which encodes where the fringe pattern is positioned

an interferometer measures both, in principle. in practice, atmospheric turbulence corrupts the phase, leaving only $|\mathcal V|$ measurable directly. the phase must be recovered with phase closure or similar techniques.

## the link to coherence

visibility = the magnitude of the **mutual coherence function** between the two telescopes' wavefronts:

$$\mathcal V = \frac{\langle E_1^* E_2 \rangle}{\sqrt{\langle |E_1|^2 \rangle \langle |E_2|^2 \rangle}} = \gamma_{12}$$

where $E_1, E_2$ are the electric fields at the two telescopes. this is the **complex degree of coherence**.

this connection makes visibility a *statistical* quantity: it is computed from time-averaged (or ensemble-averaged) products of the two field amplitudes.

## the Van Cittert-Zernike connection

**the central theorem of interferometry**: visibility is the Fourier transform of the source brightness distribution.

$$\mathcal V(\mathbf u) = \int\int I(\mathbf l) \, e^{-2\pi i \mathbf u \cdot \mathbf l} \, d^2 \mathbf l$$

with $\mathbf u = \mathbf B/\lambda$ the spatial frequency. this is what links a measurable (visibility) to the thing we want to know (image).

so each baseline of an interferometer samples *one Fourier component* of the source. an array with many baselines samples many components, and we can invert to get the image.

## visibility for canonical sources

### point source

$\mathcal V(\mathbf u) = 1$ for all $\mathbf u$. fringes are perfect at every baseline. this is what calibrators look like.

### uniform disk of angular diameter $\theta$

$$|\mathcal V(B)| = \left|\frac{2 J_1(\pi \theta B/\lambda)}{\pi \theta B/\lambda}\right|$$

(an Airy-like function). at $B = 0$, $V = 1$ (DC). first null at $B_1 = 1.22 \lambda/\theta$. measuring this null gives $\theta$.

### binary system

two unresolved point sources of intensities $I_1, I_2$ at separation $\boldsymbol\rho$:

$$\mathcal V(\mathbf u) = \frac{I_1 + I_2 e^{2\pi i \mathbf u \cdot \boldsymbol\rho}}{I_1 + I_2}$$

the visibility *amplitude* oscillates between $|V_{\max}|$ and $|V_{\min}|$ as $\mathbf u \cdot \boldsymbol\rho$ changes — a "fringe in the visibility" with period $1/|\boldsymbol\rho|$. measuring this gives both intensity ratio and separation.

### Gaussian disk, FWHM $\theta_G$

$$|\mathcal V(B)| = \exp\left[-\frac{\pi^2 \theta_G^2 B^2}{4 \ln 2 \, \lambda^2}\right]$$

monotonically decreasing, never reaches zero — a Gaussian source has no "edge" so visibility never quite vanishes.

## limb darkening modifies the curve

a real star is not a uniform disk: it is brighter at the center than at the limb. this changes the visibility curve subtly — the first null shifts inward and is partially "filled in." fitting the actual visibility curve gives the limb-darkening coefficient, an indirect measure of stellar atmosphere structure.

## the practical workflow

interferometric observation:

1. observe a **calibrator** (a known unresolved star) → get $V_{\rm cal}(B) \approx 1$ for all $B$ in your range
2. observe the **target** → get $V_{\rm meas}(B)$
3. **calibrate**: divide, $V_{\rm true}(B) = V_{\rm meas}/V_{\rm cal}$
4. fit a model (uniform disk, binary, Gaussian) or invert to image

this is the standard interferometric data flow: visibility is what you compute, models are what you fit.

## why visibility is hard to measure exactly

three issues:

1. **photon noise**: $\sigma_V \sim 1/\sqrt N$ for $N$ photons in a coherence cell. faint sources have noisy visibility
2. **atmosphere**: the phase $\phi_V$ is randomized on millisecond timescales by turbulence. amplitude is preserved if the integration is short
3. **systematics**: imperfect optics, polarization leakage, calibrator imperfection

all three set the practical sensitivity floor. modern instruments (GRAVITY, MATISSE) achieve $V$ measurements to $\sim 1$% at H/K-band on bright sources.

## see also

- [Coherence function and visibility](../../../02_Zettel/Theory/interf/Coherence function and visibility.html)
- [Van Cittert-Zernike theorem](../../../02_Zettel/Theory/interf/Van Cittert-Zernike theorem.html)
- [Spatial coherence](../../../02_Zettel/Theory/interf/Spatial coherence.html)
- [Stellar diameters and limb darkening](../../../02_Zettel/Theory/interf/Stellar diameters and limb darkening.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
