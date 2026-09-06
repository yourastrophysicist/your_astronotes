---
layout: default
title: "Lyman alpha SFR tracer"
---

# Lyman alpha SFR tracer

up: [Pablo_03_Star_formation_in_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html)

## the line

Lyα at $\lambda = 1216$ Å is the $n = 2 \to 1$ Balmer-series recombination line of hydrogen. in case B, the intrinsic ratio is

$$\frac{L(\text{Ly}\alpha)}{L(\text{H}\alpha)} \simeq 8.7$$

so Lyα is nominally the brightest recombination line in a star-forming galaxy.

and because it shifts into the observed-frame optical for $z \gtrsim 2$, it is the workhorse line for detecting and selecting galaxies at high $z$: Lyman-alpha emitters (LAEs) from $z \sim 2$ out to the reionization epoch.

## the resonance-scattering problem

Lyα is a resonance transition: every neutral H atom along the sightline can absorb and re-emit it. so a Lyα photon does not travel in a straight line; it random-walks in frequency and space through the neutral HI in its host galaxy and the CGM.

consequences:

- the escape fraction $f_{\text{esc}}(\text{Ly}\alpha)$ ranges from $< 0.01$ (dusty, HI-rich) to $\sim 1$ (dust-poor, ionized channels)
- the *shape* of the line is heavily asymmetric, with the blue wing suppressed by HI outflow absorption and a red wing produced by scattering off outflowing gas (Verhamme 2008)
- the line is extremely sensitive to gas geometry, outflow kinematics, and dust content

so $L(\text{Ly}\alpha)$ alone is a *terrible* absolute SFR indicator. you get a factor-of-100 dynamic range in $L(\text{Ly}\alpha) / \text{SFR}_{\text{true}}$ across galaxy types.

## what it is good for

- **selection**: narrow-band imaging at a chosen redshift picks up LAEs efficiently. Lyα equivalent-width cuts (EW $> 20$ Å) find mostly young, low-dust, high-sSFR galaxies
- **reionization tracer**: the decline in Lyα visibility from $z = 5 \to 7$ maps the neutral fraction $x_{\text{HI}}$ of the IGM (Mason 2018, Endsley 2022)
- **kinematics**: asymmetry of the line profile probes outflow velocities

but you do *not* convert $L(\text{Ly}\alpha)$ into SFR directly unless you have independent handles on $f_{\text{esc}}$.

## calibration

assuming $f_{\text{esc}} = 1$ (optimistic):

$$\text{SFR}\;[M_\odot/\text{yr}] \simeq 9.1 \times 10^{-43}\, L(\text{Ly}\alpha)\;[\text{erg}/\text{s}]$$

which is just $L(\text{H}\alpha)$ calibration scaled by $1/8.7$. in reality, $f_{\text{esc}} = 0.05$–$0.3$ is more typical.

## connections

- recombination physics: [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.html)
- reionization: [Reionization](../../02_Zettel/Theory/Reionization.html) (block 9 of Observational Cosmology)
- extinction: [Dust attenuation and extinction curves](../../02_Zettel/Theory/Dust attenuation and extinction curves.html)
- other emission lines: [Other SFR tracer lines](../../02_Zettel/Theory/Other SFR tracer lines.html), [OII SFR tracer](../../02_Zettel/Theory/OII SFR tracer.html)

## key references

- Kennicutt 1998 ARAA
- Verhamme, Schaerer, Maselli 2006, 2008 (radiative transfer)
- Hayes 2015 (Lyα review)
- Mason et al. 2018 (reionization use)
