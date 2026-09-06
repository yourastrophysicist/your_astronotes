---
layout: default
name: Hunting BHs via radial velocities
description: single-line spectroscopic binaries with massive dark companions, NGC 3201 BH (Giesers 2018) and M22 candidate
---

a stellar-mass [black hole](../../02_Zettel/Theory/Black holes in globular clusters.html) in a binary, if it is not currently accreting, is invisible to electromagnetic surveys. the only way to find it is dynamically: look for a luminous star whose radial velocity oscillates as it orbits an unseen massive companion. these are called **single-line spectroscopic binaries** (SB1, only one star contributes spectral lines).

**the method**

the recipe is straightforward in principle:

1. obtain repeated spectra of a target star in a cluster (typically MUSE IFU or fibre spectrographs),
2. measure radial velocities at each epoch,
3. fit a Keplerian orbit (period $P$, eccentricity $e$, RV semi-amplitude $K$),
4. compute the **mass function**

$$f(M) = \frac{(M_2 \sin i)^3}{(M_1 + M_2)^2} = \frac{P\, K_1^3}{2\pi G} (1 - e^2)^{3/2},$$

where $M_1$ is the visible star and $M_2$ the unseen companion.

5. with an estimate of $M_1$ from the [CMD](../../02_Zettel/Theory/HR diagram.html) position and assumed inclination $i$, derive a lower limit on $M_2$. a value $M_2 \gg 1.4\,M_\odot$ rules out a WD or NS and points to a BH.

**NGC 3201 (Giesers et al. 2018)**

the cleanest case to date. MUSE multi-epoch spectroscopy of NGC 3201 found a turn-off star with a 167-day orbit and a companion with **minimum mass $\sim 4.4\,M_\odot$**, well above the maximum NS mass. the companion is dark in optical, X-ray, and radio. the inferred system is a non-accreting stellar-mass BH with an MS companion, the first dynamically confirmed BH in a GC.

follow-up work by giesers et al. (2019) extended the survey and found two more BH candidates in NGC 3201, with masses $\sim 7\,M_\odot$ and $\sim 4\,M_\odot$. the cluster apparently hosts at least three quiescent BH-MS binaries.

**M22 and other candidates**

an earlier candidate in M22 was based on radio continuum detection of two compact sources (strader et al. 2012), interpreted as accreting BHs. the radio-X-ray flux ratio is consistent with low-luminosity stellar-mass BHs of $\sim 10\,M_\odot$. the dynamical confirmation is harder due to crowding.

47 Tuc has yielded several BH candidates from MUSE and HST kinematics, the field is rapidly evolving.

**limitations and biases**

- the method is sensitive only to **edge-on** systems; at low inclination $\sin i$, the inferred $M_2 \sin i$ underestimates the true mass.
- the method is sensitive only to systems with a luminous companion; pure BH-BH binaries need [gravitational waves](../../02_Zettel/Theory/BHs from gravitational waves.html) to find.
- short-period (< days) systems are easiest; year-long orbits require long observational baselines.
- "dark" companions could in principle be very heavy white dwarfs or neutron stars near maximum mass; only a clear $> 3\,M_\odot$ minimum allows BH identification.

**outlook**

the next decade will multiply BH detections in clusters: ESO MUSE deep surveys, the upcoming ELT high-resolution spectrographs, Gaia astrometric binaries (already producing field BH candidates like Gaia BH1 and BH2), and combined RV+astrometry will yield population statistics. the predicted BH population per cluster is a key constraint on the [LIGO-Virgo](../../02_Zettel/Theory/BHs from gravitational waves.html) dynamical-merger channel.

## see also
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
- [Black holes in globular clusters](../../02_Zettel/Theory/Black holes in globular clusters.html)
- [Intermediate-mass BHs in GCs](../../02_Zettel/Theory/Intermediate-mass BHs in GCs.html)
- [BHs from gravitational waves](../../02_Zettel/Theory/BHs from gravitational waves.html)
- [Binary star orbits](../../02_Zettel/Theory/interf/Binary star orbits.html)
