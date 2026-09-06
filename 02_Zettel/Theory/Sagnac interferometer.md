---
layout: default
title: "Sagnac interferometer"
---

# Sagnac interferometer

a beam splitter sends light *around a closed loop* in two opposite directions (clockwise and counterclockwise). after one full circuit, both beams return to the beam splitter and interfere.

the unique feature: when the apparatus rotates, the two paths have slightly different *effective* lengths in the rotating frame (Sagnac effect). this makes the device a sensitive **rotation sensor** — used in fiber-optic gyroscopes for navigation.

invented by Georges Sagnac in 1913 (in part to challenge Einstein's relativity, ironically).

## the geometry

![Sagnac interferometer: counter-propagating beams traversing a closed optical loop detect rotational motion via phase shifts.](Sagnac_interferometer.svg)


a beam splitter, three or more mirrors arranged in a closed loop. light enters at the beam splitter, splits into clockwise (CW) and counter-clockwise (CCW) beams, each traveling around the loop in opposite directions, and recombines at the beam splitter.

if the loop is at rest in an inertial frame: both beams travel the same path length, no OPD, constructive interference at the output.

if the loop is *rotating* about its symmetry axis at angular velocity $\Omega$: in the rotating frame, the CW beam travels slightly *less* than the CCW beam (one beam catches up to the moving beam splitter; the other has to chase it). this results in an OPD:

$$\Lambda\sub{Sagnac} = \frac{4 A \Omega}{c}$$

where $A$ is the area enclosed by the loop and $c$ is the speed of light. this is the **Sagnac formula**.

## the order of magnitude

for a 1-m² loop at Earth's rotation rate ($\Omega = 7.3 \times 10^{-5}$ rad/s):
$$\Lambda \sim 4 \times 1 \times 7.3 \times 10^{-5} / (3 \times 10^8) \sim 10^{-12} \text{ m}$$

this is *tiny* — a fraction of an atomic diameter. but it's measurable! for visible light ($\lambda \sim 500$ nm), it's $\sim 10^{-6}$ wavelengths. by *fringe interpolation* and high-finesse cavities, modern Sagnac devices can reach $10^{-12}$ wavelength precision, or angular sensitivity $\sim 10^{-9}$ rad/s.

## the fiber-optic gyroscope (FOG)

the practical implementation: replace the empty loop with a coil of *optical fiber*, often kilometers long. since the fiber is bent, the path length per loop is much longer:

$$\Lambda\sub{Sagnac} = \frac{4 A_{\rm eff} \Omega}{c}, \quad A_{\rm eff} = N \cdot A$$

where $N$ is the number of fiber turns. modern FOGs use $N \sim 1000$, $A \sim 0.1$ m², giving $A_{\rm eff} \sim 100$ m².

result: rotation sensitivity good enough for inertial navigation. used in:
- aircraft attitude / navigation systems
- military submarines
- space probes
- self-driving cars

competition: ring-laser gyroscopes (RLGs) — Sagnac with a He-Ne laser inside the loop. similar performance, different technology. RLGs dominate at the high end (best precision, biggest volume), FOGs at the medium end (cheaper, more compact).

## the relativity connection

historically, Sagnac (1913) thought his experiment refuted Einstein's relativity. it didn't:
- in *general relativity*, the Sagnac effect is a consequence of the *Christoffel-symbol* corrections to light travel in a rotating frame
- in *special relativity*, it follows from time-of-flight differences in non-inertial frames
- both predict the same numerical $4 A \Omega/c$ result

the Sagnac effect is also what makes GPS work in the rotating Earth frame — Earth's rotation introduces a Sagnac-like correction that GPS algorithms must include for accurate positioning.

## the matter-wave version

the same effect applies to *matter waves*. a particle interferometer (e.g. cold-atom Sagnac) shows rotation sensitivity scaled by the de Broglie wavelength:

$$\Lambda\sub{matter} \propto \frac{\lambda_{\rm dB}}{c \cdot v}$$

since $\lambda_{\rm dB}$ for a slow atom is much smaller than light's $\lambda$, and $v \ll c$, the matter-wave Sagnac is *vastly* more sensitive than the light version per loop area. modern atom-interferometer gyroscopes can match the best ring-laser gyros in compact packages.

## the modern frontier

- **chip-scale Sagnac**: silicon-photonics-integrated rotation sensors
- **atom interferometers**: $10^{-13}$ rad/s in lab demonstrations
- **astronomical use**: limited (rotation sensitivity of telescopes is dominated by other factors), but in principle a Sagnac-loop calibrator could verify a telescope mount's pointing stability

## the comparison with Mach-Zehnder

| feature | Mach-Zehnder | Sagnac |
|---|---|---|
| topology | two separate arms | single closed loop |
| sensitive to | OPD changes (refractive index, path length) | rotation |
| typical precision | $\lambda/100$ | $\lambda/10^9$ in advanced FOG |
| dominant use | sensors, modulators, quantum optics | gyroscopes, navigation |

both are amplitude-division interferometers; both use beam splitters; the topology is the difference.

## see also

- [Amplitude-division interferometers](../../02_Zettel/Theory/Amplitude-division interferometers.md)
- [Beam splitter physics](../../02_Zettel/Theory/interf/Beam splitter physics.md)
- [Mach-Zehnder interferometer](../../02_Zettel/Theory/interf/Mach-Zehnder interferometer.md)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.md)
