---
layout: default
title: "GW energy and angular momentum"
---

gravitational waves carry **energy + momentum + angular momentum** away from sources. quantifying this is subtle in GR (no local stress-energy tensor for gravity), but works in the wave zone via **Isaacson averaging**.

## the Isaacson stress-energy tensor

in the wave zone (far from the source), the GW has wavelength $\lambda$ much shorter than the background curvature radius $R$. the **Isaacson tensor** averages over a few wavelengths:
$$T^{\rm GW}_{\mu\nu} = \frac{c^4}{32\pi G}\langle\partial_\mu h^{TT}_{\rho\sigma}\,\partial_\nu h^{TT,\rho\sigma}\rangle$$

with angle brackets the spacetime average over scales $\gg \lambda$.

this is **not** a true tensor at every point (gravity has no local stress-energy), but it's well-defined as an averaged quantity over many wavelengths.

## energy flux

the energy flux radiated to infinity in direction $\hat n$:
$$\frac{dE}{dt\,d\Omega} = \frac{r^2 c^3}{16\pi G}\langle\dot h^{TT}_{ij}\,\dot h^{TT, ij}\rangle$$

integrated over solid angle: total power radiated, the **quadrupole formula**:
$$P_{\rm GW} = \frac{G}{5 c^5}\langle\dddot Q^{TT}_{ij}\dddot Q^{TT, ij}\rangle$$

## angular momentum flux

similarly, angular momentum is radiated at rate $\propto Q^{TT}\,\dot Q^{TT}$. the binary orbit's angular momentum decreases due to GW emission, hence orbital decay.

## the binary inspiral, revisited

energy emitted by GW $\Rightarrow$ binary's orbital energy decreases:
$$\frac{dE_{\rm orb}}{dt} = -P_{\rm GW}$$

Newtonian orbital energy: $E_{\rm orb} = -G m_1 m_2/(2a)$. so $\dot E_{\rm orb} \propto \dot a/a^2$. setting equal to $-P_{\rm GW}$:
$$\dot a = -\frac{64}{5}\,\frac{G^3}{c^5}\,\frac{m_1 m_2(m_1 + m_2)}{a^3}$$

integrated:
$$a(t) = a_0\!\left(1 - t/t_{\rm coalesce}\right)^{1/4}$$

with $t_{\rm coalesce} \propto a_0^4$. so close binaries inspiral fast; wide binaries take much longer than the universe's age.

## post-Newtonian corrections

leading order: quadrupole formula $\sim (v/c)^5$ (= 2.5PN order). higher-order corrections:
- 3PN tail effects (back-scattering off the source's gravitational potential).
- 3.5PN (more radiative).
- 4PN (current state-of-the-art for analytic waveforms).

modern waveform models (IMRPhenom, EOB) match analytic post-Newtonian + numerical relativity to produce templates for LIGO data analysis.

## the analogy: EM Larmor formula

EM radiated power from accelerating charges:
$$P_{\rm EM} = \frac{q^2 a^2}{6\pi\epsilon_0 c^3}$$

depends on $a^2$, the squared acceleration. GR analog has $\dddot Q^2$ (squared third derivative of quadrupole). higher derivative reflects the higher-multipole leading order.

## see also

- [Quadrupole formula](../../02_Zettel/Theory/Quadrupole formula.md)
- [Plus and cross polarizations](../../02_Zettel/Theory/Plus and cross polarizations.md)
- [Geodesic deviation under a GW](../../02_Zettel/Theory/Geodesic deviation under a GW.md)
- [Transverse traceless gauge](../../02_Zettel/Theory/Transverse traceless gauge.md)
- [Linearized metric perturbation](../../02_Zettel/Theory/Linearized metric perturbation.md)
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 8 - Gravitational Waves](../../01_Literature/Book/Baumann GR/Ch 8 - Gravitational Waves.md)
