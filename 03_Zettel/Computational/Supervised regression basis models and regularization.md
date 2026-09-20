---
layout: "default"
title: "Supervised regression basis models and regularization"
---
supervised regression models a continuous target variable $y$ (e.g. planetary equilibrium temperature, stellar metallicity) as a function of an input feature vector $\mathbf{x} \in \mathbb{R}^D$.

## linear basis function expansion

non-linear relationships are captured by projecting input features into a non-linear feature space via basis functions $\boldsymbol{\phi}(\mathbf{x}) = (\phi_0(\mathbf{x}), \dots, \phi_{M-1}(\mathbf{x}))^T$:

$$y(\mathbf{x}, \mathbf{w}) = \mathbf{w}^T \boldsymbol{\phi}(\mathbf{x}) = \sum_{j=0}^{M-1} w_j \phi_j(\mathbf{x})$$

common basis sets include polynomial basis ($\phi_j(x) = x^j$), Gaussian radial basis functions (RBFs: $\phi_j(x) = \exp\left(-\frac{(x - \mu_j)^2}{2 s^2}\right)$), and Fourier modes.

## ordinary least squares (ols) and normal equations

given $N$ observations $(\mathbf{x}_i, y_i)$, constructing the $N \times M$ design matrix $\boldsymbol{\Phi}$ with elements $\Phi_{ij} = \phi_j(\mathbf{x}_i)$:

$$E(\mathbf{w}) = \frac{1}{2} \\lvert  \mathbf{y} - \boldsymbol{\Phi} \mathbf{w} \\rvert^2$$

setting $\nabla_\mathbf{w} E = 0$ yields the **normal equations**:

$$\boldsymbol{\Phi}^T \boldsymbol{\Phi} \mathbf{w} = \boldsymbol{\Phi}^T \mathbf{y} \implies \mathbf{w}_{\text{OLS}} = (\boldsymbol{\Phi}^T \boldsymbol{\Phi})^{-1} \boldsymbol{\Phi}^T \mathbf{y}$$

when basis dimensions $M$ approach or exceed sample size $N$, $\boldsymbol{\Phi}^T \boldsymbol{\Phi}$ becomes ill-conditioned or singular, leading to severe overfitting.

## regularization techniques

1. **Ridge Regression ($L_2$ regularization / Tikhonov)**:
   adds a quadratic penalty to the loss function:
   $$E_{\text{Ridge}}(\mathbf{w}) = \frac{1}{2} \\lvert  \mathbf{y} - \boldsymbol{\Phi} \mathbf{w} \\rvert^2 + \frac{\lambda}{2} \\lvert  \mathbf{w} \\rvert_2^2$$
   $$\mathbf{w}_{\text{Ridge}} = (\boldsymbol{\Phi}^T \boldsymbol{\Phi} + \lambda \mathbf{I})^{-1} \boldsymbol{\Phi}^T \mathbf{y}$$
   $\lambda \mathbf{I}$ guarantees invertibility, shrinking weight coefficients smoothly toward zero and suppressing variance.
2. **Lasso Regression ($L_1$ regularization)**:
   $$E_{\text{Lasso}}(\mathbf{w}) = \frac{1}{2} \\lvert  \mathbf{y} - \boldsymbol{\Phi} \mathbf{w} \\rvert^2 + \lambda \sum_{j=1}^{M-1} \lvert w_j\rvert$$
   because the $L_1$ ball has sharp diamond vertices along coordinate axes, Lasso drives non-informative weights to strictly zero, performing automated feature selection.

## see also

- [[Computational_Astrophysics_MOC]]
- [[05_Machine_Learning_Foundations_and_Regression_Models]]
- [[Deep neural networks and backpropagation for astronomical spectra]]
- Bayesian Inference and Parameter Estimation



## Linked References

- [[Deep neural networks and backpropagation for astronomical spectra]]
- [[Computational_Astrophysics_MOC]]


