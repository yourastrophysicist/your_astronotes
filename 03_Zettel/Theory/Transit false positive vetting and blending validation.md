---
layout: "default"
title: "Transit false positive vetting and blending validation"
---
in wide-field photometric surveys (Kepler, K2, TESS), astrophysical false positives outnumber true planetary transits. confirming exoplanets requires systematic vetting protocols.

## astrophysical false positive topologies

1. **eclipsing binary (EB)**: two stars in an edge-on orbit produce eclipses. if grazing ($b > 1 - k$), the eclipse depth is shallow ($\sim 1\%$), mimicking a giant planet.
2. **blended background eclipsing binary (BEB)**: an unresolved distant EB falls inside the photometric aperture of a bright foreground target. its deep eclipse ($50\%$) is diluted by the target's flux:
   $$\delta_{\text{apparent}} = \frac{\Delta F_{\text{EB}}}{F_{\text{target}} + F_{\text{EB}}} \approx \frac{\Delta F_{\text{EB}}}{F_{\text{target}}} \ll 1$$
   producing transit-like depths of $0.01 - 1\%$.
3. **hierarchical triple systems**: a stellar binary orbiting the target star.
4. **white dwarf or brown dwarf transits**: an object with planetary radius ($R \sim R_\oplus - R_{\text{Jup}}$) but stellar/substellar mass.

## vetting diagnostic tests

- **odd-even depth comparison**: comparing depths of alternating transits. eclipsing binaries with slight temperature differences exhibit secondary eclipses of different depths.
- **in/out centroid pixel shifts**: measuring the flux-weighted center-of-light during transit versus out of transit. a significant pixel shift indicates the eclipse source is offset from the target star (a blended background star).
- **multi-band transit depth consistency**: planetary transits are achromatic (depth is identical across optical filters), whereas blended EBs exhibit chromatic depths due to temperature differences between foreground and background stars.
- **high-resolution speckle / AO imaging**: searching for close stellar companions within $0.1'' - 2''$.

## probabilistic validation frameworks

when RV confirmation is unfeasible (e.g. faint stars), tools like `VESPA`, `PASTIS`, and `TRICERATOPS` compute the Bayesian False Positive Probability (FPP):

$$\text{FPP} = 1 - P(\text{Planet} \mid D) = \frac{\sum P(\text{FP}_i) \mathcal{L}(\text{FP}_i)}{\sum P(\text{FP}_i) \mathcal{L}(\text{FP}_i) + P(\text{Planet}) \mathcal{L}(\text{Planet})}$$

a candidate is statistically validated when $\text{FPP} < 10^{-3}$ ($< 0.1\%$).

## see also

- [[Exoplanetary_Astrophysics_MOC]]
- [[17_Transit_False_Positives_and_Vetting_Protocols]]
- [[Mandel-Agol analytical transit light curve model]]
- [[Space transit observatories and CHEOPS-PLATO missions]]



## Linked References

- [[Mean stellar density determination from transit observables]]
- [[Space transit observatories and CHEOPS-PLATO missions]]
- [[Exoplanetary_Astrophysics_MOC]]


