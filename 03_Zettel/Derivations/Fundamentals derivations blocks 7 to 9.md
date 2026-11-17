---
layout: default
title: "Fundamentals derivations blocks 7 to 9"
---
one file, all the cosmology derivations from the [[Fundamentals_Astrophysics_Cosmology_MOC]]. block 7 (Friedmann setup), block 8 (thermal history), block 9 (structure formation).

I've written every step in the order I'd actually do them on the board.

units: $c = \hbar = k_B = 1$ from block 8 onward (natural units). I keep $c$ explicit in block 7 to match the Newtonian-shell flavour of those derivations.

---

# block 7, fundamental cosmology

## 7.1 Robertson-Walker metric

the cosmological principle says space is homogeneous and isotropic on large scales. the most general metric on spatial slices of constant curvature is:

$$ds^2 = -c^2 dt^2 + a^2(t) \left[\frac{dr^2}{1 - k r^2} + r^2 (d\theta^2 + \sin^2\theta\, d\phi^2)\right]$$

with $k \in \{-1, 0, +1\}$ for open, flat, closed. equivalently, with $\chi$ as a comoving radial coordinate:

$$ds^2 = -c^2 dt^2 + a^2(t)\left[d\chi^2 + S_k^2(\chi)\, d\Omega^2\right]$$

where $S_k(\chi) = \sin\chi$ ($k=+1$), $\chi$ ($k=0$), $\sinh\chi$ ($k=-1$). the scale factor $a(t)$ is dimensionless, normalised $a(t_0) = a_0 \equiv 1$. the Hubble parameter is $H \equiv \dot a/a$.

## 7.2 cosmological redshift from RW

a photon travels on a null geodesic, $ds^2 = 0$, so $c\, dt = a(t)\, d\chi$ along a radial path. for two successive crests emitted at $t_e, t_e + \delta t_e$ and received at $t_o, t_o + \delta t_o$:

$$\int_{t_e}^{t_o} \frac{c\, dt}{a(t)} = \int_{t_e + \delta t_e}^{t_o + \delta t_o} \frac{c\, dt}{a(t)}$$

both integrals cover the same comoving distance $\chi$. differentiating with respect to the limits and assuming $a$ is essentially constant over one period:

$$\frac{\delta t_o}{a(t_o)} = \frac{\delta t_e}{a(t_e)}$$

since $\nu = 1/\delta t$:

$$\boxed{\,1 + z \equiv \frac{\nu_e}{\nu_o} = \frac{a(t_o)}{a(t_e)} = \frac{a_0}{a_e}\,}$$

cosmological redshift is purely the stretching of the metric, not a Doppler effect.

## 7.3 Hubble law at low z

expand $a(t)$ around the present:

$$a(t) = a_0 \left[1 + H_0 (t - t_0) - \frac{1}{2} q_0 H_0^2 (t - t_0)^2 + \cdots\right]$$

where $q_0 \equiv -\ddot a a / \dot a^2|_{t_0}$ is the deceleration parameter. for nearby sources, $1 + z = a_0/a(t_e) \approx 1 + H_0 (t_0 - t_e)$, and $t_0 - t_e \approx d/c$, giving:

$$\boxed{\,c z \approx H_0\, d \quad (\text{low } z)\,}$$

to second order:

$$d_L \approx \frac{c}{H_0}\left[z + \frac{1}{2}(1 - q_0) z^2 + \cdots\right]$$

so SN Ia at $z \sim 0.5$ probe $q_0$, which is how the 1998 acceleration was found.

## 7.4 Friedmann from the Newtonian shell

I imagine a sphere of comoving radius $r$ in a homogeneous, isotropic medium of density $\rho$. by Birkhoff's theorem (Newtonian or GR), only matter inside the sphere matters for the dynamics of a test mass on the surface. the physical radius is $R(t) = a(t)\, r$. mass inside:

$$M = \frac{4}{3}\pi R^3 \rho = \frac{4}{3}\pi a^3 r^3 \rho$$

Newtonian energy of a test mass $m$ on the shell:

$$E = \frac{1}{2} m \dot R^2 - \frac{G M m}{R} = \frac{1}{2} m \dot a^2 r^2 - \frac{4\pi G}{3} \rho a^2 r^2 m$$

since $E$ is conserved (mass on shell stays on shell), divide by $\frac{1}{2} m a^2 r^2$:

$$\left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho + \frac{2 E}{m\, a^2 r^2}$$

identify the curvature term: $-2E/(m r^2 c^2) \equiv k$. then:

$$\boxed{\,H^2 = \frac{8\pi G}{3}\rho - \frac{k c^2}{a^2}\,}$$

this is the Friedmann equation. it agrees with the full GR derivation from $G_{\mu\nu} = 8\pi G T_{\mu\nu}/c^4$ applied to RW with a perfect-fluid stress-energy. the Newtonian derivation works because the sphere is small compared to the curvature scale and pressure is negligible for matter. the GR version is needed for radiation and $\Lambda$.

## 7.5 continuity (fluid) equation

apply the first law of thermodynamics to a comoving volume $V \propto a^3$, treating the expansion as adiabatic ($dQ = 0$):

$$dU + p\, dV = 0$$

with $U = \rho c^2 V$:

$$d(\rho c^2 a^3) + p\, d(a^3) = 0$$

$$\dot\rho\, c^2 a^3 + 3 \rho c^2 a^2 \dot a + 3 p a^2 \dot a = 0$$

divide by $a^3 c^2$:

$$\boxed{\,\dot\rho + 3 H\left(\rho + \frac{p}{c^2}\right) = 0\,}$$

for an equation of state $p = w \rho c^2$:

$$\frac{\dot\rho}{\rho} = -3(1 + w) H = -3(1+w) \frac{\dot a}{a}$$

integrate:

$$\boxed{\,\rho(a) = \rho_0\, a^{-3(1+w)}\,}$$

so:
- matter ($w = 0$): $\rho_m \propto a^{-3}$, just dilution.
- radiation ($w = 1/3$): $\rho_r \propto a^{-4}$, dilution + redshift of each photon.
- vacuum / $\Lambda$ ($w = -1$): $\rho_\Lambda$ constant.

## 7.6 acceleration equation

differentiate Friedmann with respect to time:

$$2 H \dot H = \frac{8\pi G}{3} \dot\rho + \frac{2 k c^2 \dot a}{a^3}$$

substitute $\dot\rho = -3 H(\rho + p/c^2)$ from 7.5 and use $\dot H = \ddot a/a - H^2$:

$$\frac{\ddot a}{a} = H^2 - 4\pi G\left(\rho + \frac{p}{c^2}\right) + \frac{k c^2}{a^2}$$

the last two terms recombine via Friedmann, leaving:

$$\boxed{\,\frac{\ddot a}{a} = -\frac{4\pi G}{3}\left(\rho + \frac{3 p}{c^2}\right) + \frac{\Lambda c^2}{3}\,}$$

(I included $\Lambda$ explicitly as the modern form.) the $\rho + 3p/c^2$ combination is the "active gravitating density": pressure gravitates too, which is why radiation decelerates more than matter at fixed energy density and why $w = -1$ vacuum can drive acceleration ($\rho + 3p = -2\rho < 0$).

## 7.7 critical density and density parameters

solve Friedmann for the density that makes $k = 0$:

$$\rho_c \equiv \frac{3 H^2}{8\pi G}$$

today, $\rho_{c,0} = 1.878 \times 10^{-29}\, h^2\, \text{g cm}^{-3}$. define density parameters:

$$\Omega_i \equiv \frac{\rho_i}{\rho_c}, \qquad \Omega_\Lambda \equiv \frac{\Lambda c^2}{3 H^2}, \qquad \Omega_k \equiv -\frac{k c^2}{a^2 H^2}$$

Friedmann becomes:

$$\boxed{\,1 = \Omega_m + \Omega_r + \Omega_\Lambda + \Omega_k\,}$$

evaluated at $z$:

$$\boxed{\,\frac{H^2(z)}{H_0^2} = \Omega_{m,0}(1+z)^3 + \Omega_{r,0}(1+z)^4 + \Omega_{\Lambda,0} + \Omega_{k,0}(1+z)^2\,}$$

today (Planck): $\Omega_m \approx 0.31$, $\Omega_\Lambda \approx 0.69$, $\Omega_r \sim 9 \times 10^{-5}$, $\Omega_k = 0.001 \pm 0.002$. the universe is essentially flat.

## 7.8 cosmological distances

the comoving distance to a source at redshift $z$:

$$d_C(z) = c \int_0^z \frac{dz'}{H(z')}$$

angular-diameter distance (object of physical size $D$ subtends angle $\theta$, $D = d_A \theta$):

$$d_A(z) = \frac{d_C(z)}{1 + z} \quad (\text{flat})$$

luminosity distance (observed flux $F = L / 4\pi d_L^2$):

$$\boxed{\,d_L(z) = (1+z)^2 d_A(z) = (1+z) d_C(z)\,}$$

the two factors of $(1+z)$ come from: photon redshift (energy per photon $\propto 1/(1+z)$) + cosmological time dilation (rate of arrival $\propto 1/(1+z)$). this is the **Etherington reciprocity** relation, $d_L = (1+z)^2 d_A$, and it holds in any metric theory where photons travel on null geodesics and number is conserved. distance modulus:

$$\mu = m - M = 5 \log_{10}\left(\frac{d_L}{10\,\text{pc}}\right)$$

---

# block 8, thermal history

natural units $c = \hbar = k_B = 1$ from here.

## 8.1 equilibrium distributions

a particle species in kinetic + chemical equilibrium has phase-space distribution:

$$f(p) = \frac{1}{\exp\left(\frac{E - \mu}{T}\right) \pm 1}$$

with $+$ for fermions (Fermi-Dirac), $-$ for bosons (Bose-Einstein), and $\to 0$ for the Maxwell-Boltzmann limit ($E \gg T$).

number density and energy density (with $g$ internal dof):

$$n = \frac{g}{(2\pi)^3} \int d^3 p\, f(p), \qquad \rho = \frac{g}{(2\pi)^3} \int d^3 p\, E(p)\, f(p)$$

## 8.2 relativistic limit

for $T \gg m$ and $\mu \to 0$, doing the integrals (use $\int_0^\infty x^{n-1}/(e^x \pm 1) dx$):

bosons:
$$n_b = \frac{\zeta(3)}{\pi^2} g\, T^3, \qquad \rho_b = \frac{\pi^2}{30} g\, T^4$$

fermions:
$$n_f = \frac{3}{4}\frac{\zeta(3)}{\pi^2} g\, T^3, \qquad \rho_f = \frac{7}{8}\frac{\pi^2}{30} g\, T^4$$

total relativistic energy density:

$$\boxed{\,\rho_R = \frac{\pi^2}{30} g_*(T)\, T^4\,}$$

with effective relativistic dof:

$$g_*(T) = \sum_{\text{bosons}} g_i \left(\frac{T_i}{T}\right)^4 + \frac{7}{8} \sum_{\text{fermions}} g_i \left(\frac{T_i}{T}\right)^4$$

(species $i$ may have a different temperature $T_i$ once decoupled.)

## 8.3 entropy and entropy conservation

entropy density of a relativistic plasma:

$$s = \frac{\rho + p}{T} = \frac{4}{3} \frac{\rho}{T} = \frac{2\pi^2}{45} g_{*s}(T)\, T^3$$

with the analogous $g_{*s} = \sum_b g_i (T_i/T)^3 + (7/8)\sum_f g_i (T_i/T)^3$. (note: $T^3$ inside the sum, not $T^4$.) entropy per comoving volume is conserved during the expansion:

$$\boxed{\,S = s a^3 = \frac{2\pi^2}{45} g_{*s} T^3 a^3 = \text{const}\,}$$

so when $g_{*s}$ is constant: $T \propto 1/a$. when $g_{*s}$ drops (a species annihilates and dumps its entropy into the rest), the temperature of the species that received the entropy *increases* relative to what $1/a$ would predict.

## 8.4 temperature-time relation

in the radiation era, $\rho_R$ dominates Friedmann (and $k, \Lambda$ are negligible):

$$H^2 = \frac{8\pi G}{3} \rho_R = \frac{8\pi G}{3} \frac{\pi^2}{30} g_* T^4$$

$$\boxed{\,H = 1.66\, \sqrt{g_*}\, \frac{T^2}{M_{Pl}}\,}$$

with $M_{Pl} = 1/\sqrt{G} = 1.22 \times 10^{19}$ GeV. for radiation domination $a \propto t^{1/2}$, so $H = 1/(2 t)$. equating:

$$t = \frac{0.301}{\sqrt{g_*}}\frac{M_{Pl}}{T^2} \approx \frac{2.4}{\sqrt{g_*}}\left(\frac{1\,\text{MeV}}{T}\right)^2 \text{s}$$

so at $T \sim 1$ MeV (BBN era), $t \sim 1$ s. at $T \sim 0.1$ MeV (D synthesis), $t \sim 100$ s.

## 8.5 decoupling, $\Gamma \sim H$

a species stays in equilibrium with the bath as long as its interaction rate beats expansion:

$$\Gamma = n \langle \sigma v \rangle \gtrsim H$$

it decouples (freezes out) when $\Gamma \sim H$. for weak interactions: $\sigma_w \sim G_F^2 T^2$ at $T \ll m_W$, $n \sim T^3$, so $\Gamma_w \sim G_F^2 T^5$. set equal to $H \sim T^2/M_{Pl}$:

$$G_F^2 T^5 \sim \frac{T^2}{M_{Pl}} \;\Rightarrow\; T_{\text{dec}} \sim (M_{Pl}\, G_F^2)^{-1/3} \sim 1\, \text{MeV}$$

this is **neutrino decoupling**.

## 8.6 $T_\nu / T_\gamma = (4/11)^{1/3}$

just after neutrino decoupling at $T \sim 1$ MeV, the bath contains $\gamma + e^\pm + \nu$, all at the same temperature $T$ (because everyone was in equilibrium just before $\nu$ decoupling). but $\nu$ is now sterile to the rest.

as $T$ drops below $m_e \sim 0.511$ MeV, $e^\pm$ pairs annihilate to photons. their entropy is dumped into the photon bath only, not the neutrino bath.

count $g_{*s}$ for the photon-coupled bath:

before $e^\pm$ annihilation: $g_{*s}^{(\gamma)} = g_\gamma + (7/8)(g_{e^-} + g_{e^+}) = 2 + (7/8)(4) = 11/2$.

after: $g_{*s}^{(\gamma)} = g_\gamma = 2$.

entropy conservation in the photon-coupled bath ($s_\gamma a^3$ const):

$$\frac{11}{2} T^3_{\text{before}} a^3_{\text{before}} = 2\, T_\gamma^3 a^3_{\text{after}}$$

at the moment just after annihilation, comoving volume is the same, so $T_\gamma^3 = (11/4) T^3_{\text{before}}$. but neutrinos didn't get the entropy injection: their temperature still scales as $T_\nu \propto 1/a$ from the moment of decoupling, when it equalled $T_{\text{before}}$. so:

$$\boxed{\,\frac{T_\nu}{T_\gamma} = \left(\frac{4}{11}\right)^{1/3} \approx 0.714\,}$$

today: $T_\gamma = 2.725$ K, $T_\nu \approx 1.945$ K. effective number of neutrinos $N_{\text{eff}} = 3.046$.

## 8.7 Saha equation and recombination

equilibrium reaction $e^- + p \leftrightarrow H + \gamma$. chemical equilibrium requires $\mu_e + \mu_p = \mu_H$ (photons have $\mu = 0$). non-relativistic equilibrium number density for species $i$:

$$n_i = g_i \left(\frac{m_i T}{2\pi}\right)^{3/2} e^{(\mu_i - m_i)/T}$$

combine, use $m_p \approx m_H$ and $g_e g_p / g_H = 1$:

$$\frac{n_e n_p}{n_H} = \left(\frac{m_e T}{2\pi}\right)^{3/2} e^{-B_H / T}, \qquad B_H = m_p + m_e - m_H = 13.6\,\text{eV}$$

this is the **Saha equation**. define ionisation fraction $X_e = n_e / n_b$, with charge neutrality $n_e = n_p$ and $n_H = n_b - n_p = n_b(1 - X_e)$:

$$\boxed{\,\frac{X_e^2}{1 - X_e} = \frac{1}{n_b}\left(\frac{m_e T}{2\pi}\right)^{3/2} e^{-B_H/T}\,}$$

with $n_b = \eta n_\gamma = \eta (2 \zeta(3)/\pi^2) T^3$:

$$\frac{X_e^2}{1 - X_e} = \frac{1}{\eta} \frac{1}{2\zeta(3)/\pi^2} \left(\frac{m_e}{2\pi T}\right)^{3/2} e^{-B_H/T}$$

setting $X_e = 1/2$ and solving numerically gives $T \approx 0.32$ eV, $z \approx 1370$, much below $B_H = 13.6$ eV. the reason recombination is delayed: the prefactor $1/\eta \sim 10^{10}$ means there are a billion photons per baryon, so even after the average photon energy has dropped well below $B_H$, the high-energy tail still ionises hydrogen. a similar entropy-tail argument explains why BBN happens at $T \sim 0.1$ MeV instead of $T \sim B_D \sim 2.2$ MeV.

(in reality recombination is non-equilibrium, treated by a Peebles three-level atom. Saha gives the right *onset* but not the residual $X_e \sim 10^{-3}$ left over.)

## 8.8 BBN, n/p ratio and freeze-out

before $T \sim 0.8$ MeV, weak reactions $n + \nu_e \leftrightarrow p + e^-$, $n + e^+ \leftrightarrow p + \bar\nu_e$, $n \leftrightarrow p + e^- + \bar\nu_e$ are fast. equilibrium n/p:

$$\left(\frac{n}{p}\right)_{eq} = e^{-Q/T}, \qquad Q = m_n - m_p = 1.293\,\text{MeV}$$

freeze-out when $\Gamma_w \sim H$. with $\Gamma_w \sim G_F^2 T^5$:

$$T_f \approx 0.8\,\text{MeV} \;\Rightarrow\; \left(\frac{n}{p}\right)_f \approx e^{-1.293/0.8} \approx 0.20 \approx \frac{1}{5}$$

between freeze-out and D synthesis (a few hundred seconds), free neutrons decay with $\tau_n = 880$ s:

$$\left(\frac{n}{p}\right)_{BBN} \approx \frac{1}{5} \cdot e^{-t_{BBN}/\tau_n} \approx \frac{1}{7}$$

once D survives at $T \sim 0.07$ MeV, essentially all neutrons get locked into $^4$He (binding energy 28 MeV per nucleus is the highest in the chain). mass fraction:

$$\boxed{\,Y_p \equiv X_4 = \frac{2(n/p)}{1 + (n/p)} \approx \frac{2(1/7)}{8/7} = \frac{1}{4} = 0.25\,}$$

observed value (extragalactic HII regions): $Y_p \approx 0.245$. ✓

## 8.9 baryon-to-photon ratio $\eta$

$$\eta \equiv \frac{n_b}{n_\gamma}$$

photon number density at $T_0 = 2.725$ K:

$$n_\gamma = \frac{2 \zeta(3)}{\pi^2} T_0^3 \approx 411\,\text{cm}^{-3}$$

baryon number density:

$$n_b = \frac{\rho_b}{m_p} = \frac{\Omega_b \rho_c}{m_p} = \frac{3 H_0^2 \Omega_b}{8\pi G m_p}$$

ratio:

$$\boxed{\,\eta \approx 2.74 \times 10^{-8}\, \Omega_b h^2 \approx 6.1 \times 10^{-10}\,}$$

(with $\Omega_b h^2 = 0.0224$ from Planck.) BBN and CMB give independent measurements of $\eta$ that agree, one of the great quantitative successes of standard cosmology.

## 8.10 slow-roll inflation, brief

scalar field $\phi$ minimally coupled to gravity:

$$S = \int d^4 x\, \sqrt{-g}\left[\frac{1}{2}(\partial\phi)^2 - V(\phi)\right]$$

stress-energy of a homogeneous $\phi(t)$:

$$\rho_\phi = \frac{1}{2}\dot\phi^2 + V(\phi), \qquad p_\phi = \frac{1}{2}\dot\phi^2 - V(\phi)$$

equation of state:

$$w_\phi = \frac{\frac{1}{2}\dot\phi^2 - V}{\frac{1}{2}\dot\phi^2 + V}$$

slow-roll regime: $\dot\phi^2 \ll V$. then $w_\phi \approx -1$ and $\rho_\phi \approx V \approx$ const, so Friedmann gives $H \approx \sqrt{8\pi G V/3} \approx$ const, hence $a(t) \propto e^{H t}$. de Sitter expansion.

Klein-Gordon in expanding background:

$$\ddot\phi + 3 H \dot\phi + V'(\phi) = 0$$

slow-roll approximation drops $\ddot\phi$:

$$3 H \dot\phi \approx -V'(\phi)$$

slow-roll parameters (with $M_{Pl}^{-2} = 8\pi G$):

$$\epsilon = \frac{M_{Pl}^2}{2}\left(\frac{V'}{V}\right)^2, \qquad \eta_V = M_{Pl}^2 \frac{V''}{V}$$

inflation lasts while $\epsilon, |\eta_V| \ll 1$, ends when $\epsilon \to 1$. number of e-folds from $\phi$ to end:

$$N = \int H\, dt = \frac{1}{M_{Pl}^2} \int_{\phi_{end}}^{\phi} \frac{V}{V'}\, d\phi$$

solving the horizon and flatness problems requires $N \gtrsim 60$.

---

# block 9, formation of cosmic structure

## 9.1 linear perturbation equations in expanding background

start from Newtonian fluid equations on a self-gravitating dust:

continuity: $\partial_t \rho + \nabla \cdot (\rho \vec u) = 0$

Euler: $\partial_t \vec u + (\vec u \cdot \nabla)\vec u = -\nabla \Phi - \frac{\nabla p}{\rho}$

Poisson: $\nabla^2 \Phi = 4\pi G \rho$

split into background + perturbation. background is homogeneous expansion: $\bar\rho(t)$, $\bar{\vec u} = H \vec r$ (Hubble flow), $\bar\Phi$ from Poisson. write perturbations:

$$\rho = \bar\rho (1 + \delta), \quad \vec u = H \vec r + \vec v, \quad \Phi = \bar\Phi + \phi$$

go to comoving coordinates $\vec x = \vec r / a$ and treat $\vec v$ as the peculiar velocity. linearise (drop $O(\delta^2)$ terms, $O(v^2)$, etc.). after some algebra:

continuity: $\dot\delta + \frac{1}{a} \nabla_x \cdot \vec v = 0$

Euler: $\dot{\vec v} + H \vec v = -\frac{1}{a} \nabla_x \phi - \frac{c_s^2}{a} \nabla_x \delta$

Poisson: $\nabla_x^2 \phi = 4\pi G a^2 \bar\rho\, \delta$

(I used $\nabla p / \rho \approx c_s^2 \nabla \delta$ for small adiabatic perturbations.)

take divergence of Euler, substitute continuity to eliminate $\vec v$, and use Poisson to eliminate $\phi$. Fourier transform $\delta(\vec x, t) = \int (d^3 k / (2\pi)^3)\, \delta_k(t)\, e^{i \vec k \cdot \vec x}$:

$$\boxed{\,\ddot\delta_k + 2 H \dot\delta_k + \left(\frac{c_s^2 k^2}{a^2} - 4\pi G \bar\rho\right) \delta_k = 0\,}$$

this is the master equation for linear matter perturbations. three terms: damping by Hubble friction, pressure restoring force ($\propto k^2$, opposes collapse), gravitational driving ($\propto -\bar\rho$, drives collapse).

## 9.2 Jeans length

setting the bracket to zero gives the dividing scale between pressure-supported and gravitationally-collapsing modes:

$$\frac{c_s^2 k_J^2}{a^2} = 4\pi G \bar\rho$$

$$k_J = \frac{a}{c_s} \sqrt{4\pi G \bar\rho}, \qquad \boxed{\,\lambda_J = \frac{2\pi a}{k_J} = c_s \sqrt{\frac{\pi}{G \bar\rho}}\,}$$

Jeans mass:

$$M_J = \frac{4\pi}{3} \bar\rho \left(\frac{\lambda_J}{2}\right)^3$$

modes with $\lambda > \lambda_J$ ($k < k_J$) are unstable and grow. modes with $\lambda < \lambda_J$ oscillate as sound waves.

## 9.3 growth in a matter-dominated universe (EdS)

Einstein-de Sitter: $\Omega_m = 1$, flat, no $\Lambda$. then $a \propto t^{2/3}$, $H = 2/(3 t)$, and Friedmann gives $4\pi G \bar\rho = \frac{3}{2} H^2 = 2/(3 t^2)$.

for $k \to 0$ (super-Jeans, pressure negligible) the master equation becomes:

$$\ddot\delta + \frac{4}{3 t} \dot\delta - \frac{2}{3 t^2}\delta = 0$$

power-law ansatz $\delta \propto t^n$:

$$n(n-1) + \frac{4}{3} n - \frac{2}{3} = 0 \;\Rightarrow\; n = \frac{2}{3}\;\text{or}\; n = -1$$

so the general solution is:

$$\boxed{\,\delta(t) = A\, t^{2/3} + B\, t^{-1} \;\propto\; A\, a + B\, a^{-3/2}\,}$$

the growing mode is $\delta \propto a$. this is the headline result: in matter domination, perturbations grow linearly with the scale factor.

## 9.4 Mészáros suppression in radiation era

before matter-radiation equality, $\bar\rho \approx \bar\rho_r$ and $\bar\rho_m \ll \bar\rho_r$. the source term $4\pi G \bar\rho_m$ in the master equation is tiny compared to Hubble friction set by radiation. effectively:

$$\ddot\delta_m + 2 H \dot\delta_m \approx 0$$

with $H = 1/(2 t)$ (radiation era): $\ddot\delta + (1/t) \dot\delta = 0$. solutions:

$$\delta_m = \text{const} + C \ln t$$

so subhorizon matter perturbations only grow **logarithmically** during the radiation era. once equality is passed, they resume the EdS $\delta \propto a$ growth, but with their amplitude reduced by the time spent frozen. this **Mészáros effect** shifts the matter power spectrum's turnover to the equality scale and is responsible for the characteristic shape of $P(k)$.

## 9.5 spherical collapse and $\delta_c = 1.686$

a spherical overdensity decoupled from the background acts as its own closed Friedmann universe (Birkhoff). its evolution has the parametric cycloid solution:

$$r(\theta) = A(1 - \cos\theta), \qquad t(\theta) = B(\theta - \sin\theta), \qquad A^3 = G M B^2$$

key moments:

- turnaround ($\dot r = 0$) at $\theta = \pi$: $r_{ta} = 2 A$, $t_{ta} = \pi B$.
- collapse ($r = 0$) at $\theta = 2\pi$: $t_c = 2 t_{ta} = 2\pi B$.

now extrapolate the *linear* density contrast to the moment of collapse using the EdS growth $\delta \propto t^{2/3}$. starting from a small initial overdensity matched to the cycloid amplitude, the calculation gives:

$$\boxed{\,\delta_c = \frac{3}{20}(12\pi)^{2/3} \approx 1.686\,}$$

this is the value the *linear* theory says the perturbation reaches at the moment the *nonlinear* sphere collapses. it's a calibration constant in halo abundance theory.

after collapse the system virialises at $r_{vir} = r_{ta}/2$, giving a virial overdensity (relative to the *mean* matter density at virialisation) of:

$$\Delta_{vir} = 18\pi^2 \approx 178$$

(sometimes quoted as $\sim 200$, hence "$M_{200}$" for halo mass.)

## 9.6 Press-Schechter mass function

assume the linear density field $\delta(\vec x)$, smoothed on scale $R$ (top-hat or Gaussian filter $W$), is Gaussian with variance:

$$\sigma^2(R) = \int \frac{dk}{k}\, \Delta^2(k)\, |W(k R)|^2, \qquad \Delta^2(k) = \frac{k^3 P(k)}{2\pi^2}$$

associate scale $R$ with mass $M = (4\pi/3) \bar\rho R^3$. probability that a given point has $\delta_R > \delta_c$:

$$F(>\delta_c\, |\, M) = \int_{\delta_c}^{\infty} \frac{d\delta}{\sqrt{2\pi}\sigma} e^{-\delta^2/2\sigma^2} = \frac{1}{2}\,\text{erfc}\left(\frac{\delta_c}{\sqrt{2}\sigma(M)}\right)$$

Press-Schechter argument: the fraction of mass in halos of mass $> M$ at redshift $z$ equals this probability, *times 2* (the famous fudge factor that fixes the cloud-in-cloud problem and is rigorously justified by the excursion-set / Bond-Cole-Efstathiou-Kaiser derivation).

differentiate to get number density per mass interval:

$$\boxed{\,\frac{dn}{dM} = \sqrt{\frac{2}{\pi}}\, \frac{\bar\rho}{M^2}\, \frac{\delta_c}{\sigma(M)}\, \left|\frac{d\ln\sigma}{d\ln M}\right|\, \exp\left(-\frac{\delta_c^2}{2\sigma^2(M)}\right)\,}$$

the exponential cutoff at high mass (where $\sigma(M) \to 0$) reflects the rarity of large overdensities in a Gaussian field. this gets the cluster mass function approximately right and is the founding result of analytic structure-formation theory.

---

# the cheat-sheet version (for the last 48 hours)

if I had to compress all of blocks 7-9 onto one page, this is what would be on it:

| derivation | starting point | key step | final form |
|---|---|---|---|
| Friedmann | Newtonian energy on a comoving shell | identify $-2E/(mr^2c^2) = k$ | $H^2 = (8\pi G/3)\rho - kc^2/a^2$ |
| continuity | $dU + p dV = 0$, $U = \rho c^2 a^3$ | divide by $a^3 c^2$ | $\dot\rho + 3H(\rho + p/c^2) = 0$ |
| $\rho(a)$ | continuity + $p = w\rho c^2$ | integrate $d\ln\rho/d\ln a = -3(1+w)$ | $\rho \propto a^{-3(1+w)}$ |
| acceleration | differentiate Friedmann + sub continuity | combine | $\ddot a/a = -(4\pi G/3)(\rho + 3p/c^2) + \Lambda/3$ |
| $1+z$ | RW null geodesic, two crests | $\delta t / a$ const | $1+z = a_0/a_e$ |
| $d_L$ | flux = $L/4\pi d_L^2$, photon redshift + time dilation | two factors of $(1+z)$ | $d_L = (1+z)^2 d_A = (1+z) d_C$ |
| $\rho_R$ | BE / FD integrals | fermion 7/8 factor | $\rho_R = (\pi^2/30) g_* T^4$ |
| $sa^3 = $ const | $s = (\rho+p)/T$, adiabatic expansion | $g_{*s} T^3 a^3$ const | $T \propto 1/a$ when $g_{*s}$ const |
| $T(t)$ | radiation Friedmann + $a \propto t^{1/2}$ | $H = 1/(2t)$ | $t \approx 2.4/\sqrt{g_*}\,(1\,\text{MeV}/T)^2$ s |
| decoupling | $\Gamma \sim H$ | $G_F^2 T^5 \sim T^2/M_{Pl}$ | $T_{dec,\nu} \sim 1$ MeV |
| $T_\nu/T_\gamma$ | $g_{*s,\gamma}$ goes $11/2 \to 2$ at $e^\pm$ annihil | only photons get the entropy | $(4/11)^{1/3}$ |
| Saha | $\mu_e + \mu_p = \mu_H$ | non-rel equilibrium n | $X_e^2/(1-X_e) = (1/n_b)(m_e T/2\pi)^{3/2} e^{-B_H/T}$ |
| BBN $Y_p$ | n/p freeze-out at 0.8 MeV, decay to D synthesis | $(n/p) \to 1/7$ | $Y_p = 2(n/p)/(1+(n/p)) \approx 0.25$ |
| $\eta$ | $n_b/n_\gamma$ today | $n_\gamma = 411$ cm$^{-3}$ | $\eta \approx 6.1 \times 10^{-10}$ |
| master pert eq | continuity + Euler + Poisson, linearised | divergence + Fourier | $\ddot\delta + 2H\dot\delta + (c_s^2 k^2/a^2 - 4\pi G\bar\rho)\delta = 0$ |
| Jeans | bracket = 0 | solve for $k_J$ | $\lambda_J = c_s \sqrt{\pi/G\bar\rho}$ |
| growth EdS | $a \propto t^{2/3}$, drop pressure | power law $t^n$ | $\delta \propto a$ (and decaying $a^{-3/2}$) |
| Mészáros | $\bar\rho_m \ll \bar\rho_r$, $H = 1/2t$ | source negligible | $\delta_m \propto \ln t$ |
| spherical collapse | closed-Friedmann cycloid | linear extrapolation to $t_c$ | $\delta_c \approx 1.686$, $\Delta_{vir} = 18\pi^2$ |
| Press-Schechter | Gaussian smoothed field, $P(\delta > \delta_c)$ | factor of 2 by hand | $dn/dM \propto (\delta_c/\sigma) \lvert d\ln\sigma/d\ln M\rvert e^{-\delta_c^2/2\sigma^2}/M^2$ |

---

## see also

- [[Newtonian Friedmann derivation]], [[Friedmann equations with Lambda|Friedmann equations with Λ]], [[Friedmann models]]
- [[Cosmological distances derivation]], [[Hubble law derivation low-z]], [[Hubble law exact form]]
- [[Robertson-Walker metric derivation]]
- [[Brief thermal history]], [[Thermal equilibrium in the early universe]]
- [[Conservation of entropy in a comoving volume]], [[Temperature-time relation]]
- [[BBN_overview]], [[BBN_neutron_proton_ratio]], [[BBN_three_steps]], [[BBN_baryon_to_photon_ratio]]
- [[Saha equation and recombination]], [[Decoupling and freeze-out]]
- [[Inflaton scalar field dynamics]], [[Old vs new vs chaotic inflation, slow-roll]]
- [[Linear evolution of perturbations in expanding universe]]
- [[Jeans analysis in expanding universe]], [[Growth factor D(z)]]
- [[Spherical collapse]], [[Press-Schechter halo mass function]]
- back to the trunk: [[Fundamentals_Astrophysics_Cosmology_MOC]]
