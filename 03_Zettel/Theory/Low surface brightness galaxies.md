---
layout: "default"
title: "Low surface brightness galaxies"
tags: ""
---
# Low Surface Brightness Galaxies

Low Surface Brightness (LSB) galaxies are defined photometrically as galaxies whose central and average surface brightnesses are significantly fainter than the ambient night-sky background. Formally, an LSB galaxy is characterized by a central surface brightness in the optical B-band fainter than $\mu_{0, B} \ge 22.5 - 23.0 \text{ mag arcsec}^{-2}$, contrasting sharply with the canonical Freeman (1970) value of $\mu_{0, B} \approx 21.65 \text{ mag arcsec}^{-2}$ that typifies High Surface Brightness (HSB) spirals. Historically overlooked due to photographic contrast selection effects first formalized by Disney (1976), LSB galaxies represent a major component of the cosmic galaxy census. Astrophysically, LSB galaxies are characterized by diffuse, un-evolved stellar disks, low average gas surface densities ($\Sigma_{\mathrm{gas}} < \Sigma_{\mathrm{crit}}$), sub-solar metallicities, and an extreme degree of dark matter domination at all galactocentric radii, making them ideal astrophysical laboratories for testing cold dark matter ($\Lambda$CDM) halo structure and the Core-Cusp problem.

---

## 1. Freeman's Law and Disney's Selection Effect

In 1970, Kenneth Freeman analyzed optical surface photometry for 36 spiral and lenticular galaxies, discovering that 28 of them exhibited an apparently universal exponential central surface brightness -
$$\mu_{0, B} = 21.65 \pm 0.30 \text{ mag arcsec}^{-2} \quad \left( I_0 \approx 140 \, L_{\odot, B} \text{ pc}^{-2} 
ight)$$
This empirical constancy became known as Freeman's Law. In 1976, Michael Disney demonstrated that Freeman's Law is not a fundamental property of galaxy formation, but rather a profound observational selection effect imposed by the brightness of the night sky ($\mu_{\mathrm{sky}} \approx 22.5 \text{ mag arcsec}^{-2}$ in B).

---

## 2. Step-by-Step Calculus Derivation - The Disney Selection Effect

Let us derive Disney's visibility curve analytically from first principles.

### Step 1 - The Exponential Disk Surface Brightness Profile
Consider an exponential galactic disk whose surface brightness profile $I(R)$ in physical intensity units ($L_\odot \text{ pc}^{-2}$) is given by -
$$I(R) = I_0 \exp\left( -\frac{R}{h} 
ight)$$
where $I_0$ is the central surface brightness and $h$ is the radial exponential scale length. In astronomical magnitudes ($\text{mag arcsec}^{-2}$), this profile is expressed as -
$$\mu(R) = \mu_0 + 1.0857 \left( \frac{R}{h} 
ight)$$
where $\mu_0 = -2.5 \log_{10}(I_0) + \text{constant}$, and $1.0857 = 2.5 / \ln(10)$.

### Step 2 - Total Galaxy Luminosity
The total luminosity $L$ of an axisymmetric thin exponential disk is obtained by integrating over all radii -
$$L = \int_0^\infty I(R) \cdot 2\pi R \, dR = 2\pi I_0 \int_0^\infty R e^{-R/h} \, dR$$
Using integration by parts ($\int u \, dv = uv - \int v \, du$ with $u = R$ and $dv = e^{-R/h} dR$) -
$$\int_0^\infty R e^{-R/h} \, dR = \left[ -h R e^{-R/h} 
ight]_0^\infty + h \int_0^\infty e^{-R/h} \, dR = 0 + h \left[ -h e^{-R/h} 
ight]_0^\infty = h^2$$
Therefore, the total luminosity is strictly -
$$L = 2\pi I_0 h^2$$
Solving for the scale length $h$ as a function of total luminosity $L$ and central intensity $I_0$ -
$$h = \sqrt{\frac{L}{2\pi I_0}}$$

### Step 3 - Limiting Observable Radius
On a photographic plate or CCD exposure with night-sky background, a galaxy can be detected only out to a limiting isophotal threshold surface brightness $I_{\mathrm{lim}}$ (corresponding to magnitude $\mu_{\mathrm{lim}}$). The limiting observable radius $R_{\mathrm{lim}}$ satisfies -
$$I(R_{\mathrm{lim}}) = I_0 \exp\left( -\frac{R_{\mathrm{lim}}}{h} 
ight) = I_{\mathrm{lim}}$$
Taking the natural logarithm of both sides -
$$-\frac{R_{\mathrm{lim}}}{h} = \ln\left( \frac{I_{\mathrm{lim}}}{I_0} 
ight) = -\ln\left( \frac{I_0}{I_{\mathrm{lim}}} 
ight)$$
$$R_{\mathrm{lim}} = h \ln\left( \frac{I_0}{I_{\mathrm{lim}}} 
ight)$$
Substitute our previous expression for $h = \sqrt{L / (2\pi I_0)}$ -
$$R_{\mathrm{lim}}(I_0) = \sqrt{\frac{L}{2\pi}} \frac{\ln(I_0 / I_{\mathrm{lim}})}{\sqrt{I_0}}$$

### Step 4 - Maximizing Observable Angular Size with Respect to Central Intensity
To determine which central surface brightness $I_0$ produces the maximum detectable radius $R_{\mathrm{lim}}$ for a galaxy of fixed total luminosity $L$, we differentiate $R_{\mathrm{lim}}$ with respect to $I_0$ and set the derivative to zero -
$$\frac{d R_{\mathrm{lim}}}{d I_0} = \sqrt{\frac{L}{2\pi}} \cdot \frac{d}{d I_0} \left[ I_0^{-1/2} \ln\left( \frac{I_0}{I_{\mathrm{lim}}} 
ight) 
ight] = 0$$
Applying the product rule of differentiation -
$$\frac{d R_{\mathrm{lim}}}{d I_0} = \sqrt{\frac{L}{2\pi}} \left[ -\frac{1}{2} I_0^{-3/2} \ln\left( \frac{I_0}{I_{\mathrm{lim}}} 
ight) + I_0^{-1/2} \cdot \frac{1}{I_0 / I_{\mathrm{lim}}} \cdot \frac{1}{I_{\mathrm{lim}}} 
ight] = 0$$
$$\sqrt{\frac{L}{2\pi}} \left[ -\frac{1}{2} I_0^{-3/2} \ln\left( \frac{I_0}{I_{\mathrm{lim}}} 
ight) + I_0^{-3/2} 
ight] = 0$$
Factor out $I_0^{-3/2}$ -
$$I_0^{-3/2} \left[ 1 - \frac{1}{2} \ln\left( \frac{I_0}{I_{\mathrm{lim}}} 
ight) 
ight] = 0$$
Setting the bracketed expression to zero -
$$1 - \frac{1}{2} \ln\left( \frac{I_0}{I_{\mathrm{lim}}} 
ight) = 0 \implies \ln\left( \frac{I_0}{I_{\mathrm{lim}}} 
ight) = 2 \implies \frac{I_0}{I_{\mathrm{lim}}} = e^2 \approx 7.389$$

### Step 5 - Converting to Magnitude Coordinates
Convert this intensity ratio into surface brightness magnitudes -
$$\mu_0 - \mu_{\mathrm{lim}} = -2.5 \log_{10}\left( \frac{I_0}{I_{\mathrm{lim}}} 
ight) = -2.5 \log_{10}(e^2) = -5 \log_{10}(e)$$
Since $\log_{10}(e) \approx 0.43429$ -
$$\mu_0 - \mu_{\mathrm{lim}} = -5 (0.43429) \approx -2.17 \text{ mag arcsec}^{-2}$$
$$\mu_{0, {
m max}} = \mu_{\mathrm{lim}} - 2.17 \text{ mag arcsec}^{-2}$$
On historical photographic survey plates (such as the Palomar Observatory Sky Survey, POSS), the detection limit for visual galaxy identification was $\mu_{\mathrm{lim}} \approx 24.0 \text{ mag arcsec}^{-2}$. Substituting this limit -
$$\mu_{0, {
m max}} \approx 24.0 - 2.17 = 21.83 \text{ mag arcsec}^{-2}$$
This matches Freeman's observed value ($\mu_0 = 21.65 \pm 0.30$) with remarkable precision.

### Physical Conclusion
Galaxies with central surface brightness $\mu_0 \approx 21.65$ maximize their apparent isophotal diameter on the sky.
- If $\mu_0 \ll 21.65$ (High Surface Brightness), $I_0$ is extremely large, which forces the physical scale length $h = \sqrt{L / 2\pi I_0}$ to be tiny. The galaxy appears compact and stellar, and was systematically discarded as a foreground star.
- If $\mu_0 \gg 21.65$ (Low Surface Brightness), $I_0$ approaches $I_{\mathrm{lim}}$, causing $\ln(I_0 / I_{\mathrm{lim}}) 	o 0$. The galaxy surface brightness drowns entirely within the Poisson noise of the night-sky background, making it invisible on photographic plates.

---

## 3. Demographics and Taxonomy of LSB Galaxies

Modern wide-field digital imaging surveys (SDSS, Dragonfly Telephoto Array, Dark Energy Survey) have established a diverse taxonomy of LSB systems -

1. **Dwarf Spheroidals and Dwarf Irregulars (dSph, dIrr)** - Low stellar mass ($M_* \sim 10^5 - 10^7 M_\odot$) systems with $\mu_{0, V} \sim 23 - 26 \text{ mag arcsec}^{-2}$. They are dynamically cold and dominated by dark matter at all radii.
2. **Classical LSB Spiral Disks** - Disk galaxies with normal total luminosities and rotation velocities ($v_{\mathrm{rot}} \sim 100 - 200\text{ km s}^{-1}$), but with extended exponential scale lengths ($h \sim 5 - 15\text{ kpc}$) and central surface brightnesses $\mu_{0, B} \sim 23 - 25\text{ mag arcsec}^{-2}$ (e.g. UGC 128, F568-3).
3. **Giant LSB Galaxies (e.g. Malin 1)** - The extreme class of disk galaxies. Malin 1 possesses an enormous gas disk with scale length $h \approx 55\text{ kpc}$ (5 times larger than the Milky Way!), a circular rotation velocity of $v_c \approx 300\text{ km s}^{-1}$, and neutral gas mass $M_{\mathrm{HI}} \approx 5 	imes 10^{10} M_\odot$, yet its central disk surface brightness is $\mu_{0, V} \approx 25.5\text{ mag arcsec}^{-2}$.
4. **Ultra-Diffuse Galaxies (UDGs)** - Discovered predominantly in dense cluster environments (such as Coma and Virgo). UDGs possess effective radii comparable to the Milky Way ($R_e \sim 1.5 - 5\text{ kpc}$) but stellar masses and luminosities comparable to dwarf galaxies ($L_V \sim 10^7 - 10^8 L_\odot$), yielding central surface brightnesses $\mu_{0, g} \sim 24 - 27\text{ mag arcsec}^{-2}$ (e.g. Dragonfly 44).

---

## 4. Star Formation Inefficiency and Gas Properties

LSB galaxies are characterized by an extremely low star formation rate per unit area ($\Sigma_{\mathrm{SFR}} \lesssim 10^{-4} M_\odot \text{ yr}^{-1} \text{ kpc}^{-2}$).

### Kennicutt-Schmidt Threshold and Toomre Q Stability
According to the Kennicutt-Schmidt star formation law, star formation operates efficiently only when gas surface density exceeds a critical threshold -
$$\Sigma_{\mathrm{gas}} \ge \Sigma_{\mathrm{crit}} \approx 10 \, M_\odot \text{ pc}^{-2}$$
In LSB galaxies, atomic hydrogen surveys demonstrate that the neutral gas surface density rarely exceeds $\Sigma_{\mathrm{gas}} \sim 1 - 5 \, M_\odot \text{ pc}^{-2}$ across the entire disk.
Furthermore, the Toomre gravitational stability parameter for gas is -
$$Q_{\mathrm{gas}} = \frac{\kappa \, \sigma_{\mathrm{gas}}}{\pi G \Sigma_{\mathrm{gas}}}$$
Because $\Sigma_{\mathrm{gas}}$ is suppressed while epicyclic frequency $\kappa$ and turbulent velocity dispersion $\sigma_{\mathrm{gas}} \approx 8 - 10\text{ km s}^{-1}$ remain normal, the gas disk maintains $Q_{\mathrm{gas}} > 2 - 3$ everywhere. The interstellar medium is dynamically stable against large-scale gravitational collapse and molecular cloud condensation, keeping LSB galaxies in an un-evolved, gas-rich state over cosmic time.

---

## 5. Dark Matter Domination and the Core-Cusp Problem

In high surface brightness galaxies, the central gravitational potential is dominated by stars (the "maximum disk" scenario), creating an intractable degeneracy between stellar mass-to-light ratio $(M/L)_*$ and dark matter halo parameters.
In LSB galaxies, because stellar surface mass density is negligible ($\Sigma_* \ll 100 \, M_\odot \text{ pc}^{-2}$), baryonic mass accounts for less than 10 percent of the total dynamical force at all radii -
$$v_{\mathrm{circ}}^2(R) = v_*^2(R) + v_{\mathrm{gas}}^2(R) + v_{\mathrm{DM}}^2(R) \approx v_{\mathrm{DM}}^2(R) = \frac{G M_{\mathrm{DM}}(<R)}{R}$$
Therefore, LSB rotation curves measure the dark matter halo potential directly without disk-halo degeneracies.

### Observational Impact on Cosmology
High-resolution $\text{H}\alpha$ and H I rotation curves of LSB galaxies (de Blok, McGaugh, Pizzella) systematically reveal inner circular velocity curves that rise linearly with radius -
$$v_{\mathrm{circ}}(R) \propto R \quad (\text{as } R 	o 0)$$
Since $M(<R) \propto R \, v_{\mathrm{circ}}^2 \propto R^3$, the enclosed density is -
$$
ho(R) \propto \frac{M(<R)}{R^3} \propto R^0 = \text{constant}$$
This constant-density core ($
ho \propto R^0$, described by Burkert or pseudo-isothermal profiles) directly conflicts with the steep inner density cusp ($
ho \propto R^{-1}$) predicted by cosmological N-body simulations of Cold Dark Matter (the NFW profile), formulating the foundational observational basis of the Core-Cusp Problem.

---

## 6. Observational Graph Literacy and ASCII Blueprints

### Diagram 1 - Optical Surface Brightness Profiles
```text
  Surface Brightness mu [mag arcsec^-2]
   18 +----------------------------------------------------------------+
      |  \                                                             |
   20 |   \  HSB Spiral Disk (Freeman mu_0 = 21.65)                    |
      |    \                                                           |
   22 |-----\------------------------------------ Sky Background mu_sky |
      |      \        \                                                |
   24 |       \        \  Classical LSB Spiral (mu_0 = 23.5)           |
      |        \        \                                              |
   26 |         \        \         ----------------- UDG (mu_0 = 25.0) |
      |          \        \        \                                   |
   28 |           \        \        \        \                         |
      |            \        \        \        \  Malin 1 Giant Disk    |
   30 +-------------+--------+--------+--------+-----------------------+
      0             5        10       15       20                      50
                             Galactocentric Radius R [kpc]
```

### Diagram 2 - Disney's Visibility Curve
```text
  Observable Limiting Diameter D_lim [arcmin]
   10 +----------------------------------------------------------------+
      |                           ^                                    |
    8 |                          / \                                  |
      |                         /   \                                 |
    6 |                        /     \                                |
      |                       /       \                               |
    4 |                      /         \                              |
      |    Too Compact      /     |     \         Too Diffuse         |
    2 |    (Looks Stellar) /      |      \        (Drowns in Sky)     |
      |                   /       |       \                           |
    0 +------------------+--------+--------+---------------------------+
      16                 18       21.8     24                          28
                     Central Surface Brightness mu_0 [mag arcsec^-2]
  Key Physics -
  - Peak occurs at mu_0 = mu_lim - 2.17 mag arcsec^-2 (Freeman's value).
  - High surface brightness galaxies have small physical scale lengths and look like stars.
  - Low surface brightness galaxies drop below photographic plate contrast limits.
```

### Diagram 3 - LSB Rotation Curve Decomposition
```text
  Circular Velocity v_c [km/s]
  150 +----------------------------------------------------------------+
      |                                      .......... Total v_c      |
  120 |                               .......                          |
      |                        .......- - - - - Dark Matter v_DM       |
   90 |                 .......- - - -                                 |
      |          .......- - - -                                        |
   60 |   .......- - - -                                               |
      |  / - - -                                                       |
   30 | /==================== Gas v_gas                                |
      |/--------------------- Stellar Disk v_*                         |
    0 +----------------------------------------------------------------+
      0        2        4        6        8        10       12       14
                                Radius R [kpc]
  Astrophysical Insight -
  - Stellar contribution v_* is negligible everywhere.
  - Gas contribution v_gas exceeds stars at intermediate radii.
  - Dark matter halo v_DM accounts for > 90% of total dynamical mass at ALL radii.
```

---

## 7. Oral Exam Blackboard Presentation Script

When asked by Prof. Pizzella - *"What are Low Surface Brightness galaxies, why were they missed historically, and why are they fundamental for dark matter studies?"*

1. **State the definition and historical selection effect** -
   - Write on the board - $\mu_{0, B} \ge 22.5 - 23.0 \text{ mag arcsec}^{-2}$, comparing it to Freeman's value $\mu_{0, B} = 21.65$.
   - Explain - *"In 1970, Freeman suggested that all spiral disks have a universal central surface brightness. In 1976, Disney demonstrated that this is an observational selection effect imposed by the night sky background."*

2. **Derive Disney's formula on the blackboard** -
   - Write $L = 2\pi I_0 h^2 \implies h = \sqrt{L / 2\pi I_0}$.
   - Write the limiting radius equation -
     $$R_{\mathrm{lim}} = h \ln(I_0 / I_{\mathrm{lim}}) = \sqrt{\frac{L}{2\pi}} \frac{\ln(I_0 / I_{\mathrm{lim}})}{\sqrt{I_0}}$$
   - Differentiate with respect to $I_0$ -
     $$\frac{d R_{\mathrm{lim}}}{d I_0} = 0 \implies \ln\left( \frac{I_0}{I_{\mathrm{lim}}} 
ight) = 2 \implies \frac{I_0}{I_{\mathrm{lim}}} = e^2$$
   - Convert to magnitudes - $\mu_0 = \mu_{\mathrm{lim}} - 5\log_{10}(e) \approx \mu_{\mathrm{lim}} - 2.17$.
   - Conclude - *"For photographic plates with $\mu_{\mathrm{lim}} \approx 24.0$, the maximum observable diameter occurs exactly at $\mu_0 = 21.83 \text{ mag arcsec}^{-2}$. Brighter galaxies look like stars, and fainter galaxies drown in sky noise."*

3. **Explain the star formation inefficiency** -
   - Write - $\Sigma_{\mathrm{gas}} \sim 1 - 5 \, M_\odot \text{ pc}^{-2} < \Sigma_{\mathrm{crit}} \approx 10 \, M_\odot \text{ pc}^{-2}$.
   - Explain - *"Because the gas density is below the Kennicutt-Schmidt star formation threshold, the Toomre stability parameter $Q > 1$, preventing large-scale star formation and leaving the galaxy un-evolved."*

4. **Highlight the cosmological importance for dark matter** -
   - Draw the rotation curve decomposition.
   - Conclude - *"In HSB galaxies, stars dominate the center, leading to the disk-halo degeneracy. In LSB galaxies, stars are dynamically negligible everywhere. The rotation curve directly traces the dark matter halo. High-resolution rotation curves show a linear inner rise $v \propto R$, proving that dark matter halos have constant-density cores ($
ho \propto R^0$), challenging the NFW cuspy halo prediction of CDM."*

---

## 8. Primary Course References

- **Prof. Alessandro Pizzella's Lecture Notes** -
  - `Astrophysics_of_Galaxies.tex` (Part I - Surface Brightness Distributions and Selection Effects, pages 8-11).
  - `dispense_DM_2_eng.pdf` (Dark matter in low surface brightness systems, pages 1-22).
  - `DarkMatter_ashman.pdf` (Dark matter halo profiles and LSB dynamics, pages 15-28).
- **Seminal Literature** -
  - Freeman, K. C. (1970, ApJ, 160, 811) - *On the Disks of Spiral and S0 Galaxies*.
  - Disney, M. J. (1976, Nature, 263, 573) - *Visibility of Galaxies*.
  - Bothun, G., Impey, C., and McGaugh, S. (1997, PASP, 109, 745) - *Low Surface Brightness Galaxies*.
  - de Blok, W. J. G., McGaugh, S. S., and Rubin, V. C. (2001, AJ, 122, 2396) - *High-Resolution Rotation Curves of Low Surface Brightness Galaxies*.
  - van Dokkum, P. G., et al. (2015, ApJL, 798, L45) - *Spectroscopic Confirmation of a Large Population of Low Surface Brightness Galaxies in the Coma Cluster*.
- **Standard Textbooks** -
  - Mo, H., van den Bosch, F., and White, S. (2010), *Galaxy Formation and Evolution*, Cambridge University Press, Chapter 2 - Selection Effects and LSB Galaxies (pages 75-79), Chapter 11 - Dynamics of LSB Disks (pages 495-498).
  - Binney, J., and Merrifield, M. (1998), *Galactic Astronomy*, Princeton University Press, Chapter 4 - Surface Photometry and Selection Effects (pages 180-188).

---

## 9. Related Knowledge Base Notes

- [De Vaucouleurs and exponential profiles](De%20Vaucouleurs%20and%20exponential%20profiles.html) - Classical empirical surface brightness profiles of galactic disks.
- [Petrosian radius](Petrosian%20radius.html) - Distance- and surface-brightness-independent photometric aperture definitions.
- [Dark matter rotation curves](Dark%20matter%20rotation%20curves.html) - Flat rotation curves and dark matter halo mass modeling.
- [Schmidt-Kennicutt law](Schmidt-Kennicutt%20law.html) - Star formation rate surface density relations and critical density thresholds.
- [Dark matter in dwarf galaxies](Dark%20matter%20in%20dwarf%20galaxies.html) - Testing core versus cusp dark matter profiles in dwarf systems.

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Dark%20matter%20in%20dwarf%20galaxies.html" class="backlink-item">Dark matter in dwarf galaxies</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
  </ul>
</div>

