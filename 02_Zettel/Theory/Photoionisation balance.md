---
layout: default
title: "Photoionisation balance"
---

the steady-state ionisation fraction of an element in a photoionised gas is set by **balance** between photoionisations (and possibly collisional ionisations) entering an ionisation stage and recombinations leaving it. central to nebular astrophysics.

## the equilibrium

for a single species $X$ with photoionisation rate $\Gamma$, recombination coefficient $\alpha$, and (often negligible) collisional ionisation rate $C$:
$$n_X^i\,\Gamma_i + n_X^i\,n_e\,C_i = n_X^{i+1}\,n_e\,\alpha_i$$

(rate of leaving stage $i$ = rate of entering stage $i$ from $i+1$).

ignoring $C$ (typical for HII regions at $T_e = 10^4$ K, far below the ionisation temperature):
$$\boxed{\, \frac{n_X^{i+1}}{n_X^i} = \frac{\Gamma_i}{n_e\,\alpha_i(T_e)} \,}$$

## qualitative features

- **high $\Gamma$**: more ionising photons, more atoms are ionised. ratio $\to$ high.
- **high $n_e$**: more recombinations, fewer atoms in the higher ionisation stage. ratio $\to$ low.
- **high $T_e$**: $\alpha$ decreases (slower electrons recombine more efficiently inverse), so ratio shifts toward higher ionisation.

so a **hotter, lower-density, well-illuminated** gas has higher ionisation. specifically:
$$\frac{n_X^{i+1}}{n_X^i} \propto \frac{\Gamma_i}{n_e}$$
the **ionisation parameter** $U \propto \Gamma/n_e$ controls the balance.

## the canonical HII region

for hydrogen at the centre of a Strömgren sphere around an O5 star ($Q_{H,\rm ion} \sim 10^{49}$ s$^{-1}$, $r \sim 1$ pc, $n_H \sim 100$ cm$^{-3}$):
- $\Gamma \sim 10^{-2}$ s$^{-1}$.
- recombination rate $\sim n_e \alpha \sim 10^2 \cdot 2.6 \times 10^{-13} \sim 3 \times 10^{-11}$ s$^{-1}$.

so $\Gamma / (n_e \alpha) \sim 10^9$, hugely in favour of ionisation. **only about 1 part in $10^9$ of hydrogen is neutral** in the bulk of the HII region. it's a fully ionised plasma except at the boundary.

## ionisation fronts

at the **boundary** of the Strömgren sphere, $\Gamma$ drops as the photon flux is consumed by recombinations interior. quantitatively, $\Gamma$ falls to zero at $r = R_S$ (Strömgren radius). the ionisation transitions from $\sim 100\%$ to $\sim 0\%$ over a thin shell:
$$\Delta r/R_S \sim 1/(n_H \sigma_{\rm bound-free} R_S)$$

very narrow ($\sim 10^{-3} R_S$), giving the **sharp Strömgren boundary**.

## ionisation stratification

in any extended ionised gas, **higher-ionisation species sit closer to the source**, **lower-ionisation species sit further out**. example for HII regions:
- **He III** (innermost): only where photons of $h\nu > 54.4$ eV can reach.
- **He II / O III / Ne III**: ionisation potentials $\sim 24$ to $35$ eV.
- **O II / N II / S III**: ionisation potentials $\sim 13$ to $20$ eV.
- **O I / S II / N I** at the boundary, where photons run out.

this is the **ionisation stratification** ([Ionisation stratification](../../02_Zettel/Theory/Ionisation stratification.md)).

## photoionisation codes

modern photoionisation codes (Cloudy, MAPPINGS V, MOCASSIN) solve the full ionisation balance for $\sim 30$ elements, $\sim 10$ ionisation stages each, plus thermal balance, line emission, dust, all self-consistently. the gold standard for nebular modelling.

## see also

- [Photoionization rate](../../02_Zettel/Theory/Photoionization rate.md)
- [Recombination rate](../../02_Zettel/Theory/Recombination rate.md)
- [Collisional ionisation rate](../../02_Zettel/Theory/Collisional ionisation rate.md)
- [Ionisation parameter U](../../02_Zettel/Theory/Ionisation parameter U.md)
- Strömgren sphere
- [Ionisation stratification](../../02_Zettel/Theory/Ionisation stratification.md)
- [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.md) — LTE analogue
