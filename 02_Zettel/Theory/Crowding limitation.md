---
layout: default
title: "Crowding limitation"
---

# Crowding limitation

a fundamental limit on how *many sources* a sparse interferometer can image at once. with too many sources in the field of view, the dirty beam's sidelobes from each source pile up, contaminating every other source. there is a maximum source density that can be cleanly imaged.

## the issue

a single point source produces a dirty image that is just a scaled, shifted copy of the dirty beam. CLEAN can recover it cleanly. two well-separated point sources: each produces its own dirty beam pattern; CLEAN handles both fine.

but if many sources are present in the field, their dirty beams *overlap*. each source's sidelobes contaminate every other source's measurement. eventually, the contamination dominates and individual sources cannot be separated.

## the math

<img src="{{ "/assets/images/Crowding_limitation.jpg" | relative_url }}" alt="Crowding limitations and field of view constraints in sparse interferometric arrays caused by synthesized grating lobes." class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />


let $N_{\rm src}$ sources be in the field, each producing a dirty beam pattern with peak $I_{\rm peak}$ and **integrated sidelobe ratio** $\eta_{\rm SL}$ (typical 0.1-0.5).

the spurious contribution at a random pixel from $N_{\rm src}$ sources is roughly $N_{\rm src} \cdot \eta_{\rm SL} \cdot I_{\rm peak}$. for this to not exceed the source-to-source flux:

$$N_{\rm src} \lesssim \frac{1}{\eta_{\rm SL}}$$

so for $\eta_{\rm SL} = 0.1$ (a moderately good dirty beam): $N_{\rm src} \lesssim 10$. ten sources per dirty-beam area.

## the field of view

the dirty-beam-area sets the field of view: $\Omega_{\rm db} \sim \theta_{\rm res}^2$. so the source density limit is

$$N_{\rm density} \lesssim \frac{1}{\eta_{\rm SL}} \cdot \frac{1}{\theta_{\rm res}^2}$$

for VLA-A at L-band ($\theta_{\rm res} \sim 1''$): $\sim 10$ sources per square arcsecond, after primary beam.

## why this matters for stellar fields

a typical galactic-plane field has $\sim 10^4$ stars per square degree at $K = 10$. for VLTI ($\theta_{\rm res} \sim 3$ mas), the field of view is small enough that crowding is rarely an issue. but for *survey* interferometry of dense fields (e.g. the Galactic Center, where you have many resolved sources within an arcsecond), crowding matters.

## the dirty-beam quality

the *integrated sidelobe ratio* $\eta_{\rm SL}$ is a property of the (u, v) coverage:
- denser, more uniform (u, v) → smaller $\eta_{\rm SL}$, less crowding
- sparser (u, v), Earth-rotation gaps → larger $\eta_{\rm SL}$, worse crowding

so designing arrays with good (u, v) coverage is partly about *reducing crowding* in addition to improving resolution.

## the labyrie hypertelescope solution

[hypertelescope](../../02_Zettel/Theory/interf/Hypertelescope.html) schemes (Labeyrie 1996) use **pupil densification** to create a "concentrated" version of the dirty beam — most of the energy in the central peak, with much smaller sidelobes. this reduces crowding and lets sparse arrays image more densely-populated fields.

essentially: trade some signal-to-noise for a much better PSF.

## crowding vs confusion

related concept in radio astronomy: **confusion limit**. when the source density is so high that *unrelated* radio sources contribute to every beam, you cannot detect a new source below a flux threshold even with infinite integration time. the confusion limit depends on dirty beam, source counts, and the survey strategy.

confusion is more about extragalactic statistics; crowding is more about specific imaged fields. but both arise from the same fundamental issue: limited beam, finite source density.

## practical mitigation

three approaches:

1. **better (u, v) coverage**: more antennas, longer tracks, cleaner dirty beam
2. **deeper CLEAN**: iterate CLEAN longer to suppress sidelobes more aggressively. risks "over-cleaning" (artifacts)
3. **multi-frequency synthesis**: combining (u, v) data from multiple frequencies gives a smoother synthesized beam — but only if the source spectra are known/parameterizable
4. **modeling**: parametric model fitting (point sources at known positions) instead of CLEAN. works when the field is known to contain only point sources

## the labeyrie textbook treatment

chapter 4 of Labeyrie discusses the crowding limit for *sparse-aperture* arrays specifically (where dirty beams have very high sidelobes). for filled-aperture or near-filled arrays (VLA, ALMA), crowding is rarely the binding constraint — sensitivity or atmospheric phase is.

## see also

- [Dirty beam and dirty image](../../02_Zettel/Theory/interf/Dirty beam and dirty image.html)
- [The (u, v) plane](../../02_Zettel/Theory/interf/The (u, v) plane.md)
- [Aperture synthesis principle](../../02_Zettel/Theory/interf/Aperture synthesis principle.html)
- [CLEAN algorithm](../../02_Zettel/Theory/interf/CLEAN algorithm.html)
- [Hypertelescope](../../02_Zettel/Theory/interf/Hypertelescope.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
