---
layout: default
name: Red giant branch RGB
description: shell H burning above a degenerate He core, climbing the Hayashi limit to L ~ 2300 L_sun, with first dredge-up and the RGB bump
---

the **red giant branch** is the near-vertical, slightly red-leaning track that climbs from the base of the subgiant branch up to the **RGB tip** at $L \approx 2300 \, L_\odot$ and $T_\mathrm{eff} \sim 3500$ K. it is the longest, most luminous post-main-sequence phase in low-mass stellar evolution and the dominant feature of any old cluster CMD.

interior physics. the star has a thin H-burning shell on top of a growing **electron-degenerate** isothermal He core. the shell is geometrically thin ($\Delta r / r \sim 10^{-3}$) and very temperature-sensitive ($\epsilon \propto T^{15}$ via the CNO cycle). the core is supported by non-relativistic electron degeneracy pressure
$$ P_e \approx 1.0 \times 10^{13} \, (\rho/\mu_e)^{5/3} \, \mathrm{erg \, cm^{-3}} $$
which decouples $P$ from $T$ in the core. as shell-H burning dumps fresh He onto the core, the core mass $M_c$ grows; the core radius shrinks (degenerate equation of state $R \propto M^{-1/3}$); the temperature at the base of the H shell rises; the shell luminosity climbs steeply.

the famous **core mass-luminosity relation** (paczynski 1970, refsdal & weigert 1970) for shell-H-burning red giants is
$$ L \approx 2.4 \times 10^5 \, (M_c / M_\odot)^7 \, L_\odot $$
roughly. the steepness in $M_c$ means that a small change in core mass produces a large change in $L$, so the star climbs the RGB fast in $L$ but slowly in $M_c$. crucially, the relation is *almost independent of the total stellar mass and metallicity*, which makes the [TRGB tip of the red giant branch](../../02_Zettel/Theory/TRGB tip of the red giant branch.html) a near-universal standard candle.

envelope structure. the envelope is *almost entirely convective* and sits along the **Hayashi limit**, the locus of fully convective, hydrostatic stars in the cool-temperature region of the [HR diagram](../../02_Zettel/Theory/HR diagram.html). the hayashi limit at $T_\mathrm{eff} \sim 3500$ to $4000$ K depends weakly on mass and composition. as $L$ increases, the star can only stay along this limit by expanding ($R \propto L^{1/2}$), so the RGB is *steep in luminosity at nearly fixed $T_\mathrm{eff}$*: a near-vertical track in the CMD.

key features along the RGB:

**first dredge-up.** as the star ascends the RGB, the convective envelope deepens until it reaches layers that were previously processed by partial CNO burning during the MS. material with elevated $^{14}$N, lowered $^{12}$C, and altered $^{12}$C/$^{13}$C ratio is mixed to the surface. this is the *first dredge-up*. observable signatures: $[\mathrm{C}/\mathrm{N}]$ drops by $\sim 0.3$ dex, $^{12}\mathrm{C}/^{13}\mathrm{C}$ drops from the ISM value of $\sim 90$ to $\sim 25$, $\mathrm{Li}$ is destroyed by mixing with hot interior layers. observed in essentially all RGB stars and used to identify post-dredge-up status.

**RGB bump.** when the receding H-burning shell (which moves *outward in mass coordinate* as it consumes H) crosses the chemical discontinuity left at the maximum penetration depth of the first dredge-up, the abrupt drop in mean molecular weight at the shell's footing causes a small *temporary stalling* of the luminosity climb. stars accumulate briefly in this short-lived phase, producing an over-density on the RGB called the **bump**. its position in $V$ is age- and metallicity-sensitive ($V_\mathrm{bump}$ shifts $\sim 0.5$ mag dimmer per dex increase in $[\mathrm{Fe}/\mathrm{H}]$) and provides an independent age constraint distinct from the TO.

**RGB tip and helium ignition.** at the tip, $M_c \approx 0.48 \, M_\odot$ and the central temperature reaches $T \sim 10^8$ K, at which the triple-alpha process ignites *under degeneracy*. the core flashes: see [Helium flash and horizontal branch](../../02_Zettel/Theory/Helium flash and horizontal branch.html). the tip luminosity, $L_\mathrm{tip} \approx 2300 \, L_\odot$ ($M_I \approx -4.05$ at $[\mathrm{Fe}/\mathrm{H}] \sim -1.5$) is essentially fixed by the He-ignition core mass, with a weak metallicity dependence in $I$ band (the famous TRGB standard candle of lee et al. 1993 and freedman et al.).

**RGB slope and width as $[\mathrm{Fe}/\mathrm{H}]$ indicator.** at fixed age, more metal-rich RGBs are *redder and shallower in the colour-magnitude plane* because higher line opacity and lower $T_\mathrm{eff}$ shift colours rightward more than they shift magnitudes. the RGB slope, especially in $V-I$ versus $V$, is a robust photometric metallicity indicator (sarajedini et al. 1994; carretta et al.) for clusters out to $\sim 1$ Mpc.

**mass loss on the RGB.** stars lose $\Delta M \sim 0.1$ to $0.3 \, M_\odot$ on the upper RGB through the reimers wind (driven by chromospheric activity, $\dot M \propto L R / M$) before reaching the tip. this mass loss sets the envelope mass that the star carries onto the horizontal branch and therefore controls HB morphology.

## see also
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
- [Subgiant branch SGB](../../02_Zettel/Theory/Subgiant branch SGB.html)
- [Helium flash and horizontal branch](../../02_Zettel/Theory/Helium flash and horizontal branch.html)
- [TRGB tip of the red giant branch](../../02_Zettel/Theory/TRGB tip of the red giant branch.html)
- [Stellar evolutionary phases on the CMD](../../02_Zettel/Theory/Stellar evolutionary phases on the CMD.html)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html)
