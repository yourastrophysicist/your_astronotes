---
layout: default
title: "Equivalent width"
---

the **equivalent width** $W$ is a single-number summary of an absorption (or emission) line strength: the width of a rectangle with the same area as the line, measured against the local continuum.

## the definition

$$\boxed{\, W_\lambda = \int \left(1 - \frac{F_\lambda}{F_c}\right)\,d\lambda \,}$$

where $F_\lambda$ is the observed flux and $F_c$ is the local continuum. units: Å (or sometimes mÅ).

interpretation: if you took all the absorbed flux and concentrated it into a perfectly black, infinitely deep rectangular line, $W$ is the rectangle's width.

equivalent definition in frequency: $W_\nu = \int (1 - F_\nu/F_c) d\nu$, units of Hz.

## why it's useful

- **insensitive to spectral resolution**: a line resolved at $R = 1000$ vs $R = 100\,000$ has the same $W$, since the integrated absorbed flux is conserved.
- **cleanly compares lines**: line strengths from different instruments are directly comparable via $W$.
- **physical interpretation**: in the optically thin regime, $W \propto N \cdot f$ (column density × oscillator strength).

## the curve of growth

$W$ vs column density $N$ is the **curve of growth** (see [Curve of growth](../../02_Zettel/Theory/Curve of growth.html)). three regimes:

1. **linear** ($\tau_0 \ll 1$): $W \propto N$. line grows as you add absorbers; depth increases linearly. easy abundance work.
2. **saturation** ($\tau_0 \sim 1$): $W \propto \sqrt{\ln N}$. line core saturates near zero flux; further $N$ deepens the wings only slowly.
3. **damping** ($\tau_0 \gg 1$): $W \propto \sqrt{N}$. damping wings of the Lorentzian take over; line continues to grow but slowly.

practical: if $W$ is small ($< 50$ mÅ), the line is in linear regime, abundance from $W$ is reliable. if $W$ is large ($> 200$ mÅ), saturation, harder to extract $N$ without modelling.

## measuring $W$

practical issues:
- **continuum placement**: a $1\%$ error in continuum level becomes a $\sim 100$ mÅ error in $W$ for shallow lines. central source of error.
- **blends**: nearby lines contribute to the integral. fit and subtract neighbours.
- **rotational broadening**: distributes the absorbed flux, but doesn't change $W$.
- **macroturbulence**: same.
- **thermal broadening**: same.

since broadening only redistributes the absorbed flux without changing the integrated absorption, $W$ is **conserved** under broadening. a strict consequence of the integration.

## sample values

| line | star | $W$ (mÅ) |
|---|---|---|
| H$\alpha$ | F0 V | $\sim 1500$ |
| H$\alpha$ | G2 V (Sun) | $\sim 600$ |
| H$\alpha$ | M0 V | $\sim 400$ |
| Na D | M0 V | $\sim 6000$ |
| Mg I b | G2 V | $\sim 600$ |
| Ca II K | G2 V | $\sim 20\,000$ (very strong, wing-dominated) |

values vary by stellar type and metallicity. line lists like Moore 1972 or NIST tabulate solar $W$ values for thousands of lines.

## emission lines: negative $W$

for an emission line, $F_\lambda > F_c$, so the integrand is negative. by convention, $W$ for emission lines is reported as a positive number with a sign convention. typical: $W(H\alpha) \sim -50$ to $-1000$ Å for emission-line galaxies.

## see also

- [Line profile function phi nu](../../02_Zettel/Theory/Line profile function phi nu.html)
- [Absorption coefficient and oscillator strength](../../02_Zettel/Theory/Absorption coefficient and oscillator strength.html)
- [Curve of growth](../../02_Zettel/Theory/Curve of growth.html)
- [Optical depth](../../02_Zettel/Theory/Optical depth.html)
- [Voigt profile](../../02_Zettel/Theory/Voigt profile.html)
- [Damping wings](../../02_Zettel/Theory/Damping wings.html)
- [Curve of growth abundance analysis](../../02_Zettel/Theory/Curve of growth abundance analysis.html)
