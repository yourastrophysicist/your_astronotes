---
layout: "default"
title: "Cosmic_inventory_dark_energy"
---
about 68.5% of the energy budget of the universe today is something we cannot detect except through its effect on the expansion rate: it dominates today, has negative pressure, and drives the accelerated expansion. we call it **dark energy**.

a *cosmological constant* $\Lambda$ is the simplest model: an energy density that does not dilute with expansion ($p = -\rho$ exactly). more generally, dark energy can have $p < -\rho/3$ and evolve in time/space.

at present, a $\Lambda$ term fits the most data.

---

## the Hubble diagram

still our most direct evidence that the universe is expanding. at low redshift, the linear Hubble law:
$$v = H_0 d, \qquad z \simeq v/c$$

![intro-30.png](../../assets/images/intro-30.png)

(Hubble's original 1929 plot. velocities should be in km/s, distances in Mpc; the solid line is the fit to corrected points.)

local measurements: $H_0 = 73.04 \pm 1.04$ km/s/Mpc (Riess et al. 2022, SN Ia).
CMB-anchored measurements: $H_0 = 67.4 \pm 0.5$ km/s/Mpc.

the **Hubble tension** between local and CMB-derived values remains open in 2025/2026.

---

## why high-z requires more than Hubble's law

at high $z$ the simple Doppler relation $z = v/c$ breaks down. the full luminosity-distance relation is
$$d_L(z) = (1+z) \int_0^z \frac{c\,dz'}{H(z')}, \qquad H(z) = H_0\sqrt{\Omega_m(1+z)^3 + \Omega_\Lambda + \Omega_K(1+z)^2}$$

so $d_L(z)$ depends on the *content* of the universe. measuring $d_L$ at multiple redshifts and fitting gives $\Omega_m, \Omega_\Lambda$.

---

## the cosmic distance ladder

to measure $d_L$ at high $z$ I need **standard candles**: objects of known intrinsic brightness. apparent brightness then gives distance.

![intro-31.png](../../assets/images/intro-31.png)

Cepheid variables have a period-luminosity relation calibrated to thousands of stars within $\sim 20$ Mpc by HST. they anchor distances to galaxies that host SN Ia. SN Ia in turn extend out to $z \sim 1$ and beyond.

![intro-32.png](../../assets/images/intro-32.png)

of all the candles (I-band Tully-Fisher, fundamental plane, surface brightness fluctuations, SN II, SN Ia), **SN Ia have the smallest dispersion and reach the highest redshifts**. the bottom panel shows that beyond $\sim 100$ Mpc, $H_0 \approx 72$ flattens out, confirming linear Hubble flow at low z.

---

## high-z SN Ia and the discovery of $\Lambda$

at high z the SN Ia turn out to be **fainter** than they should be in any matter-only or open universe. they sit on a curve with $\Omega_M = 0.28, \Omega_\Lambda = 0.72$. this is the 1998 Perlmutter / Riess / Schmidt result that earned the 2011 Nobel.

![intro-33.png](../../assets/images/intro-33.png)

small-z expansion of the luminosity distance:
$$d_L = \frac{c}{H_0}\left[z + \tfrac12(1 - q_0) z^2 + \cdots\right], \qquad q_0 = -\frac{\ddot a(t_0) a_0}{\dot a(t_0)^2}$$

a positive $q_0$ means deceleration; **a negative $q_0$ (acceleration) requires $\Omega_\Lambda > \Omega_m/2$**.

best fit (Choudhury & Padmanabhan A&A 429, 807, 2005, with later updates):
$$\boxed{\,\Omega_\Lambda = 0.6847 \pm 0.0073\,}$$

cosmological constant. consistent across SN Ia, BAO, and CMB.

![intro-34.png](../../assets/images/intro-34.png)

---

## independent evidence: the deficit budget

from CMB temperature anisotropies, the total density today is
$$\Omega_K = 1 - \Omega_0 = 0.001 \pm 0.002 \quad (68\%\,\text{CL})$$

so the universe is **flat to a fraction of a percent** — also generic prediction of inflation.

but matter + radiation + neutrinos add up to only about $1/3$ of the critical density. so we *need* an additional component, with two key features:
- very weakly interacting and very weakly clustering (smooth) — otherwise we would have detected it directly
- **negative pressure**, $p < -\rho/3$, in order to drive accelerated expansion

a cosmological constant is the limit $p = -\rho$ exactly. dark energy refers to a more general component with $p < -\rho/3$ that can evolve in time/space.

![intro-35.png](../../assets/images/intro-35.png)

![intro-36.png](../../assets/images/intro-36.png)

---

## the age problem

a clean historical argument. for a *matter-dominated* universe the age would be
$$t_0 = \frac{2}{3 H_0}$$

with $H_0 = 67.4$ km/s/Mpc, $H_0^{-1} = 9.7776\,h^{-1} \times 10^9$ yr, so $t_0 \approx 9.6 \times 10^9$ yr in EdS.

this is **clearly at odds** with independent age measurements:
- oldest globular clusters: $\sim 12$–$13$ Gyr
- white dwarf cooling ages: $\sim 10$ Gyr
- nucleo-cosmochronometry: $\sim 13$ Gyr

→ the universe is $13.8 \times 10^9$ yr old. a cosmological constant adds the missing few Gyr by slowing down deceleration earlier (and accelerating later).

![intro-37.png](../../assets/images/intro-37.png)

---

## what could dark energy be?

possibilities, in increasing order of weirdness:
- **a true cosmological constant** $\Lambda$ ($w = -1$ exactly, time-independent). simple, but the inferred energy density is $\sim 10^{-120}$ in Planck units, leading to the **cosmological constant problem**.
- **quintessence**: a scalar field with $w \approx -1$ that can vary slowly with time
- **modified gravity**: maybe the Einstein equations themselves are wrong on cosmological scales
- **inhomogeneity**: perhaps we are misinterpreting an inhomogeneous universe as accelerated

experimentally, $w$ is being measured to $\sim 1\%$ precision by SN Ia + BAO + CMB. so far, $w = -1$ is consistent with all data.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Cosmic_inventory_overview](Cosmic_inventory_overview.html)
- [Hubble constant and deceleration parameter](Hubble%20constant%20and%20deceleration%20parameter.html)
- Friedmann equations with Λ
- [Friedmann models](Friedmann%20models.html)
- [Hubble law exact form](Hubble%20law%20exact%20form.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (12)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Cosmic_inventory_overview.html" class="backlink-item">Cosmic_inventory_overview</a></li>
    <li class="backlink-item-wrap"><a href="Cosmological%20constant.html" class="backlink-item">Cosmological constant</a></li>
    <li class="backlink-item-wrap"><a href="Friedmann%20equations%20with%20Lambda.html" class="backlink-item">Friedmann equations with Lambda</a></li>
    <li class="backlink-item-wrap"><a href="Friedmann%20models.html" class="backlink-item">Friedmann models</a></li>
    <li class="backlink-item-wrap"><a href="Growth%20factor%20D%28z%29.html" class="backlink-item">Growth factor D(z)</a></li>
    <li class="backlink-item-wrap"><a href="Hubble%20constant%20and%20deceleration%20parameter.html" class="backlink-item">Hubble constant and deceleration parameter</a></li>
    <li class="backlink-item-wrap"><a href="Hubble%20law%20exact%20form.html" class="backlink-item">Hubble law exact form</a></li>
    <li class="backlink-item-wrap"><a href="Lambda%20CDM%20current%20parameters.html" class="backlink-item">Lambda CDM current parameters</a></li>
    <li class="backlink-item-wrap"><a href="Lensing%20as%20a%20cosmological%20probe.html" class="backlink-item">Lensing as a cosmological probe</a></li>
    <li class="backlink-item-wrap"><a href="Supernova%20Hubble%20diagram.html" class="backlink-item">Supernova Hubble diagram</a></li>
    <li class="backlink-item-wrap"><a href="Type%20Ia%20supernovae%20as%20standard%20candles.html" class="backlink-item">Type Ia supernovae as standard candles</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
  </ul>
</div>

