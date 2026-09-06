---
layout: default
title: "Beam splitter physics"
---

# Beam splitter physics

the **central optical element** of every amplitude-division interferometer. a partially-reflective coating at a 45° angle (or other angle) on a glass substrate. it splits an incoming beam into two beams of comparable amplitude, traveling along different paths.

simple in concept, but the physics has subtle features that matter: a $\pi$-phase relationship between reflection and transmission, polarization-dependent splitting ratios, and quantum-optics implications.

## the physical implementation

![Dielectric beam splitter: partial wave reflection and transmission introducing phase asymmetries at optical interfaces.](Beam_splitter_physics.png)


three common types:

### 1. half-silvered mirror

a glass plate (typically a few mm thick) with a thin metallic coating (typically aluminum or silver) deposited on one surface. the coating thickness is tuned so that ~50% of the light is reflected and ~50% is transmitted.

advantages: simple, broadband.
disadvantages: absorption losses (typically 5-20%); polarization-dependent.

### 2. dielectric beam splitter

a glass plate with a stack of thin dielectric layers (alternating high- and low-index materials). by interference between the layers, you can engineer any reflection ratio with very low absorption.

advantages: low loss (<1%); precise ratio engineering.
disadvantages: bandwidth-limited (works only for a chosen wavelength range); can be polarization-sensitive.

### 3. cube beam splitter

two right-angle prisms glued together with a partially-reflective coating at the interface. compact, mechanically stable.

advantages: rigid, easy to mount, often near-perfect 50/50.
disadvantages: bulkier than a thin plate.

## the $\pi$-phase asymmetry

a key physical fact: at a beam splitter, the *reflected* and *transmitted* beams pick up different phases, in a way that conserves energy:

- transmitted: phase 0
- reflected: phase $\pi$ (approximately, for a typical setup)

the exact phase pattern depends on the coating, but a $\pi$-difference between reflection and transmission is required by *unitarity* — the beam-splitter transformation must preserve the total energy of the two input beams across the two output beams.

equivalently: the beam splitter's transfer matrix is

$$\begin{pmatrix} t & r \\ r & t \end{pmatrix}$$

with $|t|^2 + |r|^2 = 1$ and $t r^* + r t^* = 0$. the second condition forces a $\pi$-phase relationship between $t$ and $r$.

## the polarization dependence

the splitting ratio depends on the polarization of the incoming light:
- *p-polarized* (parallel to the plane of incidence): transmits more, reflects less (Brewster's angle if you tune)
- *s-polarized* (perpendicular): the opposite

a 50/50 beam splitter is usually only 50/50 for one polarization. for unpolarized input, the two outputs have unequal intensities for the two polarization components.

solution: **non-polarizing beam splitters** are designed (with multi-layer coatings) to be 50/50 for both polarizations within a chosen wavelength range. expensive but essential for many applications.

## the quantum-optics view

a beam splitter is *the* fundamental two-mode quantum-optics element. a single photon entering input port 1 is, post-splitter, in a *quantum superposition* of being in output 1 (transmitted) and output 2 (reflected):

$$|1\rangle_1 \to t |1\rangle_1 + r |1\rangle_2$$

the photon is in *both* output paths until detected. detecting it forces a probabilistic collapse to one or the other.

this is what makes beam splitters central to:
- **Hong-Ou-Mandel interference**: two photons arriving simultaneously at a 50/50 BS exit through the *same* port (never different ports). a quantum interference unique to bosonic statistics
- **single-photon Mach-Zehnder**: a photon's path is a superposition until measured
- **entangled-photon experiments**: BS and polarizers manipulate quantum states for cryptography, teleportation, and Bell-test experiments

the classical interferometer's $\pi$-phase asymmetry is the source of all these quantum-optics features.

## the energy budget

ideal lossless 50/50 beam splitter: 50% in each output. real beam splitters have absorption, scattering, and uneven splitting:

- **absorption**: a few % of the input light is lost in the coating
- **scattering**: surface roughness scatters into wide angles (visible as "haze")
- **wavefront distortion**: imperfect flatness of the substrate reshapes the wavefront

high-quality beam splitters at HeNe (633 nm): 50.5/49.5 splitting, < 1% loss. at red/IR lasers: similar precision.

## the practical concerns

three things to verify when using a beam splitter:

### 1. ratio
measure transmitted and reflected intensity at the operating wavelength. typical 50/50 BS may be 51/47 with 2% absorption.

### 2. flatness
a wavefront error of $\lambda/10$ across the substrate is typical for laser-quality optics. critical for low-aberration interferometry.

### 3. wedge angle
the two surfaces of the substrate are typically slightly *not* parallel (the "wedge"), to prevent ghost reflections from interfering with the main beam. wedge of ~30 arc-seconds is common.

## the role in astronomy

stellar interferometers like VLTI use beam splitters to combine the light from multiple telescopes:
- 2-input combiners (pairwise): one BS per pair
- N-input combiners (all-on-one): cascaded BS architecture or photonic-integrated chips

modern instruments (GRAVITY, MATISSE) use silicon photonic chips with thousands of beam-splitting junctions, all with the same $\pi$-asymmetry, enabling coherent multi-baseline interference on a single chip.

## see also

- [Amplitude-division interferometers](../../02_Zettel/Theory/Amplitude-division interferometers.md)
- [Michelson laboratory interferometer](../../02_Zettel/Theory/interf/Michelson laboratory interferometer.md)
- [Mach-Zehnder interferometer](../../02_Zettel/Theory/interf/Mach-Zehnder interferometer.md)
- [Sagnac interferometer](../../02_Zettel/Theory/interf/Sagnac interferometer.md)
- [Beam combiners](../../02_Zettel/Theory/Beam combiners.md)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.md)
