---
layout: default
title: "Inflaton scalar field dynamics"
---

a scalar field $\phi$ with potential $V(\phi)$ minimally coupled to gravity has stress-energy tensor of a perfect fluid, with energy density and pressure
$$\rho_\phi = \frac{1}{2}\dot\phi^2 + V(\phi)$$
$$p_\phi = \frac{1}{2}\dot\phi^2 - V(\phi)$$

equation-of-state parameter:
$$w_\phi = \frac{p_\phi}{\rho_\phi} = \frac{\frac{1}{2}\dot\phi^2 - V(\phi)}{\frac{1}{2}\dot\phi^2 + V(\phi)}$$

---

## when the scalar field drives inflation

inflation requires $w < -1/3$, i.e. $\dot\phi^2 < V(\phi)$: the **potential energy dominates** over the kinetic energy.

in the limit $\dot\phi^2 \ll V$:
$$\rho_\phi \approx V(\phi), \quad p_\phi \approx -V(\phi) \quad \Rightarrow \quad w \approx -1$$

so the universe behaves as if filled with a slowly-varying cosmological constant. **near-de Sitter expansion**:
$$H^2 \approx \frac{8\pi G}{3} V(\phi) \approx \text{const}, \qquad a(t) \propto e^{Ht}$$

---

## the equations of motion

the Klein-Gordon equation for $\phi$ in the FRW background:
$$\ddot\phi + 3H\dot\phi + V'(\phi) = 0$$

(the $3H\dot\phi$ term is "Hubble friction" — the analog of Stokes drag in a fluid moving through molasses, only here the molasses is the expanding spacetime.)

combined with the Friedmann equation:
$$H^2 = \frac{8\pi G}{3}\left[\frac{1}{2}\dot\phi^2 + V(\phi)\right]$$

these are the **slow-roll equations** of inflation in their full form.

---

## slow-roll approximations

if $\dot\phi^2 \ll V$ (negligible kinetic energy) AND $\ddot\phi \ll H\dot\phi$ (negligible inflaton acceleration compared to Hubble friction), then the equations simplify dramatically:

$$\boxed{\,3H\dot\phi \approx -V'(\phi), \qquad H^2 \approx \frac{8\pi G}{3} V(\phi)\,}$$

these are the **slow-roll equations**. they describe inflation as the inflaton field rolling slowly down its potential, with Hubble friction balancing the gradient force.

---

## slow-roll parameters

introduce two dimensionless small parameters that quantify how well slow-roll holds:

$$\epsilon \equiv \frac{M_{\rm Pl}^2}{2}\left(\frac{V'}{V}\right)^2$$
$$\eta \equiv M_{\rm Pl}^2 \frac{V''}{V}$$

(with $M_{\rm Pl} = (8\pi G)^{-1/2}$ the reduced Planck mass.)

slow-roll holds when both $\epsilon, |\eta| \ll 1$. in this regime:
- $\rho_\phi \approx V$, $p_\phi \approx -V$, $w \approx -1$
- $H \approx $ const, $a \propto e^{Ht}$
- inflation continues as long as $\epsilon < 1$

inflation **ends** when $\epsilon = 1$, i.e. when the slope of the potential is no longer flat enough to sustain slow-roll.

---

## number of e-folds

the **number of e-folds** of inflation is
$$N \equiv \int H\, dt = \int\frac{d a}{a}$$

so $N$ counts how many times the scale factor doubles by $e$ during inflation. solving the flatness and horizon problems requires $N \gtrsim 60$. typical inflation models naturally produce $N \sim 60$–$100$.

in the slow-roll regime, the number of e-folds from $\phi_*$ to $\phi_{\rm end}$ is:
$$N(\phi_*) = \int_{\phi_{\rm end}}^{\phi_*}\frac{d\phi}{M_{\rm Pl}\sqrt{2\epsilon(\phi)}}$$

---

## reheating

once inflation ends ($\epsilon \to 1$), the inflaton **oscillates** around the minimum of its potential. its kinetic energy gradually transfers into other fields — radiation, particle physics fields — through couplings in the Lagrangian.

this is **reheating**: the conversion of inflaton energy into thermal radiation, ending the de Sitter phase and starting the standard hot Big Bang radiation era.

reheating is poorly constrained but crucial: it sets the initial temperature of the post-inflation universe, and influences the abundance of any thermal relics (e.g. dark matter).

---

## quantum fluctuations during inflation

the inflaton field $\phi$ has **quantum vacuum fluctuations** $\delta\phi$. during inflation these get stretched to super-horizon scales and "frozen in":
$$\delta\phi \sim \frac{H}{2\pi}$$

these fluctuations imprint as primordial **density perturbations** $\delta\rho/\rho$ that seed all later structure:
$$\frac{\delta\rho}{\rho} \sim \frac{H^2}{\dot\phi}$$

**generic prediction**: nearly scale-invariant power spectrum, slight tilt toward red (more power on large scales), small but nonzero gravitational waves. Planck 2018 measures:
- $n_s = 0.965 \pm 0.004$ (slightly red-tilted, exactly as predicted)
- $r < 0.06$ (no gravitational waves yet detected)

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md)
- [Inflation overview](../../02_Zettel/Theory/Inflation overview.md)
- [Old vs new vs chaotic inflation, slow-roll](../../02_Zettel/Theory/Old vs new vs chaotic inflation, slow-roll.md)
- [Standard model problems](../../02_Zettel/Theory/Standard model problems.md)
- [Baumann_reference](../../02_Zettel/Theory/Baumann_reference.md) — chapters 2.3, 6.2, 6.3 are the rigorous treatment
