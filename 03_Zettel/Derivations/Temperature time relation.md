---
layout: default
title: "Temperature time relation"
---
## what I'm deriving

in the radiation-dominated era,

$$H = 1.66\, \sqrt{g_*}\, \frac{T^2}{M_{\rm Pl}}, \qquad t = \frac{0.301}{\sqrt{g_*}}\frac{M_{\rm Pl}}{T^2} \approx \frac{2.42}{\sqrt{g_*}}\left(\frac{1\ \text{MeV}}{T}\right)^2\ \text{s}$$

so $T \sim 1$ MeV corresponds to $t \sim 1$ s.

## conventions and symbols

natural units $c = \hbar = k_B = 1$.

| symbol | meaning | value |
|---|---|---|
| $M_{\rm Pl}$ | Planck mass, $G \equiv 1/M_{\rm Pl}^2$ | $1.221 \times 10^{19}$ GeV |
| $\bar M_{\rm Pl}$ | reduced Planck mass, $(8\pi G)^{-1/2}$ | $2.435 \times 10^{18}$ GeV |
| $g_*$ | effective relativistic degrees of freedom | [[Relativistic number and energy density]] |
| $\hbar$ | conversion from MeV$^{-1}$ to seconds | $6.582 \times 10^{-22}$ MeV s |

the two Planck masses differ by $\sqrt{8\pi} \approx 5.01$. this file uses the unreduced one. [[Slow roll inflation]] uses the reduced one.

## assumptions

1. radiation dominates the energy density. true for $z \gg z_{\rm eq} \approx 3400$, that is $T \gg 0.8$ eV.
2. curvature and $\Lambda$ are negligible, which is always true at early times.
3. $g_*$ is constant over the interval considered. the formula for $t$ is approximate across annihilation thresholds.

## derivation

### step 1 - Friedmann with radiation only

$$H^2 = \frac{8\pi G}{3}\,\rho_R, \qquad \rho_R = \frac{\pi^2}{30}\,g_*\,T^4$$

$$H^2 = \frac{8\pi}{3}\cdot\frac{\pi^2}{30}\cdot\frac{g_*T^4}{M_{\rm Pl}^2} = \frac{8\pi^3}{90}\,g_*\,\frac{T^4}{M_{\rm Pl}^2}$$

### step 2 - square root

$$H = \sqrt{\frac{8\pi^3}{90}}\;\sqrt{g_*}\;\frac{T^2}{M_{\rm Pl}}, \qquad \sqrt{\frac{8\pi^3}{90}} = \sqrt{2.756} = 1.660$$

$$\boxed{\, H = 1.66\, \sqrt{g_*}\, \frac{T^2}{M_{\rm Pl}} \,}$$

with the reduced Planck mass the same result reads $H = \sqrt{\pi^2g_*/90}\;T^2/\bar M_{\rm Pl} = 0.331\sqrt{g_*}\,T^2/\bar M_{\rm Pl}$.

### step 3 - $H$ as a function of $t$

$\rho_R \propto a^{-4}$ (from [[Continuity equation cosmology]] with $w = 1/3$), so Friedmann gives $\dot a^2 = C^2/a^2$ with $C$ a constant. take the positive root for expansion and separate variables. the left side is integrated over $a$ from $0$ to $a$, the right side over $t$ from $0$ to $t$.

$$a\,da = C\,dt \quad\Longrightarrow\quad \frac{a^2}{2} = C\,t \quad\Longrightarrow\quad a \propto t^{1/2}$$

$$H = \frac{\dot a}{a} = \frac{1}{2t}$$

the lower limit $a(0) = 0$ defines the origin of time. extrapolating radiation domination back to $t = 0$ is a convention, harmless because the time spent at early epochs is negligible, $t \propto T^{-2}$.

### step 4 - equate and solve for $t$

$$\frac{1}{2t} = 1.66\sqrt{g_*}\frac{T^2}{M_{\rm Pl}} \quad\Longrightarrow\quad t = \frac{1}{2\times 1.66}\cdot\frac{M_{\rm Pl}}{\sqrt{g_*}\,T^2}$$

$$\boxed{\, t = \frac{0.301}{\sqrt{g_*}}\,\frac{M_{\rm Pl}}{T^2} \,}$$

### step 5 - convert to seconds

in natural units $t$ comes out in MeV$^{-1}$. measure $T$ in MeV and write $M_{\rm Pl} = 1.221 \times 10^{22}$ MeV.

$$t = \frac{0.301 \times 1.221 \times 10^{22}}{\sqrt{g_*}}\left(\frac{1\ \text{MeV}}{T}\right)^2\ \text{MeV}^{-1}$$

multiply by $\hbar = 6.582 \times 10^{-22}$ MeV s to turn MeV$^{-1}$ into seconds. $0.301 \times 1.221 \times 6.582 = 2.42$.

$$\boxed{\, t \approx \frac{2.42}{\sqrt{g_*}} \left(\frac{1\ \text{MeV}}{T}\right)^2\ \text{s} \,}$$

## numerical map

computed from the boxed formula where radiation dominates.

| epoch | $T$ | $g_*$ | $t$ |
|---|---|---|---|
| electroweak scale | $100$ GeV | $106.75$ | $2 \times 10^{-11}$ s |
| QCD transition | $150$ to $200$ MeV | $61.75 \to 17$ | $\sim 10^{-5}$ s |
| neutrino decoupling | $\sim 1$ MeV | $10.75$ | $0.7$ s |
| n/p freeze-out | $0.8$ MeV | $10.75$ | $1.2$ s |
| $e^\pm$ annihilation | $\sim 0.5$ to $0.05$ MeV | $10.75 \to 3.36$ | $\sim 5$ to $500$ s |
| deuterium bottleneck opens | $0.07$ MeV | $3.36$ | $\sim 270$ s |

later epochs are outside the validity of the formula because matter is no longer negligible. for reference, matter-radiation equality is at $T \approx 0.80$ eV and $t \approx 5 \times 10^4$ yr, recombination at $T \approx 0.26$ eV and $t \approx 3.8 \times 10^5$ yr, today $T_0 = 2.35 \times 10^{-4}$ eV and $t_0 = 13.8$ Gyr.

## checks

- **dimensions.** in natural units $H$ has units of energy. $T^2/M_{\rm Pl}$ is energy$^2$/energy.
- **direct SI check at $T = 1$ MeV.** $\rho_R c^2 = \frac{g_*}{2}a_{\rm rad}T^4$ with $T = 1.16 \times 10^{10}$ K gives $H = \sqrt{8\pi G\rho_R/3} \approx 0.68$ s$^{-1}$ for $g_* = 10.75$, so $t = 1/(2H) \approx 0.74$ s, the same as the table.
- **scaling.** $t \propto T^{-2}$ is the same statement as $a \propto t^{1/2}$ with $T \propto 1/a$.
- **age versus Hubble time.** $t = 1/(2H)$, so the Hubble time $1/H$ is twice the age in the radiation era.

## why this matters

the relation turns "what happens at temperature $T$" into "how much time is available". a process with rate $\Gamma(T)$ stays in equilibrium while $\Gamma > H(T)$, see [[Decoupling Gamma vs H]]. since $H \propto T^2/M_{\rm Pl}$ and $M_{\rm Pl}$ is huge, the expansion is slow compared with particle interactions at high $T$, which is why equilibrium is a good starting assumption. the time between n/p freeze-out and the opening of the deuterium bottleneck fixes how many neutrons decay, see [[BBN helium fraction]].

more relativistic species means larger $g_*$, larger $H$ at a given $T$, and less time. this is how BBN constrains the number of neutrino species.

## questions I should be ready for

- *why does the Newtonian Friedmann equation apply to radiation?* the form is the same in GR, with $\rho$ the total energy density. see [[Friedmann equation General Relativity FLRW]].
- *which Planck mass?* here $M_{\rm Pl} = G^{-1/2}$. with the reduced one the coefficient $1.66$ becomes $0.331$.
- *is $t = 1/(2H)$ exact?* only for pure radiation with constant $g_*$. when $g_*$ changes, $T \propto g_{*s}^{-1/3}/a$ and the relation picks up small corrections.
- *where does the factor $\hbar$ come from?* from converting an inverse energy into a time, $t[\text{s}] = \hbar \times t[\text{MeV}^{-1}]$.

## board summary (60 seconds)

radiation era Friedmann, $H^2 = (8\pi G/3)(\pi^2/30)g_*T^4$ with $G = 1/M_{\rm Pl}^2$, so $H = 1.66\sqrt{g_*}\,T^2/M_{\rm Pl}$. $\rho \propto a^{-4}$ gives $a\,da \propto dt$, $a \propto t^{1/2}$, $H = 1/(2t)$. equate, $t = 0.301\,M_{\rm Pl}/(\sqrt{g_*}T^2) = 2.42\,g_*^{-1/2}(\text{MeV}/T)^2$ s. one MeV is about one second.

## see also

- [[Friedmann equation Newtonian shell]] is the input.
- [[Relativistic number and energy density]] supplies $\rho_R = (\pi^2/30)g_*T^4$.
- [[Decoupling Gamma vs H]] uses $H(T)$.
- [[BBN helium fraction]] uses $t(T)$ for neutron decay.
