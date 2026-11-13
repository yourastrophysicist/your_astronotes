---
layout: "default"
title: "Aberration of light"
---
**aberration of light** is the apparent displacement of a star toward the direction in which the observer is moving. it exists because the speed of light is finite and the observer has a velocity. it depends only on the observer's velocity, not on the distance of the star.

## the picture

rain falls vertically, but if I run I have to tilt the umbrella forward. the rain has not changed, my velocity has. for starlight the telescope is the umbrella. during the time the light travels down the tube, the tube has moved, so I must tilt it forward by a small angle to keep the light on the axis.

## the classical derivation

let the star be at angle $\theta$ from the direction of my velocity $\vec v$. in the rest frame of the Sun the light arrives with velocity components

$$c_\parallel = -c\cos\theta, \qquad c_\perp = -c\sin\theta$$

in my frame I subtract my own velocity along the parallel direction, so the light arrives with

$$c'_\parallel = -(c\cos\theta + v), \qquad c'_\perp = -c\sin\theta$$

the apparent direction $\theta'$ satisfies

$$\tan\theta' = \frac{c\sin\theta}{c\cos\theta + v} = \frac{\sin\theta}{\cos\theta + \beta}, \qquad \beta \equiv \frac{v}{c}$$

for $\beta \ll 1$ I expand to first order. writing $\theta' = \theta - \alpha$ with $\alpha$ small:

$$\boxed{\, \alpha \equiv \theta - \theta' \simeq \beta\sin\theta \,}$$

the star is displaced **toward the apex** of my motion, by an amount that is largest when the star is at right angles to my velocity.

## the relativistic formula

the classical argument adds velocities in a way that is not allowed for light. the Lorentz transformation of the photon direction gives the exact result

$$\cos\theta' = \frac{\cos\theta + \beta}{1 + \beta\cos\theta}$$

expanding to first order in $\beta$ gives $\theta' \simeq \theta - \beta\sin\theta$, the same as before. the difference appears at order $\beta^2$, which for the Earth is $\sim 10^{-8}$ rad, about a milliarcsecond. Gaia works at that level, so astrometry missions use the relativistic form.

## annual aberration

the Earth moves around the Sun at $v_\oplus \approx 29.78$ km/s. the **constant of aberration** is

$$\kappa = \frac{v_\oplus}{c} = \frac{29.78}{299\,792} \approx 9.93 \times 10^{-5}\ \text{rad} \approx 20.5''$$

over one year the velocity vector of the Earth turns through $360°$ in the plane of the ecliptic, so each star traces a small figure on the sky. for a star at ecliptic latitude $\beta_{\rm ecl}$:

- the semi-major axis is $\kappa = 20.5''$, parallel to the ecliptic.
- the semi-minor axis is $\kappa\sin\beta_{\rm ecl}$, perpendicular to the ecliptic.

so the figure is a **circle** at the ecliptic pole, an **ellipse** at intermediate latitudes and a **straight line** of half-length $20.5''$ on the ecliptic itself.

## the other aberrations

- **diurnal aberration**: the rotation of the Earth carries the observer at $v = 0.465\cos\phi$ km/s, which gives $0.32''\cos\phi$. small, but not negligible for meridian astrometry.
- **secular aberration**: the motion of the Sun around the Galaxy at $\sim 220$ km/s shifts every star by up to $\sim 150''$. the shift is practically constant over human timescales, so it is absorbed into the catalog positions and never corrected.
- **planetary aberration**: for solar system bodies the light-travel time matters too, because the body itself moves while the light is on its way.

## how it differs from parallax

this is the comparison I must be able to draw.

| | aberration | parallax |
|---|---|---|
| cause | velocity of the observer | displacement of the observer |
| size | $20.5''$ for every star | $\le 0.77''$, falls as $1/d$ |
| depends on distance | no | yes, $p = 1/d$ |
| direction of the shift | toward the apex of the Earth's velocity | toward the Sun |
| phase | leads parallax by 3 months | reference |

the two ellipses have the same shape for the same star, but they are **90° out of phase**, because the velocity of the Earth is perpendicular to the Earth-Sun line. this phase is what told Bradley he was not looking at parallax.

## Bradley 1728

James Bradley and Samuel Molyneux observed $\gamma$ Draconis from 1725, a star that passes almost through the zenith of London, so refraction is negligible. they wanted the parallax. they found a yearly oscillation of about $20''$, but with the maximum displacement three months away from where parallax would put it. Bradley understood in 1728 that the cause was the velocity of the Earth combined with the finite speed of light.

two results came out of it:

- the first direct proof that the **Earth moves around the Sun**.
- a measurement of the **speed of light**. from $\kappa$ and the orbital speed Bradley found that light takes about 8 minutes 12 seconds to come from the Sun, close to the modern 8 minutes 19 seconds.

it also explained why nobody had seen parallax yet. the true parallaxes are more than 25 times smaller than aberration, and the first one was measured only in 1838 by Bessel.

## why it matters in practice

- every precise position must be corrected for annual aberration before it is compared with a catalog. the correction is larger than precession over a few months, and much larger than any parallax.
- the correction is the same for all stars in a small field, so differential astrometry inside one image is almost free of it. absolute astrometry is not.
- the CMB dipole is the same effect combined with the Doppler shift. our motion at $\sim 370$ km/s with respect to the CMB frame both shifts the temperature and aberrates the positions of the anisotropies.

## quick numbers

- $\kappa = 20.5''$ (annual), $0.32''$ (diurnal, at the equator).
- largest stellar parallax: $0.77''$ (Proxima Centauri).
- second-order relativistic term: $\sim \kappa^2/4 \approx 1$ mas.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Aberration (astronomy)|500](https://commons.wikimedia.org/wiki/Special:FilePath/Simple_stellar_aberration_diagram.svg?width=600)
*simple diagram of (stellar) aberration* ([Commons file page](https://commons.wikimedia.org/wiki/File:Simple_stellar_aberration_diagram.svg), BlankAxolotl, CC BY-SA 3.0, as used on the Wikipedia article [Aberration (astronomy)](https://en.wikipedia.org/wiki/Aberration_%28astronomy%29))

- **Aberration (astronomy)**. "In astronomy, aberration (also referred to as astronomical aberration, stellar aberration, or velocity aberration) is a phenomenon where celestial objects exhibit an apparent motion about their true positions based on the velocity of the observer: It causes objects to appear to be displaced towards the observer's direction of motion." ([Wikipedia](https://en.wikipedia.org/wiki/Aberration_%28astronomy%29))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Annual stellar parallax]]
- [[Precession and nutation]]
- [[Precession nutation aberration parallax]]
- [[Proper motion and stellar kinematics]]
- [[Atmospheric refraction]]
- [[Ecliptic system]]
- [[Equatorial system]]
- [[Fundamentals_Astrophysics_Cosmology_MOC]]
- [[Observational_Astrophysics_MOC]]
