---
layout: default
name: GC formation models with MPs
description: competing scenarios for how globular clusters form multiple populations, from two-stage star formation to early disc fragmentation to accreted dwarf nuclei
---

if multiple populations are universal in old massive GCs + scale cleanly with cluster mass, then forming a GC is the same question as forming MPs. the formation model must explain (i) the observed chemical anti-correlations, (ii) the helium spread, (iii) the 2G fraction + its mass scaling, (iv) the spatial + kinematic differences between populations, + (v) the existence of [Type II GCs](../../02_Zettel/Theory/Type I and Type II GCs.html) with iron + s-process spreads. several competing scenarios exist; none is fully satisfactory.

## scenario 1: two-stage star formation in a single proto-cluster

the most-developed framework, articulated by d'antona, ventura, d'ercole + collaborators, with variants:

1. **stage 1**: a massive gas cloud collapses + forms the 1G in a single burst. mass $\sim 10^6\, M_\odot$ initially. [Pop II](../../02_Zettel/Theory/Stellar populations I II III.html) composition ($\alpha$-enhanced halo chemistry).
2. **clearing phase**: SNe from the most massive 1G stars expel residual gas + clear the cluster on $\sim 10$-$30$ Myr.
3. **polluter phase**: AGB + super-AGB stars of the 1G ($M \sim 4$-$8\, M_\odot$) reach the AGB at $30$-$100$ Myr after birth. they shed slow winds enriched in CNO + NeNa + (sometimes) MgAl products, with He enhancement. these winds collect in the cluster core because the potential well retains them after SN feedback has subsided.
4. **stage 2**: the polluter wind gas, possibly diluted with inflowing pristine material, undergoes a second star formation event in the cluster core, producing the 2G.
5. **dynamical evolution**: the 2G is born centrally concentrated. SN feedback from 2G is minimal because the polluter ejecta produced few massive stars + because the IMF of 2G may be truncated. tidal stripping preferentially removes the more extended 1G, producing the present-day 2G-rich system.

**successes**: explains chemistry qualitatively, naturally produces He enhancement, predicts central concentration of 2G, fits the timing.

**failures**: mass budget (need 1G ~10× more massive than observed); detailed AGB yields struggle with the Na-O slope; the loss of so much 1G to the field is not fully observed.

## scenario 2: fast-rotating massive star pollution

decressin et al. 2007 + meynet, charbonnel + collaborators. the polluter is fast-rotating massive MS stars (20-100 M☉) instead of AGB. the rotational mixing exposes CNO + NeNa products in equatorial decretion disks, which form the 2G in situ on $\sim 10$ Myr.

key difference from AGB: timescale is shorter, before SNe go off; chemistry comes from MS H burning rather than AGB HBB. but it has its own mass budget problem + still requires preferential 1G loss.

## scenario 3: supermassive star pollution + simultaneous star formation

gieles, charbonnel, krause et al. 2018. proposed that runaway stellar collisions in the dense core of a forming proto-cluster build a single supermassive star ($10^3$-$10^5\, M_\odot$). its hot core ($T \sim 75$ MK) fully activates the MgAl chain. it loses mass continuously via winds + transfers processed material into the still-forming cluster gas. star formation is **not** two-stage: the SMS pollutes ongoing SF, producing 1G + 2G in the same prolonged formation event.

**successes**: solves mass budget cleanly (one SMS pollutes the whole 2G); reaches MgAl temperatures naturally; predicts a correlation between cluster mass + SMS mass that matches observed scaling of $\Delta Y$ with mass.

**failures**: existence of SMSs is theoretical; the dense initial conditions for collisional buildup may not always be realized.

## scenario 4: early disc fragmentation

bekki + collaborators, also explored by mclaughlin + van der marel. the proto-cluster forms a thin disc that fragments + builds populations sequentially. polluter ejecta accumulate in the disc + drive a second wave of SF. similar in spirit to scenario 1 but with a more extended geometry.

## scenario 5: accreted dwarf nuclei (Type II GCs)

for [Type II GCs](../../02_Zettel/Theory/Type I and Type II GCs.html) specifically, the formation channel is **stripping of dwarf galaxy nuclei**. $\omega$ Cen + M54 are the prototypes. the dwarf hosts multiple chemical generations including SN Ia + AGB s-process enrichment, which are normally absent in pure-cluster scenarios. the dwarf's outer stars are stripped during infall + only the dense nucleus survives as the present GC.

this scenario applies to ~17% of galactic GCs + dovetails with gaia-era classifications of GCs by accretion origin (gaia-enceladus, sagittarius, sequoia, kraken / heracles).

## the retention condition

regardless of polluter, the cluster must retain ejecta against SN winds + radiation pressure. the criterion is roughly:
$$v_\text{ejecta} \lesssim v_\text{esc} \sim \sqrt{\frac{2 G M}{r}}$$
for typical GC masses ($10^5$-$10^6\, M_\odot$) + half-light radii ($\sim 3$ pc), $v_\text{esc} \sim 30$-$80$ km/s. AGB winds at $\sim 10$ km/s + FRMS disc winds at similar speeds satisfy this. SN ejecta at $10^4$ km/s do not, which is why GCs have no [Fe/H] spread (except type II, where dwarf-galaxy potentials retain SN ejecta).

this **deep potential well** condition translates directly into the mass threshold ($M \gtrsim 10^{4.5}\, M_\odot$) for hosting MPs.

## connecting to high-redshift cluster formation

if MPs require the conditions that built old galactic GCs at $z \sim 6$-$10$, do present-day young massive clusters in starburst galaxies (e.g. antennae, M82) form MPs? observations of younger ($\sim 100$ Myr) clusters in the local universe with HST + JWST show **no MPs at the present time**, but this could be because they have not yet hosted the polluter phase ($\sim 30$-$100$ Myr after birth for AGB scenarios). it could also be because the formation conditions today differ from the proto-cluster formation environments at high redshift.

this is an open question + JWST GC-precursor surveys at high z are now testing it.

## see also

- [Multiple populations in GCs discovery](../../02_Zettel/Theory/Multiple populations in GCs discovery.html)
- [Polluter scenarios for second-generation GC stars](../../02_Zettel/Theory/Polluter scenarios for second-generation GC stars.html)
- [Photometric chromosome maps](../../02_Zettel/Theory/Photometric chromosome maps.html)
- [Type I and Type II GCs](../../02_Zettel/Theory/Type I and Type II GCs.html)
- [Helium spread in GCs](../../02_Zettel/Theory/Helium spread in GCs.html)
- [Mass dependence of multiple populations](../../02_Zettel/Theory/Mass dependence of multiple populations.html)
- [Multiple populations in extragalactic GCs](../../02_Zettel/Theory/Multiple populations in extragalactic GCs.html)
- Hot bottom burning AGB nucleosynthesis
- Galactic archaeology with Gaia
- [Stellar populations I II III](../../02_Zettel/Theory/Stellar populations I II III.html)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
