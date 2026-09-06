---
layout: default
title: "Optimal array geometry"
---

# Optimal array geometry

how to arrange antennas to fill the (u, v) plane efficiently. there is no single best configuration — the choice trades off snapshot fidelity, sensitivity, accessibility, and cost. each major interferometer made a different choice and exists for different science.

## design goals

the perfect array would give:
- uniform (u, v) coverage
- range of baselines from very short to very long
- good sensitivity (large total collecting area)
- low cost (few antennas, simple ground)
- good engineering (cabling, infrastructure)

these goals conflict. real designs are compromises.

## linear array

simplest. all antennas on one straight line. provides only one direction of (u, v) coverage at any instant. Earth-rotation fills in over a track but only along one axis at the celestial pole. terrible at the equator.

historical example: Cambridge One-Mile Telescope (1964), three 60-foot dishes on a 1-mile track.

## circular / ring array

antennas on a circle. all baselines are chords. (u, v) coverage at one instant is a *disk* (the autocorrelation of the ring). very uniform snapshot coverage at low spatial frequencies. less long-baseline coverage.

example: the Multi-Element Radio-Linked Interferometer Network (MERLIN) approximates a ring at scale.

## Y configuration (the VLA classic)

three arms at 120° angles. the **Very Large Array (VLA)** is the iconic Y. why?

- spreads baselines uniformly in azimuth → (u, v) coverage relatively uniform at one instant
- arms can be re-extended to change baseline length (VLA reconfigures every 4-6 months: A, B, C, D)
- engineering: only three rail tracks, each ~30 km long
- combines well with Earth rotation

drawback: the "trefoil" pattern leaves three gaps at high (u, v).

VLA: 27 antennas, 25m diameter each, spread over $\sim 36$ km in A configuration. $\sim 351$ baselines.

## T configuration

two arms perpendicular to form a T. similar to Y but only two arms. used by the original Westerbork Synthesis Radio Telescope (WSRT, 1970).

drawback: even more anisotropy in (u, v) than Y.

## spiral / log-periodic

ALMA uses spiral / quasi-circular arms. as you compact the array, antennas fall into a small dense cluster; as you spread, baselines grow up to 16 km. spiral patterns optimize for **density-uniform (u, v) coverage** at any compactness.

ALMA: 50 main 12m antennas + 12 ACA 7m antennas + 4 single-dish total power. baselines 15m-16km. configurations C-1 through C-10.

## very-long-baseline (VLBI) arrays

baselines limited only by the diameter of the Earth (and the requirement of mutual visibility). antennas operate independently, signals recorded with atomic-clock referencing, correlated post-hoc.

examples:
- **EVN** (European VLBI Network): ~25 antennas, baselines up to 10000 km
- **VLBA** (Very Long Baseline Array): 10 antennas across the US, baselines up to 8000 km
- **EHT** (Event Horizon Telescope): 8 sites globally, baselines $\sim 10000$ km, 230 GHz

(u, v) coverage is sparse: only a few baselines, each tracing slow arcs as Earth rotates. but baselines are *huge*, giving μas resolution.

## the snapshot vs Earth-rotation tradeoff

| array | snapshot (u, v) | Earth-rotation (u, v) |
|---|---|---|
| linear (3 elts) | line | crescent |
| ring (10 elts) | dense disk | ring |
| Y (27 elts) | filled trefoil | nearly uniform disk |
| spiral (50+ elts) | dense disk | very uniform disk |
| VLBI (8 elts) | scattered points | sparse arcs |

so snapshot fidelity and rotation fidelity are *related* but distinct: a Y is good in both, a VLBI is bad in both, a ring is great snapshot but mediocre tracking.

## sensitivity

total collecting area = $N \times A_{\rm dish}$. so for fixed dish size, more antennas = more sensitivity. but the more antennas, the harder the engineering, the more correlator load, the more cost.

scaling rule: typical interferometer noise on a point source

$$\sigma \propto \frac{1}{N \sqrt{\Delta\nu \, \tau}}$$

doubling $N$ halves the noise. doubling each dish's *area* helps just as much. ALMA chose 50 small dishes; SKA-Mid will be 64 large + 200 small dishes.

## the optimal-(u, v)-coverage problem

formally: given $N$ antennas and a desired science region in the (u, v) plane, find the antenna positions that minimize a quality metric (e.g. variance of (u, v) cell occupancy, or sidelobe level of the dirty beam).

this is an optimization problem with a long literature. modern arrays use:
- **constraint-based** layouts (terrain, infrastructure)
- **simulated annealing** for fine-tuning
- **multi-configuration** designs (ALMA's many configs)

the actual VLA Y was chosen by trial-and-error in the 1970s, optimized for both terrain and snapshot fidelity. it is good but not optimal in any rigorous sense.

## modern challenges

- **square kilometre array (SKA)**: 200+ dishes plus thousands of low-frequency stations. quasi-fractal layout for multi-scale (u, v) coverage
- **future Lunar arrays**: free-fall conditions, no atmosphere on the far side. layout limited by deployment logistics
- **space VLBI**: very long baselines from spacecraft, layout determined by orbital mechanics

## see also

- [The (u, v) plane](../../../02_Zettel/Theory/interf/The (u, v) plane.md)
- [Aperture synthesis principle](../../../02_Zettel/Theory/interf/Aperture synthesis principle.md)
- [Earth-rotation aperture synthesis](../../../02_Zettel/Theory/interf/Earth-rotation aperture synthesis.md)
- [Major radio interferometers](../../../02_Zettel/Theory/interf/Major radio interferometers.md)
- [VLTI Very Large Telescope Interferometer](../../../02_Zettel/Theory/interf/VLTI Very Large Telescope Interferometer.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
