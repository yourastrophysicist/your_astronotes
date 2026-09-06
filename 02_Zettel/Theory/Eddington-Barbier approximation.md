---
layout: default
title: "Eddington-Barbier approximation"
---

a simple but powerful result for the **emergent intensity** from a stellar atmosphere: the photon you observe is emitted from the layer at optical depth $\tau \approx 1$ (more precisely, $\tau \approx 2/3$ for plane-parallel geometry).

## the statement

for a plane-parallel, semi-infinite atmosphere with linear source function $S_\nu(\tau) \approx a + b\tau$:
$$I_\nu(0, \mu) = a + b\mu = S_\nu(\tau = \mu)$$

where $\mu = \cos\theta$ is the cosine of the viewing angle. for vertical viewing ($\mu = 1$): emergent intensity is the source function at $\tau = 1$. averaged over the hemisphere of viewing angles, the result is $\tau = 2/3$.

so:
$$\boxed{\, I_\nu^{\rm emerg} \approx S_\nu(\tau \approx 1)\quad\text{(at LTE, $\approx B_\nu(T_{\rm photo}))$}\,}$$

## physical interpretation

photons from too-shallow layers ($\tau < 1$) escape too easily to "feel" the source function fully. photons from too-deep layers ($\tau > 1$) are reabsorbed before reaching the surface. the layer at $\tau \sim 1$ contributes the most because:
- it has accumulated enough emission to be bright,
- but is shallow enough for photons to escape.

equivalently: the **photosphere** is the layer at $\tau = 1$ in the wavelength of interest. light "comes from" the photosphere.

## what this does for spectroscopy

### continuum

at continuum wavelengths, $\tau_{\rm cont} = 1$ defines the **photospheric depth**. emergent flux is roughly $B_\nu(T_{\rm phot})$, where $T_{\rm phot}$ is the temperature at $\tau = 1$. the **effective temperature** $T_{\rm eff}$ is conventionally $T(\tau_{\rm Rosseland} = 2/3)$.

### inside an absorption line

at a line center, $\kappa_\nu$ is much larger (line + continuum opacity), so $\tau = 1$ shifts to a **shallower physical depth**. that layer is **cooler** than the continuum-forming layer. so $S_\nu(\tau = 1)$ is smaller, hence $I_\nu^{\rm emerg}$ is smaller. you see a dip.

so absorption lines are not "blocked light" but **light from a cooler layer** of the atmosphere. all the way to the line core, which probes the highest atmospheric layers.

### stellar inversion

by measuring the line shapes and using the Eddington-Barbier rule, one can **invert** the spectrum to get $T(\tau)$ throughout the photosphere. an essential method for Sun-as-a-star and abundance work.

## limb darkening

a key consequence: at the limb of a star ($\mu \to 0$), the line of sight enters the atmosphere obliquely; $\tau = 1$ is reached at a smaller geometric depth, where $T$ is lower. so the limb appears **darker** than the centre.

quantitatively, the linear law:
$$I_\nu(\mu) = I_\nu(1)\,(1 - u + u\mu)$$
with $u$ the limb-darkening coefficient ($\sim 0.5$ in the Sun's V-band).

see [Limb darkening](../../02_Zettel/Theory/Limb darkening.md).

## limitations

- **LTE assumed**: $S_\nu = B_\nu(T)$ only in LTE.
- **plane-parallel**: breaks for spherically extended atmospheres (cool giants).
- **linear $S_\nu(\tau)$**: only true near the surface. deeper, full RTE needed.

modern stellar-atmosphere codes (PHOENIX, MARCS, ATLAS9) bypass Eddington-Barbier and solve the full RTE numerically. but for analytic intuition and quick estimates, EB remains essential.

## see also

- [Equation of radiative transfer](../../02_Zettel/Theory/Equation of radiative transfer.md)
- [Optical depth](../../02_Zettel/Theory/Optical depth.md)
- [Source function](../../02_Zettel/Theory/Source function.md)
- [Local thermodynamic equilibrium LTE](../../02_Zettel/Theory/Local thermodynamic equilibrium LTE.md)
- [Limb darkening](../../02_Zettel/Theory/Limb darkening.md)
- [Stellar atmosphere structure](../../02_Zettel/Theory/Stellar atmosphere structure.md)
- [Continuum opacity sources](../../02_Zettel/Theory/Continuum opacity sources.md)
- [Bolometric correction and effective temperature](../../02_Zettel/Theory/Bolometric correction and effective temperature.md)
