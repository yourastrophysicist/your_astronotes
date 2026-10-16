---
layout: default
title: "Fundamentals Derivations"
---
one derivation per file, organised by **what equation is being derived**, not by lecture block. each file is self-contained, so you can open just one and work through it.

these supplement the [[Fundamentals_Astrophysics_Cosmology_MOC]]. the MOC is the conceptual map and this folder is the step-by-step version, every line written out.

## how every file is built

1. **what I'm deriving** states the target equation.
2. **conventions and symbols** defines every symbol with its units.
3. **assumptions** lists what the derivation needs, numbered.
4. **derivation** goes in numbered steps. each step names the operation (which variable is integrated or differentiated, what is held fixed, which earlier result is inserted).
5. **checks** covers dimensions, limiting cases and a substitution back where possible.
6. **questions I should be ready for** collects the follow-up questions worth answering, each with a short answer.
7. **board summary (60 seconds)** is the version for the chalkboard.

## units used here

- geometry, dynamics and structure formation keep $c$ and $G$ explicit, with $a(t_0) = 1$ and the curvature constant $k$ in units of length$^{-2}$.
- thermal history uses natural units $c = \hbar = k_B = 1$, with $M_{\rm Pl} = G^{-1/2} = 1.22 \times 10^{19}$ GeV.
- [[Slow roll inflation]] uses the reduced Planck mass $(8\pi G)^{-1/2}$.

## the spine, in the order I would build them on a board

### geometry and kinematics
1. [[Robertson-Walker metric derivation]] gives the line element of a homogeneous, isotropic spacetime, by embedding.
2. [[Cosmological redshift derivation]] gives $1+z = a_0/a_e$ from a null geodesic with two crests.
3. [[Hubble law derivation]] gives $v = Hd$ exactly, $cz \approx H_0 d$ at low $z$, and $d_L$ to second order.
4. [[Cosmological distances derivation]] gives $d_C$, $d_M$, $d_A$, $d_L$ and the two factors of $(1+z)$.

### dynamics
5. [[Friedmann equation Newtonian shell]] gives $H^2 = (8\pi G/3)\rho - kc^2/a^2$ from energy conservation of a shell.
6. [[Friedmann equation General Relativity FLRW]] gives both Friedmann equations and continuity from the Einstein equations.
7. [[Continuity equation cosmology]] gives $\dot\rho + 3H(\rho + p/c^2) = 0$ and $\rho \propto a^{-3(1+w)}$.
8. [[Acceleration equation]] gives $\ddot a/a = -(4\pi G/3)(\rho + 3p/c^2) + \Lambda c^2/3$.
9. [[Critical density and density parameters]] gives $\rho_c$, the $\Omega_i$ and $H(z)$.

### thermal equilibrium
10. [[Equilibrium distributions]] gives Bose-Einstein, Fermi-Dirac and Maxwell-Boltzmann.
11. [[Relativistic number and energy density]] gives $n$, $\rho$ for $T \gg m$, and $g_*$.
12. [[Entropy conservation cosmology]] gives $s = (\rho + P)/T$, $sa^3 = $ const and $T \propto g_{*s}^{-1/3}/a$.
13. [[Temperature time relation]] gives $H \propto T^2$ and $t \approx 2.4\,g_*^{-1/2}\,(1\,\text{MeV}/T)^2$ s.

### decoupling and the early universe
14. [[Decoupling Gamma vs H]] says when a species freezes out.
15. [[Neutrino temperature ratio]] gives $T_\nu/T_\gamma = (4/11)^{1/3}$.
16. [[Saha equation derivation]] gives $X_e^2/(1-X_e)$ and recombination at $T \approx 0.32$ eV.
17. [[BBN helium fraction]] covers n/p freeze-out, the decay window and $Y_p \approx 0.25$.
18. [[Baryon to photon ratio]] gives $\eta \approx 6.1 \times 10^{-10}$.
19. [[Slow roll inflation]] gives $\rho_\phi$, $p_\phi$, the slow-roll parameters and the number of e-folds.

### structure formation
20. [[Linear perturbation master equation]] gives $\ddot\delta + 2H\dot\delta + (c_s^2 k^2/a^2 - 4\pi G\bar\rho)\delta = 0$.
21. [[Jeans length derivation]] gives the scale dividing collapse from oscillation.
22. [[Growth factor matter era]] gives $\delta \propto a$ in Einstein-de Sitter, with the decaying mode $a^{-3/2}$.
23. [[Meszaros suppression]] gives the logarithmic growth in the radiation era and the turnover of $P(k)$.
24. [[Spherical collapse delta_c]] gives the cycloid solution, $\delta_c \approx 1.686$ and $\Delta_{\rm vir} = 18\pi^2$.
25. [[Press Schechter mass function]] gives the halo abundance from a Gaussian field, with the factor of 2.

## chains of dependence

- 5 and 7 feed 8, and all three feed 9.
- 1 feeds 2, which feeds 3 and 4. 9 supplies $H(z)$ to 4.
- 10 feeds 11, which feeds 12 and 13. 12 feeds 15 and 18.
- 13 and 14 feed 17. 18 feeds 16 and 17.
- 20 feeds 21, 22 and 23. 22 feeds 24, which feeds 25.

## how to use this folder

- pick **one** file. attempt the derivation from memory on paper, then compare with the file and redo it from the first step where you got stuck.
- for each step say what is being done to what. "integrate" is never enough, name the integrand, the variable and the limits.
- answer the questions section without looking, then check.
- finish with the board summary from memory.

## see also

- [[Fundamentals_Astrophysics_Cosmology_MOC]] is the conceptual map this folder supports.
