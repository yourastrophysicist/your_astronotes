---
layout: "default"
title: "Balbus & Hawley (1991) — A Powerful Local Shear Instability in Weakly Magnetized Disks"
---
## Metadata
- **Authors**: Steven A. Balbus, John F. Hawley
- **Year**: 1991 (foundational paper); review: Balbus & Hawley (1998), *Rev. Mod. Phys.* 70, 1
- **arXiv ID**: none (pre-arXiv era)
- **ADS Bibcode**: `1991ApJ...376..214B`
- **Journal**: *ApJ*, 376, 214
- **Sub-field**: astro-ph.HE / astro-ph.SR
- **Key Observatory / Code**: linear MHD stability analysis; subsequently confirmed by numerous local-shearing-box and global MHD simulations

---

## Executive Summary
Balbus & Hawley identify the physical mechanism that had eluded accretion-disk theory since Shakura & Sunyaev (1973) parametrized angular-momentum transport with an ad hoc viscosity coefficient $\alpha$: a weakly magnetized, differentially rotating disk is generically unstable to a local, linear instability — the **magnetorotational instability (MRI)** — that grows on the local orbital timescale and drives magnetohydrodynamic turbulence efficient enough to transport angular momentum outward at a rate consistent with observationally inferred accretion rates. This identified, for the first time, a first-principles physical origin for the previously phenomenological $\alpha$-viscosity of [[Shakura_Sunyaev_1973_Thin_Accretion_Disk_Theory]].

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: ideal MHD applied to a differentially rotating disk (angular velocity $\Omega(r)$ decreasing outward, as in a Keplerian disk) threaded by a weak poloidal magnetic field, analyzed via linear perturbation theory in the local (shearing-sheet) approximation.

**Local dispersion relation**, obtained by linearizing the ideal-MHD equations (continuity, momentum with Lorentz force, induction equation, and the angular-momentum-conserving epicyclic response) around the differentially rotating background, for a perturbation with vertical wavenumber $k_z$ along the field direction:
$$\omega^4 - \left[\kappa^2 + 2(k_zv_A)^2\right]\omega^2 + (k_zv_A)^2\left[(k_zv_A)^2+\frac{d\Omega^2}{d\ln r}\right] = 0$$
where:
- $\kappa^2 = \frac{1}{r^3}\frac{d(r^4\Omega^2)}{dr}$ is the epicyclic frequency (for a Keplerian disk, $\kappa=\Omega$)
- $v_A = B/\sqrt{4\pi\rho}$ is the Alfvén speed along the field
- $d\Omega^2/d\ln r$ is the local shear rate

**MRI instability criterion**, obtained in the weak-field limit ($k_zv_A\to0$) of the dispersion relation above:
$$\boxed{\, \omega^2 \approx k_z^2v_A^2 + \frac{d\Omega^2}{d\ln r} < 0 \,}$$
For a Keplerian disk, $\Omega\propto r^{-3/2}$, so $d\Omega^2/d\ln r = -3\Omega^2 <0$ — the shear term is *always destabilizing*, and instability ($\omega^2<0$, exponentially growing perturbation) occurs for any sufficiently weak field satisfying $k_z^2v_A^2 < 3\Omega^2$. Crucially, the instability threshold requires only an **arbitrarily weak** field (as $v_A\to0$, ever-longer wavelengths $k_z\to0$ remain unstable) — in stark contrast to purely hydrodynamic (non-magnetized) Keplerian shear flows, which are linearly stable by the Rayleigh criterion.

**Maximum growth rate**, obtained by extremizing $\omega^2(k_z)$ over $k_z$:
$$\omega_{\rm max} = \frac{3}{4}\Omega \quad \text{(Keplerian disk)}$$
i.e. the fastest-growing MRI mode grows on a timescale comparable to the local orbital period — explaining why MRI-driven turbulence saturates rapidly and can plausibly sustain the accretion rates observed in real astrophysical disks.

**Asymptotic checks**: for a non-rotating or solid-body-rotating disk ($d\Omega^2/d\ln r=0$), the shear-driven destabilizing term vanishes and the dispersion relation reduces to a stable magnetosonic/Alfvén wave equation — MRI requires genuine *differential* rotation with $d\Omega^2/d\ln r<0$; for very strong fields ($k_zv_A\gg\Omega$), the instability shuts off entirely (the field becomes dynamically too rigid for the shear to bend and amplify it), recovering the intuitive expectation that sufficiently strong, ordered magnetic fields stabilize a rotating disk against this instability.

---

## Observational Data & Methodology
- **Target / Sample**: theoretical/analytic linear stability calculation; subsequently validated in local shearing-box and global 3D MHD simulations (e.g. Hawley, Gammie & Balbus 1995) showing sustained MRI turbulence with effective $\alpha\sim0.01$–$0.1$, broadly consistent with observationally inferred disk viscosities.
- **Instrument Setup**: N/A.
- **Reduction & Detrending Pipeline**: N/A (linear theory); modern tests are performed via GRMHD simulations (see [[Porth_2019_EHT_GRMHD_Code_Comparison]]).

---

## Critical Findings & Scientific Impact
1. Provided the first-principles physical mechanism underlying the phenomenological $\alpha$-viscosity of Shakura-Sunyaev disk theory, resolving a fundamental gap in accretion theory that had persisted since 1973.
2. MRI-driven turbulence is now the standard explanation for angular-momentum transport not only in accretion disks around compact objects but also in protoplanetary disks (where non-ideal MHD effects can suppress MRI in specific "dead zones," motivating alternative transport mechanisms there).
3. Open problem: the saturation amplitude and effective $\alpha$ of MRI turbulence depend on net magnetic flux, disk thermodynamics, and non-ideal MHD effects (Ohmic diffusion, ambipolar diffusion, Hall effect) in ways not fully captured by the original linear analysis, an active area of global GRMHD and non-ideal-MHD simulation research.

---

## Vault Cross-References
- Core Theory: [[Magnetorotational Instability MRI Derivation]]
- Related: [[Shakura_Sunyaev_1973_Thin_Accretion_Disk_Theory]], [[Blandford_Payne_1982_Jet_Launching_Disk_Wind]]
- Map of Content: [[Fluid_and_Plasma_Dynamics_MOC]], [[Lab_High-Energy_MOC]]
