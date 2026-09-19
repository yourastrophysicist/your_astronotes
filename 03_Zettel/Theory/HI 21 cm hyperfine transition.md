---
layout: "default"
title: "HI 21 cm hyperfine transition"
---
the 21 cm line of neutral hydrogen arises from the magnetic dipole interaction between the magnetic moment of the electron ($\boldsymbol{\mu}_e = -g_e \mu_B \mathbf{S}$) and the nuclear magnetic moment of the proton ($\boldsymbol{\mu}_p = g_p \mu_N \mathbf{I}$) in the $1^2S_{1/2}$ ground state.

## quantum states

total atomic angular momentum $\mathbf{F} = \mathbf{S} + \mathbf{I}$:
- **upper triplet state ($F = 1$)**: parallel spins, degeneracy $g_1 = 2F + 1 = 3$.
- **lower singlet state ($F = 0$)**: anti-parallel spins, degeneracy $g_0 = 2F + 1 = 1$.

energy splitting:

$$\Delta E_{\text{hf}} = \frac{8}{3} g_I \frac{m_e}{m_p} \alpha^4 m_e c^2 \approx 5.874 \times 10^{-6}\text{ eV} = 9.412 \times 10^{-18}\text{ erg}$$

frequency and wavelength:

$$\nu_0 = \frac{\Delta E_{\text{hf}}}{h} = 1420.405751768\text{ MHz}$$
$$\lambda_0 = \frac{c}{\nu_0} = 21.106114054\text{ cm}$$

equivalent excitation temperature:

$$T_* = \frac{h\nu_0}{k} = 0.06816\text{ K}$$

## transition probability

because both levels belong to the ground $1s$ orbital with identical even parity, electric dipole transitions are strictly forbidden ($\Delta \ell = 0$). the transition occurs via magnetic dipole radiation ($M1$):

$$A_{10} = \frac{64\pi^4 \nu_0^3}{3 h c^3} \lvert \mu_{10}\rvert^2 = \frac{64\pi^4 \nu_0^3}{3 h c^3} \beta^2 \mu_B^2 = 2.85 \times 10^{-15}\text{ s}^{-1}$$

where $\mu_B = e\hbar / 2 m_e c$ is the Bohr magneton.

spontaneous decay lifetime:

$$\tau = \frac{1}{A_{10}} \approx 3.5 \times 10^{14}\text{ s} \approx 1.11 \times 10^7\text{ years}$$

despite this tiny transition rate, neutral hydrogen columns in galaxies ($N_{\text{HI}} \sim 10^{20} - 10^{22}\text{ cm}^{-2}$) contain so many atoms that the line is bright and observable everywhere.

## see also

- [Astrophysics_of_the_Interstellar_Medium_MOC](../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html)
- [Spin temperature and 21 cm radiative transfer](Spin%20temperature%20and%2021%20cm%20radiative%20transfer.html)
- [Galactic HI kinematics and Milky Way spiral structure](Galactic%20HI%20kinematics%20and%20Milky%20Way%20spiral%20structure.html)
- [Carraro_02_Neutral_Hydrogen_and_21cm_Universe](../../02_Literature/Lectures/Interstellar_Medium/Carraro_02_Neutral_Hydrogen_and_21cm_Universe.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Multi-phase%20structure%20of%20the%20interstellar%20medium.html" class="backlink-item">Multi-phase structure of the interstellar medium</a></li>
    <li class="backlink-item-wrap"><a href="Spin%20temperature%20and%2021%20cm%20radiative%20transfer.html" class="backlink-item">Spin temperature and 21 cm radiative transfer</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html" class="backlink-item">Astrophysics_of_the_Interstellar_Medium_MOC</a></li>
  </ul>
</div>

