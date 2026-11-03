---
layout: "default"
title: "Resolved vs unresolved stellar populations"
---
the whole logic of a stellar astrophysics course built around [[Color-magnitude diagrams of clusters]] starts from a single observational dichotomy: can we, or can we not, separate the light of one star from the light of its neighbours on the detector. that question splits stellar populations into two regimes that demand entirely different machinery.

a population is **resolved** when individual stars are detected as distinct sources, so that for each star we can measure (in principle) its apparent magnitude in multiple bands, its position on the sky, sometimes its proper motion, sometimes a radial velocity $v_r$, and, with high resolution spectroscopy, its surface chemical abundances. the practical threshold is set by crowding: the stellar surface density must be low enough, or the instrumental [[Point Spread Function (PSF)]] sharp enough, that the typical separation between stars exceeds a few PSF widths. galactic open clusters in the solar neighbourhood are easily resolved from the ground; galactic [[Globular Clusters]] are resolved in the outskirts but become severely crowded in the cores, where HST and JWST imaging or [[Adaptive optics\|adaptive optics]] are needed; clusters in the LMC/SMC and in M31 require space resolution; clusters at $z \gtrsim 0.5$ are unresolvable as individual stars even with JWST.

a population is **unresolved** when the detector measures only the integrated flux of many superposed stars: there is no per-star photometry, only an integrated [[SED]] and, at best, an integrated spectrum. all information must be extracted from the *shape* of that combined light, which is a luminosity-weighted convolution of the underlying stellar population.

the inferential consequences are dramatic. for a resolved cluster, the [[HR diagram]] (or its observational counterpart, the CMD) is built directly from the data: each star is a dot, the morphology of the dot cloud carries the age, metallicity, distance, reddening and helium content. age is read off the main sequence turn-off, metallicity from the red giant branch colour and slope, distance from horizontal-branch luminosity or [[TRGB tip of the red giant branch]], reddening from the slope of the foreground extinction vector. these are *direct, geometric* measurements on a diagram.

for an unresolved population none of this is accessible. one must instead build [[Single stellar population SSP]] synthesis models: pick an age, a metallicity, an [[Initial mass function]], evolve a grid of isochrones through stellar evolution codes, attach a stellar-atmosphere library to translate $T_\mathrm{eff}, \log g, [\mathrm{Fe}/\mathrm{H}]$ into spectra, integrate over the IMF, and compare the predicted integrated SED or spectrum to the data. the workhorse codes are BC03 (Bruzual & Charlot 2003), Maraston, FSPS, GALEV. the procedure is powerful but suffers from severe degeneracies, most notably the [[Age-metallicity degeneracy]]: an old metal-poor SSP and a younger metal-rich SSP have nearly identical optical colours (the famous $\Delta \log t / \Delta \log Z \approx -3/2$ rule of Worthey 1994).

the milone-style course is rigorously about the resolved regime. every CMD feature we will read (MS, subgiant branch, RGB, horizontal branch, asymptotic giant branch, white dwarf cooling sequence) is a tool that exists only because we have per-star photometry. the unresolved machinery sits in the background as the *limit* of what one would do for the same population observed in M87 or in a $z=2$ galaxy, where SSPs are the only option (see [[Age estimation in unresolved populations]]).

a useful mental rule: resolved photometry gives you a **distribution** in the colour-magnitude plane and you read morphology; integrated photometry gives you a **single point** in colour-colour space and you fit a model. the information content differs by orders of magnitude, which is exactly why nearby clusters are the laboratories where stellar evolution theory is calibrated before being deployed elsewhere.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Stellar population|500](https://commons.wikimedia.org/wiki/Special:FilePath/Artist%27s_impression_of_the_Milky_Way_%28updated_-_annotated%29.jpg?width=600)
*Lead figure of the Wikipedia article Stellar population* ([Commons file page](https://commons.wikimedia.org/wiki/File:Artist%27s_impression_of_the_Milky_Way_%28updated_-_annotated%29.jpg), NASA/JPL-Caltech/ESO/R. Hurt, Public domain, as used on the Wikipedia article [Stellar population](https://en.wikipedia.org/wiki/Stellar_population))

- **Stellar population**. "In 1944, Walter Baade categorized groups of stars within the Milky Way into stellar populations. In the abstract of the article by Baade, he recognizes that Jan Oort originally conceived this type of classification in 1926. Baade observed that bluer stars were strongly associated with the spiral arms, and yellow stars dominated near the central galactic bulge and within globular star clusters." ([Wikipedia](https://en.wikipedia.org/wiki/Stellar_population))
- **Modeling the Panchromatic Spectral Energy Distributions of Galaxies**. "The spectral energy distributions (SEDs) of galaxies are shaped by nearly every physical property of the system, including the star formation history, metal content, abundance pattern, dust mass, grain size distribution, star-dust geometry, and interstellar radiation field. The principal goal of stellar population synthesis (SPS) is to extract these variables from observed SEDs." ([arXiv:1301.7095](https://arxiv.org/abs/1301.7095))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

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


