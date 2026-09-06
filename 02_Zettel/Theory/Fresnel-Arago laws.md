---
layout: default
title: "Fresnel-Arago laws"
---

# Fresnel-Arago laws

three laws governing when polarized waves can or cannot produce interference fringes. **fundamental restriction** on which interferometric setups work and which don't. discovered by Fresnel and Arago around 1817-1819, they predate Maxwell but follow elegantly from the wave description of polarization.

## the four laws

### Law 1
> **two coherent beams with mutually orthogonal polarizations cannot interfere.** the fringes never form.

if I split a beam into two paths, each with linear polarization perpendicular to the other, then recombine them — no fringes appear. their electric field oscillations are in independent perpendicular planes; the cross term in the intensity formula vanishes.

mathematically: if $\mathbf{E}_1 = E_0 \hat{\mathbf{x}} \cos(\omega t)$ and $\mathbf{E}_2 = E_0 \hat{\mathbf{y}} \cos(\omega t + \delta)$, the intensity at the detector is

$$I \propto \langle |\mathbf{E}_1 + \mathbf{E}_2|^2 \rangle = \langle E_x^2 \rangle + \langle E_y^2 \rangle = 2 E_0^2 / 2 = E_0^2$$

— constant, no $\delta$ dependence, no fringes (visibility $V = 0$).

### Law 2
> **two coherent beams with parallel polarizations always interfere.**

even for natural (unpolarized) light, *if* both beams happen to have a parallel-polarized component, those components interfere. the intensity formula has the standard scalar wave dependence:

$$I(\delta) = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos\delta$$

### Law 3
> **the two perpendicular-polarized components of natural light cannot interfere with each other to form observable fringes**, even if one is artificially rotated to be parallel to the other.

natural light is *incoherent* between its two perpendicular polarization states. each comes from independent random emissions in the source's atoms, so they have no fixed phase relationship ($\langle \cos\Delta\phi(t) \rangle = 0$). rotating one component into the same polarization as the other doesn't fix this — the underlying time-dependent phases are still independent.

### Law 4
> **two rays polarized at right angles coming from an initially linearly polarized beam can interfere** once brought into a common plane of polarization by an analyzer.

because the parent beam was already linearly polarized (e.g. at $45^\circ$), its orthogonal projections have a fixed, deterministic phase relationship. passing them through an analyzer at angle $\theta_A$ projects both into a single axis, restoring fringes with visibility $V(\theta_A) = |\sin(2\theta_A)|$.

## the physical reason

interference is the cross-term $\langle \mathbf{E}_1 \cdot \mathbf{E}_2 \rangle$. this dot product picks out only the *parallel* component of the two electric fields:

- **parallel polarization**: full dot product → strong cross term → fringes
- **orthogonal polarization**: zero dot product → no cross term → no fringes

Law 3 follows because natural light's perpendicular polarization components originate from independent emission events at random times, so their relative phase is random and time-averaging kills any cross term.

## the experimental demonstration (Ivković et al. 2024 setup)

traditional Young's double-slit masks with polarizers lose $>95\%$ of light intensity. a modern, high-efficiency setup by Ivković, Jovanović, and Obradović (*Eur. J. Phys.* **45** 035303, 2024) uses an **Iceland spar (calcite $\text{CaCO}_3$) crystal** and a **diverging lens**.

<img src="{{ "/assets/images/ivkovic_2024_fig2.png" | relative_url }}" alt="ivkovic_2024_fig2" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
*Figure 2: schematic of the experimental setup with calcite crystal and diverging lens for red (a) and green (b) lasers.*

### what makes it work: the diverging lens

placing a negative (diverging) lens after the calcite crystal rapidly expands the small beam separation $d$ over a short distance ($L \approx 550 - 910\text{ mm}$), creating a large, bright region of overlapping spots easily visible to a whole audience.

changing the distance of the lens from the calcite crystal alters the degree of spot overlap and fringe period $\Delta x$:

<img src="{{ "/assets/images/ivkovic_2024_fig4_rg.png" | relative_url }}" alt="ivkovic_2024_fig4_rg" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
*Figure 4: greater spot overlap photos. (a, b) without analyzer: no fringes (Law 1); (c, d) with analyzer: sharp fringes appear (Law 4).*

<img src="{{ "/assets/images/ivkovic_2024_fig5_rg.png" | relative_url }}" alt="ivkovic_2024_fig5_rg" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
*Figure 5: less spot overlap photos on screen without (a, b) and with (c, d) analyzer.*

### 1D intensity distributions

processing smartphone photos in quantitative image software (ImageJ/SciPy) yields 1D spatial intensity curves $I(x)$:

<img src="{{ "/assets/images/ivkovic_2024_fig6_rg.png" | relative_url }}" alt="ivkovic_2024_fig6_rg" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
*Figure 6: greater overlap cropped fringe photos (a, b) and extracted 1D intensity curves (c, d) for red and green light.*

<img src="{{ "/assets/images/ivkovic_2024_fig7.png" | relative_url }}" alt="ivkovic_2024_fig7" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
*Figure 7: less overlap cropped fringe photos (a, b) and extracted 1D intensity curves (c, d).*

## the wire experiment reconstruction

the same setup allows reconstructing Fresnel and Arago's original 1819 experiment with a thin metal wire ($\varnothing \approx 0.2-0.5\text{ mm}$):

<img src="{{ "/assets/images/ivkovic_2024_fig1_rg.webp" | relative_url }}" alt="ivkovic_2024_fig1_rg" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
*Figure 1: schematic diagrams of the wire experiment setup for red (a) and green (b) lasers.*

<img src="{{ "/assets/images/ivkovic_2024_fig3_rg.png" | relative_url }}" alt="ivkovic_2024_fig3_rg" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
*Figure 3: wire experiment photos. (a, b) without analyzer: no fringes inside geometric shadow (Law 1); (c, d) with analyzer: sharp interference fringes appear in shadow (Law 4).*

## mathematical formulation and measurement

with a diverging lens, the fringe spacing $\Delta x$ is:

$$\Delta x = \lambda \cdot \frac{L}{d \cdot u} \implies \lambda = \frac{\Delta x \cdot d \cdot u}{L} = \frac{\Delta x \cdot d \cdot d_S}{L \cdot d_L}$$

where $u = d_S / d_L$ is the lens magnification (ratio of screen spot separation $d_S$ to lens position spot separation $d_L$), and $d$ is the calcite spot separation:

<img src="{{ "/assets/images/ivkovic_2024_fig8.png" | relative_url }}" alt="ivkovic_2024_fig8" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
*Figure 8: calcite exit surface spots on graph paper ($d = 1.144\text{ mm}$ red; $d = 1.209\text{ mm}$ green).*

### experimental measurement table (Ivković et al. 2024)

| quantity | He–Ne laser (red) | Nd:YVO₄ laser (green) |
| :--- | :--- | :--- |
| distance to lens ($L$) | $550 \pm 1\text{ mm}$ | $910 \pm 1\text{ mm}$ |
| fringe spacing ($\Delta x$) | $3.507 \pm 0.009\text{ mm}$ | $7.36 \pm 0.02\text{ mm}$ |
| calcite spot separation ($d$) | $1.144 \pm 0.002\text{ mm}$ | $1.209 \pm 0.005\text{ mm}$ |
| magnification ($u = d_S/d_L$) | $11.50 \pm 0.06$ | $18.4 \pm 0.1$ |
| calculated wavelength ($\lambda_{\text{exp}}$) | **$634 \pm 7\text{ nm}$** | **$531 \pm 7\text{ nm}$** |
| nominal wavelength ($\lambda_{\text{nom}}$) | **$633\text{ nm}$** | **$532\text{ nm}$** |
| relative uncertainty | **$< 1.1\%$** | **$< 1.3\%$** |

## the practical consequences

three:

### 1. polarization-handling instruments

every optical interferometer must take Fresnel-Arago seriously:
- if light passes through a polarizing element that selects perpendicular polarization in the two arms, fringes vanish
- birefringent materials (calcite, quartz) accidentally introduce polarization differences
- dichroic mirrors and beam splitters can have polarization-dependent reflection

solution: keep the polarization state matched in both arms, or *select* a single polarization explicitly.

### 2. the half-wave plate trick

if the two arms accidentally have orthogonal polarizations, a half-wave plate in one arm rotates that arm's polarization to match the other, restoring fringes. this is a standard trick in optical-bench interferometry.

### 3. polarization interferometers

some specialized instruments *exploit* Law 1 deliberately: by using crossed polarizers, you can suppress the on-axis interference and see only the residual non-classical effects (used in quantum-optics experiments, ellipsometry).

## why this matters in astronomy

stellar light is mostly unpolarized. so by Law 3, the two perpendicular components arrive at the interferometer independently. each component interferes with itself but not with the other.

practical consequence: a stellar interferometer effectively measures the visibility of *one polarization at a time*. instruments either:
- use one polarization (throw away half the light, simpler)
- use both polarizations independently (full Stokes information, more complex)

GRAVITY at VLTI does both in different observing modes.

## the deep modern view

quantum-mechanically, Fresnel-Arago is a statement about *which-path information*. perpendicular polarizations carry distinguishable which-path information; parallel polarizations don't. **distinguishable which-path information destroys interference**.

so Fresnel-Arago, classical optics from 1819, is the classical analogue of the quantum complementarity principle. light's wave-particle nature is encoded in this 200-year-old result.

## see also

- [Light waves and the EM spectrum](../../02_Zettel/Theory/interf/Light waves and the EM spectrum.html)
- [Polarization in interferometry](../../02_Zettel/Theory/interf/Polarization in interferometry.html)
- [Optical path difference OPD](../../02_Zettel/Theory/interf/Optical path difference OPD.html)
- [Superposition and interference](../../02_Zettel/Theory/interf/Superposition and interference.html)
- [Beam splitter physics](../../02_Zettel/Theory/interf/Beam splitter physics.html)
- [Coherence function and visibility](../../02_Zettel/Theory/interf/Coherence function and visibility.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
