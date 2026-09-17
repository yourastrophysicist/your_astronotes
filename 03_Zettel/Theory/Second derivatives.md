---
layout: "default"
title: "Second derivatives"
---
{% raw %}
# Second derivatives

the standard finite-difference formula for $f''(x)$ is the centered three-point stencil:

$$f''(x) \approx \frac{f(x + h) - 2f(x) + f(x - h)}{h^2}$$

three function evaluations, $O(h^2)$ accuracy. the workhorse for everything from Newton-Raphson on a 2nd-order ODE to discretizing the Laplacian on a grid.

## why this works

Taylor-expand:
$$f(x + h) = f(x) + h f'(x) + \tfrac{h^2}{2} f''(x) + \tfrac{h^3}{6} f'''(x) + \tfrac{h^4}{24} f^{(4)}(x) + \cdots$$
$$f(x - h) = f(x) - h f'(x) + \tfrac{h^2}{2} f''(x) - \tfrac{h^3}{6} f'''(x) + \tfrac{h^4}{24} f^{(4)}(x) - \cdots$$

add the two:
$$f(x + h) + f(x - h) = 2f(x) + h^2 f''(x) + \tfrac{h^4}{12} f^{(4)}(x) + O(h^6)$$

solve for $f''$:
$$f''(x) = \frac{f(x + h) - 2f(x) + f(x - h)}{h^2} - \tfrac{h^2}{12} f^{(4)}(x) + O(h^4)$$

so the error is $-\tfrac{h^2}{12} f^{(4)}(\xi)$, $O(h^2)$ accuracy.

## the U-shape: even worse than for first derivatives

second derivatives have a **fiercer** roundoff problem. the numerator is $f(x+h) - 2f(x) + f(x-h)$ — three near-equal terms, two cancellations. roundoff in the numerator is $\sim \epsilon \lvert f\rvert$. dividing by $h^2$ amplifies it as $\epsilon\lvert f\rvert/h^2$.

balancing truncation $h^2\lvert f^{(4)}\rvert/12$ against roundoff $\epsilon\lvert f\rvert/h^2$:

$$h_{\rm opt} \sim \epsilon^{1/4} \approx 10^{-4}$$

minimum error:
$$E_{\min} \sim \sqrt{\epsilon\lvert f\rvert\lvert f^{(4)}\rvert} \approx 10^{-8}$$

so the **best achievable accuracy of a second derivative by finite differences is only $\sim 10^{-8}$**, even with double precision. for higher accuracy, use complex-step differentiation or symbolic/automatic differentiation.

## higher-order stencils

5-point central:
$$f''(x) \approx \frac{-f(x+2h) + 16f(x+h) - 30f(x) + 16f(x-h) - f(x-2h)}{12 h^2}$$

$O(h^4)$ accuracy. five function evaluations, optimal $h_{\rm opt} \sim \epsilon^{1/6} \sim 10^{-3}$, achievable error $\sim 10^{-10}$.

useful when I need precision and the function is smooth. for the standard exam problems, the 3-point formula is enough.

## partial second derivatives

mixed partial $\partial^2 f/\partial x \partial y$ uses a 4-point stencil:

$$\frac{\partial^2 f}{\partial x \partial y}(x, y) \approx \frac{f(x+h, y+h) - f(x+h, y-h) - f(x-h, y+h) + f(x-h, y-h)}{4 h^2}$$

$O(h^2)$ accuracy.

unmixed second partials use the 1D formula along each axis.

## python

```python
def f_double_prime(f, x, h=1e-4):
    return (f(x + h) - 2*f(x) + f(x - h)) / h**2
```

## the Laplacian

the discrete Laplacian on a uniform 1D grid is just the 3-point second derivative:

$$\nabla^2 u_i = u_{i+1} - 2 u_i + u_{i-1}    \qquad (\Delta x = 1)$$

in 2D, on a grid:

$$\nabla^2 u_{i,j} = u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 4 u_{i,j}$$

the famous **5-point stencil**. this discretizes the Poisson equation $\nabla^2 \phi = \rho$ into a sparse linear system that can be solved by Gauss-Seidel, conjugate gradient, or multigrid.

## astrophysics use cases

- **Poisson equation** for self-gravity: $\nabla^2 \Phi = 4\pi G \rho$, discretized as a 5-point stencil
- **Schrödinger equation discretization**: kinetic-energy operator is $-\tfrac{\hbar^2}{2m} \nabla^2$, finite-differenced
- **diffusion equation**: $\partial_t u = D \nabla^2 u$, the Laplacian is the spatial part
- **wave equation**: $\partial_t^2 u = c^2 \nabla^2 u$
- **stability analysis** in oscillator-like systems: locating extrema of an effective potential, $f''(x^*) > 0$ for stability

## see also

- [Forward backward and central differences](./Forward%20backward%20and%20central%20differences.html)
- [Roundoff vs truncation balance](./Roundoff%20vs%20truncation%20balance.html)
- [Optimal step size for derivatives](./Optimal%20step%20size%20for%20derivatives.html)
- [Finite difference discretization](./Finite%20difference%20discretization.html)
- [Mathematical_Numerical_Methods_MOC](../../04_Atlas/Mathematical_Numerical_Methods_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Finite%20difference%20discretization.html" class="backlink-item">Finite difference discretization</a></li>
    <li class="backlink-item-wrap"><a href="./Forward%20backward%20and%20central%20differences.html" class="backlink-item">Forward backward and central differences</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Mathematical_Numerical_Methods_MOC.html" class="backlink-item">Mathematical_Numerical_Methods_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Partial%20numerical%20derivatives.html" class="backlink-item">Partial numerical derivatives</a></li>
  </ul>
</div>
