---
layout: default
title: "CAS galaxy classification"
---

**CAS** is a quantitative galaxy morphology classification scheme based on **concentration**, **asymmetry**, **smoothness**. introduced by **Conselice 2003** (hence "Conselice CAS"). objective + reproducible alternative to visual classification.

## the three parameters

### concentration $C$

how concentrated the light is toward the centre. defined as:
$$C = 5\log_{10}(r_{80}/r_{20})$$
with $r_{80}, r_{20}$ = radii enclosing $80\%, 20\%$ of total flux. high $C$ = centrally concentrated (early-type), low $C$ = diffuse (late-type).

typical:
- early-type (E, S0): $C \sim 4$ to $5$.
- late-type (Sb, Sc): $C \sim 2.5$ to $3$.
- irregular: $C \sim 2$ to $2.5$.

### asymmetry $A$

degree of rotational symmetry. compute:
$$A = \frac{\sum |I(x, y) - I_{180}(x, y)|}{2\sum |I(x, y)|}$$

with $I_{180}$ = image rotated by $180°$. high $A$ = lopsided / merging / disturbed galaxies.

typical:
- relaxed early-types: $A \sim 0.02$.
- spirals: $A \sim 0.1$ to $0.2$.
- mergers / starbursts: $A \sim 0.3$ to $0.5+$.

### smoothness (clumpiness) $S$

degree of small-scale structure. compute residual after smoothing:
$$S = \frac{\sum |I(x, y) - I_S(x, y)|}{\sum |I(x, y)|}$$

with $I_S$ = smoothed (Gaussian) image. high $S$ = clumpy (star-forming, knots), low $S$ = smooth (passive).

typical:
- early-type: $S \sim 0.02$ (very smooth).
- spirals: $S \sim 0.05$ to $0.10$.
- starbursts: $S \sim 0.15+$.

## the CAS plane

plot $C$ vs $A$ vs $S$:
- early-type galaxies cluster at high $C$, low $A$, low $S$ (smooth + concentrated + symmetric).
- late-type spirals at moderate $C$, moderate $A$, moderate $S$.
- mergers + starbursts at high $A$, often high $S$.
- irregular galaxies at low $C$, moderate-to-high $A$ + $S$.

separation in CAS space: roughly tracks Hubble morphology. but it's **automated** and **applicable to high-$z$ galaxies** where visual classification is hard.

## advantages over visual

CAS is:
- **objective**: defined entirely from pixel-level data.
- **reproducible**: same image gives same $C, A, S$.
- **automated**: applicable to surveys of $\sim 10^6$+ galaxies.
- **quantitative**: enables statistics (e.g. fraction of high-$A$ galaxies vs $z$).

## limitations

- **noise dependence**: for faint galaxies, $A$ + $S$ depend on background noise.
- **dust + AGN**: can mimic high $A$ (e.g. dusty bands).
- **resolution dependence**: results change with PSF + pixel scale.
- **interpretation**: $A$ + $S$ don't always map to Hubble type uniquely.

## extensions

modern variants add more parameters:
- **G** (Gini): inequality of pixel brightness distribution.
- **$M_{20}$**: second moment of brightest $20\%$ of pixels.
- **G-$M_{20}$ plane**: better separation of mergers from regular galaxies (Lotz 2004).

with all 5 parameters (C, A, S, G, $M_{20}$), can identify mergers efficiently.

## machine learning

modern deep-learning approaches (CNNs trained on visually-classified samples) outperform CAS for morphological classification, but CAS remains **interpretable** + a useful starting point.

## the science use

CAS-based classifications enable:
- **morphology evolution** with $z$: when did Hubble sequence emerge.
- **merger fraction** vs $z$: tracks galaxy assembly history.
- **environmental dependence**: morphology-density relation.
- **galaxy-cluster cores** dominated by ellipticals (high C, low A, low S).

## see also

- [Hubble morphological sequence](../../02_Zettel/Theory/Hubble morphological sequence.md)
- [Galaxy morphology vs physical properties](../../02_Zettel/Theory/Galaxy morphology vs physical properties.md)
- [Sersic profile](../../02_Zettel/Theory/Sersic profile.md)
- [Petrosian radius](../../02_Zettel/Theory/Petrosian radius.md)
- [Galaxy color, density and morphology](../../02_Zettel/Theory/Galaxy color, density and morphology.md)
- [SDSS overview](../../02_Zettel/Theory/SDSS overview.md)
- [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.md)
