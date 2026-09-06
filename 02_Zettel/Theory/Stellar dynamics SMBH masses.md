---
layout: default
title: "Stellar dynamics SMBH masses"
---

**stellar dynamical** measurements of SMBH masses use the **enhanced central kinematics** (rising velocity dispersion) at small radii where the BH dominates the gravitational potential. requires high spatial resolution + careful modelling.

## the principle

within a galaxy's centre, the SMBH dominates gravity inside the **sphere of influence**:
$$r_{\rm soi} = \frac{GM_{BH}}{\sigma^2_*}$$

with $\sigma_*$ = stellar velocity dispersion outside $r_{\rm soi}$. for typical galaxies:
- **MW Sgr A$^\star$**: $r_{\rm soi} \sim 2$ pc.
- **M31**: $r_{\rm soi} \sim 5$ pc.
- **M87**: $r_{\rm soi} \sim 100$ pc.

inside $r_{\rm soi}$: stellar kinematics increase ($v + \sigma$ rise) due to the BH's gravity.

## the procedure

1. **observe central region** with high spatial resolution: HST imaging + IFU spectroscopy (MUSE, GMOS, NIFS at Gemini).
2. **measure stellar kinematics** $v(R), \sigma(R), h_3(R), h_4(R)$ inside + outside $r_{\rm soi}$.
3. **build dynamical models** (orbit superposition, Schwarzschild method, JAM): given trial $M_{BH} + M(r)_{\rm stellar}$ + DM halo, predict the kinematics.
4. **fit data**: vary $M_{BH}$ until the model matches observations.

precision: $\sim 0.2$ to $0.4$ dex in $M_{BH}$, dominated by modelling assumptions (orbit family, M/L profile).

## the requirements

**spatial resolution** inside $r_{\rm soi}$. for a typical extragalactic SMBH at distance $D$:
$$r_{\rm soi}/D \sim 0.1''\,\left(\frac{M_{BH}}{10^8\,M_\odot}\right)\!\left(\frac{D}{20\,{\rm Mpc}}\right)^{-1}$$

so HST + AO-corrected NIR IFUs are needed for distant + smaller SMBHs.

## the calibrators

stellar dynamical masses determined for $\sim 100$ nearby SMBHs:
- **M87** (NGC 4486): $M_{BH} = (6.5 \pm 0.7) \times 10^9\,M_\odot$, recently confirmed by EHT.
- **M31** (NGC 224): $M_{BH} = (1.4 \pm 0.3) \times 10^8\,M_\odot$.
- **M32**: $M_{BH} = 2.5 \times 10^6\,M_\odot$.
- **Sgr A$^\star$** in MW: $M_{BH} = 4.3 \times 10^6\,M_\odot$ from S-star orbits (the cleanest stellar dynamical measurement ever made, see [Galactic Center Sgr A and S-stars](../../02_Zettel/Theory/interf/Galactic Center Sgr A and S-stars.html)).

these calibrate the $M_{BH}-\sigma$ + $M_{BH}-M_{\rm bulge}$ (Magorrian) relations.

## the EHT cross-check

for M87 + Sgr A$^\star$, the **Event Horizon Telescope** ring measurements give $M_{BH}$ from the angular size of the photon sphere ($\sim 5GM_{BH}/c^2$).

EHT mass for M87: $M_{BH} = (6.5 \pm 0.7) \times 10^9\,M_\odot$. **identical** to stellar dynamical measurement. confirms both methods + validates GR predictions.

## comparison to other methods

| method | precision | range | notes |
|---|---|---|---|
| **stellar dynamics** | $\sim 0.2$ to $0.4$ dex | nearby galaxies ($\lesssim 50$ Mpc) | resolution-limited |
| **reverberation mapping** | $\sim 0.4$ dex | AGN at any $z$ | needs variability |
| **water maser** | $\sim 1\%$ | special edge-on disks | rare |
| **EHT shadow** | $\sim 5\%$ | Sgr A$^\star$ + M87 | only resolved BHs |
| **single-epoch virial** | $\sim 0.5$ dex | distant quasars | extrapolation of reverb |

so different methods cover different regimes; combined, give a unified SMBH mass scale.

## see also

- [Galactic Center Sgr A and S-stars](../../02_Zettel/Theory/interf/Galactic Center Sgr A and S-stars.html)
- [Reverberation mapping](../../02_Zettel/Theory/Reverberation mapping.html)
- [Water maser BH masses](../../02_Zettel/Theory/Water maser BH masses.html)
- [Magorrian relation](../../02_Zettel/Theory/Magorrian relation.html)
- [M sigma relation](../../02_Zettel/Theory/M sigma relation.html)
- [Stellar kinematics measurements](../../02_Zettel/Theory/Stellar kinematics measurements.html)
- [LOSVD](../../02_Zettel/Theory/LOSVD.html)
- [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.html)
