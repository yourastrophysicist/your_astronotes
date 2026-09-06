---
layout: default
title: "Age estimation in unresolved populations"
---

when individual stars cannot be resolved, the age of a galaxy's stellar population must be inferred from integrated SED features. unlike resolved CMDs (where the turnoff gives a clean age), integrated-light age estimates are **statistical**: they yield "the age of the population dominating the light," not a unique formation time.

## why "age of the population dominating the light"

a galaxy with a long SFH contains stars of many ages. its integrated light at any wavelength is dominated by the *most luminous* stars currently alive, typically those in some specific age range:
- UV-bright bands: $\sim 100$ Myr-old hot MS stars.
- optical: complex mix.
- NIR: $\sim 1$ to $10$ Gyr old red giants.

so a single "age" cannot describe the population without specifying which timescale you mean. modern fits report **mass-weighted age** $\bar{\tau}_M$ and **luminosity-weighted age** $\bar{\tau}_L$ separately.

## the age-sensitive features

### Balmer break / $4000$ Å break

the discontinuity at $\sim 4000$ Å due to ionised metals (CaII H+K, Fe-blends) absorbing in the atmospheres of cool stars. weak in young populations (no cool stars yet), strong in old populations.

quantified by $D_n4000 \equiv \int_{4000-4100}/\int_{3850-3950}$. typical values:
- young SF galaxy: $D_n4000 \approx 1.0$ to $1.3$.
- intermediate-age post-burst: $1.3$ to $1.6$.
- old quenched galaxy: $1.7$ to $2.2$.

### H$\delta_F$ and H$\beta$ Balmer absorption

post-burst populations dominated by A stars have very strong Balmer absorption. Worthey & Ottaviani 1997 H$\delta_F$ index. distinguishes "post-starburst" galaxies from older quenched.

### UV slope $\beta$

slope of the UV continuum, $f_\lambda \propto \lambda^\beta$. blue $\beta \approx -2$ for young dust-free populations, redder for older or dustier. used as crude age proxy at high $z$.

### specific SFR

ratio of recent SFR to total stellar mass:
$$\mathrm{sSFR} = \mathrm{SFR}/M_*$$
inverse of the doubling time. high sSFR = young, active galaxy; low sSFR = old, quiescent. boundary $\sim 10^{-11}$ yr$^{-1}$ separates star-forming from quenched in the local universe.

## the central degeneracy

age-metallicity degeneracy in broadband colors: see [Age-metallicity degeneracy](../../02_Zettel/Theory/Age-metallicity degeneracy.md). older + metal-poor mimics younger + metal-rich. need either:
- **Lick indices** (orthogonal age vs metal sensitivities).
- **NIR + optical** combination.
- **spectroscopy** (full-spectrum fitting like pPXF).

without breaking the degeneracy, single-age estimates from broadband data are uncertain by $\sim 0.5$ dex.

## what realistic SED fits return

Bayesian fits (Prospector, BAGPIPES) give:
- **mass-weighted age** $\bar{\tau}_M$: when most of the existing mass formed.
- **light-weighted age** $\bar{\tau}_L$: dominated by the most luminous stars, biased young.
- **time of half-mass formation** $t_{50}$: when 50% of $M_*$ was already in place. this is a more robust quantity than a single age.

typical posterior precisions: $\sim 0.2$ to $0.5$ dex on $\bar{\tau}_M$.

## quenching and downsizing

a galaxy "quenches" when its sSFR drops below a threshold and it stops adding mass. ages of quenched galaxies show **downsizing**: the most massive galaxies have the **oldest stellar populations** (because they formed and quenched first). this is the inverse of the "hierarchical buildup" prediction of pure dark-matter $\Lambda$CDM and reflects astrophysical feedback.

## see also

- [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.md)
- [Single stellar population SSP](../../02_Zettel/Theory/Single stellar population SSP.md)
- [SED fitting basics](../../02_Zettel/Theory/SED fitting basics.md)
- [Lick indices](../../02_Zettel/Theory/Lick indices.md)
- [Age-metallicity degeneracy](../../02_Zettel/Theory/Age-metallicity degeneracy.md)
- [Stellar mass estimation in unresolved populations](../../02_Zettel/Theory/Stellar mass estimation in unresolved populations.md)
- [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.md)
- [Star formation history of a population](../../02_Zettel/Theory/Star formation history of a population.md)
- [Stellar populations I II III](../../02_Zettel/Theory/Stellar populations I II III.md)
- [Cluster ages from CMD turnoff](../../02_Zettel/Theory/Cluster ages from CMD turnoff.md)
