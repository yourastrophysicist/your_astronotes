---
layout: "default"
title: "Aperture synthesis principle"
---
{% raw %}
# Aperture synthesis principle

the central technique of modern interferometry. **build an effective aperture as large as the longest baseline by combining many sub-apertures and Earth's rotation.** invented by Martin Ryle (Nobel 1974) for radio astronomy, now the standard practice of every interferometer.

## the principle

a single dish of diameter $D$ provides angular resolution $\lambda/D$ but only at one *spatial frequency* (averaged over the aperture). an array of $N$ dishes spread over baseline $B$ provides:

- angular resolution $\lambda/B$
- but only at the spatial frequencies *sampled by the baselines*

so an array does not directly produce an image. it produces *Fourier components* of the image. **aperture synthesis** is the procedure of collecting enough Fourier components, then inverse-transforming and deconvolving to recover the image.

## the (u, v) plane

each baseline $\mathbf B_{ij}$ samples one Fourier component at spatial frequency $\mathbf u_{ij} = \mathbf B_{ij}/\lambda$. an array with $N$ telescopes has $N(N-1)/2$ unique baselines, hence that many simultaneous (u, v) samples.

drawing all the baselines as points in the $(u, v)$ plane gives the **(u, v) coverage** at one instant.

## Earth-rotation aperture synthesis

the killer move. as the Earth rotates, the projection of each physical baseline onto the plane perpendicular to the source line of sight *changes*. a fixed baseline traces an *elliptical arc* in the (u, v) plane over a night.

for $N(N-1)/2$ baselines and 12 hours of tracking, the (u, v) plane fills up with $\sim N(N-1)/2 \times $ (number of integration intervals) samples. for VLA (27 dishes) over 8 hours, that's $\sim 350 \times 10^4 = 3.5 \times 10^6$ samples.

the resulting (u, v) coverage *synthesizes* the equivalent of an aperture covering all those baseline lengths and orientations. hence "aperture synthesis."

## the synthesized aperture

if I imagine projecting all the baselines and their rotation arcs onto a 2D pupil, the *envelope* of all the sampled points defines an effective aperture. this is the **synthesized aperture**.

key features:
- **diameter**: $\sim 2 B_{\max}$ (the longest baseline appears at $\pm$ orientations as the source moves)
- **shape**: depends on declination — a source at the celestial equator gives elliptical (u, v) tracks; a source at the pole gives circular ones
- **density**: depends on array geometry and integration time

## what aperture synthesis lets us do

three things a single aperture cannot:

### 1. resolution beyond a single dish

$\theta = \lambda/B_{\max}$ where $B_{\max}$ can be vastly larger than any feasible single dish. VLA: 36 km baselines vs 25m dishes — 1500× resolution boost.

### 2. high-fidelity imaging

with sufficient (u, v) coverage, the dirty image is close to the true image (low sidelobes), and CLEAN/deconvolution recover faithful images.

### 3. multi-frequency synthesis

if the source spectrum is known/parameterizable, observations at *different wavelengths* can fill in *more* (u, v) coverage (because $\mathbf u = \mathbf B/\lambda$ scales with $\lambda$). modern correlators routinely use this.

## the tradeoff

**resolution** scales with $B_{\max}$ but **collecting area** scales only with $N \times \text{(dish area)}$. so an interferometer's sensitivity is *much smaller* than a single dish covering the same baseline:

$\text{sensitivity} \propto N \times A_{\rm dish}$
$\text{resolution} \propto B_{\max}$

VLA's collecting area is $27 \times \pi \times 12.5^2 \approx 13000$ m². a single dish of the same area would have diameter 130 m — and would be much more sensitive than VLA on extended emission. but VLA's *resolution* is set by 36 km baselines, not 130m diameter.

so the choice between single-dish and interferometer is a tradeoff between sensitivity (favor single dish) and resolution (favor interferometer).

## the imaging procedure

1. **calibrate** visibilities (phase, amplitude, bandpass)
2. **grid** the visibilities on a regular (u, v) grid (with weighting that controls beam shape)
3. **inverse FT** to get the dirty image
4. **deconvolve** with CLEAN or MEM to get the clean image
5. **restore** with a clean beam (Gaussian fit to the dirty beam's central lobe)
6. **report** the cleaned image plus any residuals

each step has its own tradeoffs and pitfalls — see [CLEAN algorithm](./CLEAN%20algorithm.html), [Calibration overview](./Calibration%20overview.html), etc.

## why optical interferometry is harder

radio: signals are voltages, can be heterodyned, recorded, and correlated post-hoc. (u, v) coverage is filled efficiently because Earth-rotation synthesis works. atmospheric phases are slow (~minutes) and trackable.

optical: light must travel down a real beam path. delays equalized in real time. atmospheric phases corrupt every measurement (~ms timescale). aperture synthesis is *much* harder, requiring closure phase, fringe trackers, and AO.

so historically, radio aperture synthesis is a mature technique (since 1960s). optical aperture synthesis only really matured in the 2010s with COAST, IOTA, and now CHARA + GRAVITY.

## who invented it

**Martin Ryle** at Cambridge (1957-1974). developed Earth-rotation aperture synthesis, won the Nobel Prize 1974 with Antony Hewish (for pulsars). the **One-Mile Telescope** at Cambridge was the first imaging aperture-synthesis instrument.

## scientific figure

![07_Images/Interferometry/uv_coverage_dirty_beam_demo.png](../../../assets/images/uv_coverage_dirty_beam_demo.png)

reading cue: aperture synthesis is the act of collecting many Fourier samples. the image quality is not only about the longest baseline; it is about how well the sampled $(u,v)$ plane constrains the Fourier transform.

source: local synthetic demo generated from a rotating Y-like array model.

## see also

- [The (u, v) plane](./The%20%28u%2C%20v%29%20plane.html)
- [Earth-rotation aperture synthesis](./Earth-rotation%20aperture%20synthesis.html)
- [Optimal array geometry](./Optimal%20array%20geometry.html)
- [Dirty beam and dirty image](./Dirty%20beam%20and%20dirty%20image.html)
- [CLEAN algorithm](./CLEAN%20algorithm.html)
- [Astronomical_Interferometry_MOC](../../../04_Atlas/Astronomical_Interferometry_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (28)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Abbe%20experiment%20and%20Fourier%20optics.html" class="backlink-item">Abbe experiment and Fourier optics</a></li>
    <li class="backlink-item-wrap"><a href="../Abbe%20experiment%20and%20Fourier%20optics.html" class="backlink-item">Abbe experiment and Fourier optics</a></li>
    <li class="backlink-item-wrap"><a href="./Aperture%20masking.html" class="backlink-item">Aperture masking</a></li>
    <li class="backlink-item-wrap"><a href="../Aperture%20masking.html" class="backlink-item">Aperture masking</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astronomical_Interferometry_MOC.html" class="backlink-item">Astronomical_Interferometry_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Crowding%20limitation.html" class="backlink-item">Crowding limitation</a></li>
    <li class="backlink-item-wrap"><a href="../Crowding%20limitation.html" class="backlink-item">Crowding limitation</a></li>
    <li class="backlink-item-wrap"><a href="./Diffraction%20patterns%20of%20simple%20apertures.html" class="backlink-item">Diffraction patterns of simple apertures</a></li>
    <li class="backlink-item-wrap"><a href="../Diffraction%20patterns%20of%20simple%20apertures.html" class="backlink-item">Diffraction patterns of simple apertures</a></li>
    <li class="backlink-item-wrap"><a href="./Dirty%20beam%20and%20dirty%20image.html" class="backlink-item">Dirty beam and dirty image</a></li>
    <li class="backlink-item-wrap"><a href="../Dirty%20beam%20and%20dirty%20image.html" class="backlink-item">Dirty beam and dirty image</a></li>
    <li class="backlink-item-wrap"><a href="./Earth-rotation%20aperture%20synthesis.html" class="backlink-item">Earth-rotation aperture synthesis</a></li>
    <li class="backlink-item-wrap"><a href="../Earth-rotation%20aperture%20synthesis.html" class="backlink-item">Earth-rotation aperture synthesis</a></li>
    <li class="backlink-item-wrap"><a href="./Figure%20bank%20-%20interferometry.html" class="backlink-item">Figure bank - interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../Figure%20bank%20-%20interferometry.html" class="backlink-item">Figure bank - interferometry</a></li>
    <li class="backlink-item-wrap"><a href="./Heterodyne%20vs%20direct%20detection.html" class="backlink-item">Heterodyne vs direct detection</a></li>
    <li class="backlink-item-wrap"><a href="./Optical%20transfer%20function.html" class="backlink-item">Optical transfer function</a></li>
    <li class="backlink-item-wrap"><a href="../Optical%20transfer%20function.html" class="backlink-item">Optical transfer function</a></li>
    <li class="backlink-item-wrap"><a href="./Optimal%20array%20geometry.html" class="backlink-item">Optimal array geometry</a></li>
    <li class="backlink-item-wrap"><a href="../Stellar%20surface%20imaging.html" class="backlink-item">Stellar surface imaging</a></li>
    <li class="backlink-item-wrap"><a href="./The%20%28u%2C%20v%29%20plane.html" class="backlink-item">The (u, v) plane</a></li>
    <li class="backlink-item-wrap"><a href="../The%20%28u%2C%20v%29%20plane.html" class="backlink-item">The (u, v) plane</a></li>
    <li class="backlink-item-wrap"><a href="./Van%20Cittert-Zernike%20theorem.html" class="backlink-item">Van Cittert-Zernike theorem</a></li>
    <li class="backlink-item-wrap"><a href="../Van%20Cittert-Zernike%20theorem.html" class="backlink-item">Van Cittert-Zernike theorem</a></li>
    <li class="backlink-item-wrap"><a href="../Why%20interferometry.html" class="backlink-item">Why interferometry</a></li>
    <li class="backlink-item-wrap"><a href="./Why%20interferometry.html" class="backlink-item">Why interferometry</a></li>
    <li class="backlink-item-wrap"><a href="./Young%20experiment%20as%20a%20stellar%20interferometer.html" class="backlink-item">Young experiment as a stellar interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../Young%20experiment%20as%20a%20stellar%20interferometer.html" class="backlink-item">Young experiment as a stellar interferometer</a></li>
  </ul>
</div>
