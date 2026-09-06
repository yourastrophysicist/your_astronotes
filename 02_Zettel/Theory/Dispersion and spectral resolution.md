---
layout: default
title: "Dispersion and spectral resolution"
---

two distinct figures of merit for a spectrograph: **dispersion** (how spread out wavelengths are on the detector) and **resolution** (smallest separable $\Delta\lambda$). both follow from differentiating the grating equation. central derivation in any spectrograph oral.

## dispersion (angular and linear)

differentiate the grating equation $\sin\theta + \sin i = \rho m\lambda$ at fixed $i$:
$$\cos\theta\,d\theta = \rho m\, d\lambda$$
so the **angular dispersion**:
$$\boxed{\, \frac{d\lambda}{d\theta} = \frac{\cos\theta}{\rho m} \,}$$

units: Å/rad, or with conversion, Å/arcsec.

linear dispersion at the detector (multiply by $f_{\rm cam}$):
$$\frac{d\lambda}{dx} = \frac{\cos\theta}{\rho m\, f_{\rm cam}}$$

units: Å/mm or, dividing by pixel size, Å/pix. typical low-resolution: $2$ to $10$ Å/pix. high-resolution echelle: $0.03$ Å/pix.

implications:
- higher $\rho$, higher $m$: more dispersion (Å/mm smaller).
- bigger $f_{\rm cam}$: more dispersion (image is more stretched).
- redder $\theta$ near $\theta = 90°$: $\cos\theta \to 0$, formally infinite dispersion (Littrow limit).

## resolution (resolving power)

the line is **as wide as the slit image projected onto the detector**. to resolve it, this must be smaller than the spread between two lines $\Delta\lambda$.

slit width on detector: $s' = s (f_{\rm cam}/f_{\rm coll})$. setting $s'$ equal to the spread $\Delta\lambda \cdot (d\lambda/dx)^{-1}$:
$$\Delta\lambda = s \cdot \frac{f_{\rm cam}}{f_{\rm coll}} \cdot \frac{\cos\theta}{\rho m\, f_{\rm cam}} = \frac{s \cos\theta}{\rho m\, f_{\rm coll}}$$

so the resolving power:
$$R = \frac{\lambda}{\Delta\lambda} = \frac{\rho m \lambda f_{\rm coll}}{s \cos\theta}$$

using the slit width $s = \alpha f_{\rm tel}$ and the F-number matching $D_{\rm coll} = D_{\rm tel} f_{\rm coll}/f_{\rm tel}$:
$$\boxed{\, R = \frac{\rho m W}{\alpha} \cdot \frac{D_{\rm coll}}{D_{\rm tel}} \cdot \frac{\lambda}{\Delta\lambda_{\rm grat}}\,}$$
or equivalently in compact form:
$$R = \rho m W\, \frac{F_{\rm coll}}{s} = \rho m W\, \frac{F_{\rm coll}\,\lambda}{\alpha f_{\rm tel}\,\lambda}$$

depends on $\rho m$ (grating choice), $W$ (illuminated grating width), and inversely on the slit width $s$ (or angular slit width $\alpha$ on the sky).

## the slit-width tradeoff

narrower slit $\to$ higher $R$ but lower throughput (slit losses, photons fall outside).

at fixed seeing $\theta_{\rm seeing}$:
- $s < \theta_{\rm seeing}$: high resolution but throwing away light.
- $s = \theta_{\rm seeing}$: matched, balanced.
- $s > \theta_{\rm seeing}$: full throughput but $R$ drops.

practical rule: $s = \theta_{\rm seeing}$ on a typical night. for high-resolution work in good seeing, narrow further.

## a numerical example (Boller & Chivens at Asiago T120)

$\rho = 200$ lines/mm $= 2 \times 10^5$ /m, $m = 1$, $f_{\rm coll} = 300$ mm, $s = 100\,\mu$m, $\theta = 10°$:
$$R = \frac{(2\times 10^5)(1)(\lambda)(300\times 10^{-3})}{(100\times 10^{-6})(\cos 10°)} \approx \frac{6 \times 10^4\,\lambda}{10^{-4} \cdot 0.985} \approx 6 \times 10^8\,\lambda$$
at $\lambda = 5000$ Å $= 5 \times 10^{-7}$ m: $R \approx 300$. consistent with the actual instrument's low-$\rho$ low-$R$ mode.

with a $1200$ lines/mm grating instead: $R$ scales linearly $\to R \approx 1800$.

## comparison with other instruments

| instrument | $R$ |
|---|---|
| Sloan Digital Sky Survey | $\sim 2000$ |
| MUSE | $\sim 3000$ |
| X-shooter (VIS) | $\sim 11\,000$ |
| LAMOST | $\sim 1800$ |
| HARPS | $\sim 115\,000$ |
| ESPRESSO | $\sim 200\,000$ |

higher $R$ generally requires echelle and bigger grating (or finer ruling).

## see also

- [Grating equation](../../02_Zettel/Theory/Grating equation.md)
- [Spectrograph design](../../02_Zettel/Theory/Spectrograph design.md)
- [Single slit diffraction](../../02_Zettel/Theory/Single slit diffraction.md)
- [N-slit interference and gratings](../../02_Zettel/Theory/N-slit interference and gratings.md)
- [Spectrograph types](../../02_Zettel/Theory/Spectrograph types.md)
- [Echelle spectroscopy](../../02_Zettel/Theory/Echelle spectroscopy.md)
- [Atmospheric seeing](../../02_Zettel/Theory/interf/Atmospheric seeing.md)
- [CCD detectors and SNR](../../02_Zettel/Theory/CCD detectors and SNR.md)
