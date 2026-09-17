---
layout: "default"
title: "Einstein tensor and Bianchi"
---
{% raw %}
the **Einstein tensor** $G_{\mu\nu}$ is the unique combination of Ricci and metric that's automatically conserved (via Bianchi identity). this conservation property is what makes Einstein's equation consistent.

## the definition

$$\boxed{\, G_{\mu\nu} \equiv R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R \,}$$

with $R_{\mu\nu}$ the Ricci tensor and $R$ the Ricci scalar.

## key properties

- **symmetric**: $G_{\mu\nu} = G_{\nu\mu}$ (since $R_{\mu\nu}$ is, and $g_{\mu\nu}$ is).
- **divergence-free**: $\nabla^\mu G_{\mu\nu} = 0$ identically.
- **trace**: $g^{\mu\nu}G_{\mu\nu} = R - 2R = -R$.
- $4 \times 5/2 = 10$ independent components in 4D.

the divergence-free property is the crucial one. comes from the **contracted Bianchi identity**:
$$\nabla^\mu G_{\mu\nu} = 0$$

## why $G$ and not $R$

Einstein originally tried $R_{\mu\nu} = 8\pi G T_{\mu\nu}$. but $\nabla^\mu R_{\mu\nu} = \frac{1}{2}\nabla_\nu R \ne 0$ in general. so the equation is **inconsistent** with stress-energy conservation.

fixing this requires the trace-reversed combination $G$, which has $\nabla^\mu G_{\mu\nu} = 0$ guaranteed by Bianchi.

## the contracted Bianchi derivation

start with the second Bianchi identity:
$$\nabla_\rho R_{\mu\nu\sigma\tau} + \nabla_\mu R_{\nu\rho\sigma\tau} + \nabla_\nu R_{\rho\mu\sigma\tau} = 0$$

contract over the indices $\rho$ and $\sigma$ using $g^{\rho\sigma}$:
$$\nabla_\rho R^{\rho}_{\nu\mu\tau} - \nabla_\mu R_{\nu\tau} + \nabla_\nu R_{\rho\mu}^{\rho}{}_\tau = 0$$
(after using Riemann symmetries to flip indices). simplifies to:
$$\nabla^\rho R_{\rho\nu\mu\tau} = \nabla_\mu R_{\nu\tau} - \nabla_\nu R_{\mu\tau}$$

contract once more (over $\nu$ and $\tau$):
$$\nabla^\rho R_{\rho\mu} = \frac{1}{2}\nabla_\mu R$$

equivalently:
$$\nabla^\rho(R_{\rho\mu} - \tfrac{1}{2}g_{\rho\mu}R) = 0\quad\Rightarrow\quad \nabla^\rho G_{\rho\mu} = 0$$

so $G$ is divergence-free, automatically.

## interpretation

the Bianchi identity expresses the **diffeomorphism (coordinate-change) invariance** of GR. coordinate freedom is a "gauge symmetry," and Bianchi is its consistency condition.

mathematically: the diffeomorphism group acts on the metric by $g \to g + \mathcal L_\xi g$ for any vector $\xi$. this is a 4-parameter family of "gauge transformations." Bianchi gives the 4 corresponding conservation laws.

physically: $\nabla^\mu G_{\mu\nu} = 0$ has 4 components and matches the 4 components of $\nabla^\mu T_{\mu\nu} = 0$ (energy + 3-momentum conservation). so geometry's 10 equations $G_{\mu\nu} = 8\pi G T_{\mu\nu}$ minus 4 conservation conditions = **6 truly independent equations** for the metric. matches the 6 physical degrees of freedom of a dynamical metric (2 graviton polarisations + 4 gauge).

## see also

- [Einstein equations](./Einstein%20equations.html)
- [Bianchi identities](./Bianchi%20identities.html)
- [Stress-energy tensor](./Stress-energy%20tensor.html)
- [Ricci tensor and scalar](./Ricci%20tensor%20and%20scalar.html)
- [Riemann tensor](./Riemann%20tensor.html)
- [Trace-reversed Einstein equations](./Trace-reversed%20Einstein%20equations.html)
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 5 - The Einstein Equation](../../02_Literature/Book/Baumann%20GR/Ch%205%20-%20The%20Einstein%20Equation.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Bianchi%20identities.html" class="backlink-item">Bianchi identities</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Book/Baumann%20GR/Ch%205%20-%20The%20Einstein%20Equation.html" class="backlink-item">Ch 5 - The Einstein Equation</a></li>
    <li class="backlink-item-wrap"><a href="./Cosmological%20constant.html" class="backlink-item">Cosmological constant</a></li>
    <li class="backlink-item-wrap"><a href="./Einstein%20equations.html" class="backlink-item">Einstein equations</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Ricci%20tensor%20and%20scalar.html" class="backlink-item">Ricci tensor and scalar</a></li>
    <li class="backlink-item-wrap"><a href="./Stress-energy%20tensor.html" class="backlink-item">Stress-energy tensor</a></li>
    <li class="backlink-item-wrap"><a href="./Trace-reversed%20Einstein%20equations.html" class="backlink-item">Trace-reversed Einstein equations</a></li>
  </ul>
</div>
