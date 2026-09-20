---
layout: "default"
title: "Linux containers and Docker architecture in astrophysics"
---
computational astrophysics workflows require long-term reproducibility across heterogeneous computing environments (local workstations, department servers, and national HPC supercomputers).

## virtualization versus containerization

1. **Virtual Machines (VMs)**: run a complete guest operating system on top of a hypervisor (Type 1 bare-metal or Type 2 hosted), requiring duplicated kernel space, virtual disk drives, and high memory/CPU overhead ($\sim \text{gigabytes}$, slow boot times).
2. **Containers (Docker, Singularity/Apptainer)**: share the host Linux kernel directly. isolated user-space instances run with native near-zero execution overhead.

## linux kernel isolation primitives

Docker isolates processes via three core Linux kernel features:
- **Namespaces**: isolate system resources per container:
  - `pid` (process trees)
  - `net` (network devices, ports, routing tables)
  - `mnt` (filesystem mount points)
  - `ipc` (inter-process communication, shared memory)
  - `uts` (hostname and NIS domain)
  - `user` (UID/GID mapping)
- **Control Groups (cgroups)**: enforce resource metering and limits on CPU cores, RAM allocation, and block I/O throughput.
- **Union Filesystems (UnionFS / Overlay2)**: stack read-only image layers under a single writable top container layer, enabling instant sharing of base environments across pipelines.

## astrophysical container practices

in high-performance computing (HPC) centers (e.g. CloudVeneto, CINECA), root-owned Docker daemons are security risks. HPC facilities use **Apptainer (Singularity)**, which runs unprivileged containers natively mapping the user's host UID/GID and automatically mounting home/scratch directories:

```bash
# convert Docker image to Singularity SIF on HPC
apptainer build daneel_env.sif docker://snupido/daneel:latest
apptainer run --bind /scratch:/scratch daneel_env.sif python run_retrieval.py
```

## see also

- [[Computational_Astrophysics_MOC]]
- [[01_Linux_Containers_and_Docker_Architecture]]
- [[Distributed version control DAG and GitLab workflows]]
- [[Modular Python packaging and scientific software architecture]]
- [[CloudVeneto HPC OpenStack infrastructure and remote clusters]]



## Linked References

- [[CloudVeneto HPC OpenStack infrastructure and remote clusters]]
- [[Distributed version control DAG and GitLab workflows]]
- [[Computational_Astrophysics_MOC]]


