---
layout: default
title: "Astrophysics_of_Galaxies_MOC"
---

# Astrophysics of Galaxies  -  Map of Content

A.Y. 2025/2026, second semester at U Padua. taught Feb-May 2026 ($24$ Feb to $20$ May). lecture material at . 

this course extends [Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.html) Block 10 (Pablo's lectures) into a full course on the **physics of galaxies**: how we measure them, classify them, model them, and use them to test cosmology. unlike OC which keeps galaxies abstract, this course goes deep on the **internal physics**: kinematics, stellar populations, dark matter, scaling relations, central black holes.

central question:
> *what is a galaxy, physically, and what does its anatomy tell us about how it formed?*

the chain of objects:
$$\text{photometry} \to \text{morphology} \to \text{spectra} \to \text{kinematics} \to \text{stellar populations} \to \text{dark matter halo} \to \text{evolutionary history}$$

each block of the course handles one piece of this chain.

## reference texts

- **Schneider, *Extragalactic Astronomy and Cosmology*** (the standard, used heavily for ch. 3-6).
- **Binney & Tremaine, *Galactic Dynamics*** (kinematics, dark matter, stellar dynamics).
- **Sparke & Gallagher, *Galaxies in the Universe*** (intro level; good supplementary).
- **Mo, van den Bosch, White, *Galaxy Formation and Evolution*** (deep on theory).
- **Binney & Merrifield, *Galactic Astronomy*** (morphology, kinematics).
- the user's own LaTeX notes: `Astrophysics_of_Galaxies.pdf` (1.9 MB) + `SMBH_in_Galaxies.pdf` (1.2 MB).

## lecture schedule (course outline)

| date | content |
|---|---|
| 24/2 | course intro, LF, distances, K-correction, absorption, Petrosian radius, SDSS |
| 03/3 | LF from SDSS, red sequence + blue cloud + green valley, surveys (HDF/FDF/HUDF), UV LF, Madau plot |
| 04/3 | CAS galaxy classification, photometric redshifts, SED |
| 10/3 | PCA + spectral classification of galaxies |
| 11/3 | LAB: SDSS + galaxy spectra + MUSE datacubes (redshift) |
| 17/3 | 1D + 2D spectroscopy, kinematics, datacubes |
| 18/3 | 2D spectroscopy, kinematics, MANGA, LOSVD |
| 24/3 | Local Group, clusters of galaxies |
| 25/3 | Sgr A$^\star$ in the Milky Way, water maser BH masses |
| 31/3 | SMBH: ionized gas + stellar kinematics |
| 01/4 | SMBH: reverberation mapping, datacube training |
| 08/4 | interstellar medium |
| 14/4 | dark matter: spiral galaxies |
| 15/4 | dark matter: elliptical + dwarf galaxies |
| 21/4 | dark matter: gravitational lensing, MOND |
| 22/4 | training on galaxy masses + datacube |
| 28/4 | early-type galaxies, age-metallicity, stellar populations |
| 29/4 | scaling relations in ellipticals |
| 05/5 | discussion on stellar populations + DM |
| 06/5 | scaling relations in spirals, low surface brightness galaxies |
| 12-13/5 | labs |
| 19-20/5 | review |

## Block 0  -  course frame

- [Galaxies_course_intro](../02_Zettel/Theory/Galaxies_course_intro.html)  -  what this course is, the chain from photometry to physics, how it relates to OC + Fundamentals

## Block 1  -  luminosity function + observational basics

before any galaxy science, the **basic measurements**: how do we describe galaxy populations statistically?

- [Luminosity function definition](../02_Zettel/Theory/Luminosity function definition.html) $\phi(L)\,dL\,dV$, the number per volume per luminosity. exists in vault.
- [Schechter function](../02_Zettel/Theory/Schechter function.html) $\phi(L) \propto (L/L^*)^\alpha\,e^{-L/L^*}/L^*$. exists.
- [Schechter K-band luminosity function](../02_Zettel/Theory/Schechter K-band luminosity function.html) tabulated values + interpretation. exists.
- [Schechter function in magnitudes](../02_Zettel/Theory/Schechter function in magnitudes.html) the form fit to data. exists.
- [Integrals of the Schechter function](../02_Zettel/Theory/Integrals of the Schechter function.html) number, luminosity, $N(>L^*)$ as Gamma functions. exists.
- [Double power-law modified Schechter](../02_Zettel/Theory/Double power-law modified Schechter.html) for high-z/bright end. exists.
- [Cosmological distances](../02_Zettel/Theory/Cosmological distances.html) all 4 distances. exists.
- [K-correction](../02_Zettel/Theory/K-correction.html) from $\nu_e = \nu_0(1+z)$. exists.
- [Distance modulus](../02_Zettel/Theory/Distance modulus.html) $\mu = 5\log_{10}(d/10\,{\rm pc})$. exists.
- [Interstellar absorption](../02_Zettel/Theory/Interstellar absorption.html) dust extinction along the line of sight. exists.
- [Petrosian radius](../02_Zettel/Theory/Petrosian radius.html) aperture for galaxy size measurement (SDSS standard).
- [SDSS overview](../02_Zettel/Theory/SDSS overview.html) the survey + photometric system + spectroscopic targets.

## Block 2  -  galaxy populations + surveys

statistical properties of the modern galaxy zoo, derived from imaging + spectroscopic surveys.

- [Red sequence and blue cloud](../02_Zettel/Theory/Red sequence and blue cloud.html) color bimodality. exists.
- [Color bimodality of galaxies](../02_Zettel/Theory/Color bimodality of galaxies.html) Baldry 2004 two peaks in $u-r$. exists.
- [Green valley and quenching tracks](../02_Zettel/Theory/Green valley and quenching tracks.html) Faber 2007 evolutionary arrows. exists.
- [Galaxy color, density and morphology](../02_Zettel/Theory/Galaxy color, density and morphology.html) Hogg 2004, Blanton & Moustakas. exists.
- [Galaxy number counts N(m)](../02_Zettel/Theory/Galaxy number counts N(m).md) the Euclidean prediction. exists.
- [Galaxy counts at different wavelengths](../02_Zettel/Theory/Galaxy counts at different wavelengths.html) Durham compilation. exists.
- [Driver 1998 counts by morphology](../02_Zettel/Theory/Driver 1998 counts by morphology.html) faint blue galaxy excess. exists.
- [Deep-field surveys](../02_Zettel/Theory/Deep-field surveys.html) HDF, HUDF, FDF, GOODS, COSMOS  -  what each gave us.
- [UV luminosity function](../02_Zettel/Theory/UV luminosity function.html) high-$z$ LBG-derived UV LF + its evolution.
- [Madau plot](../02_Zettel/Theory/Madau plot.html) cosmic SFR density vs $z$. companion to [Cosmic star formation history](../02_Zettel/Theory/Cosmic star formation history.html).

## Block 3  -  galaxy morphological + photometric classification

- [Hubble morphological sequence](../02_Zettel/Theory/Hubble morphological sequence.html) E, S0, Sa, Sb, Sc, Sd, Irr. exists.
- [Galaxy morphology vs physical properties](../02_Zettel/Theory/Galaxy morphology vs physical properties.html) morphology correlates with color, mass, environment. exists.
- [CAS galaxy classification](../02_Zettel/Theory/CAS galaxy classification.html) concentration + asymmetry + smoothness, Conselice 2003.
- [Sersic profile](../02_Zettel/Theory/Sersic profile.html) $\Sigma(r) \propto e^{-(r/r_e)^{1/n}}$. with $n = 4$ for ellipticals (de Vaucouleurs), $n = 1$ for disks.
- [De Vaucouleurs and exponential profiles](../02_Zettel/Theory/De Vaucouleurs and exponential profiles.html) the two limiting cases of Sersic.
- [Photometric redshifts](../02_Zettel/Theory/Photometric redshifts.html) template-based + ML-based. exists.
- [Photo-z biases and catastrophic outliers](../02_Zettel/Theory/Photo-z biases and catastrophic outliers.html) Oyaizu 2008. exists.
- [Galaxy SED fitting](../02_Zettel/Theory/Galaxy SED fitting.html) modern approach to estimating mass, age, dust. references [SED fitting basics](../02_Zettel/Theory/SED fitting basics.html).

## Block 4  -  spectral classification + PCA

- [PCA spectral classification of galaxies](../02_Zettel/Theory/PCA spectral classification of galaxies.html) Connolly 1995, Madgwick 2002. eigenspectra of galaxy populations.
- [Eigenspectra and spectral types](../02_Zettel/Theory/Eigenspectra and spectral types.html) PCA basis: continuum, emission, absorption.
- [Lick indices](../02_Zettel/Theory/Lick indices.html) EW measurements of standard absorption features. exists.
- [Stellar population synthesis](../02_Zettel/Theory/Stellar population synthesis.html) BC03, FSPS, MILES. exists.

## Block 5  -  galaxy spectroscopy: 1D, 2D, IFU

- [Spectrograph design](../02_Zettel/Theory/Spectrograph design.html) basics. exists.
- [Spectrograph types](../02_Zettel/Theory/Spectrograph types.html) longslit, MOS, IFU. exists.
- [Echelle spectroscopy](../02_Zettel/Theory/Echelle spectroscopy.html) high-R for kinematics. exists.
- [Multi-object spectroscopy MOS](../02_Zettel/Theory/Multi-object spectroscopy MOS.html) SDSS, DESI. exists.
- [Integral-field spectroscopy IFU](../02_Zettel/Theory/Integral-field spectroscopy IFU.html) datacubes. exists.
- [Datacube reduction](../02_Zettel/Theory/Datacube reduction.html) from raw exposures to (x, y, λ) datacube.
- [MUSE datacubes](../02_Zettel/Theory/MUSE datacubes.html) VLT/MUSE specifics; flagship tool of modern galaxy spectroscopy.
- [MaNGA survey](../02_Zettel/Theory/MaNGA survey.html) SDSS-IV IFU survey of $10^4$ nearby galaxies.
- [Datacube redshift measurement](../02_Zettel/Theory/Datacube redshift measurement.html) cross-correlation per spaxel.

## Block 6  -  galaxy kinematics

- [LOSVD](../02_Zettel/Theory/LOSVD.html) line-of-sight velocity distribution: the spectral signature of stellar motions in a galaxy.
- [Stellar kinematics measurements](../02_Zettel/Theory/Stellar kinematics measurements.html) pPXF, Gauss-Hermite expansion, $h_3$ + $h_4$.
- [Ionized gas kinematics](../02_Zettel/Theory/Ionized gas kinematics.html) emission lines as kinematic tracers (Hα, [OIII]).
- [Velocity dispersion from line width](../02_Zettel/Theory/Velocity dispersion from line width.html) $\sigma_v$ from broadened lines. exists.
- [Rotation curves](../02_Zettel/Theory/Rotation curves.html) $V(R)$ from spirals; flat = dark matter halo.
- [Tully-Fisher relation](../02_Zettel/Theory/Tully-Fisher relation.html) $L \propto V_{\rm flat}^4$. exists.
- [Stellar v sin i from line shape](../02_Zettel/Theory/Stellar v sin i from line shape.html) for individual stars. exists.

## Block 7  -  Local Group + galaxy clusters

- [Local Group galaxies](../02_Zettel/Theory/Local Group galaxies.html) MW + M31 + M33 + dozens of dwarfs + satellites.
- [Galaxy clusters and overview of evolution](../02_Zettel/Theory/Galaxy clusters and overview of evolution.html) hierarchical structure + ICM. exists.
- [Virgo cluster](../02_Zettel/Theory/Virgo cluster.html) nearest large cluster, $\sim 17$ Mpc.
- [Coma cluster](../02_Zettel/Theory/Coma cluster.html) distant rich cluster, $\sim 100$ Mpc.
- [Milky Way structure](../02_Zettel/Theory/Milky Way structure.html) disk + bulge + halo + stellar populations. exists.

## Block 8  -  Supermassive Black Holes

central engines of galaxies, masses correlated with bulge properties (M-σ relation).

- [Galactic Center Sgr A and S-stars](../02_Zettel/Theory/interf/Galactic Center Sgr A and S-stars.html) $\sim 4 \times 10^6\,M_\odot$ at the centre of the MW. exists.
- [Water maser BH masses](../02_Zettel/Theory/Water maser BH masses.html) NGC 4258: most precise $M_{BH}$ known.
- [Reverberation mapping](../02_Zettel/Theory/Reverberation mapping.html) BLR size from time delays + virial theorem.
- [Stellar dynamics SMBH masses](../02_Zettel/Theory/Stellar dynamics SMBH masses.html) central kinematics from IFU + dynamical models.
- [Ionized gas SMBH masses](../02_Zettel/Theory/Ionized gas SMBH masses.html) gas-disk modelling for $M_{BH}$.
- [Magorrian relation](../02_Zettel/Theory/Magorrian relation.html) $M_{BH} \approx 10^{-3}\,M_{\rm bulge}$. exists.
- [M sigma relation](../02_Zettel/Theory/M sigma relation.html) $M_{BH} \propto \sigma^4$ (Tremaine 2002).
- [AGN spectroscopy](../02_Zettel/Theory/AGN spectroscopy.html) BLR + NLR + jet + torus. exists.

## Block 9  -  Interstellar Medium of galaxies

- [Interstellar medium components and gas cycle](../02_Zettel/Theory/Interstellar medium components and gas cycle.html) CNM, WNM, WIM, hot gas. exists.
- [H I regions](../02_Zettel/Theory/H I regions.html) cold neutral H. exists.
- [H II region spectroscopy](../02_Zettel/Theory/H II region spectroscopy.html) photoionised emission. exists.
- [Photodissociation regions PDRs](../02_Zettel/Theory/Photodissociation regions PDRs.html) CNM-WIM boundaries. exists.
- [Molecular clouds](../02_Zettel/Theory/Molecular clouds.html) CO + dust + star-forming regions.
- [Schmidt-Kennicutt law](../02_Zettel/Theory/Schmidt-Kennicutt law.html) $\Sigma_{SFR} \propto \Sigma_{\rm gas}^{1.4}$. exists.

## Block 10  -  Dark matter

- [Cosmic_inventory_dark_matter](../02_Zettel/Theory/Cosmic_inventory_dark_matter.html) overview. exists.
- [Dark matter rotation curves](../02_Zettel/Theory/Dark matter rotation curves.html) flat $V(R)$ in spirals.
- [Dark matter in elliptical galaxies](../02_Zettel/Theory/Dark matter in elliptical galaxies.html) from X-ray hot gas + globular cluster + planetary nebulae kinematics.
- [Dark matter in dwarf galaxies](../02_Zettel/Theory/Dark matter in dwarf galaxies.html) high M/L, key tests of $\Lambda$CDM small-scale predictions.
- [Lensing as a cosmological probe](../02_Zettel/Theory/Lensing as a cosmological probe.html) strong + weak. exists.
- [Bullet Cluster and dark matter mapping](../02_Zettel/Theory/Bullet Cluster and dark matter mapping.html) direct evidence of collisionless DM.
- [MOND](../02_Zettel/Theory/MOND.html) modified Newtonian dynamics, alternative explanation.
- [Modified gravity alternatives](../02_Zettel/Theory/Modified gravity alternatives.html) TeVeS, MOG, Verlinde's emergent gravity.

## Block 11  -  Stellar populations of early-type galaxies

- [Early-type galaxy stellar populations](../02_Zettel/Theory/Early-type galaxy stellar populations.html) old, metal-rich, $\alpha$-enhanced.
- [Age-metallicity degeneracy](../02_Zettel/Theory/Age-metallicity degeneracy.html) in broadband colors. exists.
- [Lick indices](../02_Zettel/Theory/Lick indices.html) breaking the degeneracy. exists.
- [Alpha-Fe enhancement](../02_Zettel/Theory/Alpha-Fe enhancement.html) $\alpha$/Fe traces star-formation timescale.
- [Color gradients in ellipticals](../02_Zettel/Theory/Color gradients in ellipticals.html) outward $\to$ bluer + younger + lower-Z, evidence of inside-out formation.
- [Stellar populations I II III](../02_Zettel/Theory/Stellar populations I II III.html) historical Baade classification. exists.
- [Single stellar population SSP](../02_Zettel/Theory/Single stellar population SSP.html) building block. exists.

## Block 12  -  scaling relations + galaxy structure

- [Tully-Fisher relation](../02_Zettel/Theory/Tully-Fisher relation.html) spiral mass-luminosity-velocity. exists.
- [Faber-Jackson relation](../02_Zettel/Theory/Faber-Jackson relation.html) $L \propto \sigma^4$ for ellipticals.
- [Fundamental plane of ellipticals](../02_Zettel/Theory/Fundamental plane of ellipticals.html) $R_e \propto \sigma^{1.4}\,\langle I\rangle^{-0.9}$. exists.
- [Kormendy relation](../02_Zettel/Theory/Kormendy relation.html) $\langle\mu\rangle \propto \log R_e$ for ellipticals.
- [Mass-radius and mass-velocity relations](../02_Zettel/Theory/Mass-radius and mass-velocity relations.html) universal scaling.
- [Low surface brightness galaxies](../02_Zettel/Theory/Low surface brightness galaxies.html) UDGs, dwarf spheroidals, faintest galaxies known.
- [Galaxy size-luminosity relation](../02_Zettel/Theory/Galaxy size-luminosity relation.html) $R_e$ vs $M$. exists.
- [Stellar mass function](../02_Zettel/Theory/Stellar mass function.html) vs [Halo mass function vs galaxy mass function](../02_Zettel/Theory/Halo mass function vs galaxy mass function.html) gap. exists.
- [Halo gravity suppression of galaxy formation](../02_Zettel/Theory/Halo gravity suppression of galaxy formation.html) feedback. exists.
- [Stellar-to-halo mass ratio](../02_Zettel/Theory/Stellar-to-halo mass ratio.html) Behroozi 2013 peak. exists.

## connections to other MOCs

- [Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.html) provides the cosmological backdrop + the distance ladder + Pablo's lectures. heavy overlap with Block 10 of OC + Pablo lectures (already in vault).
- [Astronomical_Spectroscopy_MOC](../00_Atlas/Astronomical_Spectroscopy_MOC.html) for kinematic + diagnostic methods.
- [Observational_Astrophysics_MOC](../00_Atlas/Observational_Astrophysics_MOC.html) for the underlying photometric + spectroscopic toolkit.
- [Fundamentals_Astrophysics_Cosmology_MOC](../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html) for stellar evolution + ISM + Friedmann + LSS.

## see also

- [Galaxies_course_intro](../02_Zettel/Theory/Galaxies_course_intro.html)
- [Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.html)
- [Pablo_02_Statistical_properties_of_galaxies](../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html) (Pablo's lectures, exists)
- [Pablo_03_Star_formation_in_galaxies](../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html) (exists)
- [Cosmic_inventory_overview](../02_Zettel/Theory/Cosmic_inventory_overview.html)


---

## Dynamic Zettel Index (Dataview)

```dataview
LIST
FROM "03_Zettel/Theory"
WHERE contains(file.outlinks, this.file.link) OR contains(file.inlinks, this.file.link)
SORT file.name ASC
```