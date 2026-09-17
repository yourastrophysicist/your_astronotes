---
layout: "default"
title: "Coherence function and visibility"
---
{% raw %}
# Coherence function and visibility

the formal mathematical link between *coherence* (a statistical property of the wave) and *visibility* (the observable). they are the same quantity viewed from two angles. understanding this equivalence is crucial: the rest of the formalism — Van Cittert-Zernike, fringe contrast, calibration — is just consequences.

## the mutual coherence function

at two points $\mathbf r_1, \mathbf r_2$ and two times $t_1, t_2$:

$$\Gamma(\mathbf r_1, \mathbf r_2, t_1, t_2) = \langle E^*(\mathbf r_1, t_1) E(\mathbf r_2, t_2) \rangle$$

where the angle brackets denote ensemble (or long-time) averaging. for **stationary** processes (statistical properties don't change with time), only the time difference $\tau = t_2 - t_1$ matters:

$$\Gamma_{12}(\tau) = \langle E^*(\mathbf r_1, t) E(\mathbf r_2, t + \tau) \rangle$$

this is the **mutual coherence function**.

## the complex degree of coherence

normalized:

$$\gamma_{12}(\tau) = \frac{\Gamma_{12}(\tau)}{\sqrt{\Gamma_{11}(0) \Gamma_{22}(0)}}$$

with $\Gamma_{ii}(0) = \langle   \vertE(\mathbf r_i, t)\vert ^2 \rangle = $ intensity at point $i$.

properties:
- $\lvert \gamma_{12}\rvert \in [0, 1]$
- $\gamma_{12}(0)$: spatial coherence at zero time delay
- $\gamma_{11}(\tau)$ at the same point: temporal autocorrelation

so coherence has both a *spatial* dependence (on $\mathbf r_1, \mathbf r_2$) and a *temporal* dependence (on $\tau$). the two are entangled in the full $\Gamma$.

## quasi-monochromatic separation

for narrow-bandwidth light (the usual case in interferometry):

$$\gamma_{12}(\tau) \approx \gamma_{12}(0) \cdot e^{-2\pi i \nu_0 \tau}$$

(the spatial coherence times the carrier oscillation). all the source information is in $\gamma_{12}(0)$, the **complex degree of spatial coherence**. this is what the Van Cittert-Zernike theorem connects to source brightness.

## the equivalence with visibility

an interferometer's two arms collect $E_1, E_2$ from the source via two paths with delays $\tau_1, \tau_2$. at the beam combiner, they superpose:

$$E_{\rm total} = E_1 + E_2$$

intensity, time-averaged:

$$I = \langle   \vertE_1\vert ^2 \rangle + \langle   \vertE_2\vert ^2 \rangle + 2 \text{Re}\, \Gamma_{12}(\tau_1 - \tau_2)$$

let $I_0 = I_1 + I_2$ and $\delta = \tau_1 - \tau_2$. then

$$I = I_0 \left[1 + \frac{2 \sqrt{I_1 I_2}}{I_0} \text{Re}\, \gamma_{12}(\delta) \right]$$

defining $V$ via the contrast formula:

$$V = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}} = \frac{2 \sqrt{I_1 I_2}}{I_0} \lvert \gamma_{12}\rvert$$

if $I_1 = I_2$ (matched arms): $V = \lvert \gamma_{12}\rvert$.

**the fringe visibility *is* the magnitude of the mutual coherence function**.

## the visibility's complex extension

the full complex visibility includes phase:

$$\mathcal V = \gamma_{12}(0) = \lvert \gamma_{12}\rvert e^{i \phi_{12}}$$

amplitude $\lvert \mathcal V\rvert$ is contrast, phase $\phi_{12}$ is fringe position.

## why intensity is real but visibility complex

intensity is a real quantity (the squared modulus of the field). but the *cross-correlation* between two fields is complex (the field itself is complex, and conjugating one of them gives a complex inner product).

the visibility is the *complex coherence*, encoding both how strongly correlated the two fields are (amplitude) *and* their relative phase. the relative phase shows up in the *position* of the fringes (where the maximum is).

## diagonal vs off-diagonal

at the same point ($\mathbf r_1 = \mathbf r_2$):
$$\Gamma_{11}(\tau) = $$ autocorrelation of intensity = source spectrum (Wiener-Khinchin)

at the same time but different points ($\tau = 0$):
$$\Gamma_{12}(0) = $$ mutual spatial coherence = visibility = source brightness FT (Van Cittert-Zernike)

so the diagonal and off-diagonal of $\Gamma$ encode different things: temporal coherence ↔ frequency spectrum, spatial coherence ↔ brightness distribution.

both are consequences of the *same* statistical correlations of the wave, just probed in different directions.

## the Van Cittert-Zernike theorem (preview)

stated formally:

$$\gamma_{12}(\mathbf B) = \frac{\int I(\mathbf l) e^{-2\pi i \mathbf B \cdot \mathbf l/\lambda} d^2\mathbf l}{\int I(\mathbf l) d^2\mathbf l}$$

i.e. $\gamma_{12}$ is the **normalized Fourier transform of the source brightness**.

so visibility $\mathcal V(\mathbf u) = $ FT of source brightness, where $\mathbf u = \mathbf B/\lambda$. this is what makes interferometry an inverse-Fourier-transform problem: measure $\mathcal V$ at many baselines, FT$^{-1}$ to image.

## the role of polarization

the formalism above is *scalar* — it ignores polarization. for polarized sources:

- the field $\mathbf E$ is a vector
- the coherence "function" becomes a 2x2 matrix (the **coherency matrix**)
- four Stokes parameters describe the source polarization
- a polarized interferometer measures these four

most of the course is scalar. polarization-aware interferometry shows up in [Polarization in interferometry](interf/Polarization%20in%20interferometry.html).

## the role of bandwidth (again)

a wide-bandwidth signal has $\Gamma_{11}$ with rapidly oscillating exponentials at different $\nu$. the spatial part $\gamma_{12}(0)$ is the same (for a uniform source over the band), but the *interferometer integrating over bandwidth* sees a fringe envelope. this is **bandwidth smearing** — fringes wash out at delays $> \ell_c$.

## scientific figure

![07_Images/Interferometry/van_cittert_zernike_geometry.svg](../../assets/images/van_cittert_zernike_geometry.svg)

reading cue: visibility is the normalized coherence between two points in the wave field. physically, it is what remains of the fringe contrast after the extended source has washed out some phase coherence.

source: local study diagram generated from the standard mutual-coherence geometry.

## see also

- [Spatial coherence](interf/Spatial%20coherence.html)
- [Temporal coherence](interf/Temporal%20coherence.html)
- [Van Cittert-Zernike theorem](interf/Van%20Cittert-Zernike%20theorem.html)
- [Fringe visibility and contrast](interf/Fringe%20visibility%20and%20contrast.html)
- [Astronomical_Interferometry_MOC](../../04_Atlas/Astronomical_Interferometry_MOC.html)
{% endraw %}