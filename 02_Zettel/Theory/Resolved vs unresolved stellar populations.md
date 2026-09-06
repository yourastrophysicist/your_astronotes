---
layout: default
name: Resolved vs unresolved stellar populations
description: distinction between counting individual stars and modelling integrated light, and why CMD work needs resolved targets
---

the whole logic of a stellar astrophysics course built around [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html) starts from a single observational dichotomy: can we, or can we not, separate the light of one star from the light of its neighbours on the detector. that question splits stellar populations into two regimes that demand entirely different machinery.

a population is **resolved** when individual stars are detected as distinct sources, so that for each star we can measure (in principle) its apparent magnitude in multiple bands, its position on the sky, sometimes its proper motion, sometimes a radial velocity $v_r$, and, with high resolution spectroscopy, its surface chemical abundances. the practical threshold is set by crowding: the stellar surface density must be low enough, or the instrumental [Point Spread Function (PSF)](../../02_Zettel/Theory/Point Spread Function (PSF).md) sharp enough, that the typical separation between stars exceeds a few PSF widths. galactic open clusters in the solar neighbourhood are easily resolved from the ground; galactic [Globular Clusters](../../02_Zettel/Theory/Globular Clusters.html) are resolved in the outskirts but become severely crowded in the cores, where HST and JWST imaging or adaptive optics are needed; clusters in the LMC/SMC and in M31 require space resolution; clusters at $z \gtrsim 0.5$ are unresolvable as individual stars even with JWST.

a population is **unresolved** when the detector measures only the integrated flux of many superposed stars: there is no per-star photometry, only an integrated [SED](../../02_Zettel/Theory/SED.html) and, at best, an integrated spectrum. all information must be extracted from the *shape* of that combined light, which is a luminosity-weighted convolution of the underlying stellar population.

the inferential consequences are dramatic. for a resolved cluster, the [HR diagram](../../02_Zettel/Theory/HR diagram.html) (or its observational counterpart, the CMD) is built directly from the data: each star is a dot, the morphology of the dot cloud carries the age, metallicity, distance, reddening and helium content. age is read off the main sequence turn-off, metallicity from the red giant branch colour and slope, distance from horizontal-branch luminosity or [TRGB tip of the red giant branch](../../02_Zettel/Theory/TRGB tip of the red giant branch.html), reddening from the slope of the foreground extinction vector. these are *direct, geometric* measurements on a diagram.

for an unresolved population none of this is accessible. one must instead build [Single stellar population SSP](../../02_Zettel/Theory/Single stellar population SSP.html) synthesis models: pick an age, a metallicity, an [Initial mass function](../../02_Zettel/Theory/Initial mass function.html), evolve a grid of isochrones through stellar evolution codes, attach a stellar-atmosphere library to translate $T_\mathrm{eff}, \log g, [\mathrm{Fe}/\mathrm{H}]$ into spectra, integrate over the IMF, and compare the predicted integrated SED or spectrum to the data. the workhorse codes are BC03 (Bruzual & Charlot 2003), Maraston, FSPS, GALEV. the procedure is powerful but suffers from severe degeneracies, most notably the [Age-metallicity degeneracy](../../02_Zettel/Theory/Age-metallicity degeneracy.html): an old metal-poor SSP and a younger metal-rich SSP have nearly identical optical colours (the famous $\Delta \log t / \Delta \log Z \approx -3/2$ rule of Worthey 1994).

the milone-style course is rigorously about the resolved regime. every CMD feature we will read (MS, subgiant branch, RGB, horizontal branch, asymptotic giant branch, white dwarf cooling sequence) is a tool that exists only because we have per-star photometry. the unresolved machinery sits in the background as the *limit* of what one would do for the same population observed in M87 or in a $z=2$ galaxy, where SSPs are the only option (see [Age estimation in unresolved populations](../../02_Zettel/Theory/Age estimation in unresolved populations.html)).

a useful mental rule: resolved photometry gives you a **distribution** in the colour-magnitude plane and you read morphology; integrated photometry gives you a **single point** in colour-colour space and you fit a model. the information content differs by orders of magnitude, which is exactly why nearby clusters are the laboratories where stellar evolution theory is calibrated before being deployed elsewhere.

## see also
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
- [Single stellar population SSP](../../02_Zettel/Theory/Single stellar population SSP.html)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html)
- [HR diagram](../../02_Zettel/Theory/HR diagram.html)
- [Age-metallicity degeneracy](../../02_Zettel/Theory/Age-metallicity degeneracy.html)
