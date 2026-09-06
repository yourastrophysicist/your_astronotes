---
layout: default
title: "Star formation history of a population"
---

the **star formation history (SFH)** of a stellar population is the rate $\psi(t)$ at which stars formed as a function of time. for a single galaxy, the integrated SED today is the sum of contributions from all generations weighted by $\psi(t)$. recovering $\psi(t)$ from observations is the central goal of population synthesis.

## the basic categories of SFH

### single stellar population (SSP)
all stars formed in a single burst:
$$\psi(t) = M_*\,\delta(t - t_b)$$
the simplest case, used as a building block for more general SFHs. evolves predictably with age (BC03, FSPS templates).

### constant SFR
$$\psi(t) = \text{const} = \dot M_*$$
appropriate for ongoing star-forming galaxies near steady state. predicts an SED with strong UV continuum from continuously replenished massive stars.

### exponentially declining ($\tau$ model)
$$\psi(t) = (M_*/\tau)\,e^{-t/\tau}$$
parameterised by an e-folding time $\tau$. captures a galaxy that gradually exhausts its gas.

### delayed-$\tau$ model
$$\psi(t) \propto t\,e^{-t/\tau}$$
peaks at $t = \tau$ then declines. better fit to observed galaxy SFHs (rises, peaks, declines).

### double-burst or multi-burst
two or more SSP components, useful for galaxies with episodic SF.

### non-parametric SFH
fit SFR in $\sim 10$ time bins independently, regularised toward smoothness. modern approach (Prospector, BAGPIPES, FAST). minimises model bias on galaxy properties.

## the inverse problem

given an observed SED, reconstruct $\psi(t)$. this is **degenerate** with:
- metallicity $Z$ (age-metallicity degeneracy).
- dust attenuation $A_V$ (dust-age degeneracy).
- IMF (assumed, usually Chabrier or Kroupa).

so SFH from broadband photometry alone is poorly constrained. spectra (especially Balmer break, CaII H+K, age-sensitive Lick indices) help break the degeneracies.

## the observable timescales

different bands probe different SFH timescales:
- **Lyman continuum** ($< 912$ Å): ionising photons, last $\sim 5$ Myr.
- **UV** ($1500$ to $3000$ Å): last $\sim 100$ Myr (O + B stars).
- **H$\alpha$**: ionising photons reprocessed, last $\sim 10$ Myr.
- **optical**: mixed, dominated by F-G stars from last $\sim 1$ Gyr.
- **NIR** ($\sim 1$ to $2\,\mu$m): integrated stellar mass, all star formation that ever happened.

so to constrain SFH on a $1$ Gyr timescale, you need data spanning UV to NIR. SED-fitting codes do this routinely.

## SFH and the cosmic SFH

individual galaxy SFHs combine into the **cosmic star formation history** (Madau-Dickinson plot):
$$\rho_{SFR}(z) \approx 0.015\,\frac{(1+z)^{2.7}}{1 + ((1+z)/2.9)^{5.6}}\,M_\odot/\text{yr/Mpc}^3$$
peaks at $z \sim 2$ (cosmic noon), declines toward both higher and lower $z$. see [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.md).

## the SFH-galaxy-type connection

- **late-type spirals**: roughly constant SFR, slowly declining.
- **starbursts**: brief intense burst (e.g. M82, ULIRGs).
- **post-starburst (E+A)**: recent burst followed by truncation.
- **early-type ellipticals**: ancient ($\tau \ll t_H$), short, intense burst long ago, then truncated. quenched.
- **green-valley galaxies**: in transition, SFR declining recently.

reading a galaxy's SFH tells you what kind of object it is and how it got there.

## see also

- [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.md)
- [Star formation history parametrizations](../../02_Zettel/Theory/Star formation history parametrizations.md) — alternative parametrisations
- [SFH from resolved CMDs](../../02_Zettel/Theory/SFH from resolved CMDs.md)
- [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.md)
- [SED fitting basics](../../02_Zettel/Theory/SED fitting basics.md)
- [Initial mass function](../../02_Zettel/Theory/Initial mass function.md)
- [Star formation rate and sSFR](../../02_Zettel/Theory/Star formation rate and sSFR.md)
- [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.md)
- [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.md)
- [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.md)
