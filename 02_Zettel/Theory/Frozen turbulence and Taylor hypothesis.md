---
layout: default
title: "Frozen turbulence and Taylor hypothesis"
---

# Frozen turbulence and Taylor hypothesis

the simplifying approximation that lets us think about temporal atmospheric fluctuations as *spatial* fluctuations carried past the telescope by the wind. the basis for predictive AO and the link between coherence time and Fried parameter.

## the hypothesis

introduced by G. I. Taylor (1938): if the timescale on which a turbulent eddy *internally evolves* is much longer than the time it takes to *advect past a fixed point*, then we can treat the turbulence as a frozen spatial pattern moving with velocity $\mathbf v_{\rm wind}$.

so at a fixed observation point:
$$\phi(\mathbf x, t) = \phi_0(\mathbf x - \mathbf v_{\rm wind} t)$$

the temporal fluctuations $\phi(\mathbf x, t)$ are equivalent to spatial fluctuations $\phi_0(\mathbf x)$ swept across by the wind.

## when it's valid

<img src="{{ "/assets/images/Frozen_turbulence_and_Taylor_hypothesis.gif" | relative_url }}" alt="Taylor frozen turbulence hypothesis: wind carrying static phase screens across the aperture at velocity $." class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />


the eddy turnover time $\tau_{\rm eddy} \sim L/v_{\rm rms}$, where $L$ is the eddy size and $v_{\rm rms}$ is the rms turbulent velocity within the eddy. the advection time $\tau_{\rm adv} \sim L/v_{\rm wind}$, with $v_{\rm wind}$ the bulk wind.

Taylor's hypothesis works when $v_{\rm wind} \gg v_{\rm rms}$. typical atmospheric values: $v_{\rm wind} \sim 10$-30 m/s, $v_{\rm rms} \sim 1$-3 m/s. so the ratio is $\sim 5$-10, and Taylor's hypothesis is reasonable.

it breaks down at very high altitudes where wind speeds are lower or for stratified flow with low shear.

## the consequence: coherence time

at a fixed point, the temporal structure function is

$$D_\phi(\tau) = D_\phi^{\rm spatial}(v_{\rm wind} \tau)$$

so the time at which $D_\phi$ reaches 1 rad$^2$ is

$$\tau_0 = r_0/v_{\rm wind}$$

(modulo numerical constants). this is the **Greenwood time** or **AO coherence time**.

typical values:
- $r_0 = 10$ cm, $v_{\rm wind} = 10$ m/s: $\tau_0 = 10$ ms
- $r_0 = 20$ cm, $v_{\rm wind} = 20$ m/s: $\tau_0 = 10$ ms

at K-band, $r_0$ is bigger but wind speed is similar: $\tau_0 \sim 30$-50 ms.

## the AO loop bandwidth

an AO system must *sample* the wavefront and *correct* it within $\tau_0$ to keep up with atmospheric evolution. the closed-loop bandwidth of an AO system needs to be:

$$f_{\rm AO} \gtrsim 1/\tau_0$$

so visible AO needs $f \sim 1$ kHz, IR AO needs $f \sim 100$ Hz. modern AO systems run at 1-3 kHz to handle the worst cases.

## predictive AO

if the turbulence is truly frozen-flow, I can *predict* the next wavefront from the current one and the wind:

$$\phi(t + \delta t) = \phi(t)|_{\mathbf x \to \mathbf x - \mathbf v_{\rm wind} \delta t}$$

knowing $\mathbf v_{\rm wind}$, an AO system can update mirror commands *ahead* of the actual measurement. removes the loop delay (~1 ms typically) from the error budget.

implemented in modern systems like ESO's SPHERE on the VLT and the LBTI on the LBT.

## the wind profile

real turbulence is at multiple altitudes, each with its own wind. the Taylor hypothesis applies *layer by layer*. high-altitude layer might have wind 30 m/s east; ground-layer 5 m/s west. the wavefront contributions from each move at different speeds.

a SLODAR (or similar) measures the turbulence and wind at each altitude. AO systems with multiple DMs can correct each layer optimally — the basis of multi-conjugate AO.

## the "lucky imaging" exploitation

short exposures (faster than $\tau_0$) freeze the turbulence. selecting the *best* fraction of frames (when the atmospheric distortion happens to be small) and combining only those gives better-than-seeing-limited resolution. this is **lucky imaging**, used in ground-based imaging of bright sources.

similar idea: speckle interferometry uses the fact that each short-exposure image is dominated by a single coherence cell, with different cells producing different speckles. averaging the autocorrelation of speckle frames recovers diffraction-limited information.

## limitations of the hypothesis

- **boiling**: at long timescales (~seconds), eddies do evolve internally. Taylor's approximation degrades; full 3D atmospheric simulation is needed for the most demanding applications
- **breaking turbulence**: under shear, eddies break up rather than advecting smoothly. the hypothesis fails near jet streams during shear bursts
- **convective layers**: in strong convection, vertical motions are comparable to horizontal advection, and the 2D frozen-flow picture is wrong

for design purposes, Taylor's hypothesis is good enough to set $\tau_0$ values; for fine-tuning AO performance, the limitations matter.

## see also

- [Atmospheric turbulence overview](../../02_Zettel/Theory/interf/Atmospheric turbulence overview.html)
- [Kolmogorov turbulence](../../02_Zettel/Theory/interf/Kolmogorov turbulence.html)
- [Fried parameter $r_0$](../../02_Zettel/Theory/interf/Fried parameter $r_0$.html)
- [Adaptive optics](../../02_Zettel/Theory/interf/Adaptive optics.html)
- [Wavefront sensors](../../02_Zettel/Theory/interf/Wavefront sensors.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
