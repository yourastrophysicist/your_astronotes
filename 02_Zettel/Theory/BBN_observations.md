---
layout: default
title: "BBN_observations"
---

measuring the BBN abundances observationally is harder than computing them theoretically. uncertainties in the **observed** abundances can be larger than the theoretical predictions, because what we observe today is the abundance in selected astrophysical sites, where non-primordial processes (stellar production, destruction) might have altered things.

so for each light element, we have to think carefully about whether we are measuring something close to the primordial abundance or something contaminated by stellar processing.

---

## deuterium

**historically**: first measurements in solar system and interstellar medium (deuterated molecules, pre-solar meteorites, solar data). gives:
$$D/H \sim (1\text{–}4) \times 10^{-10}$$
(after correcting for non-primordial isotopic effects).

D is **easily burned** at $T > 0.5 \times 10^6$ K (~50 eV) and **difficult to produce**. so historically these measurements gave a **lower bound** on the primordial abundance of D, hence an **upper limit on $\eta$** (≤ 10$^{-9}$).

an upper bound cannot be inferred from local D measurements alone since D is easily destroyed. (a lower bound on $\eta$ can be obtained by combining D and $^3$He measurements.)

### the modern way: quasar absorption lines

**absorption lines of quasars by D at high redshift** ($z \sim 3$–$4$) in intervening gas systems. measurements first attempted in the early 1980s and refined in the late 90s.

going to high z is important because there has been less stellar processing — the gas there is closer to primordial.

these measurements actually give a **direct precise determination** of $(D/H)_{\rm prim}$, not just a bound:

<img src="{{ "/assets/images/bbn-39.png" | relative_url }}" alt="bbn-39" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

$$\boxed{\,D/H = (2.527 \pm 0.030)\times 10^{-5} \quad (68\%~\text{CL, Cooke et al. 2018})\,}$$

since the BBN prediction for D depends steeply on $\eta$, even relatively large errors on D translate into small errors on $\Omega_b h^2$. this is **one of the most precise measurements of the baryon density we have**.

<img src="{{ "/assets/images/bbn-38.png" | relative_url }}" alt="bbn-38" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

<img src="{{ "/assets/images/bbn-40.png" | relative_url }}" alt="bbn-40" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## $^3$He

measurements from:
- the solar system (pre-solar formation, meteorites)
- the hyperfine line of $^3$He$^+$ in HII clouds

these give:
$$\frac{D + {}^3\text{He}}{H} \sim 10^{-5}$$

(since D burns into $^3$He, the sum is what we measure.)

now $^3$He is **much more difficult to destroy** than D — at most an "astration factor" of $f_a = 2$ can be destroyed by stellar burning. this already suggests that these measurements should be interpreted as an **upper bound** on the primordial $^3$He abundance — and hence a **lower bound on $\eta$**.

historically, consistency between predicted BBN abundances of D and $^3$He implied $4 \le \eta \times 10^{10} \le 10$. now with precise D measurements alone we get a precise $\eta$.

<img src="{{ "/assets/images/bbn-41.png" | relative_url }}" alt="bbn-41" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## $^7$Li

at the beginning, only measurements from meteorites and the local ISM. but $^7$Li is both **easily destroyed** (at $T > 2 \times 10^6$ K) and **easily produced** (cosmic-ray spallation, AGB stars), so very difficult to think these reflect primordial abundances.

### the breakthrough: metal-poor halo stars

starting from 1982, $^7$Li lines were measured in **old, massive, metal-poor stars**. a remarkable correlation appeared:
- **rapidly decreasing** $^7$Li abundance with decreasing star mass, AND
- a **plateau** of $^7$Li abundance for higher and higher star masses

this was the sign that $^7$Li was destroyed in lower-mass stars, but not in higher-mass stars. so the plateau measures the primordial abundance:
$$\boxed{\,\frac{^7\text{Li}}{H} \sim O(1) \times 10^{-10}\,}$$

remarkably, this measurement can be achieved around the **trough** of the $^7$Li($\eta$) curve, making it a sensitive probe of $\eta$.

historically, using D, $^3$He, $^7$Li together one set: $4 \le \eta \times 10^{10} \le 7$.

<img src="{{ "/assets/images/bbn-42.png" | relative_url }}" alt="bbn-42" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

### the "lithium problem"

> the BBN-predicted $^7$Li abundance with $\eta$ from CMB is about a factor of 3 *higher* than what is measured in metal-poor halo stars.

this is an ongoing puzzle. possible solutions: stellar destruction of $^7$Li in the atmospheres of these stars; new physics in the early universe; uncertainties in the production cross-sections.

---

## $^4$He

modern $^4$He measurements rely on **recombination lines** of (metal-poor) HII regions, both galactic and extragalactic.

stars produce $^4$He, so high-metallicity environments will overestimate the primordial value. but stars also produce metals, and you'd expect a correlation: lower $^4$He at lower metallicity. that is exactly what we see — so the **best environments to measure primordial $^4$He are metal-poor HII regions**.

extrapolating the $Y$ vs O/H correlation to zero metallicity gives the primordial $^4$He abundance:

<img src="{{ "/assets/images/bbn-44.png" | relative_url }}" alt="bbn-44" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

most up-to-date (Aver et al. 2015):
$$\boxed{\,Y_p = \frac{4 n_{^4\text{He}}}{n_N} = 0.2449 \pm 0.0040 \quad (68\%~\text{CL})\,}$$

remarkably consistent with the prediction of $\sim 25\%$.

<img src="{{ "/assets/images/bbn-43.png" | relative_url }}" alt="bbn-43" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## summary

| element | measurement | site | dominant uncertainty |
|---|---|---|---|
| D | $(2.527 \pm 0.030) \times 10^{-5}$ | high-z quasar absorbers | small |
| $^3$He | upper bound on primordial | solar system, HII | astration factor |
| $^7$Li | $\sim 10^{-10}$ | metal-poor halo stars | the lithium problem |
| $^4$He | $0.2449 \pm 0.0040$ | metal-poor HII regions | extrapolation to Z=0 |

D/H gives the **cleanest** measurement of $\eta$. $^4$He confirms the n/p physics. $^3$He and $^7$Li provide cross-checks (with the lithium problem outstanding).

→ the final concordance check is comparing $\eta$ from BBN with $\eta$ from CMB peaks: see [BBN_concordance_with_CMB](../../02_Zettel/Theory/BBN_concordance_with_CMB.html).

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [BBN_overview](../../02_Zettel/Theory/BBN_overview.html)
- [BBN_predictions](../../02_Zettel/Theory/BBN_predictions.html)
- [BBN_concordance_with_CMB](../../02_Zettel/Theory/BBN_concordance_with_CMB.html)
- [Cosmic_inventory_baryons](../../02_Zettel/Theory/Cosmic_inventory_baryons.html)
