---
layout: default
title: "Stellar nucleosynthesis"
---

stars are nuclear reactors that fuse light elements into heavier ones, releasing energy in the process. the chain of reactions starts with hydrogen and works its way up the periodic table:

$$\text{H} \to \text{He} \to \text{C} \to \text{O} \to \text{Ne} \to \text{Mg} \to \text{Si} \to \cdots \to \text{Fe}$$

beyond iron, fusion is endothermic — energy must be put in, not released. so iron is the heaviest element produced by *equilibrium* stellar nucleosynthesis. heavier elements come from neutron capture (s-process and r-process) and other processes.

<img src="{{ "/assets/images/stellar-15.png" | relative_url }}" alt="stellar-15" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## hydrogen burning: pp chain

dominant in stars with $M \lesssim 1.5\, M_\odot$ (Sun-like), where central $T \sim 1.5 \times 10^7$ K.

three branches: pp I, pp II, pp III. all start with the rate-limiting step:
$$p + p \to D + e^+ + \nu_e$$

(weak interaction, very slow. half-life of a proton in the Sun's core: $\sim 10^{10}$ yr.)

then the deuteron quickly captures another proton:
$$D + p \to {}^3\text{He} + \gamma$$

the ${}^3$He then either:
- pp I: ${}^3$He + ${}^3$He → ${}^4$He + 2p (dominant in the Sun)
- pp II: ${}^3$He + ${}^4$He → ${}^7$Be → ${}^7$Li + p → 2 ${}^4$He
- pp III: similar but going through ${}^8$B → 2${}^4$He

net: $4p \to {}^4$He + 2$e^+$ + 2$\nu_e$, releasing $\sim 26.7$ MeV per cycle (about 0.7% of the rest-mass energy of 4 protons).

---

## hydrogen burning: CNO cycle

dominant in stars with $M \gtrsim 1.5\, M_\odot$, where central $T > 1.7 \times 10^7$ K. uses C, N, O as catalysts:
$$^{12}\text{C} + p \to {}^{13}\text{N} + \gamma$$
$${}^{13}\text{N} \to {}^{13}\text{C} + e^+ + \nu_e$$
$${}^{13}\text{C} + p \to {}^{14}\text{N} + \gamma$$
$${}^{14}\text{N} + p \to {}^{15}\text{O} + \gamma$$
$${}^{15}\text{O} \to {}^{15}\text{N} + e^+ + \nu_e$$
$${}^{15}\text{N} + p \to {}^{12}\text{C} + {}^4\text{He}$$

net: $4p \to {}^4$He + 2$e^+$ + 2$\nu_e$ + $\gamma$. releases the same $\sim 26.7$ MeV per cycle.

cycle is **catalytic**: the carbon at the start is replenished at the end. extreme temperature sensitivity:
$$\epsilon_{CNO} \propto \rho T^{18}$$

vs $\epsilon_{pp} \propto \rho T^4$. so CNO dominates in massive stars (which have hotter cores), and pp dominates in solar-type stars.

---

## helium burning: triple-alpha

once H is exhausted in the core, the core contracts and heats up to $\sim 10^8$ K, when $^4$He can fuse:
$$3\,{}^4\text{He} \to {}^{12}\text{C} + \gamma$$

this proceeds via a transient $^8$Be (lifetime $10^{-16}$ s):
- ${}^4$He + ${}^4$He → ${}^8$Be (unstable)
- ${}^8$Be + ${}^4$He → ${}^{12}$C* → ${}^{12}$C + 2$\gamma$ (Hoyle resonance at 7.65 MeV)

extreme temperature sensitivity:
$$\epsilon_{3\alpha} \propto \rho^2 T^{40}$$

→ runs only in narrow temperature range. drives the star to the **horizontal branch** in low-mass stars or sustains the giant phase in intermediate-mass stars.

continues with $^{12}$C + $^4$He → $^{16}$O if temperature is high enough. so helium burning produces a C-O core, which is the eventual white dwarf material.

---

## advanced burning stages (massive stars only)

stars with $M \gtrsim 8\, M_\odot$ continue to:

- **carbon burning** at $T \sim 8 \times 10^8$ K: $^{12}$C + $^{12}$C → various products (Ne, Na, Mg)
- **neon burning** at $T \sim 1.5 \times 10^9$ K: $^{20}$Ne + $\gamma$ → $^{16}$O + $^4$He, then $^{20}$Ne + $^4$He → $^{24}$Mg
- **oxygen burning** at $T \sim 2 \times 10^9$ K: $^{16}$O + $^{16}$O → $^{28}$Si + $^4$He
- **silicon burning** at $T \sim 3 \times 10^9$ K: $^{28}$Si + $^4$He → $^{32}$S → ... → $^{56}$Ni → $^{56}$Co → $^{56}$Fe

each stage is shorter than the previous (by factors of 100–1000), because of the increasingly inefficient energy release per nucleon as we approach iron.

end result: an **onion-skin** structure with an iron core surrounded by Si, O, Ne, C, He, H burning shells.

at the iron core, fusion is endothermic. when the iron core exceeds the Chandrasekhar mass, it collapses → **core-collapse supernova**.

<img src="{{ "/assets/images/stellar-19.png" | relative_url }}" alt="stellar-19" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## elements beyond iron: s- and r-process

iron is the most tightly bound nucleus per nucleon (peak of the binding energy curve, see the [BBN_overview](../../02_Zettel/Theory/BBN_overview.html) note). beyond iron, fusion *requires* energy input. so heavier elements form by **neutron capture**:

### slow process (s-process)
in low-mass AGB stars (~few $M_\odot$). neutrons are captured slowly, with $\tau_{n-{\rm capture}} \gg \tau_{\beta-{\rm decay}}$. nuclei climb the valley of stability one neutron at a time, β-decaying when they get unstable.

makes elements like Ba, Sr, Pb. characteristic abundance peaks at "magic" neutron numbers (50, 82, 126).

### rapid process (r-process)
in **neutron star mergers** and (perhaps) certain supernovae. neutron flux so high that $\tau_{n-{\rm capture}} \ll \tau_{\beta-{\rm decay}}$. neutron-rich nuclei pile up far from stability before β-decaying back.

makes the heaviest elements: gold, platinum, uranium. confirmed by the **GW170817 kilonova** in 2017 — gravitational waves from a NS merger were accompanied by an optical/IR transient with the spectral signature of newly-formed lanthanides.

so the gold in your jewelry was made in a neutron-star merger somewhere in the universe's history.

---

## why it matters cosmologically

stellar nucleosynthesis is what produced **everything heavier than helium** in the universe (modulo trace BBN $^7$Li):
- the carbon in our DNA
- the iron in your blood
- the silicon in computer chips
- everything

it also enriches the **ISM** with heavy elements as stars die — see [Chemical evolution of galaxies](../../02_Zettel/Theory/Chemical evolution of galaxies.html). so the metallicity of stars and gas in galaxies records the **integrated history of star formation** in that galaxy.

→ measuring metallicity is one of the prime probes of galaxy evolution.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [BBN_overview](../../02_Zettel/Theory/BBN_overview.html) — primordial nucleosynthesis (the baseline before stars start)
- [HR diagram](../../02_Zettel/Theory/HR diagram.html)
- [Stellar structure equations](../../02_Zettel/Theory/Stellar structure equations.html)
- [Stellar evolution timescales](../../02_Zettel/Theory/Stellar evolution timescales.html)
- [Solar evolution and final stages](../../02_Zettel/Theory/Solar evolution and final stages.html)
- [Chemical evolution of galaxies](../../02_Zettel/Theory/Chemical evolution of galaxies.html)
