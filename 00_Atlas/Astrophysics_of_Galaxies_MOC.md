---
layout: default
title: "Astrophysics_of_Galaxies_MOC"
---

# Astrophysics of Galaxies  -  Map of Content

A.Y. 2025/2026, second semester at U Padua. taught Feb-May 2026 ($24$ Feb to $20$ May). lecture material at . 

this course extends [Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.md) Block 10 (Pablo's lectures) into a full course on the **physics of galaxies**: how we measure them, classify them, model them, and use them to test cosmology. unlike OC which keeps galaxies abstract, this course goes deep on the **internal physics**: kinematics, stellar populations, dark matter, scaling relations, central black holes.

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

- [Galaxies_course_intro](../02_Zettel/Theory/Galaxies_course_intro.md)  -  what this course is, the chain from photometry to physics, how it relates to OC + Fundamentals

## Block 1  -  luminosity function + observational basics

before any galaxy science, the **basic measurements**: how do we describe galaxy populations statistically?

- [Luminosity function definition](../02_Zettel/Theory/Luminosity function definition.md) $\phi(L)\,dL\,dV$, the number per volume per luminosity. exists in vault.
- [Schechter function](../02_Zettel/Theory/Schechter function.md) $\phi(L) \propto (L/L^*)^\alpha\,e^{-L/L^*}/L^*$. exists.
- [Schechter K-band luminosity function](../02_Zettel/Theory/Schechter K-band luminosity function.md) tabulated values + interpretation. exists.
- [Schechter function in magnitudes](../02_Zettel/Theory/Schechter function in magnitudes.md) the form fit to data. exists.
- [Integrals of the Schechter function](../02_Zettel/Theory/Integrals of the Schechter function.md) number, luminosity, $N(>L^*)$ as Gamma functions. exists.
- [Double power-law modified Schechter](../02_Zettel/Theory/Double power-law modified Schechter.md) for high-z/bright end. exists.
- [Cosmological distances](../02_Zettel/Theory/Cosmological distances.md) all 4 distances. exists.
- [K-correction](../02_Zettel/Theory/K-correction.md) from $\nu_e = \nu_0(1+z)$. exists.
- [Distance modulus](../02_Zettel/Theory/Distance modulus.md) $\mu = 5\log_{10}(d/10\,{\rm pc})$. exists.
- [Interstellar absorption](../02_Zettel/Theory/Interstellar absorption.md) dust extinction along the line of sight. exists.
- [Petrosian radius](../02_Zettel/Theory/Petrosian radius.md) aperture for galaxy size measurement (SDSS standard).
- [SDSS overview](../02_Zettel/Theory/SDSS overview.md) the survey + photometric system + spectroscopic targets.

## Block 2  -  galaxy populations + surveys

statistical properties of the modern galaxy zoo, derived from imaging + spectroscopic surveys.

- [Red sequence and blue cloud](../02_Zettel/Theory/Red sequence and blue cloud.md) color bimodality. exists.
- [Color bimodality of galaxies](../02_Zettel/Theory/Color bimodality of galaxies.md) Baldry 2004 two peaks in $u-r$. exists.
- [Green valley and quenching tracks](../02_Zettel/Theory/Green valley and quenching tracks.md) Faber 2007 evolutionary arrows. exists.
- [Galaxy color, density and morphology](../02_Zettel/Theory/Galaxy color, density and morphology.md) Hogg 2004, Blanton & Moustakas. exists.
- [Galaxy number counts N(m)](../02_Zettel/Theory/Galaxy number counts N(m).md) the Euclidean prediction. exists.
- [Galaxy counts at different wavelengths](../02_Zettel/Theory/Galaxy counts at different wavelengths.md) Durham compilation. exists.
- [Driver 1998 counts by morphology](../02_Zettel/Theory/Driver 1998 counts by morphology.md) faint blue galaxy excess. exists.
- [Deep-field surveys](../02_Zettel/Theory/Deep-field surveys.md) HDF, HUDF, FDF, GOODS, COSMOS  -  what each gave us.
- [UV luminosity function](../02_Zettel/Theory/UV luminosity function.md) high-$z$ LBG-derived UV LF + its evolution.
- [Madau plot](../02_Zettel/Theory/Madau plot.md) cosmic SFR density vs $z$. companion to [Cosmic star formation history](../02_Zettel/Theory/Cosmic star formation history.md).

## Block 3  -  galaxy morphological + photometric classification

- [Hubble morphological sequence](../02_Zettel/Theory/Hubble morphological sequence.md) E, S0, Sa, Sb, Sc, Sd, Irr. exists.
- [Galaxy morphology vs physical properties](../02_Zettel/Theory/Galaxy morphology vs physical properties.md) morphology correlates with color, mass, environment. exists.
- [CAS galaxy classification](../02_Zettel/Theory/CAS galaxy classification.md) concentration + asymmetry + smoothness, Conselice 2003.
- [Sersic profile](../02_Zettel/Theory/Sersic profile.md) $\Sigma(r) \propto e^{-(r/r_e)^{1/n}}$. with $n = 4$ for ellipticals (de Vaucouleurs), $n = 1$ for disks.
- [De Vaucouleurs and exponential profiles](../02_Zettel/Theory/De Vaucouleurs and exponential profiles.md) the two limiting cases of Sersic.
- [Photometric redshifts](../02_Zettel/Theory/Photometric redshifts.md) template-based + ML-based. exists.
- [Photo-z biases and catastrophic outliers](../02_Zettel/Theory/Photo-z biases and catastrophic outliers.md) Oyaizu 2008. exists.
- [Galaxy SED fitting](../02_Zettel/Theory/Galaxy SED fitting.md) modern approach to estimating mass, age, dust. references [SED fitting basics](../02_Zettel/Theory/SED fitting basics.md).

## Block 4  -  spectral classification + PCA

- [PCA spectral classification of galaxies](../02_Zettel/Theory/PCA spectral classification of galaxies.md) Connolly 1995, Madgwick 2002. eigenspectra of galaxy populations.
- [Eigenspectra and spectral types](../02_Zettel/Theory/Eigenspectra and spectral types.md) PCA basis: continuum, emission, absorption.
- [Lick indices](../02_Zettel/Theory/Lick indices.md) EW measurements of standard absorption features. exists.
- [Stellar population synthesis](../02_Zettel/Theory/Stellar population synthesis.md) BC03, FSPS, MILES. exists.

## Block 5  -  galaxy spectroscopy: 1D, 2D, IFU

- [Spectrograph design](../02_Zettel/Theory/Spectrograph design.md) basics. exists.
- [Spectrograph types](../02_Zettel/Theory/Spectrograph types.md) longslit, MOS, IFU. exists.
- [Echelle spectroscopy](../02_Zettel/Theory/Echelle spectroscopy.md) high-R for kinematics. exists.
- [Multi-object spectroscopy MOS](../02_Zettel/Theory/Multi-object spectroscopy MOS.md) SDSS, DESI. exists.
- [Integral-field spectroscopy IFU](../02_Zettel/Theory/Integral-field spectroscopy IFU.md) datacubes. exists.
- [Datacube reduction](../02_Zettel/Theory/Datacube reduction.md) from raw exposures to (x, y, λ) datacube.
- [MUSE datacubes](../02_Zettel/Theory/MUSE datacubes.md) VLT/MUSE specifics; flagship tool of modern galaxy spectroscopy.
- [MaNGA survey](../02_Zettel/Theory/MaNGA survey.md) SDSS-IV IFU survey of $10^4$ nearby galaxies.
- [Datacube redshift measurement](../02_Zettel/Theory/Datacube redshift measurement.md) cross-correlation per spaxel.

## Block 6  -  galaxy kinematics

- [LOSVD](../02_Zettel/Theory/LOSVD.md) line-of-sight velocity distribution: the spectral signature of stellar motions in a galaxy.
- [Stellar kinematics measurements](../02_Zettel/Theory/Stellar kinematics measurements.md) pPXF, Gauss-Hermite expansion, $h_3$ + $h_4$.
- [Ionized gas kinematics](../02_Zettel/Theory/Ionized gas kinematics.md) emission lines as kinematic tracers (Hα, [OIII]).
- [Velocity dispersion from line width](../02_Zettel/Theory/Velocity dispersion from line width.md) $\sigma_v$ from broadened lines. exists.
- [Rotation curves](../02_Zettel/Theory/Rotation curves.md) $V(R)$ from spirals; flat = dark matter halo.
- [Tully-Fisher relation](../02_Zettel/Theory/Tully-Fisher relation.md) $L \propto V_{\rm flat}^4$. exists.
- [Stellar v sin i from line shape](../02_Zettel/Theory/Stellar v sin i from line shape.md) for individual stars. exists.

## Block 7  -  Local Group + galaxy clusters

- [Local Group galaxies](../02_Zettel/Theory/Local Group galaxies.md) MW + M31 + M33 + dozens of dwarfs + satellites.
- [Galaxy clusters and overview of evolution](../02_Zettel/Theory/Galaxy clusters and overview of evolution.md) hierarchical structure + ICM. exists.
- [Virgo cluster](../02_Zettel/Theory/Virgo cluster.md) nearest large cluster, $\sim 17$ Mpc.
- [Coma cluster](../02_Zettel/Theory/Coma cluster.md) distant rich cluster, $\sim 100$ Mpc.
- [Milky Way structure](../02_Zettel/Theory/Milky Way structure.md) disk + bulge + halo + stellar populations. exists.

## Block 8  -  Supermassive Black Holes

central engines of galaxies, masses correlated with bulge properties (M-σ relation).

- [Galactic Center Sgr A and S-stars](../02_Zettel/Theory/interf/Galactic Center Sgr A and S-stars.md) $\sim 4 \times 10^6\,M_\odot$ at the centre of the MW. exists.
- [Water maser BH masses](../02_Zettel/Theory/Water maser BH masses.md) NGC 4258: most precise $M_{BH}$ known.
- [Reverberation mapping](../02_Zettel/Theory/Reverberation mapping.md) BLR size from time delays + virial theorem.
- [Stellar dynamics SMBH masses](../02_Zettel/Theory/Stellar dynamics SMBH masses.md) central kinematics from IFU + dynamical models.
- [Ionized gas SMBH masses](../02_Zettel/Theory/Ionized gas SMBH masses.md) gas-disk modelling for $M_{BH}$.
- [Magorrian relation](../02_Zettel/Theory/Magorrian relation.md) $M_{BH} \approx 10^{-3}\,M_{\rm bulge}$. exists.
- [M sigma relation](../02_Zettel/Theory/M sigma relation.md) $M_{BH} \propto \sigma^4$ (Tremaine 2002).
- [AGN spectroscopy](../02_Zettel/Theory/AGN spectroscopy.md) BLR + NLR + jet + torus. exists.

## Block 9  -  Interstellar Medium of galaxies

- [Interstellar medium components and gas cycle](../02_Zettel/Theory/Interstellar medium components and gas cycle.md) CNM, WNM, WIM, hot gas. exists.
- [H I regions](../02_Zettel/Theory/H I regions.md) cold neutral H. exists.
- [H II region spectroscopy](../02_Zettel/Theory/H II region spectroscopy.md) photoionised emission. exists.
- [Photodissociation regions PDRs](../02_Zettel/Theory/Photodissociation regions PDRs.md) CNM-WIM boundaries. exists.
- [Molecular clouds](../02_Zettel/Theory/Molecular clouds.md) CO + dust + star-forming regions.
- [Schmidt-Kennicutt law](../02_Zettel/Theory/Schmidt-Kennicutt law.md) $\Sigma_{SFR} \propto \Sigma_{\rm gas}^{1.4}$. exists.

## Block 10  -  Dark matter

- [Cosmic_inventory_dark_matter](../02_Zettel/Theory/Cosmic_inventory_dark_matter.md) overview. exists.
- [Dark matter rotation curves](../02_Zettel/Theory/Dark matter rotation curves.md) flat $V(R)$ in spirals.
- [Dark matter in elliptical galaxies](../02_Zettel/Theory/Dark matter in elliptical galaxies.md) from X-ray hot gas + globular cluster + planetary nebulae kinematics.
- [Dark matter in dwarf galaxies](../02_Zettel/Theory/Dark matter in dwarf galaxies.md) high M/L, key tests of $\Lambda$CDM small-scale predictions.
- [Lensing as a cosmological probe](../02_Zettel/Theory/Lensing as a cosmological probe.md) strong + weak. exists.
- [Bullet Cluster and dark matter mapping](../02_Zettel/Theory/Bullet Cluster and dark matter mapping.md) direct evidence of collisionless DM.
- [MOND](../02_Zettel/Theory/MOND.md) modified Newtonian dynamics, alternative explanation.
- [Modified gravity alternatives](../02_Zettel/Theory/Modified gravity alternatives.md) TeVeS, MOG, Verlinde's emergent gravity.

## Block 11  -  Stellar populations of early-type galaxies

- [Early-type galaxy stellar populations](../02_Zettel/Theory/Early-type galaxy stellar populations.md) old, metal-rich, $\alpha$-enhanced.
- [Age-metallicity degeneracy](../02_Zettel/Theory/Age-metallicity degeneracy.md) in broadband colors. exists.
- [Lick indices](../02_Zettel/Theory/Lick indices.md) breaking the degeneracy. exists.
- [Alpha-Fe enhancement](../02_Zettel/Theory/Alpha-Fe enhancement.md) $\alpha$/Fe traces star-formation timescale.
- [Color gradients in ellipticals](../02_Zettel/Theory/Color gradients in ellipticals.md) outward $\to$ bluer + younger + lower-Z, evidence of inside-out formation.
- [Stellar populations I II III](../02_Zettel/Theory/Stellar populations I II III.md) historical Baade classification. exists.
- [Single stellar population SSP](../02_Zettel/Theory/Single stellar population SSP.md) building block. exists.

## Block 12  -  scaling relations + galaxy structure

- [Tully-Fisher relation](../02_Zettel/Theory/Tully-Fisher relation.md) spiral mass-luminosity-velocity. exists.
- [Faber-Jackson relation](../02_Zettel/Theory/Faber-Jackson relation.md) $L \propto \sigma^4$ for ellipticals.
- [Fundamental plane of ellipticals](../02_Zettel/Theory/Fundamental plane of ellipticals.md) $R_e \propto \sigma^{1.4}\,\langle I\rangle^{-0.9}$. exists.
- [Kormendy relation](../02_Zettel/Theory/Kormendy relation.md) $\langle\mu\rangle \propto \log R_e$ for ellipticals.
- [Mass-radius and mass-velocity relations](../02_Zettel/Theory/Mass-radius and mass-velocity relations.md) universal scaling.
- [Low surface brightness galaxies](../02_Zettel/Theory/Low surface brightness galaxies.md) UDGs, dwarf spheroidals, faintest galaxies known.
- [Galaxy size-luminosity relation](../02_Zettel/Theory/Galaxy size-luminosity relation.md) $R_e$ vs $M$. exists.
- [Stellar mass function](../02_Zettel/Theory/Stellar mass function.md) vs [Halo mass function vs galaxy mass function](../02_Zettel/Theory/Halo mass function vs galaxy mass function.md) gap. exists.
- [Halo gravity suppression of galaxy formation](../02_Zettel/Theory/Halo gravity suppression of galaxy formation.md) feedback. exists.
- [Stellar-to-halo mass ratio](../02_Zettel/Theory/Stellar-to-halo mass ratio.md) Behroozi 2013 peak. exists.

## connections to other MOCs

- [Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.md) provides the cosmological backdrop + the distance ladder + Pablo's lectures. heavy overlap with Block 10 of OC + Pablo lectures (already in vault).
- [Astronomical_Spectroscopy_MOC](../00_Atlas/Astronomical_Spectroscopy_MOC.md) for kinematic + diagnostic methods.
- [Observational_Astrophysics_MOC](../00_Atlas/Observational_Astrophysics_MOC.md) for the underlying photometric + spectroscopic toolkit.
- [Fundamentals_Astrophysics_Cosmology_MOC](../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md) for stellar evolution + ISM + Friedmann + LSS.

## see also

- [Galaxies_course_intro](../02_Zettel/Theory/Galaxies_course_intro.md)
- [Observational_Cosmology_MOC](../00_Atlas/Observational_Cosmology_MOC.md)
- [Pablo_02_Statistical_properties_of_galaxies](../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md) (Pablo's lectures, exists)
- [Pablo_03_Star_formation_in_galaxies](../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.md) (exists)
- [Cosmic_inventory_overview](../02_Zettel/Theory/Cosmic_inventory_overview.md)
- [Voyage!](../Voyage!.md)

---

## Dynamic Zettel Index (Dataview)

```dataview
LIST
FROM "03_Zettel/Theory"
WHERE contains(file.outlinks, this.file.link) OR contains(file.inlinks, this.file.link)
SORT file.name ASC
```