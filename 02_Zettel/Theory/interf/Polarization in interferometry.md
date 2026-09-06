---
layout: default
title: "Polarization in interferometry"
---

# Polarization in interferometry

light is polarized; an interferometer measures it as four independent visibility products (RR, LL, RL, LR). decomposing into Stokes parameters (I, Q, U, V) gives the source's polarization. essential for studies of magnetic fields, AGN jets, masers, and Faraday rotation.

## the basics: Stokes parameters

every electromagnetic wave's polarization state is described by four Stokes parameters:

- **I**: total intensity
- **Q**: linear polarization at 0°/90°
- **U**: linear polarization at 45°/135°
- **V**: circular polarization (right - left handedness)

the **degree of polarization**:
$$P = \sqrt{Q^2 + U^2 + V^2}/I$$

linear polarization fraction: $P_{\rm lin} = \sqrt{Q^2 + U^2}/I$
circular polarization fraction: $P_{\rm circ} = V/I$

polarization angle: $\chi = \tfrac{1}{2}\arctan(U/Q)$

## the interferometric measurement

a typical radio receiver uses circular polarization basis: receives **right-circular** (R) and **left-circular** (L) signals separately. for two antennas $i, j$, the correlator computes four products per baseline:

- $V_{\rm RR}$: right at i, right at j
- $V_{\rm LL}$: left at i, left at j
- $V_{\rm RL}$: right at i, left at j
- $V_{\rm LR}$: left at i, right at j

these are the **parallel-hand** ($V_{\rm RR}, V_{\rm LL}$) and **cross-hand** ($V_{\rm RL}, V_{\rm LR}$) visibilities.

## from visibilities to Stokes

the conversion:
$$I = (V_{\rm RR} + V_{\rm LL})/2$$
$$V = (V_{\rm RR} - V_{\rm LL})/2$$
$$Q + iU = V_{\rm RL}$$
$$Q - iU = V_{\rm LR}$$

where the *real* and *imaginary* parts of the cross-hand visibilities give Q and U.

so each Stokes parameter is a linear combination of the four polarization correlations. Stokes I is what astronomers usually image; Q, U, V give polarization information.

## the calibration: D-terms

real receivers are not perfectly polarized: there's some **leakage** of, say, R-polarized light into the L channel and vice versa. the **D-term** at antenna $i$ is the *complex coupling coefficient* between the two channels:

$$E_{\rm L,measured} = E_{\rm L,true} + D_i E_{\rm R,true}$$

leakage is typically $|D| \sim 0.05$ (5%). without correction, polarization measurements are biased by this amount.

D-term calibration:
1. observe an unpolarized calibrator (a source with $P = 0$)
2. measure the cross-hand visibilities — they should be zero, but instead show the leakage
3. solve for $D_i$ at each antenna
4. apply correction to all subsequent polarization measurements

after calibration, polarization can be measured at $\sim 0.1\%$ precision.

## the polarization angle calibration

the *absolute* polarization angle reference is set by a **polarization angle calibrator** — a source with a known *position angle* of linear polarization. typically:
- 3C 138, 3C 286: bright AGN with well-measured polarization angle (~33° at most cm wavelengths)

calibration:
1. observe the angle calibrator
2. measure the angle of (Q, U)
3. apply the offset between measured and known to reach the absolute angle

without this step, polarization angles are *relative*, not absolute.

## Faraday rotation

magnetized plasmas rotate the polarization angle of light passing through:
$$\chi(\lambda) - \chi(\lambda_0) = RM \cdot \lambda^2$$

where **RM** (rotation measure) is proportional to $\int n_e \mathbf B \cdot d\mathbf l$, the path integral of electron density times magnetic field along the line of sight.

Faraday rotation is *strong* at long wavelengths: at 21 cm, even modest B-fields and densities give $RM > 100$ rad/m². measuring polarization angles at multiple wavelengths gives RM, and thereby line-of-sight magnetic-field information.

## astrophysics applications

three primary use cases:

### 1. magnetic-field maps of galaxies

linear polarization (Q, U) maps trace synchrotron emission. polarization angle gives the magnetic-field direction. polarization fraction gives information on B-field disorder.

VLA, MeerKAT, and SKA studies map magnetic fields in galaxies, AGN jets, intracluster medium.

### 2. AGN jet structures

AGN jets are typically synchrotron-emitting and highly polarized. polarization images show:
- B-field topology (parallel or perpendicular to jet axis)
- jet acceleration regions (where polarization changes)
- shock fronts (sudden polarization changes)

### 3. masers

maser emission is highly polarized (linear from Zeeman, circular from magnetic-field-induced effects). VLBI polarization observations of OH and water masers in star-forming regions probe local magnetic fields.

## the optical analog

optical interferometry has been slower to develop polarization capability:
- SPHERE/IRDIS (VLT): polarimetric mode for high-contrast imaging
- GRAVITY: linearly-polarized observations possible
- MIRC-X (CHARA): polarization mode planned

optical polarimetry of resolved stars (Wolf-Rayet winds, AGB stars, exoplanet host stars) is just beginning to be possible.

## the systematic floor

polarization calibration is the dominant systematic uncertainty in many interferometric polarization measurements:
- D-term variability with time, frequency, and pointing
- polarization-angle calibration uncertainty
- bandwidth depolarization (different RM at different wavelengths)

modern arrays continually improve polarization calibration; ALMA achieves $\sim 0.05\%$ at the best wavelengths.

## BookAI expansion

BookAI starts polarization from the electric-field vector:

$$\mathbf E(t)=\begin{pmatrix}E_x(t)\\E_y(t)\end{pmatrix}$$

then defines Stokes parameters as time averages:

$$I=\langle |E_x|^2+|E_y|^2\rangle$$

$$Q=\langle |E_x|^2-|E_y|^2\rangle$$

$$U=\langle2\mathrm{Re}(E_xE_y^*)\rangle$$

$$V=\langle2\mathrm{Im}(E_xE_y^*)\rangle$$

in a linear-feed basis, the correlator products are approximately:

$$V_{XX}\sim I+Q,\qquad V_{YY}\sim I-Q$$

$$V_{XY}\sim U+iV,\qquad V_{YX}\sim U-iV$$

so full polarization needs both parallel-hand and cross-hand correlations. the calibration problem is that real feeds mix polarization states through leakage terms (D-terms), and Faraday rotation changes the linear polarization angle as

$$\chi(\lambda)=\chi_0+\mathrm{RM}\lambda^2$$

BookAI's clean mental model: polarization is not an extra decorative map; it is how interferometry becomes a magnetic-field and plasma diagnostic.

## scientific figure

<img src="{{ "/assets/images/polarization_stokes_ellipse.svg" | relative_url }}" alt="polarization_stokes_ellipse" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

reading cue: Stokes parameters are not four random letters. they are a compact bookkeeping system for total intensity, two linear-polarization axes, and circular handedness.

source: local study diagram generated from the standard Stokes-parameter interpretation.

## see also

- [Calibration overview](../../../02_Zettel/Theory/interf/Calibration overview.html)
- [Bandpass calibration](../../../02_Zettel/Theory/interf/Bandpass calibration.html)
- [AGN and supermassive black holes](../../../02_Zettel/Theory/interf/AGN and supermassive black holes.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
