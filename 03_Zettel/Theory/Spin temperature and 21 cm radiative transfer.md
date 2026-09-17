---
layout: "default"
title: "Spin temperature and 21 cm radiative transfer"
name: "Spin temperature and 21 cm radiative transfer"
description: "excitation balance, optical depth, and column density derivation for the 21 cm neutral hydrogen line"
---
{% raw %}
the excitation state of the two hyperfine levels of neutral hydrogen is parameterized by the **spin temperature** $T_s$:

$$\frac{n_1}{n_0} = \frac{g_1}{g_0} \exp\left(-\frac{h\nu_0}{k T_s}\right) = 3 \exp\left(-\frac{0.0682\text{ K}}{T_s}\right)$$

because $T_s \gg 0.0682\text{ K}$ everywhere in the non-cryogenic universe, $n_1/n_0 \approx 3(1 - 0.0682/T_s) \approx 3$. three-quarters of all neutral hydrogen atoms reside in the upper state ($F=1$).

## physical mechanisms setting $T_s$

$T_s$ is established by steady-state balance among three processes:
1. absorption and stimulated emission of CMB photons ($T_{\text{CMB}} = 2.725\text{ K}$)
2. collisions with hydrogen atoms, electrons, and protons at kinetic temperature $T_k$
3. resonant scattering of Lyman-alpha photons (the **Wouthuysen-Field effect**) at color temperature $T_\alpha \approx T_k$

$$T_s = \frac{T_{\text{CMB}} + y_c T_k + y_\alpha T_\alpha}{1 + y_c + y_\alpha}$$

- in the **CNM** ($n \sim 50\text{ cm}^{-3}$): atomic collisions dominate ($y_c \gg 1$), forcing $T_s = T_k \approx 50 - 100\text{ K}$.
- in the **WNM** ($n \sim 0.3\text{ cm}^{-3}$): collisions are weaker, so $T_{\text{CMB}} < T_s < T_k$ ($T_s \sim 1000 - 4000\text{ K}$).

## radiative transfer and optical depth

the absorption coefficient corrected for stimulated emission in the Rayleigh-Jeans limit ($h\nu_0 \ll k T_s$) is:

$$\kappa_\nu = \frac{3 c^2 A_{10} h}{32\pi k T_s \nu_0} n_{\text{HI}} \phi(\nu)$$

optical depth along path $s$:

$$\tau(v) = \frac{3 c^3 A_{10} h}{32\pi k T_s \nu_0^2} \int n_{\text{HI}} \phi(v) ds$$

observed brightness temperature from an isothermal cloud:

$$T_B(v) = T_s (1 - e^{-\tau(v)})$$

## column density in the optically thin limit

when $\tau(v) \ll 1$, $1 - e^{-\tau(v)} \approx \tau(v)$. the spin temperature cancels out:

$$T_B(v) = \frac{3 c^3 A_{10} h}{32\pi k \nu_0^2} \int n_{\text{HI}} \phi(v) ds$$

integrating over velocity $\int T_B(v) dv$:

$$N_{\text{HI}} = \frac{32\pi k \nu_0^2}{3 c^3 A_{10} h} \int T_B(v) dv = 1.823 \times 10^{18} \int T_B(v) dv \quad [\text{cm}^{-2}]$$

where $T_B$ is in Kelvin and $v$ is in $\text{km s}^{-1}$. this provides a direct, distance- and temperature-independent measure of the total neutral hydrogen column density.

## see also

- [Astrophysics_of_the_Interstellar_Medium_MOC](../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html)
- [HI 21 cm hyperfine transition](./HI%2021%20cm%20hyperfine%20transition.html)
- [Galactic HI kinematics and Milky Way spiral structure](./Galactic%20HI%20kinematics%20and%20Milky%20Way%20spiral%20structure.html)
- [Carraro_02_Neutral_Hydrogen_and_21cm_Universe](../../02_Literature/Lectures/Interstellar_Medium/Carraro_02_Neutral_Hydrogen_and_21cm_Universe.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html" class="backlink-item">Astrophysics_of_the_Interstellar_Medium_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Interstellar_Medium/Carraro_02_Neutral_Hydrogen_and_21cm_Universe.html" class="backlink-item">Carraro_02_Neutral_Hydrogen_and_21cm_Universe</a></li>
    <li class="backlink-item-wrap"><a href="./HI%2021%20cm%20hyperfine%20transition.html" class="backlink-item">HI 21 cm hyperfine transition</a></li>
  </ul>
</div>
