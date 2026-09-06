---
layout: default
title: "Fast Fourier transform algorithm"
---

# Fast Fourier transform algorithm

the algorithm that computes the [Discrete Fourier transform](../../02_Zettel/Theory/Discrete Fourier transform.md) in $O(N \log N)$ instead of the naive $O(N^2)$. one of the most consequential algorithms ever invented, transforming entire fields of science and engineering.

## the idea: divide and conquer

the DFT formula
$$X_k = \sum_{n=0}^{N-1} x_n \, e^{-2\pi i k n/N}$$

splits into even-$n$ and odd-$n$ terms (assume $N$ even):

$$X_k = \sum_{m=0}^{N/2-1} x_{2m} e^{-2\pi i k (2m)/N} + \sum_{m=0}^{N/2-1} x_{2m+1} e^{-2\pi i k (2m+1)/N}$$

simplify the exponents using $e^{-2\pi i (2m)/N} = e^{-2\pi i m/(N/2)}$:

$$X_k = \underbrace{\sum_{m=0}^{N/2-1} x_{2m} e^{-2\pi i k m/(N/2)}}_{= E_k, \text{ a DFT of size } N/2} + e^{-2\pi i k/N} \underbrace{\sum_{m=0}^{N/2-1} x_{2m+1} e^{-2\pi i k m/(N/2)}}_{= O_k, \text{ another DFT of size } N/2}$$

so a length-$N$ DFT decomposes into **two length-$N/2$ DFTs** (one on the even-indexed inputs, one on the odd) plus $N$ complex multiplications and additions.

apply the same trick recursively: each length-$N/2$ DFT splits into two length-$N/4$ DFTs, and so on. after $\log_2 N$ levels, the base case is length-1 DFTs (which are trivial: $X_0 = x_0$).

## complexity

at level $\ell$, there are $2^\ell$ DFTs each of length $N/2^\ell$, with $N$ "butterfly" operations needed to combine them. summed over $\log_2 N$ levels: $O(N \log N)$ total.

| $N$ | $N^2$ | $N \log_2 N$ | speedup |
|---|---|---|---|
| $10^3$ | $10^6$ | $10^4$ | $100\times$ |
| $10^6$ | $10^{12}$ | $2\times 10^7$ | $50000\times$ |
| $10^9$ | $10^{18}$ | $3\times 10^{10}$ | $30 \times 10^7$ |

## the butterfly diagram

at each level, one combines two half-DFTs $E_k, O_k$ using

$$X_k = E_k + e^{-2\pi i k/N} O_k$$
$$X_{k+N/2} = E_k - e^{-2\pi i k/N} O_k$$

(the second equation uses $e^{-2\pi i (k+N/2)/N} = -e^{-2\pi i k/N}$).

graphically: two inputs cross like the wings of a butterfly, with one being multiplied by a "twiddle factor" $e^{-2\pi i k/N}$. drawing all the butterflies for $N = 8$ gives a beautiful trellis-like flowgraph.

## bit reversal

at the recursive base, the inputs are in **bit-reversed order** $0, 4, 2, 6, 1, 5, 3, 7$ for $N = 8$ (binary: $000, 100, 010, 110, 001, 101, 011, 111$ — read right-to-left). a real implementation either does the bit-reversal as a preprocessing pass (Cooley-Tukey, "decimation in time") or as a postprocessing pass (Sande-Tukey, "decimation in frequency").

## constraints

- **classical FFT requires $N$ to be a power of 2**. for general $N$, padding with zeros to the next power of 2 is the simplest workaround
- **mixed-radix FFT** generalizes to $N = p_1 p_2 \cdots p_k$ for small primes $p_i$. modern FFT libraries (FFTW, MKL) handle this automatically
- **Bluestein's algorithm** handles any $N$ at the cost of a 2-3× constant factor

## numpy and scipy

```python
import numpy as np
X = np.fft.fft(x)              # works for any N, internally does mixed-radix or Bluestein
X = np.fft.rfft(x)             # real input, half the output

import scipy.fft
X = scipy.fft.fft(x)           # scipy version, often slightly faster than numpy
```

`scipy.fft` is generally preferred for large transforms — it has better backends and parallel support.

## practical tips

- **pad to power of 2** when possible — fastest and most accurate
- **always remove the mean** before FFT-ing a real signal, unless I want a giant DC spike that dominates the plot
- **store the frequency axis** explicitly with `np.fft.fftfreq(N, d=dt)` — it is too easy to forget which bin corresponds to which frequency
- **plot the magnitude** $|X_k|$ on log scale, the phase $\arg X_k$ separately if needed
- **use `rfft` for real signals** — half the memory, half the time

## why this changed the world

before Cooley-Tukey (1965), Fourier analysis was practically restricted to $N \lesssim 100$. the published rediscovery of the FFT (which Gauss had implicitly known in 1805 but never published) made it economically feasible to:

- digitize and compress audio (MP3, AAC)
- digitize and compress images (JPEG)
- run radar pulse compression in real time
- analyze the rotational spectra of molecules
- discover oscillation modes of stars in space-based photometry
- detect gravitational waves (matched filtering, end-to-end FFT-based)
- run essentially every modern signal-processing pipeline

## see also

- [Discrete Fourier transform](../../02_Zettel/Theory/Discrete Fourier transform.md)
- [Fourier series math summary](../../02_Zettel/Theory/Fourier series math summary.md)
- [Physical interpretation of the FFT](../../02_Zettel/Theory/Physical interpretation of the FFT.md)
- [Computational complexity and speed](../../02_Zettel/Theory/Computational complexity and speed.md)
- [Power spectrum estimation](../../02_Zettel/Theory/Power spectrum estimation.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
