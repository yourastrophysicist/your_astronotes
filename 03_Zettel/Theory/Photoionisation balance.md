---
layout: "default"
title: "Photoionisation balance"
---
{% raw %}
the steady-state ionisation fraction of an element in a photoionised gas is set by **balance** between photoionisations (and possibly collisional ionisations) entering an ionisation stage and recombinations leaving it. central to nebular astrophysics.

## the equilibrium

for a single species $X$ with photoionisation rate $\Gamma$, recombination coefficient $\alpha$, and (often negligible) collisional ionisation rate $C$:
$$n_X^i\,\Gamma_i + n_X^i\,n_e\,C_i = n_X^{i+1}\,n_e\,\alpha_i$$

(rate of leaving stage $i$ = rate of entering stage $i$ from $i+1$).

ignoring $C$ (typical for HII regions at $T_e = 10^4$ K, far below the ionisation temperature):
$$\boxed{\, \frac{n_X^{i+1}}{n_X^i} = \frac{\Gamma_i}{n_e\,\alpha_i(T_e)} \,}$$

## qualitative features

- **high $\Gamma$**: more ionising photons, more atoms are ionised. ratio $\to$ high.
- **high $n_e$**: more recombinations, fewer atoms in the higher ionisation stage. ratio $\to$ low.
- **high $T_e$**: $\alpha$ decreases (slower electrons recombine more efficiently inverse), so ratio shifts toward higher ionisation.

so a **hotter, lower-density, well-illuminated** gas has higher ionisation. specifically:
$$\frac{n_X^{i+1}}{n_X^i} \propto \frac{\Gamma_i}{n_e}$$
the **ionisation parameter** $U \propto \Gamma/n_e$ controls the balance.

## the canonical HII region

for hydrogen at the centre of a Strömgren sphere around an O5 star ($Q_{H,\rm ion} \sim 10^{49}$ s$^{-1}$, $r \sim 1$ pc, $n_H \sim 100$ cm$^{-3}$):
- $\Gamma \sim 10^{-2}$ s$^{-1}$.
- recombination rate $\sim n_e \alpha \sim 10^2 \cdot 2.6 \times 10^{-13} \sim 3 \times 10^{-11}$ s$^{-1}$.

so $\Gamma / (n_e \alpha) \sim 10^9$, hugely in favour of ionisation. **only about 1 part in $10^9$ of hydrogen is neutral** in the bulk of the HII region. it's a fully ionised plasma except at the boundary.

## ionisation fronts

at the **boundary** of the Strömgren sphere, $\Gamma$ drops as the photon flux is consumed by recombinations interior. quantitatively, $\Gamma$ falls to zero at $r = R_S$ (Strömgren radius). the ionisation transitions from $\sim 100\%$ to $\sim 0\%$ over a thin shell:
$$\Delta r/R_S \sim 1/(n_H \sigma_{\rm bound-free} R_S)$$

very narrow ($\sim 10^{-3} R_S$), giving the **sharp Strömgren boundary**.

## ionisation stratification

in any extended ionised gas, **higher-ionisation species sit closer to the source**, **lower-ionisation species sit further out**. example for HII regions:
- **He III** (innermost): only where photons of $h\nu > 54.4$ eV can reach.
- **He II / O III / Ne III**: ionisation potentials $\sim 24$ to $35$ eV.
- **O II / N II / S III**: ionisation potentials $\sim 13$ to $20$ eV.
- **O I / S II / N I** at the boundary, where photons run out.

this is the **ionisation stratification** ([Ionisation stratification](./Ionisation%20stratification.html)).

## photoionisation codes

modern photoionisation codes (Cloudy, MAPPINGS V, MOCASSIN) solve the full ionisation balance for $\sim 30$ elements, $\sim 10$ ionisation stages each, plus thermal balance, line emission, dust, all self-consistently. the gold standard for nebular modelling.

## see also

- [Photoionization rate](./Photoionization%20rate.html)
- [Recombination rate](./Recombination%20rate.html)
- [Collisional ionisation rate](./Collisional%20ionisation%20rate.html)
- [Ionisation parameter U](./Ionisation%20parameter%20U.html)
- Strömgren sphere
- [Ionisation stratification](./Ionisation%20stratification.html)
- [Saha ionisation equation](./Saha%20ionisation%20equation.html) — LTE analogue
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (22)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./BPT%20diagram.html" class="backlink-item">BPT diagram</a></li>
    <li class="backlink-item-wrap"><a href="./Case%20A%20vs%20Case%20B%20recombination.html" class="backlink-item">Case A vs Case B recombination</a></li>
    <li class="backlink-item-wrap"><a href="./Collisional%20ionisation%20rate.html" class="backlink-item">Collisional ionisation rate</a></li>
    <li class="backlink-item-wrap"><a href="./Dilution%20factor.html" class="backlink-item">Dilution factor</a></li>
    <li class="backlink-item-wrap"><a href="./Equilibrium%20temperature.html" class="backlink-item">Equilibrium temperature</a></li>
    <li class="backlink-item-wrap"><a href="./H%20II%20region%20spectroscopy.html" class="backlink-item">H II region spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="./Heating%20rate%20in%20HII%20regions.html" class="backlink-item">Heating rate in HII regions</a></li>
    <li class="backlink-item-wrap"><a href="./Ionisation%20parameter%20U.html" class="backlink-item">Ionisation parameter U</a></li>
    <li class="backlink-item-wrap"><a href="./Ionisation%20parameter%20and%20ionisation%20state.html" class="backlink-item">Ionisation parameter and ionisation state</a></li>
    <li class="backlink-item-wrap"><a href="./Ionisation%20stratification.html" class="backlink-item">Ionisation stratification</a></li>
    <li class="backlink-item-wrap"><a href="./Lyman-alpha%20forest.html" class="backlink-item">Lyman-alpha forest</a></li>
    <li class="backlink-item-wrap"><a href="./Photodissociation%20regions%20PDRs.html" class="backlink-item">Photodissociation regions PDRs</a></li>
    <li class="backlink-item-wrap"><a href="./Photoionization%20rate.html" class="backlink-item">Photoionization rate</a></li>
    <li class="backlink-item-wrap"><a href="./Planetary%20nebula%20spectroscopy.html" class="backlink-item">Planetary nebula spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="./Recombination%20line%20emissivity.html" class="backlink-item">Recombination line emissivity</a></li>
    <li class="backlink-item-wrap"><a href="./Recombination%20rate.html" class="backlink-item">Recombination rate</a></li>
    <li class="backlink-item-wrap"><a href="./Saha%20ionisation%20equation.html" class="backlink-item">Saha ionisation equation</a></li>
    <li class="backlink-item-wrap"><a href="./Statistical%20equilibrium%20equations.html" class="backlink-item">Statistical equilibrium equations</a></li>
    <li class="backlink-item-wrap"><a href="./Stromgren%20sphere.html" class="backlink-item">Stromgren sphere</a></li>
    <li class="backlink-item-wrap"><a href="./Stromgren%20sphere%20derivation.html" class="backlink-item">Stromgren sphere derivation</a></li>
    <li class="backlink-item-wrap"><a href="./Supernova%20remnant%20spectroscopy.html" class="backlink-item">Supernova remnant spectroscopy</a></li>
  </ul>
</div>
