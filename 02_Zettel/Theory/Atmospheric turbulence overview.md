---
layout: default
title: "Atmospheric turbulence overview"
---

# Atmospheric turbulence overview

the atmosphere is the worst enemy of optical interferometry. air with slightly different temperatures has slightly different refractive indices, so light passing through follows slightly different optical path lengths in different parcels. the resulting *random phase corruption* destroys fringes if not corrected. understanding this is the prerequisite for adaptive optics, fringe tracking, and speckle techniques.

## the basic picture

in the lower atmosphere (turbulent troposphere, $\lesssim 10$ km), turbulence stirs air parcels of different temperatures. each parcel has a slightly different refractive index $n$. light traversing a turbulent column accumulates a phase

$$\phi = \frac{2\pi}{\lambda} \int n(z) \, dz$$

variations in $n$ across the wavefront produce variations in $\phi$. these are the **wavefront aberrations** that distort images.

## three observable consequences

<img src="{{ "/assets/images/Atmospheric_turbulence_overview.jpg" | relative_url }}" alt="Atmospheric turbulence breaking smooth plane waves into corrugated wavefronts, causing seeing disks of width $\lambda/r_0$." class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />


each is described by its own length-scale parameter:

### 1. seeing

a long-exposure image of a point source is blurred to roughly $\theta_{\rm seeing} \sim 0.5''$ FWHM at a good astronomical site. the seeing is set by the **Fried parameter** $r_0$ (the size of the patch over which atmospheric phase remains coherent within $\sim 1$ rad):

$$\theta_{\rm seeing} \approx \frac{\lambda}{r_0}$$

at 500 nm, $r_0 \sim 10$-15 cm at Mauna Kea or Paranal. so seeing FWHM $\sim 1''$. at K-band (2.2 μm), $r_0 \sim 60$ cm, seeing $\sim 0.3''$.

### 2. isoplanatic patch

over what *angular* range is the atmospheric distortion constant? the **isoplanatic angle** $\theta_0 \sim 2$-$3''$ at visible wavelengths. inside this patch, AO correction with a single guide star works. outside, the wavefront from a different sky direction has gone through a different turbulent column and is uncorrelated.

### 3. coherence time

over what *time* is the atmospheric distortion constant? the **Greenwood time** $\tau_0 \sim 5$-10 ms at visible wavelengths. AO must run faster than this; interferometric integrations must be shorter than this.

## the physics: Kolmogorov turbulence

the turbulence is well-described by Kolmogorov's 1941 theory of homogeneous, isotropic turbulence in the inertial range. the structure function of the refractive index is

$$D_n(r) = \langle |n(\mathbf x + \mathbf r) - n(\mathbf x)|^2 \rangle = C_n^2 r^{2/3}$$

with $C_n^2$ the **structure parameter**. integrated along the line of sight, this gives the structure function of the *phase*:

$$D_\phi(r) = 6.88 (r/r_0)^{5/3}$$

with $r_0$ the Fried parameter (see [Kolmogorov turbulence](../../02_Zettel/Theory/interf/Kolmogorov turbulence.html) and [Fried parameter $r_0$](../../02_Zettel/Theory/interf/Fried parameter $r_0$.html)).

this 5/3 power-law is the *defining* mathematical signature of Kolmogorov turbulence. it has been verified at every well-characterized observatory.

## the implications for interferometry

three key effects:

1. **piston** between two telescopes: the atmospheric path differs between the two, adding a relative phase. for $r_0 \sim 10$ cm, the piston wanders by $\sim$ many radians on $\sim$ ms timescales. *fringe phase is destroyed* unless it is tracked actively
2. **wavefront tilt** at each telescope: image position wanders. averaged over time, this gives the seeing-limited PSF
3. **higher-order aberrations** (focus, coma, etc.): blur and distort the image. AO corrects them in real time

## the wavelength scaling

three useful scalings:

$$r_0 \propto \lambda^{6/5}$$

so $r_0$ is *bigger at longer wavelengths*. K-band $r_0 \sim 4 \times$ visible $r_0$.

$$\tau_0 \propto \lambda^{6/5}$$

so the atmosphere is *slower in the IR*. coherence times are $\sim 50$ ms at K vs $\sim 5$ ms at visible.

$$\theta_0 \propto \lambda^{6/5}$$

isoplanatic angle is *bigger in the IR*. $\sim 10''$ at K vs $\sim 2''$ at visible.

so **IR interferometry is fundamentally easier than optical**: bigger $r_0$ (longer baselines work without AO), longer coherence time (longer fringe-tracking integrations), wider isoplanatic angle (more available guide stars). this is why VLTI works in IR, not visible.

## the height structure of turbulence

most turbulent power is in:
- the **boundary layer** (0-1 km above ground): local convection, thermal eddies
- the **tropopause** (~10 km): jet stream, large-scale shear
- a few high-altitude layers

a measured **$C_n^2(h)$ profile** characterizes a site. integrated $C_n^2$ gives $r_0$. the profile shape determines $\theta_0$ and $\tau_0$ separately.

best sites (Paranal, Mauna Kea, Atacama plateau): low total $C_n^2$, dominated by ground layer (which is correctable by ground-layer AO).

## frozen turbulence: the Taylor hypothesis

turbulent eddies are advected by the wind faster than they evolve internally. so the temporal fluctuations at a fixed point are equivalent to a *frozen pattern* moving across the aperture at the wind speed:

$$\phi(\mathbf x, t) = \phi_0(\mathbf x - \mathbf v_{\rm wind} t)$$

(approximately). this is the **Taylor frozen-turbulence hypothesis**, and it makes wavefront prediction tractable: an AO system can use *previous* wavefront measurements to predict the *next* state.

## scintillation: amplitude fluctuations

so far we've considered phase. there is also amplitude scintillation — the wavefront curvature induced by turbulence causes light to focus and defocus, creating bright/dark patterns on the ground. this is the **twinkling** of stars.

scintillation is usually a few percent of total flux but can rise to tens of percent at high airmass. it is the "noise" of differential photometry of bright stars.

## see also

- [Kolmogorov turbulence](../../02_Zettel/Theory/interf/Kolmogorov turbulence.html)
- [Structure function and correlation function](../../02_Zettel/Theory/interf/Structure function and correlation function.html)
- [Fried parameter $r_0$](../../02_Zettel/Theory/interf/Fried parameter $r_0$.html)
- [Isoplanatic patch](../../02_Zettel/Theory/interf/Isoplanatic patch.html)
- [Frozen turbulence and Taylor hypothesis](../../02_Zettel/Theory/interf/Frozen turbulence and Taylor hypothesis.html)
- [Scintillation and twinkling](../../02_Zettel/Theory/interf/Scintillation and twinkling.html)
- [Adaptive optics](../../02_Zettel/Theory/interf/Adaptive optics.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
