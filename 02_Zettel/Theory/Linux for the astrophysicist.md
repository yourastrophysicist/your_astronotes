---
layout: default
title: "Linux for the astrophysicist"
---

# Linux for the astrophysicist

every astrophysics computing environment runs on Linux (or macOS, which is unix-like). production telescopes, supercomputer clusters, my laptop's terminal — same shell, same command set. fluency in bash is non-negotiable for research, and it underwrites Mapelli's chapter 1 of the course notes.

## the shell is bash

when I open a terminal, I am talking to a **shell** (almost always `bash` or `zsh`). it interprets my commands and runs programs. the shell is itself a programming language, but I almost never write big shell scripts — I write python that *calls* shell tools when needed.

## the file system

unix is "everything is a file." a tree rooted at `/`:

- `/home/sxafq/` (Linux) or `/Users/sxafq/` (macOS): my home directory, abbreviated `~`
- `/usr/local/`: programs I (or homebrew) installed
- `/tmp/`: scratch space, wiped on reboot
- `/dev/`: device files (the camera, the disk, `/dev/null`)

## the survival commands

```bash
ls            # list files in current dir
ls -la        # long format, hidden files, permissions
cd path       # change directory; `cd ~` home, `cd -` previous, `cd ..` parent
pwd           # print working directory
mkdir name    # make a directory
mv old new    # rename or move
cp old new    # copy
rm file       # delete (no undo!)
rm -r dir     # delete a directory recursively
cat file      # print file to terminal
less file     # paginated view, q to quit
head file     # first 10 lines
tail file     # last 10 lines
tail -f log   # follow a growing file (live log)
```

## piping and redirection

the unix superpower. each program reads from stdin, writes to stdout. pipes connect them:

```bash
cat data.txt | wc -l                # count lines
ls | grep ".py"                     # files matching pattern
sort file.txt | uniq -c             # count distinct lines
python script.py > output.log       # redirect stdout to a file
python script.py 2> errors.log      # redirect stderr
python script.py > out.log 2>&1     # both to one file
```

## finding things

```bash
find . -name "*.py"                 # files matching name
grep -r "TODO" .                    # search recursively for TODOs
grep -n "import numpy" *.py         # find imports with line numbers
which python                        # path to the python being used
```

## environment variables

```bash
echo $HOME                          # my home directory
echo $PATH                          # where bash looks for commands
export OMP_NUM_THREADS=4            # set a variable for child processes
```

## ssh, the remote-computing portal

most of the time I am running code on a cluster, not my laptop:

```bash
ssh user@cluster.unipd.it           # log in
scp file.py user@cluster:~/work/    # copy a file there
rsync -avz local/ user@cluster:remote/   # sync directories
ssh user@cluster "ls ~/work"        # run one command remotely
```

## the .bashrc / .zshrc

a config file in `~` that runs every time I open a new shell. put aliases and exports there:

```bash
# ~/.zshrc snippets
alias ll='ls -la'
alias jl='jupyter lab'
export PATH="$HOME/miniconda3/bin:$PATH"
```

## permissions

```bash
chmod +x script.sh                  # make executable
chmod 644 file                      # rw for owner, r for others
ls -l                               # see who can do what
```

## process management

```bash
ps aux | grep python                # who's running python
top                                 # live process table
kill 1234                           # send SIGTERM to PID 1234
kill -9 1234                        # SIGKILL, last resort
nohup python long_job.py &          # run in background, survives logout
```

## why this matters for the exam

the exam happens at a real computer running Linux/macOS. when I write a python script, I am also operating in this environment: navigating to my work folder, running `python ex1.py`, viewing the plot, copying files to the upload location. fluency saves minutes that compound across four exercises.

## see also

- [Python language essentials](../../02_Zettel/Theory/Python language essentials.html)
- [The conda environment](../../02_Zettel/Theory/The conda environment.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
