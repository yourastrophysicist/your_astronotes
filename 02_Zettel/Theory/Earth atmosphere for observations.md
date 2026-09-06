---
layout: default
title: "Earth atmosphere for observations"
---

the atmosphere is the **last optical element** in any ground-based light path, and an actively bad one. before the photon hits the CCD it has spent its last microsecond inside 100 km of perturbed gas that does four annoying things: it absorbs at certain wavelengths (transparency), it dims the photon at all wavelengths (extinction), it twinkles its arrival time (scintillation), and it scrambles its arrival angle (seeing). this note collects all four into one comprehensive picture, with the formulas I need on the board.

source: Lecture 2 ("Earth atmosphere") of the Obs Astrophysics course at U Padua, with reference text Lena et al., *Observational Astrophysics*. companion to [Observational_Astrophysics_MOC](../../00_Atlas/Observational_Astrophysics_MOC.md) Block 2.

---

## the atmosphere as a stack of layers

| layer | altitude | composition / state | astronomical relevance |
|---|---|---|---|
| troposphere | 0 to 12 km | turbulent, $\sim 80\%$ of mass, weather | most seeing happens here, especially the boundary layer at $< 1$ km |
| stratosphere | 12 to 50 km | ozone layer at 20 to 30 km | UV opacity ($\lambda < 300$ nm fully blocked) |
| mesosphere | 50 to 85 km | thin, cold | airglow emission lines (OH, O, Na) at $\sim 90$ km |
| thermosphere | 85 to 600 km | hot, partially ionised | aurorae, ionosphere reflects long radio |
| exosphere | $> 600$ km | escape regime | not optically relevant |

the **scale height** $H = k_BT/(\mu g) \approx 8$ km in the lower troposphere sets the exponential pressure decline, $P(z) = P_0 e^{-z/H}$, which controls how much air sits above an observatory.

a high-altitude observatory at $4200$ m (Mauna Kea, Cerro Paranal) sits above $\sim 40\%$ of the atmosphere by mass. the difference shows up in NIR transparency, sky brightness, and seeing simultaneously. that is why the world's premier optical sites are all on dry mountain tops near the trade-wind inversion.

---

## transparency, the wavelength windows

the atmosphere is opaque at most wavelengths. observing windows are the gaps:

- **visible** ($\sim 320$ nm to $1$ $\mu$m): mostly transparent, ozone cuts off the UV.
- **near-IR**: J ($1.25\,\mu$m), H ($1.65\,\mu$m), K ($2.2\,\mu$m), L ($3.5\,\mu$m), M ($4.8\,\mu$m). water vapour absorption between bands is sharp; that is why these letter bands have specific shapes.
- **mid-IR** ($\sim 8$ to $25\,\mu$m): partially open, dominated by thermal sky background.
- **far-IR** ($\sim 25$ to $300\,\mu$m): completely opaque from the ground (water vapour). only space (Herschel, JWST/MIRI partly) or balloons (SOFIA) work here.
- **sub-mm** ($\sim 300\,\mu$m to $1$ mm): a few transparent windows in dry sites (ALMA at $5000$ m). water vapour again.
- **radio** ($> 1$ mm to $\sim 30$ m): almost fully transparent. ionosphere blocks $> 30$ m wavelengths.

the chief absorbers, in order: **water vapour** (NIR, mid-IR, sub-mm), **CO$_2$** (IR), **O$_2$** (red, microwave), **O$_3$** (UV), **H$_2$O** + others combined (the deep IR opacity). UV cutoff at 300 nm is a hard limit from ozone and is why we need space telescopes for FUV science.

---

## extinction (atmospheric, the Bouguer line)

at all transparent wavelengths the atmosphere still **dims** the photons by absorption + scattering. the path length depends on zenith distance $z$ via the **airmass** $X$:
$$X(z) \approx \sec z = 1/\cos z$$
(for $z \lesssim 60°$; at higher $z$ a curved-Earth correction matters).

Beer-Lambert law: the observed magnitude in some band $\lambda$ at airmass $X$ is
$$m_{\rm obs}(\lambda) = m_0(\lambda) + k(\lambda)\, X$$
where $m_0$ is the magnitude above the atmosphere and $k(\lambda)$ is the **extinction coefficient** (mag per airmass) for that band on that night. typical values at a good site: $k_U \sim 0.5$, $k_B \sim 0.25$, $k_V \sim 0.15$, $k_R \sim 0.1$, $k_I \sim 0.07$.

physical breakdown of $k(\lambda)$:
1. **Rayleigh scattering** by molecules, $\propto \lambda^{-4}$, dominates blue. this is also why the daytime sky is blue and sunsets are red.
2. **Mie scattering** by aerosols (dust, salt), weaker $\lambda$ dependence, varies with weather.
3. **molecular absorption** in narrow bands (O$_3$, H$_2$O, O$_2$, CO$_2$), strong but localised.

the observational technique: observe a **photometric standard star** (Landolt, SDSS) at multiple airmasses through the night, fit $m_{\rm obs}$ vs $X$, the slope is $k(\lambda)$ and the intercept is the zeropoint. this is the **Bouguer line**. use it to correct your science target back to the top of the atmosphere.

a useful fact: for percent-level photometry you need $X \lesssim 1.5$ (zenith distance $\lesssim 50°$) and a stable night.

---

## scintillation, the temporal flicker

short-timescale ($\sim 1$ to $100$ ms) intensity fluctuations of point sources, caused by interference between light paths through density inhomogeneities in the atmosphere. the relevant rough scaling for a small telescope:
$$\frac{\sigma_I}{I} \propto X^{1.75}\, D^{-2/3}\, t^{-1/2}$$
with $D$ the telescope aperture and $t$ the exposure time. so:
- bigger telescopes scintillate less (the aperture averages over many independent atmospheric cells)
- longer exposures scintillate less (in the photon-counting limit)
- higher airmass scintillates more (more atmosphere)

scintillation matters mainly for high-precision time-series photometry (transits, asteroseismology). for typical broadband imaging the photon noise dominates.

---

## seeing, the spatial blurring

the same turbulent cells that cause scintillation also distort the **wavefront** of incoming light. a plane wave from a distant star arrives at the telescope as a wrinkled wave, and the focal-plane image is no longer a diffraction-limited Airy disk; instead it is a smeared blob of width $\theta_{\rm seeing}$.

the central scale is the **Fried parameter** $r_0$, the diameter of an atmospheric coherence patch over which the wavefront is roughly flat. for a Kolmogorov turbulent atmosphere:
$$r_0 \propto \lambda^{6/5}\, (\sec z)^{-3/5}$$

so $r_0$ grows with wavelength. seeing is **better in the IR**.

the resulting image FWHM is
$$\theta_{\rm seeing} \approx \lambda / r_0 \propto \lambda^{-1/5}$$

so the seeing FWHM has only a weak wavelength dependence. typical values: $r_0 \approx 10$ cm in the visible at a median site, giving $\theta_{\rm seeing} \approx 1''$. at Mauna Kea on a good night, $r_0 \approx 20$ cm and $\theta_{\rm seeing} \approx 0.5''$. this is the practical resolution of a ground-based optical telescope without correction, no matter how big the mirror.

key consequence: a $4$ m and a $10$ m telescope both deliver $\sim 0.5''$ images in the visible at the same site. the bigger telescope wins on photon collection, not resolution. only adaptive optics breaks this.

### the two seeing regimes

- **$D < r_0$**: telescope is "small," diffraction-limited, FWHM $\approx 1.22 \lambda/D$. typical for amateur scopes in the visible.
- **$D > r_0$**: telescope is "big," seeing-limited, FWHM $\approx \lambda/r_0$. typical for professional telescopes in the visible.

the crossover $D = r_0 \sim 10$ cm is *very* small. effectively all professional optical telescopes are in the seeing-limited regime, and that is what motivates AO.

---

## adaptive optics, the workaround

AO measures the wavefront in real time and corrects it with a **deformable mirror** before the science detector sees it. components:
- **wavefront sensor** (Shack-Hartmann or curvature) to measure the local tilt across many subapertures
- **deformable mirror** with $\sim 100$ to $10^4$ actuators
- **control loop** at $\sim 1$ kHz, since the atmosphere evolves on $\sim 10$ ms timescales

the headline metric is the **Strehl ratio** $S = I_{\rm peak}^{\rm obs}/I_{\rm peak}^{\rm diffraction-limited}$, between $0$ and $1$. a well-running AO system delivers $S > 0.5$ in the K-band (where $r_0$ is large), much less in the V-band.

key limits:
- **isoplanatic angle** $\theta_0 \sim \lambda^{6/5}$, typically $\sim 30''$ in the K-band. AO works only over patches this size; far from the guide star, correction degrades.
- **need a bright reference**. natural guide stars are scarce; the workaround is **laser guide stars**, sodium lasers exciting the mesospheric Na layer at $\sim 90$ km to create an artificial point source. tip-tilt still requires a natural star nearby.
- **AO is naturally NIR-friendly**. higher Strehl in K than in V, both because $r_0$ is larger and because the same wavefront error is a smaller fraction of $\lambda$.

modern AO (MCAO, GLAO, MOAO) extends correction to wider fields by using multiple guide stars and tomographic reconstruction.

---

## sky brightness

the sky is not black. its surface brightness has several components, and the dominant one depends on band and lunar phase:

| component | dominant band | notes |
|---|---|---|
| moonlight | optical | scales with phase, dominates at full moon, blue side worst |
| airglow | NIR + visible | atmospheric chemiluminescence (OH bands $1$ to $2.5\,\mu$m, sodium D, $[O\,\textsc{i}]$) |
| zodiacal light | visible + NIR | sunlight scattered by interplanetary dust, ecliptic-pole minimum |
| thermal sky | mid-IR + sub-mm | blackbody at $\sim 270$ K, dominant for $\lambda \gtrsim 2.5\,\mu$m |
| diffuse Galactic light | UV + visible | starlight scattered by ISM dust, weak |

typical values at a dark site, no moon, in $V$: $\mu_V \approx 21.7$ mag/arcsec$^2$. moonlit nights drop this by $\sim 4$ mag. light-polluted urban sky is $\sim 18$ mag/arcsec$^2$ (10$\times$ brighter), the reason astronomy migrated to mountain tops.

practical consequence: faint-source imaging is **sky-noise-limited**, so the noise per pixel is $\propto \sqrt{N_{\rm sky}}$. a small telescope at a dark site can outperform a big one in a city, for surface-brightness-limited science.

---

## atmospheric refraction and dispersion

**refraction**: the apparent zenith distance $z'$ is smaller than the true $z$ because atmospheric refractive index $> 1$ bends rays toward the vertical. for moderate altitudes:
$$R \equiv z - z' \approx 60''\,\tan z$$
diverges at the horizon (where standard formulas fail; the actual horizon refraction is $\sim 35'$ at sea level, which is why you see the Sun for a couple of minutes after it has geometrically set).

refraction matters for absolute astrometry and for telescope tracking on short timescales.

**dispersion**: the refractive index depends on $\lambda$, so the refraction angle does too. a star observed at $z > 0$ in white light forms a small **spectrum** elongated radially, with blue light displaced more than red. for high-resolution imaging or spectroscopy at $z > 30°$ you need an **atmospheric dispersion corrector** (ADC), a counter-rotating prism pair that cancels the chromatic shift.

---

## what this block buys me on the exam

the spine of any oral question on the atmosphere is:
1. **identify the four problems**: transparency, extinction, scintillation, seeing.
2. **give one quantitative formula per problem**: Beer-Lambert with airmass for extinction, $r_0 \propto \lambda^{6/5}$ for seeing, $\theta_{\rm seeing} \approx \lambda/r_0$ for image FWHM, $\sigma_I/I \propto X^{1.75} D^{-2/3} t^{-1/2}$ for scintillation.
3. **explain why we go to high altitude**: dry, above the inversion layer, less air column means better transparency, less extinction, less seeing, less sky brightness. all four problems get better simultaneously.
4. **explain what AO does**: real-time wavefront measurement and correction, breaks the seeing limit, only really works in NIR, needs a guide star. the Strehl ratio is the figure of merit.
5. **finish with where space wins**: UV ($< 300$ nm), far-IR ($25$ to $300\,\mu$m), and any science where stability or photometric precision beats raw aperture.

## see also

- [Observational_Astrophysics_MOC](../../00_Atlas/Observational_Astrophysics_MOC.md) — Block 2 lives here
- [Adaptive optics overview](../../02_Zettel/Theory/interf/Adaptive optics overview.md)
- [Atmospheric extinction](../../02_Zettel/Theory/interf/Atmospheric extinction.md)
- [Atmospheric seeing](../../02_Zettel/Theory/interf/Atmospheric seeing.md)
- [CCD detectors and SNR](../../02_Zettel/Theory/CCD detectors and SNR.md) — the next stop in the photon's journey
- [Magnitudes and photometric systems](../../02_Zettel/Theory/Magnitudes and photometric systems.md) — what we do with the photometric standards
- [Sky brightness](../../02_Zettel/Theory/Sky brightness.md)
- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md)
- [Lab_High-Energy_MOC](../../00_Atlas/Lab_High-Energy_MOC.md) — the X-ray analogue of "the atmosphere as a barrier"
