---
layout: default
name: Na O anticorrelation
description: the canonical chemical signature of multiple populations in globular clusters, tracing high-temperature proton-capture H burning in a polluter
---

the sodium-oxygen anti-correlation is the spectroscopic fingerprint of multiple populations + arguably the defining property of a globular cluster. carretta + gratton + bragaglia (2010) phrased it as: a cluster is a GC if + only if it shows Na-O. it is observed in essentially every old massive cluster studied at high resolution.

## the observational fact

if you plot [Na/Fe] vs [O/Fe] for ~50-200 RGB stars in any well-studied GC (e.g. M3, M13, NGC 6752, NGC 2808, 47 Tuc) you find a continuous distribution running from:

- 1G stars: $[\text{O/Fe}] \sim +0.3$ to $+0.4$ (typical halo $\alpha$-enhancement), $[\text{Na/Fe}] \sim 0$
- intermediate 2G: enhanced Na ($+0.2$ to $+0.5$), depleted O ($\sim 0$ to $-0.2$)
- extreme 2G: $[\text{Na/Fe}] \gtrsim +0.5$, $[\text{O/Fe}] \lesssim -0.5$ (super-oxygen-poor)

the anti-correlation is monotonic. the slope + extension vary: some clusters (47 Tuc, M71) show modest Na-O, others (NGC 2808, M13, NGC 6752) show extreme tails reaching very low oxygen.

field halo stars at the same [Fe/H] sit only at the 1G locus. they do not show Na-O. this is what makes the anti-correlation cluster-specific: it is not a generic property of low-metallicity stars, it requires the cluster environment.

## the nuclear physics

oxygen depletion + sodium enhancement come from H burning at high temperature, where two proton-capture cycles activate beyond the ordinary CNO cycle:

the **NeNa cycle** burns $^{20}\text{Ne}$ to $^{22}\text{Ne}$ to $^{23}\text{Na}$:
$$^{20}\text{Ne}(p,\gamma)^{21}\text{Na}(\beta^+)^{21}\text{Ne}(p,\gamma)^{22}\text{Na}(\beta^+)^{22}\text{Ne}(p,\gamma)^{23}\text{Na}$$
producing sodium from neon at $T \gtrsim 30$-$40$ MK.

the **ON branch** of the CNO cycle, activated at $T \gtrsim 40$ MK, runs:
$$^{16}\text{O}(p,\gamma)^{17}\text{F}(\beta^+)^{17}\text{O}(p,\alpha)^{14}\text{N}$$
destroying oxygen + boosting nitrogen.

so a region hot enough to do both will simultaneously deplete O + enhance Na, producing the anti-correlation. critically these temperatures are reached in:
- the H-burning shells of intermediate-mass AGB stars (hot bottom burning)
- the cores of fast-rotating massive MS stars
- the convective envelopes of supermassive stars

ordinary low-mass MS stars (the GC stars themselves) do not reach these temperatures internally, so their surface composition cannot be modified in situ on the MS. the polluted material had to come from somewhere else (see [Polluter scenarios for second-generation GC stars](../../02_Zettel/Theory/Polluter scenarios for second-generation GC stars.md)).

## why it is not stellar evolution

a tempting interpretation in the 1970s was that Na + O variations were produced by deep mixing on the giant branch in each star individually. this is ruled out because:
1. the anti-correlation is seen in unevolved MS + subgiant stars, where deep mixing has not yet operated (gratton et al. 2001 in NGC 6752)
2. the abundance pattern requires temperatures higher than any low-mass star achieves internally
3. helium variations + colour splits track Na-O even on the MS (see [Helium spread in GCs](../../02_Zettel/Theory/Helium spread in GCs.md))

the contamination must therefore be primordial: 2G stars were born from gas already enriched by some earlier polluter generation.

## connections to other anti-correlations

Na-O is the most accessible (strong + clean lines in the optical) but it is not isolated. the same hot-H-burning origin produces:
- C depletion + N enhancement (CN cycle, lower T) → see [CN CH MgAl anticorrelations](../../02_Zettel/Theory/CN CH MgAl anticorrelations.md)
- Mg depletion + Al enhancement (MgAl cycle, $T \gtrsim 70$ MK) → only in the most massive metal-poor GCs
- He enhancement (the unique product of H burning) → see [Helium spread in GCs](../../02_Zettel/Theory/Helium spread in GCs.md)

the joint pattern (Na up, Al up, Mg down, O down, C down, N up, He up, Fe constant) is the smoking gun for proton-capture pollution.

## the carretta-gratton legacy

eugenio carretta + raffaele gratton + their collaborators (bragaglia, lucatello, d'orazi) ran the FLAMES@VLT survey of ~2500 RGB stars in 19 galactic GCs (carretta et al. 2009 a,b,c, 2010). they showed Na-O is universal, quantified its extension, + introduced the IQR[O/Na] as a cluster-level statistic that correlates with cluster mass + helium spread. this is one of the foundational data sets of modern GC astrophysics.

## see also

- [Multiple populations in GCs discovery](../../02_Zettel/Theory/Multiple populations in GCs discovery.md)
- [CN CH MgAl anticorrelations](../../02_Zettel/Theory/CN CH MgAl anticorrelations.md)
- [Helium spread in GCs](../../02_Zettel/Theory/Helium spread in GCs.md)
- [Polluter scenarios for second-generation GC stars](../../02_Zettel/Theory/Polluter scenarios for second-generation GC stars.md)
- [Photometric chromosome maps](../../02_Zettel/Theory/Photometric chromosome maps.md)
- Hot bottom burning AGB nucleosynthesis
- CNO cycle
- [Stellar populations I II III](../../02_Zettel/Theory/Stellar populations I II III.md)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
