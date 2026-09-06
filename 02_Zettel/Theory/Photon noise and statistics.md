---
layout: default
title: "Photon noise and statistics"
type: zettel
created: 2026-08-04
moc:
  - Astronomical_Interferometry_MOC
tags:
  - zettel
  - theory
  - interferometry
---
> *because light is quantized into discrete packets, the random arrival times of photons create an unavoidable baseline of statistical noise in all measurements*

---

## core physical intuition

![Photon shot noise: quantum Poisson fluctuations $\sigma_N = \sqrt{N}$ setting the fundamental sensitivity limit of optical detectors.](Photon_noise_and_statistics.jpg)


Even if you have perfectly stable instruments, zero background light, and no atmospheric turbulence, your measurements will still be noisy. This is because light does not flow like a continuous fluid; it arrives as a rain of discrete photons. 

The emission of these photons from an astrophysical source is a random, independent process. If you expect a certain average number of photons to arrive in a given second, the actual number you count will fluctuate around that average. This intrinsic, unavoidable fluctuation is photon noise (or shot noise). Because it follows Poisson statistics, the noise scales with the square root of the signal. The only way to beat it is to collect more photons.

---

## key derivation & equations

The probability of detecting $k$ photons when the expected average is $\bar{N}$ is given by the Poisson distribution. A key property of the Poisson distribution is that the variance $\sigma^2$ is exactly equal to the mean:

$$ \sigma^2 = \bar{N} $$

Therefore, the noise (standard deviation) is $\sigma = \sqrt{\bar{N}}$.

The Signal-to-Noise Ratio (SNR) for a simple counting experiment is the signal divided by the noise:

$$ \text{SNR} = \frac{\bar{N}}{\sqrt{\bar{N}}} = \sqrt{\bar{N}} $$

In an interferometer, the uncertainty in measuring the fringe visibility $V$ depends on the photon flux. The SNR of the visibility measurement scales proportionally:

$$ \text{SNR}_V \propto V \sqrt{\bar{N}} $$

---

## astrophysical context

Photon noise dictates the sensitivity limits of astronomical instruments. It explains why optical intensity interferometry (like the original Hanbury Brown and Twiss experiment) is vastly less sensitive than modern amplitude interferometry. Intensity interferometry relies on measuring second-order correlations (coincidences of individual photon arrivals), which is extremely starved for photons. It is also why operating optical interferometers on very long baselines with small apertures is incredibly difficult—if the source is faint, you simply do not catch enough photons in a short atmospheric coherence time to confidently detect the fringes against the Poisson noise background.

---

## connections & zettel links

* parent moc: [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
* related zettels: [Intensity interferometry concept](../../02_Zettel/Theory/interf/Intensity interferometry concept.html), [Radiometer equation and SEFD](../../02_Zettel/Theory/interf/Radiometer equation and SEFD.html), [CCD detectors and SNR](../../02_Zettel/Theory/CCD detectors and SNR.html)
