---
layout: "default"
title: "Cox theorem and probability as extended logic"
---
# Cox theorem and probability as extended logic

Richard T. Cox (1946) established that probability theory is the unique mathematical extension of Aristotelian deductive logic to conditions of uncertainty. Rather than defining probability as the empirical frequency of events in repeated trials (which breaks down for non-repeatable systems such as our single cosmological realization), Cox formulated the problem constructively from three epistemological desiderata:

1. **Divisibility and comparability**: Degrees of plausibility are represented by real numbers, meaning if $A$ is more plausible than $B$, and $B$ is more plausible than $C$, then $A$ is more plausible than $C$.
2. **Qualitative correspondence with common sense**: If updated evidence increases the plausibility of proposition $A$, the plausibility of its negation $\neg A$ must decrease monotonically.
3. **Consistency**:
   - If a conclusion can be arrived at through multiple valid paths, every path must yield the same numerical plausibility.
   - All relevant background information $I$ must be explicitly conditioned upon: two states of plausibility are identical if and only if their supporting propositions are logically equivalent.

## Derivation of Product and Sum Rules

Let $AB$ denote the logical conjunction ($A \text{ and } B$). The plausibility of $AB$ given background information $I$, written $(AB\midI)$, must depend on $(B\midI)$ and the plausibility of $A$ given that $B$ is true, $(A\midBI)$:
$$(AB\lvert I) = F[(A\rvertBI), (B\midI)]$$

By associativity of conjunction, $A(BC) = (AB)C$, the functional equation for $F$ satisfies:
$$F[F(x, y), z] = F[x, F(y, z)]$$

Cox proved that the only continuous, strictly monotonic solution to this functional associativity equation is isomorphic to multiplication:
$$w(AB\lvert I) = w(A\rvertBI) w(B\midI)$$
where $w$ is a positive, continuous, strictly monotonic rescaling of plausibility.

Applying consistency to negation $\neg A$, where the plausibility of $\neg A$ is a function $S(w(A\midI))$, leads to the complementary sum rule:
$$w^m(A\lvert I) + w^m(\neg A\rvertI) = 1$$

Setting the arbitrary exponent $m = 1$ establishes standard Kolmogorov normalization without invoking set-theoretic measure theory:
$$P(AB \mid I) = P(A \mid BI) P(B \mid I)$$
$$P(A \mid I) + P(\neg A \mid I) = 1$$

## Bayes' Theorem as a Mathematical Identity

Commutativity of logical conjunction ($AB = BA$) implies $P(AB \mid I) = P(BA \mid I)$. Equating the two product rule expansions:
$$P(A \mid BI) P(B \mid I) = P(B \mid AI) P(A \mid I)$$

Isolating the conditional probability $P(A \mid BI)$ yields Bayes' theorem:
$$P(A \mid BI) = \frac{P(B \mid AI) P(A \mid I)}{P(B \mid I)}$$

In observational astrophysics, identifying $A$ with a physical hypothesis or parameter vector $\theta$ and $B$ with observed data $D$ transforms deductive reasoning into optimal Bayesian inference:
$$P(\theta \mid D, I) = \frac{P(D \mid \theta, I) P(\theta \mid I)}{P(D \mid I)}$$

## See Also
- [Astro-Statistics_and_Cosmology_MOC](../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)
- [01_Plausible_Reasoning_Cox_Theorem_and_Bayesian_Foundations](../../02_Literature/Lectures/Astrostatistics/01_Plausible_Reasoning_Cox_Theorem_and_Bayesian_Foundations.html)
- [Maximum likelihood versus maximum a posteriori estimation](Maximum%20likelihood%20versus%20maximum%20a%20posteriori%20estimation.html)
- [Frequentist confidence intervals versus Bayesian credible regions](Frequentist%20confidence%20intervals%20versus%20Bayesian%20credible%20regions.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Frequentist%20confidence%20intervals%20versus%20Bayesian%20credible%20regions.html" class="backlink-item">Frequentist confidence intervals versus Bayesian credible regions</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
  </ul>
</div>

