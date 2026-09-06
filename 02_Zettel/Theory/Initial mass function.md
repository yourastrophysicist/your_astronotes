---
layout: default
title: "Initial mass function"
---

# initial mass function

up: [Pablo_03_Star_formation_in_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html)

## definition

the IMF is the distribution of stellar masses at the moment of formation of a stellar generation:

$$\xi(M)\,dM = \text{number of stars formed with mass in } [M, M+dM]$$

normalized so that $\int_{M_{\min}}^{M_{\max}} M\, \xi(M)\, dM = M_{\text{total}}$ over some mass range, typically $0.1$–$100\,M_\odot$.

the IMF is an input, not an observable. we never catch a cluster in the act of forming stars across its whole mass range. instead we infer $\xi(M)$ from present-day mass functions corrected for stellar evolution, or from direct counts in nearby young clusters.

## the three canonical forms

### Salpeter 1955 (power law)
$$\xi(M) \propto M^{-\alpha},\quad \alpha = 2.35$$
the original. fit from solar-neighborhood field stars in the range $0.4 < M/M_\odot < 10$. extrapolated above and below with no physical basis but still widely used as a reference.

### Kroupa 2001 (broken power law)
$$\xi(M) \propto \begin{cases} M^{-0.3} & 0.01 < M/M_\odot < 0.08 \\ M^{-1.3} & 0.08 < M/M_\odot < 0.5 \\ M^{-2.3} & M/M_\odot > 0.5 \end{cases}$$
fewer low-mass stars than Salpeter, fit across Milky Way disk populations. gives Salpeter at the high-mass end.

### Chabrier 2003 (log-normal + power law)
low mass: log-normal distribution peaked at $\sim 0.2\,M_\odot$, with dispersion $\sim 0.55$ in $\log M$
high mass ($M > 1\,M_\odot$): Salpeter power law

currently the de-facto standard in SED fitting codes and in cosmological simulations.

## why the choice matters

different IMFs give different $M_*/L$ for the same stellar population:

- Salpeter has more low-mass stars → larger $M_*/L$
- Chabrier → smaller $M_*/L$ by $\sim 0.25$ dex (a factor $\sim 1.8$) relative to Salpeter for the same luminosity

and different $L_{\text{ionizing}}/M$ for the same SFR:

- a top-heavy IMF (extra O stars) → more ionizing photons per $M_\odot$ formed → smaller inferred SFR for the same Hα

so every stellar-mass and every SFR in the literature is **IMF-dependent**. reading papers, i always check: "what IMF did they assume?"

## does the IMF vary?

standard practice is to assume universal IMF across galaxies and cosmic time, because that is the simplest hypothesis consistent with most data. but there are claims of:

- top-heavy IMF in starbursts and low-metallicity systems (Meurer, Habergham, Marks)
- bottom-heavy IMF in massive ellipticals (van Dokkum & Conroy 2010, Cappellari 2012): dynamical mass > stellar mass from Chabrier
- Population III: first stars formed from pristine gas had no metal cooling channel; models predict $M_\text{char} \sim 100\,M_\odot$, essentially top-heavy

these are all contested and IMF universality vs variation is an open topic.

## a number to remember

for a Salpeter IMF over $[0.1, 100]\,M_\odot$, the ionizing photon rate per unit mass formed (at young ages) is:

$$Q(\text{H I}) \simeq 9 \times 10^{46}\,\text{photons/s per } M_\odot/\text{yr}$$

this plugs directly into the Hα calibration (see [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.html)).

## connections

- enters all tracer calibrations: [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.html), [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.html), [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.html)
- needed for mass estimates: [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.html)
- needed for chemical yields: [Chemical evolution of galaxies](../../02_Zettel/Theory/Chemical evolution of galaxies.html)
- SSP ingredients: [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.html)

## key references

- Salpeter 1955, ApJ 121, 161 (the original)
- Kroupa 2001 MNRAS 322, 231
- Chabrier 2003 PASP 115, 763
- Bastian, Covey, Meyer 2010 ARAA (IMF variations review)
