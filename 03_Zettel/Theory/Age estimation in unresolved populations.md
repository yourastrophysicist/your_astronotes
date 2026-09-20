---
layout: "default"
title: "Age estimation in unresolved populations"
---
in unresolved galaxies, individual stars and the main-sequence turnoff cannot be resolved. The "age" of such a system is inherently statistical: real galaxies undergo extended star formation histories $\psi(t)$, creating a composite mixture of multiple stellar generations. Inferring age requires spectroscopic features and spectral energy distributions, which are subject to the **outshining effect** and the fundamental distinction between **luminosity-weighted** and **mass-weighted** ages.

---

### the outshining effect: light vs mass

stellar luminosity scales non-linearly with mass ($L \propto M^{3\text{--}4}$ on the main sequence). Consequently:
- young, massive stars ($M \ge 5\,M_\odot$, $\tau < 100$ Myr) are hundreds to thousands of times more luminous per unit mass than old, low-mass dwarfs ($M \le 1\,M_\odot$, $\tau > 5$ Gyr).
- a recent star formation burst contributing a mere **$1\text{--}5\%$ of the total stellar mass** will generate **$\gtrsim 80\%$ of the optical/UV continuum flux**, completely concealing the presence of an underlying old stellar population.

---

### formal age definitions

to quantitatively describe the age distribution of a composite stellar population, modern population synthesis distinguishes between:

1. **luminosity-weighted age ($\langle \tau \rangle_L$)**:
   the average age of the stars weighted by their monochromatic or bandpass luminosity:
   $$\langle \tau \rangle_L(\lambda) \equiv \frac{\int_0^t \tau\,\psi(t - \tau)\,L_\lambda^{\rm SSP}(\tau, Z(\tau))\,d\tau}{\int_0^t \psi(t - \tau)\,L_\lambda^{\rm SSP}(\tau, Z(\tau))\,d\tau}$$
   $\langle \tau \rangle_L$ is strongly wavelength-dependent: UV-optical observations are heavily biased toward the youngest active generation.

2. **mass-weighted age ($\langle \tau \rangle_M$)**:
   the true chronological average age of all surviving stellar mass in the galaxy:
   $$\langle \tau \rangle_M \equiv \frac{\int_0^t \tau\,\psi(t - \tau)\,[1 - R(\tau)]\,d\tau}{\int_0^t \psi(t - \tau)\,[1 - R(\tau)]\,d\tau}$$
   where $R(\tau)$ is the returned mass fraction from supernovae and stellar winds. In star-forming or "frosting" systems, $\langle \tau \rangle_M$ can exceed $\langle \tau \rangle_L$ by several gigayears.

3. **lookback formation epoch ($t_{50}$)**:
   the lookback time at which $50\%$ of the galaxy's current surviving stellar mass had assembled:
   $$\int_0^{t_{50}} \psi(t')\,[1 - R(t_{\rm obs} - t')]\,dt' = 0.50\,M_*$$
   $t_{50}$ is less sensitive to recent minor bursts and represents the most robust metric for cosmic formation times.

---

### primary spectroscopic age indicators

#### 1. the $4000$ Å break ($D_n4000$)
the $4000$ Å break arises from heavy metal absorption lines (predominantly $\mathrm{Fe\,I}, \mathrm{Fe\,II}$, and $\mathrm{Ca\,II}\ \mathrm{H+K}$) in the atmospheres of cool stars ($T_{\rm eff} \le 5500$ K). Balogh et al. (1999) defined the narrow index $D_n4000$:

$$D_n4000 \equiv \frac{\int_{4000\text{ Å}}^{4100\text{ Å}} f_\nu\,d\lambda}{\int_{3850\text{ Å}}^{3950\text{ Å}} f_\nu\,d\lambda}$$

- **young starbursts ($\tau < 100$ Myr)**: $D_n4000 \approx 1.0\text{--}1.2$ (no metal blanketing from cool stars).
- **intermediate populations ($\tau \sim 0.5\text{--}1.5$ Gyr)**: $D_n4000 \approx 1.3\text{--}1.6$.
- **old, quiescent early-type galaxies ($\tau > 3$ Gyr)**: $D_n4000 \approx 1.7\text{--}2.2$.

#### 2. high-order balmer absorption lines ($\mathrm{H}\delta_A, \mathrm{H}\gamma_A$)
Balmer line absorption equivalent widths peak sharply in A-type main-sequence stars ($T_{\rm eff} \approx 9000$ K, lifespans $\sim 0.3\text{--}1$ Gyr). The $\mathrm{H}\delta_A$ index (Worthey & Ottaviani 1997) reaches a maximum of $\mathrm{EW} \sim 8\text{--}10$ Å roughly $300\text{--}800$ Myr following the abrupt cessation of a starburst.

#### 3. the $D_n4000$ vs $\mathrm{H}\delta_A$ diagnostic plane
Kauffmann et al. (2003) demonstrated that plotting $D_n4000$ against $\mathrm{H}\delta_A$ breaks the degeneracy between continuous star formation and bursty histories:
- continuous star-forming galaxies follow a tight locus where $D_n4000$ rises as $\mathrm{H}\delta_A$ steadily declines.
- **post-starburst ("E+A" / "K+A") galaxies** jump above the locus: they exhibit intermediate $D_n4000$ ($1.3\text{--}1.5$) paired with anomalously strong $\mathrm{H}\delta_A > 4\text{--}6$ Å, unambiguously dating a major starburst that was quenched within the past $1$ Gyr.

---

### cosmic downsizing and quenching ages

measuring the stellar ages of quiescent galaxies across cosmic time reveals the phenomenon of **galaxy downsizing** (Cowie et al. 1996; Thomas et al. 2005):
- the most massive early-type galaxies ($M_* > 10^{11}\,M_\odot$) exhibit the oldest mass-weighted ages ($\langle \tau \rangle_M \approx 10\text{--}12$ Gyr locally) and formed at $z_f > 2\text{--}3$ in short, intense bursts ($\Delta t_{\rm burst} < 1$ Gyr), evidenced by their high $[\alpha/\mathrm{Fe}]$ ratios.
- lower-mass galaxies ($M_* < 10^{10}\,M_\odot$) have systematically younger mass-weighted ages, longer formation timescales, and lower $[\alpha/\mathrm{Fe}]$.

---

## see also

- [[Observational_Astrophysics_MOC]]
- [[Stellar_Astrophysics_MOC]]
- [[Stellar population synthesis]]
- [[Single stellar population SSP]]
- [[Lick indices]]
- [[Age-metallicity degeneracy]]
- [[Stellar mass estimation in unresolved populations]]
- [[Star formation history of a population]]
- [[Cluster ages from CMD turnoff]]
- [[SED fitting basics]]
- [[Stellar populations I II III]]



## Linked References

- [[Age-metallicity degeneracy]]
- [[Dust attenuation in synthetic populations]]
- [[Lick indices]]
- [[Resolved vs unresolved stellar populations]]
- [[SED fitting basics]]
- [[Star formation history of a population]]
- [[Stellar mass estimation in unresolved populations]]
- [[Stellar population synthesis]]


