---
layout: "default"
title: "Math Numerical Methods exam rules"
---
{% raw %}
# Math Numerical Methods, exam rules

the exam is a **written python practical**. I sit at a computer in a designated room for a fixed time slot, the prompt and the data files are released through a google drive, I write four scripts plus their plots, and upload the whole thing back to the drive before the deadline. nothing is allowed to be uploaded after the deadline.

## format

from the official `exam_template.pdf`:

> Please, write scripts in python to address the following exercises. When you are done, please upload the scripts, the plots and any additional relevant material to the google drive [LINK]. It will not be permitted to upload material after the end of the written exam.

four exercises, each with sub-points labeled A, B, C, D. expected output for each sub-point: a python script that runs cleanly, the resulting plot(s), and the printed numbers.

## the four exercises follow a stable pattern

across the past papers I have on file (`exam_2021_01_25_groupA.pdf`, `exam_2021_06_24.pdf`, `exam_2021_08_30.pdf`, `EXAM_solution_25-01-2024.ipynb`, `Solution_14Feb2025.ipynb`, `Solution_24June2025.ipynb`) the four exercises are:

1. **read & plot a dataset** — load an ASCII or FITS table, scatter, 2D histogram, basic statistics. the file may be a binary-black-hole population, a stellar catalog, a spectroscopic dataset
2. **random number sampling** — draw $N$ samples from a non-trivial distribution $P(x)$ given analytically. usually inverse transform if the CDF is invertible, rejection otherwise. the comparison plot of histogram vs analytic $P(x)$ is required
3. **integration of a function** — Monte Carlo (mean value method) of a given $f(x)$, or trapezoid, or both with comparison. usually asked to plot integral value vs $N$ to show $1/\sqrt{N}$ convergence
4. **N-body problem** — three or four point masses, gravitational interaction with $G = 1$, integrate over time with a specified scheme (midpoint, leapfrog, RK4) and timestep. plot orbits, plot relative energy variation $\Delta E/E$ vs time as a diagnostic

the exam template I have:
- exercise 1: BBH population, scatter and 2D histogram, mean and std
- exercise 2: inverse sampling from $P(s) = C/s$ from 1 AU to 1000 AU, histogram vs analytic
- exercise 3: $f(x) = \sin(x)(1-x)^2$ on $[0, \pi]$, mean-value MC with $N = 10^3, 10^4, 10^5, 10^6$
- exercise 4: Pythagorean three-body problem, midpoint integration, energy diagnostic

## what to bring (mentally) to the exam

- the **problem-class taxonomy** in [Mathematical_Numerical_Methods_MOC](../../04_Atlas/Mathematical_Numerical_Methods_MOC.html) — recognise which of the seven boxes the exercise lives in, on the first read
- the **code snippet patterns** I have memorized for each box (loadtxt + plot, inverse sampling one-liner, MC integral one-liner, midpoint + plot energy)
- a clear sense of **what to plot**: every numerical result needs a verification plot. histogram with overplotted analytic. integral vs N. orbits in xy plus $\Delta E/E$ vs t

## what is allowed

- **scipy and numpy**: every built-in is fair game (`scipy.integrate.quad`, `scipy.optimize.curve_fit`, `np.random.uniform`, `np.histogram`)
- **astropy and matplotlib**: for units and plots
- **the lecture notes**: my own notes on my computer, the official PDF, anything I have written down
- **the internet**: in practice yes, since the exam is on a connected machine, but Mapelli expects me to know what I am doing — googling boilerplate is fine, googling the algorithm definition mid-exam is bad sign

## what is not allowed

- **collaboration with other students** during the exam
- **uploading after the deadline** — strict
- **submitting code that does not run** — even partial credit requires a runnable script

## rubric (my best read)

every exam I have seen is roughly evenly weighted, ~25% per exercise. within an exercise:
- correctness of the algorithm (~50%)
- plot quality and readability (~25%)
- numerical correctness of the printed values (~25%)

so a bad-looking but correct plot loses points; a beautiful plot from wrong code loses more.

## practical tips

- **set the random seed** for reproducibility (`np.random.seed(42)`); the grader can re-run and check
- **comment generously** — even a one-line `# inverse transform sampling` saves a grader 30 seconds and earns goodwill
- **save plots to files** with descriptive names (`exercise_2_inverse_sampling_histogram.pdf`); never trust the GUI to be open at upload time
- **print the final numerical answer** at the end of each exercise with a clear label: `print(f"integral = {I:.4f} ± {dI:.4f}")`
- **time-budget**: 4 exercises × ~45 min each leaves 30 minutes margin. do not get stuck on exercise 1; if exercise 4 looks scarier, skim all four first and start with the easiest

## see also

- [Math Numerical Methods course intro](./Math%20Numerical%20Methods%20course%20intro.html)
- [Mathematical_Numerical_Methods_MOC](../../04_Atlas/Mathematical_Numerical_Methods_MOC.html) — full topic map
- [Numerical problem solving workflow](./Numerical%20problem%20solving%20workflow.html) — the meta-recipe inside one exercise
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Math%20Numerical%20Methods%20course%20intro.html" class="backlink-item">Math Numerical Methods course intro</a></li>
    <li class="backlink-item-wrap"><a href="./Math%20Numerical%20Methods%20equation%20sheet.html" class="backlink-item">Math Numerical Methods equation sheet</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Mathematical_Numerical_Methods_MOC.html" class="backlink-item">Mathematical_Numerical_Methods_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Numerical%20problem%20solving%20workflow.html" class="backlink-item">Numerical problem solving workflow</a></li>
  </ul>
</div>
