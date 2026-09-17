---
layout: "default"
title: "Integrals of the Schechter function"
---
{% raw %}
# integrals of the schechter function

up: [Pablo_02_Statistical_properties_of_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html) · [Schechter function](./Schechter%20function.html)

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

- the LF: [Schechter function](./Schechter%20function.html), [Schechter function in magnitudes](./Schechter%20function%20in%20magnitudes.html)
- integrating over $z$ for cosmic histories: [Cosmic star formation history](./Cosmic%20star%20formation%20history.html), [Cosmic stellar mass density growth](./Cosmic%20stellar%20mass%20density%20growth.html)
- mass version (gives $\rho_*$): [Stellar mass function](./Stellar%20mass%20function.html)

## key references

- Schechter 1976
- Felten 1977 (formal statistics of LFs)

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![gal_lf1-11.png](../../assets/images/gal_lf1-11.png)
*Total galaxy number density integral: n_tot = int_0^infinity Phi(L) dL = Phi* * Gamma(alpha + 1).*

![gal_lf1-12.png](../../assets/images/gal_lf1-12.png)
*Convergence condition for total number: alpha > -1 (diverges for alpha <= -1 at faint end).*

![gal_lf1-13.png](../../assets/images/gal_lf1-13.png)
*Total luminosity density integral: j_tot = int_0^infinity L * Phi(L) dL = Phi* * L* * Gamma(alpha + 2).*

![gal_lf1-14.png](../../assets/images/gal_lf1-14.png)
*Convergence condition for total luminosity: alpha > -2 (well-behaved since observed alpha ~ -1.1 to -1.3).*

![gal_lf1-15.png](../../assets/images/gal_lf1-15.png)
*Fraction of total luminosity emitted by galaxies brighter than L*: Gamma(alpha + 2, 1) / Gamma(alpha + 2).*

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
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Cosmic%20star%20formation%20history.html" class="backlink-item">Cosmic star formation history</a></li>
    <li class="backlink-item-wrap"><a href="./Cosmic%20stellar%20mass%20density%20growth.html" class="backlink-item">Cosmic stellar mass density growth</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html" class="backlink-item">Pablo_02_Statistical_properties_of_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Press-Schechter%20formalism.html" class="backlink-item">Press-Schechter formalism</a></li>
    <li class="backlink-item-wrap"><a href="./Schechter%20function.html" class="backlink-item">Schechter function</a></li>
    <li class="backlink-item-wrap"><a href="./Schechter%20function%20in%20magnitudes.html" class="backlink-item">Schechter function in magnitudes</a></li>
  </ul>
</div>
