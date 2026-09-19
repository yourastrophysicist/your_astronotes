---
layout: "default"
title: "Ionisation parameter U"
---
the **ionisation parameter** $U$ is a dimensionless ratio of ionising photons to atoms, capturing the balance between photoionisation and recombination in a photoionised gas. determines the ionisation state of the gas via a single number.

## the definition

$$\boxed{\, U \equiv \frac{Q_{H,\rm ion}}{4\pi r^2 n_H c} \,}$$

with:
- $Q_{H,\rm ion}$ = ionising-photon production rate of the source (s$^{-1}$).
- $r$ = distance from source.
- $n_H$ = total hydrogen density.
- $c$ = speed of light.

equivalently, $U = $ photon density / atom density. dimensionless.

## interpretation

$U$ measures how many ionising photons are available per H atom in the gas. since each atom is ionised by absorbing one photon, $U$ controls the ionisation rate **per atom** vs the local density:
$$\Gamma/n_e \propto U \cdot c$$

so high $U$ = high ionisation rate per atom = highly ionised gas.

## typical values

| environment | $\log U$ |
|---|---|
| diffuse ionised gas | $-4$ to $-3$ |
| HII regions | $-3$ to $-2$ |
| starburst galaxies | $-2.5$ to $-1.5$ |
| AGN narrow-line regions | $-2$ to $0$ |
| AGN broad-line regions | $0$ to $+1$ |

so $U$ spans $\sim 5$ orders of magnitude across astrophysical environments. AGN are typically more highly ionised than HII regions because their UV/X-ray luminosity is huge for a relatively small target (BLR clouds).

## the relation to ionisation stratification

within a single source, $U$ varies with distance:
$$U(r) = Q/(4\pi r^2 n_H c) \propto 1/r^2$$
so $U$ decreases outward. consequently, the ionisation state stratifies:
- inner region: high $U$, [OIII], He II, [Ne III] dominant.
- middle: $[OIII], [NII]$.
- outer: $[OII], [SII], [NI]$, neutral H.

this is **ionisation stratification** ([Ionisation stratification](Ionisation%20stratification.html)).

## how to measure $U$

$U$ is not directly observable but can be inferred from line ratios. canonical:
- **$[OIII]\,\lambda 5007/[OII]\,\lambda 3727$**: high-vs-low ionisation species of O. ratio increases monotonically with $U$.
- **He II $\lambda 4686$/H$\beta$**: tracer of very-high-energy photons (54 eV), enhanced at high $U$ from hard ionising sources.
- **$[NeV]/[NeIII]$**: same logic for Ne.

forms one axis of the BPT diagram (roughly orthogonal to abundance/metallicity).

## the role in galaxy spectroscopy

modern HII region modelling uses $U$ as a key parameter alongside metallicity. observed line ratios constrain both:
- $[OII] + [OIII])/H\beta$ (R23) traces metallicity, with a known degeneracy at $\log(O/H) \sim 8.0$.
- $[OIII]/[OII]$ traces $U$ (with a small metallicity dependence).

so a 2D plot of $R_{23}$ vs $[OIII]/[OII]$ separates metallicity and ionisation parameter, both important for stellar / galaxy evolution work.

## the dimensionless conversion

dimensionless $U$ relates to the dimensional **photoionisation rate per H atom**:
$$\Gamma_{\rm per\,atom} = c\,n_\gamma\,\bar\sigma \approx c\,(U \cdot n_H)\,\bar\sigma$$

so $U$ is essentially the dimensionless control parameter; $c$ and atomic constants enter only as overall normalisation.

## see also

- [Photoionization rate](Photoionization%20rate.html)
- [Recombination rate](Recombination%20rate.html)
- [Photoionisation balance](Photoionisation%20balance.html)
- [Ionisation stratification](Ionisation%20stratification.html)
- Strömgren sphere
- [BPT diagram](BPT%20diagram.html)
- [Forbidden line diagnostics](Forbidden%20line%20diagnostics.html)
- [H II region spectroscopy](H%20II%20region%20spectroscopy.html)
- [AGN spectroscopy](AGN%20spectroscopy.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (13)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="AGN%20spectroscopy.html" class="backlink-item">AGN spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="Collisional%20ionisation%20rate.html" class="backlink-item">Collisional ionisation rate</a></li>
    <li class="backlink-item-wrap"><a href="Equilibrium%20temperature.html" class="backlink-item">Equilibrium temperature</a></li>
    <li class="backlink-item-wrap"><a href="Heating%20rate%20in%20HII%20regions.html" class="backlink-item">Heating rate in HII regions</a></li>
    <li class="backlink-item-wrap"><a href="Ionisation%20parameter%20and%20ionisation%20state.html" class="backlink-item">Ionisation parameter and ionisation state</a></li>
    <li class="backlink-item-wrap"><a href="Ionisation%20stratification.html" class="backlink-item">Ionisation stratification</a></li>
    <li class="backlink-item-wrap"><a href="Photoionisation%20balance.html" class="backlink-item">Photoionisation balance</a></li>
    <li class="backlink-item-wrap"><a href="Photoionization%20rate.html" class="backlink-item">Photoionization rate</a></li>
    <li class="backlink-item-wrap"><a href="Recombination%20rate.html" class="backlink-item">Recombination rate</a></li>
    <li class="backlink-item-wrap"><a href="Spectroscopic%20ne%20diagnostics.html" class="backlink-item">Spectroscopic ne diagnostics</a></li>
    <li class="backlink-item-wrap"><a href="Stromgren%20sphere%20derivation.html" class="backlink-item">Stromgren sphere derivation</a></li>
    <li class="backlink-item-wrap"><a href="Stromgren%20sphere.html" class="backlink-item">Stromgren sphere</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

