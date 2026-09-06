---
layout: default
title: "FFT in scipy and numpy"
---

# FFT in scipy and numpy

practical conventions for using FFT in python. the math is unambiguous but the *normalization* and *frequency layout* differ between libraries and conventions; getting them right is half the work.

## numpy.fft vs scipy.fft

- **`numpy.fft`**: classic, widely used, simple
- **`scipy.fft`**: newer, slightly faster, supports more options (real transforms, parallel)

both implement the same DFT. `scipy.fft` is generally preferred for large transforms; `numpy.fft` is fine for everyday work.

## the normalization conventions

three places the $1/N$ factor can go:

| `norm` | forward $X_k$ | inverse $x_n$ |
|---|---|---|
| `'backward'` (default) | $\sum x_n e^{-2\pi i kn/N}$ | $\frac{1}{N} \sum X_k e^{2\pi i kn/N}$ |
| `'forward'` | $\frac{1}{N} \sum x_n e^{...}$ | $\sum X_k e^{...}$ |
| `'ortho'` | $\frac{1}{\sqrt{N}} \sum x_n e^{...}$ | $\frac{1}{\sqrt{N}} \sum X_k e^{...}$ |

the default `'backward'` matches Mapelli's notes and the textbook DFT formula. the `'ortho'` option is symmetric and is what mathematicians usually prefer (Parseval's theorem then has no normalization factor).

```python
X = np.fft.fft(x)                  # default 'backward'
X_ortho = np.fft.fft(x, norm='ortho')
```

## the basic forward and inverse

```python
import numpy as np
X = np.fft.fft(x)
x_back = np.fft.ifft(X)            # complex due to roundoff; use .real for real input
np.allclose(x, x_back.real)        # True
```

## the frequency axis

```python
freqs = np.fft.fftfreq(N, d=dt)
```

returns $[0, \Delta f, 2\Delta f, \ldots, (N/2 - 1)\Delta f, -N/2 \Delta f, \ldots, -\Delta f]$. note the negative frequencies in the second half — this is the FFT order.

for plotting:
```python
freqs_shifted = np.fft.fftshift(freqs)
X_shifted = np.fft.fftshift(X)
plt.plot(freqs_shifted, np.abs(X_shifted))
```

## the real-input optimization

if $x$ is real, $X_k = X_{N-k}^*$ — half the values are redundant. `rfft` computes only the non-redundant half:

```python
X = np.fft.rfft(x)              # length N//2 + 1
freqs = np.fft.rfftfreq(N, d=dt)

x_back = np.fft.irfft(X, n=N)   # inverse, must specify length to handle even/odd N
```

half the memory, half the time, no information lost. **prefer `rfft` for real signals.**

## 2D and N-D transforms

```python
X = np.fft.fft2(image)             # 2D FFT
X = np.fft.fftn(volume)            # N-D FFT
X = np.fft.rfftn(real_volume)      # N-D real FFT
```

frequency axes:
```python
fx = np.fft.fftfreq(Nx, d=dx)
fy = np.fft.fftfreq(Ny, d=dy)
fX, fY = np.meshgrid(fx, fy, indexing='ij')
```

## a complete example: spectrum of a sinusoid

```python
import numpy as np
import matplotlib.pyplot as plt

# generate signal
fs = 1000                          # sampling frequency in Hz
T = 1                              # duration in s
N = fs * T
t = np.arange(N) / fs
f1, f2 = 50, 120                   # signal frequencies
x = 2*np.sin(2*np.pi*f1*t) + 0.5*np.sin(2*np.pi*f2*t) + 0.1*np.random.randn(N)

# FFT
X = np.fft.rfft(x - x.mean())      # remove DC, real input
freqs = np.fft.rfftfreq(N, d=1/fs)
amplitude = 2 * np.abs(X) / N      # convert to physical amplitude

# plot
plt.figure(figsize=(8, 4))
plt.plot(freqs, amplitude)
plt.xlabel('frequency [Hz]'); plt.ylabel('amplitude')
plt.xlim(0, 200)
```

expect peaks at 50 Hz (amplitude 2) and 120 Hz (amplitude 0.5), with noise floor below.

## the convolution theorem in code

convolving two signals via FFT:

```python
def fft_convolve(a, b):
    """FFT-based convolution of a and b."""
    n = len(a) + len(b) - 1
    n_fft = 2 ** int(np.ceil(np.log2(n)))         # zero-pad to power of 2
    A = np.fft.fft(a, n_fft)
    B = np.fft.fft(b, n_fft)
    return np.fft.ifft(A * B)[:n].real

# vs scipy.signal.fftconvolve, which is the same idea
from scipy.signal import fftconvolve
result = fftconvolve(a, b, mode='full')
```

for $N \sim 10^4$ or larger, FFT-based convolution beats direct convolution by orders of magnitude.

## the gotchas

- **forgetting to subtract the mean**: a non-zero DC dominates the FFT plot
- **using `fft` on a real signal**: `rfft` is faster
- **wrong frequency axis**: `np.arange(N)` instead of `np.fft.fftfreq(N, d=dt)`
- **forgetting `fftshift` for plotting**: negative frequencies appear at the end
- **not zero-padding to power of 2**: not strictly necessary for `np.fft` but speeds up classical FFT
- **applying a window without correcting normalization**: the amplitude estimate is wrong by a factor depending on the window

## scipy.fft extras

```python
import scipy.fft

X = scipy.fft.fft(x, workers=-1)            # parallel transform using all CPUs
X = scipy.fft.dct(x, type=2)                 # discrete cosine transform
X = scipy.fft.dst(x, type=2)                 # discrete sine transform
X = scipy.fft.fft(x, n=2*N)                  # zero-padded to length 2N
```

DCT and DST are useful for symmetric/antisymmetric data (e.g. boundary value problems with Dirichlet/Neumann boundaries become DCT/DST in spectral methods).

## see also

- [Discrete Fourier transform](../../02_Zettel/Theory/Discrete Fourier transform.md)
- [Fast Fourier transform algorithm](../../02_Zettel/Theory/Fast Fourier transform algorithm.md)
- [Physical interpretation of the FFT](../../02_Zettel/Theory/Physical interpretation of the FFT.md)
- [Power spectrum estimation](../../02_Zettel/Theory/Power spectrum estimation.md)
- [Fourier series math summary](../../02_Zettel/Theory/Fourier series math summary.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
