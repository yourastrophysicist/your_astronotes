---
layout: default
name: Black holes in globular clusters
description: stellar-mass BH retention vs ejection by GR kicks and the dynamical formation of BH-BH binaries
---

are there black holes in Globular clusters? for decades the answer was assumed to be "no, or very few". the modern answer is "many, possibly hundreds per massive cluster", and the question has moved from existence to dynamics.

**the formation argument**

a [standard IMF](../../02_Zettel/Theory/Salpeter Kroupa Chabrier IMFs.md) forms one stellar-mass BH per $\sim 500\,M_\odot$ of stars. for a typical massive GC of total stellar mass $\sim 10^6\,M_\odot$, that gives $\sim 2000$ BH progenitors. the ZAMS masses are $M \gtrsim 25\,M_\odot$; their MS lifetimes are $\sim 10\,\text{Myr}$, vanishingly short on cluster timescales. so all the BHs were made within the first few Myr of cluster formation, and any present today have been there for $\sim 12\,\text{Gyr}$.

**the retention problem**

the classical argument (sigurdsson & hernquist 1993, kulkarni et al. 1993) was that BHs sink rapidly to the cluster centre via mass segregation, form a dense BH subcluster, and self-eject through repeated three-body interactions. the predicted timescale was $\sim 10^9\,\text{yr}$, leaving essentially no BHs in old GCs today.

complications:

- **natal kicks**: BHs may be born with supernova kicks, although fallback BHs likely have small kicks. GR (Blecha-Loeb) kicks from BH-BH mergers also matter once mergers happen.
- **binary heating**: BH-BH binaries inject energy into the cluster, expanding the core and slowing further BH-BH formation, a self-regulating effect.
- **higher cluster mass**: simulations suggest that more massive clusters retain a larger BH fraction.

**modern picture**

monte carlo simulations (chatterjee, rodriguez, breen) and N-body simulations (wang, hurley) since 2015 show that **hundreds of stellar-mass BHs survive in many GCs today**. the BH subcluster does not fully eject; instead it reaches a quasi-steady state where the BH-BH ejection rate roughly balances the slow segregation. predicted retention fractions are $\sim 5\text{--}30\%$ of the initial population.

**observational confirmation**

three lines of evidence confirm BH retention:

1. **dynamical detections**: radial-velocity searches for unseen massive companions of luminous stars have produced compelling stellar-mass BH candidates in NGC 3201 (giesers et al. 2018: a $\sim 4\,M_\odot$ BH with an MS companion), and a possible $\sim 10\,M_\odot$ candidate in M22. see [Hunting BHs via radial velocities](../../02_Zettel/Theory/Hunting BHs via radial velocities.md).
2. **X-ray and radio**: a few persistent low-luminosity X-ray sources in GCs (M22-VLA1, M62-VLA1, 47 Tuc X-9 controversial) match the signature of accreting stellar-mass BHs.
3. **gravitational waves**: [LIGO-Virgo](../../02_Zettel/Theory/BHs from gravitational waves.md) detections of BH-BH mergers with precessing spins, large mass ratios, and member masses in the pair-instability mass gap (e.g. GW190521 with $\sim 85\,M_\odot$ component) point to dynamical assembly in dense clusters as a viable channel.

**implications**

- BH retention modifies the cluster's central density profile (BH heating maintains a larger core).
- the BH-BH binary population is a major contributor to the LIGO-Virgo merger rate from dynamical channels.
- [IMBH](../../02_Zettel/Theory/Intermediate-mass BHs in GCs.md) formation through repeated mergers in a BH subsystem becomes plausible (the "BH runaway" or "hierarchical merger" scenario).

the BH-in-GC question is now one of the most active areas at the intersection of stellar dynamics and gravitational-wave astrophysics.

## see also
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
- [Hunting BHs via radial velocities](../../02_Zettel/Theory/Hunting BHs via radial velocities.md)
- [Intermediate-mass BHs in GCs](../../02_Zettel/Theory/Intermediate-mass BHs in GCs.md)
- [BHs from gravitational waves](../../02_Zettel/Theory/BHs from gravitational waves.md)
- [X-ray sources in globular clusters](../../02_Zettel/Theory/X-ray sources in globular clusters.md)
- [AGN and supermassive black holes](../../02_Zettel/Theory/interf/AGN and supermassive black holes.md)
