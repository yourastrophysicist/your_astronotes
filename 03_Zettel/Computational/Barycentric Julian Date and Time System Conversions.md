---
layout: "default"
title: "Barycentric Julian Date and Time System Conversions"
---
# Barycentric Julian Date and Time System Conversions

Precise timing in exoplanet transit observations requires transforming local terrestrial timestamps into a uniform inertial timescale referenced to the Solar System Barycenter.

## Limitations of Standard Julian Date ($JD_{\text{UTC}}$)
1. **Terrestrial Time Variability**: Earth's rotation rate is non-uniform due to tidal friction and core interactions. Coordinated Universal Time (UTC) introduces discrete leap seconds.
2. **R?mer Light Travel Delay**: Earth's orbital motion around the Sun causes light travel path lengths to vary by up to the diameter of Earth's orbit ($2\text{ AU} / c \approx 16.6\text{ minutes}$, or $\pm 8.3\text{ minutes}$ relative to the barycenter).
3. **Relativistic Gravitational Delay (Shapiro Delay)**: gravitational time dilation from the Sun and planets.

## Definition of $BJD_{\text{TDB}}$
Barycentric Julian Date in Barycentric Dynamical Time ($BJD_{\text{TDB}}$) corrects for all geometric and relativistic effects:
$$BJD_{\text{TDB}} = JD_{\text{UTC}} + \Delta t_{\text{leap}} + \Delta t_{\text{Einstein}} + \frac{\vec{r}_{\text{topo}} \cdot \hat{n}_\star}{c} + \Delta t_{\text{Shapiro}}$$
where:
- $\vec{r}_{\text{topo}}$ is the vector from the Solar System Barycenter to the observatory.
- $\hat{n}_\star$ is the unit vector pointing toward the target star.

Computed using high-precision JPL DE430 ephemerides via `jplephem` (Eastman et al. 2010).

## Related Notes
- [[Malavolta 03 - Science Frame Correction and Error Propagation]]
- [[Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling]]



## Linked References

- [[Laboratory Exercise - Science Frame Reduction and Error Tracking]]
- [[Astrophysics_Laboratory_2_MOC]]


