---
layout: default
title: "Random number seeds"
---

# Random number seeds

a pseudo-random number generator (PRNG) is a deterministic recurrence. given the same starting state, it produces the same sequence. the **seed** sets that starting state. setting a seed makes my Monte Carlo experiment reproducible across runs and machines.

## why seeds matter for science

three reasons to *always* set the seed in production code:

1. **reproducibility**: a colleague (or my future self) can rerun the script and get the same plot. without seeds, every run is different — debugging becomes impossible
2. **debugging**: if the code crashes intermittently, seeds let me reproduce the exact failing case
3. **interpretation**: when comparing two algorithms on "the same" random input, I need *literally the same* input. seeds give me that

## the legacy numpy API

```python
np.random.seed(42)
x = np.random.uniform(size=10)         # deterministic, given the seed
```

this sets a *global* state. every `np.random.*` call from any code in the same process consumes from the same stream. fragile for parallel work.

## the modern numpy API (1.17+)

create a `Generator` with explicit state:

```python
rng = np.random.default_rng(seed=42)
x = rng.uniform(size=10)
y = rng.normal(0, 1, size=10)
z = rng.exponential(scale=1.0, size=10)
```

local state: each `rng` is independent. multiple `rng = ...(seed=42)` give identical streams. if I want statistical independence:

```python
parent = np.random.default_rng(42)
child1, child2, child3 = parent.spawn(3)
# each child is independent, deterministic from the parent
```

**always prefer the modern API**. less footgun-prone in larger projects.

## seed choices

three idioms:

- **`seed=42`** for a fixed result (debugging, exam scripts where the grader expects reproducibility)
- **`seed=None`** (default) for non-reproducible output (uses OS entropy or system clock)
- **command-line argument**: pass the seed via `argparse` so I can sweep over many seeds for an MC ensemble

```python
import argparse
parser = argparse.ArgumentParser()
parser.add_argument('--seed', type=int, default=42)
args = parser.parse_args()
rng = np.random.default_rng(args.seed)
```

## what the seed *is*

for `np.random.default_rng`, the seed is processed via a **SeedSequence** that hashes the input integer into a long internal state for the PCG64 generator. so seed=0 and seed=1 produce statistically *uncorrelated* streams — there is no "neighborhood" structure.

for the legacy `np.random.seed`, the seed directly sets the Mersenne Twister state. same property: no structure between consecutive seeds.

## parallel work: the gotcha

if I launch $K$ parallel processes each calling `np.random.default_rng()` with no seed, they each get a stream from system entropy — *probably* independent but not guaranteed.

if I do `np.random.default_rng(seed=42)` in each process, they all get the **identical** stream — definitely correlated, very bad.

correct pattern:

```python
# in main process
parent = np.random.default_rng(42)
seeds = parent.spawn(K)        # K independent streams
# pass seeds[i] to process i
```

or use distinct integer seeds per process:

```python
# process i:
rng = np.random.default_rng(42 + i)
# guaranteed independent because of internal hashing
```

both work. the `spawn` method is slightly more elegant.

## reproducibility caveats

`np.random.default_rng(42)` produces the same stream:
- on the same numpy version
- on the same platform (mostly — endianness and float precision are uniform)

it can *differ* between numpy versions if the algorithm is updated. for long-term reproducibility, pin numpy with `requirements.txt` or `environment.yml`.

even with the seed pinned, the same seed in `np.random.default_rng(42)` and `np.random.seed(42)` give *different* streams because they use different generators (PCG64 vs Mersenne Twister).

## verification

after seeding, the first few outputs from a known seed should match expected values:

```python
rng = np.random.default_rng(42)
print(rng.uniform(size=3))
# [0.77395605 0.43887844 0.85859792]    consistent across runs
```

this is sometimes a unit test in serious code: "given seed 42, the first 3 uniforms should be these specific values."

## astrophysics example: an MC simulation ensemble

```python
N_realizations = 100
parent = np.random.default_rng(42)
seeds = parent.spawn(N_realizations)

results = []
for seed in seeds:
    rng = seed.generator()        # or pass directly to functions
    result = run_simulation(rng)
    results.append(result)
```

now the *ensemble* is reproducible, *each individual realization* is reproducible, and they are statistically independent.

## see also

- [Pseudo-random number generators](../../02_Zettel/Theory/Pseudo-random number generators.html)
- [Inverse transform sampling](../../02_Zettel/Theory/Inverse transform sampling.html)
- [Monte Carlo integration mean value method](../../02_Zettel/Theory/Monte Carlo integration mean value method.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
