---
layout: default
title: "Rejection sampling"
---

# Rejection sampling

a way to draw samples from any pdf $P(x)$ without inverting the CDF. trade efficiency for generality: works for *any* bounded pdf, but throws away some samples.

## the idea

bound $P$ above by an envelope $M g(x) \geq P(x)$ where $g$ is a pdf I can already sample from and $M$ is a constant. then:

1. draw $x \sim g$
2. draw $u \sim U(0, 1)$
3. accept $x$ if $u \leq P(x) / [M g(x)]$, otherwise reject and try again

the accepted samples are distributed exactly as $P$. the proof: the joint pdf of $(x, u)$ accepted is proportional to $g(x) \cdot \mathbb{1}[u \leq P(x)/Mg(x)]$, and integrating out $u$ gives $\propto P(x)$.

## the simple "bounding box" version

if $P(x)$ is bounded ($P(x) \leq P_{\max}$) on $[a, b]$, take $g$ to be uniform on $[a, b]$ and $M = (b - a) P_{\max}$:

1. draw $x \sim U(a, b)$
2. draw $y \sim U(0, P_{\max})$
3. accept $x$ if $y \leq P(x)$

this is the "draw a point in the bounding box, keep it if it falls under the curve" picture.

## efficiency

the acceptance probability is
$$\eta = \frac{\int P(x) dx}{M} = \frac{1}{M}$$

if $P$ is normalized ($\int P = 1$). for the bounding-box version, $\eta = 1/(P_{\max}(b-a))$.

a tight envelope ($M$ small, $g$ shaped like $P$) gives high efficiency. a loose envelope (uniform over a wide box, sharply peaked $P$) gives low efficiency. for a Gaussian peaked at 0 sampled by uniform-on-$[-5\sigma, 5\sigma]$ rejection, $\eta \approx 1/\sqrt{2\pi}/(10) \approx 4\%$ — a lot of wasted samples.

## python implementation

```python
def rejection_sample(P, P_max, a, b, N_target):
    """Sample from P on [a, b] given a known upper bound P_max."""
    samples = []
    while len(samples) < N_target:
        x = np.random.uniform(a, b)
        y = np.random.uniform(0, P_max)
        if y <= P(x):
            samples.append(x)
    return np.array(samples)
```

vectorized version (much faster):

```python
def rejection_sample_vec(P, P_max, a, b, N_target):
    samples = np.array([])
    while len(samples) < N_target:
        # propose more than we need to amortize the loop
        N_try = int((N_target - len(samples)) * 2)
        x = np.random.uniform(a, b, N_try)
        y = np.random.uniform(0, P_max, N_try)
        accepted = x[y <= P(x)]
        samples = np.concatenate([samples, accepted])
    return samples[:N_target]
```

## when to use rejection

- **$P$ is not analytically invertible** (so [Inverse transform sampling](../../02_Zettel/Theory/Inverse transform sampling.md) fails)
- **$P$ is bounded** and I have a reasonable upper bound
- **2D or higher**: rejection extends naturally to multiple dimensions, where inverse sampling does not
- **physical setup is naturally 2D**: like the bounding-box-under-the-curve picture

## when rejection is bad

- **$P$ has long tails or is unbounded** — no finite $P_{\max}$, no envelope
- **$P$ is sharply peaked**: efficiency $\eta$ is tiny, most samples wasted
- **need exact $N$ samples and timing matters**: the acceptance is random, so the sample count is non-deterministic — usually fine but occasionally problematic (e.g. inside a tight loop)

## adaptive envelopes

for sharply peaked $P$, choose a non-uniform envelope $g$ that better matches the shape:

- **Gaussian envelope** for unimodal $P$
- **piecewise-linear envelope** built adaptively (Adaptive Rejection Sampling)
- **hat function** with peaks at the modes of $P$

these are usually only worth the extra complexity if the rejection rate is truly painful.

## astrophysics applications

- **Maxwell-Boltzmann velocity sampling** for plasma simulations
- **scattering angle sampling** in radiative-transfer Monte Carlo
- **stellar IMF with cutoffs** that are awkward to invert analytically
- **non-uniform geometry**: sampling positions inside a 3D nebula with a non-trivial density profile

## the standard exam pattern

if exam exercise 2 has a pdf I cannot invert (and the problem hints at this), rejection is the safe answer:

```python
# example: Gaussian-like pdf, no analytic inverse
def P(x): return np.exp(-x**4)         # not invertible
P_max = 1.0  # P(0) = 1
samples = rejection_sample_vec(P, P_max, -3, 3, N=10000)
```

then the comparison plot:
```python
plt.hist(samples, bins=50, density=True)
xx = np.linspace(-3, 3, 200)
plt.plot(xx, P(xx) / Z, 'r-')      # Z = trapezoid integral of P
```

## see also

- [Inverse transform sampling](../../02_Zettel/Theory/Inverse transform sampling.md)
- [Box-Muller transform for Gaussian random numbers](../../02_Zettel/Theory/Box-Muller transform for Gaussian random numbers.md)
- [Importance sampling](../../02_Zettel/Theory/Importance sampling.md)
- [Pseudo-random number generators](../../02_Zettel/Theory/Pseudo-random number generators.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
