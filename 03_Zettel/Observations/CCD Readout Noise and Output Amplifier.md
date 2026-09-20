---
layout: "default"
title: "CCD Readout Noise and Output Amplifier"
---
# CCD Readout Noise and Output Amplifier

Readout noise (RON) is the irreducible electronic noise added to the pixel signal during charge-to-voltage conversion, on-chip amplification, and off-chip analog-to-digital processing.

## Physical Mechanism
1. Charge packets collected in a pixel well are shifted into the output sense node capacitance $C_g$.
2. The deposited charge $Q = q N_e$ generates a voltage drop:
$$\Delta V = \frac{q N_e}{C_g}$$
3. The sense node is buffered by an on-chip source follower Field Effect Transistor (FET).
4. Between pixel reads, a reset transistor switches on to restore $C_g$ to a reference voltage $V_{\text{ref}}$. This reset operation generates thermal Johnson-Nyquist noise (kTC noise):
$$\sigma_{\text{kTC}} = \frac{\sqrt{k_B T C_g}}{q} \sim 50 - 100\, e^-$$

## Correlated Double Sampling (CDS)
Astronomical CCD controllers eliminate kTC reset noise via Correlated Double Sampling:
- The sense node voltage $V_1$ is sampled immediately after the reset switch opens (measuring baseline plus reset noise).
- The pixel charge is clocked onto the sense node, and voltage $V_2$ is sampled.
- The output signal is the difference:
$$\Delta V_{\text{CDS}} = V_2 - V_1$$
Because kTC noise is identical in both samples, subtraction cancels it completely.

## Remaining Readout Noise Components
After CDS, residual readout noise consists of:
- **White Johnson Noise**: thermal channel noise in the output FET amplifier.
- **$1/f$ Flicker Noise**: low-frequency surface state trapping in the FET channel.
- **Off-chip Pre-amplifier Noise**: thermal and operational amplifier noise in external readout electronics.
- **ADC Quantization Noise**: rounding to integer ADU levels (variance $\sigma_q^2 = 1/12\text{ ADU}^2$).

Typical astronomical CCD readout noise ranges from $2\, e^-$ to $8\, e^-\text{ rms}$ per pixel, completely independent of exposure duration and illumination level.

## Related Notes
- [[CCD Dark Current and Thermal Generation]]
- [[Bias Frame and Electronic Offset]]
- [[Janesick Photon Transfer Method for Gain and Readout Noise]]
- [[Piotto 04 - CCD Photometry and Noise Characterization]]



## Linked References

- [[Bias Frame and Electronic Offset]]
- [[CCD Dark Current and Thermal Generation]]
- [[Janesick Photon Transfer Method for Gain and Readout Noise]]
- [[Quantum Efficiency in Astronomical Detectors]]
- [[Astrophysics_Laboratory_2_MOC]]


