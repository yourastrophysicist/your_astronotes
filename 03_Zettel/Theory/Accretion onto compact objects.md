---
layout: "default"
title: "Accretion onto compact objects"
---
## Overview

Many high-energy astrophysical sources are powered by **accretion**
	the process by which matter falls onto a compact object
		releasing gravitational potential energy as radiation

The two main classes are:
	**Active Galactic Nuclei (AGN)**
		powered by accretion onto a **supermassive black hole** (SMBH)
			with masses $M \sim 10^6$–$10^9~M_\odot$
	**X-ray binary systems (XRBs)**
		powered by accretion onto a **neutron star** or **stellar-mass black hole**
			with masses $M \sim 1$–$10~M_\odot$
				fed by a companion star in a binary system

---

## Accretion luminosity

The gravitational energy released when a mass $m$ falls onto a compact object of mass $M$ and radius $R$ is:
$$\Delta E = \frac{GMm}{R}$$

The **accretion luminosity** is:
$$L_{acc} = \eta \dot{m} c^2$$

where
	$\dot{m}$ is the mass accretion rate
	$\eta$ is the **radiative efficiency**
		$\eta \approx 0.1$ for accretion onto a neutron star
		$\eta \approx 0.06$–$0.42$ for accretion onto a black hole (depending on spin)

This makes accretion far more efficient than nuclear fusion ($\eta_{nuc} \approx 0.007$)

---

## Eddington luminosity

There is a maximum luminosity at which accretion can occur,
	set by the balance between **radiation pressure** (outward) and **gravity** (inward)

**Derivation.** Consider a fully ionized hydrogen plasma at radius $r$ from a compact object of mass $M$. Radiation pressure acts on the free electrons via Thomson scattering (cross-section $\sigma_T$), while gravity acts on the much heavier protons that are electrostatically bound to those electrons — so the outward radiation force on an electron-proton pair is transmitted to the proton's inertia via the Coulomb coupling. The outward radiative force per electron is
$$F_{\rm rad} = \frac{\sigma_T\,F(r)}{c}, \qquad F(r) = \frac{L}{4\pi r^2}$$
and the inward gravitational force on the associated proton is
$$F_{\rm grav} = \frac{GMm_p}{r^2}$$
Setting $F_{\rm rad}=F_{\rm grav}$ and solving for the luminosity at which the two exactly balance:
$$\boxed{\, L_{\rm Edd} = \frac{4\pi GMm_pc}{\sigma_T} \approx 1.3\times10^{38}\left(\frac{M}{M_\odot}\right)\,{\rm erg\,s^{-1}} \,}$$
where:
- $m_p$ is the proton mass
- $\sigma_T = 6.65\times10^{-25}\,{\rm cm^2}$ is the Thomson cross section

**Asymptotic check**: for $r\to\infty$, $F(r)\to0$ and radiation force becomes negligible relative to gravity at any finite luminosity — the Eddington limit is a statement about the luminosity-to-mass ratio, not about distance, precisely because both forces share the same $r^{-2}$ scaling and the balance condition is radius-independent.

If $L > L_{Edd}$, radiation pressure halts (or drives outflowing) the accretion flow
	this sets an upper limit on the steady accretion rate $\dot{m}_{\rm Edd} = L_{\rm Edd}/(\eta c^2)$

---

## Accretion disk

Accreting matter with angular momentum cannot fall radially onto the compact object
	it forms an **accretion disk** instead
		where matter spirals inward, losing angular momentum through viscosity

The disk radiates as a **multicolor blackbody**
	with temperature profile:
$$T(r) \propto r^{-3/4}$$

The innermost stable circular orbit (**ISCO**) defines the inner edge of the disk
	for a Schwarzschild (non-spinning) black hole: $r_{ISCO} = 6 r_g = 6 \frac{GM}{c^2}$
	for a spinning (Kerr) black hole, $r_{ISCO}$ shrinks toward $r_g$ as spin increases — see [[Innermost Stable Circular Orbit ISCO]] for the full spin-dependent derivation

The radiative efficiency $\eta$ quoted above is not a free parameter: it is fixed by how much specific binding energy remains at the ISCO, $\eta = 1-E_{\rm ISCO}/mc^2$, which is why $\eta$ rises from $\approx0.057$ (Schwarzschild) to $\approx0.42$ (maximal prograde Kerr) — see [[Innermost Stable Circular Orbit ISCO]] and [[Bardeen_Press_Teukolsky_1972_Rotating_Black_Holes]].

Emission peaks in:
	**soft X-rays** for XRBs ($T \sim 10^6$–$10^7~\text{K}$)
	**UV/optical** for AGN (larger $M$, lower $T$)

---

## X-ray binary systems

In XRBs, the mass transfer from the companion can occur via:
	**Roche lobe overflow**
		companion fills its Roche lobe and mass flows through the inner Lagrange point $L_1$
	**stellar wind capture**
		compact object captures part of the companion's wind

XRBs are classified by the mass of the companion:
	**High-mass X-ray binaries (HMXB)**
		companion is an OB supergiant or Be star
			mass transfer primarily via stellar wind
	**Low-mass X-ray binaries (LMXB)**
		companion is a low-mass star
			mass transfer via Roche lobe overflow

![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/X-Ray_binary.jpg/640px-X-Ray_binary.jpg)
<font color="#bfbfbf">Artist's impression of an X-ray binary system. The companion star fills its Roche lobe and transfers mass through the inner Lagrange point $L_1$ onto the compact object, forming an accretion disk.</font>

---

## Active Galactic Nuclei

AGN are the most luminous persistent sources in the universe
	powered by accretion onto a SMBH at the center of a galaxy

The **unified model** of AGN proposes that different AGN types are the same object
	viewed from different angles relative to the obscuring **torus**:
		**Seyfert 1 / quasar**: direct view of the nucleus and broad-line region
		**Seyfert 2**: nucleus obscured by the torus, only narrow lines visible
		**Blazars**: jet directed toward the observer

AGN emit across the entire electromagnetic spectrum
	X-ray emission traces the innermost accretion region closest to the black hole

![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Emmaalexander_unified_agn.png/500px-Emmaalexander_unified_agn.png)
<font color="#bfbfbf">The unified model of AGN. The central SMBH and accretion disk are surrounded by a dusty torus. Different observational classes (Seyfert 1, Seyfert 2, blazar) correspond to the same physical object viewed at different inclination angles with respect to the torus.</font>

## Primary Literature

- **Shakura & Sunyaev (1973)**, *A&A* 24, 337 — the $\alpha$-disk model deriving $T(r)\propto r^{-3/4}$ from first principles. Full synthesis: [[Shakura_Sunyaev_1973_Thin_Accretion_Disk_Theory]].
- **Bardeen, Press & Teukolsky (1972)**, *ApJ* 178, 347 — the ISCO and accretion-efficiency formulas used above. Full synthesis: [[Bardeen_Press_Teukolsky_1972_Rotating_Black_Holes]].

## see also

- [[Innermost Stable Circular Orbit ISCO]]
- [[Kerr Metric Horizon and Ergosphere Geometry]]
- [[Blandford-Znajek Mechanism]]
- [[Relativistic Iron Line Profiles]]

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Luminosity.html" class="backlink-item">Luminosity</a></li>
    <li class="backlink-item-wrap"><a href="Radiative%20Processes.html" class="backlink-item">Radiative Processes</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Lab_High-Energy_MOC.html" class="backlink-item">Lab_High-Energy_MOC</a></li>
  </ul>
</div>

