---
layout: default
title: "Sidereal vs solar time"
---

two natural ways to define a "day," and they are not the same.

---

## sidereal day

the **sidereal day** is the interval after which the stars return to the same position in the sky.

equivalently: one full rotation of the Earth with respect to the fixed stars — i.e. with respect to the $\gamma$ point.

duration: $23$ h $56$ m $4$ s of solar time.

---

## solar day

the **solar day** is the interval after which the Sun returns to the same position in the sky.

duration: $24$ h, by definition.

---

## why the two differ

while the Earth spins on its axis, it is *also* moving around the Sun. so to bring the Sun back to the same apparent position requires the Earth to rotate slightly more than one full sidereal turn — by an extra $\sim 1°$ per day, since Earth advances about $1°$ in its orbit each day ($360°/365.25 \approx 0.986°$).

that extra little rotation takes about $4$ minutes:
$$\text{solar day} - \text{sidereal day} \approx 3\,\text{m}\,56\,\text{s}$$

so **sidereal time runs about 4 minutes faster per day than solar time**. over a year (365.25 solar days), this offset accumulates to exactly $24$ h — which is why the night sky on a given solar date repeats year after year.

---

## time units for $\alpha$ and $h$

both sidereal time and the hour angle $h$ change at the same rate — that's the whole point of measuring along the celestial equator. it is convenient to express them, and right ascension $\alpha$, in **time units**:

$$24\,\text{h} \leftrightarrow 360°, \qquad 1\,\text{h} \leftrightarrow 15°, \qquad 1\,\text{m} \leftrightarrow 15', \qquad 1\,\text{s} \leftrightarrow 15''$$

so $\alpha = 12$ h means $\alpha = 180°$, and the master relation $\Theta = h + \alpha$ adds time-format quantities directly.

![sphereastro-25](../../assets/images/sphereastro-25.png)

---

## measuring sidereal time in practice

point the telescope at a star of known $(\alpha, \delta)$. read the hour angle $h$ off the hours wheel of the equatorial mount. then
$$\Theta = h + \alpha$$
gives the local sidereal time at that instant.

a sidereal clock at the observatory then keeps track of $\Theta$ continuously. solar clocks are no good for astronomy because they drift by 4 minutes a day.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Spherical_astronomy_complete](../../02_Zettel/Theory/Spherical_astronomy_complete.html)
- [Equatorial system](../../02_Zettel/Theory/Equatorial system.html)
- Culmination and rise/set
