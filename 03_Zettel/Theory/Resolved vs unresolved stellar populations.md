---
layout: "default"
title: "Resolved vs unresolved stellar populations"
---
the whole logic of a stellar astrophysics course built around [Color-magnitude diagrams of clusters](Color-magnitude%20diagrams%20of%20clusters.html) starts from a single observational dichotomy: can we, or can we not, separate the light of one star from the light of its neighbours on the detector. that question splits stellar populations into two regimes that demand entirely different machinery.

a population is **resolved** when individual stars are detected as distinct sources, so that for each star we can measure (in principle) its apparent magnitude in multiple bands, its position on the sky, sometimes its proper motion, sometimes a radial velocity $v_r$, and, with high resolution spectroscopy, its surface chemical abundances. the practical threshold is set by crowding: the stellar surface density must be low enough, or the instrumental [Point Spread Function (PSF)](Point%20Spread%20Function%20%28PSF%29.html) sharp enough, that the typical separation between stars exceeds a few PSF widths. galactic open clusters in the solar neighbourhood are easily resolved from the ground; galactic [Globular Clusters](Globular%20Clusters.html) are resolved in the outskirts but become severely crowded in the cores, where HST and JWST imaging or [adaptive optics](interf/Adaptive%20optics.html) are needed; clusters in the LMC/SMC and in M31 require space resolution; clusters at $z \gtrsim 0.5$ are unresolvable as individual stars even with JWST.

a population is **unresolved** when the detector measures only the integrated flux of many superposed stars: there is no per-star photometry, only an integrated [SED](SED.html) and, at best, an integrated spectrum. all information must be extracted from the *shape* of that combined light, which is a luminosity-weighted convolution of the underlying stellar population.

the inferential consequences are dramatic. for a resolved cluster, the [HR diagram](HR%20diagram.html) (or its observational counterpart, the CMD) is built directly from the data: each star is a dot, the morphology of the dot cloud carries the age, metallicity, distance, reddening and helium content. age is read off the main sequence turn-off, metallicity from the red giant branch colour and slope, distance from horizontal-branch luminosity or [TRGB tip of the red giant branch](TRGB%20tip%20of%20the%20red%20giant%20branch.html), reddening from the slope of the foreground extinction vector. these are *direct, geometric* measurements on a diagram.

for an unresolved population none of this is accessible. one must instead build [Single stellar population SSP](Single%20stellar%20population%20SSP.html) synthesis models: pick an age, a metallicity, an [Initial mass function](Initial%20mass%20function.html), evolve a grid of isochrones through stellar evolution codes, attach a stellar-atmosphere library to translate $T_\mathrm{eff}, \log g, [\mathrm{Fe}/\mathrm{H}]$ into spectra, integrate over the IMF, and compare the predicted integrated SED or spectrum to the data. the workhorse codes are BC03 (Bruzual & Charlot 2003), Maraston, FSPS, GALEV. the procedure is powerful but suffers from severe degeneracies, most notably the [Age-metallicity degeneracy](Age-metallicity%20degeneracy.html): an old metal-poor SSP and a younger metal-rich SSP have nearly identical optical colours (the famous $\Delta \log t / \Delta \log Z \approx -3/2$ rule of Worthey 1994).

the milone-style course is rigorously about the resolved regime. every CMD feature we will read (MS, subgiant branch, RGB, horizontal branch, asymptotic giant branch, white dwarf cooling sequence) is a tool that exists only because we have per-star photometry. the unresolved machinery sits in the background as the *limit* of what one would do for the same population observed in M87 or in a $z=2$ galaxy, where SSPs are the only option (see [Age estimation in unresolved populations](Age%20estimation%20in%20unresolved%20populations.html)).

a useful mental rule: resolved photometry gives you a **distribution** in the colour-magnitude plane and you read morphology; integrated photometry gives you a **single point** in colour-colour space and you fit a model. the information content differs by orders of magnitude, which is exactly why nearby clusters are the laboratories where stellar evolution theory is calibrated before being deployed elsewhere.

## see also
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)
- [Single stellar population SSP](Single%20stellar%20population%20SSP.html)
- [Color-magnitude diagrams of clusters](Color-magnitude%20diagrams%20of%20clusters.html)
- [HR diagram](HR%20diagram.html)
- [Age-metallicity degeneracy](Age-metallicity%20degeneracy.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Extragalactic%20star%20clusters.html" class="backlink-item">Extragalactic star clusters</a></li>
    <li class="backlink-item-wrap"><a href="M-dwarf%20discontinuity%20and%20convective%20merging%20instability.html" class="backlink-item">M-dwarf discontinuity and convective merging instability</a></li>
    <li class="backlink-item-wrap"><a href="The%20Galactic%20Bulge.html" class="backlink-item">The Galactic Bulge</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
  </ul>
</div>

