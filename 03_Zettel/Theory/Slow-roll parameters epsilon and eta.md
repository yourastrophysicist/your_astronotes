---
layout: "default"
title: "Slow-roll parameters epsilon and eta"
---
# Slow-roll parameters epsilon and eta

> *dimensionless parameters measuring the flatness of the potential and the longevity of the accelerated phase.*

---

## core physical intuition

Accelerated expansion ($\ddot{a} > 0$) requires the fractional change of the Hubble parameter per Hubble time to be small. The first parameter $\epsilon$ measures this fractional decrease of $H$, and inflation continues as long as $\epsilon < 1$.

However, having $\epsilon < 1$ at an instant is not enough; inflation must last for at least 50–60 e-folds. The second parameter $\eta$ measures the fractional change of $\dot{\phi}$ per Hubble time. Requiring $\lvert \eta\rvert \ll 1$ ensures that the friction balance holds and that the field does not rapidly accelerate down the potential.

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

* parent moc: [[Cosmology_of_the_Early_Universe_MOC]]
* related zettels:
  - [[Single-field slow-roll inflation dynamics]]
  - [[Number of e-folds and horizon exit]]
  - [[Scalar primordial power spectrum and spectral index]]
  - [[Consistency relation of single-field slow-roll inflation]]
  - [[Part2_Inflation_Kinematics_Dynamics_and_Models]]



## Linked References

- [[Consistency relation of single-field slow-roll inflation]]
- [[Number of e-folds and horizon exit]]
- [[Scalar primordial power spectrum and spectral index]]
- [[Single-field slow-roll inflation dynamics]]
- [[Cosmology_of_the_Early_Universe_MOC]]


