---
layout: default
title: "Guide stars and laser guide stars"
---

# Guide stars and laser guide stars

AO needs a bright reference object to measure the wavefront in real time. natural stars are limited in number; lasers create artificial reference points. the combination of natural + laser guide stars is what extends AO to sky-coverage of ~50% (visible) to ~100% (IR).

## natural guide stars (NGS)

a star within the *isoplanatic angle* $\theta_0$ of the science target, bright enough for the WFS.

requirements:
- **bright**: typical limits $V < 13$ (visible WFS), $K < 11$ (IR WFS)
- **point source**: unresolved or close to it
- **within $\theta_0$**: $\sim 2''$ at visible, $\sim 15''$ at K

for a typical science target, the probability of a suitable NGS within $\theta_0$ depends on galactic latitude:
- near the galactic plane: $\sim 30\%$ of fields have a bright NGS within 30''
- at the galactic poles: $\sim 1$-5%

so NGS-only AO has limited sky coverage. the answer: laser guide stars.

## the sodium laser guide star

shine a $\lambda = 589$ nm laser at the mesospheric sodium layer (90 km altitude). sodium atoms absorb and re-emit, creating a $\sim 1''$-bright artificial star at the reach of the WFS.

advantages:
- **goes anywhere**: sky coverage limited only by airmass
- **brightness controllable**: just turn up the laser
- **multiple LGSs possible**: large fields with multiple LGSs for tomographic AO

limitations:
- **doesn't measure tip-tilt**: the laser comes back along the *same* path it went out. atmospheric tilt acts twice and cancels — the LGS *cannot* see image motion. a faint NGS within $\theta_0$ is still needed for tilt
- **cone effect**: the laser samples a cone of atmosphere converging to 90 km. higher-altitude turbulence is sampled in a cone narrower than the science cone. mismatch grows with telescope diameter — the cone effect limits LGS AO to $D \lesssim 8$ m. for ELTs, multiple LGSs are needed
- **finite altitude**: the LGS is at finite distance (~90 km), so it produces a *spherical wavefront*, not the plane wavefront from a true infinite-distance star. small correction, handled in software

## the Rayleigh laser guide star

cheaper alternative: shine a green laser, use Rayleigh backscatter from atmospheric molecules at $\sim 10$-20 km altitude. lower than sodium, narrower cone, more cone-effect.

used for ground-layer AO and where lower performance is acceptable.

## the laser system

a sodium laser at 589 nm needs:
- ~10-20 W output power
- narrow linewidth (~10 MHz) tuned to the sodium D2 line
- pulse mode (typically) to gate out the lower atmospheric backscatter

modern lasers: solid-state Raman-shifted YAG, fiber lasers, dye lasers. each major observatory has its preferred technology.

## AO with NGS + LGS

the standard recipe:

1. LGS provides high-order wavefront information (across the full pupil)
2. NGS provides tip-tilt information

the NGS need not be very bright (faint stars are sufficient for tip-tilt, where the precision needed is much lower than for high-order modes). so finding a $V \sim 17$ tip-tilt star within $\theta_0$ is much easier than finding a $V \sim 13$ full-AO NGS.

result: sky coverage of $\sim 50\%$ at visible, $\sim 100\%$ at K.

## multi-conjugate AO with multiple LGSs

for wide-field AO over $\sim 1'$ fields, use 5-6 LGSs distributed across the field. tomographic algorithms reconstruct the 3D atmospheric structure, then drive multiple DMs (one per altitude layer) to correct.

instruments: Gemini MCAO (5 LGSs), ESO's MAD prototype (3 LGSs), MORFEO at ELT (6 LGSs).

## astronomical considerations

a few subtleties:

### 1. spotting the laser

LGSs are visible from kilometers away. observatories must coordinate with neighbors, air traffic control (lasers are eye-safe at distance but bright at the source), and military.

### 2. laser purity

spurious wavelengths in the laser produce Rayleigh-scattered backgrounds that contaminate the WFS. modern lasers are spectrally clean to <0.1%.

### 3. sodium variability

the mesospheric sodium layer's column density varies by factor of 2-3 over a year, with daily variations. AO performance varies accordingly. modern observatories monitor sodium in real time.

## interferometric application

VLTI's GRAVITY+ uses LGS to enable AO on every UT baseline. previously, GRAVITY needed bright (V < 11) NGS for fringe tracking and AO; with LGS, this requirement relaxes to fainter targets, dramatically expanding what targets are accessible.

CHARA does not have LGS but is also looking at such upgrades.

## historical

first LGS systems: late 1980s (US Air Force, "Star Wars" laser-imaging research). astronomical use: 1990s (Lick Observatory, Calar Alto). by 2005, every major AO system had LGS capability. by 2025, ELT-class telescopes have multi-LGS systems baked in.

## see also

- [Adaptive optics](../../../02_Zettel/Theory/interf/Adaptive optics.md)
- [Wavefront sensors](../../../02_Zettel/Theory/interf/Wavefront sensors.md)
- [Deformable mirrors and tip-tilt](../../../02_Zettel/Theory/interf/Deformable mirrors and tip-tilt.md)
- [Isoplanatic patch](../../../02_Zettel/Theory/interf/Isoplanatic patch.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
