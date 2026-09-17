---
layout: "default"
title: "Millisecond pulsar timing and planetary companions"
name: "Millisecond pulsar timing and planetary companions"
description: "clock stability of recycled pulsars, Roemer delay reflex timing, and the historic discovery of PSR B1257+12 planets"
---
{% raw %}
millisecond pulsars (MSPs) rotate hundreds of times per second with rotational clock stability rivaling atomic clocks ($d P / dt \sim 10^{-20}\text{ s s}^{-1}$). an orbiting planet induces reflex displacements of the pulsar around the barycenter, producing measurable periodic delays in pulse Times of Arrival (TOAs).

## the roemer delay

the dominant timing perturbation is the geometric light-travel time across the pulsar's orbit (the Roemer delay $\Delta_{\text{R}}$):

$$\Delta_{\text{R}}(t) = -\frac{\mathbf{r}_{\text{psr}}(t) \cdot \hat{\mathbf{n}}}{c} = -\frac{a_\star \sin i}{c} \left[ \sin(\nu + \omega) + e \sin\omega \right]$$

for a circular orbit:

$$\Delta_{\text{R}}(t) = -\frac{a_\star \sin i}{c} \sin\left( \frac{2\pi t}{P} \right)$$

substituting Kepler's third law:

$$\tau_{\text{amp}} = \frac{a_\star \sin i}{c} = \left( \frac{G}{4\pi^2} \right)^{1/3} \frac{M_p \sin i}{(M_{\text{psr}} + M_p)^{2/3}} \frac{P^{2/3}}{c}$$

because pulse arrival times can be measured with sub-microsecond precision, pulsar timing achieves extraordinary sensitivity: a 1-microsecond timing residual corresponds to a position displacement of only $300\text{ meters}$. this enables detection of planet masses down to Lunar and asteroidal scales ($M \sim 0.01 M_\oplus$).

## the benchmark psr b1257+12 system

Aleksander Wolszczan and Dale Frail (1992) discovered the first confirmed extrasolar planets orbiting the millisecond pulsar PSR B1257+12:
- **Draugr (b)**: $M = 0.02 M_\oplus$ ($1.6 M_{\text{Moon}}$), $P = 25.3\text{ d}$.
- **Poltergeist (c)**: $M = 4.3 M_\oplus$, $P = 66.5\text{ d}$.
- **Phobetor (d)**: $M = 3.9 M_\oplus$, $P = 98.2\text{ d}$.

planets c and d lie in a near $3:2$ resonance; mutual gravitational perturbations induce measurable TTVs that broke the $\sin i$ degeneracy, yielding true masses ($i \approx 50^\circ$).

### formation scenario
planets cannot survive the supernova explosion that formed the neutron star. they must have condensed out of a **post-supernova fallback disk** formed by stellar debris or the disruption of a former binary companion during pulsar recycling.

## see also

- [Exoplanetary_Astrophysics_MOC](../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- [06_Timing_Methods_and_Pulsar_Planets](../../02_Literature/Lectures/Exoplanetary_Astrophysics/06_Timing_Methods_and_Pulsar_Planets.html)
- [Keplerian radial velocity and Doppler semi-amplitude](./Keplerian%20radial%20velocity%20and%20Doppler%20semi-amplitude.html)
- [Transit timing variations and resonant multi-planet dynamics](./Transit%20timing%20variations%20and%20resonant%20multi-planet%20dynamics.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (1)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
  </ul>
</div>
