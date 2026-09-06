---
layout: default
title: "Dust extinction in nebulae"
---

dust mixed into ionised gas absorbs and scatters emission-line photons. measuring it via line ratios lets us correct fluxes for the ISM along the line of sight. central to abundance work and SFR measurement.

## the standard method: Balmer decrement

intrinsic Balmer line ratios from Case-B recombination at $T_e = 10^4$ K (see [Optically thin recombination lines](../../02_Zettel/Theory/Optically thin recombination lines.html)):
$$F(H\alpha)/F(H\beta) = 2.86$$

the observed ratio is reddened by dust:
$$F(H\alpha)/F(H\beta)|_{\rm obs} = 2.86\cdot 10^{-0.4(A_{H\alpha} - A_{H\beta})}$$

with $A_\lambda = k(\lambda)\,E(B - V)$ for some attenuation law $k(\lambda)$. typical Calzetti or O'Donnell laws give $k(H\beta) - k(H\alpha) \approx 1.16$.

so:
$$E(B - V) = \frac{2.5}{1.16}\log_{10}\!\left[\frac{F(H\alpha)/F(H\beta)|_{\rm obs}}{2.86}\right]$$

## numerical example

observed $F(H\alpha)/F(H\beta) = 4.0$:
$$E(B-V) = 2.16\log_{10}(4.0/2.86) = 2.16 \cdot 0.146 = 0.316$$
$$A_V = R_V \cdot E(B-V) \approx 3.1 \cdot 0.316 \approx 0.98\,\text{mag}$$

so $\sim 1$ mag of $V$-band dust extinction. the H$\alpha$ flux is depressed by a factor $\sim 1.65$, the H$\beta$ flux by a factor $\sim 2.3$.

## correcting line fluxes

after measuring $E(B-V)$, every line is corrected:
$$F_\lambda^{\rm corr} = F_\lambda^{\rm obs} \cdot 10^{0.4 k(\lambda) E(B-V)}$$

with the appropriate attenuation law. before any abundance or SFR calculation, this correction is applied.

## the alternatives

other Balmer ratios give independent dust estimates:
- $H\alpha/H\gamma = 6.16$ (Case B). more sensitive but H$\gamma$ harder to measure.
- $H\alpha/H\delta = 11.0$. similar.

higher Balmer lines have larger $\Delta k(\lambda)$, hence more sensitive to dust, but are also fainter.

## dust attenuation laws

| law | environment | $R_V$ |
|---|---|---|
| Cardelli-Clayton-Mathis 1989 | Galactic ISM | $3.1$ |
| O'Donnell 1994 | Galactic ISM, slight refinement | $3.1$ |
| Calzetti 2000 | starburst galaxies (effective) | $4.05$ |
| Charlot & Fall 2000 | birth-cloud + diffuse | varies |
| SMC | low-metallicity dust | $\sim 2.7$ |
| LMC | intermediate | $\sim 3.4$ |

choice depends on the source. for HII regions, Galactic CCM/O'Donnell is appropriate. for starburst galaxies, Calzetti for the disk-integrated SED.

## differential extinction: stars vs nebulae

a key observation: in star-forming galaxies, **nebular extinction is roughly twice the continuum extinction**:
$$A_V^{\rm neb} \approx 2 \cdot A_V^*$$

physical reason: HII regions sit inside dense birth clouds with extra dust column. the continuum from older stars samples a less obscured stellar population.

modeled by Charlot & Fall 2000 with two attenuation components.

## see also

- [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.html)
- [Optically thin recombination lines](../../02_Zettel/Theory/Optically thin recombination lines.html)
- [Case A vs Case B recombination](../../02_Zettel/Theory/Case A vs Case B recombination.html)
- [Dust attenuation and extinction curves](../../02_Zettel/Theory/Dust attenuation and extinction curves.html)
- [Dust attenuation in synthetic populations](../../02_Zettel/Theory/Dust attenuation in synthetic populations.html)
- [Interstellar absorption](../../02_Zettel/Theory/Interstellar absorption.html)
- [Forbidden line diagnostics](../../02_Zettel/Theory/Forbidden line diagnostics.html)
- [H II region spectroscopy](../../02_Zettel/Theory/H II region spectroscopy.html)
- [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.html)
