---
layout: "default"
title: "Galactic Center Sgr A and S-stars"
---
# Galactic Center Sgr A and S-stars

The central parsec of the Milky Way harbors the closest and most rigorously scrutinized supermassive black hole candidate in the universe, designated Sagittarius A* (Sgr A*). Situated at a Galactocentric distance of $R_0 = 8.275 \pm 0.034$ kpc, Sgr A* is surrounded by a dense cluster of high-velocity, young B-type stars termed the S-star cluster (or S0 stars). Tracking the individual Keplerian orbits of these stars over complete orbital periods using high-resolution near-infrared adaptive optics and interferometry provides incontrovertible dynamical proof of a central point mass of $M_\bullet = (4.15 \pm 0.13) \times 10^6 M_\odot$. The extraordinarily small pericenter distance of the star S2 (S0-2) places an empirical lower bound on the central mass density of $\rho > 1.5 \times 10^{19} M_\odot \text{ pc}^{-3}$, ruling out all non-singular astrophysical configurations such as dark clusters of stellar remnants or degenerate fermion balls. Furthermore, precise astrometric tracking of S2 during its 2018 pericenter passage has confirmed post-Newtonian relativistic effects, specifically gravitational redshift and Schwarzschild orbital precession, establishing Sgr A* as a premier laboratory for strong-field general relativity.

---

## 1. Astrophysical Context and Phenomenological Overview

### Identification of Sgr A*
Sgr A* was initially discovered in 1974 by Balick and Brown via radio interferometry as a stationary, extremely compact, non-thermal radio source at the dynamical nucleus of the Galaxy. Subsequent multi-wavelength monitoring established the following foundational physical properties
- Radio emission - A compact synchrotron source with flat or slightly inverted spectrum ($S_\nu \propto \nu^{0.3}$) and brightness temperature exceeding $T_b \sim 10^{10}$ K, exhibiting intrinsic size scale of only a few tens of microarcseconds.
- Infrared emission - A highly variable, faint near-infrared counterpart exhibiting frequent flares on timescales of 10 to 60 minutes, originating from synchrotron emission of relativistic electrons accelerated near the innermost stable circular orbit (ISCO).
- X-ray emission - Quiescent thermal emission of luminosity $L_X \sim 10^{33} \text{ erg s}^{-1}$ accompanied by daily energetic flares where luminosity surges by factors of 10 to 100, observed by Chandra and XMM-Newton.
- Low bolometric accretion luminosity - The bolometric luminosity is $L_{\rm bol} \sim 10^{36} \text{ erg s}^{-1} \approx 10^{-8} L_{\rm Edd}$, indicating a radiatively inefficient accretion flow (RIAF / ADAF) fed by stellar winds from surrounding massive stars at rates of $\dot{M} \sim 10^{-8} M_\odot \text{ yr}^{-1}$.

### The S-Star Cluster Paradox of Youth
Within the central $0.04$ pc (roughly 1 arcsecond on the sky), near-infrared spectroscopy using SINFONI on the VLT and OSIRIS at Keck revealed approximately 30 bright B-type main-sequence stars with spectral types B0V-B2V and masses $8-15 M_\odot$. These stars possess young evolutionary ages of 20 to 100 Myr. 
This configuration presents the classical paradox of youth. The tidal gravitational shear forces of the $4 \times 10^6 M_\odot$ black hole exceed the self-gravity of any standard interstellar molecular cloud by orders of magnitude (Roche tidal limit $r_{\rm tidal} \sim R (M_\bullet / M_{\rm cloud})^{1/3} \sim 1$ pc). Standard in-situ star formation via gravitational collapse cannot occur in this environment. Theoretical resolutions include in-situ formation in a dense self-gravitating eccentric accretion disk that fragmented $\sim 6$ Myr ago, or migration from an exterior cluster via Kozai-Lidov tidal capture of binary stellar systems.

---

## 2. Complete Mathematical Derivations of Orbital Dynamics and Black Hole Mass

### Keplerian Orbit of Star S2
The star S2 (also cataloged as S0-2) follows a clean, single-body Keplerian orbit around Sgr A*. The astrometric and radial velocity measurements yield the following orbital parameters
- Orbital period $P = 16.051 \pm 0.004$ yr
- Angular semi-major axis $a_{\rm ang} = 0.1255'' \pm 0.0003'' = 125.5$ mas
- Orbital eccentricity $e = 0.8847 \pm 0.0003$
- Inclination to line of sight $i = 134.56^\circ \pm 0.08^\circ$
- Galactocentric distance to the Milky Way center $R_0 = 8.275 \pm 0.034$ kpc

#### Physical Semi-Major Axis
Converting the angular semi-major axis into physical linear distance
$$a = R_0 \tan(a_{\rm ang}) \approx R_0 a_{\rm ang}$$
Substituting the numerical values with 1 radian $= 206265$ arcseconds
$$a = (8275 \text{ pc}) \times \left(\frac{0.1255}{206265}\right) = 5.034 \times 10^{-3} \text{ pc}$$
Converting parsecs to Astronomical Units ($1 \text{ pc} = 206265 \text{ AU}$) and SI meters ($1 \text{ AU} = 1.496 \times 10^{11} \text{ m}$)
$$a = (5.034 \times 10^{-3}) \times 206265 \approx 1038.3 \text{ AU} = 1.553 \times 10^{14} \text{ m}$$

#### Pericenter Distance and Velocity
The pericenter distance $r_p$ is achieved when the true anomaly is zero
$$r_p = a (1 - e) = 1038.3 \text{ AU} \times (1 - 0.8847) \approx 119.7 \text{ AU} = 1.791 \times 10^{13} \text{ m}$$
Expressing $r_p$ in light-travel time
$$t_{\rm light} = \frac{r_p}{c} = \frac{1.791 \times 10^{13} \text{ m}}{2.998 \times 10^8 \text{ m s}^{-1}} \approx 59740 \text{ s} \approx 16.6 \text{ light-hours}$$
In units of the gravitational Schwarzschild radius of Sgr A* ($R_s = \frac{2 G M_\bullet}{c^2}$)
For $M_\bullet = 4.15 \times 10^6 M_\odot$
$$R_s = \frac{2 \times (6.674 \times 10^{-11}) \times (4.15 \times 10^6 \times 1.989 \times 10^{30})}{(2.998 \times 10^8)^2} \approx 1.226 \times 10^{10} \text{ m} \approx 0.082 \text{ AU}$$
Therefore the pericenter distance evaluates to
$$\frac{r_p}{R_s} = \frac{1.791 \times 10^{13} \text{ m}}{1.226 \times 10^{10} \text{ m}} \approx 1460 R_s$$
The apocenter distance corresponds to
$$r_a = a (1 + e) = 1038.3 \times (1 + 0.8847) \approx 1957 \text{ AU} \approx 0.0095 \text{ pc}$$

The orbital velocity at pericenter follows from the vis-viva equation $v^2 = G M_\bullet \left(\frac{2}{r} - \frac{1}{a}\right)$
$$v_p = \sqrt{\frac{G M_\bullet}{a} \left(\frac{1 + e}{1 - e}\right)}$$
Substituting numerical values
$$v_p \approx \sqrt{\frac{(6.674 \times 10^{-11}) \times (8.254 \times 10^{36})}{1.553 \times 10^{14}} \times \left(\frac{1.8847}{0.1153}\right)} \approx \sqrt{(3.547 \times 10^{12}) \times 16.346} \approx 7615 \text{ km s}^{-1}$$
Expressed as a fraction of the speed of light
$$\frac{v_p}{c} = \frac{7615 \text{ km s}^{-1}}{299792 \text{ km s}^{-1}} \approx 0.0254 \approx 2.54\%$$

#### Enclosed Mass from Kepler Third Law
Assuming the mass of the test star is negligible compared to the central black hole ($m_* \ll M_\bullet$), Newton's generalization of Kepler's third law states
$$P^2 = \frac{4\pi^2 a^3}{G M_\bullet}$$
Solving explicitly for the black hole mass $M_\bullet$
$$M_\bullet = \frac{4\pi^2 a^3}{G P^2}$$
Converting orbital period to seconds ($1 \text{ tropical year} = 3.1557 \times 10^7 \text{ s}$)
$$P = 16.051 \times (3.1557 \times 10^7) \approx 5.065 \times 10^8 \text{ s}$$
Substituting $a = 1.553 \times 10^{14}$ m and $P = 5.065 \times 10^8$ s
$$M_\bullet = \frac{4 \pi^2 \times (1.553 \times 10^{14} \text{ m})^3}{(6.6743 \times 10^{-11} \text{ m}^3 \text{ kg}^{-1} \text{ s}^{-2}) \times (5.065 \times 10^8 \text{ s})^2}$$
Evaluating the numerator and denominator
$$\text{Numerator} = 39.4784 \times 3.746 \times 10^{42} \approx 1.479 \times 10^{44} \text{ m}^3$$
$$\text{Denominator} = (6.6743 \times 10^{-11}) \times (2.565 \times 10^{17}) \approx 1.712 \times 10^7 \text{ m}^3 \text{ kg}^{-1}$$
Dividing numerator by denominator
$$M_\bullet = \frac{1.479 \times 10^{44}}{1.712 \times 10^7} \approx 8.638 \times 10^{36} \text{ kg}$$
Dividing by the solar mass ($M_\odot = 1.9885 \times 10^{30}$ kg)
$$M_\bullet \approx 4.34 \times 10^6 M_\odot$$
When combined with joint astrometric and radial velocity likelihood modeling across all monitored S-stars (Gillessen et al. 2017; GRAVITY Collaboration 2020), the resulting high-precision mass is
$$M_\bullet = (4.15 \pm 0.13) \times 10^6 M_\odot \quad \text{or} \quad (4.297 \pm 0.012) \times 10^6 M_\odot$$

---

### 3. Lower Bound on Enclosed Volume Density and Ruled-Out Alternatives

#### Calculation of Enclosed Central Density
The entire mass $M_\bullet$ must reside strictly inside the pericenter sphere of star S2, because any extended mass distribution $M(r)$ inside $r_p$ would cause observable non-Keplerian prograde or retrograde orbital precession. The minimum central volume density is
$$\rho_{\rm min} = \frac{M_\bullet}{\frac{4}{3}\pi r_p^3}$$
Substituting $M_\bullet = 4.15 \times 10^6 M_\odot$ and $r_p = 119.7 \text{ AU} = 5.803 \times 10^{-4} \text{ pc}$
$$\rho_{\rm min} = \frac{4.15 \times 10^6 M_\odot}{\frac{4}{3}\pi \times (5.803 \times 10^{-4} \text{ pc})^3} = \frac{4.15 \times 10^6}{8.182 \times 10^{-10}} \approx 5.07 \times 10^{15} M_\odot \text{ pc}^{-3}$$
Converting to cgs units ($1 M_\odot \text{ pc}^{-3} \approx 6.77 \times 10^{-23} \text{ g cm}^{-3}$)
$$\rho_{\rm min} \approx 3.4 \times 10^{-7} \text{ g cm}^{-3}$$
Furthermore, observing infrared and X-ray flares originating from radii $r \sim 3-5 R_s \sim 0.3$ AU pushes the empirical density bound beyond $\rho > 10^{19} M_\odot \text{ pc}^{-3}$.

#### Theoretical Refutation of Dark Cluster Alternatives
Examiners frequently ask why Sgr A* cannot be an extremely dense cluster of dark astrophysical objects. Three primary models are tested and ruled out

1. Dark cluster of stellar remnants (white dwarfs, neutron stars, or stellar-mass black holes)
   Consider a cluster of $N$ objects of individual mass $m = 1 M_\odot$ totaling $M = 4.15 \times 10^6 M_\odot$ inside radius $R = 120$ AU.
   The two-body dynamical relaxation timescale is given by (Spitzer 1987, Binney & Tremaine 2008)
   $$t_{\rm relax} \approx \frac{0.14 N}{\ln N} \sqrt{\frac{R^3}{G M}}$$
   Substituting $N = 4.15 \times 10^6$, $\ln N \approx 15.24$, and crossing time $t_{\rm cross} = \sqrt{R^3 / G M} \approx 0.6$ yr
   $$t_{\rm relax} \approx \frac{0.14 \times (4.15 \times 10^6)}{15.24} \times 0.6 \text{ yr} \approx 2.3 \times 10^4 \text{ yr}$$
   A self-gravitating cluster collapses via the gravothermal catastrophe on a timescale of roughly $t_{\rm coll} \sim 10-15 t_{\rm relax} \sim 3 \times 10^5$ yr. Core collapse leads to runaway physical collisions and relativistic merger into a single supermassive black hole. A stable dark cluster cannot survive over the $10^{10}$ yr age of the Milky Way.

2. Degenerate fermion ball (massive sterile neutrinos or neutralinos)
   If Sgr A* were composed of degenerate non-interacting fermions of mass $m_f$, Pauli exclusion principle demands a maximum degenerate mass before gravitational collapse (analogous to the Chandrasekhar limit)
   $$M_{\rm deg, max} \approx 0.384 \frac{m_{\rm Planck}^3}{m_f^2}$$
   To pack $4.15 \times 10^6 M_\odot$ within radius $R \le 120$ AU without exceeding the degeneracy threshold requires the constituent fermion mass to satisfy
   $$m_f \ge 55 \text{ keV}$$
   However, particle physics constraints from cosmological structure formation and laboratory decay experiments rule out stable sterile neutrinos in this mass range with sufficient abundance.

3. Boson star or scalar field configurations
   Hypothetical scalar field solitons collapse to black holes unless supported by extreme, unphysical self-interaction potentials, which are fine-tuned and incompatible with cosmological constraints.

---

## 4. General Relativistic Effects in the S2 Orbit

During the close pericenter passage in May 2018, the orbital velocity of S2 reached $7650$ km/s ($v/c \approx 0.0255$). The VLTI GRAVITY instrument conducted astrometric interferometry with $50$ microarcsecond precision, directly verifying two distinct general relativistic phenomena.

### Gravitational Redshift Test
The total observed spectroscopic frequency shift at pericenter is composed of classical line-of-sight Doppler motion, special relativistic transverse Doppler time dilation, and general relativistic gravitational time dilation
$$z_{\rm tot} = \frac{\Delta\lambda}{\lambda_0} = \frac{v_r}{c} + \frac{1}{2}\frac{v^2}{c^2} + \frac{G M_\bullet}{r c^2}$$
Here $v_r$ is the radial velocity along the line of sight, while the combined relativistic correction $\Delta z_{\rm GR}$ contributes an apparent velocity excess of
$$\Delta v_{\rm GR} = c \left[ \frac{1}{2}\frac{v^2}{c^2} + \frac{G M_\bullet}{r c^2} \right] \approx 200 \text{ km s}^{-1}$$
The GRAVITY and SINFONI collaborations parameterized this correction using a dimensionless scaling factor $f_{\rm redshift}$
$$z_{\rm model} = z_{\rm Kepler} + f_{\rm redshift} \times \Delta z_{\rm GR}$$
Pure Newtonian gravity requires $f_{\rm redshift} = 0$, whereas General Relativity predicts $f_{\rm redshift} = 1.0$.
The measured value (GRAVITY Collaboration 2018) yielded
$$f_{\rm redshift} = 1.00 \pm 0.10$$
This established the first direct detection of gravitational redshift around a supermassive black hole.

### Schwarzschild Pericenter Precession
In General Relativity, the pericenter of an eccentric orbit advances in the orbital plane after each revolution due to the non-Newtonian post-Newtonian effective potential term $\Delta\Phi = -\frac{G M_\bullet L^2}{c^2 r^3}$.
The angular precession per complete orbit is given by
$$\Delta\phi_{\rm SP} = \frac{6 \pi G M_\bullet}{c^2 a (1 - e^2)}$$
Substituting $a = 1.553 \times 10^{14}$ m, $e = 0.8847$, and $M_\bullet = 8.254 \times 10^{36}$ kg
$$\Delta\phi_{\rm SP} = \frac{6 \pi \times (6.674 \times 10^{-11}) \times (8.254 \times 10^{36})}{(2.998 \times 10^8)^2 \times (1.553 \times 10^{14}) \times (1 - 0.8847^2)}$$
Evaluating the term $(1 - e^2) = 1 - 0.7827 = 0.2173$
$$\text{Denominator} = (8.988 \times 10^{16}) \times (1.553 \times 10^{14}) \times 0.2173 \approx 3.033 \times 10^{30} \text{ m}^3 \text{ s}^{-2}$$
$$\text{Numerator} = 18.85 \times 5.509 \times 10^{26} \approx 1.038 \times 10^{28} \text{ m}^3 \text{ s}^{-2}$$
Dividing numerator by denominator
$$\Delta\phi_{\rm SP} = \frac{1.038 \times 10^{28}}{3.033 \times 10^{30}} \approx 3.424 \times 10^{-3} \text{ radians}$$
Converting radians to arcminutes ($1 \text{ rad} = 3437.75'$)
$$\Delta\phi_{\rm SP} \approx 3.424 \times 10^{-3} \times 3437.75' \approx 11.8' \text{ to } 12.1' \text{ per orbit} \approx 0.20^\circ \text{ per orbit}$$
GRAVITY Collaboration (2020) fitted the orbit with a parameter $f_{\rm SP}$ scaling this shift, obtaining
$$f_{\rm SP} = 1.10 \pm 0.19$$
The detection definitively confirmed prograde Schwarzschild precession, ruling out Newtonian point-mass gravity at greater than $5\sigma$.

---

## 5. Blackboard Blueprint and Observational Graph Literacy

```
        S2 ASTROMETRIC ORBIT AROUND SGR A* (RA - DEC PLANE)
   Dec Offset (arcsec)
      +0.2 +                                .--.
           |                             .-'    '-.  Apocenter (r_a ~ 1960 AU)
           |                           .'          '.
      +0.1 +                          /              \
           |                         |                |
           |                         |                |  Major axis ~ 0.25"
       0.0 +---------(Sgr A*)-------|----------------|------------------
           |           *             \                /
           |         Pericenter       '.            .'
      -0.1 +       (r_p ~ 120 AU)       '-.      .-'
           |      v_p ~ 7650 km/s          '----'
      -0.2 +
           +===+===========+===========+===========+===========+
             +0.2        +0.1         0.0        -0.1        -0.2
                                RA Offset (arcsec)

        ENCLOSED MASS M(<r) VERSUS RADIUS (BLACKBOARD GRAPH)
   log10 M(<r) / M_sun
       8 +
         |                                           Stellar Cluster
       7 +                                           M(<r) ~ r^1.2
         |                      PLATFORM OF SGR A*
       6 +======[=================================]...................
         |      | M_BH = 4.15 x 10^6 M_sun         - 
       5 +      |                                  - 
         |      | (Flat Keplerian shelf)           - 
       4 +      |                                  - 
         |      |                                  - 
       3 +      |                                  - 
         +======+=================================+===================+
               10^2                             10^5                10^7
             r_p (120 AU)                   0.5 pc (r_infl)        r (AU)
```

### Blackboard Presentation Script for the Oral Examination
1. Draw the astrometric ellipse of S2 in the coordinate plane of Right Ascension and Declination offsets. Clearly place Sgr A* at the primary focus, not at the geometric center of the ellipse.
2. Mark the pericenter at $r_p \approx 120$ AU and write down the velocity $v_p \approx 7650$ km/s. Note to Prof. Pizzella that $v_p/c \approx 2.5\%$, ensuring that first-order post-Newtonian relativistic effects become detectable.
3. Draw the enclosed mass profile $M(<r)$ against $\log r$. Emphasize the perfectly flat horizontal shelf between $120$ AU and $0.5$ pc at $M = 4.15 \times 10^6 M_\odot$.
4. Explain that beyond $0.5$ pc (the gravitational sphere of influence $r_{\rm infl} = G M_\bullet / \sigma^2$), the enclosed mass resumes rising due to the stellar cusp ($M \propto r^{1.2}$ to $r^{1.75}$ as predicted by Bahcall & Wolf 1976).
5. State the three numerical cornerstones from memory - distance $R_0 = 8.27$ kpc, mass $M_\bullet = 4.15 \times 10^6 M_\odot$, pericenter distance $r_p = 120$ AU $= 1400 R_s$.

---

## 6. Exact Textbook and Literature Provenance

- Course Dispensa `dispense_smbh_20_eng.pdf` (Prof. Alessandro Pizzella)
  - Chapter 2 - The Galactic Center and Sgr A* (pages 9-14) - Complete orbital tracking of S2, pericenter values, Keplerian mass evaluation, and density constraints.
- Course Lecture Slides
  - `gal_bh-01..15` - Adaptive optics images from NACO and SINFONI, S2 astrometric orbit, and S-star cluster catalog.
- Course Synthesis LaTeX Document
  - `SMBH_in_Galaxies.tex` (pages 4-7) - Section on direct dynamical evidence for Sgr A*, S2 orbital mechanics, and post-Newtonian tests.
- Peter Schneider, *Extragalactic Astronomy and Cosmology* (2015, Springer)
  - Chapter 2 - The Milky Way as a Galaxy (pages 80-90) - Sgr A* spectrum, radio flares, S2 orbit solution, and limits on dark clusters.
- Houjun Mo, Frank van den Bosch, Simon White, *Galaxy Formation and Evolution* (2010)
  - Chapter 14 - Active Galaxies and Black Holes (pages 645-648) - Dynamical evidence for supermassive black holes in the Milky Way.
- Primary Literature
  - Gillessen et al. (2009, ApJ 692, 1075) - *Monitoring Stellar Orbits Around the Massive Black Hole in the Galactic Center*.
  - Gillessen et al. (2017, ApJ 837, 30) - *An Update on Monitoring Stellar Orbits in the Galactic Center*.
  - GRAVITY Collaboration (2018, A&A 615, L15) - *Detection of the gravitational redshift in the orbit of the star S2 near the Galactic Centre massive black hole*.
  - GRAVITY Collaboration (2020, A&A 636, L5) - *Detection of the Schwarzschild precession in the orbit of the star S2 around the Galactic Centre massive black hole*.
  - Ghez et al. (2008, ApJ 689, 1044) - *Measuring Distance and Properties of the Milky Way's Central Supermassive Black Hole with Stellar Orbits at Keck*.
  - Event Horizon Telescope Collaboration (2022, ApJL 930, L12) - *First Sagittarius A* Event Horizon Telescope Results*.

---

## 7. Cross-References and Related Notes

- [M sigma relation](M%20sigma%20relation.html) - Co-evolution of SMBHs with host galaxy bulges
- [Magorrian relation](Magorrian%20relation.html) - Spheroid mass to black hole mass scaling
- [Water maser BH masses](Water%20maser%20BH%20masses.html) - Gold-standard mega-maser disk in NGC 4258
- [Stellar dynamics SMBH masses](Stellar%20dynamics%20SMBH%20masses.html) - Jeans modeling and Schwarzschild orbit superposition
- [Ionized gas SMBH masses](Ionized%20gas%20SMBH%20masses.html) - Thin Keplerian ionized gas disks
- [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html) - Master Map of Content for course

---

## 8. Course Slides and Figures

![gal_bh-01.png](../../assets/images/gal_bh-01.png)
*Figure 1 - NACO and SINFONI adaptive optics imaging of the central arcsecond around Sgr A*.*

![gal_bh-09.png](../../assets/images/gal_bh-09.png)
*Figure 2 - Astrometric orbit of S2 over full 16-year period (Gillessen et al. 2009).*

![gal_bh-14.png](../../assets/images/gal_bh-14.png)
*Figure 3 - GRAVITY interferometric detection of gravitational redshift and orbital precession in S2.*
