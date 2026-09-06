---
layout: default
title: "Hubble's law and cosmological redshift"
---

the discovery that defines modern cosmology: **the universe is expanding**. at low redshift, the **Hubble law** says recession velocity is proportional to distance:
$$v = H_0\, d, \qquad z \simeq \frac{v}{c}$$

at high redshift, the simple Doppler interpretation breaks down and we use the **cosmological redshift** based on the FRW scale factor:
$$1 + z = \frac{a(t_0)}{a(t_e)} = \frac{a_0}{a_e}$$

---

## Hubble's 1929 paper

Edwin Hubble plotted the observed velocities of nearby galaxies against their distances, finding a linear relation:

<img src="{{ "/assets/images/distancescale-19.png" | relative_url }}" alt="distancescale-19" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

(that the slope $H_0 \sim 500$ km/s/Mpc was wrong by a factor 7 doesn't matter — the *linearity* was the discovery.) the modern best values:
- $H_0 = 67.4 \pm 0.5$ km/s/Mpc (Planck CMB)
- $H_0 = 73.04 \pm 1.04$ km/s/Mpc (SH0ES local)

→ the ongoing **Hubble tension**, see [Hubble constant and deceleration parameter](../../02_Zettel/Theory/Hubble constant and deceleration parameter.html).

---

## what is redshift, physically?

three ways to think about it:

### 1. Doppler effect (low z only)

at small recession velocity, the redshift looks like a Doppler shift:
$$z \approx v/c$$

a star moving away at 30 000 km/s has $z = 0.1$, with observed wavelengths 10% longer than emitted.

valid only at low z. at high z this breaks down because the velocities can be a substantial fraction of c, and special relativity is not the right framework.

### 2. cosmological stretching (general)

photons travel through expanding space. as they travel, the **wavelength stretches with the scale factor**:
$$\frac{\lambda_{\rm obs}}{\lambda_{\rm em}} = \frac{a(t_{\rm obs})}{a(t_{\rm em})} = 1 + z$$

so a photon emitted at $z = 1100$ ($a = 1/1100$) has its wavelength stretched by $1100\times$ from the emission time to today. this is why the CMB is microwaves now even though it was emitted at 3000 K.

this picture is valid at any z, in the FRW geometry.

### 3. gravitational time dilation (alternative GR view)

an equivalent way to think about it: light climbs out of the gravitational potential well of the early universe (which had higher density) and gets redshifted in the process. mathematically equivalent to the cosmological stretching picture, but conceptually distinct.

---

## relation to scale factor

**convention**: set $a_0 = a(t_0) \equiv 1$ today. then:
$$a = \frac{1}{1 + z}$$

so:
- $z = 0$: today, $a = 1$
- $z = 1$: $a = 1/2$ — the universe was half its present size
- $z = 1100$: $a \sim 10^{-3}$ — recombination
- $z \to \infty$: $a \to 0$ — Big Bang

---

## low-z derivation

start from the FRW metric. a comoving object at coordinate $r$ has physical distance $d = a(t) r$. differentiating with $r$ fixed (comoving):
$$\dot d = \dot a\, r = \frac{\dot a}{a}\,d = H\,d$$

at the present epoch:
$$v = H_0 d$$

→ Hubble's law is a *direct consequence* of the universe expanding uniformly.

→ see [Hubble law derivation low-z](../../02_Zettel/Theory/Hubble law derivation low-z.html).

---

## the high-z Hubble diagram

at low z ($z \lesssim 0.1$), $d_L \approx cz/H_0$. at higher z, the relation curves:
$$d_L = \frac{c}{H_0}\left[z + \frac{1}{2}(1 - q_0)z^2 + \cdots\right]$$

with $q_0$ the deceleration parameter. measuring $d_L(z)$ at high z fits the cosmological model:
- if the universe is matter-dominated: $q_0 > 0$ (deceleration), curve is steeper than linear at high z
- if the universe has $\Lambda$: $q_0 < 0$ (acceleration), curve is shallower than linear

→ this is what was measured for SN Ia in 1998 (Perlmutter, Riess, Schmidt), discovering dark energy.

→ see [Hubble law exact form](../../02_Zettel/Theory/Hubble law exact form.html) and [Cosmic_inventory_dark_energy](../../02_Zettel/Theory/Cosmic_inventory_dark_energy.html).

---

## the cosmological redshift in measurements

how we measure $z$ in practice:
1. take a spectrum of a distant object
2. identify atomic transition lines (Lyα 1216 Å, Mg II 2798 Å, [OII] 3727 Å, H$\alpha$ 6563 Å, etc.)
3. compare to rest-frame wavelengths: $\lambda_{\rm obs}/\lambda_{\rm rest} = 1 + z$

modern spectroscopy can measure $z$ to precision $\delta z/z \sim 10^{-4}$ for bright sources. for very high z ($z > 6$), the techniques are:
- **Lyman break**: the absorption discontinuity at 1216 Å in the rest frame
- **photometric redshifts**: SED fitting to broadband photometry (much less precise but applicable to fainter sources)

→ see [Photometric redshifts](../../02_Zettel/Theory/Photometric redshifts.html).

---

## the role of redshift in cosmology

redshift is the **single most important number** in cosmology. it gives you:
- the **distance** to the object (via the FRW relation $d_L(z)$)
- the **age** when the photons were emitted ($t = $ lookback time at $z$)
- the **scale factor** at emission: $a_e = 1/(1+z)$
- the **rest-frame** properties from observed spectroscopy

without $z$, you have no idea where in the universe (or in cosmic history) an object is. with $z$, you have the full kinematic placement.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Parallax and standard candles](../../02_Zettel/Theory/Parallax and standard candles.html)
- [Cepheids and supernovae](../../02_Zettel/Theory/Cepheids and supernovae.html)
- [Hubble law derivation low-z](../../02_Zettel/Theory/Hubble law derivation low-z.html)
- [Hubble law exact form](../../02_Zettel/Theory/Hubble law exact form.html)
- [Hubble constant and deceleration parameter](../../02_Zettel/Theory/Hubble constant and deceleration parameter.html)
- 03_Zettel/Theory/Cosmological distances
- 03_Zettel/Theory/Robertson-Walker metric
- [Cosmic_inventory_dark_energy](../../02_Zettel/Theory/Cosmic_inventory_dark_energy.html)
