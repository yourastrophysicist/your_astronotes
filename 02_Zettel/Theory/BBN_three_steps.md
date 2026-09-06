---
layout: default
title: "BBN_three_steps"
---

primordial nucleosynthesis happens in three rough steps, each at a different temperature regime. tracking the abundances through them gives us the final BBN predictions.

---

## Step 1: $T \sim 10$ MeV ($t \sim 10^{-2}$ sec)

universe is **radiation-dominated**. relativistic species: photons, $e^\pm$, three light neutrino species, total
$$g_* = 10.75 \quad (T_\nu = T_\gamma)$$

**all weak interactions are efficient**, $\Gamma \gg H$, so $(n/p) = (n/p)_{\rm EQ} \approx 1$ (since $T \gg Q = 1.293$ MeV).

light elements are in NSE but their abundances are *tiny* because $T \gg B_A$ and $\eta$ is small:
$$X_n \approx X_p \approx 0.5$$
$$X_2 \sim 10^{-12}, \quad X_3 \sim 10^{-23}, \quad X_4 \sim 10^{-30}$$

![bbn-23](../../assets/images/bbn-23.png)

so essentially nothing has happened yet — but the conditions are set.

---

## Step 2: $T \sim 1$ MeV ($t \sim 1$ sec)

this is where the action happens.

just before this, **neutrinos decouple** from the plasma when $\Gamma_w \sim H$ (see [Decoupling and freeze-out](../../02_Zettel/Theory/Decoupling and freeze-out.md)).

at $T \sim m_e/3 \sim 0.5$ MeV, **electrons and positrons annihilate**, transferring their entropy to photons but not to the (already decoupled) neutrinos. this raises the photon temperature relative to the neutrino temperature by:
$$\frac{T_\gamma}{T_\nu} = \left(\frac{11}{4}\right)^{1/3} \approx 1.4$$

at around the same epoch ($T \sim 1$ MeV), weak interactions interconverting n and p **freeze out** — $\Gamma_w$ becomes inefficient relative to $H$ — so the n/p ratio gets frozen at approximately its equilibrium value at $T_F \sim 0.8$ MeV:
$$\left(\frac{n}{p}\right)_{\rm freeze-out} = e^{-Q/T_F} = e^{-1.293/0.8} \approx \frac{1}{6}$$

→ see [BBN_neutron_proton_ratio](../../02_Zettel/Theory/BBN_neutron_proton_ratio.md).

![bbn-24](../../assets/images/bbn-24.png)

abundances at this point still tiny:
$$X_n \approx 1/7, \quad X_p \approx 6/7$$
$$X_2 \sim 10^{-12}, \quad X_3 \sim 10^{-23}, \quad X_4 \sim 10^{-28}, \quad X_{12} \sim 10^{-108}$$

(the n/p ratio has shifted from $1/6$ to $\sim 1/7$ due to occasional free neutron decays; $\tau_{1/2}(n) \approx 610$ s.)

![bbn-25](../../assets/images/bbn-25.png)

---

## Step 3: $T \sim 0.3 \to 0.1$ MeV ($t \sim 1$ to 3 minutes)

at this epoch $g_* = 3.36$ (3 light neutrinos + photons; $e^\pm$ have annihilated).

the n/p ratio has slowly decayed to $\sim 1/7$ because of occasional weak processes, mainly free neutron decay. (an interesting check: at NSE at $T = 0.3$ MeV, $(n/p)_{\rm EQ} = e^{-Q/T} = e^{-4.31} \sim 1/74$, much smaller than the actual $1/7$. so the n/p ratio has *decoupled from equilibrium* — exactly what we expect from the freeze-out picture.)

![bbn-26](../../assets/images/bbn-26.png)

at $T \sim 0.3$ MeV the NSE value of $^4$He approaches unity. but **shortly before**, at $T \sim 0.5$ MeV, the actual abundance of $^4$He falls *below* its NSE value. why?

> the rates for the processes synthesizing $^4$He are not fast enough to catch up with the expansion of the universe.

the relevant reactions:
- $D + D \to n + {}^3\text{He}$, then ${}^3\text{He} + D \to {}^4\text{He} + p$
- $D + D \to p + {}^3\text{H}$, then ${}^3\text{H} + D \to {}^4\text{He} + n$
- $D + D \to {}^4\text{He} + \gamma$

![bbn-27](../../assets/images/bbn-27.png)

their rates $\Gamma = n_A \sigma v$ are low for two reasons:
1. the abundances of the "fuels" D, $^3$He, $^3$H are still very low ($X_A \sim 10^{-12}$)
2. the cross-sections $\sigma$ are suppressed by the **Coulomb barrier**:
$$\sigma \propto \exp\left[-2(A_1 A_2/(A_1 + A_2))^{1/3} Z_1 Z_2\, T_{\rm MeV}^{-1/3}\right]$$

![bbn-28](../../assets/images/bbn-28.png)

once the abundances of D, $^3$He, $^3$H reach order unity at $T_{\rm NUCL} \sim 0.1$ MeV, the reactions become fast enough — and **essentially all the neutrons are bound into $^4$He**, the most tightly bound light species.

mass fraction of $^4$He, assuming all neutrons go into $^4$He:
$$X_4 = \frac{4 n_4}{n_N} \simeq \frac{2(n/p)_{\rm NUCL}}{1 + (n/p)_{\rm NUCL}} \simeq \frac{2(1/7)}{1 + 1/7} = \frac{1}{4} = 25\%$$

![bbn-29](../../assets/images/bbn-29.png)

---

## what about D, $^3$He, $^7$Li?

a substantial amount of D and $^3$He is produced in the sense that some is left **unburnt**:
$$D/H \sim {}^3\text{He}/H \sim 10^{-5} \text{ to } 10^{-4}$$

this happens because the rates burning them into $^4$He depend on $\eta$:
$$\Gamma \propto n_{2,3}\, \sigma v \propto X_{2,3}(\eta n_\gamma)\, \sigma v$$

so as $X_2$, $X_3$ decrease (because $^4$He is being made), the rates fall and the reactions freeze out — leaving leftover D and $^3$He.

since these rates depend on a power of $\eta$, **higher $\eta$ → faster burning → less unburnt D and $^3$He**.

a small amount of $^7$Li:
$${}^7\text{Li}/H \sim 10^{-10} \text{ to } 10^{-11}$$

via two channels:
- for $\eta < 3 \times 10^{-10}$: $^4\text{He} + ^3\text{H} \to ^7\text{Li} + \gamma$
- for $\eta > 3 \times 10^{-10}$: $^4\text{He} + ^3\text{He} \to ^7\text{Be} + \gamma$, then $\beta$-decay $^7\text{Be} \to ^7\text{Li}$

→ see [BBN_predictions](../../02_Zettel/Theory/BBN_predictions.md).

![bbn-30](../../assets/images/bbn-30.png)

![bbn-31](../../assets/images/bbn-31.png)

---

## summary: the three-step timeline

| step | $T$ (MeV) | $t$ | what happens |
|---|---|---|---|
| 1 | $\sim 10$ | $10^{-2}$ s | NSE, n/p ≈ 1, all abundances negligible |
| 2 | $\sim 1$ | 1 s | $\nu$ decoupling, $e^\pm$ annihilation, n/p freeze-out at 1/6 |
| 3 | $0.3 \to 0.1$ | 1–3 min | D bottleneck breaks, $^4$He forms with $X_4 \approx 25\%$, leftover D and $^3$He at $10^{-5}$, trace $^7$Li |

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md)
- [BBN_overview](../../02_Zettel/Theory/BBN_overview.md)
- [BBN_NSE_initial_conditions](../../02_Zettel/Theory/BBN_NSE_initial_conditions.md)
- [BBN_neutron_proton_ratio](../../02_Zettel/Theory/BBN_neutron_proton_ratio.md)
- [BBN_baryon_to_photon_ratio](../../02_Zettel/Theory/BBN_baryon_to_photon_ratio.md)
- [BBN_predictions](../../02_Zettel/Theory/BBN_predictions.md)
- [BBN_observations](../../02_Zettel/Theory/BBN_observations.md)
