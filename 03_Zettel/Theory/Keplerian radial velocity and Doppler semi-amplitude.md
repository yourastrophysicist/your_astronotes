---
layout: "default"
title: "Keplerian radial velocity and Doppler semi-amplitude"
name: "Keplerian radial velocity and Doppler semi-amplitude"
description: "two-body Keplerian orbital reflex motion, line-of-sight velocity equation, and the radial velocity semi-amplitude K"
---
{% raw %}
the radial velocity (RV) method measures the periodic Doppler shift of stellar absorption lines induced by the gravitational tug of an orbiting exoplanet around the common center of mass.

## the line-of-sight velocity equation

for a star on a Keplerian orbit with semi-major axis $a_\star$, eccentricity $e$, inclination $i$, and argument of periastron $\omega$, the line-of-sight velocity is:

$$v_r(t) = \gamma + K \left[ \cos(\nu(t) + \omega) + e \cos\omega \right]$$

where $\gamma$ is the systemic barycentric radial velocity, $\nu(t)$ is the true anomaly obtained by solving Kepler's equation:

$$M(t) = \frac{2\pi}{P}(t - t_p) = E(t) - e \sin E(t), \quad \tan\frac{\nu}{2} = \sqrt{\frac{1+e}{1-e}} \tan\frac{E}{2}$$

and $K$ is the **radial velocity semi-amplitude**.

## derivation of the semi-amplitude K

from conservation of orbital angular momentum and Kepler's third law ($P^2 = \frac{4\pi^2 a^3}{G(M_\star + M_p)}$), the semi-amplitude of the star is:

$$K = \left( \frac{2\pi G}{P} \right)^{1/3} \frac{M_p \sin i}{(M_\star + M_p)^{2/3}} \frac{1}{\sqrt{1 - e^2}}$$

in practical astronomical units:

$$K \approx 28.43\text{ m s}^{-1} \left( \frac{M_p \sin i}{M_{\text{Jup}}} \right) \left( \frac{M_\star}{M_\odot} \right)^{-2/3} \left( \frac{P}{1\text{ yr}} \right)^{-1/3} \frac{1}{\sqrt{1 - e^2}}$$

for Earth around the Sun, the reflex semi-amplitude is a minuscule:
$$K_\oplus \approx 8.9\text{ cm s}^{-1}$$

measuring $K$ determines the minimum planetary mass $M_p \sin i$. the $\sin i$ degeneracy is broken if the planet also transits ($i \approx 90^\circ$) or via astrometry.

## see also

- [Exoplanetary_Astrophysics_MOC](../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- [10_Radial_Velocity_Foundations_and_Keplerian_Orbits](../../02_Literature/Lectures/Exoplanetary_Astrophysics/10_Radial_Velocity_Foundations_and_Keplerian_Orbits.html)
- [High-precision spectrographs and laser frequency combs](./High-precision%20spectrographs%20and%20laser%20frequency%20combs.html)
- [Stellar activity signals and radial velocity jitter mitigation](./Stellar%20activity%20signals%20and%20radial%20velocity%20jitter%20mitigation.html)
- [Rossiter-McLaughlin effect and spin-orbit obliquity](./Rossiter-McLaughlin%20effect%20and%20spin-orbit%20obliquity.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Astrometric%20exoplanet%20detection%20and%20Gaia%20astrometry.html" class="backlink-item">Astrometric exoplanet detection and Gaia astrometry</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./High-precision%20spectrographs%20and%20laser%20frequency%20combs.html" class="backlink-item">High-precision spectrographs and laser frequency combs</a></li>
    <li class="backlink-item-wrap"><a href="./Millisecond%20pulsar%20timing%20and%20planetary%20companions.html" class="backlink-item">Millisecond pulsar timing and planetary companions</a></li>
    <li class="backlink-item-wrap"><a href="./Rossiter-McLaughlin%20effect%20and%20spin-orbit%20obliquity.html" class="backlink-item">Rossiter-McLaughlin effect and spin-orbit obliquity</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20activity%20signals%20and%20radial%20velocity%20jitter%20mitigation.html" class="backlink-item">Stellar activity signals and radial velocity jitter mitigation</a></li>
  </ul>
</div>
