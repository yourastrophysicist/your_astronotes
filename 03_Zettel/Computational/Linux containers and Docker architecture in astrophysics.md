---
layout: "default"
title: "Linux containers and Docker architecture in astrophysics"
name: "Linux containers and Docker architecture in astrophysics"
description: "containerization versus virtualization, Linux kernel namespaces, cgroups, UnionFS, and reproducible astrophysical pipeline environments"
---
{% raw %}
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

- [Computational_Astrophysics_MOC](../../04_Atlas/Computational_Astrophysics_MOC.html)
- [01_Linux_Containers_and_Docker_Architecture](../../02_Literature/Lectures/Computational_Astrophysics/01_Linux_Containers_and_Docker_Architecture.html)
- [Distributed version control DAG and GitLab workflows](./Distributed%20version%20control%20DAG%20and%20GitLab%20workflows.html)
- [Modular Python packaging and scientific software architecture](./Modular%20Python%20packaging%20and%20scientific%20software%20architecture.html)
- [CloudVeneto HPC OpenStack infrastructure and remote clusters](./CloudVeneto%20HPC%20OpenStack%20infrastructure%20and%20remote%20clusters.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./CloudVeneto%20HPC%20OpenStack%20infrastructure%20and%20remote%20clusters.html" class="backlink-item">CloudVeneto HPC OpenStack infrastructure and remote clusters</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Distributed%20version%20control%20DAG%20and%20GitLab%20workflows.html" class="backlink-item">Distributed version control DAG and GitLab workflows</a></li>
  </ul>
</div>
