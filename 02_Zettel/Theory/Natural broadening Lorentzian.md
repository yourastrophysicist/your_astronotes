---
layout: default
title: "Natural broadening Lorentzian"
---

**natural broadening** is the irreducible quantum-mechanical lower limit on a spectral line's width, set by the finite lifetime of the atomic states. always present, but often dominated by other broadening mechanisms.

## the source: finite lifetime

an excited state lives for a finite time $\Delta t \sim 1/A_{ul}$, where $A_{ul}$ is the spontaneous emission rate. by the energy-time uncertainty relation:
$$\Delta E \cdot \Delta t \gtrsim \hbar$$
gives a frequency width:
$$\Delta\nu \sim 1/(2\pi \Delta t) = A_{ul}/(2\pi)$$

so a state with shorter lifetime has a broader natural linewidth.

for typical permitted optical transitions, $A_{ul} \sim 10^7$ to $10^8$ s$^{-1}$, giving $\Delta\nu \sim 10^7$ Hz $\to$ $\Delta\lambda \sim 10^{-4}$ Å. very small.

## the resulting line shape: Lorentzian

quantum mechanics gives the natural line profile a **Lorentzian** shape:
$$\phi_{\rm nat}(\nu) = \frac{1}{\pi}\,\frac{\gamma_{\rm nat}/2}{(\nu - \nu_0)^2 + (\gamma_{\rm nat}/2)^2}$$

with the damping constant $\gamma_{\rm nat} = \sum_l A_{ul}$ (sum of all decay channels from the upper level + lifetime contribution from the lower level if it isn't the ground state).

FWHM = $\gamma_{\rm nat}$.

## key feature: $1/(\nu-\nu_0)^2$ wings

the most distinctive feature of the Lorentzian is its **slow-decay wings**. far from line center:
$$\phi(\nu) \propto \frac{1}{(\nu - \nu_0)^2}$$

this is much slower than a Gaussian's $e^{-(\nu-\nu_0)^2}$. so even though the natural width is tiny, the **wings extend** a long way in $\nu$.

this is why **damping wings** of saturated stellar lines (especially H$\alpha$, Ca II H + K) extend tens of Å on either side of the core. at high column density, the Doppler core saturates but the Lorentzian wings continue to absorb, producing the famous "damped" profiles in stellar atmospheres and Damped Lyman Alpha (DLA) absorbers.

## comparison with thermal broadening

at $T = 6000$ K, thermal Doppler width of an Fe line at $5000$ Å:
$$\Delta\lambda_D = \lambda \sqrt{2k_BT/m c^2} \sim 3 \times 10^{-2}\,\text{Å}$$

natural broadening: $\sim 10^{-4}$ Å. so **Doppler broadening dominates** by a factor $\sim 300$ at line center. natural broadening is detectable only in the line wings.

## natural + collisional = total Lorentzian

natural broadening always coexists with **collisional (pressure) broadening** ([Collisional pressure broadening](../../02_Zettel/Theory/Collisional pressure broadening.html)), which is also Lorentzian. the total damping constant is:
$$\Gamma_{\rm total} = \gamma_{\rm nat} + \gamma_{\rm coll}$$

at stellar densities, $\gamma_{\rm coll}$ usually exceeds $\gamma_{\rm nat}$ except for weak lines and tenuous regions. so observationally, "Lorentzian wings" usually mean collisional broadening + (small) natural contribution.

## see also

- [Line profile function phi nu](../../02_Zettel/Theory/Line profile function phi nu.html)
- [Voigt profile](../../02_Zettel/Theory/Voigt profile.html)
- [Thermal Doppler broadening](../../02_Zettel/Theory/Thermal Doppler broadening.html)
- [Collisional pressure broadening](../../02_Zettel/Theory/Collisional pressure broadening.html)
- [Damping wings](../../02_Zettel/Theory/Damping wings.html)
- [Curve of growth](../../02_Zettel/Theory/Curve of growth.html)
- [Absorption coefficient and oscillator strength](../../02_Zettel/Theory/Absorption coefficient and oscillator strength.html)
