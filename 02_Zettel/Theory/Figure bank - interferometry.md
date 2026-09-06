---
layout: default
title: "Figure bank - interferometry"
---

# Figure bank - interferometry

this note is the visual index for the interferometry second brain. it keeps the scientific figures connected to the MOC instead of leaving them as random screenshots.

## rule for using figures

use a figure only when it answers a physical question:

- what is interfering?
- what is being Fourier transformed?
- what part of the instrument changes the signal?
- what artifact appears because the data are incomplete?
- what science result did the technique enable?

## wave optics and Fourier optics

<img src="{{ "/assets/images/young_double_slit_interference.svg" | relative_url }}" alt="young_double_slit_interference" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

local study diagram: Young/fringe geometry. use with [Superposition and interference](../../02_Zettel/Theory/interf/Superposition and interference.html) and [Young experiment as a stellar interferometer](../../02_Zettel/Theory/interf/Young experiment as a stellar interferometer.html).

<img src="{{ "/assets/images/airy_pattern_generated.png" | relative_url }}" alt="airy_pattern_generated" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

local study plot from $I(x)=[2J_1(x)/x]^2$. use with [Fraunhofer diffraction](../../02_Zettel/Theory/interf/Fraunhofer diffraction.html), [Diffraction patterns of simple apertures](../../02_Zettel/Theory/interf/Diffraction patterns of simple apertures.html), and [Point spread function](../../02_Zettel/Theory/interf/Point spread function.html).

<img src="{{ "/assets/images/abbe_fourier_optics_orders.svg" | relative_url }}" alt="abbe_fourier_optics_orders" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

local study diagram: Abbe/Fourier-optics spatial-frequency orders. use with [Abbe experiment and Fourier optics](../../02_Zettel/Theory/interf/Abbe experiment and Fourier optics.html) and [Optical transfer function](../../02_Zettel/Theory/interf/Optical transfer function.html).

## visibility and aperture synthesis

<img src="{{ "/assets/images/van_cittert_zernike_geometry.svg" | relative_url }}" alt="van_cittert_zernike_geometry" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

local study diagram: two antennas measure coherence, and coherence is a Fourier component of sky brightness. use with [Van Cittert-Zernike theorem](../../02_Zettel/Theory/interf/Van Cittert-Zernike theorem.html).

<img src="{{ "/assets/images/uv_coverage_dirty_beam_demo.png" | relative_url }}" alt="uv_coverage_dirty_beam_demo" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

local synthetic demo: $(u,v)$ samples and the corresponding dirty beam. use with [The (u, v) plane](../../02_Zettel/Theory/interf/The (u, v) plane.md), [Aperture synthesis principle](../../02_Zettel/Theory/interf/Aperture synthesis principle.html), and [Dirty beam and dirty image](../../02_Zettel/Theory/interf/Dirty beam and dirty image.html).

<img src="{{ "/assets/images/nrao_snapshot_uv_coverage.jpg" | relative_url }}" alt="nrao_snapshot_uv_coverage" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

<img src="{{ "/assets/images/nrao_snapshot_dirty_beam.jpg" | relative_url }}" alt="nrao_snapshot_dirty_beam" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

<img src="{{ "/assets/images/nrao_snapshot_dirty_image.jpg" | relative_url }}" alt="nrao_snapshot_dirty_image" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

source: S. T. Myers, NRAO Synthesis Imaging Summer School, 30 s VLA A-configuration snapshot of a gravitational lens. use with [Dirty beam and dirty image](../../02_Zettel/Theory/interf/Dirty beam and dirty image.html) and [CLEAN algorithm](../../02_Zettel/Theory/interf/CLEAN algorithm.html).

## radio signal chain and sensitivity

<img src="{{ "/assets/images/specific_intensity_flux_beam.svg" | relative_url }}" alt="specific_intensity_flux_beam" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

local study diagram: $I_\nu$ to beam-weighted $S_\nu$. use with [Specific intensity and flux density](../../02_Zettel/Theory/interf/Specific intensity and flux density.html).

<img src="{{ "/assets/images/antenna_effective_area_gain.svg" | relative_url }}" alt="antenna_effective_area_gain" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

local study diagram: effective collecting area, gain, and beam response. use with [Antenna effective area and gain](../../02_Zettel/Theory/interf/Antenna effective area and gain.html).

<img src="{{ "/assets/images/radiometer_noise_scaling.png" | relative_url }}" alt="radiometer_noise_scaling" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

local plot: $\sigma\propto1/\sqrt{\Delta\nu t}$. use with [Radiometer equation and SEFD](../../02_Zettel/Theory/interf/Radiometer equation and SEFD.html).

<img src="{{ "/assets/images/alma_signal_path_official.gif" | relative_url }}" alt="alma_signal_path_official" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

source: ALMA Observatory, "How ALMA Works". use with [Radio interferometer architecture](../../02_Zettel/Theory/interf/Radio interferometer architecture.html).

<img src="{{ "/assets/images/radio_interferometer_signal_chain.svg" | relative_url }}" alt="radio_interferometer_signal_chain" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

local study diagram: sky wave to visibility to image. use with [Two-element correlator](../../02_Zettel/Theory/interf/Two-element correlator.html).

<img src="{{ "/assets/images/downconversion_mixer_if.svg" | relative_url }}" alt="downconversion_mixer_if" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

local study diagram: heterodyne mixing and intermediate frequency. use with [Downconversion of signals in radio interferometers](../../02_Zettel/Theory/interf/Downconversion of signals in radio interferometers.html).

<img src="{{ "/assets/images/digitization_quantization_sampling.svg" | relative_url }}" alt="digitization_quantization_sampling" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

local study diagram: sampling and quantization of the IF voltage. use with [Digitization quantization and timing in radio interferometry](../../02_Zettel/Theory/interf/Digitization quantization and timing in radio interferometry.html).

<img src="{{ "/assets/images/radio_observing_workflow.svg" | relative_url }}" alt="radio_observing_workflow" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

local workflow diagram: science goal to validated image. use with [Steps in radio interferometric observations](../../02_Zettel/Theory/interf/Steps in radio interferometric observations.html).

## optical instruments and VLBI science

<img src="{{ "/assets/images/vlti_delay_line_eso9811a.jpg" | relative_url }}" alt="vlti_delay_line_eso9811a" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

source: ESO image eso9811a. use with [Delay lines and path-length equalization](../../02_Zettel/Theory/interf/Delay lines and path-length equalization.html) and [VLTI Very Large Telescope Interferometer](../../02_Zettel/Theory/interf/VLTI Very Large Telescope Interferometer.html).

<img src="{{ "/assets/images/eht_planet_scale_array_eso1907j.jpg" | relative_url }}" alt="eht_planet_scale_array_eso1907j" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

source: ESO image eso1907j. use with [Very Long Baseline Interferometry VLBI](../../02_Zettel/Theory/interf/Very Long Baseline Interferometry VLBI.html) and [Event Horizon Telescope EHT](../../02_Zettel/Theory/interf/Event Horizon Telescope EHT.html).

<img src="{{ "/assets/images/eht_m87_eso1907a.jpg" | relative_url }}" alt="eht_m87_eso1907a" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

source: EHT Collaboration image hosted by ESO as eso1907a. use with [Event Horizon Telescope EHT](../../02_Zettel/Theory/interf/Event Horizon Telescope EHT.html) and [AGN and supermassive black holes](../../02_Zettel/Theory/interf/AGN and supermassive black holes.html).

## polarization and emission physics

<img src="{{ "/assets/images/polarization_stokes_ellipse.svg" | relative_url }}" alt="polarization_stokes_ellipse" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

local study diagram: Stokes parameters and polarization ellipse. use with [Polarization in interferometry](../../02_Zettel/Theory/interf/Polarization in interferometry.html).

<img src="{{ "/assets/images/radiation_mechanisms_spectra.png" | relative_url }}" alt="radiation_mechanisms_spectra" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

local schematic plot: synchrotron, free-free, thermal dust, and line/maser spectral fingerprints. use with [Radiation mechanisms in astronomy and interferometers](../../02_Zettel/Theory/interf/Radiation mechanisms in astronomy and interferometers.html).

## source trail

- ALMA Observatory, "How ALMA Works": https://www.almaobservatory.org/en/about-alma/how-alma-works/
- ESO, "First Image of a Black Hole" / eso1907a: https://www.eso.org/public/images/eso1907a/
- ESO, "The EHT, a Planet-Scale Array" / eso1907j: https://www.eso.org/public/images/eso1907j/
- ESO, "The VLTI Delay Line" / eso9811a: https://www.eso.org/public/images/eso9811a/
- NRAO Synthesis Imaging Summer School, S. T. Myers, snapshot imaging page: https://www.aoc.nrao.edu/~smyers/Synth2000/Synth00-21.html

## see also

- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
- [Interferometry equation sheet](../../02_Zettel/Theory/interf/Interferometry equation sheet.html)
- [Aperture synthesis principle](../../02_Zettel/Theory/interf/Aperture synthesis principle.html)
- [Radio interferometer architecture](../../02_Zettel/Theory/interf/Radio interferometer architecture.html)
