---
layout: "default"
title: "Power spectrum estimation"
---
{% raw %}
# Power spectrum estimation

the power spectrum of a time series tells me how the signal's energy is distributed across frequencies. the basic idea is simple — square the FFT — but practical estimation requires care: averaging, windowing, and detrending all matter.

## the periodogram (the naive estimator)

given $N$ samples $x_n$ at intervals $\Delta t$, the periodogram is

$$P_k = \frac{|X_k|^2}{N \Delta t}$$

(units: power per Hz, with $X_k$ the DFT). plot $P_k$ vs $f_k$ on log-log axes.

problems:

1. **noisy**: the periodogram is **inconsistent** as $N \to \infty$. each bin's variance equals its expected value, so even infinite data gives a noisy spectrum
2. **leakage**: signals at non-bin frequencies spread across bins
3. **DC dominance**: if $\bar x \neq 0$, the $k = 0$ bin is huge and visually drowns everything

## fixing #1: Welch's method

split the signal into $K$ overlapping segments, compute the periodogram of each, average. the average is consistent: variance falls as $1/K$, signal is preserved.

```python
from scipy.signal import welch
freqs, P = welch(x, fs=1/dt, nperseg=N//8, noverlap=N//16)
plt.loglog(freqs, P)
```

`nperseg` is the segment length (smaller = noisier individual periodograms but more averaging; usually $N/8$ to $N/4$). `noverlap` is the overlap, typically half of `nperseg`.

## fixing #2: windowing

apply a window function to each segment before FFT. options:

- **Hann** (default): smooth taper, low side lobes
- **Hamming**: similar to Hann
- **Blackman**: lower side lobes than Hann at the cost of broader main lobe
- **rectangular**: no taper, highest leakage

`scipy.signal.welch(window='hann', ...)` is the default and almost always the right choice.

## fixing #3: detrending

remove the mean (and optionally a linear trend) from each segment before FFT:

```python
freqs, P = welch(x, fs=1/dt, nperseg=N//4, detrend='linear')
```

`detrend='constant'` (mean only), `'linear'` (mean + slope), or `False` (no detrending). always at least `'constant'`.

## the units

```python
freqs, P = welch(x, fs=1/dt)
```

returns $P$ in **power spectral density** units of $|x|^2/\text{Hz}$. integrate over a frequency band to get total power in that band:

$$\text{power}_{\Delta f} = \int_{f_1}^{f_2} P(f) \, df \approx \sum_{k \in [f_1, f_2]} P_k \cdot \Delta f$$

Parseval's theorem: $\sum |x_n|^2 \cdot \Delta t = \int P(f) \, df$.

## reading a power spectrum

what the shape of $P(f)$ tells me physically:

- **peaks**: discrete frequencies in the signal (pulsations, orbital periods, instrumental spikes)
- **broadband continuum**: stochastic variability
- **power-law slope** $P \propto f^{-\alpha}$:
  - $\alpha = 0$: white noise (uncorrelated)
  - $\alpha = 1$: pink noise / 1/f noise (logarithmic memory)
  - $\alpha = 2$: red noise / random walk (Brownian)
- **break frequency**: a knee where the slope changes signals a characteristic timescale

## confidence intervals on the periodogram

each Welch periodogram bin is approximately distributed as $\chi^2$ with $2K_{\rm eff}$ degrees of freedom (where $K_{\rm eff}$ accounts for window overlap). 95% confidence interval:

$$\frac{2K P}{\chi^2_{2K, 0.975}} \leq \text{true power} \leq \frac{2K P}{\chi^2_{2K, 0.025}}$$

scipy.stats.chi2 gives the percentiles. plot as shaded bands around the spectrum estimate.

## astrophysics applications

- **stellar pulsations**: peaks at oscillation frequencies, asteroseismology
- **cosmological power spectrum**: $P_m(k)$ from the matter density field, traced by galaxy surveys
- **CMB power spectrum**: $C_\ell$ from spherical harmonics of temperature map
- **AGN X-ray variability**: broadband continuum + quasi-periodic oscillations
- **gravitational wave noise budget**: detector noise PSD vs target signal PSD

## the Lomb-Scargle alternative for unevenly-sampled data

the FFT and Welch method assume uniform sampling. for astronomical data with gaps (weather, daylight, telescope-time allocations), use the Lomb-Scargle periodogram instead:

```python
from scipy.signal import lombscargle
from astropy.timeseries import LombScargle

ls = LombScargle(times, values)
freqs = np.linspace(0.1, 10, 10000)
P = ls.power(freqs)
```

works on irregularly-sampled time series, used universally for variable-star and exoplanet searches.

## the Wiener-Khinchin theorem

connects power spectrum and autocorrelation:

$$P(f) = \int R(\tau) e^{-2\pi i f \tau} d\tau$$

where $R(\tau) = \langle x(t) x(t + \tau)\rangle$ is the autocorrelation. so the power spectrum *is* the Fourier transform of the autocorrelation. either domain gives the same information.

## see also

- [Discrete Fourier transform](./Discrete%20Fourier%20transform.html)
- [Fast Fourier transform algorithm](./Fast%20Fourier%20transform%20algorithm.html)
- [Physical interpretation of the FFT](./Physical%20interpretation%20of%20the%20FFT.html)
- [Fourier series math summary](./Fourier%20series%20math%20summary.html)
- [FFT in scipy and numpy](./FFT%20in%20scipy%20and%20numpy.html)
- [Mathematical_Numerical_Methods_MOC](../../04_Atlas/Mathematical_Numerical_Methods_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Discrete%20Fourier%20transform.html" class="backlink-item">Discrete Fourier transform</a></li>
    <li class="backlink-item-wrap"><a href="./FFT%20in%20scipy%20and%20numpy.html" class="backlink-item">FFT in scipy and numpy</a></li>
    <li class="backlink-item-wrap"><a href="./Fast%20Fourier%20transform%20algorithm.html" class="backlink-item">Fast Fourier transform algorithm</a></li>
    <li class="backlink-item-wrap"><a href="./Fourier%20series%20math%20summary.html" class="backlink-item">Fourier series math summary</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Mathematical_Numerical_Methods_MOC.html" class="backlink-item">Mathematical_Numerical_Methods_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Physical%20interpretation%20of%20the%20FFT.html" class="backlink-item">Physical interpretation of the FFT</a></li>
  </ul>
</div>
