---
layout: "default"
title: "Schechter function in magnitudes"
---
# The Schechter Function in Absolute Magnitudes

## 1. Physical Motivation and Observational Context

In observational cosmology and extragalactic surveys, telescopes measure astronomical flux densities in calibrated photometric bands, which are converted directly into apparent and absolute magnitudes via Pogson's logarithmic relation.
While the physical luminosity function is naturally formulated in terms of bolometric or monochromatic luminosity $L$ (units of solar luminosities $L_\odot$ or $\mathrm{erg\,s^{-1}}$), fitting survey data requires the differential luminosity function in terms of absolute magnitude $M$.

$$\Phi(M) \, dM$$

which represents the comoving number density of galaxies with absolute magnitudes in the interval $[M, M + dM]$.

---

## 2. Unbroken Mathematical Derivation - Transformation of Variables

### Step 1 - The Pogson Logarithmic Relation
By the definition of astronomical absolute magnitudes.

$$M - M^* = -2.5 \log_{10}\left( \frac{L}{L^*} \right)$$

where $M^*$ is the characteristic absolute magnitude corresponding to the transition luminosity $L^*$.

Invert this relationship to express the dimensionless luminosity ratio $L/L^*$ as a function of magnitude.

$$\log_{10}\left( \frac{L}{L^*} \right) = -\frac{M - M^*}{2.5} = -0.4 \, (M - M^*)$$

Exponentiating with base $10$.

$$\frac{L}{L^*} = 10^{-0.4 (M - M^*)}$$

Using the identity $10^u = \exp[u \ln(10)]$, this can be written in natural exponential form.

$$\frac{L}{L^*} = \exp\left[ -0.4 \ln(10) \, (M - M^*) \right]$$

### Step 2 - The Differential Transformation
Differentiate $L$ with respect to $M$.

$$\frac{dL}{dM} = L^* \frac{d}{dM} \left( 10^{-0.4 (M - M^*)} \right) = L^* \left( -0.4 \ln(10) \right) 10^{-0.4 (M - M^*)}$$

Taking the absolute value because number density is positive-definite.

$$\left| \frac{dL}{dM} \right| = 0.4 \ln(10) \, L^* \, 10^{-0.4 (M - M^*)}$$

Evaluating the numerical prefactor.

$$0.4 \ln(10) \approx 0.4 \times 2.302585 \approx 0.921034$$

### Step 3 - Number Conservation Across the Differential Element
Conservation of the total number of galaxies in corresponding bins requires.

$$|\Phi(M) \, dM| = |\Phi(L) \, dL| \implies \Phi(M) = \Phi(L) \left| \frac{dL}{dM} \right|$$

Recall the standard Schechter (1976) luminosity function in luminosity space.

$$\Phi(L) = \frac{\Phi^*}{L^*} \left( \frac{L}{L^*} \right)^\alpha \exp\left( -\frac{L}{L^*} \right)$$

Substitute $\Phi(L)$ and $|dL/dM|$ into the transformation equation.

$$\Phi(M) = \left[ \frac{\Phi^*}{L^*} \left( 10^{-0.4(M - M^*)} \right)^\alpha \exp\left( -10^{-0.4(M - M^*)} \right) \right] \cdot \left[ 0.4 \ln(10) \, L^* \, 10^{-0.4(M - M^*)} \right]$$

Notice that the dimensional characteristic luminosity $L^*$ in the numerator and denominator **cancels out completely** -

$$\Phi(M) = 0.4 \ln(10) \, \Phi^* \left[ 10^{-0.4(M - M^*)} \right]^\alpha \cdot \left[ 10^{-0.4(M - M^*)} \right]^1 \cdot \exp\left( -10^{-0.4(M - M^*)} \right)$$

Combining the powers of the base-$10$ term.

$$\boxed{\Phi(M) \, dM = 0.4 \ln(10) \, \Phi^* \left[ 10^{-0.4(\alpha + 1)(M - M^*)} \right] \exp\left[ -10^{-0.4(M - M^*)} \right] \, dM}$$

Equivalently, with the numerical prefactor.

$$\Phi(M) \, dM \approx 0.921 \, \Phi^* \, 10^{-0.4(\alpha + 1)(M - M^*)} \exp\left[ -10^{-0.4(M - M^*)} \right] \, dM$$

---

## 3. Mathematical Analysis of the Asymptotic Regimes

### 1. The Faint-End Power Law ($M \gg M^*$)
For galaxies substantially fainter than the characteristic magnitude ($M > M^*$, which means numerically larger magnitudes).

$$10^{-0.4(M - M^*)} \to 0$$

The exponential argument vanishes, so the exponential factor approaches unity.

$$\lim_{M - M^* \to +\infty} \exp\left[ -10^{-0.4(M - M^*)} \right] = e^0 = 1$$

The magnitude luminosity function reduces to a pure exponential of magnitude.

$$\Phi(M) \approx 0.4 \ln(10) \, \Phi^* \, 10^{-0.4(\alpha + 1)(M - M^*)}$$

Take the base-$10$ logarithm of both sides.

$$\log_{10} \Phi(M) = \log_{10}\left( 0.4 \ln(10) \Phi^* \right) - 0.4(\alpha + 1)(M - M^*)$$

Differentiate with respect to absolute magnitude $M$.

$$\boxed{\frac{d \log_{10} \Phi(M)}{dM} = -0.4 \, (\alpha + 1)}$$

#### Physical Meaning of the Faint-End Slope on the Exam
- If $\alpha = -1.0$ - $-0.4(-1.0 + 1) = 0$. The luminosity function is **strictly horizontal and flat** in magnitude space.
- In optical galaxy surveys (e.g. SDSS $r$-band where $\alpha \approx -1.15$ to $-1.25$).
  $$-0.4(\alpha + 1) = -0.4(-0.20) = +0.08$$
  The number density $\log_{10}\Phi(M)$ **increases** by $0.08\,\mathrm{dex}$ per magnitude toward fainter galaxies.
- Contrast with the luminosity form - in $\Phi(L) dL$, the power law is $L^\alpha$; in $\Phi(M) dM$, the logarithmic slope is $-0.4(\alpha + 1)$. This difference of $+1$ in exponent arises directly from the Jacobian $|dL/dM| \propto L \propto 10^{-0.4 M}$.

### 2. The Bright-End Truncation ($M \ll M^*$)
For galaxies brighter than $M^*$ ($M < M^*$, e.g. $M - M^* = -2.5\,\mathrm{mag}$).

$$10^{-0.4(M - M^*)} = 10^{-0.4(-2.5)} = 10^{+1.0} = 10$$

The exponential suppression term becomes.

$$\exp(-10) \approx 4.54 \times 10^{-5}$$

For $M - M^* = -5.0\,\mathrm{mag}$, the term becomes $\exp(-100) \approx 3.7 \times 10^{-44}$.
The bright end undergoes an extraordinary **double-exponential drop** -

$$\Phi(M) \propto \exp\left[ -10^{0.4(M^* - M)} \right]$$

This abrupt truncation physically represents the quenching of star formation by AGN quasar/radio feedback and virial shock heating, which prevents gas from cooling in massive dark matter halos ($M_{\rm halo} > 10^{12} M_\odot$).

---

## 4. Characteristic SDSS Schechter Parameters (Blanton et al. 2003)

In the Sloan Digital Sky Survey (SDSS DR2; Blanton et al. 2003, ApJ, 592, 819), the luminosity function was fit across the five standard passbands at $z = 0.1$ (assuming $H_0 = 100\,h\,\mathrm{km\,s^{-1}\,Mpc^{-1}}$).

| Filter Band | $M^* - 5\log_{10}h$ (AB mag) | $\phi^*$ ($10^{-2} h^3\,\mathrm{Mpc}^{-3}$) | Faint-End Slope $\alpha$ | Faint Slope $d\log\Phi/dM$ |
|---|---|---|---|---|
| $u$ (ultraviolet) | $-17.93 \pm 0.04$ | $3.05 \pm 0.11$ | $-0.92 \pm 0.07$ | $-0.032$ |
| $g$ (blue-green) | $-19.39 \pm 0.02$ | $2.18 \pm 0.06$ | $-0.89 \pm 0.03$ | $-0.044$ |
| $r$ (optical red) | $-20.44 \pm 0.02$ | $1.49 \pm 0.04$ | $-1.05 \pm 0.01$ | $+0.020$ |
| $i$ (far red) | $-20.82 \pm 0.02$ | $1.47 \pm 0.04$ | $-1.00 \pm 0.01$ | $0.000$ |
| $z$ (near-infrared) | $-21.18 \pm 0.03$ | $1.35 \pm 0.05$ | $-1.08 \pm 0.02$ | $+0.032$ |

Notice that $M^*$ brightens systematically from $u$ through $z$ by more than $3.2\,\mathrm{mag}$, reflecting the red optical colors of the stellar populations dominating the cosmic luminosity density.

---

## 5. Blackboard Observational Blueprint

When sketching the Schechter function in magnitudes on the blackboard.

```text
       log10(Phi(M) / [Mpc^-3 mag^-1])
         ^
    -1.0 |                                      * * * * * (Faint end slope - -0.4*(alpha+1))
         |                                    *
    -2.0 |                           * * * *
         |                         *
    -3.0 |                       *  <=== Knee at M* (M_r* ~ -20.44 + 5log h)
         |                      *
    -4.0 |                     *
         |                    *   Double-exponential drop.
    -5.0 |                   *    Phi ~ exp(-10^(0.4*(M* - M)))
         +=========+=========+=========+=========+=========+
        -24       -23       -22       -21       -20       -19  Absolute Magnitude M_r
       [Bright]                                           [Faint]
```

### Key Blackboard Features
- **Horizontal Axis** - Absolute magnitude $M$ running from bright on the left ($-24$) to faint on the right ($-18$). Emphasize that in magnitude coordinates, bright is to the left.
- **Vertical Axis** - Logarithmic galaxy space density $\log_{10} \Phi(M)$ in $\mathrm{Mpc^{-3}\,mag^{-1}}$ from $-6.0$ to $-1.0$.
- **The Characteristic Knee** - Mark the sharp bend at $M^*$. Note that $\Phi(M^*) \approx 0.4 \ln(10) \Phi^* / e \approx 0.339 \Phi^*$.
- **Bright End Drop** - Draw the steep downward plunge to the left of $M^*$.
- **Faint End Slope** - Draw the gentle straight line to the right of $M^*$, annotating the slope as $+0.4(-\alpha - 1) = -0.4(\alpha + 1)$.

---

## 6. Textbook and Course Citations

- **Prof. Alessandro Pizzella Course Dispensa**
  - File - `dispense_LF1_1_eng-1.pdf`
  - Chapter 1, Section 1.2 "The Schechter Function", pages 4-5, 18 (complete Pogson derivation, Jacobian transformation, faint-end slope formulas, and SDSS parameter values).
- **Student Synthesis Document**
  - File - `Astrophysics_of_Galaxies.tex`
  - Section 1.2 "Schechter Parameterization", pages 4-6 (step-by-step calculus transformation, bright-end cutoff physics).
- **Mo, van den Bosch & White (2010), *Galaxy Formation and Evolution***
  - File - `Houjun Mo, Frank van den Bosch, Simon White - Galaxy Formation and Evolution (2010, Cambridge University Press) - libgen.li.pdf`
  - Chapter 2, Section 2.4.1 "The Luminosity Function", pages 83-86.
- **Binney & Merrifield (1998), *Galactic Astronomy***
  - File - `Binney J., Merrifield M. - Galactic Astronomy (1998, Princeton).pdf`
  - Chapter 4, Section 4.5 "The Galaxy Luminosity Function", pages 232-237.
- **Primary Literature Reference**
  - Schechter, P. 1976, ApJ, 203, 297.
  - Blanton, M. R., et al. 2003, ApJ, 592, 819.

---

## 7. See Also

- [[Schechter function]]
- [[Integrals of the Schechter function]]
- [[Luminosity function definition]]
- [[Petrosian radius]]
- [[SDSS overview]]
- [[Astrophysics_of_Galaxies_MOC]]

---

## 8. Astrophysics of Galaxies Figures and Slides (Prof. Alessandro Pizzella)

![blanton2003_LF_ugiz.png](../../assets/images/blanton2003_LF_ugiz.png)
*Schechter luminosity functions across SDSS ugriz filter bands from Blanton et al. (2003).*

![gal_lf2-01.png](../../assets/images/gal_lf2-01.png)
*Conversion from luminosity to absolute magnitude using Pogson formula.*

![gal_lf2-02.png](../../assets/images/gal_lf2-02.png)
*Magnitude form - Phi(M) dM = 0.4 ln(10) * Phi* * 10^[0.4(alpha+1)(M* - M)] * exp[-10^[0.4(M* - M)]] dM.*

![gal_lf2-03.png](../../assets/images/gal_lf2-03.png)
*Faint-end slope in magnitudes - d log Phi / dM = 0.4 * (alpha + 1).*

![gal_lf2-04.png](../../assets/images/gal_lf2-04.png)
*Exponential drop at the bright end - M << M*.*

---

## 9. Lecture Slides and Reference Figures (Prof. Alessandro Pizzella)

![gal_lf2-05.png](../../assets/images/gal_lf2-05.png)

![gal_lf2-06.png](../../assets/images/gal_lf2-06.png)

![gal_lf2-07.png](../../assets/images/gal_lf2-07.png)

![gal_lf2-08.png](../../assets/images/gal_lf2-08.png)

![gal_lf2-09.png](../../assets/images/gal_lf2-09.png)

![gal_lf2-10.png](../../assets/images/gal_lf2-10.png)

![gal_lf2-11.png](../../assets/images/gal_lf2-11.png)

![gal_lf2-12.png](../../assets/images/gal_lf2-12.png)



## Linked References

- [[Double power-law modified Schechter]]
- [[Luminosity function definition]]
- [[SDSS overview]]
- [[Schechter K-band luminosity function]]
- [[Astrophysics_of_Galaxies_MOC]]
- [[Observational_Cosmology_MOC]]


