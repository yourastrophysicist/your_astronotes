---
layout: default
title: "The CCD equation"
---

the master equation that tells me whether my observation is going to detect anything. derived from [CCD noise sources](../../02_Zettel/Theory/CCD noise sources.md) by dividing source signal by total noise.

## the equation

$$\boxed{\, \mathrm{SNR} = \frac{N_*}{\sqrt{\,N_* + n_{\rm pix}(N_{\rm sky} + N_d + \sigma_{\rm RN}^2)\,}} \,}$$

with:
- $N_* = R_*\, t$: source counts (e$^-$) integrated over the aperture.
- $n_{\rm pix}$: number of pixels in the aperture.
- $N_{\rm sky} = R_{\rm sky}\, t$: sky counts per pixel.
- $N_d = D\, t$: dark current per pixel.
- $\sigma_{\rm RN}^2$: read-noise variance per pixel per readout.

every exposure-time calculator on every observatory's website is running this calculation under the hood.

## the three regimes

depending on which term in the noise dominates, SNR scales differently with $t$:

### source-limited
$$N_* \gg n_{\rm pix}(N_{\rm sky} + N_d + \sigma_{\rm RN}^2)$$
$$\mathrm{SNR} \approx \sqrt{N_*} = \sqrt{R_*\, t}\quad\Rightarrow\quad \mathrm{SNR} \propto \sqrt{t}$$
to double SNR, $4\times$ exposure time. typical for bright stars, photometric standards.

### sky-limited
$$n_{\rm pix} N_{\rm sky} \gg N_*\,,\, N_d\,,\, \sigma_{\rm RN}^2$$
$$\mathrm{SNR} \approx \frac{N_*}{\sqrt{n_{\rm pix} N_{\rm sky}}} = \frac{R_*\, t}{\sqrt{n_{\rm pix} R_{\rm sky}\, t}} = R_*\sqrt{\frac{t}{n_{\rm pix} R_{\rm sky}}}$$
$$\mathrm{SNR} \propto \sqrt{t}$$
the typical regime for faint extragalactic and faint-star science. SNR still grows as $\sqrt{t}$ but with a worse prefactor than source-limited.

### read-noise-limited
$$\sigma_{\rm RN}^2 \gg N_{\rm sky}, N_d$$
(typical for short exposures, NIR with cold instrument, narrow-band imaging, photon-counting):
$$\mathrm{SNR} \approx \frac{N_*}{\sqrt{n_{\rm pix}}\,\sigma_{\rm RN}} = \frac{R_*\, t}{\sqrt{n_{\rm pix}}\,\sigma_{\rm RN}}$$
$$\mathrm{SNR} \propto t$$
crucially, **SNR scales linearly with $t$** here, not $\sqrt{t}$. consequence: for $K$ short exposures of total time $t$:
$$\mathrm{SNR}_K \approx \frac{R_*\, t}{\sqrt{K\, n_{\rm pix}}\,\sigma_{\rm RN}}$$
which is $\sqrt{K}$ **worse** than one long exposure of duration $t$.

**this is why you take long exposures**: in the read-noise-limited regime, fewer reads = more SNR for the same total integration time. limit: avoid saturating the brightest sources, avoid cosmic-ray pile-up.

## a worked numerical example

target: galaxy with $R_* = 5$ e$^-$/s, $R_{\rm sky} = 10$ e$^-$/s/pix, $D = 0.01$ e$^-$/s/pix, $\sigma_{\rm RN} = 5$ e$^-$/pix, aperture $n_{\rm pix} = 20$, exposure $t = 600$ s.

- $N_* = 3000$
- $N_{\rm sky} = 6000$
- $N_d = 6$
- $\sigma_{\rm RN}^2 = 25$

$$\mathrm{SNR} = \frac{3000}{\sqrt{3000 + 20 \cdot (6000 + 6 + 25)}} = \frac{3000}{\sqrt{123\,620}} \approx 8.5$$

interpretation: sky-limited (sky $\gg$ source, $20 \times 6000 \gg 3000$). doubling SNR requires $\sim 4\times$ time, or smaller aperture, or darker sky.

## the master decision tree

ask three questions:
1. is $N_* \gg n_{\rm pix} N_{\rm sky}$? if yes, **source-limited**, take whatever exposure works.
2. is $N_{\rm sky} \gg \sigma_{\rm RN}^2/t$? if yes, **sky-limited**, prefer many medium exposures (cosmic-ray rejection) at moderate read noise penalty.
3. otherwise **read-noise-limited**, prefer few long exposures.

planning rule: aim for $N_{\rm sky} \gtrsim 10\sigma_{\rm RN}^2$ per pixel per exposure to cleanly transition into the sky-limited regime; below that, longer exposures help.

## extensions

- **aperture optimisation**: for a Gaussian PSF on flat sky, the aperture radius maximising SNR is $\sim 1.4\,$FWHM. larger collects more flux but more sky; smaller cuts sky but loses source.
- **PSF photometry**: see [PSF photometry](../../02_Zettel/Theory/PSF photometry.md). equivalent to weighting pixels by the PSF, recovers some SNR vs aperture in crowded fields.
- **stacking**: $K$ exposures combined optimally give $\sqrt{K}$ improvement in sky/source-limited; in read-noise-limited, only linearly in $K$ if the noise per stack is dominated by readout.

## see also

- [CCD detectors and SNR](../../02_Zettel/Theory/CCD detectors and SNR.md) — the comprehensive companion
- [CCD noise sources](../../02_Zettel/Theory/CCD noise sources.md)
- [CCD basics](../../02_Zettel/Theory/CCD basics.md)
- [CCD readout chain](../../02_Zettel/Theory/CCD readout chain.md)
- [Aperture photometry](../../02_Zettel/Theory/Aperture photometry.md)
- [PSF photometry](../../02_Zettel/Theory/PSF photometry.md)
- [Sky brightness](../../02_Zettel/Theory/Sky brightness.md)
- [Signal-Noise Ratio](../../02_Zettel/Theory/Signal-Noise Ratio.md)
