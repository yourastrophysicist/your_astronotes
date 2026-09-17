---
layout: "default"
title: "Lesson 01 - Linux Environment and Scientific Python Setup"
---
{% raw %}
# Lesson 01 ? Linux Environment and Scientific Python Setup

*Astrophysics Laboratory 2, Prof. Luca Malavolta*  
*Index: [Astrophysics_Laboratory_2_MOC](../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html)*

---

## The Scientific Computing Environment

Modern observational astrophysics relies heavily on Unix-like operating systems (Linux, macOS) and the scientific Python ecosystem. Reproducible data reduction pipelines require structured terminal workflows, version control, and isolated virtual environments.

### Core Shell Commands and Filesystem Navigation
- `~`: shorthand for the user home directory (`/home/username`)
- `.`: current working directory
- `..`: parent directory
- `pwd`: print working directory
- `ls -lah`: list all directory contents with permissions, human-readable file sizes, and hidden configuration files
- `cd <path>`: change directory
- `mkdir -p <dir>`: create directory along with parent directories if missing
- `cp -r <src> <dest>`: recursive copy of files and directories
- `mv <src> <dest>`: move or rename files
- `rm -i <file>`: interactive removal to prevent accidental data loss

Italian keyboard terminal shortcuts:
- Tilde (`~`): `Alt Gr + ?` or `Alt + 126`
- Backtick (`` ` ``): `Alt Gr + '` or `Alt + 96`

---

## Environment Management with Conda

To prevent package dependency conflicts, all lab pipelines run inside an isolated Conda environment:

```bash
# Create dedicated environment with Python 3.10
conda create -n astrolab2 python=3.10

# Activate the environment
conda activate astrolab2

# Install foundational scientific packages
conda install numpy scipy matplotlib astropy jupyter ipykernel
```

### Specialized Exoplanet and Photometry Packages

The exoplanet transit modeling and Bayesian sampling pipeline requires specific specialized packages installed via `pip`:

```bash
# Ensure C++ compilers are present on the host/WSL system:
# sudo apt update && sudo apt install build-essential gcc g++

# Note: ldtk requires version 1.7 for compatibility with the lab environment
pip install batman-package astroquery ldtk==1.7 emcee corner pygtc --user
```

Package roles:
- `astropy`: FITS I/O (`astropy.io.fits`), WCS coordinate transformations (`astropy.wcs`), and astronomical time handling (`astropy.time`)
- `batman-package`: Bad-Ass Transit Model cAlculatioN (Kreidberg 2015), C-optimized evaluation of Mandel & Agol (2002) transit models
- `ldtk`: Python Limb Darkening Toolkit (Parviainen & Aigrain 2015), synthetic profile computation using PHOENIX models
- `emcee`: Affine-invariant ensemble sampler for Markov Chain Monte Carlo (Foreman-Mackey et al. 2013)
- `corner` and `pygtc`: publication-ready triangle corner plots for visualizing multidimensional posterior probability distributions
- `jplephem`: JPL planetary ephemerides computation for high-precision Barycentric Julian Date ($BJD_{\text{TDB}}$) calculations

---

## Python Coding Standards for Astrophysics Pipelines

Pipeline code in this course follows strict modular guidelines:
1. Vectorization over explicit loops: use NumPy array broadcasting and vector operations for pixel manipulation
2. Explicit memory management: avoid loading large series of 2D image arrays into memory simultaneously; process frames iteratively or use memory mapping (`memmap=True` in `fits.open`)
3. Unit discipline: keep physical quantities tagged with clear units (e.g., fluxes in $e^-/\text{s}$ or normalized relative flux, time in $BJD_{\text{TDB}}$, angles in radians for orbital equations)
4. Encapsulation: group functional routines into reusable Python classes to ensure state consistency across the multi-stage pipeline

---

## Related Notes
- [Lesson 00 - Course Overview and Research Methodology](./Lesson%2000%20-%20Course%20Overview%20and%20Research%20Methodology.html)
- [Python Class Architecture for Astronomical Pipelines](../../../03_Zettel/Computational/Python%20Class%20Architecture%20for%20Astronomical%20Pipelines.html)
- [Science Frame Calibration and Variance Propagation](../../../03_Zettel/Computational/Science%20Frame%20Calibration%20and%20Variance%20Propagation.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Lesson%2000%20-%20Course%20Overview%20and%20Research%20Methodology.html" class="backlink-item">Lesson 00 - Course Overview and Research Methodology</a></li>
  </ul>
</div>
