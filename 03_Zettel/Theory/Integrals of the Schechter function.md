---
layout: "default"
title: "Integrals of the Schechter function"
---
# integrals of the schechter function

Parent [[Pablo_02_Statistical_properties_of_galaxies]] · [[Schechter function]]

## Why This Note Exists

Every cosmologically fundamental quantity derived from a galaxy luminosity function (total galaxy count, cosmic luminosity density, ionizing photon budget) is a moment integral of the Schechter function.

$$\Phi(L)\, dL = \frac{\Phi^*}{L^*} \left(\frac{L}{L^*}\right)^\alpha \exp\!\left(-\frac{L}{L^*}\right) dL$$

All such integrals reduce analytically to the complete and incomplete **Euler Gamma functions**.

$$\Gamma(s) = \int_0^\infty t^{s-1} e^{-t}\, dt \qquad (\text{for } s > 0)$$

$$\Gamma(s, x) = \int_x^\infty t^{s-1} e^{-t}\, dt \qquad (\text{upper incomplete Gamma function})$$

---

## Unbroken Mathematical Derivations

### Substitution Setup
We introduce the dimensionless luminosity variable.
$$t \equiv \frac{L}{L^*} \implies L = L^* t \implies dL = L^* dt$$

Substitute $L$ and $dL$ into the differential number element.
$$\Phi(L)\, dL = \frac{\Phi^*}{L^*} t^\alpha e^{-t} (L^* dt) = \Phi^* t^\alpha e^{-t} dt$$

---

### Derivation 1 - Total Number Density and Divergence Mechanics

The cumulative number density of galaxies brighter than a threshold luminosity $L_{\min}$ is.
$$n(>L_{\min}) = \int_{L_{\min}}^\infty \Phi(L)\, dL = \Phi^* \int_{L_{\min}/L^*}^\infty t^\alpha e^{-t}\, dt$$

To express this in standard Gamma function form, match the power of $t$.
$$t^\alpha = t^{(\alpha + 1) - 1} \implies s = \alpha + 1$$

Therefore.
$$\boxed{n(>L_{\min}) = \Phi^* \Gamma\left(\alpha + 1, \frac{L_{\min}}{L^*}\right)}$$

#### Mathematical Proof of Faint-End Divergence
Consider the total number density over all luminosities by taking the limit $L_{\min} \to 0$.
$$n_{\rm tot} = \lim_{L_{\min} \to 0} n(>L_{\min}) = \Phi^* \int_0^\infty t^\alpha e^{-t}\, dt = \Phi^* \Gamma(\alpha + 1)$$

Near the lower limit $t \to 0$, we perform a Taylor expansion of the exponential term.
$$e^{-t} = 1 - t + \frac{t^2}{2!} - \cdots$$

The integral near $t = 0$ behaves as.
$$\int_\epsilon^1 t^\alpha e^{-t}\, dt \approx \int_\epsilon^1 t^\alpha (1 - t)\, dt \approx \int_\epsilon^1 t^\alpha dt$$

Evaluating this elementary integral for $\alpha \neq -1$.
$$\int_\epsilon^1 t^\alpha dt = \left[ \frac{t^{\alpha + 1}}{\alpha + 1} \right]_\epsilon^1 = \frac{1 - \epsilon^{\alpha + 1}}{\alpha + 1}$$

- **Case $\alpha > -1$ ($\alpha + 1 > 0$) -**
  As $\epsilon \to 0$, $\epsilon^{\alpha + 1} \to 0$. The integral converges to $\frac{1}{\alpha + 1}$.
- **Case $\alpha < -1$ ($\alpha + 1 < 0$) -**
  Let $p = -(\alpha + 1) > 0$. Then.
  $$\epsilon^{\alpha + 1} = \frac{1}{\epsilon^p} \xrightarrow{\epsilon \to 0} +\infty$$
  The integral strictly **diverges to $+\infty$**.
- **Case $\alpha = -1$ -**
  $$\int_\epsilon^1 \frac{1}{t}\, dt = [\ln t]_\epsilon^1 = -\ln \epsilon \xrightarrow{\epsilon \to 0} +\infty$$
  The integral **logarithmically diverges to $+\infty$**.

**Physical Conclusion on the Blackboard -**
Since the observed faint-end slope in optical bands is $\alpha \approx -1.1$ to $-1.3 \le -1$, the total mathematical number of galaxies per unit volume is infinite unless cut off by physical processes (photoevaporation of gas in low-mass halos during reionization, or lower mass limit of star formation).

---

### Derivation 2 - Total Luminosity Density and Convergence Proof

The cosmic luminosity density $j$ is the first luminosity moment of the luminosity function.
$$j = \int_0^\infty L\, \Phi(L)\, dL$$

Substitute $L = L^* t$ and $\Phi(L) dL = \Phi^* t^\alpha e^{-t} dt$.
$$j = \int_0^\infty (L^* t) \left( \Phi^* t^\alpha e^{-t} dt \right) = \Phi^* L^* \int_0^\infty t^{\alpha + 1} e^{-t}\, dt$$

Match the power of $t$ to the Euler Gamma function definition.
$$t^{\alpha + 1} = t^{(\alpha + 2) - 1} \implies s = \alpha + 2$$

Therefore.
$$\boxed{j_{\rm tot} = \Phi^* L^* \Gamma(\alpha + 2)}$$

#### Mathematical Proof of Convergence
Near $t = 0$, $e^{-t} \approx 1$, so.
$$\int_0^1 t^{\alpha + 1} e^{-t}\, dt \approx \int_0^1 t^{\alpha + 1} dt = \left[ \frac{t^{\alpha + 2}}{\alpha + 2} \right]_0^1$$

This converges if and only if.
$$\alpha + 2 > 0 \iff \alpha > -2$$

At the upper limit $t \to \infty$, the exponential cutoff $e^{-t}$ suppresses any power-law growth, ensuring convergence for all finite $\alpha$.

Since all observed faint-end slopes satisfy $\alpha \approx -1.2 > -2$.
$$\boxed{\text{Total Luminosity Density } j_{\rm tot} \text{ ALWAYS CONVERGES!}}$$

#### Numerical Example (Canonical Optical Values)
For $\alpha = -1.25$.
$$\alpha + 2 = 0.75 \implies \Gamma(0.75) \approx 1.2254$$
$$j_{\rm tot} = 1.2254\, \Phi^* L^*$$
Galaxies near the knee $L \sim L^*$ dominate the cosmic luminosity budget!

---

### Derivation 3 - Luminosity Fraction Above $L^*$

The luminosity emitted exclusively by bright galaxies ($L > L^*$, $t > 1$) is.
$$j(>L^*) = \Phi^* L^* \int_1^\infty t^{\alpha + 1} e^{-t}\, dt = \Phi^* L^* \Gamma(\alpha + 2, 1)$$

The fraction of total light emitted by galaxies with $L > L^*$ is.
$$\frac{j(>L^*)}{j_{\rm tot}} = \frac{\Gamma(\alpha + 2, 1)}{\Gamma(\alpha + 2)}$$

For $\alpha = -1.25$.
$$\Gamma(0.75, 1) \approx 0.3953 \implies \frac{0.3953}{1.2254} \approx 0.3226 \quad (32.3\%)$$
Thus, approximately one-third of the entire starlight in the universe is produced by galaxies brighter than $L^*$.

---

## Textbook & Course References

- **Mo, van den Bosch & White (2010), *Galaxy Formation and Evolution***.
  - File `Houjun Mo, Frank van den Bosch, Simon White - Galaxy Formation and Evolution (2010, Cambridge University Press) - libgen.li.pdf`
  - Chapter 2, Section 2.4.1 "Luminosity Function", pp. 83-86 (analytic integrals, $\Gamma$ function conversions).
- **Binney & Merrifield (1998), *Galactic Astronomy***.
  - File `Galactic Astronomy (James Binney Michael Merrifield) (z-library.sk, 1lib.sk, z-lib.sk).pdf`
  - Chapter 4, Section 4.5 "The Luminosity Function of Galaxies", pp. 234-236 (integral expressions and divergence criteria).
- **Prof. Alessandro Pizzella Course Dispensa**.
  - File `dispense_LF1_1_eng-1.pdf`
  - Chapter 1, Section 1.2, pp. 4-5 (integrals of Schechter function, conditions of convergence).
- **Student Synthesis Document**.
  - File `Astrophysics_of_Galaxies.tex`
  - Part I "The Luminosity Function", Section 1.2, pp. 4-5.
- **Master Derivations Guide**.
  - Master Derivations and Mathematical Rigor

---

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![gal_lf1-11.png](../../assets/images/gal_lf1-11.png)
*Total galaxy number density integral - n_tot = int_0^infinity Phi(L) dL = Phi* * Gamma(alpha + 1).*

![gal_lf1-12.png](../../assets/images/gal_lf1-12.png)
*Convergence condition for total number - alpha > -1 (diverges for alpha <= -1 at faint end).*

![gal_lf1-13.png](../../assets/images/gal_lf1-13.png)
*Total luminosity density integral - j_tot = int_0^infinity L * Phi(L) dL = Phi* * L* * Gamma(alpha + 2).*

![gal_lf1-14.png](../../assets/images/gal_lf1-14.png)
*Convergence condition for total luminosity - alpha > -2 (well-behaved since observed alpha ~ -1.1 to -1.3).*

![gal_lf1-15.png](../../assets/images/gal_lf1-15.png)
*Fraction of total luminosity emitted by galaxies brighter than L* - Gamma(alpha + 2, 1) / Gamma(alpha + 2).*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_lf1-31.png](../../assets/images/gal_lf1-31.png)

![gal_lf1-32.png](../../assets/images/gal_lf1-32.png)

![gal_lf1-33.png](../../assets/images/gal_lf1-33.png)

![gal_lf1-34.png](../../assets/images/gal_lf1-34.png)

![gal_lf1-35.png](../../assets/images/gal_lf1-35.png)

![gal_lf1-36.png](../../assets/images/gal_lf1-36.png)

![gal_lf1-37.png](../../assets/images/gal_lf1-37.png)

![gal_lf1-38.png](../../assets/images/gal_lf1-38.png)

![gal_lf1-39.png](../../assets/images/gal_lf1-39.png)

![gal_lf1-40.png](../../assets/images/gal_lf1-40.png)



## Linked References

- [[Cosmic star formation history]]
- [[Cosmic stellar mass density growth]]
- [[Double power-law modified Schechter]]
- [[Luminosity function definition]]
- [[Press-Schechter formalism]]
- [[Schechter function in magnitudes]]
- [[UV luminosity function]]
- [[Astrophysics_of_Galaxies_MOC]]
- [[Observational_Cosmology_MOC]]


