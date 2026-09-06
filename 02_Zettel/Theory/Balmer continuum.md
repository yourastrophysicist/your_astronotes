---
layout: default
title: "Balmer continuum"
---

the **Balmer continuum** is the emission from radiative recombination to the $n = 2$ level of hydrogen, with photons emitted blueward of the **Balmer edge** at $3646$ Å. dominant nebular continuum source in the near-UV.

## the threshold

energy needed to photoionise H from $n = 2$:
$$\chi_2 = R_H/4 = 3.4\,\text{eV}$$
corresponding to a wavelength threshold of:
$$\lambda_{\rm Balmer\,edge} = 3646\,\text{Å}$$

photons with $\lambda < 3646$ Å (or $h\nu > 3.4$ eV) can ionise H from $n = 2$. the inverse (recombination to $n = 2$) produces continuum photons at $\lambda < 3646$ Å.

## emissivity

at frequency $\nu$ above the Balmer edge:
$$j_\nu^{\rm Balmer} = n_e n_p\,\alpha_2(T_e)\cdot\frac{h\nu}{k_BT_e}\,e^{-(h\nu - \chi_2)/k_BT_e}$$

(approximate.) decays exponentially above the edge.

## the Balmer jump

at $\lambda = 3646$ Å there's a discontinuity:
- **just blueward** ($\lambda < 3646$): continuum from recombination to $n = 2$ kicks in.
- **just redward** ($\lambda > 3646$): only continuum from recombination to $n \ge 3$ (Paschen and higher series).

the ratio between just-redward and just-blueward continuum levels is the **Balmer jump $D_{3646}$**:
$$D_{3646} \equiv F(\lambda > 3646)/F(\lambda < 3646)$$

depends on $T_e$ via the recombination coefficients. typical values:
- $T_e = 8000$ K: jump factor $\sim 1.5$.
- $T_e = 12\,000$ K: $\sim 1.8$.
- $T_e = 20\,000$ K: $\sim 2.2$.

so the Balmer jump is itself a **temperature diagnostic**, complementary to forbidden-line ratios.

## in stellar continua

stars also show a Balmer jump in their continuum, but for a different reason: the **bound-free opacity** of H from $n = 2$ kicks in below the edge. this affects the **emergent continuum** of A-type stars, producing the famous "Balmer jump" feature in continuous spectra.

quantitatively, the jump in stars is **negative** (continuum is smaller at $\lambda < 3646$ than at $\lambda > 3646$, because of extra opacity). this is opposite to the **positive** jump in nebular emission.

## the contributions to nebular UV continuum

the near-UV continuum of an HII region sits on top of multiple contributions:
1. **Balmer continuum** (recombination to $n = 2$).
2. **2-photon continuum** (Two-photon emission from $2s \to 1s$, see [Two-photon emission](../../02_Zettel/Theory/Two-photon emission.html)).
3. **Free-free** ([Bremsstrahlung](../../02_Zettel/Theory/Bremsstrahlung.html)) at the same wavelengths.

their sum is the **observed UV continuum** of the nebula. each has a different shape, so the SED encodes information about the gas conditions.

## see also

- [Recombination continuum](../../02_Zettel/Theory/Recombination continuum.html)
- [Two-photon emission](../../02_Zettel/Theory/Two-photon emission.html)
- [Bremsstrahlung](../../02_Zettel/Theory/Bremsstrahlung.html)
- [Free-free continuum](../../02_Zettel/Theory/Free-free continuum.html)
- [Hydrogen spectral series](../../02_Zettel/Theory/Hydrogen spectral series.html)
- [Optically thin recombination lines](../../02_Zettel/Theory/Optically thin recombination lines.html)
- [Continuum opacity sources](../../02_Zettel/Theory/Continuum opacity sources.html)
- [H II region spectroscopy](../../02_Zettel/Theory/H II region spectroscopy.html)
