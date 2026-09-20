---
layout: "default"
title: "Main sequence, giants, supergiants, white dwarfs"
---
the **Hertzsprung-Russell (HR) diagram**, discovered independently by Ejnar Hertzsprung (1911) and Henry Norris Russell (1913), is the central organizing framework of stellar astrophysics. it plots the intrinsic luminosity of stars against their surface temperature.

![stellar-08.png](../../assets/images/stellar-08.png)

---

## axes and conventions

an HR diagram can be presented in two equivalent representations:
1. **theoretical plane**: Logarithm of Luminosity $\log(L/L_\odot)$ (or absolute bolometric magnitude $M_{\text{bol}}$) on the vertical axis versus Effective Temperature $T_{\text{eff}}$ on the horizontal axis. **crucial convention**: temperature increases to the **left** (from $3000$ K on the right to $40,000$ K on the left).
2. **observational plane (Color-Magnitude Diagram, CMD)**: Absolute magnitude $M_V$ (or apparent magnitude $V$ in a cluster) on the vertical axis versus Color Index (e.g. $B-V$ or $G_{BP} - G_{RP}$) on the horizontal axis. bluer (hotter) stars lie to the left, redder (cooler) stars to the right.

![stellar-09.png](../../assets/images/stellar-09.png)

---

## the four major stellar groups

stars do not populate the HR diagram randomly: over $99\%$ of stars fall into four distinct regions:

![stellar-10.png](../../assets/images/stellar-10.png)

1. **the Main Sequence (Sequenza Principale)**:
   - a continuous diagonal band running from the top-left (hot, luminous O/B stars) to the bottom-right (cool, faint M dwarfs).
   - comprises **$\approx 85-90\%$ of all observed stars** (including our Sun at $T_{\text{eff}} \approx 5800$ K, $L = 1 L_\odot$).
   - **physical state**: stars in core hydrogen burning equilibrium ($4p \to {}^4\text{He}$).
2. **Red Giants (Giganti Rosse)**:
   - situated in the upper right ($T_{\text{eff}} \sim 3000-5000$ K, $L \sim 10^2 - 10^4 L_\odot$).
   - cool surface temperature but enormous luminosity, requiring enormous radii ($R \sim 10 - 100 R_\odot$).
   - **physical state**: hydrogen-exhausted core; hydrogen shell burning around an inert, contracting helium core.
3. **Supergiants (Supergiganti)**:
   - occupy the very top of the diagram ($L \sim 10^4 - 10^6 L_\odot$, across all spectral types).
   - colossal radii ($R \sim 100 - 1500 R_\odot$). Betelgeuse, Rigel, Deneb.
   - **physical state**: evolved stages of massive stars ($M \gtrsim 8 M_\odot$) undergoing advanced core nuclear burning.
4. **White Dwarfs (Nane Bianche)**:
   - located in the lower left ($T_{\text{eff}} \sim 8,000 - 30,000$ K, $L \sim 10^{-4} - 10^{-2} L_\odot$).
   - hot surface but extremely faint, implying tiny Earth-sized radii ($R \sim 0.01 R_\odot$).
   - **physical state**: electron-degenerate compact stellar corpses with no ongoing nuclear fusion, cooling passively over cosmic time.

![stellar-11.png](../../assets/images/stellar-11.png)

---

## lines of constant stellar radius

from the Stefan-Boltzmann relation $L = 4\pi R^2 \sigma T_{\text{eff}}^4$, taking the logarithm yields:
$$\log L = 4 \log T_{\text{eff}} + 2 \log R + \text{const}$$

for a fixed radius $R = \text{constant}$, $\log L$ is a linear function of $\log T_{\text{eff}}$ with slope $+4$.
because the horizontal axis of the HR diagram runs backwards (temperature decreasing to the right), lines of constant radius appear as **parallel diagonals running from top-left to bottom-right**:
- $R = 1000 R_\odot$: passes through the red supergiants.
- $R = 100 R_\odot$: cuts through the red giant branch.
- $R = 1 R_\odot$: cuts through the Sun on the main sequence.
- $R = 0.01 R_\odot$: passes through the white dwarf sequence.

![stellar-12.png](../../assets/images/stellar-12.png)

![stellar-13.png](../../assets/images/stellar-13.png)

---

## main sequence lifetime and mass progression

along the main sequence, stellar mass $M$ increases monotonically from bottom-right to top-left:
- bottom-right: $M \sim 0.08 M_\odot$, $T_{\text{eff}} \sim 2500$ K, $L \sim 10^{-4} L_\odot$.
- solar position: $M = 1.0 M_\odot$, $T_{\text{eff}} \approx 5800$ K, $L = 1 L_\odot$.
- top-left: $M \sim 60-100 M_\odot$, $T_{\text{eff}} \sim 40,000-50,000$ K, $L \sim 10^6 L_\odot$.

![stellar-14.png](../../assets/images/stellar-14.png)

the duration of the main sequence phase is governed by nuclear fuel consumption:
$$t_{\text{MS}} \approx 10^{10} \left(\frac{M}{M_\odot}\right) \left(\frac{L}{L_\odot}\right)^{-1} \approx 10^{10} \left(\frac{M}{M_\odot}\right)^{-2.5} \text{ yr}$$

![stellar-15.png](../../assets/images/stellar-15.png)

![stellar-16.png](../../assets/images/stellar-16.png)

![stellar-17.png](../../assets/images/stellar-17.png)

![stellar-18.png](../../assets/images/stellar-18.png)

![stellar-19.png](../../assets/images/stellar-19.png)

---

## see also

- [[Fundamentals_Astrophysics_Cosmology_MOC]]
- [[Stellar scaling relations]]
- [[Main sequence, giants, supergiants, white dwarfs]]
- [[Solar evolution and final stages]]
- [[Cluster ages from CMD turnoff]]

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_stars-017.png](../../assets/images/obs_stars-017.png)
*Extinction correction in observational CMDs: reddening vector shifting points down-right.*

![obs_stars-018.png](../../assets/images/obs_stars-018.png)
*De-reddened CMD morphology.*

![obs_stars-019.png](../../assets/images/obs_stars-019.png)
*Main sequence core hydrogen fusion via pp-chain and CNO cycle.*

![obs_stars-020.png](../../assets/images/obs_stars-020.png)
*Schonberg-Chandrasekhar limit: maximum isothermal core mass fraction ~10%.*

![obs_stars-021.png](../../assets/images/obs_stars-021.png)
*Subgiant branch: contraction of inert helium core and expansion of hydrogen-burning envelope.*

![obs_stars-022.png](../../assets/images/obs_stars-022.png)
*Red Giant Branch (RGB): Hayashi convective boundary and dredge-up episodes.*

![obs_stars-023.png](../../assets/images/obs_stars-023.png)
*Core helium flash in low-mass stars (M < 2 M_Sun) due to electron degeneracy.*

![obs_stars-024.png](../../assets/images/obs_stars-024.png)
*Horizontal Branch (HB) and Red Clump: quiescent core helium burning.*



## Linked References

- [[HR diagram]]
- [[Mass-luminosity relation]]
- [[Spectroscopic parallax and main-sequence fitting]]
- [[Stellar scaling relations]]
- [[Stellar spectra and spectral classification]]
- [[Fundamentals_Astrophysics_Cosmology_MOC]]
- [[Observational_Astrophysics_MOC]]


