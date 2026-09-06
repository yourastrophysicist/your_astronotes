---
layout: default
title: "Delay lines and path-length equalization"
---

# Delay lines and path-length equalization

the most distinctive feature of optical interferometers. since light travels through real optical paths (not heterodyne electronics), the path lengths from each telescope to the beam combiner must be matched to within the **coherence length** of the light. movable mirrors on precision rails do this.

## the geometric problem

a source at angular position $\mathbf l$ produces a wavefront that arrives at telescope $i$ at time $t$. the same wavefront arrives at telescope $j$ at time $t + \tau_{ij}$ where

$$\tau_{ij} = \mathbf B_{ij} \cdot \mathbf l/c$$

with $\mathbf B_{ij}$ the baseline vector. for $\mathbf l$ pointing at the source, this delay depends on the geometry.

at the beam combiner, the two beams must arrive *coherent in phase* — meaning the *total* optical path (geometric + atmospheric + instrumental) must be matched for both arms.

## the path budget

the total optical path from source to combiner for arm $i$:

$$L_i = c \tau_{i, \rm source} + L_{i, \rm atm} + L_{i, \rm telescope} + L_{i, \rm beam tube} + L_{i, \rm delay} + L_{i, \rm combiner}$$

we want $L_1 = L_2 = ... = L_N$.

most components are fixed (or slowly varying). the *delay line* is the actively-controlled component, allowing real-time adjustment of $L_{i, \rm delay}$.

## the coherence length

if we want fringes, the path-length match must be tighter than the coherence length:

$$|L_i - L_j| < \ell_c = c/\Delta\nu = \lambda^2/\Delta\lambda$$

for K-band ($\lambda = 2.2$ μm, $\Delta\lambda = 0.3$ μm): $\ell_c \sim 16$ μm.
for narrow-band H ($\lambda = 1.6$ μm, $\Delta\lambda = 0.05$ μm): $\ell_c \sim 50$ μm.

so delay lines must hold paths to within micrometers.

## the delay-line design

a typical delay line:

- a *carriage* (movable trolley) carries a *cat's eye* (or roof mirror) that reflects the beam back parallel
- a precision rail (typically meters long) on which the carriage runs
- a *piezo stage* on the carriage for fine sub-μm corrections

the trolley moves coarsely (mm to meter scale) to handle source tracking; the piezo handles sub-mm corrections at high frequency.

VLTI: 8 delay lines, each in a 65 m vacuum tunnel. carriage moves on linear rails with $\sim$ μm position-encoder resolution. piezo stage on top with nm resolution.

## tracking the source

as the Earth rotates, $\tau_{ij}(t)$ changes. the delay lines must move accordingly. typical drift rates:

- 100 m baseline at zenith: $\sim 0.5$ mm/s of geometric path change
- close to setting horizon: faster

the delay lines run continuously to compensate. a typical observation: 30-60 minutes on source, with the delay lines tracking the geometric path change.

## metrology

internal path-length stability of the delay lines themselves is critical. any mechanical creep, thermal drift, or vibration in the rails contaminates the measurement. solution: an independent **metrology system** monitors the actual physical position of the carriage at all times.

VLTI's PRIMA metrology uses a stabilized HeNe laser injected into the optical train. nm-level position tracking continuously. without it, the delay lines would drift by $\sim$ mm in tens of minutes — unacceptable for sub-μm-precision interferometry.

## the air vs vacuum question

beam tubes are evacuated to $\sim 10^{-4}$ mbar to minimize:
- turbulence-induced fluctuations in refractive index
- thermal-gradient-induced refractive-index gradients
- absorption by water vapor (at IR wavelengths)

VLTI: full vacuum in delay-line tunnels. CHARA: sealed-air in delay-line tubes (air refractive index varies with temperature; controlled by climate-controlled tunnels). both work, with vacuum more demanding but more stable.

## the dispersion problem

if my light spans a band ($\Delta\lambda$), and I have any path-length mismatch with refractive-index dispersion ($n(\lambda)$ varies), then different wavelengths get different effective path lengths. fringes wash out at a faster rate than the coherence length suggests.

solution: **dispersion compensation**. each delay line has a glass element whose thickness is matched between arms, so the chromatic delays cancel. used at VLTI and CHARA.

## fringe tracking and the delay line

the **fringe tracker** monitors the residual path-length error in real time and sends correction commands to the delay-line piezo stage. closed-loop bandwidth: ~1 kHz, faster than $\tau_0$. the piezo handles the fast atmospheric piston jitter; the delay-line carriage handles the slow geometric tracking.

so the delay-line system has two control bandwidths:
- carriage motion: ~Hz (geometric tracking)
- piezo on carriage: ~kHz (atmospheric piston tracking)

## the engineering envelope

a state-of-the-art delay line:
- range: 50-100 m (full source-tracking range)
- precision: 1-10 nm (after metrology correction)
- speed: 0.5-5 mm/s for tracking
- bandwidth: 1 kHz (with piezo)
- temperature stability: $\pm 0.1$ K
- vibration isolation: passive + active, $< 10$ nm/$\sqrt{\text{Hz}}$ at relevant frequencies

these specs make optical-interferometer delay lines among the most precise mechanical systems ever built. even ELT-class single telescopes don't approach this level of internal-path control.

## scientific figure

![vlti_delay_line_eso9811a](../../../assets/images/vlti_delay_line_eso9811a.jpg)

reading cue: optical interferometry must physically equalize path length so the wavefronts arrive in phase at the combiner. the delay line is the moving optical ruler that keeps OPD within the coherence length.

source: ESO image eso9811a, VLTI delay line schematic.

## see also

- [Components of a modern interferometer](../../../02_Zettel/Theory/interf/Components of a modern interferometer.html)
- [Beam combiners](../../../02_Zettel/Theory/Beam combiners.html)
- [Fringe tracking](../../../02_Zettel/Theory/interf/Fringe tracking.html)
- [Temporal coherence](../../../02_Zettel/Theory/interf/Temporal coherence.html)
- [VLTI Very Large Telescope Interferometer](../../../02_Zettel/Theory/interf/VLTI Very Large Telescope Interferometer.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
