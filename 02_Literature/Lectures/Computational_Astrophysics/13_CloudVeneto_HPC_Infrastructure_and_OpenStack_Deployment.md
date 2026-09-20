---
layout: "default"
title: "13_CloudVeneto_HPC_Infrastructure_and_OpenStack_Deployment"
---
# Lesson 13 – CloudVeneto HPC Infrastructure and OpenStack Deployment

*Computational Astrophysics, Prof. Tiziano Zingales*  
*Index: [[Computational_Astrophysics_MOC]]*

---

## The CloudVeneto Infrastructure

**CloudVeneto** is the scientific cloud computing facility jointly operated by the University of Padua (UNIPD) and the National Institute for Nuclear Physics (INFN-Padova / LNL). Built upon the **OpenStack** open-source cloud operating system, it provides high-throughput virtualized compute clusters, high-memory virtual machines (VMs), GPU nodes, and Ceph-backed distributed storage for scientific research.

In this course, computationally demanding workloads—such as MCMC sampling chains, nested sampling evidence calculations, and MPI parallel jobs—are executed on shared CloudVeneto instances.

```
       Local Development Machine (Laptop)
                     │
                     │  SSH Port 22
                     v
   [Public Bastion Gateway: gate.cloudveneto.it]
                     │
                     │  Internal Isolated Subnet (10.x.x.x)
                     v
   [Compute VM: CA25_group (cloudveneto.large)]
                     │
                     │  Containerization
                     v
   [Docker Container: tizianozingales/unipd_ca:amd64]
```

---

## OpenStack Instance Provisioning

### 1. Account Access and Project Allocation
- Authenticate to the OpenStack Horizon web dashboard ([cloudveneto.ict.unipd.it](https://cloudveneto.ict.unipd.it/dashboard)) using University of Padua Single Sign-On (SSO).
- Verify assignment to the project domain: `PhysicsOfData-students`.

### 2. Keypair Management
Before instantiating compute nodes, generate a dedicated SSH keypair (do not use default names):
```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_cloudveneto -C "student@cloudveneto"
```
Upload the public key (`id_cloudveneto.pub`) under `Compute -> Key Pairs -> Import Key Pair` in the Horizon dashboard.

### 3. Launching the Course Virtual Machine
In the Horizon dashboard, select `Compute -> Instances -> Launch Instance`:
1. **Details**: Assign an instance name formatted as `CA25_groupname`.
2. **Source**: Select `Instance Snapshot` $\to$ choose **`CA25_base`** (the pre-configured course environment containing Ubuntu 22.04, Docker Engine, compilers, and OpenMPI).
3. **Flavor**: Select **`cloudveneto.large`** (provides dedicated multi-core vCPUs and sufficient RAM for high-dimensional nested sampling).
4. **Networks**: Attach the default private subnet for the `PhysicsOfData-students` project.
5. **Security Groups**: Ensure rules permit inbound SSH (port 22) and ICMP ping from the internal network.
6. **Key Pair**: Select your uploaded public key.

Upon launching, the instance is allocated a private internal IP address (e.g., `10.0.X.Y`).

---

## Network Routing and the Bastion Gate

Because compute instances reside on private internal subnets without public IPv4 routable addresses, external connections must pass through the public bastion host: **`gate.cloudveneto.it`**.

### Two-Step Manual Connection
1. Transfer your private SSH key to your home directory on the gateway:
   ```bash
   scp ~/.ssh/id_cloudveneto username@gate.cloudveneto.it:~/.ssh/
   ```
2. Log into the gate:
   ```bash
   ssh username@gate.cloudveneto.it
   ```
3. From the gate shell, connect to your compute VM:
   ```bash
   ssh -i ~/.ssh/id_cloudveneto ubuntu@10.0.X.Y
   ```

---

## Automated Direct Access via SSH ProxyJump

Manually hopping through the gateway impedes file transfers, IDE integration, and port forwarding. We configure the local SSH client (`~/.ssh/config`) to route transparently through the bastion using **`ProxyJump`**.

### Local `~/.ssh/config` Configuration
Edit or create `~/.ssh/config` on your local laptop:

```ssh-config
# CloudVeneto Bastion Host
Host cloudveneto-gate
    HostName gate.cloudveneto.it
    User your_unipd_username
    IdentityFile ~/.ssh/id_rsa_gate
    Port 22

# Direct Target Virtual Machine
Host vm.cloudveneto.it
    HostName 10.0.X.Y
    User ubuntu
    IdentityFile ~/.ssh/id_cloudveneto
    ProxyJump cloudveneto-gate
    ServerAliveInterval 60
    ServerAliveCountMax 10
```

With this configuration in place, connecting directly to the private VM requires only:

```bash
ssh vm.cloudveneto.it
```

OpenSSH automatically negotiates an encrypted tunnel through `gate.cloudveneto.it` and drops your terminal directly into the VM shell.

---

## Port Forwarding and Headless Services

To interact with Jupyter notebooks or web-based dashboards running inside the remote VM's Docker container, configure **Local SSH Port Forwarding** (`-L`):

```bash
# Forward local laptop port 8008 to remote container port 8888
ssh -L 8008:localhost:8888 vm.cloudveneto.it
```

```
[Local Laptop Browser] ──(http://localhost:8008)──► [SSH Client]
                                                          │
                                         Encrypted Tunnel │ (Port 22 via Gate)
                                                          v
[Remote Compute VM]    ◄─────────────────────────── [sshd Service]
         │
         │ (Internal Loopback 127.0.0.1:8888)
         v
[Docker Container: Jupyter Server]
```

Open any browser on your laptop and navigate to `http://localhost:8008` to access the remote computational notebook.

---

## IDE Integration: VS Code Remote-SSH

To develop interactively on CloudVeneto using Visual Studio Code:
1. Install the **Remote - SSH** extension in VS Code.
2. Press `F1` $\to$ select `Remote-SSH: Connect to Host...`.
3. Select **`vm.cloudveneto.it`** (detected automatically from `~/.ssh/config`).
4. VS Code connects through the bastion, installs its headless server inside the VM, and opens the remote workspace.
5. In the remote VS Code window, open the command palette and select `Dev Containers: Attach to Running Container...` to attach directly to the course Docker container.

---

## Multi-User Team Access and Key Sharing

To allow group members to collaborate on a single VM without sharing private keys:
1. Each teammate generates their own keypair locally:
   ```bash
   ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_teammate
   ```
2. Teammates send their **public key** (`id_teammate.pub`) to the VM owner.
3. The VM owner appends the teammate's public key to `authorized_keys` on the VM:
   ```bash
   ssh-copy-id -i path/to/id_teammate.pub vm.cloudveneto.it
   ```
4. All group members can now log into the `ubuntu` account simultaneously using their respective private keys.

---

## Resource Decommissioning and Quotas

CloudVeneto resources in the `PhysicsOfData-students` project are shared across cohorts, thesis candidates, and faculty. When group simulations and oral examinations are completed:
1. Terminate all background Docker containers: `docker stop $(docker ps -q)`.
2. Back up all package code, git branches, and project reports to GitLab/GitHub.
3. Access the Horizon dashboard $\to$ `Instances` $\to$ select `CA25_groupname` $\to$ click `Delete Instance`.
4. Release unattached floating IP addresses and delete unused volume snapshots to restore cluster capacity.

---

## Related Notes
- [[00_Course_Overview_and_Computational_Laboratories]]
- [[01_Linux_Containers_and_Docker_Architecture]]
- [[11_Parallel_Computing_Architectures_and_HPC_Scaling]]
- [[12_MPI_Distributed_Memory_Programming_with_Python]]



## Linked References

- [[CloudVeneto HPC OpenStack infrastructure and remote clusters]]
- [[Computational_Astrophysics_MOC]]


