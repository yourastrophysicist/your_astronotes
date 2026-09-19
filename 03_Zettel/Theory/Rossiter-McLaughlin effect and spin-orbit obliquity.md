---
layout: "default"
title: "Rossiter-McLaughlin effect and spin-orbit obliquity"
---
the Rossiter-McLaughlin (RM) effect is a spectroscopic anomaly observed when a transiting exoplanet crosses the disk of a rotating host star.

## physical mechanism

as the star rotates with projected equatorial velocity $v_\star \sin i_\star$:
- one hemisphere rotates toward the observer (blueshifted).
- the opposite hemisphere rotates away (redshifted).

when a planet transits:
1. it first occults a portion of the blueshifted approaching limb, causing the disk-integrated light to appear redshifted.
2. at mid-transit, it crosses the projected stellar rotation axis (zero anomaly for aligned orbits).
3. it occults the redshifted receding limb, causing the net light to appear blueshifted.

this traces a characteristic velocity curve anomaly $\Delta v_{\text{RM}}(t)$ superimposed on the Keplerian motion.

## the velocity anomaly amplitude

for a star with radius $R_\star$ and rotational velocity $v \sin i_\star$:

$$\Delta v_{\text{RM}} \approx \left( \frac{R_p}{R_\star} \right)^2 (v_\star \sin i_\star) \sqrt{1 - b^2}$$

where $b = \frac{a \cos i}{R_\star}$ is the transit impact parameter.

## measuring the sky-projected spin-orbit obliquity

the asymmetry and sign of the RM anomaly directly constrain the **sky-projected obliquity** $\lambda$ (the angle between the stellar spin axis and the planetary orbital angular momentum vector):
- **aligned orbit** ($\lambda \approx 0^\circ$): symmetric redshift-then-blueshift signal (characteristic of gentle disk migration).
- **misaligned / retrograde orbit** ($\lambda \approx 180^\circ$): reversed blueshift-then-redshift signal (characteristic of violent dynamical scattering, Kozai-Lidov cycles, or planet-planet encounters).
- **polar orbit** ($\lambda \approx 90^\circ$): monotonic anomaly.

Winn et al. (2010) discovered that hot Jupiters around hot stars ($T_{\text{eff}} > 6250\text{ K}$, Kraft break) frequently exhibit large misalignments due to thin convective envelopes unable to tidal realign the star.

## see also

- [Exoplanetary_Astrophysics_MOC](../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- [15_Planetary_Transits_Geometry_and_Rossiter_McLaughlin](../../02_Literature/Lectures/Exoplanetary_Astrophysics/15_Planetary_Transits_Geometry_and_Rossiter_McLaughlin.html)
- [Keplerian radial velocity and Doppler semi-amplitude](Keplerian%20radial%20velocity%20and%20Doppler%20semi-amplitude.html)
- [Mandel-Agol analytical transit light curve model](Mandel-Agol%20analytical%20transit%20light%20curve%20model.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Keplerian%20radial%20velocity%20and%20Doppler%20semi-amplitude.html" class="backlink-item">Keplerian radial velocity and Doppler semi-amplitude</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
  </ul>
</div>

