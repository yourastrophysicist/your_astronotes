---
layout: "default"
title: "Ionized gas SMBH masses"
---
# Ionized Gas SMBH Masses

Parent [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html) · [Stellar dynamics SMBH masses](Stellar%20dynamics%20SMBH%20masses.html) · [Water maser BH masses](Water%20maser%20BH%20masses.html)

## 1. Physical Principle and Nuclear Gas Disks

Measuring the mass of a supermassive black hole (SMBH) via ionized gas kinematics relies on detecting and modeling the Keplerian rotation of thin, cold gas disks situated in the central tens to hundreds of parsecs of early-type galaxies and spiral bulges.

Hubble Space Telescope (HST) imaging revealed that many giant elliptical galaxies host small, organized nuclear disks of gas and dust oriented perpendicular to radio jets (such as NGC 4261, M84, and M87).

Because gas is collisional, dissipative cooling forces it to settle into a thin disk executing circular orbits in the equatorial plane. When the disk is observed at high spatial resolution, optical nebular emission lines (H-alpha $\lambda 6563$, [N II] $\lambda \lambda 6548, 6583$, [O III] $\lambda 5007$, [S II] $\lambda \lambda 6716, 6731$) yield direct Doppler velocity measurements.

### Advantages Over Stellar Kinematics

- Simple orbital geometry - Gas settles into coplanar circular orbits. Unlike stellar dynamics, there is no velocity anisotropy tensor ($\beta = 0$) to solve.
- Direct measurement - The line centroid gives the mean circular velocity directly from the Doppler shift, avoiding the complicated deconvolution of non-Gaussian absorption line profiles (LOSVD).
- Bright spectral features - Strong emission lines provide high signal-to-noise ratios even in very narrow slits ($0.1''$ with HST/STIS).

## 2. Mathematical Derivation of the Gas Kinematic Model

Consider a thin gaseous disk rotating in circular orbits in the gravitational potential of the galactic nucleus.

The total mass enclosed within radius $r$ consists of the central black hole point mass $M_{\text{BH}}$ plus the distributed stellar mass $M_*(r)$
$$M(r) = M_{\text{BH}} + M_*(r) = M_{\text{BH}} + \left(\frac{M}{L}\right)_* L_*(< r)$$
where $(M/L)_*$ is the stellar mass-to-light ratio and $L_*(< r)$ is the enclosed stellar luminosity obtained by deprojecting the stellar surface brightness profile.

### Circular Velocity Equation

Equating the gravitational acceleration in the disk plane to the kinematic centripetal acceleration
$$\frac{v_c^2(r)}{r} = \frac{d\Phi_{\text{tot}}}{dr} = \frac{G M(r)}{r^2} = \frac{G M_{\text{BH}}}{r^2} + \frac{G M_*(r)}{r^2}$$

Multiplying both sides by $r$
$$v_c^2(r) = \frac{G M_{\text{BH}}}{r} + \frac{G M_*(r)}{r}$$

Taking the square root yields the complete circular velocity
$$v_c(r) = \sqrt{\frac{G M_{\text{BH}}}{r} + \left(\frac{M}{L}\right)_* v_*^2(r)}$$
where $v_*^2(r) = G L_*(< r) / r$ represents the circular velocity contribution from the stars alone for a unit mass-to-light ratio.

In the innermost regions within the sphere of influence $r \ll r_{\text{infl}} = G M_{\text{BH}} / \sigma_*^2$, the point mass dominates completely ($M_{\text{BH}} \gg M_*(r)$), yielding pure Keplerian rotation
$$v_c(r) \approx \sqrt{\frac{G M_{\text{BH}}}{r}} \propto r^{-1/2}$$

### Projection onto the Plane of the Sky

Let the gaseous disk be inclined by an angle $i$ to the line of sight ($i = 0^\circ$ is face-on, $i = 90^\circ$ is edge-on) with a major-axis position angle $\text{PA}$.

Let $(x', y')$ be Cartesian coordinates on the sky plane centered on the black hole, with the $x'$-axis aligned along the projected disk major axis. The physical coordinates in the disk plane $(r, \theta)$ relate to sky coordinates by
$$x' = r \cos \theta, \quad y' = r \sin \theta \cos i$$

Inverting for the disk radius $r$ and azimuthal angle $\theta$
$$r = \sqrt{x'^2 + \left(\frac{y'}{\cos i}\right)^2}, \quad \cos \theta = \frac{x'}{r}$$

The projected line-of-sight velocity field $v_{\text{LOS}}(x', y')$ is given by
$$v_{\text{LOS}}(x', y') = v_{\text{sys}} + v_c(r) \sin i \cos \theta = v_{\text{sys}} + v_c(r) \sin i \left[\frac{x'}{\sqrt{x'^2 + (y' / \cos i)^2}}\right]$$
where $v_{\text{sys}}$ is the systemic recession velocity of the galaxy.

Along the projected major axis ($y' = 0$, $\theta = 0$), the relation reaches maximum amplitude
$$v_{\text{LOS}}(x') = v_{\text{sys}} \pm v_c(x') \sin i$$

### Asymmetric Drift Correction for Turbulent Support

If the gas possesses significant random turbulent motion characterized by an intrinsic velocity dispersion $\sigma_g(r)$, the radial pressure gradient supports part of the gas against gravity. The true circular velocity $v_c(r)$ must then be corrected for asymmetric drift
$$v_c^2(r) = v_\phi^2(r) + \sigma_g^2(r) \left[ - \frac{d\ln \Sigma_g}{d\ln r} - \frac{d\ln \sigma_g^2}{d\ln r} \right]$$
where $v_\phi(r)$ is the observed mean azimuthal rotation velocity, and $\Sigma_g(r)$ is the gas surface density.

In cold, well-ordered disks, $\sigma_g \ll v_\phi$, so this correction is modest (typically $< 5\%$).

## 3. Observational Modeling and Beam Smearing

To measure $M_{\text{BH}}$, the theoretical line-of-sight velocity field $v_{\text{LOS}}(x', y')$ cannot simply be compared directly to raw data. It must be processed through the exact optical transfer function of the telescope and spectrograph.

### The Five Steps of Gas Dynamical Modeling

1. Deproject stellar surface brightness - Determine the 3D stellar potential $\Phi_*(r)$ from high-resolution HST imaging.
2. Formulate disk geometry - Determine the disk inclination $i$ and position angle $\text{PA}$ from dust lane morphology or outer kinematic contours.
3. Compute the velocity field - Calculate $v_c(r)$ on a fine sub-pixel grid for trial values of $(M_{\text{BH}}, (M/L)_*)$.
4. Convolve with instrumental PSF and slit transmission - Integrate light passing through the spectrograph aperture (e.g., HST/STIS $0.1'' \times 52''$ slit) convolved with the point spread function $\text{PSF}(x, y)$
$$\bar{I}(x, y, v) = \iint I_g(x', y') \exp\left[ -\frac{(v - v_{\text{LOS}}(x', y'))^2}{2\sigma_g^2} \right] \text{PSF}(x - x', y - y') dx' dy'$$
5. Minimum Chi-squared optimization - Compare modeled emission line profiles directly with observed spectra across all spatial pixels along the slit to determine $M_{\text{BH}}$.

### The Central Velocity Dispersion Peak (Beam Smearing)

A prominent observational phenomenon occurs when observing rotating nuclear gas disks with finite spatial resolution.

Within the central resolution element ($R \lesssim 0.1''$), the slit captures light from both the redshifted approaching side and the blueshifted receding side of the steeply rising Keplerian disk.

When the spectrograph integrates over this unresolved spatial region, the rapid opposing Doppler shifts blend into a single broadened line profile. Consequently, the observed velocity dispersion $\sigma_{\text{obs}}$ displays a sharp, pronounced central peak.

Far from indicating true thermal random motions, this central dispersion peak is the unambiguous kinematic signature of unresolved, high-speed Keplerian rotation around a supermassive black hole.

## 4. Landmark Case Studies

### Messier 84 (NGC 4374)

M84 is a giant E1 galaxy in the Virgo cluster hosting a prominent nuclear dust disk.
- Observations - Bower et al. (1998) obtained HST/STIS long-slit spectroscopy through a $0.1''$ slit aligned along the major axis of the nuclear disk.
- Kinematic signature - The H-alpha and [N II] emission lines revealed a dramatic S-shaped velocity shear, swinging by $\pm 400 \text{ km s}^{-1}$ within $0.1''$ ($r \approx 8 \text{ pc}$).
- Derived mass - Best-fit modeling yielded $M_{\text{BH}} = (1.5 \pm 0.1) \times 10^9 M_\odot$.

### Messier 87 (NGC 4486) and the EHT Cross-Check

M87 features a nuclear disk of ionized gas inclined at $i \approx 42^\circ$.
- HST Gas Kinematics - Harms et al. (1994) with FOS and Macchetto et al. (1997) with FOC measured $M_{\text{BH}} \approx (3.2 \pm 0.9) \times 10^9 M_\odot$. Later STIS observations by Walsh et al. (2013) refined the gas dynamical mass to $(3.5 \pm 0.8) \times 10^9 M_\odot$.
- Stellar Dynamics - In contrast, Gebhardt et al. (2011) used stellar orbit superposition modeling (accounting for a dark matter halo) to find $M_{\text{BH}} = (6.6 \pm 0.4) \times 10^9 M_\odot$, roughly a factor of two higher than the gas dynamical value.
- The Event Horizon Telescope (EHT 2019) Resolution - The EHT directly resolved the black hole shadow and photon ring of M87* at $1.3 \text{ mm}$ wavelength. The angular shadow diameter $\theta_{\text{shadow}} = 42 \pm 3 \, \mu\text{as}$ yielded a black hole mass of
$$M_{\text{BH}} = (6.5 \pm 0.7) \times 10^9 M_\odot$$

This definitive measurement confirmed the stellar dynamical mass and proved that gas dynamical modeling in M87 had suffered from non-Keplerian perturbations (such as jet-driven turbulence or magnetic pressure gradients) that slightly slowed the gas rotation.

## 5. Blackboard Observational Graphs and Sketches

### Graph 1. The S-Shaped Keplerian Rotation Curve Along the Slit

```
  v_LOS - v_sys (km/s)
     ^
+400 |                                 * * * (Keplerian peak at r ~ 0.1'')
     |                             *
+200 |                         *
     |                     *
 0.0 | . . . . . x . . . . + . . . . x . . . . (Nucleus - steep velocity shear)
     |               *
-200 |           *
     |       *
-400 | * * * (Receding side)
     +=========================================================================>
      -0.5        -0.3        -0.1        0.0        +0.1        +0.3        +0.5
                         Position along slit (arcsec)
```

Blackboard presentation notes
- Outside $r_{\text{infl}}$ ($R > 0.3''$) - Gas rotation curve flattens as the stellar potential dominates.
- Inside $r_{\text{infl}}$ ($R < 0.1''$) - Velocity rises steeply following the Keplerian $v \propto R^{-1/2}$ curve, producing the characteristic S-shaped shear across the nucleus.

### Graph 2. The Central Velocity Dispersion Peak (Beam Smearing)

```
  sigma_obs (km/s)
     ^
 350 |                     *  *  (Central peak from PSF beam smearing)
     |                  *        *
 250 |               *              *
     |            *                    *
 150 |         *                          *
     |        *                            *
  50 |=======*                              *==================================
     |  True intrinsic gas dispersion sigma_gas ~ 30 - 50 km/s
   0 +=========================================================================>
      -0.4        -0.2         0.0        +0.2        +0.4   Slit Position (arcsec)
```

Key quantitative takeaways for the blackboard
- Intrinsic gas dispersion is low ($\sigma_g \sim 30 - 50 \text{ km s}^{-1}$, cold disk).
- Spatial beam smearing across the central PSF blends approaching and receding Keplerian velocities, creating an artificial observed central dispersion spike of $\sim 300 - 400 \text{ km s}^{-1}$.

## 6. Exact Course Citations and Literature Provenance

- Bower, G. A., et al. (1998), Kinematics of the Nuclear Gas in M84, The Astrophysical Journal, volume 492, pages L111 to L114 - HST/STIS discovery of the $1.5 \times 10^9 M_\odot$ black hole in M84.
- Harms, R. J., et al. (1994), HST Measurements of the Black Hole in M87, The Astrophysical Journal, volume 435, pages L35 to L38 - Early gas dynamical detection of the black hole in M87.
- Macchetto, F., et al. (1997), The Supermassive Black Hole of M87, The Astrophysical Journal, volume 489, pages 579 to 600 - High-resolution HST/FOC modeling of the M87 ionized gas disk.
- Event Horizon Telescope Collaboration (2019), First M87 Event Horizon Telescope Results. I. The Shadow of the Supermassive Black Hole, The Astrophysical Journal Letters, volume 875, article L1 - Millimeter VLBI shadow measurement confirming $M_{\text{BH}} = (6.5 \pm 0.7) \times 10^9 M_\odot$.
- Mo, Houjun, Frank van den Bosch, and Simon White (2010), Galaxy Formation and Evolution, Cambridge University Press
  - Chapter 14 Supermassive Black Holes, Section 14.1 Observational Evidence, pages 645 to 654 - Ionized gas dynamics versus stellar dynamics and sphere of influence criteria.
- Course lecture documents (Prof. Alessandro Pizzella)
  - Student course document SMBH_in_Galaxies.tex
    - Section 5 Ionised Gas Kinematics, pages 8 to 10 - Detailed mathematical formulation of nuclear gas disks, five-step modeling procedure, M84 example, and advantages/limitations.
  - Dispensa dispense_smbh_20_eng.pdf (Supermassive Black Holes in Galaxies)
    - Section 3 Gas Dynamics and Nuclear Disks, pages 14 to 16 - Keplerian circular velocities, projection equations, and beam smearing corrections.
  - Slide file Astrophysic_gal_8_BH-1.pdf
    - Slide 14 - Gas dynamical modeling of nuclear Keplerian disks with HST/STIS.
    - Slide 15 - Sphere of influence derivation and angular resolution requirements.
    - Slides 54 to 58 - Comparison between gas dynamics, stellar dynamics, and EHT shadow measurements.

---

## Connections

- Alternative dynamical methods - [Stellar dynamics SMBH masses](Stellar%20dynamics%20SMBH%20masses.html), [Water maser BH masses](Water%20maser%20BH%20masses.html)
- Scaling relations - [M sigma relation](M%20sigma%20relation.html), [Magorrian relation](Magorrian%20relation.html)
- Nuclear phenomena - Active galactic nuclei, [Reverberation mapping](Reverberation%20mapping.html)

---

## Lecture Slides and Reference Figures (Prof. Alessandro Pizzella)

![eht2019_M87_image_1.png](../../assets/images/eht2019_M87_image_1.png)
*First direct image of a black hole shadow - M87* from the Event Horizon Telescope (EHT 2019).*

![gal_bh-14.png](../../assets/images/gal_bh-14.png)
*Gas dynamical modeling of nuclear Keplerian disks (HST STIS spectroscopy).*

![gal_bh-15.png](../../assets/images/gal_bh-15.png)
*Sphere of influence of the black hole - r_infl = G * M_BH / sigma^2.*

---

## Additional Lecture Slides (Prof. Alessandro Pizzella)

![gal_bh-54.png](../../assets/images/gal_bh-54.png)

![gal_bh-55.png](../../assets/images/gal_bh-55.png)

![gal_bh-56.png](../../assets/images/gal_bh-56.png)

![gal_bh-57.png](../../assets/images/gal_bh-57.png)

![gal_bh-58.png](../../assets/images/gal_bh-58.png)

![eht2019_M87_image_2.png](../../assets/images/eht2019_M87_image_2.png)

![eht2019_M87_image_3.png](../../assets/images/eht2019_M87_image_3.png)

![eht2019_M87_image_4.png](../../assets/images/eht2019_M87_image_4.png)

![eht2019_M87_image_5.png](../../assets/images/eht2019_M87_image_5.png)

![eht2019_M87_image_6.png](../../assets/images/eht2019_M87_image_6.png)

![eht2019_M87_image_7.png](../../assets/images/eht2019_M87_image_7.png)

![eht2019_M87_image_8.png](../../assets/images/eht2019_M87_image_8.png)

![eht2019_M87_image_9.png](../../assets/images/eht2019_M87_image_9.png)

![eht2019_M87_image_10.png](../../assets/images/eht2019_M87_image_10.png)

![eht2019_M87_image_11.png](../../assets/images/eht2019_M87_image_11.png)

![eht2019_M87_image_12.png](../../assets/images/eht2019_M87_image_12.png)

![eht2019_M87_image_13.png](../../assets/images/eht2019_M87_image_13.png)

![eht2019_M87_image_14.png](../../assets/images/eht2019_M87_image_14.png)

![eht2019_M87_image_15.png](../../assets/images/eht2019_M87_image_15.png)

![eht2019_M87_image_16.png](../../assets/images/eht2019_M87_image_16.png)

![eht2019_M87_image_17.png](../../assets/images/eht2019_M87_image_17.png)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Galactic%20Center%20Sgr%20A%20and%20S-stars.html" class="backlink-item">Galactic Center Sgr A and S-stars</a></li>
    <li class="backlink-item-wrap"><a href="Ionized%20gas%20kinematics.html" class="backlink-item">Ionized gas kinematics</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20dynamics%20SMBH%20masses.html" class="backlink-item">Stellar dynamics SMBH masses</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
  </ul>
</div>

