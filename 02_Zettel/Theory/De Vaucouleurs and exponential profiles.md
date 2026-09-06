---
layout: default
title: "De Vaucouleurs and exponential profiles"
---

two **canonical surface-brightness profiles** in galaxy astronomy:
- **de Vaucouleurs $r^{1/4}$ law**: ellipticals + bulges.
- **exponential disk profile**: spiral disks.

both are special cases of the more general [Sersic profile](../../02_Zettel/Theory/Sersic profile.html).

## de Vaucouleurs $r^{1/4}$ profile

historical: Gérard de Vaucouleurs 1948 fit elliptical galaxies to:
$$\Sigma(r) = \Sigma_e\,\exp[-7.67((r/r_e)^{1/4} - 1)]$$

with $r_e$ the effective (half-light) radius.

equivalent Sérsic profile with $n = 4$, $b_4 = 7.67$.

key features:
- **smooth roll-over** at small $r$ (no central cusp at the resolution element).
- **very extended outer wings** falling slowly (fits the "halo" of bright ellipticals).
- **half the light within $r_e$** by definition.
- **most of the flux is in the bright core** (high concentration).

ellipticals + bulges of spirals fit this profile well over many decades in radius.

## exponential disk profile

galactic disks (Sa, Sb, Sc spirals) have:
$$\Sigma(r) = \Sigma_0\,e^{-r/h}$$

with $h$ the **scale length** (= $r_e/1.678$). encloses half the light at $1.678\,h$.

key features:
- **rapid decline** at large $r$.
- **flat central region** before exponential drop.
- **no extended halo** in the outermost parts.

equivalent Sérsic with $n = 1$.

## origin: exponential disks

physically motivated by **angular-momentum-conserving** dissipative collapse: gas collapses into a rotating disk + viscous + turbulent processes redistribute angular momentum, giving an exponential profile (Mestel 1963, Mo, Mao + White 1998). matches modern simulations.

## origin: $r^{1/4}$ ellipticals

physically motivated by **violent relaxation** during mergers (Lynden-Bell 1967). a system of stars subjected to rapid time-varying gravitational potentials reaches a equilibrium that's well-fit by $r^{1/4}$. confirmed in N-body simulations of galaxy mergers (Toomre 1977 +).

## the bulge-disk decomposition

most galaxies have **both** a bulge (de Vaucouleurs-like) + a disk (exponential). photometric fits use two-component models:
$$\Sigma(r) = \Sigma_b\,e^{-7.67((r/r_b)^{1/4} - 1)} + \Sigma_0\,e^{-r/h}$$

the **bulge-to-total ratio** $B/T = L_{\rm bulge}/L_{\rm tot}$ classifies along the Hubble sequence:
- $B/T \to 1$: pure bulge = elliptical.
- $B/T \sim 0.5$: Sa (large bulge, small disk).
- $B/T \sim 0.2$: Sb.
- $B/T \to 0$: pure disk = Sd, irregular.

modern: GALFIT, ProFit, photutils provide bulge-disk decompositions.

## the central question

whether ellipticals are *truly* $r^{1/4}$ or just **fitted approximately**: real ellipticals have:
- **cusps** in the very centre (resolved by HST).
- **shells + tidal features** at large radii (debris from past mergers).
- **deviations** at the few percent level from pure $r^{1/4}$.

modern Sérsic fits with $n$ as a free parameter give better fits, with $n$ varying from $\sim 3$ (faint ellipticals) to $\sim 10$ (cD galaxies).

## see also

- [Sersic profile](../../02_Zettel/Theory/Sersic profile.html)
- [Hubble morphological sequence](../../02_Zettel/Theory/Hubble morphological sequence.html)
- [Galaxy size-luminosity relation](../../02_Zettel/Theory/Galaxy size-luminosity relation.html)
- [CAS galaxy classification](../../02_Zettel/Theory/CAS galaxy classification.html)
- [Petrosian radius](../../02_Zettel/Theory/Petrosian radius.html)
- [Galaxy mergers and SF](../../02_Zettel/Theory/Galaxy mergers and SF.html)
- [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.html)
