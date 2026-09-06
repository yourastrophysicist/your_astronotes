---
layout: default
name: CN CH MgAl anticorrelations
description: extended chemical fingerprints of multiple populations beyond Na-O, tracing CN-cycle + MgAl-cycle proton-capture nucleosynthesis at increasing temperature
---

the [Na O anticorrelation](../../02_Zettel/Theory/Na O anticorrelation.html) is the most famous, but it is one of a family of element-pair anti-correlations seen in globular cluster stars. each pair traces a different proton-capture chain operating at a characteristic temperature in the polluter. together they paint a full picture of hot H burning + let us rank GCs by how extreme their pollution was.

## the C-N anti-correlation (CN cycle)

at the lowest activation temperature ($T \gtrsim 20$ MK) the ordinary CN cycle operates:
$$^{12}\text{C}(p,\gamma)^{13}\text{N}(\beta^+)^{13}\text{C}(p,\gamma)^{14}\text{N}$$
converting carbon to nitrogen at equilibrium ratios that are strongly N-rich.

observationally:
- 2G stars are C-poor + N-rich
- detected through CH G-band ($\lambda \sim 4300$ Å) + CN bands ($\lambda \sim 3883, 4215$ Å, also UV NH at $3360$ Å)
- this is the oldest known anti-correlation, going back to osborn 1971 + cohen 1978 in M3 + M5

the CN-CH bimodality on the RGB was the first hint that GCs had star-to-star inhomogeneity. it was originally explained (incorrectly) by deep mixing on the giant branch. once the same bimodality was found on the unevolved Main sequence MS (cannon, croke, bell, briley in the 1990s using strömgren + narrowband photometry of 47 Tuc + M71) the primordial origin became unavoidable.

UV photometry from HST F275W + F336W is essentially a high-contrast CN+NH thermometer + this is what powers [Photometric chromosome maps](../../02_Zettel/Theory/Photometric chromosome maps.html).

## the Mg-Al anti-correlation (MgAl cycle)

at higher temperature ($T \gtrsim 65$-$80$ MK) the MgAl cycle activates:
$$^{24}\text{Mg}(p,\gamma)^{25}\text{Al}(\beta^+)^{25}\text{Mg}(p,\gamma)^{26}\text{Al}(\beta^+)^{26}\text{Mg}(p,\gamma)^{27}\text{Al}$$
+ similar branches involving $^{25,26}\text{Mg}$. the net effect is conversion of Mg isotopes to Al.

key features:
- 2G extreme stars are Mg-depleted ($[\text{Mg/Fe}]$ down by 0.2-0.5 dex) + Al-enhanced ($[\text{Al/Fe}]$ up by 0.5-1.5 dex)
- the slope + extension scale with cluster mass + decrease with metallicity
- only **massive metal-poor** GCs show clear Mg-Al: NGC 2808, M15, NGC 6752, M13, M54, $\omega$ Cen
- 47 Tuc + similar metal-rich GCs show essentially no Mg-Al spread

why mass + metallicity dependence? higher polluter temperatures are needed to fire the MgAl cycle, + these are reached more easily in massive metal-poor environments (lower opacity → hotter shells, deeper potential wells → more massive cluster from a more massive progenitor). pancino et al. + carretta + meszaros et al. (APOGEE) have mapped this systematically.

## the temperature ladder

ranking the anti-correlations by activation temperature gives a thermometer of the polluter:

| anti-correlation | $T$ threshold | seen in |
|---|---|---|
| Li depletion + Na | $\sim 10$ MK | most GCs |
| C-N (CN cycle) | $\sim 20$ MK | all GCs |
| Na-O (NeNa + ON) | $\sim 35$-$45$ MK | all GCs |
| Mg-Al (MgAl) | $\sim 65$-$80$ MK | massive metal-poor GCs only |
| K-Mg + heavier | $\gtrsim 100$ MK | NGC 2419, NGC 2808 extreme |

this ladder is one of the strongest constraints on [Polluter scenarios for second-generation GC stars](../../02_Zettel/Theory/Polluter scenarios for second-generation GC stars.html). any candidate polluter must reach temperatures $\gtrsim 70$ MK in the polluting layers to explain Mg-Al, but must also not over-produce heavier $\alpha$-elements or iron-peak species (which would show as a [Fe/H] spread, normally absent in [Type I GCs](../../02_Zettel/Theory/Type I and Type II GCs.html)).

## helium tracks alongside

every proton capture chain produces $^4\text{He}$ as a side product. the same gas that is N-rich + Na-rich + Al-rich is also helium-enhanced. so the chemical anti-correlations are not independent: they are coupled by their common origin in hot H burning. this links to [Helium spread in GCs](../../02_Zettel/Theory/Helium spread in GCs.html) + to the vertical axis of the [chromosome map](../../02_Zettel/Theory/Photometric chromosome maps.html).

## why it matters for chromosome maps

milone's chromosome map design exploits exactly this chemistry:
- the $\Delta_{C\,F275W,F336W,F438W}$ pseudo-color isolates NH + CN absorption, making it sensitive to **N enhancement** (CN cycle product)
- the $\Delta_{F275W,F814W}$ baseline is sensitive to **He enhancement** (proton capture by-product)

so the two axes are essentially "how N-rich" + "how He-rich". because all hot-H-burning products track together, this resolves the full 1G→2G sequence cleanly + lets you separate populations even where Na lines are inaccessible.

## see also

- [Na O anticorrelation](../../02_Zettel/Theory/Na O anticorrelation.html)
- [Helium spread in GCs](../../02_Zettel/Theory/Helium spread in GCs.html)
- [Photometric chromosome maps](../../02_Zettel/Theory/Photometric chromosome maps.html)
- [Multiple populations in GCs discovery](../../02_Zettel/Theory/Multiple populations in GCs discovery.html)
- [Polluter scenarios for second-generation GC stars](../../02_Zettel/Theory/Polluter scenarios for second-generation GC stars.html)
- [Type I and Type II GCs](../../02_Zettel/Theory/Type I and Type II GCs.html)
- Hot bottom burning AGB nucleosynthesis
- CNO cycle
- [Stellar populations I II III](../../02_Zettel/Theory/Stellar populations I II III.html)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
