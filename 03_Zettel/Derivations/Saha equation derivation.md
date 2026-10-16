---
layout: default
title: "Saha equation derivation"
---
## what I'm deriving

the equilibrium ionisation fraction of hydrogen for the reaction $e^- + p \leftrightarrow H + \gamma$,

$$\frac{X_e^2}{1 - X_e} = \frac{1}{n_b}\left(\frac{m_e T}{2\pi}\right)^{3/2} e^{-B_H/T}$$

and its consequence that recombination happens at $T_{\rm rec} \approx 0.32$ eV, about forty times below the binding energy $B_H = 13.6$ eV, because there are more than $10^9$ photons per baryon.

natural units $c = \hbar = k_B = 1$.

## conventions and symbols

| symbol | meaning |
|---|---|
| $n_e$, $n_p$, $n_H$ | number densities of free electrons, free protons, neutral hydrogen atoms |
| $n_b \equiv n_p + n_H$ | number density of hydrogen nuclei (helium ignored) |
| $X_e \equiv n_e/n_b$ | free electron fraction |
| $B_H \equiv m_e + m_p - m_H$ | binding energy of hydrogen, $13.6$ eV |
| $\eta \equiv n_b/n_\gamma$ | [[Baryon to photon ratio]], $6.1 \times 10^{-10}$ |
| $g_i$ | number of internal states of species $i$ |

## assumptions

1. the reaction $e^- + p \leftrightarrow H + \gamma$ is in chemical equilibrium.
2. electrons, protons and hydrogen atoms are non-relativistic and dilute, so Maxwell-Boltzmann statistics applies.
3. all species share the photon temperature $T$.
4. only the ground state of hydrogen is counted, and helium is ignored.
5. the plasma is neutral.

## derivation

### step 1 - number density of a non-relativistic species

from [[Equilibrium distributions]] with $f \ll 1$ and $E \approx m_i + p^2/2m_i$,

$$n_i = g_i\int\frac{d^3p}{(2\pi)^3}\,e^{-(m_i + p^2/2m_i - \mu_i)/T} = g_i\,e^{(\mu_i - m_i)/T}\cdot\frac{1}{2\pi^2}\int_0^\infty p^2e^{-p^2/(2m_iT)}\,dp$$

the Gaussian integral is $\int_0^\infty p^2e^{-\alpha p^2}dp = \frac{\sqrt\pi}{4}\alpha^{-3/2}$ with $\alpha = 1/(2m_iT)$, which gives $\frac{\sqrt\pi}{4}(2m_iT)^{3/2}$. then $\frac{1}{2\pi^2}\cdot\frac{\sqrt\pi}{4}(2m_iT)^{3/2} = \left(\frac{m_iT}{2\pi}\right)^{3/2}$.

$$\boxed{\, n_i = g_i \left(\frac{m_i T}{2\pi}\right)^{3/2} e^{(\mu_i - m_i)/T} \,}$$

the chemical potentials are unknown. the trick is to form a ratio in which they cancel.

### step 2 - chemical equilibrium

for $e^- + p \leftrightarrow H + \gamma$ with $\mu_\gamma = 0$,

$$\mu_e + \mu_p = \mu_H$$

### step 3 - the ratio $n_en_p/n_H$

$$\frac{n_e n_p}{n_H} = \frac{g_e g_p}{g_H}\left(\frac{m_e m_p}{m_H}\right)^{3/2}\left(\frac{T}{2\pi}\right)^{3/2}\exp\left[\frac{\mu_e + \mu_p - \mu_H}{T}\right]\exp\left[-\frac{m_e + m_p - m_H}{T}\right]$$

the power of $T/2\pi$ is $\frac32 + \frac32 - \frac32 = \frac32$. now simplify each factor.

- **chemical potentials.** the first exponential is $e^0 = 1$ by step 2.
- **masses in the exponent.** $m_e + m_p - m_H = B_H$ by definition of the binding energy.
- **masses in the prefactor.** $m_H = m_p + m_e - B_H \approx m_p$ to one part in $2000$, so $m_em_p/m_H \approx m_e$. here the small difference can be dropped. in the exponent it cannot, because it is divided by $T$.
- **statistical weights.** $g_e = 2$ and $g_p = 2$ (spin $1/2$). the hydrogen ground state has $g_H = 4$ (electron and proton spins, a singlet and a triplet). so $g_eg_p/g_H = 1$.

$$\boxed{\, \frac{n_e n_p}{n_H} = \left(\frac{m_e T}{2\pi}\right)^{3/2} e^{-B_H/T} \,}$$

this is the Saha equation, a law of mass action.

### step 4 - ionisation fraction

neutrality gives $n_e = n_p$. with $n_b = n_p + n_H$,

$$n_e = n_p = X_e\,n_b, \qquad n_H = (1 - X_e)\,n_b$$

$$\frac{n_en_p}{n_H} = \frac{X_e^2\,n_b^2}{(1 - X_e)\,n_b} = \frac{X_e^2}{1 - X_e}\,n_b$$

$$\boxed{\, \frac{X_e^2}{1 - X_e} = \frac{1}{n_b}\left(\frac{m_e T}{2\pi}\right)^{3/2} e^{-B_H/T} \,}$$

### step 5 - eliminate $n_b$ with $\eta$

$n_b = \eta\,n_\gamma$ and $n_\gamma = \frac{2\zeta(3)}{\pi^2}T^3$.

$$\frac{X_e^2}{1 - X_e} = \frac{\pi^2}{2\zeta(3)}\cdot\frac{1}{\eta}\cdot\left(\frac{m_e}{2\pi T}\right)^{3/2}e^{-B_H/T} \equiv S(T)$$

the right side depends on $T$ only. solving the quadratic $X_e^2 + S X_e - S = 0$,

$$X_e = \frac{-S + \sqrt{S^2 + 4S}}{2}$$

for $S \gg 1$, $X_e \to 1$ (fully ionised). for $S \ll 1$, $X_e \approx \sqrt S \to 0$.

### step 6 - the recombination temperature

define recombination by $X_e = 1/2$, so $S = 1/2$. take the logarithm.

$$\frac{B_H}{T} = \ln\frac{1}{\eta} + \frac{3}{2}\ln\frac{m_e}{2\pi T} + \ln\frac{\pi^2}{\zeta(3)}$$

with $\ln(1/\eta) = 21.2$. the second term is large as well, since $m_e/T \sim 10^6$. iterate starting from $T = 0.3$ eV. $\frac32\ln\left(5.11 \times 10^5/(2\pi \times 0.3)\right) = 18.8$ and $\ln(\pi^2/\zeta(3)) = 2.1$, so $B_H/T \approx 42$ and $T \approx 0.32$ eV. a second pass does not change it.

$$\boxed{\, T_{\rm rec} \approx 0.32\ \text{eV} \approx 3760\ \text{K}, \qquad z_{\rm rec} = \frac{T_{\rm rec}}{T_0} - 1 \approx 1380 \,}$$

using $T_0 = 2.35 \times 10^{-4}$ eV. the transition is sharp because of the exponential. Saha gives $X_e = 0.13$ at $T = 0.30$ eV and $X_e = 0.005$ at $T = 0.26$ eV.

## why so far below $13.6$ eV

the right side of step 5 is the product of a very large number and a very small one. the prefactor $\eta^{-1}(m_e/T)^{3/2}$ is about $10^{18}$, and it takes $e^{-B_H/T} \sim 10^{-18}$, that is $B_H/T \approx 42$, to bring the product down to order one.

two ways to say the same thing.

- **photon counting.** there are $1/\eta \approx 1.6 \times 10^9$ photons per baryon. even when the typical photon energy $\sim 2.7\,T$ is far below $B_H$, the Wien tail still contains more ionising photons than there are atoms, until $e^{-B_H/T}$ becomes comparable to $\eta$.
- **entropy.** ionised states have an enormous phase space per particle at low density. the factor $n_b^{-1}(m_eT)^{3/2}$ is the number of thermal de Broglie cells available per baryon. forming an atom gains energy $B_H$ and loses that entropy.

the same argument, with the binding energy of deuterium in place of $B_H$, delays nucleosynthesis to $T \approx 0.07$ MeV, see [[BBN helium fraction]].

## checks

- **dimensions.** $(m_eT)^{3/2}$ has units of energy$^3$, a number density in natural units, so the right side of step 4 is dimensionless.
- **high $T$.** $S \to \infty$, $X_e \to 1$.
- **low density.** at fixed $T$, lower $n_b$ gives higher ionisation. recombinations need two bodies to meet and ionisations do not.
- **restoring units.** $\left(m_eT/2\pi\right)^{3/2} \to \left(m_ek_BT/2\pi\hbar^2\right)^{3/2} = \lambda_{\rm dB}^{-3}$, the inverse cube of the electron thermal de Broglie wavelength.

## where Saha stops being valid

Saha is an equilibrium statement. it locates the onset of recombination well and then fails, for two reasons.

1. a recombination directly to the ground state emits a photon with $E > 13.6$ eV that immediately ionises another atom. the net effect is zero. recombination proceeds through excited states.
2. atoms reaching $n = 2$ must still get to the ground state. the Lyman-$\alpha$ photons from $2p \to 1s$ are resonantly reabsorbed. the two exits are the slow two-photon decay $2s \to 1s$ (rate $8.2$ s$^{-1}$) and the redshifting of Lyman-$\alpha$ photons out of the line.

this is the Peebles three-level atom. recombination is delayed relative to Saha, and the reaction rate eventually falls below $H$, leaving a residual ionisation $X_e \approx 2 \times 10^{-4}$ to $10^{-3}$ in place of the exponentially small Saha value.

photon decoupling is a separate event. it happens when $\Gamma_\gamma = X_en_b\sigma_Tc$ falls below $H$, at $z \approx 1090$ and $T \approx 0.26$ eV, see [[Decoupling Gamma vs H]].

## questions I should be ready for

- *how do the chemical potentials disappear?* the ratio $n_en_p/n_H$ contains $e^{(\mu_e + \mu_p - \mu_H)/T}$, which is $1$ in chemical equilibrium.
- *why is $g_H = 4$?* two electron spin states times two proton spin states in the $1s$ level.
- *why $m_e$ in the prefactor?* $m_em_p/m_H$ is the reduced-mass combination, and $m_p \approx m_H$.
- *what would change with a larger $\eta$?* more baryons per photon, fewer ionising photons per atom, recombination at a higher temperature. the dependence is logarithmic.
- *is recombination the same as last scattering?* no. $X_e = 0.5$ at $z \approx 1380$ in Saha, last scattering at $z \approx 1090$.
- *why "re"combination?* historical name. electrons and protons had never been combined before.

## board summary (60 seconds)

non-relativistic equilibrium density $n_i = g_i(m_iT/2\pi)^{3/2}e^{(\mu_i - m_i)/T}$. chemical equilibrium $\mu_e + \mu_p = \mu_H$. form $n_en_p/n_H$, the $\mu$ cancel, masses give $B_H$, weights give $1$. Saha, $n_en_p/n_H = (m_eT/2\pi)^{3/2}e^{-B_H/T}$. with $n_e = n_p = X_en_b$, $X_e^2/(1 - X_e) = n_b^{-1}(m_eT/2\pi)^{3/2}e^{-B_H/T}$. with $n_b = \eta n_\gamma$ and $X_e = 1/2$, $T_{\rm rec} \approx 0.32$ eV, far below $13.6$ eV because of $1/\eta$.

## see also

- [[Equilibrium distributions]] for the non-relativistic limit.
- [[Baryon to photon ratio]] supplies $\eta$.
- [[BBN helium fraction]] uses the same argument at higher $T$.
- [[Decoupling Gamma vs H]] explains why photon decoupling follows recombination.
