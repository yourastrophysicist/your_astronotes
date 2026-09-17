---
layout: "default"
title: "Light deflection"
---
{% raw %}
**light deflection by gravity**: a photon passing near a massive body is bent by an angle $\Delta\phi \approx 4GM/(c^2 b)$, with $b$ the impact parameter. **double the Newtonian particle-prediction**, the famous Eddington 1919 confirmation of GR.

## the formula

at large impact parameter:
$$\boxed{\, \Delta\phi = \frac{4GM}{c^2 b} \,}$$

derivation: the orbit equation for null geodesics:
$$\frac{d^2 u}{d\phi^2} + u = 3GM u^2$$
($u = 1/r$). solving perturbatively for an asymptotically straight photon coming from $\phi = -\pi/2$ to $+\pi/2$ in the absence of the Sun, the GR correction gives $\Delta\phi = 4GM/(c^2 b)$ at first order.

## the factor of 2

two contributions:
- **gravitational time dilation** ($g_{tt}$): photons take longer to cross near the Sun, so they "spend more time" being pulled. contribution $2GM/(c^2 b)$.
- **spatial curvature** ($g_{rr}$): photon's spatial path curves. contribution $2GM/(c^2 b)$.

total $4GM/(c^2 b)$, twice what a Newtonian "photon as Galilean particle" would give.

historically: Einstein's 1911 paper used only $g_{tt}$ and got $2GM/(c^2 b)$. the 1915 full GR theory predicted $4GM/(c^2 b)$. the 1919 Eddington eclipse expedition measured $1.61'' \pm 0.30''$, distinguishing GR from the half-prediction.

## Eddington 1919

May 29, 1919: a total solar eclipse let astronomers photograph the star field near the Sun. Eddington led expeditions to Príncipe (Africa) and Sobral (Brazil). measured stellar positions during eclipse vs same stars at night six months later (when the Sun was elsewhere).

results:
- Sobral: $1.98'' \pm 0.16''$.
- Príncipe: $1.61'' \pm 0.40''$.

GR prediction at the solar limb: $1.75''$. consistent with GR, factor of 2 off from Newton.

the result was announced at the Royal Society in November 1919. **GR became famous overnight**. Einstein became a global celebrity.

## modern verifications

precision now reaches $\sim 10^{-5}$:
- **VLBI** measurements of quasar positions during solar transits: confirm GR to $\sim 1$ part in $10^4$.
- **Gaia** mission: spacecraft positional data confirm light deflection across the sky to $\sim 10^{-5}$.
- **gravitational lensing** of distant galaxies + quasars: directly observable, used as a cosmological tool.

## as a tool: gravitational lensing

extending the deflection to extended sources:
- **strong lensing**: rings, multiple images of background quasars by foreground galaxies.
- **weak lensing**: shape distortions of background galaxies, used to map dark matter.
- **micro-lensing**: temporary brightening of background stars by foreground compact objects (planets, dark matter MACHOs).

each is a direct application of $\Delta\phi = 4GM/(c^2 b)$, integrated over a real mass distribution. modern cosmology relies on this.

## see also

- [Photon trajectories and impact parameter](./Photon%20trajectories%20and%20impact%20parameter.html)
- [Schwarzschild metric](./Schwarzschild%20metric.html)
- [Schwarzschild effective potential](./Schwarzschild%20effective%20potential.html)
- [Photon sphere](./Photon%20sphere.html)
- [Perihelion precession](./Perihelion%20precession.html)
- [Effective potential approach](./Effective%20potential%20approach.html)
- [Lensing as a cosmological probe](./Lensing%20as%20a%20cosmological%20probe.html)
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 6 - Black Holes](../../02_Literature/Book/Baumann%20GR/Ch%206%20-%20Black%20Holes.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../02_Literature/Book/Baumann%20GR/Ch%203%20-%20A%20First%20Look%20at%20Geodesics.html" class="backlink-item">Ch 3 - A First Look at Geodesics</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Gravitational%20lensing%20-%20intro.html" class="backlink-item">Gravitational lensing - intro</a></li>
    <li class="backlink-item-wrap"><a href="./Lensing%20as%20a%20cosmological%20probe.html" class="backlink-item">Lensing as a cosmological probe</a></li>
    <li class="backlink-item-wrap"><a href="./Perihelion%20precession.html" class="backlink-item">Perihelion precession</a></li>
    <li class="backlink-item-wrap"><a href="./Photon%20trajectories%20and%20impact%20parameter.html" class="backlink-item">Photon trajectories and impact parameter</a></li>
    <li class="backlink-item-wrap"><a href="./Schwarzschild%20metric.html" class="backlink-item">Schwarzschild metric</a></li>
    <li class="backlink-item-wrap"><a href="./Strong%20vs%20weak%20lensing.html" class="backlink-item">Strong vs weak lensing</a></li>
  </ul>
</div>
