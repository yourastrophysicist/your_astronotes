---
layout: "default"
title: "Python Class Architecture for Astronomical Pipelines"
---
{% raw %}
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
- [Malavolta 06 - Python Class Design for Photometry Pipelines](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2006%20-%20Python%20Class%20Design%20for%20Photometry%20Pipelines.html)
- [Science Frame Calibration and Variance Propagation](./Science%20Frame%20Calibration%20and%20Variance%20Propagation.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Computational_Astrophysics/03_Modular_Python_Software_Architecture_and_Packaging.html" class="backlink-item">03_Modular_Python_Software_Architecture_and_Packaging</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Lesson%2001%20-%20Linux%20Environment%20and%20Scientific%20Python%20Setup.html" class="backlink-item">Lesson 01 - Linux Environment and Scientific Python Setup</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2006%20-%20Python%20Class%20Design%20for%20Photometry%20Pipelines.html" class="backlink-item">Malavolta 06 - Python Class Design for Photometry Pipelines</a></li>
    <li class="backlink-item-wrap"><a href="./Modular%20Python%20packaging%20and%20scientific%20software%20architecture.html" class="backlink-item">Modular Python packaging and scientific software architecture</a></li>
  </ul>
</div>
