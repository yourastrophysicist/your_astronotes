---
layout: "default"
title: "VLTI Very Large Telescope Interferometer"
---
{% raw %}
# VLTI Very Large Telescope Interferometer

ESO's optical/IR interferometer at Cerro Paranal in Chile. four 8m Unit Telescopes (UTs) and four 1.8m Auxiliary Telescopes (ATs) combined coherently, with baselines from 8m to 130m. workhorse of mid-2000s-onward optical interferometry.

## the architecture

- **4 × 8m UTs** (Antu, Kueyen, Melipal, Yepun): the main telescopes of the VLT, also operating individually as one of the world's premier 8m optical telescopes
- **4 × 1.8m ATs** (relocatable): smaller, movable around 30 stations in the Paranal plain
- **delay-line tunnels**: 65m vacuum tunnels connecting the telescopes to the central beam-combiner facility
- **central beam-combiner laboratory**: hosts the fringe trackers and science instruments
- **multiple instruments**: AMBER (decommissioned), MIDI (decom.), GRAVITY (current), MATISSE (current), PIONIER (visitor)

## the unique features

three things make VLTI special:

### 1. AO at every telescope

each UT has an AO system (NAOS-CONICA for UT4, MACAO for the others). this corrects atmospheric phase distortion *at each telescope*, allowing the full 8m aperture to contribute coherently — instead of the effective $r_0 \sim 60$ cm patch.

without AO, VLTI would be impossibly faint-limited. with AO, it reaches K = 12 routinely.

### 2. baseline range

UTs have fixed positions (8 m to 130 m baselines). ATs can be relocated, providing baselines from 8m to 200m, with continuously variable orientations. excellent (u, v) coverage with Earth rotation.

### 3. dual-feed for off-axis fringe tracking

VLTI's design includes "dual-feed" inputs: separate fringe-tracking and science instrument paths. lets fringe-tracking on a bright off-axis star coexist with science-on-target observations. essential for GRAVITY's astrometry of faint targets like the Galactic Center stars.

## the science instruments (current)

### GRAVITY (since 2016)

K-band (2.0-2.4 μm) integrated-optics interferometer for astrometry and imaging.

- 4 telescopes → 6 baselines simultaneously
- spectral resolution: low (R=22), medium (R=500), high (R=4500)
- astrometric precision: $\sim 50$ μas in 5-min integrations
- imaging resolution: $\sim 3$ mas

flagship science:
- **Galactic Center**: orbits of S-stars around Sgr A*, GRAVITY-detected gravitational redshift and orbital precession (predicted by GR), Schwarzschild precession of S2 measured 2020
- **AGN**: BLR sizes and structures of nearby type-I AGN
- **YSOs**: inner-disk structure of Herbig Ae/Be stars

### MATISSE (since 2018)

mid-IR (3-13 μm) interferometer. covers L, M, N bands, where many dust/molecular features lie.

- 4 telescopes → 6 baselines
- spectral coverage: 3.5-4.0 μm, 4.6-5.0 μm, 8-13 μm
- imaging resolution: $\sim 3$-15 mas (depending on band)

flagship science:
- **dust-shell structure** in late-type stars and Wolf-Rayets
- **circumstellar disks** in YSOs and AGN
- **planet-disk interactions** in protoplanetary disks

## the science legacy

VLTI has produced (selectively):

- **first direct imaging** of the Galactic Center S-cluster with mas resolution (GRAVITY 2018)
- **first detection** of gravitational redshift in a non-test-mass object (S2 at Sgr A*, GRAVITY 2018)
- **first direct measurement** of Schwarzschild precession of an orbit (S2, GRAVITY 2020)
- **first images** of stellar surfaces of multiple cool giant stars (PIONIER, MATISSE)
- **first images** of inner protoplanetary disks at AU scale (PIONIER, GRAVITY)

these results put VLTI/GRAVITY among the most scientifically productive interferometers ever.

## the photon throughput

end-to-end throughput of VLTI/GRAVITY: ~5-10% of source photons reach the detector. losses come from:
- atmospheric absorption: ~30%
- mirror reflectivity: ~50% (after 8 surfaces)
- beam-line absorption: ~5%
- fiber coupling: ~30%
- detector QE: ~70% (HAWAII-2RG)

so a $K = 12$ source gives $\sim 10^4$ photons/s reaching the detector — enough for fringe tracking with ms integrations.

## the future: GRAVITY+

upgraded GRAVITY (2024+) brings:

- **laser guide stars** at all four UTs → fainter targets
- **wider isoplanatic angle** with multi-conjugate AO → fainter fringe-tracking stars
- **higher precision astrometry** (~10 μas)
- **broader sky coverage**

extends VLTI's reach: targets like AGN nuclei at $z = 0.3$ become accessible.

## comparison with CHARA

| feature | VLTI | CHARA |
|---|---|---|
| number of telescopes | 4 UT + 4 AT | 6 |
| telescope size | 8m UT, 1.8m AT | 1m |
| max baseline | 130m UT, 200m AT | 330m |
| location | Paranal, Chile | Mt. Wilson, USA |
| typical wavelength | K, L, M, N | H, K |
| sensitivity | very high (8m UTs) | moderate (1m) |
| baseline range | 8-200m | 33-330m |
| (u, v) coverage | very good with rotation | excellent (6 telescopes) |
| flagship science | Galactic Center, AGN | stellar surfaces |

VLTI dominates faint-target science (sensitivity from the UTs); CHARA dominates resolved-stellar-surface imaging (longer baselines, more telescopes).

## scientific figure

![07_Images/Interferometry/vlti_delay_line_eso9811a.jpg](../../../assets/images/vlti_delay_line_eso9811a.jpg)

reading cue: VLTI depends on delay lines because the telescopes are separated across Paranal but the beams must meet with matched optical path length in the interferometric laboratory.

source: ESO image eso9811a, VLTI delay line schematic.

## see also

- [Components of a modern interferometer](./Components%20of%20a%20modern%20interferometer.html)
- [CHARA array](./CHARA%20array.html)
- [Adaptive optics](./Adaptive%20optics.html)
- [Fringe tracking](./Fringe%20tracking.html)
- [Galactic Center Sgr A and S-stars](./Galactic%20Center%20Sgr%20A%20and%20S-stars.html)
- [Astronomical_Interferometry_MOC](../../../04_Atlas/Astronomical_Interferometry_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (33)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./AGN%20and%20supermassive%20black%20holes.html" class="backlink-item">AGN and supermassive black holes</a></li>
    <li class="backlink-item-wrap"><a href="../AGN%20and%20supermassive%20black%20holes.html" class="backlink-item">AGN and supermassive black holes</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astronomical_Interferometry_MOC.html" class="backlink-item">Astronomical_Interferometry_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../Beam%20combiners.html" class="backlink-item">Beam combiners</a></li>
    <li class="backlink-item-wrap"><a href="./Binary%20star%20orbits.html" class="backlink-item">Binary star orbits</a></li>
    <li class="backlink-item-wrap"><a href="../Binary%20star%20orbits.html" class="backlink-item">Binary star orbits</a></li>
    <li class="backlink-item-wrap"><a href="./CHARA%20array.html" class="backlink-item">CHARA array</a></li>
    <li class="backlink-item-wrap"><a href="../CHARA%20array.html" class="backlink-item">CHARA array</a></li>
    <li class="backlink-item-wrap"><a href="./Components%20of%20a%20modern%20interferometer.html" class="backlink-item">Components of a modern interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../Components%20of%20a%20modern%20interferometer.html" class="backlink-item">Components of a modern interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../Delay%20lines%20and%20path-length%20equalization.html" class="backlink-item">Delay lines and path-length equalization</a></li>
    <li class="backlink-item-wrap"><a href="./Delay%20lines%20and%20path-length%20equalization.html" class="backlink-item">Delay lines and path-length equalization</a></li>
    <li class="backlink-item-wrap"><a href="./Dust%20shells%20and%20Wolf-Rayet%20stars.html" class="backlink-item">Dust shells and Wolf-Rayet stars</a></li>
    <li class="backlink-item-wrap"><a href="../Dust%20shells%20and%20Wolf-Rayet%20stars.html" class="backlink-item">Dust shells and Wolf-Rayet stars</a></li>
    <li class="backlink-item-wrap"><a href="../Exoplanet%20imaging.html" class="backlink-item">Exoplanet imaging</a></li>
    <li class="backlink-item-wrap"><a href="./Exoplanet%20imaging.html" class="backlink-item">Exoplanet imaging</a></li>
    <li class="backlink-item-wrap"><a href="./Figure%20bank%20-%20interferometry.html" class="backlink-item">Figure bank - interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../Figure%20bank%20-%20interferometry.html" class="backlink-item">Figure bank - interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../Future%20ground-based%20optical.html" class="backlink-item">Future ground-based optical</a></li>
    <li class="backlink-item-wrap"><a href="./Future%20ground-based%20optical.html" class="backlink-item">Future ground-based optical</a></li>
    <li class="backlink-item-wrap"><a href="../Galactic%20Center%20Sgr%20A%20and%20S-stars.html" class="backlink-item">Galactic Center Sgr A and S-stars</a></li>
    <li class="backlink-item-wrap"><a href="./Galactic%20Center%20Sgr%20A%20and%20S-stars.html" class="backlink-item">Galactic Center Sgr A and S-stars</a></li>
    <li class="backlink-item-wrap"><a href="./Heterodyne%20vs%20direct%20detection.html" class="backlink-item">Heterodyne vs direct detection</a></li>
    <li class="backlink-item-wrap"><a href="../Keck%20interferometer.html" class="backlink-item">Keck interferometer</a></li>
    <li class="backlink-item-wrap"><a href="./Keck%20interferometer.html" class="backlink-item">Keck interferometer</a></li>
    <li class="backlink-item-wrap"><a href="./Large%20Binocular%20Telescope%20LBT.html" class="backlink-item">Large Binocular Telescope LBT</a></li>
    <li class="backlink-item-wrap"><a href="../Large%20Binocular%20Telescope%20LBT.html" class="backlink-item">Large Binocular Telescope LBT</a></li>
    <li class="backlink-item-wrap"><a href="./Optimal%20array%20geometry.html" class="backlink-item">Optimal array geometry</a></li>
    <li class="backlink-item-wrap"><a href="../Space%20and%20ground%20facilities%20relevant%20for%20OC.html" class="backlink-item">Space and ground facilities relevant for OC</a></li>
    <li class="backlink-item-wrap"><a href="../Stellar%20diameters%20and%20limb%20darkening.html" class="backlink-item">Stellar diameters and limb darkening</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20surface%20imaging.html" class="backlink-item">Stellar surface imaging</a></li>
    <li class="backlink-item-wrap"><a href="./Young%20stellar%20object%20disks.html" class="backlink-item">Young stellar object disks</a></li>
    <li class="backlink-item-wrap"><a href="../Young%20stellar%20object%20disks.html" class="backlink-item">Young stellar object disks</a></li>
  </ul>
</div>
