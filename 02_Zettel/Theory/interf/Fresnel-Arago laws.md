---
layout: default
title: "Fresnel-Arago laws"
---

# Fresnel-Arago laws

three laws governing when polarized waves can or cannot produce interference fringes. **fundamental restriction** on which interferometric setups work and which don't. discovered by Fresnel and Arago around 1817-1819, they predate Maxwell but follow elegantly from the wave description of polarization.

## the three laws

### Law 1
> **two coherent beams with mutually orthogonal polarizations cannot interfere.** the fringes never form.

if I split a beam into two paths, each with linear polarization perpendicular to the other, then recombine them — no fringes appear. their electric field oscillations are in independent perpendicular planes; the cross term in the intensity formula vanishes.

mathematically: if $\mathbf{E}_1 = E_0 \hat{\mathbf{x}} \cos(\omega t)$ and $\mathbf{E}_2 = E_0 \hat{\mathbf{y}} \cos(\omega t + \delta)$, the intensity at the detector is

$$I \propto \langle |\mathbf{E}_1 + \mathbf{E}_2|^2 \rangle = \langle E_x^2 \rangle + \langle E_y^2 \rangle = 2 E_0^2 / 2 = E_0^2$$

— constant, no $\delta$ dependence, no fringes.

### Law 2
> **two coherent beams with parallel polarizations always interfere.**

even for natural (unpolarized) light, *if* both beams happen to have a parallel-polarized component, those components interfere. the intensity formula has the standard $\cos\delta$ dependence.

### Law 3
> **the two perpendicular-polarized components of natural light cannot interfere with each other to form observable fringes**, even if one is artificially rotated to be parallel to the other.

natural light is *incoherent* between its two perpendicular polarization states. each comes from independent random emissions in the source's atoms, so they have no fixed phase relationship. rotating one component into the same polarization as the other doesn't fix this — the underlying time-dependent phases are still independent.

## the physical reason

interference is the cross-term $\langle \mathbf{E}_1^* \cdot \mathbf{E}_2 \rangle$. this dot product picks out only the *parallel* component of the two electric fields. so:

- **parallel polarization**: full dot product → strong cross term → fringes
- **orthogonal polarization**: zero dot product → no cross term → no fringes

Law 3 follows because natural light's perpendicular polarization components originate from independent emission events at random times, so their relative phase is random and time-averaging kills any cross term.

## the practical consequences

three:

### 1. polarization-handling instruments

every optical interferometer must take Fresnel-Arago seriously:
- if light passes through a polarizing element that selects perpendicular polarization in the two arms, fringes vanish
- birefringent materials (calcite, quartz) accidentally introduce polarization differences
- dichroic mirrors and beam splitters can have polarization-dependent reflection

solution: keep the polarization state matched in both arms, or *select* a single polarization explicitly.

### 2. the half-wave plate trick

if the two arms accidentally have orthogonal polarizations, a half-wave plate in one arm rotates that arm's polarization to match the other, restoring fringes. this is a standard trick in optical-bench interferometry.

### 3. polarization interferometers

some specialized instruments *exploit* Law 1 deliberately: by using crossed polarizers, you can suppress the on-axis interference and see only the residual non-classical effects (used in quantum-optics experiments, ellipsometry).

## why this matters in astronomy

stellar light is mostly unpolarized. so by Law 3, the two perpendicular components arrive at the interferometer independently. each component interferes with itself but not with the other.

practical consequence: a stellar interferometer effectively measures the visibility of *one polarization at a time*. instruments either:
- use one polarization (throw away half the light, simpler)
- use both polarizations independently (full Stokes information, more complex)

GRAVITY at VLTI does both in different observing modes.

## the deep modern view

quantum-mechanically, Fresnel-Arago is a statement about *which-path information*. perpendicular polarizations carry distinguishable which-path information; parallel polarizations don't. **distinguishable which-path information destroys interference**.

so Fresnel-Arago, classical optics from 1819, is the classical analogue of the quantum complementarity principle. light's wave-particle nature is encoded in this 200-year-old result.

## the experimental demonstration

simple lab demo: a Young's two-slit setup with a polarizer in front of each slit.
- both polarizers parallel: classic fringes
- both polarizers perpendicular to each other: fringes disappear
- rotate one polarizer 45°: fringes return at reduced contrast (only the parallel-polarized projection contributes)

this is a standard undergraduate physics experiment, and a clean demonstration of all three laws.

## see also

- [Light waves and the EM spectrum](../../../02_Zettel/Theory/interf/Light waves and the EM spectrum.html)
- [Polarization in interferometry](../../../02_Zettel/Theory/interf/Polarization in interferometry.html)
- [Optical path difference OPD](../../../02_Zettel/Theory/interf/Optical path difference OPD.html)
- [Superposition and interference](../../../02_Zettel/Theory/interf/Superposition and interference.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
