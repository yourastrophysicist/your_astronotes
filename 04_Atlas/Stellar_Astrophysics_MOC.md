---
layout: "default"
title: "Stellar_Astrophysics_MOC"
---
# Stellar Astrophysics — Map of Content

A.Y. 2025/2026, second semester at U Padova. course taught by **Antonino Milone** (GALFOR group, ERC starting grant). lecture material at `~/Documents/2/Stellar Astrophysics/`. course page: <http://progetti.dfa.unipd.it/GALFOR/teaching.html>.

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

**research index**: [Stellar Astrophysics research citations index](../03_Zettel/Theory/Stellar%20Astrophysics%20research%20citations%20index.html) — full list of papers, surveys, projects cited across the 19 lectures, organised by block + topic.

**figures**: representative figures from every lecture are extracted in `07_Images/Stellar_Astrophysics/`. naming convention: `L<lecture>_p<page>_<topic>.png`. they are referenced in individual zettels as ``L<XX>_p<YY>_<topic>.png``.

## prerequisites + connections

- [Fundamentals_Astrophysics_Cosmology_MOC](Fundamentals_Astrophysics_Cosmology_MOC.html) — first-semester foundation. introduced stellar structure equations + nuclear burning + early CMDs.
- [Observational_Astrophysics_MOC](Observational_Astrophysics_MOC.html) — methodological foundation. Covers the detector, photometry, atmospheric, and population synthesis framework for interpreting unresolved light when individual stars cannot be resolved.
- [Astrophysics_of_Galaxies_MOC](Astrophysics_of_Galaxies_MOC.html) — parallel course on galaxies. Block 11 (early-type galaxy stellar populations) + Block 8 (Local Group) overlap directly.
- [Observational_Cosmology_MOC](Observational_Cosmology_MOC.html) — cosmic SFR + reionisation overlap with the **first stars** topic.
- [Astronomical_Spectroscopy_MOC](Astronomical_Spectroscopy_MOC.html) — fluency in spectroscopy is assumed.
- [Mathematical_Numerical_Methods_MOC](Mathematical_Numerical_Methods_MOC.html) — isochrone fitting + IMF inversion are numerical problems.

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

## Block 0 — course frame + foundational definitions

before any CMD physics, the **objects** of the course: what is a stellar population, what kinds of clusters exist, what are Population I/II.

- [Resolved vs unresolved stellar populations](../03_Zettel/Theory/Resolved%20vs%20unresolved%20stellar%20populations.html) — the fundamental observational distinction; a resolved system gives individual-star measurements (luminosity, position, $v_r$, abundances), unresolved gives only integrated light.
- [Single stellar population SSP](../03_Zettel/Theory/Single%20stellar%20population%20SSP.html) — an assembly of coeval, initially chemically homogeneous stars. four parameters: age, $Y$, $Z$, IMF. (exists in vault)
- [Star cluster types](../03_Zettel/Theory/Star%20cluster%20types.html) — open vs globular, with their typical $N$, age, mass, kinematics, role as SSP laboratories.
- [Globular clusters as SSP laboratories](../03_Zettel/Theory/Globular%20clusters%20as%20SSP%20laboratories.html) — old $\sim 12$ Gyr, $\sim 10^4 - 10^6 M_\odot$, tightly bound, historically the gold standard for SSPs.
- [Open clusters as young SSP laboratories](../03_Zettel/Theory/Open%20clusters%20as%20young%20SSP%20laboratories.html) — $10^2 - 10^3$ stars, weakly bound, dissolve in $\sim 100$ Myr to Gyr.
- [Population I and II stars](../03_Zettel/Theory/Population%20I%20and%20II%20stars.html) — Baade 1944. metal-rich (disk + open clusters) vs metal-poor (halo + GCs).
- [Extragalactic star clusters](../03_Zettel/Theory/Extragalactic%20star%20clusters.html) — Andromeda, M87, Sparkler galaxy via JWST. clusters as cosmological probes.

## Block 1 — reading the CMD

the **central methodological block**: Milone's expertise. a CMD is a scatter plot of magnitude vs color for stars in a single cluster, and its morphology encodes age + metallicity + distance + reddening + multiplicity + binarity.

- [HR diagram](../03_Zettel/Theory/HR%20diagram.html) — the theoretical $L$-$T_{\rm eff}$ plane; CMD is its observational analog. (exists)
- [Color-magnitude diagrams of clusters](../03_Zettel/Theory/Color-magnitude%20diagrams%20of%20clusters.html) — observational $M_V$ vs $B-V$ (or HST/JWST filters). (exists)
- [Stellar evolutionary phases on the CMD](../03_Zettel/Theory/Stellar%20evolutionary%20phases%20on%20the%20CMD.html) — MS, TO, SGB, RGB, HB, AGB, WDCS; what each phase corresponds to in stellar interior physics.
- [Main sequence on the CMD](../03_Zettel/Theory/Main%20sequence%20on%20the%20CMD.html) — core hydrogen burning. mass-luminosity, mass-radius, lifetime $\tau \propto M^{-2.5}$.
- [Main sequence turn-off as age indicator](../03_Zettel/Theory/Main%20sequence%20turn-off%20as%20age%20indicator.html) — TO point shifts to lower $L$ + cooler $T_{\rm eff}$ as a population ages. main age clock.
- [Subgiant branch SGB](../03_Zettel/Theory/Subgiant%20branch%20SGB.html) — H exhausted in core; H shell-burning starts; $L$ ~ constant, $T_{\rm eff}$ drops.
- [Red giant branch RGB](../03_Zettel/Theory/Red%20giant%20branch%20RGB.html) — H shell-burning; degenerate He core; star expands + cools + brightens. RGB tip = $L \sim 2300 L_\odot$ for low-mass stars.
- [Helium flash and horizontal branch](../03_Zettel/Theory/Helium%20flash%20and%20horizontal%20branch.html) — He ignition in degenerate core for $M \lesssim 2 M_\odot$; settles on HB at $T_{\rm eff} \sim 5000$ to $30000$ K depending on envelope mass.
- [Asymptotic giant branch AGB](../03_Zettel/Theory/Asymptotic%20giant%20branch%20AGB.html) — double-shell burning, thermal pulses, third dredge-up, mass loss.
- [White dwarf cooling sequence on the CMD](../03_Zettel/Theory/White%20dwarf%20cooling%20sequence%20on%20the%20CMD.html) — final state for $M < 8 M_\odot$. cools predictably; CMD turn to blue at faint end due to H$_2$ collision-induced absorption.
- [Isochrones and isochrone fitting](../03_Zettel/Theory/Isochrones%20and%20isochrone%20fitting.html) — locus in CMD of stars of common age + metallicity but different masses. age + [Fe/H] + distance + reddening fit simultaneously.
- Distance modulus from CMD — fitting the MS or TRGB or RR Lyrae sets distance.
- Cluster age from main sequence turn-off — $\tau \sim 10$ Gyr for $M_{\rm TO} \sim 0.85 M_\odot$. uses isochrones from Padova (PARSEC) or DSEP.
- [Age-metallicity degeneracy](../03_Zettel/Theory/Age-metallicity%20degeneracy.html) — older + more metal-rich and younger + more metal-poor produce similar TO colors. (exists)

## Block 2 — interstellar reddening

dust between us + the cluster reddens + dims observed colors. key correction for CMDs.

- [Interstellar absorption](../03_Zettel/Theory/Interstellar%20absorption.html) — $A_\lambda$, optical depth, total extinction. (exists)
- [Interstellar reddening and the reddening vector](../03_Zettel/Theory/Interstellar%20reddening%20and%20the%20reddening%20vector.html) — $E(B-V) = A_B - A_V$. on a CMD, reddening shifts stars along a vector $\propto (R_V, 1)$.
- [Extinction law and Rv](../03_Zettel/Theory/Extinction%20law%20and%20Rv.html) — $R_V = A_V/E(B-V) = 3.1$ in diffuse ISM, varies in dense regions. Cardelli, Clayton, Mathis 1989.
- Differential reddening across a cluster field — covered by Lecture 10. patchy dust in front of cluster $\to$ artificial broadening of CMD sequences.
- [Reddening correction methods](../03_Zettel/Theory/Reddening%20correction%20methods.html) — fiducial line + ridge mapping (Milone et al. 2012 method).
- [Continuum opacity sources](../03_Zettel/Theory/Continuum%20opacity%20sources.html) — links to bound-free + free-free + H$^-$. (exists)

## Block 3 — formation of the Galaxy from the CMD

GCs as fossil records of Galactic assembly. ages from CMDs $\to$ chemical enrichment timeline.

- [Galactic halo and bulge formation timescales](../03_Zettel/Theory/Galactic%20halo%20and%20bulge%20formation%20timescales.html) — GCs in halo: $\sim 13$ Gyr, low [Fe/H]. inner Galaxy: rapid enrichment.
- [Age-metallicity relation of Galactic GCs](../03_Zettel/Theory/Age-metallicity%20relation%20of%20Galactic%20GCs.html) — Dotter et al. 2011. inner GCs: tight age-[Fe/H] sequence (in situ); outer GCs: scattered + younger (accreted from dwarfs).
- [Galactic GC two-population age structure](../03_Zettel/Theory/Galactic%20GC%20two-population%20age%20structure.html) — bimodal ages support **dual origin**: in situ + accreted.
- [Halo accretion from dwarf galaxies](../03_Zettel/Theory/Halo%20accretion%20from%20dwarf%20galaxies.html) — Sgr stream, Gaia-Enceladus, Sequoia. links GCs to their progenitor dwarfs.
- [CMD constraints on disk vs halo populations](../03_Zettel/Theory/CMD%20constraints%20on%20disk%20vs%20halo%20populations.html) — Pop I in disk has TO at younger ages; Pop II in halo at $\sim 12$-$13$ Gyr.

## Block 4 — ultra-faint dwarf galaxies

discovered post-2005 via SDSS + DES + Pan-STARRS. extreme low-luminosity ($L < 10^5 L_\odot$), high $M/L$, very metal-poor.

- [Ultra-faint dwarf galaxies definition](../03_Zettel/Theory/Ultra-faint%20dwarf%20galaxies%20definition.html) — $M_V \gtrsim -7.7$, $\sigma_v \sim$ few km/s, [Fe/H] $\lesssim -2$. probable fossils of pre-reionisation halos.
- [UFDG dark matter content](../03_Zettel/Theory/UFDG%20dark%20matter%20content.html) — $M/L \sim 100$ to $1000$. strong cosmological constraints on warm DM.
- [UFDG star formation histories](../03_Zettel/Theory/UFDG%20star%20formation%20histories.html) — single old burst, truncated at reionisation.
- [UFDG search via deep CMD](../03_Zettel/Theory/UFDG%20search%20via%20deep%20CMD.html) — overdensities of metal-poor stars in resolved photometry.
- [Pop III remnants in UFDGs](../03_Zettel/Theory/Pop%20III%20remnants%20in%20UFDGs.html) — abundance patterns reveal first-star nucleosynthesis (r-process, light-element enrichment).

## Block 5 — white dwarfs

evolutionary endpoint for $\sim 95\%$ of stars. faint $\to$ observable only in nearby clusters + Solar neighbourhood. cooling sequence used as independent age clock.

- [White dwarf overview](../03_Zettel/Theory/White%20dwarf%20overview.html) — $M \lesssim 1.4 M_\odot$ (Chandrasekhar), $R \sim R_\oplus$, $\rho \sim 10^9$ kg/m$^3$. supported by electron degeneracy.
- [White dwarf types He CO ONeMg](../03_Zettel/Theory/White%20dwarf%20types%20He%20CO%20ONeMg.html) — He WD: low mass, binary stripping. CO WD: most stars. ONeMg WD: $M_{\rm prog} \sim 8$-$10 M_\odot$.
- [Chandrasekhar mass limit](../03_Zettel/Theory/Chandrasekhar%20mass%20limit.html) — $M_{\rm Ch} \approx 1.46 M_\odot$ for fully relativistic electron-degenerate gas.
- [White dwarf cooling theory](../03_Zettel/Theory/White%20dwarf%20cooling%20theory.html) — Mestel cooling, $\tau \propto L^{-5/7}$. crystallisation phase + transparency window.
- [White dwarf mass-radius relation](../03_Zettel/Theory/White%20dwarf%20mass-radius%20relation.html) — $R \propto M^{-1/3}$ for non-relativistic; relativistic correction near $M_{\rm Ch}$.
- [WDCS turn to blue and CIA](../03_Zettel/Theory/WDCS%20turn%20to%20blue%20and%20CIA.html) — cool WDs ($T_{\rm eff} < 5000$ K) develop H$_2$ collision-induced absorption; suppresses IR flux; CMD turns blueward.
- [Age dating from the WD luminosity function](../03_Zettel/Theory/Age%20dating%20from%20the%20WD%20luminosity%20function.html) — peak in number counts vs WD luminosity = oldest WDs. NGC 6397: $t_{\rm WDCS} = 11.47 \pm 0.47$ Gyr (Hansen et al. 2007). (matches MS turn-off age $11.6 \pm 1.0$ Gyr).
- [WDCS vs MSTO ages comparison](../03_Zettel/Theory/WDCS%20vs%20MSTO%20ages%20comparison.html) — independent age methods that agree are a triumph of stellar physics.
- [Initial-final mass relation IFMR](../03_Zettel/Theory/Initial-final%20mass%20relation%20IFMR.html) — $M_{\rm WD}(M_{\rm i})$ from open cluster WDs.

## Block 6 — stellar spectroscopy + atmospheric parameters

how to extract $T_{\rm eff}$, $\log g$, [Fe/H], chemical abundances, $v_r$, rotation from spectra.

- [Stellar atmosphere structure](../03_Zettel/Theory/Stellar%20atmosphere%20structure.html) — $T(\tau)$, hydrostatic eq, opacity. (exists)
- [Saha equation and recombination](../03_Zettel/Theory/Saha%20equation%20and%20recombination.html) — ionisation balance. (exists)
- [Saha ionisation equation](../03_Zettel/Theory/Saha%20ionisation%20equation.html) — multi-stage version. (exists)
- [Stellar spectral types OBAFGKM](../03_Zettel/Theory/Stellar%20spectral%20types%20OBAFGKM.html) — temperature sequence. luminosity classes I-V.
- [History of stellar classification](../03_Zettel/Theory/History%20of%20stellar%20classification.html) — Harvard system, Maury, Cannon. (exists)
- Equivalent width and curve of growth — measure abundances via line strength.
- LTE vs NLTE in stellar atmospheres — assumptions, when each fails (hot stars, metal-poor giants).
- [Atmospheric parameters Teff log g feh vmicro](../03_Zettel/Theory/interf/Atmospheric%20parameters%20Teff%20log%20g%20feh%20vmicro.html) — the four numbers extracted from any optical spectrum.
- [Spectroscopic determination of Teff](../03_Zettel/Theory/Spectroscopic%20determination%20of%20Teff.html) — Balmer-line wings + colour calibrations + line-depth ratios.
- [Spectroscopic determination of log g](../03_Zettel/Theory/Spectroscopic%20determination%20of%20log%20g.html) — wings of strong lines (Mg I b, Ca II); ionisation balance.
- [Spectroscopic determination of metallicity](../03_Zettel/Theory/Spectroscopic%20determination%20of%20metallicity.html) — Fe I + Fe II lines; differential analysis.
- Microturbulence in stellar spectroscopy — non-thermal velocity broadening; $v_{\rm micro} \sim 1-3$ km/s.
- [Radial velocity from stellar spectra](../03_Zettel/Theory/Radial%20velocity%20from%20stellar%20spectra.html) — cross-correlation with templates, Gaia RVS, MUSE-NFM.
- [Stellar rotation v sini](../03_Zettel/Theory/Stellar%20rotation%20v%20sini.html) — line broadening from rotation, used for cluster rotation studies.
- [Element abundance patterns](../03_Zettel/Theory/Element%20abundance%20patterns.html) — alpha/Fe, [C/N], [O/Fe], used to identify multiple populations.

## Block 7 — differential reddening (Lecture 10)

extension of Block 2; how to map + correct differential reddening across a cluster field.

- [Differential reddening maps](../03_Zettel/Theory/Differential%20reddening%20maps.html) — Milone et al. 2012 technique. uses position-dependent fiducial-line offsets in CMD.
- [Effects of differential reddening on CMD analysis](../03_Zettel/Theory/Effects%20of%20differential%20reddening%20on%20CMD%20analysis.html) — broadens MS + TO; can be confused with multiple populations or spread in metallicity. critical to correct before interpreting MPs.

## Block 8 — binaries, blue stragglers, and exotic objects

these populate the **off-isochrone** regions of the CMD.

- [Binary stars in CMD](../03_Zettel/Theory/Binary%20stars%20in%20CMD.html) — equal-mass binary lies $0.75$ mag above MS in $V$. binary fraction inferred from fraction of stars in this displaced sequence.
- [Cluster binary fraction methods](../03_Zettel/Theory/Cluster%20binary%20fraction%20methods.html) — fitting double-MS + radial velocity follow-up.
- [Blue stragglers in star clusters](../03_Zettel/Theory/Blue%20stragglers%20in%20star%20clusters.html) — stars brighter + bluer than the MSTO. anomalous in coeval SSPs.
- [Blue straggler formation channels](../03_Zettel/Theory/Blue%20straggler%20formation%20channels.html) — collisional + binary mass transfer + binary mergers. dominant in dense vs sparse clusters.
- [Cataclysmic variables in clusters](../03_Zettel/Theory/Cataclysmic%20variables%20in%20clusters.html) — WD accreting from companion. detected via UV excess + variability.
- [Millisecond pulsars in GCs](../03_Zettel/Theory/Millisecond%20pulsars%20in%20GCs.html) — recycled NSs spun up by accretion. Terzan 5 has $> 30$ MSPs.
- [X-ray sources in globular clusters](../03_Zettel/Theory/X-ray%20sources%20in%20globular%20clusters.html) — LMXBs, qLMXBs, CVs. tracers of binary populations.
- [Yellow stragglers and sub-subgiants](../03_Zettel/Theory/Yellow%20stragglers%20and%20sub-subgiants.html) — peculiar CMD positions; binary evolution products.

## Block 9 — stellar mass function + hunting black holes

inferring the IMF + present-day MF from cluster CMDs. inferring black hole populations from dynamics + accretion.

- [Stellar mass function xi(M)](../03_Zettel/Theory/Stellar%20mass%20function%20xi%28M%29.html) — distribution of stars per unit mass: $\xi(M) = dN/dM$, IMF vs PDMF in clusters, Salpeter/Kroupa/Chabrier forms.
- [Salpeter Kroupa Chabrier IMFs](../03_Zettel/Theory/Salpeter%20Kroupa%20Chabrier%20IMFs.html) — Salpeter $\xi(M) \propto M^{-2.35}$ for $M > 0.5 M_\odot$. Kroupa + Chabrier add low-mass break/lognormal.
- [Initial vs present-day mass function](../03_Zettel/Theory/Initial%20vs%20present-day%20mass%20function.html) — IMF + stellar evolution + dynamical evaporation $\to$ PDMF. low-mass stars preferentially evaporated.
- [IMF from cluster luminosity functions](../03_Zettel/Theory/IMF%20from%20cluster%20luminosity%20functions.html) — convert observed LF to MF via mass-luminosity relation.
- [Black holes in globular clusters](../03_Zettel/Theory/Black%20holes%20in%20globular%20clusters.html) — dynamical signatures (stellar BH retention), accretion + radio emission, X-ray binaries.
- [Hunting BHs via radial velocities](../03_Zettel/Theory/Hunting%20BHs%20via%20radial%20velocities.html) — single-line spectroscopic binaries with massive dark companions. NGC 3201, M22, others.
- [Intermediate-mass BHs in GCs](../03_Zettel/Theory/Intermediate-mass%20BHs%20in%20GCs.html) — controversial; pulsar timing + central kinematics hints.
- [BHs from gravitational waves](../03_Zettel/Theory/BHs%20from%20gravitational%20waves.html) — LIGO-Virgo events; possible globular-cluster origin via dynamical formation.

## Block 10 — the first stars (Pop III)

the predicted zero-metallicity first generation.

- [Population III stars](../03_Zettel/Theory/Population%20III%20stars.html) — $Z = 0$, top-heavy IMF predicted (no metal-line cooling), $M \sim 10$ to $1000 M_\odot$.
- [Critical metallicity for fragmentation](../03_Zettel/Theory/Critical%20metallicity%20for%20fragmentation.html) — $Z_{\rm crit} \sim 10^{-5}$ to $10^{-4} Z_\odot$. below this, no efficient cooling channel.
- [Pop III nucleosynthesis signatures](../03_Zettel/Theory/Pop%20III%20nucleosynthesis%20signatures.html) — peculiar abundance patterns: CEMP-no, r-process II stars, no s-process.
- [Search for Pop III stars in dwarf galaxies](../03_Zettel/Theory/Search%20for%20Pop%20III%20stars%20in%20dwarf%20galaxies.html) — UFDGs as best hunting ground; SkyMapper survey, Pristine survey.
- [JWST and the first stars](../03_Zettel/Theory/JWST%20and%20the%20first%20stars.html) — direct detection of Pop III SF regions at $z \sim 10$-$15$.

## Block 11 — multiple stellar populations in globular clusters

**Milone's signature topic**. since 2000s it is clear GCs are NOT simple SSPs but host $\geq 2$ populations differing in light-element abundances.

- [Multiple populations in GCs discovery](../03_Zettel/Theory/Multiple%20populations%20in%20GCs%20discovery.html) — first noticed via Na-O anti-correlation (Carretta + Gratton 1990s). photometric confirmation: Bedin et al. 2004 ($\omega$ Cen), Piotto et al. 2007 (NGC 2808 triple MS).
- [Na O anticorrelation](../03_Zettel/Theory/Na%20O%20anticorrelation.html) — first generation: Na-poor + O-rich. second generation: Na-rich + O-poor. signature of high-T H burning.
- [CN CH MgAl anticorrelations](../03_Zettel/Theory/CN%20CH%20MgAl%20anticorrelations.html) — extended chemical fingerprints of MPs.
- [Helium spread in GCs](../03_Zettel/Theory/Helium%20spread%20in%20GCs.html) — second-generation stars helium-enhanced ($Y$ up to $0.40$); explains hot HB extensions.
- [Polluter scenarios for second-generation GC stars](../03_Zettel/Theory/Polluter%20scenarios%20for%20second-generation%20GC%20stars.html) — AGB stars, fast rotating massive stars, supermassive stars, binaries. open problem.
- [Photometric chromosome maps](../03_Zettel/Theory/Photometric%20chromosome%20maps.html) — Milone et al. 2017 + 2018. plot $\Delta_{F275W,F814W}$ vs $\Delta_{C\,F275W,F336W,F438W}$. cleanly separates 1G from 2G.
- [Type I and Type II GCs](../03_Zettel/Theory/Type%20I%20and%20Type%20II%20GCs.html) — Type II: have a split + iron-enriched 2P. e.g. NGC 1851, M22, $\omega$ Cen.
- [Mass dependence of multiple populations](../03_Zettel/Theory/Mass%20dependence%20of%20multiple%20populations.html) — fraction of 2P stars increases with cluster mass.
- [GC formation models with MPs](../03_Zettel/Theory/GC%20formation%20models%20with%20MPs.html) — internal SF + retention of polluter ejecta. links to early-Galaxy clustering.
- [Multiple populations in extragalactic GCs](../03_Zettel/Theory/Multiple%20populations%20in%20extragalactic%20GCs.html) — LMC + SMC clusters, M31. tells us MPs are universal in massive old GCs.

## Block 12 — the extended main sequence phenomenon

young + intermediate-age clusters in the LMC + SMC + Milky Way show a broadened MS turn-off.

- [Extended main sequence turn-off eMSTO](../03_Zettel/Theory/Extended%20main%20sequence%20turn-off%20eMSTO.html) — observed in $1$-$2$ Gyr clusters; turn-off width $\sim 0.1$-$0.3$ mag.
- [Origin of eMSTO age spread or rotation](../03_Zettel/Theory/Origin%20of%20eMSTO%20age%20spread%20or%20rotation.html) — initial proposal: age spread of $\sim 200$-$500$ Myr. now favoured: stellar rotation broadens TO via $T_{\rm eff}$ + $\log g$ shifts.
- [Stellar rotation effects on CMD](../03_Zettel/Theory/Stellar%20rotation%20effects%20on%20CMD.html) — gravity darkening, mixing, He enrichment in fast rotators.
- [Splitting of the upper MS in young clusters](../03_Zettel/Theory/Splitting%20of%20the%20upper%20MS%20in%20young%20clusters.html) — bifurcation seen in NGC 1755, NGC 1850, etc. = slow + fast rotators.
- [eMSTO and multiple populations connection](../03_Zettel/Theory/eMSTO%20and%20multiple%20populations%20connection.html) — young eMSTO clusters might be the present-day analogues of what GCs were at $\sim 1$ Gyr.

## Block 13 — the Bulge (carryover Lecture 19 from AY 24/25)

old, metal-rich population at the centre of the Milky Way. boxy/peanut bar.

- [The Galactic Bulge](../03_Zettel/Theory/The%20Galactic%20Bulge.html) — $\sim 10$ Gyr, $-1 < $ [Fe/H] $< +0.5$, boxy/peanut shape from bar buckling.
- [Bulge microlensing surveys](../03_Zettel/Theory/Bulge%20microlensing%20surveys.html) — OGLE + MACHO + EROS. proper motions + distances of bulge dwarfs.
- [Bulge CMD complications](../03_Zettel/Theory/Bulge%20CMD%20complications.html) — high reddening + crowding + foreground disk contamination. JWST helps.

## the 12 cold derivations + 8 conceptual essays (T1)

these are the things I should master cold for the exam.

### derivations
1. **mass-luminosity scaling on the MS**: $L \propto M^4$ (low-mass), $L \propto M^3$ (high-mass). MS lifetime $\tau \propto M^{-2.5}$.
2. **MSTO age**: relate $M_{\rm TO}$ to age via $\tau \approx 10\,(M/M_\odot)^{-2.5}$ Gyr.
3. **distance modulus** $m - M = 5\log_{10}(d/10\,{\rm pc}) + A_V$. with reddening.
4. **Chandrasekhar mass** $M_{\rm Ch} \approx 1.46 (\mu_e/2)^{-2} M_\odot$ from polytropic balance — full derivation from Fermi-Dirac degenerate electron pressure through the $n=3$ Lane-Emden limit in [Chandrasekhar mass limit](../03_Zettel/Theory/Chandrasekhar%20mass%20limit.html).
5. **Mestel WD cooling** $\tau \propto L^{-5/7}$, with assumptions.
6. **isochrone equation** in CMD: locus of $(M_V, B-V)$ for fixed $t, [Fe/H], M$ varied.
7. **reddening vector slope** in CMD: $A_V/E(B-V) = R_V$.
8. **Salpeter IMF integral**: $N(>M)$, $L_{\rm tot}$, $M_{\rm tot}$.
9. **Mass-radius relation** for non-relativistic + relativistic WDs.
10. **Saha equation** + ionisation fraction in stellar atmospheres.
11. **equivalent width** integral + curve of growth regimes (linear, saturated, damped).
12. **chromosome map construction**: pseudo-colour definitions $\Delta_{F275W,F814W}$ + $\Delta_{C\,F275W,F336W,F438W}$ — formal verticalized-residual construction in [Photometric chromosome maps](../03_Zettel/Theory/Photometric%20chromosome%20maps.html).

### conceptual essays
1. why is a CMD better than an HRD for **observers**? (filters not bolometric).
2. why are **GCs the gold standard SSP laboratories**? old + populous + chemically homogeneous (almost).
3. what makes the **WDCS** an independent age clock from the MSTO?
4. why does **differential reddening** broaden the MS, and how is it disentangled from MPs?
5. what is the **evidence that GCs are NOT simple SSPs** (light-element anticorrelations, He spread, chromosome maps)?
6. why are **UFDGs** unique probes of dark matter + Pop III?
7. what causes the **eMSTO** in young clusters (rotation vs age spread debate)?
8. how does the **age-metallicity relation of GCs** trace **two channels of Galactic assembly** (in situ + accretion)?

## Literature & Primary Sources

Canonical and modern arXiv astro-ph.SR benchmark papers underlying the stellar-structure formalism, isochrone modeling, and multiple-populations diagnostics above.

- **Asplund et al. (2009)**, *ARA&A* 47, 481, [arXiv:0909.0948](https://arxiv.org/abs/0909.0948) — solar chemical composition from 3D RHD atmospheres; see also the updated Asplund, Amarsi & Grevesse (2021), *A&A* 653, A141, [arXiv:2105.01661](https://arxiv.org/abs/2105.01661). Full synthesis: [Asplund et al. (2009) — Chemical Composition of the Sun](../02_Literature/Papers/04_Astronomical_Spectroscopy/Asplund_2009_Chemical_Composition_of_the_Sun.html).
- **Bressan et al. (2012)**, *MNRAS* 427, 127, [arXiv:1208.4498](https://arxiv.org/abs/1208.4498) — PARSEC: the Padova-Trieste stellar evolution code underlying the isochrone grids used throughout this course's CMD/eMSTO modeling.
- **Milone et al. (2017)**, *MNRAS* 464, 3636, [arXiv:1610.00451](https://arxiv.org/abs/1610.00451) — HST UV Legacy Survey IX, "The Atlas of Multiple Stellar Populations": chromosome maps for 57 Galactic GCs. See [Photometric chromosome maps](../03_Zettel/Theory/Photometric%20chromosome%20maps.html).
- **Bastian & Lardo (2018)**, *ARA&A* 56, 83, [arXiv:1712.01286](https://arxiv.org/abs/1712.01286) — comprehensive review of multiple-populations observations and the still-unresolved polluter/mass-budget problem.
- **Gaia Collaboration / Vallenari et al. (2023)**, *A&A* 674, A1, [arXiv:2208.00211](https://arxiv.org/abs/2208.00211) — Gaia DR3: resolved cluster kinematics, proper-motion-cleaned CMDs, and white-dwarf cooling-track astrometry used across Blocks 5, 9, and 11.

*Provenance note*: two arXiv IDs in this list were corrected during verification — Bastian & Lardo (2018) is arXiv:1712.01286 (not 1712.05621), and Bressan et al. (2012) is arXiv:1208.4498 (not 1208.3598).

---

## the panic page (for exam morning)

a 90-second version of the entire course:

> stellar astrophysics is the science of reading the **color-magnitude diagram** of a resolved stellar system. a CMD is a scatter plot of magnitude vs colour for individual stars in a cluster. its morphology encodes age, metallicity, distance, reddening, IMF, binarity, and multiple populations. the principal evolutionary phases on the CMD are the main sequence (core H burning), the turn-off (H exhaustion), the subgiant branch + red giant branch (shell H burning, degenerate He core), the helium flash + horizontal branch (core He burning), the asymptotic giant branch (double shell burning + thermal pulses + mass loss), and the white-dwarf cooling sequence ($M < 8 M_\odot$). globular clusters were historically considered the best example of simple stellar populations and provide the cleanest age-metallicity-distance constraints. since 2000 it has been clear that GCs are NOT simple: they host multiple populations differing in helium + light elements (Na, O, Al, Mg) but not in iron, identifiable via Milone-style chromosome maps. the age-metallicity relation of Galactic GCs separates an in-situ inner-halo population (rapid enrichment) from an accreted outer-halo population (Sgr, Gaia-Enceladus). ultra-faint dwarf galaxies are extreme low-luminosity dark-matter-dominated halos that fossilise the pre-reionisation chemical state of the universe and contain the best evidence for Pop III nucleosynthesis. white dwarfs cool predictably and provide an independent age clock that agrees with the MSTO; their luminosity function in NGC 6397 yields $11.47 \pm 0.47$ Gyr (Hansen 2007). reddening is a critical correction; the extinction law $R_V = A_V/E(B-V) = 3.1$ in the diffuse ISM and varies in dense regions; differential reddening can mimic multiple populations. blue stragglers, binaries, cataclysmic variables, MSPs, and X-ray sources populate the off-isochrone regions and probe dynamical evolution. the IMF (Salpeter, Kroupa, Chabrier) inferred from cluster LFs constrains stellar formation. eMSTO in young clusters reveals stellar rotation effects on CMDs. the Bulge is old + metal-rich + bar-shaped, and JWST is now opening the high-z stellar-population frontier.

## see also

- [Observational_Astrophysics_MOC](Observational_Astrophysics_MOC.html) — observational pipeline, photometric concepts, distance ladder, and population synthesis.
- [Stellar Astrophysics research citations index](../03_Zettel/Theory/Stellar%20Astrophysics%20research%20citations%20index.html) — master list of papers/surveys cited across 19 lectures.
- [Astrophysics_of_Galaxies_MOC](Astrophysics_of_Galaxies_MOC.html) — galaxy-scale stellar populations.
- [Observational_Cosmology_MOC](Observational_Cosmology_MOC.html) — first stars, cosmic SFR, reionisation.
- [Astronomical_Spectroscopy_MOC](Astronomical_Spectroscopy_MOC.html) — spectroscopic foundation.
- [Fundamentals_Astrophysics_Cosmology_MOC](Fundamentals_Astrophysics_Cosmology_MOC.html) — stellar structure foundation.
- [General_Relativity_MOC](General_Relativity_MOC.html) — neutron stars + Schwarzschild end states.
- Exams summer 2026 master plan — global study plan.

---

## Master Figure Index

Every single figure, CMD diagram, and lecture slide extracted from Prof. Antonino Milone's complete course materials is cataloged below with direct links to its high-resolution render in `07_Images/Stellar_Astrophysics/` and its corresponding pedagogical context:

### Lecture 01: Reading the CMD I — Morphology, Sequences, and Cluster Taxonomy

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![L01_p14_CMD_evolutionary_phases-14.png](../assets/images/L01_p14_CMD_evolutionary_phases-14.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![L01_p23_stellar_pop_I_II-23.png](../assets/images/L01_p23_stellar_pop_I_II-23.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_01.png](../assets/images/LAntonino_p01_01.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_02.png](../assets/images/LAntonino_p01_02.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_03.png](../assets/images/LAntonino_p01_03.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_04.png](../assets/images/LAntonino_p01_04.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_05.png](../assets/images/LAntonino_p01_05.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_06.png](../assets/images/LAntonino_p01_06.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_07.png](../assets/images/LAntonino_p01_07.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_08.png](../assets/images/LAntonino_p01_08.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_09.png](../assets/images/LAntonino_p01_09.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_10.png](../assets/images/LAntonino_p01_10.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_11.png](../assets/images/LAntonino_p01_11.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_12.png](../assets/images/LAntonino_p01_12.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_13.png](../assets/images/LAntonino_p01_13.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_14.png](../assets/images/LAntonino_p01_14.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_15.png](../assets/images/LAntonino_p01_15.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_16.png](../assets/images/LAntonino_p01_16.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_17.png](../assets/images/LAntonino_p01_17.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_18.png](../assets/images/LAntonino_p01_18.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_19.png](../assets/images/LAntonino_p01_19.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_20.png](../assets/images/LAntonino_p01_20.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_21.png](../assets/images/LAntonino_p01_21.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_22.png](../assets/images/LAntonino_p01_22.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_23.png](../assets/images/LAntonino_p01_23.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_24.png](../assets/images/LAntonino_p01_24.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |
| `![LAntonino_p01_25.png](../assets/images/LAntonino_p01_25.png)` | Lecture slide / observational figure from P01 covering Lecture 01: Reading the CMD I | Lecture 01: Reading the CMD I |

### Lecture 02: Reading the CMD II — Isochrone Fitting, Turnoff Age, and Distance Modulus

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![LAntonino_p02_01.png](../assets/images/LAntonino_p02_01.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_02.png](../assets/images/LAntonino_p02_02.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_03.png](../assets/images/LAntonino_p02_03.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_04.png](../assets/images/LAntonino_p02_04.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_05.png](../assets/images/LAntonino_p02_05.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_06.png](../assets/images/LAntonino_p02_06.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_07.png](../assets/images/LAntonino_p02_07.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_08.png](../assets/images/LAntonino_p02_08.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_09.png](../assets/images/LAntonino_p02_09.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_10.png](../assets/images/LAntonino_p02_10.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_11.png](../assets/images/LAntonino_p02_11.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_12.png](../assets/images/LAntonino_p02_12.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_13.png](../assets/images/LAntonino_p02_13.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_14.png](../assets/images/LAntonino_p02_14.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_15.png](../assets/images/LAntonino_p02_15.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_16.png](../assets/images/LAntonino_p02_16.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_17.png](../assets/images/LAntonino_p02_17.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_18.png](../assets/images/LAntonino_p02_18.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_19.png](../assets/images/LAntonino_p02_19.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_20.png](../assets/images/LAntonino_p02_20.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_21.png](../assets/images/LAntonino_p02_21.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_22.png](../assets/images/LAntonino_p02_22.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_23.png](../assets/images/LAntonino_p02_23.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_24.png](../assets/images/LAntonino_p02_24.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![LAntonino_p02_25.png](../assets/images/LAntonino_p02_25.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![Lecture02_p15-15.png](../assets/images/Lecture02_p15-15.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![Lecture02_p25-25.png](../assets/images/Lecture02_p25-25.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![Lecture02_p35-35.png](../assets/images/Lecture02_p35-35.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |
| `![Lecture02_p5-05.png](../assets/images/Lecture02_p5-05.png)` | Lecture slide / observational figure from P02 covering Lecture 02: Reading the CMD II | Lecture 02: Reading the CMD II |

### Lecture 03: Reading the CMD III — Chemical Composition, Metallicity, and Horizontal Branch

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![LAntonino_p03_01.png](../assets/images/LAntonino_p03_01.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_02.png](../assets/images/LAntonino_p03_02.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_03.png](../assets/images/LAntonino_p03_03.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_04.png](../assets/images/LAntonino_p03_04.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_05.png](../assets/images/LAntonino_p03_05.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_06.png](../assets/images/LAntonino_p03_06.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_07.png](../assets/images/LAntonino_p03_07.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_08.png](../assets/images/LAntonino_p03_08.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_09.png](../assets/images/LAntonino_p03_09.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_10.png](../assets/images/LAntonino_p03_10.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_11.png](../assets/images/LAntonino_p03_11.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_12.png](../assets/images/LAntonino_p03_12.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_13.png](../assets/images/LAntonino_p03_13.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_14.png](../assets/images/LAntonino_p03_14.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_15.png](../assets/images/LAntonino_p03_15.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_16.png](../assets/images/LAntonino_p03_16.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_17.png](../assets/images/LAntonino_p03_17.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_18.png](../assets/images/LAntonino_p03_18.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_19.png](../assets/images/LAntonino_p03_19.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_20.png](../assets/images/LAntonino_p03_20.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_21.png](../assets/images/LAntonino_p03_21.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_22.png](../assets/images/LAntonino_p03_22.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_23.png](../assets/images/LAntonino_p03_23.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_24.png](../assets/images/LAntonino_p03_24.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![LAntonino_p03_25.png](../assets/images/LAntonino_p03_25.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![Lecture03_p15-15.png](../assets/images/Lecture03_p15-15.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![Lecture03_p25-25.png](../assets/images/Lecture03_p25-25.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![Lecture03_p35-35.png](../assets/images/Lecture03_p35-35.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |
| `![Lecture03_p5-05.png](../assets/images/Lecture03_p5-05.png)` | Lecture slide / observational figure from P03 covering Lecture 03: Reading the CMD III | Lecture 03: Reading the CMD III |

### Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![L04I_p05_reddening-05.png](../assets/images/L04I_p05_reddening-05.png)` | Differential reddening map or extinction vector correction | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_01.png](../assets/images/LAntonino_p04_01.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_02.png](../assets/images/LAntonino_p04_02.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_03.png](../assets/images/LAntonino_p04_03.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_04.png](../assets/images/LAntonino_p04_04.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_05.png](../assets/images/LAntonino_p04_05.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_06.png](../assets/images/LAntonino_p04_06.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_07.png](../assets/images/LAntonino_p04_07.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_08.png](../assets/images/LAntonino_p04_08.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_09.png](../assets/images/LAntonino_p04_09.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_10.png](../assets/images/LAntonino_p04_10.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_11.png](../assets/images/LAntonino_p04_11.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_12.png](../assets/images/LAntonino_p04_12.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_13.png](../assets/images/LAntonino_p04_13.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_14.png](../assets/images/LAntonino_p04_14.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_15.png](../assets/images/LAntonino_p04_15.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_16.png](../assets/images/LAntonino_p04_16.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_17.png](../assets/images/LAntonino_p04_17.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_18.png](../assets/images/LAntonino_p04_18.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_19.png](../assets/images/LAntonino_p04_19.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_20.png](../assets/images/LAntonino_p04_20.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_21.png](../assets/images/LAntonino_p04_21.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_22.png](../assets/images/LAntonino_p04_22.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_23.png](../assets/images/LAntonino_p04_23.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_24.png](../assets/images/LAntonino_p04_24.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![LAntonino_p04_25.png](../assets/images/LAntonino_p04_25.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![Lecture04pII_p15-15.png](../assets/images/Lecture04pII_p15-15.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![Lecture04pII_p25-25.png](../assets/images/Lecture04pII_p25-25.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![Lecture04pII_p35-35.png](../assets/images/Lecture04pII_p35-35.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![Lecture04pII_p5-05.png](../assets/images/Lecture04pII_p5-05.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![Lecture04pI_p15-15.png](../assets/images/Lecture04pI_p15-15.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |
| `![Lecture04pI_p5-05.png](../assets/images/Lecture04pI_p5-05.png)` | Lecture slide / observational figure from P04 covering Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly | Lecture 04: Interstellar Reddening, Extinction Laws, and Galactic Assembly |

### Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![L05_p05_UFDG-05.png](../assets/images/L05_p05_UFDG-05.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_01.png](../assets/images/LAntonino_p05_01.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_02.png](../assets/images/LAntonino_p05_02.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_03.png](../assets/images/LAntonino_p05_03.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_04.png](../assets/images/LAntonino_p05_04.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_05.png](../assets/images/LAntonino_p05_05.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_06.png](../assets/images/LAntonino_p05_06.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_07.png](../assets/images/LAntonino_p05_07.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_08.png](../assets/images/LAntonino_p05_08.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_09.png](../assets/images/LAntonino_p05_09.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_10.png](../assets/images/LAntonino_p05_10.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_11.png](../assets/images/LAntonino_p05_11.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_12.png](../assets/images/LAntonino_p05_12.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_13.png](../assets/images/LAntonino_p05_13.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_14.png](../assets/images/LAntonino_p05_14.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_15.png](../assets/images/LAntonino_p05_15.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_16.png](../assets/images/LAntonino_p05_16.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_17.png](../assets/images/LAntonino_p05_17.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_18.png](../assets/images/LAntonino_p05_18.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_19.png](../assets/images/LAntonino_p05_19.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_20.png](../assets/images/LAntonino_p05_20.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_21.png](../assets/images/LAntonino_p05_21.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_22.png](../assets/images/LAntonino_p05_22.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_23.png](../assets/images/LAntonino_p05_23.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_24.png](../assets/images/LAntonino_p05_24.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![LAntonino_p05_25.png](../assets/images/LAntonino_p05_25.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![Lecture05pI_p15-15.png](../assets/images/Lecture05pI_p15-15.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![Lecture05pI_p25-25.png](../assets/images/Lecture05pI_p25-25.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![Lecture05pI_p35-35.png](../assets/images/Lecture05pI_p35-35.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |
| `![Lecture05pI_p5-05.png](../assets/images/Lecture05pI_p5-05.png)` | Lecture slide / observational figure from P05 covering Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants | Lecture 05: Ultra-Faint Dwarf Galaxies (UFDGs), Dark Matter Halos, and Pop III Remnants |

### Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![L06_p05_stellar_evolution_CMD-05.png](../assets/images/L06_p05_stellar_evolution_CMD-05.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![L06_p07_WD_blueturn-07.png](../assets/images/L06_p07_WD_blueturn-07.png)` | White dwarf cooling track, Hansen et al. cosmochronology or CIA blue turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![L06_p07_WD_blueturn.png](../assets/images/L06_p07_WD_blueturn.png)` | White dwarf cooling track, Hansen et al. cosmochronology or CIA blue turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![L06_p11_white_dwarf_HRD-11.png](../assets/images/L06_p11_white_dwarf_HRD-11.png)` | White dwarf cooling track, Hansen et al. cosmochronology or CIA blue turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![L06_p12_WD_cooling_age-12.png](../assets/images/L06_p12_WD_cooling_age-12.png)` | White dwarf cooling track, Hansen et al. cosmochronology or CIA blue turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![L06_p13_NGC6397_WDage-13.png](../assets/images/L06_p13_NGC6397_WDage-13.png)` | White dwarf cooling track, Hansen et al. cosmochronology or CIA blue turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![L06_p13_NGC6397_WDage.png](../assets/images/L06_p13_NGC6397_WDage.png)` | White dwarf cooling track, Hansen et al. cosmochronology or CIA blue turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![L06_p17_WDCS_47Tuc-17.png](../assets/images/L06_p17_WDCS_47Tuc-17.png)` | White dwarf cooling track, Hansen et al. cosmochronology or CIA blue turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![L06_p17_WDCS_47Tuc.png](../assets/images/L06_p17_WDCS_47Tuc.png)` | White dwarf cooling track, Hansen et al. cosmochronology or CIA blue turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![L06_p19_isochrones_metallicity-19.png](../assets/images/L06_p19_isochrones_metallicity-19.png)` | Theoretical isochrone grid fitting cluster main sequence turnoff and subgiant branch | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![L06_p19_isochrones_metallicity.png](../assets/images/L06_p19_isochrones_metallicity.png)` | Theoretical isochrone grid fitting cluster main sequence turnoff and subgiant branch | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![L06_p21_age_FeH_relation-21.png](../assets/images/L06_p21_age_FeH_relation-21.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![L06_p21_age_FeH_relation.png](../assets/images/L06_p21_age_FeH_relation.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_01.png](../assets/images/LAntonino_p06_01.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_02.png](../assets/images/LAntonino_p06_02.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_03.png](../assets/images/LAntonino_p06_03.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_04.png](../assets/images/LAntonino_p06_04.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_05.png](../assets/images/LAntonino_p06_05.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_06.png](../assets/images/LAntonino_p06_06.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_07.png](../assets/images/LAntonino_p06_07.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_08.png](../assets/images/LAntonino_p06_08.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_09.png](../assets/images/LAntonino_p06_09.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_10.png](../assets/images/LAntonino_p06_10.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_11.png](../assets/images/LAntonino_p06_11.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_12.png](../assets/images/LAntonino_p06_12.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_13.png](../assets/images/LAntonino_p06_13.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_14.png](../assets/images/LAntonino_p06_14.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_15.png](../assets/images/LAntonino_p06_15.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_16.png](../assets/images/LAntonino_p06_16.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_17.png](../assets/images/LAntonino_p06_17.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_18.png](../assets/images/LAntonino_p06_18.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_19.png](../assets/images/LAntonino_p06_19.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_20.png](../assets/images/LAntonino_p06_20.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_21.png](../assets/images/LAntonino_p06_21.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_22.png](../assets/images/LAntonino_p06_22.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_23.png](../assets/images/LAntonino_p06_23.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_24.png](../assets/images/LAntonino_p06_24.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |
| `![LAntonino_p06_25.png](../assets/images/LAntonino_p06_25.png)` | Lecture slide / observational figure from P06 covering Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn | Lecture 06: White Dwarf Cooling Sequences, Cosmochronology, and CIA Blue Turn |

### Lecture 07: Stellar Spectroscopy I — Atmospheric Stratification and Radiative Transfer

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![LAntonino_p07_01.png](../assets/images/LAntonino_p07_01.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_02.png](../assets/images/LAntonino_p07_02.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_03.png](../assets/images/LAntonino_p07_03.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_04.png](../assets/images/LAntonino_p07_04.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_05.png](../assets/images/LAntonino_p07_05.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_06.png](../assets/images/LAntonino_p07_06.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_07.png](../assets/images/LAntonino_p07_07.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_08.png](../assets/images/LAntonino_p07_08.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_09.png](../assets/images/LAntonino_p07_09.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_10.png](../assets/images/LAntonino_p07_10.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_11.png](../assets/images/LAntonino_p07_11.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_12.png](../assets/images/LAntonino_p07_12.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_13.png](../assets/images/LAntonino_p07_13.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_14.png](../assets/images/LAntonino_p07_14.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_15.png](../assets/images/LAntonino_p07_15.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_16.png](../assets/images/LAntonino_p07_16.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_17.png](../assets/images/LAntonino_p07_17.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_18.png](../assets/images/LAntonino_p07_18.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_19.png](../assets/images/LAntonino_p07_19.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_20.png](../assets/images/LAntonino_p07_20.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_21.png](../assets/images/LAntonino_p07_21.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_22.png](../assets/images/LAntonino_p07_22.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_23.png](../assets/images/LAntonino_p07_23.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_24.png](../assets/images/LAntonino_p07_24.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![LAntonino_p07_25.png](../assets/images/LAntonino_p07_25.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![Lecture07_p15-15.png](../assets/images/Lecture07_p15-15.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![Lecture07_p25-25.png](../assets/images/Lecture07_p25-25.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![Lecture07_p35-35.png](../assets/images/Lecture07_p35-35.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |
| `![Lecture07_p5-05.png](../assets/images/Lecture07_p5-05.png)` | Lecture slide / observational figure from P07 covering Lecture 07: Stellar Spectroscopy I | Lecture 07: Stellar Spectroscopy I |

### Lecture 08: Stellar Spectroscopy II — Equivalent Width, Line Broadening, and Curve of Growth

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![LAntonino_p08_01.png](../assets/images/LAntonino_p08_01.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_02.png](../assets/images/LAntonino_p08_02.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_03.png](../assets/images/LAntonino_p08_03.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_04.png](../assets/images/LAntonino_p08_04.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_05.png](../assets/images/LAntonino_p08_05.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_06.png](../assets/images/LAntonino_p08_06.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_07.png](../assets/images/LAntonino_p08_07.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_08.png](../assets/images/LAntonino_p08_08.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_09.png](../assets/images/LAntonino_p08_09.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_10.png](../assets/images/LAntonino_p08_10.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_11.png](../assets/images/LAntonino_p08_11.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_12.png](../assets/images/LAntonino_p08_12.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_13.png](../assets/images/LAntonino_p08_13.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_14.png](../assets/images/LAntonino_p08_14.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_15.png](../assets/images/LAntonino_p08_15.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_16.png](../assets/images/LAntonino_p08_16.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_17.png](../assets/images/LAntonino_p08_17.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_18.png](../assets/images/LAntonino_p08_18.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_19.png](../assets/images/LAntonino_p08_19.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_20.png](../assets/images/LAntonino_p08_20.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_21.png](../assets/images/LAntonino_p08_21.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_22.png](../assets/images/LAntonino_p08_22.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_23.png](../assets/images/LAntonino_p08_23.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_24.png](../assets/images/LAntonino_p08_24.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![LAntonino_p08_25.png](../assets/images/LAntonino_p08_25.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![Lecture08_p15-15.png](../assets/images/Lecture08_p15-15.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![Lecture08_p25-25.png](../assets/images/Lecture08_p25-25.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![Lecture08_p35-35.png](../assets/images/Lecture08_p35-35.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |
| `![Lecture08_p5-05.png](../assets/images/Lecture08_p5-05.png)` | Lecture slide / observational figure from P08 covering Lecture 08: Stellar Spectroscopy II | Lecture 08: Stellar Spectroscopy II |

### Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![LAntonino_p09_01.png](../assets/images/LAntonino_p09_01.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_02.png](../assets/images/LAntonino_p09_02.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_03.png](../assets/images/LAntonino_p09_03.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_04.png](../assets/images/LAntonino_p09_04.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_05.png](../assets/images/LAntonino_p09_05.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_06.png](../assets/images/LAntonino_p09_06.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_07.png](../assets/images/LAntonino_p09_07.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_08.png](../assets/images/LAntonino_p09_08.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_09.png](../assets/images/LAntonino_p09_09.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_10.png](../assets/images/LAntonino_p09_10.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_11.png](../assets/images/LAntonino_p09_11.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_12.png](../assets/images/LAntonino_p09_12.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_13.png](../assets/images/LAntonino_p09_13.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_14.png](../assets/images/LAntonino_p09_14.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_15.png](../assets/images/LAntonino_p09_15.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_16.png](../assets/images/LAntonino_p09_16.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_17.png](../assets/images/LAntonino_p09_17.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_18.png](../assets/images/LAntonino_p09_18.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_19.png](../assets/images/LAntonino_p09_19.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_20.png](../assets/images/LAntonino_p09_20.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_21.png](../assets/images/LAntonino_p09_21.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_22.png](../assets/images/LAntonino_p09_22.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_23.png](../assets/images/LAntonino_p09_23.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_24.png](../assets/images/LAntonino_p09_24.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![LAntonino_p09_25.png](../assets/images/LAntonino_p09_25.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![Lecture09a_p15-15.png](../assets/images/Lecture09a_p15-15.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![Lecture09a_p5-05.png](../assets/images/Lecture09a_p5-05.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![Lecture09b_p15-15.png](../assets/images/Lecture09b_p15-15.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![Lecture09b_p25-25.png](../assets/images/Lecture09b_p25-25.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![Lecture09b_p35-35.png](../assets/images/Lecture09b_p35-35.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |
| `![Lecture09b_p5-05.png](../assets/images/Lecture09b_p5-05.png)` | Lecture slide / observational figure from P09 covering Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements | [[Lecture 09: Atmospheric Parameters (Teff, log g, [Fe/H], v_micro) and Alpha Elements]] |

### Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![LAntonino_p10_01.png](../assets/images/LAntonino_p10_01.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_02.png](../assets/images/LAntonino_p10_02.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_03.png](../assets/images/LAntonino_p10_03.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_04.png](../assets/images/LAntonino_p10_04.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_05.png](../assets/images/LAntonino_p10_05.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_06.png](../assets/images/LAntonino_p10_06.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_07.png](../assets/images/LAntonino_p10_07.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_08.png](../assets/images/LAntonino_p10_08.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_09.png](../assets/images/LAntonino_p10_09.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_10.png](../assets/images/LAntonino_p10_10.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_11.png](../assets/images/LAntonino_p10_11.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_12.png](../assets/images/LAntonino_p10_12.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_13.png](../assets/images/LAntonino_p10_13.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_14.png](../assets/images/LAntonino_p10_14.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_15.png](../assets/images/LAntonino_p10_15.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_16.png](../assets/images/LAntonino_p10_16.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_17.png](../assets/images/LAntonino_p10_17.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_18.png](../assets/images/LAntonino_p10_18.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_19.png](../assets/images/LAntonino_p10_19.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_20.png](../assets/images/LAntonino_p10_20.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_21.png](../assets/images/LAntonino_p10_21.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_22.png](../assets/images/LAntonino_p10_22.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_23.png](../assets/images/LAntonino_p10_23.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_24.png](../assets/images/LAntonino_p10_24.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![LAntonino_p10_25.png](../assets/images/LAntonino_p10_25.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![Lecture10_p15-15.png](../assets/images/Lecture10_p15-15.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![Lecture10_p25-25.png](../assets/images/Lecture10_p25-25.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![Lecture10_p35-35.png](../assets/images/Lecture10_p35-35.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |
| `![Lecture10_p5-05.png](../assets/images/Lecture10_p5-05.png)` | Lecture slide / observational figure from P10 covering Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening | Lecture 10: Differential Reddening Mapping (Milone 2012 Method) and CMD De-reddening |

### Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![LAntonino_p11_01.png](../assets/images/LAntonino_p11_01.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_02.png](../assets/images/LAntonino_p11_02.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_03.png](../assets/images/LAntonino_p11_03.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_04.png](../assets/images/LAntonino_p11_04.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_05.png](../assets/images/LAntonino_p11_05.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_06.png](../assets/images/LAntonino_p11_06.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_07.png](../assets/images/LAntonino_p11_07.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_08.png](../assets/images/LAntonino_p11_08.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_09.png](../assets/images/LAntonino_p11_09.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_10.png](../assets/images/LAntonino_p11_10.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_11.png](../assets/images/LAntonino_p11_11.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_12.png](../assets/images/LAntonino_p11_12.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_13.png](../assets/images/LAntonino_p11_13.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_14.png](../assets/images/LAntonino_p11_14.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_15.png](../assets/images/LAntonino_p11_15.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_16.png](../assets/images/LAntonino_p11_16.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_17.png](../assets/images/LAntonino_p11_17.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_18.png](../assets/images/LAntonino_p11_18.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_19.png](../assets/images/LAntonino_p11_19.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_20.png](../assets/images/LAntonino_p11_20.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_21.png](../assets/images/LAntonino_p11_21.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_22.png](../assets/images/LAntonino_p11_22.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_23.png](../assets/images/LAntonino_p11_23.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_24.png](../assets/images/LAntonino_p11_24.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![LAntonino_p11_25.png](../assets/images/LAntonino_p11_25.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![Lecture11_p15-15.png](../assets/images/Lecture11_p15-15.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![Lecture11_p25-25.png](../assets/images/Lecture11_p25-25.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![Lecture11_p35-35.png](../assets/images/Lecture11_p35-35.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |
| `![Lecture11_p5-05.png](../assets/images/Lecture11_p5-05.png)` | Lecture slide / observational figure from P11 covering Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution | Lecture 11: Binary Stars in Clusters, Sequence Elevation, and Mass Ratio Distribution |

### Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![LAntonino_p12_01.png](../assets/images/LAntonino_p12_01.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_02.png](../assets/images/LAntonino_p12_02.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_03.png](../assets/images/LAntonino_p12_03.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_04.png](../assets/images/LAntonino_p12_04.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_05.png](../assets/images/LAntonino_p12_05.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_06.png](../assets/images/LAntonino_p12_06.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_07.png](../assets/images/LAntonino_p12_07.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_08.png](../assets/images/LAntonino_p12_08.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_09.png](../assets/images/LAntonino_p12_09.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_10.png](../assets/images/LAntonino_p12_10.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_11.png](../assets/images/LAntonino_p12_11.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_12.png](../assets/images/LAntonino_p12_12.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_13.png](../assets/images/LAntonino_p12_13.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_14.png](../assets/images/LAntonino_p12_14.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_15.png](../assets/images/LAntonino_p12_15.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_16.png](../assets/images/LAntonino_p12_16.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_17.png](../assets/images/LAntonino_p12_17.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_18.png](../assets/images/LAntonino_p12_18.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_19.png](../assets/images/LAntonino_p12_19.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_20.png](../assets/images/LAntonino_p12_20.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_21.png](../assets/images/LAntonino_p12_21.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_22.png](../assets/images/LAntonino_p12_22.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_23.png](../assets/images/LAntonino_p12_23.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_24.png](../assets/images/LAntonino_p12_24.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![LAntonino_p12_25.png](../assets/images/LAntonino_p12_25.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![Lecture12_p15-15.png](../assets/images/Lecture12_p15-15.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![Lecture12_p25-25.png](../assets/images/Lecture12_p25-25.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![Lecture12_p35-35.png](../assets/images/Lecture12_p35-35.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |
| `![Lecture12_p5-05.png](../assets/images/Lecture12_p5-05.png)` | Lecture slide / observational figure from P12 covering Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries | Lecture 12: Blue Stragglers (BSS), Collisional Channels, and Exotic Compact Binaries |

### Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![LAntonino_p13_01.png](../assets/images/LAntonino_p13_01.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_02.png](../assets/images/LAntonino_p13_02.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_03.png](../assets/images/LAntonino_p13_03.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_04.png](../assets/images/LAntonino_p13_04.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_05.png](../assets/images/LAntonino_p13_05.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_06.png](../assets/images/LAntonino_p13_06.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_07.png](../assets/images/LAntonino_p13_07.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_08.png](../assets/images/LAntonino_p13_08.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_09.png](../assets/images/LAntonino_p13_09.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_10.png](../assets/images/LAntonino_p13_10.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_11.png](../assets/images/LAntonino_p13_11.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_12.png](../assets/images/LAntonino_p13_12.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_13.png](../assets/images/LAntonino_p13_13.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_14.png](../assets/images/LAntonino_p13_14.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_15.png](../assets/images/LAntonino_p13_15.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_16.png](../assets/images/LAntonino_p13_16.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_17.png](../assets/images/LAntonino_p13_17.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_18.png](../assets/images/LAntonino_p13_18.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_19.png](../assets/images/LAntonino_p13_19.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_20.png](../assets/images/LAntonino_p13_20.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_21.png](../assets/images/LAntonino_p13_21.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_22.png](../assets/images/LAntonino_p13_22.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_23.png](../assets/images/LAntonino_p13_23.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_24.png](../assets/images/LAntonino_p13_24.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![LAntonino_p13_25.png](../assets/images/LAntonino_p13_25.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![Lecture13_p15-15.png](../assets/images/Lecture13_p15-15.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |
| `![Lecture13_p5-05.png](../assets/images/Lecture13_p5-05.png)` | Lecture slide / observational figure from P13 covering Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention | Lecture 13: Stellar Mass Functions (IMF/PDMF), Mass Segregation, and Black Hole Retention |

### Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![L14_p05_first_stars-05.png](../assets/images/L14_p05_first_stars-05.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_01.png](../assets/images/LAntonino_p14_01.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_02.png](../assets/images/LAntonino_p14_02.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_03.png](../assets/images/LAntonino_p14_03.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_04.png](../assets/images/LAntonino_p14_04.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_05.png](../assets/images/LAntonino_p14_05.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_06.png](../assets/images/LAntonino_p14_06.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_07.png](../assets/images/LAntonino_p14_07.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_08.png](../assets/images/LAntonino_p14_08.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_09.png](../assets/images/LAntonino_p14_09.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_10.png](../assets/images/LAntonino_p14_10.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_11.png](../assets/images/LAntonino_p14_11.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_12.png](../assets/images/LAntonino_p14_12.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_13.png](../assets/images/LAntonino_p14_13.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_14.png](../assets/images/LAntonino_p14_14.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_15.png](../assets/images/LAntonino_p14_15.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_16.png](../assets/images/LAntonino_p14_16.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_17.png](../assets/images/LAntonino_p14_17.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_18.png](../assets/images/LAntonino_p14_18.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_19.png](../assets/images/LAntonino_p14_19.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_20.png](../assets/images/LAntonino_p14_20.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_21.png](../assets/images/LAntonino_p14_21.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_22.png](../assets/images/LAntonino_p14_22.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_23.png](../assets/images/LAntonino_p14_23.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_24.png](../assets/images/LAntonino_p14_24.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![LAntonino_p14_25.png](../assets/images/LAntonino_p14_25.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![Lecture14_p15-15.png](../assets/images/Lecture14_p15-15.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![Lecture14_p25-25.png](../assets/images/Lecture14_p25-25.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![Lecture14_p35-35.png](../assets/images/Lecture14_p35-35.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |
| `![Lecture14_p5-05.png](../assets/images/Lecture14_p5-05.png)` | Lecture slide / observational figure from P14 covering Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity | Lecture 14: Population III Stars, Zero-Metallicity Nucleosynthesis, and Critical Metallicity |

### Lecture 15: Multiple Populations in Globular Clusters I — Discovery, Na-O and Mg-Al Anticorrelations

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![L15_p05_chromosome_map_intro-05.png](../assets/images/L15_p05_chromosome_map_intro-05.png)` | Chromosome map (pseudo-color vs UV baseline) separating 1G/2G stellar generations | Lecture 15: Multiple Populations in Globular Clusters I |
| `![L15_p30_NaO_anticorr-30.png](../assets/images/L15_p30_NaO_anticorr-30.png)` | Na-O light element anticorrelation signature of high-temperature CNO burning | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_01.png](../assets/images/LAntonino_p15_01.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_02.png](../assets/images/LAntonino_p15_02.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_03.png](../assets/images/LAntonino_p15_03.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_04.png](../assets/images/LAntonino_p15_04.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_05.png](../assets/images/LAntonino_p15_05.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_06.png](../assets/images/LAntonino_p15_06.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_07.png](../assets/images/LAntonino_p15_07.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_08.png](../assets/images/LAntonino_p15_08.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_09.png](../assets/images/LAntonino_p15_09.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_10.png](../assets/images/LAntonino_p15_10.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_11.png](../assets/images/LAntonino_p15_11.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_12.png](../assets/images/LAntonino_p15_12.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_13.png](../assets/images/LAntonino_p15_13.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_14.png](../assets/images/LAntonino_p15_14.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_15.png](../assets/images/LAntonino_p15_15.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_16.png](../assets/images/LAntonino_p15_16.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_17.png](../assets/images/LAntonino_p15_17.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_18.png](../assets/images/LAntonino_p15_18.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_19.png](../assets/images/LAntonino_p15_19.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_20.png](../assets/images/LAntonino_p15_20.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_21.png](../assets/images/LAntonino_p15_21.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_22.png](../assets/images/LAntonino_p15_22.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_23.png](../assets/images/LAntonino_p15_23.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_24.png](../assets/images/LAntonino_p15_24.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![LAntonino_p15_25.png](../assets/images/LAntonino_p15_25.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![Lecture15_p15-15.png](../assets/images/Lecture15_p15-15.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![Lecture15_p25-25.png](../assets/images/Lecture15_p25-25.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![Lecture15_p35-35.png](../assets/images/Lecture15_p35-35.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |
| `![Lecture15_p5-05.png](../assets/images/Lecture15_p5-05.png)` | Lecture slide / observational figure from P15 covering Lecture 15: Multiple Populations in Globular Clusters I | Lecture 15: Multiple Populations in Globular Clusters I |

### Lecture 16: Multiple Populations in Globular Clusters — Helium Enrichment and Polluter Scenarios

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![LAntonino_p16_01.png](../assets/images/LAntonino_p16_01.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_02.png](../assets/images/LAntonino_p16_02.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_03.png](../assets/images/LAntonino_p16_03.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_04.png](../assets/images/LAntonino_p16_04.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_05.png](../assets/images/LAntonino_p16_05.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_06.png](../assets/images/LAntonino_p16_06.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_07.png](../assets/images/LAntonino_p16_07.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_08.png](../assets/images/LAntonino_p16_08.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_09.png](../assets/images/LAntonino_p16_09.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_10.png](../assets/images/LAntonino_p16_10.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_11.png](../assets/images/LAntonino_p16_11.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_12.png](../assets/images/LAntonino_p16_12.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_13.png](../assets/images/LAntonino_p16_13.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_14.png](../assets/images/LAntonino_p16_14.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_15.png](../assets/images/LAntonino_p16_15.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_16.png](../assets/images/LAntonino_p16_16.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_17.png](../assets/images/LAntonino_p16_17.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_18.png](../assets/images/LAntonino_p16_18.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_19.png](../assets/images/LAntonino_p16_19.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_20.png](../assets/images/LAntonino_p16_20.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_21.png](../assets/images/LAntonino_p16_21.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_22.png](../assets/images/LAntonino_p16_22.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_23.png](../assets/images/LAntonino_p16_23.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_24.png](../assets/images/LAntonino_p16_24.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |
| `![LAntonino_p16_25.png](../assets/images/LAntonino_p16_25.png)` | Lecture slide / observational figure from P16 covering Lecture 16: Multiple Populations in Globular Clusters | Lecture 16: Multiple Populations in Globular Clusters |

### Lecture 17: Multiple Populations in Globular Clusters II — The Chromosome Map and Type I/II GCs

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![L17_p30_chromosome_map_classic-30.png](../assets/images/L17_p30_chromosome_map_classic-30.png)` | Chromosome map (pseudo-color vs UV baseline) separating 1G/2G stellar generations | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_01.png](../assets/images/LAntonino_p17_01.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_02.png](../assets/images/LAntonino_p17_02.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_03.png](../assets/images/LAntonino_p17_03.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_04.png](../assets/images/LAntonino_p17_04.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_05.png](../assets/images/LAntonino_p17_05.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_06.png](../assets/images/LAntonino_p17_06.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_07.png](../assets/images/LAntonino_p17_07.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_08.png](../assets/images/LAntonino_p17_08.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_09.png](../assets/images/LAntonino_p17_09.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_10.png](../assets/images/LAntonino_p17_10.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_11.png](../assets/images/LAntonino_p17_11.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_12.png](../assets/images/LAntonino_p17_12.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_13.png](../assets/images/LAntonino_p17_13.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_14.png](../assets/images/LAntonino_p17_14.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_15.png](../assets/images/LAntonino_p17_15.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_16.png](../assets/images/LAntonino_p17_16.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_17.png](../assets/images/LAntonino_p17_17.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_18.png](../assets/images/LAntonino_p17_18.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_19.png](../assets/images/LAntonino_p17_19.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_20.png](../assets/images/LAntonino_p17_20.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_21.png](../assets/images/LAntonino_p17_21.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_22.png](../assets/images/LAntonino_p17_22.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_23.png](../assets/images/LAntonino_p17_23.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_24.png](../assets/images/LAntonino_p17_24.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![LAntonino_p17_25.png](../assets/images/LAntonino_p17_25.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![Lecture17_p15-15.png](../assets/images/Lecture17_p15-15.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![Lecture17_p25-25.png](../assets/images/Lecture17_p25-25.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![Lecture17_p35-35.png](../assets/images/Lecture17_p35-35.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |
| `![Lecture17_p5-05.png](../assets/images/Lecture17_p5-05.png)` | Lecture slide / observational figure from P17 covering Lecture 17: Multiple Populations in Globular Clusters II | Lecture 17: Multiple Populations in Globular Clusters II |

### Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![L18_p05_eMSTO_phenomenon-05.png](../assets/images/L18_p05_eMSTO_phenomenon-05.png)` | Extended main sequence turnoff diagnostic showing stellar rotation vs age spread | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_01.png](../assets/images/LAntonino_p18_01.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_02.png](../assets/images/LAntonino_p18_02.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_03.png](../assets/images/LAntonino_p18_03.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_04.png](../assets/images/LAntonino_p18_04.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_05.png](../assets/images/LAntonino_p18_05.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_06.png](../assets/images/LAntonino_p18_06.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_07.png](../assets/images/LAntonino_p18_07.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_08.png](../assets/images/LAntonino_p18_08.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_09.png](../assets/images/LAntonino_p18_09.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_10.png](../assets/images/LAntonino_p18_10.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_11.png](../assets/images/LAntonino_p18_11.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_12.png](../assets/images/LAntonino_p18_12.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_13.png](../assets/images/LAntonino_p18_13.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_14.png](../assets/images/LAntonino_p18_14.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_15.png](../assets/images/LAntonino_p18_15.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_16.png](../assets/images/LAntonino_p18_16.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_17.png](../assets/images/LAntonino_p18_17.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_18.png](../assets/images/LAntonino_p18_18.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_19.png](../assets/images/LAntonino_p18_19.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_20.png](../assets/images/LAntonino_p18_20.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_21.png](../assets/images/LAntonino_p18_21.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_22.png](../assets/images/LAntonino_p18_22.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_23.png](../assets/images/LAntonino_p18_23.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_24.png](../assets/images/LAntonino_p18_24.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![LAntonino_p18_25.png](../assets/images/LAntonino_p18_25.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![Lecture18_p15-15.png](../assets/images/Lecture18_p15-15.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![Lecture18_p25-25.png](../assets/images/Lecture18_p25-25.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![Lecture18_p35-35.png](../assets/images/Lecture18_p35-35.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |
| `![Lecture18_p5-05.png](../assets/images/Lecture18_p5-05.png)` | Lecture slide / observational figure from P18 covering Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS | Lecture 18: Extended Main Sequence Turnoff (eMSTO), Stellar Rotation, and Split MS |

### Lecture 19: The Galactic Bulge — Structure, Ancient Populations, and Decontamination

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![L19_p01_title-01.png](../assets/images/L19_p01_title-01.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![L19_p02_bulge_mass-02.png](../assets/images/L19_p02_bulge_mass-02.png)` | Galactic bulge CMD, proper motion vector cleaning, or metallicity distribution | Lecture 19: The Galactic Bulge |
| `![L19_p05-05.png](../assets/images/L19_p05-05.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![L19_p06_bulge_CMD_disk_contam-06.png](../assets/images/L19_p06_bulge_CMD_disk_contam-06.png)` | Galactic bulge CMD, proper motion vector cleaning, or metallicity distribution | Lecture 19: The Galactic Bulge |
| `![L19_p07_decontamination_Valenti-07.png](../assets/images/L19_p07_decontamination_Valenti-07.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![L19_p09_PM_Clarkson-09.png](../assets/images/L19_p09_PM_Clarkson-09.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![L19_p11_bulge_old-11.png](../assets/images/L19_p11_bulge_old-11.png)` | Galactic bulge CMD, proper motion vector cleaning, or metallicity distribution | Lecture 19: The Galactic Bulge |
| `![L19_p12_NGC6528_Lagioia-12.png](../assets/images/L19_p12_NGC6528_Lagioia-12.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![L19_p17_alpha_Fe-17.png](../assets/images/L19_p17_alpha_Fe-17.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![L19_p19_old_bulge_Zoccali-19.png](../assets/images/L19_p19_old_bulge_Zoccali-19.png)` | Galactic bulge CMD, proper motion vector cleaning, or metallicity distribution | Lecture 19: The Galactic Bulge |
| `![L19_p22_Terzan5_Ferraro-22.png](../assets/images/L19_p22_Terzan5_Ferraro-22.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_01.png](../assets/images/LAntonino_p19_01.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_02.png](../assets/images/LAntonino_p19_02.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_03.png](../assets/images/LAntonino_p19_03.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_04.png](../assets/images/LAntonino_p19_04.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_05.png](../assets/images/LAntonino_p19_05.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_06.png](../assets/images/LAntonino_p19_06.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_07.png](../assets/images/LAntonino_p19_07.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_08.png](../assets/images/LAntonino_p19_08.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_09.png](../assets/images/LAntonino_p19_09.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_10.png](../assets/images/LAntonino_p19_10.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_11.png](../assets/images/LAntonino_p19_11.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_12.png](../assets/images/LAntonino_p19_12.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_13.png](../assets/images/LAntonino_p19_13.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_14.png](../assets/images/LAntonino_p19_14.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_15.png](../assets/images/LAntonino_p19_15.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_16.png](../assets/images/LAntonino_p19_16.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_17.png](../assets/images/LAntonino_p19_17.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_18.png](../assets/images/LAntonino_p19_18.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_19.png](../assets/images/LAntonino_p19_19.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_20.png](../assets/images/LAntonino_p19_20.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_21.png](../assets/images/LAntonino_p19_21.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_22.png](../assets/images/LAntonino_p19_22.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_23.png](../assets/images/LAntonino_p19_23.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_24.png](../assets/images/LAntonino_p19_24.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![LAntonino_p19_25.png](../assets/images/LAntonino_p19_25.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![Lecture19_p15-15.png](../assets/images/Lecture19_p15-15.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![Lecture19_p25-25.png](../assets/images/Lecture19_p25-25.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![Lecture19_p35-35.png](../assets/images/Lecture19_p35-35.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |
| `![Lecture19_p5-05.png](../assets/images/Lecture19_p5-05.png)` | Lecture slide / observational figure from P19 covering Lecture 19: The Galactic Bulge | Lecture 19: The Galactic Bulge |

### Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![LAntonino_p20_01.png](../assets/images/LAntonino_p20_01.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_02.png](../assets/images/LAntonino_p20_02.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_03.png](../assets/images/LAntonino_p20_03.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_04.png](../assets/images/LAntonino_p20_04.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_05.png](../assets/images/LAntonino_p20_05.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_06.png](../assets/images/LAntonino_p20_06.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_07.png](../assets/images/LAntonino_p20_07.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_08.png](../assets/images/LAntonino_p20_08.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_09.png](../assets/images/LAntonino_p20_09.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_10.png](../assets/images/LAntonino_p20_10.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_11.png](../assets/images/LAntonino_p20_11.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_12.png](../assets/images/LAntonino_p20_12.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_13.png](../assets/images/LAntonino_p20_13.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_14.png](../assets/images/LAntonino_p20_14.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_15.png](../assets/images/LAntonino_p20_15.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_16.png](../assets/images/LAntonino_p20_16.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_17.png](../assets/images/LAntonino_p20_17.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_18.png](../assets/images/LAntonino_p20_18.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_19.png](../assets/images/LAntonino_p20_19.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_20.png](../assets/images/LAntonino_p20_20.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_21.png](../assets/images/LAntonino_p20_21.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_22.png](../assets/images/LAntonino_p20_22.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_23.png](../assets/images/LAntonino_p20_23.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_24.png](../assets/images/LAntonino_p20_24.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |
| `![LAntonino_p20_25.png](../assets/images/LAntonino_p20_25.png)` | Lecture slide / observational figure from P20 covering Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters | Lecture 20: Pre-Main Sequence Evolution, Hayashi/Henyey Tracks, and Young Clusters |

### Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![LAntonino_p21_01.png](../assets/images/LAntonino_p21_01.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_02.png](../assets/images/LAntonino_p21_02.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_03.png](../assets/images/LAntonino_p21_03.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_04.png](../assets/images/LAntonino_p21_04.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_05.png](../assets/images/LAntonino_p21_05.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_06.png](../assets/images/LAntonino_p21_06.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_07.png](../assets/images/LAntonino_p21_07.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_08.png](../assets/images/LAntonino_p21_08.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_09.png](../assets/images/LAntonino_p21_09.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_10.png](../assets/images/LAntonino_p21_10.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_11.png](../assets/images/LAntonino_p21_11.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_12.png](../assets/images/LAntonino_p21_12.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_13.png](../assets/images/LAntonino_p21_13.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_14.png](../assets/images/LAntonino_p21_14.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_15.png](../assets/images/LAntonino_p21_15.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_16.png](../assets/images/LAntonino_p21_16.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_17.png](../assets/images/LAntonino_p21_17.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_18.png](../assets/images/LAntonino_p21_18.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_19.png](../assets/images/LAntonino_p21_19.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_20.png](../assets/images/LAntonino_p21_20.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_21.png](../assets/images/LAntonino_p21_21.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_22.png](../assets/images/LAntonino_p21_22.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_23.png](../assets/images/LAntonino_p21_23.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_24.png](../assets/images/LAntonino_p21_24.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |
| `![LAntonino_p21_25.png](../assets/images/LAntonino_p21_25.png)` | Lecture slide / observational figure from P21 covering Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers | Lecture 21: Extragalactic Stellar Populations, Resolved Systems, and JWST Frontiers |

### Lecture 22: Course Synthesis, Open Problems in Multiple Populations, and Oral Exam Framework

| Image Asset | Description & Diagnostic Utility | Primary Zettel Note |
|---|---|---|
| `![LAntonino_p22_01.png](../assets/images/LAntonino_p22_01.png)` | Lecture slide / observational figure from P22 covering Lecture 22: Course Synthesis, Open Problems in Multiple Populations, and Oral Exam Framework | Lecture 22: Course Synthesis, Open Problems in Multiple Populations, and Oral Exam Framework |
| `![LAntonino_p22_02.png](../assets/images/LAntonino_p22_02.png)` | Lecture slide / observational figure from P22 covering Lecture 22: Course Synthesis, Open Problems in Multiple Populations, and Oral Exam Framework | Lecture 22: Course Synthesis, Open Problems in Multiple Populations, and Oral Exam Framework |
| `![LAntonino_p22_03.png](../assets/images/LAntonino_p22_03.png)` | Lecture slide / observational figure from P22 covering Lecture 22: Course Synthesis, Open Problems in Multiple Populations, and Oral Exam Framework | Lecture 22: Course Synthesis, Open Problems in Multiple Populations, and Oral Exam Framework |
| `![LAntonino_p22_04.png](../assets/images/LAntonino_p22_04.png)` | Lecture slide / observational figure from P22 covering Lecture 22: Course Synthesis, Open Problems in Multiple Populations, and Oral Exam Framework | Lecture 22: Course Synthesis, Open Problems in Multiple Populations, and Oral Exam Framework |
| `![LAntonino_p22_05.png](../assets/images/LAntonino_p22_05.png)` | Lecture slide / observational figure from P22 covering Lecture 22: Course Synthesis, Open Problems in Multiple Populations, and Oral Exam Framework | Lecture 22: Course Synthesis, Open Problems in Multiple Populations, and Oral Exam Framework |
| `![LAntonino_p22_06.png](../assets/images/LAntonino_p22_06.png)` | Lecture slide / observational figure from P22 covering Lecture 22: Course Synthesis, Open Problems in Multiple Populations, and Oral Exam Framework | Lecture 22: Course Synthesis, Open Problems in Multiple Populations, and Oral Exam Framework |
| `![LAntonino_p22_08.png](../assets/images/LAntonino_p22_08.png)` | Lecture slide / observational figure from P22 covering Lecture 22: Course Synthesis, Open Problems in Multiple Populations, and Oral Exam Framework | Lecture 22: Course Synthesis, Open Problems in Multiple Populations, and Oral Exam Framework |
| `![LAntonino_p22_09.png](../assets/images/LAntonino_p22_09.png)` | Lecture slide / observational figure from P22 covering Lecture 22: Course Synthesis, Open Problems in Multiple Populations, and Oral Exam Framework | Lecture 22: Course Synthesis, Open Problems in Multiple Populations, and Oral Exam Framework |



---

## Prof. Antonino Milone Oral Exam Defense Preparation Matrix

This matrix contains the signature questions, blackboard derivations, and trap points commonly probed by Prof. Antonino Milone during the oral exam:

### Question 1: Construction and Physics of the Chromosome Map
- **Blackboard Prompt**: *Draw a chromosome map for a typical globular cluster (e.g. NGC 2808 or NGC 6752). Explain the definition of both pseudo-color axes, what stellar atmosphere chemistry they trace, and how they separate 1G from 2G stars.*
- **Starting Equation**: 
  $$\Delta_{C\,F275W,F336W,F438W} = C_{\rm F275W,F336W,F438W} - C_{\rm fiducial}, \quad C = (m_{\rm F275W} - m_{\rm F336W}) - (m_{\rm F336W} - m_{\rm F438W})$$
  $$\Delta_{F275W,F814W} = (m_{\rm F275W} - m_{\rm F814W}) - (m_{\rm F275W} - m_{\rm F814W})_{\rm fiducial}$$
- **Derivation & Blackboard Walkthrough**:
  1. Explain that on the Red Giant Branch (RGB), effective temperature $T_{\rm eff}$ is primarily governed by envelope opacity.
  2. F275W covers the OH molecular band (sensitive to Oxygen), F336W covers the NH molecular band (sensitive to Nitrogen), and F438W covers the CN and CH bands (sensitive to Carbon & Nitrogen).
  3. Second-generation (2G) stars are enriched in N and depleted in C and O due to high-temperature CNO cycling. Thus, their F336W flux is strongly absorbed by NH, making $(m_{\rm F275W} - m_{\rm F336W})$ bluer and $(m_{\rm F336W} - m_{\rm F438W})$ redder, drastically increasing the pseudo-color index $C_{\rm F275W,F336W,F438W}$.
  4. Conversely, the wide optical/NIR baseline $(m_{\rm F275W} - m_{\rm F814W})$ is sensitive to Helium abundance $Y$. Helium-enhanced stars have lower atmospheric opacity and higher mean molecular weight, resulting in hotter temperatures at fixed luminosity, shifting them to the blue.
  5. Projecting perpendicular to the RGB fiducial ridge removes the temperature/luminosity dependence along the branch, creating the vertical $\Delta_{C}$ axis (tracing N enrichment) and horizontal $\Delta_{F275W,F814W}$ axis (tracing He enhancement).
- **Professor Trap Points**:
  - *Trap*: Confusing Type I and Type II GCs. Type I GCs show a single 1G cluster and an extended 2G tail (e.g. NGC 6752). Type II GCs (e.g. $\omega$ Cen, M22, NGC 1851) show a split chromosome map with two distinct parallel sequences, indicating an intrinsic spread in $[\text{Fe}/\text{H}]$ and $s$-process elements in addition to light-element variations!

### Question 2: The Milone et al. (2012) Differential Reddening Correction Method
- **Blackboard Prompt**: *A globular cluster close to the Galactic plane exhibits an artificially broadened main sequence and RGB. How do you distinguish differential reddening from multiple populations or metallicity spreads? Outline your step-by-step procedure to correct it.*
- **Derivation & Blackboard Walkthrough**:
  1. Define the reddening vector in the CMD plane $(V, B-V)$ or $(m_1, m_1 - m_2)$. The slope is $\frac{A_{m_1}}{E(m_1 - m_2)} = \frac{R_{m_1}}{R_{m_1} - R_{m_2}}$, which is determined strictly by the interstellar extinction law (e.g., Cardelli et al. 1989).
  2. Define a local coordinate system along the reddening vector: abscissa parallel to the vector, ordinate perpendicular to it.
  3. Construct a high signal-to-noise fiducial ridge line of the cluster sequence using stars in the least reddened subregion or cluster-wide medians.
  4. For every target star $i$ at position $(x_i, y_i)$, select its $N \sim 30-100$ nearest spatial neighbors within an angular radius $r_{\rm max}$.
  5. For each neighbor star, measure its offset from the fiducial ridge line along the reddening vector direction: $\Delta X = \vec{r}_{\rm star} \cdot \hat{u}_{\rm reddening}$.
  6. Compute the median offset of the neighbors: $\overline{\Delta X}_i = {\rm median}(\{\Delta X_j\}_{j=1}^N)$.
  7. Correct the photometry of star $i$ by shifting it back along the reddening vector by $\overline{\Delta X}_i$.
- **Professor Trap Points**:
  - *Trap*: Multiple populations shift stars *differently* in different colors (e.g., UV vs optical), whereas interstellar reddening shifts stars strictly along the universal dust extinction vector. Demonstrating that sequence broadening disappears in de-reddened optical CMDs but persists in UV pseudo-color CMDs proves the presence of intrinsic multiple populations.

### Question 3: Helium Enhancement and Horizontal Branch Morphology
- **Blackboard Prompt**: *Why does helium enhancement shift the Main Sequence to the blue, and how does it explain the extreme blue horizontal branch tails observed in massive clusters like NGC 2808?*
- **Derivation & Blackboard Walkthrough**:
  1. Mean molecular weight: $\mu^{-1} = 2X + \frac{3}{4}Y + \frac{1}{2}Z$. Increasing $Y$ at fixed $Z$ decreases the hydrogen mass fraction $X = 1 - Y - Z$, which increases $\mu$.
  2. For a star supported by ideal gas pressure, central temperature scales as $T_c \propto \mu \frac{M}{R}$, and opacity is dominated by electron scattering and Kramers opacity (both $\propto (1+X)$). Higher $\mu$ and lower opacity mean higher energy generation and higher luminosity: $L \propto \mu^4$.
  3. At fixed mass, a higher-$Y$ star is smaller, hotter, and more luminous, shifting its Main Sequence locus **blueward**.
  4. Because $L$ is higher, nuclear fuel is consumed faster: $\tau_{\rm MS} \propto \frac{X M}{L} \propto X \mu^{-4}$. For a coeval cluster, stars currently turning off the MS with higher $Y$ must have a **lower mass** ($M_{\rm TO}(Y=0.40) < M_{\rm TO}(Y=0.24)$ by $\sim 0.1 M_\odot$).
  5. When these lower-mass stars reach the Horizontal Branch after RGB mass loss, they possess extremely thin hydrogen envelopes ($M_{\rm env} \lesssim 0.02 M_\odot$). With virtually no envelope to insulate the helium-burning core, the star sits at high $T_{\rm eff} > 15,000-30,000$ K, forming an **extended blue HB tail** (and even blue hooks or EHB stars).
- **Professor Trap Points**:
  - *Trap*: Claiming that higher helium makes stars redder. He is a primary fuel for later stages, but during the MS, the $\mu$-increase drives higher core temperatures and hotter surfaces, making the star **bluer**!

### Question 4: Photometric Binary Fractions in Cluster CMDs
- **Blackboard Prompt**: *Derive the magnitude displacement of an unresolved binary system on the CMD as a function of mass ratio $q = M_2/M_1$. How do you measure the cluster binary fraction?*
- **Derivation & Blackboard Walkthrough**:
  1. Let star 1 have mass $M_1$ and luminosity $L_1$; star 2 have mass $M_2 \le M_1$ and luminosity $L_2$. Total luminosity is $L_{\rm bin} = L_1 + L_2 = L_1 (1 + L_2/L_1)$.
  2. Using the mass-luminosity relation $L \propto M^\alpha$ (where $\alpha \sim 3.5-4.0$ for MS stars), the luminosity ratio is $L_2/L_1 \approx (M_2/M_1)^\alpha = q^\alpha$.
  3. The combined magnitude is: 
     $$m_{\rm bin} = -2.5\log_{10}(L_{\rm bin}) + C = m_1 - 2.5\log_{10}(1 + q^\alpha)$$
  4. For an equal-mass binary ($q = 1$):
     $$\Delta m = -2.5\log_{10}(1 + 1) = -2.5\log_{10}(2) \approx -0.753\,{\rm mag}$$
  5. The binary sequence forms a parallel ridge shifted by exactly $0.753$ mag above the single-star main sequence in all passbands (since color $(m_1 - m_2)$ is unchanged for $q=1$).
  6. For $q < 1$, the binary shifts both in magnitude and slightly in color, filling the area between the single MS and the equal-mass binary sequence.
  7. The binary fraction $f_{\rm bin}$ is determined by defining a CMD box enclosing the binary locus ($q > 0.5$) and correcting for background field contamination and photometric error scattering.

### Question 5: White Dwarf Cosmochronology and the Mestel Cooling Law
- **Blackboard Prompt**: *Derive Mestel's cooling law for degenerate white dwarfs: $\tau_{\rm cool} \propto L^{-5/7}$. Why does the observed WD cooling sequence terminate and turn blueward at faint magnitudes?*
- **Derivation & Blackboard Walkthrough**:
  1. A white dwarf consists of a degenerate, isothermal carbon-oxygen core of mass $M$ and temperature $T_c$, surrounded by a thin non-degenerate radiative envelope.
  2. The thermal energy is stored entirely in the non-degenerate atomic nuclei: $U = c_v N_A \frac{M}{\mu_A} T_c = \frac{3}{2} k_B \frac{M}{A m_u} T_c$.
  3. Luminosity is governed by radiative transfer through the envelope with Kramers opacity $\kappa = \kappa_0 \rho T^{-7/2}$. Integrating hydrostatic equilibrium from the surface inwards gives the relation between core temperature and luminosity: $L \propto M T_c^{7/2}$.
  4. Inverting for core temperature: $T_c \propto (L/M)^{2/7}$.
  5. Energy conservation requires $L = -\frac{dU}{dt} \propto -M \frac{dT_c}{dt}$.
  6. Substitute $T_c$: 
     $$L \propto -M \frac{d}{dt}\left[(L/M)^{2/7}\right] \propto -M^{5/7} L^{-5/7} \frac{dL}{dt} \implies L^{5/7} dt \propto -M^{5/7} dL$$
  7. Integrate from $t=0$ ($L \to \infty$) to cooling time $\tau$:
     $$\tau_{\rm cool} \propto M^{5/7} L^{-5/7}$$
  8. **Blue Turn (CIA)**: At $T_{\rm eff} < 5000$ K, dense molecular hydrogen ($H_2$) in pure-H (DA) atmospheres undergoes collision-induced absorption ($H_2 - H_2$ and $H_2 - He$ dipole moments induced by collisions). CIA absorbs strongly in the infrared and red optical, forcing flux out through the blue optical window, causing the WD cooling track to hook sharply blueward on CMDs.

### Question 6: The Extended Main Sequence Turnoff (eMSTO) Debate
- **Blackboard Prompt**: *Intermediate-age star clusters (1-2 Gyr) in the Magellanic Clouds exhibit broadened or split main sequence turnoffs. Compare the age spread hypothesis with the stellar rotation hypothesis. Which one is supported by observations?*
- **Derivation & Blackboard Walkthrough**:
  1. If interpreted as an age spread, the observed turnoff width corresponds to $\Delta t \sim 200-500$ Myr, requiring prolonged star formation in clusters that have modest masses ($10^4 - 10^5 M_\odot$).
  2. However, intermediate-age clusters lack the gas reservoir or potential well to retain supernova ejecta or accreted gas for 500 Myr.
  3. Under the **stellar rotation** model, stars rotate at significant fractions of their break-up velocity ($\omega/\omega_{\rm crit} \sim 0.5-0.9$).
  4. According to the **von Zeipel theorem**, radiative flux is proportional to effective gravity: $F = -\frac{L}{4\pi G M_*} g_{\rm eff}$. Centrifugal force lowers $g_{\rm eff}$ at the equator, making the equator cooler and dimmer while poles remain hot (gravity darkening).
  5. A rotating star viewed equator-on appears redder and cooler than when viewed pole-on.
  6. Furthermore, rotational mixing brings fresh hydrogen into the core, extending the main sequence lifetime and shifting the turnoff point to higher luminosities.
  7. Decisive evidence: High-resolution spectroscopy (e.g. Bastian et al., Milone et al.) demonstrates that stars on the red side of the split MS are rapid rotators ($v\sin i > 150-200$ km/s), while stars on the blue side are slow rotators ($v\sin i < 80$ km/s), decisively confirming the stellar rotation paradigm!


---

## Essential Stellar Astrophysics Formulas Quick Sheet

| Quantity / Law | Mathematical Expression | Key Physical Variables & Constants |
|---|---|---|
| **True Distance Modulus** | $\mu_0 = (m - M)_V - A_V = 5\log_{10}\left(\frac{d}{10\,{\rm pc}}\right)$ | $A_V = R_V E(B-V)$, $R_V \approx 3.1$ in diffuse ISM |
| **Pogson Magnitude Relation** | $m_1 - m_2 = -2.5\log_{10}\left(\frac{F_1}{F_2}\right)$ | $\Delta m \approx 1.0857\frac{\Delta F}{F}$ for small flux variations |
| **Main Sequence Lifetime** | $\tau_{\rm MS} \approx 10\,{\rm Gyr}\left(\frac{M}{M_\odot}\right)^{-2.5}$ | Assumes $L \propto M^{3.5}$ and core H-burning fraction $\sim 10\%$ |
| **Mestel WD Cooling Law** | $\tau_{\rm cool} \propto M_{\rm WD}^{5/7} L_{\rm WD}^{-5/7}$ | Derived from degenerate core thermal capacity + Kramers envelope opacity |
| **Chandrasekhar Mass Limit** | $M_{\rm Ch} = \frac{\omega_3^0}{4\pi}\left(\frac{hc}{G}\right)^{3/2}\left(\frac{1}{\mu_e m_u}\right)^2 \approx 1.46\left(\frac{2}{\mu_e}\right)^2 M_\odot$ | Relativistic electron degeneracy limit; $\mu_e \approx 2$ for C/O WDs |
| **Chromosome Pseudo-Color** | $C_{\rm F275W, F336W, F438W} = (m_{\rm F275W} - m_{\rm F336W}) - (m_{\rm F336W} - m_{\rm F438W})$ | Traces NH, OH, and CN/CH molecular bands in RGB atmospheres |
| **Salpeter Initial Mass Function** | $\xi(M) = \frac{dN}{dM} = A M^{-\alpha}, \quad \alpha = 2.35$ | Canonical power law for stars with $M > 0.5 M_\odot$ |
| **Unresolved Binary Shift** | $\Delta m = -2.5\log_{10}(1 + q^\alpha)$ | $q = M_2/M_1 \le 1$, $\Delta m = -0.753$ mag for equal-mass $q=1$ |
| **von Zeipel Gravity Darkening** | $T_{\rm eff}(\theta) \propto g_{\rm eff}(\theta)^{1/4}$ | Relates local surface temperature to effective gravitational acceleration on rotating stars |
| **Boltzmann Level Population** | $\frac{N_b}{N_a} = \frac{g_b}{g_a}\exp\left(-\frac{E_b - E_a}{k_B T}\right)$ | Thermal excitation ratio between atomic states $a$ and $b$ |
| **Saha Ionization Equation** | $\frac{N_{j+1}}{N_j} = \frac{2 k_B T}{P_e}\frac{u_{j+1}(T)}{u_j(T)}\left(\frac{2\pi m_e k_B T}{h^2}\right)^{3/2}\exp\left(-\frac{\chi_j}{k_B T}\right)$ | Ionization fraction balance in stellar photosphere atmospheres |
| **Equivalent Width** | $W_\lambda = \int \left(1 - \frac{F_\lambda}{F_{\rm cont}}\right) d\lambda$ | Spectral absorption line strength integrated over profile |
