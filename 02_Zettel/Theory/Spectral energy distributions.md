---
layout: default
title: "Spectral energy distributions"
---

a galaxy's **spectral energy distribution (SED)** is the integrated emission across all wavelengths, $f_\nu$ as a function of $\nu$. it is the **complete photon-budget portrait** of the galaxy.

modeling and fitting SEDs is how we extract physical parameters: stellar mass, SFR, age, metallicity, dust content, AGN fraction.

---

## what shapes the SED

a galaxy SED has contributions from:
- **stars** of all ages and masses (the **stellar continuum**)
- **gas** (HII region nebular continuum + emission lines)
- **dust** (UV-optical absorption + IR re-emission)
- **AGN** (if present): power-law continuum + dust torus + optical broad lines

the SED has characteristic features:
- **4000 Å break**: the boundary between bound-bound metallic absorption (high in old stars) and the free continuum
- **Lyman break** at 912 Å: complete absorption by neutral hydrogen
- **Balmer break** at 3646 Å: from HI photoionization
- **emission lines** (H$\alpha$, [OII], [OIII], etc.): from HII regions, AGN, etc.
- **dust bump** in the UV at 2175 Å: from PAHs/small carbonaceous grains
- **PAH features** at 3.3, 6.2, 7.7, 8.6, 11.3 $\mu$m: from polycyclic aromatic hydrocarbons in star-forming regions
- **silicate absorption/emission** at 9.7 $\mu$m
- **modified blackbody** in the FIR: dust at $T \sim 20$–$50$ K

---

## stellar population synthesis

the basic theoretical tool: combine **single stellar populations (SSPs)** of different ages and metallicities to build the integrated stellar SED.

an SSP is a coeval, chemically homogeneous population — all stars have the same age and composition, with masses drawn from the IMF. the integrated SED of an SSP is:
$$f_\nu^{SSP}(t, Z) = \int dM \cdot \phi(M) \cdot f_\nu^{star}(M, t, Z)$$

with $\phi(M)$ the IMF.

a real galaxy is a **superposition** of SSPs of different ages and metallicities:
$$f_\nu^{gal} = \int dt' \cdot {\rm SFR}(t') \cdot f_\nu^{SSP}(t - t', Z(t'))$$

(plus dust attenuation, gas emission, AGN if present.)

major SPS codes:
- **BC03** (Bruzual & Charlot 2003) — the workhorse
- **Maraston** (2005) — emphasizes thermally-pulsing AGB
- **FSPS** (Conroy 2009) — modular, modern
- **Starburst99** — for massive young populations

---

## the IMF and stellar mass

the **initial mass function** $\phi(M) = dN/dM$ controls the relative number of high vs low mass stars at birth. the canonical **Salpeter (1955)**:
$$\phi(M) \propto M^{-2.35} \quad (M > 0.5\,M_\odot)$$

modern: **Kroupa (2001)** or **Chabrier (2003)** with a turnover at low mass.

→ see [Initial mass function](../../02_Zettel/Theory/Initial mass function.html).

stellar mass = total mass currently in stars. typically inferred from optical-NIR photometry. uncertainty $\sim 0.2$–$0.3$ dex due to IMF, SFH, and dust uncertainties.

---

## SFR

the star formation rate today is inferred from various tracers (each sensitive to a different timescale):

| tracer | timescale | calibration |
|---|---|---|
| **UV** ($\sim 1500$ Å) | $\sim 100$ Myr | Kennicutt 1998: $1.4 \times 10^{-28} L_\nu^{\rm UV}$ |
| **H$\alpha$** | $\sim 10$ Myr | $7.9 \times 10^{-42} L({\rm H\alpha})$ |
| **IR** (8-1000$\mu$m) | $\sim 100$ Myr | $4.5 \times 10^{-44} L_{\rm TIR}$ |
| **radio** (1.4 GHz) | $\sim 100$ Myr | FIR-radio correlation |
| **X-ray** (0.5-10 keV) | $\sim 100$ Myr | Ranalli 2003 |

→ see [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.html), [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.html), [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.html), [Radio SFR tracer](../../02_Zettel/Theory/Radio SFR tracer.html), [X-ray SFR tracer](../../02_Zettel/Theory/X-ray SFR tracer.html).

a galaxy's SED encodes its current SFR (UV/H$\alpha$) and its recent SFH (optical-NIR continuum shape).

---

## SED fitting

the modern way to extract galaxy properties:

1. observe the galaxy in many bands (UV, optical, NIR, MIR, FIR)
2. construct the observed SED $f_\nu^{\rm obs}(\nu_i)$
3. choose a model: stellar populations + dust + (optionally) AGN, with parameters $\theta = (\rm SFR, M_*, Z, A_V, t, \dots)$
4. fit by minimizing $\chi^2$ or maximum likelihood

modern Bayesian SED fitting tools: **CIGALE**, **MAGPHYS**, **BEAGLE**, **prospector**, **Bagpipes**. they marginalize over nuisance parameters and give posterior distributions on $M_*$, SFR, etc.

---

## photometric redshifts

if you have an SED in many bands but no spectroscopy, you can still estimate the redshift by **finding which redshift makes the observed SED most similar to a galaxy template**:
$$\chi^2(z) = \sum_i \frac{[f^{\rm obs}_i - f^{\rm template}_i(z)]^2}{\sigma_i^2}$$

minimum $\chi^2(z)$ gives the photo-z. accuracy depends on the SED features being captured by the photometry — typically $\sigma_z/(1+z) \sim 0.03$ for high-quality photo-z, much worse for low-coverage data.

→ see [Photometric redshifts](../../02_Zettel/Theory/Photometric redshifts.html).

---

## why SEDs matter

the SED is the most general observation we can make of a galaxy. from it we extract:
- **stellar mass** $M_*$
- **star formation rate** SFR
- **dust attenuation** $A_V$
- **age and metallicity** of the dominant stellar population
- **redshift** (if no spec-z available)
- **AGN fraction** and properties

these are the inputs to galaxy evolution, scaling relations, and cosmological inference.

modern galaxy surveys (SDSS, COSMOS, JADES, CEERS, Euclid) are *mostly photometric* — i.e. they measure SEDs first, and only follow up the most interesting objects spectroscopically. so SED modeling is the foundation of large-scale galaxy science.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Galaxies across wavelengths](../../02_Zettel/Theory/Galaxies across wavelengths.html)
- [Hubble morphological sequence](../../02_Zettel/Theory/Hubble morphological sequence.html)
- [Initial mass function](../../02_Zettel/Theory/Initial mass function.html)
- [Photometric redshifts](../../02_Zettel/Theory/Photometric redshifts.html)
- [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.html)
- [SED fitting for SFH](../../02_Zettel/Theory/SED fitting for SFH.html)
- [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.html)
