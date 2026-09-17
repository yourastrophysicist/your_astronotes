---
layout: "default"
title: "Levi-Civita connection"
---
{% raw %}
a **connection** on a manifold tells you how to differentiate vectors at different points (i.e., how to "transport" them). out of all possible connections, GR uses **one specific** one: the **Levi-Civita connection**, fixed by two requirements.

## the two requirements

1. **metric compatibility**: $\nabla_\rho g_{\mu\nu} = 0$. the metric is "constant" with respect to parallel transport. equivalently: parallel-transporting two vectors preserves their inner product.
2. **torsion-free**: $\Gamma^\rho{}_{\mu\nu} = \Gamma^\rho{}_{\nu\mu}$. equivalently: applying $\nabla$ to a function then antisymmetrising is zero, $\nabla_\mu\nabla_\nu f - \nabla_\nu\nabla_\mu f = 0$.

these two conditions **uniquely determine** the Christoffel symbols in terms of the metric:
$$\Gamma^\rho{}_{\mu\nu} = \frac{1}{2}g^{\rho\sigma}\!\left(\partial_\mu g_{\sigma\nu} + \partial_\nu g_{\sigma\mu} - \partial_\sigma g_{\mu\nu}\right)$$

this is the **fundamental theorem of (pseudo-)Riemannian geometry**.

## why GR uses Levi-Civita

GR's central principle is that **gravity is geometry**. there's nothing else around to define the connection: just a metric. so the connection should be derivable from the metric alone, and the Levi-Civita choice is the unique one with metric compatibility + zero torsion.

physical intuitions:
- **metric compatibility**: lengths and angles don't spontaneously change under parallel transport. clocks and rulers behave consistently.
- **zero torsion**: an infinitesimal parallelogram closes. moving "right then up" arrives at the same point as "up then right."

## alternatives (not used in GR)

other theories *do* use other connections:
- **Einstein-Cartan theory** allows torsion ($\Gamma$ asymmetric in lower indices), source by spin.
- **teleparallel gravity** uses zero curvature but nonzero torsion.
- **metric-affine gravity** drops both metric compatibility and zero torsion.

these are alternative theories of gravity, sometimes invoked in beyond-standard-model contexts. **standard GR**, the one in this course, uses Levi-Civita exclusively.

## explicit derivation of the Christoffel formula

assume metric compatibility:
$$\partial_\rho g_{\mu\nu} = \nabla_\rho g_{\mu\nu} + \Gamma^\sigma{}_{\rho\mu}g_{\sigma\nu} + \Gamma^\sigma{}_{\rho\nu}g_{\mu\sigma} = \Gamma^\sigma{}_{\rho\mu}g_{\sigma\nu} + \Gamma^\sigma{}_{\rho\nu}g_{\mu\sigma}$$
(since $\nabla g = 0$).

write three permutations:
$$\partial_\rho g_{\mu\nu} = \Gamma^\sigma{}_{\rho\mu}g_{\sigma\nu} + \Gamma^\sigma{}_{\rho\nu}g_{\mu\sigma}$$
$$\partial_\mu g_{\nu\rho} = \Gamma^\sigma{}_{\mu\nu}g_{\sigma\rho} + \Gamma^\sigma{}_{\mu\rho}g_{\nu\sigma}$$
$$\partial_\nu g_{\rho\mu} = \Gamma^\sigma{}_{\nu\rho}g_{\sigma\mu} + \Gamma^\sigma{}_{\nu\mu}g_{\rho\sigma}$$

add the second + third minus the first, use symmetry of $\Gamma$ in lower indices, and the result is the Christoffel formula.

## the geodesic equation as a consequence

free particles follow geodesics. the geodesic equation $\dot x^\mu \nabla_\mu \dot x^\nu = 0$ becomes, with Levi-Civita Christoffels:
$$\ddot x^\nu + \Gamma^\nu{}_{\alpha\beta}\dot x^\alpha\dot x^\beta = 0$$

and this is exactly **the equation that extremises the proper time** for timelike geodesics, **the equation that extremises the action $S = -m\int d\tau$**, the equation of motion of free test particles. the Levi-Civita connection makes "geodesic = autoparallel = extremal proper-time path" all one and the same.

## see also

- [Christoffel symbols](./Christoffel%20symbols.html)
- [Metric compatibility](./Metric%20compatibility.html)
- [Covariant derivative](./Covariant%20derivative.html)
- [Geodesic equation](./Geodesic%20equation.html)
- [Parallel transport](./Parallel%20transport.html)
- [Manifold metric and signature](./Manifold%20metric%20and%20signature.html)
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 2 - Some Differential Geometry](../../02_Literature/Book/Baumann%20GR/Ch%202%20-%20Some%20Differential%20Geometry.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../02_Literature/Book/Baumann%20GR/Ch%204%20-%20Spacetime%20Curvature.html" class="backlink-item">Ch 4 - Spacetime Curvature</a></li>
    <li class="backlink-item-wrap"><a href="./Christoffel%20symbols.html" class="backlink-item">Christoffel symbols</a></li>
    <li class="backlink-item-wrap"><a href="./Covariant%20derivative.html" class="backlink-item">Covariant derivative</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Geodesic%20equation.html" class="backlink-item">Geodesic equation</a></li>
    <li class="backlink-item-wrap"><a href="./Metric%20compatibility.html" class="backlink-item">Metric compatibility</a></li>
    <li class="backlink-item-wrap"><a href="./Parallel%20transport.html" class="backlink-item">Parallel transport</a></li>
  </ul>
</div>
