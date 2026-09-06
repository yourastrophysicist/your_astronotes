---
layout: default
title: "N-slit interference and gratings"
---

when $N$ identical slits of width $b$ are placed with spacing $d$ along a line, illuminated by a plane wave of wavelength $\lambda$, the diffracted intensity is the **product of single-slit diffraction and N-slit interference**:
$$I(\theta) = A_0^2 \frac{\sin^2\beta}{\beta^2}\cdot\frac{\sin^2 N\gamma}{\sin^2\gamma}$$
with
$$\beta = \frac{\pi}{\lambda}b\sin\theta, \quad \gamma = \frac{\pi}{\lambda}d\sin\theta$$

## the two terms

- **$\sin^2\beta/\beta^2$**: the **single-slit envelope**. wide, slow; sets the overall throughput shape. see [Single slit diffraction](../../02_Zettel/Theory/Single slit diffraction.html).
- **$\sin^2 N\gamma/\sin^2\gamma$**: the **N-slit interference**. narrow, sharp peaks; sets the spectral lines.

## principal maxima: the grating equation

the second factor has principal maxima where $\gamma = m\pi$, $m \in \mathbb Z$, equivalently:
$$\boxed{\, d\sin\theta = m\lambda \,}$$
this is the **grating equation** in normal-incidence form. for $m = 0$, undispersed (zero-order); for $m \ge 1$, dispersed. the higher the order, the bigger the angular separation at fixed $\lambda$.

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

## see also

- [Single slit diffraction](../../02_Zettel/Theory/Single slit diffraction.html)
- [Grating equation](../../02_Zettel/Theory/Grating equation.html)
- [Blazed gratings](../../02_Zettel/Theory/Blazed gratings.html)
- [Spectrograph design](../../02_Zettel/Theory/Spectrograph design.html)
- [Dispersion and spectral resolution](../../02_Zettel/Theory/Dispersion and spectral resolution.html)
- [Spectrograph types](../../02_Zettel/Theory/Spectrograph types.html)
- [Echelle spectroscopy](../../02_Zettel/Theory/Echelle spectroscopy.html)
- [Appendix D - Gratings and spectrographs](../../02_Zettel/Theory/Appendix D - Gratings and spectrographs.html)
