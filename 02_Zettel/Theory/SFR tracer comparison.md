---
layout: default
title: "SFR tracer comparison"
---

# SFR tracer comparison

up: [Pablo_03_Star_formation_in_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html)

## the question

different SFR tracers probe different stellar populations, different timescales, and suffer different systematics. when a galaxy has SFR(Hα) ≠ SFR(UV) ≠ SFR(IR), is one of them wrong, or are they all right and telling me about the galaxy's recent history?

## the Pablo slide: Cardiel 2003

Pablo shows a plot of SFR(IR) / SFR(Hα) vs $L_{\text{IR}}$ for galaxies at $z \sim 0$, $z \sim 0.4$, and $z \sim 0.8$ (Cardiel et al. 2003). key features:

- at low $L_{\text{IR}}$ ($\sim 10^{10}\,L_\odot$): ratio $\sim 1$, tracers agree
- at high $L_{\text{IR}}$ ($\sim 10^{12}\,L_\odot$, ULIRGs): ratio climbs to $\sim 10$, IR finds far more SFR than Hα does

the interpretation: in ULIRGs, so much of the Hα is extincted that Balmer-decrement correction becomes insufficient. the Hα-emitting regions are buried in dust columns $A_V \gg 10$ that a simple decrement cannot recover.

conclusion: at the high-SFR end, IR is the only reliable *single* tracer. Hα alone underestimates SFR systematically.

## when tracers should agree

if a galaxy has:
- been forming stars at a constant rate for $> 100$ Myr, AND
- has modest dust ($A_V \lesssim 1$), AND
- is well-fit by standard IMF and extinction curve,

then UV, Hα, IR, and radio all return the same SFR to within $\sim 0.2$ dex.

## when they disagree: diagnostic value

- **Hα > UV**: recent burst (last $\sim 10$ Myr), UV still catching up
- **UV > Hα**: recent quench (Hα from dying O stars vanishes in 10 Myr, UV persists for $\sim 100$ Myr). post-starburst regime
- **IR > UV + Hα**: heavily extincted, missed recombination flux. LIRGs / ULIRGs
- **radio > IR**: AGN contaminating radio
- **X-ray > IR**: AGN contaminating X-rays, or low-$Z$ HMXB enhancement

## the consensus prescription

the practical best-in-class estimator for a single galaxy is the Bell 2005 / Kennicutt 2009 hybrid:

$$\text{SFR} = \text{SFR}(\text{UV, uncorrected}) + (1 - \eta)\, \text{SFR}(\text{TIR})$$

with $\eta$ a small correction for IR heating by old stars ("cirrus"). at high sSFR, $\eta \simeq 0$.

if no IR, use UV + IRX-β. if no β, use Balmer-decrement-corrected Hα. in all cases, report the IMF assumed.

## literature comparison papers

- Pérez-González et al. 2006: M81 SED decomposition
- Salim et al. 2007, 2009 (SDSS): UV-derived vs Hα-derived SFR agreement
- Buat et al. 2002: UV + IR consistency
- Sullivan et al. 2000: Hα vs UV in deep-field SFGs
- Cardiel et al. 2003: tracer ratios vs $L_{\text{IR}}$ and $z$

## connections

- individual tracers: [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.html), [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.html), [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.html), [Radio SFR tracer](../../02_Zettel/Theory/Radio SFR tracer.html), [X-ray SFR tracer](../../02_Zettel/Theory/X-ray SFR tracer.html)
- IRX-β cross-check: [UV slope and IRX-beta relation](../../02_Zettel/Theory/UV slope and IRX-beta relation.html)
- extinction: [Dust attenuation and extinction curves](../../02_Zettel/Theory/Dust attenuation and extinction curves.html)
- timescale issues: [Galaxy time scales](../../02_Zettel/Theory/Galaxy time scales.html)

## key references

- Cardiel et al. 2003
- Kennicutt & Evans 2012 ARAA (tracer synthesis)
- Pérez-González et al. 2006
- Salim et al. 2007 ApJS 173, 267
