---
layout: "default"
title: "Quantum Efficiency in Astronomical Detectors"
---
# Quantum Efficiency in Astronomical Detectors

Quantum Efficiency ($QE(\lambda)$) is the fraction of incident photons at wavelength $\lambda$ converted into collected electrons stored in the potential well:
$$QE(\lambda) = \frac{N_{e^-}(\lambda)}{N_{\text{photons}}(\lambda)}$$

## Governing Physical Factors
1. **Surface Reflectivity $R(\lambda)$**: bare silicon has a refractive index $n \sim 3.5?4.0$, reflecting $30?50\%$ of incident optical photons. Anti-reflective (AR) coatings ($SiO_2, Si_3N_4, TiO_2$) optimize transmission for target passbands.
2. **Absorption Length $1/\alpha(\lambda)$**:
	- Blue/UV ($\,\sim 350?400\text{ nm}$): absorption length is extremely short ($< 0.1\, \mu\text{m}$).
	- Red/NIR ($\,\sim 800?1000\text{ nm}$): absorption length exceeds $50?100\, \mu\text{m}$, requiring thick silicon substrates to prevent photon leakage.
3. **Charge Collection Efficiency $\eta_{\text{coll}}$**: fraction of photo-generated electrons reaching the potential well before recombination.

## Architecture Comparison
- **Front-Illuminated**: polysilicon gate electrodes absorb blue and UV light ($QE < 20\%$ at 400 nm; peak $QE \sim 50?60\%$ at 650 nm).
- **Back-Illuminated (Back-Thinned)**: substrate etched down to $15?20\, \mu\text{m}$, eliminating gate absorption ($QE > 90\%$ across 450?750 nm).
- **Deep-Depletion CCDs**: high-resistivity silicon ($d \sim 50?100\, \mu\text{m}$) maximizing near-infrared $QE$ while suppressing interference fringing.

## Related Notes
- [[Piotto 04 - CCD Photometry and Noise Characterization]]
- [[CCD Readout Noise and Output Amplifier]]



## Linked References

- [[Astrophysics_Laboratory_2_MOC]]


