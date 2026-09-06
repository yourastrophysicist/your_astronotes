---
layout: default
title: "Integrals of the Schechter function"
---

# integrals of the schechter function

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md) · [Schechter function](../../02_Zettel/Theory/Schechter function.md)

## why this note exists

every cosmologically meaningful number derived from a Schechter LF is a moment integral. they all reduce to the **incomplete gamma function**

$$\Gamma(s, x) = \int_x^\infty t^{s-1} e^{-t}\, dt$$

so it is worth working through them once and remembering the pattern.

## the three useful integrals

substitute $t = L/L^*$, $dt = dL/L^*$. then $\phi(L)\, dL = \phi^* t^\alpha e^{-t}\, dt$.

### 1. total number density (above $L_{\min}$)

$$N_{TOT}(>L_{\min}) = \int_{L_{\min}}^\infty \phi(L)\, dL = \phi^* \int_{x}^\infty t^\alpha e^{-t}\, dt = \phi^* \Gamma(\alpha + 1, x)$$

with $x = L_{\min}/L^*$. for $\alpha < -1$, this *diverges* as $L_{\min} \to 0$, so the answer depends on the faint-end cutoff.

### 2. total luminosity density

$$\rho_L = \int_0^\infty L\, \phi(L)\, dL = \phi^* L^* \int_0^\infty t^{\alpha + 1} e^{-t}\, dt = \phi^* L^* \Gamma(\alpha + 2)$$

this *converges* for any $\alpha > -2$ (true for all observed LFs). this is the cleanest single number you can get from a Schechter fit.

for typical values $\alpha = -1.25$, $\Gamma(0.75) \approx 1.225$, so $\rho_L \approx 1.2\, \phi^* L^*$. the numerical prefactor of a Schechter function is "luminosity density $\approx \phi^* L^*$".

### 3. number above $L^*$

$$N(>L^*) = \phi^* \int_1^\infty t^\alpha e^{-t}\, dt = \phi^* \Gamma(\alpha + 1, 1)$$

for $\alpha = -1.25$, $\Gamma(-0.25, 1) \approx 0.197$, so $N(>L^*) \approx 0.2\, \phi^*$. about 20% of all galaxies are brighter than the knee, in this typical case.

### 4. luminosity above $L^*$

$$\rho_L(>L^*) = \phi^* L^* \int_1^\infty t^{\alpha + 1} e^{-t}\, dt = \phi^* L^* \Gamma(\alpha + 2, 1)$$

with $\alpha = -1.25$, $\Gamma(0.75, 1) \approx 0.395$. so the bright end ($L > L^*$) contributes $\sim 0.4 / 1.225 \approx 32\%$ of the total luminosity, despite being only 20% of the galaxies. this is why the bright end matters even though there are few of them.

## what to remember

- $\rho_L \approx \phi^* L^* \cdot \Gamma(\alpha + 2)$ is the canonical number to take away
- the *number* integral diverges at the faint end if $\alpha < -1$; the *luminosity* integral does not, as long as $\alpha > -2$
- the $L > L^*$ bin contains $\sim 20\%$ of galaxies and $\sim 30\%$ of the total light

## numerical practice

these are all incomplete gamma functions. in python,

```python
from scipy.special import gamma, gammaincc
phi_star, L_star, alpha = 1.6e-2, 1.0, -1.25
rho_L = phi_star * L_star * gamma(alpha + 2)        # convergent
N_above_Lstar = phi_star * gamma(alpha + 1) * gammaincc(alpha + 1, 1.0)  # for alpha > -1, otherwise see scipy docs
```

## connections

- the LF: [Schechter function](../../02_Zettel/Theory/Schechter function.md), [Schechter function in magnitudes](../../02_Zettel/Theory/Schechter function in magnitudes.md)
- integrating over $z$ for cosmic histories: [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.md), [Cosmic stellar mass density growth](../../02_Zettel/Theory/Cosmic stellar mass density growth.md)
- mass version (gives $\rho_*$): [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.md)

## key references

- Schechter 1976
- Felten 1977 (formal statistics of LFs)
