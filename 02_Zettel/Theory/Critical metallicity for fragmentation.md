---
layout: default
name: Critical metallicity for fragmentation
description: the threshold metallicity Z_crit ~ 10^-5 to 10^-4 Z_sun below which gas cannot cool efficiently enough to fragment into low-mass stars, marking the Pop III to Pop II transition
---

the **critical metallicity for fragmentation** $Z_{\rm crit}$ is the threshold metallicity below which a primordial gas cloud cannot cool efficiently enough to fragment into stellar-mass clumps. below $Z_{\rm crit}$, the gas collapses monolithically into very massive ($\geq 100\,M_\odot$) [Pop III stars](../../02_Zettel/Theory/Population III stars.html). above $Z_{\rm crit}$, metal-line + dust cooling enables fragmentation into the standard near-Salpeter [IMF](../../02_Zettel/Theory/Salpeter Kroupa Chabrier IMFs.html) of Pop II + Pop I stars.

## numerical value

theoretical estimates converge on:

$$Z_{\rm crit} \sim 10^{-5} \text{ to } 10^{-4}\,Z_\odot$$

i.e., $[{\rm Fe/H}] \sim -5$ to $-4$ in the most extreme metal-poor end. the exact value depends on:

- whether dust cooling is included (lowers $Z_{\rm crit}$);
- presence of CNO group enrichment versus other elements;
- ambient temperature + density of the gas;
- background radiation (Lyman-Werner background suppresses H$_2$).

## the physical mechanism

fragmentation requires the cooling time $t_{\rm cool}$ to be shorter than the dynamical (free-fall) time $t_{\rm dyn}$:

$$t_{\rm cool} < t_{\rm dyn}$$

if cooling is fast, gas can radiate away its thermal pressure and locally collapse. if cooling is slow, gas remains thermally supported and only globally collapses via gravitational instability into one large clump.

at zero metallicity, cooling channels are limited:
- H$_2$ rotational + vibrational lines: efficient only above $T \sim 200$ K + below $T \sim 10^4$ K;
- HD cooling: slightly more efficient at $T < 100$ K;
- Lyman-$\alpha$: efficient above $T \sim 10^4$ K.

at $Z \sim 10^{-4}\,Z_\odot$, **C II + O I fine-structure lines** + **dust grain emission** become important. these provide:
- $\Lambda_{\rm metal} \propto Z$ at moderate $T$;
- continuous cooling at all temperatures relevant for collapse.

once metals dominate the cooling, $t_{\rm cool}$ drops below $t_{\rm dyn}$ at the densities relevant for fragmentation, and the cloud breaks into many low-mass cores.

## the Bromm-Loeb argument

Bromm & Loeb 2003 estimated $Z_{\rm crit}$ by requiring that fine-structure cooling of C II ($\lambda 158\,\mu$m) + O I ($\lambda 63\,\mu$m) overcomes adiabatic compressional heating at the density where Pop III collapse occurs. result:

$$Z_{\rm crit,C} \sim 10^{-3.5}\,Z_\odot \text{ for C alone}$$
$$Z_{\rm crit,O} \sim 10^{-3.0}\,Z_\odot \text{ for O alone}$$

with both, $Z_{\rm crit} \sim 10^{-5}$-$10^{-4}\,Z_\odot$ depending on conditions.

## the dust contribution

Schneider et al. 2002, 2006 added dust-grain cooling. dust forms from heavy elements in pre-existing SNe ejecta. once dust exists, even tiny amounts ($Z \sim 10^{-6}\,Z_\odot$) can dominate cooling at high densities, where dust thermal radiation dominates.

result: $Z_{\rm crit} \sim 10^{-5}\,Z_\odot$ if dust is included.

dust formation is itself a chemical evolution problem: it requires earlier SNe to produce, so the very first Pop III to Pop II transition might not benefit from dust cooling.

## observational evidence

the existence of stars with $[{\rm Fe/H}] = -5.4$ (HE 1327-2326, Frebel et al. 2005) supports $Z_{\rm crit} \lesssim 10^{-4}\,Z_\odot$: such stars have low Fe but enhanced C/N/O, consistent with formation in a cloud cooled by carbon/oxygen even at very low Fe. their existence proves fragmentation can occur at $Z < 10^{-4}\,Z_\odot$ if other elements (C, O) are non-zero.

## why this matters

$Z_{\rm crit}$ controls the **transition between Pop III and Pop II**. it determines:

1. how rapidly cosmic chemical enrichment converts the IMF from top-heavy to Salpeter-like;
2. when low-mass long-lived stars (which can survive to today) first appear;
3. the relative numbers of CEMP-no + extremely-iron-poor stars in halo + UFDG samples;
4. the IMF of the first galaxies.

## reference papers

- **Bromm & Loeb 2003, Nature 425, 812** — analytic argument for $Z_{\rm crit}$ from fine-structure cooling.
- **Schneider et al. 2002, ApJ 571, 30 + 2006, MNRAS 369, 1437** — dust contribution to $Z_{\rm crit}$.
- **Frebel & Bromm 2012, ApJ 759, 115** — observational tests via metal-poor stars.
- **Bromm & Larson 2004, ARA&A 42, 79** — review.
- **Frebel et al. 2007** — universal cooling threshold across many low-metallicity stars.

## see also

- [Population III stars](../../02_Zettel/Theory/Population III stars.html)
- [Pop III nucleosynthesis signatures](../../02_Zettel/Theory/Pop III nucleosynthesis signatures.html)
- [Search for Pop III stars in dwarf galaxies](../../02_Zettel/Theory/Search for Pop III stars in dwarf galaxies.html)
- [Pop III remnants in UFDGs](../../02_Zettel/Theory/Pop III remnants in UFDGs.html)
- [Big Bang nucleosynthesis](../../02_Zettel/Theory/Big Bang nucleosynthesis.html)
- [Salpeter Kroupa Chabrier IMFs](../../02_Zettel/Theory/Salpeter Kroupa Chabrier IMFs.html)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
