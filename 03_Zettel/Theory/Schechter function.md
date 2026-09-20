---
layout: "default"
title: "Schechter function"
---
# schechter function

Parent [[Pablo_02_Statistical_properties_of_galaxies]] · [[Luminosity function definition]]

## The Parametric Form

Paul Schechter (1976, ApJ 203, 297) proposed an analytic parametrization of the galaxy luminosity function.

$$\boxed{\Phi(L)\, dL = \frac{\Phi^*}{L^*} \left(\frac{L}{L^*}\right)^\alpha \exp\!\left(-\frac{L}{L^*}\right) dL}$$

The three parameters and their physical dimensions.
- $\Phi^*$ - Normalization constant representing the characteristic number density of galaxies per unit volume (units - $\mathrm{Mpc}^{-3}$ or $h^3\,\mathrm{Mpc}^{-3}$).
- $L^*$ - Characteristic luminosity (the "knee" of the distribution), dividing the faint power-law regime from the exponential cutoff.
- $\alpha$ - Faint-end slope parameter (dimensionless). For typical optical bands in the local universe, $\alpha \approx -1.1$ to $-1.3$.

---

## Rigorous Derivation - Transformation to Absolute Magnitudes

To express the Schechter function in terms of absolute magnitude $M$, we start from the astronomical definition of magnitude.

$$M - M^* = -2.5 \log_{10}\left(\frac{L}{L^*}\right) \implies \frac{L}{L^*} = 10^{-0.4(M - M^*)}$$

Conserving total galaxy number per unit volume across the differential element.

$$|\Phi(M)\, dM| = |\Phi(L)\, dL| \implies \Phi(M) = \Phi(L) \left|\frac{dL}{dM}\right|$$

Step 1 - Compute the derivative of $L(M) = L^* 10^{-0.4(M - M^*)} = L^* \exp[-0.4 \ln(10)(M - M^*)]$.

$$\frac{dL}{dM} = L^* \cdot (-0.4 \ln 10) \cdot 10^{-0.4(M - M^*)}$$

$$\left|\frac{dL}{dM}\right| = 0.4 \ln(10)\, L^*\, 10^{-0.4(M - M^*)}$$

Step 2 - Substitute $L/L^*$ and $|dL/dM|$ into the Schechter formula.

$$\Phi(M) = \left[ \frac{\Phi^*}{L^*} \left(10^{-0.4(M - M^*)}\right)^\alpha \exp\left(-10^{-0.4(M - M^*)}\right) \right] \times \left[ 0.4 \ln(10)\, L^*\, 10^{-0.4(M - M^*)} \right]$$

Notice that $L^*$ cancels completely.

$$\Phi(M) = 0.4 \ln(10)\, \Phi^* \left(10^{-0.4(M - M^*)}\right)^{\alpha + 1} \exp\left[-10^{-0.4(M - M^*)}\right]$$

Step 3 - Invert the exponent sign using $-(M - M^*) = M^* - M$.

$$\boxed{\Phi(M)\, dM = 0.4 \ln(10)\, \Phi^*\, 10^{0.4(\alpha+1)(M^* - M)} \exp\left[-10^{0.4(M^* - M)}\right] dM}$$

### Asymptotic Slopes on the Magnitude Blackboard
- **Faint End ($M \gg M^*$, $L \ll L^*$) -**
  The exponential term approaches 1 - $\exp[-10^{0.4(M^* - M)}] \to 1$.
  Therefore.
  $$\Phi(M) \approx 0.4 \ln(10)\, \Phi^*\, 10^{0.4(\alpha+1)(M^* - M)}$$
  Taking $\log_{10}$ of both sides.
  $$\log_{10}\Phi(M) = \text{const} + 0.4(\alpha+1)(M^* - M) = \text{const} - 0.4(\alpha+1) M$$
  The logarithmic slope on a plot of $\log_{10}\Phi(M)$ versus $M$ is.
  $$\frac{d\log_{10}\Phi(M)}{dM} = -0.4(\alpha+1)$$
  For a typical slope $\alpha = -1.2$, the slope is $-0.4(-0.2) = +0.08$ (count increases towards fainter magnitudes).
- **Bright End ($M \ll M^*$, $L \gg L^*$) -**
  The double-exponential term dominates - $\exp[-10^{0.4(M^* - M)}]$ plunges sharply to zero, creating an exponential cutoff.

---

## Physical Origin & Halo Mass Function Connection

The Schechter function emerges naturally from the convolution of.
1. The **halo mass function** $dn/dM_h$ (Press-Schechter 1974; Sheth-Tormen 2001), which exhibits a power law at low halo masses and an exponential cutoff at the high-mass end.
   $$\frac{dn}{dM_h} \propto M_h^{-(1 + \gamma)} \exp\left[-\left(\frac{M_h}{M_*}\right)^\delta\right]$$
2. The **stellar-to-halo mass relation** $M_*(M_h)$, which peaks at $M_h \approx 10^{12} M_\odot$ with efficiency $\sim 20\%$ and drops sharply at both lower masses (supernova feedback) and higher masses (virial shock heating and AGN radio-mode feedback).

---

## Textbook & Course References

- **Mo, van den Bosch & White (2010), *Galaxy Formation and Evolution***.
  - File `Houjun Mo, Frank van den Bosch, Simon White - Galaxy Formation and Evolution (2010, Cambridge University Press) - libgen.li.pdf`
  - Chapter 2, Section 2.4.1 "Luminosity Function", pp. 83-86 (analytic form eq. 2.50, SDSS LF parameters).
- **Binney & Merrifield (1998), *Galactic Astronomy***.
  - File `Galactic Astronomy (James Binney Michael Merrifield) (z-library.sk, 1lib.sk, z-lib.sk).pdf`
  - Chapter 4, Section 4.5 "The Luminosity Function of Galaxies", pp. 232-237 (Schechter fit and parameters).
- **Prof. Alessandro Pizzella Course Dispensa**.
  - File `dispense_LF1_1_eng-1.pdf`
  - Chapter 1, Section 1.1-1.2, pp. 1-5 (eq. 1.4, Blanton et al. 2003 fits, $ugriz$ parameters).
- **Student Synthesis Document**.
  - File `Astrophysics_of_Galaxies.tex`
  - Part I "The Luminosity Function", Section 1.2, pp. 4-5 (eqs. 1-2).
- **Master Exam Protocols**.
  - Full mathematical proofs - Master Derivations and Mathematical Rigor
  - Blackboard sketch - Master Observational Graphs and Blackboard Fluency

---

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![blanton2003_LF_rband.png](../../assets/images/blanton2003_LF_rband.png)
*SDSS r-band galaxy luminosity function from Blanton et al. (2003) showing Schechter fit.*

![gal_lf1-06.png](../../assets/images/gal_lf1-06.png)
*Paul Schechter (1976) analytic parameterization of the galaxy luminosity function.*

![gal_lf1-07.png](../../assets/images/gal_lf1-07.png)
*Standard Schechter form - Phi(L) dL = (Phi* / L*) * (L / L*)^alpha * exp(-L / L*) dL.*

![gal_lf1-08.png](../../assets/images/gal_lf1-08.png)
*Physical meaning of parameters - Phi* (normalization), L* (characteristic turnover luminosity), alpha (faint-end slope).*

![gal_lf1-09.png](../../assets/images/gal_lf1-09.png)
*Faint-end power-law behavior for L << L* vs exponential cutoff for L >> L*.*

![gal_lf1-10.png](../../assets/images/gal_lf1-10.png)
*Universal vs environment-dependent Schechter parameters (field vs cluster).*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_lf1-16.png](../../assets/images/gal_lf1-16.png)

![gal_lf1-17.png](../../assets/images/gal_lf1-17.png)

![gal_lf1-18.png](../../assets/images/gal_lf1-18.png)

![gal_lf1-19.png](../../assets/images/gal_lf1-19.png)

![gal_lf1-20.png](../../assets/images/gal_lf1-20.png)

![gal_lf1-21.png](../../assets/images/gal_lf1-21.png)

![gal_lf1-22.png](../../assets/images/gal_lf1-22.png)

![gal_lf1-23.png](../../assets/images/gal_lf1-23.png)

![gal_lf1-24.png](../../assets/images/gal_lf1-24.png)

![gal_lf1-25.png](../../assets/images/gal_lf1-25.png)

![gal_lf1-26.png](../../assets/images/gal_lf1-26.png)

![gal_lf1-27.png](../../assets/images/gal_lf1-27.png)

![gal_lf1-28.png](../../assets/images/gal_lf1-28.png)

![gal_lf1-29.png](../../assets/images/gal_lf1-29.png)

![gal_lf1-30.png](../../assets/images/gal_lf1-30.png)



## Linked References

- [[1Vmax estimator]]
- [[Cosmic star formation history]]
- [[Double power-law modified Schechter]]
- [[Integrals of the Schechter function]]
- [[LF by morphology and SED]]
- [[Luminosity function definition]]
- [[Malmquist bias]]
- [[Press-Schechter formalism]]
- [[Redshift distribution of flux-limited samples]]
- [[Schechter K-band luminosity function]]
- [[Schechter function in magnitudes]]
- [[Stellar mass function]]
- [[UV luminosity function]]
- [[Astrophysics_of_Galaxies_MOC]]
- [[Observational_Cosmology_MOC]]


