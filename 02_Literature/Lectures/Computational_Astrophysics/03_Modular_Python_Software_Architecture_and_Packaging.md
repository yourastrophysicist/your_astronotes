---
layout: "default"
title: "03_Modular_Python_Software_Architecture_and_Packaging"
---
# Lesson 03 – Modular Python Software Architecture and Packaging

*Computational Astrophysics, Prof. Tiziano Zingales*  
*Index: [[Computational_Astrophysics_MOC]]*

---

## From Ad-Hoc Scripts to Reusable Scientific Libraries

A prevalent pathology in computational astrophysics is the "copy-paste script" anti-pattern:
- A numerical routine (e.g., transit light curve evaluation or stellar limb darkening interpolation) is written inside a standalone script `transit.py`.
- To use the function in another project, the researcher copies the function body into `retrieval.py` and `mcmc_fit.py`.
- When a numerical bug or physical unit inconsistency is discovered, fixes applied to one script do not propagate to the others.
- Scripts grow into unmaintainable, monolithic files spanning thousands of lines.

In Python, **modules and packages provide structured namespaces that enable clean code reuse, encapsulation, and modular distribution**.

---

## Python Modules and Namespace Mechanics

### Definitions
- **Module**: A single Python file (`.py`) containing variable assignments, function definitions, classes, and executable statements.
- **Package**: A filesystem directory containing multiple modules and an initialization file (`__init__.py`), exposing a hierarchical dotted namespace (e.g., `daneel.parameters.parameters`).

### Namespace Isolation and `__name__`
Every module possesses its own distinct symbol table (namespace). Importing a module does not pollute the global namespace of the caller:

```python
# module: daneel/parameters/orbital.py
GRAVITATIONAL_CONSTANT = 6.67430e-11  # m^3 kg^-1 s^-2

def kepler_semimajor_axis(period_days, m_star_solar):
    """Compute semi-major axis in AU using Kepler's Third Law."""
    p_sec = period_days * 86400.0
    m_kg = m_star_solar * 1.98847e30
    a_m = ((GRAVITATIONAL_CONSTANT * m_kg * p_sec**2) / (4 * 3.1415926535**2)) ** (1/3)
    return a_m / 1.495978707e11
```

When Python executes a script directly from the command line:
```bash
python orbital.py
```
The interpreter sets the special built-in string variable `__name__ = "__main__"`. When imported by another module, `__name__` evaluates to the module's qualified import path (`daneel.parameters.orbital`). The standard guard pattern allows dual-use scripts:

```python
if __name__ == "__main__":
    # Test execution block; only runs when executed as a standalone script
    a = kepler_semimajor_axis(3.5247, 1.0)
    print(f"Calculated semi-major axis: {a:.4f} AU")
```

### Module Resolution Order (`sys.path`)
When executing `import mymodule`, the Python runtime searches locations in sequential order:
1. The directory containing the script initiating the import (or current working directory in interactive sessions).
2. Directories listed in the `PYTHONPATH` environment variable.
3. Standard library directories and virtual environment site-packages (`$CONDA_PREFIX/lib/python3.10/site-packages`).

If the module is not located across these search paths, an `ImportError` / `ModuleNotFoundError` is raised.

---

## Package Architecture: The `src/` Layout

The course exoplanet modeling library, named **`daneel`** (after Isaac Asimov's robot character R. Daneel Olivaw), follows the modern Python `src` directory layout:

```
comp_astro_25/
├── LICENSE
├── README.md
├── pyproject.toml              # Modern declarative build metadata
├── .gitignore
└── src/
    └── daneel/                 # Top-level package directory
        ├── __init__.py         # Package initialization & public API exposure
        ├── __main__.py         # Entrypoint for `python -m daneel`
        ├── detection/          # Subpackage: ML transit detection algorithms
        │   ├── __init__.py
        │   ├── classifier.py
        │   └── detrending.py
        ├── forward/            # Subpackage: Radiative transfer & transit models
        │   ├── __init__.py
        │   ├── batman_model.py
        │   └── taurex_bridge.py
        └── parameters/         # Subpackage: Planetary/stellar system parameters
            ├── __init__.py
            └── parameters.py
```

### The Role of `__init__.py` and Relative Imports
The `__init__.py` file demarcates a directory as a Python package. It executes automatically when the package or subpackage is imported, and controls which submodules are exposed at the top namespace level:

```python
# src/daneel/__init__.py
__version__ = "0.1.0"
__author__ = "Computational Astrophysics Course Team"

from .parameters.parameters import PlanetParameters, StellarParameters
from .forward.batman_model import TransitSimulator
```

Inside package submodules, **relative imports** reference sibling modules using the dot notation:
- `.module_name`: Same directory / subpackage
- `..package_name`: Parent directory

```python
# src/daneel/forward/batman_model.py
from ..parameters.parameters import PlanetParameters  # Relative import from parent subpackage
import numpy as np
import batman
```

---

## Modern Packaging with `pyproject.toml`

Following PEP 517 and PEP 621, modern Python packages replace obsolete `setup.py` / `setup.cfg` scripts with a unified, declarative configuration file: `pyproject.toml`.

```toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "daneel"
version = "0.1.0"
description = "Computational astrophysics package for exoplanet transit detection and atmospheric modeling"
readme = "README.md"
authors = [
    { name = "Course Team", email = "tiziano.zingales@unipd.it" }
]
license = { text = "MIT" }
requires-python = ">=3.10"

dependencies = [
    "numpy>=1.22",
    "scipy>=1.8",
    "matplotlib>=3.5",
    "astropy>=5.0",
    "batman-package>=2.4.8",
    "ldtk>=1.7",
    "emcee>=3.1",
    "scikit-learn>=1.1",
    "taurex>=3.1"
]

[project.optional-dependencies]
dev = [
    "pytest>=7.0",
    "sphinx>=5.0",
    "sphinx-rtd-theme"
]

[project.scripts]
daneel-detect = "daneel.detection.classifier:main"

[tool.hatch.build.targets.wheel]
packages = ["src/daneel"]
```

### Editable Development Installation (`pip install -e .`)
During active development, reinstalling the package after every code modification is inefficient. An **editable install** places a live link from the active Python environment directly to your source directory:

```bash
cd comp_astro_25

# Install package in editable mode with development dependencies
pip install -e ".[dev]"
```

Any modification made to `.py` files inside `src/daneel/` is immediately reflected across all notebooks, test scripts, and terminal sessions without reinstallation.

---

## Documentation and Software Testing

### 1. Docstrings and Sphinx Generation
Every function in the scientific package must document its mathematical purpose, inputs, return types, and physical units using NumPy or Google docstring format:

```python
def transit_duration(period, r_star, r_planet, semi_major_axis, inclination_rad):
    """
    Calculate the total first-to-fourth contact transit duration (T_14).

    Parameters
    ----------
    period : float
        Orbital period of the planet [days].
    r_star : float
        Stellar radius [solar radii].
    r_planet : float
        Planetary radius [Jupiter radii].
    semi_major_axis : float
        Orbital semi-major axis [AU].
    inclination_rad : float
        Orbital inclination angle [radians].

    Returns
    -------
    duration : float
        Total transit duration from contact I to IV [hours].
    """
```

**Sphinx** automatically parses these structured docstrings to generate complete HTML and PDF technical manuals, publishable to platforms like *Read the Docs*.

### 2. Unit Testing with Pytest
```python
# tests/test_orbital.py
import pytest
import numpy as np
from daneel.parameters.parameters import PlanetParameters
from daneel.forward.batman_model import compute_transit_depth

def test_transit_depth_calculation():
    # Hot Jupiter around solar-type star: Rp ~ 1 Rjup (0.10045 R_sun)
    rp_rs = 0.10045
    expected_depth = rp_rs ** 2  # ~0.01009 (1.01%)
    computed_depth = compute_transit_depth(rp_rs)
    assert np.isclose(computed_depth, expected_depth, rtol=1e-5)
```

Run test suites directly via the terminal:
```bash
pytest -v tests/
```

---

## Practical Laboratory: Forward Transit Synthesis with `batman`

As part of the course's Module 1 hands-on assignment, students configure their package to model a real exoplanetary system using parameters queried from the [Exoplanet Encyclopaedia](https://exoplanet.eu):

1. **System Query**: Select a known transiting system (e.g., HD 209458 b, WASP-121 b).
2. **Limb Darkening Coefficients**: Use STScI's ExoCTK Limb Darkening Calculator to obtain quadratic limb darkening coefficients $(c_1, c_2)$ computed for the Kepler or TESS instrumental bandpass.
3. **Transit Modeling with `batman`**:
   ```python
   import numpy as np
   import batman
   import matplotlib.pyplot as plt

   # Initialize transit parameter container
   params = batman.TransitParams()
   params.t0 = 0.0                      # Time of inferior conjunction [days]
   params.per = 3.52474859              # Orbital period [days]
   params.rp = 0.12086                  # Planet radius in stellar radii (Rp/Rs)
   params.a = 8.76                      # Semi-major axis in stellar radii (a/Rs)
   params.inc = 86.71                   # Orbital inclination [degrees]
   params.ecc = 0.0                     # Orbital eccentricity
   params.w = 90.0                      # Longitude of periastron [degrees]
   params.u = [0.38, 0.28]              # Quadratic limb darkening coefficients [u1, u2]
   params.limb_dark = "quadratic"

   # Evaluate light curve over observation time baseline
   t = np.linspace(-0.15, 0.15, 1000)   # Time in days centered at mid-transit
   m = batman.TransitModel(params, t)
   flux = m.light_curve(params)

   # Inject Gaussian observational noise
   synthetic_flux = flux + np.random.normal(0, 1e-4, size=t.shape)
   ```

---

## Related Notes
- [[00_Course_Overview_and_Computational_Laboratories]]
- [[01_Linux_Containers_and_Docker_Architecture]]
- [[02_Version_Control_with_Git_and_GitLab]]
- [[04_Exoplanet_Demographics_Orbital_Mechanics_and_Transits]]
- [[Python Class Architecture for Astronomical Pipelines]]
- [[Transit Modeling with batman]]
- [[Limb Darkening Computation with ldtk]]



## Linked References

- [[Modular Python packaging and scientific software architecture]]
- [[Computational_Astrophysics_MOC]]


