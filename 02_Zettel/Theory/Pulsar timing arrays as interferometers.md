---
layout: default
title: "Pulsar timing arrays as interferometers"
---

# Pulsar timing arrays as interferometers

a *galactic-scale* interferometer made from pulsars. by precisely monitoring the arrival times of pulses from many milliseconds-stable pulsars across the Galaxy, we can detect *low-frequency gravitational waves* — including the cosmic background of supermassive-binary-black-hole mergers throughout cosmic history.

NANOGrav, EPTA, PPTA, and InPTA are the major collaborations. their joint detection of the GW background was announced in **2023** — a landmark in low-frequency astronomy.

## the pulsar as a clock

![Pulsar Timing Array (PTA): galactic-scale array monitoring millisecond pulsars to detect nanohertz gravitational waves.](Pulsar_timing_arrays_as_interferometers.jpg)


a millisecond pulsar (MSP) emits highly regular radio pulses, with stability rivaling atomic clocks: $\sim 10^{-15}$ over years. the pulse times of arrival (TOAs) at Earth follow a deterministic prediction:

$$t_{\rm TOA} = t_{\rm emission} + \frac{D}{c} + \text{corrections}$$

where corrections include the kinematic shifts (Earth's orbital motion, Solar System barycenter), interstellar dispersion, and the pulsar's intrinsic spin-down.

## the GW signal

a passing gravitational wave perturbs the *spacetime* between Earth and the pulsar by a tiny amount $h$. this changes the *light travel time*, producing a tiny shift $\Delta t$ in the TOA at Earth:

$$\Delta t \sim h \cdot D/c$$

for a typical SMBH-binary GW signal of strain $h \sim 10^{-15}$ and pulsar at $D \sim 1$ kpc:
$$\Delta t \sim 10^{-15} \times 10^{19} \text{m}/c \sim 10$$ ns

the timing precision of MSPs is $\sim 100$ ns. so a single pulsar's timing can detect a GW signal at $\sim 10\%$ precision.

## the interferometric structure

now consider *many* pulsars at different sky positions. a passing GW perturbs each pulsar's TOA differently — the strain pattern from a GW source produces a *correlated* TOA pattern across the pulsar sky.

this is *the interferometric structure*: each pulsar is a "telescope element," each pair is a "baseline" measuring spatial coherence of the GW field, and the **Hellings-Downs correlation curve** is the analog of the (u, v)-plane Fourier-transformation.

## the Hellings-Downs curve

the GW background is anisotropic on the sky — different directions contribute different amounts of perturbation. Hellings & Downs (1983) derived the **expected correlation** between TOA residuals of two pulsars as a function of their angular separation $\theta$:

$$\Gamma(\theta) = \frac{1 - \cos\theta}{2}\ln\!\left(\frac{1 - \cos\theta}{2}\right) - \frac{1 - \cos\theta}{12} + \frac{1}{2}$$

key features:
- positive correlation at small angles
- *negative* correlation at $\sim 60°$
- positive at antipodes (180°)

a *stochastic* GW background should produce correlations following this Hellings-Downs curve. **detecting this characteristic curve is the smoking gun for the GW background**.

## the 2023 detections

four independent collaborations announced in 2023:

- **NANOGrav** (15-yr dataset, 67 pulsars): clear evidence at ~$3.5\sigma$ for Hellings-Downs correlation
- **EPTA** (24.7-yr dataset, 25 pulsars): confirms at similar significance
- **PPTA** (18-yr dataset, ~30 pulsars): consistent
- **InPTA** + **CPTA** (Chinese): early consistent results

joint analyses (IPTA): $\sim 4-5\sigma$ detection of the GW background. the source is consistent with a population of inspiraling SMBH binaries throughout cosmic history.

## what it tells us

the GW background traces:
- the SMBH-SMBH merger rate density across cosmic history
- the merger timescales (post-merger inspiral)
- possible exotic contributions (cosmic strings, primordial GWs)

current detections constrain the *mean* binary merger rate. future data (more pulsars, longer baselines) will resolve individual loud sources and study redshift evolution.

## the technique

each MSP is observed by major radio telescopes (Arecibo before its collapse, Green Bank, Effelsberg, Parkes, Lovell, FAST) once every 1-3 weeks. the resulting time series of TOAs is analyzed for residuals after the standard pulsar timing model. correlations between residuals across pulsars are computed and compared to the Hellings-Downs prediction.

a 15-year dataset is needed for the GW-background signal because the lowest-frequency GWs ($\sim 10$ nHz) have orbital periods $\sim$ years.

## the future

- **SKA-PTA**: SKA's pulsar-timing capability will extend to fainter MSPs and enable monthly observations of dozens of new pulsars. expected to detect *individual* SMBH binaries within a decade
- **Lunar PTA**: proposals to time pulsars from a lunar far-side radio telescope (no Earth ionospheric noise)
- **CMB B-modes + PTA**: combined low-frequency GW astronomy across $\sim 10$ orders of magnitude in GW frequency

## the irony of "interferometry"

PTAs are interferometric in *principle* (correlating signals from many "elements") but are often categorized differently. they share with optical/radio interferometry:
- the use of multiple sources (pulsars instead of telescopes)
- the role of correlations as the primary observable
- the use of Bayesian image-reconstruction-like techniques

but the analogy is more deep than literal: PTAs measure GW *strain* (a tensor field), not EM waves. and the "baselines" (Earth-pulsar distances) are *kpc*, not km.

## see also

- [Very Long Baseline Interferometry VLBI](../../02_Zettel/Theory/interf/Very Long Baseline Interferometry VLBI.html)
- [Major radio interferometers](../../02_Zettel/Theory/interf/Major radio interferometers.html)
- [Pulsar interferometry](../../02_Zettel/Theory/interf/Pulsar interferometry.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
