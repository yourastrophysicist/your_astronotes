---
layout: default
title: "Mach-Zehnder interferometer"
---

# Mach-Zehnder interferometer

an amplitude-division interferometer where light is split by a first beam splitter, sent along two physically separate paths, and recombined at a *second* beam splitter. unlike Michelson, both output ports are physically separated and accessible, making it efficient (uses both outputs) and suitable for *quantum-optics* experiments where one wants to interrogate the interference without back-reflection.

invented by Mach (1891) and Zehnder (1892) independently. now standard in optics labs.

## the optical setup

![Mach-Zehnder interferometer: two independent beam splitters create separate sample and reference paths.](Mach-Zehnder_interferometer.jpg)


four optical elements arranged in a rectangle:

```
        BS1 ──── M2
         │       │
         │       │
        M1 ──── BS2 ── outputs
```

light from the source hits BS1 (first beam splitter), which sends 50% along arm 1 (to M1) and 50% along arm 2 (to M2). each mirror reflects to BS2 (second beam splitter), where the two beams recombine and exit through *two* output ports.

unlike Michelson, light does *not* return toward the source — the input port and output ports are physically distinct.

## the two outputs

at BS2, the two arms recombine. by energy conservation:
- output 1 (transmitted from arm 1, reflected from arm 2): one combination
- output 2 (reflected from arm 1, transmitted from arm 2): the *complementary* combination

if the OPD is zero and both arms have equal intensity, output 1 has 100% and output 2 has 0% (or vice versa, depending on the phase conventions of the beam splitters). intermediate OPDs give a mixture.

## why two outputs matter

a Michelson interferometer "wastes" half the light back toward the source. Mach-Zehnder uses both outputs:

$$\text{output 1 intensity} + \text{output 2 intensity} = \text{input intensity}$$

so by measuring *both* outputs simultaneously and taking the difference, you do **balanced detection**. this:
- doubles the signal
- cancels common-mode noise (e.g. source intensity fluctuations)
- gets you to the *quantum noise limit*

balanced detection is how LIGO suppresses laser-noise (modified into a more complex form), how optical-coherence tomography works in medicine, and how single-photon experiments distinguish path which-information.

## the quantum-optics use

for single photons:
- BS1 splits the photon into a quantum superposition of the two paths
- the photon "is in both arms" until detected
- BS2 recombines, with phase difference encoded in which output port the photon exits
- detection of the photon at output 1 vs output 2 reveals the OPD

key applications:
- **Hong-Ou-Mandel experiment** (1987): two photons interfering at a beam splitter; never come out the same port. demonstrates quantum-entangled photon pairs
- **delayed-choice experiments**: choose to insert/remove BS2 *after* the photon has entered the device. the photon's behavior depends on whether it's measured as wave or particle
- **quantum cryptography (BB84 + variants)**: Mach-Zehnder loops for generating and verifying quantum states

## the index-of-refraction sensor

put one arm through a sample (gas, liquid, plasma) of unknown refractive index $n$. the OPD changes by $(n - 1) L$ where $L$ is the path length in the sample. count fringes at the output → determine $n$.

used for:
- gas-flow visualization (Schlieren-like, but quantitative)
- plasma diagnostics
- biological imaging (tissue refractive-index mapping)

a typical Mach-Zehnder sensor can detect $\Delta n \sim 10^{-6}$ in ms.

## the integrated-optics version

modern photonic-integrated chips have Mach-Zehnder structures *etched* onto silicon or silicon-nitride waveguides. they're used for:
- modulating optical signals (the Mach-Zehnder modulator is the workhorse of fiber telecommunications)
- optical computing (logic gates from MZI arrays)
- biosensors (one arm interrogates a biological sample)

these can have arms only millimeters long — but the principle is identical to the bench-top original.

## the modern stellar use

interferometric beam-combiners for VLTI's GRAVITY and other instruments use Mach-Zehnder-like cascades on photonic chips:
- inputs from each telescope arrive via single-mode fibers
- multiple beam splitters in cascade combine all baselines simultaneously
- output ports detect the various interference combinations

so Mach-Zehnder is *the* architecture for modern infrared interferometry, just shrunk to chip-scale.

## the comparison with Michelson

| feature | Michelson | Mach-Zehnder |
|---|---|---|
| optical layout | two arms perpendicular | two arms separated |
| return path | yes (back to source) | no |
| photon efficiency | half wasted (one output to detector) | both outputs accessible |
| balanced detection | no (need second instrument) | yes (built-in) |
| quantum-optics use | sometimes | dominant choice |
| modern descendant | LIGO | photonic chips, GRAVITY |

both are first-class amplitude-division interferometers; the choice depends on whether you want both outputs.

## see also

- [Amplitude-division interferometers](../../02_Zettel/Theory/Amplitude-division interferometers.md)
- [Beam splitter physics](../../02_Zettel/Theory/interf/Beam splitter physics.md)
- [Michelson laboratory interferometer](../../02_Zettel/Theory/interf/Michelson laboratory interferometer.md)
- [Sagnac interferometer](../../02_Zettel/Theory/interf/Sagnac interferometer.md)
- [Beam combiners](../../02_Zettel/Theory/Beam combiners.md)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.md)
