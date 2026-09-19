---
layout: "default"
title: "Helium population vs T"
---
helium is harder to excite than hydrogen ($\chi_{HeI} = 24.6$ eV, $\chi_{HeII} = 54.4$ eV), so its line strengths peak at much higher temperatures. the He I and He II lines are the central diagnostics for OB stars.

## the setup

He has two ionisation potentials:
- $\chi_{\rm HeI} = 24.6$ eV (to make He$^+$).
- $\chi_{\rm HeII} = 54.4$ eV (to make He$^{2+}$).

Saha balance gives fractions $f_{\rm HeI}, f_{\rm HeII}, f_{\rm HeIII}$ of He in each stage at temperature $T$ and density $n_e$.

within each stage, Boltzmann gives level populations.

## He I line strength

He I lines come from excited levels of neutral He, e.g. $\lambda 4471$ from $4\,^3D \to 2\,^3P^o$. the lower level $2\,^3P$ is at $\sim 21$ eV above ground.

so in the line-forming layer, $f_{2\,^3P}(T) = f_{\rm HeI} \cdot e^{-21/k_BT} \cdot g_2/Z_{\rm HeI}$.

at low $T$: $e^{-21/k_BT}$ is tiny.
at high $T$ ($> 30\,000$ K): $f_{\rm HeI}$ drops as Saha ionises to He$^+$.

peak: $T \sim 22\,000$ K (B2 stars). quantitatively the maximum line strength of He I $\lambda 4471$ is in B2 V.

## He II line strength

He II lines (singly ionised, hydrogenic) come from levels of He$^+$, e.g. $\lambda 4686$ from $4 \to 3$.
- requires $\chi = 54$ eV photons to make He$^+$ in the first place.
- the higher levels of He$^+$ are at much higher energies (since $E \propto Z^2$, factor of $4$).

so He II lines peak at $T \sim 40\,000$ K (O5 stars).

## comparison with H I

| species | first appears | peak | disappears |
|---|---|---|---|
| H Balmer | F0 | A0 ($\sim 10\,000$ K) | mid-B (ionised) |
| He I | mid-B (~B5) | B2 ($\sim 22\,000$ K) | early O |
| He II | O8 | O5 ($\sim 40\,000$ K) | continues into Wolf-Rayet |

each species "passes the baton" to the next as $T$ increases, exactly because of the matching Saha + Boltzmann balance.

## thermometers in OB stars

since H is essentially fully ionised in OB stars (no Balmer to use), He I / He II line ratios become the temperature thermometers:
- B-star $T$: He I $\lambda 4471$ line strength.
- O-star $T$: He II $\lambda 4686$ / He I $\lambda 4471$.

a direct ratio bypasses the absolute Saha and gives $T$ from line ratios alone, much more robust.

## the user's plots

at `~/Documents/2/spectroscopy/Plots-20260501/`:
- `HeI_HeII_pop_T.png`: combined plot showing He I and He II vs $T$, peaks separated by factor $\sim 2$.
- `HeI_pop_T.png`: He I alone, bell curve peaked at $\sim 22\,000$ K.

both peaks have the characteristic Saha + Boltzmann shape: cold rise, hot fall.

## why para vs ortho doesn't matter for the curves

both singlet (para-) and triplet (ortho-) He I lines come from levels at similar $\sim 20$ eV excitation. their bell curves vs $T$ are essentially the same shape. orthohelium has a slightly more populated $2\,^3S$ level due to its triplet metastability, so He I $\lambda 5876$ (D3) is often slightly stronger than the singlet equivalent.

## see also

- [Boltzmann equation in spectroscopy](Boltzmann%20equation%20in%20spectroscopy.html)
- [Saha ionisation equation](Saha%20ionisation%20equation.html)
- [Helium energy levels](Helium%20energy%20levels.html)
- [Hydrogen population vs T](Hydrogen%20population%20vs%20T.html)
- [Population of excited levels](Population%20of%20excited%20levels.html)
- [Why the Sequence OBAFGKM](Why%20the%20Sequence%20OBAFGKM.html)
- [Stellar spectra and spectral classification](Stellar%20spectra%20and%20spectral%20classification.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Boltzmann%20equation%20in%20spectroscopy.html" class="backlink-item">Boltzmann equation in spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="Helium%20energy%20levels.html" class="backlink-item">Helium energy levels</a></li>
    <li class="backlink-item-wrap"><a href="History%20of%20stellar%20classification.html" class="backlink-item">History of stellar classification</a></li>
    <li class="backlink-item-wrap"><a href="Hydrogen%20population%20vs%20T.html" class="backlink-item">Hydrogen population vs T</a></li>
    <li class="backlink-item-wrap"><a href="Population%20of%20excited%20levels.html" class="backlink-item">Population of excited levels</a></li>
    <li class="backlink-item-wrap"><a href="Saha%20ionisation%20equation.html" class="backlink-item">Saha ionisation equation</a></li>
    <li class="backlink-item-wrap"><a href="Why%20the%20Sequence%20OBAFGKM.html" class="backlink-item">Why the Sequence OBAFGKM</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

