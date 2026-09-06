---
layout: default
title: "Ch 7 - Cosmology"
---

# Baumann Ch 7, Cosmology

up: [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.html) · [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.html)

*the chapter where Einstein's equations meet the universe. starting from the cosmological principle (homogeneity + isotropy), we derive the FLRW metric, plug it into Einstein's equation, and read off the Friedmann equations that govern cosmic evolution. then we compare to observation: what is the universe actually made of?*

---

## the question this chapter is trying to answer

> **how does the universe as a whole evolve?**

this sounds impossibly hard. the universe contains $\sim 10^{80}$ particles, billions of galaxies, all moving in their own complicated ways. how can we possibly write equations for "the universe"?

the answer is that **on large enough scales, the universe is simple**. when you average over scales bigger than $\sim 100$ Mpc (the size of typical galaxy superclusters), the universe looks remarkably uniform. galaxies are clumpy on small scales, but the **density** is the same everywhere on large scales, and the universe looks the same in every direction.

this is the **cosmological principle**:

> **homogeneous** (same at every point in space) and **isotropic** (same in every direction)

once we accept this, the geometry of spacetime is forced into a very simple form: the FLRW metric, with all the dynamics packaged into a single function $a(t)$, the **scale factor**. and Einstein's equations reduce to two ODEs (Friedmann + acceleration) plus a continuity equation for matter.

---

## 7.1, the FLRW metric, the geometry of homogeneous-isotropic spacetime

### foliating spacetime

the cosmological principle implies that the universe can be **foliated** into 3D spatial slices $\Sigma_t$, each homogeneous and isotropic. so write the line element as

$$ds^2 = -dt^2 + a(t)^2\, d\ell^2$$

with $d\ell^2$ the metric on the spatial slice and $a(t)$ a time-dependent scale factor that captures all the **dynamics**: as the universe expands, $a$ grows.

> the convention: $a(t_0) \equiv 1$ today. so $a < 1$ in the past and $a > 1$ in the future (if the universe keeps expanding). when we say "$a \to 0$" we mean "the moment of the Big Bang."

### what the spatial slice can be

a homogeneous-isotropic 3-space must have **constant intrinsic curvature**. there are exactly three options:

1. **flat** ($k = 0$): infinite Euclidean 3-space, like $\mathbb{R}^3$
2. **spherical** ($k = +1$): closed, finite (like $S^3$, the 3D sphere)
3. **hyperbolic** ($k = -1$): open, infinite, negatively curved (like the saddle-shaped surface in higher dim)

writing the spatial metric in spherical-like coordinates:

$$d\ell^2 = \frac{dr^2}{1 - k r^2/R_0^2} + r^2(d\theta^2 + \sin^2\theta\,d\phi^2)$$

where $R_0$ is the curvature radius today (set to $\infty$ if $k = 0$). then the **FLRW metric** is

$$\boxed{\,ds^2 = -dt^2 + a(t)^2\left[\frac{dr^2}{1 - kr^2/R_0^2} + r^2\,d\Omega^2\right]\,}$$

(also called the **Robertson-Walker** metric.)

> physically: the $a(t)$ scale factor stretches the spatial slice uniformly as time goes on. galaxies at fixed comoving coordinates (fixed $r$, $\theta$, $\phi$) move apart at a rate proportional to their separation. this is **Hubble's law**, $v = H d$, with $H \equiv \dot a / a$ the Hubble parameter.

> observationally: the universe today is **very close to flat**, $|\Omega_k| < 0.005$ from CMB and BAO measurements. so $k = 0$ is the realistic case.

---

## 7.2, the Friedmann equations

### Christoffels and Ricci

with $g_{\mu\nu} = \mathrm{diag}(-1, a^2 \gamma_{ij})$, the non-vanishing Christoffel symbols are

$$\Gamma^0{}_{ij} = a\dot a\,\gamma_{ij}, \qquad \Gamma^i{}_{0j} = (\dot a/a)\delta^i{}_j$$

(plus the spatial $\Gamma^i{}_{jk}$ inherited from $\gamma_{ij}$).

Ricci components:

$$R_{00} = -3\frac{\ddot a}{a}, \qquad R_{ij} = \left[\frac{\ddot a}{a} + 2\left(\frac{\dot a}{a}\right)^2 + \frac{2K}{a^2}\right]g_{ij}$$

(with $K = k/R_0^2$, the actual scalar curvature.)

### perfect fluid

on cosmic scales, matter is a perfect fluid with energy density $\rho$, pressure $p$, and four-velocity $U^\mu = (1, 0, 0, 0)$ at rest in FLRW frame. so $T_{00} = \rho$ and $T_{ij} = p g_{ij}$.

### Einstein's equations, time-time component

$G_{00} = 8\pi G T_{00}$ becomes

$$\boxed{\,H^2 \equiv \left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{k}{a^2 R_0^2}\,}$$

this is the **Friedmann equation**. it is the constraint that links the expansion rate to the energy density and the spatial curvature.

> physical interpretation: $H^2$ measures the expansion rate. it is sourced positively by energy density (more stuff = faster expansion) and negatively by spatial curvature (a positively curved closed universe expands slower). this is one of the most important equations in cosmology.

key cosmic scales today:

- **Hubble constant**: $H_0 \approx 70$ km/s/Mpc
- **Hubble length**: $d_H \equiv c/H_0 \approx 4300$ Mpc, the rough size of the observable universe
- **Hubble time**: $t_H \equiv 1/H_0 \approx 14$ billion years, the rough age

### Einstein's equations, spatial components

$G_{ij} = 8\pi G T_{ij}$ combined with the Friedmann equation gives

$$\boxed{\,\frac{\ddot a}{a} = -\frac{4\pi G}{3}(\rho + 3p)\,}$$

the **acceleration equation** (also called second Friedmann or Raychaudhuri).

> physical interpretation: the source of cosmic *acceleration* is $\rho + 3p$, not just $\rho$. for ordinary matter (positive pressure), $\rho + 3p > 0$ and the universe **decelerates**. for dark energy ($w = -1$, so $p = -\rho$), $\rho + 3p = -2\rho < 0$ and the universe **accelerates**. the discovery of accelerated expansion in 1998 (SN Ia, Perlmutter-Riess-Schmidt) was a smoking-gun signature of dark energy.

### conservation of stress-energy: continuity equation

stress-energy conservation $\nabla^\mu T_{\mu\nu} = 0$ gives

$$\boxed{\,\dot \rho + 3 H(\rho + p) = 0\,}$$

the **continuity equation**.

> physical interpretation: think of a comoving volume of size $V \propto a^3$. its energy is $E = \rho V$. as the universe expands, $V$ grows and $\rho$ may change. the rate of energy change is $dE/dt = -p\,dV/dt$ (work done on the surroundings), giving $\dot\rho + 3H(\rho + p) = 0$ after some algebra. so this is just **first-law-of-thermodynamics for the cosmic fluid**.

### the three equations are not independent

$\nabla^\mu G_{\mu\nu} = 0$ (the contracted Bianchi identity) implies that **only two of the three equations** (Friedmann, acceleration, continuity) are independent. given any two, the third follows. this is exactly what Q18 - derive the acceleration equation proves: starting from Friedmann + continuity, derive the acceleration equation.

### equation of state and density scaling

closing the system requires $p(\rho)$. the standard cosmological assumption is a constant equation of state:

$$w \equiv p/\rho$$

key cases:
- **matter** (cold dust, baryons + dark matter): $w = 0$, so $p = 0$
- **radiation** (photons + relativistic neutrinos): $w = 1/3$, so $p = \rho/3$
- **dark energy / cosmological constant**: $w = -1$, so $p = -\rho$

the continuity equation gives

$$\rho \propto a^{-3(1+w)} = \begin{cases}a^{-3} & \text{matter}\\ a^{-4} & \text{radiation}\\ a^{0} = \text{const} & \text{dark energy}\end{cases}$$

> physical interpretation:
> - **matter** dilutes as $a^{-3}$, just from the volume of space increasing
> - **radiation** dilutes as $a^{-4}$, from volume **plus** the redshift of photon energies (each photon's energy decreases as $a^{-1}$)
> - **dark energy** doesn't dilute at all. as the universe expands, more space is created, and the dark energy density per unit volume stays the same, meaning energy is being created out of nothing. this strongly suggests dark energy is a property of empty space itself.

### single-component flat solutions

flat ($k = 0$) Friedmann with $\rho \propto a^{-3(1+w)}$:

$$a(t) \propto t^{2/[3(1+w)]} = \begin{cases}t^{2/3} & \text{matter} \\ t^{1/2} & \text{radiation} \\ e^{H_0 t} & \text{dark energy} (w = -1)\end{cases}$$

so different regimes look qualitatively different: matter and radiation give power-law expansion, dark energy gives exponential.

these are exactly the calculations in Q19 - radiation universe and Q20 - matter plus radiation universe.

---

## 7.3, our universe

### the critical density

a flat universe ($k = 0$) at any given time has $H^2 = (8\pi G/3)\rho_{\rm crit}$, so

$$\rho_{\rm crit, 0} = \frac{3 H_0^2}{8\pi G} \approx 8.9 \times 10^{-30}\,\text{g/cm}^3 \approx 5.1\,\text{protons/m}^3$$

> the universe is **incredibly dilute**. even the best vacuum chambers we make on Earth ($\sim 10^9$ atoms/cm$^3$) are vastly denser than the average cosmic density. and yet, that small amount of matter and dark energy distributed across a vast volume is what runs the entire dynamical history of the cosmos.

### Omega parameters

we measure densities relative to critical:

$$\Omega_i \equiv \rho_{i,0}/\rho_{\rm crit, 0}, \qquad \Omega_k \equiv -k/(R_0 H_0)^2$$

the Friedmann equation today becomes (with $\Omega_r$ for radiation, $\Omega_m$ for matter, $\Omega_\Lambda$ for dark energy):

$$\boxed{\,\frac{H^2}{H_0^2} = \Omega_r\, a^{-4} + \Omega_m\, a^{-3} + \Omega_k\, a^{-2} + \Omega_\Lambda\,}$$

with the constraint $\Omega_r + \Omega_m + \Omega_k + \Omega_\Lambda = 1$ today.

### the actual measured values

modern measurements (CMB from Planck + BAO + SN Ia + weak lensing):

$$\Omega_r \approx 9 \times 10^{-5}, \qquad \Omega_m \approx 0.32, \qquad \Omega_\Lambda \approx 0.68, \qquad |\Omega_k| < 0.005$$

with $\Omega_b \approx 0.05$ (ordinary baryons) and $\Omega_c \approx 0.27$ (cold dark matter) inside $\Omega_m$.

**the universe is**:

- **5% baryons**: stars, planets, gas, you, me. everything we can directly see.
- **27% dark matter**: gravitates but does not interact electromagnetically. holds galaxies together.
- **68% dark energy**: drives the accelerated expansion. probably a cosmological constant.
- **almost exactly flat**: $|\Omega_k| < 0.005$, consistent with $k = 0$.

> the bottom line: **95% of the universe is invisible**. we know it is there only through its gravitational effects. explaining what dark matter and dark energy are is one of the great open questions of modern physics.

### cosmic timeline

different fluid components dominate at different epochs because they dilute at different rates.

| epoch | dominant component | scaling | important events |
| --- | --- | --- | --- |
| pre-inflation | inflaton | $\rho \approx $ const | inflation: $a \propto e^{Ht}$, end at reheating |
| radiation era | $\rho_r \propto a^{-4}$ | $a \propto t^{1/2}$ | BBN ($t \sim 100$ s, $a \sim 10^{-9}$) |
| matter era | $\rho_m \propto a^{-3}$ | $a \propto t^{2/3}$ | recombination ($z \sim 1100$, $a \sim 10^{-3}$); structure forms |
| dark energy era | $\rho_\Lambda = $ const | $a \propto e^{H_\Lambda t}$ | now (started at $z \sim 0.5$); future |

**matter-radiation equality** at $a_{\rm eq} = \Omega_r/\Omega_m \approx 1/3400$, corresponding to redshift $z_{\rm eq} \approx 3400$. this is the topic of Q20 - matter plus radiation universe.

> the "cosmic coincidence problem": we live just past the matter-to-$\Lambda$ crossover, when the universe is roughly half matter and half $\Lambda$. is this a coincidence? or is there a reason that humans evolve precisely at this epoch? these are unresolved questions.

---

## what to remember from this chapter

if i had to compress chapter 7 into a paragraph for the oral:

> the cosmological principle (homogeneity + isotropy on large scales) forces the spacetime metric into the FLRW form $ds^2 = -dt^2 + a(t)^2 \gamma_{ij}dx^i dx^j$, with $a(t)$ the scale factor and spatial curvature $k = -1, 0, +1$. plugging into Einstein's equations gives the Friedmann equations: $H^2 = (8\pi G/3)\rho - k/a^2$ (constraint), $\ddot a/a = -(4\pi G/3)(\rho + 3p)$ (acceleration), and $\dot\rho + 3H(\rho + p) = 0$ (continuity from stress-energy conservation). only two are independent. with constant equation of state $p = w\rho$, fluids dilute as $\rho \propto a^{-3(1+w)}$: matter $a^{-3}$, radiation $a^{-4}$, dark energy constant. flat single-component universes have $a \propto t^{2/[3(1+w)]}$, giving $t^{1/2}$ for radiation, $t^{2/3}$ for matter, $e^{Ht}$ for dark energy. our universe is approximately flat with $\Omega_r \approx 10^{-4}$, $\Omega_m \approx 0.32$ (5% baryons + 27% dark matter), and $\Omega_\Lambda \approx 0.68$. 95% of the universe is invisible. the universe went through a radiation era, then a matter era starting at $z_{\rm eq} \approx 3400$, then a dark energy era starting at $z \sim 0.5$.

---

## connections

- [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.html)
- [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.html)
- [FLRW metric](../../../02_Zettel/Theory/FLRW metric.html) · [Cosmological principle](../../../02_Zettel/Theory/Cosmological principle.html) · [Friedmann equations](../../../02_Zettel/Theory/Friedmann equations.html) · [Continuity equation](../../../02_Zettel/Theory/Continuity equation.html) · [Equation of state and density scaling](../../../02_Zettel/Theory/Equation of state and density scaling.html) · [Cosmic eras](../../../02_Zettel/Theory/Cosmic eras.html) · [Matter radiation equality](../../../02_Zettel/Theory/Matter radiation equality.html) · [Cosmological constant](../../../02_Zettel/Theory/Cosmological constant.html)
- Q18 - derive the acceleration equation · Q19 - radiation universe · Q20 - matter plus radiation universe
- [Observational_Cosmology_MOC](../../../00_Atlas/Observational_Cosmology_MOC.html) (the observational counterpart)
- [ΛCDM current parameters](../../../02_Zettel/Theory/ΛCDM current parameters.html)
- previous: [Ch 6 - Black Holes](../../../01_Literature/Book/Baumann GR/Ch 6 - Black Holes.html)
- next: [Ch 8 - Gravitational Waves](../../../01_Literature/Book/Baumann GR/Ch 8 - Gravitational Waves.html)
