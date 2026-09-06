---
layout: default
title: "Galaxies across wavelengths"
---

a galaxy looks **dramatically different** in different wavelength bands, because each wavelength is sensitive to a different physical component:

| band | wavelength | main emitter |
|---|---|---|
| **radio** | cm-m | synchrotron from cosmic-ray electrons; HI 21 cm gas |
| **far-infrared / sub-mm** | 100$\mu$m - mm | cold dust at $\sim 30$ K, reprocessed star formation |
| **mid-infrared** | 5-100$\mu$m | warm dust, PAHs, AGN tori |
| **near-infrared** | 1-5$\mu$m | old stars (K, M giants), low extinction |
| **optical** | 0.4-1$\mu$m | mix of stellar populations, dust extinction |
| **UV** | 100 nm - 0.4$\mu$m | young O/B stars |
| **soft X-ray** | 0.1-2 keV | hot gas (cluster ICM, galactic winds) |
| **hard X-ray** | 2-100 keV | accreting compact objects (XRBs, AGN) |
| **gamma-ray** | > 100 keV | SNe, AGN, cosmic rays |

so a multi-wavelength SED is a complete portrait of a galaxy.

<img src="{{ "/assets/images/galaxies-15.png" | relative_url }}" alt="galaxies-15" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## a multi-wavelength tour of a spiral galaxy

take M101 (a face-on Sc galaxy):

- **radio (1.4 GHz)**: smooth disk emission from synchrotron of cosmic-ray electrons accelerated in supernova remnants. tracer of recent star formation (see [Radio SFR tracer](../../02_Zettel/Theory/Radio SFR tracer.html)).
- **HI (21 cm)**: rotating gas disk, often extending much further than the optical disk. used for rotation curves.
- **CO (mm)**: dense molecular gas, concentrated in spiral arms. tracer of the future fuel for star formation.
- **far-IR (100$\mu$m)**: cold dust heated by the average stellar radiation field. tracer of dust mass and obscured star formation.
- **mid-IR (24$\mu$m)**: warm dust around HII regions and PAHs. tracer of recent star formation.
- **optical (V-band)**: smooth disk + spiral arm structure dominated by intermediate-age stars.
- **UV (1500 Å)**: very clumpy, dominated by O/B stars and HII regions. direct tracer of recent (< 100 Myr) star formation.
- **soft X-ray (1 keV)**: hot ISM and cumulative emission from low-mass X-ray binaries.
- **hard X-ray (10 keV)**: high-mass X-ray binaries and any AGN.

so each band probes a different physical component, and combining them gives the full picture.

---

## different morphologies, different SEDs

three idealized cases:

### early-type (elliptical) galaxy
- bright in NIR (lots of K giants)
- dim in UV (no young stars)
- dim in IR (very little dust)
- spectrum dominated by 4000 Å break, Mg lines, etc.
- some hot ICM in massive ellipticals

### late-type (spiral) galaxy
- bright across optical, with spiral structure
- bright in UV (young O/B stars)
- bright in IR (dust)
- bright in radio (HI, synchrotron from SNRs)
- emission lines (H$\alpha$ from HII regions)

### starburst galaxy
- extreme in IR (most of the bolometric luminosity is dust-reprocessed)
- bright in radio (more SNRs per unit volume)
- can be dim in UV/optical (heavy obscuration)
- like Arp 220 — a ULIRG with $L_{\rm IR} \sim 10^{12}\, L_\odot$

→ see [Spectral energy distributions](../../02_Zettel/Theory/Spectral energy distributions.html) for the SED fitting techniques used to extract galaxy properties from multi-wavelength data.

---

## the K-correction

at high redshift, the rest-frame band you observe shifts. so a galaxy at $z = 3$ observed in the IR is *really* observed in its rest-frame optical/UV. you need a **K-correction** to convert observed to rest-frame magnitudes:
$$m_{\rm obs}(\nu) = m_{\rm rest}(\nu(1+z)) + K(z)$$

K-correction is band-dependent and SED-dependent. crucial for high-z work.

→ see [K-correction](../../02_Zettel/Theory/K-correction.html) in the Observational Cosmology MOC.

---

## the cosmic backgrounds

the integrated emission of all galaxies across cosmic time produces:
- **CIB** (cosmic infrared background): from dust reprocessed star formation. roughly equal in energy to the optical/UV background — half of starlight has been absorbed by dust and re-emitted in the IR.
- **CUVOB** (cosmic UV/optical background): direct starlight from unobscured star formation
- **CXB** (cosmic X-ray background): integrated AGN emission
- **CRB** (cosmic radio background)

→ see [Cosmic_inventory_photons](../../02_Zettel/Theory/Cosmic_inventory_photons.html) for the SEDs of these backgrounds.

these backgrounds carry the **integrated history** of all galaxies. a complete picture of galaxy evolution must reproduce them all.

---

## why this matters

multi-wavelength astronomy is the only way to:
- get a **complete energy budget** for a galaxy (most starlight is reprocessed by dust into the IR)
- separate **stellar and AGN contributions** (AGN dominate the hard X-ray and have characteristic spectral signatures)
- measure **gas masses** (HI, CO, dust, X-ray)
- identify **specific phases of evolution** (UV-bright = young; IR-bright = dusty starburst; radio-loud = AGN)

the **modern era of cosmology** is multi-wavelength: SDSS optical + Galex UV + Herschel FIR + ALMA mm + JWST NIR + Chandra X-ray + LOFAR radio. each band a different telescope, each band a different piece of the puzzle.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Galaxies in the local universe](../../02_Zettel/Theory/Galaxies in the local universe.html)
- [Hubble morphological sequence](../../02_Zettel/Theory/Hubble morphological sequence.html)
- [Spectral energy distributions](../../02_Zettel/Theory/Spectral energy distributions.html)
- [Cosmic_inventory_photons](../../02_Zettel/Theory/Cosmic_inventory_photons.html)
- [K-correction](../../02_Zettel/Theory/K-correction.html)
- [Galaxy counts at different wavelengths](../../02_Zettel/Theory/Galaxy counts at different wavelengths.html)
- [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.html)
- [Radio SFR tracer](../../02_Zettel/Theory/Radio SFR tracer.html)
- [X-ray SFR tracer](../../02_Zettel/Theory/X-ray SFR tracer.html)
