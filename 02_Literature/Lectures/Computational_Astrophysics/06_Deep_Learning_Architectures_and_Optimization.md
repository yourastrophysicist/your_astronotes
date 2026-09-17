---
layout: "default"
title: "06_Deep_Learning_Architectures_and_Optimization"
---
{% raw %}
# Lesson 06 – Deep Learning Architectures and Optimization

*Computational Astrophysics, Prof. Tiziano Zingales*  
*Index: [Computational_Astrophysics_MOC](../../../04_Atlas/Computational_Astrophysics_MOC.html)*

---

## The Transition from Fixed Basis Models to Learned Representations

In classical linear basis function models ($y = \mathbf{w}^T \boldsymbol{\phi}(\mathbf{x})$), the feature mapping $\boldsymbol{\phi}(\mathbf{x})$ is fixed *a priori* by the researcher (e.g., polynomial powers, Fourier harmonics, or Gaussian radial basis centers). This approach encounters severe limitations when processing complex, high-dimensional astronomical data:
1. **The Curse of Dimensionality**: The number of fixed basis functions required to tile an input space scales exponentially with dimension $D$.
2. **Feature Engineering Fragility**: Hand-crafted features that identify exoplanet transits in isolated white-noise light curves fail in the presence of stellar flares, rotational modulation, and instrumental roll drift.

**Deep Learning** resolves these limitations by parameterizing the basis functions themselves, learning hierarchical representations directly from raw data through gradient-based optimization of multi-layer networks.

---

## Artificial Neurons and the Multi-Layer Perceptron (MLP)

The basic computational unit is the **artificial neuron** (originating in the McCulloch & Pitts 1943 model and Rosenblatt's Perceptron). An input vector $\mathbf{x} \in \mathbb{R}^D$ is combined via weights $\mathbf{w}$ and a scalar bias $b$, then passed through a non-linear activation function $h(\cdot)$:

$$y(\mathbf{x}) = h\left( \sum_{i=1}^D w_i x_i + b \right) = h\left( \mathbf{w}^T \mathbf{x} + b \right)$$

```
Inputs (x_i)           Synaptic Weights (w_i)         Summation & Bias            Activation & Output
   x1 ────────────► w1 ───────────┐
   x2 ────────────► w2 ───────────┼────► a = \sum w_i x_i + b ───► [h(a)] ───► Output y
   xD ────────────► wD ───────────┘
   +1 ────────────► b  ───────────┘
```

### Mathematical Formulation of Feed-Forward Networks
In a standard two-layer Feed-Forward Neural Network (Multi-Layer Perceptron, MLP) with $M$ hidden units and $K$ output units:

1. **First-Layer Pre-activations**:
   $$a_j = \sum_{i=1}^D w_{ji}^{(1)} x_i + w_{j0}^{(1)}, \quad j = 1, \dots, M$$
2. **Hidden Layer Activations**:
   $$z_j = h(a_j)$$
3. **Second-Layer Pre-activations**:
   $$a_k = \sum_{j=1}^M w_{kj}^{(2)} z_j + w_{k0}^{(2)}, \quad k = 1, \dots, K$$
4. **Network Outputs**:
   $$y_k = \sigma(a_k)$$

Absorbing biases into the weight matrices by appending an input $x_0 \equiv 1$ and hidden unit $z_0 \equiv 1$:

$$y_k(\mathbf{x}, \mathbf{w}) = \sigma\left( \sum_{j=0}^M w_{kj}^{(2)} h\left( \sum_{i=0}^D w_{ji}^{(1)} x_i \right) \right)$$

---

## Activation Functions

Non-linear activations break the linearity of chained matrix multiplications. Without non-linear activation functions, any deep network collapses mathematically into a single linear transformation: $\mathbf{W}_2 \mathbf{W}_1 \mathbf{x} = \mathbf{W}_{\text{eff}} \mathbf{x}$.

```
      Sigmoid                       Tanh                         ReLU
        1 ┌──────                 1 ┌──────                    │   /
          │  /                      │  /                       │  /
      0.5 ┼─/─                  0 ──┼─/───                  0 ─┼─/────
          │/                        │/                         │/
        0 └──────                -1 └──────                    └──────
```

1. **Logistic Sigmoid**:
   $$\sigma(a) = \frac{1}{1 + e^{-a}}, \quad \sigma'(a) = \sigma(a)(1 - \sigma(a))$$
   *Range*: $(0, 1)$. Prone to vanishing gradients in deep networks because $|\sigma'(a)| \le 0.25$.
2. **Hyperbolic Tangent ($\tanh$)**:
   $$\tanh(a) = \frac{e^a - e^{-a}}{e^a + e^{-a}} = 2\sigma(2a) - 1, \quad \tanh'(a) = 1 - \tanh^2(a)$$
   *Range*: $(-1, 1)$. Zero-centered, providing faster convergence than standard sigmoid.
3. **Rectified Linear Unit (ReLU)**:
   $$h(a) = \max(0, a), \quad h'(a) = \begin{cases} 1 & a > 0 \\ 0 & a < 0 \end{cases}$$
   *Properties*: Derivative is strictly 1 for all positive activations, completely mitigating vanishing gradients during backpropagation.
4. **Softmax (Multi-Class Output Activation)**:
   $$y_k = \frac{\exp(\beta a_k)}{\sum_{j=1}^K \exp(\beta a_j)}$$
   Enforces a normalized probability distribution over $K$ mutually exclusive categories: $\sum_k y_k = 1$ and $y_k \ge 0$.

---

## Loss Functions in Deep Learning

The objective function measures the discrepancy between model predictions $\mathbf{y}(\mathbf{x})$ and target values $\mathbf{t}$.

### 1. Regression Losses
- **Mean Squared Error ($L_2$ Loss)**:
  $$E(\mathbf{w}) = \frac{1}{2N} \sum_{n=1}^N \|\mathbf{y}_n - \mathbf{t}_n\|_2^2$$
- **Mean Absolute Error ($L_1$ Loss)**:
  $$E(\mathbf{w}) = \frac{1}{N} \sum_{n=1}^N \|\mathbf{y}_n - \mathbf{t}_n\|_1$$
- **Huber Loss** (smooth transition from quadratic for small errors to linear for outliers):
  $$L_\delta(y, t) = \begin{cases} \frac{1}{2}(y - t)^2 & |y - t| \le \delta \\ \delta |y - t| - \frac{1}{2}\delta^2 & |y - t| > \delta \end{cases}$$

### 2. Classification Losses
- **Binary Cross-Entropy**:
  $$E(\mathbf{w}) = -\sum_{n=1}^N \left[ t_n \ln y_n + (1 - t_n) \ln(1 - y_n) \right]$$
- **Multi-Class Categorical Cross-Entropy**:
  $$E(\mathbf{w}) = -\sum_{n=1}^N \sum_{k=1}^K t_{nk} \ln y_{nk}$$
  where $\mathbf{t}_n$ is a one-hot encoded ground-truth indicator vector ($t_{nk} \in \{0, 1\}$).

---

## The Backpropagation Algorithm

Backpropagation (Rumelhart, Hinton, & Williams 1986) is an exact, computationally efficient application of the multivariate **chain rule of calculus** to evaluate error gradients:

$$\frac{\partial E_n}{\partial w_{ji}^{(l)}} = \frac{\partial E_n}{\partial a_j^{(l)}} \frac{\partial a_j^{(l)}}{\partial w_{ji}^{(l)}}$$

We define the **error responsibility term** $\delta_j^{(l)}$:

$$\delta_j^{(l)} \equiv \frac{\partial E_n}{\partial a_j^{(l)}}$$

Because $a_j^{(l)} = \sum_i w_{ji}^{(l)} z_i^{(l-1)}$, we have $\frac{\partial a_j^{(l)}}{\partial w_{ji}^{(l)}} = z_i^{(l-1)}$. Thus:

$$\frac{\partial E_n}{\partial w_{ji}^{(l)}} = \delta_j^{(l)} z_i^{(l-1)}$$

```
Forward Pass:   x ───► a^(1) ───► z^(1) ───► a^(2) ───► y ───► Loss E
                                                                 │
Backward Pass:  \delta^(1) ◄────── \delta^(2) ◄───────────────────┘
```

### Derivation of Backpropagation Recursion
1. **Output Layer ($l = 2$)**:
   For cross-entropy loss with canonical softmax or sigmoid activation, the derivative simplifies cleanly:
   $$\delta_k = y_k - t_k$$
2. **Hidden Layers ($l = 1$)**:
   Applying the chain rule backward from layer $l+1$:
   $$\delta_j^{(l)} = \sum_{k} \frac{\partial E_n}{\partial a_k^{(l+1)}} \frac{\partial a_k^{(l+1)}}{\partial a_j^{(l)}} = \sum_k \delta_k^{(l+1)} \frac{\partial}{\partial a_j^{(l)}} \left( \sum_m w_{km}^{(l+1)} h(a_m^{(l)}) \right)$$
   $$\delta_j^{(l)} = h'\left(a_j^{(l)}\right) \sum_k w_{kj}^{(l+1)} \delta_k^{(l+1)}$$

Errors propagate backward layer by layer, requiring only matrix-vector multiplications proportional to network size.

---

## Convolutional Neural Networks (CNNs)

Fully connected networks ignore spatial and sequential topology: flattening a 1D light curve or 2D astronomical image destroys temporal/spatial neighborhood relationships.

A **Convolutional Neural Network** enforces three structural inductive biases:
1. **Local Receptive Fields**: Neurons connect only to localized patches of the input.
2. **Shared Weights (Kernels/Filters)**: The same convolution filter scans the entire input space, reducing parameters from $\mathcal{O}(D_{\text{in}} \times D_{\text{out}})$ to $\mathcal{O}(K_{\text{size}})$.
3. **Translation Invariance / Equivariance**: A physical feature (such as a transit ingress dip) produces the same feature response regardless of its horizontal position in the time series.

```
       Input (Light Curve / Image)           Convolution Filter           Feature Map
       ┌───┬───┬───┬───┬───┐                     ┌───┬───┐                ┌───┬───┬───┬───┐
       │ 1 │ 1 │ 0 │ 0 │ 0 │      *              │ 1 │ 0 │       =        │ 1 │ 0 │ 0 │ 0 │
       └───┴───┴───┴───┴───┘                     └───┴───┘                └───┴───┴───┴───┘
```

### The Three Stages of a CNN Layer
1. **Convolution Stage**:
   Discrete 2D cross-correlation between input tensor $\mathbf{I}$ and kernel $\mathbf{K}$:
   $$S(i, j) = (\mathbf{I} * \mathbf{K})(i, j) = \sum_{m} \sum_{n} I(i + m, j + n) K(m, n)$$
2. **Detector Stage (Non-linear Activation)**:
   Passes linear feature maps through a non-linearity: $A(i, j) = \text{ReLU}(S(i, j))$.
3. **Pooling Stage**:
   Replaces contiguous rectangular neighborhoods with summary statistics:
   - **Max Pooling**: Reports the maximum value in a window of size $w \times w$ with stride $s$, providing robustness to small translations and compressing feature dimensions.
   - **Average Pooling**: Reports the neighborhood mean.

Deep CNNs stack alternating blocks of `[Conv -> ReLU -> MaxPool]`, followed by flattening into Fully Connected Dense layers and a Softmax classifier to output classification probabilities.

---

## Generative Adversarial Networks (GANs) in Astrophysics

Proposed by Ian Goodfellow et al. (2014), a **Generative Adversarial Network** pits two neural networks against each other in a zero-sum minimax game:

```
 Latent Noise z ~ p_z ───► [Generator G(z)] ───► Synthetic Spectrum G(z) ───┐
                                                                            v
 Real Dataset x ~ p_data ───────────────────────────────────────────► [Discriminator D(x)] ───► Real / Synthetic?
```

1. **Discriminator $D(\mathbf{x})$**: Trained to classify whether an input is an authentic observation ($\mathbf{x} \sim p_{\text{data}}$) or a synthetic output from the generator. It outputs probability $D(\mathbf{x}) \in [0, 1]$.
2. **Generator $G(\mathbf{z})$**: Maps low-dimensional random latent noise $\mathbf{z} \sim p_{\mathbf{z}}$ into the data space, aiming to fool $D$.

### Minimax Objective Formulation
$$\min_G \max_D V(D, G) = \mathbb{E}_{\mathbf{x} \sim p_{\text{data}}} [\ln D(\mathbf{x})] + \mathbb{E}_{\mathbf{z} \sim p_{\mathbf{z}}} [\ln(1 - D(G(\mathbf{z})))]$$

### Astrophysical Application: Zingales & Waldmann (2018)
In exoplanetary astrophysics, generating high-resolution synthetic planetary spectra via physical radiative transfer models requires extensive computational time.

Prof. Zingales and I. Waldmann (2018) developed a deep convolutional GAN framework trained on a grid of **10 million synthetic exoplanetary transmission spectra**:
- Varied physical parameters: molecular abundances ($\text{H}_2\text{O}, \text{CO}_2, \text{CO}, \text{CH}_4$), equilibrium temperature $T_{\text{eq}}$, planetary mass $M_p$, and radius $R_p$.
- The Generator learns the non-linear manifold of radiative transfer solutions, generating synthetic exoplanet spectra in microseconds.
- The Discriminator acts as an automated anomaly detector and physical consistency check, flagging unphysical atmospheric spectral configurations.

---

## Related Notes
- [04_Exoplanet_Demographics_Orbital_Mechanics_and_Transits](./04_Exoplanet_Demographics_Orbital_Mechanics_and_Transits.html)
- [05_Machine_Learning_Foundations_and_Regression_Models](./05_Machine_Learning_Foundations_and_Regression_Models.html)
- [07_Atmospheric_Radiative_Transfer_and_Line_Profiles](./07_Atmospheric_Radiative_Transfer_and_Line_Profiles.html)
- [08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx](./08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx.html)


## Computational Visuals & Deep Neural Networks

![Deep Neural Network Architecture and Backpropagation](../../../assets/images/comp_ml_p35.png)
*Figure COMP-06: Multi-layer perceptron (MLP) and convolutional neural network (CNN) computational graph. Illustrates reverse-mode automatic differentiation (backpropagation) computing $\frac{\partial \mathcal{L}}{\partial W_{ij}}$ via the chain rule.*
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./05_Machine_Learning_Foundations_and_Regression_Models.html" class="backlink-item">05_Machine_Learning_Foundations_and_Regression_Models</a></li>
    <li class="backlink-item-wrap"><a href="./07_Atmospheric_Radiative_Transfer_and_Line_Profiles.html" class="backlink-item">07_Atmospheric_Radiative_Transfer_and_Line_Profiles</a></li>
    <li class="backlink-item-wrap"><a href="./08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx.html" class="backlink-item">08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Computational/Deep%20neural%20networks%20and%20backpropagation%20for%20astronomical%20spectra.html" class="backlink-item">Deep neural networks and backpropagation for astronomical spectra</a></li>
  </ul>
</div>
