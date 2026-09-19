---
layout: "default"
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
2. **2-photon continuum** (Two-photon emission from $2s \to 1s$, see [Two-photon emission](Two-photon%20emission.html)).
3. **Free-free** ([Bremsstrahlung](Bremsstrahlung.html)) at the same wavelengths.

their sum is the **observed UV continuum** of the nebula. each has a different shape, so the SED encodes information about the gas conditions.

## see also

- [Recombination continuum](Recombination%20continuum.html)
- [Two-photon emission](Two-photon%20emission.html)
- [Bremsstrahlung](Bremsstrahlung.html)
- [Free-free continuum](Free-free%20continuum.html)
- [Hydrogen spectral series](Hydrogen%20spectral%20series.html)
- [Optically thin recombination lines](Optically%20thin%20recombination%20lines.html)
- [Continuum opacity sources](Continuum%20opacity%20sources.html)
- [H II region spectroscopy](H%20II%20region%20spectroscopy.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Free-free%20continuum.html" class="backlink-item">Free-free continuum</a></li>
    <li class="backlink-item-wrap"><a href="Recombination%20continuum.html" class="backlink-item">Recombination continuum</a></li>
    <li class="backlink-item-wrap"><a href="Two-photon%20emission.html" class="backlink-item">Two-photon emission</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

