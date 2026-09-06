---
layout: default
title: "UV luminosity function"
---

the **UV luminosity function** $\phi(L_{UV})\,dL_{UV}\,dV$ measures the number density of galaxies as a function of UV luminosity. since UV light traces young, massive stars, $L_{UV}$ is a direct **SFR proxy** + the UV LF traces the **cosmic star-formation rate density** as a function of redshift.

## the connection to SFR

UV luminosity at $\sim 1500$ to $2800$ Å is dominated by young O/B stars. SFR calibration (Kennicutt 1998):
$$\text{SFR}/(M_\odot/\text{yr}) = 1.4 \times 10^{-28}\,L_{\nu, UV}/(\text{erg/s/Hz})$$

so each galaxy's $L_{UV}$ gives an estimate of its **current SFR** (averaged over $\sim 100$ Myr).

## the UV LF at different redshifts

at low $z$ ($z \sim 0$): $\phi^* \approx 5 \times 10^{-3}$ Mpc$^{-3}$, $M^*_{UV} \sim -19$, $\alpha \sim -1.2$. typical Schechter shape.

at high $z$: parameters evolve significantly:
- **$z = 4$**: $\phi^* \sim 1 \times 10^{-3}$, $M^*_{UV} \sim -21$, $\alpha \sim -1.7$.
- **$z = 6$**: $\phi^* \sim 5 \times 10^{-4}$, $M^*_{UV} \sim -20.5$, $\alpha \sim -1.9$.
- **$z = 8$**: $\phi^* \sim 1 \times 10^{-4}$, $M^*_{UV} \sim -20$, $\alpha \sim -2.0$ (steeper faint-end slope).
- **$z = 10+$**: deep JWST measurements, ongoing. surprisingly bright population at $z > 10$.

key features:
1. **$M^*_{UV}$ peaks** around $z \sim 2$ to $4$ (cosmic noon era).
2. **$\phi^*$ decreases** monotonically with $z$ (fewer galaxies in younger universe).
3. **$\alpha$ steepens** at high $z$ (more numerous faint galaxies relative to bright ones).

## the integral: cosmic UV luminosity density

integrating the LF over luminosity:
$$\rho_{UV}(z) = \int_0^\infty L\,\phi(L)\,dL$$

then converting to SFR density:
$$\rho_{SFR}(z) = 1.4\times 10^{-28}\,\rho_{UV, \nu}(z)$$

(with appropriate dust correction). the $\rho_{SFR}(z)$ vs $z$ is the **Madau-Dickinson plot**.

## dust correction

UV photons are heavily absorbed by dust, especially at moderate $z$. corrections:
- **IRX-β relation** (Meurer 1999): UV slope $\beta$ correlates with $L_{IR}/L_{UV}$, allowing dust correction without IR data.
- **direct IR/sub-mm**: combine UV + IR for total SFR.

at $z \sim 2$ (cosmic noon): $\sim 50\%$ of total SFR is dust-obscured. UV alone misses half.

## the deep-field measurement

UV LFs at high $z$ come from **deep-field surveys** (HUDF, GOODS, JADES) that detect galaxies as **Lyman-break galaxies (LBGs)**: identified via their dropout in the rest-frame UV continuum at the Lyman edge ($912$ Å).

at $z = 4$: drops out at $g$-band → "$g$-dropouts."
at $z = 5$: $r$-dropouts.
at $z = 6$: $i$-dropouts.
at $z > 7$: NIR + JWST drops.

## the science

UV LF + Madau plot tell us:
- **when did most stars form**: peaked at $z \sim 2$, declined since by factor $\sim 10$.
- **how fast did galaxies build up**: integrated SFR matches present-day stellar mass.
- **first galaxies**: depth + duration of pre-reionisation star formation.
- **reionisation budget**: total ionising-photon production at $z = 6$ to $10$ from UV LF + escape fraction.

## see also

- [Schechter function](../../02_Zettel/Theory/Schechter function.md)
- [Madau plot](../../02_Zettel/Theory/Madau plot.md)
- [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.md)
- [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.md)
- [Deep-field surveys](../../02_Zettel/Theory/Deep-field surveys.md)
- [SED fitting basics](../../02_Zettel/Theory/SED fitting basics.md)
- [High-z galaxies with JWST](../../02_Zettel/Theory/High-z galaxies with JWST.md)
- [Reionization](../../02_Zettel/Theory/Reionization.md)
- [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.md)
