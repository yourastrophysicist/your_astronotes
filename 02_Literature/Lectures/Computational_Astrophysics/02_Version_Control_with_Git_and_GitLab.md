---
layout: "default"
title: "02_Version_Control_with_Git_and_GitLab"
---
{% raw %}
# Lesson 02 – Version Control with Git and GitLab

*Computational Astrophysics, Prof. Tiziano Zingales*  
*Index: [Computational_Astrophysics_MOC](../../../04_Atlas/Computational_Astrophysics_MOC.html)*

---

## The Version Control Problem in Scientific Research

Scientific codes evolve continuously as physical approximations change, numerical algorithms are refined, and new observational datasets arrive. Without a formal version control system, scientific development degrades into fragile workarounds:
- Folder proliferation: `code_v1/`, `code_v2_final/`, `code_v2_final_really/`, `code_review_october/`
- Irreproducible publications: Inability to recreate numerical figures from a published paper because subsequent code modifications altered intermediate functions
- Collaborative collisions: Multiple researchers manually emailing modified scripts, overwriting each other's edits, and introducing regressions
- Inability to experiment safely: Fear of modifying working numerical routines because rolling back breaking changes is manual and error-prone

**Git** is an open-source, content-addressable distributed version control system (DVCS) designed by Linus Torvalds. In Git, every developer's local clone contains the entire project history, allowing complete offline operation, cryptographically verified integrity, and distributed branching workflows.

---

## The Git Object Model and State Machine

Unlike older version control systems (such as CVS or Subversion) that record file changes as delta lists, **Git records project history as a directed acyclic graph (DAG) of snapshots**.

```
[Working Directory]  ───(git add)───>  [Staging Area (Index)]  ───(git commit)───>  [Local Repository (.git)]
         ^                                                                                     │
         │                                                                                     │ (git push)
         └─────────────────────────────(git checkout / restore)───────────────────────────────v
                                                                                   [Remote Repository (GitHub/GitLab)]
```

### The Four File States
1. **Untracked**: A file exists in the working directory but is not monitored by Git.
2. **Modified**: A tracked file has been altered in the working directory relative to its state in the last commit.
3. **Staged (Index)**: A modified file whose updated contents have been added to the staging area via `git add`, scheduled for inclusion in the upcoming commit snapshot.
4. **Committed**: Changes are permanently written to the `.git` database.

### Internal Commit Structure
Every commit in Git is an immutable object identified by a 40-character hexadecimal SHA hash (or SHA-256 in newer versions). A commit contains:
- A pointer to a root **Tree object** (representing the directory structure and file contents/blobs at that moment)
- Pointers to **parent commits** (one parent for standard commits, two or more for merge commits, none for the initial root commit)
- Author and committer metadata (name, email, timestamp)
- Commit log message

---

## Local Setup and Basic Operations

### 1. Global Identity Configuration
Before issuing commits, set your global author credentials (matching your GitLab/GitHub account):

```bash
git config --global user.name "Your Name"
git config --global user.email "your_email@studenti.unipd.it"
git config --global init.defaultBranch main
```

### 2. Repository Initialization and Cloning
```bash
# Initialize a new local repository in the current folder
git init my_astro_package

# Clone an existing remote repository
git clone https://github.com/tiziano1590/comp_astro_25.git
cd comp_astro_25
```

### 3. Tracking, Staging, and Ignoring Files
```bash
# Check repository status (active branch, staged files, untracked files)
git status

# Stage a specific file
git add src/transit_model.py

# Stage all tracked and untracked changes across the working tree
git add -A

# Exclude temporary files, caches, and large astronomical datasets
cat << 'EOF' > .gitignore
__pycache__/
*.pyc
*.so
.ipynb_checkpoints/
.DS_Store
*.fits
*.h5
*.hdf5
output/
chains/
EOF
```

### 4. Committing and Inspecting History
```bash
# Commit staged changes with an imperative, meaningful message
git commit -m "Implement quadratic limb darkening computation in transit model"

# View commit history
git log

# Compact, graphical visualization of the commit DAG
git log --oneline --graph --all --decorate
```

---

## Undoing and Restoring State

Git provides commands to rollback edits at every stage of the pipeline:

### 1. Modifying the Most Recent Commit
If a commit was made prematurely or a typo exists in the commit message:
```bash
# Stage the forgotten file, then amend without creating a new commit node
git add missing_file.py
git commit --amend -m "Updated commit message"
```
> [!WARNING]
> Never amend commits that have already been pushed to a public/shared remote, as this rewrites history and invalidates collaborator tracking.

### 2. Discarding Working Tree and Staged Modifications
```bash
# Unstage a file while keeping changes intact in the working tree
git restore --staged src/transit_model.py

# Discard all unstaged working tree changes in a file (revert to last commit)
git restore src/transit_model.py
```

### 3. Stashing In-Progress Work
When switching branches while working tree changes are unfinished:
```bash
# Save uncommitted changes to a temporary stack and clean the working directory
git stash push -m "WIP: transit duration optimization"

# List saved stashes
git stash list

# Reapply the saved changes and drop them from the stash stack
git stash pop
```

---

## Branching Architecture and Integration

A **branch** in Git is simply a lightweight, movable pointer to a commit hash. The special pointer **`HEAD`** indicates which branch and commit is currently checked out in your working directory.

```
       [HEAD -> feature/mcmc]
                 |
                 v
        C3 ───> C4
       /
C1 ──> C2 ───> C5
                 ^
                 |
             [main]
```

### 1. Branch Lifecycle
```bash
# List local branches (* denotes currently active branch)
git branch

# Create a new feature branch
git branch feature/lightcurve-detrending

# Switch to the new branch
git checkout feature/lightcurve-detrending
# Or using modern syntax:
git switch feature/lightcurve-detrending

# Create and switch in a single command
git checkout -b feature/lightcurve-detrending
```

### 2. Merging Strategies

#### Fast-Forward Merge
When the target branch (`main`) has no intermediate commits since the branch diverged, Git simply moves the `main` pointer forward to the tip of the feature branch:

```bash
git checkout main
git merge feature/lightcurve-detrending
```

#### Three-Way Recursive Merge
When `main` and `feature/mcmc` have diverged (both have new commits), Git locates their lowest common ancestor commit, computes differences across both paths, and creates a synthetic **Merge Commit** with two parents:

```bash
git checkout main
git merge feature/mcmc
```

### 3. Rebase vs. Merge
An alternative integration method is **`git rebase`**, which replays commits from the active branch on top of another base commit, creating a linear history:

```bash
# Replay local commits on top of current main
git checkout feature/mcmc
git rebase main
```

```
Before Rebase:
          C3 ─── C4  [feature/mcmc]
         /
C1 ─── C2 ─── C5     [main]

After Rebase:
C1 ─── C2 ─── C5 ─── C3' ─── C4'  [feature/mcmc]
                 ^
                 | [main]
```

| Criterion | `git merge` | `git rebase` |
| :--- | :--- | :--- |
| **History Preservation** | Preserves true chronological commit history exactly as it occurred. | Rewrites commit hashes to construct a clean, linear sequence. |
| **Traceability** | Leaves explicit merge commit nodes showing branch integration points. | Avoids merge commit clutter. |
| **Safety Rule** | Always safe on public and private branches. | **Golden Rule**: Never rebase commits that have been pushed to a public/shared branch. |

### 4. Cherry-Picking
To extract a single commit from another branch without merging the entire history:
```bash
git cherry-pick <commit-hash>
```

---

## Merge Conflicts and Resolution

When two branches modify the exact same lines of code in different ways, Git halts the merge and injects conflict delimiters directly into the affected file:

```python
<<<<<<< HEAD
def compute_transit_depth(rp, rs):
    return (rp / rs) ** 2
=======
def compute_transit_depth(radius_planet, radius_star):
    ratio = radius_planet / radius_star
    return ratio * ratio
>>>>>>> feature/variable-names
```

### Conflict Resolution Protocol
1. Run `git status` to identify all files listed under `Unmerged paths:`.
2. Open each conflicted file, analyze the physical logic, and manually edit the code to the desired unified state.
3. Remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
4. Stage the resolved files:
   ```bash
   git add src/transit_model.py
   ```
5. Complete the merge commit:
   ```bash
   git commit -m "Merge branch 'feature/variable-names' and resolve transit depth calculation"
   ```
   *(To abort a broken merge and restore the pre-merge state, execute `git merge --abort`)*.

---

## Remote Workflows with GitLab and GitHub

In collaborative research groups, developers interact with remote repositories:

```bash
# List configured remote connections
git remote -v

# Add the course upstream repository
git remote add upstream https://github.com/tiziano1590/comp_astro_25.git

# Fetch remote branches and commits without modifying local working directory
git fetch upstream

# Pull changes from remote (fetch + merge into active branch)
git pull origin main

# Push committed local changes to remote
git push origin feature/mcmc

# Track an existing remote branch locally
git checkout -t origin/feature/mcmc
```

### Collaborative Workflow for the Course Project
1. **Fork** the course template repository on GitHub/GitLab.
2. Add teammates as **Collaborators** under repository settings with write permissions.
3. Clone your group fork to your local environment (laptop / Docker container / CloudVeneto VM).
4. Create dedicated topic branches for specific assignments (e.g., `feature/module1-transit-detection`, `feature/module2-taurex-retrieval`).
5. Open **Merge Requests / Pull Requests** to review code before integrating into `main`.

---

## Related Notes
- [00_Course_Overview_and_Computational_Laboratories](./00_Course_Overview_and_Computational_Laboratories.html)
- [01_Linux_Containers_and_Docker_Architecture](./01_Linux_Containers_and_Docker_Architecture.html)
- [03_Modular_Python_Software_Architecture_and_Packaging](./03_Modular_Python_Software_Architecture_and_Packaging.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./00_Course_Overview_and_Computational_Laboratories.html" class="backlink-item">00_Course_Overview_and_Computational_Laboratories</a></li>
    <li class="backlink-item-wrap"><a href="./01_Linux_Containers_and_Docker_Architecture.html" class="backlink-item">01_Linux_Containers_and_Docker_Architecture</a></li>
    <li class="backlink-item-wrap"><a href="./03_Modular_Python_Software_Architecture_and_Packaging.html" class="backlink-item">03_Modular_Python_Software_Architecture_and_Packaging</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Computational/Distributed%20version%20control%20DAG%20and%20GitLab%20workflows.html" class="backlink-item">Distributed version control DAG and GitLab workflows</a></li>
  </ul>
</div>
