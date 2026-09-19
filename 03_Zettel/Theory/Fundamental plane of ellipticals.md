---
layout: "default"
title: "Fundamental plane of ellipticals"
---
# fundamental plane of ellipticals

Parent [Pablo_02_Statistical_properties_of_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)

## The Observed Relation

Elliptical galaxies do not populate the full three-dimensional parameter space spanned by their structural observables, but instead lie on a tight two-dimensional planar manifold called the **Fundamental Plane (FP)** (Djorgovski & Davis 1987; Dressler et al. 1987).

$$\boxed{\log_{10} R_e = \alpha \log_{10} \sigma_0 + \beta \log_{10} \langle I \rangle_e + \gamma}$$

where -
- $R_e$ - Effective radius (kpc), enclosing half of the total galaxy light.
- $\sigma_0$ - Central stellar velocity dispersion ($\mathrm{km\,s^{-1}}$), tracing the depth of the gravitational potential well.
- $\langle I \rangle_e$ - Mean surface brightness within the effective radius ($L_\odot\,\mathrm{pc}^{-2}$), related to mean surface magnitude by $\langle\mu\rangle_e = -2.5 \log_{10} \langle I \rangle_e + \text{const}$.

In the optical $r$-band (Coma cluster; Jørgensen, Franx & Kjærgaard 1996).
$$\alpha \approx 1.24 \pm 0.07, \quad \beta \approx -0.82 \pm 0.03$$
The intrinsic scatter perpendicular to the plane is exceptionally small - $\sigma_{\perp} \approx 0.05$ to $0.07$ dex in $\log R_e$ ($\sim 12-15\%$ uncertainty in distance).

---

## Unbroken Mathematical Derivation - Virial Theorem to Fundamental Plane

### Step 1 - The Virial Theorem for Self-Gravitating Stellar Systems
A steady-state collisionless stellar system in dynamical equilibrium obeys the scalar Virial Theorem.

$$2K + U = 0$$

where kinetic energy $K = \frac{1}{2} M \langle v^2 \rangle$ and potential energy $U = -\frac{G M^2}{r_g}$ ($r_g$ is the gravitational radius).
Equating $2K = -U$.

$$M \langle v^2 \rangle = \frac{G M^2}{r_g} \implies M = \frac{\langle v^2 \rangle r_g}{G}$$

### Step 2 - Structural Homology Relations
We connect the unobservable physical quantities ($M, \langle v^2 \rangle, r_g$) to the projected observables ($L, \sigma_0, R_e$) via dimensionless structural form factors $c_1$ and $c_2$.

1. **Dynamical Mass -**
   $$M = c_1 \frac{\sigma_0^2 R_e}{G}$$
   where $c_1$ depends on the radial density profile $\rho(r)$, Sérsic index $n$, and stellar velocity anisotropy $\beta(r)$.

2. **Total Luminosity -**
   $$L = c_2 \langle I \rangle_e R_e^2$$
   By definition of mean surface brightness within $R_e$, the enclosed luminosity is $L(<R_e) = \pi R_e^2 \langle I \rangle_e = \frac{1}{2} L$, so $c_2 = 2\pi$.

### Step 3 - Deriving the Scaling Relation
Define the dynamical mass-to-light ratio $\Upsilon \equiv \frac{M}{L}$.

$$\Upsilon \equiv \frac{M}{L} = \frac{c_1 \frac{\sigma_0^2 R_e}{G}}{c_2 \langle I \rangle_e R_e^2} = \left(\frac{c_1}{c_2 G}\right) \frac{\sigma_0^2}{R_e \langle I \rangle_e}$$

Solve explicitly for the effective radius $R_e$.

$$R_e = \left(\frac{c_1}{c_2 G}\right) \sigma_0^2\, \langle I \rangle_e^{-1}\, \Upsilon^{-1}$$

Take $\log_{10}$ of both sides.

$$\boxed{\log_{10} R_e = 2 \log_{10} \sigma_0 - \log_{10} \langle I \rangle_e - \log_{10} \Upsilon + \log_{10}\left(\frac{c_1}{c_2 G}\right)}$$

---

## The "Tilt" of the Fundamental Plane

### Virial Expectation vs. Observed Slopes
If elliptical galaxies were strictly **homologous** ($c_1 = \text{const}, c_2 = \text{const}$) with **constant mass-to-light ratio** ($\Upsilon = \text{const}$).
$$\alpha_{\rm virial} = 2.0, \quad \beta_{\rm virial} = -1.0$$

Observed values differ systematically.
$$\alpha_{\rm obs} \approx 1.24, \quad \beta_{\rm obs} \approx -0.82$$

This deviation is called the **tilt of the Fundamental Plane**.

### Physical Origin of the Tilt
The tilt arises because $\Upsilon \equiv M/L$ and structural parameters are NOT constant, but scale systematically with galaxy mass.

1. **Systematic Variation of Stellar Mass-to-Light Ratio -**
   $$\Upsilon \propto M^\gamma \propto L^{\frac{\gamma}{1-\gamma}}$$
   Fitting the tilt gives $\Upsilon \propto M^{0.17 - 0.20}$ or $\Upsilon \propto L^{0.25}$.
   - **Metallicity Effect -** More massive ellipticals are more metal-rich (deeper potential wells retain supernova ejecta), increasing stellar opacity and $M/L$.
   - **Stellar Age / Downsizing -** Massive ellipticals formed their stars earlier and faster, leaving older stellar populations today.
   - **IMF Variations -** More massive galaxies show evidence of a bottom-heavy (Salpeter-like) IMF, increasing the mass locked in low-mass stars without adding luminosity.
2. **Structural Non-Homology -**
   The form factor ratio $c_1/c_2$ is not strictly constant. The Sérsic index $n$ increases with galaxy luminosity ($n \approx 2$ in dwarf ellipticals to $n \approx 4-8$ in massive ellipticals), systematically modifying the concentration of light and mass.
3. **Dark Matter Fraction -**
   The dark matter fraction within $R_e$ increases from $\sim 10-20\%$ in low-mass ellipticals to $\sim 40-60\%$ in giant ellipticals.

---

## $\kappa$-Space Formulation (Bender, Burstein & Faber 1992)

To interpret the Fundamental Plane in an orthogonal coordinate system where each axis corresponds to a distinct physical quantity, Bender, Burstein & Faber (1992, ApJ 399, 462) introduced the **$\kappa$-space coordinates**.

$$\kappa_1 \equiv \frac{1}{\sqrt{2}} \left(\log_{10} \sigma_0^2 + \log_{10} R_e\right) \propto \log_{10} M \quad (\text{Mass})$$

$$\kappa_2 \equiv \frac{1}{\sqrt{6}} \left(\log_{10} \sigma_0^2 + 2\log_{10} \langle I \rangle_e - \log_{10} R_e\right) \propto \log_{10}\left(\frac{M}{L}\right) \langle I \rangle_e^2 \quad (\text{Surface Brightness / Compactness})$$

$$\kappa_3 \equiv \frac{1}{\sqrt{3}} \left(\log_{10} \sigma_0^2 - \log_{10} \langle I \rangle_e - \log_{10} R_e\right) \propto \log_{10}\left(\frac{M}{L}\right) \quad (\text{Mass-to-Light Ratio})$$

In $\kappa$-space.
- The Fundamental Plane is seen almost perfectly edge-on as a tight linear relation between $\kappa_3$ and $\kappa_1$ - $\kappa_3 \propto 0.15 \kappa_1 + \text{const}$, demonstrating directly that $M/L$ increases smoothly with mass.
- The $\kappa_1 - \kappa_2$ plane shows the face-on distribution, delineating the physical boundary of galaxy formation (cooling and collapse limits).

---

## The $D_n - \sigma$ Relation as a Distance Indicator

Dressler et al. (1987) introduced a photometric diameter $D_n$, defined as the angular circular diameter enclosing an integrated mean surface brightness.

$$\langle\mu_B\rangle(<D_n/2) = 20.75\,\text{mag\,arcsec}^{-2}$$

Because $D_n$ combines $R_e$ and $\langle I \rangle_e$ along the slope of the Fundamental Plane, it eliminates the covariance between $R_e$ and $\langle I \rangle_e$.

$$D_n \propto \sigma_0^{1.2}$$

Comparing the physical diameter $D_n$ predicted by $\sigma_0$ with the measured angular diameter $\theta_n$ yields the angular diameter distance.

$$d_A = \frac{D_n}{\theta_n}$$

This method was used to detect peculiar velocity flows across the local universe (e.g. the "Great Attractor").

---

## Projections of the Fundamental Plane

- **Faber-Jackson Relation (1976) -** $L \propto \sigma_0^4$. Obtained by projecting the FP onto the $(L, \sigma_0)$ axis, ignoring the scatter introduced by surface brightness variation $\langle I \rangle_e$.
- **Kormendy Relation (1977) -** $\langle\mu\rangle_e = 3.02 \log_{10} R_e + 19.72$. Obtained by projecting the FP onto the $(R_e, \langle I \rangle_e)$ plane, valid for high-luminosity ellipticals.

---

## Textbook & Course References

- **Mo, van den Bosch & White (2010), *Galaxy Formation and Evolution***.
  - File `Houjun Mo, Frank van den Bosch, Simon White - Galaxy Formation and Evolution (2010, Cambridge University Press) - libgen.li.pdf`
  - Chapter 13, Section 13.4 "The Fundamental Plane of Elliptical Galaxies", pp. 624-628 (virial origin, tilt, physical mechanisms).
- **Binney & Merrifield (1998), *Galactic Astronomy***.
  - File `Galactic Astronomy (James Binney Michael Merrifield) (z-library.sk, 1lib.sk, z-lib.sk).pdf`
  - Chapter 4, Section 4.3.4 "Correlations among global parameters", pp. 204-210; Chapter 7, Section 7.3.2, pp. 425-429 ($D_n - \sigma$ distance indicator).
- **Peter Schneider (2015), *Extragalactic Astronomy and Cosmology***.
  - File `Extrag_Astro_144-171.pdf`
  - Chapter 3, Section 3.4.3 "Scaling relations for elliptical galaxies", pp. 165-171.
- **Prof. Alessandro Pizzella Course Dispensa**.
  - File `Notes_FP_2_0eng.pdf`
  - Chapter 1, Section 1.1-1.3, pp. 1-13 (detailed derivation, Coma FP, $M/L \propto M^{0.2}$, $\kappa$-space, $D_n-\sigma$ cluster velocities).
- **Master Derivations Guide**.
  - Master Derivations and Mathematical Rigor

---

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_dist-43.png](../../assets/images/obs_dist-43.png)
*Faber-Jackson relation - L proportional to sigma^4 for elliptical galaxies.*

![obs_dist-44.png](../../assets/images/obs_dist-44.png)
*Fundamental Plane - log R_e = alpha log sigma + beta log <I>_e + gamma.*

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![gal_srs-04.png](../../assets/images/gal_srs-04.png)
*The Fundamental Plane (Djorgovski & Davis 1987; Dressler et al. 1987).*

![gal_srs-05.png](../../assets/images/gal_srs-05.png)
*Three-dimensional parameter space - log R_e = a * log sigma_0 + b * log <I>_e + c.*

![gal_srs-06.png](../../assets/images/gal_srs-06.png)
*Observed coefficients - a ~ 1.2-1.4, b ~ -0.8 to -0.9 (tilt of the Fundamental Plane).*

![gal_srs-07.png](../../assets/images/gal_srs-07.png)
*Tilt explanation - systematic variation of stellar M/L with galaxy mass (M/L proportional to M^0.2) and non-homology.*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_srs-16.png](../../assets/images/gal_srs-16.png)

![gal_srs-17.png](../../assets/images/gal_srs-17.png)

![gal_srs-18.png](../../assets/images/gal_srs-18.png)

![gal_srs-19.png](../../assets/images/gal_srs-19.png)

![gal_srs-20.png](../../assets/images/gal_srs-20.png)

![gal_srs-21.png](../../assets/images/gal_srs-21.png)

![gal_srs-22.png](../../assets/images/gal_srs-22.png)

![gal_srs-23.png](../../assets/images/gal_srs-23.png)

![gal_srs-24.png](../../assets/images/gal_srs-24.png)

![gal_srs-25.png](../../assets/images/gal_srs-25.png)

![gal_srs-26.png](../../assets/images/gal_srs-26.png)

![gal_srs-27.png](../../assets/images/gal_srs-27.png)

![gal_srs-28.png](../../assets/images/gal_srs-28.png)

![gal_srs-29.png](../../assets/images/gal_srs-29.png)

![gal_srs-30.png](../../assets/images/gal_srs-30.png)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (18)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Alpha-Fe%20enhancement.html" class="backlink-item">Alpha-Fe enhancement</a></li>
    <li class="backlink-item-wrap"><a href="Color%20gradients%20in%20ellipticals.html" class="backlink-item">Color gradients in ellipticals</a></li>
    <li class="backlink-item-wrap"><a href="Dark%20matter%20in%20elliptical%20galaxies.html" class="backlink-item">Dark matter in elliptical galaxies</a></li>
    <li class="backlink-item-wrap"><a href="De%20Vaucouleurs%20and%20exponential%20profiles.html" class="backlink-item">De Vaucouleurs and exponential profiles</a></li>
    <li class="backlink-item-wrap"><a href="Early-type%20galaxy%20stellar%20populations.html" class="backlink-item">Early-type galaxy stellar populations</a></li>
    <li class="backlink-item-wrap"><a href="Faber-Jackson%20relation.html" class="backlink-item">Faber-Jackson relation</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20main%20sequence%20of%20star%20formation.html" class="backlink-item">Galaxy main sequence of star formation</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20size-luminosity%20relation.html" class="backlink-item">Galaxy size-luminosity relation</a></li>
    <li class="backlink-item-wrap"><a href="Kormendy%20relation.html" class="backlink-item">Kormendy relation</a></li>
    <li class="backlink-item-wrap"><a href="LOSVD.html" class="backlink-item">LOSVD</a></li>
    <li class="backlink-item-wrap"><a href="Magorrian%20relation.html" class="backlink-item">Magorrian relation</a></li>
    <li class="backlink-item-wrap"><a href="Peculiar%20velocities%20of%20galaxies%20and%20structures.html" class="backlink-item">Peculiar velocities of galaxies and structures</a></li>
    <li class="backlink-item-wrap"><a href="Schmidt-Kennicutt%20law.html" class="backlink-item">Schmidt-Kennicutt law</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20kinematics%20measurements.html" class="backlink-item">Stellar kinematics measurements</a></li>
    <li class="backlink-item-wrap"><a href="Velocity%20dispersion%20from%20line%20width.html" class="backlink-item">Velocity dispersion from line width</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Astrophysics_MOC.html" class="backlink-item">Observational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
  </ul>
</div>

