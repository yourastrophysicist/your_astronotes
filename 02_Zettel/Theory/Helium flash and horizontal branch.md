---
layout: default
name: Helium flash and horizontal branch
description: degenerate triple-alpha ignition at the RGB tip and the resulting horizontal branch with the RR Lyrae instability strip
---

at the **RGB tip** the helium core has grown to $M_c \approx 0.475 \, M_\odot$ and the central temperature has climbed to $T_c \sim 10^8$ K, sufficient to ignite helium burning via the **triple-alpha** reaction
$$ 3\,{}^4\mathrm{He} \rightarrow {}^{12}\mathrm{C} + 2\gamma $$
with rate $\epsilon_{3\alpha} \propto \rho^2 T^{40}$ near $T \sim 10^8$ K. the core is *electron-degenerate*: pressure is set by $P_e(\rho)$ and is essentially independent of $T$. this decoupling makes ignition unstable.

**the helium flash.** in a non-degenerate core, a small temperature increase from energy release would expand and cool the core, switching the burning off (the standard self-regulating thermostat). in a degenerate core, $P$ does not respond to $T$ rising, so the core does *not* expand. instead, the temperature rises, $\epsilon_{3\alpha}$ rises with the steep $T^{40}$ scaling, more energy is released, $T$ rises further: a **thermal runaway**. peak nuclear luminosity in the off-centre flash zone reaches $L_\mathrm{flash} \sim 10^{10} \, L_\odot$ for a few seconds, comparable to the luminosity of an entire small galaxy. essentially none of this energy escapes to the surface: it is absorbed by lifting the core's degeneracy. once $T$ exceeds the local fermi temperature, $P$ becomes thermal again, the core expands, density drops, $\epsilon_{3\alpha}$ drops, and the runaway shuts off. the entire event is *non-violent at the surface* (no observable photometric signature in real time) because the ignition point is off-centre and the flash energy goes into core restructuring, not envelope ejection. multiple sub-flashes occur over $\sim 10^6$ yr as the burning front works inward to the centre.

the helium flash applies to stars with degenerate cores at He ignition, i.e. $M \lesssim 2.0 \, M_\odot$ (the precise upper limit is metallicity-dependent). more massive stars ignite He non-degenerately, smoothly, with no flash, and settle directly onto the red clump in the CMD.

**the horizontal branch.** post-flash the star settles into stable core-He burning with a thin H shell still active. the structure is now a $\sim 0.5 \, M_\odot$ He-burning core surrounded by a thin H-shell and an envelope of mass $M_\mathrm{env} = M_\star - M_c$. luminosity is set mostly by the core: $L_\mathrm{HB} \approx 50 \, L_\odot$ ($M_V \approx 0.5$), almost independent of envelope mass. this is the famous *flat HB luminosity at fixed $M_V$* used in distance work.

what *does* depend on envelope mass is the position in *temperature*. the HB is a near-horizontal locus on the CMD spanning $T_\mathrm{eff}$ from $\sim 5000$ K (red HB) up to $\sim 30000$ K (extreme blue HB or "EHB"). the rule is simple: at fixed core mass, larger envelopes give *cooler, redder* HB stars; thinner envelopes give *hotter, bluer* HB stars. envelope mass after the RGB tip is set by $M_\mathrm{env} = M_\mathrm{TO} - M_c - \Delta M_\mathrm{loss}$, where the RGB mass loss $\Delta M_\mathrm{loss}$ is the dominant variable (reimers wind, see [Red giant branch RGB](../../02_Zettel/Theory/Red giant branch RGB.md)). a star that loses $\sim 0.1 \, M_\odot$ on the RGB ends up red-HB; one that loses $\sim 0.25 \, M_\odot$ ends up blue-HB.

**HB morphology and the second-parameter problem.** at fixed $[\mathrm{Fe}/\mathrm{H}]$, globular clusters show a wide spread in HB morphology. metallicity is the *first parameter*: metal-rich GCs (M71, 47 Tuc) have red HBs/red clumps, while metal-poor GCs (M15, M92) have blue HBs. however, clusters with the same metallicity can have vastly different HB morphologies (e.g., the classic M3 vs. M13 or NGC 288 vs. NGC 362 pairs). this is the *second-parameter problem*.

Milone's lectures (specifically following Milone et al. 2014, MNRAS 439, 1588) divide horizontal branch parameters into:
1. **global parameters**: vary from cluster to cluster. the leading global second parameter is **age** (older GCs have bluer HBs at fixed $[{\rm Fe/H}]$), as shown by Dotter et al. (2010). cluster **mass** also acts as a global parameter affecting the blue extension of the HB (Recio-Blanco et al. 2006).
2. **non-global (internal) parameters**: vary star-to-star within a single cluster. the primary internal parameter is **helium abundance $Y$**, which is closely linked to the presence of [multiple populations](../../02_Zettel/Theory/Multiple populations in GCs discovery.md) (helium-enriched 2G stars have higher $T_{\rm eff}$ and populate the bluer parts of the HB).

to quantify HB morphology, Milone et al. (2014) introduced two pseudo-color metrics:
- **$L_1$ (Color distance)**: the color distance from the RGB to the reddest part of the HB.
- **$L_2$ (Color extension)**: the color extension of the HB itself.
based on $L_1$, clusters are classified into three groups: G1 (metal-rich, $[{\rm Fe/H}] > -1$), G2 ($L_1 < 0.4$, color distance is short, e.g., M3), and G3 ($L_1 > 0.4$, color distance is long, e.g., M13). analysis of $L_1$ shows that it does *not* correlate with the cluster absolute luminosity (mass), but it does *correlate strongly with age*, confirming that age is the dominant global second parameter. in contrast, $L_2$ does *not* correlate with metallicity but relates to internal helium spread $\Delta Y$.


**the RR Lyrae instability strip.** the HB crosses the classical instability strip at $T_\mathrm{eff} \approx 6500$ to $7300$ K (the strip itself runs nearly vertical in the CMD across HB, MS, and pre-MS). HB stars inside the strip pulsate radially in the fundamental mode (RRab, asymmetric light curves, periods $0.4$ to $1.0$ d) or first overtone (RRc, sinusoidal curves, periods $0.2$ to $0.5$ d). they obey a $PLZ$ relation $M_K = a \log P + b [\mathrm{Fe}/\mathrm{H}] + c$ that makes them excellent distance indicators within the milky way and to local-group galaxies. the strip is where the kappa-mechanism in the He$^+$ ionisation zone drives self-excited oscillations.

CMD signatures and uses. the HB is a well-defined horizontal feature near $M_V = 0.5$ that anchors the cluster's distance modulus once $[\mathrm{Fe}/\mathrm{H}]$ is known (calibration $M_V^\mathrm{HB} = 0.18 [\mathrm{Fe}/\mathrm{H}] + 0.85$ approximately). its colour distribution encodes RGB mass loss and helium content, and the RR Lyrae stars within the strip provide a fully independent distance via the $PLZ$ relation.

## see also
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
- [Red giant branch RGB](../../02_Zettel/Theory/Red giant branch RGB.md)
- [Asymptotic giant branch AGB](../../02_Zettel/Theory/Asymptotic giant branch AGB.md)
- Distance modulus from CMD
- [Stellar evolutionary phases on the CMD](../../02_Zettel/Theory/Stellar evolutionary phases on the CMD.md)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.md)
