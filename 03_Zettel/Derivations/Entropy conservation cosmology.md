---
layout: default
title: "Entropy conservation cosmology"
---
## what I'm deriving

1. the entropy density of a fluid in equilibrium with $\mu = 0$,
$$s = \frac{\rho + P}{T}$$
2. its conservation in a comoving volume,
$$\frac{d}{dt}\left(s\,a^3\right) = 0, \qquad s\,a^3 = \frac{2\pi^2}{45}\, g_{*s}(T)\, T^3 a^3 = \text{const}$$
3. the consequence $T \propto g_{*s}^{-1/3}\,a^{-1}$.

natural units $c = \hbar = k_B = 1$. $P$ is the pressure.

## conventions and symbols

| symbol | meaning |
|---|---|
| $V = a^3$ | physical volume of a unit comoving volume |
| $U = \rho V$ | energy in that volume |
| $S = sV$ | entropy in that volume |
| $g_{*s}$ | effective number of relativistic degrees of freedom in entropy |

## assumptions

1. the fluid is in local thermal equilibrium, so $\rho$ and $P$ are functions of $T$ only.
2. chemical potentials are negligible, $|\mu_i| \ll T$.
3. the expansion is slow compared with the interaction rates, so the evolution is quasi-static.

## derivation

### step 1 - first law as a statement about $S(T, V)$

for the fluid in a volume $V$ with $\mu = 0$,

$$T\,dS = dU + P\,dV = d(\rho V) + P\,dV = V\frac{d\rho}{dT}\,dT + (\rho + P)\,dV$$

reading off the two partial derivatives,

$$\frac{\partial S}{\partial V}\bigg|_T = \frac{\rho + P}{T}, \qquad \frac{\partial S}{\partial T}\bigg|_V = \frac{V}{T}\frac{d\rho}{dT}$$

### step 2 - integrability condition

$S$ is a state function, so its mixed second derivatives are equal, $\partial_T\partial_VS = \partial_V\partial_TS$.

$$\frac{d}{dT}\left(\frac{\rho + P}{T}\right) = \frac{1}{T}\frac{d\rho}{dT}$$

expand the left side.

$$\frac{1}{T}\frac{d\rho}{dT} + \frac{1}{T}\frac{dP}{dT} - \frac{\rho + P}{T^2} = \frac{1}{T}\frac{d\rho}{dT}$$

$$\boxed{\, \frac{dP}{dT} = \frac{\rho + P}{T} \,}$$

a relation between pressure and energy density that holds for any equilibrium fluid with $\mu = 0$.

### step 3 - integrate $dS$

I claim $S = (\rho + P)V/T$ up to an additive constant. check by differentiating and using step 2.

$$d\left[\frac{(\rho + P)V}{T}\right] = \frac{\rho + P}{T}\,dV + V\left[\frac{1}{T}\frac{d\rho}{dT} + \underbrace{\frac{1}{T}\frac{dP}{dT} - \frac{\rho + P}{T^2}}_{=\,0}\right]dT = \frac{\rho + P}{T}\,dV + \frac{V}{T}\frac{d\rho}{dT}\,dT$$

which is exactly $dS$ from step 1. the constant is zero by the third law. dividing by $V$,

$$\boxed{\, s \equiv \frac{S}{V} = \frac{\rho + P}{T} \,}$$

with a chemical potential the general form is $s = (\rho + P - \mu n)/T$.

### step 4 - conservation

apply step 1 to the comoving volume $V = a^3$ and divide by $dt$.

$$T\frac{dS}{dt} = \frac{d(\rho a^3)}{dt} + P\frac{d(a^3)}{dt} = a^3\left[\dot\rho + 3H(\rho + P)\right]$$

the bracket is the left side of the [[Continuity equation cosmology]] and vanishes.

$$\boxed{\, \frac{d}{dt}\left(s\,a^3\right) = 0 \,}$$

the logic matters. the continuity equation was derived by assuming $\delta Q = 0$. here I show that the same equation implies $dS = 0$ exactly, as long as the fluid is in equilibrium. the expansion is adiabatic and reversible.

### step 5 - explicit form for radiation

for relativistic species $P = \rho/3$, so $s = 4\rho/(3T)$. for one bosonic species at temperature $T_i$,

$$s_i = \frac{4}{3T_i}\cdot\frac{\pi^2}{30}g_iT_i^4 = \frac{2\pi^2}{45}g_iT_i^3$$

and $7/8$ of that for a fermion. summing and factoring out the photon temperature $T$,

$$\boxed{\, s = \frac{2\pi^2}{45}\, g_{*s}(T)\, T^3, \qquad g_{*s} = \sum_{\rm bosons} g_i \left(\frac{T_i}{T}\right)^3 + \frac{7}{8}\sum_{\rm fermions} g_i \left(\frac{T_i}{T}\right)^3 \,}$$

non-relativistic species contribute $s_i \approx (m_i/T)\,n_i \propto e^{-m_i/T}$ with $\mu = 0$, which is negligible. the entropy of the universe is carried by the relativistic species.

### step 6 - temperature as a function of scale factor

$$g_{*s}(T)\,T^3a^3 = \text{const} \quad\Longrightarrow\quad \boxed{\, T \propto g_{*s}^{-1/3}(T)\;a^{-1} \,}$$

while $g_{*s}$ is constant, $T \propto 1/a$.

## what happens when a species annihilates

when $T$ drops below the mass of a species still coupled to the plasma, its particles annihilate and $g_{*s}$ decreases from $g_{*s}^{\rm before}$ to $g_{*s}^{\rm after}$. the entropy they carried is transferred to the remaining coupled species. from step 6, comparing a scale factor $a_1$ before with $a_2$ after,

$$\frac{a_2T_2}{a_1T_1} = \left(\frac{g_{*s}^{\rm before}}{g_{*s}^{\rm after}}\right)^{1/3} > 1$$

the temperature never actually rises. it falls more slowly than $1/a$ during the annihilation.

a species that has already decoupled does not share in this. its own entropy $s_ia^3 \propto T_i^3a^3$ is conserved separately, so $T_i \propto 1/a$ throughout, and it ends up colder than the plasma. the standard example is $e^\pm$ annihilation after neutrino decoupling, which gives the [[Neutrino temperature ratio]] $T_\nu/T_\gamma = (4/11)^{1/3}$.

## why $s$ is the natural normalisation

since $sa^3$ is constant, $s \propto a^{-3}$ exactly, through every annihilation threshold. any conserved particle number $N_X = n_Xa^3$ then gives a constant ratio $Y_X \equiv n_X/s$. this is the yield used for relic abundances.

the photon number density is almost as good, $n_\gamma \propto T^3$, but $n_\gamma a^3$ jumps whenever $g_{*s}$ changes. today

$$s_0 = \frac{2\pi^2}{45}g_{*s,0}T_0^3 = \frac{\pi^4}{45\,\zeta(3)}\,g_{*s,0}\,n_{\gamma,0} = 1.80\times 3.91\, n_{\gamma,0} \approx 7.04\, n_{\gamma,0} \approx 2890\ \text{cm}^{-3}$$

so the [[Baryon to photon ratio]] is constant after $e^\pm$ annihilation and $n_b/s = \eta/7.04$ is constant always.

## checks

- **step 2 on radiation.** $\rho = AT^4$, $P = AT^4/3$. $dP/dT = 4AT^3/3$ and $(\rho + P)/T = 4AT^3/3$. they agree.
- **step 2 on dust with $\mu = 0$.** $P = nT$ and $\rho \approx mn$ with $n \propto T^{3/2}e^{-m/T}$. $dP/dT \approx (m/T)\,n$ and $(\rho + P)/T \approx (m/T)\,n$. they agree at leading order.
- **dimensions.** $s$ has units of $T^3$, a number density, which is why $s/n_\gamma$ is a pure number.
- **magnitude.** entropy per baryon is $s/n_b \approx 7.04/\eta \approx 10^{10}$. the universe is very hot per baryon, which is what delays recombination and nucleosynthesis.

## when the assumption fails

entropy in a comoving volume increases if something happens out of equilibrium. examples are the decay of a massive particle that had decoupled, a first-order phase transition with supercooling, and reheating after inflation. none of these is part of the standard thermal history below $T \sim 100$ GeV. the QCD and electroweak transitions are smooth crossovers in the Standard Model.

## questions I should be ready for

- *why is the expansion adiabatic?* homogeneity forbids heat flow, and equilibrium makes it reversible.
- *how do I prove $s = (\rho + P)/T$?* first law for $S(T,V)$, equality of mixed derivatives gives $dP/dT = (\rho + P)/T$, then integrate.
- *is entropy conserved for each species?* the total is. a decoupled species conserves its own. coupled species exchange entropy among themselves.
- *does the temperature jump up at annihilation?* no, $aT$ increases while $T$ keeps falling.
- *third power in $g_{*s}$, fourth in $g_*$, why?* $s_i \propto T_i^3$ and $\rho_i \propto T_i^4$.

## board summary (60 seconds)

$TdS = d(\rho V) + PdV$. mixed derivatives give $dP/dT = (\rho + P)/T$, which integrates to $S = (\rho + P)V/T$, so $s = (\rho + P)/T$. with $V = a^3$, $T\,dS/dt = a^3[\dot\rho + 3H(\rho + P)] = 0$ by continuity. radiation has $s = 4\rho/3T = (2\pi^2/45)g_{*s}T^3$. so $g_{*s}T^3a^3$ is constant, $T \propto g_{*s}^{-1/3}/a$. when $g_{*s}$ drops, $aT$ grows by $(g_{*s}^{\rm before}/g_{*s}^{\rm after})^{1/3}$.

## see also

- [[Continuity equation cosmology]] is the input for step 4.
- [[Relativistic number and energy density]] defines $g_*$ and gives $\rho(T)$.
- [[Neutrino temperature ratio]] is the cleanest application.
- [[Baryon to photon ratio]] relies on $s \propto a^{-3}$.
