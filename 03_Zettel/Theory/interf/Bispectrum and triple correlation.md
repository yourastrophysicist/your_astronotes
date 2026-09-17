---
layout: "default"
title: "Bispectrum and triple correlation"
---
{% raw %}
# Bispectrum and triple correlation

the *single-aperture* analog of [phase closure](./Phase%20closure.html). a third-order quantity that is *atmosphere-independent* and recovers the full phase structure of a source despite seeing or instrument errors.

## definition

the **bispectrum** of an image $I(\mathbf x)$ in the spatial-frequency domain:

$$B(\mathbf u_1, \mathbf u_2) = \tilde I(\mathbf u_1) \cdot \tilde I(\mathbf u_2) \cdot \tilde I^*(\mathbf u_1 + \mathbf u_2)$$

a triple product of Fourier coefficients. the conjugate on the third term ensures the bispectrum has even-symmetric phase structure.

the **triple correlation** (real-space equivalent):

$$T(\mathbf x_1, \mathbf x_2) = \int I(\mathbf x) I(\mathbf x + \mathbf x_1) I(\mathbf x + \mathbf x_2) \, d\mathbf x$$

a third-order autocorrelation. by a Fourier-pair theorem, the triple correlation is the FT of the bispectrum.

## the atmosphere-immune property

write $\tilde I_n(\mathbf u) = \tilde O(\mathbf u) \tilde S_n(\mathbf u)$ where $\tilde S_n$ is the random PSF Fourier transform:

$$B_n(\mathbf u_1, \mathbf u_2) = \tilde O(\mathbf u_1) \tilde S_n(\mathbf u_1) \cdot \tilde O(\mathbf u_2) \tilde S_n(\mathbf u_2) \cdot \tilde O^*(\mathbf u_1 + \mathbf u_2) \tilde S_n^*(\mathbf u_1 + \mathbf u_2)$$

the *source* part:
$$\tilde O(\mathbf u_1) \tilde O(\mathbf u_2) \tilde O^*(\mathbf u_1 + \mathbf u_2)$$

the *atmospheric* part:
$$\tilde S_n(\mathbf u_1) \tilde S_n(\mathbf u_2) \tilde S_n^*(\mathbf u_1 + \mathbf u_2)$$

the atmospheric part is the bispectrum of the random PSF $S_n$. on time-average over many frames, this *bispectrum of the atmosphere* is *real and positive* (the **bispectrum transfer function**) — its phase averages to zero.

so:
$$\langle B_n \rangle = \tilde O(\mathbf u_1) \tilde O(\mathbf u_2) \tilde O^*(\mathbf u_1 + \mathbf u_2) \cdot T_B(\mathbf u_1, \mathbf u_2)$$

where $T_B$ is the (real, positive) bispectrum transfer function. **the phase of the time-averaged bispectrum equals the phase of the source's bispectrum**.

## the equivalence with closure phase

the phase of $B(\mathbf u_1, \mathbf u_2)$ is

$$\arg B = \phi(\mathbf u_1) + \phi(\mathbf u_2) - \phi(\mathbf u_1 + \mathbf u_2) = \Phi_{ijk}$$

where $\phi(\mathbf u) = \arg \tilde I(\mathbf u)$ is the visibility phase. the right-hand side is *exactly* the closure phase around the triangle $(\mathbf 0, \mathbf u_1, \mathbf u_1 + \mathbf u_2)$ (with the third point at $\mathbf u_2$).

so **the bispectrum's phase is the closure phase**. the two quantities are identical, just expressed in single-aperture vs interferometric language.

## why this works without separate antennas

in interferometry, closure phase requires three separate apertures. for a *filled* single aperture, what plays the role of the three antennas?

answer: every pair of points within the aperture contributes a "baseline." the bispectrum at $(\mathbf u_1, \mathbf u_2)$ implicitly samples three such baselines around a triangle. since *every* spatial frequency $\mathbf u_i$ is sampled by *many* pairs of aperture points, the closure-phase math averages over all those pairs.

the result: a *single-aperture* version of closure phase, immune to atmospheric phase corruption, and capable of recovering the full source phase information from speckle data.

## the imaging algorithm

from a stack of speckle frames:

1. compute $\tilde I_n$ for each frame (FFT)
2. accumulate $\langle B_n \rangle$ at all triplets $(\mathbf u_1, \mathbf u_2)$
3. divide by the calibration $T_B$ (measured on a reference unresolved star)
4. extract $\arg \langle B \rangle = \Phi_{\rm closure}$
5. accumulate $\langle |\tilde I_n|^2 \rangle$ for amplitude
6. divide by the speckle transfer function for $|\tilde O|$
7. solve for $\phi_O$ from the closure-phase relations (regularized non-linear inversion)
8. invert $\tilde O = |\tilde O| e^{i\phi_O}$ to get the image

step 7 is the hard part. it's a non-linear optimization over a redundant set of phase relations. modern codes use Bayesian or maximum-entropy methods.

## the spectral version

if I have *spectral* data (e.g. integral-field spectroscopy), the bispectrum extends naturally:
$$B(\mathbf u_1, \mathbf u_2, \nu) = \tilde I(\mathbf u_1, \nu) \tilde I(\mathbf u_2, \nu) \tilde I^*(\mathbf u_1 + \mathbf u_2, \nu)$$

at each frequency channel. lets us image the spatial structure at each emission line independently.

## historical note

introduced by **Lohmann, Weigelt, and Wirnitzer** (1983) — the "Erlangen group" in Germany. they showed that speckle data, processed via the bispectrum, recovered images with full asymmetric structure. the technique has been the standard for high-resolution single-aperture imaging since.

## see also

- [Speckle interferometry](./Speckle%20interferometry.html)
- [Theory of speckle interferometry](./Theory%20of%20speckle%20interferometry.html)
- [Aperture masking](./Aperture%20masking.html)
- [Speckle imaging algorithms](./Speckle%20imaging%20algorithms.html)
- [Phase closure](./Phase%20closure.html)
- [Closure amplitude](./Closure%20amplitude.html)
- [Astronomical_Interferometry_MOC](../../../04_Atlas/Astronomical_Interferometry_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (15)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Aperture%20masking.html" class="backlink-item">Aperture masking</a></li>
    <li class="backlink-item-wrap"><a href="../Aperture%20masking.html" class="backlink-item">Aperture masking</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astronomical_Interferometry_MOC.html" class="backlink-item">Astronomical_Interferometry_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./COAST%20Cambridge%20Optical%20Aperture%20Synthesis%20Telescope.html" class="backlink-item">COAST Cambridge Optical Aperture Synthesis Telescope</a></li>
    <li class="backlink-item-wrap"><a href="../COAST%20Cambridge%20Optical%20Aperture%20Synthesis%20Telescope.html" class="backlink-item">COAST Cambridge Optical Aperture Synthesis Telescope</a></li>
    <li class="backlink-item-wrap"><a href="../Closure%20amplitude.html" class="backlink-item">Closure amplitude</a></li>
    <li class="backlink-item-wrap"><a href="./Closure%20amplitude.html" class="backlink-item">Closure amplitude</a></li>
    <li class="backlink-item-wrap"><a href="../Phase%20closure.html" class="backlink-item">Phase closure</a></li>
    <li class="backlink-item-wrap"><a href="./Phase%20closure.html" class="backlink-item">Phase closure</a></li>
    <li class="backlink-item-wrap"><a href="./Speckle%20imaging%20algorithms.html" class="backlink-item">Speckle imaging algorithms</a></li>
    <li class="backlink-item-wrap"><a href="../Speckle%20imaging%20algorithms.html" class="backlink-item">Speckle imaging algorithms</a></li>
    <li class="backlink-item-wrap"><a href="./Speckle%20interferometry.html" class="backlink-item">Speckle interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../Speckle%20interferometry.html" class="backlink-item">Speckle interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../Theory%20of%20speckle%20interferometry.html" class="backlink-item">Theory of speckle interferometry</a></li>
    <li class="backlink-item-wrap"><a href="./Theory%20of%20speckle%20interferometry.html" class="backlink-item">Theory of speckle interferometry</a></li>
  </ul>
</div>
