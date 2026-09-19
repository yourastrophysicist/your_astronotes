---
layout: "default"
title: "Madau plot"
---
# The Madau Plot (Cosmic Star Formation History)

## 1. Physical Significance of the Cosmic Star Formation History

The **Madau plot** (or Madau-Dickinson plot; Madau et al. 1996; Lilly et al. 1996; Madau & Dickinson 2014) maps the cosmic star formation rate density $\rho_{\rm SFR}(z)$, defined as the total mass of stars formed per unit comoving volume per unit time (in units of $M_\odot\,\mathrm{yr}^{-1}\,\mathrm{Mpc}^{-3}$), as a function of redshift $z$ and lookback time.

It is the fundamental empirical benchmark for all galaxy formation and cosmological evolution theories, demonstrating that.
1. Star formation in the universe was far more active in the past than it is today.
2. The cosmic star formation rate peaked approximately $10$ billion years ago ($z \sim 2$, an epoch known as **Cosmic Noon**).
3. Approximately $50\%$ of all stars existing in the universe today were formed between $z = 1.0$ and $z = 3.0$.

---

## 2. Unbroken Mathematical Derivation - From UV Luminosity Density to $\rho_{\rm SFR}$

### Step 1 - Integration of the UV Luminosity Function
At any cosmological redshift $z$, deep optical/near-infrared surveys measure the rest-frame ultraviolet (typically $\lambda \approx 1500\,$\AA) luminosity function of galaxies, parameterized by the Schechter function.

$$\Phi(L, z) \, dL = \phi^*(z) \left( \frac{L}{L^*(z)} \right)^{\alpha(z)} \exp\left( -\frac{L}{L^*(z)} \right) \frac{dL}{L^*(z)}$$

The total comoving UV luminosity density $\rho_{\rm UV}(z)$ (in units of $\mathrm{erg\,s^{-1}\,Hz^{-1}\,Mpc^{-3}}$) is the first luminosity moment of the luminosity function.

$$\rho_{\rm UV}(z) = \int_0^\infty L \, \Phi(L, z) \, dL = \phi^*(z) L^*(z) \int_0^\infty x^{\alpha(z)+1} e^{-x} \, dx$$

where $x \equiv L / L^*(z)$. Evaluating via the Euler Gamma function.

$$\rho_{\rm UV}(z) = \phi^*(z) L^*(z) \, \Gamma(\alpha(z) + 2)$$

Because faint-end slopes at high redshift approach $\alpha \approx -1.6$ to $-2.0$, convergence requires integration down to a physical faint-end limit $L_{\rm lim} \sim 0.03 L^*$ to avoid logarithmic divergence when $\alpha \le -2$.

### Step 2 - Dust Attenuation and Infrared Complementarity
Massive young stars form within dense, dusty giant molecular clouds. Dust grains absorb rest-frame ultraviolet photons and re-radiate the absorbed energy as thermal infrared dust continuum ($8 - 1000\,\mu\mathrm{m}$).
The intrinsic, dust-corrected UV luminosity density is related to the observed uncorrected value by.

$$\rho_{\rm UV, corr}(z) = 10^{0.4 A_{\rm UV}(z)} \, \rho_{\rm UV, obs}(z)$$

At Cosmic Noon ($z \sim 2$), dust attenuation is severe ($A_{\rm UV} \approx 1.5 - 2.0\,\mathrm{mag}$), meaning that between $75\%$ and $85\%$ of the total ultraviolet star formation energy is absorbed by dust.
The total star formation rate density is obtained by combining dust-corrected UV observations with far-infrared and sub-millimeter measurements (Herschel, Spitzer, and ALMA).

$$\rho_{\rm SFR, tot}(z) = \rho_{\rm SFR, UV}(z) + \rho_{\rm SFR, IR}(z)$$

### Step 3 - Conversion from Luminosity to Star Formation Rate
Because rest-frame ultraviolet continuum emission ($\sim 1500\,$\AA) is dominated by short-lived OB stars with lifetimes $\tau_{\rm OB} \le 10^8\,\mathrm{yr}$, the UV emission tracks the instantaneous star formation rate.
Assuming a universal stellar initial mass function (IMF), the Kennicutt (1998) relation yields.

$$\rho_{\rm SFR}(z) = \mathcal{K}_{\rm UV} \, \rho_{\rm UV, corr}(z)$$

where the conversion factor for a standard Salpeter IMF ($0.1 - 100\,M_\odot$, power-law index $-2.35$) is.

$$\mathcal{K}_{\rm UV} = 1.15 \times 10^{-28} \, \frac{M_\odot \, \mathrm{yr}^{-1}}{\mathrm{erg \, s^{-1} \, Hz^{-1}}}$$

(For a Chabrier 2003 or Kroupa 2001 IMF, $\mathcal{K}_{\rm UV}$ is reduced by a factor of $0.63$ or $-0.24\,\mathrm{dex}$ due to fewer low-mass stars).

---

## 3. Unbroken Mathematical Derivation - Cosmic Stellar Mass Density Growth

The total comoving stellar mass density accumulated in galaxies by redshift $z$, denoted $\rho_*(z)$, is the cumulative time integral of the past star formation rate density, corrected for mass returned to the interstellar medium.

$$\boxed{\rho_*(z) = (1 - R) \int_z^\infty \rho_{\rm SFR}(z') \, \left| \frac{dt}{dz'} \right| \, dz' = (1 - R) \int_z^\infty \frac{\rho_{\rm SFR}(z')}{(1+z') H(z')} \, dz'}$$

### The Components of the Integral
1. **The Stellar Return Fraction ($R$)** - As stellar populations evolve, massive stars die as supernovae and intermediate-mass stars shed their envelopes as planetary nebulae, returning enriched gas to the ISM.
   For a Chabrier IMF.
   $$R \approx 0.41$$
   meaning $41\%$ of the formed stellar mass is recycled into gas, while $59\%$ remains locked in long-lived low-mass stars and compact remnants.
2. **Cosmological Time Derivative ($dt/dz$)** - In a standard flat $\Lambda$CDM universe.
   $$H(z) = H_0 \sqrt{\Omega_{m,0}(1+z)^3 + \Omega_{\Lambda,0}}$$
   $$dt = -\frac{dz}{(1+z) H(z)}$$
3. **Present-Day Stellar Density** - Integrating from $z = \infty$ down to $z = 0$.
   $$\rho_*(z=0) \approx (4.5 \pm 0.5) \times 10^8 \, M_\odot \, \mathrm{Mpc}^{-3}$$
   This value matches the directly measured integral of the local SDSS/GAMA stellar mass function, verifying the cosmic consistency between instantaneous star formation and integrated relic mass.

---

## 4. Analytic Parameterization (Madau & Dickinson 2014)

Madau & Dickinson (2014) parameterized the cosmic star formation history by a smooth double power law.

$$\boxed{\rho_{\rm SFR}(z) = 0.015 \, \frac{(1+z)^{2.7}}{1 + \left( \frac{1+z}{2.9} \right)^{5.6}} \, M_\odot \, \mathrm{yr}^{-1} \, \mathrm{Mpc}^{-3}}$$

### Key Physical Regimes
- **The Cosmic Noon Peak ($z \approx 1.9$)**
  At $z_{\rm peak} \approx 1.9$ (lookback time $\approx 10.3\,\mathrm{Gyr}$), the cosmic star formation rate reaches its maximum.
  $$\rho_{\rm SFR}(z \approx 1.9) \approx 0.13 \, M_\odot \, \mathrm{yr}^{-1} \, \mathrm{Mpc}^{-3}$$
  This is an order of magnitude higher than the present-day value ($\rho_{\rm SFR}(z=0) \approx 0.015\,M_\odot\,\mathrm{yr}^{-1}\,\mathrm{Mpc}^{-3}$).
- **The High-Redshift Rise ($z \sim 8 \to 2$)**
  In the early universe, $\rho_{\rm SFR}(z) \propto (1+z)^{-2.9}$.
  Driven by the rapid hierarchical growth of dark matter halos and efficient cold gas stream accretion along cosmic web filaments into dark matter potential wells.
- **The Low-Redshift Decline ($z \sim 2 \to 0$)**
  After Cosmic Noon, $\rho_{\rm SFR}(z) \propto (1+z)^{2.7}$.
  Driven by the virial shock heating of gas in massive halos ($M_{\rm halo} \ge 10^{12} M_\odot$), which shuts off cold accretion, compounded by quasar/radio AGN feedback and the exhaustion of cold interstellar gas reservoirs.

---

## 5. Blackboard Observational Blueprint

When sketching the Madau plot on the blackboard.

```text
       log10(rho_SFR / [M_sun yr^-1 Mpc^-3])
         ^
    -0.5 |
         |                   * * * (Cosmic Noon Peak, z ~ 1.9)
    -1.0 |                 *       *
         |               *           *    ..... Total (Dust Corrected)
    -1.5 |             *               *
         |           *                   *  - - - Uncorrected UV
    -2.0 |         *
         +=========+=========+=========+=========+=========+
         0         1         2         3         4         5   Redshift z
       [Today]            [Cosmic Noon]           [Reionization]
         0        7.8      10.3      11.6      12.2      12.6  Lookback Time (Gyr)
```

### Key Blackboard Features
- **Horizontal Axis** - Cosmological redshift $z$ from $0$ to $6$ (or $8$), with a companion top axis showing lookback time in $\mathrm{Gyr}$
- **Vertical Axis** - Comoving star formation rate density $\log_{10} \rho_{\rm SFR}$ in units of $M_\odot\,\mathrm{yr}^{-1}\,\mathrm{Mpc}^{-3}$ from $-2.5$ to $-0.5$
- **Total Curve (Dust Corrected)** - Solid line starting at $-1.8$ at $z=0$, rising steeply by $\sim 1\,\mathrm{dex}$ to peak at $-0.9$ at $z \approx 1.9$, then declining gradually toward higher $z$
- **Uncorrected UV Curve** - Dashed line showing the severe dust gap at $z \sim 1 - 3$, where the uncorrected UV is lower by a factor of $3$ to $5$
- **Annotate Turnover Physics** - Write "Cold gas accretion & halo collapse" on the high-$z$ rise; write "Halo shock heating & AGN feedback" on the low-$z$ decline

---

## 6. Textbook and Course Citations

- **Prof. Alessandro Pizzella Course Dispensa**
  - File - `dispense_LF1_1_eng-1.pdf`
  - Chapter 3, Section 3.3 "The Cosmic Star Formation History", pages 21-23 (UV luminosity function integration, Kennicutt calibration, dust corrections, and cosmic noon).
- **Student Synthesis Document**
  - File - `Astrophysics_of_Galaxies.tex`
  - Section 5.3 "The Madau-Dickinson Plot", pages 23-25 (detailed derivation, time integral for stellar mass density, return fraction $R$).
- **Mo, van den Bosch & White (2010), *Galaxy Formation and Evolution***
  - File - `Houjun Mo, Frank van den Bosch, Simon White - Galaxy Formation and Evolution (2010, Cambridge University Press) - libgen.li.pdf`
  - Chapter 2, Section 2.6 "The Cosmic Star Formation History", pages 100-103.
- **Primary Literature Reference**
  - Madau, P., & Dickinson, M. 2014, ARA&A, 52, 415.
  - Kennicutt, R. C. 1998, ARA&A, 36, 189.

---

## 7. See Also

- [UV luminosity function](UV%20luminosity%20function.html)
- [Cosmic star formation history](Cosmic%20star%20formation%20history.html)
- [UV SFR tracer](UV%20SFR%20tracer.html)
- [Schmidt-Kennicutt law](Schmidt-Kennicutt%20law.html)
- [Color bimodality of galaxies](Color%20bimodality%20of%20galaxies.html)
- [Cosmic stellar mass density growth](Cosmic%20stellar%20mass%20density%20growth.html)
- [High-z galaxies with JWST](High-z%20galaxies%20with%20JWST.html)
- [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html)

---

## 8. Astrophysics of Galaxies Figures and Slides (Prof. Alessandro Pizzella)

![madau2014_SFR_history.png](../../assets/images/madau2014_SFR_history.png)
*The Cosmic Star Formation History (Madau Plot) - SFR density rho_SFR(z) from Madau & Dickinson (2014).*

![bouwens2015_SFR_density.png](../../assets/images/bouwens2015_SFR_density.png)
*High-redshift cosmic SFR density evolution up to z ~ 10 (Bouwens et al. 2015).*

![madau2014_stellar_mass.png](../../assets/images/madau2014_stellar_mass.png)
*Cosmic stellar mass density growth rho_*(z) obtained by integrating the Madau curve.*

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Deep-field%20surveys.html" class="backlink-item">Deep-field surveys</a></li>
    <li class="backlink-item-wrap"><a href="Protocluster%20detection%20techniques.html" class="backlink-item">Protocluster detection techniques</a></li>
    <li class="backlink-item-wrap"><a href="Schmidt-Kennicutt%20law.html" class="backlink-item">Schmidt-Kennicutt law</a></li>
    <li class="backlink-item-wrap"><a href="UV%20luminosity%20function.html" class="backlink-item">UV luminosity function</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
  </ul>
</div>

