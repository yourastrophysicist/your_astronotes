---
layout: "default"
title: "Blandford-Znajek Mechanism"
---
## Physical Concept & Overview

A black hole in vacuum has no way to radiate energy — it can only grow. Yet the most powerful jets in the universe (AGN, blazars, some X-ray binaries) are observed to be powered by objects with a black hole at their center. The **Blandford-Znajek mechanism** resolves this apparent paradox: a spinning black hole threaded by a large-scale magnetic field, anchored in a surrounding conducting accretion disk, can electromagnetically extract a fraction of its rotational energy without any matter itself crossing the horizon carrying that energy outward. The horizon behaves as a rotating conductor in a magnetic field — the general-relativistic analogue of a unipolar inductor — driving a current circuit whose energy dissipation, at "infinity," is the observed jet.

---

## Mathematical Derivation

### 1. Fundamental Postulates & Geometry

The mechanism operates in the **force-free electrodynamics** approximation: the magnetic field is dynamically dominant over the plasma's inertia and pressure, so the plasma exerts negligible back-reaction and simply co-moves with the field, subject to
$$\rho_e E^\mu + \frac{1}{c}(J\times B)^\mu = 0$$
This is combined with the **membrane paradigm**, which treats the black hole's event horizon as a fictitious, physical 2-surface with an effective surface resistivity
$$R_H = \frac{4\pi}{c} = 377\,\Omega$$
(numerically equal to the impedance of free space) — turning the otherwise purely geometric problem of field lines threading a horizon into an exactly solvable electrical-circuit problem.

### 2. Intermediate Steps & Integration

The horizon, rotating at angular velocity $\Omega_H = a/(r_+^2+a^2)$ (see [[Kerr Metric Horizon and Ergosphere Geometry]]), threaded by poloidal magnetic flux $\Phi_H$, acts as a battery with electromotive force
$$\mathcal{E} = \frac{\Omega_H\,\Phi_H}{2\pi c}$$
This EMF drives a current $I$ around a circuit that includes the horizon's own resistance $R_H$ in series with an external load resistance $R_L$ set by the resistive properties of the surrounding plasma and the jet itself (analogous to a battery of internal resistance $R_H$ driving current through an external load $R_L$). The power delivered to the external load — the jet — is maximized, by the standard maximum-power-transfer theorem of circuit theory, when the load is impedance-matched to the source, $R_L\sim R_H$.

### 3. Final Analytic Expression & Asymptotics

Carrying through the full force-free solution for an assumed large-scale poloidal field geometry (e.g. split-monopole or paraboloidal field threading the horizon), the extracted power is
$$\boxed{\, P_{\rm BZ} = \frac{\kappa}{4\pi c}\,\Phi_H^2\,\Omega_H^2 \,}$$
where:
- $\Phi_H$ is the magnetic flux threading the horizon
- $\Omega_H$ is the horizon angular velocity
- $\kappa$ is an $\mathcal{O}(1)$ dimensionless constant depending on the assumed field geometry, with modern GRMHD simulations of magnetically arrested disks (MAD) giving $\kappa\approx0.05$–$0.1$ for realistic, disk-fed magnetic flux distributions

**Low-spin expansion**: since $\Omega_H = a/(r_+^2+a^2) \to a/(4M^2)$ for $a\ll M$ (using $r_+\to2M$ in this limit), the power scales as
$$P_{\rm BZ} \propto \Phi_H^2\,a^2 \quad (a\ll M)$$
i.e. quadratically in spin at low spin.

**Asymptotic checks**:
- $a\to0$ (Schwarzschild limit): $\Omega_H\to0$, so $P_{\rm BZ}\to0$ identically — a non-spinning black hole has no rotational energy to extract via this channel, and any observed jet from such a system must derive its power from the accretion disk itself (see [[Blandford_Payne_1982_Jet_Launching_Disk_Wind]]) rather than from the hole.
- $a\to M$ (extremal Kerr): $\Omega_H\to1/2M$, its maximum possible value (see [[Kerr Metric Horizon and Ergosphere Geometry]]), so $P_{\rm BZ}$ is maximized for fixed $\Phi_H$ — jet power is theoretically maximized for maximally spinning black holes, motivating the observationally tested correlation between radio-loudness and inferred spin in some AGN samples.
- $\Phi_H\to0$ (unmagnetized horizon): $P_{\rm BZ}\to0$ quadratically — the mechanism strictly requires an externally supplied, disk-anchored magnetic field; a black hole cannot generate its own field from nothing (no "black hole dynamo").

---

## Observational Diagnostic & Astrophysical Relevance

The Blandford-Znajek mechanism is now the leading explanation for the most powerful relativistic jets in AGN (blazars, radio galaxies, quasars including sources such as 4C 31.61) and some X-ray binaries. It is directly tested by resolved, polarimetric Event Horizon Telescope imaging of the jet-launching region of M87*, whose observed magnetic-field geometry and inferred magnetic flux saturation state (magnetically arrested disk) are broadly consistent with spin-powered, BZ-mechanism jet launching. GRMHD simulations (see [[Porth_2019_EHT_GRMHD_Code_Comparison]]) are the primary tool for quantitatively testing the $\kappa$ coefficient and MAD-state flux saturation predicted by this mechanism.

---

## Primary Research & Literature Provenance
- **Seminal Classical Reference**: Blandford & Znajek (1977), *MNRAS* 179, 433 — the original derivation. Full synthesis: [[Blandford_Znajek_1977_Electromagnetic_Extraction_Kerr_BH]].
- **Recent arXiv Benchmark**: Blandford, Meier & Readhead (2019), *arXiv:1812.06025* — modern synthesis connecting this mechanism to the full AGN jet population. Full synthesis: [[Blandford_Meier_Readhead_2019_Relativistic_AGN_Jets]].
- **Simulation Validation**: Porth et al. (2019), *arXiv:1904.04923* — GRMHD code comparison validating the simulation tools used to test this mechanism's MAD-state predictions. Full synthesis: [[Porth_2019_EHT_GRMHD_Code_Comparison]].


