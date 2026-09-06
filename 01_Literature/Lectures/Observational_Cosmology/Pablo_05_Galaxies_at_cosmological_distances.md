---
layout: default
title: "Pablo_05_Galaxies_at_cosmological_distances"
---

# Pablo lecture 3 — galaxies at cosmological distances

up: [Observational_Cosmology_MOC](../../../00_Atlas/Observational_Cosmology_MOC.md)
date: 2026-04-15
lecturer: Pablo Pérez-González (visiting)

## the question of the lecture

the previous lectures gave the statistical properties of galaxies (bimodality, luminosity function, stellar mass function, main sequence) and the tools for measuring star formation rates. this one asks: **how do we actually find, identify, and study galaxies at cosmological distances — and what does their evolution look like when we put it all together?**

the lecture has three big movements. first, the observational machinery: surveys (photometric and spectroscopic), selection techniques for galaxies at $z > 0$, photometric redshifts, and the biases each method carries. second, the theoretical framework: hierarchical structure formation in ΛCDM, the cosmic web, merger trees. third, the results: the cosmic star formation history, the assembly of stellar mass, the evolutionary sequence from mergers to dead ellipticals, downsizing, and the epoch of reionization.

## cosmological distance table

before anything else, Pablo puts up a reference table to anchor intuition. for a flat ΛCDM cosmology with $H_0 = 71$ km/s/Mpc, $\Omega_m = 0.27$, $\Omega_\Lambda = 0.73$:

| $z$ | $L_d$ (Mpc) | lookback (Gyr) | DM (mag) | scale (kpc/″) |
|---|---|---|---|---|
| 0.5 | 2838 | 5.0 | 42.27 | 6.10 |
| 1.0 | 6607 | 7.7 | 44.10 | 8.00 |
| 2.0 | 15417 | 10.3 | 45.94 | 8.38 |
| 3.0 | 25682 | 11.5 | 47.05 | 7.77 |
| 5.0 | 47737 | 12.5 | 48.39 | 6.06 |
| 10 | 103154 | 13.2 | 50.07 | 3.25 |

the angular-diameter distance *peaks* around $z \sim 1.5$–$2$, so an arcsecond corresponds to ~8 kpc there. this is why HST can resolve kpc-scale structure in galaxies at $z \sim 2$ but things get harder (smaller angular size per proper kpc) at very high $z$. see 03_Zettel/Theory/Cosmological distances.

## galaxy surveys

### photometric surveys

the idea: image a patch of sky through many filters, detect sources, measure their fluxes. you trade spectral resolution for depth and area.

landmark surveys:
- **HDF** (Hubble Deep Field, Williams 1996): the image that opened the high-$z$ universe. a single WFPC2 pointing, $\sim 5$ arcmin$^2$, reaching $AB \sim 29$ in $U_{300}, B_{450}, V_{606}, I_{814}$. see Hubble Deep Field.
- **HUDF** (Hubble Ultra Deep Field): deeper still, with ACS. the pencil-beam approach at its extreme.
- **Subaru NB816**: narrow-band imaging to pick out Ly$\alpha$ emitters at $z \sim 5.7$.
- **Hubble Frontier Fields**: cluster lensing + parallel deep fields, pushing to the faintest galaxies behind massive clusters.

morphological classification at high $z$: galaxies look increasingly irregular and clumpy at $z > 1$. the Hubble sequence breaks down — you see chain galaxies, clump clusters, tadpoles. visual classification schemes from the local universe don't transfer cleanly.

### spectroscopic surveys

spectra give secure redshifts, line diagnostics, and kinematics — but at enormous observational cost.

- **2dF** (Colless 2001): ~250,000 galaxies, low $z$, established the local galaxy LF and large-scale structure.
- **SDSS** (Sloan Digital Sky Survey): the modern reference for the local universe.
- **VVDS** (Le Fèvre 2005): magnitude-selected ($I < 24$), ~11,000 spectra, $z \lesssim 5$.
- **zCOSMOS** (Lilly 2007): $I < 22.5$, ~28,000 spectra in the COSMOS field, $0.1 < z < 1.2$ (bright sample), plus a deep sample at $1.5 < z < 3$ targeting colour-selected galaxies.
- **Steidel et al. 1999, 2004**: spectroscopic confirmation of LBG samples at $z \sim 3$–$4$, including composite rest-UV spectra showing interstellar absorption lines and Ly$\alpha$.
- **Cimatti et al. 2008**: spectroscopic confirmation of dead galaxies at $z \sim 1.5$–$2$, showing old stellar populations with no emission lines.
- **Brusa et al. 2009**: X-ray-selected AGN with spectroscopic follow-up.

see Galaxy spectroscopic surveys.

## selection of galaxies at $z > 0$

the central problem: as redshift increases, the same filter samples a different rest-frame wavelength. Padmanabhan 2007 shows this beautifully — what you call an "$R$-band galaxy" at $z = 0$ becomes a rest-UV-selected object at $z = 1$. every selection is a *rest-frame wavelength* selection, whether you intend it or not. see Redshift effect on photometry.

### the zoo of selection techniques

#### Lyman break galaxies (LBGs) — the dropout technique

the workhorse of high-$z$ galaxy finding. a star-forming galaxy has strong UV continuum, but neutral hydrogen in the ISM and IGM absorbs essentially all flux below the Lyman limit (912 Å) and much of it below Ly$\alpha$ (1216 Å). at high $z$, this break redshifts into observable optical filters.

- at $z \sim 3$: the break falls in $U$, so the galaxy "drops out" of $U$ ($U$-dropout / $U_n$-$G$ vs $G$-$\mathcal{R}$ colour–colour diagram, Steidel et al. 1995, 1996)
- at $z \sim 4$: $B$-dropout
- at $z \sim 5$: $V$-dropout
- at $z \sim 6$: $i$-dropout
- at $z \sim 7$: $z_{850}$-dropout (Bouwens et al. 2010, Labbé et al. 2006, 2010)

the colour–colour selection defines regions BM, BX, LBG (Steidel et al. 2004) that correspond to $z \sim 1.5$, $z \sim 2$, and $z \sim 3$ respectively.

**bias**: LBGs are UV-bright, so this selects *star-forming* galaxies. it misses red, dusty, or passively evolving galaxies at the same redshift. see Lyman break galaxy selection.

#### distant red galaxies (DRGs)

$J - K > 1.3$ (Vega) selects galaxies at $z > 2$ with red rest-optical colours — these can be either dusty star-forming or old and passive. Brammer et al. 2007 showed the population is a mix. see DRG selection.

#### BzK diagram

Daddi et al. 2004 defined a two-colour criterion using $B$, $z$, and $K$:
- **sBzK** (star-forming BzK): $BzK \equiv (z-K) - (B-z) > -0.2$
- **pBzK** (passive BzK): $BzK < -0.2$ and $(z-K) > 2.5$

this cleanly separates star-forming from passive galaxies at $1.4 < z < 2.5$. the beauty is that it uses only three bands. see BzK galaxy selection.

#### narrow-band Ly$\alpha$ emitters (LAEs)

use a narrow-band filter tuned to Ly$\alpha$ at a specific redshift, then compare to a broadband image. objects with excess narrow-band flux are LAE candidates. Hu et al. 2004 at $z \sim 5.7$, Murayama et al. 2007, spectroscopic confirmation by Rhoads et al. 2003. see Lyman alpha emitter selection.

#### sub-mm galaxies (SMGs)

the **negative K-correction** is the key insight (Blain et al. 2002): the dust SED peaks at $\sim 100$ μm rest-frame. as you push to higher $z$, the peak redshifts into the sub-mm band, *compensating* for the cosmological dimming. a galaxy at $z = 1$ and $z = 5$ have nearly the same observed 850 μm flux if they have the same $L_{\text{IR}}$.

SCUBA observations (Hughes et al. 1998) revealed a population of luminous dusty galaxies invisible in the optical. Chapman et al. 2003, 2005 obtained radio-identified spectroscopic redshifts showing $z \sim 2$–$3$. morphologies are often disturbed/merging. see Sub-mm galaxy selection.

#### damped Ly$\alpha$ absorbers (DLAs)

not selected as emitting sources at all — detected as absorption features in QSO spectra. column densities $N_{\text{HI}} > 2 \times 10^{20}$ cm$^{-2}$, tracing neutral gas reservoirs (the raw material for star formation). Lu et al. 1996. see Damped Lyman alpha absorbers.

#### gravitational lensing

galaxy clusters act as cosmic telescopes, magnifying background galaxies. Kneib et al. 2004 identified a $z \sim 7$ galaxy behind Abell 2218. Egami et al. 2005 fitted the SED of lensed high-$z$ galaxies with Spitzer photometry. see Gravitational lensing galaxy selection.

#### GRBs as galaxy tracers

gamma-ray bursts are isotropic on the sky (BATSE), occur in star-forming galaxies, and their afterglows allow redshift measurement. the fireball model: relativistic outflow → forward/reverse shocks → multi-wavelength afterglow. the host galaxy is then studied in deep imaging. this is an SFR-weighted selection — GRBs trace massive star death. see GRB host galaxies.

#### X-ray selection

deep Chandra surveys (CDF-S, 4 Ms) detect AGN to high $z$. but some X-ray sources have no optical emission lines — **XBONGs** (X-ray bright, optically normal galaxies, Civano et al. 2007). combining X-ray, optical, and IR data is essential. see X-ray galaxy selection.

#### power-law galaxies (PLGs)

IRAC-selected: galaxies whose 3.6–8.0 μm SED is a power law, indicating AGN-heated dust. Alonso-Herrero et al. 2006, Donley et al. see Power-law galaxy selection.

### the zoo, summarised

different techniques select *overlapping but distinct* populations: LBGs, DRGs, PEGs, UVLGs, GRBHs, LAEs, EROs, BM/BX, XBONGs, SMGs, PLGs, DOGs, BzKs. the lesson is that **no single selection gives you the full galaxy population at any redshift**. each window reveals a different piece.

## photometric redshifts

when spectra are too expensive for millions of galaxies, broadband photometry across many filters can estimate redshift by fitting spectral energy distribution templates.

the key spectral features that anchor photo-$z$:
- **Lyman break** at 912 Å (dominant at $z > 2.5$)
- **Balmer break** at 3646 Å / D4000 (dominant at $z \sim 0.5$–$1.5$)
- **1.6 μm stellar bump** (minimum in H$^-$ opacity in cool stellar atmospheres, dominant at $z > 1.5$ with Spitzer/IRAC data)

template libraries: Chary & Elbaz 2001 (CE01), Dale & Helou 2002 (DH02), Rieke et al. 2009 (R09) for the IR; Bruzual & Charlot, Coleman-Wu-Weedman, Polletta for the UV-optical. Pablo's own **Rainbow** tool does SED fitting from UV to FIR.

accuracy: Ilbert et al. 2006 found $\sigma_{\text{NMAD}} = 0.035$ in COSMOS. Barro & Pérez-González 2011 showed that adding Spitzer/IRAC data reduces the outlier fraction from 5% to 3% and gives $\sigma_{\text{NMAD}} = 0.036$ — the 1.6 μm bump is the anchor at $1 < z < 3$.

see [Photometric redshifts](../../../02_Zettel/Theory/Photometric redshifts.md).

## selection biases

Pablo stresses these repeatedly:

- **flux-limited surveys** miss faint (low-mass, low-SFR) galaxies at high $z$ (Pérez-González 2005: $L_{\text{TIR}}$ vs $z$ shows the detection floor rising with distance)
- **rest-frame wavelength bias**: LBGs select UV-bright (blue, star-forming), DRGs select red (dusty or old), BzK splits them. Grazian et al. 2007 showed the SED shapes of these populations are genuinely different.
- **redshift distribution bias**: the $N(z)$ of a survey depends on the detection band (Pérez-González 2008 — different fields and bands give different $N(z)$ peaks)
- **mass/luminosity bias**: massive galaxies dominate different wavelengths at different epochs (Roncarelli et al. 2010)

see Selection biases in galaxy surveys.

## the ΛCDM paradigm — hierarchical structure formation

### cosmic background radiation

the CMB from WMAP (2006): $\langle T \rangle = 2.73$ K, $\Delta T / T \sim 10^{-5}$, giving $H_0 = 73.2 \pm 3.2$ km/s/Mpc, $\Omega_m = 0.241 \pm 0.034$, $\Omega_\Lambda = 0.759 \pm 0.034$, age $= 13.7$ Gyr. the CMB power spectrum (Dunkley et al. 2009, Spergel et al. 2004, 2006) encodes the initial conditions for structure formation.

the three cosmic backgrounds (Dole et al. 2006): **COB** (cosmic optical background, 24 nW m$^{-2}$ sr$^{-1}$), **CIB** (cosmic infrared background, 24 nW m$^{-2}$ sr$^{-1}$), **CMB** (960 nW m$^{-2}$ sr$^{-1}$). the COB and CIB are *equal* — this means roughly half of all starlight ever emitted was absorbed and re-emitted by dust. Lagache et al. 2006 measured this 50/50 split. see Cosmic backgrounds.

### classical vs hierarchical formation

Ellis et al. 2000 contrasted two paradigms:

1. **classical (monolithic collapse)**: gas clouds merge early → monolithic collapse, cooling, star formation → feedback removes remaining gas → spheroidal galaxy. spirals form at the margins. this predicts old, massive ellipticals formed in a single burst at high $z$.

2. **hierarchical (ΛCDM)**: gas lives in merging dark matter halos → slow collapse governed by feedback → early disk systems form first → later merging produces spheroidals. the merger tree: small halos at high $z$ merge into progressively larger ones. **disks grow between mergers; halos and bulges grow during mergers.**

the modern consensus is hierarchical, supported by:
- the **Millennium Simulation** (Springel et al. 2005): 10 billion particles in a $\sim 1$ Gpc/$h$ box, reproducing the cosmic web (filaments, voids, nodes) from $z = 20$ to $z = 0$
- merger trees from N-body simulations (Tweed et al. 2009) showing how halo mass builds up through many minor and a few major mergers
- the CMB power spectrum as initial conditions
- large-scale structure surveys (2dF, VIPERS) matching the predicted cosmic web

see Hierarchical structure formation, Millennium simulation.

### merger fraction evolution

observations show the merger fraction increases with redshift:
- van Dokkum et al. 1999, Le Fèvre et al. 2000, Conselice et al. 2003, Bell et al. 2006, Lotz et al. 2008, López-Sanjuan et al.
- the Spiderweb Galaxy (MRC 1138-262, Miley et al. 2006): a massive proto-cluster at $z \sim 2$ caught in the act of assembly — dozens of smaller galaxies merging into one.

see Galaxy merger fraction evolution.

## galaxy evolution — the big picture

### the cosmic star formation rate density (the Madau–Lilly plot)

the most famous diagram in observational cosmology. $\rho_{\text{SFR}}(z)$ in $M_\odot$ yr$^{-1}$ Mpc$^{-3}$:

- first measurements: Gallego et al. 1995 (H$\alpha$, local), Lilly et al. 1996 (UV), Madau et al. 1995 (HDF dropouts)
- the SFR density rises steeply from $z = 0$ to a broad peak at $z \sim 1$–$3$ ("cosmic noon"), then declines toward higher $z$
- Pérez-González et al. 2005 measured the IR luminosity density with Spitzer/MIPS, confirming the IR-based cosmic SFR agrees with the UV+dust-corrected values
- Hopkins & Beacom 2006 compiled all tracers into a unified cosmic SFH: $\rho_{\text{SFR}}$ peaks at $z \sim 1$–$2$ at roughly $0.15$ $M_\odot$ yr$^{-1}$ Mpc$^{-3}$

the IR vs UV SFR density (Tresse et al. 2007): at $z \sim 0$, the UV attenuation is $A(\text{UV}) \sim 1$ mag; at $z > 1$ it rises to $\sim 2$ mag. the IR traces *more* of the total SFR than the UV at all epochs, and the discrepancy grows toward the peak.

see [Cosmic star formation history](../../../02_Zettel/Theory/Cosmic star formation history.md), Madau-Lilly plot.

### the IR luminosity density

Pérez-González et al. 2005 and Le Floc'h et al. 2005: the contribution of LIRGs and ULIRGs to the total IR luminosity density *increases* with redshift. at $z > 1$, LIRGs dominate the cosmic SFR budget. Reddy et al. 2007 confirmed this with independent UV-selected samples.

SMGs contribute significantly at $z \sim 2$–$3$ (Hopkins & Beacom 2006, Pérez-González et al. 2005, 2008). see IR luminosity density evolution.

### downsizing

Cowie et al. 1996 first noticed this from [OII] equivalent widths vs rest-frame $K$-band magnitude at different redshifts: **the most massive galaxies form their stars first and shut down earliest**. at $z = 0$–$0.2$, the most luminous (massive) galaxies have low [OII] EW (little SF), while at $z > 0.6$ even the most luminous galaxies are still forming stars.

this is "anti-hierarchical" in the sense that in a naïve hierarchical model, massive galaxies should assemble *last* (they need more mergers). the resolution involves feedback — AGN feedback in massive halos quenches star formation early. see Downsizing.

### stellar mass assembly

Pérez-González et al. 2008a produced the definitive plot: the fraction of today's stellar mass density already in place as a function of lookback time, binned by galaxy mass. the result:

- galaxies with $M_* > 10^{12}$ $M_\odot$ had assembled $\sim 50\%$ of their mass by $z \sim 3$ (lookback $\sim 11$ Gyr)
- galaxies with $M_* \sim 10^{10}$ $M_\odot$ reached $50\%$ only by $z \sim 1$ (lookback $\sim 8$ Gyr)
- the lowest-mass galaxies ($M_* \sim 10^{9}$ $M_\odot$) are still assembling today

this is downsizing measured directly in stellar mass, not just SFR. see Stellar mass assembly history.

### stellar mass function evolution

Marchesini et al. 2009: the galaxy stellar mass function evolves strongly at the low-mass end but the high-mass end is already in place by $z \sim 2$. at $z > 2$, models (WDL08, MO7, S08) disagree significantly with observations at the massive end — **too many massive galaxies observed compared to predictions**. see Stellar mass function evolution.

### the SFH depends on environment and mass

Thomas et al. 2005: in high-density environments, massive galaxies ($\log M_*/M_\odot \sim 12$) formed all their stars in a short burst at $z \sim 3$–$5$. in low-density environments, the same mass galaxies formed over a longer period, and lower-mass galaxies formed even later and more gradually. the SFH is a function of *both* mass and environment. see Star formation history and environment.

### red and dead galaxies at high $z$

observational confirmation:
- Yan et al. 2000, Franx et al. 2003, Daddi et al. 2004: imaging of red galaxies at $z > 1.5$
- Daddi et al. 2005: spectroscopic confirmation — rest-UV spectra of passive galaxies at $z \sim 1.4$–$2.5$ showing strong absorption features and no emission lines
- these galaxies are already massive ($M_* > 10^{11}$ $M_\odot$) and old, challenging pure hierarchical models

see Passive galaxies at high redshift.

### size evolution

Trujillo et al. 2007: at fixed stellar mass, galaxies at $z \sim 1.5$–$2$ are significantly *smaller* (factor of $\sim 3$–$5$ in effective radius) than their local counterparts. massive galaxies at $z \sim 2$ are extremely compact. they must grow in size by $z = 0$, likely through dry (gas-poor) minor mergers that add mass to the outskirts. see Galaxy size evolution.

### the evolutionary sequence: from disk to dead elliptical

Hopkins et al. 2008 (also Sanders et al. 1988) laid out the merger-driven sequence:

1. **(a) isolated disk** — halo and disk grow, most stars formed, secular evolution builds bars and pseudobulges, Seyfert-level AGN
2. **(b) small group** — halo accretes similar-mass companions, dynamical friction merges subhalos
3. **(c) interaction / merger** — galaxies interact, lose angular momentum, SFR rises, stellar winds dominate feedback
4. **(d) coalescence / (U)LIRG** — galaxies coalesce, violent relaxation, gas inflows to centre, buried starburst + X-ray AGN, starburst dominates luminosity
5. **(e) blowout** — BH grows rapidly, dominates luminosity, remaining dust/gas expelled, reddened QSO, high Eddington ratios, merger signatures still visible
6. **(f) quasar** — dust removed, "traditional" QSO, host morphology hard to observe, tidal features fading, characteristically blue/young spheroid
7. **(g) decay / K+A** — QSO luminosity fades rapidly, tidal features visible only in deep imaging, remnant reddens rapidly (E+A / K+A spectrum), "hot halo" from feedback, quasi-static cooling
8. **(h) dead elliptical** — star formation terminated, large BH/spheroid, efficient AGN feedback, halo grows to group scale, further growth by dry mergers only

see Merger-driven evolutionary sequence.

### blue cloud → red sequence

Faber et al. 2007: the colour-magnitude diagram shows two tracks. galaxies can migrate from the blue cloud to the red sequence via early quenching + dry merging. AGN sit preferentially in the **green valley** (Sánchez et al. 2004, Nandra et al. 2007) — the transition zone between star-forming and passive. see Blue cloud and red sequence, Green valley AGN.

### AGN feedback and the luminosity function

Croton et al. 2006: without AGN feedback, the predicted K-band luminosity function (from the Millennium Simulation + semi-analytic models) massively overproduces bright galaxies. **AGN feedback is required to suppress star formation in massive halos and reproduce the observed exponential cutoff** at the bright end. see AGN feedback.

### AGN evolution

Hasinger et al. 2006: the X-ray luminosity function of AGN evolves in a pattern called **luminosity-dependent density evolution (LDDE)**: the most luminous AGN peak earliest (at $z \sim 2$–$3$), while lower-luminosity AGN peak later (at $z \sim 0.5$–$1$). this is AGN downsizing — the same pattern seen in galaxies. the connection between AGN activity and star formation is not coincidence; it is causal. see AGN luminosity function evolution.

## the epoch of reionization ($z > 5$)

the frontier of the lecture. after recombination ($z \sim 1100$), the universe is neutral and opaque to UV — the Dark Ages. at some point ($z \sim 6$–$15$?), the first stars and galaxies reionize the IGM.

observational probes:
- **$z_{850}$-dropouts** ($z \sim 7$): Labbé et al. 2006, 2010; Bouwens et al. 2010; Bunker et al. 2010; Finkelstein et al. 2010; Oesch et al. 2010. these are extremely faint ($AB \sim 27$–$29$) with blue UV slopes ($\beta \sim -2.5$ to $-3$), low metallicity, and stellar masses $\log M_*/M_\odot \sim 9$–$10$. surveys: SEDS, CANDELS, SHARDS.
- **Ly$\alpha$ emitter fraction vs $z$** (Rhoads et al. 2003): the neutral fraction of the IGM should suppress Ly$\alpha$ emission. constraints from Fan et al. and Hu et al. suggest the universe is mostly ionized by $z \sim 6$ but with increasing neutral fraction beyond that.

the question "when did reionization complete?" remains open. see Epoch of reionization.

## what the student should take away

- there is no single method that finds all galaxies at $z > 0$: each selection (LBG, DRG, BzK, LAE, SMG, X-ray, GRB) opens a window onto a different subset of the population, and every window carries biases in redshift, colour, mass, and luminosity
- photometric redshifts work because of three spectral features (Lyman break, Balmer break, 1.6 μm bump), and adding MIR data from Spitzer/IRAC dramatically reduces catastrophic outliers
- the ΛCDM hierarchical paradigm predicts structure grows bottom-up (small halos merge into big ones), and the Millennium Simulation reproduces the observed cosmic web — but the *star formation* in those halos is top-down (downsizing), which requires AGN feedback to explain
- the cosmic SFR density peaks at $z \sim 1$–$3$ (cosmic noon), half of all starlight is reprocessed by dust (COB = CIB), and the IR luminosity density is dominated by LIRGs at $z > 1$
- massive galaxies assembled their stellar mass earliest (Pérez-González 2008a), were already compact and dead by $z \sim 2$ (Daddi 2005, Trujillo 2007), and grew in size through dry mergers — this is the downsizing problem
- the merger-driven evolutionary sequence (Hopkins 2008) connects isolated disks → mergers → ULIRGs → quasars → dead ellipticals, with AGN feedback as the mechanism that terminates star formation and moves galaxies from the blue cloud to the red sequence
- beyond $z \sim 6$, we are probing the epoch of reionization with dropout galaxies at $z \sim 7$–$10$, and the frontier is measuring when the IGM became fully ionized

## connections

- previous lectures: [Pablo_03_Star_formation_in_galaxies](../../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.md), [Pablo_04_Nuclear_activity_in_galaxies](../../../01_Literature/Lectures/Observational_Cosmology/Pablo_04_Nuclear_activity_in_galaxies.md)
- the SFR tracers used to build the Madau plot come from: [SFR tracer comparison](../../../02_Zettel/Theory/SFR tracer comparison.md)
- galaxy populations live on: [Galaxy main sequence of star formation](../../../02_Zettel/Theory/Galaxy main sequence of star formation.md)
- bimodality: [Pablo_02_Statistical_properties_of_galaxies](../../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md)
- AGN feedback and co-evolution: AGN-galaxy co-evolution
- cosmic SFR history: [Cosmic star formation history](../../../02_Zettel/Theory/Cosmic star formation history.md)
- MOC: [Observational_Cosmology_MOC](../../../00_Atlas/Observational_Cosmology_MOC.md)

## key references

- Steidel et al. 1996, 1999, 2004 (LBG selection and spectroscopy)
- Daddi et al. 2004 (BzK diagram), Daddi et al. 2005 (passive galaxies at $z \sim 2$)
- Blain et al. 2002 (negative K-correction and SMGs)
- Chapman et al. 2003, 2005 (SMG spectroscopic redshifts)
- Madau et al. 1995, Lilly et al. 1996 (first cosmic SFR measurements)
- Hopkins & Beacom 2006 (compiled cosmic SFH)
- Pérez-González et al. 2005, 2008 (IR luminosity density, stellar mass assembly)
- Marchesini et al. 2009 (stellar mass function evolution)
- Cowie et al. 1996 (downsizing)
- Thomas et al. 2005 (SFH vs mass and environment)
- Trujillo et al. 2007 (size evolution)
- Hopkins et al. 2008 (merger-driven evolutionary sequence)
- Faber et al. 2007 (blue cloud to red sequence)
- Croton et al. 2006 (AGN feedback and LF)
- Hasinger et al. 2006 (AGN LDDE)
- Springel et al. 2005 (Millennium Simulation)
- Bouwens et al. 2010, Labbé et al. 2010 (z~7 galaxies)
- Dole et al. 2006, Lagache et al. 2006 (cosmic backgrounds)
