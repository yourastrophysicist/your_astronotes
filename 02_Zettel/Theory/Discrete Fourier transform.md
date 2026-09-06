---
layout: default
title: "Discrete Fourier transform"
---

# Discrete Fourier transform

the discrete version of the Fourier transform. given $N$ samples $x_n$ of a signal at uniform time intervals, returns $N$ complex numbers $X_k$ that encode the amplitude and phase of each frequency component.

## the formula

forward DFT:
$$X_k = \sum_{n=0}^{N-1} x_n \, e^{-2\pi i k n / N}, \qquad k = 0, 1, \ldots, N-1$$

inverse DFT:
$$x_n = \frac{1}{N} \sum_{k=0}^{N-1} X_k \, e^{+2\pi i k n / N}$$

(the placement of the $1/N$ varies by convention; numpy puts it on the inverse, matching this formula).

the DFT is a linear map $\mathbb{C}^N \to \mathbb{C}^N$, equivalent to multiplication by an $N \times N$ matrix $W_{kn} = e^{-2\pi i k n / N}$ (the **DFT matrix**, an orthogonal matrix up to a factor $\sqrt{N}$).

## physical interpretation

the input $x_n = x(t_n)$ is samples at $t_n = n\Delta t$. the output $X_k$ is the amplitude of the frequency

$$f_k = \frac{k}{N \Delta t} = \frac{k}{T}$$

where $T = N\Delta t$ is the total duration of the signal. so:

- $X_0$ = DC component (mean × $N$)
- $X_1$ = amplitude of the slowest frequency (one cycle in the whole window)
- $X_{N/2}$ = amplitude of the **Nyquist frequency** $f_{\rm Nyq} = 1/(2\Delta t)$, the highest representable frequency
- $X_{N/2+1}, \ldots, X_{N-1}$ = "negative" frequencies, the conjugates of $X_{N-1}, \ldots, X_{N/2+1}$

frequencies above Nyquist *cannot be represented* — they alias down into the visible band. this is the **aliasing** problem.

## complexity

direct evaluation of the formula: $O(N^2)$ — each of $N$ outputs is a sum of $N$ terms. for $N = 10^6$ that is $10^{12}$ operations, hours.

the **Fast Fourier Transform (FFT)** computes the same thing in $O(N \log N)$. for $N = 10^6$: $\sim 2 \times 10^7$ operations, milliseconds. the FFT is what made signal processing practical. see [Fast Fourier transform algorithm](../../02_Zettel/Theory/Fast Fourier transform algorithm.html)





## python

```python
import numpy as np
X = np.fft.fft(x)
x_back = np.fft.ifft(X).real      # round-trip
freqs = np.fft.fftfreq(len(x), d=dt)   # frequency axis
```

`np.fft.fftfreq` returns frequencies in the order $[0, 1, 2, \ldots, N/2-1, -N/2, \ldots, -1]/(N\Delta t)$, matching the convention of `fft`.

`np.fft.fftshift` rearranges to $[-N/2, \ldots, -1, 0, 1, \ldots, N/2-1]$ for plotting.

## the real-input shortcut

if $x_n$ is real, $X_k = X_{N-k}^*$ (complex conjugate), so half the values are redundant. `np.fft.rfft` exploits this:

```python
X = np.fft.rfft(x)         # length N//2 + 1, just the positive frequencies
freqs = np.fft.rfftfreq(len(x), d=dt)
```

half the memory, half the time, no information lost.

## periodicity and assumptions

the DFT *implicitly assumes* the signal is periodic with period $T$. if the actual signal is not, two artifacts appear:

1. **leakage**: a sinusoid whose frequency is not exactly a bin frequency $f_k$ spreads its energy into many neighboring bins. the spectrum has wide "skirts"
2. **edge effects**: discontinuities between $x_{N-1}$ and $x_0$ generate spurious high-frequency content

mitigation: **windowing**. multiply $x_n$ by a function (Hanning, Hamming, Blackman) that tapers smoothly to zero at the edges. trades narrow main lobe (frequency resolution) for low side lobes (less leakage).

## Parseval's theorem

energy conservation between time and frequency domains:

$$\sum_{n=0}^{N-1} |x_n|^2 = \frac{1}{N} \sum_{k=0}^{N-1} |X_k|^2$$

useful sanity check.

## convolution theorem

multiplication in frequency = convolution in time:

$$\mathcal{F}[x \ast y] = \mathcal{F}[x] \cdot \mathcal{F}[y]$$

so to convolve two signals, FFT both, multiply, inverse FFT. cost: $O(N \log N)$ instead of $O(N^2)$ for direct convolution. this is *the* algorithm for image filtering, deconvolution of telescope PSFs, and many other operations.

## astrophysics use cases

- **time-series analysis**: pulsar timing, X-ray light curves, radial velocity searches (Lomb-Scargle periodogram for unevenly-sampled data)
- **spectral line analysis**: ions in plasma, redshift identification
- **CMB analysis**: spherical-harmonic transforms (related but on the sphere)
- **convolution with PSF**: deconvolving telescope optics, deblurring images
- **simulation initial conditions**: drawing Gaussian random fields with a target power spectrum (FFT a white-noise field and scale)
- **cosmological power spectrum**: from a galaxy density field, Fourier transform and bin

## see also

- [Fourier series math summary](../../02_Zettel/Theory/Fourier series math summary.html)
- [Fast Fourier transform algorithm](../../02_Zettel/Theory/Fast Fourier transform algorithm.html)
- [Physical interpretation of the FFT](../../02_Zettel/Theory/Physical interpretation of the FFT.html)
- [Power spectrum estimation](../../02_Zettel/Theory/Power spectrum estimation.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
