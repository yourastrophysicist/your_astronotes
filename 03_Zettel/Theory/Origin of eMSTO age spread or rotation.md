---
layout: "default"
title: "Origin of eMSTO age spread or rotation"
name: "Origin of eMSTO age spread or rotation"
description: "the debate over whether eMSTOs in young clusters reflect prolonged star formation or differing stellar rotation, with rotation now favoured"
---
{% raw %}
since the discovery of the [Extended main sequence turn-off eMSTO](./Extended%20main%20sequence%20turn-off%20eMSTO.html) in $1$-$2$ Gyr LMC clusters (Mackey & Broby Nielsen 2007), there has been a sustained debate over what physical mechanism produces the broadened TO. two competing hypotheses dominate the literature.

## hypothesis 1: prolonged star formation (age spread)

if the TO width is purely an **age effect**, the implied age spread is $\sim 200$-$500$ Myr. proposed by Mackey, Goudfrooij, Niederhofer + others.

### supporting arguments

- the TO width matches the predicted broadening for $\Delta t \sim 300$ Myr;
- some intermediate-age LMC clusters might still retain gas during this window;
- a prolonged SF burst would naturally explain a smooth TO width without invariance arguments.

### problems

1. **the MS below the TO is NOT broadened**: stars on the lower MS of the same cluster have a tight, narrow main sequence consistent with a single age. age spread should broaden the entire MS, not just the TO.
2. **no gas observed in present-day eMSTO clusters**: HI, CO, Hα searches find no fuel for SF. the clusters are effectively gas-free.
3. **dynamical timescale problem**: the cluster's free-fall time + crossing time are $\sim 1$ Myr. holding gas for $\sim 500$ Myr against feedback + dynamical evaporation requires fine-tuning.
4. **no clear chemical signature**: a $300$ Myr SF episode should imprint a [Fe/H] or $[\alpha/{\rm Fe}]$ spread across populations. spectroscopy (Mucciarelli et al. 2014, Cabrera-Ziri et al. 2016) finds homogeneous abundances within a cluster, contradicting prolonged SF.

so age spread fails to fit the broader observational pattern.

## hypothesis 2: stellar rotation

proposed by Bastian & de Mink 2009. rotation produces TO broadening through three independent effects:

### gravity darkening

a rotating star is oblate. centrifugal force reduces effective gravity at the equator, which (von Zeipel theorem) reduces the local effective temperature. for fast rotators ($v/v_{\rm crit} \sim 0.9$), the equator is $\sim 1000$-$2000$ K cooler than the pole.

inclination matters: viewed equator-on, the star appears cooler ($\sim 0.05$-$0.1$ mag redder); viewed pole-on, it appears hotter ($\sim 0.05$-$0.1$ mag bluer).

### rotational mixing

rotation drives meridional circulation in the radiative envelope, which transports fresh hydrogen from the envelope to the convective core. this:
- prolongs the core-H burning lifetime by $\sim 20$-$30\%$;
- shifts the TO to brighter $L$ + redder colour (over evolved core $\to$ He-rich core $\to$ later bigger envelope).

### bifurcation of upper MS

if cluster stars are bimodal in rotation rate (slow vs fast rotators), the upper MS bifurcates into two sequences. observed in NGC 1755, NGC 1850, NGC 1856 (Milone et al. 2018). slow-rotator branch: $\sim 30\%$ of upper MS stars; fast-rotator branch: $\sim 70\%$.

## supporting evidence for rotation

- **Brandt & Huang 2015, ApJ 807, 24**: quantitative MIST + Geneva rotation models reproduce eMSTO width with $v/v_{\rm crit} = 0$ to $0.9$ population.
- **Milone et al. 2018, MNRAS 477, 2640**: clean detection of split upper MS in young LMC clusters, attributable to a bimodal rotation distribution.
- **Marino et al. 2018, AJ 156, 116**: direct VLT-MUSE spectroscopy of NGC 1866 stars on the blue + red MS sequences confirmed slow vs fast rotator identification ($v\sin i \sim 50$ km/s blue branch, $\sim 200$ km/s red branch).
- **Dupree et al. 2017** (using HST UV spectra): direct rotation measurement in NGC 1866 stars confirms wide rotation distribution.

## current consensus

**rotation is now the favoured explanation** for the eMSTO in young + intermediate-age clusters, supported by:

1. the MS-below-TO consistency with a single age;
2. spectroscopic confirmation of bimodal rotation;
3. rotation-driven CMD models reproducing the observed eMSTO width;
4. absence of chemical-spread signatures expected from age spread.

age spread may still contribute at the $< 100$ Myr level in some cases. rotation + small age spread (or rotation + binarity + small age spread) likely combine in real clusters.

## the residual mystery: why bimodal rotation?

the open question is **why the rotation distribution is bimodal**, not Gaussian. proposed mechanisms:

- **mergers + stellar collisions** make slow rotators in dense clusters (D'Antona et al. 2015);
- **accretion of binary mass transfer** produces fast rotators (de Mink et al. 2013);
- **early disc-locking** evolution differs between stars (Sun et al. 2019).

no single explanation has yet been confirmed.

## connection to old GC multiple populations

old GCs ($> 5$ Gyr) do NOT show eMSTOs (rotation has been braked away by magnetic torques over Gyrs). but they DO show chemical multiple populations. so:

- in young clusters, rotation produces CMD broadening + likely will leave residual He variations;
- in old clusters, rotation has been damped, but He + light-element variations persist;
- the **same physics** (FRMS, AGB pollution + rotation-induced mixing) may operate in both regimes, with different signatures at different ages.

if true, this unifies the eMSTO + chromosome map phenomena into a single evolutionary sequence: young eMSTO cluster $\to$ old multi-population GC.

## reference papers

- **Mackey & Broby Nielsen 2007**, **Goudfrooij et al. 2014** — age-spread proponents.
- **Bastian & de Mink 2009** — rotation hypothesis.
- **Niederhofer et al. 2015** — argues for age-spread persistence at low rotation.
- **D'Antona et al. 2015** — rotation + He variation unified.
- **Brandt & Huang 2015** — quantitative rotation models.
- **Milone et al. 2018** — observational split upper MS.
- **Marino et al. 2018** — spectroscopic confirmation.

## see also

- [Extended main sequence turn-off eMSTO](./Extended%20main%20sequence%20turn-off%20eMSTO.html)
- [Stellar rotation effects on CMD](./Stellar%20rotation%20effects%20on%20CMD.html)
- [Splitting of the upper MS in young clusters](./Splitting%20of%20the%20upper%20MS%20in%20young%20clusters.html)
- [eMSTO and multiple populations connection](./eMSTO%20and%20multiple%20populations%20connection.html)
- [Multiple populations in GCs discovery](./Multiple%20populations%20in%20GCs%20discovery.html)
- [Helium spread in GCs](./Helium%20spread%20in%20GCs.html)
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Extended%20main%20sequence%20turn-off%20eMSTO.html" class="backlink-item">Extended main sequence turn-off eMSTO</a></li>
    <li class="backlink-item-wrap"><a href="./Splitting%20of%20the%20upper%20MS%20in%20young%20clusters.html" class="backlink-item">Splitting of the upper MS in young clusters</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20rotation%20effects%20on%20CMD.html" class="backlink-item">Stellar rotation effects on CMD</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./eMSTO%20and%20multiple%20populations%20connection.html" class="backlink-item">eMSTO and multiple populations connection</a></li>
  </ul>
</div>
