---
layout: "default"
title: "Slow-roll parameters epsilon and eta"
---
{% raw %}
# Slow-roll parameters epsilon and eta

> *dimensionless parameters measuring the flatness of the potential and the longevity of the accelerated phase.*

---

## core physical intuition

Accelerated expansion ($\ddot{a} > 0$) requires the fractional change of the Hubble parameter per Hubble time to be small. The first parameter $\epsilon$ measures this fractional decrease of $H$, and inflation continues as long as $\epsilon < 1$.

However, having $\epsilon < 1$ at an instant is not enough; inflation must last for at least 50–60 e-folds. The second parameter $\eta$ measures the fractional change of $\dot{\phi}$ per Hubble time. Requiring $|\eta| \ll 1$ ensures that the friction balance holds and that the field does not rapidly accelerate down the potential.

---

## key derivation & equations

### Hubble slow-roll parameters
$$\epsilon \equiv -\frac{\dot{H}}{H^2} = \frac{\dot{\phi}^2}{2 M_{\rm Pl}^2 H^2}$$
$$\eta \equiv -\frac{\ddot{\phi}}{H\dot{\phi}}$$

The cosmic acceleration is related to $\epsilon$ by:
$$\frac{\ddot{a}}{a} = H^2 + \dot{H} = H^2(1 - \epsilon)$$
Acceleration occurs if and only if $\epsilon < 1$. Inflation ends when $\epsilon = 1$.

The time evolution of $\epsilon$ obeys:
$$\frac{\dot{\epsilon}}{H} = 2\epsilon(\epsilon - \eta)$$

### Potential slow-roll parameters
Using the slow-roll approximations $H^2 \approx V/(3M_{\rm Pl}^2)$ and $3H\dot{\phi} \approx -V'$:
$$\epsilon_V \equiv \frac{M_{\rm Pl}^2}{2}\left(\frac{V'}{V}\right)^2$$
$$\eta_V \equiv M_{\rm Pl}^2 \frac{V''}{V}$$

To lowest order in slow roll:
$$\epsilon \approx \epsilon_V, \quad \eta \approx \eta_V - \epsilon_V$$

---

## astrophysical context

* Observational scalar spectral index: $n_s - 1 = 2\eta_V - 6\epsilon_V \approx -0.035$.
* Tensor-to-scalar ratio: $r = 16\epsilon_V < 0.032$.

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Single-field slow-roll inflation dynamics](./Single-field%20slow-roll%20inflation%20dynamics.html)
  - [Number of e-folds and horizon exit](./Number%20of%20e-folds%20and%20horizon%20exit.html)
  - [Scalar primordial power spectrum and spectral index](./Scalar%20primordial%20power%20spectrum%20and%20spectral%20index.html)
  - [Consistency relation of single-field slow-roll inflation](./Consistency%20relation%20of%20single-field%20slow-roll%20inflation.html)
  - [Part2_Inflation_Kinematics_Dynamics_and_Models](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part2_Inflation_Kinematics_Dynamics_and_Models.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Consistency%20relation%20of%20single-field%20slow-roll%20inflation.html" class="backlink-item">Consistency relation of single-field slow-roll inflation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Number%20of%20e-folds%20and%20horizon%20exit.html" class="backlink-item">Number of e-folds and horizon exit</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part2_Inflation_Kinematics_Dynamics_and_Models.html" class="backlink-item">Part2_Inflation_Kinematics_Dynamics_and_Models</a></li>
    <li class="backlink-item-wrap"><a href="./Scalar%20primordial%20power%20spectrum%20and%20spectral%20index.html" class="backlink-item">Scalar primordial power spectrum and spectral index</a></li>
    <li class="backlink-item-wrap"><a href="./Single-field%20slow-roll%20inflation%20dynamics.html" class="backlink-item">Single-field slow-roll inflation dynamics</a></li>
  </ul>
</div>
