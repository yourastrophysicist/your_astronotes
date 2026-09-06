---
layout: default
title: "Decision tree classifier"
---

# Decision tree classifier

Mapelli's notes close with a one-chapter sketch of machine learning. the gateway algorithm is the decision tree: a sequence of yes/no questions about features, ending in a class prediction at each leaf.

## the algorithm

given training data $\{(\mathbf{x}_i, y_i)\}$ with $\mathbf{x}_i$ a feature vector and $y_i$ a class label:

1. find the feature $j$ and threshold $t$ that best separates the classes (most "informative split")
2. partition the data into left (where $x_j \leq t$) and right (where $x_j > t$)
3. recurse on each side
4. stop when a stopping criterion is met (e.g. all labels in the leaf are the same, or the leaf has too few samples)

at prediction time: walk the tree from the root, following the splits according to the input features, return the majority class at the leaf.

## the impurity measures

what makes a split "good"? two standard choices:

### Gini impurity

at a node with class fractions $p_1, p_2, \ldots, p_K$:

$$G = 1 - \sum_k p_k^2$$

zero when one class dominates ($p_k = 1$ for one $k$), maximum $1 - 1/K$ when all classes are equal. a good split reduces the weighted Gini of the children below the parent's Gini.

### entropy

$$H = -\sum_k p_k \log_2 p_k$$

zero when one class dominates, maximum $\log_2 K$ when uniform. **information gain** = parent entropy minus weighted child entropy. choose the split that maximizes information gain.

Gini and entropy give very similar trees in practice. Gini is slightly faster to compute.

## the iris example

four features (sepal length/width, petal length/width), three species (setosa, versicolor, virginica). a typical tree might look like:

```
           petal length ≤ 2.45?
           /                 \
        yes                  no
         |                    |
     setosa             petal width ≤ 1.75?
                       /                 \
                    yes                  no
                     |                    |
              versicolor             virginica
```

three leaves classify with ~95% accuracy on the test set. it is interpretable: I can read off the rules.

## strengths

- **interpretable**: the tree itself is the explanation. compare with a neural network, which is a black box
- **handles non-linear and non-monotonic relationships** naturally
- **handles categorical and continuous features** without preprocessing
- **fast at prediction**: $O(\text{depth})$ per query
- **no scaling required**: trees are invariant to monotonic transformations of features

## weaknesses

- **high variance**: a small change in training data can produce a very different tree
- **overfits**: a deep tree can memorize the training set perfectly and fail on new data
- **tendency to favor features with many possible splits** (continuous over binary)
- **axis-aligned splits**: cannot represent diagonal decision boundaries efficiently

## remedies

- **prune** the tree: cut branches that do not improve test-set performance (cost-complexity pruning)
- **limit depth or leaf size**: hyperparameters in scikit-learn
- **ensemble methods**: average many trees to reduce variance — see below

## random forests and gradient boosting

the practical descendants of decision trees:

- **random forest**: train $T$ decision trees on bootstrap samples of the training data, with each split limited to a random subset of features. average the predictions. low variance, robust, handles many problems out of the box
- **gradient boosting** (XGBoost, LightGBM, CatBoost): train trees sequentially, each one correcting the errors of the previous. dominant in tabular-data competitions, often the best off-the-shelf classifier

## scikit-learn usage

```python
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, random_state=42)

clf = DecisionTreeClassifier(max_depth=4, random_state=42)
clf.fit(X_train, y_train)
print("test accuracy:", clf.score(X_test, y_test))
```

visualize:

```python
from sklearn.tree import plot_tree
import matplotlib.pyplot as plt

plot_tree(clf, feature_names=iris.feature_names, class_names=iris.target_names,
          filled=True)
plt.show()
```

## astrophysics applications

- **morphological galaxy classification** (E vs S vs Irr): from photometric features
- **stellar/galaxy/QSO classification** in survey catalogs
- **transient classification** (SN type Ia vs II vs IIn from light-curve features)
- **photometric redshift estimation** (regression trees, not classification)
- **anomaly detection**: isolation forest, a tree-based unsupervised method
- **flagging bad CCD pixels** in raw images

modern astrophysics increasingly relies on these tree ensembles, often replacing hand-tuned classification cuts.

## the bias-variance tradeoff (the fundamental ML concept)

every model has two error sources:

- **bias**: systematic deviation from truth because the model is too simple to capture the real structure
- **variance**: random fluctuations because the model is too complex and over-fits the training data

shallow tree → high bias, low variance. deep tree → low bias, high variance. the optimal depth balances them, found by cross-validation.

random forest reduces variance (averaging many trees). gradient boosting reduces bias (each tree corrects the previous ones).

## what is and is not in scope for this course

Mapelli's notes cover decision trees as a *teaser*, not a full ML curriculum. for the exam, knowing:
- the basic algorithm and the iris example
- the bias-variance tradeoff
- one or two impurity measures

is enough.

## see also

- [What is machine learning](../../02_Zettel/Theory/What is machine learning.html)
- [Iris dataset and the ML hello world](../../02_Zettel/Theory/Iris dataset and the ML hello world.html)
- [Interpretability vs accuracy in ML](../../02_Zettel/Theory/Interpretability vs accuracy in ML.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
