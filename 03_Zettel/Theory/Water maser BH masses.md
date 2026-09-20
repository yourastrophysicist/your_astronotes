---
layout: "default"
title: "Water maser BH masses"
---
# Water Maser SMBH Masses and Geometric Distances

## 1. Physical Principle of Astrophysical Water Masers

Astrophysical **water masers** provide the cleanest and most unambiguous dynamical measurements of supermassive black hole masses outside the Milky Way.
The emission originates from the $6_{16} \to 5_{23}$ rotational transition of ortho-$\mathrm{H_2O}$ molecules at rest-frame frequency.

$$\nu_0 = 22.23508 \, \mathrm{GHz} \qquad (\lambda_0 \approx 1.348 \, \mathrm{cm})$$

In certain active galactic nuclei (Seyfert 2 and LINER galaxies), the central accretion engine irradiates an edge-on molecular disk with hard X-rays. At radii of $0.1$ to $1.0\,\mathrm{pc}$, X-ray heating establishes optimal physical conditions ($T_{\rm gas} \sim 400 - 1000\,\mathrm{K}$, $n_{\rm H_2} \sim 10^8 - 10^{10}\,\mathrm{cm^{-3}}$) for collisional excitation followed by radiative de-excitation, pumping a strong population inversion.
Because maser amplification is exponential along lines of sight with constant velocity (coherent velocity paths), emission is detected exclusively along tangent lines and along the direct line of sight to the central source.

---

## 2. Geometry of the Circum-Nuclear Disk in NGC 4258

The prototype and gold standard is the active galaxy **NGC 4258** (M106, Miyoshi et al. 1995; Herrnstein et al. 1999; Humphreys et al. 2013; Reid et al. 2019), observed with the Very Long Baseline Array (VLBA) at sub-milliarcsecond angular resolution ($\theta_{\rm beam} \sim 0.2\,\mathrm{mas}$).

The observations reveal a razor-thin, slightly warped edge-on accretion disk (inclination $i \approx 82^\circ - 83^\circ$) spanning radii from.

$$r_{\rm in} \approx 0.13 \, \mathrm{pc} \quad (4.1 \, \mathrm{mas}) \qquad \text{to} \qquad r_{\rm out} \approx 0.26 \, \mathrm{pc} \quad (8.4 \, \mathrm{mas})$$

The maser features fall into three kinematically distinct groups.
1. **Redshifted Tangential Masers** - Located on the western side of the nucleus at radii $0.13$ to $0.26$ pc, with line-of-sight velocities $v_{\rm LOS} \approx +700$ to $+1000\,\mathrm{km\,s^{-1}}$ relative to the systemic velocity ($v_{\rm sys} \approx 470\,\mathrm{km\,s^{-1}}$).
2. **Blueshifted Tangential Masers** - Located symmetrically on the eastern side at radii $0.13$ to $0.26$ pc, with relative velocities $v_{\rm LOS} \approx -700$ to $-1000\,\mathrm{km\,s^{-1}}$.
3. **Systemic Masers** - Located directly along the line of sight in front of the central continuum engine at $r \approx 0.14\,\mathrm{pc}$, with line-of-sight velocities close to $v_{\rm sys}$.

---

## 3. Unbroken Mathematical Derivation - Keplerian Rotation and Black Hole Mass

### Step 1 - The Tangential Velocity Profile
At the tangent points of a circular orbit viewed edge-on ($\sin i \approx 1$), the velocity vector is oriented entirely along the line of sight.

$$v_{\rm LOS}(r) = v_{\rm sys} \pm v_{\rm circ}(r)$$

For a disk governed by a central point mass $M_\bullet$, the circular velocity follows Kepler's third law.

$$v_{\rm circ}(r) = \sqrt{\frac{G M_\bullet}{r}}$$

VLBA measurements of the high-velocity spots across $0.13\,\mathrm{pc} \le r \le 0.26\,\mathrm{pc}$ yield an empirical rotation curve.

$$v(r) \propto r^{-0.495 \pm 0.005}$$

This is an exact Keplerian falloff ($v \propto r^{-1/2}$) to better than $1\%$ precision.
- At the inner edge ($r = 0.13\,\mathrm{pc}$), the velocity is $v = 1080\,\mathrm{km\,s^{-1}}$
- At the outer edge ($r = 0.26\,\mathrm{pc}$), the velocity drops to $v = 760\,\mathrm{km\,s^{-1}}$

### Step 2 - Precision Black Hole Mass Determination
Because the velocity follows a pure Keplerian curve without deviation, any extended mass within $0.26\,\mathrm{pc}$ is negligible. Solving directly.

$$M_\bullet = \frac{v_{\rm circ}^2 r}{G}$$

Substituting the observed values yields.

$$\boxed{M_\bullet = (3.9 \pm 0.1) \times 10^7 \, M_\odot}$$

---

## 4. Unbroken Mathematical Derivation - Centripetal Acceleration and Geometric Distance

### Step 1 - Centripetal Acceleration of the Systemic Masers
The systemic masers sit on the near side of the disk directly between Earth and the central black hole. While their instantaneous line-of-sight velocity equals the systemic velocity ($v_{\rm LOS} \approx v_{\rm sys}$), their circular velocity vector is perpendicular to the line of sight.

Consequently, their centripetal acceleration vector points directly radially inward along our line of sight toward the black hole.

$$a_{\rm cent} = \frac{v_{\rm circ}^2}{r_0} = \frac{d v_{\rm LOS}}{d t}$$

VLBI spectroscopic monitoring over multiple decades measures a constant, steady secular velocity drift.

$$\frac{d v_{\rm LOS}}{d t} = a_{\rm cent} \approx 9.5 \pm 0.1 \, \mathrm{km\,s^{-1}\,yr^{-1}}$$

### Step 2 - Direct Geometric Distance Without Standard Candles
The angular radius $\theta_0$ of the systemic masers on the sky is measured directly from VLBI imaging.

$$r_0 = D \cdot \theta_0$$

where $D$ is the distance to NGC 4258. Substituting into the centripetal acceleration.

$$a_{\rm cent} = \frac{v_{\rm circ}^2}{D \theta_0}$$

Solving for distance $D$.

$$\boxed{D = \frac{v_{\rm circ}^2}{a_{\rm cent} \, \theta_0} = \frac{v_{\rm circ}^2}{(d v_{\rm LOS}/d t) \, \theta_0}}$$

Substituting $v_{\rm circ} \approx 1080\,\mathrm{km\,s^{-1}}$, $a_{\rm cent} \approx 9.5\,\mathrm{km\,s^{-1}\,yr^{-1}}$, and the measured angular offset yields.

$$D = 7.2 \pm 0.3 \, \mathrm{Mpc}$$

(Refined to $D = 7.58 \pm 0.11\,\mathrm{Mpc}$ by Reid et al. 2019, achieving $1.5\%$ absolute geometric precision).
This provides an anchor for calibrating Cepheid variables and the tip of the red-giant branch (TRGB), bypassing the entire cosmic distance ladder.

---

## 5. Ruling Out Dark Star Clusters - The Central Density Gate

Could the central dark mass be a dense cluster of stellar remnants (white dwarfs, neutron stars, or black holes)?
The enclosed mass within the innermost maser orbit $r_{\rm in} = 0.13\,\mathrm{pc}$ sets a rigorous lower limit on the central mass density.

$$\rho \ge \frac{3 M_\bullet}{4\pi r_{\rm in}^3} = \frac{3 (3.9 \times 10^7 M_\odot)}{4\pi (0.13\,\mathrm{pc})^3} \approx 4.2 \times 10^{12} \, M_\odot\,\mathrm{pc}^{-3}$$

At a stellar number density exceeding $10^{12}$ stars per cubic parsec.
1. The collision timescale between stars is.
   $$t_{\rm coll} \sim \frac{1}{n \sigma_{\rm coll} v} \ll 10^7 \, \mathrm{yr}$$
2. The core collapse and evaporative timescale is.
   $$t_{\rm evap} \sim 10^8 \, \mathrm{yr}$$
Both timescales are orders of magnitude smaller than the age of the galaxy ($\sim 10^{10}\,\mathrm{yr}$). A cluster of objects would have merged into a single singularity or evaporated. This proves the central object is a supermassive black hole.

---

## 6. Blackboard Observational Blueprint

When sketching water maser kinematics on the blackboard.

```text
  Position-Velocity Diagram (P-V Diagram)

  v_LOS (km/s)
       |
  1500 |             Blue Tangential Masers -       Red Tangential Masers.
       |             v ~ r^(-1/2)                  v ~ r^(-1/2)
  1000 |             *                                                    *
       |                *                                              *
   500 |                   *       Systemic Masers -                 *
       |                           dv/dt = 9.5 km/s/yr
   470 +=================================|||==============================+ (v_sys)
       |                           (slope dv/dx)
       |
     0 +===============+===============+===+===+===============+===============+
      -8              -6              -4   0  +4              +6              +8
                          Projected Distance x (milliarcsec)
```

### Key Blackboard Features
- **Horizontal Axis** - Projected angular separation $x$ from the center in milliarcseconds ($-10\,\mathrm{mas}$ to $+10\,\mathrm{mas}$)
- **Vertical Axis** - Line-of-sight velocity $v_{\rm LOS}$ in $\mathrm{km\,s^{-1}}$ ($0$ to $1500\,\mathrm{km\,s^{-1}}$), with horizontal line at $v_{\rm sys} = 470\,\mathrm{km\,s^{-1}}$
- **High-Velocity Branches** - Plot symmetrical curved branches showing $v \propto |x|^{-1/2}$ on both positive and negative sides
- **Systemic Feature** - Draw vertical cluster of spots at $x \approx 0$ crossing through $v_{\rm sys}$ with steep positive slope $dv/dx$
- **Accretion Disk Sketch** - Draw small inset showing thin edge-on ellipse, marking tangent lines on the edges and systemic points crossing in front

---

## 7. Textbook and Course Citations

- **Prof. Alessandro Pizzella Course Dispensa**
  - File - `dispense_smbh_20_eng.pdf`
  - Chapter 2, Section 2.2 "Water Masers", pages 15-16 (complete physical model, Keplerian rotation proof, centripetal acceleration drift, and NGC 4258 observations).
- **Student Synthesis Document**
  - File - `SMBH_in_Galaxies.tex`
  - Section 6 "Circumnuclear Water Masers", pages 8-9 (VLBA interferometry, density limit calculations, and distance anchor).
- **Mo, van den Bosch & White (2010), *Galaxy Formation and Evolution***
  - File - `Houjun Mo, Frank van den Bosch, Simon White - Galaxy Formation and Evolution (2010, Cambridge University Press) - libgen.li.pdf`
  - Chapter 14, Section 14.2.1 "Gas Kinematics and Water Masers", pages 646-647.
- **Primary Literature References**
  - Miyoshi, M., et al. 1995, Nature, 373, 127.
  - Herrnstein, J. R., et al. 1999, Nature, 400, 539.
  - Reid, M. J., et al. 2019, ApJ, 886, L27.

---

## 8. See Also

- [[Reverberation mapping]]
- [[Stellar dynamics SMBH masses]]
- [[Magorrian relation]]
- [[M sigma relation]]
- [[Galactic Center Sgr A and S-stars]]
- [[Hubble law]]
- [[Astrophysics_of_Galaxies_MOC]]

---

## 9. Astrophysics of Galaxies Figures and Slides (Prof. Alessandro Pizzella)

![miyoshi1995_fig1_masers.png](../../assets/images/miyoshi1995_fig1_masers.png)
*VLBA map of 22 GHz H2O water masers in the active galaxy NGC 4258 (Miyoshi et al. 1995).*

![miyoshi1995_fig2_masers.png](../../assets/images/miyoshi1995_fig2_masers.png)
*Keplerian velocity curve v(r) proportional to r^(-1/2) of water masers proving central SMBH of 3.9 x 10^7 M_Sun.*

![gal_bh-07.png](../../assets/images/gal_bh-07.png)
*Thin Keplerian disk of water masers at radii 0.13 pc < r < 0.26 pc.*

![gal_bh-08.png](../../assets/images/gal_bh-08.png)
*Centripetal acceleration a = v^2 / r measured directly from maser frequency drift.*

---

## 10. Lecture Slides and Reference Figures (Prof. Alessandro Pizzella)

![gal_bh-16.png](../../assets/images/gal_bh-16.png)

![gal_bh-17.png](../../assets/images/gal_bh-17.png)

![gal_bh-18.png](../../assets/images/gal_bh-18.png)

![gal_bh-19.png](../../assets/images/gal_bh-19.png)

![gal_bh-20.png](../../assets/images/gal_bh-20.png)

![gal_bh-21.png](../../assets/images/gal_bh-21.png)

![gal_bh-22.png](../../assets/images/gal_bh-22.png)

![gal_bh-23.png](../../assets/images/gal_bh-23.png)

![gal_bh-24.png](../../assets/images/gal_bh-24.png)

![gal_bh-25.png](../../assets/images/gal_bh-25.png)

![gal_bh-26.png](../../assets/images/gal_bh-26.png)

![gal_bh-27.png](../../assets/images/gal_bh-27.png)

![gal_bh-28.png](../../assets/images/gal_bh-28.png)



## Linked References

- [[Galactic Center Sgr A and S-stars]]
- [[Ionized gas SMBH masses]]
- [[M sigma relation]]
- [[Magorrian relation]]
- [[Reverberation mapping]]
- [[Stellar dynamics SMBH masses]]
- [[Astrophysics_of_Galaxies_MOC]]


