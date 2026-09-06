---
layout: default
name: Subgiant branch SGB
description: the near-horizontal CMD locus from TO to the base of the RGB, set by shell-H ignition and the Schönberg-Chandrasekhar limit
---

the **subgiant branch** is the relatively short, near-horizontal stretch on the CMD that connects the main sequence turn-off to the base of the red giant branch. it is the bridge between core hydrogen burning and shell hydrogen burning, and its morphology is set by a single piece of stellar-structure physics: the maximum fractional mass an *isothermal helium core* can support against the weight of the overlying H-rich envelope, the **Schönberg-Chandrasekhar limit**.

at the TO, central H exhaustion ($X_c \to 0$) leaves the star with an essentially pure He core that is initially isothermal (no nuclear source, so heat flux through the core implies a temperature gradient; "isothermal" here is the limiting equilibrium configuration). H burning ignites in a thin shell at the base of the H-rich envelope, just above this He core. the star is now a *shell-burning star with an inert isothermal He core*.

the schönberg-chandrasekhar (SC) result says that an isothermal core in pressure equilibrium with an envelope of mean molecular weight $\mu_\mathrm{env}$ can support at most a fraction
$$ q_\mathrm{SC} = \left(\frac{\mu_\mathrm{env}}{\mu_\mathrm{core}}\right)^2 \times 0.37 $$
of the stellar mass before being unable to maintain hydrostatic balance with the envelope's weight. for a normal H envelope ($\mu_\mathrm{env} \approx 0.6$) and pure He core ($\mu_\mathrm{core} \approx 1.34$) this gives $q_\mathrm{SC} \approx 0.10$.

while $M_\mathrm{core}/M_\star < q_\mathrm{SC}$ the core sits in slow thermal equilibrium and shell H-burning ash accumulates at modest rate. on the CMD this phase is the *flat* SGB: the luminosity stays roughly constant (within $\Delta \log L \lesssim 0.3$) because the shell H-burning rate is set by the shell temperature, which evolves slowly, while the radius expands and $T_\mathrm{eff}$ drops. the star moves *redward at near-constant $L$*.

once the core mass crosses $q_\mathrm{SC}$, the core can no longer support the envelope and starts to **contract** on a Kelvin-Helmholtz timescale. core contraction releases gravitational energy that heats the H-burning shell, sharply increases the shell luminosity, and forces rapid envelope expansion and cooling. the star moves to the right and *up* the Hayashi limit onto the red giant branch. the SGB is therefore the "calm before the climb": modest expansion at near-constant $L$, terminating at the foot of the RGB when the SC limit fails.

mass-dependent variation. for low-mass stars ($M \lesssim 1.2 \, M_\odot$, the GC regime) the core is *electron-degenerate* well before the SC limit becomes relevant, and the SC argument in its classical (non-degenerate) form does not strictly apply: the core is supported by degeneracy pressure, the shell-H ignition is smooth, and the SGB is broad and well-populated. for intermediate mass ($1.2 \lesssim M/M_\odot \lesssim 2$) the core is non-degenerate at TO and the SC limit is the relevant clock; the SGB is narrow and the transition to RGB is fast, producing the characteristic *"hertzsprung gap"* in the CMD where few stars are caught (the SGB lifetime here is $\sim 10^7$ yr versus $10^9$ yr for the low-mass case). for high mass ($M \gtrsim 2.3 \, M_\odot$) the SGB blends into a broader subgiant region with no degeneracy and a sometimes blueward-looping morphology.

observational consequences and uses on the CMD:

**SGB as age indicator.** the *brightness* of the SGB at fixed colour, or equivalently the magnitude difference $\Delta V_\mathrm{TO}^\mathrm{SGB}$, is age-sensitive and reddening-insensitive in modes similar to those used at the TO. the SGB sits a few tenths of a magnitude above the TO at intermediate colours and shifts upward with age.

**SGB as a precision indicator of multiple populations.** in multiple populations in globular clusters work (milone et al.) the SGB sometimes splits into two parallel branches reflecting two sub-populations with slightly different total $C+N+O$ abundance: at fixed He, the C+N+O affects opacity and shell-burning efficiency, producing a $\sim 0.1$ mag SGB split visible in HST UV-optical filters. NGC 1851 and M22 are textbook cases.

**Hertzsprung gap.** the rapid SGB transit at intermediate mass means that for clusters younger than $\sim 1$ Gyr the region between TO and RGB is observationally *underpopulated*. the apparent gap is not a physical absence of stars but a short crossing time imprinted on the stellar density along the isochrone.

operationally, the SGB is "where the rules change": below it the star is a MS object, above it a giant. its morphology encodes the SC limit physics, the degeneracy state at TO, and the age and chemistry mix of the cluster.

## see also
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
- [Main sequence on the CMD](../../02_Zettel/Theory/Main sequence on the CMD.md)
- [Main sequence turn-off as age indicator](../../02_Zettel/Theory/Main sequence turn-off as age indicator.md)
- [Red giant branch RGB](../../02_Zettel/Theory/Red giant branch RGB.md)
- [Stellar evolutionary phases on the CMD](../../02_Zettel/Theory/Stellar evolutionary phases on the CMD.md)
- Multiple populations in globular clusters
