---
layout: default
title: "BBN_neutron_proton_ratio"
---

since nuclei are made of protons and neutrons, the **neutron-to-proton ratio** $n/p$ is the single most important quantity for primordial nucleosynthesis. essentially all neutrons in the universe end up bound into $^4$He, so the final $^4$He abundance depends directly on $(n/p)$ at the time of BBN.

---

## the relevant weak interactions

at $T \gg 1$ MeV, the n/p ratio is regulated by **weak interactions**:
$$n \leftrightarrow p + e^- + \bar\nu_e$$
$$n + \nu_e \leftrightarrow p + e^-$$
$$e^+ + n \leftrightarrow p + \bar\nu_e$$

(here $\nu_e$ is the electron neutrino.)

while the rates $\Gamma_i$ for these are $\Gamma_i \gg H$, chemical equilibrium also holds:
$$\mu_n + \mu_\nu = \mu_p + \mu_e$$

![bbn-16](../../assets/images/bbn-16.png)

---

## the equilibrium n/p ratio

in (thermal) equilibrium:
$$\frac{n}{p} = \frac{n_n}{n_p} = \frac{X_n}{X_p} = \frac{e^{(\mu_n - m_n)/T}}{e^{(\mu_p - m_p)/T}} = e^{-(m_n - m_p)/T}\, e^{(\mu_n - \mu_p)/T}$$

using the chemical-equilibrium relation:
$$\boxed{\,\frac{n}{p} = e^{-Q/T}\, e^{(\mu_e - \mu_\nu)/T}\,}$$

where $Q = m_n - m_p = 1.293$ MeV (the neutron-proton mass difference).

### why the chemical-potential factor is negligible

- $\mu_e/T \sim n_e/n_\gamma \sim n_p/n_\gamma \sim \eta \sim 10^{-10}$ from charge neutrality
- $\mu_\nu/T$: we lack direct cosmic neutrino background detection, so cannot measure. but on theoretical grounds (related to baryogenesis), we assume $\mu_\nu/T \ll 1$

both terms negligible, so:
$$\boxed{\,\left(\frac{n}{p}\right)_{\rm EQ} = e^{-Q/T}\,}$$

![bbn-17](../../assets/images/bbn-17.png)

---

## when equilibrium holds

at $T \gg Q = 1.293$ MeV, $(n/p)_{\rm EQ} \approx 1$. for weak interactions:
$$\frac{\Gamma_w}{H} \sim \left(\frac{T}{1\,\text{MeV}}\right)^3$$

so as long as $T \gg 1$ MeV, weak interactions are fast and $(n/p)$ tracks its equilibrium value of 1.

![bbn-18](../../assets/images/bbn-18.png)

---

## freeze-out at $T_F \sim 0.8$ MeV

as $T$ decreases past 1 MeV, $\Gamma_w/H$ falls below 1. the weak processes can no longer keep up with the expansion, and the n/p ratio **freezes out** at approximately its equilibrium value at $T_F \sim 0.8$ MeV:

$$\left(\frac{n}{p}\right)_{\rm freeze-out} = e^{-Q/T_F} = e^{-1.293/0.8} \approx \frac{1}{6}$$

this is one of the most important examples in cosmology of a process that goes out of equilibrium. it is exactly why we spend so much time on the conditions for departure from equilibrium ([Decoupling and freeze-out](../../02_Zettel/Theory/Decoupling and freeze-out.md)).

![bbn-24](../../assets/images/bbn-24.png)

---

## decay during the wait: $1/6 \to 1/7$

the universe is **not done yet** at $T_F$. between $T = 0.8$ MeV and $T = 0.1$ MeV (where $^4$He synthesis actually occurs), about 250 seconds elapse. during this time, free neutrons can $\beta$-decay:
$$n \to p + e^- + \bar\nu_e, \quad \tau_n \approx 880\,\text{s}$$

so a fraction of neutrons decay between freeze-out and BBN. when $^4$He synthesis kicks in at $T_{\rm NUCL} \sim 0.1$ MeV, the n/p ratio has shifted slightly:
$$\left(\frac{n}{p}\right)_{\rm NUCL} \approx \frac{1}{7}$$

(more rigorously, we should solve the time evolution of $(n/p)$ with the decay rate built in, but this is a good approximation.)

![bbn-26](../../assets/images/bbn-26.png)

---

## why this fixes $X_4 \approx 25\%$

in step 3 of BBN ($T \sim 0.1$ MeV), essentially all neutrons end up bound into $^4$He (the most tightly bound light species). the mass fraction of $^4$He, assuming all neutrons go into $^4$He:

$$X_4 = \frac{4 n_4}{n_N} \simeq \frac{4(n_n/2)}{n_n + n_p} = \frac{2(n/p)_{\rm NUCL}}{1 + (n/p)_{\rm NUCL}}$$

substituting $(n/p)_{\rm NUCL} = 1/7$:
$$X_4 \simeq \frac{2(1/7)}{1 + 1/7} = \frac{2}{8} = \frac{1}{4} = 25\%$$

→ **the famous prediction of BBN: about 25% of the universe's baryonic mass locked into $^4$He, primordially**.

![bbn-29](../../assets/images/bbn-29.png)

---

## sensitivity of $X_4$ to parameters

$X_4$ depends on the n/p ratio at nucleosynthesis, which depends on:
- **the freeze-out temperature** $T_F$, set by $\Gamma_w(T_F) = H(T_F)$
- **the time delay** between freeze-out and nucleosynthesis, set by the rate of n decay and $H(T)$

increasing the **neutron half-life** $\tau_{1/2}(n)$ would decrease all weak rates, leading to earlier freeze-out (higher $T_F$), higher $(n/p)_F$, hence more $^4$He.

increasing $g_*$ (e.g. extra neutrino species, primordial gravitational waves) would increase $H \propto g_*^{1/2} T^2$, leading to earlier freeze-out, hence more $^4$He.

→ this is how BBN constrains physics beyond the standard model. see [BBN_predictions](../../02_Zettel/Theory/BBN_predictions.md).

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md)
- [BBN_overview](../../02_Zettel/Theory/BBN_overview.md)
- [BBN_NSE_initial_conditions](../../02_Zettel/Theory/BBN_NSE_initial_conditions.md)
- [BBN_baryon_to_photon_ratio](../../02_Zettel/Theory/BBN_baryon_to_photon_ratio.md)
- [BBN_three_steps](../../02_Zettel/Theory/BBN_three_steps.md)
- [BBN_predictions](../../02_Zettel/Theory/BBN_predictions.md)
- [Decoupling and freeze-out](../../02_Zettel/Theory/Decoupling and freeze-out.md)
