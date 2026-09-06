---
layout: default
title: "Appendix E - Astronomical coordinates"
---

## Altazimuth system

The **altazimuth** (horizontal) coordinate system is tied to the local observer

Coordinates:
	**azimuth** $A$: angle measured along the horizon from **North**, toward East
		range: $0°$–$360°$
	**altitude** $h$ (or height): angle above the horizon
		range: $-90°$ to $+90°$
		$h = 90°$ is the **zenith**
		$h = 0°$ is on the horizon

This system is observer-dependent and time-dependent
	a star's altazimuth coordinates change continuously as Earth rotates
		so it is not useful for cataloguing sources

![](https://upload.wikimedia.org/wikipedia/commons/f/f7/Azimuth-Altitude_schematic.svg)
<font color="#bfbfbf">The altazimuth (horizontal) coordinate system. Azimuth $A$ is measured along the horizon from North toward East; altitude $h$ is the angle above the horizon. The zenith is at $h = 90°$.</font>

---

## Equatorial system

The **equatorial coordinate system** is fixed to the celestial sphere
	independent of the observer's location and time (to first order)

Coordinates:
	**right ascension** $\alpha$ (RA): analogous to longitude on the sky
		measured eastward from the **vernal equinox** ($\gamma$)
			in hours, minutes, seconds ($0^\text{h}$–$24^\text{h}$)
	**declination** $\delta$ (Dec): analogous to latitude on the sky
		measured from the celestial equator
			in degrees ($-90°$ to $+90°$)

The **vernal equinox** $\gamma$ is the reference point:
	it is where the **ecliptic** (the apparent path of the Sun) crosses the celestial equator
		with the Sun moving from south to north (around March 20)

![](https://upload.wikimedia.org/wikipedia/commons/e/e2/Equatorial_coordinates.svg)
<font color="#bfbfbf">The equatorial coordinate system. Right ascension $\alpha$ is measured eastward along the celestial equator from the vernal equinox $\gamma$; declination $\delta$ is measured north or south from the celestial equator. The hour circle passes through the object and the celestial poles.</font>

---

## The ecliptic and obliquity

The **ecliptic** is the plane of Earth's orbit around the Sun
	projected onto the celestial sphere

The **obliquity** $\varepsilon$ is the angle between the ecliptic and the celestial equator:
$$\varepsilon \approx 23°27'$$

This tilt is responsible for the seasons

---

## Precession

The equatorial coordinate system is not perfectly fixed
	Earth's rotation axis **precesses** like a spinning top
		with a period of approximately **26,000 years**

This causes the vernal equinox to drift slowly westward along the ecliptic
	so the RA and Dec of a source change slowly over time

Coordinates must therefore be referred to a specific **epoch**
	the current standard is **J2000.0** (January 1, 2000 at 12:00 TT)

---

## Conversion between systems

To convert from equatorial $(\alpha, \delta)$ to altazimuth $(A, h)$
	one needs the observer's **latitude** $\phi$ and the **local sidereal time** (LST)

The **hour angle** $H$ is defined as:
$$H = \text{LST} - \alpha$$

it measures how far past the meridian the object has traveled
	$H = 0$: object is on the meridian (transiting, highest in the sky)
