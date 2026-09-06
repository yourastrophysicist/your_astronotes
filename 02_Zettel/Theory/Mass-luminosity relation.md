---
layout: default
title: "Mass-luminosity relation"
---

on the main sequence, stellar luminosity is a steep function of stellar mass. the relation comes from stellar structure and is the central tool linking observable luminosity (via flux) to fundamental mass.

## the empirical relation

approximately:
$$L \propto M^\alpha$$
with the exponent depending on mass range:
- $M < 0.43\,M_\odot$ (low-mass M dwarfs): $\alpha \approx 2.3$.
- $0.43 < M/M_\odot < 2$: $\alpha \approx 4$.
- $2 < M/M_\odot < 20$: $\alpha \approx 3.5$.
- $M > 20\,M_\odot$ (massive stars): $\alpha \approx 1$ to $1.5$ (Eddington-limited).

a single power-law approximation across the mass range $0.1$ to $100\,M_\odot$:
$$L/L_\odot \approx (M/M_\odot)^{3.5}$$

so a $10\,M_\odot$ star is $\sim 3000\,L_\odot$, a $0.1\,M_\odot$ M dwarf is $\sim 0.001\,L_\odot$. **eight orders of magnitude in $L$ across the MS**.

## physical origin

from stellar structure equations:
- **hydrostatic equilibrium**: $dP/dr = -\rho g$. central pressure scales as $P_c \propto M^2/R^4$.
- **ideal gas**: $P = nkT$, so $T_c \propto M/R$.
- **radiative diffusion**: $L \propto T^4 R/(\kappa\rho)$, with opacity $\kappa$.

assuming Kramers' opacity $\kappa \propto \rho T^{-3.5}$ for typical ISM-composition gas, after some algebra:
$$L \propto \mu^7\, M^{5.5}/R^{0.5}$$
with $\mu$ the mean molecular weight. for the MS where $R$ varies weakly with $M$, $L \propto M^{4 \text{ to } 5}$ approximately, matching observations.

## main-sequence lifetime

luminosity scales as $M^{3.5}$ but available nuclear fuel scales as $M$:
$$\tau_{MS} \propto M/L \propto M^{-2.5}$$

with $\tau_\odot \approx 10$ Gyr:
$$\tau_{MS}(M) \approx 10\,\text{Gyr}\,(M/M_\odot)^{-2.5}$$

so:
- $0.5\,M_\odot$: $\tau \sim 60$ Gyr (longer than the universe; unobserved fully evolved).
- $1\,M_\odot$: $\tau \sim 10$ Gyr.
- $5\,M_\odot$: $\tau \sim 200$ Myr.
- $20\,M_\odot$: $\tau \sim 6$ Myr.
- $100\,M_\odot$: $\tau \sim 2$ Myr.

this is **why high-mass stars die fast**: $L$ rises faster than $M$ does. the most massive stars in any cluster set the cluster age by their absence.

## consequence for galaxy SEDs

an SSP after a burst:
- $\tau < 10$ Myr: dominated by O and B stars, $L \propto M^{3.5}$ weights the high-mass end strongly. UV-bright.
- $10$ to $100$ Myr: A-F stars on MS, OB stars now red supergiants briefly.
- $100$ Myr to $1$ Gyr: solar-type MS, K/M giants take over.
- $> 1$ Gyr: red giants and lower MS dominate, $L$ decays slowly.

the **mass-to-light ratio** $M/L$ thus increases with age: young SSPs are luminous per unit mass, old ones are dim. NIR (K-band) is the most stable tracer of stellar mass because $M/L_K$ is least age-dependent.

## see also

- [Stellar scaling relations](../../02_Zettel/Theory/Stellar scaling relations.md)
- [HR diagram](../../02_Zettel/Theory/HR diagram.md)
- [Stellar evolution timescales](../../02_Zettel/Theory/Stellar evolution timescales.md)
- [Initial mass function](../../02_Zettel/Theory/Initial mass function.md)
- [Why hot massive stars dominate luminosity](../../02_Zettel/Theory/Why hot massive stars dominate luminosity.md)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.md)
- [Cluster ages from CMD turnoff](../../02_Zettel/Theory/Cluster ages from CMD turnoff.md)
- [Planck law Wien Stefan-Boltzmann](../../02_Zettel/Theory/Planck law Wien Stefan-Boltzmann.md)
- [Stellar structure equations](../../02_Zettel/Theory/Stellar structure equations.md)
