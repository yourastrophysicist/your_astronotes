---
layout: "default"
title: "Carraro_04_Massive_Stars_Feedback_and_Stellar_Winds"
name: "Carraro 04 - Massive Stars Feedback and Stellar Winds"
course: "Astrophysics of the Interstellar Medium"
lecturer: "Prof. Giovanni Carraro"
session: "04"
tags: ""
---
{% raw %}
# Carraro 04 - Massive Stars Feedback and Stellar Winds

*Course: Astrophysics of the Interstellar Medium, Master in Astrophysics and Cosmology, Università degli Studi di Padova*  
*Lecturer: Prof. Giovanni Carraro*  
*Index: [Astrophysics_of_the_Interstellar_Medium_MOC](../../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html)*

---

## radiation pressure and mass-loss mechanisms

massive O, B, and Wolf-Rayet stars inject immense amounts of mechanical energy, momentum, and enriched gas into the ISM long before they explode as supernovae. this mechanical feedback is driven primarily by **radiation pressure on resonance absorption lines** in the outer stellar atmosphere (line-driven winds, Castor, Abbott, & Klein 1975).

as a stellar photon with frequency $\nu$ matches an atomic line transition frequency $\nu_0$ in the co-moving frame of the outflowing gas, it is absorbed, transferring its radial photon momentum:

$$\Delta p = \frac{h\nu}{c}$$

subsequent spontaneous re-emission is isotropic in the rest frame of the atom. the time-averaged net force on the gas is directed radially outward, accelerating the upper atmospheric layers into an expanding stellar wind.

---

## the eddington parameter and modified escape velocity

to understand how stellar winds break free from the gravitational pull of the star, we examine the balance between gravity and radiative acceleration.

### the eddington luminosity

the classical Eddington limit represents the radiative luminosity at which radiation pressure acting on free electrons (Thomson scattering) exactly balances gravitational attraction:

$$\frac{G M \rho}{R^2} = \frac{\kappa_{\text{es}} \rho L_{\text{Edd}}}{4\pi R^2 c}$$

where $\kappa_{\text{es}} = \sigma_e / \mu_e m_H \approx 0.34\text{ cm}^2\text{ g}^{-1}$ is the electron scattering opacity for ionized solar abundance gas. the **Eddington luminosity** is:

$$L_{\text{Edd}} = \frac{4\pi G M c}{\kappa_{\text{es}}} = \frac{4\pi G M c}{\sigma}$$

where $\sigma$ is the opacity per unit mass as written on prof. carraro's slide 20.

### the eddington factor $\Gamma$

the ratio of the actual stellar luminosity $L$ to the Eddington luminosity is the Eddington parameter:

$$\Gamma = \frac{L}{L_{\text{Edd}}}$$

for massive O stars, Wolf-Rayet stars, and Luminous Blue Variables (LBVs), $\Gamma$ approaches unity ($\\Gamma \sim 0.5 - 0.9$).

### effective gravity and escape velocity

the net outward radiative force reduces the effective gravitational acceleration experienced by the gas at the stellar surface:

$$g_{\text{eff}}(R) = -\frac{G M}{R^2} + g_{\text{rad}} = -\frac{G M}{R^2} (1 - \Gamma)$$

the work required to remove a mass parcel from the stellar radius $R$ to infinity defines the **effective escape velocity**:

$$v_{\text{esc}} = \left[\frac{2 G M}{R}(1 - \Gamma)\right]^{1/2}$$

as the star approaches the Eddington limit ($\Gamma \rightarrow 1$), the effective escape velocity plummets towards zero, making it easy for radiation pressure acting on thousands of UV resonance lines (C IV, N V, Si IV, Fe lines) to launch massive outflows.

---

## wind velocity and mass-loss rate

### wind velocity law

the outflow accelerates outward following the empirical $\beta$-velocity law:

$$v(r) = v_\infty \left(1 - \frac{R_*}{r}\right)^\beta$$

where $\beta \sim 0.8 - 1.0$ for massive OB stars, and $v_\infty$ is the **terminal wind velocity**. the terminal velocity scales directly with the effective escape velocity:

$$v_\infty \approx (2.5 - 3.0) \cdot v_{\text{esc}}$$

typical observed terminal velocities:
- early O dwarfs (O3-O5 V): $v_\infty \sim 2500 - 3500\text{ km s}^{-1}$
- early B supergiants: $v_\infty \sim 1000 - 1500\text{ km s}^{-1}$
- Wolf-Rayet stars: $v_\infty \sim 1500 - 3000\text{ km s}^{-1}$

### mass-loss rate: $\dot{M} = dM/dt$

by mass conservation through concentric spheres of radius $r$:

$$\dot{M} = \frac{dM}{dt} = 4\pi r^2 \rho(r) v(r) = \text{constant}$$

the density profile of the stellar wind drops as:

$$\rho(r) = \frac{\dot{M}}{4\pi r^2 v(r)} \propto \frac{1}{r^2} \quad \text{at } r \gg R_*$$

typical mass-loss rates:
- O dwarfs: $\dot{M} \sim 10^{-7} - 10^{-6}\, M_\odot\text{ yr}^{-1}$
- O supergiants: $\dot{M} \sim 10^{-6} - 10^{-5}\, M_\odot\text{ yr}^{-1}$
- Wolf-Rayet stars: $\dot{M} \sim 10^{-5} - 10^{-4}\, M_\odot\text{ yr}^{-1}$

over a 3-million-year lifespan, a $60\, M_\odot$ O star can lose more than half its initial mass entirely through stellar winds before ever reaching the supernova stage.

---

## spectral diagnostics: p-cygni line profiles

the observational signature of an accelerating stellar wind is the **P-Cygni profile** (named after the luminous variable star P Cygni).

### geometry of the line-forming region

consider a spherical wind expanding symmetrically from a stellar photosphere of radius $R_*$ with radial velocity $v(r)$:

1. **Absorption Column (in front of the stellar disk)**:
   the cylinder of wind directly along the line of sight between the observer and the stellar continuum disk acts as an absorption column. because the gas is flowing towards the observer, the absorption is Doppler-shifted to shorter wavelengths:
   $$\Delta \lambda = -\lambda_0 \frac{v(r)}{c}$$
   this produces a **blueshifted absorption trough**. the maximum blueshift extends all the way to the terminal velocity $-v_\infty$, providing a direct spectroscopic measurement of $v_\infty$.
2. **Emission Envelope (the off-axis wind)**:
   the vast spherical volume of wind extending to the sides, in front of, and behind the star also scatters and emits resonance line photons.
   - the lateral lobes have near-zero radial velocity relative to the observer, emitting at the rest wavelength $\lambda_0$.
   - the receding lobes behind the star are redshifted ($v_r > 0$).
   - the approaching lobes in front of the star are blueshifted ($v_r < 0$).
   summed over the spherical volume, the wind re-emits a broad, symmetric emission line centered at the rest wavelength $\lambda_0$.
   (the portion of the receding wind directly occulted by the opaque stellar disk is hidden from view, slightly suppressing the extreme red wing).

combining the blueshifted absorption from the column with the broad emission from the extended envelope generates the characteristic P-Cygni profile: **a deep absorption dip on the blue side and a bright emission peak on the red side.**

---

## feedback into the interstellar medium: wind-blown bubbles

the mechanical power injected into the ISM by the stellar wind is:

$$L_{\text{mech}} = \frac{1}{2} \dot{M} v_\infty^2$$

for $\dot{M} = 10^{-5}\, M_\odot\text{ yr}^{-1} \approx 6.3 \times 10^{20}\text{ g s}^{-1}$ and $v_\infty = 2000\text{ km s}^{-1}$:

$$L_{\text{mech}} \approx \frac{1}{2} (6.3 \times 10^{20}) (2 \times 10^8)^2 \approx 1.3 \times 10^{37}\text{ erg s}^{-1} \approx 3300\, L_\odot$$

this continuous kinetic energy injection sweeps up the ambient interstellar gas into an expanding **interstellar bubble** (the Weaver et al. 1977 model), structuring the surrounding H II region into concentric zones:
1. **unshocked stellar wind**: freely expanding at $v_\infty$.
2. **reverse shock**: where the supersonic wind collides with swept-up material and shocks to high temperatures ($T \sim 10^7\text{ K}$).
3. **shocked wind cavity**: low-density, high-pressure hot bubble emitting diffuse soft X-rays.
4. **contact discontinuity**: separating the shocked wind plasma from the swept-up interstellar gas.
5. **shocked interstellar shell**: dense, cold, swept-up shell of interstellar gas, cooled by radiative emission and expanding into the unshocked ISM.

stellar wind bubbles carve out parsec-scale voids in the neutral gas and sweep up dense shells that later trigger secondary star formation (e.g. around the central Wolf-Rayet star in the Crescent Nebula NGC 6888).

---

## see also

- [Astrophysics_of_the_Interstellar_Medium_MOC](../../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html)
- [Line-driven stellar winds and P-Cygni profiles](../../../03_Zettel/Theory/Line-driven%20stellar%20winds%20and%20P-Cygni%20profiles.html)
- [Carraro_03_HII_Regions_and_Photoionized_Gas](./Carraro_03_HII_Regions_and_Photoionized_Gas.html)
- [Carraro_06_Supernovae_and_Hot_Ionized_Medium](./Carraro_06_Supernovae_and_Hot_Ionized_Medium.html)
- [Superbubbles galactic chimneys and fountains](../../../03_Zettel/Theory/Superbubbles%20galactic%20chimneys%20and%20fountains.html)
- [Stellar evolutionary phases on the CMD](../../../03_Zettel/Theory/Stellar%20evolutionary%20phases%20on%20the%20CMD.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html" class="backlink-item">Astrophysics_of_the_Interstellar_Medium_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Carraro_03_HII_Regions_and_Photoionized_Gas.html" class="backlink-item">Carraro_03_HII_Regions_and_Photoionized_Gas</a></li>
    <li class="backlink-item-wrap"><a href="./Carraro_06_Supernovae_and_Hot_Ionized_Medium.html" class="backlink-item">Carraro_06_Supernovae_and_Hot_Ionized_Medium</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Line-driven%20stellar%20winds%20and%20P-Cygni%20profiles.html" class="backlink-item">Line-driven stellar winds and P-Cygni profiles</a></li>
  </ul>
</div>
