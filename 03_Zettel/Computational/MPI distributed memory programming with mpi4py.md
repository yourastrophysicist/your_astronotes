---
layout: "default"
title: "MPI distributed memory programming with mpi4py"
---
the Message Passing Interface (MPI) is the universal standard for distributed-memory parallel computing in scientific simulation and high-performance computing.

## the spmd execution model

MPI operates under the **Single Program, Multiple Data (SPMD)** model: the exact same executable runs simultaneously across $N$ distinct processes. each process is assigned a unique identifier:
- `comm.Get_size()`: total number of processes $N$.
- `comm.Get_rank()`: unique integer rank of the current process ($0 \le \text{rank} < N$).

processes branch execution based on their rank:

```python
from mpi4py import MPI

comm = MPI.COMM_WORLD
rank = comm.Get_rank()
size = comm.Get_size()
```

## communication primitives in mpi4py

`mpi4py` supports two distinct communication protocols:
1. **lowercase methods (`send`, `recv`, `bcast`, `gather`)**: communicate arbitrary Python objects via pickle serialization; convenient but slow due to serialization overhead.
2. **uppercase methods (`Send`, `Recv`, `Bcast`, `Gather`, `Reduce`)**: operate directly on contiguous memory buffers (NumPy arrays) using C-level pointers without serialization, achieving full wire speed:

```python
import numpy as np

# fast uppercase buffer communication
data = np.zeros(1000000, dtype=np.float64)
if rank == 0:
    data[:] = np.random.rand(1000000)
comm.Bcast([data, MPI.DOUBLE], root=0)
```

## non-blocking point-to-point communication

blocking calls (`Send` / `Recv`) idle the CPU until the message buffer is safe to reuse, causing deadlocks if circular communication dependencies arise.
**non-blocking calls (`Isend` / `Irecv`)** initiate transfer immediately and return a request handle, allowing computation to overlap with network data transfer:

```python
req = comm.Irecv([recv_buf, MPI.DOUBLE], source=prev_rank)
comm.Isend([send_buf, MPI.DOUBLE], dest=next_rank)
# perform computation on local interior grid while halo cells transfer
req.Wait()
```

## collective operations

- `Bcast`: broadcasts an array from root rank to all other ranks.
- `Scatter`: chunks an array and distributes distinct segments to each rank.
- `Gather`: collects segments from all ranks back into a single array on root.
- `Reduce` / `Allreduce`: applies an associative reduction operator (`MPI.SUM`, `MPI.MAX`, `MPI.PROD`) across all processes.

## see also

- [[Computational_Astrophysics_MOC]]
- [[12_MPI_Distributed_Memory_Programming_with_Python]]
- [[Parallel computing architectures and Amdahl scaling laws]]
- [[CloudVeneto HPC OpenStack infrastructure and remote clusters]]



## Linked References

- [[Parallel computing architectures and Amdahl scaling laws]]
- [[Computational_Astrophysics_MOC]]


