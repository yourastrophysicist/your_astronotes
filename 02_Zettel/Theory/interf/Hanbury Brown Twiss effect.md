---
layout: default
title: "Hanbury Brown Twiss effect"
---

# Hanbury Brown-Twiss effect

the discovery that started intensity interferometry. **photons from a thermal source are bunched in time and across space**. the bunching is detectable as a correlation in the intensity fluctuations of two separated detectors looking at the same source.

## the experiment

Robert Hanbury Brown and Richard Twiss (1956): two photomultipliers separated by a baseline, looking at the bright star Sirius. the photocurrents were band-pass filtered (at $\sim 30$ Hz) and multiplied. the resulting signal showed a non-zero correlation at zero time delay.

at baselines smaller than the source coherence area, the correlation was strong. at larger baselines, it dropped. the drop-off measured Sirius's angular diameter — about 6 mas.

the **first measurement** of a stellar diameter via *photon counting statistics* rather than wave interference.

## the math

the second-order coherence function:
$$g^{(2)}(\tau, \mathbf B) = \frac{\langle I(t, \mathbf r_1) I(t + \tau, \mathbf r_2) \rangle}{\langle I(t, \mathbf r_1) \rangle \langle I(t, \mathbf r_2) \rangle}$$

at zero time delay and baseline $\mathbf B$:
$$g^{(2)}(0, \mathbf B) = 1 + |\gamma^{(1)}(\mathbf B)|^2$$

where $\gamma^{(1)}(\mathbf B)$ is the **first-order** spatial coherence — exactly the same quantity that amplitude interferometry measures via fringe visibility.

so:
- at baselines where $\gamma^{(1)}$ is large (unresolved source): $g^{(2)} = 2$ (bunching!)
- at baselines where $\gamma^{(1)}$ is small (resolved source): $g^{(2)} = 1$ (no excess correlation)

measuring how $g^{(2)}$ falls from 2 to 1 with baseline gives $|\gamma^{(1)}|^2$ — the same observable as amplitude visibility, just squared.

## the classical wave interpretation

light from a thermal source is composed of many independent emitters with random phases. the *amplitude* fluctuates randomly around its mean. the *intensity* (squared amplitude) has fluctuations whose statistics are predicted by the wave model:

$$\langle (I - \langle I \rangle)^2 \rangle = \langle I \rangle^2$$

so the intensity has rms fluctuations equal to its mean. these fluctuations have a temporal autocorrelation set by the bandwidth (coherence time $\tau_c \sim 1/\Delta\nu$) and a spatial cross-correlation between two points set by the spatial coherence.

the cross-correlation between $I_1$ and $I_2$ at separation $\mathbf B$:
$$\langle \Delta I_1 \Delta I_2 \rangle = |\gamma^{(1)}(\mathbf B)|^2 \cdot \langle I \rangle^2$$

this is the HBT signal. the squared spatial coherence drops as the baseline approaches the inverse angular size of the source — exactly as for amplitude visibility, except squared.

## the quantum interpretation

quantum mechanically, photons of a thermal source obey Bose-Einstein statistics. the probability of detecting a second photon within $\tau_c$ of a first one is *enhanced* compared to a Poisson process: this is **photon bunching**.

formally, $g^{(2)}(0) = 2$ for thermal light — twice the Poisson value. for *coherent* (laser) light: $g^{(2)}(0) = 1$ (no bunching, perfectly Poisson). for *single-photon* light (anti-bunched): $g^{(2)}(0) = 0$ (never pairs).

so HBT *measures* the photon-statistics class of the source. for stars (thermal), it measures angular size via the spatial-coherence drop-off.

## the 1956 controversy

when HBT first published, many physicists refused to believe the result. critics:
- Hanbury Brown was an engineer, not a physicist
- the result implied that intensity (not amplitude) carried interferometric information, which seemed to violate quantum-mechanical principles
- some suggested HBT was measuring a calibration artifact

the controversy was resolved by careful follow-up experiments. by the 1960s, the effect was firmly established, and HBT's group built the [Narrabri stellar interferometer](../../../02_Zettel/Theory/interf/Narrabri stellar interferometer.html) to systematically apply it.

the controversy is *still* useful pedagogy: it shows the difference between first- and second-order coherence, and how easy it is to confuse them.

## the photon-counting picture

HBT can be understood as: thermal sources emit photons with bunched arrival statistics. two detectors looking at the same source see correlated photon arrival times when the source is small (coherent across the baseline). the joint probability of "photon at 1" and "photon at 2" is

$$P_{12} = P_1 P_2 \cdot g^{(2)}(\tau, \mathbf B)$$

at $\tau = 0$ and $\mathbf B$ small, $g^{(2)} = 2$ → twice as many coincidences as for unrelated photons. at $\mathbf B$ larger than coherence area, $g^{(2)} \to 1$ → coincidences match the Poisson background.

this picture connects HBT to modern quantum optics, where photon-counting statistics are the foundation.

## see also

- [Intensity interferometry concept](../../../02_Zettel/Theory/interf/Intensity interferometry concept.html)
- [Narrabri stellar interferometer](../../../02_Zettel/Theory/interf/Narrabri stellar interferometer.html)
- [Why intensity interferometry escapes atmospheric phase](../../../02_Zettel/Theory/interf/Why intensity interferometry escapes atmospheric phase.html)
- [Photon noise and statistics](../../../02_Zettel/Theory/interf/Photon noise and statistics.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
