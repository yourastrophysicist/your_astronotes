---
layout: "default"
title: "M sigma relation"
---
{% raw %}
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

- [Magorrian relation](./Magorrian%20relation.html)
- [Faber-Jackson relation](./Faber-Jackson%20relation.html)
- [Stellar dynamics SMBH masses](./Stellar%20dynamics%20SMBH%20masses.html)
- [Reverberation mapping](./Reverberation%20mapping.html)
- [Water maser BH masses](./Water%20maser%20BH%20masses.html)
- [AGN spectroscopy](./AGN%20spectroscopy.html)
- [Galactic Center Sgr A and S-stars](interf/Galactic%20Center%20Sgr%20A%20and%20S-stars.html)
- [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html)

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![ferrarese2000_Msigma.png](../../assets/images/ferrarese2000_Msigma.png)
*Discovery of the M_BH - sigma relation by Ferrarese & Merritt (2000).*

![ferrarese2000_Msigma_fig1.png](../../assets/images/ferrarese2000_Msigma_fig1.png)
*Tight correlation between black hole mass and stellar velocity dispersion sigma.*

![kormendy2013_Msigma.png](../../assets/images/kormendy2013_Msigma.png)
*Comprehensive M_BH - sigma relation for classical bulges and ellipticals (Kormendy & Ho 2013).*

![kormendy2013_ML.png](../../assets/images/kormendy2013_ML.png)
*M_BH vs bulge luminosity and stellar mass relation (Kormendy & Ho 2013).*

![mcconnell2013_Msigma.png](../../assets/images/mcconnell2013_Msigma.png)
*M_BH - sigma relation from McConnell & Ma (2013) spanning 10^5 to 10^10 M_Sun.*

![mcconnell2013_ML.png](../../assets/images/mcconnell2013_ML.png)
*M_BH vs bulge mass from McConnell & Ma (2013).*

![saglia2016_Msigma.png](../../assets/images/saglia2016_Msigma.png)
*Saglia et al. (2016) calibration of M_BH - sigma across classical bulges vs pseudobulges.*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_bh-59.png](../../assets/images/gal_bh-59.png)

![gal_bh-60.png](../../assets/images/gal_bh-60.png)

![gal_bh-61.png](../../assets/images/gal_bh-61.png)

![gal_bh-62.png](../../assets/images/gal_bh-62.png)

![gal_bh-63.png](../../assets/images/gal_bh-63.png)

![gal_bh-64.png](../../assets/images/gal_bh-64.png)

![gal_bh-65.png](../../assets/images/gal_bh-65.png)

![gal_bh-66.png](../../assets/images/gal_bh-66.png)

![gal_bh-67.png](../../assets/images/gal_bh-67.png)

![gal_bh-68.png](../../assets/images/gal_bh-68.png)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Faber-Jackson%20relation.html" class="backlink-item">Faber-Jackson relation</a></li>
    <li class="backlink-item-wrap"><a href="./LOSVD.html" class="backlink-item">LOSVD</a></li>
    <li class="backlink-item-wrap"><a href="./Reverberation%20mapping.html" class="backlink-item">Reverberation mapping</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20dynamics%20SMBH%20masses.html" class="backlink-item">Stellar dynamics SMBH masses</a></li>
    <li class="backlink-item-wrap"><a href="./Water%20maser%20BH%20masses.html" class="backlink-item">Water maser BH masses</a></li>
  </ul>
</div>
