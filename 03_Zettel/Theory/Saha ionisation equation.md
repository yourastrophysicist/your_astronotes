---
layout: "default"
title: "Saha ionisation equation"
---
the **Saha equation** gives the relative populations of two adjacent ionisation stages of the same element at thermal equilibrium. complement of [Boltzmann equation in spectroscopy](Boltzmann%20equation%20in%20spectroscopy.html) (which works within a single ionisation stage).

## the equation

$$\boxed{\, \frac{n_{i+1} n_e}{n_i} = \frac{2 g_{i+1}}{g_i}\,\left(\frac{2\pi m_e k_B T}{h^2}\right)^{3/2}\,e^{-\chi_i/k_BT} \,}$$

where:
- $n_i$ = number density of ions in stage $i$ (e.g. neutral, $i = 0$).
- $n_{i+1}$ = number density in next stage (singly ionised).
- $n_e$ = electron number density.
- $g_i, g_{i+1}$ = partition functions of each stage.
- $\chi_i$ = ionisation potential (energy to go from stage $i$ to $i+1$).
- factor of $2$ from electron spin degeneracy.
- $T$ = temperature.

units: with $\chi$ in erg, $T$ in K, $n$ in cm$^{-3}$. all quantities in cgs.

## what each term does

- $e^{-\chi/k_BT}$: Boltzmann factor for ionisation. exponentially small at low $T$, $\to 1$ at high $T$.
- $(2\pi m_e k_BT/h^2)^{3/2}$: thermal de Broglie volume of the electron, in inverse cm$^3$. quantifies the phase-space volume the freed electron occupies.
- $2 g_{i+1}/g_i$: degeneracy ratio.

## the structure of the equation

at low $T$: $e^{-\chi/k_BT} \to 0$, so $n_{i+1}/n_i \to 0$. all atoms neutral.
at high $T$: $e^{-\chi/k_BT} \to 1$, but the prefactor doesn't suppress; ionisation dominates.

the **transition** between the two regimes is sharp around $k_BT \sim \chi/10$ to $\chi/30$ (the exponential factor stays small until $k_BT$ is a fair fraction of $\chi$).

## numerical example: H ionisation

$\chi_{\rm H} = 13.6$ eV. at $T = 5800$ K (solar), $k_BT = 0.5$ eV:
$$\frac{n_{\rm H II}\,n_e}{n_{\rm H I}} = \frac{2 \cdot 1}{2}\,\left(\frac{m_e \cdot 0.5\,\text{eV}/k_B}{h^2/2\pi}\right)^{3/2}\,e^{-13.6/0.5}$$
the exponential is $e^{-27.2} \approx 1.5 \times 10^{-12}$, tiny. so $n_{\rm HII}/n_{\rm HI} \sim 10^{-4}$ in the Sun's photosphere. mostly neutral H.

at $T = 10\,000$ K (A0 star), $k_BT = 0.86$ eV, exponential is $e^{-15.8} \approx 1.4 \times 10^{-7}$. ratio jumps by orders of magnitude, $\sim 0.1$ to $1$. half-ionised.

at $T = 25\,000$ K (B0): $e^{-6.3} \approx 0.002$. now ratio is order unity to $> 100$. mostly ionised.

so H ionisation transitions from "negligible" to "dominant" between roughly $T = 6000$ and $20\,000$ K. this is exactly the temperature range where Balmer line strength rises and falls in the OBAFGKM sequence.

## why the electron density appears

in equilibrium, recombination ($\text{ion} + e^- \to \text{atom} + \gamma$) competes with ionisation. recombination rate $\propto n_{i+1} n_e$, ionisation rate $\propto n_i$ (in detailed balance). so the equilibrium fraction depends on both ionisation potential and electron density.

practical consequence: at a fixed $T$, **lower $n_e$ shifts the equilibrium toward ionisation**. denser atmospheres (giants vs dwarfs at same $T$) are slightly less ionised. this is the basis of **gravity sensitivity** of certain lines and is what discriminates luminosity classes ([MK luminosity classes](MK%20luminosity%20classes.html)).

## relation to the cosmic Saha for recombination

at recombination of the early universe ($z \sim 1100$, $T \sim 3000$ K), the same equation applies but now in the cosmic-background-photon environment. see [Saha equation and recombination](Saha%20equation%20and%20recombination.html) for the cosmological version, which uses $\eta = n_b/n_\gamma \sim 10^{-9}$ and gives a recombination temperature much lower than $\chi_H$, exactly because of the photon-to-baryon ratio. there the equation says when matter and radiation decouple.

## see also

- [Boltzmann equation in spectroscopy](Boltzmann%20equation%20in%20spectroscopy.html)
- [Saha equation and recombination](Saha%20equation%20and%20recombination.html) — cosmological analogue
- [Statistical weight g](Statistical%20weight%20g.html)
- [Partition function](Partition%20function.html)
- [Population of excited levels](Population%20of%20excited%20levels.html)
- [Why the Sequence OBAFGKM](Why%20the%20Sequence%20OBAFGKM.html)
- [Hydrogen population vs T](Hydrogen%20population%20vs%20T.html)
- [Helium population vs T](Helium%20population%20vs%20T.html)
- [MK luminosity classes](MK%20luminosity%20classes.html)
- [Photoionisation balance](Photoionisation%20balance.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (25)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Atmospheric%20parameters%20Teff%20log%20g%20feh%20vmicro.html" class="backlink-item">Atmospheric parameters Teff log g feh vmicro</a></li>
    <li class="backlink-item-wrap"><a href="Boltzmann%20equation%20in%20spectroscopy.html" class="backlink-item">Boltzmann equation in spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="Calcium%20population%20vs%20T.html" class="backlink-item">Calcium population vs T</a></li>
    <li class="backlink-item-wrap"><a href="Collisional%20ionisation%20rate.html" class="backlink-item">Collisional ionisation rate</a></li>
    <li class="backlink-item-wrap"><a href="Curve%20of%20growth%20abundance%20analysis.html" class="backlink-item">Curve of growth abundance analysis</a></li>
    <li class="backlink-item-wrap"><a href="Helium%20population%20vs%20T.html" class="backlink-item">Helium population vs T</a></li>
    <li class="backlink-item-wrap"><a href="History%20of%20stellar%20classification.html" class="backlink-item">History of stellar classification</a></li>
    <li class="backlink-item-wrap"><a href="Hydrogen%20population%20vs%20T.html" class="backlink-item">Hydrogen population vs T</a></li>
    <li class="backlink-item-wrap"><a href="Local%20thermodynamic%20equilibrium%20LTE.html" class="backlink-item">Local thermodynamic equilibrium LTE</a></li>
    <li class="backlink-item-wrap"><a href="Magnesium%20population%20vs%20T.html" class="backlink-item">Magnesium population vs T</a></li>
    <li class="backlink-item-wrap"><a href="Partition%20function.html" class="backlink-item">Partition function</a></li>
    <li class="backlink-item-wrap"><a href="Photoionisation%20balance.html" class="backlink-item">Photoionisation balance</a></li>
    <li class="backlink-item-wrap"><a href="Population%20of%20excited%20levels.html" class="backlink-item">Population of excited levels</a></li>
    <li class="backlink-item-wrap"><a href="Sodium%20population%20vs%20T.html" class="backlink-item">Sodium population vs T</a></li>
    <li class="backlink-item-wrap"><a href="Source%20function.html" class="backlink-item">Source function</a></li>
    <li class="backlink-item-wrap"><a href="Spectroscopic%20determination%20of%20Teff.html" class="backlink-item">Spectroscopic determination of Teff</a></li>
    <li class="backlink-item-wrap"><a href="Spectroscopic%20determination%20of%20log%20g.html" class="backlink-item">Spectroscopic determination of log g</a></li>
    <li class="backlink-item-wrap"><a href="Spectroscopic%20determination%20of%20metallicity.html" class="backlink-item">Spectroscopic determination of metallicity</a></li>
    <li class="backlink-item-wrap"><a href="Statistical%20equilibrium%20equations.html" class="backlink-item">Statistical equilibrium equations</a></li>
    <li class="backlink-item-wrap"><a href="Statistical%20weight%20g.html" class="backlink-item">Statistical weight g</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20spectral%20types%20OBAFGKM.html" class="backlink-item">Stellar spectral types OBAFGKM</a></li>
    <li class="backlink-item-wrap"><a href="Why%20the%20Sequence%20OBAFGKM.html" class="backlink-item">Why the Sequence OBAFGKM</a></li>
    <li class="backlink-item-wrap"><a href="interf/Atmospheric%20parameters%20Teff%20log%20g%20feh%20vmicro.html" class="backlink-item">Atmospheric parameters Teff log g feh vmicro</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
  </ul>
</div>

