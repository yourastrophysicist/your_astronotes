---
layout: default
title: "Recombination line emissivity"
---

a recombination line's flux per unit volume is set by the rate of recombinations into the upper level, weighted by the cascade probability that the recombining electron passes through the specific transition.

## the formula

$$\boxed{\, j_\nu = n_e\,n_{i+1}\,\alpha^{\rm eff}_{ul}(T_e)\,\frac{h\nu_{ul}}{4\pi}\,\phi(\nu) \,}$$

with:
- $n_e$ = electron density.
- $n_{i+1}$ = ion density (e.g. $n_p$ for hydrogenic).
- $\alpha^{\rm eff}_{ul}$ = effective recombination coefficient for the line (cm$^3$ s$^{-1}$).
- $\phi(\nu)$ = line profile function.

integrated over the line, the **integrated emissivity**:
$$\epsilon_{\rm line} = n_e\,n_{i+1}\,\alpha^{\rm eff}_{ul}\,h\nu_{ul}$$
units: erg cm$^{-3}$ s$^{-1}$.

## the $\alpha^{\rm eff}$ table

at $T_e = 10^4$ K, Case B (Storey & Hummer 1995):

| line | $\alpha^{\rm eff}$ (cm$^3$ s$^{-1}$) |
|---|---|
| H$\alpha$ | $1.17 \times 10^{-13}$ |
| H$\beta$ | $3.03 \times 10^{-14}$ |
| H$\gamma$ | $1.41 \times 10^{-14}$ |
| He I $\lambda 5876$ | $\sim 5 \times 10^{-14}$ (case-dependent) |
| He II $\lambda 4686$ | $\sim 5 \times 10^{-13}$ (case-dependent) |

these values **scale as $T_e^{-0.85}$** (mildly inverse), so are nearly $T$-independent at the $10\%$ level over $T_e = 5000$ to $20\,000$ K.

## H$\alpha$ luminosity from an HII region

for a roughly uniform HII region of volume $V$:
$$L(H\alpha) = j(H\alpha) \cdot 4\pi \cdot V = n_e n_p\,\alpha^{\rm eff}_{H\alpha}\,h\nu_{H\alpha}\,V$$

equivalently, in terms of the **ionising photon production rate** $Q_{H,\rm ion}$ that maintains the HII region in equilibrium:
$$L(H\alpha) = \frac{\alpha^{\rm eff}_{H\alpha}}{\alpha_B}\,Q_{H,\rm ion}\,h\nu_{H\alpha} \approx 0.45\,Q_{H,\rm ion}\,h\nu_{H\alpha}$$

so $L(H\alpha)$ is essentially proportional to the ionising-photon production rate. since this comes from massive young stars, $L(H\alpha)$ is a **calibrated SFR tracer**:
$$\text{SFR} \approx 7.9 \times 10^{-42}\,L(H\alpha)\,M_\odot/\text{yr}$$
(Kennicutt 1998).

## scaling with conditions

for $L({\rm line}) \propto n_e n_{i+1} V$:
- doubling density quadruples $L$ at fixed volume.
- so $L \propto N \cdot n_{\rm rms}$ where $N$ is the integrated ion column.

this is why **dense compact HII regions** (around O stars) have very high surface brightness, while **diffuse ionised gas** has much lower surface brightness despite covering large areas.

## emissivity vs ionising luminosity

since recombination rate $= n_e n_p \alpha_B$, equilibrium at steady state requires this to balance the ionising-photon rate per unit volume. so:
$$Q_{H,\rm ion} = \int n_e n_p \alpha_B\,dV$$

each recombination produces **one Balmer photon** on average (about $0.45$ H$\alpha$ photons; the fraction varies with $T_e$). so HII regions are recombination-line "engines" that convert ionising photons (mostly UV) into Balmer-line photons (visible).

## see also

- [Optically thin recombination lines](../../02_Zettel/Theory/Optically thin recombination lines.md)
- [Case A vs Case B recombination](../../02_Zettel/Theory/Case A vs Case B recombination.md)
- [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.md)
- [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.md)
- [Hydrogen spectral series](../../02_Zettel/Theory/Hydrogen spectral series.md)
- Strömgren sphere
- [Recombination continuum](../../02_Zettel/Theory/Recombination continuum.md)
- [Photoionisation balance](../../02_Zettel/Theory/Photoionisation balance.md)
