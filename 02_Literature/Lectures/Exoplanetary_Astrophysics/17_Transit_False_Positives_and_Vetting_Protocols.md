---
layout: "default"
title: "17_Transit_False_Positives_and_Vetting_Protocols"
---
# Lesson 17 – Planetary Transits III: False Positives and Vetting Protocols

*Exoplanetary Astrophysics, Prof. Giampaolo Piotto (Lecture 09/12/2025)*  
*Index: [[Exoplanetary_Astrophysics_MOC]]*

---

## The False-Positive Dilemma in Transit Photometry

A transit-like dip in a photometric light curve does not uniquely confirm an exoplanet. Diverse astrophysical configurations mimic planetary transit signatures:
- In ground-based transit surveys, false positive rates frequently exceed **$80 - 90\%$**.
- In wide-field space surveys with large pixel scales (e.g., TESS with $21''\text{ pixel}^{-1}$), blending with nearby background stars constitutes the dominant source of spurious signals.

```
                      ASTROPHYSICAL FALSE-POSITIVE TOPOLOGIES
 1. Blended Eclipsing Binary (BEB)      2. Grazing Eclipsing Binary (GEB)     3. Transiting White/Brown Dwarf
    Target Star       Background EB        Target Star      Stellar Comp.        Target Star      White Dwarf
       ┌───┐             ┌───┐                ┌───┐            ┌───┐                ┌───┐            ┌───┐
       │  │             │● ◐│                │  │           ╱   ││                │  │            │ ● │ R_WD ~ R_Earth
       └───┘             └───┘                └───┘          ╰────╯│                └───┘            └───┘ M_WD ~ 0.6-1.0 M_Sun
    Deep 50% eclipse diluted by           Stellar limb barely grazes           Substellar radius mimics planet,
    bright target ==> Appears as 1% dip!  disk (b > 1 - k) ==> V-shaped dip!   mass requires RV to reveal!
```

---

## Primary Astrophysical False-Positive Scenarios

### 1. Background Eclipsing Binaries (BEBs)
A faint, unresolved eclipsing binary located along the line of sight falls within the same photometric software aperture as the bright primary target star:
- Let the magnitude difference between the target star and the background binary be $\Delta m = m_{\text{contam}} - m_{\text{target}}$.
- The true, unblended eclipse depth of the binary is $\delta_{\text{true}} = \frac{\Delta F_B}{F_B}$ (often $10 - 50\%$).
- The observed transit depth diluted by the flux of the bright target is:
  $$\delta_{\text{obs}} = \frac{\Delta F_B}{F_{\text{target}} + F_B} \approx \delta_{\text{true}} \cdot 10^{-0.4 \Delta m}$$
  A $50\%$ deep stellar eclipse from a star $\Delta m = 5\text{ mag}$ fainter is diluted to:
  $$\delta_{\text{obs}} = 0.50 \times 10^{-0.4(5)} = 0.50 \times 10^{-2} = 0.005 \quad (0.5\%)$$
  which directly mimics the transit of a Jovian exoplanet.

### 2. Grazing Eclipsing Binaries (GEBs)
In a stellar binary where the orbital inclination satisfies $1 - \frac{R_2}{R_1} < b \le 1 + \frac{R_2}{R_1}$, the secondary star never enters completely onto the primary disk:
- The light curve lacks a flat bottom, producing a continuous **V-shaped** profile.
- The eclipse depth is small, matching planetary depths, while the duration is short.

### 3. Hierarchical Triple Systems (HEBs)
A physical triple star system consisting of a bright primary orbited at wide separation by a close, low-mass eclipsing binary. Unlike BEBs, HEBs cannot be separated by proper motion or high-resolution imaging because the components are physically bound at the same distance.

### 4. Transiting Brown Dwarfs and White Dwarfs
- **White Dwarfs**: Remnants of low-to-intermediate mass stars with degenerate electron cores ($M_{\text{WD}} \approx 0.6 - 1.0 M_\odot$). Because degeneracy forces radius to scale as $R \propto M^{-1/3}$, white dwarfs have planetary radii:
  $$R_{\text{WD}} \approx 0.01 R_\odot \approx 1 R_\oplus$$
  A transiting white dwarf produces an exact Earth-sized transit depth ($\delta \sim 10^{-4}$), but will induce a massive radial velocity semi-amplitude ($K \sim \text{tens of km s}^{-1}$).
- **Brown Dwarfs**: Objects with masses $13 M_J \le M \le 80 M_J$ have radii nearly identical to Jupiter ($R \approx 0.8 - 1.1 R_J$) due to hydrogen degeneracy, producing Jupiter-like transit depths.

---

## Pixel Scales across Space Transit Observatories

The susceptibility to blended false positives depends directly on the detector pixel scale and point spread function (PSF) size:

```
 Mission          Launch Year     Aperture / Design           Pixel Scale       Blending Susceptibility
 ──────────────────────────────────────────────────────────────────────────────────────────────────────────
 CoRoT (CNES/ESA) 2006            27 cm off-axis afocal       2.32 arcsec/pix   Moderate
 Kepler (NASA)    2009            95 cm Schmidt telescope     3.98 arcsec/pix   Moderate
 TESS (NASA)      2018            4 x 10 cm wide-angle lenses 21.0 arcsec/pix   EXTREME (High dilution)
 PLATO (ESA)      2026+           26 x 12 cm cameras          15.0 arcsec/pix   High (Mitigated by PIC)
 ──────────────────────────────────────────────────────────────────────────────────────────────────────────
```

Because TESS pixels span $21''$, a typical photometric aperture ($3 \times 3$ to $5 \times 5$ pixels) covers $>1 - 2\text{ arcminutes}$ on the sky, capturing dozens of background stars cataloged by Gaia.

---

## The Classical Transit Vetting Pipeline

Before committing expensive high-resolution spectrographs (e.g. HARPS-N, ESPRESSO) for radial velocity confirmation, transit candidates undergo rigorous photometric and astrometric vetting:

```
                        TRANSIT VETTING DECISION TREE
                          Raw Light Curve Candidate
                                      │
              ┌───────────────────────┴───────────────────────┐
              ▼                                               ▼
     Odd-Even Depth Test                            In/Out Centroid Shift
     Is |δ_odd - δ_even| > 3σ?                      Does centroid shift during dip?
     ├── YES ──> REJECT: Eclipsing Binary           ├── YES ──> REJECT: Background Blend
     └── NO                                         └── NO
              │                                               │
              └───────────────────────┬───────────────────────┘
                                      ▼
                           Secondary Eclipse Search
                           Is there a prominent dip at phi = 0.5?
                           ├── YES ──> REJECT: Secondary Star
                           └── NO
                                      │
                                      ▼
                           High-Resolution AO Imaging
                           Is there an unresolved blend within 1"?
                           ├── YES ──> Correct dilution factor
                           └── NO
                                      │
                                      ▼
                         Reconnaissance Spectroscopy
                         Measure T_eff, log g, and search for SB2 / large RV shifts
```

### 1. Odd-Even Transit Depth Test
In an eclipsing binary with orbital period $P_{\text{binary}}$, folding the light curve at $P_{\text{trial}} = P_{\text{binary}} / 2$ alternates between primary and secondary eclipses.
- If the two stars have different effective temperatures ($T_1 \ne T_2$), the surface brightnesses differ ($B_1 \ne B_2$), producing unequal depths:
  $$\delta_{\text{primary}} \propto 1 - \frac{I_2}{I_1}, \quad \delta_{\text{secondary}} \propto 1 - \frac{I_1}{I_2} \implies \delta_{\text{odd}} \ne \delta_{\text{even}}$$
- A statistically significant difference between odd and even transits ($\Delta \delta / \sigma > 3$) definitively rejects the planetary hypothesis.

### 2. Flux-Weighted Centroid Shifts (Astrometric In/Out Test)
During a genuine planetary transit, the host star darkens uniformly, and the center-of-light (photometric centroid) remains fixed at the star's coordinates:

$$\mathbf{x}_{\text{cen}} = \frac{\sum_k I_k \mathbf{x}_k}{\sum_k I_k}$$

If the transit signal is caused by a background eclipsing binary offset by an angular distance $\Delta \mathbf{x}$, the dimming of the background star shifts the net centroid **away** from the contaminant during transit:

$$\Delta \mathbf{x}_{\text{cen}} = \mathbf{x}_{\text{in-transit}} - \mathbf{x}_{\text{out-of-transit}} \ne 0$$

A statistically significant centroid shift during transit localizes the true variable source, identifying false positives even when the contaminant is unresolvable by the broad pixel PSF.

### 3. Multi-Color Photometry
Stellar limb darkening causes small, predictable chromatic differences in transit depth. In contrast, blended eclipsing binaries exhibit large, wavelength-dependent eclipse depths because the component stars have different spectral energy distributions:

$$\delta(\lambda) \approx \delta_{\text{true}}(\lambda) \frac{F_B(\lambda)}{F_A(\lambda) + F_B(\lambda)}$$

If the observed depth in the blue band ($B$) differs substantially from the near-infrared band ($I_c, z'$), the candidate is flagged as an astrophysical blend.

---

## Statistical Validation Frameworks: BLENDER, PASTIS, and TRICERATOPS

For small planets orbiting faint stars ($V > 14$) or Earth-sized planets with sub-meter-per-second reflex velocities, radial velocity confirmation is beyond current telescope capabilities. In these regimes, candidates are **statistically validated**:

```
                         PROBABILISTIC PLANET VALIDATION
 Bayesian Prior: Galactic Stellar Model ──┐
                                          ├─> Evaluate False Positive Probability (FPP):
 Observed Constraints:                   │
 - Transit Shape (Mandel-Agol fit)        │       FPP = sum(P_FP,i) / [ P_planet + sum(P_FP,i) ]
 - High-Res AO Contrast Curves           │
 - In/Out Centroid Limits                │   If FPP < 1% (0.01) ==> PLANET IS VALIDATED
 - Gaia DR3 Contamination Ratios          │
 - Even-Odd Transit Limits                │
```

### 1. Bayesian Architecture
Statistical validation calculates the posterior probability of the planetary hypothesis relative to all possible false positive scenarios (**BLENDER**: Torres et al. 2011; **PASTIS**: Díaz et al. 2014; **VESPA**: Morton 2012, 2016):

$$\text{FPP} = \frac{\sum_k \mathcal{P}(\text{FP}_k \mid \mathbf{D})}{\mathcal{P}(\text{Planet} \mid \mathbf{D}) + \sum_k \mathcal{P}(\text{FP}_k \mid \mathbf{D})}$$

A transit candidate is formally **validated** if:

$$\text{FPP} < 0.01 \quad (1\%)$$

### 2. Validation for TESS: TRICERATOPS
For TESS candidates, **TRICERATOPS** (Tool for Rating Interesting Candidate Exoplanets and Reliability Analysis of Transits Originating from Proximate Stars; Giacalone et al. 2021; applied extensively by **Mantovan, Montalto, Piotto et al. 2022, MNRAS 516, 4432**) incorporates:
- Ground-based speckle / AO imaging limits.
- Precise Gaia DR3 astrometry and multi-band photometry for all stars within the TESS aperture.
- Computes both the overall False Positive Probability ($\text{FPP}$) and the Nearby False Positive Probability ($\text{NFPP}$). Validation requires $\text{FPP} < 0.01$ and $\text{NFPP} < 10^{-3}$.

### 3. The Multiplicity "Validation Boost" (Lissauer et al. 2012, 2014)
In systems exhibiting multiple transiting candidates with mutually consistent, coplanar periods, the probability that two or three independent eclipsing binaries coincidentally blend inside the same tiny sky area is negligible:
- The false positive probability drops by a factor of $\sim 20 - 50$ for two candidates, and $>100$ for three or more.
- This allowed Kepler to validate over **$1,200$ multi-planet systems** simultaneously without requiring individual radial velocity observations.

---

## Cross-Links & Vault Navigation
- Master Map of Content: [[Exoplanetary_Astrophysics_MOC]]
- Previous Lecture: [[16_Transit_Light_Curve_Modeling_and_Limb_Darkening]]
- Next Lecture: [[18_Space_Transit_Surveys_TTVs_and_Resonances]]
- Related Notes: Transit photometry and Mandel-Agol formulation | Exoplanet detection techniques



## Linked References

- [[Transit false positive vetting and blending validation]]
- [[Exoplanetary_Astrophysics_MOC]]


