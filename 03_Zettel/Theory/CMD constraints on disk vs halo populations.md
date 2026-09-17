---
layout: "default"
title: "CMD constraints on disk vs halo populations"
name: "CMD constraints on disk vs halo populations"
description: "how main sequence turnoffs and metallicities on a CMD distinguish disk Pop I, halo Pop II, and intermediate thick disk populations"
---
{% raw %}
a colour-magnitude diagram of resolved stars is one of the most powerful diagnostics in galactic astronomy because it encodes both age (through the main-sequence turnoff luminosity) and metallicity (through the colour and the slope of the red giant branch). different galactic components leave distinct signatures.

**disk pop i**: the thin disk is metal-rich, $[\text{Fe/H}] \sim 0$ to $+0.3$ for the youngest stars, $\sim -0.3$ for the oldest, with a wide age range from $\sim 0$ to $\sim 8$ Gyr. on a CMD, this gives a **broad, populated main sequence with a turnoff that varies from very luminous (young, $\sim 100$ Myr) down to a moderate turnoff at $\sim 8$ Gyr**. the giant branch is steep and red because of high metallicity. the horizontal branch is replaced by a metal-rich red clump. star-forming pockets contribute pre-main-sequence and upper-main-sequence stars near the OB regime.

**halo pop ii**: the stellar halo is metal-poor, $[\text{Fe/H}] \sim -1.5$ with a tail to $-3$ and below, and old, $\gtrsim 10$ Gyr with a peak at $\sim 12$-$13$ Gyr. the CMD signature is a **faint, hot main-sequence turnoff at $M_V \sim +3.5$ to $+4$, a blue subgiant branch, and a shallow-sloped, blue red giant branch**. the horizontal branch is **blue and extended** in metal-poor halo populations (the second-parameter problem aside). RR lyrae instability strip is well populated. there is no young upper main sequence.

**thick disk**: kinematically and chemically intermediate. $[\text{Fe/H}] \sim -0.7$ to $-0.3$, $[\alpha/\text{Fe}] \approx +0.3$ (alpha-enhanced because it formed before type ia SNe enriched the gas), ages $\sim 9$-$11$ Gyr. CMD shows a **turnoff luminosity intermediate between thin disk and halo** ($M_V \sim +3$), a red clump at intermediate colour, and a giant branch redder than halo but bluer than thin disk at the same luminosity.

a key practical point: at the **solar neighbourhood**, all three components overlap spatially. a CMD of a small volume around the sun (e.g. a hipparcos or gaia parallax-selected sample) shows a superposition of these features. **kinematic decomposition** (selecting stars by velocity dispersion, vertical action, or angular momentum) is needed to isolate each component before fitting an age and metallicity.

at **high galactic latitude** the thin disk thins out, leaving thick disk plus halo. at **large $|z|$**, halo dominates. so deep imaging fields off the plane (HST CDFs, gaia-DR3 stripes) give cleaner halo CMDs.

quantitative useful numbers:

- thin disk MSTO age range: $\sim 0$ to $\sim 8$ Gyr.
- thick disk MSTO age: $\sim 10 \pm 1$ Gyr.
- halo MSTO age: $\sim 12$-$13$ Gyr.
- velocity dispersions: thin disk $\sigma_z \sim 20$ km/s, thick disk $\sim 40$ km/s, halo $\sim 100$ km/s with non-rotating mean.

a clean illustration is the comparison between an open cluster CMD (e.g. NGC 6791, a metal-rich old open cluster, MSTO at $\sim 8$ Gyr, super-solar $[\text{Fe/H}]$) and a globular cluster CMD (e.g. M92, MSTO at $\sim 13$ Gyr, $[\text{Fe/H}] \approx -2.3$). both clusters are coeval populations (see [Single stellar population SSP](./Single%20stellar%20population%20SSP.html)) but trace very different parent components.

CMDs of more distant resolved systems (LMC/SMC, dwarf spheroidals, M31 halo) extend this approach to other galaxies and let you compare star formation histories of different environments. the methodology of CMD fitting (matched-filter or hess-diagram fitting of synthetic SSPs to observed photometry) is one of the bread-and-butter tools of galactic archaeology.

see also [Color-magnitude diagrams of clusters](./Color-magnitude%20diagrams%20of%20clusters.html), [Single stellar population SSP](./Single%20stellar%20population%20SSP.html), [Galactic halo and bulge formation timescales](./Galactic%20halo%20and%20bulge%20formation%20timescales.html), [Halo accretion from dwarf galaxies](./Halo%20accretion%20from%20dwarf%20galaxies.html), [Stellar populations I II III](./Stellar%20populations%20I%20II%20III.html), [HR diagram](./HR%20diagram.html), [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Age-metallicity%20relation%20of%20Galactic%20GCs.html" class="backlink-item">Age-metallicity relation of Galactic GCs</a></li>
    <li class="backlink-item-wrap"><a href="./Galactic%20GC%20two-population%20age%20structure.html" class="backlink-item">Galactic GC two-population age structure</a></li>
    <li class="backlink-item-wrap"><a href="./Galactic%20halo%20and%20bulge%20formation%20timescales.html" class="backlink-item">Galactic halo and bulge formation timescales</a></li>
    <li class="backlink-item-wrap"><a href="./Halo%20accretion%20from%20dwarf%20galaxies.html" class="backlink-item">Halo accretion from dwarf galaxies</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
  </ul>
</div>
