---
layout: default
title: "Spatial coherence"
---

# Spatial coherence

the *correlation between the wave at two points in space*. spatial coherence is what makes interference fringes possible across a baseline. it is set by the angular size of the source: smaller sources are more coherent over a wider baseline. this is the physical fact behind Van Cittert-Zernike.

## definition

let $E(\mathbf r_1, t)$ and $E(\mathbf r_2, t)$ be the wave amplitudes at two points. the **spatial coherence function** (mutual coherence at zero time delay) is

$$\Gamma_{12}(\mathbf r_1, \mathbf r_2) = \langle E^*(\mathbf r_1, t) E(\mathbf r_2, t) \rangle$$

normalized:

$$\gamma_{12} = \frac{\Gamma_{12}}{\sqrt{\langle |E_1|^2 \rangle \langle |E_2|^2 \rangle}}$$

with $|\gamma_{12}| \in [0, 1]$. this is the **complex degree of spatial coherence**.

## the link to visibility

for an interferometer with two sub-apertures at $\mathbf r_1, \mathbf r_2$:

$$\mathcal V = \gamma_{12}(\mathbf r_1, \mathbf r_2)$$

the visibility *is* the spatial coherence. measure one, and you have the other.

## what controls spatial coherence

the angular size of the source. a point source produces fully coherent light everywhere ($|\gamma| = 1$ for any baseline). an extended source produces partially coherent light: each point on the source emits independently, and contributions from different points have different phase relationships at the two telescopes. they partially cancel.

quantitatively, the **Van Cittert-Zernike theorem** says
$$\gamma_{12}(\mathbf B) \propto \int I(\mathbf l) e^{-2\pi i \mathbf B \cdot \mathbf l/\lambda} \, d^2\mathbf l$$

where $\mathbf B = \mathbf r_2 - \mathbf r_1$ and $I(\mathbf l)$ is the source brightness distribution.

so:
- as the source gets larger (extended in $\mathbf l$), the FT becomes more peaked at small $\mathbf u = \mathbf B/\lambda$. so $|\gamma|$ falls off faster with $\mathbf B$
- as the source gets smaller, the FT broadens. $|\gamma|$ stays high for larger $\mathbf B$

a perfectly resolved source ($\theta_s$ much larger than $\lambda/B$): $|\gamma| \approx 0$. no fringes.
a perfectly unresolved source ($\theta_s$ much smaller than $\lambda/B$): $|\gamma| \approx 1$. perfect fringes.

## the coherence area

the area over which $|\gamma|$ is high is the **coherence area**:

$$A_c \approx \left(\frac{\lambda}{\theta_s}\right)^2$$

for a source of angular size $\theta_s$.

examples:
- the Sun ($\theta_s \approx 0.5°$): $A_c$ at 500 nm is $\sim (500\,\text{nm}/0.01\,\text{rad})^2 \sim (50\,\mu\text{m})^2$. so two slits more than 50 μm apart see incoherent sunlight — no fringes
- a star at 10 pc with $R_\odot$ ($\theta_s \sim 1$ mas): $A_c$ at 500 nm is $\sim (500\,\text{nm}/5\times10^{-9}\,\text{rad})^2 \sim (100\,\text{m})^2$. so over a 100m baseline, fringes are still visible. that's why stellar interferometry uses 100m baselines

the coherence area sets the *baseline range* useful for resolving a given source.

## measuring spatial coherence

an interferometer with baseline $\mathbf B$ measures $\gamma_{12}(\mathbf B)$ via the visibility of the resulting fringes. varying $\mathbf B$ traces out $\gamma$ as a function of baseline.

for a uniform disk:
- $|\gamma|$ falls from 1 to 0 like the Airy function
- first zero at $B_0 = 1.22 \lambda/\theta_s$

so finding the first null in the visibility curve gives the source diameter.

## the relation to atmospheric coherence

the atmosphere imposes its own spatial coherence limit. due to turbulence, two points separated by more than the **Fried parameter $r_0$** see independent atmospheric phase distortions. so over baselines $B > r_0$, the *atmosphere* destroys coherence even if the source is fully coherent.

this is why optical interferometry is hard: the atmosphere limits baselines to $\sim r_0 \sim 10$ cm without correction. AO and fringe tracking extend this to baselines limited by mechanical engineering instead of physics.

at radio wavelengths, $r_0 \sim 10^4$ m. virtually all baselines are atmospheric-coherent.

## a worked example: the Sun

is sunlight spatially coherent? at 500 nm, the Sun's angular size is 30 arcmin = $9 \times 10^{-3}$ rad. the coherence length on Earth is

$$\ell_c \sim \lambda/\theta_s \sim 500\,\text{nm}/(9 \times 10^{-3}) \sim 55\,\mu\text{m}$$

so two pinholes more than 55 μm apart see independent light from the Sun and no Young fringes form. closer than 55 μm, fringes are visible. this is exactly Stéphan's argument for measuring the Sun's size by Young's slits — except the Sun is too large to give a useful test.

## the implications for interferometry

three:

1. **why we want long baselines**: longer baselines $\to$ smaller $\theta_s$ probed. resolution scales as $\lambda/B$
2. **why visibility falls with baseline**: the source has finite angular size, $|\gamma|$ tracks the FT
3. **why we measure visibility at multiple baselines**: each baseline samples one Fourier component; many baselines reconstruct the source

## see also

- [Coherent vs incoherent imaging](../../../02_Zettel/Theory/interf/Coherent vs incoherent imaging.md)
- [Temporal coherence](../../../02_Zettel/Theory/interf/Temporal coherence.md)
- [Coherence function and visibility](../../../02_Zettel/Theory/interf/Coherence function and visibility.md)
- [Van Cittert-Zernike theorem](../../../02_Zettel/Theory/interf/Van Cittert-Zernike theorem.md)
- [Fringe visibility and contrast](../../../02_Zettel/Theory/interf/Fringe visibility and contrast.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
