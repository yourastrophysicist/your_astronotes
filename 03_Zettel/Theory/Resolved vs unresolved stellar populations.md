---
layout: "default"
title: "Resolved vs unresolved stellar populations"
---
the whole logic of a stellar astrophysics course built around [[Color-magnitude diagrams of clusters]] starts from a single observational dichotomy: can we, or can we not, separate the light of one star from the light of its neighbours on the detector. that question splits stellar populations into two regimes that demand entirely different machinery.

a population is **resolved** when individual stars are detected as distinct sources, so that for each star we can measure (in principle) its apparent magnitude in multiple bands, its position on the sky, sometimes its proper motion, sometimes a radial velocity $v_r$, and, with high resolution spectroscopy, its surface chemical abundances. the practical threshold is set by crowding: the stellar surface density must be low enough, or the instrumental [[Point Spread Function (PSF)]] sharp enough, that the typical separation between stars exceeds a few PSF widths. galactic open clusters in the solar neighbourhood are easily resolved from the ground; galactic [[Globular Clusters]] are resolved in the outskirts but become severely crowded in the cores, where HST and JWST imaging or [[Adaptive optics|adaptive optics]] are needed; clusters in the LMC/SMC and in M31 require space resolution; clusters at $z \gtrsim 0.5$ are unresolvable as individual stars even with JWST.

a population is **unresolved** when the detector measures only the integrated flux of many superposed stars: there is no per-star photometry, only an integrated [[SED]] and, at best, an integrated spectrum. all information must be extracted from the *shape* of that combined light, which is a luminosity-weighted convolution of the underlying stellar population.

the inferential consequences are dramatic. for a resolved cluster, the [[HR diagram]] (or its observational counterpart, the CMD) is built directly from the data: each star is a dot, the morphology of the dot cloud carries the age, metallicity, distance, reddening and helium content. age is read off the main sequence turn-off, metallicity from the red giant branch colour and slope, distance from horizontal-branch luminosity or [[TRGB tip of the red giant branch]], reddening from the slope of the foreground extinction vector. these are *direct, geometric* measurements on a diagram.

for an unresolved population none of this is accessible. one must instead build [[Single stellar population SSP]] synthesis models: pick an age, a metallicity, an [[Initial mass function]], evolve a grid of isochrones through stellar evolution codes, attach a stellar-atmosphere library to translate $T_\mathrm{eff}, \log g, [\mathrm{Fe}/\mathrm{H}]$ into spectra, integrate over the IMF, and compare the predicted integrated SED or spectrum to the data. the workhorse codes are BC03 (Bruzual & Charlot 2003), Maraston, FSPS, GALEV. the procedure is powerful but suffers from severe degeneracies, most notably the [[Age-metallicity degeneracy]]: an old metal-poor SSP and a younger metal-rich SSP have nearly identical optical colours (the famous $\Delta \log t / \Delta \log Z \approx -3/2$ rule of Worthey 1994).

the milone-style course is rigorously about the resolved regime. every CMD feature we will read (MS, subgiant branch, RGB, horizontal branch, asymptotic giant branch, white dwarf cooling sequence) is a tool that exists only because we have per-star photometry. the unresolved machinery sits in the background as the *limit* of what one would do for the same population observed in M87 or in a $z=2$ galaxy, where SSPs are the only option (see [[Age estimation in unresolved populations]]).

a useful mental rule: resolved photometry gives you a **distribution** in the colour-magnitude plane and you read morphology; integrated photometry gives you a **single point** in colour-colour space and you fit a model. the information content differs by orders of magnitude, which is exactly why nearby clusters are the laboratories where stellar evolution theory is calibrated before being deployed elsewhere.

## see also
- [[Stellar_Astrophysics_MOC]]
- [[Single stellar population SSP]]
- [[Color-magnitude diagrams of clusters]]
- [[HR diagram]]
- [[Age-metallicity degeneracy]]



## Linked References

- [[Extragalactic star clusters]]
- [[M-dwarf discontinuity and convective merging instability]]
- [[The Galactic Bulge]]
- [[Stellar_Astrophysics_MOC]]


