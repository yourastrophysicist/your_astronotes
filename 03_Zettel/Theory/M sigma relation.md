---
layout: "default"
title: "M sigma relation"
---
## The Empirical Relation

The **$M_\bullet - \sigma$ relation** (Ferrarese & Merritt 2000; Gebhardt et al. 2000) is the tightest empirical scaling relation in extragalactic astrophysics, connecting the mass of a central supermassive black hole $M_\bullet$ to the stellar velocity dispersion $\sigma$ of its host galaxy's spheroidal bulge.

$$\boxed{\log_{10}\left(\frac{M_\bullet}{M_\odot}\right) = \alpha + \beta \log_{10}\left(\frac{\sigma}{200\,\mathrm{km\,s^{-1}}}\right)}$$

### Historical and Modern Calibrations
- **Ferrarese & Merritt (2000) -** $\beta = 4.80 \pm 0.54$, $\alpha = 8.45$.
- **Gebhardt et al. (2000) -** $\beta = 3.75 \pm 0.30$, $\alpha = 8.13$.
- **Tremaine et al. (2002) -** $\beta = 4.02 \pm 0.32$, $\alpha = 8.13$.
- **Gültekin et al. (2009) -** $\beta = 4.24 \pm 0.41$, $\alpha = 8.12$.
- **McConnell & Ma (2013) -** $\beta = 5.64 \pm 0.32$ for early-type galaxies, $\beta = 5.06 \pm 0.35$ for all galaxies.
- **Kormendy & Ho (2013) -** $\beta = 4.38 \pm 0.29$, $\alpha = 8.49$ for classical bulges and ellipticals.

The intrinsic scatter $\epsilon_0 \approx 0.28$ dex (a factor of $\sim 1.9$ in black hole mass) is extraordinarily tight across five orders of magnitude in mass ($10^5 M_\odot \le M_\bullet \le 2 \times 10^{10} M_\odot$).

---

## Unbroken Mathematical Derivation - Self-Regulated AGN Feedback

Why does a tiny central object whose gravitational reach is $\sim 10\,\mathrm{pc}$ correlate so tightly with a galaxy bulge spanning $\sim 10\,\mathrm{kpc}$?
The physical mechanism is **momentum-driven and energy-driven AGN feedback** (Silk & Rees 1998; King 2003, 2005; Fabian 2012).

### Step 1 - Accretion Radiation Pressure
During the quasar growth phase, the SMBH accretes gas near its maximum stable rate, the **Eddington limit**.

$$L_{\rm Edd} = \frac{4\pi G M_\bullet m_p c}{\sigma_T}$$

where $\sigma_T$ is the Thomson electron scattering cross section and $m_p$ is the proton mass.

Radiation pressure couples to electrons (and via Coulomb coupling to protons), imparting an outward radial momentum thrust.

$$\dot{P}_{\rm rad} = \frac{L_{\rm Edd}}{c} = \frac{4\pi G M_\bullet m_p}{\sigma_T}$$

### Step 2 - Gravitational Binding of the Host Gas Shell
Model the galaxy bulge as an isothermal sphere with 1D stellar velocity dispersion $\sigma$. The total density and enclosed mass are.

$$\rho(r) = \frac{\sigma^2}{2\pi G r^2}, \qquad M_{\rm tot}(r) = \frac{2\sigma^2 r}{G}$$

Let the cold interstellar gas have mass fraction $f_{\rm gas} \equiv \frac{M_{\rm gas}}{M_{\rm tot}} \approx \frac{\Omega_b}{\Omega_m} \approx 0.17$. The gas mass enclosed within radius $r$ is.

$$M_{\rm gas}(r) = f_{\rm gas} \frac{2\sigma^2 r}{G}$$

The inward gravitational binding force exerted by the total potential on this gas shell is.

$$F_{\rm grav} = \frac{G M_{\rm tot}(r) M_{\rm gas}(r)}{r^2} = \frac{G \left(\frac{2\sigma^2 r}{G}\right) \left(f_{\rm gas} \frac{2\sigma^2 r}{G}\right)}{r^2} = \frac{4 f_{\rm gas} \sigma^4}{G}$$

Notice that the radial coordinate $r$ cancels out entirely! The gravitational binding force of an isothermal sphere is **spatially constant**.

### Step 3 - Blowout Condition and Derivation of the $\sigma^4$ Scaling
As long as outward radiation thrust is less than gravitational binding force ($\dot{P}_{\rm rad} < F_{\rm grav}$), gas continues to collapse toward the center, feeding the black hole.

Growth halts abruptly when radiation thrust overcomes the weight of the gas, blowing the gas reservoir out of the galaxy.

$$\dot{P}_{\rm rad} = F_{\rm grav} \implies \frac{4\pi G M_\bullet m_p}{\sigma_T} = \frac{4 f_{\rm gas} \sigma^4}{G}$$

Solve explicitly for the critical blowout mass $M_\bullet$.

$$\boxed{M_\bullet = \left( \frac{f_{\rm gas} \sigma_T}{\pi G^2 m_p} \right) \sigma^4 \propto \sigma^4}$$

### Step 4 - The Energy-Driven Limit ($\sigma^5$ Scaling)
If the shocked outflow cannot radiate its thermal energy efficiently (energy-conserving wind; Silk & Rees 1998), the kinetic energy injected by the wind balances the binding energy of the gas.

$$\dot{E}_{\rm wind} = \frac{1}{2} \dot{M}_{\rm wind} v_{\rm wind}^2 \approx \frac{1}{2} \left(\frac{v_{\rm wind}}{c}\right) L_{\rm Edd} \approx \frac{1}{2} \eta L_{\rm Edd} \propto M_\bullet$$

The binding energy of the gas shell is $E_{\rm bind} \sim M_{\rm gas} \sigma^2 \propto \sigma^4 r$, and the work rate required to expel it on a dynamical time $t_{\rm dyn} \sim r/\sigma$ is.

$$\dot{E}_{\rm req} \sim \frac{E_{\rm bind}}{t_{\rm dyn}} \sim \frac{M_{\rm gas} \sigma^2}{r / \sigma} \sim \frac{(f_{\rm gas} \sigma^2 r / G) \sigma^2}{r / \sigma} \sim \frac{f_{\rm gas} \sigma^5}{G}$$

Equating $\dot{E}_{\rm wind} \sim \dot{E}_{\rm req}$ yields.

$$\boxed{M_\bullet \propto \sigma^5}$$

**Theoretical Synthesis on the Blackboard -**
The observed slope $\beta \approx 4.4$ to $5.0$ lies precisely between the momentum-driven limit ($\beta = 4$) and the energy-driven limit ($\beta = 5$), proving that self-regulated AGN feedback governs the co-evolution of black holes and galaxies.

---

## Observational Measurement - Resolving the Sphere of Influence

An unambiguous dynamical measurement of $M_\bullet$ requires resolving the **gravitational sphere of influence** $r_{\rm infl}$, inside which the black hole's gravitational potential dominates over the host stars.

$$\Phi_\bullet(r) = \frac{G M_\bullet}{r} \ge \sigma^2 \implies \boxed{r_{\rm infl} = \frac{G M_\bullet}{\sigma^2}}$$

In terms of angular size on the sky.
$$\theta_{\rm infl} = \frac{r_{\rm infl}}{d} = \frac{G M_\bullet}{d\,\sigma^2}$$

### The Observational Resolution Gate
- For the telescope to measure a genuine black hole mass, the spatial resolution (PSF FWHM or slit width $\theta_{\rm res}$) must satisfy.
  $$\theta_{\rm res} \le \theta_{\rm infl}$$
- If $\theta_{\rm res} \gg \theta_{\rm infl}$, the kinematic data cannot distinguish a central point mass from a distributed stellar core or dark cluster, leading to severe systematic errors.
- Examples.
  - Milky Way Sgr A* - $M_\bullet = 4.15 \times 10^6 M_\odot, \sigma \approx 105\,\mathrm{km\,s^{-1}}, d = 8.2\,\mathrm{kpc} \implies r_{\rm infl} \approx 1.6\,\mathrm{pc} \implies \theta_{\rm infl} \approx 40''$. Highly resolved by AO!
  - M87* (Virgo) - $M_\bullet = 6.5 \times 10^9 M_\odot, \sigma \approx 320\,\mathrm{km\,s^{-1}}, d = 16.5\,\mathrm{Mpc} \implies r_{\rm infl} \approx 280\,\mathrm{pc} \implies \theta_{\rm infl} \approx 3.5''$. Easily resolved by HST STIS.
  - Cen A - $M_\bullet \approx 5 \times 10^7 M_\odot, \sigma \approx 150\,\mathrm{km\,s^{-1}}, d = 3.8\,\mathrm{Mpc} \implies r_{\rm infl} \approx 10\,\mathrm{pc} \implies \theta_{\rm infl} \approx 0.5''$.

---

## Classical Bulges vs. Pseudobulges

Kormendy & Ho (2013) demonstrated that the tight $M_\bullet - \sigma$ relation applies strictly to **classical bulges** (formed via major dry/wet mergers and violent relaxation) and **elliptical galaxies**.

**Pseudobulges** (formed via secular disk instabilities, bar-driven gas inflow, and quiet star formation).
- Lie systematically **below** the $M_\bullet - \sigma$ relation by $\sim 0.5$ dex.
- Exhibit significantly larger scatter ($\epsilon_0 > 0.5$ dex).
- Some pure-disk, bulgeless galaxies host tiny black holes or lack central SMBHs altogether (e.g. M33 has $M_\bullet < 1500 M_\odot$).

---

## Textbook & Course References

- **Prof. Alessandro Pizzella Course Dispensa**.
  - File `dispense_smbh_20_eng.pdf`
  - Chapter 3, Section 3.1 "The $M_{\rm BH} - \sigma$ relation", pp. 25-27 (Ferrarese & Merritt discovery, observed slopes, co-evolution).
- **Student Synthesis Document**.
  - File `SMBH_in_Galaxies.tex`
  - Section 10.1 "The $M_{\rm BH} - \sigma$ Relation", pp. 20-23 (calibrations, sphere of influence, pseudobulge offset).
- **Mo, van den Bosch & White (2010), *Galaxy Formation and Evolution***.
  - File `Houjun Mo, Frank van den Bosch, Simon White - Galaxy Formation and Evolution (2010, Cambridge University Press) - libgen.li.pdf`
  - Chapter 14, Section 14.2.4 "The $M_{\rm BH} - \sigma$ Relation", pp. 652-660; Section 14.4 "AGN and Galaxy Formation", pp. 670-673 (complete Silk & Rees feedback proof).
- **Peter Schneider (2015), *Extragalactic Astronomy and Cosmology***.
  - File `extragalactic_astro-1.pdf` / Course repo
  - Chapter 5, Section 5.4 "Black holes in the centers of galaxies", pp. 228-235.
- **Master Derivations Guide**.
  - Master Derivations and Mathematical Rigor
- **Master Graph Sketch**.
  - Master Observational Graphs and Blackboard Fluency

---

## see also

- [[Magorrian relation]]
- [[Faber-Jackson relation]]
- [[Stellar dynamics SMBH masses]]
- [[Reverberation mapping]]
- [[Water maser BH masses]]
- [[AGN spectroscopy]]
- [[Galactic Center Sgr A and S-stars]]
- [[Astrophysics_of_Galaxies_MOC]]

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![ferrarese2000_Msigma.png](../../assets/images/ferrarese2000_Msigma.png)
*Discovery of the M_BH - sigma relation by Ferrarese & Merritt (2000).*

![ferrarese2000_Msigma_fig1.png](../../assets/images/ferrarese2000_Msigma_fig1.png)
*Tight correlation between black hole mass and stellar velocity dispersion sigma.*

![kormendy2013_Msigma.png](../../assets/images/kormendy2013_Msigma.png)
*Comprehensive M_BH - sigma relation for classical bulges and ellipticals (Kormendy & Ho 2013).*

![kormendy2013_ML.png](../../assets/images/kormendy2013_ML.png)
*M_BH vs bulge luminosity and stellar mass relation (Kormendy & Ho 2013).*

![mcconnell2013_Msigma.png](../../assets/images/mcconnell2013_Msigma.png)
*M_BH - sigma relation from McConnell & Ma (2013) spanning 10^5 to 10^10 M_Sun.*

![mcconnell2013_ML.png](../../assets/images/mcconnell2013_ML.png)
*M_BH vs bulge mass from McConnell & Ma (2013).*

![saglia2016_Msigma.png](../../assets/images/saglia2016_Msigma.png)
*Saglia et al. (2016) calibration of M_BH - sigma across classical bulges vs pseudobulges.*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_bh-59.png](../../assets/images/gal_bh-59.png)

![gal_bh-60.png](../../assets/images/gal_bh-60.png)

![gal_bh-61.png](../../assets/images/gal_bh-61.png)

![gal_bh-62.png](../../assets/images/gal_bh-62.png)

![gal_bh-63.png](../../assets/images/gal_bh-63.png)

![gal_bh-64.png](../../assets/images/gal_bh-64.png)

![gal_bh-65.png](../../assets/images/gal_bh-65.png)

![gal_bh-66.png](../../assets/images/gal_bh-66.png)

![gal_bh-67.png](../../assets/images/gal_bh-67.png)

![gal_bh-68.png](../../assets/images/gal_bh-68.png)



## Linked References

- [[Faber-Jackson relation]]
- [[Galactic Center Sgr A and S-stars]]
- [[Ionized gas SMBH masses]]
- [[LOSVD]]
- [[Magorrian relation]]
- [[Reverberation mapping]]
- [[Stellar dynamics SMBH masses]]
- [[Stellar kinematics measurements]]
- [[Water maser BH masses]]
- [[Astrophysics_of_Galaxies_MOC]]


