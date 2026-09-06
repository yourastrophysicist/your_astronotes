---
layout: default
title: "Iris dataset and the ML hello world"
---

# Iris dataset and the ML hello world

the iris dataset is the canonical first ML example. it is small, clean, classifies cleanly with simple methods, and has been used to teach machine learning since Fisher introduced it in 1936.

## the data

150 flowers, three species (50 each):
- *Iris setosa*
- *Iris versicolor*
- *Iris virginica*

four features per flower:
- sepal length (cm)
- sepal width (cm)
- petal length (cm)
- petal width (cm)

so the input is $X \in \mathbb{R}^{150 \times 4}$, output $y \in \{0, 1, 2\}^{150}$.

## why iris is a good first dataset

1. **small**: trains in milliseconds, fits in memory
2. **clean**: no missing values, no weird types, all numerical
3. **separable**: setosa is linearly separable from the others; versicolor and virginica overlap slightly. so simple models work well but there is room for improvement
4. **well-known**: every textbook uses it; my code is comparable to everyone else's

## loading

```python
from sklearn.datasets import load_iris
iris = load_iris()
X, y = iris.data, iris.target
print(iris.feature_names)        # ['sepal length (cm)', 'sepal width (cm)', ...]
print(iris.target_names)         # ['setosa', 'versicolor', 'virginica']
```

## visualization first

before any model, plot the data. pairwise scatter plots of the four features:

```python
import matplotlib.pyplot as plt

fig, axes = plt.subplots(4, 4, figsize=(12, 12))
colors = ['r', 'g', 'b']
for i in range(4):
    for j in range(4):
        if i == j:
            for cls in range(3):
                axes[i,j].hist(X[y==cls, i], bins=15, alpha=0.4, color=colors[cls])
        else:
            for cls in range(3):
                axes[i,j].scatter(X[y==cls, j], X[y==cls, i], color=colors[cls], s=10)
        axes[i,j].set_xlabel(iris.feature_names[j])
        axes[i,j].set_ylabel(iris.feature_names[i])
```

what I should see:
- **petal length** and **petal width** separate the three species cleanly
- **sepal width** alone is not a great discriminator
- setosa is a tight cluster; the others overlap

so a model should give heavy weight to petal features.

## a decision tree on iris

```python
from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

clf = DecisionTreeClassifier(max_depth=3, random_state=42)
clf.fit(X_train, y_train)
y_pred = clf.predict(X_test)

print(f"accuracy: {accuracy_score(y_test, y_pred):.3f}")
print(confusion_matrix(y_test, y_pred))

plot_tree(clf, feature_names=iris.feature_names, class_names=iris.target_names, filled=True)
```

typical accuracy: 95-98%. the tree is interpretable: a few yes/no questions about petal dimensions classify the flower.

## comparing classifiers

```python
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC

models = {
    "Logistic Regression": LogisticRegression(max_iter=1000),
    "k-NN": KNeighborsClassifier(n_neighbors=5),
    "Decision Tree": DecisionTreeClassifier(max_depth=3),
    "Random Forest": RandomForestClassifier(n_estimators=100),
    "SVM": SVC(kernel='rbf'),
}

for name, model in models.items():
    model.fit(X_train, y_train)
    score = model.score(X_test, y_test)
    print(f"{name:25s}: {score:.3f}")
```

all of them get >95% on iris. iris is *too easy* — a typical real-world dataset would show wider differences.

## what iris does *not* teach

- **how to handle imbalanced classes** (iris has 50 of each)
- **how to deal with high-dimensional features** (only 4 here)
- **how to handle noisy or missing data** (iris is clean)
- **how to scale features** (all are in similar units)
- **how to do cross-validation rigorously** (the test set is small)

for those, real datasets (CIFAR, MNIST, ImageNet, or astronomy datasets like Galaxy Zoo) are needed.

## why Mapelli closes the course with iris

iris is the *smallest non-trivial* ML problem. it shows that
- ML is just clever curve fitting
- the recipe (split → fit → evaluate) is universal
- decision trees are interpretable: I can read the rules
- ensembles (random forest) often outperform individual models

for a one-chapter introduction in a numerical methods course, iris is exactly right. the student leaves knowing what an ML pipeline looks like, without drowning in the complexity of larger problems.

## astrophysics analogues

- **morphological galaxy classification** (Galaxy Zoo): the iris-equivalent in astronomy. images go in, "spiral / elliptical / irregular" comes out
- **stellar classification** (OBAFGKM from spectra): same recipe, harder data
- **star/galaxy/QSO classification** in photometric surveys: classification with $\sim 5$-band photometry, like a 5-feature iris on $10^9$ objects
- **transient classification** in real-time: classification with light-curve features

## see also

- [Decision tree classifier](../../02_Zettel/Theory/Decision tree classifier.html)
- [What is machine learning](../../02_Zettel/Theory/What is machine learning.html)
- [Interpretability vs accuracy in ML](../../02_Zettel/Theory/Interpretability vs accuracy in ML.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
