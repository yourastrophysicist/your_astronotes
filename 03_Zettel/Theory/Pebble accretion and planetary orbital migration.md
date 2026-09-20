---
layout: "default"
title: "Pebble accretion and planetary orbital migration"
---
traditional planetesimal accretion struggles to form $10 M_\oplus$ cores before gas disks dissipate ($\sim 3\text{ Myr}$). **Pebble accretion** accelerates core growth by multiple orders of magnitude.

## pebble accretion mechanics

Ormel & Klahr (2010), Lambrechts & Johansen (2012):
when a growing planetary embryo passes through a drift flux of small pebbles (Stokes number $0.001 \le \text{St} \le 1$), gas drag dissipates the pebble's kinetic energy during the encounter. the pebble becomes bound and spirals directly onto the core.
the effective accretion cross-section expands from the physical radius $R_{\text{core}}$ to the entire Hill radius $R_{\text{Hill}} = r (M_p / 3 M_\star)^{1/3}$:

$$\dot{M}_{\text{pebble}} = 2 \left( \frac{\text{St}}{0.1} \right)^{2/3} R_{\text{Hill}}^2 \Sigma_p \Omega_{\text{K}} \propto M_p^{2/3}$$

### pebble isolation mass
pebble accretion halts automatically when the planet reaches the **pebble isolation mass**:

$$M_{\text{iso}} \approx 20 M_\oplus \left( \frac{h/r}{0.05} \right)^3$$

at this mass, the planet's gravity creates a pressure bump ($\partial p / \partial r > 0$) exterior to its orbit that traps drifting pebbles, isolating the core and triggering rapid envelope cooling toward Phase III gas runaway.

## planetary orbital migration

gravitational torques exchanged between an embedded planet and the surrounding gas disk drive rapid radial orbital migration:

1. **Type I migration (low-mass planets, no gap)**:
   the planet launches spiral density waves at Lindblad resonances and corotation resonances. because the outer disk is closer to the star in relative velocity than the inner disk, the outer Lindblad torque is stronger:
   $$\Gamma_{\text{net}} = \Gamma_{\text{inner}} + \Gamma_{\text{outer}} < 0$$
   the planet loses angular momentum, migrating inward on fast timescales:
   $$\tau_{\text{I}} \sim 10^5\text{ yr} \left( \frac{M_p}{M_\oplus} \right)^{-1}$$
2. **Type II migration (gap-opening giant planets)**:
   when tidal torque exceeds viscous torque ($M_p > M_{\text{gap}} \sim M_{\text{Jup}}$), the planet clears a deep annular gap in the disk. migration locks to the slow viscous accretion timescale of the gas disk:
   $$\tau_{\text{II}} \sim \frac{r^2}{\nu_{\text{visc}}} \sim 10^5 - 10^6\text{ yr}$$
   Type II migration drives gas giants into short-period orbits, explaining the existence of **Hot Jupiters**.

## see also

- [[Exoplanetary_Astrophysics_MOC]]
- [[21_Protoplanetary_Disks_and_Planet_Formation_Mechanisms]]
- [[Protoplanetary disk evolution and core accretion paradigm]]
- [[Exoplanet demographic distributions and survey completeness]]



## Linked References

- [[Protoplanetary disk evolution and core accretion paradigm]]
- [[Exoplanetary_Astrophysics_MOC]]


