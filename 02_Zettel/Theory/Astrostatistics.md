---
layout: default
title: "Astrostatistics"
---

When we want to measure an observable quantity,
	we need to collect a sample of data that will be characterized by **fluctuations**
		the underlying set of values from which this quantity is sampled is called a **distribution**
			and the framework for working with these distributions is **statistics**

In X-ray astronomy specifically, statistics is not optional — it is unavoidable:
	every photon is a discrete event, with Poisson noise on every count
	every spectrum is a histogram with bins containing only a handful of counts
	every source detection is a claim that a signal exceeds the background noise at some significance level

This is the framework that connects raw counts to physical parameters.

---

## What astrostatistics covers

### Distributions — [Distributions](../../02_Zettel/Theory/Distributions.html)
The mathematical foundations:
	what probability distributions look like
	their moments (mean, variance, skewness, kurtosis)
	the **Poisson distribution** for photon counting in X-ray astronomy:
$$f(k;\lambda) = \frac{\lambda^k e^{-\lambda}}{k!} \qquad E[k] = V[k] = \lambda$$

The key fact: the **noise** on a Poisson count is $\sigma = \sqrt{\lambda}$
	so faint sources (few photons) have large fractional uncertainty $\sigma/\lambda = 1/\sqrt{\lambda}$

### Signal-to-noise ratio — [Signal-Noise Ratio](../../02_Zettel/Theory/Signal-Noise Ratio.html)
How many standard deviations is the source above the background?
	for source count rate $s$, background rate $b$, exposure time $t$:
$$SNR = \frac{st}{\sqrt{(s+b)t}}$$

Source-dominated ($b \ll s$): $SNR \approx \sqrt{st}$
Background-dominated ($b \gg s$): $SNR \approx s\sqrt{t/b}$
Both scale as $\sqrt{t}$ — doubling exposure improves SNR by $\sqrt{2}$

### Spectral fitting — [Fitting](../../02_Zettel/Theory/Fitting.html)
Given observed counts $D_i$ in energy channel $i$ and a model predicting $M_i(\theta)$:

**$\chi^2$ statistics** (Gaussian errors, $D_i \gtrsim 20$ counts):
$$\chi^2 = \sum_i \frac{(D_i - M_i)^2}{\sigma_i^2}$$
Good fit: $\chi^2_{red} = \chi^2/\nu \approx 1$, where $\nu = N - m$ (degrees of freedom)

**C-statistics** (Poisson regime, $D_i$ small):
$$Cstat = 2\sum_i \left[M_i - D_i + D_i \ln(D_i/M_i)\right]$$
Minimizing $Cstat$ = maximizing the Poisson likelihood

Spectral fitting always uses **forward folding**:
$$C(I) = \int \mathcal{F}(E) \cdot R(I, E) \, dE$$

where $R(I,E)$ is the redistribution matrix (RMF) and $\mathcal{F}(E)$ is the photon spectrum

### Hypothesis testing — [p-value](../../02_Zettel/Theory/p-value.html)
Is this source real? Is this spectral feature significant?
$$p(S) = \int_S^\infty f(S') \, dS'$$

the p-value is the probability of obtaining test statistic $\geq S$ if the null hypothesis is true

**Critical warning**: $p < 0.05$ does **not** mean the signal is real
	it means the data are unlikely under $H_0$ — it says nothing about what $H_1$ is

---

## The chain from photons to physics

$$\text{photons} \xrightarrow{\text{Poisson}} \text{counts} D_i \xrightarrow{\chi^2 / Cstat} \text{model fit} \xrightarrow{\text{p-value}} \text{significance}$$

every step requires choosing the right statistic for the photon count regime
	using $\chi^2$ with too few counts per bin biases the fit and gives wrong error bars
	using C-statistics is always valid but requires knowing $\mathcal{F}(E)$ and the response $R(I,E)$

---

## Subtopics

- [Distributions](../../02_Zettel/Theory/Distributions.html) — Poisson, Gaussian, binomial; moments
- [Signal-Noise Ratio](../../02_Zettel/Theory/Signal-Noise Ratio.html) — detection, exposure time scaling
- [Fitting](../../02_Zettel/Theory/Fitting.html) — $\chi^2$, C-statistics, forward folding, RMF/ARF
- [p-value](../../02_Zettel/Theory/p-value.html) — hypothesis testing, significance, null hypothesis
