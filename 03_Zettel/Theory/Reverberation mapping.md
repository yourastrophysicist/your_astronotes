---
layout: "default"
title: "Reverberation mapping"
---
## Physical Principle

**Reverberation mapping** (Blandford & McKee 1982; Peterson 1993, 2004) measures the physical size of the **Broad-Line Region (BLR)** in Active Galactic Nuclei (AGN) and quasars by measuring the light-travel time delay between variations in the ionizing continuum (from the central accretion disk) and the response of broad emission lines (reprocessed by orbiting gas clouds).

---

## Unbroken Mathematical Derivations

### Derivation 1 - Isodelay Paraboloid Geometry
Consider a central continuum point source located at the origin $\mathcal{O}(0,0,0)$. An observer is located at distance $d \gg r$ along the positive $z$-axis.

Let a BLR gas cloud be located at spherical coordinates $(r, \theta, \phi)$, where $\theta$ is the angle between the position vector $\vec{r}$ and the line of sight to the observer ($+z$ direction).

1. **Direct Continuum Path -**
   A continuum photon emitted towards the observer at $t = 0$ travels distance $d$ and reaches the observer at.
   $$t_{\rm direct} = \frac{d}{c}$$

2. **Reprocessed Emission-Line Path -**
   A continuum photon emitted towards the cloud travels distance $r$, excites the gas instantaneously, and the emitted line photon travels distance $d - z = d - r\cos\theta$ to reach the observer at.
   $$t_{\rm line} = \frac{r + (d - r\cos\theta)}{c}$$

3. **Relative Time Delay $\tau$ -**
   $$\tau(r, \theta) \equiv t_{\rm line} - t_{\rm direct} = \frac{r + d - r\cos\theta - d}{c}$$
   $$\boxed{\tau(r, \theta) = \frac{r}{c}(1 - \cos\theta)}$$

#### Equation of the Iso-Delay Surface
Transform to Cartesian coordinates ($r = \sqrt{x^2 + y^2 + z^2}$ and $z = r\cos\theta$).
$$c\tau = \sqrt{x^2 + y^2 + z^2} - z \implies c\tau + z = \sqrt{x^2 + y^2 + z^2}$$

Square both sides.
$$(c\tau)^2 + 2(c\tau)z + z^2 = x^2 + y^2 + z^2$$

Cancel $z^2$ and solve explicitly for $z$.
$$2(c\tau)z = x^2 + y^2 - (c\tau)^2 \implies \boxed{z = \frac{x^2 + y^2}{2c\tau} - \frac{c\tau}{2}}$$

**Mathematical & Physical Nature of the Surface -**
This is the equation of a **paraboloid of revolution** with its symmetry axis along the line of sight and its focal point at the central continuum source $\mathcal{O}$.
- Clouds directly on the line of sight between the nucleus and observer ($\theta = 0$, $z = +r$) - delay is **zero** ($\tau = 0$).
- Clouds in the sky plane ($z = 0$, $\theta = \pi/2$) - delay is **$\tau = r/c$**.
- Clouds on the far side directly behind the nucleus ($\theta = \pi$, $z = -r$) - delay is **$\tau = 2r/c$** (maximum delay).

---

### Derivation 2 - The Transfer Equation & Cross-Correlation
The time-dependent emission-line flux at line-of-sight velocity $v$ responds linearly to continuum variations $C(t)$.

$$L(v, t) = \int_{-\infty}^\infty \Psi(v, \tau)\, C(t - \tau)\, d\tau$$

where $\Psi(v, \tau)$ is the **velocity-delay map** (2D transfer function).

Integrating over velocity yields the one-dimensional light curve response.
$$L(t) = \int_0^\infty \Psi(\tau)\, C(t - \tau)\, d\tau$$

The mean time delay $\langle\tau\rangle$ is extracted from the centroid of the cross-correlation function $CCF(\tau)$ between $C(t)$ and $L(t)$.
$$\tau_{\rm cent} = \frac{\int \tau\, CCF(\tau)\, d\tau}{\int CCF(\tau)\, d\tau} \implies R_{\rm BLR} = c \langle\tau\rangle$$

---

### Derivation 3 - Virial Supermassive Black Hole Mass
Assuming the BLR clouds are in virialized gravitational motion dominated by the central SMBH potential.

$$\langle v^2 \rangle = \frac{G M_\bullet}{R_{\rm BLR}} \implies M_\bullet = \frac{\langle v^2 \rangle R_{\rm BLR}}{G}$$

Relating the 3D velocity dispersion $\langle v^2 \rangle$ to the line-of-sight velocity width $\Delta V$ (measured as line dispersion $\sigma_v$ or Full Width at Half Maximum $\mathrm{FWHM}$).
$$\langle v^2 \rangle = f \Delta V^2$$

Substituting $R_{\rm BLR} = c\tau$.
$$\boxed{M_\bullet = f \frac{c\tau \Delta V^2}{G}}$$

#### The Virial Factor $f$
The dimensionless virial factor $f$ encapsulates the unknown BLR geometry, kinematics, and viewing inclination $i$.
- For an isotropic random-velocity sphere - $\langle v^2 \rangle = 3 \sigma_{\rm LOS}^2 \implies f_\sigma = 3$.
- For a planar thin disk inclined at angle $i$ - $v_{\rm LOS} = v_K \sin i \implies f = \frac{1}{\sin^2 i}$.
- Empirical calibration against the local $M_\bullet - \sigma$ relation for quiescent ellipticals gives $\langle f_\sigma \rangle \approx 4.3 \pm 1.1$ (Onken et al. 2004; Grier et al. 2013).

---

### Derivation 4 - Velocity-Delay Maps for an Inclined Keplerian Ring
Consider a planar ring of BLR clouds at radius $r$, orbiting a black hole of mass $M_\bullet$ with Keplerian speed $v_K = \sqrt{G M_\bullet / r}$, inclined by angle $i$ to the line of sight ($i = 0$ face-on, $i = 90^\circ$ edge-on).

Parametrize each cloud by azimuthal angle $\phi$ in the ring plane ($\phi = 0$ along the projected major axis).
- Line-of-sight velocity.
  $$v_{\rm LOS}(\phi) = v_K \sin i \cos\phi$$
- Position along line of sight.
  $$z(\phi) = -r \sin i \sin\phi$$
- Time delay.
  $$\tau(\phi) = \frac{r - z}{c} = \frac{r}{c}(1 + \sin i \sin\phi)$$

Express $\cos\phi$ and $\sin\phi$.
$$\cos\phi = \frac{v_{\rm LOS}}{v_K \sin i}, \qquad \sin\phi = \frac{c\tau - r}{r \sin i}$$

Apply the trigonometric identity $\cos^2\phi + \sin^2\phi = 1$.

$$\boxed{\left(\frac{v_{\rm LOS}}{v_K \sin i}\right)^2 + \left(\frac{c\tau - r}{r \sin i}\right)^2 = 1}$$

**Geometrical Result on the Blackboard -**
In the $(v, \tau)$ plane, a Keplerian ring traces an **ellipse** centered at $(v = 0, \tau = r/c)$!
- Semi-horizontal velocity axis - $v_{\rm max} = v_K \sin i$.
- Semi-vertical delay axis - $\Delta\tau = \frac{r}{c} \sin i$.
- At minimum delay $\tau_{\rm min} = \frac{r}{c}(1 - \sin i)$ - approaching and receding edges ($v = 0$).
- At maximum delay $\tau_{\rm max} = \frac{r}{c}(1 + \sin i)$ - far side ($v = 0$).

#### Kinematic Signatures in Velocity-Delay Space
- **Virial Keplerian Disk -** Symmetric ellipse or nested ellipses forming an open chevron or bow-tie shape.
- **Radial Inflow (Accretion) -** Infalling gas on the near side is moving away from the observer ($v > 0$), producing **redshifted emission at short time delays**.
- **Radial Outflow (Winds) -** Outflowing gas on the near side is approaching the observer ($v < 0$), producing **blueshifted emission at short time delays**.

---

## Ionization Stratification - Proof of Virialized Motion

Reverberation campaigns monitoring multiple emission lines in the same AGN (e.g. NGC 5548; Peterson et al. 2002) reveal distinct time lags.
$$\tau(\text{He II }\lambda 4686) < \tau(\text{C IV }\lambda 1549) < \tau(\text{H}\beta) < \tau(\text{H}\alpha)$$

Correspondingly, the line widths scale inversely with lag.
$$\Delta V(\text{He II}) > \Delta V(\text{C IV}) > \Delta V(\text{H}\beta) > \Delta V(\text{H}\alpha)$$

A log-log plot of $\log \Delta V$ versus $\log \tau$ yields a slope of exactly.
$$\frac{d\log \Delta V}{d\log \tau} = -0.5 \iff \Delta V \propto \tau^{-1/2} \propto R^{-1/2}$$
This proves conclusively that the BLR is gravitationally bound and Keplerian ($v \propto r^{-1/2}$), ruling out radiation-pressure-driven outflow as the primary line-broadening mechanism.

---

## The $R_{\rm BLR} - L$ Scaling Relation

Bentz et al. (2009, 2013) subtracted host galaxy starlight using HST imaging, establishing the refined radius-luminosity relation.

$$\boxed{\log_{10}\left(\frac{R_{\rm BLR}}{1\text{ lt-day}}\right) = (1.527 \pm 0.031) + (0.533 \pm 0.035) \log_{10}\left(\frac{\lambda L_\lambda(5100\text{ \AA})}{10^{44}\text{ erg\,s}^{-1}}\right)}$$

The slope $\approx 0.5$ matches theoretical expectation from photoionization physics - an invariant ionization parameter $U = \frac{Q(H)}{4\pi R^2 c n_e} \implies R \propto L^{1/2}$.

This enables **single-epoch SMBH mass estimates** for high-redshift quasars from a single optical/NIR spectrum.
$$M_\bullet = A \left[ \lambda L_\lambda(5100\text{ \AA}) \right]^{0.533} \left[ \text{FWHM}(\text{H}\beta) \right]^2$$

---

## Textbook & Course References

- **Prof. Alessandro Pizzella Course Dispensa**.
  - File `dispense_smbh_20_eng.pdf`
  - Chapter 2, Section 2.6 "Reverberation Mapping", pp. 21-25 (light curves, cross-correlation, transfer function, virial mass).
- **Student Synthesis Document**.
  - File `SMBH_in_Galaxies.tex`
  - Section 8 "Reverberation Mapping" (pp. 14-18) and Section 9 "Velocity-Delay Maps" (pp. 18-20).
- **Mo, van den Bosch & White (2010), *Galaxy Formation and Evolution***.
  - File `Houjun Mo, Frank van den Bosch, Simon White - Galaxy Formation and Evolution (2010, Cambridge University Press) - libgen.li.pdf`
  - Chapter 14, Section 14.2.3 "Reverberation Mapping", pp. 647-650.
- **Peter Schneider (2015), *Extragalactic Astronomy and Cosmology***.
  - File `extragalactic_astro-1.pdf` / Course repo
  - Chapter 5, Section 5.3, pp. 220-228.
- **Master Derivations Guide**.
  - Master Derivations and Mathematical Rigor

---

## see also

- [AGN spectroscopy](AGN%20spectroscopy.html)
- [Magorrian relation](Magorrian%20relation.html)
- [M sigma relation](M%20sigma%20relation.html)
- [Stellar dynamics SMBH masses](Stellar%20dynamics%20SMBH%20masses.html)
- [Water maser BH masses](Water%20maser%20BH%20masses.html)
- [Galactic Center Sgr A and S-stars](interf/Galactic%20Center%20Sgr%20A%20and%20S-stars.html)
- [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html)

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![peterson2004_table.png](../../assets/images/peterson2004_table.png)
*Summary table of AGN reverberation mapping measurements from Peterson et al. (2004).*

![peterson2004_RL.png](../../assets/images/peterson2004_RL.png)
*Broad-Line Region size vs optical luminosity (R_BLR - L relation) from Peterson et al. (2004).*

![bentz2009_RL.png](../../assets/images/bentz2009_RL.png)
*HST recalibration of the R_BLR - L relation by Bentz et al. (2009) correcting for host galaxy starlight.*

![bentz2010_RL.png](../../assets/images/bentz2010_RL.png)
*Refined radius-luminosity relation - R_BLR proportional to L^0.533 (Bentz et al. 2010).*

![bentz2010_velocitydelay.png](../../assets/images/bentz2010_velocitydelay.png)
*Velocity-delay map of Arp 151 showing virialized inflowing gas kinematics (Bentz et al. 2010).*

![gal_bh-09.png](../../assets/images/gal_bh-09.png)
*Reverberation mapping principle - light travel time delay tau = R_BLR / c between continuum and emission lines.*

![gal_bh-10.png](../../assets/images/gal_bh-10.png)
*Virial black hole mass formula - M_BH = f * (c * tau * Delta V^2) / G, where f is the virial factor.*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_bh-29.png](../../assets/images/gal_bh-29.png)

![gal_bh-30.png](../../assets/images/gal_bh-30.png)

![gal_bh-31.png](../../assets/images/gal_bh-31.png)

![gal_bh-32.png](../../assets/images/gal_bh-32.png)

![gal_bh-33.png](../../assets/images/gal_bh-33.png)

![gal_bh-34.png](../../assets/images/gal_bh-34.png)

![gal_bh-35.png](../../assets/images/gal_bh-35.png)

![gal_bh-36.png](../../assets/images/gal_bh-36.png)

![gal_bh-37.png](../../assets/images/gal_bh-37.png)

![gal_bh-38.png](../../assets/images/gal_bh-38.png)

![gal_bh-39.png](../../assets/images/gal_bh-39.png)

![gal_bh-40.png](../../assets/images/gal_bh-40.png)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Ionized%20gas%20SMBH%20masses.html" class="backlink-item">Ionized gas SMBH masses</a></li>
    <li class="backlink-item-wrap"><a href="M%20sigma%20relation.html" class="backlink-item">M sigma relation</a></li>
    <li class="backlink-item-wrap"><a href="Magorrian%20relation.html" class="backlink-item">Magorrian relation</a></li>
    <li class="backlink-item-wrap"><a href="Water%20maser%20BH%20masses.html" class="backlink-item">Water maser BH masses</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
  </ul>
</div>

