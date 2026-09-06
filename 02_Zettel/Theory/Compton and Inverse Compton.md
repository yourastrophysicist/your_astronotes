---
layout: default
title: "Compton and Inverse Compton"
---

## Thomson scattering (classical limit)

In classical physics, when $h\nu \ll mc^2$ (photon energy much less than electron rest mass),
	the interaction is **Thomson scattering** — an **elastic** process
		neither the kinetic energy of the particle nor the energy of the photon are modified

---
## Compton scattering
<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2002.20.13.png" | relative_url }}" alt="Screenshot 2026-04-07 at 02.20.13" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
When $h\nu \gtrsim mc^2$, the interaction is no longer elastic
	there is an **exchange of energy** between photon and electron
		described by the **Klein-Nishina differential cross section**:
$$\frac{d\sigma_{KN}}{d\Omega} = \frac{3}{16\pi}\sigma_T \left(\frac{\mathcal{E}_f}{\mathcal{E}_i}\right)^2 \left(\frac{\mathcal{E}_i}{\mathcal{E}_f} + \frac{\mathcal{E}_f}{\mathcal{E}_i} - \sin^2\theta\right)$$

where $\sigma_T$ is the Thomson cross section and the relation between
	energy before ($i$) and after ($f$) the interaction is:
$$\mathcal{E}_f = \frac{\mathcal{E}_i}{1 + \frac{\mathcal{E}_i}{mc^2}(1-\cos\theta)}$$

Converting to wavelengths:
$$\lambda_f - \lambda_i = \lambda_C(1 - \cos\theta)$$

where $\lambda_C = \frac{h}{mc} \simeq 0.02426~\mathring{A}$ is the **Compton wavelength**

The scattered photon **loses energy** in favor of the particle that gains velocity
	Compton scattering is therefore a **heating mechanism** for electrons

---

## Klein-Nishina cross section properties

In the **Thomson regime** ($\mathcal{E}_i \approx \mathcal{E}_f$):
$$\frac{d\sigma_{KN}}{d\Omega} = \frac{3}{16\pi}\sigma_T(1 + \cos^2\theta)$$

Integrating over the solid angle:
$$\sigma_{KN} = \frac{3}{4}\sigma_T\left\{\frac{1+x}{x^3}\left[\frac{2x(1+x)}{1+2x} - \ln(1+2x)\right] + \frac{1}{2x}\ln(1+2x) - \frac{1+3x}{(1+2x)^2}\right\}$$

where $x = \frac{h\nu}{mc^2}$

Key behaviors:
	$\sigma_{KN} \leq \sigma_T$ always
	$\sigma_{KN}$ **decreases** as energy increases
	**forward scattering** is more probable when energy increases
	forward-backward scattering becomes equally probable when energy decreases

---

## Inverse Compton scattering

When a relativistic electron ($x \ll 1$ in the electron rest frame)
	hits a **low-energy photon**,
		the electron transfers part of its energy to the photon
			this is the **Inverse Compton scattering**
				it is the main **cooling mechanism** for high energy electrons

### Frame transformation

We distinguish between:
	electron rest frame (superscript $'$)
	laboratory frame (no superscript)

Energies in the two frames are related by the Doppler formula:
$$\mathcal{E}'_i = \mathcal{E}_i \gamma(1 - \beta\cos\theta_i)$$
$$\mathcal{E}'_f = \frac{\mathcal{E}_f}{\gamma(1 + \beta\cos\theta'_f)}$$

where $\beta = v/c$ and $\gamma$ is the Lorentz factor

### Energy boost

In the electron rest frame the energy is almost unchanged (Thomson regime),
	so $\mathcal{E}'_f = \mathcal{E}'_i$, and in the laboratory frame:
$$\mathcal{E}_f = \mathcal{E}_i \gamma^2 (1 - \beta\cos\theta_i)(1 + \beta\cos\theta'_f)$$

the energy of the scattered photon increases by a factor of order $\gamma^2$

The **maximum energy** (head-on collision: $\theta_i = \pi$, $\theta'_f = 0$):
$$\mathcal{E}_{f,max} \approx 4\gamma^2\mathcal{E}_i$$

### Emitted power

The power emitted by the electron due to inverse Compton is:
$$P_{IC} = \frac{4}{3}\sigma_T c\gamma^2\left(\frac{v}{c}\right)^2 U_{ph}$$

where $U_{ph}$ is the **photon energy density**

Comparing with the synchrotron power (using magnetic energy density $U_B = \frac{B^2}{8\pi}$):
$$\frac{P_{IC}}{P_{syn}} \sim \frac{U_{ph}}{U_B}$$

when $U_{ph}/U_B < 1$: **synchrotron dominant**
when $U_{ph}/U_B > 1$: **inverse Compton dominant**

### Cooling time

$$t_{c,IC} = \frac{\mathcal{E}}{P} \propto \frac{1}{\gamma}$$

it depends on the relativistic beaming
	note that in synchrotron emission the cooling time also depends on $B^2$

---

## Comptonisation

A source emitting a blackbody spectrum whose photons flow through a cloud of free electrons
	can undergo:
		**Compton scattering** when $\mathcal{E}_{ph} > \mathcal{E}_e$ (photon heats electron)
		**Inverse Compton scattering** when $\mathcal{E}_{ph} < \mathcal{E}_e$ (electron heats photon)
	the emergent spectrum can be different from the incident one
		this process is called **Comptonisation**

We define the **optical depth** for electron scattering $\tau_{es}$
	as the ratio between the size of the cloud and the mean free path
		when $\tau_{es} \gg 1$: number of collisions $N_{es} = \tau_{es}^2$
		when $\tau_{es} < 1$: $N_{es} \simeq \tau_{es}$
		in general: $N_{es} \simeq \max(\tau_{es}, \tau_{es}^2)$

The average energy change per single scattering is:
$$\frac{\Delta\mathcal{E}}{\mathcal{E}} = \frac{4k_B T_e}{m_e c^2}$$

For a significant change of energy:
$$1 \simeq \frac{4k_B T_e}{m_e c^2} N_{es} = \frac{4k_B T_e}{m_e c^2}\max(\tau_{es}, \tau_{es}^2)$$

This defines the **Compton y-parameter**:
$$y = \frac{4k_B T_e}{m_e c^2} N_{es}$$

Regimes:
	$y \ll 1$: Compton scattering in act, gas **heats up**,
		emergent spectrum is a modified blackbody with negligible changes
	$y \gg 1$: Inverse Compton in act, gas **cools down**,
		emergent spectrum is significantly modified — **saturated Comptonisation**
	$y \sim 1$: **unsaturated Comptonisation**,
		balance between heating and cooling,
			a temperature can be defined — the **Compton temperature** $T_C$

---

## Astrophysical examples (Inverse Compton)

For $\gamma \sim 1000$:
	a radio photon ($\nu_0 = 10^9~\text{Hz}$) $\rightarrow$ ultraviolet photon ($\nu_0 = 10^{15}~\text{Hz}$)
	a far-infrared photon ($\nu_0 = 3 \cdot 10^{12}~\text{Hz}$) $\rightarrow$ X-ray photon ($12.4~\text{keV}$)
	a visible photon ($\nu_0 = 4.8 \cdot 10^{14}~\text{Hz}$) $\rightarrow$ $\gamma$-ray photon ($2~\text{MeV}$)
