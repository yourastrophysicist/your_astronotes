---
layout: default
title: "Friedmann equation General Relativity FLRW"
---
> **Goal**: Derive the first and second Friedmann equations directly from the Einstein Field Equations $G_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu}$ for a homogeneous and isotropic expanding Universe described by the Friedmann-Lemaître-Robertson-Walker (FLRW) metric.

---

## 1. The Geometric Premise: FLRW Metric

By the Cosmological Principle, space is homogeneous (invariant under spatial translations) and isotropic (invariant under spatial rotations about any point). The most general metric satisfying these symmetries is the FLRW line element in comoving spherical coordinates $(t, r, \theta, \phi)$:

$$ds^2 = g_{\mu\nu} dx^\mu dx^\nu = -c^2 dt^2 + a(t)^2 \left[ \frac{dr^2}{1 - k r^2} + r^2 d\theta^2 + r^2 \sin^2\theta d\phi^2 \right]$$

where:
- $t$ is cosmic proper time for a comoving observer. The coordinates are $x^\mu = (t, r, \theta, \phi)$ with $x^0 = t$ (not $ct$), so $g_{00} = -c^2$ and $\partial_0 = \partial/\partial t$.
- $a(t)$ is the dimensionless cosmic scale factor ($a(t_0) = 1$ today).
- $k$ is the spatial curvature constant, with units of length$^{-2}$ in this normalisation. $k < 0$ is open, $k = 0$ flat, $k > 0$ closed. Rescaling $r \to r/\sqrt{|k|}$ and $a \to a/\sqrt{|k|}$ gives the alternative convention $k \in \{-1, 0, +1\}$ with a dimensional $a$. Every formula below holds in both.
- Metric convention: $(-, +, +, +)$ signature.
- Spatial indices $i, j, m$ run over $r, \theta, \phi$. $\tilde g_{ij}$ denotes the time-independent spatial metric, $g_{ij} = a^2(t)\,\tilde g_{ij}$.

The nonzero metric components are:
$$g_{00} = -c^2, \quad g_{rr} = \frac{a(t)^2}{1 - k r^2}, \quad g_{\theta\theta} = a(t)^2 r^2, \quad g_{\phi\phi} = a(t)^2 r^2 \sin^2\theta$$
Inverse metric components:
$$g^{00} = -\frac{1}{c^2}, \quad g^{rr} = \frac{1 - k r^2}{a(t)^2}, \quad g^{\theta\theta} = \frac{1}{a(t)^2 r^2}, \quad g^{\phi\phi} = \frac{1}{a(t)^2 r^2 \sin^2\theta}$$

---

## 2. Christoffel Symbols $\Gamma^\alpha_{\mu\nu}$

The Levi-Civita connection coefficients are defined by:
$$\Gamma^\alpha_{\mu\nu} = \frac{1}{2} g^{\alpha\sigma} \left( \partial_\mu g_{\nu\sigma} + \partial_\nu g_{\mu\sigma} - \partial_\sigma g_{\mu\nu} \right)$$

### 2.1 Time components ($\alpha = 0$):
Since $g^{00} = -1/c^2$ and $g_{0\sigma} = 0$ for $\sigma \ne 0$:
$$\Gamma^0_{\mu\nu} = \frac{1}{2} g^{00} (\partial_\mu g_{\nu 0} + \partial_\nu g_{\mu 0} - \partial_0 g_{\mu\nu}) = \frac{1}{2 c^2} \partial_0 g_{\mu\nu}$$
Because $g_{00} = \text{const}$, $\Gamma^0_{00} = \Gamma^0_{0i} = 0$. For spatial indices $i, j$:
$$\Gamma^0_{ij} = \frac{1}{2c^2} \dot{g}_{ij} = \frac{1}{2c^2} \frac{\partial}{\partial t} [a(t)^2 \tilde{g}_{ij}] = \frac{a \dot{a}}{c^2} \tilde{g}_{ij} = \frac{\dot{a}}{a c^2} g_{ij}$$

Explicitly:
$$\Gamma^0_{rr} = \frac{a \dot{a}}{c^2(1 - k r^2)}, \quad \Gamma^0_{\theta\theta} = \frac{a \dot{a} r^2}{c^2}, \quad \Gamma^0_{\phi\phi} = \frac{a \dot{a} r^2 \sin^2\theta}{c^2}$$

### 2.2 Mixed components ($\alpha = i$):
For $\mu = 0, \nu = j$:
$$\Gamma^i_{0j} = \frac{1}{2} g^{im} (\partial_0 g_{jm} + \partial_j g_{0m} - \partial_m g_{0j}) = \frac{1}{2} g^{im} \dot{g}_{jm} = \frac{1}{2} \frac{\tilde{g}^{im}}{a^2} (2 a \dot{a} \tilde{g}_{jm}) = \frac{\dot{a}}{a} \delta^i_j$$

Therefore:
$$\Gamma^r_{0r} = \Gamma^\theta_{0\theta} = \Gamma^\phi_{0\phi} = \frac{\dot{a}}{a} \equiv H(t)$$

Spatial Christoffels depending on $k$:
$$\Gamma^r_{rr} = \frac{k r}{1 - k r^2}, \quad \Gamma^r_{\theta\theta} = -r(1 - kr^2), \quad \Gamma^r_{\phi\phi} = -r(1 - kr^2)\sin^2\theta$$
$$\Gamma^\theta_{r\theta} = \frac{1}{r}, \quad \Gamma^\theta_{\phi\phi} = -\sin\theta\cos\theta, \quad \Gamma^\phi_{r\phi} = \frac{1}{r}, \quad \Gamma^\phi_{\theta\phi} = \cot\theta$$

---

## 3. Ricci Tensor $R_{\mu\nu}$ and Ricci Scalar $R$

The Ricci tensor is the contraction of the Riemann curvature tensor:
$$R_{\mu\nu} = \partial_\alpha \Gamma^\alpha_{\mu\nu} - \partial_\nu \Gamma^\alpha_{\mu\alpha} + \Gamma^\alpha_{\mu\nu}\Gamma^\beta_{\alpha\beta} - \Gamma^\alpha_{\mu\beta}\Gamma^\beta_{\nu\alpha}$$

### 3.1 The Time-Time Component $R_{00}$:
Set $\mu = 0, \nu = 0$:
$$R_{00} = \partial_\alpha \Gamma^\alpha_{00} - \partial_0 \Gamma^\alpha_{0\alpha} + \Gamma^\alpha_{00}\Gamma^\beta_{\alpha\beta} - \Gamma^\alpha_{0\beta}\Gamma^\beta_{0\alpha}$$
Since $\Gamma^\alpha_{00} = 0$:
$$R_{00} = -\partial_0 \Gamma^i_{0i} - \Gamma^i_{0j}\Gamma^j_{0i}$$
Using $\Gamma^i_{0j} = \frac{\dot{a}}{a}\delta^i_j$:
$$\Gamma^i_{0i} = \Gamma^r_{0r} + \Gamma^\theta_{0\theta} + \Gamma^\phi_{0\phi} = 3 \frac{\dot{a}}{a}$$
$$\partial_0 \Gamma^i_{0i} = 3 \frac{\partial}{\partial t}\left(\frac{\dot{a}}{a}\right) = 3 \left( \frac{\ddot{a}}{a} - \frac{\dot{a}^2}{a^2} \right)$$
$$\Gamma^i_{0j}\Gamma^j_{0i} = \left(\frac{\dot{a}}{a}\delta^i_j\right)\left(\frac{\dot{a}}{a}\delta^j_i\right) = 3 \frac{\dot{a}^2}{a^2}$$

Substituting back:
$$R_{00} = -3 \left( \frac{\ddot{a}}{a} - \frac{\dot{a}^2}{a^2} \right) - 3 \frac{\dot{a}^2}{a^2} = -3 \frac{\ddot{a}}{a}$$
$$\boxed{R_{00} = -3 \frac{\ddot{a}}{a}}$$

### 3.2 The Space-Space Components $R_{ij}$:
By spatial isotropy, $R_{ij}$ must be proportional to the spatial metric: $R_{ij} = \mathcal{C}(t) g_{ij}$. Computing the $rr$-component explicitly:
$$R_{rr} = \partial_\alpha \Gamma^\alpha_{rr} - \partial_r \Gamma^\alpha_{r\alpha} + \Gamma^\alpha_{rr}\Gamma^\beta_{\alpha\beta} - \Gamma^\alpha_{r\beta}\Gamma^\beta_{r\alpha}$$
The four terms are evaluated one at a time. The connection coefficients with at least one lower index $r$ that are needed are
$$\Gamma^0_{rr} = \frac{a\dot a}{c^2(1 - kr^2)}, \quad \Gamma^r_{rr} = \frac{kr}{1 - kr^2}, \quad \Gamma^r_{0r} = \frac{\dot a}{a}, \quad \Gamma^\theta_{r\theta} = \Gamma^\phi_{r\phi} = \frac{1}{r}$$

**Term 1**, $\partial_\alpha\Gamma^\alpha_{rr} = \partial_t\Gamma^0_{rr} + \partial_r\Gamma^r_{rr}$ (the $\theta$ and $\phi$ contributions vanish because $\Gamma^\theta_{rr} = \Gamma^\phi_{rr} = 0$):
$$\partial_t\Gamma^0_{rr} = \frac{\dot a^2 + a\ddot a}{c^2(1 - kr^2)}, \qquad \partial_r\Gamma^r_{rr} = \frac{k}{1 - kr^2} + \frac{2k^2r^2}{(1 - kr^2)^2} = \frac{k(1 + kr^2)}{(1 - kr^2)^2}$$

**Term 2**, $\partial_r\Gamma^\alpha_{r\alpha}$ with $\Gamma^\alpha_{r\alpha} = \Gamma^0_{r0} + \Gamma^r_{rr} + \Gamma^\theta_{r\theta} + \Gamma^\phi_{r\phi} = 0 + \dfrac{kr}{1 - kr^2} + \dfrac{2}{r}$:
$$\partial_r\Gamma^\alpha_{r\alpha} = \frac{k(1 + kr^2)}{(1 - kr^2)^2} - \frac{2}{r^2}$$

**Term 3**, $\Gamma^\alpha_{rr}\Gamma^\beta_{\alpha\beta} = \Gamma^0_{rr}\Gamma^\beta_{0\beta} + \Gamma^r_{rr}\Gamma^\beta_{r\beta}$ with $\Gamma^\beta_{0\beta} = 3\dot a/a$:
$$\Gamma^\alpha_{rr}\Gamma^\beta_{\alpha\beta} = \frac{3\dot a^2}{c^2(1 - kr^2)} + \frac{k^2r^2}{(1 - kr^2)^2} + \frac{2k}{1 - kr^2}$$

**Term 4**, $\Gamma^\alpha_{r\beta}\Gamma^\beta_{r\alpha}$. The non-zero pairs $(\alpha, \beta)$ are $(0, r)$, $(r, 0)$, $(r, r)$, $(\theta, \theta)$ and $(\phi, \phi)$:
$$\Gamma^\alpha_{r\beta}\Gamma^\beta_{r\alpha} = 2\,\Gamma^0_{rr}\Gamma^r_{r0} + \left(\Gamma^r_{rr}\right)^2 + \left(\Gamma^\theta_{r\theta}\right)^2 + \left(\Gamma^\phi_{r\phi}\right)^2 = \frac{2\dot a^2}{c^2(1 - kr^2)} + \frac{k^2r^2}{(1 - kr^2)^2} + \frac{2}{r^2}$$

**Sum**, $R_{rr} = (1) - (2) + (3) - (4)$. The $k(1 + kr^2)/(1 - kr^2)^2$ pieces cancel between terms 1 and 2, the $2/r^2$ pieces between terms 2 and 4, and the $k^2r^2/(1 - kr^2)^2$ pieces between terms 3 and 4. What survives is
$$R_{rr} = \frac{\dot a^2 + a\ddot a + 3\dot a^2 - 2\dot a^2}{c^2(1 - kr^2)} + \frac{2k}{1 - kr^2}$$
$$R_{rr} = \frac{1}{1 - kr^2} \left[ \frac{a \ddot{a}}{c^2} + 2 \frac{\dot{a}^2}{c^2} + 2 k \right] = \frac{g_{rr}}{c^2} \left[ \frac{\ddot{a}}{a} + 2 \left(\frac{\dot{a}}{a}\right)^2 + \frac{2 k c^2}{a^2} \right]$$
The last step uses $g_{rr} = a^2/(1 - kr^2)$. The off-diagonal components $R_{0i}$ vanish by isotropy (a non-zero $R_{0i}$ would be a preferred spatial vector).

Thus, for all spatial components:
$$\boxed{R_{ij} = \frac{g_{ij}}{c^2} \left[ \frac{\ddot{a}}{a} + 2 \left(\frac{\dot{a}}{a}\right)^2 + \frac{2 k c^2}{a^2} \right]}$$

### 3.3 The Ricci Scalar $R$:
Contract with the inverse metric $R = g^{\mu\nu} R_{\mu\nu} = g^{00} R_{00} + g^{ij} R_{ij}$:
$$R = -\frac{1}{c^2}\left(-3\frac{\ddot{a}}{a}\right) + \frac{3}{c^2}\left[ \frac{\ddot{a}}{a} + 2 \left(\frac{\dot{a}}{a}\right)^2 + \frac{2 k c^2}{a^2} \right]$$
$$\boxed{R = \frac{6}{c^2} \left[ \frac{\ddot{a}}{a} + \left(\frac{\dot{a}}{a}\right)^2 + \frac{k c^2}{a^2} \right]}$$

---

## 4. The Stress-Energy Tensor $T_{\mu\nu}$

For a perfect cosmic fluid of proper energy density $\rho(t) c^2$ and isotropic pressure $p(t)$:
$$T_{\mu\nu} = \left(\rho + \frac{p}{c^2}\right) u_\mu u_\nu + p g_{\mu\nu}$$
In comoving coordinates the cosmic fluid is at rest, $dx^i = 0$, and its proper time is the coordinate time, $d\tau = dt$. With $x^0 = t$ the 4-velocity is
$$u^\mu = \frac{dx^\mu}{d\tau} = (1, 0, 0, 0) \implies u_\mu = g_{\mu\nu} u^\nu = (-c^2, 0, 0, 0) \implies u_\mu u^\mu = -c^2$$
So $u_0 u_0 = c^4$ and $u_i = 0$. Then
$$T_{00} = \left(\rho + \frac{p}{c^2}\right) c^4 + p(-c^2) = \rho c^4$$
With raised indices, $T^{00} = \left(\rho + \frac{p}{c^2}\right)u^0u^0 + p\,g^{00} = \rho + \frac{p}{c^2} - \frac{p}{c^2} = \rho$ and $T^{ij} = p\,g^{ij}$, which are the forms used in section 6.
$$T_{ij} = p g_{ij}$$
Mixed components:
$$T^\mu{}_\nu = \text{diag}\left(-\rho c^2, p, p, p\right)$$

---

## 5. Einstein Field Equations & Derivation of Friedmann Equations

The Einstein field equations (with cosmological constant $\Lambda = 0$ for simplicity, or included as $\rho_\Lambda = \Lambda c^2 / 8\pi G$):
$$G_{\mu\nu} \equiv R_{\mu\nu} - \frac{1}{2} g_{\mu\nu} R = \frac{8\pi G}{c^4} T_{\mu\nu}$$

### 5.1 The 00-Component: First Friedmann Equation
Compute $G_{00}$:
$$G_{00} = R_{00} - \frac{1}{2} g_{00} R = -3\frac{\ddot{a}}{a} - \frac{1}{2}(-c^2) \left\{ \frac{6}{c^2} \left[ \frac{\ddot{a}}{a} + \left(\frac{\dot{a}}{a}\right)^2 + \frac{k c^2}{a^2} \right] \right\}$$
$$G_{00} = -3\frac{\ddot{a}}{a} + 3 \left[ \frac{\ddot{a}}{a} + \left(\frac{\dot{a}}{a}\right)^2 + \frac{k c^2}{a^2} \right] = 3 \left[ \left(\frac{\dot{a}}{a}\right)^2 + \frac{k c^2}{a^2} \right]$$

Equate to $\frac{8\pi G}{c^4} T_{00} = \frac{8\pi G}{c^4} (\rho c^4) = 8\pi G \rho$:
$$3 \left[ \left(\frac{\dot{a}}{a}\right)^2 + \frac{k c^2}{a^2} \right] = 8\pi G \rho$$

Divide through by 3:
$$\boxed{\left(\frac{\dot{a}}{a}\right)^2 \equiv H(t)^2 = \frac{8\pi G}{3} \rho - \frac{k c^2}{a^2}}$$
**This is the First Friedmann Equation.**

With the cosmological constant kept explicit, the left side gains $\Lambda g_{00} = -\Lambda c^2$:
$$3 \left[ \left(\frac{\dot{a}}{a}\right)^2 + \frac{k c^2}{a^2} \right] - \Lambda c^2 = 8\pi G \rho \implies H^2 = \frac{8\pi G}{3} \rho - \frac{k c^2}{a^2} + \frac{\Lambda c^2}{3}$$

Note that $G_{00}$ contains no $\ddot a$. The $00$ equation is a constraint on first derivatives, not an evolution equation, which is why it plays the role of an energy integral in the [[Friedmann equation Newtonian shell]] derivation. Here $k$ enters through the geometry (the $2k$ in $R_{rr}$), so its meaning as spatial curvature is built in from the start.

---

### 5.2 The Spatial Trace: Second Friedmann Equation (Acceleration Equation)
Instead of computing $G_{ij}$ directly, it is algebraically cleaner to take the trace-reversed Einstein equations:
$$R_{\mu\nu} = \frac{8\pi G}{c^4} \left( T_{\mu\nu} - \frac{1}{2} g_{\mu\nu} T \right)$$
where $T = g^{\mu\nu} T_{\mu\nu} = T^\mu{}_\mu = -\rho c^2 + 3p$.

For $\mu = 0, \nu = 0$:
$$T_{00} - \frac{1}{2} g_{00} T = \rho c^4 - \frac{1}{2}(-c^2)(-\rho c^2 + 3p) = \rho c^4 - \frac{1}{2}\rho c^4 + \frac{3}{2} p c^2 = \frac{1}{2} c^4 \left( \rho + \frac{3p}{c^2} \right)$$

Substituting $R_{00} = -3 \frac{\ddot{a}}{a}$:
$$-3 \frac{\ddot{a}}{a} = \frac{8\pi G}{c^4} \left[ \frac{1}{2} c^4 \left( \rho + \frac{3p}{c^2} \right) \right] = 4\pi G \left( \rho + \frac{3p}{c^2} \right)$$

Dividing by $-3$:
$$\boxed{\frac{\ddot{a}}{a} = -\frac{4\pi G}{3} \left( \rho + \frac{3p}{c^2} \right)}$$
**This is the Second Friedmann Equation (Acceleration Equation).**

*Physical Insights for the Blackboard*:
1. **Attractive Nature of Gravity**: If the Strong Energy Condition holds ($\rho + 3p/c^2 > 0$), then $\ddot{a} < 0$. Gravity decelerates expansion!
2. **Accelerated Expansion Requirement**: For the Universe to accelerate ($\ddot{a} > 0$), there must exist a cosmic component with sufficiently negative pressure:
   $$p < -\frac{1}{3} \rho c^2 \iff w \equiv \frac{p}{\rho c^2} < -\frac{1}{3}$$
   For a cosmological constant ($\Lambda$), $w = -1 \implies p = -\rho_\Lambda c^2 \implies \rho + 3p/c^2 = -2\rho_\Lambda < 0 \implies \ddot{a} > 0$.

---

## 6. Covariant Energy-Momentum Conservation: Continuity Equation

The Bianchi identities $\nabla_\mu G^{\mu\nu} = 0$ demand covariant conservation of energy-momentum:
$$\nabla_\mu T^{\mu\nu} = \partial_\mu T^{\mu\nu} + \Gamma^\mu_{\mu\sigma} T^{\sigma\nu} + \Gamma^\nu_{\mu\sigma} T^{\mu\sigma} = 0$$

For the time component $\nu = 0$:
$$\partial_0 T^{00} + \partial_i T^{i0} + \Gamma^\mu_{\mu 0} T^{00} + \Gamma^\mu_{\mu i} T^{i0} + \Gamma^0_{00} T^{00} + 2\Gamma^0_{0i} T^{0i} + \Gamma^0_{ij} T^{ij} = 0$$
Using $T^{00} = \rho$, $T^{0i} = 0$, $T^{ij} = p g^{ij}$, $\Gamma^\mu_{\mu 0} = 3\frac{\dot{a}}{a}$, and $\Gamma^0_{ij} = \frac{\dot{a}}{a c^2} g_{ij}$:
$$\dot{\rho} + 3\frac{\dot{a}}{a}\rho + \left(\frac{\dot{a}}{a c^2} g_{ij}\right)(p g^{ij}) = 0$$
Since $g_{ij} g^{ij} = \delta^i_i = 3$:
$$\dot{\rho} + 3 H \rho + \frac{3 H p}{c^2} = 0$$

Factoring $3H$:
$$\boxed{\dot{\rho} + 3 H \left(\rho + \frac{p}{c^2}\right) = 0}$$
**This is the Cosmological Continuity Equation (First Law of Thermodynamics for expanding volume $V \propto a^3$).**

---

## 7. Power-Law Cosmological Solutions $a(t)$

Assume a flat Universe ($k = 0$) dominated by a single fluid with barotropic equation of state $p = w \rho c^2$ ($w = \text{const}$):

$$\frac{\dot{\rho}}{\rho} = -3(1+w)\frac{\dot{a}}{a} \implies \ln \rho = -3(1+w)\ln a + \text{const} \implies \boxed{\rho(a) \propto a^{-3(1+w)}}$$

Substitute into the First Friedmann equation ($k=0$):
$$\left(\frac{\dot{a}}{a}\right)^2 = \frac{8\pi G}{3} \rho_0 a^{-3(1+w)} \implies \dot{a} \propto a^{-\frac{3(1+w) - 2}{2}} = a^{\frac{1 - 3w}{2}}$$
$$a^{\frac{3(1+w)-2}{2}} da \propto dt \implies \int a^{\frac{3w+1}{2}} da \propto t$$
$$\frac{2}{3(1+w)} a^{\frac{3(1+w)}{2}} \propto t \implies \boxed{a(t) \propto t^{\frac{2}{3(1+w)}}}$$

### Canonical Regimes:
1. **Radiation Domination** ($w = 1/3$):
   $$\rho_r \propto a^{-4}, \quad a(t) \propto t^{1/2}, \quad H(t) = \frac{1}{2t}$$
2. **Matter Domination (Dust)** ($w = 0$):
   $$\rho_m \propto a^{-3}, \quad a(t) \propto t^{2/3}, \quad H(t) = \frac{2}{3t}$$
3. **Dark Energy (Cosmological Constant)** ($w = -1$):
   $$\rho_\Lambda = \text{const}, \quad \frac{\dot{a}}{a} = H_\Lambda = \sqrt{\frac{8\pi G \rho_\Lambda}{3}} = \text{const} \implies \boxed{a(t) \propto \exp(H_\Lambda t)}$$
   The power-law formula $a \propto t^{2/[3(1+w)]}$ diverges at $w = -1$, so this case has to be integrated separately, $da/a = H_\Lambda\, dt$.

---

## 8. Consistency Checks

- **Counting.** There are two independent Einstein equations ($00$ and $ii$) for three unknown functions $a(t)$, $\rho(t)$, $p(t)$. An equation of state $p(\rho)$ closes the system. The continuity equation is not a third independent equation, it follows from the other two.
- **Sections 5.1 and 5.2 imply section 6.** Differentiating the first Friedmann equation and inserting the second reproduces $\dot\rho + 3H(\rho + p/c^2) = 0$, see [[Continuity equation cosmology]].
- **Sign of $\Gamma^0_{ij}$.** With $g^{00} = -1/c^2$, the only surviving term is $\Gamma^0_{ij} = -\frac12 g^{00}\partial_0 g_{ij} = +\frac{1}{2c^2}\partial_t g_{ij}$, positive for an expanding universe.
- **Ricci scalar of the spatial slice.** Setting $\dot a = \ddot a = 0$ in $R$ leaves $6k/a^2$, the curvature scalar of a 3-space of constant curvature $k/a^2$, as expected from [[Robertson-Walker metric derivation]].
- **Dimensions.** $R_{00}$ has units of time$^{-2}$ and $R_{ij}$ carries the units of $g_{ij}/c^2 \times$ time$^{-2}$, consistent with $x^0 = t$.

## See Also

- [[Friedmann equation Newtonian shell]] for the Newtonian route and the origin of $k$ as an energy constant.
- [[Acceleration equation]] and [[Continuity equation cosmology]] for the same results from Friedmann plus the first law.
- [[Critical density and density parameters]] for the $\Omega$ form.
