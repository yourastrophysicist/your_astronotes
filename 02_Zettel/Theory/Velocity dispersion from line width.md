---
layout: default
title: "Velocity dispersion from line width"
---

in unresolved stellar systems (galaxies, clusters), individual stars contribute to a single integrated spectrum. their bulk-motion distribution **broadens** every absorption (or emission) line by the **velocity dispersion** $\sigma_v$. measuring this broadening gives the dynamical mass of the system.

## the formula

an integrated spectrum has each line broadened by the convolution with a velocity-dispersion profile. for a Gaussian dispersion of width $\sigma_v$:
$$\Phi(\lambda) = \phi_{\rm intrinsic}(\lambda) * \mathcal G(\lambda; \sigma_v\lambda/c)$$

so each line in the integrated spectrum has FWHM:
$$\Delta\lambda_{\rm obs}^2 = \Delta\lambda_{\rm intrinsic}^2 + (\sigma_v \lambda/c)^2 \cdot 2\sqrt{2\ln 2}^2$$

equivalently, in velocity units:
$$\Delta v_{\rm obs}^2 = \Delta v_{\rm intrinsic}^2 + \sigma_v^2 \cdot (8\ln 2)$$

## extracting $\sigma_v$

procedure:
1. **fit lines** (or full spectrum via cross-correlation) for the observed FWHM.
2. **subtract** the intrinsic stellar line width (template stars) and instrumental broadening.
3. **leftover** is $\sigma_v$.

modern: **pPXF** (penalised pixel fitting, Cappellari & Emsellem 2004) fits the full spectrum simultaneously, recovering $\sigma_v$ with $\sim 5$ km/s precision for bright galaxies.

## typical values

| system | $\sigma_v$ (km/s) | dynamical mass |
|---|---|---|
| open cluster | $\sim 0.5$ to $2$ | $\sim 10^3\,M_\odot$ |
| globular cluster | $\sim 5$ to $20$ | $\sim 10^5$ to $10^6\,M_\odot$ |
| dwarf elliptical | $\sim 30$ to $70$ | $\sim 10^9\,M_\odot$ |
| giant elliptical | $\sim 200$ to $400$ | $\sim 10^{12}\,M_\odot$ |
| galaxy cluster | $\sim 1000$ | $\sim 10^{14}\,M_\odot$ |

so $\sigma_v$ scales roughly with $\sqrt{M}$ via the **virial theorem**.

## the virial mass

assuming gravitational binding:
$$M \sim \frac{R\,\sigma_v^2}{G}$$
with $R$ a characteristic size. for a standard ellipsoidal galaxy:
$$M = 5\,R_e\,\sigma_v^2/G$$
(approximate.)

so measuring $\sigma_v$ + $R_e$ from imaging gives **dynamical mass**.

## the Faber-Jackson and fundamental plane

elliptical galaxies follow the **Faber-Jackson** relation:
$$L \propto \sigma_v^4$$

which extends to the **fundamental plane**:
$$R_e \propto \sigma_v^{1.4}\,\langle I\rangle_e^{-0.9}$$

both projections of the underlying virial relation. used as galaxy distance indicators ([Fundamental plane of ellipticals](../../02_Zettel/Theory/Fundamental plane of ellipticals.md)).

## $M-\sigma$ relation for SMBHs

central black hole masses correlate with bulge velocity dispersion:
$$\log(M_{BH}/M_\odot) \approx 4.4\log(\sigma/200\,\text{km/s}) + 8.5$$

(Tremaine et al. 2002, McConnell & Ma 2013). so measuring $\sigma$ in galaxy bulges via spectroscopy gives SMBH mass to factor $\sim 2$. the **$M-\sigma$ relation** is a key constraint on co-evolution of BHs and bulges.

## limits

- **resolution**: $R \gtrsim 3000$ to resolve $\sigma_v \gtrsim 100$ km/s. high-$\sigma$ ellipticals OK; dwarfs and clusters need $R \gtrsim 10^4$.
- **template mismatch**: if the assumed stellar template doesn't match the actual stellar mix, $\sigma_v$ is biased.
- **rotation**: a rotating disk has bulk rotation that mimics part of $\sigma_v$. need spatially-resolved spectroscopy to separate rotation from random motions.

modern IFU (MUSE, MaNGA) maps $\sigma_v$ across galaxies, recovering both rotation and dispersion components for full kinematic models.

## see also

- [Stellar velocity from Doppler shift](../../02_Zettel/Theory/Stellar velocity from Doppler shift.md)
- [Stellar v sin i from line shape](../../02_Zettel/Theory/Stellar v sin i from line shape.md)
- [Rotational broadening](../../02_Zettel/Theory/Rotational broadening.md)
- [Macroturbulence](../../02_Zettel/Theory/Macroturbulence.md)
- [Calcium and CaII H+K](../../02_Zettel/Theory/Calcium and CaII H+K.md)
- [Fundamental plane of ellipticals](../../02_Zettel/Theory/Fundamental plane of ellipticals.md)
- [Tully-Fisher relation](../../02_Zettel/Theory/Tully-Fisher relation.md)
- [Magorrian relation](../../02_Zettel/Theory/Magorrian relation.md)
- [Integral-field spectroscopy IFU](../../02_Zettel/Theory/Integral-field spectroscopy IFU.md)
- [Galactic Center](../../02_Zettel/Theory/Galactic Center.md)
