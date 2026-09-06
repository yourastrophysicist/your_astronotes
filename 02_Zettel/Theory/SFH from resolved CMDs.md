---
layout: default
title: "SFH from resolved CMDs"
---

# SFH from resolved CMDs

up: [Pablo_03_Star_formation_in_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html)

## the idea

if i can resolve individual stars in a galaxy, then each star on a colour-magnitude diagram (CMD) is a clock: its position encodes its mass, age, and metallicity via stellar-evolution isochrones. fitting the *distribution* of stars on the CMD to a weighted superposition of single-age populations recovers the star formation history $\psi(t)$.

this is the most direct and least model-dependent way to measure a galaxy's SFH. but it requires resolving individual stars, which limits the technique to the Local Group and its vicinity (distance modulus $\lesssim 27$, so $\lesssim 3$ Mpc for HST main-sequence turnoffs).

## the CMD features that matter

- **main-sequence turnoff**: where stars leave the MS, sensitive to age via the mass of the turnoff star. $M_{\text{TO}}(t) \propto t^{-0.4}$. this is the primary age diagnostic
- **subgiant branch**: short-lived, sharp in the CMD; anchors intermediate ages
- **red clump / horizontal branch**: sensitive to both age and metallicity, useful for distinguishing old populations
- **AGB**: intermediate-age stars ($\sim 1$–$3$ Gyr) dominate here. strong in starbursts with recent SF
- **RGB tip**: standard distance indicator ($M_I = -4.05$), essentially mass-independent

## the Pablo examples

- **Ferguson 2002** shows M31 CMD regions: Blue RGB, Red RGB, AGB, foreground. delineating these by colour-magnitude cuts lets you separate old from intermediate populations
- **Tolstoy et al. 2009** review: uses simulated CMDs with age tagging (blue $< 0.1$ Gyr, green $0.1$–$1$ Gyr, black $1$–$3$ Gyr, red $> 3$ Gyr) to show how each age component populates different CMD regions
- **Harris & Zaritsky 2004** reconstruct the SMC SFH spatially across the whole galaxy: the map shows recent ($< 0.1$ Gyr) SF concentrated in the central bar, older SF more smoothly distributed. gives $\psi(t, \vec{r})$, not just $\psi(t)$

## method: synthetic CMD fitting

1. build synthetic CMDs from SSPs across a fine grid of age and metallicity
2. weight them by an assumed $\psi(t)$ and $Z(t)$
3. convolve with observational errors, completeness, and extinction
4. minimize $\chi^2$ against the observed Hess diagram

codes: MATCH (Dolphin), StarFISH, IAC-POP.

## limits

- **distance**: HST reaches old MS turnoffs only within $\sim 1$ Mpc. for M31 at 780 kpc, marginal. beyond the Local Group, only the AGB and RGB are accessible, losing age resolution
- **crowding**: in galaxy centres, blending wrecks photometry. periphery regions work better
- **age-metallicity degeneracy**: reducing it requires deep photometry through the MS turnoff

the technique is extremely powerful for the Local Group (LMC/SMC, M31, dSphs) but cannot be applied to the bulk of the cosmic galaxy population. for that, see [SED fitting for SFH](../../02_Zettel/Theory/SED fitting for SFH.html).

## connections

- complementary method: [SED fitting for SFH](../../02_Zettel/Theory/SED fitting for SFH.html)
- enters population synthesis: [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.html)
- parametric priors for SED fits: [Star formation history parametrizations](../../02_Zettel/Theory/Star formation history parametrizations.html)

## key references

- Ferguson et al. 2002 AJ 124, 1452
- Tolstoy, Hill, Tosi 2009 ARAA
- Harris & Zaritsky 2004 AJ 127, 1531
- Dolphin 2002 (MATCH algorithm)
