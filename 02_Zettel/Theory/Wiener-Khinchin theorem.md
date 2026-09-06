---
layout: default
title: "Wiener-Khinchin theorem"
---

# Wiener-Khinchin theorem

BookAI includes the Wiener-Khinchin theorem because radio interferometry is built on correlation. this theorem is the time-domain cousin of the Van Cittert-Zernike theorem.

## the statement

for a wide-sense stationary signal $x(t)$, define the autocorrelation:

$$R_x(\tau)=\langle x(t)x^*(t+\tau)\rangle$$

then the power spectral density is the Fourier transform of the autocorrelation:

$$S_x(\nu)=\int_{-\infty}^{\infty}R_x(\tau)e^{-2\pi i\nu\tau}\,d\tau$$

and the inverse relation is:

$$R_x(\tau)=\int_{-\infty}^{\infty}S_x(\nu)e^{2\pi i\nu\tau}\,d\nu$$

## physical meaning

![Wiener-Khinchin theorem: the autocorrelation of a wide-sense stationary signal forms a Fourier transform pair with its power spectral density.](Wiener-Khinchin_theorem.svg)


correlation in time contains information about frequency content.

if a signal remains strongly correlated after a long delay, it has narrow spectral structure. if correlation disappears quickly, the signal has broad bandwidth.

## conditions

wide-sense stationarity means:

1. the mean is constant
2. the autocorrelation depends only on time difference, not absolute time

radio noise and astronomical voltage streams are often treated this way over short enough intervals.

## why radio astronomers care

correlators can obtain spectra from time-domain correlations. this is why XF correlators compute lag correlations and Fourier transform them into frequency channels.

FX correlators do the Fourier transform first, then cross-multiply frequency channels. both approaches live inside the same correlation-Fourier logic.

## relation to Van Cittert-Zernike

- Wiener-Khinchin: temporal correlation $\leftrightarrow$ power spectrum
- Van Cittert-Zernike: spatial correlation $\leftrightarrow$ sky brightness Fourier transform

both are telling the same deep story: correlation functions and spectra/images are Fourier partners.

## exam sentence

Wiener-Khinchin says the power spectrum of a stationary signal is the Fourier transform of its autocorrelation. in radio astronomy this explains why correlators can extract spectral information from voltage correlations.

## see also

- [Two-element correlator](../../02_Zettel/Theory/interf/Two-element correlator.html)
- [Coherence function and visibility](../../02_Zettel/Theory/interf/Coherence function and visibility.html)
- [Van Cittert-Zernike theorem](../../02_Zettel/Theory/interf/Van Cittert-Zernike theorem.html)
- [Radio interferometer architecture](../../02_Zettel/Theory/interf/Radio interferometer architecture.html)
