---
layout: "default"
title: "Sersic profile"
---
## The Sérsic Profile Formula

The **Sérsic (1963, 1968)** profile is the universal empirical description of galaxy radial surface brightness.

$$\boxed{I(R) = I_e \exp\left\{ -b_n \left[ \left(\frac{R}{R_e}\right)^{1/n} - 1 \right] \right\} = I_e e^{b_n} \exp\left[ -b_n \left(\frac{R}{R_e}\right)^{1/n} \right]}$$

The physical parameters.
- $R_e$ - **Effective radius** (half-light radius), enclosing $50\%$ of the total projected light.
- $I_e$ - Surface brightness at the effective radius, $I(R_e) = I_e$.
- $n$ - **Sérsic index** (shape parameter). High $n$ produces a steep central cusp and extended outer wings; low $n$ produces a flat core and sharp truncation.
- $b_n$ - Dimensionless constant uniquely determined by $n$ such that $R_e$ encloses half the total luminosity.

---

## Unbroken Mathematical Derivation - Total Integrated Luminosity

Assuming circular symmetry on the sky plane, the total luminosity $L$ is obtained by integrating over annular rings.

$$L = \int_0^\infty 2\pi R\, I(R)\, dR = 2\pi I_e e^{b_n} \int_0^\infty R \exp\left[ -b_n \left(\frac{R}{R_e}\right)^{1/n} \right] dR$$

### Step-by-Step Substitution
Define the dimensionless substitution variable $x$.
$$x \equiv b_n \left(\frac{R}{R_e}\right)^{1/n}$$

Invert for $R$ in terms of $x$.
$$\left(\frac{R}{R_e}\right)^{1/n} = \frac{x}{b_n} \implies \frac{R}{R_e} = \left(\frac{x}{b_n}\right)^n \implies R(x) = R_e b_n^{-n} x^n$$

Differentiate $R(x)$ with respect to $x$.
$$dR = R_e b_n^{-n} \cdot n x^{n-1} dx$$

Now construct the differential area product $R dR$.
$$R\, dR = \left( R_e b_n^{-n} x^n \right) \cdot \left( R_e b_n^{-n} n x^{n-1} dx \right) = R_e^2\, n\, b_n^{-2n} x^{2n - 1} dx$$

Transform the integration limits.
- When $R = 0 \implies x = 0$
- When $R \to \infty \implies x \to \infty$

### Evaluating the Integral
Substitute $R dR$ and the exponential into the luminosity integral.

$$L = 2\pi I_e e^{b_n} \int_0^\infty \left( R_e^2\, n\, b_n^{-2n} x^{2n - 1} dx \right) e^{-x}$$

Pull all constants outside the integral.

$$L = 2\pi n\, e^{b_n} R_e^2 I_e b_n^{-2n} \int_0^\infty x^{2n - 1} e^{-x}\, dx$$

Recognize that the integral is exactly the definition of the Euler Gamma function $\Gamma(s) = \int_0^\infty x^{s-1} e^{-x} dx$ with $s = 2n$.

$$\int_0^\infty x^{2n - 1} e^{-x}\, dx = \Gamma(2n)$$

Therefore, the exact total luminosity is.

$$\boxed{L = \frac{2\pi n\, e^{b_n} R_e^2 I_e}{b_n^{2n}} \Gamma(2n)}$$

---

## Determination of $b_n$ from Half-Light Condition

By definition of effective radius $R_e$, the luminosity enclosed within $R_e$ must equal half the total luminosity.

$$L(<R_e) = \frac{1}{2} L$$

Integrating from $R = 0$ to $R = R_e$ corresponds to integrating $x$ from $0$ to $b_n$.

$$L(<R_e) = \frac{2\pi n\, e^{b_n} R_e^2 I_e}{b_n^{2n}} \int_0^{b_n} x^{2n - 1} e^{-x}\, dx = \frac{2\pi n\, e^{b_n} R_e^2 I_e}{b_n^{2n}} \gamma(2n, b_n)$$

where $\gamma(s, x) = \int_0^x t^{s-1} e^{-t} dt$ is the lower incomplete Gamma function.

Equating $L(<R_e) = \frac{1}{2} L$ yields the condition for $b_n$.

$$\boxed{\gamma(2n, b_n) = \frac{1}{2} \Gamma(2n)}$$

### Numerical Asymptotics (Ciotti & Bertin 1999)
For $0.5 \le n \le 10$, $b_n$ is well approximated by.
$$b_n \approx 2n - \frac{1}{3} + \frac{0.0079}{n}$$

- **Exponential Disk ($n = 1$) -**
  $b_1 \approx 1.6783$. Total luminosity $L = \frac{2\pi(1) e^{1.6783} R_e^2 I_e}{(1.6783)^2} \Gamma(2) = 11.95 R_e^2 I_e = 2\pi I_0 h_R^2$ with $R_e = 1.678 h_R$.
- **de Vaucouleurs Elliptical ($n = 4$) -**
  $b_4 \approx 7.6692$. Total luminosity $L = \frac{8\pi e^{7.6692} R_e^2 I_e}{(7.6692)^8} \Gamma(8) = 7.215 \pi R_e^2 I_e$.

---

## Mean Surface Brightness Within $R_e$

The average surface brightness within the effective radius $\langle I \rangle_e$ is.

$$\langle I \rangle_e \equiv \frac{L(<R_e)}{\pi R_e^2} = \frac{L / 2}{\pi R_e^2} = \frac{n\, e^{b_n} I_e}{b_n^{2n}} \Gamma(2n)$$

For a de Vaucouleurs profile ($n=4$) - $\langle I \rangle_e \approx 3.607 I_e$, meaning $\langle\mu\rangle_e \approx \mu_e - 1.39$ mag/arcsec$^2$.

---

## Textbook & Course References

- **Mo, van den Bosch & White (2010), *Galaxy Formation and Evolution***.
  - File `Houjun Mo, Frank van den Bosch, Simon White - Galaxy Formation and Evolution (2010, Cambridge University Press) - libgen.li.pdf`
  - Chapter 2, Section 2.3.2 "Surface Photometry", pp. 64-70 (eq. 2.22, de Vaucouleurs vs exponential profiles).
- **Binney & Merrifield (1998), *Galactic Astronomy***.
  - File `Galactic Astronomy (James Binney Michael Merrifield) (z-library.sk, 1lib.sk, z-lib.sk).pdf`
  - Chapter 4, Section 4.3 "Photometry of Early-Type Galaxies", pp. 194-204 (Sérsic profile properties, $R^{1/4}$ fits).
- **Peter Schneider (2015), *Extragalactic Astronomy and Cosmology***.
  - File `Extrag_Astro_144-171.pdf`
  - Chapter 3, Section 3.4.1 "Surface brightness profiles", pp. 144-155.
- **Prof. Alessandro Pizzella Course Slides**.
  - File `Lecture2_EllipticalBulges.pdf` (slides `gal_ell-01..20`).
- **Master Derivations Guide**.
  - Master Derivations and Mathematical Rigor

---

## see also

- [[De Vaucouleurs and exponential profiles]]
- [[Hubble morphological sequence]]
- [[CAS galaxy classification]]
- [[Galaxy size-luminosity relation]]
- [[Petrosian radius]]
- [[Aperture photometry]]
- [[PSF photometry]]
- [[Astrophysics_of_Galaxies_MOC]]

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![gal_ell-01.png](../../assets/images/gal_ell-01.png)
*Lecture 2 - Ellipticals and Bulges (Prof. Alessandro Pizzella).*

![gal_ell-02.png](../../assets/images/gal_ell-02.png)
*Jose Luis Sersic (1963, 1968) generalized radial surface brightness profile.*

![gal_ell-03.png](../../assets/images/gal_ell-03.png)
*Formula - I(R) = I_e * exp[ -b_n * ( (R / R_e)^(1/n) - 1 ) ].*

![gal_ell-04.png](../../assets/images/gal_ell-04.png)
*Effective radius R_e (half-light radius) and effective intensity I_e.*

![gal_ell-05.png](../../assets/images/gal_ell-05.png)
*The b_n constant - approximation b_n ~ 2n - 1/3 + 0.0079/n for 0.5 < n < 10.*

![gal_ell-06.png](../../assets/images/gal_ell-06.png)
*Sersic index n as structural parameter - n = 1 (exponential disk), n = 4 (de Vaucouleurs elliptical).*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_ell-07.png](../../assets/images/gal_ell-07.png)

![gal_ell-08.png](../../assets/images/gal_ell-08.png)

![gal_ell-09.png](../../assets/images/gal_ell-09.png)

![gal_ell-10.png](../../assets/images/gal_ell-10.png)

![gal_ell-11.png](../../assets/images/gal_ell-11.png)

![gal_ell-12.png](../../assets/images/gal_ell-12.png)

![gal_ell-13.png](../../assets/images/gal_ell-13.png)

![gal_ell-14.png](../../assets/images/gal_ell-14.png)

![gal_ell-15.png](../../assets/images/gal_ell-15.png)

![gal_ell-16.png](../../assets/images/gal_ell-16.png)

![gal_ell-17.png](../../assets/images/gal_ell-17.png)

![gal_ell-18.png](../../assets/images/gal_ell-18.png)

![gal_ell-19.png](../../assets/images/gal_ell-19.png)

![gal_ell-20.png](../../assets/images/gal_ell-20.png)



## Linked References

- [[CAS galaxy classification]]
- [[De Vaucouleurs and exponential profiles]]
- [[Galaxy morphology vs physical properties]]
- [[Hubble morphological sequence]]
- [[Kormendy relation]]
- [[Petrosian radius]]
- [[Astrophysics_of_Galaxies_MOC]]


