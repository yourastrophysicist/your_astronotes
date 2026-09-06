---
layout: default
title: "Temperature-time relation"
---

at early times the universe is **radiation-dominated**, and the Friedmann equation has a simple form. solving it gives the temperature as a function of cosmic time.

---

## the Friedmann equation in radiation domination

with the energy density of relativistic species
$$\rho_{\rm rad} = \frac{\pi^2}{30}\, g_*(T)\, T^4$$

(see [Number density and energy density at thermal equilibrium](../../02_Zettel/Theory/Number density and energy density at thermal equilibrium.html)), the Friedmann equation is:
$$H^2 = \frac{8\pi G}{3}\rho_{\rm rad} = \frac{8\pi^3 G}{90}\, g_*(T)\, T^4$$

so:
$$H = \sqrt{\frac{8\pi^3}{90}\, g_*}\, \frac{T^2}{M_{\rm Pl}}$$

with $M_{\rm Pl} = (8\pi G)^{-1/2} \approx 2.4 \times 10^{18}$ GeV the reduced Planck mass.

---

## solution: $T \propto 1/\sqrt t$

if $g_*$ is approximately constant over the time interval, then $H = 1/(2t)$ in radiation domination ($a \propto t^{1/2}$), so:
$$\frac{1}{2t} = \sqrt{\frac{8\pi^3}{90}\, g_*}\, \frac{T^2}{M_{\rm Pl}}$$

solving for $T$:
$$\boxed{\,T(t) = \left(\frac{45}{16\pi^3 g_*}\right)^{1/4}\sqrt{\frac{M_{\rm Pl}}{t}}\,}$$

equivalently:
$$T^2 t = \frac{1}{2}\sqrt{\frac{90}{8\pi^3 g_*}}\, M_{\rm Pl}$$

a useful numerical form, with $T$ in MeV and $t$ in seconds:
$$T_{\rm MeV} \approx \frac{1.5}{g_*^{1/4}}\, t_{\rm sec}^{-1/2}$$

so:
- $T = 10$ MeV at $t \approx 0.01$ s
- $T = 1$ MeV at $t \approx 1$ s (just before BBN)
- $T = 0.1$ MeV at $t \approx 100$ s (BBN proper)

---

## why $g_*$ matters

each mass threshold (top quark, W/Z bosons, electron) drops $g_*$ as that species annihilates and disappears from the relativistic plasma. so the relation $T(t)$ has **kinks** at each threshold.

the **Hubble rate** $H \propto g_*^{1/2} T^2$ depends on $g_*$ — and so does the temperature at which any given particle freezes out (since $\Gamma \sim H$ defines decoupling).

> **so the abundance of any thermal relic depends on $g_*$ at decoupling.**

a famous BBN application: extra light degrees of freedom (a fourth neutrino species, primordial gravitational waves) would increase $g_*$ at $T \sim 1$ MeV, increase $H$, force earlier n/p freeze-out, and give a *higher* primordial $^4$He abundance. so observed $Y_p$ constrains the count of light species at the BBN epoch. → see [BBN_predictions](../../02_Zettel/Theory/BBN_predictions.html).

---

## $T \propto 1/a$ as a corollary

combined with entropy conservation $g_{*s} T^3 a^3 = $ const (see [Conservation of entropy in a comoving volume](../../02_Zettel/Theory/Conservation of entropy in a comoving volume.html)), this gives:
$$T \propto \frac{1}{a\, [g_{*s}]^{1/3}}$$

across smooth epochs (constant $g_{*s}$), this reduces to $T \propto 1/a$. the photon temperature redshifts inversely with the scale factor — that's why the CMB is so cold today even though it was 3000 K at recombination.

---

## the temperature today

extrapolating backward from $T_0 = 2.725$ K at $a = 1$ today:
- $T(z=1100) \approx 3000$ K (recombination)
- $T(z=10^6) \approx 3 \times 10^6$ K (electron-positron pairs)
- $T(z=10^9) \approx 3 \times 10^9$ K $\approx 0.3$ MeV (BBN regime, $^4$He synthesis)
- $T(z=10^{10}) \approx 3 \times 10^{10}$ K $\approx 3$ MeV (n/p freeze-out)

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Brief thermal history](../../02_Zettel/Theory/Brief thermal history.html)
- [Number density and energy density at thermal equilibrium](../../02_Zettel/Theory/Number density and energy density at thermal equilibrium.html)
- [Conservation of entropy in a comoving volume](../../02_Zettel/Theory/Conservation of entropy in a comoving volume.html)
- Friedmann equations with Λ
- [Friedmann models](../../02_Zettel/Theory/Friedmann models.html)
- [BBN_predictions](../../02_Zettel/Theory/BBN_predictions.html)
