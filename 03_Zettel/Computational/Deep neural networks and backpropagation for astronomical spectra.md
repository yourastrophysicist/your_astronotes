---
layout: "default"
title: "Deep neural networks and backpropagation for astronomical spectra"
---
deep neural networks act as universal function approximators capable of learning non-linear mappings between high-dimensional astronomical observations and physical parameters.

## multi-layer perceptron (mlp) architecture

a feed-forward neural network transforms input vector $\mathbf{a}^{(0)} = \mathbf{x}$ through $L$ hidden layers:

$$\mathbf{z}^{(l)} = \mathbf{W}^{(l)} \mathbf{a}^{(l-1)} + \mathbf{b}^{(l)}, \quad \mathbf{a}^{(l)} = \sigma\left(\mathbf{z}^{(l)}\right)$$

where $\mathbf{W}^{(l)}$ is the weight matrix, $\mathbf{b}^{(l)}$ is the bias vector, and $\sigma(\cdot)$ is a non-linear activation function (ReLU: $\max(0, z)$, LeakyReLU, GELU).

## the backpropagation derivation

to minimize loss $J(\mathbf{W}, \mathbf{b}) = \mathcal{L}(\mathbf{a}^{(L)}, \mathbf{y})$ via gradient descent:

$$\mathbf{W}^{(l)} \leftarrow \mathbf{W}^{(l)} - \eta \frac{\partial J}{\partial \mathbf{W}^{(l)}}$$

defining the error vector at layer $l$ as $\boldsymbol{\delta}^{(l)} \equiv \frac{\partial J}{\partial \mathbf{z}^{(l)}}$:
1. **output layer error**:
   $$\boldsymbol{\delta}^{(L)} = \nabla_{\mathbf{a}^{(L)}} \mathcal{L} \odot \sigma'\left(\mathbf{z}^{(L)}\right)$$
2. **backward error propagation (chain rule)**:
   $$\boldsymbol{\delta}^{(l)} = \left( (\mathbf{W}^{(l+1)})^T \boldsymbol{\delta}^{(l+1)} \right) \odot \sigma'\left(\mathbf{z}^{(l)}\right)$$
3. **parameter gradients**:
   $$\frac{\partial J}{\partial \mathbf{W}^{(l)}} = \boldsymbol{\delta}^{(l)} (\mathbf{a}^{(l-1)})^T, \quad \frac{\partial J}{\partial \mathbf{b}^{(l)}} = \boldsymbol{\delta}^{(l)}$$

computed efficiently in $\mathcal{O}(N_{\text{params}})$ operations via reverse-mode automatic differentiation.

## applications in computational astrophysics

1. **Convolutional Neural Networks (1D/2D CNNs)**:
   apply translation-invariant convolutional kernels to light curves (vetting transit candidates against false positives, e.g. Shallue & Vanderburg 2018 Kepler-90i).
2. **Surrogate retrieval models (Exoformer / GANs)**:
   traditional Bayesian atmospheric retrieval requires evaluating $10^5 - 10^6$ forward radiative transfer models ($\sim \text{days}$ per spectrum). training deep neural networks or GANs (Zingales & Waldmann 2018) as emulator surrogates evaluates spectra in $< 1\text{ millisecond}$, accelerating retrievals by $10^4\times$.

## see also

- [[Computational_Astrophysics_MOC]]
- [[06_Deep_Learning_Architectures_and_Optimization]]
- [[Supervised regression basis models and regularization]]
- [[Exoplanet atmospheric retrieval and TauREx framework]]



## Linked References

- [[Supervised regression basis models and regularization]]
- [[Computational_Astrophysics_MOC]]


