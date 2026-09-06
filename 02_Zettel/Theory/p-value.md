---
layout: default
title: "p-value"
---

Best-fit parameters and error bars are often insufficient to test a hypothesis
	an additional tool is the **p-value** (probability value)
		used to understand whether the hypotheses are correct or not
<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2002.14.05.png" | relative_url }}" alt="Screenshot 2026-04-07 at 02.14.05" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
---

## Definition

The p-value is the **area under the distribution** integrated
	from a particular observed value to the end of the domain:
$$p(\mathbb{S}) = \int_{\mathbb{S} > \mathbb{S}_c} f(\mathbb{S})~d\mathbb{S}$$

where $\mathbb{S}_c$ is a **critical value**

In other words:
	the p-value is the **probability that a random fluctuation**
		produces an observed value $\mathbb{S} > \mathbb{S}_c$

For a normalized Gaussian:
	between $+1\sigma$ and $+\infty$: $p = 0.16$ (16%)
	between $+3\sigma$ and $+\infty$: $p = 0.003$ (0.3%)

---

## Null hypothesis

The p-value is always interpreted in relation to the **null hypothesis** $H_0$
	$H_0$ is the default distribution:
		the one for which we observe **no significant difference**
			between a hypothesized value and its value estimated from a sample

$H_1$ is the **alternative model** to be tested

Examples:
	testing if a coin is biased:
		$H_0$ = binomial distribution with equal probability for heads and tails
	testing if a source is variable:
		$H_0$ = constant signal (no variability)

---

## Hypothesis test — step by step

**Step 1**: define a statistics $\mathbb{S}$ to describe both the model and the data
	(e.g. $\chi^2$ distribution, Cstat)

**Step 2**: construct the null distribution $f_0(\mathbb{S})$
	that is, the expected distribution of $\mathbb{S}$ if $H_0$ is true

**Step 3**: set a $p_{threshold}$ **before** the analysis
	this corresponds to a critical value $\mathbb{S}_c$
		statisticians use $p = 0.05$
		astronomers prefer $p = 0.003$

**Step 4**: calculate $\mathbb{S}'$ assuming the alternative model $H_1$
	and compare it to $\mathbb{S}_c$:

	if $\mathbb{S}' > \mathbb{S}_c$:
		$p < p_{threshold}$
			$H_1$ is preferred over $H_0$ at significance $p_{threshold}$
				**the null hypothesis is rejected**

	if $\mathbb{S}' < \mathbb{S}_c$:
		there is **no evidence** to prefer $H_1$ over $H_0$
			we **cannot** conclude that $H_0$ is true

---

## Critical warning

$\mathbb{S}' > \mathbb{S}_c$ does **not** mean $H_1$ is true
$\mathbb{S}' < \mathbb{S}_c$ does **not** mean $H_0$ is true

The null hypothesis test can **only reject** $H_0$
	that is: $\mathbb{S}'$ is unlikely to have originated from the null distribution
		it says nothing about whether $H_1$ is the correct model
