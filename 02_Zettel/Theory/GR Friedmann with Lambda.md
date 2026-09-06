---
layout: default
title: "GR Friedmann with Lambda"
---

the **GR derivation of Friedmann's equations**, including the cosmological constant $\Lambda$. the rigorous version of the Newtonian shell argument. companion: Friedmann equations with Λ for additional context.

## the setup

start with Einstein's equations including $\Lambda$:
$$R_{\mu\nu} - \tfrac{1}{2}g_{\mu\nu}R + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4}T_{\mu\nu}$$

assume the metric is FLRW:
$$ds^2 = -c^2 dt^2 + a^2(t)\left[\frac{dr^2}{1 - kr^2} + r^2 d\Omega^2\right]$$

assume the matter is a **perfect fluid** with energy density $\rho c^2$ + pressure $p$:
$$T^{\mu\nu} = (\rho c^2 + p)u^\mu u^\nu + p g^{\mu\nu}$$

with $u^\mu = (1, 0, 0, 0)$ for comoving observers.

## compute Einstein tensor

with FLRW + perfect fluid:
$$G_{00} = 3\!\left(\frac{\dot a^2}{a^2 c^2} + \frac{k}{a^2}\right)$$
$$G_{ii} = -g_{ii}\left[\frac{2\ddot a}{ac^2} + \frac{\dot a^2}{a^2 c^2} + \frac{k}{a^2}\right]$$

set equal to $T_{\mu\nu}$ + $\Lambda g_{\mu\nu}$, with appropriate factors of $c$.

## the resulting equations

### Friedmann equation (constraint)

$$\boxed{\, \left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2} + \frac{\Lambda c^2}{3} \,}$$

### acceleration equation

$$\boxed{\, \frac{\ddot a}{a} = -\frac{4\pi G}{3}\!\left(\rho + \frac{3p}{c^2}\right) + \frac{\Lambda c^2}{3} \,}$$

note the **$+3p/c^2$** in the source: pressure also gravitates in GR (vs Newtonian only $\rho$).

## the role of $\Lambda$

three equivalent interpretations:
1. **geometric**: $\Lambda$ is a curvature constant, the only other tensor combination consistent with Einstein's equation (besides $G_{\mu\nu}$ + $g_{\mu\nu}T$).
2. **vacuum energy**: $\Lambda$ acts as a fluid with $\rho_V = \Lambda c^2/(8\pi G)$, $p_V = -\rho_V c^2$. constant density, negative pressure.
3. **dark energy**: an unknown component driving accelerated expansion.

at present: $\Omega_\Lambda \approx 0.69$, dominates the energy budget.

## the conservation law

the contracted Bianchi identity $\nabla^\mu G_{\mu\nu} = 0$ implies $\nabla^\mu T_{\mu\nu} = 0$, the **continuity equation**:
$$\dot\rho + 3H(\rho + p/c^2) = 0$$

(with $H = \dot a/a$). only **two of the three equations** (Friedmann, acceleration, continuity) are independent.

## the Newtonian comparison

the Newtonian derivation ([Newtonian Friedmann derivation](../../02_Zettel/Theory/Newtonian Friedmann derivation.html)) gives the same Friedmann equation, but without:
- the $3p$ pressure term (radiation decelerates more than matter alone would).
- the $\Lambda$ term (must be added by hand, no clear interpretation).
- the relativistic generalisation.

so GR is **necessary** for cosmology that includes radiation + dark energy + light propagation.

## see also

- Friedmann equations with Λ
- [Friedmann equations](../../02_Zettel/Theory/Friedmann equations.html)
- [Newtonian Friedmann derivation](../../02_Zettel/Theory/Newtonian Friedmann derivation.html)
- [Friedmann solutions](../../02_Zettel/Theory/Friedmann solutions.html)
- [Cosmological constant](../../02_Zettel/Theory/Cosmological constant.html)
- [Stress-energy tensor](../../02_Zettel/Theory/Stress-energy tensor.html)
- [Continuity equation](../../02_Zettel/Theory/Continuity equation.html)
- [Equation of state and density scaling](../../02_Zettel/Theory/Equation of state and density scaling.html)
- [Einstein equations](../../02_Zettel/Theory/Einstein equations.html)
- Q18 - derive the acceleration equation
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.html)
