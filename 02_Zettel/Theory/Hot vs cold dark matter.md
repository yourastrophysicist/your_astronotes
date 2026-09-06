---
layout: default
title: "Hot vs cold dark matter"
---

a key classification: **was the dark matter relativistic or non-relativistic at decoupling?**

- **hot dark matter (HDM)**: relativistic at decoupling. example: light neutrinos.
- **cold dark matter (CDM)**: non-relativistic at decoupling. example: WIMPs at the electroweak scale.
- **warm dark matter (WDM)**: in between. example: keV-scale sterile neutrinos.

this distinction has dramatic consequences for **structure formation**.

---

## hot dark matter

a hot relic is relativistic at decoupling, so it has a large velocity dispersion. in the matter era, particles **free-stream** out of any density perturbation smaller than their free-streaming length:
$$\lambda_{\rm fs} \sim \int v\, dt$$

this **erases** small-scale structure. for hot dark matter (e.g. eV-scale neutrinos), the free-streaming length is huge — comparable to a galaxy supercluster. so HDM cannot produce the observed small-scale structure (galaxies on the scale of $\sim 100$ kpc).

→ **HDM is ruled out** as the dominant dark matter component. light neutrinos contribute at most $\Omega_\nu h^2 \lesssim 0.001$ (see [Cosmic_inventory_neutrinos](../../02_Zettel/Theory/Cosmic_inventory_neutrinos.md)).

---

## cold dark matter

a cold relic is non-relativistic at decoupling, so it has very small velocity dispersion. it free-streams over very small distances. so it can support **all** the observed structure, from clusters down to galactic scales.

→ **CDM is the C in ΛCDM**. our standard cosmological model.

candidates include:
- WIMPs (weak-scale particles): mass $\sim 100$ GeV, decouple non-relativistically (see Dark matter relics — WIMP miracle)
- axions: very light ($\sim \mu$eV) but **never thermal**, produced by misalignment, behaves as cold even though light
- primordial black holes: behave as cold
- sterile neutrinos at sufficiently high mass

---

## warm dark matter

intermediate. e.g. sterile neutrinos at $m \sim$ keV. these have free-streaming lengths comparable to the smallest dark matter halos we observe ($\sim 100$ pc - $\sim 1$ Mpc).

WDM is less constrained but may help explain some "small-scale" anomalies of CDM (missing satellites of the Milky Way, cusp-core problem, etc.). active research area.

---

## structure formation imprints

CDM structure forms **bottom-up**: small halos form first, then merge into larger ones. this matches the observed picture of galaxy formation followed by cluster formation.

HDM would produce **top-down** structure: large structures form first, then fragment into smaller ones. this is the wrong sequence — observations show small galaxies existed at $z > 6$, well before clusters virialized.

so the "way structure forms" alone tells us dark matter must be cold (or very nearly so).

---

## connecting to the matter power spectrum

the matter power spectrum (see [Matter power spectrum and BAO](../../02_Zettel/Theory/Matter power spectrum and BAO.md)) has a turnover at the equality scale, but **CDM continues to have power below the turnover**. HDM would have an exponential cutoff in $P_m(k)$ at the free-streaming scale.

observations show power on small scales (DES cosmic shear, Ly-α forest, lensing). this is direct evidence that the dominant component must be cold.

---

## thermal mass-temperature relation

for a thermal relic, decoupling temperature roughly $T_d \sim m/20$. so:
- $m \sim 1$ eV: $T_d \sim 0.05$ eV, decouples *after* electron-positron annihilation, while still relativistic. **hot.**
- $m \sim 1$ keV: $T_d \sim 50$ eV. **warm.**
- $m \sim 100$ GeV: $T_d \sim 5$ GeV. **cold.**

this is why we say neutrinos are hot, WIMPs are cold. it has to do with their masses relative to their decoupling temperatures, not absolute mass.

---

## what we know vs. what we don't

we **know**:
- dark matter is mostly cold (or warm, indistinguishable so far in cosmological observations)
- a non-trivial hot component is ruled out
- $\Omega_{dm} h^2 = 0.120$

we **don't know**:
- what cold dark matter actually is (a particle? primordial black holes?)
- whether there's a small warm component (sterile neutrinos?)

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md)
- [Cosmic_inventory_dark_matter](../../02_Zettel/Theory/Cosmic_inventory_dark_matter.md)
- [Cosmic_inventory_neutrinos](../../02_Zettel/Theory/Cosmic_inventory_neutrinos.md)
- [Decoupling and freeze-out](../../02_Zettel/Theory/Decoupling and freeze-out.md)
- Dark matter relics — WIMP miracle
- [Matter power spectrum and BAO](../../02_Zettel/Theory/Matter power spectrum and BAO.md)
