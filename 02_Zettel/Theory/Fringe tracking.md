---
layout: default
title: "Fringe tracking"
---

# Fringe tracking

a real-time control system that locks the interferometer onto a fringe despite atmospheric piston jitter. the technological breakthrough that lets optical interferometers integrate longer than the atmospheric coherence time, opening up faint-target science.

## the problem

the atmosphere randomizes the differential piston between two telescopes on $\sim$ ms timescales. without correction, fringe phase wanders by $\gtrsim 2\pi$ within an integration. fringes wash out — visibility goes to zero on long integrations.

without fringe tracking, integrations must be shorter than $\tau_0 \sim 5$ ms. only the brightest sources produce enough photons in 5 ms for SNR > 1.

with fringe tracking: long integrations possible. the SNR scales as $\sqrt{\tau}$ — orders of magnitude improvement.

## the principle

![Real-time fringe tracking control loop dynamically adjusting optical path delay to maintain fringe visibility at maximum.](Fringe_tracking.jpg)


a fast, sensitive instrument continuously measures the residual fringe position and commands the delay line (or a fast piezo) to stay locked. operates in **closed loop** at ~1 kHz, faster than the atmosphere.

three stages:

### 1. measure

a fringe-tracking detector reads the fringe pattern at ~1 kHz. typically a small subset of pixels chosen for the fringe-position-sensitive features.

### 2. compute

a real-time computer estimates the current fringe-position error from the detector data. usually a Fourier-domain or template-matching algorithm.

### 3. command

correction commands sent to the delay-line piezo (for fast atmospheric jitter) or the carriage (for slow drift). closed-loop response time: $\sim 1$ ms.

## VLTI's fringe trackers

- **FINITO** (replaced ~2010s): the original VLTI fringe tracker
- **GRAVITY-FT** (current): part of the GRAVITY instrument; can also serve other instruments

operates on a *brighter* off-axis star (called the "fringe star") within the isoplanatic angle, providing fringe lock for a fainter science target. requires:
- fringe star brighter than $K = 11$ approximately
- within ~20" (isoplanatic angle in K-band) of the target

with fringe tracking, VLTI can do astrometry on $K = 16$ science targets (e.g. the S-stars near Sgr A*) — orders of magnitude beyond what is possible with snapshot integrations.

## CHARA's fringe tracking

CHARA's Climbing the Tower (CT) and CLASSIC fringe trackers have similar architecture. recent upgrades (MIRC-X with integrated fringe tracking) allow simultaneous science and fringe-tracking signals on the same instrument.

## the fringe-search problem

before fringe tracking can lock, the system must *find* the fringe. challenges:
- the delay-line position must be correct to within the coherence length
- atmospheric piston biases the answer

procedure: sweep the delay line over a few coherence lengths, look for the position with maximum fringe power, lock onto that. takes ~seconds.

modern systems use bright-star "fringe acquisition" sources to find the fringe initially, then transfer to the science fringe star.

## the limit of fringe tracking

three things still kill fringe tracking:

### 1. faint fringe star

if the fringe star is too faint, the fringe tracker's SNR is poor. fringe lock fails. limit: $K < 11$ for VLTI fringe-tracking.

### 2. seeing too bad

if seeing is so bad that fringes are weak (visibility highly reduced), the fringe tracker can't see them. limit: seeing-limited (>1.5'') for visible, less restrictive for IR.

### 3. fringe outside isoplanatic angle

if the fringe star is more than $\theta_0$ from the science target, the atmospheric phases differ between the two and fringe-tracking corrections don't apply to the science.

solution: **dual-feed** systems where the fringe star and science target are physically separate inputs but share the rest of the optical train. VLTI's GRAVITY+ design.

## off-axis fringe tracking

beyond the isoplanatic angle, off-axis fringe tracking would fail. but recent extensions:

- **AO-tomographic correction**: use multiple AO guide stars to correct atmospheric structure across a wider field
- **machine-learning predictors**: predict fringe motion from a network of nearby stars

these push the practical limits: VLTI/GRAVITY+ can do fringe tracking with stars 30" from target now.

## the implications for science

fringe tracking is the key to:
- **GRAVITY's astrometric measurements** of S-stars at the Galactic Center: 50 μas precision relies on minutes-long integrations, only possible with fringe lock
- **CHARA imaging**: of stellar surfaces, again with hour-long integrations
- **MATISSE thermal-IR imaging**: similar requirement

without fringe tracking, modern optical interferometry would be limited to a handful of bright stars. with it, the technique reaches faint, scientifically rich targets.

## see also

- [Components of a modern interferometer](../../02_Zettel/Theory/interf/Components of a modern interferometer.html)
- [Delay lines and path-length equalization](../../02_Zettel/Theory/interf/Delay lines and path-length equalization.html)
- [Beam combiners](../../02_Zettel/Theory/Beam combiners.html)
- [Adaptive optics](../../02_Zettel/Theory/interf/Adaptive optics.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
