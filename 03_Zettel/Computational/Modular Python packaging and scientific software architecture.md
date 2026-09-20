---
layout: "default"
title: "Modular Python packaging and scientific software architecture"
---
scientific Python development requires structuring scripts into modular, installable, and testable packages following modern Python Packaging Authority (PyPA) standards (PEP 517/518/621).

## standard package directory layout

```
daneel/
├── pyproject.toml         # unified package configuration and metadata
├── src/
│   └── daneel/            # importable source package
│       ├── __init__.py
│       ├── core/          # orbital mechanics and physics
│       ├── models/        # Mandel & Agol transit models
│       └── retrieval/     # TauREx wrappers and MCMC
├── tests/                 # pytest test suite
├── docs/                  # Sphinx documentation
└── Dockerfile
```

## modern pyproject.toml specification

replaces legacy `setup.py` and `setup.cfg` files with declarative metadata:

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "daneel"
version = "0.1.0"
description = "Astrophysical modeling and exoplanet retrieval framework"
readme = "README.md"
requires-python = ">=3.10"
dependencies = [
    "numpy>=1.24",
    "scipy>=1.10",
    "astropy>=5.0",
    "batman-package>=2.4",
    "taurex>=3.1"
]
```

## developer editable install

running:
```bash
pip install -e .
```
creates a direct link (`.pth`) to `src/daneel`, allowing developers to edit code in real time without reinstalling the package after every change.

## class architecture for astronomical pipelines

favoring object-oriented encapsulation:
- abstract base classes (`ModelBase`) defining common interfaces (`compute_model()`, `log_likelihood()`).
- immutable configuration dataclasses holding priors and instrument parameters.
- vectorized NumPy/SciPy operations avoiding explicit Python `for` loops in time-critical transit evaluation.

## see also

- [[Computational_Astrophysics_MOC]]
- [[03_Modular_Python_Software_Architecture_and_Packaging]]
- [[Python Class Architecture for Astronomical Pipelines]]
- [[Distributed version control DAG and GitLab workflows]]



## Linked References

- [[Distributed version control DAG and GitLab workflows]]
- [[Linux containers and Docker architecture in astrophysics]]
- [[Computational_Astrophysics_MOC]]


