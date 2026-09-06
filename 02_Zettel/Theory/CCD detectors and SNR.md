---
layout: default
title: "CCD detectors and SNR"
---

the CCD is the workhorse detector of optical astronomy from the late 1970s onward. it converts photons into countable electrons with high quantum efficiency, low noise, and a clean linear response, then reads them out as a digital image. this note collects everything from the silicon physics through the master equation that tells me whether my observation is going to detect anything.

source: Lecture 4 ("CCD and SNR") of the Obs Astrophysics course at U Padua, with reference text Howell, *Handbook of CCD Astronomy*. companion to [Observational_Astrophysics_MOC](../../00_Atlas/Observational_Astrophysics_MOC.html) Block 4.

---

## CCD basics, the physics

a CCD pixel is a **MOS capacitor**: a silicon substrate with an insulating SiO$_2$ layer and a metal electrode on top. when the electrode is biased positive, it creates a depletion region in the silicon underneath, a potential well for electrons.

a photon with energy $E_\gamma > E_{\rm gap}^{\rm Si} = 1.12$ eV (i.e. $\lambda < 1100$ nm) has a chance of producing an electron-hole pair. the electron drifts into the well, the hole is swept away. each detected photon gives **one electron** in the well; CCD silicon is not good at counting visible photons twice.

the probability that a photon produces an electron and that the electron survives to be counted is the **quantum efficiency** $\eta(\lambda)$:
$$\eta(\lambda) \equiv \frac{N_{\rm electrons}}{N_{\rm photons}}$$

modern back-illuminated thinned scientific CCDs have $\eta > 0.9$ across most of the visible. front-illuminated CCDs lose photons to the polysilicon gate, especially in the blue. the QE curve has hard cutoffs: at the blue end from the gate absorption (or from glass in the optics), at the red end from silicon transparency past $\sim 1100$ nm.

other key per-pixel parameters:
- **full well capacity**: how many electrons before the well overflows ($\sim 10^5$ to $10^6$). beyond this the pixel saturates and overflows (blooming).
- **pixel size**: typically $10$ to $20\,\mu$m. matches the seeing-disk through the chosen plate scale.
- **fill factor**: fraction of pixel area that is sensitive ($\to 1$ for back-illuminated CCDs).

---

## the readout chain

once the integration ends, charge is shifted along the columns and through a serial register to the **on-chip amplifier**, which converts charge to voltage. the voltage is digitised by an ADC. this sequence introduces three new specifications:

- **gain** $g$: the conversion factor in **electrons per ADU** (analog-to-digital unit). a $g = 1.5$ e$^-$/ADU CCD records $1500$ electrons as $1000$ ADU. set by the on-chip amplifier and the ADC.
- **bias level**: a small constant offset added to every pixel so that zero photons read out as $\sim 1000$ ADU rather than zero (avoids issues at the lower digitisation rail). measured from an **overscan** region at the edge of the chip during every readout.
- **read noise** $\sigma_{\rm RN}$: the electronics noise in the amplifier and ADC, in electrons per pixel per readout. typical: $3$ to $10$ e$^-$/pixel for science CCDs. crucially, it does **not** scale with exposure time; one read = one $\sigma_{\rm RN}$.

other systematics in the chain:
- **charge transfer efficiency** (CTE): each pixel-to-pixel shift is not perfect. modern science CCDs have CTE $> 0.99999$, so loss is negligible except for very faint targets and many shifts.
- **linearity**: $N_{\rm out} = g \cdot N_{\rm in}$ holds to better than $1\%$ over almost the full well, then drops near saturation. corrections are tabulated.

---

## the noise sources

an exposure produces a count $N$ on a pixel. four independent sources contribute to its variance, all roughly Gaussian (Poisson where appropriate):

1. **photon noise from the source**, $\sigma_*^2 = N_*$. fundamental Poisson fluctuation of the detected source photons.
2. **photon noise from the sky**, $\sigma_{\rm sky}^2 = N_{\rm sky}$ per pixel. Poisson on the integrated sky brightness in the aperture.
3. **dark current**, $\sigma_d^2 = N_d = D \cdot t$ where $D$ is the dark rate (e$^-$/pixel/s) and $t$ is exposure time. thermally generated electrons; suppressed by cooling. at $-100°$C, $D$ is negligible. at room temperature, fatal.
4. **read noise**, $\sigma_{\rm RN}^2$ per pixel per readout. independent of exposure time.

each source is independent of the others (good approximation), so variances add:
$$\sigma_{\rm total}^2 = N_* + n_{\rm pix}(N_{\rm sky} + N_d + \sigma_{\rm RN}^2)$$
where $n_{\rm pix}$ is the number of pixels in the source aperture. (the source noise term $N_*$ already integrates over the aperture; the per-pixel terms get multiplied by $n_{\rm pix}$.)

---

## the master CCD equation

signal-to-noise ratio of a source measured in an aperture of $n_{\rm pix}$ pixels:

$$\boxed{\, {\rm SNR} = \frac{N_*}{\sqrt{\,N_* + n_{\rm pix}\!\left(N_{\rm sky} + N_d + \sigma_{\rm RN}^2\right)}\,} \,}$$

with $N_* = R_* t$ where $R_*$ is the source count rate (e$^-$/s) and $t$ is the exposure time. similarly $N_{\rm sky} = R_{\rm sky} t$ per pixel, and $N_d = D t$ per pixel.

this is the most-used equation in observational astronomy. every exposure-time calculator on every observatory's website is doing this calculation under the hood.

---

## the three regimes

the CCD equation has three asymptotic regimes, each with a different scaling of SNR with exposure time. recognising which one you are in is the first move on any oral.

### source-limited (bright objects)

$N_* \gg n_{\rm pix}(N_{\rm sky} + N_d + \sigma_{\rm RN}^2)$. the source itself dominates the noise.
$${\rm SNR} \approx \sqrt{N_*} = \sqrt{R_* t}$$
to double SNR, quadruple exposure time. typical for bright stars, photometric standards.

### sky-limited (most science)

$N_* \ll n_{\rm pix} N_{\rm sky}$, which is the case for most extragalactic and faint-star science.
$${\rm SNR} \approx \frac{N_*}{\sqrt{n_{\rm pix} N_{\rm sky}}} = \frac{R_* t}{\sqrt{n_{\rm pix} R_{\rm sky} t}} \propto \sqrt{t}$$
SNR still grows as $\sqrt{t}$, but with a worse prefactor than source-limited. you can also improve by reducing $n_{\rm pix}$ (smaller aperture, but then you lose source flux too) or going to a darker site.

### read-noise-limited (short exposures, IR, photon-counting)

$\sigma_{\rm RN}^2 \gg N_{\rm sky} + N_d$, typical when sky is very low (NIR with cold instrument, narrow-band imaging) or the exposure is short (high-speed photometry).
$${\rm SNR} \approx \frac{N_*}{\sqrt{n_{\rm pix}}\,\sigma_{\rm RN}} \propto t$$
crucially, SNR scales **linearly** with $t$ here, not $\sqrt{t}$. so if you take $K$ short exposures of total time $t$, you accumulate $K$ independent reads of read noise:
$${\rm SNR}_K \approx \frac{R_* t}{\sqrt{K n_{\rm pix}}\,\sigma_{\rm RN}}$$
which is $\sqrt{K}$ worse than one long exposure of duration $t$. **this is why you take long exposures**: in the read-noise-limited regime, fewer reads = more SNR for the same shutter-open time.

---

## a worked example on the board

target: a galaxy with rate $R_* = 5$ e$^-$/s in your aperture, sky $R_{\rm sky} = 10$ e$^-$/s/pixel, dark current $D = 0.01$ e$^-$/s/pixel, read noise $\sigma_{\rm RN} = 5$ e$^-$/pixel, aperture $n_{\rm pix} = 20$, exposure $t = 600$ s.

- $N_* = 5 \cdot 600 = 3000$ e$^-$
- $N_{\rm sky} = 10 \cdot 600 = 6000$ e$^-$/pixel
- $N_d = 0.01 \cdot 600 = 6$ e$^-$/pixel (negligible)
- $\sigma_{\rm RN}^2 = 25$ e$^-$/pixel (negligible)

$${\rm SNR} = \frac{3000}{\sqrt{3000 + 20(6000 + 6 + 25)}} = \frac{3000}{\sqrt{3000 + 120620}} = \frac{3000}{\sqrt{123620}} \approx \frac{3000}{352} \approx 8.5$$

interpretation: this is sky-limited (sky $\gg$ source). to double SNR I would need $4\times$ the integration time, or a darker site, or a smaller aperture (tighter PSF).

---

## CCD calibration steps (the standard pipeline)

raw frames are not science-ready. the calibration sequence:

1. **bias subtraction**. take many zero-second exposures, average to make a master bias, subtract from every frame. removes the constant pedestal.
2. **dark subtraction**. take long exposures with the shutter closed, scale to your science exposure time, subtract. removes the per-pixel thermal offset. usually negligible for cooled science CCDs, important for room-temperature ones.
3. **flat-fielding**. illuminate uniformly (twilight sky or dome lamp), divide your science frame by the normalised flat. corrects pixel-to-pixel QE variations and vignetting.
4. **fringing correction** (NIR or red imaging only): an interference pattern from sky lines reflecting between thin layers in the CCD. subtract a scaled fringe frame.
5. **defect masking**: bad columns, hot pixels, cosmic-ray hits.

after this, your image is in counts per pixel and is calibrated for instrumental systematics.

---

## aperture vs PSF photometry

once calibrated, you measure flux. two main strategies:

- **aperture photometry**: sum all pixel counts inside a chosen aperture, subtract a sky estimate from a surrounding annulus. simple, robust, but bad in crowded fields and suboptimal SNR if the aperture is too big or too small. the optimal aperture radius for SNR is $\sim 1.4\,$FWHM for a Gaussian PSF on a flat sky.
- **PSF photometry**: fit a model PSF (Moffat, empirical) at the source location simultaneously across blended sources. DAOPHOT, ALLFRAME, DOLPHOT, daofind+phot. wins in crowded fields like globular clusters. requires a well-characterised PSF.

a third option for resolved galaxies: **surface photometry** with isophote fitting (galfit, profit), which fits a Sérsic or multi-component model and extracts integrated magnitudes.

---

## cosmic rays and bad pixels

every $\sim$ minute a cosmic ray hits the CCD and dumps thousands of electrons into a pixel cluster. mitigations:
- take **multiple shorter exposures** and combine with sigma-clipping or median; cosmic rays appear in only one frame.
- for single deep exposures: detection algorithms (lacosmic, astroscrappy) flag and replace.

dithering (small pointing offsets between frames) also helps: bad pixels and CR hits land on different sky positions in each frame, so the median rejects them.

---

## linearity, saturation, and bright stars

as the well fills, the per-electron output voltage starts to depart from linear. at full well, the response saturates and additional charge spills into adjacent pixels (**blooming**). bright stars create vertical bleed columns and ghost halos.

practical exposure planning: keep peak source flux at $\sim 50\%$ of full well to stay safely linear and away from blooming. for very bright targets, use shorter exposures, narrower filters, or neutral-density.

---

## other detectors, where CCDs lose

- **CMOS** sensors: each pixel has its own amplifier, faster readout, lower power, but historically higher read noise and worse uniformity. sCMOS now competitive for science.
- **photon-counting detectors**: EMCCD (electron multiplication on-chip), MCP (microchannel plate), MKID (microwave kinetic inductance). useful when read noise dominates and you have very few photons per pixel per second.
- **HgCdTe (Hawaii arrays), InSb**: NIR detectors where silicon is transparent. JWST NIRCam, HST WFC3-IR, ground-based NIR cameras.
- **photographic plates**: historical only. nonlinear, low QE ($\sim 1\%$), but they covered huge areas before CCDs got big.
- **bolometers** (sub-mm), **photomultipliers** (UV, photon counting), **proportional counters** (X-ray): different physical detectors for different bands. see [Lab_High-Energy_MOC](../../00_Atlas/Lab_High-Energy_MOC.html) for X-ray equivalents.

---

## what this block buys me on the exam

the spine of any oral question on CCDs is:
1. **physics of the pixel**: photon $\to$ electron via silicon photoelectric absorption, stored in MOS well, shifted out and amplified. QE, full well, gain.
2. **the four noise sources**: source Poisson, sky Poisson, dark Poisson, read noise (Gaussian per readout). independent, variances add.
3. **write the CCD equation**: SNR $= N_*/\sqrt{N_* + n_{\rm pix}(N_{\rm sky} + N_d + \sigma_{\rm RN}^2)}$.
4. **identify the three regimes**: source-limited (SNR $\propto \sqrt{N_*}$), sky-limited (SNR $\propto N_*/\sqrt{n_{\rm pix} N_{\rm sky}}$, $\propto \sqrt{t}$), read-noise-limited (SNR $\propto N_*/\sigma_{\rm RN}$, $\propto t$, prefer fewer long exposures over many short ones).
5. **calibration sequence**: bias, dark, flat, defects/CRs.
6. **a worked numerical example** if asked: pick reasonable numbers, identify which regime, compute SNR.

## see also

- [Observational_Astrophysics_MOC](../../00_Atlas/Observational_Astrophysics_MOC.html) — Block 4 lives here
- [Earth atmosphere for observations](../../02_Zettel/Theory/Earth atmosphere for observations.html) — what the photons go through *before* the CCD
- [Aperture photometry](../../02_Zettel/Theory/Aperture photometry.html)
- [PSF photometry](../../02_Zettel/Theory/PSF photometry.html)
- [CCD calibration steps](../../02_Zettel/Theory/CCD calibration steps.html)
- [Magnitudes and photometric systems](../../02_Zettel/Theory/Magnitudes and photometric systems.html) — converts CCD counts into a magnitude
- [Distance ladder derivations](../../02_Zettel/Theory/Distance ladder derivations.html) — what the magnitudes are for
- [Lab_High-Energy_MOC](../../00_Atlas/Lab_High-Energy_MOC.html) — X-ray detectors (CCDs, microcalorimeters), the same SNR logic with different noise sources
