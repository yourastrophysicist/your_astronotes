---
layout: default
name: Stellar rotation effects on CMD
description: how rotation modifies a star's position in the CMD via gravity darkening, rotational mixing, atmospheric oblateness, with broader effect on cluster TO morphology
---

stellar rotation is the most-overlooked physical effect in classical CMD analysis. for slow rotators ($v/v_{\rm crit} < 0.3$) it is negligible. for fast rotators ($v/v_{\rm crit} > 0.5$, common in B + early A stars), it shifts the star's position on the CMD by tenths of a magnitude in colour + magnitude. this matters for [eMSTO](../../02_Zettel/Theory/Extended main sequence turn-off eMSTO.html) interpretation + for the [split upper MS](../../02_Zettel/Theory/Splitting of the upper MS in young clusters.html) in young clusters.

## the four physical effects

### 1. gravity darkening (von Zeipel)

a rotating star is oblate. the equatorial radius $R_{\rm eq}$ exceeds the polar radius $R_p$ by a factor up to $\sim 1.5$ for $v/v_{\rm crit} \to 1$. centrifugal force reduces effective gravity at the equator. by the von Zeipel 1924 theorem (extended by Espinosa Lara & Rieutord 2011 for radiation):

$$T_{\rm eff}(\theta) \propto g_{\rm eff}(\theta)^{1/4}$$

so the equator is cooler than the pole. for $v/v_{\rm crit} = 0.9$ in a B-star: $T_{\rm eff,eq} \approx 0.7 \, T_{\rm eff,pol}$.

the integrated stellar SED depends on **inclination** $i$:
- pole-on ($i = 0$): bluer + brighter than non-rotating equivalent;
- equator-on ($i = 90^\circ$): redder + fainter.

the effect on CMD: a single rotating star can move along a vector $\sim$(0.05, 0.05) mag in (colour, magnitude) depending on $i$. for an isotropic distribution of inclinations, this broadens the MS by $\sim 0.05$-$0.1$ mag.

### 2. rotational mixing of the radiative envelope

rotation drives meridional circulation: warm material rises at the equator, cool material sinks at the pole. this transports unprocessed H from the radiative envelope to the convective core, replenishing the core-H supply.

consequences:
- core-H burning lifetime $\tau_{\rm MS}$ is extended by $\sim 20$-$30\%$ for $v/v_{\rm crit} = 0.5$;
- the MS turn-off shifts to higher $L$ + redder colour at fixed cluster age;
- the He/H ratio in the surface gradually rises as Y-rich core material mixes outward.

a rotation-broadened TO at fixed cluster age looks identical to an age spread of $\sim 200$-$500$ Myr (the Bastian & de Mink 2009 rotation-mimics-age argument).

### 3. atmospheric oblateness affects spectra + colours

the equatorial bulge gives the rotating star a non-spherical photosphere. line profiles are broadened by $v\sin i$, the projected rotation velocity:

$$\Delta\lambda \approx \frac{\lambda v\sin i}{c}$$

at $v\sin i \sim 200$ km/s, line broadening is $\sim 0.4$ Å in optical, blending nearby lines. this complicates EW measurements + abundance determinations (see [Stellar rotation v sini](../../02_Zettel/Theory/Stellar rotation v sini.html)).

### 4. He surface enrichment from mixing

prolonged rotational mixing slowly raises the surface He abundance. for $v/v_{\rm crit} = 0.5$ over $1$ Gyr, $\Delta Y$ at the surface can reach $\sim 0.02$-$0.05$. for fast rotators in young clusters, the He enhancement contributes to colour shifts (He-rich envelopes are more transparent to UV).

D'Antona et al. 2015 argued this connects rotation to the [He spread](../../02_Zettel/Theory/Helium spread in GCs.html) in old GCs: rotation today $\to$ surface He-rich tomorrow $\to$ helium-rich main-sequence stars persistent over Gyrs.

## the observable signatures

on a young cluster CMD, the combined effects produce:

1. **broadened MS turn-off** (eMSTO);
2. **bifurcated upper MS** if rotation distribution is bimodal (split upper MS);
3. **broadened RGB** at the He-burning level;
4. **systematic colour shifts** as a function of stellar mass.

for old GCs, magnetic braking has slowed most stars to $v < 50$ km/s, so direct rotation effects are weak. but the He variations imprinted in earlier epochs (when stars were B/A type) remain visible as the He spread on the chromosome map.

## when rotation matters most

- young clusters ($< 2$ Gyr) where MS stars are mostly B + A types with weak magnetic brakes;
- intermediate-age clusters ($1$-$2$ Gyr) at the eMSTO age range;
- the upper MS of any cluster where stars have $M > 1.4 M_\odot$ (no convective envelope to brake rotation magnetically).

old GCs MS stars ($M < 0.85 M_\odot$ at the TO) have convective envelopes, magnetic activity, and rotation has been braked to $v < 5$ km/s. rotation effects are minimal there.

## models that include rotation

- **Geneva models** (Ekström et al. 2012): comprehensive grid with rotation up to $v/v_{\rm crit} = 0.9$.
- **MIST/MESA** (Choi et al. 2016): rotating stellar evolution + isochrones.
- **PARSEC** v2.0 (Nguyen et al. 2022): rotation-aware isochrones.

these are now standard for fitting eMSTO + young cluster CMDs.

## reference papers

- **von Zeipel 1924** — gravity darkening theorem.
- **Espinosa Lara & Rieutord 2011** — modern $T_{\rm eff}(\theta)$ in radiating rotating stars.
- **Bastian & de Mink 2009, MNRAS 398, L11** — rotation as eMSTO origin.
- **Brandt & Huang 2015, ApJ 807, 24** — quantitative rotation grid for eMSTO modelling.
- **D'Antona et al. 2015, MNRAS 453, 2637** — rotation $\to$ He variation argument.
- **Milone et al. 2018, MNRAS 477, 2640** — observational identification of split upper MS in NGC 1755 + NGC 1850.
- **Marino et al. 2018, AJ 156, 116** — direct $v\sin i$ measurements separating slow + fast rotators.

## see also

- [Extended main sequence turn-off eMSTO](../../02_Zettel/Theory/Extended main sequence turn-off eMSTO.html)
- [Origin of eMSTO age spread or rotation](../../02_Zettel/Theory/Origin of eMSTO age spread or rotation.html)
- [Splitting of the upper MS in young clusters](../../02_Zettel/Theory/Splitting of the upper MS in young clusters.html)
- [eMSTO and multiple populations connection](../../02_Zettel/Theory/eMSTO and multiple populations connection.html)
- [Stellar rotation v sini](../../02_Zettel/Theory/Stellar rotation v sini.html)
- [Helium spread in GCs](../../02_Zettel/Theory/Helium spread in GCs.html)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
