---
layout: "default"
title: "Dark matter rotation curves"
---
# Dark Matter in Spiral Galaxies and Rotation Curves

## 1. The Classical Observation and the Missing Mass Problem

In a gravitationally bound, rotationally supported system such as a spiral galaxy disk, test particles (stars and cold gas clouds) move in near-circular orbits where the centripetal acceleration balances the radial gravitational force.

$$\frac{v_{\rm circ}^2(r)}{r} = -\frac{\partial \Phi(r)}{\partial r} = \frac{G M(r)}{r^2}$$

$$v_{\rm circ}(r) = \sqrt{\frac{G M(r)}{r}}$$

If the mass of the galaxy were concentrated exclusively in the visible stellar disk of characteristic scale length $R_d$, then at radii well beyond the luminous disk ($r \gg R_d$), the enclosed mass would approach a constant ($M(r) \to M_{\rm visible}$). Newtonian gravity demands a **Keplerian velocity decline** -

$$v_{\rm circ}(r) \propto r^{-1/2}$$

However, pioneering optical emission-line spectroscopy of HII regions (Rubin & Ford 1970; Rubin et al. 1978, 1980) and 21 cm neutral hydrogen line interferometry (Bosma 1981; van Albada et al. 1985; Begeman 1989) revealed that the rotation curves of spiral galaxies remain approximately **flat** ($v_{\rm circ} \approx \mathrm{constant}$) out to the outermost observed radii (often $5$ to $10$ disk scale lengths).

A flat rotation curve requires.

$$M(r) \propto r \implies \rho(r) \propto r^{-2}$$

Because the luminous matter density drops exponentially ($\propto e^{-r/R_d}$), this linear growth in mass provides direct, definitive empirical proof of an extended, quasi-spherical **dark matter halo**.

---

## 2. Unbroken Mathematical Formulation - Component Decomposition

The total circular velocity is the quadrature sum of the gravitational contributions from each distinct galactic component.

$$\boxed{v_{\rm circ}^2(r) = v_{\rm disk}^2(r) + v_{\rm bulge}^2(r) + v_{\rm gas}^2(r) + v_{\rm halo}^2(r)}$$

### 1. The Exponential Thin Disk (Freeman 1970)
Spiral galaxy disks possess an exponential surface brightness profile.

$$\Sigma(R) = \Sigma_0 e^{-R / R_d}$$

where $\Sigma_0$ is the central surface mass density and $R_d$ is the disk scale length. The total disk mass is $M_{\rm disk} = 2\pi \Sigma_0 R_d^2$.
Solving the Laplace and Poisson equations in cylindrical coordinates with a razor-thin disk boundary condition ($\rho(R, z) = \Sigma(R) \delta(z)$) yields the circular velocity in terms of modified Bessel functions (Freeman 1970).

$$\boxed{v_{\rm disk}^2(R) = 4\pi G \Sigma_0 R_d \, y^2 \left[ I_0(y) K_0(y) - I_1(y) K_1(y) \right]}$$

where the dimensionless radial coordinate is.

$$y \equiv \frac{R}{2 R_d}$$

and $I_n(y), K_n(y)$ are modified Bessel functions of the first and second kinds of order $n$.

#### Key Mathematical Properties of the Freeman Disk
- **The Velocity Peak** - Differentiating $v_{\rm disk}(R)$ with respect to $R$ and setting the derivative to zero locates the peak at.
  $$R_{\rm max} \approx 2.15 \, R_d$$
  with a maximum velocity of.
  $$v_{\rm disk, max} \approx 0.88 \sqrt{\frac{G M_{\rm disk}}{R_d}}$$
- **The Keplerian Asymptotic Tail** - For radii $R \gg R_d$ ($y \gg 1$), asymptotic expansions of the Bessel functions ($I_n(y) K_n(y) \to \frac{1}{2y}$) yield.
  $$v_{\rm disk}(R) \to \sqrt{\frac{G M_{\rm disk}}{R}} \propto R^{-1/2}$$
  The stellar disk alone cannot sustain a flat rotation curve at large radii.

### 2. The Interstellar Gas Disk
Neutral hydrogen ($HI$) and molecular gas ($H_2$). While gas contributes only a modest fraction to the total mass in the inner galaxy, $HI$ disks extend much farther than the stellar light (often to $4 - 6 R_d$), serving as kinematics tracers in the outer halo.

### 3. Dark Matter Halo Models

#### A. Singular Isothermal Sphere (SIS)
The simplest model assumes self-gravitating, collisionless dark matter particles with an isotropic Maxwellian velocity dispersion $\sigma$.

$$\rho(r) = \frac{\sigma^2}{2\pi G r^2}$$

The enclosed mass is.

$$M(r) = \int_0^r 4\pi r'^2 \rho(r') \, dr' = \frac{2\sigma^2 r}{G}$$

The circular velocity is.

$$v_{\rm halo}^2(r) = \frac{G M(r)}{r} = 2\sigma^2 \implies v_{\rm halo}(r) = \sqrt{2}\sigma = \mathrm{constant}$$

This naturally produces an asymptotically flat rotation curve.

#### B. Pseudo-Isothermal Sphere (Core Profile)
To eliminate the central singularity of the SIS, an empirical core radius $r_c$ is introduced.

$$\rho(r) = \frac{\rho_0}{1 + (r/r_c)^2}$$

The enclosed mass is.

$$M(r) = 4\pi \rho_0 r_c^2 \left[ r - r_c \arctan\left(\frac{r}{r_c}\right) \right]$$

The circular velocity is.

$$\boxed{v_{\rm halo}^2(r) = 4\pi G \rho_0 r_c^2 \left[ 1 - \frac{r_c}{r} \arctan\left(\frac{r}{r_c}\right) \right]}$$

- In the inner core ($r \ll r_c$). $\arctan(x) \approx x - x^3/3 \implies v_{\rm halo}(r) \propto r$ (solid-body rotation).
- In the outer halo ($r \gg r_c$). $\frac{r_c}{r}\arctan(r/r_c) \to 0 \implies v_{\rm halo} \to \sqrt{4\pi G \rho_0 r_c^2} = \mathrm{constant}$.

#### C. The NFW Profile (Navarro, Frenk & White 1996)
Derived from cosmological $\Lambda$CDM N-body simulations.

$$\rho(r) = \frac{\rho_0}{\left(\frac{r}{r_s}\right) \left(1 + \frac{r}{r_s}\right)^2}$$

where $r_s$ is the characteristic scale radius.
Integrating $M(r) = \int_0^r 4\pi r'^2 \rho(r') dr'$ yields.

$$M(r) = 4\pi \rho_0 r_s^3 \left[ \ln\left(1 + \frac{r}{r_s}\right) - \frac{r/r_s}{1 + r/r_s} \right]$$

Defining $x \equiv r/r_s$, the circular velocity is.

$$\boxed{v_{\rm NFW}^2(r) = 4\pi G \rho_0 r_s^2 \, \frac{\ln(1+x) - \frac{x}{1+x}}{x}}$$

- Inner asymptotic slope ($r \ll r_s$). $\rho \propto r^{-1}$ (the central **cusp**), yielding $M(r) \propto r^2$ and $v(r) \propto r^{1/2}$.
- Outer asymptotic slope ($r \gg r_s$). $\rho \propto r^{-3}$, yielding $M(r) \propto \ln r$ and $v(r) \propto \sqrt{\frac{\ln r}{r}} \to 0$.

---

## 3. Observational and Theoretical Dilemmas

### The Disk-Halo Degeneracy
When fitting an observed rotation curve, the baryonic surface mass density is calculated from observed surface brightness $\Sigma(R) = (M/L)_* I(R)$.
Because the stellar mass-to-light ratio $(M/L)_*$ is uncertain, one can fit the same rotation curve by.
1. Increasing $(M/L)_*$ so the disk accounts for most of the inner rotation (**Maximum Disk**).
2. Decreasing $(M/L)_*$ so the dark matter halo dominates even in the center (**Sub-Maximum Disk**).

#### The Maximum Disk Hypothesis (van Albada & Sancisi 1986)
The maximum disk hypothesis maximizes $(M/L)_*$ subject only to the constraint that $v_{\rm disk}(R)$ never exceeds the total observed rotation curve.

$$v_{\rm disk}(2.2 R_d) \approx (0.85 \pm 0.10) \, v_{\rm circ}(2.2 R_d)$$

In bright high-surface-brightness spirals, maximum disk fits reproduce inner bumps and wiggles, indicating that baryonic matter dominates the inner gravitational potential. In low-surface-brightness (LSB) and dwarf galaxies, the maximum disk hypothesis fails; dark matter completely dominates at all radii.

### The Cusp-Core Problem
$\Lambda$CDM collisionless simulations universally predict cuspy NFW halos with $\rho \propto r^{-1}$ at the center.
In contrast, high-resolution 21 cm and $H\alpha$ observations of gas-dominated dwarf and LSB galaxies (such as the THINGS survey; de Blok et al. 2008) consistently reveal.
- Linear inner velocity curves ($v \propto r$)
- Flat, constant-density central cores ($\rho \propto r^0$)

This tension is resolved either through **baryonic feedback** (repeated bursts of star formation driving impulsive gas outflows that flatten the gravitational potential) or alternative dark matter models (such as self-interacting dark matter, SIDM).

---

## 4. Blackboard Observational Blueprint

When sketching rotation curve decomposition on the blackboard.

```text
  v_circ (km/s)
       ^
   250 |                   ================================ Total v_circ (Observed flat)
       |                  . . . . - - - - - - - - - - - - - Dark Matter Halo
   200 |                 .
       |        * * * * .          Stellar Disk Peak at 2.2 R_d
   150 |       *       * . \
       |      *           .  \     - - - - Keplerian decline v ~ r^(-1/2)
   100 |     *             .   \
       |    *               .    \ _ _ _ _ _ _ _ _ _ _ _ _  Gas Disk
    50 |   *
       +===+===============+===============+===============+======> Radius r
       0  1 R_d           2.2 R_d         4 R_d           6 R_d
```

### Key Blackboard Features
- **Horizontal Axis** - Radius in units of disk scale lengths $R_d$ spanning $0$ to $6 R_d$
- **Vertical Axis** - Circular velocity $v_{\rm circ}$ in $\mathrm{km\,s^{-1}}$ from $0$ to $250\,\mathrm{km\,s^{-1}}$
- **Stellar Disk Curve** - Rises steeply from $(0,0)$, peaks sharply at $R \approx 2.15 R_d$, then declines as $r^{-1/2}$
- **Dark Matter Halo Curve** - Rises smoothly, overtaking the stellar disk around $2 - 3 R_d$, and plateaus asymptotically
- **Gas Disk Curve** - Low velocity curve that rises gently at large radii
- **Total Curve** - Quadrature sum that remains flat across the entire diagram

---

## 5. Textbook and Course Citations

- **Prof. Alessandro Pizzella Course Dispensa**
  - File - `dispense_DM_2_eng.pdf`
  - Chapter 2, "Dark Matter in Spiral Galaxies", pages 8-30 (complete derivation of Freeman thin disk, modified Bessel functions, NFW velocity profile, maximum disk hypothesis, and cusp-core problem).
- **Mo, van den Bosch & White (2010), *Galaxy Formation and Evolution***
  - File - `Houjun Mo, Frank van den Bosch, Simon White - Galaxy Formation and Evolution (2010, Cambridge University Press) - libgen.li.pdf`
  - Chapter 8, Section 8.4 "Rotation Curves of Disk Galaxies", pages 373-384.
- **Binney & Tremaine (2008), *Galactic Dynamics***
  - File - `Binney, Tremaine - Galactic Dynamics 2ed.pdf`
  - Chapter 2, Section 2.6 "Circular Velocities", pages 100-112 (Freeman thin disk potential and Bessel functions).
- **Primary Literature References**
  - Freeman, K. C. 1970, ApJ, 160, 811.
  - Rubin, V. C., & Ford, W. K. 1970, ApJ, 159, 379.
  - van Albada, T. S., & Sancisi, R. 1986, Phil. Trans. R. Soc. Lond. A, 320, 447.
  - Navarro, J. F., Frenk, C. S., & White, S. D. M. 1996, ApJ, 462, 563.

---

## 6. See Also

- [Tully-Fisher relation](Tully-Fisher%20relation.html)
- [Schmidt-Kennicutt law](Schmidt-Kennicutt%20law.html)
- [Dark matter in elliptical galaxies](Dark%20matter%20in%20elliptical%20galaxies.html)
- [Dark matter in dwarf galaxies](Dark%20matter%20in%20dwarf%20galaxies.html)
- [MOND](MOND.html)
- [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html)

---

## 7. Astrophysics of Galaxies Figures and Slides (Prof. Alessandro Pizzella)

![gal_dm-06.png](../../assets/images/gal_dm-06.png)
*Vera Rubin and Kent Ford (1970) optical spectroscopy of M31 HII regions.*

![gal_dm-07.png](../../assets/images/gal_dm-07.png)
*21 cm HI radio observations (Bosma 1981, van Albada 1985) tracing rotation beyond optical disks.*

![gal_dm-08.png](../../assets/images/gal_dm-08.png)
*Navarro, Frenk & White (NFW 1996) dark matter halo profile.*

![gal_dm-09.png](../../assets/images/gal_dm-09.png)
*Cusp-core problem - NFW steep central cusp (rho ~ r^(-1)) vs observed flat cores (rho ~ const) in dwarf galaxies.*

---

## 8. Lecture Slides and Reference Figures (Prof. Alessandro Pizzella)

![gal_dm-01.png](../../assets/images/gal_dm-01.png)

![gal_dm-02.png](../../assets/images/gal_dm-02.png)

![gal_dm-03.png](../../assets/images/gal_dm-03.png)

![gal_dm-04.png](../../assets/images/gal_dm-04.png)

![gal_dm-05.png](../../assets/images/gal_dm-05.png)

![gal_dm-10.png](../../assets/images/gal_dm-10.png)

![gal_dm-11.png](../../assets/images/gal_dm-11.png)

![gal_dm-12.png](../../assets/images/gal_dm-12.png)

![gal_dm-13.png](../../assets/images/gal_dm-13.png)

![gal_dm-14.png](../../assets/images/gal_dm-14.png)

![gal_dm-15.png](../../assets/images/gal_dm-15.png)

![gal_dm-16.png](../../assets/images/gal_dm-16.png)

![gal_dm-17.png](../../assets/images/gal_dm-17.png)

![gal_dm-18.png](../../assets/images/gal_dm-18.png)

![gal_dm-19.png](../../assets/images/gal_dm-19.png)

![gal_dm-20.png](../../assets/images/gal_dm-20.png)

![gal_dm-21.png](../../assets/images/gal_dm-21.png)

![gal_dm-22.png](../../assets/images/gal_dm-22.png)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (13)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Bullet%20Cluster%20and%20dark%20matter%20mapping.html" class="backlink-item">Bullet Cluster and dark matter mapping</a></li>
    <li class="backlink-item-wrap"><a href="Dark%20matter%20in%20dwarf%20galaxies.html" class="backlink-item">Dark matter in dwarf galaxies</a></li>
    <li class="backlink-item-wrap"><a href="Dark%20matter%20in%20elliptical%20galaxies.html" class="backlink-item">Dark matter in elliptical galaxies</a></li>
    <li class="backlink-item-wrap"><a href="H%20I%20regions.html" class="backlink-item">H I regions</a></li>
    <li class="backlink-item-wrap"><a href="Ionized%20gas%20kinematics.html" class="backlink-item">Ionized gas kinematics</a></li>
    <li class="backlink-item-wrap"><a href="Local%20Group%20galaxies.html" class="backlink-item">Local Group galaxies</a></li>
    <li class="backlink-item-wrap"><a href="Low%20surface%20brightness%20galaxies.html" class="backlink-item">Low surface brightness galaxies</a></li>
    <li class="backlink-item-wrap"><a href="MOND.html" class="backlink-item">MOND</a></li>
    <li class="backlink-item-wrap"><a href="Mass-radius%20and%20mass-velocity%20relations.html" class="backlink-item">Mass-radius and mass-velocity relations</a></li>
    <li class="backlink-item-wrap"><a href="Modified%20gravity%20alternatives.html" class="backlink-item">Modified gravity alternatives</a></li>
    <li class="backlink-item-wrap"><a href="Rotation%20curves.html" class="backlink-item">Rotation curves</a></li>
    <li class="backlink-item-wrap"><a href="Schmidt-Kennicutt%20law.html" class="backlink-item">Schmidt-Kennicutt law</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
  </ul>
</div>

