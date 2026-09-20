---
layout: "default"
title: "Python Class Architecture for Astronomical Pipelines"
---
# Python Class Architecture for Astronomical Pipelines

Object-Oriented Programming (OOP) ensures clean separation between data ingestion, calibration, coordinate tracking, and photometric extraction.

## Core Design Principles
1. **Encapsulation of State**: bundling image arrays, variance matrices, and FITS header metadata inside a single instance to prevent data desynchronization.
2. **Immutability of Raw Inputs**: raw data are never overwritten in-place; each reduction stage yields a new calibrated product.
3. **Structured Persistence**: reduction parameters and final light curve tables are serialized to self-contained structured formats (e.g., Python `pickle` or FITS binary tables).

## Reusable Class Blueprint
```python
class AstronomicalPipeline:
    def __init__(self, raw_data, header, gain, ron):
        self.raw = np.asarray(raw_data, dtype=float)
        self.header = header
        self.gain = float(gain)
        self.ron = float(ron)
        self.calibrated = None
        self.variance = None

    def apply_calibration(self, master_bias, master_flat_norm):
        net_adu = np.maximum(0.0, self.raw - master_bias)
        self.calibrated = net_adu / master_flat_norm
        var_raw = (net_adu / self.gain) + (self.ron ** 2)
        self.variance = var_raw / (master_flat_norm ** 2)
        return self.calibrated, self.variance
```

## Related Notes
- [[Malavolta 06 - Python Class Design for Photometry Pipelines]]
- [[Science Frame Calibration and Variance Propagation]]



## Linked References

- [[Modular Python packaging and scientific software architecture]]
- [[Astrophysics_Laboratory_2_MOC]]
- [[Computational_Astrophysics_MOC]]


