---
layout: "default"
title: "Bullet Cluster and dark matter mapping"
---
# Bullet Cluster and dark matter mapping

The colliding galaxy cluster 1E 0657-56 ($z = 0.296$), widely designated as the Bullet Cluster, provides the most direct and definitive empirical proof for the existence of non-baryonic, collisionless dark matter in the universe. Observed approximately $100$ Myr following a high-velocity supersonic head-on merger ($v_{\rm collision} \approx 4500$ km/s) in the plane of the sky, the system exhibits an unambiguous spatial separation between the three major matter components. The collisional, hot intracluster gas ($T \sim 10^8$ K), which contains roughly $80\%$ to $90\%$ of all baryonic matter, was decelerated by hydrodynamic ram-pressure drag, forming a prominent Mach 3 bow shock that lags behind in the center. In contrast, the collisionless galaxies and the primary gravitational potential wells (reconstructed via weak and strong gravitational lensing) passed straight through each other unhindered. The resulting $> 8\sigma$ spatial offset between the baryonic gas peaks and the gravitational mass peaks deals a fatal blow to pure modified gravity theories (such as standard MOND and TeVeS) that attempt to explain astrophysical mass discrepancies without particle dark matter. In addition, the survival of the merging sub-cluster places a stringent upper bound on the self-interaction cross section of dark matter particles of $\sigma_{\rm DM}/m < 1.25 \text{ cm}^2 \text{ g}^{-1}$.

---

## 1. Astrophysical Context and System Geometry

### Anatomy of 1E 0657-56
The Bullet Cluster consists of a main cluster of mass $M_{\rm main} \sim 1.5 \times 10^{15} M_\odot$ and a smaller sub-cluster (the bullet) of mass $M_{\rm sub} \sim 2 \times 10^{14} M_\odot$ (mass ratio approximately $10 - 1$). The merger axis is oriented nearly perpendicular to our line of sight (inclination angle $i \lesssim 10^\circ-15^\circ$), presenting an ideal laboratory for projected transverse spatial separation.
The physical parameters of the collision include
- Redshift $z = 0.296$, corresponding to an angular diameter distance of $D_A \approx 930$ Mpc ($1'' \approx 4.5$ kpc).
- Collision velocity $v_{\rm coll} \approx 4500 - 4700 \text{ km s}^{-1}$, inferred from the Rankine-Hugoniot jump conditions across the X-ray shock front.
- Time since core passage $t_{\rm post} \approx 100 - 150$ Myr.
- Current projected separation between the main cluster mass peak and the bullet mass peak $\Delta x \approx 0.72$ Mpc.

---

## 2. Microscopic and Hydrodynamic Physics of the Three Matter Components

The decisive power of the Bullet Cluster stems from the fundamentally contrasting collisional properties of its three constituent components

```
+========================================================================================+
| Component          | Physical State    | Interaction Cross Section | Spatial Behavior  |
+========================================================================================+
| 1. Galaxies        | Stars in clusters | Collisionless             | Passes through    |
| 2. Intracluster Gas| Ionized H/He      | Collisional (Coulomb drag)| Decelerates / Lags|
| 3. Dark Matter Halo| Non-baryonic WIMP | Collisionless (Weak only) | Passes through    |
+========================================================================================+
```

### Component 1 - Collisionless Optical Galaxies
Galaxies are composed of discrete stars. Consider a stellar population where each star has radius $R_\odot \approx 6.96 \times 10^{10}$ cm and mass $M_\odot \approx 1.99 \times 10^{33}$ g.
The physical geometric cross section per unit mass is
$$\frac{\sigma_*}{m_*} = \frac{\pi R_\odot^2}{M_\odot} \approx \frac{\pi \times (6.96 \times 10^{10} \text{ cm})^2}{1.989 \times 10^{33} \text{ g}} \approx 7.65 \times 10^{-12} \text{ cm}^2 \text{ g}^{-1}$$
In a cluster core with a high stellar surface mass density of $\Sigma_* \sim 0.1 \text{ g cm}^{-2} \approx 500 M_\odot \text{ pc}^{-2}$, the optical depth for direct physical collisions between stars during the cluster crossing is
$$\tau_* = \Sigma_* \left(\frac{\sigma_*}{m_*}\right) \sim 0.1 \text{ g cm}^{-2} \times (7.65 \times 10^{-12} \text{ cm}^2 \text{ g}^{-1}) \sim 7.6 \times 10^{-13} \ll 1$$
The mean free path between direct stellar collisions is
$$\lambda_* = \frac{1}{n_* \sigma_*} \sim 10^8 \text{ pc} \gg R_{\rm cluster} \sim 1 \text{ Mpc}$$
Consequently, the optical galaxies behave as a purely collisionless fluid, passing through the collision zone completely unaffected by physical drag.

### Component 2 - Collisional Intracluster Medium (ICM) Gas
The intracluster gas is a fully ionized hydrogen-helium plasma at $T \sim 10^8$ K ($k_B T \approx 14$ keV) with electron number density $n_e \sim 10^{-3} \text{ cm}^{-3}$.
Protons interact via Coulomb scattering with cross section
$$\sigma_C \approx \frac{4\pi e^4}{(k_B T)^2} \ln\Lambda \sim 10^{-15} \text{ cm}^2$$
The mean free path of ions in the plasma is
$$\lambda_{\rm gas} = \frac{1}{n_e \sigma_C} \sim \frac{1}{(10^{-3} \text{ cm}^{-3}) \times (10^{-15} \text{ cm}^2)} \sim 10^{18} \text{ cm} \approx 0.3 \text{ pc}$$
Because $\lambda_{\rm gas} \ll R_{\rm cluster} \sim 1$ Mpc, the gas behaves as a classical hydrodynamic fluid.
When the two cluster gas clouds collide at $v_{\rm coll} \approx 4500$ km/s, the ram pressure exerted by the gas is
$$P_{\rm ram} = \rho_{\rm ICM} v_{\rm coll}^2$$
This ram pressure produces a dramatic supersonic bow shock. The sound speed in the $14$ keV plasma is
$$c_s = \sqrt{\frac{\gamma k_B T}{\mu m_p}} \approx \sqrt{\frac{(5/3) \times (1.38 \times 10^{-16} \text{ erg K}^{-1}) \times (1.6 \times 10^8 \text{ K})}{0.6 \times (1.67 \times 10^{-24} \text{ g})}} \approx 1550 \text{ km s}^{-1}$$
The Mach number of the shock is
$$\mathcal{M} = \frac{v_{\rm shock}}{c_s} \approx \frac{4700 \text{ km s}^{-1}}{1550 \text{ km s}^{-1}} \approx 3.0 \pm 0.4$$
Under the Rankine-Hugoniot shock jump conditions, the density and temperature jump across the shock front by
$$\frac{\rho_2}{\rho_1} = \frac{(\gamma + 1) \mathcal{M}^2}{(\gamma - 1) \mathcal{M}^2 + 2} = \frac{(8/3) \times 9}{(2/3) \times 9 + 2} = \frac{24}{8} = 3.0$$
$$\frac{T_2}{T_1} = \frac{[2\gamma \mathcal{M}^2 - (\gamma - 1)][(\gamma - 1)\mathcal{M}^2 + 2]}{(\gamma + 1)^2 \mathcal{M}^2} \approx 2.8$$
The X-ray gas experienced severe dissipative drag, lost its orbital kinetic energy, and was stripped from the galaxies, coming to rest near the center of mass of the system.

### Component 3 - Gravitational Mass Reconstructed via Lensing
Gravitational lensing is sensitive solely to the projected total gravitational potential $\Phi$, independent of the baryonic or non-baryonic state of the matter.
The dimensionless convergence $\kappa(\mathbf{\theta})$ relates directly to the surface mass density $\Sigma(\mathbf{\theta})$
$$\kappa(\mathbf{\theta}) = \frac{\Sigma(\mathbf{\theta})}{\Sigma_{\rm crit}}$$
where the critical surface mass density depends on the cosmological angular diameter distances to the lens $D_l$, to the source $D_s$, and between lens and source $D_{ls}$
$$\Sigma_{\rm crit} = \frac{c^2}{4\pi G} \frac{D_s}{D_l D_{ls}}$$
The complex gravitational shear $\gamma(\mathbf{\theta}) = \gamma_1 + i \gamma_2$ is measured from the quadrupole shape distortions of thousands of faint background galaxies. Using the non-local Kaiser & Squires (1993) inversion
$$\kappa(\mathbf{\theta}) = \frac{1}{\pi} \int \mathcal{D}^*(\mathbf{\theta} - \mathbf{\theta}') \gamma(\mathbf{\theta}') d^2\theta'$$
where the convolution kernel is $\mathcal{D}(\mathbf{\theta}) = \frac{\theta_1^2 - \theta_2^2 + 2 i \theta_1 \theta_2}{|\mathbf{\theta}|^4}$.
Strong gravitational lensing arcs observed with HST near the cluster core provide absolute calibration of $\Sigma(\mathbf{\theta})$ without mass-sheet degeneracy.

---

## 3. The Decisive Empirical Falsification of Pure Modified Gravity

### The Baryon Budget Paradox
In rich galaxy clusters, the inventory of baryonic mass is quantitatively known from optical photometry and X-ray spectrophotometry
- Stars in galaxies account for approximately $10\%$ to $15\%$ of the baryonic mass.
- Hot intracluster X-ray plasma accounts for approximately $85\%$ to $90\%$ of the baryonic mass.
- Cold neutral and molecular gas is negligible ($< 1\%$).

Therefore, in the Bullet Cluster, the vast majority of baryonic matter resides in the X-ray gas clouds sitting in the center.

### The Modified Gravity Prediction vs Observation
In any modified gravity theory where dark matter particles do not exist (including standard Milgrom MOND, Bekenstein's relativistic TeVeS, or Moffat's MOG), the gravitational potential is governed by the distribution of visible baryonic matter via a modified Poisson equation
$$\nabla \cdot \left[ \mu\left(\frac{|\nabla\Phi|}{a_0}\right) \nabla\Phi \right] = 4\pi G \rho_{\rm baryon}$$
Because $\rho_{\rm baryon}$ is heavily dominated by the X-ray plasma ($85-90\%$), the center of the gravitational potential well $\Phi$ MUST coincide with the center of the X-ray gas distribution.

```
MODIFIED GRAVITY PREDICTION        ACTUAL ASTRONOMICAL OBSERVATION
(Gravity sourced by baryons)       (Clowe et al. 2006, Bradac et al. 2006)

[Galaxy Peak]                      [Galaxy Peak]
    |                                  |
    |                                  +=== [LENSING MASS PEAK] (8 sigma offset!)
    |                                  |
[X-RAY GAS PEAK]                   [X-RAY GAS PEAK]
    +=== [POTENTIAL WELL]              | (Contains 85% of baryons,
    |                                  |  yet has negligible lensing mass!)
```

The observations of Clowe et al. (2006) revealed
1. The weak and strong lensing mass peaks are centered directly on the collisionless optical galaxies.
2. The spatial offset between the X-ray gas peaks and the gravitational mass peaks is $\Delta r \approx 150$ kpc in the bullet component and $\Delta r \approx 200$ kpc in the main component.
3. The statistical significance of this spatial offset exceeds $8\sigma$.
4. The lensing mass peaks cannot be explained by any plausible modification of the gravitational force law acting on the baryonic distribution, because the potential wells reside where the baryons are NOT.

Even if MOND is supplemented with massive sterile neutrinos of mass $m_\nu \approx 2$ eV (Angus et al. 2007), the neutrinos behave precisely as collisionless particle dark matter, validating the fundamental premise of the dark matter paradigm.

---

## 4. Constraint on Dark Matter Self-Interaction Cross Section

Because the dark matter sub-halo of the bullet cluster survived the collision without being stripped or significantly decelerated relative to the optical galaxies, one can place a rigorous upper limit on the self-interaction cross section per unit mass $\sigma_{\rm DM} / m$ of the dark matter particles.

### Derivation of the Self-Interaction Limit
The scattering probability (optical depth) of a dark matter particle traversing a column of dark matter with surface mass density $\Sigma_{\rm DM}$ is
$$\tau_{\rm DM} = \left(\frac{\sigma_{\rm DM}}{m}\right) \Sigma_{\rm DM}$$
The observed surface mass density of the main cluster target halo is
$$\Sigma_{\rm DM} \approx 0.3 \text{ g cm}^{-2} \approx 1400 M_\odot \text{ pc}^{-2}$$
For the bullet sub-cluster halo to survive the transit intact without suffering catastrophic mass loss, the scattering optical depth must satisfy $\tau_{\rm DM} < 1$.
Therefore
$$\frac{\sigma_{\rm DM}}{m} < \frac{1}{\Sigma_{\rm DM}} = \frac{1}{0.3 \text{ g cm}^{-2}} \approx 3.3 \text{ cm}^2 \text{ g}^{-1}$$
Detailed hydrodynamical and N-body simulations that model the observed mass-to-light ratio preservation and the small galaxy-halo offset place a refined upper limit (Markevitch et al. 2004, Clowe et al. 2006, Randall et al. 2008)
$$\frac{\sigma_{\rm DM}}{m} < 1.25 \text{ cm}^2 \text{ g}^{-1} \quad (95\% \text{ confidence})$$
In particle physics units ($1 \text{ barn} = 10^{-24} \text{ cm}^2$, $1 \text{ GeV} \approx 1.78 \times 10^{-24}$ g)
$$\frac{\sigma_{\rm DM}}{m} < 1.25 \times \frac{10^{-24} \text{ cm}^2}{1.78 \times 10^{-24} \text{ g}} \approx 2.2 \text{ barn GeV}^{-1}$$
This limit decisively rules out strongly self-interacting dark matter (SIDM) models with cross sections exceeding $2 \text{ cm}^2 \text{ g}^{-1}$, while remaining fully compatible with standard collisionless Cold Dark Matter (CDM) candidates such as WIMPs and axions where $\sigma/m < 10^{-10} \text{ cm}^2 \text{ g}^{-1}$.

---

## 5. Blackboard Blueprint and Observational Graph Literacy

```
               THE BULLET CLUSTER (1E 0657-56) MERGER GEOMETRY
   N (kpc)
    +400 +
         |             MAIN CLUSTER                          BULLET CLUSTER
    +200 +           .-------------.                      .-----------.
         |          /  (@) Galaxies \                    / (@) Galaxies\
       0 +---------|---(+++)---------|------------------|---(+++)------|-------->
         |          \  DM Peak      /    <==========     \  DM Peak   /  Merge Axis
    -200 +           '-------------'     GAS BOW SHOCK    '-----------'
         |                                .--------.
    -400 +                               ( X-RAY    )
         |                               ( GAS PEAK )  M = 3 Shock
         +===+===========+===========+===='--------'====+===========+===========+
           -600        -400        -200         0         +200        +400
                                  Projected Distance (kpc)

             1D SURFACE DENSITY PROFILES ALONG THE MERGER AXIS
   Surface Density Sigma (arb)
       ^
       |                      [X-ray Gas]
       |                      85% of Baryons
       |                           /\
       |                          /  \                 [Lensing DM Peak]
       |                         /    \                     /\
       |                        /      \                   /  \
       |                       /   ||   \                 /    \
       |    [Lensing DM Peak] /    ||    \               /  (@) \
       |          /\         /     ||     \             / Galaxies\
       |         /  \       /      ||      \           /            \
       |        / (@)\     /       ||       \         /              \
       +=======+======+===+========++========+=======+================+======>
             Main Cluster          Shock Front     Bullet Sub-cluster  Position
              Mass Peak             (Mach 3)           Mass Peak
```

### Blackboard Presentation Script for the Oral Examination
1. Draw the horizontal merger axis across the board. Sketch two clumps representing the main cluster on the left and the bullet sub-cluster on the right.
2. Draw the optical galaxies as discrete dots or small spirals. Mark that their collisional cross section is negligible (mean free path $\sim 10^8$ pc), so they passed straight through.
3. Draw the hot X-ray plasma (Chandra data) as a shaded, wedge-shaped region located between the two galaxy clumps, lagging behind the bullet. Highlight the sharp bow shock with Mach number $\mathcal{M} \approx 3$ ($v_{\rm shock} \approx 4700$ km/s).
4. Overlay the gravitational lensing contours (green/blue lines) directly on top of the optical galaxies, completely decoupled from the X-ray gas.
5. Emphasize to Prof. Pizzella that because the X-ray gas contains $85-90\%$ of the baryonic mass, MOND predicts that the gravitational potential well must sit on the gas. The empirical $8\sigma$ offset directly falsifies pure modified gravity.
6. Write down the dark matter self-interaction bound $\sigma_{\rm DM}/m < 1.25 \text{ cm}^2 \text{ g}^{-1}$ from the survival of the bullet sub-cluster.

---

## 6. Exact Textbook and Literature Provenance

- Course Dispensa `dispense_DM_2_eng.pdf` (Prof. Alessandro Pizzella)
  - Section 5 - Clusters of Galaxies and Dark Matter (pages 48-50) - Detailed description of 1E 0657-56, Chandra X-ray shock, gravitational lensing mass reconstruction, and refutation of MOND.
- Course Lecture Slides
  - `gal_dm-41..50` - High-resolution multi-wavelength composite images of the Bullet Cluster, Chandra X-ray temperature map, and weak lensing mass contours.
- Houjun Mo, Frank van den Bosch, Simon White, *Galaxy Formation and Evolution* (2010)
  - Chapter 2 - Observational Facts (pages 91-94) - Cluster mergers, ICM shock waves, and lensing mass maps.
  - Chapter 6 - Gravitational Lensing (pages 315-325) - Weak shear inversion and mass reconstruction principles.
- Peter Schneider, *Extragalactic Astronomy and Cosmology* (2015, Springer)
  - Chapter 6 - Clusters and Groups of Galaxies (pages 315-322) - Hydrodynamics of cluster mergers, the Bullet Cluster, and dark matter constraints.
- Primary Literature
  - Clowe et al. (2006, ApJL 648, L109) - *A Direct Empirical Proof of the Existence of Dark Matter*.
  - Markevitch et al. (2004, ApJ 606, 819) - *A High-Resolution Chandra Image of 1E 0657-56 - Shock Velocity, Temperature Jump, and Cross Section for Dark Matter Self-Interaction*.
  - Bradač et al. (2006, ApJ 652, 937) - *Strong and Weak Lensing Cluster Mass Reconstruction of 1E 0657-56*.
  - Randall et al. (2008, ApJ 679, 1173) - *Constraints on Dark Matter Self-Interaction from the Bullet Cluster*.

---

## 7. Cross-References and Related Notes

- [[MOND]] - Milgrom's acceleration phenomenology and deep-MOND regime
- [[Modified gravity alternatives]] - Relativistic scalar-tensor-vector gravity theories
- [[Coma cluster]] - Virial theorem and dark matter in relaxed galaxy clusters
- [[Dark matter rotation curves]] - Dark matter halos in spiral galaxies
- [[Dark matter in dwarf galaxies]] - Dwarf spheroidals as dark matter dominated systems
- [[Astrophysics_of_Galaxies_MOC]] - Master Map of Content for course

---

## 8. Course Slides and Figures

![gal_dm-10.png](../../assets/images/gal_dm-10.png)
*Figure 1 - Composite image of 1E 0657-56 showing optical galaxies (HST), X-ray plasma (Chandra, pink), and gravitational lensing mass contours (blue) from Clowe et al. (2006).*

![gal_dm-41.png](../../assets/images/gal_dm-41.png)
*Figure 2 - Chandra 500 ks exposure showing the bullet bow shock and temperature discontinuity.*

![gal_dm-49.png](../../assets/images/gal_dm-49.png)
*Figure 3 - Comparison between modified gravity predictions and observed gravitational shear.*



## Linked References

- [[Coma cluster]]
- [[Modified gravity alternatives]]
- [[Astrophysics_of_Galaxies_MOC]]


