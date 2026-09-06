---
layout: default
title: "Python language essentials"
---

# Python language essentials

a fast-path summary of chapter 2 of Mapelli's notes. python as the language I will use to do every computation in this course and for the rest of my career.

## why python

- **fast to write**: no compile step, no type declarations, indentation-based syntax
- **vast ecosystem**: numpy, scipy, matplotlib, astropy, pandas, scikit-learn — all batteries included for science
- **fast enough**: when wrapped around C/Fortran via numpy and scipy, python code runs at ~native speed for the heavy loops
- **the lingua franca**: every paper, every cluster pipeline, every Jupyter notebook in 21st-century astrophysics is python

## variables and types

```python
x = 5                     # int
y = 3.14                  # float
name = "spica"            # string
flag = True               # bool
nothing = None            # null
nums = [1, 2, 3]          # list, mutable
pos  = (1.0, 2.0, 3.0)    # tuple, immutable
data = {"a": 1, "b": 2}   # dict
unique = {1, 2, 3}        # set
```

no declarations; types are inferred. `type(x)` to check.

## arithmetic

```python
3 + 2     # 5
3 / 2     # 1.5      true division
3 // 2    # 1        floor division
3 % 2     # 1        modulo
3 ** 2    # 9        exponent
3 + 2j    # complex
```

## control flow

```python
if x > 0:
    print("positive")
elif x == 0:
    print("zero")
else:
    print("negative")

for i in range(10):
    print(i)

for i, val in enumerate(my_list):
    print(i, val)

while not done:
    done = make_progress()
```

## comprehensions (the python superpower)

```python
squares = [x**2 for x in range(10)]
evens   = [x for x in range(20) if x % 2 == 0]
matrix  = [[i*j for j in range(5)] for i in range(5)]
inverse = {v: k for k, v in d.items()}
```

these are faster and clearer than equivalent for loops.

## functions

```python
def integrate(f, a, b, n=100):
    """Trapezoidal integration. n is optional, defaults to 100."""
    h = (b - a) / n
    x = [a + i*h for i in range(n + 1)]
    return h * (f(x[0])/2 + sum(f(xi) for xi in x[1:-1]) + f(x[-1])/2)

# call by position or by name
integrate(np.sin, 0, np.pi)
integrate(np.sin, 0, np.pi, n=1000)
integrate(f=np.sin, a=0, b=np.pi)
```

## lambda expressions

anonymous one-line functions:

```python
square = lambda x: x**2
result = integrate(lambda x: x**2 + 3*x, 0, 1)
```

handy for passing simple functions as arguments. for anything beyond one expression, use `def`.

## importing

```python
import numpy as np                            # the standard alias
import matplotlib.pyplot as plt
from scipy.integrate import quad, simpson      # specific imports
from astropy import units as u, constants as const
```

## file I/O

```python
# write
with open("out.txt", "w") as f:
    f.write("hello\n")
    f.write(f"x = {x}\n")

# read
with open("data.txt") as f:
    for line in f:
        process(line.strip())

# numpy preferred for numerical data
data = np.loadtxt("data.txt", skiprows=1)
np.savetxt("out.txt", arr, fmt="%.6e")
```

`with open(...) as f:` automatically closes the file when the block ends — always use it.

## string formatting

```python
x = 3.14159
print(f"x = {x:.2f}")              # 3.14
print(f"x = {x:.4e}")              # 3.1416e+00
print(f"x = {x:10.4f}")            # padded width
print(f"name = {name:<10}, value = {value:>5}")     # left/right align
```

f-strings are the modern way; older code uses `"x = %.2f" % x` or `"x = {}".format(x)`.

## errors and exceptions

```python
try:
    result = risky_operation()
except ValueError as e:
    print(f"oops: {e}")
    result = default_value
finally:
    cleanup()
```

## classes (briefly)

```python
class Particle:
    def __init__(self, mass, position):
        self.mass = mass
        self.position = position
    
    def kinetic(self, velocity):
        return 0.5 * self.mass * np.sum(velocity**2)

p = Particle(1.0, np.zeros(3))
ke = p.kinetic(np.array([1, 0, 0]))
```

useful for grouping related state and behavior. for one-off scripts, often a dict or namedtuple is enough.

## what to skip until later

- decorators
- generators (`yield`)
- metaclasses
- async/await
- inheritance hierarchies

these are great python features but rarely needed for numerical/scientific code at this stage.

## the python "zen"

```
import this
```

prints Tim Peters' aphorisms: *Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.* the cultural backbone of pythonic code.

## see also

- [Numpy arrays vs Python lists](../../02_Zettel/Theory/Numpy arrays vs Python lists.md) — the essential next step
- [Matplotlib plotting essentials](../../02_Zettel/Theory/Matplotlib plotting essentials.md)
- [The conda environment](../../02_Zettel/Theory/The conda environment.md)
- [Linux for the astrophysicist](../../02_Zettel/Theory/Linux for the astrophysicist.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
