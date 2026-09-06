---
layout: default
title: "What is machine learning"
---

# What is machine learning

a one-page summary of the field that Mapelli's notes touch on briefly. ML is *fitting models to data*, but with much greater flexibility than the parametric models of [Linear least squares](../../02_Zettel/Theory/Linear least squares.html) or [Non-linear fitting with scipy](../../02_Zettel/Theory/Non-linear fitting with scipy.html) — and the field has developed its own vocabulary, recipes, and pitfalls.

## the core distinction: supervised vs unsupervised

**supervised learning**: I have inputs $\mathbf{x}_i$ and *labeled* outputs $y_i$. learn the mapping $f: \mathbf{x} \mapsto y$. examples:

- **classification**: $y$ is a discrete category. galaxy: spiral / elliptical / irregular?
- **regression**: $y$ is a continuous value. given the spectrum, what is the redshift?

**unsupervised learning**: only inputs, no labels. find structure in the data. examples:

- **clustering**: group similar examples (k-means, DBSCAN). find galaxy populations
- **dimensionality reduction**: compress while preserving structure (PCA, t-SNE, UMAP)
- **anomaly detection**: identify outliers. find rare transients

**reinforcement learning**: an agent takes actions in an environment, gets rewards, learns policy. less relevant to most physics; central to robotics and game-playing AI.

## the workflow

1. **collect data**: features $\mathbf{x}_i$ and (for supervised) labels $y_i$
2. **split**: training set (fit), validation set (tune hyperparameters), test set (evaluate generalization). typical: 70/15/15 or 80/10/10
3. **preprocess**: scale features, handle missing values, encode categorical variables
4. **choose model**: linear / tree / neural network / ...
5. **train**: minimize loss on training data
6. **validate**: tune hyperparameters using validation set
7. **test**: report final accuracy on the held-out test set
8. **deploy**: predict on new data

## the central tradeoff: bias-variance

every model balances two error sources:

- **bias**: model is *too simple* to capture the true relationship. underfits. high error on both training and test
- **variance**: model is *too flexible*, fits noise as if it were signal. overfits. low training error, high test error

graphically: as I increase model complexity, training error always decreases but test error first decreases (capturing real structure) then increases (memorizing noise). the optimal complexity is at the test-error minimum.

## regularization

forces the model to be simpler than the data alone would allow. options:

- **L1 / Lasso**: penalize $\sum |\theta_k|$ → sparse solutions (many parameters → 0)
- **L2 / Ridge**: penalize $\sum \theta_k^2$ → small parameters
- **dropout** (neural networks): randomly drop neurons during training
- **early stopping**: stop training before fully converged

regularization hyperparameter (e.g. $\lambda$) controls strength: too small = overfit, too large = underfit. tune via cross-validation.

## cross-validation

for small datasets where I cannot afford a separate validation set: split the training data into $K$ folds. for each fold, train on the others and validate on that fold. average the validation scores.

```python
from sklearn.model_selection import cross_val_score
scores = cross_val_score(model, X, y, cv=5)
print(f"accuracy: {scores.mean():.3f} ± {scores.std():.3f}")
```

## evaluation metrics

for **classification**:
- **accuracy**: fraction correct. misleading on imbalanced data
- **precision**: of the predicted positives, how many were true? (purity)
- **recall**: of the true positives, how many did I find? (completeness)
- **F1**: harmonic mean of precision and recall
- **ROC-AUC**: integral under the ROC curve, captures rank-ordering ability

for **regression**:
- **MSE**: mean squared error. emphasizes large errors
- **MAE**: mean absolute error. robust to outliers
- **R²**: fraction of variance explained
- **scatter** in physical units: report what the numbers actually mean

## the model zoo (briefly)

- **linear/logistic regression**: simplest, interpretable, baseline
- **decision tree**: interpretable, captures non-linear, prone to overfit
- **random forest**: ensemble of trees, robust, default choice
- **gradient boosting** (XGBoost, LightGBM): often the best tabular model, slightly less interpretable
- **support vector machine**: good for small datasets with clear margins
- **k-nearest-neighbors**: simplest possible; often surprisingly competitive
- **neural networks**: universal approximators, dominant for images/text/audio, requires lots of data
- **gaussian processes**: probabilistic regression, gives uncertainties, expensive

## scikit-learn API (the universal interface)

```python
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = RandomForestClassifier(n_estimators=100, max_depth=10, random_state=42)
model.fit(X_train, y_train)
predictions = model.predict(X_test)
print(f"accuracy: {accuracy_score(y_test, predictions):.3f}")
```

every supervised model in scikit-learn follows this pattern: instantiate, `fit`, `predict`, `score`. consistency is the API's main virtue.

## astrophysics applications

- **morphological galaxy classification**: from photometry (random forest, CNN)
- **photometric redshifts**: regression from broadband colors (random forest, neural network)
- **transient classification**: real-time identification of SN, kilonovae, AGN flares (gradient boosting)
- **anomaly detection in time-domain surveys**: find rare events
- **emulators for cosmological simulations**: ML-based surrogate of expensive simulations (Gaussian processes, neural networks)

## the things that go wrong

1. **data leakage**: features at test time include information not available at training time. inflates test scores, fails in deployment
2. **train-test contamination**: same object in both sets. inflates scores
3. **selection bias**: training set differs systematically from real data. doesn't generalize
4. **distribution shift**: test data has different statistical properties than training. model fails

ML is full of footguns. the discipline is in the *experimental protocol* (proper splitting, cross-validation, holdouts), not just the algorithm.

## see also

- [Decision tree classifier](../../02_Zettel/Theory/Decision tree classifier.html)
- [Iris dataset and the ML hello world](../../02_Zettel/Theory/Iris dataset and the ML hello world.html)
- [Interpretability vs accuracy in ML](../../02_Zettel/Theory/Interpretability vs accuracy in ML.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
