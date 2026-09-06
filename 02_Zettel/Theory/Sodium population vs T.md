---
layout: default
title: "Sodium population vs T"
---

Na has a low ionisation potential ($\chi_{\rm Na I} = 5.14$ eV, the lowest among common spectroscopic species), so Na is easily ionised. consequence: Na I lines (the famous D-doublet at $5890, 5896$ Å) appear only in **cool stars**.

## the setup

Saha for Na: $\chi = 5.14$ eV. at any temperature where $k_BT \gtrsim 0.5$ eV ($T \gtrsim 6000$ K), Saha factor is large and Na is mostly ionised.

within neutral Na, the lower level of D is the ground state $3\,^2S_{1/2}$, so Boltzmann factor $= 1$ for the lower level. the line strength is proportional to:
$$f_{\rm NaI}(T) = n_{\rm NaI}/n_{\rm Na} \quad\to\quad \text{decreases with $T$}$$

monotonically decreasing, not bell-shaped. at low $T$ the lines are very strong; at high $T$ they vanish.

## benchmark values

at typical photospheric $n_e \sim 10^{14}$ cm$^{-3}$:
- $T = 3000$ K (M5): $f_{\rm NaI} \approx 1$ (all Na neutral). D lines saturated, very strong.
- $T = 4000$ K (K5): $f_{\rm NaI} \approx 0.95$. D lines very strong.
- $T = 5800$ K (G2, Sun): $f_{\rm NaI} \approx 0.5$. D lines moderate strength.
- $T = 7000$ K (F0): $f_{\rm NaI} \approx 0.05$. D lines weak.
- $T = 10\,000$ K (A0): $f_{\rm NaI} \approx 10^{-3}$. D lines absent.

## the user's plot

at `~/Documents/2/spectroscopy/Plots-20260501/NaI_pop_T.png`. shows the monotonic Saha decline. the user can see that Na I D loses strength sharply between G and F stars.

## consequence in stellar spectroscopy

- **K and M dwarfs**: D-doublet is the strongest absorption feature in the visible.
- **G dwarfs (Sun)**: D-doublet is moderate; visible but not dominant.
- **F to A**: D-doublet weakens, then disappears.
- **B and O**: no Na I D at all.

so the Na D doublet acts as a **late-type indicator**: its presence at $\sim 5890$ Å in a stellar spectrum immediately tells you $T < 7500$ K.

## D-doublet in luminosity classes

at fixed $T$, the D-line strength differs slightly between dwarfs and giants:
- **dwarfs** (high pressure): more pressure broadening, broader Lorentzian wings, larger equivalent width.
- **giants** (low pressure): less pressure broadening, narrower core, smaller wings.

this is a **gravity discriminator**: at fixed spectral class, the D-doublet's wings are deeper for higher-gravity (smaller-radius) stars. used in [MK luminosity classes](../../02_Zettel/Theory/MK luminosity classes.html) determination, especially in K and M.

## D lines in the ISM and exospheres

separate from stellar spectroscopy:
- **interstellar Na D**: cold neutral diffuse ISM has Na I in the ground state. seen as narrow absorption in spectra of bright stars and quasars.
- **Mercury, Moon, Io exospheres**: Na D in **emission**, the brightest atomic line in tenuous-atmosphere bodies (resonance line, sodium fluoresces in sunlight). spectacular spectra.

## see also

- [Sodium and alkalis](../../02_Zettel/Theory/Sodium and alkalis.html)
- [Boltzmann equation in spectroscopy](../../02_Zettel/Theory/Boltzmann equation in spectroscopy.html)
- [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.html)
- [Population of excited levels](../../02_Zettel/Theory/Population of excited levels.html)
- [MK luminosity classes](../../02_Zettel/Theory/MK luminosity classes.html)
- [Stellar spectra and spectral classification](../../02_Zettel/Theory/Stellar spectra and spectral classification.html)
- [Why the Sequence OBAFGKM](../../02_Zettel/Theory/Why the Sequence OBAFGKM.html)
- [Interstellar absorption](../../02_Zettel/Theory/Interstellar absorption.html)
