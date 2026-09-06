---
layout: default
title: "Interpretability vs accuracy in ML"
---

# Interpretability vs accuracy in ML

a recurring tension in machine learning. the most accurate models — deep neural networks, gradient-boosted ensembles — are usually *black boxes*: they make predictions but cannot tell me *why*. simpler models — decision trees, linear regression — are slightly less accurate but each prediction comes with an explanation. for science, the explanation often matters as much as the prediction.

## the accuracy-interpretability spectrum

| model | accuracy on tabular data | interpretability |
|---|---|---|
| linear regression | low-medium | very high |
| logistic regression | medium | very high |
| decision tree (shallow) | medium | very high |
| decision tree (deep) | high | medium |
| random forest | high | low |
| gradient boosting (XGBoost) | very high | low |
| deep neural network | very high (with lots of data) | very low |
| Gaussian process | medium-high | medium (kernel-dependent) |

linear regression: I can read off "this feature contributes $\theta_k$ per unit increase." every prediction is a sum of feature contributions. neural network: 100M parameters interacting nonlinearly; no human-readable explanation.

## why interpretability matters in physics

three reasons science prefers interpretable models:

1. **trust**: I will not stake a paper on a number I cannot explain. if the model says "this object is a Type Ia supernova" I want to know which features drove the decision
2. **physics insight**: an interpretable model can *teach* me something about the physical system. linear regression's coefficients are physical quantities (like Tully-Fisher slope = mass-luminosity relation)
3. **debugging**: when the model fails, interpretability tells me where to look. black boxes fail silently
4. **causality**: ML models give *correlation*, not *causation*. interpretable models make this gap visible; black boxes hide it

for engineering or commercial applications (recommender systems, image recognition), accuracy usually wins. for basic science, interpretability typically wins, even at the cost of some accuracy.

## techniques for interpreting black-box models

### feature importance

ask the model: "if I shuffle feature $k$, how much worse does the prediction get?" the more degradation, the more important the feature.

```python
from sklearn.inspection import permutation_importance
result = permutation_importance(model, X_test, y_test, n_repeats=10)
importances = result.importances_mean
```

works for any model. tells me which features matter, not how.

### partial dependence plots

fix one feature at a value, average the prediction over the distribution of the others, plot vs the fixed feature. shows the *marginal* effect of one feature.

```python
from sklearn.inspection import PartialDependenceDisplay
PartialDependenceDisplay.from_estimator(model, X, features=['feature_0', 'feature_1'])
```

### SHAP (SHapley Additive exPlanations)

per-prediction feature attribution based on cooperative-game-theory Shapley values. each feature gets credit for *this specific prediction*. the gold standard for explaining individual predictions.

```python
import shap
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)
shap.summary_plot(shap_values, X_test)
```

### LIME (Local Interpretable Model-agnostic Explanations)

approximate the black box with a simple linear model in a small neighborhood of each prediction. tells me which features drove *this particular* answer, even if the global model is complex.

## simple is often enough

modern ML literature consistently finds that on **tabular data with $< 10^6$ examples**, a well-tuned gradient-boosted tree or random forest beats deep learning, while still being interpretable through SHAP. complex models are required mainly for unstructured data (images, text, audio) or extremely large datasets.

so for most astrophysics ML problems — classification from photometric features, regression from spectra — interpretable trees + ensembles are both more accurate and more transparent than neural networks.

## a worked example: photometric redshift

problem: predict galaxy redshift from broadband photometry $u, g, r, i, z, J, H, K$.

**black-box approach**: train a 10-layer neural network on $10^6$ galaxies. accuracy: $\sigma_z/(1+z) \approx 0.02$. but I cannot tell which colors drive the prediction or why a particular galaxy got its redshift.

**interpretable approach**: fit a random forest with $\sim 100$ trees. accuracy: $\sigma_z/(1+z) \approx 0.025$. SHAP analysis shows that $g - r$ and $i - z$ colors carry most of the information — exactly what the 4000 Å break and the Balmer features predict from physics.

the second approach is slightly worse but **scientifically more useful** because it confirms that the model is using the physically expected features. if SHAP showed it was relying on $u$-band SNR instead, that would be a red flag pointing to selection effects.

## what is and isn't in scope for this course

Mapelli's notes touch on the *idea* of interpretability mainly through the decision tree (which has a single human-readable structure). deeper ML topics (deep learning, transformers, RL) are outside the course. for a first-pass introduction:

1. understand that ML is curve fitting with high-dimensional flexible models
2. understand the bias-variance tradeoff
3. know that decision trees are interpretable, neural networks are not
4. know that interpretability is a *real* tradeoff, not just a feature

## see also

- [Decision tree classifier](../../02_Zettel/Theory/Decision tree classifier.md)
- [What is machine learning](../../02_Zettel/Theory/What is machine learning.md)
- [Iris dataset and the ML hello world](../../02_Zettel/Theory/Iris dataset and the ML hello world.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
