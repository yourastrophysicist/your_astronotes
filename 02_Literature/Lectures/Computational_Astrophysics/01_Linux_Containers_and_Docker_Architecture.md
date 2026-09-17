---
layout: "default"
title: "01_Linux_Containers_and_Docker_Architecture"
---
{% raw %}
# Lesson 01 – Linux Containers and Docker Architecture

*Computational Astrophysics, Prof. Tiziano Zingales*  
*Index: [Computational_Astrophysics_MOC](../../../04_Atlas/Computational_Astrophysics_MOC.html)*

---

## Reproducibility and the Dependency Problem in Scientific Computing

A recurring crisis in computational astrophysics is the non-reproducibility of scientific software. A researcher develops a numerical pipeline over months, fixes compiler errors, tunes physical parameters, and publishes findings. Subsequent attempts by colleagues or external researchers to run the code frequently fail due to:
- Mismatched shared dynamic library versions (`glibc`, OpenBLAS, LAPACK, HDF5, NetCDF)
- Python interpreter incompatibilities (e.g., Python 3.8 vs 3.10 bytecode or syntax shifts)
- Architecture-dependent compilation failures (x86_64 vs ARM64 instruction sets)
- Operating system disparities (POSIX system calls failing on Windows environments)
- Dependency pollution: modifying system libraries to satisfy one pipeline often breaks adjacent software

The standard refrain *"it works on my machine"* is fundamentally unacceptable in scientific research. Software containers provide an isolated, deterministic, and self-contained runtime environment that guarantees execution parity across development laptops, university clusters, and cloud infrastructure.

---

## Virtualization: Hypervisors vs. Containers

To understand container architecture, we must distinguish between hardware virtualization (Virtual Machines) and operating system virtualization (Containers).

```
          [Virtual Machines]                                [Containers]
+------------------------------------+          +------------------------------------+
|  App A   |  App B   |    App C     |          |  App A   |  App B   |    App C     |
| Libraries| Libraries|  Libraries   |          | Libraries| Libraries|  Libraries   |
| Guest OS | Guest OS |   Guest OS   |          +----------+----------+----------+
+----------+----------+--------------+          |       Docker Container Engine      |
|         Hypervisor (Type 1/2)      |          +------------------------------------+
+------------------------------------+          |          Host Linux Kernel         |
|         Host Operating System      |          |       (cgroups & namespaces)       |
+------------------------------------+          +------------------------------------+
|         Physical Hardware          |          |         Physical Hardware          |
+------------------------------------+          +------------------------------------+
```

### Hypervisors and Virtual Machines (VMs)
A hypervisor (Virtual Machine Monitor) virtualizes the underlying physical hardware, presenting abstract CPU, memory, storage, and peripheral interfaces to guest operating systems:
- **Type-1 (Bare-Metal) Hypervisors**: Run directly on physical server hardware without an intermediary host OS (e.g., VMware ESXi, Xen, KVM). They deliver high I/O performance and power multi-tenant cloud platforms such as OpenStack / CloudVeneto.
- **Type-2 (Hosted) Hypervisors**: Run as application software atop a conventional host OS (e.g., VirtualBox, VMware Workstation). Every I/O request passes through the guest OS, the hypervisor software layer, and finally the host OS kernel.

**Limitations of VMs in Scientific Workflows**:
1. **Resource Duplication**: Every VM runs a complete guest operating system instance with its own kernel, system daemons (`systemd`), and memory buffers.
2. **Startup Latency**: Booting a guest OS requires tens of seconds to minutes.
3. **Rigid Resource Allocation**: RAM and CPU cores assigned to a VM are statically partitioned and unavailable to the host machine.
4. **I/O Virtualization Penalty**: Translating hardware access instructions through a hypervisor degrades memory and disk I/O throughput.

### Containers: Operating System-Level Virtualization
Containers do not virtualize hardware; they virtualize the operating system. All containers running on a host share the single underlying **host Linux kernel**. Isolation between containers is enforced directly by native Linux kernel primitives:
- **Linux Namespaces**: Partition system resources per process group:
  - `pid` namespace: Isolates process ID numbering (PID 1 inside the container is distinct from host PID 1).
  - `net` namespace: Provides private virtual network interfaces, IP routing tables, and port allocations.
  - `mnt` namespace: Isolates filesystem mount points, providing a private root filesystem (`/`).
  - `ipc` namespace: Isolates inter-process communication resources (POSIX message queues, shared memory).
  - `user` namespace: Maps container UID/GID to non-privileged host UID/GID.
- **Control Groups (cgroups)**: Enforce strict computational resource boundaries (CPU quotas, memory limits, disk I/O throttling) preventing a single runaway simulation from freezing the host system.

Because containers share the host kernel, they start in milliseconds, run at bare-metal CPU execution speeds, and consume minimal memory overhead.

### Cross-Platform Execution (macOS and Windows)
Because container processes execute system calls directly against a Linux kernel:
- **Linux Hosts**: Docker containers run natively on the host Linux kernel.
- **macOS & Windows Hosts**: Docker Desktop runs a lightweight, hypervisor-managed Linux virtual machine behind the scenes (WSL2 on Windows, Apple Hypervisor framework / Virtualization.framework on macOS). Docker containers run inside this optimized Linux utility VM.

---

## Docker Engine Architecture and Core Concepts

The Docker ecosystem is structured as a client-server architecture:

```
[Docker Client CLI]  ──(REST API over Unix Socket / TCP)──>  [Docker Daemon: dockerd]
         |                                                               |
         |                                                 ┌─────────────┴─────────────┐
         v                                                 v                           v
  CLI Commands:                                    [Local Image Cache]       [Container Processes]
  build, run, exec, pull, push                     (Read-Only Layers)         (Read-Write UnionFS)
                                                           ^
                                                           | (Pulls / Pushes)
                                                    [Docker Hub / Registry]
```

1. **Docker Daemon (`dockerd`)**: The persistent background service managing local images, container lifecycles, virtual networks, and storage drivers.
2. **Docker Client (`docker`)**: The command-line interface accepting user commands and communicating with `dockerd` over `/var/run/docker.sock`.
3. **Docker Image**: An immutable, read-only template composed of stacked filesystem layers. Analogous to an uninstantiated class in object-oriented programming.
4. **Docker Container**: A stateful, runnable instance of a Docker image. When a container is launched, a thin read-write layer (copy-on-write) is attached to the top of the immutable image layer stack.
5. **Docker Registry (Docker Hub)**: A centralized repository for hosting and versioning compiled images (e.g., `tizianozingales/unipd_ca:amd64`).

---

## Anatomy of the Course Dockerfile

The development environment for this course is defined via an ordered, reproducible `Dockerfile`. Each instruction creates a distinct filesystem layer cached by the Docker build engine.

```dockerfile
# Layer 0: Base minimal Linux distribution
FROM ubuntu:22.04

# Layer 1: System environment variables
ENV DEBIAN_FRONTEND=noninteractive \
    SHELL=/bin/bash \
    CONDA_DIR=/opt/conda \
    PATH=/opt/conda/bin:$PATH \
    PYTHONPATH=/ca/src:$PYTHONPATH

# Layer 2: Establish container workspace
WORKDIR /ca

# Layer 3: Compilers, build pipelines, and essential system utilities
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    gcc \
    g++ \
    gfortran \
    make \
    cmake \
    git \
    wget \
    curl \
    unzip \
    nano \
    vim \
    openmpi-bin \
    libopenmpi-dev \
    && rm -rf /var/lib/apt/lists/*

# Layer 4: Multi-architecture Miniconda bootstrap
ARG TARGETPLATFORM
RUN if [ "$TARGETPLATFORM" = "linux/arm64" ]; then \
        MINICONDA_ARCH="aarch64"; \
    else \
        MINICONDA_ARCH="x86_64"; \
    fi && \
    wget -q https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-${MINICONDA_ARCH}.sh -O /tmp/miniconda.sh && \
    bash /tmp/miniconda.sh -b -p /opt/conda && \
    rm /tmp/miniconda.sh && \
    conda init bash

# Layer 5: Scientific Python stack & astrophysical packages
RUN conda install -y -c conda-forge \
    python=3.10 \
    numpy \
    scipy \
    matplotlib \
    pandas \
    scikit-learn \
    cython \
    astropy \
    jupyter \
    ipykernel \
    mpi4py && \
    conda clean -afy

# Layer 6: Machine learning, exoplanet and retrieval libraries
RUN pip install --no-cache-dir \
    torch \
    torchvision \
    batman-package \
    ldtk \
    emcee \
    corner \
    dynesty \
    taurex

# Layer 7: Expose network port for Jupyter interface
EXPOSE 8888

# Layer 8: Default entrypoint process (keeps container active)
CMD ["jupyter", "notebook", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--allow-root"]
```

### Key Dockerfile Directives Explained
- `FROM`: Specifies the parent image. Every image must originate from a verified base.
- `ENV`: Persists environment variables across the build process and inside the running container.
- `WORKDIR`: Sets the working directory for subsequent `RUN`, `CMD`, and `ENTRYPOINT` instructions.
- `RUN`: Executes shell commands inside the temporary build container, committing the modified filesystem as a new permanent layer.
- `EXPOSE`: Informs Docker that the container listens on specified network ports at runtime (metadata documentation).
- `CMD`: Defines the default executable executed when launching the container. If no persistent service is executed, PID 1 terminates and the container halts immediately.

---

## Docker CLI Operations and Workflow

### 1. Multi-Architecture Image Building
Modern research teams operate on heterogeneous hardware (Intel/AMD x86_64 and Apple Silicon ARM64). Docker Buildx allows targeting specific architectures:

```bash
# Build an x86_64 image
docker build --platform linux/amd64 -t unipd_ca:amd64 .

# Build an ARM64 image (for Apple Silicon M-series)
docker build --platform linux/arm64 -t unipd_ca:arm64 .
```

### 2. Image Inspection and Distribution
```bash
# List all locally cached images
docker images

# Inspect low-level image layers, OS variables, and metadata
docker image inspect unipd_ca:amd64

# Tag and push image to public Docker Hub registry
docker tag unipd_ca:amd64 tizianozingales/unipd_ca:amd64
docker push tizianozingales/unipd_ca:amd64

# Pull pre-built course image from Docker Hub
docker pull tizianozingales/unipd_ca:amd64
```

### 3. Container Lifecycle and Execution
To run the container in detached background mode with port mapping and directory persistence:

```bash
docker run -d \
  --name ca_dev \
  -p 8888:8888 \
  -v /Users/username/astrophysics_project:/ca/project \
  tizianozingales/unipd_ca:amd64
```

Command breakdown:
- `-d`: Detached mode (runs the container in the background and prints container ID).
- `--name ca_dev`: Assigns a human-readable identifier to the running container.
- `-p 8888:8888`: Binds port 8888 on the host machine to port 8888 inside the container (`host_port:container_port`).
- `-v /Users/username/astrophysics_project:/ca/project`: Mounts a directory from the host filesystem into `/ca/project` inside the container.
- `tizianozingales/unipd_ca:amd64`: Target image name and architecture tag.

### 4. Interactive Container Inspection and Management
```bash
# Display active running containers
docker ps

# Display all containers (including stopped or exited instances)
docker ps -a

# Open an interactive bash shell inside a running container
docker exec -it ca_dev /bin/bash

# Stop and terminate container
docker stop ca_dev

# Delete container instance (does not affect mounted host volumes)
docker rm ca_dev

# Delete unused images to reclaim disk space
docker image rm tizianozingales/unipd_ca:amd64
```

---

## Data Persistence: Ephemeral Layers vs. Bind Mounts

Understanding data persistence is critical when running simulations inside containers:
1. **Ephemeral Container Layer (Copy-on-Write)**:
   - Any file written inside the container outside a mounted volume is stored in the container's writable layer.
   - If the container is stopped (`docker stop`), data remains intact.
   - If the container is removed (`docker rm`), **all unmounted data is permanently destroyed**.
2. **Persistent Bind Mounts (`-v host_path:container_path`)**:
   - Maps an existing directory from the host operating system directly into the container's virtual filesystem.
   - Computational outputs (simulation snapshots, MCMC chains, FITS files, plots) written to `/ca/project` are written directly to the host disk.
   - The container can be deleted, upgraded, and recreated without data loss.

---

## IDE Integration: VS Code Remote Containers

To combine the container's isolated software stack with modern code editing tools:
1. Install **Visual Studio Code** on the host machine.
2. Install the **Dev Containers** (Remote - Containers) extension.
3. Start the course Docker container with your project mounted.
4. Press `F1` (or `Cmd+Shift+P` on macOS) $\to$ select `Dev Containers: Attach to Running Container...` $\to$ choose `ca_dev`.
5. VS Code injects a lightweight server agent inside the container, allowing you to edit files, run debuggers, use terminal shells, and execute Jupyter notebooks directly within the Linux container environment.

---

## Related Notes
- [00_Course_Overview_and_Computational_Laboratories](./00_Course_Overview_and_Computational_Laboratories.html)
- [02_Version_Control_with_Git_and_GitLab](./02_Version_Control_with_Git_and_GitLab.html)
- [03_Modular_Python_Software_Architecture_and_Packaging](./03_Modular_Python_Software_Architecture_and_Packaging.html)
- [13_CloudVeneto_HPC_Infrastructure_and_OpenStack_Deployment](./13_CloudVeneto_HPC_Infrastructure_and_OpenStack_Deployment.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./00_Course_Overview_and_Computational_Laboratories.html" class="backlink-item">00_Course_Overview_and_Computational_Laboratories</a></li>
    <li class="backlink-item-wrap"><a href="./02_Version_Control_with_Git_and_GitLab.html" class="backlink-item">02_Version_Control_with_Git_and_GitLab</a></li>
    <li class="backlink-item-wrap"><a href="./03_Modular_Python_Software_Architecture_and_Packaging.html" class="backlink-item">03_Modular_Python_Software_Architecture_and_Packaging</a></li>
    <li class="backlink-item-wrap"><a href="./13_CloudVeneto_HPC_Infrastructure_and_OpenStack_Deployment.html" class="backlink-item">13_CloudVeneto_HPC_Infrastructure_and_OpenStack_Deployment</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Computational/Linux%20containers%20and%20Docker%20architecture%20in%20astrophysics.html" class="backlink-item">Linux containers and Docker architecture in astrophysics</a></li>
  </ul>
</div>
