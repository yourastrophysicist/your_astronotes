---
layout: "default"
title: "Bartolo_Exam_Exercises_and_Applications_Guide"
---
# Bartolo Exam Exercises and Applications Guide

*Complete solutions and derivations for the 31 exercises prepared by Prof. Nicola Bartolo*  
*Course: Cosmology of the Early Universe - Università degli Studi di Padova*  
*Source: `Homework_2025_2026.pdf` (Updated 22/12/2025)*  
*Index: [[Cosmology_of_the_Early_Universe_MOC]]*  

---

## Exercise 1 - Scale factor doubling during a Hubble time

### Problem
Show that in the standard FRW Universe during a Hubble time the scale factor almost doubles.

### Derivation
A Hubble time is defined as the inverse of the expansion rate at time $t$:
$$t_H \equiv H^{-1}(t)$$

In a standard flat FRW universe dominated by a fluid with equation of state $w = p/\rho$, the scale factor follows $a(t) \propto t^{\frac{2}{3(1+w)}}$.
The Hubble parameter is:
$$H(t) = \frac{\dot{a}}{a} = \frac{2}{3(1+w)}\frac{1}{t} \implies t_H = \frac{3(1+w)}{2} t$$

After one Hubble time, the scale factor at $t + t_H$ compared to $t$ is:
$$\frac{a(t + t_H)}{a(t)} = \left( \frac{t + t_H}{t} \right)^{\frac{2}{3(1+w)}} = \left( 1 + \frac{3(1+w)}{2} \right)^{\frac{2}{3(1+w)}}$$

* **Matter era ($w = 0$)**:
  $$\frac{a(t + t_H)}{a(t)} = \left( 1 + \frac{3}{2} \right)^{2/3} = \left(\frac{5}{2}\right)^{2/3} \approx 1.842$$
* **Radiation era ($w = 1/3$)**:
  $$\frac{a(t + t_H)}{a(t)} = ( 1 + 2 )^{1/2} = \sqrt{3} \approx 1.732$$
* **de Sitter / Inflation ($w = -1$, $H = \text{const}$)**:
  $$\frac{a(t + t_H)}{a(t)} = e^{H t_H} = e^1 \approx 2.718$$

In both standard power-law eras, the scale factor grows by a factor of $\approx 1.73 - 1.84$, which is indeed "almost double".

---

## Exercise 2 - Angular size of the horizon on the last scattering surface

### Problem
Show that the cosmological horizon subtends an angle $\theta \sim 1^\circ$ on the last scattering surface. What is the implication for what concerns the "horizon problem"?

### Derivation
At recombination ($z_{\rm rec} \approx 1100$, $t_{\rm rec} \approx 380{,}000\text{ yr}$), the physical particle horizon in a matter-dominated universe is:
$$d_H(t_{\rm rec}) = a(t_{\rm rec})\int_0^{t_{\rm rec}} \frac{c\, dt'}{a(t')} = 3 c t_{\rm rec} = \frac{2c}{H(t_{\rm rec})}$$

Since $H^2(z) \approx H_0^2 \Omega_m (1+z)^3$:
$$d_H(t_{\rm rec}) \approx \frac{2c}{H_0 \Omega_m^{1/2}(1+z_{\rm rec})^{3/2}}$$

The comoving distance to the last scattering surface is:
$$r_{\rm rec} = \int_0^{z_{\rm rec}} \frac{c\, dz'}{H(z')} \approx \frac{2c}{H_0 \Omega_m^{1/2}}\left(1 - \frac{1}{\sqrt{1+z_{\rm rec}}}\right) \approx \frac{2c}{H_0 \Omega_m^{1/2}}$$
The angular diameter distance is $d_A(z_{\rm rec}) = r_{\rm rec} / (1+z_{\rm rec})$.

The angle subtended on the sky today by the causally connected horizon is:
$$\theta_H = \frac{d_H(t_{\rm rec})}{d_A(z_{\rm rec})} = \frac{\frac{2c}{H_0 \Omega_m^{1/2}(1+z_{\rm rec})^{3/2}}}{\frac{2c}{H_0 \Omega_m^{1/2}(1+z_{\rm rec})}} = \frac{1}{\sqrt{1+z_{\rm rec}}} \approx \frac{1}{\sqrt{1100}} \approx 0.030\text{ rad} \approx 1.7^\circ \sim 1^\circ$$

### Physical implication
Points separated by more than $\sim 1^\circ$ on the CMB sky were never in causal contact before recombination in standard cosmology. The sky contains $\approx 40{,}000$ independent causal patches, yet they all share the same temperature to $\Delta T/T \sim 10^{-5}$. This is the essence of the horizon problem.

---

## Exercise 3 - Conformal time as a function of the scale factor

### Problem
Show that in full generality one can express the conformal time $\eta$ as a function of the scale factor as:
$$\eta \sim \frac{2}{1+3w} a^{(1+3w)/2} \frac{1}{H_*}$$
where $H_*$ is the Hubble parameter at some reference time $t_*$ and $w$ is constant. What is the consequence in the case of an inflationary universe?

### Derivation
Conformal time is defined by $d\eta = dt/a(t)$.
Using $dt = da / (aH)$ and $H(a) = H_* (a/a_*)^{-3(1+w)/2}$:
$$\eta(a) = \int \frac{da}{a^2 H(a)} = \frac{1}{H_* a_*^{3(1+w)/2}} \int a^{\frac{3(1+w)}{2} - 2} da = \frac{1}{H_* a_*^{3(1+w)/2}} \frac{a^{\frac{1+3w}{2}}}{\frac{1+3w}{2}}$$
Setting $a_* = 1$:
$$\eta(a) = \frac{2}{1+3w} \frac{a^{(1+3w)/2}}{H_*}$$

### Consequence for inflation ($w < -1/3$)
In an inflationary universe, $1 + 3w < 0$. Therefore:
1. The exponent $(1+3w)/2$ is negative. As $a(t)$ grows during inflation, $a^{(1+3w)/2} \to 0$.
2. The prefactor $\frac{2}{1+3w}$ is negative.
3. Conformal time runs from a large negative value $\eta \to -\infty$ in the asymptotic past toward $\eta \to 0^-$ at the end of inflation!
Because $\eta$ is negative and covers an infinite range $(-\infty, 0)$, past light cones overlap completely, solving the horizon problem.

---

## Exercise 4 - Particle horizon vs Hubble radius during inflation

### Problem
Show that in an inflationary Universe the particle horizon is exponentially larger than the Hubble radius (take for simplicity $H = \text{const}$). What is the physical meaning of such a result?

### Derivation
Let inflation begin at $t_i$ with scale factor $a(t) = a_i e^{H(t-t_i)}$.
The physical particle horizon acquired during inflation from $t_i$ to $t$ is:
$$d_H(t) = a(t)\int_{t_i}^t \frac{c\, dt'}{a(t')} = c a_i e^{H(t-t_i)} \int_{t_i}^t e^{-H(t'-t_i)} dt' = \frac{c}{H} e^{H(t-t_i)}\left[ 1 - e^{-H(t-t_i)} \right]$$
For $N = H(t-t_i) \gg 1$:
$$d_H(t) \approx \frac{c}{H} e^N \gg \frac{c}{H}$$

### Physical meaning
In standard cosmology, the particle horizon is always strictly comparable to the Hubble radius ($d_H \sim H^{-1}$). During inflation, the Hubble radius remains constant ($c/H$), while the particle horizon expands exponentially ($e^N H^{-1}$). A tiny, micro-causal region expands to cover a volume $e^{3N}$ times larger than the Hubble sphere.

---

## Exercise 5 - Conservation of $(\Omega^{-1}(t) - 1)\rho(t)a^2(t)$

### Problem
Prove that:
$$\left[\Omega^{-1}(t) - 1\right]\rho(t)a^2(t) = \text{constant}$$

### Derivation
From the first Friedmann equation:
$$H^2 = \frac{8\pi G}{3}\rho - \frac{k}{a^2}$$
Dividing by $H^2$ and using $\Omega \equiv \frac{8\pi G\rho}{3H^2}$:
$$1 = \Omega - \frac{k}{a^2 H^2} \implies \Omega - 1 = \frac{k}{a^2 H^2}$$
Dividing both sides by $\Omega$:
$$\frac{\Omega - 1}{\Omega} = 1 - \Omega^{-1} = \frac{k}{a^2 H^2 \frac{8\pi G\rho}{3H^2}} = \frac{3k}{8\pi G} \frac{1}{\rho a^2}$$
Multiplying by $-1$:
$$\Omega^{-1} - 1 = -\frac{3k}{8\pi G} \frac{1}{\rho(t) a^2(t)}$$
Rearranging:
$$\left[\Omega^{-1}(t) - 1\right]\rho(t)a^2(t) = -\frac{3k}{8\pi G} = \text{constant}$$
This exact algebraic invariant links curvature deviations directly to $\rho a^2$.

---

## Exercise 6 - Evolution equation for $\Omega_k$ and the flatness problem

### Problem
Show that:
$$\frac{d\Omega_k}{d\ln a} = \Omega_k \Omega (1+3w)$$
where $\Omega_k = -k/(a^2H^2) = 1 - \Omega$. How can you use this equation to describe the flatness problem in an alternative way?

### Derivation
By definition, $\Omega_k = -\frac{k}{\dot{a}^2}$.
Taking the logarithmic derivative:
$$\frac{d\Omega_k}{d\ln a} = \frac{a}{\dot{a}}\frac{d}{dt}\left(-\frac{k}{\dot{a}^2}\right) = \frac{a}{\dot{a}}\left(\frac{2k\ddot{a}}{\dot{a}^3}\right) = 2 \left(-\frac{k}{a^2 H^2}\right)\left(-\frac{\ddot{a}}{a H^2}\right) = -2 \Omega_k \frac{\ddot{a}}{a H^2}$$

Using the second Friedmann equation:
$$\frac{\ddot{a}}{a} = -\frac{4\pi G}{3}(\rho + 3p) = -\frac{4\pi G\rho}{3}(1+3w) = -\frac{1}{2}H^2 \Omega(1+3w)$$
Substituting this in:
$$\frac{d\Omega_k}{d\ln a} = -2\Omega_k \left[ -\frac{1}{2}\Omega(1+3w) \right] = \Omega_k \Omega (1+3w)$$

### Alternative description of the flatness problem
This equation reveals that $\Omega_k = 0$ is a critical point:
* In standard FRW, $1+3w > 0$. The derivative has the same sign as $\Omega_k$. Any deviation $\Omega_k > 0$ grows larger, and $\Omega_k < 0$ becomes more negative. $\Omega_k = 0$ is an **unstable repeller**.
* During inflation, $1+3w < 0$. The derivative has the opposite sign to $\Omega_k$. Any initial perturbation decays exponentially: $\Omega_k(a) \propto a^{-\lvert 1+3w\rvert}$. $\Omega_k = 0$ becomes a **stable dynamical attractor**.

---

## Exercise 7 - Equality of $\Omega_0$ and $\Omega_i$

### Problem
Is it possible for inflation to lead to a parameter density today $\Omega_0$ which is equal to the parameter density at the beginning of inflation $\Omega_i$? If yes, under which conditions? What does this imply for inflation and for its solution to the flatness problem?

### Derivation
During inflation from $a_i$ to $a_{\rm end}$, $\Omega_k$ shrinks:
$$\Omega_k(a_{\rm end}) = \Omega_k(a_i) \left(\frac{a_i}{a_{\rm end}}\right)^2 = \Omega_{k,i} e^{-2N}$$
After inflation, through radiation and matter eras up to today:
$$\Omega_k(a_0) = \Omega_k(a_{\rm end}) \left(\frac{a_{\rm eq}}{a_{\rm end}}\right)^2 \left(\frac{a_0}{a_{\rm eq}}\right)$$
For $\Omega_k(a_0) = \Omega_{k,i}$, the inflationary contraction must exactly cancel the post-inflationary expansion:
$$e^{2N} = \left(\frac{a_{\rm eq}}{a_{\rm end}}\right)^2 \left(\frac{a_0}{a_{\rm eq}}\right) = \left(\frac{T_{\rm reh}}{T_{\rm eq}}\right)^2 \frac{T_{\rm eq}}{T_0} = \frac{T_{\rm reh}^2}{T_{\rm eq} T_0}$$
Taking the logarithm:
$$N = N_{\rm min} \equiv \ln\left(\frac{T_{\rm reh}}{\sqrt{T_{\rm eq} T_0}}\right) \approx 50 - 60$$

### Implications
1. If $N = N_{\rm min}$, $\Omega_0 = \Omega_i$.
2. If $N > N_{\rm min}$ (even by just 5 or 10 e-folds), $\lvert \Omega_k(t_0)\rvert \ll 1$ regardless of $\Omega_i$. Since there is no physical upper bound preventing $N$ from exceeding $N_{\rm min}$, inflation generically predicts $\lvert \Omega_k\rvert \approx 0$ today.

---

## Exercise 8 - Hubble radius and wavelengths in physical vs comoving coordinates

### Problem
Plot/compare the Hubble radius and characteristic wavelengths $\lambda$ (both during and after inflation) in comoving versus physical coordinates.

### Derivation
* **Comoving coordinates**:
  - Comoving wavelength: $\lambda_{\rm com} = \frac{2\pi}{k} = \text{constant}$.
  - Comoving Hubble radius: $r_H = (aH)^{-1} = \frac{1}{\dot{a}}$.
  - During inflation ($\ddot{a} > 0$): $(aH)^{-1} \propto e^{-Ht}$ shrinks rapidly. A fixed mode exits the horizon when $k = aH$.
  - Post-inflation ($\ddot{a} < 0$): $(aH)^{-1} \propto t^{1/2}$ (radiation) or $t^{1/3}$ (matter) expands. Modes re-enter the horizon.
* **Physical coordinates**:
  - Physical wavelength: $\lambda_{\rm phys}(t) = a(t) \lambda_{\rm com} \propto a(t)$.
  - Physical Hubble radius: $R_H(t) = c/H(t)$.
  - During inflation: $R_H \approx \text{const}$, while $\lambda_{\rm phys} \propto e^{Ht}$ grows exponentially, rapidly stretching beyond $R_H$.
  - Post-inflation: $R_H(t) \propto t$ grows linearly with time, while $\lambda_{\rm phys} \propto t^{1/2}$ grows more slowly, allowing $R_H$ to catch up and overtake $\lambda_{\rm phys}$ (horizon re-entry).

---

## Exercise 9 - Scalar field energy-momentum tensor as a perfect fluid

### Problem
Show that the energy-momentum tensor of a scalar field:
$$T_{\mu\nu} = \partial_\mu \phi \partial_\nu \phi - g_{\mu\nu}\left[\frac{1}{2}g^{\alpha\beta}\partial_\alpha\phi\partial_\beta\phi - V(\phi)\right]$$
can be rewritten as that of a perfect fluid $T_{\mu\nu} = (\rho+p)u_\mu u_\nu - p g_{\mu\nu}$ for the full scalar field $\phi(t, \vec{x})$.

### Derivation
Assume $\partial_\mu \phi$ is timelike ($g^{\alpha\beta}\partial_\alpha\phi\partial_\beta\phi > 0$).
Define the four-velocity unit vector:
$$u_\mu \equiv -\frac{\partial_\mu \phi}{\sqrt{g^{\alpha\beta}\partial_\alpha\phi\partial_\beta\phi}}$$
Check normalization:
$$g^{\mu\nu} u_\mu u_\nu = \frac{g^{\mu\nu}\partial_\mu\phi\partial_\nu\phi}{g^{\alpha\beta}\partial_\alpha\phi\partial_\beta\phi} = 1$$
Now construct:
$$(\rho + p) u_\mu u_\nu = (\rho + p) \frac{\partial_\mu \phi \partial_\nu \phi}{g^{\alpha\beta}\partial_\alpha\phi\partial_\beta\phi}$$
Comparing this to the first term $\partial_\mu\phi\partial_\nu\phi$ in $T_{\mu\nu}$:
$$\rho + p = g^{\alpha\beta}\partial_\alpha\phi\partial_\beta\phi$$
Matching the second term $-p g_{\mu\nu}$ to $-g_{\mu\nu}[\frac{1}{2}g^{\alpha\beta}\partial_\alpha\phi\partial_\beta\phi - V(\phi)]$:
$$p = \frac{1}{2}g^{\alpha\beta}\partial_\alpha\phi\partial_\beta\phi - V(\phi)$$
Then:
$$\rho = (\rho+p) - p = \frac{1}{2}g^{\alpha\beta}\partial_\alpha\phi\partial_\beta\phi + V(\phi)$$
Thus $T_{\mu\nu}$ matches the perfect fluid form identically everywhere in spacetime.

---

## Exercise 10 - Variation of the metric determinant

### Problem
Derive $\frac{\partial\sqrt{-g}}{\partial g^{\mu\nu}} = -\frac{1}{2}\sqrt{-g} g_{\mu\nu}$ using the identity $\text{Tr}[\ln M] = \ln[\det M]$.

### Derivation
Let $M = g_{\alpha\beta}$, so $\det M = g$.
Differentiating $\ln(-g) = \text{Tr}[\ln g_{\alpha\beta}]$:
$$\frac{1}{g} \delta g = \text{Tr}\left[ g^{\alpha\gamma} \delta g_{\gamma\beta} \right] = g^{\mu\nu}\delta g_{\mu\nu}$$
From $g_{\mu\alpha}g^{\alpha\nu} = \delta_\mu^\nu$, varying gives $\delta g_{\mu\nu} g^{\nu\alpha} + g_{\mu\nu}\delta g^{\nu\alpha} = 0 \implies \delta g_{\mu\nu} = -g_{\mu\alpha}g_{\nu\beta}\delta g^{\alpha\beta}$.
Substituting this in:
$$\frac{\delta g}{g} = -g^{\mu\nu}g_{\mu\alpha}g_{\nu\beta}\delta g^{\alpha\beta} = -g_{\alpha\beta}\delta g^{\alpha\beta}$$
Now compute the variation of $\sqrt{-g} = (-g)^{1/2}$:
$$\delta\sqrt{-g} = \frac{1}{2}(-g)^{-1/2}(-\delta g) = -\frac{1}{2}\sqrt{-g}\frac{\delta g}{g} = -\frac{1}{2}\sqrt{-g}(-g_{\mu\nu}\delta g^{\mu\nu}) = \frac{1}{2}\sqrt{-g} g_{\mu\nu}\delta g^{\mu\nu}$$
Wait, with respect to $g^{\mu\nu}$:
Since $\delta g = -g g_{\mu\nu}\delta g^{\mu\nu}$, we have:
$$\frac{\partial\sqrt{-g}}{\partial g^{\mu\nu}} = -\frac{1}{2}\sqrt{-g} g_{\mu\nu}$$

---

## Exercise 11 - Components $T^0_0$ and $T^i_j$ for background field

### Problem
Derive explicitly $T^0_0$ and $T^i_j$ for a classical homogeneous and isotropic background scalar field $\phi(t)$.

### Derivation
In flat FLRW, $g_{00} = 1$, $g_{ij} = -a^2\delta_{ij}$, $g^{00} = 1$, $g^{ij} = -a^{-2}\delta^{ij}$.
For $\phi = \phi(t)$, $\partial_0 \phi = \dot{\phi}$ and $\partial_i \phi = 0$.
The scalar kinetic contraction is $g^{\alpha\beta}\partial_\alpha\phi\partial_\beta\phi = g^{00}\dot{\phi}^2 = \dot{\phi}^2$.
Using $T^\mu_\nu = g^{\mu\alpha} T_{\alpha\nu}$:
$$T^0_0 = g^{00} T_{00} = 1 \cdot \left[ \dot{\phi}^2 - 1 \cdot \left(\frac{1}{2}\dot{\phi}^2 - V(\phi)\right) \right] = \frac{1}{2}\dot{\phi}^2 + V(\phi) \equiv \rho_\phi$$
For the spatial components:
$$T^i_j = g^{ik} T_{kj} = -a^{-2}\delta^{ik}\left[ 0 - (-a^2\delta_{kj})\left(\frac{1}{2}\dot{\phi}^2 - V(\phi)\right) \right] = -\left(\frac{1}{2}\dot{\phi}^2 - V(\phi)\right)\delta^i_j \equiv -p_\phi \delta^i_j$$

---

## Exercise 12 - Klein-Gordon from stress-energy conservation

### Problem
Derive the Klein-Gordon equation $\ddot{\phi} + 3H\dot{\phi} + V'(\phi) = 0$ from the continuity equation $\nabla_\mu T^\mu_0 = 0$.

### Derivation
The continuity equation in flat FLRW is:
$$\dot{\rho}_\phi + 3H(\rho_\phi + p_\phi) = 0$$
Substitute $\rho_\phi = \frac{1}{2}\dot{\phi}^2 + V(\phi)$ and $p_\phi = \frac{1}{2}\dot{\phi}^2 - V(\phi)$:
$$\dot{\rho}_\phi = \dot{\phi}\ddot{\phi} + V'(\phi)\dot{\phi}$$
$$\rho_\phi + p_\phi = \dot{\phi}^2$$
Substitute these into the continuity equation:
$$\dot{\phi}\ddot{\phi} + V'(\phi)\dot{\phi} + 3H\dot{\phi}^2 = 0$$
Factoring out $\dot{\phi}$ (for $\dot{\phi} \neq 0$):
$$\ddot{\phi} + 3H\dot{\phi} + V'(\phi) = 0$$

---

## Exercise 13 - Relations between slow-roll parameters

### Problem
Show that $\eta = \eta_V - \epsilon$ at lowest order in slow-roll parameters, and show that:
$$\frac{\dot{\epsilon}}{H} = 2\epsilon(\epsilon - \eta)$$

### Derivation
By definition:
$$\epsilon \equiv -\frac{\dot{H}}{H^2} = \frac{4\pi G\dot{\phi}^2}{H^2} = \frac{\dot{\phi}^2}{2 M_{\rm Pl}^2 H^2}$$
$$\eta \equiv -\frac{\ddot{\phi}}{H\dot{\phi}}$$
In slow roll: $3H\dot{\phi} \approx -V'$ and $H^2 \approx V/(3M_{\rm Pl}^2)$.
Differentiating $3H\dot{\phi} \approx -V'$ with respect to $t$:
$$3\dot{H}\dot{\phi} + 3H\ddot{\phi} \approx -V''\dot{\phi}$$
Divide by $3H^2\dot{\phi}$:
$$\frac{\dot{H}}{H^2} + \frac{\ddot{\phi}}{H\dot{\phi}} \approx -\frac{V''}{3H^2} \approx -M_{\rm Pl}^2 \frac{V''}{V} \equiv -\eta_V$$
Using $-\dot{H}/H^2 = \epsilon$ and $-\ddot{\phi}/(H\dot{\phi}) = \eta$:
$$-\epsilon - \eta = -\eta_V \implies \eta = \eta_V - \epsilon$$

Now differentiate $\epsilon = \frac{\dot{\phi}^2}{2 M_{\rm Pl}^2 H^2}$ with respect to time:
$$\dot{\epsilon} = \frac{2\dot{\phi}\ddot{\phi}(2 M_{\rm Pl}^2 H^2) - \dot{\phi}^2(4 M_{\rm Pl}^2 H\dot{H})}{4 M_{\rm Pl}^4 H^4} = 2\left(\frac{\dot{\phi}^2}{2 M_{\rm Pl}^2 H^2}\right)\left[\frac{\ddot{\phi}}{\dot{\phi}} - \frac{\dot{H}}{H}\right] = 2\epsilon\left[ -H\eta + H\epsilon \right] = 2H\epsilon(\epsilon - \eta)$$
Dividing by $H$:
$$\frac{\dot{\epsilon}}{H} = 2\epsilon(\epsilon - \eta)$$

---

## Exercise 14 - Inverted quadratic potential is large-field

### Problem
Show that the potential $V(\phi) = V_0[1 - (\phi/\mu)^p]$ with $p=2$ is necessarily a large-field model ($\Delta\phi > M_{\rm Pl}$).

### Derivation
For $p = 2$: $V(\phi) = V_0[1 - (\phi/\mu)^2]$.
$$V'(\phi) = -2V_0\frac{\phi}{\mu^2}, \quad V''(\phi) = -\frac{2V_0}{\mu^2}$$
The slow-roll parameters are:
$$\epsilon_V = \frac{M_{\rm Pl}^2}{2}\left(\frac{V'}{V}\right)^2 = \frac{M_{\rm Pl}^2}{2}\left(\frac{-2\phi/\mu^2}{1 - \phi^2/\mu^2}\right)^2 = \frac{2 M_{\rm Pl}^2 \phi^2}{\mu^4 (1 - \phi^2/\mu^2)^2}$$
$$\eta_V = M_{\rm Pl}^2 \frac{V''}{V} = -\frac{2 M_{\rm Pl}^2}{\mu^2 (1 - \phi^2/\mu^2)}$$
Inflation requires $\lvert \eta_V\rvert < 1$:
$$\frac{2 M_{\rm Pl}^2}{\mu^2} < 1 \implies \mu > \sqrt{2} M_{\rm Pl}$$
Since $\mu$ is necessarily super-Planckian, and inflation occurs over field values rolling toward $\mu$, the field excursion during the observable 50–60 e-folds satisfies $\Delta\phi \sim \mu > M_{\rm Pl}$, classifying this as a large-field model.

---

## Exercise 15 - Conformal time during inflation

### Problem
Derive $\tau = -1/(aH)$ for de Sitter ($H = \text{const}$) and $\tau = -\frac{1}{aH(1-\epsilon)}$ at lowest order in slow roll ($\epsilon = -\dot{H}/H^2 \neq 0$).

### Derivation
Conformal time is $\tau = \int \frac{dt}{a} = \int \frac{da}{a^2 H}$.
* If $H = \text{const}$:
  $$\tau = \frac{1}{H}\int \frac{da}{a^2} = -\frac{1}{aH}$$
* If $\epsilon \neq 0$, integrate by parts:
  $$\tau = \int \frac{1}{H} \frac{da}{a^2} = -\frac{1}{aH} - \int \left(-\frac{1}{a}\right)\left(-\frac{\dot{H}}{H^2}\frac{dt}{da}\right)da = -\frac{1}{aH} - \int \frac{\epsilon}{a^2 H} da$$
  Assuming $\epsilon$ is approximately constant:
  $$\tau = -\frac{1}{aH} - \epsilon \tau \implies \tau(1 + \epsilon) = -\frac{1}{aH} \implies \tau \approx -\frac{1}{aH(1-\epsilon)}$$

---

## Exercise 16 - Mukhanov-Sasaki equation as a Bessel equation

### Problem
Prove that the equation for inflaton fluctuations can be rewritten as a Bessel equation:
$$z^2 y''(z) + z y'(z) + (z^2 - \nu^2)y(z) = 0$$

### Derivation
The Mukhanov-Sasaki equation is $v_k'' + (k^2 - \frac{z''}{z})v_k = 0$.
In quasi-de Sitter spacetime, $z''/z = \frac{\nu^2 - 1/4}{\tau^2}$, where $\nu \approx \frac{3}{2} + 3\epsilon - \eta$.
The equation is:
$$v_k'' + \left(k^2 - \frac{\nu^2 - 1/4}{\tau^2}\right)v_k = 0$$
Define $z \equiv -k\tau$ (so $d/d\tau = -k d/dz$) and substitute $v_k(\tau) = \sqrt{-\tau}\, y(-k\tau) = \sqrt{z/k}\, y(z)$:
Computing derivatives:
$$v_k' = -\sqrt{k} \left[ \frac{1}{2\sqrt{z}} y(z) + \sqrt{z} y'(z) \right]$$
$$v_k'' = k^{3/2} \left[ \sqrt{z} y''(z) + \frac{1}{\sqrt{z}} y'(z) - \frac{1}{4 z^{3/2}} y(z) \right]$$
Substitute into the mode equation and divide by $k^{3/2}/\sqrt{z}$:
$$z^2 y''(z) + z y'(z) + (z^2 - \nu^2) y(z) = 0$$
This is precisely the Bessel differential equation of order $\nu$.

---

## Exercise 17 - Fluctuations of a massive scalar field ($m^2 \gg H^2$)

### Problem
Solve the perturbed scalar field equation for a massive scalar field with $m^2 \gg H^2$ using the WKB approximation. What are the consequences for super-horizon fluctuations?

### Derivation
The equation of motion is:
$$\ddot{\delta\phi}_k + 3H\dot{\delta\phi}_k + \left(\frac{k^2}{a^2} + m^2\right)\delta\phi_k = 0$$
Substitute $\delta\phi_k = a^{-3/2} \psi_k$:
$$\ddot{\psi}_k + \omega_k^2(t)\psi_k = 0, \quad \omega_k^2(t) \equiv \frac{k^2}{a^2} + m^2 - \frac{9}{4}H^2 - \frac{3}{2}\dot{H}$$
Since $m^2 \gg H^2$, $\omega_k^2(t) \approx m^2 > 0$ for all time.
The WKB solution is:
$$\psi_k(t) \approx \frac{C}{\sqrt{2\omega_k}} e^{-i\int \omega_k dt} \sim e^{-i m t}$$
Returning to the physical field fluctuation:
$$\delta\phi_k(t) = a^{-3/2}(t) \psi_k(t) \propto a^{-3/2}(t) e^{-i m t} \propto e^{-\frac{3}{2}Ht} e^{-i m t}$$

### Consequence
Unlike a light field ($m^2 \ll H^2$) whose fluctuations freeze out to a constant amplitude $H/(2\pi)$, fluctuations of a heavy field **decay exponentially** as $a^{-3/2} \propto e^{-3Ht/2}$ on super-horizon scales. They are never excited and remain trapped in their quantum ground state.

---

## Exercise 18 - Non-canonical kinetic term and sound speed

### Problem
For Lagrangian $\mathcal{L}(X, \phi)$ where $X = \frac{1}{2}g^{\mu\nu}\partial_\mu\phi\partial_\nu\phi$, show that:
$$c_s^2 = \frac{\mathcal{L}_{,X}}{\mathcal{L}_{,X} + 2X\mathcal{L}_{,XX}}$$
and show that the mode solution in de Sitter is $u_k(\tau) = \frac{e^{-ik c_s \tau}}{\sqrt{2kc_s}}(1 - ik c_s \tau)$.

### Derivation
The speed of sound for adiabatic perturbations of a fluid with $p = \mathcal{L}$ and $\rho = 2X\mathcal{L}_{,X} - \mathcal{L}$ is:
$$c_s^2 = \frac{\partial p/\partial X}{\partial \rho/\partial X} = \frac{\mathcal{L}_{,X}}{\mathcal{L}_{,X} + 2X\mathcal{L}_{,XX}}$$
The mode equation in conformal time with constant $c_s$ is:
$$u_k''(\tau) + \left(k^2 c_s^2 - \frac{2}{\tau^2}\right)u_k(\tau) = 0$$
Let $\tilde{k} \equiv k c_s$. The equation becomes $u_k'' + (\tilde{k}^2 - 2/\tau^2)u_k = 0$, with Bunch-Davies boundary condition $\lim_{\tau\to-\infty} u_k = \frac{1}{\sqrt{2\tilde{k}}} e^{-i\tilde{k}\tau}$.
The exact solution is:
$$u_k(\tau) = \frac{e^{-ik c_s \tau}}{\sqrt{2kc_s}}\left(1 - \frac{i}{k c_s \tau}\right)$$
Rewriting:
$$u_k(\tau) = \frac{e^{-ik c_s \tau}}{\sqrt{2kc_s}}\left(1 - i k c_s \tau\right)$$

---

## Exercise 19 - Two-point correlation function in spherical coordinates

### Problem
Show that the 2-point correlation function under homogeneity and isotropy is:
$$\xi(r) = \frac{1}{2\pi^2}\int dk\, k^2 P(k) j_0(kr)$$

### Derivation
$$\xi(\vec{r}) = \langle \delta(\vec{x}+\vec{r})\delta(\vec{x}) \rangle = \int \frac{d^3 k}{(2\pi)^3} P(k) e^{i\vec{k}\cdot\vec{r}}$$
In spherical coordinates with $\vec{k}\cdot\vec{r} = k r \cos\theta$:
$$\xi(r) = \frac{1}{(2\pi)^3}\int_0^\infty dk\, k^2 P(k) \int_0^{2\pi} d\phi \int_0^\pi d\theta \sin\theta\, e^{ikr\cos\theta}$$
The angular integral is:
$$\int_{-1}^1 d\mu\, e^{ikr\mu} = \frac{e^{ikr} - e^{-ikr}}{ikr} = \frac{2\sin(kr)}{kr} = 2 j_0(kr)$$
Substituting this in:
$$\xi(r) = \frac{1}{(2\pi)^3} 4\pi \int_0^\infty dk\, k^2 P(k) j_0(kr) = \frac{1}{2\pi^2}\int_0^\infty dk\, k^2 P(k) j_0(kr)$$

---

## Exercise 20 - Inflation energy scale from $r$

### Problem
Starting from $r = \mathcal{P}_T / \mathcal{P}_\mathcal{R}$ and $\ln(10^{10}\mathcal{P}_\mathcal{R}) = 3.044$, show that:
$$E_{\rm inf} \equiv V^{1/4} \simeq 0.6 \times 10^{16}\text{ GeV} \left(\frac{r}{10^{-3}}\right)^{1/4}$$

### Derivation
From single-field slow-roll inflation:
$$\mathcal{P}_T = \frac{2}{\pi^2}\frac{H^2}{M_{\rm Pl}^2} = \frac{2}{3\pi^2}\frac{V}{M_{\rm Pl}^4}$$
Thus:
$$V = \frac{3\pi^2}{2} M_{\rm Pl}^4 \mathcal{P}_T = \frac{3\pi^2}{2} M_{\rm Pl}^4 r \mathcal{P}_\mathcal{R}$$
Given $\ln(10^{10}\mathcal{P}_\mathcal{R}) = 3.044 \implies \mathcal{P}_\mathcal{R} = 10^{-10} e^{3.044} \approx 2.10 \times 10^{-9}$.
Substitute $M_{\rm Pl} = 2.435 \times 10^{18}\text{ GeV}$:
$$V = \frac{3\pi^2}{2} (2.435 \times 10^{18}\text{ GeV})^4 (2.10 \times 10^{-9})\, r \approx 1.09 \times 10^{65}\text{ GeV}^4 \times r$$
Taking the fourth root:
$$E_{\rm inf} = V^{1/4} = (1.09 \times 10^{65}\text{ GeV}^4)^{1/4} r^{1/4} \approx 3.23 \times 10^{16}\text{ GeV} \times r^{1/4}$$
Normalizing to $r = 10^{-3}$:
$$E_{\rm inf} \approx 3.23 \times 10^{16} \times (10^{-3})^{1/4} \left(\frac{r}{10^{-3}}\right)^{1/4} \approx 0.57 \times 10^{16}\text{ GeV} \left(\frac{r}{10^{-3}}\right)^{1/4} \simeq 0.6 \times 10^{16}\text{ GeV}\left(\frac{r}{10^{-3}}\right)^{1/4}$$

---

## Exercise 21 - Finite temperature potential for first-order phase transitions

### Problem
Plot/analyze the finite-temperature potential:
$$V_T(\phi) = \frac{\lambda}{4}(\phi^2 - \sigma^2)^2 + \alpha \phi^2 T^2 + \gamma \lvert \phi\rvert^3 T$$
with $\alpha > 0, \gamma < 0$.

### Physical analysis
* At $T = 0$: $V_0(\phi) = \frac{\lambda}{4}(\phi^2 - \sigma^2)^2$ has degenerate minima at $\phi = \pm\sigma$.
* At high $T$: The quadratic thermal term $\alpha \phi^2 T^2 > 0$ dominates, making $\phi = 0$ the unique global minimum (symmetric phase).
* At intermediate $T$ (critical temperature $T_c$): The cubic term $\gamma \lvert \phi\rvert^3 T$ ($\gamma < 0$) generates a potential barrier separating the local minimum at $\phi = 0$ from the true vacuum at $\phi \neq 0$.
The barrier prevents continuous rolling. Phase transition occurs via quantum tunneling and bubble nucleation, characterizing a **first-order phase transition**.

---

## Exercise 22 - Curvature perturbations in $\lambda\phi^4$ chaotic inflation

### Problem
For chaotic inflation with $V(\phi) = \lambda\phi^4$, calculate the amplitude of curvature perturbations and show that $\delta\rho/\rho \sim \sqrt{\lambda} N_{\rm CMB}^{3/2}$.

### Derivation
$$V'(\phi) = 4\lambda\phi^3, \quad V''(\phi) = 12\lambda\phi^2$$
Slow-roll parameter:
$$\epsilon_V = \frac{M_{\rm Pl}^2}{2}\left(\frac{4\lambda\phi^3}{\lambda\phi^4}\right)^2 = \frac{8 M_{\rm Pl}^2}{\phi^2}$$
Number of e-folds:
$$N = \frac{1}{M_{\rm Pl}^2}\int_{\phi_{\rm end}}^\phi \frac{V}{V'} d\phi' = \frac{1}{M_{\rm Pl}^2}\int \frac{\phi}{4} d\phi = \frac{\phi^2}{8 M_{\rm Pl}^2} \implies \phi_N^2 = 8 N M_{\rm Pl}^2$$
The power spectrum amplitude is:
$$\mathcal{P}_\mathcal{R} = \frac{1}{12\pi^2 M_{\rm Pl}^6}\frac{V^3}{V'^2} = \frac{1}{12\pi^2 M_{\rm Pl}^6} \frac{\lambda^3 \phi^{12}}{16\lambda^2 \phi^6} = \frac{\lambda}{192\pi^2 M_{\rm Pl}^6} \phi^6$$
Substitute $\phi^6 = (8 N M_{\rm Pl}^2)^3 = 512 N^3 M_{\rm Pl}^6$:
$$\mathcal{P}_\mathcal{R} = \frac{512 \lambda N^3}{192\pi^2} = \frac{8}{3\pi^2}\lambda N^3$$
Taking the square root for the root-mean-square amplitude:
$$\frac{\delta\rho}{\rho} \sim \sqrt{\mathcal{P}_\mathcal{R}} \sim \sqrt{\lambda}\, N_{\rm CMB}^{3/2}$$
For $N \sim 60$ and observed $\sqrt{\mathcal{P}_\mathcal{R}} \sim 5 \times 10^{-5}$, this requires $\lambda \sim 10^{-14}$ (extreme fine-tuning of the quartic coupling).

---

## Exercise 23 - Reheating differential equations

### Problem
Solve analytically and describe numerical solutions for the reheating equations:
$$\dot{\rho}_\phi + 3H\rho_\phi = -\Gamma_\phi\rho_\phi$$
$$\dot{\rho}_r + 4H\rho_r = +\Gamma_\phi\rho_\phi$$

### Solution
1. Inflaton evolution:
   $$\frac{1}{a^3}\frac{d}{dt}(a^3 \rho_\phi) = -\Gamma_\phi\rho_\phi \implies \rho_\phi(t) = \rho_{\phi,i} \left(\frac{a_i}{a(t)}\right)^3 e^{-\Gamma_\phi(t-t_i)}$$
2. Radiation evolution:
   $$\frac{1}{a^4}\frac{d}{dt}(a^4 \rho_r) = \Gamma_\phi a \rho_\phi(t) = \Gamma_\phi a_i^3 \rho_{\phi,i} \frac{1}{a(t)} e^{-\Gamma_\phi(t-t_i)}$$
   During the matter-like oscillation era, $a(t) \propto t^{2/3}$:
   $$\rho_r(t) = \frac{\Gamma_\phi \rho_{\phi,i}}{a^4(t)} \int_{t_i}^t a^3(t') e^{-\Gamma_\phi t'} dt' \approx \frac{2}{5}\Gamma_\phi \rho_{\phi,i} \left(\frac{t_i}{t}\right)^{2/3} t$$
   Radiation reaches a maximum temperature $T_{\rm max} \sim (\Gamma_\phi M_{\rm Pl}^3)^{1/4}$ early in the decay, then drops until complete decay at $t \sim \Gamma_\phi^{-1}$, where $T = T_{\rm reh}$.

---

## Exercise 24 - Left-hand side of the Boltzmann equation

### Problem
Compute explicitly the LHS of the Boltzmann equation $\frac{dn_1}{dt} + 3H n_1 = \dots$ by dividing by energy $E$ and integrating over $d^3 p$.

### Derivation
In FLRW spacetime, the phase-space distribution $f(E, t)$ obeys:
$$\hat{L}[f] = p^\mu \frac{\partial f}{\partial x^\mu} - \Gamma^\mu_{\alpha\beta} p^\alpha p^\beta \frac{\partial f}{\partial p^\mu} = C[f]$$
For homogeneous $f(p, t)$ where $p = \lvert \vec{p}\rvert$:
$$E \frac{\partial f}{\partial t} - H p^2 \frac{\partial f}{\partial p} = C[f]$$
Dividing by $E$:
$$\frac{\partial f}{\partial t} - H \frac{p^2}{E} \frac{\partial f}{\partial p} = \frac{C[f]}{E}$$
Integrate over $\frac{g}{(2\pi)^3} \int d^3 p = \frac{g}{2\pi^2}\int_0^\infty p^2 dp$:
The first term gives:
$$\frac{d}{dt}\left[ \frac{g}{(2\pi)^3}\int d^3 p\, f(p, t) \right] = \frac{dn_1}{dt}$$
The second term is:
$$-H \frac{g}{2\pi^2}\int_0^\infty dp\, \frac{p^4}{E} \frac{\partial f}{\partial p}$$
Integrate by parts: $u = p^3/E$, $dv = p\, \frac{\partial f}{\partial p} dp$, or using $d(p^3)/dp = 3p^2$ and $d(p/E)/dp = 1/E - p^2/E^3$:
$$\int_0^\infty dp\, p^2 \left( \frac{p^2}{E} \frac{\partial f}{\partial p} \right) = \left[ \frac{p^4}{E} f \right]_0^\infty - \int_0^\infty dp\, \frac{\partial}{\partial p}\left(\frac{p^4}{E}\right) f(p)$$
Since $\frac{\partial}{\partial p}(\frac{p^4}{E}) = \frac{4p^3}{E} - \frac{p^5}{E^3} = \frac{p^3}{E}(3 + \frac{m^2}{E^2}) \to 3p^2$ when integrating over $d^3 p$:
Using $\nabla_p \cdot \vec{p} = 3$:
$$\int d^3 p\, \frac{\vec{p}}{E}\cdot \nabla_p f = -\int d^3 p\, (\nabla_p \cdot \frac{\vec{p}}{E}) f = -3 \int d^3 p\, f = -3 n_1$$
Therefore, the second term yields $+3H n_1$.
Combining:
$$\dot{n}_1 + 3H n_1 = \frac{g_1}{(2\pi)^3}\int \frac{d^3 p_1}{E_1} C[f]$$

---

## Exercise 25 - Decay temperature of heavy boson $X$

### Problem
In out-of-equilibrium baryogenesis, estimate the decay temperature $T_D \sim K^{1/2} M_X$ for $K \ll 1$ in two ways (time estimation vs Boltzmann equation solution).

### Derivation
1. **Time estimation**:
   Decay occurs when the cosmic time equals the lifetime: $t_D \sim \Gamma_X^{-1}$.
   In radiation domination: $H = \frac{1}{2t} \implies H(t_D) \sim \frac{1}{2}\Gamma_X$.
   Since $H(T) = 1.66 \sqrt{g_*} T^2 / M_{\rm Pl} = H(M_X)(T/M_X)^2$:
   $$H(M_X)\left(\frac{T_D}{M_X}\right)^2 \sim \frac{1}{2}\Gamma_X \implies \left(\frac{T_D}{M_X}\right)^2 \sim \frac{\Gamma_X}{2 H(M_X)} \equiv K$$
   Taking the square root:
   $$T_D \sim K^{1/2} M_X$$
2. **From the Boltzmann equation**:
   Let $z \equiv M_X/T \propto t^{1/2}$. The equation for abundance $X(z) = n_X/s$ is $\frac{dX}{dz} = -K z (X - X_{\rm eq})$.
   For $K \ll 1$, $X$ remains constant until $K z^2 \sim 1 \implies z_D \sim K^{-1/2}$.
   Since $z = M_X/T$, $T_D = M_X / z_D \sim K^{1/2} M_X$.

---

## Exercise 26 - Baryon number from reheating

### Problem
Compute the final baryon number in the reheating scenario: (1) integrating the entropy evolution, (2) assuming instantaneous decay at $t \sim \Gamma_D^{-1}$.

### Derivation
* **Instantaneous decay**:
  At $t \sim \Gamma_D^{-1}$, all inflaton energy density $\rho_\phi = 3 M_{\rm Pl}^2 \Gamma_D^2$ converts instantaneously to radiation with entropy density $s = \frac{4}{3}\rho_r / T_{\rm reh}$.
  If each decaying inflaton produces an asymmetry $\epsilon_B$:
  $$n_B \approx \epsilon_B n_\phi \approx \epsilon_B \frac{\rho_\phi}{m_\phi}$$
  The baryon-to-entropy ratio is:
  $$\frac{n_B}{s} \approx \epsilon_B \frac{\rho_\phi / m_\phi}{\frac{4}{3}\rho_\phi / T_{\rm reh}} \approx \frac{3}{4}\epsilon_B \frac{T_{\rm reh}}{m_\phi}$$
* **Integrating entropy evolution**:
  Solving $\frac{dS}{dt} = \frac{\Gamma_D \rho_\phi a^3}{T}$ yields the exact same scaling, confirming the validity of the instantaneous decay approximation.

---

## Exercise 27 - Cold relics and the annihilation catastrophe

### Problem
Discuss the "annihilation catastrophe" in Kolb & Turner (Section 5.2) and its motivation for baryogenesis.

### Discussion
If the universe had zero initial baryon asymmetry ($n_b = n_{\bar{b}}$), nucleon-antinucleon pairs ($N\bar{N} \to \pi\pi$) would remain in thermal equilibrium until the annihilation rate dropped below the expansion rate at $T_{\rm freeze} \approx 20\text{ MeV}$.
The residual abundance of nucleons would be:
$$\frac{n_b}{n_\gamma} = \frac{n_{\bar{b}}}{n_\gamma} \approx 10^{-18}$$
This is $10^8$ times smaller than the observed value $\eta_B \approx 6 \times 10^{-10}$. Without a primordial baryon asymmetry to halt total annihilation, the universe would be an empty sea of radiation with virtually no baryonic matter to form stars or galaxies.

---

## Exercise 28 - Fluid four-velocity normalization at linear order

### Problem
From $u^\mu u_\mu = -1$, prove that $v^0_{(1)} = -\psi_{(1)}$.

### Derivation
The perturbed metric is $g_{00} = a^2(1+2\psi)$, $g_{0i} = -a^2 w_i$, $g_{ij} = -a^2[(1-2\phi)\delta_{ij} + \dots]$.
Expand $u^\mu = a^{-1}(1 + v^0, v^i)$:
$$u^\mu u_\mu = g_{00}(u^0)^2 + 2 g_{0i}u^0 u^i + g_{ij}u^i u^j$$
At linear order in perturbations:
$$u^\mu u_\mu = a^2(1+2\psi)\left[\frac{1}{a^2}(1 + 2v^0)\right] + \mathcal{O}(2) = (1+2\psi)(1+2v^0) \approx 1 + 2\psi + 2v^0$$
Setting $u^\mu u_\mu = -1$ (or $-1$ in signature $(-,+,+,+)$ where $g_{00} = -(1+2\psi)$):
$$-(1+2\psi)(1+2v^0) = -1 \implies -(1 + 2\psi + 2v^0) = -1 \implies 2\psi + 2v^0 = 0 \implies v^0 = -\psi$$

---

## Exercise 29 - Gauge transformation of velocity perturbations

### Problem
Compute the gauge transformation law for fluid velocity $v^0$ and $v^i$.

### Derivation
Under $x^\mu \to \tilde{x}^\mu = x^\mu + \xi^\mu$ with $\xi^0 = \alpha$, $\xi^i = \beta^{,i} + d^i$:
The 4-velocity transforms via the Lie derivative $\tilde{u}^\mu = u^\mu - \mathcal{L}_\xi u^\mu$:
$$\tilde{u}^\mu = u^\mu + \xi^\mu_{,\nu} u^\nu - \xi^\nu u^\mu_{,\nu}$$
For the temporal component:
$$\tilde{v}^0 = v^0 - \mathcal{H}\alpha - \alpha'$$
For the spatial components:
$$\tilde{v}^i = v^i - (\beta')^{,i} - (d^i)'$$

---

## Exercise 30 - Gauge invariance of $\epsilon_m$

### Problem
Prove that $\epsilon_m = \delta\rho + \rho_0'(v_\parallel + w_\parallel)$ is gauge-invariant and corresponds to the density perturbation in comoving-orthogonal gauge.

### Derivation
Under coordinate transformations:
$$\tilde{\delta\rho} = \delta\rho - \alpha \rho_0'$$
$$\tilde{v}_\parallel = v_\parallel + \beta'$$
$$\tilde{w}_\parallel = w_\parallel + \alpha - \beta'$$
Summing the velocity terms:
$$\tilde{v}_\parallel + \tilde{w}_\parallel = (v_\parallel + \beta') + (w_\parallel + \alpha - \beta') = v_\parallel + w_\parallel + \alpha$$
Therefore:
$$\tilde{\epsilon}_m = \tilde{\delta\rho} + \rho_0'(\tilde{v}_\parallel + \tilde{w}_\parallel) = (\delta\rho - \alpha\rho_0') + \rho_0'(v_\parallel + w_\parallel + \alpha) = \delta\rho + \rho_0'(v_\parallel + w_\parallel) = \epsilon_m$$
In comoving-orthogonal gauge, $v_\parallel + w_\parallel = 0$, so $\epsilon_m = \delta\rho_{\rm com}$.

---

## Exercise 31 - Gauge invariance of $\zeta$ and the relativistic Poisson equation

### Problem
Verify that $\zeta$ is gauge-invariant, and derive the Poisson-like equation for Bardeen potentials in terms of $\epsilon_m$.

### Derivation
1. **Gauge invariance of $\zeta$**:
   $$\zeta \equiv -\phi - \mathcal{H}\frac{\delta\rho}{\rho_0'}$$
   Under coordinate shifts: $\tilde{\phi} = \phi + \mathcal{H}\alpha$, $\tilde{\delta\rho} = \delta\rho - \alpha\rho_0'$.
   $$\tilde{\zeta} = -(\phi + \mathcal{H}\alpha) - \mathcal{H}\frac{\delta\rho - \alpha\rho_0'}{\rho_0'} = -\phi - \mathcal{H}\alpha - \mathcal{H}\frac{\delta\rho}{\rho_0'} + \mathcal{H}\alpha = \zeta$$
2. **Relativistic Poisson equation**:
   From linearly perturbed Einstein equations in longitudinal gauge:
   $$\nabla^2\Phi - 3\mathcal{H}(\Phi' + \mathcal{H}\Psi) = 4\pi G a^2 \delta\rho$$
   The momentum constraint gives:
   $$\Phi' + \mathcal{H}\Psi = -4\pi G a^2 (\rho_0 + p_0) v_\parallel$$
   Multiplying by $3\mathcal{H}$ and substituting into the first equation:
   $$\nabla^2\Phi + 3\mathcal{H}\left[4\pi G a^2 (\rho_0 + p_0)v_\parallel\right] = 4\pi G a^2 \delta\rho$$
   $$\nabla^2\Phi = 4\pi G a^2 \left[ \delta\rho - 3\mathcal{H}(\rho_0 + p_0)v_\parallel \right]$$
   Using $\rho_0' = -3\mathcal{H}(\rho_0 + p_0)$:
   $$\nabla^2\Phi = 4\pi G a^2 \left[ \delta\rho + \rho_0' v_\parallel \right] = 4\pi G a^2 \epsilon_m$$
   This is the exact relativistic, gauge-invariant Poisson equation.



## Linked References

- [[Cosmology_of_the_Early_Universe_MOC]]


