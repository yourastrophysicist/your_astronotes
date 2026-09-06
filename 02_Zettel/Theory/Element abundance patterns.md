---
layout: default
name: Element abundance patterns
description: alpha/Fe, [C/N], and other element ratios as fingerprints of nucleosynthetic origin and stellar population history
---

# element abundance patterns

individual abundances of elements heavier than hydrogen and helium ("metals") are produced by different nucleosynthetic processes: massive-star core-collapse supernovae, type Ia supernovae, AGB winds, neutron-star mergers, etc. each process has its own characteristic timescale and yield pattern. so the **ratios** of element abundances in a star are diagnostic fingerprints of its formation environment. ratios are usually denoted $[\text{X/Y}] = \log_{10}(N_X/N_Y)_* - \log_{10}(N_X/N_Y)_\odot$ (see [Spectroscopic determination of metallicity](../../02_Zettel/Theory/Spectroscopic determination of metallicity.html)).

## the alpha-element / Fe ratio: $[\alpha/\text{Fe}]$

"alpha elements" have nuclei built from integer numbers of $\alpha$ particles: O, Mg, Si, S, Ca, Ti. they are produced predominantly by **core-collapse supernovae** (type II/Ib/Ic) on short timescales of $\lesssim 30$ Myr after a starburst. iron is produced both by core-collapse and, on much longer timescales ($\gtrsim 1$ Gyr), by **type Ia supernovae**.

the resulting [α/Fe] vs [Fe/H] diagram has a characteristic "knee" structure:

- at very low [Fe/H], only core-collapse SNe have contributed, giving a plateau $[\alpha/\text{Fe}] \approx +0.4$.
- once SNe Ia kick in, Fe production accelerates while $\alpha$ production lags, so [α/Fe] declines toward solar values at higher [Fe/H].
- the knee position (where the decline starts) is a clock for the star formation rate of the population: rapid star formation reaches high [Fe/H] before SNe Ia turn on, so the knee is at high [Fe/H]. slow star formation (dwarf galaxies) has the knee at low [Fe/H].

this is the basis of distinguishing inner-halo, outer-halo, thick-disk, and thin-disk populations of the Milky Way (and accreted dwarfs like Gaia-Enceladus).

## the C and N anticorrelation: [C/N]

CN-cycle hydrogen burning processes carbon into nitrogen. the [C/N] ratio is a sensitive tracer of:

- **first dredge-up** in red giants: convective mixing brings CN-processed material from the core to the surface, lowering [C/Fe] and raising [N/Fe], so [C/N] decreases. the depth of dredge-up depends on stellar mass, so [C/N] of red giants is a **mass indicator** at fixed metallicity, hence (via stellar evolution) an **age indicator**. used heavily in APOGEE for galactic archaeology.
- **multiple populations in globular clusters.** the second-generation (2G) stars typically have C-poor, N-rich abundances ("CNO anticorrelation"), the result of hot hydrogen burning in earlier-generation polluters (massive AGB or fast-rotating massive stars).

## [O/Fe], the Na-O anticorrelation

oxygen is an alpha element produced by core-collapse SNe. in globular clusters, however, the O-Na anticorrelation (O depleted, Na enhanced in 2G stars) is a near-universal signature of multiple populations (Gratton, Carretta, Lardo, Marino), arising from proton-capture nucleosynthesis at $T \sim 70$ MK in the polluter stars.

the [Effects of differential reddening on CMD analysis](../../02_Zettel/Theory/Effects of differential reddening on CMD analysis.html) is unrelated, but the multiple populations show up clearly in optical-IR colours sensitive to OH and water bands.

## n-capture elements (s-process and r-process)

elements heavier than the iron peak come from neutron-capture nucleosynthesis:

- **s-process (slow):** AGB stars at $Z \gtrsim 1$, kilpartrick neutron sources $^{13}$C($\alpha$,n) and $^{22}$Ne($\alpha$,n). produces Sr, Y, Zr, Ba, La, Pb. [Ba/Fe] tracks AGB enrichment.
- **r-process (rapid):** core-collapse SNe (some) and **neutron-star mergers** (kilonova GW170817 confirmation). produces Eu, Gd, Os, Pt, Au, U. [Eu/Fe] tracks rapid n-capture.

ratios like [Ba/Eu] separate s- from r-process contributions and constrain galactic chemical evolution timescales.

## other useful diagnostics

- **[Mn/Fe], [Cr/Fe]:** sensitive to SNe Ia.
- **[Li]:** primordial Li (BBN value $\sim 2.7$ on the 12-scale) survives only in unmixed atmospheres; its depletion traces convective mixing, age, and stellar activity.
- **[Be], [B]:** light elements destroyed at modest depths; tracers of internal mixing and rotation.
- **He:** the second-most abundant element; large variations only seen via narrow He I 5876 Å in hot horizontal branch stars (Marino 2014 in NGC 2808).

## why patterns matter

a single overall [Fe/H] gives one number per star. the pattern of multiple element ratios encodes a **multi-dimensional fingerprint** of nucleosynthetic provenance: which kinds of supernovae enriched the gas, on what timescale, with what initial mass function. this is the foundation of **galactic archaeology**: the present-day distribution of stars in chemodynamic space (positions, velocities, abundances) constrains the assembly history of the Galaxy.

## see also
- [Spectroscopic determination of metallicity](../../02_Zettel/Theory/Spectroscopic determination of metallicity.html)
- [Curve of growth](../../02_Zettel/Theory/Curve of growth.html)
- [Equivalent width](../../02_Zettel/Theory/Equivalent width.html)
- [Atmospheric parameters Teff log g feh vmicro](../../02_Zettel/Theory/interf/Atmospheric parameters Teff log g feh vmicro.html)
- [Local thermodynamic equilibrium LTE](../../02_Zettel/Theory/Local thermodynamic equilibrium LTE.html)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
