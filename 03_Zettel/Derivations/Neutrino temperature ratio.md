---
layout: default
title: "Neutrino temperature ratio"
---
## what I'm deriving

after electron-positron annihilation the neutrino background is colder than the photon background.

$$\frac{T_\nu}{T_\gamma} = \left(\frac{4}{11}\right)^{1/3} \approx 0.714$$

with $T_{\gamma,0} = 2.7255$ K this gives $T_{\nu,0} = 1.945$ K.

natural units $c = \hbar = k_B = 1$.

## inputs

1. [[Entropy conservation cosmology]]. the entropy in a comoving volume, $s\,a^3 \propto g_{*s}T^3a^3$, is conserved separately for each set of species that is decoupled from the rest.
2. [[Decoupling Gamma vs H]]. neutrinos decouple at $T_d \sim 1$ to $2$ MeV.
3. $m_e = 0.511$ MeV. $e^\pm$ pairs annihilate when $T$ falls below about $m_e$.

## assumptions

1. **instantaneous decoupling.** neutrinos are fully decoupled before any appreciable $e^\pm$ annihilation. this is the key ordering, $T_d > m_e$.
2. the photon-electron-positron plasma stays in equilibrium throughout (electromagnetic rates are far above $H$).
3. chemical potentials are negligible.

## the timeline

| stage | temperature | state |
|---|---|---|
| A | $T \gtrsim 2$ MeV | $\gamma$, $e^\pm$, $\nu$, $\bar\nu$ all coupled at one temperature |
| B | $2$ MeV $\gtrsim T \gtrsim 0.5$ MeV | neutrinos decoupled, $e^\pm$ still relativistic. both sectors cool as $1/a$, so $T_\nu = T_\gamma$ still |
| C | $T \sim 0.5$ to $0.05$ MeV | $e^\pm$ annihilate into photons. the photon sector cools more slowly than $1/a$ |
| D | $T \ll 0.5$ MeV | only photons remain in the plasma (plus a tiny residue of electrons). both sectors cool as $1/a$ again, with a fixed ratio |

## derivation

### step 1 - the neutrino sector

after decoupling the neutrinos free-stream. each momentum redshifts as $p \propto 1/a$, so the Fermi-Dirac shape is preserved with

$$T_\nu\,a = \text{const} \equiv C_\nu$$

at all later times, stages B, C and D.

### step 2 - the electromagnetic sector

the plasma of $\gamma$ and $e^\pm$ is in equilibrium and isolated from the neutrinos, so its own entropy is conserved.

$$g_{*s}^{\rm em}(T_\gamma)\;T_\gamma^3\,a^3 = \text{const} \equiv C_{\rm em}$$

$g_{*s}^{\rm em}$ changes during stage C. the equation holds throughout, with $g_{*s}^{\rm em}(T)$ the smooth function that interpolates between its two limiting values.

### step 3 - divide

dividing step 2 by the cube of step 1 removes the scale factor.

$$g_{*s}^{\rm em}(T_\gamma)\left(\frac{T_\gamma}{T_\nu}\right)^3 = \frac{C_{\rm em}}{C_\nu^3} = \text{const}$$

this is the whole derivation in one line. the combination on the left has the same value in stage B and in stage D.

### step 4 - count degrees of freedom

stage B, with $\gamma$, $e^-$, $e^+$ all relativistic.

- photon, $g = 2$ (two polarisations), boson.
- electron, $g = 2$ (two spin states), fermion.
- positron, $g = 2$, fermion.

$$g_{*s}^{\rm em}\big|_B = 2 + \frac{7}{8}(2 + 2) = 2 + \frac{7}{2} = \frac{11}{2}$$

stage D, photons only.

$$g_{*s}^{\rm em}\big|_D = 2$$

### step 5 - equate stage B and stage D

in stage B the two temperatures are equal, $T_\gamma/T_\nu = 1$.

$$\frac{11}{2}\cdot 1 = 2\left(\frac{T_\gamma}{T_\nu}\right)^3_D \quad\Longrightarrow\quad \left(\frac{T_\gamma}{T_\nu}\right)^3 = \frac{11}{4}$$

$$\boxed{\, \frac{T_\nu}{T_\gamma} = \left(\frac{4}{11}\right)^{1/3} \approx 0.714 \,}$$

the ratio then stays fixed, since both temperatures scale as $1/a$ in stage D.

the physical reading. the entropy carried by the $e^\pm$ pairs is handed to the photons only. the photons are heated relative to the neutrinos, not the neutrinos cooled. $aT_\gamma$ increases by $(11/4)^{1/3} = 1.40$ while $aT_\nu$ stays constant.

## consequences

### today's neutrino background

$$T_{\nu,0} = 0.714 \times 2.7255\ \text{K} = 1.945\ \text{K} = 1.68 \times 10^{-4}\ \text{eV}$$

number density per flavour ($\nu$ plus $\bar\nu$, $g = 2$, fermion) compared with photons ($g = 2$, boson),

$$\frac{n_\nu}{n_\gamma} = \frac{3}{4}\cdot\frac{g_\nu}{g_\gamma}\cdot\left(\frac{T_\nu}{T_\gamma}\right)^3 = \frac{3}{4}\cdot\frac{4}{11} = \frac{3}{11} \quad\Longrightarrow\quad n_\nu = \frac{3}{11}\times 411 \approx 112\ \text{cm}^{-3}\ \text{per flavour}$$

### radiation energy density

while the neutrinos are relativistic,

$$\rho_R = \rho_\gamma\left[1 + \frac{7}{8}\left(\frac{4}{11}\right)^{4/3}N_{\rm eff}\right] = \rho_\gamma\left[1 + 0.2271\,N_{\rm eff}\right] \approx 1.69\,\rho_\gamma$$

this is what sets $\Omega_{r,0}h^2 = 4.18 \times 10^{-5}$ and $z_{\rm eq} \approx 3400$ in [[Critical density and density parameters]].

### $g_*$ and $g_{*s}$ after annihilation

neutrinos contribute $g = 3$ flavours $\times\ 2 = 6$ fermionic states.

$$g_* = 2 + \frac{7}{8}\cdot 6\cdot\left(\frac{4}{11}\right)^{4/3} = 3.36, \qquad g_{*s} = 2 + \frac{7}{8}\cdot 6\cdot\frac{4}{11} = \frac{43}{11} = 3.91$$

they differ because energy density weights each species with $T_i^4$ and entropy with $T_i^3$.

### neutrino masses

at least two of the three mass states have $m \ge 0.009$ eV, well above $T_{\nu,0} = 1.7 \times 10^{-4}$ eV, so they are non-relativistic today. their number density is still the one fixed above, and their mass density is

$$\Omega_\nu h^2 = \frac{\sum m_\nu}{93.1\ \text{eV}}$$

## checks

- **consistency of the count.** the total before annihilation, $g_{*s} = 11/2 + \frac78\cdot 6 = 10.75$, matches the standard value at $T \sim 1$ MeV.
- **direction.** $T_\nu < T_\gamma$, as it must be since entropy was added to the photons.
- **generalisation.** any species that decouples when the plasma has $g_{*s}^{\rm dec}$ ends up with $T_X/T_\gamma = \left(g_{*s}^{\rm today,\,plasma}/g_{*s}^{\rm dec}\right)^{1/3}$ relative to the particles still coupled. a relic that decoupled above the QCD transition is much colder than the neutrinos.

## corrections to the idealisation

decoupling is not instantaneous. the high-energy tail of the neutrino distribution is still interacting when annihilation starts, so the neutrinos receive a little of the entropy. together with finite-temperature QED corrections this is summarised by the effective number of neutrino species $N_{\rm eff} = 3.044$ in place of $3$. Planck measures $N_{\rm eff} = 2.99 \pm 0.17$.

## questions I should be ready for

- *why are the neutrinos not heated?* they decoupled before annihilation, so they do not interact with the $e^\pm$ pairs or with the photons produced.
- *why $11/2$?* two photon states plus $7/8$ of four electron and positron states.
- *why can I use entropy conservation during annihilation, when electrons are neither relativistic nor negligible?* $s\,a^3$ is conserved for any equilibrium fluid, whatever the mass. I only need the simple formula for $g_{*s}$ at the two ends.
- *what if neutrinos decoupled after annihilation?* they would share the heating and have $T_\nu = T_\gamma$.
- *has the neutrino background been detected?* not directly. its energy density is measured through $N_{\rm eff}$ in the CMB and in BBN.

## board summary (60 seconds)

neutrinos decoupled, $T_\nu a = $ const. plasma entropy conserved, $g_{*s}^{\rm em}T_\gamma^3a^3 = $ const. divide, $g_{*s}^{\rm em}(T_\gamma/T_\nu)^3 = $ const. before annihilation $g_{*s}^{\rm em} = 2 + \frac78\cdot4 = 11/2$ and the ratio is $1$. after, $g_{*s}^{\rm em} = 2$. so $(T_\gamma/T_\nu)^3 = 11/4$, $T_\nu/T_\gamma = (4/11)^{1/3} = 0.714$, $T_{\nu,0} = 1.95$ K.

## see also

- [[Entropy conservation cosmology]] is the mechanism.
- [[Decoupling Gamma vs H]] sets $T_{d,\nu} \sim 1$ MeV.
- [[Relativistic number and energy density]] defines $g_*$ and $g_{*s}$.
