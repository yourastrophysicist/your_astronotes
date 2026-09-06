---
layout: default
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

$$L_{Edd} = \frac{4\pi G M m_p c}{\sigma_T} \approx 1.3 \times 10^{38} \left(\frac{M}{M_\odot}\right)~\text{erg s}^{-1}$$

where
	$m_p$ is the proton mass
	$\sigma_T$ is the Thomson cross section

If $L > L_{Edd}$, radiation pressure halts the accretion flow
	this sets an upper limit on the accretion rate $\dot{m}_{Edd}$

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
