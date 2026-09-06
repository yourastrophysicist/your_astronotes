---
layout: default
title: "Old vs new vs chaotic inflation, slow-roll"
---

a chronological tour of the major inflation models, ending in the modern slow-roll picture. each model attempts to provide a working scalar field and potential that gives ~60 e-folds of inflation followed by graceful exit.

---

## old inflation (Guth 1981)

Alan Guth's original proposal: a scalar field trapped in a **false vacuum** decays via quantum tunneling to the true vacuum. during the false-vacuum phase, the energy density is constant and drives exponential expansion.

problem: tunneling produces **bubbles** of true vacuum, which then need to collide and merge to fill space. but in an exponentially expanding universe, bubbles cannot catch up with each other. you end up with isolated "bubble universes" instead of a smooth post-inflation universe.

→ **graceful exit problem**. old inflation is dead.

---

## new inflation (Linde, Albrecht-Steinhardt 1982)

instead of trapping the field in a false vacuum, take a potential with a **flat plateau** near the origin. the field rolls slowly across the plateau, then drops down a steep slope to the minimum.

during the slow plateau phase: $\dot\phi^2 \ll V$, $w \approx -1$, exponential expansion. when the field reaches the slope, inflation ends.

problem: requires a very flat plateau to last 60 e-folds, and the field has to start at exactly the right place at the top of the plateau (initial conditions).

improved over old inflation, but still required fine-tuning.

---

## chaotic inflation (Linde 1983)

Linde's elegant fix. take a simple potential like $V(\phi) = \tfrac{1}{2}m^2\phi^2$ or $\tfrac{1}{4}\lambda\phi^4$. inflation happens *anywhere on this potential* where the field is far from the origin, $\phi \gg M_{\rm Pl}$. the field then slowly rolls down the potential, with Hubble friction sustaining slow-roll for ~60 e-folds.

key insight: in any reasonable region of the universe, the field starts at a random ("chaotic") value. some regions have $\phi$ large enough to drive inflation. those regions inflate; the rest don't matter (we live in one of the inflated patches).

→ **no fine-tuning of initial conditions**, just a generic chaotic field configuration in the early universe.

problem: requires *trans-Planckian* field values $\phi \gg M_{\rm Pl}$, which is questionable from a particle physics standpoint (effective field theory might break down there).

---

## slow-roll inflation (modern picture)

the broad framework that includes new and chaotic inflation as special cases. require:
- $\epsilon \equiv (M_{\rm Pl}^2/2)(V'/V)^2 \ll 1$
- $|\eta| \equiv M_{\rm Pl}^2 |V''/V| \ll 1$

(see [Inflaton scalar field dynamics](../../02_Zettel/Theory/Inflaton scalar field dynamics.md).)

these are the **slow-roll parameters**. as long as both are small, the field rolls slowly down the potential, and inflation proceeds.

→ exit happens when $\epsilon = 1$.

modern inflation models generally fit into this framework. examples:
- **$R^2$ inflation** (Starobinsky 1980): inflation driven by quadratic curvature corrections to gravity. predicts $n_s \approx 0.96$ and small $r$.
- **plateau models** (e.g. Higgs inflation, $\alpha$-attractors): potential has a plateau at large $\phi$, naturally giving small $\epsilon$, $\eta$.
- **monomial chaotic** ($\phi^2$, $\phi^4$): simple but predict $r \gtrsim 0.1$, now ruled out.
- **natural inflation**: $V \propto 1 - \cos(\phi/f)$, axion-like.

---

## what observations say in 2025

CMB measurements give:
$$n_s = 0.965 \pm 0.004, \qquad r < 0.06$$

these values are consistent with slow-roll inflation, *and they are very picky*:
- single-field, slow-roll, plateau-type models (Starobinsky, $\alpha$-attractors) sit right where the data say
- monomial $\phi^2$ chaotic inflation: ruled out
- monomial $\phi^4$: ruled out
- many natural inflation variants: marginal

so from "any model works" in the early days, we now have a **narrow band** of inflation models that agree with the data. a future detection of $r$ at the $\sim 10^{-3}$ level (LiteBIRD, CMB-S4) will narrow it further.

---

## what's still open

- **what the inflaton actually is** (a new field? the SM Higgs? an axion? a curvature mode?)
- **what came before inflation** (the boundary problem, eternal inflation)
- **the multiverse** question: is inflation eternal, with infinitely many post-inflation universes?
- **the trans-Planckian problem**: do effective field theory descriptions break down at large $\phi$?

these are all open questions. but the basic framework — slow-roll inflation by a scalar field — is the working hypothesis.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md)
- [Inflation overview](../../02_Zettel/Theory/Inflation overview.md)
- [Inflaton scalar field dynamics](../../02_Zettel/Theory/Inflaton scalar field dynamics.md)
- [Standard model problems](../../02_Zettel/Theory/Standard model problems.md)
- [Baumann_reference](../../02_Zettel/Theory/Baumann_reference.md) — chapter 2 has the modern derivation
