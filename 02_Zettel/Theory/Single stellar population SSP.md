---
layout: default
title: "Single stellar population SSP"
---

a **single stellar population (SSP)** is an idealised group of stars all formed at the same time, from the same gas, with the same composition. it is the **fundamental Lego brick** of stellar population synthesis: any complex galaxy SED can be built up as a weighted sum of SSP SEDs.

## the definition

an SSP is characterised by exactly three numbers:
- **age** $\tau$.
- **metallicity** $Z$ (or $[Fe/H]$).
- **initial mass function** $\xi(M)$.

given these, every other property of the SSP at any subsequent time is in principle predicted: the HR diagram, the integrated SED, the colors, the line indices.

## construction of the SSP SED

at age $\tau$ with mass $M_*$ formed at $\tau = 0$:
$$f_\lambda^{\rm SSP}(\tau) = \frac{M_*}{1\,M_\odot}\int_{M_{\rm low}}^{M_{\rm high}} \xi(M)\, f_\lambda^{\rm star}(M, Z, \tau)\, dM$$

where $f_\lambda^{\rm star}(M, Z, \tau)$ is the SED of a single star of initial mass $M$, metallicity $Z$, at age $\tau$.

the integration limits change with age: only stars that are still alive contribute. as $\tau$ increases:
- high-mass stars die first, removing the UV-bright contribution.
- the SSP becomes redder, dimmer, and develops a stronger giant branch.

## evolution with age

how an SSP looks at different ages (for solar metallicity, Chabrier IMF):

| $\tau$ | dominant contributors | SED character | example |
|---|---|---|---|
| $1$ Myr | O + B stars on MS | UV-bright continuum, hot $\sim 30\,000$ K | a young HII region |
| $10$ Myr | O stars dying, B + A on MS | UV peak with WR features | post-burst starburst |
| $100$ Myr | A + F stars on MS, RSG | Balmer break developing | post-starburst |
| $1$ Gyr | F + G stars + RGB | optical-peaked, $4000$ Å break | intermediate-age population |
| $10$ Gyr | K + M giants, RGB, HB | red, deep $4000$ Å break | globular cluster, elliptical |

## key spectral features

- **$4000$ Å break** ($D_n4000$): the discontinuity at $4000$ Å due to ionised metal absorption in cool stellar atmospheres. weak in young populations, strong in old.
- **Balmer break** ($H\alpha$ and $H\beta$ absorption): strongest at intermediate age ($\sim 0.5$ to $1$ Gyr) where A stars dominate.
- **CaII H + K** at $3934$, $3968$ Å: cool-star absorption.
- **MgI b** at $5174$ Å: cool-star feature, sensitive to metallicity.

these are the ingredients of **Lick indices** for SSP age and metallicity diagnostics.

## the integrated luminosity

$$L^{\rm SSP}(\tau) = \int f_\lambda^{\rm SSP}(\tau)\,d\lambda$$

as a fraction of formed mass:
- $\tau = 1$ Myr: $L^{\rm SSP}/M_* \sim 100\,L_\odot/M_\odot$ (UV-luminous).
- $\tau = 10$ Gyr: $L^{\rm SSP}/M_* \sim 1\,L_\odot/M_\odot$.

the **mass-to-light ratio** $\Upsilon \equiv M_*/L_*$ thus increases by $\sim 100\times$ over $10$ Gyr.

## the K-band advantage

in the K-band, $\Upsilon_K(\tau)$ varies by only $\sim 30\%$ over the relevant age range $1$ to $10$ Gyr. K-band is therefore the **least age-dependent tracer of stellar mass**, central to extragalactic stellar-mass measurements (see [Stellar mass estimation in unresolved populations](../../02_Zettel/Theory/Stellar mass estimation in unresolved populations.md)).

## SSPs as building blocks

any composite stellar population (CSP) is
$$f_\lambda^{\rm CSP}(t) = \int_0^t \psi(t')\, f_\lambda^{\rm SSP}(t - t', Z(t'))\, dt'$$

with $\psi(t')$ the star formation history and $Z(t')$ the chemical evolution. so all the complicated machinery of stellar population synthesis reduces to: pick an SFH + chemical evolution, weight a library of SSPs, sum.

## see also

- [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.md)
- [SPS code families](../../02_Zettel/Theory/SPS code families.md)
- [Initial mass function](../../02_Zettel/Theory/Initial mass function.md)
- [Stellar populations I II III](../../02_Zettel/Theory/Stellar populations I II III.md)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.md)
- [Lick indices](../../02_Zettel/Theory/Lick indices.md)
- [Age-metallicity degeneracy](../../02_Zettel/Theory/Age-metallicity degeneracy.md)
- [Star formation history of a population](../../02_Zettel/Theory/Star formation history of a population.md)
- [Mass-luminosity relation](../../02_Zettel/Theory/Mass-luminosity relation.md)
