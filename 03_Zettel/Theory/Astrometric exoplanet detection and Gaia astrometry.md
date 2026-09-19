---
layout: "default"
title: "Astrometric exoplanet detection and Gaia astrometry"
---
astrometry measures the 2D positional wobble of a star across the plane of the sky induced by the gravitational pull of an orbiting exoplanet around the system barycenter.

## the astrometric signature amplitude

the semi-major axis of the stellar reflex orbit in physical units is $a_\star = a (M_p / M_\star)$. projected on the sky at distance $d$, the angular semi-amplitude $\alpha$ is:

$$\alpha = \frac{a_\star}{d} = \frac{M_p}{M_\star} \frac{a}{d}$$

in astronomical units:

$$\alpha \approx 3.0 \,\mu\text{as} \left( \frac{M_p}{M_\oplus} \right) \left( \frac{a}{1\text{ AU}} \right) \left( \frac{M_\star}{M_\odot} \right)^{-1} \left( \frac{d}{10\text{ pc}} \right)^{-1}$$

for Jupiter around the Sun at $10\text{ pc}$, $\alpha_{\text{Jup}} \approx 500\,\mu\text{as}$.
*favorable scaling: astrometry sensitivity scales as $\alpha \propto a$, making it most sensitive to wide-separation planets ($a \sim 1 - 5\text{ AU}$), complementing radial velocity ($K \propto a^{-1/2}$) and transits ($\mathcal{P}_{\text{tr}} \propto a^{-1}$).*

## celestial mechanics and thiele-innes constants

the observed apparent angular position $(\Delta\alpha^*, \Delta\delta)$ in right ascension and declination is:

$$\Delta\alpha^*(t) = B X(t) + G Y(t)$$
$$\Delta\delta(t) = A X(t) + F Y(t)$$

where $(X(t), Y(t))$ are normalized orbital coordinates in the orbital plane ($X = \cos E - e, Y = \sqrt{1 - e^2} \sin E$), and $A, B, F, G$ are the **Thiele-Innes constants**:

$$A = a_\star (\cos\omega \cos\Omega - \sin\omega \sin\Omega \cos i)$$
$$B = a_\star (\cos\omega \sin\Omega + \sin\omega \cos\Omega \cos i)$$
$$F = a_\star (-\sin\omega \cos\Omega - \cos\omega \sin\Omega \cos i)$$
$$G = a_\star (-\sin\omega \sin\Omega + \cos\omega \cos\Omega \cos i)$$

fitting this 2D ellipse determines the orbital inclination $i$ and ascending node $\Omega$ directly, measuring the **true mass** $M_p$ without any $\sin i$ ambiguity.

## the gaia revolution

ESA's Gaia space astrometry mission measures positions of $> 1.8$ billion stars with single-epoch precisions down to $20 - 50\,\mu\text{as}$:
- **Gaia DR4**: scheduled to deliver orbital solutions for tens of thousands of giant exoplanets out to several AU.
- **proper motion anomaly (PMa)**: comparing Gaia proper motions with historical Hipparcos catalogs over a 25-year baseline reveals reflex accelerations ($d\mathbf{v}/dt$) that guide direct imaging target selection.

## see also

- [Exoplanetary_Astrophysics_MOC](../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- [09_Astrometric_Detection_and_Gaia_Capabilities](../../02_Literature/Lectures/Exoplanetary_Astrophysics/09_Astrometric_Detection_and_Gaia_Capabilities.html)
- [Keplerian radial velocity and Doppler semi-amplitude](Keplerian%20radial%20velocity%20and%20Doppler%20semi-amplitude.html)
- [High-contrast direct imaging and extreme adaptive optics](High-contrast%20direct%20imaging%20and%20extreme%20adaptive%20optics.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Coronagraphy%20and%20angular%20differential%20imaging.html" class="backlink-item">Coronagraphy and angular differential imaging</a></li>
    <li class="backlink-item-wrap"><a href="High-contrast%20direct%20imaging%20and%20extreme%20adaptive%20optics.html" class="backlink-item">High-contrast direct imaging and extreme adaptive optics</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
  </ul>
</div>

