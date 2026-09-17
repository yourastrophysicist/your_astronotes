---
layout: "default"
title: "Carraro_01_Introduction_and_Multi-phase_ISM"
name: "Carraro 01 - Introduction and Multi-phase ISM"
course: "Astrophysics of the Interstellar Medium"
lecturer: "Prof. Giovanni Carraro"
session: "01"
tags: ""
---
{% raw %}
# Carraro 01 - Introduction and the Multi-Phase Interstellar Medium

*Course: Astrophysics of the Interstellar Medium, Master in Astrophysics and Cosmology, Università degli Studi di Padova*  
*Lecturer: Prof. Giovanni Carraro*  
*Index: [Astrophysics_of_the_Interstellar_Medium_MOC](../../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html)*

---

## the definition and scope of the ism

the interstellar medium (ISM) encompasses everything in a galaxy that is not locked into stars or compact stellar remnants. while the ISM accounts for only about 10% to 15% of the total baryonic mass in a typical spiral galaxy like the Milky Way, it represents the dynamical and chemical engine driving galaxy evolution.

the operational definition given by prof. carraro:
> "the ISM is a magnetized, turbulent, partially ionized, and dusty fluid."

each of these four physical descriptors dictates the equations needed to model it:
1. **magnetized**: the magnetic field ($B \sim 	ext{few } \mu	ext{G}$) provides non-thermal pressure support, directs gas flows along field lines, facilitates angular momentum transport via magnetic braking during star formation, and accelerates cosmic rays.
2. **turbulent**: flow velocities across parsec to kiloparsec scales routinely exceed the local sound speed, yielding supersonic, highly compressible turbulence characterized by large Reynolds numbers ($Re \sim 10^5 - 10^8$).
3. **partially ionized**: ionization fractions span eight orders of magnitude, ranging from $x_e \lesssim 10^{-7}$ in dense shielded molecular cores to $x_e \sim 1$ in HII regions and the coronal hot gas.
4. **dusty**: refractory dust grains make up only $pprox 1\%$ of the ISM mass, yet they dominate the opacity from the far-ultraviolet to the near-infrared, govern the thermodynamic heating via photoelectric ejection of electrons, and catalyze molecular hydrogen ($H_2$) formation.

---

## why study the interstellar medium?

there are three fundamental astrophysical motivations:

1. **stars form out of the ISM**: dense, cold molecular gas undergoes gravitational collapse (the Jeans instability) to produce stellar clusters and proto-planetary disks (such as L1551 and the Pipe Nebula/Barnard 59). the density distribution, magnetic fields, and turbulence of the parent cloud dictate the Initial Mass Function (IMF) and Star Formation Efficiency (SFE).
2. **stars end their lives by returning enriched gas to the ISM**: massive stars drive energetic stellar winds and detonate as core-collapse supernovae; intermediate- and low-mass stars ascend the Asymptotic Giant Branch (AGB) and shed enriched envelopes as planetary nebulae. this feedback injects momentum, kinetic energy, and nucleosynthetic products (metals and dust grains) into the diffuse gas, powering the cosmic matter cycle.
3. **we must observe the universe looking through the ISM**: every extragalactic observation, cosmological distance measurement, or stellar photometric survey is subject to interstellar dust extinction, reddening, selective absorption lines, and foreground radio/microwave emissions. understanding the intervening ISM is prerequisite to precision astrophysics.

---

## the lifecycle of interstellar gas

the ISM operates as a non-equilibrium, cyclical thermodynamic engine:

$$\text{Diffuse Neutral Gas (HI)} \xrightarrow{\text{compression, cooling, dust shielding}} \text{Molecular Clouds }(H_2)$$
$$\text{Molecular Clouds} \xrightarrow{\text{gravitational collapse}} \text{Protostellar Cores} \xrightarrow{\text{fusion}} \text{Stars}$$
$$\text{Massive Stars} \xrightarrow{\text{Lyman continuum photons}} \text{HII Regions (Photoionization)}$$
$$\text{Massive Stars} \xrightarrow{\text{Supernova Explosions, Winds}} \text{Hot Coronal Gas (HIM)} + \text{Shock Waves}$$
$$\text{Coronal Gas} \xrightarrow{\text{cooling, chimneys, galactic fountains}} \text{Cool Neutral Clouds (Falling HVCs)}$$

this cycle drives continuous chemical enrichment over cosmic time, steadily increasing the metallicity $Z$ of subsequent stellar generations.

---

## the components of the interstellar medium

interstellar gas is segregated into distinct thermal and ionization phases that coexist in approximate thermal pressure equilibrium. the empirical parameters compiled in the course table summarize these components:

| Component | Fractional Volume ($f_V$) | Scale Height $h$ (pc) | Temperature $T$ (K) | Density $n$ ($\text{cm}^{-3}$) | State of Hydrogen | Primary Observational Tracers |
|---|---|---|---|---|---|---|
| **Molecular Clouds** | $< 1\%$ | $\sim 80$ | $10 - 20$ | $10^2 - 10^6$ | Molecular ($H_2$) | Radio and mm molecular rotational lines (CO, HCN, CS), thermal IR dust emission, near-IR dust absorption (e.g. Barnard 68) |
| **Cold Neutral Medium (CNM)** | $1 - 5\%$ | $100 - 300$ | $50 - 100$ | $20 - 50$ | Neutral atomic (H I) | H I 21 cm line absorption against bright background continuum sources |
| **Warm Neutral Medium (WNM)** | $10 - 20\%$ | $300 - 400$ | $6000 - 10000$ | $0.2 - 0.5$ | Neutral atomic (H I) | H I 21 cm line emission |
| **Warm Ionized Medium (WIM)** | $20 - 50\%$ | $\sim 1000$ | $\approx 8000$ | $0.2 - 0.5$ | Ionized ($H^+$) | Diffuse H$\alpha$ recombination emission, pulsar dispersion measures (DM) |
| **H II Regions** | $< 1\%$ | $\sim 70$ | $\approx 8000$ | $10^2 - 10^4$ | Ionized ($H^+$) | Bright optical recombination lines (H$\alpha$, H$\beta$), radio recombination lines, collisionally excited forbidden lines ([O III], [N II]) |
| **Coronal Gas / Hot Ionized Medium (HIM)** | $30 - 70\%$ | $1000 - 3000$ | $10^6 - 10^7$ | $10^{-4} - 10^{-2}$ | Highly ionized plasma ($H^+$, $He^{2+}$, stripped metals) | Soft X-ray diffuse emission, FUV resonance absorption lines (O VI $\lambda\lambda 1032, 1038$, C IV, N V) |

### physical notes on the phases

1. **Molecular Phase**:
   concentrated in the thin Galactic plane ($h \approx 80\text{ pc}$). because symmetric $H_2$ lacks a permanent electric dipole moment, its lowest rotational quadrupolar transition ($J=2 \rightarrow 0$) requires excitation energies of $\Delta E/k \approx 510\text{ K}$, completely dormant at $T \sim 10 - 20\text{ K}$. we rely on trace polar molecules like $^{12}\text{C}^{16}\text{O}$ ($J=1 \rightarrow 0$ at $2.6\text{ mm}$ / $115.27\text{ GHz}$, where $\Delta E/k \approx 5.5\text{ K}$) and empirical $X_{\text{CO}}$ conversion factors:
   $$N(H_2) = X_{\text{CO}} \cdot W_{\text{CO}}$$
   where $X_{\text{CO}} \approx 2 \times 10^{20}\text{ cm}^{-2}\ (\text{K km s}^{-1})^{-1}$.

2. **The Neutral Medium (Two-Phase Field-Goldsmith-Habing Model)**:
   both the CNM and WNM are maintained by the thermal balance between photoelectric heating from small dust grains/PAHs and cooling via fine-structure lines. the cooling curve allows two stable phases at the same thermal pressure: the dense, cold CNM ($T \approx 80\text{ K}$) and the diffuse, warm WNM ($T \approx 8000\text{ K}$).

3. **The Ionized Medium**:
   - **localized HII regions**: photoionized bubbles surrounding young OB associations (e.g. 30 Doradus in the Large Magellanic Cloud).
   - **the diffuse WIM (Reynolds Layer)**: characterized by a very large vertical scale height ($h \sim 1\text{ kpc}$), requiring an immense power source ($\approx 10^{-4}\text{ erg s}^{-1}\text{ cm}^{-2}$) that only the leaking ionizing radiation from OB stars can sustain.

4. **The Hot Ionized Medium (HIM)**:
   originates from overlapping supernova blast waves and fast stellar winds. with temperatures $T \sim 10^6\text{ K}$, the sound speed is high ($c_s \sim 150\text{ km s}^{-1}$), allowing the hot gas to expand vertically out of the galactic potential, creating superbubbles, chimneys, and galactic fountains that extend into the halo.

---

## pressure equilibrium

to first order, these phases share a roughly comparable thermal pressure:

$$P_{\text{th}}/k = n T \sim 10^3 - 10^4\text{ K cm}^{-3}$$

- for CNM: $n \sim 50\text{ cm}^{-3}, T \sim 80\text{ K} \implies P/k \approx 4000\text{ K cm}^{-3}$
- for WNM: $n \sim 0.5\text{ cm}^{-3}, T \sim 8000\text{ K} \implies P/k \approx 4000\text{ K cm}^{-3}$
- for WIM: $n \sim 0.3\text{ cm}^{-3}, T \sim 8000\text{ K} \implies P/k \approx 2400\text{ K cm}^{-3}$
- for HIM: $n \sim 0.003\text{ cm}^{-3}, T \sim 10^6\text{ K} \implies P/k \approx 3000\text{ K cm}^{-3}$

total pressure support in the Galactic plane is significantly higher ($\sim 2-3 \times 10^4\text{ K cm}^{-3}$) once non-thermal contributions from magnetic fields ($P_B = B^2 / 8\pi$), turbulent ram pressure ($P_{\text{turb}} = \rho \sigma_v^2$), and cosmic rays ($P_{\text{CR}}$) are included:

$$P_{\text{tot}} = P_{\text{th}} + P_{\text{turb}} + P_B + P_{\text{CR}}$$

in the Solar neighborhood, all four components contribute roughly equal energy densities ($\sim 1\text{ eV cm}^{-3}$).

---

## course syllabus overview

prof. carraro's lectures cover the physical principles governing each regime:
1. **fluid dynamics & non-ideal dissipation**: continuity, Navier-Stokes, acoustic waves, shock waves, Sod shock tubes, Rankine-Hugoniot jump conditions, and turbulence (Reynolds number, Kolmogorov cascade).
2. **electrodynamics & magnetohydrodynamics**: Maxwell's equations in astrophysical media, flux freezing, Alfvén waves, magnetosonic waves, vector calculus identities.
3. **neutral hydrogen (HI)**: 21 cm spin-flip physics, spin temperature $T_s$, optical depth and column density $N_{\text{HI}}$, rotation curves, Galactic spiral structure, and dark matter.
4. **photoionized gas & HII regions**: Strömgren spheres, ionization equilibrium, Case A vs Case B recombination, forbidden line spectroscopy ($p^2$ and $p^3$ configurations), plasma diagnostics for $T_e$ and $n_e$, primordial helium abundance, and line-driven stellar winds.
5. **interstellar dust**: Trumpler's discovery, extinction and reddening curves, the CCM 1989 law, 2175 Å bump, DIBs, UIBs/PAHs, grain chemistry, catalytic $H_2$ formation, and infrared SFR diagnostics.
6. **high-energy feedback & the HIM**: supernova remnants, blast wave dynamics (Sedov-Taylor expansion), superbubbles, galactic chimneys and fountains, high-velocity clouds, and cluster ram pressure stripping.
7. **interstellar magnetic fields**: starlight polarization, dust thermal emission, Zeeman splitting, Faraday rotation ($RM/DM$), and synchrotron radiation.

---

## see also

- [Astrophysics_of_the_Interstellar_Medium_MOC](../../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html)
- [Multi-phase structure of the interstellar medium](../../../03_Zettel/Theory/Multi-phase%20structure%20of%20the%20interstellar%20medium.html)
- [Interstellar medium components and gas cycle](../../../03_Zettel/Theory/Interstellar%20medium%20components%20and%20gas%20cycle.html)
- [Carraro_02_Neutral_Hydrogen_and_21cm_Universe](./Carraro_02_Neutral_Hydrogen_and_21cm_Universe.html)
- [Carraro_03_HII_Regions_and_Photoionized_Gas](./Carraro_03_HII_Regions_and_Photoionized_Gas.html)
- [Carraro_05_Interstellar_Dust_and_Extinction](./Carraro_05_Interstellar_Dust_and_Extinction.html)
- [Carraro_06_Supernovae_and_Hot_Ionized_Medium](./Carraro_06_Supernovae_and_Hot_Ionized_Medium.html)
- [Carraro_07_Interstellar_Magnetic_Fields](./Carraro_07_Interstellar_Magnetic_Fields.html)
- [Carraro_08_Shocks_Turbulence_and_MHD_Waves](./Carraro_08_Shocks_Turbulence_and_MHD_Waves.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html" class="backlink-item">Astrophysics_of_the_Interstellar_Medium_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Carraro_02_Neutral_Hydrogen_and_21cm_Universe.html" class="backlink-item">Carraro_02_Neutral_Hydrogen_and_21cm_Universe</a></li>
    <li class="backlink-item-wrap"><a href="./Carraro_03_HII_Regions_and_Photoionized_Gas.html" class="backlink-item">Carraro_03_HII_Regions_and_Photoionized_Gas</a></li>
    <li class="backlink-item-wrap"><a href="./Carraro_05_Interstellar_Dust_and_Extinction.html" class="backlink-item">Carraro_05_Interstellar_Dust_and_Extinction</a></li>
    <li class="backlink-item-wrap"><a href="./Carraro_06_Supernovae_and_Hot_Ionized_Medium.html" class="backlink-item">Carraro_06_Supernovae_and_Hot_Ionized_Medium</a></li>
    <li class="backlink-item-wrap"><a href="./Carraro_07_Interstellar_Magnetic_Fields.html" class="backlink-item">Carraro_07_Interstellar_Magnetic_Fields</a></li>
    <li class="backlink-item-wrap"><a href="./Carraro_08_Shocks_Turbulence_and_MHD_Waves.html" class="backlink-item">Carraro_08_Shocks_Turbulence_and_MHD_Waves</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Multi-phase%20structure%20of%20the%20interstellar%20medium.html" class="backlink-item">Multi-phase structure of the interstellar medium</a></li>
  </ul>
</div>
