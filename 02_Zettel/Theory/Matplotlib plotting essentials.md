---
layout: default
title: "Matplotlib plotting essentials"
---

# Matplotlib plotting essentials

a numerical answer without a plot is half an answer. every exam exercise expects me to produce figures, and the figure is what gets graded — code that produces wrong numbers gets some credit; code that produces an unreadable plot gets none.

## the figure I always start from

```python
import matplotlib.pyplot as plt
import numpy as np

fig, ax = plt.subplots(figsize=(7, 5))
ax.plot(x, y, label="data")
ax.set_xlabel("x [units]")
ax.set_ylabel("y [units]")
ax.set_title("what is being shown")
ax.legend()
ax.grid(alpha=0.3)
plt.tight_layout()
plt.savefig("figure.pdf")
plt.show()
```

this is the canonical six-line skeleton. memorize it.

## the four core plot types

### scatter

```python
ax.scatter(x, y, s=10, c=color, alpha=0.5, edgecolor='none')
```

- `s`: marker size in points² (typical 5-20 for many points, 50-100 for a few)
- `c`: color, can also be an array → colormapped scatter
- `alpha`: transparency, essential for dense scatters where points overlap

### line

```python
ax.plot(x, y, '-', color='blue', linewidth=1.5, label="$y = f(x)$")
```

- styles: `'-'` solid, `'--'` dashed, `':'` dotted, `'-.'` dash-dot
- markers can be combined with line: `'-o'`, `'--^'`

### histogram

```python
counts, bins, patches = ax.hist(samples, bins=50, density=True,
                                  alpha=0.6, label="samples")
xx = np.linspace(samples.min(), samples.max(), 200)
ax.plot(xx, P(xx), 'r-', label="analytic $P(x)$")
```

- `density=True`: normalize to a pdf (essential for comparison with analytic)
- `bins`: integer (number) or array (edges)

### 2D histogram

```python
h = ax.hist2d(x, y, bins=50, cmap='viridis', cmin=1)
plt.colorbar(h[3], ax=ax, label="count")
```

- `cmin=1`: hide bins with zero count (cleaner for sparse data)
- `cmap='viridis'` is the perceptually uniform default. avoid `'jet'`

## log axes

```python
ax.set_xscale('log')
ax.set_yscale('log')
# or symmetrically:
ax.loglog(x, y)            # equivalent to plot + both axes log
ax.semilogx(x, y)          # log x only
ax.semilogy(x, y)          # log y only
```

use log axes whenever the data spans more than $\sim 2$ orders of magnitude. astrophysics data almost always does.

## subplots

```python
fig, axes = plt.subplots(2, 2, figsize=(10, 8), sharex=True, sharey=True)
axes[0, 0].plot(x, y1)
axes[0, 1].plot(x, y2)
axes[1, 0].plot(x, y3)
axes[1, 1].plot(x, y4)
plt.tight_layout()
```

- `axes` is a 2D array of `Axes` objects when `nrows > 1` and `ncols > 1`
- `sharex` / `sharey` link axes for easy comparison
- `tight_layout()` prevents label overlap

## colorbars and colormaps

```python
sc = ax.scatter(x, y, c=z, cmap='plasma', s=10)
cbar = plt.colorbar(sc, ax=ax)
cbar.set_label("z value")
```

good colormaps:
- **viridis, plasma, inferno, magma, cividis**: perceptually uniform sequential
- **coolwarm, RdBu_r**: diverging (zero in the middle)
- **gray**: monochrome publication

avoid: `jet`, `hsv`, `rainbow` — perceptually misleading.

## annotation

```python
ax.text(x_pos, y_pos, "annotation", fontsize=10, ha='center')
ax.axhline(y=0, color='k', linestyle='--', alpha=0.3)
ax.axvline(x=x_special, color='r')
ax.annotate("peak", xy=(x_peak, y_peak), xytext=(x_peak+0.5, y_peak+0.5),
            arrowprops=dict(arrowstyle='->'))
```

## error bars

```python
ax.errorbar(x, y, yerr=sigma, fmt='o', capsize=3, label="data")
```

- `fmt='o'`: marker style, no connecting line
- `capsize`: end-cap length in points
- `xerr`: horizontal error bars

## the things every figure needs

before saving:

- [ ] axis labels with **units**
- [ ] title or caption with what is shown
- [ ] legend if multiple series
- [ ] log scale where the data warrants it
- [ ] figure size sensible (`figsize=(7, 5)` for a single plot, `(10, 8)` for 2×2)
- [ ] saved to a file with descriptive name

## things to never do on an exam plot

- forget axis labels
- use the default tiny font that nobody can read
- mix linear and log without telling the reader
- plot 1000 points on top of each other in solid color (use alpha or 2D histogram)
- save as a low-res `.png` when `.pdf` is fine

## save formats

- **`.pdf`**: vector, scales to any size, best for publication and exam upload
- **`.png`** at high dpi (`dpi=200`): raster, fine for plots with millions of points where pdf would be huge
- **`.svg`**: vector, web-friendly

```python
plt.savefig("plot.pdf", bbox_inches='tight')
plt.savefig("plot.png", dpi=200, bbox_inches='tight')
```

`bbox_inches='tight'` trims white margins.

## the standard exam figure recipes

**recipe 1, exercise 1 — read & plot data**:
```python
data = np.loadtxt("data.txt", skiprows=1)
M1, M2 = data[:, 3], data[:, 4]

fig, axes = plt.subplots(1, 2, figsize=(12, 5))
axes[0].scatter(M1, M2, s=2, alpha=0.4)
axes[0].set_xlabel("$M_1$ [$M_\\odot$]"); axes[0].set_ylabel("$M_2$ [$M_\\odot$]")
axes[0].set_title("scatter")
h = axes[1].hist2d(M1, M2, bins=50, cmap='viridis')
plt.colorbar(h[3], ax=axes[1], label="count")
axes[1].set_xlabel("$M_1$"); axes[1].set_ylabel("$M_2$"); axes[1].set_title("2D hist")
plt.tight_layout()
plt.savefig("ex1_scatter_hist2d.pdf")
```

**recipe 2 — sample histogram + analytic curve**:
```python
fig, ax = plt.subplots(figsize=(7, 5))
ax.hist(samples, bins=50, density=True, alpha=0.6, label='samples')
xx = np.linspace(samples.min(), samples.max(), 300)
ax.plot(xx, P(xx), 'r-', linewidth=2, label='$P(x)$')
ax.set_xlabel("x"); ax.set_ylabel("pdf"); ax.legend()
ax.set_xscale('log')         # if the domain spans orders of magnitude
plt.savefig("ex2_sampling.pdf")
```

**recipe 3 — convergence plot**:
```python
plt.loglog(Ns, errors, 'o-', label='numerical')
plt.loglog(Ns, errors[0] * (Ns[0]/np.array(Ns))**0.5, 'k--', label='$N^{-1/2}$')
plt.xlabel('N'); plt.ylabel('|error|'); plt.legend()
```

**recipe 4 — orbits + energy diagnostic**:
```python
fig, axes = plt.subplots(1, 2, figsize=(12, 5))
axes[0].plot(r[:, 0, 0], r[:, 0, 1], label='m1')
axes[0].plot(r[:, 1, 0], r[:, 1, 1], label='m2')
axes[0].plot(r[:, 2, 0], r[:, 2, 1], label='m3')
axes[0].set_xlabel('x'); axes[0].set_ylabel('y'); axes[0].set_aspect('equal')
axes[0].legend(); axes[0].set_title('orbits')

dE = (E - E[0]) / E[0]
axes[1].plot(t, np.abs(dE))
axes[1].set_yscale('log'); axes[1].set_xlabel('t'); axes[1].set_ylabel('|ΔE/E|')
axes[1].set_title('energy conservation')
plt.tight_layout()
plt.savefig("ex4_nbody.pdf")
```

## see also

- [Numpy arrays vs Python lists](../../02_Zettel/Theory/Numpy arrays vs Python lists.html)
- [Numerical problem solving workflow](../../02_Zettel/Theory/Numerical problem solving workflow.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
