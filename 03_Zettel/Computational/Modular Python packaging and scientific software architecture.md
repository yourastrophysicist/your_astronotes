---
layout: "default"
title: "Modular Python packaging and scientific software architecture"
name: "Modular Python packaging and scientific software architecture"
description: "pyproject.toml PEP standards, namespace packages, editable developer installs, and object-oriented pipeline design"
---
{% raw %}
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

- [Computational_Astrophysics_MOC](../../04_Atlas/Computational_Astrophysics_MOC.html)
- [03_Modular_Python_Software_Architecture_and_Packaging](../../02_Literature/Lectures/Computational_Astrophysics/03_Modular_Python_Software_Architecture_and_Packaging.html)
- [Python Class Architecture for Astronomical Pipelines](./Python%20Class%20Architecture%20for%20Astronomical%20Pipelines.html)
- [Distributed version control DAG and GitLab workflows](./Distributed%20version%20control%20DAG%20and%20GitLab%20workflows.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Distributed%20version%20control%20DAG%20and%20GitLab%20workflows.html" class="backlink-item">Distributed version control DAG and GitLab workflows</a></li>
    <li class="backlink-item-wrap"><a href="./Linux%20containers%20and%20Docker%20architecture%20in%20astrophysics.html" class="backlink-item">Linux containers and Docker architecture in astrophysics</a></li>
  </ul>
</div>
