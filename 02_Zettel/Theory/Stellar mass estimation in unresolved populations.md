---
layout: default
title: "Stellar mass estimation in unresolved populations"
---

stellar mass is one of the most fundamental galaxy properties, but in unresolved populations only the integrated light is observable. the inferred mass depends on the assumed mass-to-light ratio $\Upsilon_X$ in some band $X$. answer to `obs7.pdf`.

## the basic relation

for a galaxy at distance $d$ with apparent magnitude $m_X$:
$$\log_{10}(M_*/M_\odot) = \log_{10}(\Upsilon_X) + 0.4(M_{X,\odot} - M_X)$$

with $M_X = m_X - \mu - K_X(z)$ the absolute magnitude in band $X$ (corrected for distance modulus and K-correction). $\Upsilon_X$ depends on the SFH, age, IMF, and metallicity of the population.

## why K-band is preferred

$\Upsilon_K(\tau)$ is the **most stable** mass-to-light ratio over a wide range of ages:
- $\Upsilon_K \approx 0.5$ to $1.0$ across $1$ Gyr to $13$ Gyr.
- $\Upsilon_V$ varies by factor $\sim 5$ over the same range.

physically: K-band traces lower-mass MS + giant stars, whose contribution to total luminosity is roughly proportional to total mass once a population is older than $\sim 1$ Gyr.

so: **multi-band photometry plus a K-band data point gives a robust mass estimate** even with weak SFH constraints.

## "formed mass" vs "currently locked mass"

a subtle but important distinction:
- **formed mass** $M_*^{\rm form}$: total mass ever turned into stars over the galaxy's history.
- **currently locked mass** $M_*^{\rm now}$: mass currently in stars + stellar remnants.

stellar mass loss (winds, supernovae) returns gas to the ISM. the **mass return fraction** is $\sim 30$ to $50\%$ over $10$ Gyr (depending on IMF). so:
$$M_*^{\rm now} \approx 0.5\,M_*^{\rm form}$$

published "stellar masses" can refer to either; **always check the convention** when comparing studies.

## modern SED-fitting approach

instead of using a single $\Upsilon$ assumption, fit the multi-band SED with an SPS model and recover $M_*$ as a derived parameter:
$$M_* = M_*^{\rm form}\quad\text{or}\quad M_*^{\rm now}\quad\text{(set by code convention)}$$

Bayesian fitters (Prospector, BAGPIPES) marginalise over (SFH, $Z$, $A_V$, IMF prior), giving a $1\sigma$ posterior of typically $\sim 0.1$ to $0.3$ dex.

key codes:
- **FAST**: $\chi^2$-grid fit using BC03, fast and standard.
- **MAGPHYS**: panchromatic, energy-balance, BC03 + da Cunha 2008.
- **CIGALE**: multi-component (stellar + dust + AGN), grid-based.
- **Prospector**: full Bayesian, FSPS-based.
- **BAGPIPES**: Bayesian, BC03 + nebular emission.

## key caveats

- **IMF**: $M_*$ scales linearly with the assumed IMF. Salpeter gives $\sim 1.6\times$ the mass of Chabrier for the same SED. always state the IMF.
- **SFH parametrisation**: rigid (delayed-$\tau$) vs flexible (non-parametric) priors give different $M_*$ for the same data, sometimes by $\sim 0.2$ dex.
- **dust attenuation law**: Calzetti vs Charlot-Fall vs SMC differ for galaxies at high $z$.
- **age-metallicity degeneracy**: weakly affects $M_*$ but propagates into derived ages.

## the consistency check

at fixed redshift, integrating the **stellar mass function** over all galaxies should match the **time integral of the cosmic SFR** modulo mass return. modern Herschel + ALMA + SDSS data confirm this at the $\sim 30\%$ level (Madau-Dickinson 2014). lingering discrepancies at high $z$ (cosmic noon and earlier) are an active research topic.

## see also

- [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.html)
- [SED fitting basics](../../02_Zettel/Theory/SED fitting basics.html)
- [Single stellar population SSP](../../02_Zettel/Theory/Single stellar population SSP.html)
- [Mass-luminosity relation](../../02_Zettel/Theory/Mass-luminosity relation.html)
- [SPS code families](../../02_Zettel/Theory/SPS code families.html)
- [Initial mass function](../../02_Zettel/Theory/Initial mass function.html)
- [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.html)
- [Cosmic stellar mass density growth](../../02_Zettel/Theory/Cosmic stellar mass density growth.html)
- [Why hot massive stars dominate luminosity](../../02_Zettel/Theory/Why hot massive stars dominate luminosity.html)
- [Age estimation in unresolved populations](../../02_Zettel/Theory/Age estimation in unresolved populations.html)
