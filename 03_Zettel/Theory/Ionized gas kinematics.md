---
layout: "default"
title: "Ionized gas kinematics"
tags: ""
---
# Ionized Gas Kinematics

Ionized gas kinematics provides a direct, highly sensitive probe of the gravitational potential and dynamical mass distribution in star-forming galaxies, active galactic nuclei (AGN), and cluster environments. In sharp contrast to collisionless stellar populations, the interstellar gas constitutes a dissipative fluid. Gas clouds undergo inelastic hydrodynamic collisions, radiate thermal energy efficiently via collisional excitation and fine-structure line cooling, and rapidly damp non-circular and random motions. Consequently, warm ionized gas ($T \sim 10^4$ K) settles into a geometrically thin rotating disk where circular rotation dominates over random velocity dispersion ($v_{\mathrm{rot}} \gg \sigma_{\mathrm{gas}}$). This fundamental hydrodynamic property makes ionized gas emission lines the premier observational tracer for constructing precision rotation curves, measuring dark matter halo profiles, and diagnosing non-circular phenomena such as galactic bars, spiral density waves, and superwind outflows.

---

## 1. Emission Line Tracers and Profile Fitting

Warm ionized gas kinematics is observed via narrow nebular emission lines produced in H II regions and diffuse ionized gas (DIG) excited by OB stellar ultraviolet flux or AGN radiation fields.

### Diagnostic Optical Emission Lines
- **Hydrogen Balmer Series** - $\text{H}\alpha$ ($\lambda 6562.8$ \AA), $\text{H}\beta$ ($\lambda 4861.3$ \AA). $\text{H}\alpha$ is the strongest optical line in star-forming galaxies, offering high signal-to-noise ratios even in outer disk regions.
- **Low-Ionization Forbidden Lines** - $[\text{N II}]$ ($\lambda 6548.1, 6583.5$ \AA), $[\text{S II}]$ ($\lambda 6716.4, 6730.8$ \AA). These lines bracket $\text{H}\alpha$ and are relatively immune to stellar absorption over-subtraction.
- **High-Ionization Forbidden Lines** - $[\text{O III}]$ ($\lambda 4958.9, 5007.0$ \AA). Crucial for mapping high-excitation gas in galaxy bulges, Seyfert nuclei, and high-redshift starbursts.

### Mathematical Spectral Modeling
For each spatial resolution element (spaxel or long-slit position), the emission line profile is parameterized as a Gaussian superimposed on the local stellar or continuum baseline $C(\lambda)$ -
$$I(\lambda) = C(\lambda) + \sum_{k=1}^K A_k \exp\left[ -\frac{(\lambda - \lambda_{\mathrm{obs}, k})^2}{2 \sigma_{\lambda, k}^2} \right]$$
From the fitted centroid $\lambda_{\mathrm{obs}}$ and observed line dispersion $\sigma_\lambda$, the kinematic observables are extracted via relativistic Doppler kinematics -
$$v_{\mathrm{los}} = c \, \frac{\lambda_{\mathrm{obs}} - \lambda_{\mathrm{rest}}}{\lambda_{\mathrm{rest}}}$$
$$\sigma_v = c \, \frac{\sqrt{\sigma_\lambda^2 - \sigma_{\mathrm{inst}}^2}}{\lambda_{\mathrm{rest}}}$$
where $\sigma_{\mathrm{inst}}$ is the instrumental spectral resolution determined from arc-lamp calibration lines. In active nuclei or starbursts with galactic winds, multi-component Gaussian fits are required to deblend the kinematically cold disk component ($\sigma_v \approx 15 - 30\text{ km s}^{-1}$) from a broad turbulent outflow component ($\sigma_v \gtrsim 150 - 500\text{ km s}^{-1}$).

---

## 2. Mathematical Kinematic Modeling - The 2D Tilted Ring Method

To transform observed two-dimensional line-of-sight velocity fields $v_{\mathrm{los}}(x, y)$ into physical radial circular velocity curves $v_{\mathrm{rot}}(R)$, the standard mathematical tool is the tilted-ring model (Begeman 1987).

### Geometric Projection Formalism
The galaxy disk is decomposed into concentric elliptical rings of radius $R$, characterized by an inclination $i$ relative to the plane of the sky and a major-axis position angle $\phi_0$ (measured counter-clockwise from North).
Let $(x_0, y_0)$ be the kinematic center of the galaxy on the sky plane. The sky coordinates $(x, y)$ are related to the intrinsic disk plane coordinates $(R, \theta)$ by orthogonal rotation and deprojection -
$$x' = -(x - x_0) \sin \phi_0 + (y - y_0) \cos \phi_0$$
$$y' = -(x - x_0) \cos \phi_0 - (y - y_0) \sin \phi_0$$
The galactocentric radius $R$ in the plane of the disk is given by -
$$R = \sqrt{x'^2 + \left( \frac{y'}{\cos i} \right)^2}$$
The azimuthal angle $\theta$ in the disk plane (measured from the receding major axis) satisfies -
$$\cos \theta = \frac{x'}{R} = \frac{-(x - x_0) \sin \phi_0 + (y - y_0) \cos \phi_0}{R}$$
$$\sin \theta = \frac{y'}{R \cos i} = \frac{-(x - x_0) \cos \phi_0 - (y - y_0) \sin \phi_0}{R \cos i}$$

### Velocity Projection Equation
For a purely rotating thin disk with systemic velocity $v_{\mathrm{sys}}$, circular rotation speed $v_{\mathrm{rot}}(R)$, and a possible radial expansion or inflow velocity $v_{\mathrm{exp}}(R)$, the projected line-of-sight velocity is derived from vector addition -
$$\vec{v} = v_{\mathrm{sys}} \hat{z} + \left[ v_{\mathrm{rot}}(R) \hat{\theta} + v_{\mathrm{exp}}(R) \hat{R} \right]$$
Projecting along the observer line of sight ($\hat{n}_{\mathrm{los}} = \sin i \cos \theta \, \hat{\theta} + \sin i \sin \theta \, \hat{R} + \cos i \, \hat{z}$) yields -
$$v_{\mathrm{los}}(R, \theta) = v_{\mathrm{sys}} + v_{\mathrm{rot}}(R) \sin i \cos \theta + v_{\mathrm{exp}}(R) \sin i \sin \theta$$

### Harmonic Decomposition
In the presence of non-axisymmetric potentials (such as stellar bars or oval distortions), the velocity field is expanded into a Fourier harmonic series -
$$v_{\mathrm{los}}(R, \theta) = c_0(R) + \sum_{m=1}^M \left[ c_m(R) \cos(m\theta) + s_m(R) \sin(m\theta) \right]$$
where -
- $c_0(R) = v_{\mathrm{sys}}$ is the systemic velocity.
- $c_1(R) = v_{\mathrm{rot}}(R) \sin i$ isolates the pure circular rotation.
- $s_1(R) = v_{\mathrm{exp}}(R) \sin i$ isolates net radial flows.
- Higher-order terms ($c_3, s_3$) directly quantify non-axisymmetric streaming motions induced by galactic bars and spiral density waves.

---

## 3. Asymmetric Drift in Gas Disks

Because the gas has finite turbulent and thermal pressure, the observed rotation speed $v_{\mathrm{rot}}$ is slightly lower than the true circular speed $v_c(R) = \sqrt{R \, d\Phi/dR}$ dictated by gravity.

### Step-by-Step Calculus Derivation
1. Write the radial hydrodynamic Euler equation for a steady-state, axisymmetric, rotating thin gas disk in cylindrical coordinates $(R, \theta, z)$ -
   $$\frac{v_{\mathrm{rot}}^2}{R} = \frac{\partial \Phi}{\partial R} + \frac{1}{
ho_{\mathrm{gas}}} \frac{\partial P_{\mathrm{gas}}}{\partial R}$$
2. The gravitational acceleration defines the true circular orbital velocity $v_c$ -
   $$\frac{\partial \Phi}{\partial R} = \frac{v_c^2}{R}$$
3. Substitute the equation of state for turbulent gas pressure, $P_{\mathrm{gas}} = 
ho_{\mathrm{gas}} \sigma_{\mathrm{gas}}^2$, where $\sigma_{\mathrm{gas}}$ is the isotropic gas velocity dispersion -
   $$\frac{v_{\mathrm{rot}}^2}{R} = \frac{v_c^2}{R} + \frac{1}{
ho_{\mathrm{gas}}} \frac{\partial (
ho_{\mathrm{gas}} \sigma_{\mathrm{gas}}^2)}{\partial R}$$
4. Multiply the entire equation by $R$ and rearrange terms -
   $$v_c^2 - v_{\mathrm{rot}}^2 = -\frac{R}{
ho_{\mathrm{gas}}} \left[ \sigma_{\mathrm{gas}}^2 \frac{\partial 
ho_{\mathrm{gas}}}{\partial R} + 
ho_{\mathrm{gas}} \frac{\partial \sigma_{\mathrm{gas}}^2}{\partial R} \right]$$
5. Factor out $\sigma_{\mathrm{gas}}^2$ and express derivatives in logarithmic form ($d\ln x = dx/x$) -
   $$v_c^2 - v_{\mathrm{rot}}^2 = -\sigma_{\mathrm{gas}}^2 \left[ \frac{\partial \ln 
ho_{\mathrm{gas}}}{\partial \ln R} + \frac{\partial \ln \sigma_{\mathrm{gas}}^2}{\partial \ln R} \right]$$
6. Quantitative significance -
   In normal local spiral galaxies, typical values are $v_{\mathrm{rot}} \sim 200\text{ km s}^{-1}$ and $\sigma_{\mathrm{gas}} \sim 10 - 15\text{ km s}^{-1}$. The asymmetric drift correction is negligible ($v_c - v_{\mathrm{rot}} \approx \sigma_{\mathrm{gas}}^2 / (2 v_{\mathrm{rot}}) \lesssim 1\text{ km s}^{-1}$). However, in dwarf galaxies and high-redshift starburst disks ($z \sim 2$) where $\sigma_{\mathrm{gas}} \sim 50 - 80\text{ km s}^{-1}$ and $v_{\mathrm{rot}} \sim 100\text{ km s}^{-1}$, the asymmetric drift correction reaches $20 - 40\text{ km s}^{-1}$ and must be explicitly added to reconstruct the true dynamical mass.

---

## 4. Beam Smearing and Observational Systematics

The dominant observational bias in ionized gas kinematics is beam smearing, which occurs when the telescope spatial Point Spread Function (PSF, caused by atmospheric seeing or finite aperture size) convolves steep spatial velocity gradients.

### Mathematical Formulation of Beam Smearing
The observed surface brightness $I_{\mathrm{obs}}$ and observed velocity field $v_{\mathrm{obs}}$ are spatial convolutions of the true disk properties with the telescope PSF $P(x, y)$ -
$$I_{\mathrm{obs}}(x, y) = \int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} I_{\mathrm{true}}(x', y') P(x - x', y - y') \, dx' \, dy'$$
$$v_{\mathrm{obs}}(x, y) = \frac{\int \int I_{\mathrm{true}}(x', y') v_{\mathrm{los}}(x', y') P(x - x', y - y') \, dx' \, dy'}{I_{\mathrm{obs}}(x, y)}$$

### Physical Consequences
1. **Artificial Rotation Curve Flattening** - In the central regions of galaxies, the true rotation curve rises steeply ($v \propto R$). Beam smearing blends the receding and approaching sides across the seeing disk, artificially lowering the measured slope and creating the false impression of an extended constant-density core.
2. **Spurious Dispersion Peaks** - Because emission from different velocities is blended within a single resolution element, the observed line width $\sigma_{\mathrm{obs}}$ develops a large artificial peak at the galactic center, even if the intrinsic gas velocity dispersion is completely uniform.

---

## 5. Non-Circular Motions and Kinematic Decoupling

### Bar Streaming Motions
In barred galaxies, gas orbits follow non-circular, self-intersecting $x_1$ and $x_2$ orbit families. Gas clouds experience hydrodynamic shocks along the leading edges of the stellar bar, causing rapid dissipation, inward angular momentum transport, and characteristic S-shaped distortions in the 2D isovelocity contour map.

### Gas-Star Counter-Rotation
In approximately 5 to 10 percent of early-type galaxies and lenticulars, ionized gas rotates in the opposite direction to the stellar body, or is oriented at a substantial inclination angle (polar rings). Because dissipative gas cannot be formed in counter-rotation through internal stellar evolution, counter-rotating gas provides definitive evidence of external gas accretion, such as the retrograde capture of a gas-rich dwarf satellite.

---

## 6. Observational Graph Literacy and ASCII Blueprints

### Diagram 1 - 2D Isovelocity Contour Map (Spider Diagram)
```text
  Y Sky Coordinate [arcsec]
   +30 +----------------------------------------------------------------+
       |             /        |        \         ..- -                  |
       |            /         |         \       .      -                |
   +15 |           /          |          \    .          -              |
       |          /           |           \  .             -            |
       |  Approaching         |            Receding         -           |
     0 |-------( v_sys - 100 )| v_sys ----( v_sys + 100 )----+----------| Major Axis
       |          \           |           /  .             -            |
       |           \          |          /    .          -              |
   -15 |            \         |         /       .      -                |
       |             \        |        /         ..- -                  |
   -30 +----------------------------------------------------------------+
      -30           -15       0        +15       +30
                         X Sky Coordinate [arcsec]
  Isovelocity Contours -
  - Center line - Systemic velocity v_sys (perpendicular to major axis for circular motion).
  - Left contours - Blueshifted approaching side (v < v_sys).
  - Right contours - Redshifted receding side (v > v_sys).
```

### Diagram 2 - Major-Axis Position-Velocity (P-V) Diagram
```text
  Velocity v_los [km/s]
  v_sys + 200 |                                    ............... (Flat Rotation)
              |                                  ..
  v_sys + 100 |                                 .
              |                                /
        v_sys |------------------*------------/----------------------- (Systemic)
              |                 /
  v_sys - 100 |                .
              |              ..
  v_sys - 200 | .............. (Approaching flat)
              +-------------------------------------------------------+
             -30             -15       0      +15                     +30
                             Major Axis Offset [arcsec]
  Notes -
  - Asterisk (*) marks the galaxy nucleus.
  - Linear central slope represents solid-body rotation (v propto R).
  - Beam smearing broadens the spectral line at R = 0 over a wide velocity interval.
```

---

## 7. Oral Exam Blackboard Presentation Script

When asked by Prof. Pizzella - *"How do we measure ionized gas kinematics, derive the rotation curve, and what systematic effects must we account for?"*

1. **State the hydrodynamic nature of the tracer** -
   - Write on the board - *"Gas is dissipative ($v_{\mathrm{rot}} \gg \sigma_{\mathrm{gas}}$), whereas stars are collisionless."*
   - Explain - *"Because gas clouds collide and radiate, they settle into thin disks with circular orbits. Measuring the Doppler shift of emission lines like $\text{H}\alpha$ and $[\text{N II}]$ directly gives the circular velocity $v_c(R)$, tracing the total dynamical mass."*

2. **Write the tilted-ring projection equation** -
   - Write on the board -
     $$v_{\mathrm{los}}(R, \theta) = v_{\mathrm{sys}} + v_{\mathrm{rot}}(R) \sin i \cos \theta + v_{\mathrm{exp}}(R) \sin i \sin \theta$$
   - Draw the 2D spider diagram showing the characteristic orthogonal isovelocity contours along the minor axis.

3. **Derive the asymmetric drift correction for gas** -
   - Write the radial momentum equation -
     $$v_c^2 - v_{\mathrm{rot}}^2 = -\sigma_{\mathrm{gas}}^2 \left[ \frac{d\ln 
ho_{\mathrm{gas}}}{d\ln R} + \frac{d\ln \sigma_{\mathrm{gas}}^2}{d\ln R} \right]$$
   - State clearly - *"In normal spirals, $\sigma_{\mathrm{gas}} \approx 10\text{ km s}^{-1} \ll v_{\mathrm{rot}} \approx 200\text{ km s}^{-1}$, so this correction is less than $1\text{ km s}^{-1}$. But in dwarf galaxies and high-z turbulent disks, it can reach tens of $\text{km s}^{-1}$."*

4. **Address beam smearing and observational biases** -
   - Draw the P-V diagram.
   - Conclude - *"Beam smearing convolves the steep central velocity gradient with the atmospheric PSF. This artificially flattens the inner rotation curve, mimicking a constant-density dark matter core, and artificially inflates the central velocity dispersion."*

---

## 8. Primary Course References

- **Prof. Alessandro Pizzella's Lecture Notes** -
  - `Astrophysics_of_Galaxies.tex` (Part IV - Gas Kinematics vs Stellar Kinematics, pages 28-31).
  - `Lecture3_DisksBars.pdf` (Disk kinematics, tilted ring analysis, and non-circular motions, pages 1-35).
  - `kinematics_1-1.pdf` (Emission line kinematics and long-slit spectroscopy, pages 25-42).
- **Seminal Literature** -
  - Begeman, K. G. (1987, PhD thesis, Univ. Groningen) - *H I rotation curves of spiral galaxies*.
  - de Blok, W. J. G., et al. (2008, AJ, 136, 2648) - *High-Resolution Rotation Curves and Asymmetric Drift in THINGS Galaxies*.
  - Epinat, B., et al. (2008, A&A, 477, 781) - *GHASP - 3D velocity fields and rotation curves of spiral and irregular galaxies*.
- **Standard Textbooks** -
  - Mo, H., van den Bosch, F., and White, S. (2010), *Galaxy Formation and Evolution*, Cambridge University Press, Chapter 11 - Gas Dynamics and Kinematics of Disk Galaxies (pages 480-492).
  - Binney, J., and Merrifield, M. (1998), *Galactic Astronomy*, Princeton University Press, Chapter 8 - Gas Dynamics and Rotation Curves (pages 425-440).

---

## 9. Related Knowledge Base Notes

- [Rotation curves](Rotation%20curves.html) - Empirical rotation curves and dark matter halo mass decomposition.
- [Stellar kinematics measurements.md](Stellar%20kinematics%20measurements.html) - Comparison between collisionless stellar kinematics and dissipative gas kinematics.
- [Dark matter rotation curves](Dark%20matter%20rotation%20curves.html) - Flat rotation curves and Navarro-Frenk-White vs Burkert halo profiles.
- [Tully-Fisher relation](Tully-Fisher%20relation.html) - The global scaling relation between disk circular velocity and absolute luminosity.
- [Ionized gas SMBH masses](Ionized%20gas%20SMBH%20masses.html) - Measuring central black hole masses from keplerian thin gas disks.

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Datacube%20redshift%20measurement.html" class="backlink-item">Datacube redshift measurement</a></li>
    <li class="backlink-item-wrap"><a href="Datacube%20reduction.html" class="backlink-item">Datacube reduction</a></li>
    <li class="backlink-item-wrap"><a href="H%20II%20region%20spectroscopy.html" class="backlink-item">H II region spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="MUSE%20datacubes.html" class="backlink-item">MUSE datacubes</a></li>
    <li class="backlink-item-wrap"><a href="Mass-radius%20and%20mass-velocity%20relations.html" class="backlink-item">Mass-radius and mass-velocity relations</a></li>
    <li class="backlink-item-wrap"><a href="Rotation%20curves.html" class="backlink-item">Rotation curves</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20kinematics%20measurements.html" class="backlink-item">Stellar kinematics measurements</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
  </ul>
</div>

