---
layout: default
title: "Earth-rotation aperture synthesis"
---

# Earth-rotation aperture synthesis

the move that turned interferometry from a "few baselines" technique into a full imaging machine. as the Earth rotates, the *projection* of each fixed baseline onto the source-perpendicular plane traces an ellipse in the (u, v) plane, sampling many spatial frequencies with each pair of antennas.

## why it works

a baseline is a vector between two telescopes, fixed in Earth-frame coordinates. but the source moves across the sky as the Earth rotates. so the projection of the baseline onto the plane perpendicular to the line of sight to the source *changes continuously*.

a fixed baseline, observed for several hours, samples not one (u, v) point but a *track* — an arc through the (u, v) plane. doing this for every pair of antennas in an array fills the (u, v) plane *quickly* with a small number of physical antennas.

without Earth-rotation synthesis, an N-element array gives only N(N-1)/2 (u, v) points. with full Earth-rotation synthesis, the same array gives effectively continuous tracks — orders of magnitude more samples.

## the elliptical tracks

for a source at declination $\delta$ at hour angle $H$, the (u, v) projection of a baseline $(B_x, B_y, B_z)$ in the equatorial frame is:

$$u = (B_x \sin H + B_y \cos H)/\lambda$$
$$v = (-B_x \sin\delta \cos H + B_y \sin\delta \sin H + B_z \cos\delta)/\lambda$$

as $H$ varies over a night, $(u, v)$ traces an *ellipse* with:
- center at $(0, B_z \cos\delta/\lambda)$
- semi-major axis $|B_{xy}|/\lambda$ (in the $u$ direction, $B_{xy} = \sqrt{B_x^2 + B_y^2}$)
- semi-minor axis $|B_{xy}|/\lambda \cdot \sin\delta$ (in the $v$ direction)

so:
- at the **celestial pole** ($\delta = 90°$): $\sin\delta = 1$, ellipse → **circle**. perfect 2D coverage
- at the **celestial equator** ($\delta = 0$): $\sin\delta = 0$, ellipse → **line** along $u$ axis. only 1D coverage. cannot image well — orientation information is lost in the v direction

most interferometers are mid-latitude (VLA $+34°$, ALMA $-23°$, EVN northern Europe). high-declination sources give better (u, v) coverage and cleaner images.

## the typical observation

a typical VLA observation:

- 8-12 hours track on the source
- target moves from rising → meridian → setting
- 27 antennas → 351 baselines, each tracing an ellipse
- effectively $\sim 10^4 \times 351 = 3.5 \times 10^6$ visibility samples after gridding
- (u, v) coverage looks dense and uniform

the resulting dirty beam has low sidelobes and a clean main lobe. CLEAN deconvolution then works well.

a 1-hour "snapshot" gives only short arcs per baseline → much sparser (u, v) → higher sidelobes → harder imaging.

## why ALMA does shorter tracks

ALMA observations are typically 1-2 hours, much shorter than VLA's 8-12 hours. why?

- ALMA has 50+ antennas → 1225 baselines → much denser (u, v) coverage even from a snapshot
- atmospheric phase stability is *worse* at mm wavelengths, limiting useful integration time
- ALMA's correlator is fast, so the number of effective independent samples per minute is huge

so ALMA achieves good (u, v) coverage in 1 hour where VLA needs 8 hours. tradeoff: fewer hours, more antennas.

## the south-pole problem

if I observe a source from a single hemisphere (e.g. ALMA in the southern hemisphere observing a northern source), I lose the part of the rotation track that goes below the horizon. (u, v) coverage is one-sided.

for a source at $\delta = 0$ (celestial equator) observed from $-23°$, only $\sim 12$ hours of track are above the horizon at any time, but the projection geometry restricts the *useful* baseline configurations. some (u, v) cells are simply unfillable from one hemisphere.

solution: combine arrays from both hemispheres. ALMA + VLA combined observations exploit this.

## the implications for instrument design

three:

### 1. minimum vs maximum baselines

a wide range of physical baselines is needed to cover both large structures (short baselines) and fine detail (long baselines). VLA reconfigures every few months (A, B, C, D configurations) to span baselines from 35 m to 36 km.

### 2. number of antennas

more antennas → more baselines → denser (u, v) coverage from a snapshot. ALMA's 50+ antennas vs VLA's 27 vs CHARA's 6 vs VLTI's 4. the VLTI is "snapshot poor" — it relies heavily on Earth rotation (and observer patience) to fill (u, v).

### 3. configuration

linear, Y, T, and circular configurations distribute baselines differently. the optimal depends on the science target. wide-field continuum imaging prefers uniform (u, v) density; deep imaging of compact sources prefers more long baselines.

## the historical context

before Ryle's invention, interferometers used **fixed-element configurations** (Ryle 1956), explicitly sampling one (u, v) point per baseline. each baseline was a separate "observation" — moving telescopes between observations was tedious.

Ryle realized that you could just *let the Earth rotate*. for stable mounted antennas, this gave automatic (u, v) coverage at no extra cost. the **One-Mile Telescope** at Cambridge (1964) was the first instrument designed around this principle.

modern arrays just take it for granted.

## the practical workflow

```
schedule observation
   ↓
target tracked from rise to set
   ↓
visibilities recorded continuously (every few seconds)
   ↓
(u, v) coverage = many ellipse arcs per baseline
   ↓
gridded onto a regular (u, v) grid for FFT
   ↓
inverse FFT → dirty image
   ↓
CLEAN → final image
```

every step is automated in CASA / AIPS / CARMA pipelines.

## scientific figure

<img src="{{ "/assets/images/uv_coverage_dirty_beam_demo.png" | relative_url }}" alt="uv_coverage_dirty_beam_demo" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

reading cue: Earth rotation turns one physical baseline into a track through the $(u,v)$ plane. more hour-angle coverage means more Fourier samples and a cleaner synthesized beam.

source: local synthetic demo generated from rotating projected baselines.

## see also

- [The (u, v) plane](../../../02_Zettel/Theory/interf/The (u, v) plane.md)
- [Aperture synthesis principle](../../../02_Zettel/Theory/interf/Aperture synthesis principle.html)
- [Optimal array geometry](../../../02_Zettel/Theory/interf/Optimal array geometry.html)
- [Dirty beam and dirty image](../../../02_Zettel/Theory/interf/Dirty beam and dirty image.html)
- [CLEAN algorithm](../../../02_Zettel/Theory/interf/CLEAN algorithm.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
