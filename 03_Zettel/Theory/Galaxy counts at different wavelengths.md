---
layout: "default"
title: "Galaxy counts at different wavelengths"
---
{% raw %}
# galaxy counts at different wavelengths

up: [Pablo_02_Statistical_properties_of_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html) · [Galaxy number counts N(m)](./Galaxy%20number%20counts%20N%28m%29.html)

## the same statistic, very different curves

a galaxy's spectrum is not flat, so $N(m)$ depends *strongly* on the band you use. each wavelength is a different selection function on the galaxy population, and each has its own [K-correction](./K-correction.html), so the cosmological information you extract is different.

## optical / NIR

the canonical Durham compilation (N. Metcalfe at the Durham Cosmology Group) tabulates counts in **U, B, R, I, H, K (Vega)** and **SDSS g, r, i, z (AB)**, down to $B \sim 27.5$, drawn from Herschel Deep Field, Hubble Deep Field, 2MASS, Pan-STARRS, VLT VST ATLAS, and many supplementary surveys.

link: https://astro.dur.ac.uk/~nm/pubhtml/counts/counts.html

key features:
- **U-band** counts flatten earliest because of the Lyman-break: at $z \gtrsim 3$ the rest-frame far-UV is absorbed and galaxies drop out. so U counts saturate.
- **B-band** is the historical workhorse; slope drops from 0.6 to $\sim 0.45$ around $B \sim 21$, to $\sim 0.3$ at $B \sim 25$.
- **K-band** (2.2 μm) is the closest thing to a stellar-mass-tracing band at $z \sim 1$, and its counts have the *flattest* slope ($\sim 0.25$) at faint magnitudes because K samples mature stellar populations whose evolution is mild.

the Durham website gives postscript plots and tabulated text data for each band; pablo recommends pulling the K-band table for the LF normalization in the [Schechter K-band luminosity function](./Schechter%20K-band%20luminosity%20function.html) note.

## mid-IR

at 24 μm (Spitzer MIPS) and 70 μm, the counts are dominated by *dusty* star-forming galaxies. Bethermin et al. 2010 shows $S^{2.5}\, dN/dS$ rising by $\sim 10\times$ above the Euclidean line at $\sim 0.3$ mJy. that bump is the entire LIRG/ULIRG population at $z \sim 1$–$2$.

## sub-mm

at 850 μm (SCUBA / SCUBA-2 / ALMA) the K-correction is *negative*: as you go to higher $z$, you climb the cold-dust modified blackbody (peak around 100 μm restframe), which boosts the observed flux. so a galaxy of given dust luminosity has roughly *constant* observed 850 μm flux from $z \sim 1$ to $z \sim 10$. the sub-mm sky is essentially unbiased between those redshifts, which is why ALMA/SCUBA surveys are the sharpest probe of dust-obscured high-$z$ star formation.

see [K-correction in optical vs sub-mm](./K-correction%20in%20optical%20vs%20sub-mm.html) for the explicit form.

## X-ray and radio

X-ray counts (Hasinger 2005, eROSITA) are dominated by AGN, not normal galaxies. radio counts (FIRST, VLASS, SKA precursors) are dominated by AGN at high flux and by star-forming galaxies at low flux. neither is a clean stellar tracer.

## what i remember

- there is no single "galaxy count"; pick the band that traces what you care about (stars → K, dust → sub-mm, AGN → X-ray, unobscured SF → UV).
- the Durham compilation is the goto reference for optical / NIR, and the FIR Bethermin compilation for the dust side.

## connections

- previous: [Galaxy number counts N(m)](./Galaxy%20number%20counts%20N%28m%29.html), [Differential vs cumulative number counts](./Differential%20vs%20cumulative%20number%20counts.html)
- band conversions: [K-correction in optical vs sub-mm](./K-correction%20in%20optical%20vs%20sub-mm.html)
- morphology split (in B-band): [Driver 1998 counts by morphology](./Driver%201998%20counts%20by%20morphology.html)

## key references

- Metcalfe Durham compilation (URL above)
- Bethermin et al. 2010 (24 / 70 μm)
- Hasinger et al. 2005 (X-ray AGN counts)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Differential%20vs%20cumulative%20number%20counts.html" class="backlink-item">Differential vs cumulative number counts</a></li>
    <li class="backlink-item-wrap"><a href="./Double%20power-law%20modified%20Schechter.html" class="backlink-item">Double power-law modified Schechter</a></li>
    <li class="backlink-item-wrap"><a href="./Driver%201998%20counts%20by%20morphology.html" class="backlink-item">Driver 1998 counts by morphology</a></li>
    <li class="backlink-item-wrap"><a href="./Galaxy%20number%20counts%20N%28m%29.html" class="backlink-item">Galaxy number counts N(m)</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html" class="backlink-item">Pablo_02_Statistical_properties_of_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Schechter%20K-band%20luminosity%20function.html" class="backlink-item">Schechter K-band luminosity function</a></li>
  </ul>
</div>
