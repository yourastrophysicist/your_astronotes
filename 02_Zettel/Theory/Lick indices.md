---
layout: default
title: "Lick indices"
---

**Lick indices** are narrow-band absorption-line measurements of integrated stellar spectra, designed to break the **age-metallicity degeneracy** in galaxy population analysis. defined by the Lick Observatory group (Worthey 1994, Worthey & Ottaviani 1997).

## the definition

each Lick index measures the equivalent width of a specific absorption feature, with a defined central band and two flanking bandpasses to estimate the local continuum:
$$\mathrm{EW} = \int_{\lambda_1}^{\lambda_2} \left(1 - \frac{F_{\rm obs}(\lambda)}{F_{\rm cont}(\lambda)}\right) d\lambda$$

units: Å (most indices) or magnitudes (a few "molecular" indices like Mg2 and TiO bands).

## the major indices

| index | central wavelength | sensitivity | notes |
|---|---|---|---|
| H$\beta$ ($4862$ Å) | $\sim 4862$ Å | age | strong in young populations |
| Mg2 | $5174$ Å | $[Mg/Fe]$, age | sensitive to $\alpha$ enhancement |
| MgFe | combined | metallicity | hybrid index, less age-sensitive |
| Fe5270 | $5270$ Å | $[Fe/H]$ | iron-only |
| Fe5335 | $5335$ Å | $[Fe/H]$ | iron-only |
| H$\delta_F$ | $4101$ Å | age | A-star indicator, post-burst |
| CN | $4150$ Å | nitrogen abundance | sensitive to AGB enrichment |
| Ca4227 | $4227$ Å | calcium abundance | constrains $\alpha$/Fe |

over **40** indices defined in total. modern use focuses on a handful of orthogonal ones.

## breaking the age-metallicity degeneracy

a tight age-metallicity degeneracy exists in broadband colors: an old metal-poor SSP looks similar to a young metal-rich one. but in **index space**, the two move along different tracks:
- **Balmer indices** (H$\beta$, H$\delta$): primarily age-sensitive.
- **metal indices** (Mg, Fe): primarily metallicity-sensitive.

by combining one of each (e.g. plot H$\beta$ vs MgFe), the two parameters can be inferred almost independently. classic plot: H$\beta$ vs $[Fe/H]$ proxy, with model SSP grid overlaid.

## limitations

- **resolution-dependent**: indices were calibrated at the Lick spectrograph's $\sim 9$ Å resolution. SDSS at $\sim 2$ Å gives different EW values; the indices must be re-calibrated to "Lick resolution" by smoothing.
- **velocity-dispersion broadening**: in high-$\sigma$ galaxies, lines are broadened, weakening EW. corrections needed.
- **emission infill**: H$\beta$ in star-forming galaxies has emission filling absorption, biasing the index. spectral fitting + emission masking required.
- **abundance pattern**: indices depend on individual element ratios, not just $[Fe/H]$. need explicit $\alpha$/Fe modelling at high precision.

## modern alternatives

full-spectrum fitting (pPXF, FIREFLY, MILES) uses entire stellar templates over $\sim 4000$ Å range and recovers age, metallicity, $\alpha$/Fe, and stellar kinematics simultaneously. richer than indices but needs higher SNR data.

still, indices remain useful for low-SNR or low-resolution data where full-spectrum fitting is unstable.

## see also

- [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.html)
- [Age-metallicity degeneracy](../../02_Zettel/Theory/Age-metallicity degeneracy.html)
- [Single stellar population SSP](../../02_Zettel/Theory/Single stellar population SSP.html)
- [SPS code families](../../02_Zettel/Theory/SPS code families.html)
- [Stellar spectra and spectral classification](../../02_Zettel/Theory/Stellar spectra and spectral classification.html)
- [Metallicity and chemical evolution](../../02_Zettel/Theory/Metallicity and chemical evolution.html)
- [SED fitting basics](../../02_Zettel/Theory/SED fitting basics.html)
