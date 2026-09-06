---
layout: default
title: "Press-Schechter halo mass function"
---

how many dark-matter halos of a given mass exist in a given comoving volume? the answer is the **halo mass function** $dn/dM$. an analytic prediction is the **Press-Schechter formalism** (Press & Schechter 1974), which combines linear perturbation theory with the spherical collapse threshold.

it is the bridge between the **matter power spectrum** $P_m(k)$ and the **abundance of galaxies and clusters**.

---

## the setup

start from the linear matter power spectrum at some reference time (today, say). smooth it with a top-hat filter of comoving radius $R$ to get the variance:
$$\sigma^2(R) = \int \frac{dk}{2\pi^2}\, k^2\, P_m(k)\, |W(kR)|^2$$

with $|W(kR)|^2 = (3/(kR)^3)^2 [\sin(kR) - kR\cos(kR)]^2$ the Fourier transform of a top hat.

associate $R$ with a mass scale via the mean matter density:
$$M(R) = \frac{4\pi}{3}\bar\rho_m R^3$$

so $\sigma(M)$ is the rms fluctuation of $\delta$ on the mass scale $M$. for ΛCDM:
- $\sigma_8 \equiv \sigma(R = 8\,h^{-1}\,\text{Mpc}) \approx 0.81$ (Planck 2018)
- $\sigma$ decreases with increasing $M$ (less power on larger scales)

---

## the Press-Schechter ansatz

assume:
1. $\delta$ is Gaussian with variance $\sigma^2(M)$ at any mass scale
2. a region of mass $M$ has collapsed if its smoothed linear $\delta$ exceeds the spherical-collapse threshold $\delta_c \approx 1.686$ (see [Spherical collapse](../../02_Zettel/Theory/Spherical collapse.md))

the fraction of mass in regions with $\delta > \delta_c$ is:
$$F(>M) = \frac{1}{\sqrt{2\pi}\sigma}\int_{\delta_c}^\infty e^{-\delta^2/(2\sigma^2)}\,d\delta = \frac{1}{2}\,\text{erfc}\left(\frac{\delta_c}{\sqrt 2\sigma}\right)$$

the **fudge factor of 2** comes from the "cloud-in-cloud" problem (a region with $\delta < \delta_c$ might be part of a larger collapsed region). Press and Schechter put this in by hand; the **excursion-set theory** of Bond, Cole, Efstathiou, Kaiser (1991) derives it rigorously.

differentiating gives the **mass function**:
$$\boxed{\,\frac{dn}{dM} = \sqrt{\frac{2}{\pi}}\, \frac{\bar\rho_m}{M^2}\, \frac{\delta_c}{\sigma(M)}\, \left|\frac{d\ln\sigma}{d\ln M}\right|\, e^{-\delta_c^2/(2\sigma^2)}\,}$$

---

## the universal shape

the PS mass function has a **power-law** behavior at small mass and an **exponential cutoff** at high mass:
- low-mass: $dn/dM \propto M^{-2 + n_s/2}$
- high-mass: exponential cutoff at the mass where $\sigma(M) = \delta_c$

so the universe has many small halos and few big ones — exactly what we observe in galaxy and cluster surveys.

---

## the Sheth-Tormen improvement

Sheth & Tormen (1999) noted that PS overpredicts the small-mass and underpredicts the large-mass end. they generalized to **ellipsoidal collapse**, giving:
$$f_{ST}(\nu) = A\sqrt{\frac{2 a}{\pi}}\,\nu\,(1 + (a\nu^2)^{-p})\, e^{-a\nu^2/2}$$

with $\nu = \delta_c/\sigma$, fitting parameters $A = 0.322$, $a = 0.707$, $p = 0.3$. matches N-body simulations much better.

modern simulations (Jenkins, Tinker, etc.) provide further calibrated mass functions — usually $T(\nu)$-type fits to numerical data.

---

## why this matters

the halo mass function is the **building block** of structure formation. given:
1. a set of cosmological parameters (specifically $\sigma_8$, $\Omega_m$, $h$)
2. the spherical collapse threshold $\delta_c \approx 1.686$
3. the matter power spectrum $P_m(k)$

we can predict:
- the abundance of galaxy clusters as a function of mass
- the redshift evolution of cluster counts
- the fraction of mass in collapsed objects vs free
- the **halo occupation distribution** (number of galaxies per halo, used in galaxy clustering analyses)

cluster counts are a competitive cosmological probe — they directly measure $\sigma_8$ and the late-time growth of structure. the so-called "$\sigma_8$ tension" between CMB-derived and cluster-derived $\sigma_8$ in 2025 is an active research topic.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md)
- [Spherical collapse](../../02_Zettel/Theory/Spherical collapse.md)
- [Linear evolution of perturbations in expanding universe](../../02_Zettel/Theory/Linear evolution of perturbations in expanding universe.md)
- [Growth factor D(z)](../../02_Zettel/Theory/Growth factor D(z).md)
- [Matter power spectrum and BAO](../../02_Zettel/Theory/Matter power spectrum and BAO.md)
- [Cosmic_inventory_dark_matter](../../02_Zettel/Theory/Cosmic_inventory_dark_matter.md)
- [Halo mass function vs galaxy mass function](../../02_Zettel/Theory/Halo mass function vs galaxy mass function.md)
