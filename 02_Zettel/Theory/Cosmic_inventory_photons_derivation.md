---
layout: default
title: "Cosmic_inventory_photons_derivation"
---

# cosmic photon inventory, derived

a companion to [Cosmic_inventory_photons](../../02_Zettel/Theory/Cosmic_inventory_photons.html). that note states the results; this one walks through every step, with context. the goal is to show *why* the universe contains $\sim 411$ photons in every cubic centimetre of empty space, *why* their energy density is a fixed fraction $\sim 2.47 \times 10^{-5}\, h^{-2}$ of the critical density today, and *why* this number was once everything.

## the starting point, why a blackbody at all

at $z \gtrsim 2 \times 10^6$ everything in the photon bath is in thermal equilibrium. Compton scattering reshuffles energies, and double-Compton plus bremsstrahlung adjust photon numbers, so the spectrum is driven to the only distribution that satisfies both energy and number balance: a perfect Planck. once those processes freeze out in sequence (see CMB Spectral Distortions — What They Are and Where They Come From), the spectrum freezes too, except for a uniform redshift $T(a) \propto 1/a$ as the universe expands. so what we see at $T_0 = 2.725$ K today is the same spectrum that existed at $T \sim 10^9$ K, just stretched.

this is why the CMB inventory is so clean. one number ($T_0$) and a few integrals fix the entire photon content of the universe.

---

## from phase space to number density

a photon gas at temperature $T$ has occupation number
$$f(\nu) = \frac{1}{e^{h\nu/k_BT} - 1}$$
which counts how many photons sit in a given quantum state of frequency $\nu$. to go from "states" to "photons per cubic centimetre," I weight by the density of states.

momentum-space volume element, with the $g = 2$ photon polarisations:
$$dn = g \cdot \frac{4\pi p^2\, dp}{(2\pi\hbar)^3}\, f(p)$$

photons satisfy $E = pc$, so $p = h\nu/c$ and $dp = (h/c)\, d\nu$. swap variables:
$$\frac{dn}{d\nu} = \frac{8\pi\nu^2}{c^3}\, \frac{1}{e^{h\nu/k_BT} - 1}$$

this is the **photon number spectrum**, photons per unit volume per unit frequency. multiplying by $h\nu$ gives the **energy spectrum** (the Planck $u_\nu$), and multiplying by $c/4\pi$ gives the specific intensity $I_\nu$ that radiometers actually measure. the three live in the same family:
$$I_\nu = \frac{c}{4\pi} h\nu\, \frac{dn}{d\nu} = \frac{2h\nu^3}{c^2}\, \frac{1}{e^{h\nu/k_BT} - 1}$$

now I integrate.

---

## the two integrals

### number density

$$n_\gamma = \int_0^\infty \frac{8\pi\nu^2}{c^3}\, \frac{1}{e^{h\nu/k_BT} - 1}\, d\nu$$

substitute $x = h\nu/k_BT$:
$$n_\gamma = \frac{8\pi}{c^3}\left(\frac{k_BT}{h}\right)^3 \int_0^\infty \frac{x^2}{e^x - 1}\, dx$$

the integral is a Bose-Einstein moment. using the geometric series $1/(e^x-1) = \sum_{n=1}^\infty e^{-nx}$:
$$\int_0^\infty \frac{x^2}{e^x - 1}\, dx = \sum_{n=1}^\infty \int_0^\infty x^2 e^{-nx}\, dx = \sum_{n=1}^\infty \frac{2}{n^3} = 2\zeta(3)$$

so
$$n_\gamma = \frac{16\pi\zeta(3)}{c^3}\left(\frac{k_BT}{h}\right)^3 = \frac{2\zeta(3)}{\pi^2}\left(\frac{k_BT}{\hbar c}\right)^3$$

(using $h = 2\pi\hbar$ to flip the $\pi$ powers around). this is exactly the boson formula in [Number density and energy density at thermal equilibrium](../../02_Zettel/Theory/Number density and energy density at thermal equilibrium.html) with $g = 2$.

### energy density

$$\rho_\gamma = \int_0^\infty h\nu \cdot \frac{8\pi\nu^2}{c^3}\, \frac{1}{e^{h\nu/k_BT} - 1}\, d\nu = \frac{8\pi h}{c^3}\int_0^\infty \frac{\nu^3}{e^{h\nu/k_BT} - 1}\, d\nu$$

same substitution:
$$\rho_\gamma = \frac{8\pi}{c^3 h^3}(k_BT)^4 \int_0^\infty \frac{x^3}{e^x - 1}\, dx$$

the new Bose moment, by the same trick:
$$\int_0^\infty \frac{x^3}{e^x - 1}\, dx = \sum_{n=1}^\infty \frac{6}{n^4} = 6\zeta(4) = \frac{\pi^4}{15}$$

(using $\zeta(4) = \pi^4/90$, the $1735$ Euler result.) so
$$\rho_\gamma = \frac{8\pi^5}{15 c^3 h^3}(k_BT)^4 = \frac{\pi^2}{15}\, \frac{(k_BT)^4}{(\hbar c)^3}$$

### sanity check, Stefan-Boltzmann

the radiation flux out of a blackbody surface is $F = \sigma_{SB} T^4$, with $\sigma_{SB} = \pi^2 k_B^4/(60 \hbar^3 c^2)$. its relation to the energy density is $F = (c/4)\rho_\gamma$, giving
$$\rho_\gamma = \frac{4\sigma_{SB}}{c}T^4 = a_{\rm rad}T^4$$
with $a_{\rm rad} = \pi^2 k_B^4/(15\hbar^3 c^3)$, the radiation constant. exactly what I just derived. (see [Blackbody radiation and Stefan-Boltzmann](../../02_Zettel/Theory/Blackbody radiation and Stefan-Boltzmann.html).)

---

## restoring units, plugging in $T_0$

at $T_0 = 2.725$ K:

$$k_B T_0 = (1.381 \times 10^{-16}\,\text{erg/K})(2.725\,\text{K}) = 3.763 \times 10^{-16}\,\text{erg} = 2.349 \times 10^{-4}\,\text{eV}$$

$$\hbar c = 3.16 \times 10^{-17}\,\text{erg cm} = 1.973 \times 10^{-5}\,\text{eV cm}$$

$$\frac{k_B T_0}{\hbar c} = 11.91\,\text{cm}^{-1}\quad\Rightarrow\quad \left(\frac{k_B T_0}{\hbar c}\right)^3 = 1690\,\text{cm}^{-3}$$

with $2\zeta(3)/\pi^2 = 2(1.20206)/9.8696 = 0.2436$:
$$\boxed{\, n_{0\gamma} \simeq 411\,\text{cm}^{-3}\,}$$

(textbooks quote anything from $410$ to $422$ depending on whether they round $T_0$ to $2.725$ or use $2.7255$ and how many digits of $\zeta(3)$ they keep, but $\sim 411$ is the standard.)

and
$$\rho_{0\gamma} = \frac{\pi^2}{15}\frac{(k_B T_0)^4}{(\hbar c)^3} \simeq 4.18 \times 10^{-13}\,\text{erg cm}^{-3} \simeq 0.260\,\text{eV cm}^{-3}$$

the **average energy per photon** is $\rho_{0\gamma}/n_{0\gamma} \simeq 6.3 \times 10^{-4}$ eV, in the microwave band as expected for a 2.7 K bath. mean photon frequency around $160$ GHz, peak intensity at the Planckian $\nu_{\rm peak} \approx 2.82\, k_BT/h \approx 160$ GHz too. (the difference between energy-weighted and number-weighted spectra is about $20\%$, but for orientation the same ballpark.)

---

## $\Omega_{0\gamma}$, the photon's share of the budget

the critical density is
$$\rho_{0,\rm crit} = \frac{3H_0^2}{8\pi G} = 1.878 \times 10^{-29}\, h^2\,\text{g cm}^{-3} \simeq 8.1 \times 10^{-11}\, h^2\,\text{eV}^4 \;(\text{natural units})$$

with $H_0 = 100\, h$ km/s/Mpc and the $2026$ Planck value $h = 0.674$.

dividing:
$$\Omega_{0\gamma} = \frac{\rho_{0\gamma}}{\rho_{0,\rm crit}} = \frac{4.18 \times 10^{-13}\,\text{erg cm}^{-3}/c^2}{1.878 \times 10^{-29}\, h^2\,\text{g cm}^{-3}} = \frac{4.65 \times 10^{-34}}{1.878 \times 10^{-29}\, h^2}$$

$$\boxed{\, \Omega_{0\gamma} \simeq 2.47 \times 10^{-5}\, h^{-2}\,}$$

with $h = 0.674$ this gives $\Omega_{0\gamma} \simeq 5.4 \times 10^{-5}$, the $\sim 0.005\%$ slice in the [Cosmic_inventory_overview](../../02_Zettel/Theory/Cosmic_inventory_overview.html) pie chart.

a useful equivalent form:
$$\Omega_{0\gamma} h^2 = 2.47 \times 10^{-5} \left(\frac{T_0}{2.725\,\text{K}}\right)^4$$
the temperature is the *only* thing it depends on. once you have FIRAS, you have $\Omega_\gamma$ to four decimal places, no $H_0$ needed inside the box.

---

## the baryon-to-photon ratio

with $\Omega_b h^2 \simeq 0.0224$ (Planck), the baryon number density today is
$$n_{0b} = \frac{\Omega_b\, \rho_{0,\rm crit}}{m_p} \simeq 2.5 \times 10^{-7}\, \text{cm}^{-3}$$

so
$$\eta \equiv \frac{n_b}{n_\gamma} \simeq 6.1 \times 10^{-10}$$

this $\eta$ is one of the most important numbers in cosmology. it controls BBN (see [BBN_baryon_to_photon_ratio](../../02_Zettel/Theory/BBN_baryon_to_photon_ratio.html)) because the deuterium and helium abundances depend on it directly, and the agreement between BBN $\eta$ and CMB $\eta$ is the single best confirmation of the hot Big Bang. the smallness of $\eta$ is the *baryon asymmetry* of the universe: in the early plasma there was only a $\sim 10^{-9}$ excess of matter over antimatter; everything else annihilated.

---

## why the CMB owns the photon census

count photons in every electromagnetic background and the CMB wins by orders of magnitude. very roughly, integrating the published spectra of each background gives photon densities like
- CMB: $\sim 411\,\text{cm}^{-3}$
- CIB (cosmic infrared, dust-reprocessed star formation): $\sim 0.5\,\text{cm}^{-3}$
- CUVOB (UV/optical, stars + AGN): $\sim 10^{-2}\,\text{cm}^{-3}$
- CXB (X-ray, accreting black holes): $\sim 10^{-7}\,\text{cm}^{-3}$
- CGB (gamma-ray): $\sim 10^{-9}\,\text{cm}^{-3}$

the CMB beats the next-biggest by a factor $\sim 1000$ in photon count. by **energy density** the gap shrinks (because non-CMB photons each carry far more energy than a 0.6 meV CMB photon) but the CMB still dominates by an order of magnitude or so, because $T_0^4$ is huge in the relevant units.

so when I said in [Cosmic_inventory_photons](../../02_Zettel/Theory/Cosmic_inventory_photons.html) that "the photons of the universe means essentially the CMB," this is what it means quantitatively. every other background is a perturbation.

---

## scaling with redshift and matter-radiation equality

the photon temperature redshifts as $T(a) = T_0/a$ as long as the photon number per comoving volume is conserved (which is exactly what entropy conservation buys, see [Conservation of entropy in a comoving volume](../../02_Zettel/Theory/Conservation of entropy in a comoving volume.html)). so
$$\rho_\gamma(a) = \frac{\pi^2}{15}\frac{(k_B T_0)^4}{(\hbar c)^3}\, a^{-4}$$
$$\rho_m(a) = \rho_{0m}\, a^{-3}$$

equality, $\rho_\gamma(a_{\rm eq}) = \rho_m(a_{\rm eq})$:
$$1 + z_{\rm eq} = \frac{\Omega_{0m}}{\Omega_{0\gamma}}$$

note this uses photons *only*, not the full radiation. if I include the three relic neutrino species (massless approximation, $T_\nu = (4/11)^{1/3} T_\gamma$, see [Cosmic_inventory_neutrinos](../../02_Zettel/Theory/Cosmic_inventory_neutrinos.html)),
$$\frac{\rho_\nu}{\rho_\gamma} = \frac{7}{8}\cdot 3 \cdot \left(\frac{4}{11}\right)^{4/3} \simeq 0.681$$
so the total radiation density is $\Omega_{0r} \simeq 1.681\, \Omega_{0\gamma} \simeq 4.15 \times 10^{-5}\, h^{-2}$. with $\Omega_{0m} = 0.315$ and $h = 0.674$,
$$1 + z_{\rm eq} \simeq \frac{\Omega_{0m} h^2}{\Omega_{0r} h^2} \simeq \frac{0.143}{4.15 \times 10^{-5}} \simeq 3440$$

so $z_{\rm eq} \approx 3300$, the equality redshift quoted in the [Brief thermal history](../../02_Zettel/Theory/Brief thermal history.html). before this, the universe was radiation-dominated; after it, matter-dominated. this is the single most important consequence of the photon inventory. **the universe has a definite age at which gravitational structure could begin to grow on subhorizon scales**, and that age is set entirely by the ratio $\Omega_{0m}/\Omega_{0\gamma}$, both of which we have measured.

---

## why these numbers feel small but are not

today $\Omega_{0\gamma} \sim 10^{-4}$ feels negligible, but two reframings make the photon bath feel enormous again:

1. **per-baryon photon count**. there are $\sim 10^9$ photons per baryon. if I look at any patch of the universe and remove every electron and proton, the photon bath would still be there at full strength; baryons are the impurities, photons are the medium.
2. **early-universe domination**. push back to $a \sim 10^{-4}$ (recombination) and $\rho_\gamma \propto a^{-4}$ has grown by $10^{16}$ while $\rho_m \propto a^{-3}$ has grown by $10^{12}$, so the ratio flips. before $z_{\rm eq}$, photons set the expansion rate, the equation of state, and the sound speed of the photon-baryon fluid. every CMB acoustic peak we measure today is a fossil of when photons ran the show.

so the "small" $\Omega_{0\gamma}$ is the dilution of a once-dominant fluid by $13.8$ Gyr of expansion. the photon bath did not get smaller; the rest of the universe got bigger.

---

## the conceptual diagram

```
                Planck distribution f(ν) = 1/(e^{hν/kT}-1)
                                |
              g=2 polarisations + 4πp²dp/(2πℏ)³
                                |
                                v
                  number spectrum dn/dν
              /                        \
       integrate                   weight by hν, integrate
            |                              |
            v                              v
   n_γ = (2ζ(3)/π²)(kT/ℏc)³        ρ_γ = (π²/15)(kT)⁴/(ℏc)³
            |                              |
       T = 2.725 K                   T = 2.725 K
            |                              |
            v                              v
       411 cm⁻³                       4.18e-13 erg/cm³
                                          |
                                    /ρ_crit, h²
                                          v
                              Ω_{0γ} = 2.47e-5 h⁻²
                                          |
                                      vs Ω_m
                                          v
                                  z_eq ≈ 3300
```

---

## TL;DR

a Bose-Einstein gas with two polarisations and zero chemical potential at $T = 2.725$ K, integrated over momentum space, gives $n \approx 411$ cm$^{-3}$ and $\rho \approx 4 \times 10^{-13}$ erg/cm$^3$. divided by the critical density, that is $\Omega_{0\gamma} \simeq 2.47 \times 10^{-5}\, h^{-2}$, a tiny number that hides three big things: it is the most precisely known $\Omega$ in cosmology, it sets the matter-radiation equality redshift that makes structure formation possible, and it is one half of the baryon-to-photon ratio $\eta \sim 6 \times 10^{-10}$ that BBN and the CMB agree on to better than a percent.

every line of the photon-budget result comes from two ingredients: the Planck shape (set by equilibrium thermodynamics in the first months), and the temperature today (set by FIRAS in $1990$). everything else is bookkeeping.

---

## see also

- [Cosmic_inventory_photons](../../02_Zettel/Theory/Cosmic_inventory_photons.html) — the parent note with the boxed results
- [Cosmic_inventory_overview](../../02_Zettel/Theory/Cosmic_inventory_overview.html) — the full pie chart
- [Number density and energy density at thermal equilibrium](../../02_Zettel/Theory/Number density and energy density at thermal equilibrium.html) — the general $g$-counting framework
- [Blackbody radiation and Stefan-Boltzmann](../../02_Zettel/Theory/Blackbody radiation and Stefan-Boltzmann.html) — surface flux version of the same integrals
- [Conservation of entropy in a comoving volume](../../02_Zettel/Theory/Conservation of entropy in a comoving volume.html) — why $T \propto 1/a$ holds
- [Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.html) — what fixed the spectrum where it is
- CMB Spectral Distortions — What They Are and Where They Come From — what would break it
- [BBN_baryon_to_photon_ratio](../../02_Zettel/Theory/BBN_baryon_to_photon_ratio.html) — the $\eta$ that drops out of this calculation
- [Brief thermal history](../../02_Zettel/Theory/Brief thermal history.html) — where $z_{\rm eq}$ sits in the timeline
- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
