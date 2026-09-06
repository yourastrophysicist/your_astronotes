---
layout: default
title: "Closure amplitude"
---

# Closure amplitude

the amplitude analog of phase closure. for **four** stations, a particular ratio of visibility amplitudes is **gain-independent**: it depends only on the source. closure amplitudes complement closure phases for the four-or-more-station case, providing additional gain-immune observables.

## the formula

four stations $i, j, k, l$. define:

$$A_{ijkl} = \frac{|V_{ij}| \cdot |V_{kl}|}{|V_{ik}| \cdot |V_{jl}|}$$

with $|V|$ the visibility amplitudes.

if the gain amplitude at station $i$ is $g_i$ (multiplicative), then each measured amplitude is

$$|V_{ij,\rm meas}| = g_i \cdot g_j \cdot |V_{ij,\rm true}|$$

substituting:

$$A_{ijkl,\rm meas} = \frac{g_i g_j |V_{ij,\rm true}| \cdot g_k g_l |V_{kl,\rm true}|}{g_i g_k |V_{ik,\rm true}| \cdot g_j g_l |V_{jl,\rm true}|} = \frac{|V_{ij,\rm true}| \cdot |V_{kl,\rm true}|}{|V_{ik,\rm true}| \cdot |V_{jl,\rm true}|}$$

**the gains cancel**.

## why four stations?

![Closure amplitude: ratio of visibility amplitudes across 4 telescopes removing station-dependent receiver gain errors.](Closure_amplitude.jpg)


with three stations there are 3 baselines and 3 amplitudes. their product (or any ratio thereof) involves powers of every gain. closure happens only if I can construct a *ratio* whose gain dependence vanishes — and that requires 4 distinct stations.

formally: for $N$ stations, the number of independent closure amplitudes is

$$N(N-3)/2$$

for $N = 4$: 2 closure amplitudes
for $N = 5$: 5 closure amplitudes
for $N = 6$: 9 closure amplitudes

(combined with the $(N-1)(N-2)/2$ closure phases, this gives the total number of independent observables that survive station-based gain corruption.)

## what closure amplitude encodes

it depends on the *amplitudes* at four (u, v) points. for a point source, all $|V|$ are 1, so $A = 1$. for an extended source, the visibilities differ at different (u, v) and $A \neq 1$. measuring $A$ constrains the *amplitude pattern* of the source independently of phase.

closure amplitude is most useful when:
- you have *many* stations (so many independent closure amplitudes)
- gain amplitudes are unstable (a problem closure amplitude solves)
- you need amplitude calibration robust to time-varying receiver gain

## the practical use

- **radio**: closure amplitudes are computed alongside closure phases as part of the standard EHT/VLBI calibration. they are gain-independent, so they constrain the source even when individual amplitudes are uncalibrated
- **optical**: closure amplitudes get less attention than closure phases because optical interferometers usually have amplitude calibration via reference stars. but for very faint sources, where calibration is poor, closure amplitudes help

## comparison with closure phase

| property                | closure phase           | closure amplitude        |
| ----------------------- | ----------------------- | ------------------------ |
| stations needed         | 3                       | 4                        |
| corrupted by            | nothing (station-based) | nothing (station-based)  |
| sensitive to            | source asymmetry        | amplitude pattern        |
| number for $N$ stations | $(N-1)(N-2)/2$          | $N(N-3)/2$               |
| historical introduction | Jennison 1958           | Twiss-Carter-Little 1960 |

closure phase is more "famous" because it solved the phase problem. closure amplitude is "the other shoe": once you have closure phases, closure amplitudes are the natural amplitude analog.

## bispectrum, trispectrum

the closure phase is the phase of the **bispectrum** $\mathcal B_{ijk} = V_{ij} V_{jk} V_{ki}$.

the closure amplitude is related to the **trispectrum**, the product (or ratio) of four visibilities. specifically, $A_{ijkl}$ is essentially the magnitude of a particular trispectrum pattern.

these higher-order spectra are closely related to higher-order moments in the time-frequency domain (used in image reconstruction algorithms like the ones for EHT).

## use in image reconstruction

modern imaging codes (especially for EHT and high-resolution VLBI) often use:

- closure phases (gain-immune, asymmetry-sensitive)
- closure amplitudes (gain-immune, amplitude-sensitive)
- log-closure amplitudes (a more linear quantity for likelihood functions)

these are the "robust observables" that survive arbitrary station-based calibration errors. an image reconstruction that fits these gives a result that is not biased by miscalibration.

## see also

- [Phase closure](../../02_Zettel/Theory/interf/Phase closure.md)
- [The phase problem in interferometry](../../02_Zettel/Theory/interf/The phase problem in interferometry.md)
- [Self-calibration](../../02_Zettel/Theory/interf/Self-calibration.md)
- [Bispectrum and triple correlation](../../02_Zettel/Theory/interf/Bispectrum and triple correlation.md)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.md)
