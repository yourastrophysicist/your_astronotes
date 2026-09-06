---
layout: default
title: "Interferometry course intro"
---

# Interferometry, course intro

A.Y. 2025/2026 at the University of Padova, **Astronomical Interferometry** taught by **Prof. Mauro D'Onofrio**. master's-level second-semester course for the Astrophysics and Cosmology programme. first exam in the summer block.

## what this course is

interferometry: combining the light from multiple telescopes to synthesize an aperture larger than any single telescope. the technique behind every milli-arcsecond image in modern astrophysics — Betelgeuse's surface, the Galactic Center S-stars, the Event Horizon Telescope's M87 ring, ALMA's protoplanetary-disk gaps, and pretty much everything we know about resolved stellar physics.

the course covers two parallel worlds:

- **optical/IR interferometry**: VLTI, CHARA, LBT, COAST. small numbers of large telescopes, atmospheric phase corruption, beam combination through air or fibers. Labeyrie's textbook is the reference
- **radio interferometry**: VLA, ALMA, EVN, EHT, SKA. many antennas, heterodyne electronics, post-correlation calibration. the Paladino lab notes and Moellenbrock NRAO summer school cover this

physics is the same — phase, coherence, Van Cittert-Zernike — but the engineering and operating regimes differ in important ways.

## who teaches it

![Schematic of an astronomical optical interferometer combining signals from separated telescopes via delay lines.](Interferometry_course_intro.jpg)


**Mauro D'Onofrio** is a Padova astrophysicist with research interests spanning galaxy structure, scaling relations, and observational cosmology. for interferometry he supervises a course built around the Labeyrie textbook (which translates between the optical and radio formalisms) and a set of Italian "Lezione 1-7" + English "Lecture 8-10" slides.

## why I am taking it

three reasons:

1. **degree requirement**: it is one of the four September exams in the master's programme
2. **scientific relevance**: my interest in observational astrophysics will inevitably involve interferometric data — every ALMA or radio paper assumes I know what a (u, v) plot is
3. **the technique I find most beautiful**: aperture synthesis is the prettiest engineering trick in astronomy. you literally Fourier-invert your way to an image

## the chain of objects

the whole course is one extended answer to "how do I get from a sky brightness to a measured visibility and back":

$$\text{plane wave} \to \text{coherence} \to \text{visibility} \to \text{Fourier component}$$
$$\to \text{(u,v) sample} \to \text{dirty image} \to \text{deconvolved image}$$

each step is one block of [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.md):
- physics fundamentals (block 1)
- coherence (block 2)
- aperture synthesis (block 3)
- atmosphere (block 4)
- single-aperture HRA techniques (block 5)
- intensity interferometry (block 6)
- amplitude interferometry instruments (block 7)
- radio interferometry (block 8)
- calibration and imaging (block 9)
- nulling and coronagraphy (block 10)
- science (block 11)
- future (block 12)

## reference texts

- **Labeyrie, Lipson, Nisenson**, *Introduction to Optical Stellar Interferometry* (CUP 2006) — the spine
- **Thompson, Moran, Swenson**, *Interferometry and Synthesis in Radio Astronomy* (Springer Open) — radio bible
- **Haniff Garching primer** (in source folder) — concise pedagogical overview
- **Moellenbrock 2014** (in source folder) — NRAO calibration and imaging primer
- **Paladino lab notes** (in source folder) — Padova-specific radio data reduction

## how to use the vault for this course

- **MOC** at `04_Atlas/Astronomical_Interferometry_MOC.md` — the spine
- **zettels** at `03_Zettel/Theory/` — one concept per file
- **exam project** at `05_Projects/Interferometry Exam 2026/` — study plan, problem-class taxonomy, code patterns
- **APSYNSIM** at `Documents/2/interferometry/apsynsim/` — interactive simulator. **single most useful tool** for understanding (u, v) coverage and dirty images. play with it before reading more theory

## see also

- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.md)
- [Why interferometry](../../02_Zettel/Theory/interf/Why interferometry.md)
- [Interferometry equation sheet](../../02_Zettel/Theory/interf/Interferometry equation sheet.md)