---
layout: "default"
title: "11_Parallel_Computing_Architectures_and_HPC_Scaling"
---
{% raw %}
# Lesson 11 – Parallel Computing Architectures and HPC Scaling

*Computational Astrophysics, Prof. Tiziano Zingales*  
*Index: [Computational_Astrophysics_MOC](../../../04_Atlas/Computational_Astrophysics_MOC.html)*

---

## The Computational Imperative in Astrophysics

Theoretical and observational astrophysics generate problems whose computational demands far exceed the capabilities of single-core processors:
1. **Time-Series Exoplanet Searches**: Evaluating Box Least Squares (BLS) or transit models across $10^5$ Kepler or TESS light curves, each containing tens of thousands of cadence points.
2. **Atmospheric Spectral Retrievals**: A single Bayesian retrieval requires $10^4 - 10^7$ forward model evaluations. At $0.1\text{ s}$ per forward radiative transfer solve, a serial run requires weeks on a single core.
3. **N-Body and Hydrodynamic Simulations**: Gravitational direct summation scales as $\mathcal{O}(N^2)$ for $N > 10^9$ particles in cosmological and star cluster simulations.

Parallel computing is the simultaneous use of multiple compute resources (cores, processors, accelerator devices, clustered nodes) to solve a computational problem concurrently.

---

## Flynn's Classical Hardware Taxonomy

Michael J. Flynn (1966) classified computer architectures based on the multiplicity of hardware instruction streams and data streams:

```
                                  [Flynn's Taxonomy]
                                          │
                 ┌────────────────────────┴────────────────────────┐
                 v                                                 v
      [Single Instruction Stream]                      [Multiple Instruction Stream]
         ├── SISD: Serial CPU                             ├── MISD: Fault-tolerant voting
         └── SIMD: GPUs & Vector units                    └── MIMD: Multi-core HPC clusters
```

### 1. SISD (Single Instruction, Single Data)
- A single processor executes a single instruction stream on data stored in a single memory location per clock cycle.
- The classical von Neumann architecture (single-core CPUs, legacy mainframes).

### 2. SIMD (Single Instruction, Multiple Data)
- A single control unit issues a single instruction that is executed in lockstep across multiple processing elements, each operating on distinct data elements.
- **Architectures**: Modern graphics processing units (GPUs), vector extension registers (AVX-512, SSE).
- **Astrophysical Use**: Highly regular matrix operations, image convolutions, pixel-by-pixel CCD flat-fielding, and uniform cross-section interpolations.

### 3. MISD (Multiple Instruction, Single Data)
- Multiple processors execute different instructions on the same single data stream.
- Rare in scientific computing; utilized primarily in redundant, fault-tolerant flight control systems (e.g., Space Shuttle and spacecraft avionics).

### 4. MIMD (Multiple Instruction, Multiple Data)
- Multiple autonomous processors simultaneously execute different instruction streams on different data streams.
- The standard architecture of all modern supercomputers and multi-core clusters (e.g., CINECA Leonardo, CloudVeneto).

---

## Memory Architectures: Shared vs. Distributed Memory

```
      [Shared Memory Architecture]                         [Distributed Memory Architecture]
+----------------------------------------+       +-------------------+       +-------------------+
|  CPU 0    CPU 1    CPU 2    CPU 3      |       |  CPU 0    CPU 1   |       |  CPU 2    CPU 3   |
|    │        │        │        │        |       |    │        │     |       |    │        │     |
+────┴────────┴────────┴────────┴────────+       +────┴────────┴─────+       +────┴────────┴─────+
|           High-Speed Bus               |       |   Node 0 Memory   |       |   Node 1 Memory   |
+────────────────────────────────────────+       +───────────────────+       +───────────────────+
|         Common Global Memory           |                 ▲                           ▲
+----------------------------------------+                 └──────[Network Interconnect]
```

### 1. Shared Memory Systems
All processors access a single global physical address space over a high-speed system bus:
- **UMA (Uniform Memory Access)**: Symmetric Multi-Processing (SMP) where all processors share physical memory with identical access latencies.
- **NUMA (Non-Uniform Memory Access)**: Multiple processor sockets have physically local memory banks; accessing memory attached to another socket incurs higher latency.
- **Software Model**: Multi-threading via **OpenMP** or POSIX Threads (`pthreads`).
- **Limitation**: Memory bus saturation and cache coherency traffic prevent shared memory architectures from scaling efficiently beyond $\approx 64 - 128$ cores on a single motherboard.

### 2. Distributed Memory Systems
The system consists of independent compute nodes connected via high-speed network fabrics (InfiniBand, 100GbE):
- Each processor has exclusive access to its private physical memory.
- Processors exchange data strictly by passing messages across the network.
- **Software Model**: Message Passing Interface (**MPI**).
- **Scalability**: Can scale to millions of cores across thousands of racks without bus bottlenecks.

### 3. Hybrid Programming Model
Modern high-performance computing centers (including EuroHPC Leonardo) employ a tiered hybrid model:
- **Node-to-Node**: MPI handles distributed memory communication across network cables.
- **Intra-Node (Sockets/Cores)**: OpenMP or multi-threading handles shared-memory loops.
- **On-Node Accelerators**: CUDA / HIP offload compute-dense numerical kernels to GPUs.

---

## Theoretical Limits to Parallel Scaling

Adding compute cores does not decrease wall-clock execution time indefinitely. Two fundamental laws govern parallel scaling efficiency.

### 1. Amdahl's Law (Strong Scaling)
Amdahl's Law evaluates how execution time scales when running a **fixed problem size** across an increasing number of processors $N$.

Let $p \in [0, 1]$ denote the fraction of code that can be parallelized, and $(1 - p)$ denote the strictly serial fraction (I/O, initial condition setup, parameter broadcasting):

$$\text{Speedup } S(N) = \frac{T_1}{T_N} = \frac{T_1}{(1 - p) T_1 + \frac{p T_1}{N}} = \frac{1}{(1 - p) + \frac{p}{N}}$$

Taking the asymptotic limit as processor count approaches infinity ($N \to \infty$):

$$S_{\max} = \lim_{N \to \infty} S(N) = \frac{1}{1 - p}$$

```
Theoretical Speedup S(N)
   20 ┌─────────────────────────────────────────────── p = 0.95 (S_max = 20)
      │                                   ────────────
   10 ┼───────────────────────━━━━━━━━━━━              p = 0.90 (S_max = 10)
      │             ━━━━━━━━━━
    5 ┼───────━━━━━━                                   p = 0.80 (S_max = 5)
      │  ━━━━━
    1 └───────────────────────────────────────────────
      1       8      16      32      64      128      Number of Cores N
```

**Physical Consequence**: If only $5\%$ of an exoplanet retrieval pipeline is serial ($p = 0.95$), the maximum theoretical speedup is capped at $20\times$, regardless of whether 100 or 100,000 cores are assigned.

### 2. Gustafson's Law (Weak Scaling)
John Gustafson (1988) observed that researchers do not use supercomputers to solve fixed small problems faster; they use supercomputers to solve **proportionally larger, higher-resolution physical problems**.

Assuming the parallel workload scales linearly with the number of processors $N$, the scaled speedup is:

$$S(N) = \frac{(1 - p) + p \cdot N}{1} = N - (1 - p)(N - 1)$$

Under weak scaling, speedup increases linearly with processor count, enabling large-scale cosmological box simulations with billions of particles.

---

## Performance Factors: Latency, Bandwidth, and Granularity

The real-world scaling of a parallel code is bounded by communication overhead:
1. **Network Latency**: The fixed time required to initiate a data packet across the network ($\sim 0.5 - 2\text{ }\mu\text{s}$ on InfiniBand; $\sim 20 - 50\text{ }\mu\text{s}$ on standard Ethernet).
2. **Bandwidth**: The capacity of the network link to transmit data volume per unit time ($\text{GB/s}$).
3. **Computational Granularity**: The ratio of computation time to communication time:
   $$\text{Granularity} = \frac{T_{\text{computation}}}{T_{\text{communication}}}$$
   - **Coarse-Grained (Embarrassingly Parallel)**: Tasks execute prolonged computational routines independently with minimal communication (e.g., evaluating independent light curve likelihoods or Monte Carlo walker trajectories). High scaling efficiency.
   - **Fine-Grained**: Tasks require synchronization every few floating-point operations. Highly vulnerable to latency bottlenecks.

---

## Related Notes
- [08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx](./08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx.html)
- [10_Nested_Sampling_and_Evidence_Computation](./10_Nested_Sampling_and_Evidence_Computation.html)
- [12_MPI_Distributed_Memory_Programming_with_Python](./12_MPI_Distributed_Memory_Programming_with_Python.html)
- [13_CloudVeneto_HPC_Infrastructure_and_OpenStack_Deployment](./13_CloudVeneto_HPC_Infrastructure_and_OpenStack_Deployment.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./10_Nested_Sampling_and_Evidence_Computation.html" class="backlink-item">10_Nested_Sampling_and_Evidence_Computation</a></li>
    <li class="backlink-item-wrap"><a href="./12_MPI_Distributed_Memory_Programming_with_Python.html" class="backlink-item">12_MPI_Distributed_Memory_Programming_with_Python</a></li>
    <li class="backlink-item-wrap"><a href="./13_CloudVeneto_HPC_Infrastructure_and_OpenStack_Deployment.html" class="backlink-item">13_CloudVeneto_HPC_Infrastructure_and_OpenStack_Deployment</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Computational/Parallel%20computing%20architectures%20and%20Amdahl%20scaling%20laws.html" class="backlink-item">Parallel computing architectures and Amdahl scaling laws</a></li>
  </ul>
</div>
