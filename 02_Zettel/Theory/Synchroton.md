---
layout: default
title: "Synchroton"
---

When a particle moves inside a magnetic and electric field
	it is exposed to the **Lorentz force**:
$$\vec{F}_L = \frac{d\vec{p}}{dt} = q\vec{E} + \frac{q}{c}\vec{v} \wedge \vec{B}$$

The magnetic field $\vec{B}$ changes only the **direction** of the particle
	the component of velocity orthogonal to $\vec{B}$ (i.e. $\vec{v}_\perp$)
		becomes the velocity of the **circular motion** caused by the Lorentz force
	the component parallel to $\vec{B}$ (i.e. $\vec{v}_\parallel$)
		is a drift velocity that causes a **helical motion** around the field lines
<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2002.18.42.png" | relative_url }}" alt="Screenshot 2026-04-07 at 02.18.42" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
---

## Synchrotron frequency

The frequency of the circular motion in the relativistic case,
	also called the **synchrotron frequency**, is:
$$\omega_L = \frac{qB}{\gamma mc}$$

Assuming $\vec{E} = 0$ and considering relativistic momentum:
$$\frac{d\vec{p}}{dt} = \gamma m \frac{d\vec{v}}{dt} = \frac{q}{c}\vec{v} \times \vec{B}$$

because of the vector product there is no acceleration component $\vec{a}_\parallel$,
	but only $\vec{a}_\perp = \omega_L \vec{v}_\perp$

---

## Emitted power

The emitted power is:
$$P = \frac{2}{3c^3}q^2\gamma^4 a_\perp^2 = \frac{2}{3}\left(\frac{q^2}{mc^2}\right)^2 \gamma^2 \frac{v_\perp^2}{c} B^2$$

where $\frac{q^2}{mc^2}$ is the classical radius of the electron (if $q = e$)

Therefore $P \propto \gamma^2 v_\perp^2 B^2$:
	the power is **stronger** for high-$\gamma$ particles and/or strong $\vec{B}$

Because of radiation emission, electrons are **losing energy**
	their temperature decreases, and we can evaluate the **cooling time**:
$$t_{c,syn} = \frac{\mathcal{E}}{P} = \frac{\gamma mc^2}{P} \propto \frac{1}{\gamma v_\perp^2 B^2}$$

the cooling time is **smaller** for high kinetic energy and strong magnetic field

---

## Spectrum of a single particle

The spectrum emitted by the individual particle is:
$$dP = \frac{\sqrt{3}q^3 B \sin\theta}{mc^2} F\left(\frac{\nu}{\nu_c}\right) d\nu$$

where $\nu_c$ is the **critical frequency**:
$$\nu_c = \frac{3}{4\pi}\gamma^2 \frac{qB\sin\theta}{mc} \propto \gamma^3 \omega_L$$

The difference between $\nu_c$ and $\omega_L$ is due to **relativistic beaming**
	which confines the emission within a cone of angle $\sim \frac{1}{\gamma}$

The shape of $F(x)$ with $x = \frac{\nu}{\nu_c}$:
	rises as $f_\nu \propto \nu^{1/3}$ below $\nu_c$
	peaks near $\nu_c$
	drops exponentially above $\nu_c$

<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2002.19.33.png" | relative_url }}" alt="Screenshot 2026-04-07 at 02.19.33" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
---

## Power-law spectrum (ensemble of particles)

The energy of particles in cosmic sources follows a **power-law distribution**
	the observed spectrum is the convolution of $dP$ with $dN$

In the approximation that the spectrum emitted by a single particle
	is a Dirac function $P_\nu \sim P\delta(\nu - \nu_c)$:
$$f_\nu = \int_{\mathcal{E}_{min}}^{\mathcal{E}_{max}} P_\nu N(\mathcal{E}) d\mathcal{E} \quad \Rightarrow \quad f_\nu \propto \nu^{-\alpha}$$

this is a **power-law spectrum** where the **spectral index** is:
$$\alpha = \frac{s-1}{2}$$

The spectrum is defined within $[\nu_{min}, \nu_{max}]$:
	when $\nu < \nu_{min}$: $f_\nu \propto \nu^{1/3}$
	when $\nu > \nu_{max}$: $f_\nu \propto e^{-\nu/\nu_{max}}$ (drops quickly)
