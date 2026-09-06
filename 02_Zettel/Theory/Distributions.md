---
layout: default
title: "Distributions"
---

## Gaussian distribution
<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2002.09.33.png" | relative_url }}" alt="Screenshot 2026-04-07 at 02.09.33" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
The most popular distribution is the **Gaussian** (or **Normal**) distribution
	defined in the real numbers domain $\mathbb{R}$
		by moments 1 and 2, while moments 3 and 4 are equal to zero:
$$f(x) = \frac{1}{2\pi\sqrt{\sigma}}~e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

where $E[x] = \mu$ is the mean and $V[x] = \sigma^2$ is the variance

The value of $\sigma$ is related to the FWHM:
$$\text{FWHM} = \sqrt{8\ln 2}~\sigma \quad \Rightarrow \quad \sigma \simeq 0.4242 \cdot \text{FWHM}$$

On a **logarithmic scale** the Gauss function becomes a **parabola**
	the Fourier transform of a Gauss function is still a Gauss function
		the convolution of two Gauss functions is still a Gauss function

Confidence intervals:
	$1\sigma \rightarrow 34.1\%$ per side, $\mu \pm \sigma \rightarrow 68.2\%$
	$2\sigma \rightarrow 13.6\%$ per side, $\mu \pm 2\sigma \rightarrow 95\%$
	$3\sigma \rightarrow 2.1\%$ per side, $\mu \pm 3\sigma \rightarrow 99.7\%$
	$4\sigma \rightarrow 0.1\%$ per side

---

## Poisson distribution
<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2002.10.12.png" | relative_url }}" alt="Screenshot 2026-04-07 at 02.10.12" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
The **Poisson** distribution is used for **discrete measurements**
	it describes the probability of observing $k$ counts
		knowing the expected value $\lambda$:
$$f(k) = \frac{\lambda^k}{k!}e^{-\lambda}$$

defined in the $\mathbb{N}_0$ domain for $k$ and $\mathbb{R}_{\geq 0}$ for $\lambda$

It is the **fundamental distribution** in high energy astrophysics
	used to describe all photon counts data

---

### Derivation of the mean

Starting from the definition:
$$E[k] = \sum_{k=0}^{\infty} k \frac{\lambda^k}{k!}e^{-\lambda}$$

the $k=0$ term vanishes, so:
$$= \sum_{k=1}^{\infty} k \frac{\lambda^k}{k!}e^{-\lambda} = \sum_{k=1}^{\infty} \frac{\lambda^k}{(k-1)!}e^{-\lambda}$$

substituting $j = k-1$:
$$= \lambda \sum_{j=0}^{\infty} \frac{\lambda^j}{j!}e^{-\lambda} = \lambda \cdot 1 = \lambda$$

because the distribution is normalized by definition, therefore:
$$\boxed{E[k] = \lambda}$$

---

### Derivation of the variance

Starting from:
$$V[k] = \sum_{k=0}^{\infty} k^2 \frac{\lambda^k}{k!}e^{-\lambda} - \lambda^2$$

writing $k^2 = k(k-1) + k$ and splitting:
$$= \lambda \sum_{k=1}^{\infty} k \frac{\lambda^{k-1}}{(k-1)!}e^{-\lambda} - \lambda^2$$

substituting $j = k-1$:
$$= \lambda \sum_{j=0}^{\infty} (j+1) \frac{\lambda^j}{j!}e^{-\lambda} - \lambda^2$$
$$= \lambda \underbrace{\sum_{j=0}^{\infty} j\frac{\lambda^j}{j!}e^{-\lambda}}_{\lambda} + \lambda \underbrace{\sum_{j=0}^{\infty} \frac{\lambda^j}{j!}e^{-\lambda}}_{1} - \lambda^2$$
$$= \lambda^2 + \lambda - \lambda^2$$

therefore:
$$\boxed{V[k] = \lambda}$$

both the mean and the variance are equal to $\lambda$

---

### Error in counting statistics

The standard deviation is $\sigma = \sqrt{\lambda}$
	this is the **error** in counting statistics

for $\lambda = 10$: relative error $= \sqrt{10}/10 \simeq 0.32$ (32%)
for $\lambda = 100$: relative error $= \sqrt{100}/100 = 0.1$ (10%)

the statistical noise is a **smaller fraction** of the signal for bright sources

At large $\lambda$, the Poisson distribution **approaches the Gaussian**
	so $\sigma_i^2 \approx \lambda \approx D_i$ (the measured counts)
