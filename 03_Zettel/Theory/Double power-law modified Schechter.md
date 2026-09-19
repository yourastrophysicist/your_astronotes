---
layout: "default"
title: "Double power-law modified Schechter"
tags: ""
---
# Double Power-Law and Modified Schechter Functions

The galaxy luminosity function (LF) $\Phi(L) \, dL$ describes the number density of galaxies per unit comoving volume with luminosities in the range $[L, L + dL]$. While the classic Schechter (1976) parameterization provides an excellent description of the local optical galaxy population, empirical observations systematically demonstrate that a single Schechter function fails to match galaxy distributions in specific astrophysical regimes. Most notably, high-redshift star-forming galaxies ($z \gtrsim 6 - 10$) observed by the Hubble and James Webb Space Telescopes, Active Galactic Nuclei (AGN) and quasars, and far-infrared luminous starbursts exhibit an excess of bright systems relative to the steep exponential cutoff of the standard Schechter function. In these regimes, the bright end decays as a power law or log-normal distribution rather than an exponential, requiring parameterization via the Double Power-Law (DPL) or the Saunders modified Schechter formulation.

---

## 1. Limitations of the Standard Schechter Function

The standard Schechter function is defined as -
$$\Phi(L) \, dL = \Phi^* \left( rac{L}{L^*} 
ight)^lpha \exp\left( -rac{L}{L^*} 
ight) rac{dL}{L^*}$$
At the faint end ($L \ll L^*$), it behaves as a pure power law $\Phi(L) \propto L^lpha$. At the bright end ($L \gg L^*$), the exponential factor $\exp(-L/L^*)$ produces a rapid exponential cutoff.

### Physical Breakdown Mechanisms
1. **Quasar and AGN Accretion Physics** - AGN luminosities are determined by supermassive black hole accretion rates governed by radiative efficiency and fuel supply rather than dark matter halo viral limits. Quasar luminosity functions systematically exhibit power-law bright ends spanning multiple decades in luminosity.
2. **High-Redshift Starbursts and Inefficient Quenching** - At $z \gtrsim 6$, galaxies inhabit young, rapidly collapsing dark matter halos where virial shock heating and radio-mode AGN feedback have not yet established stable red-and-dead quenching. Stochastic bursty star formation, low dust attenuation, and top-heavy stellar Initial Mass Functions (IMFs) drive a prominent power-law excess at the UV bright end.
3. **Dusty Infrared Galaxies (SMGs / ULIRGs)** - Galaxy mergers trigger extreme central starbursts whose reprocessed dust emission produces a high-luminosity tail that decays far more slowly than an exponential.

---

## 2. Mathematical Formulation of the Double Power-Law (DPL)

The Double Power-Law luminosity function smoothly joins two power-law regimes across a characteristic transition luminosity $L^*$.

### Differential Equation in Luminosity
$$\Phi(L) \, dL = rac{\Phi^*}{\left( rac{L}{L^*} 
ight)^lpha + \left( rac{L}{L^*} 
ight)^eta} rac{dL}{L^*}$$
where -
- $\Phi^*$ is the characteristic number density normalization (units - $	ext{Mpc}^{-3}$).
- $L^*$ is the characteristic turnover luminosity separating the two asymptotic power-law regimes.
- $lpha$ is the faint-end power-law index.
- $eta$ is the bright-end power-law index (with $eta > lpha$).

### Asymptotic Limiting Behavior
1. **Faint-End Limit ($L \ll L^*$)** -
   When $L \ll L^*$, the term $(L/L^*)^lpha$ dominates over $(L/L^*)^eta$ because $lpha < eta$ -
   $$\Phi(L) pprox rac{\Phi^*}{\left( rac{L}{L^*} 
ight)^lpha} rac{1}{L^*} = rac{\Phi^*}{L^*} \left( rac{L}{L^*} 
ight)^{-lpha}$$
   Taking the logarithm -
   $$rac{d\ln \Phi}{d\ln L} pprox -lpha$$
   This represents a pure power-law slope with index $-lpha$.
2. **Bright-End Limit ($L \gg L^*$)** -
   When $L \gg L^*$, the term $(L/L^*)^eta$ dominates completely -
   $$\Phi(L) pprox rac{\Phi^*}{\left( rac{L}{L^*)^eta} 
ight) rac{1}{L^*} = rac{\Phi^*}{L^*} \left( rac{L}{L^*} 
ight)^{-eta}$$
   Taking the logarithm -
   $$rac{d\ln \Phi}{d\ln L} pprox -eta$$
   This demonstrates that the bright end follows a power law with index $-eta$, decaying substantially more slowly than the exponential cutoff $\exp(-L/L^*)$ of the Schechter function.

---

## 3. Mathematical Formulation in Absolute Magnitudes

To compare directly with observational photometric surveys, the DPL is transformed into absolute magnitude space $M$.

### Variable Transformation
Astronomical magnitudes are related to luminosities by Pogson's formula -
$$M - M^* = -2.5 \log_{10}\left( rac{L}{L^*} 
ight)$$
Solving for the luminosity ratio -
$$rac{L}{L^*} = 10^{-0.4 (M - M^*)} = \exp\left[ -0.4 \ln(10) (M - M^*) 
ight]$$
Differentiating both sides with respect to $M$ -
$$rac{dL}{L^*} = -0.4 \ln(10) \, 10^{-0.4(M - M^*)} \, dM$$
Using number conservation $|\Phi(M) \, dM| = |\Phi(L) \, dL|$ -
$$\Phi(M) \, dM = rac{\Phi^*}{\left[ 10^{-0.4(M - M^*)} 
ight]^lpha + \left[ 10^{-0.4(M - M^*)} 
ight]^eta} \cdot 0.4 \ln(10) \, 10^{-0.4(M - M^*)} \, dM$$
Multiplying the numerator and denominator by $10^{0.4(M - M^*)}$ -
$$\Phi(M) \, dM = rac{0.4 \ln(10) \, \Phi^*}{10^{0.4(lpha + 1)(M - M^*)} + 10^{0.4(eta + 1)(M - M^*)}} \, dM$$

### Logarithmic Slopes in Magnitude Space
Taking $\log_{10} \Phi(M)$ and evaluating the asymptotic derivatives -
- At the faint end ($M \gg M^*$, intrinsically faint) -
  $$rac{d\log_{10} \Phi(M)}{dM} 	o -0.4 (lpha + 1)$$
- At the bright end ($M \ll M^*$, intrinsically luminous) -
  $$rac{d\log_{10} \Phi(M)}{dM} 	o -0.4 (eta + 1)$$
In a plot of $\log_{10} \Phi(M)$ versus absolute magnitude $M$, the Double Power-Law appears as two intersecting straight lines connected by a smooth curved transition zone around $M^*$.

---

## 4. Integration and Convergence Conditions

### Total Number Density Integral
The total comoving number density of galaxies is obtained by integrating over all luminosities -
$$n_{
m tot} = \int_0^\infty \Phi(L) \, dL = \Phi^* \int_0^\infty rac{1}{\left(rac{L}{L^*}
ight)^lpha + \left(rac{L}{L^*}
ight)^eta} rac{dL}{L^*}$$
Let $u \equiv L / L^*$, so $du = dL / L^*$ -
$$n_{
m tot} = \Phi^* \int_0^\infty rac{du}{u^lpha + u^eta} = \Phi^* \int_0^\infty rac{u^{-lpha}}{1 + u^{eta - lpha}} \, du$$
Let $t = u^{eta - lpha}$, so $u = t^{1/(eta - lpha)}$ and $du = rac{1}{eta - lpha} t^{rac{1}{eta - lpha} - 1} \, dt$ -
$$n_{
m tot} = rac{\Phi^*}{eta - lpha} \int_0^\infty rac{t^{rac{1 - lpha}{eta - lpha} - 1}}{1 + t} \, dt$$
Using the standard integral definition of the Euler Beta function $	ext{B}(x, y) = \int_0^\infty rac{t^{x-1}}{1 + t} \, dt = rac{\Gamma(x)\Gamma(y)}{\Gamma(x + y)}$ with $x + y = 1$ -
$$n_{
m tot} = rac{\Phi^*}{eta - lpha} \Gamma\left( rac{1 - lpha}{eta - lpha} 
ight) \Gamma\left( 1 - rac{1 - lpha}{eta - lpha} 
ight) = rac{\Phi^*}{eta - lpha} rac{\pi}{\sin\left( \pi rac{1 - lpha}{eta - lpha} 
ight)}$$

### Convergence Criteria
For the integral to converge -
1. At the faint end ($u 	o 0$), the integrand behaves as $u^{-lpha}$. Convergence requires $\int_0 u^{-lpha} du < \infty \implies -lpha + 1 > 0 \implies lpha < 1$.
2. At the bright end ($u 	o \infty$), the integrand behaves as $u^{-eta}$. Convergence requires $\int^\infty u^{-eta} du < \infty \implies -eta + 1 < 0 \implies eta > 1$.
Therefore, mathematical convergence of total galaxy number density strictly demands $lpha < 1 < eta$.

---

## 5. The Saunders Modified Schechter Function

For infrared starburst galaxies observed by the IRAS satellite, Saunders et al. (1990) introduced a modified Schechter function where the exponential bright-end cutoff is replaced by a broader log-normal distribution.

### Mathematical Formulation
$$\Phi(L) \, dL = \Phi^* \left( rac{L}{L^*} 
ight)^{1 - lpha} \exp\left[ -rac{1}{2\sigma^2} \log_{10}^2\left( 1 + rac{L}{L^*} 
ight) 
ight] rac{dL}{L^*}$$
- For low luminosities ($L \ll L^*$), $\log_{10}(1 + L/L^*) pprox rac{L}{L^* \ln 10} 	o 0$. The exponential factor approaches unity, recovering a pure power law $\Phi(L) \propto L^{-lpha}$.
- For high luminosities ($L \gg L^*$), $\log_{10}(1 + L/L^*) pprox \log_{10}(L/L^*)$. The distribution behaves as a Gaussian in logarithmic luminosity (a log-normal tail) -
  $$\Phi(L) \propto \exp\left[ -rac{1}{2\sigma^2} \log_{10}^2\left( rac{L}{L^*} 
ight) 
ight]$$
Because a log-normal function decays far more gradually than an exponential ($\exp(-\log^2 x)$ decays slower than $\exp(-x)$ as $x 	o \infty$), the Saunders function accurately reproduces the high space densities of Ultra-Luminous Infrared Galaxies (ULIRGs).

---

## 6. Observational Graph Literacy and ASCII Blueprints

### Diagram 1 - Comparison of Schechter, Double Power-Law, and Saunders LFs
```text
  log10 Phi(M) [Mpc^-3 mag^-1]
    -1 +----------------------------------------------------------------+
       |                                                                |
    -2 |           Faint End                                            |
       |           (Power Law)                                          |
    -3 |            \                                                   |
       |             \                                                  |
    -4 |              \                  M* (Turnover)                  |
       |               \                   |                            |
    -5 |                \                  v                            |
       |                 \...............                               |
    -6 |                                 ...---===                      |
       |                                    \   .  ==                   |
    -7 |                                     \   .   ==                 |
       |                                      \   .    ==  Double Power-Law (DPL)
    -8 |                                       \   ...     Saunders Log-Normal
       |                                        \          Schechter Exponential
    -9 +-----------------------------------------+----------------------+
      -16         -18         -20         -22    -24         -26       -28
                          Absolute Magnitude M [mag] (Brighter -->)
  Key Features -
  - Schechter (Solid backslash) drops exponentially to zero at M < -23.
  - Double Power-Law (Double equals ==) remains linear in log space with slope -0.4(beta + 1).
  - Saunders Log-Normal (Dots ...) provides an intermediate curved bright tail.
```

---

## 7. Oral Exam Blackboard Presentation Script

When asked by Prof. Pizzella - *"Why does the Schechter function fail at the bright end in certain galaxy populations, and how do we model them mathematically?"*

1. **State the physical limitations of the Schechter function** -
   - Write on the board - $\Phi(L) \propto (L/L^*)^lpha \exp(-L/L^*)$.
   - Explain - *"The exponential cutoff $\exp(-L/L^*)$ physically reflects the exponential drop in the dark matter halo mass function combined with catastrophic AGN feedback quenching in massive local galaxies. However, in three major astrophysical contexts, this cutoff fails - (1) high-redshift galaxies at $z \gtrsim 6$, (2) quasars and AGNs, and (3) luminous infrared starbursts."*

2. **Write the Double Power-Law formulation** -
   - Write on the board -
     $$\Phi(L) \, dL = rac{\Phi^*}{(L/L^*)^lpha + (L/L^*)^eta} rac{dL}{L^*}$$
   - Demonstrate the limits - *"When $L \ll L^*$, the $(L/L^*)^lpha$ term dominates, giving a faint-end power law with index $-lpha$. When $L \gg L^*$, the $(L/L^*)^eta$ term dominates, giving a bright-end power law with index $-eta$."*

3. **Convert to absolute magnitudes** -
   - Write on the board -
     $$\Phi(M) \, dM = rac{0.4 \ln(10) \, \Phi^*}{10^{0.4(lpha + 1)(M - M^*)} + 10^{0.4(eta + 1)(M - M^*)}} \, dM$$
   - Draw the diagram showing that on a logarithmic plot, the DPL is represented by two straight lines with asymptotic slopes $-0.4(lpha + 1)$ and $-0.4(eta + 1)$.

4. **Mention the Saunders modified Schechter formulation** -
   - Write the log-normal tail $\exp[ -rac{1}{2\sigma^2} \log_{10}^2(1 + L/L^*) ]$.
   - Conclude - *"This log-normal tail accounts for the excess of dusty starbursts observed by IRAS and sub-millimeter surveys where merger-driven star formation produces extreme infrared luminosities."*

---

## 8. Primary Course References

- **Prof. Alessandro Pizzella's Lecture Notes** -
  - `Astrophysic_gal_1_LF-1.pdf` (Luminosity function definitions, Schechter fit, and departures, pages 1-38).
  - `Astrophysic_gal_2_LF-1.pdf` (High-redshift luminosity functions, quasar LF, pages 1-28).
  - `Review_LF-1.pdf` (Comprehensive review of galaxy and AGN luminosity functions, pages 1-45).
- **Seminal Literature** -
  - Schechter, P. (1976, ApJ, 203, 297) - *An analytic expression for the luminosity function for galaxies*.
  - Saunders, W., et al. (1990, MNRAS, 242, 318) - *The 60-micron luminosity function of IRAS galaxies*.
  - Bouwens, R. J., et al. (2015, ApJ, 803, 34) - *UV Luminosity Functions at Redshifts z ~ 4 to z ~ 10 from the HUDF and CANDELS*.
  - Harikane, Y., et al. (2023, ApJS, 265, 5) - *JWST Identification of Extremely Luminous z > 8 Galaxies and the Departure from Schechter Profiles*.
- **Standard Textbooks** -
  - Mo, H., van den Bosch, F., and White, S. (2010), *Galaxy Formation and Evolution*, Cambridge University Press, Chapter 2 - Statistical Properties of Galaxies (pages 68-74).
  - Longair, M. S. (2008), *Galaxy Formation*, Springer, Chapter 3 - The Luminosity Function of Galaxies (pages 55-62).

---

## 9. Related Knowledge Base Notes

- [Schechter function](Schechter%20function.html) - The canonical analytic formula for galaxy luminosity functions.
- [Integrals of the Schechter function](Integrals%20of%20the%20Schechter%20function.html) - Analytic integrations for galaxy number density and luminosity density.
- [Schechter function in magnitudes](Schechter%20function%20in%20magnitudes.html) - Mathematical formulation and parameter fitting in magnitude space.
- [UV luminosity function](UV%20luminosity%20function.html) - Evolution of high-redshift star-forming galaxy populations across cosmic lookback time.
- [Luminosity function definition](Luminosity%20function%20definition.html) - Theoretical definitions, selection effects, and the $V_{
m max}$ estimator.

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="LF%20by%20morphology%20and%20SED.html" class="backlink-item">LF by morphology and SED</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
  </ul>
</div>

