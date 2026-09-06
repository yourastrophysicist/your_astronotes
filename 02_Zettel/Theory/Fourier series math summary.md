---
layout: default
title: "Fourier series math summary"
---

# Fourier series math summary

the math foundation that the discrete Fourier transform discretizes. every periodic function is a sum of sines and cosines; every "nice enough" non-periodic function is an integral over them.

## Fourier series (periodic functions)

for $f(x)$ periodic with period $L$:

$$f(x) = \sum_{n=-\infty}^{\infty} c_n e^{2\pi i n x/L}$$

with coefficients

$$c_n = \frac{1}{L}\int_0^L f(x) e^{-2\pi i n x/L} \, dx$$

real form (for real $f$):

$$f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} [a_n \cos(2\pi n x/L) + b_n \sin(2\pi n x/L)]$$

with $a_n = (2/L)\int f \cos$ and $b_n = (2/L)\int f \sin$.

## Fourier transform (non-periodic, $L \to \infty$)

$$\hat f(k) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i k x} \, dx$$

inverse:

$$f(x) = \int_{-\infty}^{\infty} \hat f(k) e^{2\pi i k x} \, dk$$

note the symmetric $2\pi$ in the exponents. some conventions put $2\pi$ only on the inverse, with $\omega = 2\pi k$ as the integration variable; the relations are the same up to a constant.

## the four key theorems

### linearity
$\widehat{\alpha f + \beta g} = \alpha \hat f + \beta \hat g$.

### Parseval (energy conservation)
$$\int |f(x)|^2 dx = \int |\hat f(k)|^2 dk$$

physically: total signal energy in time domain equals total energy in frequency domain.

### convolution theorem
the convolution
$$(f * g)(x) = \int f(y) g(x - y) dy$$

becomes pointwise multiplication in Fourier space:
$$\widehat{f * g}(k) = \hat f(k) \cdot \hat g(k)$$

this is *the* most consequential theorem of signal processing. it turns expensive convolutions into cheap multiplications via FFT.

### shift / modulation
- shifting $f(x) \to f(x - x_0)$ multiplies $\hat f$ by $e^{-2\pi i k x_0}$
- multiplying $f$ by $e^{2\pi i k_0 x}$ shifts $\hat f$ to $\hat f(k - k_0)$

## the duality

the Fourier transform is its (almost) own inverse. if $f$ is concentrated in time, $\hat f$ is spread in frequency, and vice versa. extremes:

- $f = \delta(x)$ → $\hat f(k) = 1$ (a delta is flat in Fourier)
- $f(x) = e^{2\pi i k_0 x}$ → $\hat f(k) = \delta(k - k_0)$ (a single frequency is a delta in Fourier)
- $f(x) = e^{-x^2/2\sigma^2}$ → $\hat f(k) = \sigma\sqrt{2\pi} e^{-2\pi^2 k^2 \sigma^2}$ (a Gaussian is a Gaussian)

## the uncertainty principle

if $f$ has time-domain width $\sigma_t$ and frequency-domain width $\sigma_k$, then

$$\sigma_t \sigma_k \geq \frac{1}{4\pi}$$

equality for Gaussians. quantum mechanics inherits this as $\Delta x \Delta p \geq \hbar/2$ via $p = \hbar k$.

## Plancherel and orthogonality

$$\int_0^L e^{-2\pi i n x/L} e^{2\pi i m x/L} dx = L \delta_{nm}$$

the basis functions $e^{2\pi i n x/L}/\sqrt L$ are orthonormal on $[0, L]$. this is what makes Fourier series work as an expansion in an orthonormal basis.

## sampling theorem (Shannon-Nyquist)

if $f$ has no frequency content above $f_{\max}$, it is fully determined by uniform samples at intervals $\Delta t \leq 1/(2 f_{\max})$. the **Nyquist frequency** $f_{\rm Nyq} = 1/(2\Delta t)$ is the highest frequency representable on a grid with spacing $\Delta t$.

if $f$ has content *above* $f_{\rm Nyq}$, those high frequencies "alias" into the visible band — they appear as fake low-frequency content. **aliasing** is the cause of moire patterns and the wagon-wheel effect.

## from continuous to discrete

discretize $x$ at $N$ uniform points: $x_n = n\Delta t$ for $n = 0, 1, \ldots, N-1$. the integral becomes a sum:

$$X_k = \sum_{n=0}^{N-1} x_n e^{-2\pi i k n/N}$$

this is the [Discrete Fourier transform](../../02_Zettel/Theory/Discrete Fourier transform.html). the DFT inherits all the structure (linearity, Parseval, convolution) from its continuous parent.

## astrophysics applications

- **periodicity in light curves**: fundamental tool for finding pulsars, exoplanets, variable stars
- **continuum vs lines in spectra**: low-frequency Fourier modes describe the continuum, high-frequency modes describe the lines
- **CMB power spectrum**: spherical-harmonic transform (the Fourier-like transform on the sphere) gives $C_\ell$
- **convolutions with PSFs**: image formation = sky × PSF in real space → multiply in Fourier space
- **matched filtering for gravitational waves**: optimal SNR achieved by FFT-domain operations

## see also

- [Discrete Fourier transform](../../02_Zettel/Theory/Discrete Fourier transform.html)
- [Fast Fourier transform algorithm](../../02_Zettel/Theory/Fast Fourier transform algorithm.html)
- [Physical interpretation of the FFT](../../02_Zettel/Theory/Physical interpretation of the FFT.html)
- [Power spectrum estimation](../../02_Zettel/Theory/Power spectrum estimation.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
