---
layout: default
title: "Stromgren sphere"
---

an **HII region** around a single ionising source has a **sharp boundary**: inside, hydrogen is fully ionised; outside, fully neutral. the radius of the boundary, set by photon-recombination balance, is the **Strömgren radius**.

## the canonical setup

a hot star emits $Q_{\rm H,\,ion}$ ionising photons per second ($h\nu > 13.6$ eV). these stream into a uniform-density H gas (number density $n_H$, $T_e$). the ionising photons are absorbed in the gas, ionising H. the ionised gas recombines back, but as long as $\Gamma > $ recombination rate, gas stays ionised.

the **Strömgren sphere** is the volume in which all ionising photons are consumed by recombinations:
$$Q_{\rm H,\,ion} = \int n_e n_p \alpha_B\,dV \approx (4\pi R_S^3/3)\,n_H^2 \alpha_B$$

(approximating $n_e \approx n_p \approx n_H$ in the fully ionised interior; using Case-B since ionisation cascades repopulate ground state without producing extra ionising photons).

## the Strömgren radius

$$\boxed{\, R_S = \left(\frac{3 Q_{\rm H,\,ion}}{4\pi\,n_H^2\,\alpha_B}\right)^{1/3} \,}$$

scaling: $R_S \propto Q^{1/3} n_H^{-2/3}$.

example: O5 V star, $Q = 10^{49}$ s$^{-1}$, $n_H = 100$ cm$^{-3}$, $\alpha_B = 2.6 \times 10^{-13}$ cm$^3$ s$^{-1}$:
$$R_S = \left(\frac{3 \cdot 10^{49}}{4\pi \cdot 10^4 \cdot 2.6 \times 10^{-13}}\right)^{1/3}\,\text{cm} \approx 3 \times 10^{18}\,\text{cm} \approx 1\,\text{pc}$$

so a typical HII region around an O5 star is $\sim 1$ pc in radius. Orion Nebula (O7) is similar scale.

## the sharp boundary

the transition from ionised to neutral is geometrically thin because each atom near the boundary has a high probability ($\sim 1$) of absorbing a photon within a few atomic mean free paths. quantitatively, $\Delta r/R_S \sim (n_H \sigma_{\rm bf} R_S)^{-1}$, which is $\sim 10^{-3}$ for typical conditions.

so the **ionisation front** is a sharp transition layer, $\sim$ several mean free paths thick.

## helium and metals

the Strömgren analysis assumes hydrogen-only. real gas has He and metals:
- **He I** ionises at $24.6$ eV: helium is ionised in the inner $\sim 90\%$ of the H sphere if the source is hot enough (O3-O5).
- **He II** ionises at $54.4$ eV: only the very hottest stars (O3, WR) produce He$^{2+}$ regions.
- metal ions are stratified by their ionisation potentials.

so the structure has nested ionisation regions, with stratification by $U$ ([Ionisation stratification](../../02_Zettel/Theory/Ionisation stratification.md)).

## time-dependent expansion

initially, when the star turns on, the Strömgren sphere expands until reaching $R_S$. the expansion timescale is:
$$t_{\rm S} \sim 1/(\alpha_B n_H) \sim 10^4\,\text{yr}$$
for typical density. fast compared to stellar lifetime; HII regions are essentially in steady state.

after reaching $R_S$, the over-pressured ionised gas (factor $\sim 200\times$ pressure of the surrounding cold ISM, since $T$ jumps from $100$ K to $10^4$ K) drives an expansion shock outward, ploughing up neutral gas. eventually the HII region merges with the diffuse ionised gas of the galaxy.

## see also

- Strömgren sphere derivation
- [Photoionisation balance](../../02_Zettel/Theory/Photoionisation balance.md)
- [Recombination rate](../../02_Zettel/Theory/Recombination rate.md)
- [Photoionization rate](../../02_Zettel/Theory/Photoionization rate.md)
- [Ionisation stratification](../../02_Zettel/Theory/Ionisation stratification.md)
- [H I regions](../../02_Zettel/Theory/H I regions.md)
- [H II region spectroscopy](../../02_Zettel/Theory/H II region spectroscopy.md)
- [Ionisation parameter U](../../02_Zettel/Theory/Ionisation parameter U.md)
- [Case A vs Case B recombination](../../02_Zettel/Theory/Case A vs Case B recombination.md)
