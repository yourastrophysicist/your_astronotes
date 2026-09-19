---
layout: "default"
title: "Distributed version control DAG and GitLab workflows"
---
Git tracks code history not as delta diffs, but as an immutable Directed Acyclic Graph (DAG) of project snapshots stored in a content-addressable object database.

## internal object store architecture

every entity in the `.git/objects` directory is indexed by the cryptographic SHA-1 / SHA-256 hash of its header and content:
1. **blob**: compressed raw file contents (independent of filename or permissions).
2. **tree**: directory listing mapping filenames and permissions to blob or sub-tree hashes.
3. **commit**: snapshot pointing to a top-level tree, zero or more parent commit hashes, author metadata, and commit message.
4. **annotated tag**: permanent pointer to a specific commit.

branches in Git are lightweight, mutable 41-byte text pointers in `.git/refs/heads/` storing the hash of the tip commit.

## 3-way merge versus rebase

when integrating a feature branch into `main`:
1. **3-way merge (`git merge`)**:
   identifies the best common ancestor (base), the tip of `main`, and the tip of `feature`. generates a new merge commit with two parents ($P_1, P_2$), preserving the historical branching chronology.
2. **rebase (`git rebase`)**:
   replays commits from the feature branch one by one onto the tip of `main`, rewriting commit hashes and maintaining a linear, clean commit history.

## gitlab ci/cd pipelines in astrophysics

collaborative research packages (`daneel`) use GitLab automated pipelines (`.gitlab-ci.yml`) to enforce scientific software standards:
- automated test suites with `pytest` on push.
- code linting (`ruff`, `black`, `mypy`) ensuring PEP 8 compliance.
- automated build of documentation via Sphinx and GitLab Pages.

## see also

- [Computational_Astrophysics_MOC](../../04_Atlas/Computational_Astrophysics_MOC.html)
- [02_Version_Control_with_Git_and_GitLab](../../02_Literature/Lectures/Computational_Astrophysics/02_Version_Control_with_Git_and_GitLab.html)
- [Modular Python packaging and scientific software architecture](Modular%20Python%20packaging%20and%20scientific%20software%20architecture.html)
- [Linux containers and Docker architecture in astrophysics](Linux%20containers%20and%20Docker%20architecture%20in%20astrophysics.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Linux%20containers%20and%20Docker%20architecture%20in%20astrophysics.html" class="backlink-item">Linux containers and Docker architecture in astrophysics</a></li>
    <li class="backlink-item-wrap"><a href="Modular%20Python%20packaging%20and%20scientific%20software%20architecture.html" class="backlink-item">Modular Python packaging and scientific software architecture</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
  </ul>
</div>

