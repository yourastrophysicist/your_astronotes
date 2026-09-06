---
layout: default
title: "Electromagnetic waves and photons"
---

# Electromagnetic waves and photons

light is both an electromagnetic wave and a stream of photons. interferometry operates in the **wave regime**: it measures the correlation of wave amplitudes (or intensities, in HBT) at separated points. but the photon picture matters for **noise**: the fundamental quantum granularity of light sets the photon-noise floor of every measurement.

<img src="{{ "/assets/images/Onde_cisaillement_impulsion_1d_30_petit.gif" | relative_url }}" alt="Illustration of a transverse electromagnetic wave propagating through space" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

## classical electromagnetic waves & electron currents

Maxwell's equations in vacuum support transverse waves of the electric $\mathbf{E}$ and magnetic $\mathbf{B}$ fields:

$$\mathbf E(\mathbf r, t) = \mathbf E_0 \, e^{i(\mathbf k \cdot \mathbf r - \omega t)}, \quad \mathbf B = \frac{\mathbf k \times \mathbf E}{|\mathbf k|}$$

with $\omega = c |\mathbf k|$ and $\mathbf E \perp \mathbf B \perp \mathbf k$. The wave carries:

- **energy density**: $u = \tfrac12 \epsilon_0 |\mathbf E|^2 + \tfrac{1}{2\mu_0} |\mathbf B|^2 = \epsilon_0 |\mathbf E|^2$
- **Poynting vector** (energy flux): $\mathbf S = \tfrac{1}{\mu_0} \mathbf E \times \mathbf B$, with time-average $\langle |S| \rangle = \tfrac12 c \epsilon_0 |E_0|^2$
- **intensity**: $I = \langle |S| \rangle = \tfrac12 c \epsilon_0 |E_0|^2$
- **polarization**: the direction of $\mathbf E$.

### microscopic physical interaction with radio antennas
In radio astronomy, radiation interacts with conductive antennas via classical electrodynamics:
1. The incident wave's electric field $\mathbf{E}(\mathbf{r}, t)$ exerts a **Lorentz force** $\mathbf{F} = q\mathbf{E}$ on free electrons inside the metal antenna/feed.
2. Under Ohm's law ($\mathbf{J} = \sigma \mathbf{E}$), this forces electrons into coherent, continuous macroscopic oscillation:
   $$I(t) = \frac{dq}{dt} \propto E(t)$$
3. The antenna produces an AC electrical voltage $V(t) \propto E(t)$ that preserves both the field amplitude $E_0$ and the sky wave phase $\phi_{\text{sky}}$.

---

## photons & quantum statistics

quantum mechanically, an EM wave is composed of discrete energy quanta (photons), each carrying:

- **energy**: $E_{\rm photon} = h\nu = \hbar\omega$
- **momentum**: $\mathbf p_{\rm photon} = \hbar \mathbf k$
- **spin angular momentum**: $\pm \hbar$ (helicity, corresponding to circular polarization)

a beam with intensity $I$ at frequency $\nu$ has photon flux density:

$$\Phi = \frac{I}{h\nu}$$

### photon noise (shot noise) limit
In the optical regime where photons are detected individually, the number $N$ of photons collected in time $\tau$ follows Poisson statistics:
$$\langle N \rangle = \Phi A \tau, \quad \sigma_N = \sqrt{\langle N \rangle}$$

This places a fundamental **photon-noise floor** on optical visibility measurements:
$$\sigma_V \approx \frac{1}{V \sqrt{N}}$$
Faint optical sources with low photon counts yield noisy fringe visibilities regardless of optical quality.

---

## radio vs optical: photons or waves?

The boundary between whether an astronomical instrument operates in the **photon-counting regime** or the **classical wave/current regime** is governed by the photon occupation number per coherence mode, dictated by the Planck blackbody law:

$$\bar{n}_{\text{photon}} = \frac{1}{e^{h\nu / k_B T} - 1}$$

- **Radio Astronomy ($h\nu \ll k_B T$, Rayleigh-Jeans limit)**:
  For $\nu = 1.4\text{ GHz}$ ($\lambda = 21\text{ cm}$), $h\nu / k_B \approx 0.07\text{ K} \ll T_{\rm sys} \approx 30\text{ K}$. Photon occupation numbers $\bar{n}_{\text{photon}} \gg 10^5$. Quantum photon noise is completely negligible compared to thermal receiver noise. Signals are processed as continuous field voltages $V(t)$ and amplified by LNAs.

- **Optical / IR Astronomy ($h\nu \gg k_B T$, Wien limit)**:
  For $\lambda = 500\text{ nm}$ ($\nu = 6 \times 10^{14}\text{ Hz}$), $h\nu / k_B \approx 28,800\text{ K} \gg T_{\rm ambient}$. Photon occupation numbers $\bar{n}_{\text{photon}} \ll 10^{-4}$. Individual photons are scarce, and linear amplification adds quantum noise ($h\nu$ per mode). Thus, optical interferometers must use **direct detection** (physically overlapping light on beam splitters) and count discrete photons.

---

## see also

- [Radio telescope components](../../02_Zettel/Theory/Radio telescope components.html)
- [Heterodyne vs direct detection](../../02_Zettel/Theory/interf/Heterodyne vs direct detection.html)
- [Photon noise and statistics](../../02_Zettel/Theory/interf/Photon noise and statistics.html)
- [Plane waves and Huygens principle](../../02_Zettel/Theory/interf/Plane waves and Huygens principle.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)