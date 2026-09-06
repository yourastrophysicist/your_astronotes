---
layout: default
title: "Differential vs cumulative number counts"
---

# differential vs cumulative number counts

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md) · [Galaxy number counts N(m)](../../02_Zettel/Theory/Galaxy number counts N(m).md)

## the two forms

starting from a counts function:

- **cumulative**: $N(<m)$, "how many galaxies per square degree are brighter than $m$". in flux units, $N(>S)$, "how many sources per square degree are brighter than flux $S$".
- **differential**: $dN/dm$ (per magnitude bin) or $dN/dS$ (per unit flux), the local density at a given magnitude / flux.

they are derivatives of each other.

## why prefer one over the other

| form | pro | con |
|---|---|---|
| cumulative | smoother, low scatter at faint end | bins are correlated, hard to fit |
| differential | independent bins, easy $\chi^2$ | noisier, sensitive to binning |

in extragalactic literature, optical/NIR counts are usually plotted **differential per square degree per magnitude**, while X-ray and sub-mm counts are usually plotted **cumulative per square degree above flux $S$**. Hasinger 2005 X-ray AGN counts and Bethermin 2010 24 μm / 70 μm counts use both forms in the same paper for clarity.

## euclidean slopes

if $N(<m) \propto 10^{0.6 m}$, then

$$\frac{dN}{dm} \propto 10^{0.6 m} \cdot \ln 10 \cdot 0.6$$

so the differential count has the *same* slope $0.6$ in $\log dN/dm$ vs $m$. similarly $N(>S) \propto S^{-3/2}$ implies $dN/dS \propto S^{-5/2}$, so a Euclidean differential count plotted as $S^{5/2}\, dN/dS$ vs $S$ should be flat. this **normalized differential** form is the standard way the X-ray and far-IR counts are shown: any deviation from a horizontal line is a deviation from Euclidean.

## reading bethermin 2010

Bethermin et al. 2010 plot $S^{2.5}\, dN/dS$ at 24 μm and 70 μm. the curve is *not* flat: it rises by an order of magnitude from $S \sim 10^{-1}$ mJy to a peak around $S \sim 1$ mJy, then falls. the rise is the contribution of the $z \sim 1$–$2$ luminous infrared galaxy (LIRG) population, the peak corresponds to the resolved limit of Spitzer, and the fall is the convolution of the LF with cosmic geometry.

## connections

- previous: [Galaxy number counts N(m)](../../02_Zettel/Theory/Galaxy number counts N(m).md)
- multi-band view: [Galaxy counts at different wavelengths](../../02_Zettel/Theory/Galaxy counts at different wavelengths.md)
- morphology split: [Driver 1998 counts by morphology](../../02_Zettel/Theory/Driver 1998 counts by morphology.md)
- the Durham compilation gives both forms tabulated: [counts.html](https://astro.dur.ac.uk/~nm/pubhtml/counts/counts.html)

## key references

- Hasinger et al. 2005 (X-ray differential vs cumulative)
- Bethermin et al. 2010, A&A 512, A78 (Spitzer 24 / 70 μm)
