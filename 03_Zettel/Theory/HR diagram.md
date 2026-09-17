---
layout: "default"
title: "HR diagram"
---
{% raw %}
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

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Stellar scaling relations](./Stellar%20scaling%20relations.html)
- [Main sequence, giants, supergiants, white dwarfs](./Main%20sequence%2C%20giants%2C%20supergiants%2C%20white%20dwarfs.html)
- [Solar evolution and final stages](./Solar%20evolution%20and%20final%20stages.html)
- [Cluster ages from CMD turnoff](./Cluster%20ages%20from%20CMD%20turnoff.html)

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_stars-001.png](../../assets/images/obs_stars-001.png)
*Lecture 6: Stars and Stellar Populations.*

![obs_stars-002.png](../../assets/images/obs_stars-002.png)
*Hertzsprung-Russell (HR) diagram: theoretical plane log L vs log T_eff.*

![obs_stars-003.png](../../assets/images/obs_stars-003.png)
*Observational Color-Magnitude Diagram (CMD): absolute magnitude M_V vs color index B - V.*

![obs_stars-004.png](../../assets/images/obs_stars-004.png)
*Lines of constant stellar radius: R proportional to L^(1/2) * T_eff^(-2).*

![obs_stars-005.png](../../assets/images/obs_stars-005.png)
*Parallel diagonal lines of constant radius from 0.01 R_Sun to 1000 R_Sun.*

![obs_stars-006.png](../../assets/images/obs_stars-006.png)
*Four principal stellar families: Main Sequence, Giants, Supergiants, White Dwarfs.*

![obs_stars-007.png](../../assets/images/obs_stars-007.png)
*Main sequence contains ~90% of all observed stars.*

![obs_stars-008.png](../../assets/images/obs_stars-008.png)
*Solar position on the HR diagram: G2V, T_eff = 5778 K, M_V = +4.83 mag.*

![obs_stars-009.png](../../assets/images/obs_stars-009.png)
*Mass distribution along the main sequence: massive stars at upper left, low-mass at lower right.*

![obs_stars-010.png](../../assets/images/obs_stars-010.png)
*Stellar surface gravity g = G M / R^2 and spectroscopic luminosity classes.*

![obs_stars-011.png](../../assets/images/obs_stars-011.png)
*Hipparcos HR diagram of ~20,000 nearby stars: real-world observational scatter.*

![obs_stars-012.png](../../assets/images/obs_stars-012.png)
*Gaia DR3 color-magnitude diagram of over 1 million stars.*

![obs_stars-013.png](../../assets/images/obs_stars-013.png)
*White dwarf cooling sequence in the lower-left corner.*

![obs_stars-014.png](../../assets/images/obs_stars-014.png)
*Red giant clump and horizontal branch in field star CMDs.*

![obs_stars-015.png](../../assets/images/obs_stars-015.png)
*Asymptotic Giant Branch (AGB) and thermally pulsing stars.*

![obs_stars-016.png](../../assets/images/obs_stars-016.png)
*Summary of HR diagram regions and evolutionary pathways.*
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (33)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Age%20dating%20from%20the%20WD%20luminosity%20function.html" class="backlink-item">Age dating from the WD luminosity function</a></li>
    <li class="backlink-item-wrap"><a href="./Binary%20stars%20in%20CMD.html" class="backlink-item">Binary stars in CMD</a></li>
    <li class="backlink-item-wrap"><a href="./Blackbody%20radiation%20and%20Stefan-Boltzmann.html" class="backlink-item">Blackbody radiation and Stefan-Boltzmann</a></li>
    <li class="backlink-item-wrap"><a href="./Bolometric%20correction%20and%20effective%20temperature.html" class="backlink-item">Bolometric correction and effective temperature</a></li>
    <li class="backlink-item-wrap"><a href="./CMD%20constraints%20on%20disk%20vs%20halo%20populations.html" class="backlink-item">CMD constraints on disk vs halo populations</a></li>
    <li class="backlink-item-wrap"><a href="./Cluster%20ages%20from%20CMD%20turnoff.html" class="backlink-item">Cluster ages from CMD turnoff</a></li>
    <li class="backlink-item-wrap"><a href="./Color%20indices.html" class="backlink-item">Color indices</a></li>
    <li class="backlink-item-wrap"><a href="./Color-magnitude%20diagrams%20of%20clusters.html" class="backlink-item">Color-magnitude diagrams of clusters</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Globular%20clusters%20as%20SSP%20laboratories.html" class="backlink-item">Globular clusters as SSP laboratories</a></li>
    <li class="backlink-item-wrap"><a href="./Hunting%20BHs%20via%20radial%20velocities.html" class="backlink-item">Hunting BHs via radial velocities</a></li>
    <li class="backlink-item-wrap"><a href="./Interstellar%20reddening%20and%20the%20reddening%20vector.html" class="backlink-item">Interstellar reddening and the reddening vector</a></li>
    <li class="backlink-item-wrap"><a href="./Isochrones%20and%20isochrone%20fitting.html" class="backlink-item">Isochrones and isochrone fitting</a></li>
    <li class="backlink-item-wrap"><a href="./MK%20luminosity%20classes.html" class="backlink-item">MK luminosity classes</a></li>
    <li class="backlink-item-wrap"><a href="./Magnitudes%20and%20photometric%20systems.html" class="backlink-item">Magnitudes and photometric systems</a></li>
    <li class="backlink-item-wrap"><a href="./Main%20sequence%20on%20the%20CMD.html" class="backlink-item">Main sequence on the CMD</a></li>
    <li class="backlink-item-wrap"><a href="./Mass-luminosity%20relation.html" class="backlink-item">Mass-luminosity relation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Astrophysics_MOC.html" class="backlink-item">Observational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Pre-main%20sequence%20evolution%20and%20protostars.html" class="backlink-item">Pre-main sequence evolution and protostars</a></li>
    <li class="backlink-item-wrap"><a href="./Red%20giant%20branch%20RGB.html" class="backlink-item">Red giant branch RGB</a></li>
    <li class="backlink-item-wrap"><a href="./Resolved%20vs%20unresolved%20stellar%20populations.html" class="backlink-item">Resolved vs unresolved stellar populations</a></li>
    <li class="backlink-item-wrap"><a href="./Solar%20evolution%20and%20final%20stages.html" class="backlink-item">Solar evolution and final stages</a></li>
    <li class="backlink-item-wrap"><a href="./Spectroscopic%20determination%20of%20log%20g.html" class="backlink-item">Spectroscopic determination of log g</a></li>
    <li class="backlink-item-wrap"><a href="./Spectroscopic%20parallax%20and%20main-sequence%20fitting.html" class="backlink-item">Spectroscopic parallax and main-sequence fitting</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20evolutionary%20phases%20on%20the%20CMD.html" class="backlink-item">Stellar evolutionary phases on the CMD</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20scaling%20relations.html" class="backlink-item">Stellar scaling relations</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20spectra%20and%20spectral%20classification.html" class="backlink-item">Stellar spectra and spectral classification</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20spectral%20types%20OBAFGKM.html" class="backlink-item">Stellar spectral types OBAFGKM</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./TRGB%20tip%20of%20the%20red%20giant%20branch.html" class="backlink-item">TRGB tip of the red giant branch</a></li>
    <li class="backlink-item-wrap"><a href="./WDCS%20vs%20MSTO%20ages%20comparison.html" class="backlink-item">WDCS vs MSTO ages comparison</a></li>
    <li class="backlink-item-wrap"><a href="./White%20dwarf%20overview.html" class="backlink-item">White dwarf overview</a></li>
    <li class="backlink-item-wrap"><a href="./White%20dwarf%20types%20He%20CO%20ONeMg.html" class="backlink-item">White dwarf types He CO ONeMg</a></li>
  </ul>
</div>
