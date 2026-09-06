---
layout: default
title: "Superposition and interference"
---

# Superposition and interference

waves add. when two coherent waves arrive at the same point, their amplitudes (not their intensities) sum, and the result has intensity $I = |\psi_1 + \psi_2|^2$. depending on the relative phase, the two waves can constructively reinforce or destructively cancel. this *interference* is what every interferometer measures.

## the math

let two monochromatic waves arrive at a detector with amplitudes $\psi_1 = A_1 e^{i\phi_1}$ and $\psi_2 = A_2 e^{i\phi_2}$. the total amplitude is

$$\psi = \psi_1 + \psi_2 = A_1 e^{i\phi_1} + A_2 e^{i\phi_2}$$

intensity = $|\psi|^2$:

$$I = |\psi_1 + \psi_2|^2 = |A_1|^2 + |A_2|^2 + 2 |A_1| |A_2| \cos(\phi_1 - \phi_2)$$

the third term, $2 A_1 A_2 \cos(\Delta\phi)$, is the **interference term**. it oscillates between $\pm 2 A_1 A_2$ as the phase difference $\Delta\phi = \phi_1 - \phi_2$ varies.

## the fringe pattern

at points where $\Delta\phi = 0, \pm 2\pi, \pm 4\pi, \ldots$: constructive interference, $I_{\max} = (A_1 + A_2)^2$.

at points where $\Delta\phi = \pm\pi, \pm 3\pi, \ldots$: destructive interference, $I_{\min} = (A_1 - A_2)^2$.

if $A_1 = A_2$: $I_{\max} = 4 A^2$, $I_{\min} = 0$. perfect contrast.

if $A_1 \gg A_2$ (very different intensities): $I_{\max} \approx (A_1 + A_2)^2 \approx A_1^2$, $I_{\min} \approx A_1^2$. low contrast.

## fringe visibility

the contrast of the fringe pattern:
$$V = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}} = \frac{2 A_1 A_2}{A_1^2 + A_2^2}$$

if $A_1 = A_2$: $V = 1$. perfect fringes.
if $A_1 \neq A_2$: $V < 1$. weaker fringes.

for an extended source, the visibility is also reduced by an additional factor — see [Van Cittert-Zernike theorem](../../../02_Zettel/Theory/interf/Van Cittert-Zernike theorem.md).

## Young's two-slit experiment

two slits separated by $d$, illuminated by a coherent plane wave. on a screen at distance $L \gg d$, the path difference between the two slits to a point at angle $\theta$ is

$$\Delta = d \sin\theta \approx d \theta$$

the phase difference is $\Delta\phi = 2\pi \Delta/\lambda = 2\pi d \theta/\lambda$.

bright fringes ($\Delta\phi = 2\pi n$) at angles $\theta_n = n \lambda/d$.

fringe spacing on the screen: $\Delta y = L \theta = L \lambda/d$.

this is the prototype interferometer: two apertures, an interference pattern, fringe spacing inversely proportional to baseline.

## extension: fringes from extended sources

if the source is a *uniformly bright disk* (rather than a single point), each point on the disk produces its own fringe pattern, and the patterns add **incoherently** (since the points are mutually incoherent). the result: the fringes have lower contrast.

specifically, a uniform disk of angular diameter $\theta_d$ produces fringes with visibility

$$V(B) = \left| \frac{2 J_1(\pi \theta_d B/\lambda)}{\pi \theta_d B/\lambda} \right|$$

where $B = d$ is the baseline. the fringe contrast falls to zero (first null) at $B = 1.22 \lambda/\theta_d$ — the same Airy formula. measuring $V(B)$ at multiple baselines and finding where it nulls gives the source diameter.

this is exactly Michelson's method for measuring stellar diameters in 1920.

## the role of phase stability

interference requires the phase difference between the two paths to be **stable** over the integration time. if some external effect (atmospheric turbulence, mirror vibrations, thermal expansion of an arm) randomizes $\Delta\phi$ on timescales shorter than the integration, the cosine term averages to zero and fringes vanish.

this is why optical interferometry is hard: atmospheric phase fluctuations are $\gg 2\pi$ on $\sim$ ms timescales. either fringes are tracked actively, or the integration is short enough to freeze the atmosphere (speckle interferometry).

radio interferometry has it easier because the wavelengths are longer and the atmosphere is "smoother" (in units of $\lambda$).

## photons and interference

interference is a wave phenomenon, but light is also photons. Dirac: "each photon interferes with itself." even at low light levels where photons arrive one at a time, they still produce the interference pattern *over time* — each photon has a probability density given by the wave intensity at the detector.

this is the central quantum-classical correspondence underlying every interferometric measurement.

## scientific figure

![young_double_slit_interference](../../../assets/images/young_double_slit_interference.svg)

reading cue: interference is not an abstract word here. it is literally wave amplitudes adding with a phase difference, producing bright and dark fringes when the path difference changes by fractions of a wavelength.

source: local study diagram generated from the standard Young/Fraunhofer geometry.

## see also

- [Plane waves and Huygens principle](../../../02_Zettel/Theory/interf/Plane waves and Huygens principle.md)
- [Young experiment as a stellar interferometer](../../../02_Zettel/Theory/interf/Young experiment as a stellar interferometer.md)
- [Fringe visibility and contrast](../../../02_Zettel/Theory/interf/Fringe visibility and contrast.md)
- [Coherence function and visibility](../../../02_Zettel/Theory/interf/Coherence function and visibility.md)
- [Van Cittert-Zernike theorem](../../../02_Zettel/Theory/interf/Van Cittert-Zernike theorem.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
