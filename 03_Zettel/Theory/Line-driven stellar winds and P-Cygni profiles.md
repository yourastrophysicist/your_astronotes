---
layout: "default"
title: "Line-driven stellar winds and P-Cygni profiles"
name: "Line-driven stellar winds and P-Cygni profiles"
description: "radiation pressure on resonance lines, Eddington parameter, modified escape velocity, and P-Cygni profile spectroscopy"
---
{% raw %}
massive O, B, and Wolf-Rayet stars lose up to half their initial mass via radiation-pressure-driven stellar winds.

## the eddington factor and modified escape velocity

the classical Eddington luminosity represents gravitational balance against electron scattering radiation pressure:

$$L_{\text{Edd}} = \frac{4\pi G M c}{\sigma_e / m_p} = \frac{4\pi G M c}{\sigma}$$

the Eddington parameter:

$$\Gamma = \frac{L}{L_{\text{Edd}}}$$

effective surface gravity and escape velocity:

$$g_{\text{eff}} = -\frac{G M}{R^2}(1 - \Gamma)$$
$$v_{\text{esc}} = \left[\frac{2 G M}{R}(1 - \Gamma)\right]^{1/2}$$

as $\Gamma \rightarrow 1$, the escape velocity drops, enabling line-driven radiation pressure to launch the wind.

## wind properties

terminal velocity: $v_\infty \approx (2.5 - 3.0) v_{\text{esc}} \sim 1000 - 3500\text{ km s}^{-1}$.  
mass-loss rate: $\dot{M} = 4\pi r^2 \rho(r) v(r) \sim 10^{-6} - 10^{-4}\, M_\odot\text{ yr}^{-1}$.  
kinetic luminosity: $L_{\text{mech}} = \frac{1}{2}\dot{M} v_\infty^2 \sim 10^{36} - 10^{38}\text{ erg s}^{-1}$.

## the p-cygni profile

observed in resonance lines (e.g. C IV $\lambda 1549$, Si IV $\lambda 1394$, H$\alpha$):
1. **blueshifted absorption trough**: the column of wind expanding directly between the stellar disk and the observer absorbs continuum photons at Doppler-shifted wavelengths, extending up to $-v_\infty$.
2. **symmetric emission peak**: the surrounding spherical halo of expanding wind re-emits line photons isotropically, centered at rest wavelength $\lambda_0$.

combining both produces the diagnostic P-Cygni profile: blue absorption trough + red emission peak.

## see also

- [Astrophysics_of_the_Interstellar_Medium_MOC](../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html)
- [Carraro_04_Massive_Stars_Feedback_and_Stellar_Winds](../../02_Literature/Lectures/Interstellar_Medium/Carraro_04_Massive_Stars_Feedback_and_Stellar_Winds.html)
- [Superbubbles galactic chimneys and fountains](./Superbubbles%20galactic%20chimneys%20and%20fountains.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html" class="backlink-item">Astrophysics_of_the_Interstellar_Medium_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Interstellar_Medium/Carraro_04_Massive_Stars_Feedback_and_Stellar_Winds.html" class="backlink-item">Carraro_04_Massive_Stars_Feedback_and_Stellar_Winds</a></li>
    <li class="backlink-item-wrap"><a href="./Parker%20solar%20wind%20and%20transonic%20critical%20point.html" class="backlink-item">Parker solar wind and transonic critical point</a></li>
  </ul>
</div>
