---
layout: "default"
title: "Frequentist confidence intervals versus Bayesian credible regions"
---
# Frequentist confidence intervals versus Bayesian credible regions

The distinction between a frequentist confidence interval and a Bayesian credible interval is among the most consequential conceptual divides in observational astrophysics, separating long-run sampling performance from conditioning on observed data.

## Frequentist Confidence Intervals (Neyman 1937)

A frequentist treats the physical parameter $\theta_{\rm true}$ as a fixed, non-random constant. Randomness resides entirely in the data $D$ generated across hypothetical repetitions of the experiment.

A $1-\alpha$ confidence interval $[L(D), U(D)]$ is a random interval constructed such that across infinite identical repetitions of the experiment, it traps the fixed parameter $\theta_{\rm true}$ with probability $1-\alpha$:
$$P\left( L(D) \le \theta_{\rm true} \le U(D) \,\middle\mid\, \theta_{\rm true} \right) = 1 - \alpha$$

### Critical Nuance
Once a specific dataset $D_0$ has been measured and the numerical interval $[L(D_0), U(D_0)]$ is computed, the probability that $\theta_{\rm true}$ lies within that fixed interval is either 0 or 1, not $1-\alpha$. Stating "there is a 95% probability that the parameter is in this interval" is a formal error in frequentist theory.

## Bayesian Credible Intervals

A Bayesian conditions directly on the actual observed dataset $D_0$ and treats degree of belief regarding parameter $\theta$ as a probability distribution $p(\theta \mid D_0, I)$.

A $1-\alpha$ credible interval $[a, b]$ satisfies:
$$P\left( a \le \theta \le b \,\middle \mid \, D_0, I \right) = \int_a^b p(\theta \mid D_0, I) \, d\theta = 1 - \alpha$$

The Bayesian statement is direct: "Given the data observed and prior knowledge $I$, the probability that the true parameter lies between $a$ and $b$ is 95%."

### Interval Ambiguity and Optimal Choices
Because infinitely many intervals integrate to $1-\alpha$, two canonical choices exist:
1. **Equal-tailed credible interval**: Cuts $\alpha/2$ from both the lower and upper tails of the posterior.
2. **Highest Posterior Density (HPD) region**: The set of points where the posterior density exceeds a threshold, $\{\theta : p(\theta \mid D_0) \ge \gamma\}$, ensuring the shortest possible interval for unimodal posteriors and naturally handling multimodality.

## The Stopping Rule Paradox

Frequentist inference violates the Likelihood Principle by conditioning on unobserved counterfactual data in the sample space.

Consider observing $k = 3$ heads in $n = 12$ coin tosses:
1. **Binomial sampling plan** (fixed $n=12$, random $k$):
$$p(k \mid n, \theta) = \binom{n}{k} \theta^k (1-\theta)^{n-k}$$
2. **Negative binomial sampling plan** (fixed $k=3$, random $n$ until 3 heads occur):
$$p(n \mid k, \theta) = \binom{n-1}{k-1} \theta^k (1-\theta)^{n-k}$$

Both experiments yield identical likelihood functions up to an irrelevant constant:
$$L(\theta) \propto \theta^3 (1-\theta)^9$$

- **Bayesian result**: The posterior $p(\theta \mid D) \propto L(\theta)p(\theta)$ is identical regardless of the experimenter's stopping intentions.
- **Frequentist result**: The p-values and confidence intervals differ because the tail areas sum over different unobserved experimental outcomes, yielding different conclusions from identical observed data.

## See Also
- [[Astro-Statistics_and_Cosmology_MOC]]
- [[04_Frequentist_vs_Bayesian_Inference_and_Confidence_Intervals]]
- [[Cox theorem and probability as extended logic]]
- [[Lindley paradox in statistical hypothesis testing]]



## Linked References

- [[Bernstein-von Mises theorem and Bayesian asymptotics]]
- [[Cox theorem and probability as extended logic]]
- [[Astro-Statistics_and_Cosmology_MOC]]


