---
layout: default
title: "Cosmic_inventory_dark_matter"
---

"matter" in cosmology means non-relativistic, pressureless stuff. the four baryon methods (see [Cosmic_inventory_baryons](../../02_Zettel/Theory/Cosmic_inventory_baryons.html)) depend on photon-matter interaction; there are *other* methods that bypass photons entirely and exploit gravity:

> *typically one exploits the gravitational effects that matter determines, e.g. the gravitational field produced by a given system from which one infers the mass of the system.*

these methods consistently give a total matter density several times the baryon density. the difference is **dark matter**: non-relativistic, effectively pressureless, gravitationally interacting, but invisible to photons.

<img src="{{ "/assets/images/intro-16.png" | relative_url }}" alt="intro-16" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## the answer

from Planck 2018:
$$\boxed{\,\Omega_m = 0.315 \pm 0.007, \quad \Omega_{dm} h^2 = 0.120 \pm 0.001\,}$$

so the matter density is about **five times the baryon density**. *most of the matter in the universe is not baryons.* dark matter is some new particle species (or species).

<img src="{{ "/assets/images/intro-24.png" | relative_url }}" alt="intro-24" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## evidence on galactic scales — rotation curves

textbook argument. for a circular orbit at radius $r$ inside a spherical mass distribution $M(r)$:
$$V^2(r) = \frac{GM(r)}{r}$$

if all the mass is luminous and concentrated in a stellar disk, then beyond the disk edge $r_*$ the enclosed mass is constant and the velocity drops:
$$V(r) \propto \frac{1}{r^{1/2}} \qquad \text{(Keplerian fall-off)}$$

<img src="{{ "/assets/images/intro-18.png" | relative_url }}" alt="intro-18" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

what we *observe* is completely different. neutral hydrogen (21-cm) observations probe rotation way past the optical disk, and the curves stay **flat**. flat $V(r)$ means $M(r) \propto r$, so there is mass distributed at large radii that does not emit light.

### measuring rotation curves

a galaxy is parametrized by its center, systemic velocity $V_{sys}$, circular velocity $V(R)$, inclination $i$, azimuth $\theta$:
$$V_{obs}(\xi, \eta) = V_{sys} + V(R)\cos\theta\sin i$$

<img src="{{ "/assets/images/intro-19.png" | relative_url }}" alt="intro-19" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

velocities are measured from Doppler shifts of emission lines (one side blueshifted, one redshifted).

### historical surveys

Rubin & Ford (1970), Roberts & Whitehurst (1975), the entire Rubin sample of 21 Sc galaxies (1980) — all show: **no rotation curve follows the stellar disk velocity profile**.

<img src="{{ "/assets/images/intro-20.png" | relative_url }}" alt="intro-20" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

### decomposing the rotation curve

modern analysis fits the observed $V(r)$ as the sum of three components: stellar disk + gas + dark matter halo.

<img src="{{ "/assets/images/intro-21.png" | relative_url }}" alt="intro-21" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

the stellar disk peaks and falls off; the gas rises slowly; the dark matter halo dominates at large radius. without a halo the high-$r$ flat curve cannot be explained. (Corbelli & Salucci 2000 for M33.)

---

## evidence on cosmological scales

galactic rotation curves only give a *galaxy-scale* measurement. the more compelling evidence comes from cosmological scales:

<img src="{{ "/assets/images/intro-23.png" | relative_url }}" alt="intro-23" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

1. **distribution of galaxies on large scales** — strongly dependent on $\Omega_m h$
2. **cosmic velocity fields** — peculiar motions trace the underlying gravitational potential
3. **measurements that depend on $\Omega_b/\Omega_m$**, like:
   - X-ray and Sunyaev-Zel'dovich measurements of cluster gas
   - **baryon acoustic oscillations** in the matter power spectrum (see [Matter power spectrum and BAO](../../02_Zettel/Theory/Matter power spectrum and BAO.html))
4. **CMB temperature anisotropies and polarization** — the peak heights fix $\Omega_m h^2$

### CMB anisotropies fix the total matter

the relative heights of the second, third, fourth peaks fix $\Omega_m h^2$:

<img src="{{ "/assets/images/intro-25.png" | relative_url }}" alt="intro-25" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

### mass-to-light ratio across scales

a direct check. $M/L_B$ vs scale: luminous matter tracks $L$, total mass tracks $M$. if $M/L$ stayed constant with scale, all matter would be luminous. it does not.

<img src="{{ "/assets/images/intro-17.png" | relative_url }}" alt="intro-17" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

at galactic scales (spirals, ellipticals): $M/L \sim 10$ in solar units. at cluster scales (rich clusters, superclusters): $M/L \sim 200\text{–}300$, consistent with $\Omega_m \approx 0.3$. the rise tells you the dark matter fraction increases on larger scales.

### the BAO smoking gun

a universe of pure baryons would have huge oscillations in $P_m(k)$. our universe has small wiggles on top of a smooth dark-matter power-law. the data agree with the dark-matter-dominated prediction.

<img src="{{ "/assets/images/intro-28.png" | relative_url }}" alt="intro-28" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## the matter power spectrum

zoom out on $P_m(k)$:

<img src="{{ "/assets/images/intro-27.png" | relative_url }}" alt="intro-27" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

the **turnover** at $k \sim 0.02\,h\,\text{Mpc}^{-1}$ corresponds to the **horizon size at matter-radiation equality** — directly sensitive to $\Omega_m h^2$. modes that entered the horizon during radiation domination did not grow (Meszaros effect); modes that entered later did. so the position of the turnover fixes the matter density.

→ see [Matter power spectrum and BAO](../../02_Zettel/Theory/Matter power spectrum and BAO.html) for the full physics.

---

## what is dark matter made of?

unknown. candidates include:
- **WIMPs** (weakly interacting massive particles) at the electroweak scale, $m_{\rm DM} \sim 100$ GeV. attractive because thermal freeze-out of a weak-cross-section particle naturally gives $\Omega_{dm} h^2 \sim 0.1$ — the **WIMP miracle**, see Dark matter relics — WIMP miracle
- **axions** at very low mass ($\mu$eV), produced by misalignment in the early universe
- **sterile neutrinos** at keV scale
- **primordial black holes**

distinguishing **hot vs cold dark matter** by structure formation: see [Hot vs cold dark matter](../../02_Zettel/Theory/Hot vs cold dark matter.html). observations strongly favor cold dark matter (CDM), the C in ΛCDM.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Cosmic_inventory_overview](../../02_Zettel/Theory/Cosmic_inventory_overview.html)
- [Cosmic_inventory_baryons](../../02_Zettel/Theory/Cosmic_inventory_baryons.html)
- [Matter power spectrum and BAO](../../02_Zettel/Theory/Matter power spectrum and BAO.html)
- Dark matter relics — WIMP miracle
- [Hot vs cold dark matter](../../02_Zettel/Theory/Hot vs cold dark matter.html)
