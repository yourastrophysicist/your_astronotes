---
layout: "default"
title: "White dwarf cooling theory"
name: "White dwarf cooling theory"
description: "Mestel cooling and crystallisation as the basis of the WD age-luminosity relation"
---
{% raw %}
# white dwarf cooling theory

a white dwarf has no nuclear energy source. it is essentially a hot, degenerate ball of carbon and oxygen radiating away its residual thermal energy through a thin non-degenerate envelope. its evolution is therefore a **cooling process**: luminosity decreases monotonically and predictably with time, giving a strong age-luminosity relation that is the foundation of WD chronometry.

## mestel cooling

the simplest model, due to Mestel (1952), treats the degenerate interior as isothermal at temperature $T_c$ (because degenerate electron conduction makes the core a near-perfect heat conductor) and the thin non-degenerate envelope as a radiative atmosphere. the energy reservoir is the thermal energy of the **ions** (the electrons are degenerate, so their thermal contribution is suppressed):
$$U_{\rm ion} \simeq \frac{3}{2}\frac{M}{A m_H} k T_c.$$
the photon luminosity at the surface scales as $L \propto T_c^{7/2}/M$ in Mestel's original derivation (using a Kramers-like envelope opacity). combining $L = -dU/dt$ with this scaling gives the famous result
$$t_{\rm cool} \propto M\, L^{-5/7}.$$
that is, fainter WDs are older, with the cooling slowing dramatically as luminosity drops. roughly $t_{\rm cool} \sim 1$ Gyr at $L \sim 10^{-3} L_\odot$ and $\sim 10$ Gyr at $L \sim 10^{-4.5} L_\odot$.

## crystallisation and Debye cooling

at low enough temperatures the Coulomb coupling parameter $\Gamma = (Ze)^2/(a k T)$ exceeds $\Gamma \approx 175$ and the ion fluid freezes into a body-centred cubic crystal lattice. crystallisation:

- releases **latent heat** of fusion ($\sim k T$ per ion), producing a temporary plateau in the cooling rate when the freezing wave passes through the core.
- triggers **chemical separation**: oxygen, being heavier, sinks out of the C-O mixture as it solidifies, releasing additional gravitational energy.
- transitions the ions from a classical gas to a quantum solid; once $T \ll T_{\rm Debye}$ the ion specific heat drops as $T^3$ and cooling accelerates dramatically (Debye cooling).

these effects together leave fingerprints in the luminosity function of the WD cooling sequence: a pile-up where cooling slows, and a steep drop at the faint end where Debye cooling kicks in.

## why ages from the WDCS work

the cooling time at a given luminosity depends only on the WD mass, the core composition, and the well-understood physics of degenerate matter. metallicity affects the position of the cooling sequence in the CMD only weakly (in contrast with the [Color-magnitude diagrams of clusters](./Color-magnitude%20diagrams%20of%20clusters.html) main sequence, which depends strongly on Fe/H). simulated WDCS for ages of 10, 11.5, and 13 Gyr (Hansen et al. 2007) show clear sensitivity, with $\Delta(F606W) \sim 0.1$ mag/Gyr at old ages. see [Age dating from the WD luminosity function](./Age%20dating%20from%20the%20WD%20luminosity%20function.html) and [WDCS vs MSTO ages comparison](./WDCS%20vs%20MSTO%20ages%20comparison.html).

an important secondary effect: at low luminosity, dense H-rich atmospheres develop strong infrared opacity from H$_2$ collision-induced absorption, and the cooling sequence turns blue rather than continuing to redden. this is the [WDCS turn to blue and CIA](./WDCS%20turn%20to%20blue%20and%20CIA.html) phenomenon, and the position of the blue turn is itself an age indicator.

## see also
- [Age dating from the WD luminosity function](./Age%20dating%20from%20the%20WD%20luminosity%20function.html)
- [White dwarf mass-radius relation](./White%20dwarf%20mass-radius%20relation.html)
- [WDCS turn to blue and CIA](./WDCS%20turn%20to%20blue%20and%20CIA.html)
- [WDCS vs MSTO ages comparison](./WDCS%20vs%20MSTO%20ages%20comparison.html)
- [White dwarf overview](./White%20dwarf%20overview.html)
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Age%20dating%20from%20the%20WD%20luminosity%20function.html" class="backlink-item">Age dating from the WD luminosity function</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./WDCS%20turn%20to%20blue%20and%20CIA.html" class="backlink-item">WDCS turn to blue and CIA</a></li>
    <li class="backlink-item-wrap"><a href="./WDCS%20vs%20MSTO%20ages%20comparison.html" class="backlink-item">WDCS vs MSTO ages comparison</a></li>
    <li class="backlink-item-wrap"><a href="./White%20dwarf%20cooling%20sequence%20on%20the%20CMD.html" class="backlink-item">White dwarf cooling sequence on the CMD</a></li>
    <li class="backlink-item-wrap"><a href="./White%20dwarf%20mass-radius%20relation.html" class="backlink-item">White dwarf mass-radius relation</a></li>
    <li class="backlink-item-wrap"><a href="./White%20dwarf%20overview.html" class="backlink-item">White dwarf overview</a></li>
    <li class="backlink-item-wrap"><a href="./White%20dwarf%20types%20He%20CO%20ONeMg.html" class="backlink-item">White dwarf types He CO ONeMg</a></li>
  </ul>
</div>
