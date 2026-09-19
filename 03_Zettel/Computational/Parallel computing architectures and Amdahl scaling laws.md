---
layout: "default"
title: "Parallel computing architectures and Amdahl scaling laws"
---
modern astrophysical simulations (N-body dynamics, 3D MHD, atmospheric spectral grids) require high-performance parallel computing across multi-core processors and distributed supercomputers.

## flynn's computer architecture taxonomy

1. **SISD (Single Instruction, Single Data)**: classical single-core sequential CPU.
2. **SIMD (Single Instruction, Multiple Data)**: vector processing and GPUs; identical mathematical instruction executed simultaneously across massive data arrays.
3. **MIMD (Multiple Instruction, Multiple Data)**: multi-core CPUs and distributed compute clusters executing distinct asynchronous instructions on distinct data streams.

## memory architectures

- **Shared Memory (SMP / NUMA)**: all CPU cores access a single global physical memory space via a high-speed memory bus. programmed via threads (**OpenMP**, Python `multiprocessing`). limited to a single physical node ($\le 128$ cores).
- **Distributed Memory**: each node has its own private memory space. nodes communicate by passing messages over high-speed networks (InfiniBand). programmed via **MPI** (`mpi4py`). scales to millions of cores.

## parallel scaling laws

### 1. amdahl's law (strong scaling)
considers fixing the **total problem size** and increasing the number of parallel processor cores $N$.
if fraction $s$ of the code is strictly serial ($0 \le s \le 1$), the maximum theoretical speedup $S(N)$ is bounded by:

$$S_{\text{Amdahl}}(N) = \frac{T_1}{T_N} = \frac{1}{s + \frac{1 - s}{N}}$$

in the limit of infinite processors ($N \to \infty$):

$$\lim_{N\to\infty} S(N) = \frac{1}{s}$$

*even if $95\%$ of an astrophysical code is parallelized ($s = 0.05$), the maximum possible speedup on any supercomputer is strictly capped at $1 / 0.05 = 20\times$.*

### 2. gustafson's law (weak scaling)
considers increasing the problem size proportionally with the number of processors $N$, maintaining constant execution time per core:

$$S_{\text{Gustafson}}(N) = s + N(1 - s) = N - s(N - 1)$$

speedup scales linearly with processor count $N$, demonstrating that massive parallelism is unlocked by solving larger, higher-resolution physical problems.

## see also

- [Computational_Astrophysics_MOC](../../04_Atlas/Computational_Astrophysics_MOC.html)
- [11_Parallel_Computing_Architectures_and_HPC_Scaling](../../02_Literature/Lectures/Computational_Astrophysics/11_Parallel_Computing_Architectures_and_HPC_Scaling.html)
- [MPI distributed memory programming with mpi4py](MPI%20distributed%20memory%20programming%20with%20mpi4py.html)
- [CloudVeneto HPC OpenStack infrastructure and remote clusters](CloudVeneto%20HPC%20OpenStack%20infrastructure%20and%20remote%20clusters.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="CloudVeneto%20HPC%20OpenStack%20infrastructure%20and%20remote%20clusters.html" class="backlink-item">CloudVeneto HPC OpenStack infrastructure and remote clusters</a></li>
    <li class="backlink-item-wrap"><a href="MPI%20distributed%20memory%20programming%20with%20mpi4py.html" class="backlink-item">MPI distributed memory programming with mpi4py</a></li>
    <li class="backlink-item-wrap"><a href="Monte%20Carlo%20integration%20and%20cursed%20dimensions.html" class="backlink-item">Monte Carlo integration and cursed dimensions</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
  </ul>
</div>

