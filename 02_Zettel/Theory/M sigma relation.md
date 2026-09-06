---
layout: default
title: "M sigma relation"
---

the **$M_{BH} - \sigma$ relation** is one of the tightest scaling relations in galaxy astronomy: SMBH mass correlates with the stellar velocity dispersion of the host galaxy's bulge. evidence of co-evolution between SMBHs + galaxies.

## the relation

Tremaine 2002, refined by McConnell + Ma 2013:
$$\boxed{\, \log_{10}(M_{BH}/M_\odot) \approx 4.4\log_{10}(\sigma/200\,{\rm km/s}) + 8.5 \,}$$

so $M_{BH} \propto \sigma^{4.4}$. for $\sigma = 200$ km/s, $M_{BH} \sim 3 \times 10^8\,M_\odot$.

scatter: $\sim 0.3$ dex. very tight relative to the $\sim 7$ orders of magnitude in $M_{BH}$ across galaxies.

## the data

calibrated on $\sim 100$ nearby SMBHs with stellar dynamical (or maser) masses + measured $\sigma_*$ from longslit / IFU spectroscopy.

extends from MW ($M_{BH} = 4 \times 10^6\,M_\odot$, $\sigma = 105$ km/s) to giant cluster cD galaxies (M87, $M_{BH} = 6.5 \times 10^9\,M_\odot$, $\sigma = 350$ km/s).

## the implications

### co-evolution

SMBH growth is **tightly linked** to bulge growth. either:
- **AGN feedback regulates** bulge SF: as SMBH accretes, AGN winds heat the gas, suppressing further SF + setting the bulge mass.
- **mergers grow both** simultaneously: gas-rich mergers feed both BH + nuclear star formation.

most theoretical models invoke AGN feedback as the regulator. $M_{BH}-\sigma$ then emerges naturally from the energy/momentum balance.

### prediction power

with $\sigma_*$ measured from a single galaxy spectrum, $M_{BH}$ is predicted to factor $\sim 2$. used in:
- **AGN demographics**: estimate $M_{BH}$ for $\sim 10^5$ SDSS galaxies.
- **cosmological simulations**: BH growth tied to host bulge.
- **LISA predictions**: the SMBH merger rate at $z \sim 1$ to $5$.

## the pseudo-bulge exception

barred + late-type galaxies have **pseudo-bulges** (formed by secular evolution from the disk, not mergers). their SMBHs follow a **lower** $M_{BH}-\sigma$ relation than classical bulges, with offset $\sim 0.5$ dex.

interpretation: pseudo-bulges form differently; their SMBHs grew with less merger-driven activity.

## the M-σ vs Magorrian

related: the **Magorrian relation** $M_{BH}/M_{\rm bulge} \approx 0.001$. equivalent (since $M_{\rm bulge} \propto \sigma^4$ via Faber-Jackson) but with different scatter.

modern view: **$M-\sigma$ has tighter scatter** than $M-M_{\rm bulge}$. it's the more fundamental relation. velocity dispersion is a better predictor than bulge mass.

## the high-$z$ extension

at high $z$:
- $M_{BH}$ from single-epoch virial estimates of quasar broad lines.
- $\sigma$ from host-galaxy spectra (when separable from quasar light).
- relation **may evolve**: at $z \sim 6$, $M_{BH}/M_{\rm bulge}$ may be larger (BHs grow first?).

modern surveys (CEERS, JWST) starting to test this at $z = 4$ to $7$.

## the deeper question

why this tight relation? several possibilities:
1. **AGN feedback regulation**: kinetic + radiative feedback couples BH to bulge.
2. **gravitational mergers**: hierarchical assembly preserves the relation by central limit theorem.
3. **disc instability**: gas funnelling to BH triggered by violent disk instabilities, also forming bulge stars.

probably all three operate; modern simulations with feedback (IllustrisTNG, EAGLE, SIMBA) reproduce the relation.

## see also

- [Magorrian relation](../../02_Zettel/Theory/Magorrian relation.md)
- [Faber-Jackson relation](../../02_Zettel/Theory/Faber-Jackson relation.md)
- [Stellar dynamics SMBH masses](../../02_Zettel/Theory/Stellar dynamics SMBH masses.md)
- [Reverberation mapping](../../02_Zettel/Theory/Reverberation mapping.md)
- [Water maser BH masses](../../02_Zettel/Theory/Water maser BH masses.md)
- [AGN spectroscopy](../../02_Zettel/Theory/AGN spectroscopy.md)
- [Galactic Center Sgr A and S-stars](../../02_Zettel/Theory/interf/Galactic Center Sgr A and S-stars.md)
- [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.md)
