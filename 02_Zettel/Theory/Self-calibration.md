---
layout: default
title: "Self-calibration"
---

# Self-calibration

iterative refinement of gain and phase solutions using the *science target itself* as a calibrator. *if* the target is bright enough on individual baselines to detect, self-cal almost always improves image quality dramatically. it is the secret sauce of high-dynamic-range radio imaging.

## the principle

start with a calibrated dataset and a CLEAN model of the source. compute *predicted* visibilities from the model. compare to the measured visibilities. the discrepancy is *gain/phase error* per antenna. solve for the corrections, apply, re-CLEAN.

the procedure converges (usually in 3-5 iterations) to a self-consistent solution: gain corrections that make the model agree with the data.

## the formal statement

<img src="{{ "/assets/images/Self-calibration.png" | relative_url }}" alt="Self-calibration iterative cycle: using a preliminary sky model to solve for antenna gain errors and refine the final image." class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />


at antenna $i$, the *measured* visibility on baseline $ij$ is

$$V_{ij,\rm meas} = g_i \, g_j^* \, V_{ij,\rm true}$$

where $g_i$ is the (complex) per-antenna gain (amplitude + phase). this is the **station-based gain** model.

if I knew $V_{ij,\rm true}$ exactly, I could solve for the $g_i$ from the $V_{ij,\rm meas}$ data — a simple least-squares fit per antenna.

I don't know $V_{ij,\rm true}$ exactly — that's what I'm trying to recover. but I have a *CLEAN model* of the source from the previous iteration's image. compute the *predicted* visibilities from this model, use them as the "true" values in the gain solver.

## the iteration

```
  initial calibration  →
  CLEAN  →  initial CLEAN model
  ↓
  loop:
      use CLEAN model to predict V_pred(u, v)
      solve for g_i from V_meas / V_pred
      apply g_i corrections to V_meas
      re-CLEAN  →  new CLEAN model
  
  until: model converges (residuals below noise threshold)
```

each iteration:
- improves the model (more accurate flux, position, structure)
- improves the gains (more accurate atmospheric/instrumental phase)
- reduces sidelobes in the image

dynamic range improvement: ~10-100× over phase-referenced data alone.

## the sky-model assumption

self-cal *assumes* the CLEAN model is approximately correct. the gain corrections found are gains that make the data consistent with the model.

so the *initial* CLEAN must be good enough to identify the source's main structure. for a faint source where the initial CLEAN doesn't cleanly find the source, self-cal can converge to a *wrong* model — recovering "the source you assumed" rather than the truth.

## phase-only vs amplitude-and-phase

two modes:

### phase-only self-cal

solve only for $\arg(g_i)$ — the phase. doesn't change visibility amplitudes. used in early iterations or when amplitudes are well-calibrated.

### amplitude-and-phase

solve for both $|g_i|$ and $\arg(g_i)$. risky: amplitude solutions can absorb the *source flux* into the gains, getting the wrong answer. used carefully, after the model is well-established.

practical recipe:
- iterations 1-3: phase-only self-cal
- iterations 4+: phase + amplitude

## the time bucket

the *interval* over which gains are solved is a tunable parameter:

- **long intervals** (10 min): less precise, but robust against limited SNR
- **short intervals** (10 sec): more precise tracking, but noisy gains for faint sources

modern radio practice: start with long intervals, decrease as the signal-to-noise improves with each self-cal pass. final iterations may have sub-minute time bins.

## the limits

three:

### 1. faint targets

if the source is too faint to detect on individual baselines per integration time, self-cal can't measure gains. limit: $\sim$ Jy-level sources for VLA per 10-second integration.

### 2. uniform extended emission

a perfectly uniform source has visibility = constant — no spatial information to solve gains. self-cal stalls. real sources are never perfectly uniform, so this limit is rarely hit.

### 3. wrong initial model

if the initial CLEAN model is significantly off, self-cal can converge to a wrong solution (or oscillate). solutions: improve initial CLEAN, mask out clearly-wrong regions, apply gentle phase-only iterations first.

## the dynamic range frontier

modern radio imaging routinely achieves dynamic ranges of $10^4$-$10^6$ (peak-to-noise) using self-cal:
- VLA observations of bright AGN
- ALMA studies of compact sources
- VLBI imaging of AGN cores

each step of the dynamic-range improvement involves more self-cal iterations on better models. without self-cal, dynamic range stops at $\sim 100$.

## the EHT use case

EHT data go through *intense* self-calibration: dozens of iterations on increasingly refined Bayesian models. this is essential because:
- baselines are sparse (only 28 baselines for 8 stations)
- atmospheric phase is severe at 230 GHz
- sources are extremely compact

EHT's M87 image is the result of massive self-calibration combined with multiple imaging algorithms.

## see also

- [Calibration overview](../../02_Zettel/Theory/interf/Calibration overview.html)
- [Phase referencing](../../02_Zettel/Theory/interf/Phase referencing.html)
- [CLEAN algorithm](../../02_Zettel/Theory/interf/CLEAN algorithm.html)
- [The phase problem in interferometry](../../02_Zettel/Theory/interf/The phase problem in interferometry.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
