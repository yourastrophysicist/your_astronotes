---
layout: "default"
title: "White dwarf mass-radius relation"
---
# white dwarf mass-radius relation

unlike normal stars, where bigger mass means bigger radius, white dwarfs obey an **inverse mass-radius relation**: more massive white dwarfs are smaller. this is one of the most distinctive consequences of electron degeneracy support and is essential for converting observed WD parameters (mass from spectroscopy, radius from photometry plus distance) into a consistent picture.

## non-relativistic limit

for non-relativistic degenerate electrons the equation of state is $P \propto \rho^{5/3}$. polytropic structure ($n = 3/2$) gives
$$R \propto M^{-1/3}.$$
qualitatively: doubling the mass squeezes the WD by a factor $2^{1/3} \approx 1.26$, raising the central density and the typical electron Fermi momentum. typical numbers: a $0.6\,M_\odot$ WD has $R \approx 0.012\,R_\odot$, while a $1.0\,M_\odot$ WD has $R \approx 0.008\,R_\odot$.

## relativistic correction and the Chandrasekhar limit

as the mass approaches the [Chandrasekhar mass limit](Chandrasekhar%20mass%20limit.html) $M_{\rm Ch} \approx 1.44\,M_\odot$, the electrons in the core become ultra-relativistic and the equation of state softens to $P \propto \rho^{4/3}$. the radius drops more steeply than $M^{-1/3}$ and goes to zero as $M \to M_{\rm Ch}$. so the full $R(M)$ curve has the form:

- $R \propto M^{-1/3}$ at low mass,
- $R \to 0$ at $M = M_{\rm Ch}$.

this divergence is what enforces the upper-mass cutoff: there is simply no equilibrium configuration above $M_{\rm Ch}$.

## composition dependence

the prefactor in the mass-radius relation depends on the mean molecular weight per electron, $\mu_e$:
$$R \propto \mu_e^{-5/3}\,M^{-1/3}\quad\text{(NR limit)}.$$
for fully ionised material, $\mu_e \approx A/Z \approx 2$ for both He and C-O and O-Ne-Mg. so He, CO, and ONeMg WDs lie close to the same curve. the curve is nearly independent of metallicity of the progenitor. this is one reason the [White dwarf cooling theory](White%20dwarf%20cooling%20theory.html) gives ages that don't suffer from the same age-metallicity degeneracy as the main-sequence turnoff.

## observational verification

the M-R relation is tested directly using:

- **eclipsing double-WD binaries**, where masses come from radial velocities and radii from light curves.
- **astrometric WDs in binaries** like Sirius B and Procyon B (visible at the bottom of HR diagrams, see ![L06_p11_white_dwarf_HRD-11.png](../../assets/images/L06_p11_white_dwarf_HRD-11.png)).
- **gravitational redshifts** of WD spectral lines: $\Delta v \propto GM/R c$ depends on the ratio $M/R$.

modern Gaia parallaxes plus spectroscopic gravities now test the M-R relation to high precision and have firmed up the relation across the full WD mass range.

## why it matters

- it sets the [Chandrasekhar mass limit](Chandrasekhar%20mass%20limit.html) as a structural limit.
- it determines the surface gravity, $\log g \sim 8$, which broadens spectral lines hugely and underpins [Spectroscopic determination of log g](Spectroscopic%20determination%20of%20log%20g.html) for WDs.
- it links measured cooling-sequence luminosity to the WD mass, which is what makes the WD cooling sequence a clean chronometer (see [Age dating from the WD luminosity function](Age%20dating%20from%20the%20WD%20luminosity%20function.html)).

## see also
- [Chandrasekhar mass limit](Chandrasekhar%20mass%20limit.html)
- [White dwarf overview](White%20dwarf%20overview.html)
- [White dwarf types He CO ONeMg](White%20dwarf%20types%20He%20CO%20ONeMg.html)
- [White dwarf cooling theory](White%20dwarf%20cooling%20theory.html)
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Chandrasekhar%20mass%20limit.html" class="backlink-item">Chandrasekhar mass limit</a></li>
    <li class="backlink-item-wrap"><a href="Initial-final%20mass%20relation%20IFMR.html" class="backlink-item">Initial-final mass relation IFMR</a></li>
    <li class="backlink-item-wrap"><a href="Spectroscopic%20determination%20of%20log%20g.html" class="backlink-item">Spectroscopic determination of log g</a></li>
    <li class="backlink-item-wrap"><a href="White%20dwarf%20cooling%20sequence%20on%20the%20CMD.html" class="backlink-item">White dwarf cooling sequence on the CMD</a></li>
    <li class="backlink-item-wrap"><a href="White%20dwarf%20cooling%20theory.html" class="backlink-item">White dwarf cooling theory</a></li>
    <li class="backlink-item-wrap"><a href="White%20dwarf%20overview.html" class="backlink-item">White dwarf overview</a></li>
    <li class="backlink-item-wrap"><a href="White%20dwarf%20types%20He%20CO%20ONeMg.html" class="backlink-item">White dwarf types He CO ONeMg</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
  </ul>
</div>

