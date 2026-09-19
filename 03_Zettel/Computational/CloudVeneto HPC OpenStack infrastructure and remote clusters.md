---
layout: "default"
title: "CloudVeneto HPC OpenStack infrastructure and remote clusters"
---
CloudVeneto is the regional high-performance computing infrastructure operated collaboratively by INFN Padova/Legnaro and the University of Padova (UniPD) for computationally demanding astrophysical simulations.

## openstack infrastructure architecture

CloudVeneto provides virtualized and containerized multi-tenant computing resources managed via OpenStack:
- **Compute (Nova)**: virtual instances configured with up to 64 vCPUs and high-memory allocations ($> 256\text{ GB}$).
- **Networking (Neutron)**: isolated private tenant subnets connected to public campus networks via floating IPs and secure gateways.
- **Storage (Cinder / Ceph)**: high-throughput distributed block storage mounted across compute nodes for scientific scratch datasets.

## ssh bastion routing and proxyjump

because compute nodes reside on internal private networks ($10.x.x.x$ subnets) behind institutional firewalls, external access requires routing through an SSH bastion jump host (`gate.dei.unipd.it` or INFN gateway).

configured in `~/.ssh/config` using `ProxyJump`:

```ssh-config
Host bastion-unipd
    HostName gate.dei.unipd.it
    User snupido
    IdentityFile ~/.ssh/id_ed25519

Host cloudveneto-node
    HostName 10.64.12.45
    User ubuntu
    ProxyJump bastion-unipd
    IdentityFile ~/.ssh/cloudveneto_key
```

connecting is transparent with:
```bash
ssh cloudveneto-node
```

## remote vs code and jupyter tunneling

interactive development on remote HPC nodes requires forwarding graphical and web services securely to the local machine:

1. **SSH Local Port Forwarding**:
   tunnels remote Jupyter notebook instances to local browsers:
   ```bash
   ssh -N -L 8888:localhost:8888 cloudveneto-node
   ```
2. **VS Code Remote - SSH**:
   runs a lightweight VS Code Server daemon directly on the remote Linux instance, providing full local IDE editing, linting, debugging, and terminal access while code executes on remote HPC compute cores.

## see also

- [Computational_Astrophysics_MOC](../../04_Atlas/Computational_Astrophysics_MOC.html)
- [13_CloudVeneto_HPC_Infrastructure_and_OpenStack_Deployment](../../02_Literature/Lectures/Computational_Astrophysics/13_CloudVeneto_HPC_Infrastructure_and_OpenStack_Deployment.html)
- [Linux containers and Docker architecture in astrophysics](Linux%20containers%20and%20Docker%20architecture%20in%20astrophysics.html)
- [Parallel computing architectures and Amdahl scaling laws](Parallel%20computing%20architectures%20and%20Amdahl%20scaling%20laws.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Linux%20containers%20and%20Docker%20architecture%20in%20astrophysics.html" class="backlink-item">Linux containers and Docker architecture in astrophysics</a></li>
    <li class="backlink-item-wrap"><a href="MPI%20distributed%20memory%20programming%20with%20mpi4py.html" class="backlink-item">MPI distributed memory programming with mpi4py</a></li>
    <li class="backlink-item-wrap"><a href="Parallel%20computing%20architectures%20and%20Amdahl%20scaling%20laws.html" class="backlink-item">Parallel computing architectures and Amdahl scaling laws</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
  </ul>
</div>

