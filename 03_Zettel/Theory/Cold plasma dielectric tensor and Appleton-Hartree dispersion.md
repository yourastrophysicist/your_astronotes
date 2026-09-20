---
layout: "default"
title: "Cold plasma dielectric tensor and Appleton-Hartree dispersion"
---
the cold plasma model neglects thermal particle motions ($v_{\text{th}} = 0$) while retaining full electromagnetic wave interactions with magnetized electrons and ions.

## the stix dielectric tensor

in Stix notation with background field $\mathbf{B}_0 = B_0 \hat{\mathbf{z}}$, the dielectric tensor $\boldsymbol{\epsilon}$ takes the form:

$$\boldsymbol{\epsilon} = \begin{pmatrix} S & -i D & 0 \\ i D & S & 0 \\ 0 & 0 & P \end{pmatrix}$$

where the coefficients are:
$$R = 1 - \sum_s \frac{\omega_{ps}^2}{\omega(\omega + \Omega_{cs})}, \quad L = 1 - \sum_s \frac{\omega_{ps}^2}{\omega(\omega - \Omega_{cs})}$$
$$S = \frac{1}{2}(R + L), \quad D = \frac{1}{2}(R - L), \quad P = 1 - \sum_s \frac{\omega_{ps}^2}{\omega^2}$$

## wave modes in parallel propagation (k parallel to B0)

for $\theta = 0$, waves decouple into circularly polarized transverse modes:
1. **Right-hand circular (R-mode)**: $n^2 = R$. exhibits resonance ($n \to \infty$) at the electron cyclotron frequency $\omega = \lvert \Omega_{ce}\rvert$, where the wave electric field rotates in phase with gyrating electrons. at $\omega \ll \lvert \Omega_{ce}\rvert$, this branch becomes the **whistler wave**.
2. **Left-hand circular (L-mode)**: $n^2 = L$. exhibits resonance at the ion cyclotron frequency $\omega = \Omega_{ci}$.

the difference in phase velocities between R and L modes produces **Faraday rotation** of linearly polarized radio waves:

$$\Delta \psi = \frac{\omega}{2c} \int (n_L - n_R) \, dz = \lambda^2 \text{RM}$$

## perpendicular propagation (k perp B0)

for $\theta = \pi/2$:
1. **Ordinary wave (O-mode)**: $n^2 = P = 1 - \omega_{pe}^2/\omega^2$. electric field $\mathbf{E}_1 \parallel \mathbf{B}_0$. unaffected by magnetic field, cut off at $\omega = \omega_{pe}$.
2. **Extraordinary wave (X-mode)**: $n^2 = R L / S$. exhibits the upper hybrid resonance at:
   $$\omega_{\text{UH}} = \sqrt{\omega_{pe}^2 + \Omega_{ce}^2}$$

## see also

- [[Fluid_and_Plasma_Dynamics_MOC]]
- [[Part5_Plasma_Kinetics_Gyrokinetics_and_Waves]]
- [[Faraday rotation and pulsar dispersion measure]]
- [[Interstellar magnetic field tracers]]



## Linked References

- [[Collisionless Landau damping and wave-particle resonance]]
- [[Fluid_and_Plasma_Dynamics_MOC]]


