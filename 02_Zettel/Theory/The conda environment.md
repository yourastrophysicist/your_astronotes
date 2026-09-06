---
layout: default
title: "The conda environment"
---

# The conda environment

conda is python's environment manager. it lets me have one isolated python installation per project, each with its own version of numpy, scipy, etc. the alternative is the chaos of "everything in the system python" — works for a week, breaks the moment two projects need different package versions.

## the problem it solves

scenario: I am working on three things in parallel:
- exam scripts (need scipy 1.13, matplotlib 3.8)
- N-body simulation code (needs scipy 1.10, an old but tested numpy)
- a new ML project (needs torch 2.5, scikit-learn 1.4)

without environments, installing the wrong version for one breaks the other two. with environments, each lives in its own sandbox.

## installation

I install **miniconda** (or miniforge), not full Anaconda. miniconda gives me the package manager only; I install what I need per environment.

```bash
# macOS (apple silicon, miniforge recommended)
brew install miniforge

# or curl the installer
curl -O https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-arm64.sh
bash Miniforge3-MacOSX-arm64.sh
```

## creating an environment

```bash
conda create -n math-num-methods python=3.11
conda activate math-num-methods
conda install numpy scipy matplotlib astropy pandas jupyter
```

each `conda create -n NAME` makes a fresh sandbox at `~/miniforge3/envs/NAME/`. `conda activate NAME` puts that env's `python` and `pip` first on the PATH. `conda deactivate` returns to the base environment.

## switching environments

```bash
conda env list                # all environments
conda activate gr-2026        # switch
conda deactivate              # leave current
```

I keep one env per course or project:
- `astropy-tools` for general work
- `math-num-methods` for this exam
- `gr-2026` for GR exam
- `nbody-research` for my actual research

## installing packages

prefer `conda install` (uses the conda-forge channel, well-tested binaries). fall back to `pip install` for packages that aren't on conda-forge:

```bash
conda install scipy=1.13              # specific version
conda install -c conda-forge healpy   # specific channel
pip install some-niche-package        # last resort
```

## exporting and reproducing

share an environment with collaborators (or future me):

```bash
conda env export > environment.yml
conda env create -f environment.yml -n new-name
```

the `environment.yml` is a small text file listing all packages and versions. **always commit this with research code**.

## jupyter kernels per environment

each conda environment can be a jupyter kernel:

```bash
conda activate math-num-methods
conda install ipykernel
python -m ipykernel install --user --name math-num-methods
```

now in jupyter lab, "Kernel → Change kernel" lets me pick which env runs the notebook.

## the trap to avoid

never `conda install` in `(base)`. base should stay minimal — only `conda` itself and a system python. mixing project packages into base poisons the well.

similarly: don't run `pip install` system-wide outside of an environment. on macOS this is more or less blocked by default; on Linux it can hose the system python.

## the modern alternatives

- **mamba**: drop-in replacement for `conda`, much faster solver. install with `conda install mamba -c conda-forge`. then use `mamba install ...`
- **pixi**: per-project, lockfile-based, very fast. better for collaborative projects
- **uv** + **venv**: pip-only alternative for python-only projects

for this course, plain conda or mamba is fine.

## a typical workflow

```bash
# starting work for the day
conda activate math-num-methods
cd ~/work/math-numerical-methods
jupyter lab

# trying a new package
conda install scikit-learn

# saving the environment for the record
conda env export > environment.yml
git add environment.yml; git commit -m "add scikit-learn"
```

## see also

- [Linux for the astrophysicist](../../02_Zettel/Theory/Linux for the astrophysicist.html)
- [Python language essentials](../../02_Zettel/Theory/Python language essentials.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
