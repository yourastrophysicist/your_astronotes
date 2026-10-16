---
layout: default
title: "BBN helium fraction"
---
## what I'm deriving

the primordial mass fraction of $^4$He,

$$Y_p = \frac{2\,(n/p)}{1 + (n/p)} \approx \frac{1}{4}$$

with the neutron-to-proton ratio at the time of nucleosynthesis, $n/p \approx 1/7$, fixed by three steps.

1. equilibrium, $(n/p)_{\rm eq} = e^{-Q/T}$.
2. weak freeze-out at $T_f \approx 0.8$ MeV, giving $(n/p)_f \approx 1/5$.
3. free neutron decay until deuterium can survive at $T_{\rm nuc} \approx 0.07$ MeV, giving $n/p \approx 1/7$.

natural units $c = \hbar = k_B = 1$.

## conventions and symbols

| symbol | meaning | value |
|---|---|---|
| $n_n$, $n_p$ | number densities of neutrons and protons, free or bound | |
| $n/p$ | shorthand for $n_n/n_p$ | |
| $X_n \equiv n_n/(n_n + n_p)$ | neutron fraction | |
| $Q \equiv m_n - m_p$ | neutron-proton mass difference | $1.293$ MeV |
| $\tau_n$ | neutron mean lifetime | $879$ s |
| $B_D$ | deuteron binding energy | $2.22$ MeV |
| $\eta$ | [[Baryon to photon ratio]] | $6.1 \times 10^{-10}$ |
| $Y_p$ | fraction of baryonic mass in $^4$He | |

## inputs

[[Equilibrium distributions]] in the non-relativistic limit, [[Decoupling Gamma vs H]] for the freeze-out criterion, [[Temperature time relation]] for the clock, and the photon-counting argument of [[Saha equation derivation]].

## step 1 - weak equilibrium between neutrons and protons

for $T \gtrsim 1$ MeV the reactions

$$n + \nu_e \leftrightarrow p + e^-, \qquad n + e^+ \leftrightarrow p + \bar\nu_e, \qquad n \leftrightarrow p + e^- + \bar\nu_e$$

are faster than the expansion. chemical equilibrium for the first one reads $\mu_n + \mu_\nu = \mu_p + \mu_e$. the lepton chemical potentials are negligible ($|\mu_e|/T \sim 10^{-9}$ from charge neutrality, $\mu_\nu$ assumed small), so $\mu_n = \mu_p$.

both nucleons are non-relativistic ($m \approx 939$ MeV $\gg T$) with $g = 2$. using $n_i = g_i(m_iT/2\pi)^{3/2}e^{(\mu_i - m_i)/T}$ and taking the ratio, the chemical potentials cancel.

$$\frac{n_n}{n_p} = \left(\frac{m_n}{m_p}\right)^{3/2}e^{-(m_n - m_p)/T}$$

$(m_n/m_p)^{3/2} = 1.002$, set to $1$. the mass difference is kept in the exponent, where it is compared with $T$.

$$\boxed{\, \left(\frac{n}{p}\right)_{\rm eq} = e^{-Q/T}, \qquad Q = 1.293\ \text{MeV} \,}$$

for $T \gg Q$ the ratio is $1$. as $T$ drops below $Q$ neutrons become rarer, since they are the heavier state.

## step 2 - weak freeze-out

### the rate

the conversion rate per nucleon is a weak rate, $\Gamma_{np} \sim G_F^2T^5$ (see [[Decoupling Gamma vs H]]). the detailed calculation, normalised to the measured neutron lifetime, gives a larger coefficient than the neutrino scattering rate.

### the expansion rate

$H = 1.66\sqrt{g_*}\,T^2/M_{\rm Pl}$ with $g_* = 10.75$ (photons, $e^\pm$, three neutrinos).

### the freeze-out temperature

$$\frac{\Gamma_{np}}{H} \approx \left(\frac{T}{0.8\ \text{MeV}}\right)^3 \quad\Longrightarrow\quad T_f \approx 0.8\ \text{MeV}, \qquad t_f \approx 1\ \text{s}$$

below $T_f$ the interconversion reactions are too slow to maintain equilibrium, and the ratio stops following $e^{-Q/T}$.

$$\left(\frac{n}{p}\right)_f \approx e^{-1.293/0.8} = e^{-1.62} \approx 0.20 = \frac{1}{5}, \qquad X_{n,f} = \frac{0.20}{1.20} \approx \frac{1}{6}$$

the numerical coincidence $T_f \sim Q$ is what makes the helium abundance neither negligible nor dominant. $T_f$ is set by $G_F$ and $M_{\rm Pl}$, and $Q$ by the quark masses and electromagnetism. if $T_f$ were much smaller than $Q$ there would be almost no neutrons and almost no helium.

## step 3 - the deuterium bottleneck

all nuclei are built from two-body reactions starting with

$$n + p \leftrightarrow D + \gamma, \qquad B_D = 2.22\ \text{MeV}$$

three-body reactions are negligible at these densities. so nothing heavier can form until deuterium survives.

apply the Saha argument to this reaction ($g_D = 3$, $g_n = g_p = 2$, and $m_nm_p/m_D \approx m_N/2$).

$$\frac{n_D}{n_n\,n_p} = \frac{3}{4}\left(\frac{4\pi}{m_NT}\right)^{3/2}e^{B_D/T}$$

multiply by $n_p \approx n_b = \eta\,n_\gamma \propto \eta\,T^3$.

$$\frac{n_D}{n_n} \sim \eta\left(\frac{T}{m_N}\right)^{3/2}e^{B_D/T}$$

the prefactor $\eta\,(T/m_N)^{3/2}$ is about $10^{-15}$ at $T \sim 0.1$ MeV. the deuterium fraction is negligible until the exponential compensates, $B_D/T \approx 30$ to $35$.

$$\boxed{\, T_{\rm nuc} \approx 0.07\ \text{MeV} \,}$$

the simple estimate $B_D/\ln(1/\eta) = 2.22/21 \approx 0.1$ MeV gets the scale. the extra factor $(T/m_N)^{3/2}$ lowers it to $0.07$ MeV. physically, with $1.6 \times 10^9$ photons per baryon, the tail of the Planck spectrum above $2.22$ MeV dissociates deuterons until $T$ is far below $B_D$.

the time, from [[Temperature time relation]] with $g_* = 3.36$ (after $e^\pm$ annihilation),

$$t_{\rm nuc} \approx \frac{2.42}{\sqrt{3.36}}\left(\frac{1}{0.07}\right)^2\ \text{s} \approx 270\ \text{s}$$

an estimate, since $g_*$ is changing during this interval. detailed calculations give $t_{\rm nuc} \approx 200$ to $300$ s.

## step 4 - neutron decay during the wait

between $t_f \approx 1$ s and $t_{\rm nuc}$ the only process changing the ratio is free decay, $n \to p + e^- + \bar\nu_e$. each decay removes a neutron and adds a proton, while $n_n + n_p$ per comoving volume is conserved.

$$n_n(t) = n_{n,f}\,e^{-t/\tau_n}, \qquad n_p(t) = n_{p,f} + n_{n,f}\left(1 - e^{-t/\tau_n}\right)$$

dividing,

$$\frac{n}{p}(t) = \frac{(n/p)_f\;e^{-t/\tau_n}}{1 + (n/p)_f\left(1 - e^{-t/\tau_n}\right)}$$

equivalently and more simply, $X_n(t) = X_{n,f}\,e^{-t/\tau_n}$.

with $t_{\rm nuc} = 270$ s, $e^{-270/879} = 0.735$.

$$X_n(t_{\rm nuc}) = \frac{1}{6}\times 0.735 = 0.123, \qquad \frac{n}{p} = \frac{0.123}{1 - 0.123} = 0.14 \approx \frac{1}{7}$$

## step 5 - helium mass fraction

once deuterium survives, the chain

$$D + p \to {}^3\text{He} + \gamma, \quad D + D \to {}^3\text{He} + n, \quad D + D \to {}^3\text{H} + p, \quad {}^3\text{H} + D \to {}^4\text{He} + n, \quad {}^3\text{He} + D \to {}^4\text{He} + p$$

runs quickly, and essentially every neutron ends up in $^4$He. this happens because $^4$He is by far the most tightly bound light nucleus ($28.3$ MeV, $7.1$ MeV per nucleon), and because there is no stable nucleus with mass number $5$ or $8$, so the chain cannot continue by adding a nucleon or by fusing two $^4$He.

counting. each $^4$He contains $2$ neutrons, so $n_{\rm He} = n_n/2$. its mass is $4m_N$. the total baryonic mass density is $m_N(n_n + n_p)$, where $n_n$ and $n_p$ are the values just before nucleosynthesis.

$$Y_p \equiv \frac{4m_N\,n_{\rm He}}{m_N(n_n + n_p)} = \frac{4\cdot\frac12n_n}{n_n + n_p} = \frac{2\,n_n}{n_n + n_p} = 2X_n$$

$$\boxed{\, Y_p = \frac{2\,(n/p)}{1 + (n/p)} \,}$$

with $n/p = 1/7$,

$$Y_p = \frac{2/7}{8/7} = \frac{1}{4}$$

a concrete picture. out of $16$ nucleons, $2$ are neutrons and $14$ are protons. the $2$ neutrons take $2$ protons to make one $^4$He. $12$ protons remain as hydrogen. the mass fraction is $4/16$, and the number ratio is one helium nucleus per twelve hydrogen nuclei.

## comparison with observation

| nucleus | prediction for $\eta = 6.1 \times 10^{-10}$ | observation | status |
|---|---|---|---|
| $^4$He | $Y_p = 0.247$ | $0.245 \pm 0.003$, metal-poor H II regions | agrees |
| D | D/H $= 2.5 \times 10^{-5}$ | $(2.53 \pm 0.03) \times 10^{-5}$, quasar absorbers | agrees |
| $^3$He | $^3$He/H $\sim 10^{-5}$ | uncertain, altered by stars | not a strong test |
| $^7$Li | $^7$Li/H $\approx 5 \times 10^{-10}$ | $\approx 1.6 \times 10^{-10}$, halo stars | lower by a factor of $3$, the lithium problem |

## what $Y_p$ depends on

- **$\eta$, weakly.** larger $\eta$ opens the bottleneck slightly earlier, fewer neutrons decay, $Y_p$ rises logarithmically. deuterium is far more sensitive ($\text{D/H} \propto \eta^{-1.6}$) and is the baryometer.
- **$g_*$, that is the number of neutrino species.** larger $g_*$ gives faster expansion, earlier freeze-out at higher $T_f$, larger $(n/p)_f$, more helium. one extra neutrino species raises $Y_p$ by about $0.013$.
- **$\tau_n$.** it normalises the weak rate (shorter lifetime, later freeze-out, less helium) and controls the decay in step 4.
- **$Q$.** enters the exponent in step 1.

## checks

- **limits of the formula.** $n/p = 1$ gives $Y_p = 1$, all helium. $n/p = 0$ gives $Y_p = 0$.
- **without neutron decay.** $n/p = 1/5$ would give $Y_p = 1/3$.
- **baryon number.** hydrogen mass fraction is $1 - Y_p = (1 - n/p)/(1 + n/p) = 0.75$.
- **why stars cannot explain it.** stellar nucleosynthesis over the age of the Galaxy produces a few percent of helium by mass along with metals. a helium fraction near $25\%$ in the most metal-poor gas has to be primordial.

## questions I should be ready for

- *why is $\mu_n = \mu_p$?* weak reactions are in equilibrium and the lepton chemical potentials are negligible.
- *what freezes at $T_f$?* the interconversion by two-body weak reactions. neutron decay continues, since it does not need a collision partner.
- *why wait until $0.07$ MeV when $B_D = 2.2$ MeV?* the photon-to-baryon ratio. the number of photons above $B_D$ exceeds the number of baryons until $T \approx B_D/30$.
- *why does everything end up in $^4$He?* highest binding energy among light nuclei, and no stable $A = 5$ or $A = 8$. also the Coulomb barriers rise while $T$ and density fall.
- *how does BBN count neutrino species?* through $g_*$ in $H$, which shifts $T_f$.
- *does $Y_p$ determine $\eta$?* only weakly. D/H does.

## board summary (60 seconds)

equilibrium $n/p = e^{-Q/T}$ with $Q = 1.293$ MeV. weak rate $G_F^2T^5$ equals $H \sim T^2/M_{\rm Pl}$ at $T_f \approx 0.8$ MeV, so $(n/p)_f \approx 1/5$, $X_n = 1/6$. deuterium is photodissociated until $T \approx 0.07$ MeV, $t \approx 270$ s, because $\eta \sim 10^{-9}$. meanwhile neutrons decay, $X_n = \frac16e^{-270/879} \approx 0.123$, $n/p \approx 1/7$. all neutrons go into $^4$He, $Y_p = 2X_n = 2(n/p)/(1 + n/p) \approx 0.25$.

## see also

- [[Decoupling Gamma vs H]] gives the weak freeze-out criterion.
- [[Temperature time relation]] converts $T$ to $t$ for neutron decay.
- [[Saha equation derivation]] has the same delay argument for hydrogen.
- [[Baryon to photon ratio]] sets $\eta$.
