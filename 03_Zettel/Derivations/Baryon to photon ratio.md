---
layout: default
title: "Baryon to photon ratio"
---
## what I'm deriving

$$\eta \equiv \frac{n_b}{n_\gamma} = 2.73 \times 10^{-8}\;\Omega_b h^2 \approx 6.1 \times 10^{-10}$$

a number that is constant after $e^\pm$ annihilation and that controls the timing of recombination and of nucleosynthesis.

## conventions and symbols

| symbol | meaning | value |
|---|---|---|
| $n_b$ | number density of baryons (nucleons, free or in nuclei) | |
| $n_\gamma$ | number density of CMB photons | |
| $T_0$ | CMB temperature today | $2.7255$ K $= 2.349 \times 10^{-4}$ eV |
| $\Omega_b h^2$ | physical baryon density parameter | $0.0224$ |
| $\rho_{c,0}$ | critical density today | $1.878 \times 10^{-29}\,h^2$ g cm$^{-3}$ |
| $m_p$ | proton mass | $1.6726 \times 10^{-24}$ g |
| $\hbar c$ | conversion constant | $1.9733 \times 10^{-5}$ eV cm |

## derivation

### step 1 - photon number density today

from [[Relativistic number and energy density]] with $g = 2$, boson, $\mu = 0$,

$$n_\gamma = \frac{2\zeta(3)}{\pi^2}\,T^3 \quad\longrightarrow\quad n_\gamma = \frac{2\zeta(3)}{\pi^2}\left(\frac{k_BT_0}{\hbar c}\right)^3\ \text{with units restored}$$

numbers. $2\zeta(3)/\pi^2 = 0.2436$. $k_BT_0/\hbar c = 2.349 \times 10^{-4}/1.9733 \times 10^{-5}$ cm$^{-1} = 11.90$ cm$^{-1}$, whose cube is $1686$ cm$^{-3}$.

$$n_{\gamma,0} = 0.2436 \times 1686 = 410.7\ \text{cm}^{-3}$$

this is a measurement of $T_0$ and nothing else. the CMB is a blackbody to a few parts in $10^5$.

### step 2 - baryon number density today

from [[Critical density and density parameters]], $\rho_{b,0} = \Omega_b\,\rho_{c,0}$. divide by the mass per baryon.

$$n_{b,0} = \frac{\Omega_b\,\rho_{c,0}}{m_p} = \frac{3H_0^2\,\Omega_b}{8\pi G\,m_p} = \frac{1.878 \times 10^{-29}}{1.6726 \times 10^{-24}}\;\Omega_bh^2\ \text{cm}^{-3}$$

$$n_{b,0} = 1.123 \times 10^{-5}\;\Omega_bh^2\ \text{cm}^{-3} \approx 2.5 \times 10^{-7}\ \text{cm}^{-3}$$

about one baryon per four cubic metres. the $h^2$ in $\rho_{c,0}$ combines with $\Omega_b$ into the product $\Omega_bh^2$, which is why that product is the quantity quoted. using $m_p$ as the mass per baryon ignores the nuclear binding energy of helium, an error below $1\%$.

### step 3 - the ratio

$$\eta = \frac{n_{b,0}}{n_{\gamma,0}} = \frac{1.123 \times 10^{-5}}{410.7}\;\Omega_bh^2$$

$$\boxed{\, \eta = 2.73 \times 10^{-8}\;\Omega_b h^2 \,}$$

with $\Omega_bh^2 = 0.0224$,

$$\boxed{\, \eta \approx 6.1 \times 10^{-10} \,}$$

often written $\eta_{10} \equiv 10^{10}\eta \approx 6.1$, and $\eta_{10} = 273.3\;\Omega_bh^2$. the inverse is $1.6 \times 10^9$ photons per baryon.

## why $\eta$ is constant in time

- **baryons.** baryon number is conserved at all temperatures relevant here, so $n_b\,a^3 = $ const exactly.
- **photons.** photon number is not conserved by any law. but in equilibrium $n_\gamma \propto T^3$, and [[Entropy conservation cosmology]] gives $g_{*s}T^3a^3 = $ const. so $n_\gamma a^3 \propto 1/g_{*s}$, constant whenever $g_{*s}$ is constant. after decoupling, photons are simply conserved and $n_\gamma \propto a^{-3}$.

$$\eta \propto \frac{n_ba^3}{n_\gamma a^3} \propto g_{*s}(T)$$

so $\eta$ is constant after the last change of $g_{*s}$ that affects the photons, which is $e^\pm$ annihilation at $T \lesssim 0.05$ MeV. before that, $\eta$ was larger. across $e^\pm$ annihilation $n_\gamma a^3$ grows by $11/4$, so $\eta$ before was $11/4$ times the present value. nucleosynthesis at $T \approx 0.07$ MeV happens near the end of this change, and the quoted $\eta$ is the value after it.

the quantity that is constant at all times is the baryon number per unit entropy,

$$\frac{n_b}{s} = \frac{\eta}{7.04} \approx 8.7 \times 10^{-11}$$

with $s_0 = 7.04\,n_{\gamma,0}$.

## the role of $\eta$

$\eta$ is the small number behind every delayed transition in the thermal history. bound states of binding energy $B$ do not form at $T \sim B$. they form when the fraction of photons above $B$ drops below roughly $\eta$, that is at $T \sim B/\ln(\eta^{-1}\times\text{prefactors})$.

| transition | binding energy | naive $T$ | actual $T$ |
|---|---|---|---|
| deuterium, start of BBN | $2.22$ MeV | $\sim 2$ MeV | $0.07$ MeV |
| hydrogen recombination | $13.6$ eV | $\sim 14$ eV | $0.32$ eV |

see [[BBN helium fraction]] and [[Saha equation derivation]].

## two independent measurements

1. **nucleosynthesis.** the primordial D/H ratio falls steeply with $\eta$ (more baryons burn deuterium more completely). D/H $= (2.53 \pm 0.03) \times 10^{-5}$ in high-redshift absorbers gives $\Omega_bh^2 \approx 0.0222$, $\eta_{10} \approx 6.1$. physics at $t \sim 3$ minutes, $T \sim 0.1$ MeV.
2. **CMB acoustic peaks.** baryons add inertia to the photon-baryon fluid. this enhances the compression (odd) peaks relative to the rarefaction (even) peaks. Planck gives $\Omega_bh^2 = 0.0224 \pm 0.0001$. physics at $t \sim 380{,}000$ yr, $T \sim 0.3$ eV.

the two epochs differ by more than five orders of magnitude in temperature and the results agree at the percent level. this agreement is a strong test of the whole thermal history, including entropy conservation between the two epochs.

## why $\eta$ is small and not zero

at $T \gg 1$ GeV quarks and antiquarks are both in equilibrium with $n_q \approx n_{\bar q} \sim n_\gamma$. if their numbers were exactly equal, annihilation would continue until freeze-out and leave $n_b/n_\gamma \sim 10^{-19}$, with equal amounts of matter and antimatter. the observed $\eta$ is some nine orders of magnitude larger and there is no antimatter. so the early universe had an asymmetry

$$\frac{n_q - n_{\bar q}}{n_q + n_{\bar q}} \sim \eta \sim 10^{-9}$$

about one extra quark per billion pairs. generating it from symmetric initial conditions (baryogenesis) requires the three Sakharov conditions, which are baryon number violation, C and CP violation, and departure from thermal equilibrium. the Standard Model contains all three in principle but far too weakly. the origin of $\eta$ is an open problem.

## checks

- **dimensions.** $\eta$ is a pure number.
- **mass density check.** $n_{b,0}m_p = 2.5 \times 10^{-7} \times 1.67 \times 10^{-24} = 4.2 \times 10^{-31}$ g cm$^{-3}$, which is $\Omega_b\rho_{c,0} = 0.049 \times 8.5 \times 10^{-30}$. consistent.
- **energy comparison.** photons outnumber baryons by $10^9$ but each carries only $2.7\,k_BT_0 = 6 \times 10^{-4}$ eV against $938$ MeV, so today $\rho_b/\rho_\gamma \approx 900$.

## questions I should be ready for

- *why $\Omega_bh^2$ and not $\Omega_b$?* $n_b \propto \rho_b \propto \Omega_bH_0^2$. the physical density is what enters.
- *is $n_\gamma$ conserved?* not by a conservation law, but $n_\gamma a^3$ is constant whenever $g_{*s}$ is, and exactly constant after decoupling.
- *was $\eta$ the same during BBN?* nearly. it reaches its final value at the end of $e^\pm$ annihilation.
- *which light element measures $\eta$ best?* deuterium.
- *what does $\eta$ tell me about entropy?* the entropy per baryon is $7.04/\eta \sim 10^{10}$.

## board summary (60 seconds)

photons from the blackbody at $T_0 = 2.7255$ K, $n_\gamma = (2\zeta(3)/\pi^2)(k_BT_0/\hbar c)^3 = 411$ cm$^{-3}$. baryons from $n_b = \Omega_b\rho_{c,0}/m_p = 1.12 \times 10^{-5}\,\Omega_bh^2$ cm$^{-3}$. ratio $\eta = 2.73 \times 10^{-8}\,\Omega_bh^2 = 6.1 \times 10^{-10}$. constant because $n_b \propto a^{-3}$ and $n_\gamma \propto T^3 \propto a^{-3}$ after $e^\pm$ annihilation. measured independently by D/H and by the CMB peaks.

## see also

- [[Relativistic number and energy density]] supplies $n_\gamma$.
- [[Critical density and density parameters]] supplies $\rho_{c,0}$.
- [[Entropy conservation cosmology]] explains why $\eta$ is conserved.
- [[Saha equation derivation]] uses $\eta$ for the recombination delay.
- [[BBN helium fraction]] uses $\eta$ for the deuterium bottleneck.
