---
layout: "default"
title: "Source function"
---
{% raw %}
the **source function** $S_\nu$ is the ratio of emission to absorption coefficient at a given frequency:
$$\boxed{\, S_\nu \equiv j_\nu / \kappa_\nu \,}$$

it has units of intensity (erg s$^{-1}$ cm$^{-2}$ Hz$^{-1}$ sr$^{-1}$), and is the local "thermal" intensity that the gas would radiate if optically thick at that $\nu$. central in the radiative-transfer equation.

## why it appears

the radiative-transfer equation
$$\frac{dI_\nu}{d\tau_\nu} = -I_\nu + S_\nu$$
shows that the intensity relaxes toward $S_\nu$ as $\tau$ grows. equilibrium ($dI/d\tau = 0$): $I_\nu = S_\nu$.

so:
- **at deep optical depths** ($\tau \gg 1$): $I_\nu \approx S_\nu$, dominant emission.
- **near the surface** ($\tau \to 0$): the emergent $I_\nu$ approximately equals $S_\nu(\tau \approx 1)$ (Eddington-Barbier).

## the LTE limit

in **local thermodynamic equilibrium** (LTE), populations follow Boltzmann + Saha at the local $T$, and detailed balance enforces:
$$S_\nu^{\rm LTE} = B_\nu(T) = \frac{2h\nu^3}{c^2}\,\frac{1}{e^{h\nu/k_BT} - 1}$$

so in LTE, $S_\nu$ is the Planck function at the local temperature. this is the most-used assumption for stellar photospheres. valid where collisions are fast enough that populations relax to LTE.

## the non-LTE regime

in **non-LTE** (NLTE), populations don't track local $T$; they are set by the radiation field as well as collisions. then $S_\nu$ is **not** $B_\nu(T)$, and must be computed self-consistently with the populations:
$$S_\nu = \frac{2h\nu^3/c^2}{n_l g_u/(n_u g_l) - 1}$$
in terms of the populations of upper $u$ and lower $l$ levels of the line.

NLTE matters in:
- **stellar chromospheres and coronae** (radiation field decoupled from local $T$).
- **stellar winds** (photoexcitation dominates).
- **HII regions** (radiation rates dominate over collisions for many transitions).
- **galaxy emission lines** (photoionised, far from LTE).

at the cost of more computation, modern atmospheric codes (NLTE versions of TLUSTY, FASTWIND, MARCS-NLTE) solve $S_\nu$ self-consistently.

## scattering

if scattering dominates over absorption, $S_\nu$ is **not** $B_\nu$ even if collisions thermalise populations. for pure scattering:
$$S_\nu = J_\nu = \frac{1}{4\pi}\int I_\nu\,d\Omega$$
the mean intensity. scattering doesn't add or remove energy, just redirects.

partial scattering (continuum + line scattering both present) gives a mixed source function:
$$S_\nu = (1-\omega) B_\nu + \omega J_\nu$$
with $\omega$ the scattering fraction (albedo).

## see also

- [Equation of radiative transfer](./Equation%20of%20radiative%20transfer.html)
- [Optical depth](./Optical%20depth.html)
- [Local thermodynamic equilibrium LTE](./Local%20thermodynamic%20equilibrium%20LTE.html)
- [Eddington-Barbier approximation](./Eddington-Barbier%20approximation.html)
- [Stellar atmosphere structure](./Stellar%20atmosphere%20structure.html)
- [Continuum opacity sources](./Continuum%20opacity%20sources.html)
- [Boltzmann equation in spectroscopy](./Boltzmann%20equation%20in%20spectroscopy.html)
- [Saha ionisation equation](./Saha%20ionisation%20equation.html)
- [Statistical equilibrium equations](./Statistical%20equilibrium%20equations.html)
- [Two-level atom](./Two-level%20atom.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (11)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Continuum%20opacity%20sources.html" class="backlink-item">Continuum opacity sources</a></li>
    <li class="backlink-item-wrap"><a href="./Dilution%20factor.html" class="backlink-item">Dilution factor</a></li>
    <li class="backlink-item-wrap"><a href="./Eddington-Barbier%20approximation.html" class="backlink-item">Eddington-Barbier approximation</a></li>
    <li class="backlink-item-wrap"><a href="./Equation%20of%20radiative%20transfer.html" class="backlink-item">Equation of radiative transfer</a></li>
    <li class="backlink-item-wrap"><a href="./Limb%20darkening.html" class="backlink-item">Limb darkening</a></li>
    <li class="backlink-item-wrap"><a href="./Local%20thermodynamic%20equilibrium%20LTE.html" class="backlink-item">Local thermodynamic equilibrium LTE</a></li>
    <li class="backlink-item-wrap"><a href="./Optical%20depth.html" class="backlink-item">Optical depth</a></li>
    <li class="backlink-item-wrap"><a href="./Statistical%20equilibrium%20equations.html" class="backlink-item">Statistical equilibrium equations</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20atmosphere%20structure.html" class="backlink-item">Stellar atmosphere structure</a></li>
    <li class="backlink-item-wrap"><a href="./Thermal%20continuum%20from%20stellar%20photosphere.html" class="backlink-item">Thermal continuum from stellar photosphere</a></li>
  </ul>
</div>
