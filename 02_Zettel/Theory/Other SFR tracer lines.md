---
layout: default
title: "Other SFR tracer lines"
---

# other SFR tracer lines

up: [Pablo_03_Star_formation_in_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.md)

some emission lines play niche but important roles as SFR tracers when optical/UV recombination lines are unavailable or extinguished.

## Paschen α (1.875 μm)

same physics as Hα (case B recombination) but at NIR wavelengths. key advantage: $A_{1.87 \mu m} \simeq 0.2\, A_V$, roughly an order of magnitude less extinction than Hα. so Paschen α gives nearly extinction-free SFR estimates in dusty regions where even the Balmer decrement fails.

- intrinsic ratio: $L(\text{Hα})/L(\text{Pα}) \simeq 8.5$ (case B)
- calibration: $\text{SFR} \simeq 6.8 \times 10^{-41}\, L(\text{Pα})$ erg/s
- the only downside is limited sensitivity: Pα is $\sim 8\times$ fainter than Hα intrinsically, so you trade flux for extinction-immunity

Pablo emphasizes JWST NIRCam and MIRI spectroscopy finally open Pα and Brackett lines at intermediate $z$, giving extinction-free SFR in LIRGs and dusty main-sequence galaxies.

## [CII] 158 μm

the $\lambda = 158\,\mu$m fine-structure line of C⁺ is the dominant coolant of the cold neutral medium and one of the brightest FIR lines in star-forming galaxies. produced in photodissociation regions (PDRs) around young stars, so it tracks recent SF on $\sim 10$–$100$ Myr timescales.

- calibration: $L([\text{CII}])/L_{\text{FIR}} \sim 10^{-3}$ in normal SFGs, *drops* in ULIRGs ("[CII] deficit")
- observable with ALMA from $z \sim 2$ to $z > 7$: the line redshifts into submm/mm where the sky is transparent
- now the primary SFR tracer in the $z > 5$ universe via ALMA, in tandem with [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.md)

## [OIII] 88 μm, [NII] 122 μm, [SIII] 33 μm

other FIR lines, useful for ISM diagnostics (ionization, density, metallicity) rather than primary SFR indicators. [OIII] 88 μm is becoming an ALMA workhorse at $z > 6$ (paired with [CII]).

## PAH features

polycyclic aromatic hydrocarbons emit broad MIR bands at 3.3, 6.2, 7.7, 8.6, 11.3, 12.7 μm. powered by UV absorption in PDRs, so PAH luminosity tracks SFR (Peeters 2004, Pope 2008):

- $\text{SFR} \propto L(\text{PAH 7.7}\mu\text{m})$, calibration comparable to TIR
- PAH emission drops in low-metallicity and hard-radiation environments (AGN, Seyferts)
- Spitzer IRS was the main instrument; JWST MIRI MRS now does this at higher $z$

## radio recombination lines

Hnα at $\nu \sim $ GHz. extinction-free, but very weak. niche use in dusty Galactic HII regions.

## connections

- main tracers: [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.md), [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.md), [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.md), [Radio SFR tracer](../../02_Zettel/Theory/Radio SFR tracer.md)
- extinction context: [Dust attenuation and extinction curves](../../02_Zettel/Theory/Dust attenuation and extinction curves.md)
- comparison: [SFR tracer comparison](../../02_Zettel/Theory/SFR tracer comparison.md)

## key references

- Kennicutt & Evans 2012 ARAA (tracer summary tables)
- De Looze et al. 2014 ([CII] calibration)
- Diaz-Santos et al. 2013 ([CII] deficit in ULIRGs)
- Peeters et al. 2004 (PAH as SFR)
