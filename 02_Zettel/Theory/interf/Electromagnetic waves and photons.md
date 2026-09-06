---
layout: default
title: "Electromagnetic waves and photons"
---

# Electromagnetic waves and photons

light is both an electromagnetic wave and a stream of photons. interferometry operates in the *wave* regime: it measures the correlation of wave amplitudes (or intensities, in HBT) at separated points. but the photon picture matters for *noise*: the fundamental quantum granularity of light sets the photon-noise floor of every measurement.

## electromagnetic waves

Maxwell's equations in vacuum support transverse waves of the electric and magnetic fields:

$$\mathbf E(\mathbf r, t) = \mathbf E_0 \, e^{i(\mathbf k \cdot \mathbf r - \omega t)}, \quad \mathbf B = \frac{\mathbf k \times \mathbf E}{|\mathbf k|}$$

with $\omega = c |\mathbf k|$ and $\mathbf E \perp \mathbf B \perp \mathbf k$. the wave carries:

- **energy density**: $u = \tfrac12 \epsilon_0 |\mathbf E|^2 + \tfrac{1}{2\mu_0} |\mathbf B|^2 = \epsilon_0 |\mathbf E|^2$
- **Poynting vector** (energy flux): $\mathbf S = \tfrac{1}{\mu_0} \mathbf E \times \mathbf B$, with $\langle |S| \rangle = \tfrac12 c \epsilon_0 |E_0|^2$
- **momentum**: $\mathbf p = \mathbf S/c^2$
- **polarization**: the direction of $\mathbf E$. linear, circular, elliptical, or unpolarized

the **intensity** measured by a detector is the time-averaged Poynting flux:
$$I = \langle |S| \rangle = \tfrac12 c \epsilon_0 |E_0|^2$$

interferometry measures correlations of $\mathbf E$ at separated points. the *visibility* and the *coherence function* both ride on top of this electromagnetic-field structure.

## the scalar approximation

we usually drop the vector nature of $\mathbf E$ and work with a *scalar* amplitude $\psi$. valid when:
- the source is unpolarized (or a single polarization is selected by the instrument)
- we are in the **paraxial** regime (rays nearly parallel to the optical axis)
- we don't care about the cross-polarized components

so for most interferometry, $\psi(\mathbf r, t) = A \, e^{i(\mathbf k \cdot \mathbf r - \omega t)}$ stands in for $\mathbf E$. polarization gets bolted back on when needed (Stokes parameters, polarization calibration).

## photons

quantum mechanically, an EM wave is composed of photons, each carrying:

- **energy** $E_{\rm photon} = h\nu = \hbar\omega$
- **momentum** $\mathbf p_{\rm photon} = \hbar \mathbf k$
- **angular momentum** $\pm \hbar$ (helicity, corresponding to circular polarization)

a beam with intensity $I$ at frequency $\nu$ has photon flux

$$\Phi = \frac{I}{h\nu}$$

in photons per unit area per second.

## the photon-noise limit

photons are statistically independent (for thermal/laser sources, modulo quantum corrections). the number $N$ of photons detected in time $\tau$ is Poisson-distributed:
$$\langle N \rangle = \Phi A \tau, \quad \sigma_N = \sqrt{\langle N \rangle}$$

so the relative uncertainty is $1/\sqrt{N}$.

for an interferometric measurement, this puts a **fundamental floor on the visibility uncertainty**:

$$\sigma_V \sim \frac{1}{V \sqrt{N}} \quad \text{(roughly)}$$

a faint source with few photons gives a noisy visibility regardless of how good the optics are. this is *the* sensitivity limit at the optical wavelengths where photon counting matters.

## radio: photons or waves?

at radio wavelengths, $h\nu \ll k_B T_{\rm sys}$, so we have *very many* photons per coherence cell. the photon noise is negligible compared to the thermal noise of the receivers. radio interferometry is therefore well-described as classical electromagnetic-wave electronics: the signal is a voltage proportional to $\mathbf E$, recorded and correlated like any other low-frequency signal.

at sub-mm/optical/IR wavelengths, $h\nu \gg k_B T$, we count photons, and photon statistics matter.

the boundary is around $\sim 100$ GHz for room-temperature receivers, lower for cryogenic detectors. ALMA at 100 GHz is on the boundary.

## wave-particle complementarity

the quintessential question: in Young's experiment, does each photon "go through both slits"?

answer (as far as the experiment is concerned): each photon contributes to the interference pattern *as if it had an amplitude through each slit*. the probability density of detection is $|\psi_1 + \psi_2|^2$, just like the classical wave intensity.

but if I *measure* which slit a photon went through, the interference disappears: the measurement collapses the wavefunction to a single slit. this **complementarity** is the foundational lesson of quantum optics.

for interferometry, the practical lesson: **never measure which path the light took** if you want to see fringes. delay lines, beam combiners, etc. are designed to make the two paths *indistinguishable*.

## see also

- [Plane waves and Huygens principle](../../../02_Zettel/Theory/interf/Plane waves and Huygens principle.md)
- [Superposition and interference](../../../02_Zettel/Theory/interf/Superposition and interference.md)
- [Photon noise and statistics](../../../02_Zettel/Theory/interf/Photon noise and statistics.md)
- [Polarization in interferometry](../../../02_Zettel/Theory/interf/Polarization in interferometry.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
