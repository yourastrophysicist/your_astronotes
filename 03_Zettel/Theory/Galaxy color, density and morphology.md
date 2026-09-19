---
layout: "default"
title: "Galaxy color, density and morphology"
---
# Galaxy Color, Density and Morphology

Parent [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html) · [Color bimodality of galaxies](Color%20bimodality%20of%20galaxies.html) · [Pablo_02_Statistical_properties_of_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)

## 1. The Three Correlated Axes of Galaxy Populations

Galaxies in the universe do not populate parameter space randomly. Their physical properties are tightly coupled across three fundamental observational axes

1. Optical Color - Red sequence (quiescent, passively evolving, metal-rich spheroids) versus Blue cloud (star-forming, younger, gas-rich disks).
2. Morphology - Early-type galaxies (ellipticals E and lenticulars S0) versus Late-type galaxies (spirals Sa through Sd and irregulars Irr).
3. Environment and Local Density - Low-density field and cosmic voids ($\Sigma_{10} \lesssim 0.1 \text{ Mpc}^{-2}$) versus intermediate-density galaxy groups ($\Sigma_{10} \sim 1 - 10 \text{ Mpc}^{-2}$) versus high-density rich galaxy clusters ($\Sigma_{10} \sim 100 - 1000 \text{ Mpc}^{-2}$).

The observational couplings establish two major rules
- Color correlates with morphology - Early-type galaxies are predominantly red, while late-type galaxies are predominantly blue (Strateva et al. 2001, Hogg et al. 2004). Broadband color serves as an efficient photometric proxy for morphological type.
- Morphology and color correlate with density - Dense cluster environments are dominated by red, early-type galaxies, whereas low-density field regions are dominated by blue, star-forming spirals.

## 2. The Dressler (1980, 1997) Morphology-Density Relation

The cornerstone observational demonstration of environmental dependence is the morphology-density relation discovered by Alan Dressler (1980).

### Definition of Projected Local Galaxy Density

To quantify environment without assuming cluster symmetry, Dressler defined the projected surface number density $\Sigma_{10}$ using the distance to the 10th nearest neighboring galaxy brighter than a fixed absolute magnitude threshold (typically $M_V \le -20.4$)
$$\Sigma_{10} \equiv \frac{10}{\pi d_{10}^2}$$
where $d_{10}$ is the projected metric distance in Megaparsecs to the 10th neighbor.

### Quantitative Empirical Fractions Across Four Decades in Density

Plotting galaxy morphological fractions ($f_{\text{E}}, f_{\text{S0}}, f_{\text{Sp+Irr}}$) against $\log_{10}\Sigma_{10}$ reveals a monotonic, universal relation spanning over four orders of magnitude in projected density

1. Low-Density Field Regime ($\Sigma_{10} \lesssim 0.5 \text{ galaxies Mpc}^{-2}$)
   - Spiral and irregular fraction - $f_{\text{Sp+Irr}} \approx 80\%$ (dominant population).
   - Lenticular fraction - $f_{\text{S0}} \approx 10\% \text{ to } 15\%$.
   - Elliptical fraction - $f_{\text{E}} \approx 5\% \text{ to } 10\%$.

2. Intermediate-Density Group Regime ($\Sigma_{10} \sim 1 \text{ to } 10 \text{ galaxies Mpc}^{-2}$)
   - Spiral fraction steadily declines - $f_{\text{Sp}} \approx 50\%$.
   - S0 fraction steadily climbs - $f_{\text{S0}} \approx 35\%$.
   - Elliptical fraction grows modestly - $f_{\text{E}} \approx 15\%$.

3. High-Density Rich Cluster Core Regime ($\Sigma_{10} \gtrsim 100 \text{ galaxies Mpc}^{-2}$)
   - Spiral fraction drops precipitously - $f_{\text{Sp}} \lesssim 10\%$.
   - Elliptical fraction peaks - $f_{\text{E}} \approx 40\% \text{ to } 50\%$.
   - Lenticular fraction dominates - $f_{\text{S0}} \approx 40\% \text{ to } 50\%$.

### Redshift Evolution and the Origin of S0 Galaxies

Dressler et al. (1997) analyzed 10 clusters at intermediate redshift $z \sim 0.5$ using Hubble Space Telescope imaging, and Fasano et al. (2012) extended the analysis to local clusters through the WINGS survey
- At $z \sim 0.5$, the elliptical fraction $f_{\text{E}}$ in cluster cores was already comparable to its present-day value ($f_{\text{E}} \sim 30\% - 40\%$), demonstrating that massive ellipticals assembled early in cosmic history ($z > 2$).
- In contrast, the S0 fraction in clusters at $z \sim 0.5$ was smaller by a factor of 2 to 3 ($f_{\text{S0}} \sim 15\% - 20\%$), while the spiral fraction was correspondingly higher ($f_{\text{Sp}} \sim 40\% - 50\%$).
- Between $z \sim 0.5$ and $z = 0$, the spiral fraction in clusters dropped while the S0 fraction doubled. This evolutionary trend provides conclusive observational proof that the majority of cluster lenticulars are transformed spirals whose star formation was quenched and whose spiral arms were erased by cluster environmental processes.

## 3. Physical Mechanisms of Environmental Transformation

Why do dense environments extinguish star formation and alter galaxy morphology? The physical drivers divide into hydrodynamic processes (gas-gas interactions) and gravitational processes (tidal forces and stellar-gas collisions).

### Mechanism 1. Ram-Pressure Stripping (Gunn and Gott 1972)

As a spiral galaxy falls into a rich cluster at typical speeds $v \sim 1000 - 2000 \text{ km s}^{-1}$, it ploughs through the hot, diffuse Intracluster Medium (ICM) with electron density $n_e \sim 10^{-4} - 10^{-2} \text{ cm}^{-3}$ and temperature $T \sim 10^7 - 10^8 \text{ K}$.

The galaxy experiences an aerodynamic ram pressure exerted by the ICM
$$P_{\text{ram}} = \rho_{\text{ICM}} v^2$$
where $\rho_{\text{ICM}} = \mu m_p n_{\text{ICM}}$ is the mass density of the intracluster gas.

Opposing this ram pressure is the restoring gravitational force per unit area exerted by the galaxy stellar and gas disk. Following Gunn and Gott (1972), the gravitational anchoring force per unit area is
$$F_{\text{grav}} = 2\pi G \Sigma_*(R) \Sigma_g(R)$$
where $\Sigma_*(R)$ is the stellar surface mass density and $\Sigma_g(R)$ is the interstellar gas surface mass density at galactocentric radius $R$.

The Gunn-Gott condition for ram-pressure stripping states that cold interstellar gas is stripped from the disk at all radii where ram pressure exceeds gravitational binding
$$\rho_{\text{ICM}} v^2 > 2\pi G \Sigma_*(R) \Sigma_g(R)$$

Because $\Sigma_*(R) = \Sigma_0 e^{-R/R_d}$ and $\Sigma_g(R)$ decline exponentially with radius, the gravitational restoring force is weakest in the outer galactic disk.

Setting $P_{\text{ram}} = F_{\text{grav}}$ defines the truncation radius $R_{\text{strip}}$
$$R_{\text{strip}} \approx \frac{R_d}{2} \ln\left[\frac{2\pi G \Sigma_{*,0} \Sigma_{g,0}}{\rho_{\text{ICM}} v^2}\right]$$

Gas at $R > R_{\text{strip}}$ is swept backward out of the potential well, forming elongated tails of stripped neutral and ionized gas (jellyfish galaxies observed in Coma, Virgo, and WINGS clusters). Star formation ceases immediately outside $R_{\text{strip}}$, producing truncated H-alpha and H I disks.

### Mechanism 2. Strangulation and Starvation (Larson, Tinsley and Caldwell 1980)

In lower-density environments or during initial cluster infall, the ram pressure may not be strong enough to overcome the dense, thin cold gas disk ($P_{\text{ram}} < 2\pi G \Sigma_* \Sigma_g$), but it easily strips the tenuous, extended hot gas halo reservoir surrounding the galaxy.

Without this hot halo reservoir to replenish the interstellar medium via cooling, the galaxy exhausts its existing cold gas reservoir via star formation on the gas depletion timescale
$$\tau_{\text{depl}} = \frac{M_{\text{gas}}}{\text{SFR}} \approx 1 \text{ to } 2 \text{ Gyr}$$

Once the gas is consumed, star formation terminates gently. Because star formation dies out gradually over $\sim 1 \text{ Gyr}$, the galaxy preserves its smooth stellar disk and becomes an S0 lenticular galaxy without undergoing violent structural disruption.

### Mechanism 3. Galaxy Harassment (Moore et al. 1996)

In rich cluster cores, galaxies do not merge because their relative encounter velocities ($\Delta v \sim \sqrt{2} \sigma_{\text{cl}} \approx 1500 \text{ km s}^{-1}$) greatly exceed the stellar internal velocity dispersions ($\sigma_* \sim 150 \text{ km s}^{-1}$).

Instead, galaxies undergo repeated, rapid, high-speed tidal encounters with other cluster members and with the global cluster tidal field. In the impulse approximation, the velocity perturbation delivered to stars during an encounter with impact parameter $b$ and relative speed $V$ is
$$\Delta \mathbf{v} \approx \frac{2 G M_{\text{pert}}}{b^2 V} \mathbf{b}$$

The energy injected per unit mass is $\Delta E \approx \frac{1}{2} |\Delta \mathbf{v}|^2 \propto b^{-4} V^{-2}$. Over billions of years, the cumulative effect of hundreds of impulsive encounters heats the disk dynamically
- Thickens the disk vertically, increasing vertical scale height $z_0$.
- Drives gravitational bar instabilities that funnel remaining gas into the nucleus, feeding nuclear starbursts.
- Strips loosely bound outer disk stars, transforming fragile, low-surface-brightness late-type spirals into dwarf ellipticals (dE) or dwarf spheroidals (dSph).

### Mechanism 4. Preprocessing in Galaxy Groups

Because the galaxy merger cross section scales inversely with relative velocity ($\sigma_{\text{merger}} \propto V^{-4}$), major mergers occur almost exclusively in low-velocity-dispersion galaxy groups ($\sigma_{\text{group}} \sim 150 - 300 \text{ km s}^{-1}$), rather than in rich clusters ($\sigma_{\text{cluster}} \sim 1000 \text{ km s}^{-1}$).

Since cosmological structure formation is hierarchical, rich clusters are continuously assembled by accreting pre-existing galaxy groups. Galaxies are often preprocessed (quenched, merged into ellipticals, or stripped of gas) inside groups before they ever cross the cluster virial radius.

## 4. Projected Phase-Space Diagrams in Galaxy Clusters

To reconstruct the environmental history and infall trajectory of individual galaxies, modern cluster studies plot projected phase-space diagrams
- Abscissa - Projected cluster-centric distance normalized to the virial radius, $R / R_{200}$.
- Ordinate - Relative line-of-sight velocity normalized to cluster velocity dispersion, $|\Delta v| / \sigma_{\text{cl}} = |v_{\text{gal}} - v_{\text{cluster}}| / \sigma_{\text{cl}}$.

### The Characteristic Regions of Projected Phase-Space

1. The Virialized Core Trumpet ($R / R_{200} \lesssim 0.5$, $|\Delta v| / \sigma \lesssim 1.2$)
   - Occupies the triangular or trumpet-shaped region bounded by the local escape velocity curve $v_{\text{esc}}(R) = \sqrt{2 |\Phi(R)|}$.
   - Galaxies here entered the cluster several gigayears ago ($t_{\text{infall}} > 3 - 5 \text{ Gyr}$) and are dynamically relaxed.
   - Dominated entirely by quiescent, red, gas-deficient E and S0 galaxies.

2. Recent Infall Population ($R / R_{200} \sim 1.0 - 2.0$, $|\Delta v| / \sigma \sim 1.5 - 3.0$)
   - Galaxies falling into the cluster for the first time on radial or eccentric orbits.
   - Dominated by gas-rich, star-forming blue spirals experiencing the maximum onset of ram pressure and tidal compression.

3. Backsplash Population ($R / R_{200} \sim 1.0 - 1.5$, $|\Delta v| / \sigma \lesssim 1.0$)
   - Galaxies that have executed a pericentric passage through the dense cluster core and are now near their first orbital apocenter outside $R_{200}$.
   - Photometrically and kinematically distinct from true field galaxies - Although located at large cluster-centric radii, they are gas-poor, quenched, and exhibit disturbed morphologies from their previous core transit.

4. Post-Starburst (E+A / k+a) Galaxies
   - Display prominent hydrogen Balmer absorption lines (A-star stellar population, lifetime $\lesssim 1 \text{ Gyr}$) but no optical emission lines ([O II], H-alpha).
   - Preferentially located at intermediate radii ($R / R_{200} \sim 0.3 - 0.7$), tracing the rapid quenching of star formation that occurred approximately $0.5 - 1.5 \text{ Gyr}$ after initial pericenter passage.

## 5. Blackboard Observational Graphs and Sketches

### Graph 1. The Dressler (1980) Morphology-Density Relation

```
  Morphological Fraction f
    1.0 +
        |
    0.8 |  \======\ (Spirals + Irregulars)
        |          \
    0.6 |           \
        |            \
    0.4 |             \                 /======/ (Lenticulars S0)
        |              \======\        /
    0.2 |                      \======/======/ (Ellipticals E)
        |      /======/===============/
    0.0 +============================================================>
        -1.0         0.0         +1.0        +2.0        +3.0
        (Field)                (Groups)              (Cluster Cores)
                         log10 Sigma_10 (galaxies / Mpc^2)
```

Blackboard presentation notes
- Field limit ($\log_{10}\Sigma_{10} < 0$) - Spirals dominate ($f_{\text{Sp}} \approx 80\%$), while E and S0 make up only $\approx 10\%$ each.
- Group crossover ($\log_{10}\Sigma_{10} \sim 1$) - Spiral fraction drops to $\approx 50\%$, S0s rise to $\approx 35\%$.
- Core limit ($\log_{10}\Sigma_{10} > 2$) - Spirals plummet below $10\%$, while S0 and E each reach $\approx 45\%$.

### Graph 2. Projected Phase-Space Diagram of a Rich Galaxy Cluster

```
  |Delta v| / sigma_cl
     ^
 3.0 |          * *  (Recent Infall - Blue spirals on radial plunging orbits)
     |        *     *
 2.0 |  \   *         *   *
     |   \ *                 *    Stripping Boundary (P_ram > 2 pi G Sigma_* Sigma_g)
 1.0 |    (  Virialized Core   )  . . . . . . . . . . . . . . . . . . . . . . . . . .
     |    (  Red E + S0        )              ( Backsplash - Quenched at apocenter )
 0.0 +==============================================================================>
     0.0             0.5             1.0             1.5             2.0  R / R_200
```

Key quantitative takeaways for the blackboard
- Inside $R / R_{200} \le 0.5$ - Virialized trumpet, ancient residents, 100% processed.
- At $R / R_{200} \approx 1 - 2$, high $|\Delta v| / \sigma$ - Infalling field galaxies entering the ICM shock front.
- At $R / R_{200} \approx 1 - 1.5$, low $|\Delta v| / \sigma$ - Backsplash galaxies, quenched in the core and flung outward.

## 6. Exact Course Citations and Literature Provenance

- Dressler, Alan (1980), Galaxy morphology in rich clusters - Implications for the formation and evolution of galaxies, The Astrophysical Journal, volume 236, pages 351 to 365 - Original discovery of the morphology-density relation using 55 rich clusters.
- Dressler, Alan, et al. (1997), Evolution among cluster galaxies, The Astrophysical Journal, volume 490, pages 577 to 591 - HST study of 10 clusters at $z \sim 0.5$ revealing the spiral-to-S0 evolution.
- Fasano, Giovanni, et al. (2012), The WINGS survey - Morphological fractions in local clusters, Monthly Notices of the Royal Astronomical Society, volume 423, pages 2498 to 2516 - Definitive local cluster morphology-density and morphology-radius calibrations.
- Gunn, J. E., and J. Richard Gott III (1972), On the Infall of Matter into Clusters of Galaxies and Some Effects on Their Evolution, The Astrophysical Journal, volume 176, pages 1 to 19 - Mathematical formulation of the ram-pressure stripping condition.
- Larson, R. B., B. M. Tinsley, and C. N. Caldwell (1980), The Astrophysical Journal, volume 237, pages 692 to 707 - Theory of starvation and strangulation.
- Moore, Ben, et al. (1996), Nature, volume 379, pages 613 to 616 - Theory and simulations of galaxy harassment.
- Mo, Houjun, Frank van den Bosch, and Simon White (2010), Galaxy Formation and Evolution, Cambridge University Press
  - Chapter 2 Observational Overview, Section 2.5 The Environmental Dependence of Galaxy Properties, pages 89 to 94 - Morphology-density relation, projected densities, and color-density trends.
  - Chapter 12 Statistical Properties of Galaxy Populations, Section 12.3 Environmental Correlations, pages 580 to 595 - Blanton & Moustakas review, red fraction vs local density.
  - Chapter 13 Interactions and Mergers, Section 13.5 Hydrodynamic Interactions with Hot Halo Gas, pages 630 to 642 - Derivation of ram-pressure stripping and strangulation.
- Course lecture notes and slides (Prof. Alessandro Pizzella)
  - Dispensa dispense_LF1_1_eng-1.pdf
    - Section 6 Morphology-Density Relation, pages 25 to 27 - Empirical curves, local projected density definitions, and environmental quenching.
  - Student course document Astrophysics_of_Galaxies.tex
    - Section 2.12 Morphology-Density Relation, pages 25 to 27.
    - Section 5.8 Morphology-Density Relation in Clusters, pages 38 to 40.
    - Section 5.9 Morphological Fractions vs Cluster-Centric Radius, pages 40 to 41.
    - Section 5.10 The WINGS Survey, pages 41 to 42.
    - Section 5.11 Phase-Space Diagrams, pages 42 to 43.
    - Section 5.12 Ram-Pressure Stripping, pages 43 to 44.
    - Section 5.13 Post-Starburst Galaxies in Clusters, page 44.
  - Reference lecture slides
    - dressler1997_morph_density.png - Original HST morphology-density curves at $z = 0$ vs $z = 0.5$.
    - fasano2012_morph_density.png - WINGS morphology-density relation.
    - fasano2012_morph_radius.png - WINGS morphological fractions vs $R / R_{200}$.
    - fasano2012_morph_fractions.png - Morphological fractions vs cluster velocity dispersion and X-ray luminosity.
    - gal_morph-40.png to gal_morph-47.png - Lecture slides on environmental effects.

---

## Connections

- Statistical properties - [Color bimodality of galaxies](Color%20bimodality%20of%20galaxies.html), [Red sequence and blue cloud](Red%20sequence%20and%20blue%20cloud.html)
- Transformation mechanisms - [Galaxy mergers and SF](Galaxy%20mergers%20and%20SF.html), [Green valley and quenching tracks](Green%20valley%20and%20quenching%20tracks.html)
- Environmental scaling - [Halo gravity suppression of galaxy formation](Halo%20gravity%20suppression%20of%20galaxy%20formation.html), [LF by morphology and SED](LF%20by%20morphology%20and%20SED.html)

---

## Lecture Slides and Reference Figures (Prof. Alessandro Pizzella)

![dressler1997_morph_density.png](../../assets/images/dressler1997_morph_density.png)
*Morphology-Density Relation from Dressler (1997) - fraction of E, S0, and Sp vs local galaxy density.*

![fasano2012_morph_fractions.png](../../assets/images/fasano2012_morph_fractions.png)
*Evolution of morphological fractions in clusters from Fasano et al. (2012).*

![fasano2012_morph_density.png](../../assets/images/fasano2012_morph_density.png)
*Morphology-density relation at low vs high redshift (Fasano et al. 2012).*

![fasano2012_morph_radius.png](../../assets/images/fasano2012_morph_radius.png)
*Morphological fractions as a function of cluster-centric radius.*

---

## Additional Lecture Slides (Prof. Alessandro Pizzella)

![gal_morph-40.png](../../assets/images/gal_morph-40.png)

![gal_morph-41.png](../../assets/images/gal_morph-41.png)

![gal_morph-42.png](../../assets/images/gal_morph-42.png)

![gal_morph-43.png](../../assets/images/gal_morph-43.png)

![gal_morph-44.png](../../assets/images/gal_morph-44.png)

![gal_morph-45.png](../../assets/images/gal_morph-45.png)

![gal_morph-46.png](../../assets/images/gal_morph-46.png)

![gal_morph-47.png](../../assets/images/gal_morph-47.png)

![dressler1997_cluster_images.png](../../assets/images/dressler1997_cluster_images.png)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (15)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Alpha-Fe%20enhancement.html" class="backlink-item">Alpha-Fe enhancement</a></li>
    <li class="backlink-item-wrap"><a href="Color%20bimodality%20of%20galaxies.html" class="backlink-item">Color bimodality of galaxies</a></li>
    <li class="backlink-item-wrap"><a href="Coma%20cluster.html" class="backlink-item">Coma cluster</a></li>
    <li class="backlink-item-wrap"><a href="Eigenspectra%20and%20spectral%20types.html" class="backlink-item">Eigenspectra and spectral types</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20mergers%20and%20SF.html" class="backlink-item">Galaxy mergers and SF</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20spectroscopy%20by%20type.html" class="backlink-item">Galaxy spectroscopy by type</a></li>
    <li class="backlink-item-wrap"><a href="Green%20valley%20and%20quenching%20tracks.html" class="backlink-item">Green valley and quenching tracks</a></li>
    <li class="backlink-item-wrap"><a href="H%20I%20regions.html" class="backlink-item">H I regions</a></li>
    <li class="backlink-item-wrap"><a href="Halo%20gravity%20suppression%20of%20galaxy%20formation.html" class="backlink-item">Halo gravity suppression of galaxy formation</a></li>
    <li class="backlink-item-wrap"><a href="Hubble%20morphological%20sequence.html" class="backlink-item">Hubble morphological sequence</a></li>
    <li class="backlink-item-wrap"><a href="LF%20by%20morphology%20and%20SED.html" class="backlink-item">LF by morphology and SED</a></li>
    <li class="backlink-item-wrap"><a href="Red%20sequence%20and%20blue%20cloud.html" class="backlink-item">Red sequence and blue cloud</a></li>
    <li class="backlink-item-wrap"><a href="Virgo%20cluster.html" class="backlink-item">Virgo cluster</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
  </ul>
</div>

