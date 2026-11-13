---
layout: "default"
title: "N-slit interference and gratings"
---
when $N$ identical slits of width $b$ are placed with spacing $d$ along a line, illuminated by a plane wave of wavelength $\lambda$, the diffracted intensity is the **product of single-slit diffraction and N-slit interference**:
$$I(\theta) = A_0^2 \frac{\sin^2\beta}{\beta^2}\cdot\frac{\sin^2 N\gamma}{\sin^2\gamma}$$
with
$$\beta = \frac{\pi}{\lambda}b\sin\theta, \quad \gamma = \frac{\pi}{\lambda}d\sin\theta$$

## the two terms

- **$\sin^2\beta/\beta^2$**: the **single-slit envelope**. wide, slow. sets the overall throughput shape. see [[Single slit diffraction]].
- **$\sin^2 N\gamma/\sin^2\gamma$**: the **N-slit interference**. narrow, sharp peaks. sets the spectral lines.

## principal maxima - the grating equation

the second factor has principal maxima where $\gamma = m\pi$, $m \in \mathbb Z$, equivalently:
$$\boxed{\, d\sin\theta = m\lambda \,}$$
this is the **grating equation** in normal-incidence form. for $m = 0$, undispersed (zero-order). for $m \ge 1$, dispersed. the higher the order, the bigger the angular separation at fixed $\lambda$.

at each principal maximum, the value of the interference factor is $N^2$ (constructive). between principal maxima, $N - 2$ secondary maxima appear (rapidly suppressed) and $N - 1$ zeros.

so larger $N$ (more slits) gives:
- **narrower principal peaks** ($\Delta\theta_{\rm peak} \propto 1/N$).
- **higher peak intensity** ($\propto N^2$).
- **same peak positions** (set by $d$).

## the implications for spectroscopy

a **diffraction grating** is a transparent or reflective surface ruled with $\sim 100$ to $5000$ grooves per mm. for visible light at $\lambda = 500$ nm and $d = 5\,\mu$m (i.e. $\rho = 200$ lines/mm), $\sin\theta \approx 0.1$ for $m = 1$, so peaks at $\theta \approx 6°$. multi-line spectra spread between such peaks.

the **resolving power** of an $N$-line grating in order $m$ is
$$R = \lambda/\Delta\lambda = m N$$
for a $5000$-line grating in $m = 1$, $R = 5000$. typical optical spectrographs have $R = 10^3$ to $10^5$.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Diffraction grating|500](https://commons.wikimedia.org/wiki/Special:FilePath/Diffraction_grating.jpg?width=600)
*World's largest multilayer dielectric diffraction grating in 2005* ([Commons file page](https://commons.wikimedia.org/wiki/File:Diffraction_grating.jpg), The original uploader was Deglr6328 at English Wikipedia., Public domain, as used on the Wikipedia article [Diffraction grating](https://en.wikipedia.org/wiki/Diffraction_grating))

- **Diffraction grating**. "In optics, a diffraction grating is a grating with a periodic structure of appropriate scale so as to diffract light, or another type of electromagnetic radiation, into several beams traveling in different directions (i.e., different diffraction angles) known as diffracted orders. The emerging coloration is a form of structural coloration." ([Wikipedia](https://en.wikipedia.org/wiki/Diffraction_grating))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Single slit diffraction]]
- [[Grating equation]]
- [[Blazed gratings]]
- [[Spectrograph design]]
- [[Dispersion and spectral resolution]]
- [[Spectrograph types]]
- [[Echelle spectroscopy]]
- [[Appendix D - Gratings and spectrographs]]



## Linked References

- [[Blazed gratings]]
- [[Dispersion and spectral resolution]]
- [[Grating equation]]
- [[Single slit diffraction]]
- [[Astronomical_Spectroscopy_MOC]]


