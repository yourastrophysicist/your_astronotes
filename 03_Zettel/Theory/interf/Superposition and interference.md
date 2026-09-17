---
layout: "default"
title: "Superposition and interference"
---
{% raw %}
# Superposition and interference

waves add. when two coherent waves arrive at the same point, their amplitudes (not their intensities) sum, and the result has intensity $I = \lvert \psi_1 + \psi_2\rvert^2$. depending on the relative phase, the two waves can constructively reinforce or destructively cancel. this *interference* is what every interferometer measures.

## the math

let two monochromatic waves arrive at a detector with amplitudes $\psi_1 = A_1 e^{i\phi_1}$ and $\psi_2 = A_2 e^{i\phi_2}$. the total amplitude is

$$\psi = \psi_1 + \psi_2 = A_1 e^{i\phi_1} + A_2 e^{i\phi_2}$$

intensity = $\lvert \psi\rvert^2$:

$$I = \lvert \psi_1 + \psi_2\rvert^2 = \lvert A_1\rvert^2 + \lvert A_2\rvert^2 + 2 \lvert A_1\rvert \lvert A_2\rvert \cos(\phi_1 - \phi_2)$$

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

for an extended source, the visibility is also reduced by an additional factor — see [Van Cittert-Zernike theorem](./Van%20Cittert-Zernike%20theorem.html).

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

$$V(B) = \left\lvert \frac{2 J_1(\pi \theta_d B/\lambda)}{\pi \theta_d B/\lambda} \right\rvert$$

where $B = d$ is the baseline. the fringe contrast falls to zero (first null) at $B = 1.22 \lambda/\theta_d$ — the same Airy formula. measuring $V(B)$ at multiple baselines and finding where it nulls gives the source diameter.

this is exactly Michelson's method for measuring stellar diameters in 1920.

## the role of phase stability

interference requires the phase difference between the two paths to be **stable** over the integration time. if some external effect (atmospheric turbulence, mirror vibrations, thermal expansion of an arm) randomizes $\Delta\phi$ on timescales shorter than the integration, the cosine term averages to zero and fringes vanish.

this is why optical interferometry is hard: atmospheric phase fluctuations are $\gg 2\pi$ on $\sim$ ms timescales. either fringes are tracked actively, or the integration is short enough to freeze the atmosphere ([speckle interferometry](./Speckle%20interferometry.html)).

radio interferometry has it easier because the wavelengths are longer and the atmosphere is "smoother" (in units of $\lambda$).

## photons and interference

interference is a wave phenomenon, but light is also photons. Dirac: "each photon interferes with itself." even at low light levels where photons arrive one at a time, they still produce the interference pattern *over time* — each photon has a probability density given by the wave intensity at the detector.

this is the central quantum-classical correspondence underlying every interferometric measurement.

## scientific figure

![07_Images/Interferometry/young_double_slit_interference.svg](../../../assets/images/young_double_slit_interference.svg)

reading cue: interference is not an abstract word here. it is literally wave amplitudes adding with a phase difference, producing bright and dark fringes when the path difference changes by fractions of a wavelength.

source: local study diagram generated from the standard Young/Fraunhofer geometry.

## see also

- [Plane waves and Huygens principle](./Plane%20waves%20and%20Huygens%20principle.html)
- [Young experiment as a stellar interferometer](./Young%20experiment%20as%20a%20stellar%20interferometer.html)
- [Fringe visibility and contrast](./Fringe%20visibility%20and%20contrast.html)
- [Coherence function and visibility](./Coherence%20function%20and%20visibility.html)
- [Van Cittert-Zernike theorem](./Van%20Cittert-Zernike%20theorem.html)
- [Astronomical_Interferometry_MOC](../../../04_Atlas/Astronomical_Interferometry_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (14)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astronomical_Interferometry_MOC.html" class="backlink-item">Astronomical_Interferometry_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Electromagnetic%20waves%20and%20photons.html" class="backlink-item">Electromagnetic waves and photons</a></li>
    <li class="backlink-item-wrap"><a href="./Figure%20bank%20-%20interferometry.html" class="backlink-item">Figure bank - interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../Figure%20bank%20-%20interferometry.html" class="backlink-item">Figure bank - interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../Fresnel-Arago%20laws.html" class="backlink-item">Fresnel-Arago laws</a></li>
    <li class="backlink-item-wrap"><a href="./Fresnel-Arago%20laws.html" class="backlink-item">Fresnel-Arago laws</a></li>
    <li class="backlink-item-wrap"><a href="../Light%20waves%20and%20the%20EM%20spectrum.html" class="backlink-item">Light waves and the EM spectrum</a></li>
    <li class="backlink-item-wrap"><a href="./Light%20waves%20and%20the%20EM%20spectrum.html" class="backlink-item">Light waves and the EM spectrum</a></li>
    <li class="backlink-item-wrap"><a href="./Optical%20path%20difference%20OPD.html" class="backlink-item">Optical path difference OPD</a></li>
    <li class="backlink-item-wrap"><a href="../Optical%20path%20difference%20OPD.html" class="backlink-item">Optical path difference OPD</a></li>
    <li class="backlink-item-wrap"><a href="../Plane%20waves%20and%20Huygens%20principle.html" class="backlink-item">Plane waves and Huygens principle</a></li>
    <li class="backlink-item-wrap"><a href="./Plane%20waves%20and%20Huygens%20principle.html" class="backlink-item">Plane waves and Huygens principle</a></li>
    <li class="backlink-item-wrap"><a href="../Young%20experiment%20as%20a%20stellar%20interferometer.html" class="backlink-item">Young experiment as a stellar interferometer</a></li>
    <li class="backlink-item-wrap"><a href="./Young%20experiment%20as%20a%20stellar%20interferometer.html" class="backlink-item">Young experiment as a stellar interferometer</a></li>
  </ul>
</div>
