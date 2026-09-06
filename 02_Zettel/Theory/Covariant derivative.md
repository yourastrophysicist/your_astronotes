---
layout: default
title: "Covariant derivative"
---

the **covariant derivative** $\nabla$ is the differentiation operator on a curved manifold that respects the geometry. it replaces $\partial$ in equations that involve tensor differentiation. it adds Christoffel-symbol corrections that cancel the non-tensorial part of $\partial$.

## the formula for vectors

for a vector $V^\nu$:
$$\boxed{\, \nabla_\mu V^\nu = \partial_\mu V^\nu + \Gamma^\nu{}_{\mu\rho} V^\rho \,}$$

the $\Gamma$ correction accounts for the change in coordinate basis vectors as you move. without it, $\partial_\mu V^\nu$ wouldn't be a tensor.

for a covector $\omega_\nu$:
$$\nabla_\mu \omega_\nu = \partial_\mu \omega_\nu - \Gamma^\rho{}_{\mu\nu}\omega_\rho$$

note the **minus** sign. covectors transform inversely to vectors, hence the opposite sign.

## the rule for higher-rank tensors

each upper index gets a $+\Gamma$ correction; each lower index gets a $-\Gamma$. example for a $(1, 1)$-tensor:
$$\nabla_\mu T^\nu{}_\rho = \partial_\mu T^\nu{}_\rho + \Gamma^\nu{}_{\mu\sigma}T^\sigma{}_\rho - \Gamma^\sigma{}_{\mu\rho}T^\nu{}_\sigma$$

each tensor index brings one Christoffel correction with appropriate sign.

## key properties

- **linear**: $\nabla(aA + bB) = a\nabla A + b\nabla B$ for constants $a, b$.
- **Leibniz**: $\nabla(A\otimes B) = (\nabla A)\otimes B + A\otimes(\nabla B)$.
- **respects contractions**: $\nabla(\delta^\mu_\nu) = 0$.
- **on scalars**: $\nabla_\mu \phi = \partial_\mu \phi$ (no Christoffel needed; scalars are tensors of rank 0).
- **metric compatibility**: $\nabla_\rho g_{\mu\nu} = 0$ (see [Metric compatibility](../../02_Zettel/Theory/Metric compatibility.html)).

## why we need it

physical equations involve derivatives. for the equations to be **coordinate-independent** (a fundamental requirement of GR), they must be written with **tensor objects** + **tensor operators**. the partial derivative $\partial$ is *not* a tensor operator on tensor fields. $\nabla$ is.

## examples

### gradient of a scalar
$\nabla_\mu \phi = \partial_\mu \phi$. simple.

### divergence of a vector
$\nabla_\mu V^\mu = \partial_\mu V^\mu + \Gamma^\mu{}_{\mu\nu} V^\nu$.

a useful identity: $\Gamma^\mu{}_{\mu\nu} = \frac{1}{\sqrt{|g|}}\partial_\nu \sqrt{|g|}$, so:
$$\nabla_\mu V^\mu = \frac{1}{\sqrt{|g|}}\partial_\mu(\sqrt{|g|}\,V^\mu)$$

this is how to compute divergence in any coordinate system. very useful.

### curl of a covector
$\nabla_{[\mu}\omega_{\nu]} = \partial_{[\mu}\omega_{\nu]}$ (the Christoffel terms cancel due to symmetry $\Gamma^\rho{}_{\mu\nu} = \Gamma^\rho{}_{\nu\mu}$).

so for antisymmetrised gradients, $\nabla = \partial$. used in computing the field-strength tensor $F_{\mu\nu}$ in electromagnetism on a curved background.

### second covariant derivative
$\nabla_\mu \nabla_\nu V^\rho \ne \nabla_\nu \nabla_\mu V^\rho$ in general. the failure to commute is the **Riemann tensor**:
$$[\nabla_\mu, \nabla_\nu] V^\rho = R^\rho{}_{\sigma\mu\nu} V^\sigma$$
this is the operational definition of curvature.

## practical computation

for any expression involving $\nabla$:
1. write out all the $\partial + \Gamma$ corrections explicitly.
2. plug in the Christoffels for your metric.
3. simplify.

for symbolic work, SymPy + GraviPy or Mathematica + xAct handle this automatically.

## see also

- [Christoffel symbols](../../02_Zettel/Theory/Christoffel symbols.html)
- [Levi-Civita connection](../../02_Zettel/Theory/Levi-Civita connection.html)
- [Metric compatibility](../../02_Zettel/Theory/Metric compatibility.html)
- [Riemann tensor](../../02_Zettel/Theory/Riemann tensor.html)
- [Coordinate transformations and tensors](../../02_Zettel/Theory/Coordinate transformations and tensors.html)
- Q3 - covariant derivatives in polar
- Q4 - metric compatibility on the 2-sphere
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.html)
- [Ch 2 - Some Differential Geometry](../../01_Literature/Book/Baumann GR/Ch 2 - Some Differential Geometry.html)
