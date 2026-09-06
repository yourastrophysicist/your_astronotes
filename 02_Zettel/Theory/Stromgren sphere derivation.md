---
layout: default
title: "Stromgren sphere derivation"
---

a step-by-step derivation of the Strömgren radius. a frequent oral question.

## the assumptions

1. **uniform density** $n_H$ in the gas around the star.
2. **steady state**: photon arrival rate balances recombination rate inside the sphere.
3. **fully ionised interior**: $n_e \approx n_p \approx n_H$ throughout the HII region. (good approximation, $\sim 10^{-9}$ neutral fraction in the bulk.)
4. **Case B recombination**: cascade through Balmer + higher series; direct-to-ground recombinations re-ionise nearby atoms and so don't reduce the photon budget.
5. **sharp boundary**: ionisation transitions from $\sim 100\%$ to $\sim 0\%$ over a thin shell, so the geometry is a discrete sphere.

## the photon budget

ionising photon rate from the star:
$$Q_{\rm H,\,ion} = \int_{\nu_{\rm H}}^\infty L_\nu/(h\nu)\,d\nu$$

with $\nu_{\rm H} = 13.6\,\text{eV}/h$. typical:
- O3: $Q \sim 10^{50}$ s$^{-1}$.
- O5: $Q \sim 10^{49}$ s$^{-1}$.
- O8: $Q \sim 10^{48}$ s$^{-1}$.
- B0: $Q \sim 10^{47}$ s$^{-1}$.
- B5: $Q \sim 10^{45}$ s$^{-1}$. essentially no HII region for stars later than B5.

## the recombination total in the sphere

inside the sphere, recombinations happen at rate per unit volume $n_e n_p \alpha_B(T_e)$. integrate over the sphere of radius $R_S$:
$$\dot N_{\rm rec} = \int_0^{R_S} n_e n_p \alpha_B \cdot 4\pi r^2\,dr = (4/3)\pi R_S^3 \cdot n_H^2 \alpha_B$$

(using uniform density; $\alpha_B$ also assumed constant since $T_e$ is roughly uniform.)

## balance: Strömgren equation

equating photon arrival to recombinations:
$$Q_{\rm H,\,ion} = (4/3)\pi R_S^3\,n_H^2 \alpha_B$$

solve for $R_S$:
$$\boxed{\, R_S = \left(\frac{3 Q_{\rm H,\,ion}}{4\pi n_H^2 \alpha_B}\right)^{1/3} \,}$$

## numerical evaluation

at $T_e = 10^4$ K, $\alpha_B = 2.6 \times 10^{-13}$ cm$^3$ s$^{-1}$. for an O5 star ($Q = 10^{49}$ s$^{-1}$) in a cloud at $n_H = 100$ cm$^{-3}$:
$$R_S = \left(\frac{3 \cdot 10^{49}}{4\pi \cdot 10^4 \cdot 2.6 \times 10^{-13}}\right)^{1/3}$$
$= (9.2 \times 10^{55})^{1/3}\,\text{cm}$
$\approx 4.5 \times 10^{18}\,\text{cm}$
$\approx 1.5\,\text{pc}$.

so $R_S \sim 1$ pc for typical HII region conditions.

## scaling laws

$R_S \propto Q^{1/3}\,n_H^{-2/3}$.

so:
- doubling $Q$ multiplies $R_S$ by $2^{1/3} \approx 1.26$. modest.
- doubling $n_H$ shrinks $R_S$ by $2^{2/3} \approx 1.59$. more sensitive to density.

so HII regions shrink in dense clouds and grow when ambient density is low.

## the $T_e$ correction

$\alpha_B \propto T_e^{-0.7}$, so $R_S \propto T_e^{0.23}$. weakly $T$-dependent. at $T_e = 1.5 \times 10^4$ K, $R_S$ is $\sim 10\%$ larger than at $10^4$ K.

## limitations

- **non-uniform density**: real ISM is clumpy. mass-weighted volume gives a "filling factor" correction; observed HII regions have effective filling factors $\sim 0.01$ to $0.1$.
- **non-spherical geometry**: stellar cluster, blister regions, density gradient.
- **dust absorption**: dust competes with H for ionising photons, reducing effective $Q$ by $\sim 30$ to $50\%$ in dense regions.

modern photoionisation codes (Cloudy) include all these effects; the analytic Strömgren radius is the zeroth-order estimate.

## see also

- Strömgren sphere
- [Photoionisation balance](../../02_Zettel/Theory/Photoionisation balance.html)
- [Recombination rate](../../02_Zettel/Theory/Recombination rate.html)
- [Photoionization rate](../../02_Zettel/Theory/Photoionization rate.html)
- [Case A vs Case B recombination](../../02_Zettel/Theory/Case A vs Case B recombination.html)
- [Ionisation parameter U](../../02_Zettel/Theory/Ionisation parameter U.html)
- [H II region spectroscopy](../../02_Zettel/Theory/H II region spectroscopy.html)
