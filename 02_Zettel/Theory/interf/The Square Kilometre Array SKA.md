---
layout: default
title: "The Square Kilometre Array SKA"
---

# The Square Kilometre Array (SKA)

the next-generation radio interferometer, currently under construction. when complete (~2030), it will be the most sensitive radio interferometer ever built — survey speed and sensitivity orders of magnitude better than any existing instrument.

## the architecture

two phases, two locations:

### SKA-Mid (South Africa)

- **197 antennas** of 15m diameter, plus the existing 64 MeerKAT 13.5m antennas
- baselines: 0.1 - 150 km
- frequency: 0.35 - 15.4 GHz (5 bands)
- sensitivity: ~30 μJy/beam in 1 hr at 1 GHz
- field of view: ~1 deg² primary beam

### SKA-Low (Australia)

- **131000 dipole antennas** in 512 stations across Western Australia
- baselines: 0.05 - 65 km
- frequency: 50-350 MHz (low-frequency!)
- sensitivity: extraordinary at meter wavelengths
- field of view: many square degrees

both facilities will use phase-up beam-forming and offline post-processing to operate as a single coherent interferometer.

## the science goals

SKA's core science goals (the **Key Science Projects**):

### 1. cosmology with HI 21cm

map cosmological-scale neutral hydrogen distribution, using the 21cm line as a tracer of cosmic structure formation:
- **Epoch of Reionization** (cosmic dawn): the first stars and galaxies, 13+ billion years ago
- **Dark Ages** (cosmological signal between recombination and first stars)
- **post-Reionization**: HI surveys probing dark matter

### 2. transients and variables

continuous monitoring of large fields:
- **fast radio bursts** (FRBs): millisecond bursts of unknown origin, often extragalactic
- **gravitational-wave electromagnetic counterparts**: BNS mergers, etc.
- **AGN variability**: time-resolved AGN observations

### 3. pulsar timing arrays

extreme expansion of pulsar timing for gravitational-wave background detection:
- ~10000+ MSPs to be discovered and timed
- timing precision improved by 10-100×
- detect *individual* SMBH binaries (not just background)

### 4. magnetic-field surveys

polarization observations of millions of AGN and galaxies. probe the cosmic magnetic-field history.

### 5. SETI (Search for Extraterrestrial Intelligence)

continuous wide-field surveys for narrow-band signals from intelligent civilizations. SKA's sensitivity is sufficient to detect any signal from any nearby star with reasonable transmitter power.

## the technical challenges

three:

### 1. data rates

SKA-Low: ~1 PB/day raw data. ~100 TB/day after early processing. for the full 10-year operations, exabytes of data.

solution: data-reduction pipelines run automatically on supercomputers attached to the facilities. only science-ready products are archived.

### 2. RFI

at GHz, terrestrial RFI is severe. solutions:
- radio quiet zones around the facilities
- automated RFI excision in the correlator
- careful frequency planning

### 3. post-processing scale

the volume of data exceeds traditional astronomy archives. requires:
- new database technologies
- cloud-scale computational infrastructure
- machine-learning for automated pipeline operations

## the timeline

SKA construction has been underway since 2021:
- **2024-2027**: SKA1 construction (precursor for full SKA)
- **2027-2030**: science verification and commissioning
- **2030+**: full science operations

SKA2 (a full-scale upgrade) is planned for the 2040s.

## the data products

SKA will produce:
- continuum images (sensitive to synchrotron, free-free, AGN, galaxies)
- HI 21cm cubes (mapped throughout space)
- pulsar timing data (continuous monitoring of $\sim 10^4$ pulsars)
- transient discovery streams (real-time)
- polarization maps (full Stokes parameters)
- SETI candidate alerts

all of these distributed via science archives and online catalogs.

## the consortia

SKA is a global project:
- **SKA Observatory** (international, hosted by UK/Australia/South Africa)
- ~16 member countries
- thousands of scientists involved

policy decisions made by the SKA Board; scientific governance by the SKA Member Council. open data policies for all datasets.

## the economics

SKA's construction cost: ~€2 billion (already exceeded due to inflation). operating cost: ~€100M/year. fits into international science-funding portfolios.

scientifically, SKA is expected to:
- transform radio astronomy
- complement Earth-based optical instruments (ELT, JWST)
- complement gravitational-wave observatories (LIGO, ET)

## see also

- [Major radio interferometers](../../../02_Zettel/Theory/interf/Major radio interferometers.html)
- [Pulsar timing arrays as interferometers](../../../02_Zettel/Theory/interf/Pulsar timing arrays as interferometers.html)
- [ngVLA Next Generation VLA](../../../02_Zettel/Theory/interf/ngVLA Next Generation VLA.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
