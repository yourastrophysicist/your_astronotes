---
layout: default
title: "Rydberg-Ritz formula"
---

the **Rydberg-Ritz formula** gives the energy difference (and hence the photon wavelength) between two levels of a hydrogenic atom, characterised only by their principal quantum numbers.

## the formula

$$\boxed{\, \Delta E_{nm} = R_H\!\left(\frac{1}{n^2} - \frac{1}{m^2}\right) \,}$$

with $m > n$ (so $\Delta E > 0$, energy of an absorbed photon). $R_H$ is the **Rydberg constant** for hydrogen:
$$R_H = 13.6056923\,\text{eV} = 911.267\,\text{Å}^{-1} = 3.29 \times 10^{15}\,\text{Hz}$$

## the wavelength version

$$\frac{1}{\lambda_{nm}} = \frac{R_H}{hc}\!\left(\frac{1}{n^2} - \frac{1}{m^2}\right)$$

equivalently, $\lambda$(Å) $= 12398.42 / \Delta E$(eV) for any $\Delta E$.

## hydrogenic ions ($Z$ generalisation)

for an ion with $Z$ protons and one electron (He$^+$, Li$^{2+}$, ...):
$$\Delta E_{nm}(Z) = R_H Z^2\!\left(\frac{1}{n^2} - \frac{1}{m^2}\right)$$

so He$^+$ has the same series structure as H but at $4\times$ the energy. He II Pickering series $n = 4 \to m \ge 5$ is at optical wavelengths because of this.

## hydrogen series (most-cited)

with $n$ as the lower level:

| $n$ | series | range | examples |
|---|---|---|---|
| 1 | Lyman | UV | Ly$\alpha\,1216$ Å, Ly$\beta\,1026$ Å, Lyman edge $912$ Å |
| 2 | Balmer | optical | H$\alpha\,6563$, H$\beta\,4861$, H$\gamma\,4340$, H$\delta\,4101$, Balmer edge $3646$ Å |
| 3 | Paschen | NIR | Pa$\alpha\,18\,751$, Pa$\beta\,12\,818$, Paschen edge $8203$ Å |
| 4 | Brackett | NIR | Br$\alpha\,40\,522$, Br$\gamma\,21\,661$, Brackett edge $14\,580$ Å |

higher series (Pfund, Humphreys, ...) extend to the radio, used for radio recombination lines (RRLs) of HII regions and AGN narrow-line regions.

## why the formula works

quantum mechanically, the energies of hydrogenic states are
$$E_n = -\frac{R_H Z^2}{n^2}$$
all states with the same $n$ are degenerate (Coulomb degeneracy, removed only by relativistic and QED effects). so any transition $n \to m$ has $\Delta E = E_m - E_n$ as written. all $\ell$ sublevels contribute to a given series line.

(in practice for H, fine-structure splitting is $\sim 10^{-4}$ eV, so $H\alpha$ at $6563$ Å is actually a multiplet at high resolution, but at $R = 100$ to $10\,000$ it appears as a single line.)

## astronomical relevance

- **measuring redshift**: identifying a Balmer series in a galaxy spectrum gives $z$ to many decimal places via $z = \lambda_{\rm obs}/\lambda_{\rm rest} - 1$.
- **stellar spectral typing**: Balmer line strengths trace temperature directly via Boltzmann + Saha (peaks at A0).
- **HII region diagnostics**: Balmer + higher series in emission, fluxes give SFR ([H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.html)) and dust ([Balmer decrement](../../02_Zettel/Theory/Balmer decrement.html)).
- **He II $\lambda 4686$**: hydrogenic He$^+$ Brackett line at optical, signature of very hot ionising sources (O stars, WN stars, AGN).
- **radio recombination lines** (RRLs): high-$n$ transitions, e.g. H$110\alpha$ at $\sim 5$ GHz, used by ALMA / VLA to probe HII region kinematics.

## see also

- [Hydrogen spectral series](../../02_Zettel/Theory/Hydrogen spectral series.html)
- Energy level diagrams Grötrian
- [Helium energy levels](../../02_Zettel/Theory/Helium energy levels.html)
- [Selection rules](../../02_Zettel/Theory/Selection rules.html)
- [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.html)
- [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.html)
- [Optically thin recombination lines](../../02_Zettel/Theory/Optically thin recombination lines.html)
- [Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.html) — Lyman recombination at cosmological scale
