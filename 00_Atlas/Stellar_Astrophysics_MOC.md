---
layout: default
title: "Stellar_Astrophysics_MOC"
---

# Stellar Astrophysics  -  Map of Content

A.Y. 2025/2026, second semester at U Padova. course taught by **Antonino Milone** (GALFOR group, ERC starting grant). lecture material at . course page: <http://progetti.dfa.unipd.it/GALFOR/teaching.html>.

this course is a **CMD-driven** course on stellar populations. unlike a textbook stellar-structure course, it treats stars as observed objects in the **color-magnitude diagram** of resolved star clusters and dwarf galaxies, and uses the morphology of the CMD to extract **ages, metallicities, distances, reddening, IMF, multiple populations, and Galactic formation history**.

central question:
> *what does the morphology of the CMD of a resolved stellar system tell us about the physics of stars and the formation history of the host galaxy?*

the chain that the course walks:
$$\text{photometry of resolved system} \to \text{CMD} \to \text{evolutionary sequences (MS, TO, SGB, RGB, HB, AGB, WD)} \to \text{age, [Fe/H], distance, reddening, IMF, multiple populations} \to \text{galaxy formation}$$

every one of the 19 lectures handles a piece of this chain. Milone's research on **multiple populations in globular clusters** is the methodological climax: chromosome maps + extended main sequences are unique to this course in the U Padova MSc.

## reference texts

- **Salaris & Cassisi**, *Evolution of Stars and Stellar Populations* (Wiley 2005). the standard text for stellar populations + CMDs.
- **Carroll & Ostlie**, *An Introduction to Modern Astrophysics* (background stellar physics).
- **Gray**, *The Observation and Analysis of Stellar Photospheres* (3rd ed.) for stellar spectroscopy.
- **Renzini & Buzzoni** 1986 (foundational SSP review). 
- Milone's own papers (heavily cited): Milone et al. 2017 (HST UV Legacy Survey of GCs), Milone et al. 2025 (modern CMD reference), Marino, Milone et al. 2019 (chromosome maps), Milone et al. 2018 (split upper MS in NGC 1755 + NGC 1850), Milone et al. 2012 (DR maps + binary fractions).

**research index**: [Stellar Astrophysics research citations index](../02_Zettel/Theory/Stellar Astrophysics research citations index.html)  -  full list of papers, surveys, projects cited across the 19 lectures, organised by block + topic.

**figures**: representative figures from every lecture are extracted in `07_Images/Stellar_Astrophysics/`. naming convention: `L<lecture>_p<page>_<topic>.png`. they are referenced in individual zettels as `!`L<XX>_p<YY>_<topic>.png``.

## prerequisites + connections

- [Fundamentals_Astrophysics_Cosmology_MOC](../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)  -  first-semester foundation. introduced stellar structure equations + nuclear burning + early CMDs.
- [Astrophysics_of_Galaxies_MOC](../00_Atlas/Astrophysics_of_Galaxies_MOC.html)  -  parallel course on galaxies. Block 11 (early-type galaxy stellar populations) + Block 8 (Local Group) overlap directly.
- [Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.html)  -  cosmic SFR + reionisation overlap with the **first stars** topic.
- [Astronomical_Spectroscopy_MOC](../00_Atlas/Astronomical_Spectroscopy_MOC.html)  -  fluency in spectroscopy is assumed.
- [Mathematical_Numerical_Methods_MOC](../00_Atlas/Mathematical_Numerical_Methods_MOC.html)  -  isochrone fitting + IMF inversion are numerical problems.

## the 19 lectures

| # | title | block |
|---|---|---|
| 0 | Introduction | 0 |
| 1 | Reading the CMD I | 1 |
| 2 | Reading the CMD II | 1 |
| 3 | Reading the CMD III | 1 |
| 4 pI | Interstellar reddening | 2 |
| 4 pII | Formation of the Galaxy from the CMD | 3 |
| 5 pI | Ultra-faint dwarf galaxies | 4 |
| 6 | White dwarfs | 5 |
| 7 | Stellar spectroscopy I | 6 |
| 8 | Stellar spectroscopy II | 6 |
| 9a | Atmospheric parameters | 6 |
| 9b | Stellar spectroscopy III | 6 |
| 10 | Differential reddening | 7 |
| 11 | Binaries, blue stragglers, exotic objects I | 8 |
| 12 | Binaries, blue stragglers, exotic objects II | 8 |
| 13 | Stellar mass function + hunting black holes | 9 |
| 14 | The first stars | 10 |
| 15 | Multiple stellar populations in GCs I | 11 |
| 17 | Multiple stellar populations in GCs II | 11 |
| 18 | The extended main sequence phenomenon | 12 |
| 19 | The Bulge (carryover from AY 24/25 syllabus) | 13 |

## Block 0  -  course frame + foundational definitions

before any CMD physics, the **objects** of the course: what is a stellar population, what kinds of clusters exist, what are Population I/II.

- [Resolved vs unresolved stellar populations](../02_Zettel/Theory/Resolved vs unresolved stellar populations.html)  -  the fundamental observational distinction; a resolved system gives individual-star measurements (luminosity, position, $v_r$, abundances), unresolved gives only integrated light.
- [Single stellar population SSP](../02_Zettel/Theory/Single stellar population SSP.html)  -  an assembly of coeval, initially chemically homogeneous stars. four parameters: age, $Y$, $Z$, IMF. (exists in vault)
- [Star cluster types](../02_Zettel/Theory/Star cluster types.html)  -  open vs globular, with their typical $N$, age, mass, kinematics, role as SSP laboratories.
- [Globular clusters as SSP laboratories](../02_Zettel/Theory/Globular clusters as SSP laboratories.html)  -  old $\sim 12$ Gyr, $\sim 10^4 - 10^6 M_\odot$, tightly bound, historically the gold standard for SSPs.
- [Open clusters as young SSP laboratories](../02_Zettel/Theory/Open clusters as young SSP laboratories.html)  -  $10^2 - 10^3$ stars, weakly bound, dissolve in $\sim 100$ Myr to Gyr.
- [Population I and II stars](../02_Zettel/Theory/Population I and II stars.html)  -  Baade 1944. metal-rich (disk + open clusters) vs metal-poor (halo + GCs).
- [Extragalactic star clusters](../02_Zettel/Theory/Extragalactic star clusters.html)  -  Andromeda, M87, Sparkler galaxy via JWST. clusters as cosmological probes.

## Block 1  -  reading the CMD

the **central methodological block**: Milone's expertise. a CMD is a scatter plot of magnitude vs color for stars in a single cluster, and its morphology encodes age + metallicity + distance + reddening + multiplicity + binarity.

- [HR diagram](../02_Zettel/Theory/HR diagram.html)  -  the theoretical $L$-$T_{\rm eff}$ plane; CMD is its observational analog. (exists)
- [Color-magnitude diagrams of clusters](../02_Zettel/Theory/Color-magnitude diagrams of clusters.html)  -  observational $M_V$ vs $B-V$ (or HST/JWST filters). (exists)
- [Stellar evolutionary phases on the CMD](../02_Zettel/Theory/Stellar evolutionary phases on the CMD.html)  -  MS, TO, SGB, RGB, HB, AGB, WDCS; what each phase corresponds to in stellar interior physics.
- [Main sequence on the CMD](../02_Zettel/Theory/Main sequence on the CMD.html)  -  core hydrogen burning. mass-luminosity, mass-radius, lifetime $\tau \propto M^{-2.5}$.
- [Main sequence turn-off as age indicator](../02_Zettel/Theory/Main sequence turn-off as age indicator.html)  -  TO point shifts to lower $L$ + cooler $T_{\rm eff}$ as a population ages. main age clock.
- [Subgiant branch SGB](../02_Zettel/Theory/Subgiant branch SGB.html)  -  H exhausted in core; H shell-burning starts; $L$ ~ constant, $T_{\rm eff}$ drops.
- [Red giant branch RGB](../02_Zettel/Theory/Red giant branch RGB.html)  -  H shell-burning; degenerate He core; star expands + cools + brightens. RGB tip = $L \sim 2300 L_\odot$ for low-mass stars.
- [Helium flash and horizontal branch](../02_Zettel/Theory/Helium flash and horizontal branch.html)  -  He ignition in degenerate core for $M \lesssim 2 M_\odot$; settles on HB at $T_{\rm eff} \sim 5000$ to $30000$ K depending on envelope mass.
- [Asymptotic giant branch AGB](../02_Zettel/Theory/Asymptotic giant branch AGB.html)  -  double-shell burning, thermal pulses, third dredge-up, mass loss.
- [White dwarf cooling sequence on the CMD](../02_Zettel/Theory/White dwarf cooling sequence on the CMD.html)  -  final state for $M < 8 M_\odot$. cools predictably; CMD turn to blue at faint end due to H$_2$ collision-induced absorption.
- [Isochrones and isochrone fitting](../02_Zettel/Theory/Isochrones and isochrone fitting.html)  -  locus in CMD of stars of common age + metallicity but different masses. age + [Fe/H] + distance + reddening fit simultaneously.
- [Distance modulus from CMD](../02_Zettel/Theory/Distance modulus.html)  -  fitting the MS or TRGB or RR Lyrae sets distance.
- [Cluster age from main sequence turn-off](../02_Zettel/Theory/Main sequence turn-off as age indicator.html)  -  $\tau \sim 10$ Gyr for $M_{\rm TO} \sim 0.85 M_\odot$. uses isochrones from Padova (PARSEC) or DSEP.
- [Age-metallicity degeneracy](../02_Zettel/Theory/Age-metallicity degeneracy.html)  -  older + more metal-rich and younger + more metal-poor produce similar TO colors. (exists)

## Block 2  -  interstellar reddening

dust between us + the cluster reddens + dims observed colors. key correction for CMDs.

- [Interstellar absorption](../02_Zettel/Theory/Interstellar absorption.html)  -  $A_\lambda$, optical depth, total extinction. (exists)
- [Interstellar reddening and the reddening vector](../02_Zettel/Theory/Interstellar reddening and the reddening vector.html)  -  $E(B-V) = A_B - A_V$. on a CMD, reddening shifts stars along a vector $\propto (R_V, 1)$.
- [Extinction law and Rv](../02_Zettel/Theory/Extinction law and Rv.html)  -  $R_V = A_V/E(B-V) = 3.1$ in diffuse ISM, varies in dense regions. Cardelli, Clayton, Mathis 1989.
- [Differential reddening across a cluster field](../02_Zettel/Theory/Differential reddening maps.html)  -  covered by Lecture 10. patchy dust in front of cluster $\to$ artificial broadening of CMD sequences.
- [Reddening correction methods](../02_Zettel/Theory/Reddening correction methods.html)  -  fiducial line + ridge mapping (Milone et al. 2012 method).
- [Continuum opacity sources](../02_Zettel/Theory/Continuum opacity sources.html)  -  links to bound-free + free-free + H$^-$. (exists)

## Block 3  -  formation of the Galaxy from the CMD

GCs as fossil records of Galactic assembly. ages from CMDs $\to$ chemical enrichment timeline.

- [Galactic halo and bulge formation timescales](../02_Zettel/Theory/Galactic halo and bulge formation timescales.html)  -  GCs in halo: $\sim 13$ Gyr, low [Fe/H]. inner Galaxy: rapid enrichment.
- [Age-metallicity relation of Galactic GCs](../02_Zettel/Theory/Age-metallicity relation of Galactic GCs.html)  -  Dotter et al. 2011. inner GCs: tight age-[Fe/H] sequence (in situ); outer GCs: scattered + younger (accreted from dwarfs).
- [Galactic GC two-population age structure](../02_Zettel/Theory/Galactic GC two-population age structure.html)  -  bimodal ages support **dual origin**: in situ + accreted.
- [Halo accretion from dwarf galaxies](../02_Zettel/Theory/Halo accretion from dwarf galaxies.html)  -  Sgr stream, Gaia-Enceladus, Sequoia. links GCs to their progenitor dwarfs.
- [CMD constraints on disk vs halo populations](../02_Zettel/Theory/CMD constraints on disk vs halo populations.html)  -  Pop I in disk has TO at younger ages; Pop II in halo at $\sim 12$-$13$ Gyr.

## Block 4  -  ultra-faint dwarf galaxies

discovered post-2005 via SDSS + DES + Pan-STARRS. extreme low-luminosity ($L < 10^5 L_\odot$), high $M/L$, very metal-poor.

- [Ultra-faint dwarf galaxies definition](../02_Zettel/Theory/Ultra-faint dwarf galaxies definition.html)  -  $M_V \gtrsim -7.7$, $\sigma_v \sim$ few km/s, [Fe/H] $\lesssim -2$. probable fossils of pre-reionisation halos.
- [UFDG dark matter content](../02_Zettel/Theory/UFDG dark matter content.html)  -  $M/L \sim 100$ to $1000$. strong cosmological constraints on warm DM.
- [UFDG star formation histories](../02_Zettel/Theory/UFDG star formation histories.html)  -  single old burst, truncated at reionisation.
- [UFDG search via deep CMD](../02_Zettel/Theory/UFDG search via deep CMD.html)  -  overdensities of metal-poor stars in resolved photometry.
- [Pop III remnants in UFDGs](../02_Zettel/Theory/Pop III remnants in UFDGs.html)  -  abundance patterns reveal first-star nucleosynthesis (r-process, light-element enrichment).

## Block 5  -  white dwarfs

evolutionary endpoint for $\sim 95\%$ of stars. faint $\to$ observable only in nearby clusters + Solar neighbourhood. cooling sequence used as independent age clock.

- [White dwarf overview](../02_Zettel/Theory/White dwarf overview.html)  -  $M \lesssim 1.4 M_\odot$ (Chandrasekhar), $R \sim R_\oplus$, $\rho \sim 10^9$ kg/m$^3$. supported by electron degeneracy.
- [White dwarf types He CO ONeMg](../02_Zettel/Theory/White dwarf types He CO ONeMg.html)  -  He WD: low mass, binary stripping. CO WD: most stars. ONeMg WD: $M_{\rm prog} \sim 8$-$10 M_\odot$.
- [Chandrasekhar mass limit](../02_Zettel/Theory/Chandrasekhar mass limit.html)  -  $M_{\rm Ch} \approx 1.46 M_\odot$ for fully relativistic electron-degenerate gas.
- [White dwarf cooling theory](../02_Zettel/Theory/White dwarf cooling theory.html)  -  Mestel cooling, $\tau \propto L^{-5/7}$. crystallisation phase + transparency window.
- [White dwarf mass-radius relation](../02_Zettel/Theory/White dwarf mass-radius relation.html)  -  $R \propto M^{-1/3}$ for non-relativistic; relativistic correction near $M_{\rm Ch}$.
- [WDCS turn to blue and CIA](../02_Zettel/Theory/WDCS turn to blue and CIA.html)  -  cool WDs ($T_{\rm eff} < 5000$ K) develop H$_2$ collision-induced absorption; suppresses IR flux; CMD turns blueward.
- [Age dating from the WD luminosity function](../02_Zettel/Theory/Age dating from the WD luminosity function.html)  -  peak in number counts vs WD luminosity = oldest WDs. NGC 6397: $t_{\rm WDCS} = 11.47 \pm 0.47$ Gyr (Hansen et al. 2007). (matches MS turn-off age $11.6 \pm 1.0$ Gyr).
- [WDCS vs MSTO ages comparison](../02_Zettel/Theory/WDCS vs MSTO ages comparison.html)  -  independent age methods that agree are a triumph of stellar physics.
- [Initial-final mass relation IFMR](../02_Zettel/Theory/Initial-final mass relation IFMR.html)  -  $M_{\rm WD}(M_{\rm i})$ from open cluster WDs.

## Block 6  -  stellar spectroscopy + atmospheric parameters

how to extract $T_{\rm eff}$, $\log g$, [Fe/H], chemical abundances, $v_r$, rotation from spectra.

- [Stellar atmosphere structure](../02_Zettel/Theory/Stellar atmosphere structure.html)  -  $T(\tau)$, hydrostatic eq, opacity. (exists)
- [Saha equation and recombination](../02_Zettel/Theory/Saha equation and recombination.html)  -  ionisation balance. (exists)
- [Saha ionisation equation](../02_Zettel/Theory/Saha ionisation equation.html)  -  multi-stage version. (exists)
- [Stellar spectral types OBAFGKM](../02_Zettel/Theory/Stellar spectral types OBAFGKM.html)  -  temperature sequence. luminosity classes I-V.
- [History of stellar classification](../02_Zettel/Theory/History of stellar classification.html)  -  Harvard system, Maury, Cannon. (exists)
- [Equivalent width and curve of growth](../02_Zettel/Theory/Equivalent width.html)  -  measure abundances via line strength.
- [LTE vs NLTE in stellar atmospheres](../02_Zettel/Theory/Local thermodynamic equilibrium LTE.html)  -  assumptions, when each fails (hot stars, metal-poor giants).
- [Atmospheric parameters Teff log g feh vmicro](../02_Zettel/Theory/interf/Atmospheric parameters Teff log g feh vmicro.html)  -  the four numbers extracted from any optical spectrum.
- [Spectroscopic determination of Teff](../02_Zettel/Theory/Spectroscopic determination of Teff.html)  -  Balmer-line wings + colour calibrations + line-depth ratios.
- [Spectroscopic determination of log g](../02_Zettel/Theory/Spectroscopic determination of log g.html)  -  wings of strong lines (Mg I b, Ca II); ionisation balance.
- [Spectroscopic determination of metallicity](../02_Zettel/Theory/Spectroscopic determination of metallicity.html)  -  Fe I + Fe II lines; differential analysis.
- [Microturbulence in stellar spectroscopy](../02_Zettel/Theory/Microturbulence.html)  -  non-thermal velocity broadening; $v_{\rm micro} \sim 1-3$ km/s.
- [Radial velocity from stellar spectra](../02_Zettel/Theory/Radial velocity from stellar spectra.html)  -  cross-correlation with templates, Gaia RVS, MUSE-NFM.
- [Stellar rotation v sini](../02_Zettel/Theory/Stellar rotation v sini.html)  -  line broadening from rotation, used for cluster rotation studies.
- [Element abundance patterns](../02_Zettel/Theory/Element abundance patterns.html)  -  alpha/Fe, [C/N], [O/Fe], used to identify multiple populations.

## Block 7  -  differential reddening (Lecture 10)

extension of Block 2; how to map + correct differential reddening across a cluster field.

- [Differential reddening maps](../02_Zettel/Theory/Differential reddening maps.html)  -  Milone et al. 2012 technique. uses position-dependent fiducial-line offsets in CMD.
- [Effects of differential reddening on CMD analysis](../02_Zettel/Theory/Effects of differential reddening on CMD analysis.html)  -  broadens MS + TO; can be confused with multiple populations or spread in metallicity. critical to correct before interpreting MPs.

## Block 8  -  binaries, blue stragglers, and exotic objects

these populate the **off-isochrone** regions of the CMD.

- [Binary stars in CMD](../02_Zettel/Theory/Binary stars in CMD.html)  -  equal-mass binary lies $0.75$ mag above MS in $V$. binary fraction inferred from fraction of stars in this displaced sequence.
- [Cluster binary fraction methods](../02_Zettel/Theory/Cluster binary fraction methods.html)  -  fitting double-MS + radial velocity follow-up.
- [Blue stragglers in star clusters](../02_Zettel/Theory/Blue stragglers in star clusters.html)  -  stars brighter + bluer than the MSTO. anomalous in coeval SSPs.
- [Blue straggler formation channels](../02_Zettel/Theory/Blue straggler formation channels.html)  -  collisional + binary mass transfer + binary mergers. dominant in dense vs sparse clusters.
- [Cataclysmic variables in clusters](../02_Zettel/Theory/Cataclysmic variables in clusters.html)  -  WD accreting from companion. detected via UV excess + variability.
- [Millisecond pulsars in GCs](../02_Zettel/Theory/Millisecond pulsars in GCs.html)  -  recycled NSs spun up by accretion. Terzan 5 has $> 30$ MSPs.
- [X-ray sources in globular clusters](../02_Zettel/Theory/X-ray sources in globular clusters.html)  -  LMXBs, qLMXBs, CVs. tracers of binary populations.
- [Yellow stragglers and sub-subgiants](../02_Zettel/Theory/Yellow stragglers and sub-subgiants.html)  -  peculiar CMD positions; binary evolution products.

## Block 9  -  stellar mass function + hunting black holes

inferring the IMF + present-day MF from cluster CMDs. inferring black hole populations from dynamics + accretion.

- [Stellar mass function](../02_Zettel/Theory/Stellar mass function.html)  -  distribution of stars per unit mass: $\xi(M) = dN/dM$.
- [Salpeter Kroupa Chabrier IMFs](../02_Zettel/Theory/Salpeter Kroupa Chabrier IMFs.html)  -  Salpeter $\xi(M) \propto M^{-2.35}$ for $M > 0.5 M_\odot$. Kroupa + Chabrier add low-mass break/lognormal.
- [Initial vs present-day mass function](../02_Zettel/Theory/Initial vs present-day mass function.html)  -  IMF + stellar evolution + dynamical evaporation $\to$ PDMF. low-mass stars preferentially evaporated.
- [IMF from cluster luminosity functions](../02_Zettel/Theory/IMF from cluster luminosity functions.html)  -  convert observed LF to MF via mass-luminosity relation.
- [Black holes in globular clusters](../02_Zettel/Theory/Black holes in globular clusters.html)  -  dynamical signatures (stellar BH retention), accretion + radio emission, X-ray binaries.
- [Hunting BHs via radial velocities](../02_Zettel/Theory/Hunting BHs via radial velocities.html)  -  single-line spectroscopic binaries with massive dark companions. NGC 3201, M22, others.
- [Intermediate-mass BHs in GCs](../02_Zettel/Theory/Intermediate-mass BHs in GCs.html)  -  controversial; pulsar timing + central kinematics hints.
- [BHs from gravitational waves](../02_Zettel/Theory/BHs from gravitational waves.html)  -  LIGO-Virgo events; possible globular-cluster origin via dynamical formation.

## Block 10  -  the first stars (Pop III)

the predicted zero-metallicity first generation.

- [Population III stars](../02_Zettel/Theory/Population III stars.html)  -  $Z = 0$, top-heavy IMF predicted (no metal-line cooling), $M \sim 10$ to $1000 M_\odot$.
- [Critical metallicity for fragmentation](../02_Zettel/Theory/Critical metallicity for fragmentation.html)  -  $Z_{\rm crit} \sim 10^{-5}$ to $10^{-4} Z_\odot$. below this, no efficient cooling channel.
- [Pop III nucleosynthesis signatures](../02_Zettel/Theory/Pop III nucleosynthesis signatures.html)  -  peculiar abundance patterns: CEMP-no, r-process II stars, no s-process.
- [Search for Pop III stars in dwarf galaxies](../02_Zettel/Theory/Search for Pop III stars in dwarf galaxies.html)  -  UFDGs as best hunting ground; SkyMapper survey, Pristine survey.
- [JWST and the first stars](../02_Zettel/Theory/JWST and the first stars.html)  -  direct detection of Pop III SF regions at $z \sim 10$-$15$.

## Block 11  -  multiple stellar populations in globular clusters

**Milone's signature topic**. since 2000s it is clear GCs are NOT simple SSPs but host $\geq 2$ populations differing in light-element abundances.

- [Multiple populations in GCs discovery](../02_Zettel/Theory/Multiple populations in GCs discovery.html)  -  first noticed via Na-O anti-correlation (Carretta + Gratton 1990s). photometric confirmation: Bedin et al. 2004 ($\omega$ Cen), Piotto et al. 2007 (NGC 2808 triple MS).
- [Na O anticorrelation](../02_Zettel/Theory/Na O anticorrelation.html)  -  first generation: Na-poor + O-rich. second generation: Na-rich + O-poor. signature of high-T H burning.
- [CN CH MgAl anticorrelations](../02_Zettel/Theory/CN CH MgAl anticorrelations.html)  -  extended chemical fingerprints of MPs.
- [Helium spread in GCs](../02_Zettel/Theory/Helium spread in GCs.html)  -  second-generation stars helium-enhanced ($Y$ up to $0.40$); explains hot HB extensions.
- [Polluter scenarios for second-generation GC stars](../02_Zettel/Theory/Polluter scenarios for second-generation GC stars.html)  -  AGB stars, fast rotating massive stars, supermassive stars, binaries. open problem.
- [Photometric chromosome maps](../02_Zettel/Theory/Photometric chromosome maps.html)  -  Milone et al. 2017 + 2018. plot $\Delta_{F275W,F814W}$ vs $\Delta_{C\,F275W,F336W,F438W}$. cleanly separates 1G from 2G.
- [Type I and Type II GCs](../02_Zettel/Theory/Type I and Type II GCs.html)  -  Type II: have a split + iron-enriched 2P. e.g. NGC 1851, M22, $\omega$ Cen.
- [Mass dependence of multiple populations](../02_Zettel/Theory/Mass dependence of multiple populations.html)  -  fraction of 2P stars increases with cluster mass.
- [GC formation models with MPs](../02_Zettel/Theory/GC formation models with MPs.html)  -  internal SF + retention of polluter ejecta. links to early-Galaxy clustering.
- [Multiple populations in extragalactic GCs](../02_Zettel/Theory/Multiple populations in extragalactic GCs.html)  -  LMC + SMC clusters, M31. tells us MPs are universal in massive old GCs.

## Block 12  -  the extended main sequence phenomenon

young + intermediate-age clusters in the LMC + SMC + Milky Way show a broadened MS turn-off.

- [Extended main sequence turn-off eMSTO](../02_Zettel/Theory/Extended main sequence turn-off eMSTO.html)  -  observed in $1$-$2$ Gyr clusters; turn-off width $\sim 0.1$-$0.3$ mag.
- [Origin of eMSTO age spread or rotation](../02_Zettel/Theory/Origin of eMSTO age spread or rotation.html)  -  initial proposal: age spread of $\sim 200$-$500$ Myr. now favoured: stellar rotation broadens TO via $T_{\rm eff}$ + $\log g$ shifts.
- [Stellar rotation effects on CMD](../02_Zettel/Theory/Stellar rotation effects on CMD.html)  -  gravity darkening, mixing, He enrichment in fast rotators.
- [Splitting of the upper MS in young clusters](../02_Zettel/Theory/Splitting of the upper MS in young clusters.html)  -  bifurcation seen in NGC 1755, NGC 1850, etc. = slow + fast rotators.
- [eMSTO and multiple populations connection](../02_Zettel/Theory/eMSTO and multiple populations connection.html)  -  young eMSTO clusters might be the present-day analogues of what GCs were at $\sim 1$ Gyr.

## Block 13  -  the Bulge (carryover Lecture 19 from AY 24/25)

old, metal-rich population at the centre of the Milky Way. boxy/peanut bar.

- [The Galactic Bulge](../02_Zettel/Theory/The Galactic Bulge.html)  -  $\sim 10$ Gyr, $-1 < $ [Fe/H] $< +0.5$, boxy/peanut shape from bar buckling.
- [Bulge microlensing surveys](../02_Zettel/Theory/Bulge microlensing surveys.html)  -  OGLE + MACHO + EROS. proper motions + distances of bulge dwarfs.
- [Bulge CMD complications](../02_Zettel/Theory/Bulge CMD complications.html)  -  high reddening + crowding + foreground disk contamination. JWST helps.

## the 12 cold derivations + 8 conceptual essays (T1)

these are the foundational concepts to master.

### derivations
1. **mass-luminosity scaling on the MS**: $L \propto M^4$ (low-mass), $L \propto M^3$ (high-mass). MS lifetime $\tau \propto M^{-2.5}$.
2. **MSTO age**: relate $M_{\rm TO}$ to age via $\tau \approx 10\,(M/M_\odot)^{-2.5}$ Gyr.
3. **distance modulus** $m - M = 5\log_{10}(d/10\,{\rm pc}) + A_V$. with reddening.
4. **Chandrasekhar mass** $M_{\rm Ch} \approx 1.46 (\mu_e/2)^{-2} M_\odot$ from polytropic balance.
5. **Mestel WD cooling** $\tau \propto L^{-5/7}$, with assumptions.
6. **isochrone equation** in CMD: locus of $(M_V, B-V)$ for fixed $t, [Fe/H], M$ varied.
7. **reddening vector slope** in CMD: $A_V/E(B-V) = R_V$.
8. **Salpeter IMF integral**: $N(>M)$, $L_{\rm tot}$, $M_{\rm tot}$.
9. **Mass-radius relation** for non-relativistic + relativistic WDs.
10. **Saha equation** + ionisation fraction in stellar atmospheres.
11. **equivalent width** integral + curve of growth regimes (linear, saturated, damped).
12. **chromosome map construction**: pseudo-colour definitions $\Delta_{F275W,F814W}$ + $\Delta_{C\,F275W,F336W,F438W}$.

### conceptual essays
1. why is a CMD better than an HRD for **observers**? (filters not bolometric).
2. why are **GCs the gold standard SSP laboratories**? old + populous + chemically homogeneous (almost).
3. what makes the **WDCS** an independent age clock from the MSTO?
4. why does **differential reddening** broaden the MS, and how is it disentangled from MPs?
5. what is the **evidence that GCs are NOT simple SSPs** (light-element anticorrelations, He spread, chromosome maps)?
6. why are **UFDGs** unique probes of dark matter + Pop III?
7. what causes the **eMSTO** in young clusters (rotation vs age spread debate)?
8. how does the **age-metallicity relation of GCs** trace **two channels of Galactic assembly** (in situ + accretion)?

## see also

- [Stellar Astrophysics research citations index](../02_Zettel/Theory/Stellar Astrophysics research citations index.html)  -  master list of papers/surveys cited across 19 lectures.
- [Astrophysics_of_Galaxies_MOC](../00_Atlas/Astrophysics_of_Galaxies_MOC.html)  -  galaxy-scale stellar populations.
- [Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.html)  -  first stars, cosmic SFR, reionisation.
- [Astronomical_Spectroscopy_MOC](../00_Atlas/Astronomical_Spectroscopy_MOC.html)  -  spectroscopic foundation.
- [Fundamentals_Astrophysics_Cosmology_MOC](../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)  -  stellar structure foundation.
- [General_Relativity_MOC](../00_Atlas/General_Relativity_MOC.html)  -  neutron stars + Schwarzschild end states.