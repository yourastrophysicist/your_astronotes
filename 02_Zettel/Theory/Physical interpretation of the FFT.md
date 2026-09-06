---
layout: default
title: "Physical interpretation of the FFT"
---

# Physical interpretation of the FFT

what the numbers $X_k$ from the DFT/FFT *mean* in terms of frequencies, amplitudes, and phases. understanding this is what separates a working FFT script from a meaningful spectral analysis.

## the frequency axis

for a sequence $x_n$ of length $N$ sampled at intervals $\Delta t$, the DFT outputs $X_k$ for $k = 0, 1, \ldots, N - 1$. each $k$ corresponds to a frequency

$$f_k = \frac{k}{N \Delta t}$$

with **bin spacing** $\Delta f = 1/(N\Delta t) = 1/T$, where $T = N\Delta t$ is the total signal duration.

the frequency layout (the "FFT order"):
- $X_0$: zero frequency (DC component) = $\sum x_n$ = $N \times $ mean
- $X_1, X_2, \ldots, X_{N/2-1}$: positive frequencies, $f = \Delta f, 2\Delta f, \ldots$
- $X_{N/2}$: Nyquist frequency $f_{\rm Nyq} = 1/(2\Delta t)$
- $X_{N/2+1}, \ldots, X_{N-1}$: **negative** frequencies, in increasing order toward zero

so $X_{N-1}$ is at frequency $-\Delta f$, $X_{N-2}$ at $-2\Delta f$, etc. this is python/numpy convention. the function `np.fft.fftfreq(N, d=Δt)` returns this exact ordering.

## fftshift to make plots sensible

for plotting, rearrange to monotonically-increasing frequency:

```python
X = np.fft.fft(x)
X_shifted = np.fft.fftshift(X)
freqs = np.fft.fftshift(np.fft.fftfreq(N, d=dt))
plt.plot(freqs, np.abs(X_shifted))
```

`fftshift` swaps the two halves: negative frequencies first, then positive.

## amplitudes and phases

each $X_k$ is complex: $X_k = |X_k| e^{i\phi_k}$. interpretation:

- $|X_k|$: amplitude of the $k$-th frequency
- $\arg X_k$: phase of the $k$-th frequency (where the cosine starts)

for a real signal, $X_k = X_{N-k}^*$, so amplitudes are mirror-symmetric around $k = N/2$ and phases are antisymmetric. this is why we usually only plot the positive-frequency half.

## the amplitude of a pure sinusoid

input: $x_n = A \cos(2\pi f_0 t_n)$, with $f_0 = m/(N\Delta t)$ for some integer $m$ (so the frequency falls exactly on a bin).

DFT output:
$$X_m = \frac{NA}{2}, \quad X_{N-m} = \frac{NA}{2}, \quad \text{others} = 0$$

each pure sinusoid contributes $NA/2$ to *two* bins (positive and negative frequencies). to get the physical amplitude $A$ from the FFT:

$$A = 2 |X_m| / N$$

(using just the positive-frequency bin, doubling to account for the negative-frequency mirror).

## the Nyquist frequency and aliasing

$f_{\rm Nyq} = 1/(2\Delta t)$. frequencies *above* Nyquist cannot be represented on the grid; they "fold back" into visible frequencies:

$$f_{\rm visible} = f_{\rm true} - 2 f_{\rm Nyq} \cdot \text{round}(f_{\rm true}/(2 f_{\rm Nyq}))$$

example: a 110 Hz signal sampled at 200 Hz ($f_{\rm Nyq} = 100$ Hz) appears as a $-90$ Hz signal — it folds down. for a real signal, $-90$ Hz looks like $90$ Hz in the magnitude spectrum. the original 110 Hz is *not recoverable*.

prevention: **anti-aliasing filter** before sampling that removes content above $f_{\rm Nyq}$.

## leakage

if the signal frequency does not fall *exactly* on a bin frequency $f_k$, its energy spreads to neighboring bins. for a sinusoid at $f$ midway between two bins, $\sim 60\%$ of the energy stays in the nearest bin and $\sim 30\%$ leaks to the next, with smaller "skirts" further out.

### windowing reduces leakage

multiply the signal by a window function (Hanning, Hamming, Blackman) before FFT. tapering to zero at the edges reduces the "rectangular" boundary that causes leakage. tradeoff: window broadens the main lobe (worse frequency resolution) but flattens the side lobes (less leakage).

```python
window = np.hanning(N)
X = np.fft.fft(x * window)
```

## frequency resolution vs duration

bin spacing $\Delta f = 1/T$. so to resolve two frequencies $\Delta f$ apart, I need observation duration $T = 1/\Delta f$. doubling the duration halves the bin spacing.

doubling $\Delta t$ (sampling slower) doesn't change $\Delta f$, just halves $f_{\rm Nyq}$. doubling $N$ at fixed $\Delta t$ doubles $T$ and halves $\Delta f$.

## power spectrum vs amplitude spectrum

- **amplitude spectrum**: $|X_k|$
- **power spectrum**: $|X_k|^2$, or normalized to physical units (power per Hz): $|X_k|^2/(N \Delta t)$

power is what is conserved by Parseval and what the eye usually wants in a log-log plot. astrophysics convention is usually one-sided power spectrum (positive frequencies only, doubled to account for the negative half).

## astrophysics use cases

- **pulsar timing**: search for periodicities in photon arrival times via FFT, peak amplitude at the rotation frequency
- **gravitational-wave detection**: matched filtering done entirely in the frequency domain; signal-to-noise = $\langle h | s \rangle$ via FFT
- **stellar oscillations / asteroseismology**: oscillation modes appear as discrete peaks in the time-series FFT
- **CMB temperature analysis**: spherical-harmonic transform = sphere's Fourier transform, peaks at acoustic scales
- **active-galactic-nuclei variability**: power spectrum of X-ray light curves probes accretion physics

## the workflow checklist

```python
# 1. load time series (uniformly sampled)
t = np.arange(N) * dt
x = ...

# 2. remove DC (subtract mean)
x = x - x.mean()

# 3. apply window (optional, recommended for non-periodic signals)
window = np.hanning(N)
x_windowed = x * window

# 4. FFT
X = np.fft.rfft(x_windowed)              # real input
freqs = np.fft.rfftfreq(N, d=dt)         # frequency axis

# 5. correct for window normalization (if using a window)
correction = np.sqrt(np.mean(window**2))
amplitude = 2 * np.abs(X) / N / correction

# 6. plot
plt.semilogy(freqs, amplitude)
plt.xlabel('frequency [Hz]'); plt.ylabel('amplitude')
```

## see also

- [Discrete Fourier transform](../../02_Zettel/Theory/Discrete Fourier transform.md)
- [Fast Fourier transform algorithm](../../02_Zettel/Theory/Fast Fourier transform algorithm.md)
- [Fourier series math summary](../../02_Zettel/Theory/Fourier series math summary.md)
- [Power spectrum estimation](../../02_Zettel/Theory/Power spectrum estimation.md)
- [FFT in scipy and numpy](../../02_Zettel/Theory/FFT in scipy and numpy.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
